var s = '<p>{{id}}</p>';
var o = { id: 111111 };
function mustacheRender(str, obj) {
    return str.replace(
        /(\<p\>)(\{\{)(.*?)(\}\})(\<\/p>)/,
        function (match, a, b, c, d, e) {
            return a + obj[c] + e;
        });
}
mustacheRender(s, o);


