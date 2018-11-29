webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_report_step_step_component__ = __webpack_require__("../../../../../src/app/pages/report/step/step.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_report_sleep_sleep_component__ = __webpack_require__("../../../../../src/app/pages/report/sleep/sleep.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_report_heartrate_heartrate_component__ = __webpack_require__("../../../../../src/app/pages/report/heartrate/heartrate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_report_bloodpressure_bloodpressure_component__ = __webpack_require__("../../../../../src/app/pages/report/bloodpressure/bloodpressure.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_report_sports_sports_component__ = __webpack_require__("../../../../../src/app/pages/report/sports/sports.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_users_users_component__ = __webpack_require__("../../../../../src/app/pages/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_devices_devices_component__ = __webpack_require__("../../../../../src/app/pages/devices/devices.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_admin_admin_component__ = __webpack_require__("../../../../../src/app/pages/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__authentication_sign_in_sign_in_component__ = __webpack_require__("../../../../../src/app/authentication/sign-in/sign-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__authentication_forgot_password_forgot_password_component__ = __webpack_require__("../../../../../src/app/authentication/forgot-password/forgot-password.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    { path: '', redirectTo: 'report/step', pathMatch: 'full' },
    { path: 'report/step', component: __WEBPACK_IMPORTED_MODULE_2__pages_report_step_step_component__["a" /* StepComponent */] },
    { path: 'report/sleep', component: __WEBPACK_IMPORTED_MODULE_3__pages_report_sleep_sleep_component__["a" /* SleepComponent */], data: { preload: true } },
    { path: 'report/heartrate', component: __WEBPACK_IMPORTED_MODULE_4__pages_report_heartrate_heartrate_component__["a" /* HeartrateComponent */], data: { preload: true } },
    { path: 'report/bloodpressure', component: __WEBPACK_IMPORTED_MODULE_5__pages_report_bloodpressure_bloodpressure_component__["a" /* BloodpressureComponent */], data: { preload: true } },
    { path: 'report/sports', component: __WEBPACK_IMPORTED_MODULE_6__pages_report_sports_sports_component__["a" /* SportsComponent */], data: { preload: true } },
    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_7__pages_users_users_component__["a" /* UsersComponent */], data: { preload: true } },
    { path: 'devices', component: __WEBPACK_IMPORTED_MODULE_8__pages_devices_devices_component__["a" /* DevicesComponent */], data: { preload: true } },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_9__pages_admin_admin_component__["a" /* AdminComponent */], data: { preload: true } },
    { path: 'authentication/sign-in', component: __WEBPACK_IMPORTED_MODULE_10__authentication_sign_in_sign_in_component__["a" /* SignInComponent */] },
    { path: 'authentication/forgot-password', component: __WEBPACK_IMPORTED_MODULE_11__authentication_forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Page Loader -->\n<div class=\"page-loader-wrapper\">\n    <div class=\"loader\">\n        <div class=\"m-t-30\"><img class=\"zmdi-hc-spin\" src=\"assets/images/logo.svg\" width=\"48\" height=\"48\" alt=\"sQuare\"></div>\n        <p>請稍候...</p>\n    </div>\n</div>\n<!-- Overlay For Sidebars -->\n<div class=\"overlay\"></div>\n<!-- Top Bar -->\n<nav class=\"navbar\">\n    <ul class=\"nav navbar-nav navbar-left\">\n        <li>\n            <div class=\"navbar-header\">\n                <a href=\"javascript:void(0);\" class=\"bars\"></a>\n                <a class=\"navbar-brand\" routerLink=\"/\">\n                    <img src=\"assets/images/logo.svg\" width=\"30\" alt=\"Management\">\n                    <span class=\"m-l-10\">Management</span>\n                </a>\n            </div>\n        </li>\n        <li>\n            <a href=\"javascript:void(0);\" class=\"menu-sm\" data-close=\"true\">\n                <i class=\"zmdi zmdi-arrow-left\"></i>\n                <i class=\"zmdi zmdi-arrow-right\"></i>\n            </a>\n        </li>\n        <li>\n            <a href=\"javascript:void(0);\" class=\"fullscreen hidden-md-down hidden-sm-down\" data-provide=\"fullscreen\">\n                <i class=\"zmdi zmdi-fullscreen\"></i>\n            </a>\n        </li>\n        <li class=\"float-right\">\n            <a routerLink=\"/authentication/sign-in\" class=\"mega-menu\"><i class=\"zmdi zmdi-power\"></i></a>\n        </li>\n    </ul>\n</nav>\n\n<div *ngIf=\"previousUrl; else elseBlock\">\n    <div ngSwitch=\"{{previousUrl}}\">\n        <div *ngSwitchDefault>\n            <aside id=\"leftsidebar\" class=\"sidebar\">\n                <div class=\"menu\">\n                    <ul class=\"list\">\n                        <li>\n                            <div class=\"user-info m-b-20\">\n                                <div class=\"image\">\n                                    <a routerLink=\"/sample-pages/profile\">\n                                        <img src=\"assets/images/profile_av.jpg\" alt=\"User\">\n                                    </a>\n                                </div>\n                                <div class=\"detail\">\n                                    <h4>Michael</h4>\n                                    <p class=\"m-b-0\">Manager</p>\n                                    <a routerLink=\"/app/calendar\" title=\"Events\"><i class=\"zmdi zmdi-calendar\"></i></a>\n                                    <a routerLink=\"/app/inbox\" title=\"Inbox\"><i class=\"zmdi zmdi-email\"></i></a>\n                                    <a routerLink=\"/app/contact\" title=\"Contact List\"><i class=\"zmdi zmdi-account-box-phone\"></i></a>\n                                </div>\n                            </div>\n                        </li>\n                        <!-- <li class=\"header\">MAIN</li> -->\n                        <li routerLinkActive=\"active\" class=\"active\"><a href=\"javascript:void(0);\" class=\"menu-toggle\"><i\n                                    class=\"zmdi zmdi-chart\"></i><span>報表查詢</span></a>\n                            <ul class=\"ml-menu\" style=\"display: block\">\n                                <li routerLinkActive=\"active\"><a routerLink=\"/report/step\">步數</a></li>\n                                <li routerLinkActive=\"active\"><a routerLink=\"/report/sleep\">睡眠</a></li>\n                                <li routerLinkActive=\"active\"><a routerLink=\"/report/heartrate\">心率</a></li>\n                                <li routerLinkActive=\"active\"><a routerLink=\"/report/bloodpressure\">血壓</a></li>\n                                <li routerLinkActive=\"active\"><a routerLink=\"/report/sports\">運動</a></li>\n                            </ul>\n                        </li>\n                        <li routerLinkActive=\"active\">\n                            <a routerLink=\"/users\">\n                                <i class=\"zmdi zmdi-account\"></i><span>帳號與群組</span>\n                            </a>\n                        </li>\n                        <li>\n                            <a routerLink=\"/devices\">\n                                <i class=\"zmdi zmdi-watch\"></i><span>手環管理</span>\n                            </a>\n                        </li>\n                        <li>\n                            <a routerLink=\"/admin\">\n                                <i class=\"zmdi zmdi-group\"></i><span>管理者</span>\n                            </a>\n                        </li>\n                    </ul>\n                </div>\n            </aside>\n        </div>\n        <div *ngSwitchCase=\"previousUrl == 'sign-in' || previousUrl == 'sign-up' || previousUrl ==  'forgot-password' || previousUrl ==  '404' || previousUrl ==  '500' || previousUrl ==  'offline' || previousUrl ==  'locked' ? previousUrl : '' \">\n        </div>\n    </div>\n</div>\n\n<ng-template #elseBlock>\n    <aside id=\"leftsidebar\" class=\"sidebar\">\n        <div class=\"menu\">\n            <ul class=\"list\">\n                <li>\n                    <div class=\"user-info m-b-20\">\n                        <div class=\"image\">\n                            <a routerLink=\"/sample-pages/profile\">\n                                <img src=\"assets/images/profile_av.jpg\" alt=\"User\">\n                            </a>\n                        </div>\n                        <div class=\"detail\">\n                            <h4>Michael</h4>\n                            <p class=\"m-b-0\">Manager</p>\n                            <a routerLink=\"/app/calendar\" title=\"Events\"><i class=\"zmdi zmdi-calendar\"></i></a>\n                            <a routerLink=\"/app/inbox\" title=\"Inbox\"><i class=\"zmdi zmdi-email\"></i></a>\n                            <a routerLink=\"/app/contact\" title=\"Contact List\"><i class=\"zmdi zmdi-account-box-phone\"></i></a>\n                        </div>\n                    </div>\n                </li>\n                <!-- <li class=\"header\">MAIN</li> -->\n                <li routerLinkActive=\"active open\" class=\"active open\"><a href=\"javascript:void(0);\" class=\"menu-toggle\"><i\n                            class=\"zmdi zmdi-chart\"></i><span>報表查詢</span></a>\n                    <ul class=\"ml-menu\" style=\"display: block\">\n                        <li routerLinkActive=\"active\"><a routerLink=\"/report/step\">步數</a></li>\n                        <li routerLinkActive=\"active\"><a routerLink=\"/report/sleep\">睡眠</a></li>\n                        <li routerLinkActive=\"active\"><a routerLink=\"/report/heartrate\">心率</a></li>\n                        <li routerLinkActive=\"active\"><a routerLink=\"/report/bloodpressure\">血壓</a></li>\n                        <li routerLinkActive=\"active\"><a routerLink=\"/report/sports\">運動</a></li>\n                    </ul>\n                </li>\n                <li routerLinkActive=\"active\">\n                    <a routerLink=\"/users\">\n                        <i class=\"zmdi zmdi-account\"></i><span>帳號與群組</span>\n                    </a>\n                </li>\n                <li>\n                    <a routerLink=\"/devices\">\n                        <i class=\"zmdi zmdi-watch\"></i><span>手環管理</span>\n                    </a>\n                </li>\n                <li>\n                    <a routerLink=\"/admin\">\n                        <i class=\"zmdi zmdi-group\"></i><span>管理者</span>\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </aside>\n</ng-template>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(renderer, router) {
        var _this = this;
        this.renderer = renderer;
        this.router = router;
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* NavigationStart */]) {
                if (_this.previousUrl) {
                    _this.renderer.removeClass(document.body, _this.previousUrl);
                }
                var currentUrl = event.url.split('/');
                var currentUrlSlug = currentUrl[currentUrl.length - 1];
                if (currentUrlSlug) {
                    _this.renderer.addClass(document.body, currentUrlSlug);
                }
                _this.previousUrl = currentUrlSlug;
                console.log(_this.previousUrl);
            }
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        $(function () {
            'use strict';
            skinChanger();
            CustomScrollbar();
            initSparkline();
            initCounters();
            CustomPageJS();
        });
        // Sparkline
        function initSparkline() {
            $('.sparkline').each(function () {
                var $this = $(this);
                $this.sparkline('html', $this.data());
            });
        }
        // Counters JS
        function initCounters() {
            $('.count-to').countTo();
        }
        // Skin changer
        function skinChanger() {
            $('.right-sidebar .choose-skin li').on('click', function () {
                var $body = $('body');
                var $this = $(this);
                var existTheme = $('.right-sidebar .choose-skin li.active').data('theme');
                $('.right-sidebar .choose-skin li').removeClass('active');
                $body.removeClass('theme-' + existTheme);
                $this.addClass('active');
                $body.addClass('theme-' + $this.data('theme'));
            });
        }
        // All Custom Scrollbar JS
        function CustomScrollbar() {
            $('.sidebar .menu .list').slimscroll({
                height: 'calc(100vh - 65px)',
                color: 'rgba(0,0,0,0.2)',
                position: 'left',
                size: '2px',
                alwaysVisible: false,
                borderRadius: '3px',
                railBorderRadius: '0'
            });
            $('.navbar-left .dropdown-menu .body .menu').slimscroll({
                height: '300px',
                color: 'rgba(0,0,0,0.2)',
                size: '3px',
                alwaysVisible: false,
                borderRadius: '3px',
                railBorderRadius: '0'
            });
            $('.right_chat .chat_body .chat-widget').slimscroll({
                height: 'calc(100vh - 145px)',
                color: 'rgba(0,0,0,0.1)',
                size: '2px',
                alwaysVisible: false,
                borderRadius: '3px',
                railBorderRadius: '2px',
                position: 'left',
            });
            $('.right-sidebar .slim_scroll').slimscroll({
                height: 'calc(100vh - 60px)',
                color: 'rgba(0,0,0,0.4)',
                size: '2px',
                alwaysVisible: false,
                borderRadius: '3px',
                railBorderRadius: '0'
            });
        }
        function CustomPageJS() {
            $('.boxs-close').on('click', function () {
                var element = $(this);
                var cards = element.parents('.card');
                cards.addClass('closed').fadeOut();
            });
            // Theme Light and Dark  ============
            $('.theme-light-dark .t-light').on('click', function () {
                $('body').removeClass('menu_dark');
            });
            $('.theme-light-dark .t-dark').on('click', function () {
                $('body').addClass('menu_dark');
            });
            $('.menu-sm').on('click', function () {
                $('body').toggleClass('menu_sm');
            });
            // Chat widget js ====
            $(document).ready(function () {
                $('.btn_overlay').on('click', function () {
                    $('.overlay_menu').fadeToggle(200);
                    $(this).toggleClass('btn-open').toggleClass('btn-close');
                });
            });
            $('.overlay_menu').on('click', function () {
                $('.overlay_menu').fadeToggle(200);
                $('.overlay_menu button.btn').toggleClass('btn-open').toggleClass('btn-close');
            });
            // =========
            $('.form-control').on('focus', function () {
                $(this).parent('.input-group').addClass('input-group-focus');
            }).on('blur', function () {
                $(this).parent('.input-group').removeClass('input-group-focus');
            });
        }
        // Fullscreen
        $(function () {
            'use strict';
            $('#supported').text('Supported/allowed: ' + !!screenfull.enabled);
            if (!screenfull.enabled) {
                return false;
            }
            $('#request').on('click', function () {
                screenfull.request($('#container')[0]);
                // Does not require jQuery. Can be used like this too:
                // screenfull.request(document.getElementById('container'));
            });
            $('#exit').on('click', function () {
                screenfull.exit();
            });
            $('[data-provide~="boxfull"]').on('click', function () {
                screenfull.toggle($('.box')[0]);
            });
            $('[data-provide~="fullscreen"]').on('click', function () {
                screenfull.toggle($('#container')[0]);
            });
            // var selector = '[data-provide~="boxfull"]';
            var selector = '[data-provide~="fullscreen"]';
            $(selector).each(function () {
                $(this).data('fullscreen-default-html', $(this).html());
            });
            document.addEventListener(screenfull.raw.fullscreenchange, function () {
                if (screenfull.isFullscreen) {
                    $(selector).each(function () {
                        $(this).addClass('is-fullscreen');
                    });
                }
                else {
                    $(selector).each(function () {
                        $(this).removeClass('is-fullscreen');
                    });
                }
            });
            function fullscreenchange() {
                var elem = screenfull.element;
                $('#status').text('Is fullscreen: ' + screenfull.isFullscreen);
                if (elem) {
                    $('#element').text('Element: ' + elem.localName + (elem.id ? '#' + elem.id : ''));
                }
                if (!screenfull.isFullscreen) {
                    $('#external-iframe').remove();
                    document.body.style.overflow = 'auto';
                }
            }
            screenfull.on('change', fullscreenchange);
            // Set the initial values
            fullscreenchange();
        }); // End of use strict
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_report_step_step_component__ = __webpack_require__("../../../../../src/app/pages/report/step/step.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_report_sleep_sleep_component__ = __webpack_require__("../../../../../src/app/pages/report/sleep/sleep.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_report_heartrate_heartrate_component__ = __webpack_require__("../../../../../src/app/pages/report/heartrate/heartrate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_report_bloodpressure_bloodpressure_component__ = __webpack_require__("../../../../../src/app/pages/report/bloodpressure/bloodpressure.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_report_sports_sports_component__ = __webpack_require__("../../../../../src/app/pages/report/sports/sports.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_users_users_component__ = __webpack_require__("../../../../../src/app/pages/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_devices_devices_component__ = __webpack_require__("../../../../../src/app/pages/devices/devices.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_dropzone_wrapper__ = __webpack_require__("../../../../ngx-dropzone-wrapper/dist/ngx-dropzone-wrapper.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_admin_admin_component__ = __webpack_require__("../../../../../src/app/pages/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__authentication_authentication_module__ = __webpack_require__("../../../../../src/app/authentication/authentication.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__pages_report_step_step_component__["a" /* StepComponent */],
                __WEBPACK_IMPORTED_MODULE_5__pages_report_sleep_sleep_component__["a" /* SleepComponent */],
                __WEBPACK_IMPORTED_MODULE_6__pages_report_heartrate_heartrate_component__["a" /* HeartrateComponent */],
                __WEBPACK_IMPORTED_MODULE_7__pages_report_bloodpressure_bloodpressure_component__["a" /* BloodpressureComponent */],
                __WEBPACK_IMPORTED_MODULE_8__pages_report_sports_sports_component__["a" /* SportsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__pages_users_users_component__["a" /* UsersComponent */],
                __WEBPACK_IMPORTED_MODULE_10__pages_devices_devices_component__["a" /* DevicesComponent */],
                __WEBPACK_IMPORTED_MODULE_12__pages_admin_admin_component__["a" /* AdminComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_11_ngx_dropzone_wrapper__["a" /* DropzoneModule */],
                __WEBPACK_IMPORTED_MODULE_13__authentication_authentication_module__["a" /* AuthenticationModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/authentication/authentication-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_in_sign_in_component__ = __webpack_require__("../../../../../src/app/authentication/sign-in/sign-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sign_up_sign_up_component__ = __webpack_require__("../../../../../src/app/authentication/sign-up/sign-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forgot_password_forgot_password_component__ = __webpack_require__("../../../../../src/app/authentication/forgot-password/forgot-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page404_page404_component__ = __webpack_require__("../../../../../src/app/authentication/page404/page404.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__page500_page500_component__ = __webpack_require__("../../../../../src/app/authentication/page500/page500.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__offline_offline_component__ = __webpack_require__("../../../../../src/app/authentication/offline/offline.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__locked_locked_component__ = __webpack_require__("../../../../../src/app/authentication/locked/locked.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        redirectTo: 'sign-in',
        pathMatch: 'full'
    },
    {
        path: 'sign-in',
        component: __WEBPACK_IMPORTED_MODULE_2__sign_in_sign_in_component__["a" /* SignInComponent */]
    },
    {
        path: 'sign-up',
        component: __WEBPACK_IMPORTED_MODULE_3__sign_up_sign_up_component__["a" /* SignUpComponent */]
    },
    {
        path: 'forgot-password',
        component: __WEBPACK_IMPORTED_MODULE_4__forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */]
    },
    {
        path: '404',
        component: __WEBPACK_IMPORTED_MODULE_5__page404_page404_component__["a" /* Page404Component */]
    },
    {
        path: '500',
        component: __WEBPACK_IMPORTED_MODULE_6__page500_page500_component__["a" /* Page500Component */]
    },
    {
        path: 'offline',
        component: __WEBPACK_IMPORTED_MODULE_7__offline_offline_component__["a" /* OfflineComponent */]
    },
    {
        path: 'locked',
        component: __WEBPACK_IMPORTED_MODULE_8__locked_locked_component__["a" /* LockedComponent */]
    }
];
var AuthenticationRoutingModule = /** @class */ (function () {
    function AuthenticationRoutingModule() {
    }
    AuthenticationRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AuthenticationRoutingModule);
    return AuthenticationRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/authentication/authentication.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_routing_module__ = __webpack_require__("../../../../../src/app/authentication/authentication-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sign_in_sign_in_component__ = __webpack_require__("../../../../../src/app/authentication/sign-in/sign-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sign_up_sign_up_component__ = __webpack_require__("../../../../../src/app/authentication/sign-up/sign-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__forgot_password_forgot_password_component__ = __webpack_require__("../../../../../src/app/authentication/forgot-password/forgot-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__page404_page404_component__ = __webpack_require__("../../../../../src/app/authentication/page404/page404.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__page500_page500_component__ = __webpack_require__("../../../../../src/app/authentication/page500/page500.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__locked_locked_component__ = __webpack_require__("../../../../../src/app/authentication/locked/locked.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__offline_offline_component__ = __webpack_require__("../../../../../src/app/authentication/offline/offline.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AuthenticationModule = /** @class */ (function () {
    function AuthenticationModule() {
    }
    AuthenticationModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__authentication_routing_module__["a" /* AuthenticationRoutingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__sign_in_sign_in_component__["a" /* SignInComponent */], __WEBPACK_IMPORTED_MODULE_4__sign_up_sign_up_component__["a" /* SignUpComponent */], __WEBPACK_IMPORTED_MODULE_5__forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */], __WEBPACK_IMPORTED_MODULE_6__page404_page404_component__["a" /* Page404Component */], __WEBPACK_IMPORTED_MODULE_7__page500_page500_component__["a" /* Page500Component */], __WEBPACK_IMPORTED_MODULE_8__locked_locked_component__["a" /* LockedComponent */], __WEBPACK_IMPORTED_MODULE_9__offline_offline_component__["a" /* OfflineComponent */]]
        })
    ], AuthenticationModule);
    return AuthenticationModule;
}());



/***/ }),

/***/ "../../../../../src/app/authentication/forgot-password/forgot-password.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/authentication/forgot-password/forgot-password.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\" authentication sidebar-collapse\">\n  <!-- Navbar -->\n  <nav class=\"navbar navbar-expand-lg fixed-top navbar-transparent\">\n    <div class=\"container\">\n      <div class=\"navbar-translate n_logo\">\n        <a class=\"navbar-brand\" href=\"javascript:void(0);\" title=\"\" target=\"_blank\">sQuare</a>\n        <button class=\"navbar-toggler\" type=\"button\">\n          <span class=\"navbar-toggler-bar bar1\"></span>\n          <span class=\"navbar-toggler-bar bar2\"></span>\n          <span class=\"navbar-toggler-bar bar3\"></span>\n        </button>\n      </div>\n      <div class=\"navbar-collapse\">\n        <ul class=\"navbar-nav\">\n          <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/dashboard\">Home</a></li>\n          <li class=\"nav-item\"><a class=\"nav-link\" href=\"javascript:void(0);\">Search Result</a></li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" title=\"Follow us on Twitter\" href=\"javascript:void(0);\" target=\"_blank\">\n              <i class=\"zmdi zmdi-twitter\"></i>\n              <span class=\"d-lg-none d-xl-none m-l-10\">Twitter</span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" title=\"Like us on Facebook\" href=\"javascript:void(0);\" target=\"_blank\">\n              <i class=\"zmdi zmdi-facebook\"></i>\n              <span class=\"d-lg-none d-xl-none m-l-10\">Facebook</span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" title=\"Follow us on Instagram\" href=\"javascript:void(0);\" target=\"_blank\">\n              <i class=\"zmdi zmdi-instagram\"></i>\n              <span class=\"d-lg-none d-xl-none m-l-10\">Instagram</span>\n            </a>\n          </li>\n          <li class=\"nav-item\"><a class=\"nav-link btn btn-white btn-round\" routerLink=\"/authentication/sign-in\">SIGN IN</a></li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n  <!-- End Navbar -->\n  <div class=\"page-header\">\n    <div class=\"container\">\n      <div class=\"col-md-12 content-center\">\n        <div class=\"card-plain\">\n          <form class=\"form\" >\n            <div class=\"header\">\n              <div class=\"logo-container expandUp\">\n                <img src=\"assets/images/logo.svg\" alt=\"\">\n              </div>\n              <h5>Forgot Password?</h5>\n              <span class=\"text-muted\">Enter your e-mail address below to reset your password.</span>\n            </div>\n            <div class=\"content\">\n              <div class=\"input-group input-lg\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter Email\">\n                <span class=\"input-group-addon\"><i class=\"zmdi zmdi-email\"></i></span>\n              </div>\n            </div>\n            <div class=\"footer\">\n              <a routerLink=\"/dashboard\" class=\"btn btn-primary btn-round btn-lg btn-block waves-effect waves-light\">SUBMIT</a>\n              <h5><a href=\"javascript:void(0);\" class=\"link\">Need Help?</a></h5>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n    <footer class=\"footer\">\n      <div class=\"container\">\n        <nav>\n          <ul>\n            <li><a href=\"http://thememakker.com/contact/\" target=\"_blank\">Contact Us</a></li>\n            <li><a href=\"http://thememakker.com/about/\" target=\"_blank\">About Us</a></li>\n            <li><a href=\"javascript:void(0);\">FAQ</a></li>\n          </ul>\n        </nav>\n        <div class=\"copyright\">\n          &copy; {{year}},\n          <span>Designed by <a href=\"http://thememakker.com/\" target=\"_blank\">ThemeMakker</a></span>\n        </div>\n      </div>\n    </footer>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/authentication/forgot-password/forgot-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent() {
        this.year = (new Date()).getFullYear();
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-forgot-password',
            template: __webpack_require__("../../../../../src/app/authentication/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__("../../../../../src/app/authentication/forgot-password/forgot-password.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "../../../../../src/app/authentication/locked/locked.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/authentication/locked/locked.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"authentication sidebar-collapse\">\n  <!-- Navbar -->\n  <nav class=\"navbar navbar-expand-lg fixed-top navbar-transparent\">\n    <div class=\"container\">\n      <div class=\"navbar-translate n_logo\">\n        <a class=\"navbar-brand\" href=\"javascript:void(0);\" title=\"\" target=\"_blank\">sQuare</a>\n        <button class=\"navbar-toggler\" type=\"button\">\n          <span class=\"navbar-toggler-bar bar1\"></span>\n          <span class=\"navbar-toggler-bar bar2\"></span>\n          <span class=\"navbar-toggler-bar bar3\"></span>\n        </button>\n      </div>\n      <div class=\"navbar-collapse\">\n        <ul class=\"navbar-nav\">\n          <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/dashboard\">Home</a></li>\n          <li class=\"nav-item\"><a class=\"nav-link\" href=\"javascript:void(0);\">Search Result</a></li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" title=\"Follow us on Twitter\" href=\"javascript:void(0);\" target=\"_blank\">\n              <i class=\"zmdi zmdi-twitter\"></i>\n              <span class=\"d-lg-none d-xl-none m-l-10\">Twitter</span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" title=\"Like us on Facebook\" href=\"javascript:void(0);\" target=\"_blank\">\n              <i class=\"zmdi zmdi-facebook\"></i>\n              <span class=\"d-lg-none d-xl-none m-l-10\">Facebook</span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" title=\"Follow us on Instagram\" href=\"javascript:void(0);\" target=\"_blank\">\n              <i class=\"zmdi zmdi-instagram\"></i>\n              <span class=\"d-lg-none d-xl-none m-l-10\">Instagram</span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link btn btn-white btn-round\" routerLink=\"/authentication/sign-up\">SIGN UP</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n  <!-- End Navbar -->\n  <div class=\"page-header\">\n    <div class=\"page-header-image\"></div>\n    <div class=\"container\">\n      <div class=\"col-md-12 content-center\">\n        <div class=\"card-plain\">\n          <form class=\"form\">\n            <div class=\"header\">\n              <div class=\"logo-container expandUp\">\n                <img class=\"rounded-circle\" src=\"assets/images/profile_av.jpg\" alt=\"\">\n              </div>\n              <h5>Michael</h5>\n              <span>Locked</span>\n            </div>\n            <div class=\"content\">\n              <div class=\"input-group input-lg\">\n                <input type=\"password\" class=\"form-control\" placeholder=\"Enter your Password\">\n                <span class=\"input-group-addon\">\n                                    <i class=\"zmdi zmdi-lock\"></i>\n                                </span>\n              </div>\n            </div>\n            <div class=\"footer\">\n              <a routerLink=\"/authentication/sign-in\" class=\"btn btn-primary btn-round btn-lg btn-block waves-effect waves-light\">LOG IN</a>\n              <h5><a href=\"javascript:void(0);\" class=\"link\">Need Help?</a></h5>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n    <footer class=\"footer\">\n      <div class=\"container\">\n        <nav>\n          <ul>\n            <li><a href=\"http://thememakker.com/contact/\" target=\"_blank\">Contact Us</a></li>\n            <li><a href=\"http://thememakker.com/about/\" target=\"_blank\">About Us</a></li>\n            <li><a href=\"javascript:void(0);\">FAQ</a></li>\n          </ul>\n        </nav>\n        <div class=\"copyright\">\n          &copy; {{year}},\n          <span>Designed by <a href=\"http://thememakker.com/\" target=\"_blank\">ThemeMakker</a></span>\n        </div>\n      </div>\n    </footer>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/authentication/locked/locked.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LockedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LockedComponent = /** @class */ (function () {
    function LockedComponent() {
        this.year = (new Date()).getFullYear();
    }
    LockedComponent.prototype.ngOnInit = function () {
    };
    LockedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-locked',
            template: __webpack_require__("../../../../../src/app/authentication/locked/locked.component.html"),
            styles: [__webpack_require__("../../../../../src/app/authentication/locked/locked.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LockedComponent);
    return LockedComponent;
}());



/***/ }),

