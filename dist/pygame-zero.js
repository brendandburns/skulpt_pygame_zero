parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"UnXq":[function(require,module,exports) {
"use strict";var e=this&&this.__spreadArray||function(e,r){for(var t=0,n=r.length,o=e.length;t<n;t++,o++)e[o]=r[t];return e};function r(e,r){return window[r]?Promise.resolve(window[r]):new Promise(function(t,n){var o=document.createElement("script");o.onload=function(){t(r&&window.varName)},o.onerror=function(e){o.onload=null,o.onerror=null,document.body.removeChild(o),n(e)},o.src=e,o.async=!0,document.body.appendChild(o)})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.defineProperty=exports.genkwaFunc=exports.defineGetter=exports.textureRecources=exports.hitTestRectangle=exports.translateTools=exports.ColorNameMap=exports.resetPygameZero=exports.loadScript=void 0,exports.loadScript=r;var t=function(e){e.App&&(e.App.destroy({removeView:!0}),window.PIXI.loader.destroy(),e.App=void 0,e.timerMap.forEach(function(e,r){window.clearInterval(e),window.clearTimeout(e)}),e.timerMap.clear(),e.soundMap={},e.music.pause(),e.music=null,e.music=new Audio,Object.keys(e.windowListener).map(function(r){var t=r.replace("Listener","");window.removeEventListener(t,e.windowListener[r])}))};exports.resetPygameZero=t,exports.ColorNameMap={aqua:"#00FFFF",black:"#000000",blue:"#0000FF",fuchsia:"#FF00FF",gray:"#808080",green:"#008000",lime:"#00FF00",maroon:"#800000",navy:"#000080",olive:"#808000",orange:"#FFA500",purple:"#800080",red:"#FF0000",silver:"#C0C0C0",teal:"#008080",white:"#FFFFFF",yellow:"#FFFF00"};var n=function(e){Math.round(e.view.width/2),Math.round(e.view.height/2);var r={transX:function(e,r){return void 0===r&&(r=!1),e},transY:function(e,r){return void 0===r&&(r=!1),e},transPos:function(e,t){return void 0===t&&(t=!1),e?[r.transX(e[0],t),r.transY(e[1],t)]:e},transColor:function(e){return Array.isArray(e)?window.PIXI.utils.rgb2hex(e):e.match("#")?window.PIXI.utils.string2hex(e):exports.ColorNameMap[e]?window.PIXI.utils.string2hex(exports.ColorNameMap[e]):16777215}};return r};function o(e,r){Array.isArray(r)&&(r.x=r[0],r.y=r[1],r.width=0,r.height=0),e.centerX=e.x+e.width/2,e.centerY=e.y+e.height/2,r.centerX=r.x+r.width/2,r.centerY=r.y+r.height/2,e.halfWidth=e.width/2,e.halfHeight=e.height/2,r.halfWidth=r.width/2,r.halfHeight=r.height/2;var t=e.centerX-r.centerX,n=e.centerY-r.centerY,o=e.halfWidth+r.halfWidth,i=e.halfHeight+r.halfHeight;return Math.abs(t)<o&&Math.abs(n)<i}exports.translateTools=n,exports.hitTestRectangle=o;var i={};function a(r){function t(r){var t;return Array.isArray(r)&&(t=e([],r),r=t[0]),new Promise(function(e,n){window.PIXI.utils.TextureCache[r]?e(window.PIXI.utils.TextureCache[r]):window.PIXI.loader.add(t||r).load(function(){var t=window.PIXI.loader.resources[r].texture;e(t)})})}return/\.json$/.test(r)?i[r]?t(i[r]):fetch(r).then(function(e){return e.json()}).then(function(e){var n=r.replace("index.json",""),o=e.map(function(e){return n+e});return i[r]=o,t(o)}):t(r)}exports.textureRecources=a;var u=window.Sk,s=function(e){return u.misceval.callsimOrSuspend(u.builtins.property,new u.builtin.func(e),new u.builtin.func(function(){}))};function c(e,r){var t=function(t){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];r||(n=new u.builtins.tuple(n));var i=new u.builtin.dict(t);return e(n,i)};return t.co_kwargs=!0,t}exports.defineGetter=s,exports.genkwaFunc=c;var l=function(e,r){return u.misceval.callsimOrSuspend(u.builtins.property,new u.builtin.func(function(t){return"function"==typeof e?e(t):u.ffi.remapToPy(t[e][r])}),new u.builtin.func(function(t,n){"function"==typeof r?r(t,n):t[e][r]=n.v}))};exports.defineProperty=l;
},{}],"S9nX":[function(require,module,exports) {
"use strict";var e=this&&this.__makeTemplateObject||function(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e};Object.defineProperty(exports,"__esModule",{value:!0});var n=window.Sk,i=window.PIXI,t=require("./utils"),o=i.Application,r=i.loader,a=i.loader.resources,u=i.Sprite,l=i.Graphics,c=i.Text,f=i.TextStyle,d=window.PyGameZero._moduleCache,p=!1;window.PyGameZero._handleReset=function(){p=!0,t.resetPygameZero(d)},p||t.resetPygameZero(d),r.pre(function(e,n){e.crossOrigin="anonymous",e.loadType=window.PIXI.loaders.Resource.LOAD_TYPE.XHR,n()});var m=500,w=400;window.PyGameZero.container&&(m=window.PyGameZero.container.offsetWidth,w=window.PyGameZero.container.offsetHeight),d.App=new o({backgroundColor:0,width:m,height:w});var v=d.App;window.PyGameZero._onRunning(v),window.PyGameZero.container.appendChild(v.view);var y,T=t.translateTools(v),_=T.transX,h=T.transY,b=T.transPos,g=T.transColor;window.$builtinmodule=function(){var o={__name__:new n.builtin.str("pygame-zero")};o.WIDTH=n.ffi.remapToPy(v.view.width),o.HEIGHT=n.ffi.remapToPy(v.view.height),o.Actor=n.misceval.buildClass(o,function(e,i){i.__init__=new n.builtin.func(function(e,i,o){return new n.misceval.promiseToSuspension(new Promise(function(s){i=n.ffi.remapToJs(i),o=n.ffi.remapToJs(o)||[],t.textureRecources(i||"./assets/"+i.v+"/index.json").then(function(n){var t=new u(n);t.zOrder=1,e.sprite=t,e.sprite.anchor.set(.5),e.sprite.x=_(o[0]||0),e.sprite.y=h(o[1]||0),e.actorName=i,s(void 0)})}))}),i.x=t.defineProperty(function(e){return n.ffi.remapToPy(_(e.sprite.x,!0))},function(e,n){e.sprite.x=_(n.v)}),i.y=t.defineProperty(function(e){return n.ffi.remapToPy(h(e.sprite.y,!0))},function(e,n){e.sprite.y=h(n.v)}),i.width=t.defineProperty("sprite","width"),i.height=t.defineProperty("sprite","height"),i.pos=t.defineProperty(function(e){return n.ffi.remapToPy(b([e.sprite.x,e.sprite.y],!0))},function(e,i){var t=b(n.ffi.remapToJs(i));e.sprite.x=t[0],e.sprite.y=t[1],e.sprite.pos=[t[0],t[1]]}),i.angle=t.defineProperty("sprite","angle"),i.show=t.defineProperty("sprite","visible"),i.image=t.defineProperty(function(e){return n.ffi.remapToPy(e.sprite.texture)},function(e,i){return new n.misceval.promiseToSuspension(new Promise(function(n){t.textureRecources(i.v).then(function(i){e.sprite.texture=i,n(void 0)})}))}),i.frame=t.defineProperty(function(e){return n.ffi.remapToPy(e.sprite.texture)},function(e,i){return new n.misceval.promiseToSuspension(new Promise(function(n){t.textureRecources(e.actorName[i.v-1]||"./assets/"+e.actorName+"/造型"+i.v+".png").then(function(i){e.sprite.texture=i,n(void 0)})}))}),i.distance_to=new n.builtin.func(function(e,i){return i=b(n.ffi.remapToJs(i)),n.ffi.remapToPy(Math.round(Math.abs(Math.sqrt(Math.pow(e.sprite.x-i[0],2)+Math.pow(e.sprite.y-i[1],2)))))}),i.angle_to=new n.builtin.func(function(e,i){i=b(n.ffi.remapToJs(i));var t=e.sprite.y,o=i[0],s=e.sprite.y,r=i[1],a=Math.abs(t-o),u=Math.abs(s-r),l=Math.sqrt(a*a+u*u);return n.ffi.remapToPy(Math.round(Math.asin(u/l)/Math.PI*180))}),i.collide_point=new n.builtin.func(function(e,i){return t.hitTestRectangle(e.sprite,b(n.ffi.remapToJs(i)))}),i.collide_actor=new n.builtin.func(function(e,n){return t.hitTestRectangle(e.sprite,n.sprite)}),i.colliderect=new n.builtin.func(function(e,n){return t.hitTestRectangle(e.sprite,n.sprite)}),i.remove=new n.builtin.func(function(e){v.stage.removeChild(e.sprite)}),i.draw=new n.builtin.func(function(e){v.stage.addChild(e.sprite)})},"Actor"),o.Rect=n.misceval.buildClass(o,function(e,i){i.__init__=new n.builtin.func(function(e,i,t){i=b(n.ffi.remapToJs(i)),t=n.ffi.remapToJs(t),e.pos={x:i[0],y:i[1]},e.size={width:t[0],height:t[1]}}),i.pos=t.defineGetter(function(e){return n.ffi.remapToPy(b(e.pos,!0))}),i.size=t.defineGetter(function(e){return n.ffi.remapToPy(e.size)})},"Rect",[]);var r=new l;o.draw=n.misceval.buildClass(o,function(e,o){o.__init__=new n.builtin.func(function(e){e.size=5}),o.size=new n.builtin.func(function(e,n){e.size=n.v}),o.line=new n.builtin.func(function(e,i,t,o){o=g(n.ffi.remapToJs(o)),i=n.ffi.remapToJs(i),t=n.ffi.remapToJs(t),r.lineStyle(e.size||2,o,1),r.moveTo(i[0],i[1]),r.lineTo(t[0],t[1]),v.stage.addChild(r)}),o.circle=new n.builtin.func(function(e,i,t,o){o=g(n.ffi.remapToJs(o)),i=b(n.ffi.remapToJs(i)),r.lineStyle(e.size,o,1),r.drawCircle(i[0],i[1],t.v),v.stage.addChild(r)}),o.filled_circle=new n.builtin.func(function(e,i,t,o){o=g(n.ffi.remapToJs(o)),i=b(n.ffi.remapToJs(i)),r.lineStyle(0),r.beginFill(o,1),r.drawCircle(i[0],i[1],t.v),r.endFill(),v.stage.addChild(r)}),o.rect=new n.builtin.func(function(e){for(var i=[],t=1;t<arguments.length;t++)i[t-1]=arguments[t];if("Rect"===n.abstr.typeName(i[0])){var o=i[0],s=i[1];r.lineStyle(e.size,g(n.ffi.remapToJs(s)),1),r.drawRect(o.pos.x,o.pos.y,o.size.width,o.size.height),v.stage.addChild(r)}else{var a=void 0,u=void 0,l=n.ffi.remapToJs(i[0]);Array.isArray(l)?(a=l[0],u=l[1],i.shift()):(a=i[0].v,u=i[1].v,i.shift(),i.shift());var c=i[0],f=i[1];s=i[2];c=n.ffi.remapToJs(c),f=n.ffi.remapToJs(f),r.lineStyle(e.size,g(n.ffi.remapToJs(s)),1),r.drawRect(_(a),h(u),c,f),v.stage.addChild(r)}}),o.filled_rect=new n.builtin.func(function(e){for(var i=[],t=1;t<arguments.length;t++)i[t-1]=arguments[t];if("Rect"===n.abstr.typeName(i[0])){var o=i[0],s=i[1];r.lineStyle(0),r.beginFill(g(n.ffi.remapToJs(s)),1),r.drawRect(o.pos.x,o.pos.y,o.size.width,o.size.height),r.endFill(),v.stage.addChild(r)}else{var a=void 0,u=void 0,l=n.ffi.remapToJs(i[0]);Array.isArray(l)?(a=l[0],u=l[1],i.shift()):(a=i[0].v,u=i[1].v,i.shift(),i.shift());var c=i[0],f=i[1];s=i[2];c=n.ffi.remapToJs(c),f=n.ffi.remapToJs(f),s=g(n.ffi.remapToJs(s)),r.lineStyle(0),r.beginFill(s,1),r.drawRect(_(a),h(u),c,f),r.endFill(),v.stage.addChild(r)}}),o.clear=new n.builtin.func(function(e){r.clear(),e.basicText&&e.basicText.destroy()}),o.text=new n.builtin.func(t.genkwaFunc(function(e,t){t=n.ffi.remapToJs(t);var o=e[0],s=e[1],r=e[2],a=e[3],u=e[4],l=e[5];a=g(n.ffi.remapToJs(a||t.color)),u=n.ffi.remapToJs(u||t.fontsize),l=n.ffi.remapToJs(l||t.fontname),r=b(n.ffi.remapToJs(r));var c=new i.TextStyle({fontFamily:l||"PingFang SC",fontSize:u,fill:a}),f=new i.Text(s.v,c);o.basicText=f,f.anchor.set(.5),r&&(f.x=r[0],f.y=r[1]),v.stage.addChild(f)},!0))},"Draw",[]),o.screen=n.misceval.callsimOrSuspend(n.misceval.buildClass(o,function(e,i){i.draw=n.misceval.callsimOrSuspend(o.draw),i.clear=new n.builtin.func(function(e){for(;v.stage.children.length>0;){var n=v.stage.getChildAt(0);v.stage.removeChild(n)}}),i.fill=new n.builtin.func(function(e,i){r.clear(),r.beginFill(g(n.ffi.remapToJs(i)),1),r.drawRect(0,0,v.view.width,v.view.height),r.endFill(),v.stage.addChild(r)})},"Screen",[])),o.clock=n.misceval.callsimOrSuspend(n.misceval.buildClass(o,function(e,i){i.__init__=new n.builtin.func(function(e){}),i.schedule=new n.builtin.func(function(e,i,t){d.timerMap.set(i,setTimeout(function(){n.misceval.callsimAsync(null,i)},1e3*t.v))}),i.schedule_interval=new n.builtin.func(function(e,i,t){d.timerMap.set(i,setInterval(function(){n.misceval.callsimAsync(null,i)},1e3*t.v))}),i.schedule_unique=new n.builtin.func(function(e,i,t){e.timerMap.has(i)&&(clearTimeout(d.timerMap.get(i)),clearInterval(d.timerMap.get(i))),d.timerMap.set(i,setTimeout(function(){n.misceval.callsimAsync(null,i)},1e3*t.v))}),i.unschedule=new n.builtin.func(function(e,n,i){d.timerMap.has(n)&&(clearTimeout(d.timerMap.get(n)),clearInterval(d.timerMap.get(n)))})},"Clock",[])),o.music=n.misceval.callsimOrSuspend(n.misceval.buildClass(o,function(i,o){o.__init__=new n.builtin.func(function(e){}),o.play=new n.builtin.func(function(e,n){d.music.src=n.v||"./assets/"+n.v+".mp3",d.music.loop=!0,d.music.play()}),o.play_once=new n.builtin.func(function(n,i){d.music.src=i.v||s(y||(y=e(["./assets/",".mp3"],["./assets/",".mp3"])),i.v),d.music.loop=!1,d.music.play()}),o.is_playing=new n.builtin.func(function(e,n){return!d.music.paused}),o.volume=t.defineProperty(function(e){return d.music.volume},function(e,n){d.music.volume=n.v}),o.set_volume=new n.builtin.func(function(e,n){d.music.volume=n.v}),o.get_volume=new n.builtin.func(function(e){return d.music.volume}),o.stop=new n.builtin.func(function(e,n){d.music.currentTime=0,d.music.pause()})},"Music",[])),o.sound=n.misceval.callsimOrSuspend(n.misceval.buildClass(o,function(e,i){i.__init__=new n.builtin.func(function(e){}),i.play=new n.builtin.func(function(e,n){if(d.soundMap[n.v])d.soundMap[n.v].play(),d.soundMap[n.v].currentTime=0;else{var i=new Audio;i.src=n.v,i.loop=!1,i.play(),d.soundMap[n.v]=i}}),i.stop=new n.builtin.func(function(e,n){d.soundMap[n.v].pause()})},"Sound",[])),o.animate=n.misceval.buildClass(o,function(e,i){i.__init__=new n.builtin.func(t.genkwaFunc(function(e,i){i=n.ffi.remapToJs(i);var o=e[0],s=e[1],r=e[2],a=e[3],u=e[4],l=e[5];r=r||i.tween||"linear",a=a||i.duration||1,u=u||i.on_finished;var c=_(i.x)||s.sprite.x,f=h(i.y)||s.sprite.y,d=b(l)||b(i.pos)||[c,f];return new n.misceval.promiseToSuspension(new Promise(function(e){t.loadScript("https://cdnjs.cloudflare.com/ajax/libs/tween.js/17.1.1/Tween.min.js","Charm").then(function(){v.ticker.add(function(){window.TWEEN.update()});var i={linear:window.TWEEN.Easing.linear,accelerate:window.TWEEN.Easing.Quartic.Out,decelerate:window.TWEEN.Easing.Quartic.In,accel_decel:window.TWEEN.Easing.Quartic.InOut,elastic_start:window.TWEEN.Easing.Elastic.In,elastic_end:window.TWEEN.Easing.Elastic.Out,elastic_start_end:window.TWEEN.Easing.Elastic.InOut,bounce_start:window.TWEEN.Easing.Bounce.In,bounce_end:window.TWEEN.Easing.Bounce.Out,bounce_start_end:window.TWEEN.Easing.Bounce.InOut};o.ani=new window.TWEEN.Tween({x:s.sprite.x,y:s.sprite.y}).to({x:d[0]||c,y:d[1]||f},1e3*a).easing(i[r]).onUpdate(function(e){s.sprite.y=e.y,s.sprite.x=e.x}).start(),o.ani.onComplete=function(){u&&n.misceval.callsim(u)},e(void 0)})}))},!0)),i.stop=new n.builtin.func(function(e){e.ani.pause()}),i.running=t.defineGetter(function(e){return n.ffi.remapToPy(e.ani.tweens[0].playing)})},"Animate",[]),v.ticker.add(function(e){n.globals.draw&&n.misceval.callsimAsync(null,n.globals.draw),n.globals.update&&n.misceval.callsimAsync(null,n.globals.update)});var a=["K_0","K_1","K_2","K_3","K_4","K_5","K_6","K_7","K_8","K_9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","SHIFT","CTRL","ALT","LEFT","UP","RIGHT","DOWN","PAGEUP","PAGEDOWN","END","HOME","ESCAPE","ENTER","SPACE","RETURN","BACKSPACE","INSERT","DELETE","F1","F2","F3","F4","F5","F6","F7","F8","F9","F10","F11","F12","F13","F14","F15"],c={};["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","Shift","Ctrl","Alt","ArrowLeft","ArrowUp","ArrowRight","ArrowDown","PageUp","PageDown","End","Home","Escape","Enter","","Return","Backspace","Insert","Delete","F1","F2","F3","F4","F5","F6","F7","F8","F9","F10","F11","F12","F13","F14","F15"].map(function(e,n){c[e]=a[n]});var f={};d.windowListener.keydownListener=function(e){f[c[e.key]]=!0,n.globals.on_key_down&&n.misceval.callsimAsync(null,n.globals.on_key_down,n.ffi.remapToPy(c[e.key]))},window.addEventListener("keydown",d.windowListener.keydownListener),d.windowListener.keyupListener=function(e){f[c[e.key]]=!1,n.globals.on_key_down&&n.misceval.callsimAsync(null,n.globals.on_key_down,n.ffi.remapToPy(c[e.key]))},window.addEventListener("keyup",d.windowListener.keyupListener),o.Keys=n.misceval.callsimOrSuspend(n.misceval.buildClass(o,function(e,i){a.map(function(e){i[e]=t.defineGetter(function(){return n.ffi.remapToPy(e)})})},"Keys",[])),o.keyboard=n.misceval.callsimOrSuspend(n.misceval.buildClass(o,function(e,n){a.map(function(e,i){n[e.toLowerCase()]=t.defineGetter(function(){return f[e]||!1})})},"keyboard",[]));var p={0:"LEFT",1:"MIDDLE",2:"RIGHT"},m={x:0,y:0},w=[],T=function(e,n){n&&!~e.indexOf(n)&&e.push(n)},E=function(e,n){var i=e.indexOf(n);~i&&e.splice(i,1)};return v.view.addEventListener("mousedown",function(e){var i=(p[e.button]||"").toLowerCase();T(w,i),n.globals.on_mouse_down&&n.misceval.callsimAsync(null,n.globals.on_mouse_down,n.ffi.remapToPy([_(e.offsetX,!0),h(e.offsetY,!0)]),n.ffi.remapToPy(i))}),v.view.addEventListener("mouseup",function(e){var i=(p[e.button]||"").toLowerCase();E(w,i),n.globals.on_mouse_up&&n.misceval.callsimAsync(null,n.globals.on_mouse_up,n.ffi.remapToPy([_(e.offsetX,!0),h(e.offsetY,!0)]),n.ffi.remapToPy(p[e.button]))}),v.view.addEventListener("mousemove",function(e){m={x:_(e.offsetX,!0),y:h(e.offsetY,!0)},n.globals.on_mouse_move&&n.misceval.callsimAsync(null,n.globals.on_mouse_move,n.ffi.remapToPy([m.x,m.y]),n.ffi.remapToPy([m.x,m.y]),n.ffi.remapToPy(w))}),v.view.addEventListener("wheel",function(e){e.deltaY>0?(T(w,"wheel_down"),E(w,"wheel_up")):e.deltaY<0?(T(w,"wheel_up"),E(w,"wheel_down")):(E(w,"wheel_up"),E(w,"wheel_down"))}),o.mouse=n.misceval.callsimOrSuspend(n.misceval.buildClass(o,function(e,i){i.x=t.defineGetter(function(){return m.x}),i.y=t.defineGetter(function(){return m.y}),i.pos=t.defineGetter(function(){return n.ffi.remapToPy([m.x,m.y])}),i.LEFT=n.ffi.remapToPy("left"),i.MIDDLE=n.ffi.remapToPy("middle"),i.RIGHT=n.ffi.remapToPy("right"),i.WHEEL_UP=n.ffi.remapToPy("wheel_up"),i.WHEEL_DOWN=n.ffi.remapToPy("wheel_down")},"Mouse",[])),o.go=new n.builtin.func(function(e){}),o};
},{"./utils":"UnXq"}]},{},["S9nX"], null)
//# sourceMappingURL=/pygame-zero.js.map