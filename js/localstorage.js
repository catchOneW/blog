//alert(1)
var dom = {
    debounce(fn, t) {
        var id
        return function () {
            var arr = arguments
            clearTimeout(id)
            id = setTimeout(function () {
                fn.apply(null, arr)
            }, t)
        }
    },
    composeKey() {
        var s = ''
        for (var index = 0; index < arguments.length; index++) {
            var param = arguments[index];
            s += param
        }
        return encodeURIComponent(s)
    }
}
var inputs = document.querySelectorAll('input:not([type=hidden])')
if (inputs && inputs.length > 0) {
    for (var index = 0; index < inputs.length; index++) {
        var el = inputs[index];
        (function (index, el) {
            var value = localStorage.getItem(dom.composeKey(index, location.href))
            if (value) {
                el.value = value
            }
            //alert(2)
            el.oninput = dom.debounce(function (e) {
                //alert(3)
                localStorage.setItem(dom.composeKey(index, location.href), e.target.value)
            }, 350)
        })(index, el)
    }
}
