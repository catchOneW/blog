function eventBus() {
    this.hash = {}
}
eventBus.prototype.on = function (name, fn) {
    if (this.hash[name]) {
        this.hash[name].push(fn)
    } else {
        this.hash[name] = [fn]
    }
}
eventBus.prototype.emit = function (name, data) {
    Array.prototype.forEach.call(this.hash[name], fn => {
        fn.call(null, data)
    })
}
eventBus.prototype.remove = function (name, fn) {
    if (fn) {
        let i = this.hash[name].indexOf(fn)
        if (i >= 0) {
            this.hash[name].splice(i, 1)
        }
    } else {
        this.hash[name] = []
    }
}

// var bus = new eventBus()
// bus.on('tip', data => {
//     console.log(data, 1)
// })
// var f2 = data => {
//     console.log(data, 2)
// }
// bus.on('tip', f2)
// bus.remove('tip',f2)
// bus.emit('tip', { x: 11111 })