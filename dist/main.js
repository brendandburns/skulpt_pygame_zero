(function () {var b={};function f(r,e){return window[e]?Promise.resolve(window[e]):new Promise(function(t,n){var a=document.createElement("script");a.onload=function(){t(e&&window.varName)},a.onerror=function(r){a.onload=null,a.onerror=null,document.body.removeChild(a),n(r)},a.src=r,a.async=!0,document.body.appendChild(a)})}var a=window.Sk;var g=window.Sk,c={"./pgzrun/__init__.js":"https://cdn.jsdelivr.net/gh/lipten/skulpt-pygame-zero/dist/pygame-zero.js"},d={load:function(e){return g.misceval.promiseToSuspension(new Promise(function(t,n){f("https://cdn.bootcdn.net/ajax/libs/pixi.js/5.3.4/pixi.min.js","PIXI").then(function(){fetch(c[e]).then(function(e){var n=e.text();t(n)})})}))},matchModelName:function(e){return Object.keys(c).includes(e)},setContainer:function(e){this.container=e},_onRunning:function(e){this.app=e}};b.PyGameZero=d,window.PyGameZero=d;if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=b}else if(typeof define==="function"&&define.amd){define(function(){return b})}})();