/***/ "../../../../../src/app/authentication/offline/offline.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/authentication/offline/offline.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"authentication sidebar-collapse\">\n  <!-- Navbar -->\n  <nav class=\"navbar navbar-expand-lg fixed-top navbar-transparent\">\n    <div class=\"container\">\n      <div class=\"navbar-translate n_logo\">\n        <a class=\"navbar-brand\" href=\"javascript:void(0);\" title=\"\" target=\"_blank\">sQuare</a>\n        <button class=\"navbar-toggler\" type=\"button\">\n          <span class=\"navbar-toggler-bar bar1\"></span>\n          <span class=\"navbar-toggler-bar bar2\"></span>\n          <span class=\"navbar-toggler-bar bar3\"></span>\n        </button>\n      </div>\n      <div class=\"navbar-collapse\">\n        <ul class=\"navbar-nav\">\n          <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/dashboard\">Home</a></li>\n          <li class=\"nav-item\"><a class=\"nav-link\" href=\"javascript:void(0);\">Search Result</a></li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" title=\"Follow us on Twitter\" href=\"javascript:void(0);\" target=\"_blank\">\n              <i class=\"zmdi zmdi-twitter\"></i>\n              <span class=\"d-lg-none d-xl-none m-l-10\">Twitter</span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" title=\"Like us on Facebook\" href=\"javascript:void(0);\" target=\"_blank\">\n              <i class=\"zmdi zmdi-facebook\"></i>\n              <span class=\"d-lg-none d-xl-none m-l-10\">Facebook</span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" title=\"Follow us on Instagram\" href=\"javascript:void(0);\" target=\"_blank\">\n              <i class=\"zmdi zmdi-instagram\"></i>\n              <span class=\"d-lg-none d-xl-none m-l-10\">Instagram</span>\n            </a>\n          </li>\n          <li class=\"nav-item\"><a class=\"nav-link btn btn-white btn-round\" routerLink=\"/authentication/sign-in\">SIGN IN</a></li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n  <!-- End Navbar -->\n  <div class=\"page-header\">\n    <div class=\"container\">\n      <div class=\"col-md-12 content-center\">\n        <div class=\"card-plain\">\n          <form class=\"form\" method=\"\" action=\"\">\n            <div class=\"header\">\n              <div class=\"logo-container expandUp\">\n                <img src=\"assets/images/logo.svg\" alt=\"\">\n              </div>\n              <h5>The General Shutdown</h5>\n              <span>Maintanance or not?</span>\n            </div>\n            <div class=\"content\">\n              <div class=\"input-group input-lg\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n                <span class=\"input-group-addon\"><i class=\"zmdi zmdi-search\"></i></span>\n              </div>\n            </div>\n            <div class=\"footer\">\n              <a routerLink=\"/dashboard\" class=\"btn btn-primary btn-round btn-lg btn-block waves-effect waves-light\">GO TO HOMEPAGE</a>\n              <h5><a href=\"javascript:void(0);\" class=\"link\">Need Help?</a></h5>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n    <footer class=\"footer\">\n      <div class=\"container\">\n        <nav>\n          <ul>\n            <li><a href=\"http://thememakker.com/contact/\" target=\"_blank\">Contact Us</a></li>\n            <li><a href=\"http://thememakker.com/about/\" target=\"_blank\">About Us</a></li>\n            <li><a href=\"javascript:void(0);\">FAQ</a></li>\n          </ul>\n        </nav>\n        <div class=\"copyright\">\n          &copy; {{year}},\n          <span>Designed by <a href=\"http://thememakker.com/\" target=\"_blank\">ThemeMakker</a></span>\n        </div>\n      </div>\n    </footer>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/authentication/offline/offline.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfflineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OfflineComponent = /** @class */ (function () {
    function OfflineComponent() {
        this.year = (new Date()).getFullYear();
    }
    OfflineComponent.prototype.ngOnInit = function () {
    };
    OfflineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-offline',
            template: __webpack_require__("../../../../../src/app/authentication/offline/offline.component.html"),
            styles: [__webpack_require__("../../../../../src/app/authentication/offline/offline.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OfflineComponent);
    return OfflineComponent;
}());



/***/ }),

/***/ "../../../../../src/app/authentication/page404/page404.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/authentication/page404/page404.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\" authentication sidebar-collapse\">\n  <!-- Navbar -->\n  <nav class=\"navbar navbar-expand-lg fixed-top navbar-transparent\">\n    <div class=\"container\">\n      <div class=\"navbar-translate n_logo\">\n        <a class=\"navbar-brand\" href=\"javascript:void(0);\" title=\"\" target=\"_blank\">sQuare</a>\n        <button class=\"navbar-toggler\" type=\"button\">\n          <span class=\"navbar-toggler-bar bar1\"></span>\n          <span class=\"navbar-toggler-bar bar2\"></span>\n          <span class=\"navbar-toggler-bar bar3\"></span>\n        </button>\n      </div>\n      <div class=\"navbar-collapse\">\n        <ul class=\"navbar-nav\">\n          <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/dashboard\">Home</a></li>\n          <li class=\"nav-item\"><a class=\"nav-link\" href=\"javascript:void(0);\">Search Result</a></li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" title=\"Follow us on Twitter\" href=\"javascript:void(0);\" target=\"_blank\">\n              <i class=\"zmdi zmdi-twitter\"></i>\n              <span class=\"d-lg-none d-xl-none m-l-10\">Twitter</span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" title=\"Like us on Facebook\" href=\"javascript:void(0);\" target=\"_blank\">\n              <i class=\"zmdi zmdi-facebook\"></i>\n              <span class=\"d-lg-none d-xl-none m-l-10\">Facebook</span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" title=\"Follow us on Instagram\" href=\"javascript:void(0);\" target=\"_blank\">\n              <i class=\"zmdi zmdi-instagram\"></i>\n              <span class=\"d-lg-none d-xl-none m-l-10\">Instagram</span>\n            </a>\n          </li>\n          <li class=\"nav-item\"><a class=\"nav-link btn btn-white btn-round\" routerLink=\"/authentication/sign-in\">SIGN IN</a></li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n  <!-- End Navbar -->\n  <div class=\"page-header\">\n    <div class=\"container\">\n      <div class=\"col-md-12 content-center\">\n        <div class=\"card-plain\">\n          <form class=\"form\" method=\"\" action=\"\">\n            <div class=\"header\">\n              <div class=\"logo-container expandUp\">\n                <img src=\"assets/images/logo.svg\" alt=\"\">\n              </div>\n              <h5>Error 404</h5>\n              <span>Page not found</span>\n            </div>\n            <div class=\"content\">\n              <div class=\"input-group input-lg\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n                <span class=\"input-group-addon\">\n                    <i class=\"zmdi zmdi-search\"></i>\n                </span>\n              </div>\n            </div>\n            <div class=\"footer text-center\">\n              <a routerLink=\"/dashboard\" class=\"btn btn-primary btn-round btn-lg btn-block waves-effect waves-light\">GO TO HOMEPAGE</a>\n              <h5><a href=\"javascript:void(0);\" class=\"link\">Need Help?</a></h5>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n    <footer class=\"footer\">\n      <div class=\"container\">\n        <nav>\n          <ul>\n            <li><a href=\"http://thememakker.com/contact/\" target=\"_blank\">Contact Us</a></li>\n            <li><a href=\"http://thememakker.com/about/\" target=\"_blank\">About Us</a></li>\n            <li><a href=\"javascript:void(0);\">FAQ</a></li>\n          </ul>\n        </nav>\n        <div class=\"copyright\">\n          &copy; {{year}},\n          <span>Designed by <a href=\"http://thememakker.com/\" target=\"_blank\">ThemeMakker</a></span>\n        </div>\n      </div>\n    </footer>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/authentication/page404/page404.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page404Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Page404Component = /** @class */ (function () {
    function Page404Component() {
        this.year = (new Date()).getFullYear();
    }
    Page404Component.prototype.ngOnInit = function () {
    };
    Page404Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page404',
            template: __webpack_require__("../../../../../src/app/authentication/page404/page404.component.html"),
            styles: [__webpack_require__("../../../../../src/app/authentication/page404/page404.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Page404Component);
    return Page404Component;
}());



/***/ }),

/***/ "../../../../../src/app/authentication/page500/page500.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/authentication/page500/page500.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\" authentication sidebar-collapse\">\n  <!-- Navbar -->\n  <nav class=\"navbar navbar-expand-lg fixed-top navbar-transparent\">\n    <div class=\"container\">\n      <div class=\"navbar-translate n_logo\">\n        <a class=\"navbar-brand\" href=\"javascript:void(0);\" title=\"\" target=\"_blank\">sQuare</a>\n        <button class=\"navbar-toggler\" type=\"button\">\n          <span class=\"navbar-toggler-bar bar1\"></span>\n          <span class=\"navbar-toggler-bar bar2\"></span>\n          <span class=\"navbar-toggler-bar bar3\"></span>\n        </button>\n      </div>\n      <div class=\"navbar-collapse\">\n        <ul class=\"navbar-nav\">\n          <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/dashboard\">Home</a></li>\n          <li class=\"nav-item\"><a class=\"nav-link\" href=\"javascript:void(0);\">Search Result</a></li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" title=\"Follow us on Twitter\" href=\"javascript:void(0);\" target=\"_blank\">\n              <i class=\"zmdi zmdi-twitter\"></i>\n              <span class=\"d-lg-none d-xl-none m-l-10\">Twitter</span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" title=\"Like us on Facebook\" href=\"javascript:void(0);\" target=\"_blank\">\n              <i class=\"zmdi zmdi-facebook\"></i>\n              <span class=\"d-lg-none d-xl-none m-l-10\">Facebook</span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" title=\"Follow us on Instagram\" href=\"javascript:void(0);\" target=\"_blank\">\n              <i class=\"zmdi zmdi-instagram\"></i>\n              <span class=\"d-lg-none d-xl-none m-l-10\">Instagram</span>\n            </a>\n          </li>\n          <li class=\"nav-item\"><a class=\"nav-link btn btn-white btn-round\" routerLink=\"/authentication/sign-in\">SIGN IN</a></li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n  <!-- End Navbar -->\n  <div class=\"page-header\">\n    <div class=\"container\">\n      <div class=\"col-md-12 content-center\">\n        <div class=\"card-plain\">\n          <form class=\"form\" method=\"\" action=\"\">\n            <div class=\"header\">\n              <div class=\"logo-container expandUp\">\n                <img src=\"assets/images/logo.svg\" alt=\"\">\n              </div>\n              <h5>Error 500</h5>\n              <span>Something's broken :-(</span>\n            </div>\n            <div class=\"content\">\n              <div class=\"input-group input-lg\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n                <span class=\"input-group-addon\">\n                                    <i class=\"zmdi zmdi-search\"></i>\n                                </span>\n              </div>\n            </div>\n            <div class=\"footer\">\n              <a routerLink=\"/dashboard\" class=\"btn btn-primary btn-round btn-lg btn-block waves-effect waves-light\">GO TO HOMEPAGE</a>\n              <h5><a href=\"javascript:void(0);\" class=\"link\">Need Help?</a></h5>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n    <footer class=\"footer\">\n      <div class=\"container\">\n        <nav>\n          <ul>\n            <li><a href=\"http://thememakker.com/contact/\" target=\"_blank\">Contact Us</a></li>\n            <li><a href=\"http://thememakker.com/about/\" target=\"_blank\">About Us</a></li>\n            <li><a href=\"javascript:void(0);\">FAQ</a></li>\n          </ul>\n        </nav>\n        <div class=\"copyright\">\n          &copy; {{year}},\n          <span>Designed by <a href=\"http://thememakker.com/\" target=\"_blank\">ThemeMakker</a></span>\n        </div>\n      </div>\n    </footer>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/authentication/page500/page500.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page500Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Page500Component = /** @class */ (function () {
    function Page500Component() {
        this.year = (new Date()).getFullYear();
    }
    Page500Component.prototype.ngOnInit = function () {
    };
    Page500Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page500',
            template: __webpack_require__("../../../../../src/app/authentication/page500/page500.component.html"),
            styles: [__webpack_require__("../../../../../src/app/authentication/page500/page500.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Page500Component);
    return Page500Component;
}());



/***/ }),

