(self["webpackChunkinvoice"] = self["webpackChunkinvoice"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _pages_start_start_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/start/start.component */ 74924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [
    {
        path: '',
        component: _pages_start_start_component__WEBPACK_IMPORTED_MODULE_0__.StartComponent,
    },
    {
        path: 'dashboard',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_in-app_in-app_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/in-app/in-app.module */ 2660)).then(m => m.InAppModule),
    },
    {
        path: '**',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 71258);


class AppComponent {
    constructor() {
        this.title = 'invoice';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _components_modal_info_modal_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/modal-info/modal-info.component */ 30814);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _modules_material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/material/material.module */ 29350);
/* harmony import */ var _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/token-interceptor.service */ 23742);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/app.service */ 66475);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sidenav */ 86608);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/slider */ 53616);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/menu */ 80221);
/* harmony import */ var _pages_start_start_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/start/start.component */ 74924);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/scrolling */ 42791);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/expansion */ 22323);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ 20718);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/service-worker */ 47334);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);




















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [
        _services_app_service__WEBPACK_IMPORTED_MODULE_5__.AppService,
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HTTP_INTERCEPTORS,
            useClass: _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_4__.TokenInterceptorService,
            multi: true
        },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _modules_material_material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule,
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__.ScrollingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule,
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__.ServiceWorkerModule.register('ngsw-worker.js', {
                enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.production,
                // Register the ServiceWorker as soon as the application is stable
                // or after 30 seconds (whichever comes first).
                registrationStrategy: 'registerImmediately'
            }),
        ], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__.MatSidenavModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_16__.MatSliderModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__.MatMenuModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__.MatExpansionModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_modal_info_modal_info_component__WEBPACK_IMPORTED_MODULE_2__.ModalInfoComponent,
        _pages_start_start_component__WEBPACK_IMPORTED_MODULE_6__.StartComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _modules_material_material_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__.ScrollingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__.ServiceWorkerModule], exports: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__.MatSidenavModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_16__.MatSliderModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__.MatMenuModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__.MatExpansionModule] }); })();


/***/ }),

/***/ 30814:
/*!***************************************************************!*\
  !*** ./src/app/components/modal-info/modal-info.component.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalInfoComponent": function() { return /* binding */ ModalInfoComponent; }
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 70781);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/progress-bar */ 365);






