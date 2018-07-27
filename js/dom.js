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



var util = {
    //a[i][j][k]
    i: 0,
    innerObj(key, vm) {
        let obj = vm
        key = key.split('.')
        key.forEach(k => {
            obj = obj[k]
        })
        return obj
    },
    giveToFragment(el) {
        let fg = document.createDocumentFragment()
        let child = el.firstChild
        while (child) {
            fg.appendChild(child)
            child = el.firstChild
        }
        return fg
    },
    dfsNode(options) {
        let el = options.el;
        [].slice.call(el.childNodes).forEach(child => {
            options.fn(child)
            if (child.childNodes) {
                this.dfsNode({ el: child, fn: options.fn, i: this.i })
            }
        })
    },
    bfsNode(options) {
        let el = options.el;
        let next = [];
        [].slice.call(el.childNodes).forEach(child => {
            options.fn(child);
            [].slice.call(child.childNodes).forEach(cc => {
                next.push(cc)
            })
        })
        if (next.length > 0) {
            this.bfsNode({ el: { childNodes: next }, fn: options.fn, i: this.i })
        }
    },
    dfsObj(options) {
        let el = options.el;
        Object.keys(el).forEach(key => {
            let value = el[key]
            options.fn(value)
            let childNodes = Object.keys(value)
            if (childNodes && childNodes.length > 0) {
                this.dfsObj({ el: value, fn: options.fn, i: this.i })
            }
        })
    },

}

util.dfsObj({
    el: { x: { a: 1, b: 2 }, y: 2 },
    i: 0,
    fn(e) {
        console.log(e);
    }
})
