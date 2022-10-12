(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkinvoice"] = self["webpackChunkinvoice"] || []).push([["main"], {
    /***/
    98255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 98255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    90158:
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _pages_start_start_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./pages/start/start.component */
      74924);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: '',
        component: _pages_start_start_component__WEBPACK_IMPORTED_MODULE_0__.StartComponent
      }, {
        path: 'dashboard',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_modules_in-app_in-app_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./modules/in-app/in-app.module */
          2660)).then(function (m) {
            return m.InAppModule;
          });
        }
      }, {
        path: '**',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }];

      var _AppRoutingModule = /*#__PURE__*/_createClass(function _AppRoutingModule() {
        _classCallCheck(this, _AppRoutingModule);
      });

      _AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || _AppRoutingModule)();
      };

      _AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _AppRoutingModule
      });
      _AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, {
          relativeLinkResolution: 'legacy'
        })], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    55041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      71258);

      var _AppComponent = /*#__PURE__*/_createClass(function _AppComponent() {
        _classCallCheck(this, _AppComponent);

        this.title = 'invoice';
      });

      _AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || _AppComponent)();
      };

      _AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    36747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/platform-browser */
      71570);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app-routing.module */
      90158);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component */
      55041);
      /* harmony import */


      var _components_modal_info_modal_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/modal-info/modal-info.component */
      30814);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var _modules_material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./modules/material/material.module */
      29350);
      /* harmony import */


      var _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./services/token-interceptor.service */
      23742);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var _services_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./services/app.service */
      66475);
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/sidenav */
      86608);
      /* harmony import */


      var _angular_material_slider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/slider */
      53616);
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/menu */
      80221);
      /* harmony import */


      var _pages_start_start_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./pages/start/start.component */
      74924);
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      42791);
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/expansion */
      22323);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      20718);
      /* harmony import */


      var _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/service-worker */
      47334);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../environments/environment */
      92340);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _AppModule = /*#__PURE__*/_createClass(function _AppModule() {
        _classCallCheck(this, _AppModule);
      });

      _AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || _AppModule)();
      };

      _AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
      });
      _AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
        providers: [_services_app_service__WEBPACK_IMPORTED_MODULE_5__.AppService, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HTTP_INTERCEPTORS,
          useClass: _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_4__.TokenInterceptorService,
          multi: true
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _modules_material_material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__.ScrollingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__.ServiceWorkerModule.register('ngsw-worker.js', {
          enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.production,
          // Register the ServiceWorker as soon as the application is stable
          // or after 30 seconds (whichever comes first).
          registrationStrategy: 'registerImmediately'
        })], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__.MatSidenavModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_16__.MatSliderModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__.MatMenuModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__.MatExpansionModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](_AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_modal_info_modal_info_component__WEBPACK_IMPORTED_MODULE_2__.ModalInfoComponent, _pages_start_start_component__WEBPACK_IMPORTED_MODULE_6__.StartComponent],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _modules_material_material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__.ScrollingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__.ServiceWorkerModule],
          exports: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__.MatSidenavModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_16__.MatSliderModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__.MatMenuModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__.MatExpansionModule]
        });
      })();
      /***/

    },

    /***/
    30814:
    /*!***************************************************************!*\
      !*** ./src/app/components/modal-info/modal-info.component.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ModalInfoComponent": function ModalInfoComponent() {
          return (
            /* binding */
            _ModalInfoComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      70781);
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      365);

      function ModalInfoComponent_h1_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.data.title, "\n");
        }
      }

      function ModalInfoComponent_img_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 11);
        }
      }

      function ModalInfoComponent_img_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 12);
        }
      }

      function ModalInfoComponent_img_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 13);
        }
      }

      function ModalInfoComponent_img_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 14);
        }
      }

      function ModalInfoComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Aceptar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r5.data.subtitle, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
        }
      }

      function ModalInfoComponent_div_9_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.data.title, " ");
        }
      }

      function ModalInfoComponent_div_9_ng_container_2_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " - ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r19, " ");
        }
      }

      function ModalInfoComponent_div_9_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ModalInfoComponent_div_9_ng_container_2_p_1_Template, 4, 1, "p", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.data.subtitle);
        }
      }

      function ModalInfoComponent_div_9_ng_container_3_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r22 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r22.dateFormated);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r22.value, " ");
        }
      }

      function ModalInfoComponent_div_9_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ModalInfoComponent_div_9_ng_container_3_p_2_Template, 4, 2, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.data.subtitle);
        }
      }

      function ModalInfoComponent_div_9_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r11.data.footer, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      }

      function ModalInfoComponent_div_9_strong_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "OK");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ModalInfoComponent_div_9_strong_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "OK");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ModalInfoComponent_div_9_strong_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "OK");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ModalInfoComponent_div_9_strong_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "OK");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ModalInfoComponent_div_9_strong_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Continuar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ModalInfoComponent_div_9_strong_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cerrar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ModalInfoComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ModalInfoComponent_div_9_ng_container_1_Template, 3, 1, "ng-container", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ModalInfoComponent_div_9_ng_container_2_Template, 2, 1, "ng-container", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ModalInfoComponent_div_9_ng_container_3_Template, 3, 1, "ng-container", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ModalInfoComponent_div_9_ng_container_4_Template, 3, 1, "ng-container", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ModalInfoComponent_div_9_strong_8_Template, 2, 0, "strong", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ModalInfoComponent_div_9_strong_9_Template, 2, 0, "strong", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ModalInfoComponent_div_9_strong_10_Template, 2, 0, "strong", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ModalInfoComponent_div_9_strong_11_Template, 2, 0, "strong", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ModalInfoComponent_div_9_strong_12_Template, 2, 0, "strong", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ModalInfoComponent_div_9_strong_13_Template, 2, 0, "strong", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.data.type == "listError");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.data.type != "listComments");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.data.type == "listComments");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.data.footer != "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.data.type == "detailList");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.data.type == "detailListBase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.data.type == "listError");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.data.type == "listInfo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.data.type == "listItems");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.data.type == "listComments");
        }
      }

      function ModalInfoComponent_ng_container_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-progress-bar", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      var _ModalInfoComponent = /*#__PURE__*/function () {
        function _ModalInfoComponent(data) {
          _classCallCheck(this, _ModalInfoComponent);

          this.data = data;
          this.dateFormated = '';

          if (data.subtitle != null) {
            for (var index = 0; index < data.subtitle.length; index++) {
              if (data.subtitle[index].createdAt != null) {
                var day = new Date(Date.parse(this.data.subtitle[index].createdAt.replace('T', ' '))).getDate();
                var month = new Date(Date.parse(this.data.subtitle[index].createdAt.replace('T', ' '))).getMonth();
                var year = new Date(Date.parse(this.data.subtitle[index].createdAt.replace('T', ' '))).getFullYear();
                var time = new Date(Date.parse(this.data.subtitle[index].createdAt.replace('T', ' '))).getHours();
                var getMinutes = new Date(Date.parse(this.data.subtitle[index].createdAt.replace('T', ' '))).getMinutes();
                this.data.subtitle[index].dateFormated = day + '/' + (month + 1) + '/' + year + ' ' + time + ':' + getMinutes;
              }
            }
          }
        }

        _createClass(_ModalInfoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _ModalInfoComponent;
      }();

      _ModalInfoComponent.ɵfac = function ModalInfoComponent_Factory(t) {
        return new (t || _ModalInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA));
      };

      _ModalInfoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _ModalInfoComponent,
        selectors: [["app-modal-info"]],
        decls: 11,
        vars: 8,
        consts: [["mat-dialog-title", "", 4, "ngIf"], ["mat-dialog-content", ""], ["align", "center"], ["src", "assets/icons/feedback/info.svg", "style", "width: 100px;", "alt", "", 4, "ngIf"], ["src", "assets/icons/feedback/question.svg", "style", "width: 100px;", "alt", "", 4, "ngIf"], ["src", "assets/icons/feedback/error.svg", "style", "width: 100px;", "alt", "", 4, "ngIf"], ["src", "assets/icons/feedback/success.svg", "style", "width: 100px;", "alt", "", 4, "ngIf"], ["align", "center", 4, "ngIf"], ["align", "left", 4, "ngIf"], [4, "ngIf"], ["mat-dialog-title", ""], ["src", "assets/icons/feedback/info.svg", "alt", "", 2, "width", "100px"], ["src", "assets/icons/feedback/question.svg", "alt", "", 2, "width", "100px"], ["src", "assets/icons/feedback/error.svg", "alt", "", 2, "width", "100px"], ["src", "assets/icons/feedback/success.svg", "alt", "", 2, "width", "100px"], [1, "", 3, "innerHTML"], ["align", "right"], ["mat-raised-button", "", "color", "primary", "flex", "", 3, "mat-dialog-close"], ["align", "left"], ["mat-dialog-title", "", 2, "font-weight", "bold"], ["class", "modal-p-error", 4, "ngFor", "ngForOf"], [1, "modal-p-error"], [1, "scroll"], ["class", "modal-p-error justText", 4, "ngFor", "ngForOf"], [1, "modal-p-error", "justText"], ["mode", "indeterminate"]],
        template: function ModalInfoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ModalInfoComponent_h1_0_Template, 2, 1, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ModalInfoComponent_img_3_Template, 1, 0, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ModalInfoComponent_img_4_Template, 1, 0, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ModalInfoComponent_img_5_Template, 1, 0, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ModalInfoComponent_img_6_Template, 1, 0, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ModalInfoComponent_div_8_Template, 7, 2, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ModalInfoComponent_div_9_Template, 14, 11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ModalInfoComponent_ng_container_10_Template, 2, 0, "ng-container", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.type != "listError");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.type == "info" || ctx.data.type == "listInfo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.type == "question");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.type == "error" || ctx.data.type == "listError");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.type == "success");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.type != "listError" && ctx.data.type != "listInfo" && ctx.data.type != "listComments" && ctx.data.type != "listItems" && ctx.data.type != "progress");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.type == "listError" || ctx.data.type == "listInfo" || ctx.data.type == "listComments" || ctx.data.type == "listItems" || ctx.data.type == "detailList" || ctx.data.type == "detailListBase");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.type == "progress");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__.MatProgressBar],
        styles: [".modal-p-error[_ngcontent-%COMP%]{\r\n    margin-bottom: 0px;\r\n    padding-bottom: 0px;\r\n}\r\n\r\n.text-custom-color[_ngcontent-%COMP%]{\r\n    color: blue;\r\n}\r\n\r\n  .text-custom-color{\r\n    color: blue;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLWluZm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7R0FhRyIsImZpbGUiOiJtb2RhbC1pbmZvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtcC1lcnJvcntcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbi50ZXh0LWN1c3RvbS1jb2xvcntcclxuICAgIGNvbG9yOiBibHVlO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnRleHQtY3VzdG9tLWNvbG9ye1xyXG4gICAgY29sb3I6IGJsdWU7XHJcbn1cclxuLyogQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAgIC5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlciB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBub3JtYWwhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIDo6bmctZGVlcCAuY2RrLWdsb2JhbC1vdmVybGF5LXdyYXBwZXIge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogbm9ybWFsIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAubWF0LWRpYWxvZy1jb250ZW50IHtcclxuICAgICAgICBtYXJnaW46IDBweCAwcHggMTBweCAtMjRweDtcclxuICAgIH1cclxuXHJcbn0gKi9cclxuIl19 */"]
      });
      /***/
    },

    /***/
    29350:
    /*!*****************************************************!*\
      !*** ./src/app/modules/material/material.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MaterialModule": function MaterialModule() {
          return (
            /* binding */
            _MaterialModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      51606);
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      80395);
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! @angular/cdk/portal */
      40912);
      /* harmony import */


      var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/cdk/stepper */
      43285);
      /* harmony import */


      var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/cdk/table */
      72306);
      /* harmony import */


      var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/cdk/tree */
      85443);
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      65924);
      /* harmony import */


      var _angular_material_badge__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/badge */
      90330);
      /* harmony import */


      var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/bottom-sheet */
      76322);
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      53894);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/material/card */
      42118);
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/material/chips */
      79243);
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/material/datepicker */
      42937);
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! @angular/material/divider */
      1124);
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! @angular/material/list */
      28417);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! @angular/material/core */
      32220);
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! @angular/material/paginator */
      38021);
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      365);
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! @angular/material/sidenav */
      86608);
      /* harmony import */


      var _angular_material_slider__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! @angular/material/slider */
      53616);
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      32080);
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! @angular/material/sort */
      45381);
      /* harmony import */


      var _angular_material_tree__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! @angular/material/tree */
      75473);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/button */
      70781);
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/checkbox */
      74058);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/expansion */
      22323);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/form-field */
      65788);
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/grid-list */
      85937);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/input */
      64742);
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/menu */
      80221);
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      80181);
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/radio */
      15644);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/select */
      37007);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      68456);
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/stepper */
      48210);
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/table */
      54302);
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/tabs */
      9348);
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/toolbar */
      64106);
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/tooltip */
      50298);
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      42791);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/core */
      2316); // Modulo generado con la linea de comandos. Este modulo servirá para organizar los modulos  de Angular Material
      // Componente a usar, MatSnackBarModule


      var MaterialComponents = [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIconModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__.MatProgressSpinnerModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInputModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__.MatGridListModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTabsModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__.MatStepperModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelectModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__.MatRadioModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__.MatExpansionModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatCheckboxModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__.MatToolbarModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__.MatSnackBarModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__.MatTooltipModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__.MatMenuModule];

      var _MaterialModule = /*#__PURE__*/_createClass(function _MaterialModule() {
        _classCallCheck(this, _MaterialModule);
      });

      _MaterialModule.ɵfac = function MaterialModule_Factory(t) {
        return new (t || _MaterialModule)();
      };

      _MaterialModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({
        type: _MaterialModule
      });
      _MaterialModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({
        imports: [[MaterialComponents], _angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIconModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__.MatProgressSpinnerModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInputModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__.MatGridListModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTabsModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__.MatStepperModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelectModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__.MatRadioModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__.MatExpansionModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatCheckboxModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__.MatToolbarModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__.MatSnackBarModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__.MatTooltipModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__.MatMenuModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_19__.A11yModule, _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_20__.CdkStepperModule, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_21__.CdkTableModule, _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_22__.CdkTreeModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_23__.DragDropModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_24__.MatAutocompleteModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_25__.MatBadgeModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_26__.MatBottomSheetModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_27__.MatButtonToggleModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_28__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatCheckboxModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_29__.MatChipsModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__.MatStepperModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_30__.MatDatepickerModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_31__.MatDividerModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__.MatExpansionModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__.MatGridListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInputModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_32__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__.MatMenuModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_33__.MatNativeDateModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__.MatPaginatorModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_35__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__.MatProgressSpinnerModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__.MatRadioModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_33__.MatRippleModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelectModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_36__.MatSidenavModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_37__.MatSliderModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_38__.MatSlideToggleModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__.MatSnackBarModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_39__.MatSortModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__.MatToolbarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__.MatTooltipModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_40__.MatTreeModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_41__.PortalModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_42__.ScrollingModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](_MaterialModule, {
          imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIconModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__.MatProgressSpinnerModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInputModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__.MatGridListModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTabsModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__.MatStepperModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelectModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__.MatRadioModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__.MatExpansionModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatCheckboxModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__.MatToolbarModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__.MatSnackBarModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__.MatTooltipModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__.MatMenuModule],
          exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIconModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__.MatProgressSpinnerModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInputModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__.MatGridListModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTabsModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__.MatStepperModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelectModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__.MatRadioModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__.MatExpansionModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatCheckboxModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__.MatToolbarModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__.MatSnackBarModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__.MatTooltipModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__.MatMenuModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_19__.A11yModule, _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_20__.CdkStepperModule, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_21__.CdkTableModule, _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_22__.CdkTreeModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_23__.DragDropModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_24__.MatAutocompleteModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_25__.MatBadgeModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_26__.MatBottomSheetModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_27__.MatButtonToggleModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_28__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatCheckboxModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_29__.MatChipsModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__.MatStepperModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_30__.MatDatepickerModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_31__.MatDividerModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__.MatExpansionModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__.MatGridListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInputModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_32__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__.MatMenuModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_33__.MatNativeDateModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__.MatPaginatorModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_35__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__.MatProgressSpinnerModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__.MatRadioModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_33__.MatRippleModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelectModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_36__.MatSidenavModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_37__.MatSliderModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_38__.MatSlideToggleModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__.MatSnackBarModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_39__.MatSortModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__.MatToolbarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__.MatTooltipModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_40__.MatTreeModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_41__.PortalModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_42__.ScrollingModule]
        });
      })();
      /***/

    },

    /***/
    74924:
    /*!************************************************!*\
      !*** ./src/app/pages/start/start.component.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StartComponent": function StartComponent() {
          return (
            /* binding */
            _StartComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/services/authentication.service */
      7053);

      var _StartComponent = /*#__PURE__*/function () {
        function _StartComponent(dialog, router, authService) {
          _classCallCheck(this, _StartComponent);

          this.dialog = dialog;
          this.router = router;
          this.authService = authService;
          this.requestToRegister = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        }

        _createClass(_StartComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {// this.authService.startAuthentication();//! Descomentar esta linea
            // this.router.navigate(['/dashboard/comercio']);//! Comentar esta linea
          }
        }]);

        return _StartComponent;
      }();

      _StartComponent.ɵfac = function StartComponent_Factory(t) {
        return new (t || _StartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService));
      };

      _StartComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _StartComponent,
        selectors: [["app-start"]],
        outputs: {
          requestToRegister: "requestToRegister"
        },
        decls: 1,
        vars: 0,
        consts: [[1, "container-auth", "hidden-sm", 2, "overflow-y", "none"]],
        template: function StartComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
          }
        },
        styles: [".container-auth[_ngcontent-%COMP%]{\r\n  margin: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFTO0FBQ1giLCJmaWxlIjoic3RhcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItYXV0aHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    66475:
    /*!*****************************************!*\
      !*** ./src/app/services/app.service.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppService": function AppService() {
          return (
            /* binding */
            _AppService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      92340);
      /* harmony import */


      var _components_modal_info_modal_info_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../components/modal-info/modal-info.component */
      30814);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./authentication.service */
      7053);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);

      var _AppService = /*#__PURE__*/function () {
        function _AppService(router, http, authService, dialog) {
          _classCallCheck(this, _AppService);

          this.router = router;
          this.http = http;
          this.authService = authService;
          this.dialog = dialog;
        }

        _createClass(_AppService, [{
          key: "canActivate",
          value: function canActivate() {
            try {
              if (this.authService.isTokenLSExpired()) {
                return true;
              } else {
                this.authService.startAuthentication();
                return false;
              }
            } catch (error) {
              console.error("AppService : " + error);
              return false;
            }
          }
        }, {
          key: "getIPAddress",
          value: function getIPAddress() {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiIpify, {});
          }
        }, {
          key: "getIpStorage",
          value: function getIpStorage() {
            this.ipAdress = localStorage.getItem('ipAdress');
            return this.ipAdress;
          }
        }, {
          key: "getOidcUser",
          value: function getOidcUser() {
            var oidcUser = localStorage.getItem('oidc.user:' + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.securityOIDC + ':' + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.clientOIDC);

            if (oidcUser != null && oidcUser !== undefined) {
              this.oidcUser = JSON.parse(oidcUser);
            } else {
              this.oidcUser = {};
            }

            return this.oidcUser;
          }
        }, {
          key: "getUserLocal",
          value: function getUserLocal() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return JSON.parse(localStorage.getItem('oidc.user:' + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.securityOIDC + ':' + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.clientOIDC));

                    case 2:
                      this.user = _context.sent;
                      return _context.abrupt("return", this.user);

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "setIpStorage",
          value: function setIpStorage(ipAdress) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return localStorage.setItem('ipAdress', ipAdress);

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }));
          }
        }, {
          key: "determinateHttpError",
          value: function determinateHttpError(err, isLoadingLogout) {
            var _this = this;

            this.dialog.closeAll();
            isLoadingLogout = isLoadingLogout == undefined ? false : isLoadingLogout;

            if (err.status === 401 || err.status === 403) {
              if (!isLoadingLogout) {
                isLoadingLogout = true;
                this.openDialogInfo('Sesión caducada  !', 'Vuelva a iniciar sesión', 'error');
                setTimeout(function () {
                  _this.authService.logout();
                }, 2500);
              }
            } else {
              this.openDialogInfo('Ocurrió un error  !', 'Intentelo mas tarde, si el error persiste comuníquese con el soporte', 'error');
            }
          }
        }, {
          key: "openDialogInfo",
          value: function openDialogInfo(title, subtitle, type) {
            var dialogref = this.dialog.open(_components_modal_info_modal_info_component__WEBPACK_IMPORTED_MODULE_1__.ModalInfoComponent, {
              width: '350px',
              data: {
                title: title,
                subtitle: subtitle,
                type: type
              }
            });
          }
        }]);

        return _AppService;
      }();

      _AppService.ɵfac = function AppService_Factory(t) {
        return new (t || _AppService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog));
      };

      _AppService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: _AppService,
        factory: _AppService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    7053:
    /*!****************************************************!*\
      !*** ./src/app/services/authentication.service.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthenticationService": function AuthenticationService() {
          return (
            /* binding */
            _AuthenticationService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../../environments/environment */
      92340);
      /* harmony import */


      var oidc_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! oidc-client */
      32437);
      /* harmony import */


      var oidc_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(oidc_client__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _sso_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../sso.config */
      7987);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      33927);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      53882);

      var _AuthenticationService = /*#__PURE__*/function () {
        function _AuthenticationService(router, http) {
          var _this2 = this;

          _classCallCheck(this, _AuthenticationService);

          this.router = router;
          this.http = http;
          this.user = null;
          this.manager = new oidc_client__WEBPACK_IMPORTED_MODULE_1__.UserManager((0, _sso_config__WEBPACK_IMPORTED_MODULE_2__.getClientSettings)());

          this.LoginRedirectHandler = function () {
            return _this2.manager.getUser().then(function (user) {
              if (user === null || user === undefined) {
                return _this2.manager.signinRedirect(null);
              }
            });
          };

          this.manager.getUser().then(function (user) {
            if (user != null) {
              localStorage.setItem('oidc.user:' + _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.securityOIDC + ':' + _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.clientOIDC, user.toStorageString());
              _this2.user = user;
            }
          });
        }

        _createClass(_AuthenticationService, [{
          key: "isLoggedIn",
          value: function isLoggedIn() {
            return this.user != null && !this.user.expired;
          }
        }, {
          key: "getClaims",
          value: function getClaims() {
            return this.user.profile;
          }
        }, {
          key: "getUser",
          value: function getUser() {
            var _this3 = this;

            this.manager.getUser().then(function (user) {
              _this3.user = user;
            });
          }
        }, {
          key: "startAuthentication",
          value: function startAuthentication() {
            return this.manager.signinRedirect();
          }
        }, {
          key: "logout",
          value: function logout() {
            if (this.user == null) {
              localStorage.clear();
              this.router.navigate(['/dashboard']);
            } else {
              localStorage.clear();
              this.manager.signoutRedirect({
                id_token_hint: this.user.id_token
              });
            }
          }
        }, {
          key: "logoutInterceptor",
          value: function logoutInterceptor() {
            localStorage.clear();
            this.manager.signoutRedirect({
              id_token_hint: this.user.id_token
            });
          }
        }, {
          key: "completeAuthentication",
          value: function completeAuthentication() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var _this4 = this;

              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (!(this.user === null || this.user === undefined)) {
                        _context3.next = 6;
                        break;
                      }

                      _context3.next = 3;
                      return this.manager.signinCallback().then(function (user) {
                        _this4.user = user;

                        if (_this4.isTokenExpired()) {
                          _this4.logout();
                        } else {
                          _this4.router.navigate(['/dashboard']);
                        }
                      }, function (err) {
                        console.log(err);

                        _this4.logout();
                      });

                    case 3:
                      return _context3.abrupt("return", _context3.sent);

                    case 6:
                      if (this.isTokenExpired()) {
                        this.logout();
                      } else {
                        this.router.navigate(['/dashboard']);
                      }

                    case 7:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "getToken",
          value: function getToken() {
            this.user = JSON.parse(localStorage.getItem('oidc.user:' + _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.securityOIDC + ':' + _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.clientOIDC));
            return this.user != null && this.user !== undefined ? this.user.access_token : '';
          }
        }, {
          key: "isTokenExpired",
          value: function isTokenExpired() {
            return this.user.expires_at < new Date().getTime() / 1000;
          }
        }, {
          key: "isTokenLSExpired",
          value: function isTokenLSExpired() {
            var sessionStorage = JSON.parse(localStorage.getItem('oidc.user:' + _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.securityOIDC + ':' + _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.clientOIDC));

            if (sessionStorage != null) {
              //return true; // Revisar Ojo
              if (sessionStorage.expires_at < new Date().getTime() / 1000) {
                return false;
              } else {
                return true;
              }
            } else {
              return false;
            }
          }
        }, {
          key: "isvalidToken",
          value: function isvalidToken() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.securityOIDC + '/authentication/isvalid');
          }
        }, {
          key: "getApplications",
          value: function getApplications() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.securityOIDC + '/authentication/applications');
          }
        }, {
          key: "getRolByApplication",
          value: function getRolByApplication(appId) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.securityOIDC + '/authentication/roles?applicationId=' + appId);
          }
        }, {
          key: "getAccessByApplication",
          value: function getAccessByApplication(appId) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.securityOIDC + '/authentication/access?applicationId=' + appId);
          }
        }, {
          key: "test",
          value: function test(appId) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.securityOIDC + '/authentication/access?applicationId=' + appId).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(function (response) {
              return response;
            }));
          }
        }, {
          key: "hasPermission",
          value: function hasPermission(appId) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.securityOIDC + '/authentication/actions?applicationId=' + appId).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(function (response) {
              return response;
            }));
          }
        }]);

        return _AuthenticationService;
      }();

      _AuthenticationService.ɵfac = function AuthenticationService_Factory(t) {
        return new (t || _AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient));
      };

      _AuthenticationService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
        token: _AuthenticationService,
        factory: _AuthenticationService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    23742:
    /*!*******************************************************!*\
      !*** ./src/app/services/token-interceptor.service.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TokenInterceptorService": function TokenInterceptorService() {
          return (
            /* binding */
            _TokenInterceptorService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      81134);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      45871);
      /* harmony import */


      var _components_modal_info_modal_info_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../components/modal-info/modal-info.component */
      30814);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      18293);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./authentication.service */
      7053);
      /* harmony import */


      var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.service */
      66475);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);

      var _TokenInterceptorService = /*#__PURE__*/function () {
        function _TokenInterceptorService(authenticationService, appService, dialog) {
          _classCallCheck(this, _TokenInterceptorService);

          this.authenticationService = authenticationService;
          this.appService = appService;
          this.dialog = dialog; //private deviceService: DeviceDetectorService) {
          //this.deviceInfo = this.deviceService.getDeviceInfo();
          //const isMobile = this.deviceService.isMobile();
          //const isTablet = this.deviceService.isTablet();
          //const isDesktopDevice = this.deviceService.isDesktop();
        }

        _createClass(_TokenInterceptorService, [{
          key: "handleAuthError",
          value: function handleAuthError(err) {
            var _this5 = this;

            if (err.status === 401) {
              this.openDialogInfo('Sesión caducada  !', 'Vuelva a iniciar sesión', 'error');
              setTimeout(function () {
                _this5.authenticationService.logoutInterceptor();
              }, 1500);
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(err.message);
            }

            return (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(err);
          }
        }, {
          key: "intercept",
          value: function intercept(req, next) {
            var _this6 = this;

            if (req.url.includes('ipify')) {
              var tokenizeReq = req.clone({});
              return next.handle(tokenizeReq);
            } else {
              this.token = this.authenticationService.getToken() !== undefined ? this.authenticationService.getToken() : '';
              this.ipAdress = this.appService.getIpStorage() !== null ? this.appService.getIpStorage() : '';

              var _tokenizeReq = req.clone({
                setHeaders: {
                  Authorization: 'Bearer ' + this.token,
                  Ip: this.ipAdress
                }
              });

              _tokenizeReq.headers.set('Ip', this.ipAdress);

              return next.handle(_tokenizeReq).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(function (x) {
                return _this6.handleAuthError(x);
              }));
            }
          }
        }, {
          key: "openDialogInfo",
          value: function openDialogInfo(title, subtitle, type) {
            var dialogref = this.dialog.open(_components_modal_info_modal_info_component__WEBPACK_IMPORTED_MODULE_0__.ModalInfoComponent, {
              width: '350px',
              data: {
                title: title,
                subtitle: subtitle,
                type: type
              }
            });
            dialogref.afterClosed().subscribe(function (reponse) {});
          }
        }]);

        return _TokenInterceptorService;
      }();

      _TokenInterceptorService.ɵfac = function TokenInterceptorService_Factory(t) {
        return new (t || _TokenInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_authentication_service__WEBPACK_IMPORTED_MODULE_1__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog));
      };

      _TokenInterceptorService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
        token: _TokenInterceptorService,
        factory: _TokenInterceptorService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    7987:
    /*!*******************************!*\
      !*** ./src/app/sso.config.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "getClientSettings": function getClientSettings() {
          return (
            /* binding */
            _getClientSettings
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var oidc_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! oidc-client */
      32437);
      /* harmony import */


      var oidc_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(oidc_client__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment */
      92340);

      function _getClientSettings() {
        return {
          authority: src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.securityOIDC,
          client_id: src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.clientOIDC,
          response_type: 'id_token token',
          redirect_uri: src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.urlBase + src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.redirectLogin,
          post_logout_redirect_uri: src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.urlBase,
          scope: src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.scope,
          userStore: new oidc_client__WEBPACK_IMPORTED_MODULE_0__.WebStorageStateStore({
            store: window.localStorage
          }),
          filterProtocolClaims: false,
          loadUserInfo: true,
          automaticSilentRenew: false,
          includeIdTokenInSilentRenew: false,
          monitorSession: false
        };
      }
      /***/

    },

    /***/
    92340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      });

      var _environment = {
        production: false,
        invoceApi: 'https://devapigateway.globokas.tech/api/voucher/v1/',
        securityOIDC: 'https://devsecurityservice.globokas.tech',
        urlBase: 'http://localhost:4300',
        clientOIDC: 'cli-extranet_loc_invoice',
        redirectLogin: '/dashboard/auth-callback',
        scope: 'IdentityServerApi Invoice openid',
        apiIpify: 'https://api.ipify.org/?format=json',
        idApp: '25',
        maxWeigthFile: 15360,
        paginate: 20
      };
      /***/
    },

    /***/
    14431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      71570);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      36747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      92340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.error(err);
      });
      /***/

    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(14431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map