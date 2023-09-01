export function loadScript(src: string, varName: string){
  if (window[varName]) {
    return Promise.resolve(window[varName]);
  }
  const res = new Promise(function(resolve, reject) {
    const el = document.createElement('script');
    el.onload = function() {
      resolve(varName && window[varName]);
    };

    el.onerror = function(e) {
      el.onload = null;
      el.onerror = null;
      document.body.removeChild(el);
      reject(e);
    };
    el.src = src;
    el.async = true;
    document.body.appendChild(el);
  });
  return res;
}

// 运行前销毁
export const resetPygameZero = function(ModuleCache) {
  if (ModuleCache.App) {
    // document.getElementById('stage').removeChild(ModuleCache.App.view);
    ModuleCache.App.destroy({
      removeView: true
    });
    window.PIXI.loader.destroy();
    ModuleCache.App = void 0;
    ModuleCache.timerMap.forEach(function(value, key) {
      window.clearInterval(value)
      window.clearTimeout(value)
    })
    ModuleCache.timerMap.clear();
    ModuleCache.soundMap = {};
    ModuleCache.music.pause();
    ModuleCache.music = null;
    ModuleCache.music = new Audio();
    Object.keys(ModuleCache.windowListener).map((key) => {
      const eventName = key.replace('Listener', '');
      window.removeEventListener(eventName, ModuleCache.windowListener[key])
    })
  }
}

// 17中标准颜色名对应的色值
export const ColorNameMap = {
  aqua: '#00FFFF',
  black: '#000000',
  blue: '#0000FF',
  fuchsia: '#FF00FF',
  gray: '#808080',
  green: '#008000',
  lime: '#00FF00',
  maroon: '#800000',
  navy: '#000080',
  olive: '#808000',
  orange: '#FFA500',
  purple: '#800080',
  red: '#FF0000',
  silver: '#C0C0C0',
  teal: '#008080',
  white: '#FFFFFF',
  yellow: '#FFFF00',
}

export const translateTools = function(app) {
  const halfWidth = Math.round(app.view.width/2);
  const halfHeight = Math.round(app.view.height/2);
  const tools = {
    // 笛卡尔坐标系转换
    transX(x, isReserve = false) {
      // if (isReserve) {
      //   return x - halfWidth
      // } else {
      //   return x + halfWidth
      // }
      return x;
    },
    transY(y, isReserve = false) {
      // if (isReserve) {
      //   if (y > halfHeight) {
      //     return (y - halfHeight) * -1;
      //   } else {
      //     return halfHeight - y;
      //   }
      // } else {
      //   if (y > 0) {
      //     return halfHeight - y;
      //   } else {
      //     return halfHeight + (y * -1);
      //   }
      // }
      return y;
    },
    transPos(pos: Point, isReserve = false): Point {
      if (!pos) {
        return pos
      }
      return [tools.transX(pos[0], isReserve), tools.transY(pos[1], isReserve)]
    },
    // 字符串色值转十六进制数字
    transColor(color) {
      if (Array.isArray(color)) {
        return window.PIXI.utils.rgb2hex(color);
      } else {
        if (color.match('#')) {
          return window.PIXI.utils.string2hex(color);
        } else {
          if (ColorNameMap[color]) {
            return window.PIXI.utils.string2hex(ColorNameMap[color]);
          } else {
            return 0xffffff;
          }
        }
      }
    }
  }
  return tools;
}

export interface Rect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export type Point = Array<number>;

export function hitTestRectanglePoint(r: Rect, p: Point): boolean {
  var rx = r.x - r.width / 2;
  var ry = r.y - r.width / 2;
  return p[0] > rx && p[0] < rx + r.width && p[1] > ry && p[1] < ry + r.height;
}

