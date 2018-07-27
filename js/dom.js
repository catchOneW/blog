var dom = {
    $el(el) {
        if (typeof el == 'string') {
            el = document.querySelector(el)
        }
        return el
    },
    onWheel(options) {
        let el = this.$el(options.el)
        el.onwheel = e => {
            options.wheel()
        }
    },
    onScroll(options) {
        let el = this.$el(options.el)
        el.onscroll = e => {
            options.scroll()
        }
    },
    onHover(options) {
        let el = this.$el(options.el)
        el.onmouseenter = e => {
            options.mouseenter(e)
        }
        el.onmouseleave = e => {
            options.mouseleave(e)
        }
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
    add(options) {
        let el = this.$el(options.el)
        el.classList.add(options.className)
    },
    remove(options) {
        let el = this.$el(options.el)
        el.classList.remove(options.className)
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
