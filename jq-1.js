window.jQuery = function (selector) {
    var ojb = {}
    if (typeof selector === 'string') {
        ojb = document.querySelectorAll(selector)
    }
    ojb.addClass = function (s) {
        Array.prototype.forEach.call(ojb, item => {
            item.classList.add(s)
        })
    }
    ojb.setText = function (s) {
        Array.prototype.forEach.call(ojb, item => {
            item.textContent = s
        })
    }
    return obj
}
window.$ = jQuery
var $div = $('div')
$div.addClass('red') // 可将所有 div 的 class 添加一个 red
$div.setText('hi') // 可将所有 div 的 textContent 变为 hi