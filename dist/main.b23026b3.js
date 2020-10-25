// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = ".Doraemon {\n    position: relative;\n    width: 340px;\n    height: 340px;\n    border-radius: 50%;\n    background: #fad200;\n}\n.Doraemon .head {\n\n    position: absolute;\n    top:20%;\n    left: 50%;\n    width: 240px;\n    height: 230px;\n    margin-left: -120px;\n    border: #000 solid 2px;\n    border-radius:  50% 50% 50% 50% / 50% 50% 50% 50%;\n    /*transform: rotateZ(-50deg);*/\n    background: #facb00;\n    z-index: 10;\n}\n\n.head .face {\n    position: absolute;\n    top:12%;\n    left: 50%;\n    width: 210px;\n    height: 200px;\n    margin-left: -105px;\n    border: #000 solid 2px;\n    border-radius:  50% ;\n    /*transform: rotateZ(-50deg);*/\n    background: #e2dfde;\n    z-index: 20;\n}\n\n.face .brow {\n    border: #58293a solid 2px;\n    position: absolute;\n    width: 25px;\n    height: 20px;\n    border-radius:  50% ;\n    z-index: 1;\n}\n.face .brow.left {\n    top: 15px;\n    left: 45px;\n    transform: rotateZ(-25deg);\n}\n.face .brow.left::before {\n    content: \"\";\n    position: absolute;\n    top: 4px;\n    left: -4px;\n    width: 28px;\n    height: 20px;\n    /*border: red solid 1px;*/\n    background:#e2dfde;\n}\n.face .brow.right {\n    top: 10px;\n    left: 127px;\n    transform: rotateZ(15deg);\n}\n.face .brow.right::before {\n    content: \"\";\n    position: absolute;\n    top: 4px;\n    left: -4px;\n    width: 28px;\n    height: 20px;\n    /*border: red solid 1px;*/\n    background:#e2dfde;\n}\n\n.face .eye {\n    position: absolute;\n    top: 48px;\n    left: 44px;\n    width: 40px;\n    height: 60px;\n    border: #763058 solid 2px;\n    border-radius: 45% ;\n    z-index: 1;\n}\n\n.face .eye.left {\n    top: 45px;\n    left: 40px;\n}\n\n.face .eye.right {\n    top: 45px;\n    left: 125px;\n}\n\n.face .eye.left>.eyelash1 {\n    position: absolute;\n    top: -3px;\n    left: 0;\n    width: 10px;\n    border: #763058 solid 1px;\n    transform: rotateZ(50deg);\n    background: #763058;\n}\n.face .eye.left>.eyelash2 {\n    position: absolute;\n    top: -8px;\n    left: 11px;\n    width: 13px;\n    border: #763058 solid 1px;\n    transform: rotateZ(87deg);\n    background: #763058;\n}\n.face .eye.left>.eyelash3 {\n    position: absolute;\n    top: -3px;\n    left: 26px;\n    width: 10px;\n    border: #763058 solid 1px;\n    transform: rotateZ(113deg);\n    background: #763058;\n}\n\n.face .eye.right>.eyelash1 {\n    position: absolute;\n    top: -3px;\n    left: 0;\n    width: 10px;\n    border: #763058 solid 1px;\n    transform: rotateZ(50deg);\n    background: #763058;\n}\n.face .eye.right>.eyelash2 {\n    position: absolute;\n    top: -8px;\n    left: 11px;\n    width: 13px;\n    border: #763058 solid 1px;\n    transform: rotateZ(87deg);\n    background: #763058;\n}\n.face .eye.right>.eyelash3 {\n    position: absolute;\n    top: -3px;\n    left: 26px;\n    width: 10px;\n    border: #763058 solid 1px;\n    transform: rotateZ(113deg);\n    background: #763058;\n}\n.face .eye.left>.tongkong {\n    position: absolute;\n    top: 6px;\n    left: 6px;\n    width: 28px;\n    height: 45px;\n    border-radius: 45% ;\n    background: #270c00;\n}\n.face .eye.right>.tongkong {\n    position: absolute;\n    top: 6px;\n    left: 3px;\n    width: 28px;\n    height: 45px;\n    border-radius: 45% ;\n    background: #270c00;\n}\n.tongkong::before {\n    content: \"\";\n    position: absolute;\n    top: 22px;\n    left: 0;\n    width: 0;\n    height: 0;\n    border: transparent solid 5px;\n    border-left: #e2dfde solid 5px;\n}\n.tongkong::after {\n    content: \"\";\n    position: absolute;\n    top: 16px;\n    left: 8px;\n    width: 9px;\n    height: 13px;\n    border-radius: 45% ;\n    background: #e2dfde;\n}\n\n.face .blush {\n    position: absolute;\n    width: 15px;\n    height: 15px;\n    /*border: red solid 1px;*/\n    border-radius: 45% ;\n    background: #e8c6cc;\n    opacity: .7;\n    z-index: 1;\n}\n\n.face .blush.left {\n    top: 110px;\n    left: 30px;\n}\n\n.face .blush.right {\n    top: 110px;\n    left: 160px;\n}\n\n.face .nose {\n    position: absolute;\n    top: 90px;\n    left: 88px;\n    width: 28px;\n    height: 18px;\n    background: #e6cad0;\n    border-radius: 50%;\n    border: #763058 solid 2px;\n    z-index: 1;\n}\n\n.face .nose::before {\n    content: \"\";\n    position: absolute;\n    top: -6px;\n    left: 2px;\n    width: 20px;\n    height: 10px;\n    border-top: #763058 solid 2px;\n    border-radius: 40%;\n}\n\n.face .mouth {\n    overflow: hidden;\n    position: absolute;\n    top: 6px;\n    left: 72px;\n    width: 60px;\n    height: 150px;\n    border: #763058 solid 2px;\n    border-radius: 30px/75px;\n    background: #e90000;\n}\n.face .smile {\n    position: absolute;\n    top: 102px;\n    left: 66px;\n    width: 70px;\n    height: 30px;\n    border: #763058 solid 2px;\n    border-radius: 50%;\n    background: #e2dfde;\n}\n.face .mouth::after {\n    content: \"\";\n    position: absolute;\n    top: 130px;\n    left: 13px;\n    width: 30px;\n    height: 30px;\n    border: #763058 solid 2px;\n    border-radius: 50%;\n}\n\n.face .shadow {\n    position: absolute;\n    top: 5px;\n    left: 60px;\n    width: 80px;\n    height: 110px;\n    background: #e2dfde;\n    border-radius:10%;\n}\n\n.Doraemon .chaplet {\n    position: absolute;\n    bottom: 40px;\n    left: 50%;\n    width: 150px;\n    height: 30px;\n    margin-left: -75px;\n    background: #fad200;\n    z-index: 30;\n    border-radius: 10px\n}\n\n.Doraemon .chaplet::before {\n    content: \"\";\n    width: 150px;\n    height: 15px;\n    position: absolute;\n    top: 0;\n    left: 0;\n    border: #272b51 solid 2px;\n    background: #369ced;\n    border-radius: 10px  10px 100px 100px /10px  10px 30px 30px;\n}\n\n.Doraemon .ear {\n    position: absolute;\n    width: 80px;\n    height: 120px;\n    background: #f40000;\n    border-radius: 50% / 50%;\n    border: #502b00 solid 2px;\n    z-index: 1;\n}\n.Doraemon .ear.left {\n    top: 45px;\n    left: 60px;\n    transform: rotateZ(-25deg);\n}\n.Doraemon .ear.right {\n    top: 35px;\n    left: 185px;\n    transform: rotateZ(24deg);\n}\n.Doraemon .bell {\n    overflow: hidden;\n    position: absolute;\n    bottom: 30px;\n    left: 50%;\n    margin-left: -18px;\n    width: 36px;\n    height: 36px;\n    border: #0c1500 solid 2px;\n    border-radius: 50%;\n    z-index: 40;\n    background: #f8bc00;\n}\n.bell  .bell-line {\n    position: absolute;\n    top: 8px;\n    left: 0;\n    width: 36px;\n    height: 3px;\n    border: #0c1500 solid 2px;\n}\n.bell  .bell-circle{\n    position: absolute;\n    top: 17px;\n    left: 12px;\n    width: 9px;\n    height: 9px;\n    border-radius: 50%;\n    background: #031500;\n}\n.bell  .bell-circle::before {\n    content: \"\";\n    position: absolute;\n    top: 8px;\n    left: 3px;\n    /*width: 2px;*/\n    height: 10px;\n    border: #031500 solid 1px;\n    background: #031500;\n}";
var _default = string;
exports.default = _default;
},{}],"epB2":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  length: 1,
  id: undefined,
  time: 100,
  ui: {
    DoraemonStyle: document.querySelector(".DoraemonStyle"),
    DoraemonHtml: document.querySelector(".DoraemonHtml")
  },
  evens: {
    ".stopBtn": 'stop',
    ".playBtn": 'play',
    ".slowBtn": 'slow',
    ".normalBtn": 'normal',
    ".quickBtn": 'quick'
  },
  init: function init() {
    player.ui.DoraemonHtml.innerText = _css.default.substr(0, player.length);
    player.ui.DoraemonStyle.textContent = _css.default.substr(0, player.length);
    player.bindEvents();
    player.play();
  },
  bindEvents: function bindEvents() {
    for (var key in player.evens) {
      if (player.evens.hasOwnProperty(key)) {
        var fun = player.evens[key];
        document.querySelector(key).addEventListener('click', player[fun]);
      }
    }
  },
  run: function run() {
    player.length++;

    if (player.length === _css.default.length) {
      window.clearInterval(player.id);
      return;
    }

    player.ui.DoraemonHtml.innerText = _css.default.substr(0, player.length);
    player.ui.DoraemonStyle.textContent = _css.default.substr(0, player.length);
    player.ui.DoraemonHtml.scrollTop = player.ui.DoraemonHtml.scrollHeight;
  },
  play: function play() {
    console.log(1, player === this, 'this.id:' + this.id, 'player.id:' + player.id);

    if (player.id === undefined) {
      player.id = window.setInterval(player.run, player.time);
      console.log(2, player === this, 'this.id:' + this.id, 'player.id:' + player.id);
    }
  },
  stop: function stop() {
    console.log(3, player === this, 'this.id:' + this.id, 'player.id:' + player.id);
    window.clearInterval(player.id);
    player.id = undefined;
    console.log(4, player === this, 'this.id:' + this.id, 'player.id:' + player.id);
  },
  slow: function slow() {
    player.stop();
    player.time = 1000;
    player.play();
  },
  normal: function normal() {
    player.stop();
    player.time = 100;
    player.play();
  },
  quick: function quick() {
    player.stop();
    player.time = 0;
    player.play();
  }
};
player.init();
},{"./css":"K4Xi"}]},{},["epB2"], null)
//# sourceMappingURL=main.b23026b3.js.map