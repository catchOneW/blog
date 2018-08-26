import seed from './seed';
var dom = {
    findEl(el) {
        if (seed.isString(el)) {
            el = document.querySelector(el)
        }
        return el
    }
    ,
    onPressMove(options) {
        let start = false
        let el = this.findEl(options.el)
        el.onmousedown = e => {
            start = true
            options.phase1(e.clientX, e.clientY)
        }
        el.onmousemove = e => {
            start && options.phase2(e.clientX, e.clientY)
        }
        el.onmouseup = e => {
            start = false
        }
    },
    onPressMoveMoblie(options) {
        let start = false
        let el = this.findEl(options.el)
        el.ontouchstart = e => {
            start = true
            options.phase1(e.touches[0].clientX, e.touches[0].clientY)
        }
        el.ontouchmove = e => {
            start && options.phase2(e.touches[0].clientX, e.touches[0].clientY)
        }
        el.ontouchend = e => {
            start = false
        }
    },
    onToggleClass(options) {
        let el = this.findEl(options.el)
        el.onclick=()=>{
            el.classList.toggle(options.class)
        }
    }
}
dom.onPressMoveMoblie({
    el: document,
    point1: { x: undefined, y: undefined },
    point2: { x: undefined, y: undefined },
    dir: '',
    phase1(x, y) {
        this.point1 = { x, y }
    },
    phase2(x, y) {
        this.point2 = { x, y }
        this.line()
        this.checkDir(this.point1, this.point2)
        this.point1 = this.point2
    },
    checkDir(p1, p2) {
        let diffx = p2.x - p1.x
        let diffy = p2.y - p1.y
        if (Math.abs(diffx) > Math.abs(diffy)) {
            if (diffx > 0) {
                this.dir = 'r'
            } else {
                this.dir = 'l'
            }
        } else {
            if (diffy > 0) {
                this.dir = 'b'
            } else {
                this.dir = 't'
            }
        }
    },
    line() {
        console.log(`从点${this.point1.x}到点${this.point2.x}`)
        console.log(this.dir)
    }
})