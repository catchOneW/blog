//状态在外面也行，但就是认知负荷(让人多虑)
var higherOrder = {
    memoize(f) {
        let hash = {}
        return function () {
            let k = JSON.stringify(arguments)
            hash[k] = hash[k] || f.apply(f, arguments)
            return hash[k]
        }
    }
}
var f = () => {
    console.log('我被调用了');
    return 1
}
var mf = higherOrder.memoize(f)
console.log(mf());
console.log(mf());
