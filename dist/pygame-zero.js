parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"FOZT":[function(require,module,exports) {
"use strict";function e(e){return o(e)||r(e)||n(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}function r(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function o(e){if(Array.isArray(e))return i(e)}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function u(e,t){return window[t]?Promise.resolve(window[t]):new Promise(function(n,r){var o=document.createElement("script");o.onload=function(){n(t&&window.varName)},o.onerror=function(e){o.onload=null,o.onerror=null,document.body.removeChild(o),r(e)},o.src=e,o.async=!0,console.log(document.body),document.body.appendChild(o)})}function c(e,t){Array.isArray(t)&&(t.x=t[0],t.y=t[1],t.width=0,t.height=0),e.centerX=e.x+e.width/2,e.centerY=e.y+e.height/2,t.centerX=t.x+t.width/2,t.centerY=t.y+t.height/2,e.halfWidth=e.width/2,e.halfHeight=e.height/2,t.halfWidth=t.width/2,t.halfHeight=t.height/2;var n=e.centerX-t.centerX,r=e.centerY-t.centerY,o=e.halfWidth+t.halfWidth,i=e.halfHeight+t.halfHeight;return Math.abs(n)<o&&Math.abs(r)<i}Object.defineProperty(exports,"__esModule",{value:!0}),exports.loadScript=u,exports.hitTestRectangle=c,exports.textureRecources=l,exports.genkwaFunc=d,exports.defineProperty=exports.defineGetter=void 0;var a={};function l(t){function n(t){var n;return Array.isArray(t)&&(n=e(t),t=n[0]),new Promise(function(e,r){window.PIXI.utils.TextureCache[t]?e(window.PIXI.utils.TextureCache[t]):(console.log(n||t),window.PIXI.loader.add(n||t).load(function(){var n=window.PIXI.loader.resources[t].texture;e(n)}))})}return/\.json$/.test(t)?a[t]?n(a[t]):fetch(t).then(function(e){return e.json()}).then(function(e){var r=t.replace("index.json",""),o=e.map(function(e){return r+e});return a[t]=o,n(o)}):n(t)}var f=window.Sk,s=function(e){return f.misceval.callsimOrSuspend(f.builtins.property,new f.builtin.func(e),new f.builtin.func(function(){}))};function d(e,t){var n=function(n){for(var r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];t||(o=new f.builtins.tuple(o));var u=new f.builtin.dict(n);return e(o,u)};return n.co_kwargs=!0,n}exports.defineGetter=s;var h=function(e,t){return f.misceval.callsimOrSuspend(f.builtins.property,new f.builtin.func(function(n){return"function"==typeof e?e(n):f.ffi.remapToPy(n[e][t])}),new f.builtin.func(function(n,r){"function"==typeof t?t(n,r):n[e][t]=r.v}))};exports.defineProperty=h;
},{}],"D9kh":[function(require,module,exports) {
"use strict";var e=require("./utils");function n(){var e=i(["./assets/",".mp3"]);return n=function(){return e},e}function i(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function t(e,n){return l(e)||u(e,n)||o(e,n)||r()}function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e,n){if(e){if("string"==typeof e)return a(e,n);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?a(e,n):void 0}}function a(e,n){(null==n||n>e.length)&&(n=e.length);for(var i=0,t=new Array(n);i<n;i++)t[i]=e[i];return t}function u(e,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var i=[],t=!0,r=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(t=(a=u.next()).done)&&(i.push(a.value),!n||i.length!==n);t=!0);}catch(s){r=!0,o=s}finally{try{t||null==u.return||u.return()}finally{if(r)throw o}}return i}}function l(e){if(Array.isArray(e))return e}var c=window.Sk,f=window.PIXI,p={aqua:"#00FFFF",black:"#000000",blue:"#0000FF",fuchsia:"#FF00FF",gray:"#808080",green:"#008000",lime:"#00FF00",maroon:"#800000",navy:"#000080",olive:"#808000",orange:"#FFA500",purple:"#800080",red:"#FF0000",silver:"#C0C0C0",teal:"#008080",white:"#FFFFFF",yellow:"#FFFF00"};window.$builtinmodule=function(){var i={__name__:new c.builtin.str("pygame-zero")};f.utils.isWebGLSupported();var r=f.Application,o=(f.loader,f.loader.resources,f.utils),a=f.Sprite,u=f.Graphics;f.Text,f.TextStyle;window.PIXI.loader.pre(function(e,n){e.crossOrigin="anonymous",e.loadType=window.PIXI.loaders.Resource.LOAD_TYPE.XHR,n()}),window.PGZApp&&(window.PGZApp.destroy({removeView:!0}),window.PGZApp=void 0),window.PGZApp=new r({backgroundColor:0,width:500,height:400});var l=window.PGZApp;Math.round(l.view.width/2),Math.round(l.view.height/2);function d(e,n){return e}function m(e,n){return e}function w(e,n){return e?[d(e[0]),m(e[1])]:e}function v(e){return Array.isArray(e)?o.rgb2hex(e):e.match("#")?o.string2hex(e):p[e]?o.string2hex(p[e]):16777215}window.PyGameZero.container.appendChild(l.view),i.WIDTH=c.ffi.remapToPy(l.view.width),i.HEIGHT=c.ffi.remapToPy(l.view.height),i.Actor=c.misceval.buildClass(i,function(n,i){i.__init__=new c.builtin.func(function(n,i){return new c.misceval.promiseToSuspension(new Promise(function(t){i=c.ffi.remapToJs(i),(0,e.textureRecources)(i||"./assets/".concat(i.v,"/index.json")).then(function(e){var r=new a(e);r.zOrder=1,n.sprite=r,n.sprite.anchor.set(.5),n.sprite.x=d(0),n.sprite.y=m(0),n.actorName=i,l.stage.addChild(r),t()})}))}),i.x=(0,e.defineProperty)(function(e){return c.ffi.remapToPy(d(e.sprite.x))},function(e,n){e.sprite.x=d(n.v)}),i.y=(0,e.defineProperty)(function(e){return c.ffi.remapToPy(m(e.sprite.y))},function(e,n){e.sprite.y=m(n.v)}),i.width=(0,e.defineProperty)("sprite","width"),i.height=(0,e.defineProperty)("sprite","height"),i.pos=(0,e.defineProperty)(function(e){return c.ffi.remapToPy(w([e.sprite.x,e.sprite.y]))},function(e,n){var i=w(c.ffi.remapToJs(n));e.sprite.x=i[0],e.sprite.y=i[1],e.sprite.pos=[i[0],i[1]]}),i.angle=(0,e.defineProperty)("sprite","angle"),i.show=(0,e.defineProperty)("sprite","visible"),i.image=(0,e.defineProperty)(function(e){return c.ffi.remapToPy(e.sprite.texture)},function(n,i){return new c.misceval.promiseToSuspension(new Promise(function(t){(0,e.textureRecources)(i.v).then(function(e){n.sprite.texture=e,t()})}))}),i.frame=(0,e.defineProperty)(function(e){return c.ffi.remapToPy(e.sprite.texture)},function(n,i){return new c.misceval.promiseToSuspension(new Promise(function(t){(0,e.textureRecources)(n.actorName[i.v-1]||"./assets/".concat(n.actorName,"/造型").concat(i.v,".png")).then(function(e){n.sprite.texture=e,t()})}))}),i.distance_to=new c.builtin.func(function(e,n){return n=w(c.ffi.remapToJs(n)),c.ffi.remapToPy(Math.round(Math.abs(Math.sqrt(Math.pow(e.sprite.x-n[0],2)+Math.pow(e.sprite.y-n[1],2)))))}),i.angle_to=new c.builtin.func(function(e,n){n=w(c.ffi.remapToJs(n));var i=e.sprite.y,t=n[0],r=e.sprite.y,o=n[1],a=Math.abs(i-t),u=Math.abs(r-o),s=Math.sqrt(a*a+u*u);return c.ffi.remapToPy(Math.round(Math.asin(u/s)/Math.PI*180))}),i.collide_point=new c.builtin.func(function(n,i){return(0,e.hitTestRectangle)(n.sprite,w(c.ffi.remapToJs(i)))}),i.collide_actor=new c.builtin.func(function(n,i){return(0,e.hitTestRectangle)(n.sprite,i.sprite)}),i.remove=new c.builtin.func(function(e){l.stage.removeChild(e.sprite)})},"Actor"),i.Rect=c.misceval.buildClass(i,function(n,i){i.__init__=new c.builtin.func(function(e,n,i){n=w(c.ffi.remapToJs(n)),i=c.ffi.remapToJs(i),e.pos={x:n[0],y:n[1]},e.size={width:i[0],height:i[1]}}),i.pos=(0,e.defineGetter)(function(e){return c.ffi.remapToPy(w(e.pos))}),i.size=(0,e.defineGetter)(function(e){return c.ffi.remapToPy(e.size)})},"Rect",[]);var y=new u;i.draw=c.misceval.buildClass(i,function(n,i){i.__init__=new c.builtin.func(function(e){e.size=5}),i.size=new c.builtin.func(function(e,n){e.size=n.v}),i.fill=new c.builtin.func(function(e,n){n=v(c.ffi.remapToJs(n)),y.beginFill(n)}),i.line=new c.builtin.func(function(e,n,i,t){t=v(c.ffi.remapToJs(t)),n=c.ffi.remapToJs(n),i=c.ffi.remapToJs(i),y.lineStyle(e.size||2,t,1),y.moveTo(n[0],n[1]),y.lineTo(i[0],i[1]),l.stage.addChild(y)}),i.circle=new c.builtin.func(function(e,n,i,t){t=v(c.ffi.remapToJs(t)),n=w(c.ffi.remapToJs(n)),y.lineStyle(e.size,t,1),y.drawCircle(n[0],n[1],i.v),l.stage.addChild(y)}),i.filled_circle=new c.builtin.func(function(e,n,i,t){t=v(c.ffi.remapToJs(t)),n=w(c.ffi.remapToJs(n)),y.lineStyle(0),y.beginFill(t,1),y.drawCircle(n[0],n[1],i.v),y.endFill(),l.stage.addChild(y)}),i.rect=new c.builtin.func(function(e){for(var n=arguments.length,i=new Array(n>1?n-1:0),t=1;t<n;t++)i[t-1]=arguments[t];if("Rect"===c.abstr.typeName(i[0])){var r=i[0],o=i[1];y.lineStyle(e.size,v(c.ffi.remapToJs(o)),1),y.drawRect(r.pos.x,r.pos.y,r.size.width,r.size.height),l.stage.addChild(y)}else{var a,u,s=c.ffi.remapToJs(i[0]);Array.isArray(s)?(a=s[0],u=s[1],i.shift()):(a=i[0].v,u=i[1].v,i.shift(),i.shift());var f=i[0],p=i[1],w=i[2];f=c.ffi.remapToJs(f),p=c.ffi.remapToJs(p),y.lineStyle(e.size,v(c.ffi.remapToJs(w)),1),y.drawRect(d(a),m(u),f,p),l.stage.addChild(y)}}),i.filled_rect=new c.builtin.func(function(e){for(var n=arguments.length,i=new Array(n>1?n-1:0),t=1;t<n;t++)i[t-1]=arguments[t];if("Rect"===c.abstr.typeName(i[0])){var r=i[0],o=i[1];y.lineStyle(0),y.beginFill(v(c.ffi.remapToJs(o)),1),y.drawRect(r.pos.x,r.pos.y,r.size.width,r.size.height),y.endFill(),l.stage.addChild(y)}else{var a,u,s=c.ffi.remapToJs(i[0]);Array.isArray(s)?(a=s[0],u=s[1],i.shift()):(a=i[0].v,u=i[1].v,i.shift(),i.shift());var f=i[0],p=i[1],w=i[2];f=c.ffi.remapToJs(f),p=c.ffi.remapToJs(p),w=v(c.ffi.remapToJs(w)),y.lineStyle(0),y.beginFill(w,1),y.drawRect(d(a),m(u),f,p),y.endFill(),l.stage.addChild(y)}}),i.clear=new c.builtin.func(function(e){y.clear(),e.basicText&&e.basicText.destroy()}),i.text=new c.builtin.func((0,e.genkwaFunc)(function(e,n){n=c.ffi.remapToJs(n);var i=t(e,6),r=i[0],o=i[1],a=i[2],u=i[3],s=i[4],p=i[5];u=v(c.ffi.remapToJs(u||n.color)),s=c.ffi.remapToJs(s||n.fontsize),p=c.ffi.remapToJs(p||n.fontname),a=w(c.ffi.remapToJs(a));var d=new f.TextStyle({fontFamily:p||"PingFang SC",fontSize:s,fill:u}),m=new f.Text(o.v,d);r.basicText=m,m.anchor.set(.5),a&&(m.x=a[0],m.y=a[1]),l.stage.addChild(m)},!0))},"Draw",[]),i.screen=c.misceval.callsimOrSuspend(c.misceval.buildClass(i,function(e,n){n.draw=c.misceval.callsimOrSuspend(i.draw),n.clear=new c.builtin.func(function(e){l.destroy()}),n.fill=new c.builtin.func(function(e,n){l.renderer.backgroundColor=v(n.v)})},"Screen",[])),i.clock=c.misceval.callsimOrSuspend(c.misceval.buildClass(i,function(e,n){n.__init__=new c.builtin.func(function(e){e.timerMap=new WeakMap}),n.schedule=new c.builtin.func(function(e,n,i){e.timerMap.set(n,setTimeout(function(){c.misceval.callsimAsync(null,n)},1e3*i.v))}),n.schedule_interval=new c.builtin.func(function(e,n,i){e.timerMap.set(n,setInterval(function(){c.misceval.callsimAsync(null,n)},1e3*i.v))}),n.schedule_unique=new c.builtin.func(function(e,n,i){e.timerMap.has(n)&&(clearTimeout(e.timerMap.get(n)),clearInterval(e.timerMap.get(n))),e.timerMap.set(n,setTimeout(function(){c.misceval.callsimAsync(null,n)},1e3*i.v))}),n.unschedule=new c.builtin.func(function(e,n,i){e.timerMap.has(n)&&(clearTimeout(e.timerMap.get(n)),clearInterval(e.timerMap.get(n)))})},"Clock",[])),i.music=c.misceval.callsimOrSuspend(c.misceval.buildClass(i,function(i,t){t.__init__=new c.builtin.func(function(e){e.audio=new Audio}),t.play=new c.builtin.func(function(e,n){e.audio.src=n.v||"./assets/".concat(n.v,".mp3"),e.audio.loop=!0,e.audio.play()}),t.play_once=new c.builtin.func(function(e,i){e.audio.src=i.v||s(n(),i.v),e.audio.loop=!1,e.audio.play()}),t.is_playing=new c.builtin.func(function(e,n){return!e.audio.paused}),t.volume=(0,e.defineProperty)(function(e){return e.audio.volume},function(e,n){e.audio.volume=n.v}),t.set_volume=new c.builtin.func(function(e,n){e.audio.volume=n.v}),t.get_volume=new c.builtin.func(function(e){return e.audio.volume}),t.stop=new c.builtin.func(function(e,n){e.audio.currentTime=0,e.audio.pause()})},"Music",[])),i.sound=c.misceval.callsimOrSuspend(c.misceval.buildClass(i,function(e,n){n.__init__=new c.builtin.func(function(e){e.soundMap={}}),n.play=new c.builtin.func(function(e,n){if(e.soundMap[n.v])e.soundMap[n.v].play(),e.soundMap[n.v].currentTime=0;else{var i=new Audio;i.src=n.v,i.loop=!1,i.play(),e.soundMap[n.v]=i}}),n.stop=new c.builtin.func(function(e,n){e.soundMap[n.v].pause()})},"Sound",[])),i.animate=c.misceval.buildClass(i,function(n,i){i.__init__=new c.builtin.func((0,e.genkwaFunc)(function(n,i){i=c.ffi.remapToJs(i);var r=t(n,6),o=r[0],a=r[1],u=r[2],s=r[3],f=r[4],p=r[5];u=u||i.tween||"linear",s=s||i.duration||1,f=f||i.on_finished;var v=d(i.x)||a.sprite.x,y=m(i.y)||a.sprite.y,T=w(p)||w(i.pos)||[v,y];return new c.misceval.promiseToSuspension(new Promise(function(n){(0,e.loadScript)("https://cdnjs.cloudflare.com/ajax/libs/tween.js/17.1.1/Tween.min.js","Charm").then(function(){l.ticker.add(function(){TWEEN.update()});var e={linear:TWEEN.Easing.linear,accelerate:TWEEN.Easing.Quartic.Out,decelerate:TWEEN.Easing.Quartic.In,accel_decel:TWEEN.Easing.Quartic.InOut,elastic_start:TWEEN.Easing.Elastic.In,elastic_end:TWEEN.Easing.Elastic.Out,elastic_start_end:TWEEN.Easing.Elastic.InOut,bounce_start:TWEEN.Easing.Bounce.In,bounce_end:TWEEN.Easing.Bounce.Out,bounce_start_end:TWEEN.Easing.Bounce.InOut};o.ani=new TWEEN.Tween({x:a.sprite.x,y:a.sprite.y}).to({x:T[0]||v,y:T[1]||y},1e3*s).easing(e[u]).onUpdate(function(e){a.sprite.y=e.y,a.sprite.x=e.x}).start(),o.ani.onComplete=function(){f&&c.misceval.callsim(f)},n()})}))},!0)),i.stop=new c.builtin.func(function(e){e.ani.pause()}),i.running=(0,e.defineGetter)(function(e){return c.ffi.remapToPy(e.ani.tweens[0].playing)})},"Animate",[]),l.ticker.add(function(e){c.globals.update&&c.misceval.callsimAsync(null,c.globals.update)});var T=["K_0","K_1","K_2","K_3","K_4","K_5","K_6","K_7","K_8","K_9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","SHIFT","CTRL","ALT","LEFT","UP","RIGHT","DOWN","PAGEUP","PAGEDOWN","END","HOME","ESCAPE","ENTER","SPACE","RETURN","BACKSPACE","INSERT","DELETE","F1","F2","F3","F4","F5","F6","F7","F8","F9","F10","F11","F12","F13","F14","F15"],b={};["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","Shift","Ctrl","Alt","ArrowLeft","ArrowUp","ArrowRight","ArrowDown","PageUp","PageDown","End","Home","Escape","Enter","","Return","Backspace","Insert","Delete","F1","F2","F3","F4","F5","F6","F7","F8","F9","F10","F11","F12","F13","F14","F15"].map(function(e,n){b[e]=T[n]});var _={};window.addEventListener("keydown",function(e){_[b[e.key]]=!0,c.globals.on_key_down&&c.misceval.callsimAsync(null,c.globals.on_key_down,c.ffi.remapToPy(b[e.key]))}),window.addEventListener("keyup",function(e){_[b[e.key]]=!1,c.globals.on_key_down&&c.misceval.callsimAsync(null,c.globals.on_key_down,c.ffi.remapToPy(b[e.key]))}),i.Keys=c.misceval.callsimOrSuspend(c.misceval.buildClass(i,function(n,i){T.map(function(n){i[n]=(0,e.defineGetter)(function(){return c.ffi.remapToPy(n)})})},"Keys",[])),i.keyboard=c.misceval.callsimOrSuspend(c.misceval.buildClass(i,function(n,i){T.map(function(n,t){i[n.toLowerCase()]=(0,e.defineGetter)(function(){return _[n]||!1})})},"keyboard",[]));var h={0:"LEFT",1:"MIDDLE",2:"RIGHT"},E={},g={};return l.view.addEventListener("mousedown",function(e){g[h[e.button]]=!0,c.globals.on_mouse_down&&c.misceval.callsimAsync(null,c.globals.on_mouse_down,c.ffi.remapToPy([d(e.offsetX),m(e.offsetY)]),c.ffi.remapToPy(h[e.button]))}),l.view.addEventListener("mouseup",function(e){g[h[e.button]]=!1,c.globals.on_mouse_up&&c.misceval.callsimAsync(null,c.globals.on_mouse_up,c.ffi.remapToPy([d(e.offsetX),m(e.offsetY)]),c.ffi.remapToPy(h[e.button]))}),document.oncontextmenu=function(){return!1},l.view.addEventListener("mousemove",function(e){E={x:d(e.offsetX),y:m(e.offsetY)},c.globals.on_mouse_move&&c.misceval.callsimAsync(null,c.globals.on_mouse_move,c.ffi.remapToPy([E.x,E.y])),c.ffi.remapToPy(h[e.button])}),l.view.addEventListener("wheel",function(e){e.deltaY>0?(g.WHEEL_DOWN=!0,g.WHEEL_UP=!1):e.deltaY<0?(g.WHEEL_UP=!0,g.WHEEL_DOWN=!1):(g.WHEEL_UP=!1,g.WHEEL_DOWN=!1)}),i.mouse=c.misceval.callsimOrSuspend(c.misceval.buildClass(i,function(n,i){i.x=(0,e.defineGetter)(function(){return E.x}),i.y=(0,e.defineGetter)(function(){return E.y}),i.pos=(0,e.defineGetter)(function(){return c.ffi.remapToPy([E.x,E.y])}),i.LEFT=(0,e.defineGetter)(function(){return g.LEFT||!1}),i.MIDDLE=(0,e.defineGetter)(function(){return g.MIDDLE||!1}),i.RIGHT=(0,e.defineGetter)(function(){return g.RIGHT||!1}),i.WHEEL_UP=(0,e.defineGetter)(function(){return g.WHEEL_UP||!1}),i.WHEEL_DOWN=(0,e.defineGetter)(function(){return g.WHEEL_DOWN||!1})},"Mouse",[])),i};
},{"./utils":"FOZT"}]},{},["D9kh"], null)
//# sourceMappingURL=/pygame-zero.js.map