/***/ "../../../../../src/app/authentication/sign-in/sign-in.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/authentication/sign-in/sign-in.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"authentication sidebar-collapse\">\n    <!-- Navbar -->\n    <nav class=\"navbar navbar-expand-lg fixed-top navbar-transparent\">\n        <div class=\"container\">\n            <div class=\"navbar-translate n_logo\">\n                <a class=\"navbar-brand\" href=\"javascript:void(0);\" title=\"\" target=\"_blank\">Management</a>\n                <button class=\"navbar-toggler\" type=\"button\">\n                    <span class=\"navbar-toggler-bar bar1\"></span>\n                    <span class=\"navbar-toggler-bar bar2\"></span>\n                    <span class=\"navbar-toggler-bar bar3\"></span>\n                </button>\n            </div>\n        </div>\n    </nav>\n    <!-- End Navbar -->\n    <div class=\"page-header\">\n        <div class=\"container\">\n            <div class=\"col-md-12 content-center\">\n                <div class=\"card-plain\">\n                    <form class=\"form\">\n                        <div class=\"header\">\n                            <div class=\"logo-container expandUp\">\n                                <img src=\"assets/images/logo.svg\" alt=\"\">\n                            </div>\n                            <h5>Log in</h5>\n                        </div>\n                        <div class=\"content\">\n                            <div class=\"input-group input-lg\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Enter User Name\">\n                                <span class=\"input-group-addon\">\n                                    <i class=\"zmdi zmdi-account-circle\"></i>\n                                </span>\n                            </div>\n                            <div class=\"input-group input-lg\">\n                                <input type=\"password\" placeholder=\"Password\" class=\"form-control\" />\n                                <span class=\"input-group-addon\"><i class=\"zmdi zmdi-lock\"></i></span>\n                            </div>\n                        </div>\n                        <div class=\"footer\">\n                            <a routerLink=\"/\" class=\"btn btn-primary btn-round btn-lg btn-block \">SIGN IN</a>\n                            <h5><a routerLink=\"/authentication/forgot-password\" class=\"link\">Forgot Password?</a></h5>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n        <footer class=\"footer\">\n            <div class=\"container\">\n                <nav>\n                    <ul>\n                        <li><a href=\"http://thememakker.com/contact/\" target=\"_blank\">Contact Us</a></li>\n                        <li><a href=\"http://thememakker.com/about/\" target=\"_blank\">About Us</a></li>\n                        <li><a href=\"javascript:void(0);\">FAQ</a></li>\n                    </ul>\n                </nav>\n                <div class=\"copyright\">\n                    &copy;\n                    {{year}},\n                    <span>Designed by <a href=\"http://thememakker.com/\" target=\"_blank\">AblegoTech</a></span>\n                </div>\n            </div>\n        </footer>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/authentication/sign-in/sign-in.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignInComponent = /** @class */ (function () {
    function SignInComponent() {
        this.year = (new Date()).getFullYear();
    }
    SignInComponent.prototype.ngOnInit = function () {
    };
    SignInComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sign-in',
            template: __webpack_require__("../../../../../src/app/authentication/sign-in/sign-in.component.html"),
            styles: [__webpack_require__("../../../../../src/app/authentication/sign-in/sign-in.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "../../../../../src/app/authentication/sign-up/sign-up.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/authentication/sign-up/sign-up.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"authentication sidebar-collapse\">\n  <!-- Navbar -->\n  <nav class=\"navbar navbar-expand-lg fixed-top navbar-transparent\">\n    <div class=\"container\">\n      <div class=\"navbar-translate n_logo\">\n        <a class=\"navbar-brand\" href=\"javascript:void(0);\" title=\"\" target=\"_blank\">sQuare</a>\n        <button class=\"navbar-toggler\" type=\"button\">\n          <span class=\"navbar-toggler-bar bar1\"></span>\n          <span class=\"navbar-toggler-bar bar2\"></span>\n          <span class=\"navbar-toggler-bar bar3\"></span>\n        </button>\n      </div>\n      <div class=\"navbar-collapse\">\n        <ul class=\"navbar-nav\">\n          <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/dashboard\">Home</a></li>\n          <li class=\"nav-item\"><a class=\"nav-link\" href=\"javascript:void(0);\">Search Result</a></li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" title=\"Follow us on Twitter\" href=\"javascript:void(0);\" target=\"_blank\">\n              <i class=\"zmdi zmdi-twitter\"></i>\n              <span class=\"d-lg-none d-xl-none m-l-10\">Twitter</span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" title=\"Like us on Facebook\" href=\"javascript:void(0);\" target=\"_blank\">\n              <i class=\"zmdi zmdi-facebook\"></i>\n              <span class=\"d-lg-none d-xl-none m-l-10\">Facebook</span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" title=\"Follow us on Instagram\" href=\"javascript:void(0);\" target=\"_blank\">\n              <i class=\"zmdi zmdi-instagram\"></i>\n              <span class=\"d-lg-none d-xl-none m-l-10\">Instagram</span>\n            </a>\n          </li>\n          <li class=\"nav-item\"><a class=\"nav-link btn btn-white btn-round\" routerLink=\"/authentication/sign-in\">SIGN IN</a></li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n  <!-- End Navbar -->\n  <div class=\"page-header\">\n    <div class=\"container\">\n      <div class=\"col-md-12 content-center\">\n        <div class=\"card-plain\">\n          <form class=\"form\">\n            <div class=\"header\">\n              <div class=\"logo-container expandUp\">\n                <img src=\"assets/images/logo.svg\" alt=\"\">\n              </div>\n              <h5>Sign Up</h5>\n              <span>Register a new membership</span>\n            </div>\n            <div class=\"content\">\n              <div class=\"input-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter User Name\">\n                <span class=\"input-group-addon\"><i class=\"zmdi zmdi-account-circle\"></i></span>\n              </div>\n              <div class=\"input-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter Email\">\n                <span class=\"input-group-addon\"><i class=\"zmdi zmdi-email\"></i></span>\n              </div>\n              <div class=\"input-group\">\n                <input type=\"password\" placeholder=\"Password\" class=\"form-control\" />\n                <span class=\"input-group-addon\"><i class=\"zmdi zmdi-lock\"></i></span>\n              </div>\n              <div class=\"input-group\">\n                <input type=\"password\" placeholder=\"Confirm Password\" class=\"form-control\" />\n                <span class=\"input-group-addon\"><i class=\"zmdi zmdi-lock\"></i></span>\n              </div>\n            </div>\n            <div class=\"checkbox\">\n              <input id=\"terms\" type=\"checkbox\">\n              <label for=\"terms\">\n                I read and agree to the <a href=\"javascript:void(0);\">terms of usage</a>\n              </label>\n            </div>\n            <div class=\"footer\">\n              <a routerLink=\"/dashboard\" class=\"btn btn-primary btn-round btn-lg btn-block waves-effect waves-light\">SIGN UP</a>\n              <h5><a class=\"link\" routerLink=\"/authentication/sign-in\">You already have a membership?</a></h5>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n    <footer class=\"footer\">\n      <div class=\"container\">\n        <nav>\n          <ul>\n            <li><a href=\"http://thememakker.com/contact/\" target=\"_blank\">Contact Us</a></li>\n            <li><a href=\"http://thememakker.com/about/\" target=\"_blank\">About Us</a></li>\n            <li><a href=\"javascript:void(0);\">FAQ</a></li>\n          </ul>\n        </nav>\n        <div class=\"copyright\">\n          &copy; {{year}},\n          <span>Designed by <a href=\"http://thememakker.com/\" target=\"_blank\">ThemeMakker</a></span>\n        </div>\n      </div>\n    </footer>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/authentication/sign-up/sign-up.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignUpComponent = /** @class */ (function () {
    function SignUpComponent() {
        this.year = (new Date()).getFullYear();
    }
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sign-up',
            template: __webpack_require__("../../../../../src/app/authentication/sign-up/sign-up.component.html"),
            styles: [__webpack_require__("../../../../../src/app/authentication/sign-up/sign-up.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/admin/admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "dropzone>.dropzone.dz-wrapper .dz-message {\n    min-height: 130px !important;\n}\n\n/* .dropdown-menu {\n    display: none !important;\n}\n\n.bootstrap-select.show .dropdown-menu {\n    display: inline-block !important;\n} */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\n    <div class=\"block-header\">\n        <div class=\"row\">\n            <div class=\"col-lg-7 col-md-6 col-sm-12\">\n                <h2>管理者</h2>\n            </div>\n        </div>\n    </div>\n    <div class=\"container-fluid\">\n        <div class=\"row clearfix\">\n            <div class=\"col-md-8 col-lg-8\">\n                <div class=\"card\">\n                    <div class=\"header\">\n                        <div class=\"form-group\"></div>\n                    </div>\n                    <div class=\"body\">\n                        <div id=\"m_table_chart\">\n                            <table class=\"table table-bordered table-striped table-hover dataTable js-exportable\">\n                                <thead>\n                                    <tr>\n                                        <th>姓名</th>\n                                        <th>Email</th>\n                                        <th>管理者身份</th>\n                                        <th>群組</th>\n                                        <th>動作</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let admin of list_admin\">\n                                        <td>{{admin.name}}</td>\n                                        <td>{{admin.email}}</td>\n                                        <td>{{admin.type}}</td>\n                                        <td>{{admin.group}}</td>\n                                        <td>\n                                            <button type=\"button\" class=\"btn btn-default btn-icon btn-icon-mini btn-round\">\n                                                <i class=\"zmdi zmdi-edit\"></i>\n                                            </button>\n                                            <button type=\"button\" class=\"btn btn-default btn-icon btn-icon-mini btn-round btn-delete\">\n                                                <i class=\"zmdi zmdi-delete\"></i>\n                                            </button>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n                <a href=\"#addModal\" data-toggle=\"modal\" data-target=\"#addModal\">\n                    <button type=\"button\" class=\"btn btn-warning btn-round\">\n                        <i class=\"zmdi zmdi-plus\"></i>&nbsp;單筆\n                    </button>\n                </a>\n            </div>\n        </div>\n    </div>\n</section>\n\n<!-- Modal Dialogs ========= -->\n<div class=\"modal fade\" id=\"addModal\" tabindex=\"-1\" role=\"dialog\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h4 class=\"title\">管理者資料輸入</h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row clearfix\">\n                    <div class=\"col-md-12 col-lg-12\">\n                        <form>\n                            <label for=\"modal_name\">姓名</label>\n                            <div class=\"form-group\">\n                                <input type=\"text\" id=\"modal_name\" class=\"form-control\">\n                            </div>\n                            <label for=\"modal_email\">Email</label>\n                            <div class=\"form-group\">\n                                <input type=\"text\" id=\"modal_email\" class=\"form-control\">\n                            </div>\n                            <label for=\"modal_type\">身份</label>\n                            <div class=\"form-group\">\n                                <input type=\"text\" id=\"modal_type\" class=\"form-control\">\n                            </div>\n                            <label for=\"modal_type\">群組</label>\n                            <div class=\"form-group\">\n                                <select class=\"selectpicker show-tick\" multiple title=\"請選擇群組...\" style=\"color: #000; min-height: 200px\">\n                                    <option>田徑隊一</option>\n                                    <option>田徑隊二</option>\n                                    <option>游泳隊一</option>\n                                    <option>游泳隊二</option>\n                                </select>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-danger btn-round waves-effect\" (click)=\"addAdmin()\">確認</button>\n                <button type=\"button\" class=\"btn btn-default btn-simple btn-round waves-effect\" data-dismiss=\"modal\">取消</button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
        this.list_group = [];
        this.list_admin = [];
        this.loadData();
    }
    AdminComponent.prototype.loadData = function () {
        this.list_admin.push({ name: '王小明', email: 'wang01@gmail.com', type: '教練', group: '' });
    };
    AdminComponent.prototype.ngOnInit = function () {
        $(function () {
            $('.btn-delete').on('click', function () {
                showCancelMessage();
            });
            $('.selectpicker').selectpicker();
        });
        function showCancelMessage() {
            swal({
                title: '確定要刪除嗎？',
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#DD6B55',
                confirmButtonText: '確定',
                cancelButtonText: '取消',
                closeOnConfirm: false,
                closeOnCancel: true
            }, function (isConfirm) {
                if (isConfirm) {
                    swal('已刪除!', '', 'success');
                }
            });
        }
    };
    AdminComponent.prototype.addAdmin = function () {
        swal({
            title: '新增成功',
            type: 'success',
            confirmButtonColor: '#DD6B55',
            confirmButtonText: '返回列表',
            closeOnConfirm: true
        }, function (isConfirm) {
            $('#addModal').modal('hide');
        });
    };
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin',
            template: __webpack_require__("../../../../../src/app/pages/admin/admin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/devices/devices.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body.stop-scrolling {\n  height: 100%;\n  overflow: hidden; }\n\n.sweet-overlay {\n  background-color: black;\n  /* IE8 */\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=40)\";\n  /* IE8 */\n  background-color: rgba(0, 0, 0, 0.4);\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: none;\n  z-index: 10000; }\n\n.sweet-alert {\n  background-color: white;\n  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  width: 478px;\n  padding: 17px;\n  border-radius: 5px;\n  text-align: center;\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  margin-left: -256px;\n  margin-top: -200px;\n  overflow: hidden;\n  display: none;\n  z-index: 99999; }\n\n@media all and (max-width: 540px) {\n    .sweet-alert {\n      width: auto;\n      margin-left: 0;\n      margin-right: 0;\n      left: 15px;\n      right: 15px; } }\n\n.sweet-alert h2 {\n    color: #575757;\n    font-size: 30px;\n    text-align: center;\n    font-weight: 600;\n    text-transform: none;\n    position: relative;\n    margin: 25px 0;\n    padding: 0;\n    line-height: 40px;\n    display: block; }\n\n.sweet-alert p {\n    color: #797979;\n    font-size: 16px;\n    text-align: center;\n    font-weight: 300;\n    position: relative;\n    text-align: inherit;\n    float: none;\n    margin: 0;\n    padding: 0;\n    line-height: normal; }\n\n.sweet-alert fieldset {\n    border: none;\n    position: relative; }\n\n.sweet-alert .sa-error-container {\n    background-color: #f1f1f1;\n    margin-left: -17px;\n    margin-right: -17px;\n    overflow: hidden;\n    padding: 0 10px;\n    max-height: 0;\n    webkit-transition: padding 0.15s, max-height 0.15s;\n    -webkit-transition: padding 0.15s, max-height 0.15s;\n    transition: padding 0.15s, max-height 0.15s; }\n\n.sweet-alert .sa-error-container.show {\n      padding: 10px 0;\n      max-height: 100px;\n      webkit-transition: padding 0.2s, max-height 0.2s;\n      -webkit-transition: padding 0.25s, max-height 0.25s;\n      transition: padding 0.25s, max-height 0.25s; }\n\n.sweet-alert .sa-error-container .icon {\n      display: inline-block;\n      width: 24px;\n      height: 24px;\n      border-radius: 50%;\n      background-color: #ea7d7d;\n      color: white;\n      line-height: 24px;\n      text-align: center;\n      margin-right: 3px; }\n\n.sweet-alert .sa-error-container p {\n      display: inline-block; }\n\n.sweet-alert .sa-input-error {\n    position: absolute;\n    top: 29px;\n    right: 26px;\n    width: 20px;\n    height: 20px;\n    opacity: 0;\n    -webkit-transform: scale(0.5);\n    transform: scale(0.5);\n    -webkit-transform-origin: 50% 50%;\n    transform-origin: 50% 50%;\n    -webkit-transition: all 0.1s;\n    transition: all 0.1s; }\n\n.sweet-alert .sa-input-error::before, .sweet-alert .sa-input-error::after {\n      content: \"\";\n      width: 20px;\n      height: 6px;\n      background-color: #f06e57;\n      border-radius: 3px;\n      position: absolute;\n      top: 50%;\n      margin-top: -4px;\n      left: 50%;\n      margin-left: -9px; }\n\n.sweet-alert .sa-input-error::before {\n      -webkit-transform: rotate(-45deg);\n      transform: rotate(-45deg); }\n\n.sweet-alert .sa-input-error::after {\n      -webkit-transform: rotate(45deg);\n      transform: rotate(45deg); }\n\n.sweet-alert .sa-input-error.show {\n      opacity: 1;\n      -webkit-transform: scale(1);\n      transform: scale(1); }\n\n.sweet-alert input {\n    width: 100%;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    border-radius: 3px;\n    border: 1px solid #d7d7d7;\n    height: 43px;\n    margin-top: 10px;\n    margin-bottom: 17px;\n    font-size: 18px;\n    -webkit-box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.06);\n            box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.06);\n    padding: 0 12px;\n    display: none;\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s; }\n\n.sweet-alert input:focus {\n      outline: none;\n      -webkit-box-shadow: 0px 0px 3px #c4e6f5;\n              box-shadow: 0px 0px 3px #c4e6f5;\n      border: 1px solid #b4dbed; }\n\n.sweet-alert input:focus::-moz-placeholder {\n        -webkit-transition: opacity 0.3s 0.03s ease;\n        transition: opacity 0.3s 0.03s ease;\n        opacity: 0.5; }\n\n.sweet-alert input:focus:-ms-input-placeholder {\n        -webkit-transition: opacity 0.3s 0.03s ease;\n        transition: opacity 0.3s 0.03s ease;\n        opacity: 0.5; }\n\n.sweet-alert input:focus::-webkit-input-placeholder {\n        -webkit-transition: opacity 0.3s 0.03s ease;\n        transition: opacity 0.3s 0.03s ease;\n        opacity: 0.5; }\n\n.sweet-alert input::-moz-placeholder {\n      color: #bdbdbd; }\n\n.sweet-alert input:-ms-input-placeholder {\n      color: #bdbdbd; }\n\n.sweet-alert input::-webkit-input-placeholder {\n      color: #bdbdbd; }\n\n.sweet-alert.show-input input {\n    display: block; }\n\n.sweet-alert .sa-confirm-button-container {\n    display: inline-block;\n    position: relative; }\n\n.sweet-alert .la-ball-fall {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    margin-left: -27px;\n    margin-top: 4px;\n    opacity: 0;\n    visibility: hidden; }\n\n.sweet-alert button {\n    background-color: #8CD4F5;\n    color: white;\n    border: none;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    font-size: 17px;\n    font-weight: 500;\n    border-radius: 5px;\n    padding: 10px 32px;\n    margin: 26px 5px 0 5px;\n    cursor: pointer; }\n\n.sweet-alert button:focus {\n      outline: none;\n      -webkit-box-shadow: 0 0 2px rgba(128, 179, 235, 0.5), inset 0 0 0 1px rgba(0, 0, 0, 0.05);\n              box-shadow: 0 0 2px rgba(128, 179, 235, 0.5), inset 0 0 0 1px rgba(0, 0, 0, 0.05); }\n\n.sweet-alert button:hover {\n      background-color: #7ecff4; }\n\n.sweet-alert button:active {\n      background-color: #5dc2f1; }\n\n.sweet-alert button.cancel {\n      background-color: #C1C1C1; }\n\n.sweet-alert button.cancel:hover {\n        background-color: #b9b9b9; }\n\n.sweet-alert button.cancel:active {\n        background-color: #a8a8a8; }\n\n.sweet-alert button.cancel:focus {\n        -webkit-box-shadow: rgba(197, 205, 211, 0.8) 0px 0px 2px, rgba(0, 0, 0, 0.0470588) 0px 0px 0px 1px inset !important;\n                box-shadow: rgba(197, 205, 211, 0.8) 0px 0px 2px, rgba(0, 0, 0, 0.0470588) 0px 0px 0px 1px inset !important; }\n\n.sweet-alert button[disabled] {\n      opacity: .6;\n      cursor: default; }\n\n.sweet-alert button.confirm[disabled] {\n      color: transparent; }\n\n.sweet-alert button.confirm[disabled] ~ .la-ball-fall {\n        opacity: 1;\n        visibility: visible;\n        -webkit-transition-delay: 0s;\n                transition-delay: 0s; }\n\n.sweet-alert button::-moz-focus-inner {\n      border: 0; }\n\n.sweet-alert[data-has-cancel-button=false] button {\n    -webkit-box-shadow: none !important;\n            box-shadow: none !important; }\n\n.sweet-alert[data-has-confirm-button=false][data-has-cancel-button=false] {\n    padding-bottom: 40px; }\n\n.sweet-alert .sa-icon {\n    width: 80px;\n    height: 80px;\n    border: 4px solid gray;\n    border-radius: 40px;\n    border-radius: 50%;\n    margin: 20px auto;\n    padding: 0;\n    position: relative;\n    -webkit-box-sizing: content-box;\n            box-sizing: content-box; }\n\n.sweet-alert .sa-icon.sa-error {\n      border-color: #F27474; }\n\n.sweet-alert .sa-icon.sa-error .sa-x-mark {\n        position: relative;\n        display: block; }\n\n.sweet-alert .sa-icon.sa-error .sa-line {\n        position: absolute;\n        height: 5px;\n        width: 47px;\n        background-color: #F27474;\n        display: block;\n        top: 37px;\n        border-radius: 2px; }\n\n.sweet-alert .sa-icon.sa-error .sa-line.sa-left {\n          -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n          left: 17px; }\n\n.sweet-alert .sa-icon.sa-error .sa-line.sa-right {\n          -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n          right: 16px; }\n\n.sweet-alert .sa-icon.sa-warning {\n      border-color: #F8BB86; }\n\n.sweet-alert .sa-icon.sa-warning .sa-body {\n        position: absolute;\n        width: 5px;\n        height: 47px;\n        left: 50%;\n        top: 10px;\n        border-radius: 2px;\n        margin-left: -2px;\n        background-color: #F8BB86; }\n\n.sweet-alert .sa-icon.sa-warning .sa-dot {\n        position: absolute;\n        width: 7px;\n        height: 7px;\n        border-radius: 50%;\n        margin-left: -3px;\n        left: 50%;\n        bottom: 10px;\n        background-color: #F8BB86; }\n\n.sweet-alert .sa-icon.sa-info {\n      border-color: #C9DAE1; }\n\n.sweet-alert .sa-icon.sa-info::before {\n        content: \"\";\n        position: absolute;\n        width: 5px;\n        height: 29px;\n        left: 50%;\n        bottom: 17px;\n        border-radius: 2px;\n        margin-left: -2px;\n        background-color: #C9DAE1; }\n\n.sweet-alert .sa-icon.sa-info::after {\n        content: \"\";\n        position: absolute;\n        width: 7px;\n        height: 7px;\n        border-radius: 50%;\n        margin-left: -3px;\n        top: 19px;\n        background-color: #C9DAE1; }\n\n.sweet-alert .sa-icon.sa-success {\n      border-color: #A5DC86; }\n\n.sweet-alert .sa-icon.sa-success::before, .sweet-alert .sa-icon.sa-success::after {\n        content: '';\n        border-radius: 40px;\n        border-radius: 50%;\n        position: absolute;\n        width: 60px;\n        height: 120px;\n        background: white;\n        -webkit-transform: rotate(45deg);\n        transform: rotate(45deg); }\n\n.sweet-alert .sa-icon.sa-success::before {\n        border-radius: 120px 0 0 120px;\n        top: -7px;\n        left: -33px;\n        -webkit-transform: rotate(-45deg);\n        transform: rotate(-45deg);\n        -webkit-transform-origin: 60px 60px;\n        transform-origin: 60px 60px; }\n\n.sweet-alert .sa-icon.sa-success::after {\n        border-radius: 0 120px 120px 0;\n        top: -11px;\n        left: 30px;\n        -webkit-transform: rotate(-45deg);\n        transform: rotate(-45deg);\n        -webkit-transform-origin: 0px 60px;\n        transform-origin: 0px 60px; }\n\n.sweet-alert .sa-icon.sa-success .sa-placeholder {\n        width: 80px;\n        height: 80px;\n        border: 4px solid rgba(165, 220, 134, 0.2);\n        border-radius: 40px;\n        border-radius: 50%;\n        -webkit-box-sizing: content-box;\n                box-sizing: content-box;\n        position: absolute;\n        left: -4px;\n        top: -4px;\n        z-index: 2; }\n\n.sweet-alert .sa-icon.sa-success .sa-fix {\n        width: 5px;\n        height: 90px;\n        background-color: white;\n        position: absolute;\n        left: 28px;\n        top: 8px;\n        z-index: 1;\n        -webkit-transform: rotate(-45deg);\n        transform: rotate(-45deg); }\n\n.sweet-alert .sa-icon.sa-success .sa-line {\n        height: 5px;\n        background-color: #A5DC86;\n        display: block;\n        border-radius: 2px;\n        position: absolute;\n        z-index: 2; }\n\n.sweet-alert .sa-icon.sa-success .sa-line.sa-tip {\n          width: 25px;\n          left: 14px;\n          top: 46px;\n          -webkit-transform: rotate(45deg);\n          transform: rotate(45deg); }\n\n.sweet-alert .sa-icon.sa-success .sa-line.sa-long {\n          width: 47px;\n          right: 8px;\n          top: 38px;\n          -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg); }\n\n.sweet-alert .sa-icon.sa-custom {\n      background-size: contain;\n      border-radius: 0;\n      border: none;\n      background-position: center center;\n      background-repeat: no-repeat; }\n\n/*\n * Animations\n */\n\n@-webkit-keyframes showSweetAlert {\n  0% {\n    transform: scale(0.7);\n    -webkit-transform: scale(0.7); }\n  45% {\n    transform: scale(1.05);\n    -webkit-transform: scale(1.05); }\n  80% {\n    transform: scale(0.95);\n    -webkit-transform: scale(0.95); }\n  100% {\n    transform: scale(1);\n    -webkit-transform: scale(1); } }\n\n@keyframes showSweetAlert {\n  0% {\n    transform: scale(0.7);\n    -webkit-transform: scale(0.7); }\n  45% {\n    transform: scale(1.05);\n    -webkit-transform: scale(1.05); }\n  80% {\n    transform: scale(0.95);\n    -webkit-transform: scale(0.95); }\n  100% {\n    transform: scale(1);\n    -webkit-transform: scale(1); } }\n\n@-webkit-keyframes hideSweetAlert {\n  0% {\n    transform: scale(1);\n    -webkit-transform: scale(1); }\n  100% {\n    transform: scale(0.5);\n    -webkit-transform: scale(0.5); } }\n\n@keyframes hideSweetAlert {\n  0% {\n    transform: scale(1);\n    -webkit-transform: scale(1); }\n  100% {\n    transform: scale(0.5);\n    -webkit-transform: scale(0.5); } }\n\n@-webkit-keyframes slideFromTop {\n  0% {\n    top: 0%; }\n  100% {\n    top: 50%; } }\n\n@keyframes slideFromTop {\n  0% {\n    top: 0%; }\n  100% {\n    top: 50%; } }\n\n@-webkit-keyframes slideToTop {\n  0% {\n    top: 50%; }\n  100% {\n    top: 0%; } }\n\n@keyframes slideToTop {\n  0% {\n    top: 50%; }\n  100% {\n    top: 0%; } }\n\n@-webkit-keyframes slideFromBottom {\n  0% {\n    top: 70%; }\n  100% {\n    top: 50%; } }\n\n@keyframes slideFromBottom {\n  0% {\n    top: 70%; }\n  100% {\n    top: 50%; } }\n\n@-webkit-keyframes slideToBottom {\n  0% {\n    top: 50%; }\n  100% {\n    top: 70%; } }\n\n@keyframes slideToBottom {\n  0% {\n    top: 50%; }\n  100% {\n    top: 70%; } }\n\n.showSweetAlert[data-animation=pop] {\n  -webkit-animation: showSweetAlert 0.3s;\n  animation: showSweetAlert 0.3s; }\n\n.showSweetAlert[data-animation=none] {\n  -webkit-animation: none;\n  animation: none; }\n\n.showSweetAlert[data-animation=slide-from-top] {\n  -webkit-animation: slideFromTop 0.3s;\n  animation: slideFromTop 0.3s; }\n\n.showSweetAlert[data-animation=slide-from-bottom] {\n  -webkit-animation: slideFromBottom 0.3s;\n  animation: slideFromBottom 0.3s; }\n\n.hideSweetAlert[data-animation=pop] {\n  -webkit-animation: hideSweetAlert 0.2s;\n  animation: hideSweetAlert 0.2s; }\n\n.hideSweetAlert[data-animation=none] {\n  -webkit-animation: none;\n  animation: none; }\n\n.hideSweetAlert[data-animation=slide-from-top] {\n  -webkit-animation: slideToTop 0.4s;\n  animation: slideToTop 0.4s; }\n\n.hideSweetAlert[data-animation=slide-from-bottom] {\n  -webkit-animation: slideToBottom 0.3s;\n  animation: slideToBottom 0.3s; }\n\n@-webkit-keyframes animateSuccessTip {\n  0% {\n    width: 0;\n    left: 1px;\n    top: 19px; }\n  54% {\n    width: 0;\n    left: 1px;\n    top: 19px; }\n  70% {\n    width: 50px;\n    left: -8px;\n    top: 37px; }\n  84% {\n    width: 17px;\n    left: 21px;\n    top: 48px; }\n  100% {\n    width: 25px;\n    left: 14px;\n    top: 45px; } }\n\n@keyframes animateSuccessTip {\n  0% {\n    width: 0;\n    left: 1px;\n    top: 19px; }\n  54% {\n    width: 0;\n    left: 1px;\n    top: 19px; }\n  70% {\n    width: 50px;\n    left: -8px;\n    top: 37px; }\n  84% {\n    width: 17px;\n    left: 21px;\n    top: 48px; }\n  100% {\n    width: 25px;\n    left: 14px;\n    top: 45px; } }\n\n@-webkit-keyframes animateSuccessLong {\n  0% {\n    width: 0;\n    right: 46px;\n    top: 54px; }\n  65% {\n    width: 0;\n    right: 46px;\n    top: 54px; }\n  84% {\n    width: 55px;\n    right: 0px;\n    top: 35px; }\n  100% {\n    width: 47px;\n    right: 8px;\n    top: 38px; } }\n\n@keyframes animateSuccessLong {\n  0% {\n    width: 0;\n    right: 46px;\n    top: 54px; }\n  65% {\n    width: 0;\n    right: 46px;\n    top: 54px; }\n  84% {\n    width: 55px;\n    right: 0px;\n    top: 35px; }\n  100% {\n    width: 47px;\n    right: 8px;\n    top: 38px; } }\n\n@-webkit-keyframes rotatePlaceholder {\n  0% {\n    transform: rotate(-45deg);\n    -webkit-transform: rotate(-45deg); }\n  5% {\n    transform: rotate(-45deg);\n    -webkit-transform: rotate(-45deg); }\n  12% {\n    transform: rotate(-405deg);\n    -webkit-transform: rotate(-405deg); }\n  100% {\n    transform: rotate(-405deg);\n    -webkit-transform: rotate(-405deg); } }\n\n@keyframes rotatePlaceholder {\n  0% {\n    transform: rotate(-45deg);\n    -webkit-transform: rotate(-45deg); }\n  5% {\n    transform: rotate(-45deg);\n    -webkit-transform: rotate(-45deg); }\n  12% {\n    transform: rotate(-405deg);\n    -webkit-transform: rotate(-405deg); }\n  100% {\n    transform: rotate(-405deg);\n    -webkit-transform: rotate(-405deg); } }\n\n.animateSuccessTip {\n  -webkit-animation: animateSuccessTip 0.75s;\n  animation: animateSuccessTip 0.75s; }\n\n.animateSuccessLong {\n  -webkit-animation: animateSuccessLong 0.75s;\n  animation: animateSuccessLong 0.75s; }\n\n.sa-icon.sa-success.animate::after {\n  -webkit-animation: rotatePlaceholder 4.25s ease-in;\n  animation: rotatePlaceholder 4.25s ease-in; }\n\n@-webkit-keyframes animateErrorIcon {\n  0% {\n    transform: rotateX(100deg);\n    -webkit-transform: rotateX(100deg);\n    opacity: 0; }\n  100% {\n    transform: rotateX(0deg);\n    -webkit-transform: rotateX(0deg);\n    opacity: 1; } }\n\n@keyframes animateErrorIcon {\n  0% {\n    transform: rotateX(100deg);\n    -webkit-transform: rotateX(100deg);\n    opacity: 0; }\n  100% {\n    transform: rotateX(0deg);\n    -webkit-transform: rotateX(0deg);\n    opacity: 1; } }\n\n.animateErrorIcon {\n  -webkit-animation: animateErrorIcon 0.5s;\n  animation: animateErrorIcon 0.5s; }\n\n@-webkit-keyframes animateXMark {\n  0% {\n    transform: scale(0.4);\n    -webkit-transform: scale(0.4);\n    margin-top: 26px;\n    opacity: 0; }\n  50% {\n    transform: scale(0.4);\n    -webkit-transform: scale(0.4);\n    margin-top: 26px;\n    opacity: 0; }\n  80% {\n    transform: scale(1.15);\n    -webkit-transform: scale(1.15);\n    margin-top: -6px; }\n  100% {\n    transform: scale(1);\n    -webkit-transform: scale(1);\n    margin-top: 0;\n    opacity: 1; } }\n\n@keyframes animateXMark {\n  0% {\n    transform: scale(0.4);\n    -webkit-transform: scale(0.4);\n    margin-top: 26px;\n    opacity: 0; }\n  50% {\n    transform: scale(0.4);\n    -webkit-transform: scale(0.4);\n    margin-top: 26px;\n    opacity: 0; }\n  80% {\n    transform: scale(1.15);\n    -webkit-transform: scale(1.15);\n    margin-top: -6px; }\n  100% {\n    transform: scale(1);\n    -webkit-transform: scale(1);\n    margin-top: 0;\n    opacity: 1; } }\n\n.animateXMark {\n  -webkit-animation: animateXMark 0.5s;\n  animation: animateXMark 0.5s; }\n\n@-webkit-keyframes pulseWarning {\n  0% {\n    border-color: #F8D486; }\n  100% {\n    border-color: #F8BB86; } }\n\n@keyframes pulseWarning {\n  0% {\n    border-color: #F8D486; }\n  100% {\n    border-color: #F8BB86; } }\n\n.pulseWarning {\n  -webkit-animation: pulseWarning 0.75s infinite alternate;\n  animation: pulseWarning 0.75s infinite alternate; }\n\n@-webkit-keyframes pulseWarningIns {\n  0% {\n    background-color: #F8D486; }\n  100% {\n    background-color: #F8BB86; } }\n\n@keyframes pulseWarningIns {\n  0% {\n    background-color: #F8D486; }\n  100% {\n    background-color: #F8BB86; } }\n\n.pulseWarningIns {\n  -webkit-animation: pulseWarningIns 0.75s infinite alternate;\n  animation: pulseWarningIns 0.75s infinite alternate; }\n\n@-webkit-keyframes rotate-loading {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes rotate-loading {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n/* Internet Explorer 9 has some special quirks that are fixed here */\n\n/* The icons are not animated. */\n\n/* This file is automatically merged into sweet-alert.min.js through Gulp */\n\n/* Error icon */\n\n.sweet-alert .sa-icon.sa-error .sa-line.sa-left {\n  -ms-transform: rotate(45deg) \\9; }\n\n.sweet-alert .sa-icon.sa-error .sa-line.sa-right {\n  -ms-transform: rotate(-45deg) \\9; }\n\n/* Success icon */\n\n.sweet-alert .sa-icon.sa-success {\n  border-color: transparent\\9; }\n\n.sweet-alert .sa-icon.sa-success .sa-line.sa-tip {\n  -ms-transform: rotate(45deg) \\9; }\n\n.sweet-alert .sa-icon.sa-success .sa-line.sa-long {\n  -ms-transform: rotate(-45deg) \\9; }\n\n/*!\n * Load Awesome v1.1.0 (http://github.danielcardoso.net/load-awesome/)\n * Copyright 2015 Daniel Cardoso <@DanielCardoso>\n * Licensed under MIT\n */\n\n.la-ball-fall,\n.la-ball-fall > div {\n  position: relative;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n.la-ball-fall {\n  display: block;\n  font-size: 0;\n  color: #fff; }\n\n.la-ball-fall.la-dark {\n  color: #333; }\n\n.la-ball-fall > div {\n  display: inline-block;\n  float: none;\n  background-color: currentColor;\n  border: 0 solid currentColor; }\n\n.la-ball-fall {\n  width: 54px;\n  height: 18px; }\n\n.la-ball-fall > div {\n  width: 10px;\n  height: 10px;\n  margin: 4px;\n  border-radius: 100%;\n  opacity: 0;\n  -webkit-animation: ball-fall 1s ease-in-out infinite;\n  animation: ball-fall 1s ease-in-out infinite; }\n\n.la-ball-fall > div:nth-child(1) {\n  -webkit-animation-delay: -200ms;\n  animation-delay: -200ms; }\n\n.la-ball-fall > div:nth-child(2) {\n  -webkit-animation-delay: -100ms;\n  animation-delay: -100ms; }\n\n.la-ball-fall > div:nth-child(3) {\n  -webkit-animation-delay: 0ms;\n  animation-delay: 0ms; }\n\n.la-ball-fall.la-sm {\n  width: 26px;\n  height: 8px; }\n\n.la-ball-fall.la-sm > div {\n  width: 4px;\n  height: 4px;\n  margin: 2px; }\n\n.la-ball-fall.la-2x {\n  width: 108px;\n  height: 36px; }\n\n.la-ball-fall.la-2x > div {\n  width: 20px;\n  height: 20px;\n  margin: 8px; }\n\n.la-ball-fall.la-3x {\n  width: 162px;\n  height: 54px; }\n\n.la-ball-fall.la-3x > div {\n  width: 30px;\n  height: 30px;\n  margin: 12px; }\n\n/*\n * Animation\n */\n\n@-webkit-keyframes ball-fall {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-145%);\n    transform: translateY(-145%); }\n  10% {\n    opacity: .5; }\n  20% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    transform: translateY(0); }\n  80% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    transform: translateY(0); }\n  90% {\n    opacity: .5; }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(145%);\n    transform: translateY(145%); } }\n\n@keyframes ball-fall {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-145%);\n    transform: translateY(-145%); }\n  10% {\n    opacity: .5; }\n  20% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    transform: translateY(0); }\n  80% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    transform: translateY(0); }\n  90% {\n    opacity: .5; }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(145%);\n    transform: translateY(145%); } }\n\n/*\n * The MIT License\n * Copyright (c) 2012 Matias Meno <m@tias.me>\n */\n\n@-webkit-keyframes passing-through {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(40px);\n    transform: translateY(40px); }\n  30%, 70% {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n    transform: translateY(0px); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(-40px);\n    transform: translateY(-40px); } }\n\n@keyframes passing-through {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(40px);\n    transform: translateY(40px); }\n  30%, 70% {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n    transform: translateY(0px); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(-40px);\n    transform: translateY(-40px); } }\n\n@-webkit-keyframes slide-in {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(40px);\n    transform: translateY(40px); }\n  30% {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n    transform: translateY(0px); } }\n\n@keyframes slide-in {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(40px);\n    transform: translateY(40px); }\n  30% {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n    transform: translateY(0px); } }\n\n@-webkit-keyframes pulse {\n  0% {\n    -webkit-transform: scale(1);\n    transform: scale(1); }\n  10% {\n    -webkit-transform: scale(1.1);\n    transform: scale(1.1); }\n  20% {\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n\n@keyframes pulse {\n  0% {\n    -webkit-transform: scale(1);\n    transform: scale(1); }\n  10% {\n    -webkit-transform: scale(1.1);\n    transform: scale(1.1); }\n  20% {\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n\n.dropzone, .dropzone * {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\n.dropzone {\n  min-height: 150px;\n  border: 2px solid rgba(0, 0, 0, 0.3);\n  background: white;\n  padding: 20px 20px; }\n\n.dropzone.dz-clickable {\n    cursor: pointer; }\n\n.dropzone.dz-clickable * {\n      cursor: default; }\n\n.dropzone.dz-clickable .dz-message, .dropzone.dz-clickable .dz-message * {\n      cursor: pointer; }\n\n.dropzone.dz-started .dz-message {\n    display: none; }\n\n.dropzone.dz-drag-hover {\n    border-style: solid; }\n\n.dropzone.dz-drag-hover .dz-message {\n      opacity: 0.5; }\n\n.dropzone .dz-message {\n    text-align: center;\n    margin: 2em 0; }\n\n.dropzone .dz-preview {\n    position: relative;\n    display: inline-block;\n    vertical-align: top;\n    margin: 16px;\n    min-height: 100px; }\n\n.dropzone .dz-preview:hover {\n      z-index: 1000; }\n\n.dropzone .dz-preview:hover .dz-details {\n        opacity: 1; }\n\n.dropzone .dz-preview.dz-file-preview .dz-image {\n      border-radius: 20px;\n      background: #999;\n      background: -webkit-gradient(linear, left top, left bottom, from(#eee), to(#ddd));\n      background: linear-gradient(to bottom, #eee, #ddd); }\n\n.dropzone .dz-preview.dz-file-preview .dz-details {\n      opacity: 1; }\n\n.dropzone .dz-preview.dz-image-preview {\n      background: white; }\n\n.dropzone .dz-preview.dz-image-preview .dz-details {\n        -webkit-transition: opacity 0.2s linear;\n        transition: opacity 0.2s linear; }\n\n.dropzone .dz-preview .dz-remove {\n      font-size: 14px;\n      text-align: center;\n      display: block;\n      cursor: pointer;\n      border: none; }\n\n.dropzone .dz-preview .dz-remove:hover {\n        text-decoration: underline; }\n\n.dropzone .dz-preview:hover .dz-details {\n      opacity: 1; }\n\n.dropzone .dz-preview .dz-details {\n      z-index: 20;\n      position: absolute;\n      top: 0;\n      left: 0;\n      opacity: 0;\n      font-size: 13px;\n      min-width: 100%;\n      max-width: 100%;\n      padding: 2em 1em;\n      text-align: center;\n      color: rgba(0, 0, 0, 0.9);\n      line-height: 150%; }\n\n.dropzone .dz-preview .dz-details .dz-size {\n        margin-bottom: 1em;\n        font-size: 16px; }\n\n.dropzone .dz-preview .dz-details .dz-filename {\n        white-space: nowrap; }\n\n.dropzone .dz-preview .dz-details .dz-filename:hover span {\n          border: 1px solid rgba(200, 200, 200, 0.8);\n          background-color: rgba(255, 255, 255, 0.8); }\n\n.dropzone .dz-preview .dz-details .dz-filename:not(:hover) {\n          overflow: hidden;\n          text-overflow: ellipsis; }\n\n.dropzone .dz-preview .dz-details .dz-filename:not(:hover) span {\n            border: 1px solid transparent; }\n\n.dropzone .dz-preview .dz-details .dz-filename span, .dropzone .dz-preview .dz-details .dz-size span {\n        background-color: rgba(255, 255, 255, 0.4);\n        padding: 0 0.4em;\n        border-radius: 3px; }\n\n.dropzone .dz-preview:hover .dz-image img {\n      -webkit-transform: scale(1.05, 1.05);\n      transform: scale(1.05, 1.05);\n      -webkit-filter: blur(8px);\n      filter: blur(8px); }\n\n.dropzone .dz-preview .dz-image {\n      border-radius: 20px;\n      overflow: hidden;\n      width: 120px;\n      height: 120px;\n      position: relative;\n      display: block;\n      z-index: 10; }\n\n.dropzone .dz-preview .dz-image img {\n        display: block; }\n\n.dropzone .dz-preview.dz-success .dz-success-mark {\n      -webkit-animation: passing-through 3s cubic-bezier(0.77, 0, 0.175, 1);\n      animation: passing-through 3s cubic-bezier(0.77, 0, 0.175, 1); }\n\n.dropzone .dz-preview.dz-error .dz-error-mark {\n      opacity: 1;\n      -webkit-animation: slide-in 3s cubic-bezier(0.77, 0, 0.175, 1);\n      animation: slide-in 3s cubic-bezier(0.77, 0, 0.175, 1); }\n\n.dropzone .dz-preview .dz-success-mark, .dropzone .dz-preview .dz-error-mark {\n      pointer-events: none;\n      opacity: 0;\n      z-index: 500;\n      position: absolute;\n      display: block;\n      top: 50%;\n      left: 50%;\n      margin-left: -27px;\n      margin-top: -27px; }\n\n.dropzone .dz-preview .dz-success-mark svg, .dropzone .dz-preview .dz-error-mark svg {\n        display: block;\n        width: 54px;\n        height: 54px; }\n\n.dropzone .dz-preview.dz-processing .dz-progress {\n      opacity: 1;\n      -webkit-transition: all 0.2s linear;\n      transition: all 0.2s linear; }\n\n.dropzone .dz-preview.dz-complete .dz-progress {\n      opacity: 0;\n      -webkit-transition: opacity 0.4s ease-in;\n      transition: opacity 0.4s ease-in; }\n\n.dropzone .dz-preview:not(.dz-processing) .dz-progress {\n      -webkit-animation: pulse 6s ease infinite;\n      animation: pulse 6s ease infinite; }\n\n.dropzone .dz-preview .dz-progress {\n      opacity: 1;\n      z-index: 1000;\n      pointer-events: none;\n      position: absolute;\n      height: 16px;\n      left: 50%;\n      top: 50%;\n      margin-top: -8px;\n      width: 80px;\n      margin-left: -40px;\n      background: rgba(255, 255, 255, 0.9);\n      -webkit-transform: scale(1);\n      border-radius: 8px;\n      overflow: hidden; }\n\n.dropzone .dz-preview .dz-progress .dz-upload {\n        background: #333;\n        background: -webkit-gradient(linear, left top, left bottom, from(#666), to(#444));\n        background: linear-gradient(to bottom, #666, #444);\n        position: absolute;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        width: 0;\n        -webkit-transition: width 300ms ease-in-out;\n        transition: width 300ms ease-in-out; }\n\n.dropzone .dz-preview.dz-error .dz-error-message {\n      display: block; }\n\n.dropzone .dz-preview.dz-error:hover .dz-error-message {\n      opacity: 1;\n      pointer-events: auto; }\n\n.dropzone .dz-preview .dz-error-message {\n      pointer-events: none;\n      z-index: 1000;\n      position: absolute;\n      display: block;\n      display: none;\n      opacity: 0;\n      -webkit-transition: opacity 0.3s ease;\n      transition: opacity 0.3s ease;\n      border-radius: 8px;\n      font-size: 13px;\n      top: 130px;\n      left: -10px;\n      width: 140px;\n      background: #be2626;\n      background: -webkit-gradient(linear, left top, left bottom, from(#be2626), to(#a92222));\n      background: linear-gradient(to bottom, #be2626, #a92222);\n      padding: 0.5em 1.2em;\n      color: white; }\n\n.dropzone .dz-preview .dz-error-message:after {\n        content: '';\n        position: absolute;\n        top: -6px;\n        left: 64px;\n        width: 0;\n        height: 0;\n        border-left: 6px solid transparent;\n        border-right: 6px solid transparent;\n        border-bottom: 6px solid #be2626; }\n\ndropzone>.dropzone.dz-wrapper .dz-message {\n    min-height: 130px !important;\n}\n\n/* .dropdown-menu {\n    display: none !important;\n}\n\n.bootstrap-select.show .dropdown-menu {\n    display: inline-block !important;\n} */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/devices/devices.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\n    <div class=\"block-header\">\n        <div class=\"row\">\n            <div class=\"col-lg-7 col-md-6 col-sm-12\">\n                <h2>手環管理</h2>\n            </div>\n        </div>\n    </div>\n    <div class=\"container-fluid\">\n        <div class=\"row clearfix\">\n            <div class=\"col-md-6 col-lg-6\">\n                <div class=\"card\">\n                    <div class=\"header\"></div>\n                    <div class=\"body\">\n                        <div id=\"m_table_chart\">\n                            <table class=\"table table-bordered table-striped table-hover dataTable js-exportable\">\n                                <thead>\n                                    <tr>\n                                        <th>手環序號</th>\n                                        <th>建立時間</th>\n                                        <th>對應成員</th>\n                                        <th>動作</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr>\n                                        <td>xxxx</td>\n                                        <td>1999.01.01</td>\n                                        <td></td>\n                                        <td>\n                                            <button type=\"button\" class=\"btn btn-default btn-icon btn-icon-mini btn-round\">\n                                                <i class=\"zmdi zmdi-edit\"></i>\n                                            </button>\n                                            <button type=\"button\" class=\"btn btn-default btn-icon btn-icon-mini btn-round btn-delete\">\n                                                <i class=\"zmdi zmdi-delete\"></i>\n                                            </button>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>oooo</td>\n                                        <td>1999.01.01</td>\n                                        <td>選手一</td>\n                                        <td>\n                                            <button type=\"button\" class=\"btn btn-default btn-icon btn-icon-mini btn-round\">\n                                                <i class=\"zmdi zmdi-edit\"></i>\n                                            </button>\n                                            <button type=\"button\" class=\"btn btn-default btn-icon btn-icon-mini btn-round btn-delete\">\n                                                <i class=\"zmdi zmdi-delete\"></i>\n                                            </button>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n                <a href=\"#addModal\" data-toggle=\"modal\" data-target=\"#addModal\">\n                    <button type=\"button\" class=\"btn btn-warning btn-round\">\n                        <i class=\"zmdi zmdi-plus\"></i>&nbsp;單筆\n                    </button>\n                </a>\n                <a href=\"#uploadModal\" data-toggle=\"modal\" data-target=\"#uploadModal\">\n                    <button type=\"button\" class=\"btn btn-warning btn-round\">\n                        <i class=\"zmdi zmdi-file-plus\"></i>&nbsp;批次\n                    </button>\n                </a>\n            </div>\n        </div>\n    </div>\n</section>\n\n<!-- Modal Dialogs ========= -->\n<div class=\"modal fade\" id=\"addModal\" tabindex=\"-1\" role=\"dialog\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h4 class=\"title\">新增資料</h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row clearfix\">\n                    <div class=\"col-md-12 col-lg-12\">\n                        <form>\n                            <label for=\"modal_deivce_sn\">輸入手環序號</label>\n                            <div class=\"form-group\">\n                                <input type=\"text\" id=\"modal_deivce_sn\" class=\"form-control\">\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-danger btn-round waves-effect\" (click)=\"addDevice()\">儲存</button>\n                <button type=\"button\" class=\"btn btn-default btn-simple btn-round waves-effect\" data-dismiss=\"modal\">取消</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"bindModal\" tabindex=\"-1\" role=\"dialog\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h4 class=\"title\">選手綁定</h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row clearfix\">\n                    <div class=\"col-md-12 col-lg-12 text-center\">\n                        <h5>手環ID: xxxx</h5>\n                    </div>\n                </div>\n                <!-- <div class=\"row clearfix\">\n                    <div class=\"col-md-10 col-lg-10\">\n                        <form>\n                            <div class=\"input-group\">\n                                <input type=\"text\" id=\"search_user\" class=\"form-control\" placeholder=\"請輸入選手名稱\">\n                                <span class=\"input-group-addon\">\n                                    <i class=\"zmdi zmdi-search\"></i>\n                                </span>\n                            </div>\n                        </form>\n                    </div>\n                    <div>\n                        <button type=\"button\" class=\"btn btn-default btn-round\">搜尋</button>\n                    </div>\n                </div> -->\n                <div class=\"row clearfix\">\n                    <div class=\"col-md-12 col-lg-12\">\n                        <select class=\"selectpicker\" data-live-search=\"true\" style=\"color: #000; min-height: 200px\">\n                            <option>選手一</option>\n                            <option>選手二</option>\n                            <option>選手三</option>\n                            <option>選手四</option>\n                            <option>選手五</option>\n                            <option>選手六</option>\n                        </select>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-danger btn-round waves-effect\" (click)=\"bindUser()\">確定</button>\n                <button type=\"button\" class=\"btn btn-default btn-simple btn-round waves-effect\" data-dismiss=\"modal\">返回列表</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"uploadModal\" tabindex=\"-1\" role=\"dialog\">\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h4 class=\"title\">批次檔案上傳</h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row clearfix\">\n                    <div class=\"col-md-12 col-lg-12\">\n                        <form action=\"/\" id=\"frmFileUpload\" class=\"dropzone m-b-20 m-t-20\" method=\"post\" enctype=\"multipart/form-data\">\n                            <div class=\"dz-message\">\n                            </div>\n                            <div class=\"fallback\">\n                                <div class=\"dz-message\">\n                                    <div class=\"drag-icon-cph\"> <i class=\"material-icons\">touch_app</i> </div>\n                                </div>\n                                <dropzone style=\"width: 100%;\" [config]=\"config\" [message]=\"'<em>Drop files here or click to upload.</em>'\"></dropzone>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-danger btn-round waves-effect\">儲存</button>\n                <button type=\"button\" class=\"btn btn-default btn-simple btn-round waves-effect\" data-dismiss=\"modal\">取消</button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/devices/devices.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevicesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DevicesComponent = /** @class */ (function () {
    function DevicesComponent() {
        this.config = {
            url: 'https://httpbin.org/post',
            maxFiles: 10,
            clickable: true,
            uploadMultiple: true,
            acceptedFiles: 'image/*',
            createImageThumbnails: true
        };
    }
    DevicesComponent.prototype.ngOnInit = function () {
        $(function () {
            $('.btn-delete').on('click', function () {
                showCancelMessage();
            });
            $('.selectpicker').selectpicker();
        });
        function showCancelMessage() {
            swal({
                title: '確定要刪除嗎？',
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#DD6B55',
                confirmButtonText: '確定',
                cancelButtonText: '取消',
                closeOnConfirm: false,
                closeOnCancel: true
            }, function (isConfirm) {
                if (isConfirm) {
                    swal('已刪除!', '', 'success');
                }
            });
        }
    };
    DevicesComponent.prototype.addDevice = function () {
        swal({
            title: '新增成功',
            type: 'success',
            showCancelButton: true,
            confirmButtonColor: '#DD6B55',
            confirmButtonText: '接續綁定選手',
            cancelButtonText: '返回列表',
            closeOnConfirm: true,
            closeOnCancel: true
        }, function (isConfirm) {
            if (isConfirm) {
                $('#bindModal').modal('show');
            }
            $('#addModal').modal('hide');
        });
    };
    DevicesComponent.prototype.bindUser = function () {
        swal({
            title: '手環綁定成功',
            type: 'success',
            showCancelButton: false,
            confirmButtonColor: '#DD6B55',
            confirmButtonText: '返回列表',
            closeOnConfirm: true
        }, function (isConfirm) {
            $('#bindModal').modal('hide');
        });
    };
    DevicesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-devices',
            template: __webpack_require__("../../../../../src/app/pages/devices/devices.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/devices/devices.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DevicesComponent);
    return DevicesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/report/bloodpressure/bloodpressure.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".line_height_42 {\n    line-height: 42px;\n}\n.text_align_right {\n    text-align: right;\n}\n/* DataTable */\n.card .header .header-dropdown i {\n    font-size: 40px;\n}\n.dataTables_wrapper .dt-buttons {\n    float: right !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/report/bloodpressure/bloodpressure.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\n    <div class=\"block-header\">\n        <div class=\"row\">\n            <div class=\"col-lg-7 col-md-6 col-sm-12\">\n                <h2>血壓</h2>\n            </div>\n        </div>\n    </div>\n    <div class=\"container-fluid\">\n        <!-- Vertical Layout -->\n        <div class=\"row clearfix\">\n            <div class=\"col-lg-12 col-md-12 col-sm-12\">\n                <div class=\"card\">\n                    <div class=\"header\">\n\n                    </div>\n                    <div class=\"body\">\n                        <div class=\"row clearfix\">\n                            <div class=\"col-lg-1 col-md-1 col-sm-1 form-control-label text_align_right\">\n                                <label class=\"line_height_42\">群組查詢</label>\n                            </div>\n                            <div class=\"col-sm-6\">\n                                <select class=\"form-control show-tick\">\n                                    <option value=\"\">-- Please select --</option>\n                                    <option value=\"10\">10</option>\n                                    <option value=\"20\">20</option>\n                                    <option value=\"30\">30</option>\n                                    <option value=\"40\">40</option>\n                                    <option value=\"50\">50</option>\n                                </select>\n                            </div>\n                        </div>\n                        <div class=\"row clearfix\">\n                            <div class=\"col-lg-1 col-md-1 col-sm-1 form-control-label text_align_right\">\n                                <label class=\"line_height_42\">學生查詢</label>\n                            </div>\n                            <div class=\"col-sm-6\">\n                                <select class=\"form-control show-tick\">\n                                    <option value=\"\">-- Please select --</option>\n                                    <option value=\"10\">10</option>\n                                    <option value=\"20\">20</option>\n                                    <option value=\"30\">30</option>\n                                    <option value=\"40\">40</option>\n                                    <option value=\"50\">50</option>\n                                </select>\n                            </div>\n                        </div>\n                        <div class=\"row clearfix\">\n                            <div class=\"col-lg-1 col-md-1 col-sm-1 form-control-label text_align_right\">\n                                <label class=\"line_height_42\">自訂查詢</label>\n                            </div>\n                            <div class=\"col-sm-3\">\n                                <input type=\"date\" class=\"form-control\" />\n                            </div>\n                            <span class=\"line_height_42\">至</span>\n                            <div class=\"col-sm-3\">\n                                <input type=\"date\" class=\"form-control\" />\n                            </div>\n                            <div class=\"col-sm-2\">\n                                <button type=\"button\" class=\"btn btn-raised btn-primary btn-round waves-effect\">查詢</button>\n                            </div>\n                        </div>\n                        <div class=\"row clearfix\">\n                            <div class=\"col-lg-1 col-md-1 col-sm-1 form-control-label text_align_right\">\n                                <label class=\"line_height_42\">快速查詢</label>\n                            </div>\n                            <div class=\"col-sm-6\">\n                                <button type=\"button\" class=\"btn btn-raised btn-primary btn-round waves-effect\">2018/10</button>\n                                <button type=\"button\" class=\"btn btn-raised btn-primary btn-round waves-effect\">2018/09</button>\n                                <button type=\"button\" class=\"btn btn-raised btn-primary btn-round waves-effect\">2018/08</button>\n                                <button type=\"button\" class=\"btn btn-raised btn-primary btn-round waves-effect\">2018/07</button>\n                                <button type=\"button\" class=\"btn btn-raised btn-primary btn-round waves-effect\">2018/06</button>\n                                <button type=\"button\" class=\"btn btn-raised btn-primary btn-round waves-effect\">2018/05</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row clearfix\">\n            <div class=\"col-md-12 col-lg-12\">\n                <div class=\"card\">\n                    <div class=\"header\">\n                        <h2><strong>張小強</strong> 2018/09/01 - 2018/09/30 </h2>\n                        <ul class=\"header-dropdown\">\n                            <li [hidden]=\"!!chart\" class=\"dropdown\"> <a href=\"javascript:void(0);\" class=\"dropdown-toggle\"\n                                    data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i\n                                        class=\"zmdi zmdi-more\"></i>\n                                </a>\n                                <ul class=\"dropdown-menu dropdown-menu-right slideUp float-right\">\n                                    <li><a href=\"javascript:void(0);\">匯出 CSV</a></li>\n                                </ul>\n                            </li>\n                        </ul>\n                    </div>\n                    <div class=\"body\">\n                        <div id=\"m_table_chart\">\n                            <table class=\"table table-bordered table-striped table-hover dataTable js-exportable\">\n                                <thead>\n                                    <tr>\n                                        <th>日期</th>\n                                        <th>測量時間</th>\n                                        <th>收縮壓</th>\n                                        <th>舒張壓</th>\n                                        <th>脈搏</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr>\n                                        <td>2018/09/01</td>\n                                        <td>08:23</td>\n                                        <td>174 bpm</td>\n                                        <td>61 bpm</td>\n                                        <td>53 / min</td>\n                                    </tr>\n                                    <tr>\n                                        <td>2018/09/01</td>\n                                        <td>16:30</td>\n                                        <td>172 bpm</td>\n                                        <td>62 bpm</td>\n                                        <td>55 / min</td>\n                                    </tr>\n                                    <tr>\n                                        <td>2018/09/02</td>\n                                        <td>09:00</td>\n                                        <td>174 bpm</td>\n                                        <td>66 bpm</td>\n                                        <td>53 / min</td>\n                                    </tr>\n                                    <tr>\n                                        <td>2018/09/02</td>\n                                        <td>16:35</td>\n                                        <td>172 bpm</td>\n                                        <td>68 bpm</td>\n                                        <td>52 / min</td>\n                                    </tr>\n                                    <tr>\n                                        <td>2018/09/03</td>\n                                        <td>08:45</td>\n                                        <td>177 bpm</td>\n                                        <td>58 bpm</td>\n                                        <td>60 / min</td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/pages/report/bloodpressure/bloodpressure.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BloodpressureComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BloodpressureComponent = /** @class */ (function () {
    function BloodpressureComponent() {
    }
    BloodpressureComponent.prototype.ngOnInit = function () {
        $('.js-exportable').DataTable({
            dom: 'frtip',
            bFilter: false,
            oLanguage: {
                oPaginate: {
                    sFirst: '第一頁',
                    sLast: '最後一頁',
                    sNext: '下一頁',
                    sPrevious: '上一頁'
                },
                sEmptyTable: '沒有資料顯示',
                sInfo: '顯示 _START_ to _END_ of _TOTAL_ 筆資料'
            }
        });
    };
    BloodpressureComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-bloodpressure',
            template: __webpack_require__("../../../../../src/app/pages/report/bloodpressure/bloodpressure.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/report/bloodpressure/bloodpressure.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BloodpressureComponent);
    return BloodpressureComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/report/heartrate/heartrate.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".line_height_42 {\n    line-height: 42px;\n}\n.text_align_right {\n    text-align: right;\n}\n/* DataTable */\n.card .header .header-dropdown i {\n    font-size: 40px;\n}\n.dataTables_wrapper .dt-buttons {\n    float: right !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/report/heartrate/heartrate.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\n    <div class=\"block-header\">\n        <div class=\"row\">\n            <div class=\"col-lg-7 col-md-6 col-sm-12\">\n                <h2>心率</h2>\n            </div>\n        </div>\n    </div>\n    <div class=\"container-fluid\">\n        <!-- Vertical Layout -->\n        <div class=\"row clearfix\">\n            <div class=\"col-lg-12 col-md-12 col-sm-12\">\n                <div class=\"card\">\n                    <div class=\"header\">\n\n                    </div>\n                    <div class=\"body\">\n                        <div class=\"row clearfix\">\n                            <div class=\"col-lg-1 col-md-1 col-sm-1 form-control-label text_align_right\">\n                                <label class=\"line_height_42\">群組查詢</label>\n                            </div>\n                            <div class=\"col-sm-6\">\n                                <select class=\"form-control show-tick\">\n                                    <option value=\"\">-- Please select --</option>\n                                    <option value=\"10\">10</option>\n                                    <option value=\"20\">20</option>\n                                    <option value=\"30\">30</option>\n                                    <option value=\"40\">40</option>\n                                    <option value=\"50\">50</option>\n                                </select>\n                            </div>\n                        </div>\n                        <div class=\"row clearfix\">\n                            <div class=\"col-lg-1 col-md-1 col-sm-1 form-control-label text_align_right\">\n                                <label class=\"line_height_42\">學生查詢</label>\n                            </div>\n                            <div class=\"col-sm-6\">\n                                <select class=\"form-control show-tick\">\n                                    <option value=\"\">-- Please select --</option>\n                                    <option value=\"10\">10</option>\n                                    <option value=\"20\">20</option>\n                                    <option value=\"30\">30</option>\n                                    <option value=\"40\">40</option>\n                                    <option value=\"50\">50</option>\n                                </select>\n                            </div>\n                        </div>\n                        <div class=\"row clearfix\">\n                            <div class=\"col-lg-1 col-md-1 col-sm-1 form-control-label text_align_right\">\n                                <label class=\"line_height_42\">自訂查詢</label>\n                            </div>\n                            <div class=\"col-sm-3\">\n                                <input type=\"date\" class=\"form-control\" />\n                            </div>\n                            <span class=\"line_height_42\">至</span>\n                            <div class=\"col-sm-3\">\n                                <input type=\"date\" class=\"form-control\" />\n                            </div>\n                            <div class=\"col-sm-2\">\n                                <button type=\"button\" class=\"btn btn-raised btn-primary btn-round waves-effect\">查詢</button>\n                            </div>\n                        </div>\n                        <div class=\"row clearfix\">\n                            <div class=\"col-lg-1 col-md-1 col-sm-1 form-control-label text_align_right\">\n                                <label class=\"line_height_42\">快速查詢</label>\n                            </div>\n                            <div class=\"col-sm-6\">\n                                <button type=\"button\" class=\"btn btn-raised btn-primary btn-round waves-effect\">2018/10</button>\n                                <button type=\"button\" class=\"btn btn-raised btn-primary btn-round waves-effect\">2018/09</button>\n                                <button type=\"button\" class=\"btn btn-raised btn-primary btn-round waves-effect\">2018/08</button>\n                                <button type=\"button\" class=\"btn btn-raised btn-primary btn-round waves-effect\">2018/07</button>\n                                <button type=\"button\" class=\"btn btn-raised btn-primary btn-round waves-effect\">2018/06</button>\n                                <button type=\"button\" class=\"btn btn-raised btn-primary btn-round waves-effect\">2018/05</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row clearfix\">\n            <div class=\"col-md-12 col-lg-12\">\n                <div class=\"card\">\n                    <div class=\"header\">\n                        <h2><strong>張小強</strong> 2018/09/01 - 2018/09/30 </h2>\n                        <ul class=\"header-dropdown\">\n                            <li [hidden]=\"!!chart\" class=\"dropdown\"> <a href=\"javascript:void(0);\" class=\"dropdown-toggle\"\n                                    data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i\n                                        class=\"zmdi zmdi-more\"></i>\n                                </a>\n                                <ul class=\"dropdown-menu dropdown-menu-right slideUp float-right\">\n                                    <li><a href=\"javascript:void(0);\">匯出 CSV</a></li>\n                                </ul>\n                            </li>\n                        </ul>\n                    </div>\n                    <div class=\"body\">\n                        <div id=\"m_table_chart\">\n                            <table class=\"table table-bordered table-striped table-hover dataTable js-exportable\">\n                                <thead>\n                                    <tr>\n                                        <th>日期</th>\n                                        <th>最大心率</th>\n                                        <th>平均心率</th>\n                                        <th>最小心率</th>\n                                        <th>入睡心率</th>\n                                        <th>起床心率</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr>\n                                        <td>2018/09/01</td>\n                                        <td>123 bpm</td>\n                                        <td>67 bpm</td>\n                                        <td>45 bpm</td>\n                                        <td>74 bpm</td>\n                                        <td>78 bpm</td>\n                                    </tr>\n                                    <tr>\n                                        <td>2018/09/02</td>\n                                        <td>110 bpm</td>\n                                        <td>78 bpm</td>\n                                        <td>60 bpm</td>\n                                        <td></td>\n                                        <td></td>\n                                    </tr>\n                                    <tr>\n                                        <td>2018/09/03</td>\n                                        <td>123 bpm</td>\n                                        <td>67 bpm</td>\n                                        <td>45 bpm</td>\n                                        <td>74 bpm</td>\n                                        <td>78 bpm</td>\n                                    </tr>\n                                    <tr>\n                                        <td>2018/09/04</td>\n                                        <td>120 bpm</td>\n                                        <td>66 bpm</td>\n                                        <td>56 bpm</td>\n                                        <td>67 bpm</td>\n                                        <td>75 bpm</td>\n                                    </tr>\n                                    <tr>\n                                        <td>2018/09/05</td>\n                                        <td>122 bpm</td>\n                                        <td>70 bpm</td>\n                                        <td>50 bpm</td>\n                                        <td>77 bpm</td>\n                                        <td>78 bpm</td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/pages/report/heartrate/heartrate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeartrateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeartrateComponent = /** @class */ (function () {
    function HeartrateComponent() {
    }
    HeartrateComponent.prototype.ngOnInit = function () {
        $('.js-exportable').DataTable({
            dom: 'frtip',
            bFilter: false,
            oLanguage: {
                oPaginate: {
                    sFirst: '第一頁',
                    sLast: '最後一頁',
                    sNext: '下一頁',
                    sPrevious: '上一頁'
                },
                sEmptyTable: '沒有資料顯示',
                sInfo: '顯示 _START_ to _END_ of _TOTAL_ 筆資料'
            }
        });
    };
    HeartrateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-heartrate',
            template: __webpack_require__("../../../../../src/app/pages/report/heartrate/heartrate.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/report/heartrate/heartrate.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeartrateComponent);
    return HeartrateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/report/sleep/sleep.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".line_height_42 {\n    line-height: 42px;\n}\n.text_align_right {\n    text-align: right;\n}\n/* DataTable */\n.card .header .header-dropdown i {\n    font-size: 40px;\n}\n.dataTables_wrapper .dt-buttons {\n    float: right !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/report/sleep/sleep.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\n    <div class=\"block-header\">\n        <div class=\"row\">\n            <div class=\"col-lg-7 col-md-6 col-sm-12\">\n                <h2>睡眠</h2>\n            </div>\n        </div>\n    </div>\n    <div class=\"container-fluid\">\n        <!-- Vertical Layout -->\n        <div class=\"row clearfix\">\n            <div class=\"col-lg-12 col-md-12 col-sm-12\">\n                <div class=\"card\">\n                    <div class=\"header\">\n\n                    </div>\n                    <div class=\"body\">\n                        <div class=\"row clearfix\">\n                            <div class=\"col-lg-1 col-md-1 col-sm-1 form-control-label text_align_right\">\n                                <label class=\"line_height_42\">群組查詢</label>\n                            </div>\n                            <div class=\"col-sm-6\">\n                                <select class=\"form-control show-tick\">\n                                    <option value=\"\">-- Please select --</option>\n                                    <option value=\"10\">10</option>\n                                    <option value=\"20\">20</option>\n                                    <option value=\"30\">30</option>\n                                    <option value=\"40\">40</option>\n                                    <option value=\"50\">50</option>\n                                </select>\n                            </div>\n                        </div>\n                        <div class=\"row clearfix\">\n                            <div class=\"col-lg-1 col-md-1 col-sm-1 form-control-label text_align_right\">\n                                <label class=\"line_height_42\">學生查詢</label>\n                            </div>\n                            <div class=\"col-sm-6\">\n                                <select class=\"form-control show-tick\">\n                                    <option value=\"\">-- Please select --</option>\n                                    <option value=\"10\">10</option>\n                                    <option value=\"20\">20</option>\n                                    <option value=\"30\">30</option>\n                                    <option value=\"40\">40</option>\n                                    <option value=\"50\">50</option>\n                                </select>\n                            </div>\n                        </div>\n                        <div class=\"row clearfix\">\n                            <div class=\"col-lg-1 col-md-1 col-sm-1 form-control-label text_align_right\">\n                                <label class=\"line_height_42\">自訂查詢</label>\n                            </div>\n                            <div class=\"col-sm-3\">\n                                <input type=\"date\" class=\"form-control\" />\n                            </div>\n                            <span class=\"line_height_42\">至</span>\n                            <div class=\"col-sm-3\">\n                                <input type=\"date\" class=\"form-control\" />\n                            </div>\n                            <div class=\"col-sm-2\">\n                                <button type=\"button\" class=\"btn btn-raised btn-primary btn-round waves-effect\">查詢</button>\n                            </div>\n                        </div>\n                        <div class=\"row clearfix\">\n                            <div class=\"col-lg-1 col-md-1 col-sm-1 form-control-label text_align_right\">\n                                <label class=\"line_height_42\">快速查詢</label>\n                            </div>\n                            <div class=\"col-sm-6\">\n                                <button type=\"button\" class=\"btn btn-raised btn-primary btn-round waves-effect\">2018/10</button>\n                                <button type=\"button\" class=\"btn btn-raised btn-primary btn-round waves-effect\">2018/09</button>\n                                <button type=\"button\" class=\"btn btn-raised btn-primary btn-round waves-effect\">2018/08</button>\n                                <button type=\"button\" class=\"btn btn-raised btn-primary btn-round waves-effect\">2018/07</button>\n                                <button type=\"button\" class=\"btn btn-raised btn-primary btn-round waves-effect\">2018/06</button>\n                                <button type=\"button\" class=\"btn btn-raised btn-primary btn-round waves-effect\">2018/05</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row clearfix\">\n            <div class=\"col-md-12 col-lg-12\">\n                <div class=\"card\">\n                    <div class=\"header\">\n                        <h2><strong>目標平均睡眠</strong> 6 hr 30 min </h2>\n                        <ul class=\"header-dropdown\">\n                            <li [hidden]=\"!!chart\" class=\"dropdown\"> <a href=\"javascript:void(0);\" class=\"dropdown-toggle\"\n                                    data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i\n                                        class=\"zmdi zmdi-more\"></i>\n                                </a>\n                                <ul class=\"dropdown-menu dropdown-menu-right slideUp float-right\">\n                                    <li><a href=\"javascript:void(0);\">匯出 CSV</a></li>\n                                </ul>\n                            </li>\n                            <a [hidden]=\"!chart\" role=\"button\" (click)=\"switchDiagram()\"><i class=\"zmdi zmdi-grid\"></i></a>\n                            <a [hidden]=\"!!chart\" role=\"button\" (click)=\"switchDiagram()\"><i class=\"zmdi zmdi-chart\"></i></a>\n                        </ul>\n                    </div>\n                    <div class=\"body\">\n                        <div [hidden]=\"!chart\">\n                            <div id=\"m_bar_chart\"></div>\n                            <div id=\"m_table_chart\"></div>\n                        </div>\n                        <div class=\"col-md-4 col-lg-4\" [hidden]=\"!!chart\">\n                            <table class=\"table table-bordered table-striped table-hover dataTable js-exportable\">\n                                <thead>\n                                    <tr>\n                                        <th style=\"width: 100px\">日期</th>\n                                        <th style=\"width: 100px\">睡眠時間</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr>\n                                        <td>2018/09/01</td>\n                                        <td>6 hr 21 min</td>\n                                    </tr>\n                                    <tr>\n                                        <td>2018/09/02</td>\n                                        <td>6 hr 15 min</td>\n                                    </tr>\n                                    <tr>\n                                        <td>2018/09/03</td>\n                                        <td>6 hr 48 min</td>\n                                    </tr>\n                                    <tr>\n                                        <td>2018/09/04</td>\n                                        <td>6 hr 53 min</td>\n                                    </tr>\n                                    <tr>\n                                        <td>2018/09/05</td>\n                                        <td>6 hr 43 min</td>\n                                    </tr>\n                                    <tr>\n                                        <td>2018/09/06</td>\n                                        <td>6 hr 33 min</td>\n                                    </tr>\n                                    <tr>\n                                        <td>2018/09/07</td>\n                                        <td>6 hr 44 min</td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/pages/report/sleep/sleep.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SleepComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SleepComponent = /** @class */ (function () {
    function SleepComponent() {
        this.chart = true;
    }
    SleepComponent.prototype.ngOnInit = function () {
        $('.js-exportable').DataTable({
            dom: 'frtip',
            bFilter: false,
            oLanguage: {
                oPaginate: {
                    sFirst: '第一頁',
                    sLast: '最後一頁',
                    sNext: '下一頁',
                    sPrevious: '上一頁'
                },
                sEmptyTable: '沒有資料顯示',
                sInfo: '顯示 _START_ to _END_ of _TOTAL_ 筆資料'
            }
        });
        MorrisBarChart();
        // Morris bar chart
        function MorrisBarChart() {
            Morris.Bar({
                element: 'm_bar_chart',
                data: [{
                        y: '2011',
                        a: 80
                    }, {
                        y: '2012',
                        a: 75
                    }, {
                        y: '2013',
                        a: 59
                    }, {
                        y: '2014',
                        a: 75
                    }, {
                        y: '2015',
                        a: 55
                    }, {
                        y: '2016',
                        a: 75
                    }, {
                        y: '2017',
                        a: 87
                    }],
                xkey: 'y',
                ykeys: ['a'],
                labels: ['A'],
                barColors: ['#ffcc80'],
                hideHover: 'auto',
                gridLineColor: '#eef0f2',
                resize: true
            });
        }
    };
    SleepComponent.prototype.switchDiagram = function () {
        this.chart = !this.chart;
    };
    SleepComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sleep',
            template: __webpack_require__("../../../../../src/app/pages/report/sleep/sleep.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/report/sleep/sleep.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SleepComponent);
    return SleepComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/report/sports/sports.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".line_height_42 {\n    line-height: 42px;\n}\n.text_align_right {\n    text-align: right;\n}\n/* DataTable */\n.card .header .header-dropdown i {\n    font-size: 40px;\n}\n.dataTables_wrapper .dt-buttons {\n    float: right !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/report/sports/sports.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\n    <div class=\"block-header\">\n        <div class=\"row\">\n            <div class=\"col-lg-7 col-md-6 col-sm-12\">\n                <h2>運動</h2>\n            </div>\n        </div>\n    </div>\n    <div class=\"container-fluid\">\n        <!-- Vertical Layout -->\n        <div class=\"row clearfix\">\n            <div class=\"col-lg-12 col-md-12 col-sm-12\">\n                <div class=\"card\">\n                    <div class=\"header\"></div>\n                    <div class=\"body\">\n                        <div class=\"row clearfix\">\n                            <div class=\"col-lg-1 col-md-1 col-sm-1 form-control-label text_align_right\">\n                                <label class=\"line_height_42\">群組查詢</label>\n                            </div>\n                            <div class=\"col-sm-6\">\n                                <select class=\"form-control show-tick\">\n                                    <option value=\"\">-- Please select --</option>\n                                    <option value=\"10\">10</option>\n                                    <option value=\"20\">20</option>\n                                    <option value=\"30\">30</option>\n                                    <option value=\"40\">40</option>\n                                    <option value=\"50\">50</option>\n                                </select>\n                            </div>\n                        </div>\n                        <div class=\"row clearfix\">\n                            <div class=\"col-lg-1 col-md-1 col-sm-1 form-control-label text_align_right\">\n                                <label class=\"line_height_42\">學生查詢</label>\n                            </div>\n                            <div class=\"col-sm-6\">\n                                <select class=\"form-control show-tick\">\n                                    <option value=\"\">-- Please select --</option>\n                                    <option value=\"10\">10</option>\n                                    <option value=\"20\">20</option>\n                                    <option value=\"30\">30</option>\n                                    <option value=\"40\">40</option>\n                                    <option value=\"50\">50</option>\n                                </select>\n                            </div>\n                        </div>\n                        <div class=\"row clearfix\">\n                            <div class=\"col-lg-1 col-md-1 col-sm-1 form-control-label text_align_right\">\n                                <label class=\"line_height_42\">自訂查詢</label>\n                            </div>\n                            <div class=\"col-sm-3\">\n                                <input type=\"date\" class=\"form-control\" />\n                            </div>\n                            <span class=\"line_height_42\">至</span>\n                            <div class=\"col-sm-3\">\n                                <input type=\"date\" class=\"form-control\" />\n                            </div>\n                            <div class=\"col-sm-2\">\n                                <button type=\"button\" class=\"btn btn-raised btn-primary btn-round waves-effect\">查詢</button>\n                            </div>\n                        </div>\n                        <div class=\"row clearfix\">\n                            <div class=\"col-lg-1 col-md-1 col-sm-1 form-control-label text_align_right\">\n                                <label class=\"line_height_42\">快速查詢</label>\n                            </div>\n                            <div class=\"col-sm-6\">\n                                <button type=\"button\" class=\"btn btn-raised btn-primary btn-round waves-effect\">2018/10</button>\n                                <button type=\"button\" class=\"btn btn-raised btn-primary btn-round waves-effect\">2018/09</button>\n                                <button type=\"button\" class=\"btn btn-raised btn-primary btn-round waves-effect\">2018/08</button>\n                                <button type=\"button\" class=\"btn btn-raised btn-primary btn-round waves-effect\">2018/07</button>\n                                <button type=\"button\" class=\"btn btn-raised btn-primary btn-round waves-effect\">2018/06</button>\n                                <button type=\"button\" class=\"btn btn-raised btn-primary btn-round waves-effect\">2018/05</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row clearfix\">\n            <div class=\"col-md-12 col-lg-12\">\n                <div class=\"card\">\n                    <div class=\"header\">\n                        <h2><strong>張小強</strong> 2018/09/01 - 2018/09/30 </h2>\n                        <ul class=\"header-dropdown\">\n                            <li class=\"dropdown\"> <a href=\"javascript:void(0);\" class=\"dropdown-toggle\"\n                                    data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i\n                                        class=\"zmdi zmdi-more\"></i>\n                                </a>\n                                <ul class=\"dropdown-menu dropdown-menu-right slideUp float-right\">\n                                    <li><a href=\"javascript:void(0);\">匯出 CSV</a></li>\n                                </ul>\n                            </li>\n                        </ul>\n                    </div>\n                    <div class=\"body\">\n                        <div id=\"m_table_chart\">\n                            <table class=\"table table-bordered table-striped table-hover dataTable js-exportable\">\n                                <thead>\n                                    <tr>\n                                        <th>日期</th>\n                                        <th>測量時間</th>\n                                        <th>收縮壓</th>\n                                        <th>舒張壓</th>\n                                        <th>脈搏</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr>\n                                        <td>2018/09/01</td>\n                                        <td>08:23</td>\n                                        <td>174 npm</td>\n                                        <td>61 npm</td>\n                                        <td>53 / min</td>\n                                    </tr>\n                                    <tr>\n                                        <td>2018/09/01</td>\n                                        <td>16:30</td>\n                                        <td>172 npm</td>\n                                        <td>62 npm</td>\n                                        <td>55 / min</td>\n                                    </tr>\n                                    <tr>\n                                        <td>2018/09/02</td>\n                                        <td>09:00</td>\n                                        <td>174 npm</td>\n                                        <td>66 npm</td>\n                                        <td>53 / min</td>\n                                    </tr>\n                                    <tr>\n                                        <td>2018/09/02</td>\n                                        <td>16:35</td>\n                                        <td>172 npm</td>\n                                        <td>68 npm</td>\n                                        <td>52 / min</td>\n                                    </tr>\n                                    <tr>\n                                        <td>2018/09/03</td>\n                                        <td>08:45</td>\n                                        <td>177 npm</td>\n                                        <td>58 npm</td>\n                                        <td>60 / min</td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/pages/report/sports/sports.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SportsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SportsComponent = /** @class */ (function () {
    function SportsComponent() {
    }
    SportsComponent.prototype.ngOnInit = function () {
        $('.js-exportable').DataTable({
            dom: 'frtip',
            bFilter: false,
            oLanguage: {
                oPaginate: {
                    sFirst: '第一頁',
                    sLast: '最後一頁',
                    sNext: '下一頁',
                    sPrevious: '上一頁'
                },
                sEmptyTable: '沒有資料顯示',
                sInfo: '顯示 _START_ to _END_ of _TOTAL_ 筆資料'
            }
        });
    };
    SportsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sports',
            template: __webpack_require__("../../../../../src/app/pages/report/sports/sports.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/report/sports/sports.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SportsComponent);
    return SportsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/report/step/step.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".line_height_42 {\n    line-height: 42px;\n}\n.text_align_right {\n    text-align: right;\n}\n/* DataTable */\n.card .header .header-dropdown i {\n    font-size: 40px;\n}\n.dataTables_wrapper .dt-buttons {\n    float: right !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/report/step/step.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\n    <div class=\"block-header\">\n        <div class=\"row\">\n            <div class=\"col-lg-7 col-md-6 col-sm-12\">\n                <h2>步數</h2>\n            </div>\n        </div>\n    </div>\n    <div class=\"container-fluid\">\n        <!-- Vertical Layout -->\n        <div class=\"row clearfix\">\n            <div class=\"col-lg-12 col-md-12 col-sm-12\">\n                <div class=\"card\">\n                    <div class=\"header\">\n\n                    </div>\n                    <div class=\"body\">\n                        <div class=\"row clearfix\">\n                            <div class=\"col-lg-1 col-md-1 col-sm-1 form-control-label text_align_right\">\n                                <label class=\"line_height_42\">群組查詢</label>\n                            </div>\n                            <div class=\"col-sm-6\">\n                                <select class=\"form-control show-tick\">\n                                    <option value=\"\">-- Please select --</option>\n                                    <option value=\"10\">10</option>\n                                    <option value=\"20\">20</option>\n                                    <option value=\"30\">30</option>\n                                    <option value=\"40\">40</option>\n                                    <option value=\"50\">50</option>\n                                </select>\n                            </div>\n                        </div>\n                        <div class=\"row clearfix\">\n                            <div class=\"col-lg-1 col-md-1 col-sm-1 form-control-label text_align_right\">\n                                <label class=\"line_height_42\">學生查詢</label>\n                            </div>\n                            <div class=\"col-sm-6\">\n                                <select class=\"form-control show-tick\">\n                                    <option value=\"\">-- Please select --</option>\n                                    <option value=\"10\">10</option>\n                                    <option value=\"20\">20</option>\n                                    <option value=\"30\">30</option>\n                                    <option value=\"40\">40</option>\n                                    <option value=\"50\">50</option>\n                                </select>\n                            </div>\n                        </div>\n                        <div class=\"row clearfix\">\n                            <div class=\"col-lg-1 col-md-1 col-sm-1 form-control-label text_align_right\">\n                                <label class=\"line_height_42\">自訂查詢</label>\n                            </div>\n                            <div class=\"col-sm-3\">\n                                <input type=\"date\" class=\"form-control\" />\n                            </div>\n                            <span class=\"line_height_42\">至</span>\n                            <div class=\"col-sm-3\">\n                                <input type=\"date\" class=\"form-control\" />\n                            </div>\n                            <div class=\"col-sm-2\">\n                                <button type=\"button\" class=\"btn btn-raised btn-primary btn-round waves-effect\">查詢</button>\n                            </div>\n                        </div>\n                        <div class=\"row clearfix\">\n                            <div class=\"col-lg-1 col-md-1 col-sm-1 form-control-label text_align_right\">\n                                <label class=\"line_height_42\">快速查詢</label>\n                            </div>\n                            <div class=\"col-sm-6\">\n                                <button type=\"button\" class=\"btn btn-raised btn-primary btn-round waves-effect\">2018/10</button>\n                                <button type=\"button\" class=\"btn btn-raised btn-primary btn-round waves-effect\">2018/09</button>\n                                <button type=\"button\" class=\"btn btn-raised btn-primary btn-round waves-effect\">2018/08</button>\n                                <button type=\"button\" class=\"btn btn-raised btn-primary btn-round waves-effect\">2018/07</button>\n                                <button type=\"button\" class=\"btn btn-raised btn-primary btn-round waves-effect\">2018/06</button>\n                                <button type=\"button\" class=\"btn btn-raised btn-primary btn-round waves-effect\">2018/05</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row clearfix\">\n            <div class=\"col-md-12 col-lg-12\">\n                <div class=\"card\">\n                    <div class=\"header\">\n                        <h2><strong>目標平均步數</strong> 22000 </h2>\n                        <ul class=\"header-dropdown\">\n                            <li [hidden]=\"!!chart\" class=\"dropdown\"> <a href=\"javascript:void(0);\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"\n                                    role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"zmdi zmdi-more\"></i>\n                                </a>\n                                <ul class=\"dropdown-menu dropdown-menu-right slideUp float-right\">\n                                    <li><a href=\"javascript:void(0);\">匯出 CSV</a></li>\n                                </ul>\n                            </li>\n                            <a [hidden]=\"!chart\" role=\"button\" (click)=\"switchDiagram()\"><i class=\"zmdi zmdi-grid\"></i></a>\n                            <a [hidden]=\"!!chart\" role=\"button\" (click)=\"switchDiagram()\"><i class=\"zmdi zmdi-chart\"></i></a>\n                        </ul>\n                    </div>\n                    <div class=\"body\">\n                        <div [hidden]=\"!chart\">\n                            <div id=\"m_bar_chart\"></div>\n                            <div id=\"m_table_chart\"></div>\n                        </div>\n                        <div class=\"col-md-4 col-lg-4\" [hidden]=\"!!chart\">\n                            <table class=\"table table-bordered table-striped table-hover dataTable js-exportable\">\n                                <thead>\n                                    <tr>\n                                        <th style=\"width: 100px\">日期</th>\n                                        <th style=\"width: 100px\">步數</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr>\n                                        <td>2018/09/01</td>\n                                        <td>22023</td>\n                                    </tr>\n                                    <tr>\n                                        <td>2018/09/02</td>\n                                        <td>21095</td>\n                                    </tr>\n                                    <tr>\n                                        <td>2018/09/03</td>\n                                        <td>22553</td>\n                                    </tr>\n                                    <tr>\n                                        <td>2018/09/04</td>\n                                        <td>17685</td>\n                                    </tr>\n                                    <tr>\n                                        <td>2018/09/05</td>\n                                        <td>23903</td>\n                                    </tr>\n                                    <tr>\n                                        <td>2018/09/06</td>\n                                        <td>23698</td>\n                                    </tr>\n                                    <tr>\n                                        <td>2018/09/07</td>\n                                        <td>23587</td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/pages/report/step/step.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StepComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StepComponent = /** @class */ (function () {
    function StepComponent() {
        this.chart = true;
    }
    StepComponent.prototype.ngOnInit = function () {
        $('.js-exportable').DataTable({
            dom: 'frtip',
            bFilter: false,
            oLanguage: {
                oPaginate: {
                    sFirst: '第一頁',
                    sLast: '最後一頁',
                    sNext: '下一頁',
                    sPrevious: '上一頁'
                },
                sEmptyTable: '沒有資料顯示',
                sInfo: '顯示 _START_ to _END_ of _TOTAL_ 筆資料'
            }
        });
        MorrisBarChart();
        // Morris bar chart
        function MorrisBarChart() {
            Morris.Bar({
                element: 'm_bar_chart',
                data: [{
                        y: '2011',
                        a: 80
                    }, {
                        y: '2012',
                        a: 75
                    }, {
                        y: '2013',
                        a: 59
                    }, {
                        y: '2014',
                        a: 75
                    }, {
                        y: '2015',
                        a: 55
                    }, {
                        y: '2016',
                        a: 75
                    }, {
                        y: '2017',
                        a: 87
                    }],
                xkey: 'y',
                ykeys: ['a'],
                labels: ['A'],
                barColors: ['#ffcc80'],
                hideHover: 'auto',
                gridLineColor: '#eef0f2',
                resize: true
            });
        }
    };
    StepComponent.prototype.switchDiagram = function () {
        this.chart = !this.chart;
    };
    StepComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-step',
            template: __webpack_require__("../../../../../src/app/pages/report/step/step.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/report/step/step.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StepComponent);
    return StepComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/users/users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body.stop-scrolling {\n  height: 100%;\n  overflow: hidden; }\n\n.sweet-overlay {\n  background-color: black;\n  /* IE8 */\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=40)\";\n  /* IE8 */\n  background-color: rgba(0, 0, 0, 0.4);\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: none;\n  z-index: 10000; }\n\n.sweet-alert {\n  background-color: white;\n  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  width: 478px;\n  padding: 17px;\n  border-radius: 5px;\n  text-align: center;\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  margin-left: -256px;\n  margin-top: -200px;\n  overflow: hidden;\n  display: none;\n  z-index: 99999; }\n\n@media all and (max-width: 540px) {\n    .sweet-alert {\n      width: auto;\n      margin-left: 0;\n      margin-right: 0;\n      left: 15px;\n      right: 15px; } }\n\n.sweet-alert h2 {\n    color: #575757;\n    font-size: 30px;\n    text-align: center;\n    font-weight: 600;\n    text-transform: none;\n    position: relative;\n    margin: 25px 0;\n    padding: 0;\n    line-height: 40px;\n    display: block; }\n\n.sweet-alert p {\n    color: #797979;\n    font-size: 16px;\n    text-align: center;\n    font-weight: 300;\n    position: relative;\n    text-align: inherit;\n    float: none;\n    margin: 0;\n    padding: 0;\n    line-height: normal; }\n\n.sweet-alert fieldset {\n    border: none;\n    position: relative; }\n\n.sweet-alert .sa-error-container {\n    background-color: #f1f1f1;\n    margin-left: -17px;\n    margin-right: -17px;\n    overflow: hidden;\n    padding: 0 10px;\n    max-height: 0;\n    webkit-transition: padding 0.15s, max-height 0.15s;\n    -webkit-transition: padding 0.15s, max-height 0.15s;\n    transition: padding 0.15s, max-height 0.15s; }\n\n.sweet-alert .sa-error-container.show {\n      padding: 10px 0;\n      max-height: 100px;\n      webkit-transition: padding 0.2s, max-height 0.2s;\n      -webkit-transition: padding 0.25s, max-height 0.25s;\n      transition: padding 0.25s, max-height 0.25s; }\n\n.sweet-alert .sa-error-container .icon {\n      display: inline-block;\n      width: 24px;\n      height: 24px;\n      border-radius: 50%;\n      background-color: #ea7d7d;\n      color: white;\n      line-height: 24px;\n      text-align: center;\n      margin-right: 3px; }\n\n.sweet-alert .sa-error-container p {\n      display: inline-block; }\n\n.sweet-alert .sa-input-error {\n    position: absolute;\n    top: 29px;\n    right: 26px;\n    width: 20px;\n    height: 20px;\n    opacity: 0;\n    -webkit-transform: scale(0.5);\n    transform: scale(0.5);\n    -webkit-transform-origin: 50% 50%;\n    transform-origin: 50% 50%;\n    -webkit-transition: all 0.1s;\n    transition: all 0.1s; }\n\n.sweet-alert .sa-input-error::before, .sweet-alert .sa-input-error::after {\n      content: \"\";\n      width: 20px;\n      height: 6px;\n      background-color: #f06e57;\n      border-radius: 3px;\n      position: absolute;\n      top: 50%;\n      margin-top: -4px;\n      left: 50%;\n      margin-left: -9px; }\n\n.sweet-alert .sa-input-error::before {\n      -webkit-transform: rotate(-45deg);\n      transform: rotate(-45deg); }\n\n.sweet-alert .sa-input-error::after {\n      -webkit-transform: rotate(45deg);\n      transform: rotate(45deg); }\n\n.sweet-alert .sa-input-error.show {\n      opacity: 1;\n      -webkit-transform: scale(1);\n      transform: scale(1); }\n\n.sweet-alert input {\n    width: 100%;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    border-radius: 3px;\n    border: 1px solid #d7d7d7;\n    height: 43px;\n    margin-top: 10px;\n    margin-bottom: 17px;\n    font-size: 18px;\n    -webkit-box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.06);\n            box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.06);\n    padding: 0 12px;\n    display: none;\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s; }\n\n.sweet-alert input:focus {\n      outline: none;\n      -webkit-box-shadow: 0px 0px 3px #c4e6f5;\n              box-shadow: 0px 0px 3px #c4e6f5;\n      border: 1px solid #b4dbed; }\n\n.sweet-alert input:focus::-moz-placeholder {\n        -webkit-transition: opacity 0.3s 0.03s ease;\n        transition: opacity 0.3s 0.03s ease;\n        opacity: 0.5; }\n\n.sweet-alert input:focus:-ms-input-placeholder {\n        -webkit-transition: opacity 0.3s 0.03s ease;\n        transition: opacity 0.3s 0.03s ease;\n        opacity: 0.5; }\n\n.sweet-alert input:focus::-webkit-input-placeholder {\n        -webkit-transition: opacity 0.3s 0.03s ease;\n        transition: opacity 0.3s 0.03s ease;\n        opacity: 0.5; }\n\n.sweet-alert input::-moz-placeholder {\n      color: #bdbdbd; }\n\n.sweet-alert input:-ms-input-placeholder {\n      color: #bdbdbd; }\n\n.sweet-alert input::-webkit-input-placeholder {\n      color: #bdbdbd; }\n\n.sweet-alert.show-input input {\n    display: block; }\n\n.sweet-alert .sa-confirm-button-container {\n    display: inline-block;\n    position: relative; }\n\n.sweet-alert .la-ball-fall {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    margin-left: -27px;\n    margin-top: 4px;\n    opacity: 0;\n    visibility: hidden; }\n\n.sweet-alert button {\n    background-color: #8CD4F5;\n    color: white;\n    border: none;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    font-size: 17px;\n    font-weight: 500;\n    border-radius: 5px;\n    padding: 10px 32px;\n    margin: 26px 5px 0 5px;\n    cursor: pointer; }\n\n.sweet-alert button:focus {\n      outline: none;\n      -webkit-box-shadow: 0 0 2px rgba(128, 179, 235, 0.5), inset 0 0 0 1px rgba(0, 0, 0, 0.05);\n              box-shadow: 0 0 2px rgba(128, 179, 235, 0.5), inset 0 0 0 1px rgba(0, 0, 0, 0.05); }\n\n.sweet-alert button:hover {\n      background-color: #7ecff4; }\n\n.sweet-alert button:active {\n      background-color: #5dc2f1; }\n\n.sweet-alert button.cancel {\n      background-color: #C1C1C1; }\n\n.sweet-alert button.cancel:hover {\n        background-color: #b9b9b9; }\n\n.sweet-alert button.cancel:active {\n        background-color: #a8a8a8; }\n\n.sweet-alert button.cancel:focus {\n        -webkit-box-shadow: rgba(197, 205, 211, 0.8) 0px 0px 2px, rgba(0, 0, 0, 0.0470588) 0px 0px 0px 1px inset !important;\n                box-shadow: rgba(197, 205, 211, 0.8) 0px 0px 2px, rgba(0, 0, 0, 0.0470588) 0px 0px 0px 1px inset !important; }\n\n.sweet-alert button[disabled] {\n      opacity: .6;\n      cursor: default; }\n\n.sweet-alert button.confirm[disabled] {\n      color: transparent; }\n\n.sweet-alert button.confirm[disabled] ~ .la-ball-fall {\n        opacity: 1;\n        visibility: visible;\n        -webkit-transition-delay: 0s;\n                transition-delay: 0s; }\n\n.sweet-alert button::-moz-focus-inner {\n      border: 0; }\n\n.sweet-alert[data-has-cancel-button=false] button {\n    -webkit-box-shadow: none !important;\n            box-shadow: none !important; }\n\n.sweet-alert[data-has-confirm-button=false][data-has-cancel-button=false] {\n    padding-bottom: 40px; }\n\n.sweet-alert .sa-icon {\n    width: 80px;\n    height: 80px;\n    border: 4px solid gray;\n    border-radius: 40px;\n    border-radius: 50%;\n    margin: 20px auto;\n    padding: 0;\n    position: relative;\n    -webkit-box-sizing: content-box;\n            box-sizing: content-box; }\n\n.sweet-alert .sa-icon.sa-error {\n      border-color: #F27474; }\n\n.sweet-alert .sa-icon.sa-error .sa-x-mark {\n        position: relative;\n        display: block; }\n\n.sweet-alert .sa-icon.sa-error .sa-line {\n        position: absolute;\n        height: 5px;\n        width: 47px;\n        background-color: #F27474;\n        display: block;\n        top: 37px;\n        border-radius: 2px; }\n\n.sweet-alert .sa-icon.sa-error .sa-line.sa-left {\n          -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n          left: 17px; }\n\n.sweet-alert .sa-icon.sa-error .sa-line.sa-right {\n          -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n          right: 16px; }\n\n.sweet-alert .sa-icon.sa-warning {\n      border-color: #F8BB86; }\n\n.sweet-alert .sa-icon.sa-warning .sa-body {\n        position: absolute;\n        width: 5px;\n        height: 47px;\n        left: 50%;\n        top: 10px;\n        border-radius: 2px;\n        margin-left: -2px;\n        background-color: #F8BB86; }\n\n.sweet-alert .sa-icon.sa-warning .sa-dot {\n        position: absolute;\n        width: 7px;\n        height: 7px;\n        border-radius: 50%;\n        margin-left: -3px;\n        left: 50%;\n        bottom: 10px;\n        background-color: #F8BB86; }\n\n.sweet-alert .sa-icon.sa-info {\n      border-color: #C9DAE1; }\n\n.sweet-alert .sa-icon.sa-info::before {\n        content: \"\";\n        position: absolute;\n        width: 5px;\n        height: 29px;\n        left: 50%;\n        bottom: 17px;\n        border-radius: 2px;\n        margin-left: -2px;\n        background-color: #C9DAE1; }\n\n.sweet-alert .sa-icon.sa-info::after {\n        content: \"\";\n        position: absolute;\n        width: 7px;\n        height: 7px;\n        border-radius: 50%;\n        margin-left: -3px;\n        top: 19px;\n        background-color: #C9DAE1; }\n\n.sweet-alert .sa-icon.sa-success {\n      border-color: #A5DC86; }\n\n.sweet-alert .sa-icon.sa-success::before, .sweet-alert .sa-icon.sa-success::after {\n        content: '';\n        border-radius: 40px;\n        border-radius: 50%;\n        position: absolute;\n        width: 60px;\n        height: 120px;\n        background: white;\n        -webkit-transform: rotate(45deg);\n        transform: rotate(45deg); }\n\n.sweet-alert .sa-icon.sa-success::before {\n        border-radius: 120px 0 0 120px;\n        top: -7px;\n        left: -33px;\n        -webkit-transform: rotate(-45deg);\n        transform: rotate(-45deg);\n        -webkit-transform-origin: 60px 60px;\n        transform-origin: 60px 60px; }\n\n.sweet-alert .sa-icon.sa-success::after {\n        border-radius: 0 120px 120px 0;\n        top: -11px;\n        left: 30px;\n        -webkit-transform: rotate(-45deg);\n        transform: rotate(-45deg);\n        -webkit-transform-origin: 0px 60px;\n        transform-origin: 0px 60px; }\n\n.sweet-alert .sa-icon.sa-success .sa-placeholder {\n        width: 80px;\n        height: 80px;\n        border: 4px solid rgba(165, 220, 134, 0.2);\n        border-radius: 40px;\n        border-radius: 50%;\n        -webkit-box-sizing: content-box;\n                box-sizing: content-box;\n        position: absolute;\n        left: -4px;\n        top: -4px;\n        z-index: 2; }\n\n.sweet-alert .sa-icon.sa-success .sa-fix {\n        width: 5px;\n        height: 90px;\n        background-color: white;\n        position: absolute;\n        left: 28px;\n        top: 8px;\n        z-index: 1;\n        -webkit-transform: rotate(-45deg);\n        transform: rotate(-45deg); }\n\n.sweet-alert .sa-icon.sa-success .sa-line {\n        height: 5px;\n        background-color: #A5DC86;\n        display: block;\n        border-radius: 2px;\n        position: absolute;\n        z-index: 2; }\n\n.sweet-alert .sa-icon.sa-success .sa-line.sa-tip {\n          width: 25px;\n          left: 14px;\n          top: 46px;\n          -webkit-transform: rotate(45deg);\n          transform: rotate(45deg); }\n\n.sweet-alert .sa-icon.sa-success .sa-line.sa-long {\n          width: 47px;\n          right: 8px;\n          top: 38px;\n          -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg); }\n\n.sweet-alert .sa-icon.sa-custom {\n      background-size: contain;\n      border-radius: 0;\n      border: none;\n      background-position: center center;\n      background-repeat: no-repeat; }\n\n/*\n * Animations\n */\n\n@-webkit-keyframes showSweetAlert {\n  0% {\n    transform: scale(0.7);\n    -webkit-transform: scale(0.7); }\n  45% {\n    transform: scale(1.05);\n    -webkit-transform: scale(1.05); }\n  80% {\n    transform: scale(0.95);\n    -webkit-transform: scale(0.95); }\n  100% {\n    transform: scale(1);\n    -webkit-transform: scale(1); } }\n\n@keyframes showSweetAlert {\n  0% {\n    transform: scale(0.7);\n    -webkit-transform: scale(0.7); }\n  45% {\n    transform: scale(1.05);\n    -webkit-transform: scale(1.05); }\n  80% {\n    transform: scale(0.95);\n    -webkit-transform: scale(0.95); }\n  100% {\n    transform: scale(1);\n    -webkit-transform: scale(1); } }\n\n@-webkit-keyframes hideSweetAlert {\n  0% {\n    transform: scale(1);\n    -webkit-transform: scale(1); }\n  100% {\n    transform: scale(0.5);\n    -webkit-transform: scale(0.5); } }\n\n@keyframes hideSweetAlert {\n  0% {\n    transform: scale(1);\n    -webkit-transform: scale(1); }\n  100% {\n    transform: scale(0.5);\n    -webkit-transform: scale(0.5); } }\n\n@-webkit-keyframes slideFromTop {\n  0% {\n    top: 0%; }\n  100% {\n    top: 50%; } }\n\n@keyframes slideFromTop {\n  0% {\n    top: 0%; }\n  100% {\n    top: 50%; } }\n\n@-webkit-keyframes slideToTop {\n  0% {\n    top: 50%; }\n  100% {\n    top: 0%; } }\n\n@keyframes slideToTop {\n  0% {\n    top: 50%; }\n  100% {\n    top: 0%; } }\n\n@-webkit-keyframes slideFromBottom {\n  0% {\n    top: 70%; }\n  100% {\n    top: 50%; } }\n\n@keyframes slideFromBottom {\n  0% {\n    top: 70%; }\n  100% {\n    top: 50%; } }\n\n@-webkit-keyframes slideToBottom {\n  0% {\n    top: 50%; }\n  100% {\n    top: 70%; } }\n\n@keyframes slideToBottom {\n  0% {\n    top: 50%; }\n  100% {\n    top: 70%; } }\n\n.showSweetAlert[data-animation=pop] {\n  -webkit-animation: showSweetAlert 0.3s;\n  animation: showSweetAlert 0.3s; }\n\n.showSweetAlert[data-animation=none] {\n  -webkit-animation: none;\n  animation: none; }\n\n.showSweetAlert[data-animation=slide-from-top] {\n  -webkit-animation: slideFromTop 0.3s;\n  animation: slideFromTop 0.3s; }\n\n.showSweetAlert[data-animation=slide-from-bottom] {\n  -webkit-animation: slideFromBottom 0.3s;\n  animation: slideFromBottom 0.3s; }\n\n.hideSweetAlert[data-animation=pop] {\n  -webkit-animation: hideSweetAlert 0.2s;\n  animation: hideSweetAlert 0.2s; }\n\n.hideSweetAlert[data-animation=none] {\n  -webkit-animation: none;\n  animation: none; }\n\n.hideSweetAlert[data-animation=slide-from-top] {\n  -webkit-animation: slideToTop 0.4s;\n  animation: slideToTop 0.4s; }\n\n.hideSweetAlert[data-animation=slide-from-bottom] {\n  -webkit-animation: slideToBottom 0.3s;\n  animation: slideToBottom 0.3s; }\n\n@-webkit-keyframes animateSuccessTip {\n  0% {\n    width: 0;\n    left: 1px;\n    top: 19px; }\n  54% {\n    width: 0;\n    left: 1px;\n    top: 19px; }\n  70% {\n    width: 50px;\n    left: -8px;\n    top: 37px; }\n  84% {\n    width: 17px;\n    left: 21px;\n    top: 48px; }\n  100% {\n    width: 25px;\n    left: 14px;\n    top: 45px; } }\n\n@keyframes animateSuccessTip {\n  0% {\n    width: 0;\n    left: 1px;\n    top: 19px; }\n  54% {\n    width: 0;\n    left: 1px;\n    top: 19px; }\n  70% {\n    width: 50px;\n    left: -8px;\n    top: 37px; }\n  84% {\n    width: 17px;\n    left: 21px;\n    top: 48px; }\n  100% {\n    width: 25px;\n    left: 14px;\n    top: 45px; } }\n\n@-webkit-keyframes animateSuccessLong {\n  0% {\n    width: 0;\n    right: 46px;\n    top: 54px; }\n  65% {\n    width: 0;\n    right: 46px;\n    top: 54px; }\n  84% {\n    width: 55px;\n    right: 0px;\n    top: 35px; }\n  100% {\n    width: 47px;\n    right: 8px;\n    top: 38px; } }\n\n@keyframes animateSuccessLong {\n  0% {\n    width: 0;\n    right: 46px;\n    top: 54px; }\n  65% {\n    width: 0;\n    right: 46px;\n    top: 54px; }\n  84% {\n    width: 55px;\n    right: 0px;\n    top: 35px; }\n  100% {\n    width: 47px;\n    right: 8px;\n    top: 38px; } }\n\n@-webkit-keyframes rotatePlaceholder {\n  0% {\n    transform: rotate(-45deg);\n    -webkit-transform: rotate(-45deg); }\n  5% {\n    transform: rotate(-45deg);\n    -webkit-transform: rotate(-45deg); }\n  12% {\n    transform: rotate(-405deg);\n    -webkit-transform: rotate(-405deg); }\n  100% {\n    transform: rotate(-405deg);\n    -webkit-transform: rotate(-405deg); } }\n\n@keyframes rotatePlaceholder {\n  0% {\n    transform: rotate(-45deg);\n    -webkit-transform: rotate(-45deg); }\n  5% {\n    transform: rotate(-45deg);\n    -webkit-transform: rotate(-45deg); }\n  12% {\n    transform: rotate(-405deg);\n    -webkit-transform: rotate(-405deg); }\n  100% {\n    transform: rotate(-405deg);\n    -webkit-transform: rotate(-405deg); } }\n\n.animateSuccessTip {\n  -webkit-animation: animateSuccessTip 0.75s;\n  animation: animateSuccessTip 0.75s; }\n\n.animateSuccessLong {\n  -webkit-animation: animateSuccessLong 0.75s;\n  animation: animateSuccessLong 0.75s; }\n\n.sa-icon.sa-success.animate::after {\n  -webkit-animation: rotatePlaceholder 4.25s ease-in;\n  animation: rotatePlaceholder 4.25s ease-in; }\n\n@-webkit-keyframes animateErrorIcon {\n  0% {\n    transform: rotateX(100deg);\n    -webkit-transform: rotateX(100deg);\n    opacity: 0; }\n  100% {\n    transform: rotateX(0deg);\n    -webkit-transform: rotateX(0deg);\n    opacity: 1; } }\n\n@keyframes animateErrorIcon {\n  0% {\n    transform: rotateX(100deg);\n    -webkit-transform: rotateX(100deg);\n    opacity: 0; }\n  100% {\n    transform: rotateX(0deg);\n    -webkit-transform: rotateX(0deg);\n    opacity: 1; } }\n\n.animateErrorIcon {\n  -webkit-animation: animateErrorIcon 0.5s;\n  animation: animateErrorIcon 0.5s; }\n\n@-webkit-keyframes animateXMark {\n  0% {\n    transform: scale(0.4);\n    -webkit-transform: scale(0.4);\n    margin-top: 26px;\n    opacity: 0; }\n  50% {\n    transform: scale(0.4);\n    -webkit-transform: scale(0.4);\n    margin-top: 26px;\n    opacity: 0; }\n  80% {\n    transform: scale(1.15);\n    -webkit-transform: scale(1.15);\n    margin-top: -6px; }\n  100% {\n    transform: scale(1);\n    -webkit-transform: scale(1);\n    margin-top: 0;\n    opacity: 1; } }\n\n@keyframes animateXMark {\n  0% {\n    transform: scale(0.4);\n    -webkit-transform: scale(0.4);\n    margin-top: 26px;\n    opacity: 0; }\n  50% {\n    transform: scale(0.4);\n    -webkit-transform: scale(0.4);\n    margin-top: 26px;\n    opacity: 0; }\n  80% {\n    transform: scale(1.15);\n    -webkit-transform: scale(1.15);\n    margin-top: -6px; }\n  100% {\n    transform: scale(1);\n    -webkit-transform: scale(1);\n    margin-top: 0;\n    opacity: 1; } }\n\n.animateXMark {\n  -webkit-animation: animateXMark 0.5s;\n  animation: animateXMark 0.5s; }\n\n@-webkit-keyframes pulseWarning {\n  0% {\n    border-color: #F8D486; }\n  100% {\n    border-color: #F8BB86; } }\n\n@keyframes pulseWarning {\n  0% {\n    border-color: #F8D486; }\n  100% {\n    border-color: #F8BB86; } }\n\n.pulseWarning {\n  -webkit-animation: pulseWarning 0.75s infinite alternate;\n  animation: pulseWarning 0.75s infinite alternate; }\n\n@-webkit-keyframes pulseWarningIns {\n  0% {\n    background-color: #F8D486; }\n  100% {\n    background-color: #F8BB86; } }\n\n@keyframes pulseWarningIns {\n  0% {\n    background-color: #F8D486; }\n  100% {\n    background-color: #F8BB86; } }\n\n.pulseWarningIns {\n  -webkit-animation: pulseWarningIns 0.75s infinite alternate;\n  animation: pulseWarningIns 0.75s infinite alternate; }\n\n@-webkit-keyframes rotate-loading {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes rotate-loading {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n/* Internet Explorer 9 has some special quirks that are fixed here */\n\n/* The icons are not animated. */\n\n/* This file is automatically merged into sweet-alert.min.js through Gulp */\n\n/* Error icon */\n\n.sweet-alert .sa-icon.sa-error .sa-line.sa-left {\n  -ms-transform: rotate(45deg) \\9; }\n\n.sweet-alert .sa-icon.sa-error .sa-line.sa-right {\n  -ms-transform: rotate(-45deg) \\9; }\n\n/* Success icon */\n\n.sweet-alert .sa-icon.sa-success {\n  border-color: transparent\\9; }\n\n.sweet-alert .sa-icon.sa-success .sa-line.sa-tip {\n  -ms-transform: rotate(45deg) \\9; }\n\n.sweet-alert .sa-icon.sa-success .sa-line.sa-long {\n  -ms-transform: rotate(-45deg) \\9; }\n\n/*!\n * Load Awesome v1.1.0 (http://github.danielcardoso.net/load-awesome/)\n * Copyright 2015 Daniel Cardoso <@DanielCardoso>\n * Licensed under MIT\n */\n\n.la-ball-fall,\n.la-ball-fall > div {\n  position: relative;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n.la-ball-fall {\n  display: block;\n  font-size: 0;\n  color: #fff; }\n\n.la-ball-fall.la-dark {\n  color: #333; }\n\n.la-ball-fall > div {\n  display: inline-block;\n  float: none;\n  background-color: currentColor;\n  border: 0 solid currentColor; }\n\n.la-ball-fall {\n  width: 54px;\n  height: 18px; }\n\n.la-ball-fall > div {\n  width: 10px;\n  height: 10px;\n  margin: 4px;\n  border-radius: 100%;\n  opacity: 0;\n  -webkit-animation: ball-fall 1s ease-in-out infinite;\n  animation: ball-fall 1s ease-in-out infinite; }\n\n.la-ball-fall > div:nth-child(1) {\n  -webkit-animation-delay: -200ms;\n  animation-delay: -200ms; }\n\n.la-ball-fall > div:nth-child(2) {\n  -webkit-animation-delay: -100ms;\n  animation-delay: -100ms; }\n\n.la-ball-fall > div:nth-child(3) {\n  -webkit-animation-delay: 0ms;\n  animation-delay: 0ms; }\n\n.la-ball-fall.la-sm {\n  width: 26px;\n  height: 8px; }\n\n.la-ball-fall.la-sm > div {\n  width: 4px;\n  height: 4px;\n  margin: 2px; }\n\n.la-ball-fall.la-2x {\n  width: 108px;\n  height: 36px; }\n\n.la-ball-fall.la-2x > div {\n  width: 20px;\n  height: 20px;\n  margin: 8px; }\n\n.la-ball-fall.la-3x {\n  width: 162px;\n  height: 54px; }\n\n.la-ball-fall.la-3x > div {\n  width: 30px;\n  height: 30px;\n  margin: 12px; }\n\n/*\n * Animation\n */\n\n@-webkit-keyframes ball-fall {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-145%);\n    transform: translateY(-145%); }\n  10% {\n    opacity: .5; }\n  20% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    transform: translateY(0); }\n  80% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    transform: translateY(0); }\n  90% {\n    opacity: .5; }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(145%);\n    transform: translateY(145%); } }\n\n@keyframes ball-fall {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-145%);\n    transform: translateY(-145%); }\n  10% {\n    opacity: .5; }\n  20% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    transform: translateY(0); }\n  80% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    transform: translateY(0); }\n  90% {\n    opacity: .5; }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(145%);\n    transform: translateY(145%); } }\n\n/*\n * The MIT License\n * Copyright (c) 2012 Matias Meno <m@tias.me>\n */\n\n@-webkit-keyframes passing-through {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(40px);\n    transform: translateY(40px); }\n  30%, 70% {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n    transform: translateY(0px); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(-40px);\n    transform: translateY(-40px); } }\n\n@keyframes passing-through {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(40px);\n    transform: translateY(40px); }\n  30%, 70% {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n    transform: translateY(0px); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(-40px);\n    transform: translateY(-40px); } }\n\n@-webkit-keyframes slide-in {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(40px);\n    transform: translateY(40px); }\n  30% {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n    transform: translateY(0px); } }\n\n@keyframes slide-in {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(40px);\n    transform: translateY(40px); }\n  30% {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n    transform: translateY(0px); } }\n\n@-webkit-keyframes pulse {\n  0% {\n    -webkit-transform: scale(1);\n    transform: scale(1); }\n  10% {\n    -webkit-transform: scale(1.1);\n    transform: scale(1.1); }\n  20% {\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n\n@keyframes pulse {\n  0% {\n    -webkit-transform: scale(1);\n    transform: scale(1); }\n  10% {\n    -webkit-transform: scale(1.1);\n    transform: scale(1.1); }\n  20% {\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n\n.dropzone, .dropzone * {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\n.dropzone {\n  min-height: 150px;\n  border: 2px solid rgba(0, 0, 0, 0.3);\n  background: white;\n  padding: 20px 20px; }\n\n.dropzone.dz-clickable {\n    cursor: pointer; }\n\n.dropzone.dz-clickable * {\n      cursor: default; }\n\n.dropzone.dz-clickable .dz-message, .dropzone.dz-clickable .dz-message * {\n      cursor: pointer; }\n\n.dropzone.dz-started .dz-message {\n    display: none; }\n\n.dropzone.dz-drag-hover {\n    border-style: solid; }\n\n.dropzone.dz-drag-hover .dz-message {\n      opacity: 0.5; }\n\n.dropzone .dz-message {\n    text-align: center;\n    margin: 2em 0; }\n\n.dropzone .dz-preview {\n    position: relative;\n    display: inline-block;\n    vertical-align: top;\n    margin: 16px;\n    min-height: 100px; }\n\n.dropzone .dz-preview:hover {\n      z-index: 1000; }\n\n.dropzone .dz-preview:hover .dz-details {\n        opacity: 1; }\n\n.dropzone .dz-preview.dz-file-preview .dz-image {\n      border-radius: 20px;\n      background: #999;\n      background: -webkit-gradient(linear, left top, left bottom, from(#eee), to(#ddd));\n      background: linear-gradient(to bottom, #eee, #ddd); }\n\n.dropzone .dz-preview.dz-file-preview .dz-details {\n      opacity: 1; }\n\n.dropzone .dz-preview.dz-image-preview {\n      background: white; }\n\n.dropzone .dz-preview.dz-image-preview .dz-details {\n        -webkit-transition: opacity 0.2s linear;\n        transition: opacity 0.2s linear; }\n\n.dropzone .dz-preview .dz-remove {\n      font-size: 14px;\n      text-align: center;\n      display: block;\n      cursor: pointer;\n      border: none; }\n\n.dropzone .dz-preview .dz-remove:hover {\n        text-decoration: underline; }\n\n.dropzone .dz-preview:hover .dz-details {\n      opacity: 1; }\n\n.dropzone .dz-preview .dz-details {\n      z-index: 20;\n      position: absolute;\n      top: 0;\n      left: 0;\n      opacity: 0;\n      font-size: 13px;\n      min-width: 100%;\n      max-width: 100%;\n      padding: 2em 1em;\n      text-align: center;\n      color: rgba(0, 0, 0, 0.9);\n      line-height: 150%; }\n\n.dropzone .dz-preview .dz-details .dz-size {\n        margin-bottom: 1em;\n        font-size: 16px; }\n\n.dropzone .dz-preview .dz-details .dz-filename {\n        white-space: nowrap; }\n\n.dropzone .dz-preview .dz-details .dz-filename:hover span {\n          border: 1px solid rgba(200, 200, 200, 0.8);\n          background-color: rgba(255, 255, 255, 0.8); }\n\n.dropzone .dz-preview .dz-details .dz-filename:not(:hover) {\n          overflow: hidden;\n          text-overflow: ellipsis; }\n\n.dropzone .dz-preview .dz-details .dz-filename:not(:hover) span {\n            border: 1px solid transparent; }\n\n.dropzone .dz-preview .dz-details .dz-filename span, .dropzone .dz-preview .dz-details .dz-size span {\n        background-color: rgba(255, 255, 255, 0.4);\n        padding: 0 0.4em;\n        border-radius: 3px; }\n\n.dropzone .dz-preview:hover .dz-image img {\n      -webkit-transform: scale(1.05, 1.05);\n      transform: scale(1.05, 1.05);\n      -webkit-filter: blur(8px);\n      filter: blur(8px); }\n\n.dropzone .dz-preview .dz-image {\n      border-radius: 20px;\n      overflow: hidden;\n      width: 120px;\n      height: 120px;\n      position: relative;\n      display: block;\n      z-index: 10; }\n\n.dropzone .dz-preview .dz-image img {\n        display: block; }\n\n.dropzone .dz-preview.dz-success .dz-success-mark {\n      -webkit-animation: passing-through 3s cubic-bezier(0.77, 0, 0.175, 1);\n      animation: passing-through 3s cubic-bezier(0.77, 0, 0.175, 1); }\n\n.dropzone .dz-preview.dz-error .dz-error-mark {\n      opacity: 1;\n      -webkit-animation: slide-in 3s cubic-bezier(0.77, 0, 0.175, 1);\n      animation: slide-in 3s cubic-bezier(0.77, 0, 0.175, 1); }\n\n.dropzone .dz-preview .dz-success-mark, .dropzone .dz-preview .dz-error-mark {\n      pointer-events: none;\n      opacity: 0;\n      z-index: 500;\n      position: absolute;\n      display: block;\n      top: 50%;\n      left: 50%;\n      margin-left: -27px;\n      margin-top: -27px; }\n\n.dropzone .dz-preview .dz-success-mark svg, .dropzone .dz-preview .dz-error-mark svg {\n        display: block;\n        width: 54px;\n        height: 54px; }\n\n.dropzone .dz-preview.dz-processing .dz-progress {\n      opacity: 1;\n      -webkit-transition: all 0.2s linear;\n      transition: all 0.2s linear; }\n\n.dropzone .dz-preview.dz-complete .dz-progress {\n      opacity: 0;\n      -webkit-transition: opacity 0.4s ease-in;\n      transition: opacity 0.4s ease-in; }\n\n.dropzone .dz-preview:not(.dz-processing) .dz-progress {\n      -webkit-animation: pulse 6s ease infinite;\n      animation: pulse 6s ease infinite; }\n\n.dropzone .dz-preview .dz-progress {\n      opacity: 1;\n      z-index: 1000;\n      pointer-events: none;\n      position: absolute;\n      height: 16px;\n      left: 50%;\n      top: 50%;\n      margin-top: -8px;\n      width: 80px;\n      margin-left: -40px;\n      background: rgba(255, 255, 255, 0.9);\n      -webkit-transform: scale(1);\n      border-radius: 8px;\n      overflow: hidden; }\n\n.dropzone .dz-preview .dz-progress .dz-upload {\n        background: #333;\n        background: -webkit-gradient(linear, left top, left bottom, from(#666), to(#444));\n        background: linear-gradient(to bottom, #666, #444);\n        position: absolute;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        width: 0;\n        -webkit-transition: width 300ms ease-in-out;\n        transition: width 300ms ease-in-out; }\n\n.dropzone .dz-preview.dz-error .dz-error-message {\n      display: block; }\n\n.dropzone .dz-preview.dz-error:hover .dz-error-message {\n      opacity: 1;\n      pointer-events: auto; }\n\n.dropzone .dz-preview .dz-error-message {\n      pointer-events: none;\n      z-index: 1000;\n      position: absolute;\n      display: block;\n      display: none;\n      opacity: 0;\n      -webkit-transition: opacity 0.3s ease;\n      transition: opacity 0.3s ease;\n      border-radius: 8px;\n      font-size: 13px;\n      top: 130px;\n      left: -10px;\n      width: 140px;\n      background: #be2626;\n      background: -webkit-gradient(linear, left top, left bottom, from(#be2626), to(#a92222));\n      background: linear-gradient(to bottom, #be2626, #a92222);\n      padding: 0.5em 1.2em;\n      color: white; }\n\n.dropzone .dz-preview .dz-error-message:after {\n        content: '';\n        position: absolute;\n        top: -6px;\n        left: 64px;\n        width: 0;\n        height: 0;\n        border-left: 6px solid transparent;\n        border-right: 6px solid transparent;\n        border-bottom: 6px solid #be2626; }\n\ndropzone>.dropzone.dz-wrapper .dz-message {\n    min-height: 130px !important;\n}\n\n.dropdown-menu {\n    display: none !important;\n}\n\n.bootstrap-select.show .dropdown-menu {\n    display: inline-block !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\n    <div class=\"block-header\">\n        <div class=\"row\">\n            <div class=\"col-lg-7 col-md-6 col-sm-12\">\n                <h2>帳號與群組</h2>\n            </div>\n        </div>\n    </div>\n    <div class=\"container-fluid\">\n        <div class=\"row clearfix\">\n            <div class=\"col-md-2 col-lg-2\">\n                <div>\n                    <span class=\"badge badge-primary d-block\">所有群組</span>\n                    <span class=\"badge badge-primary d-block\">未有群組之成員</span>\n                    <span class=\"badge badge-primary d-block\">田徑隊1</span>\n                    <span class=\"badge badge-primary d-block\">田徑隊2</span>\n                    <span class=\"badge badge-primary d-block\">游泳隊1</span>\n                    <span class=\"badge badge-primary d-block\">游泳隊2</span>\n                </div>\n                <div class=\"text-center\">\n                    <button type=\"button\" class=\"btn btn-warning btn-icon  btn-icon-mini btn-round\">\n                        <i class=\"zmdi zmdi-edit\"></i>\n                    </button>\n                    <button type=\"button\" class=\"btn btn-danger btn-icon  btn-icon-mini btn-round\">\n                        <i class=\"zmdi zmdi-delete\"></i>\n                    </button>\n                    <button type=\"button\" class=\"btn btn-info btn-icon  btn-icon-mini btn-round\">\n                        <i class=\"zmdi zmdi-plus\"></i>\n                    </button>\n                </div>\n            </div>\n            <div class=\"col-md-10 col-lg-10\">\n                <div class=\"card\">\n                    <div class=\"header\"></div>\n                    <div class=\"body\">\n                        <div id=\"m_table_chart\">\n                            <table class=\"table table-bordered table-striped table-hover dataTable js-exportable\">\n                                <thead>\n                                    <tr>\n                                        <th>姓名</th>\n                                        <th>出生日期</th>\n                                        <th>身高</th>\n                                        <th>體重</th>\n                                        <th>每日步數目標</th>\n                                        <th>每日睡眠目標</th>\n                                        <th>手環</th>\n                                        <th>群組</th>\n                                        <th>動作</th>\n                                    </tr>\n                                </thead>\n                                <!-- <tfoot>\n                                    <tr>\n                                        <th>姓名</th>\n                                        <th>出生日期</th>\n                                        <th>身高</th>\n                                        <th>體重</th>\n                                        <th>每日步數目標</th>\n                                        <th>每日睡眠目標</th>\n                                        <th>手環</th>\n                                        <th>群組</th>\n                                        <th>目標</th>\n                                    </tr>\n                                </tfoot> -->\n                                <tbody>\n                                    <tr>\n                                        <td>選手一</td>\n                                        <td>1999.01.01</td>\n                                        <td>182</td>\n                                        <td>72</td>\n                                        <td>20000</td>\n                                        <td>7hr30min</td>\n                                        <td>xxxx</td>\n                                        <td>田徑隊</td>\n                                        <td>\n                                            <button type=\"button\" class=\"btn btn-default btn-icon btn-icon-mini btn-round\">\n                                                <i class=\"zmdi zmdi-edit\"></i>\n                                            </button>\n                                            <button type=\"button\" class=\"btn btn-default btn-icon btn-icon-mini btn-round btn-delete\">\n                                                <i class=\"zmdi zmdi-delete\"></i>\n                                            </button>\n\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>選手二</td>\n                                        <td>1999.01.01</td>\n                                        <td>182</td>\n                                        <td>72</td>\n                                        <td>20000</td>\n                                        <td>7hr30min</td>\n                                        <td>xxxx</td>\n                                        <td>田徑隊</td>\n                                        <td>\n                                            <button type=\"button\" class=\"btn btn-default btn-icon btn-icon-mini btn-round\">\n                                                <i class=\"zmdi zmdi-edit\"></i>\n                                            </button>\n                                            <button type=\"button\" class=\"btn btn-default btn-icon btn-icon-mini btn-round btn-delete\">\n                                                <i class=\"zmdi zmdi-delete\"></i>\n                                            </button>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n                <a href=\"#addModal\" data-toggle=\"modal\" data-target=\"#addModal\">\n                    <button type=\"button\" class=\"btn btn-warning btn-round\">\n                        <i class=\"zmdi zmdi-plus\"></i>&nbsp;單筆\n                    </button>\n                </a>\n                <a href=\"#uploadModal\" data-toggle=\"modal\" data-target=\"#uploadModal\">\n                    <button type=\"button\" class=\"btn btn-warning btn-round\">\n                        <i class=\"zmdi zmdi-file-plus\"></i>&nbsp;批次\n                    </button>\n                </a>\n            </div>\n        </div>\n    </div>\n</section>\n\n<!-- Modal Dialogs ========= -->\n<div class=\"modal fade\" id=\"addModal\" tabindex=\"-1\" role=\"dialog\">\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h4 class=\"title\">基本資料</h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row clearfix\">\n                    <div class=\"col-md-4 col-lg-4\">\n                        <label>照片</label>\n                        <form action=\"/\" id=\"frmFileUpload\" class=\"dropzone m-b-20 m-t-20\" method=\"post\" enctype=\"multipart/form-data\">\n                            <div class=\"dz-message\">\n                            </div>\n                            <div class=\"fallback\">\n                                <div class=\"dz-message\">\n                                    <div class=\"drag-icon-cph\"> <i class=\"material-icons\">touch_app</i> </div>\n                                </div>\n                                <dropzone style=\"width: 100%;\" [config]=\"config\" [message]=\"'<em>Drop files here or click to upload.</em>'\"></dropzone>\n                            </div>\n                        </form>\n                    </div>\n                    <div class=\"col-md-6 col-lg-6\">\n                        <form>\n                            <label for=\"modal_name\">姓名</label>\n                            <div class=\"form-group\">\n                                <input type=\"text\" id=\"modal_name\" class=\"form-control\">\n                            </div>\n                            <label for=\"modal_birth\">出生日期</label>\n                            <div class=\"form-group\">\n                                <input type=\"date\" id=\"modal_birth\" class=\"form-control\">\n                            </div>\n                            <label for=\"modal_height\">身高</label>\n                            <div class=\"form-group\">\n                                <input type=\"text\" id=\"modal_height\" class=\"form-control\">\n                            </div>\n                            <label for=\"modal_weight\">體重</label>\n                            <div class=\"form-group\">\n                                <input type=\"text\" id=\"modal_weight\" class=\"form-control\">\n                            </div>\n                            <label for=\"modal_target_step\">每日步數目標</label>\n                            <div class=\"form-group\">\n                                <input type=\"text\" id=\"modal_target_step\" class=\"form-control\">\n                            </div>\n                            <label for=\"modal_target_sleep\">每日睡眠目標</label>\n                            <div class=\"form-group\">\n                                <input type=\"text\" id=\"modal_target_sleep\" class=\"form-control\">\n                            </div>\n                            <label>群組</label>\n                            <div class=\"form-group\">\n                                <input type=\"text\" class=\"form-control\" disabled>\n                                <a href=\"#groupModal\" data-toggle=\"modal\" data-target=\"#groupModal\">選擇群組</a>\n                            </div>\n                            <label>手環序號</label>\n                            <div class=\"form-group\">\n                                <input type=\"text\" class=\"form-control\" disabled>\n                                <a href=\"#deviceModal\" data-toggle=\"modal\" data-target=\"#deviceModal\">選擇手環</a>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-danger btn-round waves-effect\">儲存</button>\n                <button type=\"button\" class=\"btn btn-default btn-simple btn-round waves-effect\" data-dismiss=\"modal\">取消</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"uploadModal\" tabindex=\"-1\" role=\"dialog\">\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h4 class=\"title\">批次檔案上傳</h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row clearfix\">\n                    <div class=\"col-md-12 col-lg-12\">\n                        <form action=\"/\" id=\"frmFileUpload\" class=\"dropzone m-b-20 m-t-20\" method=\"post\" enctype=\"multipart/form-data\">\n                            <div class=\"dz-message\">\n                            </div>\n                            <div class=\"fallback\">\n                                <div class=\"dz-message\">\n                                    <div class=\"drag-icon-cph\"> <i class=\"material-icons\">touch_app</i> </div>\n                                </div>\n                                <dropzone style=\"width: 100%;\" [config]=\"config\" [message]=\"'<em>Drop files here or click to upload.</em>'\"></dropzone>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-danger btn-round waves-effect\">儲存</button>\n                <button type=\"button\" class=\"btn btn-default btn-simple btn-round waves-effect\" data-dismiss=\"modal\">取消</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"groupModal\" tabindex=\"-1\" role=\"dialog\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content bg-light\">\n            <div class=\"modal-header\">\n                <h4 class=\"title\">選擇群組</h4>\n            </div>\n            <div class=\"modal-body\">\n                <select class=\"form-control\">\n                    <option value=\"10\">游泳隊1</option>\n                    <option value=\"20\">游泳隊2</option>\n                    <option value=\"30\">田徑隊1</option>\n                    <option value=\"40\">田徑隊2</option>\n                </select>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-default btn-round waves-effect\">確定</button>\n                <button type=\"button\" class=\"btn btn-default btn-simple btn-round waves-effect\" data-dismiss=\"modal\">取消</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"deviceModal\" tabindex=\"-1\" role=\"dialog\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content bg-light\">\n            <div class=\"modal-header\">\n                <h4 class=\"title\">選擇手環</h4>\n            </div>\n            <div class=\"modal-body\">\n                <select class=\"form-control\">\n                    <option value=\"10\">xxxx</option>\n                    <option value=\"20\">oooo</option>\n                    <option value=\"30\">aaaa</option>\n                    <option value=\"40\">cccc</option>\n                </select>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-default btn-round waves-effect\">確定</button>\n                <button type=\"button\" class=\"btn btn-default btn-simple btn-round waves-effect\" data-dismiss=\"modal\">取消</button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UsersComponent = /** @class */ (function () {
    function UsersComponent() {
        this.config = {
            url: 'https://httpbin.org/post',
            maxFiles: 10,
            clickable: true,
            uploadMultiple: true,
            acceptedFiles: 'image/*',
            createImageThumbnails: true
        };
    }
    UsersComponent.prototype.ngOnInit = function () {
        $(function () {
            $('.btn-delete').on('click', function () {
                showCancelMessage();
            });
        });
        function showCancelMessage() {
            swal({
                title: 'Are you sure?',
                text: 'You will not be able to recover this imaginary file!',
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#DD6B55',
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No, cancel plx!',
                closeOnConfirm: false,
                closeOnCancel: false
            }, function (isConfirm) {
                if (isConfirm) {
                    swal('Deleted!', 'Your imaginary file has been deleted.', 'success');
                }
                else {
                    swal('Cancelled', 'Your imaginary file is safe :)', 'error');
                }
            });
        }
    };
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-users',
            template: __webpack_require__("../../../../../src/app/pages/users/users.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/users/users.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map