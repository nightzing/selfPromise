const fs = require("fs");
// const Promise = require("../Promise");
const Promise = require("../es6Promise");

function readFile(fileName) {
  return new Promise((res, rej) => {
    fs.readFile(fileName, (e, d) => e ? rej(e) : res(d));
  });
}

readFile("./readfile.js")
.then(d => console.log("raw:\n", d, "\ndecoded:\n", d.toString()))
.catch(e => console.error(`failed:${e.message}`));


