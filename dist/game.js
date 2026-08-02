"use strict";
(function(module) {
    if (typeof define === 'function' && define.amd) {
        define(['exports'], function(exports)  {
            module(exports);
        });
    } else if (typeof exports === 'object' && exports !== null && typeof exports.nodeName !== 'string') {
        module(exports);
    } else {
        module(typeof self !== 'undefined' ? self : this);
}
}(function($rt_exports) {
let $rt_seed = 2463534242,
$rt_nextId = () => {
    let x = $rt_seed;
    x ^= x << 13;
    x ^= x >>> 17;
    x ^= x << 5;
    $rt_seed = x;
    return x;
},
$rt_wrapFunction0 = f => function() {
    return f(this);
},
$rt_wrapFunction1 = f => function(p1) {
    return f(this, p1);
},
$rt_wrapFunction2 = f => function(p1, p2) {
    return f(this, p1, p2);
},
$rt_wrapFunction3 = f => function(p1, p2, p3) {
    return f(this, p1, p2, p3);
},
$rt_wrapFunction4 = f => function(p1, p2, p3, p4) {
    return f(this, p1, p2, p3, p4);
},
$rt_mainStarter = f => (args, callback) => {
    if (!args) {
        args = [];
    }
    let javaArgs = $rt_createArray($rt_objcls(), args.length);
    for (let i = 0;i < args.length;++i) {
        javaArgs.data[i] = $rt_str(args[i]);
    }
    $rt_startThread(() => {
        f.call(null, javaArgs);
    }, callback);
},
$rt_eraseClinit = target => target.$clinit = () => {
},
$dbg_class = obj => {
    let cls = obj.constructor;
    let arrayDegree = 0;
    while (cls[$rt_meta] && cls[$rt_meta].item) {
        ++arrayDegree;
        cls = cls[$rt_meta].item;
    }
    let clsName = "";
    if (cls[$rt_meta].primitiveKind !== 0) {
        clsName = cls[$rt_meta].name;
    } else {
        clsName = cls[$rt_meta] ? cls[$rt_meta].name || "a/" + cls.name : "@" + cls.name;
    }
    while (arrayDegree-- > 0) {
        clsName += "[]";
    }
    return clsName;
},
$rt_classWithoutFields = superclass => {
    if (superclass === 0) {
        return function() {
        };
    }
    if (superclass === void 0) {
        superclass = $rt_objcls();
    }
    return function() {
        superclass.call(this);
    };
},
$rt_meta = Symbol("teavm_meta"),
$rt_cls = cls => {
    if (cls[$rt_meta].classObject === null) {
        cls[$rt_meta].classObject = jl_Class_createClass(cls);
    }
    return cls[$rt_meta].classObject;
},
$rt_objcls = () => jl_Object,
$rt_callWithReceiver = f => function() {
    return f.apply(null, [this].concat(Array.prototype.slice.call(arguments)));
},
$rt_newClassMetadata = source => {
    return Object.assign({ name : null, binaryName : null, parent : null, superinterfaces : [], modifiers : 0, primitiveKind : 0, itemType : null, arrayType : null, enclosingClass : null, declaringClass : null, simpleName : null, clinit : () => {
    }, constructor : null, enumConstants : () => null, resolvedEnumConstants : null, reflection : null, classObject : null, assignableCache : null, valueToObject : o => o, objectToValue : o => o }, source || {  });
},
$rt_createPrimitiveCls = (name, binaryName, kind, config) => {
    let cls = () => {
    };
    let meta = $rt_newClassMetadata({ name : name, binaryName : binaryName, modifiers : 1 | 1 << 4, primitiveKind : kind });
    cls[$rt_meta] = meta;
    if (typeof config === 'function') {
        config(meta);
    }
    return cls;
},
$rt_booleancls = $rt_createPrimitiveCls("boolean", "Z", 1, meta => {
}),
$rt_bytecls = $rt_createPrimitiveCls("byte", "B", 2, meta => {
}),
$rt_charcls = $rt_createPrimitiveCls("char", "C", 4, meta => {
}),
$rt_intcls = $rt_createPrimitiveCls("int", "I", 5, meta => {
}),
$rt_voidcls = $rt_createPrimitiveCls("void", "V", 9),
$rt_compare = (a, b) => a === b ? 0 : a < b ?  -1 : 1,
$rt_imul = Math.imul || function(a, b) {
    let ah = a >>> 16 & 0xFFFF;
    let al = a & 0xFFFF;
    let bh = b >>> 16 & 0xFFFF;
    let bl = b & 0xFFFF;
    return al * bl + (ah * bl + al * bh << 16 >>> 0) | 0;
},
$rt_udiv = (a, b) => (a >>> 0) / (b >>> 0) >>> 0,
$rt_umod = (a, b) => (a >>> 0) % (b >>> 0) >>> 0,
$rt_ucmp = (a, b) => {
    a >>>= 0;
    b >>>= 0;
    return a < b ?  -1 : a > b ? 1 : 0;
},
Long_fromNumber = val => BigInt.asIntN(64, BigInt(val >= 0 ? Math.floor(val) : Math.ceil(val))),
Long_toNumber = val => Number(val),
$rt_createArray = (cls, sz) => {
    let data = new Array(sz);
    data.fill(null);
    return new ($rt_arraycls(cls))(data);
},
$rt_wrapArray = (cls, data) => new ($rt_arraycls(cls))(data),
$rt_createUnfilledArray = (cls, sz) => new ($rt_arraycls(cls))(new Array(sz)),
$rt_createCharArray = sz => new $rt_charArrayCls(new Uint16Array(sz)),
$rt_createByteArray = sz => new $rt_byteArrayCls(new Int8Array(sz)),
$rt_createIntArray = sz => new $rt_intArrayCls(new Int32Array(sz)),
$rt_createIntArrayFromData = data => {
    let buffer = new Int32Array(data.length);
    buffer.set(data);
    return new $rt_intArrayCls(buffer);
},
$rt_createBooleanArray = sz => new $rt_booleanArrayCls(new Int8Array(sz)),
$rt_arraycls = cls => {
    let result = cls[$rt_meta].arrayType;
    if (result === null) {
        function JavaArray(data) {
            ($rt_objcls()).call(this);
            this.data = data;
        }
        JavaArray.prototype = Object.create(($rt_objcls()).prototype);
        JavaArray.prototype.type = cls;
        JavaArray.prototype.constructor = JavaArray;
        JavaArray.prototype.toString = function() {
            let str = "[";
            for (let i = 0;i < this.data.length;++i) {
                if (i > 0) {
                    str += ", ";
                }
                str += this.data[i].toString();
            }
            str += "]";
            return str;
        };
        JavaArray.prototype.$clone = function() {
            let dataCopy;
            if ('slice' in this.data) {
                dataCopy = this.data.slice();
            } else {
                dataCopy = new this.data.constructor(this.data.length);
                for (let i = 0;i < dataCopy.length;++i) {
                    dataCopy[i] = this.data[i];
                }
            }
            return new ($rt_arraycls(this.type))(dataCopy);
        };
        let name = "[" + cls[$rt_meta].binaryName;
        JavaArray[$rt_meta] = $rt_newClassMetadata({ name : name, binaryName : name, parent : $rt_objcls(), itemType : cls });
        result = JavaArray;
        cls[$rt_meta].arrayType = JavaArray;
    }
    return result;
},
$rt_createMultiArray = (cls, dimensions) => {
    let first = 0;
    for (let i = dimensions.length - 1;i >= 0;i = i - 1 | 0) {
        if (dimensions[i] === 0) {
            first = i;
            break;
        }
    }
    if (first > 0) {
        for (let i = 0;i < first;i = i + 1 | 0) {
            cls = $rt_arraycls(cls);
        }
        if (first === dimensions.length - 1) {
            return $rt_createArray(cls, dimensions[first]);
        }
    }
    let arrays = new Array($rt_primitiveArrayCount(dimensions, first));
    let firstDim = dimensions[first] | 0;
    for (let i = 0;i < arrays.length;i = i + 1 | 0) {
        arrays[i] = $rt_createArray(cls, firstDim);
    }
    return $rt_createMultiArrayImpl(cls, arrays, dimensions, first, 0);
},
$rt_createBooleanMultiArray = dimensions => {
    let arrays = new Array($rt_primitiveArrayCount(dimensions, 0));
    if (arrays.length === 0) {
        return $rt_createMultiArray($rt_booleancls, dimensions);
    }
    let firstDim = dimensions[0] | 0;
    for (let i = 0;i < arrays.length;i = i + 1 | 0) {
        arrays[i] = $rt_createBooleanArray(firstDim);
    }
    return $rt_createMultiArrayImpl($rt_booleancls, arrays, dimensions, 0);
},
$rt_createIntMultiArray = dimensions => {
    let arrays = new Array($rt_primitiveArrayCount(dimensions, 0));
    if (arrays.length === 0) {
        return $rt_createMultiArray($rt_intcls, dimensions);
    }
    let firstDim = dimensions[0] | 0;
    for (let i = 0;i < arrays.length;i = i + 1 | 0) {
        arrays[i] = $rt_createIntArray(firstDim);
    }
    return $rt_createMultiArrayImpl($rt_intcls, arrays, dimensions, 0);
},
$rt_primitiveArrayCount = (dimensions, start) => {
    let val = dimensions[start + 1] | 0;
    for (let i = start + 2;i < dimensions.length;i = i + 1 | 0) {
        val = val * (dimensions[i] | 0) | 0;
        if (val === 0) {
            break;
        }
    }
    return val;
},
$rt_createMultiArrayImpl = (cls, arrays, dimensions, start) => {
    let limit = arrays.length;
    for (let i = start + 1 | 0;i < dimensions.length;i = i + 1 | 0) {
        cls = $rt_arraycls(cls);
        let dim = dimensions[i];
        let index = 0;
        let packedIndex = 0;
        while (index < limit) {
            let arr = $rt_createUnfilledArray(cls, dim);
            for (let j = 0;j < dim;j = j + 1 | 0) {
                arr.data[j] = arrays[index];
                index = index + 1 | 0;
            }
            arrays[packedIndex] = arr;
            packedIndex = packedIndex + 1 | 0;
        }
        limit = packedIndex;
    }
    return arrays[0];
};
function $rt_arrayLength(array) {
    return array.data.length;
}
let $rt_stringPool_instance,
$rt_stringPool = strings => {
    $rt_stringClassInit();
    $rt_stringPool_instance = new Array(strings.length);
    for (let i = 0;i < strings.length;++i) {
        $rt_stringPool_instance[i] = $rt_intern($rt_str(strings[i]));
    }
},
$rt_s = index => $rt_stringPool_instance[index],
$rt_charArrayToString = (array, offset, count) => {
    let result = "";
    let limit = offset + count;
    for (let i = offset;i < limit;i = i + 1024 | 0) {
        let next = Math.min(limit, i + 1024 | 0);
        result += String.fromCharCode.apply(null, array.subarray(i, next));
    }
    return result;
},
$rt_fullArrayToString = array => $rt_charArrayToString(array, 0, array.length),
$rt_str = str => str === null ? null : jl_String__init_2(str),
$rt_ustr = str => str === null ? null : str.$nativeString,
$rt_stringClassInit = () => jl_String_$callClinit(),
$rt_intern;
{
    $rt_intern = str => str;
}
let $rt_isAssignable = (from, to) => {
    if (from === to) {
        return true;
    }
    let map = from[$rt_meta].assignableCache;
    if (map === null) {
        map = new Map();
        from[$rt_meta].assignableCache = map;
    }
    let cachedResult = map.get(to);
    if (typeof cachedResult !== 'undefined') {
        return cachedResult;
    }
    if (to[$rt_meta].itemType !== null) {
        let result = from[$rt_meta].itemType !== null && $rt_isAssignable(from[$rt_meta].itemType, to[$rt_meta].itemType);
        map.set(to, result);
        return result;
    }
    let parent = from[$rt_meta].parent;
    if (parent !== null && parent !== from) {
        if ($rt_isAssignable(parent, to)) {
            map.set(to, true);
            return true;
        }
    }
    let superinterfaces = from[$rt_meta].superinterfaces;
    for (let i = 0;i < superinterfaces.length;i = i + 1 | 0) {
        if ($rt_isAssignable(superinterfaces[i], to)) {
            map.set(to, true);
            return true;
        }
    }
    map.set(to, false);
    return false;
},
$rt_throw = ex => {
    throw $rt_exception(ex);
},
$rt_javaExceptionProp = Symbol("javaException"),
$rt_exception = ex => {
    if (!ex.$jsException) {
        $rt_fillNativeException(ex);
    }
    return ex.$jsException;
},
$rt_fillNativeException = ex => {
    let javaCause = $rt_throwableCause(ex);
    let jsCause = javaCause !== null ? javaCause.$jsException : void 0;
    let cause = typeof jsCause === "object" ? { cause : jsCause } : void 0;
    let err = new JavaError("Java exception thrown", cause);
    if (typeof Error.captureStackTrace === "function") {
        Error.captureStackTrace(err);
    }
    err[$rt_javaExceptionProp] = ex;
    ex.$jsException = err;
    $rt_fillStack(err, ex);
},
$rt_fillStack = (err, ex) => {
    if (typeof $rt_decodeStack === "function" && err.stack) {
        let stack = $rt_decodeStack(err.stack);
        let javaStack = $rt_createArray($rt_stecls(), stack.length);
        let elem;
        let noStack = false;
        for (let i = 0;i < stack.length;++i) {
            let element = stack[i];
            elem = $rt_createStackElement($rt_str(element.className), $rt_str(element.methodName), $rt_str(element.fileName), element.lineNumber);
            if (elem == null) {
                noStack = true;
                break;
            }
            javaStack.data[i] = elem;
        }
        if (!noStack) {
            $rt_setStack(ex, javaStack);
        }
    }
},
JavaError;
if (typeof Reflect === 'object') {
    let defaultMessage = Symbol("defaultMessage");
    JavaError = function JavaError(message, cause) {
        let self = Reflect.construct(Error, [void 0, cause], JavaError);
        Object.setPrototypeOf(self, JavaError.prototype);
        self[defaultMessage] = message;
        return self;
    }
    ;
    JavaError.prototype = Object.create(Error.prototype, { constructor : { configurable : true, writable : true, value : JavaError }, message : { get() {
        try {
            let javaException = this[$rt_javaExceptionProp];
            if (typeof javaException === 'object') {
                let javaMessage = $rt_throwableMessage(javaException);
                if (typeof javaMessage === "object") {
                    return javaMessage !== null ? javaMessage.toString() : null;
                }
            }
            return this[defaultMessage];
        } catch (e){
            return "Exception occurred trying to extract Java exception message: " + e;
        }
    } } });
} else {
    JavaError = Error;
}
let $rt_javaException = e => e instanceof Error && typeof e[$rt_javaExceptionProp] === 'object' ? e[$rt_javaExceptionProp] : null,
$rt_wrapException = err => {
    let ex = err[$rt_javaExceptionProp];
    if (!ex) {
        ex = $rt_createException($rt_str("(JavaScript) " + err.toString()));
        err[$rt_javaExceptionProp] = ex;
        ex.$jsException = err;
        $rt_fillStack(err, ex);
    }
    return ex;
},
$rt_createException = message => jl_RuntimeException__init_1(message),
$rt_throwableMessage = t => jl_Throwable_getMessage(t),
$rt_throwableCause = t => jl_Throwable_getCause(t),
$rt_stecls = () => $rt_objcls(),
$rt_createStackElement = (className, methodName, fileName, lineNumber) => {
    {
        return null;
    }
},
$rt_setStack = (e, stack) => {
},
$rt_packageData = null,
$rt_packages = data => {
    let i = 0;
    let packages = new Array(data.length);
    for (let j = 0;j < data.length;++j) {
        let prefixIndex = data[i++];
        let prefix = prefixIndex >= 0 ? packages[prefixIndex] : "";
        packages[j] = prefix + data[i++] + ".";
    }
    $rt_packageData = packages;
},
$rt_allClasses = [],
$rt_metadata = data => {
    let packages = $rt_packageData;
    let i = 0;
    while (i < data.length) {
        let cls = data[i++];
        $rt_allClasses.push(cls);
        let m = $rt_newClassMetadata();
        cls[$rt_meta] = m;
        let className = data[i++];
        m.name = className !== 0 ? className : null;
        if (m.name !== null) {
            let packageIndex = data[i++];
            if (packageIndex >= 0) {
                m.name = packages[packageIndex] + m.name;
            }
        }
        m.binaryName = "L" + m.name + ";";
        let superclass = data[i++];
        m.parent = superclass !== 0 ? superclass : null;
        m.superinterfaces = data[i++];
        if (m.parent) {
            cls.prototype = Object.create(m.parent.prototype);
        } else {
            cls.prototype = {  };
        }
        cls.prototype.constructor = cls;
        m.modifiers = data[i++];
        m.primitiveKind = 0;
        let innerClassInfo = data[i++];
        if (innerClassInfo !== 0) {
            let enclosingClass = innerClassInfo[0];
            m.enclosingClass = enclosingClass !== 0 ? enclosingClass : null;
            let declaringClass = innerClassInfo[1];
            m.declaringClass = declaringClass !== 0 ? declaringClass : null;
            let simpleName = innerClassInfo[2];
            m.simpleName = simpleName !== 0 ? simpleName : null;
        }
        let clinit = data[i++];
        m.clinit = clinit !== 0 ? () => {
            m.clinit = () => {
            };
            clinit();
        } : () => {
        };
        let virtualMethods = data[i++];
        if (virtualMethods !== 0) {
            for (let j = 0;j < virtualMethods.length;j += 2) {
                let name = virtualMethods[j];
                let func = virtualMethods[j + 1];
                if (typeof name === 'string') {
                    name = [name];
                }
                for (let k = 0;k < name.length;++k) {
                    cls.prototype[name[k]] = func;
                }
            }
        }
    }
},
$rt_startThread = (runner, callback) => {
    let result;
    try {
        result = runner();
    } catch (e){
        result = e;
    }
    if (typeof callback !== 'undefined') {
        callback(result);
    } else if (result instanceof Error) {
        throw result;
    }
};
function jl_Object() {
    this.$id$ = 0;
}
let jl_Object_getClass = $this => {
    return $rt_cls(jl_Object_getClassInfo($this));
},
jl_Object_getClassInfo = var$0 => {
    return var$0.constructor;
},
jl_Object_toString = var$0 => {
    let var$1, var$2, var$3, var$4, var$5, var$6, var$7, var$8, var$9, var$10;
    var$1 = jl_Class_getName(jl_Object_getClass(var$0));
    var$2 = var$0;
    if (!var$2.$id$)
        var$2.$id$ = $rt_nextId();
    var$3 = var$0.$id$;
    jl_Integer_$callClinit();
    if (!var$3)
        var$4 = $rt_s(0);
    else {
        var$5 = (((32 - jl_Integer_numberOfLeadingZeros(var$3) | 0) + 4 | 0) - 1 | 0) / 4 | 0;
        var$6 = $rt_createCharArray(var$5);
        var$7 = var$6.data;
        var$8 = (var$5 - 1 | 0) * 4 | 0;
        var$9 = 0;
        while (var$8 >= 0) {
            var$10 = var$9 + 1 | 0;
            var$7[var$9] = jl_Character_forDigit((var$3 >>> var$8 | 0) & 15, 16);
            var$8 = var$8 - 4 | 0;
            var$9 = var$10;
        }
        var$4 = jl_String__init_0(var$6);
    }
    var$2 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$2);
    var$1 = jl_StringBuilder_append(var$2, var$1);
    jl_AbstractStringBuilder_append(var$1, 64);
    jl_StringBuilder_append(var$1, var$4);
    return jl_AbstractStringBuilder_toString(var$2);
},
ji_Serializable = $rt_classWithoutFields(0),
jl_Comparable = $rt_classWithoutFields(0),
jl_CharSequence = $rt_classWithoutFields(0);
function jl_String() {
    jl_Object.call(this);
    this.$hashCode = 0;
}
let jl_String_EMPTY_CHARS = null,
jl_String_EMPTY = null,
jl_String_CASE_INSENSITIVE_ORDER = null,
jl_String_$callClinit = () => {
    jl_String_$callClinit = $rt_eraseClinit(jl_String);
    jl_String__clinit_();
},
jl_String__init_4 = $this => {
    jl_String_$callClinit();
    $this.$nativeString = "";
},
jl_String__init_3 = () => {
    let var_0 = new jl_String();
    jl_String__init_4(var_0);
    return var_0;
},
jl_String__init_1 = ($this, $characters) => {
    jl_String_$callClinit();
    $this.$nativeString = $rt_charArrayToString($characters.data, 0, $characters.data.length);
},
jl_String__init_0 = var_0 => {
    let var_1 = new jl_String();
    jl_String__init_1(var_1, var_0);
    return var_1;
},
jl_String__init_5 = (var$0, var$1) => {
    var$0.$nativeString = var$1;
},
jl_String__init_2 = var_0 => {
    let var_1 = new jl_String();
    jl_String__init_5(var_1, var_0);
    return var_1;
},
jl_String__init_6 = (var$0, var$1, $offset, $count) => {
    let var$4, var$5;
    jl_String_$callClinit();
    var$4 = var$1.data.length;
    if ($offset >= 0 && $count >= 0 && $count <= (var$4 - $offset | 0)) {
        var$0.$nativeString = $rt_charArrayToString(var$1.data, $offset, $count);
        return;
    }
    var$5 = new jl_IndexOutOfBoundsException;
    jl_RuntimeException__init_(var$5);
    $rt_throw(var$5);
},
jl_String__init_ = (var_0, var_1, var_2) => {
    let var_3 = new jl_String();
    jl_String__init_6(var_3, var_0, var_1, var_2);
    return var_3;
},
jl_String_charAt = ($this, $index) => {
    let var$2;
    if ($index >= 0 && $index < $this.$nativeString.length)
        return $this.$nativeString.charCodeAt($index);
    var$2 = new jl_StringIndexOutOfBoundsException;
    jl_RuntimeException__init_(var$2);
    $rt_throw(var$2);
},
jl_String_length = $this => {
    return $this.$nativeString.length;
},
jl_String_isEmpty = $this => {
    return $this.$nativeString.length ? 0 : 1;
},
jl_String_startsWith0 = ($this, $prefix, $toffset) => {
    let $i, var$4, var$5;
    if (($toffset + $prefix.$nativeString.length | 0) > $this.$nativeString.length)
        return 0;
    $i = 0;
    while ($i < $prefix.$nativeString.length) {
        var$4 = jl_String_charAt($prefix, $i);
        var$5 = $toffset + 1 | 0;
        if (var$4 != jl_String_charAt($this, $toffset))
            return 0;
        $i = $i + 1 | 0;
        $toffset = var$5;
    }
    return 1;
},
jl_String_startsWith = ($this, $prefix) => {
    if ($this === $prefix)
        return 1;
    return jl_String_startsWith0($this, $prefix, 0);
},
jl_String_indexOf0 = ($this, $ch, $fromIndex) => {
    let $i, $bmpChar, $hi, $lo;
    $i = jl_Math_max(0, $fromIndex);
    if ($ch < 65536) {
        $bmpChar = $ch & 65535;
        while (true) {
            if ($i >= $this.$nativeString.length)
                return (-1);
            if ($this.$nativeString.charCodeAt($i) == $bmpChar)
                break;
            $i = $i + 1 | 0;
        }
        return $i;
    }
    $hi = jl_Character_highSurrogate($ch);
    $lo = jl_Character_lowSurrogate($ch);
    while (true) {
        if ($i >= ($this.$nativeString.length - 1 | 0))
            return (-1);
        if ($this.$nativeString.charCodeAt($i) == $hi && $this.$nativeString.charCodeAt(($i + 1 | 0)) == $lo)
            break;
        $i = $i + 1 | 0;
    }
    return $i;
},
jl_String_lastIndexOf = ($this, $ch, $fromIndex) => {
    let $i, $bmpChar, $hi, $lo;
    $i = jl_Math_min($fromIndex, $this.$nativeString.length - 1 | 0);
    if ($ch < 65536) {
        $bmpChar = $ch & 65535;
        while (true) {
            if ($i < 0)
                return (-1);
            if ($this.$nativeString.charCodeAt($i) == $bmpChar)
                break;
            $i = $i + (-1) | 0;
        }
        return $i;
    }
    $hi = jl_Character_highSurrogate($ch);
    $lo = jl_Character_lowSurrogate($ch);
    while (true) {
        if ($i < 1)
            return (-1);
        if ($this.$nativeString.charCodeAt($i) == $lo) {
            $fromIndex = $i - 1 | 0;
            if ($this.$nativeString.charCodeAt($fromIndex) == $hi)
                break;
        }
        $i = $i + (-1) | 0;
    }
    return $fromIndex;
},
jl_String_indexOf1 = ($this, $str, $fromIndex) => {
    let $i, $toIndex, $j;
    $i = jl_Math_max(0, $fromIndex);
    $toIndex = $this.$nativeString.length - $str.$nativeString.length | 0;
    a: while (true) {
        if ($i > $toIndex)
            return (-1);
        $j = 0;
        while (true) {
            if ($j >= $str.$nativeString.length)
                break a;
            if (jl_String_charAt($this, $i + $j | 0) != jl_String_charAt($str, $j))
                break;
            $j = $j + 1 | 0;
        }
        $i = $i + 1 | 0;
    }
    return $i;
},
jl_String_indexOf = ($this, $str) => {
    return jl_String_indexOf1($this, $str, 0);
},
jl_String_substring = ($this, $beginIndex, $endIndex) => {
    let $length, var$4, var$5;
    $length = $this.$nativeString.length;
    var$4 = $rt_compare($beginIndex, $endIndex);
    if (!var$4)
        return jl_String_EMPTY;
    if (!$beginIndex && $endIndex == $length)
        return $this;
    if ($beginIndex >= 0 && var$4 <= 0 && $endIndex <= $length)
        return jl_String__init_2($this.$nativeString.substring($beginIndex, $endIndex));
    var$5 = new jl_StringIndexOutOfBoundsException;
    jl_RuntimeException__init_(var$5);
    $rt_throw(var$5);
},
jl_String_substring0 = ($this, $beginIndex) => {
    return jl_String_substring($this, $beginIndex, $this.$nativeString.length);
},
jl_String_subSequence = ($this, $beginIndex, $endIndex) => {
    return jl_String_substring($this, $beginIndex, $endIndex);
},
jl_String_replace = ($this, $target, $replacement) => {
    let $sb, $i, $sz, var$6, var$7, $i_0, $j;
    if ($target === $replacement)
        return $this;
    $target = $target;
    if (jl_String_isEmpty($target)) {
        $sb = new jl_StringBuilder;
        jl_AbstractStringBuilder__init_($sb);
        $i = 0;
        while ($i < $this.$nativeString.length) {
            jl_StringBuilder_append($sb, $replacement);
            jl_AbstractStringBuilder_append($sb, jl_String_charAt($this, $i));
            $i = $i + 1 | 0;
        }
        jl_StringBuilder_append($sb, $replacement);
        return jl_AbstractStringBuilder_toString($sb);
    }
    if ($target.$nativeString.length == 1) {
        $sb = $replacement;
        if ($sb.$nativeString.length == 1) {
            $i = jl_String_charAt($target, 0);
            $sz = jl_String_charAt($sb, 0);
            if ($i != $sz) {
                var$6 = $rt_createCharArray($this.$nativeString.length);
                var$7 = var$6.data;
                $i_0 = 0;
                while ($i_0 < $this.$nativeString.length) {
                    var$7[$i_0] = jl_String_charAt($this, $i_0) != $i ? jl_String_charAt($this, $i_0) : $sz;
                    $i_0 = $i_0 + 1 | 0;
                }
                $this = jl_String__init_3();
                $this.$nativeString = $rt_fullArrayToString(var$6.data);
            }
            return $this;
        }
    }
    $sb = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_($sb);
    $sz = $this.$nativeString.length - $target.$nativeString.length | 0;
    $i_0 = 0;
    while ($i_0 <= $sz) {
        $j = 0;
        a: {
            while (true) {
                if ($j >= $target.$nativeString.length) {
                    jl_StringBuilder_append($sb, $replacement);
                    $i_0 = $i_0 + ($target.$nativeString.length - 1 | 0) | 0;
                    break a;
                }
                if (jl_String_charAt($this, $i_0 + $j | 0) != jl_String_charAt($target, $j))
                    break;
                $j = $j + 1 | 0;
            }
            jl_AbstractStringBuilder_append($sb, jl_String_charAt($this, $i_0));
        }
        $i_0 = $i_0 + 1 | 0;
    }
    jl_StringBuilder_append($sb, jl_String_substring0($this, $i_0));
    return jl_AbstractStringBuilder_toString($sb);
},
jl_String_trim = $this => {
    let $lower, $upper;
    $lower = 0;
    $upper = $this.$nativeString.length - 1 | 0;
    a: {
        while ($lower <= $upper) {
            if (jl_String_charAt($this, $lower) > 32)
                break a;
            $lower = $lower + 1 | 0;
        }
    }
    while ($lower <= $upper && jl_String_charAt($this, $upper) <= 32) {
        $upper = $upper + (-1) | 0;
    }
    return jl_String_substring($this, $lower, $upper + 1 | 0);
},
jl_String_toString = $this => {
    return $this;
},
jl_String_toCharArray = $this => {
    let $array, var$2, $i, var$4;
    $array = $rt_createCharArray($this.$nativeString.length);
    var$2 = $array.data;
    $i = 0;
    var$4 = var$2.length;
    while ($i < var$4) {
        var$2[$i] = jl_String_charAt($this, $i);
        $i = $i + 1 | 0;
    }
    return $array;
},
jl_String_valueOf = $obj => {
    jl_String_$callClinit();
    return $obj === null ? $rt_s(1) : $obj.$toString();
},
jl_String_valueOf0 = $i => {
    let var$2;
    jl_String_$callClinit();
    var$2 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$2);
    return jl_AbstractStringBuilder_toString(jl_StringBuilder_append1(var$2, $i));
},
jl_String_equals = ($this, $other) => {
    let $str;
    if ($this === $other)
        return 1;
    if (!($other instanceof jl_String))
        return 0;
    $str = $other;
    return $this.$nativeString !== $str.$nativeString ? 0 : 1;
},
jl_String_split = ($this, $regex) => {
    let var$2, var$3, var$4, var$5, var$6, var$7, var$8, var$9, var$10, var$11, var$12, var$13, var$14;
    if ($regex === null) {
        $regex = new jl_NullPointerException;
        jl_RuntimeException__init_0($regex, $rt_s(2));
        $rt_throw($regex);
    }
    jur_AbstractSet_$callClinit();
    jur_AbstractSet_counter = 1;
    var$2 = new jur_Pattern;
    var$2.$backRefs = $rt_createArray(jur_FSet, 10);
    var$2.$globalGroupIndex = (-1);
    var$2.$compCount = (-1);
    var$2.$consCount = (-1);
    var$3 = new jur_Lexer;
    var$3.$mode = 1;
    var$3.$orig = $regex;
    var$3.$pattern0 = $rt_createCharArray($regex.$nativeString.length + 2 | 0);
    jl_System_fastArraycopy(jl_String_toCharArray($regex), 0, var$3.$pattern0, 0, $regex.$nativeString.length);
    var$4 = var$3.$pattern0.data;
    var$5 = var$4.length;
    var$4[var$5 - 1 | 0] = 0;
    var$4[var$5 - 2 | 0] = 0;
    var$3.$patternFullLength = var$5;
    var$3.$flags0 = 0;
    jur_Lexer_movePointer(var$3);
    jur_Lexer_movePointer(var$3);
    var$2.$lexemes = var$3;
    var$2.$flags = 0;
    var$2.$start1 = jur_Pattern_processExpression(var$2, (-1), 0, null);
    if (!jur_Lexer_isEmpty(var$2.$lexemes)) {
        $regex = new jur_PatternSyntaxException;
        var$2 = var$2.$lexemes;
        jur_PatternSyntaxException__init_0($regex, $rt_s(3), var$2.$orig, var$2.$curToc);
        $rt_throw($regex);
    }
    if (var$2.$needsBackRefReplacement)
        var$2.$start1.$processSecondPass();
    $regex = var$2.$namedGroups;
    if ($regex === null) {
        ju_Collections_$callClinit();
        var$2.$namedGroups = ju_Collections_EMPTY_MAP;
    } else {
        ju_Collections_$callClinit();
        var$3 = new ju_Collections$13;
        var$3.$val$m = $regex;
        var$2.$namedGroups = var$3;
    }
    var$6 = $this;
    $regex = ju_ArrayList__init_();
    var$3 = new jur_Matcher;
    var$3.$leftBound0 = (-1);
    var$3.$rightBound0 = (-1);
    var$3.$pat = var$2;
    var$3.$start2 = var$2.$start1;
    var$3.$string2 = var$6;
    var$3.$leftBound0 = 0;
    var$7 = var$6;
    var$8 = var$7.$nativeString.length;
    var$3.$rightBound0 = var$8;
    var$9 = new jur_MatchResultImpl;
    var$10 = var$3.$leftBound0;
    var$11 = var$2.$globalGroupIndex;
    var$12 = var$2.$compCount + 1 | 0;
    var$13 = var$2.$consCount + 1 | 0;
    var$2 = var$2.$namedGroups;
    var$9.$previousMatch = (-1);
    var$5 = var$11 + 1 | 0;
    var$9.$groupCount = var$5;
    var$9.$groupBounds = $rt_createIntArray(var$5 * 2 | 0);
    var$9.$namedGroups0 = var$2;
    var$4 = $rt_createIntArray(var$13);
    var$9.$consumers = var$4;
    ju_Arrays_fill(var$4, (-1));
    if (var$12 > 0)
        var$9.$compQuantCounters = $rt_createIntArray(var$12);
    ju_Arrays_fill(var$9.$groupBounds, (-1));
    jur_MatchResultImpl_reset(var$9, var$6, var$10, var$8);
    var$3.$matchResult = var$9;
    var$9.$anchoringBounds = 1;
    var$5 = 0;
    var$13 = 0;
    if (!var$7.$nativeString.length) {
        var$4 = $rt_createArray(jl_String, 1);
        var$4.data[0] = $rt_s(3);
    } else {
        while (jur_Matcher_find0(var$3)) {
            var$5 = var$5 + 1 | 0;
            ju_ArrayList_add($regex, jl_String_toString(jl_String_subSequence(var$7, var$13, jur_MatchResultImpl_start(var$3.$matchResult, 0))));
            var$13 = jur_Matcher_end(var$3);
        }
        ju_ArrayList_add($regex, jl_String_substring(var$7, var$13, var$7.$nativeString.length));
        var$14 = var$5 + 1 | 0;
        while (true) {
            var$14 = var$14 + (-1) | 0;
            if (var$14 < 0)
                break;
            if (jl_String_length(jl_String_toString(ju_ArrayList_get($regex, var$14))))
                break;
            ju_ArrayList_remove($regex, var$14);
        }
        if (var$14 < 0)
            var$14 = 0;
        var$4 = $rt_createArray(jl_String, var$14);
        var$4 = ju_AbstractCollection_toArray($regex, var$4);
    }
    return var$4;
},
jl_String__clinit_ = () => {
    jl_String_EMPTY_CHARS = $rt_createCharArray(0);
    jl_String_EMPTY = jl_String__init_3();
    jl_String_CASE_INSENSITIVE_ORDER = new jl_String$_clinit_$lambda$_118_0;
},
jlr_AnnotatedElement = $rt_classWithoutFields(0),
jlr_GenericDeclaration = $rt_classWithoutFields(0),
jlr_Type = $rt_classWithoutFields(0);
function jl_Class() {
    let a = this; jl_Object.call(a);
    a.$flags1 = 0;
    a.$classInfo = null;
    a.$name1 = null;
}
let jl_Class_createClass = $classInfo => {
    let var$2;
    var$2 = new jl_Class;
    var$2.$classInfo = $classInfo;
    return var$2;
},
jl_Class_getName = $this => {
    let var$1, $metadataName, $result, $itemType, $itemName;
    var$1 = $this.$flags1;
    if (!(var$1 & 1)) {
        $this.$flags1 = var$1 | 1;
        $metadataName = $this.$classInfo[$rt_meta].name;
        $result = $metadataName === null ? null : $rt_str($metadataName);
        if ($result === null) {
            $itemType = $this.$classInfo[$rt_meta].itemType;
            if ($itemType !== null) {
                $itemName = jl_Class_getName($rt_cls($itemType));
                if ($itemName !== null) {
                    if ($itemType[$rt_meta].itemType !== null) {
                        $metadataName = new jl_StringBuilder;
                        jl_AbstractStringBuilder__init_($metadataName);
                        jl_AbstractStringBuilder_append($metadataName, 91);
                        jl_StringBuilder_append($metadataName, $itemName);
                        $result = jl_AbstractStringBuilder_toString($metadataName);
                    } else {
                        $metadataName = new jl_StringBuilder;
                        jl_AbstractStringBuilder__init_($metadataName);
                        jl_AbstractStringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append($metadataName, $rt_s(4)), $itemName), 59);
                        $result = jl_AbstractStringBuilder_toString($metadataName);
                    }
                }
            }
        }
        $this.$name1 = $result;
    }
    return $this.$name1;
},
jl_Class_isPrimitive = $this => {
    return !$this.$classInfo[$rt_meta].primitiveKind ? 0 : 1;
},
jl_Class_getComponentType = $this => {
    let $itemTypeInfo;
    $itemTypeInfo = $this.$classInfo[$rt_meta].itemType;
    return $itemTypeInfo === null ? null : $rt_cls($itemTypeInfo);
},
jl_Number = $rt_classWithoutFields();
function jl_Integer() {
    jl_Number.call(this);
    this.$value0 = 0;
}
let jl_Integer_TYPE = null,
jl_Integer_integerCache = null,
jl_Integer_$callClinit = () => {
    jl_Integer_$callClinit = $rt_eraseClinit(jl_Integer);
    jl_Integer__clinit_();
},
jl_Integer__init_0 = ($this, $value) => {
    jl_Integer_$callClinit();
    $this.$value0 = $value;
},
jl_Integer__init_ = var_0 => {
    let var_1 = new jl_Integer();
    jl_Integer__init_0(var_1, var_0);
    return var_1;
},
jl_Integer_toString = $i => {
    jl_Integer_$callClinit();
    return (jl_AbstractStringBuilder_append1(jl_AbstractStringBuilder__init_1(20), $i, 10)).$toString();
},
jl_Integer_parseInt = ($s, $radix) => {
    jl_Integer_$callClinit();
    if ($s !== null)
        return jl_Integer_parseIntImpl($s, 0, $s.$nativeString.length, $radix);
    $s = new jl_NumberFormatException;
    jl_RuntimeException__init_0($s, $rt_s(5));
    $rt_throw($s);
},
jl_Integer_parseIntImpl = ($s, $beginIndex, $endIndex, $radix) => {
    let $negative, var$6, $value, $maxValue, var$9, $digit, var$11, var$12;
    jl_Integer_$callClinit();
    if ($beginIndex == $endIndex) {
        $s = new jl_NumberFormatException;
        jl_RuntimeException__init_0($s, $rt_s(6));
        $rt_throw($s);
    }
    if ($radix >= 2 && $radix <= 36) {
        a: {
            $negative = 0;
            $s = $s;
            switch (jl_String_charAt($s, $beginIndex)) {
                case 43:
                    var$6 = $beginIndex + 1 | 0;
                    break a;
                case 45:
                    $negative = 1;
                    var$6 = $beginIndex + 1 | 0;
                    break a;
                default:
            }
            var$6 = $beginIndex;
        }
        $value = 0;
        $maxValue = 1 + (2147483647 / $radix | 0) | 0;
        if (var$6 == $endIndex) {
            $s = new jl_NumberFormatException;
            jl_RuntimeException__init_($s);
            $rt_throw($s);
        }
        while (var$6 < $endIndex) {
            var$9 = var$6 + 1 | 0;
            $digit = jl_String_charAt($s, var$6);
            $digit = $digit >= 48 && $digit <= 57 ? $digit - 48 | 0 : $digit >= 97 && $digit <= 122 ? ($digit - 97 | 0) + 10 | 0 : $digit >= 65 && $digit <= 90 ? ($digit - 65 | 0) + 10 | 0 : (-1);
            if ($digit < 0) {
                var$11 = new jl_NumberFormatException;
                $s = jl_String_valueOf(jl_String_substring($s, $beginIndex, $endIndex));
                var$12 = new jl_StringBuilder;
                jl_AbstractStringBuilder__init_(var$12);
                jl_StringBuilder_append(jl_StringBuilder_append(var$12, $rt_s(7)), $s);
                jl_RuntimeException__init_0(var$11, jl_AbstractStringBuilder_toString(var$12));
                $rt_throw(var$11);
            }
            if ($digit >= $radix) {
                var$11 = new jl_NumberFormatException;
                $s = jl_String_valueOf(jl_String_substring($s, $beginIndex, $endIndex));
                var$12 = new jl_StringBuilder;
                jl_AbstractStringBuilder__init_(var$12);
                jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append1(jl_StringBuilder_append(var$12, $rt_s(8)), $radix), $rt_s(9)), $s);
                jl_RuntimeException__init_0(var$11, jl_AbstractStringBuilder_toString(var$12));
                $rt_throw(var$11);
            }
            if ($value > $maxValue) {
                $s = new jl_NumberFormatException;
                jl_RuntimeException__init_0($s, $rt_s(10));
                $rt_throw($s);
            }
            $value = $rt_imul($radix, $value) + $digit | 0;
            if ($value < 0) {
                if (var$9 == $endIndex && $value == (-2147483648) && $negative)
                    return (-2147483648);
                var$11 = new jl_NumberFormatException;
                $s = jl_String_valueOf(jl_String_substring($s, $beginIndex, $endIndex));
                var$12 = new jl_StringBuilder;
                jl_AbstractStringBuilder__init_(var$12);
                jl_StringBuilder_append(jl_StringBuilder_append(var$12, $rt_s(11)), $s);
                jl_RuntimeException__init_0(var$11, jl_AbstractStringBuilder_toString(var$12));
                $rt_throw(var$11);
            }
            var$6 = var$9;
        }
        if ($negative)
            $value =  -$value | 0;
        return $value;
    }
    $s = new jl_NumberFormatException;
    var$11 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$11);
    jl_StringBuilder_append1(jl_StringBuilder_append(var$11, $rt_s(12)), $radix);
    jl_RuntimeException__init_0($s, jl_AbstractStringBuilder_toString(var$11));
    $rt_throw($s);
},
jl_Integer_parseInt0 = $s => {
    jl_Integer_$callClinit();
    return jl_Integer_parseInt($s, 10);
},
jl_Integer_numberOfLeadingZeros = $i => {
    let $n, var$3;
    jl_Integer_$callClinit();
    if (!$i)
        return 32;
    $n = 0;
    var$3 = $i >>> 16 | 0;
    if (var$3)
        $n = 16;
    else
        var$3 = $i;
    $i = var$3 >>> 8 | 0;
    if (!$i)
        $i = var$3;
    else
        $n = $n | 8;
    var$3 = $i >>> 4 | 0;
    if (!var$3)
        var$3 = $i;
    else
        $n = $n | 4;
    $i = var$3 >>> 2 | 0;
    if (!$i)
        $i = var$3;
    else
        $n = $n | 2;
    if ($i >>> 1 | 0)
        $n = $n | 1;
    return (32 - $n | 0) - 1 | 0;
},
jl_Integer_numberOfTrailingZeros = $i => {
    let $n, var$3;
    jl_Integer_$callClinit();
    if (!$i)
        return 32;
    $n = 0;
    var$3 = $i << 16;
    if (var$3)
        $n = 16;
    else
        var$3 = $i;
    $i = var$3 << 8;
    if (!$i)
        $i = var$3;
    else
        $n = $n | 8;
    var$3 = $i << 4;
    if (!var$3)
        var$3 = $i;
    else
        $n = $n | 4;
    $i = var$3 << 2;
    if (!$i)
        $i = var$3;
    else
        $n = $n | 2;
    if ($i << 1)
        $n = $n | 1;
    return (32 - $n | 0) - 1 | 0;
},
jl_Integer__clinit_ = () => {
    jl_Integer_TYPE = $rt_cls($rt_intcls);
};
function jl_AbstractStringBuilder() {
    let a = this; jl_Object.call(a);
    a.$buffer = null;
    a.$length0 = 0;
}
let jl_AbstractStringBuilder__init_ = $this => {
    jl_AbstractStringBuilder__init_0($this, 16);
},
jl_AbstractStringBuilder__init_2 = () => {
    let var_0 = new jl_AbstractStringBuilder();
    jl_AbstractStringBuilder__init_(var_0);
    return var_0;
},
jl_AbstractStringBuilder__init_0 = ($this, $capacity) => {
    $this.$buffer = $rt_createCharArray($capacity);
},
jl_AbstractStringBuilder__init_1 = var_0 => {
    let var_1 = new jl_AbstractStringBuilder();
    jl_AbstractStringBuilder__init_0(var_1, var_0);
    return var_1;
},
jl_AbstractStringBuilder_append1 = ($this, $value, $radix) => {
    return jl_AbstractStringBuilder_insert1($this, $this.$length0, $value, $radix);
},
jl_AbstractStringBuilder_insert1 = ($this, $target, $value, $radix) => {
    let $positive, var$5, var$6, $pos, $sz, $posLimit, var$10;
    $positive = 1;
    if ($value < 0) {
        $positive = 0;
        $value =  -$value | 0;
    }
    a: {
        if ($rt_ucmp($value, $radix) < 0) {
            if ($positive)
                jl_AbstractStringBuilder_insertSpace($this, $target, $target + 1 | 0);
            else {
                jl_AbstractStringBuilder_insertSpace($this, $target, $target + 2 | 0);
                var$5 = $this.$buffer.data;
                var$6 = $target + 1 | 0;
                var$5[$target] = 45;
                $target = var$6;
            }
            $this.$buffer.data[$target] = jl_Character_forDigit($value, $radix);
        } else {
            $pos = 1;
            $sz = 1;
            $posLimit = $rt_udiv((-1), $radix);
            b: {
                while (true) {
                    var$10 = $rt_imul($pos, $radix);
                    if ($rt_ucmp(var$10, $value) > 0) {
                        var$10 = $pos;
                        break b;
                    }
                    $sz = $sz + 1 | 0;
                    if ($rt_ucmp(var$10, $posLimit) > 0)
                        break;
                    $pos = var$10;
                }
            }
            if (!$positive)
                $sz = $sz + 1 | 0;
            jl_AbstractStringBuilder_insertSpace($this, $target, $target + $sz | 0);
            if ($positive)
                $positive = $target;
            else {
                var$5 = $this.$buffer.data;
                $positive = $target + 1 | 0;
                var$5[$target] = 45;
            }
            while (true) {
                if (!var$10)
                    break a;
                var$5 = $this.$buffer.data;
                $target = $positive + 1 | 0;
                var$5[$positive] = jl_Character_forDigit($rt_udiv($value, var$10), $radix);
                $value = $rt_umod($value, var$10);
                var$10 = $rt_udiv(var$10, $radix);
                $positive = $target;
            }
        }
    }
    return $this;
},
jl_AbstractStringBuilder_append = ($this, $c) => {
    return $this.$insert0($this.$length0, $c);
},
jl_AbstractStringBuilder_insert0 = ($this, $index, $c) => {
    jl_AbstractStringBuilder_insertSpace($this, $index, $index + 1 | 0);
    $this.$buffer.data[$index] = $c;
    return $this;
},
jl_AbstractStringBuilder_ensureCapacity = ($this, $capacity) => {
    let var$2, $newLength, var$4, var$5, var$6;
    var$2 = $this.$buffer.data.length;
    if (var$2 >= $capacity)
        return;
    $newLength = var$2 >= 1073741823 ? 2147483647 : jl_Math_max($capacity, jl_Math_max(var$2 * 2 | 0, 5));
    var$4 = $this.$buffer.data;
    var$5 = $rt_createCharArray($newLength);
    var$6 = var$5.data;
    $capacity = jl_Math_min($newLength, var$4.length);
    var$2 = 0;
    while (var$2 < $capacity) {
        var$6[var$2] = var$4[var$2];
        var$2 = var$2 + 1 | 0;
    }
    $this.$buffer = var$5;
},
jl_AbstractStringBuilder_toString = $this => {
    return jl_String__init_($this.$buffer, 0, $this.$length0);
},
jl_AbstractStringBuilder_charAt = ($this, $index) => {
    let var$2;
    if ($index >= 0 && $index < $this.$length0)
        return $this.$buffer.data[$index];
    var$2 = new jl_IndexOutOfBoundsException;
    jl_RuntimeException__init_(var$2);
    $rt_throw(var$2);
},
jl_AbstractStringBuilder_append3 = ($this, $s, $start, $end) => {
    let var$4, var$5, var$6, var$7;
    var$4 = $this.$length0;
    var$5 = $this;
    if ($start <= $end) {
        $s = $s;
        if ($end <= $s.$length0 && $start >= 0) {
            jl_AbstractStringBuilder_insertSpace(var$5, var$4, (var$4 + $end | 0) - $start | 0);
            while ($start < $end) {
                var$6 = var$5.$buffer.data;
                var$7 = var$4 + 1 | 0;
                var$6[var$4] = jl_AbstractStringBuilder_charAt($s, $start);
                $start = $start + 1 | 0;
                var$4 = var$7;
            }
            return var$5;
        }
    }
    $s = new jl_IndexOutOfBoundsException;
    jl_RuntimeException__init_($s);
    $rt_throw($s);
},
jl_AbstractStringBuilder_append2 = ($this, $chars, $offset, $len) => {
    return $this.$insert1($this.$length0, $chars, $offset, $len);
},
jl_AbstractStringBuilder_insert = ($this, $index, $chars, $offset, $len) => {
    let var$5, var$6, var$7, var$8;
    jl_AbstractStringBuilder_insertSpace($this, $index, $index + $len | 0);
    var$5 = $len + $offset | 0;
    while ($offset < var$5) {
        var$6 = $chars.data;
        var$7 = $this.$buffer.data;
        $len = $index + 1 | 0;
        var$8 = $offset + 1 | 0;
        var$7[$index] = var$6[$offset];
        $index = $len;
        $offset = var$8;
    }
    return $this;
},
jl_AbstractStringBuilder_append0 = ($this, $chars) => {
    return $this.$append3($chars, 0, $chars.data.length);
},
jl_AbstractStringBuilder_insertSpace = ($this, $start, $end) => {
    let var$3, $sz, $i, var$6;
    var$3 = $this.$length0;
    $sz = var$3 - $start | 0;
    $this.$ensureCapacity((var$3 + $end | 0) - $start | 0);
    $i = $sz - 1 | 0;
    while ($i >= 0) {
        var$6 = $this.$buffer.data;
        var$6[$end + $i | 0] = var$6[$start + $i | 0];
        $i = $i + (-1) | 0;
    }
    $this.$length0 = $this.$length0 + ($end - $start | 0) | 0;
},
jl_Appendable = $rt_classWithoutFields(0),
jl_StringBuilder = $rt_classWithoutFields(jl_AbstractStringBuilder),
jl_StringBuilder__init_0 = $this => {
    jl_AbstractStringBuilder__init_($this);
},
jl_StringBuilder__init_ = () => {
    let var_0 = new jl_StringBuilder();
    jl_StringBuilder__init_0(var_0);
    return var_0;
},
jl_StringBuilder_append = ($this, $obj) => {
    let var$2, var$3;
    var$2 = $this.$length0;
    var$3 = $this;
    $obj = $obj === null ? $rt_s(1) : $obj;
    jl_StringBuilder_insert(var$3, var$2, $obj);
    return $this;
},
jl_StringBuilder_append0 = ($this, $string) => {
    let var$2;
    var$2 = $this.$length0;
    jl_StringBuilder_insert($this, var$2, $string);
    return $this;
},
jl_StringBuilder_append1 = ($this, $value) => {
    jl_AbstractStringBuilder_append1($this, $value, 10);
    return $this;
},
jl_StringBuilder_append3 = ($this, $c) => {
    jl_AbstractStringBuilder_append($this, $c);
    return $this;
},
jl_StringBuilder_append2 = ($this, $b) => {
    let var$2, var$3, var$4;
    var$2 = $this.$length0;
    var$3 = $this;
    var$4 = !$b ? $rt_s(13) : $rt_s(14);
    jl_StringBuilder_insert(var$3, var$2, var$4);
    return $this;
},
jl_StringBuilder_delete = ($this, $start, $end) => {
    let var$3, var$4, var$5, var$6, var$7, var$8;
    if ($start >= 0) {
        var$3 = $rt_compare($start, $end);
        if (var$3 <= 0) {
            var$4 = $this.$length0;
            if ($start <= var$4) {
                if (var$3) {
                    if ($end > var$4)
                        $end = var$4;
                    var$5 = var$4 - $end | 0;
                    $this.$length0 = var$4 - ($end - $start | 0) | 0;
                    var$4 = 0;
                    while (var$4 < var$5) {
                        var$6 = $this.$buffer.data;
                        var$3 = $start + 1 | 0;
                        var$7 = $end + 1 | 0;
                        var$6[$start] = var$6[$end];
                        var$4 = var$4 + 1 | 0;
                        $start = var$3;
                        $end = var$7;
                    }
                }
                return $this;
            }
        }
    }
    var$8 = new jl_StringIndexOutOfBoundsException;
    jl_RuntimeException__init_(var$8);
    $rt_throw(var$8);
},
jl_StringBuilder_deleteCharAt = ($this, $index) => {
    let var$2, var$3, var$4, var$5;
    if ($index >= 0) {
        var$2 = $this.$length0;
        if ($index < var$2) {
            var$2 = var$2 - 1 | 0;
            $this.$length0 = var$2;
            while ($index < var$2) {
                var$3 = $this.$buffer.data;
                var$4 = $index + 1 | 0;
                var$3[$index] = var$3[var$4];
                $index = var$4;
            }
            return $this;
        }
    }
    var$5 = new jl_StringIndexOutOfBoundsException;
    jl_RuntimeException__init_(var$5);
    $rt_throw(var$5);
},
jl_StringBuilder_insert1 = ($this, var$1, var$2, var$3, var$4) => {
    jl_AbstractStringBuilder_insert($this, var$1, var$2, var$3, var$4);
    return $this;
},
jl_StringBuilder_append4 = ($this, var$1, var$2, var$3) => {
    jl_AbstractStringBuilder_append2($this, var$1, var$2, var$3);
    return $this;
},
jl_StringBuilder_length = $this => {
    return $this.$length0;
},
jl_StringBuilder_toString = $this => {
    return jl_AbstractStringBuilder_toString($this);
},
jl_StringBuilder_ensureCapacity = ($this, var$1) => {
    jl_AbstractStringBuilder_ensureCapacity($this, var$1);
},
jl_StringBuilder_insert0 = ($this, var$1, var$2) => {
    jl_AbstractStringBuilder_insert0($this, var$1, var$2);
    return $this;
},
jl_StringBuilder_insert = ($this, var$1, var$2) => {
    let var$3, var$4, var$5, var$6;
    if (var$1 >= 0 && var$1 <= $this.$length0) {
        a: {
            if (var$2 === null)
                var$2 = $rt_s(1);
            else if (jl_String_isEmpty(var$2))
                break a;
            var$3 = $this.$length0 + var$2.$nativeString.length | 0;
            jl_AbstractStringBuilder_ensureCapacity($this, var$3);
            var$4 = $this.$length0 - 1 | 0;
            while (var$4 >= var$1) {
                $this.$buffer.data[var$4 + var$2.$nativeString.length | 0] = $this.$buffer.data[var$4];
                var$4 = var$4 + (-1) | 0;
            }
            $this.$length0 = $this.$length0 + var$2.$nativeString.length | 0;
            var$3 = 0;
            while (var$3 < var$2.$nativeString.length) {
                var$5 = $this.$buffer.data;
                var$6 = var$1 + 1 | 0;
                var$5[var$1] = jl_String_charAt(var$2, var$3);
                var$3 = var$3 + 1 | 0;
                var$1 = var$6;
            }
        }
        return $this;
    }
    var$2 = new jl_StringIndexOutOfBoundsException;
    jl_RuntimeException__init_(var$2);
    $rt_throw(var$2);
};
function jl_Throwable() {
    let a = this; jl_Object.call(a);
    a.$message = null;
    a.$cause = null;
    a.$suppressionEnabled = 0;
    a.$writableStackTrace = 0;
}
let jl_Throwable_fillInStackTrace = $this => {
    return $this;
},
jl_Throwable_initNativeException = $this => {
    $rt_fillNativeException($this);
},
jl_Throwable_getMessage = $this => {
    return $this.$message;
},
jl_Throwable_getCause = $this => {
    let var$1;
    var$1 = $this.$cause;
    if (var$1 === $this)
        var$1 = null;
    return var$1;
},
jl_Exception = $rt_classWithoutFields(jl_Throwable),
jl_RuntimeException = $rt_classWithoutFields(jl_Exception),
jl_RuntimeException__init_ = $this => {
    jl_Throwable_initNativeException($this);
    $this.$suppressionEnabled = 1;
    $this.$writableStackTrace = 1;
},
jl_RuntimeException__init_2 = () => {
    let var_0 = new jl_RuntimeException();
    jl_RuntimeException__init_(var_0);
    return var_0;
},
jl_RuntimeException__init_0 = ($this, $message) => {
    jl_Throwable_initNativeException($this);
    $this.$suppressionEnabled = 1;
    $this.$writableStackTrace = 1;
    $this.$message = $message;
},
jl_RuntimeException__init_1 = var_0 => {
    let var_1 = new jl_RuntimeException();
    jl_RuntimeException__init_0(var_1, var_0);
    return var_1;
},
otrr_ReflectionInfo = $rt_classWithoutFields(),
otrr_ClassInfo = $rt_classWithoutFields(otrr_ReflectionInfo),
otrr_ClassInfo_newArrayInstance = (var$0, var$1) => {
    switch (var$0.primitiveKind) {
        default: return $rt_createArray(var$0, var$1);
    }
},
otr_StringInfo = $rt_classWithoutFields(otrr_ReflectionInfo),
rdd_Main = $rt_classWithoutFields(),
rdd_Main_$callClinit = () => {
    rdd_Main_$callClinit = $rt_eraseClinit(rdd_Main);
    rdd_Main__clinit_();
},
rdd_Main_main = var$1 => {
    let var$2, var$3, var$4, var$5, var$6;
    rdd_Main_$callClinit();
    rddc_GameStorage_$callClinit();
    var$2 = $rt_str(rddc_GameStorage_ls.getItem("dinopedia_arch_save"));
    if (var$2 !== null && !jl_String_isEmpty(var$2)) {
        var$3 = rddc_GameStorage_extract(var$2, $rt_s(15));
        if (var$3 !== null && !jl_String_isEmpty(var$3))
            rddc_GameStorage_current = rddc_GameStorage_loadProfile(var$3);
    }
    var$3 = new rdd_Game;
    rdd_Game_$callClinit();
    var$3.$currentLevel = 1;
    var$3.$introIndex = 0;
    var$4 = rddc_UIHelper_byId($rt_s(16));
    var$4.appendChild(rdd_Game_createScreen(var$3, $rt_s(17), $rt_s(18)));
    var$4.appendChild(rdd_Game_createScreen(var$3, $rt_s(19), $rt_s(20)));
    var$4.appendChild(rdd_Game_createScreen(var$3, $rt_s(21), $rt_s(22)));
    var$4.appendChild(rdd_Game_createScreen(var$3, $rt_s(23), $rt_s(24)));
    var$4.appendChild(rdd_Game_createScreen(var$3, $rt_s(25), $rt_s(26)));
    var$4.appendChild(rdd_Game_createScreen(var$3, $rt_s(27), $rt_s(28)));
    var$4.appendChild(rdd_Game_createScreen(var$3, $rt_s(29), $rt_s(30)));
    var$4.appendChild(rdd_Game_createScreen(var$3, $rt_s(31), $rt_s(32)));
    var$4.appendChild(rdd_Game_createScreen(var$3, $rt_s(33), $rt_s(34)));
    var$4.appendChild(rdd_Game_createScreen(var$3, $rt_s(35), $rt_s(36)));
    var$4.appendChild(rdd_Game_createScreen(var$3, $rt_s(37), $rt_s(38)));
    var$2 = rddc_UIHelper_byId($rt_s(39));
    var$5 = new rdd_Game$setupAuthHandlers$lambda$_4_0;
    var$5.$_041 = var$3;
    otjde_MouseEventTarget_onClick$static(var$2, otji_JSWrapper_unwrap(var$5));
    var$2 = rddc_UIHelper_byId($rt_s(40));
    var$5 = new rdd_Game$setupAuthHandlers$lambda$_4_1;
    var$5.$_017 = var$3;
    otjde_MouseEventTarget_onClick$static(var$2, otji_JSWrapper_unwrap(var$5));
    var$2 = rddc_UIHelper_byId($rt_s(41));
    var$5 = new rdd_Game$setupAuthHandlers$lambda$_4_2;
    var$5.$_07 = var$3;
    otjde_MouseEventTarget_onClick$static(var$2, otji_JSWrapper_unwrap(var$5));
    var$2 = rddc_UIHelper_byId($rt_s(42));
    var$5 = new rdd_Game$setupIntroHandlers$lambda$_8_0;
    var$5.$_05 = var$3;
    otjde_MouseEventTarget_onClick$static(var$2, otji_JSWrapper_unwrap(var$5));
    var$2 = rddc_UIHelper_byId($rt_s(43));
    var$5 = new rdd_Game$setupMenuHandlers$lambda$_12_0;
    var$5.$_011 = var$3;
    otjde_MouseEventTarget_onClick$static(var$2, otji_JSWrapper_unwrap(var$5));
    var$2 = rddc_UIHelper_byId($rt_s(44));
    var$5 = new rdd_Game$setupMenuHandlers$lambda$_12_1;
    var$5.$_00 = var$3;
    otjde_MouseEventTarget_onClick$static(var$2, otji_JSWrapper_unwrap(var$5));
    var$2 = rddc_UIHelper_byId($rt_s(45));
    var$5 = new rdd_Game$setupMenuHandlers$lambda$_12_2;
    var$5.$_038 = var$3;
    otjde_MouseEventTarget_onClick$static(var$2, otji_JSWrapper_unwrap(var$5));
    var$2 = rddc_UIHelper_byId($rt_s(46));
    var$5 = new rdd_Game$setupMenuHandlers$lambda$_12_3;
    var$5.$_035 = var$3;
    otjde_MouseEventTarget_onClick$static(var$2, otji_JSWrapper_unwrap(var$5));
    var$2 = rddc_UIHelper_byId($rt_s(47));
    var$5 = new rdd_Game$setupMenuHandlers$lambda$_12_4;
    var$5.$_024 = var$3;
    otjde_MouseEventTarget_onClick$static(var$2, otji_JSWrapper_unwrap(var$5));
    var$2 = rddc_UIHelper_byId($rt_s(48));
    var$5 = new rdd_Game$setupNavigationHandlers$lambda$_24_0;
    var$5.$_027 = var$3;
    otjde_MouseEventTarget_onClick$static(var$2, otji_JSWrapper_unwrap(var$5));
    var$2 = rddc_UIHelper_byId($rt_s(49));
    var$5 = new rdd_Game$setupNavigationHandlers$lambda$_24_1;
    var$5.$_015 = var$3;
    otjde_MouseEventTarget_onClick$static(var$2, otji_JSWrapper_unwrap(var$5));
    var$2 = rddc_UIHelper_byId($rt_s(50));
    var$5 = new rdd_Game$setupNavigationHandlers$lambda$_24_2;
    var$5.$_04 = var$3;
    otjde_MouseEventTarget_onClick$static(var$2, otji_JSWrapper_unwrap(var$5));
    var$2 = rddc_UIHelper_byId($rt_s(51));
    var$5 = new rdd_Game$setupNavigationHandlers$lambda$_24_3;
    var$5.$_030 = var$3;
    otjde_MouseEventTarget_onClick$static(var$2, otji_JSWrapper_unwrap(var$5));
    var$2 = rddc_UIHelper_byId($rt_s(52));
    var$5 = new rdd_Game$setupNavigationHandlers$lambda$_24_4;
    var$5.$_021 = var$3;
    otjde_MouseEventTarget_onClick$static(var$2, otji_JSWrapper_unwrap(var$5));
    var$2 = rddc_UIHelper_byId($rt_s(53));
    var$5 = new rdd_Game$setupNavigationHandlers$lambda$_24_5;
    var$5.$_09 = var$3;
    otjde_MouseEventTarget_onClick$static(var$2, otji_JSWrapper_unwrap(var$5));
    var$2 = rddc_UIHelper_byId($rt_s(54));
    var$5 = new rdd_PathGame;
    var$4 = new rdd_Game$buildAllScreens$lambda$_2_0;
    var$4.$_022 = var$3;
    var$6 = new rdd_Game$buildAllScreens$lambda$_2_1;
    var$6.$_039 = var$3;
    var$5.$doc = window.document;
    var$5.$lives = 3;
    var$5.$score = 0;
    var$5.$level0 = 1;
    var$5.$playing = 0;
    var$5.$invulnTimer = 0.0;
    var$5.$lastTime = 0.0;
    var$5.$animId = (-1);
    var$5.$canvas0 = var$2;
    var$5.$ctx = var$2.getContext("2d");
    var$5.$onCompleteCallback0 = var$4;
    var$5.$onFailCallback = var$6;
    rdd_PathGame_resize(var$5);
    rdd_PathGame_setupInput(var$5);
    var$3.$pathGame = var$5;
    var$2 = rddc_UIHelper_byId($rt_s(55));
    var$5 = new rdd_DigGame;
    var$4 = new rdd_Game$buildAllScreens$lambda$_2_2;
    var$4.$_0 = var$3;
    var$6 = new rdd_Game$buildAllScreens$lambda$_2_3;
    var$6.$_012 = var$3;
    rdd_DigGame__init_(var$5, var$2, var$4, var$6);
    var$3.$digGame = var$5;
    if (!rddc_GameStorage_isLoggedIn())
        rdd_Game_showScreen(var$3, $rt_s(17));
    else {
        rdd_Game_showScreen(var$3, $rt_s(21));
        rdd_Game_updatePlayerInfo(var$3);
    }
},
rdd_Main__clinit_ = () => {
    return;
},
jl_ClassCastException = $rt_classWithoutFields(jl_RuntimeException),
otp_Platform = $rt_classWithoutFields(),
otji_JS = $rt_classWithoutFields(),
otji_JS_function = (var$1, var$2) => {
    if (var$1 === null || var$1 === undefined) {
        return null;
    }
    let name = 'jso$functor$' + var$2;
    let result = var$1[name];
    if (typeof result !== 'function') {
        let fn = function() {
            return var$1[var$2].apply(var$1, arguments);
        };
        result = () => fn;
        var$1[name] = result;
    }
    return result();
},
otci_IntegerUtil = $rt_classWithoutFields(),
rddc_GameStorage = $rt_classWithoutFields(),
rddc_GameStorage_ls = null,
rddc_GameStorage_current = null,
rddc_GameStorage_$callClinit = () => {
    rddc_GameStorage_$callClinit = $rt_eraseClinit(rddc_GameStorage);
    rddc_GameStorage__clinit_();
},
rddc_GameStorage_current0 = () => {
    rddc_GameStorage_$callClinit();
    return rddc_GameStorage_current;
},
rddc_GameStorage_isLoggedIn = () => {
    rddc_GameStorage_$callClinit();
    return rddc_GameStorage_current === null ? 0 : 1;
},
rddc_GameStorage_save = () => {
    let var$1;
    rddc_GameStorage_$callClinit();
    var$1 = rddc_GameStorage_current;
    if (var$1 !== null)
        rddc_GameStorage_saveProfile(var$1);
},
rddc_GameStorage_getStars = $dinoId => {
    let var$2, $count;
    rddc_GameStorage_$callClinit();
    var$2 = rddc_GameStorage_current;
    if (var$2 === null)
        return 0;
    $count = var$2.$collection.data[$dinoId - 1 | 0];
    if ($count >= 25)
        return 3;
    if ($count >= 10)
        return 2;
    if ($count < 1)
        return 0;
    return 1;
},
rddc_GameStorage_getDinoCount = $dinoId => {
    let var$2;
    rddc_GameStorage_$callClinit();
    var$2 = rddc_GameStorage_current;
    if (var$2 === null)
        return 0;
    return var$2.$collection.data[$dinoId - 1 | 0];
},
rddc_GameStorage_saveCurrentEmail = $email => {
    let var$2, var$3;
    rddc_GameStorage_$callClinit();
    var$2 = rddc_GameStorage_ls;
    var$3 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$3);
    jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(var$3, $rt_s(56)), $email), $rt_s(57));
    var$3 = jl_AbstractStringBuilder_toString(var$3);
    var$2.setItem("dinopedia_arch_save", $rt_ustr(var$3));
},
rddc_GameStorage_saveProfile = $p => {
    let $sb, $i, var$4, var$5;
    rddc_GameStorage_$callClinit();
    $sb = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_($sb);
    jl_StringBuilder_append0($sb, $rt_s(58));
    jl_StringBuilder_append0(jl_StringBuilder_append0(jl_StringBuilder_append0($sb, $rt_s(59)), rddc_GameStorage_escape($p.$email)), $rt_s(60));
    jl_StringBuilder_append0(jl_StringBuilder_append0(jl_StringBuilder_append0($sb, $rt_s(61)), rddc_GameStorage_escape($p.$name)), $rt_s(60));
    jl_StringBuilder_append1(jl_StringBuilder_append0($sb, $rt_s(62)), $p.$level);
    jl_StringBuilder_append1(jl_StringBuilder_append0($sb, $rt_s(63)), $p.$totalScore);
    jl_StringBuilder_append1(jl_StringBuilder_append0($sb, $rt_s(64)), $p.$gamesPlayed);
    jl_StringBuilder_append1(jl_StringBuilder_append0($sb, $rt_s(65)), $p.$gamesWon);
    jl_StringBuilder_append1(jl_StringBuilder_append0($sb, $rt_s(66)), $p.$unlockedLevels);
    jl_StringBuilder_append2(jl_StringBuilder_append0($sb, $rt_s(67)), $p.$isDemo);
    jl_StringBuilder_append2(jl_StringBuilder_append0($sb, $rt_s(68)), $p.$sound);
    jl_StringBuilder_append2(jl_StringBuilder_append0($sb, $rt_s(69)), $p.$music);
    jl_StringBuilder_append2(jl_StringBuilder_append0($sb, $rt_s(70)), $p.$hints);
    jl_StringBuilder_append0($sb, $rt_s(71));
    $i = 0;
    while ($i < $p.$collection.data.length) {
        if ($i > 0)
            jl_StringBuilder_append0($sb, $rt_s(72));
        jl_StringBuilder_append1($sb, $p.$collection.data[$i]);
        $i = $i + 1 | 0;
    }
    jl_StringBuilder_append0($sb, $rt_s(73));
    var$4 = rddc_GameStorage_ls;
    $p = $p.$email;
    var$5 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$5);
    jl_StringBuilder_append(jl_StringBuilder_append(var$5, $rt_s(74)), $p);
    $p = jl_AbstractStringBuilder_toString(var$5);
    var$5 = jl_AbstractStringBuilder_toString($sb);
    var$4.setItem($rt_ustr($p), $rt_ustr(var$5));
},
rddc_GameStorage_loadProfile = $email => {
    let var$2, $p, $json, $i, $col, var$7, var$8, var$9, $$je;
    rddc_GameStorage_$callClinit();
    var$2 = rddc_GameStorage_ls;
    $p = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_($p);
    jl_StringBuilder_append(jl_StringBuilder_append($p, $rt_s(74)), $email);
    $json = $rt_str(var$2.getItem($rt_ustr(jl_AbstractStringBuilder_toString($p))));
    if ($json !== null && !jl_String_isEmpty($json)) {
        $p = rddc_GameStorage$Profile__init_();
        $p.$email = $email;
        var$2 = rddc_GameStorage_extract($json, $rt_s(75));
        $p.$name = var$2;
        if (var$2 === null)
            $p.$name = (jl_String_split($email, $rt_s(76))).data[0];
        $p.$level = rddc_GameStorage_extractInt($json, $rt_s(77), 1);
        $p.$totalScore = rddc_GameStorage_extractInt($json, $rt_s(78), 0);
        $p.$gamesPlayed = rddc_GameStorage_extractInt($json, $rt_s(79), 0);
        $p.$gamesWon = rddc_GameStorage_extractInt($json, $rt_s(80), 0);
        $p.$unlockedLevels = rddc_GameStorage_extractInt($json, $rt_s(81), 1);
        var$2 = new jl_StringBuilder;
        jl_AbstractStringBuilder__init_(var$2);
        jl_AbstractStringBuilder_append(var$2, 34);
        jl_StringBuilder_append(jl_StringBuilder_append(var$2, $rt_s(82)), $rt_s(83));
        $email = jl_AbstractStringBuilder_toString(var$2);
        $i = jl_String_indexOf($json, $email);
        $p.$isDemo = $i < 0 ? 0 : jl_String_startsWith(jl_String_substring0($json, $i + $email.$nativeString.length | 0), $rt_s(14));
        $p.$sound = rddc_GameStorage_extractBoolDef($json, $rt_s(84), 1);
        $p.$music = rddc_GameStorage_extractBoolDef($json, $rt_s(85), 1);
        $p.$hints = rddc_GameStorage_extractBoolDef($json, $rt_s(86), 1);
        var$2 = new jl_StringBuilder;
        jl_AbstractStringBuilder__init_(var$2);
        jl_AbstractStringBuilder_append(var$2, 34);
        jl_StringBuilder_append(jl_StringBuilder_append(var$2, $rt_s(87)), $rt_s(88));
        $email = jl_AbstractStringBuilder_toString(var$2);
        $i = jl_String_indexOf($json, $email);
        if ($i < 0)
            $col = null;
        else {
            $i = $i + $email.$nativeString.length | 0;
            var$7 = jl_String_indexOf1($json, $rt_s(89), $i);
            if (var$7 < 0)
                $col = null;
            else {
                var$8 = (jl_String_split(jl_String_substring($json, $i, var$7), $rt_s(72))).data;
                $i = var$8.length;
                $col = $rt_createIntArray($i);
                var$9 = $col.data;
                var$7 = 0;
                while (var$7 < $i) {
                    a: {
                        try {
                            var$9[var$7] = jl_Integer_parseInt0(jl_String_trim(var$8[var$7]));
                            break a;
                        } catch ($$e) {
                            $$je = $rt_wrapException($$e);
                            if ($$je instanceof jl_Exception) {
                                var$9[var$7] = 0;
                                break a;
                            } else {
                                throw $$e;
                            }
                        }
                    }
                    var$7 = var$7 + 1 | 0;
                }
            }
        }
        b: {
            if ($col !== null) {
                $i = 0;
                while (true) {
                    var$8 = $col.data;
                    if ($i >= jl_Math_min(var$8.length, $p.$collection.data.length))
                        break b;
                    $p.$collection.data[$i] = var$8[$i];
                    $i = $i + 1 | 0;
                }
            }
        }
        return $p;
    }
    return null;
},
rddc_GameStorage_extract = ($json, $key) => {
    let var$3, $start, $end;
    rddc_GameStorage_$callClinit();
    var$3 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$3);
    jl_AbstractStringBuilder_append(var$3, 34);
    jl_StringBuilder_append(jl_StringBuilder_append(var$3, $key), $rt_s(90));
    $key = jl_AbstractStringBuilder_toString(var$3);
    $start = jl_String_indexOf($json, $key);
    if ($start < 0)
        return null;
    $start = $start + $key.$nativeString.length | 0;
    $end = jl_String_indexOf1($json, $rt_s(60), $start);
    if ($end < 0)
        return null;
    return jl_String_replace(jl_String_replace(jl_String_substring($json, $start, $end), $rt_s(91), $rt_s(60)), $rt_s(92), $rt_s(93));
},
rddc_GameStorage_extractInt = ($json, $key, $def) => {
    let var$4, $start, $end, var$7, $$je;
    rddc_GameStorage_$callClinit();
    var$4 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$4);
    jl_AbstractStringBuilder_append(var$4, 34);
    jl_StringBuilder_append(jl_StringBuilder_append(var$4, $key), $rt_s(83));
    $key = jl_AbstractStringBuilder_toString(var$4);
    $start = jl_String_indexOf($json, $key);
    if ($start < 0)
        return $def;
    $start = $start + $key.$nativeString.length | 0;
    $end = $start;
    while ($end < $json.$nativeString.length) {
        var$7 = jl_String_charAt($json, $end);
        jl_Character_$callClinit();
        if (!jl_Character_isDigit(var$7) && jl_String_charAt($json, $end) != 45)
            break;
        $end = $end + 1 | 0;
    }
    a: {
        try {
            $start = jl_Integer_parseInt0(jl_String_substring($json, $start, $end));
        } catch ($$e) {
            $$je = $rt_wrapException($$e);
            if ($$je instanceof jl_Exception) {
                break a;
            } else {
                throw $$e;
            }
        }
        return $start;
    }
    return $def;
},
rddc_GameStorage_extractBoolDef = ($json, $key, $def) => {
    let var$4, $start;
    rddc_GameStorage_$callClinit();
    var$4 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$4);
    jl_AbstractStringBuilder_append(var$4, 34);
    jl_StringBuilder_append(jl_StringBuilder_append(var$4, $key), $rt_s(83));
    $key = jl_AbstractStringBuilder_toString(var$4);
    $start = jl_String_indexOf($json, $key);
    if ($start < 0)
        return $def;
    $start = $start + $key.$nativeString.length | 0;
    if (jl_String_startsWith(jl_String_substring0($json, $start), $rt_s(14)))
        return 1;
    if (!jl_String_startsWith(jl_String_substring0($json, $start), $rt_s(13)))
        return $def;
    return 0;
},
rddc_GameStorage_escape = $s => {
    rddc_GameStorage_$callClinit();
    return jl_String_replace(jl_String_replace($s, $rt_s(93), $rt_s(92)), $rt_s(60), $rt_s(91));
},
rddc_GameStorage__clinit_ = () => {
    rddc_GameStorage_ls = window.localStorage;
    rddc_GameStorage_current = null;
};
function rdd_Game() {
    let a = this; jl_Object.call(a);
    a.$pathGame = null;
    a.$digGame = null;
    a.$currentLevel = 0;
    a.$foundDinosaur = null;
    a.$introIndex = 0;
}
let rdd_Game_INTRO_TEXTS = null,
rdd_Game_$callClinit = () => {
    rdd_Game_$callClinit = $rt_eraseClinit(rdd_Game);
    rdd_Game__clinit_();
},
rdd_Game_createScreen = ($this, $id, $innerHTML) => {
    let $div;
    $div = rddc_UIHelper_create($rt_s(94));
    $div.setAttribute("id", $rt_ustr($id));
    $div.classList.add("screen");
    $id = $rt_ustr($innerHTML);
    $div.innerHTML = $id;
    return $div;
},
rdd_Game_startIntro = $this => {
    $this.$introIndex = 0;
    rdd_Game_updatePlayerInfo($this);
    rdd_Game_showScreen($this, $rt_s(19));
    rdd_Game_renderIntroText($this);
},
rdd_Game_renderIntroText = $this => {
    rdd_Game_$callClinit();
    rddc_UIHelper_setText($rt_s(95), rdd_Game_INTRO_TEXTS.data[$this.$introIndex]);
    otjdh_HTMLElement_withText$static(rddc_UIHelper_byId($rt_s(42)), $this.$introIndex >= (rdd_Game_INTRO_TEXTS.data.length - 1 | 0) ? $rt_s(96) : $rt_s(97));
},
rdd_Game_updatePlayerInfo = $this => {
    let $p, var$2;
    $p = rddc_GameStorage_current0();
    if ($p !== null) {
        rddc_UIHelper_setText($rt_s(98), $p.$name);
        var$2 = $p.$level;
        $p = new jl_StringBuilder;
        jl_AbstractStringBuilder__init_($p);
        jl_StringBuilder_append1(jl_StringBuilder_append($p, $rt_s(99)), var$2);
        rddc_UIHelper_setText($rt_s(100), jl_AbstractStringBuilder_toString($p));
    }
},
rdd_Game_generateLevelsGrid = $this => {
    let $grid, $unlocked, $i, $btn, var$5;
    $grid = rddc_UIHelper_byId($rt_s(101));
    otjdh_HTMLElement_clear$static($grid);
    $unlocked = rddc_GameStorage_current0() === null ? 1 : (rddc_GameStorage_current0()).$unlockedLevels;
    $i = 1;
    while ($i <= 10) {
        $btn = rddc_UIHelper_create($rt_s(102));
        if ($i > $unlocked) {
            $btn.classList.add("locked");
            otjdh_HTMLElement_withText$static($btn, $rt_s(103));
        } else {
            var$5 = new jl_StringBuilder;
            jl_AbstractStringBuilder__init_(var$5);
            jl_StringBuilder_append1(jl_StringBuilder_append(var$5, $rt_s(104)), $i);
            otjdh_HTMLElement_withText$static($btn, jl_AbstractStringBuilder_toString(var$5));
            var$5 = new rdd_Game$generateLevelsGrid$lambda$_14_0;
            var$5.$_01 = $this;
            var$5.$_1 = $i;
            otjde_MouseEventTarget_onClick$static($btn, otji_JSWrapper_unwrap(var$5));
        }
        $grid.appendChild($btn);
        $i = $i + 1 | 0;
    }
},
rdd_Game_renderEncyclopedia = $this => {
    let $grid, $foundCount, var$3, var$4, var$5, $dino, $count, $stars, $card, $starsStr, $s, var$12, var$13, var$14, var$15, $dinoId;
    rdd_Game_showScreen($this, $rt_s(31));
    $grid = rddc_UIHelper_byId($rt_s(105));
    otjdh_HTMLElement_clear$static($grid);
    $foundCount = 0;
    rddd_Dinosaurs_$callClinit();
    var$3 = rddd_Dinosaurs_DATA.data;
    var$4 = var$3.length;
    var$5 = 0;
    while (var$5 < var$4) {
        $dino = var$3[var$5];
        $count = rddc_GameStorage_getDinoCount($dino.$id);
        $stars = rddc_GameStorage_getStars($dino.$id);
        if ($count > 0)
            $foundCount = $foundCount + 1 | 0;
        $card = rddc_UIHelper_create($rt_s(94));
        $card.classList.add("dino-card");
        if (!$count) {
            $card.classList.add("locked");
            $card.innerHTML = "<div class=\"dino-icon\">❓</div><div class=\"dino-stars\"></div>";
        } else {
            $starsStr = new jl_StringBuilder;
            jl_AbstractStringBuilder__init_($starsStr);
            $s = 0;
            while ($s < $stars) {
                jl_StringBuilder_append0($starsStr, $rt_s(106));
                $s = $s + 1 | 0;
            }
            var$12 = $dino.$icon;
            var$13 = jl_String_valueOf($starsStr);
            var$14 = $dino.$name0;
            var$15 = new jl_StringBuilder;
            jl_AbstractStringBuilder__init_(var$15);
            jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(var$15, $rt_s(107)), var$12), $rt_s(108)), var$13), $rt_s(109)), var$14), $rt_s(110));
            $card.innerHTML = $rt_ustr(jl_AbstractStringBuilder_toString(var$15));
            $dinoId = $dino.$id;
            var$15 = new rdd_Game$renderEncyclopedia$lambda$_21_0;
            var$15.$_014 = $this;
            var$15.$_10 = $dinoId;
            otjde_MouseEventTarget_onClick$static($card, otji_JSWrapper_unwrap(var$15));
        }
        $grid.appendChild($card);
        var$5 = var$5 + 1 | 0;
    }
    $s = rddd_Dinosaurs_count();
    $grid = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_($grid);
    var$15 = jl_StringBuilder_append1(jl_StringBuilder_append($grid, $rt_s(111)), $foundCount);
    jl_AbstractStringBuilder_append(var$15, 47);
    jl_StringBuilder_append1(var$15, $s);
    rddc_UIHelper_setText($rt_s(112), jl_AbstractStringBuilder_toString($grid));
},
rdd_Game_showScreen = ($this, $screenId) => {
    let var$2, var$3;
    a: {
        rddc_UIHelper_$callClinit();
        var$2 = rddc_UIHelper_byId($rt_s(16));
        if (var$2 !== null) {
            var$3 = 0;
            while (true) {
                if (var$3 >= var$2.children.length)
                    break a;
                (otji_JSWrapper_maybeUnwrap(var$2.children[var$3])).classList.remove("active");
                var$3 = var$3 + 1 | 0;
            }
        }
    }
    $screenId = rddc_UIHelper_byId($screenId);
    if ($screenId !== null)
        $screenId.classList.add("active");
},
rdd_Game__clinit_ = () => {
    rdd_Game_INTRO_TEXTS = $rt_wrapArray(jl_String, [$rt_s(113), $rt_s(114), $rt_s(115), $rt_s(116), $rt_s(117)]);
},
ju_Comparator = $rt_classWithoutFields(0),
jl_String$_clinit_$lambda$_118_0 = $rt_classWithoutFields(),
jl_Character = $rt_classWithoutFields(),
jl_Character_TYPE = null,
jl_Character_digitMapping = null,
jl_Character_upperCaseMapping = null,
jl_Character_lowerCaseMapping = null,
jl_Character_classMapping = null,
jl_Character_characterCache = null,
jl_Character_$$metadata$$0 = null,
jl_Character_$$metadata$$1 = null,
jl_Character_$$metadata$$3 = null,
jl_Character_$$metadata$$4 = null,
jl_Character_$callClinit = () => {
    jl_Character_$callClinit = $rt_eraseClinit(jl_Character);
    jl_Character__clinit_();
},
jl_Character_toString = $c => {
    let var$2, var$3;
    jl_Character_$callClinit();
    var$2 = new jl_String;
    var$3 = $rt_createCharArray(1);
    var$3.data[0] = $c;
    jl_String__init_1(var$2, var$3);
    return var$2;
},
jl_Character_isSupplementaryCodePoint = $codePoint => {
    jl_Character_$callClinit();
    return $codePoint >= 65536 && $codePoint <= 1114111 ? 1 : 0;
},
jl_Character_isHighSurrogate = $ch => {
    jl_Character_$callClinit();
    return ($ch & 64512) != 55296 ? 0 : 1;
},
jl_Character_isLowSurrogate = $ch => {
    jl_Character_$callClinit();
    return ($ch & 64512) != 56320 ? 0 : 1;
},
jl_Character_isSurrogatePair = ($high, $low) => {
    jl_Character_$callClinit();
    return jl_Character_isHighSurrogate($high) && jl_Character_isLowSurrogate($low) ? 1 : 0;
},
jl_Character_toCodePoint = ($high, $low) => {
    jl_Character_$callClinit();
    return (($high & 1023) << 10 | $low & 1023) + 65536 | 0;
},
jl_Character_highSurrogate = $codePoint => {
    jl_Character_$callClinit();
    return (55296 | ($codePoint - 65536 | 0) >> 10 & 1023) & 65535;
},
jl_Character_lowSurrogate = $codePoint => {
    jl_Character_$callClinit();
    return (56320 | $codePoint & 1023) & 65535;
},
jl_Character_toLowerCase = $ch => {
    jl_Character_$callClinit();
    return jl_Character_toLowerCase0($ch) & 65535;
},
jl_Character_toLowerCase0 = $ch => {
    jl_Character_$callClinit();
    if (jl_Character_lowerCaseMapping === null) {
        if (jl_Character_$$metadata$$0 === null)
            jl_Character_$$metadata$$0 = jl_Character_acquireLowerCaseMapping$$create();
        jl_Character_lowerCaseMapping = otciu_UnicodeHelper_createCharMapping(otciu_UnicodeHelper_decodeCaseMapping((jl_Character_$$metadata$$0.value !== null ? $rt_str(jl_Character_$$metadata$$0.value) : null)));
    }
    return jl_Character_mapChar(jl_Character_lowerCaseMapping, $ch);
},
jl_Character_toUpperCase = $ch => {
    jl_Character_$callClinit();
    return jl_Character_toUpperCase0($ch) & 65535;
},
jl_Character_toUpperCase0 = $codePoint => {
    jl_Character_$callClinit();
    if (jl_Character_upperCaseMapping === null) {
        if (jl_Character_$$metadata$$1 === null)
            jl_Character_$$metadata$$1 = jl_Character_acquireUpperCaseMapping$$create();
        jl_Character_upperCaseMapping = otciu_UnicodeHelper_createCharMapping(otciu_UnicodeHelper_decodeCaseMapping((jl_Character_$$metadata$$1.value !== null ? $rt_str(jl_Character_$$metadata$$1.value) : null)));
    }
    return jl_Character_mapChar(jl_Character_upperCaseMapping, $codePoint);
},
jl_Character_mapChar = ($table, $codePoint) => {
    let $binSearchTable, var$4, var$5, var$6, $index, var$8;
    jl_Character_$callClinit();
    $binSearchTable = $table.$fastTable.data;
    if ($codePoint < $binSearchTable.length)
        return $codePoint + $binSearchTable[$codePoint] | 0;
    $binSearchTable = $table.$binarySearchTable.data;
    var$4 = 0;
    var$5 = $binSearchTable.length;
    var$6 = (var$5 / 2 | 0) - 1 | 0;
    a: {
        while (true) {
            $index = (var$4 + var$6 | 0) / 2 | 0;
            var$8 = $rt_compare($binSearchTable[$index * 2 | 0], $codePoint);
            if (!var$8)
                break;
            if (var$8 <= 0) {
                var$4 = $index + 1 | 0;
                if (var$4 > var$6)
                    break a;
            } else {
                $index = $index - 1 | 0;
                if ($index < var$4)
                    break a;
                var$6 = $index;
            }
        }
    }
    if ($index >= 0) {
        $index = $index * 2 | 0;
        if ($index < var$5)
            return $codePoint + $binSearchTable[$index + 1 | 0] | 0;
    }
    return 0;
},
jl_Character_digit = ($ch, $radix) => {
    let var$3, var$4, var$5, var$6, var$7, var$8, var$9, var$10, var$11, var$12;
    jl_Character_$callClinit();
    if ($radix >= 2 && $radix <= 36) {
        if (jl_Character_digitMapping === null) {
            if (jl_Character_$$metadata$$3 === null)
                jl_Character_$$metadata$$3 = jl_Character_obtainDigitMapping$$create();
            var$3 = (jl_Character_$$metadata$$3.value !== null ? $rt_str(jl_Character_$$metadata$$3.value) : null);
            var$4 = otci_CharFlow__init_(jl_String_toCharArray(var$3));
            var$5 = otci_Base46_decodeUnsigned(var$4);
            var$6 = $rt_createIntArray(var$5 * 2 | 0);
            var$7 = var$6.data;
            var$8 = 0;
            var$9 = 0;
            var$10 = 0;
            var$11 = 0;
            while (var$11 < var$5) {
                var$9 = var$9 + otci_Base46_decode(var$4) | 0;
                var$10 = var$10 + otci_Base46_decode(var$4) | 0;
                var$12 = var$8 + 1 | 0;
                var$7[var$8] = var$9;
                var$8 = var$12 + 1 | 0;
                var$7[var$12] = var$10;
                var$11 = var$11 + 1 | 0;
            }
            jl_Character_digitMapping = var$6;
        }
        var$6 = jl_Character_digitMapping.data;
        var$8 = 0;
        var$9 = (var$6.length / 2 | 0) - 1 | 0;
        a: {
            while (var$9 >= var$8) {
                var$10 = (var$8 + var$9 | 0) / 2 | 0;
                var$11 = var$10 * 2 | 0;
                var$5 = $rt_compare($ch, var$6[var$11]);
                if (var$5 > 0)
                    var$8 = var$10 + 1 | 0;
                else {
                    if (var$5 >= 0) {
                        $ch = var$6[var$11 + 1 | 0];
                        break a;
                    }
                    var$9 = var$10 - 1 | 0;
                }
            }
            $ch = (-1);
        }
        if ($ch >= $radix)
            $ch = (-1);
    } else
        $ch = (-1);
    return $ch;
},
jl_Character_forDigit = ($digit, $radix) => {
    jl_Character_$callClinit();
    if ($radix >= 2 && $radix <= 36 && $digit >= 0 && $digit < $radix)
        return $digit < 10 ? (48 + $digit | 0) & 65535 : ((97 + $digit | 0) - 10 | 0) & 65535;
    return 0;
},
jl_Character_isDigit = $codePoint => {
    jl_Character_$callClinit();
    return jl_Character_getType($codePoint) != 9 ? 0 : 1;
},
jl_Character_toChars = $codePoint => {
    let var$2, var$3, var$4;
    jl_Character_$callClinit();
    if (!($codePoint >= 0 && $codePoint <= 1114111 ? 1 : 0)) {
        var$2 = new jl_IllegalArgumentException;
        jl_RuntimeException__init_(var$2);
        $rt_throw(var$2);
    }
    if ($codePoint < 65536) {
        var$3 = $rt_createCharArray(1);
        var$3.data[0] = $codePoint & 65535;
        return var$3;
    }
    var$3 = $rt_createCharArray(2);
    var$4 = var$3.data;
    var$4[0] = jl_Character_highSurrogate($codePoint);
    var$4[1] = jl_Character_lowSurrogate($codePoint);
    return var$3;
},
jl_Character_getType0 = $c => {
    jl_Character_$callClinit();
    return jl_Character_getType($c);
},
jl_Character_getType = $codePoint => {
    let $u, $classes, $l, $i, $range;
    jl_Character_$callClinit();
    if ($codePoint > 0 && $codePoint <= 65535 ? 1 : 0) {
        $u = $codePoint & 65535;
        if (!jl_Character_isHighSurrogate($u) && !jl_Character_isLowSurrogate($u) ? 0 : 1)
            return 19;
    }
    if (jl_Character_classMapping === null) {
        if (jl_Character_$$metadata$$4 === null)
            jl_Character_$$metadata$$4 = jl_Character_obtainClasses$$create();
        jl_Character_classMapping = otciu_UnicodeHelper_extractRle((jl_Character_$$metadata$$4.value !== null ? $rt_str(jl_Character_$$metadata$$4.value) : null));
    }
    $classes = jl_Character_classMapping.data;
    $l = 0;
    $u = $classes.length - 1 | 0;
    while ($l <= $u) {
        $i = ($l + $u | 0) / 2 | 0;
        $range = $classes[$i];
        if ($codePoint >= $range.$end1)
            $l = $i + 1 | 0;
        else {
            $u = $range.$start3;
            if ($codePoint >= $u)
                return $range.$data0.data[$codePoint - $u | 0];
            $u = $i - 1 | 0;
        }
    }
    return 0;
},
jl_Character_isLetterOrDigit0 = $ch => {
    jl_Character_$callClinit();
    return jl_Character_isLetterOrDigit($ch);
},
jl_Character_isLetterOrDigit = $codePoint => {
    jl_Character_$callClinit();
    a: {
        switch (jl_Character_getType($codePoint)) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 9:
                break;
            case 6:
            case 7:
            case 8:
                break a;
            default:
                break a;
        }
        return 1;
    }
    return 0;
},
jl_Character_isIdentifierIgnorable = $codePoint => {
    jl_Character_$callClinit();
    a: {
        if (!($codePoint >= 0 && $codePoint <= 8) && !($codePoint >= 14 && $codePoint <= 27)) {
            if ($codePoint < 127)
                break a;
            if ($codePoint > 159)
                break a;
        }
        return 1;
    }
    return jl_Character_getType($codePoint) != 16 ? 0 : 1;
},
jl_Character_isSpaceChar = $codePoint => {
    jl_Character_$callClinit();
    switch (jl_Character_getType($codePoint)) {
        case 12:
        case 13:
        case 14:
            break;
        default:
            return 0;
    }
    return 1;
},
jl_Character_isWhitespace = $codePoint => {
    jl_Character_$callClinit();
    switch ($codePoint) {
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 28:
        case 29:
        case 30:
        case 31:
            break;
        case 160:
        case 8199:
        case 8239:
            return 0;
        default:
            return jl_Character_isSpaceChar($codePoint);
    }
    return 1;
},
jl_Character__clinit_ = () => {
    jl_Character_TYPE = $rt_cls($rt_charcls);
    jl_Character_characterCache = $rt_createArray(jl_Character, 128);
},
jl_Character_acquireLowerCaseMapping$$create = () => {
    return {"value" : "NY  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
    + "%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
    + "# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%p kB#oq-&# _?gejg#A1 a$#%# -mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%"
    + "# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
    + "#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%"
    + "# #%# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# #$$r#%# #%# #%# #%# #%# #%# #%# #%# #P6r#}!rI )%# :GL#) i,5F#U TUg#r {%g#r >\'c#p Lnk%F# .\'F#S HB#F#b o@5F#b F#2#W 4Z;%# /%# #%# %%# \'%# M%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# u.#N#f "};
};
let jl_Character_acquireUpperCaseMapping$$create = () => {
    return {"value" : "L[  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/#N6r# %_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
    + " #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3#!$r#:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# #{!r# ){!r#F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# "
    + "#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d# #\'- (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
    + "\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D4"
    + "5#845# #\'# #\'# #\'# -\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
    + " #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# U\'# REJ#% -Dr# Yiejg# e*5H#U eUi#r {%i#r <\'e#t {nm%:# V%H#^ >B#H#b o@5H#b <#4#P# eV;\'# /\'# #\'# %\'# \'\'# M\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# Z0#P#f "};
},
jl_Character_obtainDigitMapping$$create = () => {
    return {"value" : "6G*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
    + "%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
    + "%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%_fG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%B\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%oYG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%F%G%%%%%%%%%%%%%%%%%%Z?G%%%%%%%%%%%%%%%%%%ow?G%%%%%%%%%%%%%%%%%%s4%G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%"
    + "%%%%s+G%%%%%%%%%%%%%%%%%%:OG%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%N&OG%%%%%%%%%%%%%%%%%%VZ%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%k5G%%%%%%%%%%%%%%%%%%.lG%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};
},
jl_Character_obtainClasses$$create = () => {
    return {"value" : "PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!CgF#C;E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!"
    + "#!#!#!#!#!#!#!#!#!#!#!#!#!#=G&H#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!# BG E#Y\'CJ95E#^#; GN5\'9G#9G#9G$A\'F<A%F%Y#A,Q\'Z$Y#;Y#^#G,91Y$FA%F+G6J+Y%F#\'b&D! 9&G(1=G\'E#G#=G%F#J+F$^#&Y/ 1&\'F?G<A#b&:! G,&A/J+FBG*E#=Y$%A#\'[#F7G%%G*%G$%G&A#Y0 F:G$A#9 F,A&F9<F(Q#A&G*FJ%G91GA)FW\')\'&I$G)I%\'I#&G(F+G#Y#J+9%F0\'I#\'F)A#F#A#F7 F( &A$F%A#\'&I$G%A#I#A#I#\'&A))A%F# F$G#A#J+F#[#L\'=;&9\'& G#) F\'A%F#A#F7 F( F# F"
    + "# F#A#\' I$G#A%G#A#G$A$\'A(F% &A(J+G#F$\'9A+G#) F* F$ F7 F( F# F&A#\'&I$G& G#) I#\'A#&A0F#G#A#J+9;A(&G\' \'I# F)A#F#A#F7 F( F# F&A#\'&)\')G%A#I#A#I#\'A&G%)A%F# F$G#A#J+=&L\'A+\'& F\'A$F$ F%A$F# & F#A$F#A$F$A$F-A%I#\'I#A$I$ I$\'A#&A\')A/J+L$^\';=A&\'I$\'F) F$ F8 F1A#\'&G$I% G$ G%A(G# F$ F#A#F#G#A#J+A(9L(=&\'I#9F) F$ F8 F+ F&A#\'&)\'I& \'I# I#G#A(I#A&F$ F#G#A#J+ F#)A-G#I#F* F$ FJG#&I$G% I$ I$\'&=A%F$)L(F$G#A#J+L*=F\' \'I# F3A$F9 F* &A#F(A$\'A%I$G$ \' I)A\'J+A#I#9A-FQ\'F#G(A%;F\'%G)9J+Y#AFF# & F& F9 & F+\'F#G*&A#F& % G( J+A#F%AA&^$Y0=9^$G#^\'J"
    + "+L+=\'=\'=\'6767I#F) FEA%G/)G&9G#F&G, GE ^)\'^\' ^#Y&^%Y#AFFLI#G%)G\')G#I#G#&J+Y\'F\'I#G#F%G$&I$F#I(F$G%F.\'I#G#I\'\'&)J+I$\'^#BG !A&!A#CL9%C$b&*&  F%A#F( & F%A#FJ F%A#FB F%A#F( & F%A#F0 FZ F%A#FeA#G$Y*L5A$F1^+A\'b!7! A#C\'A#5b&M* =9F2-F;67A$FmY$K$F)A(F3G$)A*F4G#)Y#A*F3G#A-F. F$ G#A-FUG#)G(I)\'I#G,Y$%Y$;&\'A#J+A\'L+A\'Y\'5Y%G$1\'J+A\'FD%FWA\'F&G#FC\'&A&FhA+F@ G$I%G#I$A%I#\'I\'G$A%=A$Y#J+F?A#F&A,FMA%F;A\'J+,A$^CF8G#I#\'A#Y#FV)\')G( \')\'I#G)I\'G+A#\'J+A\'J+A\'Y(%Y\'A#G/(GSA0G%)FP\')G&)\'I&\'I#F) Y#J+Y(^+G*^*Y$G#)F?)G%I#G#)G$F#J+FM\')G#I$\')G$I#A)Y"
    + "%FEI)G)I#G#A$Y&J+A$F$J+F?E\'Y#C*!#A&BLA#B$Y)A)G$9G.)G(F%\'F\'\'F#)G#&A&CMEaC.%CCEFGb!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C*!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C*B)C\'A#B\'A#C)B)C)B)C\'A#B\'A#C) ! ! ! !C)B)C/A#C)D)C)D)C)D)C& C#B%$<#]$C$ C#B%$]$C%A#C#B% ]$C)B&]$A#C$ C#B%$]# M,Q&U\'Y#>?6_#?6>Y)./Q&-Y*>?Y%X#Y$:67Y,:98Y+-Q& Q+,%A#L\'Z$67%L+Z$67E2[FA,G."
    + "H%\'H$G-A0^#!^%!^##B$C#B$#=!^#:B&^\'!=!=!=B%=#B%#F%#^#C#B#Z&!C%=:^##=L1KD!#K%,^#A%Z&^&Z#^%:^#:^#:^(:^@Z#^#:=:^@b:-% ^)6767^5Z#^(67b=2! :^?Z:^IZ\'^jA7^,A6L^^pL7b=X# :^*:^WZ)b=P! :b=Y$ 67676767676767L?^MZ&67Z@6767676767Z1b= % b:$# 6767676767676767676767Za6767ZA67b:#% ^QZ6^#Z\'^HA#b=+# BQCQ!#B$C#!#!#!#B%#!C#!C\'E#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#^\'!#!#G$!#A&Y%,Y#CG #A&#A#FYA(%9A/\'F8A*F( F( F( F( F( F( F( F( GAY#>?>?Y$>?9>?Y*5Y#59>?Y#>?67676767Y&%Y"
    + "+U#Y%596Y.^#Y$676767675A#Y#67A=^; b=:! A-b=7$ A;^1-Y$=%&+6767676767^#6767676756W#=K*G%I#5E&^#K$%&9^# b&7! A#G#]#E#&5b&;! 9E$&A&FL b&?!  ^#L%^+FA^GA*=F1^@ L+^?L)=L0^AL+^HL0b= & b& H!^bb&  %b&6)!%b&X2 A$^XA*FIE\'Y#b&-% %Y$F1J+F#A5!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#&\'H$9G+9%!#!#!#!#!#!#!#!#!#!#!#!#!#!#E#G#FhK+G#Y\'A)]8E*]#!#!#!#!#!#!#!C$!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#%C)!#!#B##!#!#!#!#%]#!#!#&!#!C$!#!#!#!#!#!#!#!#!#!#B&#B&#!#!#!#!#!#!#!#B%#!#B##!#!#!#!#!#!#!#B#A%!A/E%!#&"
    + "E##F(\'F$\'F%\'F8I#G#)^%\'A$L\'^#;=A\'FUY%A)I#FSI1G#A)Y#J+A\'G3F\'Y$&9F#\'J+F=G)Y#F8G,I#A,9F>A$G$)FP\'I#G%I#G#I$Y. %J+A%Y#F&\'%F*J+F& FJG\'I#G#I#G#A*F$\'F)\')A#J+A#Y%F1%F\'^$&)\')FS\'&G$F#G#F&G#&\'&A9F#%Y#F,)G#I#Y#&E#)\'A+F\'A#F\'A#F\'A*F( F( CL<E%C*%]#B#A#b#1! FDI#\'I#\'I#9)\'A#J+A\'b&EO#A-F8A%FRA%b4 A b3 E!b&O& A#b&K! AGC(A-C&A&&\'F+:F. F& & F# F# b&M! ]2^1b&L& 76^1Fb^#FW^)AAF-;^$G1Y(679A\'G19U#X#6767676767676767Y#67Y%X$Y$ Y%5676767Y$:5Z$ 9;Y#A%F& b&(# A#1 Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:67967Y#F+%FNE#F@A$F\'A#F\'A#F\'A#F$A$[#:<=[# "
    + "=Z%^#A+Q$^#A#F- F; F4 F# F0A#F/ACb&]! A&Y$A%LNA$^*KVL%^2L#^$ ^.A$=AP^N\'b ## F>A$FRA0\'L<A%FAL%A*F5+F)+A&FGG&A&F? 9FEA%F)9K&AKBICIFpA#J+A\'BEA%CEA%FIA)FUA,9B, B0 B( B# C, C0 C( C#A$FUA-b&X% A*F7A+F)A9E\' EK E/AbF\'A#& FM F#A$&A#F8 9L)F8^#L(F@A)L*AQF4 F#A&L&F7L\'A$9F;A&9F;AGFYA%L#F#L1A#LO&G$ G#A&G%F% F$ F>A#G$A%\'L*A(Y*A(F>L#9F>L$AAF)=F=G#A%L&Y(A*FWA$Y(F7A#L)F4A&L)F3A(Y%A-L(b 1! FkAXBTA.CTA(L\'FEG%A)J+A\'J+F%%&B7A$G&5%C7A)Z#b 1$ L@ FK G#5A#F#A1F$%F# ]#G&9^)F7 G1F>L+&A)F7G,L%Y&A7F3G%Y%AGF6L(A5F8A*)\')FVG0Y(A%L5J+\'F#G#&"
    + "A*G$)FNI$G%I#G#Y#1Y%\'A+1A#F:A(J+A\'G$FEG&)G) J+Y%&I#&A)FD\'Y#&A*G#)FQI$G*I#F%Y%G%9)\'J+&9&Y$ L5A,F3 F:I$G$I#\')G#Y\'\'F#\'A`F( & F% F0 F+9A\'FP\'I$G)A&J+A\'G#I# F)A#F#A#F7 F( F# F& G#&I#\'I%A#I#A#I$A#&A\')A&F&I#A#G(A$G&A,F+ &A#& FG &I$G\' )A#) I% I#\')\'&\'&Y# Y#A)G#A>FVI$G)I#G$)\'F%Y&J+Y# 9\'F$A?FQI$G\')\'I%G#)G#F#9&A)J+b G# FPI$G%A#I%G#)G#Y8F%G#ACFQI$G)I#\')G#Y$&A,J+A\'Y.A4FL\')\'I#G\')\'&9A\'J+A\'J5A=F<A#\')\'I#G%)G&A%J+L#Y$=F(b Z# FMI$G*)G#9b E! BACAJ+L*A-F)A#&A#F) F# F9I\' I#A#G#)\'&)&)\'Y$A*J+AhF)A#FHI$G%A#G#I%\'&9&)A<&G+FIG\')&G%Y)\'A)"
    + "&G\'I#G$FOG.)G#Y$&Y&A.FkA(Y+&b 6! \')G$)\')b 9! FB9A/J+A\'F* FF)G( G\')\'&Y&A+J+L4A$Y#F?A#G7 )G()G#)G#AkF( F# FGG\'A$\' G# G(&\'A)J+A\'F\' F# FAI& G# I#\')\'&A(J+A\'FJ%F#A%J+b W$ F4G#I#Y#A(G#&)F. FCI#G&A$I#\')\'Y.J+\'b 6! &A0L6^)[%^2A.9b&;/ b G! b+Q! Y&K,b&%$ A-b+X% b *E b&B! Y#A.b&Q1 Q1\'F\'G0A+b&<` A&b&(* b ZK!F?G-I$G$J+b \'< b&Z) A(F@ J+A%Y#Fq J+A\'F?A#G&9A+FQG(Y&^%E%9=A+J+ L( F6A&F4b Q\' E$FIE#Y$J+A\'F9\'F%\'A#J+b 7# BACAL8Y%A&B:A#C:AMFmA%\'&IXA(G%E.AbE#9%\'A,I#E#K$A*b&<T!AEFCb @! b&T! A.b&3/ A/FTb >Y!E% E( E# b&J% A*&A>F$A#&A/F&"
    + "A(b&-\' b %E b&L! A&F.A$F*A(F+A#=G#9Q%b =_ b=Q$ J+^$A$b=U\' A\'^8 ^$A)Z$^1Z/A#GOA#G8A*b=U! A^b=W$ A+^HG#^^I#G$^$I\'Q)G)^#G(^?G%b=5# G$=A+I$^)G#^#)^AI#A`L5A-L5A-b=8! A*L:b (# B;C;B;C( C3B;C;! B#A#!A#B#A#B% B)C% # C( C,B;C;B# B%A#B) B( C;B# B% B& !A$B( C;B;C;B;C;B;C;B;C;B;C;B;C> B::C::C\'B::C::C\'B::C::C\'B::C::C\'B::C::C\'!#A#JSb= ) GX^%GS^)\'^/\'^#Y&A0G& G0b 1! Z>b D0 C+&CV!C(!#!C#!C$!C7!#!#!#!C$!#!#!#!#!#!#!#F#A/C(AWETG( G2A#G( G# G&A&E`AB\'b Q! FNA$G(E(A#J+A%&=b  & F?\'A2FMG%J+A&;b 1( F<%G%J+b 7$ F?G#&J+A%9b  $ F@ F$\'"
    + "F#\'F(G#F&\'A)&%b A$ F( F% F# F0 b&&$ A#L*G(AJBCCCG(%A%J+A%Y#b 2- L]=L$;L%AnLN=L0b #$ F% F< F# &A#& F+ F% & &A\'&A%& & & F$ F# &A#& & & & & F# &A#F% F( F% F% & F+ F2A&F$ F& F2AUZ#b /% ^MA%b=E! A-^0A#^0 ^0 ^FA+L.b=C# AX^>A.^MA%^*A(^#A/^\'b ;# b=]$ ]&b=;, A#^2A$^.A$b==$ A%^-A%^=A%^YA)^+A\'^IA)^?A#^-A%^#A/Z*AHb=9& A)^/A#^.A$^i =A$^3 ^.A$^-A&b=4#  b==! J+=b &1 b&  %b&  %b&A<#AAb&@%! b&/;!A#b&RU!A0b&O* b CG b&?) b C8 b&,.!A&b&K%#b   %b   %b \'O!b& R#b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   "
    + "%b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b !0 1A?b1A! b  # b\'Q$ b   %b   %b   %b 1Y$b3  %b3  %b3  %b3`a$A#b3  %b3  %b3  %b3`a$"};
},
ju_Objects = $rt_classWithoutFields();
function otji_JSWrapper() {
    jl_Object.call(this);
    this.$js = null;
}
let otji_JSWrapper_unwrap = $o => {
    if ($o === null)
        return null;
    return !($o instanceof otji_JSWrapper) ? $o : $o.$js;
},
otji_JSWrapper_maybeUnwrap = $o => {
    if ($o === null)
        return null;
    return !($o instanceof $rt_objcls()) ? $o : otji_JSWrapper_unwrap($o);
},
otj_JSObject = $rt_classWithoutFields(0),
otjb_Storage = $rt_classWithoutFields(),
jl_IndexOutOfBoundsException = $rt_classWithoutFields(jl_RuntimeException),
jl_Math = $rt_classWithoutFields(),
jl_Math_sqrt = var$1 => {
    return Math.sqrt(var$1);
},
jl_Math_random = () => {
    return jl_Math_randomImpl();
},
jl_Math_randomImpl = () => {
    return Math.random();
},
jl_Math_min = ($a, $b) => {
    if ($a < $b)
        $b = $a;
    return $b;
},
jl_Math_max = ($a, $b) => {
    if ($a > $b)
        $b = $a;
    return $b;
},
jl_Math_minImpl = (var$1, var$2) => {
    return Math.min(var$1, var$2);
},
jl_Math_min0 = (var$1, var$2) => {
    return jl_Math_minImpl(var$1, var$2);
},
jl_Math_maxImpl = (var$1, var$2) => {
    return Math.max(var$1, var$2);
},
jl_Math_max0 = (var$1, var$2) => {
    return jl_Math_maxImpl(var$1, var$2);
},
jl_Math_abs0 = $n => {
    if ($n < 0)
        $n =  -$n | 0;
    return $n;
},
jl_Math_absImpl = var$1 => {
    return Math.abs(var$1);
},
jl_Math_abs = var$1 => {
    return jl_Math_absImpl(var$1);
},
jl_StringIndexOutOfBoundsException = $rt_classWithoutFields(jl_IndexOutOfBoundsException);
function rddc_GameStorage$Profile() {
    let a = this; jl_Object.call(a);
    a.$email = null;
    a.$name = null;
    a.$level = 0;
    a.$totalScore = 0;
    a.$gamesPlayed = 0;
    a.$gamesWon = 0;
    a.$unlockedLevels = 0;
    a.$isDemo = 0;
    a.$collection = null;
    a.$sound = 0;
    a.$music = 0;
    a.$hints = 0;
}
let rddc_GameStorage$Profile__init_0 = $this => {
    $this.$level = 1;
    $this.$totalScore = 0;
    $this.$gamesPlayed = 0;
    $this.$gamesWon = 0;
    $this.$unlockedLevels = 1;
    $this.$isDemo = 0;
    $this.$collection = $rt_createIntArray(rddd_Dinosaurs_count());
    $this.$sound = 1;
    $this.$music = 1;
    $this.$hints = 1;
},
rddc_GameStorage$Profile__init_ = () => {
    let var_0 = new rddc_GameStorage$Profile();
    rddc_GameStorage$Profile__init_0(var_0);
    return var_0;
},
rddd_Dinosaurs = $rt_classWithoutFields(),
rddd_Dinosaurs_DATA = null,
rddd_Dinosaurs_$callClinit = () => {
    rddd_Dinosaurs_$callClinit = $rt_eraseClinit(rddd_Dinosaurs);
    rddd_Dinosaurs__clinit_();
},
rddd_Dinosaurs_count = () => {
    rddd_Dinosaurs_$callClinit();
    return rddd_Dinosaurs_DATA.data.length;
},
rddd_Dinosaurs__clinit_ = () => {
    let var$1, var$2;
    var$1 = $rt_createArray(rddd_Dinosaur, 25);
    var$2 = var$1.data;
    var$2[0] = rddd_Dinosaur__init_(1, $rt_s(118), $rt_s(119), $rt_s(120), $rt_s(121), $rt_s(122), $rt_s(123), $rt_s(124));
    var$2[1] = rddd_Dinosaur__init_(2, $rt_s(125), $rt_s(126), $rt_s(127), $rt_s(128), $rt_s(129), $rt_s(130), $rt_s(131));
    var$2[2] = rddd_Dinosaur__init_(3, $rt_s(132), $rt_s(133), $rt_s(134), $rt_s(135), $rt_s(136), $rt_s(137), $rt_s(124));
    var$2[3] = rddd_Dinosaur__init_(4, $rt_s(138), $rt_s(139), $rt_s(127), $rt_s(140), $rt_s(141), $rt_s(142), $rt_s(131));
    var$2[4] = rddd_Dinosaur__init_(5, $rt_s(143), $rt_s(144), $rt_s(134), $rt_s(145), $rt_s(146), $rt_s(147), $rt_s(131));
    var$2[5] = rddd_Dinosaur__init_(6, $rt_s(148), $rt_s(149), $rt_s(150), $rt_s(151), $rt_s(152), $rt_s(153), $rt_s(131));
    var$2[6] = rddd_Dinosaur__init_(7, $rt_s(154), $rt_s(155), $rt_s(156), $rt_s(157), $rt_s(158), $rt_s(159), $rt_s(160));
    var$2[7] = rddd_Dinosaur__init_(8, $rt_s(161), $rt_s(162), $rt_s(163), $rt_s(164), $rt_s(165), $rt_s(166), $rt_s(124));
    var$2[8] = rddd_Dinosaur__init_(9, $rt_s(167), $rt_s(168), $rt_s(127), $rt_s(169), $rt_s(170), $rt_s(171), $rt_s(131));
    var$2[9] = rddd_Dinosaur__init_(10, $rt_s(172), $rt_s(173), $rt_s(120), $rt_s(174), $rt_s(175), $rt_s(176), $rt_s(124));
    var$2[10] = rddd_Dinosaur__init_(11, $rt_s(177), $rt_s(178), $rt_s(134), $rt_s(179), $rt_s(180), $rt_s(181), $rt_s(131));
    var$2[11] = rddd_Dinosaur__init_(12, $rt_s(182), $rt_s(183), $rt_s(127), $rt_s(184), $rt_s(185), $rt_s(186), $rt_s(131));
    var$2[12] = rddd_Dinosaur__init_(13, $rt_s(187), $rt_s(188), $rt_s(189), $rt_s(190), $rt_s(191), $rt_s(192), $rt_s(124));
    var$2[13] = rddd_Dinosaur__init_(14, $rt_s(193), $rt_s(194), $rt_s(195), $rt_s(196), $rt_s(197), $rt_s(198), $rt_s(199));
    var$2[14] = rddd_Dinosaur__init_(15, $rt_s(200), $rt_s(201), $rt_s(134), $rt_s(202), $rt_s(203), $rt_s(204), $rt_s(131));
    var$2[15] = rddd_Dinosaur__init_(16, $rt_s(205), $rt_s(206), $rt_s(156), $rt_s(207), $rt_s(208), $rt_s(209), $rt_s(124));
    var$2[16] = rddd_Dinosaur__init_(17, $rt_s(210), $rt_s(211), $rt_s(134), $rt_s(212), $rt_s(213), $rt_s(214), $rt_s(124));
    var$2[17] = rddd_Dinosaur__init_(18, $rt_s(215), $rt_s(216), $rt_s(217), $rt_s(218), $rt_s(219), $rt_s(220), $rt_s(131));
    var$2[18] = rddd_Dinosaur__init_(19, $rt_s(221), $rt_s(222), $rt_s(217), $rt_s(223), $rt_s(224), $rt_s(225), $rt_s(199));
    var$2[19] = rddd_Dinosaur__init_(20, $rt_s(226), $rt_s(227), $rt_s(228), $rt_s(229), $rt_s(230), $rt_s(231), $rt_s(131));
    var$2[20] = rddd_Dinosaur__init_(21, $rt_s(232), $rt_s(233), $rt_s(134), $rt_s(234), $rt_s(235), $rt_s(236), $rt_s(199));
    var$2[21] = rddd_Dinosaur__init_(22, $rt_s(237), $rt_s(238), $rt_s(239), $rt_s(240), $rt_s(241), $rt_s(242), $rt_s(243));
    var$2[22] = rddd_Dinosaur__init_(23, $rt_s(244), $rt_s(245), $rt_s(246), $rt_s(247), $rt_s(248), $rt_s(249), $rt_s(243));
    var$2[23] = rddd_Dinosaur__init_(24, $rt_s(250), $rt_s(251), $rt_s(252), $rt_s(253), $rt_s(254), $rt_s(255), $rt_s(243));
    var$2[24] = rddd_Dinosaur__init_(25, $rt_s(256), $rt_s(257), $rt_s(195), $rt_s(258), $rt_s(259), $rt_s(260), $rt_s(160));
    rddd_Dinosaurs_DATA = var$1;
};
function jur_Pattern() {
    let a = this; jl_Object.call(a);
    a.$lexemes = null;
    a.$flags = 0;
    a.$backRefs = null;
    a.$needsBackRefReplacement = 0;
    a.$globalGroupIndex = 0;
    a.$compCount = 0;
    a.$consCount = 0;
    a.$start1 = null;
    a.$namedGroups = null;
}
let jur_Pattern_pattern = $this => {
    return $this.$lexemes.$orig;
},
jur_Pattern_processExpression = ($this, $ch, $newFlags, $last) => {
    let $children, $saveFlags, $saveChangedFlags, $fSet, $child, var$9, var$10, var$11, var$12;
    $children = ju_ArrayList__init_();
    $saveFlags = $this.$flags;
    $saveChangedFlags = 0;
    if ($newFlags != $saveFlags)
        $this.$flags = $newFlags;
    a: {
        switch ($ch) {
            case -1073741784:
                $fSet = new jur_NonCapFSet;
                $newFlags = $this.$consCount + 1 | 0;
                $this.$consCount = $newFlags;
                jur_FSet__init_($fSet, $newFlags);
                break a;
            case -536870872:
            case -268435416:
                break;
            case -134217688:
            case -67108824:
                $fSet = new jur_BehindFSet;
                $newFlags = $this.$consCount + 1 | 0;
                $this.$consCount = $newFlags;
                jur_FSet__init_($fSet, $newFlags);
                break a;
            case -33554392:
                $fSet = new jur_AtomicFSet;
                $newFlags = $this.$consCount + 1 | 0;
                $this.$consCount = $newFlags;
                jur_FSet__init_($fSet, $newFlags);
                break a;
            default:
                $newFlags = $this.$globalGroupIndex + 1 | 0;
                $this.$globalGroupIndex = $newFlags;
                if ($last === null) {
                    $fSet = new jur_FinalSet;
                    jur_FSet__init_($fSet, 0);
                    $saveChangedFlags = 1;
                } else {
                    $fSet = jur_FSet__init_0($newFlags);
                    if ($ch == (-2130706392)) {
                        if ($this.$namedGroups === null) {
                            $child = new ju_LinkedHashMap;
                            ju_HashMap__init_($child, 16, 0.75);
                            $child.$accessOrder = 0;
                            $child.$head = null;
                            $this.$namedGroups = $child;
                        }
                        $child = $this.$namedGroups;
                        var$9 = $this.$lexemes.$groupName;
                        var$10 = $this.$globalGroupIndex;
                        jl_Integer_$callClinit();
                        if (var$10 >= (-128) && var$10 <= 127) {
                            b: {
                                if (jl_Integer_integerCache === null) {
                                    jl_Integer_integerCache = $rt_createArray(jl_Integer, 256);
                                    var$11 = 0;
                                    while (true) {
                                        var$12 = jl_Integer_integerCache.data;
                                        if (var$11 >= var$12.length)
                                            break b;
                                        var$12[var$11] = jl_Integer__init_(var$11 - 128 | 0);
                                        var$11 = var$11 + 1 | 0;
                                    }
                                }
                            }
                            $last = jl_Integer_integerCache.data[var$10 + 128 | 0];
                        } else
                            $last = jl_Integer__init_(var$10);
                        $child.$put(var$9, $last);
                    }
                }
                var$10 = $this.$globalGroupIndex;
                if (var$10 <= (-1))
                    break a;
                if (var$10 >= 10)
                    break a;
                $this.$backRefs.data[var$10] = $fSet;
                break a;
        }
        $fSet = new jur_AheadFSet;
        jur_FSet__init_($fSet, (-1));
    }
    while (true) {
        if (jur_Lexer_isLetter($this.$lexemes) && $this.$lexemes.$lookAhead == (-536870788)) {
            $last = jur_CharClass__init_0(jur_Pattern_hasFlag($this, 2), jur_Pattern_hasFlag($this, 64));
            while (!jur_Lexer_isEmpty($this.$lexemes) && jur_Lexer_isLetter($this.$lexemes)) {
                $child = $this.$lexemes;
                var$10 = $child.$lookAhead;
                if (var$10 && var$10 != (-536870788) && var$10 != (-536870871))
                    break;
                jur_CharClass_add0($last, jur_Lexer_next($child));
                $child = $this.$lexemes;
                if ($child.$ch != (-536870788))
                    continue;
                jur_Lexer_next($child);
            }
            $child = jur_Pattern_processRangeSet($this, $last);
            $child.$setNext($fSet);
        } else if ($this.$lexemes.$ch == (-536870788)) {
            $child = jur_EmptySet__init_($fSet);
            jur_Lexer_next($this.$lexemes);
        } else {
            $child = jur_Pattern_processSubExpression($this, $fSet);
            $last = $this.$lexemes;
            if ($last.$ch == (-536870788))
                jur_Lexer_next($last);
        }
        if ($child !== null)
            ju_ArrayList_add($children, $child);
        if (jur_Lexer_isEmpty($this.$lexemes))
            break;
        if ($this.$lexemes.$ch == (-536870871))
            break;
    }
    if ($this.$lexemes.$lookBack == (-536870788))
        ju_ArrayList_add($children, jur_EmptySet__init_($fSet));
    if ($this.$flags != $saveFlags && !$saveChangedFlags) {
        $this.$flags = $saveFlags;
        $last = $this.$lexemes;
        $last.$flags0 = $saveFlags;
        $last.$lookAhead = $last.$ch;
        $last.$lookAheadST = $last.$curST;
        $saveChangedFlags = $last.$curToc;
        $last.$index = $saveChangedFlags + 1 | 0;
        $last.$lookAheadToc = $saveChangedFlags;
        jur_Lexer_movePointer($last);
    }
    switch ($ch) {
        case -1073741784:
            break;
        case -536870872:
            $last = new jur_PositiveLookAhead;
            jur_JointSet__init_($last, $children, $fSet);
            return $last;
        case -268435416:
            $last = new jur_NegativeLookAhead;
            jur_JointSet__init_($last, $children, $fSet);
            return $last;
        case -134217688:
            $last = new jur_PositiveLookBehind;
            jur_JointSet__init_($last, $children, $fSet);
            return $last;
        case -67108824:
            $last = new jur_NegativeLookBehind;
            jur_JointSet__init_($last, $children, $fSet);
            return $last;
        case -33554392:
            $last = new jur_AtomicJointSet;
            jur_JointSet__init_($last, $children, $fSet);
            return $last;
        default:
            switch ($children.$size) {
                case 0:
                    break;
                case 1:
                    return jur_SingleSet__init_0(ju_ArrayList_get($children, 0), $fSet);
                default:
                    return jur_JointSet__init_0($children, $fSet);
            }
            return jur_EmptySet__init_($fSet);
    }
    $last = new jur_NonCapJointSet;
    jur_JointSet__init_($last, $children, $fSet);
    return $last;
},
jur_Pattern_processDecomposedChar = $this => {
    let $codePoints, $curSymb, $curSymbIndex, $codePointsHangul, var$5, var$6, $readCodePoints;
    $codePoints = $rt_createIntArray(4);
    $curSymb = (-1);
    $curSymbIndex = (-1);
    if (!jur_Lexer_isEmpty($this.$lexemes) && jur_Lexer_isLetter($this.$lexemes)) {
        $codePointsHangul = $codePoints.data;
        $curSymb = jur_Lexer_next($this.$lexemes);
        $codePointsHangul[0] = $curSymb;
        $curSymbIndex = $curSymb - 4352 | 0;
    }
    if ($curSymbIndex >= 0 && $curSymbIndex < 19) {
        $codePointsHangul = $rt_createCharArray(3);
        $codePoints = $codePointsHangul.data;
        $codePoints[0] = $curSymb & 65535;
        var$5 = $this.$lexemes;
        var$6 = var$5.$ch;
        $readCodePoints = var$6 - 4449 | 0;
        if ($readCodePoints >= 0 && $readCodePoints < 21) {
            $codePoints[1] = var$6 & 65535;
            jur_Lexer_next(var$5);
            var$5 = $this.$lexemes;
            var$6 = var$5.$ch;
            $curSymb = var$6 - 4519 | 0;
            if ($curSymb >= 0 && $curSymb < 28) {
                $codePoints[2] = var$6 & 65535;
                jur_Lexer_next(var$5);
                return jur_HangulDecomposedCharSet__init_($codePointsHangul, 3);
            }
            return jur_HangulDecomposedCharSet__init_($codePointsHangul, 2);
        }
        if (!jur_Pattern_hasFlag($this, 2))
            return jur_CharSet__init_($codePoints[0]);
        if (jur_Pattern_hasFlag($this, 64))
            return jur_UCICharSet__init_($codePoints[0]);
        return jur_CICharSet__init_($codePoints[0]);
    }
    $codePointsHangul = $codePoints.data;
    $curSymb = 1;
    while ($curSymb < 4 && !jur_Lexer_isEmpty($this.$lexemes) && jur_Lexer_isLetter($this.$lexemes)) {
        $readCodePoints = $curSymb + 1 | 0;
        $codePointsHangul[$curSymb] = jur_Lexer_next($this.$lexemes);
        $curSymb = $readCodePoints;
    }
    if ($curSymb == 1) {
        $readCodePoints = $codePointsHangul[0];
        if (!(jur_Lexer_singleDecompTable.$get0($readCodePoints) == jur_Lexer_singleDecompTableSize ? 0 : 1))
            return jur_Pattern_processCharSet($this, $codePointsHangul[0]);
    }
    if (!jur_Pattern_hasFlag($this, 2))
        return jur_DecomposedCharSet__init_0($codePoints, $curSymb);
    if (jur_Pattern_hasFlag($this, 64)) {
        var$5 = new jur_UCIDecomposedCharSet;
        jur_DecomposedCharSet__init_(var$5, $codePoints, $curSymb);
        return var$5;
    }
    var$5 = new jur_CIDecomposedCharSet;
    jur_DecomposedCharSet__init_(var$5, $codePoints, $curSymb);
    return var$5;
},
jur_Pattern_processSubExpression = ($this, $last) => {
    let $cur, $term, var$4, var$5, var$6, $next, var$8;
    if (jur_Lexer_isLetter($this.$lexemes) && !jur_Lexer_isNextSpecial($this.$lexemes) && jur_Lexer_isLetter0($this.$lexemes.$lookAhead)) {
        if (jur_Pattern_hasFlag($this, 128)) {
            $cur = jur_Pattern_processDecomposedChar($this);
            if (!jur_Lexer_isEmpty($this.$lexemes)) {
                $term = $this.$lexemes;
                var$4 = $term.$ch;
                if (!(var$4 == (-536870871) && !($last instanceof jur_FinalSet)) && var$4 != (-536870788) && !jur_Lexer_isLetter($term))
                    $cur = jur_Pattern_processQuantifier($this, $last, $cur);
            }
        } else if (!jur_Lexer_isHighSurrogate0($this.$lexemes) && !jur_Lexer_isLowSurrogate0($this.$lexemes)) {
            $term = new jl_StringBuffer;
            jl_AbstractStringBuilder__init_($term);
            while (!jur_Lexer_isEmpty($this.$lexemes) && jur_Lexer_isLetter($this.$lexemes) && !jur_Lexer_isHighSurrogate0($this.$lexemes) && !jur_Lexer_isLowSurrogate0($this.$lexemes)) {
                if (!(!jur_Lexer_isNextSpecial($this.$lexemes) && !$this.$lexemes.$lookAhead) && !(!jur_Lexer_isNextSpecial($this.$lexemes) && jur_Lexer_isLetter0($this.$lexemes.$lookAhead))) {
                    var$5 = $this.$lexemes.$lookAhead;
                    if (var$5 != (-536870871) && (var$5 & (-2147418113)) != (-2147483608) && var$5 != (-536870788) && var$5 != (-536870876))
                        break;
                }
                var$4 = jur_Lexer_next($this.$lexemes);
                if (!jl_Character_isSupplementaryCodePoint(var$4))
                    jl_AbstractStringBuilder_append($term, var$4 & 65535);
                else
                    jl_AbstractStringBuilder_append0($term, jl_Character_toChars(var$4));
            }
            if (!jur_Pattern_hasFlag($this, 2)) {
                $cur = new jur_SequenceSet;
                jur_LeafSet__init_($cur);
                $cur.$string = jl_AbstractStringBuilder_toString($term);
                var$4 = $term.$length0;
                $cur.$charCount0 = var$4;
                $cur.$leftToRight = jur_SequenceSet$IntHash__init_(var$4);
                $cur.$rightToLeft = jur_SequenceSet$IntHash__init_($cur.$charCount0);
                var$6 = 0;
                while (var$6 < ($cur.$charCount0 - 1 | 0)) {
                    jur_SequenceSet$IntHash_put($cur.$leftToRight, jl_String_charAt($cur.$string, var$6), ($cur.$charCount0 - var$6 | 0) - 1 | 0);
                    jur_SequenceSet$IntHash_put($cur.$rightToLeft, jl_String_charAt($cur.$string, ($cur.$charCount0 - var$6 | 0) - 1 | 0), ($cur.$charCount0 - var$6 | 0) - 1 | 0);
                    var$6 = var$6 + 1 | 0;
                }
            } else
                $cur = jur_Pattern_hasFlag($this, 64) ? jur_UCISequenceSet__init_0($term) : jur_CISequenceSet__init_0($term);
        } else
            $cur = jur_Pattern_processQuantifier($this, $last, jur_Pattern_processTerminal($this, $last));
    } else {
        $term = $this.$lexemes;
        if ($term.$ch != (-536870871))
            $cur = jur_Pattern_processQuantifier($this, $last, jur_Pattern_processTerminal($this, $last));
        else {
            if ($last instanceof jur_FinalSet)
                $rt_throw(jur_PatternSyntaxException__init_($rt_s(3), $term.$orig, $term.$curToc));
            $cur = jur_EmptySet__init_($last);
        }
    }
    a: {
        if (!jur_Lexer_isEmpty($this.$lexemes)) {
            var$4 = $this.$lexemes.$ch;
            if (!(var$4 == (-536870871) && !($last instanceof jur_FinalSet)) && var$4 != (-536870788)) {
                $next = jur_Pattern_processSubExpression($this, $last);
                if ($cur instanceof jur_LeafQuantifierSet && !($cur instanceof jur_CompositeQuantifierSet) && !($cur instanceof jur_GroupQuantifierSet) && !($cur instanceof jur_AltQuantifierSet)) {
                    var$8 = $cur;
                    $term = var$8;
                    if (!$next.$first($term.$innerSet)) {
                        $cur = new jur_UnifiedQuantifierSet;
                        $term = $term.$innerSet;
                        var$8 = var$8;
                        jur_LeafQuantifierSet__init_($cur, $term, var$8.$next1, var$8.$type0);
                        $cur.$innerSet.$setNext($cur);
                    }
                }
                if (($next.$getType0() & 65535) != 43)
                    $cur.$setNext($next);
                else
                    $cur.$setNext($next.$innerSet);
                break a;
            }
        }
        if ($cur === null)
            return null;
        $cur.$setNext($last);
    }
    if (($cur.$getType0() & 65535) != 43)
        return $cur;
    return $cur.$innerSet;
},
jur_Pattern_processQuantifier = ($this, $last, $term) => {
    let $q, $quant, $q_0, var$6, $leaf;
    $q = $this.$lexemes;
    $quant = $q.$ch;
    if ($term !== null && !($term instanceof jur_LeafSet)) {
        switch ($quant) {
            case -2147483606:
                jur_Lexer_next($q);
                $q = new jur_PossessiveGroupQuantifierSet;
                jur_QuantifierSet__init_($q, $term, $last, $quant);
                jur_FSet_$callClinit();
                $term.$setNext(jur_FSet_posFSet);
                return $q;
            case -2147483605:
                jur_Lexer_next($q);
                $q = new jur_PosPlusGroupQuantifierSet;
                jur_QuantifierSet__init_($q, $term, $last, (-2147483606));
                jur_FSet_$callClinit();
                $term.$setNext(jur_FSet_posFSet);
                return $q;
            case -2147483585:
                jur_Lexer_next($q);
                $q = new jur_PosAltGroupQuantifierSet;
                jur_QuantifierSet__init_($q, $term, $last, (-536870849));
                jur_FSet_$callClinit();
                $term.$setNext(jur_FSet_posFSet);
                return $q;
            case -2147483525:
                $q_0 = new jur_PosCompositeGroupQuantifierSet;
                $q = jur_Lexer_nextSpecial($q);
                var$6 = $this.$compCount + 1 | 0;
                $this.$compCount = var$6;
                jur_CompositeGroupQuantifierSet__init_($q_0, $q, $term, $last, (-536870849), var$6);
                jur_FSet_$callClinit();
                $term.$setNext(jur_FSet_posFSet);
                return $q_0;
            case -1073741782:
            case -1073741781:
                jur_Lexer_next($q);
                $q = new jur_ReluctantGroupQuantifierSet;
                jur_QuantifierSet__init_($q, $term, $last, $quant);
                $term.$setNext($q);
                return $q;
            case -1073741761:
                jur_Lexer_next($q);
                $q = new jur_RelAltGroupQuantifierSet;
                jur_QuantifierSet__init_($q, $term, $last, (-536870849));
                $term.$setNext($last);
                return $q;
            case -1073741701:
                $q_0 = new jur_RelCompositeGroupQuantifierSet;
                $q = jur_Lexer_nextSpecial($q);
                $quant = $this.$compCount + 1 | 0;
                $this.$compCount = $quant;
                jur_CompositeGroupQuantifierSet__init_($q_0, $q, $term, $last, (-536870849), $quant);
                $term.$setNext($q_0);
                return $q_0;
            case -536870870:
            case -536870869:
                jur_Lexer_next($q);
                if ($term.$getType0() != (-2147483602)) {
                    $q = new jur_GroupQuantifierSet;
                    jur_QuantifierSet__init_($q, $term, $last, $quant);
                } else if (jur_Pattern_hasFlag($this, 32)) {
                    $q = new jur_DotAllQuantifierSet;
                    jur_QuantifierSet__init_($q, $term, $last, $quant);
                } else {
                    $q = new jur_DotQuantifierSet;
                    $q_0 = jur_AbstractLineTerminator_getInstance($this.$flags);
                    jur_QuantifierSet__init_($q, $term, $last, $quant);
                    $q.$lt = $q_0;
                }
                $term.$setNext($q);
                return $q;
            case -536870849:
                jur_Lexer_next($q);
                $q = new jur_AltGroupQuantifierSet;
                jur_QuantifierSet__init_($q, $term, $last, (-536870849));
                $term.$setNext($last);
                return $q;
            case -536870789:
                $q_0 = new jur_CompositeGroupQuantifierSet;
                $q = jur_Lexer_nextSpecial($q);
                $quant = $this.$compCount + 1 | 0;
                $this.$compCount = $quant;
                jur_CompositeGroupQuantifierSet__init_($q_0, $q, $term, $last, (-536870849), $quant);
                $term.$setNext($q_0);
                return $q_0;
            default:
        }
        return $term;
    }
    $leaf = null;
    if ($term !== null)
        $leaf = $term;
    switch ($quant) {
        case -2147483606:
        case -2147483605:
            jur_Lexer_next($q);
            $q = new jur_PossessiveQuantifierSet;
            jur_LeafQuantifierSet__init_($q, $leaf, $last, $quant);
            $leaf.$next1 = $q;
            return $q;
        case -2147483585:
            jur_Lexer_next($q);
            $term = new jur_PossessiveAltQuantifierSet;
            jur_LeafQuantifierSet__init_($term, $leaf, $last, (-2147483585));
            return $term;
        case -2147483525:
            $term = new jur_PossessiveCompositeQuantifierSet;
            jur_CompositeQuantifierSet__init_($term, jur_Lexer_nextSpecial($q), $leaf, $last, (-2147483525));
            return $term;
        case -1073741782:
        case -1073741781:
            jur_Lexer_next($q);
            $q = new jur_ReluctantQuantifierSet;
            jur_LeafQuantifierSet__init_($q, $leaf, $last, $quant);
            $leaf.$next1 = $q;
            return $q;
        case -1073741761:
            jur_Lexer_next($q);
            $term = new jur_ReluctantAltQuantifierSet;
            jur_LeafQuantifierSet__init_($term, $leaf, $last, (-1073741761));
            return $term;
        case -1073741701:
            $term = new jur_ReluctantCompositeQuantifierSet;
            jur_CompositeQuantifierSet__init_($term, jur_Lexer_nextSpecial($q), $leaf, $last, (-1073741701));
            return $term;
        case -536870870:
        case -536870869:
            jur_Lexer_next($q);
            $q = jur_LeafQuantifierSet__init_0($leaf, $last, $quant);
            $leaf.$next1 = $q;
            return $q;
        case -536870849:
            jur_Lexer_next($q);
            $term = new jur_AltQuantifierSet;
            jur_LeafQuantifierSet__init_($term, $leaf, $last, (-536870849));
            return $term;
        case -536870789:
            return jur_CompositeQuantifierSet__init_0(jur_Lexer_nextSpecial($q), $leaf, $last, (-536870789));
        default:
    }
    return $term;
},
jur_Pattern_processTerminal = ($this, $last) => {
    let $term, var$3, var$4, $ch, $newFlags, $number, $negative, $cc;
    $term = null;
    var$3 = $last instanceof jur_FinalSet;
    while (true) {
        a: {
            var$4 = $this.$lexemes;
            $ch = var$4.$ch;
            if (($ch & (-2147418113)) == (-2147483608)) {
                jur_Lexer_next(var$4);
                $newFlags = ($ch & 16711680) >> 16;
                $ch = $ch & (-16711681);
                if ($ch == (-16777176))
                    $this.$flags = $newFlags;
                else {
                    if ($ch != (-1073741784))
                        $newFlags = $this.$flags;
                    $term = jur_Pattern_processExpression($this, $ch, $newFlags, $last);
                    var$4 = $this.$lexemes;
                    if (var$4.$ch != (-536870871))
                        $rt_throw(jur_PatternSyntaxException__init_($rt_s(3), var$4.$orig, var$4.$curToc));
                    jur_Lexer_next(var$4);
                }
            } else {
                b: {
                    c: {
                        switch ($ch) {
                            case -2147483599:
                            case -2147483598:
                            case -2147483597:
                            case -2147483596:
                            case -2147483595:
                            case -2147483594:
                            case -2147483593:
                            case -2147483592:
                            case -2147483591:
                                break c;
                            case -2147483583:
                                break;
                            case -2147483582:
                                jur_Lexer_next(var$4);
                                $term = jur_WordBoundary__init_(0);
                                break a;
                            case -2147483577:
                                jur_Lexer_next(var$4);
                                $term = new jur_PreviousMatch;
                                jur_AbstractSet__init_($term);
                                break a;
                            case -2147483558:
                                jur_Lexer_next(var$4);
                                $term = new jur_EOLSet;
                                $number = $this.$consCount + 1 | 0;
                                $this.$consCount = $number;
                                jur_EOLSet__init_($term, $number);
                                break a;
                            case -2147483550:
                                jur_Lexer_next(var$4);
                                $term = jur_WordBoundary__init_(1);
                                break a;
                            case -2147483526:
                                jur_Lexer_next(var$4);
                                $term = new jur_EOISet;
                                jur_AbstractSet__init_($term);
                                break a;
                            case -536870876:
                                jur_Lexer_next(var$4);
                                $this.$consCount = $this.$consCount + 1 | 0;
                                if (jur_Pattern_hasFlag($this, 8)) {
                                    if (jur_Pattern_hasFlag($this, 1)) {
                                        $term = jur_UMultiLineEOLSet__init_0($this.$consCount);
                                        break a;
                                    }
                                    $term = jur_MultiLineEOLSet__init_($this.$consCount);
                                    break a;
                                }
                                if (jur_Pattern_hasFlag($this, 1)) {
                                    $term = jur_UEOLSet__init_($this.$consCount);
                                    break a;
                                }
                                $term = jur_EOLSet__init_0($this.$consCount);
                                break a;
                            case -536870866:
                                jur_Lexer_next(var$4);
                                if (jur_Pattern_hasFlag($this, 32)) {
                                    $term = jur_DotAllSet__init_0();
                                    break a;
                                }
                                $term = jur_DotSet__init_0(jur_AbstractLineTerminator_getInstance($this.$flags));
                                break a;
                            case -536870821:
                                jur_Lexer_next(var$4);
                                $negative = 0;
                                $term = $this.$lexemes;
                                if ($term.$ch == (-536870818)) {
                                    $negative = 1;
                                    jur_Lexer_next($term);
                                }
                                $term = jur_Pattern_processRangeSet($this, jur_Pattern_processRangeExpression($this, $negative));
                                $term.$setNext($last);
                                var$4 = $this.$lexemes;
                                if (var$4.$ch != (-536870819))
                                    $rt_throw(jur_PatternSyntaxException__init_($rt_s(3), var$4.$orig, var$4.$curToc));
                                jur_Lexer_setMode(var$4, 1);
                                jur_Lexer_next($this.$lexemes);
                                break a;
                            case -536870818:
                                jur_Lexer_next(var$4);
                                $this.$consCount = $this.$consCount + 1 | 0;
                                if (!jur_Pattern_hasFlag($this, 8)) {
                                    $term = new jur_SOLSet;
                                    jur_AbstractSet__init_($term);
                                    break a;
                                }
                                $term = new jur_MultiLineSOLSet;
                                var$4 = jur_AbstractLineTerminator_getInstance($this.$flags);
                                jur_AbstractSet__init_($term);
                                $term.$lt1 = var$4;
                                break a;
                            case 0:
                                $cc = var$4.$curST;
                                if ($cc !== null)
                                    $term = jur_Pattern_processRangeSet($this, $cc);
                                else {
                                    if (jur_Lexer_isEmpty(var$4)) {
                                        $term = jur_EmptySet__init_($last);
                                        break a;
                                    }
                                    $term = jur_CharSet__init_($ch & 65535);
                                }
                                jur_Lexer_next($this.$lexemes);
                                break a;
                            default:
                                break b;
                        }
                        jur_Lexer_next(var$4);
                        $term = new jur_SOLSet;
                        jur_AbstractSet__init_($term);
                        break a;
                    }
                    $number = ($ch & 2147483647) - 48 | 0;
                    if ($this.$globalGroupIndex < $number)
                        $rt_throw(jur_PatternSyntaxException__init_($rt_s(3), jur_Lexer_toString(var$4), jur_Lexer_getIndex($this.$lexemes)));
                    jur_Lexer_next(var$4);
                    $this.$consCount = $this.$consCount + 1 | 0;
                    $term = !jur_Pattern_hasFlag($this, 2) ? jur_BackReferenceSet__init_($number, $this.$consCount) : jur_Pattern_hasFlag($this, 64) ? jur_UCIBackReferenceSet__init_0($number, $this.$consCount) : jur_CIBackReferenceSet__init_0($number, $this.$consCount);
                    $this.$backRefs.data[$number].$isBackReferenced = 1;
                    $this.$needsBackRefReplacement = 1;
                    break a;
                }
                if ($ch >= 0 && !jur_Lexer_isSpecial(var$4)) {
                    $term = jur_Pattern_processCharSet($this, $ch);
                    jur_Lexer_next($this.$lexemes);
                } else if ($ch == (-536870788))
                    $term = jur_EmptySet__init_($last);
                else {
                    if ($ch != (-536870871)) {
                        $last = new jur_PatternSyntaxException;
                        $term = !jur_Lexer_isSpecial($this.$lexemes) ? jl_Character_toString($ch & 65535) : $this.$lexemes.$curST.$toString();
                        var$4 = $this.$lexemes;
                        jur_PatternSyntaxException__init_0($last, $term, var$4.$orig, var$4.$curToc);
                        $rt_throw($last);
                    }
                    if (var$3) {
                        $last = new jur_PatternSyntaxException;
                        var$4 = $this.$lexemes;
                        jur_PatternSyntaxException__init_0($last, $rt_s(3), var$4.$orig, var$4.$curToc);
                        $rt_throw($last);
                    }
                    $term = jur_EmptySet__init_($last);
                }
            }
        }
        if ($ch != (-16777176))
            break;
    }
    return $term;
},
jur_Pattern_processRangeExpression = ($this, $alt) => {
    let $res, $buffer, $intersection, $notClosed, $firstInClass, $cs, $cur, $negative, $$je;
    $res = jur_CharClass__init_0(jur_Pattern_hasFlag($this, 2), jur_Pattern_hasFlag($this, 64));
    jur_AbstractCharClass_setNegative($res, $alt);
    $buffer = (-1);
    $intersection = 0;
    $notClosed = 0;
    $firstInClass = 1;
    a: {
        b: {
            c: while (true) {
                if (jur_Lexer_isEmpty($this.$lexemes))
                    break a;
                $cs = $this.$lexemes;
                $alt = $cs.$ch;
                $notClosed = $alt == (-536870819) && !$firstInClass ? 0 : 1;
                if (!$notClosed)
                    break a;
                d: {
                    switch ($alt) {
                        case -536870874:
                            if ($buffer >= 0)
                                jur_CharClass_add0($res, $buffer);
                            $buffer = jur_Lexer_next($this.$lexemes);
                            $cs = $this.$lexemes;
                            if ($cs.$ch != (-536870874)) {
                                $buffer = 38;
                                break d;
                            }
                            if ($cs.$lookAhead == (-536870821)) {
                                jur_Lexer_next($cs);
                                $intersection = 1;
                                $buffer = (-1);
                                break d;
                            }
                            jur_Lexer_next($cs);
                            if ($firstInClass) {
                                $res = jur_Pattern_processRangeExpression($this, 0);
                                break d;
                            }
                            if ($this.$lexemes.$ch == (-536870819))
                                break d;
                            jur_CharClass_intersection($res, jur_Pattern_processRangeExpression($this, 0));
                            break d;
                        case -536870867:
                            if (!$firstInClass) {
                                $alt = $cs.$lookAhead;
                                if ($alt != (-536870819) && $alt != (-536870821) && $buffer >= 0) {
                                    jur_Lexer_next($cs);
                                    $cs = $this.$lexemes;
                                    $cur = $cs.$ch;
                                    if (jur_Lexer_isSpecial($cs))
                                        break c;
                                    if ($cur < 0) {
                                        $negative = $this.$lexemes.$lookAhead;
                                        if ($negative != (-536870819) && $negative != (-536870821) && $buffer >= 0)
                                            break c;
                                    }
                                    e: {
                                        try {
                                            if (jur_Lexer_isLetter0($cur))
                                                break e;
                                            $cur = $cur & 65535;
                                            break e;
                                        } catch ($$e) {
                                            $$je = $rt_wrapException($$e);
                                            if ($$je instanceof jl_Exception) {
                                                break b;
                                            } else {
                                                throw $$e;
                                            }
                                        }
                                    }
                                    try {
                                        jur_CharClass_add($res, $buffer, $cur);
                                    } catch ($$e) {
                                        $$je = $rt_wrapException($$e);
                                        if ($$je instanceof jl_Exception) {
                                            break b;
                                        } else {
                                            throw $$e;
                                        }
                                    }
                                    jur_Lexer_next($this.$lexemes);
                                    $buffer = (-1);
                                    break d;
                                }
                            }
                            if ($buffer >= 0)
                                jur_CharClass_add0($res, $buffer);
                            $buffer = 45;
                            jur_Lexer_next($this.$lexemes);
                            break d;
                        case -536870821:
                            if ($buffer >= 0) {
                                jur_CharClass_add0($res, $buffer);
                                $buffer = (-1);
                            }
                            jur_Lexer_next($this.$lexemes);
                            $negative = 0;
                            $cs = $this.$lexemes;
                            if ($cs.$ch == (-536870818)) {
                                jur_Lexer_next($cs);
                                $negative = 1;
                            }
                            if (!$intersection)
                                jur_CharClass_union($res, jur_Pattern_processRangeExpression($this, $negative));
                            else
                                jur_CharClass_intersection($res, jur_Pattern_processRangeExpression($this, $negative));
                            $intersection = 0;
                            jur_Lexer_next($this.$lexemes);
                            break d;
                        case -536870819:
                            if ($buffer >= 0)
                                jur_CharClass_add0($res, $buffer);
                            $buffer = 93;
                            jur_Lexer_next($this.$lexemes);
                            break d;
                        case -536870818:
                            if ($buffer >= 0)
                                jur_CharClass_add0($res, $buffer);
                            $buffer = 94;
                            jur_Lexer_next($this.$lexemes);
                            break d;
                        case 0:
                            if ($buffer >= 0)
                                jur_CharClass_add0($res, $buffer);
                            $cs = $this.$lexemes.$curST;
                            if ($cs === null)
                                $buffer = 0;
                            else {
                                jur_CharClass_add1($res, $cs);
                                $buffer = (-1);
                            }
                            jur_Lexer_next($this.$lexemes);
                            break d;
                        default:
                    }
                    if ($buffer >= 0)
                        jur_CharClass_add0($res, $buffer);
                    $buffer = jur_Lexer_next($this.$lexemes);
                }
                $firstInClass = 0;
            }
            $rt_throw(jur_PatternSyntaxException__init_($rt_s(3), jur_Pattern_pattern($this), $this.$lexemes.$curToc));
        }
        $rt_throw(jur_PatternSyntaxException__init_($rt_s(3), jur_Pattern_pattern($this), $this.$lexemes.$curToc));
    }
    if (!$notClosed) {
        if ($buffer >= 0)
            jur_CharClass_add0($res, $buffer);
        return $res;
    }
    $rt_throw(jur_PatternSyntaxException__init_($rt_s(3), jur_Pattern_pattern($this), $this.$lexemes.$curToc - 1 | 0));
},
jur_Pattern_processCharSet = ($this, $ch) => {
    let $isSupplCodePoint, var$3, var$4;
    $isSupplCodePoint = jl_Character_isSupplementaryCodePoint($ch);
    if (jur_Pattern_hasFlag($this, 2)) {
        a: {
            if (!($ch >= 97 && $ch <= 122)) {
                if ($ch < 65)
                    break a;
                if ($ch > 90)
                    break a;
            }
            return jur_CICharSet__init_($ch & 65535);
        }
        if (jur_Pattern_hasFlag($this, 64) && $ch > 128) {
            if ($isSupplCodePoint) {
                var$3 = new jur_UCISupplCharSet;
                jur_LeafSet__init_(var$3);
                var$3.$charCount0 = 2;
                var$3.$ch4 = jl_Character_toLowerCase0(jl_Character_toUpperCase0($ch));
                return var$3;
            }
            if (jur_Lexer_isLowSurrogate($ch))
                return jur_LowSurrogateCharSet__init_($ch & 65535);
            if (!jur_Lexer_isHighSurrogate($ch))
                return jur_UCICharSet__init_($ch & 65535);
            return jur_HighSurrogateCharSet__init_($ch & 65535);
        }
    }
    if (!$isSupplCodePoint) {
        if (jur_Lexer_isLowSurrogate($ch))
            return jur_LowSurrogateCharSet__init_($ch & 65535);
        if (!jur_Lexer_isHighSurrogate($ch))
            return jur_CharSet__init_($ch & 65535);
        return jur_HighSurrogateCharSet__init_($ch & 65535);
    }
    var$3 = new jur_SupplCharSet;
    jur_LeafSet__init_(var$3);
    var$3.$charCount0 = 2;
    var$3.$ch1 = $ch;
    var$4 = (jl_Character_toChars($ch)).data;
    var$3.$high0 = var$4[0];
    var$3.$low0 = var$4[1];
    return var$3;
},
jur_Pattern_processRangeSet = ($this, $charClass) => {
    let $surrogates, $lowHighSurrRangeSet, var$4;
    if (!jur_AbstractCharClass_hasLowHighSurrogates($charClass)) {
        if (!$charClass.$mayContainSupplCodepoints) {
            if ($charClass.$hasUCI())
                return jur_UCIRangeSet__init_($charClass);
            return jur_RangeSet__init_($charClass);
        }
        if (!$charClass.$hasUCI())
            return jur_SupplRangeSet__init_0($charClass);
        $surrogates = new jur_UCISupplRangeSet;
        jur_SupplRangeSet__init_($surrogates, $charClass);
        return $surrogates;
    }
    $surrogates = jur_AbstractCharClass_getSurrogates($charClass);
    $lowHighSurrRangeSet = new jur_LowHighSurrogateRangeSet;
    jur_AbstractSet__init_($lowHighSurrRangeSet);
    $lowHighSurrRangeSet.$surrChars = $surrogates;
    $lowHighSurrRangeSet.$alt0 = $surrogates.$alt;
    if (!$charClass.$mayContainSupplCodepoints) {
        if ($charClass.$hasUCI())
            return jur_CompositeRangeSet__init_(jur_UCIRangeSet__init_(jur_AbstractCharClass_getWithoutSurrogates($charClass)), $lowHighSurrRangeSet);
        return jur_CompositeRangeSet__init_(jur_RangeSet__init_(jur_AbstractCharClass_getWithoutSurrogates($charClass)), $lowHighSurrRangeSet);
    }
    if (!$charClass.$hasUCI())
        return jur_CompositeRangeSet__init_(jur_SupplRangeSet__init_0(jur_AbstractCharClass_getWithoutSurrogates($charClass)), $lowHighSurrRangeSet);
    $surrogates = new jur_CompositeRangeSet;
    var$4 = new jur_UCISupplRangeSet;
    jur_SupplRangeSet__init_(var$4, jur_AbstractCharClass_getWithoutSurrogates($charClass));
    jur_CompositeRangeSet__init_0($surrogates, var$4, $lowHighSurrRangeSet);
    return $surrogates;
},
jur_Pattern_getSupplement = $ch => {
    if ($ch >= 97 && $ch <= 122)
        $ch = ($ch - 32 | 0) & 65535;
    else if ($ch >= 65 && $ch <= 90)
        $ch = ($ch + 32 | 0) & 65535;
    return $ch;
},
jur_Pattern_hasFlag = ($this, $flag) => {
    return ($this.$flags & $flag) != $flag ? 0 : 1;
};
function rddd_Dinosaur() {
    let a = this; jl_Object.call(a);
    a.$id = 0;
    a.$name0 = null;
    a.$latinName = null;
    a.$icon = null;
    a.$shortInfo = null;
    a.$fullArticle = null;
    a.$funFact = null;
    a.$category2 = null;
}
let rddd_Dinosaur__init_0 = ($this, $id, $name, $latinName, $icon, $shortInfo, $fullArticle, $funFact, $category) => {
    $this.$id = $id;
    $this.$name0 = $name;
    $this.$latinName = $latinName;
    $this.$icon = $icon;
    $this.$shortInfo = $shortInfo;
    $this.$fullArticle = $fullArticle;
    $this.$funFact = $funFact;
    $this.$category2 = $category;
},
rddd_Dinosaur__init_ = (var_0, var_1, var_2, var_3, var_4, var_5, var_6, var_7) => {
    let var_8 = new rddd_Dinosaur();
    rddd_Dinosaur__init_0(var_8, var_0, var_1, var_2, var_3, var_4, var_5, var_6, var_7);
    return var_8;
},
jl_IllegalArgumentException = $rt_classWithoutFields(jl_RuntimeException),
jl_NumberFormatException = $rt_classWithoutFields(jl_IllegalArgumentException),
jl_NullPointerException = $rt_classWithoutFields(jl_RuntimeException);
function jur_AbstractSet() {
    let a = this; jl_Object.call(a);
    a.$next1 = null;
    a.$isSecondPassVisited = 0;
    a.$index2 = null;
    a.$type0 = 0;
}
let jur_AbstractSet_counter = 0,
jur_AbstractSet_$callClinit = () => {
    jur_AbstractSet_$callClinit = $rt_eraseClinit(jur_AbstractSet);
    jur_AbstractSet__clinit_();
},
jur_AbstractSet__init_ = $this => {
    let var$1;
    jur_AbstractSet_$callClinit();
    var$1 = jur_AbstractSet_counter;
    jur_AbstractSet_counter = var$1 + 1 | 0;
    $this.$index2 = jl_Integer_toString(var$1);
},
jur_AbstractSet__init_0 = ($this, $n) => {
    let var$2;
    jur_AbstractSet_$callClinit();
    var$2 = jur_AbstractSet_counter;
    jur_AbstractSet_counter = var$2 + 1 | 0;
    $this.$index2 = jl_Integer_toString(var$2);
    $this.$next1 = $n;
},
jur_AbstractSet_find = ($this, $stringIndex, $testString, $matchResult) => {
    let $length;
    $length = $matchResult.$rightBound;
    while (true) {
        if ($stringIndex > $length)
            return (-1);
        if ($this.$matches($stringIndex, $testString, $matchResult) >= 0)
            break;
        $stringIndex = $stringIndex + 1 | 0;
    }
    return $stringIndex;
},
jur_AbstractSet_findBack = ($this, $stringIndex, $startSearch, $testString, $matchResult) => {
    while (true) {
        if ($startSearch < $stringIndex)
            return (-1);
        if ($this.$matches($startSearch, $testString, $matchResult) >= 0)
            break;
        $startSearch = $startSearch + (-1) | 0;
    }
    return $startSearch;
},
jur_AbstractSet_setType = ($this, $type) => {
    $this.$type0 = $type;
},
jur_AbstractSet_getType = $this => {
    return $this.$type0;
},
jur_AbstractSet_getNext = $this => {
    return $this.$next1;
},
jur_AbstractSet_setNext = ($this, $next) => {
    $this.$next1 = $next;
},
jur_AbstractSet_first = ($this, $set) => {
    return 1;
},
jur_AbstractSet_processBackRefReplacement = $this => {
    return null;
},
jur_AbstractSet_processSecondPass = $this => {
    let $set;
    $this.$isSecondPassVisited = 1;
    $set = $this.$next1;
    if ($set !== null) {
        if (!$set.$isSecondPassVisited) {
            $set = $set.$processBackRefReplacement();
            if ($set !== null) {
                $this.$next1.$isSecondPassVisited = 1;
                $this.$next1 = $set;
            }
            $this.$next1.$processSecondPass();
        } else if ($set instanceof jur_SingleSet && $set.$fSet.$isBackReferenced)
            $this.$next1 = $set.$next1;
    }
},
jur_AbstractSet__clinit_ = () => {
    jur_AbstractSet_counter = 1;
},
jl_Iterable = $rt_classWithoutFields(0),
ju_Collection = $rt_classWithoutFields(0),
ju_AbstractCollection = $rt_classWithoutFields(),
ju_AbstractCollection_toArray = ($this, $a) => {
    let var$2, $i, $i_0, var$5, var$6;
    var$2 = $a.data;
    $i = $this.$size;
    $i_0 = var$2.length;
    if ($i_0 < $i)
        $a = jlr_Array_newInstance(jl_Class_getComponentType(jl_Object_getClass($a)), $i);
    else
        while ($i < $i_0) {
            var$2[$i] = null;
            $i = $i + 1 | 0;
        }
    $i_0 = 0;
    var$5 = ju_AbstractList_iterator($this);
    while (ju_AbstractList$1_hasNext(var$5)) {
        var$2 = $a.data;
        var$6 = $i_0 + 1 | 0;
        var$2[$i_0] = ju_AbstractList$1_next(var$5);
        $i_0 = var$6;
    }
    return $a;
},
ju_SequencedCollection = $rt_classWithoutFields(0),
ju_List = $rt_classWithoutFields(0);
function ju_AbstractList() {
    ju_AbstractCollection.call(this);
    this.$modCount = 0;
}
let ju_AbstractList_iterator = $this => {
    let var$1;
    var$1 = new ju_AbstractList$1;
    var$1.$this$03 = $this;
    var$1.$modCount0 = $this.$modCount;
    var$1.$size0 = $this.$size;
    var$1.$removeIndex = (-1);
    return var$1;
},
jl_Cloneable = $rt_classWithoutFields(0),
ju_RandomAccess = $rt_classWithoutFields(0);
function ju_ArrayList() {
    let a = this; ju_AbstractList.call(a);
    a.$array = null;
    a.$size = 0;
}
let ju_ArrayList__init_0 = $this => {
    $this.$array = $rt_createArray(jl_Object, 10);
},
ju_ArrayList__init_ = () => {
    let var_0 = new ju_ArrayList();
    ju_ArrayList__init_0(var_0);
    return var_0;
},
ju_ArrayList_ensureCapacity = ($this, $minCapacity) => {
    let var$2, $newLength;
    var$2 = $this.$array.data.length;
    if (var$2 < $minCapacity) {
        $newLength = var$2 >= 1073741823 ? 2147483647 : jl_Math_max($minCapacity, jl_Math_max(var$2 * 2 | 0, 5));
        $this.$array = ju_Arrays_copyOf0($this.$array, $newLength);
    }
},
ju_ArrayList_get = ($this, $index) => {
    ju_ArrayList_checkIndex($this, $index);
    return $this.$array.data[$index];
},
ju_ArrayList_add = ($this, $element) => {
    let var$2, var$3;
    ju_ArrayList_ensureCapacity($this, $this.$size + 1 | 0);
    var$2 = $this.$array.data;
    var$3 = $this.$size;
    $this.$size = var$3 + 1 | 0;
    var$2[var$3] = $element;
    $this.$modCount = $this.$modCount + 1 | 0;
    return 1;
},
ju_ArrayList_remove = ($this, $i) => {
    let var$2, $old, var$4, $i_0;
    ju_ArrayList_checkIndex($this, $i);
    var$2 = $this.$array.data;
    $old = var$2[$i];
    var$4 = $this.$size - 1 | 0;
    $this.$size = var$4;
    while ($i < var$4) {
        $i_0 = $i + 1 | 0;
        var$2[$i] = var$2[$i_0];
        $i = $i_0;
    }
    var$2[var$4] = null;
    $this.$modCount = $this.$modCount + 1 | 0;
    return $old;
},
ju_ArrayList_checkIndex = ($this, $index) => {
    let var$2;
    if ($index >= 0 && $index < $this.$size)
        return;
    var$2 = new jl_IndexOutOfBoundsException;
    jl_RuntimeException__init_(var$2);
    $rt_throw(var$2);
},
jur_MatchResult = $rt_classWithoutFields(0);
function jur_Matcher() {
    let a = this; jl_Object.call(a);
    a.$pat = null;
    a.$start2 = null;
    a.$string2 = null;
    a.$matchResult = null;
    a.$leftBound0 = 0;
    a.$rightBound0 = 0;
}
let jur_Matcher_find = ($this, $start) => {
    let $stringLength, var$3, var$4;
    $stringLength = $this.$string2.$nativeString.length;
    if ($start >= 0 && $start <= $stringLength) {
        jur_MatchResultImpl_reset($this.$matchResult, null, (-1), (-1));
        var$3 = $this.$matchResult;
        var$3.$mode0 = 1;
        var$3.$startIndex = $start;
        $stringLength = var$3.$previousMatch;
        if ($stringLength < 0)
            $stringLength = $start;
        var$3.$previousMatch = $stringLength;
        $start = $this.$start2.$find0($start, $this.$string2, var$3);
        if ($start == (-1))
            $this.$matchResult.$hitEnd = 1;
        if ($start >= 0) {
            var$3 = $this.$matchResult;
            if (var$3.$valid) {
                var$4 = var$3.$groupBounds.data;
                if (var$4[0] == (-1)) {
                    $stringLength = var$3.$startIndex;
                    var$4[0] = $stringLength;
                    var$4[1] = $stringLength;
                }
                var$3.$previousMatch = jur_MatchResultImpl_end(var$3);
                return 1;
            }
        }
        $this.$matchResult.$startIndex = (-1);
        return 0;
    }
    var$3 = new jl_IndexOutOfBoundsException;
    jl_RuntimeException__init_0(var$3, jl_String_valueOf0($start));
    $rt_throw(var$3);
},
jur_Matcher_find0 = $this => {
    let $length, var$2, var$3;
    $length = $this.$string2.$nativeString.length;
    var$2 = $this.$matchResult;
    if (!var$2.$transparentBounds)
        $length = $this.$rightBound0;
    if (var$2.$startIndex >= 0 && var$2.$mode0 == 1) {
        var$2.$startIndex = jur_MatchResultImpl_end(var$2);
        if (jur_MatchResultImpl_end($this.$matchResult) == jur_MatchResultImpl_start($this.$matchResult, 0)) {
            var$2 = $this.$matchResult;
            var$2.$startIndex = var$2.$startIndex + 1 | 0;
        }
        var$3 = $this.$matchResult.$startIndex;
        return var$3 <= $length && jur_Matcher_find($this, var$3) ? 1 : 0;
    }
    return jur_Matcher_find($this, $this.$leftBound0);
},
jur_Matcher_end = $this => {
    return jur_MatchResultImpl_end0($this.$matchResult, 0);
};
function otciu_UnicodeHelper$Range() {
    let a = this; jl_Object.call(a);
    a.$start3 = 0;
    a.$end1 = 0;
    a.$data0 = null;
}
let otciu_UnicodeHelper$Range__init_ = ($this, $start, $end, $data) => {
    $this.$start3 = $start;
    $this.$end1 = $end;
    $this.$data0 = $data;
},
otciu_UnicodeHelper$Range__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new otciu_UnicodeHelper$Range();
    otciu_UnicodeHelper$Range__init_(var_3, var_0, var_1, var_2);
    return var_3;
};
function jur_FSet() {
    let a = this; jur_AbstractSet.call(a);
    a.$isBackReferenced = 0;
    a.$groupIndex0 = 0;
}
let jur_FSet_posFSet = null,
jur_FSet_$callClinit = () => {
    jur_FSet_$callClinit = $rt_eraseClinit(jur_FSet);
    jur_FSet__clinit_();
},
jur_FSet__init_ = ($this, $groupIndex) => {
    jur_FSet_$callClinit();
    jur_AbstractSet__init_($this);
    $this.$groupIndex0 = $groupIndex;
},
jur_FSet__init_0 = var_0 => {
    let var_1 = new jur_FSet();
    jur_FSet__init_(var_1, var_0);
    return var_1;
},
jur_FSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $end, $shift;
    $end = jur_MatchResultImpl_getEnd($matchResult, $this.$groupIndex0);
    jur_MatchResultImpl_setEnd($matchResult, $this.$groupIndex0, $stringIndex);
    $shift = $this.$next1.$matches($stringIndex, $testString, $matchResult);
    if ($shift < 0)
        jur_MatchResultImpl_setEnd($matchResult, $this.$groupIndex0, $end);
    return $shift;
},
jur_FSet_getGroupIndex = $this => {
    return $this.$groupIndex0;
},
jur_FSet_hasConsumed = ($this, $mr) => {
    return 0;
},
jur_FSet__clinit_ = () => {
    let var$1;
    var$1 = new jur_FSet$PossessiveFSet;
    jur_AbstractSet__init_(var$1);
    jur_FSet_posFSet = var$1;
};
function jur_Lexer() {
    let a = this; jl_Object.call(a);
    a.$pattern0 = null;
    a.$flags0 = 0;
    a.$mode = 0;
    a.$savedMode = 0;
    a.$lookBack = 0;
    a.$ch = 0;
    a.$lookAhead = 0;
    a.$groupName = null;
    a.$patternFullLength = 0;
    a.$curST = null;
    a.$lookAheadST = null;
    a.$index = 0;
    a.$prevNW = 0;
    a.$curToc = 0;
    a.$lookAheadToc = 0;
    a.$orig = null;
}
let jur_Lexer_decompTable = null,
jur_Lexer_singleDecompTable = null,
jur_Lexer_singleDecompTableSize = 0,
jur_Lexer_setMode = ($this, $mode) => {
    if ($mode > 0 && $mode < 3)
        $this.$mode = $mode;
    if ($mode == 1) {
        $this.$lookAhead = $this.$ch;
        $this.$lookAheadST = $this.$curST;
        $this.$index = $this.$lookAheadToc;
        $this.$lookAheadToc = $this.$curToc;
        jur_Lexer_movePointer($this);
    }
},
jur_Lexer_isSpecial = $this => {
    return $this.$curST === null ? 0 : 1;
},
jur_Lexer_isNextSpecial = $this => {
    return $this.$lookAheadST === null ? 0 : 1;
},
jur_Lexer_next = $this => {
    jur_Lexer_movePointer($this);
    return $this.$lookBack;
},
jur_Lexer_nextSpecial = $this => {
    let $res;
    $res = $this.$curST;
    jur_Lexer_movePointer($this);
    return $res;
},
jur_Lexer_movePointer = $this => {
    let $reread, $nonCap, var$3, $cs, $negative, $behindOrNamed, $nameBuilder, $mod, $$je;
    $this.$lookBack = $this.$ch;
    $this.$ch = $this.$lookAhead;
    $this.$curST = $this.$lookAheadST;
    $this.$curToc = $this.$lookAheadToc;
    $this.$lookAheadToc = $this.$index;
    a: {
        while (true) {
            $reread = 0;
            $nonCap = $this.$index >= $this.$pattern0.data.length ? 0 : jur_Lexer_nextCodePoint($this);
            $this.$lookAhead = $nonCap;
            $this.$lookAheadST = null;
            if ($this.$mode == 4) {
                if ($nonCap != 92)
                    return;
                $nonCap = $this.$index;
                var$3 = $this.$pattern0.data;
                $nonCap = $nonCap >= var$3.length ? 0 : var$3[jur_Lexer_nextIndex($this)];
                $this.$lookAhead = $nonCap;
                switch ($nonCap) {
                    case 69:
                        break;
                    default:
                        $this.$lookAhead = 92;
                        $this.$index = $this.$prevNW;
                        return;
                }
                $this.$mode = $this.$savedMode;
                $this.$lookAhead = $this.$index > ($this.$pattern0.data.length - 2 | 0) ? 0 : jur_Lexer_nextCodePoint($this);
            }
            b: {
                $nonCap = $this.$lookAhead;
                if ($nonCap == 92) {
                    $nonCap = $this.$index >= ($this.$pattern0.data.length - 2 | 0) ? (-1) : jur_Lexer_nextCodePoint($this);
                    c: {
                        $this.$lookAhead = $nonCap;
                        switch ($nonCap) {
                            case -1:
                                $rt_throw(jur_PatternSyntaxException__init_($rt_s(3), jur_Lexer_toString($this), $this.$index));
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                            case 6:
                            case 7:
                            case 8:
                            case 9:
                            case 10:
                            case 11:
                            case 12:
                            case 13:
                            case 14:
                            case 15:
                            case 16:
                            case 17:
                            case 18:
                            case 19:
                            case 20:
                            case 21:
                            case 22:
                            case 23:
                            case 24:
                            case 25:
                            case 26:
                            case 27:
                            case 28:
                            case 29:
                            case 30:
                            case 31:
                            case 32:
                            case 33:
                            case 34:
                            case 35:
                            case 36:
                            case 37:
                            case 38:
                            case 39:
                            case 40:
                            case 41:
                            case 42:
                            case 43:
                            case 44:
                            case 45:
                            case 46:
                            case 47:
                            case 58:
                            case 59:
                            case 60:
                            case 61:
                            case 62:
                            case 63:
                            case 64:
                            case 91:
                            case 92:
                            case 93:
                            case 94:
                            case 95:
                            case 96:
                            case 118:
                                break;
                            case 48:
                                $this.$lookAhead = jur_Lexer_readOctals($this);
                                break b;
                            case 49:
                            case 50:
                            case 51:
                            case 52:
                            case 53:
                            case 54:
                            case 55:
                            case 56:
                            case 57:
                                if ($this.$mode != 1)
                                    break b;
                                $this.$lookAhead = (-2147483648) | $nonCap;
                                break b;
                            case 65:
                                $this.$lookAhead = (-2147483583);
                                break b;
                            case 66:
                                $this.$lookAhead = (-2147483582);
                                break b;
                            case 67:
                            case 69:
                            case 70:
                            case 72:
                            case 73:
                            case 74:
                            case 75:
                            case 76:
                            case 77:
                            case 78:
                            case 79:
                            case 82:
                            case 84:
                            case 85:
                            case 86:
                            case 88:
                            case 89:
                            case 103:
                            case 104:
                            case 105:
                            case 106:
                            case 107:
                            case 108:
                            case 109:
                            case 111:
                            case 113:
                            case 121:
                                $rt_throw(jur_PatternSyntaxException__init_($rt_s(3), jur_Lexer_toString($this), $this.$index));
                            case 68:
                            case 83:
                            case 87:
                            case 100:
                            case 115:
                            case 119:
                                $this.$lookAheadST = jur_AbstractCharClass_getPredefinedClass(jl_String__init_($this.$pattern0, $this.$prevNW, 1), 0);
                                $this.$lookAhead = 0;
                                break b;
                            case 71:
                                $this.$lookAhead = (-2147483577);
                                break b;
                            case 80:
                            case 112:
                                break c;
                            case 81:
                                $this.$savedMode = $this.$mode;
                                $this.$mode = 4;
                                $reread = 1;
                                break b;
                            case 90:
                                $this.$lookAhead = (-2147483558);
                                break b;
                            case 97:
                                $this.$lookAhead = 7;
                                break b;
                            case 98:
                                $this.$lookAhead = (-2147483550);
                                break b;
                            case 99:
                                $nonCap = $this.$index;
                                var$3 = $this.$pattern0.data;
                                if ($nonCap >= (var$3.length - 2 | 0))
                                    $rt_throw(jur_PatternSyntaxException__init_($rt_s(3), jur_Lexer_toString($this), $this.$index));
                                $this.$lookAhead = var$3[jur_Lexer_nextIndex($this)] & 31;
                                break b;
                            case 101:
                                $this.$lookAhead = 27;
                                break b;
                            case 102:
                                $this.$lookAhead = 12;
                                break b;
                            case 110:
                                $this.$lookAhead = 10;
                                break b;
                            case 114:
                                $this.$lookAhead = 13;
                                break b;
                            case 116:
                                $this.$lookAhead = 9;
                                break b;
                            case 117:
                                $this.$lookAhead = jur_Lexer_readHex($this, 4);
                                break b;
                            case 120:
                                $this.$lookAhead = jur_Lexer_readHex($this, 2);
                                break b;
                            case 122:
                                $this.$lookAhead = (-2147483526);
                                break b;
                            default:
                        }
                        break b;
                    }
                    $cs = jur_Lexer_parseCharClassName($this);
                    $negative = 0;
                    if ($this.$lookAhead == 80)
                        $negative = 1;
                    try {
                        $this.$lookAheadST = jur_AbstractCharClass_getPredefinedClass($cs, $negative);
                    } catch ($$e) {
                        $$je = $rt_wrapException($$e);
                        if ($$je instanceof ju_MissingResourceException) {
                            $rt_throw(jur_PatternSyntaxException__init_($rt_s(3), jur_Lexer_toString($this), $this.$index));
                        } else {
                            throw $$e;
                        }
                    }
                    $this.$lookAhead = 0;
                } else {
                    $behindOrNamed = $this.$mode;
                    if ($behindOrNamed == 1)
                        switch ($nonCap) {
                            case 36:
                                $this.$lookAhead = (-536870876);
                                break b;
                            case 40:
                                if ($this.$pattern0.data[$this.$index] != 63) {
                                    $this.$lookAhead = (-2147483608);
                                    break b;
                                }
                                jur_Lexer_nextIndex($this);
                                $nonCap = $this.$pattern0.data[$this.$index];
                                $behindOrNamed = 0;
                                $nameBuilder = null;
                                while (true) {
                                    d: {
                                        if (!$behindOrNamed) {
                                            switch ($nonCap) {
                                                case 33:
                                                    break;
                                                case 60:
                                                    jur_Lexer_nextIndex($this);
                                                    $nonCap = $this.$pattern0.data[$this.$index];
                                                    $behindOrNamed = 1;
                                                    break d;
                                                case 61:
                                                    $this.$lookAhead = (-536870872);
                                                    jur_Lexer_nextIndex($this);
                                                    break d;
                                                case 62:
                                                    $this.$lookAhead = (-33554392);
                                                    jur_Lexer_nextIndex($this);
                                                    break d;
                                                default:
                                                    $mod = jur_Lexer_readFlags($this);
                                                    $this.$lookAhead = $mod;
                                                    if ($mod < 256) {
                                                        $this.$flags0 = $mod;
                                                        $mod = $mod << 16;
                                                        $this.$lookAhead = $mod;
                                                        $this.$lookAhead = (-1073741784) | $mod;
                                                        break d;
                                                    }
                                                    $mod = $mod & 255;
                                                    $this.$lookAhead = $mod;
                                                    $this.$flags0 = $mod;
                                                    $mod = $mod << 16;
                                                    $this.$lookAhead = $mod;
                                                    $this.$lookAhead = (-16777176) | $mod;
                                                    break d;
                                            }
                                            $this.$lookAhead = (-268435416);
                                            jur_Lexer_nextIndex($this);
                                        } else {
                                            e: {
                                                switch ($nonCap) {
                                                    case 33:
                                                        break;
                                                    case 61:
                                                        $behindOrNamed = 0;
                                                        $this.$lookAhead = (-134217688);
                                                        jur_Lexer_nextIndex($this);
                                                        break d;
                                                    case 62:
                                                        if ($nameBuilder === null)
                                                            $rt_throw(jur_PatternSyntaxException__init_($rt_s(3), jur_Lexer_toString($this), $this.$index));
                                                        $this.$groupName = jl_StringBuilder_toString($nameBuilder);
                                                        jur_Lexer_nextIndex($this);
                                                        $nameBuilder = null;
                                                        $behindOrNamed = 0;
                                                        $this.$lookAhead = (-2130706392);
                                                        break d;
                                                    default:
                                                        break e;
                                                }
                                                $behindOrNamed = 0;
                                                $this.$lookAhead = (-67108824);
                                                jur_Lexer_nextIndex($this);
                                                break d;
                                            }
                                            f: {
                                                if (!($nonCap >= 65 && $nonCap <= 90)) {
                                                    if ($nonCap < 97)
                                                        break f;
                                                    if ($nonCap > 122)
                                                        break f;
                                                }
                                                if ($nameBuilder === null)
                                                    $nameBuilder = jl_StringBuilder__init_();
                                                jl_StringBuilder_append3($nameBuilder, $nonCap);
                                                jur_Lexer_nextIndex($this);
                                                $nonCap = $this.$pattern0.data[$this.$index];
                                                break d;
                                            }
                                            if ($nonCap < 48)
                                                break a;
                                            if ($nonCap > 57)
                                                break a;
                                            if ($nameBuilder === null)
                                                $rt_throw(jur_PatternSyntaxException__init_($rt_s(261), jur_Lexer_toString($this), $this.$index));
                                            jl_StringBuilder_append3($nameBuilder, $nonCap);
                                            jur_Lexer_nextIndex($this);
                                            $nonCap = $this.$pattern0.data[$this.$index];
                                        }
                                    }
                                    if (!$behindOrNamed)
                                        break;
                                }
                                break b;
                            case 41:
                                $this.$lookAhead = (-536870871);
                                break b;
                            case 42:
                            case 43:
                            case 63:
                                $behindOrNamed = $this.$index;
                                var$3 = $this.$pattern0.data;
                                switch ($behindOrNamed >= var$3.length ? 42 : var$3[$behindOrNamed]) {
                                    case 43:
                                        $this.$lookAhead = $nonCap | (-2147483648);
                                        jur_Lexer_nextIndex($this);
                                        break b;
                                    case 63:
                                        $this.$lookAhead = $nonCap | (-1073741824);
                                        jur_Lexer_nextIndex($this);
                                        break b;
                                    default:
                                }
                                $this.$lookAhead = $nonCap | (-536870912);
                                break b;
                            case 46:
                                $this.$lookAhead = (-536870866);
                                break b;
                            case 91:
                                $this.$lookAhead = (-536870821);
                                jur_Lexer_setMode($this, 2);
                                break b;
                            case 93:
                                if ($behindOrNamed != 2)
                                    break b;
                                $this.$lookAhead = (-536870819);
                                break b;
                            case 94:
                                $this.$lookAhead = (-536870818);
                                break b;
                            case 123:
                                $this.$lookAheadST = jur_Lexer_processQuantifier($this, $nonCap);
                                break b;
                            case 124:
                                $this.$lookAhead = (-536870788);
                                break b;
                            default:
                        }
                    else if ($behindOrNamed == 2)
                        switch ($nonCap) {
                            case 38:
                                $this.$lookAhead = (-536870874);
                                break b;
                            case 45:
                                $this.$lookAhead = (-536870867);
                                break b;
                            case 91:
                                $this.$lookAhead = (-536870821);
                                break b;
                            case 93:
                                $this.$lookAhead = (-536870819);
                                break b;
                            case 94:
                                $this.$lookAhead = (-536870818);
                                break b;
                            default:
                        }
                }
            }
            if ($reread)
                continue;
            else
                break;
        }
        return;
    }
    $rt_throw(jur_PatternSyntaxException__init_($rt_s(3), jur_Lexer_toString($this), $this.$index));
},
jur_Lexer_parseCharClassName = $this => {
    let $sb, $ch, var$3, var$4, $res, var$6;
    $sb = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_0($sb, 10);
    $ch = $this.$index;
    var$3 = $this.$pattern0;
    var$4 = var$3.data;
    if ($ch < (var$4.length - 2 | 0)) {
        if (var$4[$ch] != 123) {
            $sb = jl_String__init_(var$3, jur_Lexer_nextIndex($this), 1);
            $res = new jl_StringBuilder;
            jl_AbstractStringBuilder__init_($res);
            jl_StringBuilder_append(jl_StringBuilder_append($res, $rt_s(262)), $sb);
            return jl_AbstractStringBuilder_toString($res);
        }
        jur_Lexer_nextIndex($this);
        $ch = 0;
        a: {
            while (true) {
                var$6 = $this.$index;
                var$3 = $this.$pattern0.data;
                if (var$6 >= (var$3.length - 2 | 0))
                    break;
                $ch = var$3[jur_Lexer_nextIndex($this)];
                if ($ch == 125)
                    break a;
                jl_AbstractStringBuilder_append($sb, $ch);
            }
        }
        if ($ch != 125)
            $rt_throw(jur_PatternSyntaxException__init_($rt_s(3), $this.$orig, $this.$index));
    }
    if (!$sb.$length0)
        $rt_throw(jur_PatternSyntaxException__init_($rt_s(3), $this.$orig, $this.$index));
    $res = jl_AbstractStringBuilder_toString($sb);
    if ($res.$nativeString.length == 1) {
        $sb = new jl_StringBuilder;
        jl_AbstractStringBuilder__init_($sb);
        jl_StringBuilder_append(jl_StringBuilder_append($sb, $rt_s(262)), $res);
        return jl_AbstractStringBuilder_toString($sb);
    }
    b: {
        c: {
            if ($res.$nativeString.length > 3) {
                if (jl_String_startsWith($res, $rt_s(262)))
                    break c;
                if (jl_String_startsWith($res, $rt_s(263)))
                    break c;
            }
            break b;
        }
        $res = jl_String_substring0($res, 2);
    }
    return $res;
},
jur_Lexer_processQuantifier = ($this, $ch) => {
    let $sb, $min, $max, $mod, var$6, $$je;
    $sb = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_0($sb, 4);
    $min = (-1);
    $max = 2147483647;
    a: {
        while (true) {
            $mod = $this.$index;
            var$6 = $this.$pattern0.data;
            if ($mod >= var$6.length)
                break a;
            $ch = var$6[jur_Lexer_nextIndex($this)];
            if ($ch == 125)
                break a;
            if ($ch == 44 && $min < 0)
                try {
                    $min = jl_Integer_parseInt(jl_StringBuilder_toString($sb), 10);
                    jl_StringBuilder_delete($sb, 0, jl_StringBuilder_length($sb));
                    continue;
                } catch ($$e) {
                    $$je = $rt_wrapException($$e);
                    if ($$je instanceof jl_NumberFormatException) {
                        break;
                    } else {
                        throw $$e;
                    }
                }
            jl_AbstractStringBuilder_append($sb, $ch & 65535);
        }
        $rt_throw(jur_PatternSyntaxException__init_($rt_s(3), $this.$orig, $this.$index));
    }
    if ($ch != 125)
        $rt_throw(jur_PatternSyntaxException__init_($rt_s(3), $this.$orig, $this.$index));
    if ($sb.$length0 > 0)
        b: {
            try {
                $max = jl_Integer_parseInt(jl_StringBuilder_toString($sb), 10);
                if ($min >= 0)
                    break b;
                $min = $max;
                break b;
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                if ($$je instanceof jl_NumberFormatException) {
                    $rt_throw(jur_PatternSyntaxException__init_($rt_s(3), $this.$orig, $this.$index));
                } else {
                    throw $$e;
                }
            }
        }
    else if ($min < 0)
        $rt_throw(jur_PatternSyntaxException__init_($rt_s(3), $this.$orig, $this.$index));
    if (($min | $max | ($max - $min | 0)) < 0)
        $rt_throw(jur_PatternSyntaxException__init_($rt_s(3), $this.$orig, $this.$index));
    $ch = $this.$index;
    var$6 = $this.$pattern0.data;
    $mod = $ch >= var$6.length ? 42 : var$6[$ch];
    c: {
        switch ($mod) {
            case 43:
                $this.$lookAhead = (-2147483525);
                jur_Lexer_nextIndex($this);
                break c;
            case 63:
                $this.$lookAhead = (-1073741701);
                jur_Lexer_nextIndex($this);
                break c;
            default:
        }
        $this.$lookAhead = (-536870789);
    }
    $sb = new jur_Quantifier;
    $sb.$min1 = $min;
    $sb.$max1 = $max;
    return $sb;
},
jur_Lexer_toString = $this => {
    return $this.$orig;
},
jur_Lexer_isEmpty = $this => {
    return !$this.$ch && !$this.$lookAhead && $this.$index == $this.$patternFullLength && !jur_Lexer_isSpecial($this) ? 1 : 0;
},
jur_Lexer_isLetter0 = $ch => {
    return $ch < 0 ? 0 : 1;
},
jur_Lexer_isLetter = $this => {
    return !jur_Lexer_isEmpty($this) && !jur_Lexer_isSpecial($this) && jur_Lexer_isLetter0($this.$ch) ? 1 : 0;
},
jur_Lexer_isHighSurrogate0 = $this => {
    let var$1;
    var$1 = $this.$ch;
    return var$1 <= 56319 && var$1 >= 55296 ? 1 : 0;
},
jur_Lexer_isLowSurrogate0 = $this => {
    let var$1;
    var$1 = $this.$ch;
    return var$1 <= 57343 && var$1 >= 56320 ? 1 : 0;
},
jur_Lexer_isHighSurrogate = $ch => {
    return $ch <= 56319 && $ch >= 55296 ? 1 : 0;
},
jur_Lexer_isLowSurrogate = $ch => {
    return $ch <= 57343 && $ch >= 56320 ? 1 : 0;
},
jur_Lexer_readHex = ($this, $max) => {
    let $st, $length, $i, var$5, $$je;
    $st = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_0($st, $max);
    $length = $this.$pattern0.data.length - 2 | 0;
    $i = 0;
    while (true) {
        var$5 = $rt_compare($i, $max);
        if (var$5 >= 0)
            break;
        if ($this.$index >= $length)
            break;
        jl_AbstractStringBuilder_append($st, $this.$pattern0.data[jur_Lexer_nextIndex($this)]);
        $i = $i + 1 | 0;
    }
    if (!var$5)
        a: {
            try {
                $max = jl_Integer_parseInt(jl_StringBuilder_toString($st), 16);
            } catch ($$e) {
                $$je = $rt_wrapException($$e);
                if ($$je instanceof jl_NumberFormatException) {
                    break a;
                } else {
                    throw $$e;
                }
            }
            return $max;
        }
    $rt_throw(jur_PatternSyntaxException__init_($rt_s(3), $this.$orig, $this.$index));
},
jur_Lexer_readOctals = $this => {
    let $max, $i, var$3, $length, $res, var$6;
    $max = 3;
    $i = 1;
    var$3 = $this.$pattern0.data;
    $length = var$3.length - 2 | 0;
    $res = jl_Character_digit(var$3[$this.$index], 8);
    switch ($res) {
        case -1:
            break;
        default:
            if ($res > 3)
                $max = 2;
            jur_Lexer_nextIndex($this);
            a: {
                while (true) {
                    if ($i >= $max)
                        break a;
                    var$6 = $this.$index;
                    if (var$6 >= $length)
                        break a;
                    var$6 = jl_Character_digit($this.$pattern0.data[var$6], 8);
                    if (var$6 < 0)
                        break;
                    $res = ($res * 8 | 0) + var$6 | 0;
                    jur_Lexer_nextIndex($this);
                    $i = $i + 1 | 0;
                }
            }
            return $res;
    }
    $rt_throw(jur_PatternSyntaxException__init_($rt_s(3), $this.$orig, $this.$index));
},
jur_Lexer_readFlags = $this => {
    let $pos, $res, var$3, var$4;
    $pos = 1;
    $res = $this.$flags0;
    a: while (true) {
        var$3 = $this.$index;
        var$4 = $this.$pattern0.data;
        if (var$3 >= var$4.length)
            $rt_throw(jur_PatternSyntaxException__init_($rt_s(3), $this.$orig, var$3));
        b: {
            c: {
                switch (var$4[var$3]) {
                    case 41:
                        jur_Lexer_nextIndex($this);
                        return $res | 256;
                    case 45:
                        if (!$pos)
                            $rt_throw(jur_PatternSyntaxException__init_($rt_s(3), $this.$orig, var$3));
                        $pos = 0;
                        break b;
                    case 58:
                        break a;
                    case 100:
                        break c;
                    case 105:
                        $res = $pos ? $res | 2 : ($res ^ 2) & $res;
                        break b;
                    case 109:
                        $res = $pos ? $res | 8 : ($res ^ 8) & $res;
                        break b;
                    case 115:
                        $res = $pos ? $res | 32 : ($res ^ 32) & $res;
                        break b;
                    case 117:
                        $res = $pos ? $res | 64 : ($res ^ 64) & $res;
                        break b;
                    case 120:
                        $res = $pos ? $res | 4 : ($res ^ 4) & $res;
                        break b;
                    default:
                }
                break b;
            }
            $res = $pos ? $res | 1 : ($res ^ 1) & $res;
        }
        jur_Lexer_nextIndex($this);
    }
    jur_Lexer_nextIndex($this);
    return $res;
},
jur_Lexer_nextIndex = $this => {
    let var$1, var$2, var$3, var$4, var$5;
    var$1 = $this.$index;
    $this.$prevNW = var$1;
    if (!($this.$flags0 & 4))
        $this.$index = var$1 + 1 | 0;
    else {
        var$2 = $this.$pattern0.data.length - 2 | 0;
        $this.$index = var$1 + 1 | 0;
        a: while (true) {
            var$3 = $this.$index;
            if (var$3 < var$2) {
                var$3 = $this.$pattern0.data[var$3];
                jl_Character_$callClinit();
                if (jl_Character_isWhitespace(var$3)) {
                    $this.$index = $this.$index + 1 | 0;
                    continue;
                }
            }
            var$3 = $this.$index;
            if (var$3 >= var$2)
                break;
            var$4 = $this.$pattern0.data;
            if (var$4[var$3] != 35)
                break;
            $this.$index = var$3 + 1 | 0;
            while (true) {
                var$5 = $this.$index;
                if (var$5 >= var$2)
                    continue a;
                var$1 = var$4[var$5];
                if (var$1 != 10 && var$1 != 13 && var$1 != 133 && (var$1 | 1) != 8233 ? 0 : 1)
                    continue a;
                $this.$index = var$5 + 1 | 0;
            }
        }
    }
    return $this.$prevNW;
},
jur_Lexer_getDecomposition = $ch => {
    return jur_Lexer_decompTable.$get1($ch);
},
jur_Lexer_nextCodePoint = $this => {
    let $high, $lowExpectedIndex, var$3, $low;
    $high = $this.$pattern0.data[jur_Lexer_nextIndex($this)];
    if (jl_Character_isHighSurrogate($high)) {
        $lowExpectedIndex = $this.$prevNW + 1 | 0;
        var$3 = $this.$pattern0.data;
        if ($lowExpectedIndex < var$3.length) {
            $low = var$3[$lowExpectedIndex];
            if (jl_Character_isLowSurrogate($low)) {
                jur_Lexer_nextIndex($this);
                return jl_Character_toCodePoint($high, $low);
            }
        }
    }
    return $high;
},
jur_Lexer_getIndex = $this => {
    return $this.$curToc;
};
function jur_PatternSyntaxException() {
    let a = this; jl_IllegalArgumentException.call(a);
    a.$desc = null;
    a.$pattern1 = null;
    a.$index3 = 0;
}
let jur_PatternSyntaxException__init_0 = ($this, $description, $pattern, $index) => {
    jl_RuntimeException__init_($this);
    $this.$index3 = (-1);
    $this.$desc = $description;
    $this.$pattern1 = $pattern;
    $this.$index3 = $index;
},
jur_PatternSyntaxException__init_ = (var_0, var_1, var_2) => {
    let var_3 = new jur_PatternSyntaxException();
    jur_PatternSyntaxException__init_0(var_3, var_0, var_1, var_2);
    return var_3;
};
function jur_MatchResultImpl() {
    let a = this; jl_Object.call(a);
    a.$groupBounds = null;
    a.$consumers = null;
    a.$compQuantCounters = null;
    a.$string3 = null;
    a.$groupCount = 0;
    a.$valid = 0;
    a.$leftBound = 0;
    a.$rightBound = 0;
    a.$startIndex = 0;
    a.$transparentBounds = 0;
    a.$anchoringBounds = 0;
    a.$hitEnd = 0;
    a.$requireEnd = 0;
    a.$previousMatch = 0;
    a.$mode0 = 0;
    a.$namedGroups0 = null;
}
let jur_MatchResultImpl_setConsumed = ($this, $counter, $value) => {
    $this.$consumers.data[$counter] = $value;
},
jur_MatchResultImpl_getConsumed = ($this, $counter) => {
    return $this.$consumers.data[$counter];
},
jur_MatchResultImpl_end = $this => {
    return jur_MatchResultImpl_end0($this, 0);
},
jur_MatchResultImpl_end0 = ($this, $group) => {
    jur_MatchResultImpl_checkGroup($this, $group);
    return $this.$groupBounds.data[($group * 2 | 0) + 1 | 0];
},
jur_MatchResultImpl_setStart = ($this, $group, $offset) => {
    $this.$groupBounds.data[$group * 2 | 0] = $offset;
},
jur_MatchResultImpl_setEnd = ($this, $group, $offset) => {
    $this.$groupBounds.data[($group * 2 | 0) + 1 | 0] = $offset;
},
jur_MatchResultImpl_getStart = ($this, $group) => {
    return $this.$groupBounds.data[$group * 2 | 0];
},
jur_MatchResultImpl_getEnd = ($this, $group) => {
    return $this.$groupBounds.data[($group * 2 | 0) + 1 | 0];
},
jur_MatchResultImpl_start = ($this, $group) => {
    jur_MatchResultImpl_checkGroup($this, $group);
    return $this.$groupBounds.data[$group * 2 | 0];
},
jur_MatchResultImpl_getEnterCounter = ($this, $setCounter) => {
    return $this.$compQuantCounters.data[$setCounter];
},
jur_MatchResultImpl_setEnterCounter = ($this, $setCounter, $value) => {
    $this.$compQuantCounters.data[$setCounter] = $value;
},
jur_MatchResultImpl_checkGroup = ($this, $group) => {
    let var$2;
    if (!$this.$valid) {
        var$2 = new jl_IllegalStateException;
        jl_RuntimeException__init_(var$2);
        $rt_throw(var$2);
    }
    if ($group >= 0 && $group < $this.$groupCount)
        return;
    var$2 = new jl_IndexOutOfBoundsException;
    jl_RuntimeException__init_0(var$2, jl_String_valueOf0($group));
    $rt_throw(var$2);
},
jur_MatchResultImpl_reset = ($this, $newSequence, $leftBound, $rightBound) => {
    $this.$valid = 0;
    $this.$mode0 = 2;
    ju_Arrays_fill($this.$groupBounds, (-1));
    ju_Arrays_fill($this.$consumers, (-1));
    if ($newSequence !== null)
        $this.$string3 = $newSequence;
    if ($leftBound >= 0) {
        $this.$leftBound = $leftBound;
        $this.$rightBound = $rightBound;
    }
    $this.$startIndex = $this.$leftBound;
},
otpp_ResourceAccessor = $rt_classWithoutFields(),
otciu_UnicodeHelper = $rt_classWithoutFields(),
otciu_UnicodeHelper_decodeCaseMapping = $text => {
    let $flow, $sz, $data, var$5, $last, $i, var$8;
    $flow = otci_CharFlow__init_(jl_String_toCharArray($text));
    $sz = otci_Base46_decodeUnsigned($flow);
    $data = $rt_createIntArray($sz * 2 | 0);
    var$5 = $data.data;
    $last = 0;
    $i = 0;
    while ($i < $sz) {
        $last = $last + otci_Base46_decodeUnsigned($flow) | 0;
        var$8 = $i * 2 | 0;
        var$5[var$8] = $last;
        var$5[var$8 + 1 | 0] = otci_Base46_decode($flow);
        $i = $i + 1 | 0;
    }
    return $data;
},
otciu_UnicodeHelper_createCharMapping = $data => {
    let $result, var$3, $last, $lastValue, $i, var$7, $key, $value, var$10, var$11;
    $result = $rt_createIntArray(65536);
    var$3 = $result.data;
    $last = 0;
    $lastValue = 0;
    $i = 0;
    a: {
        while (true) {
            var$7 = $data.data;
            if ($i >= var$7.length)
                break a;
            $key = var$7[$i];
            $value = var$7[$i + 1 | 0];
            var$10 = var$3.length;
            if ($key < var$10)
                var$10 = $key;
            else if ($key == $last)
                break;
            ju_Arrays_fill0($result, $last, var$10, $lastValue);
            $i = $i + 2 | 0;
            $last = var$10;
            $lastValue = $value;
        }
    }
    var$11 = new otciu_CharMapping;
    var$11.$binarySearchTable = $data;
    var$11.$fastTable = $result;
    return var$11;
},
otciu_UnicodeHelper_decodeByte = $c => {
    if ($c > 92)
        return (($c - 32 | 0) - 2 | 0) << 24 >> 24;
    if ($c <= 34)
        return ($c - 32 | 0) << 24 >> 24;
    return (($c - 32 | 0) - 1 | 0) << 24 >> 24;
},
otciu_UnicodeHelper_extractRle = $encoded => {
    let $ranges, var$3, $buffer, var$5, $index, $rangeIndex, $codePoint, $i, $pos, $b, $count, $j, $digit, var$15, $chunk;
    $ranges = $rt_createArray(otciu_UnicodeHelper$Range, 16384);
    var$3 = $ranges.data;
    $buffer = $rt_createByteArray(16384);
    var$5 = $buffer.data;
    $index = 0;
    $rangeIndex = 0;
    $codePoint = 0;
    $i = 0;
    a: while (true) {
        if ($i >= $encoded.$nativeString.length) {
            if ($index <= 0)
                $pos = $rangeIndex;
            else {
                $pos = $rangeIndex + 1 | 0;
                var$3[$rangeIndex] = otciu_UnicodeHelper$Range__init_0($codePoint, $codePoint + $index | 0, ju_Arrays_copyOf($buffer, $index));
            }
            return ju_Arrays_copyOf0($ranges, $pos);
        }
        $b = otciu_UnicodeHelper_decodeByte(jl_String_charAt($encoded, $i));
        if ($b == 64) {
            $i = $i + 1 | 0;
            $b = otciu_UnicodeHelper_decodeByte(jl_String_charAt($encoded, $i));
            $count = 0;
            $pos = 1;
            $j = 0;
            while ($j < 3) {
                $i = $i + 1 | 0;
                $count = $count | $rt_imul($pos, otciu_UnicodeHelper_decodeByte(jl_String_charAt($encoded, $i)));
                $pos = $pos * 64 | 0;
                $j = $j + 1 | 0;
            }
        } else if ($b < 32)
            $count = 1;
        else {
            $b = ($b - 32 | 0) << 24 >> 24;
            $i = $i + 1 | 0;
            $count = otciu_UnicodeHelper_decodeByte(jl_String_charAt($encoded, $i));
        }
        if (!$b && $count >= 128) {
            if ($index > 0) {
                $pos = $rangeIndex + 1 | 0;
                var$3[$rangeIndex] = otciu_UnicodeHelper$Range__init_0($codePoint, $codePoint + $index | 0, ju_Arrays_copyOf($buffer, $index));
                $rangeIndex = $pos;
            }
            $codePoint = $codePoint + ($index + $count | 0) | 0;
            $index = 0;
        } else
            while ($count > 0) {
                $pos = var$5.length;
                if ($index != $pos) {
                    $j = $rangeIndex;
                    $digit = $codePoint;
                    $codePoint = $index;
                } else {
                    $j = $rangeIndex + 1 | 0;
                    var$15 = new otciu_UnicodeHelper$Range;
                    $digit = $codePoint + $index | 0;
                    otciu_UnicodeHelper$Range__init_(var$15, $codePoint, $digit, ju_Arrays_copyOf($buffer, $index));
                    var$3[$rangeIndex] = var$15;
                    $codePoint = 0;
                }
                $chunk = jl_Math_min($count, $pos - $codePoint | 0);
                $index = $codePoint + $chunk | 0;
                if ($codePoint > $index)
                    break a;
                while ($codePoint < $index) {
                    $pos = $codePoint + 1 | 0;
                    var$5[$codePoint] = $b;
                    $codePoint = $pos;
                }
                $count = $count - $chunk | 0;
                $rangeIndex = $j;
                $codePoint = $digit;
            }
        $i = $i + 1 | 0;
    }
    $encoded = new jl_IllegalArgumentException;
    jl_RuntimeException__init_($encoded);
    $rt_throw($encoded);
},
jl_System = $rt_classWithoutFields(),
jl_System_arraycopy = ($src, $srcPos, $dest, $destPos, $length) => {
    let $srcType, $targetType, $srcArray, $i, var$10, var$11, var$12, $elem;
    if ($src !== null && $dest !== null) {
        if ($srcPos >= 0 && $destPos >= 0 && $length >= 0 && ($srcPos + $length | 0) <= jlr_Array_getLength($src) && ($destPos + $length | 0) <= jlr_Array_getLength($dest)) {
            a: {
                b: {
                    if ($src !== $dest) {
                        $srcType = jl_Class_getComponentType(jl_Object_getClass($src));
                        $targetType = jl_Class_getComponentType(jl_Object_getClass($dest));
                        if ($srcType !== null && $targetType !== null) {
                            if ($srcType === $targetType)
                                break b;
                            if (!jl_Class_isPrimitive($srcType) && !jl_Class_isPrimitive($targetType)) {
                                $srcArray = $src;
                                $i = 0;
                                var$10 = $srcPos;
                                while ($i < $length) {
                                    c: {
                                        var$11 = $srcArray.data;
                                        var$12 = var$10 + 1 | 0;
                                        $elem = var$11[var$10];
                                        if ($elem !== null) {
                                            $elem = jl_Object_getClass($elem);
                                            if ($rt_isAssignable($elem.$classInfo, $targetType.$classInfo)) {
                                                var$10 = 1;
                                                break c;
                                            }
                                        }
                                        var$10 = 0;
                                    }
                                    if (!var$10) {
                                        jl_System_doArrayCopy($src, $srcPos, $dest, $destPos, $i);
                                        $src = new jl_ArrayStoreException;
                                        jl_RuntimeException__init_($src);
                                        $rt_throw($src);
                                    }
                                    $i = $i + 1 | 0;
                                    var$10 = var$12;
                                }
                                jl_System_doArrayCopy($src, $srcPos, $dest, $destPos, $length);
                                return;
                            }
                            if (!jl_Class_isPrimitive($srcType))
                                break a;
                            if (jl_Class_isPrimitive($targetType))
                                break b;
                            else
                                break a;
                        }
                        $src = new jl_ArrayStoreException;
                        jl_RuntimeException__init_($src);
                        $rt_throw($src);
                    }
                }
                jl_System_doArrayCopy($src, $srcPos, $dest, $destPos, $length);
                return;
            }
            $src = new jl_ArrayStoreException;
            jl_RuntimeException__init_($src);
            $rt_throw($src);
        }
        $src = new jl_IndexOutOfBoundsException;
        jl_RuntimeException__init_($src);
        $rt_throw($src);
    }
    $dest = new jl_NullPointerException;
    jl_RuntimeException__init_0($dest, $rt_s(264));
    $rt_throw($dest);
},
jl_System_fastArraycopy = ($src, $srcPos, $dest, $destPos, $length) => {
    if ($srcPos >= 0 && $destPos >= 0 && $length >= 0 && ($srcPos + $length | 0) <= jlr_Array_getLength($src) && ($destPos + $length | 0) <= jlr_Array_getLength($dest)) {
        jl_System_doArrayCopy($src, $srcPos, $dest, $destPos, $length);
        return;
    }
    $src = new jl_IndexOutOfBoundsException;
    jl_RuntimeException__init_($src);
    $rt_throw($src);
},
jl_System_doArrayCopy = (var$1, var$2, var$3, var$4, var$5) => {
    if (var$5 !== 0) {
        if (typeof var$1.data.buffer !== 'undefined') {
            var$3.data.set(var$1.data.subarray(var$2, var$2 + var$5), var$4);
        } else if (var$1 !== var$3 || var$4 < var$2) {
            for (let i = 0;i < var$5;i = i + 1 | 0) {
                var$3.data[var$4++] = var$1.data[var$2++];
            }
        } else {
            var$2 = var$2 + var$5 | 0;
            var$4 = var$4 + var$5 | 0;
            for (let i = 0;i < var$5;i = i + 1 | 0) {
                var$3.data[ --var$4] = var$1.data[ --var$2];
            }
        }
    }
},
jl_System_currentTimeMillis = () => {
    return Long_fromNumber((new Date()).getTime());
},
jur_NonCapFSet = $rt_classWithoutFields(jur_FSet),
jur_NonCapFSet_matches = ($this, var$1, var$2, var$3) => {
    let var$4;
    var$4 = $this.$groupIndex0;
    jur_MatchResultImpl_setConsumed(var$3, var$4, var$1 - jur_MatchResultImpl_getConsumed(var$3, var$4) | 0);
    return $this.$next1.$matches(var$1, var$2, var$3);
},
jur_NonCapFSet_hasConsumed = ($this, $mr) => {
    return 0;
},
jur_AheadFSet = $rt_classWithoutFields(jur_FSet),
jur_AheadFSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    return $stringIndex;
},
jur_BehindFSet = $rt_classWithoutFields(jur_FSet),
jur_BehindFSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    if (jur_MatchResultImpl_getConsumed($matchResult, $this.$groupIndex0) != $stringIndex)
        $stringIndex = (-1);
    return $stringIndex;
};
function jur_AtomicFSet() {
    jur_FSet.call(this);
    this.$index1 = 0;
}
let jur_AtomicFSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $gr;
    $gr = $this.$groupIndex0;
    jur_MatchResultImpl_setConsumed($matchResult, $gr, $stringIndex - jur_MatchResultImpl_getConsumed($matchResult, $gr) | 0);
    $this.$index1 = $stringIndex;
    return $stringIndex;
},
jur_AtomicFSet_hasConsumed = ($this, $mr) => {
    return 0;
},
jur_FinalSet = $rt_classWithoutFields(jur_FSet),
jur_FinalSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    if ($matchResult.$mode0 != 1 && $stringIndex != $matchResult.$rightBound)
        return (-1);
    $matchResult.$valid = 1;
    jur_MatchResultImpl_setEnd($matchResult, 0, $stringIndex);
    return $stringIndex;
};
function jur_LeafSet() {
    jur_AbstractSet.call(this);
    this.$charCount0 = 0;
}
let jur_LeafSet__init_ = $this => {
    jur_AbstractSet__init_($this);
    $this.$charCount0 = 1;
},
jur_LeafSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $shift;
    if (($stringIndex + $this.$charCount() | 0) > $matchResult.$rightBound) {
        $matchResult.$hitEnd = 1;
        return (-1);
    }
    $shift = $this.$accepts($stringIndex, $testString);
    if ($shift < 0)
        return (-1);
    return $this.$next1.$matches($stringIndex + $shift | 0, $testString, $matchResult);
},
jur_LeafSet_charCount = $this => {
    return $this.$charCount0;
},
jur_LeafSet_hasConsumed = ($this, $mr) => {
    return 1;
},
jur_EmptySet = $rt_classWithoutFields(jur_LeafSet),
jur_EmptySet__init_0 = ($this, $next) => {
    jur_AbstractSet__init_0($this, $next);
    $this.$charCount0 = 1;
    $this.$type0 = 1;
    $this.$charCount0 = 0;
},
jur_EmptySet__init_ = var_0 => {
    let var_1 = new jur_EmptySet();
    jur_EmptySet__init_0(var_1, var_0);
    return var_1;
},
jur_EmptySet_accepts = ($this, $stringIndex, $testString) => {
    return 0;
},
jur_EmptySet_find = ($this, $stringIndex, $testString, $matchResult) => {
    let $strLength, $startStr, $high, var$7;
    $strLength = $matchResult.$rightBound;
    $startStr = $matchResult.$leftBound;
    while (true) {
        $high = $rt_compare($stringIndex, $strLength);
        if ($high > 0)
            return (-1);
        if ($high < 0) {
            var$7 = $testString;
            if (jl_Character_isLowSurrogate(jl_String_charAt(var$7, $stringIndex)) && $stringIndex > $startStr && jl_Character_isHighSurrogate(jl_String_charAt(var$7, $stringIndex - 1 | 0))) {
                $stringIndex = $stringIndex + 1 | 0;
                continue;
            }
        }
        if ($this.$next1.$matches($stringIndex, $testString, $matchResult) >= 0)
            break;
        $stringIndex = $stringIndex + 1 | 0;
    }
    return $stringIndex;
},
jur_EmptySet_findBack = ($this, $stringIndex, $startSearch, $testString, $matchResult) => {
    let $strLength, $startStr, var$7;
    $strLength = $matchResult.$rightBound;
    $startStr = $matchResult.$leftBound;
    while (true) {
        if ($startSearch < $stringIndex)
            return (-1);
        if ($startSearch < $strLength) {
            var$7 = $testString;
            if (jl_Character_isLowSurrogate(jl_String_charAt(var$7, $startSearch)) && $startSearch > $startStr && jl_Character_isHighSurrogate(jl_String_charAt(var$7, $startSearch - 1 | 0))) {
                $startSearch = $startSearch + (-1) | 0;
                continue;
            }
        }
        if ($this.$next1.$matches($startSearch, $testString, $matchResult) >= 0)
            break;
        $startSearch = $startSearch + (-1) | 0;
    }
    return $startSearch;
},
jur_EmptySet_hasConsumed = ($this, $mr) => {
    return 0;
};
function jur_JointSet() {
    let a = this; jur_AbstractSet.call(a);
    a.$children = null;
    a.$fSet = null;
    a.$groupIndex = 0;
}
let jur_JointSet__init_ = ($this, $children, $fSet) => {
    jur_AbstractSet__init_($this);
    $this.$children = $children;
    $this.$fSet = $fSet;
    $this.$groupIndex = $fSet.$groupIndex0;
},
jur_JointSet__init_0 = (var_0, var_1) => {
    let var_2 = new jur_JointSet();
    jur_JointSet__init_(var_2, var_0, var_1);
    return var_2;
},
jur_JointSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $start, $size, $i, $shift;
    if ($this.$children === null)
        return (-1);
    $start = jur_MatchResultImpl_getStart($matchResult, $this.$groupIndex);
    jur_MatchResultImpl_setStart($matchResult, $this.$groupIndex, $stringIndex);
    $size = $this.$children.$size;
    $i = 0;
    while (true) {
        if ($i >= $size) {
            jur_MatchResultImpl_setStart($matchResult, $this.$groupIndex, $start);
            return (-1);
        }
        $shift = (ju_ArrayList_get($this.$children, $i)).$matches($stringIndex, $testString, $matchResult);
        if ($shift >= 0)
            break;
        $i = $i + 1 | 0;
    }
    return $shift;
},
jur_JointSet_setNext = ($this, $next) => {
    $this.$fSet.$next1 = $next;
},
jur_JointSet_first = ($this, $set) => {
    let $i, var$3;
    a: {
        $i = $this.$children;
        if ($i !== null) {
            var$3 = ju_AbstractList_iterator($i);
            while (true) {
                if (!ju_AbstractList$1_hasNext(var$3))
                    break a;
                if (!(ju_AbstractList$1_next(var$3)).$first($set))
                    continue;
                else
                    return 1;
            }
        }
    }
    return 0;
},
jur_JointSet_hasConsumed = ($this, $matchResult) => {
    return jur_MatchResultImpl_getEnd($matchResult, $this.$groupIndex) >= 0 && jur_MatchResultImpl_getStart($matchResult, $this.$groupIndex) == jur_MatchResultImpl_getEnd($matchResult, $this.$groupIndex) ? 0 : 1;
},
jur_JointSet_processSecondPass = $this => {
    let $child, $childrenSize, $i, $set, var$5, var$6, var$7, var$8, var$9;
    $this.$isSecondPassVisited = 1;
    $child = $this.$fSet;
    if ($child !== null && !$child.$isSecondPassVisited)
        jur_AbstractSet_processSecondPass($child);
    a: {
        $child = $this.$children;
        if ($child !== null) {
            $childrenSize = $child.$size;
            $i = 0;
            while (true) {
                if ($i >= $childrenSize)
                    break a;
                $child = ju_ArrayList_get($this.$children, $i);
                $set = $child.$processBackRefReplacement();
                if ($set === null)
                    $set = $child;
                else {
                    $child.$isSecondPassVisited = 1;
                    ju_ArrayList_remove($this.$children, $i);
                    var$5 = $this.$children;
                    if ($i < 0)
                        break;
                    var$6 = var$5.$size;
                    if ($i > var$6)
                        break;
                    ju_ArrayList_ensureCapacity(var$5, var$6 + 1 | 0);
                    var$7 = var$5.$size;
                    var$8 = var$7;
                    while (var$8 > $i) {
                        var$9 = var$5.$array.data;
                        var$9[var$8] = var$9[var$8 - 1 | 0];
                        var$8 = var$8 + (-1) | 0;
                    }
                    var$5.$array.data[$i] = $set;
                    var$5.$size = var$7 + 1 | 0;
                    var$5.$modCount = var$5.$modCount + 1 | 0;
                }
                if (!$set.$isSecondPassVisited)
                    $set.$processSecondPass();
                $i = $i + 1 | 0;
            }
            $child = new jl_IndexOutOfBoundsException;
            jl_RuntimeException__init_($child);
            $rt_throw($child);
        }
    }
    if ($this.$next1 !== null)
        jur_AbstractSet_processSecondPass($this);
},
jur_NonCapJointSet = $rt_classWithoutFields(jur_JointSet),
jur_NonCapJointSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $start, $size, $i, $shift;
    $start = jur_MatchResultImpl_getConsumed($matchResult, $this.$groupIndex);
    jur_MatchResultImpl_setConsumed($matchResult, $this.$groupIndex, $stringIndex);
    $size = $this.$children.$size;
    $i = 0;
    while (true) {
        if ($i >= $size) {
            jur_MatchResultImpl_setConsumed($matchResult, $this.$groupIndex, $start);
            return (-1);
        }
        $shift = (ju_ArrayList_get($this.$children, $i)).$matches($stringIndex, $testString, $matchResult);
        if ($shift >= 0)
            break;
        $i = $i + 1 | 0;
    }
    return $shift;
},
jur_NonCapJointSet_hasConsumed = ($this, $matchResult) => {
    return !jur_MatchResultImpl_getConsumed($matchResult, $this.$groupIndex) ? 0 : 1;
},
jur_AtomicJointSet = $rt_classWithoutFields(jur_NonCapJointSet),
jur_AtomicJointSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $start, $size, $i;
    $start = jur_MatchResultImpl_getConsumed($matchResult, $this.$groupIndex);
    jur_MatchResultImpl_setConsumed($matchResult, $this.$groupIndex, $stringIndex);
    $size = $this.$children.$size;
    $i = 0;
    while ($i < $size) {
        if ((ju_ArrayList_get($this.$children, $i)).$matches($stringIndex, $testString, $matchResult) >= 0)
            return $this.$next1.$matches($this.$fSet.$index1, $testString, $matchResult);
        $i = $i + 1 | 0;
    }
    jur_MatchResultImpl_setConsumed($matchResult, $this.$groupIndex, $start);
    return (-1);
},
jur_AtomicJointSet_setNext = ($this, $next) => {
    $this.$next1 = $next;
},
jur_PositiveLookAhead = $rt_classWithoutFields(jur_AtomicJointSet),
jur_PositiveLookAhead_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $size, $i;
    $size = $this.$children.$size;
    $i = 0;
    while ($i < $size) {
        if ((ju_ArrayList_get($this.$children, $i)).$matches($stringIndex, $testString, $matchResult) >= 0)
            return $this.$next1.$matches($stringIndex, $testString, $matchResult);
        $i = $i + 1 | 0;
    }
    return (-1);
},
jur_PositiveLookAhead_hasConsumed = ($this, $matchResult) => {
    return 0;
},
jur_NegativeLookAhead = $rt_classWithoutFields(jur_AtomicJointSet),
jur_NegativeLookAhead_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $size, $i;
    $size = $this.$children.$size;
    $i = 0;
    while (true) {
        if ($i >= $size)
            return $this.$next1.$matches($stringIndex, $testString, $matchResult);
        if ((ju_ArrayList_get($this.$children, $i)).$matches($stringIndex, $testString, $matchResult) >= 0)
            break;
        $i = $i + 1 | 0;
    }
    return (-1);
},
jur_NegativeLookAhead_hasConsumed = ($this, $matchResult) => {
    return 0;
},
jur_PositiveLookBehind = $rt_classWithoutFields(jur_AtomicJointSet),
jur_PositiveLookBehind_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $size, $leftBound, $shift, $i;
    $size = $this.$children.$size;
    $leftBound = $matchResult.$transparentBounds ? 0 : $matchResult.$leftBound;
    a: {
        $shift = $this.$next1.$matches($stringIndex, $testString, $matchResult);
        if ($shift >= 0) {
            jur_MatchResultImpl_setConsumed($matchResult, $this.$groupIndex, $stringIndex);
            $i = 0;
            while (true) {
                if ($i >= $size)
                    break a;
                if ((ju_ArrayList_get($this.$children, $i)).$findBack($leftBound, $stringIndex, $testString, $matchResult) >= 0) {
                    jur_MatchResultImpl_setConsumed($matchResult, $this.$groupIndex, (-1));
                    return $shift;
                }
                $i = $i + 1 | 0;
            }
        }
    }
    return (-1);
},
jur_PositiveLookBehind_hasConsumed = ($this, $matchResult) => {
    return 0;
},
jur_NegativeLookBehind = $rt_classWithoutFields(jur_AtomicJointSet),
jur_NegativeLookBehind_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $size, $i;
    $size = $this.$children.$size;
    jur_MatchResultImpl_setConsumed($matchResult, $this.$groupIndex, $stringIndex);
    $i = 0;
    while (true) {
        if ($i >= $size)
            return $this.$next1.$matches($stringIndex, $testString, $matchResult);
        if ((ju_ArrayList_get($this.$children, $i)).$findBack(0, $stringIndex, $testString, $matchResult) >= 0)
            break;
        $i = $i + 1 | 0;
    }
    return (-1);
},
jur_NegativeLookBehind_hasConsumed = ($this, $matchResult) => {
    return 0;
};
function jur_SingleSet() {
    jur_JointSet.call(this);
    this.$kid = null;
}
let jur_SingleSet__init_ = ($this, $child, $fSet) => {
    jur_AbstractSet__init_($this);
    $this.$kid = $child;
    $this.$fSet = $fSet;
    $this.$groupIndex = $fSet.$groupIndex0;
},
jur_SingleSet__init_0 = (var_0, var_1) => {
    let var_2 = new jur_SingleSet();
    jur_SingleSet__init_(var_2, var_0, var_1);
    return var_2;
},
jur_SingleSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $start, $shift;
    $start = jur_MatchResultImpl_getStart($matchResult, $this.$groupIndex);
    jur_MatchResultImpl_setStart($matchResult, $this.$groupIndex, $stringIndex);
    $shift = $this.$kid.$matches($stringIndex, $testString, $matchResult);
    if ($shift >= 0)
        return $shift;
    jur_MatchResultImpl_setStart($matchResult, $this.$groupIndex, $start);
    return (-1);
},
jur_SingleSet_find = ($this, $stringIndex, $testString, $matchResult) => {
    let $res;
    $res = $this.$kid.$find0($stringIndex, $testString, $matchResult);
    if ($res >= 0)
        jur_MatchResultImpl_setStart($matchResult, $this.$groupIndex, $res);
    return $res;
},
jur_SingleSet_findBack = ($this, $stringIndex, $lastIndex, $testString, $matchResult) => {
    let $res;
    $res = $this.$kid.$findBack($stringIndex, $lastIndex, $testString, $matchResult);
    if ($res >= 0)
        jur_MatchResultImpl_setStart($matchResult, $this.$groupIndex, $res);
    return $res;
},
jur_SingleSet_first = ($this, $set) => {
    return $this.$kid.$first($set);
},
jur_SingleSet_processBackRefReplacement = $this => {
    let $set;
    $set = new jur_BackReferencedSingleSet;
    jur_SingleSet__init_($set, $this.$kid, $this.$fSet);
    $this.$next1 = $set;
    return $set;
},
jur_SingleSet_processSecondPass = $this => {
    let $set;
    $this.$isSecondPassVisited = 1;
    $set = $this.$fSet;
    if ($set !== null && !$set.$isSecondPassVisited)
        jur_AbstractSet_processSecondPass($set);
    $set = $this.$kid;
    if ($set !== null && !$set.$isSecondPassVisited) {
        $set = $set.$processBackRefReplacement();
        if ($set !== null) {
            $this.$kid.$isSecondPassVisited = 1;
            $this.$kid = $set;
        }
        $this.$kid.$processSecondPass();
    }
},
ju_Map = $rt_classWithoutFields(0),
ju_AbstractMap = $rt_classWithoutFields(),
ju_AbstractMap_put = ($this, $key, $value) => {
    $key = new jl_UnsupportedOperationException;
    jl_RuntimeException__init_($key);
    $rt_throw($key);
};
function ju_HashMap() {
    let a = this; ju_AbstractMap.call(a);
    a.$elementCount = 0;
    a.$elementData = null;
    a.$modCount1 = 0;
    a.$loadFactor = 0.0;
    a.$threshold = 0;
}
let ju_HashMap_calculateCapacity = $x => {
    let var$2;
    if ($x >= 1073741824)
        return 1073741824;
    if (!$x)
        return 16;
    var$2 = $x - 1 | 0;
    $x = var$2 | var$2 >> 1;
    $x = $x | $x >> 2;
    $x = $x | $x >> 4;
    $x = $x | $x >> 8;
    return ($x | $x >> 16) + 1 | 0;
},
ju_HashMap__init_ = ($this, $capacity, $loadFactor) => {
    let var$3;
    if ($capacity >= 0 && $loadFactor > 0.0) {
        $capacity = ju_HashMap_calculateCapacity($capacity);
        $this.$elementCount = 0;
        $this.$elementData = $rt_createArray(ju_LinkedHashMap$LinkedHashMapEntry, $capacity);
        $this.$loadFactor = $loadFactor;
        ju_HashMap_computeThreshold($this);
        return;
    }
    var$3 = new jl_IllegalArgumentException;
    jl_RuntimeException__init_(var$3);
    $rt_throw(var$3);
},
ju_HashMap__init_0 = (var_0, var_1) => {
    let var_2 = new ju_HashMap();
    ju_HashMap__init_(var_2, var_0, var_1);
    return var_2;
},
ju_HashMap_computeThreshold = $this => {
    $this.$threshold = $this.$elementData.data.length * $this.$loadFactor | 0;
},
ju_SequencedMap = $rt_classWithoutFields(0);
function ju_LinkedHashMap() {
    let a = this; ju_HashMap.call(a);
    a.$accessOrder = 0;
    a.$head = null;
    a.$tail = null;
}
let ju_LinkedHashMap_put = ($this, $key, $value) => {
    let var$3, $oldSize, var$5, var$6, $existing, var$8, var$9, var$10, var$11, var$12, var$13, var$14;
    var$3 = $this;
    $oldSize = var$3.$elementCount;
    var$5 = $this.$accessOrder;
    if (!$this.$elementCount) {
        $this.$head = null;
        $this.$tail = null;
    }
    if ($key === null)
        var$6 = 0;
    else {
        a: {
            $existing = $key;
            if (!$existing.$hashCode) {
                var$8 = 0;
                while (true) {
                    if (var$8 >= $existing.$nativeString.length)
                        break a;
                    $existing.$hashCode = (31 * $existing.$hashCode | 0) + $existing.$nativeString.charCodeAt(var$8) | 0;
                    var$8 = var$8 + 1 | 0;
                }
            }
        }
        var$6 = $existing.$hashCode;
    }
    var$9 = var$6 & 2147483647;
    var$10 = $this.$elementData.data;
    var$8 = var$9 % var$10.length | 0;
    if ($key === null) {
        var$11 = var$10[0];
        while (var$11 !== null && var$11.$key !== null) {
            var$11 = var$11.$next2;
        }
    } else {
        var$11 = var$10[var$8];
        while (var$11 !== null) {
            if (var$11.$origKeyHash == var$6) {
                $existing = var$11.$key;
                if ($key !== $existing && !jl_String_equals($key, $existing) ? 0 : 1)
                    break;
            }
            var$11 = var$11.$next2;
        }
    }
    var$11 = var$11;
    if (var$11 === null) {
        $this.$modCount1 = $this.$modCount1 + 1 | 0;
        var$5 = $this.$elementCount + 1 | 0;
        $this.$elementCount = var$5;
        if (var$5 > $this.$threshold) {
            var$5 = var$3.$elementData.data.length;
            var$5 = ju_HashMap_calculateCapacity(!var$5 ? 1 : var$5 << 1);
            var$12 = $rt_createArray(ju_LinkedHashMap$LinkedHashMapEntry, var$5);
            var$13 = var$12.data;
            var$8 = 0;
            var$14 = var$5 - 1 | 0;
            while (true) {
                var$10 = var$3.$elementData.data;
                if (var$8 >= var$10.length)
                    break;
                var$11 = var$10[var$8];
                var$10[var$8] = null;
                while (var$11 !== null) {
                    var$5 = var$11.$origKeyHash & var$14;
                    $existing = var$11.$next2;
                    var$11.$next2 = var$13[var$5];
                    var$13[var$5] = var$11;
                    var$11 = $existing;
                }
                var$8 = var$8 + 1 | 0;
            }
            var$3.$elementData = var$12;
            ju_HashMap_computeThreshold(var$3);
            var$8 = var$9 % $this.$elementData.data.length | 0;
        }
        $existing = new ju_LinkedHashMap$LinkedHashMapEntry;
        var$11 = null;
        $existing.$key = $key;
        $existing.$value = var$11;
        $existing.$origKeyHash = var$6;
        $existing.$chainForward = null;
        $existing.$chainBackward = null;
        var$10 = $this.$elementData.data;
        $existing.$next2 = var$10[var$8];
        var$10[var$8] = $existing;
        $key = $this.$tail;
        if ($key === null)
            $this.$head = $existing;
        else
            $key.$chainForward = $existing;
        $existing.$chainBackward = $key;
        $this.$tail = $existing;
        var$11 = $existing;
    } else if (var$5) {
        $key = var$11.$chainForward;
        if ($key !== null) {
            $existing = var$11.$chainBackward;
            if ($existing === null)
                $this.$head = $key;
            else
                $existing.$chainForward = $key;
            $key.$chainBackward = $existing;
            $key = $this.$tail;
            if ($key !== null)
                $key.$chainForward = var$11;
            var$11.$chainBackward = $key;
            var$11.$chainForward = null;
            $this.$tail = var$11;
        }
    }
    $existing = var$11.$value;
    var$11.$value = $value;
    return $existing;
},
ju_Collections = $rt_classWithoutFields(),
ju_Collections_EMPTY_SET = null,
ju_Collections_EMPTY_MAP = null,
ju_Collections_EMPTY_LIST = null,
ju_Collections_EMPTY_ITERATOR = null,
ju_Collections_EMPTY_LIST_ITERATOR = null,
ju_Collections_reverseOrder = null,
ju_Collections_$callClinit = () => {
    ju_Collections_$callClinit = $rt_eraseClinit(ju_Collections);
    ju_Collections__clinit_();
},
ju_Collections__clinit_ = () => {
    ju_Collections_EMPTY_SET = new ju_Collections$1;
    ju_Collections_EMPTY_MAP = new ju_Collections$2;
    ju_Collections_EMPTY_LIST = new ju_Collections$3;
    ju_Collections_EMPTY_ITERATOR = new ju_Collections$4;
    ju_Collections_EMPTY_LIST_ITERATOR = new ju_Collections$5;
    ju_Collections_reverseOrder = new ju_Collections$_clinit_$lambda$_59_0;
},
ju_Arrays = $rt_classWithoutFields(),
ju_Arrays_copyOf = ($array, $length) => {
    let $result, var$4, $sz, $i;
    $array = $array.data;
    $result = $rt_createByteArray($length);
    var$4 = $result.data;
    $sz = jl_Math_min($length, $array.length);
    $i = 0;
    while ($i < $sz) {
        var$4[$i] = $array[$i];
        $i = $i + 1 | 0;
    }
    return $result;
},
ju_Arrays_copyOf0 = ($original, $newLength) => {
    let var$3, $result, $sz, $i;
    var$3 = $original.data;
    $result = jlr_Array_newInstance(jl_Class_getComponentType(jl_Object_getClass($original)), $newLength);
    $sz = jl_Math_min($newLength, var$3.length);
    $i = 0;
    while ($i < $sz) {
        $result.data[$i] = var$3[$i];
        $i = $i + 1 | 0;
    }
    return $result;
},
ju_Arrays_fill0 = ($a, $fromIndex, $toIndex, $val) => {
    let var$5, var$6, var$7;
    if ($fromIndex > $toIndex) {
        var$5 = new jl_IllegalArgumentException;
        jl_RuntimeException__init_(var$5);
        $rt_throw(var$5);
    }
    while ($fromIndex < $toIndex) {
        var$6 = $a.data;
        var$7 = $fromIndex + 1 | 0;
        var$6[$fromIndex] = $val;
        $fromIndex = var$7;
    }
},
ju_Arrays_fill = ($a, $val) => {
    ju_Arrays_fill0($a, 0, $a.data.length, $val);
},
jlr_Array = $rt_classWithoutFields(),
jlr_Array_getLength = $array => {
    let $cls;
    $cls = (jl_Object_getClass($array)).$classInfo;
    if ($cls[$rt_meta].itemType !== null)
        return $rt_arrayLength($array);
    $array = new jl_IllegalArgumentException;
    jl_RuntimeException__init_($array);
    $rt_throw($array);
},
jlr_Array_newInstance = ($componentType, $length) => {
    if ($componentType === null) {
        $componentType = new jl_NullPointerException;
        jl_RuntimeException__init_($componentType);
        $rt_throw($componentType);
    }
    if ($componentType === $rt_cls($rt_voidcls)) {
        $componentType = new jl_IllegalArgumentException;
        jl_RuntimeException__init_($componentType);
        $rt_throw($componentType);
    }
    if ($length < 0) {
        $componentType = new jl_NegativeArraySizeException;
        jl_RuntimeException__init_($componentType);
        $rt_throw($componentType);
    }
    return otrr_ClassInfo_newArrayInstance($componentType.$classInfo, $length);
},
jl_ArrayStoreException = $rt_classWithoutFields(jl_RuntimeException),
jur_SpecialToken = $rt_classWithoutFields();
function jur_AbstractCharClass() {
    let a = this; jur_SpecialToken.call(a);
    a.$alt = 0;
    a.$altSurrogates = 0;
    a.$lowHighSurrogates = null;
    a.$charClassWithoutSurrogates = null;
    a.$charClassWithSurrogates = null;
    a.$mayContainSupplCodepoints = 0;
}
let jur_AbstractCharClass_charClasses = null,
jur_AbstractCharClass_$callClinit = () => {
    jur_AbstractCharClass_$callClinit = $rt_eraseClinit(jur_AbstractCharClass);
    jur_AbstractCharClass__clinit_();
},
jur_AbstractCharClass__init_ = $this => {
    let var$1;
    jur_AbstractCharClass_$callClinit();
    var$1 = new ju_BitSet;
    var$1.$data = $rt_createIntArray(64);
    $this.$lowHighSurrogates = var$1;
},
jur_AbstractCharClass_getBits = $this => {
    return null;
},
jur_AbstractCharClass_getLowHighSurrogates = $this => {
    return $this.$lowHighSurrogates;
},
jur_AbstractCharClass_hasLowHighSurrogates = $this => {
    let var$1, var$2, var$3, var$4, var$5;
    if (!$this.$altSurrogates)
        var$1 = ju_BitSet_nextSetBit($this.$lowHighSurrogates, 0) >= 2048 ? 0 : 1;
    else {
        a: {
            var$2 = $this.$lowHighSurrogates;
            var$1 = 0;
            var$3 = var$2.$length1;
            if (var$1 < var$3) {
                var$4 = var$2.$data.data;
                var$5 = (var$4[0] ^ (-1)) >>> 0 | 0;
                if (var$5)
                    var$1 = jl_Integer_numberOfTrailingZeros(var$5) + var$1 | 0;
                else {
                    var$1 = (var$3 + 31 | 0) / 32 | 0;
                    var$5 = 1;
                    while (var$5 < var$1) {
                        if (var$4[var$5] != (-1)) {
                            var$1 = (var$5 * 32 | 0) + jl_Integer_numberOfTrailingZeros(var$4[var$5] ^ (-1)) | 0;
                            break a;
                        }
                        var$5 = var$5 + 1 | 0;
                    }
                    var$1 = var$3;
                }
            }
        }
        var$1 = var$1 >= 2048 ? 0 : 1;
    }
    return var$1;
},
jur_AbstractCharClass_mayContainSupplCodepoints = $this => {
    return $this.$mayContainSupplCodepoints;
},
jur_AbstractCharClass_getInstance = $this => {
    return $this;
},
jur_AbstractCharClass_getSurrogates = $this => {
    let $lHS, var$2;
    if ($this.$charClassWithSurrogates === null) {
        $lHS = $this.$getLowHighSurrogates();
        var$2 = new jur_AbstractCharClass$1;
        var$2.$this$025 = $this;
        var$2.$val$lHS = $lHS;
        jur_AbstractCharClass__init_(var$2);
        $this.$charClassWithSurrogates = var$2;
        jur_AbstractCharClass_setNegative(var$2, $this.$altSurrogates);
    }
    return $this.$charClassWithSurrogates;
},
jur_AbstractCharClass_getWithoutSurrogates = $this => {
    let $lHS, var$2;
    if ($this.$charClassWithoutSurrogates === null) {
        $lHS = $this.$getLowHighSurrogates();
        var$2 = new jur_AbstractCharClass$2;
        var$2.$this$016 = $this;
        var$2.$val$lHS0 = $lHS;
        var$2.$val$thisClass = $this;
        jur_AbstractCharClass__init_(var$2);
        $this.$charClassWithoutSurrogates = var$2;
        jur_AbstractCharClass_setNegative(var$2, $this.$alt);
        $this.$charClassWithoutSurrogates.$mayContainSupplCodepoints = $this.$mayContainSupplCodepoints;
    }
    return $this.$charClassWithoutSurrogates;
},
jur_AbstractCharClass_hasUCI = $this => {
    return 0;
},
jur_AbstractCharClass_setNegative = ($this, $value) => {
    let var$2;
    var$2 = $this.$alt;
    if (var$2 ^ $value) {
        $this.$alt = var$2 ? 0 : 1;
        $this.$altSurrogates = $this.$altSurrogates ? 0 : 1;
    }
    if (!$this.$mayContainSupplCodepoints)
        $this.$mayContainSupplCodepoints = 1;
    return $this;
},
jur_AbstractCharClass_isNegative = $this => {
    return $this.$alt;
},
jur_AbstractCharClass_intersects0 = ($cc, $ch) => {
    jur_AbstractCharClass_$callClinit();
    return $cc.$contains($ch);
},
jur_AbstractCharClass_intersects = ($cc1, $cc2) => {
    let var$3, var$4;
    jur_AbstractCharClass_$callClinit();
    if ($cc1.$getBits() !== null && $cc2.$getBits() !== null) {
        $cc1 = $cc1.$getBits();
        $cc2 = $cc2.$getBits();
        var$3 = jl_Math_min($cc1.$data.data.length, $cc2.$data.data.length);
        var$4 = 0;
        a: {
            while (var$4 < var$3) {
                if ($cc1.$data.data[var$4] & $cc2.$data.data[var$4]) {
                    var$3 = 1;
                    break a;
                }
                var$4 = var$4 + 1 | 0;
            }
            var$3 = 0;
        }
        return var$3;
    }
    return 1;
},
jur_AbstractCharClass_getPredefinedClass = ($name, $negative) => {
    let var$3, var$4, var$5;
    jur_AbstractCharClass_$callClinit();
    var$3 = 0;
    while (true) {
        jur_AbstractCharClass$PredefinedCharacterClasses_$callClinit();
        var$4 = jur_AbstractCharClass$PredefinedCharacterClasses_contents.data;
        if (var$3 >= var$4.length) {
            var$5 = new ju_MissingResourceException;
            jl_RuntimeException__init_0(var$5, $rt_s(3));
            var$5.$className = $rt_s(3);
            var$5.$key0 = $name;
            $rt_throw(var$5);
        }
        var$4 = var$4[var$3].data;
        if (jl_String_equals($name, var$4[0]))
            break;
        var$3 = var$3 + 1 | 0;
    }
    return jur_AbstractCharClass$LazyCharClass_getValue(var$4[1], $negative);
},
jur_AbstractCharClass__clinit_ = () => {
    let var$1;
    var$1 = new jur_AbstractCharClass$PredefinedCharacterClasses;
    jur_AbstractCharClass$PredefinedCharacterClasses_$callClinit();
    jur_AbstractCharClass_charClasses = var$1;
};
function ju_MissingResourceException() {
    let a = this; jl_RuntimeException.call(a);
    a.$className = null;
    a.$key0 = null;
}
function jur_CharClass() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$ci = 0;
    a.$uci = 0;
    a.$hasUCI0 = 0;
    a.$invertedSurrogates = 0;
    a.$inverted = 0;
    a.$hideBits = 0;
    a.$bits = null;
    a.$nonBitSet = null;
}
let jur_CharClass__init_2 = $this => {
    jur_AbstractCharClass__init_($this);
    $this.$bits = ju_BitSet__init_();
},
jur_CharClass__init_ = () => {
    let var_0 = new jur_CharClass();
    jur_CharClass__init_2(var_0);
    return var_0;
},
jur_CharClass__init_1 = ($this, $ci, $uci) => {
    jur_AbstractCharClass__init_($this);
    $this.$bits = ju_BitSet__init_();
    $this.$ci = $ci;
    $this.$uci = $uci;
},
jur_CharClass__init_0 = (var_0, var_1) => {
    let var_2 = new jur_CharClass();
    jur_CharClass__init_1(var_2, var_0, var_1);
    return var_2;
},
jur_CharClass_add0 = ($this, $ch) => {
    a: {
        if ($this.$ci) {
            b: {
                if (!($ch >= 97 && $ch <= 122)) {
                    if ($ch < 65)
                        break b;
                    if ($ch > 90)
                        break b;
                }
                if ($this.$inverted) {
                    ju_BitSet_clear($this.$bits, jur_Pattern_getSupplement($ch & 65535));
                    break a;
                }
                ju_BitSet_set0($this.$bits, jur_Pattern_getSupplement($ch & 65535));
                break a;
            }
            if ($this.$uci && $ch > 128) {
                $this.$hasUCI0 = 1;
                $ch = jl_Character_toLowerCase0(jl_Character_toUpperCase0($ch));
            }
        }
    }
    if (!(!jur_Lexer_isHighSurrogate($ch) && !jur_Lexer_isLowSurrogate($ch))) {
        if ($this.$invertedSurrogates)
            ju_BitSet_clear($this.$lowHighSurrogates, $ch - 55296 | 0);
        else
            ju_BitSet_set0($this.$lowHighSurrogates, $ch - 55296 | 0);
    }
    if ($this.$inverted)
        ju_BitSet_clear($this.$bits, $ch);
    else
        ju_BitSet_set0($this.$bits, $ch);
    if (!$this.$mayContainSupplCodepoints && jl_Character_isSupplementaryCodePoint($ch))
        $this.$mayContainSupplCodepoints = 1;
    return $this;
},
jur_CharClass_add1 = ($this, $cc) => {
    let $curAlt, $nb, var$4;
    if (!$this.$mayContainSupplCodepoints && $cc.$mayContainSupplCodepoints)
        $this.$mayContainSupplCodepoints = 1;
    if ($this.$invertedSurrogates) {
        if (!$cc.$altSurrogates)
            ju_BitSet_andNot($this.$lowHighSurrogates, $cc.$getLowHighSurrogates());
        else
            ju_BitSet_and($this.$lowHighSurrogates, $cc.$getLowHighSurrogates());
    } else if (!$cc.$altSurrogates)
        ju_BitSet_or($this.$lowHighSurrogates, $cc.$getLowHighSurrogates());
    else {
        ju_BitSet_xor($this.$lowHighSurrogates, $cc.$getLowHighSurrogates());
        ju_BitSet_and($this.$lowHighSurrogates, $cc.$getLowHighSurrogates());
        $this.$altSurrogates = $this.$altSurrogates ? 0 : 1;
        $this.$invertedSurrogates = 1;
    }
    if (!$this.$hideBits && $cc.$getBits() !== null) {
        if ($this.$inverted) {
            if (!$cc.$alt)
                ju_BitSet_andNot($this.$bits, $cc.$getBits());
            else
                ju_BitSet_and($this.$bits, $cc.$getBits());
        } else if (!$cc.$alt)
            ju_BitSet_or($this.$bits, $cc.$getBits());
        else {
            ju_BitSet_xor($this.$bits, $cc.$getBits());
            ju_BitSet_and($this.$bits, $cc.$getBits());
            $this.$alt = $this.$alt ? 0 : 1;
            $this.$inverted = 1;
        }
    } else {
        $curAlt = $this.$alt;
        $nb = $this.$nonBitSet;
        if ($nb !== null) {
            if (!$curAlt) {
                var$4 = new jur_CharClass$5;
                var$4.$this$017 = $this;
                var$4.$val$curAlt7 = $curAlt;
                var$4.$val$nb3 = $nb;
                var$4.$val$cc0 = $cc;
                jur_AbstractCharClass__init_(var$4);
                $this.$nonBitSet = var$4;
            } else {
                var$4 = new jur_CharClass$4;
                var$4.$this$031 = $this;
                var$4.$val$curAlt9 = $curAlt;
                var$4.$val$nb4 = $nb;
                var$4.$val$cc2 = $cc;
                jur_AbstractCharClass__init_(var$4);
                $this.$nonBitSet = var$4;
            }
        } else {
            if ($curAlt && !$this.$inverted && ju_BitSet_isEmpty($this.$bits)) {
                $nb = new jur_CharClass$1;
                $nb.$this$07 = $this;
                $nb.$val$cc3 = $cc;
                jur_AbstractCharClass__init_($nb);
                $this.$nonBitSet = $nb;
            } else if (!$curAlt) {
                $nb = new jur_CharClass$3;
                $nb.$this$00 = $this;
                $nb.$val$curAlt = $curAlt;
                $nb.$val$cc = $cc;
                jur_AbstractCharClass__init_($nb);
                $this.$nonBitSet = $nb;
            } else {
                $nb = new jur_CharClass$2;
                $nb.$this$0 = $this;
                $nb.$val$curAlt0 = $curAlt;
                $nb.$val$cc1 = $cc;
                jur_AbstractCharClass__init_($nb);
                $this.$nonBitSet = $nb;
            }
            $this.$hideBits = 1;
        }
    }
    return $this;
},
jur_CharClass_add = ($this, $i, $end) => {
    let var$3, var$4, var$5, var$6, var$7;
    if ($i > $end) {
        var$3 = new jl_IllegalArgumentException;
        jl_RuntimeException__init_(var$3);
        $rt_throw(var$3);
    }
    a: {
        b: {
            if (!$this.$ci) {
                if ($end < 55296)
                    break b;
                if ($i > 57343)
                    break b;
            }
            $end = $end + 1 | 0;
            while (true) {
                if ($i >= $end)
                    break a;
                jur_CharClass_add0($this, $i);
                $i = $i + 1 | 0;
            }
        }
        if (!$this.$inverted)
            ju_BitSet_set($this.$bits, $i, $end + 1 | 0);
        else {
            var$3 = $this.$bits;
            $end = $end + 1 | 0;
            if ($i >= 0 && $i <= $end) {
                var$4 = var$3.$length1;
                if ($i < var$4) {
                    var$5 = jl_Math_min(var$4, $end);
                    if ($i != var$5) {
                        var$6 = $i / 32 | 0;
                        $end = var$5 / 32 | 0;
                        if (var$6 == $end) {
                            var$7 = var$3.$data.data;
                            var$7[var$6] = var$7[var$6] & (ju_BitSet_trailingOneBits(var$3, $i) | ju_BitSet_trailingZeroBits(var$3, var$5));
                        } else {
                            var$7 = var$3.$data.data;
                            var$7[var$6] = var$7[var$6] & ju_BitSet_trailingOneBits(var$3, $i);
                            var$4 = var$6 + 1 | 0;
                            while (var$4 < $end) {
                                var$3.$data.data[var$4] = 0;
                                var$4 = var$4 + 1 | 0;
                            }
                            if (var$5 & 31) {
                                var$7 = var$3.$data.data;
                                var$7[$end] = var$7[$end] & ju_BitSet_trailingZeroBits(var$3, var$5);
                            }
                        }
                        ju_BitSet_recalculateLength(var$3);
                    }
                }
            } else {
                var$3 = new jl_IndexOutOfBoundsException;
                jl_RuntimeException__init_(var$3);
                $rt_throw(var$3);
            }
        }
    }
    return $this;
},
jur_CharClass_union = ($this, $clazz) => {
    let var$2, $curAlt, $nb;
    if (!$this.$mayContainSupplCodepoints && $clazz.$mayContainSupplCodepoints)
        $this.$mayContainSupplCodepoints = 1;
    var$2 = $clazz;
    if (var$2.$hasUCI0)
        $this.$hasUCI0 = 1;
    $curAlt = $this.$altSurrogates;
    if (!($curAlt ^ $clazz.$altSurrogates)) {
        if (!$curAlt)
            ju_BitSet_or($this.$lowHighSurrogates, var$2.$lowHighSurrogates);
        else
            ju_BitSet_and($this.$lowHighSurrogates, var$2.$lowHighSurrogates);
    } else if ($curAlt)
        ju_BitSet_andNot($this.$lowHighSurrogates, var$2.$lowHighSurrogates);
    else {
        ju_BitSet_xor($this.$lowHighSurrogates, var$2.$lowHighSurrogates);
        ju_BitSet_and($this.$lowHighSurrogates, var$2.$lowHighSurrogates);
        $this.$altSurrogates = 1;
    }
    if (!$this.$hideBits && jur_CharClass_getBits(var$2) !== null) {
        $curAlt = $this.$alt;
        if (!($curAlt ^ $clazz.$alt)) {
            if (!$curAlt)
                ju_BitSet_or($this.$bits, jur_CharClass_getBits(var$2));
            else
                ju_BitSet_and($this.$bits, jur_CharClass_getBits(var$2));
        } else if ($curAlt)
            ju_BitSet_andNot($this.$bits, jur_CharClass_getBits(var$2));
        else {
            ju_BitSet_xor($this.$bits, jur_CharClass_getBits(var$2));
            ju_BitSet_and($this.$bits, jur_CharClass_getBits(var$2));
            $this.$alt = 1;
        }
    } else {
        $curAlt = $this.$alt;
        $nb = $this.$nonBitSet;
        if ($nb !== null) {
            if (!$curAlt) {
                var$2 = new jur_CharClass$11;
                var$2.$this$011 = $this;
                var$2.$val$curAlt4 = $curAlt;
                var$2.$val$nb2 = $nb;
                var$2.$val$clazz8 = $clazz;
                jur_AbstractCharClass__init_(var$2);
                $this.$nonBitSet = var$2;
            } else {
                var$2 = new jur_CharClass$10;
                var$2.$this$018 = $this;
                var$2.$val$curAlt6 = $curAlt;
                var$2.$val$nb0 = $nb;
                var$2.$val$clazz0 = $clazz;
                jur_AbstractCharClass__init_(var$2);
                $this.$nonBitSet = var$2;
            }
        } else {
            if (!$this.$inverted && ju_BitSet_isEmpty($this.$bits)) {
                if (!$curAlt) {
                    $nb = new jur_CharClass$7;
                    $nb.$this$032 = $this;
                    $nb.$val$clazz7 = $clazz;
                    jur_AbstractCharClass__init_($nb);
                    $this.$nonBitSet = $nb;
                } else {
                    $nb = new jur_CharClass$6;
                    $nb.$this$019 = $this;
                    $nb.$val$clazz6 = $clazz;
                    jur_AbstractCharClass__init_($nb);
                    $this.$nonBitSet = $nb;
                }
            } else if (!$curAlt) {
                $nb = new jur_CharClass$9;
                $nb.$this$04 = $this;
                $nb.$val$clazz = $clazz;
                $nb.$val$curAlt8 = $curAlt;
                jur_AbstractCharClass__init_($nb);
                $this.$nonBitSet = $nb;
            } else {
                $nb = new jur_CharClass$8;
                $nb.$this$01 = $this;
                $nb.$val$clazz1 = $clazz;
                $nb.$val$curAlt2 = $curAlt;
                jur_AbstractCharClass__init_($nb);
                $this.$nonBitSet = $nb;
            }
            $this.$hideBits = 1;
        }
    }
},
jur_CharClass_intersection = ($this, $clazz) => {
    let var$2, $curAlt, $nb;
    if (!$this.$mayContainSupplCodepoints && $clazz.$mayContainSupplCodepoints)
        $this.$mayContainSupplCodepoints = 1;
    var$2 = $clazz;
    if (var$2.$hasUCI0)
        $this.$hasUCI0 = 1;
    $curAlt = $this.$altSurrogates;
    if (!($curAlt ^ $clazz.$altSurrogates)) {
        if (!$curAlt)
            ju_BitSet_and($this.$lowHighSurrogates, var$2.$lowHighSurrogates);
        else
            ju_BitSet_or($this.$lowHighSurrogates, var$2.$lowHighSurrogates);
    } else if (!$curAlt)
        ju_BitSet_andNot($this.$lowHighSurrogates, var$2.$lowHighSurrogates);
    else {
        ju_BitSet_xor($this.$lowHighSurrogates, var$2.$lowHighSurrogates);
        ju_BitSet_and($this.$lowHighSurrogates, var$2.$lowHighSurrogates);
        $this.$altSurrogates = 0;
    }
    if (!$this.$hideBits && jur_CharClass_getBits(var$2) !== null) {
        $curAlt = $this.$alt;
        if (!($curAlt ^ $clazz.$alt)) {
            if (!$curAlt)
                ju_BitSet_and($this.$bits, jur_CharClass_getBits(var$2));
            else
                ju_BitSet_or($this.$bits, jur_CharClass_getBits(var$2));
        } else if (!$curAlt)
            ju_BitSet_andNot($this.$bits, jur_CharClass_getBits(var$2));
        else {
            ju_BitSet_xor($this.$bits, jur_CharClass_getBits(var$2));
            ju_BitSet_and($this.$bits, jur_CharClass_getBits(var$2));
            $this.$alt = 0;
        }
    } else {
        $curAlt = $this.$alt;
        $nb = $this.$nonBitSet;
        if ($nb !== null) {
            if (!$curAlt) {
                var$2 = new jur_CharClass$17;
                var$2.$this$015 = $this;
                var$2.$val$curAlt5 = $curAlt;
                var$2.$val$nb1 = $nb;
                var$2.$val$clazz10 = $clazz;
                jur_AbstractCharClass__init_(var$2);
                $this.$nonBitSet = var$2;
            } else {
                var$2 = new jur_CharClass$16;
                var$2.$this$022 = $this;
                var$2.$val$curAlt3 = $curAlt;
                var$2.$val$nb = $nb;
                var$2.$val$clazz3 = $clazz;
                jur_AbstractCharClass__init_(var$2);
                $this.$nonBitSet = var$2;
            }
        } else {
            if (!$this.$inverted && ju_BitSet_isEmpty($this.$bits)) {
                if (!$curAlt) {
                    $nb = new jur_CharClass$13;
                    $nb.$this$020 = $this;
                    $nb.$val$clazz4 = $clazz;
                    jur_AbstractCharClass__init_($nb);
                    $this.$nonBitSet = $nb;
                } else {
                    $nb = new jur_CharClass$12;
                    $nb.$this$030 = $this;
                    $nb.$val$clazz5 = $clazz;
                    jur_AbstractCharClass__init_($nb);
                    $this.$nonBitSet = $nb;
                }
            } else if (!$curAlt) {
                $nb = new jur_CharClass$15;
                $nb.$this$05 = $this;
                $nb.$val$clazz9 = $clazz;
                $nb.$val$curAlt1 = $curAlt;
                jur_AbstractCharClass__init_($nb);
                $this.$nonBitSet = $nb;
            } else {
                $nb = new jur_CharClass$14;
                $nb.$this$02 = $this;
                $nb.$val$clazz2 = $clazz;
                $nb.$val$curAlt10 = $curAlt;
                jur_AbstractCharClass__init_($nb);
                $this.$nonBitSet = $nb;
            }
            $this.$hideBits = 1;
        }
    }
},
jur_CharClass_contains = ($this, $ch) => {
    let var$2;
    var$2 = $this.$nonBitSet;
    if (var$2 !== null)
        return $this.$alt ^ var$2.$contains($ch);
    return $this.$alt ^ ju_BitSet_get($this.$bits, $ch);
},
jur_CharClass_getBits = $this => {
    if (!$this.$hideBits)
        return $this.$bits;
    return null;
},
jur_CharClass_getLowHighSurrogates = $this => {
    return $this.$lowHighSurrogates;
},
jur_CharClass_getInstance = $this => {
    let $bs, $res;
    if ($this.$nonBitSet !== null)
        return $this;
    $bs = jur_CharClass_getBits($this);
    $res = new jur_CharClass$18;
    $res.$this$010 = $this;
    $res.$val$bs = $bs;
    jur_AbstractCharClass__init_($res);
    return jur_AbstractCharClass_setNegative($res, $this.$alt);
},
jur_CharClass_toString = $this => {
    let $temp, $i, var$3;
    $temp = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_($temp);
    $i = ju_BitSet_nextSetBit($this.$bits, 0);
    while ($i >= 0) {
        jl_AbstractStringBuilder_append0($temp, jl_Character_toChars($i));
        jl_AbstractStringBuilder_append($temp, 124);
        $i = ju_BitSet_nextSetBit($this.$bits, $i + 1 | 0);
    }
    var$3 = $temp.$length0;
    if (var$3 > 0)
        jl_StringBuilder_deleteCharAt($temp, var$3 - 1 | 0);
    return jl_AbstractStringBuilder_toString($temp);
},
jur_CharClass_hasUCI = $this => {
    return $this.$hasUCI0;
};
function jur_QuantifierSet() {
    jur_AbstractSet.call(this);
    this.$innerSet = null;
}
let jur_QuantifierSet__init_ = ($this, $innerSet, $next, $type) => {
    jur_AbstractSet__init_0($this, $next);
    $this.$innerSet = $innerSet;
    $this.$type0 = $type;
},
jur_QuantifierSet_getInnerSet = $this => {
    return $this.$innerSet;
},
jur_QuantifierSet_first = ($this, $set) => {
    return !$this.$innerSet.$first($set) && !$this.$next1.$first($set) ? 0 : 1;
},
jur_QuantifierSet_hasConsumed = ($this, $mr) => {
    return 1;
},
jur_QuantifierSet_processSecondPass = $this => {
    let $set;
    $this.$isSecondPassVisited = 1;
    $set = $this.$next1;
    if ($set !== null && !$set.$isSecondPassVisited) {
        $set = $set.$processBackRefReplacement();
        if ($set !== null) {
            $this.$next1.$isSecondPassVisited = 1;
            $this.$next1 = $set;
        }
        $this.$next1.$processSecondPass();
    }
    $set = $this.$innerSet;
    if ($set !== null) {
        if (!$set.$isSecondPassVisited) {
            $set = $set.$processBackRefReplacement();
            if ($set !== null) {
                $this.$innerSet.$isSecondPassVisited = 1;
                $this.$innerSet = $set;
            }
            $this.$innerSet.$processSecondPass();
        } else if ($set instanceof jur_SingleSet && $set.$fSet.$isBackReferenced)
            $this.$innerSet = $set.$next1;
    }
};
function jur_LeafQuantifierSet() {
    jur_QuantifierSet.call(this);
    this.$leaf = null;
}
let jur_LeafQuantifierSet__init_ = ($this, $innerSet, $next, $type) => {
    jur_QuantifierSet__init_($this, $innerSet, $next, $type);
    $this.$leaf = $innerSet;
},
jur_LeafQuantifierSet__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new jur_LeafQuantifierSet();
    jur_LeafQuantifierSet__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_LeafQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $i, var$5;
    $i = 0;
    a: {
        while (($stringIndex + $this.$leaf.$charCount() | 0) <= $matchResult.$rightBound) {
            var$5 = $this.$leaf.$accepts($stringIndex, $testString);
            if (var$5 <= 0)
                break a;
            $stringIndex = $stringIndex + var$5 | 0;
            $i = $i + 1 | 0;
        }
    }
    while (true) {
        if ($i < 0)
            return (-1);
        var$5 = $this.$next1.$matches($stringIndex, $testString, $matchResult);
        if (var$5 >= 0)
            break;
        $stringIndex = $stringIndex - $this.$leaf.$charCount() | 0;
        $i = $i + (-1) | 0;
    }
    return var$5;
};
function jur_CompositeQuantifierSet() {
    jur_LeafQuantifierSet.call(this);
    this.$quantifier0 = null;
}
let jur_CompositeQuantifierSet__init_ = ($this, $quant, $innerSet, $next, $type) => {
    jur_LeafQuantifierSet__init_($this, $innerSet, $next, $type);
    $this.$quantifier0 = $quant;
},
jur_CompositeQuantifierSet__init_0 = (var_0, var_1, var_2, var_3) => {
    let var_4 = new jur_CompositeQuantifierSet();
    jur_CompositeQuantifierSet__init_(var_4, var_0, var_1, var_2, var_3);
    return var_4;
},
jur_CompositeQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let var$4, $min, $max, $i, $shift;
    var$4 = $this.$quantifier0;
    $min = var$4.$min1;
    $max = var$4.$max1;
    $i = 0;
    while (true) {
        if ($i >= $min) {
            a: {
                while ($i < $max) {
                    if (($stringIndex + $this.$leaf.$charCount() | 0) > $matchResult.$rightBound)
                        break a;
                    $shift = $this.$leaf.$accepts($stringIndex, $testString);
                    if ($shift < 1)
                        break a;
                    $stringIndex = $stringIndex + $shift | 0;
                    $i = $i + 1 | 0;
                }
            }
            while (true) {
                if ($i < $min)
                    return (-1);
                $shift = $this.$next1.$matches($stringIndex, $testString, $matchResult);
                if ($shift >= 0)
                    break;
                $stringIndex = $stringIndex - $this.$leaf.$charCount() | 0;
                $i = $i + (-1) | 0;
            }
            return $shift;
        }
        if (($stringIndex + $this.$leaf.$charCount() | 0) > $matchResult.$rightBound) {
            $matchResult.$hitEnd = 1;
            return (-1);
        }
        $shift = $this.$leaf.$accepts($stringIndex, $testString);
        if ($shift < 1)
            break;
        $stringIndex = $stringIndex + $shift | 0;
        $i = $i + 1 | 0;
    }
    return (-1);
},
jur_GroupQuantifierSet = $rt_classWithoutFields(jur_QuantifierSet),
jur_GroupQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $nextIndex;
    if (!$this.$innerSet.$hasConsumed($matchResult))
        return $this.$next1.$matches($stringIndex, $testString, $matchResult);
    $nextIndex = $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
    if ($nextIndex >= 0)
        return $nextIndex;
    return $this.$next1.$matches($stringIndex, $testString, $matchResult);
},
jur_AltQuantifierSet = $rt_classWithoutFields(jur_LeafQuantifierSet),
jur_AltQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $shift;
    $shift = $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
    if ($shift < 0)
        $shift = $this.$next1.$matches($stringIndex, $testString, $matchResult);
    return $shift;
},
jur_AltQuantifierSet_setNext = ($this, $next) => {
    $this.$next1 = $next;
    $this.$innerSet.$setNext($next);
},
jur_UnifiedQuantifierSet = $rt_classWithoutFields(jur_LeafQuantifierSet),
jur_UnifiedQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    while (($stringIndex + $this.$leaf.$charCount() | 0) <= $matchResult.$rightBound && $this.$leaf.$accepts($stringIndex, $testString) > 0) {
        $stringIndex = $stringIndex + $this.$leaf.$charCount() | 0;
    }
    return $this.$next1.$matches($stringIndex, $testString, $matchResult);
},
jur_UnifiedQuantifierSet_find = ($this, $stringIndex, $testString, $matchResult) => {
    let $startSearch, $newSearch, $newSearch_0;
    $startSearch = $this.$next1.$find0($stringIndex, $testString, $matchResult);
    if ($startSearch < 0)
        return (-1);
    $newSearch = $startSearch - $this.$leaf.$charCount() | 0;
    while ($newSearch >= $stringIndex && $this.$leaf.$accepts($newSearch, $testString) > 0) {
        $newSearch_0 = $newSearch - $this.$leaf.$charCount() | 0;
        $startSearch = $newSearch;
        $newSearch = $newSearch_0;
    }
    return $startSearch;
};
function ju_Collections$13() {
    ju_AbstractMap.call(this);
    this.$val$m = null;
}
let jur_AbstractCharClass$PredefinedCharacterClasses = $rt_classWithoutFields(),
jur_AbstractCharClass$PredefinedCharacterClasses_space = null,
jur_AbstractCharClass$PredefinedCharacterClasses_digit = null,
jur_AbstractCharClass$PredefinedCharacterClasses_contents = null,
jur_AbstractCharClass$PredefinedCharacterClasses_$callClinit = () => {
    jur_AbstractCharClass$PredefinedCharacterClasses_$callClinit = $rt_eraseClinit(jur_AbstractCharClass$PredefinedCharacterClasses);
    jur_AbstractCharClass$PredefinedCharacterClasses__clinit_();
},
jur_AbstractCharClass$PredefinedCharacterClasses__clinit_ = () => {
    let var$1, var$2, var$3, var$4;
    jur_AbstractCharClass$PredefinedCharacterClasses_space = jur_AbstractCharClass$LazySpace__init_();
    jur_AbstractCharClass$PredefinedCharacterClasses_digit = jur_AbstractCharClass$LazyDigit__init_0();
    var$1 = $rt_createArray($rt_arraycls(jl_Object), 194);
    var$2 = var$1.data;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(265);
    var$4[1] = jur_AbstractCharClass$LazyLower__init_0();
    var$2[0] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(266);
    var$4[1] = jur_AbstractCharClass$LazyUpper__init_();
    var$2[1] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(267);
    var$4[1] = jur_AbstractCharClass$LazyASCII__init_0();
    var$2[2] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(268);
    var$4[1] = jur_AbstractCharClass$LazyAlpha__init_0();
    var$2[3] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(269);
    var$4[1] = jur_AbstractCharClass$PredefinedCharacterClasses_digit;
    var$2[4] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(270);
    var$4[1] = jur_AbstractCharClass$LazyAlnum__init_();
    var$2[5] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(271);
    var$4[1] = jur_AbstractCharClass$LazyPunct__init_0();
    var$2[6] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(272);
    var$4[1] = jur_AbstractCharClass$LazyGraph__init_();
    var$2[7] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(273);
    var$4[1] = jur_AbstractCharClass$LazyPrint__init_();
    var$2[8] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(274);
    var$4[1] = jur_AbstractCharClass$LazyBlank__init_();
    var$2[9] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(275);
    var$4[1] = jur_AbstractCharClass$LazyCntrl__init_();
    var$2[10] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(276);
    var$4[1] = jur_AbstractCharClass$LazyXDigit__init_();
    var$2[11] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(277);
    var$4[1] = jur_AbstractCharClass$LazyJavaLowerCase__init_0();
    var$2[12] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(278);
    var$4[1] = jur_AbstractCharClass$LazyJavaUpperCase__init_();
    var$2[13] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(279);
    var$4[1] = jur_AbstractCharClass$LazyJavaWhitespace__init_0();
    var$2[14] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(280);
    var$4[1] = jur_AbstractCharClass$LazyJavaMirrored__init_0();
    var$2[15] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(281);
    var$4[1] = jur_AbstractCharClass$LazyJavaDefined__init_();
    var$2[16] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(282);
    var$4[1] = jur_AbstractCharClass$LazyJavaDigit__init_0();
    var$2[17] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(283);
    var$4[1] = jur_AbstractCharClass$LazyJavaIdentifierIgnorable__init_0();
    var$2[18] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(284);
    var$4[1] = jur_AbstractCharClass$LazyJavaISOControl__init_0();
    var$2[19] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(285);
    var$4[1] = jur_AbstractCharClass$LazyJavaJavaIdentifierPart__init_0();
    var$2[20] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(286);
    var$4[1] = jur_AbstractCharClass$LazyJavaJavaIdentifierStart__init_0();
    var$2[21] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(287);
    var$4[1] = jur_AbstractCharClass$LazyJavaLetter__init_();
    var$2[22] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(288);
    var$4[1] = jur_AbstractCharClass$LazyJavaLetterOrDigit__init_();
    var$2[23] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(289);
    var$4[1] = jur_AbstractCharClass$LazyJavaSpaceChar__init_0();
    var$2[24] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(290);
    var$4[1] = jur_AbstractCharClass$LazyJavaTitleCase__init_0();
    var$2[25] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(291);
    var$4[1] = jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart__init_();
    var$2[26] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(292);
    var$4[1] = jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart__init_();
    var$2[27] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(293);
    var$4[1] = jur_AbstractCharClass$PredefinedCharacterClasses_space;
    var$2[28] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(294);
    var$4[1] = jur_AbstractCharClass$LazyWord__init_();
    var$2[29] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(295);
    var$4[1] = jur_AbstractCharClass$LazyNonWord__init_();
    var$2[30] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(296);
    var$4[1] = jur_AbstractCharClass$PredefinedCharacterClasses_space;
    var$2[31] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(297);
    var$4[1] = jur_AbstractCharClass$LazyNonSpace__init_();
    var$2[32] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(298);
    var$4[1] = jur_AbstractCharClass$PredefinedCharacterClasses_digit;
    var$2[33] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(299);
    var$4[1] = jur_AbstractCharClass$LazyNonDigit__init_();
    var$2[34] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(300);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(0, 127);
    var$2[35] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(301);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(128, 255);
    var$2[36] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(302);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(256, 383);
    var$2[37] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(303);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(384, 591);
    var$2[38] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(304);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(592, 687);
    var$2[39] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(305);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(688, 767);
    var$2[40] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(306);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(768, 879);
    var$2[41] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(307);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(880, 1023);
    var$2[42] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(308);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(1024, 1279);
    var$2[43] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(309);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(1280, 1327);
    var$2[44] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(310);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(1328, 1423);
    var$2[45] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(311);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(1424, 1535);
    var$2[46] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(312);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(1536, 1791);
    var$2[47] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(313);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(1792, 1871);
    var$2[48] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(314);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(1872, 1919);
    var$2[49] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(315);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(1920, 1983);
    var$2[50] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(316);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(2304, 2431);
    var$2[51] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(317);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(2432, 2559);
    var$2[52] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(318);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(2560, 2687);
    var$2[53] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(319);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(2688, 2815);
    var$2[54] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(320);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(2816, 2943);
    var$2[55] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(321);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(2944, 3071);
    var$2[56] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(322);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(3072, 3199);
    var$2[57] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(323);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(3200, 3327);
    var$2[58] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(324);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(3328, 3455);
    var$2[59] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(325);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(3456, 3583);
    var$2[60] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(326);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(3584, 3711);
    var$2[61] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(327);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(3712, 3839);
    var$2[62] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(328);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(3840, 4095);
    var$2[63] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(329);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(4096, 4255);
    var$2[64] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(330);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(4256, 4351);
    var$2[65] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(331);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(4352, 4607);
    var$2[66] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(332);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(4608, 4991);
    var$2[67] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(333);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(4992, 5023);
    var$2[68] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(334);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(5024, 5119);
    var$2[69] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(335);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(5120, 5759);
    var$2[70] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(336);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(5760, 5791);
    var$2[71] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(337);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(5792, 5887);
    var$2[72] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(338);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(5888, 5919);
    var$2[73] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(339);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(5920, 5951);
    var$2[74] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(340);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(5952, 5983);
    var$2[75] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(341);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(5984, 6015);
    var$2[76] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(342);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(6016, 6143);
    var$2[77] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(343);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(6144, 6319);
    var$2[78] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(344);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(6400, 6479);
    var$2[79] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(345);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(6480, 6527);
    var$2[80] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(346);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(6528, 6623);
    var$2[81] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(347);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(6624, 6655);
    var$2[82] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(348);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(6656, 6687);
    var$2[83] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(349);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(7424, 7551);
    var$2[84] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(350);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(7552, 7615);
    var$2[85] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(351);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(7616, 7679);
    var$2[86] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(352);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(7680, 7935);
    var$2[87] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(353);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(7936, 8191);
    var$2[88] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(354);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(8192, 8303);
    var$2[89] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(355);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(8304, 8351);
    var$2[90] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(356);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(8352, 8399);
    var$2[91] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(357);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(8400, 8447);
    var$2[92] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(358);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(8448, 8527);
    var$2[93] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(359);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(8528, 8591);
    var$2[94] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(360);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(8592, 8703);
    var$2[95] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(361);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(8704, 8959);
    var$2[96] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(362);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(8960, 9215);
    var$2[97] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(363);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(9216, 9279);
    var$2[98] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(364);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(9280, 9311);
    var$2[99] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(365);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(9312, 9471);
    var$2[100] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(366);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(9472, 9599);
    var$2[101] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(367);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(9600, 9631);
    var$2[102] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(368);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(9632, 9727);
    var$2[103] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(369);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(9728, 9983);
    var$2[104] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(370);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(9984, 10175);
    var$2[105] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(371);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(10176, 10223);
    var$2[106] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(372);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(10224, 10239);
    var$2[107] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(373);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(10240, 10495);
    var$2[108] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(374);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(10496, 10623);
    var$2[109] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(375);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(10624, 10751);
    var$2[110] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(376);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(10752, 11007);
    var$2[111] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(377);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(11008, 11263);
    var$2[112] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(378);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(11264, 11359);
    var$2[113] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(379);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(11392, 11519);
    var$2[114] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(380);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(11520, 11567);
    var$2[115] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(381);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(11568, 11647);
    var$2[116] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(382);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(11648, 11743);
    var$2[117] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(383);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(11776, 11903);
    var$2[118] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(384);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(11904, 12031);
    var$2[119] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(385);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(12032, 12255);
    var$2[120] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(386);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(12272, 12287);
    var$2[121] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(387);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(12288, 12351);
    var$2[122] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(388);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(12352, 12447);
    var$2[123] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(389);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(12448, 12543);
    var$2[124] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(390);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(12544, 12591);
    var$2[125] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(391);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(12592, 12687);
    var$2[126] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(392);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(12688, 12703);
    var$2[127] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(393);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(12704, 12735);
    var$2[128] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(394);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(12736, 12783);
    var$2[129] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(395);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(12784, 12799);
    var$2[130] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(396);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(12800, 13055);
    var$2[131] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(397);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(13056, 13311);
    var$2[132] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(398);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(13312, 19893);
    var$2[133] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(399);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(19904, 19967);
    var$2[134] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(400);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(19968, 40959);
    var$2[135] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(401);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(40960, 42127);
    var$2[136] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(402);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(42128, 42191);
    var$2[137] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(403);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(42752, 42783);
    var$2[138] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(404);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(43008, 43055);
    var$2[139] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(405);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(44032, 55203);
    var$2[140] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(406);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(55296, 56191);
    var$2[141] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(407);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(56192, 56319);
    var$2[142] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(408);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(56320, 57343);
    var$2[143] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(409);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(57344, 63743);
    var$2[144] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(410);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(63744, 64255);
    var$2[145] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(411);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(64256, 64335);
    var$2[146] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(412);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(64336, 65023);
    var$2[147] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(413);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(65024, 65039);
    var$2[148] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(414);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(65040, 65055);
    var$2[149] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(415);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(65056, 65071);
    var$2[150] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(416);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(65072, 65103);
    var$2[151] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(417);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(65104, 65135);
    var$2[152] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(418);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(65136, 65279);
    var$2[153] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(419);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(65280, 65519);
    var$2[154] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(420);
    var$4[1] = jur_AbstractCharClass$LazyRange__init_(0, 1114111);
    var$2[155] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(421);
    var$4[1] = jur_AbstractCharClass$LazySpecialsBlock__init_();
    var$2[156] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(422);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(0, 1);
    var$2[157] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(423);
    var$4[1] = jur_AbstractCharClass$LazyCategoryScope__init_(62, 1);
    var$2[158] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(424);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(1, 1);
    var$2[159] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(425);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(2, 1);
    var$2[160] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(426);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(3, 0);
    var$2[161] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(427);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(4, 0);
    var$2[162] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(428);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(5, 1);
    var$2[163] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(429);
    var$4[1] = jur_AbstractCharClass$LazyCategoryScope__init_(448, 1);
    var$2[164] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(430);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(6, 1);
    var$2[165] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(431);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(7, 0);
    var$2[166] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(432);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(8, 1);
    var$2[167] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(433);
    var$4[1] = jur_AbstractCharClass$LazyCategoryScope__init_(3584, 1);
    var$2[168] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(434);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(9, 1);
    var$2[169] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(435);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(10, 1);
    var$2[170] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(436);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(11, 1);
    var$2[171] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(437);
    var$4[1] = jur_AbstractCharClass$LazyCategoryScope__init_(28672, 0);
    var$2[172] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(438);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(12, 0);
    var$2[173] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(439);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(13, 0);
    var$2[174] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(440);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(14, 0);
    var$2[175] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(441);
    var$4[1] = jur_AbstractCharClass$LazyCategoryScope__init_2(983040, 1, 1);
    var$2[176] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(442);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(15, 0);
    var$2[177] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(443);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(16, 1);
    var$2[178] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(444);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(18, 1);
    var$2[179] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(445);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_2(19, 0, 1);
    var$2[180] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(446);
    var$4[1] = jur_AbstractCharClass$LazyCategoryScope__init_(1643118592, 1);
    var$2[181] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(447);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(20, 0);
    var$2[182] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(448);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(21, 0);
    var$2[183] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(449);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(22, 0);
    var$2[184] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(450);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(23, 0);
    var$2[185] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(451);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(24, 1);
    var$2[186] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(452);
    var$4[1] = jur_AbstractCharClass$LazyCategoryScope__init_(2113929216, 1);
    var$2[187] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(453);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(25, 1);
    var$2[188] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(454);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(26, 0);
    var$2[189] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(455);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(27, 0);
    var$2[190] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(456);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(28, 1);
    var$2[191] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(457);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(29, 0);
    var$2[192] = var$3;
    var$3 = $rt_createArray(jl_Object, 2);
    var$4 = var$3.data;
    var$4[0] = $rt_s(458);
    var$4[1] = jur_AbstractCharClass$LazyCategory__init_(30, 0);
    var$2[193] = var$3;
    jur_AbstractCharClass$PredefinedCharacterClasses_contents = var$1;
};
function jur_AbstractCharClass$LazyCharClass() {
    let a = this; jl_Object.call(a);
    a.$posValue = null;
    a.$negValue = null;
}
let jur_AbstractCharClass$LazyCharClass_getValue = ($this, $negative) => {
    if (!$negative && $this.$posValue === null)
        $this.$posValue = $this.$computeValue();
    else if ($negative && $this.$negValue === null)
        $this.$negValue = jur_AbstractCharClass_setNegative($this.$computeValue(), 1);
    if ($negative)
        return $this.$negValue;
    return $this.$posValue;
};
function jur_Quantifier() {
    let a = this; jur_SpecialToken.call(a);
    a.$min1 = 0;
    a.$max1 = 0;
}
let jur_Quantifier_toString = $this => {
    let var$1, var$2, var$3, var$4, var$5;
    var$1 = $this.$min1;
    var$2 = $this.$max1;
    var$3 = var$2 != 2147483647 ? jl_Integer_toString(var$2) : $rt_s(3);
    var$4 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$4);
    jl_AbstractStringBuilder_append(var$4, 123);
    var$5 = jl_StringBuilder_append1(var$4, var$1);
    jl_AbstractStringBuilder_append(var$5, 44);
    jl_AbstractStringBuilder_append(jl_StringBuilder_append(var$5, var$3), 125);
    return jl_AbstractStringBuilder_toString(var$4);
},
jur_FSet$PossessiveFSet = $rt_classWithoutFields(jur_AbstractSet),
jur_FSet$PossessiveFSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    return $stringIndex;
},
jur_FSet$PossessiveFSet_hasConsumed = ($this, $mr) => {
    return 0;
};
function ju_BitSet() {
    let a = this; jl_Object.call(a);
    a.$data = null;
    a.$length1 = 0;
}
let ju_BitSet__init_0 = $this => {
    $this.$data = $rt_createIntArray(2);
},
ju_BitSet__init_ = () => {
    let var_0 = new ju_BitSet();
    ju_BitSet__init_0(var_0);
    return var_0;
},
ju_BitSet_set0 = ($this, $bitIndex) => {
    let var$2, $index, var$4;
    if ($bitIndex < 0) {
        var$2 = new jl_IndexOutOfBoundsException;
        jl_RuntimeException__init_(var$2);
        $rt_throw(var$2);
    }
    $index = $bitIndex / 32 | 0;
    if ($bitIndex >= $this.$length1) {
        ju_BitSet_ensureCapacity($this, $index + 1 | 0);
        $this.$length1 = $bitIndex + 1 | 0;
    }
    var$4 = $this.$data.data;
    var$4[$index] = var$4[$index] | 1 << ($bitIndex % 32 | 0);
},
ju_BitSet_set = ($this, $fromIndex, $toIndex) => {
    let $fromDataIndex, $toDataIndex, var$5, $i, var$7;
    if ($fromIndex >= 0) {
        $fromDataIndex = $rt_compare($fromIndex, $toIndex);
        if ($fromDataIndex <= 0) {
            if (!$fromDataIndex)
                return;
            $fromDataIndex = $fromIndex / 32 | 0;
            $toDataIndex = $toIndex / 32 | 0;
            if ($toIndex > $this.$length1) {
                ju_BitSet_ensureCapacity($this, $toDataIndex + 1 | 0);
                $this.$length1 = $toIndex;
            }
            if ($fromDataIndex == $toDataIndex) {
                var$5 = $this.$data.data;
                var$5[$fromDataIndex] = var$5[$fromDataIndex] | ju_BitSet_trailingZeroBits($this, $fromIndex) & ju_BitSet_trailingOneBits($this, $toIndex);
            } else {
                var$5 = $this.$data.data;
                var$5[$fromDataIndex] = var$5[$fromDataIndex] | ju_BitSet_trailingZeroBits($this, $fromIndex);
                $i = $fromDataIndex + 1 | 0;
                while ($i < $toDataIndex) {
                    $this.$data.data[$i] = (-1);
                    $i = $i + 1 | 0;
                }
                if ($toIndex & 31) {
                    var$5 = $this.$data.data;
                    var$5[$toDataIndex] = var$5[$toDataIndex] | ju_BitSet_trailingOneBits($this, $toIndex);
                }
            }
            return;
        }
    }
    var$7 = new jl_IndexOutOfBoundsException;
    jl_RuntimeException__init_(var$7);
    $rt_throw(var$7);
},
ju_BitSet_trailingZeroBits = ($this, $num) => {
    return (-1) << ($num % 32 | 0);
},
ju_BitSet_trailingOneBits = ($this, $num) => {
    $num = $num % 32 | 0;
    return !$num ? 0 : (-1) >>> (32 - $num | 0) | 0;
},
ju_BitSet_clear = ($this, $bitIndex) => {
    let var$2, $index, var$4, var$5, var$6, var$7;
    if ($bitIndex < 0) {
        var$2 = new jl_IndexOutOfBoundsException;
        jl_RuntimeException__init_(var$2);
        $rt_throw(var$2);
    }
    $index = $bitIndex / 32 | 0;
    var$4 = $this.$data.data;
    if ($index < var$4.length) {
        var$5 = var$4[$index];
        var$6 = $bitIndex % 32 | 0;
        jl_Integer_$callClinit();
        var$7 = var$6 & 31;
        var$4[$index] = var$5 & ((-2) << var$7 | ((-2) >>> (32 - var$7 | 0) | 0));
        if ($bitIndex == ($this.$length1 - 1 | 0))
            ju_BitSet_recalculateLength($this);
    }
},
ju_BitSet_get = ($this, $bitIndex) => {
    let var$2, $index, var$4;
    if ($bitIndex < 0) {
        var$2 = new jl_IndexOutOfBoundsException;
        jl_RuntimeException__init_(var$2);
        $rt_throw(var$2);
    }
    $index = $bitIndex / 32 | 0;
    var$4 = $this.$data.data;
    return $index < var$4.length && var$4[$index] & 1 << ($bitIndex % 32 | 0) ? 1 : 0;
},
ju_BitSet_nextSetBit = ($this, $fromIndex) => {
    let var$2, $top, $index, var$5, $i;
    if ($fromIndex < 0) {
        var$2 = new jl_IndexOutOfBoundsException;
        jl_RuntimeException__init_(var$2);
        $rt_throw(var$2);
    }
    $top = $this.$length1;
    if ($fromIndex >= $top)
        return (-1);
    $index = $fromIndex / 32 | 0;
    var$5 = $this.$data.data;
    $i = var$5[$index] >>> ($fromIndex % 32 | 0) | 0;
    if ($i)
        return jl_Integer_numberOfTrailingZeros($i) + $fromIndex | 0;
    $top = ($top + 31 | 0) / 32 | 0;
    $i = $index + 1 | 0;
    while ($i < $top) {
        if (var$5[$i])
            return ($i * 32 | 0) + jl_Integer_numberOfTrailingZeros(var$5[$i]) | 0;
        $i = $i + 1 | 0;
    }
    return (-1);
},
ju_BitSet_ensureCapacity = ($this, $capacity) => {
    let $newArrayLength, var$3, var$4, var$5;
    $newArrayLength = $this.$data.data.length;
    if ($newArrayLength >= $capacity)
        return;
    $newArrayLength = jl_Math_max(($capacity * 3 | 0) / 2 | 0, ($newArrayLength * 2 | 0) + 1 | 0);
    var$3 = $this.$data.data;
    var$4 = $rt_createIntArray($newArrayLength);
    var$5 = var$4.data;
    $capacity = jl_Math_min($newArrayLength, var$3.length);
    $newArrayLength = 0;
    while ($newArrayLength < $capacity) {
        var$5[$newArrayLength] = var$3[$newArrayLength];
        $newArrayLength = $newArrayLength + 1 | 0;
    }
    $this.$data = var$4;
},
ju_BitSet_recalculateLength = $this => {
    let $top, $i, $sz;
    $top = ($this.$length1 + 31 | 0) / 32 | 0;
    $this.$length1 = $top * 32 | 0;
    $i = $top - 1 | 0;
    a: {
        while (true) {
            if ($i < 0)
                break a;
            $sz = jl_Integer_numberOfLeadingZeros($this.$data.data[$i]);
            if ($sz < 32)
                break;
            $i = $i + (-1) | 0;
            $this.$length1 = $this.$length1 - 32 | 0;
        }
        $this.$length1 = $this.$length1 - $sz | 0;
    }
},
ju_BitSet_and = ($this, $set) => {
    let $i, $i_0, var$4, var$5;
    $i = jl_Math_min($this.$data.data.length, $set.$data.data.length);
    $i_0 = 0;
    while ($i_0 < $i) {
        var$4 = $this.$data.data;
        var$4[$i_0] = var$4[$i_0] & $set.$data.data[$i_0];
        $i_0 = $i_0 + 1 | 0;
    }
    while (true) {
        var$5 = $this.$data.data;
        if ($i >= var$5.length)
            break;
        var$5[$i] = 0;
        $i = $i + 1 | 0;
    }
    $this.$length1 = jl_Math_min($this.$length1, $set.$length1);
    ju_BitSet_recalculateLength($this);
},
ju_BitSet_andNot = ($this, $set) => {
    let $sz, $i, var$4;
    $sz = jl_Math_min($this.$data.data.length, $set.$data.data.length);
    $i = 0;
    while ($i < $sz) {
        var$4 = $this.$data.data;
        var$4[$i] = var$4[$i] & ($set.$data.data[$i] ^ (-1));
        $i = $i + 1 | 0;
    }
    ju_BitSet_recalculateLength($this);
},
ju_BitSet_or = ($this, $set) => {
    let $sz, $i, var$4;
    $sz = jl_Math_max($this.$length1, $set.$length1);
    $this.$length1 = $sz;
    ju_BitSet_ensureCapacity($this, ($sz + 31 | 0) / 32 | 0);
    $sz = jl_Math_min($this.$data.data.length, $set.$data.data.length);
    $i = 0;
    while ($i < $sz) {
        var$4 = $this.$data.data;
        var$4[$i] = var$4[$i] | $set.$data.data[$i];
        $i = $i + 1 | 0;
    }
},
ju_BitSet_xor = ($this, $set) => {
    let $sz, $i, var$4;
    $sz = jl_Math_max($this.$length1, $set.$length1);
    $this.$length1 = $sz;
    ju_BitSet_ensureCapacity($this, ($sz + 31 | 0) / 32 | 0);
    $sz = jl_Math_min($this.$data.data.length, $set.$data.data.length);
    $i = 0;
    while ($i < $sz) {
        var$4 = $this.$data.data;
        var$4[$i] = var$4[$i] ^ $set.$data.data[$i];
        $i = $i + 1 | 0;
    }
    ju_BitSet_recalculateLength($this);
},
ju_BitSet_isEmpty = $this => {
    return $this.$length1 ? 0 : 1;
};
function jur_LowHighSurrogateRangeSet() {
    let a = this; jur_JointSet.call(a);
    a.$surrChars = null;
    a.$alt0 = 0;
}
function jur_CompositeRangeSet() {
    let a = this; jur_JointSet.call(a);
    a.$withoutSurrogates = null;
    a.$withSurrogates = null;
}
let jur_CompositeRangeSet__init_0 = ($this, $withoutSurrogates, $withSurrogates) => {
    jur_AbstractSet__init_($this);
    $this.$withoutSurrogates = $withoutSurrogates;
    $this.$withSurrogates = $withSurrogates;
},
jur_CompositeRangeSet__init_ = (var_0, var_1) => {
    let var_2 = new jur_CompositeRangeSet();
    jur_CompositeRangeSet__init_0(var_2, var_0, var_1);
    return var_2;
},
jur_CompositeRangeSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $shift, var$5, var$6, var$7, var$8, var$9;
    $shift = $this.$withoutSurrogates.$matches($stringIndex, $testString, $matchResult);
    if ($shift < 0)
        a: {
            var$5 = $this.$withSurrogates;
            var$6 = $matchResult.$leftBound;
            $shift = $matchResult.$rightBound;
            var$7 = $stringIndex + 1 | 0;
            $shift = $rt_compare(var$7, $shift);
            if ($shift > 0) {
                $matchResult.$hitEnd = 1;
                $shift = (-1);
            } else {
                var$8 = $testString;
                var$9 = jl_String_charAt(var$8, $stringIndex);
                if (!var$5.$surrChars.$contains(var$9))
                    $shift = (-1);
                else {
                    if (jl_Character_isHighSurrogate(var$9)) {
                        if ($shift < 0 && jl_Character_isLowSurrogate(jl_String_charAt(var$8, var$7))) {
                            $shift = (-1);
                            break a;
                        }
                    } else if (jl_Character_isLowSurrogate(var$9) && $stringIndex > var$6 && jl_Character_isHighSurrogate(jl_String_charAt(var$8, $stringIndex - 1 | 0))) {
                        $shift = (-1);
                        break a;
                    }
                    $shift = var$5.$next1.$matches(var$7, $testString, $matchResult);
                }
            }
        }
    if ($shift >= 0)
        return $shift;
    return (-1);
},
jur_CompositeRangeSet_setNext = ($this, $next) => {
    $this.$next1 = $next;
    $this.$withSurrogates.$next1 = $next;
    $this.$withoutSurrogates.$setNext($next);
},
jur_CompositeRangeSet_hasConsumed = ($this, $matchResult) => {
    return 1;
},
jur_CompositeRangeSet_first = ($this, $set) => {
    return 1;
};
function jur_SupplRangeSet() {
    let a = this; jur_JointSet.call(a);
    a.$chars = null;
    a.$alt3 = 0;
}
let jur_SupplRangeSet__init_ = ($this, $cc) => {
    jur_AbstractSet__init_($this);
    $this.$chars = $cc.$getInstance0();
    $this.$alt3 = $cc.$alt;
},
jur_SupplRangeSet__init_0 = var_0 => {
    let var_1 = new jur_SupplRangeSet();
    jur_SupplRangeSet__init_(var_1, var_0);
    return var_1;
},
jur_SupplRangeSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $strLength, $low, var$6, $high, $offset;
    $strLength = $matchResult.$rightBound;
    if ($stringIndex < $strLength) {
        $low = $stringIndex + 1 | 0;
        var$6 = $testString;
        $high = jl_String_charAt(var$6, $stringIndex);
        if ($this.$contains($high)) {
            $offset = $this.$next1.$matches($low, $testString, $matchResult);
            if ($offset > 0)
                return $offset;
        }
        if ($low < $strLength) {
            $stringIndex = $low + 1 | 0;
            $low = jl_String_charAt(var$6, $low);
            if (jl_Character_isSurrogatePair($high, $low) && $this.$contains(jl_Character_toCodePoint($high, $low)))
                return $this.$next1.$matches($stringIndex, $testString, $matchResult);
        }
    }
    return (-1);
},
jur_SupplRangeSet_contains = ($this, $ch) => {
    return $this.$chars.$contains($ch);
},
jur_SupplRangeSet_first = ($this, $set) => {
    if ($set instanceof jur_SupplCharSet)
        return jur_AbstractCharClass_intersects0($this.$chars, $set.$ch1);
    if ($set instanceof jur_CharSet)
        return jur_AbstractCharClass_intersects0($this.$chars, $set.$ch0);
    if ($set instanceof jur_SupplRangeSet)
        return jur_AbstractCharClass_intersects($this.$chars, $set.$chars);
    if (!($set instanceof jur_RangeSet))
        return 1;
    return jur_AbstractCharClass_intersects($this.$chars, $set.$chars0);
},
jur_SupplRangeSet_getChars = $this => {
    return $this.$chars;
},
jur_SupplRangeSet_setNext = ($this, $next) => {
    $this.$next1 = $next;
},
jur_SupplRangeSet_hasConsumed = ($this, $mr) => {
    return 1;
},
jur_UCISupplRangeSet = $rt_classWithoutFields(jur_SupplRangeSet),
jur_UCISupplRangeSet_contains = ($this, $ch) => {
    return $this.$chars.$contains(jl_Character_toLowerCase0(jl_Character_toUpperCase0($ch)));
};
function jur_UCIRangeSet() {
    let a = this; jur_LeafSet.call(a);
    a.$chars1 = null;
    a.$alt2 = 0;
}
let jur_UCIRangeSet__init_0 = ($this, $cc) => {
    jur_LeafSet__init_($this);
    $this.$chars1 = $cc.$getInstance0();
    $this.$alt2 = $cc.$alt;
},
jur_UCIRangeSet__init_ = var_0 => {
    let var_1 = new jur_UCIRangeSet();
    jur_UCIRangeSet__init_0(var_1, var_0);
    return var_1;
},
jur_UCIRangeSet_accepts = ($this, $strIndex, $testString) => {
    return !$this.$chars1.$contains(jl_Character_toLowerCase(jl_Character_toUpperCase(jl_String_charAt($testString, $strIndex)))) ? (-1) : 1;
};
function jur_RangeSet() {
    let a = this; jur_LeafSet.call(a);
    a.$chars0 = null;
    a.$alt1 = 0;
}
let jur_RangeSet__init_0 = ($this, $cc) => {
    jur_LeafSet__init_($this);
    $this.$chars0 = $cc.$getInstance0();
    $this.$alt1 = $cc.$alt;
},
jur_RangeSet__init_ = var_0 => {
    let var_1 = new jur_RangeSet();
    jur_RangeSet__init_0(var_1, var_0);
    return var_1;
},
jur_RangeSet_accepts = ($this, $strIndex, $testString) => {
    return !$this.$chars0.$contains(jl_String_charAt($testString, $strIndex)) ? (-1) : 1;
},
jur_RangeSet_first = ($this, $set) => {
    if ($set instanceof jur_CharSet)
        return jur_AbstractCharClass_intersects0($this.$chars0, $set.$ch0);
    if ($set instanceof jur_RangeSet)
        return jur_AbstractCharClass_intersects($this.$chars0, $set.$chars0);
    if (!($set instanceof jur_SupplRangeSet)) {
        if (!($set instanceof jur_SupplCharSet))
            return 1;
        return 0;
    }
    return jur_AbstractCharClass_intersects($this.$chars0, $set.$chars);
};
function jur_HangulDecomposedCharSet() {
    let a = this; jur_JointSet.call(a);
    a.$decomposedChar = null;
    a.$decomposedCharUTF16 = null;
    a.$decomposedCharLength = 0;
}
let jur_HangulDecomposedCharSet__init_0 = ($this, $decomposedChar, $decomposedCharLength) => {
    jur_AbstractSet__init_($this);
    $this.$decomposedChar = $decomposedChar;
    $this.$decomposedCharLength = $decomposedCharLength;
},
jur_HangulDecomposedCharSet__init_ = (var_0, var_1) => {
    let var_2 = new jur_HangulDecomposedCharSet();
    jur_HangulDecomposedCharSet__init_0(var_2, var_0, var_1);
    return var_2;
},
jur_HangulDecomposedCharSet_setNext = ($this, $next) => {
    $this.$next1 = $next;
},
jur_HangulDecomposedCharSet_getDecomposedChar = $this => {
    if ($this.$decomposedCharUTF16 === null)
        $this.$decomposedCharUTF16 = jl_String__init_0($this.$decomposedChar);
    return $this.$decomposedCharUTF16;
},
jur_HangulDecomposedCharSet_matches = ($this, $strIndex, $testString, $matchResult) => {
    let $rightBound, $decompSyllable, $vIndex, $tIndex, var$8, var$9, $curSymb, $i, var$12, $lIndex, $decompCurSymb, var$15, $syllIndex;
    $rightBound = $matchResult.$rightBound;
    $decompSyllable = $rt_createIntArray(3);
    $vIndex = (-1);
    $tIndex = (-1);
    if ($strIndex >= $rightBound)
        return (-1);
    var$8 = $strIndex + 1 | 0;
    var$9 = $testString;
    $curSymb = jl_String_charAt(var$9, $strIndex);
    $i = $curSymb - 44032 | 0;
    if ($i >= 0 && $i < 11172) {
        var$12 = 4352 + ($i / 588 | 0) | 0;
        $lIndex = 4449 + (($i % 588 | 0) / 28 | 0) | 0;
        $strIndex = $i % 28 | 0;
        $decompCurSymb = !$strIndex ? $rt_createIntArrayFromData([var$12, $lIndex]) : $rt_createIntArrayFromData([var$12, $lIndex, 4519 + $strIndex | 0]);
    } else
        $decompCurSymb = null;
    if ($decompCurSymb !== null) {
        var$15 = $decompCurSymb.data;
        $i = 0;
        $strIndex = var$15.length;
        $syllIndex = $this.$decomposedCharLength;
        if ($strIndex != $syllIndex)
            return (-1);
        while (true) {
            if ($i >= $syllIndex)
                return $this.$next1.$matches(var$8, $testString, $matchResult);
            if (var$15[$i] != $this.$decomposedChar.data[$i])
                break;
            $i = $i + 1 | 0;
        }
        return (-1);
    }
    $decompSyllable = $decompSyllable.data;
    $decompSyllable[0] = $curSymb;
    $lIndex = $curSymb - 4352 | 0;
    if ($lIndex >= 0 && $lIndex < 19) {
        if (var$8 < $rightBound) {
            $curSymb = jl_String_charAt(var$9, var$8);
            $vIndex = $curSymb - 4449 | 0;
        }
        if ($vIndex >= 0 && $vIndex < 21) {
            $lIndex = var$8 + 1 | 0;
            $decompSyllable[1] = $curSymb;
            if ($lIndex < $rightBound) {
                $curSymb = jl_String_charAt(var$9, $lIndex);
                $tIndex = $curSymb - 4519 | 0;
            }
            if ($tIndex >= 0 && $tIndex < 28) {
                a: {
                    $strIndex = $lIndex + 1 | 0;
                    $decompSyllable[2] = $curSymb;
                    if ($this.$decomposedCharLength == 3) {
                        $lIndex = $decompSyllable[0];
                        var$15 = $this.$decomposedChar.data;
                        if ($lIndex == var$15[0] && $decompSyllable[1] == var$15[1] && $decompSyllable[2] == var$15[2]) {
                            $strIndex = $this.$next1.$matches($strIndex, $testString, $matchResult);
                            break a;
                        }
                    }
                    $strIndex = (-1);
                }
                return $strIndex;
            }
            b: {
                if ($this.$decomposedCharLength == 2) {
                    $syllIndex = $decompSyllable[0];
                    var$15 = $this.$decomposedChar.data;
                    if ($syllIndex == var$15[0] && $decompSyllable[1] == var$15[1]) {
                        $strIndex = $this.$next1.$matches($lIndex, $testString, $matchResult);
                        break b;
                    }
                }
                $strIndex = (-1);
            }
            return $strIndex;
        }
        return (-1);
    }
    return (-1);
},
jur_HangulDecomposedCharSet_first = ($this, $set) => {
    return $set instanceof jur_HangulDecomposedCharSet && !jl_String_equals(jur_HangulDecomposedCharSet_getDecomposedChar($set), jur_HangulDecomposedCharSet_getDecomposedChar($this)) ? 0 : 1;
},
jur_HangulDecomposedCharSet_hasConsumed = ($this, $matchResult) => {
    return 1;
};
function jur_CharSet() {
    jur_LeafSet.call(this);
    this.$ch0 = 0;
}
let jur_CharSet__init_0 = ($this, $ch) => {
    jur_LeafSet__init_($this);
    $this.$ch0 = $ch;
},
jur_CharSet__init_ = var_0 => {
    let var_1 = new jur_CharSet();
    jur_CharSet__init_0(var_1, var_0);
    return var_1;
},
jur_CharSet_charCount = $this => {
    return 1;
},
jur_CharSet_accepts = ($this, $strIndex, $testString) => {
    return $this.$ch0 != jl_String_charAt($testString, $strIndex) ? (-1) : 1;
},
jur_CharSet_find = ($this, $strIndex, $testString, $matchResult) => {
    let $testStr, $strLength, var$6, var$7;
    if (!($testString instanceof jl_String))
        return jur_AbstractSet_find($this, $strIndex, $testString, $matchResult);
    $testStr = $testString;
    $strLength = $matchResult.$rightBound;
    while (true) {
        if ($strIndex >= $strLength)
            return (-1);
        var$6 = jl_String_indexOf0($testStr, $this.$ch0, $strIndex);
        if (var$6 < 0)
            return (-1);
        var$7 = $this.$next1;
        $strIndex = var$6 + 1 | 0;
        if (var$7.$matches($strIndex, $testString, $matchResult) >= 0)
            break;
    }
    return var$6;
},
jur_CharSet_findBack = ($this, $strIndex, $lastIndex, $testString, $matchResult) => {
    let $testStr, var$6;
    if (!($testString instanceof jl_String))
        return jur_AbstractSet_findBack($this, $strIndex, $lastIndex, $testString, $matchResult);
    $testStr = $testString;
    a: {
        while (true) {
            if ($lastIndex < $strIndex)
                return (-1);
            var$6 = jl_String_lastIndexOf($testStr, $this.$ch0, $lastIndex);
            if (var$6 < 0)
                break a;
            if (var$6 < $strIndex)
                break a;
            if ($this.$next1.$matches(var$6 + 1 | 0, $testString, $matchResult) >= 0)
                break;
            $lastIndex = var$6 + (-1) | 0;
        }
        return var$6;
    }
    return (-1);
},
jur_CharSet_first = ($this, $set) => {
    if ($set instanceof jur_CharSet)
        return $set.$ch0 != $this.$ch0 ? 0 : 1;
    if (!($set instanceof jur_RangeSet)) {
        if ($set instanceof jur_SupplRangeSet)
            return $set.$contains($this.$ch0);
        if (!($set instanceof jur_SupplCharSet))
            return 1;
        return 0;
    }
    return jur_RangeSet_accepts($set, 0, jl_Character_toString($this.$ch0)) <= 0 ? 0 : 1;
};
function jur_UCICharSet() {
    jur_LeafSet.call(this);
    this.$ch2 = 0;
}
let jur_UCICharSet__init_0 = ($this, $ch) => {
    jur_LeafSet__init_($this);
    $this.$ch2 = jl_Character_toLowerCase(jl_Character_toUpperCase($ch));
},
jur_UCICharSet__init_ = var_0 => {
    let var_1 = new jur_UCICharSet();
    jur_UCICharSet__init_0(var_1, var_0);
    return var_1;
},
jur_UCICharSet_accepts = ($this, $strIndex, $testString) => {
    return $this.$ch2 != jl_Character_toLowerCase(jl_Character_toUpperCase(jl_String_charAt($testString, $strIndex))) ? (-1) : 1;
};
function jur_CICharSet() {
    let a = this; jur_LeafSet.call(a);
    a.$ch3 = 0;
    a.$supplement = 0;
}
let jur_CICharSet__init_0 = ($this, $ch) => {
    jur_LeafSet__init_($this);
    $this.$ch3 = $ch;
    $this.$supplement = jur_Pattern_getSupplement($ch);
},
jur_CICharSet__init_ = var_0 => {
    let var_1 = new jur_CICharSet();
    jur_CICharSet__init_0(var_1, var_0);
    return var_1;
},
jur_CICharSet_accepts = ($this, $strIndex, $testString) => {
    let var$3;
    var$3 = $this.$ch3;
    $testString = $testString;
    return var$3 != jl_String_charAt($testString, $strIndex) && $this.$supplement != jl_String_charAt($testString, $strIndex) ? (-1) : 1;
};
function jur_DecomposedCharSet() {
    let a = this; jur_JointSet.call(a);
    a.$readCharsForCodePoint = 0;
    a.$decomposedCharUTF160 = null;
    a.$decomposedChar0 = null;
    a.$decomposedCharLength0 = 0;
}
let jur_DecomposedCharSet__init_ = ($this, $decomposedChar, $decomposedCharLength) => {
    jur_AbstractSet__init_($this);
    $this.$readCharsForCodePoint = 1;
    $this.$decomposedChar0 = $decomposedChar;
    $this.$decomposedCharLength0 = $decomposedCharLength;
},
jur_DecomposedCharSet__init_0 = (var_0, var_1) => {
    let var_2 = new jur_DecomposedCharSet();
    jur_DecomposedCharSet__init_(var_2, var_0, var_1);
    return var_2;
},
jur_DecomposedCharSet_setNext = ($this, $next) => {
    $this.$next1 = $next;
},
jur_DecomposedCharSet_matches = ($this, $strIndex, $testString, $matchResult) => {
    let $decCodePoint, $rightBound, $curChar, var$7, $decCurCodePoint, var$9, var$10, $readCodePoints;
    $decCodePoint = $rt_createIntArray(4);
    $rightBound = $matchResult.$rightBound;
    if ($strIndex >= $rightBound)
        return (-1);
    $curChar = jur_DecomposedCharSet_codePointAt($this, $strIndex, $testString, $rightBound);
    var$7 = $strIndex + $this.$readCharsForCodePoint | 0;
    $decCurCodePoint = jur_Lexer_getDecomposition($curChar);
    if ($decCurCodePoint === null) {
        $decCurCodePoint = $decCodePoint.data;
        $strIndex = 1;
        $decCurCodePoint[0] = $curChar;
    } else {
        $strIndex = $decCurCodePoint.data.length;
        jl_System_fastArraycopy($decCurCodePoint, 0, $decCodePoint, 0, $strIndex);
        $strIndex = 0 + $strIndex | 0;
    }
    a: {
        if (var$7 < $rightBound) {
            var$9 = $decCodePoint.data;
            $curChar = jur_DecomposedCharSet_codePointAt($this, var$7, $testString, $rightBound);
            while ($strIndex < 4) {
                if (!(($curChar != 832 ? 0 : 1) | ($curChar != 833 ? 0 : 1) | ($curChar != 835 ? 0 : 1) | ($curChar != 836 ? 0 : 1))) {
                    var$10 = $strIndex + 1 | 0;
                    var$9[$strIndex] = $curChar;
                } else {
                    $decCurCodePoint = (jur_Lexer_getDecomposition($curChar)).data;
                    if ($decCurCodePoint.length != 2) {
                        var$10 = $strIndex + 1 | 0;
                        var$9[$strIndex] = $decCurCodePoint[0];
                    } else {
                        $readCodePoints = $strIndex + 1 | 0;
                        var$9[$strIndex] = $decCurCodePoint[0];
                        var$10 = $readCodePoints + 1 | 0;
                        var$9[$readCodePoints] = $decCurCodePoint[1];
                    }
                }
                var$7 = var$7 + $this.$readCharsForCodePoint | 0;
                if (var$7 >= $rightBound) {
                    $strIndex = var$10;
                    break a;
                }
                $curChar = jur_DecomposedCharSet_codePointAt($this, var$7, $testString, $rightBound);
                $strIndex = var$10;
            }
        }
    }
    if ($strIndex != $this.$decomposedCharLength0)
        return (-1);
    $decCurCodePoint = $decCodePoint.data;
    $curChar = 0;
    while (true) {
        if ($curChar >= $strIndex)
            return $this.$next1.$matches(var$7, $testString, $matchResult);
        if ($decCurCodePoint[$curChar] != $this.$decomposedChar0.data[$curChar])
            break;
        $curChar = $curChar + 1 | 0;
    }
    return (-1);
},
jur_DecomposedCharSet_getDecomposedChar = $this => {
    let $strBuff, $i;
    if ($this.$decomposedCharUTF160 === null) {
        $strBuff = new jl_StringBuilder;
        jl_AbstractStringBuilder__init_($strBuff);
        $i = 0;
        while ($i < $this.$decomposedCharLength0) {
            jl_AbstractStringBuilder_append0($strBuff, jl_Character_toChars($this.$decomposedChar0.data[$i]));
            $i = $i + 1 | 0;
        }
        $this.$decomposedCharUTF160 = jl_AbstractStringBuilder_toString($strBuff);
    }
    return $this.$decomposedCharUTF160;
},
jur_DecomposedCharSet_codePointAt = ($this, $strIndex, $testString, $rightBound) => {
    let $curChar, $low, $curCodePointUTF16;
    $this.$readCharsForCodePoint = 1;
    if ($strIndex >= ($rightBound - 1 | 0))
        $curChar = jl_String_charAt($testString, $strIndex);
    else {
        $rightBound = $strIndex + 1 | 0;
        $testString = $testString;
        $curChar = jl_String_charAt($testString, $strIndex);
        $low = jl_String_charAt($testString, $rightBound);
        if (jl_Character_isSurrogatePair($curChar, $low)) {
            $curCodePointUTF16 = $rt_createCharArray(2).data;
            $curCodePointUTF16[0] = $curChar;
            $curCodePointUTF16[1] = $low;
            $rightBound = $curCodePointUTF16.length;
            if (0 < $rightBound && $rightBound <= $rightBound) {
                $curChar = 0 < ($rightBound - 1 | 0) && jl_Character_isHighSurrogate($curCodePointUTF16[0]) && jl_Character_isLowSurrogate($curCodePointUTF16[1]) ? jl_Character_toCodePoint($curCodePointUTF16[0], $curCodePointUTF16[1]) : $curCodePointUTF16[0];
                $this.$readCharsForCodePoint = 2;
            } else {
                $testString = new jl_IndexOutOfBoundsException;
                jl_RuntimeException__init_($testString);
                $rt_throw($testString);
            }
        }
    }
    return $curChar;
},
jur_DecomposedCharSet_first = ($this, $set) => {
    return $set instanceof jur_DecomposedCharSet && !jl_String_equals(jur_DecomposedCharSet_getDecomposedChar($set), jur_DecomposedCharSet_getDecomposedChar($this)) ? 0 : 1;
},
jur_DecomposedCharSet_hasConsumed = ($this, $matchResult) => {
    return 1;
},
jur_UCIDecomposedCharSet = $rt_classWithoutFields(jur_DecomposedCharSet),
jur_CIDecomposedCharSet = $rt_classWithoutFields(jur_DecomposedCharSet),
jur_PossessiveGroupQuantifierSet = $rt_classWithoutFields(jur_GroupQuantifierSet),
jur_PossessiveGroupQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $stringIndex_0;
    while (true) {
        $stringIndex_0 = $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
        if ($stringIndex_0 <= 0)
            break;
        $stringIndex = $stringIndex_0;
    }
    return $this.$next1.$matches($stringIndex, $testString, $matchResult);
},
jur_PosPlusGroupQuantifierSet = $rt_classWithoutFields(jur_GroupQuantifierSet),
jur_PosPlusGroupQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $nextIndex;
    $nextIndex = $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
    if ($nextIndex < 0)
        return (-1);
    if ($nextIndex > $stringIndex) {
        while (true) {
            $stringIndex = $this.$innerSet.$matches($nextIndex, $testString, $matchResult);
            if ($stringIndex <= $nextIndex)
                break;
            $nextIndex = $stringIndex;
        }
        $stringIndex = $nextIndex;
    }
    return $this.$next1.$matches($stringIndex, $testString, $matchResult);
},
jur_AltGroupQuantifierSet = $rt_classWithoutFields(jur_GroupQuantifierSet),
jur_AltGroupQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $nextIndex;
    if (!$this.$innerSet.$hasConsumed($matchResult))
        return $this.$next1.$matches($stringIndex, $testString, $matchResult);
    $nextIndex = $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
    if ($nextIndex >= 0)
        return $nextIndex;
    return $this.$next1.$matches($stringIndex, $testString, $matchResult);
},
jur_AltGroupQuantifierSet_setNext = ($this, $next) => {
    $this.$next1 = $next;
    $this.$innerSet.$setNext($next);
},
jur_PosAltGroupQuantifierSet = $rt_classWithoutFields(jur_AltGroupQuantifierSet),
jur_PosAltGroupQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $nextIndex;
    $nextIndex = $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
    if ($nextIndex <= 0)
        $nextIndex = $stringIndex;
    return $this.$next1.$matches($nextIndex, $testString, $matchResult);
},
jur_PosAltGroupQuantifierSet_setNext = ($this, $next) => {
    $this.$next1 = $next;
};
function jur_CompositeGroupQuantifierSet() {
    let a = this; jur_GroupQuantifierSet.call(a);
    a.$quantifier = null;
    a.$setCounter = 0;
}
let jur_CompositeGroupQuantifierSet__init_ = ($this, $quant, $innerSet, $next, $type, $setCounter) => {
    jur_QuantifierSet__init_($this, $innerSet, $next, $type);
    $this.$quantifier = $quant;
    $this.$setCounter = $setCounter;
},
jur_CompositeGroupQuantifierSet__init_0 = (var_0, var_1, var_2, var_3, var_4) => {
    let var_5 = new jur_CompositeGroupQuantifierSet();
    jur_CompositeGroupQuantifierSet__init_(var_5, var_0, var_1, var_2, var_3, var_4);
    return var_5;
},
jur_CompositeGroupQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $enterCounter, $nextIndex;
    $enterCounter = jur_MatchResultImpl_getEnterCounter($matchResult, $this.$setCounter);
    if (!$this.$innerSet.$hasConsumed($matchResult))
        return $this.$next1.$matches($stringIndex, $testString, $matchResult);
    if ($enterCounter >= $this.$quantifier.$max1)
        return $this.$next1.$matches($stringIndex, $testString, $matchResult);
    $nextIndex = $this.$setCounter;
    $enterCounter = $enterCounter + 1 | 0;
    jur_MatchResultImpl_setEnterCounter($matchResult, $nextIndex, $enterCounter);
    $nextIndex = $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
    if ($nextIndex >= 0) {
        jur_MatchResultImpl_setEnterCounter($matchResult, $this.$setCounter, 0);
        return $nextIndex;
    }
    $nextIndex = $this.$setCounter;
    $enterCounter = $enterCounter + (-1) | 0;
    jur_MatchResultImpl_setEnterCounter($matchResult, $nextIndex, $enterCounter);
    if ($enterCounter >= $this.$quantifier.$min1)
        return $this.$next1.$matches($stringIndex, $testString, $matchResult);
    jur_MatchResultImpl_setEnterCounter($matchResult, $this.$setCounter, 0);
    return (-1);
},
jur_PosCompositeGroupQuantifierSet = $rt_classWithoutFields(jur_CompositeGroupQuantifierSet),
jur_PosCompositeGroupQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $counter, $max, $nextIndex;
    $counter = 0;
    $max = $this.$quantifier.$max1;
    a: {
        while (true) {
            $nextIndex = $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
            if ($nextIndex <= $stringIndex)
                break a;
            if ($counter >= $max)
                break;
            $counter = $counter + 1 | 0;
            $stringIndex = $nextIndex;
        }
    }
    if ($nextIndex < 0 && $counter < $this.$quantifier.$min1)
        return (-1);
    return $this.$next1.$matches($stringIndex, $testString, $matchResult);
},
jur_ReluctantGroupQuantifierSet = $rt_classWithoutFields(jur_GroupQuantifierSet),
jur_ReluctantGroupQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $res;
    if (!$this.$innerSet.$hasConsumed($matchResult))
        return $this.$next1.$matches($stringIndex, $testString, $matchResult);
    $res = $this.$next1.$matches($stringIndex, $testString, $matchResult);
    if ($res >= 0)
        return $res;
    return $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
},
jur_RelAltGroupQuantifierSet = $rt_classWithoutFields(jur_AltGroupQuantifierSet),
jur_RelAltGroupQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $nextIndex;
    if (!$this.$innerSet.$hasConsumed($matchResult))
        return $this.$next1.$matches($stringIndex, $testString, $matchResult);
    $nextIndex = $this.$next1.$matches($stringIndex, $testString, $matchResult);
    if ($nextIndex < 0)
        $nextIndex = $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
    return $nextIndex;
},
jur_RelCompositeGroupQuantifierSet = $rt_classWithoutFields(jur_CompositeGroupQuantifierSet),
jur_RelCompositeGroupQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $enterCounter, var$5, $nextIndex;
    $enterCounter = jur_MatchResultImpl_getEnterCounter($matchResult, $this.$setCounter);
    if (!$this.$innerSet.$hasConsumed($matchResult))
        return $this.$next1.$matches($stringIndex, $testString, $matchResult);
    var$5 = $this.$quantifier;
    if ($enterCounter >= var$5.$max1) {
        jur_MatchResultImpl_setEnterCounter($matchResult, $this.$setCounter, 0);
        return $this.$next1.$matches($stringIndex, $testString, $matchResult);
    }
    if ($enterCounter < var$5.$min1) {
        jur_MatchResultImpl_setEnterCounter($matchResult, $this.$setCounter, $enterCounter + 1 | 0);
        $nextIndex = $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
    } else {
        $nextIndex = $this.$next1.$matches($stringIndex, $testString, $matchResult);
        if ($nextIndex >= 0) {
            jur_MatchResultImpl_setEnterCounter($matchResult, $this.$setCounter, 0);
            return $nextIndex;
        }
        jur_MatchResultImpl_setEnterCounter($matchResult, $this.$setCounter, $enterCounter + 1 | 0);
        $nextIndex = $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
    }
    return $nextIndex;
},
jur_DotAllQuantifierSet = $rt_classWithoutFields(jur_QuantifierSet),
jur_DotAllQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $strLength;
    $strLength = $matchResult.$rightBound;
    if ($strLength > $stringIndex)
        return $this.$next1.$findBack($stringIndex, $strLength, $testString, $matchResult);
    return $this.$next1.$matches($stringIndex, $testString, $matchResult);
},
jur_DotAllQuantifierSet_find = ($this, $stringIndex, $testString, $matchResult) => {
    let $strLength;
    $strLength = $matchResult.$rightBound;
    if ($this.$next1.$findBack($stringIndex, $strLength, $testString, $matchResult) >= 0)
        return $stringIndex;
    return (-1);
};
function jur_DotQuantifierSet() {
    jur_QuantifierSet.call(this);
    this.$lt = null;
}
let jur_DotQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $strLength, $startSearch;
    $strLength = $matchResult.$rightBound;
    $startSearch = jur_DotQuantifierSet_findLineTerminator($this, $stringIndex, $strLength, $testString);
    if ($startSearch >= 0)
        $strLength = $startSearch;
    if ($strLength > $stringIndex)
        return $this.$next1.$findBack($stringIndex, $strLength, $testString, $matchResult);
    return $this.$next1.$matches($stringIndex, $testString, $matchResult);
},
jur_DotQuantifierSet_find = ($this, $stringIndex, $testString, $matchResult) => {
    let $strLength, $res, $nextSearch, $leftBound;
    $strLength = $matchResult.$rightBound;
    $res = $this.$next1.$find0($stringIndex, $testString, $matchResult);
    if ($res < 0)
        return (-1);
    $nextSearch = jur_DotQuantifierSet_findLineTerminator($this, $res, $strLength, $testString);
    if ($nextSearch >= 0)
        $strLength = $nextSearch;
    $nextSearch = jl_Math_max($res, $this.$next1.$findBack($res, $strLength, $testString, $matchResult));
    if ($nextSearch <= 0)
        $leftBound = $nextSearch ? (-1) : 0;
    else {
        $leftBound = $nextSearch - 1 | 0;
        a: {
            while (true) {
                if ($leftBound < $stringIndex) {
                    $leftBound = (-1);
                    break a;
                }
                if ($this.$lt.$isLineTerminator(jl_String_charAt($testString, $leftBound)))
                    break;
                $leftBound = $leftBound + (-1) | 0;
            }
        }
    }
    if ($leftBound >= $stringIndex)
        $stringIndex = $leftBound >= $nextSearch ? $leftBound : $leftBound + 1 | 0;
    return $stringIndex;
},
jur_DotQuantifierSet_findLineTerminator = ($this, $i, $to, $testString) => {
    while (true) {
        if ($i >= $to)
            return (-1);
        if ($this.$lt.$isLineTerminator(jl_String_charAt($testString, $i)))
            break;
        $i = $i + 1 | 0;
    }
    return $i;
},
jur_AbstractLineTerminator = $rt_classWithoutFields(),
jur_AbstractLineTerminator_unixLT = null,
jur_AbstractLineTerminator_unicodeLT = null,
jur_AbstractLineTerminator_getInstance = $flag => {
    let var$2;
    if (!($flag & 1)) {
        var$2 = jur_AbstractLineTerminator_unicodeLT;
        if (var$2 !== null)
            return var$2;
        var$2 = new jur_AbstractLineTerminator$2;
        jur_AbstractLineTerminator_unicodeLT = var$2;
        return var$2;
    }
    var$2 = jur_AbstractLineTerminator_unixLT;
    if (var$2 !== null)
        return var$2;
    var$2 = new jur_AbstractLineTerminator$1;
    jur_AbstractLineTerminator_unixLT = var$2;
    return var$2;
},
jur_PossessiveQuantifierSet = $rt_classWithoutFields(jur_LeafQuantifierSet),
jur_PossessiveQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let var$4;
    a: {
        while (true) {
            if (($stringIndex + $this.$leaf.$charCount() | 0) > $matchResult.$rightBound)
                break a;
            var$4 = $this.$leaf.$accepts($stringIndex, $testString);
            if (var$4 < 1)
                break;
            $stringIndex = $stringIndex + var$4 | 0;
        }
    }
    return $this.$next1.$matches($stringIndex, $testString, $matchResult);
},
jur_PossessiveAltQuantifierSet = $rt_classWithoutFields(jur_AltQuantifierSet),
jur_PossessiveAltQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let var$4;
    if (($stringIndex + $this.$leaf.$charCount() | 0) <= $matchResult.$rightBound) {
        var$4 = $this.$leaf.$accepts($stringIndex, $testString);
        if (var$4 >= 1)
            $stringIndex = $stringIndex + var$4 | 0;
    }
    return $this.$next1.$matches($stringIndex, $testString, $matchResult);
},
jur_PossessiveCompositeQuantifierSet = $rt_classWithoutFields(jur_CompositeQuantifierSet),
jur_PossessiveCompositeQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let var$4, $min, $max, $i, $shift;
    var$4 = $this.$quantifier0;
    $min = var$4.$min1;
    $max = var$4.$max1;
    $i = 0;
    while (true) {
        if ($i >= $min) {
            a: {
                while (true) {
                    if ($i >= $max)
                        break a;
                    if (($stringIndex + $this.$leaf.$charCount() | 0) > $matchResult.$rightBound)
                        break a;
                    $shift = $this.$leaf.$accepts($stringIndex, $testString);
                    if ($shift < 1)
                        break;
                    $stringIndex = $stringIndex + $shift | 0;
                    $i = $i + 1 | 0;
                }
            }
            return $this.$next1.$matches($stringIndex, $testString, $matchResult);
        }
        if (($stringIndex + $this.$leaf.$charCount() | 0) > $matchResult.$rightBound) {
            $matchResult.$hitEnd = 1;
            return (-1);
        }
        $shift = $this.$leaf.$accepts($stringIndex, $testString);
        if ($shift < 1)
            break;
        $stringIndex = $stringIndex + $shift | 0;
        $i = $i + 1 | 0;
    }
    return (-1);
},
jur_ReluctantQuantifierSet = $rt_classWithoutFields(jur_LeafQuantifierSet),
jur_ReluctantQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let var$4;
    while (true) {
        var$4 = $this.$next1.$matches($stringIndex, $testString, $matchResult);
        if (var$4 >= 0)
            break;
        if (($stringIndex + $this.$leaf.$charCount() | 0) <= $matchResult.$rightBound) {
            var$4 = $this.$leaf.$accepts($stringIndex, $testString);
            $stringIndex = $stringIndex + var$4 | 0;
        }
        if (var$4 < 1)
            return (-1);
    }
    return var$4;
},
jur_ReluctantAltQuantifierSet = $rt_classWithoutFields(jur_AltQuantifierSet),
jur_ReluctantAltQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $shift;
    $shift = $this.$next1.$matches($stringIndex, $testString, $matchResult);
    if ($shift >= 0)
        return $shift;
    return $this.$innerSet.$matches($stringIndex, $testString, $matchResult);
},
jur_ReluctantCompositeQuantifierSet = $rt_classWithoutFields(jur_CompositeQuantifierSet),
jur_ReluctantCompositeQuantifierSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let var$4, $min, $max, $i, var$8, var$9;
    var$4 = $this.$quantifier0;
    $min = var$4.$min1;
    $max = var$4.$max1;
    $i = 0;
    while (true) {
        if ($i >= $min) {
            a: {
                while (true) {
                    var$8 = $this.$next1.$matches($stringIndex, $testString, $matchResult);
                    if (var$8 >= 0)
                        break;
                    if (($stringIndex + $this.$leaf.$charCount() | 0) <= $matchResult.$rightBound) {
                        var$8 = $this.$leaf.$accepts($stringIndex, $testString);
                        $stringIndex = $stringIndex + var$8 | 0;
                        $i = $i + 1 | 0;
                    }
                    if (var$8 < 1)
                        break a;
                    if ($i > $max)
                        break a;
                }
                return var$8;
            }
            return (-1);
        }
        if (($stringIndex + $this.$leaf.$charCount() | 0) > $matchResult.$rightBound) {
            $matchResult.$hitEnd = 1;
            return (-1);
        }
        var$9 = $this.$leaf.$accepts($stringIndex, $testString);
        if (var$9 < 1)
            break;
        $stringIndex = $stringIndex + var$9 | 0;
        $i = $i + 1 | 0;
    }
    return (-1);
},
jur_SOLSet = $rt_classWithoutFields(jur_AbstractSet),
jur_SOLSet_matches = ($this, $strIndex, $testString, $matchResult) => {
    if ($strIndex && !($matchResult.$anchoringBounds && $strIndex == $matchResult.$leftBound))
        return (-1);
    return $this.$next1.$matches($strIndex, $testString, $matchResult);
},
jur_SOLSet_hasConsumed = ($this, $matchResult) => {
    return 0;
};
function jur_WordBoundary() {
    jur_AbstractSet.call(this);
    this.$positive = 0;
}
let jur_WordBoundary__init_0 = ($this, $positive) => {
    jur_AbstractSet__init_($this);
    $this.$positive = $positive;
},
jur_WordBoundary__init_ = var_0 => {
    let var_1 = new jur_WordBoundary();
    jur_WordBoundary__init_0(var_1, var_0);
    return var_1;
},
jur_WordBoundary_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $ch1, $ch2, $left, $leftBound;
    $ch1 = $stringIndex >= $matchResult.$rightBound ? 32 : jl_String_charAt($testString, $stringIndex);
    if (!$stringIndex)
        $ch2 = 32;
    else {
        $left = $stringIndex - 1 | 0;
        $ch2 = jl_String_charAt($testString, $left);
    }
    $leftBound = $matchResult.$transparentBounds ? 0 : $matchResult.$leftBound;
    return ($ch1 != 32 && !jur_WordBoundary_isSpace($this, $ch1, $stringIndex, $leftBound, $testString) ? 0 : 1) ^ ($ch2 != 32 && !jur_WordBoundary_isSpace($this, $ch2, $stringIndex - 1 | 0, $leftBound, $testString) ? 0 : 1) ^ $this.$positive ? (-1) : $this.$next1.$matches($stringIndex, $testString, $matchResult);
},
jur_WordBoundary_hasConsumed = ($this, $matchResult) => {
    return 0;
},
jur_WordBoundary_isSpace = ($this, $ch, $index, $leftBound, $testString) => {
    let var$5;
    if (!jl_Character_isLetterOrDigit0($ch) && $ch != 95) {
        a: {
            if (jl_Character_getType0($ch) == 6)
                while (true) {
                    $index = $index + (-1) | 0;
                    if ($index < $leftBound)
                        break a;
                    var$5 = jl_String_charAt($testString, $index);
                    if (jl_Character_isLetterOrDigit0(var$5))
                        return 0;
                    if (jl_Character_getType0(var$5) != 6)
                        return 1;
                }
        }
        return 1;
    }
    return 0;
},
jur_PreviousMatch = $rt_classWithoutFields(jur_AbstractSet),
jur_PreviousMatch_matches = ($this, $stringIndex, $testString, $matchResult) => {
    if ($stringIndex != $matchResult.$previousMatch)
        return (-1);
    return $this.$next1.$matches($stringIndex, $testString, $matchResult);
},
jur_PreviousMatch_hasConsumed = ($this, $matchResult) => {
    return 0;
};
function jur_EOLSet() {
    jur_AbstractSet.call(this);
    this.$consCounter0 = 0;
}
let jur_EOLSet__init_ = ($this, $counter) => {
    jur_AbstractSet__init_($this);
    $this.$consCounter0 = $counter;
},
jur_EOLSet__init_0 = var_0 => {
    let var_1 = new jur_EOLSet();
    jur_EOLSet__init_(var_1, var_0);
    return var_1;
},
jur_EOLSet_matches = ($this, $strIndex, $testString, $matchResult) => {
    let $rightBound, var$5, var$6, $ch;
    $rightBound = $matchResult.$anchoringBounds ? $matchResult.$rightBound : $testString.$nativeString.length;
    if ($strIndex >= $rightBound) {
        jur_MatchResultImpl_setConsumed($matchResult, $this.$consCounter0, 0);
        return $this.$next1.$matches($strIndex, $testString, $matchResult);
    }
    var$5 = $rightBound - $strIndex | 0;
    if (var$5 == 2) {
        var$6 = $testString;
        if (jl_String_charAt(var$6, $strIndex) == 13 && jl_String_charAt(var$6, $strIndex + 1 | 0) == 10) {
            jur_MatchResultImpl_setConsumed($matchResult, $this.$consCounter0, 0);
            return $this.$next1.$matches($strIndex, $testString, $matchResult);
        }
    }
    a: {
        if (var$5 == 1) {
            $ch = jl_String_charAt($testString, $strIndex);
            if ($ch == 10)
                break a;
            if ($ch == 13)
                break a;
            if ($ch == 133)
                break a;
            if (($ch | 1) == 8233)
                break a;
        }
        return (-1);
    }
    jur_MatchResultImpl_setConsumed($matchResult, $this.$consCounter0, 0);
    return $this.$next1.$matches($strIndex, $testString, $matchResult);
},
jur_EOLSet_hasConsumed = ($this, $matchResult) => {
    let $res;
    $res = !jur_MatchResultImpl_getConsumed($matchResult, $this.$consCounter0) ? 0 : 1;
    jur_MatchResultImpl_setConsumed($matchResult, $this.$consCounter0, (-1));
    return $res;
},
jur_EOISet = $rt_classWithoutFields(jur_AbstractSet),
jur_EOISet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    if ($stringIndex < (!$matchResult.$transparentBounds ? $matchResult.$rightBound : $testString.$nativeString.length))
        return (-1);
    $matchResult.$hitEnd = 1;
    $matchResult.$requireEnd = 1;
    return $this.$next1.$matches($stringIndex, $testString, $matchResult);
},
jur_EOISet_hasConsumed = ($this, $matchResult) => {
    return 0;
};
function jur_MultiLineSOLSet() {
    jur_AbstractSet.call(this);
    this.$lt1 = null;
}
let jur_MultiLineSOLSet_matches = ($this, $strIndex, $testString, $matchResult) => {
    let var$4, var$5, var$6;
    a: {
        if ($strIndex != $matchResult.$rightBound) {
            if (!$strIndex)
                break a;
            if ($matchResult.$anchoringBounds && $strIndex == $matchResult.$leftBound)
                break a;
            var$4 = $this.$lt1;
            var$5 = $strIndex - 1 | 0;
            var$6 = $testString;
            if (var$4.$isAfterLineTerminator(jl_String_charAt(var$6, var$5), jl_String_charAt(var$6, $strIndex)))
                break a;
        }
        return (-1);
    }
    return $this.$next1.$matches($strIndex, $testString, $matchResult);
},
jur_MultiLineSOLSet_hasConsumed = ($this, $matchResult) => {
    return 0;
},
jur_DotAllSet = $rt_classWithoutFields(jur_JointSet),
jur_DotAllSet__init_ = $this => {
    jur_AbstractSet__init_($this);
},
jur_DotAllSet__init_0 = () => {
    let var_0 = new jur_DotAllSet();
    jur_DotAllSet__init_(var_0);
    return var_0;
},
jur_DotAllSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $strLength, var$5, var$6, $high;
    $strLength = $matchResult.$rightBound;
    var$5 = $stringIndex + 1 | 0;
    if (var$5 > $strLength) {
        $matchResult.$hitEnd = 1;
        return (-1);
    }
    var$6 = $testString;
    $high = jl_String_charAt(var$6, $stringIndex);
    if (jl_Character_isHighSurrogate($high)) {
        $stringIndex = $stringIndex + 2 | 0;
        if ($stringIndex <= $strLength && jl_Character_isSurrogatePair($high, jl_String_charAt(var$6, var$5)))
            return $this.$next1.$matches($stringIndex, $testString, $matchResult);
    }
    return $this.$next1.$matches(var$5, $testString, $matchResult);
},
jur_DotAllSet_setNext = ($this, $next) => {
    $this.$next1 = $next;
},
jur_DotAllSet_getType = $this => {
    return (-2147483602);
},
jur_DotAllSet_hasConsumed = ($this, $matchResult) => {
    return 1;
};
function jur_DotSet() {
    jur_JointSet.call(this);
    this.$lt0 = null;
}
let jur_DotSet__init_ = ($this, $lt) => {
    jur_AbstractSet__init_($this);
    $this.$lt0 = $lt;
},
jur_DotSet__init_0 = var_0 => {
    let var_1 = new jur_DotSet();
    jur_DotSet__init_(var_1, var_0);
    return var_1;
},
jur_DotSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $strLength, var$5, var$6, $high, $low;
    $strLength = $matchResult.$rightBound;
    var$5 = $stringIndex + 1 | 0;
    if (var$5 > $strLength) {
        $matchResult.$hitEnd = 1;
        return (-1);
    }
    var$6 = $testString;
    $high = jl_String_charAt(var$6, $stringIndex);
    if (jl_Character_isHighSurrogate($high)) {
        $stringIndex = $stringIndex + 2 | 0;
        if ($stringIndex <= $strLength) {
            $low = jl_String_charAt(var$6, var$5);
            if (jl_Character_isSurrogatePair($high, $low))
                return $this.$lt0.$isLineTerminator(jl_Character_toCodePoint($high, $low)) ? (-1) : $this.$next1.$matches($stringIndex, $testString, $matchResult);
        }
    }
    return $this.$lt0.$isLineTerminator($high) ? (-1) : $this.$next1.$matches(var$5, $testString, $matchResult);
},
jur_DotSet_setNext = ($this, $next) => {
    $this.$next1 = $next;
},
jur_DotSet_getType = $this => {
    return (-2147483602);
},
jur_DotSet_hasConsumed = ($this, $matchResult) => {
    return 1;
};
function jur_UEOLSet() {
    jur_AbstractSet.call(this);
    this.$consCounter3 = 0;
}
let jur_UEOLSet__init_0 = ($this, $counter) => {
    jur_AbstractSet__init_($this);
    $this.$consCounter3 = $counter;
},
jur_UEOLSet__init_ = var_0 => {
    let var_1 = new jur_UEOLSet();
    jur_UEOLSet__init_0(var_1, var_0);
    return var_1;
},
jur_UEOLSet_matches = ($this, $strIndex, $testString, $matchResult) => {
    let $rightBound;
    $rightBound = $matchResult.$anchoringBounds ? $matchResult.$rightBound : $testString.$nativeString.length;
    if ($strIndex >= $rightBound) {
        jur_MatchResultImpl_setConsumed($matchResult, $this.$consCounter3, 0);
        return $this.$next1.$matches($strIndex, $testString, $matchResult);
    }
    if (($rightBound - $strIndex | 0) == 1 && jl_String_charAt($testString, $strIndex) == 10) {
        jur_MatchResultImpl_setConsumed($matchResult, $this.$consCounter3, 1);
        return $this.$next1.$matches($strIndex + 1 | 0, $testString, $matchResult);
    }
    return (-1);
},
jur_UEOLSet_hasConsumed = ($this, $matchResult) => {
    let $res;
    $res = !jur_MatchResultImpl_getConsumed($matchResult, $this.$consCounter3) ? 0 : 1;
    jur_MatchResultImpl_setConsumed($matchResult, $this.$consCounter3, (-1));
    return $res;
};
function jur_UMultiLineEOLSet() {
    jur_AbstractSet.call(this);
    this.$consCounter2 = 0;
}
let jur_UMultiLineEOLSet__init_ = ($this, $counter) => {
    jur_AbstractSet__init_($this);
    $this.$consCounter2 = $counter;
},
jur_UMultiLineEOLSet__init_0 = var_0 => {
    let var_1 = new jur_UMultiLineEOLSet();
    jur_UMultiLineEOLSet__init_(var_1, var_0);
    return var_1;
},
jur_UMultiLineEOLSet_matches = ($this, $strIndex, $testString, $matchResult) => {
    if (($matchResult.$anchoringBounds ? $matchResult.$rightBound - $strIndex | 0 : $testString.$nativeString.length - $strIndex | 0) <= 0) {
        jur_MatchResultImpl_setConsumed($matchResult, $this.$consCounter2, 0);
        return $this.$next1.$matches($strIndex, $testString, $matchResult);
    }
    if (jl_String_charAt($testString, $strIndex) != 10)
        return (-1);
    jur_MatchResultImpl_setConsumed($matchResult, $this.$consCounter2, 1);
    return $this.$next1.$matches($strIndex + 1 | 0, $testString, $matchResult);
},
jur_UMultiLineEOLSet_hasConsumed = ($this, $matchResult) => {
    let $res;
    $res = !jur_MatchResultImpl_getConsumed($matchResult, $this.$consCounter2) ? 0 : 1;
    jur_MatchResultImpl_setConsumed($matchResult, $this.$consCounter2, (-1));
    return $res;
};
function jur_MultiLineEOLSet() {
    jur_AbstractSet.call(this);
    this.$consCounter = 0;
}
let jur_MultiLineEOLSet__init_0 = ($this, $counter) => {
    jur_AbstractSet__init_($this);
    $this.$consCounter = $counter;
},
jur_MultiLineEOLSet__init_ = var_0 => {
    let var_1 = new jur_MultiLineEOLSet();
    jur_MultiLineEOLSet__init_0(var_1, var_0);
    return var_1;
},
jur_MultiLineEOLSet_matches = ($this, $strIndex, $testString, $matchResult) => {
    let $strDif, $ch1, $ch2, var$7;
    $strDif = $matchResult.$anchoringBounds ? $matchResult.$rightBound - $strIndex | 0 : $testString.$nativeString.length - $strIndex | 0;
    if (!$strDif) {
        jur_MatchResultImpl_setConsumed($matchResult, $this.$consCounter, 0);
        return $this.$next1.$matches($strIndex, $testString, $matchResult);
    }
    if ($strDif < 2) {
        $ch1 = jl_String_charAt($testString, $strIndex);
        $ch2 = 97;
    } else {
        var$7 = $testString;
        $ch1 = jl_String_charAt(var$7, $strIndex);
        $ch2 = jl_String_charAt(var$7, $strIndex + 1 | 0);
    }
    switch ($ch1) {
        case 10:
        case 133:
        case 8232:
        case 8233:
            jur_MatchResultImpl_setConsumed($matchResult, $this.$consCounter, 0);
            return $this.$next1.$matches($strIndex, $testString, $matchResult);
        case 13:
            if ($ch2 != 10) {
                jur_MatchResultImpl_setConsumed($matchResult, $this.$consCounter, 0);
                return $this.$next1.$matches($strIndex, $testString, $matchResult);
            }
            jur_MatchResultImpl_setConsumed($matchResult, $this.$consCounter, 0);
            return $this.$next1.$matches($strIndex, $testString, $matchResult);
        default:
    }
    return (-1);
},
jur_MultiLineEOLSet_hasConsumed = ($this, $matchResult) => {
    let $res;
    $res = !jur_MatchResultImpl_getConsumed($matchResult, $this.$consCounter) ? 0 : 1;
    jur_MatchResultImpl_setConsumed($matchResult, $this.$consCounter, (-1));
    return $res;
};
function jur_CIBackReferenceSet() {
    let a = this; jur_JointSet.call(a);
    a.$referencedGroup = 0;
    a.$consCounter1 = 0;
}
let jur_CIBackReferenceSet__init_ = ($this, $groupIndex, $consCounter) => {
    jur_AbstractSet__init_($this);
    $this.$referencedGroup = $groupIndex;
    $this.$consCounter1 = $consCounter;
},
jur_CIBackReferenceSet__init_0 = (var_0, var_1) => {
    let var_2 = new jur_CIBackReferenceSet();
    jur_CIBackReferenceSet__init_(var_2, var_0, var_1);
    return var_2;
},
jur_CIBackReferenceSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $group, $i, var$6, var$7, var$8;
    $group = jur_CIBackReferenceSet_getString($this, $matchResult);
    if ($group !== null && ($stringIndex + $group.$nativeString.length | 0) <= $matchResult.$rightBound) {
        $i = 0;
        while (true) {
            if ($i >= $group.$nativeString.length) {
                jur_MatchResultImpl_setConsumed($matchResult, $this.$consCounter1, $group.$nativeString.length);
                return $this.$next1.$matches($stringIndex + $group.$nativeString.length | 0, $testString, $matchResult);
            }
            var$6 = jl_String_charAt($group, $i);
            var$7 = $stringIndex + $i | 0;
            var$8 = $testString;
            if (var$6 != jl_String_charAt(var$8, var$7) && jur_Pattern_getSupplement(jl_String_charAt($group, $i)) != jl_String_charAt(var$8, var$7))
                break;
            $i = $i + 1 | 0;
        }
        return (-1);
    }
    return (-1);
},
jur_CIBackReferenceSet_setNext = ($this, $next) => {
    $this.$next1 = $next;
},
jur_CIBackReferenceSet_getString = ($this, $matchResult) => {
    let var$2, var$3;
    var$2 = $this.$referencedGroup;
    var$3 = jur_MatchResultImpl_getStart($matchResult, var$2);
    var$2 = jur_MatchResultImpl_getEnd($matchResult, var$2);
    return (var$2 | var$3 | (var$2 - var$3 | 0)) >= 0 && var$2 <= $matchResult.$string3.$nativeString.length ? jl_String_substring($matchResult.$string3, var$3, var$2) : null;
},
jur_CIBackReferenceSet_hasConsumed = ($this, $matchResult) => {
    let $res;
    $res = !jur_MatchResultImpl_getConsumed($matchResult, $this.$consCounter1) ? 0 : 1;
    jur_MatchResultImpl_setConsumed($matchResult, $this.$consCounter1, (-1));
    return $res;
},
jur_BackReferenceSet = $rt_classWithoutFields(jur_CIBackReferenceSet),
jur_BackReferenceSet__init_0 = ($this, $groupIndex, $consCounter) => {
    jur_CIBackReferenceSet__init_($this, $groupIndex, $consCounter);
},
jur_BackReferenceSet__init_ = (var_0, var_1) => {
    let var_2 = new jur_BackReferenceSet();
    jur_BackReferenceSet__init_0(var_2, var_0, var_1);
    return var_2;
},
jur_BackReferenceSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $group, $shift;
    $group = jur_CIBackReferenceSet_getString($this, $matchResult);
    if ($group !== null && ($stringIndex + $group.$nativeString.length | 0) <= $matchResult.$rightBound) {
        $shift = !jl_String_startsWith0($testString, $group, $stringIndex) ? (-1) : $group.$nativeString.length;
        if ($shift < 0)
            return (-1);
        jur_MatchResultImpl_setConsumed($matchResult, $this.$consCounter1, $shift);
        return $this.$next1.$matches($stringIndex + $shift | 0, $testString, $matchResult);
    }
    return (-1);
},
jur_BackReferenceSet_find = ($this, $strIndex, $testString, $matchResult) => {
    let $group, $strLength, $testStr;
    $group = jur_CIBackReferenceSet_getString($this, $matchResult);
    $strLength = $matchResult.$leftBound;
    if ($group !== null && ($strIndex + $group.$nativeString.length | 0) <= $strLength) {
        $testStr = $testString;
        while (true) {
            if ($strIndex > $strLength)
                return (-1);
            $strIndex = jl_String_indexOf1($testStr, $group, $strIndex);
            if ($strIndex < 0)
                return (-1);
            if ($this.$next1.$matches($strIndex + $group.$nativeString.length | 0, $testString, $matchResult) >= 0)
                break;
            $strIndex = $strIndex + 1 | 0;
        }
        return $strIndex;
    }
    return (-1);
},
jur_BackReferenceSet_findBack = ($this, $strIndex, $lastIndex, $testString, $matchResult) => {
    let $group, $testStr, var$7;
    $group = jur_CIBackReferenceSet_getString($this, $matchResult);
    if ($group === null)
        return (-1);
    $testStr = $testString;
    a: {
        while (true) {
            if ($lastIndex < $strIndex)
                return (-1);
            $lastIndex = jl_Math_min($lastIndex, $testStr.$nativeString.length - $group.$nativeString.length | 0);
            b: {
                c: while (true) {
                    if ($lastIndex < 0) {
                        $lastIndex = (-1);
                        break b;
                    }
                    var$7 = 0;
                    while (true) {
                        if (var$7 >= $group.$nativeString.length)
                            break c;
                        if (jl_String_charAt($testStr, $lastIndex + var$7 | 0) != jl_String_charAt($group, var$7))
                            break;
                        var$7 = var$7 + 1 | 0;
                    }
                    $lastIndex = $lastIndex + (-1) | 0;
                }
            }
            if ($lastIndex < 0)
                break a;
            if ($lastIndex < $strIndex)
                break a;
            if ($this.$next1.$matches($lastIndex + $group.$nativeString.length | 0, $testString, $matchResult) >= 0)
                break;
            $lastIndex = $lastIndex + (-1) | 0;
        }
        return $lastIndex;
    }
    return (-1);
},
jur_BackReferenceSet_first = ($this, $set) => {
    return 1;
},
jur_UCIBackReferenceSet = $rt_classWithoutFields(jur_CIBackReferenceSet),
jur_UCIBackReferenceSet__init_ = ($this, $groupIndex, $consCounter) => {
    jur_CIBackReferenceSet__init_($this, $groupIndex, $consCounter);
},
jur_UCIBackReferenceSet__init_0 = (var_0, var_1) => {
    let var_2 = new jur_UCIBackReferenceSet();
    jur_UCIBackReferenceSet__init_(var_2, var_0, var_1);
    return var_2;
},
jur_UCIBackReferenceSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $group, $i, var$6, var$7;
    $group = jur_CIBackReferenceSet_getString($this, $matchResult);
    if ($group !== null && ($stringIndex + $group.$nativeString.length | 0) <= $matchResult.$rightBound) {
        $i = 0;
        while (true) {
            if ($i >= $group.$nativeString.length) {
                jur_MatchResultImpl_setConsumed($matchResult, $this.$consCounter1, $group.$nativeString.length);
                return $this.$next1.$matches($stringIndex + $group.$nativeString.length | 0, $testString, $matchResult);
            }
            var$6 = jl_Character_toLowerCase(jl_Character_toUpperCase(jl_String_charAt($group, $i)));
            var$7 = $stringIndex + $i | 0;
            if (var$6 != jl_Character_toLowerCase(jl_Character_toUpperCase(jl_String_charAt($testString, var$7))))
                break;
            $i = $i + 1 | 0;
        }
        return (-1);
    }
    return (-1);
},
jl_StringBuffer = $rt_classWithoutFields(jl_AbstractStringBuilder),
jl_StringBuffer_insert0 = ($this, var$1, var$2, var$3, var$4) => {
    jl_AbstractStringBuilder_insert($this, var$1, var$2, var$3, var$4);
    return $this;
},
jl_StringBuffer_append = ($this, var$1, var$2, var$3) => {
    jl_AbstractStringBuilder_append2($this, var$1, var$2, var$3);
    return $this;
},
jl_StringBuffer_ensureCapacity = ($this, var$1) => {
    jl_AbstractStringBuilder_ensureCapacity($this, var$1);
},
jl_StringBuffer_insert = ($this, var$1, var$2) => {
    jl_AbstractStringBuilder_insert0($this, var$1, var$2);
    return $this;
};
function jur_SequenceSet() {
    let a = this; jur_LeafSet.call(a);
    a.$string = null;
    a.$leftToRight = null;
    a.$rightToLeft = null;
}
let jur_SequenceSet_accepts = ($this, $strIndex, $testString) => {
    return !jur_SequenceSet_startsWith($this, $testString, $strIndex) ? (-1) : $this.$charCount0;
},
jur_SequenceSet_find = ($this, $strIndex, $testString, $matchResult) => {
    let $strLength, var$5, var$6;
    $strLength = $matchResult.$rightBound;
    while (true) {
        if ($strIndex > $strLength)
            return (-1);
        var$5 = jl_String_charAt($this.$string, $this.$charCount0 - 1 | 0);
        a: {
            while (true) {
                var$6 = $this.$charCount0;
                if ($strIndex > ($strLength - var$6 | 0)) {
                    $strIndex = (-1);
                    break a;
                }
                var$6 = ($strIndex + var$6 | 0) - 1 | 0;
                var$6 = jl_String_charAt($testString, var$6);
                if (var$6 == var$5 && jur_SequenceSet_startsWith($this, $testString, $strIndex))
                    break;
                $strIndex = $strIndex + jur_SequenceSet$IntHash_get($this.$leftToRight, var$6) | 0;
            }
        }
        if ($strIndex < 0)
            return (-1);
        if ($this.$next1.$matches($strIndex + $this.$charCount0 | 0, $testString, $matchResult) >= 0)
            break;
        $strIndex = $strIndex + 1 | 0;
    }
    return $strIndex;
},
jur_SequenceSet_findBack = ($this, $strIndex, $lastIndex, $testString, $matchResult) => {
    let var$5, var$6, var$7;
    while (true) {
        if ($lastIndex < $strIndex)
            return (-1);
        var$5 = jl_String_charAt($this.$string, 0);
        var$6 = $testString;
        var$7 = (var$6.$nativeString.length - $lastIndex | 0) - $this.$charCount0 | 0;
        if (var$7 <= 0)
            $lastIndex = $lastIndex + var$7 | 0;
        a: {
            while (true) {
                if ($lastIndex < $strIndex) {
                    $lastIndex = (-1);
                    break a;
                }
                var$7 = jl_String_charAt(var$6, $lastIndex);
                if (var$7 == var$5 && jur_SequenceSet_startsWith($this, $testString, $lastIndex))
                    break;
                $lastIndex = $lastIndex - jur_SequenceSet$IntHash_get($this.$rightToLeft, var$7) | 0;
            }
        }
        if ($lastIndex < 0)
            return (-1);
        if ($this.$next1.$matches($lastIndex + $this.$charCount0 | 0, $testString, $matchResult) >= 0)
            break;
        $lastIndex = $lastIndex + (-1) | 0;
    }
    return $lastIndex;
},
jur_SequenceSet_first = ($this, $set) => {
    let var$2;
    if ($set instanceof jur_CharSet)
        return $set.$ch0 != jl_String_charAt($this.$string, 0) ? 0 : 1;
    if ($set instanceof jur_RangeSet)
        return jur_RangeSet_accepts($set, 0, jl_String_substring($this.$string, 0, 1)) <= 0 ? 0 : 1;
    if (!($set instanceof jur_SupplRangeSet)) {
        if (!($set instanceof jur_SupplCharSet))
            return 1;
        return $this.$string.$nativeString.length > 1 && $set.$ch1 == jl_Character_toCodePoint(jl_String_charAt($this.$string, 0), jl_String_charAt($this.$string, 1)) ? 1 : 0;
    }
    a: {
        b: {
            $set = $set;
            if (!$set.$contains(jl_String_charAt($this.$string, 0))) {
                if ($this.$string.$nativeString.length <= 1)
                    break b;
                if (!$set.$contains(jl_Character_toCodePoint(jl_String_charAt($this.$string, 0), jl_String_charAt($this.$string, 1))))
                    break b;
            }
            var$2 = 1;
            break a;
        }
        var$2 = 0;
    }
    return var$2;
},
jur_SequenceSet_startsWith = ($this, $str, $from) => {
    let $i, var$4;
    $i = 0;
    while ($i < $this.$charCount0) {
        var$4 = $i + $from | 0;
        if (jl_String_charAt($str, var$4) != jl_String_charAt($this.$string, $i))
            return 0;
        $i = $i + 1 | 0;
    }
    return 1;
};
function jur_UCISequenceSet() {
    jur_LeafSet.call(this);
    this.$string1 = null;
}
let jur_UCISequenceSet__init_ = ($this, $substring) => {
    let $res, $i;
    jur_LeafSet__init_($this);
    $res = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_($res);
    $i = 0;
    while ($i < $substring.$length0) {
        jl_AbstractStringBuilder_append($res, jl_Character_toLowerCase(jl_Character_toUpperCase(jl_AbstractStringBuilder_charAt($substring, $i))));
        $i = $i + 1 | 0;
    }
    $this.$string1 = jl_AbstractStringBuilder_toString($res);
    $this.$charCount0 = $res.$length0;
},
jur_UCISequenceSet__init_0 = var_0 => {
    let var_1 = new jur_UCISequenceSet();
    jur_UCISequenceSet__init_(var_1, var_0);
    return var_1;
},
jur_UCISequenceSet_accepts = ($this, $strIndex, $testString) => {
    let $i, var$4, var$5;
    $i = 0;
    while (true) {
        if ($i >= $this.$string1.$nativeString.length)
            return $this.$string1.$nativeString.length;
        var$4 = jl_String_charAt($this.$string1, $i);
        var$5 = $strIndex + $i | 0;
        if (var$4 != jl_Character_toLowerCase(jl_Character_toUpperCase(jl_String_charAt($testString, var$5))))
            break;
        $i = $i + 1 | 0;
    }
    return (-1);
};
function jur_CISequenceSet() {
    jur_LeafSet.call(this);
    this.$string0 = null;
}
let jur_CISequenceSet__init_ = ($this, $substring) => {
    jur_LeafSet__init_($this);
    $this.$string0 = jl_AbstractStringBuilder_toString($substring);
    $this.$charCount0 = $substring.$length0;
},
jur_CISequenceSet__init_0 = var_0 => {
    let var_1 = new jur_CISequenceSet();
    jur_CISequenceSet__init_(var_1, var_0);
    return var_1;
},
jur_CISequenceSet_accepts = ($this, $strIndex, $testString) => {
    let $i, var$4, var$5, var$6;
    $i = 0;
    while (true) {
        if ($i >= $this.$string0.$nativeString.length)
            return $this.$string0.$nativeString.length;
        var$4 = jl_String_charAt($this.$string0, $i);
        var$5 = $strIndex + $i | 0;
        var$6 = $testString;
        if (var$4 != jl_String_charAt(var$6, var$5) && jur_Pattern_getSupplement(jl_String_charAt($this.$string0, $i)) != jl_String_charAt(var$6, var$5))
            break;
        $i = $i + 1 | 0;
    }
    return (-1);
},
ju_Set = $rt_classWithoutFields(0),
ju_AbstractSet = $rt_classWithoutFields(ju_AbstractCollection),
ju_TemplateCollections$AbstractImmutableSet = $rt_classWithoutFields(ju_AbstractSet),
ju_Collections$1 = $rt_classWithoutFields(ju_TemplateCollections$AbstractImmutableSet),
ju_TemplateCollections$AbstractImmutableMap = $rt_classWithoutFields(ju_AbstractMap),
ju_TemplateCollections$AbstractImmutableMap_put = ($this, $key, $value) => {
    $key = new jl_UnsupportedOperationException;
    jl_RuntimeException__init_($key);
    $rt_throw($key);
},
ju_Collections$2 = $rt_classWithoutFields(ju_TemplateCollections$AbstractImmutableMap),
ju_TemplateCollections$AbstractImmutableList = $rt_classWithoutFields(ju_AbstractList),
ju_Collections$3 = $rt_classWithoutFields(ju_TemplateCollections$AbstractImmutableList),
ju_Iterator = $rt_classWithoutFields(0),
ju_Collections$4 = $rt_classWithoutFields(),
ju_ListIterator = $rt_classWithoutFields(0),
ju_Collections$5 = $rt_classWithoutFields(),
ju_Collections$_clinit_$lambda$_59_0 = $rt_classWithoutFields(),
jl_NegativeArraySizeException = $rt_classWithoutFields(jl_RuntimeException);
function jur_UCISupplCharSet() {
    jur_LeafSet.call(this);
    this.$ch4 = 0;
}
let jur_UCISupplCharSet_accepts = ($this, $strIndex, $testString) => {
    let $low, $high;
    $low = $strIndex + 1 | 0;
    $testString = $testString;
    $high = jl_String_charAt($testString, $strIndex);
    $low = jl_String_charAt($testString, $low);
    return $this.$ch4 != jl_Character_toLowerCase0(jl_Character_toUpperCase0(jl_Character_toCodePoint($high, $low))) ? (-1) : 2;
};
function jur_LowSurrogateCharSet() {
    jur_JointSet.call(this);
    this.$low = 0;
}
let jur_LowSurrogateCharSet__init_0 = ($this, $low) => {
    jur_AbstractSet__init_($this);
    $this.$low = $low;
},
jur_LowSurrogateCharSet__init_ = var_0 => {
    let var_1 = new jur_LowSurrogateCharSet();
    jur_LowSurrogateCharSet__init_0(var_1, var_0);
    return var_1;
},
jur_LowSurrogateCharSet_setNext = ($this, $next) => {
    $this.$next1 = $next;
},
jur_LowSurrogateCharSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let var$4, var$5, $low;
    var$4 = $stringIndex + 1 | 0;
    if (var$4 > $matchResult.$rightBound) {
        $matchResult.$hitEnd = 1;
        return (-1);
    }
    var$5 = $testString;
    $low = jl_String_charAt(var$5, $stringIndex);
    if ($stringIndex > $matchResult.$leftBound && jl_Character_isHighSurrogate(jl_String_charAt(var$5, $stringIndex - 1 | 0)))
        return (-1);
    if ($this.$low != $low)
        return (-1);
    return $this.$next1.$matches(var$4, $testString, $matchResult);
},
jur_LowSurrogateCharSet_find = ($this, $strIndex, $testString, $matchResult) => {
    let $testStr, $startStr, $strLength, var$7, var$8;
    if (!($testString instanceof jl_String))
        return jur_AbstractSet_find($this, $strIndex, $testString, $matchResult);
    $testStr = $testString;
    $startStr = $matchResult.$leftBound;
    $strLength = $matchResult.$rightBound;
    while (true) {
        if ($strIndex >= $strLength)
            return (-1);
        var$7 = jl_String_indexOf0($testStr, $this.$low, $strIndex);
        if (var$7 < 0)
            return (-1);
        if (var$7 > $startStr && jl_Character_isHighSurrogate(jl_String_charAt($testStr, var$7 - 1 | 0))) {
            $strIndex = var$7 + 1 | 0;
            continue;
        }
        var$8 = $this.$next1;
        $strIndex = var$7 + 1 | 0;
        if (var$8.$matches($strIndex, $testString, $matchResult) >= 0)
            break;
    }
    return var$7;
},
jur_LowSurrogateCharSet_findBack = ($this, $strIndex, $lastIndex, $testString, $matchResult) => {
    let $startStr, $testStr;
    if (!($testString instanceof jl_String))
        return jur_AbstractSet_findBack($this, $strIndex, $lastIndex, $testString, $matchResult);
    $startStr = $matchResult.$leftBound;
    $testStr = $testString;
    a: {
        while (true) {
            if ($lastIndex < $strIndex)
                return (-1);
            $lastIndex = jl_String_lastIndexOf($testStr, $this.$low, $lastIndex);
            if ($lastIndex < 0)
                break a;
            if ($lastIndex < $strIndex)
                break a;
            if ($lastIndex > $startStr && jl_Character_isHighSurrogate(jl_String_charAt($testStr, $lastIndex - 1 | 0))) {
                $lastIndex = $lastIndex + (-2) | 0;
                continue;
            }
            if ($this.$next1.$matches($lastIndex + 1 | 0, $testString, $matchResult) >= 0)
                break;
            $lastIndex = $lastIndex + (-1) | 0;
        }
        return $lastIndex;
    }
    return (-1);
},
jur_LowSurrogateCharSet_first = ($this, $set) => {
    if ($set instanceof jur_CharSet)
        return 0;
    if ($set instanceof jur_RangeSet)
        return 0;
    if ($set instanceof jur_SupplRangeSet)
        return 0;
    if ($set instanceof jur_SupplCharSet)
        return 0;
    if ($set instanceof jur_HighSurrogateCharSet)
        return 0;
    if (!($set instanceof jur_LowSurrogateCharSet))
        return 1;
    return $set.$low != $this.$low ? 0 : 1;
},
jur_LowSurrogateCharSet_hasConsumed = ($this, $matchResult) => {
    return 1;
};
function jur_HighSurrogateCharSet() {
    jur_JointSet.call(this);
    this.$high = 0;
}
let jur_HighSurrogateCharSet__init_0 = ($this, $high) => {
    jur_AbstractSet__init_($this);
    $this.$high = $high;
},
jur_HighSurrogateCharSet__init_ = var_0 => {
    let var_1 = new jur_HighSurrogateCharSet();
    jur_HighSurrogateCharSet__init_0(var_1, var_0);
    return var_1;
},
jur_HighSurrogateCharSet_setNext = ($this, $next) => {
    $this.$next1 = $next;
},
jur_HighSurrogateCharSet_matches = ($this, $stringIndex, $testString, $matchResult) => {
    let $strLength, var$5, $low, var$7, $high;
    $strLength = $matchResult.$rightBound;
    var$5 = $stringIndex + 1 | 0;
    $low = $rt_compare(var$5, $strLength);
    if ($low > 0) {
        $matchResult.$hitEnd = 1;
        return (-1);
    }
    var$7 = $testString;
    $high = jl_String_charAt(var$7, $stringIndex);
    if ($low < 0 && jl_Character_isLowSurrogate(jl_String_charAt(var$7, var$5)))
        return (-1);
    if ($this.$high != $high)
        return (-1);
    return $this.$next1.$matches(var$5, $testString, $matchResult);
},
jur_HighSurrogateCharSet_find = ($this, $strIndex, $testString, $matchResult) => {
    let $testStr, $strLength, var$6;
    if (!($testString instanceof jl_String))
        return jur_AbstractSet_find($this, $strIndex, $testString, $matchResult);
    $testStr = $testString;
    $strLength = $matchResult.$rightBound;
    while (true) {
        if ($strIndex >= $strLength)
            return (-1);
        var$6 = jl_String_indexOf0($testStr, $this.$high, $strIndex);
        if (var$6 < 0)
            return (-1);
        $strIndex = var$6 + 1 | 0;
        if ($strIndex < $strLength && jl_Character_isLowSurrogate(jl_String_charAt($testStr, $strIndex))) {
            $strIndex = var$6 + 2 | 0;
            continue;
        }
        if ($this.$next1.$matches($strIndex, $testString, $matchResult) >= 0)
            break;
    }
    return var$6;
},
jur_HighSurrogateCharSet_findBack = ($this, $strIndex, $lastIndex, $testString, $matchResult) => {
    let $testStr, $strLength, var$7;
    if (!($testString instanceof jl_String))
        return jur_AbstractSet_findBack($this, $strIndex, $lastIndex, $testString, $matchResult);
    $testStr = $testString;
    $strLength = $matchResult.$rightBound;
    a: {
        while (true) {
            if ($lastIndex < $strIndex)
                return (-1);
            $lastIndex = jl_String_lastIndexOf($testStr, $this.$high, $lastIndex);
            if ($lastIndex < 0)
                break a;
            if ($lastIndex < $strIndex)
                break a;
            var$7 = $lastIndex + 1 | 0;
            if (var$7 < $strLength && jl_Character_isLowSurrogate(jl_String_charAt($testStr, var$7))) {
                $lastIndex = $lastIndex + (-1) | 0;
                continue;
            }
            if ($this.$next1.$matches(var$7, $testString, $matchResult) >= 0)
                break;
            $lastIndex = $lastIndex + (-1) | 0;
        }
        return $lastIndex;
    }
    return (-1);
},
jur_HighSurrogateCharSet_first = ($this, $set) => {
    if ($set instanceof jur_CharSet)
        return 0;
    if ($set instanceof jur_RangeSet)
        return 0;
    if ($set instanceof jur_SupplRangeSet)
        return 0;
    if ($set instanceof jur_SupplCharSet)
        return 0;
    if ($set instanceof jur_LowSurrogateCharSet)
        return 0;
    if (!($set instanceof jur_HighSurrogateCharSet))
        return 1;
    return $set.$high != $this.$high ? 0 : 1;
},
jur_HighSurrogateCharSet_hasConsumed = ($this, $matchResult) => {
    return 1;
};
function jur_SupplCharSet() {
    let a = this; jur_LeafSet.call(a);
    a.$high0 = 0;
    a.$low0 = 0;
    a.$ch1 = 0;
}
let jur_SupplCharSet_accepts = ($this, $strIndex, $testString) => {
    let $low, $high;
    $low = $strIndex + 1 | 0;
    $testString = $testString;
    $high = jl_String_charAt($testString, $strIndex);
    $low = jl_String_charAt($testString, $low);
    return $this.$high0 == $high && $this.$low0 == $low ? 2 : (-1);
},
jur_SupplCharSet_find = ($this, $strIndex, $testString, $matchResult) => {
    let $testStr, $strLength, $ch;
    if (!($testString instanceof jl_String))
        return jur_AbstractSet_find($this, $strIndex, $testString, $matchResult);
    $testStr = $testString;
    $strLength = $matchResult.$rightBound;
    while ($strIndex < $strLength) {
        $strIndex = jl_String_indexOf0($testStr, $this.$high0, $strIndex);
        if ($strIndex < 0)
            return (-1);
        $strIndex = $strIndex + 1 | 0;
        if ($strIndex >= $strLength)
            continue;
        $ch = jl_String_charAt($testStr, $strIndex);
        if ($this.$low0 == $ch && $this.$next1.$matches($strIndex + 1 | 0, $testString, $matchResult) >= 0)
            return $strIndex + (-1) | 0;
        $strIndex = $strIndex + 1 | 0;
    }
    return (-1);
},
jur_SupplCharSet_findBack = ($this, $strIndex, $lastIndex, $testString, $matchResult) => {
    let $testStr;
    if (!($testString instanceof jl_String))
        return jur_AbstractSet_findBack($this, $strIndex, $lastIndex, $testString, $matchResult);
    $testStr = $testString;
    a: {
        while (true) {
            if ($lastIndex < $strIndex)
                return (-1);
            $lastIndex = jl_String_lastIndexOf($testStr, $this.$low0, $lastIndex) + (-1) | 0;
            if ($lastIndex < 0)
                break a;
            if ($lastIndex < $strIndex)
                break a;
            if ($this.$high0 == jl_String_charAt($testStr, $lastIndex) && $this.$next1.$matches($lastIndex + 2 | 0, $testString, $matchResult) >= 0)
                break;
            $lastIndex = $lastIndex + (-1) | 0;
        }
        return $lastIndex;
    }
    return (-1);
},
jur_SupplCharSet_first = ($this, $set) => {
    if ($set instanceof jur_SupplCharSet)
        return $set.$ch1 != $this.$ch1 ? 0 : 1;
    if ($set instanceof jur_SupplRangeSet)
        return $set.$contains($this.$ch1);
    if ($set instanceof jur_CharSet)
        return 0;
    if (!($set instanceof jur_RangeSet))
        return 1;
    return 0;
},
jur_AbstractLineTerminator$1 = $rt_classWithoutFields(jur_AbstractLineTerminator),
jur_AbstractLineTerminator$1_isLineTerminator = ($this, $ch) => {
    return $ch != 10 ? 0 : 1;
},
jur_AbstractLineTerminator$1_isAfterLineTerminator = ($this, $ch, $ch2) => {
    return $ch != 10 ? 0 : 1;
},
jur_AbstractLineTerminator$2 = $rt_classWithoutFields(jur_AbstractLineTerminator),
jur_AbstractLineTerminator$2_isLineTerminator = ($this, $ch) => {
    return $ch != 10 && $ch != 13 && $ch != 133 && ($ch | 1) != 8233 ? 0 : 1;
},
jur_AbstractLineTerminator$2_isAfterLineTerminator = ($this, $ch, $ch2) => {
    a: {
        b: {
            if ($ch != 10 && $ch != 133 && ($ch | 1) != 8233) {
                if ($ch != 13)
                    break b;
                if ($ch2 == 10)
                    break b;
            }
            $ch = 1;
            break a;
        }
        $ch = 0;
    }
    return $ch;
};
function jur_SequenceSet$IntHash() {
    let a = this; jl_Object.call(a);
    a.$table = null;
    a.$values = null;
    a.$mask = 0;
    a.$size1 = 0;
}
let jur_SequenceSet$IntHash__init_0 = ($this, $size) => {
    let var$2, var$3;
    while (true) {
        var$2 = $this.$mask;
        if ($size < var$2)
            break;
        $this.$mask = var$2 << 1 | 1;
    }
    var$3 = var$2 << 1 | 1;
    $this.$mask = var$3;
    var$3 = var$3 + 1 | 0;
    $this.$table = $rt_createIntArray(var$3);
    $this.$values = $rt_createIntArray(var$3);
    $this.$size1 = $size;
},
jur_SequenceSet$IntHash__init_ = var_0 => {
    let var_1 = new jur_SequenceSet$IntHash();
    jur_SequenceSet$IntHash__init_0(var_1, var_0);
    return var_1;
},
jur_SequenceSet$IntHash_put = ($this, $key, $value) => {
    let $i, var$4, $hashCode, var$6;
    $i = 0;
    var$4 = $this.$mask;
    $hashCode = $key & var$4;
    while (true) {
        var$6 = $this.$table.data;
        if (!var$6[$hashCode])
            break;
        if (var$6[$hashCode] == $key)
            break;
        $i = ($i + 1 | 0) & var$4;
        $hashCode = ($hashCode + $i | 0) & var$4;
    }
    var$6[$hashCode] = $key;
    $this.$values.data[$hashCode] = $value;
},
jur_SequenceSet$IntHash_get = ($this, $key) => {
    let var$2, $hashCode, $i, $storedKey;
    var$2 = $this.$mask;
    $hashCode = $key & var$2;
    $i = 0;
    while (true) {
        $storedKey = $this.$table.data[$hashCode];
        if (!$storedKey)
            break;
        if ($storedKey == $key)
            return $this.$values.data[$hashCode];
        $i = ($i + 1 | 0) & var$2;
        $hashCode = ($hashCode + $i | 0) & var$2;
    }
    return $this.$size1;
},
jur_AbstractCharClass$LazySpace = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazySpace__init_0 = $this => {
    return;
},
jur_AbstractCharClass$LazySpace__init_ = () => {
    let var_0 = new jur_AbstractCharClass$LazySpace();
    jur_AbstractCharClass$LazySpace__init_0(var_0);
    return var_0;
},
jur_AbstractCharClass$LazySpace_computeValue = $this => {
    return jur_CharClass_add0(jur_CharClass_add(jur_CharClass__init_(), 9, 13), 32);
},
jur_AbstractCharClass$LazyDigit = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyDigit__init_ = $this => {
    return;
},
jur_AbstractCharClass$LazyDigit__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyDigit();
    jur_AbstractCharClass$LazyDigit__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyDigit_computeValue = $this => {
    return jur_CharClass_add(jur_CharClass__init_(), 48, 57);
},
jur_AbstractCharClass$LazyLower = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyLower__init_ = $this => {
    return;
},
jur_AbstractCharClass$LazyLower__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyLower();
    jur_AbstractCharClass$LazyLower__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyLower_computeValue = $this => {
    return jur_CharClass_add(jur_CharClass__init_(), 97, 122);
},
jur_AbstractCharClass$LazyUpper = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyUpper__init_0 = $this => {
    return;
},
jur_AbstractCharClass$LazyUpper__init_ = () => {
    let var_0 = new jur_AbstractCharClass$LazyUpper();
    jur_AbstractCharClass$LazyUpper__init_0(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyUpper_computeValue = $this => {
    return jur_CharClass_add(jur_CharClass__init_(), 65, 90);
},
jur_AbstractCharClass$LazyASCII = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyASCII__init_ = $this => {
    return;
},
jur_AbstractCharClass$LazyASCII__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyASCII();
    jur_AbstractCharClass$LazyASCII__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyASCII_computeValue = $this => {
    return jur_CharClass_add(jur_CharClass__init_(), 0, 127);
},
jur_AbstractCharClass$LazyAlpha = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyAlpha__init_ = $this => {
    return;
},
jur_AbstractCharClass$LazyAlpha__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyAlpha();
    jur_AbstractCharClass$LazyAlpha__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyAlpha_computeValue = $this => {
    return jur_CharClass_add(jur_CharClass_add(jur_CharClass__init_(), 97, 122), 65, 90);
},
jur_AbstractCharClass$LazyAlnum = $rt_classWithoutFields(jur_AbstractCharClass$LazyAlpha),
jur_AbstractCharClass$LazyAlnum__init_0 = $this => {
    return;
},
jur_AbstractCharClass$LazyAlnum__init_ = () => {
    let var_0 = new jur_AbstractCharClass$LazyAlnum();
    jur_AbstractCharClass$LazyAlnum__init_0(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyAlnum_computeValue = $this => {
    return jur_CharClass_add(jur_AbstractCharClass$LazyAlpha_computeValue($this), 48, 57);
},
jur_AbstractCharClass$LazyPunct = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyPunct__init_ = $this => {
    return;
},
jur_AbstractCharClass$LazyPunct__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyPunct();
    jur_AbstractCharClass$LazyPunct__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyPunct_computeValue = $this => {
    return jur_CharClass_add(jur_CharClass_add(jur_CharClass_add(jur_CharClass__init_(), 33, 64), 91, 96), 123, 126);
},
jur_AbstractCharClass$LazyGraph = $rt_classWithoutFields(jur_AbstractCharClass$LazyAlnum),
jur_AbstractCharClass$LazyGraph__init_0 = $this => {
    return;
},
jur_AbstractCharClass$LazyGraph__init_ = () => {
    let var_0 = new jur_AbstractCharClass$LazyGraph();
    jur_AbstractCharClass$LazyGraph__init_0(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyGraph_computeValue = $this => {
    return jur_CharClass_add(jur_CharClass_add(jur_CharClass_add(jur_AbstractCharClass$LazyAlnum_computeValue($this), 33, 64), 91, 96), 123, 126);
},
jur_AbstractCharClass$LazyPrint = $rt_classWithoutFields(jur_AbstractCharClass$LazyGraph),
jur_AbstractCharClass$LazyPrint__init_0 = $this => {
    return;
},
jur_AbstractCharClass$LazyPrint__init_ = () => {
    let var_0 = new jur_AbstractCharClass$LazyPrint();
    jur_AbstractCharClass$LazyPrint__init_0(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyPrint_computeValue = $this => {
    return jur_CharClass_add0(jur_AbstractCharClass$LazyGraph_computeValue($this), 32);
},
jur_AbstractCharClass$LazyBlank = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyBlank__init_0 = $this => {
    return;
},
jur_AbstractCharClass$LazyBlank__init_ = () => {
    let var_0 = new jur_AbstractCharClass$LazyBlank();
    jur_AbstractCharClass$LazyBlank__init_0(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyBlank_computeValue = $this => {
    return jur_CharClass_add0(jur_CharClass_add0(jur_CharClass__init_(), 32), 9);
},
jur_AbstractCharClass$LazyCntrl = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyCntrl__init_0 = $this => {
    return;
};
let jur_AbstractCharClass$LazyCntrl__init_ = () => {
    let var_0 = new jur_AbstractCharClass$LazyCntrl();
    jur_AbstractCharClass$LazyCntrl__init_0(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyCntrl_computeValue = $this => {
    return jur_CharClass_add0(jur_CharClass_add(jur_CharClass__init_(), 0, 31), 127);
},
jur_AbstractCharClass$LazyXDigit = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyXDigit__init_0 = $this => {
    return;
},
jur_AbstractCharClass$LazyXDigit__init_ = () => {
    let var_0 = new jur_AbstractCharClass$LazyXDigit();
    jur_AbstractCharClass$LazyXDigit__init_0(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyXDigit_computeValue = $this => {
    return jur_CharClass_add(jur_CharClass_add(jur_CharClass_add(jur_CharClass__init_(), 48, 57), 97, 102), 65, 70);
},
jur_AbstractCharClass$LazyJavaLowerCase = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaLowerCase__init_ = $this => {
    return;
},
jur_AbstractCharClass$LazyJavaLowerCase__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaLowerCase();
    jur_AbstractCharClass$LazyJavaLowerCase__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaLowerCase_computeValue = $this => {
    let $chCl;
    $chCl = new jur_AbstractCharClass$LazyJavaLowerCase$1;
    $chCl.$this$034 = $this;
    jur_AbstractCharClass__init_($chCl);
    $chCl.$mayContainSupplCodepoints = 1;
    return $chCl;
},
jur_AbstractCharClass$LazyJavaUpperCase = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaUpperCase__init_0 = $this => {
    return;
},
jur_AbstractCharClass$LazyJavaUpperCase__init_ = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaUpperCase();
    jur_AbstractCharClass$LazyJavaUpperCase__init_0(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaUpperCase_computeValue = $this => {
    let $chCl;
    $chCl = new jur_AbstractCharClass$LazyJavaUpperCase$1;
    $chCl.$this$09 = $this;
    jur_AbstractCharClass__init_($chCl);
    $chCl.$mayContainSupplCodepoints = 1;
    return $chCl;
},
jur_AbstractCharClass$LazyJavaWhitespace = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaWhitespace__init_ = $this => {
    return;
},
jur_AbstractCharClass$LazyJavaWhitespace__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaWhitespace();
    jur_AbstractCharClass$LazyJavaWhitespace__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaWhitespace_computeValue = $this => {
    let var$1;
    var$1 = new jur_AbstractCharClass$LazyJavaWhitespace$1;
    var$1.$this$026 = $this;
    jur_AbstractCharClass__init_(var$1);
    return var$1;
},
jur_AbstractCharClass$LazyJavaMirrored = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaMirrored__init_ = $this => {
    return;
},
jur_AbstractCharClass$LazyJavaMirrored__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaMirrored();
    jur_AbstractCharClass$LazyJavaMirrored__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaMirrored_computeValue = $this => {
    let var$1;
    var$1 = new jur_AbstractCharClass$LazyJavaMirrored$1;
    var$1.$this$021 = $this;
    jur_AbstractCharClass__init_(var$1);
    return var$1;
},
jur_AbstractCharClass$LazyJavaDefined = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaDefined__init_0 = $this => {
    return;
},
jur_AbstractCharClass$LazyJavaDefined__init_ = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaDefined();
    jur_AbstractCharClass$LazyJavaDefined__init_0(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaDefined_computeValue = $this => {
    let $chCl;
    $chCl = new jur_AbstractCharClass$LazyJavaDefined$1;
    $chCl.$this$024 = $this;
    jur_AbstractCharClass__init_($chCl);
    ju_BitSet_set($chCl.$lowHighSurrogates, 0, 2048);
    $chCl.$mayContainSupplCodepoints = 1;
    return $chCl;
},
jur_AbstractCharClass$LazyJavaDigit = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaDigit__init_ = $this => {
    return;
},
jur_AbstractCharClass$LazyJavaDigit__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaDigit();
    jur_AbstractCharClass$LazyJavaDigit__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaDigit_computeValue = $this => {
    let $chCl;
    $chCl = new jur_AbstractCharClass$LazyJavaDigit$1;
    $chCl.$this$012 = $this;
    jur_AbstractCharClass__init_($chCl);
    $chCl.$mayContainSupplCodepoints = 1;
    return $chCl;
},
jur_AbstractCharClass$LazyJavaIdentifierIgnorable = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaIdentifierIgnorable__init_ = $this => {
    return;
},
jur_AbstractCharClass$LazyJavaIdentifierIgnorable__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaIdentifierIgnorable();
    jur_AbstractCharClass$LazyJavaIdentifierIgnorable__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaIdentifierIgnorable_computeValue = $this => {
    let $chCl;
    $chCl = new jur_AbstractCharClass$LazyJavaIdentifierIgnorable$1;
    $chCl.$this$029 = $this;
    jur_AbstractCharClass__init_($chCl);
    $chCl.$mayContainSupplCodepoints = 1;
    return $chCl;
},
jur_AbstractCharClass$LazyJavaISOControl = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaISOControl__init_ = $this => {
    return;
},
jur_AbstractCharClass$LazyJavaISOControl__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaISOControl();
    jur_AbstractCharClass$LazyJavaISOControl__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaISOControl_computeValue = $this => {
    let var$1;
    var$1 = new jur_AbstractCharClass$LazyJavaISOControl$1;
    var$1.$this$035 = $this;
    jur_AbstractCharClass__init_(var$1);
    return var$1;
},
jur_AbstractCharClass$LazyJavaJavaIdentifierPart = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaJavaIdentifierPart__init_ = $this => {
    return;
},
jur_AbstractCharClass$LazyJavaJavaIdentifierPart__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaJavaIdentifierPart();
    jur_AbstractCharClass$LazyJavaJavaIdentifierPart__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaJavaIdentifierPart_computeValue = $this => {
    let $chCl;
    $chCl = new jur_AbstractCharClass$LazyJavaJavaIdentifierPart$1;
    $chCl.$this$06 = $this;
    jur_AbstractCharClass__init_($chCl);
    $chCl.$mayContainSupplCodepoints = 1;
    return $chCl;
},
jur_AbstractCharClass$LazyJavaJavaIdentifierStart = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaJavaIdentifierStart__init_ = $this => {
    return;
},
jur_AbstractCharClass$LazyJavaJavaIdentifierStart__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaJavaIdentifierStart();
    jur_AbstractCharClass$LazyJavaJavaIdentifierStart__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaJavaIdentifierStart_computeValue = $this => {
    let $chCl;
    $chCl = new jur_AbstractCharClass$LazyJavaJavaIdentifierStart$1;
    $chCl.$this$013 = $this;
    jur_AbstractCharClass__init_($chCl);
    $chCl.$mayContainSupplCodepoints = 1;
    return $chCl;
},
jur_AbstractCharClass$LazyJavaLetter = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaLetter__init_0 = $this => {
    return;
},
jur_AbstractCharClass$LazyJavaLetter__init_ = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaLetter();
    jur_AbstractCharClass$LazyJavaLetter__init_0(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaLetter_computeValue = $this => {
    let $chCl;
    $chCl = new jur_AbstractCharClass$LazyJavaLetter$1;
    $chCl.$this$023 = $this;
    jur_AbstractCharClass__init_($chCl);
    $chCl.$mayContainSupplCodepoints = 1;
    return $chCl;
};
let jur_AbstractCharClass$LazyJavaLetterOrDigit = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaLetterOrDigit__init_0 = $this => {
    return;
},
jur_AbstractCharClass$LazyJavaLetterOrDigit__init_ = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaLetterOrDigit();
    jur_AbstractCharClass$LazyJavaLetterOrDigit__init_0(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaLetterOrDigit_computeValue = $this => {
    let $chCl;
    $chCl = new jur_AbstractCharClass$LazyJavaLetterOrDigit$1;
    $chCl.$this$027 = $this;
    jur_AbstractCharClass__init_($chCl);
    $chCl.$mayContainSupplCodepoints = 1;
    return $chCl;
},
jur_AbstractCharClass$LazyJavaSpaceChar = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaSpaceChar__init_ = $this => {
    return;
},
jur_AbstractCharClass$LazyJavaSpaceChar__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaSpaceChar();
    jur_AbstractCharClass$LazyJavaSpaceChar__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaSpaceChar_computeValue = $this => {
    let var$1;
    var$1 = new jur_AbstractCharClass$LazyJavaSpaceChar$1;
    var$1.$this$028 = $this;
    jur_AbstractCharClass__init_(var$1);
    return var$1;
},
jur_AbstractCharClass$LazyJavaTitleCase = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaTitleCase__init_ = $this => {
    return;
},
jur_AbstractCharClass$LazyJavaTitleCase__init_0 = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaTitleCase();
    jur_AbstractCharClass$LazyJavaTitleCase__init_(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaTitleCase_computeValue = $this => {
    let var$1;
    var$1 = new jur_AbstractCharClass$LazyJavaTitleCase$1;
    var$1.$this$014 = $this;
    jur_AbstractCharClass__init_(var$1);
    return var$1;
},
jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart__init_0 = $this => {
    return;
},
jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart__init_ = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart();
    jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart__init_0(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart_computeValue = $this => {
    let $chCl;
    $chCl = new jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart$1;
    $chCl.$this$08 = $this;
    jur_AbstractCharClass__init_($chCl);
    $chCl.$mayContainSupplCodepoints = 1;
    return $chCl;
},
jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart__init_0 = $this => {
    return;
},
jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart__init_ = () => {
    let var_0 = new jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart();
    jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart__init_0(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart_computeValue = $this => {
    let $chCl;
    $chCl = new jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart$1;
    $chCl.$this$033 = $this;
    jur_AbstractCharClass__init_($chCl);
    $chCl.$mayContainSupplCodepoints = 1;
    return $chCl;
},
jur_AbstractCharClass$LazyWord = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazyWord__init_0 = $this => {
    return;
},
jur_AbstractCharClass$LazyWord__init_ = () => {
    let var_0 = new jur_AbstractCharClass$LazyWord();
    jur_AbstractCharClass$LazyWord__init_0(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyWord_computeValue = $this => {
    return jur_CharClass_add0(jur_CharClass_add(jur_CharClass_add(jur_CharClass_add(jur_CharClass__init_(), 97, 122), 65, 90), 48, 57), 95);
},
jur_AbstractCharClass$LazyNonWord = $rt_classWithoutFields(jur_AbstractCharClass$LazyWord),
jur_AbstractCharClass$LazyNonWord__init_0 = $this => {
    return;
},
jur_AbstractCharClass$LazyNonWord__init_ = () => {
    let var_0 = new jur_AbstractCharClass$LazyNonWord();
    jur_AbstractCharClass$LazyNonWord__init_0(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyNonWord_computeValue = $this => {
    let $chCl;
    $chCl = jur_AbstractCharClass_setNegative(jur_AbstractCharClass$LazyWord_computeValue($this), 1);
    $chCl.$mayContainSupplCodepoints = 1;
    return $chCl;
},
jur_AbstractCharClass$LazyNonSpace = $rt_classWithoutFields(jur_AbstractCharClass$LazySpace),
jur_AbstractCharClass$LazyNonSpace__init_0 = $this => {
    return;
},
jur_AbstractCharClass$LazyNonSpace__init_ = () => {
    let var_0 = new jur_AbstractCharClass$LazyNonSpace();
    jur_AbstractCharClass$LazyNonSpace__init_0(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyNonSpace_computeValue = $this => {
    let $chCl;
    $chCl = jur_AbstractCharClass_setNegative(jur_AbstractCharClass$LazySpace_computeValue($this), 1);
    $chCl.$mayContainSupplCodepoints = 1;
    return $chCl;
},
jur_AbstractCharClass$LazyNonDigit = $rt_classWithoutFields(jur_AbstractCharClass$LazyDigit),
jur_AbstractCharClass$LazyNonDigit__init_0 = $this => {
    return;
},
jur_AbstractCharClass$LazyNonDigit__init_ = () => {
    let var_0 = new jur_AbstractCharClass$LazyNonDigit();
    jur_AbstractCharClass$LazyNonDigit__init_0(var_0);
    return var_0;
},
jur_AbstractCharClass$LazyNonDigit_computeValue = $this => {
    let $chCl;
    $chCl = jur_AbstractCharClass_setNegative(jur_AbstractCharClass$LazyDigit_computeValue($this), 1);
    $chCl.$mayContainSupplCodepoints = 1;
    return $chCl;
};
function jur_AbstractCharClass$LazyRange() {
    let a = this; jur_AbstractCharClass$LazyCharClass.call(a);
    a.$start4 = 0;
    a.$end2 = 0;
}
let jur_AbstractCharClass$LazyRange__init_0 = ($this, $start, $end) => {
    $this.$start4 = $start;
    $this.$end2 = $end;
},
jur_AbstractCharClass$LazyRange__init_ = (var_0, var_1) => {
    let var_2 = new jur_AbstractCharClass$LazyRange();
    jur_AbstractCharClass$LazyRange__init_0(var_2, var_0, var_1);
    return var_2;
},
jur_AbstractCharClass$LazyRange_computeValue = $this => {
    return jur_CharClass_add(jur_CharClass__init_(), $this.$start4, $this.$end2);
},
jur_AbstractCharClass$LazySpecialsBlock = $rt_classWithoutFields(jur_AbstractCharClass$LazyCharClass),
jur_AbstractCharClass$LazySpecialsBlock__init_0 = $this => {
    return;
},
jur_AbstractCharClass$LazySpecialsBlock__init_ = () => {
    let var_0 = new jur_AbstractCharClass$LazySpecialsBlock();
    jur_AbstractCharClass$LazySpecialsBlock__init_0(var_0);
    return var_0;
},
jur_AbstractCharClass$LazySpecialsBlock_computeValue = $this => {
    return jur_CharClass_add(jur_CharClass_add(jur_CharClass__init_(), 65279, 65279), 65520, 65533);
};
function jur_AbstractCharClass$LazyCategory() {
    let a = this; jur_AbstractCharClass$LazyCharClass.call(a);
    a.$category1 = 0;
    a.$mayContainSupplCodepoints0 = 0;
    a.$containsAllSurrogates0 = 0;
}
let jur_AbstractCharClass$LazyCategory__init_0 = ($this, $cat, $mayContainSupplCodepoints) => {
    $this.$mayContainSupplCodepoints0 = $mayContainSupplCodepoints;
    $this.$category1 = $cat;
},
jur_AbstractCharClass$LazyCategory__init_ = (var_0, var_1) => {
    let var_2 = new jur_AbstractCharClass$LazyCategory();
    jur_AbstractCharClass$LazyCategory__init_0(var_2, var_0, var_1);
    return var_2;
},
jur_AbstractCharClass$LazyCategory__init_1 = ($this, $cat, $mayContainSupplCodepoints, $containsAllSurrogates) => {
    $this.$containsAllSurrogates0 = $containsAllSurrogates;
    $this.$mayContainSupplCodepoints0 = $mayContainSupplCodepoints;
    $this.$category1 = $cat;
},
jur_AbstractCharClass$LazyCategory__init_2 = (var_0, var_1, var_2) => {
    let var_3 = new jur_AbstractCharClass$LazyCategory();
    jur_AbstractCharClass$LazyCategory__init_1(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_AbstractCharClass$LazyCategory_computeValue = $this => {
    let $chCl;
    $chCl = jur_UnicodeCategory__init_0($this.$category1);
    if ($this.$containsAllSurrogates0)
        ju_BitSet_set($chCl.$lowHighSurrogates, 0, 2048);
    $chCl.$mayContainSupplCodepoints = $this.$mayContainSupplCodepoints0;
    return $chCl;
};
function jur_AbstractCharClass$LazyCategoryScope() {
    let a = this; jur_AbstractCharClass$LazyCharClass.call(a);
    a.$category0 = 0;
    a.$mayContainSupplCodepoints1 = 0;
    a.$containsAllSurrogates = 0;
}
let jur_AbstractCharClass$LazyCategoryScope__init_1 = ($this, $cat, $mayContainSupplCodepoints) => {
    $this.$mayContainSupplCodepoints1 = $mayContainSupplCodepoints;
    $this.$category0 = $cat;
},
jur_AbstractCharClass$LazyCategoryScope__init_ = (var_0, var_1) => {
    let var_2 = new jur_AbstractCharClass$LazyCategoryScope();
    jur_AbstractCharClass$LazyCategoryScope__init_1(var_2, var_0, var_1);
    return var_2;
},
jur_AbstractCharClass$LazyCategoryScope__init_0 = ($this, $cat, $mayContainSupplCodepoints, $containsAllSurrogates) => {
    $this.$containsAllSurrogates = $containsAllSurrogates;
    $this.$mayContainSupplCodepoints1 = $mayContainSupplCodepoints;
    $this.$category0 = $cat;
},
jur_AbstractCharClass$LazyCategoryScope__init_2 = (var_0, var_1, var_2) => {
    let var_3 = new jur_AbstractCharClass$LazyCategoryScope();
    jur_AbstractCharClass$LazyCategoryScope__init_0(var_3, var_0, var_1, var_2);
    return var_3;
},
jur_AbstractCharClass$LazyCategoryScope_computeValue = $this => {
    let $chCl;
    $chCl = new jur_UnicodeCategoryScope;
    jur_UnicodeCategory__init_($chCl, $this.$category0);
    if ($this.$containsAllSurrogates)
        ju_BitSet_set($chCl.$lowHighSurrogates, 0, 2048);
    $chCl.$mayContainSupplCodepoints = $this.$mayContainSupplCodepoints1;
    return $chCl;
},
jur_IntHash = $rt_classWithoutFields();
function otciu_CharMapping() {
    let a = this; jl_Object.call(a);
    a.$binarySearchTable = null;
    a.$fastTable = null;
}
function otci_CharFlow() {
    let a = this; jl_Object.call(a);
    a.$characters = null;
    a.$pointer = 0;
}
let otci_CharFlow__init_0 = ($this, $characters) => {
    $this.$characters = $characters;
},
otci_CharFlow__init_ = var_0 => {
    let var_1 = new otci_CharFlow();
    otci_CharFlow__init_0(var_1, var_0);
    return var_1;
},
otci_Base46 = $rt_classWithoutFields(),
otci_Base46_decodeUnsigned = $seq => {
    let $number, $pos, var$4, $hasMore, $digit;
    $number = 0;
    $pos = 1;
    while (true) {
        var$4 = $seq.$characters.data;
        $hasMore = $seq.$pointer;
        $seq.$pointer = $hasMore + 1 | 0;
        $digit = var$4[$hasMore];
        $digit = $digit < 34 ? $digit - 32 | 0 : $digit >= 92 ? ($digit - 32 | 0) - 2 | 0 : ($digit - 32 | 0) - 1 | 0;
        $hasMore = ($digit % 2 | 0) != 1 ? 0 : 1;
        $number = $number + $rt_imul($pos, $digit / 2 | 0) | 0;
        $pos = $pos * 46 | 0;
        if (!$hasMore)
            break;
    }
    return $number;
},
otci_Base46_decode = $seq => {
    let $number, $result;
    $number = otci_Base46_decodeUnsigned($seq);
    $result = $number / 2 | 0;
    if ($number % 2 | 0)
        $result =  -$result | 0;
    return $result;
},
jl_UnsupportedOperationException = $rt_classWithoutFields(jl_RuntimeException);
function jur_AbstractCharClass$1() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$lHS = null;
    a.$this$025 = null;
}
let jur_AbstractCharClass$1_contains = ($this, $ch) => {
    let $index;
    $index = $ch - 55296 | 0;
    return $index >= 0 && $index < 2048 ? $this.$altSurrogates ^ ju_BitSet_get($this.$val$lHS, $index) : 0;
};
function jur_AbstractCharClass$2() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$lHS0 = null;
    a.$val$thisClass = null;
    a.$this$016 = null;
}
let jur_AbstractCharClass$2_contains = ($this, $ch) => {
    let $index, $containslHS;
    $index = $ch - 55296 | 0;
    $containslHS = $index >= 0 && $index < 2048 ? $this.$altSurrogates ^ ju_BitSet_get($this.$val$lHS0, $index) : 0;
    return $this.$val$thisClass.$contains($ch) && !$containslHS ? 1 : 0;
};
function jur_CharClass$18() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$bs = null;
    a.$this$010 = null;
}
let jur_CharClass$18_contains = ($this, $ch) => {
    return $this.$alt ^ ju_BitSet_get($this.$val$bs, $ch);
},
jur_CharClass$18_toString = $this => {
    let $temp, $i, var$3;
    $temp = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_($temp);
    $i = ju_BitSet_nextSetBit($this.$val$bs, 0);
    while ($i >= 0) {
        jl_AbstractStringBuilder_append0($temp, jl_Character_toChars($i));
        jl_AbstractStringBuilder_append($temp, 124);
        $i = ju_BitSet_nextSetBit($this.$val$bs, $i + 1 | 0);
    }
    var$3 = $temp.$length0;
    if (var$3 > 0)
        jl_StringBuilder_deleteCharAt($temp, var$3 - 1 | 0);
    return jl_AbstractStringBuilder_toString($temp);
};
function jur_CharClass$1() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$cc3 = null;
    a.$this$07 = null;
}
let jur_CharClass$1_contains = ($this, $ch) => {
    return $this.$val$cc3.$contains($ch);
};
function jur_CharClass$3() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$curAlt = 0;
    a.$val$cc = null;
    a.$this$00 = null;
}
let jur_CharClass$3_contains = ($this, $ch) => {
    return !($this.$val$curAlt ^ ju_BitSet_get($this.$this$00.$bits, $ch)) && !($this.$val$curAlt ^ $this.$this$00.$inverted ^ $this.$val$cc.$contains($ch)) ? 0 : 1;
};
function jur_CharClass$2() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$curAlt0 = 0;
    a.$val$cc1 = null;
    a.$this$0 = null;
}
let jur_CharClass$2_contains = ($this, $ch) => {
    return !($this.$val$curAlt0 ^ ju_BitSet_get($this.$this$0.$bits, $ch)) && !($this.$val$curAlt0 ^ $this.$this$0.$inverted ^ $this.$val$cc1.$contains($ch)) ? 1 : 0;
};
function jur_CharClass$5() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$curAlt7 = 0;
    a.$val$nb3 = null;
    a.$val$cc0 = null;
    a.$this$017 = null;
}
let jur_CharClass$5_contains = ($this, $ch) => {
    return $this.$val$curAlt7 ^ (!$this.$val$nb3.$contains($ch) && !$this.$val$cc0.$contains($ch) ? 0 : 1);
};
function jur_CharClass$4() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$curAlt9 = 0;
    a.$val$nb4 = null;
    a.$val$cc2 = null;
    a.$this$031 = null;
}
let jur_CharClass$4_contains = ($this, $ch) => {
    return $this.$val$curAlt9 ^ (!$this.$val$nb4.$contains($ch) && !$this.$val$cc2.$contains($ch) ? 0 : 1) ? 0 : 1;
};
function jur_CharClass$7() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$clazz7 = null;
    a.$this$032 = null;
}
let jur_CharClass$7_contains = ($this, $ch) => {
    return jur_CharClass_contains($this.$val$clazz7, $ch);
};
function jur_CharClass$6() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$clazz6 = null;
    a.$this$019 = null;
}
let jur_CharClass$6_contains = ($this, $ch) => {
    return jur_CharClass_contains($this.$val$clazz6, $ch) ? 0 : 1;
};
function jur_CharClass$9() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$clazz = null;
    a.$val$curAlt8 = 0;
    a.$this$04 = null;
}
let jur_CharClass$9_contains = ($this, $ch) => {
    return !jur_CharClass_contains($this.$val$clazz, $ch) && !($this.$val$curAlt8 ^ ju_BitSet_get($this.$this$04.$bits, $ch)) ? 0 : 1;
};
function jur_CharClass$8() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$clazz1 = null;
    a.$val$curAlt2 = 0;
    a.$this$01 = null;
}
let jur_CharClass$8_contains = ($this, $ch) => {
    return !jur_CharClass_contains($this.$val$clazz1, $ch) && !($this.$val$curAlt2 ^ ju_BitSet_get($this.$this$01.$bits, $ch)) ? 1 : 0;
};
function jur_CharClass$11() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$curAlt4 = 0;
    a.$val$nb2 = null;
    a.$val$clazz8 = null;
    a.$this$011 = null;
}
let jur_CharClass$11_contains = ($this, $ch) => {
    return !($this.$val$curAlt4 ^ $this.$val$nb2.$contains($ch)) && !jur_CharClass_contains($this.$val$clazz8, $ch) ? 0 : 1;
};
function jur_CharClass$10() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$curAlt6 = 0;
    a.$val$nb0 = null;
    a.$val$clazz0 = null;
    a.$this$018 = null;
}
let jur_CharClass$10_contains = ($this, $ch) => {
    return !($this.$val$curAlt6 ^ $this.$val$nb0.$contains($ch)) && !jur_CharClass_contains($this.$val$clazz0, $ch) ? 1 : 0;
};
function jur_CharClass$13() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$clazz4 = null;
    a.$this$020 = null;
}
let jur_CharClass$13_contains = ($this, $ch) => {
    return jur_CharClass_contains($this.$val$clazz4, $ch);
};
function jur_CharClass$12() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$clazz5 = null;
    a.$this$030 = null;
}
let jur_CharClass$12_contains = ($this, $ch) => {
    return jur_CharClass_contains($this.$val$clazz5, $ch) ? 0 : 1;
};
function jur_CharClass$15() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$clazz9 = null;
    a.$val$curAlt1 = 0;
    a.$this$05 = null;
}
let jur_CharClass$15_contains = ($this, $ch) => {
    return jur_CharClass_contains($this.$val$clazz9, $ch) && $this.$val$curAlt1 ^ ju_BitSet_get($this.$this$05.$bits, $ch) ? 1 : 0;
};
function jur_CharClass$14() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$clazz2 = null;
    a.$val$curAlt10 = 0;
    a.$this$02 = null;
}
let jur_CharClass$14_contains = ($this, $ch) => {
    return jur_CharClass_contains($this.$val$clazz2, $ch) && $this.$val$curAlt10 ^ ju_BitSet_get($this.$this$02.$bits, $ch) ? 0 : 1;
};
function jur_CharClass$17() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$curAlt5 = 0;
    a.$val$nb1 = null;
    a.$val$clazz10 = null;
    a.$this$015 = null;
}
let jur_CharClass$17_contains = ($this, $ch) => {
    return $this.$val$curAlt5 ^ $this.$val$nb1.$contains($ch) && jur_CharClass_contains($this.$val$clazz10, $ch) ? 1 : 0;
};
function jur_CharClass$16() {
    let a = this; jur_AbstractCharClass.call(a);
    a.$val$curAlt3 = 0;
    a.$val$nb = null;
    a.$val$clazz3 = null;
    a.$this$022 = null;
}
let jur_CharClass$16_contains = ($this, $ch) => {
    return $this.$val$curAlt3 ^ $this.$val$nb.$contains($ch) && jur_CharClass_contains($this.$val$clazz3, $ch) ? 0 : 1;
},
ju_Map$Entry = $rt_classWithoutFields(0);
function ju_MapEntry() {
    let a = this; jl_Object.call(a);
    a.$key = null;
    a.$value = null;
}
function ju_HashMap$HashEntry() {
    let a = this; ju_MapEntry.call(a);
    a.$origKeyHash = 0;
    a.$next2 = null;
}
function ju_LinkedHashMap$LinkedHashMapEntry() {
    let a = this; ju_HashMap$HashEntry.call(a);
    a.$chainForward = null;
    a.$chainBackward = null;
}
let rddc_UIHelper = $rt_classWithoutFields(),
rddc_UIHelper_doc = null,
rddc_UIHelper_$callClinit = () => {
    rddc_UIHelper_$callClinit = $rt_eraseClinit(rddc_UIHelper);
    rddc_UIHelper__clinit_();
},
rddc_UIHelper_byId = $id => {
    rddc_UIHelper_$callClinit();
    return rddc_UIHelper_doc.getElementById($rt_ustr($id));
},
rddc_UIHelper_create = $tag => {
    rddc_UIHelper_$callClinit();
    return rddc_UIHelper_doc.createElement($rt_ustr($tag));
},
rddc_UIHelper_setText = ($id, $text) => {
    let $el;
    rddc_UIHelper_$callClinit();
    $el = rddc_UIHelper_byId($id);
    if ($el !== null)
        otjdh_HTMLElement_withText$static($el, $text);
},
rddc_UIHelper_setHTML = ($id, $html) => {
    let $el;
    rddc_UIHelper_$callClinit();
    $el = rddc_UIHelper_byId($id);
    if ($el !== null)
        $el.innerHTML = $rt_ustr($html);
},
rddc_UIHelper_getInputValue = $id => {
    let $input;
    rddc_UIHelper_$callClinit();
    $input = rddc_UIHelper_byId($id);
    return $input === null ? $rt_s(3) : $rt_str($input.value);
},
rddc_UIHelper_alert = $message => {
    rddc_UIHelper_$callClinit();
    alert($rt_ustr($message));
},
rddc_UIHelper_confirm = $message => {
    rddc_UIHelper_$callClinit();
    return confirm($rt_ustr($message)) ? 1 : 0;
},
rddc_UIHelper_windowWidth = () => {
    rddc_UIHelper_$callClinit();
    return window.innerWidth;
},
rddc_UIHelper_windowHeight = () => {
    rddc_UIHelper_$callClinit();
    return window.innerHeight;
},
rddc_UIHelper__clinit_ = () => {
    rddc_UIHelper_doc = window.document;
};
function rdd_PathGame() {
    let a = this; jl_Object.call(a);
    a.$canvas0 = null;
    a.$ctx = null;
    a.$doc = null;
    a.$onCompleteCallback0 = null;
    a.$onFailCallback = null;
    a.$scaleX = 0.0;
    a.$scaleY = 0.0;
    a.$platforms = null;
    a.$ladders = null;
    a.$stones = null;
    a.$player = null;
    a.$lives = 0;
    a.$score = 0;
    a.$level0 = 0;
    a.$playing = 0;
    a.$invulnTimer = 0.0;
    a.$lastTime = 0.0;
    a.$animId = 0;
    a.$keyLeft = 0;
    a.$keyRight = 0;
    a.$keyUp = 0;
    a.$keyDown = 0;
}
let rdd_PathGame_resize = $this => {
    let $maxW, $maxH, var$3, var$4;
    $maxW = jl_Math_min(rddc_UIHelper_windowWidth() - 40 | 0, 800);
    $maxH = jl_Math_min(rddc_UIHelper_windowHeight() - 220 | 0, 600);
    var$3 = $this.$canvas0;
    var$4 = $maxW;
    var$3.width = var$4;
    var$3 = $this.$canvas0;
    var$4 = $maxH;
    var$3.height = var$4;
    $this.$scaleX = $this.$canvas0.width / 800.0;
    $this.$scaleY = $this.$canvas0.height / 600.0;
},
rdd_PathGame_sx = ($this, $v) => {
    return $v * $this.$scaleX;
},
rdd_PathGame_sy = ($this, $v) => {
    return $v * $this.$scaleY;
},
rdd_PathGame_setupInput = $this => {
    let var$1, var$2, var$3;
    var$1 = $this.$doc;
    var$2 = new rdd_PathGame$setupInput$lambda$_4_0;
    var$2.$_016 = $this;
    var$1.addEventListener("keydown", otji_JS_function(otji_JSWrapper_unwrap(var$2), "handleEvent"));
    var$3 = $this.$doc;
    var$2 = new rdd_PathGame$setupInput$lambda$_4_1;
    var$2.$_029 = $this;
    var$3.addEventListener("keyup", otji_JS_function(otji_JSWrapper_unwrap(var$2), "handleEvent"));
    var$1 = new rdd_PathGame$setupInput$lambda$_4_2;
    var$1.$_043 = $this;
    var$2 = new rdd_PathGame$setupInput$lambda$_4_3;
    var$2.$_08 = $this;
    rdd_PathGame_bindMobileButton($this, $rt_s(459), var$1, var$2);
    var$1 = new rdd_PathGame$setupInput$lambda$_4_4;
    var$1.$_023 = $this;
    var$2 = new rdd_PathGame$setupInput$lambda$_4_5;
    var$2.$_034 = $this;
    rdd_PathGame_bindMobileButton($this, $rt_s(460), var$1, var$2);
    var$1 = new rdd_PathGame$setupInput$lambda$_4_6;
    var$1.$_048 = $this;
    var$2 = new rdd_PathGame$setupInput$lambda$_4_7;
    var$2.$_013 = $this;
    rdd_PathGame_bindMobileButton($this, $rt_s(461), var$1, var$2);
    var$1 = new rdd_PathGame$setupInput$lambda$_4_8;
    var$1.$_025 = $this;
    var$2 = new rdd_PathGame$setupInput$lambda$_4_9;
    var$2.$_036 = $this;
    rdd_PathGame_bindMobileButton($this, $rt_s(462), var$1, var$2);
},
rdd_PathGame_bindMobileButton = ($this, $id, $onPress, $onRelease) => {
    let $btn;
    $btn = rddc_UIHelper_byId($id);
    if ($btn === null)
        return;
    $id = new rdd_PathGame$bindMobileButton$lambda$_5_0;
    $id.$_02 = $onPress;
    otjde_EventTarget_onEvent$static($btn, $rt_s(463), otji_JSWrapper_unwrap($id));
    $id = new rdd_PathGame$bindMobileButton$lambda$_5_1;
    $id.$_040 = $onRelease;
    otjde_EventTarget_onEvent$static($btn, $rt_s(464), otji_JSWrapper_unwrap($id));
    $id = new rdd_PathGame$bindMobileButton$lambda$_5_2;
    $id.$_018 = $onPress;
    otjde_EventTarget_onEvent$static($btn, $rt_s(465), otji_JSWrapper_unwrap($id));
    $id = new rdd_PathGame$bindMobileButton$lambda$_5_3;
    $id.$_06 = $onRelease;
    otjde_EventTarget_onEvent$static($btn, $rt_s(466), otji_JSWrapper_unwrap($id));
    $id = new rdd_PathGame$bindMobileButton$lambda$_5_4;
    $id.$_044 = $onRelease;
    otjde_EventTarget_onEvent$static($btn, $rt_s(467), otji_JSWrapper_unwrap($id));
},
rdd_PathGame_start = ($this, $lvl) => {
    let var$2, var$3, var$4, var$5, var$6, var$7, $bottom, var$9, var$10, var$11, var$12, var$13;
    $this.$level0 = $lvl;
    $this.$lives = 3;
    $this.$score = 0;
    $this.$invulnTimer = 0.0;
    $this.$playing = 1;
    rdd_PathGame_resize($this);
    var$2 = $rt_createArray(rdd_PathGame$Platform, 5);
    var$3 = var$2.data;
    $this.$platforms = var$2;
    $lvl = 0;
    while ($lvl < 5) {
        var$4 = 60.0 + $lvl * 125.0;
        var$5 = $lvl % 2 | 0 ? 0 : 1;
        if (!var$5) {
            var$6 = 110.0;
            var$7 = 780.0;
        } else {
            var$6 = 20.0;
            var$7 = 690.0;
        }
        $bottom = new rdd_PathGame$Platform;
        $bottom.$y0 = var$4;
        $bottom.$x1 = var$6;
        $bottom.$x2 = var$7;
        $bottom.$index4 = $lvl;
        $bottom.$gapRight = var$5;
        var$3[$lvl] = $bottom;
        $lvl = $lvl + 1 | 0;
    }
    $this.$ladders = $rt_createArray(rdd_PathGame$Ladder, 8);
    $lvl = 0;
    var$5 = 0;
    while (var$5 < 4) {
        var$2 = $this.$platforms.data;
        var$9 = var$5 + 1 | 0;
        $bottom = var$2[var$9];
        var$10 = var$2[var$5];
        var$11 = rdd_PathGame_clamp($bottom.$x1 + 60.0 + jl_Math_random() * 80.0, $bottom.$x1 + 25.0, $bottom.$x2 - 25.0);
        var$12 = rdd_PathGame_clamp($bottom.$x1 + 280.0 + jl_Math_random() * 120.0, $bottom.$x1 + 25.0, $bottom.$x2 - 25.0);
        var$2 = $this.$ladders.data;
        var$13 = $lvl + 1 | 0;
        var$2[$lvl] = rdd_PathGame$Ladder__init_(var$11, var$10.$y0, $bottom.$y0, var$9, var$5);
        var$2 = $this.$ladders.data;
        $lvl = var$13 + 1 | 0;
        var$2[var$13] = rdd_PathGame$Ladder__init_(var$12, var$10.$y0, $bottom.$y0, var$9, var$5);
        var$5 = var$9;
    }
    var$12 = $this.$level0;
    $lvl = 2 + (var$12 * 1.5 | 0) | 0;
    var$11 = 1.5 + var$12 * 0.3;
    $this.$stones = $rt_createArray(rdd_PathGame$Stone, $lvl);
    var$5 = 0;
    while (var$5 < $lvl) {
        var$9 = jl_Math_random() * 5.0 | 0;
        $bottom = $this.$platforms.data[var$9];
        var$10 = new rdd_PathGame$Stone;
        var$10.$x0 = $bottom.$x1 + jl_Math_random() * ($bottom.$x2 - $bottom.$x1);
        var$10.$y1 = $bottom.$y0 - 16.0;
        var$10.$vx = (!(jl_Math_random() < 0.5) ? 1 : (-1)) * (var$11 + jl_Math_random() * 0.5);
        var$10.$platformIndex = var$9;
        var$10.$falling = 0;
        $this.$stones.data[var$5] = var$10;
        var$5 = var$5 + 1 | 0;
    }
    var$2 = $this.$platforms.data;
    $lvl = var$2.length - 1 | 0;
    $bottom = var$2[$lvl];
    var$10 = new rdd_PathGame$Player;
    $this.$player = var$10;
    var$10.$x = ($bottom.$x1 + $bottom.$x2) / 2.0;
    var$10.$y = $bottom.$y0 - 16.0;
    var$10.$onLadder = null;
    var$10.$platformIndex0 = $lvl;
    rdd_PathGame_updateUI($this);
    $this.$lastTime = Long_toNumber(jl_System_currentTimeMillis());
    rdd_PathGame_loop($this);
},
rdd_PathGame_clamp = ($v, $min, $max) => {
    return jl_Math_max0($min, jl_Math_min0($max, $v));
},
rdd_PathGame_updatePlayer = ($this, $sf) => {
    let $l, $l_0, var$4, var$5, $idx, var$7, $p, var$9, var$10, var$11;
    $l = $this.$player;
    $l_0 = $l.$onLadder;
    if ($l_0 !== null) {
        if ($this.$keyUp)
            $l.$y = $l.$y - 2.8 * $sf;
        if ($this.$keyDown)
            $l.$y = $l.$y + 2.8 * $sf;
        $sf = $l.$y;
        var$4 = $l_0.$yTop;
        var$5 = var$4 - 16.0;
        if ($sf <= var$5 + 2.0) {
            $l.$y = var$5;
            $l.$onLadder = null;
            $l.$platformIndex0 = $l_0.$upperIndex;
        }
        $sf = $l.$y;
        var$5 = $l_0.$yBottom - 16.0;
        if ($sf >= var$5) {
            $l.$y = var$5;
            $l.$onLadder = null;
            $l.$platformIndex0 = $l_0.$lowerIndex;
        }
        if (!(!$this.$keyLeft && !$this.$keyRight)) {
            $idx = !($l.$y <= var$4 + 5.0) ? $l_0.$lowerIndex : $l_0.$upperIndex;
            $l.$onLadder = null;
            $l.$platformIndex0 = $idx;
            $l.$y = $this.$platforms.data[$idx].$y0 - 16.0;
        }
    } else {
        var$7 = $this.$platforms.data;
        $idx = $l.$platformIndex0;
        $p = var$7[$idx];
        if ($this.$keyLeft)
            $l.$x = $l.$x - 3.5 * $sf;
        else if ($this.$keyRight)
            $l.$x = $l.$x + 3.5 * $sf;
        var$4 = $l.$x;
        $sf = $p.$x1 + 16.0;
        if (var$4 < $sf)
            $l.$x = $sf;
        $sf = $l.$x;
        var$4 = $p.$x2 - 16.0;
        if ($sf > var$4)
            $l.$x = var$4;
        var$9 = $this.$keyUp;
        if (!(!var$9 && !$this.$keyDown)) {
            $sf = $l.$x;
            var$7 = $this.$ladders.data;
            var$10 = var$7.length;
            var$11 = 0;
            a: {
                while (true) {
                    if (var$11 >= var$10) {
                        $l = null;
                        break a;
                    }
                    $l = var$7[var$11];
                    if (var$9 && $l.$lowerIndex == $idx && jl_Math_abs($sf - $l.$x3) < 25.0)
                        break a;
                    if (!var$9 && $l.$upperIndex == $idx && jl_Math_abs($sf - $l.$x3) < 25.0)
                        break;
                    var$11 = var$11 + 1 | 0;
                }
            }
            if ($l !== null) {
                $l_0 = $this.$player;
                $l_0.$onLadder = $l;
                $l_0.$x = $l.$x3;
            }
        }
        if (!$this.$player.$platformIndex0) {
            $this.$playing = 0;
            $this.$score = $this.$score + 100 | 0;
            rdd_PathGame_updateUI($this);
            rdd_PathGame_showMessage($this, $rt_s(468), 1);
            $l = new rdd_PathGame$win$lambda$_21_0;
            $l.$_03 = $this;
            setTimeout(otji_JS_function(otji_JSWrapper_unwrap($l), "onTimer"), 1800);
        }
    }
},
rdd_PathGame_updateStones = ($this, $sf) => {
    let var$2, var$3, var$4, var$5, $s, var$7, var$8, var$9, $tp, var$11, $p, var$13, var$14, var$15;
    var$2 = $this.$stones.data;
    var$3 = var$2.length;
    var$4 = 0;
    var$5 = 0.3 * $sf;
    while (var$4 < var$3) {
        $s = var$2[var$4];
        if ($s.$falling) {
            var$7 = $s.$vy + var$5;
            $s.$vy = var$7;
            var$7 = $s.$y1 + var$7 * $sf;
            $s.$y1 = var$7;
            var$8 = $this.$platforms.data;
            var$9 = $s.$platformIndex;
            $tp = var$8[var$9];
            var$11 = $tp.$y0 - 16.0;
            if (var$7 >= var$11) {
                var$7 = $s.$x0;
                if (var$7 >= $tp.$x1 && var$7 <= $tp.$x2) {
                    $s.$y1 = var$11;
                    $s.$falling = 0;
                    $s.$vy = 0.0;
                    $s.$vx = (!(jl_Math_random() < 0.5) ? 1 : (-1)) * jl_Math_abs($s.$vx);
                } else if (var$9 >= 4)
                    rdd_PathGame_respawnStone($this, $s);
                else
                    $s.$platformIndex = var$9 + 1 | 0;
            }
        } else {
            var$8 = $this.$platforms.data;
            var$9 = $s.$platformIndex;
            $p = var$8[var$9];
            var$7 = $s.$x0;
            var$11 = $s.$vx;
            var$13 = var$7 + var$11 * $sf;
            $s.$x0 = var$13;
            var$14 = $p.$x1;
            var$7 = var$14 + 16.0;
            var$15 = $rt_compare(var$13, var$7);
            if (!(var$15 > 0 && !(var$13 >= $p.$x2 - 16.0))) {
                if (var$9 >= 4) {
                    $s.$vx =  -var$11;
                    $s.$x0 = rdd_PathGame_clamp(var$13, var$7, $p.$x2 - 16.0);
                } else {
                    $s.$falling = 1;
                    $s.$vy = 0.0;
                    $s.$platformIndex = var$9 + 1 | 0;
                    $s.$x0 = var$15 <= 0 ? var$14 - 5.0 : $p.$x2 + 5.0;
                }
            }
        }
        var$4 = var$4 + 1 | 0;
    }
},
rdd_PathGame_respawnStone = ($this, $s) => {
    let $top;
    $top = $this.$platforms.data[0];
    $s.$x0 = $top.$x1 + jl_Math_random() * ($top.$x2 - $top.$x1);
    $s.$y1 = $top.$y0 - 16.0;
    $s.$vx = (!(jl_Math_random() < 0.5) ? 1 : (-1)) * (1.5 + $this.$level0 * 0.3);
    $s.$platformIndex = 0;
    $s.$falling = 0;
    $s.$vy = 0.0;
},
rdd_PathGame_draw = $this => {
    let $l, $yB, $w, $p, $x, var$6, $blink, var$8, $s, $yT, var$11, var$12, var$13, var$14, $y;
    $l = $this.$ctx;
    $yB = $this.$canvas0.width;
    $w = $this.$canvas0.height;
    $l.clearRect(0.0, 0.0, $yB, $w);
    $l = $this.$ctx;
    $p = "#87CEEB";
    $l.fillStyle = $p;
    $l = $this.$ctx;
    $w = $this.$canvas0.width;
    $x = rdd_PathGame_sy($this, 300.0);
    $l.fillRect(0.0, 0.0, $w, $x);
    $l = $this.$ctx;
    $p = "#90EE90";
    $l.fillStyle = $p;
    $l = $this.$ctx;
    $x = rdd_PathGame_sy($this, 300.0);
    $yB = $this.$canvas0.width;
    $w = rdd_PathGame_sy($this, 300.0);
    $l.fillRect(0.0, $x, $yB, $w);
    var$6 = $this.$platforms.data;
    $blink = var$6.length;
    var$8 = 0;
    while (var$8 < $blink) {
        $p = var$6[var$8];
        $l = $this.$ctx;
        $s = "#8B4513";
        $l.fillStyle = $s;
        $l = $this.$ctx;
        $x = rdd_PathGame_sx($this, $p.$x1);
        $yT = rdd_PathGame_sy($this, $p.$y0);
        $yB = rdd_PathGame_sx($this, $p.$x2 - $p.$x1);
        $w = rdd_PathGame_sy($this, 12.0);
        $l.fillRect($x, $yT, $yB, $w);
        $s = $this.$ctx;
        var$11 = "#228B22";
        $s.fillStyle = var$11;
        var$12 = $this.$ctx;
        $x = rdd_PathGame_sx($this, $p.$x1);
        $yT = rdd_PathGame_sy($this, $p.$y0);
        $yB = rdd_PathGame_sx($this, $p.$x2 - $p.$x1);
        $w = rdd_PathGame_sy($this, 4.0);
        var$12.fillRect($x, $yT, $yB, $w);
        var$8 = var$8 + 1 | 0;
    }
    var$6 = $this.$ladders.data;
    $blink = var$6.length;
    var$8 = 0;
    while (var$8 < $blink) {
        $l = var$6[var$8];
        $x = rdd_PathGame_sx($this, $l.$x3);
        $yT = rdd_PathGame_sy($this, $l.$yTop);
        $yB = rdd_PathGame_sy($this, $l.$yBottom);
        $w = rdd_PathGame_sx($this, 18.0);
        $l = $this.$ctx;
        $p = "#DAA520";
        $l.fillStyle = $p;
        $l = $this.$ctx;
        $w = $w / 2.0;
        var$13 = $x - $w;
        var$14 = $yB - $yT;
        $l.fillRect(var$13, $yT, 4.0, var$14);
        $l = $this.$ctx;
        $x = $x + $w;
        $w = $x - 4.0;
        $l.fillRect($w, $yT, 4.0, var$14);
        $l = $this.$ctx;
        $p = "#B8860B";
        $l.strokeStyle = $p;
        $l = $this.$ctx;
        $p = 2.0;
        $l.lineWidth = $p;
        $y = $yT + 6.0;
        while ($y < $yB) {
            $this.$ctx.beginPath();
            $this.$ctx.moveTo(var$13, $y);
            $this.$ctx.lineTo($x, $y);
            $this.$ctx.stroke();
            $y = $y + 12.0;
        }
        var$8 = var$8 + 1 | 0;
    }
    $l = $this.$ctx;
    $p = "rgba(255, 215, 0, 0.35)";
    $l.fillStyle = $p;
    $l = $this.$ctx;
    $yB = $this.$canvas0.width;
    $w = rdd_PathGame_sy($this, 50.0);
    $l.fillRect(0.0, 0.0, $yB, $w);
    $l = $this.$ctx;
    $p = "#FFD700";
    $l.fillStyle = $p;
    $l = $this.$ctx;
    $blink = jl_Math_max(14, rdd_PathGame_sy($this, 18.0) | 0);
    $p = jl_StringBuilder__init_();
    jl_StringBuilder_append(jl_StringBuilder_append1(jl_StringBuilder_append($p, $rt_s(469)), $blink), $rt_s(470));
    $p = $rt_ustr(jl_StringBuilder_toString($p));
    $l.font = $p;
    $l = $this.$ctx;
    $p = "center";
    $l.textAlign = $p;
    $l = $this.$ctx;
    $x = $this.$canvas0.width / 2.0;
    $yT = rdd_PathGame_sy($this, 32.0);
    $l.fillText("\ud83c\udfc1 ФИНИШ \ud83c\udfc1", $x, $yT);
    var$6 = $this.$stones.data;
    $blink = var$6.length;
    var$8 = 0;
    while (var$8 < $blink) {
        $s = var$6[var$8];
        rdd_PathGame_drawEmoji($this, $rt_s(471), rdd_PathGame_sx($this, $s.$x0), rdd_PathGame_sy($this, $s.$y1), rdd_PathGame_sy($this, 32.0));
        var$8 = var$8 + 1 | 0;
    }
    $l = $this.$player;
    if ($l !== null) {
        $x = $this.$invulnTimer;
        if (!($x > 0.0 && !(($x / 150.0 | 0) % 2 | 0) ? 1 : 0))
            rdd_PathGame_drawEmoji($this, $rt_s(472), rdd_PathGame_sx($this, $l.$x), rdd_PathGame_sy($this, $this.$player.$y), rdd_PathGame_sy($this, 32.0));
    }
},
rdd_PathGame_drawEmoji = ($this, $emoji, $x, $y, $size) => {
    let var$5, var$6, var$7;
    var$5 = $this.$ctx;
    var$6 = jl_Math_max0(8.0, $size) | 0;
    var$7 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$7);
    jl_StringBuilder_append(jl_StringBuilder_append1(var$7, var$6), $rt_s(470));
    var$7 = $rt_ustr(jl_AbstractStringBuilder_toString(var$7));
    var$5.font = var$7;
    var$5 = $this.$ctx;
    var$7 = "center";
    var$5.textAlign = var$7;
    var$5 = $this.$ctx;
    var$7 = "middle";
    var$5.textBaseline = var$7;
    $this.$ctx.fillText($rt_ustr($emoji), $x, $y);
},
rdd_PathGame_updateUI = $this => {
    let $hearts, $i, var$3;
    $hearts = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_($hearts);
    $i = 0;
    while ($i < jl_Math_max(0, $this.$lives)) {
        jl_StringBuilder_append0($hearts, $rt_s(473));
        $i = $i + 1 | 0;
    }
    rddc_UIHelper_setText($rt_s(474), jl_AbstractStringBuilder_toString($hearts));
    $i = $this.$score;
    var$3 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$3);
    jl_StringBuilder_append1(jl_StringBuilder_append(var$3, $rt_s(475)), $i);
    rddc_UIHelper_setText($rt_s(476), jl_AbstractStringBuilder_toString(var$3));
},
rdd_PathGame_loop = $this => {
    let $now, $dt, var$3, var$4, var$5, var$6, var$7, var$8;
    if (!$this.$playing)
        return;
    $now = Long_toNumber(jl_System_currentTimeMillis());
    $dt = jl_Math_min0($now - $this.$lastTime, 50.0);
    $this.$lastTime = $now;
    if ($this.$playing) {
        $now = $dt / 16.67;
        var$3 = $this.$invulnTimer;
        if (var$3 > 0.0)
            $this.$invulnTimer = var$3 - $dt;
        a: {
            rdd_PathGame_updatePlayer($this, $now);
            rdd_PathGame_updateStones($this, $now);
            if (!($this.$invulnTimer > 0.0)) {
                var$4 = $this.$stones.data;
                var$5 = var$4.length;
                var$6 = 0;
                while (var$6 < var$5) {
                    var$7 = var$4[var$6];
                    var$8 = $this.$player;
                    $now = var$8.$x - var$7.$x0;
                    $dt = var$8.$y - var$7.$y1;
                    if (jl_Math_sqrt($now * $now + $dt * $dt) < 28.0) {
                        $this.$lives = $this.$lives - 1 | 0;
                        $this.$score = jl_Math_max(0, $this.$score - 30 | 0);
                        $this.$invulnTimer = 1500.0;
                        rdd_PathGame_respawnStone($this, var$7);
                        rdd_PathGame_updateUI($this);
                        if ($this.$lives <= 0) {
                            $this.$playing = 0;
                            rdd_PathGame_showMessage($this, $rt_s(477), 0);
                            var$7 = new rdd_PathGame$lose$lambda$_22_0;
                            var$7.$_019 = $this;
                            setTimeout(otji_JS_function(otji_JSWrapper_unwrap(var$7), "onTimer"), 1800);
                        }
                        break a;
                    }
                    var$6 = var$6 + 1 | 0;
                }
            }
        }
    }
    rdd_PathGame_draw($this);
    var$7 = new rdd_PathGame$loop$lambda$_20_0;
    var$7.$_026 = $this;
    requestAnimationFrame(otji_JS_function(otji_JSWrapper_unwrap(var$7), "onAnimationFrame"));
},
rdd_PathGame_showMessage = ($this, $text, $success) => {
    let $el, var$4;
    $el = rddc_UIHelper_byId($rt_s(478));
    if ($el === null)
        return;
    otjdh_HTMLElement_withText$static($el, $text);
    $el.style["display"] = "block";
    var$4 = !$success ? $rt_s(479) : $rt_s(480);
    $el.style["color"] = $rt_ustr(var$4);
    $text = new rdd_PathGame$showMessage$lambda$_23_0;
    $text.$_032 = $el;
    setTimeout(otji_JS_function(otji_JSWrapper_unwrap($text), "onTimer"), 1800);
},
rdd_PathGame$IntCallback = $rt_classWithoutFields(0);
function rdd_Game$buildAllScreens$lambda$_2_0() {
    jl_Object.call(this);
    this.$_022 = null;
}
let jl_Runnable = $rt_classWithoutFields(0);
function rdd_Game$buildAllScreens$lambda$_2_1() {
    jl_Object.call(this);
    this.$_039 = null;
}
function rdd_DigGame() {
    let a = this; jl_Object.call(a);
    a.$canvas = null;
    a.$ctx0 = null;
    a.$onCompleteCallback = null;
    a.$onFailCallback0 = null;
    a.$gridSize = 0;
    a.$cellSize = 0;
    a.$padding = 0;
    a.$grid = null;
    a.$selectedRow = 0;
    a.$selectedCol = 0;
    a.$score0 = 0;
    a.$targetScore = 0;
    a.$moves = 0;
    a.$bonesCollected = 0;
    a.$level1 = 0;
    a.$playing0 = 0;
    a.$animating = 0;
}
let rdd_DigGame__init_ = ($this, $canvas, $onComplete, $onFail) => {
    $this.$gridSize = 9;
    $this.$cellSize = 40;
    $this.$padding = 4;
    $this.$selectedRow = (-1);
    $this.$selectedCol = (-1);
    $this.$score0 = 0;
    $this.$targetScore = 500;
    $this.$moves = 25;
    $this.$bonesCollected = 0;
    $this.$level1 = 1;
    $this.$playing0 = 0;
    $this.$animating = 0;
    $this.$canvas = $canvas;
    $this.$ctx0 = $canvas.getContext("2d");
    $this.$onCompleteCallback = $onComplete;
    $this.$onFailCallback0 = $onFail;
    $canvas = $this.$canvas;
    $onComplete = new rdd_DigGame$setupInput$lambda$_5_0;
    $onComplete.$_031 = $this;
    otjde_MouseEventTarget_onClick$static($canvas, otji_JSWrapper_unwrap($onComplete));
    $canvas = $this.$canvas;
    $onFail = new rdd_DigGame$setupInput$lambda$_5_1;
    $onFail.$_042 = $this;
    $canvas.addEventListener("touchstart", otji_JS_function(otji_JSWrapper_unwrap($onFail), "handleEvent"));
},
rdd_DigGame__init_0 = (var_0, var_1, var_2) => {
    let var_3 = new rdd_DigGame();
    rdd_DigGame__init_(var_3, var_0, var_1, var_2);
    return var_3;
},
rdd_DigGame_start = ($this, $lvl) => {
    let var$2, var$3, var$4, var$5, var$6, var$7, var$8, var$9, var$10;
    $this.$level1 = $lvl;
    if ($lvl <= 3)
        $this.$gridSize = 9;
    else if ($lvl > 6)
        $this.$gridSize = 16;
    else
        $this.$gridSize = 12;
    $this.$targetScore = jl_Math_min(1000, 500 + ($lvl * 50 | 0) | 0);
    $this.$moves = 20 + ($this.$level1 * 2 | 0) | 0;
    $this.$score0 = 0;
    $this.$bonesCollected = 0;
    $this.$selectedRow = (-1);
    $this.$selectedCol = (-1);
    $this.$playing0 = 1;
    $this.$animating = 0;
    var$2 = jl_Math_min(jl_Math_min(rddc_UIHelper_windowWidth() - 40 | 0, rddc_UIHelper_windowHeight() - 180 | 0), 700);
    var$3 = $this.$padding;
    var$4 = $this.$gridSize;
    $lvl = jl_Math_max(24, jl_Math_min(50, (var$2 - $rt_imul(var$3, var$4 + 1 | 0) | 0) / var$4 | 0));
    $this.$cellSize = $lvl;
    var$2 = $this.$gridSize;
    $lvl = $rt_imul($lvl, var$2) + $rt_imul($this.$padding, var$2 + 1 | 0) | 0;
    var$5 = $this.$canvas;
    var$6 = $lvl;
    var$5.width = var$6;
    var$5 = $this.$canvas;
    var$6 = $lvl;
    var$5.height = var$6;
    $lvl = $this.$gridSize;
    $this.$grid = $rt_createMultiArray(rddd_GameElement, [$lvl, $lvl]);
    $lvl = 0;
    while ($lvl < $this.$gridSize) {
        var$2 = 0;
        while (var$2 < $this.$gridSize) {
            $this.$grid.data[$lvl].data[var$2] = rddd_GameElement_random();
            var$2 = var$2 + 1 | 0;
        }
        $lvl = $lvl + 1 | 0;
    }
    $lvl = 100;
    while ((rdd_DigGame_findMatches($this)).data.length > 0) {
        var$2 = $lvl + (-1) | 0;
        if ($lvl <= 0)
            break;
        var$7 = (rdd_DigGame_findMatches($this)).data;
        var$8 = var$7.length;
        var$9 = 0;
        while (var$9 < var$8) {
            var$10 = var$7[var$9].data;
            $this.$grid.data[var$10[0]].data[var$10[1]] = rddd_GameElement_random();
            var$9 = var$9 + 1 | 0;
        }
        $lvl = var$2;
    }
    rdd_DigGame_updateUI($this);
    rdd_DigGame_draw($this);
},
rdd_DigGame_handleClick = ($this, $clientX, $clientY) => {
    let $rect, $rectTop, $scaleX, $scaleY, $x, $y, $total, $col, $row, var$12, var$13, var$14;
    if ($this.$playing0 && !$this.$animating) {
        $rect = $this.$canvas.getBoundingClientRect().left;
        $rectTop = $this.$canvas.getBoundingClientRect().top;
        $scaleX = $this.$canvas.width / $this.$canvas.getBoundingClientRect().width;
        $scaleY = $this.$canvas.height / $this.$canvas.getBoundingClientRect().height;
        $x = ($clientX - $rect) * $scaleX;
        $y = ($clientY - $rectTop) * $scaleY;
        $total = $this.$cellSize;
        $col = $this.$padding;
        $total = $total + $col | 0;
        $clientX = $col;
        $clientY = $x - $clientX;
        $rect = $total;
        $col = $clientY / $rect | 0;
        $row = ($y - $clientX) / $rect | 0;
        if ($row >= 0) {
            $total = $this.$gridSize;
            if ($row < $total && $col >= 0 && $col < $total) {
                $total = $this.$selectedRow;
                if ($total < 0) {
                    $this.$selectedRow = $row;
                    $this.$selectedCol = $col;
                } else {
                    a: {
                        $total = jl_Math_abs0($row - $total | 0);
                        var$12 = jl_Math_abs0($col - $this.$selectedCol | 0);
                        if (!($total == 1 && !var$12)) {
                            if ($total)
                                break a;
                            if (var$12 != 1)
                                break a;
                        }
                        $total = $this.$selectedRow;
                        var$12 = $this.$selectedCol;
                        $this.$animating = 1;
                        var$13 = $this.$grid.data;
                        var$14 = var$13[$total].data[var$12];
                        var$13[$total].data[var$12] = var$13[$row].data[$col];
                        var$13[$row].data[$col] = var$14;
                        rdd_DigGame_draw($this);
                        var$14 = new rdd_DigGame$trySwap$lambda$_8_0;
                        var$14.$_028 = $this;
                        var$14.$_11 = $total;
                        var$14.$_2 = var$12;
                        var$14.$_3 = $row;
                        var$14.$_4 = $col;
                        setTimeout(otji_JS_function(otji_JSWrapper_unwrap(var$14), "onTimer"), 200);
                    }
                    $this.$selectedRow = (-1);
                    $this.$selectedCol = (-1);
                }
                rdd_DigGame_draw($this);
                return;
            }
        }
        return;
    }
},
rdd_DigGame_findMatches = $this => {
    let $count, var$2, $r, $c, $type, $len, $c_0, $i, $matched, $idx, $r_0, $result, var$13, $r_1;
    $count = $this.$gridSize;
    var$2 = $rt_createBooleanMultiArray([$count, $count]).data;
    $count = 0;
    $r = 0;
    while ($r < $this.$gridSize) {
        $c = 0;
        while ($c < ($this.$gridSize - 2 | 0)) {
            $type = $this.$grid.data[$r].data[$c].$type;
            $len = 1;
            while (true) {
                $c_0 = $c + $len | 0;
                if ($c_0 >= $this.$gridSize)
                    break;
                if (!jl_String_equals($this.$grid.data[$r].data[$c_0].$type, $type))
                    break;
                $len = $len + 1 | 0;
            }
            if ($len >= 3) {
                $i = 0;
                while ($i < $len) {
                    $matched = var$2[$r].data;
                    $idx = $c + $i | 0;
                    if (!$matched[$idx]) {
                        var$2[$r].data[$idx] = 1;
                        $count = $count + 1 | 0;
                    }
                    $i = $i + 1 | 0;
                }
            }
            $c = $c_0;
        }
        $r = $r + 1 | 0;
    }
    $c = 0;
    while (true) {
        $r = $this.$gridSize;
        if ($c >= $r)
            break;
        $r_0 = 0;
        while ($r_0 < ($this.$gridSize - 2 | 0)) {
            $type = $this.$grid.data[$r_0].data[$c].$type;
            $len = 1;
            while (true) {
                $r = $r_0 + $len | 0;
                if ($r >= $this.$gridSize)
                    break;
                if (!jl_String_equals($this.$grid.data[$r].data[$c].$type, $type))
                    break;
                $len = $len + 1 | 0;
            }
            if ($len >= 3) {
                $i = 0;
                while ($i < $len) {
                    $idx = $r_0 + $i | 0;
                    if (!var$2[$idx].data[$c]) {
                        var$2[$idx].data[$c] = 1;
                        $count = $count + 1 | 0;
                    }
                    $i = $i + 1 | 0;
                }
            }
            $r_0 = $r;
        }
        $c = $c + 1 | 0;
    }
    $result = $rt_createIntMultiArray([2, $count]);
    var$13 = $result.data;
    $idx = 0;
    $r_1 = 0;
    while ($r_1 < $r) {
        $c = 0;
        while ($c < $r) {
            if (var$2[$r_1].data[$c]) {
                var$13[$idx].data[0] = $r_1;
                var$13[$idx].data[1] = $c;
                $idx = $idx + 1 | 0;
            }
            $c = $c + 1 | 0;
        }
        $r_1 = $r_1 + 1 | 0;
    }
    return $result;
},
rdd_DigGame_processMatches = $this => {
    let $matches, var$2, var$3, var$4, $points, $boneCount, var$7, var$8;
    $matches = (rdd_DigGame_findMatches($this)).data;
    var$2 = $matches.length;
    if (!var$2) {
        $this.$animating = 0;
        rdd_DigGame_updateUI($this);
        var$3 = $this.$score0;
        if (var$3 >= $this.$targetScore) {
            $this.$playing0 = 0;
            var$4 = new jl_StringBuilder;
            jl_AbstractStringBuilder__init_(var$4);
            jl_StringBuilder_append(jl_StringBuilder_append1(jl_StringBuilder_append(var$4, $rt_s(481)), var$3), $rt_s(482));
            rdd_DigGame_showMessage($this, jl_AbstractStringBuilder_toString(var$4), 1);
            var$4 = new rdd_DigGame$win$lambda$_16_0;
            var$4.$_033 = $this;
            setTimeout(otji_JS_function(otji_JSWrapper_unwrap(var$4), "onTimer"), 1500);
        } else if ($this.$moves <= 0) {
            $this.$playing0 = 0;
            rdd_DigGame_showMessage($this, $rt_s(483), 0);
            var$4 = new rdd_DigGame$lose$lambda$_17_0;
            var$4.$_037 = $this;
            setTimeout(otji_JS_function(otji_JSWrapper_unwrap(var$4), "onTimer"), 1500);
        }
        return;
    }
    $points = var$2 >= 5 ? 35 : var$2 < 4 ? 10 : 25;
    $boneCount = 0;
    var$7 = 0;
    while (var$7 < var$2) {
        var$8 = $matches[var$7].data;
        if ($this.$grid.data[var$8[0]].data[var$8[1]].$isTarget)
            $boneCount = $boneCount + 1 | 0;
        var$7 = var$7 + 1 | 0;
    }
    $this.$score0 = $this.$score0 + ($rt_imul($points, var$2 / 3 | 0) + ($boneCount * 5 | 0) | 0) | 0;
    $this.$bonesCollected = $this.$bonesCollected + $boneCount | 0;
    var$3 = 0;
    while (var$3 < var$2) {
        var$8 = $matches[var$3].data;
        $this.$grid.data[var$8[0]].data[var$8[1]] = null;
        var$3 = var$3 + 1 | 0;
    }
    rdd_DigGame_draw($this);
    var$4 = new rdd_DigGame$processMatches$lambda$_10_0;
    var$4.$_046 = $this;
    setTimeout(otji_JS_function(otji_JSWrapper_unwrap(var$4), "onTimer"), 250);
},
rdd_DigGame_draw = $this => {
    let var$1, var$2, var$3, var$4, $total, $r, $c, var$8, $x, $y, $el, var$12, var$13, var$14, var$15, var$16;
    var$1 = $this.$ctx0;
    var$2 = $this.$canvas.width;
    var$3 = $this.$canvas.height;
    var$1.clearRect(0.0, 0.0, var$2, var$3);
    var$1 = $this.$ctx0;
    var$4 = "#f5f0e0";
    var$1.fillStyle = var$4;
    var$1 = $this.$ctx0;
    var$2 = $this.$canvas.width;
    var$3 = $this.$canvas.height;
    var$1.fillRect(0.0, 0.0, var$2, var$3);
    $total = $this.$cellSize + $this.$padding | 0;
    $r = 0;
    while ($r < $this.$gridSize) {
        $c = 0;
        while ($c < $this.$gridSize) {
            var$8 = $this.$padding;
            $x = var$8 + $rt_imul($c, $total) | 0;
            $y = var$8 + $rt_imul($r, $total) | 0;
            $this.$ctx0.fillStyle = $rt_ustr(($r + $c | 0) % 2 | 0 ? $rt_s(484) : $rt_s(485));
            $el = $this.$ctx0;
            var$3 = $x;
            var$12 = $y;
            var$13 = $this.$cellSize;
            $el.fillRect(var$3, var$12, var$13, var$13);
            if ($r == $this.$selectedRow && $c == $this.$selectedCol) {
                $this.$ctx0.strokeStyle = "#FFD700";
                $this.$ctx0.lineWidth = 3.0;
                var$1 = $this.$ctx0;
                var$13 = $x + 2 | 0;
                var$14 = $y + 2 | 0;
                var$2 = $this.$cellSize - 4 | 0;
                var$1.strokeRect(var$13, var$14, var$2, var$2);
            }
            var$15 = $this.$grid.data;
            if (var$15[$r].data[$c] !== null) {
                $el = var$15[$r].data[$c];
                if ($el.$isTarget) {
                    $this.$ctx0.fillStyle = "rgba(255, 215, 0, 0.15)";
                    var$1 = $this.$ctx0;
                    var$13 = $this.$cellSize;
                    var$1.fillRect(var$3, var$12, var$13, var$13);
                }
                var$16 = $this.$ctx0;
                var$8 = $this.$cellSize * 0.7 | 0;
                var$1 = new jl_StringBuilder;
                jl_AbstractStringBuilder__init_(var$1);
                jl_StringBuilder_append(jl_StringBuilder_append1(var$1, var$8), $rt_s(470));
                var$16.font = $rt_ustr(jl_AbstractStringBuilder_toString(var$1));
                $this.$ctx0.textAlign = "center";
                $this.$ctx0.textBaseline = "middle";
                var$1 = $this.$ctx0;
                var$4 = $el.$icon0;
                var$13 = $this.$cellSize / 2.0;
                var$1.fillText($rt_ustr(var$4), var$3 + var$13, var$12 + var$13);
            }
            $c = $c + 1 | 0;
        }
        $r = $r + 1 | 0;
    }
},
rdd_DigGame_updateUI = $this => {
    let var$1, var$2, var$3;
    var$1 = $this.$score0;
    var$2 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$2);
    jl_StringBuilder_append1(jl_StringBuilder_append(var$2, $rt_s(475)), var$1);
    rddc_UIHelper_setText($rt_s(486), jl_AbstractStringBuilder_toString(var$2));
    var$1 = $this.$targetScore;
    var$2 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$2);
    jl_StringBuilder_append1(jl_StringBuilder_append(var$2, $rt_s(487)), var$1);
    rddc_UIHelper_setText($rt_s(488), jl_AbstractStringBuilder_toString(var$2));
    var$1 = $this.$moves;
    var$2 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$2);
    jl_StringBuilder_append1(jl_StringBuilder_append(var$2, $rt_s(489)), var$1);
    rddc_UIHelper_setText($rt_s(490), jl_AbstractStringBuilder_toString(var$2));
    var$1 = $this.$gridSize;
    var$2 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$2);
    var$3 = jl_StringBuilder_append1(jl_StringBuilder_append(var$2, $rt_s(491)), var$1);
    jl_AbstractStringBuilder_append(var$3, 215);
    jl_StringBuilder_append1(var$3, var$1);
    rddc_UIHelper_setText($rt_s(492), jl_AbstractStringBuilder_toString(var$2));
    var$1 = $this.$bonesCollected;
    var$2 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$2);
    jl_StringBuilder_append1(jl_StringBuilder_append(var$2, $rt_s(493)), var$1);
    rddc_UIHelper_setText($rt_s(494), jl_AbstractStringBuilder_toString(var$2));
},
rdd_DigGame_showMessage = ($this, $text, $success) => {
    let $el, var$4;
    $el = rddc_UIHelper_byId($rt_s(495));
    if ($el === null)
        return;
    otjdh_HTMLElement_withText$static($el, $text);
    $el.style["display"] = "block";
    var$4 = !$success ? $rt_s(479) : $rt_s(480);
    $el.style["color"] = $rt_ustr(var$4);
    $text = new rdd_DigGame$showMessage$lambda$_18_0;
    $text.$_045 = $el;
    setTimeout(otji_JS_function(otji_JSWrapper_unwrap($text), "onTimer"), 1500);
};
function rdd_Game$buildAllScreens$lambda$_2_2() {
    jl_Object.call(this);
    this.$_0 = null;
}
function rdd_Game$buildAllScreens$lambda$_2_3() {
    jl_Object.call(this);
    this.$_012 = null;
}
let jl_IllegalStateException = $rt_classWithoutFields(jl_RuntimeException),
otjdx_Node = $rt_classWithoutFields(0),
otjdx_Element = $rt_classWithoutFields(0),
otjdc_ElementCSSInlineStyle = $rt_classWithoutFields(0),
otjde_EventTarget = $rt_classWithoutFields(0),
otjde_EventTarget_onEvent$static = ($this, $type, $listener) => {
    let var$4, var$5;
    $this.addEventListener($rt_ustr($type), otji_JS_function($listener, "handleEvent"));
    var$4 = new otjde_Registration;
    var$5 = null;
    var$4.$target = $this;
    var$4.$type1 = $type;
    var$4.$listener = $listener;
    var$4.$useCapture = var$5;
    return var$4;
},
otjde_FocusEventTarget = $rt_classWithoutFields(0),
otjde_MouseEventTarget = $rt_classWithoutFields(0),
otjde_MouseEventTarget_onClick$static = ($this, $listener) => {
    return otjde_EventTarget_onEvent$static($this, $rt_s(496), $listener);
},
otjde_WheelEventTarget = $rt_classWithoutFields(0),
otjde_KeyboardEventTarget = $rt_classWithoutFields(0),
otjde_LoadEventTarget = $rt_classWithoutFields(0),
otjde_TouchEventTarget = $rt_classWithoutFields(0),
otjp_ToggleEventTarget = $rt_classWithoutFields(0),
otjde_InputEventTarget = $rt_classWithoutFields(0),
otjdh_HTMLElement = $rt_classWithoutFields(),
otjdh_HTMLElement_clear$static = $this => {
    let $node, $node_0;
    $node = $this.lastChild;
    while ($node !== null) {
        $node_0 = $node.previousSibling;
        if ($node.nodeType != 2)
            $this.removeChild($node);
        $node = $node_0;
    }
    return $this;
},
otjdh_HTMLElement_withText$static = ($this, $content) => {
    let var$3;
    var$3 = otjdh_HTMLElement_clear$static($this);
    $content = $this.ownerDocument.createTextNode($rt_ustr($content));
    var$3.appendChild($content);
    return $this;
},
otjde_EventListener = $rt_classWithoutFields(0);
function rdd_Game$setupAuthHandlers$lambda$_4_0() {
    jl_Object.call(this);
    this.$_041 = null;
}
let rdd_Game$setupAuthHandlers$lambda$_4_0_handleEvent$exported$0 = (var$1, var$2) => {
    let var$3, var$4, var$5, var$6;
    var$1 = var$1.$_041;
    var$2 = rddc_UIHelper_getInputValue($rt_s(497));
    var$3 = rddc_UIHelper_getInputValue($rt_s(498));
    if (!jl_String_isEmpty(var$2) && !jl_String_isEmpty(var$3)) {
        rddc_GameStorage_$callClinit();
        var$4 = rddc_GameStorage_ls;
        var$5 = new jl_StringBuilder;
        jl_AbstractStringBuilder__init_(var$5);
        jl_StringBuilder_append(jl_StringBuilder_append(var$5, $rt_s(499)), var$2);
        var$4 = $rt_str(var$4.getItem($rt_ustr(jl_AbstractStringBuilder_toString(var$5))));
        if (var$4 !== null && jl_String_equals(var$4, var$3)) {
            var$3 = rddc_GameStorage_loadProfile(var$2);
            rddc_GameStorage_current = var$3;
            if (var$3 === null) {
                var$4 = rddc_GameStorage$Profile__init_();
                rddc_GameStorage_current = var$4;
                var$4.$email = var$2;
                var$4.$name = (jl_String_split(var$2, $rt_s(76))).data[0];
            }
            rddc_GameStorage_saveCurrentEmail(var$2);
            var$6 = 1;
        } else
            var$6 = 0;
        if (var$6)
            rdd_Game_startIntro(var$1);
        else
            rddc_UIHelper_alert($rt_s(500));
    } else
        rddc_UIHelper_alert($rt_s(501));
};
function rdd_Game$setupAuthHandlers$lambda$_4_1() {
    jl_Object.call(this);
    this.$_017 = null;
}
let rdd_Game$setupAuthHandlers$lambda$_4_1_handleEvent$exported$0 = (var$1, var$2) => {
    let var$3, var$4, var$5, var$6, var$7;
    var$1 = var$1.$_017;
    var$2 = rddc_UIHelper_getInputValue($rt_s(497));
    var$3 = rddc_UIHelper_getInputValue($rt_s(498));
    if (!jl_String_isEmpty(var$2) && !jl_String_isEmpty(var$3)) {
        if (var$3.$nativeString.length < 6)
            rddc_UIHelper_alert($rt_s(502));
        else {
            rddc_GameStorage_$callClinit();
            var$4 = rddc_GameStorage_ls;
            var$5 = new jl_StringBuilder;
            jl_AbstractStringBuilder__init_(var$5);
            jl_StringBuilder_append(jl_StringBuilder_append(var$5, $rt_s(499)), var$2);
            if ($rt_str(var$4.getItem($rt_ustr(jl_AbstractStringBuilder_toString(var$5)))) !== null)
                var$6 = 0;
            else {
                var$4 = rddc_GameStorage$Profile__init_();
                var$4.$email = var$2;
                var$4.$name = (jl_String_split(var$2, $rt_s(76))).data[0];
                var$7 = rddc_GameStorage_ls;
                var$5 = new jl_StringBuilder;
                jl_AbstractStringBuilder__init_(var$5);
                jl_StringBuilder_append(jl_StringBuilder_append(var$5, $rt_s(499)), var$2);
                var$7.setItem($rt_ustr(jl_AbstractStringBuilder_toString(var$5)), $rt_ustr(var$3));
                rddc_GameStorage_saveProfile(var$4);
                rddc_GameStorage_current = var$4;
                rddc_GameStorage_saveCurrentEmail(var$2);
                var$6 = 1;
            }
            if (var$6)
                rdd_Game_startIntro(var$1);
            else
                rddc_UIHelper_alert($rt_s(503));
        }
    } else
        rddc_UIHelper_alert($rt_s(501));
};
function rdd_Game$setupAuthHandlers$lambda$_4_2() {
    jl_Object.call(this);
    this.$_07 = null;
}
let rdd_Game$setupAuthHandlers$lambda$_4_2_handleEvent$exported$0 = (var$1, var$2) => {
    var$1 = var$1.$_07;
    rddc_GameStorage_$callClinit();
    var$2 = rddc_GameStorage$Profile__init_();
    rddc_GameStorage_current = var$2;
    var$2.$email = $rt_s(504);
    var$2.$name = $rt_s(505);
    var$2.$isDemo = 1;
    rddc_GameStorage_saveCurrentEmail($rt_s(504));
    rdd_Game_startIntro(var$1);
};
function rdd_Game$setupIntroHandlers$lambda$_8_0() {
    jl_Object.call(this);
    this.$_05 = null;
}
let rdd_Game$setupIntroHandlers$lambda$_8_0_handleEvent$exported$0 = (var$1, var$2) => {
    let var$3;
    var$1 = var$1.$_05;
    var$3 = var$1.$introIndex + 1 | 0;
    var$1.$introIndex = var$3;
    rdd_Game_$callClinit();
    if (var$3 < rdd_Game_INTRO_TEXTS.data.length)
        rdd_Game_renderIntroText(var$1);
    else {
        rdd_Game_showScreen(var$1, $rt_s(23));
        rdd_Game_generateLevelsGrid(var$1);
    }
};
function rdd_Game$setupMenuHandlers$lambda$_12_0() {
    jl_Object.call(this);
    this.$_011 = null;
}
let rdd_Game$setupMenuHandlers$lambda$_12_0_handleEvent$exported$0 = (var$1, var$2) => {
    var$1 = var$1.$_011;
    rdd_Game_showScreen(var$1, $rt_s(23));
    rdd_Game_generateLevelsGrid(var$1);
};
function rdd_Game$setupMenuHandlers$lambda$_12_1() {
    jl_Object.call(this);
    this.$_00 = null;
}
let rdd_Game$setupMenuHandlers$lambda$_12_1_handleEvent$exported$0 = (var$1, var$2) => {
    rdd_Game_renderEncyclopedia(var$1.$_00);
};
function rdd_Game$setupMenuHandlers$lambda$_12_2() {
    jl_Object.call(this);
    this.$_038 = null;
}
let rdd_Game$setupMenuHandlers$lambda$_12_2_handleEvent$exported$0 = (var$1, var$2) => {
    let var$3, var$4, var$5, var$6, var$7, var$8;
    var$1 = var$1;
    rdd_Game_showScreen(var$1.$_038, $rt_s(35));
    var$1 = rddc_GameStorage_current0();
    if (var$1 === null)
        rddc_UIHelper_setHTML($rt_s(506), $rt_s(507));
    else {
        var$3 = 0;
        var$4 = 0;
        var$5 = var$1.$collection.data;
        var$6 = var$5.length;
        var$7 = 0;
        while (var$7 < var$6) {
            var$8 = var$5[var$7];
            if (var$8 > 0)
                var$3 = var$3 + 1 | 0;
            var$4 = var$4 + var$8 | 0;
            var$7 = var$7 + 1 | 0;
        }
        var$2 = new jl_StringBuilder;
        jl_AbstractStringBuilder__init_(var$2);
        jl_StringBuilder_append0(jl_StringBuilder_append0(jl_StringBuilder_append0(var$2, $rt_s(508)), var$1.$name), $rt_s(110));
        jl_StringBuilder_append0(jl_StringBuilder_append1(jl_StringBuilder_append0(var$2, $rt_s(509)), var$1.$level), $rt_s(110));
        jl_StringBuilder_append0(jl_StringBuilder_append1(jl_StringBuilder_append0(var$2, $rt_s(510)), var$1.$totalScore), $rt_s(110));
        jl_StringBuilder_append0(jl_StringBuilder_append1(jl_StringBuilder_append0(var$2, $rt_s(511)), var$1.$gamesPlayed), $rt_s(110));
        jl_StringBuilder_append0(jl_StringBuilder_append1(jl_StringBuilder_append0(var$2, $rt_s(512)), var$1.$gamesWon), $rt_s(110));
        jl_StringBuilder_append0(jl_StringBuilder_append1(jl_StringBuilder_append0(jl_StringBuilder_append1(jl_StringBuilder_append0(var$2, $rt_s(513)), var$3), $rt_s(514)), rddd_Dinosaurs_count()), $rt_s(110));
        jl_StringBuilder_append0(jl_StringBuilder_append1(jl_StringBuilder_append0(var$2, $rt_s(515)), var$4), $rt_s(110));
        jl_StringBuilder_append0(jl_StringBuilder_append1(jl_StringBuilder_append0(var$2, $rt_s(516)), var$1.$unlockedLevels), $rt_s(110));
        rddc_UIHelper_setHTML($rt_s(506), jl_AbstractStringBuilder_toString(var$2));
    }
};
function rdd_Game$setupMenuHandlers$lambda$_12_3() {
    jl_Object.call(this);
    this.$_035 = null;
}
let rdd_Game$setupMenuHandlers$lambda$_12_3_handleEvent$exported$0 = (var$1, var$2) => {
    rdd_Game_showScreen(var$1.$_035, $rt_s(37));
};
function rdd_Game$setupMenuHandlers$lambda$_12_4() {
    jl_Object.call(this);
    this.$_024 = null;
}
let rdd_Game$setupMenuHandlers$lambda$_12_4_handleEvent$exported$0 = (var$1, var$2) => {
    var$1 = var$1.$_024;
    rddc_GameStorage_$callClinit();
    rddc_GameStorage_current = null;
    rddc_GameStorage_saveCurrentEmail($rt_s(3));
    rdd_Game_showScreen(var$1, $rt_s(17));
};
function rdd_Game$setupNavigationHandlers$lambda$_24_0() {
    jl_Object.call(this);
    this.$_027 = null;
}
let rdd_Game$setupNavigationHandlers$lambda$_24_0_handleEvent$exported$0 = (var$1, var$2) => {
    rdd_Game_showScreen(var$1.$_027, $rt_s(21));
};
function rdd_Game$setupNavigationHandlers$lambda$_24_1() {
    jl_Object.call(this);
    this.$_015 = null;
}
let rdd_Game$setupNavigationHandlers$lambda$_24_1_handleEvent$exported$0 = (var$1, var$2) => {
    rdd_Game_showScreen(var$1.$_015, $rt_s(21));
};
function rdd_Game$setupNavigationHandlers$lambda$_24_2() {
    jl_Object.call(this);
    this.$_04 = null;
}
let rdd_Game$setupNavigationHandlers$lambda$_24_2_handleEvent$exported$0 = (var$1, var$2) => {
    rdd_Game_showScreen(var$1.$_04, $rt_s(21));
};
function rdd_Game$setupNavigationHandlers$lambda$_24_3() {
    jl_Object.call(this);
    this.$_030 = null;
}
let rdd_Game$setupNavigationHandlers$lambda$_24_3_handleEvent$exported$0 = (var$1, var$2) => {
    rdd_Game_showScreen(var$1.$_030, $rt_s(21));
};
function rdd_Game$setupNavigationHandlers$lambda$_24_4() {
    jl_Object.call(this);
    this.$_021 = null;
}
let rdd_Game$setupNavigationHandlers$lambda$_24_4_handleEvent$exported$0 = (var$1, var$2) => {
    rdd_Game_showScreen(var$1.$_021, $rt_s(31));
};
function rdd_Game$setupNavigationHandlers$lambda$_24_5() {
    jl_Object.call(this);
    this.$_09 = null;
}
let rdd_Game$setupNavigationHandlers$lambda$_24_5_handleEvent$exported$0 = (var$1, var$2) => {
    var$1 = var$1.$_09;
    rdd_Game_showScreen(var$1, $rt_s(21));
    rdd_Game_updatePlayerInfo(var$1);
};
function rdd_PathGame$setupInput$lambda$_4_0() {
    jl_Object.call(this);
    this.$_016 = null;
}
let rdd_PathGame$setupInput$lambda$_4_0_handleEvent$exported$0 = (var$1, var$2) => {
    let var$3;
    var$1 = var$1.$_016;
    if (var$1.$playing) {
        var$3 = $rt_str(var$2.key);
        if (!jl_String_equals(var$3, $rt_s(517)) && !jl_String_equals(var$3, $rt_s(518)) && !jl_String_equals(var$3, $rt_s(519))) {
            if (!jl_String_equals(var$3, $rt_s(520)) && !jl_String_equals(var$3, $rt_s(298)) && !jl_String_equals(var$3, $rt_s(299))) {
                if (!(!jl_String_equals(var$3, $rt_s(521)) && !jl_String_equals(var$3, $rt_s(294)) && !jl_String_equals(var$3, $rt_s(295)))) {
                    var$1.$keyUp = 1;
                    var$2.preventDefault();
                } else if (!(!jl_String_equals(var$3, $rt_s(522)) && !jl_String_equals(var$3, $rt_s(296)) && !jl_String_equals(var$3, $rt_s(297)))) {
                    var$1.$keyDown = 1;
                    var$2.preventDefault();
                }
            } else {
                var$1.$keyRight = 1;
                var$2.preventDefault();
            }
        } else {
            var$1.$keyLeft = 1;
            var$2.preventDefault();
        }
    }
};
function rdd_PathGame$setupInput$lambda$_4_1() {
    jl_Object.call(this);
    this.$_029 = null;
}
let rdd_PathGame$setupInput$lambda$_4_1_handleEvent$exported$0 = (var$1, var$2) => {
    let var$3;
    var$1 = var$1.$_029;
    var$3 = $rt_str(var$2.key);
    if (!jl_String_equals(var$3, $rt_s(517)) && !jl_String_equals(var$3, $rt_s(518)) && !jl_String_equals(var$3, $rt_s(519))) {
        if (!jl_String_equals(var$3, $rt_s(520)) && !jl_String_equals(var$3, $rt_s(298)) && !jl_String_equals(var$3, $rt_s(299))) {
            if (!(!jl_String_equals(var$3, $rt_s(521)) && !jl_String_equals(var$3, $rt_s(294)) && !jl_String_equals(var$3, $rt_s(295))))
                var$1.$keyUp = 0;
            else if (!(!jl_String_equals(var$3, $rt_s(522)) && !jl_String_equals(var$3, $rt_s(296)) && !jl_String_equals(var$3, $rt_s(297))))
                var$1.$keyDown = 0;
        } else
            var$1.$keyRight = 0;
    } else
        var$1.$keyLeft = 0;
};
function rdd_PathGame$setupInput$lambda$_4_2() {
    jl_Object.call(this);
    this.$_043 = null;
}
let rdd_PathGame$setupInput$lambda$_4_2_run = var$0 => {
    var$0.$_043.$keyLeft = 1;
};
function rdd_PathGame$setupInput$lambda$_4_3() {
    jl_Object.call(this);
    this.$_08 = null;
}
let rdd_PathGame$setupInput$lambda$_4_3_run = var$0 => {
    var$0.$_08.$keyLeft = 0;
};
function rdd_PathGame$setupInput$lambda$_4_4() {
    jl_Object.call(this);
    this.$_023 = null;
}
let rdd_PathGame$setupInput$lambda$_4_4_run = var$0 => {
    var$0.$_023.$keyRight = 1;
};
function rdd_PathGame$setupInput$lambda$_4_5() {
    jl_Object.call(this);
    this.$_034 = null;
}
let rdd_PathGame$setupInput$lambda$_4_5_run = var$0 => {
    var$0.$_034.$keyRight = 0;
};
function rdd_PathGame$setupInput$lambda$_4_6() {
    jl_Object.call(this);
    this.$_048 = null;
}
let rdd_PathGame$setupInput$lambda$_4_6_run = var$0 => {
    var$0.$_048.$keyUp = 1;
};
function rdd_PathGame$setupInput$lambda$_4_7() {
    jl_Object.call(this);
    this.$_013 = null;
}
let rdd_PathGame$setupInput$lambda$_4_7_run = var$0 => {
    var$0.$_013.$keyUp = 0;
};
function rdd_PathGame$setupInput$lambda$_4_8() {
    jl_Object.call(this);
    this.$_025 = null;
}
let rdd_PathGame$setupInput$lambda$_4_8_run = var$0 => {
    var$0.$_025.$keyDown = 1;
};
function rdd_PathGame$setupInput$lambda$_4_9() {
    jl_Object.call(this);
    this.$_036 = null;
}
let rdd_PathGame$setupInput$lambda$_4_9_run = var$0 => {
    var$0.$_036.$keyDown = 0;
};
function rdd_DigGame$setupInput$lambda$_5_0() {
    jl_Object.call(this);
    this.$_031 = null;
}
let rdd_DigGame$setupInput$lambda$_5_0_handleEvent$exported$0 = (var$1, var$2) => {
    rdd_DigGame_handleClick(var$1.$_031, var$2.clientX, var$2.clientY);
};
function rdd_DigGame$setupInput$lambda$_5_1() {
    jl_Object.call(this);
    this.$_042 = null;
}
let rdd_DigGame$setupInput$lambda$_5_1_handleEvent$exported$0 = (var$1, var$2) => {
    var$1 = var$1.$_042;
    var$2.preventDefault();
    var$2 = var$2.changedTouches;
    if (var$2.length > 0) {
        var$2 = otji_JSWrapper_maybeUnwrap(var$2[0]);
        rdd_DigGame_handleClick(var$1, var$2.clientX, var$2.clientY);
    }
};
function otjde_Registration() {
    let a = this; jl_Object.call(a);
    a.$target = null;
    a.$type1 = null;
    a.$listener = null;
    a.$useCapture = null;
}
function rdd_PathGame$bindMobileButton$lambda$_5_0() {
    jl_Object.call(this);
    this.$_02 = null;
}
let rdd_PathGame$bindMobileButton$lambda$_5_0_handleEvent$exported$0 = (var$1, var$2) => {
    var$1 = var$1.$_02;
    var$2.preventDefault();
    var$1.$run();
};
function rdd_PathGame$bindMobileButton$lambda$_5_1() {
    jl_Object.call(this);
    this.$_040 = null;
}
let rdd_PathGame$bindMobileButton$lambda$_5_1_handleEvent$exported$0 = (var$1, var$2) => {
    var$1 = var$1.$_040;
    var$2.preventDefault();
    var$1.$run();
};
function rdd_PathGame$bindMobileButton$lambda$_5_2() {
    jl_Object.call(this);
    this.$_018 = null;
}
let rdd_PathGame$bindMobileButton$lambda$_5_2_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$_018.$run();
};
function rdd_PathGame$bindMobileButton$lambda$_5_3() {
    jl_Object.call(this);
    this.$_06 = null;
}
let rdd_PathGame$bindMobileButton$lambda$_5_3_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$_06.$run();
};
function rdd_PathGame$bindMobileButton$lambda$_5_4() {
    jl_Object.call(this);
    this.$_044 = null;
}
let rdd_PathGame$bindMobileButton$lambda$_5_4_handleEvent$exported$0 = (var$1, var$2) => {
    var$1.$_044.$run();
},
jur_BackReferencedSingleSet = $rt_classWithoutFields(jur_SingleSet),
jur_BackReferencedSingleSet_find = ($this, $startSearch, $testString, $matchResult) => {
    let $res, $lastIndex, $saveStart;
    $res = 0;
    $lastIndex = $matchResult.$rightBound;
    a: {
        while (true) {
            if ($startSearch > $lastIndex) {
                $startSearch = $res;
                break a;
            }
            $saveStart = jur_MatchResultImpl_getStart($matchResult, $this.$groupIndex);
            jur_MatchResultImpl_setStart($matchResult, $this.$groupIndex, $startSearch);
            $res = $this.$kid.$matches($startSearch, $testString, $matchResult);
            if ($res >= 0)
                break;
            jur_MatchResultImpl_setStart($matchResult, $this.$groupIndex, $saveStart);
            $startSearch = $startSearch + 1 | 0;
        }
    }
    return $startSearch;
},
jur_BackReferencedSingleSet_findBack = ($this, $stringIndex, $startSearch, $testString, $matchResult) => {
    let $res, $saveStart;
    $res = 0;
    a: {
        while (true) {
            if ($startSearch < $stringIndex) {
                $startSearch = $res;
                break a;
            }
            $saveStart = jur_MatchResultImpl_getStart($matchResult, $this.$groupIndex);
            jur_MatchResultImpl_setStart($matchResult, $this.$groupIndex, $startSearch);
            $res = $this.$kid.$matches($startSearch, $testString, $matchResult);
            if ($res >= 0)
                break;
            jur_MatchResultImpl_setStart($matchResult, $this.$groupIndex, $saveStart);
            $startSearch = $startSearch + (-1) | 0;
        }
    }
    return $startSearch;
},
jur_BackReferencedSingleSet_processBackRefReplacement = $this => {
    return null;
};
function jur_AbstractCharClass$LazyJavaLowerCase$1() {
    jur_AbstractCharClass.call(this);
    this.$this$034 = null;
}
let jur_AbstractCharClass$LazyJavaLowerCase$1_contains = ($this, $ch) => {
    jl_Character_$callClinit();
    return jl_Character_getType($ch) != 2 ? 0 : 1;
};
function jur_AbstractCharClass$LazyJavaUpperCase$1() {
    jur_AbstractCharClass.call(this);
    this.$this$09 = null;
}
let jur_AbstractCharClass$LazyJavaUpperCase$1_contains = ($this, $ch) => {
    jl_Character_$callClinit();
    return jl_Character_getType($ch) != 1 ? 0 : 1;
};
function jur_AbstractCharClass$LazyJavaWhitespace$1() {
    jur_AbstractCharClass.call(this);
    this.$this$026 = null;
}
let jur_AbstractCharClass$LazyJavaWhitespace$1_contains = ($this, $ch) => {
    return jl_Character_isWhitespace($ch);
};
function jur_AbstractCharClass$LazyJavaMirrored$1() {
    jur_AbstractCharClass.call(this);
    this.$this$021 = null;
}
let jur_AbstractCharClass$LazyJavaMirrored$1_contains = ($this, $ch) => {
    return 0;
};
function jur_AbstractCharClass$LazyJavaDefined$1() {
    jur_AbstractCharClass.call(this);
    this.$this$024 = null;
}
let jur_AbstractCharClass$LazyJavaDefined$1_contains = ($this, $ch) => {
    jl_Character_$callClinit();
    return !jl_Character_getType($ch) ? 0 : 1;
};
function jur_AbstractCharClass$LazyJavaDigit$1() {
    jur_AbstractCharClass.call(this);
    this.$this$012 = null;
}
let jur_AbstractCharClass$LazyJavaDigit$1_contains = ($this, $ch) => {
    return jl_Character_isDigit($ch);
};
function jur_AbstractCharClass$LazyJavaIdentifierIgnorable$1() {
    jur_AbstractCharClass.call(this);
    this.$this$029 = null;
}
let jur_AbstractCharClass$LazyJavaIdentifierIgnorable$1_contains = ($this, $ch) => {
    return jl_Character_isIdentifierIgnorable($ch);
};
function jur_AbstractCharClass$LazyJavaISOControl$1() {
    jur_AbstractCharClass.call(this);
    this.$this$035 = null;
}
let jur_AbstractCharClass$LazyJavaISOControl$1_contains = ($this, $ch) => {
    a: {
        b: {
            jl_Character_$callClinit();
            if (!($ch >= 0 && $ch <= 31)) {
                if ($ch < 127)
                    break b;
                if ($ch > 159)
                    break b;
            }
            $ch = 1;
            break a;
        }
        $ch = 0;
    }
    return $ch;
};
function jur_AbstractCharClass$LazyJavaJavaIdentifierPart$1() {
    jur_AbstractCharClass.call(this);
    this.$this$06 = null;
}
let jur_AbstractCharClass$LazyJavaJavaIdentifierPart$1_contains = ($this, $ch) => {
    a: {
        b: {
            jl_Character_$callClinit();
            switch (jl_Character_getType($ch)) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 8:
                case 9:
                case 10:
                case 23:
                case 26:
                    break;
                case 7:
                case 11:
                case 12:
                case 13:
                case 14:
                case 15:
                case 16:
                case 17:
                case 18:
                case 19:
                case 20:
                case 21:
                case 22:
                case 24:
                case 25:
                    break b;
                default:
                    break b;
            }
            $ch = 1;
            break a;
        }
        $ch = jl_Character_isIdentifierIgnorable($ch);
    }
    return $ch;
};
function jur_AbstractCharClass$LazyJavaJavaIdentifierStart$1() {
    jur_AbstractCharClass.call(this);
    this.$this$013 = null;
}
let jur_AbstractCharClass$LazyJavaJavaIdentifierStart$1_contains = ($this, $ch) => {
    a: {
        b: {
            jl_Character_$callClinit();
            switch (jl_Character_getType($ch)) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 10:
                case 23:
                case 26:
                    break;
                case 6:
                case 7:
                case 8:
                case 9:
                case 11:
                case 12:
                case 13:
                case 14:
                case 15:
                case 16:
                case 17:
                case 18:
                case 19:
                case 20:
                case 21:
                case 22:
                case 24:
                case 25:
                    break b;
                default:
                    break b;
            }
            $ch = 1;
            break a;
        }
        $ch = jl_Character_isIdentifierIgnorable($ch);
    }
    return $ch;
};
function jur_AbstractCharClass$LazyJavaLetter$1() {
    jur_AbstractCharClass.call(this);
    this.$this$023 = null;
}
let jur_AbstractCharClass$LazyJavaLetter$1_contains = ($this, $ch) => {
    a: {
        jl_Character_$callClinit();
        switch (jl_Character_getType($ch)) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                $ch = 0;
                break a;
        }
        $ch = 1;
    }
    return $ch;
};
function jur_AbstractCharClass$LazyJavaLetterOrDigit$1() {
    jur_AbstractCharClass.call(this);
    this.$this$027 = null;
}
let jur_AbstractCharClass$LazyJavaLetterOrDigit$1_contains = ($this, $ch) => {
    return jl_Character_isLetterOrDigit($ch);
};
function jur_AbstractCharClass$LazyJavaSpaceChar$1() {
    jur_AbstractCharClass.call(this);
    this.$this$028 = null;
}
let jur_AbstractCharClass$LazyJavaSpaceChar$1_contains = ($this, $ch) => {
    return jl_Character_isSpaceChar($ch);
};
function jur_AbstractCharClass$LazyJavaTitleCase$1() {
    jur_AbstractCharClass.call(this);
    this.$this$014 = null;
}
let jur_AbstractCharClass$LazyJavaTitleCase$1_contains = ($this, $ch) => {
    jl_Character_$callClinit();
    return jl_Character_getType($ch) != 3 ? 0 : 1;
};
function jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart$1() {
    jur_AbstractCharClass.call(this);
    this.$this$08 = null;
}
let jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart$1_contains = ($this, $ch) => {
    a: {
        b: {
            jl_Character_$callClinit();
            switch (jl_Character_getType($ch)) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 8:
                case 9:
                case 10:
                case 23:
                    break;
                case 7:
                case 11:
                case 12:
                case 13:
                case 14:
                case 15:
                case 16:
                case 17:
                case 18:
                case 19:
                case 20:
                case 21:
                case 22:
                    break b;
                default:
                    break b;
            }
            $ch = 1;
            break a;
        }
        $ch = jl_Character_isIdentifierIgnorable($ch);
    }
    return $ch;
};
function jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart$1() {
    jur_AbstractCharClass.call(this);
    this.$this$033 = null;
}
let jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart$1_contains = ($this, $ch) => {
    a: {
        b: {
            jl_Character_$callClinit();
            switch (jl_Character_getType($ch)) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 10:
                    break;
                case 6:
                case 7:
                case 8:
                case 9:
                    break b;
                default:
                    break b;
            }
            $ch = 1;
            break a;
        }
        $ch = jl_Character_isIdentifierIgnorable($ch);
    }
    return $ch;
};
function jur_UnicodeCategory() {
    jur_AbstractCharClass.call(this);
    this.$category = 0;
}
let jur_UnicodeCategory__init_ = ($this, $category) => {
    jur_AbstractCharClass__init_($this);
    $this.$category = $category;
},
jur_UnicodeCategory__init_0 = var_0 => {
    let var_1 = new jur_UnicodeCategory();
    jur_UnicodeCategory__init_(var_1, var_0);
    return var_1;
},
jur_UnicodeCategory_contains = ($this, $ch) => {
    return $this.$alt ^ ($this.$category != jl_Character_getType0($ch & 65535) ? 0 : 1);
},
jur_UnicodeCategoryScope = $rt_classWithoutFields(jur_UnicodeCategory),
jur_UnicodeCategoryScope_contains = ($this, $ch) => {
    return $this.$alt ^ (!($this.$category >> jl_Character_getType0($ch & 65535) & 1) ? 0 : 1);
};
function ju_AbstractList$1() {
    let a = this; jl_Object.call(a);
    a.$index0 = 0;
    a.$modCount0 = 0;
    a.$size0 = 0;
    a.$removeIndex = 0;
    a.$this$03 = null;
}
let ju_AbstractList$1_hasNext = $this => {
    return $this.$index0 >= $this.$size0 ? 0 : 1;
},
ju_AbstractList$1_next = $this => {
    let var$1, var$2, var$3;
    var$1 = $this.$modCount0;
    var$2 = $this.$this$03;
    if (var$1 != var$2.$modCount) {
        var$2 = new ju_ConcurrentModificationException;
        jl_RuntimeException__init_(var$2);
        $rt_throw(var$2);
    }
    var$3 = $this.$index0;
    $this.$removeIndex = var$3;
    $this.$index0 = var$3 + 1 | 0;
    return ju_ArrayList_get(var$2, var$3);
},
jur_IntArrHash = $rt_classWithoutFields();
function rdd_Game$generateLevelsGrid$lambda$_14_0() {
    let a = this; jl_Object.call(a);
    a.$_01 = null;
    a.$_1 = 0;
}
let rdd_Game$generateLevelsGrid$lambda$_14_0_handleEvent$exported$0 = (var$1, var$2) => {
    let var$3;
    var$1 = var$1;
    var$2 = var$1.$_01;
    var$3 = var$1.$_1;
    var$2.$currentLevel = var$3;
    rdd_Game_showScreen(var$2, $rt_s(25));
    rdd_PathGame_start(var$2.$pathGame, var$3);
};
function rdd_Game$renderEncyclopedia$lambda$_21_0() {
    let a = this; jl_Object.call(a);
    a.$_014 = null;
    a.$_10 = 0;
}
let rdd_Game$renderEncyclopedia$lambda$_21_0_handleEvent$exported$0 = (var$1, var$2) => {
    let var$3, var$4, var$5, var$6, var$7, var$8, var$9;
    var$1 = var$1;
    var$2 = var$1.$_014;
    var$3 = var$1.$_10;
    rddd_Dinosaurs_$callClinit();
    var$4 = rddd_Dinosaurs_DATA.data[var$3 - 1 | 0];
    var$5 = rddc_GameStorage_getDinoCount(var$3);
    var$3 = rddc_GameStorage_getStars(var$3);
    var$6 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$6);
    var$7 = 0;
    while (var$7 < var$3) {
        jl_StringBuilder_append0(var$6, $rt_s(106));
        var$7 = var$7 + 1 | 0;
    }
    var$8 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$8);
    jl_StringBuilder_append0(var$8, $rt_s(523));
    jl_StringBuilder_append0(jl_StringBuilder_append0(jl_StringBuilder_append0(var$8, $rt_s(524)), var$4.$icon), $rt_s(110));
    jl_StringBuilder_append0(jl_StringBuilder_append0(jl_StringBuilder_append0(var$8, $rt_s(525)), var$4.$name0), $rt_s(526));
    jl_StringBuilder_append0(jl_StringBuilder_append0(jl_StringBuilder_append0(var$8, $rt_s(527)), var$4.$latinName), $rt_s(528));
    var$9 = jl_StringBuilder_append0(var$8, $rt_s(529));
    var$7 = var$6.$length0;
    jl_AbstractStringBuilder_append3(var$9, var$6, 0, var$7);
    jl_StringBuilder_append0(var$9, $rt_s(530));
    jl_StringBuilder_append0(jl_StringBuilder_append1(jl_StringBuilder_append0(var$8, $rt_s(531)), var$5), $rt_s(530));
    jl_StringBuilder_append0(var$8, $rt_s(110));
    jl_StringBuilder_append0(jl_StringBuilder_append0(jl_StringBuilder_append0(var$8, $rt_s(532)), var$4.$shortInfo), $rt_s(530));
    if (var$3 < 2)
        jl_StringBuilder_append0(var$8, $rt_s(533));
    else
        jl_StringBuilder_append0(jl_StringBuilder_append0(jl_StringBuilder_append0(var$8, $rt_s(534)), var$4.$fullArticle), $rt_s(530));
    if (var$3 >= 3)
        jl_StringBuilder_append0(jl_StringBuilder_append0(jl_StringBuilder_append0(var$8, $rt_s(535)), var$4.$funFact), $rt_s(110));
    jl_StringBuilder_append0(jl_StringBuilder_append0(jl_StringBuilder_append0(var$8, $rt_s(536)), var$4.$category2), $rt_s(530));
    rddc_UIHelper_setHTML($rt_s(537), jl_AbstractStringBuilder_toString(var$8));
    rdd_Game_showScreen(var$2, $rt_s(33));
};
function rddd_GameElement() {
    let a = this; jl_Object.call(a);
    a.$type = null;
    a.$icon0 = null;
    a.$name2 = null;
    a.$isTarget = 0;
}
let rddd_GameElement_TYPES = null,
rddd_GameElement_ICONS = null,
rddd_GameElement_NAMES = null,
rddd_GameElement_$callClinit = () => {
    rddd_GameElement_$callClinit = $rt_eraseClinit(rddd_GameElement);
    rddd_GameElement__clinit_();
},
rddd_GameElement_random = () => {
    let var$1, var$2, $i, var$4, var$5, var$6, var$7;
    rddd_GameElement_$callClinit();
    var$1 = jl_Math_random();
    var$2 = rddd_GameElement_TYPES.data;
    $i = var$1 * var$2.length | 0;
    var$4 = new rddd_GameElement;
    var$5 = var$2[$i];
    var$6 = rddd_GameElement_ICONS.data[$i];
    var$7 = rddd_GameElement_NAMES.data[$i];
    $i = $i ? 0 : 1;
    var$4.$type = var$5;
    var$4.$icon0 = var$6;
    var$4.$name2 = var$7;
    var$4.$isTarget = $i;
    return var$4;
},
rddd_GameElement__clinit_ = () => {
    rddd_GameElement_TYPES = $rt_wrapArray(jl_String, [$rt_s(538), $rt_s(539), $rt_s(540), $rt_s(541)]);
    rddd_GameElement_ICONS = $rt_wrapArray(jl_String, [$rt_s(542), $rt_s(471), $rt_s(543), $rt_s(544)]);
    rddd_GameElement_NAMES = $rt_wrapArray(jl_String, [$rt_s(545), $rt_s(546), $rt_s(547), $rt_s(548)]);
},
otjb_TimerHandler = $rt_classWithoutFields(0);
function rdd_DigGame$trySwap$lambda$_8_0() {
    let a = this; jl_Object.call(a);
    a.$_028 = null;
    a.$_11 = 0;
    a.$_2 = 0;
    a.$_3 = 0;
    a.$_4 = 0;
}
let rdd_DigGame$trySwap$lambda$_8_0_onTimer$exported$0 = var$1 => {
    let var$2, var$3, var$4, var$5, var$6, var$7;
    var$1 = var$1;
    var$2 = var$1.$_028;
    var$3 = var$1.$_11;
    var$4 = var$1.$_2;
    var$5 = var$1.$_3;
    var$6 = var$1.$_4;
    if ((rdd_DigGame_findMatches(var$2)).data.length > 0) {
        var$2.$moves = var$2.$moves - 1 | 0;
        rdd_DigGame_processMatches(var$2);
    } else {
        var$7 = var$2.$grid.data;
        var$1 = var$7[var$3].data[var$4];
        var$7[var$3].data[var$4] = var$7[var$5].data[var$6];
        var$7[var$5].data[var$6] = var$1;
        rdd_DigGame_draw(var$2);
        var$2.$animating = 0;
        rdd_DigGame_updateUI(var$2);
    }
},
ju_ConcurrentModificationException = $rt_classWithoutFields(jl_RuntimeException);
function rdd_DigGame$processMatches$lambda$_10_0() {
    jl_Object.call(this);
    this.$_046 = null;
}
let rdd_DigGame$processMatches$lambda$_10_0_onTimer$exported$0 = var$1 => {
    let var$2, var$3, var$4, var$5, var$6;
    var$1 = var$1.$_046;
    var$2 = 0;
    while (true) {
        var$3 = var$1.$gridSize;
        if (var$2 >= var$3)
            break;
        var$3 = var$3 - 1 | 0;
        var$4 = var$3;
        while (var$3 >= 0) {
            var$5 = var$1.$grid.data;
            if (var$5[var$3].data[var$2] !== null) {
                var$5[var$4].data[var$2] = var$5[var$3].data[var$2];
                if (var$4 != var$3)
                    var$5[var$3].data[var$2] = null;
                var$4 = var$4 + (-1) | 0;
            }
            var$3 = var$3 + (-1) | 0;
        }
        var$2 = var$2 + 1 | 0;
    }
    rdd_DigGame_draw(var$1);
    var$6 = new rdd_DigGame$lambda$processMatches$5$lambda$_22_0;
    var$6.$_020 = var$1;
    setTimeout(otji_JS_function(otji_JSWrapper_unwrap(var$6), "onTimer"), 200);
};
function rdd_DigGame$win$lambda$_16_0() {
    jl_Object.call(this);
    this.$_033 = null;
}
let rdd_DigGame$win$lambda$_16_0_onTimer$exported$0 = var$1 => {
    let var$2, var$3, var$4, var$5, var$6, var$7;
    var$1 = var$1.$_033;
    var$2 = var$1.$onCompleteCallback;
    var$3 = var$1.$score0;
    var$1 = var$2.$_0;
    var$2 = rddc_GameStorage_current0();
    if (var$2 !== null && !var$2.$isDemo) {
        var$2.$totalScore = var$2.$totalScore + var$3 | 0;
        var$2.$gamesPlayed = var$2.$gamesPlayed + 1 | 0;
        var$2.$gamesWon = var$2.$gamesWon + 1 | 0;
        var$3 = var$1.$currentLevel + 1 | 0;
        var$2 = rddc_GameStorage_current;
        if (var$2 !== null && var$3 > var$2.$unlockedLevels) {
            var$2.$unlockedLevels = var$3;
            rddc_GameStorage_save();
        }
        rddc_GameStorage_save();
    }
    rddd_Dinosaurs_$callClinit();
    var$2 = rddd_Dinosaurs_DATA.data[jl_Math_random() * rddd_Dinosaurs_DATA.data.length | 0];
    var$1.$foundDinosaur = var$2;
    var$3 = var$2.$id;
    var$2 = rddc_GameStorage_current;
    if (var$2 === null)
        var$3 = 0;
    else {
        var$4 = var$2.$collection.data;
        var$3 = var$3 - 1 | 0;
        var$4[var$3] = var$4[var$3] + 1 | 0;
        rddc_GameStorage_save();
        var$3 = rddc_GameStorage_current.$collection.data[var$3];
    }
    rddc_UIHelper_setText($rt_s(549), var$1.$foundDinosaur.$icon);
    var$5 = var$1.$foundDinosaur;
    var$6 = var$5.$name0;
    var$5 = var$5.$latinName;
    var$7 = new jl_StringBuilder;
    jl_AbstractStringBuilder__init_(var$7);
    jl_StringBuilder_append(jl_StringBuilder_append1(jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(jl_StringBuilder_append(var$7, $rt_s(550)), var$6), $rt_s(551)), var$5), $rt_s(552)), var$3), $rt_s(553));
    rddc_UIHelper_setHTML($rt_s(554), jl_AbstractStringBuilder_toString(var$7));
    rdd_Game_showScreen(var$1, $rt_s(29));
};
function rdd_DigGame$lose$lambda$_17_0() {
    jl_Object.call(this);
    this.$_037 = null;
}
let rdd_DigGame$lose$lambda$_17_0_onTimer$exported$0 = var$1 => {
    let var$2;
    var$1 = var$1.$_037.$onFailCallback0.$_012;
    var$2 = rddc_GameStorage_current0();
    if (var$2 !== null && !var$2.$isDemo) {
        var$2.$gamesPlayed = var$2.$gamesPlayed + 1 | 0;
        rddc_GameStorage_save();
    }
    if (!rddc_UIHelper_confirm($rt_s(555)))
        rdd_Game_showScreen(var$1, $rt_s(21));
    else
        rdd_DigGame_start(var$1.$digGame, var$1.$currentLevel);
};
function rdd_DigGame$showMessage$lambda$_18_0() {
    jl_Object.call(this);
    this.$_045 = null;
}
let rdd_DigGame$showMessage$lambda$_18_0_onTimer$exported$0 = var$1 => {
    var$1.$_045.style["display"] = "none";
};
function rdd_PathGame$Player() {
    let a = this; jl_Object.call(a);
    a.$x = 0.0;
    a.$y = 0.0;
    a.$onLadder = null;
    a.$platformIndex0 = 0;
}
function rdd_PathGame$Platform() {
    let a = this; jl_Object.call(a);
    a.$y0 = 0.0;
    a.$x1 = 0.0;
    a.$x2 = 0.0;
    a.$index4 = 0;
    a.$gapRight = 0;
}
function rdd_PathGame$Ladder() {
    let a = this; jl_Object.call(a);
    a.$x3 = 0.0;
    a.$yTop = 0.0;
    a.$yBottom = 0.0;
    a.$lowerIndex = 0;
    a.$upperIndex = 0;
}
let rdd_PathGame$Ladder__init_0 = ($this, $x, $yTop, $yBottom, $lower, $upper) => {
    $this.$x3 = $x;
    $this.$yTop = $yTop;
    $this.$yBottom = $yBottom;
    $this.$lowerIndex = $lower;
    $this.$upperIndex = $upper;
},
rdd_PathGame$Ladder__init_ = (var_0, var_1, var_2, var_3, var_4) => {
    let var_5 = new rdd_PathGame$Ladder();
    rdd_PathGame$Ladder__init_0(var_5, var_0, var_1, var_2, var_3, var_4);
    return var_5;
};
function rdd_PathGame$Stone() {
    let a = this; jl_Object.call(a);
    a.$x0 = 0.0;
    a.$y1 = 0.0;
    a.$vx = 0.0;
    a.$vy = 0.0;
    a.$platformIndex = 0;
    a.$falling = 0;
}
let otjb_AnimationFrameCallback = $rt_classWithoutFields(0);
function rdd_PathGame$loop$lambda$_20_0() {
    jl_Object.call(this);
    this.$_026 = null;
}
let rdd_PathGame$loop$lambda$_20_0_onAnimationFrame$exported$0 = (var$1, var$2) => {
    var$2;
    rdd_PathGame_loop(var$1.$_026);
};
function rdd_DigGame$lambda$processMatches$5$lambda$_22_0() {
    jl_Object.call(this);
    this.$_020 = null;
}
let rdd_DigGame$lambda$processMatches$5$lambda$_22_0_onTimer$exported$0 = var$1 => {
    let var$2, var$3, var$4, var$5;
    var$1 = var$1.$_020;
    var$2 = 0;
    while (var$2 < var$1.$gridSize) {
        var$3 = 0;
        while (var$3 < var$1.$gridSize) {
            var$4 = var$1.$grid.data;
            if (var$4[var$2].data[var$3] === null)
                var$4[var$2].data[var$3] = rddd_GameElement_random();
            var$3 = var$3 + 1 | 0;
        }
        var$2 = var$2 + 1 | 0;
    }
    rdd_DigGame_draw(var$1);
    var$5 = new rdd_DigGame$lambda$processMatches$4$lambda$_23_0;
    var$5.$_010 = var$1;
    setTimeout(otji_JS_function(otji_JSWrapper_unwrap(var$5), "onTimer"), 200);
};
function rdd_PathGame$win$lambda$_21_0() {
    jl_Object.call(this);
    this.$_03 = null;
}
let rdd_PathGame$win$lambda$_21_0_onTimer$exported$0 = var$1 => {
    let var$2, var$3;
    var$1 = var$1.$_03;
    var$2 = var$1.$onCompleteCallback0;
    var$3 = var$1.$score;
    var$1 = var$2.$_022;
    var$2 = rddc_GameStorage_current0();
    if (var$2 !== null && !var$2.$isDemo) {
        var$2.$totalScore = var$2.$totalScore + var$3 | 0;
        var$2.$gamesPlayed = var$2.$gamesPlayed + 1 | 0;
        var$2.$gamesWon = var$2.$gamesWon + 1 | 0;
        rddc_GameStorage_save();
    }
    var$2 = new rdd_Game$onPathComplete$lambda$_16_0;
    var$2.$_047 = var$1;
    setTimeout(otji_JS_function(otji_JSWrapper_unwrap(var$2), "onTimer"), 500);
};
function rdd_PathGame$showMessage$lambda$_23_0() {
    jl_Object.call(this);
    this.$_032 = null;
}
let rdd_PathGame$showMessage$lambda$_23_0_onTimer$exported$0 = var$1 => {
    var$1.$_032.style["display"] = "none";
};
function rdd_PathGame$lose$lambda$_22_0() {
    jl_Object.call(this);
    this.$_019 = null;
}
let rdd_PathGame$lose$lambda$_22_0_onTimer$exported$0 = var$1 => {
    let var$2;
    var$1 = var$1.$_019.$onFailCallback.$_039;
    var$2 = rddc_GameStorage_current0();
    if (var$2 !== null && !var$2.$isDemo) {
        var$2.$gamesPlayed = var$2.$gamesPlayed + 1 | 0;
        rddc_GameStorage_save();
    }
    if (!rddc_UIHelper_confirm($rt_s(555)))
        rdd_Game_showScreen(var$1, $rt_s(21));
    else
        rdd_PathGame_start(var$1.$pathGame, var$1.$currentLevel);
};
function rdd_DigGame$lambda$processMatches$4$lambda$_23_0() {
    jl_Object.call(this);
    this.$_010 = null;
}
let rdd_DigGame$lambda$processMatches$4$lambda$_23_0_onTimer$exported$0 = var$1 => {
    rdd_DigGame_processMatches(var$1.$_010);
};
function rdd_Game$onPathComplete$lambda$_16_0() {
    jl_Object.call(this);
    this.$_047 = null;
}
let rdd_Game$onPathComplete$lambda$_16_0_onTimer$exported$0 = var$1 => {
    var$1 = var$1.$_047;
    rdd_Game_showScreen(var$1, $rt_s(27));
    rdd_DigGame_start(var$1.$digGame, var$1.$currentLevel);
};
$rt_packages([-1, "java", 0, "util", 1, "regex", 0, "lang"
]);
$rt_metadata([jl_Object, "Object", 3, 0, [], 1, 0, 0, ["$toString", $rt_wrapFunction0(jl_Object_toString)],
ji_Serializable, 0, jl_Object, [], 1537, 0, 0, 0,
jl_Comparable, 0, jl_Object, [], 1537, 0, 0, 0,
jl_CharSequence, 0, jl_Object, [], 1537, 0, 0, 0,
jl_String, 0, jl_Object, [ji_Serializable, jl_Comparable, jl_CharSequence], 17, 0, () => jl_String_$callClinit(), ["$toString", $rt_wrapFunction0(jl_String_toString)],
jlr_AnnotatedElement, 0, jl_Object, [], 1537, 0, 0, 0,
jlr_GenericDeclaration, 0, jl_Object, [jlr_AnnotatedElement], 1537, 0, 0, 0,
jlr_Type, 0, jl_Object, [], 1537, 0, 0, 0,
jl_Class, 0, jl_Object, [jlr_GenericDeclaration, jlr_Type], 17, 0, 0, 0,
jl_Number, 0, jl_Object, [ji_Serializable], 1025, 0, 0, 0,
jl_Integer, 0, jl_Number, [jl_Comparable], 1, 0, () => jl_Integer_$callClinit(), 0,
jl_AbstractStringBuilder, 0, jl_Object, [ji_Serializable, jl_CharSequence], 0, 0, 0, ["$ensureCapacity", $rt_wrapFunction1(jl_AbstractStringBuilder_ensureCapacity), "$toString", $rt_wrapFunction0(jl_AbstractStringBuilder_toString)],
jl_Appendable, 0, jl_Object, [], 1537, 0, 0, 0,
jl_StringBuilder, 0, jl_AbstractStringBuilder, [jl_Appendable], 1, 0, 0, ["$insert1", $rt_wrapFunction4(jl_StringBuilder_insert1), "$append3", $rt_wrapFunction3(jl_StringBuilder_append4), "$toString", $rt_wrapFunction0(jl_StringBuilder_toString), "$ensureCapacity", $rt_wrapFunction1(jl_StringBuilder_ensureCapacity), "$insert0", $rt_wrapFunction2(jl_StringBuilder_insert0)],
jl_Throwable, 0, jl_Object, [], 1, 0, 0, 0,
jl_Exception, 0, jl_Throwable, [], 1, 0, 0, 0,
jl_RuntimeException, 0, jl_Exception, [], 1, 0, 0, 0,
otrr_ReflectionInfo, 0, jl_Object, [], 1025, 0, 0, 0,
otrr_ClassInfo, 0, otrr_ReflectionInfo, [], 17, 0, 0, 0,
otr_StringInfo, 0, otrr_ReflectionInfo, [], 17, 0, 0, 0,
rdd_Main, 0, jl_Object, [], 17, 0, () => rdd_Main_$callClinit(), 0,
jl_ClassCastException, 0, jl_RuntimeException, [], 1, 0, 0, 0,
otp_Platform, 0, jl_Object, [], 17, 0, 0, 0,
otji_JS, 0, jl_Object, [], 17, 0, 0, 0,
otci_IntegerUtil, 0, jl_Object, [], 17, 0, 0, 0,
rddc_GameStorage, 0, jl_Object, [], 17, 0, () => rddc_GameStorage_$callClinit(), 0,
rdd_Game, 0, jl_Object, [], 1, 0, () => rdd_Game_$callClinit(), 0,
ju_Comparator, 0, jl_Object, [], 1537, 0, 0, 0,
jl_String$_clinit_$lambda$_118_0, 0, jl_Object, [ju_Comparator], 1, 0, 0, 0,
jl_Character, 0, jl_Object, [jl_Comparable], 1, 0, () => jl_Character_$callClinit(), 0,
ju_Objects, 0, jl_Object, [], 17, 0, 0, 0,
otji_JSWrapper, 0, jl_Object, [], 17, 0, 0, 0,
otj_JSObject, 0, jl_Object, [], 1537, 0, 0, 0,
otjb_Storage, 0, jl_Object, [otj_JSObject], 1025, 0, 0, 0,
jl_IndexOutOfBoundsException, 0, jl_RuntimeException, [], 1, 0, 0, 0,
jl_Math, 0, jl_Object, [], 17, 0, 0, 0,
jl_StringIndexOutOfBoundsException, 0, jl_IndexOutOfBoundsException, [], 1, 0, 0, 0,
rddc_GameStorage$Profile, 0, jl_Object, [], 1, 0, 0, 0,
rddd_Dinosaurs, 0, jl_Object, [], 17, 0, () => rddd_Dinosaurs_$callClinit(), 0,
jur_Pattern, 0, jl_Object, [ji_Serializable], 17, 0, 0, 0,
rddd_Dinosaur, 0, jl_Object, [], 1, 0, 0, 0,
jl_IllegalArgumentException, 0, jl_RuntimeException, [], 1, 0, 0, 0,
jl_NumberFormatException, 0, jl_IllegalArgumentException, [], 1, 0, 0, 0,
jl_NullPointerException, 0, jl_RuntimeException, [], 1, 0, 0, 0,
jur_AbstractSet, 0, jl_Object, [], 1024, 0, () => jur_AbstractSet_$callClinit(), ["$find0", $rt_wrapFunction3(jur_AbstractSet_find), "$findBack", $rt_wrapFunction4(jur_AbstractSet_findBack), "$getType0", $rt_wrapFunction0(jur_AbstractSet_getType), "$setNext", $rt_wrapFunction1(jur_AbstractSet_setNext), "$first", $rt_wrapFunction1(jur_AbstractSet_first), "$processBackRefReplacement", $rt_wrapFunction0(jur_AbstractSet_processBackRefReplacement), "$processSecondPass", $rt_wrapFunction0(jur_AbstractSet_processSecondPass)],
jl_Iterable, 0, jl_Object, [], 1537, 0, 0, 0,
ju_Collection, 0, jl_Object, [jl_Iterable], 1537, 0, 0, 0,
ju_AbstractCollection, 0, jl_Object, [ju_Collection], 1025, 0, 0, 0,
ju_SequencedCollection, 0, jl_Object, [ju_Collection], 1537, 0, 0, 0,
ju_List, 0, jl_Object, [ju_SequencedCollection], 1537, 0, 0, 0]);
$rt_metadata([ju_AbstractList, 0, ju_AbstractCollection, [ju_List], 1025, 0, 0, 0,
jl_Cloneable, 0, jl_Object, [], 1537, 0, 0, 0,
ju_RandomAccess, 0, jl_Object, [], 1537, 0, 0, 0,
ju_ArrayList, 0, ju_AbstractList, [jl_Cloneable, ji_Serializable, ju_RandomAccess], 1, 0, 0, 0,
jur_MatchResult, 0, jl_Object, [], 1537, 0, 0, 0,
jur_Matcher, 0, jl_Object, [jur_MatchResult], 17, 0, 0, 0,
otciu_UnicodeHelper$Range, 0, jl_Object, [], 1, 0, 0, 0,
jur_FSet, 0, jur_AbstractSet, [], 0, 0, () => jur_FSet_$callClinit(), ["$matches", $rt_wrapFunction3(jur_FSet_matches), "$hasConsumed", $rt_wrapFunction1(jur_FSet_hasConsumed)],
jur_Lexer, 0, jl_Object, [], 0, 0, 0, 0,
jur_PatternSyntaxException, 0, jl_IllegalArgumentException, [], 1, 0, 0, 0,
jur_MatchResultImpl, 0, jl_Object, [jur_MatchResult], 0, 0, 0, 0,
otpp_ResourceAccessor, 0, jl_Object, [], 16, 0, 0, 0,
otciu_UnicodeHelper, 0, jl_Object, [], 17, 0, 0, 0,
jl_System, 0, jl_Object, [], 17, 0, 0, 0,
jur_NonCapFSet, 0, jur_FSet, [], 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_NonCapFSet_matches), "$hasConsumed", $rt_wrapFunction1(jur_NonCapFSet_hasConsumed)],
jur_AheadFSet, 0, jur_FSet, [], 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_AheadFSet_matches)],
jur_BehindFSet, 0, jur_FSet, [], 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_BehindFSet_matches)],
jur_AtomicFSet, 0, jur_FSet, [], 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_AtomicFSet_matches), "$hasConsumed", $rt_wrapFunction1(jur_AtomicFSet_hasConsumed)],
jur_FinalSet, 0, jur_FSet, [], 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_FinalSet_matches)],
jur_LeafSet, 0, jur_AbstractSet, [], 1024, 0, 0, ["$matches", $rt_wrapFunction3(jur_LeafSet_matches), "$charCount", $rt_wrapFunction0(jur_LeafSet_charCount), "$hasConsumed", $rt_wrapFunction1(jur_LeafSet_hasConsumed)],
jur_EmptySet, 0, jur_LeafSet, [], 0, 0, 0, ["$accepts", $rt_wrapFunction2(jur_EmptySet_accepts), "$find0", $rt_wrapFunction3(jur_EmptySet_find), "$findBack", $rt_wrapFunction4(jur_EmptySet_findBack), "$hasConsumed", $rt_wrapFunction1(jur_EmptySet_hasConsumed)],
jur_JointSet, 0, jur_AbstractSet, [], 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_JointSet_matches), "$setNext", $rt_wrapFunction1(jur_JointSet_setNext), "$first", $rt_wrapFunction1(jur_JointSet_first), "$hasConsumed", $rt_wrapFunction1(jur_JointSet_hasConsumed), "$processSecondPass", $rt_wrapFunction0(jur_JointSet_processSecondPass)],
jur_NonCapJointSet, 0, jur_JointSet, [], 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_NonCapJointSet_matches), "$hasConsumed", $rt_wrapFunction1(jur_NonCapJointSet_hasConsumed)],
jur_AtomicJointSet, 0, jur_NonCapJointSet, [], 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_AtomicJointSet_matches), "$setNext", $rt_wrapFunction1(jur_AtomicJointSet_setNext)],
jur_PositiveLookAhead, 0, jur_AtomicJointSet, [], 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_PositiveLookAhead_matches), "$hasConsumed", $rt_wrapFunction1(jur_PositiveLookAhead_hasConsumed)],
jur_NegativeLookAhead, 0, jur_AtomicJointSet, [], 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_NegativeLookAhead_matches), "$hasConsumed", $rt_wrapFunction1(jur_NegativeLookAhead_hasConsumed)],
jur_PositiveLookBehind, 0, jur_AtomicJointSet, [], 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_PositiveLookBehind_matches), "$hasConsumed", $rt_wrapFunction1(jur_PositiveLookBehind_hasConsumed)],
jur_NegativeLookBehind, 0, jur_AtomicJointSet, [], 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_NegativeLookBehind_matches), "$hasConsumed", $rt_wrapFunction1(jur_NegativeLookBehind_hasConsumed)],
jur_SingleSet, 0, jur_JointSet, [], 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_SingleSet_matches), "$find0", $rt_wrapFunction3(jur_SingleSet_find), "$findBack", $rt_wrapFunction4(jur_SingleSet_findBack), "$first", $rt_wrapFunction1(jur_SingleSet_first), "$processBackRefReplacement", $rt_wrapFunction0(jur_SingleSet_processBackRefReplacement), "$processSecondPass", $rt_wrapFunction0(jur_SingleSet_processSecondPass)],
ju_Map, 0, jl_Object, [], 1537, 0, 0, 0,
ju_AbstractMap, 0, jl_Object, [ju_Map], 1025, 0, 0, ["$put", $rt_wrapFunction2(ju_AbstractMap_put)],
ju_HashMap, 0, ju_AbstractMap, [jl_Cloneable, ji_Serializable], 1, 0, 0, 0,
ju_SequencedMap, 0, jl_Object, [ju_Map], 1537, 0, 0, 0,
ju_LinkedHashMap, 0, ju_HashMap, [ju_SequencedMap], 1, 0, 0, ["$put", $rt_wrapFunction2(ju_LinkedHashMap_put)],
ju_Collections, 0, jl_Object, [], 17, 0, () => ju_Collections_$callClinit(), 0,
ju_Arrays, 0, jl_Object, [], 1, 0, 0, 0,
jlr_Array, 0, jl_Object, [], 17, 0, 0, 0,
jl_ArrayStoreException, 0, jl_RuntimeException, [], 1, 0, 0, 0,
jur_SpecialToken, 0, jl_Object, [], 1024, 0, 0, 0,
jur_AbstractCharClass, 0, jur_SpecialToken, [], 1024, 0, () => jur_AbstractCharClass_$callClinit(), ["$getBits", $rt_wrapFunction0(jur_AbstractCharClass_getBits), "$getLowHighSurrogates", $rt_wrapFunction0(jur_AbstractCharClass_getLowHighSurrogates), "$getInstance0", $rt_wrapFunction0(jur_AbstractCharClass_getInstance), "$hasUCI", $rt_wrapFunction0(jur_AbstractCharClass_hasUCI)],
ju_MissingResourceException, 0, jl_RuntimeException, [], 1, 0, 0, 0,
jur_CharClass, "CharClass", 2, jur_AbstractCharClass, [], 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_CharClass_contains), "$getBits", $rt_wrapFunction0(jur_CharClass_getBits), "$getLowHighSurrogates", $rt_wrapFunction0(jur_CharClass_getLowHighSurrogates), "$getInstance0", $rt_wrapFunction0(jur_CharClass_getInstance), "$toString", $rt_wrapFunction0(jur_CharClass_toString), "$hasUCI", $rt_wrapFunction0(jur_CharClass_hasUCI)],
jur_QuantifierSet, 0, jur_AbstractSet, [], 1024, 0, 0, ["$first", $rt_wrapFunction1(jur_QuantifierSet_first), "$hasConsumed", $rt_wrapFunction1(jur_QuantifierSet_hasConsumed), "$processSecondPass", $rt_wrapFunction0(jur_QuantifierSet_processSecondPass)],
jur_LeafQuantifierSet, 0, jur_QuantifierSet, [], 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_LeafQuantifierSet_matches)],
jur_CompositeQuantifierSet, 0, jur_LeafQuantifierSet, [], 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_CompositeQuantifierSet_matches)],
jur_GroupQuantifierSet, 0, jur_QuantifierSet, [], 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_GroupQuantifierSet_matches)],
jur_AltQuantifierSet, 0, jur_LeafQuantifierSet, [], 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_AltQuantifierSet_matches), "$setNext", $rt_wrapFunction1(jur_AltQuantifierSet_setNext)],
jur_UnifiedQuantifierSet, 0, jur_LeafQuantifierSet, [], 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_UnifiedQuantifierSet_matches), "$find0", $rt_wrapFunction3(jur_UnifiedQuantifierSet_find)],
ju_Collections$13, 0, ju_AbstractMap, [], 0, 0, 0, 0,
jur_AbstractCharClass$PredefinedCharacterClasses, 0, jl_Object, [], 16, 0, () => jur_AbstractCharClass$PredefinedCharacterClasses_$callClinit(), 0]);
$rt_metadata([jur_AbstractCharClass$LazyCharClass, 0, jl_Object, [], 1024, 0, 0, 0,
jur_Quantifier, "Quantifier", 2, jur_SpecialToken, [jl_Cloneable], 0, 0, 0, ["$toString", $rt_wrapFunction0(jur_Quantifier_toString)],
jur_FSet$PossessiveFSet, 0, jur_AbstractSet, [], 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_FSet$PossessiveFSet_matches), "$hasConsumed", $rt_wrapFunction1(jur_FSet$PossessiveFSet_hasConsumed)],
ju_BitSet, 0, jl_Object, [jl_Cloneable, ji_Serializable], 1, 0, 0, 0,
jur_LowHighSurrogateRangeSet, 0, jur_JointSet, [], 0, 0, 0, 0,
jur_CompositeRangeSet, 0, jur_JointSet, [], 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_CompositeRangeSet_matches), "$setNext", $rt_wrapFunction1(jur_CompositeRangeSet_setNext), "$hasConsumed", $rt_wrapFunction1(jur_CompositeRangeSet_hasConsumed), "$first", $rt_wrapFunction1(jur_CompositeRangeSet_first)],
jur_SupplRangeSet, 0, jur_JointSet, [], 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_SupplRangeSet_matches), "$contains", $rt_wrapFunction1(jur_SupplRangeSet_contains), "$first", $rt_wrapFunction1(jur_SupplRangeSet_first), "$setNext", $rt_wrapFunction1(jur_SupplRangeSet_setNext), "$hasConsumed", $rt_wrapFunction1(jur_SupplRangeSet_hasConsumed)],
jur_UCISupplRangeSet, 0, jur_SupplRangeSet, [], 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_UCISupplRangeSet_contains)],
jur_UCIRangeSet, 0, jur_LeafSet, [], 0, 0, 0, ["$accepts", $rt_wrapFunction2(jur_UCIRangeSet_accepts)],
jur_RangeSet, 0, jur_LeafSet, [], 0, 0, 0, ["$accepts", $rt_wrapFunction2(jur_RangeSet_accepts), "$first", $rt_wrapFunction1(jur_RangeSet_first)],
jur_HangulDecomposedCharSet, 0, jur_JointSet, [], 0, 0, 0, ["$setNext", $rt_wrapFunction1(jur_HangulDecomposedCharSet_setNext), "$matches", $rt_wrapFunction3(jur_HangulDecomposedCharSet_matches), "$first", $rt_wrapFunction1(jur_HangulDecomposedCharSet_first), "$hasConsumed", $rt_wrapFunction1(jur_HangulDecomposedCharSet_hasConsumed)],
jur_CharSet, 0, jur_LeafSet, [], 0, 0, 0, ["$charCount", $rt_wrapFunction0(jur_CharSet_charCount), "$accepts", $rt_wrapFunction2(jur_CharSet_accepts), "$find0", $rt_wrapFunction3(jur_CharSet_find), "$findBack", $rt_wrapFunction4(jur_CharSet_findBack), "$first", $rt_wrapFunction1(jur_CharSet_first)],
jur_UCICharSet, 0, jur_LeafSet, [], 0, 0, 0, ["$accepts", $rt_wrapFunction2(jur_UCICharSet_accepts)],
jur_CICharSet, 0, jur_LeafSet, [], 0, 0, 0, ["$accepts", $rt_wrapFunction2(jur_CICharSet_accepts)],
jur_DecomposedCharSet, 0, jur_JointSet, [], 0, 0, 0, ["$setNext", $rt_wrapFunction1(jur_DecomposedCharSet_setNext), "$matches", $rt_wrapFunction3(jur_DecomposedCharSet_matches), "$first", $rt_wrapFunction1(jur_DecomposedCharSet_first), "$hasConsumed", $rt_wrapFunction1(jur_DecomposedCharSet_hasConsumed)],
jur_UCIDecomposedCharSet, 0, jur_DecomposedCharSet, [], 0, 0, 0, 0,
jur_CIDecomposedCharSet, 0, jur_DecomposedCharSet, [], 0, 0, 0, 0,
jur_PossessiveGroupQuantifierSet, 0, jur_GroupQuantifierSet, [], 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_PossessiveGroupQuantifierSet_matches)],
jur_PosPlusGroupQuantifierSet, 0, jur_GroupQuantifierSet, [], 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_PosPlusGroupQuantifierSet_matches)],
jur_AltGroupQuantifierSet, 0, jur_GroupQuantifierSet, [], 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_AltGroupQuantifierSet_matches), "$setNext", $rt_wrapFunction1(jur_AltGroupQuantifierSet_setNext)],
jur_PosAltGroupQuantifierSet, 0, jur_AltGroupQuantifierSet, [], 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_PosAltGroupQuantifierSet_matches), "$setNext", $rt_wrapFunction1(jur_PosAltGroupQuantifierSet_setNext)],
jur_CompositeGroupQuantifierSet, 0, jur_GroupQuantifierSet, [], 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_CompositeGroupQuantifierSet_matches)],
jur_PosCompositeGroupQuantifierSet, 0, jur_CompositeGroupQuantifierSet, [], 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_PosCompositeGroupQuantifierSet_matches)],
jur_ReluctantGroupQuantifierSet, 0, jur_GroupQuantifierSet, [], 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_ReluctantGroupQuantifierSet_matches)],
jur_RelAltGroupQuantifierSet, 0, jur_AltGroupQuantifierSet, [], 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_RelAltGroupQuantifierSet_matches)],
jur_RelCompositeGroupQuantifierSet, 0, jur_CompositeGroupQuantifierSet, [], 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_RelCompositeGroupQuantifierSet_matches)],
jur_DotAllQuantifierSet, 0, jur_QuantifierSet, [], 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_DotAllQuantifierSet_matches), "$find0", $rt_wrapFunction3(jur_DotAllQuantifierSet_find)],
jur_DotQuantifierSet, 0, jur_QuantifierSet, [], 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_DotQuantifierSet_matches), "$find0", $rt_wrapFunction3(jur_DotQuantifierSet_find)],
jur_AbstractLineTerminator, 0, jl_Object, [], 1024, 0, 0, 0,
jur_PossessiveQuantifierSet, 0, jur_LeafQuantifierSet, [], 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_PossessiveQuantifierSet_matches)],
jur_PossessiveAltQuantifierSet, 0, jur_AltQuantifierSet, [], 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_PossessiveAltQuantifierSet_matches)],
jur_PossessiveCompositeQuantifierSet, 0, jur_CompositeQuantifierSet, [], 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_PossessiveCompositeQuantifierSet_matches)],
jur_ReluctantQuantifierSet, 0, jur_LeafQuantifierSet, [], 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_ReluctantQuantifierSet_matches)],
jur_ReluctantAltQuantifierSet, 0, jur_AltQuantifierSet, [], 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_ReluctantAltQuantifierSet_matches)],
jur_ReluctantCompositeQuantifierSet, 0, jur_CompositeQuantifierSet, [], 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_ReluctantCompositeQuantifierSet_matches)],
jur_SOLSet, 0, jur_AbstractSet, [], 16, 0, 0, ["$matches", $rt_wrapFunction3(jur_SOLSet_matches), "$hasConsumed", $rt_wrapFunction1(jur_SOLSet_hasConsumed)],
jur_WordBoundary, 0, jur_AbstractSet, [], 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_WordBoundary_matches), "$hasConsumed", $rt_wrapFunction1(jur_WordBoundary_hasConsumed)],
jur_PreviousMatch, 0, jur_AbstractSet, [], 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_PreviousMatch_matches), "$hasConsumed", $rt_wrapFunction1(jur_PreviousMatch_hasConsumed)],
jur_EOLSet, 0, jur_AbstractSet, [], 16, 0, 0, ["$matches", $rt_wrapFunction3(jur_EOLSet_matches), "$hasConsumed", $rt_wrapFunction1(jur_EOLSet_hasConsumed)],
jur_EOISet, 0, jur_AbstractSet, [], 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_EOISet_matches), "$hasConsumed", $rt_wrapFunction1(jur_EOISet_hasConsumed)],
jur_MultiLineSOLSet, 0, jur_AbstractSet, [], 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_MultiLineSOLSet_matches), "$hasConsumed", $rt_wrapFunction1(jur_MultiLineSOLSet_hasConsumed)],
jur_DotAllSet, 0, jur_JointSet, [], 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_DotAllSet_matches), "$setNext", $rt_wrapFunction1(jur_DotAllSet_setNext), "$getType0", $rt_wrapFunction0(jur_DotAllSet_getType), "$hasConsumed", $rt_wrapFunction1(jur_DotAllSet_hasConsumed)],
jur_DotSet, 0, jur_JointSet, [], 16, 0, 0, ["$matches", $rt_wrapFunction3(jur_DotSet_matches), "$setNext", $rt_wrapFunction1(jur_DotSet_setNext), "$getType0", $rt_wrapFunction0(jur_DotSet_getType), "$hasConsumed", $rt_wrapFunction1(jur_DotSet_hasConsumed)],
jur_UEOLSet, 0, jur_AbstractSet, [], 16, 0, 0, ["$matches", $rt_wrapFunction3(jur_UEOLSet_matches), "$hasConsumed", $rt_wrapFunction1(jur_UEOLSet_hasConsumed)],
jur_UMultiLineEOLSet, 0, jur_AbstractSet, [], 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_UMultiLineEOLSet_matches), "$hasConsumed", $rt_wrapFunction1(jur_UMultiLineEOLSet_hasConsumed)],
jur_MultiLineEOLSet, 0, jur_AbstractSet, [], 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_MultiLineEOLSet_matches), "$hasConsumed", $rt_wrapFunction1(jur_MultiLineEOLSet_hasConsumed)],
jur_CIBackReferenceSet, 0, jur_JointSet, [], 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_CIBackReferenceSet_matches), "$setNext", $rt_wrapFunction1(jur_CIBackReferenceSet_setNext), "$hasConsumed", $rt_wrapFunction1(jur_CIBackReferenceSet_hasConsumed)],
jur_BackReferenceSet, 0, jur_CIBackReferenceSet, [], 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_BackReferenceSet_matches), "$find0", $rt_wrapFunction3(jur_BackReferenceSet_find), "$findBack", $rt_wrapFunction4(jur_BackReferenceSet_findBack), "$first", $rt_wrapFunction1(jur_BackReferenceSet_first)],
jur_UCIBackReferenceSet, 0, jur_CIBackReferenceSet, [], 0, 0, 0, ["$matches", $rt_wrapFunction3(jur_UCIBackReferenceSet_matches)],
jl_StringBuffer, 0, jl_AbstractStringBuilder, [jl_Appendable], 1, 0, 0, ["$insert1", $rt_wrapFunction4(jl_StringBuffer_insert0), "$append3", $rt_wrapFunction3(jl_StringBuffer_append), "$ensureCapacity", $rt_wrapFunction1(jl_StringBuffer_ensureCapacity), "$insert0", $rt_wrapFunction2(jl_StringBuffer_insert)]]);
$rt_metadata([jur_SequenceSet, 0, jur_LeafSet, [], 0, 0, 0, ["$accepts", $rt_wrapFunction2(jur_SequenceSet_accepts), "$find0", $rt_wrapFunction3(jur_SequenceSet_find), "$findBack", $rt_wrapFunction4(jur_SequenceSet_findBack), "$first", $rt_wrapFunction1(jur_SequenceSet_first)],
jur_UCISequenceSet, 0, jur_LeafSet, [], 0, 0, 0, ["$accepts", $rt_wrapFunction2(jur_UCISequenceSet_accepts)],
jur_CISequenceSet, 0, jur_LeafSet, [], 0, 0, 0, ["$accepts", $rt_wrapFunction2(jur_CISequenceSet_accepts)],
ju_Set, 0, jl_Object, [ju_Collection], 1537, 0, 0, 0,
ju_AbstractSet, 0, ju_AbstractCollection, [ju_Set], 1025, 0, 0, 0,
ju_TemplateCollections$AbstractImmutableSet, 0, ju_AbstractSet, [], 1024, 0, 0, 0,
ju_Collections$1, 0, ju_TemplateCollections$AbstractImmutableSet, [], 0, 0, 0, 0,
ju_TemplateCollections$AbstractImmutableMap, 0, ju_AbstractMap, [], 1024, 0, 0, ["$put", $rt_wrapFunction2(ju_TemplateCollections$AbstractImmutableMap_put)],
ju_Collections$2, 0, ju_TemplateCollections$AbstractImmutableMap, [], 0, 0, 0, 0,
ju_TemplateCollections$AbstractImmutableList, 0, ju_AbstractList, [ju_RandomAccess], 1024, 0, 0, 0,
ju_Collections$3, 0, ju_TemplateCollections$AbstractImmutableList, [], 0, 0, 0, 0,
ju_Iterator, 0, jl_Object, [], 1537, 0, 0, 0,
ju_Collections$4, 0, jl_Object, [ju_Iterator], 0, 0, 0, 0,
ju_ListIterator, 0, jl_Object, [ju_Iterator], 1537, 0, 0, 0,
ju_Collections$5, 0, jl_Object, [ju_ListIterator], 0, 0, 0, 0,
ju_Collections$_clinit_$lambda$_59_0, 0, jl_Object, [ju_Comparator], 1, 0, 0, 0,
jl_NegativeArraySizeException, 0, jl_RuntimeException, [], 1, 0, 0, 0,
jur_UCISupplCharSet, 0, jur_LeafSet, [], 0, 0, 0, ["$accepts", $rt_wrapFunction2(jur_UCISupplCharSet_accepts)],
jur_LowSurrogateCharSet, 0, jur_JointSet, [], 0, 0, 0, ["$setNext", $rt_wrapFunction1(jur_LowSurrogateCharSet_setNext), "$matches", $rt_wrapFunction3(jur_LowSurrogateCharSet_matches), "$find0", $rt_wrapFunction3(jur_LowSurrogateCharSet_find), "$findBack", $rt_wrapFunction4(jur_LowSurrogateCharSet_findBack), "$first", $rt_wrapFunction1(jur_LowSurrogateCharSet_first), "$hasConsumed", $rt_wrapFunction1(jur_LowSurrogateCharSet_hasConsumed)],
jur_HighSurrogateCharSet, 0, jur_JointSet, [], 0, 0, 0, ["$setNext", $rt_wrapFunction1(jur_HighSurrogateCharSet_setNext), "$matches", $rt_wrapFunction3(jur_HighSurrogateCharSet_matches), "$find0", $rt_wrapFunction3(jur_HighSurrogateCharSet_find), "$findBack", $rt_wrapFunction4(jur_HighSurrogateCharSet_findBack), "$first", $rt_wrapFunction1(jur_HighSurrogateCharSet_first), "$hasConsumed", $rt_wrapFunction1(jur_HighSurrogateCharSet_hasConsumed)],
jur_SupplCharSet, 0, jur_LeafSet, [], 0, 0, 0, ["$accepts", $rt_wrapFunction2(jur_SupplCharSet_accepts), "$find0", $rt_wrapFunction3(jur_SupplCharSet_find), "$findBack", $rt_wrapFunction4(jur_SupplCharSet_findBack), "$first", $rt_wrapFunction1(jur_SupplCharSet_first)],
jur_AbstractLineTerminator$1, 0, jur_AbstractLineTerminator, [], 0, 0, 0, ["$isLineTerminator", $rt_wrapFunction1(jur_AbstractLineTerminator$1_isLineTerminator), "$isAfterLineTerminator", $rt_wrapFunction2(jur_AbstractLineTerminator$1_isAfterLineTerminator)],
jur_AbstractLineTerminator$2, 0, jur_AbstractLineTerminator, [], 0, 0, 0, ["$isLineTerminator", $rt_wrapFunction1(jur_AbstractLineTerminator$2_isLineTerminator), "$isAfterLineTerminator", $rt_wrapFunction2(jur_AbstractLineTerminator$2_isAfterLineTerminator)],
jur_SequenceSet$IntHash, 0, jl_Object, [], 0, 0, 0, 0,
jur_AbstractCharClass$LazySpace, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazySpace_computeValue)],
jur_AbstractCharClass$LazyDigit, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyDigit_computeValue)],
jur_AbstractCharClass$LazyLower, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyLower_computeValue)],
jur_AbstractCharClass$LazyUpper, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyUpper_computeValue)],
jur_AbstractCharClass$LazyASCII, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyASCII_computeValue)],
jur_AbstractCharClass$LazyAlpha, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyAlpha_computeValue)],
jur_AbstractCharClass$LazyAlnum, 0, jur_AbstractCharClass$LazyAlpha, [], 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyAlnum_computeValue)],
jur_AbstractCharClass$LazyPunct, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyPunct_computeValue)],
jur_AbstractCharClass$LazyGraph, 0, jur_AbstractCharClass$LazyAlnum, [], 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyGraph_computeValue)],
jur_AbstractCharClass$LazyPrint, 0, jur_AbstractCharClass$LazyGraph, [], 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyPrint_computeValue)],
jur_AbstractCharClass$LazyBlank, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyBlank_computeValue)],
jur_AbstractCharClass$LazyCntrl, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyCntrl_computeValue)],
jur_AbstractCharClass$LazyXDigit, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyXDigit_computeValue)],
jur_AbstractCharClass$LazyJavaLowerCase, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaLowerCase_computeValue)],
jur_AbstractCharClass$LazyJavaUpperCase, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaUpperCase_computeValue)],
jur_AbstractCharClass$LazyJavaWhitespace, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaWhitespace_computeValue)],
jur_AbstractCharClass$LazyJavaMirrored, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaMirrored_computeValue)],
jur_AbstractCharClass$LazyJavaDefined, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaDefined_computeValue)],
jur_AbstractCharClass$LazyJavaDigit, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaDigit_computeValue)],
jur_AbstractCharClass$LazyJavaIdentifierIgnorable, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaIdentifierIgnorable_computeValue)],
jur_AbstractCharClass$LazyJavaISOControl, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaISOControl_computeValue)],
jur_AbstractCharClass$LazyJavaJavaIdentifierPart, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaJavaIdentifierPart_computeValue)],
jur_AbstractCharClass$LazyJavaJavaIdentifierStart, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaJavaIdentifierStart_computeValue)],
jur_AbstractCharClass$LazyJavaLetter, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaLetter_computeValue)],
jur_AbstractCharClass$LazyJavaLetterOrDigit, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaLetterOrDigit_computeValue)],
jur_AbstractCharClass$LazyJavaSpaceChar, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaSpaceChar_computeValue)]]);
$rt_metadata([jur_AbstractCharClass$LazyJavaTitleCase, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaTitleCase_computeValue)],
jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart_computeValue)],
jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart_computeValue)],
jur_AbstractCharClass$LazyWord, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyWord_computeValue)],
jur_AbstractCharClass$LazyNonWord, 0, jur_AbstractCharClass$LazyWord, [], 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyNonWord_computeValue)],
jur_AbstractCharClass$LazyNonSpace, 0, jur_AbstractCharClass$LazySpace, [], 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyNonSpace_computeValue)],
jur_AbstractCharClass$LazyNonDigit, 0, jur_AbstractCharClass$LazyDigit, [], 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyNonDigit_computeValue)],
jur_AbstractCharClass$LazyRange, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyRange_computeValue)],
jur_AbstractCharClass$LazySpecialsBlock, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazySpecialsBlock_computeValue)],
jur_AbstractCharClass$LazyCategory, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyCategory_computeValue)],
jur_AbstractCharClass$LazyCategoryScope, 0, jur_AbstractCharClass$LazyCharClass, [], 0, 0, 0, ["$computeValue", $rt_wrapFunction0(jur_AbstractCharClass$LazyCategoryScope_computeValue)],
jur_IntHash, 0, jl_Object, [], 0, 0, 0, 0,
otciu_CharMapping, 0, jl_Object, [], 1, 0, 0, 0,
otci_CharFlow, 0, jl_Object, [], 1, 0, 0, 0,
otci_Base46, 0, jl_Object, [], 17, 0, 0, 0,
jl_UnsupportedOperationException, 0, jl_RuntimeException, [], 1, 0, 0, 0,
jur_AbstractCharClass$1, "AbstractCharClass$1", 2, jur_AbstractCharClass, [], 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_AbstractCharClass$1_contains)],
jur_AbstractCharClass$2, "AbstractCharClass$2", 2, jur_AbstractCharClass, [], 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_AbstractCharClass$2_contains)],
jur_CharClass$18, "CharClass$18", 2, jur_AbstractCharClass, [], 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_CharClass$18_contains), "$toString", $rt_wrapFunction0(jur_CharClass$18_toString)],
jur_CharClass$1, 0, jur_AbstractCharClass, [], 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_CharClass$1_contains)],
jur_CharClass$3, 0, jur_AbstractCharClass, [], 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_CharClass$3_contains)],
jur_CharClass$2, 0, jur_AbstractCharClass, [], 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_CharClass$2_contains)],
jur_CharClass$5, 0, jur_AbstractCharClass, [], 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_CharClass$5_contains)],
jur_CharClass$4, 0, jur_AbstractCharClass, [], 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_CharClass$4_contains)],
jur_CharClass$7, 0, jur_AbstractCharClass, [], 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_CharClass$7_contains)],
jur_CharClass$6, 0, jur_AbstractCharClass, [], 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_CharClass$6_contains)],
jur_CharClass$9, 0, jur_AbstractCharClass, [], 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_CharClass$9_contains)],
jur_CharClass$8, 0, jur_AbstractCharClass, [], 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_CharClass$8_contains)],
jur_CharClass$11, 0, jur_AbstractCharClass, [], 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_CharClass$11_contains)],
jur_CharClass$10, 0, jur_AbstractCharClass, [], 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_CharClass$10_contains)],
jur_CharClass$13, 0, jur_AbstractCharClass, [], 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_CharClass$13_contains)],
jur_CharClass$12, 0, jur_AbstractCharClass, [], 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_CharClass$12_contains)],
jur_CharClass$15, 0, jur_AbstractCharClass, [], 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_CharClass$15_contains)],
jur_CharClass$14, 0, jur_AbstractCharClass, [], 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_CharClass$14_contains)],
jur_CharClass$17, 0, jur_AbstractCharClass, [], 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_CharClass$17_contains)],
jur_CharClass$16, 0, jur_AbstractCharClass, [], 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_CharClass$16_contains)],
ju_Map$Entry, 0, jl_Object, [], 1537, 0, 0, 0,
ju_MapEntry, 0, jl_Object, [ju_Map$Entry, jl_Cloneable], 0, 0, 0, 0,
ju_HashMap$HashEntry, 0, ju_MapEntry, [], 0, 0, 0, 0,
ju_LinkedHashMap$LinkedHashMapEntry, 0, ju_HashMap$HashEntry, [], 16, 0, 0, 0,
rddc_UIHelper, 0, jl_Object, [], 17, 0, () => rddc_UIHelper_$callClinit(), 0,
rdd_PathGame, 0, jl_Object, [], 1, 0, 0, 0,
rdd_PathGame$IntCallback, 0, jl_Object, [], 1537, 0, 0, 0,
rdd_Game$buildAllScreens$lambda$_2_0, 0, jl_Object, [rdd_PathGame$IntCallback], 1, 0, 0, 0,
jl_Runnable, 0, jl_Object, [], 1537, 0, 0, 0,
rdd_Game$buildAllScreens$lambda$_2_1, 0, jl_Object, [jl_Runnable], 1, 0, 0, 0,
rdd_DigGame, 0, jl_Object, [], 1, 0, 0, 0,
rdd_Game$buildAllScreens$lambda$_2_2, 0, jl_Object, [rdd_PathGame$IntCallback], 1, 0, 0, 0,
rdd_Game$buildAllScreens$lambda$_2_3, 0, jl_Object, [jl_Runnable], 1, 0, 0, 0,
jl_IllegalStateException, 0, jl_RuntimeException, [], 1, 0, 0, 0]);
$rt_metadata([otjdx_Node, 0, jl_Object, [otj_JSObject], 1537, 0, 0, 0,
otjdx_Element, 0, jl_Object, [otjdx_Node], 1537, 0, 0, 0,
otjdc_ElementCSSInlineStyle, 0, jl_Object, [otj_JSObject], 1537, 0, 0, 0,
otjde_EventTarget, 0, jl_Object, [otj_JSObject], 1537, 0, 0, 0,
otjde_FocusEventTarget, 0, jl_Object, [otjde_EventTarget], 1537, 0, 0, 0,
otjde_MouseEventTarget, 0, jl_Object, [otjde_EventTarget], 1537, 0, 0, 0,
otjde_WheelEventTarget, 0, jl_Object, [otjde_EventTarget], 1537, 0, 0, 0,
otjde_KeyboardEventTarget, 0, jl_Object, [otjde_EventTarget], 1537, 0, 0, 0,
otjde_LoadEventTarget, 0, jl_Object, [otjde_EventTarget], 1537, 0, 0, 0,
otjde_TouchEventTarget, 0, jl_Object, [otjde_EventTarget], 1537, 0, 0, 0,
otjp_ToggleEventTarget, 0, jl_Object, [otjde_EventTarget], 1537, 0, 0, 0,
otjde_InputEventTarget, 0, jl_Object, [otjde_EventTarget], 1537, 0, 0, 0,
otjdh_HTMLElement, 0, jl_Object, [otjdx_Element, otjdc_ElementCSSInlineStyle, otjde_EventTarget, otjde_FocusEventTarget, otjde_MouseEventTarget, otjde_WheelEventTarget, otjde_KeyboardEventTarget, otjde_LoadEventTarget, otjde_TouchEventTarget, otjp_ToggleEventTarget, otjde_InputEventTarget], 1025, 0, 0, 0,
otjde_EventListener, 0, jl_Object, [otj_JSObject], 1537, 0, 0, 0,
rdd_Game$setupAuthHandlers$lambda$_4_0, 0, jl_Object, [otjde_EventListener], 1, 0, 0, 0,
rdd_Game$setupAuthHandlers$lambda$_4_1, 0, jl_Object, [otjde_EventListener], 1, 0, 0, 0,
rdd_Game$setupAuthHandlers$lambda$_4_2, 0, jl_Object, [otjde_EventListener], 1, 0, 0, 0,
rdd_Game$setupIntroHandlers$lambda$_8_0, 0, jl_Object, [otjde_EventListener], 1, 0, 0, 0,
rdd_Game$setupMenuHandlers$lambda$_12_0, 0, jl_Object, [otjde_EventListener], 1, 0, 0, 0,
rdd_Game$setupMenuHandlers$lambda$_12_1, 0, jl_Object, [otjde_EventListener], 1, 0, 0, 0,
rdd_Game$setupMenuHandlers$lambda$_12_2, 0, jl_Object, [otjde_EventListener], 1, 0, 0, 0,
rdd_Game$setupMenuHandlers$lambda$_12_3, 0, jl_Object, [otjde_EventListener], 1, 0, 0, 0,
rdd_Game$setupMenuHandlers$lambda$_12_4, 0, jl_Object, [otjde_EventListener], 1, 0, 0, 0,
rdd_Game$setupNavigationHandlers$lambda$_24_0, 0, jl_Object, [otjde_EventListener], 1, 0, 0, 0,
rdd_Game$setupNavigationHandlers$lambda$_24_1, 0, jl_Object, [otjde_EventListener], 1, 0, 0, 0,
rdd_Game$setupNavigationHandlers$lambda$_24_2, 0, jl_Object, [otjde_EventListener], 1, 0, 0, 0,
rdd_Game$setupNavigationHandlers$lambda$_24_3, 0, jl_Object, [otjde_EventListener], 1, 0, 0, 0,
rdd_Game$setupNavigationHandlers$lambda$_24_4, 0, jl_Object, [otjde_EventListener], 1, 0, 0, 0,
rdd_Game$setupNavigationHandlers$lambda$_24_5, 0, jl_Object, [otjde_EventListener], 1, 0, 0, 0,
rdd_PathGame$setupInput$lambda$_4_0, 0, jl_Object, [otjde_EventListener], 1, 0, 0, 0,
rdd_PathGame$setupInput$lambda$_4_1, 0, jl_Object, [otjde_EventListener], 1, 0, 0, 0,
rdd_PathGame$setupInput$lambda$_4_2, 0, jl_Object, [jl_Runnable], 1, 0, 0, ["$run", $rt_wrapFunction0(rdd_PathGame$setupInput$lambda$_4_2_run)],
rdd_PathGame$setupInput$lambda$_4_3, 0, jl_Object, [jl_Runnable], 1, 0, 0, ["$run", $rt_wrapFunction0(rdd_PathGame$setupInput$lambda$_4_3_run)],
rdd_PathGame$setupInput$lambda$_4_4, 0, jl_Object, [jl_Runnable], 1, 0, 0, ["$run", $rt_wrapFunction0(rdd_PathGame$setupInput$lambda$_4_4_run)],
rdd_PathGame$setupInput$lambda$_4_5, 0, jl_Object, [jl_Runnable], 1, 0, 0, ["$run", $rt_wrapFunction0(rdd_PathGame$setupInput$lambda$_4_5_run)],
rdd_PathGame$setupInput$lambda$_4_6, 0, jl_Object, [jl_Runnable], 1, 0, 0, ["$run", $rt_wrapFunction0(rdd_PathGame$setupInput$lambda$_4_6_run)],
rdd_PathGame$setupInput$lambda$_4_7, 0, jl_Object, [jl_Runnable], 1, 0, 0, ["$run", $rt_wrapFunction0(rdd_PathGame$setupInput$lambda$_4_7_run)],
rdd_PathGame$setupInput$lambda$_4_8, 0, jl_Object, [jl_Runnable], 1, 0, 0, ["$run", $rt_wrapFunction0(rdd_PathGame$setupInput$lambda$_4_8_run)],
rdd_PathGame$setupInput$lambda$_4_9, 0, jl_Object, [jl_Runnable], 1, 0, 0, ["$run", $rt_wrapFunction0(rdd_PathGame$setupInput$lambda$_4_9_run)],
rdd_DigGame$setupInput$lambda$_5_0, 0, jl_Object, [otjde_EventListener], 1, 0, 0, 0,
rdd_DigGame$setupInput$lambda$_5_1, 0, jl_Object, [otjde_EventListener], 1, 0, 0, 0,
otjde_Registration, 0, jl_Object, [], 1, 0, 0, 0,
rdd_PathGame$bindMobileButton$lambda$_5_0, 0, jl_Object, [otjde_EventListener], 1, 0, 0, 0,
rdd_PathGame$bindMobileButton$lambda$_5_1, 0, jl_Object, [otjde_EventListener], 1, 0, 0, 0,
rdd_PathGame$bindMobileButton$lambda$_5_2, 0, jl_Object, [otjde_EventListener], 1, 0, 0, 0,
rdd_PathGame$bindMobileButton$lambda$_5_3, 0, jl_Object, [otjde_EventListener], 1, 0, 0, 0,
rdd_PathGame$bindMobileButton$lambda$_5_4, 0, jl_Object, [otjde_EventListener], 1, 0, 0, 0,
jur_BackReferencedSingleSet, 0, jur_SingleSet, [], 0, 0, 0, ["$find0", $rt_wrapFunction3(jur_BackReferencedSingleSet_find), "$findBack", $rt_wrapFunction4(jur_BackReferencedSingleSet_findBack), "$processBackRefReplacement", $rt_wrapFunction0(jur_BackReferencedSingleSet_processBackRefReplacement)],
jur_AbstractCharClass$LazyJavaLowerCase$1, "AbstractCharClass$LazyJavaLowerCase$1", 2, jur_AbstractCharClass, [], 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaLowerCase$1_contains)],
jur_AbstractCharClass$LazyJavaUpperCase$1, "AbstractCharClass$LazyJavaUpperCase$1", 2, jur_AbstractCharClass, [], 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaUpperCase$1_contains)]]);
$rt_metadata([jur_AbstractCharClass$LazyJavaWhitespace$1, "AbstractCharClass$LazyJavaWhitespace$1", 2, jur_AbstractCharClass, [], 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaWhitespace$1_contains)],
jur_AbstractCharClass$LazyJavaMirrored$1, "AbstractCharClass$LazyJavaMirrored$1", 2, jur_AbstractCharClass, [], 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaMirrored$1_contains)],
jur_AbstractCharClass$LazyJavaDefined$1, "AbstractCharClass$LazyJavaDefined$1", 2, jur_AbstractCharClass, [], 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaDefined$1_contains)],
jur_AbstractCharClass$LazyJavaDigit$1, "AbstractCharClass$LazyJavaDigit$1", 2, jur_AbstractCharClass, [], 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaDigit$1_contains)],
jur_AbstractCharClass$LazyJavaIdentifierIgnorable$1, "AbstractCharClass$LazyJavaIdentifierIgnorable$1", 2, jur_AbstractCharClass, [], 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaIdentifierIgnorable$1_contains)],
jur_AbstractCharClass$LazyJavaISOControl$1, "AbstractCharClass$LazyJavaISOControl$1", 2, jur_AbstractCharClass, [], 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaISOControl$1_contains)],
jur_AbstractCharClass$LazyJavaJavaIdentifierPart$1, "AbstractCharClass$LazyJavaJavaIdentifierPart$1", 2, jur_AbstractCharClass, [], 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaJavaIdentifierPart$1_contains)],
jur_AbstractCharClass$LazyJavaJavaIdentifierStart$1, "AbstractCharClass$LazyJavaJavaIdentifierStart$1", 2, jur_AbstractCharClass, [], 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaJavaIdentifierStart$1_contains)],
jur_AbstractCharClass$LazyJavaLetter$1, "AbstractCharClass$LazyJavaLetter$1", 2, jur_AbstractCharClass, [], 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaLetter$1_contains)],
jur_AbstractCharClass$LazyJavaLetterOrDigit$1, "AbstractCharClass$LazyJavaLetterOrDigit$1", 2, jur_AbstractCharClass, [], 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaLetterOrDigit$1_contains)],
jur_AbstractCharClass$LazyJavaSpaceChar$1, "AbstractCharClass$LazyJavaSpaceChar$1", 2, jur_AbstractCharClass, [], 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaSpaceChar$1_contains)],
jur_AbstractCharClass$LazyJavaTitleCase$1, "AbstractCharClass$LazyJavaTitleCase$1", 2, jur_AbstractCharClass, [], 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaTitleCase$1_contains)],
jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart$1, "AbstractCharClass$LazyJavaUnicodeIdentifierPart$1", 2, jur_AbstractCharClass, [], 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaUnicodeIdentifierPart$1_contains)],
jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart$1, "AbstractCharClass$LazyJavaUnicodeIdentifierStart$1", 2, jur_AbstractCharClass, [], 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_AbstractCharClass$LazyJavaUnicodeIdentifierStart$1_contains)],
jur_UnicodeCategory, "UnicodeCategory", 2, jur_AbstractCharClass, [], 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_UnicodeCategory_contains)],
jur_UnicodeCategoryScope, "UnicodeCategoryScope", 2, jur_UnicodeCategory, [], 0, 0, 0, ["$contains", $rt_wrapFunction1(jur_UnicodeCategoryScope_contains)],
ju_AbstractList$1, 0, jl_Object, [ju_Iterator], 0, 0, 0, 0,
jur_IntArrHash, 0, jl_Object, [], 0, 0, 0, 0,
rdd_Game$generateLevelsGrid$lambda$_14_0, 0, jl_Object, [otjde_EventListener], 1, 0, 0, 0,
rdd_Game$renderEncyclopedia$lambda$_21_0, 0, jl_Object, [otjde_EventListener], 1, 0, 0, 0,
rddd_GameElement, 0, jl_Object, [], 17, 0, () => rddd_GameElement_$callClinit(), 0,
otjb_TimerHandler, 0, jl_Object, [otj_JSObject], 1537, 0, 0, 0,
rdd_DigGame$trySwap$lambda$_8_0, 0, jl_Object, [otjb_TimerHandler], 1, 0, 0, 0,
ju_ConcurrentModificationException, 0, jl_RuntimeException, [], 1, 0, 0, 0,
rdd_DigGame$processMatches$lambda$_10_0, 0, jl_Object, [otjb_TimerHandler], 1, 0, 0, 0,
rdd_DigGame$win$lambda$_16_0, 0, jl_Object, [otjb_TimerHandler], 1, 0, 0, 0,
rdd_DigGame$lose$lambda$_17_0, 0, jl_Object, [otjb_TimerHandler], 1, 0, 0, 0,
rdd_DigGame$showMessage$lambda$_18_0, 0, jl_Object, [otjb_TimerHandler], 1, 0, 0, 0,
rdd_PathGame$Player, 0, jl_Object, [], 0, 0, 0, 0,
rdd_PathGame$Platform, 0, jl_Object, [], 0, 0, 0, 0,
rdd_PathGame$Ladder, 0, jl_Object, [], 0, 0, 0, 0,
rdd_PathGame$Stone, 0, jl_Object, [], 0, 0, 0, 0,
otjb_AnimationFrameCallback, 0, jl_Object, [otj_JSObject], 1537, 0, 0, 0,
rdd_PathGame$loop$lambda$_20_0, 0, jl_Object, [otjb_AnimationFrameCallback], 1, 0, 0, 0,
rdd_DigGame$lambda$processMatches$5$lambda$_22_0, 0, jl_Object, [otjb_TimerHandler], 1, 0, 0, 0,
rdd_PathGame$win$lambda$_21_0, 0, jl_Object, [otjb_TimerHandler], 1, 0, 0, 0,
rdd_PathGame$showMessage$lambda$_23_0, 0, jl_Object, [otjb_TimerHandler], 1, 0, 0, 0,
rdd_PathGame$lose$lambda$_22_0, 0, jl_Object, [otjb_TimerHandler], 1, 0, 0, 0,
rdd_DigGame$lambda$processMatches$4$lambda$_23_0, 0, jl_Object, [otjb_TimerHandler], 1, 0, 0, 0,
rdd_Game$onPathComplete$lambda$_16_0, 0, jl_Object, [otjb_TimerHandler], 1, 0, 0, 0]);
let $rt_booleanArrayCls = $rt_arraycls($rt_booleancls),
$rt_charArrayCls = $rt_arraycls($rt_charcls),
$rt_byteArrayCls = $rt_arraycls($rt_bytecls),
$rt_intArrayCls = $rt_arraycls($rt_intcls);
$rt_stringPool(["0", "null", "Patter is null", "", "[L", "String is null", "String is empty", "String contains invalid digits: ", "String contains digits out of radix ", ": ", "The value is too big for integer type", "The value is too big for int type: ", "Illegal radix: ", "false", "true", "currentEmail", "app", "auth-screen", "<div class=\"panel\"><h1>\ud83e\udd95 Археолог: Энциклопедия динозавров</h1><div class=\"auth-form\"><input type=\"email\" id=\"email-input\" placeholder=\"Email\" ><input type=\"password\" id=\"password-input\" placeholder=\"Пароль\" ><button id=\"login-btn\">Войти</button><button id=\"register-btn\">Регистрация</button><p class=\"demo-note\">Демо-режим: играйте без регистрации!</p><button id=\"demo-btn\" class=\"btn-secondary\">Играть демо</button></div></div>",
"intro-screen", "<div class=\"intro-panel\"><div class=\"intro-character\"><img src=\"assets/arc.png\" alt=\"Археолог\" id=\"char-img\" onerror=\"this.onerror=null;this.src=\'assets/arc.svg\';\"></div><div class=\"intro-dialogue\"><div id=\"intro-text\" class=\"intro-text\"></div><button id=\"intro-next-btn\" class=\"btn\">Далее ▶</button></div></div>", "menu-screen", "<div class=\"panel\"><h1>\ud83e\udd95 Археолог</h1><div class=\"player-info\"><span id=\"player-name\">Игрок</span> &nbsp;|&nbsp; <span id=\"player-level\">Уровень: 1</span></div><div class=\"menu-buttons\"><button id=\"play-btn\">\ud83c\udfae Играть</button><button id=\"encyclopedia-btn\">\ud83d\udcd6 Энциклопедия</button><button id=\"profile-btn\">\ud83d\udc64 Профиль</button><button id=\"settings-btn\">⚙️ Настройки</button><button id=\"logout-btn\" class=\"btn-danger\">\ud83d\udeaa Выход</button></div></div>",
"level-select-screen", "<div class=\"panel\"><h2>Выберите уровень</h2><div id=\"levels-grid\" class=\"levels-grid\"></div><button id=\"back-to-menu-1\" class=\"btn-secondary\">← Назад</button></div>", "path-game-screen", "<div class=\"game-header\"><span id=\"path-lives\">❤️❤️❤️</span><span id=\"path-score\">Очки: 0</span><span class=\"game-hint\">Заберитесь наверх по лестницам!</span></div><canvas id=\"path-canvas\"></canvas><div class=\"mobile-controls\"><button id=\"left-btn\">◀</button><button id=\"up-btn\">▲</button><button id=\"down-btn\">▼</button><button id=\"right-btn\">▶</button></div><div id=\"path-message\" class=\"game-message\"></div>",
"dig-game-screen", "<div class=\"game-header\"><span id=\"dig-score\">Очки: 0</span><span id=\"dig-target\">Цель: 500</span><span id=\"dig-moves\">Ходы: 20</span><span id=\"dig-size\">Поле: 9×9</span><span id=\"dig-bones\">\ud83e\uddb4 0</span></div><canvas id=\"dig-canvas\"></canvas><div id=\"dig-message\" class=\"game-message\"></div>", "discovery-screen", "<div class=\"panel discovery-panel\"><h2>\ud83c\udf89 Отличная работа!</h2><div id=\"dino-found\" class=\"dinosaur-display\"></div><p id=\"dino-info\"></p><button id=\"continue-btn\">Продолжить</button></div>",
"encyclopedia-screen", "<div class=\"panel encyclopedia-panel\"><h2>\ud83d\udcd6 Энциклопедия динозавров</h2><div id=\"collection-progress\">Найдено: 0/25</div><div id=\"dinosaurs-grid\" class=\"dinosaurs-grid\"></div><button id=\"back-to-menu-2\" class=\"btn-secondary\">← Назад</button></div>", "dino-detail-screen", "<div class=\"panel detail-panel\"><button id=\"close-detail\" class=\"close-btn\">✕</button><div id=\"detail-content\"></div></div>", "profile-screen", "<div class=\"panel\"><h2>\ud83d\udc64 Профиль игрока</h2><div id=\"profile-stats\"></div><button id=\"back-to-menu-3\" class=\"btn-secondary\">← Назад</button></div>",
"settings-screen", "<div class=\"panel settings-panel\"><h2>⚙️ Настройки</h2><label><input type=\"checkbox\" id=\"sound-toggle\" checked> Звук</label><label><input type=\"checkbox\" id=\"music-toggle\" checked> Музыка</label><label><input type=\"checkbox\" id=\"hints-toggle\" checked> Подсказки</label><button id=\"back-to-menu-4\" class=\"btn-secondary\">← Назад</button></div>", "login-btn", "register-btn", "demo-btn", "intro-next-btn", "play-btn", "encyclopedia-btn", "profile-btn", "settings-btn", "logout-btn",
"back-to-menu-1", "back-to-menu-2", "back-to-menu-3", "back-to-menu-4", "close-detail", "continue-btn", "path-canvas", "dig-canvas", "{\"currentEmail\":\"", "\"}", "{", "\"email\":\"", "\"", ",\"name\":\"", ",\"level\":", ",\"totalScore\":", ",\"gamesPlayed\":", ",\"gamesWon\":", ",\"unlockedLevels\":", ",\"isDemo\":", ",\"sound\":", ",\"music\":", ",\"hints\":", ",\"collection\":[", ",", "]}", "profile_", "name", "@", "level", "totalScore", "gamesPlayed", "gamesWon", "unlockedLevels", "isDemo", "\":", "sound",
"music", "hints", "collection", "\":[", "]", "\":\"", "\\\"", "\\\\", "\\", "div", "intro-text", "В путь! \ud83e\udd95", "Далее ▶", "player-name", "Уровень: ", "player-level", "levels-grid", "button", "\ud83d\udd12", "Уровень ", "dinosaurs-grid", "⭐", "<div class=\"dino-icon\">", "</div><div class=\"dino-stars\">", "</div><div class=\"dino-name\">", "</div>", "Найдено: ", "collection-progress", "Привет, юный исследователь! Меня зовут профессор Камневедов. Я — археолог!", "Археологи — это учёные, которые раскапывают древние сокровища и изучают историю Земли.",
"Мы находим окаменелости динозавров, которые жили миллионы лет назад!", "Хочешь отправиться со мной в удивительный мир динозавров?", "Тогда вперёд! Нас ждут раскопки и древние тайны! \ud83e\udd95", "Тираннозавр", "Tyrannosaurus Rex", "\ud83e\udd96", "Самый известный хищный динозавр с огромными зубами и мощными челюстями.", "Тираннозавр Рекс был одним из крупнейших хищников всех времён. Он жил в конце мелового периода, около 68-66 миллионов лет назад. Его длина достигала 12 метров, а вес — 8 тонн. Несмотря на крошечные передние лапы, тираннозавр был грозным охотником с невероятно сильным укусом.",
"Зубы тираннозавра были размером с бананы и могли вырастать заново, если ломались!", "Хищник", "Трицератопс", "Triceratops", "\ud83e\udd95", "Травоядный динозавр с тремя рогами и большим костяным воротником.", "Трицератопс был крупным травоядным динозавром, жившим в конце мелового периода. Его название означает «трёхрогий лик». Воротник на шее служил не только защитой от хищников, но и для привлечения партнёров. Трицератопсы питались низкорослыми растениями.", "Череп трицератопса мог достигать 2.5 метров в длину — один из самых больших среди сухопутных животных!",
"Травоядный", "Велоцираптор", "Velociraptor", "\ud83e\udd8e", "Быстрый и умный хищник с острыми когтями на ногах.", "Велоцирапторы были небольшими, но очень опасными хищниками. Они охотились стаями и использовали свой большой коготь на каждой ноге для нападения на добычу. Эти динозавры были покрыты перьями и обладали высоким интеллектом.", "Велоцирапторы были размером с индейку, а не такие большие, как показывают в фильмах!", "Бронтозавр", "Brontosaurus", "Огромный длинношеий травоядный динозавр.", "Бронтозавр, что означает «громовой ящер», был одним из самых крупных динозавров. Его длина достигала 22 метров, а вес — 15 тонн. Длинная шея позволяла ему доставать листья с высоких деревьев. Бронтозавры жили стадами для защиты от хищников.",
"Сердце бронтозавра весило около 500 кг и било всего 2 раза в минуту!", "Стегозавр", "Stegosaurus", "Травоядный динозавр с костяными пластинами на спине и шипами на хвосте.", "Стегозавр известен своими характерными костяными пластинами вдоль спины и четырьмя острыми шипами на хвосте. Эти пластины помогали регулировать температуру тела и отпугивать хищников. Мозг стегозавра был размером с грецкий орех.", "Несмотря на огромный размер (до 9 метров), мозг стегозавра весил всего 80 грамм!", "Анкилозавр", "Ankylosaurus",
"\ud83d\udc22", "Бронированный травоядный динозавр с дубинкой на хвосте.", "Анкилозавр был настоящим танком среди динозавров. Его тело покрывали костяные пластины, а на конце хвоста находилась массивная костяная дубинка. Это оружие могло сломать кости даже тираннозавру! Анкилозавры питались низкорослыми растениями.", "Даже веки анкилозавра были защищены костяными пластинками!", "Птеродактиль", "Pterodactylus", "\ud83e\udd85", "Летающий ящер с кожистыми крыльями.", "Птеродактиль не был динозавром в строгом смысле — это летающий ящер. Он имел крылья из кожистой мембраны, натянутой между удлинённым пальцем и телом. Птеродактили питались рыбой, которую ловили клювом прямо из воды.",
"Птеродактили имели гребень на голове, который помогал им управлять полётом!", "Летающий", "Спинозавр", "Spinosaurus", "\ud83d\udc0a", "Крупнейший хищный динозавр с парусом на спине.", "Спинозавр был крупнейшим хищным динозавром, даже больше тираннозавра! Его отличительной чертой был огромный парус на спине. Спинозавр прекрасно плавал и охотился на рыбу в реках древней Африки. Его челюсти были похожи на крокодильи.", "Спинозавр — единственный известный динозавр, который вёл полуводный образ жизни!", "Диплодок",
"Diplodocus", "Самый длинный динозавр с хвостом, как кнут.", "Диплодок держит рекорд по длине среди динозавров — до 27 метров! Его хвост состоял из 80 позвонков и мог использоваться как кнут для защиты. Шея диплодока была слишком короткой, чтобы подниматься высоко, поэтому он питался низкими растениями.", "Хвост диплодока мог двигаться быстрее скорости звука и создавать громкий хлопок!", "Аллозавр", "Allosaurus", "Опасный хищник юрского периода с острыми зубами.", "Аллозавр был главным хищником юрского периода. Он охотился на крупных травоядных динозавров, используя свои острые зубы и сильные лапы. Аллозавры могли охотиться как в одиночку, так и группами. Их длина достигала 12 метров.",
"Аллозавры могли открывать пасть на угол до 92 градусов — почти как змеи!", "Игуанодон", "Iguanodon", "Травоядный динозавр с шипом на большом пальце.", "Игуанодон был одним из первых динозавров, обнаруженных учёными. Он мог ходить как на двух, так и на четырёх ногах. На каждом большом пальце у него был острый шип для защиты от хищников. Игуанодоны питались хвойными растениями.", "Игуанодона открыли благодаря зубу, который нашли в 1822 году!", "Паразауролоф", "Parasaurolophus", "Утконосый динозавр с длинным гребнем на голове.",
"Паразауролоф известен своим длинным изогнутым гребнем на голове, внутри которого проходили носовые ходы. Учёные считают, что он использовал гребень для создания звуков, подобно музыкальному инструменту. Эти динозавры жили стадами и питались растениями.", "Паразауролоф мог издавать звуки разной частоты, предупреждая стаю об опасности!", "Карнотавр", "Carnotaurus", "\ud83d\udc02", "Хищник с двумя рогами над глазами.", "Карнотавр, что означает «мясной бык», получил своё название за два рога над глазами. Он был очень быстрым бегуном и мог развивать скорость до 50 км/ч. Карнотавр охотился на травоядных динозавров в Южной Америке.",
"Руки карнотавра были настолько маленькими, что их почти не было видно!", "Галлимим", "Gallimimus", "\ud83d\udc26", "Быстрый динозавр, похожий на страуса.", "Галлимим был одним из самых быстрых динозавров, способным бегать со скоростью до 60 км/ч. Он напоминал современного страуса, но был гораздо крупнее. Галлимим питался растениями, насекомыми и мелкими животными.", "Глаза галлимима были расположены по бокам головы, что давало ему отличное периферическое зрение!", "Всеядный", "Пахицефалозавр", "Pachycephalosaurus",
"Динозавр с толстым куполообразным черепом.", "Пахицефалозавр известен своим невероятно толстым черепом, который достигал 25 см в толщину. Учёные спорят, использовал ли он его для боёв с сородичами или для защиты от хищников. Этот динозавр был травоядным и ходил на двух ногах.", "Череп пахицефалозавра был самым прочным среди всех динозавров!", "Дейноних", "Deinonychus", "Быстрый хищник с серповидным когтем.", "Дейноних был средним по размеру хищником, но очень опасным благодаря своему большому серповидному когтю на каждой ноге. Он охотился стаями и мог прыгать на добычу. Дейноних был покрыт перьями и обладал высоким интеллектом.",
"Именно дейноних вдохновил создателей фильма «Парк Юрского периода» на велоцирапторов!", "Компсогнат", "Compsognathus", "Один из самых маленьких динозавров.", "Компсогнат был размером с курицу и весил всего около 3 кг. Несмотря на маленький размер, он был быстрым и ловким хищником. Компсогнаты охотились на насекомых, ящериц и мелких млекопитающих в позднем юрском периоде.", "Компсогнат — один из немногих динозавров, чьи окаменелости найдены с содержимым желудка!", "Майазавр", "Maiasaura", "\ud83e\udd5a", "Заботливая мама среди динозавров.",
"Майазавр, что означает «хорошая ящер-мама», получил своё название за заботу о потомстве. Эти динозавры строили гнёзда, высиживали яйца и кормили детёнышей. Майазавры жили большими колониями и питались растениями.", "Майазавры были первыми динозаврами, у которых обнаружили доказательства родительской заботы!", "Овираптор", "Oviraptor", "Пернатый хищник, которого ошибочно считали вором яиц.", "Овираптор получил своё имя («похититель яиц») потому, что его скелет нашли рядом с гнездом. Позже выяснилось, что это было его собственное гнездо! Овирапторы были покрыты перьями и имели беззубый клюв, которым разгрызали орехи и моллюсков.",
"Овирапторы сидели на своих яйцах точно так же, как современные птицы!", "Торозавр", "Torosaurus", "\ud83e\uddac", "Динозавр с самым большим черепом.", "Торозавр был близким родственником трицератопса, но его воротник был ещё больше и имел два больших отверстия. Череп торозавра достигал 2.6 метров — это самый большой череп среди всех сухопутных животных! Он питался низкорослыми растениями.", "Отверстия в воротнике торозавра облегчали вес черепа, чтобы шея могла его держать!", "Эораптор", "Eoraptor", "Один из самых древних динозавров.",
"Эораптор, что означает «утренний похититель», жил около 230 миллионов лет назад и был одним из первых динозавров. Он был небольшим (около 1 метра) и лёгким. Эораптор был всеядным и быстро бегал на двух ногах.", "Эораптор помогает учёным понять, как выглядели самые первые динозавры!", "Плезозавр", "Plesiosaurus", "\ud83d\udc0b", "Морской ящер с длинной шеей.", "Плезозавр не был динозавром — это морской ящер. Он имел длинную шею, маленькую голову и четыре ласта. Плезозавры плавали в океанах и питались рыбой и кальмарами. Некоторые виды достигали 15 метров в длину.",
"Плезозавры могли задерживать дыхание на 2 часа во время охоты!", "Морской", "Ихтиозавр", "Ichthyosaurus", "\ud83d\udc2c", "Морской ящер, похожий на дельфина.", "Ихтиозавр, что означает «рыбный ящер», внешне напоминал современного дельфина. Он жил в морях и океанах, питаясь рыбой и головоногими моллюсками. Ихтиозавры рождали живых детёнышей в воде, а не откладывали яйца на суше.", "Глаза ихтиозавра были размером с футбольный мяч — самые большие среди всех животных!", "Мосазавр", "Mosasaurus", "\ud83e\udd88",
"Гигантский морской хищник.", "Мосазавр был одним из крупнейших морских хищников всех времён, достигая 17 метров в длину. Он охотился на рыб, аммонитов и даже других морских ящеров. Мосазавры доминировали в океанах конца мелового периода.", "Мосазавр имел двойные ряды зубов на нёбе, чтобы надёжно удерживать скользкую добычу!", "Археоптерикс", "Archaeopteryx", "Переходная форма между динозаврами и птицами.", "Археоптерикс считается связующим звеном между динозаврами и современными птицами. Он имел перья и крылья, но также зубы и длинный хвост как у динозавра. Археоптерикс жил около 150 миллионов лет назад и мог планировать между деревьями.",
"Археоптерикс — одна из самых важных окаменелостей, когда-либо найденных учёными!", "Name capturing group should start with letter", "Is", "In", "Either src or dest is null", "Lower", "Upper", "ASCII", "Alpha", "Digit", "Alnum", "Punct", "Graph", "Print", "Blank", "Cntrl", "XDigit", "javaLowerCase", "javaUpperCase", "javaWhitespace", "javaMirrored", "javaDefined", "javaDigit", "javaIdentifierIgnorable", "javaISOControl", "javaJavaIdentifierPart", "javaJavaIdentifierStart", "javaLetter", "javaLetterOrDigit",
"javaSpaceChar", "javaTitleCase", "javaUnicodeIdentifierPart", "javaUnicodeIdentifierStart", "Space", "w", "W", "s", "S", "d", "D", "BasicLatin", "Latin-1Supplement", "LatinExtended-A", "LatinExtended-B", "IPAExtensions", "SpacingModifierLetters", "CombiningDiacriticalMarks", "Greek", "Cyrillic", "CyrillicSupplement", "Armenian", "Hebrew", "Arabic", "Syriac", "ArabicSupplement", "Thaana", "Devanagari", "Bengali", "Gurmukhi", "Gujarati", "Oriya", "Tamil", "Telugu", "Kannada", "Malayalam", "Sinhala", "Thai", "Lao",
"Tibetan", "Myanmar", "Georgian", "HangulJamo", "Ethiopic", "EthiopicSupplement", "Cherokee", "UnifiedCanadianAboriginalSyllabics", "Ogham", "Runic", "Tagalog", "Hanunoo", "Buhid", "Tagbanwa", "Khmer", "Mongolian", "Limbu", "TaiLe", "NewTaiLue", "KhmerSymbols", "Buginese", "PhoneticExtensions", "PhoneticExtensionsSupplement", "CombiningDiacriticalMarksSupplement", "LatinExtendedAdditional", "GreekExtended", "GeneralPunctuation", "SuperscriptsandSubscripts", "CurrencySymbols", "CombiningMarksforSymbols", "LetterlikeSymbols",
"NumberForms", "Arrows", "MathematicalOperators", "MiscellaneousTechnical", "ControlPictures", "OpticalCharacterRecognition", "EnclosedAlphanumerics", "BoxDrawing", "BlockElements", "GeometricShapes", "MiscellaneousSymbols", "Dingbats", "MiscellaneousMathematicalSymbols-A", "SupplementalArrows-A", "BraillePatterns", "SupplementalArrows-B", "MiscellaneousMathematicalSymbols-B", "SupplementalMathematicalOperators", "MiscellaneousSymbolsandArrows", "Glagolitic", "Coptic", "GeorgianSupplement", "Tifinagh", "EthiopicExtended",
"SupplementalPunctuation", "CJKRadicalsSupplement", "KangxiRadicals", "IdeographicDescriptionCharacters", "CJKSymbolsandPunctuation", "Hiragana", "Katakana", "Bopomofo", "HangulCompatibilityJamo", "Kanbun", "BopomofoExtended", "CJKStrokes", "KatakanaPhoneticExtensions", "EnclosedCJKLettersandMonths", "CJKCompatibility", "CJKUnifiedIdeographsExtensionA", "YijingHexagramSymbols", "CJKUnifiedIdeographs", "YiSyllables", "YiRadicals", "ModifierToneLetters", "SylotiNagri", "HangulSyllables", "HighSurrogates", "HighPrivateUseSurrogates",
"LowSurrogates", "PrivateUseArea", "CJKCompatibilityIdeographs", "AlphabeticPresentationForms", "ArabicPresentationForms-A", "VariationSelectors", "VerticalForms", "CombiningHalfMarks", "CJKCompatibilityForms", "SmallFormVariants", "ArabicPresentationForms-B", "HalfwidthandFullwidthForms", "all", "Specials", "Cn", "IsL", "Lu", "Ll", "Lt", "Lm", "Lo", "IsM", "Mn", "Me", "Mc", "N", "Nd", "Nl", "No", "IsZ", "Zs", "Zl", "Zp", "IsC", "Cc", "Cf", "Co", "Cs", "IsP", "Pd", "Ps", "Pe", "Pc", "Po", "IsS", "Sm", "Sc",
"Sk", "So", "Pi", "Pf", "left-btn", "right-btn", "up-btn", "down-btn", "touchstart", "touchend", "mousedown", "mouseup", "mouseleave", "\ud83c\udf89 Победа! Путь к раскопкам пройден!", "bold ", "px Arial", "\ud83e\udea8", "\ud83e\uddd7", "❤️", "path-lives", "Очки: ", "path-score", "\ud83d\udc80 Игра окончена! Попробуйте снова.", "path-message", "#e74c3c", "#27ae60", "\ud83c\udf89 Отлично! ", " очков!", "\ud83d\ude14 Не хватило ходов!", "#ddd5c0", "#e8e0cc", "dig-score", "Цель: ", "dig-target", "Ходы: ", "dig-moves",
"Поле: ", "dig-size", "\ud83e\uddb4 ", "dig-bones", "dig-message", "click", "email-input", "password-input", "user_", "Неверный email или пароль", "Введите email и пароль", "Пароль должен быть не менее 6 символов", "Пользователь с таким email уже существует", "demo", "Демо-игрок", "profile-stats", "<p>Нет данных</p>", "<div class=\"stat-item\"><strong>Имя:</strong> ", "<div class=\"stat-item\"><strong>Уровень:</strong> ", "<div class=\"stat-item\"><strong>Всего очков:</strong> ", "<div class=\"stat-item\"><strong>Сыграно игр:</strong> ",
"<div class=\"stat-item\"><strong>Выиграно игр:</strong> ", "<div class=\"stat-item\"><strong>Найдено динозавров:</strong> ", "/", "<div class=\"stat-item\"><strong>Всего находок:</strong> ", "<div class=\"stat-item\"><strong>Открыто уровней:</strong> ", "ArrowLeft", "a", "A", "ArrowRight", "ArrowUp", "ArrowDown", "<div style=\"text-align:center\">", "<div style=\"font-size:72px\">", "<h2>", "</h2>", "<p style=\"color:#888\"><em>", "</em></p>", "<p style=\"color:gold;font-size:22px\">", "</p>", "<p><strong>Найдено раз:</strong> ",
"<h3>\ud83d\udcd6 О динозавре</h3><p>", "<p style=\"color:#999;font-style:italic\">Найдите этого динозавра 10 раз, чтобы прочитать подробную статью!</p>", "<h3>\ud83d\udcda Подробная статья</h3><p>", "<div class=\"fact-box\"><strong>\ud83d\udca1 Интересный факт:</strong><br>", "<p style=\"margin-top:16px\"><strong>Категория:</strong> ", "detail-content", "bone", "stone", "brick", "bush", "\ud83e\uddb4", "\ud83e\uddf1", "\ud83c\udf3f", "Кость динозавра", "Камень", "Кирпич", "Куст", "dino-found", "<strong>", "</strong><br><em>",
"</em><br><small>Найдено раз: ", "</small>", "dino-info", "Хотите попробовать ещё раз?"]);
jl_String.prototype.toString = function() {
    return $rt_ustr(this);
};
jl_String.prototype.valueOf = jl_String.prototype.toString;
jl_Object.prototype.toString = function() {
    return $rt_ustr(jl_Object_toString(this));
};
jl_Object.prototype.__teavm_class__ = function() {
    return $dbg_class(this);
};
let $rt_export_main = $rt_mainStarter(rdd_Main_main);
$rt_export_main.javaException = $rt_javaException;
let $rt_jso_marker = Symbol('jsoClass');
(() => {
    let c;
    c = rdd_Game$setupAuthHandlers$lambda$_4_0.prototype;
    c.handleEvent = $rt_callWithReceiver(rdd_Game$setupAuthHandlers$lambda$_4_0_handleEvent$exported$0);
    c = rdd_Game$setupAuthHandlers$lambda$_4_1.prototype;
    c.handleEvent = $rt_callWithReceiver(rdd_Game$setupAuthHandlers$lambda$_4_1_handleEvent$exported$0);
    c = rdd_Game$setupAuthHandlers$lambda$_4_2.prototype;
    c.handleEvent = $rt_callWithReceiver(rdd_Game$setupAuthHandlers$lambda$_4_2_handleEvent$exported$0);
    c = rdd_Game$setupIntroHandlers$lambda$_8_0.prototype;
    c.handleEvent = $rt_callWithReceiver(rdd_Game$setupIntroHandlers$lambda$_8_0_handleEvent$exported$0);
    c = rdd_Game$setupMenuHandlers$lambda$_12_0.prototype;
    c.handleEvent = $rt_callWithReceiver(rdd_Game$setupMenuHandlers$lambda$_12_0_handleEvent$exported$0);
    c = rdd_Game$setupMenuHandlers$lambda$_12_1.prototype;
    c.handleEvent = $rt_callWithReceiver(rdd_Game$setupMenuHandlers$lambda$_12_1_handleEvent$exported$0);
    c = rdd_Game$setupMenuHandlers$lambda$_12_2.prototype;
    c.handleEvent = $rt_callWithReceiver(rdd_Game$setupMenuHandlers$lambda$_12_2_handleEvent$exported$0);
    c = rdd_Game$setupMenuHandlers$lambda$_12_3.prototype;
    c.handleEvent = $rt_callWithReceiver(rdd_Game$setupMenuHandlers$lambda$_12_3_handleEvent$exported$0);
    c = rdd_Game$setupMenuHandlers$lambda$_12_4.prototype;
    c.handleEvent = $rt_callWithReceiver(rdd_Game$setupMenuHandlers$lambda$_12_4_handleEvent$exported$0);
    c = rdd_Game$setupNavigationHandlers$lambda$_24_0.prototype;
    c.handleEvent = $rt_callWithReceiver(rdd_Game$setupNavigationHandlers$lambda$_24_0_handleEvent$exported$0);
    c = rdd_Game$setupNavigationHandlers$lambda$_24_1.prototype;
    c.handleEvent = $rt_callWithReceiver(rdd_Game$setupNavigationHandlers$lambda$_24_1_handleEvent$exported$0);
    c = rdd_Game$setupNavigationHandlers$lambda$_24_2.prototype;
    c.handleEvent = $rt_callWithReceiver(rdd_Game$setupNavigationHandlers$lambda$_24_2_handleEvent$exported$0);
    c = rdd_Game$setupNavigationHandlers$lambda$_24_3.prototype;
    c.handleEvent = $rt_callWithReceiver(rdd_Game$setupNavigationHandlers$lambda$_24_3_handleEvent$exported$0);
    c = rdd_Game$setupNavigationHandlers$lambda$_24_4.prototype;
    c.handleEvent = $rt_callWithReceiver(rdd_Game$setupNavigationHandlers$lambda$_24_4_handleEvent$exported$0);
    c = rdd_Game$setupNavigationHandlers$lambda$_24_5.prototype;
    c.handleEvent = $rt_callWithReceiver(rdd_Game$setupNavigationHandlers$lambda$_24_5_handleEvent$exported$0);
    c = rdd_PathGame$setupInput$lambda$_4_0.prototype;
    c.handleEvent = $rt_callWithReceiver(rdd_PathGame$setupInput$lambda$_4_0_handleEvent$exported$0);
    c = rdd_PathGame$setupInput$lambda$_4_1.prototype;
    c.handleEvent = $rt_callWithReceiver(rdd_PathGame$setupInput$lambda$_4_1_handleEvent$exported$0);
    c = rdd_DigGame$setupInput$lambda$_5_0.prototype;
    c.handleEvent = $rt_callWithReceiver(rdd_DigGame$setupInput$lambda$_5_0_handleEvent$exported$0);
    c = rdd_DigGame$setupInput$lambda$_5_1.prototype;
    c.handleEvent = $rt_callWithReceiver(rdd_DigGame$setupInput$lambda$_5_1_handleEvent$exported$0);
    c = rdd_PathGame$bindMobileButton$lambda$_5_0.prototype;
    c.handleEvent = $rt_callWithReceiver(rdd_PathGame$bindMobileButton$lambda$_5_0_handleEvent$exported$0);
    c = rdd_PathGame$bindMobileButton$lambda$_5_1.prototype;
    c.handleEvent = $rt_callWithReceiver(rdd_PathGame$bindMobileButton$lambda$_5_1_handleEvent$exported$0);
    c = rdd_PathGame$bindMobileButton$lambda$_5_2.prototype;
    c.handleEvent = $rt_callWithReceiver(rdd_PathGame$bindMobileButton$lambda$_5_2_handleEvent$exported$0);
    c = rdd_PathGame$bindMobileButton$lambda$_5_3.prototype;
    c.handleEvent = $rt_callWithReceiver(rdd_PathGame$bindMobileButton$lambda$_5_3_handleEvent$exported$0);
    c = rdd_PathGame$bindMobileButton$lambda$_5_4.prototype;
    c.handleEvent = $rt_callWithReceiver(rdd_PathGame$bindMobileButton$lambda$_5_4_handleEvent$exported$0);
    c = rdd_Game$generateLevelsGrid$lambda$_14_0.prototype;
    c.handleEvent = $rt_callWithReceiver(rdd_Game$generateLevelsGrid$lambda$_14_0_handleEvent$exported$0);
    c = rdd_Game$renderEncyclopedia$lambda$_21_0.prototype;
    c.handleEvent = $rt_callWithReceiver(rdd_Game$renderEncyclopedia$lambda$_21_0_handleEvent$exported$0);
    c = rdd_DigGame$trySwap$lambda$_8_0.prototype;
    c.onTimer = $rt_callWithReceiver(rdd_DigGame$trySwap$lambda$_8_0_onTimer$exported$0);
    c = rdd_DigGame$processMatches$lambda$_10_0.prototype;
    c.onTimer = $rt_callWithReceiver(rdd_DigGame$processMatches$lambda$_10_0_onTimer$exported$0);
    c = rdd_DigGame$win$lambda$_16_0.prototype;
    c.onTimer = $rt_callWithReceiver(rdd_DigGame$win$lambda$_16_0_onTimer$exported$0);
    c = rdd_DigGame$lose$lambda$_17_0.prototype;
    c.onTimer = $rt_callWithReceiver(rdd_DigGame$lose$lambda$_17_0_onTimer$exported$0);
    c = rdd_DigGame$showMessage$lambda$_18_0.prototype;
    c.onTimer = $rt_callWithReceiver(rdd_DigGame$showMessage$lambda$_18_0_onTimer$exported$0);
    c = rdd_PathGame$loop$lambda$_20_0.prototype;
    c.onAnimationFrame = $rt_callWithReceiver(rdd_PathGame$loop$lambda$_20_0_onAnimationFrame$exported$0);
    c = rdd_DigGame$lambda$processMatches$5$lambda$_22_0.prototype;
    c.onTimer = $rt_callWithReceiver(rdd_DigGame$lambda$processMatches$5$lambda$_22_0_onTimer$exported$0);
    c = rdd_PathGame$win$lambda$_21_0.prototype;
    c.onTimer = $rt_callWithReceiver(rdd_PathGame$win$lambda$_21_0_onTimer$exported$0);
    c = rdd_PathGame$showMessage$lambda$_23_0.prototype;
    c.onTimer = $rt_callWithReceiver(rdd_PathGame$showMessage$lambda$_23_0_onTimer$exported$0);
    c = rdd_PathGame$lose$lambda$_22_0.prototype;
    c.onTimer = $rt_callWithReceiver(rdd_PathGame$lose$lambda$_22_0_onTimer$exported$0);
    c = rdd_DigGame$lambda$processMatches$4$lambda$_23_0.prototype;
    c.onTimer = $rt_callWithReceiver(rdd_DigGame$lambda$processMatches$4$lambda$_23_0_onTimer$exported$0);
    c = rdd_Game$onPathComplete$lambda$_16_0.prototype;
    c.onTimer = $rt_callWithReceiver(rdd_Game$onPathComplete$lambda$_16_0_onTimer$exported$0);
})();
$rt_exports.main = $rt_export_main;
}));
