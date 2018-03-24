'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var promiseTimeout = exports.promiseTimeout = function promiseTimeout(ms, promise) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            promise.then(function (resp) {
                resolve(resp);
            }).catch(function (err) {
                reject(err);
            });
        }, ms);
    });
};

var updateObject = exports.updateObject = function updateObject(oldObject, updateProperties) {
    return _extends({}, oldObject, updateProperties);
};

var guid = exports.guid = function guid() {
    var s4 = function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    };
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
};