function ModalInfoComponent_h1_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.data.title, "\n");
} }
function ModalInfoComponent_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 11);
} }
function ModalInfoComponent_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 12);
} }
function ModalInfoComponent_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 13);
} }
function ModalInfoComponent_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 14);
} }
function ModalInfoComponent_div_8_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r5.data.subtitle, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
} }
function ModalInfoComponent_div_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.data.title, " ");
} }
function ModalInfoComponent_div_9_ng_container_2_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r19, " ");
} }
function ModalInfoComponent_div_9_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ModalInfoComponent_div_9_ng_container_2_p_1_Template, 4, 1, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.data.subtitle);
} }
function ModalInfoComponent_div_9_ng_container_3_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r22.dateFormated);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r22.value, " ");
} }
function ModalInfoComponent_div_9_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ModalInfoComponent_div_9_ng_container_3_p_2_Template, 4, 2, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.data.subtitle);
} }
function ModalInfoComponent_div_9_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r11.data.footer, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function ModalInfoComponent_div_9_strong_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "OK");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ModalInfoComponent_div_9_strong_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "OK");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ModalInfoComponent_div_9_strong_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "OK");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ModalInfoComponent_div_9_strong_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "OK");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ModalInfoComponent_div_9_strong_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Continuar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ModalInfoComponent_div_9_strong_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ModalInfoComponent_div_9_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
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
} }
function ModalInfoComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-progress-bar", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
class ModalInfoComponent {
    constructor(data) {
        this.data = data;
        this.dateFormated = '';
        if (data.subtitle != null) {
            for (let index = 0; index < data.subtitle.length; index++) {
                if (data.subtitle[index].createdAt != null) {
                    const day = new Date(Date.parse(this.data.subtitle[index].createdAt.replace('T', ' '))).getDate();
                    const month = new Date(Date.parse(this.data.subtitle[index].createdAt.replace('T', ' '))).getMonth();
                    const year = new Date(Date.parse(this.data.subtitle[index].createdAt.replace('T', ' '))).getFullYear();
                    const time = new Date(Date.parse(this.data.subtitle[index].createdAt.replace('T', ' '))).getHours();
                    const getMinutes = new Date(Date.parse(this.data.subtitle[index].createdAt.replace('T', ' '))).getMinutes();
                    this.data.subtitle[index].dateFormated = day + '/' + (month + 1) + '/' + year + ' ' + time + ':' + getMinutes;
                }
            }
        }
    }
    ngOnInit() {
    }
}
ModalInfoComponent.ɵfac = function ModalInfoComponent_Factory(t) { return new (t || ModalInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA)); };
ModalInfoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalInfoComponent, selectors: [["app-modal-info"]], decls: 11, vars: 8, consts: [["mat-dialog-title", "", 4, "ngIf"], ["mat-dialog-content", ""], ["align", "center"], ["src", "assets/icons/feedback/info.svg", "style", "width: 100px;", "alt", "", 4, "ngIf"], ["src", "assets/icons/feedback/question.svg", "style", "width: 100px;", "alt", "", 4, "ngIf"], ["src", "assets/icons/feedback/error.svg", "style", "width: 100px;", "alt", "", 4, "ngIf"], ["src", "assets/icons/feedback/success.svg", "style", "width: 100px;", "alt", "", 4, "ngIf"], ["align", "center", 4, "ngIf"], ["align", "left", 4, "ngIf"], [4, "ngIf"], ["mat-dialog-title", ""], ["src", "assets/icons/feedback/info.svg", "alt", "", 2, "width", "100px"], ["src", "assets/icons/feedback/question.svg", "alt", "", 2, "width", "100px"], ["src", "assets/icons/feedback/error.svg", "alt", "", 2, "width", "100px"], ["src", "assets/icons/feedback/success.svg", "alt", "", 2, "width", "100px"], [1, "", 3, "innerHTML"], ["align", "right"], ["mat-raised-button", "", "color", "primary", "flex", "", 3, "mat-dialog-close"], ["align", "left"], ["mat-dialog-title", "", 2, "font-weight", "bold"], ["class", "modal-p-error", 4, "ngFor", "ngForOf"], [1, "modal-p-error"], [1, "scroll"], ["class", "modal-p-error justText", 4, "ngFor", "ngForOf"], [1, "modal-p-error", "justText"], ["mode", "indeterminate"]], template: function ModalInfoComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__.MatProgressBar], styles: [".modal-p-error[_ngcontent-%COMP%]{\r\n    margin-bottom: 0px;\r\n    padding-bottom: 0px;\r\n}\r\n\r\n.text-custom-color[_ngcontent-%COMP%]{\r\n    color: blue;\r\n}\r\n\r\n  .text-custom-color{\r\n    color: blue;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLWluZm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7R0FhRyIsImZpbGUiOiJtb2RhbC1pbmZvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtcC1lcnJvcntcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbi50ZXh0LWN1c3RvbS1jb2xvcntcclxuICAgIGNvbG9yOiBibHVlO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnRleHQtY3VzdG9tLWNvbG9ye1xyXG4gICAgY29sb3I6IGJsdWU7XHJcbn1cclxuLyogQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAgIC5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlciB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBub3JtYWwhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIDo6bmctZGVlcCAuY2RrLWdsb2JhbC1vdmVybGF5LXdyYXBwZXIge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogbm9ybWFsIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAubWF0LWRpYWxvZy1jb250ZW50IHtcclxuICAgICAgICBtYXJnaW46IDBweCAwcHggMTBweCAtMjRweDtcclxuICAgIH1cclxuXHJcbn0gKi9cclxuIl19 */"] });


