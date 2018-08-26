const querystring = require('querystring');
//querystring=>querys Json
var s = querystring.parse('?foo=bar&abc=xyz&abc=123');
console.log(s);
//escape转义和unescape反转意
var s2 = querystring.unescape("%E4%B8%AD%E6%96%87");
console.log(s2);
