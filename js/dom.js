var dom = {
    $el(el) {
        if (typeof el == 'string') {
            el = document.querySelector(el)
        }
        return el
    },
    onPressMove(options) {
        let start = false
        let el = this.$el(options.el)
        el.onmousedown = e => {
            start = true
            options.pressed(e.clientX, e.clientY)
        }
        el.onmousemove = e => {
            start && options.moved(e.clientX, e.clientY)
        }
        el.onmouseup = e => {
            start = false
        }
    },
    onPressMoveMoblie(options) {
        let start = false
        let el = this.$el(options.el)
        el.ontouchstart = e => {
            start = true
            options.pressed(e.touches[0].clientX, e.touches[0].clientY)
        }
        el.ontouchmove = e => {
            start && options.moved(e.touches[0].clientX, e.touches[0].clientY)
        }
        el.ontouchend = e => {
            start = false
        }
    },
    onToggleClass(options) {
        let el = this.$el(options.el)
        el.onclick = () => {
            options.beforeToggle(el)
            el.classList.toggle(options.className)
            options.afterToggle(el.classList.contains(options.className), el)
        }
    },
    toggleClass(options) {
        let el = this.$el(options.el)
        el.classList.toggle(options.className)
    },
    walkToTop(options) {
        let el = this.$el(options.el)
        let pre = el.previousElementSibling
        while (pre) {
            options.walkTo(pre)
            pre = pre.previousElementSibling
        }
    },
    walkToBottom(options) {
        let el = this.$el(options.el)
        let next = el.nextElementSibling
        while (next) {
            options.walkTo(next)
            next = next.nextElementSibling
        }
    },

}