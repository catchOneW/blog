; (function () {
    //alert(1)
    var dom = {
        debounce(fn, t) {
            var id
            return function () {
                var arr = arguments
                clearTimeout(id)
                id = setTimeout(function () {
                    fn.apply(null, arr)
                }, t)
            }
        },
        composeKey() {
            var s = ''
            for (var index = 0; index < arguments.length; index++) {
                var param = arguments[index];
                s += param
            }
            return encodeURIComponent(s)
        }
    }
    var inputs = document.querySelectorAll('input:not([type=hidden])')
    if (inputs && inputs.length > 0) {
        for (var index = 0; index < inputs.length; index++) {
            var el = inputs[index];
            (function (index, el) {
                var value = localStorage.getItem(dom.composeKey(index, location.href))
                if (value) {
                    el.value = value
                }
                //alert(2)
                el.oninput = dom.debounce(function (e) {
                    //alert(3)
                    localStorage.setItem(dom.composeKey(index, location.href), e.target.value)
                }, 350)
            })(index, el)
        }
    }
})()



; (function () {
    var browser = {
        versions: function () {
            var u = navigator.userAgent, app = navigator.appVersion;
            return {
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
                iPhone: u.indexOf('iPhone') > -1,
                iPad: u.indexOf('iPad') > -1,
            };
        }(),
    },
        isAppleDevive = browser.versions.iPhone || browser.versions.iPad || browser.versions.ios,
        bridge = getBridge(),
        sendNative = function (data) {
            var send = isAppleDevive ? bridge.send : bridge.callHandler
            send.apply(null, productMessage(data))
        }
    function getBridge() {
        if (window.WebViewJavascriptBridge) {
            bridge = WebViewJavascriptBridge
        } else {
            document.addEventListener('WebViewJavascriptBridgeReady', function () {
                bridge = WebViewJavascriptBridge
            }, false);
        }
    }
    function productMessage() {
        return isAppleDevive ? [data] : ['getMsg', data]
    }

    function acceptMessage(message) {
        var msg = JSON.parse(message);
        alert(msg)
        switch (msg.dataType) {
            case "1":
                alert(1)
                break;
        }
    }
    bridge.init(function (message, responseCallback) {
        acceptMessage(message);
    });
    // bridge.registerHandler("putMsg", function (data, responseCallback) {
    //     acceptMessage(data);
    // });
    //隐藏头部
    sendNative({ dataType: 'IsShowHead', title: 'xxx', dataTag: 0 })
    window.sendNativeCCTSOFT = sendNative
})()

