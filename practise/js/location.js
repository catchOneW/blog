/**
 * bom.queryString.get(location.search)
 * {a:1,b:2}
 * 
 * bom.queryString.set({name:1})
 * &a=1&b=2
 * 
 * 
 */


var bom = {
    queryString: {
        get: function (name) {
            let getObject = str => {
                let queryObject = {};
                str.replace(/^\?/, '')
                    .split('&')
                    .filter(item => item)
                    .forEach(item => {
                        let keyValueArr = item.split('=');
                        queryObject[keyValueArr[0]] = keyValueArr[1];
                    });
                return queryObject;
            }
            //传参和不传参
            if (arguments.length) {
                return getObject(location.search)[name];
            } else {
                return getObject(location.search);
            }
        },
        set: function (name, value) {
            //没有就添加
            //有就修改


            //传2个参还是传1个json
            if (arguments.length) {
                return getObject(location.search)[name];
            } else {
                return getObject(location.search);
            }
        }
    }
}