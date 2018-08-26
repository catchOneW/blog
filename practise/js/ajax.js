

jQuery.ajax = function ({ url, method, body, success, fail }) {
    let xhr = new XMLHttpRequest()
    xhr.open(method, url)
    xhr.send(body)
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            success(xhr.responseText)
        } else {
            fail(xhr.responseText)
        }
    }
}


jQuery.ajax = function ({ url, method, body, success, fail }) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest()
        xhr.open(method, url)
        xhr.send(body)
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                resolve(xhr.responseText)
            } else {
                reject(xhr.responseText)
            }
        }
    })
}

function A(name){
    this.name=name
}
A.prototype.say=function(){
    console.log(this.name);
}
var a=new A()






var array = []
array.__proto__ === ????填空4???? // 为 true
Array.prototype
array.__proto__.__proto__ === ????填空5???? // 为 true

Function.__proto__ === ????填空6???? // 为 true
Array.__proto__ === ????填空7???? // 为 true
Object.__proto__ === ????填空8???? // 为 true

true.__proto__ === ????填空9???? // 为 true

Function.prototype.__proto__ === ????填空10???? // 为 true