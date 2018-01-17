// TODO

/* HINT:
One way to solve this is to give the sequence objects state, meaning their
properties are changed in the process of using them. You could store a
counter that indicates how far the sequence object has advanced.
Your interface will need to expose at least a way to get the next element
and to find out whether the iteration has reached the end of the sequence
yet. It is tempting to roll these into one method, next , which returns null
or undefined when the sequence is at its end. But now you have a problem
when a sequence actually contains null . So a separate method (or getter
property) to find out whether the end has been reached is probably
preferable.
Another solution is to avoid changing state in the object. You can
expose a method for getting the current element (without advancing
any counter) and another for getting a new sequence that represents the
remaining elements after the current one (or a special value if the end
of the sequence is reached). This is quite elegant—a sequence value will
“stay itself” even after it is used and can thus be shared with other code
without worrying about what might happen to it. It is, unfortunately,
also somewhat inefficient in a language like JavaScript because it involves
creating a lot of objects during iteration.*/