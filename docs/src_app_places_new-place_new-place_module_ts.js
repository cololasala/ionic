"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_places_new-place_new-place_module_ts"],{

/***/ 5680:
/*!**************************************************************!*\
  !*** ./src/app/places/new-place/new-place-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewPlacePageRoutingModule": () => (/* binding */ NewPlacePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _new_place_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-place.page */ 6178);




const routes = [
    {
        path: '',
        component: _new_place_page__WEBPACK_IMPORTED_MODULE_0__.NewPlacePage
    }
];
let NewPlacePageRoutingModule = class NewPlacePageRoutingModule {
};
NewPlacePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NewPlacePageRoutingModule);



/***/ }),

/***/ 7412:
/*!******************************************************!*\
  !*** ./src/app/places/new-place/new-place.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewPlacePageModule": () => (/* binding */ NewPlacePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _new_place_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-place-routing.module */ 5680);
/* harmony import */ var _new_place_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-place.page */ 6178);







let NewPlacePageModule = class NewPlacePageModule {
};
NewPlacePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _new_place_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewPlacePageRoutingModule
        ],
        declarations: [_new_place_page__WEBPACK_IMPORTED_MODULE_1__.NewPlacePage]
    })
], NewPlacePageModule);



/***/ }),

/***/ 6178:
/*!****************************************************!*\
  !*** ./src/app/places/new-place/new-place.page.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewPlacePage": () => (/* binding */ NewPlacePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _new_place_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-place.page.html?ngResource */ 8197);
/* harmony import */ var _new_place_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-place.page.scss?ngResource */ 5788);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../places.service */ 4395);






let NewPlacePage = class NewPlacePage {
    constructor(placesService, router) {
        this.placesService = placesService;
        this.router = router;
    }
    saveNewPlace(title, imageUrl) {
        this.placesService.addPlace(title, imageUrl);
        this.router.navigate(['/places']);
    }
};
NewPlacePage.ctorParameters = () => [
    { type: _places_service__WEBPACK_IMPORTED_MODULE_2__.PlacesService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
NewPlacePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-new-place',
        template: _new_place_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_new_place_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NewPlacePage);



/***/ }),

/***/ 5788:
/*!*****************************************************************!*\
  !*** ./src/app/places/new-place/new-place.page.scss?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXctcGxhY2UucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 8197:
/*!*****************************************************************!*\
  !*** ./src/app/places/new-place/new-place.page.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-button color=\"secondary\" slot=\"start\"> <!-- slot permite alinear el boton -->\n      <ion-back-button defaultHref=\"/places\">\n        Go back\n      </ion-back-button>\n    </ion-button>\n    <ion-title>new-place</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col>\n      <ion-card>\n        <ion-card-content>\n          <ion-input #title type=\"text\" placeholder=\"Write a title\"></ion-input>\n          <ion-input #imageUrl type=\"text\" placeholder=\"Url image\"></ion-input>\n          <ion-button color=\"success\" (click)=\"saveNewPlace(title.value, imageUrl.value)\">\n            <ion-icon name=\"save-outline\"></ion-icon>\n          </ion-button>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_places_new-place_new-place_module_ts.js.map