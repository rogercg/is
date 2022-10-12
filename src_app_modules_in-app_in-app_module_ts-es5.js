(function () {
  "use strict";

  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (self["webpackChunkinvoice"] = self["webpackChunkinvoice"] || []).push([["src_app_modules_in-app_in-app_module_ts"], {
    /***/
    2194:
    /*!*******************************************************************!*\
      !*** ./src/app/components/modal-upload/modal-upload.component.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ModalUploadComponent": function ModalUploadComponent() {
          return (
            /* binding */
            _ModalUploadComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      92340);
      /* harmony import */


      var _modal_info_modal_info_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../modal-info/modal-info.component */
      30814);
      /* harmony import */


      var _modalquestion_modalquestion_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../modalquestion/modalquestion.component */
      93381);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      68456);
      /* harmony import */


      var src_app_services_commission_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/commission.service */
      80630);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      80181);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button */
      70781);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/form-field */
      65788);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/select */
      37007);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/core */
      32220);

      function ModalUploadComponent_div_4_p_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Ocurri\xF3 un error mientras se sub\xEDa el archivo. Intentarlo nuevamente. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function ModalUploadComponent_div_4_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " OK ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("mat-dialog-close", 0);
        }
      }

      function ModalUploadComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-progress-spinner", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ModalUploadComponent_div_4_p_3_Template, 2, 0, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ModalUploadComponent_div_4_div_4_Template, 3, 1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.isErrorLoadFile);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.isErrorLoadFile);
        }
      }

      function ModalUploadComponent_form_5_mat_option_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var lista_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", lista_r12.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", lista_r12.name, " ");
        }
      }

      function ModalUploadComponent_form_5_ng_container_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Por favor, suba 1\xB0 El archivo .XML y 2\xB0 el archivo .PDF");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        }
      }

      function ModalUploadComponent_form_5_span_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\xA0\xA0 Archivos seleccionados:");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function ModalUploadComponent_form_5_p_35_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-icon", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ModalUploadComponent_form_5_p_35_Template_mat_icon_click_3_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16);

            var i_r14 = restoredCtx.index;

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

            return ctx_r15.removeFile(i_r14);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var file_r13 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", file_r13.name, " ");
        }
      }

      function ModalUploadComponent_form_5_button_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Guardar");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function ModalUploadComponent_form_5_button_42_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ModalUploadComponent_form_5_button_42_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

            return ctx_r17.onSave();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Guardar");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r11.files.length <= 0)("ngClass", ctx_r11.files.length <= 0 ? "gkn-disabled-variant" : "btn-gkn-secondary");
        }
      }

      function ModalUploadComponent_form_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 9, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Tipo de Comprobante de Pago");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-select", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ModalUploadComponent_form_5_Template_mat_select_ngModelChange_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r19.onChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, ModalUploadComponent_form_5_mat_option_9_Template, 2, 2, "mat-option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, ModalUploadComponent_form_5_ng_container_10_Template, 4, 0, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Tama\xF1o m\xE1ximo permitido: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Extensiones permitidas:");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "input", 17, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ModalUploadComponent_form_5_Template_input_ngModelChange_26_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r21.inputFiles = $event;
          })("change", function ModalUploadComponent_form_5_Template_input_change_26_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r22.onFileSelected($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "label", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "mat-icon", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "cloud_upload");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, ModalUploadComponent_form_5_span_34_Template, 2, 0, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, ModalUploadComponent_form_5_p_35_Template, 5, 1, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](36, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ModalUploadComponent_form_5_Template_button_click_38_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r23.onNoClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Cancelar");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](40);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](41, ModalUploadComponent_form_5_button_41_Template, 2, 0, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](42, ModalUploadComponent_form_5_button_42_Template, 2, 2, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r1.registerForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.data.subtitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.lisfiletype);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.isExtElectrico);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r1.maxWeigth / ctx_r1.numberbyte, "MB");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.Extpermitida);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r1.inputFiles);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" \xA0\xA0 Cargar archivo ", ctx_r1.Extfile, "\xA0\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.files.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.files);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.isbutton);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.isbutton);
        }
      }

      var _ModalUploadComponent = /*#__PURE__*/function () {
        function _ModalUploadComponent(snackBar, dialogRef, dialog, commissionService, data) {
          _classCallCheck(this, _ModalUploadComponent);

          this.snackBar = snackBar;
          this.dialogRef = dialogRef;
          this.dialog = dialog;
          this.commissionService = commissionService;
          this.data = data;
          this.isMobile = true;
          this.isLoading = false;
          this.isErrorLoadFile = false;
          this.currentWeigth = 0;
          this.files = [];
          this.maxWeigth = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.maxWeigthFile;
          this.lisfiletype = [];
          this.maxFiles = 2;
          this.isExtElectrico = false;
          this.numberbyte = 1024;
          this.isbutton = false;
          this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
            files: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
            tipoestado: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required])
          });
          this.tray = this.data;
          this.isMobile = this.data.isMobile;
        }

        _createClass(_ModalUploadComponent, [{
          key: "removeFile",
          value: function removeFile(i) {
            this.currentWeigth -= this.files[i].size / this.numberbyte;
            this.files.splice(i, 1);
          }
        }, {
          key: "onChange",
          value: function onChange(deviceValue) {
            this.selectValue = deviceValue;

            if (this.selectValue == '1') {
              this.Extpermitida = ' .xml ';
              this.Extfile = ' xml ';
              this.isExtElectrico = true;
            } else {
              this.Extpermitida = ' .jpg, .png, .pdf ';
              this.Extfile = '  ';
              this.isExtElectrico = false;
            }

            this.isbutton = true;
            this.files = [];
            this.currentWeigth = 0;
          }
        }, {
          key: "onFileSelected",
          value: function onFileSelected(event) {
            var extension = this.inputFiles.substr(this.inputFiles.lastIndexOf(".")).toLowerCase();

            if (extension === ".pdf" || extension === ".jpeg" || extension === ".png" || extension === ".jpg" || extension === ".xml") {
              if (this.files.length == this.maxFiles && this.isExtElectrico || this.files.length == 1 && !this.isExtElectrico) {
                this.snackBar.open('Superó el máximo de archivos permitidos', 'OK', {
                  duration: 5000
                });
                return;
              } else {
                this.currentWeigth = 0;

                for (var index = 0; index < event.target.files.length; index++) {
                  this.files.push(event.target.files[index]);

                  if (index >= event.target.files.length - 1) {
                    this.inputFiles = '';

                    for (var indexTwo = 0; indexTwo < this.files.length; indexTwo++) {
                      this.currentWeigth += this.files[indexTwo].size / this.numberbyte;

                      if (this.files[indexTwo].size / this.numberbyte > this.maxWeigth) {
                        this.removeFile(indexTwo);
                        this.snackBar.open('Superó el máximo de tamaño permitido(' + this.maxWeigth / this.numberbyte + 'MB por archivo) para el documento actual', 'OK', {
                          duration: 5000
                        });
                      } else {
                        if (this.selectValue == '1') {
                          this.Extfile = ' pdf ';
                        } else {
                          this.Extfile = '  ';
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }, {
          key: "onNoClick",
          value: function onNoClick() {
            this.dialogRef.close(false);
          }
        }, {
          key: "onSave",
          value: function onSave() {
            var _this = this;

            var typevoucher = ' ';

            if (this.selectValue == '1') {
              typevoucher = ' de pago electrónico';
            }

            if (this.files.length <= 0) {
              this.snackBar.open('Seleccione un archivo', 'OK', {
                duration: 5000
              });
              return;
            }

            var dialogref = this.dialog.open(_modalquestion_modalquestion_component__WEBPACK_IMPORTED_MODULE_2__.ModalquestionComponent, {
              data: {
                message: "¿Está seguro de cargar el comprobante" + typevoucher + " ?",
                type: "generic"
              }
            });
            dialogref.afterClosed().subscribe(function (response) {
              if (response === true) {
                _this.sendFile();
              }
            });
          }
        }, {
          key: "sendFile",
          value: function sendFile() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var _this2 = this;

              var formData;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.isLoading = true;
                      formData = new FormData();
                      this.files.forEach(function (file) {
                        formData.append('file', file, file.name);
                      });
                      this.commissionService.postfile(this.registerForm.controls.tipoestado.value, this.tray.obj, formData).subscribe(function (data) {
                        return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(_this2, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                          var auxs;
                          return _regeneratorRuntime().wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  this.isLoading = false;

                                  if (data.success) {
                                    this.openDialogInfo("", data.message, "", "success");
                                    this.dialogRef.close(1);
                                  } else {
                                    if (data.validationErrors != null) {
                                      this.openDialogInfo("Proceso erroneo !", data.validationErrors, "", "listError");
                                    } else {
                                      if (!data.data) {
                                        this.openDialogInfo("", data.message, "", "error");
                                      } else {
                                        auxs = '';

                                        if (this.selectValue == '1' && data.message.indexOf('SUNAT') == -1) {
                                          auxs = 'Favor volver a generar otro comprobante de pago electrónico';
                                        }

                                        if (data.data.find(function (x) {
                                          return x.includes('fuera del cierre fiscal');
                                        })) {
                                          auxs = '';
                                        }

                                        if (data.message.includes('por favor intente en unos minutos')) {
                                          auxs = '';
                                        }

                                        this.openDialogInfo(data.message, Object.values(data.data), auxs, 'listError');
                                      }
                                    }
                                  }

                                case 2:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee, this);
                        }));
                      }, function (err) {
                        _this2.isLoading = false;

                        _this2.dialogRef.close();

                        console.log(err);
                      });

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "openDialogInfo",
          value: function openDialogInfo(title, subtitle, footer, type) {
            var dialogref = this.dialog.open(_modal_info_modal_info_component__WEBPACK_IMPORTED_MODULE_1__.ModalInfoComponent, {
              width: '450px',
              data: {
                title: title,
                subtitle: subtitle,
                footer: footer,
                type: type
              }
            });
            dialogref.afterClosed().subscribe(function (reponse) {});
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getAllApplication();
          }
        }, {
          key: "getAllApplication",
          value: function getAllApplication() {
            var _this3 = this;

            this.commissionService.getfiletypes().subscribe(function (data) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(_this3, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
                return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        this.lisfiletype = data.data;

                      case 1:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this);
              }));
            }, function (err) {
              console.log(err);
            });
          }
        }]);

        return _ModalUploadComponent;
      }();

      _ModalUploadComponent.ɵfac = function ModalUploadComponent_Factory(t) {
        return new (t || _ModalUploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_commission_service__WEBPACK_IMPORTED_MODULE_3__.CommissionService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MAT_DIALOG_DATA));
      };

      _ModalUploadComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _ModalUploadComponent,
        selectors: [["app-modal-upload"]],
        decls: 6,
        vars: 3,
        consts: [["mat-dialog-title", ""], [4, "ngIf"], [3, "formGroup", 4, "ngIf"], ["mode", "indeterminate", 1, "custom-spinner"], ["align", "center", "style", "color: red", 4, "ngIf"], ["align", "right", 4, "ngIf"], ["align", "center", 2, "color", "red"], ["align", "right"], ["mat-raised-button", "", 1, "btn-gkn-md", "btn-gkn-primary", 3, "mat-dialog-close"], [3, "formGroup"], ["f", "ngForm"], ["mat-dialog-content", "", 1, "mat-dialog-content"], ["appearance", "outline", 1, "mat-input"], [1, "mat-label"], ["formControlName", "tipoestado", "panelClass", "pnaelselectopcion", 1, "mat-select", 3, "ngModelChange"], ["class", "mat-select-panel", 3, "value", 4, "ngFor", "ngForOf"], [1, "container-upload"], ["formControlName", "files", "name", "files", "multiple", "", "type", "file", "id", "dataimage", "required", "", 3, "ngModel", "ngModelChange", "change"], ["dataimage", ""], ["for", "dataimage", 1, "btn-gkn-bg-upload", "btn-gkn-primary", "cursor-hover"], [1, "icon-white", "mat-icon2"], ["class", "border-p", 4, "ngFor", "ngForOf"], ["mat-dialog-actions", "", "align", "end"], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "disabled", "", "class", "btn-gkn-min-disabled-modal", 4, "ngIf"], ["mat-raised-button", "", "class", "btn-gkn-md", 3, "disabled", "ngClass", "click", 4, "ngIf"], [1, "mat-select-panel", 3, "value"], [1, "text-rojo"], [1, "border-p"], [1, "file-style"], [1, "cursor-hover", "mat-icon-upload-delete", 3, "click"], ["mat-raised-button", "", "disabled", "", 1, "btn-gkn-min-disabled-modal"], ["mat-raised-button", "", 1, "btn-gkn-md", 3, "disabled", "ngClass", "click"]],
        template: function ModalUploadComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ModalUploadComponent_div_4_Template, 5, 2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ModalUploadComponent_form_5_Template, 43, 12, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.data.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isLoading);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogTitle, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__.MatProgressSpinner, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogClose, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogContent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogActions, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass],
        styles: [".text-rojo[_ngcontent-%COMP%] {\r\n    color: #ff3c5f !important;\r\n}\r\n\r\ninput[type=\"file\"][_ngcontent-%COMP%] {\r\n    width: 1px;\r\n    height: 1px;\r\n    opacity: 0;\r\n}\r\n\r\n.border-p[_ngcontent-%COMP%] {\r\n    margin-bottom: 0px;\r\n    padding-bottom: 0px;\r\n}\r\n\r\n.file-style[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    width: 90%;\r\n    white-space: nowrap;\r\n    overflow: hidden !important;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.message-info-text[_ngcontent-%COMP%] {\r\n    color: red;\r\n    font-size: 12px;\r\n}\r\n\r\n.mat-icon-upload-delete[_ngcontent-%COMP%] {\r\n    color: red;\r\n    vertical-align: inherit;\r\n}\r\n\r\n  .cdk-overlay-pane{\r\n    max-width: 650px;\r\n    min-width: 350px;\r\n    font-size: 1em;\r\n}\r\n\r\n.mat-icon2[_ngcontent-%COMP%] {\r\n    font-size: 1em;\r\n    position: absolute;\r\n}\r\n\r\n@media screen and (max-width: 600px){\r\n\r\n      .cdk-overlay-pane{\r\n        overflow-y: scroll!important;\r\n        max-width: 100vw!important;\r\n        font-size: 1.2em!important;\r\n    }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLXVwbG9hZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFVBQVU7SUFDVix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJO1FBQ0ksNEJBQTRCO1FBQzVCLDBCQUEwQjtRQUMxQiwwQkFBMEI7SUFDOUI7O0FBRUoiLCJmaWxlIjoibW9kYWwtdXBsb2FkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnRleHQtcm9qbyB7XHJcbiAgICBjb2xvcjogI2ZmM2M1ZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwiZmlsZVwiXSB7XHJcbiAgICB3aWR0aDogMXB4O1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4uYm9yZGVyLXAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxufVxyXG5cclxuLmZpbGUtc3R5bGUge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG5cclxuLm1lc3NhZ2UtaW5mby10ZXh0IHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5tYXQtaWNvbi11cGxvYWQtZGVsZXRlIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogaW5oZXJpdDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5jZGstb3ZlcmxheS1wYW5le1xyXG4gICAgbWF4LXdpZHRoOiA2NTBweDtcclxuICAgIG1pbi13aWR0aDogMzUwcHg7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxufVxyXG5cclxuLm1hdC1pY29uMiB7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpe1xyXG5cclxuICAgIDo6bmctZGVlcCAuY2RrLW92ZXJsYXktcGFuZXtcclxuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGwhaW1wb3J0YW50O1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwdnchaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW0haW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    93381:
    /*!*********************************************************************!*\
      !*** ./src/app/components/modalquestion/modalquestion.component.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ModalquestionComponent": function ModalquestionComponent() {
          return (
            /* binding */
            _ModalquestionComponent
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


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      70781);

      var _ModalquestionComponent = /*#__PURE__*/function () {
        function _ModalquestionComponent(dialogRef, data) {
          _classCallCheck(this, _ModalquestionComponent);

          this.dialogRef = dialogRef;
          this.data = data;
          dialogRef.disableClose = true;
        }

        _createClass(_ModalquestionComponent, [{
          key: "close",
          value: function close() {
            this.dialogRef.close(false);
          }
        }, {
          key: "onSave",
          value: function onSave() {
            this.dialogRef.close(true);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _ModalquestionComponent;
      }();

      _ModalquestionComponent.ɵfac = function ModalquestionComponent_Factory(t) {
        return new (t || _ModalquestionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA));
      };

      _ModalquestionComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _ModalquestionComponent,
        selectors: [["app-modalquestion"]],
        decls: 9,
        vars: 1,
        consts: [["mat-dialog-content", "", "align", "center"], ["mat-dialog-title", "", 1, "h1"], [1, "text-align"], ["mat-raised-button", "", "flex", "", 1, "btn-gkn-md", "btn-gkn-tertiary", "margin-right", 3, "click"], ["mat-raised-button", "", 1, "btn-gkn-md", "btn-gkn-secondary", 3, "click"]],
        template: function ModalquestionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalquestionComponent_Template_button_click_4_listener() {
              return ctx.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "No");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \xA0\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalquestionComponent_Template_button_click_7_listener() {
              return ctx.onSave();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Si");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.message, " ");
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbHF1ZXN0aW9uLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    92043:
    /*!*********************************************************!*\
      !*** ./src/app/components/sidenav/sidenav.component.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SidenavComponent": function SidenavComponent() {
          return (
            /* binding */
            _SidenavComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/services/authentication.service */
      7053);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/toolbar */
      64106);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);

      function SidenavComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-toolbar", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-toolbar-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidenavComponent_ng_container_0_Template_mat_icon_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r2.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "exit_to_app");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }
      }

      function SidenavComponent_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }
      }

      var _SidenavComponent = /*#__PURE__*/function () {
        function _SidenavComponent(authService, router) {
          _classCallCheck(this, _SidenavComponent);

          this.authService = authService;
          this.router = router;
          this.isMobile = false;
          this.title = 'gkn-afiliaciones-invoive';
        }

        _createClass(_SidenavComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "logout",
          value: function logout() {
            console.info("chao");
            this.authService.logout();
          }
        }]);

        return _SidenavComponent;
      }();

      _SidenavComponent.ɵfac = function SidenavComponent_Factory(t) {
        return new (t || _SidenavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
      };

      _SidenavComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _SidenavComponent,
        selectors: [["app-sidenav"]],
        decls: 4,
        vars: 2,
        consts: [[4, "ngIf"], [2, "min-height", "90vh"], ["color", "primary", 1, "toolbar"], ["src", "assets/kasnet-logo.svg", "alt", "", 2, "width", "150px"], [1, "example-spacer"], ["aria-hidden", "false", "aria-label", "Example user verified icon", 1, "icon-logout", "cursor-hover", 3, "click"], [1, "footer-gkn", 2, "min-height", "6vh", "width", "100%"]],
        template: function SidenavComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SidenavComponent_ng_container_0_Template, 7, 0, "ng-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "router-outlet", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SidenavComponent_ng_container_3_Template, 2, 0, "ng-container", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.router.url.toString().includes("callback"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.router.url.toString().includes("callback"));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__.MatToolbar, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__.MatToolbarRow, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon],
        styles: ["mat-label[_ngcontent-%COMP%]{\r\n  margin: auto;\r\n  color: white;\r\n  font-weight: 500;\r\n}\r\nmat-grid-tile[_ngcontent-%COMP%]{\r\n  align-items: center;\r\n  align-content: center;\r\n  text-align: center;\r\n}\r\n.footer-gkn[_ngcontent-%COMP%]{\r\n  margin-top: 5px;\r\n  background-color: var(--gkn-primary-color-variant-one);\r\n  width: 100%;\r\n  align-items: center;\r\n  align-content: center;\r\n  text-align: center;\r\n}\r\n.mat_icon-style[_ngcontent-%COMP%]{\r\n\tpadding-top: 1.9px;\r\n  font-size: 1.3em !important;\r\n  color:  #fed300;\r\n  vertical-align: middle;\r\n}\r\n.icon-logout[_ngcontent-%COMP%] {\r\n  padding: 0 14px !important;\r\n  color:white !important;\r\n}\r\n.example-spacer[_ngcontent-%COMP%] {\r\n  flex: 1 1 auto;\r\n}\r\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], .example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\r\n  flex-basis: 0;\r\n}\r\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n  .toolbar {\r\n  background:  var(--gkn-primary-color-variant-one)!important;\r\n  color: #fff;\r\n}\r\n.example-container[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n  }\r\n.example-radio-group[_ngcontent-%COMP%] {\r\n    display: block;\r\n    border: 1px solid #555;\r\n    margin: 20px;\r\n    padding: 10px;\r\n}\r\n.example-button-row[_ngcontent-%COMP%] {\r\n  display: table-cell;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGVuYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLHNEQUFzRDtFQUN0RCxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7QUFFQTtDQUNDLGtCQUFrQjtFQUNqQiwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBOztFQUVFLGFBQWE7QUFDZjtBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsMkRBQTJEO0VBQzNELFdBQVc7QUFDYjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixTQUFTO0lBQ1QsT0FBTztJQUNQLFFBQVE7RUFDVjtBQUVGO0lBQ0ksY0FBYztJQUNkLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osYUFBYTtBQUNqQjtBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNpZGVuYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1sYWJlbHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxubWF0LWdyaWQtdGlsZXtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mb290ZXItZ2tue1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1na24tcHJpbWFyeS1jb2xvci12YXJpYW50LW9uZSk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubWF0X2ljb24tc3R5bGV7XHJcblx0cGFkZGluZy10b3A6IDEuOXB4O1xyXG4gIGZvbnQtc2l6ZTogMS4zZW0gIWltcG9ydGFudDtcclxuICBjb2xvcjogICNmZWQzMDA7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLmljb24tbG9nb3V0IHtcclxuICBwYWRkaW5nOiAwIDE0cHggIWltcG9ydGFudDtcclxuICBjb2xvcjp3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZXhhbXBsZS1zcGFjZXIge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG4uZXhhbXBsZS1oZWFkZXJzLWFsaWduIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSxcclxuLmV4YW1wbGUtaGVhZGVycy1hbGlnbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xyXG4gIGZsZXgtYmFzaXM6IDA7XHJcbn1cclxuXHJcbi5leGFtcGxlLWhlYWRlcnMtYWxpZ24gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuOjpuZy1kZWVwIC50b29sYmFyIHtcclxuICBiYWNrZ3JvdW5kOiAgdmFyKC0tZ2tuLXByaW1hcnktY29sb3ItdmFyaWFudC1vbmUpIWltcG9ydGFudDtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG4uZXhhbXBsZS1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gIH1cclxuXHJcbi5leGFtcGxlLXJhZGlvLWdyb3VwIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzU1NTtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLWJ1dHRvbi1yb3cge1xyXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    63321:
    /*!*******************************************************************!*\
      !*** ./src/app/components/table-footer/table-footer.component.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TableFooterComponent": function TableFooterComponent() {
          return (
            /* binding */
            _TableFooterComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      92340);
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      53894);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);

      var _TableFooterComponent = /*#__PURE__*/function () {
        function _TableFooterComponent() {
          _classCallCheck(this, _TableFooterComponent);

          this.paginate = {};
          this.changePage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        }

        _createClass(_TableFooterComponent, [{
          key: "_data",
          set: function set(value) {
            this.initAndLoad();

            if (value != undefined) {
              this.paginate.current = value.pageIndex;
              this.paginate.previus = this.paginate.current;

              if (value.hasPreviousPage) {
                this.paginate.previus = this.paginate.previus - 1;
              }

              this.paginate.next = this.paginate.current;

              if (value.hasNextPage) {
                this.paginate.next = this.paginate.next + 1;
              }

              this.paginate.records = value.totalCount;
              this.paginate.pages = value.totalPages;
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {//this.initAndLoad();
          }
        }, {
          key: "initAndLoad",
          value: function initAndLoad() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      this.paginateGlobal = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.paginate;
                      this.paginate.records = 0;
                      this.paginate.current = 1;
                      this.paginate.pages = 1;
                      this.paginate.sizes = this.paginateGlobal;

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "filterPageTable",
          value: function filterPageTable(pages, sizes) {
            this.paginate.pages = pages === null || pages === undefined ? 1 : pages;
            this.paginate.sizes = sizes === null || sizes === undefined ? this.paginateGlobal : sizes;
            this.changePage.emit(this.paginate);
          }
        }]);

        return _TableFooterComponent;
      }();

      _TableFooterComponent.ɵfac = function TableFooterComponent_Factory(t) {
        return new (t || _TableFooterComponent)();
      };

      _TableFooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _TableFooterComponent,
        selectors: [["app-table-footer"]],
        inputs: {
          _data: "_data"
        },
        outputs: {
          changePage: "changePage"
        },
        decls: 21,
        vars: 8,
        consts: [["align", "right", 1, "space-around-min-footer"], ["group", "matButtonToggleGroup"], ["value", "left", 3, "disabled", "click"], [1, "button-checked"], ["value", "center", 3, "disabled", "click"], ["value", "right", 3, "disabled", "click"]],
        template: function TableFooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-button-toggle-group", null, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-button-toggle", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TableFooterComponent_Template_mat_button_toggle_click_3_listener() {
              return ctx.filterPageTable(1, ctx.paginateGlobal);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "skip_previous");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " 1 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-button-toggle", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TableFooterComponent_Template_mat_button_toggle_click_7_listener() {
              return ctx.paginate.current == 1 ? 1 : ctx.filterPageTable(ctx.paginate.current - 1, ctx.paginateGlobal);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "navigate_before");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-button-toggle", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-button-toggle", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TableFooterComponent_Template_mat_button_toggle_click_13_listener() {
              return ctx.filterPageTable(ctx.paginate.next, ctx.paginateGlobal);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "navigate_next");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-button-toggle", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TableFooterComponent_Template_mat_button_toggle_click_17_listener() {
              return ctx.filterPageTable(ctx.paginate.pages, ctx.paginateGlobal);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "skip_next");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.paginate.current == 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.paginate.current == 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.paginate.previus, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.paginate.current, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.paginate.current == ctx.paginate.pages);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.paginate.next, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.paginate.current == ctx.paginate.pages);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.paginate.pages, " ");
          }
        },
        directives: [_angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__.MatButtonToggleGroup, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__.MatButtonToggle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJsZS1mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    34455:
    /*!*********************************************************!*\
      !*** ./src/app/modules/in-app/in-app-routing.module.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InAppRoutingModule": function InAppRoutingModule() {
          return (
            /* binding */
            _InAppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/components/sidenav/sidenav.component */
      92043);
      /* harmony import */


      var src_app_pages_auth_callback_auth_callback_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/pages/auth-callback/auth-callback.component */
      52659);
      /* harmony import */


      var src_app_pages_commerce_commerce_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/pages/commerce/commerce.component */
      20179);
      /* harmony import */


      var src_app_pages_commission_commission_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/pages/commission/commission.component */
      29391);
      /* harmony import */


      var src_app_pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/pages/home/home.component */
      25245);
      /* harmony import */


      var src_app_pages_operations_operations_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/pages/operations/operations.component */
      30446);
      /* harmony import */


      var src_app_pages_store_store_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/pages/store/store.component */
      10809);
      /* harmony import */


      var src_app_pages_terminals_terminals_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/pages/terminals/terminals.component */
      76077);
      /* harmony import */


      var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/app.service */
      66475);
      /* harmony import */


      var src_app_services_authorization_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/authorization.service */
      84519);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: '',
        component: src_app_components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_0__.SidenavComponent,
        children: [{
          path: '',
          redirectTo: 'bienvenido'
        }, {
          path: 'bienvenido',
          component: src_app_pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__.HomeComponent
        }, {
          path: 'comercio',
          component: src_app_pages_commerce_commerce_component__WEBPACK_IMPORTED_MODULE_2__.CommerceComponent
        }, {
          path: 'tienda',
          component: src_app_pages_store_store_component__WEBPACK_IMPORTED_MODULE_6__.StoreComponent
        }, {
          path: 'terminales',
          component: src_app_pages_terminals_terminals_component__WEBPACK_IMPORTED_MODULE_7__.TerminalsComponent
        }, {
          path: 'operaciones',
          component: src_app_pages_operations_operations_component__WEBPACK_IMPORTED_MODULE_5__.OperationsComponent
        }, {
          path: 'auth-callback',
          component: src_app_pages_auth_callback_auth_callback_component__WEBPACK_IMPORTED_MODULE_1__.AuthCallbackComponent
        }, {
          path: 'auth-callback',
          component: src_app_pages_auth_callback_auth_callback_component__WEBPACK_IMPORTED_MODULE_1__.AuthCallbackComponent
        }, {
          path: 'documentos-y-pagos',
          component: src_app_pages_commission_commission_component__WEBPACK_IMPORTED_MODULE_3__.CommissionComponent,
          canActivate: [src_app_services_authorization_service__WEBPACK_IMPORTED_MODULE_9__.AuthorizationService, src_app_services_app_service__WEBPACK_IMPORTED_MODULE_8__.AppService]
        }]
      }, {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
      }];

      var _InAppRoutingModule = /*#__PURE__*/_createClass(function _InAppRoutingModule() {
        _classCallCheck(this, _InAppRoutingModule);
      });

      _InAppRoutingModule.ɵfac = function InAppRoutingModule_Factory(t) {
        return new (t || _InAppRoutingModule)();
      };

      _InAppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
        type: _InAppRoutingModule
      });
      _InAppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](_InAppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    2660:
    /*!*************************************************!*\
      !*** ./src/app/modules/in-app/in-app.module.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InAppModule": function InAppModule() {
          return (
            /* binding */
            _InAppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _in_app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./in-app-routing.module */
      34455);
      /* harmony import */


      var _material_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../material/material.module */
      29350);
      /* harmony import */


      var src_app_pages_auth_callback_auth_callback_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/pages/auth-callback/auth-callback.component */
      52659);
      /* harmony import */


      var src_app_components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/components/sidenav/sidenav.component */
      92043);
      /* harmony import */


      var src_app_pages_commission_commission_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/pages/commission/commission.component */
      29391);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      42791);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var src_app_components_modal_upload_modal_upload_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/components/modal-upload/modal-upload.component */
      2194);
      /* harmony import */


      var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/app.service */
      66475);
      /* harmony import */


      var src_app_pages_payrolldetail_payrolldetail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/pages/payrolldetail/payrolldetail.component */
      37434);
      /* harmony import */


      var src_app_components_modalquestion_modalquestion_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/components/modalquestion/modalquestion.component */
      93381);
      /* harmony import */


      var src_app_components_table_footer_table_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/components/table-footer/table-footer.component */
      63321);
      /* harmony import */


      var src_app_services_authorization_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/services/authorization.service */
      84519);
      /* harmony import */


      var src_app_pages_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/pages/home/home.component */
      25245);
      /* harmony import */


      var src_app_pages_commerce_commerce_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/pages/commerce/commerce.component */
      20179);
      /* harmony import */


      var src_app_pages_list_options_list_options_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/pages/list-options/list-options.component */
      89530);
      /* harmony import */


      var src_app_pages_store_store_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/pages/store/store.component */
      10809);
      /* harmony import */


      var src_app_pages_terminals_terminals_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/app/pages/terminals/terminals.component */
      76077);
      /* harmony import */


      var src_app_pages_operations_operations_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! src/app/pages/operations/operations.component */
      30446);
      /* harmony import */


      var src_app_pages_list_items_list_items_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! src/app/pages/list-items/list-items.component */
      35387);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _InAppModule = /*#__PURE__*/_createClass(function _InAppModule() {
        _classCallCheck(this, _InAppModule);
      });

      _InAppModule.ɵfac = function InAppModule_Factory(t) {
        return new (t || _InAppModule)();
      };

      _InAppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({
        type: _InAppModule
      });
      _InAppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({
        providers: [src_app_services_app_service__WEBPACK_IMPORTED_MODULE_6__.AppService, src_app_services_authorization_service__WEBPACK_IMPORTED_MODULE_10__.AuthorizationService],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_19__.CommonModule, _in_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.InAppRoutingModule, _material_material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ReactiveFormsModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_21__.ScrollingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_22__.HttpClientModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](_InAppModule, {
          declarations: [src_app_components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_3__.SidenavComponent, src_app_pages_auth_callback_auth_callback_component__WEBPACK_IMPORTED_MODULE_2__.AuthCallbackComponent, src_app_pages_commission_commission_component__WEBPACK_IMPORTED_MODULE_4__.CommissionComponent, src_app_components_modal_upload_modal_upload_component__WEBPACK_IMPORTED_MODULE_5__.ModalUploadComponent, src_app_pages_payrolldetail_payrolldetail_component__WEBPACK_IMPORTED_MODULE_7__.PayrolldetailComponent, src_app_components_modalquestion_modalquestion_component__WEBPACK_IMPORTED_MODULE_8__.ModalquestionComponent, src_app_components_table_footer_table_footer_component__WEBPACK_IMPORTED_MODULE_9__.TableFooterComponent, src_app_pages_home_home_component__WEBPACK_IMPORTED_MODULE_11__.HomeComponent, src_app_pages_commerce_commerce_component__WEBPACK_IMPORTED_MODULE_12__.CommerceComponent, src_app_pages_store_store_component__WEBPACK_IMPORTED_MODULE_14__.StoreComponent, src_app_pages_list_options_list_options_component__WEBPACK_IMPORTED_MODULE_13__.ListOptionsComponent, src_app_pages_list_items_list_items_component__WEBPACK_IMPORTED_MODULE_17__.ListItemsComponent, src_app_pages_terminals_terminals_component__WEBPACK_IMPORTED_MODULE_15__.TerminalsComponent, src_app_pages_operations_operations_component__WEBPACK_IMPORTED_MODULE_16__.OperationsComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.CommonModule, _in_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.InAppRoutingModule, _material_material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ReactiveFormsModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_21__.ScrollingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_22__.HttpClientModule]
        });
      })();
      /***/

    },

    /***/
    52659:
    /*!****************************************************************!*\
      !*** ./src/app/pages/auth-callback/auth-callback.component.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthCallbackComponent": function AuthCallbackComponent() {
          return (
            /* binding */
            _AuthCallbackComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var src_app_components_modal_info_modal_info_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/components/modal-info/modal-info.component */
      30814);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/authentication.service */
      7053);
      /* harmony import */


      var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/app.service */
      66475);

      var _AuthCallbackComponent = /*#__PURE__*/function () {
        function _AuthCallbackComponent(dialog, router, authService, appService) {
          _classCallCheck(this, _AuthCallbackComponent);

          this.dialog = dialog;
          this.router = router;
          this.authService = authService;
          this.appService = appService;
        }

        _createClass(_AuthCallbackComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.info("AuthCallback");
            this.getIpAndStartApp();
          }
        }, {
          key: "getIpAndStartApp",
          value: function getIpAndStartApp() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
              var _this4 = this;

              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.authService.getUser();

                    case 2:
                      this.appService.getIPAddress().subscribe(function (res) {
                        _this4.appService.setIpStorage(res.ip);

                        _this4.authService.completeAuthentication();
                      }, function (err) {
                        _this4.openDialogInfo('Importante !', 'Si tiene activa alguna extensión de bloqueo de publicidad desactívelo para poder navegar. Gracias.', 'info');

                        console.log(err);
                      });

                    case 3:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "openDialogInfo",
          value: function openDialogInfo(title, subtitle, type) {
            var dialogref = this.dialog.open(src_app_components_modal_info_modal_info_component__WEBPACK_IMPORTED_MODULE_0__.ModalInfoComponent, {
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

        return _AuthCallbackComponent;
      }();

      _AuthCallbackComponent.ɵfac = function AuthCallbackComponent_Factory(t) {
        return new (t || _AuthCallbackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService));
      };

      _AuthCallbackComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _AuthCallbackComponent,
        selectors: [["app-auth-callback"]],
        decls: 0,
        vars: 0,
        template: function AuthCallbackComponent_Template(rf, ctx) {},
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLWNhbGxiYWNrLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    20179:
    /*!******************************************************!*\
      !*** ./src/app/pages/commerce/commerce.component.ts ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CommerceComponent": function CommerceComponent() {
          return (
            /* binding */
            _CommerceComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_pages_list_options_list_options_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/pages/list-options/list-options.component */
      89530);

      var _CommerceComponent = /*#__PURE__*/function () {
        function _CommerceComponent(router) {
          _classCallCheck(this, _CommerceComponent);

          this.router = router;
          this.data = {
            title: 'Elige un comercio',
            items: [{
              id: 0,
              title: 'Oechsle'
            }, {
              id: 1,
              title: 'Supermercados peruanos'
            }, {
              id: 2,
              title: 'Promart'
            }, {
              id: 3,
              title: 'Cineplanet'
            }]
          };
        }

        _createClass(_CommerceComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "selectItem",
          value: function selectItem(item) {
            var obj = {
              idCommerce: item.id,
              titleCommerce: item.title
            };
            this.router.navigate(['/dashboard/tienda'], {
              queryParams: obj
            });
          }
        }]);

        return _CommerceComponent;
      }();

      _CommerceComponent.ɵfac = function CommerceComponent_Factory(t) {
        return new (t || _CommerceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
      };

      _CommerceComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _CommerceComponent,
        selectors: [["app-commerce"]],
        decls: 1,
        vars: 1,
        consts: [[3, "inputData", "selectItem"]],
        template: function CommerceComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-list-options", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectItem", function CommerceComponent_Template_app_list_options_selectItem_0_listener($event) {
              return ctx.selectItem($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("inputData", ctx.data);
          }
        },
        directives: [src_app_pages_list_options_list_options_component__WEBPACK_IMPORTED_MODULE_0__.ListOptionsComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21tZXJjZS5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    29391:
    /*!**********************************************************!*\
      !*** ./src/app/pages/commission/commission.component.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CommissionComponent": function CommissionComponent() {
          return (
            /* binding */
            _CommissionComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var src_app_components_modal_upload_modal_upload_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/components/modal-upload/modal-upload.component */
      2194);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment */
      92340);
      /* harmony import */


      var _payrolldetail_payrolldetail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../payrolldetail/payrolldetail.component */
      37434);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_services_commission_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/commission.service */
      80630);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/card */
      42118);
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/expansion */
      22323);
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/grid-list */
      85937);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/form-field */
      65788);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/select */
      37007);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/button */
      70781);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/core */
      32220);
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/table */
      54302);
      /* harmony import */


      var src_app_components_table_footer_table_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/components/table-footer/table-footer.component */
      63321);

      function CommissionComponent_mat_icon_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "keyboard_arrow_down");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function CommissionComponent_mat_icon_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "keyboard_arrow_right");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function CommissionComponent_mat_option_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var lista_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", lista_r5.code);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", lista_r5.value, " ");
        }
      }

      function CommissionComponent_div_38_th_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Periodo ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function CommissionComponent_div_38_td_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r22 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r22.period, "");
        }
      }

      function CommissionComponent_div_38_th_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Cuenta");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function CommissionComponent_div_38_td_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r23 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](element_r23.accountNumber);
        }
      }

      function CommissionComponent_div_38_th_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Tipo Comprobante");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function CommissionComponent_div_38_td_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r24 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](element_r24.voucherType);
        }
      }

      function CommissionComponent_div_38_th_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Total (S/)");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function CommissionComponent_div_38_td_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r25 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](3, 1, element_r25.totalCommission, "1.2-2"));
        }
      }

      function CommissionComponent_div_38_th_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Proceso");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function CommissionComponent_div_38_td_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r26 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](element_r26.processName);
        }
      }

      function CommissionComponent_div_38_th_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Estado");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function CommissionComponent_div_38_td_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r27 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](element_r27.statusName);
        }
      }

      function CommissionComponent_div_38_th_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Opciones");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function CommissionComponent_div_38_td_29_button_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CommissionComponent_div_38_td_29_button_4_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r32);

            var element_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

            return ctx_r30.openDialogUploadCheckDocument(element_r28);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Cargar");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function CommissionComponent_div_38_td_29_Template(rf, ctx) {
        if (rf & 1) {
          var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CommissionComponent_div_38_td_29_Template_button_click_1_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r34);

            var element_r28 = restoredCtx.$implicit;

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

            return ctx_r33.openDialogpayrolldetail(element_r28);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-icon", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "remove_red_eye_outlined ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, CommissionComponent_div_38_td_29_button_4_Template, 3, 0, "button", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r28 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", element_r28.noRequiredStatus == "1" || element_r28.noRequiredStatus == "5" || element_r28.trayStatusId == "3" || element_r28.trayStatusId == "9");
        }
      }

      function CommissionComponent_div_38_tr_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 42);
        }
      }

      function CommissionComponent_div_38_tr_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 43);
        }
      }

      function CommissionComponent_div_38_Template(rf, ctx) {
        if (rf & 1) {
          var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Total de registros: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "table", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](9, 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, CommissionComponent_div_38_th_10_Template, 2, 0, "th", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, CommissionComponent_div_38_td_11_Template, 2, 1, "td", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](12, 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, CommissionComponent_div_38_th_13_Template, 2, 0, "th", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, CommissionComponent_div_38_td_14_Template, 3, 1, "td", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](15, 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, CommissionComponent_div_38_th_16_Template, 2, 0, "th", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, CommissionComponent_div_38_td_17_Template, 3, 1, "td", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](18, 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, CommissionComponent_div_38_th_19_Template, 2, 0, "th", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, CommissionComponent_div_38_td_20_Template, 4, 4, "td", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](21, 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, CommissionComponent_div_38_th_22_Template, 2, 0, "th", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, CommissionComponent_div_38_td_23_Template, 3, 1, "td", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](24, 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, CommissionComponent_div_38_th_25_Template, 2, 0, "th", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, CommissionComponent_div_38_td_26_Template, 3, 1, "td", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](27, 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, CommissionComponent_div_38_th_28_Template, 2, 0, "th", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, CommissionComponent_div_38_td_29_Template, 5, 1, "td", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, CommissionComponent_div_38_tr_30_Template, 1, 0, "tr", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, CommissionComponent_div_38_tr_31_Template, 1, 0, "tr", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "mat-card-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "app-table-footer", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("changePage", function CommissionComponent_div_38_Template_app_table_footer_changePage_33_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r37);

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r36.getAll($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r3.records);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx_r3.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matHeaderRowDef", !ctx_r3.isMobile ? ctx_r3.displayedColumnsFullDesktop : ctx_r3.displayedColumnsFullmovil);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matRowDefColumns", !ctx_r3.isMobile ? ctx_r3.displayedColumnsFullDesktop : ctx_r3.displayedColumnsFullmovil);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("_data", ctx_r3.dataChildren);
        }
      }

      function CommissionComponent_div_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " No se encontraron registros ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0, a1) {
        return {
          "background-gkn-blue-simple": a0,
          "background-gkn-blue-white-simple": a1
        };
      };

      var _CommissionComponent = /*#__PURE__*/function () {
        function _CommissionComponent(dialog, router, commissionService) {
          _classCallCheck(this, _CommissionComponent);

          this.dialog = dialog;
          this.router = router;
          this.commissionService = commissionService;
          this.isMobile = true;
          this.filterIsShow = false;
          this.filterFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
            tipoPeriodo: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(200)]),
            tipoestado: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(200)])
          });
          this.dataSource = [];
          this.dataSelect = {};
          this.lisperiod = [];
          this.displayedColumnsFullDesktop = ["period", 'accountNumber', 'documentType', "totalCommission", "processName", "statusName", "option"];
          this.displayedColumnsFullmovil = ["period", "totalCommission", "statusName", "option"];
          this.isMobile = window.innerWidth <= 750 ? true : false;
        }

        _createClass(_CommissionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.isMobile = window.innerWidth <= 750 ? true : false;
            this.initAndLoad();
          }
        }, {
          key: "onResize",
          value: function onResize(event) {
            this.isMobile = window.innerWidth <= 750 ? true : false;
          }
        }, {
          key: "collapseChange",
          value: function collapseChange() {
            this.filterIsShow = !this.filterIsShow;
          }
        }, {
          key: "initAndLoad",
          value: function initAndLoad() {
            this.filterList();
            this.getAllApplication();
          }
        }, {
          key: "filterList",
          value: function filterList() {
            this.getAll({
              pages: 1,
              sizes: src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.paginate
            });
          }
        }, {
          key: "getAll",
          value: function getAll(obj) {
            var _this5 = this;

            var tipoPeriodo = this.filterFormGroup.controls.tipoPeriodo.value == null ? '' : this.filterFormGroup.controls.tipoPeriodo.value;
            this.commissionService.getAlltray(tipoPeriodo, '', obj.pages, obj.sizes).subscribe(function (data) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this5, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
                return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        this.dataChildren = data.data;
                        this.dataSource = this.dataChildren.items;
                        this.records = this.dataChildren.totalCount;

                      case 3:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, _callee6, this);
              }));
            }, function (err) {
              if (err.status === 401 || err.status === 403) {}

              console.log("config Error :" + err);
            });
          }
        }, {
          key: "getAllApplication",
          value: function getAllApplication() {
            var _this6 = this;

            this.commissionService.getperiods().subscribe(function (data) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(_this6, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
                return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                  while (1) {
                    switch (_context7.prev = _context7.next) {
                      case 0:
                        this.lisperiod = data.data;

                      case 1:
                      case "end":
                        return _context7.stop();
                    }
                  }
                }, _callee7, this);
              }));
            }, function (err) {
              if (err.status === 401 || err.status === 403) {}

              console.log(err);
            });
          }
        }, {
          key: "onlyNumberKey",
          value: function onlyNumberKey(event) {
            return event.charCode >= 48 && event.charCode <= 57;
          }
        }, {
          key: "openDialogUploadCheckDocument",
          value: function openDialogUploadCheckDocument(itemtSelect) {
            var _this7 = this;

            this.dataSelect = itemtSelect;
            var dialogref = this.dialog.open(src_app_components_modal_upload_modal_upload_component__WEBPACK_IMPORTED_MODULE_0__.ModalUploadComponent, {
              disableClose: true,
              width: this.isMobile ? '100%' : '650px',
              data: {
                title: 'Carga de comprobante de pago',
                subtitle: ' ',
                obj: this.dataSelect.id
              }
            });
            dialogref.afterClosed().subscribe(function (response) {
              if (response !== false) {
                _this7.filterList();
              }
            });
          }
        }, {
          key: "openDialogpayrolldetail",
          value: function openDialogpayrolldetail(itemtSelect) {
            this.dataSelect = itemtSelect;
            var dialogref = this.dialog.open(_payrolldetail_payrolldetail_component__WEBPACK_IMPORTED_MODULE_2__.PayrolldetailComponent, {
              disableClose: true,
              width: this.isMobile ? '100%' : '70%',
              data: {
                title: '',
                subtitle: ' ',
                obj: this.dataSelect.id
              }
            });
            dialogref.afterClosed().subscribe(function (response) {
              if (response !== false) {
                console.info('response :' + response);
              }
            });
          }
        }]);

        return _CommissionComponent;
      }();

      _CommissionComponent.ɵfac = function CommissionComponent_Factory(t) {
        return new (t || _CommissionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_commission_service__WEBPACK_IMPORTED_MODULE_3__.CommissionService));
      };

      _CommissionComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: _CommissionComponent,
        selectors: [["app-commission"]],
        decls: 40,
        vars: 13,
        consts: [[1, "padding-div", 3, "ngClass"], ["align", "center"], [1, "example-headers-align", 3, "multi"], ["hideToggle", "", 3, "expanded", "opened", "closed"], [1, "example-headers-align", "standard-width"], [1, "strong"], [1, "title-accordion"], [1, "icon-accordion", "align-content-end2"], [4, "ngIf"], ["rowHeight", "80px", 3, "cols", "resize"], [3, "formGroup"], ["appearance", "outline", 1, "mat-input-sm"], ["formControlName", "tipoPeriodo"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-button", "", "mat-raised-button", "", 3, "click"], [1, "icon-regular"], ["mat-raised-button", "", 1, "btn-gkn-md", "btn-gkn-secondary", 3, "click"], ["class", "container-gkn-white-br", 4, "ngIf"], [3, "value"], [1, "container-gkn-white-br"], [1, "align-content-end"], [1, "mat-elevation-z1", "standard-width"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "period"], ["mat-header-cell", "", "class", "mat-label", 4, "matHeaderCellDef"], ["align", "center", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "accountNumber"], ["matColumnDef", "documentType", 1, "hidden-sm"], ["matColumnDef", "totalCommission"], ["matColumnDef", "processName", 1, "hidden-sm"], ["matColumnDef", "statusName"], ["matColumnDef", "option"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "_data", "changePage"], ["mat-header-cell", "", 1, "mat-label"], ["align", "center", "mat-cell", ""], ["title", "Detalle", "mat-icon-button", "", 3, "click"], ["title", "Detalle", 1, "btn-gkn-primary-icon"], ["title", "Cargar", "mat-icon-button", "", 3, "click", 4, "ngIf"], ["title", "Cargar", "mat-icon-button", "", 3, "click"], [1, "btn-gkn-link"], ["mat-header-row", ""], ["mat-row", ""], [1, "text-center-table"]],
        template: function CommissionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "h6", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Documentos y Pagos");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-accordion", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "mat-expansion-panel", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("opened", function CommissionComponent_Template_mat_expansion_panel_opened_9_listener() {
              return ctx.collapseChange();
            })("closed", function CommissionComponent_Template_mat_expansion_panel_closed_9_listener() {
              return ctx.collapseChange();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-expansion-panel-header", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "strong", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "FILTROS ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "mat-panel-description", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, " \xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, CommissionComponent_mat_icon_17_Template, 2, 0, "mat-icon", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, CommissionComponent_mat_icon_18_Template, 2, 0, "mat-icon", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "mat-grid-list", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("resize", function CommissionComponent_Template_mat_grid_list_resize_19_listener($event) {
              return ctx.onResize($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveWindow"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "form", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "mat-grid-tile");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "mat-form-field", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Periodo");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "mat-select", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, CommissionComponent_mat_option_26_Template, 2, 2, "mat-option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "mat-action-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CommissionComponent_Template_button_click_28_listener() {
              ctx.filterFormGroup.reset();
              return ctx.filterList();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, " Limpiar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, " \xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "mat-icon", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "cleaning_services");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CommissionComponent_Template_button_click_34_listener() {
              return ctx.filterList();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, " Buscar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](36, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](38, CommissionComponent_div_38_Template, 34, 5, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](39, CommissionComponent_div_39_Template, 7, 0, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](10, _c0, ctx.isMobile, !ctx.isMobile));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("multi", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("expanded", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.filterIsShow);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.filterIsShow);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("cols", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.filterFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.lisperiod);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.dataSource == null ? null : ctx.dataSource.length) > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.dataSource == null ? null : ctx.dataSource.length) < 1);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardTitle, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__.MatExpansionPanelTitle, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__.MatExpansionPanelDescription, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__.MatGridList, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__.MatGridTile, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__.MatExpansionPanelActionRow, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon, _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatOption, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatRowDef, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardFooter, src_app_components_table_footer_table_footer_component__WEBPACK_IMPORTED_MODULE_4__.TableFooterComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatRow],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.DecimalPipe],
        styles: [".align-content-end[_ngcontent-%COMP%]{\r\n    text-align: end;\r\n    padding-right: 2%;\r\n}\r\n.align-content-end2[_ngcontent-%COMP%]{\r\n    text-align: end;\r\n    padding-right: 25px;\r\n}\r\n@media screen and (max-width: 1100px) {\r\n\t\r\n\t.table-container[_ngcontent-%COMP%]{\r\n\t\twidth: 100%;\r\n\t\toverflow-x: scroll !important;\r\n\t}\r\n\t  table.mat-table {\r\n\t\tborder-spacing: 0;\r\n\t\tmargin-left: 0px;\r\n\t\tpadding: 0%;\r\n\t}\r\n\r\n\t.mat-icon-button[_ngcontent-%COMP%] {\r\n\t\tmargin-top: -5px;\r\n\t\tmargin-bottom: -5px;\r\n\t}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1pc3Npb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCO0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckI7RUFDQyxXQUFXO0VBQ1gsNkJBQTZCO0NBQzlCO0NBQ0E7RUFDQyxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFdBQVc7Q0FDWjs7Q0FFQTtFQUNDLGdCQUFnQjtFQUNoQixtQkFBbUI7Q0FDcEI7QUFDRCIsImZpbGUiOiJjb21taXNzaW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmFsaWduLWNvbnRlbnQtZW5ke1xyXG4gICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgcGFkZGluZy1yaWdodDogMiU7XHJcbn1cclxuLmFsaWduLWNvbnRlbnQtZW5kMntcclxuICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDBweCkge1xyXG5cdC8qIFZJUlRVQUwgQUNDT1VOVFMgKi9cclxuXHQudGFibGUtY29udGFpbmVye1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRvdmVyZmxvdy14OiBzY3JvbGwgIWltcG9ydGFudDtcclxuXHR9XHJcblx0OjpuZy1kZWVwIHRhYmxlLm1hdC10YWJsZSB7XHJcblx0XHRib3JkZXItc3BhY2luZzogMDtcclxuXHRcdG1hcmdpbi1sZWZ0OiAwcHg7XHJcblx0XHRwYWRkaW5nOiAwJTtcclxuXHR9XHJcblxyXG5cdC5tYXQtaWNvbi1idXR0b24ge1xyXG5cdFx0bWFyZ2luLXRvcDogLTVweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IC01cHg7XHJcblx0fVxyXG59Il19 */"]
      });
      /***/
    },

    /***/
    25245:
    /*!**********************************************!*\
      !*** ./src/app/pages/home/home.component.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomeComponent": function HomeComponent() {
          return (
            /* binding */
            _HomeComponent
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
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/grid-list */
      85937);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);

      var _HomeComponent = /*#__PURE__*/function () {
        function _HomeComponent(router) {
          _classCallCheck(this, _HomeComponent);

          this.router = router;
        }

        _createClass(_HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "go",
          value: function go(path) {
            // operations
            // eecc
            // vouchers
            // commerce
            var params = {
              parent: path
            };

            if (path == 'operations') {
              this.router.navigate(['/dashboard/terminales'], {
                queryParams: params
              });
            } else if (path == 'eecc') {
              this.router.navigate(['/dashboard/comercio']);
            } else if (path == 'vouchers') {
              this.router.navigate(['/dashboard/comercio']);
            } else if (path == 'commerce') {
              this.router.navigate(['/dashboard/comercio']);
            }
          }
        }]);

        return _HomeComponent;
      }();

      _HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || _HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
      };

      _HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _HomeComponent,
        selectors: [["app-home"]],
        decls: 30,
        vars: 1,
        consts: [[1, "menu--container--parent"], ["rowHeight", "11.75em", 1, "menu--container", 3, "cols"], [1, "menu--option", 3, "click"], [1, "menu--option--container", "menu--option--container-first"], [1, "menu--option--icon", "menu--option--icon-first"], [1, "menu--option--icon-p"], [1, "menu--option--container", "menu--option--container-second"], [1, "menu--option--icon", "menu--option--icon-second"], [1, "menu--option--container", "menu--option--container-three"], [1, "menu--option--icon", "menu--option--icon-three"], [1, "menu--option--container", "menu--option--container-four"], [1, "menu--option--icon", "menu--option--icon-four"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-grid-list", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-grid-tile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_3_listener() {
              return ctx.go("operations");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "assessment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Operaciones");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-grid-tile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_10_listener() {
              return ctx.go("eecc");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "attach_money");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "EECC");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-grid-tile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_17_listener() {
              return ctx.go("vouchers");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-icon", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Comprobantes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-grid-tile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_24_listener() {
              return ctx.go("commerce");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-icon", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Comercio - Tienda");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cols", 2);
          }
        },
        directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__.MatGridList, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__.MatGridTile, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon],
        styles: [".menu--container[_ngcontent-%COMP%]{\r\n  max-width: 85%;\r\n  margin: auto;\r\n}\r\n\r\n.menu--option--container[_ngcontent-%COMP%]{\r\n  background-color: #FFF8DC;\r\n  padding: 4em;\r\n  border-radius: 25px;\r\n  vertical-align: middle;\r\n  text-align: center;\r\n}\r\n\r\n.menu--option--icon[_ngcontent-%COMP%]{\r\n  transform: scale(3);\r\n}\r\n\r\n.menu--option--icon-first[_ngcontent-%COMP%]{\r\n  color: #F2C94C;\r\n}\r\n\r\n.menu--option--container-first[_ngcontent-%COMP%]{\r\n  background-color: #FFF8DC;\r\n}\r\n\r\n.menu--option--icon-second[_ngcontent-%COMP%]{\r\n  color: #109CF1;\r\n}\r\n\r\n.menu--option--container-second[_ngcontent-%COMP%]{\r\n  background-color: #F1FAFF;\r\n}\r\n\r\n.menu--option--icon-three[_ngcontent-%COMP%]{\r\n  color: #27AE60;\r\n}\r\n\r\n.menu--option--container-three[_ngcontent-%COMP%]{\r\n  background-color: #E8FFF3;\r\n}\r\n\r\n.menu--option--icon-four[_ngcontent-%COMP%]{\r\n  color: #F2C94C;\r\n}\r\n\r\n.menu--option--container-four[_ngcontent-%COMP%]{\r\n  background-color: #FFF8DC;\r\n}\r\n\r\n.menu--container--parent[_ngcontent-%COMP%]{\r\n  min-height: 80vh; vertical-align: middle; margin-top: 5em;\r\n}\r\n\r\n.menu--option[_ngcontent-%COMP%]{\r\n  display: block;\r\n}\r\n\r\n.menu--option--icon-p[_ngcontent-%COMP%]{\r\n  line-height: 0; color: #F2C94C; text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUNBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGdCQUFnQixFQUFFLHNCQUFzQixFQUFFLGVBQWU7QUFDM0Q7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYyxFQUFFLGNBQWMsRUFBRSxrQkFBa0I7QUFDcEQiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnUtLWNvbnRhaW5lcntcclxuICBtYXgtd2lkdGg6IDg1JTtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5tZW51LS1vcHRpb24tLWNvbnRhaW5lcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGOERDO1xyXG4gIHBhZGRpbmc6IDRlbTtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubWVudS0tb3B0aW9uLS1pY29ue1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMyk7XHJcbn1cclxuXHJcbi5tZW51LS1vcHRpb24tLWljb24tZmlyc3R7XHJcbiAgY29sb3I6ICNGMkM5NEM7XHJcbn1cclxuLm1lbnUtLW9wdGlvbi0tY29udGFpbmVyLWZpcnN0e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY4REM7XHJcbn1cclxuXHJcbi5tZW51LS1vcHRpb24tLWljb24tc2Vjb25ke1xyXG4gIGNvbG9yOiAjMTA5Q0YxO1xyXG59XHJcbi5tZW51LS1vcHRpb24tLWNvbnRhaW5lci1zZWNvbmR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YxRkFGRjtcclxufVxyXG5cclxuLm1lbnUtLW9wdGlvbi0taWNvbi10aHJlZXtcclxuICBjb2xvcjogIzI3QUU2MDtcclxufVxyXG4ubWVudS0tb3B0aW9uLS1jb250YWluZXItdGhyZWV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U4RkZGMztcclxufVxyXG5cclxuLm1lbnUtLW9wdGlvbi0taWNvbi1mb3Vye1xyXG4gIGNvbG9yOiAjRjJDOTRDO1xyXG59XHJcbi5tZW51LS1vcHRpb24tLWNvbnRhaW5lci1mb3Vye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY4REM7XHJcbn1cclxuXHJcbi5tZW51LS1jb250YWluZXItLXBhcmVudHtcclxuICBtaW4taGVpZ2h0OiA4MHZoOyB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyBtYXJnaW4tdG9wOiA1ZW07XHJcbn1cclxuXHJcbi5tZW51LS1vcHRpb257XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5tZW51LS1vcHRpb24tLWljb24tcHtcclxuICBsaW5lLWhlaWdodDogMDsgY29sb3I6ICNGMkM5NEM7IHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuIl19 */"]
      });
      /***/
    },

    /***/
    35387:
    /*!**********************************************************!*\
      !*** ./src/app/pages/list-items/list-items.component.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ListItemsComponent": function ListItemsComponent() {
          return (
            /* binding */
            _ListItemsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/list */
      28417);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      54364);

      function ListItemsComponent_mat_list_item_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListItemsComponent_mat_list_item_4_Template_div_click_1_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var item_r1 = restoredCtx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.clickItem(item_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.type, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.date, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" S/.", item_r1.ammount, " ");
        }
      }

      var _ListItemsComponent = /*#__PURE__*/function () {
        function _ListItemsComponent() {
          _classCallCheck(this, _ListItemsComponent);

          this.selectItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        }

        _createClass(_ListItemsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log(this.inputData);
          }
        }, {
          key: "clickItem",
          value: function clickItem(item) {
            this.selectItem.emit(item);
          }
        }]);

        return _ListItemsComponent;
      }();

      _ListItemsComponent.ɵfac = function ListItemsComponent_Factory(t) {
        return new (t || _ListItemsComponent)();
      };

      _ListItemsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _ListItemsComponent,
        selectors: [["app-list-items"]],
        inputs: {
          inputData: "inputData"
        },
        outputs: {
          selectItem: "selectItem"
        },
        decls: 5,
        vars: 2,
        consts: [[2, "padding", "1em"], ["role", "list", 2, "padding", "1em"], ["role", "listitem", 1, "list--items--title"], ["role", "listitem", "class", "list--items--item", 4, "ngFor", "ngForOf"], ["role", "listitem", 1, "list--items--item"], [1, "grid-container", 3, "click"], [1, "list--items--item--type"], [1, "list--items--item--text"], [1, "list--items--item--text-primary"], [1, "list--items--item--text-secondary"], [1, "list--items--item-end"]],
        template: function ListItemsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-list-item", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ListItemsComponent_mat_list_item_4_Template, 11, 4, "mat-list-item", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.inputData.title, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.inputData.items);
          }
        },
        directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_1__.MatList, _angular_material_list__WEBPACK_IMPORTED_MODULE_1__.MatListItem, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf],
        styles: [".list--items--title[_ngcontent-%COMP%]{\r\n  font-weight: bolder;\r\n  color: white;\r\n  margin-left: -1em;\r\n}\r\n\r\n.list--items--item[_ngcontent-%COMP%]{\r\n  border-bottom: 1px solid #EAEAEA;\r\n  padding: 0;\r\n\r\n  border-bottom: 1px solid #EAEAEA;\r\n  padding-top: 14px !important;\r\n  height: 40px !important;\r\n}\r\n\r\n.list--items--item--type[_ngcontent-%COMP%]{\r\n  height: 25px;\r\n  width: 25px;\r\n  background-color: #F0C91C;\r\n  border-radius: 25px;\r\n  box-sizing: border-box;\r\n  padding-left: 7px;\r\n  padding-top: 4px;\r\n  margin-left: -1em;\r\n}\r\n\r\n.list--items--item--text[_ngcontent-%COMP%]{\r\n  margin-left: -1em;\r\n  color: white;\r\n}\r\n\r\n.grid-container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  display: grid;\r\n  grid-template-columns: 10% 65% 25%;\r\n  grid-gap: 5px;\r\n  \r\n}\r\n\r\n.colum-container[_ngcontent-%COMP%] {\r\n  grid-column: 1 / span 3;\r\n}\r\n\r\n.mat-list-item-content[_ngcontent-%COMP%]{\r\n  padding: 0;\r\n}\r\n\r\n.list--items--item-end[_ngcontent-%COMP%]{\r\n  text-align: end;\r\n  vertical-align: middle;\r\n  color: white;\r\n  margin-top: 5px;\r\n}\r\n\r\n.list--items--item--text-primary[_ngcontent-%COMP%]{\r\n  font-weight: bold;\r\n}\r\n\r\n.list--items--item--text-secondary[_ngcontent-%COMP%]{\r\n  color: #B9B2C4;\r\n  font-size: 0.85em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QtaXRlbXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxVQUFVOztFQUVWLGdDQUFnQztFQUNoQyw0QkFBNEI7RUFDNUIsdUJBQXVCO0FBQ3pCOztBQUdBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxhQUFhO0VBQ2IsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkIiLCJmaWxlIjoibGlzdC1pdGVtcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5saXN0LS1pdGVtcy0tdGl0bGV7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xZW07XHJcbn1cclxuXHJcbi5saXN0LS1pdGVtcy0taXRlbXtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0VBRUFFQTtcclxuICBwYWRkaW5nOiAwO1xyXG5cclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0VBRUFFQTtcclxuICBwYWRkaW5nLXRvcDogMTRweCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLmxpc3QtLWl0ZW1zLS1pdGVtLS10eXBle1xyXG4gIGhlaWdodDogMjVweDtcclxuICB3aWR0aDogMjVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBDOTFDO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwYWRkaW5nLWxlZnQ6IDdweDtcclxuICBwYWRkaW5nLXRvcDogNHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMWVtO1xyXG59XHJcblxyXG4ubGlzdC0taXRlbXMtLWl0ZW0tLXRleHR7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xZW07XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZ3JpZC1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMCUgNjUlIDI1JTtcclxuICBncmlkLWdhcDogNXB4O1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7ICovXHJcbn1cclxuXHJcbi5jb2x1bS1jb250YWluZXIge1xyXG4gIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAzO1xyXG59XHJcblxyXG4ubWF0LWxpc3QtaXRlbS1jb250ZW50e1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5saXN0LS1pdGVtcy0taXRlbS1lbmR7XHJcbiAgdGV4dC1hbGlnbjogZW5kO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLmxpc3QtLWl0ZW1zLS1pdGVtLS10ZXh0LXByaW1hcnl7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5saXN0LS1pdGVtcy0taXRlbS0tdGV4dC1zZWNvbmRhcnl7XHJcbiAgY29sb3I6ICNCOUIyQzQ7XHJcbiAgZm9udC1zaXplOiAwLjg1ZW07XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    89530:
    /*!**************************************************************!*\
      !*** ./src/app/pages/list-options/list-options.component.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ListOptionsComponent": function ListOptionsComponent() {
          return (
            /* binding */
            _ListOptionsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/list */
      28417);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);

      function ListOptionsComponent_mat_list_item_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListOptionsComponent_mat_list_item_4_Template_div_click_1_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var item_r1 = restoredCtx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.clickItem(item_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "keyboard_arrow_right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.title, " ");
        }
      }

      var _ListOptionsComponent = /*#__PURE__*/function () {
        function _ListOptionsComponent() {
          _classCallCheck(this, _ListOptionsComponent);

          this.selectItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        }

        _createClass(_ListOptionsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log(this.inputData.items);
          }
        }, {
          key: "clickItem",
          value: function clickItem(item) {
            this.selectItem.emit(item);
          }
        }]);

        return _ListOptionsComponent;
      }();

      _ListOptionsComponent.ɵfac = function ListOptionsComponent_Factory(t) {
        return new (t || _ListOptionsComponent)();
      };

      _ListOptionsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _ListOptionsComponent,
        selectors: [["app-list-options"]],
        inputs: {
          inputData: "inputData"
        },
        outputs: {
          selectItem: "selectItem"
        },
        decls: 5,
        vars: 2,
        consts: [[2, "padding", "1em"], ["role", "list", 2, "background-color", "#F0C91C", "padding", "1em"], ["role", "listitem", 1, "list--options--title"], ["role", "listitem", "class", "list--options--item", 4, "ngFor", "ngForOf"], ["role", "listitem", 1, "list--options--item"], [1, "grid-container", 3, "click"], [1, "list--options--item--text"], [1, "list--options--item-icon"]],
        template: function ListOptionsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-list-item", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ListOptionsComponent_mat_list_item_4_Template, 7, 1, "mat-list-item", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.inputData.title, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.inputData.items);
          }
        },
        directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_1__.MatList, _angular_material_list__WEBPACK_IMPORTED_MODULE_1__.MatListItem, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon],
        styles: [".list--options--title[_ngcontent-%COMP%]{\r\n  font-weight: bolder;\r\n  color: #20488E;\r\n  margin-left: -1em;\r\n}\r\n\r\n.list--options--item[_ngcontent-%COMP%]{\r\n  border-bottom: 1px solid #20488E;\r\n  padding: 0;\r\n\r\n  border-bottom: 1px solid #20488E;\r\n  padding-top: 14px !important;\r\n  height: 34px !important;\r\n}\r\n\r\n.list--options--item--text[_ngcontent-%COMP%]{\r\n  margin-left: -1em;\r\n}\r\n\r\n.grid-container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  display: grid;\r\n  grid-template-columns: 75% 25%;\r\n  grid-gap: 10px;\r\n  \r\n}\r\n\r\n.colum-container[_ngcontent-%COMP%] {\r\n  grid-column: 1 / span 2;\r\n}\r\n\r\n.mat-list-item-content[_ngcontent-%COMP%]{\r\n  padding: 0;\r\n}\r\n\r\n.list--options--item-icon[_ngcontent-%COMP%]{\r\n  text-align: end;\r\n  margin-top: -5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3Qtb3B0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsVUFBVTs7RUFFVixnQ0FBZ0M7RUFDaEMsNEJBQTRCO0VBQzVCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGNBQWM7RUFDZCwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6Imxpc3Qtb3B0aW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3QtLW9wdGlvbnMtLXRpdGxle1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgY29sb3I6ICMyMDQ4OEU7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xZW07XHJcbn1cclxuXHJcbi5saXN0LS1vcHRpb25zLS1pdGVte1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMjA0ODhFO1xyXG4gIHBhZGRpbmc6IDA7XHJcblxyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMjA0ODhFO1xyXG4gIHBhZGRpbmctdG9wOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAzNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5saXN0LS1vcHRpb25zLS1pdGVtLS10ZXh0e1xyXG4gIG1hcmdpbi1sZWZ0OiAtMWVtO1xyXG59XHJcblxyXG4uZ3JpZC1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3NSUgMjUlO1xyXG4gIGdyaWQtZ2FwOiAxMHB4O1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7ICovXHJcbn1cclxuXHJcbi5jb2x1bS1jb250YWluZXIge1xyXG4gIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAyO1xyXG59XHJcblxyXG4ubWF0LWxpc3QtaXRlbS1jb250ZW50e1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5saXN0LS1vcHRpb25zLS1pdGVtLWljb257XHJcbiAgdGV4dC1hbGlnbjogZW5kO1xyXG4gIG1hcmdpbi10b3A6IC01cHg7XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    30446:
    /*!**********************************************************!*\
      !*** ./src/app/pages/operations/operations.component.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OperationsComponent": function OperationsComponent() {
          return (
            /* binding */
            _OperationsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);
      /* harmony import */


      var src_app_pages_list_items_list_items_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/pages/list-items/list-items.component */
      35387);

      var _OperationsComponent = /*#__PURE__*/function () {
        function _OperationsComponent(router, activatedRoute) {
          _classCallCheck(this, _OperationsComponent);

          this.router = router;
          this.activatedRoute = activatedRoute;
          this.data = {
            title: 'Operaciones',
            items: [{
              id: 0,
              type: 'D',
              title: 'Scotiabank',
              date: '13 Ene 2022   3:24 PM',
              ammount: 32.24
            }, {
              id: 1,
              type: 'R',
              title: 'Caja Arequipa',
              date: '13 Ene 2022   3:24 PM',
              ammount: 20
            }, {
              id: 2,
              type: 'D',
              title: 'Mi Banco',
              date: '13 Ene 2022   3:24 PM',
              ammount: 102.24
            }, {
              id: 3,
              type: 'T',
              title: 'Caja Huancayo',
              date: '13 Ene 2022   3:24 PM',
              ammount: 50.55
            }]
          };
        }

        _createClass(_OperationsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this8 = this;

            this.activatedRoute.queryParams.subscribe(function (params) {
              var obj = {
                id: params.idCommerce,
                title: params.titleCommerce
              };
              _this8.currentCommerce = obj;
            });
          }
        }, {
          key: "selectItem",
          value: function selectItem(item) {}
        }, {
          key: "changeTerminal",
          value: function changeTerminal() {
            var params = {
              parent: 'operations'
            };
            this.router.navigate(['/dashboard/terminales'], {
              queryParams: params
            });
          }
        }]);

        return _OperationsComponent;
      }();

      _OperationsComponent.ɵfac = function OperationsComponent_Factory(t) {
        return new (t || _OperationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute));
      };

      _OperationsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _OperationsComponent,
        selectors: [["app-operations"]],
        decls: 15,
        vars: 1,
        consts: [[2, "padding-left", "2em", "padding-right", "2em", "margin-top", "1em"], [1, "grid-container", 3, "click"], [1, "list--options--item--text"], [1, "list--options--item-mid"], [1, "list--options--item-pre-end"], [1, "list--options--item-end"], [3, "inputData", "selectItem"]],
        template: function OperationsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OperationsComponent_Template_div_click_3_listener() {
              return ctx.changeTerminal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Terminal ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " 21478101 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Cambiar terminal ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-icon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "refresh");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "app-list-items", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectItem", function OperationsComponent_Template_app_list_items_selectItem_14_listener($event) {
              return ctx.selectItem($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("inputData", ctx.data);
          }
        },
        directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, src_app_pages_list_items_list_items_component__WEBPACK_IMPORTED_MODULE_0__.ListItemsComponent],
        styles: [".grid-container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  display: grid;\r\n  grid-template-columns: 25% 30% 37.5% 7.5%;\r\n  grid-gap: 0;\r\n  \r\n}\r\n\r\n.colum-container[_ngcontent-%COMP%] {\r\n  grid-column: 1 / span 3;\r\n}\r\n\r\n.list--options--item--text[_ngcontent-%COMP%]{\r\n  color: white;\r\n}\r\n\r\n.list--options--item-mid[_ngcontent-%COMP%]{\r\n  color: #B9B2C4;\r\n}\r\n\r\n.list--options--item-pre-end[_ngcontent-%COMP%]{\r\n  vertical-align: top;\r\n  \r\n  color: #F2C94C;\r\n  font-size: 0.9em;\r\n}\r\n\r\n.list--options--item-end[_ngcontent-%COMP%]{\r\n  color: #F2C94C;\r\n  margin-top: -2.5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wZXJhdGlvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IseUNBQXlDO0VBQ3pDLFdBQVc7RUFDWCwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJvcGVyYXRpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZC1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNSUgMzAlIDM3LjUlIDcuNSU7XHJcbiAgZ3JpZC1nYXA6IDA7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMzsgKi9cclxufVxyXG5cclxuLmNvbHVtLWNvbnRhaW5lciB7XHJcbiAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDM7XHJcbn1cclxuXHJcbi5saXN0LS1vcHRpb25zLS1pdGVtLS10ZXh0e1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmxpc3QtLW9wdGlvbnMtLWl0ZW0tbWlke1xyXG4gIGNvbG9yOiAjQjlCMkM0O1xyXG59XHJcblxyXG4ubGlzdC0tb3B0aW9ucy0taXRlbS1wcmUtZW5ke1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgLyogbWFyZ2luLXRvcDogLTEwcHg7ICovXHJcbiAgY29sb3I6ICNGMkM5NEM7XHJcbiAgZm9udC1zaXplOiAwLjllbTtcclxufVxyXG5cclxuLmxpc3QtLW9wdGlvbnMtLWl0ZW0tZW5ke1xyXG4gIGNvbG9yOiAjRjJDOTRDO1xyXG4gIG1hcmdpbi10b3A6IC0yLjVweDtcclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    37434:
    /*!****************************************************************!*\
      !*** ./src/app/pages/payrolldetail/payrolldetail.component.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PayrolldetailComponent": function PayrolldetailComponent() {
          return (
            /* binding */
            _PayrolldetailComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var src_app_components_modal_info_modal_info_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/components/modal-info/modal-info.component */
      30814);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_services_commission_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/commission.service */
      80630);
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/expansion */
      22323);
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/grid-list */
      85937);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      70781);

      function PayrolldetailComponent_tr_222_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Ver documento");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx_r0.storageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        }
      }

      function PayrolldetailComponent_mat_expansion_panel_262_ng_container_6_hr_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "hr");
        }
      }

      var _c0 = function _c0(a0, a1, a2) {
        return {
          "pendiente": a0,
          "aprobado": a1,
          "noRequerido": a2
        };
      };

      function PayrolldetailComponent_mat_expansion_panel_262_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Entidad Financiera: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " Cuenta: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " Tipo de cuenta: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " Tipo de pago: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, " Fecha de pago: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](29, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, " Monto (S/): ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](35, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, " Proceso: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, " Estado: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, " Observaci\xF3n pago: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](53, PayrolldetailComponent_mat_expansion_panel_262_ng_container_6_hr_53_Template, 1, 0, "hr", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var paymentData_r3 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", paymentData_r3.bankName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", paymentData_r3.accountNumber, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", paymentData_r3.accountType, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", paymentData_r3.type, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](29, 11, paymentData_r3.paymentDate, "dd/MM/yyyy"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](35, 14, paymentData_r3.totalCommission, "1.2-2"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", paymentData_r3.process, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](17, _c0, paymentData_r3.status == "Pendiente", paymentData_r3.status == "Aprobado", paymentData_r3.status == "No requerido"));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", paymentData_r3.status, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", paymentData_r3.observation, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r2.dataComision == null ? null : ctx_r2.dataComision.paymentsData == null ? null : ctx_r2.dataComision.paymentsData.length) == 2);
        }
      }

      function PayrolldetailComponent_mat_expansion_panel_262_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-expansion-panel", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-expansion-panel-header", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-panel-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "strong", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Datos de Pago ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-grid-list", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, PayrolldetailComponent_mat_expansion_panel_262_ng_container_6_Template, 54, 21, "ng-container", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("expanded", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cols", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.dataComision == null ? null : ctx_r1.dataComision.paymentsData);
        }
      }

      var _PayrolldetailComponent = /*#__PURE__*/function () {
        function _PayrolldetailComponent(dialogRef, dialog, commissionService, data) {
          _classCallCheck(this, _PayrolldetailComponent);

          this.dialogRef = dialogRef;
          this.dialog = dialog;
          this.commissionService = commissionService;
          this.data = data;
          this.storageUrl = '';
          this.dataComision = {};
        }

        _createClass(_PayrolldetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getDetail(this.data.obj);
            this.getFile(this.data.obj);
          }
        }, {
          key: "onVerdocumento",
          value: function onVerdocumento() {
            this.openDialogInfo("Revisar documento de facturación", "<div class='auto' align='center'><img class='auto' src='assets/images/Captura.PNG'></div>", "");
          }
        }, {
          key: "onNoClick",
          value: function onNoClick() {
            this.dialogRef.close();
          }
        }, {
          key: "getDetail",
          value: function getDetail(id) {
            var _this9 = this;

            this.commissionService.gettray(id).subscribe(function (data) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(_this9, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
                return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                  while (1) {
                    switch (_context8.prev = _context8.next) {
                      case 0:
                        if (data.data !== null) {
                          this.dataComision = data.data;
                        } else {
                          this.dataComision = {};
                        }

                      case 1:
                      case "end":
                        return _context8.stop();
                    }
                  }
                }, _callee8, this);
              }));
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "getFile",
          value: function getFile(id) {
            var _this10 = this;

            this.commissionService.getfile(id).subscribe(function (data) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(_this10, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
                var index, element;
                return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                  while (1) {
                    switch (_context9.prev = _context9.next) {
                      case 0:
                        if (!(data.data !== null)) {
                          _context9.next = 12;
                          break;
                        }

                        index = 0;

                      case 2:
                        if (!(index < data.data.length)) {
                          _context9.next = 10;
                          break;
                        }

                        element = data.data[index];

                        if (!(element.contentType == 'application/pdf' || element.contentType.includes('image'))) {
                          _context9.next = 7;
                          break;
                        }

                        this.storageUrl = element.storageUrl;
                        return _context9.abrupt("return");

                      case 7:
                        index++;
                        _context9.next = 2;
                        break;

                      case 10:
                        _context9.next = 14;
                        break;

                      case 12:
                        this.storageUrl = '';
                        return _context9.abrupt("return");

                      case 14:
                      case "end":
                        return _context9.stop();
                    }
                  }
                }, _callee9, this);
              }));
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "openDialogInfo",
          value: function openDialogInfo(title, subtitle, type) {
            var dialogref = this.dialog.open(src_app_components_modal_info_modal_info_component__WEBPACK_IMPORTED_MODULE_0__.ModalInfoComponent, {
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

        return _PayrolldetailComponent;
      }();

      _PayrolldetailComponent.ɵfac = function PayrolldetailComponent_Factory(t) {
        return new (t || _PayrolldetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_commission_service__WEBPACK_IMPORTED_MODULE_1__.CommissionService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA));
      };

      _PayrolldetailComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _PayrolldetailComponent,
        selectors: [["app-payrolldetail"]],
        decls: 267,
        vars: 92,
        consts: [["mat-dialog-title", ""], ["mat-dialog-content", "", 1, "mat-dialog-content"], [1, "example-headers-align", 3, "multi"], ["hideToggle", "", 3, "expanded"], [1, "example-headers-align", "standard-width"], [1, "strong"], [3, "cols"], [3, "ngClass"], [4, "ngIf"], ["hideToggle", "", 3, "expanded", 4, "ngIf"], ["mat-dialog-actions", "", "align", "end"], ["mat-raised-button", "", 1, "btn-gkn-md", "btn-gkn-primary", 3, "click"], ["colspan", "3"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"], [4, "ngFor", "ngForOf"]],
        template: function PayrolldetailComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-accordion", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-expansion-panel", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-expansion-panel-header", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "strong", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Datos de Facturaci\xF3n ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-grid-list", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "table");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Periodo: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " Raz\xF3n Social: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " Tienda: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, " RUC: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, " Departamento: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, " Provincia: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, " Titular: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, " N\xFAmero de documento: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, " Correo electr\xF3nico: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, " Tipo de documento: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, " Entidad Financiera: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, " Cuenta: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, " Tipo de cuenta: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, " CCI: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95, " Comisi\xF3n (S/): ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](98, "number");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](101, " Bonos (S/): ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](103);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](104, "number");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](108, " Devoluciones y Descuentos (S/): ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](110);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](111, "number");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](114, " IGV (S/): ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](116);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](117, "number");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](121, " Total Comisi\xF3n (S/): ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](123);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](124, "number");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](127, " Tipo de comprobante: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](128, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](129);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](131, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](133, " Motivo Descuento: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](134, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](135, " - ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](136, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](137, "mat-expansion-panel", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](138, "mat-expansion-panel-header", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](139, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](140, "strong", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](141, "Datos de Recepci\xF3n del Comprobante de Pago");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](142, "mat-grid-list", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](143, "table");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](144, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](145, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](146, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](147, " Fecha de recepci\xF3n: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](148, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](149);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](150, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](151, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](152, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](153, " C\xF3digo de documento: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](154, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](155);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](156, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](157, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](158, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](159, " Tipo de comprobante recepcionado: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](160, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](161);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](162, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](163, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](164, " RUC recepcionado: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](165, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](166);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](167, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](168, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](169, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](170, " Fecha de emisi\xF3n: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](171, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](172);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](173, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](174, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](175, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](176, " Tipo de presentaci\xF3n: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](177, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](178);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](179, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](180, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](181, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](182, " Serie: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](183, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](184);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](185, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](186, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](187, " C\xF3digo de Comprobante: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](188, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](189);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](190, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](191, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](192, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](193, " SubTotal (S/): ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](194, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](195);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](196, "number");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](197, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](198, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](199, " IGV (S/): ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](200, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](201);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](202, "number");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](203, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](204, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](205, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](206, " Total (S/): ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](207, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](208);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](209, "number");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](210, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](211, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](212, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](213, " Proceso: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](214, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](215);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](216, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](217, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](218, " Estado: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](219, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](220, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](221);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](222, PayrolldetailComponent_tr_222_Template, 6, 1, "tr", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](223, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](224, "mat-expansion-panel", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](225, "mat-expansion-panel-header", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](226, "mat-panel-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](227, "strong", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](228, "Estado de revisi\xF3n del comprobante de pago");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](229, "mat-grid-list", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](230, "table");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](231, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](232, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](233, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](234, " Fecha revisi\xF3n documento:: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](235, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](236);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](237, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](238, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](239, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](240, " Usuario revisi\xF3n: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](241, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](242);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](243, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](244, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](245, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](246, " Proceso: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](247, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](248);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](249, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](250, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](251, " Estado: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](252, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](253, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](254);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](255, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](256, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](257, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](258, " Observaci\xF3n revisi\xF3n: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](259, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](260);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](261, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](262, PayrolldetailComponent_mat_expansion_panel_262_Template, 7, 3, "mat-expansion-panel", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](263, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](264, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](265, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PayrolldetailComponent_Template_button_click_265_listener() {
              return ctx.onNoClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](266, "Aceptar");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.data.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.data.subtitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("multi", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("expanded", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cols", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.dataComision.invoiceData == null ? null : ctx.dataComision.invoiceData.period, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.dataComision.invoiceData == null ? null : ctx.dataComision.invoiceData.agent, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.dataComision.invoiceData == null ? null : ctx.dataComision.invoiceData.store, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.dataComision.invoiceData == null ? null : ctx.dataComision.invoiceData.ruc, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.dataComision.invoiceData == null ? null : ctx.dataComision.invoiceData.department, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.dataComision.invoiceData == null ? null : ctx.dataComision.invoiceData.province, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.dataComision.invoiceData == null ? null : ctx.dataComision.invoiceData.holderName, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.dataComision.invoiceData == null ? null : ctx.dataComision.invoiceData.documentNumber, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.dataComision.invoiceData == null ? null : ctx.dataComision.invoiceData.email, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.dataComision.invoiceData == null ? null : ctx.dataComision.invoiceData.documentType, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.dataComision.invoiceData == null ? null : ctx.dataComision.invoiceData.bankName, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.dataComision.invoiceData == null ? null : ctx.dataComision.invoiceData.accountNumber, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.dataComision.invoiceData == null ? null : ctx.dataComision.invoiceData.accountType, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.dataComision.invoiceData == null ? null : ctx.dataComision.invoiceData.accountInterbankNumber, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](98, 51, ctx.dataComision.invoiceData == null ? null : ctx.dataComision.invoiceData.commission, "1.2-2"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](104, 54, ctx.dataComision.invoiceData == null ? null : ctx.dataComision.invoiceData.bonus, "1.2-2"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](111, 57, ctx.dataComision.invoiceData == null ? null : ctx.dataComision.invoiceData.refundAndDiscount, "1.2-2"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](117, 60, ctx.dataComision.invoiceData == null ? null : ctx.dataComision.invoiceData.commissionIGV, "1.2-2"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](124, 63, ctx.dataComision.invoiceData == null ? null : ctx.dataComision.invoiceData.totalCommission, "1.2-2"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.dataComision.invoiceData == null ? null : ctx.dataComision.invoiceData.voucherType, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("expanded", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cols", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](150, 66, ctx.dataComision.receptionData == null ? null : ctx.dataComision.receptionData.receptionDate, "dd/MM/yyyy HH:mm"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.dataComision.receptionData == null ? null : ctx.dataComision.receptionData.documentCode, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.dataComision.receptionData == null ? null : ctx.dataComision.receptionData.voucherType, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.dataComision.receptionData == null ? null : ctx.dataComision.receptionData.ruc, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](173, 69, ctx.dataComision.receptionData == null ? null : ctx.dataComision.receptionData.invoiceIssueDate, "dd/MM/yyyy HH:mm"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.dataComision.receptionData == null ? null : ctx.dataComision.receptionData.trayType, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.dataComision.receptionData == null ? null : ctx.dataComision.receptionData.invoiceSeries, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.dataComision.receptionData == null ? null : ctx.dataComision.receptionData.invoiceNumber, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](196, 72, ctx.dataComision.receptionData == null ? null : ctx.dataComision.receptionData.subTotal, "1.2-2"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](202, 75, ctx.dataComision.receptionData == null ? null : ctx.dataComision.receptionData.commissionIGV, "1.2-2"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](209, 78, ctx.dataComision.receptionData == null ? null : ctx.dataComision.receptionData.totalCommission, "1.2-2"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.dataComision.receptionData == null ? null : ctx.dataComision.receptionData.processName, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](84, _c0, (ctx.dataComision.receptionData == null ? null : ctx.dataComision.receptionData.statusName) == "Pendiente", (ctx.dataComision.receptionData == null ? null : ctx.dataComision.receptionData.statusName) == "Aprobado", (ctx.dataComision.receptionData == null ? null : ctx.dataComision.receptionData.statusName) == "No requerido"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.dataComision.receptionData == null ? null : ctx.dataComision.receptionData.statusName, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.storageUrl !== "");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("expanded", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cols", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](237, 81, ctx.dataComision.approvalData == null ? null : ctx.dataComision.approvalData.approvalDate, "dd/MM/yyyy HH:mm"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.dataComision.approvalData == null ? null : ctx.dataComision.approvalData.approvalUser, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.dataComision.receptionData == null ? null : ctx.dataComision.receptionData.processName, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](88, _c0, (ctx.dataComision.receptionData == null ? null : ctx.dataComision.receptionData.statusName) == "Pendiente", (ctx.dataComision.receptionData == null ? null : ctx.dataComision.receptionData.statusName) == "Aprobado", (ctx.dataComision.receptionData == null ? null : ctx.dataComision.receptionData.statusName) == "No requerido"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.dataComision.receptionData == null ? null : ctx.dataComision.receptionData.statusName, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.dataComision.approvalData == null ? null : ctx.dataComision.approvalData.observation, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.dataComision == null ? null : ctx.dataComision.paymentsData == null ? null : ctx.dataComision.paymentsData.length) > 0);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogContent, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__.MatExpansionPanelTitle, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__.MatGridList, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe],
        styles: [".bt-gray[_ngcontent-%COMP%]{\r\n    border-bottom: 1px solid lightgray;\r\n}\r\n\r\n  .cdk-overlay-pane{\r\n    max-width: 850px;\r\n    min-width: 350px;\r\n    font-size: 1em;\r\n}\r\n\r\n.mat-dialog-content[_ngcontent-%COMP%]{\r\n    background: #FFFFFF;\r\n    border: 1px solid #5C6873;\r\n    box-sizing: border-box;\r\n    border-radius: 4px;\r\n    margin: 1px;\r\n}\r\n\r\ntd[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\r\n    padding-top: 0.5em;\r\n}\r\n\r\n.pendiente[_ngcontent-%COMP%] {\r\n    color: red;\r\n}\r\n\r\n.aprobado[_ngcontent-%COMP%] {\r\n    color: green;\r\n}\r\n\r\n.noRequerido[_ngcontent-%COMP%] {\r\n    color: blue;\r\n}\r\n\r\n@media screen and (max-width: 600px){\r\n    tr[_ngcontent-%COMP%] {\r\n      display: flex;\r\n      flex-wrap: wrap;\r\n    }\r\n    \r\n    td[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n    }\r\n    \r\n    .cdk-global-overlay-wrapper[_ngcontent-%COMP%] {\r\n        overflow: scroll;\r\n    }\r\n      .cdk-global-overlay-wrapper {\r\n        overflow: scroll;\r\n    }\r\n    \r\n    .mat-dialog-title[_ngcontent-%COMP%] {\r\n        margin: 0px;\r\n        display: block;\r\n    }\r\n\r\n    .mat-dialog-content[_ngcontent-%COMP%] {\r\n        display: block;\r\n        margin: 0 -24px;\r\n        padding: 0 24px;\r\n        max-height: 100%;\r\n        overflow: auto;\r\n        font-size: 1.3em;\r\n    }\r\n\r\n      .cdk-overlay-pane{\r\n        overflow-y: scroll!important;\r\n        max-width: 100vw!important;\r\n        font-size: 1.2em!important;\r\n    }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheXJvbGxkZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0k7TUFDRSxhQUFhO01BQ2IsZUFBZTtJQUNqQjs7SUFFQTtNQUNFLFdBQVc7SUFDYjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksV0FBVztRQUNYLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxjQUFjO1FBQ2QsZUFBZTtRQUNmLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsY0FBYztRQUNkLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLDRCQUE0QjtRQUM1QiwwQkFBMEI7UUFDMUIsMEJBQTBCO0lBQzlCOztBQUVKIiwiZmlsZSI6InBheXJvbGxkZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idC1ncmF5e1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5jZGstb3ZlcmxheS1wYW5le1xyXG4gICAgbWF4LXdpZHRoOiA4NTBweDtcclxuICAgIG1pbi13aWR0aDogMzUwcHg7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxufVxyXG5cclxuLm1hdC1kaWFsb2ctY29udGVudHtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNUM2ODczO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIG1hcmdpbjogMXB4O1xyXG59XHJcblxyXG50ZCwgcCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMC41ZW07XHJcbn1cclxuXHJcbi5wZW5kaWVudGUge1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLmFwcm9iYWRvIHtcclxuICAgIGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLm5vUmVxdWVyaWRvIHtcclxuICAgIGNvbG9yOiBibHVlO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCl7XHJcbiAgICB0ciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdGQge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNkay1nbG9iYWwtb3ZlcmxheS13cmFwcGVyIHtcclxuICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgfVxyXG4gICAgOjpuZy1kZWVwIC5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlciB7XHJcbiAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLm1hdC1kaWFsb2ctdGl0bGUge1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgIC5tYXQtZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbjogMCAtMjRweDtcclxuICAgICAgICBwYWRkaW5nOiAwIDI0cHg7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgfVxyXG5cclxuICAgIDo6bmctZGVlcCAuY2RrLW92ZXJsYXktcGFuZXtcclxuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGwhaW1wb3J0YW50O1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwdnchaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW0haW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    10809:
    /*!************************************************!*\
      !*** ./src/app/pages/store/store.component.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StoreComponent": function StoreComponent() {
          return (
            /* binding */
            _StoreComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_app_components_modal_info_modal_info_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/components/modal-info/modal-info.component */
      30814);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var src_app_pages_list_options_list_options_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/pages/list-options/list-options.component */
      89530);

      var _StoreComponent = /*#__PURE__*/function () {
        function _StoreComponent(router, dialog, activatedRoute) {
          _classCallCheck(this, _StoreComponent);

          this.router = router;
          this.dialog = dialog;
          this.activatedRoute = activatedRoute;
          this.data = {
            title: 'Elige una tienda',
            items: [{
              id: 0,
              title: 'Oechsle Lima'
            }, {
              id: 1,
              title: 'Oechsle Trujillo'
            }, {
              id: 2,
              title: 'Oechsle Piura'
            }, {
              id: 3,
              title: 'Oechsle Arequipa'
            }]
          };
        }

        _createClass(_StoreComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this11 = this;

            this.activatedRoute.queryParams.subscribe(function (params) {
              var obj = {
                id: params.idCommerce,
                title: params.titleCommerce
              };
              _this11.currentCommerce = obj;
            });
          }
        }, {
          key: "selectItem",
          value: function selectItem(item) {
            console.log(item);
            this.openDialogInfo('Tienda seleccionada', 'Has elegido el Comercio ' + this.currentCommerce.title + ' y la Tienda ' + item.title + '.', '', 'info');
            localStorage.setItem('idStore', item.id);
            localStorage.setItem('titleStore', item.title);
            localStorage.setItem('idCommerce', this.currentCommerce.id);
            localStorage.setItem('titleCommerce', this.currentCommerce.title);
          }
        }, {
          key: "openDialogInfo",
          value: function openDialogInfo(title, subtitle, footer, type) {
            var _this12 = this;

            var dialogref = this.dialog.open(src_app_components_modal_info_modal_info_component__WEBPACK_IMPORTED_MODULE_0__.ModalInfoComponent, {
              // width: '450px',
              data: {
                title: title,
                subtitle: subtitle,
                footer: footer,
                type: type
              }
            });
            dialogref.afterClosed().subscribe(function (reponse) {
              _this12.router.navigate(['/dashboard/home']);
            });
          }
        }]);

        return _StoreComponent;
      }();

      _StoreComponent.ɵfac = function StoreComponent_Factory(t) {
        return new (t || _StoreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute));
      };

      _StoreComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _StoreComponent,
        selectors: [["app-store"]],
        decls: 1,
        vars: 1,
        consts: [[3, "inputData", "selectItem"]],
        template: function StoreComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-list-options", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectItem", function StoreComponent_Template_app_list_options_selectItem_0_listener($event) {
              return ctx.selectItem($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("inputData", ctx.data);
          }
        },
        directives: [src_app_pages_list_options_list_options_component__WEBPACK_IMPORTED_MODULE_1__.ListOptionsComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdG9yZS5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    76077:
    /*!********************************************************!*\
      !*** ./src/app/pages/terminals/terminals.component.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TerminalsComponent": function TerminalsComponent() {
          return (
            /* binding */
            _TerminalsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_pages_list_options_list_options_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/pages/list-options/list-options.component */
      89530);

      var _TerminalsComponent = /*#__PURE__*/function () {
        function _TerminalsComponent(router, activatedRoute) {
          _classCallCheck(this, _TerminalsComponent);

          this.router = router;
          this.activatedRoute = activatedRoute;
          this.parent = "";
          this.data = {
            title: 'Elige un terminal',
            items: [{
              id: 0,
              title: '21478101'
            }, {
              id: 1,
              title: '21478102'
            }, {
              id: 2,
              title: '21478103'
            }, {
              id: 3,
              title: '21478104'
            }]
          };
        }

        _createClass(_TerminalsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this13 = this;

            this.activatedRoute.queryParams.subscribe(function (params) {
              _this13.parent = params.parent;
            });
          }
        }, {
          key: "selectItem",
          value: function selectItem(item) {
            var obj = {
              idTerminal: item.id,
              titleTerminal: item.title
            };
            this.router.navigate(['/dashboard/operaciones'], {
              queryParams: obj
            });
          }
        }]);

        return _TerminalsComponent;
      }();

      _TerminalsComponent.ɵfac = function TerminalsComponent_Factory(t) {
        return new (t || _TerminalsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute));
      };

      _TerminalsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _TerminalsComponent,
        selectors: [["app-terminals"]],
        decls: 1,
        vars: 1,
        consts: [[3, "inputData", "selectItem"]],
        template: function TerminalsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-list-options", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectItem", function TerminalsComponent_Template_app_list_options_selectItem_0_listener($event) {
              return ctx.selectItem($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("inputData", ctx.data);
          }
        },
        directives: [src_app_pages_list_options_list_options_component__WEBPACK_IMPORTED_MODULE_0__.ListOptionsComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXJtaW5hbHMuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    84519:
    /*!***************************************************!*\
      !*** ./src/app/services/authorization.service.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthorizationService": function AuthorizationService() {
          return (
            /* binding */
            _AuthorizationService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      33927);
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


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./authentication.service */
      7053);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      53882);

      var _AuthorizationService = /*#__PURE__*/function () {
        function _AuthorizationService(dialog, authService, router, http, activatedRoute) {
          _classCallCheck(this, _AuthorizationService);

          this.dialog = dialog;
          this.authService = authService;
          this.router = router;
          this.http = http;
          this.activatedRoute = activatedRoute;
          this.roleList = [];
        }

        _createClass(_AuthorizationService, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            var _this14 = this;

            return this.authService.getRolByApplication(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.idApp).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(function (data) {
              if (data.isSuccess) {
                _this14.roleList = data.data;
                var rolpermitido = '';

                for (var index = 0; index < _this14.roleList.length; index++) {
                  var element = _this14.roleList[index];
                  var rolwp = element.indexOf(".");

                  if (rolwp == -1) {
                    rolpermitido = element.toUpperCase();
                  } else {
                    var roleSeparated = element.split(".");
                    rolpermitido = roleSeparated[0].toUpperCase();
                  }

                  if (rolpermitido == 'AGENT') {
                    return true;
                  }
                }

                _this14.openDialogInfo("Error en credenciales !", "Tu usuario no tiene permisos en esta aplicación", "error");

                _this14.authService.logout();
              } else {
                _this14.openDialogInfo('Sesión caducada  !', 'Vuelva a iniciar sesión', 'error');

                _this14.authService.logout();
              }

              return false;
            }, function (err) {
              console.log(err);

              _this14.authService.logout();

              _this14.openDialogInfo("", "Ocurrió un error. Intentelo mas tarde", "error");

              return false;
            }));
          }
        }, {
          key: "openDialogInfo",
          value: function openDialogInfo(title, subtitle, type) {
            var dialogref = this.dialog.open(_components_modal_info_modal_info_component__WEBPACK_IMPORTED_MODULE_1__.ModalInfoComponent, {
              disableClose: true,
              width: '350px',
              data: {
                title: title,
                subtitle: subtitle,
                type: type
              }
            });
          }
        }]);

        return _AuthorizationService;
      }();

      _AuthorizationService.ɵfac = function AuthorizationService_Factory(t) {
        return new (t || _AuthorizationService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute));
      };

      _AuthorizationService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: _AuthorizationService,
        factory: _AuthorizationService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    80630:
    /*!************************************************!*\
      !*** ./src/app/services/commission.service.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CommissionService": function CommissionService() {
          return (
            /* binding */
            _CommissionService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      92340);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);

      var _CommissionService = /*#__PURE__*/function () {
        function _CommissionService(router, http) {
          _classCallCheck(this, _CommissionService);

          this.router = router;
          this.http = http;
        }

        _createClass(_CommissionService, [{
          key: "getperiods",
          value: function getperiods() {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.invoceApi + 'master/periods', {});
          }
        }, {
          key: "getfiletypes",
          value: function getfiletypes() {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.invoceApi + 'master/filetypes', {});
          }
        }, {
          key: "getAlltray",
          value: function getAlltray(Period, Status, pages, sizes) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams();
            params = params.append('PageNumber', pages);
            params = params.append('PageSize', sizes);

            if (Period !== '') {
              params = params.append('Period', Period);
            }

            if (Status !== '') {
              params = params.append('StatusId', Status);
            }

            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.invoceApi + 'tray?', {
              params: params
            });
          }
        }, {
          key: "gettray",
          value: function gettray(id) {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.invoceApi + 'tray/' + id);
          }
        }, {
          key: "postfile",
          value: function postfile(type, id, obj) {
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.invoceApi + 'file?fileType=' + type + '&trayId=' + id, obj);
          }
        }, {
          key: "getfile",
          value: function getfile(id) {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.invoceApi + 'file/' + id);
          }
        }]);

        return _CommissionService;
      }();

      _CommissionService.ɵfac = function CommissionService_Factory(t) {
        return new (t || _CommissionService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
      };

      _CommissionService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _CommissionService,
        factory: _CommissionService.ɵfac,
        providedIn: 'root'
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_modules_in-app_in-app_module_ts-es5.js.map