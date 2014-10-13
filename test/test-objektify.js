var objektify = require(".."),
    mixin = objektify.mixin,
    merge = objektify.merge,
    copy = objektify.copy,
    extend = objektify.extend,
    clone = objektify.clone,
    expect = require("expect.js");

describe("mixin", function() {
    it("should copy enumerable props to return target w/o overwrite", function() {
        var A = {bar: "baz"},
            a = Object.create(A),
            B = {foo: "bar", bar: "foo"},
            mixed = mixin(a, B);
        
        expect(mixed).to.be(a);
        expect(mixed.foo).to.be("bar");
        expect(mixed.bar).to.be("baz");
    });
});

describe("merge", function() {
    it("should merge props, skipping target's non-inherited props", function() {
        var A = {bar: "baz"},
            a = {baz: "biff"},
            props = {bar: "foo", baz: "boom"};
        
        expect(merge(a, props)).to.be(a);
        expect(a.bar).to.be("foo");
        expect(a.baz).to.be("biff");
    });
});

describe("copy", function() {
    it("should copy props to target and return updated target", function() {
        var A = {foo: "bar"},
            B = {foo: "baz"};
        
        expect(copy(A, B)).to.be(A);
        expect(A.foo).to.be("baz");
    });
});

describe("extend", function() {
    it("should create object with prototype and properties set", function() {
        var A = {},
            props = {bar: "biff"},
            obj = extend(A, props);
        
        expect(Object.getPrototypeOf(obj)).to.be(A);
        expect(obj.bar).to.be("biff");
    });
});

describe("clone", function() {
    it("should clone an object, including its prototype", function() {
        var A = {},
            a = Object.create(A),
            b;

        a.foo = "bar";
        b = clone(a);
        expect(Object.getPrototypeOf(b)).to.be(A);
        expect(b.foo).to.be("bar");
    });
});

/** Future

union(A,B)     - A,B -> C
intersect(A,B) - A.b -> C
difference(A,B)- A.a, B.c -> C

*/

