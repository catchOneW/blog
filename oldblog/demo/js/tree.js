var a = [
    { id: 1, name: 'name1', pid: 0 },
    { id: 2, name: 'name1-2', pid: 1 },
    { id: 3, name: 'name1-3', pid: 1 },
    { id: 4, name: 'name1-2-1', pid: 2 },
    { id: 5, name: 'name1-2-2', pid: 2 },
    { id: 6, name: 'name1-3-1', pid: 3 },
    { id: 7, name: 'name1-3-2', pid: 4 },
]
function arrToTree(arr) {
    var hash = {}, node, roots = [], i;
    for (i = 0; i < arr.length; i += 1) {
        hash[arr[i].id] = i;
        arr[i].children = [];
    }
    for (i = 0; i < arr.length; i += 1) {
        node = arr[i];
        if (node.pid !== 0) {
            arr[hash[node.pid]].children.push(node);//node=>pid=>index=>parentNode
        } else {
            roots.push(node);
        }
    }
    return roots;
}
var b = arrToTree(a)
console.log(b);

//tree => arr => hash
let arr = []
this.dfsNode({
    el: this.tree,
    fn: e => {
        arr.push(e)
    }
})
{ id, index }
var hash = {}
for (let i = 0; i < arr.length; i += 1) {
    hash[arr[i].permissionId] = i
}
this.findParent(arr, hash, a, p => {
    console.log('爸爸是', p)
})
function findParent(arr, hash, node, fn) {
    let parent = arr[hash[node.pid]]
    if (parent) {
        fn(parent)
        if (parent.pid !== -1) {
            this.findParent(arr, hash, parent, fn)
        }
    }
}

//findLeaf
