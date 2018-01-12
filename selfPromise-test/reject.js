// const Promise = require("../Promise");
const Promise = require("../es6Promise");

var r = Promise.reject(new Error("error"));
console.log(r === Promise.reject(r));// false