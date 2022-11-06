"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_places_place-detail_place-detail_module_ts"],{

/***/ 6212:
/*!********************************************************************!*\
  !*** ./src/app/places/place-detail/place-detail-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaceDetailPageRoutingModule": () => (/* binding */ PlaceDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _place_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./place-detail.page */ 5988);




const routes = [
    {
        path: '',
        component: _place_detail_page__WEBPACK_IMPORTED_MODULE_0__.PlaceDetailPage
    }
];
let PlaceDetailPageRoutingModule = class PlaceDetailPageRoutingModule {
};
PlaceDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PlaceDetailPageRoutingModule);



/***/ }),

/***/ 2996:
/*!************************************************************!*\
  !*** ./src/app/places/place-detail/place-detail.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaceDetailPageModule": () => (/* binding */ PlaceDetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _place_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./place-detail-routing.module */ 6212);
/* harmony import */ var _place_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./place-detail.page */ 5988);







let PlaceDetailPageModule = class PlaceDetailPageModule {
};
PlaceDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _place_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.PlaceDetailPageRoutingModule
        ],
        declarations: [_place_detail_page__WEBPACK_IMPORTED_MODULE_1__.PlaceDetailPage]
    })
], PlaceDetailPageModule);



/***/ }),

/***/ 5988:
/*!**********************************************************!*\
  !*** ./src/app/places/place-detail/place-detail.page.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaceDetailPage": () => (/* binding */ PlaceDetailPage)
/* harmony export */ });
/* harmony import */ var C_Users_lucia_Desktop_Ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _place_detail_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./place-detail.page.html?ngResource */ 3698);
/* harmony import */ var _place_detail_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./place-detail.page.scss?ngResource */ 1899);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../places.service */ 4395);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);








let PlaceDetailPage = class PlaceDetailPage {
  constructor(activatedRoute, placesService, router, alert) {
    this.activatedRoute = activatedRoute;
    this.placesService = placesService;
    this.router = router;
    this.alert = alert;
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const placeId = paramMap.get('id');
      this.place = this.placesService.getPlace(placeId);
    });
  }

  removePlace() {
    var _this = this;

    return (0,C_Users_lucia_Desktop_Ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alertElement = yield _this.alert.create({
        header: 'Delete place',
        message: 'Are you sure you want to delete it?',
        buttons: [{
          text: 'Cancel',
          role: 'cancel'
        }, {
          text: 'Delete',
          role: 'delete',
          handler: () => {
            _this.placesService.removePlace(_this.place.id);

            _this.router.navigate(['/places']);
          }
        }]
      });
      alertElement.present(); // muestra el alert
    })();
  }

};

PlaceDetailPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
}, {
  type: _places_service__WEBPACK_IMPORTED_MODULE_3__.PlacesService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController
}];

PlaceDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-place-detail',
  template: _place_detail_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_place_detail_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], PlaceDetailPage);


/***/ }),

/***/ 1899:
/*!***********************************************************************!*\
  !*** ./src/app/places/place-detail/place-detail.page.scss?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwbGFjZS1kZXRhaWwucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 3698:
/*!***********************************************************************!*\
  !*** ./src/app/places/place-detail/place-detail.page.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-button slot=\"start\" color=\"secondary\"> <!-- slot permite alinear el boton -->\n      <ion-back-button  defaultHref=\"/places\">\n        Go back\n      </ion-back-button>\n    </ion-button>\n    <ion-title>{{ place.title }}</ion-title>\n    <ion-button class=\"button\" slot=\"end\" color=\"danger\" (click)=\"removePlace()\"><ion-icon name=\"trash-outline\"></ion-icon></ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"ion-no-padding\"> <!-- Ionic esta fuertemente basado en Bootstrap -->\n    <ion-row>\n      <ion-col class=\"ion-no-padding\">\n        <img [src]=\"place.imageUrl\" alt=\"\">\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <h1 class=\"ion-text-center\">{{ place.title }}</h1>\n      </ion-col>\n    </ion-row>\n    <ion-row >\n      <ion-col>\n        <ng-container *ngIf=\"place.comments.length; else noComments\">\n          <ion-list>\n            <ion-item *ngFor=\"let comment of place.comments\">\n              {{ comment }}\n            </ion-item>\n          </ion-list>\n        </ng-container>\n        <ng-template #noComments>\n          <p class=\"ion-text-center\">No comments yet.</p>\n        </ng-template> \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_places_place-detail_place-detail_module_ts.js.map