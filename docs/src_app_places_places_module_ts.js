"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_places_places_module_ts"],{

/***/ 3417:
/*!*************************************************!*\
  !*** ./src/app/places/places-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlacesPageRoutingModule": () => (/* binding */ PlacesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _places_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./places.page */ 714);




const routes = [
    {
        path: '',
        component: _places_page__WEBPACK_IMPORTED_MODULE_0__.PlacesPage
    },
];
let PlacesPageRoutingModule = class PlacesPageRoutingModule {
};
PlacesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PlacesPageRoutingModule);



/***/ }),

/***/ 6023:
/*!*****************************************!*\
  !*** ./src/app/places/places.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlacesPageModule": () => (/* binding */ PlacesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _places_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./places-routing.module */ 3417);
/* harmony import */ var _places_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./places.page */ 714);







let PlacesPageModule = class PlacesPageModule {
};
PlacesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _places_routing_module__WEBPACK_IMPORTED_MODULE_0__.PlacesPageRoutingModule
        ],
        declarations: [_places_page__WEBPACK_IMPORTED_MODULE_1__.PlacesPage]
    })
], PlacesPageModule);



/***/ }),

/***/ 714:
/*!***************************************!*\
  !*** ./src/app/places/places.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlacesPage": () => (/* binding */ PlacesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _places_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./places.page.html?ngResource */ 7498);
/* harmony import */ var _places_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./places.page.scss?ngResource */ 5009);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./places.service */ 4395);






let PlacesPage = class PlacesPage {
    constructor(placesService, router) {
        this.placesService = placesService;
        this.router = router;
        this.places = [];
    }
    ngOnInit() {
        this.places = this.placesService.getPlaces();
    }
    ionViewWillEnter() {
        this.places = this.placesService.getPlaces();
    }
    goToAddPlace() {
        this.router.navigate(['/new-place']);
    }
    goToHome() {
        this.router.navigate(['/home']);
    }
};
PlacesPage.ctorParameters = () => [
    { type: _places_service__WEBPACK_IMPORTED_MODULE_2__.PlacesService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
PlacesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-places',
        template: _places_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_places_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PlacesPage);



/***/ }),

/***/ 5009:
/*!****************************************************!*\
  !*** ./src/app/places/places.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwbGFjZXMucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 7498:
/*!****************************************************!*\
  !*** ./src/app/places/places.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Places</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"goToHome()\">\n        <ion-icon name=\"globe\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let place of places\" [routerLink]=\"['/places', place.id]\">\n      <ion-avatar slot=\"start\">\n        <ion-img [src]=\"place.imageUrl\">\n        </ion-img>\n      </ion-avatar>\n      <ion-label>\n        {{ place.title }}\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"goToAddPlace()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_places_places_module_ts.js.map