import {loadScript} from '../utils/common'
const Sk = window.Sk;
const libList = {
  "./pgzero/__init__.js": "./pygame-zero.js",
}
window.PyGameZero = {
  load: function(file) {
    return Sk.misceval.promiseToSuspension(
      new Promise((resolve, reject) => {
        loadScript('https://cdn.bootcdn.net/ajax/libs/pixi.js/5.3.4/pixi.min.js', 'PIXI').then(() => {
          fetch(libList[file]).then(
            function (resp){ 
              // console.log(resp.text())
              const result = resp.text();
              resolve(result); 
            }
          )
        })
      }))
  },
  matchModelName: function(file) {
    return Object.keys(libList).includes(file);
  },
  setContainer: function(el) {
    this.container = el;
  },
}
