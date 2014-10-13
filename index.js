/**
 * Copy enumerable properties from mixin to the target object and return the
 * updated target.  Skip properties which are already set on the target.
 * @param {object} target
 * @param {object} mixin
 * @returns {object}
 */
function mixin(target, mixin) {
    for (var prop in mixin)
        if (!(prop in target))
            target[prop] = mixin[prop];
    return target;
}

/**
 * Merge properties from source into target, skipping any non-inherited target
 * properties which are set, then return the updated target object.
 * @param {object} target
 * @param {object} source
 * @returns {object}
 */
function merge(target, source) {
    for (var prop in source)
        if (!target.hasOwnProperty(prop))
            target[prop] = source[prop];
    return target;
}

/**
 * Copy properties from source to target, overwriting any existing values, then
 * return the updated target object.
 * @param {object} target
 * @param {object} source
 * @returns {object}
 */
function copy(target, source) {
    for (var prop in source)
        target[prop] = source[prop];
    return target;
}

/**
 * Extend a prototype object, set some properties, and return the new object.
 * @param {object} proto
 * @param {object} props
 * @returns {object}
 */
function extend(proto, props) {
    var obj = Object.create(proto);
    return copy(obj, props);
}

/**
 * Clone an object, creating a new object with the same prototype and properties.
 * @param {object} obj
 * @returns {object}
 */
function clone(obj) {
    var cloned = Object.create(Object.getPrototypeOf(obj));
    for (var prop in obj)
        if (obj.hasOwnProperty(prop)) cloned[prop] = obj[prop];
    return cloned;
}

/** export functions from module */
module.exports = {
    mixin: mixin,
    merge: merge,
    copy: copy,
    extend: extend,
    clone: clone
};
