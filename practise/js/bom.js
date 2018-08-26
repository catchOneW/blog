//set
//get
var a = {
    // queryToJson() {
    //     var res = {}
    //     location.search.replace('?', '').split('&').forEach(e => {
    //         let kv = e.split('=');
    //         res[decodeURIComponent(kv[0])] = decodeURIComponent(kv[1]);
    //     })
    //     return res
    // }
    queryToJson() {
        var res = {}
        location.search.slice(1).split('&').forEach(e => {
            let kv = e.split('=');
            res[decodeURIComponent(kv[0])] = decodeURIComponent(kv[1]);
        })
        return res
    }
}
export default a;