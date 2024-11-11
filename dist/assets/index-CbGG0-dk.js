const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FaqView-CaAXGsns.js","assets/FaqView-DFP3CnGp.css","assets/EditFaqView-C4spIxJS.js","assets/EditFaqView-CdarxbaD.css","assets/AboutView-DLS80IO9.js","assets/AboutView-CTwSeMp2.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Fl(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ce={},us=[],At=()=>{},Um=()=>!1,go=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),$l=t=>t.startsWith("onUpdate:"),Ae=Object.assign,Ul=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Bm=Object.prototype.hasOwnProperty,se=(t,e)=>Bm.call(t,e),W=Array.isArray,hs=t=>jr(t)==="[object Map]",_o=t=>jr(t)==="[object Set]",pu=t=>jr(t)==="[object Date]",K=t=>typeof t=="function",be=t=>typeof t=="string",kt=t=>typeof t=="symbol",pe=t=>t!==null&&typeof t=="object",hf=t=>(pe(t)||K(t))&&K(t.then)&&K(t.catch),df=Object.prototype.toString,jr=t=>df.call(t),Hm=t=>jr(t).slice(8,-1),ff=t=>jr(t)==="[object Object]",Bl=t=>be(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,or=Fl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),mo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},jm=/-(\w)/g,at=mo(t=>t.replace(jm,(e,n)=>n?n.toUpperCase():"")),Wm=/\B([A-Z])/g,Tn=mo(t=>t.replace(Wm,"-$1").toLowerCase()),yo=mo(t=>t.charAt(0).toUpperCase()+t.slice(1)),sa=mo(t=>t?`on${yo(t)}`:""),_n=(t,e)=>!Object.is(t,e),yi=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},pf=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},$a=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let gu;const vo=()=>gu||(gu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Hl(t){if(W(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=be(s)?Gm(s):Hl(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(be(t)||pe(t))return t}const Vm=/;(?![^(]*\))/g,qm=/:([^]+)/,Km=/\/\*[^]*?\*\//g;function Gm(t){const e={};return t.replace(Km,"").split(Vm).forEach(n=>{if(n){const s=n.split(qm);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Vn(t){let e="";if(be(t))e=t;else if(W(t))for(let n=0;n<t.length;n++){const s=Vn(t[n]);s&&(e+=s+" ")}else if(pe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const zm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ym=Fl(zm);function gf(t){return!!t||t===""}function Jm(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=bo(t[s],e[s]);return n}function bo(t,e){if(t===e)return!0;let n=pu(t),s=pu(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=kt(t),s=kt(e),n||s)return t===e;if(n=W(t),s=W(e),n||s)return n&&s?Jm(t,e):!1;if(n=pe(t),s=pe(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!bo(t[o],e[o]))return!1}}return String(t)===String(e)}function _f(t,e){return t.findIndex(n=>bo(n,e))}const mf=t=>!!(t&&t.__v_isRef===!0),Ua=t=>be(t)?t:t==null?"":W(t)||pe(t)&&(t.toString===df||!K(t.toString))?mf(t)?Ua(t.value):JSON.stringify(t,yf,2):String(t),yf=(t,e)=>mf(e)?yf(t,e.value):hs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],i)=>(n[ra(s,i)+" =>"]=r,n),{})}:_o(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>ra(n))}:kt(e)?ra(e):pe(e)&&!W(e)&&!ff(e)?String(e):e,ra=(t,e="")=>{var n;return kt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let et;class vf{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=et,!e&&et&&(this.index=(et.scopes||(et.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=et;try{return et=this,e()}finally{et=n}}}on(){et=this}off(){et=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Qm(t){return new vf(t)}function Xm(){return et}let de;const ia=new WeakSet;class bf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,et&&et.active&&et.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ia.has(this)&&(ia.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||wf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,_u(this),Cf(this);const e=de,n=gt;de=this,gt=!0;try{return this.fn()}finally{Sf(this),de=e,gt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Vl(e);this.deps=this.depsTail=void 0,_u(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ia.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ba(this)&&this.run()}get dirty(){return Ba(this)}}let Ef=0,ar,lr;function wf(t,e=!1){if(t.flags|=8,e){t.next=lr,lr=t;return}t.next=ar,ar=t}function jl(){Ef++}function Wl(){if(--Ef>0)return;if(lr){let e=lr;for(lr=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;ar;){let e=ar;for(ar=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Cf(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Sf(t){let e,n=t.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),Vl(s),Zm(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}t.deps=e,t.depsTail=n}function Ba(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Tf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Tf(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Er))return;t.globalVersion=Er;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Ba(t)){t.flags&=-3;return}const n=de,s=gt;de=t,gt=!0;try{Cf(t);const r=t.fn(t._value);(e.version===0||_n(r,t._value))&&(t._value=r,e.version++)}catch(r){throw e.version++,r}finally{de=n,gt=s,Sf(t),t.flags&=-3}}function Vl(t,e=!1){const{dep:n,prevSub:s,nextSub:r}=t;if(s&&(s.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Vl(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Zm(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let gt=!0;const If=[];function In(){If.push(gt),gt=!1}function Rn(){const t=If.pop();gt=t===void 0?!0:t}function _u(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=de;de=void 0;try{e()}finally{de=n}}}let Er=0;class ey{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ql{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!de||!gt||de===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==de)n=this.activeLink=new ey(de,this),de.deps?(n.prevDep=de.depsTail,de.depsTail.nextDep=n,de.depsTail=n):de.deps=de.depsTail=n,Rf(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=de.depsTail,n.nextDep=void 0,de.depsTail.nextDep=n,de.depsTail=n,de.deps===n&&(de.deps=s)}return n}trigger(e){this.version++,Er++,this.notify(e)}notify(e){jl();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Wl()}}}function Rf(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Rf(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ha=new WeakMap,jn=Symbol(""),ja=Symbol(""),wr=Symbol("");function ke(t,e,n){if(gt&&de){let s=Ha.get(t);s||Ha.set(t,s=new Map);let r=s.get(n);r||(s.set(n,r=new ql),r.map=s,r.key=n),r.track()}}function Ut(t,e,n,s,r,i){const o=Ha.get(t);if(!o){Er++;return}const a=l=>{l&&l.trigger()};if(jl(),e==="clear")o.forEach(a);else{const l=W(t),c=l&&Bl(n);if(l&&n==="length"){const u=Number(s);o.forEach((h,d)=>{(d==="length"||d===wr||!kt(d)&&d>=u)&&a(h)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(wr)),e){case"add":l?c&&a(o.get("length")):(a(o.get(jn)),hs(t)&&a(o.get(ja)));break;case"delete":l||(a(o.get(jn)),hs(t)&&a(o.get(ja)));break;case"set":hs(t)&&a(o.get(jn));break}}Wl()}function rs(t){const e=ne(t);return e===t?e:(ke(e,"iterate",wr),ot(t)?e:e.map(xe))}function Eo(t){return ke(t=ne(t),"iterate",wr),t}const ty={__proto__:null,[Symbol.iterator](){return oa(this,Symbol.iterator,xe)},concat(...t){return rs(this).concat(...t.map(e=>W(e)?rs(e):e))},entries(){return oa(this,"entries",t=>(t[1]=xe(t[1]),t))},every(t,e){return Mt(this,"every",t,e,void 0,arguments)},filter(t,e){return Mt(this,"filter",t,e,n=>n.map(xe),arguments)},find(t,e){return Mt(this,"find",t,e,xe,arguments)},findIndex(t,e){return Mt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Mt(this,"findLast",t,e,xe,arguments)},findLastIndex(t,e){return Mt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Mt(this,"forEach",t,e,void 0,arguments)},includes(...t){return aa(this,"includes",t)},indexOf(...t){return aa(this,"indexOf",t)},join(t){return rs(this).join(t)},lastIndexOf(...t){return aa(this,"lastIndexOf",t)},map(t,e){return Mt(this,"map",t,e,void 0,arguments)},pop(){return Gs(this,"pop")},push(...t){return Gs(this,"push",t)},reduce(t,...e){return mu(this,"reduce",t,e)},reduceRight(t,...e){return mu(this,"reduceRight",t,e)},shift(){return Gs(this,"shift")},some(t,e){return Mt(this,"some",t,e,void 0,arguments)},splice(...t){return Gs(this,"splice",t)},toReversed(){return rs(this).toReversed()},toSorted(t){return rs(this).toSorted(t)},toSpliced(...t){return rs(this).toSpliced(...t)},unshift(...t){return Gs(this,"unshift",t)},values(){return oa(this,"values",xe)}};function oa(t,e,n){const s=Eo(t),r=s[e]();return s!==t&&!ot(t)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.value&&(i.value=n(i.value)),i}),r}const ny=Array.prototype;function Mt(t,e,n,s,r,i){const o=Eo(t),a=o!==t&&!ot(t),l=o[e];if(l!==ny[e]){const h=l.apply(t,i);return a?xe(h):h}let c=n;o!==t&&(a?c=function(h,d){return n.call(this,xe(h),d,t)}:n.length>2&&(c=function(h,d){return n.call(this,h,d,t)}));const u=l.call(o,c,s);return a&&r?r(u):u}function mu(t,e,n,s){const r=Eo(t);let i=n;return r!==t&&(ot(t)?n.length>3&&(i=function(o,a,l){return n.call(this,o,a,l,t)}):i=function(o,a,l){return n.call(this,o,xe(a),l,t)}),r[e](i,...s)}function aa(t,e,n){const s=ne(t);ke(s,"iterate",wr);const r=s[e](...n);return(r===-1||r===!1)&&zl(n[0])?(n[0]=ne(n[0]),s[e](...n)):r}function Gs(t,e,n=[]){In(),jl();const s=ne(t)[e].apply(t,n);return Wl(),Rn(),s}const sy=Fl("__proto__,__v_isRef,__isVue"),Af=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(kt));function ry(t){kt(t)||(t=String(t));const e=ne(this);return ke(e,"has",t),e.hasOwnProperty(t)}class Pf{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?py:xf:i?kf:Nf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=W(e);if(!r){let l;if(o&&(l=ty[n]))return l;if(n==="hasOwnProperty")return ry}const a=Reflect.get(e,n,Me(e)?e:s);return(kt(n)?Af.has(n):sy(n))||(r||ke(e,"get",n),i)?a:Me(a)?o&&Bl(n)?a:a.value:pe(a)?r?Lf(a):wo(a):a}}class Of extends Pf{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];if(!this._isShallow){const l=qn(i);if(!ot(s)&&!qn(s)&&(i=ne(i),s=ne(s)),!W(e)&&Me(i)&&!Me(s))return l?!1:(i.value=s,!0)}const o=W(e)&&Bl(n)?Number(n)<e.length:se(e,n),a=Reflect.set(e,n,s,Me(e)?e:r);return e===ne(r)&&(o?_n(s,i)&&Ut(e,"set",n,s):Ut(e,"add",n,s)),a}deleteProperty(e,n){const s=se(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&Ut(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!kt(n)||!Af.has(n))&&ke(e,"has",n),s}ownKeys(e){return ke(e,"iterate",W(e)?"length":jn),Reflect.ownKeys(e)}}class iy extends Pf{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const oy=new Of,ay=new iy,ly=new Of(!0);const Wa=t=>t,li=t=>Reflect.getPrototypeOf(t);function cy(t,e,n){return function(...s){const r=this.__v_raw,i=ne(r),o=hs(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...s),u=n?Wa:e?Va:xe;return!e&&ke(i,"iterate",l?ja:jn),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function ci(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function uy(t,e){const n={get(r){const i=this.__v_raw,o=ne(i),a=ne(r);t||(_n(r,a)&&ke(o,"get",r),ke(o,"get",a));const{has:l}=li(o),c=e?Wa:t?Va:xe;if(l.call(o,r))return c(i.get(r));if(l.call(o,a))return c(i.get(a));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!t&&ke(ne(r),"iterate",jn),Reflect.get(r,"size",r)},has(r){const i=this.__v_raw,o=ne(i),a=ne(r);return t||(_n(r,a)&&ke(o,"has",r),ke(o,"has",a)),r===a?i.has(r):i.has(r)||i.has(a)},forEach(r,i){const o=this,a=o.__v_raw,l=ne(a),c=e?Wa:t?Va:xe;return!t&&ke(l,"iterate",jn),a.forEach((u,h)=>r.call(i,c(u),c(h),o))}};return Ae(n,t?{add:ci("add"),set:ci("set"),delete:ci("delete"),clear:ci("clear")}:{add(r){!e&&!ot(r)&&!qn(r)&&(r=ne(r));const i=ne(this);return li(i).has.call(i,r)||(i.add(r),Ut(i,"add",r,r)),this},set(r,i){!e&&!ot(i)&&!qn(i)&&(i=ne(i));const o=ne(this),{has:a,get:l}=li(o);let c=a.call(o,r);c||(r=ne(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,i),c?_n(i,u)&&Ut(o,"set",r,i):Ut(o,"add",r,i),this},delete(r){const i=ne(this),{has:o,get:a}=li(i);let l=o.call(i,r);l||(r=ne(r),l=o.call(i,r)),a&&a.call(i,r);const c=i.delete(r);return l&&Ut(i,"delete",r,void 0),c},clear(){const r=ne(this),i=r.size!==0,o=r.clear();return i&&Ut(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=cy(r,t,e)}),n}function Kl(t,e){const n=uy(t,e);return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(se(n,r)&&r in s?n:s,r,i)}const hy={get:Kl(!1,!1)},dy={get:Kl(!1,!0)},fy={get:Kl(!0,!1)};const Nf=new WeakMap,kf=new WeakMap,xf=new WeakMap,py=new WeakMap;function gy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function _y(t){return t.__v_skip||!Object.isExtensible(t)?0:gy(Hm(t))}function wo(t){return qn(t)?t:Gl(t,!1,oy,hy,Nf)}function Df(t){return Gl(t,!1,ly,dy,kf)}function Lf(t){return Gl(t,!0,ay,fy,xf)}function Gl(t,e,n,s,r){if(!pe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=_y(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function ds(t){return qn(t)?ds(t.__v_raw):!!(t&&t.__v_isReactive)}function qn(t){return!!(t&&t.__v_isReadonly)}function ot(t){return!!(t&&t.__v_isShallow)}function zl(t){return t?!!t.__v_raw:!1}function ne(t){const e=t&&t.__v_raw;return e?ne(e):t}function Mf(t){return!se(t,"__v_skip")&&Object.isExtensible(t)&&pf(t,"__v_skip",!0),t}const xe=t=>pe(t)?wo(t):t,Va=t=>pe(t)?Lf(t):t;function Me(t){return t?t.__v_isRef===!0:!1}function ct(t){return Ff(t,!1)}function my(t){return Ff(t,!0)}function Ff(t,e){return Me(t)?t:new yy(t,e)}class yy{constructor(e,n){this.dep=new ql,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ne(e),this._value=n?e:xe(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||ot(e)||qn(e);e=s?e:ne(e),_n(e,n)&&(this._rawValue=e,this._value=s?e:xe(e),this.dep.trigger())}}function fs(t){return Me(t)?t.value:t}const vy={get:(t,e,n)=>e==="__v_raw"?t:fs(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Me(r)&&!Me(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function $f(t){return ds(t)?t:new Proxy(t,vy)}class by{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new ql(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Er-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&de!==this)return wf(this,!0),!0}get value(){const e=this.dep.track();return Tf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Ey(t,e,n=!1){let s,r;return K(t)?s=t:(s=t.get,r=t.set),new by(s,r,n)}const ui={},Ni=new WeakMap;let Dn;function wy(t,e=!1,n=Dn){if(n){let s=Ni.get(n);s||Ni.set(n,s=[]),s.push(t)}}function Cy(t,e,n=ce){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:a,call:l}=n,c=k=>r?k:ot(k)||r===!1||r===0?Bt(k,1):Bt(k);let u,h,d,p,_=!1,m=!1;if(Me(t)?(h=()=>t.value,_=ot(t)):ds(t)?(h=()=>c(t),_=!0):W(t)?(m=!0,_=t.some(k=>ds(k)||ot(k)),h=()=>t.map(k=>{if(Me(k))return k.value;if(ds(k))return c(k);if(K(k))return l?l(k,2):k()})):K(t)?e?h=l?()=>l(t,2):t:h=()=>{if(d){In();try{d()}finally{Rn()}}const k=Dn;Dn=u;try{return l?l(t,3,[p]):t(p)}finally{Dn=k}}:h=At,e&&r){const k=h,B=r===!0?1/0:r;h=()=>Bt(k(),B)}const b=Xm(),I=()=>{u.stop(),b&&Ul(b.effects,u)};if(i&&e){const k=e;e=(...B)=>{k(...B),I()}}let R=m?new Array(t.length).fill(ui):ui;const P=k=>{if(!(!(u.flags&1)||!u.dirty&&!k))if(e){const B=u.run();if(r||_||(m?B.some((ee,Q)=>_n(ee,R[Q])):_n(B,R))){d&&d();const ee=Dn;Dn=u;try{const Q=[B,R===ui?void 0:m&&R[0]===ui?[]:R,p];l?l(e,3,Q):e(...Q),R=B}finally{Dn=ee}}}else u.run()};return a&&a(P),u=new bf(h),u.scheduler=o?()=>o(P,!1):P,p=k=>wy(k,!1,u),d=u.onStop=()=>{const k=Ni.get(u);if(k){if(l)l(k,4);else for(const B of k)B();Ni.delete(u)}},e?s?P(!0):R=u.run():o?o(P.bind(null,!0),!0):u.run(),I.pause=u.pause.bind(u),I.resume=u.resume.bind(u),I.stop=I,I}function Bt(t,e=1/0,n){if(e<=0||!pe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Me(t))Bt(t.value,e,n);else if(W(t))for(let s=0;s<t.length;s++)Bt(t[s],e,n);else if(_o(t)||hs(t))t.forEach(s=>{Bt(s,e,n)});else if(ff(t)){for(const s in t)Bt(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&Bt(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Wr(t,e,n,s){try{return s?t(...s):t()}catch(r){Co(r,e,n)}}function xt(t,e,n,s){if(K(t)){const r=Wr(t,e,n,s);return r&&hf(r)&&r.catch(i=>{Co(i,e,n)}),r}if(W(t)){const r=[];for(let i=0;i<t.length;i++)r.push(xt(t[i],e,n,s));return r}}function Co(t,e,n,s=!0){const r=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ce;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](t,l,c)===!1)return}a=a.parent}if(i){In(),Wr(i,null,10,[t,l,c]),Rn();return}}Sy(t,n,r,s,o)}function Sy(t,e,n,s=!0,r=!1){if(r)throw t;console.error(t)}const Be=[];let St=-1;const ps=[];let cn=null,os=0;const Uf=Promise.resolve();let ki=null;function Bf(t){const e=ki||Uf;return t?e.then(this?t.bind(this):t):e}function Ty(t){let e=St+1,n=Be.length;for(;e<n;){const s=e+n>>>1,r=Be[s],i=Cr(r);i<t||i===t&&r.flags&2?e=s+1:n=s}return e}function Yl(t){if(!(t.flags&1)){const e=Cr(t),n=Be[Be.length-1];!n||!(t.flags&2)&&e>=Cr(n)?Be.push(t):Be.splice(Ty(e),0,t),t.flags|=1,Hf()}}function Hf(){ki||(ki=Uf.then(Wf))}function Iy(t){W(t)?ps.push(...t):cn&&t.id===-1?cn.splice(os+1,0,t):t.flags&1||(ps.push(t),t.flags|=1),Hf()}function yu(t,e,n=St+1){for(;n<Be.length;n++){const s=Be[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Be.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function jf(t){if(ps.length){const e=[...new Set(ps)].sort((n,s)=>Cr(n)-Cr(s));if(ps.length=0,cn){cn.push(...e);return}for(cn=e,os=0;os<cn.length;os++){const n=cn[os];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}cn=null,os=0}}const Cr=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Wf(t){try{for(St=0;St<Be.length;St++){const e=Be[St];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Wr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;St<Be.length;St++){const e=Be[St];e&&(e.flags&=-2)}St=-1,Be.length=0,jf(),ki=null,(Be.length||ps.length)&&Wf()}}let tt=null,Vf=null;function xi(t){const e=tt;return tt=t,Vf=t&&t.type.__scopeId||null,e}function ln(t,e=tt,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Ru(-1);const i=xi(e);let o;try{o=t(...r)}finally{xi(i),s._d&&Ru(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function vi(t,e){if(tt===null)return t;const n=Ro(tt),s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[i,o,a,l=ce]=e[r];i&&(K(i)&&(i={mounted:i,updated:i}),i.deep&&Bt(o),s.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function kn(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let l=a.dir[s];l&&(In(),xt(l,n,8,[t.el,a,t,e]),Rn())}}const Ry=Symbol("_vte"),Ay=t=>t.__isTeleport;function Jl(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Jl(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Vr(t,e){return K(t)?Ae({name:t.name},e,{setup:t}):t}function qf(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function qa(t,e,n,s,r=!1){if(W(t)){t.forEach((_,m)=>qa(_,e&&(W(e)?e[m]:e),n,s,r));return}if(cr(s)&&!r)return;const i=s.shapeFlag&4?Ro(s.component):s.el,o=r?null:i,{i:a,r:l}=t,c=e&&e.r,u=a.refs===ce?a.refs={}:a.refs,h=a.setupState,d=ne(h),p=h===ce?()=>!1:_=>se(d,_);if(c!=null&&c!==l&&(be(c)?(u[c]=null,p(c)&&(h[c]=null)):Me(c)&&(c.value=null)),K(l))Wr(l,a,12,[o,u]);else{const _=be(l),m=Me(l);if(_||m){const b=()=>{if(t.f){const I=_?p(l)?h[l]:u[l]:l.value;r?W(I)&&Ul(I,i):W(I)?I.includes(i)||I.push(i):_?(u[l]=[i],p(l)&&(h[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else _?(u[l]=o,p(l)&&(h[l]=o)):m&&(l.value=o,t.k&&(u[t.k]=o))};o?(b.id=-1,Ze(b,n)):b()}}}vo().requestIdleCallback;vo().cancelIdleCallback;const cr=t=>!!t.type.__asyncLoader,Kf=t=>t.type.__isKeepAlive;function Py(t,e){Gf(t,"a",e)}function Oy(t,e){Gf(t,"da",e)}function Gf(t,e,n=Le){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(So(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Kf(r.parent.vnode)&&Ny(s,e,n,r),r=r.parent}}function Ny(t,e,n,s){const r=So(e,t,s,!0);zf(()=>{Ul(s[e],r)},n)}function So(t,e,n=Le,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{In();const a=qr(n),l=xt(e,n,t,o);return a(),Rn(),l});return s?r.unshift(i):r.push(i),i}}const Jt=t=>(e,n=Le)=>{(!Tr||t==="sp")&&So(t,(...s)=>e(...s),n)},ky=Jt("bm"),Ql=Jt("m"),xy=Jt("bu"),Dy=Jt("u"),Ly=Jt("bum"),zf=Jt("um"),My=Jt("sp"),Fy=Jt("rtg"),$y=Jt("rtc");function Uy(t,e=Le){So("ec",t,e)}const By="components";function hi(t,e){return jy(By,t,!0,e)||t}const Hy=Symbol.for("v-ndc");function jy(t,e,n=!0,s=!1){const r=tt||Le;if(r){const i=r.type;{const a=Ov(i,!1);if(a&&(a===e||a===at(e)||a===yo(at(e))))return i}const o=vu(r[t]||i[t],e)||vu(r.appContext[t],e);return!o&&s?i:o}}function vu(t,e){return t&&(t[e]||t[at(e)]||t[yo(at(e))])}function Wy(t,e,n,s){let r;const i=n,o=W(t);if(o||be(t)){const a=o&&ds(t);let l=!1;a&&(l=!ot(t),t=Eo(t)),r=new Array(t.length);for(let c=0,u=t.length;c<u;c++)r[c]=e(l?xe(t[c]):t[c],c,void 0,i)}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,i)}else if(pe(t))if(t[Symbol.iterator])r=Array.from(t,(a,l)=>e(a,l,void 0,i));else{const a=Object.keys(t);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(t[u],u,l,i)}}else r=[];return r}const Ka=t=>t?gp(t)?Ro(t):Ka(t.parent):null,ur=Ae(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ka(t.parent),$root:t=>Ka(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Xl(t),$forceUpdate:t=>t.f||(t.f=()=>{Yl(t.update)}),$nextTick:t=>t.n||(t.n=Bf.bind(t.proxy)),$watch:t=>uv.bind(t)}),la=(t,e)=>t!==ce&&!t.__isScriptSetup&&se(t,e),Vy={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(la(s,e))return o[e]=1,s[e];if(r!==ce&&se(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&se(c,e))return o[e]=3,i[e];if(n!==ce&&se(n,e))return o[e]=4,n[e];Ga&&(o[e]=0)}}const u=ur[e];let h,d;if(u)return e==="$attrs"&&ke(t.attrs,"get",""),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ce&&se(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,se(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return la(r,e)?(r[e]=n,!0):s!==ce&&se(s,e)?(s[e]=n,!0):se(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==ce&&se(t,o)||la(e,o)||(a=i[0])&&se(a,o)||se(s,o)||se(ur,o)||se(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:se(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function bu(t){return W(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ga=!0;function qy(t){const e=Xl(t),n=t.proxy,s=t.ctx;Ga=!1,e.beforeCreate&&Eu(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:_,activated:m,deactivated:b,beforeDestroy:I,beforeUnmount:R,destroyed:P,unmounted:k,render:B,renderTracked:ee,renderTriggered:Q,errorCaptured:Pe,serverPrefetch:Fe,expose:rt,inheritAttrs:nn,components:Nn,directives:bt,filters:qs}=e;if(c&&Ky(c,s,null),o)for(const ae in o){const te=o[ae];K(te)&&(s[ae]=te.bind(n))}if(r){const ae=r.call(n,n);pe(ae)&&(t.data=wo(ae))}if(Ga=!0,i)for(const ae in i){const te=i[ae],Lt=K(te)?te.bind(n,n):K(te.get)?te.get.bind(n,n):At,sn=!K(te)&&K(te.set)?te.set.bind(n):At,Et=ht({get:Lt,set:sn});Object.defineProperty(s,ae,{enumerable:!0,configurable:!0,get:()=>Et.value,set:Ve=>Et.value=Ve})}if(a)for(const ae in a)Yf(a[ae],s,n,ae);if(l){const ae=K(l)?l.call(n):l;Reflect.ownKeys(ae).forEach(te=>{bi(te,ae[te])})}u&&Eu(u,t,"c");function Se(ae,te){W(te)?te.forEach(Lt=>ae(Lt.bind(n))):te&&ae(te.bind(n))}if(Se(ky,h),Se(Ql,d),Se(xy,p),Se(Dy,_),Se(Py,m),Se(Oy,b),Se(Uy,Pe),Se($y,ee),Se(Fy,Q),Se(Ly,R),Se(zf,k),Se(My,Fe),W(rt))if(rt.length){const ae=t.exposed||(t.exposed={});rt.forEach(te=>{Object.defineProperty(ae,te,{get:()=>n[te],set:Lt=>n[te]=Lt})})}else t.exposed||(t.exposed={});B&&t.render===At&&(t.render=B),nn!=null&&(t.inheritAttrs=nn),Nn&&(t.components=Nn),bt&&(t.directives=bt),Fe&&qf(t)}function Ky(t,e,n=At){W(t)&&(t=za(t));for(const s in t){const r=t[s];let i;pe(r)?"default"in r?i=Pt(r.from||s,r.default,!0):i=Pt(r.from||s):i=Pt(r),Me(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function Eu(t,e,n){xt(W(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Yf(t,e,n,s){let r=s.includes(".")?cp(n,s):()=>n[s];if(be(t)){const i=e[t];K(i)&&hr(r,i)}else if(K(t))hr(r,t.bind(n));else if(pe(t))if(W(t))t.forEach(i=>Yf(i,e,n,s));else{const i=K(t.handler)?t.handler.bind(n):e[t.handler];K(i)&&hr(r,i,t)}}function Xl(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!r.length&&!n&&!s?l=e:(l={},r.length&&r.forEach(c=>Di(l,c,o,!0)),Di(l,e,o)),pe(e)&&i.set(e,l),l}function Di(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Di(t,i,n,!0),r&&r.forEach(o=>Di(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Gy[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Gy={data:wu,props:Cu,emits:Cu,methods:sr,computed:sr,beforeCreate:$e,created:$e,beforeMount:$e,mounted:$e,beforeUpdate:$e,updated:$e,beforeDestroy:$e,beforeUnmount:$e,destroyed:$e,unmounted:$e,activated:$e,deactivated:$e,errorCaptured:$e,serverPrefetch:$e,components:sr,directives:sr,watch:Yy,provide:wu,inject:zy};function wu(t,e){return e?t?function(){return Ae(K(t)?t.call(this,this):t,K(e)?e.call(this,this):e)}:e:t}function zy(t,e){return sr(za(t),za(e))}function za(t){if(W(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function $e(t,e){return t?[...new Set([].concat(t,e))]:e}function sr(t,e){return t?Ae(Object.create(null),t,e):e}function Cu(t,e){return t?W(t)&&W(e)?[...new Set([...t,...e])]:Ae(Object.create(null),bu(t),bu(e??{})):e}function Yy(t,e){if(!t)return e;if(!e)return t;const n=Ae(Object.create(null),t);for(const s in e)n[s]=$e(t[s],e[s]);return n}function Jf(){return{app:null,config:{isNativeTag:Um,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Jy=0;function Qy(t,e){return function(s,r=null){K(s)||(s=Ae({},s)),r!=null&&!pe(r)&&(r=null);const i=Jf(),o=new WeakSet,a=[];let l=!1;const c=i.app={_uid:Jy++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:kv,get config(){return i.config},set config(u){},use(u,...h){return o.has(u)||(u&&K(u.install)?(o.add(u),u.install(c,...h)):K(u)&&(o.add(u),u(c,...h))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,h){return h?(i.components[u]=h,c):i.components[u]},directive(u,h){return h?(i.directives[u]=h,c):i.directives[u]},mount(u,h,d){if(!l){const p=c._ceVNode||ye(s,r);return p.appContext=i,d===!0?d="svg":d===!1&&(d=void 0),h&&e?e(p,u):t(p,u,d),l=!0,c._container=u,u.__vue_app__=c,Ro(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(xt(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,h){return i.provides[u]=h,c},runWithContext(u){const h=gs;gs=c;try{return u()}finally{gs=h}}};return c}}let gs=null;function bi(t,e){if(Le){let n=Le.provides;const s=Le.parent&&Le.parent.provides;s===n&&(n=Le.provides=Object.create(s)),n[t]=e}}function Pt(t,e,n=!1){const s=Le||tt;if(s||gs){const r=gs?gs._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&K(e)?e.call(s&&s.proxy):e}}const Qf={},Xf=()=>Object.create(Qf),Zf=t=>Object.getPrototypeOf(t)===Qf;function Xy(t,e,n,s=!1){const r={},i=Xf();t.propsDefaults=Object.create(null),ep(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Df(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Zy(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=ne(r),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(To(t.emitsOptions,d))continue;const p=e[d];if(l)if(se(i,d))p!==i[d]&&(i[d]=p,c=!0);else{const _=at(d);r[_]=Ya(l,a,_,p,t,!1)}else p!==i[d]&&(i[d]=p,c=!0)}}}else{ep(t,e,r,i)&&(c=!0);let u;for(const h in a)(!e||!se(e,h)&&((u=Tn(h))===h||!se(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=Ya(l,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!se(e,h))&&(delete i[h],c=!0)}c&&Ut(t.attrs,"set","")}function ep(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(or(l))continue;const c=e[l];let u;r&&se(r,u=at(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:To(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(i){const l=ne(n),c=a||ce;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Ya(r,l,h,c[h],t,!se(c,h))}}return o}function Ya(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=se(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&K(l)){const{propsDefaults:c}=r;if(n in c)s=c[n];else{const u=qr(r);s=c[n]=l.call(null,e),u()}}else s=l;r.ce&&r.ce._setProp(n,s)}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Tn(n))&&(s=!0))}return s}const ev=new WeakMap;function tp(t,e,n=!1){const s=n?ev:e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let l=!1;if(!K(t)){const u=h=>{l=!0;const[d,p]=tp(h,e,!0);Ae(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return pe(t)&&s.set(t,us),us;if(W(i))for(let u=0;u<i.length;u++){const h=at(i[u]);Su(h)&&(o[h]=ce)}else if(i)for(const u in i){const h=at(u);if(Su(h)){const d=i[u],p=o[h]=W(d)||K(d)?{type:d}:Ae({},d),_=p.type;let m=!1,b=!0;if(W(_))for(let I=0;I<_.length;++I){const R=_[I],P=K(R)&&R.name;if(P==="Boolean"){m=!0;break}else P==="String"&&(b=!1)}else m=K(_)&&_.name==="Boolean";p[0]=m,p[1]=b,(m||se(p,"default"))&&a.push(h)}}const c=[o,a];return pe(t)&&s.set(t,c),c}function Su(t){return t[0]!=="$"&&!or(t)}const np=t=>t[0]==="_"||t==="$stable",Zl=t=>W(t)?t.map(It):[It(t)],tv=(t,e,n)=>{if(e._n)return e;const s=ln((...r)=>Zl(e(...r)),n);return s._c=!1,s},sp=(t,e,n)=>{const s=t._ctx;for(const r in t){if(np(r))continue;const i=t[r];if(K(i))e[r]=tv(r,i,s);else if(i!=null){const o=Zl(i);e[r]=()=>o}}},rp=(t,e)=>{const n=Zl(e);t.slots.default=()=>n},ip=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},nv=(t,e,n)=>{const s=t.slots=Xf();if(t.vnode.shapeFlag&32){const r=e._;r?(ip(s,e,n),n&&pf(s,"_",r,!0)):sp(e,s)}else e&&rp(t,e)},sv=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=ce;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:ip(r,e,n):(i=!e.$stable,sp(e,r)),o=e}else e&&(rp(t,e),o={default:1});if(i)for(const a in r)!np(a)&&o[a]==null&&delete r[a]},Ze=mv;function rv(t){return iv(t)}function iv(t,e){const n=vo();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:p=At,insertStaticContent:_}=t,m=(f,g,y,C=null,E=null,S=null,x=void 0,N=null,O=!!g.dynamicChildren)=>{if(f===g)return;f&&!zs(f,g)&&(C=w(f),Ve(f,E,S,!0),f=null),g.patchFlag===-2&&(O=!1,g.dynamicChildren=null);const{type:T,ref:H,shapeFlag:L}=g;switch(T){case Io:b(f,g,y,C);break;case Kn:I(f,g,y,C);break;case Ei:f==null&&R(g,y,C,x);break;case ut:Nn(f,g,y,C,E,S,x,N,O);break;default:L&1?B(f,g,y,C,E,S,x,N,O):L&6?bt(f,g,y,C,E,S,x,N,O):(L&64||L&128)&&T.process(f,g,y,C,E,S,x,N,O,$)}H!=null&&E&&qa(H,f&&f.ref,S,g||f,!g)},b=(f,g,y,C)=>{if(f==null)s(g.el=a(g.children),y,C);else{const E=g.el=f.el;g.children!==f.children&&c(E,g.children)}},I=(f,g,y,C)=>{f==null?s(g.el=l(g.children||""),y,C):g.el=f.el},R=(f,g,y,C)=>{[f.el,f.anchor]=_(f.children,g,y,C,f.el,f.anchor)},P=({el:f,anchor:g},y,C)=>{let E;for(;f&&f!==g;)E=d(f),s(f,y,C),f=E;s(g,y,C)},k=({el:f,anchor:g})=>{let y;for(;f&&f!==g;)y=d(f),r(f),f=y;r(g)},B=(f,g,y,C,E,S,x,N,O)=>{g.type==="svg"?x="svg":g.type==="math"&&(x="mathml"),f==null?ee(g,y,C,E,S,x,N,O):Fe(f,g,E,S,x,N,O)},ee=(f,g,y,C,E,S,x,N)=>{let O,T;const{props:H,shapeFlag:L,transition:U,dirs:q}=f;if(O=f.el=o(f.type,S,H&&H.is,H),L&8?u(O,f.children):L&16&&Pe(f.children,O,null,C,E,ca(f,S),x,N),q&&kn(f,null,C,"created"),Q(O,f,f.scopeId,x,C),H){for(const he in H)he!=="value"&&!or(he)&&i(O,he,null,H[he],S,C);"value"in H&&i(O,"value",null,H.value,S),(T=H.onVnodeBeforeMount)&&Ct(T,C,f)}q&&kn(f,null,C,"beforeMount");const X=ov(E,U);X&&U.beforeEnter(O),s(O,g,y),((T=H&&H.onVnodeMounted)||X||q)&&Ze(()=>{T&&Ct(T,C,f),X&&U.enter(O),q&&kn(f,null,C,"mounted")},E)},Q=(f,g,y,C,E)=>{if(y&&p(f,y),C)for(let S=0;S<C.length;S++)p(f,C[S]);if(E){let S=E.subTree;if(g===S||hp(S.type)&&(S.ssContent===g||S.ssFallback===g)){const x=E.vnode;Q(f,x,x.scopeId,x.slotScopeIds,E.parent)}}},Pe=(f,g,y,C,E,S,x,N,O=0)=>{for(let T=O;T<f.length;T++){const H=f[T]=N?un(f[T]):It(f[T]);m(null,H,g,y,C,E,S,x,N)}},Fe=(f,g,y,C,E,S,x)=>{const N=g.el=f.el;let{patchFlag:O,dynamicChildren:T,dirs:H}=g;O|=f.patchFlag&16;const L=f.props||ce,U=g.props||ce;let q;if(y&&xn(y,!1),(q=U.onVnodeBeforeUpdate)&&Ct(q,y,g,f),H&&kn(g,f,y,"beforeUpdate"),y&&xn(y,!0),(L.innerHTML&&U.innerHTML==null||L.textContent&&U.textContent==null)&&u(N,""),T?rt(f.dynamicChildren,T,N,y,C,ca(g,E),S):x||te(f,g,N,null,y,C,ca(g,E),S,!1),O>0){if(O&16)nn(N,L,U,y,E);else if(O&2&&L.class!==U.class&&i(N,"class",null,U.class,E),O&4&&i(N,"style",L.style,U.style,E),O&8){const X=g.dynamicProps;for(let he=0;he<X.length;he++){const ie=X[he],Je=L[ie],Ne=U[ie];(Ne!==Je||ie==="value")&&i(N,ie,Je,Ne,E,y)}}O&1&&f.children!==g.children&&u(N,g.children)}else!x&&T==null&&nn(N,L,U,y,E);((q=U.onVnodeUpdated)||H)&&Ze(()=>{q&&Ct(q,y,g,f),H&&kn(g,f,y,"updated")},C)},rt=(f,g,y,C,E,S,x)=>{for(let N=0;N<g.length;N++){const O=f[N],T=g[N],H=O.el&&(O.type===ut||!zs(O,T)||O.shapeFlag&70)?h(O.el):y;m(O,T,H,null,C,E,S,x,!0)}},nn=(f,g,y,C,E)=>{if(g!==y){if(g!==ce)for(const S in g)!or(S)&&!(S in y)&&i(f,S,g[S],null,E,C);for(const S in y){if(or(S))continue;const x=y[S],N=g[S];x!==N&&S!=="value"&&i(f,S,N,x,E,C)}"value"in y&&i(f,"value",g.value,y.value,E)}},Nn=(f,g,y,C,E,S,x,N,O)=>{const T=g.el=f?f.el:a(""),H=g.anchor=f?f.anchor:a("");let{patchFlag:L,dynamicChildren:U,slotScopeIds:q}=g;q&&(N=N?N.concat(q):q),f==null?(s(T,y,C),s(H,y,C),Pe(g.children||[],y,H,E,S,x,N,O)):L>0&&L&64&&U&&f.dynamicChildren?(rt(f.dynamicChildren,U,y,E,S,x,N),(g.key!=null||E&&g===E.subTree)&&op(f,g,!0)):te(f,g,y,H,E,S,x,N,O)},bt=(f,g,y,C,E,S,x,N,O)=>{g.slotScopeIds=N,f==null?g.shapeFlag&512?E.ctx.activate(g,y,C,x,O):qs(g,y,C,E,S,x,O):ts(f,g,O)},qs=(f,g,y,C,E,S,x)=>{const N=f.component=Tv(f,C,E);if(Kf(f)&&(N.ctx.renderer=$),Iv(N,!1,x),N.asyncDep){if(E&&E.registerDep(N,Se,x),!f.el){const O=N.subTree=ye(Kn);I(null,O,g,y)}}else Se(N,f,g,y,E,S,x)},ts=(f,g,y)=>{const C=g.component=f.component;if(gv(f,g,y))if(C.asyncDep&&!C.asyncResolved){ae(C,g,y);return}else C.next=g,C.update();else g.el=f.el,C.vnode=g},Se=(f,g,y,C,E,S,x)=>{const N=()=>{if(f.isMounted){let{next:L,bu:U,u:q,parent:X,vnode:he}=f;{const Qe=ap(f);if(Qe){L&&(L.el=he.el,ae(f,L,x)),Qe.asyncDep.then(()=>{f.isUnmounted||N()});return}}let ie=L,Je;xn(f,!1),L?(L.el=he.el,ae(f,L,x)):L=he,U&&yi(U),(Je=L.props&&L.props.onVnodeBeforeUpdate)&&Ct(Je,X,L,he),xn(f,!0);const Ne=ua(f),lt=f.subTree;f.subTree=Ne,m(lt,Ne,h(lt.el),w(lt),f,E,S),L.el=Ne.el,ie===null&&_v(f,Ne.el),q&&Ze(q,E),(Je=L.props&&L.props.onVnodeUpdated)&&Ze(()=>Ct(Je,X,L,he),E)}else{let L;const{el:U,props:q}=g,{bm:X,m:he,parent:ie,root:Je,type:Ne}=f,lt=cr(g);if(xn(f,!1),X&&yi(X),!lt&&(L=q&&q.onVnodeBeforeMount)&&Ct(L,ie,g),xn(f,!0),U&&me){const Qe=()=>{f.subTree=ua(f),me(U,f.subTree,f,E,null)};lt&&Ne.__asyncHydrate?Ne.__asyncHydrate(U,f,Qe):Qe()}else{Je.ce&&Je.ce._injectChildStyle(Ne);const Qe=f.subTree=ua(f);m(null,Qe,y,C,f,E,S),g.el=Qe.el}if(he&&Ze(he,E),!lt&&(L=q&&q.onVnodeMounted)){const Qe=g;Ze(()=>Ct(L,ie,Qe),E)}(g.shapeFlag&256||ie&&cr(ie.vnode)&&ie.vnode.shapeFlag&256)&&f.a&&Ze(f.a,E),f.isMounted=!0,g=y=C=null}};f.scope.on();const O=f.effect=new bf(N);f.scope.off();const T=f.update=O.run.bind(O),H=f.job=O.runIfDirty.bind(O);H.i=f,H.id=f.uid,O.scheduler=()=>Yl(H),xn(f,!0),T()},ae=(f,g,y)=>{g.component=f;const C=f.vnode.props;f.vnode=g,f.next=null,Zy(f,g.props,C,y),sv(f,g.children,y),In(),yu(f),Rn()},te=(f,g,y,C,E,S,x,N,O=!1)=>{const T=f&&f.children,H=f?f.shapeFlag:0,L=g.children,{patchFlag:U,shapeFlag:q}=g;if(U>0){if(U&128){sn(T,L,y,C,E,S,x,N,O);return}else if(U&256){Lt(T,L,y,C,E,S,x,N,O);return}}q&8?(H&16&&it(T,E,S),L!==T&&u(y,L)):H&16?q&16?sn(T,L,y,C,E,S,x,N,O):it(T,E,S,!0):(H&8&&u(y,""),q&16&&Pe(L,y,C,E,S,x,N,O))},Lt=(f,g,y,C,E,S,x,N,O)=>{f=f||us,g=g||us;const T=f.length,H=g.length,L=Math.min(T,H);let U;for(U=0;U<L;U++){const q=g[U]=O?un(g[U]):It(g[U]);m(f[U],q,y,null,E,S,x,N,O)}T>H?it(f,E,S,!0,!1,L):Pe(g,y,C,E,S,x,N,O,L)},sn=(f,g,y,C,E,S,x,N,O)=>{let T=0;const H=g.length;let L=f.length-1,U=H-1;for(;T<=L&&T<=U;){const q=f[T],X=g[T]=O?un(g[T]):It(g[T]);if(zs(q,X))m(q,X,y,null,E,S,x,N,O);else break;T++}for(;T<=L&&T<=U;){const q=f[L],X=g[U]=O?un(g[U]):It(g[U]);if(zs(q,X))m(q,X,y,null,E,S,x,N,O);else break;L--,U--}if(T>L){if(T<=U){const q=U+1,X=q<H?g[q].el:C;for(;T<=U;)m(null,g[T]=O?un(g[T]):It(g[T]),y,X,E,S,x,N,O),T++}}else if(T>U)for(;T<=L;)Ve(f[T],E,S,!0),T++;else{const q=T,X=T,he=new Map;for(T=X;T<=U;T++){const Xe=g[T]=O?un(g[T]):It(g[T]);Xe.key!=null&&he.set(Xe.key,T)}let ie,Je=0;const Ne=U-X+1;let lt=!1,Qe=0;const Ks=new Array(Ne);for(T=0;T<Ne;T++)Ks[T]=0;for(T=q;T<=L;T++){const Xe=f[T];if(Je>=Ne){Ve(Xe,E,S,!0);continue}let wt;if(Xe.key!=null)wt=he.get(Xe.key);else for(ie=X;ie<=U;ie++)if(Ks[ie-X]===0&&zs(Xe,g[ie])){wt=ie;break}wt===void 0?Ve(Xe,E,S,!0):(Ks[wt-X]=T+1,wt>=Qe?Qe=wt:lt=!0,m(Xe,g[wt],y,null,E,S,x,N,O),Je++)}const du=lt?av(Ks):us;for(ie=du.length-1,T=Ne-1;T>=0;T--){const Xe=X+T,wt=g[Xe],fu=Xe+1<H?g[Xe+1].el:C;Ks[T]===0?m(null,wt,y,fu,E,S,x,N,O):lt&&(ie<0||T!==du[ie]?Et(wt,y,fu,2):ie--)}}},Et=(f,g,y,C,E=null)=>{const{el:S,type:x,transition:N,children:O,shapeFlag:T}=f;if(T&6){Et(f.component.subTree,g,y,C);return}if(T&128){f.suspense.move(g,y,C);return}if(T&64){x.move(f,g,y,$);return}if(x===ut){s(S,g,y);for(let L=0;L<O.length;L++)Et(O[L],g,y,C);s(f.anchor,g,y);return}if(x===Ei){P(f,g,y);return}if(C!==2&&T&1&&N)if(C===0)N.beforeEnter(S),s(S,g,y),Ze(()=>N.enter(S),E);else{const{leave:L,delayLeave:U,afterLeave:q}=N,X=()=>s(S,g,y),he=()=>{L(S,()=>{X(),q&&q()})};U?U(S,X,he):he()}else s(S,g,y)},Ve=(f,g,y,C=!1,E=!1)=>{const{type:S,props:x,ref:N,children:O,dynamicChildren:T,shapeFlag:H,patchFlag:L,dirs:U,cacheIndex:q}=f;if(L===-2&&(E=!1),N!=null&&qa(N,null,y,f,!0),q!=null&&(g.renderCache[q]=void 0),H&256){g.ctx.deactivate(f);return}const X=H&1&&U,he=!cr(f);let ie;if(he&&(ie=x&&x.onVnodeBeforeUnmount)&&Ct(ie,g,f),H&6)ai(f.component,y,C);else{if(H&128){f.suspense.unmount(y,C);return}X&&kn(f,null,g,"beforeUnmount"),H&64?f.type.remove(f,g,y,$,C):T&&!T.hasOnce&&(S!==ut||L>0&&L&64)?it(T,g,y,!1,!0):(S===ut&&L&384||!E&&H&16)&&it(O,g,y),C&&ns(f)}(he&&(ie=x&&x.onVnodeUnmounted)||X)&&Ze(()=>{ie&&Ct(ie,g,f),X&&kn(f,null,g,"unmounted")},y)},ns=f=>{const{type:g,el:y,anchor:C,transition:E}=f;if(g===ut){ss(y,C);return}if(g===Ei){k(f);return}const S=()=>{r(y),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(f.shapeFlag&1&&E&&!E.persisted){const{leave:x,delayLeave:N}=E,O=()=>x(y,S);N?N(f.el,S,O):O()}else S()},ss=(f,g)=>{let y;for(;f!==g;)y=d(f),r(f),f=y;r(g)},ai=(f,g,y)=>{const{bum:C,scope:E,job:S,subTree:x,um:N,m:O,a:T}=f;Tu(O),Tu(T),C&&yi(C),E.stop(),S&&(S.flags|=8,Ve(x,f,g,y)),N&&Ze(N,g),Ze(()=>{f.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},it=(f,g,y,C=!1,E=!1,S=0)=>{for(let x=S;x<f.length;x++)Ve(f[x],g,y,C,E)},w=f=>{if(f.shapeFlag&6)return w(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const g=d(f.anchor||f.el),y=g&&g[Ry];return y?d(y):g};let M=!1;const D=(f,g,y)=>{f==null?g._vnode&&Ve(g._vnode,null,null,!0):m(g._vnode||null,f,g,null,null,null,y),g._vnode=f,M||(M=!0,yu(),jf(),M=!1)},$={p:m,um:Ve,m:Et,r:ns,mt:qs,mc:Pe,pc:te,pbc:rt,n:w,o:t};let re,me;return{render:D,hydrate:re,createApp:Qy(D,re)}}function ca({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function xn({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function ov(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function op(t,e,n=!1){const s=t.children,r=e.children;if(W(s)&&W(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=un(r[i]),a.el=o.el),!n&&a.patchFlag!==-2&&op(o,a)),a.type===Io&&(a.el=o.el)}}function av(t){const e=t.slice(),n=[0];let s,r,i,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(r=n[n.length-1],t[r]<c){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function ap(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:ap(e)}function Tu(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const lv=Symbol.for("v-scx"),cv=()=>Pt(lv);function hr(t,e,n){return lp(t,e,n)}function lp(t,e,n=ce){const{immediate:s,deep:r,flush:i,once:o}=n,a=Ae({},n),l=e&&s||!e&&i!=="post";let c;if(Tr){if(i==="sync"){const p=cv();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=At,p.resume=At,p.pause=At,p}}const u=Le;a.call=(p,_,m)=>xt(p,u,_,m);let h=!1;i==="post"?a.scheduler=p=>{Ze(p,u&&u.suspense)}:i!=="sync"&&(h=!0,a.scheduler=(p,_)=>{_?p():Yl(p)}),a.augmentJob=p=>{e&&(p.flags|=4),h&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const d=Cy(t,e,a);return Tr&&(c?c.push(d):l&&d()),d}function uv(t,e,n){const s=this.proxy,r=be(t)?t.includes(".")?cp(s,t):()=>s[t]:t.bind(s,s);let i;K(e)?i=e:(i=e.handler,n=e);const o=qr(this),a=lp(r,i.bind(s),n);return o(),a}function cp(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const hv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${at(e)}Modifiers`]||t[`${Tn(e)}Modifiers`];function dv(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ce;let r=n;const i=e.startsWith("update:"),o=i&&hv(s,e.slice(7));o&&(o.trim&&(r=n.map(u=>be(u)?u.trim():u)),o.number&&(r=n.map($a)));let a,l=s[a=sa(e)]||s[a=sa(at(e))];!l&&i&&(l=s[a=sa(Tn(e))]),l&&xt(l,t,6,r);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,xt(c,t,6,r)}}function up(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!K(t)){const l=c=>{const u=up(c,e,!0);u&&(a=!0,Ae(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(pe(t)&&s.set(t,null),null):(W(i)?i.forEach(l=>o[l]=null):Ae(o,i),pe(t)&&s.set(t,o),o)}function To(t,e){return!t||!go(e)?!1:(e=e.slice(2).replace(/Once$/,""),se(t,e[0].toLowerCase()+e.slice(1))||se(t,Tn(e))||se(t,e))}function ua(t){const{type:e,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:d,setupState:p,ctx:_,inheritAttrs:m}=t,b=xi(t);let I,R;try{if(n.shapeFlag&4){const k=r||s,B=k;I=It(c.call(B,k,u,h,p,d,_)),R=a}else{const k=e;I=It(k.length>1?k(h,{attrs:a,slots:o,emit:l}):k(h,null)),R=e.props?a:fv(a)}}catch(k){dr.length=0,Co(k,t,1),I=ye(Kn)}let P=I;if(R&&m!==!1){const k=Object.keys(R),{shapeFlag:B}=P;k.length&&B&7&&(i&&k.some($l)&&(R=pv(R,i)),P=ws(P,R,!1,!0))}return n.dirs&&(P=ws(P,null,!1,!0),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&Jl(P,n.transition),I=P,xi(b),I}const fv=t=>{let e;for(const n in t)(n==="class"||n==="style"||go(n))&&((e||(e={}))[n]=t[n]);return e},pv=(t,e)=>{const n={};for(const s in t)(!$l(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function gv(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Iu(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!To(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Iu(s,o,c):!0:!!o;return!1}function Iu(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!To(n,i))return!0}return!1}function _v({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const hp=t=>t.__isSuspense;function mv(t,e){e&&e.pendingBranch?W(t)?e.effects.push(...t):e.effects.push(t):Iy(t)}const ut=Symbol.for("v-fgt"),Io=Symbol.for("v-txt"),Kn=Symbol.for("v-cmt"),Ei=Symbol.for("v-stc"),dr=[];let nt=null;function Oe(t=!1){dr.push(nt=t?null:[])}function yv(){dr.pop(),nt=dr[dr.length-1]||null}let Sr=1;function Ru(t){Sr+=t,t<0&&nt&&(nt.hasOnce=!0)}function dp(t){return t.dynamicChildren=Sr>0?nt||us:null,yv(),Sr>0&&nt&&nt.push(t),t}function Ue(t,e,n,s,r,i){return dp(F(t,e,n,s,r,i,!0))}function fp(t,e,n,s,r){return dp(ye(t,e,n,s,r,!0))}function Li(t){return t?t.__v_isVNode===!0:!1}function zs(t,e){return t.type===e.type&&t.key===e.key}const pp=({key:t})=>t??null,wi=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?be(t)||Me(t)||K(t)?{i:tt,r:t,k:e,f:!!n}:t:null);function F(t,e=null,n=null,s=0,r=null,i=t===ut?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&pp(e),ref:e&&wi(e),scopeId:Vf,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:tt};return a?(ec(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=be(n)?8:16),Sr>0&&!o&&nt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&nt.push(l),l}const ye=vv;function vv(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===Hy)&&(t=Kn),Li(t)){const a=ws(t,e,!0);return n&&ec(a,n),Sr>0&&!i&&nt&&(a.shapeFlag&6?nt[nt.indexOf(t)]=a:nt.push(a)),a.patchFlag=-2,a}if(Nv(t)&&(t=t.__vccOpts),e){e=bv(e);let{class:a,style:l}=e;a&&!be(a)&&(e.class=Vn(a)),pe(l)&&(zl(l)&&!W(l)&&(l=Ae({},l)),e.style=Hl(l))}const o=be(t)?1:hp(t)?128:Ay(t)?64:pe(t)?4:K(t)?2:0;return F(t,e,n,s,r,o,i,!0)}function bv(t){return t?zl(t)||Zf(t)?Ae({},t):t:null}function ws(t,e,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:a,transition:l}=t,c=e?wv(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&pp(c),ref:e&&e.ref?n&&i?W(i)?i.concat(wi(e)):[i,wi(e)]:wi(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ut?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ws(t.ssContent),ssFallback:t.ssFallback&&ws(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&s&&Jl(u,l.clone(u)),u}function Tt(t=" ",e=0){return ye(Io,null,t,e)}function Ev(t,e){const n=ye(Ei,null,t);return n.staticCount=e,n}function Mi(t="",e=!1){return e?(Oe(),fp(Kn,null,t)):ye(Kn,null,t)}function It(t){return t==null||typeof t=="boolean"?ye(Kn):W(t)?ye(ut,null,t.slice()):Li(t)?un(t):ye(Io,null,String(t))}function un(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ws(t)}function ec(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(W(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),ec(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!Zf(e)?e._ctx=tt:r===3&&tt&&(tt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else K(e)?(e={default:e,_ctx:tt},n=32):(e=String(e),s&64?(n=16,e=[Tt(e)]):n=8);t.children=e,t.shapeFlag|=n}function wv(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Vn([e.class,s.class]));else if(r==="style")e.style=Hl([e.style,s.style]);else if(go(r)){const i=e[r],o=s[r];o&&i!==o&&!(W(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Ct(t,e,n,s=null){xt(t,e,7,[n,s])}const Cv=Jf();let Sv=0;function Tv(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||Cv,i={uid:Sv++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new vf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:tp(s,r),emitsOptions:up(s,r),emit:null,emitted:null,propsDefaults:ce,inheritAttrs:s.inheritAttrs,ctx:ce,data:ce,props:ce,attrs:ce,slots:ce,refs:ce,setupState:ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=dv.bind(null,i),t.ce&&t.ce(i),i}let Le=null,Fi,Ja;{const t=vo(),e=(n,s)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};Fi=e("__VUE_INSTANCE_SETTERS__",n=>Le=n),Ja=e("__VUE_SSR_SETTERS__",n=>Tr=n)}const qr=t=>{const e=Le;return Fi(t),t.scope.on(),()=>{t.scope.off(),Fi(e)}},Au=()=>{Le&&Le.scope.off(),Fi(null)};function gp(t){return t.vnode.shapeFlag&4}let Tr=!1;function Iv(t,e=!1,n=!1){e&&Ja(e);const{props:s,children:r}=t.vnode,i=gp(t);Xy(t,s,i,e),nv(t,r,n);const o=i?Rv(t,e):void 0;return e&&Ja(!1),o}function Rv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Vy);const{setup:s}=n;if(s){In();const r=t.setupContext=s.length>1?Pv(t):null,i=qr(t),o=Wr(s,t,0,[t.props,r]),a=hf(o);if(Rn(),i(),(a||t.sp)&&!cr(t)&&qf(t),a){if(o.then(Au,Au),e)return o.then(l=>{Pu(t,l,e)}).catch(l=>{Co(l,t,0)});t.asyncDep=o}else Pu(t,o,e)}else _p(t,e)}function Pu(t,e,n){K(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:pe(e)&&(t.setupState=$f(e)),_p(t,n)}let Ou;function _p(t,e,n){const s=t.type;if(!t.render){if(!e&&Ou&&!s.render){const r=s.template||Xl(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Ae(Ae({isCustomElement:i,delimiters:a},o),l);s.render=Ou(r,c)}}t.render=s.render||At}{const r=qr(t);In();try{qy(t)}finally{Rn(),r()}}}const Av={get(t,e){return ke(t,"get",""),t[e]}};function Pv(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Av),slots:t.slots,emit:t.emit,expose:e}}function Ro(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy($f(Mf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ur)return ur[n](t)},has(e,n){return n in e||n in ur}})):t.proxy}function Ov(t,e=!0){return K(t)?t.displayName||t.name:t.name||e&&t.__name}function Nv(t){return K(t)&&"__vccOpts"in t}const ht=(t,e)=>Ey(t,e,Tr);function mp(t,e,n){const s=arguments.length;return s===2?pe(e)&&!W(e)?Li(e)?ye(t,null,[e]):ye(t,e):ye(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Li(n)&&(n=[n]),ye(t,e,n))}const kv="3.5.12";/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Qa;const Nu=typeof window<"u"&&window.trustedTypes;if(Nu)try{Qa=Nu.createPolicy("vue",{createHTML:t=>t})}catch{}const yp=Qa?t=>Qa.createHTML(t):t=>t,xv="http://www.w3.org/2000/svg",Dv="http://www.w3.org/1998/Math/MathML",$t=typeof document<"u"?document:null,ku=$t&&$t.createElement("template"),Lv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e==="svg"?$t.createElementNS(xv,t):e==="mathml"?$t.createElementNS(Dv,t):n?$t.createElement(t,{is:n}):$t.createElement(t);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>$t.createTextNode(t),createComment:t=>$t.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>$t.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{ku.innerHTML=yp(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const a=ku.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Mv=Symbol("_vtc");function Fv(t,e,n){const s=t[Mv];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const xu=Symbol("_vod"),$v=Symbol("_vsh"),Uv=Symbol(""),Bv=/(^|;)\s*display\s*:/;function Hv(t,e,n){const s=t.style,r=be(n);let i=!1;if(n&&!r){if(e)if(be(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Ci(s,a,"")}else for(const o in e)n[o]==null&&Ci(s,o,"");for(const o in n)o==="display"&&(i=!0),Ci(s,o,n[o])}else if(r){if(e!==n){const o=s[Uv];o&&(n+=";"+o),s.cssText=n,i=Bv.test(n)}}else e&&t.removeAttribute("style");xu in t&&(t[xu]=i?s.display:"",t[$v]&&(s.display="none"))}const Du=/\s*!important$/;function Ci(t,e,n){if(W(n))n.forEach(s=>Ci(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=jv(t,e);Du.test(n)?t.setProperty(Tn(s),n.replace(Du,""),"important"):t[s]=n}}const Lu=["Webkit","Moz","ms"],ha={};function jv(t,e){const n=ha[e];if(n)return n;let s=at(e);if(s!=="filter"&&s in t)return ha[e]=s;s=yo(s);for(let r=0;r<Lu.length;r++){const i=Lu[r]+s;if(i in t)return ha[e]=i}return e}const Mu="http://www.w3.org/1999/xlink";function Fu(t,e,n,s,r,i=Ym(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Mu,e.slice(6,e.length)):t.setAttributeNS(Mu,e,n):n==null||i&&!gf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":kt(n)?String(n):n)}function $u(t,e,n,s,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?yp(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=gf(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function $n(t,e,n,s){t.addEventListener(e,n,s)}function Wv(t,e,n,s){t.removeEventListener(e,n,s)}const Uu=Symbol("_vei");function Vv(t,e,n,s,r=null){const i=t[Uu]||(t[Uu]={}),o=i[e];if(s&&o)o.value=s;else{const[a,l]=qv(e);if(s){const c=i[e]=zv(s,r);$n(t,a,c,l)}else o&&(Wv(t,a,o,l),i[e]=void 0)}}const Bu=/(?:Once|Passive|Capture)$/;function qv(t){let e;if(Bu.test(t)){e={};let s;for(;s=t.match(Bu);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Tn(t.slice(2)),e]}let da=0;const Kv=Promise.resolve(),Gv=()=>da||(Kv.then(()=>da=0),da=Date.now());function zv(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;xt(Yv(s,n.value),e,5,[s])};return n.value=t,n.attached=Gv(),n}function Yv(t,e){if(W(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Hu=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Jv=(t,e,n,s,r,i)=>{const o=r==="svg";e==="class"?Fv(t,s,o):e==="style"?Hv(t,n,s):go(e)?$l(e)||Vv(t,e,n,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Qv(t,e,s,o))?($u(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Fu(t,e,s,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!be(s))?$u(t,at(e),s,i,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Fu(t,e,s,o))};function Qv(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Hu(e)&&K(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Hu(e)&&be(n)?!1:e in t}const $i=t=>{const e=t.props["onUpdate:modelValue"]||!1;return W(e)?n=>yi(e,n):e};function Xv(t){t.target.composing=!0}function ju(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const _s=Symbol("_assign"),Xa={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t[_s]=$i(r);const i=s||r.props&&r.props.type==="number";$n(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=$a(a)),t[_s](a)}),n&&$n(t,"change",()=>{t.value=t.value.trim()}),e||($n(t,"compositionstart",Xv),$n(t,"compositionend",ju),$n(t,"change",ju))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:r,number:i}},o){if(t[_s]=$i(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?$a(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||r&&t.value.trim()===l)||(t.value=l))}},Zv={deep:!0,created(t,e,n){t[_s]=$i(n),$n(t,"change",()=>{const s=t._modelValue,r=eb(t),i=t.checked,o=t[_s];if(W(s)){const a=_f(s,r),l=a!==-1;if(i&&!l)o(s.concat(r));else if(!i&&l){const c=[...s];c.splice(a,1),o(c)}}else if(_o(s)){const a=new Set(s);i?a.add(r):a.delete(r),o(a)}else o(vp(t,i))})},mounted:Wu,beforeUpdate(t,e,n){t[_s]=$i(n),Wu(t,e,n)}};function Wu(t,{value:e,oldValue:n},s){t._modelValue=e;let r;if(W(e))r=_f(e,s.props.value)>-1;else if(_o(e))r=e.has(s.props.value);else{if(e===n)return;r=bo(e,vp(t,!0))}t.checked!==r&&(t.checked=r)}function eb(t){return"_value"in t?t._value:t.value}function vp(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const tb=["ctrl","shift","alt","meta"],nb={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>tb.some(n=>t[`${n}Key`]&&!e.includes(n))},Ys=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(r,...i)=>{for(let o=0;o<e.length;o++){const a=nb[e[o]];if(a&&a(r,e))return}return t(r,...i)})},sb={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},rb=(t,e)=>{const n=t._withKeys||(t._withKeys={}),s=e.join(".");return n[s]||(n[s]=r=>{if(!("key"in r))return;const i=Tn(r.key);if(e.some(o=>o===i||sb[o]===i))return t(r)})},ib=Ae({patchProp:Jv},Lv);let Vu;function ob(){return Vu||(Vu=rv(ib))}const ab=(...t)=>{const e=ob().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=cb(s);if(!r)return;const i=e._component;!K(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,lb(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function lb(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function cb(t){return be(t)?document.querySelector(t):t}var ub=!1;/*!
 * pinia v2.2.4
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */const hb=Symbol();var qu;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(qu||(qu={}));function db(){const t=Qm(!0),e=t.run(()=>ct({}));let n=[],s=[];const r=Mf({install(i){r._a=i,i.provide(hb,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return!this._a&&!ub?s.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}var Ku={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bp={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A=function(t,e){if(!t)throw Os(e)},Os=function(t){return new Error("Firebase Database ("+bp.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ep=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},fb=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},tc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(d=64)),s.push(n[u],n[h],n[d],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ep(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):fb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||c==null||h==null)throw new pb;const d=i<<2|a>>4;if(s.push(d),c!==64){const p=a<<4&240|c>>2;if(s.push(p),h!==64){const _=c<<6&192|h;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class pb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const wp=function(t){const e=Ep(t);return tc.encodeByteArray(e,!0)},Ui=function(t){return wp(t).replace(/\./g,"")},Bi=function(t){try{return tc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gb(t){return Cp(void 0,t)}function Cp(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!_b(n)||(t[n]=Cp(t[n],e[n]));return t}function _b(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yb=()=>mb().__FIREBASE_DEFAULTS__,vb=()=>{if(typeof process>"u"||typeof Ku>"u")return;const t=Ku.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},bb=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Bi(t[1]);return e&&JSON.parse(e)},nc=()=>{try{return yb()||vb()||bb()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Sp=t=>{var e,n;return(n=(e=nc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Eb=t=>{const e=Sp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Tp=()=>{var t;return(t=nc())===null||t===void 0?void 0:t.config},Ip=t=>{var e;return(e=nc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wb(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ui(JSON.stringify(n)),Ui(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function sc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(je())}function Cb(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Sb(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Rp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Tb(){const t=je();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ap(){return bp.NODE_ADMIN===!0}function Ib(){try{return typeof indexedDB=="object"}catch{return!1}}function Rb(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ab="FirebaseError";class An extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Ab,Object.setPrototypeOf(this,An.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Kr.prototype.create)}}class Kr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Pb(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new An(r,a,s)}}function Pb(t,e){return t.replace(Ob,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Ob=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(t){return JSON.parse(t)}function we(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pp=function(t){let e={},n={},s={},r="";try{const i=t.split(".");e=Ir(Bi(i[0])||""),n=Ir(Bi(i[1])||""),r=i[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:r}},Nb=function(t){const e=Pp(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},kb=function(t){const e=Pp(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Cs(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Za(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Hi(t,e,n){const s={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(s[r]=e.call(n,t[r],r,t));return s}function ji(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Gu(i)&&Gu(o)){if(!ji(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Gu(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ns(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function rr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function ir(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let r=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^i&(o^a),u=1518500249):(c=i^o^a,u=1859775393):h<60?(c=i&o|a&(i|o),u=2400959708):(c=i^o^a,u=3395469782);const d=(r<<5|r>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=r,r=d}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let r=0;const i=this.buf_;let o=this.inbuf_;for(;r<n;){if(o===0)for(;r<=s;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<n;)if(i[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else for(;r<n;)if(i[o]=e[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let r=0;r<5;r++)for(let i=24;i>=0;i-=8)e[s]=this.chain_[r]>>i&255,++s;return e}}function Db(t,e){const n=new Lb(t,e);return n.subscribe.bind(n)}class Lb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Mb(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=fa),r.error===void 0&&(r.error=fa),r.complete===void 0&&(r.complete=fa);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Mb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function fa(){}function rc(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fb=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);if(r>=55296&&r<=56319){const i=r-55296;s++,A(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;r=65536+(i<<10)+o}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Po=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(t){return t&&t._delegate?t._delegate:t}class Gn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Ao;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Bb(e))try{this.getOrInitializeService({instanceIdentifier:Ln})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Ln){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ln){return this.instances.has(e)}getOptions(e=Ln){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Ub(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ln){return this.component?this.component.multipleInstances?e:Ln:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ub(t){return t===Ln?void 0:t}function Bb(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new $b(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var le;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(le||(le={}));const jb={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},Wb=le.INFO,Vb={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},qb=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Vb[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ic{constructor(e){this.name=e,this._logLevel=Wb,this._logHandler=qb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?jb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}const Kb=(t,e)=>e.some(n=>t instanceof n);let zu,Yu;function Gb(){return zu||(zu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zb(){return Yu||(Yu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Op=new WeakMap,el=new WeakMap,Np=new WeakMap,pa=new WeakMap,oc=new WeakMap;function Yb(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(mn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Op.set(n,t)}).catch(()=>{}),oc.set(e,t),e}function Jb(t){if(el.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});el.set(t,e)}let tl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return el.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Np.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return mn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Qb(t){tl=t(tl)}function Xb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ga(this),e,...n);return Np.set(s,e.sort?e.sort():[e]),mn(s)}:zb().includes(t)?function(...e){return t.apply(ga(this),e),mn(Op.get(this))}:function(...e){return mn(t.apply(ga(this),e))}}function Zb(t){return typeof t=="function"?Xb(t):(t instanceof IDBTransaction&&Jb(t),Kb(t,Gb())?new Proxy(t,tl):t)}function mn(t){if(t instanceof IDBRequest)return Yb(t);if(pa.has(t))return pa.get(t);const e=Zb(t);return e!==t&&(pa.set(t,e),oc.set(e,t)),e}const ga=t=>oc.get(t);function eE(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=mn(o);return s&&o.addEventListener("upgradeneeded",l=>{s(mn(o.result),l.oldVersion,l.newVersion,mn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),r&&l.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const tE=["get","getKey","getAll","getAllKeys","count"],nE=["put","add","delete","clear"],_a=new Map;function Ju(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(_a.get(e))return _a.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=nE.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||tE.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return _a.set(e,i),i}Qb(t=>({...t,get:(e,n,s)=>Ju(e,n)||t.get(e,n,s),has:(e,n)=>!!Ju(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(rE(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function rE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const nl="@firebase/app",Qu="0.10.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt=new ic("@firebase/app"),iE="@firebase/app-compat",oE="@firebase/analytics-compat",aE="@firebase/analytics",lE="@firebase/app-check-compat",cE="@firebase/app-check",uE="@firebase/auth",hE="@firebase/auth-compat",dE="@firebase/database",fE="@firebase/data-connect",pE="@firebase/database-compat",gE="@firebase/functions",_E="@firebase/functions-compat",mE="@firebase/installations",yE="@firebase/installations-compat",vE="@firebase/messaging",bE="@firebase/messaging-compat",EE="@firebase/performance",wE="@firebase/performance-compat",CE="@firebase/remote-config",SE="@firebase/remote-config-compat",TE="@firebase/storage",IE="@firebase/storage-compat",RE="@firebase/firestore",AE="@firebase/vertexai",PE="@firebase/firestore-compat",OE="firebase",NE="11.0.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sl="[DEFAULT]",kE={[nl]:"fire-core",[iE]:"fire-core-compat",[aE]:"fire-analytics",[oE]:"fire-analytics-compat",[cE]:"fire-app-check",[lE]:"fire-app-check-compat",[uE]:"fire-auth",[hE]:"fire-auth-compat",[dE]:"fire-rtdb",[fE]:"fire-data-connect",[pE]:"fire-rtdb-compat",[gE]:"fire-fn",[_E]:"fire-fn-compat",[mE]:"fire-iid",[yE]:"fire-iid-compat",[vE]:"fire-fcm",[bE]:"fire-fcm-compat",[EE]:"fire-perf",[wE]:"fire-perf-compat",[CE]:"fire-rc",[SE]:"fire-rc-compat",[TE]:"fire-gcs",[IE]:"fire-gcs-compat",[RE]:"fire-fst",[PE]:"fire-fst-compat",[AE]:"fire-vertex","fire-js":"fire-js",[OE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wi=new Map,xE=new Map,rl=new Map;function Xu(t,e){try{t.container.addComponent(e)}catch(n){Gt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ss(t){const e=t.name;if(rl.has(e))return Gt.debug(`There were multiple attempts to register component ${e}.`),!1;rl.set(e,t);for(const n of Wi.values())Xu(n,t);for(const n of xE.values())Xu(n,t);return!0}function ac(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Rt(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},yn=new Kr("app","Firebase",DE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Gn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks=NE;function kp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:sl,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw yn.create("bad-app-name",{appName:String(r)});if(n||(n=Tp()),!n)throw yn.create("no-options");const i=Wi.get(r);if(i){if(ji(n,i.options)&&ji(s,i.config))return i;throw yn.create("duplicate-app",{appName:r})}const o=new Hb(r);for(const l of rl.values())o.addComponent(l);const a=new LE(n,s,o);return Wi.set(r,a),a}function xp(t=sl){const e=Wi.get(t);if(!e&&t===sl&&Tp())return kp();if(!e)throw yn.create("no-app",{appName:t});return e}function vn(t,e,n){var s;let r=(s=kE[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Gt.warn(a.join(" "));return}Ss(new Gn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ME="firebase-heartbeat-database",FE=1,Rr="firebase-heartbeat-store";let ma=null;function Dp(){return ma||(ma=eE(ME,FE,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Rr)}catch(n){console.warn(n)}}}}).catch(t=>{throw yn.create("idb-open",{originalErrorMessage:t.message})})),ma}async function $E(t){try{const n=(await Dp()).transaction(Rr),s=await n.objectStore(Rr).get(Lp(t));return await n.done,s}catch(e){if(e instanceof An)Gt.warn(e.message);else{const n=yn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Gt.warn(n.message)}}}async function Zu(t,e){try{const s=(await Dp()).transaction(Rr,"readwrite");await s.objectStore(Rr).put(e,Lp(t)),await s.done}catch(n){if(n instanceof An)Gt.warn(n.message);else{const s=yn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Gt.warn(s.message)}}}function Lp(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UE=1024,BE=30*24*60*60*1e3;class HE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new WE(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=eh();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=BE}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Gt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=eh(),{heartbeatsToSend:s,unsentEntries:r}=jE(this._heartbeatsCache.heartbeats),i=Ui(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Gt.warn(n),""}}}function eh(){return new Date().toISOString().substring(0,10)}function jE(t,e=UE){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),th(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),th(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class WE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ib()?Rb().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await $E(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Zu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Zu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function th(t){return Ui(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VE(t){Ss(new Gn("platform-logger",e=>new sE(e),"PRIVATE")),Ss(new Gn("heartbeat",e=>new HE(e),"PRIVATE")),vn(nl,Qu,t),vn(nl,Qu,"esm2017"),vn("fire-js","")}VE("");var nh={};const sh="@firebase/database",rh="1.0.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mp="";function qE(t){Mp=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),we(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ir(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Qt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fp=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new KE(e)}}catch{}return new GE},Un=Fp("localStorage"),zE=Fp("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms=new ic("@firebase/database"),YE=function(){let t=1;return function(){return t++}}(),$p=function(t){const e=Fb(t),n=new xb;n.update(e);const s=n.digest();return tc.encodeByteArray(s)},Gr=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Gr.apply(null,s):typeof s=="object"?e+=we(s):e+=s,e+=" "}return e};let fr=null,ih=!0;const JE=function(t,e){A(!e,"Can't turn on custom loggers persistently."),ms.logLevel=le.VERBOSE,fr=ms.log.bind(ms)},De=function(...t){if(ih===!0&&(ih=!1,fr===null&&zE.get("logging_enabled")===!0&&JE()),fr){const e=Gr.apply(null,t);fr(e)}},zr=function(t){return function(...e){De(t,...e)}},il=function(...t){const e="FIREBASE INTERNAL ERROR: "+Gr(...t);ms.error(e)},zt=function(...t){const e=`FIREBASE FATAL ERROR: ${Gr(...t)}`;throw ms.error(e),new Error(e)},Ke=function(...t){const e="FIREBASE WARNING: "+Gr(...t);ms.warn(e)},QE=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ke("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Up=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},XE=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ts="[MIN_NAME]",zn="[MAX_NAME]",xs=function(t,e){if(t===e)return 0;if(t===Ts||e===zn)return-1;if(e===Ts||t===zn)return 1;{const n=oh(t),s=oh(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},ZE=function(t,e){return t===e?0:t<e?-1:1},Js=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+we(e))},lc=function(t){if(typeof t!="object"||t===null)return we(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=we(e[s]),n+=":",n+=lc(t[e[s]]);return n+="}",n},Bp=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let r=0;r<n;r+=e)r+e>n?s.push(t.substring(r,n)):s.push(t.substring(r,r+e));return s};function Ye(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Hp=function(t){A(!Up(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let r,i,o,a,l;t===0?(i=0,o=0,r=1/t===-1/0?1:0):(r=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),i=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(i%2?1:0),i=Math.floor(i/2);c.push(r?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},ew=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},tw=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function nw(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const sw=new RegExp("^-?(0*)\\d{1,10}$"),rw=-2147483648,iw=2147483647,oh=function(t){if(sw.test(t)){const e=Number(t);if(e>=rw&&e<=iw)return e}return null},Ds=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ke("Exception was thrown by user callback.",n),e},Math.floor(0))}},ow=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},pr=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Ke(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(De("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ke(e)}}class Si{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Si.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc="5",jp="v",Wp="s",Vp="r",qp="f",Kp=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Gp="ls",zp="p",ol="ac",Yp="websocket",Jp="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(e,n,s,r,i=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Un.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Un.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function cw(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Xp(t,e,n){A(typeof e=="string","typeof type must == string"),A(typeof n=="object","typeof params must == object");let s;if(e===Yp)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Jp)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);cw(t)&&(n.ns=t.namespace);const r=[];return Ye(n,(i,o)=>{r.push(i+"="+o)}),s+r.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{constructor(){this.counters_={}}incrementCounter(e,n=1){Qt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return gb(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya={},va={};function uc(t){const e=t.toString();return ya[e]||(ya[e]=new uw),ya[e]}function hw(t,e){const n=t.toString();return va[n]||(va[n]=e()),va[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<s.length;++r)s[r]&&Ds(()=>{this.onMessage_(s[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ah="start",fw="close",pw="pLPCommand",gw="pRTLPCB",Zp="id",eg="pw",tg="ser",_w="cb",mw="seg",yw="ts",vw="d",bw="dframe",ng=1870,sg=30,Ew=ng-sg,ww=25e3,Cw=3e4;class ls{constructor(e,n,s,r,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=zr(e),this.stats_=uc(n),this.urlFn=l=>(this.appCheckToken&&(l[ol]=this.appCheckToken),Xp(n,Jp,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new dw(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Cw)),XE(()=>{if(this.isClosed_)return;this.scriptTagHolder=new hc((...i)=>{const[o,a,l,c,u]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===ah)this.id=a,this.password=l;else if(o===fw)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[ah]="t",s[tg]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[_w]=this.scriptTagHolder.uniqueCallbackIdentifier),s[jp]=cc,this.transportSessionId&&(s[Wp]=this.transportSessionId),this.lastSessionId&&(s[Gp]=this.lastSessionId),this.applicationId&&(s[zp]=this.applicationId),this.appCheckToken&&(s[ol]=this.appCheckToken),typeof location<"u"&&location.hostname&&Kp.test(location.hostname)&&(s[Vp]=qp);const r=this.urlFn(s);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ls.forceAllow_=!0}static forceDisallow(){ls.forceDisallow_=!0}static isAvailable(){return ls.forceAllow_?!0:!ls.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!ew()&&!tw()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=we(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=wp(n),r=Bp(s,Ew);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[bw]="t",s[Zp]=e,s[eg]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=we(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class hc{constructor(e,n,s,r){this.onDisconnect=s,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=YE(),window[pw+this.uniqueCallbackIdentifier]=e,window[gw+this.uniqueCallbackIdentifier]=n,this.myIFrame=hc.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){De("frame writing exception"),a.stack&&De(a.stack),De(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||De("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Zp]=this.myID,e[eg]=this.myPW,e[tg]=this.currentSerial;let n=this.urlFn(e),s="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+sg+s.length<=ng;){const o=this.pendingSegs.shift();s=s+"&"+mw+r+"="+o.seg+"&"+yw+r+"="+o.ts+"&"+vw+r+"="+o.d,r++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(s,Math.floor(ww)),i=()=>{clearTimeout(r),s()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const r=s.readyState;(!r||r==="loaded"||r==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{De("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sw=16384,Tw=45e3;let Vi=null;typeof MozWebSocket<"u"?Vi=MozWebSocket:typeof WebSocket<"u"&&(Vi=WebSocket);class dt{constructor(e,n,s,r,i,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=zr(this.connId),this.stats_=uc(n),this.connURL=dt.connectionURL_(n,o,a,r,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,r,i){const o={};return o[jp]=cc,typeof location<"u"&&location.hostname&&Kp.test(location.hostname)&&(o[Vp]=qp),n&&(o[Wp]=n),s&&(o[Gp]=s),r&&(o[ol]=r),i&&(o[zp]=i),Xp(e,Yp,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Un.set("previous_websocket_failure",!0);try{let s;Ap(),this.mySock=new Vi(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){dt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Vi!==null&&!dt.forceDisallow_}static previouslyFailed(){return Un.isInMemoryStorage||Un.get("previous_websocket_failure")===!0}markConnectionHealthy(){Un.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Ir(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(A(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=we(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Bp(n,Sw);s.length>1&&this.sendString_(String(s.length));for(let r=0;r<s.length;r++)this.sendString_(s[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Tw))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}dt.responsesRequiredToBeHealthy=2;dt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ls,dt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=dt&&dt.isAvailable();let s=n&&!dt.previouslyFailed();if(e.webSocketOnly&&(n||Ke("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[dt];else{const r=this.transports_=[];for(const i of Ar.ALL_TRANSPORTS)i&&i.isAvailable()&&r.push(i);Ar.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ar.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iw=6e4,Rw=5e3,Aw=10*1024,Pw=100*1024,ba="t",lh="d",Ow="s",ch="r",Nw="e",uh="o",hh="a",dh="n",fh="p",kw="h";class xw{constructor(e,n,s,r,i,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=zr("c:"+this.id+":"),this.transportManager_=new Ar(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=pr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Pw?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Aw?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ba in e){const n=e[ba];n===hh?this.upgradeIfSecondaryHealthy_():n===ch?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===uh&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Js("t",e),s=Js("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:fh,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:hh,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:dh,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Js("t",e),s=Js("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Js(ba,e);if(lh in e){const s=e[lh];if(n===kw){const r=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(n===dh){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Ow?this.onConnectionShutdown_(s):n===ch?this.onReset_(s):n===Nw?il("Server Error: "+s):n===uh?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):il("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),cc!==s&&Ke("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),pr(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Iw))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):pr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Rw))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:fh,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Un.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{put(e,n,s,r){}merge(e,n,s,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(e){this.allowedEvents_=e,this.listeners_={},A(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let r=0;r<s.length;r++)s[r].callback.apply(s[r].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const r=this.getInitialEvent(e);r&&n.apply(s,r)}off(e,n,s){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===n&&(!s||s===r[i].context)){r.splice(i,1);return}}validateEventType_(e){A(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi extends ig{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!sc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new qi}getInitialEvent(e){return A(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph=32,gh=768;class ue{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[s]=this.pieces_[r],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Z(){return new ue("")}function z(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function wn(t){return t.pieces_.length-t.pieceNum_}function fe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ue(t.pieces_,e)}function og(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Dw(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ag(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function lg(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ue(e,0)}function Ce(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof ue)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let r=0;r<s.length;r++)s[r].length>0&&n.push(s[r])}return new ue(n,0)}function J(t){return t.pieceNum_>=t.pieces_.length}function He(t,e){const n=z(t),s=z(e);if(n===null)return e;if(n===s)return He(fe(t),fe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function dc(t,e){if(wn(t)!==wn(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function ft(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(wn(t)>wn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Lw{constructor(e,n){this.errorPrefix_=n,this.parts_=ag(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Po(this.parts_[s]);cg(this)}}function Mw(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Po(e),cg(t)}function Fw(t){const e=t.parts_.pop();t.byteLength_-=Po(e),t.parts_.length>0&&(t.byteLength_-=1)}function cg(t){if(t.byteLength_>gh)throw new Error(t.errorPrefix_+"has a key path longer than "+gh+" bytes ("+t.byteLength_+").");if(t.parts_.length>ph)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ph+") or object contains a cycle "+Mn(t))}function Mn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc extends ig{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new fc}getInitialEvent(e){return A(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs=1e3,$w=60*5*1e3,_h=30*1e3,Uw=1.3,Bw=3e4,Hw="server_kill",mh=3;class qt extends rg{constructor(e,n,s,r,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=qt.nextPersistentConnectionId_++,this.log_=zr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Qs,this.maxReconnectDelay_=$w,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Ap())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");fc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&qi.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const r=++this.requestNumber_,i={r,a:e,b:n};this.log_(we(i)),A(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),s&&(this.requestCBHash_[r]=s)}get(e){this.initConnection_();const n=new Ao,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,s,r){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),A(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),A(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:n,query:e,tag:s};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+s+" for "+r);const i={p:s},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,c=a.s;qt.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(r))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,r),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Qt(e,"w")){const s=Cs(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();Ke(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||kb(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=_h)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Nb(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,r=>{const i=r.s,o=r.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+r),A(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,r)&&this.connected_&&this.sendUnlisten_(s,r,e._queryObject,n)}sendUnlisten_(e,n,s,r){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";r&&(i.q=s,i.t=r),this.sendRequest(o,i)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,r){const i={p:n,d:s};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,n,s,r){this.putInternal("p",e,n,s,r)}merge(e,n,s,r){this.putInternal("m",e,n,s,r)}putInternal(e,n,s,r,i){this.initConnection_();const o={p:n,d:s};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const i=s.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+we(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):il("Unrecognized action received from server: "+we(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){A(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Qs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Qs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Bw&&(this.reconnectDelay_=Qs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Uw)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+qt.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){A(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?De("getToken() completed but was canceled"):(De("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new xw(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,p=>{Ke(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(Hw)},i))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Ke(h),l())}}}interrupt(e){De("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){De("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Za(this.interruptReasons_)&&(this.reconnectDelay_=Qs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(i=>lc(i)).join("$"):s="default";const r=this.removeListen_(e,s);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,n){const s=new ue(e).toString();let r;if(this.listens.has(s)){const i=this.listens.get(s);r=i.get(n),i.delete(n),i.size===0&&this.listens.delete(s)}else r=void 0;return r}onAuthRevoked_(e,n){De("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=mh&&(this.reconnectDelay_=_h,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){De("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=mh&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Mp.replace(/\./g,"-")]=1,sc()?e["framework.cordova"]=1:Rp()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=qi.getInstance().currentlyOnline();return Za(this.interruptReasons_)&&e}}qt.nextPersistentConnectionId_=0;qt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Y(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new Y(Ts,e),r=new Y(Ts,n);return this.compare(s,r)!==0}minPost(){return Y.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let di;class ug extends Oo{static get __EMPTY_NODE(){return di}static set __EMPTY_NODE(e){di=e}compare(e,n){return xs(e.name,n.name)}isDefinedOn(e){throw Os("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Y.MIN}maxPost(){return new Y(zn,di)}makePost(e,n){return A(typeof e=="string","KeyIndex indexValue must always be a string."),new Y(e,di)}toString(){return".key"}}const ys=new ug;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,n,s,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ie{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??Ie.RED,this.left=r??qe.EMPTY_NODE,this.right=i??qe.EMPTY_NODE}copy(e,n,s,r,i){return new Ie(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return i<0?r=r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return qe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,r;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return qe.EMPTY_NODE;r=s.right.min_(),s=s.copy(r.key,r.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ie.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ie.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ie.RED=!0;Ie.BLACK=!1;class jw{copy(e,n,s,r,i){return this}insert(e,n,s){return new Ie(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class qe{constructor(e,n=qe.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new qe(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ie.BLACK,null,null))}remove(e){return new qe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ie.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,r=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return r?r.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(r=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new fi(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new fi(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new fi(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new fi(this.root_,null,this.comparator_,!0,e)}}qe.EMPTY_NODE=new jw;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ww(t,e){return xs(t.name,e.name)}function pc(t,e){return xs(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let al;function Vw(t){al=t}const hg=function(t){return typeof t=="number"?"number:"+Hp(t):"string:"+t},dg=function(t){if(t.isLeafNode()){const e=t.val();A(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Qt(e,".sv"),"Priority must be a string or number.")}else A(t===al||t.isEmpty(),"priority of unexpected type.");A(t===al||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yh;class Te{constructor(e,n=Te.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,A(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),dg(this.priorityNode_)}static set __childrenNodeConstructor(e){yh=e}static get __childrenNodeConstructor(){return yh}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Te(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Te.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return J(e)?this:z(e)===".priority"?this.priorityNode_:Te.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Te.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=z(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(A(s!==".priority"||wn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Te.__childrenNodeConstructor.EMPTY_NODE.updateChild(fe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+hg(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Hp(this.value_):e+=this.value_,this.lazyHash_=$p(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Te.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Te.__childrenNodeConstructor?-1:(A(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,r=Te.VALUE_TYPE_ORDER.indexOf(n),i=Te.VALUE_TYPE_ORDER.indexOf(s);return A(r>=0,"Unknown leaf type: "+n),A(i>=0,"Unknown leaf type: "+s),r===i?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Te.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fg,pg;function qw(t){fg=t}function Kw(t){pg=t}class Gw extends Oo{compare(e,n){const s=e.node.getPriority(),r=n.node.getPriority(),i=s.compareTo(r);return i===0?xs(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Y.MIN}maxPost(){return new Y(zn,new Te("[PRIORITY-POST]",pg))}makePost(e,n){const s=fg(e);return new Y(n,new Te("[PRIORITY-POST]",s))}toString(){return".priority"}}const ve=new Gw;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw=Math.log(2);class Yw{constructor(e){const n=i=>parseInt(Math.log(i)/zw,10),s=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const r=s(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ki=function(t,e,n,s){t.sort(e);const r=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new Ie(d,h.node,Ie.BLACK,null,null);{const p=parseInt(u/2,10)+l,_=r(l,p),m=r(p+1,c);return h=t[p],d=n?n(h):h,new Ie(d,h.node,Ie.BLACK,_,m)}},i=function(l){let c=null,u=null,h=t.length;const d=function(_,m){const b=h-_,I=h;h-=_;const R=r(b+1,I),P=t[b],k=n?n(P):P;p(new Ie(k,P.node,m,null,R))},p=function(_){c?(c.left=_,c=_):(u=_,c=_)};for(let _=0;_<l.count;++_){const m=l.nextBitIsOne(),b=Math.pow(2,l.count-(_+1));m?d(b,Ie.BLACK):(d(b,Ie.BLACK),d(b,Ie.RED))}return u},o=new Yw(t.length),a=i(o);return new qe(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ea;const is={};class Ht{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return A(is&&ve,"ChildrenNode.ts has not been loaded"),Ea=Ea||new Ht({".priority":is},{".priority":ve}),Ea}get(e){const n=Cs(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof qe?n:null}hasIndex(e){return Qt(this.indexSet_,e.toString())}addIndex(e,n){A(e!==ys,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let r=!1;const i=n.getIterator(Y.Wrap);let o=i.getNext();for(;o;)r=r||e.isDefinedOn(o.node),s.push(o),o=i.getNext();let a;r?a=Ki(s,e.getCompare()):a=is;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Ht(u,c)}addToIndexes(e,n){const s=Hi(this.indexes_,(r,i)=>{const o=Cs(this.indexSet_,i);if(A(o,"Missing index implementation for "+i),r===is)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Y.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Ki(a,o.getCompare())}else return is;else{const a=n.get(e.name);let l=r;return a&&(l=l.remove(new Y(e.name,a))),l.insert(e,e.node)}});return new Ht(s,this.indexSet_)}removeFromIndexes(e,n){const s=Hi(this.indexes_,r=>{if(r===is)return r;{const i=n.get(e.name);return i?r.remove(new Y(e.name,i)):r}});return new Ht(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xs;class j{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&dg(this.priorityNode_),this.children_.isEmpty()&&A(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Xs||(Xs=new j(new qe(pc),null,Ht.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Xs}updatePriority(e){return this.children_.isEmpty()?this:new j(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Xs:n}}getChild(e){const n=z(e);return n===null?this:this.getImmediateChild(n).getChild(fe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(A(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new Y(e,n);let r,i;n.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(s,this.children_)):(r=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(s,this.children_));const o=r.isEmpty()?Xs:this.priorityNode_;return new j(r,o,i)}}updateChild(e,n){const s=z(e);if(s===null)return n;{A(z(e)!==".priority"||wn(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(s).updateChild(fe(e),n);return this.updateImmediateChild(s,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,r=0,i=!0;if(this.forEachChild(ve,(o,a)=>{n[o]=a.val(e),s++,i&&j.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):i=!1}),!e&&i&&r<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+hg(this.getPriority().val())+":"),this.forEachChild(ve,(n,s)=>{const r=s.hash();r!==""&&(e+=":"+n+":"+r)}),this.lazyHash_=e===""?"":$p(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const r=this.resolveIndex_(s);if(r){const i=r.getPredecessorKey(new Y(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Y(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Y(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,Y.Wrap);let i=r.peek();for(;i!=null&&n.compare(i,e)<0;)r.getNext(),i=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,Y.Wrap);let i=r.peek();for(;i!=null&&n.compare(i,e)>0;)r.getNext(),i=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Yr?-1:0}withIndex(e){if(e===ys||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new j(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ys||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(ve),r=n.getIterator(ve);let i=s.getNext(),o=r.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=s.getNext(),o=r.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ys?null:this.indexMap_.get(e.toString())}}j.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Jw extends j{constructor(){super(new qe(pc),j.EMPTY_NODE,Ht.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return j.EMPTY_NODE}isEmpty(){return!1}}const Yr=new Jw;Object.defineProperties(Y,{MIN:{value:new Y(Ts,j.EMPTY_NODE)},MAX:{value:new Y(zn,Yr)}});ug.__EMPTY_NODE=j.EMPTY_NODE;Te.__childrenNodeConstructor=j;Vw(Yr);Kw(Yr);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw=!0;function Re(t,e=null){if(t===null)return j.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),A(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Te(n,Re(e))}if(!(t instanceof Array)&&Qw){const n=[];let s=!1;if(Ye(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Re(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new Y(o,l)))}}),n.length===0)return j.EMPTY_NODE;const i=Ki(n,Ww,o=>o.name,pc);if(s){const o=Ki(n,ve.getCompare());return new j(i,Re(e),new Ht({".priority":o},{".priority":ve}))}else return new j(i,Re(e),Ht.Default)}else{let n=j.EMPTY_NODE;return Ye(t,(s,r)=>{if(Qt(t,s)&&s.substring(0,1)!=="."){const i=Re(r);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(s,i))}}),n.updatePriority(Re(e))}}qw(Re);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw extends Oo{constructor(e){super(),this.indexPath_=e,A(!J(e)&&z(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),r=this.extractChild(n.node),i=s.compareTo(r);return i===0?xs(e.name,n.name):i}makePost(e,n){const s=Re(e),r=j.EMPTY_NODE.updateChild(this.indexPath_,s);return new Y(n,r)}maxPost(){const e=j.EMPTY_NODE.updateChild(this.indexPath_,Yr);return new Y(zn,e)}toString(){return ag(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw extends Oo{compare(e,n){const s=e.node.compareTo(n.node);return s===0?xs(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Y.MIN}maxPost(){return Y.MAX}makePost(e,n){const s=Re(e);return new Y(n,s)}toString(){return".value"}}const eC=new Zw;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gg(t){return{type:"value",snapshotNode:t}}function Is(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Pr(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Or(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function tC(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(e){this.index_=e}updateChild(e,n,s,r,i,o){A(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(r).equals(s.getChild(r))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Pr(n,a)):A(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Is(n,s)):o.trackChildChange(Or(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(ve,(r,i)=>{n.hasChild(r)||s.trackChildChange(Pr(r,i))}),n.isLeafNode()||n.forEachChild(ve,(r,i)=>{if(e.hasChild(r)){const o=e.getImmediateChild(r);o.equals(i)||s.trackChildChange(Or(r,i,o))}else s.trackChildChange(Is(r,i))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?j.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e){this.indexedFilter_=new gc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Nr.getStartPost_(e),this.endPost_=Nr.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,r,i,o){return this.matches(new Y(n,s))||(s=j.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,r,i,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=j.EMPTY_NODE);let r=n.withIndex(this.index_);r=r.updatePriority(j.EMPTY_NODE);const i=this;return n.forEachChild(ve,(o,a)=>{i.matches(new Y(o,a))||(r=r.updateImmediateChild(o,j.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Nr(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,r,i,o){return this.rangedFilter_.matches(new Y(n,s))||(s=j.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,r,i,o):this.fullLimitUpdateChild_(e,n,s,i,o)}updateFullNode(e,n,s){let r;if(n.isLeafNode()||n.isEmpty())r=j.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){r=j.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const a=i.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))r=r.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{r=n.withIndex(this.index_),r=r.updatePriority(j.EMPTY_NODE);let i;this.reverse_?i=r.getReverseIterator(this.index_):i=r.getIterator(this.index_);let o=0;for(;i.hasNext();){const a=i.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:r=r.updateImmediateChild(a.name,j.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,r,i){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,p)=>h(p,d)}else o=this.index_.getCompare();const a=e;A(a.numChildren()===this.limit_,"");const l=new Y(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let d=r.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=r.getChildAfterChild(this.index_,d,this.reverse_);const p=d==null?1:o(d,l);if(u&&!s.isEmpty()&&p>=0)return i!=null&&i.trackChildChange(Or(n,s,h)),a.updateImmediateChild(n,s);{i!=null&&i.trackChildChange(Pr(n,h));const m=a.updateImmediateChild(n,j.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(i!=null&&i.trackChildChange(Is(d.name,d.node)),m.updateImmediateChild(d.name,d.node)):m}}else return s.isEmpty()?e:u&&o(c,l)>=0?(i!=null&&(i.trackChildChange(Pr(c.name,c.node)),i.trackChildChange(Is(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,j.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ve}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return A(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return A(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ts}hasEnd(){return this.endSet_}getIndexEndValue(){return A(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return A(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:zn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return A(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ve}copy(){const e=new _c;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function sC(t){return t.loadsAllData()?new gc(t.getIndex()):t.hasLimit()?new nC(t):new Nr(t)}function vh(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ve?n="$priority":t.index_===eC?n="$value":t.index_===ys?n="$key":(A(t.index_ instanceof Xw,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=we(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=we(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+we(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=we(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+we(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function bh(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ve&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi extends rg{constructor(e,n,s,r){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=r,this.log_=zr("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(A(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=Gi.getListenId_(e,s),a={};this.listens_[o]=a;const l=vh(e._queryParams);this.restRequest_(i+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(i,h,!1,s),Cs(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",r(d,null)}})}unlisten(e,n){const s=Gi.getListenId_(e,n);delete this.listens_[s]}get(e){const n=vh(e._queryParams),s=e._path.toString(),r=new Ao;return this.restRequest_(s+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(s,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,i])=>{r&&r.accessToken&&(n.auth=r.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ns(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Ir(a.responseText)}catch{Ke("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&Ke("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(){this.rootNode_=j.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(){return{value:null,children:new Map}}function _g(t,e,n){if(J(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=z(e);t.children.has(s)||t.children.set(s,zi());const r=t.children.get(s);e=fe(e),_g(r,e,n)}}function ll(t,e,n){t.value!==null?n(e,t.value):iC(t,(s,r)=>{const i=new ue(e.toString()+"/"+s);ll(r,i,n)})}function iC(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ye(this.last_,(s,r)=>{n[s]=n[s]-r}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eh=10*1e3,aC=30*1e3,lC=5*60*1e3;class cC{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new oC(e);const s=Eh+(aC-Eh)*Math.random();pr(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Ye(e,(r,i)=>{i>0&&Qt(this.statsToReport_,r)&&(n[r]=i,s=!0)}),s&&this.server_.reportStats(n),pr(this.reportStats_.bind(this),Math.floor(Math.random()*2*lC))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(pt||(pt={}));function mg(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function mc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function yc(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=pt.ACK_USER_WRITE,this.source=mg()}operationForChild(e){if(J(this.path)){if(this.affectedTree.value!=null)return A(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ue(e));return new Yi(Z(),n,this.revert)}}else return A(z(this.path)===e,"operationForChild called for unrelated child."),new Yi(fe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e,n){this.source=e,this.path=n,this.type=pt.LISTEN_COMPLETE}operationForChild(e){return J(this.path)?new kr(this.source,Z()):new kr(this.source,fe(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=pt.OVERWRITE}operationForChild(e){return J(this.path)?new Yn(this.source,Z(),this.snap.getImmediateChild(e)):new Yn(this.source,fe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=pt.MERGE}operationForChild(e){if(J(this.path)){const n=this.children.subtree(new ue(e));return n.isEmpty()?null:n.value?new Yn(this.source,Z(),n.value):new xr(this.source,Z(),n)}else return A(z(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new xr(this.source,fe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(J(e))return this.isFullyInitialized()&&!this.filtered_;const n=z(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function hC(t,e,n,s){const r=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(tC(o.childName,o.snapshotNode))}),Zs(t,r,"child_removed",e,s,n),Zs(t,r,"child_added",e,s,n),Zs(t,r,"child_moved",i,s,n),Zs(t,r,"child_changed",e,s,n),Zs(t,r,"value",e,s,n),r}function Zs(t,e,n,s,r,i){const o=s.filter(a=>a.type===n);o.sort((a,l)=>fC(t,a,l)),o.forEach(a=>{const l=dC(t,a,i);r.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function dC(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function fC(t,e,n){if(e.childName==null||n.childName==null)throw Os("Should only compare child_ events.");const s=new Y(e.childName,e.snapshotNode),r=new Y(n.childName,n.snapshotNode);return t.index_.compare(s,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function No(t,e){return{eventCache:t,serverCache:e}}function gr(t,e,n,s){return No(new Cn(e,n,s),t.serverCache)}function yg(t,e,n,s){return No(t.eventCache,new Cn(e,n,s))}function Ji(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Jn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wa;const pC=()=>(wa||(wa=new qe(ZE)),wa);class _e{constructor(e,n=pC()){this.value=e,this.children=n}static fromObject(e){let n=new _e(null);return Ye(e,(s,r)=>{n=n.set(new ue(s),r)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Z(),value:this.value};if(J(e))return null;{const s=z(e),r=this.children.get(s);if(r!==null){const i=r.findRootMostMatchingPathAndValue(fe(e),n);return i!=null?{path:Ce(new ue(s),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(J(e))return this;{const n=z(e),s=this.children.get(n);return s!==null?s.subtree(fe(e)):new _e(null)}}set(e,n){if(J(e))return new _e(n,this.children);{const s=z(e),i=(this.children.get(s)||new _e(null)).set(fe(e),n),o=this.children.insert(s,i);return new _e(this.value,o)}}remove(e){if(J(e))return this.children.isEmpty()?new _e(null):new _e(null,this.children);{const n=z(e),s=this.children.get(n);if(s){const r=s.remove(fe(e));let i;return r.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,r),this.value===null&&i.isEmpty()?new _e(null):new _e(this.value,i)}else return this}}get(e){if(J(e))return this.value;{const n=z(e),s=this.children.get(n);return s?s.get(fe(e)):null}}setTree(e,n){if(J(e))return n;{const s=z(e),i=(this.children.get(s)||new _e(null)).setTree(fe(e),n);let o;return i.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,i),new _e(this.value,o)}}fold(e){return this.fold_(Z(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((r,i)=>{s[r]=i.fold_(Ce(e,r),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Z(),n)}findOnPath_(e,n,s){const r=this.value?s(n,this.value):!1;if(r)return r;if(J(e))return null;{const i=z(e),o=this.children.get(i);return o?o.findOnPath_(fe(e),Ce(n,i),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Z(),n)}foreachOnPath_(e,n,s){if(J(e))return this;{this.value&&s(n,this.value);const r=z(e),i=this.children.get(r);return i?i.foreachOnPath_(fe(e),Ce(n,r),s):new _e(null)}}foreach(e){this.foreach_(Z(),e)}foreach_(e,n){this.children.inorderTraversal((s,r)=>{r.foreach_(Ce(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.writeTree_=e}static empty(){return new _t(new _e(null))}}function _r(t,e,n){if(J(e))return new _t(new _e(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const r=s.path;let i=s.value;const o=He(r,e);return i=i.updateChild(o,n),new _t(t.writeTree_.set(r,i))}else{const r=new _e(n),i=t.writeTree_.setTree(e,r);return new _t(i)}}}function wh(t,e,n){let s=t;return Ye(n,(r,i)=>{s=_r(s,Ce(e,r),i)}),s}function Ch(t,e){if(J(e))return _t.empty();{const n=t.writeTree_.setTree(e,new _e(null));return new _t(n)}}function cl(t,e){return es(t,e)!=null}function es(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(He(n.path,e)):null}function Sh(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ve,(s,r)=>{e.push(new Y(s,r))}):t.writeTree_.children.inorderTraversal((s,r)=>{r.value!=null&&e.push(new Y(s,r.value))}),e}function bn(t,e){if(J(e))return t;{const n=es(t,e);return n!=null?new _t(new _e(n)):new _t(t.writeTree_.subtree(e))}}function ul(t){return t.writeTree_.isEmpty()}function Rs(t,e){return vg(Z(),t.writeTree_,e)}function vg(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((r,i)=>{r===".priority"?(A(i.value!==null,"Priority writes must always be leaf nodes"),s=i.value):n=vg(Ce(t,r),i,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Ce(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ko(t,e){return Cg(e,t)}function gC(t,e,n,s,r){A(s>t.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:r}),r&&(t.visibleWrites=_r(t.visibleWrites,e,n)),t.lastWriteId=s}function _C(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function mC(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);A(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let r=s.visible,i=!1,o=t.allWrites.length-1;for(;r&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&yC(a,s.path)?r=!1:ft(s.path,a.path)&&(i=!0)),o--}if(r){if(i)return vC(t),!0;if(s.snap)t.visibleWrites=Ch(t.visibleWrites,s.path);else{const a=s.children;Ye(a,l=>{t.visibleWrites=Ch(t.visibleWrites,Ce(s.path,l))})}return!0}else return!1}function yC(t,e){if(t.snap)return ft(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ft(Ce(t.path,n),e))return!0;return!1}function vC(t){t.visibleWrites=bg(t.allWrites,bC,Z()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function bC(t){return t.visible}function bg(t,e,n){let s=_t.empty();for(let r=0;r<t.length;++r){const i=t[r];if(e(i)){const o=i.path;let a;if(i.snap)ft(n,o)?(a=He(n,o),s=_r(s,a,i.snap)):ft(o,n)&&(a=He(o,n),s=_r(s,Z(),i.snap.getChild(a)));else if(i.children){if(ft(n,o))a=He(n,o),s=wh(s,a,i.children);else if(ft(o,n))if(a=He(o,n),J(a))s=wh(s,Z(),i.children);else{const l=Cs(i.children,z(a));if(l){const c=l.getChild(fe(a));s=_r(s,Z(),c)}}}else throw Os("WriteRecord should have .snap or .children")}}return s}function Eg(t,e,n,s,r){if(!s&&!r){const i=es(t.visibleWrites,e);if(i!=null)return i;{const o=bn(t.visibleWrites,e);if(ul(o))return n;if(n==null&&!cl(o,Z()))return null;{const a=n||j.EMPTY_NODE;return Rs(o,a)}}}else{const i=bn(t.visibleWrites,e);if(!r&&ul(i))return n;if(!r&&n==null&&!cl(i,Z()))return null;{const o=function(c){return(c.visible||r)&&(!s||!~s.indexOf(c.writeId))&&(ft(c.path,e)||ft(e,c.path))},a=bg(t.allWrites,o,e),l=n||j.EMPTY_NODE;return Rs(a,l)}}}function EC(t,e,n){let s=j.EMPTY_NODE;const r=es(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(ve,(i,o)=>{s=s.updateImmediateChild(i,o)}),s;if(n){const i=bn(t.visibleWrites,e);return n.forEachChild(ve,(o,a)=>{const l=Rs(bn(i,new ue(o)),a);s=s.updateImmediateChild(o,l)}),Sh(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const i=bn(t.visibleWrites,e);return Sh(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function wC(t,e,n,s,r){A(s||r,"Either existingEventSnap or existingServerSnap must exist");const i=Ce(e,n);if(cl(t.visibleWrites,i))return null;{const o=bn(t.visibleWrites,i);return ul(o)?r.getChild(n):Rs(o,r.getChild(n))}}function CC(t,e,n,s){const r=Ce(e,n),i=es(t.visibleWrites,r);if(i!=null)return i;if(s.isCompleteForChild(n)){const o=bn(t.visibleWrites,r);return Rs(o,s.getNode().getImmediateChild(n))}else return null}function SC(t,e){return es(t.visibleWrites,e)}function TC(t,e,n,s,r,i,o){let a;const l=bn(t.visibleWrites,e),c=es(l,Z());if(c!=null)a=c;else if(n!=null)a=Rs(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=i?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let p=d.getNext();for(;p&&u.length<r;)h(p,s)!==0&&u.push(p),p=d.getNext();return u}else return[]}function IC(){return{visibleWrites:_t.empty(),allWrites:[],lastWriteId:-1}}function Qi(t,e,n,s){return Eg(t.writeTree,t.treePath,e,n,s)}function vc(t,e){return EC(t.writeTree,t.treePath,e)}function Th(t,e,n,s){return wC(t.writeTree,t.treePath,e,n,s)}function Xi(t,e){return SC(t.writeTree,Ce(t.treePath,e))}function RC(t,e,n,s,r,i){return TC(t.writeTree,t.treePath,e,n,s,r,i)}function bc(t,e,n){return CC(t.writeTree,t.treePath,e,n)}function wg(t,e){return Cg(Ce(t.treePath,e),t.writeTree)}function Cg(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;A(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),A(s!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(s);if(r){const i=r.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(s,Or(s,e.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(s,Pr(s,r.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(s,Is(s,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(s,Or(s,e.snapshotNode,r.oldSnap));else throw Os("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Sg=new PC;class Ec{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Cn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return bc(this.writes_,e,s)}}getChildAfterChild(e,n,s){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Jn(this.viewCache_),i=RC(this.writes_,r,n,1,s,e);return i.length===0?null:i[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OC(t){return{filter:t}}function NC(t,e){A(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),A(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function kC(t,e,n,s,r){const i=new AC;let o,a;if(n.type===pt.OVERWRITE){const c=n;c.source.fromUser?o=hl(t,e,c.path,c.snap,s,r,i):(A(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!J(c.path),o=Zi(t,e,c.path,c.snap,s,r,a,i))}else if(n.type===pt.MERGE){const c=n;c.source.fromUser?o=DC(t,e,c.path,c.children,s,r,i):(A(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=dl(t,e,c.path,c.children,s,r,a,i))}else if(n.type===pt.ACK_USER_WRITE){const c=n;c.revert?o=FC(t,e,c.path,s,r,i):o=LC(t,e,c.path,c.affectedTree,s,r,i)}else if(n.type===pt.LISTEN_COMPLETE)o=MC(t,e,n.path,s,i);else throw Os("Unknown operation type: "+n.type);const l=i.getChanges();return xC(e,o,l),{viewCache:o,changes:l}}function xC(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const r=s.getNode().isLeafNode()||s.getNode().isEmpty(),i=Ji(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!s.getNode().equals(i)||!s.getNode().getPriority().equals(i.getPriority()))&&n.push(gg(Ji(e)))}}function Tg(t,e,n,s,r,i){const o=e.eventCache;if(Xi(s,n)!=null)return e;{let a,l;if(J(n))if(A(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Jn(e),u=c instanceof j?c:j.EMPTY_NODE,h=vc(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,i)}else{const c=Qi(s,Jn(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,i)}else{const c=z(n);if(c===".priority"){A(wn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=Th(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=fe(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=Th(s,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=bc(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,r,i):a=o.getNode()}}return gr(e,a,o.isFullyInitialized()||J(n),t.filter.filtersNodes())}}function Zi(t,e,n,s,r,i,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(J(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),p,null)}else{const p=z(n);if(!l.isCompleteForPath(n)&&wn(n)>1)return e;const _=fe(n),b=l.getNode().getImmediateChild(p).updateChild(_,s);p===".priority"?c=u.updatePriority(l.getNode(),b):c=u.updateChild(l.getNode(),p,b,_,Sg,null)}const h=yg(e,c,l.isFullyInitialized()||J(n),u.filtersNodes()),d=new Ec(r,h,i);return Tg(t,h,n,r,d,a)}function hl(t,e,n,s,r,i,o){const a=e.eventCache;let l,c;const u=new Ec(r,e,i);if(J(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=gr(e,c,!0,t.filter.filtersNodes());else{const h=z(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=gr(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=fe(n),p=a.getNode().getImmediateChild(h);let _;if(J(d))_=s;else{const m=u.getCompleteChild(h);m!=null?og(d)===".priority"&&m.getChild(lg(d)).isEmpty()?_=m:_=m.updateChild(d,s):_=j.EMPTY_NODE}if(p.equals(_))l=e;else{const m=t.filter.updateChild(a.getNode(),h,_,d,u,o);l=gr(e,m,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Ih(t,e){return t.eventCache.isCompleteForChild(e)}function DC(t,e,n,s,r,i,o){let a=e;return s.foreach((l,c)=>{const u=Ce(n,l);Ih(e,z(u))&&(a=hl(t,a,u,c,r,i,o))}),s.foreach((l,c)=>{const u=Ce(n,l);Ih(e,z(u))||(a=hl(t,a,u,c,r,i,o))}),a}function Rh(t,e,n){return n.foreach((s,r)=>{e=e.updateChild(s,r)}),e}function dl(t,e,n,s,r,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;J(n)?c=s:c=new _e(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const p=e.serverCache.getNode().getImmediateChild(h),_=Rh(t,p,d);l=Zi(t,l,new ue(h),_,r,i,o,a)}}),c.children.inorderTraversal((h,d)=>{const p=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!p){const _=e.serverCache.getNode().getImmediateChild(h),m=Rh(t,_,d);l=Zi(t,l,new ue(h),m,r,i,o,a)}}),l}function LC(t,e,n,s,r,i,o){if(Xi(r,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(J(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Zi(t,e,n,l.getNode().getChild(n),r,i,a,o);if(J(n)){let c=new _e(null);return l.getNode().forEachChild(ys,(u,h)=>{c=c.set(new ue(u),h)}),dl(t,e,n,c,r,i,a,o)}else return e}else{let c=new _e(null);return s.foreach((u,h)=>{const d=Ce(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),dl(t,e,n,c,r,i,a,o)}}function MC(t,e,n,s,r){const i=e.serverCache,o=yg(e,i.getNode(),i.isFullyInitialized()||J(n),i.isFiltered());return Tg(t,o,n,s,Sg,r)}function FC(t,e,n,s,r,i){let o;if(Xi(s,n)!=null)return e;{const a=new Ec(s,e,r),l=e.eventCache.getNode();let c;if(J(n)||z(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Qi(s,Jn(e));else{const h=e.serverCache.getNode();A(h instanceof j,"serverChildren would be complete if leaf node"),u=vc(s,h)}u=u,c=t.filter.updateFullNode(l,u,i)}else{const u=z(n);let h=bc(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,fe(n),a,i):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,j.EMPTY_NODE,fe(n),a,i):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Qi(s,Jn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,i)))}return o=e.serverCache.isFullyInitialized()||Xi(s,Z())!=null,gr(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,r=new gc(s.getIndex()),i=sC(s);this.processor_=OC(i);const o=n.serverCache,a=n.eventCache,l=r.updateFullNode(j.EMPTY_NODE,o.getNode(),null),c=i.updateFullNode(j.EMPTY_NODE,a.getNode(),null),u=new Cn(l,o.isFullyInitialized(),r.filtersNodes()),h=new Cn(c,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=No(h,u),this.eventGenerator_=new uC(this.query_)}get query(){return this.query_}}function UC(t){return t.viewCache_.serverCache.getNode()}function BC(t){return Ji(t.viewCache_)}function HC(t,e){const n=Jn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!J(e)&&!n.getImmediateChild(z(e)).isEmpty())?n.getChild(e):null}function Ah(t){return t.eventRegistrations_.length===0}function jC(t,e){t.eventRegistrations_.push(e)}function Ph(t,e,n){const s=[];if(n){A(e==null,"A cancel should cancel all event registrations.");const r=t.query._path;t.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(n,r);o&&s.push(o)})}if(e){let r=[];for(let i=0;i<t.eventRegistrations_.length;++i){const o=t.eventRegistrations_[i];if(!o.matches(e))r.push(o);else if(e.hasAnyCallback()){r=r.concat(t.eventRegistrations_.slice(i+1));break}}t.eventRegistrations_=r}else t.eventRegistrations_=[];return s}function Oh(t,e,n,s){e.type===pt.MERGE&&e.source.queryId!==null&&(A(Jn(t.viewCache_),"We should always have a full cache before handling merges"),A(Ji(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,i=kC(t.processor_,r,e,n,s);return NC(t.processor_,i.viewCache),A(i.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,Ig(t,i.changes,i.viewCache.eventCache.getNode(),null)}function WC(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ve,(i,o)=>{s.push(Is(i,o))}),n.isFullyInitialized()&&s.push(gg(n.getNode())),Ig(t,s,n.getNode(),e)}function Ig(t,e,n,s){const r=s?[s]:t.eventRegistrations_;return hC(t.eventGenerator_,e,n,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eo;class Rg{constructor(){this.views=new Map}}function VC(t){A(!eo,"__referenceConstructor has already been defined"),eo=t}function qC(){return A(eo,"Reference.ts has not been loaded"),eo}function KC(t){return t.views.size===0}function wc(t,e,n,s){const r=e.source.queryId;if(r!==null){const i=t.views.get(r);return A(i!=null,"SyncTree gave us an op for an invalid query."),Oh(i,e,n,s)}else{let i=[];for(const o of t.views.values())i=i.concat(Oh(o,e,n,s));return i}}function Ag(t,e,n,s,r){const i=e._queryIdentifier,o=t.views.get(i);if(!o){let a=Qi(n,r?s:null),l=!1;a?l=!0:s instanceof j?(a=vc(n,s),l=!1):(a=j.EMPTY_NODE,l=!1);const c=No(new Cn(a,l,!1),new Cn(s,r,!1));return new $C(e,c)}return o}function GC(t,e,n,s,r,i){const o=Ag(t,e,s,r,i);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),jC(o,n),WC(o,n)}function zC(t,e,n,s){const r=e._queryIdentifier,i=[];let o=[];const a=Sn(t);if(r==="default")for(const[l,c]of t.views.entries())o=o.concat(Ph(c,n,s)),Ah(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||i.push(c.query));else{const l=t.views.get(r);l&&(o=o.concat(Ph(l,n,s)),Ah(l)&&(t.views.delete(r),l.query._queryParams.loadsAllData()||i.push(l.query)))}return a&&!Sn(t)&&i.push(new(qC())(e._repo,e._path)),{removed:i,events:o}}function Pg(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function En(t,e){let n=null;for(const s of t.views.values())n=n||HC(s,e);return n}function Og(t,e){if(e._queryParams.loadsAllData())return xo(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Ng(t,e){return Og(t,e)!=null}function Sn(t){return xo(t)!=null}function xo(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let to;function YC(t){A(!to,"__referenceConstructor has already been defined"),to=t}function JC(){return A(to,"Reference.ts has not been loaded"),to}let QC=1;class Nh{constructor(e){this.listenProvider_=e,this.syncPointTree_=new _e(null),this.pendingWriteTree_=IC(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function kg(t,e,n,s,r){return gC(t.pendingWriteTree_,e,n,s,r),r?Qr(t,new Yn(mg(),e,n)):[]}function Bn(t,e,n=!1){const s=_C(t.pendingWriteTree_,e);if(mC(t.pendingWriteTree_,e)){let i=new _e(null);return s.snap!=null?i=i.set(Z(),!0):Ye(s.children,o=>{i=i.set(new ue(o),!0)}),Qr(t,new Yi(s.path,i,n))}else return[]}function Jr(t,e,n){return Qr(t,new Yn(mc(),e,n))}function XC(t,e,n){const s=_e.fromObject(n);return Qr(t,new xr(mc(),e,s))}function ZC(t,e){return Qr(t,new kr(mc(),e))}function eS(t,e,n){const s=Sc(t,n);if(s){const r=Tc(s),i=r.path,o=r.queryId,a=He(i,e),l=new kr(yc(o),a);return Ic(t,i,l)}else return[]}function no(t,e,n,s,r=!1){const i=e._path,o=t.syncPointTree_.get(i);let a=[];if(o&&(e._queryIdentifier==="default"||Ng(o,e))){const l=zC(o,e,n,s);KC(o)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const c=l.removed;if(a=l.events,!r){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(i,(d,p)=>Sn(p));if(u&&!h){const d=t.syncPointTree_.subtree(i);if(!d.isEmpty()){const p=sS(d);for(let _=0;_<p.length;++_){const m=p[_],b=m.query,I=Mg(t,m);t.listenProvider_.startListening(mr(b),Dr(t,b),I.hashFn,I.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(mr(e),null):c.forEach(d=>{const p=t.queryToTagMap.get(Do(d));t.listenProvider_.stopListening(mr(d),p)}))}rS(t,c)}return a}function xg(t,e,n,s){const r=Sc(t,s);if(r!=null){const i=Tc(r),o=i.path,a=i.queryId,l=He(o,e),c=new Yn(yc(a),l,n);return Ic(t,o,c)}else return[]}function tS(t,e,n,s){const r=Sc(t,s);if(r){const i=Tc(r),o=i.path,a=i.queryId,l=He(o,e),c=_e.fromObject(n),u=new xr(yc(a),l,c);return Ic(t,o,u)}else return[]}function fl(t,e,n,s=!1){const r=e._path;let i=null,o=!1;t.syncPointTree_.foreachOnPath(r,(d,p)=>{const _=He(d,r);i=i||En(p,_),o=o||Sn(p)});let a=t.syncPointTree_.get(r);a?(o=o||Sn(a),i=i||En(a,Z())):(a=new Rg,t.syncPointTree_=t.syncPointTree_.set(r,a));let l;i!=null?l=!0:(l=!1,i=j.EMPTY_NODE,t.syncPointTree_.subtree(r).foreachChild((p,_)=>{const m=En(_,Z());m&&(i=i.updateImmediateChild(p,m))}));const c=Ng(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=Do(e);A(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const p=iS();t.queryToTagMap.set(d,p),t.tagToQueryMap.set(p,d)}const u=ko(t.pendingWriteTree_,r);let h=GC(a,e,n,u,i,l);if(!c&&!o&&!s){const d=Og(a,e);h=h.concat(oS(t,e,d))}return h}function Cc(t,e,n){const r=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=He(o,e),c=En(a,l);if(c)return c});return Eg(r,e,i,n,!0)}function nS(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const h=He(c,n);s=s||En(u,h)});let r=t.syncPointTree_.get(n);r?s=s||En(r,Z()):(r=new Rg,t.syncPointTree_=t.syncPointTree_.set(n,r));const i=s!=null,o=i?new Cn(s,!0,!1):null,a=ko(t.pendingWriteTree_,e._path),l=Ag(r,e,a,i?o.getNode():j.EMPTY_NODE,i);return BC(l)}function Qr(t,e){return Dg(e,t.syncPointTree_,null,ko(t.pendingWriteTree_,Z()))}function Dg(t,e,n,s){if(J(t.path))return Lg(t,e,n,s);{const r=e.get(Z());n==null&&r!=null&&(n=En(r,Z()));let i=[];const o=z(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=wg(s,o);i=i.concat(Dg(a,l,c,u))}return r&&(i=i.concat(wc(r,t,s,n))),i}}function Lg(t,e,n,s){const r=e.get(Z());n==null&&r!=null&&(n=En(r,Z()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=wg(s,o),u=t.operationForChild(o);u&&(i=i.concat(Lg(u,a,l,c)))}),r&&(i=i.concat(wc(r,t,s,n))),i}function Mg(t,e){const n=e.query,s=Dr(t,n);return{hashFn:()=>(UC(e)||j.EMPTY_NODE).hash(),onComplete:r=>{if(r==="ok")return s?eS(t,n._path,s):ZC(t,n._path);{const i=nw(r,n);return no(t,n,null,i)}}}}function Dr(t,e){const n=Do(e);return t.queryToTagMap.get(n)}function Do(t){return t._path.toString()+"$"+t._queryIdentifier}function Sc(t,e){return t.tagToQueryMap.get(e)}function Tc(t){const e=t.indexOf("$");return A(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ue(t.substr(0,e))}}function Ic(t,e,n){const s=t.syncPointTree_.get(e);A(s,"Missing sync point for query tag that we're tracking");const r=ko(t.pendingWriteTree_,e);return wc(s,n,r,null)}function sS(t){return t.fold((e,n,s)=>{if(n&&Sn(n))return[xo(n)];{let r=[];return n&&(r=Pg(n)),Ye(s,(i,o)=>{r=r.concat(o)}),r}})}function mr(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(JC())(t._repo,t._path):t}function rS(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const r=Do(s),i=t.queryToTagMap.get(r);t.queryToTagMap.delete(r),t.tagToQueryMap.delete(i)}}}function iS(){return QC++}function oS(t,e,n){const s=e._path,r=Dr(t,e),i=Mg(t,n),o=t.listenProvider_.startListening(mr(e),r,i.hashFn,i.onComplete),a=t.syncPointTree_.subtree(s);if(r)A(!Sn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!J(c)&&u&&Sn(u))return[xo(u).query];{let d=[];return u&&(d=d.concat(Pg(u).map(p=>p.query))),Ye(h,(p,_)=>{d=d.concat(_)}),d}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(mr(u),Dr(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Rc(n)}node(){return this.node_}}class Ac{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ce(this.path_,e);return new Ac(this.syncTree_,n)}node(){return Cc(this.syncTree_,this.path_)}}const aS=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},kh=function(t,e,n){if(!t||typeof t!="object")return t;if(A(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return lS(t[".sv"],e,n);if(typeof t[".sv"]=="object")return cS(t[".sv"],e);A(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},lS=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:A(!1,"Unexpected server value: "+t)}},cS=function(t,e,n){t.hasOwnProperty("increment")||A(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&A(!1,"Unexpected increment value: "+s);const r=e.node();if(A(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return s;const o=r.getValue();return typeof o!="number"?s:o+s},uS=function(t,e,n,s){return Pc(e,new Ac(n,t),s)},Fg=function(t,e,n){return Pc(t,new Rc(e),n)};function Pc(t,e,n){const s=t.getPriority().val(),r=kh(s,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=kh(o.getValue(),e,n);return a!==o.getValue()||r!==o.getPriority().val()?new Te(a,Re(r)):t}else{const o=t;return i=o,r!==o.getPriority().val()&&(i=i.updatePriority(new Te(r))),o.forEachChild(ve,(a,l)=>{const c=Pc(l,e.getImmediateChild(a),n);c!==l&&(i=i.updateImmediateChild(a,c))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Nc(t,e){let n=e instanceof ue?e:new ue(e),s=t,r=z(n);for(;r!==null;){const i=Cs(s.node.children,r)||{children:{},childCount:0};s=new Oc(r,s,i),n=fe(n),r=z(n)}return s}function Ls(t){return t.node.value}function $g(t,e){t.node.value=e,pl(t)}function Ug(t){return t.node.childCount>0}function hS(t){return Ls(t)===void 0&&!Ug(t)}function Lo(t,e){Ye(t.node.children,(n,s)=>{e(new Oc(n,t,s))})}function Bg(t,e,n,s){n&&!s&&e(t),Lo(t,r=>{Bg(r,e,!0,s)}),n&&s&&e(t)}function dS(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Xr(t){return new ue(t.parent===null?t.name:Xr(t.parent)+"/"+t.name)}function pl(t){t.parent!==null&&fS(t.parent,t.name,t)}function fS(t,e,n){const s=hS(n),r=Qt(t.node.children,e);s&&r?(delete t.node.children[e],t.node.childCount--,pl(t)):!s&&!r&&(t.node.children[e]=n.node,t.node.childCount++,pl(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pS=/[\[\].#$\/\u0000-\u001F\u007F]/,gS=/[\[\].#$\u0000-\u001F\u007F]/,Ca=10*1024*1024,Hg=function(t){return typeof t=="string"&&t.length!==0&&!pS.test(t)},jg=function(t){return typeof t=="string"&&t.length!==0&&!gS.test(t)},_S=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),jg(t)},mS=function(t,e,n,s){kc(rc(t,"value"),e,n)},kc=function(t,e,n){const s=n instanceof ue?new Lw(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Mn(s));if(typeof e=="function")throw new Error(t+"contains a function "+Mn(s)+" with contents = "+e.toString());if(Up(e))throw new Error(t+"contains "+e.toString()+" "+Mn(s));if(typeof e=="string"&&e.length>Ca/3&&Po(e)>Ca)throw new Error(t+"contains a string greater than "+Ca+" utf8 bytes "+Mn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,i=!1;if(Ye(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!Hg(o)))throw new Error(t+" contains an invalid key ("+o+") "+Mn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Mw(s,o),kc(t,a,s),Fw(s)}),r&&i)throw new Error(t+' contains ".value" child '+Mn(s)+" in addition to actual children.")}},Wg=function(t,e,n,s){if(!jg(n))throw new Error(rc(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},yS=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Wg(t,e,n)},vS=function(t,e){if(z(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},bS=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Hg(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!_S(n))throw new Error(rc(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ES{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function xc(t,e){let n=null;for(let s=0;s<e.length;s++){const r=e[s],i=r.getPath();n!==null&&!dc(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(r)}n&&t.eventLists_.push(n)}function Vg(t,e,n){xc(t,n),qg(t,s=>dc(s,e))}function Dt(t,e,n){xc(t,n),qg(t,s=>ft(s,e)||ft(e,s))}function qg(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const r=t.eventLists_[s];if(r){const i=r.path;e(i)?(wS(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function wS(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();fr&&De("event: "+n.toString()),Ds(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CS="repo_interrupt",SS=25;class TS{constructor(e,n,s,r){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ES,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=zi(),this.transactionQueueTree_=new Oc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function IS(t,e,n){if(t.stats_=uc(t.repoInfo_),t.forceRestClient_||ow())t.server_=new Gi(t.repoInfo_,(s,r,i,o)=>{xh(t,s,r,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Dh(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{we(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new qt(t.repoInfo_,e,(s,r,i,o)=>{xh(t,s,r,i,o)},s=>{Dh(t,s)},s=>{AS(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=hw(t.repoInfo_,()=>new cC(t.stats_,t.server_)),t.infoData_=new rC,t.infoSyncTree_=new Nh({startListening:(s,r,i,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Jr(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Lc(t,"connected",!1),t.serverSyncTree_=new Nh({startListening:(s,r,i,o)=>(t.server_.listen(s,i,r,(a,l)=>{const c=o(a,l);Dt(t.eventQueue_,s._path,c)}),[]),stopListening:(s,r)=>{t.server_.unlisten(s,r)}})}function RS(t){const n=t.infoData_.getNode(new ue(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Dc(t){return aS({timestamp:RS(t)})}function xh(t,e,n,s,r){t.dataUpdateCount++;const i=new ue(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(r)if(s){const l=Hi(n,c=>Re(c));o=tS(t.serverSyncTree_,i,l,r)}else{const l=Re(n);o=xg(t.serverSyncTree_,i,l,r)}else if(s){const l=Hi(n,c=>Re(c));o=XC(t.serverSyncTree_,i,l)}else{const l=Re(n);o=Jr(t.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=Fo(t,i)),Dt(t.eventQueue_,a,o)}function Dh(t,e){Lc(t,"connected",e),e===!1&&NS(t)}function AS(t,e){Ye(e,(n,s)=>{Lc(t,n,s)})}function Lc(t,e,n){const s=new ue("/.info/"+e),r=Re(n);t.infoData_.updateSnapshot(s,r);const i=Jr(t.infoSyncTree_,s,r);Dt(t.eventQueue_,s,i)}function Kg(t){return t.nextWriteId_++}function PS(t,e,n){const s=nS(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(r=>{const i=Re(r).withIndex(e._queryParams.getIndex());fl(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Jr(t.serverSyncTree_,e._path,i);else{const a=Dr(t.serverSyncTree_,e);o=xg(t.serverSyncTree_,e._path,i,a)}return Dt(t.eventQueue_,e._path,o),no(t.serverSyncTree_,e,n,null,!0),i},r=>(Mo(t,"get for query "+we(e)+" failed: "+r),Promise.reject(new Error(r))))}function OS(t,e,n,s,r){Mo(t,"set",{path:e.toString(),value:n,priority:s});const i=Dc(t),o=Re(n,s),a=Cc(t.serverSyncTree_,e),l=Fg(o,a,i),c=Kg(t),u=kg(t.serverSyncTree_,e,l,c,!0);xc(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,p)=>{const _=d==="ok";_||Ke("set at "+e+" failed: "+d);const m=Bn(t.serverSyncTree_,c,!_);Dt(t.eventQueue_,e,m),DS(t,r,d,p)});const h=Qg(t,e);Fo(t,h),Dt(t.eventQueue_,h,[])}function NS(t){Mo(t,"onDisconnectEvents");const e=Dc(t),n=zi();ll(t.onDisconnect_,Z(),(r,i)=>{const o=uS(r,i,t.serverSyncTree_,e);_g(n,r,o)});let s=[];ll(n,Z(),(r,i)=>{s=s.concat(Jr(t.serverSyncTree_,r,i));const o=Qg(t,r);Fo(t,o)}),t.onDisconnect_=zi(),Dt(t.eventQueue_,Z(),s)}function kS(t,e,n){let s;z(e._path)===".info"?s=fl(t.infoSyncTree_,e,n):s=fl(t.serverSyncTree_,e,n),Vg(t.eventQueue_,e._path,s)}function Lh(t,e,n){let s;z(e._path)===".info"?s=no(t.infoSyncTree_,e,n):s=no(t.serverSyncTree_,e,n),Vg(t.eventQueue_,e._path,s)}function xS(t){t.persistentConnection_&&t.persistentConnection_.interrupt(CS)}function Mo(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),De(n,...e)}function DS(t,e,n,s){e&&Ds(()=>{if(n==="ok")e(null);else{const r=(n||"error").toUpperCase();let i=r;s&&(i+=": "+s);const o=new Error(i);o.code=r,e(o)}})}function Gg(t,e,n){return Cc(t.serverSyncTree_,e,n)||j.EMPTY_NODE}function Mc(t,e=t.transactionQueueTree_){if(e||$o(t,e),Ls(e)){const n=Yg(t,e);A(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&LS(t,Xr(e),n)}else Ug(e)&&Lo(e,n=>{Mc(t,n)})}function LS(t,e,n){const s=n.map(c=>c.currentWriteId),r=Gg(t,e,s);let i=r;const o=r.hash();for(let c=0;c<n.length;c++){const u=n[c];A(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=He(e,u.path);i=i.updateChild(h,u.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Mo(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(Bn(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();$o(t,Nc(t.transactionQueueTree_,e)),Mc(t,t.transactionQueueTree_),Dt(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)Ds(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Ke("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Fo(t,e)}},o)}function Fo(t,e){const n=zg(t,e),s=Xr(n),r=Yg(t,n);return MS(t,r,s),s}function MS(t,e,n){if(e.length===0)return;const s=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=He(n,l.path);let u=!1,h;if(A(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,r=r.concat(Bn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=SS)u=!0,h="maxretry",r=r.concat(Bn(t.serverSyncTree_,l.currentWriteId,!0));else{const d=Gg(t,l.path,o);l.currentInputSnapshot=d;const p=e[a].update(d.val());if(p!==void 0){kc("transaction failed: Data returned ",p,l.path);let _=Re(p);typeof p=="object"&&p!=null&&Qt(p,".priority")||(_=_.updatePriority(d.getPriority()));const b=l.currentWriteId,I=Dc(t),R=Fg(_,d,I);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=R,l.currentWriteId=Kg(t),o.splice(o.indexOf(b),1),r=r.concat(kg(t.serverSyncTree_,l.path,R,l.currentWriteId,l.applyLocally)),r=r.concat(Bn(t.serverSyncTree_,b,!0))}else u=!0,h="nodata",r=r.concat(Bn(t.serverSyncTree_,l.currentWriteId,!0))}Dt(t.eventQueue_,n,r),r=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}$o(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Ds(s[a]);Mc(t,t.transactionQueueTree_)}function zg(t,e){let n,s=t.transactionQueueTree_;for(n=z(e);n!==null&&Ls(s)===void 0;)s=Nc(s,n),e=fe(e),n=z(e);return s}function Yg(t,e){const n=[];return Jg(t,e,n),n.sort((s,r)=>s.order-r.order),n}function Jg(t,e,n){const s=Ls(e);if(s)for(let r=0;r<s.length;r++)n.push(s[r]);Lo(e,r=>{Jg(t,r,n)})}function $o(t,e){const n=Ls(e);if(n){let s=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[s]=n[r],s++);n.length=s,$g(e,n.length>0?n:void 0)}Lo(e,s=>{$o(t,s)})}function Qg(t,e){const n=Xr(zg(t,e)),s=Nc(t.transactionQueueTree_,e);return dS(s,r=>{Sa(t,r)}),Sa(t,s),Bg(s,r=>{Sa(t,r)}),n}function Sa(t,e){const n=Ls(e);if(n){const s=[];let r=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(A(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(A(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),r=r.concat(Bn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?$g(e,void 0):n.length=i+1,Dt(t.eventQueue_,Xr(e),r);for(let o=0;o<s.length;o++)Ds(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FS(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let r=n[s];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function $S(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Ke(`Invalid query segment '${n}' in query '${t}'`)}return e}const Mh=function(t,e){const n=US(t),s=n.namespace;n.domain==="firebase.com"&&zt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&zt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||QE();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Qp(n.host,n.secure,s,r,e,"",s!==n.subdomain),path:new ue(n.pathString)}},US=function(t){let e="",n="",s="",r="",i="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(r=FS(t.substring(u,h)));const d=$S(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const _=e.indexOf(".");s=e.substring(0,_).toLowerCase(),n=e.substring(_+1),i=s}"ns"in d&&(i=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:r,namespace:i}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BS{constructor(e,n,s,r){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=r}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+we(this.snapshot.exportVal())}}class HS{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return A(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e,n,s,r){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=r}get key(){return J(this._path)?null:og(this._path)}get ref(){return new Xt(this._repo,this._path)}get _queryIdentifier(){const e=bh(this._queryParams),n=lc(e);return n==="{}"?"default":n}get _queryObject(){return bh(this._queryParams)}isEqual(e){if(e=We(e),!(e instanceof Fc))return!1;const n=this._repo===e._repo,s=dc(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return n&&s&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+Dw(this._path)}}class Xt extends Fc{constructor(e,n){super(e,n,new _c,!1)}get parent(){const e=lg(this._path);return e===null?null:new Xt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Lr{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ue(e),s=gl(this.ref,e);return new Lr(this._node.getChild(n),s,ve)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,r)=>e(new Lr(r,gl(this.ref,s),ve)))}hasChild(e){const n=new ue(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Uo(t,e){return t=We(t),t._checkNotDeleted("ref"),e!==void 0?gl(t._root,e):t._root}function gl(t,e){return t=We(t),z(t._path)===null?yS("child","path",e):Wg("child","path",e),new Xt(t._repo,Ce(t._path,e))}function jS(t,e){t=We(t),vS("set",t._path),mS("set",e,t._path);const n=new Ao;return OS(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function WS(t){t=We(t);const e=new Xg(()=>{}),n=new Bo(e);return PS(t._repo,t,n).then(s=>new Lr(s,new Xt(t._repo,t._path),t._queryParams.getIndex()))}class Bo{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new BS("value",this,new Lr(e.snapshotNode,new Xt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new HS(this,e,n):null}matches(e){return e instanceof Bo?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function VS(t,e,n,s,r){let i;if(typeof s=="object"&&(i=void 0,r=s),typeof s=="function"&&(i=s),r&&r.onlyOnce){const l=n,c=(u,h)=>{Lh(t._repo,t,a),l(u,h)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new Xg(n,i||void 0),a=new Bo(o);return kS(t._repo,t,a),()=>Lh(t._repo,t,a)}function _l(t,e,n,s){return VS(t,"value",e,n,s)}VC(Xt);YC(Xt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qS="FIREBASE_DATABASE_EMULATOR_HOST",ml={};let KS=!1;function GS(t,e,n,s){t.repoInfo_=new Qp(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function zS(t,e,n,s,r){let i=s||t.options.databaseURL;i===void 0&&(t.options.projectId||zt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),De("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Mh(i,r),a=o.repoInfo,l;typeof process<"u"&&nh&&(l=nh[qS]),l?(i=`http://${l}?ns=${a.namespace}`,o=Mh(i,r),a=o.repoInfo):o.repoInfo.secure;const c=new lw(t.name,t.options,e);bS("Invalid Firebase Database URL",o),J(o.path)||zt("Database URL must point to the root of a Firebase Database (not including a child path).");const u=JS(a,t,c,new aw(t.name,n));return new QS(u,t)}function YS(t,e){const n=ml[e];(!n||n[t.key]!==t)&&zt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),xS(t),delete n[t.key]}function JS(t,e,n,s){let r=ml[e.name];r||(r={},ml[e.name]=r);let i=r[t.toURLString()];return i&&zt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new TS(t,KS,n,s),r[t.toURLString()]=i,i}class QS{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(IS(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Xt(this._repo,Z())),this._rootInternal}_delete(){return this._rootInternal!==null&&(YS(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&zt("Cannot call "+e+" on a deleted database.")}}function XS(t=xp(),e){const n=ac(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=Eb("database");s&&ZS(n,...s)}return n}function ZS(t,e,n,s={}){t=We(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&zt("Cannot call useEmulator() after instance has already been initialized.");const r=t._repoInternal;let i;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&zt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),i=new Si(Si.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:wb(s.mockUserToken,t.app.options.projectId);i=new Si(o)}GS(r,e,n,i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eT(t){qE(ks),Ss(new Gn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return zS(s,r,i,n)},"PUBLIC").setMultipleInstances(!0)),vn(sh,rh,t),vn(sh,rh,"esm2017")}qt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};qt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};eT();function $c(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Zg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const tT=Zg,e_=new Kr("auth","Firebase",Zg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so=new ic("@firebase/auth");function nT(t,...e){so.logLevel<=le.WARN&&so.warn(`Auth (${ks}): ${t}`,...e)}function Ti(t,...e){so.logLevel<=le.ERROR&&so.error(`Auth (${ks}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(t,...e){throw Uc(t,...e)}function Ot(t,...e){return Uc(t,...e)}function t_(t,e,n){const s=Object.assign(Object.assign({},tT()),{[e]:n});return new Kr("auth","Firebase",s).create(e,{appName:t.name})}function Kt(t){return t_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Uc(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return e_.create(t,...e)}function V(t,e,...n){if(!t)throw Uc(e,...n)}function jt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ti(e),new Error(e)}function Yt(t,e){t||jt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function sT(){return Fh()==="http:"||Fh()==="https:"}function Fh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(sT()||Sb()||"connection"in navigator)?navigator.onLine:!0}function iT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e,n){this.shortDelay=e,this.longDelay=n,Yt(n>e,"Short delay should be less than long delay!"),this.isMobile=sc()||Rp()}get(){return rT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bc(t,e){Yt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;jt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;jt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;jt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aT=new Zr(3e4,6e4);function Zt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function en(t,e,n,s,r={}){return s_(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Ns(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},i);return Cb()||(c.referrerPolicy="no-referrer"),n_.fetch()(r_(t,t.config.apiHost,n,a),c)})}async function s_(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},oT),e);try{const r=new cT(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw pi(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw pi(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw pi(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw pi(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw t_(t,u,c);mt(t,u)}}catch(r){if(r instanceof An)throw r;mt(t,"network-request-failed",{message:String(r)})}}async function ei(t,e,n,s,r={}){const i=await en(t,e,n,s,r);return"mfaPendingCredential"in i&&mt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function r_(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Bc(t.config,r):`${t.config.apiScheme}://${r}`}function lT(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class cT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Ot(this.auth,"network-request-failed")),aT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function pi(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Ot(t,e,s);return r.customData._tokenResponse=n,r}function $h(t){return t!==void 0&&t.enterprise!==void 0}class uT{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return lT(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function hT(t,e){return en(t,"GET","/v2/recaptchaConfig",Zt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dT(t,e){return en(t,"POST","/v1/accounts:delete",e)}async function i_(t,e){return en(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function fT(t,e=!1){const n=We(t),s=await n.getIdToken(e),r=Hc(s);V(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:yr(Ta(r.auth_time)),issuedAtTime:yr(Ta(r.iat)),expirationTime:yr(Ta(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ta(t){return Number(t)*1e3}function Hc(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Ti("JWT malformed, contained fewer than 3 sections"),null;try{const r=Bi(n);return r?JSON.parse(r):(Ti("Failed to decode base64 JWT payload"),null)}catch(r){return Ti("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Uh(t){const e=Hc(t);return V(e,"internal-error"),V(typeof e.exp<"u","internal-error"),V(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof An&&pT(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function pT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=yr(this.lastLoginAt),this.creationTime=yr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ro(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Mr(t,i_(n,{idToken:s}));V(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?o_(i.providerUserInfo):[],a=mT(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new vl(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function _T(t){const e=We(t);await ro(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function mT(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function o_(t){return t.map(e=>{var{providerId:n}=e,s=$c(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yT(t,e){const n=await s_(t,{},async()=>{const s=Ns({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=r_(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",n_.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function vT(t,e){return en(t,"POST","/v2/accounts:revokeToken",Zt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){V(e.idToken,"internal-error"),V(typeof e.idToken<"u","internal-error"),V(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Uh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){V(e.length!==0,"internal-error");const n=Uh(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(V(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await yT(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new vs;return s&&(V(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(V(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(V(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vs,this.toJSON())}_performRefresh(){return jt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(t,e){V(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Wt{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=$c(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new gT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new vl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Mr(this,this.stsTokenManager.getToken(this.auth,e));return V(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return fT(this,e)}reload(){return _T(this)}_assign(e){this!==e&&(V(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Wt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){V(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await ro(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Rt(this.auth.app))return Promise.reject(Kt(this.auth));const e=await this.getIdToken();return await Mr(this,dT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,m=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,I=(c=n.createdAt)!==null&&c!==void 0?c:void 0,R=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:P,emailVerified:k,isAnonymous:B,providerData:ee,stsTokenManager:Q}=n;V(P&&Q,e,"internal-error");const Pe=vs.fromJSON(this.name,Q);V(typeof P=="string",e,"internal-error"),rn(h,e.name),rn(d,e.name),V(typeof k=="boolean",e,"internal-error"),V(typeof B=="boolean",e,"internal-error"),rn(p,e.name),rn(_,e.name),rn(m,e.name),rn(b,e.name),rn(I,e.name),rn(R,e.name);const Fe=new Wt({uid:P,auth:e,email:d,emailVerified:k,displayName:h,isAnonymous:B,photoURL:_,phoneNumber:p,tenantId:m,stsTokenManager:Pe,createdAt:I,lastLoginAt:R});return ee&&Array.isArray(ee)&&(Fe.providerData=ee.map(rt=>Object.assign({},rt))),b&&(Fe._redirectEventId=b),Fe}static async _fromIdTokenResponse(e,n,s=!1){const r=new vs;r.updateFromServerResponse(n);const i=new Wt({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await ro(i),i}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];V(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?o_(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),a=new vs;a.updateFromIdToken(s);const l=new Wt({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new vl(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bh=new Map;function Vt(t){Yt(t instanceof Function,"Expected a class definition");let e=Bh.get(t);return e?(Yt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Bh.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}a_.type="NONE";const bl=a_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ii(t,e,n){return`firebase:${t}:${e}:${n}`}class bs{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Ii(this.userKey,r.apiKey,i),this.fullPersistenceKey=Ii("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Wt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new bs(Vt(bl),e,s);const r=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=r[0]||Vt(bl);const o=Ii(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=Wt._fromJSON(e,u);c!==i&&(a=h),i=c;break}}catch{}const l=r.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new bs(i,e,s):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new bs(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(h_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(l_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(f_(e))return"Blackberry";if(p_(e))return"Webos";if(c_(e))return"Safari";if((e.includes("chrome/")||u_(e))&&!e.includes("edge/"))return"Chrome";if(d_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function l_(t=je()){return/firefox\//i.test(t)}function c_(t=je()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function u_(t=je()){return/crios\//i.test(t)}function h_(t=je()){return/iemobile/i.test(t)}function d_(t=je()){return/android/i.test(t)}function f_(t=je()){return/blackberry/i.test(t)}function p_(t=je()){return/webos/i.test(t)}function jc(t=je()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function bT(t=je()){var e;return jc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ET(){return Tb()&&document.documentMode===10}function g_(t=je()){return jc(t)||d_(t)||p_(t)||f_(t)||/windows phone/i.test(t)||h_(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __(t,e=[]){let n;switch(t){case"Browser":n=Hh(je());break;case"Worker":n=`${Hh(je())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ks}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CT(t,e={}){return en(t,"GET","/v2/passwordPolicy",Zt(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ST=6;class TT{constructor(e){var n,s,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:ST,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,r,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(r=l.containsLowercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IT{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new jh(this),this.idTokenSubscription=new jh(this),this.beforeStateQueue=new wT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=e_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Vt(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await bs.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await i_(this,{idToken:e}),s=await Wt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Rt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return V(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ro(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=iT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Rt(this.app))return Promise.reject(Kt(this));const n=e?We(e):null;return n&&V(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&V(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Rt(this.app)?Promise.reject(Kt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Rt(this.app)?Promise.reject(Kt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Vt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await CT(this),n=new TT(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Kr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await vT(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Vt(e)||this._popupRedirectResolver;V(n,this,"argument-error"),this.redirectPersistenceManager=await bs.create(this,[Vt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(V(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,r);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return V(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=__(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&nT(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Pn(t){return We(t)}class jh{constructor(e){this.auth=e,this.observer=null,this.addObserver=Db(n=>this.observer=n)}get next(){return V(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ho={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function RT(t){Ho=t}function m_(t){return Ho.loadJS(t)}function AT(){return Ho.recaptchaEnterpriseScript}function PT(){return Ho.gapiScript}function OT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class NT{constructor(){this.enterprise=new kT}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class kT{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const xT="recaptcha-enterprise",y_="NO_RECAPTCHA";class DT{constructor(e){this.type=xT,this.auth=Pn(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{hT(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new uT(l);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function r(i,o,a){const l=window.grecaptcha;$h(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(y_)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new NT().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{s(this.auth).then(a=>{if(!n&&$h(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=AT();l.length!==0&&(l+=a),m_(l).then(()=>{r(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Wh(t,e,n,s=!1,r=!1){const i=new DT(t);let o;if(r)o=y_;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return s?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function io(t,e,n,s,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Wh(t,e,n,n==="getOobCode");return s(t,o)}else return s(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Wh(t,e,n,n==="getOobCode");return s(t,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LT(t,e){const n=ac(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(ji(i,e??{}))return r;mt(r,"already-initialized")}return n.initialize({options:e})}function MT(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Vt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function FT(t,e,n){const s=Pn(t);V(s._canInitEmulator,s,"emulator-config-failed"),V(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=v_(e),{host:o,port:a}=$T(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),UT()}function v_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function $T(t){const e=v_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Vh(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Vh(o)}}}function Vh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function UT(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return jt("not implemented")}_getIdTokenResponse(e){return jt("not implemented")}_linkToIdToken(e,n){return jt("not implemented")}_getReauthenticationResolver(e){return jt("not implemented")}}async function BT(t,e){return en(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HT(t,e){return ei(t,"POST","/v1/accounts:signInWithPassword",Zt(t,e))}async function b_(t,e){return en(t,"POST","/v1/accounts:sendOobCode",Zt(t,e))}async function jT(t,e){return b_(t,e)}async function WT(t,e){return b_(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VT(t,e){return ei(t,"POST","/v1/accounts:signInWithEmailLink",Zt(t,e))}async function qT(t,e){return ei(t,"POST","/v1/accounts:signInWithEmailLink",Zt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr extends Wc{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Fr(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Fr(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return io(e,n,"signInWithPassword",HT);case"emailLink":return VT(e,{email:this._email,oobCode:this._password});default:mt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return io(e,s,"signUpPassword",BT);case"emailLink":return qT(e,{idToken:n,email:this._email,oobCode:this._password});default:mt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Es(t,e){return ei(t,"POST","/v1/accounts:signInWithIdp",Zt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KT="http://localhost";class Qn extends Wc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Qn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):mt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=$c(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Qn(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Es(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Es(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Es(e,n)}buildRequest(){const e={requestUri:KT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ns(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GT(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function zT(t){const e=rr(ir(t)).link,n=e?rr(ir(e)).deep_link_id:null,s=rr(ir(t)).deep_link_id;return(s?rr(ir(s)).link:null)||s||n||e||t}class Vc{constructor(e){var n,s,r,i,o,a;const l=rr(ir(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,h=GT((r=l.mode)!==null&&r!==void 0?r:null);V(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=zT(e);try{return new Vc(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(){this.providerId=Ms.PROVIDER_ID}static credential(e,n){return Fr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Vc.parseLink(n);return V(s,"argument-error"),Fr._fromEmailAndCode(e,s.code,s.tenantId)}}Ms.PROVIDER_ID="password";Ms.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ms.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti extends E_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn extends ti{constructor(){super("facebook.com")}static credential(e){return Qn._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dn.credential(e.oauthAccessToken)}catch{return null}}}dn.FACEBOOK_SIGN_IN_METHOD="facebook.com";dn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends ti{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Qn._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return fn.credential(n,s)}catch{return null}}}fn.GOOGLE_SIGN_IN_METHOD="google.com";fn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn extends ti{constructor(){super("github.com")}static credential(e){return Qn._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pn.credential(e.oauthAccessToken)}catch{return null}}}pn.GITHUB_SIGN_IN_METHOD="github.com";pn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn extends ti{constructor(){super("twitter.com")}static credential(e,n){return Qn._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return gn.credential(n,s)}catch{return null}}}gn.TWITTER_SIGN_IN_METHOD="twitter.com";gn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YT(t,e){return ei(t,"POST","/v1/accounts:signUp",Zt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Wt._fromIdTokenResponse(e,s,r),o=qh(s);return new Xn({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=qh(s);return new Xn({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function qh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo extends An{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,oo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new oo(e,n,s,r)}}function w_(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?oo._fromErrorAndOperation(t,i,e,s):i})}async function JT(t,e,n=!1){const s=await Mr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Xn._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QT(t,e,n=!1){const{auth:s}=t;if(Rt(s.app))return Promise.reject(Kt(s));const r="reauthenticate";try{const i=await Mr(t,w_(s,r,e,t),n);V(i.idToken,s,"internal-error");const o=Hc(i.idToken);V(o,s,"internal-error");const{sub:a}=o;return V(t.uid===a,s,"user-mismatch"),Xn._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&mt(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C_(t,e,n=!1){if(Rt(t.app))return Promise.reject(Kt(t));const s="signIn",r=await w_(t,s,e),i=await Xn._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function XT(t,e){return C_(Pn(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function S_(t){const e=Pn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function ZT(t,e,n){const s=Pn(t);await io(s,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",WT)}async function eI(t,e,n){if(Rt(t.app))return Promise.reject(Kt(t));const s=Pn(t),o=await io(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",YT).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&S_(t),l}),a=await Xn._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function tI(t,e,n){return Rt(t.app)?Promise.reject(Kt(t)):XT(We(t),Ms.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&S_(t),s})}async function Kh(t,e){const n=We(t),r={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()},{email:i}=await jT(n.auth,r);i!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gh(t,e){return We(t).setPersistence(e)}function nI(t,e,n,s){return We(t).onIdTokenChanged(e,n,s)}function sI(t,e,n){return We(t).beforeAuthStateChanged(e,n)}const ao="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ao,"1"),this.storage.removeItem(ao),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rI=1e3,iI=10;class I_ extends T_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=g_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);ET()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,iI):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},rI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}I_.type="LOCAL";const R_=I_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_ extends T_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}A_.type="SESSION";const P_=A_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new jo(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await oI(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}jo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qc(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=qc("",20);r.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(){return window}function lI(t){Nt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O_(){return typeof Nt().WorkerGlobalScope<"u"&&typeof Nt().importScripts=="function"}async function cI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function uI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function hI(){return O_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N_="firebaseLocalStorageDb",dI=1,lo="firebaseLocalStorage",k_="fbase_key";class ni{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Wo(t,e){return t.transaction([lo],e?"readwrite":"readonly").objectStore(lo)}function fI(){const t=indexedDB.deleteDatabase(N_);return new ni(t).toPromise()}function El(){const t=indexedDB.open(N_,dI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(lo,{keyPath:k_})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(lo)?e(s):(s.close(),await fI(),e(await El()))})})}async function zh(t,e,n){const s=Wo(t,!0).put({[k_]:e,value:n});return new ni(s).toPromise()}async function pI(t,e){const n=Wo(t,!1).get(e),s=await new ni(n).toPromise();return s===void 0?null:s.value}function Yh(t,e){const n=Wo(t,!0).delete(e);return new ni(n).toPromise()}const gI=800,_I=3;class x_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await El(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>_I)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return O_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jo._getInstance(hI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await cI(),!this.activeServiceWorker)return;this.sender=new aI(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||uI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await El();return await zh(e,ao,"1"),await Yh(e,ao),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>zh(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>pI(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Yh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Wo(r,!1).getAll();return new ni(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),gI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}x_.type="LOCAL";const mI=x_;new Zr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yI(t,e){return e?Vt(e):(V(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc extends Wc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Es(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Es(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Es(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function vI(t){return C_(t.auth,new Kc(t),t.bypassAuthState)}function bI(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),QT(n,new Kc(t),t.bypassAuthState)}async function EI(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),JT(n,new Kc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return vI;case"linkViaPopup":case"linkViaRedirect":return EI;case"reauthViaPopup":case"reauthViaRedirect":return bI;default:mt(this.auth,"internal-error")}}resolve(e){Yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wI=new Zr(2e3,1e4);class cs extends D_{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,cs.currentPopupAction&&cs.currentPopupAction.cancel(),cs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return V(e,this.auth,"internal-error"),e}async onExecution(){Yt(this.filter.length===1,"Popup operations only handle one event");const e=qc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ot(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ot(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,cs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ot(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,wI.get())};e()}}cs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CI="pendingRedirect",Ri=new Map;class SI extends D_{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Ri.get(this.auth._key());if(!e){try{const s=await TI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Ri.set(this.auth._key(),e)}return this.bypassAuthState||Ri.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function TI(t,e){const n=AI(e),s=RI(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function II(t,e){Ri.set(t._key(),e)}function RI(t){return Vt(t._redirectPersistence)}function AI(t){return Ii(CI,t.config.apiKey,t.name)}async function PI(t,e,n=!1){if(Rt(t.app))return Promise.reject(Kt(t));const s=Pn(t),r=yI(s,e),o=await new SI(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OI=10*60*1e3;class NI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!kI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!L_(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Ot(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=OI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Jh(e))}saveEventToCache(e){this.cachedEventUids.add(Jh(e)),this.lastProcessedEventTime=Date.now()}}function Jh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function L_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function kI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return L_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xI(t,e={}){return en(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,LI=/^https?/;async function MI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await xI(t);for(const n of e)try{if(FI(n))return}catch{}mt(t,"unauthorized-domain")}function FI(t){const e=yl(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!LI.test(n))return!1;if(DI.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $I=new Zr(3e4,6e4);function Qh(){const t=Nt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function UI(t){return new Promise((e,n)=>{var s,r,i;function o(){Qh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Qh(),n(Ot(t,"network-request-failed"))},timeout:$I.get()})}if(!((r=(s=Nt().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Nt().gapi)===null||i===void 0)&&i.load)o();else{const a=OT("iframefcb");return Nt()[a]=()=>{gapi.load?o():n(Ot(t,"network-request-failed"))},m_(`${PT()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ai=null,e})}let Ai=null;function BI(t){return Ai=Ai||UI(t),Ai}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HI=new Zr(5e3,15e3),jI="__/auth/iframe",WI="emulator/auth/iframe",VI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},qI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function KI(t){const e=t.config;V(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Bc(e,WI):`https://${t.config.authDomain}/${jI}`,s={apiKey:e.apiKey,appName:t.name,v:ks},r=qI.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Ns(s).slice(1)}`}async function GI(t){const e=await BI(t),n=Nt().gapi;return V(n,t,"internal-error"),e.open({where:document.body,url:KI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:VI,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Ot(t,"network-request-failed"),a=Nt().setTimeout(()=>{i(o)},HI.get());function l(){Nt().clearTimeout(a),r(s)}s.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},YI=500,JI=600,QI="_blank",XI="http://localhost";class Xh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ZI(t,e,n,s=YI,r=JI){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},zI),{width:s.toString(),height:r.toString(),top:i,left:o}),c=je().toLowerCase();n&&(a=u_(c)?QI:n),l_(c)&&(e=e||XI,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[p,_])=>`${d}${p}=${_},`,"");if(bT(c)&&a!=="_self")return eR(e||"",a),new Xh(null);const h=window.open(e||"",a,u);V(h,t,"popup-blocked");try{h.focus()}catch{}return new Xh(h)}function eR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tR="__/auth/handler",nR="emulator/auth/handler",sR=encodeURIComponent("fac");async function Zh(t,e,n,s,r,i){V(t.config.authDomain,t,"auth-domain-config-required"),V(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:ks,eventId:r};if(e instanceof E_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Za(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries({}))o[u]=h}if(e instanceof ti){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${sR}=${encodeURIComponent(l)}`:"";return`${rR(t)}?${Ns(a).slice(1)}${c}`}function rR({config:t}){return t.emulator?Bc(t,nR):`https://${t.authDomain}/${tR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ia="webStorageSupport";class iR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=P_,this._completeRedirectFn=PI,this._overrideRedirectResult=II}async _openPopup(e,n,s,r){var i;Yt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Zh(e,n,s,yl(),r);return ZI(e,o,qc())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await Zh(e,n,s,yl(),r);return lI(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(Yt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await GI(e),s=new NI(e);return n.register("authEvent",r=>(V(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ia,{type:Ia},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Ia];o!==void 0&&n(!!o),mt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=MI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return g_()||c_()||jc()}}const oR=iR;var ed="@firebase/auth",td="1.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){V(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function cR(t){Ss(new Gn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;V(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:__(t)},c=new IT(s,r,i,l);return MT(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Ss(new Gn("auth-internal",e=>{const n=Pn(e.getProvider("auth").getImmediate());return(s=>new aR(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),vn(ed,td,lR(t)),vn(ed,td,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uR=5*60,hR=Ip("authIdTokenMaxAge")||uR;let nd=null;const dR=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>hR)return;const r=n==null?void 0:n.token;nd!==r&&(nd=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function $r(t=xp()){const e=ac(t,"auth");if(e.isInitialized())return e.getImmediate();const n=LT(t,{popupRedirectResolver:oR,persistence:[mI,R_,P_]}),s=Ip("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=dR(i.toString());sI(n,o,()=>o(n.currentUser)),nI(n,a=>o(a))}}const r=Sp("auth");return r&&FT(n,`http://${r}`),n}function fR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}RT({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Ot("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",fR().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});cR("Browser");var pR="firebase",gR="11.0.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vn(pR,gR,"app");const _R={apiKey:"AIzaSyDU95egjb7rapaUJuVJYu0ZeSbP0OLaeCE",authDomain:"autolearn-members.asia-southeast1.firebaseapp.com",projectId:"autolearn-members",storageBucket:"autolearn-members.appspot.com",messagingSenderId:"535565819374",appId:"1:535565819374:web:ccfe472f513439f3a002ff",measurementId:"G-NTHZSSX71G",databaseURL:"https://autolearn-members-default-rtdb.asia-southeast1.firebasedatabase.app/"},Gc=kp(_R);$r(Gc);const Vo=XS(Gc),mR=Uo(Vo,"projects"),yR=Uo(Vo,"supervisors"),vR=Uo(Vo,"users");var gi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function bR(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function ER(t,e,n){var s;return n(t,function(r,i,o){if(e(r,i,o))return s=i,!1}),s}var wR=ER;function CR(t){return function(e,n,s){for(var r=-1,i=Object(e),o=s(e),a=o.length;a--;){var l=o[t?a:++r];if(n(i[l],l,i)===!1)break}return e}}var SR=CR,TR=SR,IR=TR(),RR=IR;function AR(t,e){for(var n=-1,s=Array(t);++n<t;)s[n]=e(n);return s}var PR=AR,OR=typeof gi=="object"&&gi&&gi.Object===Object&&gi,M_=OR,NR=M_,kR=typeof self=="object"&&self&&self.Object===Object&&self,xR=NR||kR||Function("return this")(),tn=xR,DR=tn,LR=DR.Symbol,qo=LR,sd=qo,F_=Object.prototype,MR=F_.hasOwnProperty,FR=F_.toString,er=sd?sd.toStringTag:void 0;function $R(t){var e=MR.call(t,er),n=t[er];try{t[er]=void 0;var s=!0}catch{}var r=FR.call(t);return s&&(e?t[er]=n:delete t[er]),r}var UR=$R,BR=Object.prototype,HR=BR.toString;function jR(t){return HR.call(t)}var WR=jR,rd=qo,VR=UR,qR=WR,KR="[object Null]",GR="[object Undefined]",id=rd?rd.toStringTag:void 0;function zR(t){return t==null?t===void 0?GR:KR:id&&id in Object(t)?VR(t):qR(t)}var si=zR;function YR(t){return t!=null&&typeof t=="object"}var ri=YR,JR=si,QR=ri,XR="[object Arguments]";function ZR(t){return QR(t)&&JR(t)==XR}var e0=ZR,od=e0,t0=ri,$_=Object.prototype,n0=$_.hasOwnProperty,s0=$_.propertyIsEnumerable,r0=od(function(){return arguments}())?od:function(t){return t0(t)&&n0.call(t,"callee")&&!s0.call(t,"callee")},U_=r0,i0=Array.isArray,On=i0,co={exports:{}};function o0(){return!1}var a0=o0;co.exports;(function(t,e){var n=tn,s=a0,r=e&&!e.nodeType&&e,i=r&&!0&&t&&!t.nodeType&&t,o=i&&i.exports===r,a=o?n.Buffer:void 0,l=a?a.isBuffer:void 0,c=l||s;t.exports=c})(co,co.exports);var B_=co.exports,l0=9007199254740991,c0=/^(?:0|[1-9]\d*)$/;function u0(t,e){var n=typeof t;return e=e??l0,!!e&&(n=="number"||n!="symbol"&&c0.test(t))&&t>-1&&t%1==0&&t<e}var H_=u0,h0=9007199254740991;function d0(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=h0}var zc=d0,f0=si,p0=zc,g0=ri,_0="[object Arguments]",m0="[object Array]",y0="[object Boolean]",v0="[object Date]",b0="[object Error]",E0="[object Function]",w0="[object Map]",C0="[object Number]",S0="[object Object]",T0="[object RegExp]",I0="[object Set]",R0="[object String]",A0="[object WeakMap]",P0="[object ArrayBuffer]",O0="[object DataView]",N0="[object Float32Array]",k0="[object Float64Array]",x0="[object Int8Array]",D0="[object Int16Array]",L0="[object Int32Array]",M0="[object Uint8Array]",F0="[object Uint8ClampedArray]",$0="[object Uint16Array]",U0="[object Uint32Array]",ge={};ge[N0]=ge[k0]=ge[x0]=ge[D0]=ge[L0]=ge[M0]=ge[F0]=ge[$0]=ge[U0]=!0;ge[_0]=ge[m0]=ge[P0]=ge[y0]=ge[O0]=ge[v0]=ge[b0]=ge[E0]=ge[w0]=ge[C0]=ge[S0]=ge[T0]=ge[I0]=ge[R0]=ge[A0]=!1;function B0(t){return g0(t)&&p0(t.length)&&!!ge[f0(t)]}var H0=B0;function j0(t){return function(e){return t(e)}}var W0=j0,uo={exports:{}};uo.exports;(function(t,e){var n=M_,s=e&&!e.nodeType&&e,r=s&&!0&&t&&!t.nodeType&&t,i=r&&r.exports===s,o=i&&n.process,a=function(){try{var l=r&&r.require&&r.require("util").types;return l||o&&o.binding&&o.binding("util")}catch{}}();t.exports=a})(uo,uo.exports);var V0=uo.exports,q0=H0,K0=W0,ad=V0,ld=ad&&ad.isTypedArray,G0=ld?K0(ld):q0,j_=G0,z0=PR,Y0=U_,J0=On,Q0=B_,X0=H_,Z0=j_,eA=Object.prototype,tA=eA.hasOwnProperty;function nA(t,e){var n=J0(t),s=!n&&Y0(t),r=!n&&!s&&Q0(t),i=!n&&!s&&!r&&Z0(t),o=n||s||r||i,a=o?z0(t.length,String):[],l=a.length;for(var c in t)(e||tA.call(t,c))&&!(o&&(c=="length"||r&&(c=="offset"||c=="parent")||i&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||X0(c,l)))&&a.push(c);return a}var sA=nA,rA=Object.prototype;function iA(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||rA;return t===n}var oA=iA;function aA(t,e){return function(n){return t(e(n))}}var lA=aA,cA=lA,uA=cA(Object.keys,Object),hA=uA,dA=oA,fA=hA,pA=Object.prototype,gA=pA.hasOwnProperty;function _A(t){if(!dA(t))return fA(t);var e=[];for(var n in Object(t))gA.call(t,n)&&n!="constructor"&&e.push(n);return e}var mA=_A;function yA(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var Yc=yA,vA=si,bA=Yc,EA="[object AsyncFunction]",wA="[object Function]",CA="[object GeneratorFunction]",SA="[object Proxy]";function TA(t){if(!bA(t))return!1;var e=vA(t);return e==wA||e==CA||e==EA||e==SA}var W_=TA,IA=W_,RA=zc;function AA(t){return t!=null&&RA(t.length)&&!IA(t)}var PA=AA,OA=sA,NA=mA,kA=PA;function xA(t){return kA(t)?OA(t):NA(t)}var Jc=xA,DA=RR,LA=Jc;function MA(t,e){return t&&DA(t,e,LA)}var FA=MA;function $A(){this.__data__=[],this.size=0}var UA=$A;function BA(t,e){return t===e||t!==t&&e!==e}var V_=BA,HA=V_;function jA(t,e){for(var n=t.length;n--;)if(HA(t[n][0],e))return n;return-1}var Ko=jA,WA=Ko,VA=Array.prototype,qA=VA.splice;function KA(t){var e=this.__data__,n=WA(e,t);if(n<0)return!1;var s=e.length-1;return n==s?e.pop():qA.call(e,n,1),--this.size,!0}var GA=KA,zA=Ko;function YA(t){var e=this.__data__,n=zA(e,t);return n<0?void 0:e[n][1]}var JA=YA,QA=Ko;function XA(t){return QA(this.__data__,t)>-1}var ZA=XA,eP=Ko;function tP(t,e){var n=this.__data__,s=eP(n,t);return s<0?(++this.size,n.push([t,e])):n[s][1]=e,this}var nP=tP,sP=UA,rP=GA,iP=JA,oP=ZA,aP=nP;function Fs(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var s=t[e];this.set(s[0],s[1])}}Fs.prototype.clear=sP;Fs.prototype.delete=rP;Fs.prototype.get=iP;Fs.prototype.has=oP;Fs.prototype.set=aP;var Go=Fs,lP=Go;function cP(){this.__data__=new lP,this.size=0}var uP=cP;function hP(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}var dP=hP;function fP(t){return this.__data__.get(t)}var pP=fP;function gP(t){return this.__data__.has(t)}var _P=gP,mP=tn,yP=mP["__core-js_shared__"],vP=yP,Ra=vP,cd=function(){var t=/[^.]+$/.exec(Ra&&Ra.keys&&Ra.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function bP(t){return!!cd&&cd in t}var EP=bP,wP=Function.prototype,CP=wP.toString;function SP(t){if(t!=null){try{return CP.call(t)}catch{}try{return t+""}catch{}}return""}var q_=SP,TP=W_,IP=EP,RP=Yc,AP=q_,PP=/[\\^$.*+?()[\]{}|]/g,OP=/^\[object .+?Constructor\]$/,NP=Function.prototype,kP=Object.prototype,xP=NP.toString,DP=kP.hasOwnProperty,LP=RegExp("^"+xP.call(DP).replace(PP,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function MP(t){if(!RP(t)||IP(t))return!1;var e=TP(t)?LP:OP;return e.test(AP(t))}var FP=MP;function $P(t,e){return t==null?void 0:t[e]}var UP=$P,BP=FP,HP=UP;function jP(t,e){var n=HP(t,e);return BP(n)?n:void 0}var $s=jP,WP=$s,VP=tn,qP=WP(VP,"Map"),Qc=qP,KP=$s,GP=KP(Object,"create"),zo=GP,ud=zo;function zP(){this.__data__=ud?ud(null):{},this.size=0}var YP=zP;function JP(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var QP=JP,XP=zo,ZP="__lodash_hash_undefined__",eO=Object.prototype,tO=eO.hasOwnProperty;function nO(t){var e=this.__data__;if(XP){var n=e[t];return n===ZP?void 0:n}return tO.call(e,t)?e[t]:void 0}var sO=nO,rO=zo,iO=Object.prototype,oO=iO.hasOwnProperty;function aO(t){var e=this.__data__;return rO?e[t]!==void 0:oO.call(e,t)}var lO=aO,cO=zo,uO="__lodash_hash_undefined__";function hO(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=cO&&e===void 0?uO:e,this}var dO=hO,fO=YP,pO=QP,gO=sO,_O=lO,mO=dO;function Us(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var s=t[e];this.set(s[0],s[1])}}Us.prototype.clear=fO;Us.prototype.delete=pO;Us.prototype.get=gO;Us.prototype.has=_O;Us.prototype.set=mO;var yO=Us,hd=yO,vO=Go,bO=Qc;function EO(){this.size=0,this.__data__={hash:new hd,map:new(bO||vO),string:new hd}}var wO=EO;function CO(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}var SO=CO,TO=SO;function IO(t,e){var n=t.__data__;return TO(e)?n[typeof e=="string"?"string":"hash"]:n.map}var Yo=IO,RO=Yo;function AO(t){var e=RO(this,t).delete(t);return this.size-=e?1:0,e}var PO=AO,OO=Yo;function NO(t){return OO(this,t).get(t)}var kO=NO,xO=Yo;function DO(t){return xO(this,t).has(t)}var LO=DO,MO=Yo;function FO(t,e){var n=MO(this,t),s=n.size;return n.set(t,e),this.size+=n.size==s?0:1,this}var $O=FO,UO=wO,BO=PO,HO=kO,jO=LO,WO=$O;function Bs(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var s=t[e];this.set(s[0],s[1])}}Bs.prototype.clear=UO;Bs.prototype.delete=BO;Bs.prototype.get=HO;Bs.prototype.has=jO;Bs.prototype.set=WO;var Xc=Bs,VO=Go,qO=Qc,KO=Xc,GO=200;function zO(t,e){var n=this.__data__;if(n instanceof VO){var s=n.__data__;if(!qO||s.length<GO-1)return s.push([t,e]),this.size=++n.size,this;n=this.__data__=new KO(s)}return n.set(t,e),this.size=n.size,this}var YO=zO,JO=Go,QO=uP,XO=dP,ZO=pP,eN=_P,tN=YO;function Hs(t){var e=this.__data__=new JO(t);this.size=e.size}Hs.prototype.clear=QO;Hs.prototype.delete=XO;Hs.prototype.get=ZO;Hs.prototype.has=eN;Hs.prototype.set=tN;var K_=Hs,nN="__lodash_hash_undefined__";function sN(t){return this.__data__.set(t,nN),this}var rN=sN;function iN(t){return this.__data__.has(t)}var oN=iN,aN=Xc,lN=rN,cN=oN;function ho(t){var e=-1,n=t==null?0:t.length;for(this.__data__=new aN;++e<n;)this.add(t[e])}ho.prototype.add=ho.prototype.push=lN;ho.prototype.has=cN;var uN=ho;function hN(t,e){for(var n=-1,s=t==null?0:t.length;++n<s;)if(e(t[n],n,t))return!0;return!1}var dN=hN;function fN(t,e){return t.has(e)}var pN=fN,gN=uN,_N=dN,mN=pN,yN=1,vN=2;function bN(t,e,n,s,r,i){var o=n&yN,a=t.length,l=e.length;if(a!=l&&!(o&&l>a))return!1;var c=i.get(t),u=i.get(e);if(c&&u)return c==e&&u==t;var h=-1,d=!0,p=n&vN?new gN:void 0;for(i.set(t,e),i.set(e,t);++h<a;){var _=t[h],m=e[h];if(s)var b=o?s(m,_,h,e,t,i):s(_,m,h,t,e,i);if(b!==void 0){if(b)continue;d=!1;break}if(p){if(!_N(e,function(I,R){if(!mN(p,R)&&(_===I||r(_,I,n,s,i)))return p.push(R)})){d=!1;break}}else if(!(_===m||r(_,m,n,s,i))){d=!1;break}}return i.delete(t),i.delete(e),d}var G_=bN,EN=tn,wN=EN.Uint8Array,CN=wN;function SN(t){var e=-1,n=Array(t.size);return t.forEach(function(s,r){n[++e]=[r,s]}),n}var TN=SN;function IN(t){var e=-1,n=Array(t.size);return t.forEach(function(s){n[++e]=s}),n}var RN=IN,dd=qo,fd=CN,AN=V_,PN=G_,ON=TN,NN=RN,kN=1,xN=2,DN="[object Boolean]",LN="[object Date]",MN="[object Error]",FN="[object Map]",$N="[object Number]",UN="[object RegExp]",BN="[object Set]",HN="[object String]",jN="[object Symbol]",WN="[object ArrayBuffer]",VN="[object DataView]",pd=dd?dd.prototype:void 0,Aa=pd?pd.valueOf:void 0;function qN(t,e,n,s,r,i,o){switch(n){case VN:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case WN:return!(t.byteLength!=e.byteLength||!i(new fd(t),new fd(e)));case DN:case LN:case $N:return AN(+t,+e);case MN:return t.name==e.name&&t.message==e.message;case UN:case HN:return t==e+"";case FN:var a=ON;case BN:var l=s&kN;if(a||(a=NN),t.size!=e.size&&!l)return!1;var c=o.get(t);if(c)return c==e;s|=xN,o.set(t,e);var u=PN(a(t),a(e),s,r,i,o);return o.delete(t),u;case jN:if(Aa)return Aa.call(t)==Aa.call(e)}return!1}var KN=qN;function GN(t,e){for(var n=-1,s=e.length,r=t.length;++n<s;)t[r+n]=e[n];return t}var zN=GN,YN=zN,JN=On;function QN(t,e,n){var s=e(t);return JN(t)?s:YN(s,n(t))}var XN=QN;function ZN(t,e){for(var n=-1,s=t==null?0:t.length,r=0,i=[];++n<s;){var o=t[n];e(o,n,t)&&(i[r++]=o)}return i}var ek=ZN;function tk(){return[]}var nk=tk,sk=ek,rk=nk,ik=Object.prototype,ok=ik.propertyIsEnumerable,gd=Object.getOwnPropertySymbols,ak=gd?function(t){return t==null?[]:(t=Object(t),sk(gd(t),function(e){return ok.call(t,e)}))}:rk,lk=ak,ck=XN,uk=lk,hk=Jc;function dk(t){return ck(t,hk,uk)}var fk=dk,_d=fk,pk=1,gk=Object.prototype,_k=gk.hasOwnProperty;function mk(t,e,n,s,r,i){var o=n&pk,a=_d(t),l=a.length,c=_d(e),u=c.length;if(l!=u&&!o)return!1;for(var h=l;h--;){var d=a[h];if(!(o?d in e:_k.call(e,d)))return!1}var p=i.get(t),_=i.get(e);if(p&&_)return p==e&&_==t;var m=!0;i.set(t,e),i.set(e,t);for(var b=o;++h<l;){d=a[h];var I=t[d],R=e[d];if(s)var P=o?s(R,I,d,e,t,i):s(I,R,d,t,e,i);if(!(P===void 0?I===R||r(I,R,n,s,i):P)){m=!1;break}b||(b=d=="constructor")}if(m&&!b){var k=t.constructor,B=e.constructor;k!=B&&"constructor"in t&&"constructor"in e&&!(typeof k=="function"&&k instanceof k&&typeof B=="function"&&B instanceof B)&&(m=!1)}return i.delete(t),i.delete(e),m}var yk=mk,vk=$s,bk=tn,Ek=vk(bk,"DataView"),wk=Ek,Ck=$s,Sk=tn,Tk=Ck(Sk,"Promise"),Ik=Tk,Rk=$s,Ak=tn,Pk=Rk(Ak,"Set"),Ok=Pk,Nk=$s,kk=tn,xk=Nk(kk,"WeakMap"),Dk=xk,wl=wk,Cl=Qc,Sl=Ik,Tl=Ok,Il=Dk,z_=si,js=q_,md="[object Map]",Lk="[object Object]",yd="[object Promise]",vd="[object Set]",bd="[object WeakMap]",Ed="[object DataView]",Mk=js(wl),Fk=js(Cl),$k=js(Sl),Uk=js(Tl),Bk=js(Il),Fn=z_;(wl&&Fn(new wl(new ArrayBuffer(1)))!=Ed||Cl&&Fn(new Cl)!=md||Sl&&Fn(Sl.resolve())!=yd||Tl&&Fn(new Tl)!=vd||Il&&Fn(new Il)!=bd)&&(Fn=function(t){var e=z_(t),n=e==Lk?t.constructor:void 0,s=n?js(n):"";if(s)switch(s){case Mk:return Ed;case Fk:return md;case $k:return yd;case Uk:return vd;case Bk:return bd}return e});var Hk=Fn,Pa=K_,jk=G_,Wk=KN,Vk=yk,wd=Hk,Cd=On,Sd=B_,qk=j_,Kk=1,Td="[object Arguments]",Id="[object Array]",_i="[object Object]",Gk=Object.prototype,Rd=Gk.hasOwnProperty;function zk(t,e,n,s,r,i){var o=Cd(t),a=Cd(e),l=o?Id:wd(t),c=a?Id:wd(e);l=l==Td?_i:l,c=c==Td?_i:c;var u=l==_i,h=c==_i,d=l==c;if(d&&Sd(t)){if(!Sd(e))return!1;o=!0,u=!1}if(d&&!u)return i||(i=new Pa),o||qk(t)?jk(t,e,n,s,r,i):Wk(t,e,l,n,s,r,i);if(!(n&Kk)){var p=u&&Rd.call(t,"__wrapped__"),_=h&&Rd.call(e,"__wrapped__");if(p||_){var m=p?t.value():t,b=_?e.value():e;return i||(i=new Pa),r(m,b,n,s,i)}}return d?(i||(i=new Pa),Vk(t,e,n,s,r,i)):!1}var Yk=zk,Jk=Yk,Ad=ri;function Y_(t,e,n,s,r){return t===e?!0:t==null||e==null||!Ad(t)&&!Ad(e)?t!==t&&e!==e:Jk(t,e,n,s,Y_,r)}var J_=Y_,Qk=K_,Xk=J_,Zk=1,e1=2;function t1(t,e,n,s){var r=n.length,i=r,o=!s;if(t==null)return!i;for(t=Object(t);r--;){var a=n[r];if(o&&a[2]?a[1]!==t[a[0]]:!(a[0]in t))return!1}for(;++r<i;){a=n[r];var l=a[0],c=t[l],u=a[1];if(o&&a[2]){if(c===void 0&&!(l in t))return!1}else{var h=new Qk;if(s)var d=s(c,u,l,t,e,h);if(!(d===void 0?Xk(u,c,Zk|e1,s,h):d))return!1}}return!0}var n1=t1,s1=Yc;function r1(t){return t===t&&!s1(t)}var Q_=r1,i1=Q_,o1=Jc;function a1(t){for(var e=o1(t),n=e.length;n--;){var s=e[n],r=t[s];e[n]=[s,r,i1(r)]}return e}var l1=a1;function c1(t,e){return function(n){return n==null?!1:n[t]===e&&(e!==void 0||t in Object(n))}}var X_=c1,u1=n1,h1=l1,d1=X_;function f1(t){var e=h1(t);return e.length==1&&e[0][2]?d1(e[0][0],e[0][1]):function(n){return n===t||u1(n,t,e)}}var p1=f1,g1=si,_1=ri,m1="[object Symbol]";function y1(t){return typeof t=="symbol"||_1(t)&&g1(t)==m1}var Zc=y1,v1=On,b1=Zc,E1=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,w1=/^\w*$/;function C1(t,e){if(v1(t))return!1;var n=typeof t;return n=="number"||n=="symbol"||n=="boolean"||t==null||b1(t)?!0:w1.test(t)||!E1.test(t)||e!=null&&t in Object(e)}var eu=C1,Z_=Xc,S1="Expected a function";function tu(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(S1);var n=function(){var s=arguments,r=e?e.apply(this,s):s[0],i=n.cache;if(i.has(r))return i.get(r);var o=t.apply(this,s);return n.cache=i.set(r,o)||i,o};return n.cache=new(tu.Cache||Z_),n}tu.Cache=Z_;var T1=tu,I1=T1,R1=500;function A1(t){var e=I1(t,function(s){return n.size===R1&&n.clear(),s}),n=e.cache;return e}var P1=A1,O1=P1,N1=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,k1=/\\(\\)?/g,x1=O1(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(N1,function(n,s,r,i){e.push(r?i.replace(k1,"$1"):s||n)}),e}),D1=x1;function L1(t,e){for(var n=-1,s=t==null?0:t.length,r=Array(s);++n<s;)r[n]=e(t[n],n,t);return r}var M1=L1,Pd=qo,F1=M1,$1=On,U1=Zc,B1=1/0,Od=Pd?Pd.prototype:void 0,Nd=Od?Od.toString:void 0;function em(t){if(typeof t=="string")return t;if($1(t))return F1(t,em)+"";if(U1(t))return Nd?Nd.call(t):"";var e=t+"";return e=="0"&&1/t==-B1?"-0":e}var H1=em,j1=H1;function W1(t){return t==null?"":j1(t)}var V1=W1,q1=On,K1=eu,G1=D1,z1=V1;function Y1(t,e){return q1(t)?t:K1(t,e)?[t]:G1(z1(t))}var tm=Y1,J1=Zc,Q1=1/0;function X1(t){if(typeof t=="string"||J1(t))return t;var e=t+"";return e=="0"&&1/t==-Q1?"-0":e}var Jo=X1,Z1=tm,ex=Jo;function tx(t,e){e=Z1(e,t);for(var n=0,s=e.length;t!=null&&n<s;)t=t[ex(e[n++])];return n&&n==s?t:void 0}var nm=tx,nx=nm;function sx(t,e,n){var s=t==null?void 0:nx(t,e);return s===void 0?n:s}var rx=sx;function ix(t,e){return t!=null&&e in Object(t)}var ox=ix,ax=tm,lx=U_,cx=On,ux=H_,hx=zc,dx=Jo;function fx(t,e,n){e=ax(e,t);for(var s=-1,r=e.length,i=!1;++s<r;){var o=dx(e[s]);if(!(i=t!=null&&n(t,o)))break;t=t[o]}return i||++s!=r?i:(r=t==null?0:t.length,!!r&&hx(r)&&ux(o,r)&&(cx(t)||lx(t)))}var px=fx,gx=ox,_x=px;function mx(t,e){return t!=null&&_x(t,e,gx)}var yx=mx,vx=J_,bx=rx,Ex=yx,wx=eu,Cx=Q_,Sx=X_,Tx=Jo,Ix=1,Rx=2;function Ax(t,e){return wx(t)&&Cx(e)?Sx(Tx(t),e):function(n){var s=bx(n,t);return s===void 0&&s===e?Ex(n,t):vx(e,s,Ix|Rx)}}var Px=Ax;function Ox(t){return t}var Nx=Ox;function kx(t){return function(e){return e==null?void 0:e[t]}}var xx=kx,Dx=nm;function Lx(t){return function(e){return Dx(e,t)}}var Mx=Lx,Fx=xx,$x=Mx,Ux=eu,Bx=Jo;function Hx(t){return Ux(t)?Fx(Bx(t)):$x(t)}var jx=Hx,Wx=p1,Vx=Px,qx=Nx,Kx=On,Gx=jx;function zx(t){return typeof t=="function"?t:t==null?qx:typeof t=="object"?Kx(t)?Vx(t[0],t[1]):Wx(t):Gx(t)}var Yx=zx,Jx=wR,Qx=FA,Xx=Yx;function Zx(t,e){return Jx(t,Xx(e),Qx)}var eD=Zx,tD=function(){function t(e,n){for(var s=0;s<n.length;s++){var r=n[s];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,s){return n&&t(e.prototype,n),s&&t(e,s),e}}();function nD(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var sD=eD,rD={messenger:/\bFB[\w_]+\/(Messenger|MESSENGER)/,facebook:/\bFB[\w_]+\//,twitter:/\bTwitter/i,line:/\bLine\//i,wechat:/\bMicroMessenger\//i,puffin:/\bPuffin/i,miui:/\bMiuiBrowser\//i,instagram:/\bInstagram/i,chrome:/\bCrMo\b|CriOS|Android.*Chrome\/[.0-9]* (Mobile)?/,safari:/Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari/,ie:/IEMobile|MSIEMobile/,firefox:/fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS/},iD=function(){function t(e){nD(this,t),this.ua="",this.ua=e}return tD(t,[{key:"browser",get:function(){var n=this;return sD(rD,function(s){return s.test(n.ua)})||"other"}},{key:"isMobile",get:function(){return/(iPad|iPhone|Android|Mobile)/i.test(this.ua)||!1}},{key:"isDesktop",get:function(){return!this.isMobile}},{key:"isInApp",get:function(){var n=["WebView","(iPhone|iPod|iPad)(?!.*Safari/)","Android.*(wv|.0.0.0)"],s=new RegExp("("+n.join("|")+")","ig");return!!this.ua.match(s)}}]),t}(),oD=iD;const aD=bR(oD),lD=Vr({name:"LoginBox",props:{isInApp:{type:Boolean,required:!0},showLogin:{type:Boolean,required:!0}},setup(t,{emit:e}){const n=ct(""),s=ct(""),r=ct(!1);hr(r,u=>{localStorage.setItem("keeploggedin",JSON.stringify(u))}),Ql(()=>{const u=localStorage.getItem("keeploggedin");u!==null&&(r.value=JSON.parse(u))});const i=()=>{e("toggleLogin")},o=u=>{const h=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,d=/@alearn.org.tw$/;return h.test(String(u).toLowerCase())&&d.test(String(u).toLowerCase())};return{users_email:n,user_password:s,keeploggedin:r,toggleLogin:i,registerWithEmail:()=>{if(console.log("users_email:",n.value),console.log("user_password:",s.value),console.log("Register clicked"),!n.value||!s.value){window.alert("請先填寫email和密碼");return}if(!s.value||typeof s.value!="string"){alert("密碼請至少包含一個英文字，請重新輸入");return}e("registerWithEmail",n.value,s.value,r.value)},loginWithEmail:()=>{let u=!0;console.log("Login clicked");const h=window.location.pathname;if((h==="/friends"||h==="/maps"||h==="/privacy-policy"||h.startsWith("/flag")||h.startsWith("/group"))&&(u=!1),!s.value||typeof s.value!="string"){alert("密碼無效，請重新輸入");return}e("loginWithEmail",u,n.value,s.value,r.value)},resetPassword:()=>{if(console.log("Reset password function triggered"),console.log("Email for reset:",n.value),!o(n.value)){alert("請先輸入有效的電子郵件地址");return}const u=$r();console.log("Firebase auth object:",u),ZT(u,n.value).then(()=>{alert("密碼重置郵件已發送，請檢查您的電子郵件信箱"),console.log("Password reset email sent successfully")}).catch(h=>{switch(console.error("密碼重置郵件發送失敗：",h.code,h.message),h.code){case"auth/invalid-email":alert("無效的電子郵件地址");break;case"auth/user-not-found":alert("找不到該電子郵件對應的帳號");break;default:alert("密碼重置郵件發送失敗，請稍後再試")}})}}}}),cD={class:"ui middle aligned center aligned grid",id:"login-main",style:{height:"100vh"}},uD={class:"column",style:{"max-width":"420px"}},hD={class:"ui raised segment"},dD={key:0,class:"ui error message"},fD={class:"ui form segment",style:{"border-radius":"10px",padding:"15px","background-color":"#f0f0f0"}},pD={class:"field"},gD={class:"ui left icon input"},_D={class:"field"},mD={class:"ui left icon input"},yD={class:"ui large form"},vD={class:"ui segment",style:{border:"none","padding-top":"10px"}},bD={class:"field"};function ED(t,e,n,s,r,i){return Oe(),Ue("div",{class:"ui dimmer modals visible active clickable",id:"login-bg",style:{background:"rgba(0, 0, 0, 0.6)"},onClick:e[9]||(e[9]=o=>t.toggleLogin())},[F("div",cD,[F("div",uD,[F("div",hD,[t.isInApp?(Oe(),Ue("div",dD,"本系統不支援facebook, line等app內部瀏覽，請用一般瀏覽器開啟，方可登入，謝謝")):Mi("",!0),e[14]||(e[14]=F("h2",{class:"ui black header",style:{"font-size":"1.5rem","font-weight":"600"}},"登入您的帳號",-1)),F("form",fD,[F("div",pD,[F("div",gD,[e[10]||(e[10]=F("i",{class:"envelope icon"},null,-1)),vi(F("input",{type:"text",name:"email",placeholder:"E-mail address",style:{"font-size":"14px"},"onUpdate:modelValue":e[0]||(e[0]=o=>t.users_email=o),onClick:e[1]||(e[1]=Ys(()=>{},["stop"]))},null,512),[[Xa,t.users_email]])])]),F("div",_D,[F("div",mD,[e[11]||(e[11]=F("i",{class:"lock icon"},null,-1)),vi(F("input",{type:"password",name:"user_password",placeholder:"Password",style:{"font-size":"14px"},"onUpdate:modelValue":e[2]||(e[2]=o=>t.user_password=o),autocomplete:"",onClick:e[3]||(e[3]=Ys(()=>{},["stop"]))},null,512),[[Xa,t.user_password]])])]),F("div",{class:Vn(["ui fluid large button",{disabled:t.isInApp}]),onClick:e[4]||(e[4]=Ys((...o)=>t.loginWithEmail&&t.loginWithEmail(...o),["prevent"])),style:{"background-color":"#e47e10",color:"white","font-weight":"bold"}},"登入",2),F("a",{class:"small forgot-password",onClick:e[5]||(e[5]=(...o)=>t.resetPassword&&t.resetPassword(...o))},"忘記密碼")]),F("form",yD,[F("div",vD,[F("div",bD,[F("div",{class:"ui checkbox",onClick:e[7]||(e[7]=Ys(()=>{},["stop"]))},[vi(F("input",{type:"checkbox","onUpdate:modelValue":e[6]||(e[6]=o=>t.keeploggedin=o)},null,512),[[Zv,t.keeploggedin]]),e[12]||(e[12]=F("label",null,"保持登入狀態",-1))])])]),F("p",null,[e[13]||(e[13]=Tt("新用戶？按此")),F("button",{class:Vn(["ui large basic button",{disabled:t.isInApp}]),id:"register-btn",onClick:e[8]||(e[8]=Ys((...o)=>t.registerWithEmail&&t.registerWithEmail(...o),["stop","prevent"]))},"註冊",2)])])])])])])}const nu=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},wD=nu(lD,[["render",ED],["__scopeId","data-v-f5e0e55f"]]),CD=new aD(window.navigator.userAgent),SD=CD.isInApp,mi=$r(Gc),TD=Vr({name:"App",components:{Login:wD},data(){return{isInApp:SD,showLogin:!1,sidebarVisible:!1,uid:"",users:{},user:{},photoURL:"",email:"",emailVerified:!1}},methods:{toggleLogin(){this.showLogin=!this.showLogin},toggleSidebar(){this.sidebarVisible=!this.sidebarVisible},logout(){const t=this;mi.signOut().then(function(){t.user=null,t.users={},t.uid="",t.photoURL="",t.$nextTick().then(()=>{t.$router.push("/")})})},async registerWithEmail(t,e,n){var s,r;if(!e||typeof e!="string"){alert("接收的密碼無效，請確認輸入");return}try{const i=$r(),a=(await eI(i,t,e)).user;if(a&&a.email){this.email=a.email,this.uid=a.uid,this.photoURL="https://we.alearn.org.tw/logo-new.png";const l=[{displayName:((s=this.email)==null?void 0:s.split("@")[0])||"Unknown",email:this.email,photoURL:this.photoURL}];this.user={email:this.email,photoURL:this.photoURL,providerData:l};const c=Uo(Vo,"users/"+this.uid);(await WS(c)).exists()||await jS(c,{email:this.email,name:((r=this.email)==null?void 0:r.split("@")[0])||"Unknown",connect_me:this.email,photoURL:this.photoURL,login_method:"email"}),await Kh(a),alert("驗證郵件已發送，請檢查您的郵箱(含垃圾信箱)以完成驗證。"),this.logout()}else console.error("User or user email is undefined after registration"),alert("註冊過程中發生錯誤，請稍後再試。")}catch(i){i.code==="auth/email-already-in-use"?alert("此電子郵件已被使用，請使用其他電子郵件或嘗試登入。"):(console.error("註冊失敗：",i),alert("註冊失敗："+i.message))}},async loginWithEmail(t,e,n,s){try{s?await Gh(mi,R_):await Gh(mi,bl);const i=(await tI(mi,e,n)).user;if(!i.emailVerified){alert("您的電子郵件尚未驗證，請檢查您的郵箱並完成驗證。"),this.resendVerificationEmail(),this.logout();return}this.emailVerified=!0,console.log("登入成功：",i),this.updateUserData(i),t&&i.emailVerified&&this.$nextTick().then(()=>{this.$router.push("/profile")})}catch(r){console.error("登入失敗：",r);let i="登入失敗：";r.message.includes("auth/wrong-password")?i="密碼錯誤，請檢查後再試。":r.message.includes("auth/user-not-found")?i="帳號不存在，請確認您的電子郵件地址。":r.message.includes("auth/invalid-email")?i="無效的電子郵件地址，請重新輸入。":r.message.includes("auth/too-many-requests")?i="嘗試次數過多，請稍後再試。":i+=r.message,alert(i)}},resendVerificationEmail(){const t=$r().currentUser;t&&Kh(t).then(()=>{console.log("驗證郵件已重新發送。")}).catch(e=>{console.error("重新發送驗證郵件失敗：",e)})},updateUserData(t){var n;if(!t){console.error("User is undefined in updateUserData");return}this.email=t.email||null,this.uid=t.uid,this.photoURL=t.photoURL?decodeURI(t.photoURL):"https://we.alearn.org.tw/logo-new.png",this.emailVerified=t.emailVerified;const e=t.providerData||[{displayName:((n=this.email)==null?void 0:n.split("@")[0])||"Unknown",email:this.email,photoURL:this.photoURL}];this.updateUserInfo(e)},updateUserInfo(t){this.users&&this.uid&&this.users[this.uid]?this.user={...this.users[this.uid],providerData:t}:this.fetchUserData(t)},async fetchUserData(t){try{_l(vR,e=>{const n=e.val();this.users=n,this.uid&&this.users&&this.users[this.uid]?this.user={...this.users[this.uid],providerData:t}:this.user={providerData:t}},e=>{this.user={providerData:t},console.error("Error fetching users:",e)})}catch(e){console.error("Error fetching user data:",e)}}}}),ID={class:"ui fixed top menu"},RD={class:"right menu"},AD={key:1,class:"ui simple dropdown item"},PD=["src"],OD={key:1,class:"user icon"},ND={class:"menu"},kD={class:"ui container"};function xD(t,e,n,s,r,i){const o=hi("RouterLink"),a=hi("router-link"),l=hi("RouterView"),c=hi("Login");return Oe(),Ue(ut,null,[F("header",null,[F("nav",ID,[F("button",{class:"no-border ui item",onClick:e[0]||(e[0]=(...u)=>t.toggleSidebar&&t.toggleSidebar(...u))},e[6]||(e[6]=[F("i",{class:"icon bars"},null,-1)])),ye(o,{class:"item",to:"/"},{default:ln(()=>e[7]||(e[7]=[F("i",{class:"home icon"},null,-1)])),_:1}),ye(o,{class:"item",to:"/about"},{default:ln(()=>e[8]||(e[8]=[F("i",{class:"info icon"},null,-1),Tt("關於我們")])),_:1}),ye(o,{class:"item",to:"/faq"},{default:ln(()=>e[9]||(e[9]=[F("i",{class:"help icon"},null,-1),Tt("常見問題")])),_:1}),F("div",RD,[t.uid?(Oe(),Ue("div",AD,[t.photoURL?(Oe(),Ue("img",{key:0,class:"ui avatar image",src:t.photoURL,alt:"User Avatar",onError:e[2]||(e[2]=(...u)=>t.useDefaultAvatar&&t.useDefaultAvatar(...u)),onLoad:e[3]||(e[3]=(...u)=>t.onImageLoad&&t.onImageLoad(...u))},null,40,PD)):(Oe(),Ue("i",OD)),F("div",ND,[ye(a,{class:"item",to:"/profile"},{default:ln(()=>e[11]||(e[11]=[F("i",{class:"flag icon"},null,-1),Tt("我的旗幟")])),_:1}),t.uid?(Oe(),Ue("button",{key:0,class:"no-border ui item",onClick:e[4]||(e[4]=(...u)=>t.logout&&t.logout(...u))},e[12]||(e[12]=[F("i",{class:"sign-out icon"},null,-1),Tt("登出")]))):Mi("",!0)])])):(Oe(),Ue("button",{key:0,class:"no-border ui item",onClick:e[1]||(e[1]=(...u)=>t.toggleLogin&&t.toggleLogin(...u))},e[10]||(e[10]=[F("i",{class:"user icon"},null,-1),Tt("登入")])))])])]),e[16]||(e[16]=F("div",{class:"small-spacer"},null,-1)),F("div",{class:Vn(["ui sidebar vertical menu",{hidden:!t.sidebarVisible}]),id:"side-menu"},[ye(o,{class:"item",to:"/",exact:"",name:"home"},{default:ln(()=>e[13]||(e[13]=[F("i",{class:"home icon"},null,-1),Tt("首頁")])),_:1}),ye(o,{class:"item",to:"/about",name:"about"},{default:ln(()=>e[14]||(e[14]=[F("i",{class:"info icon"},null,-1),Tt("關於我們")])),_:1}),ye(o,{class:"item",to:"/faq",name:"faq"},{default:ln(()=>e[15]||(e[15]=[F("i",{class:"help icon"},null,-1),Tt("常見問題")])),_:1})],2),F("div",{class:Vn(["ui sidebar bg",{hidden:!t.sidebarVisible}]),onClick:e[5]||(e[5]=(...u)=>t.toggleSidebar&&t.toggleSidebar(...u))},null,2),F("div",kD,[ye(l,{onToggleLogin:t.toggleLogin},null,8,["onToggleLogin"])]),t.showLogin?(Oe(),fp(c,{key:0,showLogin:t.showLogin,isInApp:!1,onToggleLogin:t.toggleLogin,onLogout:t.logout,onRegisterWithEmail:t.registerWithEmail,onLoginWithEmail:t.loginWithEmail,onResendVerificationEmail:t.resendVerificationEmail},null,8,["showLogin","onToggleLogin","onLogout","onRegisterWithEmail","onLoginWithEmail","onResendVerificationEmail"])):Mi("",!0)],64)}const DD=nu(TD,[["render",xD],["__scopeId","data-v-b79c01b6"]]),LD="modulepreload",MD=function(t){return"/"+t},kd={},Oa=function(e,n,s){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.allSettled(n.map(l=>{if(l=MD(l),l in kd)return;kd[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const h=document.createElement("link");if(h.rel=c?"stylesheet":LD,c||(h.as="script"),h.crossOrigin="",h.href=l,a&&h.setAttribute("nonce",a),document.head.appendChild(h),c)return new Promise((d,p)=>{h.addEventListener("load",d),h.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})};/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const as=typeof document<"u";function sm(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function FD(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&sm(t.default)}const oe=Object.assign;function Na(t,e){const n={};for(const s in e){const r=e[s];n[s]=yt(r)?r.map(t):t(r)}return n}const vr=()=>{},yt=Array.isArray,rm=/#/g,$D=/&/g,UD=/\//g,BD=/=/g,HD=/\?/g,im=/\+/g,jD=/%5B/g,WD=/%5D/g,om=/%5E/g,VD=/%60/g,am=/%7B/g,qD=/%7C/g,lm=/%7D/g,KD=/%20/g;function su(t){return encodeURI(""+t).replace(qD,"|").replace(jD,"[").replace(WD,"]")}function GD(t){return su(t).replace(am,"{").replace(lm,"}").replace(om,"^")}function Rl(t){return su(t).replace(im,"%2B").replace(KD,"+").replace(rm,"%23").replace($D,"%26").replace(VD,"`").replace(am,"{").replace(lm,"}").replace(om,"^")}function zD(t){return Rl(t).replace(BD,"%3D")}function YD(t){return su(t).replace(rm,"%23").replace(HD,"%3F")}function JD(t){return t==null?"":YD(t).replace(UD,"%2F")}function Ur(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const QD=/\/$/,XD=t=>t.replace(QD,"");function ka(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=nL(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:Ur(o)}}function ZD(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function xd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function eL(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&As(e.matched[s],n.matched[r])&&cm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function As(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function cm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!tL(t[n],e[n]))return!1;return!0}function tL(t,e){return yt(t)?Dd(t,e):yt(e)?Dd(e,t):t===e}function Dd(t,e){return yt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function nL(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o).join("/")}const on={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Br;(function(t){t.pop="pop",t.push="push"})(Br||(Br={}));var br;(function(t){t.back="back",t.forward="forward",t.unknown=""})(br||(br={}));function sL(t){if(!t)if(as){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),XD(t)}const rL=/^[^#]+#/;function iL(t,e){return t.replace(rL,"#")+e}function oL(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Qo=()=>({left:window.scrollX,top:window.scrollY});function aL(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=oL(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Ld(t,e){return(history.state?history.state.position-e:-1)+t}const Al=new Map;function lL(t,e){Al.set(t,e)}function cL(t){const e=Al.get(t);return Al.delete(t),e}let uL=()=>location.protocol+"//"+location.host;function um(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),xd(l,"")}return xd(n,t)+s+r}function hL(t,e,n,s){let r=[],i=[],o=null;const a=({state:d})=>{const p=um(t,location),_=n.value,m=e.value;let b=0;if(d){if(n.value=p,e.value=d,o&&o===_){o=null;return}b=m?d.position-m.position:0}else s(p);r.forEach(I=>{I(n.value,_,{delta:b,type:Br.pop,direction:b?b>0?br.forward:br.back:br.unknown})})};function l(){o=n.value}function c(d){r.push(d);const p=()=>{const _=r.indexOf(d);_>-1&&r.splice(_,1)};return i.push(p),p}function u(){const{history:d}=window;d.state&&d.replaceState(oe({},d.state,{scroll:Qo()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function Md(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?Qo():null}}function dL(t){const{history:e,location:n}=window,s={value:um(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:uL()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),r.value=c}catch(p){console.error(p),n[u?"replace":"assign"](d)}}function o(l,c){const u=oe({},e.state,Md(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});i(l,u,!0),s.value=l}function a(l,c){const u=oe({},r.value,e.state,{forward:l,scroll:Qo()});i(u.current,u,!0);const h=oe({},Md(s.value,l,null),{position:u.position+1},c);i(l,h,!1),s.value=l}return{location:s,state:r,push:a,replace:o}}function fL(t){t=sL(t);const e=dL(t),n=hL(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=oe({location:"",base:t,go:s,createHref:iL.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function pL(t){return typeof t=="string"||t&&typeof t=="object"}function hm(t){return typeof t=="string"||typeof t=="symbol"}const dm=Symbol("");var Fd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Fd||(Fd={}));function Ps(t,e){return oe(new Error,{type:t,[dm]:!0},e)}function Ft(t,e){return t instanceof Error&&dm in t&&(e==null||!!(t.type&e))}const $d="[^/]+?",gL={sensitive:!1,strict:!1,start:!0,end:!0},_L=/[.+*?^${}()[\]/\\]/g;function mL(t,e){const n=oe({},gL,e),s=[];let r=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let h=0;h<c.length;h++){const d=c[h];let p=40+(n.sensitive?.25:0);if(d.type===0)h||(r+="/"),r+=d.value.replace(_L,"\\$&"),p+=40;else if(d.type===1){const{value:_,repeatable:m,optional:b,regexp:I}=d;i.push({name:_,repeatable:m,optional:b});const R=I||$d;if(R!==$d){p+=10;try{new RegExp(`(${R})`)}catch(k){throw new Error(`Invalid custom RegExp for param "${_}" (${R}): `+k.message)}}let P=m?`((?:${R})(?:/(?:${R}))*)`:`(${R})`;h||(P=b&&c.length<2?`(?:/${P})`:"/"+P),b&&(P+="?"),r+=P,p+=20,b&&(p+=-8),m&&(p+=-20),R===".*"&&(p+=-50)}u.push(p)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",_=i[d-1];h[_.name]=p&&_.repeatable?p.split("/"):p}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:_,repeatable:m,optional:b}=p,I=_ in c?c[_]:"";if(yt(I)&&!m)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const R=yt(I)?I.join("/"):I;if(!R)if(b)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${_}"`);u+=R}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:l}}function yL(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function fm(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=yL(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(Ud(s))return 1;if(Ud(r))return-1}return r.length-s.length}function Ud(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const vL={type:0,value:""},bL=/[a-zA-Z0-9_]/;function EL(t){if(!t)return[[]];if(t==="/")return[[vL]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,l,c="",u="";function h(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:l==="("?n=2:bL.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),r}function wL(t,e,n){const s=mL(EL(t.path),n),r=oe(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function CL(t,e){const n=[],s=new Map;e=Wd({strict:!1,end:!0,sensitive:!1},e);function r(h){return s.get(h)}function i(h,d,p){const _=!p,m=Hd(h);m.aliasOf=p&&p.record;const b=Wd(e,h),I=[m];if("alias"in h){const k=typeof h.alias=="string"?[h.alias]:h.alias;for(const B of k)I.push(Hd(oe({},m,{components:p?p.record.components:m.components,path:B,aliasOf:p?p.record:m})))}let R,P;for(const k of I){const{path:B}=k;if(d&&B[0]!=="/"){const ee=d.record.path,Q=ee[ee.length-1]==="/"?"":"/";k.path=d.record.path+(B&&Q+B)}if(R=wL(k,d,b),p?p.alias.push(R):(P=P||R,P!==R&&P.alias.push(R),_&&h.name&&!jd(R)&&o(h.name)),pm(R)&&l(R),m.children){const ee=m.children;for(let Q=0;Q<ee.length;Q++)i(ee[Q],R,p&&p.children[Q])}p=p||R}return P?()=>{o(P)}:vr}function o(h){if(hm(h)){const d=s.get(h);d&&(s.delete(h),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(h);d>-1&&(n.splice(d,1),h.record.name&&s.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function a(){return n}function l(h){const d=IL(h,n);n.splice(d,0,h),h.record.name&&!jd(h)&&s.set(h.record.name,h)}function c(h,d){let p,_={},m,b;if("name"in h&&h.name){if(p=s.get(h.name),!p)throw Ps(1,{location:h});b=p.record.name,_=oe(Bd(d.params,p.keys.filter(P=>!P.optional).concat(p.parent?p.parent.keys.filter(P=>P.optional):[]).map(P=>P.name)),h.params&&Bd(h.params,p.keys.map(P=>P.name))),m=p.stringify(_)}else if(h.path!=null)m=h.path,p=n.find(P=>P.re.test(m)),p&&(_=p.parse(m),b=p.record.name);else{if(p=d.name?s.get(d.name):n.find(P=>P.re.test(d.path)),!p)throw Ps(1,{location:h,currentLocation:d});b=p.record.name,_=oe({},d.params,h.params),m=p.stringify(_)}const I=[];let R=p;for(;R;)I.unshift(R.record),R=R.parent;return{name:b,path:m,params:_,matched:I,meta:TL(I)}}t.forEach(h=>i(h));function u(){n.length=0,s.clear()}return{addRoute:i,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function Bd(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Hd(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:SL(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function SL(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function jd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function TL(t){return t.reduce((e,n)=>oe(e,n.meta),{})}function Wd(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function IL(t,e){let n=0,s=e.length;for(;n!==s;){const i=n+s>>1;fm(t,e[i])<0?s=i:n=i+1}const r=RL(t);return r&&(s=e.lastIndexOf(r,s-1)),s}function RL(t){let e=t;for(;e=e.parent;)if(pm(e)&&fm(t,e)===0)return e}function pm({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function AL(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(im," "),o=i.indexOf("="),a=Ur(o<0?i:i.slice(0,o)),l=o<0?null:Ur(i.slice(o+1));if(a in e){let c=e[a];yt(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Vd(t){let e="";for(let n in t){const s=t[n];if(n=zD(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(yt(s)?s.map(i=>i&&Rl(i)):[s&&Rl(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function PL(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=yt(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const OL=Symbol(""),qd=Symbol(""),ru=Symbol(""),iu=Symbol(""),Pl=Symbol("");function tr(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function hn(t,e,n,s,r,i=o=>o()){const o=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(Ps(4,{from:n,to:e})):d instanceof Error?l(d):pL(d)?l(Ps(2,{from:e,to:d})):(o&&s.enterCallbacks[r]===o&&typeof d=="function"&&o.push(d),a())},u=i(()=>t.call(s&&s.instances[r],e,n,c));let h=Promise.resolve(u);t.length<3&&(h=h.then(c)),h.catch(d=>l(d))})}function xa(t,e,n,s,r=i=>i()){const i=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(sm(l)){const u=(l.__vccOpts||l)[e];u&&i.push(hn(u,n,s,o,a,r))}else{let c=l();i.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const h=FD(u)?u.default:u;o.mods[a]=u,o.components[a]=h;const p=(h.__vccOpts||h)[e];return p&&hn(p,n,s,o,a,r)()}))}}return i}function Kd(t){const e=Pt(ru),n=Pt(iu),s=ht(()=>{const l=fs(t.to);return e.resolve(l)}),r=ht(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(As.bind(null,u));if(d>-1)return d;const p=Gd(l[c-2]);return c>1&&Gd(u)===p&&h[h.length-1].path!==p?h.findIndex(As.bind(null,l[c-2])):d}),i=ht(()=>r.value>-1&&DL(n.params,s.value.params)),o=ht(()=>r.value>-1&&r.value===n.matched.length-1&&cm(n.params,s.value.params));function a(l={}){return xL(l)?e[fs(t.replace)?"replace":"push"](fs(t.to)).catch(vr):Promise.resolve()}return{route:s,href:ht(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const NL=Vr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Kd,setup(t,{slots:e}){const n=wo(Kd(t)),{options:s}=Pt(ru),r=ht(()=>({[zd(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[zd(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:mp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),kL=NL;function xL(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function DL(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!yt(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Gd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const zd=(t,e,n)=>t??e??n,LL=Vr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Pt(Pl),r=ht(()=>t.route||s.value),i=Pt(qd,0),o=ht(()=>{let c=fs(i);const{matched:u}=r.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=ht(()=>r.value.matched[o.value]);bi(qd,ht(()=>o.value+1)),bi(OL,a),bi(Pl,r);const l=ct();return hr(()=>[l.value,a.value,t.name],([c,u,h],[d,p,_])=>{u&&(u.instances[h]=c,p&&p!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!As(u,p)||!d)&&(u.enterCallbacks[h]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=r.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Yd(n.default,{Component:d,route:c});const p=h.props[u],_=p?p===!0?c.params:typeof p=="function"?p(c):p:null,b=mp(d,oe({},_,e,{onVnodeUnmounted:I=>{I.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Yd(n.default,{Component:b,route:c})||b}}});function Yd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const ML=LL;function FL(t){const e=CL(t.routes,t),n=t.parseQuery||AL,s=t.stringifyQuery||Vd,r=t.history,i=tr(),o=tr(),a=tr(),l=my(on);let c=on;as&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Na.bind(null,w=>""+w),h=Na.bind(null,JD),d=Na.bind(null,Ur);function p(w,M){let D,$;return hm(w)?(D=e.getRecordMatcher(w),$=M):$=w,e.addRoute($,D)}function _(w){const M=e.getRecordMatcher(w);M&&e.removeRoute(M)}function m(){return e.getRoutes().map(w=>w.record)}function b(w){return!!e.getRecordMatcher(w)}function I(w,M){if(M=oe({},M||l.value),typeof w=="string"){const g=ka(n,w,M.path),y=e.resolve({path:g.path},M),C=r.createHref(g.fullPath);return oe(g,y,{params:d(y.params),hash:Ur(g.hash),redirectedFrom:void 0,href:C})}let D;if(w.path!=null)D=oe({},w,{path:ka(n,w.path,M.path).path});else{const g=oe({},w.params);for(const y in g)g[y]==null&&delete g[y];D=oe({},w,{params:h(g)}),M.params=h(M.params)}const $=e.resolve(D,M),re=w.hash||"";$.params=u(d($.params));const me=ZD(s,oe({},w,{hash:GD(re),path:$.path})),f=r.createHref(me);return oe({fullPath:me,hash:re,query:s===Vd?PL(w.query):w.query||{}},$,{redirectedFrom:void 0,href:f})}function R(w){return typeof w=="string"?ka(n,w,l.value.path):oe({},w)}function P(w,M){if(c!==w)return Ps(8,{from:M,to:w})}function k(w){return Q(w)}function B(w){return k(oe(R(w),{replace:!0}))}function ee(w){const M=w.matched[w.matched.length-1];if(M&&M.redirect){const{redirect:D}=M;let $=typeof D=="function"?D(w):D;return typeof $=="string"&&($=$.includes("?")||$.includes("#")?$=R($):{path:$},$.params={}),oe({query:w.query,hash:w.hash,params:$.path!=null?{}:w.params},$)}}function Q(w,M){const D=c=I(w),$=l.value,re=w.state,me=w.force,f=w.replace===!0,g=ee(D);if(g)return Q(oe(R(g),{state:typeof g=="object"?oe({},re,g.state):re,force:me,replace:f}),M||D);const y=D;y.redirectedFrom=M;let C;return!me&&eL(s,$,D)&&(C=Ps(16,{to:y,from:$}),Et($,$,!0,!1)),(C?Promise.resolve(C):rt(y,$)).catch(E=>Ft(E)?Ft(E,2)?E:sn(E):te(E,y,$)).then(E=>{if(E){if(Ft(E,2))return Q(oe({replace:f},R(E.to),{state:typeof E.to=="object"?oe({},re,E.to.state):re,force:me}),M||y)}else E=Nn(y,$,!0,f,re);return nn(y,$,E),E})}function Pe(w,M){const D=P(w,M);return D?Promise.reject(D):Promise.resolve()}function Fe(w){const M=ss.values().next().value;return M&&typeof M.runWithContext=="function"?M.runWithContext(w):w()}function rt(w,M){let D;const[$,re,me]=$L(w,M);D=xa($.reverse(),"beforeRouteLeave",w,M);for(const g of $)g.leaveGuards.forEach(y=>{D.push(hn(y,w,M))});const f=Pe.bind(null,w,M);return D.push(f),it(D).then(()=>{D=[];for(const g of i.list())D.push(hn(g,w,M));return D.push(f),it(D)}).then(()=>{D=xa(re,"beforeRouteUpdate",w,M);for(const g of re)g.updateGuards.forEach(y=>{D.push(hn(y,w,M))});return D.push(f),it(D)}).then(()=>{D=[];for(const g of me)if(g.beforeEnter)if(yt(g.beforeEnter))for(const y of g.beforeEnter)D.push(hn(y,w,M));else D.push(hn(g.beforeEnter,w,M));return D.push(f),it(D)}).then(()=>(w.matched.forEach(g=>g.enterCallbacks={}),D=xa(me,"beforeRouteEnter",w,M,Fe),D.push(f),it(D))).then(()=>{D=[];for(const g of o.list())D.push(hn(g,w,M));return D.push(f),it(D)}).catch(g=>Ft(g,8)?g:Promise.reject(g))}function nn(w,M,D){a.list().forEach($=>Fe(()=>$(w,M,D)))}function Nn(w,M,D,$,re){const me=P(w,M);if(me)return me;const f=M===on,g=as?history.state:{};D&&($||f?r.replace(w.fullPath,oe({scroll:f&&g&&g.scroll},re)):r.push(w.fullPath,re)),l.value=w,Et(w,M,D,f),sn()}let bt;function qs(){bt||(bt=r.listen((w,M,D)=>{if(!ai.listening)return;const $=I(w),re=ee($);if(re){Q(oe(re,{replace:!0}),$).catch(vr);return}c=$;const me=l.value;as&&lL(Ld(me.fullPath,D.delta),Qo()),rt($,me).catch(f=>Ft(f,12)?f:Ft(f,2)?(Q(f.to,$).then(g=>{Ft(g,20)&&!D.delta&&D.type===Br.pop&&r.go(-1,!1)}).catch(vr),Promise.reject()):(D.delta&&r.go(-D.delta,!1),te(f,$,me))).then(f=>{f=f||Nn($,me,!1),f&&(D.delta&&!Ft(f,8)?r.go(-D.delta,!1):D.type===Br.pop&&Ft(f,20)&&r.go(-1,!1)),nn($,me,f)}).catch(vr)}))}let ts=tr(),Se=tr(),ae;function te(w,M,D){sn(w);const $=Se.list();return $.length?$.forEach(re=>re(w,M,D)):console.error(w),Promise.reject(w)}function Lt(){return ae&&l.value!==on?Promise.resolve():new Promise((w,M)=>{ts.add([w,M])})}function sn(w){return ae||(ae=!w,qs(),ts.list().forEach(([M,D])=>w?D(w):M()),ts.reset()),w}function Et(w,M,D,$){const{scrollBehavior:re}=t;if(!as||!re)return Promise.resolve();const me=!D&&cL(Ld(w.fullPath,0))||($||!D)&&history.state&&history.state.scroll||null;return Bf().then(()=>re(w,M,me)).then(f=>f&&aL(f)).catch(f=>te(f,w,M))}const Ve=w=>r.go(w);let ns;const ss=new Set,ai={currentRoute:l,listening:!0,addRoute:p,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:b,getRoutes:m,resolve:I,options:t,push:k,replace:B,go:Ve,back:()=>Ve(-1),forward:()=>Ve(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Se.add,isReady:Lt,install(w){const M=this;w.component("RouterLink",kL),w.component("RouterView",ML),w.config.globalProperties.$router=M,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>fs(l)}),as&&!ns&&l.value===on&&(ns=!0,k(r.location).catch(re=>{}));const D={};for(const re in on)Object.defineProperty(D,re,{get:()=>l.value[re],enumerable:!0});w.provide(ru,M),w.provide(iu,Df(D)),w.provide(Pl,l);const $=w.unmount;ss.add(w),w.unmount=function(){ss.delete(w),ss.size<1&&(c=on,bt&&bt(),bt=null,l.value=on,ns=!1,ae=!1),$()}}};function it(w){return w.reduce((M,D)=>M.then(()=>Fe(D)),Promise.resolve())}return ai}function $L(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>As(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>As(c,l))||r.push(l))}return[n,s,r]}function NF(t){return Pt(iu)}function gm(t,e){return function(){return t.apply(e,arguments)}}const{toString:UL}=Object.prototype,{getPrototypeOf:ou}=Object,Xo=(t=>e=>{const n=UL.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),vt=t=>(t=t.toLowerCase(),e=>Xo(e)===t),Zo=t=>e=>typeof e===t,{isArray:Ws}=Array,Hr=Zo("undefined");function BL(t){return t!==null&&!Hr(t)&&t.constructor!==null&&!Hr(t.constructor)&&st(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const _m=vt("ArrayBuffer");function HL(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&_m(t.buffer),e}const jL=Zo("string"),st=Zo("function"),mm=Zo("number"),ea=t=>t!==null&&typeof t=="object",WL=t=>t===!0||t===!1,Pi=t=>{if(Xo(t)!=="object")return!1;const e=ou(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},VL=vt("Date"),qL=vt("File"),KL=vt("Blob"),GL=vt("FileList"),zL=t=>ea(t)&&st(t.pipe),YL=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||st(t.append)&&((e=Xo(t))==="formdata"||e==="object"&&st(t.toString)&&t.toString()==="[object FormData]"))},JL=vt("URLSearchParams"),[QL,XL,ZL,eM]=["ReadableStream","Request","Response","Headers"].map(vt),tM=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ii(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let s,r;if(typeof t!="object"&&(t=[t]),Ws(t))for(s=0,r=t.length;s<r;s++)e.call(null,t[s],s,t);else{const i=n?Object.getOwnPropertyNames(t):Object.keys(t),o=i.length;let a;for(s=0;s<o;s++)a=i[s],e.call(null,t[a],a,t)}}function ym(t,e){e=e.toLowerCase();const n=Object.keys(t);let s=n.length,r;for(;s-- >0;)if(r=n[s],e===r.toLowerCase())return r;return null}const Hn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,vm=t=>!Hr(t)&&t!==Hn;function Ol(){const{caseless:t}=vm(this)&&this||{},e={},n=(s,r)=>{const i=t&&ym(e,r)||r;Pi(e[i])&&Pi(s)?e[i]=Ol(e[i],s):Pi(s)?e[i]=Ol({},s):Ws(s)?e[i]=s.slice():e[i]=s};for(let s=0,r=arguments.length;s<r;s++)arguments[s]&&ii(arguments[s],n);return e}const nM=(t,e,n,{allOwnKeys:s}={})=>(ii(e,(r,i)=>{n&&st(r)?t[i]=gm(r,n):t[i]=r},{allOwnKeys:s}),t),sM=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),rM=(t,e,n,s)=>{t.prototype=Object.create(e.prototype,s),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},iM=(t,e,n,s)=>{let r,i,o;const a={};if(e=e||{},t==null)return e;do{for(r=Object.getOwnPropertyNames(t),i=r.length;i-- >0;)o=r[i],(!s||s(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&ou(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},oM=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const s=t.indexOf(e,n);return s!==-1&&s===n},aM=t=>{if(!t)return null;if(Ws(t))return t;let e=t.length;if(!mm(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},lM=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&ou(Uint8Array)),cM=(t,e)=>{const s=(t&&t[Symbol.iterator]).call(t);let r;for(;(r=s.next())&&!r.done;){const i=r.value;e.call(t,i[0],i[1])}},uM=(t,e)=>{let n;const s=[];for(;(n=t.exec(e))!==null;)s.push(n);return s},hM=vt("HTMLFormElement"),dM=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,s,r){return s.toUpperCase()+r}),Jd=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),fM=vt("RegExp"),bm=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),s={};ii(n,(r,i)=>{let o;(o=e(r,i,t))!==!1&&(s[i]=o||r)}),Object.defineProperties(t,s)},pM=t=>{bm(t,(e,n)=>{if(st(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const s=t[n];if(st(s)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},gM=(t,e)=>{const n={},s=r=>{r.forEach(i=>{n[i]=!0})};return Ws(t)?s(t):s(String(t).split(e)),n},_M=()=>{},mM=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e,Da="abcdefghijklmnopqrstuvwxyz",Qd="0123456789",Em={DIGIT:Qd,ALPHA:Da,ALPHA_DIGIT:Da+Da.toUpperCase()+Qd},yM=(t=16,e=Em.ALPHA_DIGIT)=>{let n="";const{length:s}=e;for(;t--;)n+=e[Math.random()*s|0];return n};function vM(t){return!!(t&&st(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const bM=t=>{const e=new Array(10),n=(s,r)=>{if(ea(s)){if(e.indexOf(s)>=0)return;if(!("toJSON"in s)){e[r]=s;const i=Ws(s)?[]:{};return ii(s,(o,a)=>{const l=n(o,r+1);!Hr(l)&&(i[a]=l)}),e[r]=void 0,i}}return s};return n(t,0)},EM=vt("AsyncFunction"),wM=t=>t&&(ea(t)||st(t))&&st(t.then)&&st(t.catch),wm=((t,e)=>t?setImmediate:e?((n,s)=>(Hn.addEventListener("message",({source:r,data:i})=>{r===Hn&&i===n&&s.length&&s.shift()()},!1),r=>{s.push(r),Hn.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",st(Hn.postMessage)),CM=typeof queueMicrotask<"u"?queueMicrotask.bind(Hn):typeof process<"u"&&process.nextTick||wm,v={isArray:Ws,isArrayBuffer:_m,isBuffer:BL,isFormData:YL,isArrayBufferView:HL,isString:jL,isNumber:mm,isBoolean:WL,isObject:ea,isPlainObject:Pi,isReadableStream:QL,isRequest:XL,isResponse:ZL,isHeaders:eM,isUndefined:Hr,isDate:VL,isFile:qL,isBlob:KL,isRegExp:fM,isFunction:st,isStream:zL,isURLSearchParams:JL,isTypedArray:lM,isFileList:GL,forEach:ii,merge:Ol,extend:nM,trim:tM,stripBOM:sM,inherits:rM,toFlatObject:iM,kindOf:Xo,kindOfTest:vt,endsWith:oM,toArray:aM,forEachEntry:cM,matchAll:uM,isHTMLForm:hM,hasOwnProperty:Jd,hasOwnProp:Jd,reduceDescriptors:bm,freezeMethods:pM,toObjectSet:gM,toCamelCase:dM,noop:_M,toFiniteNumber:mM,findKey:ym,global:Hn,isContextDefined:vm,ALPHABET:Em,generateString:yM,isSpecCompliantForm:vM,toJSONObject:bM,isAsyncFn:EM,isThenable:wM,setImmediate:wm,asap:CM};function G(t,e,n,s,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),s&&(this.request=s),r&&(this.response=r,this.status=r.status?r.status:null)}v.inherits(G,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:v.toJSONObject(this.config),code:this.code,status:this.status}}});const Cm=G.prototype,Sm={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{Sm[t]={value:t}});Object.defineProperties(G,Sm);Object.defineProperty(Cm,"isAxiosError",{value:!0});G.from=(t,e,n,s,r,i)=>{const o=Object.create(Cm);return v.toFlatObject(t,o,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),G.call(o,t.message,e,n,s,r),o.cause=t,o.name=t.name,i&&Object.assign(o,i),o};const SM=null;function Nl(t){return v.isPlainObject(t)||v.isArray(t)}function Tm(t){return v.endsWith(t,"[]")?t.slice(0,-2):t}function Xd(t,e,n){return t?t.concat(e).map(function(r,i){return r=Tm(r),!n&&i?"["+r+"]":r}).join(n?".":""):e}function TM(t){return v.isArray(t)&&!t.some(Nl)}const IM=v.toFlatObject(v,{},null,function(e){return/^is[A-Z]/.test(e)});function ta(t,e,n){if(!v.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=v.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,b){return!v.isUndefined(b[m])});const s=n.metaTokens,r=n.visitor||u,i=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&v.isSpecCompliantForm(e);if(!v.isFunction(r))throw new TypeError("visitor must be a function");function c(_){if(_===null)return"";if(v.isDate(_))return _.toISOString();if(!l&&v.isBlob(_))throw new G("Blob is not supported. Use a Buffer instead.");return v.isArrayBuffer(_)||v.isTypedArray(_)?l&&typeof Blob=="function"?new Blob([_]):Buffer.from(_):_}function u(_,m,b){let I=_;if(_&&!b&&typeof _=="object"){if(v.endsWith(m,"{}"))m=s?m:m.slice(0,-2),_=JSON.stringify(_);else if(v.isArray(_)&&TM(_)||(v.isFileList(_)||v.endsWith(m,"[]"))&&(I=v.toArray(_)))return m=Tm(m),I.forEach(function(P,k){!(v.isUndefined(P)||P===null)&&e.append(o===!0?Xd([m],k,i):o===null?m:m+"[]",c(P))}),!1}return Nl(_)?!0:(e.append(Xd(b,m,i),c(_)),!1)}const h=[],d=Object.assign(IM,{defaultVisitor:u,convertValue:c,isVisitable:Nl});function p(_,m){if(!v.isUndefined(_)){if(h.indexOf(_)!==-1)throw Error("Circular reference detected in "+m.join("."));h.push(_),v.forEach(_,function(I,R){(!(v.isUndefined(I)||I===null)&&r.call(e,I,v.isString(R)?R.trim():R,m,d))===!0&&p(I,m?m.concat(R):[R])}),h.pop()}}if(!v.isObject(t))throw new TypeError("data must be an object");return p(t),e}function Zd(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(s){return e[s]})}function au(t,e){this._pairs=[],t&&ta(t,this,e)}const Im=au.prototype;Im.append=function(e,n){this._pairs.push([e,n])};Im.toString=function(e){const n=e?function(s){return e.call(this,s,Zd)}:Zd;return this._pairs.map(function(r){return n(r[0])+"="+n(r[1])},"").join("&")};function RM(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Rm(t,e,n){if(!e)return t;const s=n&&n.encode||RM,r=n&&n.serialize;let i;if(r?i=r(e,n):i=v.isURLSearchParams(e)?e.toString():new au(e,n).toString(s),i){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+i}return t}class ef{constructor(){this.handlers=[]}use(e,n,s){return this.handlers.push({fulfilled:e,rejected:n,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){v.forEach(this.handlers,function(s){s!==null&&e(s)})}}const Am={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},AM=typeof URLSearchParams<"u"?URLSearchParams:au,PM=typeof FormData<"u"?FormData:null,OM=typeof Blob<"u"?Blob:null,NM={isBrowser:!0,classes:{URLSearchParams:AM,FormData:PM,Blob:OM},protocols:["http","https","file","blob","url","data"]},lu=typeof window<"u"&&typeof document<"u",kl=typeof navigator=="object"&&navigator||void 0,kM=lu&&(!kl||["ReactNative","NativeScript","NS"].indexOf(kl.product)<0),xM=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",DM=lu&&window.location.href||"http://localhost",LM=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:lu,hasStandardBrowserEnv:kM,hasStandardBrowserWebWorkerEnv:xM,navigator:kl,origin:DM},Symbol.toStringTag,{value:"Module"})),Ge={...LM,...NM};function MM(t,e){return ta(t,new Ge.classes.URLSearchParams,Object.assign({visitor:function(n,s,r,i){return Ge.isNode&&v.isBuffer(n)?(this.append(s,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}function FM(t){return v.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function $M(t){const e={},n=Object.keys(t);let s;const r=n.length;let i;for(s=0;s<r;s++)i=n[s],e[i]=t[i];return e}function Pm(t){function e(n,s,r,i){let o=n[i++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=i>=n.length;return o=!o&&v.isArray(r)?r.length:o,l?(v.hasOwnProp(r,o)?r[o]=[r[o],s]:r[o]=s,!a):((!r[o]||!v.isObject(r[o]))&&(r[o]=[]),e(n,s,r[o],i)&&v.isArray(r[o])&&(r[o]=$M(r[o])),!a)}if(v.isFormData(t)&&v.isFunction(t.entries)){const n={};return v.forEachEntry(t,(s,r)=>{e(FM(s),r,n,0)}),n}return null}function UM(t,e,n){if(v.isString(t))try{return(e||JSON.parse)(t),v.trim(t)}catch(s){if(s.name!=="SyntaxError")throw s}return(0,JSON.stringify)(t)}const oi={transitional:Am,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const s=n.getContentType()||"",r=s.indexOf("application/json")>-1,i=v.isObject(e);if(i&&v.isHTMLForm(e)&&(e=new FormData(e)),v.isFormData(e))return r?JSON.stringify(Pm(e)):e;if(v.isArrayBuffer(e)||v.isBuffer(e)||v.isStream(e)||v.isFile(e)||v.isBlob(e)||v.isReadableStream(e))return e;if(v.isArrayBufferView(e))return e.buffer;if(v.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(i){if(s.indexOf("application/x-www-form-urlencoded")>-1)return MM(e,this.formSerializer).toString();if((a=v.isFileList(e))||s.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return ta(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return i||r?(n.setContentType("application/json",!1),UM(e)):e}],transformResponse:[function(e){const n=this.transitional||oi.transitional,s=n&&n.forcedJSONParsing,r=this.responseType==="json";if(v.isResponse(e)||v.isReadableStream(e))return e;if(e&&v.isString(e)&&(s&&!this.responseType||r)){const o=!(n&&n.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?G.from(a,G.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ge.classes.FormData,Blob:Ge.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};v.forEach(["delete","get","head","post","put","patch"],t=>{oi.headers[t]={}});const BM=v.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),HM=t=>{const e={};let n,s,r;return t&&t.split(`
`).forEach(function(o){r=o.indexOf(":"),n=o.substring(0,r).trim().toLowerCase(),s=o.substring(r+1).trim(),!(!n||e[n]&&BM[n])&&(n==="set-cookie"?e[n]?e[n].push(s):e[n]=[s]:e[n]=e[n]?e[n]+", "+s:s)}),e},tf=Symbol("internals");function nr(t){return t&&String(t).trim().toLowerCase()}function Oi(t){return t===!1||t==null?t:v.isArray(t)?t.map(Oi):String(t)}function jM(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let s;for(;s=n.exec(t);)e[s[1]]=s[2];return e}const WM=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function La(t,e,n,s,r){if(v.isFunction(s))return s.call(this,e,n);if(r&&(e=n),!!v.isString(e)){if(v.isString(s))return e.indexOf(s)!==-1;if(v.isRegExp(s))return s.test(e)}}function VM(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,s)=>n.toUpperCase()+s)}function qM(t,e){const n=v.toCamelCase(" "+e);["get","set","has"].forEach(s=>{Object.defineProperty(t,s+n,{value:function(r,i,o){return this[s].call(this,e,r,i,o)},configurable:!0})})}class ze{constructor(e){e&&this.set(e)}set(e,n,s){const r=this;function i(a,l,c){const u=nr(l);if(!u)throw new Error("header name must be a non-empty string");const h=v.findKey(r,u);(!h||r[h]===void 0||c===!0||c===void 0&&r[h]!==!1)&&(r[h||l]=Oi(a))}const o=(a,l)=>v.forEach(a,(c,u)=>i(c,u,l));if(v.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(v.isString(e)&&(e=e.trim())&&!WM(e))o(HM(e),n);else if(v.isHeaders(e))for(const[a,l]of e.entries())i(l,a,s);else e!=null&&i(n,e,s);return this}get(e,n){if(e=nr(e),e){const s=v.findKey(this,e);if(s){const r=this[s];if(!n)return r;if(n===!0)return jM(r);if(v.isFunction(n))return n.call(this,r,s);if(v.isRegExp(n))return n.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=nr(e),e){const s=v.findKey(this,e);return!!(s&&this[s]!==void 0&&(!n||La(this,this[s],s,n)))}return!1}delete(e,n){const s=this;let r=!1;function i(o){if(o=nr(o),o){const a=v.findKey(s,o);a&&(!n||La(s,s[a],a,n))&&(delete s[a],r=!0)}}return v.isArray(e)?e.forEach(i):i(e),r}clear(e){const n=Object.keys(this);let s=n.length,r=!1;for(;s--;){const i=n[s];(!e||La(this,this[i],i,e,!0))&&(delete this[i],r=!0)}return r}normalize(e){const n=this,s={};return v.forEach(this,(r,i)=>{const o=v.findKey(s,i);if(o){n[o]=Oi(r),delete n[i];return}const a=e?VM(i):String(i).trim();a!==i&&delete n[i],n[a]=Oi(r),s[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return v.forEach(this,(s,r)=>{s!=null&&s!==!1&&(n[r]=e&&v.isArray(s)?s.join(", "):s)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const s=new this(e);return n.forEach(r=>s.set(r)),s}static accessor(e){const s=(this[tf]=this[tf]={accessors:{}}).accessors,r=this.prototype;function i(o){const a=nr(o);s[a]||(qM(r,o),s[a]=!0)}return v.isArray(e)?e.forEach(i):i(e),this}}ze.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);v.reduceDescriptors(ze.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(s){this[n]=s}}});v.freezeMethods(ze);function Ma(t,e){const n=this||oi,s=e||n,r=ze.from(s.headers);let i=s.data;return v.forEach(t,function(a){i=a.call(n,i,r.normalize(),e?e.status:void 0)}),r.normalize(),i}function Om(t){return!!(t&&t.__CANCEL__)}function Vs(t,e,n){G.call(this,t??"canceled",G.ERR_CANCELED,e,n),this.name="CanceledError"}v.inherits(Vs,G,{__CANCEL__:!0});function Nm(t,e,n){const s=n.config.validateStatus;!n.status||!s||s(n.status)?t(n):e(new G("Request failed with status code "+n.status,[G.ERR_BAD_REQUEST,G.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function KM(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function GM(t,e){t=t||10;const n=new Array(t),s=new Array(t);let r=0,i=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),u=s[i];o||(o=c),n[r]=l,s[r]=c;let h=i,d=0;for(;h!==r;)d+=n[h++],h=h%t;if(r=(r+1)%t,r===i&&(i=(i+1)%t),c-o<e)return;const p=u&&c-u;return p?Math.round(d*1e3/p):void 0}}function zM(t,e){let n=0,s=1e3/e,r,i;const o=(c,u=Date.now())=>{n=u,r=null,i&&(clearTimeout(i),i=null),t.apply(null,c)};return[(...c)=>{const u=Date.now(),h=u-n;h>=s?o(c,u):(r=c,i||(i=setTimeout(()=>{i=null,o(r)},s-h)))},()=>r&&o(r)]}const fo=(t,e,n=3)=>{let s=0;const r=GM(50,250);return zM(i=>{const o=i.loaded,a=i.lengthComputable?i.total:void 0,l=o-s,c=r(l),u=o<=a;s=o;const h={loaded:o,total:a,progress:a?o/a:void 0,bytes:l,rate:c||void 0,estimated:c&&a&&u?(a-o)/c:void 0,event:i,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(h)},n)},nf=(t,e)=>{const n=t!=null;return[s=>e[0]({lengthComputable:n,total:t,loaded:s}),e[1]]},sf=t=>(...e)=>v.asap(()=>t(...e)),YM=Ge.hasStandardBrowserEnv?function(){const e=Ge.navigator&&/(msie|trident)/i.test(Ge.navigator.userAgent),n=document.createElement("a");let s;function r(i){let o=i;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return s=r(window.location.href),function(o){const a=v.isString(o)?r(o):o;return a.protocol===s.protocol&&a.host===s.host}}():function(){return function(){return!0}}(),JM=Ge.hasStandardBrowserEnv?{write(t,e,n,s,r,i){const o=[t+"="+encodeURIComponent(e)];v.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),v.isString(s)&&o.push("path="+s),v.isString(r)&&o.push("domain="+r),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function QM(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function XM(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function km(t,e){return t&&!QM(e)?XM(t,e):e}const rf=t=>t instanceof ze?{...t}:t;function Zn(t,e){e=e||{};const n={};function s(c,u,h){return v.isPlainObject(c)&&v.isPlainObject(u)?v.merge.call({caseless:h},c,u):v.isPlainObject(u)?v.merge({},u):v.isArray(u)?u.slice():u}function r(c,u,h){if(v.isUndefined(u)){if(!v.isUndefined(c))return s(void 0,c,h)}else return s(c,u,h)}function i(c,u){if(!v.isUndefined(u))return s(void 0,u)}function o(c,u){if(v.isUndefined(u)){if(!v.isUndefined(c))return s(void 0,c)}else return s(void 0,u)}function a(c,u,h){if(h in e)return s(c,u);if(h in t)return s(void 0,c)}const l={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(c,u)=>r(rf(c),rf(u),!0)};return v.forEach(Object.keys(Object.assign({},t,e)),function(u){const h=l[u]||r,d=h(t[u],e[u],u);v.isUndefined(d)&&h!==a||(n[u]=d)}),n}const xm=t=>{const e=Zn({},t);let{data:n,withXSRFToken:s,xsrfHeaderName:r,xsrfCookieName:i,headers:o,auth:a}=e;e.headers=o=ze.from(o),e.url=Rm(km(e.baseURL,e.url),t.params,t.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let l;if(v.isFormData(n)){if(Ge.hasStandardBrowserEnv||Ge.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((l=o.getContentType())!==!1){const[c,...u]=l?l.split(";").map(h=>h.trim()).filter(Boolean):[];o.setContentType([c||"multipart/form-data",...u].join("; "))}}if(Ge.hasStandardBrowserEnv&&(s&&v.isFunction(s)&&(s=s(e)),s||s!==!1&&YM(e.url))){const c=r&&i&&JM.read(i);c&&o.set(r,c)}return e},ZM=typeof XMLHttpRequest<"u",eF=ZM&&function(t){return new Promise(function(n,s){const r=xm(t);let i=r.data;const o=ze.from(r.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:c}=r,u,h,d,p,_;function m(){p&&p(),_&&_(),r.cancelToken&&r.cancelToken.unsubscribe(u),r.signal&&r.signal.removeEventListener("abort",u)}let b=new XMLHttpRequest;b.open(r.method.toUpperCase(),r.url,!0),b.timeout=r.timeout;function I(){if(!b)return;const P=ze.from("getAllResponseHeaders"in b&&b.getAllResponseHeaders()),B={data:!a||a==="text"||a==="json"?b.responseText:b.response,status:b.status,statusText:b.statusText,headers:P,config:t,request:b};Nm(function(Q){n(Q),m()},function(Q){s(Q),m()},B),b=null}"onloadend"in b?b.onloadend=I:b.onreadystatechange=function(){!b||b.readyState!==4||b.status===0&&!(b.responseURL&&b.responseURL.indexOf("file:")===0)||setTimeout(I)},b.onabort=function(){b&&(s(new G("Request aborted",G.ECONNABORTED,t,b)),b=null)},b.onerror=function(){s(new G("Network Error",G.ERR_NETWORK,t,b)),b=null},b.ontimeout=function(){let k=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const B=r.transitional||Am;r.timeoutErrorMessage&&(k=r.timeoutErrorMessage),s(new G(k,B.clarifyTimeoutError?G.ETIMEDOUT:G.ECONNABORTED,t,b)),b=null},i===void 0&&o.setContentType(null),"setRequestHeader"in b&&v.forEach(o.toJSON(),function(k,B){b.setRequestHeader(B,k)}),v.isUndefined(r.withCredentials)||(b.withCredentials=!!r.withCredentials),a&&a!=="json"&&(b.responseType=r.responseType),c&&([d,_]=fo(c,!0),b.addEventListener("progress",d)),l&&b.upload&&([h,p]=fo(l),b.upload.addEventListener("progress",h),b.upload.addEventListener("loadend",p)),(r.cancelToken||r.signal)&&(u=P=>{b&&(s(!P||P.type?new Vs(null,t,b):P),b.abort(),b=null)},r.cancelToken&&r.cancelToken.subscribe(u),r.signal&&(r.signal.aborted?u():r.signal.addEventListener("abort",u)));const R=KM(r.url);if(R&&Ge.protocols.indexOf(R)===-1){s(new G("Unsupported protocol "+R+":",G.ERR_BAD_REQUEST,t));return}b.send(i||null)})},tF=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let s=new AbortController,r;const i=function(c){if(!r){r=!0,a();const u=c instanceof Error?c:this.reason;s.abort(u instanceof G?u:new Vs(u instanceof Error?u.message:u))}};let o=e&&setTimeout(()=>{o=null,i(new G(`timeout ${e} of ms exceeded`,G.ETIMEDOUT))},e);const a=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(c=>{c.unsubscribe?c.unsubscribe(i):c.removeEventListener("abort",i)}),t=null)};t.forEach(c=>c.addEventListener("abort",i));const{signal:l}=s;return l.unsubscribe=()=>v.asap(a),l}},nF=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let s=0,r;for(;s<n;)r=s+e,yield t.slice(s,r),s=r},sF=async function*(t,e){for await(const n of rF(t))yield*nF(n,e)},rF=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:s}=await e.read();if(n)break;yield s}}finally{await e.cancel()}},of=(t,e,n,s)=>{const r=sF(t,e);let i=0,o,a=l=>{o||(o=!0,s&&s(l))};return new ReadableStream({async pull(l){try{const{done:c,value:u}=await r.next();if(c){a(),l.close();return}let h=u.byteLength;if(n){let d=i+=h;n(d)}l.enqueue(new Uint8Array(u))}catch(c){throw a(c),c}},cancel(l){return a(l),r.return()}},{highWaterMark:2})},na=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Dm=na&&typeof ReadableStream=="function",iF=na&&(typeof TextEncoder=="function"?(t=>e=>t.encode(e))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),Lm=(t,...e)=>{try{return!!t(...e)}catch{return!1}},oF=Dm&&Lm(()=>{let t=!1;const e=new Request(Ge.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e}),af=64*1024,xl=Dm&&Lm(()=>v.isReadableStream(new Response("").body)),po={stream:xl&&(t=>t.body)};na&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!po[e]&&(po[e]=v.isFunction(t[e])?n=>n[e]():(n,s)=>{throw new G(`Response type '${e}' is not supported`,G.ERR_NOT_SUPPORT,s)})})})(new Response);const aF=async t=>{if(t==null)return 0;if(v.isBlob(t))return t.size;if(v.isSpecCompliantForm(t))return(await new Request(Ge.origin,{method:"POST",body:t}).arrayBuffer()).byteLength;if(v.isArrayBufferView(t)||v.isArrayBuffer(t))return t.byteLength;if(v.isURLSearchParams(t)&&(t=t+""),v.isString(t))return(await iF(t)).byteLength},lF=async(t,e)=>{const n=v.toFiniteNumber(t.getContentLength());return n??aF(e)},cF=na&&(async t=>{let{url:e,method:n,data:s,signal:r,cancelToken:i,timeout:o,onDownloadProgress:a,onUploadProgress:l,responseType:c,headers:u,withCredentials:h="same-origin",fetchOptions:d}=xm(t);c=c?(c+"").toLowerCase():"text";let p=tF([r,i&&i.toAbortSignal()],o),_;const m=p&&p.unsubscribe&&(()=>{p.unsubscribe()});let b;try{if(l&&oF&&n!=="get"&&n!=="head"&&(b=await lF(u,s))!==0){let B=new Request(e,{method:"POST",body:s,duplex:"half"}),ee;if(v.isFormData(s)&&(ee=B.headers.get("content-type"))&&u.setContentType(ee),B.body){const[Q,Pe]=nf(b,fo(sf(l)));s=of(B.body,af,Q,Pe)}}v.isString(h)||(h=h?"include":"omit");const I="credentials"in Request.prototype;_=new Request(e,{...d,signal:p,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:s,duplex:"half",credentials:I?h:void 0});let R=await fetch(_);const P=xl&&(c==="stream"||c==="response");if(xl&&(a||P&&m)){const B={};["status","statusText","headers"].forEach(Fe=>{B[Fe]=R[Fe]});const ee=v.toFiniteNumber(R.headers.get("content-length")),[Q,Pe]=a&&nf(ee,fo(sf(a),!0))||[];R=new Response(of(R.body,af,Q,()=>{Pe&&Pe(),m&&m()}),B)}c=c||"text";let k=await po[v.findKey(po,c)||"text"](R,t);return!P&&m&&m(),await new Promise((B,ee)=>{Nm(B,ee,{data:k,headers:ze.from(R.headers),status:R.status,statusText:R.statusText,config:t,request:_})})}catch(I){throw m&&m(),I&&I.name==="TypeError"&&/fetch/i.test(I.message)?Object.assign(new G("Network Error",G.ERR_NETWORK,t,_),{cause:I.cause||I}):G.from(I,I&&I.code,t,_)}}),Dl={http:SM,xhr:eF,fetch:cF};v.forEach(Dl,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const lf=t=>`- ${t}`,uF=t=>v.isFunction(t)||t===null||t===!1,Mm={getAdapter:t=>{t=v.isArray(t)?t:[t];const{length:e}=t;let n,s;const r={};for(let i=0;i<e;i++){n=t[i];let o;if(s=n,!uF(n)&&(s=Dl[(o=String(n)).toLowerCase()],s===void 0))throw new G(`Unknown adapter '${o}'`);if(s)break;r[o||"#"+i]=s}if(!s){const i=Object.entries(r).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let o=e?i.length>1?`since :
`+i.map(lf).join(`
`):" "+lf(i[0]):"as no adapter specified";throw new G("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return s},adapters:Dl};function Fa(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Vs(null,t)}function cf(t){return Fa(t),t.headers=ze.from(t.headers),t.data=Ma.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Mm.getAdapter(t.adapter||oi.adapter)(t).then(function(s){return Fa(t),s.data=Ma.call(t,t.transformResponse,s),s.headers=ze.from(s.headers),s},function(s){return Om(s)||(Fa(t),s&&s.response&&(s.response.data=Ma.call(t,t.transformResponse,s.response),s.response.headers=ze.from(s.response.headers))),Promise.reject(s)})}const Fm="1.7.7",cu={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{cu[t]=function(s){return typeof s===t||"a"+(e<1?"n ":" ")+t}});const uf={};cu.transitional=function(e,n,s){function r(i,o){return"[Axios v"+Fm+"] Transitional option '"+i+"'"+o+(s?". "+s:"")}return(i,o,a)=>{if(e===!1)throw new G(r(o," has been removed"+(n?" in "+n:"")),G.ERR_DEPRECATED);return n&&!uf[o]&&(uf[o]=!0,console.warn(r(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,a):!0}};function hF(t,e,n){if(typeof t!="object")throw new G("options must be an object",G.ERR_BAD_OPTION_VALUE);const s=Object.keys(t);let r=s.length;for(;r-- >0;){const i=s[r],o=e[i];if(o){const a=t[i],l=a===void 0||o(a,i,t);if(l!==!0)throw new G("option "+i+" must be "+l,G.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new G("Unknown option "+i,G.ERR_BAD_OPTION)}}const Ll={assertOptions:hF,validators:cu},an=Ll.validators;class Wn{constructor(e){this.defaults=e,this.interceptors={request:new ef,response:new ef}}async request(e,n){try{return await this._request(e,n)}catch(s){if(s instanceof Error){let r;Error.captureStackTrace?Error.captureStackTrace(r={}):r=new Error;const i=r.stack?r.stack.replace(/^.+\n/,""):"";try{s.stack?i&&!String(s.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(s.stack+=`
`+i):s.stack=i}catch{}}throw s}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Zn(this.defaults,n);const{transitional:s,paramsSerializer:r,headers:i}=n;s!==void 0&&Ll.assertOptions(s,{silentJSONParsing:an.transitional(an.boolean),forcedJSONParsing:an.transitional(an.boolean),clarifyTimeoutError:an.transitional(an.boolean)},!1),r!=null&&(v.isFunction(r)?n.paramsSerializer={serialize:r}:Ll.assertOptions(r,{encode:an.function,serialize:an.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&v.merge(i.common,i[n.method]);i&&v.forEach(["delete","get","head","post","put","patch","common"],_=>{delete i[_]}),n.headers=ze.concat(o,i);const a=[];let l=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(n)===!1||(l=l&&m.synchronous,a.unshift(m.fulfilled,m.rejected))});const c=[];this.interceptors.response.forEach(function(m){c.push(m.fulfilled,m.rejected)});let u,h=0,d;if(!l){const _=[cf.bind(this),void 0];for(_.unshift.apply(_,a),_.push.apply(_,c),d=_.length,u=Promise.resolve(n);h<d;)u=u.then(_[h++],_[h++]);return u}d=a.length;let p=n;for(h=0;h<d;){const _=a[h++],m=a[h++];try{p=_(p)}catch(b){m.call(this,b);break}}try{u=cf.call(this,p)}catch(_){return Promise.reject(_)}for(h=0,d=c.length;h<d;)u=u.then(c[h++],c[h++]);return u}getUri(e){e=Zn(this.defaults,e);const n=km(e.baseURL,e.url);return Rm(n,e.params,e.paramsSerializer)}}v.forEach(["delete","get","head","options"],function(e){Wn.prototype[e]=function(n,s){return this.request(Zn(s||{},{method:e,url:n,data:(s||{}).data}))}});v.forEach(["post","put","patch"],function(e){function n(s){return function(i,o,a){return this.request(Zn(a||{},{method:e,headers:s?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}Wn.prototype[e]=n(),Wn.prototype[e+"Form"]=n(!0)});class uu{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const s=this;this.promise.then(r=>{if(!s._listeners)return;let i=s._listeners.length;for(;i-- >0;)s._listeners[i](r);s._listeners=null}),this.promise.then=r=>{let i;const o=new Promise(a=>{s.subscribe(a),i=a}).then(r);return o.cancel=function(){s.unsubscribe(i)},o},e(function(i,o,a){s.reason||(s.reason=new Vs(i,o,a),n(s.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=s=>{e.abort(s)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new uu(function(r){e=r}),cancel:e}}}function dF(t){return function(n){return t.apply(null,n)}}function fF(t){return v.isObject(t)&&t.isAxiosError===!0}const Ml={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ml).forEach(([t,e])=>{Ml[e]=t});function $m(t){const e=new Wn(t),n=gm(Wn.prototype.request,e);return v.extend(n,Wn.prototype,e,{allOwnKeys:!0}),v.extend(n,e,null,{allOwnKeys:!0}),n.create=function(r){return $m(Zn(t,r))},n}const Ee=$m(oi);Ee.Axios=Wn;Ee.CanceledError=Vs;Ee.CancelToken=uu;Ee.isCancel=Om;Ee.VERSION=Fm;Ee.toFormData=ta;Ee.AxiosError=G;Ee.Cancel=Ee.CanceledError;Ee.all=function(e){return Promise.all(e)};Ee.spread=dF;Ee.isAxiosError=fF;Ee.mergeConfig=Zn;Ee.AxiosHeaders=ze;Ee.formToJSON=t=>Pm(v.isHTMLForm(t)?new FormData(t):t);Ee.getAdapter=Mm.getAdapter;Ee.HttpStatusCode=Ml;Ee.default=Ee;const pF=Vr({name:"HomeView",props:{isLogin:{type:Boolean,default:!1}},setup(){const t=ct(!1),e=ct([]),n=ct([]),s=new Array,r=ct(s),i=ct(""),o=ct("");return Ql(()=>{_l(mR,a=>{const l=a.val();e.value=Object.values(l)},a=>{console.error("讀取專案資料時出錯",a)}),_l(yR,a=>{const l=a.val();n.value=Object.values(l)},a=>{console.error("讀取理監事資料時出錯",a)})}),{isLoading:t,projects:e,supervisors:n,visibleEmails:r,message:i,result:o}},methods:{toggleLogin(){this.$emit("toggleLogin")},toggleEmail(t){this.visibleEmails.includes(t)?this.visibleEmails.splice(this.visibleEmails.indexOf(t),1):this.visibleEmails.push(t)},sendMessage(){this.isLoading=!0,console.log(this.message),this.message.endsWith("？")||(this.message+="？"),Ee.get("https://members-backend.alearn13994229.workers.dev/ai/"+this.message,{headers:{"Content-Type":"application/json"}}).then(t=>{console.log(t),this.result=t.data,this.isLoading=!1})},parseResult(t){return t==="。"?"請說得詳細一點":t}}}),gF={class:"ui container"},_F={class:"ui segment"},mF={class:"ui input"},yF={class:"result"},vF={key:0},bF={key:1},EF={class:"ui four doubling stackable cards"},wF={class:"card"},CF={class:"content"},SF={class:"description"},TF={key:0},IF=["href"],RF={key:1};function AF(t,e,n,s,r,i){return Oe(),Ue("main",gF,[e[6]||(e[6]=F("h1",{class:"ui header"},"自主學習促進會",-1)),e[7]||(e[7]=F("h2",{class:"ui header"},"與AI對話",-1)),F("div",_F,[F("div",mF,[vi(F("input",{autofocus:"",type:"text",placeholder:"與AI對話...","onUpdate:modelValue":e[0]||(e[0]=o=>t.message=o),onKeyup:e[1]||(e[1]=rb((...o)=>t.sendMessage&&t.sendMessage(...o),["enter"]))},null,544),[[Xa,t.message]]),F("button",{class:"ui button",onClick:e[2]||(e[2]=(...o)=>t.sendMessage&&t.sendMessage(...o))},"送出")]),F("div",yF,[t.result===""&&t.message!==""&&t.isLoading?(Oe(),Ue("p",vF,"載入中，請稍候...")):t.result!==""?(Oe(),Ue("p",bF,Ua(t.parseResult(t.result)),1)):Mi("",!0)])]),F("div",EF,[e[5]||(e[5]=Ev('<div class="card" data-v-770758cf><div class="content" data-v-770758cf><div class="header" data-v-770758cf>本會歷史</div><div class="description" style="max-height:300px;overflow-y:auto;" data-v-770758cf><p data-v-770758cf>自主學習促進會的歷史可追溯至1994年種籽親子實驗小學的創立，這是台灣民主學校的先驅。</p><p data-v-770758cf>1998年，台北市自主學習實驗計畫開始，為期六年，證明了自主學習理念在中學階段的可行性。</p><p data-v-770758cf>2000年，面臨停辦危機時，學生發起了台灣首次中學生自發的學運，成功爭取續辦至第三屆學生畢業。</p><p data-v-770758cf>2001年3月，為延續自主學習的經驗與知識，本會正式成立。</p><p data-v-770758cf>2006-2008年間，本會通過&quot;自學中心&quot;提供課程和營隊，幫助體制內學生體驗自主學習。</p><p data-v-770758cf>2008-2010年，&quot;自主培力學園&quot;為拒學、懼學和想自學的青少年提供全日制團體學習。</p><p data-v-770758cf>2009年起，獨立教育工作者社群成立，致力於開設學習團體、培訓教師、支持家長，並開發自學資源。</p><p data-v-770758cf>本會持續致力於推動自主學習理念，為台灣教育改革提供新方向和活力。</p></div></div></div>',1)),F("div",wF,[F("div",CF,[e[4]||(e[4]=F("div",{class:"header"},"網址連結",-1)),F("div",SF,[e[3]||(e[3]=F("ul",null,[F("li",null,[F("a",{href:"https://www.alearn.org",target:"_blank",rel:"noopener noreferrer"},"官方網站")]),F("li",null,[F("a",{href:"https://www.facebook.com/alearnTW",target:"_blank",rel:"noopener noreferrer"},"臉書「自主學習促進會」專頁")]),F("li",null,[F("a",{href:"https://www.facebook.com/groups/homeschooltw",target:"_blank",rel:"noopener noreferrer"},"臉書「在家自學社群」社團")])],-1)),t.projects.length?(Oe(),Ue("ul",TF,[(Oe(!0),Ue(ut,null,Wy(t.projects,o=>(Oe(),Ue("li",{key:o.id},[F("a",{href:o.website,target:"_blank",rel:"noopener noreferrer"},Ua(o.full_name),9,IF)]))),128))])):(Oe(),Ue("p",RF,"載入中..."))])])])])])}const PF=nu(pF,[["render",AF],["__scopeId","data-v-770758cf"]]),OF=FL({history:fL("/"),routes:[{path:"/",name:"home",component:PF},{path:"/faq",name:"FaqView",component:()=>Oa(()=>import("./FaqView-CaAXGsns.js"),__vite__mapDeps([0,1]))},{path:"/edit_faq/:id",name:"EditFaqView",component:()=>Oa(()=>import("./EditFaqView-C4spIxJS.js"),__vite__mapDeps([2,3]))},{path:"/about",name:"about",component:()=>Oa(()=>import("./AboutView-DLS80IO9.js"),__vite__mapDeps([4,5]))}]}),hu=ab(DD);hu.use(db());hu.use(OF);hu.mount("#app");export{ut as F,nu as _,Ee as a,F as b,Ue as c,Vr as d,Wy as e,Oe as f,Tt as g,Mi as h,_l as i,Ql as o,mR as p,ct as r,yR as s,Ua as t,NF as u,Xa as v,vi as w};
