// 全局类库  global-lib.js
function globalLib(options) {
    console.log(options);
 }
 globalLib.version = "1.0.0";
 globalLib.doSomething = function () {
    console.log('globalLib do something');
 };