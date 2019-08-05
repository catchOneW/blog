function unique(arr) {
    return [...new Set(arr)]
}

// function unique(arr) {
//     return arr.filter((element, index) => { return arr.indexOf(element) === index });
// }
function unique(arr) {
    let o = {}
    arr.forEach(element => {
        o[element] = element
    });
    return Object.keys(o)
}

unique([1, 5, 2, 3, 4, 2, 3, 1, 3, 4])

function unique(arr) {
    return arr.filter((x, index) => arr.indexOf(x) == index);
}
