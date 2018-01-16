function parseExpression(program) {
	program = skipSpace(program);
	var match, expr;

	if (match = /^"([^"]*)"/.exec(program)) {
		expr = {type: 'value', value: match[1]};
	} else if (match = /^\d+\b/.exec(program)) {
		expr = {type: 'value', value: Number(match[0])};
	} else if (match = /^[^\s(),"]+/.exec(program)) {
		expr = {type: 'word', name: match[0]};
	} else {
		throw new SyntaxError('Unexpected syntax: ' + program);
	}

	return parseApply(expr, program.slice(match[0].length));
}

function skipSpace(string) {
	var commentPattern = /^\\#.*$/m;
	var first = string.search(/\S/);

	if (first == -1) return '';
	if (first == 0 && string.search(commentPattern) == -1) {
		return string;
	}

	var aux = string.slice(first);

	if (commentPattern.test(aux)) {
		var match = commentPattern.exec(aux);
		aux = aux.slice(match[0].length);
	}
	
	return skipSpace(aux);
}

function parseApply(expr, program) {
	program = skipSpace(program);

	if (program[0] != '(') {
		return {expr: expr, rest: program};
	}

	program = skipSpace(program.slice(1));
	expr = {type: 'apply', operator: expr, args: []};

	while (program[0] != ')') {
		var arg = parseExpression(program);
		expr.args.push(arg.expr);
		program = skipSpace(arg.rest);

		if (program[0] == ',') {
			program = skipSpace(program.slice(1));
		} else if (program[0] != ')') {
			throw new SyntaxError("Expected ',' or ')': " + program);
		}
	}

	return parseApply(expr, program.slice(1));
}

function parse(program) {
	var result = parseExpression(program);

	if (skipSpace(result.rest).length > 0) {
		throw new SyntaxError('Unexpected text after program');
	}

	return result.expr;
}

function evaluate(expr, env) {
	switch(expr.type) {
		case 'value' :
			return expr.value;

		case 'word':
			if (expr.name in env) {
				return env[expr.name];
			} else {
				throw new ReferenceError('Undefined variable: ' + expr.name);
			}

		case 'apply':
			if (expr.operator.type == 'word' &&
				expr.operator.name in specialForms) {
				return specialForms[expr.operator.name](expr.args, env);
			}

			var op = evaluate(expr.operator, env);

			if (typeof op != 'function') {
				throw new TypeError('Applying a non-function.');
			}

			return op.apply(null, expr.args.map(function(arg) {
				return evaluate(arg, env);
			}));
	}
}

var specialForms = Object.create(null);

specialForms['if'] = function(args, env) {
	if (args.length != 3) {
		throw new SyntaxError('Bad number of args to if');
	}

	if (evaluate(args[0], env) !== false) {
		return evaluate(args[1], env);
	} else {
		return evaluate(args[2], env);
	}
};

specialForms['while'] = function(args, env) {
	if (args.length != 2) {
		throw new SyntaxError('Bad number of args to while');
	}

	while (evaluate(args[0], env) !== false) {
		evaluate(args[1], env);
	}

	return false;
};

specialForms['do'] = function(args, env) {
	var value = false;

	args.forEach(function(arg) {
		value = evaluate(arg, env);
	});

	return value;
};

specialForms['define'] = function(args, env) {
	if (args.length != 2 || args[0].type != 'word') {
		throw new SyntaxError('Bad use of define');
	}

	var value = evaluate(args[1], env);

	env[args[0].name] = value;

	return value;
};

specialForms['set'] = function(args, env) {
	if (args.length != 2 || args[0].type != 'word') {
		throw new SyntaxError('Bad use of set');
	}

	var value = evaluate(args[1], env);

	function setInScope(name, value, env) {
		if (env == null) {
			throw new ReferenceError('Variable ' + args[0].name + ' is undefined');		
		} else if (Object.prototype.hasOwnProperty.call(env, args[0].name)) {
			env[name] = value;
			return value;
		} else {
			return setInScope(name, value, Object.getPrototypeOf(env));
		}			
	}

	return setInScope(args[0].name, value, env);
};

specialForms['fun'] = function(args, env) {
	if (!args.length) {
		throw new SyntaxError('Functions need a body');
	}

	function name(expr) {
		if (expr.type != 'word') {
			throw new SyntaxError('Arg names must be words');
		}
		return expr.name;
	}

	var argNames = args.slice(0, args.length - 1).map(name);
	var body = args[args.length -1];

	return function() {
		if (arguments.length != argNames.length) {
			throw new TypeError('Wrong number of arguments');
		}

		var localEnv = Object.create(env);

		for (var i = 0; i < arguments.length; i++) {
			localEnv[argNames[i]] = arguments[i];
		}

		return evaluate(body, localEnv);
	};
};

specialForms['array'] = function(args, env) {
	return args.map(function(arg) {
		return evaluate(arg, env);
	});
}

specialForms['length'] = function(args, env) {
	if (args.length != 1) {
		throw new SyntaxError('Bad use of length');
	}

	return evaluate(args[0], env).length;
}

specialForms['element'] = function(args, env) {
	if (args.length != 2) {
		throw new SyntaxError('Bad use of length');
	}

	return evaluate(args[0], env)[evaluate(args[1], env)];
}

var topEnv = Object.create(null);

topEnv['true'] = true;
topEnv['false'] = false;

['+', '-', '*', '/', '==', '<', '>'].forEach(function(op) {
	topEnv[op] = new Function('a, b', 'return a ' + op + ' b;');
});

topEnv['print'] = function(value) {
	console.log(value);
	return value;
}

function run() {
	var env = Object.create(topEnv);
	var program = Array.prototype.slice.call(arguments, 0).join('\n');
	
	return evaluate(parse(program), env);
}

run('do(define(total, 0),',
	'   define(count, 1),',
	'   while(<(count, 11),',
	'         do(define(total, +(total, count)),',
	'            define(count, +(count, 1)))),',
	'   print(total))');

run('do(define(plusOne, fun(a, +(a, 1))),',
	'   print(plusOne(10)))');

run('do(define(pow, fun(base, exp,',
	'     if(==(exp, 0),',
	'        1,',
	'        *(base, pow(base, -(exp, 1)))))),',
	'   print(pow(2, 10)))');

// EXERCISES implemented above

// arrays
run('do(define(x, 3),',
	'   define(arr, array(4,5,3,1,0,10,x)),',
	'   print(length(arr)),',
	'   print(element(arr, 2)),',
	'   print(element(arr, x)),',
	'   print(element(arr, 6)),',
	'   print(element(array(9,8,7,6,5,4,3), 2)),',
	'   print(length(array(9,8,7,6,5,4,3,2,1,0,10,12))),',
	'   print(element(arr, 5)))');

// closure
run('do(define(f, fun(a, fun(b, +(a, b)))),',
	'   print(f(4)(5)))');

// comments
run('do(print(101),',
	'   \\# this is a comment',
	'   \\# print(0),',
	'   print(66), \\# this is an inline comment',
	'   print(18))');

// fixing scope
run('do(define(a, 10),',
	'   print(a),',
	'   define(increaseA, fun(b, set(a, +(a, b)))),',
	'   increaseA(13),',
	'   print(a))');