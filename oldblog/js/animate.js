
var ease = {
    linear(x) {
        return x
    },
    easeIn(x) {
        return Math.pow(x, 2)
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

// animate.frameAnim({
//     T: 1000,
//     easeFn: ease.bounce,
//     dertaY: 1000,
//     animated(percentX, percentY) {
//         console.log(this.dertaY * percentY);
//     }
// })