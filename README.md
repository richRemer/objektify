Objektify
=========
The `objektify` module provides utility functions for working with objects.
The following functions are provided: `copy`, `extend`, `merge`, `mixin`, and
`clone`.

Usage
-----

### The `copy` function
The `copy` function copies all enumerable properties from a source object to a
target object and returns the target object.

```js
var copy = require("objektify").copy,
    obj = copy(new MyObject(), {foo: "bar"});
```

### The `extend` function
The `extend` function creates a new object, sets the prototype and any extra
properties provided, then returns the new object.

```js
var extend = require("objektify").extend,
    proto = {foo: "bar"},
    obj = extend(proto, {bar: "bazz"});
```

### The `merge` function
The `merge` function copies enumerable properties from a source object to a
target object, but will not overwrite any properties set on the target which are
not inherited.

```js
var merge = require("objektify").merge,
    defaults = {foo: "bar", bar: "bazz"},
    obj = merge(new Foo(), defaults);
```

### The `mixin` function
The `mixin` function copies enumerable properties from a mixin to a target
without overwriting any properties on the target.

```js
var mixin = require("objecktify").mixin,
    Mixin = require("my-mixin");

function Class() {
    Mixin.call(mixin(this, Mixin));
}
```

### The `clone` function
The `clone` function clones a source object, creating a new object with the
same prototype and with all enumerable properties copied over.

```js
var clone = require("objektify").clone,
    MyFoo = require("my-foo"),
    foo = new MyFoo();

var cloned = clone(foo);
assert(cloned instanceof MyFoo);

```

