/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./exemple/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/material-color-picker.js":
/*!***************************************!*\
  !*** ./dist/material-color-picker.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? undefined : _typeof(exports)) === 'object' && ( false ? undefined : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(undefined, function () {
  return (/******/function (modules) {
      // webpackBootstrap
      /******/ // The module cache
      /******/var installedModules = {};
      /******/
      /******/ // The require function
      /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
          /******/return installedModules[moduleId].exports;
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
          /******/i: moduleId,
          /******/l: false,
          /******/exports: {}
          /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
      }
      /******/
      /******/
      /******/ // expose the modules object (__webpack_modules__)
      /******/__webpack_require__.m = modules;
      /******/
      /******/ // expose the module cache
      /******/__webpack_require__.c = installedModules;
      /******/
      /******/ // define getter function for harmony exports
      /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
          /******/Object.defineProperty(exports, name, { enumerable: true, get: getter });
          /******/
        }
        /******/
      };
      /******/
      /******/ // define __esModule on exports
      /******/__webpack_require__.r = function (exports) {
        /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
          /******/
        }
        /******/Object.defineProperty(exports, '__esModule', { value: true });
        /******/
      };
      /******/
      /******/ // create a fake namespace object
      /******/ // mode & 1: value is a module id, require it
      /******/ // mode & 2: merge all properties of value into the ns
      /******/ // mode & 4: return value when already ns object
      /******/ // mode & 8|1: behave like require
      /******/__webpack_require__.t = function (value, mode) {
        /******/if (mode & 1) value = __webpack_require__(value);
        /******/if (mode & 8) return value;
        /******/if (mode & 4 && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value && value.__esModule) return value;
        /******/var ns = Object.create(null);
        /******/__webpack_require__.r(ns);
        /******/Object.defineProperty(ns, 'default', { enumerable: true, value: value });
        /******/if (mode & 2 && typeof value != 'string') for (var key in value) {
          __webpack_require__.d(ns, key, function (key) {
            return value[key];
          }.bind(null, key));
        } /******/return ns;
        /******/
      };
      /******/
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
          return module['default'];
        } :
        /******/function getModuleExports() {
          return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
      };
      /******/
      /******/ // Object.prototype.hasOwnProperty.call
      /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/
      /******/ // __webpack_public_path__
      /******/__webpack_require__.p = "";
      /******/
      /******/
      /******/ // Load entry module and return exports
      /******/return __webpack_require__(__webpack_require__.s = "./src/index.js");
      /******/
    }(
    /************************************************************************/
    /******/{

      /***/"./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js?!./src/Picker/index.scss":
      /*!************************************************************************************************************!*\
        !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js??ref--5-2!./src/Picker/index.scss ***!
        \************************************************************************************************************/
      /*! no static exports found */
      /***/function node_modulesCssLoaderIndexJsNode_modulesSassLoaderLibLoaderJsSrcPickerIndexScss(module, exports, __webpack_require__) {

        exports = module.exports = __webpack_require__( /*! ../../node_modules/css-loader/lib/css-base.js */"./node_modules/css-loader/lib/css-base.js")(false);
        // imports


        // module
        exports.push([module.i, ".grid-wrapper {\n  position: absolute;\n  display: inline-flex;\n  flex-direction: column;\n  z-index: 100;\n  background-color: #FFFFFF; }\n\n.grid {\n  display: inline-flex; }\n\n.line {\n  -webkit-animation: fadeIn 2s ease;\n  animation: fadeIn 2s ease; }\n\n@-webkit-keyframes fadeIn {\n  0% { }\n  100% {\n    opacity: 1; } }\n\n@keyframes fadeIn {\n  0% { }\n  100% {\n    opacity: 1; } }\n\n.grow {\n  transition: all .2s ease-in-out; }\n\n.grow:hover {\n  transform: scale(1.8); }\n\n.square {\n  width: 20px;\n  height: 20px;\n  cursor: pointer; }\n\n.mdc-elevation--z0 {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12); }\n\n.mdc-elevation--z1 {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); }\n\n.mdc-elevation--z2 {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\n\n.mdc-elevation--z3 {\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12); }\n\n.mdc-elevation--z4 {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }\n\n.mdc-elevation--z5 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12); }\n\n.mdc-elevation--z6 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12); }\n\n.mdc-elevation--z7 {\n  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\n\n.mdc-elevation--z8 {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.mdc-elevation--z9 {\n  box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12); }\n\n.mdc-elevation--z10 {\n  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12); }\n\n.mdc-elevation--z11 {\n  box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12); }\n\n.mdc-elevation--z12 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12); }\n\n.mdc-elevation--z13 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12); }\n\n.mdc-elevation--z14 {\n  box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12); }\n\n.mdc-elevation--z15 {\n  box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12); }\n\n.mdc-elevation--z16 {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n\n.mdc-elevation--z17 {\n  box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12); }\n\n.mdc-elevation--z18 {\n  box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12); }\n\n.mdc-elevation--z19 {\n  box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12); }\n\n.mdc-elevation--z20 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12); }\n\n.mdc-elevation--z21 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12); }\n\n.mdc-elevation--z22 {\n  box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12); }\n\n.mdc-elevation--z23 {\n  box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12); }\n\n.mdc-elevation--z24 {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12); }\n\n.mdc-elevation-transition {\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  will-change: box-shadow; }\n\n.round-btn {\n  width: 40px;\n  height: 40px;\n  margin: 15px;\n  cursor: pointer;\n  padding: 10px;\n  border-radius: 50%;\n  overflow: hidden;\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  will-change: transform, opacity; }\n  .round-btn::before, .round-btn::after {\n    position: absolute;\n    border-radius: 50%;\n    opacity: 0;\n    pointer-events: none;\n    content: \"\"; }\n  .round-btn::before {\n    transition: opacity 15ms linear;\n    z-index: 1; }\n  .round-btn.mdc-ripple-upgraded::before {\n    transform: scale(var(--mdc-ripple-fg-scale, 1)); }\n  .round-btn.mdc-ripple-upgraded::after {\n    top: 0;\n    /* @noflip */\n    left: 0;\n    transform: scale(0);\n    transform-origin: center center; }\n  .round-btn.mdc-ripple-upgraded--unbounded::after {\n    top: var(--mdc-ripple-top, 0);\n    /* @noflip */\n    left: var(--mdc-ripple-left, 0); }\n  .round-btn.mdc-ripple-upgraded--foreground-activation::after {\n    animation: 225ms mdc-ripple-fg-radius-in forwards, 75ms mdc-ripple-fg-opacity-in forwards; }\n  .round-btn.mdc-ripple-upgraded--foreground-deactivation::after {\n    animation: 150ms mdc-ripple-fg-opacity-out;\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1)); }\n\n.color-container {\n  display: none; }\n\n.color-container-open {\n  display: block; }\n", ""]);

        // exports


        /***/
      },

      /***/"./node_modules/css-loader/lib/css-base.js":
      /*!*************************************************!*\
        !*** ./node_modules/css-loader/lib/css-base.js ***!
        \*************************************************/
      /*! no static exports found */
      /***/function node_modulesCssLoaderLibCssBaseJs(module, exports) {

        /*
        	MIT License http://www.opensource.org/licenses/mit-license.php
        	Author Tobias Koppers @sokra
        */
        // css base code, injected by the css-loader
        module.exports = function (useSourceMap) {
          var list = [];

          // return the list of modules as css string
          list.toString = function toString() {
            return this.map(function (item) {
              var content = cssWithMappingToString(item, useSourceMap);
              if (item[2]) {
                return "@media " + item[2] + "{" + content + "}";
              } else {
                return content;
              }
            }).join("");
          };

          // import a list of modules into the list
          list.i = function (modules, mediaQuery) {
            if (typeof modules === "string") modules = [[null, modules, ""]];
            var alreadyImportedModules = {};
            for (var i = 0; i < this.length; i++) {
              var id = this[i][0];
              if (typeof id === "number") alreadyImportedModules[id] = true;
            }
            for (i = 0; i < modules.length; i++) {
              var item = modules[i];
              // skip already imported module
              // this implementation is not 100% perfect for weird media query combinations
              //  when a module is imported multiple times with different media queries.
              //  I hope this will never occur (Hey this way we have smaller bundles)
              if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
                if (mediaQuery && !item[2]) {
                  item[2] = mediaQuery;
                } else if (mediaQuery) {
                  item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
                }
                list.push(item);
              }
            }
          };
          return list;
        };

        function cssWithMappingToString(item, useSourceMap) {
          var content = item[1] || '';
          var cssMapping = item[3];
          if (!cssMapping) {
            return content;
          }

          if (useSourceMap && typeof btoa === 'function') {
            var sourceMapping = toComment(cssMapping);
            var sourceURLs = cssMapping.sources.map(function (source) {
              return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
            });

            return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
          }

          return [content].join('\n');
        }

        // Adapted from convert-source-map (MIT)
        function toComment(sourceMap) {
          // eslint-disable-next-line no-undef
          var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
          var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

          return '/*# ' + data + ' */';
        }

        /***/
      },

      /***/"./node_modules/immupdate/es/immupdate.js":
      /*!************************************************!*\
        !*** ./node_modules/immupdate/es/immupdate.js ***!
        \************************************************/
      /*! exports provided: update, DELETE, deepUpdate */
      /***/function node_modulesImmupdateEsImmupdateJs(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "update", function () {
          return update;
        });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "DELETE", function () {
          return DELETE;
        });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "deepUpdate", function () {
          return deepUpdate;
        });
        //--------------------------------------
        //  Shallow update
        //--------------------------------------
        /** Performs a shallow update of an object using a partial object of the same shape. A new object is returned. */
        function update(host, spec) {
          var result = clone(host);
          for (var key in spec) {
            var specValue = spec[key];
            if (specValue === DELETE) {
              delete result[key];
            } else {
              result[key] = specValue;
            }
          }
          return result;
        }
        // We lie about the public type so that only a property that is optional or that can be assigned to undefined can be DELETE'd
        /** Marker used to delete a key */
        var DELETE = {};
        var _Updater = /** @class */function () {
          function _Updater(data) {
            this.data = data;
          }
          _Updater.prototype.at = function (keyOrIndex) {
            return new _Updater({ type: 'at', parent: this, field: keyOrIndex });
          };
          _Updater.prototype.set = function (value) {
            var _this = this;
            var doSet = function doSet(target) {
              var result = _this.cloneForUpdate(target);
              if (result.name === 'aborted') return target;
              var clonedTarget = result.clonedTarget,
                  leafHost = result.leafHost,
                  field = result.field;
              value === DELETE ? delete leafHost[field] : leafHost[field] = value;
              return clonedTarget;
            };
            var boundTarget = this.findBoundTarget();
            return boundTarget ? doSet(boundTarget) : doSet;
          };
          _Updater.prototype.modify = function (modifier) {
            var _this = this;
            var doModify = function doModify(target) {
              var result = _this.cloneForUpdate(target);
              if (result.name === 'aborted') return target;
              var clonedTarget = result.clonedTarget,
                  leafHost = result.leafHost,
                  field = result.field;
              var value = modifier(leafHost[field]);
              value === DELETE ? delete leafHost[field] : leafHost[field] = value;
              return clonedTarget;
            };
            var boundTarget = this.findBoundTarget();
            return boundTarget ? doModify(boundTarget) : doModify;
          };
          _Updater.prototype.withDefault = function (value) {
            return new _Updater({ type: 'withDefault', parent: this, defaultValue: value });
          };
          _Updater.prototype.abortIfUndef = function () {
            return new _Updater({ type: 'abortIfUndef', parent: this });
          };
          _Updater.prototype.findBoundTarget = function () {
            var current = this;
            while (true) {
              if (current.data.type === 'root') return current.data.boundTarget;
              current = current.data.parent;
            }
          };
          _Updater.prototype.parentUpdaters = function () {
            var updaters = [this];
            var parentUpdater = this.data.parent;
            // Ignore the root updater
            while (parentUpdater && parentUpdater.data.parent) {
              updaters.unshift(parentUpdater);
              parentUpdater = parentUpdater.data.parent;
            }
            return updaters;
          };
          _Updater.prototype.getNextValue = function (previousHost, host, field, isLast) {
            if (this.data.type === 'at') {
              var newField = this.data.field;
              var value_1 = host[newField];
              var nextValue = isObjectOrArray(value_1) ? clone(value_1) : value_1;
              var newHost_1 = isLast ? host : nextValue;
              host[this.data.field] = nextValue;
              return { host: newHost_1, field: newField };
            }
            var value = previousHost[field];
            if (this.data.type === 'abortIfUndef' && value === undefined) {
              return { host: host, field: field, aborted: true };
            }
            if (this.data.type === 'withDefault' && value === undefined) {
              var nextValue = this.data.defaultValue;
              var newHost_2 = isLast ? previousHost : nextValue;
              previousHost[field] = nextValue;
              return { host: newHost_2, field: field };
            }
            var newHost = isLast ? previousHost : host;
            return { host: newHost, field: field };
          };
          _Updater.prototype.cloneForUpdate = function (target) {
            var updaters = this.parentUpdaters();
            var obj = clone(target);
            var previousHost = obj;
            var host = obj;
            var field = '';
            for (var i = 0; i < updaters.length; i++) {
              var result = updaters[i].getNextValue(previousHost, host, field, i === updaters.length - 1);
              if (result.aborted) return { name: 'aborted' };
              previousHost = host;
              host = result.host;
              field = result.field;
            }
            return {
              name: 'result',
              clonedTarget: obj,
              leafHost: host,
              field: field
            };
          };
          return _Updater;
        }();
        function isObjectOrArray(obj) {
          return obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
        }
        function clone(obj) {
          if (Array.isArray(obj)) return obj.slice();
          var cloned = {};
          Object.keys(obj).forEach(function (key) {
            cloned[key] = obj[key];
          });
          return cloned;
        }
        function deepUpdate(target) {
          return new _Updater({ type: 'root', boundTarget: target });
        }

        /***/
      },

      /***/"./node_modules/lodash.map/index.js":
      /*!******************************************!*\
        !*** ./node_modules/lodash.map/index.js ***!
        \******************************************/
      /*! no static exports found */
      /***/function node_modulesLodashMapIndexJs(module, exports, __webpack_require__) {

        /* WEBPACK VAR INJECTION */(function (global, module) {
          /**
          * lodash (Custom Build) <https://lodash.com/>
          * Build: `lodash modularize exports="npm" -o ./`
          * Copyright jQuery Foundation and other contributors <https://jquery.org/>
          * Released under MIT license <https://lodash.com/license>
          * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
          * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
          */

          /** Used as the size to enable large array optimizations. */
          var LARGE_ARRAY_SIZE = 200;

          /** Used as the `TypeError` message for "Functions" methods. */
          var FUNC_ERROR_TEXT = 'Expected a function';

          /** Used to stand-in for `undefined` hash values. */
          var HASH_UNDEFINED = '__lodash_hash_undefined__';

          /** Used to compose bitmasks for comparison styles. */
          var UNORDERED_COMPARE_FLAG = 1,
              PARTIAL_COMPARE_FLAG = 2;

          /** Used as references for various `Number` constants. */
          var INFINITY = 1 / 0,
              MAX_SAFE_INTEGER = 9007199254740991;

          /** `Object#toString` result references. */
          var argsTag = '[object Arguments]',
              arrayTag = '[object Array]',
              boolTag = '[object Boolean]',
              dateTag = '[object Date]',
              errorTag = '[object Error]',
              funcTag = '[object Function]',
              genTag = '[object GeneratorFunction]',
              mapTag = '[object Map]',
              numberTag = '[object Number]',
              objectTag = '[object Object]',
              promiseTag = '[object Promise]',
              regexpTag = '[object RegExp]',
              setTag = '[object Set]',
              stringTag = '[object String]',
              symbolTag = '[object Symbol]',
              weakMapTag = '[object WeakMap]';

          var arrayBufferTag = '[object ArrayBuffer]',
              dataViewTag = '[object DataView]',
              float32Tag = '[object Float32Array]',
              float64Tag = '[object Float64Array]',
              int8Tag = '[object Int8Array]',
              int16Tag = '[object Int16Array]',
              int32Tag = '[object Int32Array]',
              uint8Tag = '[object Uint8Array]',
              uint8ClampedTag = '[object Uint8ClampedArray]',
              uint16Tag = '[object Uint16Array]',
              uint32Tag = '[object Uint32Array]';

          /** Used to match property names within property paths. */
          var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
              reIsPlainProp = /^\w*$/,
              reLeadingDot = /^\./,
              rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

          /**
           * Used to match `RegExp`
           * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
           */
          var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

          /** Used to match backslashes in property paths. */
          var reEscapeChar = /\\(\\)?/g;

          /** Used to detect host constructors (Safari). */
          var reIsHostCtor = /^\[object .+?Constructor\]$/;

          /** Used to detect unsigned integer values. */
          var reIsUint = /^(?:0|[1-9]\d*)$/;

          /** Used to identify `toStringTag` values of typed arrays. */
          var typedArrayTags = {};
          typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
          typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

          /** Detect free variable `global` from Node.js. */
          var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global && global.Object === Object && global;

          /** Detect free variable `self`. */
          var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self && self.Object === Object && self;

          /** Used as a reference to the global object. */
          var root = freeGlobal || freeSelf || Function('return this')();

          /** Detect free variable `exports`. */
          var freeExports = (typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;

          /** Detect free variable `module`. */
          var freeModule = freeExports && (typeof module === 'undefined' ? 'undefined' : _typeof(module)) == 'object' && module && !module.nodeType && module;

          /** Detect the popular CommonJS extension `module.exports`. */
          var moduleExports = freeModule && freeModule.exports === freeExports;

          /** Detect free variable `process` from Node.js. */
          var freeProcess = moduleExports && freeGlobal.process;

          /** Used to access faster Node.js helpers. */
          var nodeUtil = function () {
            try {
              return freeProcess && freeProcess.binding('util');
            } catch (e) {}
          }();

          /* Node.js helper references. */
          var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

          /**
           * A specialized version of `_.map` for arrays without support for iteratee
           * shorthands.
           *
           * @private
           * @param {Array} [array] The array to iterate over.
           * @param {Function} iteratee The function invoked per iteration.
           * @returns {Array} Returns the new mapped array.
           */
          function arrayMap(array, iteratee) {
            var index = -1,
                length = array ? array.length : 0,
                result = Array(length);

            while (++index < length) {
              result[index] = iteratee(array[index], index, array);
            }
            return result;
          }

          /**
           * A specialized version of `_.some` for arrays without support for iteratee
           * shorthands.
           *
           * @private
           * @param {Array} [array] The array to iterate over.
           * @param {Function} predicate The function invoked per iteration.
           * @returns {boolean} Returns `true` if any element passes the predicate check,
           *  else `false`.
           */
          function arraySome(array, predicate) {
            var index = -1,
                length = array ? array.length : 0;

            while (++index < length) {
              if (predicate(array[index], index, array)) {
                return true;
              }
            }
            return false;
          }

          /**
           * The base implementation of `_.property` without support for deep paths.
           *
           * @private
           * @param {string} key The key of the property to get.
           * @returns {Function} Returns the new accessor function.
           */
          function baseProperty(key) {
            return function (object) {
              return object == null ? undefined : object[key];
            };
          }

          /**
           * The base implementation of `_.times` without support for iteratee shorthands
           * or max array length checks.
           *
           * @private
           * @param {number} n The number of times to invoke `iteratee`.
           * @param {Function} iteratee The function invoked per iteration.
           * @returns {Array} Returns the array of results.
           */
          function baseTimes(n, iteratee) {
            var index = -1,
                result = Array(n);

            while (++index < n) {
              result[index] = iteratee(index);
            }
            return result;
          }

          /**
           * The base implementation of `_.unary` without support for storing metadata.
           *
           * @private
           * @param {Function} func The function to cap arguments for.
           * @returns {Function} Returns the new capped function.
           */
          function baseUnary(func) {
            return function (value) {
              return func(value);
            };
          }

          /**
           * Gets the value at `key` of `object`.
           *
           * @private
           * @param {Object} [object] The object to query.
           * @param {string} key The key of the property to get.
           * @returns {*} Returns the property value.
           */
          function getValue(object, key) {
            return object == null ? undefined : object[key];
          }

          /**
           * Checks if `value` is a host object in IE < 9.
           *
           * @private
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
           */
          function isHostObject(value) {
            // Many host objects are `Object` objects that can coerce to strings
            // despite having improperly defined `toString` methods.
            var result = false;
            if (value != null && typeof value.toString != 'function') {
              try {
                result = !!(value + '');
              } catch (e) {}
            }
            return result;
          }

          /**
           * Converts `map` to its key-value pairs.
           *
           * @private
           * @param {Object} map The map to convert.
           * @returns {Array} Returns the key-value pairs.
           */
          function mapToArray(map) {
            var index = -1,
                result = Array(map.size);

            map.forEach(function (value, key) {
              result[++index] = [key, value];
            });
            return result;
          }

          /**
           * Creates a unary function that invokes `func` with its argument transformed.
           *
           * @private
           * @param {Function} func The function to wrap.
           * @param {Function} transform The argument transform.
           * @returns {Function} Returns the new function.
           */
          function overArg(func, transform) {
            return function (arg) {
              return func(transform(arg));
            };
          }

          /**
           * Converts `set` to an array of its values.
           *
           * @private
           * @param {Object} set The set to convert.
           * @returns {Array} Returns the values.
           */
          function setToArray(set) {
            var index = -1,
                result = Array(set.size);

            set.forEach(function (value) {
              result[++index] = value;
            });
            return result;
          }

          /** Used for built-in method references. */
          var arrayProto = Array.prototype,
              funcProto = Function.prototype,
              objectProto = Object.prototype;

          /** Used to detect overreaching core-js shims. */
          var coreJsData = root['__core-js_shared__'];

          /** Used to detect methods masquerading as native. */
          var maskSrcKey = function () {
            var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
            return uid ? 'Symbol(src)_1.' + uid : '';
          }();

          /** Used to resolve the decompiled source of functions. */
          var funcToString = funcProto.toString;

          /** Used to check objects for own properties. */
          var hasOwnProperty = objectProto.hasOwnProperty;

          /**
           * Used to resolve the
           * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
           * of values.
           */
          var objectToString = objectProto.toString;

          /** Used to detect if a method is native. */
          var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

          /** Built-in value references. */
          var _Symbol = root.Symbol,
              Uint8Array = root.Uint8Array,
              propertyIsEnumerable = objectProto.propertyIsEnumerable,
              splice = arrayProto.splice;

          /* Built-in method references for those with the same name as other `lodash` methods. */
          var nativeKeys = overArg(Object.keys, Object);

          /* Built-in method references that are verified to be native. */
          var DataView = getNative(root, 'DataView'),
              Map = getNative(root, 'Map'),
              Promise = getNative(root, 'Promise'),
              Set = getNative(root, 'Set'),
              WeakMap = getNative(root, 'WeakMap'),
              nativeCreate = getNative(Object, 'create');

          /** Used to detect maps, sets, and weakmaps. */
          var dataViewCtorString = toSource(DataView),
              mapCtorString = toSource(Map),
              promiseCtorString = toSource(Promise),
              setCtorString = toSource(Set),
              weakMapCtorString = toSource(WeakMap);

          /** Used to convert symbols to primitives and strings. */
          var symbolProto = _Symbol ? _Symbol.prototype : undefined,
              symbolValueOf = symbolProto ? symbolProto.valueOf : undefined,
              symbolToString = symbolProto ? symbolProto.toString : undefined;

          /**
           * Creates a hash object.
           *
           * @private
           * @constructor
           * @param {Array} [entries] The key-value pairs to cache.
           */
          function Hash(entries) {
            var index = -1,
                length = entries ? entries.length : 0;

            this.clear();
            while (++index < length) {
              var entry = entries[index];
              this.set(entry[0], entry[1]);
            }
          }

          /**
           * Removes all key-value entries from the hash.
           *
           * @private
           * @name clear
           * @memberOf Hash
           */
          function hashClear() {
            this.__data__ = nativeCreate ? nativeCreate(null) : {};
          }

          /**
           * Removes `key` and its value from the hash.
           *
           * @private
           * @name delete
           * @memberOf Hash
           * @param {Object} hash The hash to modify.
           * @param {string} key The key of the value to remove.
           * @returns {boolean} Returns `true` if the entry was removed, else `false`.
           */
          function hashDelete(key) {
            return this.has(key) && delete this.__data__[key];
          }

          /**
           * Gets the hash value for `key`.
           *
           * @private
           * @name get
           * @memberOf Hash
           * @param {string} key The key of the value to get.
           * @returns {*} Returns the entry value.
           */
          function hashGet(key) {
            var data = this.__data__;
            if (nativeCreate) {
              var result = data[key];
              return result === HASH_UNDEFINED ? undefined : result;
            }
            return hasOwnProperty.call(data, key) ? data[key] : undefined;
          }

          /**
           * Checks if a hash value for `key` exists.
           *
           * @private
           * @name has
           * @memberOf Hash
           * @param {string} key The key of the entry to check.
           * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
           */
          function hashHas(key) {
            var data = this.__data__;
            return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
          }

          /**
           * Sets the hash `key` to `value`.
           *
           * @private
           * @name set
           * @memberOf Hash
           * @param {string} key The key of the value to set.
           * @param {*} value The value to set.
           * @returns {Object} Returns the hash instance.
           */
          function hashSet(key, value) {
            var data = this.__data__;
            data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
            return this;
          }

          // Add methods to `Hash`.
          Hash.prototype.clear = hashClear;
          Hash.prototype['delete'] = hashDelete;
          Hash.prototype.get = hashGet;
          Hash.prototype.has = hashHas;
          Hash.prototype.set = hashSet;

          /**
           * Creates an list cache object.
           *
           * @private
           * @constructor
           * @param {Array} [entries] The key-value pairs to cache.
           */
          function ListCache(entries) {
            var index = -1,
                length = entries ? entries.length : 0;

            this.clear();
            while (++index < length) {
              var entry = entries[index];
              this.set(entry[0], entry[1]);
            }
          }

          /**
           * Removes all key-value entries from the list cache.
           *
           * @private
           * @name clear
           * @memberOf ListCache
           */
          function listCacheClear() {
            this.__data__ = [];
          }

          /**
           * Removes `key` and its value from the list cache.
           *
           * @private
           * @name delete
           * @memberOf ListCache
           * @param {string} key The key of the value to remove.
           * @returns {boolean} Returns `true` if the entry was removed, else `false`.
           */
          function listCacheDelete(key) {
            var data = this.__data__,
                index = assocIndexOf(data, key);

            if (index < 0) {
              return false;
            }
            var lastIndex = data.length - 1;
            if (index == lastIndex) {
              data.pop();
            } else {
              splice.call(data, index, 1);
            }
            return true;
          }

          /**
           * Gets the list cache value for `key`.
           *
           * @private
           * @name get
           * @memberOf ListCache
           * @param {string} key The key of the value to get.
           * @returns {*} Returns the entry value.
           */
          function listCacheGet(key) {
            var data = this.__data__,
                index = assocIndexOf(data, key);

            return index < 0 ? undefined : data[index][1];
          }

          /**
           * Checks if a list cache value for `key` exists.
           *
           * @private
           * @name has
           * @memberOf ListCache
           * @param {string} key The key of the entry to check.
           * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
           */
          function listCacheHas(key) {
            return assocIndexOf(this.__data__, key) > -1;
          }

          /**
           * Sets the list cache `key` to `value`.
           *
           * @private
           * @name set
           * @memberOf ListCache
           * @param {string} key The key of the value to set.
           * @param {*} value The value to set.
           * @returns {Object} Returns the list cache instance.
           */
          function listCacheSet(key, value) {
            var data = this.__data__,
                index = assocIndexOf(data, key);

            if (index < 0) {
              data.push([key, value]);
            } else {
              data[index][1] = value;
            }
            return this;
          }

          // Add methods to `ListCache`.
          ListCache.prototype.clear = listCacheClear;
          ListCache.prototype['delete'] = listCacheDelete;
          ListCache.prototype.get = listCacheGet;
          ListCache.prototype.has = listCacheHas;
          ListCache.prototype.set = listCacheSet;

          /**
           * Creates a map cache object to store key-value pairs.
           *
           * @private
           * @constructor
           * @param {Array} [entries] The key-value pairs to cache.
           */
          function MapCache(entries) {
            var index = -1,
                length = entries ? entries.length : 0;

            this.clear();
            while (++index < length) {
              var entry = entries[index];
              this.set(entry[0], entry[1]);
            }
          }

          /**
           * Removes all key-value entries from the map.
           *
           * @private
           * @name clear
           * @memberOf MapCache
           */
          function mapCacheClear() {
            this.__data__ = {
              'hash': new Hash(),
              'map': new (Map || ListCache)(),
              'string': new Hash()
            };
          }

          /**
           * Removes `key` and its value from the map.
           *
           * @private
           * @name delete
           * @memberOf MapCache
           * @param {string} key The key of the value to remove.
           * @returns {boolean} Returns `true` if the entry was removed, else `false`.
           */
          function mapCacheDelete(key) {
            return getMapData(this, key)['delete'](key);
          }

          /**
           * Gets the map value for `key`.
           *
           * @private
           * @name get
           * @memberOf MapCache
           * @param {string} key The key of the value to get.
           * @returns {*} Returns the entry value.
           */
          function mapCacheGet(key) {
            return getMapData(this, key).get(key);
          }

          /**
           * Checks if a map value for `key` exists.
           *
           * @private
           * @name has
           * @memberOf MapCache
           * @param {string} key The key of the entry to check.
           * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
           */
          function mapCacheHas(key) {
            return getMapData(this, key).has(key);
          }

          /**
           * Sets the map `key` to `value`.
           *
           * @private
           * @name set
           * @memberOf MapCache
           * @param {string} key The key of the value to set.
           * @param {*} value The value to set.
           * @returns {Object} Returns the map cache instance.
           */
          function mapCacheSet(key, value) {
            getMapData(this, key).set(key, value);
            return this;
          }

          // Add methods to `MapCache`.
          MapCache.prototype.clear = mapCacheClear;
          MapCache.prototype['delete'] = mapCacheDelete;
          MapCache.prototype.get = mapCacheGet;
          MapCache.prototype.has = mapCacheHas;
          MapCache.prototype.set = mapCacheSet;

          /**
           *
           * Creates an array cache object to store unique values.
           *
           * @private
           * @constructor
           * @param {Array} [values] The values to cache.
           */
          function SetCache(values) {
            var index = -1,
                length = values ? values.length : 0;

            this.__data__ = new MapCache();
            while (++index < length) {
              this.add(values[index]);
            }
          }

          /**
           * Adds `value` to the array cache.
           *
           * @private
           * @name add
           * @memberOf SetCache
           * @alias push
           * @param {*} value The value to cache.
           * @returns {Object} Returns the cache instance.
           */
          function setCacheAdd(value) {
            this.__data__.set(value, HASH_UNDEFINED);
            return this;
          }

          /**
           * Checks if `value` is in the array cache.
           *
           * @private
           * @name has
           * @memberOf SetCache
           * @param {*} value The value to search for.
           * @returns {number} Returns `true` if `value` is found, else `false`.
           */
          function setCacheHas(value) {
            return this.__data__.has(value);
          }

          // Add methods to `SetCache`.
          SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
          SetCache.prototype.has = setCacheHas;

          /**
           * Creates a stack cache object to store key-value pairs.
           *
           * @private
           * @constructor
           * @param {Array} [entries] The key-value pairs to cache.
           */
          function Stack(entries) {
            this.__data__ = new ListCache(entries);
          }

          /**
           * Removes all key-value entries from the stack.
           *
           * @private
           * @name clear
           * @memberOf Stack
           */
          function stackClear() {
            this.__data__ = new ListCache();
          }

          /**
           * Removes `key` and its value from the stack.
           *
           * @private
           * @name delete
           * @memberOf Stack
           * @param {string} key The key of the value to remove.
           * @returns {boolean} Returns `true` if the entry was removed, else `false`.
           */
          function stackDelete(key) {
            return this.__data__['delete'](key);
          }

          /**
           * Gets the stack value for `key`.
           *
           * @private
           * @name get
           * @memberOf Stack
           * @param {string} key The key of the value to get.
           * @returns {*} Returns the entry value.
           */
          function stackGet(key) {
            return this.__data__.get(key);
          }

          /**
           * Checks if a stack value for `key` exists.
           *
           * @private
           * @name has
           * @memberOf Stack
           * @param {string} key The key of the entry to check.
           * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
           */
          function stackHas(key) {
            return this.__data__.has(key);
          }

          /**
           * Sets the stack `key` to `value`.
           *
           * @private
           * @name set
           * @memberOf Stack
           * @param {string} key The key of the value to set.
           * @param {*} value The value to set.
           * @returns {Object} Returns the stack cache instance.
           */
          function stackSet(key, value) {
            var cache = this.__data__;
            if (cache instanceof ListCache) {
              var pairs = cache.__data__;
              if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
                pairs.push([key, value]);
                return this;
              }
              cache = this.__data__ = new MapCache(pairs);
            }
            cache.set(key, value);
            return this;
          }

          // Add methods to `Stack`.
          Stack.prototype.clear = stackClear;
          Stack.prototype['delete'] = stackDelete;
          Stack.prototype.get = stackGet;
          Stack.prototype.has = stackHas;
          Stack.prototype.set = stackSet;

          /**
           * Creates an array of the enumerable property names of the array-like `value`.
           *
           * @private
           * @param {*} value The value to query.
           * @param {boolean} inherited Specify returning inherited property names.
           * @returns {Array} Returns the array of property names.
           */
          function arrayLikeKeys(value, inherited) {
            // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
            // Safari 9 makes `arguments.length` enumerable in strict mode.
            var result = isArray(value) || isArguments(value) ? baseTimes(value.length, String) : [];

            var length = result.length,
                skipIndexes = !!length;

            for (var key in value) {
              if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
                result.push(key);
              }
            }
            return result;
          }

          /**
           * Gets the index at which the `key` is found in `array` of key-value pairs.
           *
           * @private
           * @param {Array} array The array to inspect.
           * @param {*} key The key to search for.
           * @returns {number} Returns the index of the matched value, else `-1`.
           */
          function assocIndexOf(array, key) {
            var length = array.length;
            while (length--) {
              if (eq(array[length][0], key)) {
                return length;
              }
            }
            return -1;
          }

          /**
           * The base implementation of `_.forEach` without support for iteratee shorthands.
           *
           * @private
           * @param {Array|Object} collection The collection to iterate over.
           * @param {Function} iteratee The function invoked per iteration.
           * @returns {Array|Object} Returns `collection`.
           */
          var baseEach = createBaseEach(baseForOwn);

          /**
           * The base implementation of `baseForOwn` which iterates over `object`
           * properties returned by `keysFunc` and invokes `iteratee` for each property.
           * Iteratee functions may exit iteration early by explicitly returning `false`.
           *
           * @private
           * @param {Object} object The object to iterate over.
           * @param {Function} iteratee The function invoked per iteration.
           * @param {Function} keysFunc The function to get the keys of `object`.
           * @returns {Object} Returns `object`.
           */
          var baseFor = createBaseFor();

          /**
           * The base implementation of `_.forOwn` without support for iteratee shorthands.
           *
           * @private
           * @param {Object} object The object to iterate over.
           * @param {Function} iteratee The function invoked per iteration.
           * @returns {Object} Returns `object`.
           */
          function baseForOwn(object, iteratee) {
            return object && baseFor(object, iteratee, keys);
          }

          /**
           * The base implementation of `_.get` without support for default values.
           *
           * @private
           * @param {Object} object The object to query.
           * @param {Array|string} path The path of the property to get.
           * @returns {*} Returns the resolved value.
           */
          function baseGet(object, path) {
            path = isKey(path, object) ? [path] : castPath(path);

            var index = 0,
                length = path.length;

            while (object != null && index < length) {
              object = object[toKey(path[index++])];
            }
            return index && index == length ? object : undefined;
          }

          /**
           * The base implementation of `getTag`.
           *
           * @private
           * @param {*} value The value to query.
           * @returns {string} Returns the `toStringTag`.
           */
          function baseGetTag(value) {
            return objectToString.call(value);
          }

          /**
           * The base implementation of `_.hasIn` without support for deep paths.
           *
           * @private
           * @param {Object} [object] The object to query.
           * @param {Array|string} key The key to check.
           * @returns {boolean} Returns `true` if `key` exists, else `false`.
           */
          function baseHasIn(object, key) {
            return object != null && key in Object(object);
          }

          /**
           * The base implementation of `_.isEqual` which supports partial comparisons
           * and tracks traversed objects.
           *
           * @private
           * @param {*} value The value to compare.
           * @param {*} other The other value to compare.
           * @param {Function} [customizer] The function to customize comparisons.
           * @param {boolean} [bitmask] The bitmask of comparison flags.
           *  The bitmask may be composed of the following flags:
           *     1 - Unordered comparison
           *     2 - Partial comparison
           * @param {Object} [stack] Tracks traversed `value` and `other` objects.
           * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
           */
          function baseIsEqual(value, other, customizer, bitmask, stack) {
            if (value === other) {
              return true;
            }
            if (value == null || other == null || !isObject(value) && !isObjectLike(other)) {
              return value !== value && other !== other;
            }
            return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
          }

          /**
           * A specialized version of `baseIsEqual` for arrays and objects which performs
           * deep comparisons and tracks traversed objects enabling objects with circular
           * references to be compared.
           *
           * @private
           * @param {Object} object The object to compare.
           * @param {Object} other The other object to compare.
           * @param {Function} equalFunc The function to determine equivalents of values.
           * @param {Function} [customizer] The function to customize comparisons.
           * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
           *  for more details.
           * @param {Object} [stack] Tracks traversed `object` and `other` objects.
           * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
           */
          function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
            var objIsArr = isArray(object),
                othIsArr = isArray(other),
                objTag = arrayTag,
                othTag = arrayTag;

            if (!objIsArr) {
              objTag = getTag(object);
              objTag = objTag == argsTag ? objectTag : objTag;
            }
            if (!othIsArr) {
              othTag = getTag(other);
              othTag = othTag == argsTag ? objectTag : othTag;
            }
            var objIsObj = objTag == objectTag && !isHostObject(object),
                othIsObj = othTag == objectTag && !isHostObject(other),
                isSameTag = objTag == othTag;

            if (isSameTag && !objIsObj) {
              stack || (stack = new Stack());
              return objIsArr || isTypedArray(object) ? equalArrays(object, other, equalFunc, customizer, bitmask, stack) : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
            }
            if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
              var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
                  othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

              if (objIsWrapped || othIsWrapped) {
                var objUnwrapped = objIsWrapped ? object.value() : object,
                    othUnwrapped = othIsWrapped ? other.value() : other;

                stack || (stack = new Stack());
                return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
              }
            }
            if (!isSameTag) {
              return false;
            }
            stack || (stack = new Stack());
            return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
          }

          /**
           * The base implementation of `_.isMatch` without support for iteratee shorthands.
           *
           * @private
           * @param {Object} object The object to inspect.
           * @param {Object} source The object of property values to match.
           * @param {Array} matchData The property names, values, and compare flags to match.
           * @param {Function} [customizer] The function to customize comparisons.
           * @returns {boolean} Returns `true` if `object` is a match, else `false`.
           */
          function baseIsMatch(object, source, matchData, customizer) {
            var index = matchData.length,
                length = index,
                noCustomizer = !customizer;

            if (object == null) {
              return !length;
            }
            object = Object(object);
            while (index--) {
              var data = matchData[index];
              if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
                return false;
              }
            }
            while (++index < length) {
              data = matchData[index];
              var key = data[0],
                  objValue = object[key],
                  srcValue = data[1];

              if (noCustomizer && data[2]) {
                if (objValue === undefined && !(key in object)) {
                  return false;
                }
              } else {
                var stack = new Stack();
                if (customizer) {
                  var result = customizer(objValue, srcValue, key, object, source, stack);
                }
                if (!(result === undefined ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack) : result)) {
                  return false;
                }
              }
            }
            return true;
          }

          /**
           * The base implementation of `_.isNative` without bad shim checks.
           *
           * @private
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is a native function,
           *  else `false`.
           */
          function baseIsNative(value) {
            if (!isObject(value) || isMasked(value)) {
              return false;
            }
            var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
            return pattern.test(toSource(value));
          }

          /**
           * The base implementation of `_.isTypedArray` without Node.js optimizations.
           *
           * @private
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
           */
          function baseIsTypedArray(value) {
            return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
          }

          /**
           * The base implementation of `_.iteratee`.
           *
           * @private
           * @param {*} [value=_.identity] The value to convert to an iteratee.
           * @returns {Function} Returns the iteratee.
           */
          function baseIteratee(value) {
            // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
            // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
            if (typeof value == 'function') {
              return value;
            }
            if (value == null) {
              return identity;
            }
            if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object') {
              return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
            }
            return property(value);
          }

          /**
           * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
           *
           * @private
           * @param {Object} object The object to query.
           * @returns {Array} Returns the array of property names.
           */
          function baseKeys(object) {
            if (!isPrototype(object)) {
              return nativeKeys(object);
            }
            var result = [];
            for (var key in Object(object)) {
              if (hasOwnProperty.call(object, key) && key != 'constructor') {
                result.push(key);
              }
            }
            return result;
          }

          /**
           * The base implementation of `_.map` without support for iteratee shorthands.
           *
           * @private
           * @param {Array|Object} collection The collection to iterate over.
           * @param {Function} iteratee The function invoked per iteration.
           * @returns {Array} Returns the new mapped array.
           */
          function baseMap(collection, iteratee) {
            var index = -1,
                result = isArrayLike(collection) ? Array(collection.length) : [];

            baseEach(collection, function (value, key, collection) {
              result[++index] = iteratee(value, key, collection);
            });
            return result;
          }

          /**
           * The base implementation of `_.matches` which doesn't clone `source`.
           *
           * @private
           * @param {Object} source The object of property values to match.
           * @returns {Function} Returns the new spec function.
           */
          function baseMatches(source) {
            var matchData = getMatchData(source);
            if (matchData.length == 1 && matchData[0][2]) {
              return matchesStrictComparable(matchData[0][0], matchData[0][1]);
            }
            return function (object) {
              return object === source || baseIsMatch(object, source, matchData);
            };
          }

          /**
           * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
           *
           * @private
           * @param {string} path The path of the property to get.
           * @param {*} srcValue The value to match.
           * @returns {Function} Returns the new spec function.
           */
          function baseMatchesProperty(path, srcValue) {
            if (isKey(path) && isStrictComparable(srcValue)) {
              return matchesStrictComparable(toKey(path), srcValue);
            }
            return function (object) {
              var objValue = get(object, path);
              return objValue === undefined && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
            };
          }

          /**
           * A specialized version of `baseProperty` which supports deep paths.
           *
           * @private
           * @param {Array|string} path The path of the property to get.
           * @returns {Function} Returns the new accessor function.
           */
          function basePropertyDeep(path) {
            return function (object) {
              return baseGet(object, path);
            };
          }

          /**
           * The base implementation of `_.toString` which doesn't convert nullish
           * values to empty strings.
           *
           * @private
           * @param {*} value The value to process.
           * @returns {string} Returns the string.
           */
          function baseToString(value) {
            // Exit early for strings to avoid a performance hit in some environments.
            if (typeof value == 'string') {
              return value;
            }
            if (isSymbol(value)) {
              return symbolToString ? symbolToString.call(value) : '';
            }
            var result = value + '';
            return result == '0' && 1 / value == -INFINITY ? '-0' : result;
          }

          /**
           * Casts `value` to a path array if it's not one.
           *
           * @private
           * @param {*} value The value to inspect.
           * @returns {Array} Returns the cast property path array.
           */
          function castPath(value) {
            return isArray(value) ? value : stringToPath(value);
          }

          /**
           * Creates a `baseEach` or `baseEachRight` function.
           *
           * @private
           * @param {Function} eachFunc The function to iterate over a collection.
           * @param {boolean} [fromRight] Specify iterating from right to left.
           * @returns {Function} Returns the new base function.
           */
          function createBaseEach(eachFunc, fromRight) {
            return function (collection, iteratee) {
              if (collection == null) {
                return collection;
              }
              if (!isArrayLike(collection)) {
                return eachFunc(collection, iteratee);
              }
              var length = collection.length,
                  index = fromRight ? length : -1,
                  iterable = Object(collection);

              while (fromRight ? index-- : ++index < length) {
                if (iteratee(iterable[index], index, iterable) === false) {
                  break;
                }
              }
              return collection;
            };
          }

          /**
           * Creates a base function for methods like `_.forIn` and `_.forOwn`.
           *
           * @private
           * @param {boolean} [fromRight] Specify iterating from right to left.
           * @returns {Function} Returns the new base function.
           */
          function createBaseFor(fromRight) {
            return function (object, iteratee, keysFunc) {
              var index = -1,
                  iterable = Object(object),
                  props = keysFunc(object),
                  length = props.length;

              while (length--) {
                var key = props[fromRight ? length : ++index];
                if (iteratee(iterable[key], key, iterable) === false) {
                  break;
                }
              }
              return object;
            };
          }

          /**
           * A specialized version of `baseIsEqualDeep` for arrays with support for
           * partial deep comparisons.
           *
           * @private
           * @param {Array} array The array to compare.
           * @param {Array} other The other array to compare.
           * @param {Function} equalFunc The function to determine equivalents of values.
           * @param {Function} customizer The function to customize comparisons.
           * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
           *  for more details.
           * @param {Object} stack Tracks traversed `array` and `other` objects.
           * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
           */
          function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
            var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
                arrLength = array.length,
                othLength = other.length;

            if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
              return false;
            }
            // Assume cyclic values are equal.
            var stacked = stack.get(array);
            if (stacked && stack.get(other)) {
              return stacked == other;
            }
            var index = -1,
                result = true,
                seen = bitmask & UNORDERED_COMPARE_FLAG ? new SetCache() : undefined;

            stack.set(array, other);
            stack.set(other, array);

            // Ignore non-index properties.
            while (++index < arrLength) {
              var arrValue = array[index],
                  othValue = other[index];

              if (customizer) {
                var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
              }
              if (compared !== undefined) {
                if (compared) {
                  continue;
                }
                result = false;
                break;
              }
              // Recursively compare arrays (susceptible to call stack limits).
              if (seen) {
                if (!arraySome(other, function (othValue, othIndex) {
                  if (!seen.has(othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
                    return seen.add(othIndex);
                  }
                })) {
                  result = false;
                  break;
                }
              } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
                result = false;
                break;
              }
            }
            stack['delete'](array);
            stack['delete'](other);
            return result;
          }

          /**
           * A specialized version of `baseIsEqualDeep` for comparing objects of
           * the same `toStringTag`.
           *
           * **Note:** This function only supports comparing values with tags of
           * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
           *
           * @private
           * @param {Object} object The object to compare.
           * @param {Object} other The other object to compare.
           * @param {string} tag The `toStringTag` of the objects to compare.
           * @param {Function} equalFunc The function to determine equivalents of values.
           * @param {Function} customizer The function to customize comparisons.
           * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
           *  for more details.
           * @param {Object} stack Tracks traversed `object` and `other` objects.
           * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
           */
          function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
            switch (tag) {
              case dataViewTag:
                if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
                  return false;
                }
                object = object.buffer;
                other = other.buffer;

              case arrayBufferTag:
                if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
                  return false;
                }
                return true;

              case boolTag:
              case dateTag:
              case numberTag:
                // Coerce booleans to `1` or `0` and dates to milliseconds.
                // Invalid dates are coerced to `NaN`.
                return eq(+object, +other);

              case errorTag:
                return object.name == other.name && object.message == other.message;

              case regexpTag:
              case stringTag:
                // Coerce regexes to strings and treat strings, primitives and objects,
                // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
                // for more details.
                return object == other + '';

              case mapTag:
                var convert = mapToArray;

              case setTag:
                var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
                convert || (convert = setToArray);

                if (object.size != other.size && !isPartial) {
                  return false;
                }
                // Assume cyclic values are equal.
                var stacked = stack.get(object);
                if (stacked) {
                  return stacked == other;
                }
                bitmask |= UNORDERED_COMPARE_FLAG;

                // Recursively compare objects (susceptible to call stack limits).
                stack.set(object, other);
                var result = equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);
                stack['delete'](object);
                return result;

              case symbolTag:
                if (symbolValueOf) {
                  return symbolValueOf.call(object) == symbolValueOf.call(other);
                }
            }
            return false;
          }

          /**
           * A specialized version of `baseIsEqualDeep` for objects with support for
           * partial deep comparisons.
           *
           * @private
           * @param {Object} object The object to compare.
           * @param {Object} other The other object to compare.
           * @param {Function} equalFunc The function to determine equivalents of values.
           * @param {Function} customizer The function to customize comparisons.
           * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
           *  for more details.
           * @param {Object} stack Tracks traversed `object` and `other` objects.
           * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
           */
          function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
            var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
                objProps = keys(object),
                objLength = objProps.length,
                othProps = keys(other),
                othLength = othProps.length;

            if (objLength != othLength && !isPartial) {
              return false;
            }
            var index = objLength;
            while (index--) {
              var key = objProps[index];
              if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
                return false;
              }
            }
            // Assume cyclic values are equal.
            var stacked = stack.get(object);
            if (stacked && stack.get(other)) {
              return stacked == other;
            }
            var result = true;
            stack.set(object, other);
            stack.set(other, object);

            var skipCtor = isPartial;
            while (++index < objLength) {
              key = objProps[index];
              var objValue = object[key],
                  othValue = other[key];

              if (customizer) {
                var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
              }
              // Recursively compare objects (susceptible to call stack limits).
              if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack) : compared)) {
                result = false;
                break;
              }
              skipCtor || (skipCtor = key == 'constructor');
            }
            if (result && !skipCtor) {
              var objCtor = object.constructor,
                  othCtor = other.constructor;

              // Non `Object` object instances with different constructors are not equal.
              if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
                result = false;
              }
            }
            stack['delete'](object);
            stack['delete'](other);
            return result;
          }

          /**
           * Gets the data for `map`.
           *
           * @private
           * @param {Object} map The map to query.
           * @param {string} key The reference key.
           * @returns {*} Returns the map data.
           */
          function getMapData(map, key) {
            var data = map.__data__;
            return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
          }

          /**
           * Gets the property names, values, and compare flags of `object`.
           *
           * @private
           * @param {Object} object The object to query.
           * @returns {Array} Returns the match data of `object`.
           */
          function getMatchData(object) {
            var result = keys(object),
                length = result.length;

            while (length--) {
              var key = result[length],
                  value = object[key];

              result[length] = [key, value, isStrictComparable(value)];
            }
            return result;
          }

          /**
           * Gets the native function at `key` of `object`.
           *
           * @private
           * @param {Object} object The object to query.
           * @param {string} key The key of the method to get.
           * @returns {*} Returns the function if it's native, else `undefined`.
           */
          function getNative(object, key) {
            var value = getValue(object, key);
            return baseIsNative(value) ? value : undefined;
          }

          /**
           * Gets the `toStringTag` of `value`.
           *
           * @private
           * @param {*} value The value to query.
           * @returns {string} Returns the `toStringTag`.
           */
          var getTag = baseGetTag;

          // Fallback for data views, maps, sets, and weak maps in IE 11,
          // for data views in Edge < 14, and promises in Node.js.
          if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
            getTag = function getTag(value) {
              var result = objectToString.call(value),
                  Ctor = result == objectTag ? value.constructor : undefined,
                  ctorString = Ctor ? toSource(Ctor) : undefined;

              if (ctorString) {
                switch (ctorString) {
                  case dataViewCtorString:
                    return dataViewTag;
                  case mapCtorString:
                    return mapTag;
                  case promiseCtorString:
                    return promiseTag;
                  case setCtorString:
                    return setTag;
                  case weakMapCtorString:
                    return weakMapTag;
                }
              }
              return result;
            };
          }

          /**
           * Checks if `path` exists on `object`.
           *
           * @private
           * @param {Object} object The object to query.
           * @param {Array|string} path The path to check.
           * @param {Function} hasFunc The function to check properties.
           * @returns {boolean} Returns `true` if `path` exists, else `false`.
           */
          function hasPath(object, path, hasFunc) {
            path = isKey(path, object) ? [path] : castPath(path);

            var result,
                index = -1,
                length = path.length;

            while (++index < length) {
              var key = toKey(path[index]);
              if (!(result = object != null && hasFunc(object, key))) {
                break;
              }
              object = object[key];
            }
            if (result) {
              return result;
            }
            var length = object ? object.length : 0;
            return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
          }

          /**
           * Checks if `value` is a valid array-like index.
           *
           * @private
           * @param {*} value The value to check.
           * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
           * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
           */
          function isIndex(value, length) {
            length = length == null ? MAX_SAFE_INTEGER : length;
            return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
          }

          /**
           * Checks if `value` is a property name and not a property path.
           *
           * @private
           * @param {*} value The value to check.
           * @param {Object} [object] The object to query keys on.
           * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
           */
          function isKey(value, object) {
            if (isArray(value)) {
              return false;
            }
            var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
            if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
              return true;
            }
            return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
          }

          /**
           * Checks if `value` is suitable for use as unique object key.
           *
           * @private
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
           */
          function isKeyable(value) {
            var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
            return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
          }

          /**
           * Checks if `func` has its source masked.
           *
           * @private
           * @param {Function} func The function to check.
           * @returns {boolean} Returns `true` if `func` is masked, else `false`.
           */
          function isMasked(func) {
            return !!maskSrcKey && maskSrcKey in func;
          }

          /**
           * Checks if `value` is likely a prototype object.
           *
           * @private
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
           */
          function isPrototype(value) {
            var Ctor = value && value.constructor,
                proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;

            return value === proto;
          }

          /**
           * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
           *
           * @private
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` if suitable for strict
           *  equality comparisons, else `false`.
           */
          function isStrictComparable(value) {
            return value === value && !isObject(value);
          }

          /**
           * A specialized version of `matchesProperty` for source values suitable
           * for strict equality comparisons, i.e. `===`.
           *
           * @private
           * @param {string} key The key of the property to get.
           * @param {*} srcValue The value to match.
           * @returns {Function} Returns the new spec function.
           */
          function matchesStrictComparable(key, srcValue) {
            return function (object) {
              if (object == null) {
                return false;
              }
              return object[key] === srcValue && (srcValue !== undefined || key in Object(object));
            };
          }

          /**
           * Converts `string` to a property path array.
           *
           * @private
           * @param {string} string The string to convert.
           * @returns {Array} Returns the property path array.
           */
          var stringToPath = memoize(function (string) {
            string = toString(string);

            var result = [];
            if (reLeadingDot.test(string)) {
              result.push('');
            }
            string.replace(rePropName, function (match, number, quote, string) {
              result.push(quote ? string.replace(reEscapeChar, '$1') : number || match);
            });
            return result;
          });

          /**
           * Converts `value` to a string key if it's not a string or symbol.
           *
           * @private
           * @param {*} value The value to inspect.
           * @returns {string|symbol} Returns the key.
           */
          function toKey(value) {
            if (typeof value == 'string' || isSymbol(value)) {
              return value;
            }
            var result = value + '';
            return result == '0' && 1 / value == -INFINITY ? '-0' : result;
          }

          /**
           * Converts `func` to its source code.
           *
           * @private
           * @param {Function} func The function to process.
           * @returns {string} Returns the source code.
           */
          function toSource(func) {
            if (func != null) {
              try {
                return funcToString.call(func);
              } catch (e) {}
              try {
                return func + '';
              } catch (e) {}
            }
            return '';
          }

          /**
           * Creates an array of values by running each element in `collection` thru
           * `iteratee`. The iteratee is invoked with three arguments:
           * (value, index|key, collection).
           *
           * Many lodash methods are guarded to work as iteratees for methods like
           * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
           *
           * The guarded methods are:
           * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
           * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
           * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
           * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
           *
           * @static
           * @memberOf _
           * @since 0.1.0
           * @category Collection
           * @param {Array|Object} collection The collection to iterate over.
           * @param {Function} [iteratee=_.identity] The function invoked per iteration.
           * @returns {Array} Returns the new mapped array.
           * @example
           *
           * function square(n) {
           *   return n * n;
           * }
           *
           * _.map([4, 8], square);
           * // => [16, 64]
           *
           * _.map({ 'a': 4, 'b': 8 }, square);
           * // => [16, 64] (iteration order is not guaranteed)
           *
           * var users = [
           *   { 'user': 'barney' },
           *   { 'user': 'fred' }
           * ];
           *
           * // The `_.property` iteratee shorthand.
           * _.map(users, 'user');
           * // => ['barney', 'fred']
           */
          function map(collection, iteratee) {
            var func = isArray(collection) ? arrayMap : baseMap;
            return func(collection, baseIteratee(iteratee, 3));
          }

          /**
           * Creates a function that memoizes the result of `func`. If `resolver` is
           * provided, it determines the cache key for storing the result based on the
           * arguments provided to the memoized function. By default, the first argument
           * provided to the memoized function is used as the map cache key. The `func`
           * is invoked with the `this` binding of the memoized function.
           *
           * **Note:** The cache is exposed as the `cache` property on the memoized
           * function. Its creation may be customized by replacing the `_.memoize.Cache`
           * constructor with one whose instances implement the
           * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
           * method interface of `delete`, `get`, `has`, and `set`.
           *
           * @static
           * @memberOf _
           * @since 0.1.0
           * @category Function
           * @param {Function} func The function to have its output memoized.
           * @param {Function} [resolver] The function to resolve the cache key.
           * @returns {Function} Returns the new memoized function.
           * @example
           *
           * var object = { 'a': 1, 'b': 2 };
           * var other = { 'c': 3, 'd': 4 };
           *
           * var values = _.memoize(_.values);
           * values(object);
           * // => [1, 2]
           *
           * values(other);
           * // => [3, 4]
           *
           * object.a = 2;
           * values(object);
           * // => [1, 2]
           *
           * // Modify the result cache.
           * values.cache.set(object, ['a', 'b']);
           * values(object);
           * // => ['a', 'b']
           *
           * // Replace `_.memoize.Cache`.
           * _.memoize.Cache = WeakMap;
           */
          function memoize(func, resolver) {
            if (typeof func != 'function' || resolver && typeof resolver != 'function') {
              throw new TypeError(FUNC_ERROR_TEXT);
            }
            var memoized = function memoized() {
              var args = arguments,
                  key = resolver ? resolver.apply(this, args) : args[0],
                  cache = memoized.cache;

              if (cache.has(key)) {
                return cache.get(key);
              }
              var result = func.apply(this, args);
              memoized.cache = cache.set(key, result);
              return result;
            };
            memoized.cache = new (memoize.Cache || MapCache)();
            return memoized;
          }

          // Assign cache to `_.memoize`.
          memoize.Cache = MapCache;

          /**
           * Performs a
           * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
           * comparison between two values to determine if they are equivalent.
           *
           * @static
           * @memberOf _
           * @since 4.0.0
           * @category Lang
           * @param {*} value The value to compare.
           * @param {*} other The other value to compare.
           * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
           * @example
           *
           * var object = { 'a': 1 };
           * var other = { 'a': 1 };
           *
           * _.eq(object, object);
           * // => true
           *
           * _.eq(object, other);
           * // => false
           *
           * _.eq('a', 'a');
           * // => true
           *
           * _.eq('a', Object('a'));
           * // => false
           *
           * _.eq(NaN, NaN);
           * // => true
           */
          function eq(value, other) {
            return value === other || value !== value && other !== other;
          }

          /**
           * Checks if `value` is likely an `arguments` object.
           *
           * @static
           * @memberOf _
           * @since 0.1.0
           * @category Lang
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is an `arguments` object,
           *  else `false`.
           * @example
           *
           * _.isArguments(function() { return arguments; }());
           * // => true
           *
           * _.isArguments([1, 2, 3]);
           * // => false
           */
          function isArguments(value) {
            // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
            return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') && (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
          }

          /**
           * Checks if `value` is classified as an `Array` object.
           *
           * @static
           * @memberOf _
           * @since 0.1.0
           * @category Lang
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is an array, else `false`.
           * @example
           *
           * _.isArray([1, 2, 3]);
           * // => true
           *
           * _.isArray(document.body.children);
           * // => false
           *
           * _.isArray('abc');
           * // => false
           *
           * _.isArray(_.noop);
           * // => false
           */
          var isArray = Array.isArray;

          /**
           * Checks if `value` is array-like. A value is considered array-like if it's
           * not a function and has a `value.length` that's an integer greater than or
           * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
           *
           * @static
           * @memberOf _
           * @since 4.0.0
           * @category Lang
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
           * @example
           *
           * _.isArrayLike([1, 2, 3]);
           * // => true
           *
           * _.isArrayLike(document.body.children);
           * // => true
           *
           * _.isArrayLike('abc');
           * // => true
           *
           * _.isArrayLike(_.noop);
           * // => false
           */
          function isArrayLike(value) {
            return value != null && isLength(value.length) && !isFunction(value);
          }

          /**
           * This method is like `_.isArrayLike` except that it also checks if `value`
           * is an object.
           *
           * @static
           * @memberOf _
           * @since 4.0.0
           * @category Lang
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is an array-like object,
           *  else `false`.
           * @example
           *
           * _.isArrayLikeObject([1, 2, 3]);
           * // => true
           *
           * _.isArrayLikeObject(document.body.children);
           * // => true
           *
           * _.isArrayLikeObject('abc');
           * // => false
           *
           * _.isArrayLikeObject(_.noop);
           * // => false
           */
          function isArrayLikeObject(value) {
            return isObjectLike(value) && isArrayLike(value);
          }

          /**
           * Checks if `value` is classified as a `Function` object.
           *
           * @static
           * @memberOf _
           * @since 0.1.0
           * @category Lang
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is a function, else `false`.
           * @example
           *
           * _.isFunction(_);
           * // => true
           *
           * _.isFunction(/abc/);
           * // => false
           */
          function isFunction(value) {
            // The use of `Object#toString` avoids issues with the `typeof` operator
            // in Safari 8-9 which returns 'object' for typed array and other constructors.
            var tag = isObject(value) ? objectToString.call(value) : '';
            return tag == funcTag || tag == genTag;
          }

          /**
           * Checks if `value` is a valid array-like length.
           *
           * **Note:** This method is loosely based on
           * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
           *
           * @static
           * @memberOf _
           * @since 4.0.0
           * @category Lang
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
           * @example
           *
           * _.isLength(3);
           * // => true
           *
           * _.isLength(Number.MIN_VALUE);
           * // => false
           *
           * _.isLength(Infinity);
           * // => false
           *
           * _.isLength('3');
           * // => false
           */
          function isLength(value) {
            return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
          }

          /**
           * Checks if `value` is the
           * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
           * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
           *
           * @static
           * @memberOf _
           * @since 0.1.0
           * @category Lang
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is an object, else `false`.
           * @example
           *
           * _.isObject({});
           * // => true
           *
           * _.isObject([1, 2, 3]);
           * // => true
           *
           * _.isObject(_.noop);
           * // => true
           *
           * _.isObject(null);
           * // => false
           */
          function isObject(value) {
            var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
            return !!value && (type == 'object' || type == 'function');
          }

          /**
           * Checks if `value` is object-like. A value is object-like if it's not `null`
           * and has a `typeof` result of "object".
           *
           * @static
           * @memberOf _
           * @since 4.0.0
           * @category Lang
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
           * @example
           *
           * _.isObjectLike({});
           * // => true
           *
           * _.isObjectLike([1, 2, 3]);
           * // => true
           *
           * _.isObjectLike(_.noop);
           * // => false
           *
           * _.isObjectLike(null);
           * // => false
           */
          function isObjectLike(value) {
            return !!value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
          }

          /**
           * Checks if `value` is classified as a `Symbol` primitive or object.
           *
           * @static
           * @memberOf _
           * @since 4.0.0
           * @category Lang
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
           * @example
           *
           * _.isSymbol(Symbol.iterator);
           * // => true
           *
           * _.isSymbol('abc');
           * // => false
           */
          function isSymbol(value) {
            return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
          }

          /**
           * Checks if `value` is classified as a typed array.
           *
           * @static
           * @memberOf _
           * @since 3.0.0
           * @category Lang
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
           * @example
           *
           * _.isTypedArray(new Uint8Array);
           * // => true
           *
           * _.isTypedArray([]);
           * // => false
           */
          var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

          /**
           * Converts `value` to a string. An empty string is returned for `null`
           * and `undefined` values. The sign of `-0` is preserved.
           *
           * @static
           * @memberOf _
           * @since 4.0.0
           * @category Lang
           * @param {*} value The value to process.
           * @returns {string} Returns the string.
           * @example
           *
           * _.toString(null);
           * // => ''
           *
           * _.toString(-0);
           * // => '-0'
           *
           * _.toString([1, 2, 3]);
           * // => '1,2,3'
           */
          function toString(value) {
            return value == null ? '' : baseToString(value);
          }

          /**
           * Gets the value at `path` of `object`. If the resolved value is
           * `undefined`, the `defaultValue` is returned in its place.
           *
           * @static
           * @memberOf _
           * @since 3.7.0
           * @category Object
           * @param {Object} object The object to query.
           * @param {Array|string} path The path of the property to get.
           * @param {*} [defaultValue] The value returned for `undefined` resolved values.
           * @returns {*} Returns the resolved value.
           * @example
           *
           * var object = { 'a': [{ 'b': { 'c': 3 } }] };
           *
           * _.get(object, 'a[0].b.c');
           * // => 3
           *
           * _.get(object, ['a', '0', 'b', 'c']);
           * // => 3
           *
           * _.get(object, 'a.b.c', 'default');
           * // => 'default'
           */
          function get(object, path, defaultValue) {
            var result = object == null ? undefined : baseGet(object, path);
            return result === undefined ? defaultValue : result;
          }

          /**
           * Checks if `path` is a direct or inherited property of `object`.
           *
           * @static
           * @memberOf _
           * @since 4.0.0
           * @category Object
           * @param {Object} object The object to query.
           * @param {Array|string} path The path to check.
           * @returns {boolean} Returns `true` if `path` exists, else `false`.
           * @example
           *
           * var object = _.create({ 'a': _.create({ 'b': 2 }) });
           *
           * _.hasIn(object, 'a');
           * // => true
           *
           * _.hasIn(object, 'a.b');
           * // => true
           *
           * _.hasIn(object, ['a', 'b']);
           * // => true
           *
           * _.hasIn(object, 'b');
           * // => false
           */
          function hasIn(object, path) {
            return object != null && hasPath(object, path, baseHasIn);
          }

          /**
           * Creates an array of the own enumerable property names of `object`.
           *
           * **Note:** Non-object values are coerced to objects. See the
           * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
           * for more details.
           *
           * @static
           * @since 0.1.0
           * @memberOf _
           * @category Object
           * @param {Object} object The object to query.
           * @returns {Array} Returns the array of property names.
           * @example
           *
           * function Foo() {
           *   this.a = 1;
           *   this.b = 2;
           * }
           *
           * Foo.prototype.c = 3;
           *
           * _.keys(new Foo);
           * // => ['a', 'b'] (iteration order is not guaranteed)
           *
           * _.keys('hi');
           * // => ['0', '1']
           */
          function keys(object) {
            return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
          }

          /**
           * This method returns the first argument it receives.
           *
           * @static
           * @since 0.1.0
           * @memberOf _
           * @category Util
           * @param {*} value Any value.
           * @returns {*} Returns `value`.
           * @example
           *
           * var object = { 'a': 1 };
           *
           * console.log(_.identity(object) === object);
           * // => true
           */
          function identity(value) {
            return value;
          }

          /**
           * Creates a function that returns the value at `path` of a given object.
           *
           * @static
           * @memberOf _
           * @since 2.4.0
           * @category Util
           * @param {Array|string} path The path of the property to get.
           * @returns {Function} Returns the new accessor function.
           * @example
           *
           * var objects = [
           *   { 'a': { 'b': 2 } },
           *   { 'a': { 'b': 1 } }
           * ];
           *
           * _.map(objects, _.property('a.b'));
           * // => [2, 1]
           *
           * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
           * // => [1, 2]
           */
          function property(path) {
            return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
          }

          module.exports = map;

          /* WEBPACK VAR INJECTION */
        }).call(this, __webpack_require__( /*! ./../webpack/buildin/global.js */"./node_modules/webpack/buildin/global.js"), __webpack_require__( /*! ./../webpack/buildin/module.js */"./node_modules/webpack/buildin/module.js")(module));

        /***/
      },

      /***/"./node_modules/lodash.omit/index.js":
      /*!*******************************************!*\
        !*** ./node_modules/lodash.omit/index.js ***!
        \*******************************************/
      /*! no static exports found */
      /***/function node_modulesLodashOmitIndexJs(module, exports, __webpack_require__) {

        /* WEBPACK VAR INJECTION */(function (global) {
          /**
          * lodash (Custom Build) <https://lodash.com/>
          * Build: `lodash modularize exports="npm" -o ./`
          * Copyright jQuery Foundation and other contributors <https://jquery.org/>
          * Released under MIT license <https://lodash.com/license>
          * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
          * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
          */

          /** Used as the size to enable large array optimizations. */
          var LARGE_ARRAY_SIZE = 200;

          /** Used to stand-in for `undefined` hash values. */
          var HASH_UNDEFINED = '__lodash_hash_undefined__';

          /** Used as references for various `Number` constants. */
          var INFINITY = 1 / 0,
              MAX_SAFE_INTEGER = 9007199254740991;

          /** `Object#toString` result references. */
          var argsTag = '[object Arguments]',
              funcTag = '[object Function]',
              genTag = '[object GeneratorFunction]',
              symbolTag = '[object Symbol]';

          /**
           * Used to match `RegExp`
           * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
           */
          var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

          /** Used to detect host constructors (Safari). */
          var reIsHostCtor = /^\[object .+?Constructor\]$/;

          /** Used to detect unsigned integer values. */
          var reIsUint = /^(?:0|[1-9]\d*)$/;

          /** Detect free variable `global` from Node.js. */
          var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global && global.Object === Object && global;

          /** Detect free variable `self`. */
          var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self && self.Object === Object && self;

          /** Used as a reference to the global object. */
          var root = freeGlobal || freeSelf || Function('return this')();

          /**
           * A faster alternative to `Function#apply`, this function invokes `func`
           * with the `this` binding of `thisArg` and the arguments of `args`.
           *
           * @private
           * @param {Function} func The function to invoke.
           * @param {*} thisArg The `this` binding of `func`.
           * @param {Array} args The arguments to invoke `func` with.
           * @returns {*} Returns the result of `func`.
           */
          function apply(func, thisArg, args) {
            switch (args.length) {
              case 0:
                return func.call(thisArg);
              case 1:
                return func.call(thisArg, args[0]);
              case 2:
                return func.call(thisArg, args[0], args[1]);
              case 3:
                return func.call(thisArg, args[0], args[1], args[2]);
            }
            return func.apply(thisArg, args);
          }

          /**
           * A specialized version of `_.includes` for arrays without support for
           * specifying an index to search from.
           *
           * @private
           * @param {Array} [array] The array to inspect.
           * @param {*} target The value to search for.
           * @returns {boolean} Returns `true` if `target` is found, else `false`.
           */
          function arrayIncludes(array, value) {
            var length = array ? array.length : 0;
            return !!length && baseIndexOf(array, value, 0) > -1;
          }

          /**
           * This function is like `arrayIncludes` except that it accepts a comparator.
           *
           * @private
           * @param {Array} [array] The array to inspect.
           * @param {*} target The value to search for.
           * @param {Function} comparator The comparator invoked per element.
           * @returns {boolean} Returns `true` if `target` is found, else `false`.
           */
          function arrayIncludesWith(array, value, comparator) {
            var index = -1,
                length = array ? array.length : 0;

            while (++index < length) {
              if (comparator(value, array[index])) {
                return true;
              }
            }
            return false;
          }

          /**
           * A specialized version of `_.map` for arrays without support for iteratee
           * shorthands.
           *
           * @private
           * @param {Array} [array] The array to iterate over.
           * @param {Function} iteratee The function invoked per iteration.
           * @returns {Array} Returns the new mapped array.
           */
          function arrayMap(array, iteratee) {
            var index = -1,
                length = array ? array.length : 0,
                result = Array(length);

            while (++index < length) {
              result[index] = iteratee(array[index], index, array);
            }
            return result;
          }

          /**
           * Appends the elements of `values` to `array`.
           *
           * @private
           * @param {Array} array The array to modify.
           * @param {Array} values The values to append.
           * @returns {Array} Returns `array`.
           */
          function arrayPush(array, values) {
            var index = -1,
                length = values.length,
                offset = array.length;

            while (++index < length) {
              array[offset + index] = values[index];
            }
            return array;
          }

          /**
           * The base implementation of `_.findIndex` and `_.findLastIndex` without
           * support for iteratee shorthands.
           *
           * @private
           * @param {Array} array The array to inspect.
           * @param {Function} predicate The function invoked per iteration.
           * @param {number} fromIndex The index to search from.
           * @param {boolean} [fromRight] Specify iterating from right to left.
           * @returns {number} Returns the index of the matched value, else `-1`.
           */
          function baseFindIndex(array, predicate, fromIndex, fromRight) {
            var length = array.length,
                index = fromIndex + (fromRight ? 1 : -1);

            while (fromRight ? index-- : ++index < length) {
              if (predicate(array[index], index, array)) {
                return index;
              }
            }
            return -1;
          }

          /**
           * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
           *
           * @private
           * @param {Array} array The array to inspect.
           * @param {*} value The value to search for.
           * @param {number} fromIndex The index to search from.
           * @returns {number} Returns the index of the matched value, else `-1`.
           */
          function baseIndexOf(array, value, fromIndex) {
            if (value !== value) {
              return baseFindIndex(array, baseIsNaN, fromIndex);
            }
            var index = fromIndex - 1,
                length = array.length;

            while (++index < length) {
              if (array[index] === value) {
                return index;
              }
            }
            return -1;
          }

          /**
           * The base implementation of `_.isNaN` without support for number objects.
           *
           * @private
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
           */
          function baseIsNaN(value) {
            return value !== value;
          }

          /**
           * The base implementation of `_.times` without support for iteratee shorthands
           * or max array length checks.
           *
           * @private
           * @param {number} n The number of times to invoke `iteratee`.
           * @param {Function} iteratee The function invoked per iteration.
           * @returns {Array} Returns the array of results.
           */
          function baseTimes(n, iteratee) {
            var index = -1,
                result = Array(n);

            while (++index < n) {
              result[index] = iteratee(index);
            }
            return result;
          }

          /**
           * The base implementation of `_.unary` without support for storing metadata.
           *
           * @private
           * @param {Function} func The function to cap arguments for.
           * @returns {Function} Returns the new capped function.
           */
          function baseUnary(func) {
            return function (value) {
              return func(value);
            };
          }

          /**
           * Checks if a cache value for `key` exists.
           *
           * @private
           * @param {Object} cache The cache to query.
           * @param {string} key The key of the entry to check.
           * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
           */
          function cacheHas(cache, key) {
            return cache.has(key);
          }

          /**
           * Gets the value at `key` of `object`.
           *
           * @private
           * @param {Object} [object] The object to query.
           * @param {string} key The key of the property to get.
           * @returns {*} Returns the property value.
           */
          function getValue(object, key) {
            return object == null ? undefined : object[key];
          }

          /**
           * Checks if `value` is a host object in IE < 9.
           *
           * @private
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
           */
          function isHostObject(value) {
            // Many host objects are `Object` objects that can coerce to strings
            // despite having improperly defined `toString` methods.
            var result = false;
            if (value != null && typeof value.toString != 'function') {
              try {
                result = !!(value + '');
              } catch (e) {}
            }
            return result;
          }

          /**
           * Creates a unary function that invokes `func` with its argument transformed.
           *
           * @private
           * @param {Function} func The function to wrap.
           * @param {Function} transform The argument transform.
           * @returns {Function} Returns the new function.
           */
          function overArg(func, transform) {
            return function (arg) {
              return func(transform(arg));
            };
          }

          /** Used for built-in method references. */
          var arrayProto = Array.prototype,
              funcProto = Function.prototype,
              objectProto = Object.prototype;

          /** Used to detect overreaching core-js shims. */
          var coreJsData = root['__core-js_shared__'];

          /** Used to detect methods masquerading as native. */
          var maskSrcKey = function () {
            var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
            return uid ? 'Symbol(src)_1.' + uid : '';
          }();

          /** Used to resolve the decompiled source of functions. */
          var funcToString = funcProto.toString;

          /** Used to check objects for own properties. */
          var hasOwnProperty = objectProto.hasOwnProperty;

          /**
           * Used to resolve the
           * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
           * of values.
           */
          var objectToString = objectProto.toString;

          /** Used to detect if a method is native. */
          var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

          /** Built-in value references. */
          var _Symbol2 = root.Symbol,
              getPrototype = overArg(Object.getPrototypeOf, Object),
              propertyIsEnumerable = objectProto.propertyIsEnumerable,
              splice = arrayProto.splice,
              spreadableSymbol = _Symbol2 ? _Symbol2.isConcatSpreadable : undefined;

          /* Built-in method references for those with the same name as other `lodash` methods. */
          var nativeGetSymbols = Object.getOwnPropertySymbols,
              nativeMax = Math.max;

          /* Built-in method references that are verified to be native. */
          var Map = getNative(root, 'Map'),
              nativeCreate = getNative(Object, 'create');

          /**
           * Creates a hash object.
           *
           * @private
           * @constructor
           * @param {Array} [entries] The key-value pairs to cache.
           */
          function Hash(entries) {
            var index = -1,
                length = entries ? entries.length : 0;

            this.clear();
            while (++index < length) {
              var entry = entries[index];
              this.set(entry[0], entry[1]);
            }
          }

          /**
           * Removes all key-value entries from the hash.
           *
           * @private
           * @name clear
           * @memberOf Hash
           */
          function hashClear() {
            this.__data__ = nativeCreate ? nativeCreate(null) : {};
          }

          /**
           * Removes `key` and its value from the hash.
           *
           * @private
           * @name delete
           * @memberOf Hash
           * @param {Object} hash The hash to modify.
           * @param {string} key The key of the value to remove.
           * @returns {boolean} Returns `true` if the entry was removed, else `false`.
           */
          function hashDelete(key) {
            return this.has(key) && delete this.__data__[key];
          }

          /**
           * Gets the hash value for `key`.
           *
           * @private
           * @name get
           * @memberOf Hash
           * @param {string} key The key of the value to get.
           * @returns {*} Returns the entry value.
           */
          function hashGet(key) {
            var data = this.__data__;
            if (nativeCreate) {
              var result = data[key];
              return result === HASH_UNDEFINED ? undefined : result;
            }
            return hasOwnProperty.call(data, key) ? data[key] : undefined;
          }

          /**
           * Checks if a hash value for `key` exists.
           *
           * @private
           * @name has
           * @memberOf Hash
           * @param {string} key The key of the entry to check.
           * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
           */
          function hashHas(key) {
            var data = this.__data__;
            return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
          }

          /**
           * Sets the hash `key` to `value`.
           *
           * @private
           * @name set
           * @memberOf Hash
           * @param {string} key The key of the value to set.
           * @param {*} value The value to set.
           * @returns {Object} Returns the hash instance.
           */
          function hashSet(key, value) {
            var data = this.__data__;
            data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
            return this;
          }

          // Add methods to `Hash`.
          Hash.prototype.clear = hashClear;
          Hash.prototype['delete'] = hashDelete;
          Hash.prototype.get = hashGet;
          Hash.prototype.has = hashHas;
          Hash.prototype.set = hashSet;

          /**
           * Creates an list cache object.
           *
           * @private
           * @constructor
           * @param {Array} [entries] The key-value pairs to cache.
           */
          function ListCache(entries) {
            var index = -1,
                length = entries ? entries.length : 0;

            this.clear();
            while (++index < length) {
              var entry = entries[index];
              this.set(entry[0], entry[1]);
            }
          }

          /**
           * Removes all key-value entries from the list cache.
           *
           * @private
           * @name clear
           * @memberOf ListCache
           */
          function listCacheClear() {
            this.__data__ = [];
          }

          /**
           * Removes `key` and its value from the list cache.
           *
           * @private
           * @name delete
           * @memberOf ListCache
           * @param {string} key The key of the value to remove.
           * @returns {boolean} Returns `true` if the entry was removed, else `false`.
           */
          function listCacheDelete(key) {
            var data = this.__data__,
                index = assocIndexOf(data, key);

            if (index < 0) {
              return false;
            }
            var lastIndex = data.length - 1;
            if (index == lastIndex) {
              data.pop();
            } else {
              splice.call(data, index, 1);
            }
            return true;
          }

          /**
           * Gets the list cache value for `key`.
           *
           * @private
           * @name get
           * @memberOf ListCache
           * @param {string} key The key of the value to get.
           * @returns {*} Returns the entry value.
           */
          function listCacheGet(key) {
            var data = this.__data__,
                index = assocIndexOf(data, key);

            return index < 0 ? undefined : data[index][1];
          }

          /**
           * Checks if a list cache value for `key` exists.
           *
           * @private
           * @name has
           * @memberOf ListCache
           * @param {string} key The key of the entry to check.
           * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
           */
          function listCacheHas(key) {
            return assocIndexOf(this.__data__, key) > -1;
          }

          /**
           * Sets the list cache `key` to `value`.
           *
           * @private
           * @name set
           * @memberOf ListCache
           * @param {string} key The key of the value to set.
           * @param {*} value The value to set.
           * @returns {Object} Returns the list cache instance.
           */
          function listCacheSet(key, value) {
            var data = this.__data__,
                index = assocIndexOf(data, key);

            if (index < 0) {
              data.push([key, value]);
            } else {
              data[index][1] = value;
            }
            return this;
          }

          // Add methods to `ListCache`.
          ListCache.prototype.clear = listCacheClear;
          ListCache.prototype['delete'] = listCacheDelete;
          ListCache.prototype.get = listCacheGet;
          ListCache.prototype.has = listCacheHas;
          ListCache.prototype.set = listCacheSet;

          /**
           * Creates a map cache object to store key-value pairs.
           *
           * @private
           * @constructor
           * @param {Array} [entries] The key-value pairs to cache.
           */
          function MapCache(entries) {
            var index = -1,
                length = entries ? entries.length : 0;

            this.clear();
            while (++index < length) {
              var entry = entries[index];
              this.set(entry[0], entry[1]);
            }
          }

          /**
           * Removes all key-value entries from the map.
           *
           * @private
           * @name clear
           * @memberOf MapCache
           */
          function mapCacheClear() {
            this.__data__ = {
              'hash': new Hash(),
              'map': new (Map || ListCache)(),
              'string': new Hash()
            };
          }

          /**
           * Removes `key` and its value from the map.
           *
           * @private
           * @name delete
           * @memberOf MapCache
           * @param {string} key The key of the value to remove.
           * @returns {boolean} Returns `true` if the entry was removed, else `false`.
           */
          function mapCacheDelete(key) {
            return getMapData(this, key)['delete'](key);
          }

          /**
           * Gets the map value for `key`.
           *
           * @private
           * @name get
           * @memberOf MapCache
           * @param {string} key The key of the value to get.
           * @returns {*} Returns the entry value.
           */
          function mapCacheGet(key) {
            return getMapData(this, key).get(key);
          }

          /**
           * Checks if a map value for `key` exists.
           *
           * @private
           * @name has
           * @memberOf MapCache
           * @param {string} key The key of the entry to check.
           * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
           */
          function mapCacheHas(key) {
            return getMapData(this, key).has(key);
          }

          /**
           * Sets the map `key` to `value`.
           *
           * @private
           * @name set
           * @memberOf MapCache
           * @param {string} key The key of the value to set.
           * @param {*} value The value to set.
           * @returns {Object} Returns the map cache instance.
           */
          function mapCacheSet(key, value) {
            getMapData(this, key).set(key, value);
            return this;
          }

          // Add methods to `MapCache`.
          MapCache.prototype.clear = mapCacheClear;
          MapCache.prototype['delete'] = mapCacheDelete;
          MapCache.prototype.get = mapCacheGet;
          MapCache.prototype.has = mapCacheHas;
          MapCache.prototype.set = mapCacheSet;

          /**
           *
           * Creates an array cache object to store unique values.
           *
           * @private
           * @constructor
           * @param {Array} [values] The values to cache.
           */
          function SetCache(values) {
            var index = -1,
                length = values ? values.length : 0;

            this.__data__ = new MapCache();
            while (++index < length) {
              this.add(values[index]);
            }
          }

          /**
           * Adds `value` to the array cache.
           *
           * @private
           * @name add
           * @memberOf SetCache
           * @alias push
           * @param {*} value The value to cache.
           * @returns {Object} Returns the cache instance.
           */
          function setCacheAdd(value) {
            this.__data__.set(value, HASH_UNDEFINED);
            return this;
          }

          /**
           * Checks if `value` is in the array cache.
           *
           * @private
           * @name has
           * @memberOf SetCache
           * @param {*} value The value to search for.
           * @returns {number} Returns `true` if `value` is found, else `false`.
           */
          function setCacheHas(value) {
            return this.__data__.has(value);
          }

          // Add methods to `SetCache`.
          SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
          SetCache.prototype.has = setCacheHas;

          /**
           * Creates an array of the enumerable property names of the array-like `value`.
           *
           * @private
           * @param {*} value The value to query.
           * @param {boolean} inherited Specify returning inherited property names.
           * @returns {Array} Returns the array of property names.
           */
          function arrayLikeKeys(value, inherited) {
            // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
            // Safari 9 makes `arguments.length` enumerable in strict mode.
            var result = isArray(value) || isArguments(value) ? baseTimes(value.length, String) : [];

            var length = result.length,
                skipIndexes = !!length;

            for (var key in value) {
              if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
                result.push(key);
              }
            }
            return result;
          }

          /**
           * Gets the index at which the `key` is found in `array` of key-value pairs.
           *
           * @private
           * @param {Array} array The array to inspect.
           * @param {*} key The key to search for.
           * @returns {number} Returns the index of the matched value, else `-1`.
           */
          function assocIndexOf(array, key) {
            var length = array.length;
            while (length--) {
              if (eq(array[length][0], key)) {
                return length;
              }
            }
            return -1;
          }

          /**
           * The base implementation of methods like `_.difference` without support
           * for excluding multiple arrays or iteratee shorthands.
           *
           * @private
           * @param {Array} array The array to inspect.
           * @param {Array} values The values to exclude.
           * @param {Function} [iteratee] The iteratee invoked per element.
           * @param {Function} [comparator] The comparator invoked per element.
           * @returns {Array} Returns the new array of filtered values.
           */
          function baseDifference(array, values, iteratee, comparator) {
            var index = -1,
                includes = arrayIncludes,
                isCommon = true,
                length = array.length,
                result = [],
                valuesLength = values.length;

            if (!length) {
              return result;
            }
            if (iteratee) {
              values = arrayMap(values, baseUnary(iteratee));
            }
            if (comparator) {
              includes = arrayIncludesWith;
              isCommon = false;
            } else if (values.length >= LARGE_ARRAY_SIZE) {
              includes = cacheHas;
              isCommon = false;
              values = new SetCache(values);
            }
            outer: while (++index < length) {
              var value = array[index],
                  computed = iteratee ? iteratee(value) : value;

              value = comparator || value !== 0 ? value : 0;
              if (isCommon && computed === computed) {
                var valuesIndex = valuesLength;
                while (valuesIndex--) {
                  if (values[valuesIndex] === computed) {
                    continue outer;
                  }
                }
                result.push(value);
              } else if (!includes(values, computed, comparator)) {
                result.push(value);
              }
            }
            return result;
          }

          /**
           * The base implementation of `_.flatten` with support for restricting flattening.
           *
           * @private
           * @param {Array} array The array to flatten.
           * @param {number} depth The maximum recursion depth.
           * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
           * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
           * @param {Array} [result=[]] The initial result value.
           * @returns {Array} Returns the new flattened array.
           */
          function baseFlatten(array, depth, predicate, isStrict, result) {
            var index = -1,
                length = array.length;

            predicate || (predicate = isFlattenable);
            result || (result = []);

            while (++index < length) {
              var value = array[index];
              if (depth > 0 && predicate(value)) {
                if (depth > 1) {
                  // Recursively flatten arrays (susceptible to call stack limits).
                  baseFlatten(value, depth - 1, predicate, isStrict, result);
                } else {
                  arrayPush(result, value);
                }
              } else if (!isStrict) {
                result[result.length] = value;
              }
            }
            return result;
          }

          /**
           * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
           * `keysFunc` and `symbolsFunc` to get the enumerable property names and
           * symbols of `object`.
           *
           * @private
           * @param {Object} object The object to query.
           * @param {Function} keysFunc The function to get the keys of `object`.
           * @param {Function} symbolsFunc The function to get the symbols of `object`.
           * @returns {Array} Returns the array of property names and symbols.
           */
          function baseGetAllKeys(object, keysFunc, symbolsFunc) {
            var result = keysFunc(object);
            return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
          }

          /**
           * The base implementation of `_.isNative` without bad shim checks.
           *
           * @private
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is a native function,
           *  else `false`.
           */
          function baseIsNative(value) {
            if (!isObject(value) || isMasked(value)) {
              return false;
            }
            var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
            return pattern.test(toSource(value));
          }

          /**
           * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
           *
           * @private
           * @param {Object} object The object to query.
           * @returns {Array} Returns the array of property names.
           */
          function baseKeysIn(object) {
            if (!isObject(object)) {
              return nativeKeysIn(object);
            }
            var isProto = isPrototype(object),
                result = [];

            for (var key in object) {
              if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
                result.push(key);
              }
            }
            return result;
          }

          /**
           * The base implementation of `_.pick` without support for individual
           * property identifiers.
           *
           * @private
           * @param {Object} object The source object.
           * @param {string[]} props The property identifiers to pick.
           * @returns {Object} Returns the new object.
           */
          function basePick(object, props) {
            object = Object(object);
            return basePickBy(object, props, function (value, key) {
              return key in object;
            });
          }

          /**
           * The base implementation of  `_.pickBy` without support for iteratee shorthands.
           *
           * @private
           * @param {Object} object The source object.
           * @param {string[]} props The property identifiers to pick from.
           * @param {Function} predicate The function invoked per property.
           * @returns {Object} Returns the new object.
           */
          function basePickBy(object, props, predicate) {
            var index = -1,
                length = props.length,
                result = {};

            while (++index < length) {
              var key = props[index],
                  value = object[key];

              if (predicate(value, key)) {
                result[key] = value;
              }
            }
            return result;
          }

          /**
           * The base implementation of `_.rest` which doesn't validate or coerce arguments.
           *
           * @private
           * @param {Function} func The function to apply a rest parameter to.
           * @param {number} [start=func.length-1] The start position of the rest parameter.
           * @returns {Function} Returns the new function.
           */
          function baseRest(func, start) {
            start = nativeMax(start === undefined ? func.length - 1 : start, 0);
            return function () {
              var args = arguments,
                  index = -1,
                  length = nativeMax(args.length - start, 0),
                  array = Array(length);

              while (++index < length) {
                array[index] = args[start + index];
              }
              index = -1;
              var otherArgs = Array(start + 1);
              while (++index < start) {
                otherArgs[index] = args[index];
              }
              otherArgs[start] = array;
              return apply(func, this, otherArgs);
            };
          }

          /**
           * Creates an array of own and inherited enumerable property names and
           * symbols of `object`.
           *
           * @private
           * @param {Object} object The object to query.
           * @returns {Array} Returns the array of property names and symbols.
           */
          function getAllKeysIn(object) {
            return baseGetAllKeys(object, keysIn, getSymbolsIn);
          }

          /**
           * Gets the data for `map`.
           *
           * @private
           * @param {Object} map The map to query.
           * @param {string} key The reference key.
           * @returns {*} Returns the map data.
           */
          function getMapData(map, key) {
            var data = map.__data__;
            return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
          }

          /**
           * Gets the native function at `key` of `object`.
           *
           * @private
           * @param {Object} object The object to query.
           * @param {string} key The key of the method to get.
           * @returns {*} Returns the function if it's native, else `undefined`.
           */
          function getNative(object, key) {
            var value = getValue(object, key);
            return baseIsNative(value) ? value : undefined;
          }

          /**
           * Creates an array of the own enumerable symbol properties of `object`.
           *
           * @private
           * @param {Object} object The object to query.
           * @returns {Array} Returns the array of symbols.
           */
          var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

          /**
           * Creates an array of the own and inherited enumerable symbol properties
           * of `object`.
           *
           * @private
           * @param {Object} object The object to query.
           * @returns {Array} Returns the array of symbols.
           */
          var getSymbolsIn = !nativeGetSymbols ? stubArray : function (object) {
            var result = [];
            while (object) {
              arrayPush(result, getSymbols(object));
              object = getPrototype(object);
            }
            return result;
          };

          /**
           * Checks if `value` is a flattenable `arguments` object or array.
           *
           * @private
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
           */
          function isFlattenable(value) {
            return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
          }

          /**
           * Checks if `value` is a valid array-like index.
           *
           * @private
           * @param {*} value The value to check.
           * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
           * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
           */
          function isIndex(value, length) {
            length = length == null ? MAX_SAFE_INTEGER : length;
            return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
          }

          /**
           * Checks if `value` is suitable for use as unique object key.
           *
           * @private
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
           */
          function isKeyable(value) {
            var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
            return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
          }

          /**
           * Checks if `func` has its source masked.
           *
           * @private
           * @param {Function} func The function to check.
           * @returns {boolean} Returns `true` if `func` is masked, else `false`.
           */
          function isMasked(func) {
            return !!maskSrcKey && maskSrcKey in func;
          }

          /**
           * Checks if `value` is likely a prototype object.
           *
           * @private
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
           */
          function isPrototype(value) {
            var Ctor = value && value.constructor,
                proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;

            return value === proto;
          }

          /**
           * This function is like
           * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
           * except that it includes inherited enumerable properties.
           *
           * @private
           * @param {Object} object The object to query.
           * @returns {Array} Returns the array of property names.
           */
          function nativeKeysIn(object) {
            var result = [];
            if (object != null) {
              for (var key in Object(object)) {
                result.push(key);
              }
            }
            return result;
          }

          /**
           * Converts `value` to a string key if it's not a string or symbol.
           *
           * @private
           * @param {*} value The value to inspect.
           * @returns {string|symbol} Returns the key.
           */
          function toKey(value) {
            if (typeof value == 'string' || isSymbol(value)) {
              return value;
            }
            var result = value + '';
            return result == '0' && 1 / value == -INFINITY ? '-0' : result;
          }

          /**
           * Converts `func` to its source code.
           *
           * @private
           * @param {Function} func The function to process.
           * @returns {string} Returns the source code.
           */
          function toSource(func) {
            if (func != null) {
              try {
                return funcToString.call(func);
              } catch (e) {}
              try {
                return func + '';
              } catch (e) {}
            }
            return '';
          }

          /**
           * Performs a
           * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
           * comparison between two values to determine if they are equivalent.
           *
           * @static
           * @memberOf _
           * @since 4.0.0
           * @category Lang
           * @param {*} value The value to compare.
           * @param {*} other The other value to compare.
           * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
           * @example
           *
           * var object = { 'a': 1 };
           * var other = { 'a': 1 };
           *
           * _.eq(object, object);
           * // => true
           *
           * _.eq(object, other);
           * // => false
           *
           * _.eq('a', 'a');
           * // => true
           *
           * _.eq('a', Object('a'));
           * // => false
           *
           * _.eq(NaN, NaN);
           * // => true
           */
          function eq(value, other) {
            return value === other || value !== value && other !== other;
          }

          /**
           * Checks if `value` is likely an `arguments` object.
           *
           * @static
           * @memberOf _
           * @since 0.1.0
           * @category Lang
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is an `arguments` object,
           *  else `false`.
           * @example
           *
           * _.isArguments(function() { return arguments; }());
           * // => true
           *
           * _.isArguments([1, 2, 3]);
           * // => false
           */
          function isArguments(value) {
            // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
            return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') && (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
          }

          /**
           * Checks if `value` is classified as an `Array` object.
           *
           * @static
           * @memberOf _
           * @since 0.1.0
           * @category Lang
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is an array, else `false`.
           * @example
           *
           * _.isArray([1, 2, 3]);
           * // => true
           *
           * _.isArray(document.body.children);
           * // => false
           *
           * _.isArray('abc');
           * // => false
           *
           * _.isArray(_.noop);
           * // => false
           */
          var isArray = Array.isArray;

          /**
           * Checks if `value` is array-like. A value is considered array-like if it's
           * not a function and has a `value.length` that's an integer greater than or
           * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
           *
           * @static
           * @memberOf _
           * @since 4.0.0
           * @category Lang
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
           * @example
           *
           * _.isArrayLike([1, 2, 3]);
           * // => true
           *
           * _.isArrayLike(document.body.children);
           * // => true
           *
           * _.isArrayLike('abc');
           * // => true
           *
           * _.isArrayLike(_.noop);
           * // => false
           */
          function isArrayLike(value) {
            return value != null && isLength(value.length) && !isFunction(value);
          }

          /**
           * This method is like `_.isArrayLike` except that it also checks if `value`
           * is an object.
           *
           * @static
           * @memberOf _
           * @since 4.0.0
           * @category Lang
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is an array-like object,
           *  else `false`.
           * @example
           *
           * _.isArrayLikeObject([1, 2, 3]);
           * // => true
           *
           * _.isArrayLikeObject(document.body.children);
           * // => true
           *
           * _.isArrayLikeObject('abc');
           * // => false
           *
           * _.isArrayLikeObject(_.noop);
           * // => false
           */
          function isArrayLikeObject(value) {
            return isObjectLike(value) && isArrayLike(value);
          }

          /**
           * Checks if `value` is classified as a `Function` object.
           *
           * @static
           * @memberOf _
           * @since 0.1.0
           * @category Lang
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is a function, else `false`.
           * @example
           *
           * _.isFunction(_);
           * // => true
           *
           * _.isFunction(/abc/);
           * // => false
           */
          function isFunction(value) {
            // The use of `Object#toString` avoids issues with the `typeof` operator
            // in Safari 8-9 which returns 'object' for typed array and other constructors.
            var tag = isObject(value) ? objectToString.call(value) : '';
            return tag == funcTag || tag == genTag;
          }

          /**
           * Checks if `value` is a valid array-like length.
           *
           * **Note:** This method is loosely based on
           * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
           *
           * @static
           * @memberOf _
           * @since 4.0.0
           * @category Lang
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
           * @example
           *
           * _.isLength(3);
           * // => true
           *
           * _.isLength(Number.MIN_VALUE);
           * // => false
           *
           * _.isLength(Infinity);
           * // => false
           *
           * _.isLength('3');
           * // => false
           */
          function isLength(value) {
            return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
          }

          /**
           * Checks if `value` is the
           * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
           * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
           *
           * @static
           * @memberOf _
           * @since 0.1.0
           * @category Lang
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is an object, else `false`.
           * @example
           *
           * _.isObject({});
           * // => true
           *
           * _.isObject([1, 2, 3]);
           * // => true
           *
           * _.isObject(_.noop);
           * // => true
           *
           * _.isObject(null);
           * // => false
           */
          function isObject(value) {
            var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
            return !!value && (type == 'object' || type == 'function');
          }

          /**
           * Checks if `value` is object-like. A value is object-like if it's not `null`
           * and has a `typeof` result of "object".
           *
           * @static
           * @memberOf _
           * @since 4.0.0
           * @category Lang
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
           * @example
           *
           * _.isObjectLike({});
           * // => true
           *
           * _.isObjectLike([1, 2, 3]);
           * // => true
           *
           * _.isObjectLike(_.noop);
           * // => false
           *
           * _.isObjectLike(null);
           * // => false
           */
          function isObjectLike(value) {
            return !!value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
          }

          /**
           * Checks if `value` is classified as a `Symbol` primitive or object.
           *
           * @static
           * @memberOf _
           * @since 4.0.0
           * @category Lang
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
           * @example
           *
           * _.isSymbol(Symbol.iterator);
           * // => true
           *
           * _.isSymbol('abc');
           * // => false
           */
          function isSymbol(value) {
            return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
          }

          /**
           * Creates an array of the own and inherited enumerable property names of `object`.
           *
           * **Note:** Non-object values are coerced to objects.
           *
           * @static
           * @memberOf _
           * @since 3.0.0
           * @category Object
           * @param {Object} object The object to query.
           * @returns {Array} Returns the array of property names.
           * @example
           *
           * function Foo() {
           *   this.a = 1;
           *   this.b = 2;
           * }
           *
           * Foo.prototype.c = 3;
           *
           * _.keysIn(new Foo);
           * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
           */
          function keysIn(object) {
            return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
          }

          /**
           * The opposite of `_.pick`; this method creates an object composed of the
           * own and inherited enumerable string keyed properties of `object` that are
           * not omitted.
           *
           * @static
           * @since 0.1.0
           * @memberOf _
           * @category Object
           * @param {Object} object The source object.
           * @param {...(string|string[])} [props] The property identifiers to omit.
           * @returns {Object} Returns the new object.
           * @example
           *
           * var object = { 'a': 1, 'b': '2', 'c': 3 };
           *
           * _.omit(object, ['a', 'c']);
           * // => { 'b': '2' }
           */
          var omit = baseRest(function (object, props) {
            if (object == null) {
              return {};
            }
            props = arrayMap(baseFlatten(props, 1), toKey);
            return basePick(object, baseDifference(getAllKeysIn(object), props));
          });

          /**
           * This method returns a new empty array.
           *
           * @static
           * @memberOf _
           * @since 4.13.0
           * @category Util
           * @returns {Array} Returns the new empty array.
           * @example
           *
           * var arrays = _.times(2, _.stubArray);
           *
           * console.log(arrays);
           * // => [[], []]
           *
           * console.log(arrays[0] === arrays[1]);
           * // => false
           */
          function stubArray() {
            return [];
          }

          module.exports = omit;

          /* WEBPACK VAR INJECTION */
        }).call(this, __webpack_require__( /*! ./../webpack/buildin/global.js */"./node_modules/webpack/buildin/global.js"));

        /***/
      },

      /***/"./node_modules/material-colors/dist/colors.js":
      /*!*****************************************************!*\
        !*** ./node_modules/material-colors/dist/colors.js ***!
        \*****************************************************/
      /*! no static exports found */
      /***/function node_modulesMaterialColorsDistColorsJs(module, exports, __webpack_require__) {

        var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
          if (true) {
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          } else {}
        })(this, function () {
          return { "red": { "50": "#ffebee", "100": "#ffcdd2", "200": "#ef9a9a", "300": "#e57373", "400": "#ef5350", "500": "#f44336", "600": "#e53935", "700": "#d32f2f", "800": "#c62828", "900": "#b71c1c", "a100": "#ff8a80", "a200": "#ff5252", "a400": "#ff1744", "a700": "#d50000" }, "pink": { "50": "#fce4ec", "100": "#f8bbd0", "200": "#f48fb1", "300": "#f06292", "400": "#ec407a", "500": "#e91e63", "600": "#d81b60", "700": "#c2185b", "800": "#ad1457", "900": "#880e4f", "a100": "#ff80ab", "a200": "#ff4081", "a400": "#f50057", "a700": "#c51162" }, "purple": { "50": "#f3e5f5", "100": "#e1bee7", "200": "#ce93d8", "300": "#ba68c8", "400": "#ab47bc", "500": "#9c27b0", "600": "#8e24aa", "700": "#7b1fa2", "800": "#6a1b9a", "900": "#4a148c", "a100": "#ea80fc", "a200": "#e040fb", "a400": "#d500f9", "a700": "#aa00ff" }, "deepPurple": { "50": "#ede7f6", "100": "#d1c4e9", "200": "#b39ddb", "300": "#9575cd", "400": "#7e57c2", "500": "#673ab7", "600": "#5e35b1", "700": "#512da8", "800": "#4527a0", "900": "#311b92", "a100": "#b388ff", "a200": "#7c4dff", "a400": "#651fff", "a700": "#6200ea" }, "indigo": { "50": "#e8eaf6", "100": "#c5cae9", "200": "#9fa8da", "300": "#7986cb", "400": "#5c6bc0", "500": "#3f51b5", "600": "#3949ab", "700": "#303f9f", "800": "#283593", "900": "#1a237e", "a100": "#8c9eff", "a200": "#536dfe", "a400": "#3d5afe", "a700": "#304ffe" }, "blue": { "50": "#e3f2fd", "100": "#bbdefb", "200": "#90caf9", "300": "#64b5f6", "400": "#42a5f5", "500": "#2196f3", "600": "#1e88e5", "700": "#1976d2", "800": "#1565c0", "900": "#0d47a1", "a100": "#82b1ff", "a200": "#448aff", "a400": "#2979ff", "a700": "#2962ff" }, "lightBlue": { "50": "#e1f5fe", "100": "#b3e5fc", "200": "#81d4fa", "300": "#4fc3f7", "400": "#29b6f6", "500": "#03a9f4", "600": "#039be5", "700": "#0288d1", "800": "#0277bd", "900": "#01579b", "a100": "#80d8ff", "a200": "#40c4ff", "a400": "#00b0ff", "a700": "#0091ea" }, "cyan": { "50": "#e0f7fa", "100": "#b2ebf2", "200": "#80deea", "300": "#4dd0e1", "400": "#26c6da", "500": "#00bcd4", "600": "#00acc1", "700": "#0097a7", "800": "#00838f", "900": "#006064", "a100": "#84ffff", "a200": "#18ffff", "a400": "#00e5ff", "a700": "#00b8d4" }, "teal": { "50": "#e0f2f1", "100": "#b2dfdb", "200": "#80cbc4", "300": "#4db6ac", "400": "#26a69a", "500": "#009688", "600": "#00897b", "700": "#00796b", "800": "#00695c", "900": "#004d40", "a100": "#a7ffeb", "a200": "#64ffda", "a400": "#1de9b6", "a700": "#00bfa5" }, "green": { "50": "#e8f5e9", "100": "#c8e6c9", "200": "#a5d6a7", "300": "#81c784", "400": "#66bb6a", "500": "#4caf50", "600": "#43a047", "700": "#388e3c", "800": "#2e7d32", "900": "#1b5e20", "a100": "#b9f6ca", "a200": "#69f0ae", "a400": "#00e676", "a700": "#00c853" }, "lightGreen": { "50": "#f1f8e9", "100": "#dcedc8", "200": "#c5e1a5", "300": "#aed581", "400": "#9ccc65", "500": "#8bc34a", "600": "#7cb342", "700": "#689f38", "800": "#558b2f", "900": "#33691e", "a100": "#ccff90", "a200": "#b2ff59", "a400": "#76ff03", "a700": "#64dd17" }, "lime": { "50": "#f9fbe7", "100": "#f0f4c3", "200": "#e6ee9c", "300": "#dce775", "400": "#d4e157", "500": "#cddc39", "600": "#c0ca33", "700": "#afb42b", "800": "#9e9d24", "900": "#827717", "a100": "#f4ff81", "a200": "#eeff41", "a400": "#c6ff00", "a700": "#aeea00" }, "yellow": { "50": "#fffde7", "100": "#fff9c4", "200": "#fff59d", "300": "#fff176", "400": "#ffee58", "500": "#ffeb3b", "600": "#fdd835", "700": "#fbc02d", "800": "#f9a825", "900": "#f57f17", "a100": "#ffff8d", "a200": "#ffff00", "a400": "#ffea00", "a700": "#ffd600" }, "amber": { "50": "#fff8e1", "100": "#ffecb3", "200": "#ffe082", "300": "#ffd54f", "400": "#ffca28", "500": "#ffc107", "600": "#ffb300", "700": "#ffa000", "800": "#ff8f00", "900": "#ff6f00", "a100": "#ffe57f", "a200": "#ffd740", "a400": "#ffc400", "a700": "#ffab00" }, "orange": { "50": "#fff3e0", "100": "#ffe0b2", "200": "#ffcc80", "300": "#ffb74d", "400": "#ffa726", "500": "#ff9800", "600": "#fb8c00", "700": "#f57c00", "800": "#ef6c00", "900": "#e65100", "a100": "#ffd180", "a200": "#ffab40", "a400": "#ff9100", "a700": "#ff6d00" }, "deepOrange": { "50": "#fbe9e7", "100": "#ffccbc", "200": "#ffab91", "300": "#ff8a65", "400": "#ff7043", "500": "#ff5722", "600": "#f4511e", "700": "#e64a19", "800": "#d84315", "900": "#bf360c", "a100": "#ff9e80", "a200": "#ff6e40", "a400": "#ff3d00", "a700": "#dd2c00" }, "brown": { "50": "#efebe9", "100": "#d7ccc8", "200": "#bcaaa4", "300": "#a1887f", "400": "#8d6e63", "500": "#795548", "600": "#6d4c41", "700": "#5d4037", "800": "#4e342e", "900": "#3e2723" }, "grey": { "50": "#fafafa", "100": "#f5f5f5", "200": "#eeeeee", "300": "#e0e0e0", "400": "#bdbdbd", "500": "#9e9e9e", "600": "#757575", "700": "#616161", "800": "#424242", "900": "#212121" }, "blueGrey": { "50": "#eceff1", "100": "#cfd8dc", "200": "#b0bec5", "300": "#90a4ae", "400": "#78909c", "500": "#607d8b", "600": "#546e7a", "700": "#455a64", "800": "#37474f", "900": "#263238" }, "darkText": { "primary": "rgba(0, 0, 0, 0.87)", "secondary": "rgba(0, 0, 0, 0.54)", "disabled": "rgba(0, 0, 0, 0.38)", "dividers": "rgba(0, 0, 0, 0.12)" }, "lightText": { "primary": "rgba(255, 255, 255, 1)", "secondary": "rgba(255, 255, 255, 0.7)", "disabled": "rgba(255, 255, 255, 0.5)", "dividers": "rgba(255, 255, 255, 0.12)" }, "darkIcons": { "active": "rgba(0, 0, 0, 0.54)", "inactive": "rgba(0, 0, 0, 0.38)" }, "lightIcons": { "active": "rgba(255, 255, 255, 1)", "inactive": "rgba(255, 255, 255, 0.5)" }, "white": "#ffffff", "black": "#000000" };
        });

        /***/
      },

      /***/"./node_modules/space-lift/es/array/fromArrayLike.js":
      /*!***********************************************************!*\
        !*** ./node_modules/space-lift/es/array/fromArrayLike.js ***!
        \***********************************************************/
      /*! exports provided: fromArrayLike */
      /***/function node_modulesSpaceLiftEsArrayFromArrayLikeJs(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "fromArrayLike", function () {
          return fromArrayLike;
        });
        /* harmony import */var _lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ../lift */"./node_modules/space-lift/es/lift.js");

        /**
         * Converts an Array-like object (such as an arguments or NodeList instance) to a regular Array
         */
        function fromArrayLike(arrayLike) {
          return new _lift__WEBPACK_IMPORTED_MODULE_0__["ArrayOps"]([].slice.call(arrayLike));
        }

        /***/
      },

      /***/"./node_modules/space-lift/es/array/range.js":
      /*!***************************************************!*\
        !*** ./node_modules/space-lift/es/array/range.js ***!
        \***************************************************/
      /*! exports provided: range */
      /***/function node_modulesSpaceLiftEsArrayRangeJs(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "range", function () {
          return range;
        });
        /* harmony import */var _lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ../lift */"./node_modules/space-lift/es/lift.js");

        /*
        * Returns a number[] wrapper with all numbers from start to stop (inclusive),
        * incremented or decremented by step.
        */
        function range(start, stop, step) {
          if (arguments.length === 1) {
            stop = arguments[0] - 1;
            start = 0;
          }
          step = step || 1;
          var result = [];
          var increasing = step > 0;
          var next = start;
          while (increasing && next <= stop || !increasing && next >= stop) {
            result.push(next);
            next = next + step;
          }
          return new _lift__WEBPACK_IMPORTED_MODULE_0__["ArrayOps"](result);
        }

        /***/
      },

      /***/"./node_modules/space-lift/es/array/tuple.js":
      /*!***************************************************!*\
        !*** ./node_modules/space-lift/es/array/tuple.js ***!
        \***************************************************/
      /*! exports provided: tuple */
      /***/function node_modulesSpaceLiftEsArrayTupleJs(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "tuple", function () {
          return tuple;
        });
        function tuple(arr) {
          return arr;
        }

        /***/
      },

      /***/"./node_modules/space-lift/es/function/memoize.js":
      /*!********************************************************!*\
        !*** ./node_modules/space-lift/es/function/memoize.js ***!
        \********************************************************/
      /*! exports provided: memoize */
      /***/function node_modulesSpaceLiftEsFunctionMemoizeJs(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "memoize", function () {
          return memoize;
        });
        /* harmony import */var _object_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ../object/is */"./node_modules/space-lift/es/object/is.js");

        var currentMemoId = 0;
        /**
         * Memoizes a function of arbitrary arity.
         * This has two main uses:
         *   1) Reducing the CPU time taken by expensive calculations at the cost of some memory overhead
         *   2) Producing stable references for a given set of arguments. Useful when relying on reference equality.
         *
         * Memoized functions keep internal state. If you wish to clear that state entirely, you can recreate the function.
         */
        function memoize(fun, options) {
          // The unique property name used by this memoize function instance.
          // This is used to store the id/reference of object arguments, as Weak maps/sets are very limited.
          var memoKey = "__memo__" + currentMemoId++;
          var lastArgKeys = [];
          var cacheSize = options && options.cacheSize || 30;
          var keyFunction = options && options.key;
          // The unique ids/references of objects inside the arityNCache cache
          var objId = 0;
          var arity0Cache;
          var arityNCache;
          var keyCache;
          return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }
            // 0 arguments edge-case
            if (args.length === 0) {
              if (!arity0Cache) arity0Cache = fun();
              return arity0Cache;
            }
            // custom key function
            else if (keyFunction) {
                keyCache = keyCache || {};
                var key = keyFunction.apply(null, args);
                var result = keyCache[key];
                if (!result) {
                  lastArgKeys.push(key);
                  limitCacheSize(keyCache, lastArgKeys, cacheSize);
                  result = keyCache[key] = fun.apply(null, args);
                }
                return result;
              }
              // N arguments
              else {
                  arityNCache = arityNCache || {};
                  var key = '';
                  for (var i = 0; i < args.length; i++) {
                    var arg = args[i];
                    var argKey = void 0;
                    if (Object(_object_is__WEBPACK_IMPORTED_MODULE_0__["object"])(arg)) {
                      argKey = arg[memoKey];
                      if (!argKey) {
                        // Non enumerable
                        Object.defineProperty(arg, memoKey, { value: "obj" + objId++ });
                        argKey = arg[memoKey];
                      }
                    } else {
                      argKey = arg;
                    }
                    key += argKey + '_';
                  }
                  var result = arityNCache[key];
                  if (!result) {
                    lastArgKeys.push(key);
                    limitCacheSize(arityNCache, lastArgKeys, cacheSize);
                    result = arityNCache[key] = fun.apply(null, args);
                  }
                  return result;
                }
          };
        }
        function limitCacheSize(cache, lastArgKeys, size) {
          if (lastArgKeys.length === size + 1) {
            var key = lastArgKeys.shift();
            delete cache[key];
          }
        }

        /***/
      },

      /***/"./node_modules/space-lift/es/index.js":
      /*!*********************************************!*\
        !*** ./node_modules/space-lift/es/index.js ***!
        \*********************************************/
      /*! exports provided: default, ArrayOps, ObjectOps, NumberOps, StringOps, DateOps, getValue, update, deepUpdate, DELETE, Option, None, Some, Result, Ok, Err, range, fromArrayLike, tuple, Set, memoize, is */
      /***/function node_modulesSpaceLiftEsIndexJs(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "is", function () {
          return is;
        });
        /* harmony import */var _lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./lift */"./node_modules/space-lift/es/lift.js");
        /* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__, "ArrayOps", function () {
          return _lift__WEBPACK_IMPORTED_MODULE_0__["ArrayOps"];
        });

        /* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__, "ObjectOps", function () {
          return _lift__WEBPACK_IMPORTED_MODULE_0__["ObjectOps"];
        });

        /* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__, "NumberOps", function () {
          return _lift__WEBPACK_IMPORTED_MODULE_0__["NumberOps"];
        });

        /* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__, "StringOps", function () {
          return _lift__WEBPACK_IMPORTED_MODULE_0__["StringOps"];
        });

        /* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__, "DateOps", function () {
          return _lift__WEBPACK_IMPORTED_MODULE_0__["DateOps"];
        });

        /* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__, "getValue", function () {
          return _lift__WEBPACK_IMPORTED_MODULE_0__["getValue"];
        });

        /* harmony import */var immupdate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! immupdate */"./node_modules/immupdate/es/immupdate.js");
        /* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__, "update", function () {
          return immupdate__WEBPACK_IMPORTED_MODULE_1__["update"];
        });

        /* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__, "deepUpdate", function () {
          return immupdate__WEBPACK_IMPORTED_MODULE_1__["deepUpdate"];
        });

        /* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__, "DELETE", function () {
          return immupdate__WEBPACK_IMPORTED_MODULE_1__["DELETE"];
        });

        /* harmony import */var _option__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./option */"./node_modules/space-lift/es/option/index.js");
        /* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__, "Option", function () {
          return _option__WEBPACK_IMPORTED_MODULE_2__["Option"];
        });

        /* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__, "None", function () {
          return _option__WEBPACK_IMPORTED_MODULE_2__["None"];
        });

        /* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__, "Some", function () {
          return _option__WEBPACK_IMPORTED_MODULE_2__["Some"];
        });

        /* harmony import */var _result__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./result */"./node_modules/space-lift/es/result/index.js");
        /* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__, "Result", function () {
          return _result__WEBPACK_IMPORTED_MODULE_3__["Result"];
        });

        /* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__, "Ok", function () {
          return _result__WEBPACK_IMPORTED_MODULE_3__["Ok"];
        });

        /* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__, "Err", function () {
          return _result__WEBPACK_IMPORTED_MODULE_3__["Err"];
        });

        /* harmony import */var _array_range__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./array/range */"./node_modules/space-lift/es/array/range.js");
        /* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__, "range", function () {
          return _array_range__WEBPACK_IMPORTED_MODULE_4__["range"];
        });

        /* harmony import */var _array_fromArrayLike__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./array/fromArrayLike */"./node_modules/space-lift/es/array/fromArrayLike.js");
        /* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__, "fromArrayLike", function () {
          return _array_fromArrayLike__WEBPACK_IMPORTED_MODULE_5__["fromArrayLike"];
        });

        /* harmony import */var _array_tuple__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./array/tuple */"./node_modules/space-lift/es/array/tuple.js");
        /* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__, "tuple", function () {
          return _array_tuple__WEBPACK_IMPORTED_MODULE_6__["tuple"];
        });

        /* harmony import */var _object_set__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./object/set */"./node_modules/space-lift/es/object/set.js");
        /* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__, "Set", function () {
          return _object_set__WEBPACK_IMPORTED_MODULE_7__["Set"];
        });

        /* harmony import */var _function_memoize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ./function/memoize */"./node_modules/space-lift/es/function/memoize.js");
        /* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__, "memoize", function () {
          return _function_memoize__WEBPACK_IMPORTED_MODULE_8__["memoize"];
        });

        /* harmony import */var _object_is__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ./object/is */"./node_modules/space-lift/es/object/is.js");

        /* harmony default export */__webpack_exports__["default"] = _lift__WEBPACK_IMPORTED_MODULE_0__["default"];

        var is = _object_is__WEBPACK_IMPORTED_MODULE_9__;

        /***/
      },

      /***/"./node_modules/space-lift/es/lift.js":
      /*!********************************************!*\
        !*** ./node_modules/space-lift/es/lift.js ***!
        \********************************************/
      /*! exports provided: default, getValue, ArrayOps, ObjectOps, NumberOps, StringOps, DateOps */
      /***/function node_modulesSpaceLiftEsLiftJs(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "getValue", function () {
          return getValue;
        });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "ArrayOps", function () {
          return ArrayOps;
        });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "ObjectOps", function () {
          return ObjectOps;
        });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "NumberOps", function () {
          return NumberOps;
        });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "StringOps", function () {
          return StringOps;
        });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "DateOps", function () {
          return DateOps;
        });
        var lift = function lift(obj) {
          if (obj instanceof Array) return new ArrayOps(obj);
          if (obj instanceof Date) return new DateOps(obj);
          if (typeof obj === 'string') return new StringOps(obj);
          if (typeof obj === 'number') return new NumberOps(obj);
          return new ObjectOps(obj);
        };
        /* harmony default export */__webpack_exports__["default"] = lift;
        function getValue(input) {
          return input && input['_isLiftWrapper'] ? input.value() : input;
        }
        function makeOps() {
          var Ops = /** @class */function () {
            function Ops(_value) {
              this._value = _value;
              this._isLiftWrapper = true;
            }
            Ops.prototype.value = function () {
              return this._value;
            };
            return Ops;
          }();
          return Ops;
        }
        var ArrayOps = makeOps();
        var ObjectOps = makeOps();
        var NumberOps = makeOps();
        var StringOps = makeOps();
        var DateOps = makeOps();

        /***/
      },

      /***/"./node_modules/space-lift/es/object/is.js":
      /*!*************************************************!*\
        !*** ./node_modules/space-lift/es/object/is.js ***!
        \*************************************************/
      /*! exports provided: array, func, string, number, boolean, object */
      /***/function node_modulesSpaceLiftEsObjectIsJs(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "array", function () {
          return array;
        });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "func", function () {
          return func;
        });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "string", function () {
          return string;
        });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "number", function () {
          return number;
        });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "boolean", function () {
          return boolean;
        });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "object", function () {
          return object;
        });
        /** Returns whether an object is an Array */
        var array = Array.isArray;
        /** Returns whether this object is a function */
        function func(obj) {
          return typeof obj === 'function';
        }
        /** Returns whether this object is a string */
        function string(obj) {
          return typeof obj === 'string';
        }
        /** Returns whether this object is a number */
        function number(obj) {
          return typeof obj === 'number';
        }
        /** Returns whether this object is a boolean */
        function boolean(obj) {
          return typeof obj === 'boolean';
        }
        /** Returns whether this value is an object (e.g not a primitive: dates, arrays, functions, objects, regexes, `new Number(0)`, and `new String('')) */
        function object(obj) {
          var type = typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
          return type == 'object' || type == 'function';
        }

        /***/
      },

      /***/"./node_modules/space-lift/es/object/set.js":
      /*!**************************************************!*\
        !*** ./node_modules/space-lift/es/object/set.js ***!
        \**************************************************/
      /*! exports provided: Set */
      /***/function node_modulesSpaceLiftEsObjectSetJs(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "Set", function () {
          return Set;
        });
        /* harmony import */var _lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ../lift */"./node_modules/space-lift/es/lift.js");

        /**
         * Creates a Set-like object (string keys, true values) from a list of keys
         */
        function Set() {
          var keys = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            keys[_i] = arguments[_i];
          }
          var result = {};
          keys.forEach(function (key) {
            return result[key] = true;
          });
          return new _lift__WEBPACK_IMPORTED_MODULE_0__["ObjectOps"](result);
        }

        /***/
      },

      /***/"./node_modules/space-lift/es/option/index.js":
      /*!****************************************************!*\
        !*** ./node_modules/space-lift/es/option/index.js ***!
        \****************************************************/
      /*! exports provided: Option, Some, None */
      /***/function node_modulesSpaceLiftEsOptionIndexJs(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "Option", function () {
          return Option;
        });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "Some", function () {
          return Some;
        });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "None", function () {
          return None;
        });
        /* harmony import */var _lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ../lift */"./node_modules/space-lift/es/lift.js");

        // The Option factory / static object
        var OptionObject = function OptionObject(value) {
          return isDef(value) ? Some(value) : None;
        };
        OptionObject.all = function (arr) {
          var values = [];
          for (var i = 0; i < arr.length; i++) {
            var value = arr[i];
            if (Option.isOption(value)) value = value.get();
            if (!isDef(value)) return None;
            values.push(value);
          }
          return Some(values);
        };
        OptionObject.isOption = function (value) {
          return !!value && (value.type === 'some' || value.type === 'none');
        };
        function makeNone() {
          var self = {};
          function returnNone() {
            return None;
          }
          self.type = 'none';
          self.get = function () {
            return undefined;
          };
          self.isDefined = function () {
            return false;
          };
          self.forEach = function () {};
          self.map = returnNone;
          self.flatMap = returnNone;
          self.filter = returnNone;
          self.fold = function (ifEmpty) {
            return ifEmpty();
          };
          self.orElse = function (alt) {
            return alt();
          };
          self.getOrElse = function (alt) {
            return alt;
          };
          self.toArray = function () {
            return Object(_lift__WEBPACK_IMPORTED_MODULE_0__["default"])([]);
          };
          self.toString = function () {
            return 'None';
          };
          self.toJSON = function () {
            return null;
          };
          return self;
        }
        function _Some(value) {
          this.value = value;
        }
        _Some.prototype = {
          type: 'some',
          get: function get() {
            return this.value;
          },
          isDefined: function isDefined() {
            return true;
          },
          forEach: function forEach(fn) {
            fn(this.value);
          },
          map: function map(fn) {
            return Option(Object(_lift__WEBPACK_IMPORTED_MODULE_0__["getValue"])(fn(this.value)));
          },
          flatMap: function flatMap(fn) {
            return fn(this.value);
          },
          filter: function filter(fn) {
            return fn(this.value) ? this : None;
          },
          fold: function fold(ifEmpty, ifDefined) {
            return ifDefined(this.value);
          },
          orElse: function orElse() {
            return this;
          },
          getOrElse: function getOrElse() {
            return this.value;
          },
          toArray: function toArray() {
            return Object(_lift__WEBPACK_IMPORTED_MODULE_0__["default"])([this.value]);
          },
          toString: function toString() {
            return "Some(" + this.value + ")";
          },
          toJSON: function toJSON() {
            return this.value;
          }
        };
        function isDef(value) {
          return value !== null && value !== undefined;
        }
        var Option = OptionObject;
        /** Creates a new Some instance using a non nullable value */
        // extends {} to prevent null and undefined being passed
        function Some(value) {
          return new _Some(value);
        }
        var None = makeNone();

        /***/
      },

      /***/"./node_modules/space-lift/es/result/index.js":
      /*!****************************************************!*\
        !*** ./node_modules/space-lift/es/result/index.js ***!
        \****************************************************/
      /*! exports provided: Result, Ok, Err */
      /***/function node_modulesSpaceLiftEsResultIndexJs(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "Result", function () {
          return Result;
        });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "Ok", function () {
          return Ok;
        });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "Err", function () {
          return Err;
        });
        /* harmony import */var _lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ../lift */"./node_modules/space-lift/es/lift.js");

        var ResultObject = {};
        ResultObject.all = function (arr) {
          var okValues = [];
          var currentResult;
          for (var i = 0; i < arr.length; i++) {
            var currentResult_1 = arr[i];
            if (!currentResult_1.isOk()) return currentResult_1;
            okValues.push(currentResult_1.get());
          }
          return Ok(okValues);
        };
        ResultObject.isResult = function (value) {
          return !!value && (value.type === 'ok' || value.type === 'err');
        };
        function _Ok(value) {
          this._value = value;
        }
        _Ok.prototype = {
          type: 'ok',
          isOk: function isOk() {
            return true;
          },
          map: function map(fn) {
            return Ok(Object(_lift__WEBPACK_IMPORTED_MODULE_0__["getValue"])(fn(this._value)));
          },
          mapError: function mapError(fn) {
            return this;
          },
          flatMap: function flatMap(fn) {
            return fn(this._value);
          },
          fold: function fold(ifErr, ifOk) {
            return ifOk(this._value);
          },
          toString: function toString() {
            return "Ok(" + this._value + ")";
          },
          get: function get() {
            return this._value;
          }
        };
        function _Err(error) {
          this._error = error;
        }
        _Err.prototype = {
          type: 'err',
          isOk: function isOk() {
            return false;
          },
          map: function map(fn) {
            return this;
          },
          mapError: function mapError(fn) {
            return Err(fn(this._error));
          },
          flatMap: function flatMap(fn) {
            return this;
          },
          fold: function fold(ifErr, ifOk) {
            return ifErr(this._error);
          },
          toString: function toString() {
            return "Err(" + this._error + ")";
          },
          get: function get() {
            return this._error;
          }
        };
        var Result = ResultObject;
        function Ok(value) {
          return new _Ok(value);
        }
        function Err(error) {
          return new _Err(error);
        }

        /***/
      },

      /***/"./node_modules/style-loader/lib/addStyles.js":
      /*!****************************************************!*\
        !*** ./node_modules/style-loader/lib/addStyles.js ***!
        \****************************************************/
      /*! no static exports found */
      /***/function node_modulesStyleLoaderLibAddStylesJs(module, exports, __webpack_require__) {

        /*
        	MIT License http://www.opensource.org/licenses/mit-license.php
        	Author Tobias Koppers @sokra
        */

        var stylesInDom = {};

        var memoize = function memoize(fn) {
          var memo;

          return function () {
            if (typeof memo === "undefined") memo = fn.apply(this, arguments);
            return memo;
          };
        };

        var isOldIE = memoize(function () {
          // Test for IE <= 9 as proposed by Browserhacks
          // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
          // Tests for existence of standard globals is to allow style-loader
          // to operate correctly into non-standard environments
          // @see https://github.com/webpack-contrib/style-loader/issues/177
          return window && document && document.all && !window.atob;
        });

        var getTarget = function getTarget(target) {
          return document.querySelector(target);
        };

        var getElement = function (fn) {
          var memo = {};

          return function (target) {
            // If passing function in options, then use it for resolve "head" element.
            // Useful for Shadow Root style i.e
            // {
            //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
            // }
            if (typeof target === 'function') {
              return target();
            }
            if (typeof memo[target] === "undefined") {
              var styleTarget = getTarget.call(this, target);
              // Special case to return head of iframe instead of iframe itself
              if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
                try {
                  // This will throw an exception if access to iframe is blocked
                  // due to cross-origin restrictions
                  styleTarget = styleTarget.contentDocument.head;
                } catch (e) {
                  styleTarget = null;
                }
              }
              memo[target] = styleTarget;
            }
            return memo[target];
          };
        }();

        var singleton = null;
        var singletonCounter = 0;
        var stylesInsertedAtTop = [];

        var fixUrls = __webpack_require__( /*! ./urls */"./node_modules/style-loader/lib/urls.js");

        module.exports = function (list, options) {
          if (typeof DEBUG !== "undefined" && DEBUG) {
            if ((typeof document === 'undefined' ? 'undefined' : _typeof(document)) !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
          }

          options = options || {};

          options.attrs = _typeof(options.attrs) === "object" ? options.attrs : {};

          // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
          // tags it will allow on a page
          if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

          // By default, add <style> tags to the <head> element
          if (!options.insertInto) options.insertInto = "head";

          // By default, add <style> tags to the bottom of the target
          if (!options.insertAt) options.insertAt = "bottom";

          var styles = listToStyles(list, options);

          addStylesToDom(styles, options);

          return function update(newList) {
            var mayRemove = [];

            for (var i = 0; i < styles.length; i++) {
              var item = styles[i];
              var domStyle = stylesInDom[item.id];

              domStyle.refs--;
              mayRemove.push(domStyle);
            }

            if (newList) {
              var newStyles = listToStyles(newList, options);
              addStylesToDom(newStyles, options);
            }

            for (var i = 0; i < mayRemove.length; i++) {
              var domStyle = mayRemove[i];

              if (domStyle.refs === 0) {
                for (var j = 0; j < domStyle.parts.length; j++) {
                  domStyle.parts[j]();
                }delete stylesInDom[domStyle.id];
              }
            }
          };
        };

        function addStylesToDom(styles, options) {
          for (var i = 0; i < styles.length; i++) {
            var item = styles[i];
            var domStyle = stylesInDom[item.id];

            if (domStyle) {
              domStyle.refs++;

              for (var j = 0; j < domStyle.parts.length; j++) {
                domStyle.parts[j](item.parts[j]);
              }

              for (; j < item.parts.length; j++) {
                domStyle.parts.push(addStyle(item.parts[j], options));
              }
            } else {
              var parts = [];

              for (var j = 0; j < item.parts.length; j++) {
                parts.push(addStyle(item.parts[j], options));
              }

              stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts };
            }
          }
        }

        function listToStyles(list, options) {
          var styles = [];
          var newStyles = {};

          for (var i = 0; i < list.length; i++) {
            var item = list[i];
            var id = options.base ? item[0] + options.base : item[0];
            var css = item[1];
            var media = item[2];
            var sourceMap = item[3];
            var part = { css: css, media: media, sourceMap: sourceMap };

            if (!newStyles[id]) styles.push(newStyles[id] = { id: id, parts: [part] });else newStyles[id].parts.push(part);
          }

          return styles;
        }

        function insertStyleElement(options, style) {
          var target = getElement(options.insertInto);

          if (!target) {
            throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
          }

          var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

          if (options.insertAt === "top") {
            if (!lastStyleElementInsertedAtTop) {
              target.insertBefore(style, target.firstChild);
            } else if (lastStyleElementInsertedAtTop.nextSibling) {
              target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
            } else {
              target.appendChild(style);
            }
            stylesInsertedAtTop.push(style);
          } else if (options.insertAt === "bottom") {
            target.appendChild(style);
          } else if (_typeof(options.insertAt) === "object" && options.insertAt.before) {
            var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
            target.insertBefore(style, nextSibling);
          } else {
            throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
          }
        }

        function removeStyleElement(style) {
          if (style.parentNode === null) return false;
          style.parentNode.removeChild(style);

          var idx = stylesInsertedAtTop.indexOf(style);
          if (idx >= 0) {
            stylesInsertedAtTop.splice(idx, 1);
          }
        }

        function createStyleElement(options) {
          var style = document.createElement("style");

          if (options.attrs.type === undefined) {
            options.attrs.type = "text/css";
          }

          addAttrs(style, options.attrs);
          insertStyleElement(options, style);

          return style;
        }

        function createLinkElement(options) {
          var link = document.createElement("link");

          if (options.attrs.type === undefined) {
            options.attrs.type = "text/css";
          }
          options.attrs.rel = "stylesheet";

          addAttrs(link, options.attrs);
          insertStyleElement(options, link);

          return link;
        }

        function addAttrs(el, attrs) {
          Object.keys(attrs).forEach(function (key) {
            el.setAttribute(key, attrs[key]);
          });
        }

        function addStyle(obj, options) {
          var style, update, remove, result;

          // If a transform function was defined, run it on the css
          if (options.transform && obj.css) {
            result = options.transform(obj.css);

            if (result) {
              // If transform returns a value, use that instead of the original css.
              // This allows running runtime transformations on the css.
              obj.css = result;
            } else {
              // If the transform function returns a falsy value, don't add this css.
              // This allows conditional loading of css
              return function () {
                // noop
              };
            }
          }

          if (options.singleton) {
            var styleIndex = singletonCounter++;

            style = singleton || (singleton = createStyleElement(options));

            update = applyToSingletonTag.bind(null, style, styleIndex, false);
            remove = applyToSingletonTag.bind(null, style, styleIndex, true);
          } else if (obj.sourceMap && typeof URL === "function" && typeof URL.createObjectURL === "function" && typeof URL.revokeObjectURL === "function" && typeof Blob === "function" && typeof btoa === "function") {
            style = createLinkElement(options);
            update = updateLink.bind(null, style, options);
            remove = function remove() {
              removeStyleElement(style);

              if (style.href) URL.revokeObjectURL(style.href);
            };
          } else {
            style = createStyleElement(options);
            update = applyToTag.bind(null, style);
            remove = function remove() {
              removeStyleElement(style);
            };
          }

          update(obj);

          return function updateStyle(newObj) {
            if (newObj) {
              if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
                return;
              }

              update(obj = newObj);
            } else {
              remove();
            }
          };
        }

        var replaceText = function () {
          var textStore = [];

          return function (index, replacement) {
            textStore[index] = replacement;

            return textStore.filter(Boolean).join('\n');
          };
        }();

        function applyToSingletonTag(style, index, remove, obj) {
          var css = remove ? "" : obj.css;

          if (style.styleSheet) {
            style.styleSheet.cssText = replaceText(index, css);
          } else {
            var cssNode = document.createTextNode(css);
            var childNodes = style.childNodes;

            if (childNodes[index]) style.removeChild(childNodes[index]);

            if (childNodes.length) {
              style.insertBefore(cssNode, childNodes[index]);
            } else {
              style.appendChild(cssNode);
            }
          }
        }

        function applyToTag(style, obj) {
          var css = obj.css;
          var media = obj.media;

          if (media) {
            style.setAttribute("media", media);
          }

          if (style.styleSheet) {
            style.styleSheet.cssText = css;
          } else {
            while (style.firstChild) {
              style.removeChild(style.firstChild);
            }

            style.appendChild(document.createTextNode(css));
          }
        }

        function updateLink(link, options, obj) {
          var css = obj.css;
          var sourceMap = obj.sourceMap;

          /*
          	If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
          	and there is no publicPath defined then lets turn convertToAbsoluteUrls
          	on by default.  Otherwise default to the convertToAbsoluteUrls option
          	directly
          */
          var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

          if (options.convertToAbsoluteUrls || autoFixUrls) {
            css = fixUrls(css);
          }

          if (sourceMap) {
            // http://stackoverflow.com/a/26603875
            css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
          }

          var blob = new Blob([css], { type: "text/css" });

          var oldSrc = link.href;

          link.href = URL.createObjectURL(blob);

          if (oldSrc) URL.revokeObjectURL(oldSrc);
        }

        /***/
      },

      /***/"./node_modules/style-loader/lib/urls.js":
      /*!***********************************************!*\
        !*** ./node_modules/style-loader/lib/urls.js ***!
        \***********************************************/
      /*! no static exports found */
      /***/function node_modulesStyleLoaderLibUrlsJs(module, exports) {

        /**
         * When source maps are enabled, `style-loader` uses a link element with a data-uri to
         * embed the css on the page. This breaks all relative urls because now they are relative to a
         * bundle instead of the current page.
         *
         * One solution is to only use full urls, but that may be impossible.
         *
         * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
         *
         * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
         *
         */

        module.exports = function (css) {
          // get current location
          var location = typeof window !== "undefined" && window.location;

          if (!location) {
            throw new Error("fixUrls requires window.location");
          }

          // blank or null?
          if (!css || typeof css !== "string") {
            return css;
          }

          var baseUrl = location.protocol + "//" + location.host;
          var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

          // convert each url(...)
          /*
          This regular expression is just a way to recursively match brackets within
          a string.
          	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
             (  = Start a capturing group
               (?:  = Start a non-capturing group
                   [^)(]  = Match anything that isn't a parentheses
                   |  = OR
                   \(  = Match a start parentheses
                       (?:  = Start another non-capturing groups
                           [^)(]+  = Match anything that isn't a parentheses
                           |  = OR
                           \(  = Match a start parentheses
                               [^)(]*  = Match anything that isn't a parentheses
                           \)  = Match a end parentheses
                       )  = End Group
                       *\) = Match anything and then a close parens
                   )  = Close non-capturing group
                   *  = Match anything
                )  = Close capturing group
           \)  = Match a close parens
          	 /gi  = Get all matches, not the first.  Be case insensitive.
           */
          var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
            // strip quotes (if they exist)
            var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
              return $1;
            }).replace(/^'(.*)'$/, function (o, $1) {
              return $1;
            });

            // already a full url? no change
            if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
              return fullMatch;
            }

            // convert the url to a full url
            var newUrl;

            if (unquotedOrigUrl.indexOf("//") === 0) {
              //TODO: should we add protocol?
              newUrl = unquotedOrigUrl;
            } else if (unquotedOrigUrl.indexOf("/") === 0) {
              // path should be relative to the base url
              newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
            } else {
              // path should be relative to current directory
              newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
            }

            // send back the fixed url(...)
            return "url(" + JSON.stringify(newUrl) + ")";
          });

          // send back the fixed css
          return fixedCss;
        };

        /***/
      },

      /***/"./node_modules/webpack/buildin/global.js":
      /*!***********************************!*\
        !*** (webpack)/buildin/global.js ***!
        \***********************************/
      /*! no static exports found */
      /***/function node_modulesWebpackBuildinGlobalJs(module, exports) {

        var g;

        // This works in non-strict mode
        g = function () {
          return this;
        }();

        try {
          // This works if eval is allowed (see CSP)
          g = g || Function("return this")() || (1, eval)("this");
        } catch (e) {
          // This works if the window reference is available
          if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === "object") g = window;
        }

        // g can still be undefined, but nothing to do about it...
        // We return undefined, instead of nothing here, so it's
        // easier to handle this case. if(!global) { ...}

        module.exports = g;

        /***/
      },

      /***/"./node_modules/webpack/buildin/module.js":
      /*!***********************************!*\
        !*** (webpack)/buildin/module.js ***!
        \***********************************/
      /*! no static exports found */
      /***/function node_modulesWebpackBuildinModuleJs(module, exports) {

        module.exports = function (module) {
          if (!module.webpackPolyfill) {
            module.deprecate = function () {};
            module.paths = [];
            // module.parent = undefined by default
            if (!module.children) module.children = [];
            Object.defineProperty(module, "loaded", {
              enumerable: true,
              get: function get() {
                return module.l;
              }
            });
            Object.defineProperty(module, "id", {
              enumerable: true,
              get: function get() {
                return module.i;
              }
            });
            module.webpackPolyfill = 1;
          }
          return module;
        };

        /***/
      },

      /***/"./node_modules/wolfy87-eventemitter/EventEmitter.js":
      /*!***********************************************************!*\
        !*** ./node_modules/wolfy87-eventemitter/EventEmitter.js ***!
        \***********************************************************/
      /*! no static exports found */
      /***/function node_modulesWolfy87EventemitterEventEmitterJs(module, exports, __webpack_require__) {

        var __WEBPACK_AMD_DEFINE_RESULT__; /*!
                                           * EventEmitter v5.2.5 - git.io/ee
                                           * Unlicense - http://unlicense.org/
                                           * Oliver Caldwell - http://oli.me.uk/
                                           * @preserve
                                           */

        ;(function (exports) {
          'use strict';

          /**
           * Class for managing events.
           * Can be extended to provide event functionality in other classes.
           *
           * @class EventEmitter Manages event registering and emitting.
           */

          function EventEmitter() {}

          // Shortcuts to improve speed and size
          var proto = EventEmitter.prototype;
          var originalGlobalValue = exports.EventEmitter;

          /**
           * Finds the index of the listener for the event in its storage array.
           *
           * @param {Function[]} listeners Array of listeners to search through.
           * @param {Function} listener Method to look for.
           * @return {Number} Index of the specified listener, -1 if not found
           * @api private
           */
          function indexOfListener(listeners, listener) {
            var i = listeners.length;
            while (i--) {
              if (listeners[i].listener === listener) {
                return i;
              }
            }

            return -1;
          }

          /**
           * Alias a method while keeping the context correct, to allow for overwriting of target method.
           *
           * @param {String} name The name of the target method.
           * @return {Function} The aliased method
           * @api private
           */
          function alias(name) {
            return function aliasClosure() {
              return this[name].apply(this, arguments);
            };
          }

          /**
           * Returns the listener array for the specified event.
           * Will initialise the event object and listener arrays if required.
           * Will return an object if you use a regex search. The object contains keys for each matched event. So /ba[rz]/ might return an object containing bar and baz. But only if you have either defined them with defineEvent or added some listeners to them.
           * Each property in the object response is an array of listener functions.
           *
           * @param {String|RegExp} evt Name of the event to return the listeners from.
           * @return {Function[]|Object} All listener functions for the event.
           */
          proto.getListeners = function getListeners(evt) {
            var events = this._getEvents();
            var response;
            var key;

            // Return a concatenated array of all matching events if
            // the selector is a regular expression.
            if (evt instanceof RegExp) {
              response = {};
              for (key in events) {
                if (events.hasOwnProperty(key) && evt.test(key)) {
                  response[key] = events[key];
                }
              }
            } else {
              response = events[evt] || (events[evt] = []);
            }

            return response;
          };

          /**
           * Takes a list of listener objects and flattens it into a list of listener functions.
           *
           * @param {Object[]} listeners Raw listener objects.
           * @return {Function[]} Just the listener functions.
           */
          proto.flattenListeners = function flattenListeners(listeners) {
            var flatListeners = [];
            var i;

            for (i = 0; i < listeners.length; i += 1) {
              flatListeners.push(listeners[i].listener);
            }

            return flatListeners;
          };

          /**
           * Fetches the requested listeners via getListeners but will always return the results inside an object. This is mainly for internal use but others may find it useful.
           *
           * @param {String|RegExp} evt Name of the event to return the listeners from.
           * @return {Object} All listener functions for an event in an object.
           */
          proto.getListenersAsObject = function getListenersAsObject(evt) {
            var listeners = this.getListeners(evt);
            var response;

            if (listeners instanceof Array) {
              response = {};
              response[evt] = listeners;
            }

            return response || listeners;
          };

          function isValidListener(listener) {
            if (typeof listener === 'function' || listener instanceof RegExp) {
              return true;
            } else if (listener && (typeof listener === 'undefined' ? 'undefined' : _typeof(listener)) === 'object') {
              return isValidListener(listener.listener);
            } else {
              return false;
            }
          }

          /**
           * Adds a listener function to the specified event.
           * The listener will not be added if it is a duplicate.
           * If the listener returns true then it will be removed after it is called.
           * If you pass a regular expression as the event name then the listener will be added to all events that match it.
           *
           * @param {String|RegExp} evt Name of the event to attach the listener to.
           * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
           * @return {Object} Current instance of EventEmitter for chaining.
           */
          proto.addListener = function addListener(evt, listener) {
            if (!isValidListener(listener)) {
              throw new TypeError('listener must be a function');
            }

            var listeners = this.getListenersAsObject(evt);
            var listenerIsWrapped = (typeof listener === 'undefined' ? 'undefined' : _typeof(listener)) === 'object';
            var key;

            for (key in listeners) {
              if (listeners.hasOwnProperty(key) && indexOfListener(listeners[key], listener) === -1) {
                listeners[key].push(listenerIsWrapped ? listener : {
                  listener: listener,
                  once: false
                });
              }
            }

            return this;
          };

          /**
           * Alias of addListener
           */
          proto.on = alias('addListener');

          /**
           * Semi-alias of addListener. It will add a listener that will be
           * automatically removed after its first execution.
           *
           * @param {String|RegExp} evt Name of the event to attach the listener to.
           * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
           * @return {Object} Current instance of EventEmitter for chaining.
           */
          proto.addOnceListener = function addOnceListener(evt, listener) {
            return this.addListener(evt, {
              listener: listener,
              once: true
            });
          };

          /**
           * Alias of addOnceListener.
           */
          proto.once = alias('addOnceListener');

          /**
           * Defines an event name. This is required if you want to use a regex to add a listener to multiple events at once. If you don't do this then how do you expect it to know what event to add to? Should it just add to every possible match for a regex? No. That is scary and bad.
           * You need to tell it what event names should be matched by a regex.
           *
           * @param {String} evt Name of the event to create.
           * @return {Object} Current instance of EventEmitter for chaining.
           */
          proto.defineEvent = function defineEvent(evt) {
            this.getListeners(evt);
            return this;
          };

          /**
           * Uses defineEvent to define multiple events.
           *
           * @param {String[]} evts An array of event names to define.
           * @return {Object} Current instance of EventEmitter for chaining.
           */
          proto.defineEvents = function defineEvents(evts) {
            for (var i = 0; i < evts.length; i += 1) {
              this.defineEvent(evts[i]);
            }
            return this;
          };

          /**
           * Removes a listener function from the specified event.
           * When passed a regular expression as the event name, it will remove the listener from all events that match it.
           *
           * @param {String|RegExp} evt Name of the event to remove the listener from.
           * @param {Function} listener Method to remove from the event.
           * @return {Object} Current instance of EventEmitter for chaining.
           */
          proto.removeListener = function removeListener(evt, listener) {
            var listeners = this.getListenersAsObject(evt);
            var index;
            var key;

            for (key in listeners) {
              if (listeners.hasOwnProperty(key)) {
                index = indexOfListener(listeners[key], listener);

                if (index !== -1) {
                  listeners[key].splice(index, 1);
                }
              }
            }

            return this;
          };

          /**
           * Alias of removeListener
           */
          proto.off = alias('removeListener');

          /**
           * Adds listeners in bulk using the manipulateListeners method.
           * If you pass an object as the first argument you can add to multiple events at once. The object should contain key value pairs of events and listeners or listener arrays. You can also pass it an event name and an array of listeners to be added.
           * You can also pass it a regular expression to add the array of listeners to all events that match it.
           * Yeah, this function does quite a bit. That's probably a bad thing.
           *
           * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add to multiple events at once.
           * @param {Function[]} [listeners] An optional array of listener functions to add.
           * @return {Object} Current instance of EventEmitter for chaining.
           */
          proto.addListeners = function addListeners(evt, listeners) {
            // Pass through to manipulateListeners
            return this.manipulateListeners(false, evt, listeners);
          };

          /**
           * Removes listeners in bulk using the manipulateListeners method.
           * If you pass an object as the first argument you can remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
           * You can also pass it an event name and an array of listeners to be removed.
           * You can also pass it a regular expression to remove the listeners from all events that match it.
           *
           * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to remove from multiple events at once.
           * @param {Function[]} [listeners] An optional array of listener functions to remove.
           * @return {Object} Current instance of EventEmitter for chaining.
           */
          proto.removeListeners = function removeListeners(evt, listeners) {
            // Pass through to manipulateListeners
            return this.manipulateListeners(true, evt, listeners);
          };

          /**
           * Edits listeners in bulk. The addListeners and removeListeners methods both use this to do their job. You should really use those instead, this is a little lower level.
           * The first argument will determine if the listeners are removed (true) or added (false).
           * If you pass an object as the second argument you can add/remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
           * You can also pass it an event name and an array of listeners to be added/removed.
           * You can also pass it a regular expression to manipulate the listeners of all events that match it.
           *
           * @param {Boolean} remove True if you want to remove listeners, false if you want to add.
           * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add/remove from multiple events at once.
           * @param {Function[]} [listeners] An optional array of listener functions to add/remove.
           * @return {Object} Current instance of EventEmitter for chaining.
           */
          proto.manipulateListeners = function manipulateListeners(remove, evt, listeners) {
            var i;
            var value;
            var single = remove ? this.removeListener : this.addListener;
            var multiple = remove ? this.removeListeners : this.addListeners;

            // If evt is an object then pass each of its properties to this method
            if ((typeof evt === 'undefined' ? 'undefined' : _typeof(evt)) === 'object' && !(evt instanceof RegExp)) {
              for (i in evt) {
                if (evt.hasOwnProperty(i) && (value = evt[i])) {
                  // Pass the single listener straight through to the singular method
                  if (typeof value === 'function') {
                    single.call(this, i, value);
                  } else {
                    // Otherwise pass back to the multiple function
                    multiple.call(this, i, value);
                  }
                }
              }
            } else {
              // So evt must be a string
              // And listeners must be an array of listeners
              // Loop over it and pass each one to the multiple method
              i = listeners.length;
              while (i--) {
                single.call(this, evt, listeners[i]);
              }
            }

            return this;
          };

          /**
           * Removes all listeners from a specified event.
           * If you do not specify an event then all listeners will be removed.
           * That means every event will be emptied.
           * You can also pass a regex to remove all events that match it.
           *
           * @param {String|RegExp} [evt] Optional name of the event to remove all listeners for. Will remove from every event if not passed.
           * @return {Object} Current instance of EventEmitter for chaining.
           */
          proto.removeEvent = function removeEvent(evt) {
            var type = typeof evt === 'undefined' ? 'undefined' : _typeof(evt);
            var events = this._getEvents();
            var key;

            // Remove different things depending on the state of evt
            if (type === 'string') {
              // Remove all listeners for the specified event
              delete events[evt];
            } else if (evt instanceof RegExp) {
              // Remove all events matching the regex.
              for (key in events) {
                if (events.hasOwnProperty(key) && evt.test(key)) {
                  delete events[key];
                }
              }
            } else {
              // Remove all listeners in all events
              delete this._events;
            }

            return this;
          };

          /**
           * Alias of removeEvent.
           *
           * Added to mirror the node API.
           */
          proto.removeAllListeners = alias('removeEvent');

          /**
           * Emits an event of your choice.
           * When emitted, every listener attached to that event will be executed.
           * If you pass the optional argument array then those arguments will be passed to every listener upon execution.
           * Because it uses `apply`, your array of arguments will be passed as if you wrote them out separately.
           * So they will not arrive within the array on the other side, they will be separate.
           * You can also pass a regular expression to emit to all events that match it.
           *
           * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
           * @param {Array} [args] Optional array of arguments to be passed to each listener.
           * @return {Object} Current instance of EventEmitter for chaining.
           */
          proto.emitEvent = function emitEvent(evt, args) {
            var listenersMap = this.getListenersAsObject(evt);
            var listeners;
            var listener;
            var i;
            var key;
            var response;

            for (key in listenersMap) {
              if (listenersMap.hasOwnProperty(key)) {
                listeners = listenersMap[key].slice(0);

                for (i = 0; i < listeners.length; i++) {
                  // If the listener returns true then it shall be removed from the event
                  // The function is executed either with a basic call or an apply if there is an args array
                  listener = listeners[i];

                  if (listener.once === true) {
                    this.removeListener(evt, listener.listener);
                  }

                  response = listener.listener.apply(this, args || []);

                  if (response === this._getOnceReturnValue()) {
                    this.removeListener(evt, listener.listener);
                  }
                }
              }
            }

            return this;
          };

          /**
           * Alias of emitEvent
           */
          proto.trigger = alias('emitEvent');

          /**
           * Subtly different from emitEvent in that it will pass its arguments on to the listeners, as opposed to taking a single array of arguments to pass on.
           * As with emitEvent, you can pass a regex in place of the event name to emit to all events that match it.
           *
           * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
           * @param {...*} Optional additional arguments to be passed to each listener.
           * @return {Object} Current instance of EventEmitter for chaining.
           */
          proto.emit = function emit(evt) {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(evt, args);
          };

          /**
           * Sets the current value to check against when executing listeners. If a
           * listeners return value matches the one set here then it will be removed
           * after execution. This value defaults to true.
           *
           * @param {*} value The new value to check for when executing listeners.
           * @return {Object} Current instance of EventEmitter for chaining.
           */
          proto.setOnceReturnValue = function setOnceReturnValue(value) {
            this._onceReturnValue = value;
            return this;
          };

          /**
           * Fetches the current value to check against when executing listeners. If
           * the listeners return value matches this one then it should be removed
           * automatically. It will return true by default.
           *
           * @return {*|Boolean} The current value to check for or the default, true.
           * @api private
           */
          proto._getOnceReturnValue = function _getOnceReturnValue() {
            if (this.hasOwnProperty('_onceReturnValue')) {
              return this._onceReturnValue;
            } else {
              return true;
            }
          };

          /**
           * Fetches the events object and creates one if required.
           *
           * @return {Object} The events storage object.
           * @api private
           */
          proto._getEvents = function _getEvents() {
            return this._events || (this._events = {});
          };

          /**
           * Reverts the global {@link EventEmitter} to its previous value and returns a reference to this version.
           *
           * @return {Function} Non conflicting EventEmitter class.
           */
          EventEmitter.noConflict = function noConflict() {
            exports.EventEmitter = originalGlobalValue;
            return EventEmitter;
          };

          // Expose the class either via AMD, CommonJS or the global object
          if (true) {
            !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
              return EventEmitter;
            }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          } else {}
        })(typeof window !== 'undefined' ? window : this || {});

        /***/
      },

      /***/"./src/Picker/Grid/index.js":
      /*!**********************************!*\
        !*** ./src/Picker/Grid/index.js ***!
        \**********************************/
      /*! no static exports found */
      /***/function srcPickerGridIndexJs(module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.Grid = undefined;

        var _Line = __webpack_require__( /*! ../Line */"./src/Picker/Line/index.js");

        var _wolfy87Eventemitter = __webpack_require__( /*! wolfy87-eventemitter */"./node_modules/wolfy87-eventemitter/EventEmitter.js");

        var _wolfy87Eventemitter2 = _interopRequireDefault(_wolfy87Eventemitter);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        var Grid = exports.Grid = function Grid(element, colors, ee) {

          var gridWrapper = document.createElement("div");
          gridWrapper.setAttribute("class", "grid-wrapper");
          var grid = document.createElement("div");
          grid.setAttribute("class", "grid mdc-dialog__surface");
          colors.forEach(function (line) {
            return (0, _Line.Line)(grid, line, ee);
          });
          gridWrapper.appendChild(grid);
          element.appendChild(gridWrapper);
        };

        /***/
      },

      /***/"./src/Picker/Line/index.js":
      /*!**********************************!*\
        !*** ./src/Picker/Line/index.js ***!
        \**********************************/
      /*! no static exports found */
      /***/function srcPickerLineIndexJs(module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.Line = undefined;

        var _Square = __webpack_require__( /*! ../Square */"./src/Picker/Square/index.js");

        var _wolfy87Eventemitter = __webpack_require__( /*! wolfy87-eventemitter */"./node_modules/wolfy87-eventemitter/EventEmitter.js");

        var _wolfy87Eventemitter2 = _interopRequireDefault(_wolfy87Eventemitter);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        /**
         * 
         * @param {HTMLElement} element 
         * @param {string[]} colors 
         * @param {EventEmitter} ee
         */
        var Line = exports.Line = function Line(element, colors, ee) {
          var line = document.createElement("div");
          line.setAttribute("class", "line");
          colors.forEach(function (color) {
            return (0, _Square.Square)(line, color, ee);
          });
          element.appendChild(line);
        };

        /***/
      },

      /***/"./src/Picker/Square/index.js":
      /*!************************************!*\
        !*** ./src/Picker/Square/index.js ***!
        \************************************/
      /*! no static exports found */
      /***/function srcPickerSquareIndexJs(module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.Square = undefined;

        var _wolfy87Eventemitter = __webpack_require__( /*! wolfy87-eventemitter */"./node_modules/wolfy87-eventemitter/EventEmitter.js");

        var _wolfy87Eventemitter2 = _interopRequireDefault(_wolfy87Eventemitter);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        var Square = exports.Square = function Square(element, color, ee) {
          var square = document.createElement("div");
          square.setAttribute("class", "square grow");
          // mouse down event fires before the click event

          square.addEventListener("mousedown", function (event) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            ee.trigger("color-changed", [color]);
            ee.trigger("grid_closed", null);
          });

          square.style.backgroundColor = color;
          element.appendChild(square);
        };

        /***/
      },

      /***/"./src/Picker/index.scss":
      /*!*******************************!*\
        !*** ./src/Picker/index.scss ***!
        \*******************************/
      /*! no static exports found */
      /***/function srcPickerIndexScss(module, exports, __webpack_require__) {

        var content = __webpack_require__( /*! !../../node_modules/css-loader!../../node_modules/sass-loader/lib/loader.js??ref--5-2!./index.scss */"./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js?!./src/Picker/index.scss");

        if (typeof content === 'string') content = [[module.i, content, '']];

        var transform;
        var insertInto;

        var options = { "hmr": true };

        options.transform = transform;
        options.insertInto = undefined;

        var update = __webpack_require__( /*! ../../node_modules/style-loader/lib/addStyles.js */"./node_modules/style-loader/lib/addStyles.js")(content, options);

        if (content.locals) module.exports = content.locals;

        if (false) {}

        /***/
      },

      /***/"./src/icons/paint.svg":
      /*!*****************************!*\
        !*** ./src/icons/paint.svg ***!
        \*****************************/
      /*! no static exports found */
      /***/function srcIconsPaintSvg(module, exports) {

        module.exports = "<svg fill=\"#000000\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M18 4V3c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6h1v4H9v11c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-9h8V4h-3z\"></path><path d=\"M0 0h24v24H0z\" fill=\"none\"></path></svg>";

        /***/
      },

      /***/"./src/index.js":
      /*!**********************!*\
        !*** ./src/index.js ***!
        \**********************/
      /*! no static exports found */
      /***/function srcIndexJs(module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.MdColorPicker = undefined;

        var _colors = __webpack_require__( /*! material-colors/dist/colors */"./node_modules/material-colors/dist/colors.js");

        var _colors2 = _interopRequireDefault(_colors);

        var _wolfy87Eventemitter = __webpack_require__( /*! wolfy87-eventemitter */"./node_modules/wolfy87-eventemitter/EventEmitter.js");

        var _wolfy87Eventemitter2 = _interopRequireDefault(_wolfy87Eventemitter);

        var _Grid = __webpack_require__( /*! ./Picker/Grid */"./src/Picker/Grid/index.js");

        var _paint = __webpack_require__( /*! ./icons/paint.svg */"./src/icons/paint.svg");

        var _paint2 = _interopRequireDefault(_paint);

        var _spaceLift = __webpack_require__( /*! space-lift */"./node_modules/space-lift/es/index.js");

        var _lodash = __webpack_require__( /*! lodash.omit */"./node_modules/lodash.omit/index.js");

        var _lodash2 = _interopRequireDefault(_lodash);

        var _lodash3 = __webpack_require__( /*! lodash.map */"./node_modules/lodash.map/index.js");

        var _lodash4 = _interopRequireDefault(_lodash3);

        __webpack_require__( /*! ./Picker/index.scss */"./src/Picker/index.scss");

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        var extract = function extract(object) {
          return (0, _lodash4.default)(object, function (item) {
            return (0, _lodash4.default)(item);
          });
        };

        var MdColorPicker = exports.MdColorPicker = function MdColorPicker(config) {
          var elementName = config.elementName,
              createIcon = config.createIcon,
              defaultColor = config.defaultColor;

          var ee = new _wolfy87Eventemitter2.default();

          var element = (0, _spaceLift.Option)(document.getElementById(elementName));
          var omitedColors = ['black', 'white', 'lightText', 'lightIcons', 'darkText', 'darkIcons'];
          var materialColors = extract((0, _lodash2.default)(_colors2.default, omitedColors));

          var materialNoAccent = materialColors.map(function (elem) {
            return elem.filter(function (color, index) {
              return index <= 9;
            });
          });

          var container = document.createElement('div');
          container.setAttribute('class', 'color-container');

          var toggle = function toggle(force) {
            if (container.getAttribute('class') === 'color-container' && force !== false) container.setAttribute('class', 'color-container-open');else container.setAttribute('class', 'color-container');
            return false;
          };
          (0, _Grid.Grid)(container, materialNoAccent, ee);

          var hideOnBlur = function hideOnBlur(element) {
            element.addEventListener('blur', function (event) {
              toggle(false);
            });
          };

          var props = {
            container: container,
            defaultColor: defaultColor,
            ee: ee,
            element: element,
            hideOnBlur: hideOnBlur,
            toggle: toggle
          };

          if (createIcon) createWithIcon(props);else create(props);

          ee.on('grid_closed', toggle);
          return ee;
        };

        var createWithIcon = function createWithIcon(props) {
          var defaultColor = props.defaultColor,
              element = props.element,
              toggle = props.toggle,
              ee = props.ee,
              container = props.container,
              hideOnBlur = props.hideOnBlur;

          var image = document.createElement('div');
          image.innerHTML = _paint2.default;
          image.setAttribute('class', 'round-btn mdc-elevation--z1');
          image.addEventListener('click', toggle);

          (0, _spaceLift.Option)(image.firstElementChild).fold(function () {
            return console.error('Something went wrong creating the color-picker');
          }, function (child) {
            child.style.fill = defaultColor;
            ee.on('color-changed', function (color) {
              child.style.fill = color;
              return false;
            });
          });

          /**
           * we have to insert the icon, we assume that the parent
           * is a div
           */
          element.fold(function () {
            return console.error('Given element does not exists');
          }, function (elem) {
            hideOnBlur(elem);
            elem.appendChild(image);
            elem.appendChild(container);
          });
        };
        /*
            We don't have to create an icon, so we assume that the color piker will be 
            binded to an input
        */
        var create = function create(props) {
          var defaultColor = props.defaultColor,
              element = props.element,
              toggle = props.toggle,
              ee = props.ee,
              container = props.container,
              hideOnBlur = props.hideOnBlur;

          element.fold(function () {
            return console.error('An error occured locating base element');
          }, function (elem) {
            (0, _spaceLift.Option)(elem.parentElement).fold(function () {
              return console.error('An error occured when creating the color-picker');
            }, function (parent) {
              parent.appendChild(container);
              elem.addEventListener('click', toggle);
              hideOnBlur(elem);
            });
          });
        };
        exports.default = MdColorPicker;

        /***/
      }

      /******/ })["default"]
  );
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./exemple/index.js":
/*!**************************!*\
  !*** ./exemple/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(/*! ../index */ "./index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
  (0, _index2.default)({
    elementName: 'picker',
    createIcon: true,
    defaultColor: '#212121'
  });

  (0, _index2.default)({
    elementName: 'picker2',
    createIcon: false,
    defaultColor: 'red'
  });
  var events = (0, _index2.default)({
    elementName: 'picker3',
    createIcon: false,
    defaultColor: 'red'
  });

  events.on('color-changed', function (color) {
    document.getElementById('picker3').value = color;
  });
});

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./dist/material-color-picker */ "./dist/material-color-picker.js");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly9NYXRlcmlhbENvbG9yUGlja2VyL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly8vd2VicGFjazovL01hdGVyaWFsQ29sb3JQaWNrZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly9NYXRlcmlhbENvbG9yUGlja2VyL3NyYy9QaWNrZXIvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vd2VicGFjazovL01hdGVyaWFsQ29sb3JQaWNrZXIvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vTWF0ZXJpYWxDb2xvclBpY2tlci9ub2RlX21vZHVsZXMvaW1tdXBkYXRlL2VzL2ltbXVwZGF0ZS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovL01hdGVyaWFsQ29sb3JQaWNrZXIvbm9kZV9tb2R1bGVzL2xvZGFzaC5tYXAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly9NYXRlcmlhbENvbG9yUGlja2VyL25vZGVfbW9kdWxlcy9sb2Rhc2gub21pdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovL01hdGVyaWFsQ29sb3JQaWNrZXIvbm9kZV9tb2R1bGVzL21hdGVyaWFsLWNvbG9ycy9kaXN0L2NvbG9ycy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovL01hdGVyaWFsQ29sb3JQaWNrZXIvbm9kZV9tb2R1bGVzL3NwYWNlLWxpZnQvZXMvYXJyYXkvZnJvbUFycmF5TGlrZS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovL01hdGVyaWFsQ29sb3JQaWNrZXIvbm9kZV9tb2R1bGVzL3NwYWNlLWxpZnQvZXMvYXJyYXkvcmFuZ2UuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly9NYXRlcmlhbENvbG9yUGlja2VyL25vZGVfbW9kdWxlcy9zcGFjZS1saWZ0L2VzL2FycmF5L3R1cGxlLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vTWF0ZXJpYWxDb2xvclBpY2tlci9ub2RlX21vZHVsZXMvc3BhY2UtbGlmdC9lcy9mdW5jdGlvbi9tZW1vaXplLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vTWF0ZXJpYWxDb2xvclBpY2tlci9ub2RlX21vZHVsZXMvc3BhY2UtbGlmdC9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovL01hdGVyaWFsQ29sb3JQaWNrZXIvbm9kZV9tb2R1bGVzL3NwYWNlLWxpZnQvZXMvbGlmdC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovL01hdGVyaWFsQ29sb3JQaWNrZXIvbm9kZV9tb2R1bGVzL3NwYWNlLWxpZnQvZXMvb2JqZWN0L2lzLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vTWF0ZXJpYWxDb2xvclBpY2tlci9ub2RlX21vZHVsZXMvc3BhY2UtbGlmdC9lcy9vYmplY3Qvc2V0LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vTWF0ZXJpYWxDb2xvclBpY2tlci9ub2RlX21vZHVsZXMvc3BhY2UtbGlmdC9lcy9vcHRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly9NYXRlcmlhbENvbG9yUGlja2VyL25vZGVfbW9kdWxlcy9zcGFjZS1saWZ0L2VzL3Jlc3VsdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovL01hdGVyaWFsQ29sb3JQaWNrZXIvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vTWF0ZXJpYWxDb2xvclBpY2tlci9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vTWF0ZXJpYWxDb2xvclBpY2tlci8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly9NYXRlcmlhbENvbG9yUGlja2VyLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovL01hdGVyaWFsQ29sb3JQaWNrZXIvbm9kZV9tb2R1bGVzL3dvbGZ5ODctZXZlbnRlbWl0dGVyL0V2ZW50RW1pdHRlci5qcyIsIndlYnBhY2s6Ly8vd2VicGFjazovL01hdGVyaWFsQ29sb3JQaWNrZXIvc3JjL1BpY2tlci9HcmlkL2luZGV4LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vTWF0ZXJpYWxDb2xvclBpY2tlci9zcmMvUGlja2VyL0xpbmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2s6Ly9NYXRlcmlhbENvbG9yUGlja2VyL3NyYy9QaWNrZXIvU3F1YXJlL2luZGV4LmpzIiwid2VicGFjazovLy93ZWJwYWNrOi8vTWF0ZXJpYWxDb2xvclBpY2tlci9zcmMvUGlja2VyL2luZGV4LnNjc3M/YWU3OSIsIndlYnBhY2s6Ly8vd2VicGFjazovL01hdGVyaWFsQ29sb3JQaWNrZXIvc3JjL2ljb25zL3BhaW50LnN2ZyIsIndlYnBhY2s6Ly8vd2VicGFjazovL01hdGVyaWFsQ29sb3JQaWNrZXIvc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL2V4ZW1wbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyJdLCJuYW1lcyI6WyJHcmlkIiwiZ3JpZFdyYXBwZXIiLCJkb2N1bWVudCIsImdyaWQiLCJjb2xvcnMiLCJlbGVtZW50IiwiTGluZSIsImxpbmUiLCJTcXVhcmUiLCJzcXVhcmUiLCJldmVudCIsImVlIiwiZXh0cmFjdCIsIk1kQ29sb3JQaWNrZXIiLCJFdmVudEVtaXR0ZXIiLCJvbWl0ZWRDb2xvcnMiLCJtYXRlcmlhbENvbG9ycyIsIm1hdGVyaWFsTm9BY2NlbnQiLCJpbmRleCIsImNvbnRhaW5lciIsInRvZ2dsZSIsImZvcmNlIiwiaGlkZU9uQmx1ciIsInByb3BzIiwiZGVmYXVsdENvbG9yIiwiY3JlYXRlV2l0aEljb24iLCJjcmVhdGUiLCJpbWFnZSIsImljb24iLCJjb25zb2xlIiwiY2hpbGQiLCJlbGVtIiwicGFyZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImVsZW1lbnROYW1lIiwiY3JlYXRlSWNvbiIsImV2ZW50cyIsIm9uIiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsImNvbG9yIiwibW9kdWxlIiwiZXhwb3J0cyIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0EsbUhBQ0EsMkJBREEsS0FFQSxVQUNBO0FBQUE7QUFBQTtBQUFBLHFHQURBLEtBRUEsRUFHQTtBQUNDLENBVEQsYUFTQztBQUNELFM7O0FDVkEsYyxDQUFBO0FBQ0E7O0FBRUEsYyxDQUFBO0FBQ0E7O0FBRUEsZ0JBRkEsQ0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0EsZ0JBTkEsQ0FNQTtBQUNBO0FBQ0EsNkJBREE7QUFFQSwwQkFGQTtBQUdBO0FBQ0Esa0JBSkE7O0FBTUEsZ0JBYkEsQ0FhQTtBQUNBOztBQUVBLGdCQWhCQSxDQWdCQTtBQUNBOztBQUVBLGdCQW5CQSxDQW1CQTtBQUNBO0FBQ0E7QUFBQTs7O0FBR0EsYyxDQUFBO0FBQ0E7O0FBRUEsYyxDQUFBO0FBQ0E7O0FBRUEsYyxDQUFBO0FBQ0E7QUFDQTtBQUNBLHlEQUEwQyxnQkFBMUMsRUFBMEMsV0FBMUM7QUFDQTtBQUFBO0FBQ0E7QUFBQSxPQUpBOztBQU1BLGMsQ0FBQTtBQUNBO0FBQ0E7QUFDQSx1RUFBd0QsZUFBeEQ7QUFDQTtBQUFBO0FBQ0EsK0RBQWlELFdBQWpEO0FBQ0E7QUFBQSxPQUxBOztBQU9BLGMsQ0FBQTtBQUNBLGMsQ0FBQTtBQUNBLGMsQ0FBQTtBQUNBLGMsQ0FBQTtBQUNBLGMsQ0FBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF5QyxnQkFBekMsRUFBeUMsWUFBekM7QUFDQTtBQUFBO0FBQWdIO0FBQXFCLFdBQXJJLENBQXFJLElBQXJJLENBQXFJLElBQXJJLEVBQXFJLEdBQXJJO0FBQUEsU0FQQSxDQVFBO0FBQ0E7QUFBQSxPQVRBOztBQVdBLGMsQ0FBQTtBQUNBO0FBQ0E7QUFDQTtBQUEyQjtBQUE0QixTQUR2RDtBQUVBO0FBQWlDO0FBQWUsU0FGaEQ7QUFHQTtBQUNBO0FBQ0E7QUFBQSxPQU5BOztBQVFBLGMsQ0FBQTtBQUNBO0FBQXNEO0FBQStELE9BQXJIOztBQUVBLGMsQ0FBQTtBQUNBOzs7QUFHQSxjLENBQUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBOzs7QUFHQTtBQUNBLDAvTEFBOCtMLEVBQTkrTDs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ1BBOzs7O0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUMsT0FBbkMsR0FBbUMsR0FBbkM7QUFDSSxlQUZKLE1BRUk7QUFDSjtBQUNBO0FBQ0csYUFQSCxFQU9HLElBUEgsQ0FPRyxFQVBIO0FBUUEsV0FUQTs7QUFXQTtBQUNBO0FBQ0EsNkNBQ0E7QUFDQTtBQUNBLDRCQUFnQixlQUFoQixFQUFpQyxHQUFqQyxFQUFpQztBQUNqQztBQUNBLDBDQUNBO0FBQ0E7QUFDQSx3QkFBWSxrQkFBWixFQUFnQyxHQUFoQyxFQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0ssaUJBRkwsTUFFSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQXhCQTtBQXlCQTtBQUNBLFNBMUNBOztBQTRDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDRyxhQUZIOztBQUlBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNGQUFrRSxNQUFsRTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUZBLE1BR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUE2QixVQUE3QixFQUE2QixZQUE3QixFQUE2QixpQkFBN0I7QUFDQSxXQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQSxhQVBBO0FBUUE7QUFDQSxpQ0FDQSxrQkFEQSxHQUVBLEtBRkE7QUFHQSxXQWRBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBUkE7QUFTQTtBQUNBLGlDQUNBLHFCQURBLEdBRUEsUUFGQTtBQUdBLFdBZkE7QUFnQkE7QUFDQSxrQ0FBNkIsbUJBQTdCLEVBQTZCLFlBQTdCLEVBQTZCLG1CQUE3QjtBQUNBLFdBRkE7QUFHQTtBQUNBLGtDQUE2QixvQkFBN0IsRUFBNkIsWUFBN0I7QUFDQSxXQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FQQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBVEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUFvQixlQUFwQixFQUFvQixlQUFwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUFvQixVQUFwQixFQUFvQixZQUFwQixFQUFvQixhQUFwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBb0IsZUFBcEIsRUFBb0IsWUFBcEI7QUFDQTtBQUNBO0FBQ0EscUJBQWdCLGFBQWhCLEVBQWdCLFlBQWhCO0FBQ0EsV0FyQkE7QUFzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQXVCLG1CQUF2QixFQUE0QyxHQUE1QyxFQUE0QztBQUM1QztBQUNBLGtDQUNBLFNBQXdCLGVBQXhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQURBO0FBRUEsK0JBRkE7QUFHQSw0QkFIQTtBQUlBO0FBSkE7QUFNQSxXQXBCQTtBQXFCQTtBQUNDLFNBMUdEO0FBMkdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQ0E7QUFDQTtBQUNBO0FBQTZDO0FBQTBCLFdBQXZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQXlCLFlBQXpCLEVBQXlCLG1CQUF6QjtBQUNBOzs7Ozs7Ozs7Ozs7QUMzSUE7QUFBQTs7Ozs7Ozs7O0FBU0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBLGNBQ0Esd0JBREE7O0FBR0E7QUFDQTtBQUFBLGNBQ0EsbUNBREE7O0FBR0E7QUFDQTtBQUFBLGNBQ0EsMkJBREE7QUFBQSxjQUVBLDRCQUZBO0FBQUEsY0FHQSx5QkFIQTtBQUFBLGNBSUEsMkJBSkE7QUFBQSxjQUtBLDZCQUxBO0FBQUEsY0FNQSxxQ0FOQTtBQUFBLGNBT0EsdUJBUEE7QUFBQSxjQVFBLDZCQVJBO0FBQUEsY0FTQSw2QkFUQTtBQUFBLGNBVUEsK0JBVkE7QUFBQSxjQVdBLDZCQVhBO0FBQUEsY0FZQSx1QkFaQTtBQUFBLGNBYUEsNkJBYkE7QUFBQSxjQWNBLDZCQWRBO0FBQUEsY0FlQSwrQkFmQTs7QUFpQkE7QUFBQSxjQUNBLGlDQURBO0FBQUEsY0FFQSxvQ0FGQTtBQUFBLGNBR0Esb0NBSEE7QUFBQSxjQUlBLDhCQUpBO0FBQUEsY0FLQSxnQ0FMQTtBQUFBLGNBTUEsZ0NBTkE7QUFBQSxjQU9BLGdDQVBBO0FBQUEsY0FRQSw4Q0FSQTtBQUFBLGNBU0Esa0NBVEE7QUFBQSxjQVVBLGtDQVZBOztBQVlBO0FBQ0E7QUFBQSxjQUNBLHVCQURBO0FBQUEsY0FFQSxvQkFGQTtBQUFBLGNBR0EsK0dBSEE7O0FBS0E7Ozs7QUFJQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0VBQ0EscURBQ0Esc0RBQ0EsOERBQ0EsZ0NBSkE7QUFLQSwrREFDQSwyREFDQSx3REFDQSxxREFDQSxxREFDQSx3REFDQSxxREFDQSxrQ0FQQTs7QUFTQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0csYUFGSCxDQUVHO0FBQ0YsV0FKRDs7QUFNQTtBQUNBOztBQUVBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQUEsZ0JBQ0EsaUNBREE7QUFBQSxnQkFFQSxzQkFGQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUFBLGdCQUNBLGlDQURBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0EsYUFGQTtBQUdBOztBQUVBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQUEsZ0JBQ0EsaUJBREE7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBLGFBRkE7QUFHQTs7QUFFQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNLLGVBRkwsQ0FFSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQU9BO0FBQ0E7QUFBQSxnQkFDQSx3QkFEQTs7QUFHQTtBQUNBO0FBQ0csYUFGSDtBQUdBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0EsYUFGQTtBQUdBOztBQUVBOzs7Ozs7O0FBT0E7QUFDQTtBQUFBLGdCQUNBLHdCQURBOztBQUdBO0FBQ0E7QUFDRyxhQUZIO0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQUEsY0FDQSw4QkFEQTtBQUFBLGNBRUEsOEJBRkE7O0FBSUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNDLFdBSEQ7O0FBS0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7OztBQUtBOztBQUVBO0FBQ0Esd0NBQ0EsZ0VBQ0EsT0FEQSxDQUNBLHdEQURBLEVBQ0EsT0FEQSxDQURBLEdBRUEsR0FGQTs7QUFLQTtBQUNBO0FBQUEsY0FDQSw0QkFEQTtBQUFBLGNBRUEsdURBRkE7QUFBQSxjQUdBLDBCQUhBOztBQUtBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBLGNBQ0EsNEJBREE7QUFBQSxjQUVBLG9DQUZBO0FBQUEsY0FHQSw0QkFIQTtBQUFBLGNBSUEsb0NBSkE7QUFBQSxjQUtBLDBDQUxBOztBQU9BO0FBQ0E7QUFBQSxjQUNBLDZCQURBO0FBQUEsY0FFQSxxQ0FGQTtBQUFBLGNBR0EsNkJBSEE7QUFBQSxjQUlBLHFDQUpBOztBQU1BO0FBQ0E7QUFBQSxjQUNBLDZEQURBO0FBQUEsY0FFQSwrREFGQTs7QUFJQTs7Ozs7OztBQU9BO0FBQ0E7QUFBQSxnQkFDQSxxQ0FEQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUFPQTtBQUNBO0FBQUEsZ0JBQ0EscUNBREE7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQUEsZ0JBQ0EsK0JBREE7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0csYUFGSCxNQUVHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFBQSxnQkFDQSwrQkFEQTs7QUFHQTtBQUNBOztBQUVBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQUEsZ0JBQ0EsK0JBREE7O0FBR0E7QUFDQTtBQUNHLGFBRkgsTUFFRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQU9BO0FBQ0E7QUFBQSxnQkFDQSxxQ0FEQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0EsZ0NBREE7QUFFQSw2Q0FGQTtBQUdBO0FBSEE7QUFLQTs7QUFFQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQUEsZ0JBQ0EsbUNBREE7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBLGdFQUNBLCtCQURBLEdBRUEsRUFGQTs7QUFJQTtBQUFBLGdCQUNBLHNCQURBOztBQUdBO0FBQ0Esb0VBQ0EsMkRBREEsRUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztBQVFBOztBQUVBOzs7Ozs7Ozs7OztBQVdBOztBQUVBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUFRQTtBQUNBOztBQUVBO0FBQUEsZ0JBQ0Esb0JBREE7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FBZUE7QUFDQTtBQUFBLGdCQUNBLHlCQURBO0FBQUEsZ0JBRUEsaUJBRkE7QUFBQSxnQkFHQSxpQkFIQTs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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YUE7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0ssZUFGTCxDQUVLO0FBQ0w7QUFDQTtBQUNLLGVBRkwsQ0FFSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMENBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQSxrQkFDQSxxREFEQTtBQUFBLGtCQUVBLHNCQUZBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBWEE7QUFZQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkE7QUFDQTtBQUNBLHdGQUNBLG9GQURBO0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQkE7QUFDQSwrQ0FDQSxVQURBLElBQ0EsY0FEQSxJQUNBLHlCQURBO0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBO0FBQ0EsZ0dBQ0EsOERBREE7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEJBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRCQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JBO0FBQ0E7QUFDQTs7QUFFQTs7O1NBN3pFQSxFLElBQUEsQyxJQUFBLEUscUdBQUEsRSw2R0FBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTs7Ozs7Ozs7O0FBU0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFBQSxjQUNBLG1DQURBOztBQUdBO0FBQ0E7QUFBQSxjQUNBLDZCQURBO0FBQUEsY0FFQSxxQ0FGQTtBQUFBLGNBR0EsNkJBSEE7O0FBS0E7Ozs7QUFJQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUpBO0FBTUE7QUFDQTs7QUFFQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFBQSxnQkFDQSxpQ0FEQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUFBLGdCQUNBLGlDQURBO0FBQUEsZ0JBRUEsc0JBRkE7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQUEsZ0JBQ0Esc0JBREE7QUFBQSxnQkFFQSxxQkFGQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQVdBO0FBQ0E7QUFBQSxnQkFDQSx3Q0FEQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBLGdCQUNBLHFCQURBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQUEsZ0JBQ0EsaUJBREE7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBLGFBRkE7QUFHQTs7QUFFQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSyxlQUZMLENBRUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0EsYUFGQTtBQUdBOztBQUVBO0FBQ0E7QUFBQSxjQUNBLDhCQURBO0FBQUEsY0FFQSw4QkFGQTs7QUFJQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0MsV0FIRDs7QUFLQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7O0FBS0E7O0FBRUE7QUFDQSx3Q0FDQSxnRUFDQSxPQURBLENBQ0Esd0RBREEsRUFDQSxPQURBLENBREEsR0FFQSxHQUZBOztBQUtBO0FBQ0E7QUFBQSxjQUNBLHFEQURBO0FBQUEsY0FFQSx1REFGQTtBQUFBLGNBR0EsMEJBSEE7QUFBQSxjQUlBLHFFQUpBOztBQU1BO0FBQ0E7QUFBQSxjQUNBLG9CQURBOztBQUdBO0FBQ0E7QUFBQSxjQUNBLDBDQURBOztBQUdBOzs7Ozs7O0FBT0E7QUFDQTtBQUFBLGdCQUNBLHFDQURBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQU9BO0FBQ0E7QUFBQSxnQkFDQSxxQ0FEQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFBQSxnQkFDQSwrQkFEQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRyxhQUZILE1BRUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUFBLGdCQUNBLCtCQURBOztBQUdBO0FBQ0E7O0FBRUE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFBQSxnQkFDQSwrQkFEQTs7QUFHQTtBQUNBO0FBQ0csYUFGSCxNQUVHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FBT0E7QUFDQTtBQUFBLGdCQUNBLHFDQURBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQSxnQ0FEQTtBQUVBLDZDQUZBO0FBR0E7QUFIQTtBQUtBOztBQUVBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztBQVFBO0FBQ0E7QUFBQSxnQkFDQSxtQ0FEQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQ0EsK0JBREEsR0FFQSxFQUZBOztBQUlBO0FBQUEsZ0JBQ0Esc0JBREE7O0FBR0E7QUFDQSxvRUFDQSwyREFEQSxFQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUFBLGdCQUNBLHdCQURBO0FBQUEsZ0JBRUEsZUFGQTtBQUFBLGdCQUdBLHFCQUhBO0FBQUEsZ0JBSUEsV0FKQTtBQUFBLGdCQUtBLDRCQUxBOztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBSEEsTUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQ0E7QUFDQTtBQUFBLGtCQUNBLDZDQURBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBUkEsTUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUFBLGdCQUNBLHFCQURBOztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08saUJBSFAsTUFHTztBQUNQO0FBQ0E7QUFDSyxlQVBMLE1BT0s7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQVdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBLGdCQUNBLFdBREE7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0csYUFGSDtBQUdBOztBQUVBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQUEsZ0JBQ0EscUJBREE7QUFBQSxnQkFFQSxXQUZBOztBQUlBO0FBQ0E7QUFBQSxrQkFDQSxtQkFEQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFBQSxrQkFDQSxVQURBO0FBQUEsa0JBRUEsMENBRkE7QUFBQSxrQkFHQSxxQkFIQTs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBaEJBO0FBaUJBOztBQUVBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0Esb0NBQ0EsZ0RBREEsR0FFQSxRQUZBO0FBR0E7O0FBRUE7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUFPQTs7QUFFQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBUEE7O0FBU0E7Ozs7Ozs7QUFPQTtBQUNBLDJEQUNBLHdEQURBO0FBRUE7O0FBRUE7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBLGdDQUNBLGdEQURBLEtBRUEsOENBRkE7QUFHQTs7QUFFQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQSxtR0FDQSxxQkFEQSxHQUVBLGNBRkE7QUFHQTs7QUFFQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQU9BO0FBQ0E7QUFBQSxnQkFDQSxrRUFEQTs7QUFHQTtBQUNBOztBQUVBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQU9BO0FBQ0E7QUFD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InNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vZXhlbXBsZS9pbmRleC5qc1wiKTtcbiIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIk1hdGVyaWFsQ29sb3JQaWNrZXJcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiTWF0ZXJpYWxDb2xvclBpY2tlclwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZ3JpZC13cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7IH1cXG5cXG4uZ3JpZCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDsgfVxcblxcbi5saW5lIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlSW4gMnMgZWFzZTtcXG4gIGFuaW1hdGlvbjogZmFkZUluIDJzIGVhc2U7IH1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHtcXG4gIDAlIHsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7IH0gfVxcblxcbkBrZXlmcmFtZXMgZmFkZUluIHtcXG4gIDAlIHsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7IH0gfVxcblxcbi5ncm93IHtcXG4gIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7IH1cXG5cXG4uZ3Jvdzpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuOCk7IH1cXG5cXG4uc3F1YXJlIHtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLm1kYy1lbGV2YXRpb24tLXowIHtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxcblxcbi5tZGMtZWxldmF0aW9uLS16MSB7XFxuICBib3gtc2hhZG93OiAwcHggMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XFxuXFxuLm1kYy1lbGV2YXRpb24tLXoyIHtcXG4gIGJveC1zaGFkb3c6IDBweCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cXG5cXG4ubWRjLWVsZXZhdGlvbi0tejMge1xcbiAgYm94LXNoYWRvdzogMHB4IDNweCAzcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAzcHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxcblxcbi5tZGMtZWxldmF0aW9uLS16NCB7XFxuICBib3gtc2hhZG93OiAwcHggMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDRweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxcblxcbi5tZGMtZWxldmF0aW9uLS16NSB7XFxuICBib3gtc2hhZG93OiAwcHggM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDVweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggMTRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxcblxcbi5tZGMtZWxldmF0aW9uLS16NiB7XFxuICBib3gtc2hhZG93OiAwcHggM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDZweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDE4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cXG5cXG4ubWRjLWVsZXZhdGlvbi0tejcge1xcbiAgYm94LXNoYWRvdzogMHB4IDRweCA1cHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCA3cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDJweCAxNnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XFxuXFxuLm1kYy1lbGV2YXRpb24tLXo4IHtcXG4gIGJveC1zaGFkb3c6IDBweCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxcblxcbi5tZGMtZWxldmF0aW9uLS16OSB7XFxuICBib3gtc2hhZG93OiAwcHggNXB4IDZweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDlweCAxMnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggM3B4IDE2cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cXG5cXG4ubWRjLWVsZXZhdGlvbi0tejEwIHtcXG4gIGJveC1zaGFkb3c6IDBweCA2cHggNnB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMTBweCAxNHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggNHB4IDE4cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cXG5cXG4ubWRjLWVsZXZhdGlvbi0tejExIHtcXG4gIGJveC1zaGFkb3c6IDBweCA2cHggN3B4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMTFweCAxNXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggNHB4IDIwcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cXG5cXG4ubWRjLWVsZXZhdGlvbi0tejEyIHtcXG4gIGJveC1zaGFkb3c6IDBweCA3cHggOHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMTJweCAxN3B4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggNXB4IDIycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cXG5cXG4ubWRjLWVsZXZhdGlvbi0tejEzIHtcXG4gIGJveC1zaGFkb3c6IDBweCA3cHggOHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMTNweCAxOXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggNXB4IDI0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cXG5cXG4ubWRjLWVsZXZhdGlvbi0tejE0IHtcXG4gIGJveC1zaGFkb3c6IDBweCA3cHggOXB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMTRweCAyMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggNXB4IDI2cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cXG5cXG4ubWRjLWVsZXZhdGlvbi0tejE1IHtcXG4gIGJveC1zaGFkb3c6IDBweCA4cHggOXB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMTVweCAyMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggNnB4IDI4cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cXG5cXG4ubWRjLWVsZXZhdGlvbi0tejE2IHtcXG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDE2cHggMjRweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDZweCAzMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XFxuXFxuLm1kYy1lbGV2YXRpb24tLXoxNyB7XFxuICBib3gtc2hhZG93OiAwcHggOHB4IDExcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAxN3B4IDI2cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA2cHggMzJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxcblxcbi5tZGMtZWxldmF0aW9uLS16MTgge1xcbiAgYm94LXNoYWRvdzogMHB4IDlweCAxMXB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMThweCAyOHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggN3B4IDM0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cXG5cXG4ubWRjLWVsZXZhdGlvbi0tejE5IHtcXG4gIGJveC1zaGFkb3c6IDBweCA5cHggMTJweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDE5cHggMjlweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDdweCAzNnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XFxuXFxuLm1kYy1lbGV2YXRpb24tLXoyMCB7XFxuICBib3gtc2hhZG93OiAwcHggMTBweCAxM3B4IC02cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMjBweCAzMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggOHB4IDM4cHggN3B4IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cXG5cXG4ubWRjLWVsZXZhdGlvbi0tejIxIHtcXG4gIGJveC1zaGFkb3c6IDBweCAxMHB4IDEzcHggLTZweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAyMXB4IDMzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA4cHggNDBweCA3cHggcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxcblxcbi5tZGMtZWxldmF0aW9uLS16MjIge1xcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggMTRweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDIycHggMzVweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDhweCA0MnB4IDdweCByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XFxuXFxuLm1kYy1lbGV2YXRpb24tLXoyMyB7XFxuICBib3gtc2hhZG93OiAwcHggMTFweCAxNHB4IC03cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMjNweCAzNnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggOXB4IDQ0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cXG5cXG4ubWRjLWVsZXZhdGlvbi0tejI0IHtcXG4gIGJveC1zaGFkb3c6IDBweCAxMXB4IDE1cHggLTdweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAyNHB4IDM4cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA5cHggNDZweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxcblxcbi5tZGMtZWxldmF0aW9uLXRyYW5zaXRpb24ge1xcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyODBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xcbiAgd2lsbC1jaGFuZ2U6IGJveC1zaGFkb3c7IH1cXG5cXG4ucm91bmQtYnRuIHtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgbWFyZ2luOiAxNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICAtLW1kYy1yaXBwbGUtZmctc2l6ZTogMDtcXG4gIC0tbWRjLXJpcHBsZS1sZWZ0OiAwO1xcbiAgLS1tZGMtcmlwcGxlLXRvcDogMDtcXG4gIC0tbWRjLXJpcHBsZS1mZy1zY2FsZTogMTtcXG4gIC0tbWRjLXJpcHBsZS1mZy10cmFuc2xhdGUtZW5kOiAwO1xcbiAgLS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1zdGFydDogMDtcXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm0sIG9wYWNpdHk7IH1cXG4gIC5yb3VuZC1idG46OmJlZm9yZSwgLnJvdW5kLWJ0bjo6YWZ0ZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiOyB9XFxuICAucm91bmQtYnRuOjpiZWZvcmUge1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDE1bXMgbGluZWFyO1xcbiAgICB6LWluZGV4OiAxOyB9XFxuICAucm91bmQtYnRuLm1kYy1yaXBwbGUtdXBncmFkZWQ6OmJlZm9yZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUodmFyKC0tbWRjLXJpcHBsZS1mZy1zY2FsZSwgMSkpOyB9XFxuICAucm91bmQtYnRuLm1kYy1yaXBwbGUtdXBncmFkZWQ6OmFmdGVyIHtcXG4gICAgdG9wOiAwO1xcbiAgICAvKiBAbm9mbGlwICovXFxuICAgIGxlZnQ6IDA7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7IH1cXG4gIC5yb3VuZC1idG4ubWRjLXJpcHBsZS11cGdyYWRlZC0tdW5ib3VuZGVkOjphZnRlciB7XFxuICAgIHRvcDogdmFyKC0tbWRjLXJpcHBsZS10b3AsIDApO1xcbiAgICAvKiBAbm9mbGlwICovXFxuICAgIGxlZnQ6IHZhcigtLW1kYy1yaXBwbGUtbGVmdCwgMCk7IH1cXG4gIC5yb3VuZC1idG4ubWRjLXJpcHBsZS11cGdyYWRlZC0tZm9yZWdyb3VuZC1hY3RpdmF0aW9uOjphZnRlciB7XFxuICAgIGFuaW1hdGlvbjogMjI1bXMgbWRjLXJpcHBsZS1mZy1yYWRpdXMtaW4gZm9yd2FyZHMsIDc1bXMgbWRjLXJpcHBsZS1mZy1vcGFjaXR5LWluIGZvcndhcmRzOyB9XFxuICAucm91bmQtYnRuLm1kYy1yaXBwbGUtdXBncmFkZWQtLWZvcmVncm91bmQtZGVhY3RpdmF0aW9uOjphZnRlciB7XFxuICAgIGFuaW1hdGlvbjogMTUwbXMgbWRjLXJpcHBsZS1mZy1vcGFjaXR5LW91dDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tbWRjLXJpcHBsZS1mZy10cmFuc2xhdGUtZW5kLCAwKSkgc2NhbGUodmFyKC0tbWRjLXJpcHBsZS1mZy1zY2FsZSwgMSkpOyB9XFxuXFxuLmNvbG9yLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLmNvbG9yLWNvbnRhaW5lci1vcGVuIHtcXG4gIGRpc3BsYXk6IGJsb2NrOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuIiwiLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gIFNoYWxsb3cgdXBkYXRlXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vKiogUGVyZm9ybXMgYSBzaGFsbG93IHVwZGF0ZSBvZiBhbiBvYmplY3QgdXNpbmcgYSBwYXJ0aWFsIG9iamVjdCBvZiB0aGUgc2FtZSBzaGFwZS4gQSBuZXcgb2JqZWN0IGlzIHJldHVybmVkLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZShob3N0LCBzcGVjKSB7XG4gICAgdmFyIHJlc3VsdCA9IGNsb25lKGhvc3QpO1xuICAgIGZvciAodmFyIGtleSBpbiBzcGVjKSB7XG4gICAgICAgIHZhciBzcGVjVmFsdWUgPSBzcGVjW2tleV07XG4gICAgICAgIGlmIChzcGVjVmFsdWUgPT09IERFTEVURSkge1xuICAgICAgICAgICAgZGVsZXRlIHJlc3VsdFtrZXldO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0W2tleV0gPSBzcGVjVmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbi8vIFdlIGxpZSBhYm91dCB0aGUgcHVibGljIHR5cGUgc28gdGhhdCBvbmx5IGEgcHJvcGVydHkgdGhhdCBpcyBvcHRpb25hbCBvciB0aGF0IGNhbiBiZSBhc3NpZ25lZCB0byB1bmRlZmluZWQgY2FuIGJlIERFTEVURSdkXG4vKiogTWFya2VyIHVzZWQgdG8gZGVsZXRlIGEga2V5ICovXG5leHBvcnQgdmFyIERFTEVURSA9IHt9O1xudmFyIF9VcGRhdGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIF9VcGRhdGVyKGRhdGEpIHtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB9XG4gICAgX1VwZGF0ZXIucHJvdG90eXBlLmF0ID0gZnVuY3Rpb24gKGtleU9ySW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBfVXBkYXRlcih7IHR5cGU6ICdhdCcsIHBhcmVudDogdGhpcywgZmllbGQ6IGtleU9ySW5kZXggfSk7XG4gICAgfTtcbiAgICBfVXBkYXRlci5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBkb1NldCA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBfdGhpcy5jbG9uZUZvclVwZGF0ZSh0YXJnZXQpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5uYW1lID09PSAnYWJvcnRlZCcpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICAgICAgICAgIHZhciBjbG9uZWRUYXJnZXQgPSByZXN1bHQuY2xvbmVkVGFyZ2V0LCBsZWFmSG9zdCA9IHJlc3VsdC5sZWFmSG9zdCwgZmllbGQgPSByZXN1bHQuZmllbGQ7XG4gICAgICAgICAgICB2YWx1ZSA9PT0gREVMRVRFID8gZGVsZXRlIGxlYWZIb3N0W2ZpZWxkXSA6IGxlYWZIb3N0W2ZpZWxkXSA9IHZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIGNsb25lZFRhcmdldDtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGJvdW5kVGFyZ2V0ID0gdGhpcy5maW5kQm91bmRUYXJnZXQoKTtcbiAgICAgICAgcmV0dXJuIGJvdW5kVGFyZ2V0XG4gICAgICAgICAgICA/IGRvU2V0KGJvdW5kVGFyZ2V0KVxuICAgICAgICAgICAgOiBkb1NldDtcbiAgICB9O1xuICAgIF9VcGRhdGVyLnByb3RvdHlwZS5tb2RpZnkgPSBmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGRvTW9kaWZ5ID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IF90aGlzLmNsb25lRm9yVXBkYXRlKHRhcmdldCk7XG4gICAgICAgICAgICBpZiAocmVzdWx0Lm5hbWUgPT09ICdhYm9ydGVkJylcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgICAgICAgICAgdmFyIGNsb25lZFRhcmdldCA9IHJlc3VsdC5jbG9uZWRUYXJnZXQsIGxlYWZIb3N0ID0gcmVzdWx0LmxlYWZIb3N0LCBmaWVsZCA9IHJlc3VsdC5maWVsZDtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IG1vZGlmaWVyKGxlYWZIb3N0W2ZpZWxkXSk7XG4gICAgICAgICAgICB2YWx1ZSA9PT0gREVMRVRFID8gZGVsZXRlIGxlYWZIb3N0W2ZpZWxkXSA6IGxlYWZIb3N0W2ZpZWxkXSA9IHZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIGNsb25lZFRhcmdldDtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGJvdW5kVGFyZ2V0ID0gdGhpcy5maW5kQm91bmRUYXJnZXQoKTtcbiAgICAgICAgcmV0dXJuIGJvdW5kVGFyZ2V0XG4gICAgICAgICAgICA/IGRvTW9kaWZ5KGJvdW5kVGFyZ2V0KVxuICAgICAgICAgICAgOiBkb01vZGlmeTtcbiAgICB9O1xuICAgIF9VcGRhdGVyLnByb3RvdHlwZS53aXRoRGVmYXVsdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gbmV3IF9VcGRhdGVyKHsgdHlwZTogJ3dpdGhEZWZhdWx0JywgcGFyZW50OiB0aGlzLCBkZWZhdWx0VmFsdWU6IHZhbHVlIH0pO1xuICAgIH07XG4gICAgX1VwZGF0ZXIucHJvdG90eXBlLmFib3J0SWZVbmRlZiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBfVXBkYXRlcih7IHR5cGU6ICdhYm9ydElmVW5kZWYnLCBwYXJlbnQ6IHRoaXMgfSk7XG4gICAgfTtcbiAgICBfVXBkYXRlci5wcm90b3R5cGUuZmluZEJvdW5kVGFyZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY3VycmVudCA9IHRoaXM7XG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudC5kYXRhLnR5cGUgPT09ICdyb290JylcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudC5kYXRhLmJvdW5kVGFyZ2V0O1xuICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQuZGF0YS5wYXJlbnQ7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIF9VcGRhdGVyLnByb3RvdHlwZS5wYXJlbnRVcGRhdGVycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHVwZGF0ZXJzID0gW3RoaXNdO1xuICAgICAgICB2YXIgcGFyZW50VXBkYXRlciA9IHRoaXMuZGF0YS5wYXJlbnQ7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgcm9vdCB1cGRhdGVyXG4gICAgICAgIHdoaWxlIChwYXJlbnRVcGRhdGVyICYmIHBhcmVudFVwZGF0ZXIuZGF0YS5wYXJlbnQpIHtcbiAgICAgICAgICAgIHVwZGF0ZXJzLnVuc2hpZnQocGFyZW50VXBkYXRlcik7XG4gICAgICAgICAgICBwYXJlbnRVcGRhdGVyID0gcGFyZW50VXBkYXRlci5kYXRhLnBhcmVudDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdXBkYXRlcnM7XG4gICAgfTtcbiAgICBfVXBkYXRlci5wcm90b3R5cGUuZ2V0TmV4dFZhbHVlID0gZnVuY3Rpb24gKHByZXZpb3VzSG9zdCwgaG9zdCwgZmllbGQsIGlzTGFzdCkge1xuICAgICAgICBpZiAodGhpcy5kYXRhLnR5cGUgPT09ICdhdCcpIHtcbiAgICAgICAgICAgIHZhciBuZXdGaWVsZCA9IHRoaXMuZGF0YS5maWVsZDtcbiAgICAgICAgICAgIHZhciB2YWx1ZV8xID0gaG9zdFtuZXdGaWVsZF07XG4gICAgICAgICAgICB2YXIgbmV4dFZhbHVlID0gaXNPYmplY3RPckFycmF5KHZhbHVlXzEpID8gY2xvbmUodmFsdWVfMSkgOiB2YWx1ZV8xO1xuICAgICAgICAgICAgdmFyIG5ld0hvc3RfMSA9IGlzTGFzdCA/IGhvc3QgOiBuZXh0VmFsdWU7XG4gICAgICAgICAgICBob3N0W3RoaXMuZGF0YS5maWVsZF0gPSBuZXh0VmFsdWU7XG4gICAgICAgICAgICByZXR1cm4geyBob3N0OiBuZXdIb3N0XzEsIGZpZWxkOiBuZXdGaWVsZCB9O1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YWx1ZSA9IHByZXZpb3VzSG9zdFtmaWVsZF07XG4gICAgICAgIGlmICh0aGlzLmRhdGEudHlwZSA9PT0gJ2Fib3J0SWZVbmRlZicgJiYgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgaG9zdDogaG9zdCwgZmllbGQ6IGZpZWxkLCBhYm9ydGVkOiB0cnVlIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZGF0YS50eXBlID09PSAnd2l0aERlZmF1bHQnICYmIHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHZhciBuZXh0VmFsdWUgPSB0aGlzLmRhdGEuZGVmYXVsdFZhbHVlO1xuICAgICAgICAgICAgdmFyIG5ld0hvc3RfMiA9IGlzTGFzdCA/IHByZXZpb3VzSG9zdCA6IG5leHRWYWx1ZTtcbiAgICAgICAgICAgIHByZXZpb3VzSG9zdFtmaWVsZF0gPSBuZXh0VmFsdWU7XG4gICAgICAgICAgICByZXR1cm4geyBob3N0OiBuZXdIb3N0XzIsIGZpZWxkOiBmaWVsZCB9O1xuICAgICAgICB9XG4gICAgICAgIHZhciBuZXdIb3N0ID0gaXNMYXN0ID8gcHJldmlvdXNIb3N0IDogaG9zdDtcbiAgICAgICAgcmV0dXJuIHsgaG9zdDogbmV3SG9zdCwgZmllbGQ6IGZpZWxkIH07XG4gICAgfTtcbiAgICBfVXBkYXRlci5wcm90b3R5cGUuY2xvbmVGb3JVcGRhdGUgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgIHZhciB1cGRhdGVycyA9IHRoaXMucGFyZW50VXBkYXRlcnMoKTtcbiAgICAgICAgdmFyIG9iaiA9IGNsb25lKHRhcmdldCk7XG4gICAgICAgIHZhciBwcmV2aW91c0hvc3QgPSBvYmo7XG4gICAgICAgIHZhciBob3N0ID0gb2JqO1xuICAgICAgICB2YXIgZmllbGQgPSAnJztcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB1cGRhdGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHVwZGF0ZXJzW2ldLmdldE5leHRWYWx1ZShwcmV2aW91c0hvc3QsIGhvc3QsIGZpZWxkLCBpID09PSB1cGRhdGVycy5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuYWJvcnRlZClcbiAgICAgICAgICAgICAgICByZXR1cm4geyBuYW1lOiAnYWJvcnRlZCcgfTtcbiAgICAgICAgICAgIHByZXZpb3VzSG9zdCA9IGhvc3Q7XG4gICAgICAgICAgICBob3N0ID0gcmVzdWx0Lmhvc3Q7XG4gICAgICAgICAgICBmaWVsZCA9IHJlc3VsdC5maWVsZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogJ3Jlc3VsdCcsXG4gICAgICAgICAgICBjbG9uZWRUYXJnZXQ6IG9iaixcbiAgICAgICAgICAgIGxlYWZIb3N0OiBob3N0LFxuICAgICAgICAgICAgZmllbGQ6IGZpZWxkXG4gICAgICAgIH07XG4gICAgfTtcbiAgICByZXR1cm4gX1VwZGF0ZXI7XG59KCkpO1xuZnVuY3Rpb24gaXNPYmplY3RPckFycmF5KG9iaikge1xuICAgIHJldHVybiBvYmogIT09IG51bGwgJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCc7XG59XG5mdW5jdGlvbiBjbG9uZShvYmopIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShvYmopKVxuICAgICAgICByZXR1cm4gb2JqLnNsaWNlKCk7XG4gICAgdmFyIGNsb25lZCA9IHt9O1xuICAgIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IGNsb25lZFtrZXldID0gb2JqW2tleV07IH0pO1xuICAgIHJldHVybiBjbG9uZWQ7XG59XG5leHBvcnQgZnVuY3Rpb24gZGVlcFVwZGF0ZSh0YXJnZXQpIHtcbiAgICByZXR1cm4gbmV3IF9VcGRhdGVyKHsgdHlwZTogJ3Jvb3QnLCBib3VuZFRhcmdldDogdGFyZ2V0IH0pO1xufVxuIiwiLyoqXG4gKiBsb2Rhc2ggKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2R1bGFyaXplIGV4cG9ydHM9XCJucG1cIiAtbyAuL2BcbiAqIENvcHlyaWdodCBqUXVlcnkgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzIDxodHRwczovL2pxdWVyeS5vcmcvPlxuICogUmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICovXG5cbi8qKiBVc2VkIGFzIHRoZSBzaXplIHRvIGVuYWJsZSBsYXJnZSBhcnJheSBvcHRpbWl6YXRpb25zLiAqL1xudmFyIExBUkdFX0FSUkFZX1NJWkUgPSAyMDA7XG5cbi8qKiBVc2VkIGFzIHRoZSBgVHlwZUVycm9yYCBtZXNzYWdlIGZvciBcIkZ1bmN0aW9uc1wiIG1ldGhvZHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIGNvbXBhcmlzb24gc3R5bGVzLiAqL1xudmFyIFVOT1JERVJFRF9DT01QQVJFX0ZMQUcgPSAxLFxuICAgIFBBUlRJQUxfQ09NUEFSRV9GTEFHID0gMjtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgSU5GSU5JVFkgPSAxIC8gMCxcbiAgICBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHByb21pc2VUYWcgPSAnW29iamVjdCBQcm9taXNlXScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XScsXG4gICAgZmxvYXQzMlRhZyA9ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcbiAgICBpbnQ4VGFnID0gJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgaW50MTZUYWcgPSAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgdWludDhUYWcgPSAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgdWludDhDbGFtcGVkVGFnID0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgIHVpbnQzMlRhZyA9ICdbb2JqZWN0IFVpbnQzMkFycmF5XSc7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIHByb3BlcnR5IG5hbWVzIHdpdGhpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZUlzRGVlcFByb3AgPSAvXFwufFxcWyg/OlteW1xcXV0qfChbXCInXSkoPzooPyFcXDEpW15cXFxcXXxcXFxcLikqP1xcMSlcXF0vLFxuICAgIHJlSXNQbGFpblByb3AgPSAvXlxcdyokLyxcbiAgICByZUxlYWRpbmdEb3QgPSAvXlxcLi8sXG4gICAgcmVQcm9wTmFtZSA9IC9bXi5bXFxdXSt8XFxbKD86KC0/XFxkKyg/OlxcLlxcZCspPyl8KFtcIiddKSgoPzooPyFcXDIpW15cXFxcXXxcXFxcLikqPylcXDIpXFxdfCg/PSg/OlxcLnxcXFtcXF0pKD86XFwufFxcW1xcXXwkKSkvZztcblxuLyoqXG4gKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgXG4gKiBbc3ludGF4IGNoYXJhY3RlcnNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXBhdHRlcm5zKS5cbiAqL1xudmFyIHJlUmVnRXhwQ2hhciA9IC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggYmFja3NsYXNoZXMgaW4gcHJvcGVydHkgcGF0aHMuICovXG52YXIgcmVFc2NhcGVDaGFyID0gL1xcXFwoXFxcXCk/L2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBob3N0IGNvbnN0cnVjdG9ycyAoU2FmYXJpKS4gKi9cbnZhciByZUlzSG9zdEN0b3IgPSAvXlxcW29iamVjdCAuKz9Db25zdHJ1Y3RvclxcXSQvO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgdW5zaWduZWQgaW50ZWdlciB2YWx1ZXMuICovXG52YXIgcmVJc1VpbnQgPSAvXig/OjB8WzEtOV1cXGQqKSQvO1xuXG4vKiogVXNlZCB0byBpZGVudGlmeSBgdG9TdHJpbmdUYWdgIHZhbHVlcyBvZiB0eXBlZCBhcnJheXMuICovXG52YXIgdHlwZWRBcnJheVRhZ3MgPSB7fTtcbnR5cGVkQXJyYXlUYWdzW2Zsb2F0MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbZmxvYXQ2NFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50OFRhZ10gPSB0eXBlZEFycmF5VGFnc1tpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDhUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQ4Q2xhbXBlZFRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQzMlRhZ10gPSB0cnVlO1xudHlwZWRBcnJheVRhZ3NbYXJnc1RhZ10gPSB0eXBlZEFycmF5VGFnc1thcnJheVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbYXJyYXlCdWZmZXJUYWddID0gdHlwZWRBcnJheVRhZ3NbYm9vbFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZGF0YVZpZXdUYWddID0gdHlwZWRBcnJheVRhZ3NbZGF0ZVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZXJyb3JUYWddID0gdHlwZWRBcnJheVRhZ3NbZnVuY1RhZ10gPVxudHlwZWRBcnJheVRhZ3NbbWFwVGFnXSA9IHR5cGVkQXJyYXlUYWdzW251bWJlclRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbb2JqZWN0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3JlZ2V4cFRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbc2V0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3N0cmluZ1RhZ10gPVxudHlwZWRBcnJheVRhZ3Nbd2Vha01hcFRhZ10gPSBmYWxzZTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgcHJvY2Vzc2AgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVQcm9jZXNzID0gbW9kdWxlRXhwb3J0cyAmJiBmcmVlR2xvYmFsLnByb2Nlc3M7XG5cbi8qKiBVc2VkIHRvIGFjY2VzcyBmYXN0ZXIgTm9kZS5qcyBoZWxwZXJzLiAqL1xudmFyIG5vZGVVdGlsID0gKGZ1bmN0aW9uKCkge1xuICB0cnkge1xuICAgIHJldHVybiBmcmVlUHJvY2VzcyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nKCd1dGlsJyk7XG4gIH0gY2F0Y2ggKGUpIHt9XG59KCkpO1xuXG4vKiBOb2RlLmpzIGhlbHBlciByZWZlcmVuY2VzLiAqL1xudmFyIG5vZGVJc1R5cGVkQXJyYXkgPSBub2RlVXRpbCAmJiBub2RlVXRpbC5pc1R5cGVkQXJyYXk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLm1hcGAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlXG4gKiBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgbWFwcGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhcnJheU1hcChhcnJheSwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA/IGFycmF5Lmxlbmd0aCA6IDAsXG4gICAgICByZXN1bHQgPSBBcnJheShsZW5ndGgpO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5zb21lYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWVcbiAqIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFueSBlbGVtZW50IHBhc3NlcyB0aGUgcHJlZGljYXRlIGNoZWNrLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlTb21lKGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA/IGFycmF5Lmxlbmd0aCA6IDA7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5wcm9wZXJ0eWAgd2l0aG91dCBzdXBwb3J0IGZvciBkZWVwIHBhdGhzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGFjY2Vzc29yIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlUHJvcGVydHkoa2V5KSB7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbiAgfTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50aW1lc2Agd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzXG4gKiBvciBtYXggYXJyYXkgbGVuZ3RoIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiB0aW1lcyB0byBpbnZva2UgYGl0ZXJhdGVlYC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUaW1lcyhuLCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG4pO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbikge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShpbmRleCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy51bmFyeWAgd2l0aG91dCBzdXBwb3J0IGZvciBzdG9yaW5nIG1ldGFkYXRhLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjYXAgYXJndW1lbnRzIGZvci5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGNhcHBlZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVVuYXJ5KGZ1bmMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIGZ1bmModmFsdWUpO1xuICB9O1xufVxuXG4vKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHByb3BlcnR5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBnZXRWYWx1ZShvYmplY3QsIGtleSkge1xuICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGhvc3Qgb2JqZWN0IGluIElFIDwgOS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGhvc3Qgb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSG9zdE9iamVjdCh2YWx1ZSkge1xuICAvLyBNYW55IGhvc3Qgb2JqZWN0cyBhcmUgYE9iamVjdGAgb2JqZWN0cyB0aGF0IGNhbiBjb2VyY2UgdG8gc3RyaW5nc1xuICAvLyBkZXNwaXRlIGhhdmluZyBpbXByb3Blcmx5IGRlZmluZWQgYHRvU3RyaW5nYCBtZXRob2RzLlxuICB2YXIgcmVzdWx0ID0gZmFsc2U7XG4gIGlmICh2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZS50b1N0cmluZyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJlc3VsdCA9ICEhKHZhbHVlICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgbWFwYCB0byBpdHMga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUga2V5LXZhbHVlIHBhaXJzLlxuICovXG5mdW5jdGlvbiBtYXBUb0FycmF5KG1hcCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG1hcC5zaXplKTtcblxuICBtYXAuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gW2tleSwgdmFsdWVdO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgdW5hcnkgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGBmdW5jYCB3aXRoIGl0cyBhcmd1bWVudCB0cmFuc2Zvcm1lZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gd3JhcC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybSBUaGUgYXJndW1lbnQgdHJhbnNmb3JtLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG92ZXJBcmcoZnVuYywgdHJhbnNmb3JtKSB7XG4gIHJldHVybiBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gZnVuYyh0cmFuc2Zvcm0oYXJnKSk7XG4gIH07XG59XG5cbi8qKlxuICogQ29udmVydHMgYHNldGAgdG8gYW4gYXJyYXkgb2YgaXRzIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNldCBUaGUgc2V0IHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHZhbHVlcy5cbiAqL1xuZnVuY3Rpb24gc2V0VG9BcnJheShzZXQpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShzZXQuc2l6ZSk7XG5cbiAgc2V0LmZvckVhY2goZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXN1bHRbKytpbmRleF0gPSB2YWx1ZTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBhcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlLFxuICAgIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZSxcbiAgICBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvdmVycmVhY2hpbmcgY29yZS1qcyBzaGltcy4gKi9cbnZhciBjb3JlSnNEYXRhID0gcm9vdFsnX19jb3JlLWpzX3NoYXJlZF9fJ107XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtZXRob2RzIG1hc3F1ZXJhZGluZyBhcyBuYXRpdmUuICovXG52YXIgbWFza1NyY0tleSA9IChmdW5jdGlvbigpIHtcbiAgdmFyIHVpZCA9IC9bXi5dKyQvLmV4ZWMoY29yZUpzRGF0YSAmJiBjb3JlSnNEYXRhLmtleXMgJiYgY29yZUpzRGF0YS5rZXlzLklFX1BST1RPIHx8ICcnKTtcbiAgcmV0dXJuIHVpZCA/ICgnU3ltYm9sKHNyYylfMS4nICsgdWlkKSA6ICcnO1xufSgpKTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBpZiBhIG1ldGhvZCBpcyBuYXRpdmUuICovXG52YXIgcmVJc05hdGl2ZSA9IFJlZ0V4cCgnXicgK1xuICBmdW5jVG9TdHJpbmcuY2FsbChoYXNPd25Qcm9wZXJ0eSkucmVwbGFjZShyZVJlZ0V4cENoYXIsICdcXFxcJCYnKVxuICAucmVwbGFjZSgvaGFzT3duUHJvcGVydHl8KGZ1bmN0aW9uKS4qPyg/PVxcXFxcXCgpfCBmb3IgLis/KD89XFxcXFxcXSkvZywgJyQxLio/JykgKyAnJCdcbik7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sLFxuICAgIFVpbnQ4QXJyYXkgPSByb290LlVpbnQ4QXJyYXksXG4gICAgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZSxcbiAgICBzcGxpY2UgPSBhcnJheVByb3RvLnNwbGljZTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUtleXMgPSBvdmVyQXJnKE9iamVjdC5rZXlzLCBPYmplY3QpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgRGF0YVZpZXcgPSBnZXROYXRpdmUocm9vdCwgJ0RhdGFWaWV3JyksXG4gICAgTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdNYXAnKSxcbiAgICBQcm9taXNlID0gZ2V0TmF0aXZlKHJvb3QsICdQcm9taXNlJyksXG4gICAgU2V0ID0gZ2V0TmF0aXZlKHJvb3QsICdTZXQnKSxcbiAgICBXZWFrTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdXZWFrTWFwJyksXG4gICAgbmF0aXZlQ3JlYXRlID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2NyZWF0ZScpO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWFwcywgc2V0cywgYW5kIHdlYWttYXBzLiAqL1xudmFyIGRhdGFWaWV3Q3RvclN0cmluZyA9IHRvU291cmNlKERhdGFWaWV3KSxcbiAgICBtYXBDdG9yU3RyaW5nID0gdG9Tb3VyY2UoTWFwKSxcbiAgICBwcm9taXNlQ3RvclN0cmluZyA9IHRvU291cmNlKFByb21pc2UpLFxuICAgIHNldEN0b3JTdHJpbmcgPSB0b1NvdXJjZShTZXQpLFxuICAgIHdlYWtNYXBDdG9yU3RyaW5nID0gdG9Tb3VyY2UoV2Vha01hcCk7XG5cbi8qKiBVc2VkIHRvIGNvbnZlcnQgc3ltYm9scyB0byBwcmltaXRpdmVzIGFuZCBzdHJpbmdzLiAqL1xudmFyIHN5bWJvbFByb3RvID0gU3ltYm9sID8gU3ltYm9sLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcbiAgICBzeW1ib2xWYWx1ZU9mID0gc3ltYm9sUHJvdG8gPyBzeW1ib2xQcm90by52YWx1ZU9mIDogdW5kZWZpbmVkLFxuICAgIHN5bWJvbFRvU3RyaW5nID0gc3ltYm9sUHJvdG8gPyBzeW1ib2xQcm90by50b1N0cmluZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgaGFzaCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIEhhc2goZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPyBlbnRyaWVzLmxlbmd0aCA6IDA7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIEhhc2hcbiAqL1xuZnVuY3Rpb24gaGFzaENsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmF0aXZlQ3JlYXRlID8gbmF0aXZlQ3JlYXRlKG51bGwpIDoge307XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7T2JqZWN0fSBoYXNoIFRoZSBoYXNoIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoRGVsZXRlKGtleSkge1xuICByZXR1cm4gdGhpcy5oYXMoa2V5KSAmJiBkZWxldGUgdGhpcy5fX2RhdGFfX1trZXldO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGhhc2ggdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gaGFzaEdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAobmF0aXZlQ3JlYXRlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGRhdGFba2V5XTtcbiAgICByZXR1cm4gcmVzdWx0ID09PSBIQVNIX1VOREVGSU5FRCA/IHVuZGVmaW5lZCA6IHJlc3VsdDtcbiAgfVxuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpID8gZGF0YVtrZXldIDogdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIGhhc2ggdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hIYXMoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgcmV0dXJuIG5hdGl2ZUNyZWF0ZSA/IGRhdGFba2V5XSAhPT0gdW5kZWZpbmVkIDogaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIGhhc2ggYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBoYXNoIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBoYXNoU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBkYXRhW2tleV0gPSAobmF0aXZlQ3JlYXRlICYmIHZhbHVlID09PSB1bmRlZmluZWQpID8gSEFTSF9VTkRFRklORUQgOiB2YWx1ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBIYXNoYC5cbkhhc2gucHJvdG90eXBlLmNsZWFyID0gaGFzaENsZWFyO1xuSGFzaC5wcm90b3R5cGVbJ2RlbGV0ZSddID0gaGFzaERlbGV0ZTtcbkhhc2gucHJvdG90eXBlLmdldCA9IGhhc2hHZXQ7XG5IYXNoLnByb3RvdHlwZS5oYXMgPSBoYXNoSGFzO1xuSGFzaC5wcm90b3R5cGUuc2V0ID0gaGFzaFNldDtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGxpc3QgY2FjaGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBMaXN0Q2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPyBlbnRyaWVzLmxlbmd0aCA6IDA7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IFtdO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgbGFzdEluZGV4ID0gZGF0YS5sZW5ndGggLSAxO1xuICBpZiAoaW5kZXggPT0gbGFzdEluZGV4KSB7XG4gICAgZGF0YS5wb3AoKTtcbiAgfSBlbHNlIHtcbiAgICBzcGxpY2UuY2FsbChkYXRhLCBpbmRleCwgMSk7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICByZXR1cm4gaW5kZXggPCAwID8gdW5kZWZpbmVkIDogZGF0YVtpbmRleF1bMV07XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBhc3NvY0luZGV4T2YodGhpcy5fX2RhdGFfXywga2V5KSA+IC0xO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIGxpc3QgY2FjaGUgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGxpc3QgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIGRhdGEucHVzaChba2V5LCB2YWx1ZV0pO1xuICB9IGVsc2Uge1xuICAgIGRhdGFbaW5kZXhdWzFdID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBMaXN0Q2FjaGVgLlxuTGlzdENhY2hlLnByb3RvdHlwZS5jbGVhciA9IGxpc3RDYWNoZUNsZWFyO1xuTGlzdENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBsaXN0Q2FjaGVEZWxldGU7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmdldCA9IGxpc3RDYWNoZUdldDtcbkxpc3RDYWNoZS5wcm90b3R5cGUuaGFzID0gbGlzdENhY2hlSGFzO1xuTGlzdENhY2hlLnByb3RvdHlwZS5zZXQgPSBsaXN0Q2FjaGVTZXQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hcCBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBNYXBDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA/IGVudHJpZXMubGVuZ3RoIDogMDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUNsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0ge1xuICAgICdoYXNoJzogbmV3IEhhc2gsXG4gICAgJ21hcCc6IG5ldyAoTWFwIHx8IExpc3RDYWNoZSksXG4gICAgJ3N0cmluZyc6IG5ldyBIYXNoXG4gIH07XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZURlbGV0ZShrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KVsnZGVsZXRlJ10oa2V5KTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBtYXAgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlR2V0KGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmdldChrZXkpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIG1hcCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmhhcyhrZXkpO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIG1hcCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBtYXAgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLnNldChrZXksIHZhbHVlKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBNYXBDYWNoZWAuXG5NYXBDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBtYXBDYWNoZUNsZWFyO1xuTWFwQ2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IG1hcENhY2hlRGVsZXRlO1xuTWFwQ2FjaGUucHJvdG90eXBlLmdldCA9IG1hcENhY2hlR2V0O1xuTWFwQ2FjaGUucHJvdG90eXBlLmhhcyA9IG1hcENhY2hlSGFzO1xuTWFwQ2FjaGUucHJvdG90eXBlLnNldCA9IG1hcENhY2hlU2V0O1xuXG4vKipcbiAqXG4gKiBDcmVhdGVzIGFuIGFycmF5IGNhY2hlIG9iamVjdCB0byBzdG9yZSB1bmlxdWUgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFt2YWx1ZXNdIFRoZSB2YWx1ZXMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIFNldENhY2hlKHZhbHVlcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcyA/IHZhbHVlcy5sZW5ndGggOiAwO1xuXG4gIHRoaXMuX19kYXRhX18gPSBuZXcgTWFwQ2FjaGU7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdGhpcy5hZGQodmFsdWVzW2luZGV4XSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBZGRzIGB2YWx1ZWAgdG8gdGhlIGFycmF5IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBhZGRcbiAqIEBtZW1iZXJPZiBTZXRDYWNoZVxuICogQGFsaWFzIHB1c2hcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNhY2hlLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIHNldENhY2hlQWRkKHZhbHVlKSB7XG4gIHRoaXMuX19kYXRhX18uc2V0KHZhbHVlLCBIQVNIX1VOREVGSU5FRCk7XG4gIHJldHVybiB0aGlzO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGluIHRoZSBhcnJheSBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgU2V0Q2FjaGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHNldENhY2hlSGFzKHZhbHVlKSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmhhcyh2YWx1ZSk7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBTZXRDYWNoZWAuXG5TZXRDYWNoZS5wcm90b3R5cGUuYWRkID0gU2V0Q2FjaGUucHJvdG90eXBlLnB1c2ggPSBzZXRDYWNoZUFkZDtcblNldENhY2hlLnByb3RvdHlwZS5oYXMgPSBzZXRDYWNoZUhhcztcblxuLyoqXG4gKiBDcmVhdGVzIGEgc3RhY2sgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gU3RhY2soZW50cmllcykge1xuICB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZShlbnRyaWVzKTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBTdGFja1xuICovXG5mdW5jdGlvbiBzdGFja0NsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgc3RhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc3RhY2tEZWxldGUoa2V5KSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fWydkZWxldGUnXShrZXkpO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIHN0YWNrIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBzdGFja0dldChrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uZ2V0KGtleSk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgc3RhY2sgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0hhcyhrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKGtleSk7XG59XG5cbi8qKlxuICogU2V0cyB0aGUgc3RhY2sgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgc3RhY2sgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGNhY2hlID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKGNhY2hlIGluc3RhbmNlb2YgTGlzdENhY2hlKSB7XG4gICAgdmFyIHBhaXJzID0gY2FjaGUuX19kYXRhX187XG4gICAgaWYgKCFNYXAgfHwgKHBhaXJzLmxlbmd0aCA8IExBUkdFX0FSUkFZX1NJWkUgLSAxKSkge1xuICAgICAgcGFpcnMucHVzaChba2V5LCB2YWx1ZV0pO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGNhY2hlID0gdGhpcy5fX2RhdGFfXyA9IG5ldyBNYXBDYWNoZShwYWlycyk7XG4gIH1cbiAgY2FjaGUuc2V0KGtleSwgdmFsdWUpO1xuICByZXR1cm4gdGhpcztcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYFN0YWNrYC5cblN0YWNrLnByb3RvdHlwZS5jbGVhciA9IHN0YWNrQ2xlYXI7XG5TdGFjay5wcm90b3R5cGVbJ2RlbGV0ZSddID0gc3RhY2tEZWxldGU7XG5TdGFjay5wcm90b3R5cGUuZ2V0ID0gc3RhY2tHZXQ7XG5TdGFjay5wcm90b3R5cGUuaGFzID0gc3RhY2tIYXM7XG5TdGFjay5wcm90b3R5cGUuc2V0ID0gc3RhY2tTZXQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiB0aGUgYXJyYXktbGlrZSBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5oZXJpdGVkIFNwZWNpZnkgcmV0dXJuaW5nIGluaGVyaXRlZCBwcm9wZXJ0eSBuYW1lcy5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TGlrZUtleXModmFsdWUsIGluaGVyaXRlZCkge1xuICAvLyBTYWZhcmkgOC4xIG1ha2VzIGBhcmd1bWVudHMuY2FsbGVlYCBlbnVtZXJhYmxlIGluIHN0cmljdCBtb2RlLlxuICAvLyBTYWZhcmkgOSBtYWtlcyBgYXJndW1lbnRzLmxlbmd0aGAgZW51bWVyYWJsZSBpbiBzdHJpY3QgbW9kZS5cbiAgdmFyIHJlc3VsdCA9IChpc0FycmF5KHZhbHVlKSB8fCBpc0FyZ3VtZW50cyh2YWx1ZSkpXG4gICAgPyBiYXNlVGltZXModmFsdWUubGVuZ3RoLCBTdHJpbmcpXG4gICAgOiBbXTtcblxuICB2YXIgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aCxcbiAgICAgIHNraXBJbmRleGVzID0gISFsZW5ndGg7XG5cbiAgZm9yICh2YXIga2V5IGluIHZhbHVlKSB7XG4gICAgaWYgKChpbmhlcml0ZWQgfHwgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwga2V5KSkgJiZcbiAgICAgICAgIShza2lwSW5kZXhlcyAmJiAoa2V5ID09ICdsZW5ndGgnIHx8IGlzSW5kZXgoa2V5LCBsZW5ndGgpKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgaW5kZXggYXQgd2hpY2ggdGhlIGBrZXlgIGlzIGZvdW5kIGluIGBhcnJheWAgb2Yga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0ga2V5IFRoZSBrZXkgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGFzc29jSW5kZXhPZihhcnJheSwga2V5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIGlmIChlcShhcnJheVtsZW5ndGhdWzBdLCBrZXkpKSB7XG4gICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZm9yRWFjaGAgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fE9iamVjdH0gY29sbGVjdGlvbiBUaGUgY29sbGVjdGlvbiB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fE9iamVjdH0gUmV0dXJucyBgY29sbGVjdGlvbmAuXG4gKi9cbnZhciBiYXNlRWFjaCA9IGNyZWF0ZUJhc2VFYWNoKGJhc2VGb3JPd24pO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBiYXNlRm9yT3duYCB3aGljaCBpdGVyYXRlcyBvdmVyIGBvYmplY3RgXG4gKiBwcm9wZXJ0aWVzIHJldHVybmVkIGJ5IGBrZXlzRnVuY2AgYW5kIGludm9rZXMgYGl0ZXJhdGVlYCBmb3IgZWFjaCBwcm9wZXJ0eS5cbiAqIEl0ZXJhdGVlIGZ1bmN0aW9ucyBtYXkgZXhpdCBpdGVyYXRpb24gZWFybHkgYnkgZXhwbGljaXRseSByZXR1cm5pbmcgYGZhbHNlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBrZXlzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBrZXlzIG9mIGBvYmplY3RgLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xudmFyIGJhc2VGb3IgPSBjcmVhdGVCYXNlRm9yKCk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZm9yT3duYCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gYmFzZUZvck93bihvYmplY3QsIGl0ZXJhdGVlKSB7XG4gIHJldHVybiBvYmplY3QgJiYgYmFzZUZvcihvYmplY3QsIGl0ZXJhdGVlLCBrZXlzKTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5nZXRgIHdpdGhvdXQgc3VwcG9ydCBmb3IgZGVmYXVsdCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcmVzb2x2ZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXQob2JqZWN0LCBwYXRoKSB7XG4gIHBhdGggPSBpc0tleShwYXRoLCBvYmplY3QpID8gW3BhdGhdIDogY2FzdFBhdGgocGF0aCk7XG5cbiAgdmFyIGluZGV4ID0gMCxcbiAgICAgIGxlbmd0aCA9IHBhdGgubGVuZ3RoO1xuXG4gIHdoaWxlIChvYmplY3QgIT0gbnVsbCAmJiBpbmRleCA8IGxlbmd0aCkge1xuICAgIG9iamVjdCA9IG9iamVjdFt0b0tleShwYXRoW2luZGV4KytdKV07XG4gIH1cbiAgcmV0dXJuIChpbmRleCAmJiBpbmRleCA9PSBsZW5ndGgpID8gb2JqZWN0IDogdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRUYWcodmFsdWUpIHtcbiAgcmV0dXJuIG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmhhc0luYCB3aXRob3V0IHN1cHBvcnQgZm9yIGRlZXAgcGF0aHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IGtleSBUaGUga2V5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSGFzSW4ob2JqZWN0LCBrZXkpIHtcbiAgcmV0dXJuIG9iamVjdCAhPSBudWxsICYmIGtleSBpbiBPYmplY3Qob2JqZWN0KTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc0VxdWFsYCB3aGljaCBzdXBwb3J0cyBwYXJ0aWFsIGNvbXBhcmlzb25zXG4gKiBhbmQgdHJhY2tzIHRyYXZlcnNlZCBvYmplY3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtib29sZWFufSBbYml0bWFza10gVGhlIGJpdG1hc2sgb2YgY29tcGFyaXNvbiBmbGFncy5cbiAqICBUaGUgYml0bWFzayBtYXkgYmUgY29tcG9zZWQgb2YgdGhlIGZvbGxvd2luZyBmbGFnczpcbiAqICAgICAxIC0gVW5vcmRlcmVkIGNvbXBhcmlzb25cbiAqICAgICAyIC0gUGFydGlhbCBjb21wYXJpc29uXG4gKiBAcGFyYW0ge09iamVjdH0gW3N0YWNrXSBUcmFja3MgdHJhdmVyc2VkIGB2YWx1ZWAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0VxdWFsKHZhbHVlLCBvdGhlciwgY3VzdG9taXplciwgYml0bWFzaywgc3RhY2spIHtcbiAgaWYgKHZhbHVlID09PSBvdGhlcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmICh2YWx1ZSA9PSBudWxsIHx8IG90aGVyID09IG51bGwgfHwgKCFpc09iamVjdCh2YWx1ZSkgJiYgIWlzT2JqZWN0TGlrZShvdGhlcikpKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXI7XG4gIH1cbiAgcmV0dXJuIGJhc2VJc0VxdWFsRGVlcCh2YWx1ZSwgb3RoZXIsIGJhc2VJc0VxdWFsLCBjdXN0b21pemVyLCBiaXRtYXNrLCBzdGFjayk7XG59XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbGAgZm9yIGFycmF5cyBhbmQgb2JqZWN0cyB3aGljaCBwZXJmb3Jtc1xuICogZGVlcCBjb21wYXJpc29ucyBhbmQgdHJhY2tzIHRyYXZlcnNlZCBvYmplY3RzIGVuYWJsaW5nIG9iamVjdHMgd2l0aCBjaXJjdWxhclxuICogcmVmZXJlbmNlcyB0byBiZSBjb21wYXJlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge251bWJlcn0gW2JpdG1hc2tdIFRoZSBiaXRtYXNrIG9mIGNvbXBhcmlzb24gZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgXG4gKiAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgYG9iamVjdGAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNFcXVhbERlZXAob2JqZWN0LCBvdGhlciwgZXF1YWxGdW5jLCBjdXN0b21pemVyLCBiaXRtYXNrLCBzdGFjaykge1xuICB2YXIgb2JqSXNBcnIgPSBpc0FycmF5KG9iamVjdCksXG4gICAgICBvdGhJc0FyciA9IGlzQXJyYXkob3RoZXIpLFxuICAgICAgb2JqVGFnID0gYXJyYXlUYWcsXG4gICAgICBvdGhUYWcgPSBhcnJheVRhZztcblxuICBpZiAoIW9iaklzQXJyKSB7XG4gICAgb2JqVGFnID0gZ2V0VGFnKG9iamVjdCk7XG4gICAgb2JqVGFnID0gb2JqVGFnID09IGFyZ3NUYWcgPyBvYmplY3RUYWcgOiBvYmpUYWc7XG4gIH1cbiAgaWYgKCFvdGhJc0Fycikge1xuICAgIG90aFRhZyA9IGdldFRhZyhvdGhlcik7XG4gICAgb3RoVGFnID0gb3RoVGFnID09IGFyZ3NUYWcgPyBvYmplY3RUYWcgOiBvdGhUYWc7XG4gIH1cbiAgdmFyIG9iaklzT2JqID0gb2JqVGFnID09IG9iamVjdFRhZyAmJiAhaXNIb3N0T2JqZWN0KG9iamVjdCksXG4gICAgICBvdGhJc09iaiA9IG90aFRhZyA9PSBvYmplY3RUYWcgJiYgIWlzSG9zdE9iamVjdChvdGhlciksXG4gICAgICBpc1NhbWVUYWcgPSBvYmpUYWcgPT0gb3RoVGFnO1xuXG4gIGlmIChpc1NhbWVUYWcgJiYgIW9iaklzT2JqKSB7XG4gICAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgICByZXR1cm4gKG9iaklzQXJyIHx8IGlzVHlwZWRBcnJheShvYmplY3QpKVxuICAgICAgPyBlcXVhbEFycmF5cyhvYmplY3QsIG90aGVyLCBlcXVhbEZ1bmMsIGN1c3RvbWl6ZXIsIGJpdG1hc2ssIHN0YWNrKVxuICAgICAgOiBlcXVhbEJ5VGFnKG9iamVjdCwgb3RoZXIsIG9ialRhZywgZXF1YWxGdW5jLCBjdXN0b21pemVyLCBiaXRtYXNrLCBzdGFjayk7XG4gIH1cbiAgaWYgKCEoYml0bWFzayAmIFBBUlRJQUxfQ09NUEFSRV9GTEFHKSkge1xuICAgIHZhciBvYmpJc1dyYXBwZWQgPSBvYmpJc09iaiAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgJ19fd3JhcHBlZF9fJyksXG4gICAgICAgIG90aElzV3JhcHBlZCA9IG90aElzT2JqICYmIGhhc093blByb3BlcnR5LmNhbGwob3RoZXIsICdfX3dyYXBwZWRfXycpO1xuXG4gICAgaWYgKG9iaklzV3JhcHBlZCB8fCBvdGhJc1dyYXBwZWQpIHtcbiAgICAgIHZhciBvYmpVbndyYXBwZWQgPSBvYmpJc1dyYXBwZWQgPyBvYmplY3QudmFsdWUoKSA6IG9iamVjdCxcbiAgICAgICAgICBvdGhVbndyYXBwZWQgPSBvdGhJc1dyYXBwZWQgPyBvdGhlci52YWx1ZSgpIDogb3RoZXI7XG5cbiAgICAgIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gICAgICByZXR1cm4gZXF1YWxGdW5jKG9ialVud3JhcHBlZCwgb3RoVW53cmFwcGVkLCBjdXN0b21pemVyLCBiaXRtYXNrLCBzdGFjayk7XG4gICAgfVxuICB9XG4gIGlmICghaXNTYW1lVGFnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gIHJldHVybiBlcXVhbE9iamVjdHMob2JqZWN0LCBvdGhlciwgZXF1YWxGdW5jLCBjdXN0b21pemVyLCBiaXRtYXNrLCBzdGFjayk7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNNYXRjaGAgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCBvZiBwcm9wZXJ0eSB2YWx1ZXMgdG8gbWF0Y2guXG4gKiBAcGFyYW0ge0FycmF5fSBtYXRjaERhdGEgVGhlIHByb3BlcnR5IG5hbWVzLCB2YWx1ZXMsIGFuZCBjb21wYXJlIGZsYWdzIHRvIG1hdGNoLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYG9iamVjdGAgaXMgYSBtYXRjaCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNNYXRjaChvYmplY3QsIHNvdXJjZSwgbWF0Y2hEYXRhLCBjdXN0b21pemVyKSB7XG4gIHZhciBpbmRleCA9IG1hdGNoRGF0YS5sZW5ndGgsXG4gICAgICBsZW5ndGggPSBpbmRleCxcbiAgICAgIG5vQ3VzdG9taXplciA9ICFjdXN0b21pemVyO1xuXG4gIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgIHJldHVybiAhbGVuZ3RoO1xuICB9XG4gIG9iamVjdCA9IE9iamVjdChvYmplY3QpO1xuICB3aGlsZSAoaW5kZXgtLSkge1xuICAgIHZhciBkYXRhID0gbWF0Y2hEYXRhW2luZGV4XTtcbiAgICBpZiAoKG5vQ3VzdG9taXplciAmJiBkYXRhWzJdKVxuICAgICAgICAgID8gZGF0YVsxXSAhPT0gb2JqZWN0W2RhdGFbMF1dXG4gICAgICAgICAgOiAhKGRhdGFbMF0gaW4gb2JqZWN0KVxuICAgICAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBkYXRhID0gbWF0Y2hEYXRhW2luZGV4XTtcbiAgICB2YXIga2V5ID0gZGF0YVswXSxcbiAgICAgICAgb2JqVmFsdWUgPSBvYmplY3Rba2V5XSxcbiAgICAgICAgc3JjVmFsdWUgPSBkYXRhWzFdO1xuXG4gICAgaWYgKG5vQ3VzdG9taXplciAmJiBkYXRhWzJdKSB7XG4gICAgICBpZiAob2JqVmFsdWUgPT09IHVuZGVmaW5lZCAmJiAhKGtleSBpbiBvYmplY3QpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHN0YWNrID0gbmV3IFN0YWNrO1xuICAgICAgaWYgKGN1c3RvbWl6ZXIpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGN1c3RvbWl6ZXIob2JqVmFsdWUsIHNyY1ZhbHVlLCBrZXksIG9iamVjdCwgc291cmNlLCBzdGFjayk7XG4gICAgICB9XG4gICAgICBpZiAoIShyZXN1bHQgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBiYXNlSXNFcXVhbChzcmNWYWx1ZSwgb2JqVmFsdWUsIGN1c3RvbWl6ZXIsIFVOT1JERVJFRF9DT01QQVJFX0ZMQUcgfCBQQVJUSUFMX0NPTVBBUkVfRkxBRywgc3RhY2spXG4gICAgICAgICAgICA6IHJlc3VsdFxuICAgICAgICAgICkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc05hdGl2ZWAgd2l0aG91dCBiYWQgc2hpbSBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBuYXRpdmUgZnVuY3Rpb24sXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNOYXRpdmUodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkgfHwgaXNNYXNrZWQodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwYXR0ZXJuID0gKGlzRnVuY3Rpb24odmFsdWUpIHx8IGlzSG9zdE9iamVjdCh2YWx1ZSkpID8gcmVJc05hdGl2ZSA6IHJlSXNIb3N0Q3RvcjtcbiAgcmV0dXJuIHBhdHRlcm4udGVzdCh0b1NvdXJjZSh2YWx1ZSkpO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzVHlwZWRBcnJheWAgd2l0aG91dCBOb2RlLmpzIG9wdGltaXphdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNUeXBlZEFycmF5KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmXG4gICAgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhIXR5cGVkQXJyYXlUYWdzW29iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpXTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pdGVyYXRlZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gW3ZhbHVlPV8uaWRlbnRpdHldIFRoZSB2YWx1ZSB0byBjb252ZXJ0IHRvIGFuIGl0ZXJhdGVlLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBpdGVyYXRlZS5cbiAqL1xuZnVuY3Rpb24gYmFzZUl0ZXJhdGVlKHZhbHVlKSB7XG4gIC8vIERvbid0IHN0b3JlIHRoZSBgdHlwZW9mYCByZXN1bHQgaW4gYSB2YXJpYWJsZSB0byBhdm9pZCBhIEpJVCBidWcgaW4gU2FmYXJpIDkuXG4gIC8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTU2MDM0IGZvciBtb3JlIGRldGFpbHMuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiBpZGVudGl0eTtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlID09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIGlzQXJyYXkodmFsdWUpXG4gICAgICA/IGJhc2VNYXRjaGVzUHJvcGVydHkodmFsdWVbMF0sIHZhbHVlWzFdKVxuICAgICAgOiBiYXNlTWF0Y2hlcyh2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHByb3BlcnR5KHZhbHVlKTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5rZXlzYCB3aGljaCBkb2Vzbid0IHRyZWF0IHNwYXJzZSBhcnJheXMgYXMgZGVuc2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VLZXlzKG9iamVjdCkge1xuICBpZiAoIWlzUHJvdG90eXBlKG9iamVjdCkpIHtcbiAgICByZXR1cm4gbmF0aXZlS2V5cyhvYmplY3QpO1xuICB9XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIE9iamVjdChvYmplY3QpKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGtleSAhPSAnY29uc3RydWN0b3InKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLm1hcGAgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fE9iamVjdH0gY29sbGVjdGlvbiBUaGUgY29sbGVjdGlvbiB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgbWFwcGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBiYXNlTWFwKGNvbGxlY3Rpb24sIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gaXNBcnJheUxpa2UoY29sbGVjdGlvbikgPyBBcnJheShjb2xsZWN0aW9uLmxlbmd0aCkgOiBbXTtcblxuICBiYXNlRWFjaChjb2xsZWN0aW9uLCBmdW5jdGlvbih2YWx1ZSwga2V5LCBjb2xsZWN0aW9uKSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gaXRlcmF0ZWUodmFsdWUsIGtleSwgY29sbGVjdGlvbik7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLm1hdGNoZXNgIHdoaWNoIGRvZXNuJ3QgY2xvbmUgYHNvdXJjZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCBvZiBwcm9wZXJ0eSB2YWx1ZXMgdG8gbWF0Y2guXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBzcGVjIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlTWF0Y2hlcyhzb3VyY2UpIHtcbiAgdmFyIG1hdGNoRGF0YSA9IGdldE1hdGNoRGF0YShzb3VyY2UpO1xuICBpZiAobWF0Y2hEYXRhLmxlbmd0aCA9PSAxICYmIG1hdGNoRGF0YVswXVsyXSkge1xuICAgIHJldHVybiBtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZShtYXRjaERhdGFbMF1bMF0sIG1hdGNoRGF0YVswXVsxXSk7XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiBvYmplY3QgPT09IHNvdXJjZSB8fCBiYXNlSXNNYXRjaChvYmplY3QsIHNvdXJjZSwgbWF0Y2hEYXRhKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5tYXRjaGVzUHJvcGVydHlgIHdoaWNoIGRvZXNuJ3QgY2xvbmUgYHNyY1ZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEBwYXJhbSB7Kn0gc3JjVmFsdWUgVGhlIHZhbHVlIHRvIG1hdGNoLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgc3BlYyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZU1hdGNoZXNQcm9wZXJ0eShwYXRoLCBzcmNWYWx1ZSkge1xuICBpZiAoaXNLZXkocGF0aCkgJiYgaXNTdHJpY3RDb21wYXJhYmxlKHNyY1ZhbHVlKSkge1xuICAgIHJldHVybiBtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZSh0b0tleShwYXRoKSwgc3JjVmFsdWUpO1xuICB9XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIgb2JqVmFsdWUgPSBnZXQob2JqZWN0LCBwYXRoKTtcbiAgICByZXR1cm4gKG9ialZhbHVlID09PSB1bmRlZmluZWQgJiYgb2JqVmFsdWUgPT09IHNyY1ZhbHVlKVxuICAgICAgPyBoYXNJbihvYmplY3QsIHBhdGgpXG4gICAgICA6IGJhc2VJc0VxdWFsKHNyY1ZhbHVlLCBvYmpWYWx1ZSwgdW5kZWZpbmVkLCBVTk9SREVSRURfQ09NUEFSRV9GTEFHIHwgUEFSVElBTF9DT01QQVJFX0ZMQUcpO1xuICB9O1xufVxuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZVByb3BlcnR5YCB3aGljaCBzdXBwb3J0cyBkZWVwIHBhdGhzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYWNjZXNzb3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VQcm9wZXJ0eURlZXAocGF0aCkge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIGJhc2VHZXQob2JqZWN0LCBwYXRoKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50b1N0cmluZ2Agd2hpY2ggZG9lc24ndCBjb252ZXJ0IG51bGxpc2hcbiAqIHZhbHVlcyB0byBlbXB0eSBzdHJpbmdzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBiYXNlVG9TdHJpbmcodmFsdWUpIHtcbiAgLy8gRXhpdCBlYXJseSBmb3Igc3RyaW5ncyB0byBhdm9pZCBhIHBlcmZvcm1hbmNlIGhpdCBpbiBzb21lIGVudmlyb25tZW50cy5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIHN5bWJvbFRvU3RyaW5nID8gc3ltYm9sVG9TdHJpbmcuY2FsbCh2YWx1ZSkgOiAnJztcbiAgfVxuICB2YXIgcmVzdWx0ID0gKHZhbHVlICsgJycpO1xuICByZXR1cm4gKHJlc3VsdCA9PSAnMCcgJiYgKDEgLyB2YWx1ZSkgPT0gLUlORklOSVRZKSA/ICctMCcgOiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ2FzdHMgYHZhbHVlYCB0byBhIHBhdGggYXJyYXkgaWYgaXQncyBub3Qgb25lLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBpbnNwZWN0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBjYXN0IHByb3BlcnR5IHBhdGggYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGNhc3RQYXRoKHZhbHVlKSB7XG4gIHJldHVybiBpc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogc3RyaW5nVG9QYXRoKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgYGJhc2VFYWNoYCBvciBgYmFzZUVhY2hSaWdodGAgZnVuY3Rpb24uXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVhY2hGdW5jIFRoZSBmdW5jdGlvbiB0byBpdGVyYXRlIG92ZXIgYSBjb2xsZWN0aW9uLlxuICogQHBhcmFtIHtib29sZWFufSBbZnJvbVJpZ2h0XSBTcGVjaWZ5IGl0ZXJhdGluZyBmcm9tIHJpZ2h0IHRvIGxlZnQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBiYXNlIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVCYXNlRWFjaChlYWNoRnVuYywgZnJvbVJpZ2h0KSB7XG4gIHJldHVybiBmdW5jdGlvbihjb2xsZWN0aW9uLCBpdGVyYXRlZSkge1xuICAgIGlmIChjb2xsZWN0aW9uID09IG51bGwpIHtcbiAgICAgIHJldHVybiBjb2xsZWN0aW9uO1xuICAgIH1cbiAgICBpZiAoIWlzQXJyYXlMaWtlKGNvbGxlY3Rpb24pKSB7XG4gICAgICByZXR1cm4gZWFjaEZ1bmMoY29sbGVjdGlvbiwgaXRlcmF0ZWUpO1xuICAgIH1cbiAgICB2YXIgbGVuZ3RoID0gY29sbGVjdGlvbi5sZW5ndGgsXG4gICAgICAgIGluZGV4ID0gZnJvbVJpZ2h0ID8gbGVuZ3RoIDogLTEsXG4gICAgICAgIGl0ZXJhYmxlID0gT2JqZWN0KGNvbGxlY3Rpb24pO1xuXG4gICAgd2hpbGUgKChmcm9tUmlnaHQgPyBpbmRleC0tIDogKytpbmRleCA8IGxlbmd0aCkpIHtcbiAgICAgIGlmIChpdGVyYXRlZShpdGVyYWJsZVtpbmRleF0sIGluZGV4LCBpdGVyYWJsZSkgPT09IGZhbHNlKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY29sbGVjdGlvbjtcbiAgfTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgYmFzZSBmdW5jdGlvbiBmb3IgbWV0aG9kcyBsaWtlIGBfLmZvckluYCBhbmQgYF8uZm9yT3duYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtib29sZWFufSBbZnJvbVJpZ2h0XSBTcGVjaWZ5IGl0ZXJhdGluZyBmcm9tIHJpZ2h0IHRvIGxlZnQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBiYXNlIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVCYXNlRm9yKGZyb21SaWdodCkge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0LCBpdGVyYXRlZSwga2V5c0Z1bmMpIHtcbiAgICB2YXIgaW5kZXggPSAtMSxcbiAgICAgICAgaXRlcmFibGUgPSBPYmplY3Qob2JqZWN0KSxcbiAgICAgICAgcHJvcHMgPSBrZXlzRnVuYyhvYmplY3QpLFxuICAgICAgICBsZW5ndGggPSBwcm9wcy5sZW5ndGg7XG5cbiAgICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICAgIHZhciBrZXkgPSBwcm9wc1tmcm9tUmlnaHQgPyBsZW5ndGggOiArK2luZGV4XTtcbiAgICAgIGlmIChpdGVyYXRlZShpdGVyYWJsZVtrZXldLCBrZXksIGl0ZXJhYmxlKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmplY3Q7XG4gIH07XG59XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbERlZXBgIGZvciBhcnJheXMgd2l0aCBzdXBwb3J0IGZvclxuICogcGFydGlhbCBkZWVwIGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7QXJyYXl9IG90aGVyIFRoZSBvdGhlciBhcnJheSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgb2YgY29tcGFyaXNvbiBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGBcbiAqICBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtPYmplY3R9IHN0YWNrIFRyYWNrcyB0cmF2ZXJzZWQgYGFycmF5YCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBhcnJheXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gZXF1YWxBcnJheXMoYXJyYXksIG90aGVyLCBlcXVhbEZ1bmMsIGN1c3RvbWl6ZXIsIGJpdG1hc2ssIHN0YWNrKSB7XG4gIHZhciBpc1BhcnRpYWwgPSBiaXRtYXNrICYgUEFSVElBTF9DT01QQVJFX0ZMQUcsXG4gICAgICBhcnJMZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICBvdGhMZW5ndGggPSBvdGhlci5sZW5ndGg7XG5cbiAgaWYgKGFyckxlbmd0aCAhPSBvdGhMZW5ndGggJiYgIShpc1BhcnRpYWwgJiYgb3RoTGVuZ3RoID4gYXJyTGVuZ3RoKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBBc3N1bWUgY3ljbGljIHZhbHVlcyBhcmUgZXF1YWwuXG4gIHZhciBzdGFja2VkID0gc3RhY2suZ2V0KGFycmF5KTtcbiAgaWYgKHN0YWNrZWQgJiYgc3RhY2suZ2V0KG90aGVyKSkge1xuICAgIHJldHVybiBzdGFja2VkID09IG90aGVyO1xuICB9XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gdHJ1ZSxcbiAgICAgIHNlZW4gPSAoYml0bWFzayAmIFVOT1JERVJFRF9DT01QQVJFX0ZMQUcpID8gbmV3IFNldENhY2hlIDogdW5kZWZpbmVkO1xuXG4gIHN0YWNrLnNldChhcnJheSwgb3RoZXIpO1xuICBzdGFjay5zZXQob3RoZXIsIGFycmF5KTtcblxuICAvLyBJZ25vcmUgbm9uLWluZGV4IHByb3BlcnRpZXMuXG4gIHdoaWxlICgrK2luZGV4IDwgYXJyTGVuZ3RoKSB7XG4gICAgdmFyIGFyclZhbHVlID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICBvdGhWYWx1ZSA9IG90aGVyW2luZGV4XTtcblxuICAgIGlmIChjdXN0b21pemVyKSB7XG4gICAgICB2YXIgY29tcGFyZWQgPSBpc1BhcnRpYWxcbiAgICAgICAgPyBjdXN0b21pemVyKG90aFZhbHVlLCBhcnJWYWx1ZSwgaW5kZXgsIG90aGVyLCBhcnJheSwgc3RhY2spXG4gICAgICAgIDogY3VzdG9taXplcihhcnJWYWx1ZSwgb3RoVmFsdWUsIGluZGV4LCBhcnJheSwgb3RoZXIsIHN0YWNrKTtcbiAgICB9XG4gICAgaWYgKGNvbXBhcmVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChjb21wYXJlZCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbXBhcmUgYXJyYXlzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgaWYgKHNlZW4pIHtcbiAgICAgIGlmICghYXJyYXlTb21lKG90aGVyLCBmdW5jdGlvbihvdGhWYWx1ZSwgb3RoSW5kZXgpIHtcbiAgICAgICAgICAgIGlmICghc2Vlbi5oYXMob3RoSW5kZXgpICYmXG4gICAgICAgICAgICAgICAgKGFyclZhbHVlID09PSBvdGhWYWx1ZSB8fCBlcXVhbEZ1bmMoYXJyVmFsdWUsIG90aFZhbHVlLCBjdXN0b21pemVyLCBiaXRtYXNrLCBzdGFjaykpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBzZWVuLmFkZChvdGhJbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkpIHtcbiAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIShcbiAgICAgICAgICBhcnJWYWx1ZSA9PT0gb3RoVmFsdWUgfHxcbiAgICAgICAgICAgIGVxdWFsRnVuYyhhcnJWYWx1ZSwgb3RoVmFsdWUsIGN1c3RvbWl6ZXIsIGJpdG1hc2ssIHN0YWNrKVxuICAgICAgICApKSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBzdGFja1snZGVsZXRlJ10oYXJyYXkpO1xuICBzdGFja1snZGVsZXRlJ10ob3RoZXIpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxEZWVwYCBmb3IgY29tcGFyaW5nIG9iamVjdHMgb2ZcbiAqIHRoZSBzYW1lIGB0b1N0cmluZ1RhZ2AuXG4gKlxuICogKipOb3RlOioqIFRoaXMgZnVuY3Rpb24gb25seSBzdXBwb3J0cyBjb21wYXJpbmcgdmFsdWVzIHdpdGggdGFncyBvZlxuICogYEJvb2xlYW5gLCBgRGF0ZWAsIGBFcnJvcmAsIGBOdW1iZXJgLCBgUmVnRXhwYCwgb3IgYFN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtPYmplY3R9IG90aGVyIFRoZSBvdGhlciBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWcgVGhlIGB0b1N0cmluZ1RhZ2Agb2YgdGhlIG9iamVjdHMgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIG9mIGNvbXBhcmlzb24gZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgXG4gKiAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGFjayBUcmFja3MgdHJhdmVyc2VkIGBvYmplY3RgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG9iamVjdHMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gZXF1YWxCeVRhZyhvYmplY3QsIG90aGVyLCB0YWcsIGVxdWFsRnVuYywgY3VzdG9taXplciwgYml0bWFzaywgc3RhY2spIHtcbiAgc3dpdGNoICh0YWcpIHtcbiAgICBjYXNlIGRhdGFWaWV3VGFnOlxuICAgICAgaWYgKChvYmplY3QuYnl0ZUxlbmd0aCAhPSBvdGhlci5ieXRlTGVuZ3RoKSB8fFxuICAgICAgICAgIChvYmplY3QuYnl0ZU9mZnNldCAhPSBvdGhlci5ieXRlT2Zmc2V0KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBvYmplY3QgPSBvYmplY3QuYnVmZmVyO1xuICAgICAgb3RoZXIgPSBvdGhlci5idWZmZXI7XG5cbiAgICBjYXNlIGFycmF5QnVmZmVyVGFnOlxuICAgICAgaWYgKChvYmplY3QuYnl0ZUxlbmd0aCAhPSBvdGhlci5ieXRlTGVuZ3RoKSB8fFxuICAgICAgICAgICFlcXVhbEZ1bmMobmV3IFVpbnQ4QXJyYXkob2JqZWN0KSwgbmV3IFVpbnQ4QXJyYXkob3RoZXIpKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcblxuICAgIGNhc2UgYm9vbFRhZzpcbiAgICBjYXNlIGRhdGVUYWc6XG4gICAgY2FzZSBudW1iZXJUYWc6XG4gICAgICAvLyBDb2VyY2UgYm9vbGVhbnMgdG8gYDFgIG9yIGAwYCBhbmQgZGF0ZXMgdG8gbWlsbGlzZWNvbmRzLlxuICAgICAgLy8gSW52YWxpZCBkYXRlcyBhcmUgY29lcmNlZCB0byBgTmFOYC5cbiAgICAgIHJldHVybiBlcSgrb2JqZWN0LCArb3RoZXIpO1xuXG4gICAgY2FzZSBlcnJvclRhZzpcbiAgICAgIHJldHVybiBvYmplY3QubmFtZSA9PSBvdGhlci5uYW1lICYmIG9iamVjdC5tZXNzYWdlID09IG90aGVyLm1lc3NhZ2U7XG5cbiAgICBjYXNlIHJlZ2V4cFRhZzpcbiAgICBjYXNlIHN0cmluZ1RhZzpcbiAgICAgIC8vIENvZXJjZSByZWdleGVzIHRvIHN0cmluZ3MgYW5kIHRyZWF0IHN0cmluZ3MsIHByaW1pdGl2ZXMgYW5kIG9iamVjdHMsXG4gICAgICAvLyBhcyBlcXVhbC4gU2VlIGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1yZWdleHAucHJvdG90eXBlLnRvc3RyaW5nXG4gICAgICAvLyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgICAgcmV0dXJuIG9iamVjdCA9PSAob3RoZXIgKyAnJyk7XG5cbiAgICBjYXNlIG1hcFRhZzpcbiAgICAgIHZhciBjb252ZXJ0ID0gbWFwVG9BcnJheTtcblxuICAgIGNhc2Ugc2V0VGFnOlxuICAgICAgdmFyIGlzUGFydGlhbCA9IGJpdG1hc2sgJiBQQVJUSUFMX0NPTVBBUkVfRkxBRztcbiAgICAgIGNvbnZlcnQgfHwgKGNvbnZlcnQgPSBzZXRUb0FycmF5KTtcblxuICAgICAgaWYgKG9iamVjdC5zaXplICE9IG90aGVyLnNpemUgJiYgIWlzUGFydGlhbCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICAvLyBBc3N1bWUgY3ljbGljIHZhbHVlcyBhcmUgZXF1YWwuXG4gICAgICB2YXIgc3RhY2tlZCA9IHN0YWNrLmdldChvYmplY3QpO1xuICAgICAgaWYgKHN0YWNrZWQpIHtcbiAgICAgICAgcmV0dXJuIHN0YWNrZWQgPT0gb3RoZXI7XG4gICAgICB9XG4gICAgICBiaXRtYXNrIHw9IFVOT1JERVJFRF9DT01QQVJFX0ZMQUc7XG5cbiAgICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbXBhcmUgb2JqZWN0cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgICAgc3RhY2suc2V0KG9iamVjdCwgb3RoZXIpO1xuICAgICAgdmFyIHJlc3VsdCA9IGVxdWFsQXJyYXlzKGNvbnZlcnQob2JqZWN0KSwgY29udmVydChvdGhlciksIGVxdWFsRnVuYywgY3VzdG9taXplciwgYml0bWFzaywgc3RhY2spO1xuICAgICAgc3RhY2tbJ2RlbGV0ZSddKG9iamVjdCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgY2FzZSBzeW1ib2xUYWc6XG4gICAgICBpZiAoc3ltYm9sVmFsdWVPZikge1xuICAgICAgICByZXR1cm4gc3ltYm9sVmFsdWVPZi5jYWxsKG9iamVjdCkgPT0gc3ltYm9sVmFsdWVPZi5jYWxsKG90aGVyKTtcbiAgICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbERlZXBgIGZvciBvYmplY3RzIHdpdGggc3VwcG9ydCBmb3JcbiAqIHBhcnRpYWwgZGVlcCBjb21wYXJpc29ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgb2YgY29tcGFyaXNvbiBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGBcbiAqICBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtPYmplY3R9IHN0YWNrIFRyYWNrcyB0cmF2ZXJzZWQgYG9iamVjdGAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBlcXVhbE9iamVjdHMob2JqZWN0LCBvdGhlciwgZXF1YWxGdW5jLCBjdXN0b21pemVyLCBiaXRtYXNrLCBzdGFjaykge1xuICB2YXIgaXNQYXJ0aWFsID0gYml0bWFzayAmIFBBUlRJQUxfQ09NUEFSRV9GTEFHLFxuICAgICAgb2JqUHJvcHMgPSBrZXlzKG9iamVjdCksXG4gICAgICBvYmpMZW5ndGggPSBvYmpQcm9wcy5sZW5ndGgsXG4gICAgICBvdGhQcm9wcyA9IGtleXMob3RoZXIpLFxuICAgICAgb3RoTGVuZ3RoID0gb3RoUHJvcHMubGVuZ3RoO1xuXG4gIGlmIChvYmpMZW5ndGggIT0gb3RoTGVuZ3RoICYmICFpc1BhcnRpYWwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGluZGV4ID0gb2JqTGVuZ3RoO1xuICB3aGlsZSAoaW5kZXgtLSkge1xuICAgIHZhciBrZXkgPSBvYmpQcm9wc1tpbmRleF07XG4gICAgaWYgKCEoaXNQYXJ0aWFsID8ga2V5IGluIG90aGVyIDogaGFzT3duUHJvcGVydHkuY2FsbChvdGhlciwga2V5KSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgLy8gQXNzdW1lIGN5Y2xpYyB2YWx1ZXMgYXJlIGVxdWFsLlxuICB2YXIgc3RhY2tlZCA9IHN0YWNrLmdldChvYmplY3QpO1xuICBpZiAoc3RhY2tlZCAmJiBzdGFjay5nZXQob3RoZXIpKSB7XG4gICAgcmV0dXJuIHN0YWNrZWQgPT0gb3RoZXI7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IHRydWU7XG4gIHN0YWNrLnNldChvYmplY3QsIG90aGVyKTtcbiAgc3RhY2suc2V0KG90aGVyLCBvYmplY3QpO1xuXG4gIHZhciBza2lwQ3RvciA9IGlzUGFydGlhbDtcbiAgd2hpbGUgKCsraW5kZXggPCBvYmpMZW5ndGgpIHtcbiAgICBrZXkgPSBvYmpQcm9wc1tpbmRleF07XG4gICAgdmFyIG9ialZhbHVlID0gb2JqZWN0W2tleV0sXG4gICAgICAgIG90aFZhbHVlID0gb3RoZXJba2V5XTtcblxuICAgIGlmIChjdXN0b21pemVyKSB7XG4gICAgICB2YXIgY29tcGFyZWQgPSBpc1BhcnRpYWxcbiAgICAgICAgPyBjdXN0b21pemVyKG90aFZhbHVlLCBvYmpWYWx1ZSwga2V5LCBvdGhlciwgb2JqZWN0LCBzdGFjaylcbiAgICAgICAgOiBjdXN0b21pemVyKG9ialZhbHVlLCBvdGhWYWx1ZSwga2V5LCBvYmplY3QsIG90aGVyLCBzdGFjayk7XG4gICAgfVxuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbXBhcmUgb2JqZWN0cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIGlmICghKGNvbXBhcmVkID09PSB1bmRlZmluZWRcbiAgICAgICAgICA/IChvYmpWYWx1ZSA9PT0gb3RoVmFsdWUgfHwgZXF1YWxGdW5jKG9ialZhbHVlLCBvdGhWYWx1ZSwgY3VzdG9taXplciwgYml0bWFzaywgc3RhY2spKVxuICAgICAgICAgIDogY29tcGFyZWRcbiAgICAgICAgKSkge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgc2tpcEN0b3IgfHwgKHNraXBDdG9yID0ga2V5ID09ICdjb25zdHJ1Y3RvcicpO1xuICB9XG4gIGlmIChyZXN1bHQgJiYgIXNraXBDdG9yKSB7XG4gICAgdmFyIG9iakN0b3IgPSBvYmplY3QuY29uc3RydWN0b3IsXG4gICAgICAgIG90aEN0b3IgPSBvdGhlci5jb25zdHJ1Y3RvcjtcblxuICAgIC8vIE5vbiBgT2JqZWN0YCBvYmplY3QgaW5zdGFuY2VzIHdpdGggZGlmZmVyZW50IGNvbnN0cnVjdG9ycyBhcmUgbm90IGVxdWFsLlxuICAgIGlmIChvYmpDdG9yICE9IG90aEN0b3IgJiZcbiAgICAgICAgKCdjb25zdHJ1Y3RvcicgaW4gb2JqZWN0ICYmICdjb25zdHJ1Y3RvcicgaW4gb3RoZXIpICYmXG4gICAgICAgICEodHlwZW9mIG9iakN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBvYmpDdG9yIGluc3RhbmNlb2Ygb2JqQ3RvciAmJlxuICAgICAgICAgIHR5cGVvZiBvdGhDdG9yID09ICdmdW5jdGlvbicgJiYgb3RoQ3RvciBpbnN0YW5jZW9mIG90aEN0b3IpKSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgc3RhY2tbJ2RlbGV0ZSddKG9iamVjdCk7XG4gIHN0YWNrWydkZWxldGUnXShvdGhlcik7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgZGF0YSBmb3IgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIHJlZmVyZW5jZSBrZXkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbWFwIGRhdGEuXG4gKi9cbmZ1bmN0aW9uIGdldE1hcERhdGEobWFwLCBrZXkpIHtcbiAgdmFyIGRhdGEgPSBtYXAuX19kYXRhX187XG4gIHJldHVybiBpc0tleWFibGUoa2V5KVxuICAgID8gZGF0YVt0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8gJ3N0cmluZycgOiAnaGFzaCddXG4gICAgOiBkYXRhLm1hcDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBwcm9wZXJ0eSBuYW1lcywgdmFsdWVzLCBhbmQgY29tcGFyZSBmbGFncyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBtYXRjaCBkYXRhIG9mIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBnZXRNYXRjaERhdGEob2JqZWN0KSB7XG4gIHZhciByZXN1bHQgPSBrZXlzKG9iamVjdCksXG4gICAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuXG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIHZhciBrZXkgPSByZXN1bHRbbGVuZ3RoXSxcbiAgICAgICAgdmFsdWUgPSBvYmplY3Rba2V5XTtcblxuICAgIHJlc3VsdFtsZW5ndGhdID0gW2tleSwgdmFsdWUsIGlzU3RyaWN0Q29tcGFyYWJsZSh2YWx1ZSldO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgbmF0aXZlIGZ1bmN0aW9uIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIG1ldGhvZCB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZnVuY3Rpb24gaWYgaXQncyBuYXRpdmUsIGVsc2UgYHVuZGVmaW5lZGAuXG4gKi9cbmZ1bmN0aW9uIGdldE5hdGl2ZShvYmplY3QsIGtleSkge1xuICB2YXIgdmFsdWUgPSBnZXRWYWx1ZShvYmplY3QsIGtleSk7XG4gIHJldHVybiBiYXNlSXNOYXRpdmUodmFsdWUpID8gdmFsdWUgOiB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgYHRvU3RyaW5nVGFnYCBvZiBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbnZhciBnZXRUYWcgPSBiYXNlR2V0VGFnO1xuXG4vLyBGYWxsYmFjayBmb3IgZGF0YSB2aWV3cywgbWFwcywgc2V0cywgYW5kIHdlYWsgbWFwcyBpbiBJRSAxMSxcbi8vIGZvciBkYXRhIHZpZXdzIGluIEVkZ2UgPCAxNCwgYW5kIHByb21pc2VzIGluIE5vZGUuanMuXG5pZiAoKERhdGFWaWV3ICYmIGdldFRhZyhuZXcgRGF0YVZpZXcobmV3IEFycmF5QnVmZmVyKDEpKSkgIT0gZGF0YVZpZXdUYWcpIHx8XG4gICAgKE1hcCAmJiBnZXRUYWcobmV3IE1hcCkgIT0gbWFwVGFnKSB8fFxuICAgIChQcm9taXNlICYmIGdldFRhZyhQcm9taXNlLnJlc29sdmUoKSkgIT0gcHJvbWlzZVRhZykgfHxcbiAgICAoU2V0ICYmIGdldFRhZyhuZXcgU2V0KSAhPSBzZXRUYWcpIHx8XG4gICAgKFdlYWtNYXAgJiYgZ2V0VGFnKG5ldyBXZWFrTWFwKSAhPSB3ZWFrTWFwVGFnKSkge1xuICBnZXRUYWcgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHZhciByZXN1bHQgPSBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSxcbiAgICAgICAgQ3RvciA9IHJlc3VsdCA9PSBvYmplY3RUYWcgPyB2YWx1ZS5jb25zdHJ1Y3RvciA6IHVuZGVmaW5lZCxcbiAgICAgICAgY3RvclN0cmluZyA9IEN0b3IgPyB0b1NvdXJjZShDdG9yKSA6IHVuZGVmaW5lZDtcblxuICAgIGlmIChjdG9yU3RyaW5nKSB7XG4gICAgICBzd2l0Y2ggKGN0b3JTdHJpbmcpIHtcbiAgICAgICAgY2FzZSBkYXRhVmlld0N0b3JTdHJpbmc6IHJldHVybiBkYXRhVmlld1RhZztcbiAgICAgICAgY2FzZSBtYXBDdG9yU3RyaW5nOiByZXR1cm4gbWFwVGFnO1xuICAgICAgICBjYXNlIHByb21pc2VDdG9yU3RyaW5nOiByZXR1cm4gcHJvbWlzZVRhZztcbiAgICAgICAgY2FzZSBzZXRDdG9yU3RyaW5nOiByZXR1cm4gc2V0VGFnO1xuICAgICAgICBjYXNlIHdlYWtNYXBDdG9yU3RyaW5nOiByZXR1cm4gd2Vha01hcFRhZztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHBhdGhgIGV4aXN0cyBvbiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggdG8gY2hlY2suXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYXNGdW5jIFRoZSBmdW5jdGlvbiB0byBjaGVjayBwcm9wZXJ0aWVzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBwYXRoYCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzUGF0aChvYmplY3QsIHBhdGgsIGhhc0Z1bmMpIHtcbiAgcGF0aCA9IGlzS2V5KHBhdGgsIG9iamVjdCkgPyBbcGF0aF0gOiBjYXN0UGF0aChwYXRoKTtcblxuICB2YXIgcmVzdWx0LFxuICAgICAgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHBhdGgubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGtleSA9IHRvS2V5KHBhdGhbaW5kZXhdKTtcbiAgICBpZiAoIShyZXN1bHQgPSBvYmplY3QgIT0gbnVsbCAmJiBoYXNGdW5jKG9iamVjdCwga2V5KSkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBvYmplY3QgPSBvYmplY3Rba2V5XTtcbiAgfVxuICBpZiAocmVzdWx0KSB7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICB2YXIgbGVuZ3RoID0gb2JqZWN0ID8gb2JqZWN0Lmxlbmd0aCA6IDA7XG4gIHJldHVybiAhIWxlbmd0aCAmJiBpc0xlbmd0aChsZW5ndGgpICYmIGlzSW5kZXgoa2V5LCBsZW5ndGgpICYmXG4gICAgKGlzQXJyYXkob2JqZWN0KSB8fCBpc0FyZ3VtZW50cyhvYmplY3QpKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgaW5kZXguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGg9TUFYX1NBRkVfSU5URUdFUl0gVGhlIHVwcGVyIGJvdW5kcyBvZiBhIHZhbGlkIGluZGV4LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBpbmRleCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0luZGV4KHZhbHVlLCBsZW5ndGgpIHtcbiAgbGVuZ3RoID0gbGVuZ3RoID09IG51bGwgPyBNQVhfU0FGRV9JTlRFR0VSIDogbGVuZ3RoO1xuICByZXR1cm4gISFsZW5ndGggJiZcbiAgICAodHlwZW9mIHZhbHVlID09ICdudW1iZXInIHx8IHJlSXNVaW50LnRlc3QodmFsdWUpKSAmJlxuICAgICh2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDwgbGVuZ3RoKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHByb3BlcnR5IG5hbWUgYW5kIG5vdCBhIHByb3BlcnR5IHBhdGguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkga2V5cyBvbi5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcHJvcGVydHkgbmFtZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleSh2YWx1ZSwgb2JqZWN0KSB7XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgaWYgKHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJyB8fFxuICAgICAgdmFsdWUgPT0gbnVsbCB8fCBpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gcmVJc1BsYWluUHJvcC50ZXN0KHZhbHVlKSB8fCAhcmVJc0RlZXBQcm9wLnRlc3QodmFsdWUpIHx8XG4gICAgKG9iamVjdCAhPSBudWxsICYmIHZhbHVlIGluIE9iamVjdChvYmplY3QpKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSBmb3IgdXNlIGFzIHVuaXF1ZSBvYmplY3Qga2V5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5YWJsZSh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICh0eXBlID09ICdzdHJpbmcnIHx8IHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJylcbiAgICA/ICh2YWx1ZSAhPT0gJ19fcHJvdG9fXycpXG4gICAgOiAodmFsdWUgPT09IG51bGwpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgZnVuY2AgaGFzIGl0cyBzb3VyY2UgbWFza2VkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgZnVuY2AgaXMgbWFza2VkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzTWFza2VkKGZ1bmMpIHtcbiAgcmV0dXJuICEhbWFza1NyY0tleSAmJiAobWFza1NyY0tleSBpbiBmdW5jKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYSBwcm90b3R5cGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcHJvdG90eXBlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzUHJvdG90eXBlKHZhbHVlKSB7XG4gIHZhciBDdG9yID0gdmFsdWUgJiYgdmFsdWUuY29uc3RydWN0b3IsXG4gICAgICBwcm90byA9ICh0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IucHJvdG90eXBlKSB8fCBvYmplY3RQcm90bztcblxuICByZXR1cm4gdmFsdWUgPT09IHByb3RvO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlIGZvciBzdHJpY3QgZXF1YWxpdHkgY29tcGFyaXNvbnMsIGkuZS4gYD09PWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaWYgc3VpdGFibGUgZm9yIHN0cmljdFxuICogIGVxdWFsaXR5IGNvbXBhcmlzb25zLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaWN0Q29tcGFyYWJsZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT09IHZhbHVlICYmICFpc09iamVjdCh2YWx1ZSk7XG59XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBtYXRjaGVzUHJvcGVydHlgIGZvciBzb3VyY2UgdmFsdWVzIHN1aXRhYmxlXG4gKiBmb3Igc3RyaWN0IGVxdWFsaXR5IGNvbXBhcmlzb25zLCBpLmUuIGA9PT1gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEBwYXJhbSB7Kn0gc3JjVmFsdWUgVGhlIHZhbHVlIHRvIG1hdGNoLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgc3BlYyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gbWF0Y2hlc1N0cmljdENvbXBhcmFibGUoa2V5LCBzcmNWYWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBvYmplY3Rba2V5XSA9PT0gc3JjVmFsdWUgJiZcbiAgICAgIChzcmNWYWx1ZSAhPT0gdW5kZWZpbmVkIHx8IChrZXkgaW4gT2JqZWN0KG9iamVjdCkpKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgc3RyaW5nYCB0byBhIHByb3BlcnR5IHBhdGggYXJyYXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSBwYXRoIGFycmF5LlxuICovXG52YXIgc3RyaW5nVG9QYXRoID0gbWVtb2l6ZShmdW5jdGlvbihzdHJpbmcpIHtcbiAgc3RyaW5nID0gdG9TdHJpbmcoc3RyaW5nKTtcblxuICB2YXIgcmVzdWx0ID0gW107XG4gIGlmIChyZUxlYWRpbmdEb3QudGVzdChzdHJpbmcpKSB7XG4gICAgcmVzdWx0LnB1c2goJycpO1xuICB9XG4gIHN0cmluZy5yZXBsYWNlKHJlUHJvcE5hbWUsIGZ1bmN0aW9uKG1hdGNoLCBudW1iZXIsIHF1b3RlLCBzdHJpbmcpIHtcbiAgICByZXN1bHQucHVzaChxdW90ZSA/IHN0cmluZy5yZXBsYWNlKHJlRXNjYXBlQ2hhciwgJyQxJykgOiAobnVtYmVyIHx8IG1hdGNoKSk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufSk7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyBrZXkgaWYgaXQncyBub3QgYSBzdHJpbmcgb3Igc3ltYm9sLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBpbnNwZWN0LlxuICogQHJldHVybnMge3N0cmluZ3xzeW1ib2x9IFJldHVybnMgdGhlIGtleS5cbiAqL1xuZnVuY3Rpb24gdG9LZXkodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJyB8fCBpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgdmFyIHJlc3VsdCA9ICh2YWx1ZSArICcnKTtcbiAgcmV0dXJuIChyZXN1bHQgPT0gJzAnICYmICgxIC8gdmFsdWUpID09IC1JTkZJTklUWSkgPyAnLTAnIDogcmVzdWx0O1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGBmdW5jYCB0byBpdHMgc291cmNlIGNvZGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzb3VyY2UgY29kZS5cbiAqL1xuZnVuY3Rpb24gdG9Tb3VyY2UoZnVuYykge1xuICBpZiAoZnVuYyAhPSBudWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBmdW5jVG9TdHJpbmcuY2FsbChmdW5jKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gKGZ1bmMgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB2YWx1ZXMgYnkgcnVubmluZyBlYWNoIGVsZW1lbnQgaW4gYGNvbGxlY3Rpb25gIHRocnVcbiAqIGBpdGVyYXRlZWAuIFRoZSBpdGVyYXRlZSBpcyBpbnZva2VkIHdpdGggdGhyZWUgYXJndW1lbnRzOlxuICogKHZhbHVlLCBpbmRleHxrZXksIGNvbGxlY3Rpb24pLlxuICpcbiAqIE1hbnkgbG9kYXNoIG1ldGhvZHMgYXJlIGd1YXJkZWQgdG8gd29yayBhcyBpdGVyYXRlZXMgZm9yIG1ldGhvZHMgbGlrZVxuICogYF8uZXZlcnlgLCBgXy5maWx0ZXJgLCBgXy5tYXBgLCBgXy5tYXBWYWx1ZXNgLCBgXy5yZWplY3RgLCBhbmQgYF8uc29tZWAuXG4gKlxuICogVGhlIGd1YXJkZWQgbWV0aG9kcyBhcmU6XG4gKiBgYXJ5YCwgYGNodW5rYCwgYGN1cnJ5YCwgYGN1cnJ5UmlnaHRgLCBgZHJvcGAsIGBkcm9wUmlnaHRgLCBgZXZlcnlgLFxuICogYGZpbGxgLCBgaW52ZXJ0YCwgYHBhcnNlSW50YCwgYHJhbmRvbWAsIGByYW5nZWAsIGByYW5nZVJpZ2h0YCwgYHJlcGVhdGAsXG4gKiBgc2FtcGxlU2l6ZWAsIGBzbGljZWAsIGBzb21lYCwgYHNvcnRCeWAsIGBzcGxpdGAsIGB0YWtlYCwgYHRha2VSaWdodGAsXG4gKiBgdGVtcGxhdGVgLCBgdHJpbWAsIGB0cmltRW5kYCwgYHRyaW1TdGFydGAsIGFuZCBgd29yZHNgXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IENvbGxlY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSBjb2xsZWN0aW9uIFRoZSBjb2xsZWN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtpdGVyYXRlZT1fLmlkZW50aXR5XSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgbWFwcGVkIGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBzcXVhcmUobikge1xuICogICByZXR1cm4gbiAqIG47XG4gKiB9XG4gKlxuICogXy5tYXAoWzQsIDhdLCBzcXVhcmUpO1xuICogLy8gPT4gWzE2LCA2NF1cbiAqXG4gKiBfLm1hcCh7ICdhJzogNCwgJ2InOiA4IH0sIHNxdWFyZSk7XG4gKiAvLyA9PiBbMTYsIDY0XSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICpcbiAqIHZhciB1c2VycyA9IFtcbiAqICAgeyAndXNlcic6ICdiYXJuZXknIH0sXG4gKiAgIHsgJ3VzZXInOiAnZnJlZCcgfVxuICogXTtcbiAqXG4gKiAvLyBUaGUgYF8ucHJvcGVydHlgIGl0ZXJhdGVlIHNob3J0aGFuZC5cbiAqIF8ubWFwKHVzZXJzLCAndXNlcicpO1xuICogLy8gPT4gWydiYXJuZXknLCAnZnJlZCddXG4gKi9cbmZ1bmN0aW9uIG1hcChjb2xsZWN0aW9uLCBpdGVyYXRlZSkge1xuICB2YXIgZnVuYyA9IGlzQXJyYXkoY29sbGVjdGlvbikgPyBhcnJheU1hcCA6IGJhc2VNYXA7XG4gIHJldHVybiBmdW5jKGNvbGxlY3Rpb24sIGJhc2VJdGVyYXRlZShpdGVyYXRlZSwgMykpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IG1lbW9pemVzIHRoZSByZXN1bHQgb2YgYGZ1bmNgLiBJZiBgcmVzb2x2ZXJgIGlzXG4gKiBwcm92aWRlZCwgaXQgZGV0ZXJtaW5lcyB0aGUgY2FjaGUga2V5IGZvciBzdG9yaW5nIHRoZSByZXN1bHQgYmFzZWQgb24gdGhlXG4gKiBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlIG1lbW9pemVkIGZ1bmN0aW9uLiBCeSBkZWZhdWx0LCB0aGUgZmlyc3QgYXJndW1lbnRcbiAqIHByb3ZpZGVkIHRvIHRoZSBtZW1vaXplZCBmdW5jdGlvbiBpcyB1c2VkIGFzIHRoZSBtYXAgY2FjaGUga2V5LiBUaGUgYGZ1bmNgXG4gKiBpcyBpbnZva2VkIHdpdGggdGhlIGB0aGlzYCBiaW5kaW5nIG9mIHRoZSBtZW1vaXplZCBmdW5jdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogVGhlIGNhY2hlIGlzIGV4cG9zZWQgYXMgdGhlIGBjYWNoZWAgcHJvcGVydHkgb24gdGhlIG1lbW9pemVkXG4gKiBmdW5jdGlvbi4gSXRzIGNyZWF0aW9uIG1heSBiZSBjdXN0b21pemVkIGJ5IHJlcGxhY2luZyB0aGUgYF8ubWVtb2l6ZS5DYWNoZWBcbiAqIGNvbnN0cnVjdG9yIHdpdGggb25lIHdob3NlIGluc3RhbmNlcyBpbXBsZW1lbnQgdGhlXG4gKiBbYE1hcGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXByb3BlcnRpZXMtb2YtdGhlLW1hcC1wcm90b3R5cGUtb2JqZWN0KVxuICogbWV0aG9kIGludGVyZmFjZSBvZiBgZGVsZXRlYCwgYGdldGAsIGBoYXNgLCBhbmQgYHNldGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBoYXZlIGl0cyBvdXRwdXQgbWVtb2l6ZWQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbcmVzb2x2ZXJdIFRoZSBmdW5jdGlvbiB0byByZXNvbHZlIHRoZSBjYWNoZSBrZXkuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBtZW1vaXplZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxLCAnYic6IDIgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2MnOiAzLCAnZCc6IDQgfTtcbiAqXG4gKiB2YXIgdmFsdWVzID0gXy5tZW1vaXplKF8udmFsdWVzKTtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWzEsIDJdXG4gKlxuICogdmFsdWVzKG90aGVyKTtcbiAqIC8vID0+IFszLCA0XVxuICpcbiAqIG9iamVjdC5hID0gMjtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWzEsIDJdXG4gKlxuICogLy8gTW9kaWZ5IHRoZSByZXN1bHQgY2FjaGUuXG4gKiB2YWx1ZXMuY2FjaGUuc2V0KG9iamVjdCwgWydhJywgJ2InXSk7XG4gKiB2YWx1ZXMob2JqZWN0KTtcbiAqIC8vID0+IFsnYScsICdiJ11cbiAqXG4gKiAvLyBSZXBsYWNlIGBfLm1lbW9pemUuQ2FjaGVgLlxuICogXy5tZW1vaXplLkNhY2hlID0gV2Vha01hcDtcbiAqL1xuZnVuY3Rpb24gbWVtb2l6ZShmdW5jLCByZXNvbHZlcikge1xuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJyB8fCAocmVzb2x2ZXIgJiYgdHlwZW9mIHJlc29sdmVyICE9ICdmdW5jdGlvbicpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIHZhciBtZW1vaXplZCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcmdzID0gYXJndW1lbnRzLFxuICAgICAgICBrZXkgPSByZXNvbHZlciA/IHJlc29sdmVyLmFwcGx5KHRoaXMsIGFyZ3MpIDogYXJnc1swXSxcbiAgICAgICAgY2FjaGUgPSBtZW1vaXplZC5jYWNoZTtcblxuICAgIGlmIChjYWNoZS5oYXMoa2V5KSkge1xuICAgICAgcmV0dXJuIGNhY2hlLmdldChrZXkpO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICBtZW1vaXplZC5jYWNoZSA9IGNhY2hlLnNldChrZXksIHJlc3VsdCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgbWVtb2l6ZWQuY2FjaGUgPSBuZXcgKG1lbW9pemUuQ2FjaGUgfHwgTWFwQ2FjaGUpO1xuICByZXR1cm4gbWVtb2l6ZWQ7XG59XG5cbi8vIEFzc2lnbiBjYWNoZSB0byBgXy5tZW1vaXplYC5cbm1lbW9pemUuQ2FjaGUgPSBNYXBDYWNoZTtcblxuLyoqXG4gKiBQZXJmb3JtcyBhXG4gKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlIGVxdWl2YWxlbnQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogMSB9O1xuICpcbiAqIF8uZXEob2JqZWN0LCBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoJ2EnLCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEoJ2EnLCBPYmplY3QoJ2EnKSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoTmFOLCBOYU4pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBlcSh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBvdGhlciB8fCAodmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcik7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGFuIGBhcmd1bWVudHNgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJndW1lbnRzKHZhbHVlKSB7XG4gIC8vIFNhZmFyaSA4LjEgbWFrZXMgYGFyZ3VtZW50cy5jYWxsZWVgIGVudW1lcmFibGUgaW4gc3RyaWN0IG1vZGUuXG4gIHJldHVybiBpc0FycmF5TGlrZU9iamVjdCh2YWx1ZSkgJiYgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpICYmXG4gICAgKCFwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHZhbHVlLCAnY2FsbGVlJykgfHwgb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gYXJnc1RhZyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgQXJyYXlgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXkoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheSgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UuIEEgdmFsdWUgaXMgY29uc2lkZXJlZCBhcnJheS1saWtlIGlmIGl0J3NcbiAqIG5vdCBhIGZ1bmN0aW9uIGFuZCBoYXMgYSBgdmFsdWUubGVuZ3RoYCB0aGF0J3MgYW4gaW50ZWdlciBncmVhdGVyIHRoYW4gb3JcbiAqIGVxdWFsIHRvIGAwYCBhbmQgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUmAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKCdhYmMnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICFpc0Z1bmN0aW9uKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLmlzQXJyYXlMaWtlYCBleGNlcHQgdGhhdCBpdCBhbHNvIGNoZWNrcyBpZiBgdmFsdWVgXG4gKiBpcyBhbiBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXktbGlrZSBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2VPYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaXNBcnJheUxpa2UodmFsdWUpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgRnVuY3Rpb25gIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGZ1bmN0aW9uLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGdW5jdGlvbihfKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oL2FiYy8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICAvLyBUaGUgdXNlIG9mIGBPYmplY3QjdG9TdHJpbmdgIGF2b2lkcyBpc3N1ZXMgd2l0aCB0aGUgYHR5cGVvZmAgb3BlcmF0b3JcbiAgLy8gaW4gU2FmYXJpIDgtOSB3aGljaCByZXR1cm5zICdvYmplY3QnIGZvciB0eXBlZCBhcnJheSBhbmQgb3RoZXIgY29uc3RydWN0b3JzLlxuICB2YXIgdGFnID0gaXNPYmplY3QodmFsdWUpID8gb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgOiAnJztcbiAgcmV0dXJuIHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGxlbmd0aC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgbG9vc2VseSBiYXNlZCBvblxuICogW2BUb0xlbmd0aGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXRvbGVuZ3RoKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGxlbmd0aCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTGVuZ3RoKDMpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNMZW5ndGgoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoSW5maW5pdHkpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKCczJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0xlbmd0aCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdudW1iZXInICYmXG4gICAgdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICEhdmFsdWUgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTeW1ib2xgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzeW1ib2wsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N5bWJvbChTeW1ib2wuaXRlcmF0b3IpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTeW1ib2woJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3ltYm9sJyB8fFxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpID09IHN5bWJvbFRhZyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIHR5cGVkIGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkobmV3IFVpbnQ4QXJyYXkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KFtdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc1R5cGVkQXJyYXkgPSBub2RlSXNUeXBlZEFycmF5ID8gYmFzZVVuYXJ5KG5vZGVJc1R5cGVkQXJyYXkpIDogYmFzZUlzVHlwZWRBcnJheTtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nLiBBbiBlbXB0eSBzdHJpbmcgaXMgcmV0dXJuZWQgZm9yIGBudWxsYFxuICogYW5kIGB1bmRlZmluZWRgIHZhbHVlcy4gVGhlIHNpZ24gb2YgYC0wYCBpcyBwcmVzZXJ2ZWQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzdHJpbmcuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9TdHJpbmcobnVsbCk7XG4gKiAvLyA9PiAnJ1xuICpcbiAqIF8udG9TdHJpbmcoLTApO1xuICogLy8gPT4gJy0wJ1xuICpcbiAqIF8udG9TdHJpbmcoWzEsIDIsIDNdKTtcbiAqIC8vID0+ICcxLDIsMydcbiAqL1xuZnVuY3Rpb24gdG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09IG51bGwgPyAnJyA6IGJhc2VUb1N0cmluZyh2YWx1ZSk7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYHBhdGhgIG9mIGBvYmplY3RgLiBJZiB0aGUgcmVzb2x2ZWQgdmFsdWUgaXNcbiAqIGB1bmRlZmluZWRgLCB0aGUgYGRlZmF1bHRWYWx1ZWAgaXMgcmV0dXJuZWQgaW4gaXRzIHBsYWNlLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy43LjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcGFyYW0geyp9IFtkZWZhdWx0VmFsdWVdIFRoZSB2YWx1ZSByZXR1cm5lZCBmb3IgYHVuZGVmaW5lZGAgcmVzb2x2ZWQgdmFsdWVzLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHJlc29sdmVkIHZhbHVlLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IFt7ICdiJzogeyAnYyc6IDMgfSB9XSB9O1xuICpcbiAqIF8uZ2V0KG9iamVjdCwgJ2FbMF0uYi5jJyk7XG4gKiAvLyA9PiAzXG4gKlxuICogXy5nZXQob2JqZWN0LCBbJ2EnLCAnMCcsICdiJywgJ2MnXSk7XG4gKiAvLyA9PiAzXG4gKlxuICogXy5nZXQob2JqZWN0LCAnYS5iLmMnLCAnZGVmYXVsdCcpO1xuICogLy8gPT4gJ2RlZmF1bHQnXG4gKi9cbmZ1bmN0aW9uIGdldChvYmplY3QsIHBhdGgsIGRlZmF1bHRWYWx1ZSkge1xuICB2YXIgcmVzdWx0ID0gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBiYXNlR2V0KG9iamVjdCwgcGF0aCk7XG4gIHJldHVybiByZXN1bHQgPT09IHVuZGVmaW5lZCA/IGRlZmF1bHRWYWx1ZSA6IHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHBhdGhgIGlzIGEgZGlyZWN0IG9yIGluaGVyaXRlZCBwcm9wZXJ0eSBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgcGF0aGAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSBfLmNyZWF0ZSh7ICdhJzogXy5jcmVhdGUoeyAnYic6IDIgfSkgfSk7XG4gKlxuICogXy5oYXNJbihvYmplY3QsICdhJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5oYXNJbihvYmplY3QsICdhLmInKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmhhc0luKG9iamVjdCwgWydhJywgJ2InXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5oYXNJbihvYmplY3QsICdiJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBoYXNJbihvYmplY3QsIHBhdGgpIHtcbiAgcmV0dXJuIG9iamVjdCAhPSBudWxsICYmIGhhc1BhdGgob2JqZWN0LCBwYXRoLCBiYXNlSGFzSW4pO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBOb24tb2JqZWN0IHZhbHVlcyBhcmUgY29lcmNlZCB0byBvYmplY3RzLiBTZWUgdGhlXG4gKiBbRVMgc3BlY10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LmtleXMpXG4gKiBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8ua2V5cyhuZXcgRm9vKTtcbiAqIC8vID0+IFsnYScsICdiJ10gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqXG4gKiBfLmtleXMoJ2hpJyk7XG4gKiAvLyA9PiBbJzAnLCAnMSddXG4gKi9cbmZ1bmN0aW9uIGtleXMob2JqZWN0KSB7XG4gIHJldHVybiBpc0FycmF5TGlrZShvYmplY3QpID8gYXJyYXlMaWtlS2V5cyhvYmplY3QpIDogYmFzZUtleXMob2JqZWN0KTtcbn1cblxuLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIHRoZSBmaXJzdCBhcmd1bWVudCBpdCByZWNlaXZlcy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHBhcmFtIHsqfSB2YWx1ZSBBbnkgdmFsdWUuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyBgdmFsdWVgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqXG4gKiBjb25zb2xlLmxvZyhfLmlkZW50aXR5KG9iamVjdCkgPT09IG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlkZW50aXR5KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSB2YWx1ZSBhdCBgcGF0aGAgb2YgYSBnaXZlbiBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjQuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBhY2Nlc3NvciBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdHMgPSBbXG4gKiAgIHsgJ2EnOiB7ICdiJzogMiB9IH0sXG4gKiAgIHsgJ2EnOiB7ICdiJzogMSB9IH1cbiAqIF07XG4gKlxuICogXy5tYXAob2JqZWN0cywgXy5wcm9wZXJ0eSgnYS5iJykpO1xuICogLy8gPT4gWzIsIDFdXG4gKlxuICogXy5tYXAoXy5zb3J0Qnkob2JqZWN0cywgXy5wcm9wZXJ0eShbJ2EnLCAnYiddKSksICdhLmInKTtcbiAqIC8vID0+IFsxLCAyXVxuICovXG5mdW5jdGlvbiBwcm9wZXJ0eShwYXRoKSB7XG4gIHJldHVybiBpc0tleShwYXRoKSA/IGJhc2VQcm9wZXJ0eSh0b0tleShwYXRoKSkgOiBiYXNlUHJvcGVydHlEZWVwKHBhdGgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcDtcbiIsIi8qKlxuICogbG9kYXNoIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyA8aHR0cHM6Ly9qcXVlcnkub3JnLz5cbiAqIFJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqL1xuXG4vKiogVXNlZCBhcyB0aGUgc2l6ZSB0byBlbmFibGUgbGFyZ2UgYXJyYXkgb3B0aW1pemF0aW9ucy4gKi9cbnZhciBMQVJHRV9BUlJBWV9TSVpFID0gMjAwO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIElORklOSVRZID0gMSAvIDAsXG4gICAgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJyxcbiAgICBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxuLyoqXG4gKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgXG4gKiBbc3ludGF4IGNoYXJhY3RlcnNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXBhdHRlcm5zKS5cbiAqL1xudmFyIHJlUmVnRXhwQ2hhciA9IC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGhvc3QgY29uc3RydWN0b3JzIChTYWZhcmkpLiAqL1xudmFyIHJlSXNIb3N0Q3RvciA9IC9eXFxbb2JqZWN0IC4rP0NvbnN0cnVjdG9yXFxdJC87XG5cbi8qKiBVc2VkIHRvIGRldGVjdCB1bnNpZ25lZCBpbnRlZ2VyIHZhbHVlcy4gKi9cbnZhciByZUlzVWludCA9IC9eKD86MHxbMS05XVxcZCopJC87XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxuLyoqXG4gKiBBIGZhc3RlciBhbHRlcm5hdGl2ZSB0byBgRnVuY3Rpb24jYXBwbHlgLCB0aGlzIGZ1bmN0aW9uIGludm9rZXMgYGZ1bmNgXG4gKiB3aXRoIHRoZSBgdGhpc2AgYmluZGluZyBvZiBgdGhpc0FyZ2AgYW5kIHRoZSBhcmd1bWVudHMgb2YgYGFyZ3NgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBpbnZva2UuXG4gKiBAcGFyYW0geyp9IHRoaXNBcmcgVGhlIGB0aGlzYCBiaW5kaW5nIG9mIGBmdW5jYC5cbiAqIEBwYXJhbSB7QXJyYXl9IGFyZ3MgVGhlIGFyZ3VtZW50cyB0byBpbnZva2UgYGZ1bmNgIHdpdGguXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcmVzdWx0IG9mIGBmdW5jYC5cbiAqL1xuZnVuY3Rpb24gYXBwbHkoZnVuYywgdGhpc0FyZywgYXJncykge1xuICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcpO1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICB9XG4gIHJldHVybiBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xufVxuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5pbmNsdWRlc2AgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBzcGVjaWZ5aW5nIGFuIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSB0YXJnZXQgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHRhcmdldGAgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlJbmNsdWRlcyhhcnJheSwgdmFsdWUpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5ID8gYXJyYXkubGVuZ3RoIDogMDtcbiAgcmV0dXJuICEhbGVuZ3RoICYmIGJhc2VJbmRleE9mKGFycmF5LCB2YWx1ZSwgMCkgPiAtMTtcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGxpa2UgYGFycmF5SW5jbHVkZXNgIGV4Y2VwdCB0aGF0IGl0IGFjY2VwdHMgYSBjb21wYXJhdG9yLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSB0YXJnZXQgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb21wYXJhdG9yIFRoZSBjb21wYXJhdG9yIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHRhcmdldGAgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlJbmNsdWRlc1dpdGgoYXJyYXksIHZhbHVlLCBjb21wYXJhdG9yKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPyBhcnJheS5sZW5ndGggOiAwO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGNvbXBhcmF0b3IodmFsdWUsIGFycmF5W2luZGV4XSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLm1hcGAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlXG4gKiBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgbWFwcGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhcnJheU1hcChhcnJheSwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA/IGFycmF5Lmxlbmd0aCA6IDAsXG4gICAgICByZXN1bHQgPSBBcnJheShsZW5ndGgpO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEFwcGVuZHMgdGhlIGVsZW1lbnRzIG9mIGB2YWx1ZXNgIHRvIGBhcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0FycmF5fSB2YWx1ZXMgVGhlIHZhbHVlcyB0byBhcHBlbmQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlQdXNoKGFycmF5LCB2YWx1ZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSB2YWx1ZXMubGVuZ3RoLFxuICAgICAgb2Zmc2V0ID0gYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYXJyYXlbb2Zmc2V0ICsgaW5kZXhdID0gdmFsdWVzW2luZGV4XTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZmluZEluZGV4YCBhbmQgYF8uZmluZExhc3RJbmRleGAgd2l0aG91dFxuICogc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBmcm9tSW5kZXggVGhlIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxuICogQHBhcmFtIHtib29sZWFufSBbZnJvbVJpZ2h0XSBTcGVjaWZ5IGl0ZXJhdGluZyBmcm9tIHJpZ2h0IHRvIGxlZnQuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBiYXNlRmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUsIGZyb21JbmRleCwgZnJvbVJpZ2h0KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICBpbmRleCA9IGZyb21JbmRleCArIChmcm9tUmlnaHQgPyAxIDogLTEpO1xuXG4gIHdoaWxlICgoZnJvbVJpZ2h0ID8gaW5kZXgtLSA6ICsraW5kZXggPCBsZW5ndGgpKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmluZGV4T2ZgIHdpdGhvdXQgYGZyb21JbmRleGAgYm91bmRzIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHBhcmFtIHtudW1iZXJ9IGZyb21JbmRleCBUaGUgaW5kZXggdG8gc2VhcmNoIGZyb20uXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBiYXNlSW5kZXhPZihhcnJheSwgdmFsdWUsIGZyb21JbmRleCkge1xuICBpZiAodmFsdWUgIT09IHZhbHVlKSB7XG4gICAgcmV0dXJuIGJhc2VGaW5kSW5kZXgoYXJyYXksIGJhc2VJc05hTiwgZnJvbUluZGV4KTtcbiAgfVxuICB2YXIgaW5kZXggPSBmcm9tSW5kZXggLSAxLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGFycmF5W2luZGV4XSA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmFOYCB3aXRob3V0IHN1cHBvcnQgZm9yIG51bWJlciBvYmplY3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGBOYU5gLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hTih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09IHZhbHVlO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRpbWVzYCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHNcbiAqIG9yIG1heCBhcnJheSBsZW5ndGggY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIGludm9rZSBgaXRlcmF0ZWVgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcmVzdWx0cy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRpbWVzKG4sIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobik7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBuKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGluZGV4KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnVuYXJ5YCB3aXRob3V0IHN1cHBvcnQgZm9yIHN0b3JpbmcgbWV0YWRhdGEuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNhcCBhcmd1bWVudHMgZm9yLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgY2FwcGVkIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlVW5hcnkoZnVuYykge1xuICByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gZnVuYyh2YWx1ZSk7XG4gIH07XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgY2FjaGUgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGNhY2hlIFRoZSBjYWNoZSB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBjYWNoZUhhcyhjYWNoZSwga2V5KSB7XG4gIHJldHVybiBjYWNoZS5oYXMoa2V5KTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gZ2V0VmFsdWUob2JqZWN0LCBrZXkpIHtcbiAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBob3N0IG9iamVjdCBpbiBJRSA8IDkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBob3N0IG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0hvc3RPYmplY3QodmFsdWUpIHtcbiAgLy8gTWFueSBob3N0IG9iamVjdHMgYXJlIGBPYmplY3RgIG9iamVjdHMgdGhhdCBjYW4gY29lcmNlIHRvIHN0cmluZ3NcbiAgLy8gZGVzcGl0ZSBoYXZpbmcgaW1wcm9wZXJseSBkZWZpbmVkIGB0b1N0cmluZ2AgbWV0aG9kcy5cbiAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuICBpZiAodmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUudG9TdHJpbmcgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRyeSB7XG4gICAgICByZXN1bHQgPSAhISh2YWx1ZSArICcnKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHVuYXJ5IGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBgZnVuY2Agd2l0aCBpdHMgYXJndW1lbnQgdHJhbnNmb3JtZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHdyYXAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cmFuc2Zvcm0gVGhlIGFyZ3VtZW50IHRyYW5zZm9ybS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBvdmVyQXJnKGZ1bmMsIHRyYW5zZm9ybSkge1xuICByZXR1cm4gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIGZ1bmModHJhbnNmb3JtKGFyZykpO1xuICB9O1xufVxuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZSxcbiAgICBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb3ZlcnJlYWNoaW5nIGNvcmUtanMgc2hpbXMuICovXG52YXIgY29yZUpzRGF0YSA9IHJvb3RbJ19fY29yZS1qc19zaGFyZWRfXyddO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWV0aG9kcyBtYXNxdWVyYWRpbmcgYXMgbmF0aXZlLiAqL1xudmFyIG1hc2tTcmNLZXkgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciB1aWQgPSAvW14uXSskLy5leGVjKGNvcmVKc0RhdGEgJiYgY29yZUpzRGF0YS5rZXlzICYmIGNvcmVKc0RhdGEua2V5cy5JRV9QUk9UTyB8fCAnJyk7XG4gIHJldHVybiB1aWQgPyAoJ1N5bWJvbChzcmMpXzEuJyArIHVpZCkgOiAnJztcbn0oKSk7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaWYgYSBtZXRob2QgaXMgbmF0aXZlLiAqL1xudmFyIHJlSXNOYXRpdmUgPSBSZWdFeHAoJ14nICtcbiAgZnVuY1RvU3RyaW5nLmNhbGwoaGFzT3duUHJvcGVydHkpLnJlcGxhY2UocmVSZWdFeHBDaGFyLCAnXFxcXCQmJylcbiAgLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csICckMS4qPycpICsgJyQnXG4pO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBTeW1ib2wgPSByb290LlN5bWJvbCxcbiAgICBnZXRQcm90b3R5cGUgPSBvdmVyQXJnKE9iamVjdC5nZXRQcm90b3R5cGVPZiwgT2JqZWN0KSxcbiAgICBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlLFxuICAgIHNwbGljZSA9IGFycmF5UHJvdG8uc3BsaWNlLFxuICAgIHNwcmVhZGFibGVTeW1ib2wgPSBTeW1ib2wgPyBTeW1ib2wuaXNDb25jYXRTcHJlYWRhYmxlIDogdW5kZWZpbmVkO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlR2V0U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMsXG4gICAgbmF0aXZlTWF4ID0gTWF0aC5tYXg7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBNYXAgPSBnZXROYXRpdmUocm9vdCwgJ01hcCcpLFxuICAgIG5hdGl2ZUNyZWF0ZSA9IGdldE5hdGl2ZShPYmplY3QsICdjcmVhdGUnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgaGFzaCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIEhhc2goZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPyBlbnRyaWVzLmxlbmd0aCA6IDA7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIEhhc2hcbiAqL1xuZnVuY3Rpb24gaGFzaENsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmF0aXZlQ3JlYXRlID8gbmF0aXZlQ3JlYXRlKG51bGwpIDoge307XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7T2JqZWN0fSBoYXNoIFRoZSBoYXNoIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoRGVsZXRlKGtleSkge1xuICByZXR1cm4gdGhpcy5oYXMoa2V5KSAmJiBkZWxldGUgdGhpcy5fX2RhdGFfX1trZXldO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGhhc2ggdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gaGFzaEdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAobmF0aXZlQ3JlYXRlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGRhdGFba2V5XTtcbiAgICByZXR1cm4gcmVzdWx0ID09PSBIQVNIX1VOREVGSU5FRCA/IHVuZGVmaW5lZCA6IHJlc3VsdDtcbiAgfVxuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpID8gZGF0YVtrZXldIDogdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIGhhc2ggdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hIYXMoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgcmV0dXJuIG5hdGl2ZUNyZWF0ZSA/IGRhdGFba2V5XSAhPT0gdW5kZWZpbmVkIDogaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIGhhc2ggYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBoYXNoIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBoYXNoU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBkYXRhW2tleV0gPSAobmF0aXZlQ3JlYXRlICYmIHZhbHVlID09PSB1bmRlZmluZWQpID8gSEFTSF9VTkRFRklORUQgOiB2YWx1ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBIYXNoYC5cbkhhc2gucHJvdG90eXBlLmNsZWFyID0gaGFzaENsZWFyO1xuSGFzaC5wcm90b3R5cGVbJ2RlbGV0ZSddID0gaGFzaERlbGV0ZTtcbkhhc2gucHJvdG90eXBlLmdldCA9IGhhc2hHZXQ7XG5IYXNoLnByb3RvdHlwZS5oYXMgPSBoYXNoSGFzO1xuSGFzaC5wcm90b3R5cGUuc2V0ID0gaGFzaFNldDtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGxpc3QgY2FjaGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBMaXN0Q2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPyBlbnRyaWVzLmxlbmd0aCA6IDA7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IFtdO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgbGFzdEluZGV4ID0gZGF0YS5sZW5ndGggLSAxO1xuICBpZiAoaW5kZXggPT0gbGFzdEluZGV4KSB7XG4gICAgZGF0YS5wb3AoKTtcbiAgfSBlbHNlIHtcbiAgICBzcGxpY2UuY2FsbChkYXRhLCBpbmRleCwgMSk7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICByZXR1cm4gaW5kZXggPCAwID8gdW5kZWZpbmVkIDogZGF0YVtpbmRleF1bMV07XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBhc3NvY0luZGV4T2YodGhpcy5fX2RhdGFfXywga2V5KSA+IC0xO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIGxpc3QgY2FjaGUgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGxpc3QgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIGRhdGEucHVzaChba2V5LCB2YWx1ZV0pO1xuICB9IGVsc2Uge1xuICAgIGRhdGFbaW5kZXhdWzFdID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBMaXN0Q2FjaGVgLlxuTGlzdENhY2hlLnByb3RvdHlwZS5jbGVhciA9IGxpc3RDYWNoZUNsZWFyO1xuTGlzdENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBsaXN0Q2FjaGVEZWxldGU7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmdldCA9IGxpc3RDYWNoZUdldDtcbkxpc3RDYWNoZS5wcm90b3R5cGUuaGFzID0gbGlzdENhY2hlSGFzO1xuTGlzdENhY2hlLnByb3RvdHlwZS5zZXQgPSBsaXN0Q2FjaGVTZXQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hcCBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBNYXBDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA/IGVudHJpZXMubGVuZ3RoIDogMDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUNsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0ge1xuICAgICdoYXNoJzogbmV3IEhhc2gsXG4gICAgJ21hcCc6IG5ldyAoTWFwIHx8IExpc3RDYWNoZSksXG4gICAgJ3N0cmluZyc6IG5ldyBIYXNoXG4gIH07XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZURlbGV0ZShrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KVsnZGVsZXRlJ10oa2V5KTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBtYXAgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlR2V0KGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmdldChrZXkpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIG1hcCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmhhcyhrZXkpO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIG1hcCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBtYXAgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLnNldChrZXksIHZhbHVlKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBNYXBDYWNoZWAuXG5NYXBDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBtYXBDYWNoZUNsZWFyO1xuTWFwQ2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IG1hcENhY2hlRGVsZXRlO1xuTWFwQ2FjaGUucHJvdG90eXBlLmdldCA9IG1hcENhY2hlR2V0O1xuTWFwQ2FjaGUucHJvdG90eXBlLmhhcyA9IG1hcENhY2hlSGFzO1xuTWFwQ2FjaGUucHJvdG90eXBlLnNldCA9IG1hcENhY2hlU2V0O1xuXG4vKipcbiAqXG4gKiBDcmVhdGVzIGFuIGFycmF5IGNhY2hlIG9iamVjdCB0byBzdG9yZSB1bmlxdWUgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFt2YWx1ZXNdIFRoZSB2YWx1ZXMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIFNldENhY2hlKHZhbHVlcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcyA/IHZhbHVlcy5sZW5ndGggOiAwO1xuXG4gIHRoaXMuX19kYXRhX18gPSBuZXcgTWFwQ2FjaGU7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdGhpcy5hZGQodmFsdWVzW2luZGV4XSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBZGRzIGB2YWx1ZWAgdG8gdGhlIGFycmF5IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBhZGRcbiAqIEBtZW1iZXJPZiBTZXRDYWNoZVxuICogQGFsaWFzIHB1c2hcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNhY2hlLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIHNldENhY2hlQWRkKHZhbHVlKSB7XG4gIHRoaXMuX19kYXRhX18uc2V0KHZhbHVlLCBIQVNIX1VOREVGSU5FRCk7XG4gIHJldHVybiB0aGlzO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGluIHRoZSBhcnJheSBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgU2V0Q2FjaGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHNldENhY2hlSGFzKHZhbHVlKSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmhhcyh2YWx1ZSk7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBTZXRDYWNoZWAuXG5TZXRDYWNoZS5wcm90b3R5cGUuYWRkID0gU2V0Q2FjaGUucHJvdG90eXBlLnB1c2ggPSBzZXRDYWNoZUFkZDtcblNldENhY2hlLnByb3RvdHlwZS5oYXMgPSBzZXRDYWNoZUhhcztcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIHRoZSBhcnJheS1saWtlIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtib29sZWFufSBpbmhlcml0ZWQgU3BlY2lmeSByZXR1cm5pbmcgaW5oZXJpdGVkIHByb3BlcnR5IG5hbWVzLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYXJyYXlMaWtlS2V5cyh2YWx1ZSwgaW5oZXJpdGVkKSB7XG4gIC8vIFNhZmFyaSA4LjEgbWFrZXMgYGFyZ3VtZW50cy5jYWxsZWVgIGVudW1lcmFibGUgaW4gc3RyaWN0IG1vZGUuXG4gIC8vIFNhZmFyaSA5IG1ha2VzIGBhcmd1bWVudHMubGVuZ3RoYCBlbnVtZXJhYmxlIGluIHN0cmljdCBtb2RlLlxuICB2YXIgcmVzdWx0ID0gKGlzQXJyYXkodmFsdWUpIHx8IGlzQXJndW1lbnRzKHZhbHVlKSlcbiAgICA/IGJhc2VUaW1lcyh2YWx1ZS5sZW5ndGgsIFN0cmluZylcbiAgICA6IFtdO1xuXG4gIHZhciBsZW5ndGggPSByZXN1bHQubGVuZ3RoLFxuICAgICAgc2tpcEluZGV4ZXMgPSAhIWxlbmd0aDtcblxuICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICBpZiAoKGluaGVyaXRlZCB8fCBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBrZXkpKSAmJlxuICAgICAgICAhKHNraXBJbmRleGVzICYmIChrZXkgPT0gJ2xlbmd0aCcgfHwgaXNJbmRleChrZXksIGxlbmd0aCkpKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBpbmRleCBhdCB3aGljaCB0aGUgYGtleWAgaXMgZm91bmQgaW4gYGFycmF5YCBvZiBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSBrZXkgVGhlIGtleSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYXNzb2NJbmRleE9mKGFycmF5LCBrZXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgaWYgKGVxKGFycmF5W2xlbmd0aF1bMF0sIGtleSkpIHtcbiAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBtZXRob2RzIGxpa2UgYF8uZGlmZmVyZW5jZWAgd2l0aG91dCBzdXBwb3J0XG4gKiBmb3IgZXhjbHVkaW5nIG11bHRpcGxlIGFycmF5cyBvciBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlcyBUaGUgdmFsdWVzIHRvIGV4Y2x1ZGUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbaXRlcmF0ZWVdIFRoZSBpdGVyYXRlZSBpbnZva2VkIHBlciBlbGVtZW50LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NvbXBhcmF0b3JdIFRoZSBjb21wYXJhdG9yIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBhcnJheSBvZiBmaWx0ZXJlZCB2YWx1ZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VEaWZmZXJlbmNlKGFycmF5LCB2YWx1ZXMsIGl0ZXJhdGVlLCBjb21wYXJhdG9yKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgaW5jbHVkZXMgPSBhcnJheUluY2x1ZGVzLFxuICAgICAgaXNDb21tb24gPSB0cnVlLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gW10sXG4gICAgICB2YWx1ZXNMZW5ndGggPSB2YWx1ZXMubGVuZ3RoO1xuXG4gIGlmICghbGVuZ3RoKSB7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBpZiAoaXRlcmF0ZWUpIHtcbiAgICB2YWx1ZXMgPSBhcnJheU1hcCh2YWx1ZXMsIGJhc2VVbmFyeShpdGVyYXRlZSkpO1xuICB9XG4gIGlmIChjb21wYXJhdG9yKSB7XG4gICAgaW5jbHVkZXMgPSBhcnJheUluY2x1ZGVzV2l0aDtcbiAgICBpc0NvbW1vbiA9IGZhbHNlO1xuICB9XG4gIGVsc2UgaWYgKHZhbHVlcy5sZW5ndGggPj0gTEFSR0VfQVJSQVlfU0laRSkge1xuICAgIGluY2x1ZGVzID0gY2FjaGVIYXM7XG4gICAgaXNDb21tb24gPSBmYWxzZTtcbiAgICB2YWx1ZXMgPSBuZXcgU2V0Q2FjaGUodmFsdWVzKTtcbiAgfVxuICBvdXRlcjpcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgdmFsdWUgPSBhcnJheVtpbmRleF0sXG4gICAgICAgIGNvbXB1dGVkID0gaXRlcmF0ZWUgPyBpdGVyYXRlZSh2YWx1ZSkgOiB2YWx1ZTtcblxuICAgIHZhbHVlID0gKGNvbXBhcmF0b3IgfHwgdmFsdWUgIT09IDApID8gdmFsdWUgOiAwO1xuICAgIGlmIChpc0NvbW1vbiAmJiBjb21wdXRlZCA9PT0gY29tcHV0ZWQpIHtcbiAgICAgIHZhciB2YWx1ZXNJbmRleCA9IHZhbHVlc0xlbmd0aDtcbiAgICAgIHdoaWxlICh2YWx1ZXNJbmRleC0tKSB7XG4gICAgICAgIGlmICh2YWx1ZXNbdmFsdWVzSW5kZXhdID09PSBjb21wdXRlZCkge1xuICAgICAgICAgIGNvbnRpbnVlIG91dGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKCFpbmNsdWRlcyh2YWx1ZXMsIGNvbXB1dGVkLCBjb21wYXJhdG9yKSkge1xuICAgICAgcmVzdWx0LnB1c2godmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmZsYXR0ZW5gIHdpdGggc3VwcG9ydCBmb3IgcmVzdHJpY3RpbmcgZmxhdHRlbmluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGZsYXR0ZW4uXG4gKiBAcGFyYW0ge251bWJlcn0gZGVwdGggVGhlIG1heGltdW0gcmVjdXJzaW9uIGRlcHRoLlxuICogQHBhcmFtIHtib29sZWFufSBbcHJlZGljYXRlPWlzRmxhdHRlbmFibGVdIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc1N0cmljdF0gUmVzdHJpY3QgdG8gdmFsdWVzIHRoYXQgcGFzcyBgcHJlZGljYXRlYCBjaGVja3MuXG4gKiBAcGFyYW0ge0FycmF5fSBbcmVzdWx0PVtdXSBUaGUgaW5pdGlhbCByZXN1bHQgdmFsdWUuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBmbGF0dGVuZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGJhc2VGbGF0dGVuKGFycmF5LCBkZXB0aCwgcHJlZGljYXRlLCBpc1N0cmljdCwgcmVzdWx0KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIHByZWRpY2F0ZSB8fCAocHJlZGljYXRlID0gaXNGbGF0dGVuYWJsZSk7XG4gIHJlc3VsdCB8fCAocmVzdWx0ID0gW10pO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdO1xuICAgIGlmIChkZXB0aCA+IDAgJiYgcHJlZGljYXRlKHZhbHVlKSkge1xuICAgICAgaWYgKGRlcHRoID4gMSkge1xuICAgICAgICAvLyBSZWN1cnNpdmVseSBmbGF0dGVuIGFycmF5cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgICAgICBiYXNlRmxhdHRlbih2YWx1ZSwgZGVwdGggLSAxLCBwcmVkaWNhdGUsIGlzU3RyaWN0LCByZXN1bHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXJyYXlQdXNoKHJlc3VsdCwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIWlzU3RyaWN0KSB7XG4gICAgICByZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0QWxsS2V5c2AgYW5kIGBnZXRBbGxLZXlzSW5gIHdoaWNoIHVzZXNcbiAqIGBrZXlzRnVuY2AgYW5kIGBzeW1ib2xzRnVuY2AgdG8gZ2V0IHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZFxuICogc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtGdW5jdGlvbn0ga2V5c0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUga2V5cyBvZiBgb2JqZWN0YC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHN5bWJvbHNGdW5jIFRoZSBmdW5jdGlvbiB0byBnZXQgdGhlIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0QWxsS2V5cyhvYmplY3QsIGtleXNGdW5jLCBzeW1ib2xzRnVuYykge1xuICB2YXIgcmVzdWx0ID0ga2V5c0Z1bmMob2JqZWN0KTtcbiAgcmV0dXJuIGlzQXJyYXkob2JqZWN0KSA/IHJlc3VsdCA6IGFycmF5UHVzaChyZXN1bHQsIHN5bWJvbHNGdW5jKG9iamVjdCkpO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmF0aXZlYCB3aXRob3V0IGJhZCBzaGltIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbixcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hdGl2ZSh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSB8fCBpc01hc2tlZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHBhdHRlcm4gPSAoaXNGdW5jdGlvbih2YWx1ZSkgfHwgaXNIb3N0T2JqZWN0KHZhbHVlKSkgPyByZUlzTmF0aXZlIDogcmVJc0hvc3RDdG9yO1xuICByZXR1cm4gcGF0dGVybi50ZXN0KHRvU291cmNlKHZhbHVlKSk7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ua2V5c0luYCB3aGljaCBkb2Vzbid0IHRyZWF0IHNwYXJzZSBhcnJheXMgYXMgZGVuc2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VLZXlzSW4ob2JqZWN0KSB7XG4gIGlmICghaXNPYmplY3Qob2JqZWN0KSkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzSW4ob2JqZWN0KTtcbiAgfVxuICB2YXIgaXNQcm90byA9IGlzUHJvdG90eXBlKG9iamVjdCksXG4gICAgICByZXN1bHQgPSBbXTtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKCEoa2V5ID09ICdjb25zdHJ1Y3RvcicgJiYgKGlzUHJvdG8gfHwgIWhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ucGlja2Agd2l0aG91dCBzdXBwb3J0IGZvciBpbmRpdmlkdWFsXG4gKiBwcm9wZXJ0eSBpZGVudGlmaWVycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgc291cmNlIG9iamVjdC5cbiAqIEBwYXJhbSB7c3RyaW5nW119IHByb3BzIFRoZSBwcm9wZXJ0eSBpZGVudGlmaWVycyB0byBwaWNrLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbmV3IG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gYmFzZVBpY2sob2JqZWN0LCBwcm9wcykge1xuICBvYmplY3QgPSBPYmplY3Qob2JqZWN0KTtcbiAgcmV0dXJuIGJhc2VQaWNrQnkob2JqZWN0LCBwcm9wcywgZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICAgIHJldHVybiBrZXkgaW4gb2JqZWN0O1xuICB9KTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiAgYF8ucGlja0J5YCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIHNvdXJjZSBvYmplY3QuXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBwcm9wcyBUaGUgcHJvcGVydHkgaWRlbnRpZmllcnMgdG8gcGljayBmcm9tLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBwcm9wZXJ0eS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG5ldyBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGJhc2VQaWNrQnkob2JqZWN0LCBwcm9wcywgcHJlZGljYXRlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gcHJvcHMubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0ge307XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIga2V5ID0gcHJvcHNbaW5kZXhdLFxuICAgICAgICB2YWx1ZSA9IG9iamVjdFtrZXldO1xuXG4gICAgaWYgKHByZWRpY2F0ZSh2YWx1ZSwga2V5KSkge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5yZXN0YCB3aGljaCBkb2Vzbid0IHZhbGlkYXRlIG9yIGNvZXJjZSBhcmd1bWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGFwcGx5IGEgcmVzdCBwYXJhbWV0ZXIgdG8uXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0PWZ1bmMubGVuZ3RoLTFdIFRoZSBzdGFydCBwb3NpdGlvbiBvZiB0aGUgcmVzdCBwYXJhbWV0ZXIuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVJlc3QoZnVuYywgc3RhcnQpIHtcbiAgc3RhcnQgPSBuYXRpdmVNYXgoc3RhcnQgPT09IHVuZGVmaW5lZCA/IChmdW5jLmxlbmd0aCAtIDEpIDogc3RhcnQsIDApO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHMsXG4gICAgICAgIGluZGV4ID0gLTEsXG4gICAgICAgIGxlbmd0aCA9IG5hdGl2ZU1heChhcmdzLmxlbmd0aCAtIHN0YXJ0LCAwKSxcbiAgICAgICAgYXJyYXkgPSBBcnJheShsZW5ndGgpO1xuXG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGFycmF5W2luZGV4XSA9IGFyZ3Nbc3RhcnQgKyBpbmRleF07XG4gICAgfVxuICAgIGluZGV4ID0gLTE7XG4gICAgdmFyIG90aGVyQXJncyA9IEFycmF5KHN0YXJ0ICsgMSk7XG4gICAgd2hpbGUgKCsraW5kZXggPCBzdGFydCkge1xuICAgICAgb3RoZXJBcmdzW2luZGV4XSA9IGFyZ3NbaW5kZXhdO1xuICAgIH1cbiAgICBvdGhlckFyZ3Nbc3RhcnRdID0gYXJyYXk7XG4gICAgcmV0dXJuIGFwcGx5KGZ1bmMsIHRoaXMsIG90aGVyQXJncyk7XG4gIH07XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiBvd24gYW5kIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZFxuICogc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gZ2V0QWxsS2V5c0luKG9iamVjdCkge1xuICByZXR1cm4gYmFzZUdldEFsbEtleXMob2JqZWN0LCBrZXlzSW4sIGdldFN5bWJvbHNJbik7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgZGF0YSBmb3IgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIHJlZmVyZW5jZSBrZXkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbWFwIGRhdGEuXG4gKi9cbmZ1bmN0aW9uIGdldE1hcERhdGEobWFwLCBrZXkpIHtcbiAgdmFyIGRhdGEgPSBtYXAuX19kYXRhX187XG4gIHJldHVybiBpc0tleWFibGUoa2V5KVxuICAgID8gZGF0YVt0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8gJ3N0cmluZycgOiAnaGFzaCddXG4gICAgOiBkYXRhLm1hcDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdCwga2V5KTtcbiAgcmV0dXJuIGJhc2VJc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBzeW1ib2wgcHJvcGVydGllcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBzeW1ib2xzLlxuICovXG52YXIgZ2V0U3ltYm9scyA9IG5hdGl2ZUdldFN5bWJvbHMgPyBvdmVyQXJnKG5hdGl2ZUdldFN5bWJvbHMsIE9iamVjdCkgOiBzdHViQXJyYXk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGFuZCBpbmhlcml0ZWQgZW51bWVyYWJsZSBzeW1ib2wgcHJvcGVydGllc1xuICogb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2Ygc3ltYm9scy5cbiAqL1xudmFyIGdldFN5bWJvbHNJbiA9ICFuYXRpdmVHZXRTeW1ib2xzID8gc3R1YkFycmF5IDogZnVuY3Rpb24ob2JqZWN0KSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgd2hpbGUgKG9iamVjdCkge1xuICAgIGFycmF5UHVzaChyZXN1bHQsIGdldFN5bWJvbHMob2JqZWN0KSk7XG4gICAgb2JqZWN0ID0gZ2V0UHJvdG90eXBlKG9iamVjdCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBmbGF0dGVuYWJsZSBgYXJndW1lbnRzYCBvYmplY3Qgb3IgYXJyYXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgZmxhdHRlbmFibGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNGbGF0dGVuYWJsZSh2YWx1ZSkge1xuICByZXR1cm4gaXNBcnJheSh2YWx1ZSkgfHwgaXNBcmd1bWVudHModmFsdWUpIHx8XG4gICAgISEoc3ByZWFkYWJsZVN5bWJvbCAmJiB2YWx1ZSAmJiB2YWx1ZVtzcHJlYWRhYmxlU3ltYm9sXSk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGluZGV4LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoPU1BWF9TQUZFX0lOVEVHRVJdIFRoZSB1cHBlciBib3VuZHMgb2YgYSB2YWxpZCBpbmRleC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgaW5kZXgsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJbmRleCh2YWx1ZSwgbGVuZ3RoKSB7XG4gIGxlbmd0aCA9IGxlbmd0aCA9PSBudWxsID8gTUFYX1NBRkVfSU5URUdFUiA6IGxlbmd0aDtcbiAgcmV0dXJuICEhbGVuZ3RoICYmXG4gICAgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyB8fCByZUlzVWludC50ZXN0KHZhbHVlKSkgJiZcbiAgICAodmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8IGxlbmd0aCk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUgZm9yIHVzZSBhcyB1bmlxdWUgb2JqZWN0IGtleS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleWFibGUodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAodHlwZSA9PSAnc3RyaW5nJyB8fCB0eXBlID09ICdudW1iZXInIHx8IHR5cGUgPT0gJ3N5bWJvbCcgfHwgdHlwZSA9PSAnYm9vbGVhbicpXG4gICAgPyAodmFsdWUgIT09ICdfX3Byb3RvX18nKVxuICAgIDogKHZhbHVlID09PSBudWxsKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYGZ1bmNgIGhhcyBpdHMgc291cmNlIG1hc2tlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYGZ1bmNgIGlzIG1hc2tlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc01hc2tlZChmdW5jKSB7XG4gIHJldHVybiAhIW1hc2tTcmNLZXkgJiYgKG1hc2tTcmNLZXkgaW4gZnVuYyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGEgcHJvdG90eXBlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHByb3RvdHlwZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc1Byb3RvdHlwZSh2YWx1ZSkge1xuICB2YXIgQ3RvciA9IHZhbHVlICYmIHZhbHVlLmNvbnN0cnVjdG9yLFxuICAgICAgcHJvdG8gPSAodHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yLnByb3RvdHlwZSkgfHwgb2JqZWN0UHJvdG87XG5cbiAgcmV0dXJuIHZhbHVlID09PSBwcm90bztcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGxpa2VcbiAqIFtgT2JqZWN0LmtleXNgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGV4Y2VwdCB0aGF0IGl0IGluY2x1ZGVzIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnRpZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIG5hdGl2ZUtleXNJbihvYmplY3QpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBpZiAob2JqZWN0ICE9IG51bGwpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gT2JqZWN0KG9iamVjdCkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyBrZXkgaWYgaXQncyBub3QgYSBzdHJpbmcgb3Igc3ltYm9sLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBpbnNwZWN0LlxuICogQHJldHVybnMge3N0cmluZ3xzeW1ib2x9IFJldHVybnMgdGhlIGtleS5cbiAqL1xuZnVuY3Rpb24gdG9LZXkodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJyB8fCBpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgdmFyIHJlc3VsdCA9ICh2YWx1ZSArICcnKTtcbiAgcmV0dXJuIChyZXN1bHQgPT0gJzAnICYmICgxIC8gdmFsdWUpID09IC1JTkZJTklUWSkgPyAnLTAnIDogcmVzdWx0O1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGBmdW5jYCB0byBpdHMgc291cmNlIGNvZGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzb3VyY2UgY29kZS5cbiAqL1xuZnVuY3Rpb24gdG9Tb3VyY2UoZnVuYykge1xuICBpZiAoZnVuYyAhPSBudWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBmdW5jVG9TdHJpbmcuY2FsbChmdW5jKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gKGZ1bmMgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbi8qKlxuICogUGVyZm9ybXMgYVxuICogW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGNvbXBhcmlzb24gYmV0d2VlbiB0d28gdmFsdWVzIHRvIGRldGVybWluZSBpZiB0aGV5IGFyZSBlcXVpdmFsZW50LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICogdmFyIG90aGVyID0geyAnYSc6IDEgfTtcbiAqXG4gKiBfLmVxKG9iamVjdCwgb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKCdhJywgJ2EnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKCdhJywgT2JqZWN0KCdhJykpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKE5hTiwgTmFOKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gZXEodmFsdWUsIG90aGVyKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gb3RoZXIgfHwgKHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXIpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhbiBgYXJndW1lbnRzYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FyZ3VtZW50cyh2YWx1ZSkge1xuICAvLyBTYWZhcmkgOC4xIG1ha2VzIGBhcmd1bWVudHMuY2FsbGVlYCBlbnVtZXJhYmxlIGluIHN0cmljdCBtb2RlLlxuICByZXR1cm4gaXNBcnJheUxpa2VPYmplY3QodmFsdWUpICYmIGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsICdjYWxsZWUnKSAmJlxuICAgICghcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpIHx8IG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpID09IGFyZ3NUYWcpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLiBBIHZhbHVlIGlzIGNvbnNpZGVyZWQgYXJyYXktbGlrZSBpZiBpdCdzXG4gKiBub3QgYSBmdW5jdGlvbiBhbmQgaGFzIGEgYHZhbHVlLmxlbmd0aGAgdGhhdCdzIGFuIGludGVnZXIgZ3JlYXRlciB0aGFuIG9yXG4gKiBlcXVhbCB0byBgMGAgYW5kIGxlc3MgdGhhbiBvciBlcXVhbCB0byBgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZSgnYWJjJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhaXNGdW5jdGlvbih2YWx1ZSk7XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy5pc0FycmF5TGlrZWAgZXhjZXB0IHRoYXQgaXQgYWxzbyBjaGVja3MgaWYgYHZhbHVlYFxuICogaXMgYW4gb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LWxpa2Ugb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGlzQXJyYXlMaWtlKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oXyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXG4gIC8vIGluIFNhZmFyaSA4LTkgd2hpY2ggcmV0dXJucyAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXkgYW5kIG90aGVyIGNvbnN0cnVjdG9ycy5cbiAgdmFyIHRhZyA9IGlzT2JqZWN0KHZhbHVlKSA/IG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpIDogJyc7XG4gIHJldHVybiB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBsZW5ndGguXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIGlzIGxvb3NlbHkgYmFzZWQgb25cbiAqIFtgVG9MZW5ndGhgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy10b2xlbmd0aCkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBsZW5ndGgsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0xlbmd0aCgzKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTGVuZ3RoKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKEluZmluaXR5KTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aCgnMycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNMZW5ndGgodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyAmJlxuICAgIHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPD0gTUFYX1NBRkVfSU5URUdFUjtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAhIXZhbHVlICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3ltYm9sYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3ltYm9sLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTeW1ib2woU3ltYm9sLml0ZXJhdG9yKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3ltYm9sKCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N5bWJvbCcgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA9PSBzeW1ib2xUYWcpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBhbmQgaW5oZXJpdGVkIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzSW4obmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYicsICdjJ10gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqL1xuZnVuY3Rpb24ga2V5c0luKG9iamVjdCkge1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqZWN0KSA/IGFycmF5TGlrZUtleXMob2JqZWN0LCB0cnVlKSA6IGJhc2VLZXlzSW4ob2JqZWN0KTtcbn1cblxuLyoqXG4gKiBUaGUgb3Bwb3NpdGUgb2YgYF8ucGlja2A7IHRoaXMgbWV0aG9kIGNyZWF0ZXMgYW4gb2JqZWN0IGNvbXBvc2VkIG9mIHRoZVxuICogb3duIGFuZCBpbmhlcml0ZWQgZW51bWVyYWJsZSBzdHJpbmcga2V5ZWQgcHJvcGVydGllcyBvZiBgb2JqZWN0YCB0aGF0IGFyZVxuICogbm90IG9taXR0ZWQuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgc291cmNlIG9iamVjdC5cbiAqIEBwYXJhbSB7Li4uKHN0cmluZ3xzdHJpbmdbXSl9IFtwcm9wc10gVGhlIHByb3BlcnR5IGlkZW50aWZpZXJzIHRvIG9taXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBuZXcgb2JqZWN0LlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEsICdiJzogJzInLCAnYyc6IDMgfTtcbiAqXG4gKiBfLm9taXQob2JqZWN0LCBbJ2EnLCAnYyddKTtcbiAqIC8vID0+IHsgJ2InOiAnMicgfVxuICovXG52YXIgb21pdCA9IGJhc2VSZXN0KGZ1bmN0aW9uKG9iamVjdCwgcHJvcHMpIHtcbiAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG4gIHByb3BzID0gYXJyYXlNYXAoYmFzZUZsYXR0ZW4ocHJvcHMsIDEpLCB0b0tleSk7XG4gIHJldHVybiBiYXNlUGljayhvYmplY3QsIGJhc2VEaWZmZXJlbmNlKGdldEFsbEtleXNJbihvYmplY3QpLCBwcm9wcykpO1xufSk7XG5cbi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBhIG5ldyBlbXB0eSBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGVtcHR5IGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgYXJyYXlzID0gXy50aW1lcygyLCBfLnN0dWJBcnJheSk7XG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzKTtcbiAqIC8vID0+IFtbXSwgW11dXG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzWzBdID09PSBhcnJheXNbMV0pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gc3R1YkFycmF5KCkge1xuICByZXR1cm4gW107XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb21pdDtcbiIsIihmdW5jdGlvbihyb290LCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoW10sIGZhY3RvcnkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICB9IGVsc2Uge1xuICAgIHJvb3QubWF0ZXJpYWxDb2xvcnMgPSBmYWN0b3J5KCk7XG4gIH1cbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xuICByZXR1cm4ge1wicmVkXCI6e1wiNTBcIjpcIiNmZmViZWVcIixcIjEwMFwiOlwiI2ZmY2RkMlwiLFwiMjAwXCI6XCIjZWY5YTlhXCIsXCIzMDBcIjpcIiNlNTczNzNcIixcIjQwMFwiOlwiI2VmNTM1MFwiLFwiNTAwXCI6XCIjZjQ0MzM2XCIsXCI2MDBcIjpcIiNlNTM5MzVcIixcIjcwMFwiOlwiI2QzMmYyZlwiLFwiODAwXCI6XCIjYzYyODI4XCIsXCI5MDBcIjpcIiNiNzFjMWNcIixcImExMDBcIjpcIiNmZjhhODBcIixcImEyMDBcIjpcIiNmZjUyNTJcIixcImE0MDBcIjpcIiNmZjE3NDRcIixcImE3MDBcIjpcIiNkNTAwMDBcIn0sXCJwaW5rXCI6e1wiNTBcIjpcIiNmY2U0ZWNcIixcIjEwMFwiOlwiI2Y4YmJkMFwiLFwiMjAwXCI6XCIjZjQ4ZmIxXCIsXCIzMDBcIjpcIiNmMDYyOTJcIixcIjQwMFwiOlwiI2VjNDA3YVwiLFwiNTAwXCI6XCIjZTkxZTYzXCIsXCI2MDBcIjpcIiNkODFiNjBcIixcIjcwMFwiOlwiI2MyMTg1YlwiLFwiODAwXCI6XCIjYWQxNDU3XCIsXCI5MDBcIjpcIiM4ODBlNGZcIixcImExMDBcIjpcIiNmZjgwYWJcIixcImEyMDBcIjpcIiNmZjQwODFcIixcImE0MDBcIjpcIiNmNTAwNTdcIixcImE3MDBcIjpcIiNjNTExNjJcIn0sXCJwdXJwbGVcIjp7XCI1MFwiOlwiI2YzZTVmNVwiLFwiMTAwXCI6XCIjZTFiZWU3XCIsXCIyMDBcIjpcIiNjZTkzZDhcIixcIjMwMFwiOlwiI2JhNjhjOFwiLFwiNDAwXCI6XCIjYWI0N2JjXCIsXCI1MDBcIjpcIiM5YzI3YjBcIixcIjYwMFwiOlwiIzhlMjRhYVwiLFwiNzAwXCI6XCIjN2IxZmEyXCIsXCI4MDBcIjpcIiM2YTFiOWFcIixcIjkwMFwiOlwiIzRhMTQ4Y1wiLFwiYTEwMFwiOlwiI2VhODBmY1wiLFwiYTIwMFwiOlwiI2UwNDBmYlwiLFwiYTQwMFwiOlwiI2Q1MDBmOVwiLFwiYTcwMFwiOlwiI2FhMDBmZlwifSxcImRlZXBQdXJwbGVcIjp7XCI1MFwiOlwiI2VkZTdmNlwiLFwiMTAwXCI6XCIjZDFjNGU5XCIsXCIyMDBcIjpcIiNiMzlkZGJcIixcIjMwMFwiOlwiIzk1NzVjZFwiLFwiNDAwXCI6XCIjN2U1N2MyXCIsXCI1MDBcIjpcIiM2NzNhYjdcIixcIjYwMFwiOlwiIzVlMzViMVwiLFwiNzAwXCI6XCIjNTEyZGE4XCIsXCI4MDBcIjpcIiM0NTI3YTBcIixcIjkwMFwiOlwiIzMxMWI5MlwiLFwiYTEwMFwiOlwiI2IzODhmZlwiLFwiYTIwMFwiOlwiIzdjNGRmZlwiLFwiYTQwMFwiOlwiIzY1MWZmZlwiLFwiYTcwMFwiOlwiIzYyMDBlYVwifSxcImluZGlnb1wiOntcIjUwXCI6XCIjZThlYWY2XCIsXCIxMDBcIjpcIiNjNWNhZTlcIixcIjIwMFwiOlwiIzlmYThkYVwiLFwiMzAwXCI6XCIjNzk4NmNiXCIsXCI0MDBcIjpcIiM1YzZiYzBcIixcIjUwMFwiOlwiIzNmNTFiNVwiLFwiNjAwXCI6XCIjMzk0OWFiXCIsXCI3MDBcIjpcIiMzMDNmOWZcIixcIjgwMFwiOlwiIzI4MzU5M1wiLFwiOTAwXCI6XCIjMWEyMzdlXCIsXCJhMTAwXCI6XCIjOGM5ZWZmXCIsXCJhMjAwXCI6XCIjNTM2ZGZlXCIsXCJhNDAwXCI6XCIjM2Q1YWZlXCIsXCJhNzAwXCI6XCIjMzA0ZmZlXCJ9LFwiYmx1ZVwiOntcIjUwXCI6XCIjZTNmMmZkXCIsXCIxMDBcIjpcIiNiYmRlZmJcIixcIjIwMFwiOlwiIzkwY2FmOVwiLFwiMzAwXCI6XCIjNjRiNWY2XCIsXCI0MDBcIjpcIiM0MmE1ZjVcIixcIjUwMFwiOlwiIzIxOTZmM1wiLFwiNjAwXCI6XCIjMWU4OGU1XCIsXCI3MDBcIjpcIiMxOTc2ZDJcIixcIjgwMFwiOlwiIzE1NjVjMFwiLFwiOTAwXCI6XCIjMGQ0N2ExXCIsXCJhMTAwXCI6XCIjODJiMWZmXCIsXCJhMjAwXCI6XCIjNDQ4YWZmXCIsXCJhNDAwXCI6XCIjMjk3OWZmXCIsXCJhNzAwXCI6XCIjMjk2MmZmXCJ9LFwibGlnaHRCbHVlXCI6e1wiNTBcIjpcIiNlMWY1ZmVcIixcIjEwMFwiOlwiI2IzZTVmY1wiLFwiMjAwXCI6XCIjODFkNGZhXCIsXCIzMDBcIjpcIiM0ZmMzZjdcIixcIjQwMFwiOlwiIzI5YjZmNlwiLFwiNTAwXCI6XCIjMDNhOWY0XCIsXCI2MDBcIjpcIiMwMzliZTVcIixcIjcwMFwiOlwiIzAyODhkMVwiLFwiODAwXCI6XCIjMDI3N2JkXCIsXCI5MDBcIjpcIiMwMTU3OWJcIixcImExMDBcIjpcIiM4MGQ4ZmZcIixcImEyMDBcIjpcIiM0MGM0ZmZcIixcImE0MDBcIjpcIiMwMGIwZmZcIixcImE3MDBcIjpcIiMwMDkxZWFcIn0sXCJjeWFuXCI6e1wiNTBcIjpcIiNlMGY3ZmFcIixcIjEwMFwiOlwiI2IyZWJmMlwiLFwiMjAwXCI6XCIjODBkZWVhXCIsXCIzMDBcIjpcIiM0ZGQwZTFcIixcIjQwMFwiOlwiIzI2YzZkYVwiLFwiNTAwXCI6XCIjMDBiY2Q0XCIsXCI2MDBcIjpcIiMwMGFjYzFcIixcIjcwMFwiOlwiIzAwOTdhN1wiLFwiODAwXCI6XCIjMDA4MzhmXCIsXCI5MDBcIjpcIiMwMDYwNjRcIixcImExMDBcIjpcIiM4NGZmZmZcIixcImEyMDBcIjpcIiMxOGZmZmZcIixcImE0MDBcIjpcIiMwMGU1ZmZcIixcImE3MDBcIjpcIiMwMGI4ZDRcIn0sXCJ0ZWFsXCI6e1wiNTBcIjpcIiNlMGYyZjFcIixcIjEwMFwiOlwiI2IyZGZkYlwiLFwiMjAwXCI6XCIjODBjYmM0XCIsXCIzMDBcIjpcIiM0ZGI2YWNcIixcIjQwMFwiOlwiIzI2YTY5YVwiLFwiNTAwXCI6XCIjMDA5Njg4XCIsXCI2MDBcIjpcIiMwMDg5N2JcIixcIjcwMFwiOlwiIzAwNzk2YlwiLFwiODAwXCI6XCIjMDA2OTVjXCIsXCI5MDBcIjpcIiMwMDRkNDBcIixcImExMDBcIjpcIiNhN2ZmZWJcIixcImEyMDBcIjpcIiM2NGZmZGFcIixcImE0MDBcIjpcIiMxZGU5YjZcIixcImE3MDBcIjpcIiMwMGJmYTVcIn0sXCJncmVlblwiOntcIjUwXCI6XCIjZThmNWU5XCIsXCIxMDBcIjpcIiNjOGU2YzlcIixcIjIwMFwiOlwiI2E1ZDZhN1wiLFwiMzAwXCI6XCIjODFjNzg0XCIsXCI0MDBcIjpcIiM2NmJiNmFcIixcIjUwMFwiOlwiIzRjYWY1MFwiLFwiNjAwXCI6XCIjNDNhMDQ3XCIsXCI3MDBcIjpcIiMzODhlM2NcIixcIjgwMFwiOlwiIzJlN2QzMlwiLFwiOTAwXCI6XCIjMWI1ZTIwXCIsXCJhMTAwXCI6XCIjYjlmNmNhXCIsXCJhMjAwXCI6XCIjNjlmMGFlXCIsXCJhNDAwXCI6XCIjMDBlNjc2XCIsXCJhNzAwXCI6XCIjMDBjODUzXCJ9LFwibGlnaHRHcmVlblwiOntcIjUwXCI6XCIjZjFmOGU5XCIsXCIxMDBcIjpcIiNkY2VkYzhcIixcIjIwMFwiOlwiI2M1ZTFhNVwiLFwiMzAwXCI6XCIjYWVkNTgxXCIsXCI0MDBcIjpcIiM5Y2NjNjVcIixcIjUwMFwiOlwiIzhiYzM0YVwiLFwiNjAwXCI6XCIjN2NiMzQyXCIsXCI3MDBcIjpcIiM2ODlmMzhcIixcIjgwMFwiOlwiIzU1OGIyZlwiLFwiOTAwXCI6XCIjMzM2OTFlXCIsXCJhMTAwXCI6XCIjY2NmZjkwXCIsXCJhMjAwXCI6XCIjYjJmZjU5XCIsXCJhNDAwXCI6XCIjNzZmZjAzXCIsXCJhNzAwXCI6XCIjNjRkZDE3XCJ9LFwibGltZVwiOntcIjUwXCI6XCIjZjlmYmU3XCIsXCIxMDBcIjpcIiNmMGY0YzNcIixcIjIwMFwiOlwiI2U2ZWU5Y1wiLFwiMzAwXCI6XCIjZGNlNzc1XCIsXCI0MDBcIjpcIiNkNGUxNTdcIixcIjUwMFwiOlwiI2NkZGMzOVwiLFwiNjAwXCI6XCIjYzBjYTMzXCIsXCI3MDBcIjpcIiNhZmI0MmJcIixcIjgwMFwiOlwiIzllOWQyNFwiLFwiOTAwXCI6XCIjODI3NzE3XCIsXCJhMTAwXCI6XCIjZjRmZjgxXCIsXCJhMjAwXCI6XCIjZWVmZjQxXCIsXCJhNDAwXCI6XCIjYzZmZjAwXCIsXCJhNzAwXCI6XCIjYWVlYTAwXCJ9LFwieWVsbG93XCI6e1wiNTBcIjpcIiNmZmZkZTdcIixcIjEwMFwiOlwiI2ZmZjljNFwiLFwiMjAwXCI6XCIjZmZmNTlkXCIsXCIzMDBcIjpcIiNmZmYxNzZcIixcIjQwMFwiOlwiI2ZmZWU1OFwiLFwiNTAwXCI6XCIjZmZlYjNiXCIsXCI2MDBcIjpcIiNmZGQ4MzVcIixcIjcwMFwiOlwiI2ZiYzAyZFwiLFwiODAwXCI6XCIjZjlhODI1XCIsXCI5MDBcIjpcIiNmNTdmMTdcIixcImExMDBcIjpcIiNmZmZmOGRcIixcImEyMDBcIjpcIiNmZmZmMDBcIixcImE0MDBcIjpcIiNmZmVhMDBcIixcImE3MDBcIjpcIiNmZmQ2MDBcIn0sXCJhbWJlclwiOntcIjUwXCI6XCIjZmZmOGUxXCIsXCIxMDBcIjpcIiNmZmVjYjNcIixcIjIwMFwiOlwiI2ZmZTA4MlwiLFwiMzAwXCI6XCIjZmZkNTRmXCIsXCI0MDBcIjpcIiNmZmNhMjhcIixcIjUwMFwiOlwiI2ZmYzEwN1wiLFwiNjAwXCI6XCIjZmZiMzAwXCIsXCI3MDBcIjpcIiNmZmEwMDBcIixcIjgwMFwiOlwiI2ZmOGYwMFwiLFwiOTAwXCI6XCIjZmY2ZjAwXCIsXCJhMTAwXCI6XCIjZmZlNTdmXCIsXCJhMjAwXCI6XCIjZmZkNzQwXCIsXCJhNDAwXCI6XCIjZmZjNDAwXCIsXCJhNzAwXCI6XCIjZmZhYjAwXCJ9LFwib3JhbmdlXCI6e1wiNTBcIjpcIiNmZmYzZTBcIixcIjEwMFwiOlwiI2ZmZTBiMlwiLFwiMjAwXCI6XCIjZmZjYzgwXCIsXCIzMDBcIjpcIiNmZmI3NGRcIixcIjQwMFwiOlwiI2ZmYTcyNlwiLFwiNTAwXCI6XCIjZmY5ODAwXCIsXCI2MDBcIjpcIiNmYjhjMDBcIixcIjcwMFwiOlwiI2Y1N2MwMFwiLFwiODAwXCI6XCIjZWY2YzAwXCIsXCI5MDBcIjpcIiNlNjUxMDBcIixcImExMDBcIjpcIiNmZmQxODBcIixcImEyMDBcIjpcIiNmZmFiNDBcIixcImE0MDBcIjpcIiNmZjkxMDBcIixcImE3MDBcIjpcIiNmZjZkMDBcIn0sXCJkZWVwT3JhbmdlXCI6e1wiNTBcIjpcIiNmYmU5ZTdcIixcIjEwMFwiOlwiI2ZmY2NiY1wiLFwiMjAwXCI6XCIjZmZhYjkxXCIsXCIzMDBcIjpcIiNmZjhhNjVcIixcIjQwMFwiOlwiI2ZmNzA0M1wiLFwiNTAwXCI6XCIjZmY1NzIyXCIsXCI2MDBcIjpcIiNmNDUxMWVcIixcIjcwMFwiOlwiI2U2NGExOVwiLFwiODAwXCI6XCIjZDg0MzE1XCIsXCI5MDBcIjpcIiNiZjM2MGNcIixcImExMDBcIjpcIiNmZjllODBcIixcImEyMDBcIjpcIiNmZjZlNDBcIixcImE0MDBcIjpcIiNmZjNkMDBcIixcImE3MDBcIjpcIiNkZDJjMDBcIn0sXCJicm93blwiOntcIjUwXCI6XCIjZWZlYmU5XCIsXCIxMDBcIjpcIiNkN2NjYzhcIixcIjIwMFwiOlwiI2JjYWFhNFwiLFwiMzAwXCI6XCIjYTE4ODdmXCIsXCI0MDBcIjpcIiM4ZDZlNjNcIixcIjUwMFwiOlwiIzc5NTU0OFwiLFwiNjAwXCI6XCIjNmQ0YzQxXCIsXCI3MDBcIjpcIiM1ZDQwMzdcIixcIjgwMFwiOlwiIzRlMzQyZVwiLFwiOTAwXCI6XCIjM2UyNzIzXCJ9LFwiZ3JleVwiOntcIjUwXCI6XCIjZmFmYWZhXCIsXCIxMDBcIjpcIiNmNWY1ZjVcIixcIjIwMFwiOlwiI2VlZWVlZVwiLFwiMzAwXCI6XCIjZTBlMGUwXCIsXCI0MDBcIjpcIiNiZGJkYmRcIixcIjUwMFwiOlwiIzllOWU5ZVwiLFwiNjAwXCI6XCIjNzU3NTc1XCIsXCI3MDBcIjpcIiM2MTYxNjFcIixcIjgwMFwiOlwiIzQyNDI0MlwiLFwiOTAwXCI6XCIjMjEyMTIxXCJ9LFwiYmx1ZUdyZXlcIjp7XCI1MFwiOlwiI2VjZWZmMVwiLFwiMTAwXCI6XCIjY2ZkOGRjXCIsXCIyMDBcIjpcIiNiMGJlYzVcIixcIjMwMFwiOlwiIzkwYTRhZVwiLFwiNDAwXCI6XCIjNzg5MDljXCIsXCI1MDBcIjpcIiM2MDdkOGJcIixcIjYwMFwiOlwiIzU0NmU3YVwiLFwiNzAwXCI6XCIjNDU1YTY0XCIsXCI4MDBcIjpcIiMzNzQ3NGZcIixcIjkwMFwiOlwiIzI2MzIzOFwifSxcImRhcmtUZXh0XCI6e1wicHJpbWFyeVwiOlwicmdiYSgwLCAwLCAwLCAwLjg3KVwiLFwic2Vjb25kYXJ5XCI6XCJyZ2JhKDAsIDAsIDAsIDAuNTQpXCIsXCJkaXNhYmxlZFwiOlwicmdiYSgwLCAwLCAwLCAwLjM4KVwiLFwiZGl2aWRlcnNcIjpcInJnYmEoMCwgMCwgMCwgMC4xMilcIn0sXCJsaWdodFRleHRcIjp7XCJwcmltYXJ5XCI6XCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpXCIsXCJzZWNvbmRhcnlcIjpcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KVwiLFwiZGlzYWJsZWRcIjpcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KVwiLFwiZGl2aWRlcnNcIjpcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMilcIn0sXCJkYXJrSWNvbnNcIjp7XCJhY3RpdmVcIjpcInJnYmEoMCwgMCwgMCwgMC41NClcIixcImluYWN0aXZlXCI6XCJyZ2JhKDAsIDAsIDAsIDAuMzgpXCJ9LFwibGlnaHRJY29uc1wiOntcImFjdGl2ZVwiOlwicmdiYSgyNTUsIDI1NSwgMjU1LCAxKVwiLFwiaW5hY3RpdmVcIjpcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KVwifSxcIndoaXRlXCI6XCIjZmZmZmZmXCIsXCJibGFja1wiOlwiIzAwMDAwMFwifTtcbn0pO1xuIiwiaW1wb3J0IHsgQXJyYXlPcHMgfSBmcm9tICcuLi9saWZ0Jztcbi8qKlxuICogQ29udmVydHMgYW4gQXJyYXktbGlrZSBvYmplY3QgKHN1Y2ggYXMgYW4gYXJndW1lbnRzIG9yIE5vZGVMaXN0IGluc3RhbmNlKSB0byBhIHJlZ3VsYXIgQXJyYXlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21BcnJheUxpa2UoYXJyYXlMaWtlKSB7XG4gICAgcmV0dXJuIG5ldyBBcnJheU9wcyhbXS5zbGljZS5jYWxsKGFycmF5TGlrZSkpO1xufVxuIiwiaW1wb3J0IHsgQXJyYXlPcHMgfSBmcm9tICcuLi9saWZ0Jztcbi8qXG4qIFJldHVybnMgYSBudW1iZXJbXSB3cmFwcGVyIHdpdGggYWxsIG51bWJlcnMgZnJvbSBzdGFydCB0byBzdG9wIChpbmNsdXNpdmUpLFxuKiBpbmNyZW1lbnRlZCBvciBkZWNyZW1lbnRlZCBieSBzdGVwLlxuKi9cbmV4cG9ydCBmdW5jdGlvbiByYW5nZShzdGFydCwgc3RvcCwgc3RlcCkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHN0b3AgPSBhcmd1bWVudHNbMF0gLSAxO1xuICAgICAgICBzdGFydCA9IDA7XG4gICAgfVxuICAgIHN0ZXAgPSBzdGVwIHx8IDE7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBpbmNyZWFzaW5nID0gc3RlcCA+IDA7XG4gICAgdmFyIG5leHQgPSBzdGFydDtcbiAgICB3aGlsZSAoKGluY3JlYXNpbmcgJiYgbmV4dCA8PSBzdG9wKSB8fCAoIWluY3JlYXNpbmcgJiYgbmV4dCA+PSBzdG9wKSkge1xuICAgICAgICByZXN1bHQucHVzaChuZXh0KTtcbiAgICAgICAgbmV4dCA9IG5leHQgKyBzdGVwO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IEFycmF5T3BzKHJlc3VsdCk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gdHVwbGUoYXJyKSB7XG4gICAgcmV0dXJuIGFycjtcbn1cbiIsImltcG9ydCB7IG9iamVjdCBhcyBpc09iamVjdCB9IGZyb20gJy4uL29iamVjdC9pcyc7XG52YXIgY3VycmVudE1lbW9JZCA9IDA7XG4vKipcbiAqIE1lbW9pemVzIGEgZnVuY3Rpb24gb2YgYXJiaXRyYXJ5IGFyaXR5LlxuICogVGhpcyBoYXMgdHdvIG1haW4gdXNlczpcbiAqICAgMSkgUmVkdWNpbmcgdGhlIENQVSB0aW1lIHRha2VuIGJ5IGV4cGVuc2l2ZSBjYWxjdWxhdGlvbnMgYXQgdGhlIGNvc3Qgb2Ygc29tZSBtZW1vcnkgb3ZlcmhlYWRcbiAqICAgMikgUHJvZHVjaW5nIHN0YWJsZSByZWZlcmVuY2VzIGZvciBhIGdpdmVuIHNldCBvZiBhcmd1bWVudHMuIFVzZWZ1bCB3aGVuIHJlbHlpbmcgb24gcmVmZXJlbmNlIGVxdWFsaXR5LlxuICpcbiAqIE1lbW9pemVkIGZ1bmN0aW9ucyBrZWVwIGludGVybmFsIHN0YXRlLiBJZiB5b3Ugd2lzaCB0byBjbGVhciB0aGF0IHN0YXRlIGVudGlyZWx5LCB5b3UgY2FuIHJlY3JlYXRlIHRoZSBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lbW9pemUoZnVuLCBvcHRpb25zKSB7XG4gICAgLy8gVGhlIHVuaXF1ZSBwcm9wZXJ0eSBuYW1lIHVzZWQgYnkgdGhpcyBtZW1vaXplIGZ1bmN0aW9uIGluc3RhbmNlLlxuICAgIC8vIFRoaXMgaXMgdXNlZCB0byBzdG9yZSB0aGUgaWQvcmVmZXJlbmNlIG9mIG9iamVjdCBhcmd1bWVudHMsIGFzIFdlYWsgbWFwcy9zZXRzIGFyZSB2ZXJ5IGxpbWl0ZWQuXG4gICAgdmFyIG1lbW9LZXkgPSBcIl9fbWVtb19fXCIgKyBjdXJyZW50TWVtb0lkKys7XG4gICAgdmFyIGxhc3RBcmdLZXlzID0gW107XG4gICAgdmFyIGNhY2hlU2l6ZSA9IChvcHRpb25zICYmIG9wdGlvbnMuY2FjaGVTaXplKSB8fCAzMDtcbiAgICB2YXIga2V5RnVuY3Rpb24gPSBvcHRpb25zICYmIG9wdGlvbnMua2V5O1xuICAgIC8vIFRoZSB1bmlxdWUgaWRzL3JlZmVyZW5jZXMgb2Ygb2JqZWN0cyBpbnNpZGUgdGhlIGFyaXR5TkNhY2hlIGNhY2hlXG4gICAgdmFyIG9iaklkID0gMDtcbiAgICB2YXIgYXJpdHkwQ2FjaGU7XG4gICAgdmFyIGFyaXR5TkNhY2hlO1xuICAgIHZhciBrZXlDYWNoZTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIC8vIDAgYXJndW1lbnRzIGVkZ2UtY2FzZVxuICAgICAgICBpZiAoYXJncy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGlmICghYXJpdHkwQ2FjaGUpXG4gICAgICAgICAgICAgICAgYXJpdHkwQ2FjaGUgPSBmdW4oKTtcbiAgICAgICAgICAgIHJldHVybiBhcml0eTBDYWNoZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjdXN0b20ga2V5IGZ1bmN0aW9uXG4gICAgICAgIGVsc2UgaWYgKGtleUZ1bmN0aW9uKSB7XG4gICAgICAgICAgICBrZXlDYWNoZSA9IGtleUNhY2hlIHx8IHt9O1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleUZ1bmN0aW9uLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGtleUNhY2hlW2tleV07XG4gICAgICAgICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGxhc3RBcmdLZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICBsaW1pdENhY2hlU2l6ZShrZXlDYWNoZSwgbGFzdEFyZ0tleXMsIGNhY2hlU2l6ZSk7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0ga2V5Q2FjaGVba2V5XSA9IGZ1bi5hcHBseShudWxsLCBhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTiBhcmd1bWVudHNcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhcml0eU5DYWNoZSA9IGFyaXR5TkNhY2hlIHx8IHt9O1xuICAgICAgICAgICAgdmFyIGtleSA9ICcnO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFyZyA9IGFyZ3NbaV07XG4gICAgICAgICAgICAgICAgdmFyIGFyZ0tleSA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICBpZiAoaXNPYmplY3QoYXJnKSkge1xuICAgICAgICAgICAgICAgICAgICBhcmdLZXkgPSBhcmdbbWVtb0tleV07XG4gICAgICAgICAgICAgICAgICAgIGlmICghYXJnS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBOb24gZW51bWVyYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGFyZywgbWVtb0tleSwgeyB2YWx1ZTogXCJvYmpcIiArIG9iaklkKysgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmdLZXkgPSBhcmdbbWVtb0tleV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ0tleSA9IGFyZztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAga2V5ICs9IChhcmdLZXkgKyAnXycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGFyaXR5TkNhY2hlW2tleV07XG4gICAgICAgICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGxhc3RBcmdLZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICBsaW1pdENhY2hlU2l6ZShhcml0eU5DYWNoZSwgbGFzdEFyZ0tleXMsIGNhY2hlU2l6ZSk7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gYXJpdHlOQ2FjaGVba2V5XSA9IGZ1bi5hcHBseShudWxsLCBhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICB9O1xufVxuZnVuY3Rpb24gbGltaXRDYWNoZVNpemUoY2FjaGUsIGxhc3RBcmdLZXlzLCBzaXplKSB7XG4gICAgaWYgKGxhc3RBcmdLZXlzLmxlbmd0aCA9PT0gc2l6ZSArIDEpIHtcbiAgICAgICAgdmFyIGtleSA9IGxhc3RBcmdLZXlzLnNoaWZ0KCk7XG4gICAgICAgIGRlbGV0ZSBjYWNoZVtrZXldO1xuICAgIH1cbn1cbiIsImltcG9ydCBsaWZ0IGZyb20gJy4vbGlmdCc7XG5leHBvcnQgZGVmYXVsdCBsaWZ0O1xuZXhwb3J0IHsgQXJyYXlPcHMsIE9iamVjdE9wcywgTnVtYmVyT3BzLCBTdHJpbmdPcHMsIERhdGVPcHMsIGdldFZhbHVlIH0gZnJvbSAnLi9saWZ0JztcbmV4cG9ydCB7IHVwZGF0ZSwgZGVlcFVwZGF0ZSwgREVMRVRFIH0gZnJvbSAnaW1tdXBkYXRlJztcbmV4cG9ydCB7IE9wdGlvbiwgTm9uZSwgU29tZSB9IGZyb20gJy4vb3B0aW9uJztcbmV4cG9ydCB7IFJlc3VsdCwgT2ssIEVyciB9IGZyb20gJy4vcmVzdWx0JztcbmV4cG9ydCB7IHJhbmdlIH0gZnJvbSAnLi9hcnJheS9yYW5nZSc7XG5leHBvcnQgeyBmcm9tQXJyYXlMaWtlIH0gZnJvbSAnLi9hcnJheS9mcm9tQXJyYXlMaWtlJztcbmV4cG9ydCB7IHR1cGxlIH0gZnJvbSAnLi9hcnJheS90dXBsZSc7XG5leHBvcnQgeyBTZXQgfSBmcm9tICcuL29iamVjdC9zZXQnO1xuZXhwb3J0IHsgbWVtb2l6ZSB9IGZyb20gJy4vZnVuY3Rpb24vbWVtb2l6ZSc7XG5pbXBvcnQgKiBhcyBpc1R5cGUgZnJvbSAnLi9vYmplY3QvaXMnO1xuZXhwb3J0IHZhciBpcyA9IGlzVHlwZTtcbiIsInZhciBsaWZ0ID0gZnVuY3Rpb24gKG9iaikge1xuICAgIGlmIChvYmogaW5zdGFuY2VvZiBBcnJheSlcbiAgICAgICAgcmV0dXJuIG5ldyBBcnJheU9wcyhvYmopO1xuICAgIGlmIChvYmogaW5zdGFuY2VvZiBEYXRlKVxuICAgICAgICByZXR1cm4gbmV3IERhdGVPcHMob2JqKTtcbiAgICBpZiAodHlwZW9mIG9iaiA9PT0gJ3N0cmluZycpXG4gICAgICAgIHJldHVybiBuZXcgU3RyaW5nT3BzKG9iaik7XG4gICAgaWYgKHR5cGVvZiBvYmogPT09ICdudW1iZXInKVxuICAgICAgICByZXR1cm4gbmV3IE51bWJlck9wcyhvYmopO1xuICAgIHJldHVybiBuZXcgT2JqZWN0T3BzKG9iaik7XG59O1xuZXhwb3J0IGRlZmF1bHQgbGlmdDtcbmV4cG9ydCBmdW5jdGlvbiBnZXRWYWx1ZShpbnB1dCkge1xuICAgIHJldHVybiBpbnB1dCAmJiBpbnB1dFsnX2lzTGlmdFdyYXBwZXInXVxuICAgICAgICA/IGlucHV0LnZhbHVlKClcbiAgICAgICAgOiBpbnB1dDtcbn1cbmZ1bmN0aW9uIG1ha2VPcHMoKSB7XG4gICAgdmFyIE9wcyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gT3BzKF92YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSBfdmFsdWU7XG4gICAgICAgICAgICB0aGlzLl9pc0xpZnRXcmFwcGVyID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBPcHMucHJvdG90eXBlLnZhbHVlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fdmFsdWU7IH07XG4gICAgICAgIHJldHVybiBPcHM7XG4gICAgfSgpKTtcbiAgICByZXR1cm4gT3BzO1xufVxuZXhwb3J0IHZhciBBcnJheU9wcyA9IG1ha2VPcHMoKTtcbmV4cG9ydCB2YXIgT2JqZWN0T3BzID0gbWFrZU9wcygpO1xuZXhwb3J0IHZhciBOdW1iZXJPcHMgPSBtYWtlT3BzKCk7XG5leHBvcnQgdmFyIFN0cmluZ09wcyA9IG1ha2VPcHMoKTtcbmV4cG9ydCB2YXIgRGF0ZU9wcyA9IG1ha2VPcHMoKTtcbiIsIi8qKiBSZXR1cm5zIHdoZXRoZXIgYW4gb2JqZWN0IGlzIGFuIEFycmF5ICovXG5leHBvcnQgdmFyIGFycmF5ID0gQXJyYXkuaXNBcnJheTtcbi8qKiBSZXR1cm5zIHdoZXRoZXIgdGhpcyBvYmplY3QgaXMgYSBmdW5jdGlvbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZ1bmMob2JqKSB7XG4gICAgcmV0dXJuICh0eXBlb2Ygb2JqID09PSAnZnVuY3Rpb24nKTtcbn1cbi8qKiBSZXR1cm5zIHdoZXRoZXIgdGhpcyBvYmplY3QgaXMgYSBzdHJpbmcgKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmcob2JqKSB7XG4gICAgcmV0dXJuICh0eXBlb2Ygb2JqID09PSAnc3RyaW5nJyk7XG59XG4vKiogUmV0dXJucyB3aGV0aGVyIHRoaXMgb2JqZWN0IGlzIGEgbnVtYmVyICovXG5leHBvcnQgZnVuY3Rpb24gbnVtYmVyKG9iaikge1xuICAgIHJldHVybiAodHlwZW9mIG9iaiA9PT0gJ251bWJlcicpO1xufVxuLyoqIFJldHVybnMgd2hldGhlciB0aGlzIG9iamVjdCBpcyBhIGJvb2xlYW4gKi9cbmV4cG9ydCBmdW5jdGlvbiBib29sZWFuKG9iaikge1xuICAgIHJldHVybiAodHlwZW9mIG9iaiA9PT0gJ2Jvb2xlYW4nKTtcbn1cbi8qKiBSZXR1cm5zIHdoZXRoZXIgdGhpcyB2YWx1ZSBpcyBhbiBvYmplY3QgKGUuZyBub3QgYSBwcmltaXRpdmU6IGRhdGVzLCBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpKSAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9iamVjdChvYmopIHtcbiAgICB2YXIgdHlwZSA9IHR5cGVvZiBvYmo7XG4gICAgcmV0dXJuICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG4iLCJpbXBvcnQgeyBPYmplY3RPcHMgfSBmcm9tICcuLi9saWZ0Jztcbi8qKlxuICogQ3JlYXRlcyBhIFNldC1saWtlIG9iamVjdCAoc3RyaW5nIGtleXMsIHRydWUgdmFsdWVzKSBmcm9tIGEgbGlzdCBvZiBrZXlzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBTZXQoKSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBrZXlzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gcmVzdWx0W2tleV0gPSB0cnVlOyB9KTtcbiAgICByZXR1cm4gbmV3IE9iamVjdE9wcyhyZXN1bHQpO1xufVxuIiwiaW1wb3J0IGxpZnQsIHsgZ2V0VmFsdWUgfSBmcm9tICcuLi9saWZ0Jztcbi8vIFRoZSBPcHRpb24gZmFjdG9yeSAvIHN0YXRpYyBvYmplY3RcbnZhciBPcHRpb25PYmplY3QgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gaXNEZWYodmFsdWUpID8gU29tZSh2YWx1ZSkgOiBOb25lO1xufTtcbk9wdGlvbk9iamVjdC5hbGwgPSBmdW5jdGlvbiAoYXJyKSB7XG4gICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IGFycltpXTtcbiAgICAgICAgaWYgKE9wdGlvbi5pc09wdGlvbih2YWx1ZSkpXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLmdldCgpO1xuICAgICAgICBpZiAoIWlzRGVmKHZhbHVlKSlcbiAgICAgICAgICAgIHJldHVybiBOb25lO1xuICAgICAgICB2YWx1ZXMucHVzaCh2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBTb21lKHZhbHVlcyk7XG59O1xuT3B0aW9uT2JqZWN0LmlzT3B0aW9uID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuICEhdmFsdWUgJiYgKHZhbHVlLnR5cGUgPT09ICdzb21lJyB8fCB2YWx1ZS50eXBlID09PSAnbm9uZScpO1xufTtcbmZ1bmN0aW9uIG1ha2VOb25lKCkge1xuICAgIHZhciBzZWxmID0ge307XG4gICAgZnVuY3Rpb24gcmV0dXJuTm9uZSgpIHsgcmV0dXJuIE5vbmU7IH1cbiAgICBzZWxmLnR5cGUgPSAnbm9uZSc7XG4gICAgc2VsZi5nZXQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH07XG4gICAgc2VsZi5pc0RlZmluZWQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfTtcbiAgICBzZWxmLmZvckVhY2ggPSBmdW5jdGlvbiAoKSB7IH07XG4gICAgc2VsZi5tYXAgPSByZXR1cm5Ob25lO1xuICAgIHNlbGYuZmxhdE1hcCA9IHJldHVybk5vbmU7XG4gICAgc2VsZi5maWx0ZXIgPSByZXR1cm5Ob25lO1xuICAgIHNlbGYuZm9sZCA9IGZ1bmN0aW9uIChpZkVtcHR5KSB7IHJldHVybiBpZkVtcHR5KCk7IH07XG4gICAgc2VsZi5vckVsc2UgPSBmdW5jdGlvbiAoYWx0KSB7IHJldHVybiBhbHQoKTsgfTtcbiAgICBzZWxmLmdldE9yRWxzZSA9IGZ1bmN0aW9uIChhbHQpIHsgcmV0dXJuIGFsdDsgfTtcbiAgICBzZWxmLnRvQXJyYXkgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBsaWZ0KFtdKTsgfTtcbiAgICBzZWxmLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJ05vbmUnOyB9O1xuICAgIHNlbGYudG9KU09OID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gbnVsbDsgfTtcbiAgICByZXR1cm4gc2VsZjtcbn1cbmZ1bmN0aW9uIF9Tb21lKHZhbHVlKSB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xufVxuX1NvbWUucHJvdG90eXBlID0ge1xuICAgIHR5cGU6ICdzb21lJyxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgfSxcbiAgICBpc0RlZmluZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgICBmb3JFYWNoOiBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgZm4odGhpcy52YWx1ZSk7XG4gICAgfSxcbiAgICBtYXA6IGZ1bmN0aW9uIChmbikge1xuICAgICAgICByZXR1cm4gT3B0aW9uKGdldFZhbHVlKGZuKHRoaXMudmFsdWUpKSk7XG4gICAgfSxcbiAgICBmbGF0TWFwOiBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgcmV0dXJuIGZuKHRoaXMudmFsdWUpO1xuICAgIH0sXG4gICAgZmlsdGVyOiBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgcmV0dXJuIGZuKHRoaXMudmFsdWUpID8gdGhpcyA6IE5vbmU7XG4gICAgfSxcbiAgICBmb2xkOiBmdW5jdGlvbiAoaWZFbXB0eSwgaWZEZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBpZkRlZmluZWQodGhpcy52YWx1ZSk7XG4gICAgfSxcbiAgICBvckVsc2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBnZXRPckVsc2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgfSxcbiAgICB0b0FycmF5OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBsaWZ0KFt0aGlzLnZhbHVlXSk7XG4gICAgfSxcbiAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gXCJTb21lKFwiICsgdGhpcy52YWx1ZSArIFwiKVwiO1xuICAgIH0sXG4gICAgdG9KU09OOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICAgIH1cbn07XG5mdW5jdGlvbiBpc0RlZih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkO1xufVxuZXhwb3J0IHZhciBPcHRpb24gPSBPcHRpb25PYmplY3Q7XG4vKiogQ3JlYXRlcyBhIG5ldyBTb21lIGluc3RhbmNlIHVzaW5nIGEgbm9uIG51bGxhYmxlIHZhbHVlICovXG4vLyBleHRlbmRzIHt9IHRvIHByZXZlbnQgbnVsbCBhbmQgdW5kZWZpbmVkIGJlaW5nIHBhc3NlZFxuZXhwb3J0IGZ1bmN0aW9uIFNvbWUodmFsdWUpIHtcbiAgICByZXR1cm4gbmV3IF9Tb21lKHZhbHVlKTtcbn1cbmV4cG9ydCB2YXIgTm9uZSA9IG1ha2VOb25lKCk7XG4iLCJpbXBvcnQgeyBnZXRWYWx1ZSB9IGZyb20gJy4uL2xpZnQnO1xudmFyIFJlc3VsdE9iamVjdCA9IHt9O1xuUmVzdWx0T2JqZWN0LmFsbCA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgICB2YXIgb2tWYWx1ZXMgPSBbXTtcbiAgICB2YXIgY3VycmVudFJlc3VsdDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY3VycmVudFJlc3VsdF8xID0gYXJyW2ldO1xuICAgICAgICBpZiAoIWN1cnJlbnRSZXN1bHRfMS5pc09rKCkpXG4gICAgICAgICAgICByZXR1cm4gY3VycmVudFJlc3VsdF8xO1xuICAgICAgICBva1ZhbHVlcy5wdXNoKGN1cnJlbnRSZXN1bHRfMS5nZXQoKSk7XG4gICAgfVxuICAgIHJldHVybiBPayhva1ZhbHVlcyk7XG59O1xuUmVzdWx0T2JqZWN0LmlzUmVzdWx0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuICEhdmFsdWUgJiYgKHZhbHVlLnR5cGUgPT09ICdvaycgfHwgdmFsdWUudHlwZSA9PT0gJ2VycicpO1xufTtcbmZ1bmN0aW9uIF9Payh2YWx1ZSkge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG59XG5fT2sucHJvdG90eXBlID0ge1xuICAgIHR5cGU6ICdvaycsXG4gICAgaXNPazogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgIG1hcDogZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgIHJldHVybiBPayhnZXRWYWx1ZShmbih0aGlzLl92YWx1ZSkpKTtcbiAgICB9LFxuICAgIG1hcEVycm9yOiBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBmbGF0TWFwOiBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgcmV0dXJuIGZuKHRoaXMuX3ZhbHVlKTtcbiAgICB9LFxuICAgIGZvbGQ6IGZ1bmN0aW9uIChpZkVyciwgaWZPaykge1xuICAgICAgICByZXR1cm4gaWZPayh0aGlzLl92YWx1ZSk7XG4gICAgfSxcbiAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gXCJPayhcIiArIHRoaXMuX3ZhbHVlICsgXCIpXCI7XG4gICAgfSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgIH1cbn07XG5mdW5jdGlvbiBfRXJyKGVycm9yKSB7XG4gICAgdGhpcy5fZXJyb3IgPSBlcnJvcjtcbn1cbl9FcnIucHJvdG90eXBlID0ge1xuICAgIHR5cGU6ICdlcnInLFxuICAgIGlzT2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG4gICAgbWFwOiBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBtYXBFcnJvcjogZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgIHJldHVybiBFcnIoZm4odGhpcy5fZXJyb3IpKTtcbiAgICB9LFxuICAgIGZsYXRNYXA6IGZ1bmN0aW9uIChmbikge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIGZvbGQ6IGZ1bmN0aW9uIChpZkVyciwgaWZPaykge1xuICAgICAgICByZXR1cm4gaWZFcnIodGhpcy5fZXJyb3IpO1xuICAgIH0sXG4gICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFwiRXJyKFwiICsgdGhpcy5fZXJyb3IgKyBcIilcIjtcbiAgICB9LFxuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZXJyb3I7XG4gICAgfVxufTtcbmV4cG9ydCB2YXIgUmVzdWx0ID0gUmVzdWx0T2JqZWN0O1xuZXhwb3J0IGZ1bmN0aW9uIE9rKHZhbHVlKSB7XG4gICAgcmV0dXJuIG5ldyBfT2sodmFsdWUpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIEVycihlcnJvcikge1xuICAgIHJldHVybiBuZXcgX0VycihlcnJvcik7XG59XG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvICsgXCIgXCIgKyBvcHRpb25zLmluc2VydEF0LmJlZm9yZSk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsIGV2YWwpKFwidGhpc1wiKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdGlmICghbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsIi8qIVxuICogRXZlbnRFbWl0dGVyIHY1LjIuNSAtIGdpdC5pby9lZVxuICogVW5saWNlbnNlIC0gaHR0cDovL3VubGljZW5zZS5vcmcvXG4gKiBPbGl2ZXIgQ2FsZHdlbGwgLSBodHRwOi8vb2xpLm1lLnVrL1xuICogQHByZXNlcnZlXG4gKi9cblxuOyhmdW5jdGlvbiAoZXhwb3J0cykge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIC8qKlxuICAgICAqIENsYXNzIGZvciBtYW5hZ2luZyBldmVudHMuXG4gICAgICogQ2FuIGJlIGV4dGVuZGVkIHRvIHByb3ZpZGUgZXZlbnQgZnVuY3Rpb25hbGl0eSBpbiBvdGhlciBjbGFzc2VzLlxuICAgICAqXG4gICAgICogQGNsYXNzIEV2ZW50RW1pdHRlciBNYW5hZ2VzIGV2ZW50IHJlZ2lzdGVyaW5nIGFuZCBlbWl0dGluZy5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7fVxuXG4gICAgLy8gU2hvcnRjdXRzIHRvIGltcHJvdmUgc3BlZWQgYW5kIHNpemVcbiAgICB2YXIgcHJvdG8gPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlO1xuICAgIHZhciBvcmlnaW5hbEdsb2JhbFZhbHVlID0gZXhwb3J0cy5FdmVudEVtaXR0ZXI7XG5cbiAgICAvKipcbiAgICAgKiBGaW5kcyB0aGUgaW5kZXggb2YgdGhlIGxpc3RlbmVyIGZvciB0aGUgZXZlbnQgaW4gaXRzIHN0b3JhZ2UgYXJyYXkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9uW119IGxpc3RlbmVycyBBcnJheSBvZiBsaXN0ZW5lcnMgdG8gc2VhcmNoIHRocm91Z2guXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgTWV0aG9kIHRvIGxvb2sgZm9yLlxuICAgICAqIEByZXR1cm4ge051bWJlcn0gSW5kZXggb2YgdGhlIHNwZWNpZmllZCBsaXN0ZW5lciwgLTEgaWYgbm90IGZvdW5kXG4gICAgICogQGFwaSBwcml2YXRlXG4gICAgICovXG4gICAgZnVuY3Rpb24gaW5kZXhPZkxpc3RlbmVyKGxpc3RlbmVycywgbGlzdGVuZXIpIHtcbiAgICAgICAgdmFyIGkgPSBsaXN0ZW5lcnMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgICAgICBpZiAobGlzdGVuZXJzW2ldLmxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFsaWFzIGEgbWV0aG9kIHdoaWxlIGtlZXBpbmcgdGhlIGNvbnRleHQgY29ycmVjdCwgdG8gYWxsb3cgZm9yIG92ZXJ3cml0aW5nIG9mIHRhcmdldCBtZXRob2QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgdGFyZ2V0IG1ldGhvZC5cbiAgICAgKiBAcmV0dXJuIHtGdW5jdGlvbn0gVGhlIGFsaWFzZWQgbWV0aG9kXG4gICAgICogQGFwaSBwcml2YXRlXG4gICAgICovXG4gICAgZnVuY3Rpb24gYWxpYXMobmFtZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gYWxpYXNDbG9zdXJlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXNbbmFtZV0uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBsaXN0ZW5lciBhcnJheSBmb3IgdGhlIHNwZWNpZmllZCBldmVudC5cbiAgICAgKiBXaWxsIGluaXRpYWxpc2UgdGhlIGV2ZW50IG9iamVjdCBhbmQgbGlzdGVuZXIgYXJyYXlzIGlmIHJlcXVpcmVkLlxuICAgICAqIFdpbGwgcmV0dXJuIGFuIG9iamVjdCBpZiB5b3UgdXNlIGEgcmVnZXggc2VhcmNoLiBUaGUgb2JqZWN0IGNvbnRhaW5zIGtleXMgZm9yIGVhY2ggbWF0Y2hlZCBldmVudC4gU28gL2JhW3J6XS8gbWlnaHQgcmV0dXJuIGFuIG9iamVjdCBjb250YWluaW5nIGJhciBhbmQgYmF6LiBCdXQgb25seSBpZiB5b3UgaGF2ZSBlaXRoZXIgZGVmaW5lZCB0aGVtIHdpdGggZGVmaW5lRXZlbnQgb3IgYWRkZWQgc29tZSBsaXN0ZW5lcnMgdG8gdGhlbS5cbiAgICAgKiBFYWNoIHByb3BlcnR5IGluIHRoZSBvYmplY3QgcmVzcG9uc2UgaXMgYW4gYXJyYXkgb2YgbGlzdGVuZXIgZnVuY3Rpb25zLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd8UmVnRXhwfSBldnQgTmFtZSBvZiB0aGUgZXZlbnQgdG8gcmV0dXJuIHRoZSBsaXN0ZW5lcnMgZnJvbS5cbiAgICAgKiBAcmV0dXJuIHtGdW5jdGlvbltdfE9iamVjdH0gQWxsIGxpc3RlbmVyIGZ1bmN0aW9ucyBmb3IgdGhlIGV2ZW50LlxuICAgICAqL1xuICAgIHByb3RvLmdldExpc3RlbmVycyA9IGZ1bmN0aW9uIGdldExpc3RlbmVycyhldnQpIHtcbiAgICAgICAgdmFyIGV2ZW50cyA9IHRoaXMuX2dldEV2ZW50cygpO1xuICAgICAgICB2YXIgcmVzcG9uc2U7XG4gICAgICAgIHZhciBrZXk7XG5cbiAgICAgICAgLy8gUmV0dXJuIGEgY29uY2F0ZW5hdGVkIGFycmF5IG9mIGFsbCBtYXRjaGluZyBldmVudHMgaWZcbiAgICAgICAgLy8gdGhlIHNlbGVjdG9yIGlzIGEgcmVndWxhciBleHByZXNzaW9uLlxuICAgICAgICBpZiAoZXZ0IGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAgICAgICByZXNwb25zZSA9IHt9O1xuICAgICAgICAgICAgZm9yIChrZXkgaW4gZXZlbnRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50cy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIGV2dC50ZXN0KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2Vba2V5XSA9IGV2ZW50c1trZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gZXZlbnRzW2V2dF0gfHwgKGV2ZW50c1tldnRdID0gW10pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUYWtlcyBhIGxpc3Qgb2YgbGlzdGVuZXIgb2JqZWN0cyBhbmQgZmxhdHRlbnMgaXQgaW50byBhIGxpc3Qgb2YgbGlzdGVuZXIgZnVuY3Rpb25zLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3RbXX0gbGlzdGVuZXJzIFJhdyBsaXN0ZW5lciBvYmplY3RzLlxuICAgICAqIEByZXR1cm4ge0Z1bmN0aW9uW119IEp1c3QgdGhlIGxpc3RlbmVyIGZ1bmN0aW9ucy5cbiAgICAgKi9cbiAgICBwcm90by5mbGF0dGVuTGlzdGVuZXJzID0gZnVuY3Rpb24gZmxhdHRlbkxpc3RlbmVycyhsaXN0ZW5lcnMpIHtcbiAgICAgICAgdmFyIGZsYXRMaXN0ZW5lcnMgPSBbXTtcbiAgICAgICAgdmFyIGk7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgZmxhdExpc3RlbmVycy5wdXNoKGxpc3RlbmVyc1tpXS5saXN0ZW5lcik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmxhdExpc3RlbmVycztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRmV0Y2hlcyB0aGUgcmVxdWVzdGVkIGxpc3RlbmVycyB2aWEgZ2V0TGlzdGVuZXJzIGJ1dCB3aWxsIGFsd2F5cyByZXR1cm4gdGhlIHJlc3VsdHMgaW5zaWRlIGFuIG9iamVjdC4gVGhpcyBpcyBtYWlubHkgZm9yIGludGVybmFsIHVzZSBidXQgb3RoZXJzIG1heSBmaW5kIGl0IHVzZWZ1bC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfFJlZ0V4cH0gZXZ0IE5hbWUgb2YgdGhlIGV2ZW50IHRvIHJldHVybiB0aGUgbGlzdGVuZXJzIGZyb20uXG4gICAgICogQHJldHVybiB7T2JqZWN0fSBBbGwgbGlzdGVuZXIgZnVuY3Rpb25zIGZvciBhbiBldmVudCBpbiBhbiBvYmplY3QuXG4gICAgICovXG4gICAgcHJvdG8uZ2V0TGlzdGVuZXJzQXNPYmplY3QgPSBmdW5jdGlvbiBnZXRMaXN0ZW5lcnNBc09iamVjdChldnQpIHtcbiAgICAgICAgdmFyIGxpc3RlbmVycyA9IHRoaXMuZ2V0TGlzdGVuZXJzKGV2dCk7XG4gICAgICAgIHZhciByZXNwb25zZTtcblxuICAgICAgICBpZiAobGlzdGVuZXJzIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIHJlc3BvbnNlID0ge307XG4gICAgICAgICAgICByZXNwb25zZVtldnRdID0gbGlzdGVuZXJzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlIHx8IGxpc3RlbmVycztcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gaXNWYWxpZExpc3RlbmVyIChsaXN0ZW5lcikge1xuICAgICAgICBpZiAodHlwZW9mIGxpc3RlbmVyID09PSAnZnVuY3Rpb24nIHx8IGxpc3RlbmVyIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9IGVsc2UgaWYgKGxpc3RlbmVyICYmIHR5cGVvZiBsaXN0ZW5lciA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHJldHVybiBpc1ZhbGlkTGlzdGVuZXIobGlzdGVuZXIubGlzdGVuZXIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBsaXN0ZW5lciBmdW5jdGlvbiB0byB0aGUgc3BlY2lmaWVkIGV2ZW50LlxuICAgICAqIFRoZSBsaXN0ZW5lciB3aWxsIG5vdCBiZSBhZGRlZCBpZiBpdCBpcyBhIGR1cGxpY2F0ZS5cbiAgICAgKiBJZiB0aGUgbGlzdGVuZXIgcmV0dXJucyB0cnVlIHRoZW4gaXQgd2lsbCBiZSByZW1vdmVkIGFmdGVyIGl0IGlzIGNhbGxlZC5cbiAgICAgKiBJZiB5b3UgcGFzcyBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBhcyB0aGUgZXZlbnQgbmFtZSB0aGVuIHRoZSBsaXN0ZW5lciB3aWxsIGJlIGFkZGVkIHRvIGFsbCBldmVudHMgdGhhdCBtYXRjaCBpdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfFJlZ0V4cH0gZXZ0IE5hbWUgb2YgdGhlIGV2ZW50IHRvIGF0dGFjaCB0aGUgbGlzdGVuZXIgdG8uXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgTWV0aG9kIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBldmVudCBpcyBlbWl0dGVkLiBJZiB0aGUgZnVuY3Rpb24gcmV0dXJucyB0cnVlIHRoZW4gaXQgd2lsbCBiZSByZW1vdmVkIGFmdGVyIGNhbGxpbmcuXG4gICAgICogQHJldHVybiB7T2JqZWN0fSBDdXJyZW50IGluc3RhbmNlIG9mIEV2ZW50RW1pdHRlciBmb3IgY2hhaW5pbmcuXG4gICAgICovXG4gICAgcHJvdG8uYWRkTGlzdGVuZXIgPSBmdW5jdGlvbiBhZGRMaXN0ZW5lcihldnQsIGxpc3RlbmVyKSB7XG4gICAgICAgIGlmICghaXNWYWxpZExpc3RlbmVyKGxpc3RlbmVyKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbGlzdGVuZXJzID0gdGhpcy5nZXRMaXN0ZW5lcnNBc09iamVjdChldnQpO1xuICAgICAgICB2YXIgbGlzdGVuZXJJc1dyYXBwZWQgPSB0eXBlb2YgbGlzdGVuZXIgPT09ICdvYmplY3QnO1xuICAgICAgICB2YXIga2V5O1xuXG4gICAgICAgIGZvciAoa2V5IGluIGxpc3RlbmVycykge1xuICAgICAgICAgICAgaWYgKGxpc3RlbmVycy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIGluZGV4T2ZMaXN0ZW5lcihsaXN0ZW5lcnNba2V5XSwgbGlzdGVuZXIpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIGxpc3RlbmVyc1trZXldLnB1c2gobGlzdGVuZXJJc1dyYXBwZWQgPyBsaXN0ZW5lciA6IHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXI6IGxpc3RlbmVyLFxuICAgICAgICAgICAgICAgICAgICBvbmNlOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFsaWFzIG9mIGFkZExpc3RlbmVyXG4gICAgICovXG4gICAgcHJvdG8ub24gPSBhbGlhcygnYWRkTGlzdGVuZXInKTtcblxuICAgIC8qKlxuICAgICAqIFNlbWktYWxpYXMgb2YgYWRkTGlzdGVuZXIuIEl0IHdpbGwgYWRkIGEgbGlzdGVuZXIgdGhhdCB3aWxsIGJlXG4gICAgICogYXV0b21hdGljYWxseSByZW1vdmVkIGFmdGVyIGl0cyBmaXJzdCBleGVjdXRpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xSZWdFeHB9IGV2dCBOYW1lIG9mIHRoZSBldmVudCB0byBhdHRhY2ggdGhlIGxpc3RlbmVyIHRvLlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIE1ldGhvZCB0byBiZSBjYWxsZWQgd2hlbiB0aGUgZXZlbnQgaXMgZW1pdHRlZC4gSWYgdGhlIGZ1bmN0aW9uIHJldHVybnMgdHJ1ZSB0aGVuIGl0IHdpbGwgYmUgcmVtb3ZlZCBhZnRlciBjYWxsaW5nLlxuICAgICAqIEByZXR1cm4ge09iamVjdH0gQ3VycmVudCBpbnN0YW5jZSBvZiBFdmVudEVtaXR0ZXIgZm9yIGNoYWluaW5nLlxuICAgICAqL1xuICAgIHByb3RvLmFkZE9uY2VMaXN0ZW5lciA9IGZ1bmN0aW9uIGFkZE9uY2VMaXN0ZW5lcihldnQsIGxpc3RlbmVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkZExpc3RlbmVyKGV2dCwge1xuICAgICAgICAgICAgbGlzdGVuZXI6IGxpc3RlbmVyLFxuICAgICAgICAgICAgb25jZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQWxpYXMgb2YgYWRkT25jZUxpc3RlbmVyLlxuICAgICAqL1xuICAgIHByb3RvLm9uY2UgPSBhbGlhcygnYWRkT25jZUxpc3RlbmVyJyk7XG5cbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIGFuIGV2ZW50IG5hbWUuIFRoaXMgaXMgcmVxdWlyZWQgaWYgeW91IHdhbnQgdG8gdXNlIGEgcmVnZXggdG8gYWRkIGEgbGlzdGVuZXIgdG8gbXVsdGlwbGUgZXZlbnRzIGF0IG9uY2UuIElmIHlvdSBkb24ndCBkbyB0aGlzIHRoZW4gaG93IGRvIHlvdSBleHBlY3QgaXQgdG8ga25vdyB3aGF0IGV2ZW50IHRvIGFkZCB0bz8gU2hvdWxkIGl0IGp1c3QgYWRkIHRvIGV2ZXJ5IHBvc3NpYmxlIG1hdGNoIGZvciBhIHJlZ2V4PyBOby4gVGhhdCBpcyBzY2FyeSBhbmQgYmFkLlxuICAgICAqIFlvdSBuZWVkIHRvIHRlbGwgaXQgd2hhdCBldmVudCBuYW1lcyBzaG91bGQgYmUgbWF0Y2hlZCBieSBhIHJlZ2V4LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGV2dCBOYW1lIG9mIHRoZSBldmVudCB0byBjcmVhdGUuXG4gICAgICogQHJldHVybiB7T2JqZWN0fSBDdXJyZW50IGluc3RhbmNlIG9mIEV2ZW50RW1pdHRlciBmb3IgY2hhaW5pbmcuXG4gICAgICovXG4gICAgcHJvdG8uZGVmaW5lRXZlbnQgPSBmdW5jdGlvbiBkZWZpbmVFdmVudChldnQpIHtcbiAgICAgICAgdGhpcy5nZXRMaXN0ZW5lcnMoZXZ0KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFVzZXMgZGVmaW5lRXZlbnQgdG8gZGVmaW5lIG11bHRpcGxlIGV2ZW50cy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nW119IGV2dHMgQW4gYXJyYXkgb2YgZXZlbnQgbmFtZXMgdG8gZGVmaW5lLlxuICAgICAqIEByZXR1cm4ge09iamVjdH0gQ3VycmVudCBpbnN0YW5jZSBvZiBFdmVudEVtaXR0ZXIgZm9yIGNoYWluaW5nLlxuICAgICAqL1xuICAgIHByb3RvLmRlZmluZUV2ZW50cyA9IGZ1bmN0aW9uIGRlZmluZUV2ZW50cyhldnRzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXZ0cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgdGhpcy5kZWZpbmVFdmVudChldnRzW2ldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhIGxpc3RlbmVyIGZ1bmN0aW9uIGZyb20gdGhlIHNwZWNpZmllZCBldmVudC5cbiAgICAgKiBXaGVuIHBhc3NlZCBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBhcyB0aGUgZXZlbnQgbmFtZSwgaXQgd2lsbCByZW1vdmUgdGhlIGxpc3RlbmVyIGZyb20gYWxsIGV2ZW50cyB0aGF0IG1hdGNoIGl0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd8UmVnRXhwfSBldnQgTmFtZSBvZiB0aGUgZXZlbnQgdG8gcmVtb3ZlIHRoZSBsaXN0ZW5lciBmcm9tLlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIE1ldGhvZCB0byByZW1vdmUgZnJvbSB0aGUgZXZlbnQuXG4gICAgICogQHJldHVybiB7T2JqZWN0fSBDdXJyZW50IGluc3RhbmNlIG9mIEV2ZW50RW1pdHRlciBmb3IgY2hhaW5pbmcuXG4gICAgICovXG4gICAgcHJvdG8ucmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcihldnQsIGxpc3RlbmVyKSB7XG4gICAgICAgIHZhciBsaXN0ZW5lcnMgPSB0aGlzLmdldExpc3RlbmVyc0FzT2JqZWN0KGV2dCk7XG4gICAgICAgIHZhciBpbmRleDtcbiAgICAgICAgdmFyIGtleTtcblxuICAgICAgICBmb3IgKGtleSBpbiBsaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgIGlmIChsaXN0ZW5lcnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGluZGV4ID0gaW5kZXhPZkxpc3RlbmVyKGxpc3RlbmVyc1trZXldLCBsaXN0ZW5lcik7XG5cbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyc1trZXldLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFsaWFzIG9mIHJlbW92ZUxpc3RlbmVyXG4gICAgICovXG4gICAgcHJvdG8ub2ZmID0gYWxpYXMoJ3JlbW92ZUxpc3RlbmVyJyk7XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGxpc3RlbmVycyBpbiBidWxrIHVzaW5nIHRoZSBtYW5pcHVsYXRlTGlzdGVuZXJzIG1ldGhvZC5cbiAgICAgKiBJZiB5b3UgcGFzcyBhbiBvYmplY3QgYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHlvdSBjYW4gYWRkIHRvIG11bHRpcGxlIGV2ZW50cyBhdCBvbmNlLiBUaGUgb2JqZWN0IHNob3VsZCBjb250YWluIGtleSB2YWx1ZSBwYWlycyBvZiBldmVudHMgYW5kIGxpc3RlbmVycyBvciBsaXN0ZW5lciBhcnJheXMuIFlvdSBjYW4gYWxzbyBwYXNzIGl0IGFuIGV2ZW50IG5hbWUgYW5kIGFuIGFycmF5IG9mIGxpc3RlbmVycyB0byBiZSBhZGRlZC5cbiAgICAgKiBZb3UgY2FuIGFsc28gcGFzcyBpdCBhIHJlZ3VsYXIgZXhwcmVzc2lvbiB0byBhZGQgdGhlIGFycmF5IG9mIGxpc3RlbmVycyB0byBhbGwgZXZlbnRzIHRoYXQgbWF0Y2ggaXQuXG4gICAgICogWWVhaCwgdGhpcyBmdW5jdGlvbiBkb2VzIHF1aXRlIGEgYml0LiBUaGF0J3MgcHJvYmFibHkgYSBiYWQgdGhpbmcuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R8UmVnRXhwfSBldnQgQW4gZXZlbnQgbmFtZSBpZiB5b3Ugd2lsbCBwYXNzIGFuIGFycmF5IG9mIGxpc3RlbmVycyBuZXh0LiBBbiBvYmplY3QgaWYgeW91IHdpc2ggdG8gYWRkIHRvIG11bHRpcGxlIGV2ZW50cyBhdCBvbmNlLlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb25bXX0gW2xpc3RlbmVyc10gQW4gb3B0aW9uYWwgYXJyYXkgb2YgbGlzdGVuZXIgZnVuY3Rpb25zIHRvIGFkZC5cbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IEN1cnJlbnQgaW5zdGFuY2Ugb2YgRXZlbnRFbWl0dGVyIGZvciBjaGFpbmluZy5cbiAgICAgKi9cbiAgICBwcm90by5hZGRMaXN0ZW5lcnMgPSBmdW5jdGlvbiBhZGRMaXN0ZW5lcnMoZXZ0LCBsaXN0ZW5lcnMpIHtcbiAgICAgICAgLy8gUGFzcyB0aHJvdWdoIHRvIG1hbmlwdWxhdGVMaXN0ZW5lcnNcbiAgICAgICAgcmV0dXJuIHRoaXMubWFuaXB1bGF0ZUxpc3RlbmVycyhmYWxzZSwgZXZ0LCBsaXN0ZW5lcnMpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGxpc3RlbmVycyBpbiBidWxrIHVzaW5nIHRoZSBtYW5pcHVsYXRlTGlzdGVuZXJzIG1ldGhvZC5cbiAgICAgKiBJZiB5b3UgcGFzcyBhbiBvYmplY3QgYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHlvdSBjYW4gcmVtb3ZlIGZyb20gbXVsdGlwbGUgZXZlbnRzIGF0IG9uY2UuIFRoZSBvYmplY3Qgc2hvdWxkIGNvbnRhaW4ga2V5IHZhbHVlIHBhaXJzIG9mIGV2ZW50cyBhbmQgbGlzdGVuZXJzIG9yIGxpc3RlbmVyIGFycmF5cy5cbiAgICAgKiBZb3UgY2FuIGFsc28gcGFzcyBpdCBhbiBldmVudCBuYW1lIGFuZCBhbiBhcnJheSBvZiBsaXN0ZW5lcnMgdG8gYmUgcmVtb3ZlZC5cbiAgICAgKiBZb3UgY2FuIGFsc28gcGFzcyBpdCBhIHJlZ3VsYXIgZXhwcmVzc2lvbiB0byByZW1vdmUgdGhlIGxpc3RlbmVycyBmcm9tIGFsbCBldmVudHMgdGhhdCBtYXRjaCBpdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdHxSZWdFeHB9IGV2dCBBbiBldmVudCBuYW1lIGlmIHlvdSB3aWxsIHBhc3MgYW4gYXJyYXkgb2YgbGlzdGVuZXJzIG5leHQuIEFuIG9iamVjdCBpZiB5b3Ugd2lzaCB0byByZW1vdmUgZnJvbSBtdWx0aXBsZSBldmVudHMgYXQgb25jZS5cbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9uW119IFtsaXN0ZW5lcnNdIEFuIG9wdGlvbmFsIGFycmF5IG9mIGxpc3RlbmVyIGZ1bmN0aW9ucyB0byByZW1vdmUuXG4gICAgICogQHJldHVybiB7T2JqZWN0fSBDdXJyZW50IGluc3RhbmNlIG9mIEV2ZW50RW1pdHRlciBmb3IgY2hhaW5pbmcuXG4gICAgICovXG4gICAgcHJvdG8ucmVtb3ZlTGlzdGVuZXJzID0gZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXJzKGV2dCwgbGlzdGVuZXJzKSB7XG4gICAgICAgIC8vIFBhc3MgdGhyb3VnaCB0byBtYW5pcHVsYXRlTGlzdGVuZXJzXG4gICAgICAgIHJldHVybiB0aGlzLm1hbmlwdWxhdGVMaXN0ZW5lcnModHJ1ZSwgZXZ0LCBsaXN0ZW5lcnMpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBFZGl0cyBsaXN0ZW5lcnMgaW4gYnVsay4gVGhlIGFkZExpc3RlbmVycyBhbmQgcmVtb3ZlTGlzdGVuZXJzIG1ldGhvZHMgYm90aCB1c2UgdGhpcyB0byBkbyB0aGVpciBqb2IuIFlvdSBzaG91bGQgcmVhbGx5IHVzZSB0aG9zZSBpbnN0ZWFkLCB0aGlzIGlzIGEgbGl0dGxlIGxvd2VyIGxldmVsLlxuICAgICAqIFRoZSBmaXJzdCBhcmd1bWVudCB3aWxsIGRldGVybWluZSBpZiB0aGUgbGlzdGVuZXJzIGFyZSByZW1vdmVkICh0cnVlKSBvciBhZGRlZCAoZmFsc2UpLlxuICAgICAqIElmIHlvdSBwYXNzIGFuIG9iamVjdCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50IHlvdSBjYW4gYWRkL3JlbW92ZSBmcm9tIG11bHRpcGxlIGV2ZW50cyBhdCBvbmNlLiBUaGUgb2JqZWN0IHNob3VsZCBjb250YWluIGtleSB2YWx1ZSBwYWlycyBvZiBldmVudHMgYW5kIGxpc3RlbmVycyBvciBsaXN0ZW5lciBhcnJheXMuXG4gICAgICogWW91IGNhbiBhbHNvIHBhc3MgaXQgYW4gZXZlbnQgbmFtZSBhbmQgYW4gYXJyYXkgb2YgbGlzdGVuZXJzIHRvIGJlIGFkZGVkL3JlbW92ZWQuXG4gICAgICogWW91IGNhbiBhbHNvIHBhc3MgaXQgYSByZWd1bGFyIGV4cHJlc3Npb24gdG8gbWFuaXB1bGF0ZSB0aGUgbGlzdGVuZXJzIG9mIGFsbCBldmVudHMgdGhhdCBtYXRjaCBpdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gcmVtb3ZlIFRydWUgaWYgeW91IHdhbnQgdG8gcmVtb3ZlIGxpc3RlbmVycywgZmFsc2UgaWYgeW91IHdhbnQgdG8gYWRkLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdHxSZWdFeHB9IGV2dCBBbiBldmVudCBuYW1lIGlmIHlvdSB3aWxsIHBhc3MgYW4gYXJyYXkgb2YgbGlzdGVuZXJzIG5leHQuIEFuIG9iamVjdCBpZiB5b3Ugd2lzaCB0byBhZGQvcmVtb3ZlIGZyb20gbXVsdGlwbGUgZXZlbnRzIGF0IG9uY2UuXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbltdfSBbbGlzdGVuZXJzXSBBbiBvcHRpb25hbCBhcnJheSBvZiBsaXN0ZW5lciBmdW5jdGlvbnMgdG8gYWRkL3JlbW92ZS5cbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IEN1cnJlbnQgaW5zdGFuY2Ugb2YgRXZlbnRFbWl0dGVyIGZvciBjaGFpbmluZy5cbiAgICAgKi9cbiAgICBwcm90by5tYW5pcHVsYXRlTGlzdGVuZXJzID0gZnVuY3Rpb24gbWFuaXB1bGF0ZUxpc3RlbmVycyhyZW1vdmUsIGV2dCwgbGlzdGVuZXJzKSB7XG4gICAgICAgIHZhciBpO1xuICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgIHZhciBzaW5nbGUgPSByZW1vdmUgPyB0aGlzLnJlbW92ZUxpc3RlbmVyIDogdGhpcy5hZGRMaXN0ZW5lcjtcbiAgICAgICAgdmFyIG11bHRpcGxlID0gcmVtb3ZlID8gdGhpcy5yZW1vdmVMaXN0ZW5lcnMgOiB0aGlzLmFkZExpc3RlbmVycztcblxuICAgICAgICAvLyBJZiBldnQgaXMgYW4gb2JqZWN0IHRoZW4gcGFzcyBlYWNoIG9mIGl0cyBwcm9wZXJ0aWVzIHRvIHRoaXMgbWV0aG9kXG4gICAgICAgIGlmICh0eXBlb2YgZXZ0ID09PSAnb2JqZWN0JyAmJiAhKGV2dCBpbnN0YW5jZW9mIFJlZ0V4cCkpIHtcbiAgICAgICAgICAgIGZvciAoaSBpbiBldnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXZ0Lmhhc093blByb3BlcnR5KGkpICYmICh2YWx1ZSA9IGV2dFtpXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gUGFzcyB0aGUgc2luZ2xlIGxpc3RlbmVyIHN0cmFpZ2h0IHRocm91Z2ggdG8gdGhlIHNpbmd1bGFyIG1ldGhvZFxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaW5nbGUuY2FsbCh0aGlzLCBpLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UgcGFzcyBiYWNrIHRvIHRoZSBtdWx0aXBsZSBmdW5jdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGUuY2FsbCh0aGlzLCBpLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBTbyBldnQgbXVzdCBiZSBhIHN0cmluZ1xuICAgICAgICAgICAgLy8gQW5kIGxpc3RlbmVycyBtdXN0IGJlIGFuIGFycmF5IG9mIGxpc3RlbmVyc1xuICAgICAgICAgICAgLy8gTG9vcCBvdmVyIGl0IGFuZCBwYXNzIGVhY2ggb25lIHRvIHRoZSBtdWx0aXBsZSBtZXRob2RcbiAgICAgICAgICAgIGkgPSBsaXN0ZW5lcnMubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgICAgICAgIHNpbmdsZS5jYWxsKHRoaXMsIGV2dCwgbGlzdGVuZXJzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFsbCBsaXN0ZW5lcnMgZnJvbSBhIHNwZWNpZmllZCBldmVudC5cbiAgICAgKiBJZiB5b3UgZG8gbm90IHNwZWNpZnkgYW4gZXZlbnQgdGhlbiBhbGwgbGlzdGVuZXJzIHdpbGwgYmUgcmVtb3ZlZC5cbiAgICAgKiBUaGF0IG1lYW5zIGV2ZXJ5IGV2ZW50IHdpbGwgYmUgZW1wdGllZC5cbiAgICAgKiBZb3UgY2FuIGFsc28gcGFzcyBhIHJlZ2V4IHRvIHJlbW92ZSBhbGwgZXZlbnRzIHRoYXQgbWF0Y2ggaXQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xSZWdFeHB9IFtldnRdIE9wdGlvbmFsIG5hbWUgb2YgdGhlIGV2ZW50IHRvIHJlbW92ZSBhbGwgbGlzdGVuZXJzIGZvci4gV2lsbCByZW1vdmUgZnJvbSBldmVyeSBldmVudCBpZiBub3QgcGFzc2VkLlxuICAgICAqIEByZXR1cm4ge09iamVjdH0gQ3VycmVudCBpbnN0YW5jZSBvZiBFdmVudEVtaXR0ZXIgZm9yIGNoYWluaW5nLlxuICAgICAqL1xuICAgIHByb3RvLnJlbW92ZUV2ZW50ID0gZnVuY3Rpb24gcmVtb3ZlRXZlbnQoZXZ0KSB7XG4gICAgICAgIHZhciB0eXBlID0gdHlwZW9mIGV2dDtcbiAgICAgICAgdmFyIGV2ZW50cyA9IHRoaXMuX2dldEV2ZW50cygpO1xuICAgICAgICB2YXIga2V5O1xuXG4gICAgICAgIC8vIFJlbW92ZSBkaWZmZXJlbnQgdGhpbmdzIGRlcGVuZGluZyBvbiB0aGUgc3RhdGUgb2YgZXZ0XG4gICAgICAgIGlmICh0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgLy8gUmVtb3ZlIGFsbCBsaXN0ZW5lcnMgZm9yIHRoZSBzcGVjaWZpZWQgZXZlbnRcbiAgICAgICAgICAgIGRlbGV0ZSBldmVudHNbZXZ0XTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChldnQgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgICAgIC8vIFJlbW92ZSBhbGwgZXZlbnRzIG1hdGNoaW5nIHRoZSByZWdleC5cbiAgICAgICAgICAgIGZvciAoa2V5IGluIGV2ZW50cykge1xuICAgICAgICAgICAgICAgIGlmIChldmVudHMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBldnQudGVzdChrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBldmVudHNba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBSZW1vdmUgYWxsIGxpc3RlbmVycyBpbiBhbGwgZXZlbnRzXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fZXZlbnRzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFsaWFzIG9mIHJlbW92ZUV2ZW50LlxuICAgICAqXG4gICAgICogQWRkZWQgdG8gbWlycm9yIHRoZSBub2RlIEFQSS5cbiAgICAgKi9cbiAgICBwcm90by5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBhbGlhcygncmVtb3ZlRXZlbnQnKTtcblxuICAgIC8qKlxuICAgICAqIEVtaXRzIGFuIGV2ZW50IG9mIHlvdXIgY2hvaWNlLlxuICAgICAqIFdoZW4gZW1pdHRlZCwgZXZlcnkgbGlzdGVuZXIgYXR0YWNoZWQgdG8gdGhhdCBldmVudCB3aWxsIGJlIGV4ZWN1dGVkLlxuICAgICAqIElmIHlvdSBwYXNzIHRoZSBvcHRpb25hbCBhcmd1bWVudCBhcnJheSB0aGVuIHRob3NlIGFyZ3VtZW50cyB3aWxsIGJlIHBhc3NlZCB0byBldmVyeSBsaXN0ZW5lciB1cG9uIGV4ZWN1dGlvbi5cbiAgICAgKiBCZWNhdXNlIGl0IHVzZXMgYGFwcGx5YCwgeW91ciBhcnJheSBvZiBhcmd1bWVudHMgd2lsbCBiZSBwYXNzZWQgYXMgaWYgeW91IHdyb3RlIHRoZW0gb3V0IHNlcGFyYXRlbHkuXG4gICAgICogU28gdGhleSB3aWxsIG5vdCBhcnJpdmUgd2l0aGluIHRoZSBhcnJheSBvbiB0aGUgb3RoZXIgc2lkZSwgdGhleSB3aWxsIGJlIHNlcGFyYXRlLlxuICAgICAqIFlvdSBjYW4gYWxzbyBwYXNzIGEgcmVndWxhciBleHByZXNzaW9uIHRvIGVtaXQgdG8gYWxsIGV2ZW50cyB0aGF0IG1hdGNoIGl0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd8UmVnRXhwfSBldnQgTmFtZSBvZiB0aGUgZXZlbnQgdG8gZW1pdCBhbmQgZXhlY3V0ZSBsaXN0ZW5lcnMgZm9yLlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IFthcmdzXSBPcHRpb25hbCBhcnJheSBvZiBhcmd1bWVudHMgdG8gYmUgcGFzc2VkIHRvIGVhY2ggbGlzdGVuZXIuXG4gICAgICogQHJldHVybiB7T2JqZWN0fSBDdXJyZW50IGluc3RhbmNlIG9mIEV2ZW50RW1pdHRlciBmb3IgY2hhaW5pbmcuXG4gICAgICovXG4gICAgcHJvdG8uZW1pdEV2ZW50ID0gZnVuY3Rpb24gZW1pdEV2ZW50KGV2dCwgYXJncykge1xuICAgICAgICB2YXIgbGlzdGVuZXJzTWFwID0gdGhpcy5nZXRMaXN0ZW5lcnNBc09iamVjdChldnQpO1xuICAgICAgICB2YXIgbGlzdGVuZXJzO1xuICAgICAgICB2YXIgbGlzdGVuZXI7XG4gICAgICAgIHZhciBpO1xuICAgICAgICB2YXIga2V5O1xuICAgICAgICB2YXIgcmVzcG9uc2U7XG5cbiAgICAgICAgZm9yIChrZXkgaW4gbGlzdGVuZXJzTWFwKSB7XG4gICAgICAgICAgICBpZiAobGlzdGVuZXJzTWFwLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnNNYXBba2V5XS5zbGljZSgwKTtcblxuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIGxpc3RlbmVyIHJldHVybnMgdHJ1ZSB0aGVuIGl0IHNoYWxsIGJlIHJlbW92ZWQgZnJvbSB0aGUgZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlIGZ1bmN0aW9uIGlzIGV4ZWN1dGVkIGVpdGhlciB3aXRoIGEgYmFzaWMgY2FsbCBvciBhbiBhcHBseSBpZiB0aGVyZSBpcyBhbiBhcmdzIGFycmF5XG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyID0gbGlzdGVuZXJzW2ldO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChsaXN0ZW5lci5vbmNlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKGV2dCwgbGlzdGVuZXIubGlzdGVuZXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBsaXN0ZW5lci5saXN0ZW5lci5hcHBseSh0aGlzLCBhcmdzIHx8IFtdKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UgPT09IHRoaXMuX2dldE9uY2VSZXR1cm5WYWx1ZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKGV2dCwgbGlzdGVuZXIubGlzdGVuZXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFsaWFzIG9mIGVtaXRFdmVudFxuICAgICAqL1xuICAgIHByb3RvLnRyaWdnZXIgPSBhbGlhcygnZW1pdEV2ZW50Jyk7XG5cbiAgICAvKipcbiAgICAgKiBTdWJ0bHkgZGlmZmVyZW50IGZyb20gZW1pdEV2ZW50IGluIHRoYXQgaXQgd2lsbCBwYXNzIGl0cyBhcmd1bWVudHMgb24gdG8gdGhlIGxpc3RlbmVycywgYXMgb3Bwb3NlZCB0byB0YWtpbmcgYSBzaW5nbGUgYXJyYXkgb2YgYXJndW1lbnRzIHRvIHBhc3Mgb24uXG4gICAgICogQXMgd2l0aCBlbWl0RXZlbnQsIHlvdSBjYW4gcGFzcyBhIHJlZ2V4IGluIHBsYWNlIG9mIHRoZSBldmVudCBuYW1lIHRvIGVtaXQgdG8gYWxsIGV2ZW50cyB0aGF0IG1hdGNoIGl0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd8UmVnRXhwfSBldnQgTmFtZSBvZiB0aGUgZXZlbnQgdG8gZW1pdCBhbmQgZXhlY3V0ZSBsaXN0ZW5lcnMgZm9yLlxuICAgICAqIEBwYXJhbSB7Li4uKn0gT3B0aW9uYWwgYWRkaXRpb25hbCBhcmd1bWVudHMgdG8gYmUgcGFzc2VkIHRvIGVhY2ggbGlzdGVuZXIuXG4gICAgICogQHJldHVybiB7T2JqZWN0fSBDdXJyZW50IGluc3RhbmNlIG9mIEV2ZW50RW1pdHRlciBmb3IgY2hhaW5pbmcuXG4gICAgICovXG4gICAgcHJvdG8uZW1pdCA9IGZ1bmN0aW9uIGVtaXQoZXZ0KSB7XG4gICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW1pdEV2ZW50KGV2dCwgYXJncyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGN1cnJlbnQgdmFsdWUgdG8gY2hlY2sgYWdhaW5zdCB3aGVuIGV4ZWN1dGluZyBsaXN0ZW5lcnMuIElmIGFcbiAgICAgKiBsaXN0ZW5lcnMgcmV0dXJuIHZhbHVlIG1hdGNoZXMgdGhlIG9uZSBzZXQgaGVyZSB0aGVuIGl0IHdpbGwgYmUgcmVtb3ZlZFxuICAgICAqIGFmdGVyIGV4ZWN1dGlvbi4gVGhpcyB2YWx1ZSBkZWZhdWx0cyB0byB0cnVlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgbmV3IHZhbHVlIHRvIGNoZWNrIGZvciB3aGVuIGV4ZWN1dGluZyBsaXN0ZW5lcnMuXG4gICAgICogQHJldHVybiB7T2JqZWN0fSBDdXJyZW50IGluc3RhbmNlIG9mIEV2ZW50RW1pdHRlciBmb3IgY2hhaW5pbmcuXG4gICAgICovXG4gICAgcHJvdG8uc2V0T25jZVJldHVyblZhbHVlID0gZnVuY3Rpb24gc2V0T25jZVJldHVyblZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX29uY2VSZXR1cm5WYWx1ZSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRmV0Y2hlcyB0aGUgY3VycmVudCB2YWx1ZSB0byBjaGVjayBhZ2FpbnN0IHdoZW4gZXhlY3V0aW5nIGxpc3RlbmVycy4gSWZcbiAgICAgKiB0aGUgbGlzdGVuZXJzIHJldHVybiB2YWx1ZSBtYXRjaGVzIHRoaXMgb25lIHRoZW4gaXQgc2hvdWxkIGJlIHJlbW92ZWRcbiAgICAgKiBhdXRvbWF0aWNhbGx5LiBJdCB3aWxsIHJldHVybiB0cnVlIGJ5IGRlZmF1bHQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHsqfEJvb2xlYW59IFRoZSBjdXJyZW50IHZhbHVlIHRvIGNoZWNrIGZvciBvciB0aGUgZGVmYXVsdCwgdHJ1ZS5cbiAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgKi9cbiAgICBwcm90by5fZ2V0T25jZVJldHVyblZhbHVlID0gZnVuY3Rpb24gX2dldE9uY2VSZXR1cm5WYWx1ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoJ19vbmNlUmV0dXJuVmFsdWUnKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX29uY2VSZXR1cm5WYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEZldGNoZXMgdGhlIGV2ZW50cyBvYmplY3QgYW5kIGNyZWF0ZXMgb25lIGlmIHJlcXVpcmVkLlxuICAgICAqXG4gICAgICogQHJldHVybiB7T2JqZWN0fSBUaGUgZXZlbnRzIHN0b3JhZ2Ugb2JqZWN0LlxuICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAqL1xuICAgIHByb3RvLl9nZXRFdmVudHMgPSBmdW5jdGlvbiBfZ2V0RXZlbnRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZXZlbnRzIHx8ICh0aGlzLl9ldmVudHMgPSB7fSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldmVydHMgdGhlIGdsb2JhbCB7QGxpbmsgRXZlbnRFbWl0dGVyfSB0byBpdHMgcHJldmlvdXMgdmFsdWUgYW5kIHJldHVybnMgYSByZWZlcmVuY2UgdG8gdGhpcyB2ZXJzaW9uLlxuICAgICAqXG4gICAgICogQHJldHVybiB7RnVuY3Rpb259IE5vbiBjb25mbGljdGluZyBFdmVudEVtaXR0ZXIgY2xhc3MuXG4gICAgICovXG4gICAgRXZlbnRFbWl0dGVyLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiBub0NvbmZsaWN0KCkge1xuICAgICAgICBleHBvcnRzLkV2ZW50RW1pdHRlciA9IG9yaWdpbmFsR2xvYmFsVmFsdWU7XG4gICAgICAgIHJldHVybiBFdmVudEVtaXR0ZXI7XG4gICAgfTtcblxuICAgIC8vIEV4cG9zZSB0aGUgY2xhc3MgZWl0aGVyIHZpYSBBTUQsIENvbW1vbkpTIG9yIHRoZSBnbG9iYWwgb2JqZWN0XG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICBkZWZpbmUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIEV2ZW50RW1pdHRlcjtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzKXtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBFdmVudEVtaXR0ZXI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBleHBvcnRzLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcbiAgICB9XG59KHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogdGhpcyB8fCB7fSkpO1xuIiwiLyogQGZsb3cgICAgICAgICAqL1xuXCJ1c2Ugc3RyaWN0XCJcbmltcG9ydCB7TGluZX0gZnJvbSAnLi4vTGluZSdcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnd29sZnk4Ny1ldmVudGVtaXR0ZXInXG5cbmV4cG9ydCBjb25zdCBHcmlkID0gKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBjb2xvcnM6IHN0cmluZ1tdW10sIGVlOiBFdmVudEVtaXR0ZXIpID0+IHtcblxuICAgIGNvbnN0IGdyaWRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGdyaWRXcmFwcGVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsXCJncmlkLXdyYXBwZXJcIilcbiAgICBjb25zdCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGdyaWQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcImdyaWQgbWRjLWRpYWxvZ19fc3VyZmFjZVwiKVxuICAgIGNvbG9ycy5mb3JFYWNoKChsaW5lKT0+TGluZShncmlkLCBsaW5lLGVlKSlcbiAgICBncmlkV3JhcHBlci5hcHBlbmRDaGlsZChncmlkKVxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZ3JpZFdyYXBwZXIpXG5cbn0iLCIvKiBAZmxvdyAgICAgICAgICovXG5pbXBvcnQge1NxdWFyZX0gZnJvbSAnLi4vU3F1YXJlJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICd3b2xmeTg3LWV2ZW50ZW1pdHRlcidcblxuLyoqXG4gKiBcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBjb2xvcnMgXG4gKiBAcGFyYW0ge0V2ZW50RW1pdHRlcn0gZWVcbiAqL1xuZXhwb3J0IGNvbnN0IExpbmUgPSAoZWxlbWVudCwgY29sb3JzLCBlZSkgPT4ge1xuICAgIGNvbnN0IGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgbGluZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwibGluZVwiKVxuICAgIGNvbG9ycy5mb3JFYWNoKChjb2xvcik9PlNxdWFyZShsaW5lLGNvbG9yLCBlZSkpXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChsaW5lKVxufSIsIi8qIEBmbG93ICAgICAgICAgKi9cbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnd29sZnk4Ny1ldmVudGVtaXR0ZXInXG5cbmV4cG9ydCBjb25zdCBTcXVhcmUgPSAoZWxlbWVudDogSFRNTEVsZW1lbnQsIGNvbG9yOiBzdHJpbmcsIGVlOiBFdmVudEVtaXR0ZXIpID0+IHtcbiAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgc3F1YXJlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsXCJzcXVhcmUgZ3Jvd1wiKVxuICAgIC8vIG1vdXNlIGRvd24gZXZlbnQgZmlyZXMgYmVmb3JlIHRoZSBjbGljayBldmVudFxuICAgIFxuICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChldmVudDogRXZlbnQpPT57XG4gICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIGVlLnRyaWdnZXIoXCJjb2xvci1jaGFuZ2VkXCIsW2NvbG9yXSlcbiAgICAgICAgZWUudHJpZ2dlcihcImdyaWRfY2xvc2VkXCIsbnVsbClcbiAgICB9KVxuXG4gICAgc3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChzcXVhcmUpXG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTUtMiEuL2luZGV4LnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTUtMiEuL2luZGV4LnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS01LTIhLi9pbmRleC5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgZmlsbD1cXFwiIzAwMDAwMFxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxwYXRoIGQ9XFxcIk0xOCA0VjNjMC0uNTUtLjQ1LTEtMS0xSDVjLS41NSAwLTEgLjQ1LTEgMXY0YzAgLjU1LjQ1IDEgMSAxaDEyYy41NSAwIDEtLjQ1IDEtMVY2aDF2NEg5djExYzAgLjU1LjQ1IDEgMSAxaDJjLjU1IDAgMS0uNDUgMS0xdi05aDhWNGgtM3pcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMCAwaDI0djI0SDB6XFxcIiBmaWxsPVxcXCJub25lXFxcIj48L3BhdGg+PC9zdmc+XCIiLCIvKiBAZmxvdyAqL1xuaW1wb3J0IGNvbG9ycyBmcm9tICdtYXRlcmlhbC1jb2xvcnMvZGlzdC9jb2xvcnMnO1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICd3b2xmeTg3LWV2ZW50ZW1pdHRlcic7XG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnLi9QaWNrZXIvR3JpZCc7XG5pbXBvcnQgaWNvbiBmcm9tICcuL2ljb25zL3BhaW50LnN2Zyc7XG5pbXBvcnQgeyBPcHRpb24gfSBmcm9tICdzcGFjZS1saWZ0JztcbmltcG9ydCBfb21pdCBmcm9tICdsb2Rhc2gub21pdCc7XG5pbXBvcnQgX21hcCBmcm9tICdsb2Rhc2gubWFwJztcbmltcG9ydCAnLi9QaWNrZXIvaW5kZXguc2Nzcyc7XG5cbnR5cGUgQ29sb3JQaWNrZXJDb25maWcgPSB7XG4gIGVsZW1lbnROYW1lOiBzdHJpbmcsXG4gIGNyZWF0ZUljb246IGJvb2xlYW4sXG4gIGRlZmF1bHRDb2xvcjogc3RyaW5nXG59O1xuXG50eXBlIE9wdGlvbmFsPFQ+ID0ge1xuICB2YWx1ZTogVCxcbiAgdHlwZTogc3RyaW5nLFxuICBnZXQ6ICgpID0+ICosXG4gIGlzRGVmaW5lZDogKCkgPT4gKixcbiAgZm9yRWFjaDogKGE6ICopID0+ICosXG4gIG1hcDogKGE6ICopID0+ICosXG4gIGZsYXRNYXA6IChhOiAqKSA9PiAqLFxuICBmaWx0ZXI6IChhOiAqKSA9PiAqLFxuICBmb2xkOiAoYTogKiwgYjogKikgPT4gKixcbiAgb3JFbHNlOiAoKSA9PiAqLFxuICBnZXRPckVsc2U6ICgpID0+ICosXG4gIHRvQXJyYXk6ICgpID0+ICosXG4gIHRvU3RyaW5nOiAoKSA9PiAqLFxuICB0b0pTT046ICgpID0+ICpcbn07XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGVsZW1lbnQ6IE9wdGlvbmFsPEhUTUxFbGVtZW50PixcbiAgdG9nZ2xlOiBGdW5jdGlvbixcbiAgZGVmYXVsdENvbG9yOiBzdHJpbmcsXG4gIGVlOiBFdmVudEVtaXR0ZXIsXG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gIGhpZGVPbkJsdXI6IEZ1bmN0aW9uXG59O1xuXG5jb25zdCBleHRyYWN0ID0gKG9iamVjdDogT2JqZWN0KTogc3RyaW5nW11bXSA9PiBfbWFwKG9iamVjdCwgaXRlbSA9PiBfbWFwKGl0ZW0pKTtcblxuZXhwb3J0IGNvbnN0IE1kQ29sb3JQaWNrZXIgPSAoY29uZmlnOiBDb2xvclBpY2tlckNvbmZpZyk6IEV2ZW50RW1pdHRlciA9PiB7XG4gIGNvbnN0IHsgZWxlbWVudE5hbWUsIGNyZWF0ZUljb24sIGRlZmF1bHRDb2xvciB9ID0gY29uZmlnO1xuICBjb25zdCBlZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdCBlbGVtZW50OiBPcHRpb25hbDxIVE1MRWxlbWVudD4gPSBPcHRpb24oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudE5hbWUpKTtcbiAgY29uc3Qgb21pdGVkQ29sb3JzID0gWydibGFjaycsICd3aGl0ZScsICdsaWdodFRleHQnLCAnbGlnaHRJY29ucycsICdkYXJrVGV4dCcsICdkYXJrSWNvbnMnXTtcbiAgY29uc3QgbWF0ZXJpYWxDb2xvcnMgPSBleHRyYWN0KF9vbWl0KGNvbG9ycywgb21pdGVkQ29sb3JzKSk7XG5cbiAgY29uc3QgbWF0ZXJpYWxOb0FjY2VudCA9IG1hdGVyaWFsQ29sb3JzLm1hcChlbGVtID0+IGVsZW0uZmlsdGVyKChjb2xvciwgaW5kZXgpID0+IGluZGV4IDw9IDkpKTtcblxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY29sb3ItY29udGFpbmVyJyk7XG5cbiAgY29uc3QgdG9nZ2xlID0gZm9yY2UgPT4ge1xuICAgIGlmIChjb250YWluZXIuZ2V0QXR0cmlidXRlKCdjbGFzcycpID09PSAnY29sb3ItY29udGFpbmVyJyAmJiBmb3JjZSAhPT0gZmFsc2UpXG4gICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb2xvci1jb250YWluZXItb3BlbicpO1xuICAgIGVsc2UgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY29sb3ItY29udGFpbmVyJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuICBHcmlkKGNvbnRhaW5lciwgbWF0ZXJpYWxOb0FjY2VudCwgZWUpO1xuXG4gIGNvbnN0IGhpZGVPbkJsdXIgPSAoZWxlbWVudDogSFRNTEVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBldmVudCA9PiB7XG4gICAgICB0b2dnbGUoZmFsc2UpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHByb3BzOiBQcm9wcyA9IHtcbiAgICBjb250YWluZXIsXG4gICAgZGVmYXVsdENvbG9yLFxuICAgIGVlLFxuICAgIGVsZW1lbnQsXG4gICAgaGlkZU9uQmx1cixcbiAgICB0b2dnbGVcbiAgfTtcblxuICBpZiAoY3JlYXRlSWNvbikgY3JlYXRlV2l0aEljb24ocHJvcHMpO1xuICBlbHNlIGNyZWF0ZShwcm9wcyk7XG5cbiAgZWUub24oJ2dyaWRfY2xvc2VkJywgdG9nZ2xlKTtcbiAgcmV0dXJuIGVlO1xufTtcblxuY29uc3QgY3JlYXRlV2l0aEljb24gPSAocHJvcHM6IFByb3BzKTogdm9pZCA9PiB7XG4gIGNvbnN0IHsgZGVmYXVsdENvbG9yLCBlbGVtZW50LCB0b2dnbGUsIGVlLCBjb250YWluZXIsIGhpZGVPbkJsdXIgfSA9IHByb3BzO1xuICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpbWFnZS5pbm5lckhUTUwgPSBpY29uO1xuICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3JvdW5kLWJ0biBtZGMtZWxldmF0aW9uLS16MScpO1xuICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZSk7XG5cbiAgT3B0aW9uKGltYWdlLmZpcnN0RWxlbWVudENoaWxkKS5mb2xkKFxuICAgICgpID0+IGNvbnNvbGUuZXJyb3IoJ1NvbWV0aGluZyB3ZW50IHdyb25nIGNyZWF0aW5nIHRoZSBjb2xvci1waWNrZXInKSxcbiAgICAoY2hpbGQ6IFNWR1NWR0VsZW1lbnQpID0+IHtcbiAgICAgIGNoaWxkLnN0eWxlLmZpbGwgPSBkZWZhdWx0Q29sb3I7XG4gICAgICBlZS5vbignY29sb3ItY2hhbmdlZCcsIGNvbG9yID0+IHtcbiAgICAgICAgY2hpbGQuc3R5bGUuZmlsbCA9IGNvbG9yO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9XG4gICk7XG5cbiAgLyoqXG4gICAqIHdlIGhhdmUgdG8gaW5zZXJ0IHRoZSBpY29uLCB3ZSBhc3N1bWUgdGhhdCB0aGUgcGFyZW50XG4gICAqIGlzIGEgZGl2XG4gICAqL1xuICBlbGVtZW50LmZvbGQoXG4gICAgKCkgPT4gY29uc29sZS5lcnJvcignR2l2ZW4gZWxlbWVudCBkb2VzIG5vdCBleGlzdHMnKSxcbiAgICAoZWxlbTogSFRNTERpdkVsZW1lbnQpID0+IHtcbiAgICAgIGhpZGVPbkJsdXIoZWxlbSk7XG4gICAgICBlbGVtLmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICAgIGVsZW0uYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICB9XG4gICk7XG59O1xuLypcbiAgICBXZSBkb24ndCBoYXZlIHRvIGNyZWF0ZSBhbiBpY29uLCBzbyB3ZSBhc3N1bWUgdGhhdCB0aGUgY29sb3IgcGlrZXIgd2lsbCBiZSBcbiAgICBiaW5kZWQgdG8gYW4gaW5wdXRcbiovXG5jb25zdCBjcmVhdGUgPSAocHJvcHM6IFByb3BzKTogdm9pZCA9PiB7XG4gIGNvbnN0IHsgZGVmYXVsdENvbG9yLCBlbGVtZW50LCB0b2dnbGUsIGVlLCBjb250YWluZXIsIGhpZGVPbkJsdXIgfSA9IHByb3BzO1xuICBlbGVtZW50LmZvbGQoXG4gICAgKCkgPT4gY29uc29sZS5lcnJvcignQW4gZXJyb3Igb2NjdXJlZCBsb2NhdGluZyBiYXNlIGVsZW1lbnQnKSxcbiAgICAoZWxlbTogSFRNTElucHV0RWxlbWVudCkgPT4ge1xuICAgICAgT3B0aW9uKGVsZW0ucGFyZW50RWxlbWVudCkuZm9sZChcbiAgICAgICAgKCkgPT4gY29uc29sZS5lcnJvcignQW4gZXJyb3Igb2NjdXJlZCB3aGVuIGNyZWF0aW5nIHRoZSBjb2xvci1waWNrZXInKSxcbiAgICAgICAgKHBhcmVudDogSFRNTEVsZW1lbnQpID0+IHtcbiAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlKTtcbiAgICAgICAgICBoaWRlT25CbHVyKGVsZW0pO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBNZENvbG9yUGlja2VyO1xuIiwiaW1wb3J0IE1kQ29sb3JQaWNrZXIgZnJvbSAnLi4vaW5kZXgnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBNZENvbG9yUGlja2VyKHtcbiAgICBlbGVtZW50TmFtZTogJ3BpY2tlcicsXG4gICAgY3JlYXRlSWNvbjogdHJ1ZSxcbiAgICBkZWZhdWx0Q29sb3I6ICcjMjEyMTIxJ1xuICB9KTtcblxuICBNZENvbG9yUGlja2VyKHtcbiAgICBlbGVtZW50TmFtZTogJ3BpY2tlcjInLFxuICAgIGNyZWF0ZUljb246IGZhbHNlLFxuICAgIGRlZmF1bHRDb2xvcjogJ3JlZCdcbiAgfSk7XG4gIGNvbnN0IGV2ZW50cyA9IE1kQ29sb3JQaWNrZXIoe1xuICAgIGVsZW1lbnROYW1lOiAncGlja2VyMycsXG4gICAgY3JlYXRlSWNvbjogZmFsc2UsXG4gICAgZGVmYXVsdENvbG9yOiAncmVkJ1xuICB9KTtcblxuICBldmVudHMub24oJ2NvbG9yLWNoYW5nZWQnLCBjb2xvciA9PiB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BpY2tlcjMnKS52YWx1ZSA9IGNvbG9yO1xuICB9KTtcbn0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvbWF0ZXJpYWwtY29sb3ItcGlja2VyJyk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9