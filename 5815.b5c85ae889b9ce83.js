"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5815],{5815:(T,u,c)=>{c.r(u),c.d(u,{PlaceDetailPageModule:()=>v});var s=c(6895),g=c(4719),n=c(5616),i=c(6069),p=c(5861),e=c(6738),m=c(4395);function d(t,o){if(1&t&&(e.TgZ(0,"ion-item"),e._uU(1),e.qZA()),2&t){const a=o.$implicit;e.xp6(1),e.hij(" ",a," ")}}function P(t,o){if(1&t&&(e.ynx(0),e.TgZ(1,"ion-list"),e.YNc(2,d,2,1,"ion-item",10),e.qZA(),e.BQk()),2&t){const a=e.oxw();e.xp6(2),e.Q6J("ngForOf",a.place.comments)}}function f(t,o){1&t&&(e.TgZ(0,"p",7),e._uU(1,"No comments yet."),e.qZA())}const h=[{path:"",component:(()=>{class t{constructor(a,l,r,D){this.activatedRoute=a,this.placesService=l,this.router=r,this.alert=D}ngOnInit(){this.activatedRoute.paramMap.subscribe(a=>{const l=a.get("id");this.place=this.placesService.getPlace(l)})}removePlace(){var a=this;return(0,p.Z)(function*(){(yield a.alert.create({header:"Delete place",message:"Are you sure you want to delete it?",buttons:[{text:"Cancel",role:"cancel"},{text:"Delete",role:"delete",handler:()=>{a.placesService.removePlace(a.place.id),a.router.navigate(["/places"])}}]})).present()})()}}return t.\u0275fac=function(a){return new(a||t)(e.Y36(i.gz),e.Y36(m.E),e.Y36(i.F0),e.Y36(n.Br))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-place-detail"]],decls:23,vars:5,consts:[["color","primary"],["slot","start","color","secondary"],["defaultHref","/places"],["slot","end","color","danger",1,"button",3,"click"],["name","trash-outline"],[1,"ion-no-padding"],["alt","",3,"src"],[1,"ion-text-center"],[4,"ngIf","ngIfElse"],["noComments",""],[4,"ngFor","ngForOf"]],template:function(a,l){if(1&a&&(e.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-button",1)(3,"ion-back-button",2),e._uU(4," Go back "),e.qZA()(),e.TgZ(5,"ion-title"),e._uU(6),e.qZA(),e.TgZ(7,"ion-button",3),e.NdJ("click",function(){return l.removePlace()}),e._UZ(8,"ion-icon",4),e.qZA()()(),e.TgZ(9,"ion-content")(10,"ion-grid",5)(11,"ion-row")(12,"ion-col",5),e._UZ(13,"img",6),e.qZA()(),e.TgZ(14,"ion-row")(15,"ion-col")(16,"h1",7),e._uU(17),e.qZA()()(),e.TgZ(18,"ion-row")(19,"ion-col"),e.YNc(20,P,3,1,"ng-container",8),e.YNc(21,f,2,0,"ng-template",null,9,e.W1O),e.qZA()()()()),2&a){const r=e.MAs(22);e.xp6(6),e.Oqu(l.place.title),e.xp6(7),e.Q6J("src",l.place.imageUrl,e.LSH),e.xp6(4),e.Oqu(l.place.title),e.xp6(3),e.Q6J("ngIf",l.place.comments.length)("ngIfElse",r)}},dependencies:[s.sg,s.O5,n.oU,n.YG,n.wI,n.W2,n.jY,n.Gu,n.gu,n.Ie,n.q_,n.Nd,n.wd,n.sr,n.cs]}),t})()}];let Z=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[i.Bz.forChild(h),i.Bz]}),t})(),v=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[s.ez,g.u5,n.Pc,Z]}),t})()}}]);