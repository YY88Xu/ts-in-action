import $ from 'jquery';
import m from 'moment';
declare module 'moment'{
   export function myFunction(): void;
}
m.myFunction = () => {console.log("moment插件")};
 
m.myFunction();
// import _ from 'lodash';
const s: string = "Hello TypeScript";
const app = document.querySelector('.app') || {innerHTML: ""};
app.innerHTML = s;

// document.querySelector('.app') = s;
$(".app").css("color", "red");
globalLib.doSomething();

import moduleLib from './lib/module-lib.js';
moduleLib.doSomething();

import umdLib from './lib/umd-lib';
umdLib.doSomething();
console.log(umdLib.version);

declare global {
    namespace globalLib {
       function myFunction(): void
    }
 }
 globalLib.myFunction = () =>{console.log("global插件")};

 globalLib.myFunction();