/***/ }),

/***/ 29350:
/*!*****************************************************!*\
  !*** ./src/app/modules/material/material.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": function() { return /* binding */ MaterialModule; }
/* harmony export */ });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/a11y */ 51606);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 80395);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/cdk/portal */ 40912);
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/stepper */ 43285);
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/cdk/table */ 72306);
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/cdk/tree */ 85443);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/autocomplete */ 65924);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/badge */ 90330);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 76322);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/button-toggle */ 53894);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/card */ 42118);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/chips */ 79243);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/datepicker */ 42937);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/divider */ 1124);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/list */ 28417);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/core */ 32220);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/paginator */ 38021);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/progress-bar */ 365);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/sidenav */ 86608);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/slider */ 53616);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/slide-toggle */ 32080);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/sort */ 45381);
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/tree */ 75473);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/button */ 70781);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ 74058);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/expansion */ 22323);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ 65788);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/grid-list */ 85937);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ 64742);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/menu */ 80221);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/progress-spinner */ 80181);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/radio */ 15644);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ 37007);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/snack-bar */ 68456);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/stepper */ 48210);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 54302);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ 9348);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/toolbar */ 64106);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ 50298);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/cdk/scrolling */ 42791);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 2316);
// Modulo generado con la linea de comandos. Este modulo servirá para organizar los modulos  de Angular Material








































 // Componente a usar, MatSnackBarModule


const MaterialComponents = [
    _angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIconModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__.MatProgressSpinnerModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInputModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__.MatGridListModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTabsModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__.MatStepperModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelectModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__.MatRadioModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__.MatExpansionModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatCheckboxModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__.MatToolbarModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__.MatSnackBarModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__.MatTooltipModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__.MatMenuModule
];
class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({ imports: [[
            MaterialComponents,
        ], _angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIconModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__.MatProgressSpinnerModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInputModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__.MatGridListModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTabsModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__.MatStepperModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelectModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__.MatRadioModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__.MatExpansionModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatCheckboxModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__.MatToolbarModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__.MatSnackBarModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__.MatTooltipModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__.MatMenuModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_19__.A11yModule,
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_20__.CdkStepperModule,
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_21__.CdkTableModule,
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_22__.CdkTreeModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_23__.DragDropModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_24__.MatAutocompleteModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_25__.MatBadgeModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_26__.MatBottomSheetModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_27__.MatButtonToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_28__.MatCardModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatCheckboxModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_29__.MatChipsModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__.MatStepperModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_30__.MatDatepickerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_31__.MatDividerModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__.MatExpansionModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__.MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_32__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__.MatMenuModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_33__.MatNativeDateModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__.MatPaginatorModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_35__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__.MatProgressSpinnerModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__.MatRadioModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_33__.MatRippleModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelectModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_36__.MatSidenavModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_37__.MatSliderModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_38__.MatSlideToggleModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__.MatSnackBarModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_39__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__.MatTooltipModule,
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_40__.MatTreeModule,
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_41__.PortalModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_42__.ScrollingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIconModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__.MatProgressSpinnerModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInputModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__.MatGridListModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTabsModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__.MatStepperModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelectModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__.MatRadioModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__.MatExpansionModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatCheckboxModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__.MatToolbarModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__.MatSnackBarModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__.MatTooltipModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__.MatMenuModule], exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIconModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__.MatProgressSpinnerModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInputModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__.MatGridListModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTabsModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__.MatStepperModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelectModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__.MatRadioModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__.MatExpansionModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatCheckboxModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__.MatToolbarModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__.MatSnackBarModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__.MatTooltipModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__.MatMenuModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_19__.A11yModule,
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_20__.CdkStepperModule,
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_21__.CdkTableModule,
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_22__.CdkTreeModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_23__.DragDropModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_24__.MatAutocompleteModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_25__.MatBadgeModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_26__.MatBottomSheetModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_27__.MatButtonToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_28__.MatCardModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatCheckboxModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_29__.MatChipsModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__.MatStepperModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_30__.MatDatepickerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_31__.MatDividerModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__.MatExpansionModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__.MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_32__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__.MatMenuModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_33__.MatNativeDateModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__.MatPaginatorModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_35__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__.MatProgressSpinnerModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__.MatRadioModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_33__.MatRippleModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelectModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_36__.MatSidenavModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_37__.MatSliderModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_38__.MatSlideToggleModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__.MatSnackBarModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_39__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__.MatTooltipModule,
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_40__.MatTreeModule,
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_41__.PortalModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_42__.ScrollingModule] }); })();


