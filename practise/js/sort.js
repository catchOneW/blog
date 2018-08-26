//我这种写法比vilian的好，省去了越界undefined的多余判断
function bubble(a) {
    var n = a.length;
    for (let i = n - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (a[j] > a[j + 1]) {
                [a[j], a[j + 1]] = [a[j + 1], a[j]]
            }
        }
    }
}
// var a = [9, 8, 7, 6, 5, 4, 3, 2, 1]
// bubble(a)
// console.log(...a)

function select(a) {
    var n = a.length
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if (a[i] > a[j]) {
                [a[j], a[i]] = [a[i], a[j]]
            }
        }
    }
}
// var a = [9, 8, 7, 6, 5, 4, 3, 2, 1]
// select(a)
// console.log(...a)

// 2 1
// a[j-1]  a[i]
//   2    2
//   1<undefu? 
//   1    2
function insert(a) {
    var n = a.length
    for (let i = 1; i < n; i++) {  //n-1
        var temp = a[i]
        for (let j = i; j >= 0; j--) { //  i次
            if (temp < a[j - 1]) {
                a[j] = a[j - 1] //让出位置
            } else {
                a[j] = temp //虚空比较
                break
            }
        }
    }
    return a
}
// var a = [9, 8, 7, 6, 5, 4, 3, 2, 1]
// console.log(...insert(a))


function quick(a) {
    var n = a.length
    if (n < 2) {
        return a;
    }
    let l = [], r = [], m = a[0]
    for (let i = 1; i < n; i++) {  //n-1
        if (a[i] < m) {
            l.push(a[i])
        } else {
            r.push(a[i])
        }
    }
    return [...quick(l), m, ...quick(r)]
}
// var a = [9, 8, 7, 6, 5, 4, 3, 2, 1]
// console.log(...quick(a))

function hash(a) {
    var h = {},res=[];
    for (const item of a) {
        if (h[item]) {
            h[item] = h[item]+1
        } else {
            h[item] = 1
        }
    }
    let maxKey=Math.max(...Object.keys(h));
    let minKey=Math.min(...Object.keys(h));
    for (let index =minKey; index <= maxKey; index++) {
        const element = h[index];
        for (let j = 0; j < element; j++) {
            res.push(index)
        }
    }    
    return res
}
var a = [9,9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(...hash(a))