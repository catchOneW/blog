export default seed = {
     //7+3=10个类型检测
    isNumber(options) {
        return Object.prototype.toString.call(options) === "[object Number]"
    },
    isString(options) {
        return Object.prototype.toString.call(options) === "[object String]"
    },
    isBoolean(options) {
        return Object.prototype.toString.call(options) === "[object Boolean]"
    },
    isUndefined(options) {
        return Object.prototype.toString.call(options) === "[object Undefined]"
    },
    isNull(options) {
        return Object.prototype.toString.call(options) === "[object Null]"
    },
    isSymbol(options) {
        return Object.prototype.toString.call(options) === "[object Symbol]"
    },
    isObjcet(options) {
        return Object.prototype.toString.call(options) === "[object Objcet]"
    },
    isArray(options) {
        return Object.prototype.toString.call(options) === "[object Array]"
    },
    isFunction(options) {
        return Object.prototype.toString.call(options) === "[object Function]"
    },
    isNaN(options) {
        return this.isNumber(options) && options !== options
    }
}