/***/ }),

/***/ 74924:
/*!************************************************!*\
  !*** ./src/app/pages/start/start.component.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartComponent": function() { return /* binding */ StartComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/authentication.service */ 7053);





class StartComponent {
    constructor(dialog, router, authService) {
        this.dialog = dialog;
        this.router = router;
        this.authService = authService;
        this.requestToRegister = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    ngOnInit() {
        // this.authService.startAuthentication();//! Descomentar esta linea
        // this.router.navigate(['/dashboard/comercio']);//! Comentar esta linea
    }
}
StartComponent.ɵfac = function StartComponent_Factory(t) { return new (t || StartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService)); };
StartComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: StartComponent, selectors: [["app-start"]], outputs: { requestToRegister: "requestToRegister" }, decls: 1, vars: 0, consts: [[1, "container-auth", "hidden-sm", 2, "overflow-y", "none"]], template: function StartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
    } }, styles: [".container-auth[_ngcontent-%COMP%]{\r\n  margin: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFTO0FBQ1giLCJmaWxlIjoic3RhcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItYXV0aHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 66475:
/*!*****************************************!*\
  !*** ./src/app/services/app.service.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppService": function() { return /* binding */ AppService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _components_modal_info_modal_info_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/modal-info/modal-info.component */ 30814);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication.service */ 7053);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 22213);








class AppService {
    constructor(router, http, authService, dialog) {
        this.router = router;
        this.http = http;
        this.authService = authService;
        this.dialog = dialog;
    }
    canActivate() {
        try {
            if (this.authService.isTokenLSExpired()) {
                return true;
            }
            else {
                this.authService.startAuthentication();
                return false;
            }
        }
        catch (error) {
            console.error("AppService : " + error);
            return false;
        }
    }
    getIPAddress() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiIpify, {});
    }
    getIpStorage() {
        this.ipAdress = localStorage.getItem('ipAdress');
        return this.ipAdress;
    }
    getOidcUser() {
        const oidcUser = localStorage.getItem('oidc.user:' + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.securityOIDC + ':' + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.clientOIDC);
        if (oidcUser != null && oidcUser !== undefined) {
            this.oidcUser = JSON.parse(oidcUser);
        }
        else {
            this.oidcUser = {};
        }
        return this.oidcUser;
    }
    getUserLocal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.user = yield JSON.parse(localStorage.getItem('oidc.user:' + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.securityOIDC + ':' + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.clientOIDC));
            return this.user;
        });
    }
    setIpStorage(ipAdress) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield localStorage.setItem('ipAdress', ipAdress);
        });
    }
    determinateHttpError(err, isLoadingLogout) {
        this.dialog.closeAll();
        isLoadingLogout = (isLoadingLogout == undefined) ? false : isLoadingLogout;
        if (err.status === 401 || err.status === 403) {
            if (!isLoadingLogout) {
                isLoadingLogout = true;
                this.openDialogInfo('Sesión caducada  !', 'Vuelva a iniciar sesión', 'error');
                setTimeout(() => {
                    this.authService.logout();
                }, 2500);
            }
        }
        else {
            this.openDialogInfo('Ocurrió un error  !', 'Intentelo mas tarde, si el error persiste comuníquese con el soporte', 'error');
        }
    }
    openDialogInfo(title, subtitle, type) {
        const dialogref = this.dialog.open(_components_modal_info_modal_info_component__WEBPACK_IMPORTED_MODULE_1__.ModalInfoComponent, {
            width: '350px',
            data: { title, subtitle, type }
        });
    }
}
AppService.ɵfac = function AppService_Factory(t) { return new (t || AppService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog)); };
AppService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: AppService, factory: AppService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7053:
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationService": function() { return /* binding */ AuthenticationService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../environments/environment */ 92340);
/* harmony import */ var oidc_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! oidc-client */ 32437);
/* harmony import */ var oidc_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(oidc_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sso_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sso.config */ 7987);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 33927);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 53882);








