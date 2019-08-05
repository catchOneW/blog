
var ease = {
    linear(x) {
        return x
    },
    easeIn(x) {
        return Math.pow(x, 2)
    },
    bounce(x) {
        var s = 7.5625, y
        if (x < 1 / 2.75) {
            y = s * Math.pow(x, 2)
        }
        else if (x < 2 / 2.75) {
            y = s * (x -= 1.5 / 2.75) * x + .75
        }
        else if (x < 2.25 / 2.75) {
            y = s * (x -= 2.25 / 2.75) * x + .9375
        }
        else {
            y = s * (x -= 2.625 / 2.75) * x + .984375
        }
        return y
    }
}
var animate = {
    frameAnim(options) {
        let t1 = Date.now()
        requestAnimationFrame(function step() {
            let t2 = Date.now()
            let dertaT = t2 - t1
            let percentX = Math.min(1, dertaT / options.T)
            let percentY = options.easeFn(percentX)
            options.animated(percentX, percentY)
            if (percentX < 1) {
                requestAnimationFrame(step)
            }
        })
    }
}

animate.frameAnim({
    T: 1000,
    easeFn: ease.bounce,
    dertaY: 1000,
    animated(percentX, percentY) {
        console.log(this.dertaY * percentY);
    }
})