/*! remarkable 1.5.0 https://github.com//jonschlinkert/remarkable @license MIT */ ! function(e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        var t;
        "undefined" != typeof window ? t = window : "undefined" != typeof global ? t = global : "undefined" != typeof self && (t = self), t.Remarkable = e()
    }
}(require('./remarkable.js'));