class AuthenticationService {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this.user = null;
        this.manager = new oidc_client__WEBPACK_IMPORTED_MODULE_1__.UserManager((0,_sso_config__WEBPACK_IMPORTED_MODULE_2__.getClientSettings)());
        this.LoginRedirectHandler = () => {
            return this.manager.getUser().then((user) => {
                if (user === null || user === undefined) {
                    return this.manager.signinRedirect(null);
                }
            });
        };
        this.manager.getUser().then(user => {
            if (user != null) {
                localStorage.setItem('oidc.user:' + _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.securityOIDC + ':' + _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.clientOIDC, user.toStorageString());
                this.user = user;
            }
        });
    }
    isLoggedIn() {
        return this.user != null && !this.user.expired;
    }
    getClaims() {
        return this.user.profile;
    }
    getUser() {
        this.manager.getUser().then(user => { this.user = user; });
    }
    startAuthentication() {
        return this.manager.signinRedirect();
    }
    logout() {
        if (this.user == null) {
            localStorage.clear();
            this.router.navigate(['/dashboard']);
        }
        else {
            localStorage.clear();
            this.manager.signoutRedirect({ id_token_hint: this.user.id_token });
        }
    }
    logoutInterceptor() {
        localStorage.clear();
        this.manager.signoutRedirect({ id_token_hint: this.user.id_token });
    }
    completeAuthentication() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (this.user === null || this.user === undefined) {
                return yield this.manager.signinCallback().then(user => {
                    this.user = user;
                    if (this.isTokenExpired()) {
                        this.logout();
                    }
                    else {
                        this.router.navigate(['/dashboard']);
                    }
                }, err => {
                    console.log(err);
                    this.logout();
                });
            }
            else {
                if (this.isTokenExpired()) {
                    this.logout();
                }
                else {
                    this.router.navigate(['/dashboard']);
                }
            }
        });
    }
    getToken() {
        this.user = JSON.parse(localStorage.getItem('oidc.user:' + _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.securityOIDC + ':' + _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.clientOIDC));
        return (this.user != null && this.user !== undefined) ? this.user.access_token : '';
    }
    isTokenExpired() {
        return this.user.expires_at < new Date().getTime() / 1000;
    }
    isTokenLSExpired() {
        const sessionStorage = JSON.parse(localStorage.getItem('oidc.user:' + _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.securityOIDC + ':' + _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.clientOIDC));
        if (sessionStorage != null) {
            //return true; // Revisar Ojo
            if (sessionStorage.expires_at < new Date().getTime() / 1000) {
                return false;
            }
            else {
                return true;
            }
        }
        else {
            return false;
        }
    }
    isvalidToken() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.securityOIDC + '/authentication/isvalid');
    }
    getApplications() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.securityOIDC + '/authentication/applications');
    }
    getRolByApplication(appId) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.securityOIDC + '/authentication/roles?applicationId=' + appId);
    }
    getAccessByApplication(appId) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.securityOIDC + '/authentication/access?applicationId=' + appId);
    }
    test(appId) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.securityOIDC + '/authentication/access?applicationId=' + appId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((response) => {
            return response;
        }));
    }
    hasPermission(appId) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.securityOIDC + '/authentication/actions?applicationId=' + appId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((response) => {
            return response;
        }));
    }
}
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) { return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient)); };
AuthenticationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: AuthenticationService, factory: AuthenticationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 23742:
/*!*******************************************************!*\
  !*** ./src/app/services/token-interceptor.service.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenInterceptorService": function() { return /* binding */ TokenInterceptorService; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 81134);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 45871);
