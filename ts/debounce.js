"use strict";
window.onload = function () {
    var inputEl = document.getElementById('J-search-input');
    var btnEl = document.getElementById('J-search-btn');
    var moveEl = document.getElementById('J-move-block');
    // 去抖
    var ajax = function (event) {
        console.log("HTTP\u5F02\u6B65\u8BF7\u6C42\uFF1A" + inputEl.value);
    };
    var debounce = function (func, delay) {
        if (delay === void 0) { delay = 1000; }
        var timer = null;
        return function (args) {
            clearTimeout(timer);
            timer = setTimeout(function () {
                func();
            }, delay);
        };
    };
    inputEl.oninput = debounce(ajax);
    btnEl.onclick = debounce(ajax);
    // 节流
    var count = 0;
    var handler = function (event) {
        count++;
        moveEl.innerHTML = "\u9F20\u6807\u79FB\u5165\u4E86" + count + "\u6B21";
    };
    var throttle = function (func, delay) {
        if (delay === void 0) { delay = 1000; }
        var initDate = new Date().getTime();
        return function () {
            var nowDate = new Date().getTime();
            if (nowDate - initDate >= delay) {
                func();
                initDate = nowDate;
            }
        };
    };
    moveEl.onmouseenter = throttle(handler);
};
