function jsonp(url) {
    let fName = 'jq' + Math.random() * 1000
    //
    window[fName] = function (data) {
        console.log(data);
        delete window[fName]
    }
    let spt = document.createElement('script')
    spt.src = url + '?callback=' + fName
    document.body.appendChild(spt)
    spt.onload = function () {
        spt.remove()
        spt = null
    }
}

function ajax(url) {
    let xhr
    if (XMLHttpRequest) {
        xhr = new XMLHttpRequest()
    }
    if (ActiveXObject) {
        xhr = new ActiveXObject("Microsoft.XMLHTTP")
    }
    return xhr
}
let xhr = ajax()
xhr.open('GET', url)
xhr.send()
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText)
    }
}