/* harmony import */ var _components_modal_info_modal_info_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/modal-info/modal-info.component */ 30814);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 18293);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.service */ 7053);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.service */ 66475);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 22213);







class TokenInterceptorService {
    constructor(authenticationService, appService, dialog) {
        this.authenticationService = authenticationService;
        this.appService = appService;
        this.dialog = dialog;
        //private deviceService: DeviceDetectorService) {
        //this.deviceInfo = this.deviceService.getDeviceInfo();
        //const isMobile = this.deviceService.isMobile();
        //const isTablet = this.deviceService.isTablet();
        //const isDesktopDevice = this.deviceService.isDesktop();
    }
    handleAuthError(err) {
        if (err.status === 401) {
            this.openDialogInfo('Sesión caducada  !', 'Vuelva a iniciar sesión', 'error');
            setTimeout(() => {
                this.authenticationService.logoutInterceptor();
            }, 1500);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(err.message);
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(err);
    }
    intercept(req, next) {
        if (req.url.includes('ipify')) {
            const tokenizeReq = req.clone({});
            return next.handle(tokenizeReq);
        }
        else {
            this.token = (this.authenticationService.getToken() !== undefined) ? this.authenticationService.getToken() : '';
            this.ipAdress = (this.appService.getIpStorage() !== null) ? this.appService.getIpStorage() : '';
            const tokenizeReq = req.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + this.token,
                    Ip: this.ipAdress
                }
            });
            tokenizeReq.headers.set('Ip', this.ipAdress);
            return next.handle(tokenizeReq).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(x => this.handleAuthError(x)));
        }
    }
    openDialogInfo(title, subtitle, type) {
        const dialogref = this.dialog.open(_components_modal_info_modal_info_component__WEBPACK_IMPORTED_MODULE_0__.ModalInfoComponent, {
            width: '350px',
            data: { title, subtitle, type }
        });
        dialogref.afterClosed().subscribe(reponse => {
        });
    }
}
TokenInterceptorService.ɵfac = function TokenInterceptorService_Factory(t) { return new (t || TokenInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_authentication_service__WEBPACK_IMPORTED_MODULE_1__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog)); };
TokenInterceptorService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: TokenInterceptorService, factory: TokenInterceptorService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7987:
/*!*******************************!*\
  !*** ./src/app/sso.config.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getClientSettings": function() { return /* binding */ getClientSettings; }
/* harmony export */ });
/* harmony import */ var oidc_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! oidc-client */ 32437);
/* harmony import */ var oidc_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(oidc_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 92340);


function getClientSettings() {
    return {
        authority: src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.securityOIDC,
        client_id: src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.clientOIDC,
        response_type: 'id_token token',
        redirect_uri: src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.urlBase + src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.redirectLogin,
        post_logout_redirect_uri: src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.urlBase,
        scope: src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.scope,
        userStore: new oidc_client__WEBPACK_IMPORTED_MODULE_0__.WebStorageStateStore({ store: window.localStorage }),
        filterProtocolClaims: false,
        loadUserInfo: true,
        automaticSilentRenew: false,
        includeIdTokenInSilentRenew: false,
        monitorSession: false
    };
}


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
const environment = {
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
    paginate: 20,
};


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(14431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map