export function hitTestRectangleRectangle(r1: Rect, r2: Rect): boolean {
  var r1x = r1.x - r1.width / 2;
  var r1y = r1.y - r1.height / 2;
  var r2x = r2.x - r2.width / 2;
  var r2y = r2.y - r2.height / 2;

  if (r1x < r2x + r2.width &&
      r1x + r1.width > r2x &&
      r1y < r2y + r2.height &&
      r1y + r1.height > r2y) {
        return true;
  }

  // TODO: This doesn't catch cases where there is overlap, but none of
  // the corners are inside the other rectangle. This is unlikely but
  // possible. The right thing to do is line intersection of all pairs of edges
  return
    hitTestRectanglePoint(r1, [r2x, r2y]) ||
    hitTestRectanglePoint(r1, [r2x, r2y + r2.height]) ||
    hitTestRectanglePoint(r1, [r2x + r2.width, r2y + r2.height]) ||
    hitTestRectanglePoint(r1, [r2x + r2.width, r2y]) ||
    hitTestRectanglePoint(r2, [r1x, r1y]) ||
    hitTestRectanglePoint(r2, [r1x, r1y + r1.height]) ||
    hitTestRectanglePoint(r2, [r1x + r1.width, r1y + r1.height]) ||
    hitTestRectanglePoint(r2, [r1x + r1.width, r1y])
}

// 加载纹理
const JsonLoadedMap = {};
export function textureResources (resource, loader) {
  function loadResource(resource) {
    let list;
    if (Array.isArray(resource)) {
      list = [...resource];
      resource = list[0]
    }
    return new Promise((resolve, reject) => {
      if (loader.resources[resource] != undefined && loader.resources[resource].texture != undefined) {
        resolve(loader.resources[resource].texture);
      } else {
        for (var i = 0; i < 10; i++) {
          try {
            loader.add(list || resource).load(function() {
              const texture = loader.resources[resource].texture;
              resolve(texture)
            });
            return;
          } catch (e) {
            console.log(e);
          }
        }
        reject('Failed to load texture');
      }
    })
  }
  if (/\.json$/.test(resource)) {
    if (JsonLoadedMap[resource]) {
      return loadResource(JsonLoadedMap[resource])
    } else {
      return fetch(resource).then((res) => {
        return res.json()
      }).then((res) => {
        const prefix = resource.replace('index.json', '');
        const resourceList = res.map((item) => {
          return prefix + item
        })
        JsonLoadedMap[resource] = resourceList;
        return loadResource(resourceList)
      })
    }
  } else {
    return loadResource(resource)
  }
}
const Sk = window.Sk;
// getter函数
export const defineGetter = function(func) {
  return Sk.misceval.callsimOrSuspend(Sk.builtins.property, new Sk.builtin.func(func), new Sk.builtin.func(function() {}));
}
// 生成kwargs函数
export function genkwaFunc(func, isJsArgs) {
  const kwaFunc = function(kwa, ...args){
    if (!isJsArgs) {
      args = new Sk.builtins['tuple'](args); /*vararg*/
    }
    const kwargs = new Sk.builtin.dict(kwa);
    return func(args, kwargs)
  }
  kwaFunc['co_kwargs'] = true;
  return kwaFunc;
}
// 监听属性getter/setter
export const defineProperty = function(obj, property) {
  return Sk.misceval.callsimOrSuspend(Sk.builtins.property, new Sk.builtin.func(function(self) {
    if (typeof obj === 'function') {
      return obj(self)
    } else {
      return Sk.ffi.remapToPy(self[obj][property])
    }
  }), new Sk.builtin.func(function(self, val) {
    if (typeof property === 'function') {
      property(self, val)
    } else {
      self[obj][property] = val.v;
    }
  }))
}
  
export function handleCallbackError(err) {
  console.log(err);
}

export function setActorPos(actor, pos, dx, dy) {
  actor.sprite.x = pos[0] + dx;
  actor.sprite.y = pos[1] + dy ;
  actor['sprite']['pos'] = [pos[0] + dx, pos[1] + dy];
}
