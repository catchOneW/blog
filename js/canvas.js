var utility = {
    drawline(context) {
        return function (point1, point2, color, width) {
            context.beginPath()
            context.lineWidth = width;
            context.strokeStyle = color
            context.moveTo(point1.x, point1.y)
            context.lineTo(point2.x, point2.y)
            context.stroke()
        }
    },
    eraser(context) {
        return function (x, y, width = 20, height = 20) {
            context.clearRect(x - width / 2, y - height / 2, width, height)
        }
    },
    clear(context) {
        return function (x, y, width = 20, height = 20) {
            context.clearRect(x, y, width, height)
        }
    },
    save(context) {
        return function (type) {
            return context.toDataURL(type)
        }
    },

}