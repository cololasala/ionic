"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{2475:(M,p,m)=>{m.d(p,{c:()=>c});var u=m(7936),w=m(7683),a=m(3139);const c=(s,n)=>{let t,e;const r=(l,f,g)=>{if(typeof document>"u")return;const _=document.elementFromPoint(l,f);_&&n(_)?_!==t&&(h(),i(_,g)):h()},i=(l,f)=>{t=l,e||(e=t);const g=t;(0,u.c)(()=>g.classList.add("ion-activated")),f()},h=(l=!1)=>{if(!t)return;const f=t;(0,u.c)(()=>f.classList.remove("ion-activated")),l&&e!==t&&t.click(),t=void 0};return(0,a.createGesture)({el:s,gestureName:"buttonActiveDrag",threshold:0,onStart:l=>r(l.currentX,l.currentY,w.a),onMove:l=>r(l.currentX,l.currentY,w.b),onEnd:()=>{h(!0),(0,w.h)(),e=void 0}})}},8685:(M,p,m)=>{m.d(p,{g:()=>u});const u=(n,t,e,r,i)=>a(n[1],t[1],e[1],r[1],i).map(h=>w(n[0],t[0],e[0],r[0],h)),w=(n,t,e,r,i)=>i*(3*t*Math.pow(i-1,2)+i*(-3*e*i+3*e+r*i))-n*Math.pow(i-1,3),a=(n,t,e,r,i)=>s((r-=i)-3*(e-=i)+3*(t-=i)-(n-=i),3*e-6*t+3*n,3*t-3*n,n).filter(l=>l>=0&&l<=1),s=(n,t,e,r)=>{if(0===n)return((n,t,e)=>{const r=t*t-4*n*e;return r<0?[]:[(-t+Math.sqrt(r))/(2*n),(-t-Math.sqrt(r))/(2*n)]})(t,e,r);const i=(3*(e/=n)-(t/=n)*t)/3,h=(2*t*t*t-9*t*e+27*(r/=n))/27;if(0===i)return[Math.pow(-h,1/3)];if(0===h)return[Math.sqrt(-i),-Math.sqrt(-i)];const l=Math.pow(h/2,2)+Math.pow(i/3,3);if(0===l)return[Math.pow(h/2,.5)-t/3];if(l>0)return[Math.pow(-h/2+Math.sqrt(l),1/3)-Math.pow(h/2+Math.sqrt(l),1/3)-t/3];const f=Math.sqrt(Math.pow(-i/3,3)),g=Math.acos(-h/(2*Math.sqrt(Math.pow(-i/3,3)))),_=2*Math.pow(f,1/3);return[_*Math.cos(g/3)-t/3,_*Math.cos((g+2*Math.PI)/3)-t/3,_*Math.cos((g+4*Math.PI)/3)-t/3]}},5062:(M,p,m)=>{m.d(p,{i:()=>u});const u=w=>w&&""!==w.dir?"rtl"===w.dir.toLowerCase():"rtl"===document?.dir.toLowerCase()},1112:(M,p,m)=>{m.r(p),m.d(p,{startFocusVisible:()=>c});const u="ion-focused",a=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],c=s=>{let n=[],t=!0;const e=s?s.shadowRoot:document,r=s||document.body,i=E=>{n.forEach(d=>d.classList.remove(u)),E.forEach(d=>d.classList.add(u)),n=E},h=()=>{t=!1,i([])},l=E=>{t=a.includes(E.key),t||i([])},f=E=>{if(t&&E.composedPath){const d=E.composedPath().filter(v=>!!v.classList&&v.classList.contains("ion-focusable"));i(d)}},g=()=>{e.activeElement===r&&i([])};return e.addEventListener("keydown",l),e.addEventListener("focusin",f),e.addEventListener("focusout",g),e.addEventListener("touchstart",h),e.addEventListener("mousedown",h),{destroy:()=>{e.removeEventListener("keydown",l),e.removeEventListener("focusin",f),e.removeEventListener("focusout",g),e.removeEventListener("touchstart",h),e.removeEventListener("mousedown",h)},setFocus:i}}},2073:(M,p,m)=>{m.d(p,{C:()=>s,a:()=>a,d:()=>c});var u=m(5861),w=m(1217);const a=function(){var n=(0,u.Z)(function*(t,e,r,i,h,l){var f;if(t)return t.attachViewToDom(e,r,h,i);if(!(l||"string"==typeof r||r instanceof HTMLElement))throw new Error("framework delegate is missing");const g="string"==typeof r?null===(f=e.ownerDocument)||void 0===f?void 0:f.createElement(r):r;return i&&i.forEach(_=>g.classList.add(_)),h&&Object.assign(g,h),e.appendChild(g),yield new Promise(_=>(0,w.c)(g,_)),g});return function(e,r,i,h,l,f){return n.apply(this,arguments)}}(),c=(n,t)=>{if(t){if(n)return n.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()},s=()=>{let n,t;return{attachViewToDom:function(){var i=(0,u.Z)(function*(h,l,f={},g=[]){var _,E;if(n=h,l){const v="string"==typeof l?null===(_=n.ownerDocument)||void 0===_?void 0:_.createElement(l):l;g.forEach(o=>v.classList.add(o)),Object.assign(v,f),n.appendChild(v),yield new Promise(o=>(0,w.c)(v,o))}else if(n.children.length>0){const v=null===(E=n.ownerDocument)||void 0===E?void 0:E.createElement("div");g.forEach(o=>v.classList.add(o)),v.append(...n.children),n.appendChild(v)}const d=document.querySelector("ion-app")||document.body;return t=document.createComment("ionic teleport"),n.parentNode.insertBefore(t,n),d.appendChild(n),n});return function(l,f){return i.apply(this,arguments)}}(),removeViewFromDom:()=>(n&&t&&(t.parentNode.insertBefore(n,t),t.remove()),Promise.resolve())}}},7683:(M,p,m)=>{m.d(p,{a:()=>a,b:()=>c,c:()=>w,d:()=>n,h:()=>s});const u={getEngine(){var t;const e=window;return e.TapticEngine||(null===(t=e.Capacitor)||void 0===t?void 0:t.isPluginAvailable("Haptics"))&&e.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const r=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:r})},notification(t){const e=this.getEngine();if(!e)return;const r=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:r})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();!t||(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},w=()=>{u.selection()},a=()=>{u.selectionStart()},c=()=>{u.selectionChanged()},s=()=>{u.selectionEnd()},n=t=>{u.impact(t)}},3457:(M,p,m)=>{m.d(p,{w:()=>u});const u=typeof window<"u"?window:void 0},3938:(M,p,m)=>{m.d(p,{a:()=>u,b:()=>l,c:()=>t,d:()=>f,e:()=>D,f:()=>n,g:()=>g,h:()=>a,i:()=>w,j:()=>o,k:()=>y,l:()=>e,m:()=>i,n:()=>_,o:()=>r,p:()=>s,q:()=>c,r:()=>v,s:()=>C,t:()=>h,u:()=>E,v:()=>d});const u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Back</title><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Back</title><path d='M368 64L144 256l224 192V64z'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Checkmark</title><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close Circle</title><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipse</title><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Remove</title><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Three</title><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Two</title><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",D="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},1880:(M,p,m)=>{m.d(p,{I:()=>s,a:()=>i,b:()=>n,c:()=>f,d:()=>_,f:()=>h,g:()=>r,i:()=>e,p:()=>g,r:()=>E,s:()=>l});var u=m(5861),w=m(1217),a=m(4147);const s="ion-content",n=".ion-content-scroll-host",t=`${s}, ${n}`,e=d=>d&&"ION-CONTENT"===d.tagName,r=function(){var d=(0,u.Z)(function*(v){return e(v)?(yield new Promise(o=>(0,w.c)(v,o)),v.getScrollElement()):v});return function(o){return d.apply(this,arguments)}}(),i=d=>d.querySelector(n)||d.querySelector(t),h=d=>d.closest(t),l=(d,v)=>e(d)?d.scrollToTop(v):Promise.resolve(d.scrollTo({top:0,left:0,behavior:v>0?"smooth":"auto"})),f=(d,v,o,y)=>e(d)?d.scrollByPoint(v,o,y):Promise.resolve(d.scrollBy({top:o,left:v,behavior:y>0?"smooth":"auto"})),g=d=>(0,a.a)(d,s),_=d=>{if(e(d)){const o=d.scrollY;return d.scrollY=!1,o}return d.style.setProperty("overflow","hidden"),!0},E=(d,v)=>{e(d)?d.scrollY=v:d.style.removeProperty("overflow")}},8439:(M,p,m)=>{m.d(p,{s:()=>u});const u=e=>{try{if(e instanceof class t{constructor(r){this.value=r}})return e.value;if(!c()||"string"!=typeof e||""===e)return e;const r=document.createDocumentFragment(),i=document.createElement("div");r.appendChild(i),i.innerHTML=e,n.forEach(g=>{const _=r.querySelectorAll(g);for(let E=_.length-1;E>=0;E--){const d=_[E];d.parentNode?d.parentNode.removeChild(d):r.removeChild(d);const v=a(d);for(let o=0;o<v.length;o++)w(v[o])}});const h=a(r);for(let g=0;g<h.length;g++)w(h[g]);const l=document.createElement("div");l.appendChild(r);const f=l.querySelector("div");return null!==f?f.innerHTML:l.innerHTML}catch(r){return console.error(r),""}},w=e=>{if(e.nodeType&&1!==e.nodeType)return;for(let i=e.attributes.length-1;i>=0;i--){const h=e.attributes.item(i),l=h.name;if(!s.includes(l.toLowerCase())){e.removeAttribute(l);continue}const f=h.value;null!=f&&f.toLowerCase().includes("javascript:")&&e.removeAttribute(l)}const r=a(e);for(let i=0;i<r.length;i++)w(r[i])},a=e=>null!=e.children?e.children:e.childNodes,c=()=>{var e;const i=null===(e=window?.Ionic)||void 0===e?void 0:e.config;return!i||(i.get?i.get("sanitizerEnabled",!0):!0===i.sanitizerEnabled||void 0===i.sanitizerEnabled)},s=["class","id","href","src","name","slot"],n=["script","style","iframe","meta","link","object","embed"]},1316:(M,p,m)=>{m.r(p),m.d(p,{KEYBOARD_DID_CLOSE:()=>w,KEYBOARD_DID_OPEN:()=>u,copyVisualViewport:()=>v,keyboardDidClose:()=>g,keyboardDidOpen:()=>l,keyboardDidResize:()=>f,resetKeyboardAssist:()=>t,setKeyboardClose:()=>h,setKeyboardOpen:()=>i,startKeyboardAssist:()=>e,trackViewportChanges:()=>d});const u="ionKeyboardDidShow",w="ionKeyboardDidHide";let c={},s={},n=!1;const t=()=>{c={},s={},n=!1},e=o=>{r(o),o.visualViewport&&(s=v(o.visualViewport),o.visualViewport.onresize=()=>{d(o),l()||f(o)?i(o):g(o)&&h(o)})},r=o=>{o.addEventListener("keyboardDidShow",y=>i(o,y)),o.addEventListener("keyboardDidHide",()=>h(o))},i=(o,y)=>{_(o,y),n=!0},h=o=>{E(o),n=!1},l=()=>!n&&c.width===s.width&&(c.height-s.height)*s.scale>150,f=o=>n&&!g(o),g=o=>n&&s.height===o.innerHeight,_=(o,y)=>{const D=new CustomEvent(u,{detail:{keyboardHeight:y?y.keyboardHeight:o.innerHeight-s.height}});o.dispatchEvent(D)},E=o=>{const y=new CustomEvent(w);o.dispatchEvent(y)},d=o=>{c=Object.assign({},s),s=v(o.visualViewport)},v=o=>({width:Math.round(o.width),height:Math.round(o.height),offsetTop:o.offsetTop,offsetLeft:o.offsetLeft,pageTop:o.pageTop,pageLeft:o.pageLeft,scale:o.scale})},9852:(M,p,m)=>{m.d(p,{c:()=>w});var u=m(3457);const w=a=>{let c,s,n;const t=()=>{c=()=>{n=!0,a&&a(!0)},s=()=>{n=!1,a&&a(!1)},null==u.w||u.w.addEventListener("keyboardWillShow",c),null==u.w||u.w.addEventListener("keyboardWillHide",s)};return t(),{init:t,destroy:()=>{null==u.w||u.w.removeEventListener("keyboardWillShow",c),null==u.w||u.w.removeEventListener("keyboardWillHide",s),c=s=void 0},isKeyboardVisible:()=>n}}},7741:(M,p,m)=>{m.d(p,{S:()=>w});const w={bubbles:{dur:1e3,circles:9,fn:(a,c,s)=>{const n=a*c/s-a+"ms",t=2*Math.PI*c/s;return{r:5,style:{top:9*Math.sin(t)+"px",left:9*Math.cos(t)+"px","animation-delay":n}}}},circles:{dur:1e3,circles:8,fn:(a,c,s)=>{const n=c/s,t=a*n-a+"ms",e=2*Math.PI*n;return{r:5,style:{top:9*Math.sin(e)+"px",left:9*Math.cos(e)+"px","animation-delay":t}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(a,c)=>({r:6,style:{left:9-9*c+"px","animation-delay":-110*c+"ms"}})},lines:{dur:1e3,lines:8,fn:(a,c,s)=>({y1:14,y2:26,style:{transform:`rotate(${360/s*c+(c<s/2?180:-180)}deg)`,"animation-delay":a*c/s-a+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(a,c,s)=>({y1:12,y2:20,style:{transform:`rotate(${360/s*c+(c<s/2?180:-180)}deg)`,"animation-delay":a*c/s-a+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(a,c,s)=>({y1:17,y2:29,style:{transform:`rotate(${30*c+(c<6?180:-180)}deg)`,"animation-delay":a*c/s-a+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(a,c,s)=>({y1:12,y2:20,style:{transform:`rotate(${30*c+(c<6?180:-180)}deg)`,"animation-delay":a*c/s-a+"ms"}})}}},253:(M,p,m)=>{m.r(p),m.d(p,{createSwipeBackGesture:()=>s});var u=m(1217),w=m(5062),a=m(3139);m(3509);const s=(n,t,e,r,i)=>{const h=n.ownerDocument.defaultView,l=(0,w.i)(n),g=o=>l?-o.deltaX:o.deltaX;return(0,a.createGesture)({el:n,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:o=>(o=>{const{startX:C}=o;return l?C>=h.innerWidth-50:C<=50})(o)&&t(),onStart:e,onMove:o=>{const C=g(o)/h.innerWidth;r(C)},onEnd:o=>{const y=g(o),C=h.innerWidth,D=y/C,k=(o=>l?-o.velocityX:o.velocityX)(o),x=k>=0&&(k>.2||y>C/2),b=(x?1-D:D)*C;let L=0;if(b>5){const T=b/Math.abs(k);L=Math.min(T,540)}i(x,D<=0?.01:(0,u.l)(0,D,.9999),L)}})}},4395:(M,p,m)=>{m.d(p,{E:()=>w});var u=m(6738);let w=(()=>{class a{constructor(){this.places=[{id:"1",title:"Tower eiffel",imageUrl:"https://lh3.googleusercontent.com/4M4aeaq4LQwNoL7BkfnGD_BDQCUuVA2JWYXqEtuRbTnMK1kVgJcbE1KcPjHo-fDPHg",comments:["wonderful place","awesome place"]},{id:"2",title:"Status liberty",imageUrl:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/ba/d3/e8/statue-of-liberty_rotated_90.jpg?w=1200&h=-1&s=1",comments:["wonderful place","awesome place"]},{id:"3",title:"Machu picchu",imageUrl:"http://c.files.bbci.co.uk/E02E/production/_102809375_machu.jpg",comments:[]}]}getPlaces(){return[...this.places]}getPlace(s){return{...this.places.find(n=>n.id===s)}}addPlace(s,n){this.places.push({id:String(this.places.length+1),title:s,imageUrl:n,comments:[]})}removePlace(s){this.places=this.places.filter(n=>n.id!==s)}}return a.\u0275fac=function(s){return new(s||a)},a.\u0275prov=u.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()}}]);