const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ChangeLogView-BD6Wsish.js","assets/ChangeLogView-BvE15HZA.css","assets/MapsView-CLhmIISi.js","assets/leaflet-src-B3P9xrRg.js","assets/leaflet-src-HupOsEJb.css","assets/Loader-IbpM512-.js","assets/Loader-D04Knui3.css","assets/mix-O88PJOmL.js","assets/MapsView-BZlJAW8u.css","assets/FlagView-Vioa0WbO.js","assets/Card-XD_CP9hc.js","assets/Card-BUJkKdzi.css","assets/FlagView-BdJvIrvN.css","assets/ProfileView-CxusCz00.js","assets/ProfileView-vAjvlRd2.css","assets/PrivacyPolicyView-2CNWO9ub.js","assets/PrivacyPolicyView-CBD_1jnB.css","assets/FeedbackView-DUSZEGq7.js","assets/FeedbackView-DR4UgRx8.css","assets/FaqView-DlPW2HMQ.js","assets/FaqView-C2ba5Deb.css","assets/CreateFaqView-DFipXZt0.js","assets/CreateFaqView-_Khm9L0Y.css","assets/EditFaqView-D0t2qIom.js","assets/EditFaqView-BijKtgWG.css","assets/AboutView-2QdbflnZ.js","assets/AboutView-CTwSeMp2.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Hl(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ue={},ds=[],Nt=()=>{},zm=()=>!1,So=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),jl=t=>t.startsWith("onUpdate:"),Pe=Object.assign,Vl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Ym=Object.prototype.hasOwnProperty,se=(t,e)=>Ym.call(t,e),H=Array.isArray,fs=t=>Yr(t)==="[object Map]",ks=t=>Yr(t)==="[object Set]",Eu=t=>Yr(t)==="[object Date]",K=t=>typeof t=="function",we=t=>typeof t=="string",Dt=t=>typeof t=="symbol",ge=t=>t!==null&&typeof t=="object",vf=t=>(ge(t)||K(t))&&K(t.then)&&K(t.catch),bf=Object.prototype.toString,Yr=t=>bf.call(t),Jm=t=>Yr(t).slice(8,-1),Ef=t=>Yr(t)==="[object Object]",Wl=t=>we(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,hr=Hl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),To=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Qm=/-(\w)/g,ct=To(t=>t.replace(Qm,(e,n)=>n?n.toUpperCase():"")),Xm=/\B([A-Z])/g,An=To(t=>t.replace(Xm,"-$1").toLowerCase()),Ro=To(t=>t.charAt(0).toUpperCase()+t.slice(1)),ua=To(t=>t?`on${Ro(t)}`:""),vn=(t,e)=>!Object.is(t,e),Ri=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},wf=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Bi=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let wu;const Ao=()=>wu||(wu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ql(t){if(H(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=we(s)?ny(s):ql(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(we(t)||ge(t))return t}const Zm=/;(?![^(]*\))/g,ey=/:([^]+)/,ty=/\/\*[^]*?\*\//g;function ny(t){const e={};return t.replace(ty,"").split(Zm).forEach(n=>{if(n){const s=n.split(ey);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Kn(t){let e="";if(we(t))e=t;else if(H(t))for(let n=0;n<t.length;n++){const s=Kn(t[n]);s&&(e+=s+" ")}else if(ge(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const sy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ry=Hl(sy);function Cf(t){return!!t||t===""}function iy(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Jr(t[s],e[s]);return n}function Jr(t,e){if(t===e)return!0;let n=Eu(t),s=Eu(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Dt(t),s=Dt(e),n||s)return t===e;if(n=H(t),s=H(e),n||s)return n&&s?iy(t,e):!1;if(n=ge(t),s=ge(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Jr(t[o],e[o]))return!1}}return String(t)===String(e)}function Kl(t,e){return t.findIndex(n=>Jr(n,e))}const If=t=>!!(t&&t.__v_isRef===!0),Wa=t=>we(t)?t:t==null?"":H(t)||ge(t)&&(t.toString===bf||!K(t.toString))?If(t)?Wa(t.value):JSON.stringify(t,Sf,2):String(t),Sf=(t,e)=>If(e)?Sf(t,e.value):fs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],i)=>(n[ha(s,i)+" =>"]=r,n),{})}:ks(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>ha(n))}:Dt(e)?ha(e):ge(e)&&!H(e)&&!Ef(e)?String(e):e,ha=(t,e="")=>{var n;return Dt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let nt;class Tf{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=nt,!e&&nt&&(this.index=(nt.scopes||(nt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=nt;try{return nt=this,e()}finally{nt=n}}}on(){nt=this}off(){nt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function oy(t){return new Tf(t)}function ay(){return nt}let fe;const da=new WeakSet;class Rf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,nt&&nt.active&&nt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,da.has(this)&&(da.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Pf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Cu(this),Of(this);const e=fe,n=mt;fe=this,mt=!0;try{return this.fn()}finally{Nf(this),fe=e,mt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Yl(e);this.deps=this.depsTail=void 0,Cu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?da.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){qa(this)&&this.run()}get dirty(){return qa(this)}}let Af=0,dr,fr;function Pf(t,e=!1){if(t.flags|=8,e){t.next=fr,fr=t;return}t.next=dr,dr=t}function Gl(){Af++}function zl(){if(--Af>0)return;if(fr){let e=fr;for(fr=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;dr;){let e=dr;for(dr=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Of(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Nf(t){let e,n=t.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),Yl(s),ly(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}t.deps=e,t.depsTail=n}function qa(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(kf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function kf(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Tr))return;t.globalVersion=Tr;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!qa(t)){t.flags&=-3;return}const n=fe,s=mt;fe=t,mt=!0;try{Of(t);const r=t.fn(t._value);(e.version===0||vn(r,t._value))&&(t._value=r,e.version++)}catch(r){throw e.version++,r}finally{fe=n,mt=s,Nf(t),t.flags&=-3}}function Yl(t,e=!1){const{dep:n,prevSub:s,nextSub:r}=t;if(s&&(s.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Yl(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function ly(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let mt=!0;const xf=[];function Pn(){xf.push(mt),mt=!1}function On(){const t=xf.pop();mt=t===void 0?!0:t}function Cu(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=fe;fe=void 0;try{e()}finally{fe=n}}}let Tr=0;class cy{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Jl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!fe||!mt||fe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==fe)n=this.activeLink=new cy(fe,this),fe.deps?(n.prevDep=fe.depsTail,fe.depsTail.nextDep=n,fe.depsTail=n):fe.deps=fe.depsTail=n,Df(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=fe.depsTail,n.nextDep=void 0,fe.depsTail.nextDep=n,fe.depsTail=n,fe.deps===n&&(fe.deps=s)}return n}trigger(e){this.version++,Tr++,this.notify(e)}notify(e){Gl();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{zl()}}}function Df(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Df(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ka=new WeakMap,Wn=Symbol(""),Ga=Symbol(""),Rr=Symbol("");function xe(t,e,n){if(mt&&fe){let s=Ka.get(t);s||Ka.set(t,s=new Map);let r=s.get(n);r||(s.set(n,r=new Jl),r.map=s,r.key=n),r.track()}}function Ht(t,e,n,s,r,i){const o=Ka.get(t);if(!o){Tr++;return}const a=l=>{l&&l.trigger()};if(Gl(),e==="clear")o.forEach(a);else{const l=H(t),c=l&&Wl(n);if(l&&n==="length"){const u=Number(s);o.forEach((h,d)=>{(d==="length"||d===Rr||!Dt(d)&&d>=u)&&a(h)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(Rr)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Wn)),fs(t)&&a(o.get(Ga)));break;case"delete":l||(a(o.get(Wn)),fs(t)&&a(o.get(Ga)));break;case"set":fs(t)&&a(o.get(Wn));break}}zl()}function os(t){const e=ne(t);return e===t?e:(xe(e,"iterate",Rr),lt(t)?e:e.map(De))}function Po(t){return xe(t=ne(t),"iterate",Rr),t}const uy={__proto__:null,[Symbol.iterator](){return fa(this,Symbol.iterator,De)},concat(...t){return os(this).concat(...t.map(e=>H(e)?os(e):e))},entries(){return fa(this,"entries",t=>(t[1]=De(t[1]),t))},every(t,e){return $t(this,"every",t,e,void 0,arguments)},filter(t,e){return $t(this,"filter",t,e,n=>n.map(De),arguments)},find(t,e){return $t(this,"find",t,e,De,arguments)},findIndex(t,e){return $t(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return $t(this,"findLast",t,e,De,arguments)},findLastIndex(t,e){return $t(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return $t(this,"forEach",t,e,void 0,arguments)},includes(...t){return pa(this,"includes",t)},indexOf(...t){return pa(this,"indexOf",t)},join(t){return os(this).join(t)},lastIndexOf(...t){return pa(this,"lastIndexOf",t)},map(t,e){return $t(this,"map",t,e,void 0,arguments)},pop(){return Js(this,"pop")},push(...t){return Js(this,"push",t)},reduce(t,...e){return Iu(this,"reduce",t,e)},reduceRight(t,...e){return Iu(this,"reduceRight",t,e)},shift(){return Js(this,"shift")},some(t,e){return $t(this,"some",t,e,void 0,arguments)},splice(...t){return Js(this,"splice",t)},toReversed(){return os(this).toReversed()},toSorted(t){return os(this).toSorted(t)},toSpliced(...t){return os(this).toSpliced(...t)},unshift(...t){return Js(this,"unshift",t)},values(){return fa(this,"values",De)}};function fa(t,e,n){const s=Po(t),r=s[e]();return s!==t&&!lt(t)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.value&&(i.value=n(i.value)),i}),r}const hy=Array.prototype;function $t(t,e,n,s,r,i){const o=Po(t),a=o!==t&&!lt(t),l=o[e];if(l!==hy[e]){const h=l.apply(t,i);return a?De(h):h}let c=n;o!==t&&(a?c=function(h,d){return n.call(this,De(h),d,t)}:n.length>2&&(c=function(h,d){return n.call(this,h,d,t)}));const u=l.call(o,c,s);return a&&r?r(u):u}function Iu(t,e,n,s){const r=Po(t);let i=n;return r!==t&&(lt(t)?n.length>3&&(i=function(o,a,l){return n.call(this,o,a,l,t)}):i=function(o,a,l){return n.call(this,o,De(a),l,t)}),r[e](i,...s)}function pa(t,e,n){const s=ne(t);xe(s,"iterate",Rr);const r=s[e](...n);return(r===-1||r===!1)&&Zl(n[0])?(n[0]=ne(n[0]),s[e](...n)):r}function Js(t,e,n=[]){Pn(),Gl();const s=ne(t)[e].apply(t,n);return zl(),On(),s}const dy=Hl("__proto__,__v_isRef,__isVue"),Lf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Dt));function fy(t){Dt(t)||(t=String(t));const e=ne(this);return xe(e,"has",t),e.hasOwnProperty(t)}class Mf{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?Cy:Bf:i?Uf:$f).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=H(e);if(!r){let l;if(o&&(l=uy[n]))return l;if(n==="hasOwnProperty")return fy}const a=Reflect.get(e,n,Fe(e)?e:s);return(Dt(n)?Lf.has(n):dy(n))||(r||xe(e,"get",n),i)?a:Fe(a)?o&&Wl(n)?a:a.value:ge(a)?r?jf(a):Oo(a):a}}class Ff extends Mf{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];if(!this._isShallow){const l=Gn(i);if(!lt(s)&&!Gn(s)&&(i=ne(i),s=ne(s)),!H(e)&&Fe(i)&&!Fe(s))return l?!1:(i.value=s,!0)}const o=H(e)&&Wl(n)?Number(n)<e.length:se(e,n),a=Reflect.set(e,n,s,Fe(e)?e:r);return e===ne(r)&&(o?vn(s,i)&&Ht(e,"set",n,s):Ht(e,"add",n,s)),a}deleteProperty(e,n){const s=se(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&Ht(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!Dt(n)||!Lf.has(n))&&xe(e,"has",n),s}ownKeys(e){return xe(e,"iterate",H(e)?"length":Wn),Reflect.ownKeys(e)}}class py extends Mf{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const gy=new Ff,_y=new py,my=new Ff(!0);const za=t=>t,yi=t=>Reflect.getPrototypeOf(t);function yy(t,e,n){return function(...s){const r=this.__v_raw,i=ne(r),o=fs(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...s),u=n?za:e?Ya:De;return!e&&xe(i,"iterate",l?Ga:Wn),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function vi(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function vy(t,e){const n={get(r){const i=this.__v_raw,o=ne(i),a=ne(r);t||(vn(r,a)&&xe(o,"get",r),xe(o,"get",a));const{has:l}=yi(o),c=e?za:t?Ya:De;if(l.call(o,r))return c(i.get(r));if(l.call(o,a))return c(i.get(a));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!t&&xe(ne(r),"iterate",Wn),Reflect.get(r,"size",r)},has(r){const i=this.__v_raw,o=ne(i),a=ne(r);return t||(vn(r,a)&&xe(o,"has",r),xe(o,"has",a)),r===a?i.has(r):i.has(r)||i.has(a)},forEach(r,i){const o=this,a=o.__v_raw,l=ne(a),c=e?za:t?Ya:De;return!t&&xe(l,"iterate",Wn),a.forEach((u,h)=>r.call(i,c(u),c(h),o))}};return Pe(n,t?{add:vi("add"),set:vi("set"),delete:vi("delete"),clear:vi("clear")}:{add(r){!e&&!lt(r)&&!Gn(r)&&(r=ne(r));const i=ne(this);return yi(i).has.call(i,r)||(i.add(r),Ht(i,"add",r,r)),this},set(r,i){!e&&!lt(i)&&!Gn(i)&&(i=ne(i));const o=ne(this),{has:a,get:l}=yi(o);let c=a.call(o,r);c||(r=ne(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,i),c?vn(i,u)&&Ht(o,"set",r,i):Ht(o,"add",r,i),this},delete(r){const i=ne(this),{has:o,get:a}=yi(i);let l=o.call(i,r);l||(r=ne(r),l=o.call(i,r)),a&&a.call(i,r);const c=i.delete(r);return l&&Ht(i,"delete",r,void 0),c},clear(){const r=ne(this),i=r.size!==0,o=r.clear();return i&&Ht(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=yy(r,t,e)}),n}function Ql(t,e){const n=vy(t,e);return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(se(n,r)&&r in s?n:s,r,i)}const by={get:Ql(!1,!1)},Ey={get:Ql(!1,!0)},wy={get:Ql(!0,!1)};const $f=new WeakMap,Uf=new WeakMap,Bf=new WeakMap,Cy=new WeakMap;function Iy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Sy(t){return t.__v_skip||!Object.isExtensible(t)?0:Iy(Jm(t))}function Oo(t){return Gn(t)?t:Xl(t,!1,gy,by,$f)}function Hf(t){return Xl(t,!1,my,Ey,Uf)}function jf(t){return Xl(t,!0,_y,wy,Bf)}function Xl(t,e,n,s,r){if(!ge(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=Sy(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function ps(t){return Gn(t)?ps(t.__v_raw):!!(t&&t.__v_isReactive)}function Gn(t){return!!(t&&t.__v_isReadonly)}function lt(t){return!!(t&&t.__v_isShallow)}function Zl(t){return t?!!t.__v_raw:!1}function ne(t){const e=t&&t.__v_raw;return e?ne(e):t}function Vf(t){return!se(t,"__v_skip")&&Object.isExtensible(t)&&wf(t,"__v_skip",!0),t}const De=t=>ge(t)?Oo(t):t,Ya=t=>ge(t)?jf(t):t;function Fe(t){return t?t.__v_isRef===!0:!1}function ht(t){return Wf(t,!1)}function Ty(t){return Wf(t,!0)}function Wf(t,e){return Fe(t)?t:new Ry(t,e)}class Ry{constructor(e,n){this.dep=new Jl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ne(e),this._value=n?e:De(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||lt(e)||Gn(e);e=s?e:ne(e),vn(e,n)&&(this._rawValue=e,this._value=s?e:De(e),this.dep.trigger())}}function gs(t){return Fe(t)?t.value:t}const Ay={get:(t,e,n)=>e==="__v_raw"?t:gs(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Fe(r)&&!Fe(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function qf(t){return ps(t)?t:new Proxy(t,Ay)}class Py{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Jl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Tr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&fe!==this)return Pf(this,!0),!0}get value(){const e=this.dep.track();return kf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Oy(t,e,n=!1){let s,r;return K(t)?s=t:(s=t.get,r=t.set),new Py(s,r,n)}const bi={},Hi=new WeakMap;let Fn;function Ny(t,e=!1,n=Fn){if(n){let s=Hi.get(n);s||Hi.set(n,s=[]),s.push(t)}}function ky(t,e,n=ue){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:a,call:l}=n,c=x=>r?x:lt(x)||r===!1||r===0?jt(x,1):jt(x);let u,h,d,p,_=!1,m=!1;if(Fe(t)?(h=()=>t.value,_=lt(t)):ps(t)?(h=()=>c(t),_=!0):H(t)?(m=!0,_=t.some(x=>ps(x)||lt(x)),h=()=>t.map(x=>{if(Fe(x))return x.value;if(ps(x))return c(x);if(K(x))return l?l(x,2):x()})):K(t)?e?h=l?()=>l(t,2):t:h=()=>{if(d){Pn();try{d()}finally{On()}}const x=Fn;Fn=u;try{return l?l(t,3,[p]):t(p)}finally{Fn=x}}:h=Nt,e&&r){const x=h,B=r===!0?1/0:r;h=()=>jt(x(),B)}const b=ay(),T=()=>{u.stop(),b&&Vl(b.effects,u)};if(i&&e){const x=e;e=(...B)=>{x(...B),T()}}let R=m?new Array(t.length).fill(bi):bi;const O=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(e){const B=u.run();if(r||_||(m?B.some((ee,Q)=>vn(ee,R[Q])):vn(B,R))){d&&d();const ee=Fn;Fn=u;try{const Q=[B,R===bi?void 0:m&&R[0]===bi?[]:R,p];l?l(e,3,Q):e(...Q),R=B}finally{Fn=ee}}}else u.run()};return a&&a(O),u=new Rf(h),u.scheduler=o?()=>o(O,!1):O,p=x=>Ny(x,!1,u),d=u.onStop=()=>{const x=Hi.get(u);if(x){if(l)l(x,4);else for(const B of x)B();Hi.delete(u)}},e?s?O(!0):R=u.run():o?o(O.bind(null,!0),!0):u.run(),T.pause=u.pause.bind(u),T.resume=u.resume.bind(u),T.stop=T,T}function jt(t,e=1/0,n){if(e<=0||!ge(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Fe(t))jt(t.value,e,n);else if(H(t))for(let s=0;s<t.length;s++)jt(t[s],e,n);else if(ks(t)||fs(t))t.forEach(s=>{jt(s,e,n)});else if(Ef(t)){for(const s in t)jt(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&jt(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Qr(t,e,n,s){try{return s?t(...s):t()}catch(r){No(r,e,n)}}function Lt(t,e,n,s){if(K(t)){const r=Qr(t,e,n,s);return r&&vf(r)&&r.catch(i=>{No(i,e,n)}),r}if(H(t)){const r=[];for(let i=0;i<t.length;i++)r.push(Lt(t[i],e,n,s));return r}}function No(t,e,n,s=!0){const r=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ue;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](t,l,c)===!1)return}a=a.parent}if(i){Pn(),Qr(i,null,10,[t,l,c]),On();return}}xy(t,n,r,s,o)}function xy(t,e,n,s=!0,r=!1){if(r)throw t;console.error(t)}const je=[];let At=-1;const _s=[];let hn=null,ls=0;const Kf=Promise.resolve();let ji=null;function ec(t){const e=ji||Kf;return t?e.then(this?t.bind(this):t):e}function Dy(t){let e=At+1,n=je.length;for(;e<n;){const s=e+n>>>1,r=je[s],i=Ar(r);i<t||i===t&&r.flags&2?e=s+1:n=s}return e}function tc(t){if(!(t.flags&1)){const e=Ar(t),n=je[je.length-1];!n||!(t.flags&2)&&e>=Ar(n)?je.push(t):je.splice(Dy(e),0,t),t.flags|=1,Gf()}}function Gf(){ji||(ji=Kf.then(Yf))}function Ly(t){H(t)?_s.push(...t):hn&&t.id===-1?hn.splice(ls+1,0,t):t.flags&1||(_s.push(t),t.flags|=1),Gf()}function Su(t,e,n=At+1){for(;n<je.length;n++){const s=je[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;je.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function zf(t){if(_s.length){const e=[...new Set(_s)].sort((n,s)=>Ar(n)-Ar(s));if(_s.length=0,hn){hn.push(...e);return}for(hn=e,ls=0;ls<hn.length;ls++){const n=hn[ls];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}hn=null,ls=0}}const Ar=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Yf(t){try{for(At=0;At<je.length;At++){const e=je[At];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Qr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;At<je.length;At++){const e=je[At];e&&(e.flags&=-2)}At=-1,je.length=0,zf(),ji=null,(je.length||_s.length)&&Yf()}}let st=null,Jf=null;function Vi(t){const e=st;return st=t,Jf=t&&t.type.__scopeId||null,e}function et(t,e=st,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Du(-1);const i=Vi(e);let o;try{o=t(...r)}finally{Vi(i),s._d&&Du(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Ai(t,e){if(st===null)return t;const n=Lo(st),s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[i,o,a,l=ue]=e[r];i&&(K(i)&&(i={mounted:i,updated:i}),i.deep&&jt(o),s.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Ln(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let l=a.dir[s];l&&(Pn(),Lt(l,n,8,[t.el,a,t,e]),On())}}const My=Symbol("_vte"),Fy=t=>t.__isTeleport;function nc(t,e){t.shapeFlag&6&&t.component?(t.transition=e,nc(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Xr(t,e){return K(t)?Pe({name:t.name},e,{setup:t}):t}function Qf(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ja(t,e,n,s,r=!1){if(H(t)){t.forEach((_,m)=>Ja(_,e&&(H(e)?e[m]:e),n,s,r));return}if(pr(s)&&!r)return;const i=s.shapeFlag&4?Lo(s.component):s.el,o=r?null:i,{i:a,r:l}=t,c=e&&e.r,u=a.refs===ue?a.refs={}:a.refs,h=a.setupState,d=ne(h),p=h===ue?()=>!1:_=>se(d,_);if(c!=null&&c!==l&&(we(c)?(u[c]=null,p(c)&&(h[c]=null)):Fe(c)&&(c.value=null)),K(l))Qr(l,a,12,[o,u]);else{const _=we(l),m=Fe(l);if(_||m){const b=()=>{if(t.f){const T=_?p(l)?h[l]:u[l]:l.value;r?H(T)&&Vl(T,i):H(T)?T.includes(i)||T.push(i):_?(u[l]=[i],p(l)&&(h[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else _?(u[l]=o,p(l)&&(h[l]=o)):m&&(l.value=o,t.k&&(u[t.k]=o))};o?(b.id=-1,tt(b,n)):b()}}}Ao().requestIdleCallback;Ao().cancelIdleCallback;const pr=t=>!!t.type.__asyncLoader,Xf=t=>t.type.__isKeepAlive;function $y(t,e){Zf(t,"a",e)}function Uy(t,e){Zf(t,"da",e)}function Zf(t,e,n=Me){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(ko(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Xf(r.parent.vnode)&&By(s,e,n,r),r=r.parent}}function By(t,e,n,s){const r=ko(e,t,s,!0);ep(()=>{Vl(s[e],r)},n)}function ko(t,e,n=Me,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Pn();const a=Zr(n),l=Lt(e,n,t,o);return a(),On(),l});return s?r.unshift(i):r.push(i),i}}const Zt=t=>(e,n=Me)=>{(!Or||t==="sp")&&ko(t,(...s)=>e(...s),n)},Hy=Zt("bm"),sc=Zt("m"),jy=Zt("bu"),Vy=Zt("u"),Wy=Zt("bum"),ep=Zt("um"),qy=Zt("sp"),Ky=Zt("rtg"),Gy=Zt("rtc");function zy(t,e=Me){ko("ec",t,e)}const Yy="components";function Ei(t,e){return Qy(Yy,t,!0,e)||t}const Jy=Symbol.for("v-ndc");function Qy(t,e,n=!0,s=!1){const r=st||Me;if(r){const i=r.type;{const a=Uv(i,!1);if(a&&(a===e||a===ct(e)||a===Ro(ct(e))))return i}const o=Tu(r[t]||i[t],e)||Tu(r.appContext[t],e);return!o&&s?i:o}}function Tu(t,e){return t&&(t[e]||t[ct(e)]||t[Ro(ct(e))])}function Xy(t,e,n,s){let r;const i=n,o=H(t);if(o||we(t)){const a=o&&ps(t);let l=!1;a&&(l=!lt(t),t=Po(t)),r=new Array(t.length);for(let c=0,u=t.length;c<u;c++)r[c]=e(l?De(t[c]):t[c],c,void 0,i)}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,i)}else if(ge(t))if(t[Symbol.iterator])r=Array.from(t,(a,l)=>e(a,l,void 0,i));else{const a=Object.keys(t);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(t[u],u,l,i)}}else r=[];return r}const Qa=t=>t?Ep(t)?Lo(t):Qa(t.parent):null,gr=Pe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Qa(t.parent),$root:t=>Qa(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>rc(t),$forceUpdate:t=>t.f||(t.f=()=>{tc(t.update)}),$nextTick:t=>t.n||(t.n=ec.bind(t.proxy)),$watch:t=>vv.bind(t)}),ga=(t,e)=>t!==ue&&!t.__isScriptSetup&&se(t,e),Zy={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(ga(s,e))return o[e]=1,s[e];if(r!==ue&&se(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&se(c,e))return o[e]=3,i[e];if(n!==ue&&se(n,e))return o[e]=4,n[e];Xa&&(o[e]=0)}}const u=gr[e];let h,d;if(u)return e==="$attrs"&&xe(t.attrs,"get",""),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ue&&se(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,se(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return ga(r,e)?(r[e]=n,!0):s!==ue&&se(s,e)?(s[e]=n,!0):se(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==ue&&se(t,o)||ga(e,o)||(a=i[0])&&se(a,o)||se(s,o)||se(gr,o)||se(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:se(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ru(t){return H(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Xa=!0;function ev(t){const e=rc(t),n=t.proxy,s=t.ctx;Xa=!1,e.beforeCreate&&Au(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:_,activated:m,deactivated:b,beforeDestroy:T,beforeUnmount:R,destroyed:O,unmounted:x,render:B,renderTracked:ee,renderTriggered:Q,errorCaptured:Oe,serverPrefetch:Ue,expose:ot,inheritAttrs:on,components:Dn,directives:Ct,filters:zs}=e;if(c&&tv(c,s,null),o)for(const ae in o){const te=o[ae];K(te)&&(s[ae]=te.bind(n))}if(r){const ae=r.call(n,n);ge(ae)&&(t.data=Oo(ae))}if(Xa=!0,i)for(const ae in i){const te=i[ae],Ft=K(te)?te.bind(n,n):K(te.get)?te.get.bind(n,n):Nt,an=!K(te)&&K(te.set)?te.set.bind(n):Nt,It=ft({get:Ft,set:an});Object.defineProperty(s,ae,{enumerable:!0,configurable:!0,get:()=>It.value,set:qe=>It.value=qe})}if(a)for(const ae in a)tp(a[ae],s,n,ae);if(l){const ae=K(l)?l.call(n):l;Reflect.ownKeys(ae).forEach(te=>{Pi(te,ae[te])})}u&&Au(u,t,"c");function Se(ae,te){H(te)?te.forEach(Ft=>ae(Ft.bind(n))):te&&ae(te.bind(n))}if(Se(Hy,h),Se(sc,d),Se(jy,p),Se(Vy,_),Se($y,m),Se(Uy,b),Se(zy,Oe),Se(Gy,ee),Se(Ky,Q),Se(Wy,R),Se(ep,x),Se(qy,Ue),H(ot))if(ot.length){const ae=t.exposed||(t.exposed={});ot.forEach(te=>{Object.defineProperty(ae,te,{get:()=>n[te],set:Ft=>n[te]=Ft})})}else t.exposed||(t.exposed={});B&&t.render===Nt&&(t.render=B),on!=null&&(t.inheritAttrs=on),Dn&&(t.components=Dn),Ct&&(t.directives=Ct),Ue&&Qf(t)}function tv(t,e,n=Nt){H(t)&&(t=Za(t));for(const s in t){const r=t[s];let i;ge(r)?"default"in r?i=yt(r.from||s,r.default,!0):i=yt(r.from||s):i=yt(r),Fe(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function Au(t,e,n){Lt(H(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function tp(t,e,n,s){let r=s.includes(".")?gp(n,s):()=>n[s];if(we(t)){const i=e[t];K(i)&&_r(r,i)}else if(K(t))_r(r,t.bind(n));else if(ge(t))if(H(t))t.forEach(i=>tp(i,e,n,s));else{const i=K(t.handler)?t.handler.bind(n):e[t.handler];K(i)&&_r(r,i,t)}}function rc(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!r.length&&!n&&!s?l=e:(l={},r.length&&r.forEach(c=>Wi(l,c,o,!0)),Wi(l,e,o)),ge(e)&&i.set(e,l),l}function Wi(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Wi(t,i,n,!0),r&&r.forEach(o=>Wi(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=nv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const nv={data:Pu,props:Ou,emits:Ou,methods:lr,computed:lr,beforeCreate:Be,created:Be,beforeMount:Be,mounted:Be,beforeUpdate:Be,updated:Be,beforeDestroy:Be,beforeUnmount:Be,destroyed:Be,unmounted:Be,activated:Be,deactivated:Be,errorCaptured:Be,serverPrefetch:Be,components:lr,directives:lr,watch:rv,provide:Pu,inject:sv};function Pu(t,e){return e?t?function(){return Pe(K(t)?t.call(this,this):t,K(e)?e.call(this,this):e)}:e:t}function sv(t,e){return lr(Za(t),Za(e))}function Za(t){if(H(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Be(t,e){return t?[...new Set([].concat(t,e))]:e}function lr(t,e){return t?Pe(Object.create(null),t,e):e}function Ou(t,e){return t?H(t)&&H(e)?[...new Set([...t,...e])]:Pe(Object.create(null),Ru(t),Ru(e??{})):e}function rv(t,e){if(!t)return e;if(!e)return t;const n=Pe(Object.create(null),t);for(const s in e)n[s]=Be(t[s],e[s]);return n}function np(){return{app:null,config:{isNativeTag:zm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let iv=0;function ov(t,e){return function(s,r=null){K(s)||(s=Pe({},s)),r!=null&&!ge(r)&&(r=null);const i=np(),o=new WeakSet,a=[];let l=!1;const c=i.app={_uid:iv++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Hv,get config(){return i.config},set config(u){},use(u,...h){return o.has(u)||(u&&K(u.install)?(o.add(u),u.install(c,...h)):K(u)&&(o.add(u),u(c,...h))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,h){return h?(i.components[u]=h,c):i.components[u]},directive(u,h){return h?(i.directives[u]=h,c):i.directives[u]},mount(u,h,d){if(!l){const p=c._ceVNode||ce(s,r);return p.appContext=i,d===!0?d="svg":d===!1&&(d=void 0),h&&e?e(p,u):t(p,u,d),l=!0,c._container=u,u.__vue_app__=c,Lo(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Lt(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,h){return i.provides[u]=h,c},runWithContext(u){const h=ms;ms=c;try{return u()}finally{ms=h}}};return c}}let ms=null;function Pi(t,e){if(Me){let n=Me.provides;const s=Me.parent&&Me.parent.provides;s===n&&(n=Me.provides=Object.create(s)),n[t]=e}}function yt(t,e,n=!1){const s=Me||st;if(s||ms){const r=ms?ms._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&K(e)?e.call(s&&s.proxy):e}}const sp={},rp=()=>Object.create(sp),ip=t=>Object.getPrototypeOf(t)===sp;function av(t,e,n,s=!1){const r={},i=rp();t.propsDefaults=Object.create(null),op(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Hf(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function lv(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=ne(r),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(xo(t.emitsOptions,d))continue;const p=e[d];if(l)if(se(i,d))p!==i[d]&&(i[d]=p,c=!0);else{const _=ct(d);r[_]=el(l,a,_,p,t,!1)}else p!==i[d]&&(i[d]=p,c=!0)}}}else{op(t,e,r,i)&&(c=!0);let u;for(const h in a)(!e||!se(e,h)&&((u=An(h))===h||!se(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=el(l,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!se(e,h))&&(delete i[h],c=!0)}c&&Ht(t.attrs,"set","")}function op(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(hr(l))continue;const c=e[l];let u;r&&se(r,u=ct(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:xo(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(i){const l=ne(n),c=a||ue;for(let u=0;u<i.length;u++){const h=i[u];n[h]=el(r,l,h,c[h],t,!se(c,h))}}return o}function el(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=se(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&K(l)){const{propsDefaults:c}=r;if(n in c)s=c[n];else{const u=Zr(r);s=c[n]=l.call(null,e),u()}}else s=l;r.ce&&r.ce._setProp(n,s)}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===An(n))&&(s=!0))}return s}const cv=new WeakMap;function ap(t,e,n=!1){const s=n?cv:e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let l=!1;if(!K(t)){const u=h=>{l=!0;const[d,p]=ap(h,e,!0);Pe(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return ge(t)&&s.set(t,ds),ds;if(H(i))for(let u=0;u<i.length;u++){const h=ct(i[u]);Nu(h)&&(o[h]=ue)}else if(i)for(const u in i){const h=ct(u);if(Nu(h)){const d=i[u],p=o[h]=H(d)||K(d)?{type:d}:Pe({},d),_=p.type;let m=!1,b=!0;if(H(_))for(let T=0;T<_.length;++T){const R=_[T],O=K(R)&&R.name;if(O==="Boolean"){m=!0;break}else O==="String"&&(b=!1)}else m=K(_)&&_.name==="Boolean";p[0]=m,p[1]=b,(m||se(p,"default"))&&a.push(h)}}const c=[o,a];return ge(t)&&s.set(t,c),c}function Nu(t){return t[0]!=="$"&&!hr(t)}const lp=t=>t[0]==="_"||t==="$stable",ic=t=>H(t)?t.map(Pt):[Pt(t)],uv=(t,e,n)=>{if(e._n)return e;const s=et((...r)=>ic(e(...r)),n);return s._c=!1,s},cp=(t,e,n)=>{const s=t._ctx;for(const r in t){if(lp(r))continue;const i=t[r];if(K(i))e[r]=uv(r,i,s);else if(i!=null){const o=ic(i);e[r]=()=>o}}},up=(t,e)=>{const n=ic(e);t.slots.default=()=>n},hp=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},hv=(t,e,n)=>{const s=t.slots=rp();if(t.vnode.shapeFlag&32){const r=e._;r?(hp(s,e,n),n&&wf(s,"_",r,!0)):cp(e,s)}else e&&up(t,e)},dv=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=ue;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:hp(r,e,n):(i=!e.$stable,cp(e,r)),o=e}else e&&(up(t,e),o={default:1});if(i)for(const a in r)!lp(a)&&o[a]==null&&delete r[a]},tt=Tv;function fv(t){return pv(t)}function pv(t,e){const n=Ao();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:p=Nt,insertStaticContent:_}=t,m=(f,g,y,C=null,E=null,I=null,D=void 0,k=null,N=!!g.dynamicChildren)=>{if(f===g)return;f&&!Qs(f,g)&&(C=w(f),qe(f,E,I,!0),f=null),g.patchFlag===-2&&(N=!1,g.dynamicChildren=null);const{type:S,ref:j,shapeFlag:M}=g;switch(S){case Do:b(f,g,y,C);break;case zn:T(f,g,y,C);break;case Oi:f==null&&R(g,y,C,D);break;case dt:Dn(f,g,y,C,E,I,D,k,N);break;default:M&1?B(f,g,y,C,E,I,D,k,N):M&6?Ct(f,g,y,C,E,I,D,k,N):(M&64||M&128)&&S.process(f,g,y,C,E,I,D,k,N,$)}j!=null&&E&&Ja(j,f&&f.ref,I,g||f,!g)},b=(f,g,y,C)=>{if(f==null)s(g.el=a(g.children),y,C);else{const E=g.el=f.el;g.children!==f.children&&c(E,g.children)}},T=(f,g,y,C)=>{f==null?s(g.el=l(g.children||""),y,C):g.el=f.el},R=(f,g,y,C)=>{[f.el,f.anchor]=_(f.children,g,y,C,f.el,f.anchor)},O=({el:f,anchor:g},y,C)=>{let E;for(;f&&f!==g;)E=d(f),s(f,y,C),f=E;s(g,y,C)},x=({el:f,anchor:g})=>{let y;for(;f&&f!==g;)y=d(f),r(f),f=y;r(g)},B=(f,g,y,C,E,I,D,k,N)=>{g.type==="svg"?D="svg":g.type==="math"&&(D="mathml"),f==null?ee(g,y,C,E,I,D,k,N):Ue(f,g,E,I,D,k,N)},ee=(f,g,y,C,E,I,D,k)=>{let N,S;const{props:j,shapeFlag:M,transition:U,dirs:q}=f;if(N=f.el=o(f.type,I,j&&j.is,j),M&8?u(N,f.children):M&16&&Oe(f.children,N,null,C,E,_a(f,I),D,k),q&&Ln(f,null,C,"created"),Q(N,f,f.scopeId,D,C),j){for(const de in j)de!=="value"&&!hr(de)&&i(N,de,null,j[de],I,C);"value"in j&&i(N,"value",null,j.value,I),(S=j.onVnodeBeforeMount)&&Tt(S,C,f)}q&&Ln(f,null,C,"beforeMount");const X=gv(E,U);X&&U.beforeEnter(N),s(N,g,y),((S=j&&j.onVnodeMounted)||X||q)&&tt(()=>{S&&Tt(S,C,f),X&&U.enter(N),q&&Ln(f,null,C,"mounted")},E)},Q=(f,g,y,C,E)=>{if(y&&p(f,y),C)for(let I=0;I<C.length;I++)p(f,C[I]);if(E){let I=E.subTree;if(g===I||mp(I.type)&&(I.ssContent===g||I.ssFallback===g)){const D=E.vnode;Q(f,D,D.scopeId,D.slotScopeIds,E.parent)}}},Oe=(f,g,y,C,E,I,D,k,N=0)=>{for(let S=N;S<f.length;S++){const j=f[S]=k?dn(f[S]):Pt(f[S]);m(null,j,g,y,C,E,I,D,k)}},Ue=(f,g,y,C,E,I,D)=>{const k=g.el=f.el;let{patchFlag:N,dynamicChildren:S,dirs:j}=g;N|=f.patchFlag&16;const M=f.props||ue,U=g.props||ue;let q;if(y&&Mn(y,!1),(q=U.onVnodeBeforeUpdate)&&Tt(q,y,g,f),j&&Ln(g,f,y,"beforeUpdate"),y&&Mn(y,!0),(M.innerHTML&&U.innerHTML==null||M.textContent&&U.textContent==null)&&u(k,""),S?ot(f.dynamicChildren,S,k,y,C,_a(g,E),I):D||te(f,g,k,null,y,C,_a(g,E),I,!1),N>0){if(N&16)on(k,M,U,y,E);else if(N&2&&M.class!==U.class&&i(k,"class",null,U.class,E),N&4&&i(k,"style",M.style,U.style,E),N&8){const X=g.dynamicProps;for(let de=0;de<X.length;de++){const ie=X[de],Qe=M[ie],ke=U[ie];(ke!==Qe||ie==="value")&&i(k,ie,Qe,ke,E,y)}}N&1&&f.children!==g.children&&u(k,g.children)}else!D&&S==null&&on(k,M,U,y,E);((q=U.onVnodeUpdated)||j)&&tt(()=>{q&&Tt(q,y,g,f),j&&Ln(g,f,y,"updated")},C)},ot=(f,g,y,C,E,I,D)=>{for(let k=0;k<g.length;k++){const N=f[k],S=g[k],j=N.el&&(N.type===dt||!Qs(N,S)||N.shapeFlag&70)?h(N.el):y;m(N,S,j,null,C,E,I,D,!0)}},on=(f,g,y,C,E)=>{if(g!==y){if(g!==ue)for(const I in g)!hr(I)&&!(I in y)&&i(f,I,g[I],null,E,C);for(const I in y){if(hr(I))continue;const D=y[I],k=g[I];D!==k&&I!=="value"&&i(f,I,k,D,E,C)}"value"in y&&i(f,"value",g.value,y.value,E)}},Dn=(f,g,y,C,E,I,D,k,N)=>{const S=g.el=f?f.el:a(""),j=g.anchor=f?f.anchor:a("");let{patchFlag:M,dynamicChildren:U,slotScopeIds:q}=g;q&&(k=k?k.concat(q):q),f==null?(s(S,y,C),s(j,y,C),Oe(g.children||[],y,j,E,I,D,k,N)):M>0&&M&64&&U&&f.dynamicChildren?(ot(f.dynamicChildren,U,y,E,I,D,k),(g.key!=null||E&&g===E.subTree)&&dp(f,g,!0)):te(f,g,y,j,E,I,D,k,N)},Ct=(f,g,y,C,E,I,D,k,N)=>{g.slotScopeIds=k,f==null?g.shapeFlag&512?E.ctx.activate(g,y,C,D,N):zs(g,y,C,E,I,D,N):ss(f,g,N)},zs=(f,g,y,C,E,I,D)=>{const k=f.component=Dv(f,C,E);if(Xf(f)&&(k.ctx.renderer=$),Lv(k,!1,D),k.asyncDep){if(E&&E.registerDep(k,Se,D),!f.el){const N=k.subTree=ce(zn);T(null,N,g,y)}}else Se(k,f,g,y,E,I,D)},ss=(f,g,y)=>{const C=g.component=f.component;if(Iv(f,g,y))if(C.asyncDep&&!C.asyncResolved){ae(C,g,y);return}else C.next=g,C.update();else g.el=f.el,C.vnode=g},Se=(f,g,y,C,E,I,D)=>{const k=()=>{if(f.isMounted){let{next:M,bu:U,u:q,parent:X,vnode:de}=f;{const Xe=fp(f);if(Xe){M&&(M.el=de.el,ae(f,M,D)),Xe.asyncDep.then(()=>{f.isUnmounted||k()});return}}let ie=M,Qe;Mn(f,!1),M?(M.el=de.el,ae(f,M,D)):M=de,U&&Ri(U),(Qe=M.props&&M.props.onVnodeBeforeUpdate)&&Tt(Qe,X,M,de),Mn(f,!0);const ke=ma(f),ut=f.subTree;f.subTree=ke,m(ut,ke,h(ut.el),w(ut),f,E,I),M.el=ke.el,ie===null&&Sv(f,ke.el),q&&tt(q,E),(Qe=M.props&&M.props.onVnodeUpdated)&&tt(()=>Tt(Qe,X,M,de),E)}else{let M;const{el:U,props:q}=g,{bm:X,m:de,parent:ie,root:Qe,type:ke}=f,ut=pr(g);if(Mn(f,!1),X&&Ri(X),!ut&&(M=q&&q.onVnodeBeforeMount)&&Tt(M,ie,g),Mn(f,!0),U&&ye){const Xe=()=>{f.subTree=ma(f),ye(U,f.subTree,f,E,null)};ut&&ke.__asyncHydrate?ke.__asyncHydrate(U,f,Xe):Xe()}else{Qe.ce&&Qe.ce._injectChildStyle(ke);const Xe=f.subTree=ma(f);m(null,Xe,y,C,f,E,I),g.el=Xe.el}if(de&&tt(de,E),!ut&&(M=q&&q.onVnodeMounted)){const Xe=g;tt(()=>Tt(M,ie,Xe),E)}(g.shapeFlag&256||ie&&pr(ie.vnode)&&ie.vnode.shapeFlag&256)&&f.a&&tt(f.a,E),f.isMounted=!0,g=y=C=null}};f.scope.on();const N=f.effect=new Rf(k);f.scope.off();const S=f.update=N.run.bind(N),j=f.job=N.runIfDirty.bind(N);j.i=f,j.id=f.uid,N.scheduler=()=>tc(j),Mn(f,!0),S()},ae=(f,g,y)=>{g.component=f;const C=f.vnode.props;f.vnode=g,f.next=null,lv(f,g.props,C,y),dv(f,g.children,y),Pn(),Su(f),On()},te=(f,g,y,C,E,I,D,k,N=!1)=>{const S=f&&f.children,j=f?f.shapeFlag:0,M=g.children,{patchFlag:U,shapeFlag:q}=g;if(U>0){if(U&128){an(S,M,y,C,E,I,D,k,N);return}else if(U&256){Ft(S,M,y,C,E,I,D,k,N);return}}q&8?(j&16&&at(S,E,I),M!==S&&u(y,M)):j&16?q&16?an(S,M,y,C,E,I,D,k,N):at(S,E,I,!0):(j&8&&u(y,""),q&16&&Oe(M,y,C,E,I,D,k,N))},Ft=(f,g,y,C,E,I,D,k,N)=>{f=f||ds,g=g||ds;const S=f.length,j=g.length,M=Math.min(S,j);let U;for(U=0;U<M;U++){const q=g[U]=N?dn(g[U]):Pt(g[U]);m(f[U],q,y,null,E,I,D,k,N)}S>j?at(f,E,I,!0,!1,M):Oe(g,y,C,E,I,D,k,N,M)},an=(f,g,y,C,E,I,D,k,N)=>{let S=0;const j=g.length;let M=f.length-1,U=j-1;for(;S<=M&&S<=U;){const q=f[S],X=g[S]=N?dn(g[S]):Pt(g[S]);if(Qs(q,X))m(q,X,y,null,E,I,D,k,N);else break;S++}for(;S<=M&&S<=U;){const q=f[M],X=g[U]=N?dn(g[U]):Pt(g[U]);if(Qs(q,X))m(q,X,y,null,E,I,D,k,N);else break;M--,U--}if(S>M){if(S<=U){const q=U+1,X=q<j?g[q].el:C;for(;S<=U;)m(null,g[S]=N?dn(g[S]):Pt(g[S]),y,X,E,I,D,k,N),S++}}else if(S>U)for(;S<=M;)qe(f[S],E,I,!0),S++;else{const q=S,X=S,de=new Map;for(S=X;S<=U;S++){const Ze=g[S]=N?dn(g[S]):Pt(g[S]);Ze.key!=null&&de.set(Ze.key,S)}let ie,Qe=0;const ke=U-X+1;let ut=!1,Xe=0;const Ys=new Array(ke);for(S=0;S<ke;S++)Ys[S]=0;for(S=q;S<=M;S++){const Ze=f[S];if(Qe>=ke){qe(Ze,E,I,!0);continue}let St;if(Ze.key!=null)St=de.get(Ze.key);else for(ie=X;ie<=U;ie++)if(Ys[ie-X]===0&&Qs(Ze,g[ie])){St=ie;break}St===void 0?qe(Ze,E,I,!0):(Ys[St-X]=S+1,St>=Xe?Xe=St:ut=!0,m(Ze,g[St],y,null,E,I,D,k,N),Qe++)}const vu=ut?_v(Ys):ds;for(ie=vu.length-1,S=ke-1;S>=0;S--){const Ze=X+S,St=g[Ze],bu=Ze+1<j?g[Ze+1].el:C;Ys[S]===0?m(null,St,y,bu,E,I,D,k,N):ut&&(ie<0||S!==vu[ie]?It(St,y,bu,2):ie--)}}},It=(f,g,y,C,E=null)=>{const{el:I,type:D,transition:k,children:N,shapeFlag:S}=f;if(S&6){It(f.component.subTree,g,y,C);return}if(S&128){f.suspense.move(g,y,C);return}if(S&64){D.move(f,g,y,$);return}if(D===dt){s(I,g,y);for(let M=0;M<N.length;M++)It(N[M],g,y,C);s(f.anchor,g,y);return}if(D===Oi){O(f,g,y);return}if(C!==2&&S&1&&k)if(C===0)k.beforeEnter(I),s(I,g,y),tt(()=>k.enter(I),E);else{const{leave:M,delayLeave:U,afterLeave:q}=k,X=()=>s(I,g,y),de=()=>{M(I,()=>{X(),q&&q()})};U?U(I,X,de):de()}else s(I,g,y)},qe=(f,g,y,C=!1,E=!1)=>{const{type:I,props:D,ref:k,children:N,dynamicChildren:S,shapeFlag:j,patchFlag:M,dirs:U,cacheIndex:q}=f;if(M===-2&&(E=!1),k!=null&&Ja(k,null,y,f,!0),q!=null&&(g.renderCache[q]=void 0),j&256){g.ctx.deactivate(f);return}const X=j&1&&U,de=!pr(f);let ie;if(de&&(ie=D&&D.onVnodeBeforeUnmount)&&Tt(ie,g,f),j&6)mi(f.component,y,C);else{if(j&128){f.suspense.unmount(y,C);return}X&&Ln(f,null,g,"beforeUnmount"),j&64?f.type.remove(f,g,y,$,C):S&&!S.hasOnce&&(I!==dt||M>0&&M&64)?at(S,g,y,!1,!0):(I===dt&&M&384||!E&&j&16)&&at(N,g,y),C&&rs(f)}(de&&(ie=D&&D.onVnodeUnmounted)||X)&&tt(()=>{ie&&Tt(ie,g,f),X&&Ln(f,null,g,"unmounted")},y)},rs=f=>{const{type:g,el:y,anchor:C,transition:E}=f;if(g===dt){is(y,C);return}if(g===Oi){x(f);return}const I=()=>{r(y),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(f.shapeFlag&1&&E&&!E.persisted){const{leave:D,delayLeave:k}=E,N=()=>D(y,I);k?k(f.el,I,N):N()}else I()},is=(f,g)=>{let y;for(;f!==g;)y=d(f),r(f),f=y;r(g)},mi=(f,g,y)=>{const{bum:C,scope:E,job:I,subTree:D,um:k,m:N,a:S}=f;ku(N),ku(S),C&&Ri(C),E.stop(),I&&(I.flags|=8,qe(D,f,g,y)),k&&tt(k,g),tt(()=>{f.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},at=(f,g,y,C=!1,E=!1,I=0)=>{for(let D=I;D<f.length;D++)qe(f[D],g,y,C,E)},w=f=>{if(f.shapeFlag&6)return w(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const g=d(f.anchor||f.el),y=g&&g[My];return y?d(y):g};let F=!1;const L=(f,g,y)=>{f==null?g._vnode&&qe(g._vnode,null,null,!0):m(g._vnode||null,f,g,null,null,null,y),g._vnode=f,F||(F=!0,Su(),zf(),F=!1)},$={p:m,um:qe,m:It,r:rs,mt:zs,mc:Oe,pc:te,pbc:ot,n:w,o:t};let re,ye;return{render:L,hydrate:re,createApp:ov(L,re)}}function _a({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Mn({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function gv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function dp(t,e,n=!1){const s=t.children,r=e.children;if(H(s)&&H(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=dn(r[i]),a.el=o.el),!n&&a.patchFlag!==-2&&dp(o,a)),a.type===Do&&(a.el=o.el)}}function _v(t){const e=t.slice(),n=[0];let s,r,i,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(r=n[n.length-1],t[r]<c){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function fp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:fp(e)}function ku(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const mv=Symbol.for("v-scx"),yv=()=>yt(mv);function _r(t,e,n){return pp(t,e,n)}function pp(t,e,n=ue){const{immediate:s,deep:r,flush:i,once:o}=n,a=Pe({},n),l=e&&s||!e&&i!=="post";let c;if(Or){if(i==="sync"){const p=yv();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Nt,p.resume=Nt,p.pause=Nt,p}}const u=Me;a.call=(p,_,m)=>Lt(p,u,_,m);let h=!1;i==="post"?a.scheduler=p=>{tt(p,u&&u.suspense)}:i!=="sync"&&(h=!0,a.scheduler=(p,_)=>{_?p():tc(p)}),a.augmentJob=p=>{e&&(p.flags|=4),h&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const d=ky(t,e,a);return Or&&(c?c.push(d):l&&d()),d}function vv(t,e,n){const s=this.proxy,r=we(t)?t.includes(".")?gp(s,t):()=>s[t]:t.bind(s,s);let i;K(e)?i=e:(i=e.handler,n=e);const o=Zr(this),a=pp(r,i.bind(s),n);return o(),a}function gp(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const bv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${ct(e)}Modifiers`]||t[`${An(e)}Modifiers`];function Ev(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ue;let r=n;const i=e.startsWith("update:"),o=i&&bv(s,e.slice(7));o&&(o.trim&&(r=n.map(u=>we(u)?u.trim():u)),o.number&&(r=n.map(Bi)));let a,l=s[a=ua(e)]||s[a=ua(ct(e))];!l&&i&&(l=s[a=ua(An(e))]),l&&Lt(l,t,6,r);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Lt(c,t,6,r)}}function _p(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!K(t)){const l=c=>{const u=_p(c,e,!0);u&&(a=!0,Pe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(ge(t)&&s.set(t,null),null):(H(i)?i.forEach(l=>o[l]=null):Pe(o,i),ge(t)&&s.set(t,o),o)}function xo(t,e){return!t||!So(e)?!1:(e=e.slice(2).replace(/Once$/,""),se(t,e[0].toLowerCase()+e.slice(1))||se(t,An(e))||se(t,e))}function ma(t){const{type:e,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:d,setupState:p,ctx:_,inheritAttrs:m}=t,b=Vi(t);let T,R;try{if(n.shapeFlag&4){const x=r||s,B=x;T=Pt(c.call(B,x,u,h,p,d,_)),R=a}else{const x=e;T=Pt(x.length>1?x(h,{attrs:a,slots:o,emit:l}):x(h,null)),R=e.props?a:wv(a)}}catch(x){mr.length=0,No(x,t,1),T=ce(zn)}let O=T;if(R&&m!==!1){const x=Object.keys(R),{shapeFlag:B}=O;x.length&&B&7&&(i&&x.some(jl)&&(R=Cv(R,i)),O=Cs(O,R,!1,!0))}return n.dirs&&(O=Cs(O,null,!1,!0),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&nc(O,n.transition),T=O,Vi(b),T}const wv=t=>{let e;for(const n in t)(n==="class"||n==="style"||So(n))&&((e||(e={}))[n]=t[n]);return e},Cv=(t,e)=>{const n={};for(const s in t)(!jl(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Iv(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?xu(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!xo(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?xu(s,o,c):!0:!!o;return!1}function xu(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!xo(n,i))return!0}return!1}function Sv({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const mp=t=>t.__isSuspense;function Tv(t,e){e&&e.pendingBranch?H(t)?e.effects.push(...t):e.effects.push(t):Ly(t)}const dt=Symbol.for("v-fgt"),Do=Symbol.for("v-txt"),zn=Symbol.for("v-cmt"),Oi=Symbol.for("v-stc"),mr=[];let rt=null;function Ne(t=!1){mr.push(rt=t?null:[])}function Rv(){mr.pop(),rt=mr[mr.length-1]||null}let Pr=1;function Du(t){Pr+=t,t<0&&rt&&(rt.hasOnce=!0)}function yp(t){return t.dynamicChildren=Pr>0?rt||ds:null,Rv(),Pr>0&&rt&&rt.push(t),t}function He(t,e,n,s,r,i){return yp(P(t,e,n,s,r,i,!0))}function vp(t,e,n,s,r){return yp(ce(t,e,n,s,r,!0))}function qi(t){return t?t.__v_isVNode===!0:!1}function Qs(t,e){return t.type===e.type&&t.key===e.key}const bp=({key:t})=>t??null,Ni=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?we(t)||Fe(t)||K(t)?{i:st,r:t,k:e,f:!!n}:t:null);function P(t,e=null,n=null,s=0,r=null,i=t===dt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&bp(e),ref:e&&Ni(e),scopeId:Jf,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:st};return a?(oc(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=we(n)?8:16),Pr>0&&!o&&rt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&rt.push(l),l}const ce=Av;function Av(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===Jy)&&(t=zn),qi(t)){const a=Cs(t,e,!0);return n&&oc(a,n),Pr>0&&!i&&rt&&(a.shapeFlag&6?rt[rt.indexOf(t)]=a:rt.push(a)),a.patchFlag=-2,a}if(Bv(t)&&(t=t.__vccOpts),e){e=Pv(e);let{class:a,style:l}=e;a&&!we(a)&&(e.class=Kn(a)),ge(l)&&(Zl(l)&&!H(l)&&(l=Pe({},l)),e.style=ql(l))}const o=we(t)?1:mp(t)?128:Fy(t)?64:ge(t)?4:K(t)?2:0;return P(t,e,n,s,r,o,i,!0)}function Pv(t){return t?Zl(t)||ip(t)?Pe({},t):t:null}function Cs(t,e,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:a,transition:l}=t,c=e?Nv(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&bp(c),ref:e&&e.ref?n&&i?H(i)?i.concat(Ni(e)):[i,Ni(e)]:Ni(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==dt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Cs(t.ssContent),ssFallback:t.ssFallback&&Cs(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&s&&nc(u,l.clone(u)),u}function Ee(t=" ",e=0){return ce(Do,null,t,e)}function Ov(t,e){const n=ce(Oi,null,t);return n.staticCount=e,n}function Ki(t="",e=!1){return e?(Ne(),vp(zn,null,t)):ce(zn,null,t)}function Pt(t){return t==null||typeof t=="boolean"?ce(zn):H(t)?ce(dt,null,t.slice()):qi(t)?dn(t):ce(Do,null,String(t))}function dn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Cs(t)}function oc(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(H(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),oc(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!ip(e)?e._ctx=st:r===3&&st&&(st.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else K(e)?(e={default:e,_ctx:st},n=32):(e=String(e),s&64?(n=16,e=[Ee(e)]):n=8);t.children=e,t.shapeFlag|=n}function Nv(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Kn([e.class,s.class]));else if(r==="style")e.style=ql([e.style,s.style]);else if(So(r)){const i=e[r],o=s[r];o&&i!==o&&!(H(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Tt(t,e,n,s=null){Lt(t,e,7,[n,s])}const kv=np();let xv=0;function Dv(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||kv,i={uid:xv++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Tf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ap(s,r),emitsOptions:_p(s,r),emit:null,emitted:null,propsDefaults:ue,inheritAttrs:s.inheritAttrs,ctx:ue,data:ue,props:ue,attrs:ue,slots:ue,refs:ue,setupState:ue,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Ev.bind(null,i),t.ce&&t.ce(i),i}let Me=null,Gi,tl;{const t=Ao(),e=(n,s)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};Gi=e("__VUE_INSTANCE_SETTERS__",n=>Me=n),tl=e("__VUE_SSR_SETTERS__",n=>Or=n)}const Zr=t=>{const e=Me;return Gi(t),t.scope.on(),()=>{t.scope.off(),Gi(e)}},Lu=()=>{Me&&Me.scope.off(),Gi(null)};function Ep(t){return t.vnode.shapeFlag&4}let Or=!1;function Lv(t,e=!1,n=!1){e&&tl(e);const{props:s,children:r}=t.vnode,i=Ep(t);av(t,s,i,e),hv(t,r,n);const o=i?Mv(t,e):void 0;return e&&tl(!1),o}function Mv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Zy);const{setup:s}=n;if(s){Pn();const r=t.setupContext=s.length>1?$v(t):null,i=Zr(t),o=Qr(s,t,0,[t.props,r]),a=vf(o);if(On(),i(),(a||t.sp)&&!pr(t)&&Qf(t),a){if(o.then(Lu,Lu),e)return o.then(l=>{Mu(t,l,e)}).catch(l=>{No(l,t,0)});t.asyncDep=o}else Mu(t,o,e)}else wp(t,e)}function Mu(t,e,n){K(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ge(e)&&(t.setupState=qf(e)),wp(t,n)}let Fu;function wp(t,e,n){const s=t.type;if(!t.render){if(!e&&Fu&&!s.render){const r=s.template||rc(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Pe(Pe({isCustomElement:i,delimiters:a},o),l);s.render=Fu(r,c)}}t.render=s.render||Nt}{const r=Zr(t);Pn();try{ev(t)}finally{On(),r()}}}const Fv={get(t,e){return xe(t,"get",""),t[e]}};function $v(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Fv),slots:t.slots,emit:t.emit,expose:e}}function Lo(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(qf(Vf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in gr)return gr[n](t)},has(e,n){return n in e||n in gr}})):t.proxy}function Uv(t,e=!0){return K(t)?t.displayName||t.name:t.name||e&&t.__name}function Bv(t){return K(t)&&"__vccOpts"in t}const ft=(t,e)=>Oy(t,e,Or);function Cp(t,e,n){const s=arguments.length;return s===2?ge(e)&&!H(e)?qi(e)?ce(t,null,[e]):ce(t,e):ce(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&qi(n)&&(n=[n]),ce(t,e,n))}const Hv="3.5.12";/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let nl;const $u=typeof window<"u"&&window.trustedTypes;if($u)try{nl=$u.createPolicy("vue",{createHTML:t=>t})}catch{}const Ip=nl?t=>nl.createHTML(t):t=>t,jv="http://www.w3.org/2000/svg",Vv="http://www.w3.org/1998/Math/MathML",Bt=typeof document<"u"?document:null,Uu=Bt&&Bt.createElement("template"),Wv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e==="svg"?Bt.createElementNS(jv,t):e==="mathml"?Bt.createElementNS(Vv,t):n?Bt.createElement(t,{is:n}):Bt.createElement(t);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Bt.createTextNode(t),createComment:t=>Bt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Bt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Uu.innerHTML=Ip(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const a=Uu.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},qv=Symbol("_vtc");function Kv(t,e,n){const s=t[qv];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const zi=Symbol("_vod"),Sp=Symbol("_vsh"),DF={beforeMount(t,{value:e},{transition:n}){t[zi]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Xs(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Xs(t,!0),s.enter(t)):s.leave(t,()=>{Xs(t,!1)}):Xs(t,e))},beforeUnmount(t,{value:e}){Xs(t,e)}};function Xs(t,e){t.style.display=e?t[zi]:"none",t[Sp]=!e}const Gv=Symbol(""),zv=/(^|;)\s*display\s*:/;function Yv(t,e,n){const s=t.style,r=we(n);let i=!1;if(n&&!r){if(e)if(we(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&ki(s,a,"")}else for(const o in e)n[o]==null&&ki(s,o,"");for(const o in n)o==="display"&&(i=!0),ki(s,o,n[o])}else if(r){if(e!==n){const o=s[Gv];o&&(n+=";"+o),s.cssText=n,i=zv.test(n)}}else e&&t.removeAttribute("style");zi in t&&(t[zi]=i?s.display:"",t[Sp]&&(s.display="none"))}const Bu=/\s*!important$/;function ki(t,e,n){if(H(n))n.forEach(s=>ki(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Jv(t,e);Bu.test(n)?t.setProperty(An(s),n.replace(Bu,""),"important"):t[s]=n}}const Hu=["Webkit","Moz","ms"],ya={};function Jv(t,e){const n=ya[e];if(n)return n;let s=ct(e);if(s!=="filter"&&s in t)return ya[e]=s;s=Ro(s);for(let r=0;r<Hu.length;r++){const i=Hu[r]+s;if(i in t)return ya[e]=i}return e}const ju="http://www.w3.org/1999/xlink";function Vu(t,e,n,s,r,i=ry(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(ju,e.slice(6,e.length)):t.setAttributeNS(ju,e,n):n==null||i&&!Cf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Dt(n)?String(n):n)}function Wu(t,e,n,s,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Ip(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Cf(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function pn(t,e,n,s){t.addEventListener(e,n,s)}function Qv(t,e,n,s){t.removeEventListener(e,n,s)}const qu=Symbol("_vei");function Xv(t,e,n,s,r=null){const i=t[qu]||(t[qu]={}),o=i[e];if(s&&o)o.value=s;else{const[a,l]=Zv(e);if(s){const c=i[e]=nb(s,r);pn(t,a,c,l)}else o&&(Qv(t,a,o,l),i[e]=void 0)}}const Ku=/(?:Once|Passive|Capture)$/;function Zv(t){let e;if(Ku.test(t)){e={};let s;for(;s=t.match(Ku);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):An(t.slice(2)),e]}let va=0;const eb=Promise.resolve(),tb=()=>va||(eb.then(()=>va=0),va=Date.now());function nb(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Lt(sb(s,n.value),e,5,[s])};return n.value=t,n.attached=tb(),n}function sb(t,e){if(H(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Gu=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,rb=(t,e,n,s,r,i)=>{const o=r==="svg";e==="class"?Kv(t,s,o):e==="style"?Yv(t,n,s):So(e)?jl(e)||Xv(t,e,n,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ib(t,e,s,o))?(Wu(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Vu(t,e,s,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!we(s))?Wu(t,ct(e),s,i,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Vu(t,e,s,o))};function ib(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Gu(e)&&K(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Gu(e)&&we(n)?!1:e in t}const Is=t=>{const e=t.props["onUpdate:modelValue"]||!1;return H(e)?n=>Ri(e,n):e};function ob(t){t.target.composing=!0}function zu(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Gt=Symbol("_assign"),sl={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t[Gt]=Is(r);const i=s||r.props&&r.props.type==="number";pn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Bi(a)),t[Gt](a)}),n&&pn(t,"change",()=>{t.value=t.value.trim()}),e||(pn(t,"compositionstart",ob),pn(t,"compositionend",zu),pn(t,"change",zu))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:r,number:i}},o){if(t[Gt]=Is(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?Bi(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||r&&t.value.trim()===l)||(t.value=l))}},ab={deep:!0,created(t,e,n){t[Gt]=Is(n),pn(t,"change",()=>{const s=t._modelValue,r=Nr(t),i=t.checked,o=t[Gt];if(H(s)){const a=Kl(s,r),l=a!==-1;if(i&&!l)o(s.concat(r));else if(!i&&l){const c=[...s];c.splice(a,1),o(c)}}else if(ks(s)){const a=new Set(s);i?a.add(r):a.delete(r),o(a)}else o(Tp(t,i))})},mounted:Yu,beforeUpdate(t,e,n){t[Gt]=Is(n),Yu(t,e,n)}};function Yu(t,{value:e,oldValue:n},s){t._modelValue=e;let r;if(H(e))r=Kl(e,s.props.value)>-1;else if(ks(e))r=e.has(s.props.value);else{if(e===n)return;r=Jr(e,Tp(t,!0))}t.checked!==r&&(t.checked=r)}const LF={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=ks(e);pn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Bi(Nr(o)):Nr(o));t[Gt](t.multiple?r?new Set(i):i:i[0]),t._assigning=!0,ec(()=>{t._assigning=!1})}),t[Gt]=Is(s)},mounted(t,{value:e}){Ju(t,e)},beforeUpdate(t,e,n){t[Gt]=Is(n)},updated(t,{value:e}){t._assigning||Ju(t,e)}};function Ju(t,e){const n=t.multiple,s=H(e);if(!(n&&!s&&!ks(e))){for(let r=0,i=t.options.length;r<i;r++){const o=t.options[r],a=Nr(o);if(n)if(s){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=Kl(e,a)>-1}else o.selected=e.has(a);else if(Jr(Nr(o),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Nr(t){return"_value"in t?t._value:t.value}function Tp(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const lb=["ctrl","shift","alt","meta"],cb={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>lb.some(n=>t[`${n}Key`]&&!e.includes(n))},Zs=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(r,...i)=>{for(let o=0;o<e.length;o++){const a=cb[e[o]];if(a&&a(r,e))return}return t(r,...i)})},ub={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},hb=(t,e)=>{const n=t._withKeys||(t._withKeys={}),s=e.join(".");return n[s]||(n[s]=r=>{if(!("key"in r))return;const i=An(r.key);if(e.some(o=>o===i||ub[o]===i))return t(r)})},db=Pe({patchProp:rb},Wv);let Qu;function fb(){return Qu||(Qu=fv(db))}const pb=(...t)=>{const e=fb().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=_b(s);if(!r)return;const i=e._component;!K(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,gb(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function gb(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function _b(t){return we(t)?document.querySelector(t):t}var mb=!1;/*!
 * pinia v2.2.4
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */const yb=Symbol();var Xu;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Xu||(Xu={}));function vb(){const t=oy(!0),e=t.run(()=>ht({}));let n=[],s=[];const r=Vf({install(i){r._a=i,i.provide(yb,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return!this._a&&!mb?s.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}var Zu={};/**
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
 */const Rp={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const A=function(t,e){if(!t)throw xs(e)},xs=function(t){return new Error("Firebase Database ("+Rp.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Ap=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},bb=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},ac={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(d=64)),s.push(n[u],n[h],n[d],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ap(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):bb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||c==null||h==null)throw new Eb;const d=i<<2|a>>4;if(s.push(d),c!==64){const p=a<<4&240|c>>2;if(s.push(p),h!==64){const _=c<<6&192|h;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Eb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Pp=function(t){const e=Ap(t);return ac.encodeByteArray(e,!0)},Yi=function(t){return Pp(t).replace(/\./g,"")},Ji=function(t){try{return ac.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function wb(t){return Op(void 0,t)}function Op(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Cb(n)||(t[n]=Op(t[n],e[n]));return t}function Cb(t){return t!=="__proto__"}/**
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
 */function Ib(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Sb=()=>Ib().__FIREBASE_DEFAULTS__,Tb=()=>{if(typeof process>"u"||typeof Zu>"u")return;const t=Zu.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Rb=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ji(t[1]);return e&&JSON.parse(e)},lc=()=>{try{return Sb()||Tb()||Rb()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Np=t=>{var e,n;return(n=(e=lc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Ab=t=>{const e=Np(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},kp=()=>{var t;return(t=lc())===null||t===void 0?void 0:t.config},xp=t=>{var e;return(e=lc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Mo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Pb(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Yi(JSON.stringify(n)),Yi(JSON.stringify(o)),""].join(".")}/**
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
 */function We(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(We())}function Ob(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Nb(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Dp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function kb(){const t=We();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Lp(){return Rp.NODE_ADMIN===!0}function xb(){try{return typeof indexedDB=="object"}catch{return!1}}function Db(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const Lb="FirebaseError";class Nn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Lb,Object.setPrototypeOf(this,Nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ei.prototype.create)}}class ei{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Mb(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Nn(r,a,s)}}function Mb(t,e){return t.replace(Fb,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Fb=/\{\$([^}]+)}/g;/**
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
 */function kr(t){return JSON.parse(t)}function Ce(t){return JSON.stringify(t)}/**
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
 */const Mp=function(t){let e={},n={},s={},r="";try{const i=t.split(".");e=kr(Ji(i[0])||""),n=kr(Ji(i[1])||""),r=i[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:r}},$b=function(t){const e=Mp(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Ub=function(t){const e=Mp(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function en(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ss(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function rl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Qi(t,e,n){const s={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(s[r]=e.call(n,t[r],r,t));return s}function Xi(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(eh(i)&&eh(o)){if(!Xi(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function eh(t){return t!==null&&typeof t=="object"}/**
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
 */function Ds(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function cr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function ur(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class Bb{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let r=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^i&(o^a),u=1518500249):(c=i^o^a,u=1859775393):h<60?(c=i&o|a&(i|o),u=2400959708):(c=i^o^a,u=3395469782);const d=(r<<5|r>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=r,r=d}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let r=0;const i=this.buf_;let o=this.inbuf_;for(;r<n;){if(o===0)for(;r<=s;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<n;)if(i[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else for(;r<n;)if(i[o]=e[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let r=0;r<5;r++)for(let i=24;i>=0;i-=8)e[s]=this.chain_[r]>>i&255,++s;return e}}function Hb(t,e){const n=new jb(t,e);return n.subscribe.bind(n)}class jb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Vb(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=ba),r.error===void 0&&(r.error=ba),r.complete===void 0&&(r.complete=ba);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Vb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ba(){}function uc(t,e){return`${t} failed: ${e} argument `}/**
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
 */const Wb=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);if(r>=55296&&r<=56319){const i=r-55296;s++,A(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;r=65536+(i<<10)+o}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Fo=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function $e(t){return t&&t._delegate?t._delegate:t}class Yn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const $n="[DEFAULT]";/**
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
 */class qb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Mo;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Gb(e))try{this.getOrInitializeService({instanceIdentifier:$n})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=$n){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=$n){return this.instances.has(e)}getOptions(e=$n){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Kb(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=$n){return this.component?this.component.multipleInstances?e:$n:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Kb(t){return t===$n?void 0:t}function Gb(t){return t.instantiationMode==="EAGER"}/**
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
 */class zb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new qb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var le;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(le||(le={}));const Yb={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},Jb=le.INFO,Qb={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},Xb=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Qb[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hc{constructor(e){this.name=e,this._logLevel=Jb,this._logHandler=Xb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Yb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}const Zb=(t,e)=>e.some(n=>t instanceof n);let th,nh;function eE(){return th||(th=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tE(){return nh||(nh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Fp=new WeakMap,il=new WeakMap,$p=new WeakMap,Ea=new WeakMap,dc=new WeakMap;function nE(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(bn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Fp.set(n,t)}).catch(()=>{}),dc.set(e,t),e}function sE(t){if(il.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});il.set(t,e)}let ol={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return il.get(t);if(e==="objectStoreNames")return t.objectStoreNames||$p.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return bn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function rE(t){ol=t(ol)}function iE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(wa(this),e,...n);return $p.set(s,e.sort?e.sort():[e]),bn(s)}:tE().includes(t)?function(...e){return t.apply(wa(this),e),bn(Fp.get(this))}:function(...e){return bn(t.apply(wa(this),e))}}function oE(t){return typeof t=="function"?iE(t):(t instanceof IDBTransaction&&sE(t),Zb(t,eE())?new Proxy(t,ol):t)}function bn(t){if(t instanceof IDBRequest)return nE(t);if(Ea.has(t))return Ea.get(t);const e=oE(t);return e!==t&&(Ea.set(t,e),dc.set(e,t)),e}const wa=t=>dc.get(t);function aE(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=bn(o);return s&&o.addEventListener("upgradeneeded",l=>{s(bn(o.result),l.oldVersion,l.newVersion,bn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),r&&l.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const lE=["get","getKey","getAll","getAllKeys","count"],cE=["put","add","delete","clear"],Ca=new Map;function sh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ca.get(e))return Ca.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=cE.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||lE.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return Ca.set(e,i),i}rE(t=>({...t,get:(e,n,s)=>sh(e,n)||t.get(e,n,s),has:(e,n)=>!!sh(e,n)||t.has(e,n)}));/**
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
 */class uE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(hE(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function hE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const al="@firebase/app",rh="0.10.15";/**
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
 */const Jt=new hc("@firebase/app"),dE="@firebase/app-compat",fE="@firebase/analytics-compat",pE="@firebase/analytics",gE="@firebase/app-check-compat",_E="@firebase/app-check",mE="@firebase/auth",yE="@firebase/auth-compat",vE="@firebase/database",bE="@firebase/data-connect",EE="@firebase/database-compat",wE="@firebase/functions",CE="@firebase/functions-compat",IE="@firebase/installations",SE="@firebase/installations-compat",TE="@firebase/messaging",RE="@firebase/messaging-compat",AE="@firebase/performance",PE="@firebase/performance-compat",OE="@firebase/remote-config",NE="@firebase/remote-config-compat",kE="@firebase/storage",xE="@firebase/storage-compat",DE="@firebase/firestore",LE="@firebase/vertexai",ME="@firebase/firestore-compat",FE="firebase",$E="11.0.1";/**
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
 */const ll="[DEFAULT]",UE={[al]:"fire-core",[dE]:"fire-core-compat",[pE]:"fire-analytics",[fE]:"fire-analytics-compat",[_E]:"fire-app-check",[gE]:"fire-app-check-compat",[mE]:"fire-auth",[yE]:"fire-auth-compat",[vE]:"fire-rtdb",[bE]:"fire-data-connect",[EE]:"fire-rtdb-compat",[wE]:"fire-fn",[CE]:"fire-fn-compat",[IE]:"fire-iid",[SE]:"fire-iid-compat",[TE]:"fire-fcm",[RE]:"fire-fcm-compat",[AE]:"fire-perf",[PE]:"fire-perf-compat",[OE]:"fire-rc",[NE]:"fire-rc-compat",[kE]:"fire-gcs",[xE]:"fire-gcs-compat",[DE]:"fire-fst",[ME]:"fire-fst-compat",[LE]:"fire-vertex","fire-js":"fire-js",[FE]:"fire-js-all"};/**
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
 */const Zi=new Map,BE=new Map,cl=new Map;function ih(t,e){try{t.container.addComponent(e)}catch(n){Jt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ts(t){const e=t.name;if(cl.has(e))return Jt.debug(`There were multiple attempts to register component ${e}.`),!1;cl.set(e,t);for(const n of Zi.values())ih(n,t);for(const n of BE.values())ih(n,t);return!0}function fc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ot(t){return t.settings!==void 0}/**
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
 */const HE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},En=new ei("app","Firebase",HE);/**
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
 */class jE{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Yn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw En.create("app-deleted",{appName:this._name})}}/**
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
 */const Ls=$E;function Up(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:ll,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw En.create("bad-app-name",{appName:String(r)});if(n||(n=kp()),!n)throw En.create("no-options");const i=Zi.get(r);if(i){if(Xi(n,i.options)&&Xi(s,i.config))return i;throw En.create("duplicate-app",{appName:r})}const o=new zb(r);for(const l of cl.values())o.addComponent(l);const a=new jE(n,s,o);return Zi.set(r,a),a}function Bp(t=ll){const e=Zi.get(t);if(!e&&t===ll&&kp())return Up();if(!e)throw En.create("no-app",{appName:t});return e}function wn(t,e,n){var s;let r=(s=UE[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Jt.warn(a.join(" "));return}Ts(new Yn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const VE="firebase-heartbeat-database",WE=1,xr="firebase-heartbeat-store";let Ia=null;function Hp(){return Ia||(Ia=aE(VE,WE,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(xr)}catch(n){console.warn(n)}}}}).catch(t=>{throw En.create("idb-open",{originalErrorMessage:t.message})})),Ia}async function qE(t){try{const n=(await Hp()).transaction(xr),s=await n.objectStore(xr).get(jp(t));return await n.done,s}catch(e){if(e instanceof Nn)Jt.warn(e.message);else{const n=En.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Jt.warn(n.message)}}}async function oh(t,e){try{const s=(await Hp()).transaction(xr,"readwrite");await s.objectStore(xr).put(e,jp(t)),await s.done}catch(n){if(n instanceof Nn)Jt.warn(n.message);else{const s=En.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Jt.warn(s.message)}}}function jp(t){return`${t.name}!${t.options.appId}`}/**
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
 */const KE=1024,GE=30*24*60*60*1e3;class zE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new JE(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ah();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=GE}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Jt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ah(),{heartbeatsToSend:s,unsentEntries:r}=YE(this._heartbeatsCache.heartbeats),i=Yi(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Jt.warn(n),""}}}function ah(){return new Date().toISOString().substring(0,10)}function YE(t,e=KE){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),lh(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),lh(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class JE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xb()?Db().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await qE(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return oh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return oh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function lh(t){return Yi(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function QE(t){Ts(new Yn("platform-logger",e=>new uE(e),"PRIVATE")),Ts(new Yn("heartbeat",e=>new zE(e),"PRIVATE")),wn(al,rh,t),wn(al,rh,"esm2017"),wn("fire-js","")}QE("");var ch={};const uh="@firebase/database",hh="1.0.9";/**
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
 */let Vp="";function XE(t){Vp=t}/**
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
 */class ZE{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ce(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:kr(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class ew{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return en(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Wp=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new ZE(e)}}catch{}return new ew},Hn=Wp("localStorage"),tw=Wp("sessionStorage");/**
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
 */const ys=new hc("@firebase/database"),nw=function(){let t=1;return function(){return t++}}(),qp=function(t){const e=Wb(t),n=new Bb;n.update(e);const s=n.digest();return ac.encodeByteArray(s)},ti=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=ti.apply(null,s):typeof s=="object"?e+=Ce(s):e+=s,e+=" "}return e};let yr=null,dh=!0;const sw=function(t,e){A(!e,"Can't turn on custom loggers persistently."),ys.logLevel=le.VERBOSE,yr=ys.log.bind(ys)},Le=function(...t){if(dh===!0&&(dh=!1,yr===null&&tw.get("logging_enabled")===!0&&sw()),yr){const e=ti.apply(null,t);yr(e)}},ni=function(t){return function(...e){Le(t,...e)}},ul=function(...t){const e="FIREBASE INTERNAL ERROR: "+ti(...t);ys.error(e)},Qt=function(...t){const e=`FIREBASE FATAL ERROR: ${ti(...t)}`;throw ys.error(e),new Error(e)},Ge=function(...t){const e="FIREBASE WARNING: "+ti(...t);ys.warn(e)},rw=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ge("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Kp=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},iw=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Rs="[MIN_NAME]",Jn="[MAX_NAME]",Ms=function(t,e){if(t===e)return 0;if(t===Rs||e===Jn)return-1;if(e===Rs||t===Jn)return 1;{const n=fh(t),s=fh(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},ow=function(t,e){return t===e?0:t<e?-1:1},er=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ce(e))},pc=function(t){if(typeof t!="object"||t===null)return Ce(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Ce(e[s]),n+=":",n+=pc(t[e[s]]);return n+="}",n},Gp=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let r=0;r<n;r+=e)r+e>n?s.push(t.substring(r,n)):s.push(t.substring(r,r+e));return s};function Je(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const zp=function(t){A(!Kp(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let r,i,o,a,l;t===0?(i=0,o=0,r=1/t===-1/0?1:0):(r=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),i=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(i%2?1:0),i=Math.floor(i/2);c.push(r?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},aw=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},lw=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function cw(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const uw=new RegExp("^-?(0*)\\d{1,10}$"),hw=-2147483648,dw=2147483647,fh=function(t){if(uw.test(t)){const e=Number(t);if(e>=hw&&e<=dw)return e}return null},Fs=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ge("Exception was thrown by user callback.",n),e},Math.floor(0))}},fw=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},vr=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class pw{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Ge(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class gw{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Le("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ge(e)}}class xi{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}xi.OWNER="owner";/**
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
 */const gc="5",Yp="v",Jp="s",Qp="r",Xp="f",Zp=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,eg="ls",tg="p",hl="ac",ng="websocket",sg="long_polling";/**
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
 */class rg{constructor(e,n,s,r,i=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Hn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Hn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function _w(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function ig(t,e,n){A(typeof e=="string","typeof type must == string"),A(typeof n=="object","typeof params must == object");let s;if(e===ng)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===sg)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);_w(t)&&(n.ns=t.namespace);const r=[];return Je(n,(i,o)=>{r.push(i+"="+o)}),s+r.join("&")}/**
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
 */class mw{constructor(){this.counters_={}}incrementCounter(e,n=1){en(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return wb(this.counters_)}}/**
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
 */const Sa={},Ta={};function _c(t){const e=t.toString();return Sa[e]||(Sa[e]=new mw),Sa[e]}function yw(t,e){const n=t.toString();return Ta[n]||(Ta[n]=e()),Ta[n]}/**
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
 */class vw{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<s.length;++r)s[r]&&Fs(()=>{this.onMessage_(s[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const ph="start",bw="close",Ew="pLPCommand",ww="pRTLPCB",og="id",ag="pw",lg="ser",Cw="cb",Iw="seg",Sw="ts",Tw="d",Rw="dframe",cg=1870,ug=30,Aw=cg-ug,Pw=25e3,Ow=3e4;class us{constructor(e,n,s,r,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ni(e),this.stats_=_c(n),this.urlFn=l=>(this.appCheckToken&&(l[hl]=this.appCheckToken),ig(n,sg,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new vw(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Ow)),iw(()=>{if(this.isClosed_)return;this.scriptTagHolder=new mc((...i)=>{const[o,a,l,c,u]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===ph)this.id=a,this.password=l;else if(o===bw)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[ph]="t",s[lg]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Cw]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Yp]=gc,this.transportSessionId&&(s[Jp]=this.transportSessionId),this.lastSessionId&&(s[eg]=this.lastSessionId),this.applicationId&&(s[tg]=this.applicationId),this.appCheckToken&&(s[hl]=this.appCheckToken),typeof location<"u"&&location.hostname&&Zp.test(location.hostname)&&(s[Qp]=Xp);const r=this.urlFn(s);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){us.forceAllow_=!0}static forceDisallow(){us.forceDisallow_=!0}static isAvailable(){return us.forceAllow_?!0:!us.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!aw()&&!lw()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ce(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Pp(n),r=Gp(s,Aw);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Rw]="t",s[og]=e,s[ag]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ce(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class mc{constructor(e,n,s,r){this.onDisconnect=s,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=nw(),window[Ew+this.uniqueCallbackIdentifier]=e,window[ww+this.uniqueCallbackIdentifier]=n,this.myIFrame=mc.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Le("frame writing exception"),a.stack&&Le(a.stack),Le(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Le("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[og]=this.myID,e[ag]=this.myPW,e[lg]=this.currentSerial;let n=this.urlFn(e),s="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+ug+s.length<=cg;){const o=this.pendingSegs.shift();s=s+"&"+Iw+r+"="+o.seg+"&"+Sw+r+"="+o.ts+"&"+Tw+r+"="+o.d,r++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(s,Math.floor(Pw)),i=()=>{clearTimeout(r),s()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const r=s.readyState;(!r||r==="loaded"||r==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Le("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const Nw=16384,kw=45e3;let eo=null;typeof MozWebSocket<"u"?eo=MozWebSocket:typeof WebSocket<"u"&&(eo=WebSocket);class pt{constructor(e,n,s,r,i,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ni(this.connId),this.stats_=_c(n),this.connURL=pt.connectionURL_(n,o,a,r,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,r,i){const o={};return o[Yp]=gc,typeof location<"u"&&location.hostname&&Zp.test(location.hostname)&&(o[Qp]=Xp),n&&(o[Jp]=n),s&&(o[eg]=s),r&&(o[hl]=r),i&&(o[tg]=i),ig(e,ng,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Hn.set("previous_websocket_failure",!0);try{let s;Lp(),this.mySock=new eo(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){pt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&eo!==null&&!pt.forceDisallow_}static previouslyFailed(){return Hn.isInMemoryStorage||Hn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Hn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=kr(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(A(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Ce(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Gp(n,Nw);s.length>1&&this.sendString_(String(s.length));for(let r=0;r<s.length;r++)this.sendString_(s[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(kw))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}pt.responsesRequiredToBeHealthy=2;pt.healthyTimeout=3e4;/**
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
 */class Dr{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[us,pt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=pt&&pt.isAvailable();let s=n&&!pt.previouslyFailed();if(e.webSocketOnly&&(n||Ge("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[pt];else{const r=this.transports_=[];for(const i of Dr.ALL_TRANSPORTS)i&&i.isAvailable()&&r.push(i);Dr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Dr.globalTransportInitialized_=!1;/**
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
 */const xw=6e4,Dw=5e3,Lw=10*1024,Mw=100*1024,Ra="t",gh="d",Fw="s",_h="r",$w="e",mh="o",yh="a",vh="n",bh="p",Uw="h";class Bw{constructor(e,n,s,r,i,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ni("c:"+this.id+":"),this.transportManager_=new Dr(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=vr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Mw?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Lw?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ra in e){const n=e[Ra];n===yh?this.upgradeIfSecondaryHealthy_():n===_h?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===mh&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=er("t",e),s=er("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:bh,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:yh,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:vh,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=er("t",e),s=er("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=er(Ra,e);if(gh in e){const s=e[gh];if(n===Uw){const r=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(n===vh){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Fw?this.onConnectionShutdown_(s):n===_h?this.onReset_(s):n===$w?ul("Server Error: "+s):n===mh?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ul("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),gc!==s&&Ge("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),vr(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(xw))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):vr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Dw))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:bh,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Hn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class hg{put(e,n,s,r){}merge(e,n,s,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class dg{constructor(e){this.allowedEvents_=e,this.listeners_={},A(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let r=0;r<s.length;r++)s[r].callback.apply(s[r].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const r=this.getInitialEvent(e);r&&n.apply(s,r)}off(e,n,s){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===n&&(!s||s===r[i].context)){r.splice(i,1);return}}validateEventType_(e){A(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class to extends dg{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!cc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new to}getInitialEvent(e){return A(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Eh=32,wh=768;class he{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[s]=this.pieces_[r],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Z(){return new he("")}function z(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Sn(t){return t.pieces_.length-t.pieceNum_}function pe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new he(t.pieces_,e)}function fg(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Hw(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function pg(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function gg(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new he(e,0)}function Ie(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof he)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let r=0;r<s.length;r++)s[r].length>0&&n.push(s[r])}return new he(n,0)}function J(t){return t.pieceNum_>=t.pieces_.length}function Ve(t,e){const n=z(t),s=z(e);if(n===null)return e;if(n===s)return Ve(pe(t),pe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function yc(t,e){if(Sn(t)!==Sn(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function gt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Sn(t)>Sn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class jw{constructor(e,n){this.errorPrefix_=n,this.parts_=pg(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Fo(this.parts_[s]);_g(this)}}function Vw(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Fo(e),_g(t)}function Ww(t){const e=t.parts_.pop();t.byteLength_-=Fo(e),t.parts_.length>0&&(t.byteLength_-=1)}function _g(t){if(t.byteLength_>wh)throw new Error(t.errorPrefix_+"has a key path longer than "+wh+" bytes ("+t.byteLength_+").");if(t.parts_.length>Eh)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Eh+") or object contains a cycle "+Un(t))}function Un(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class vc extends dg{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new vc}getInitialEvent(e){return A(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const tr=1e3,qw=60*5*1e3,Ch=30*1e3,Kw=1.3,Gw=3e4,zw="server_kill",Ih=3;class zt extends hg{constructor(e,n,s,r,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=zt.nextPersistentConnectionId_++,this.log_=ni("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=tr,this.maxReconnectDelay_=qw,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Lp())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");vc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&to.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const r=++this.requestNumber_,i={r,a:e,b:n};this.log_(Ce(i)),A(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),s&&(this.requestCBHash_[r]=s)}get(e){this.initConnection_();const n=new Mo,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,s,r){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),A(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),A(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:n,query:e,tag:s};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+s+" for "+r);const i={p:s},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,c=a.s;zt.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(r))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,r),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&en(e,"w")){const s=Ss(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();Ge(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Ub(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ch)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=$b(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,r=>{const i=r.s,o=r.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+r),A(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,r)&&this.connected_&&this.sendUnlisten_(s,r,e._queryObject,n)}sendUnlisten_(e,n,s,r){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";r&&(i.q=s,i.t=r),this.sendRequest(o,i)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,r){const i={p:n,d:s};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,n,s,r){this.putInternal("p",e,n,s,r)}merge(e,n,s,r){this.putInternal("m",e,n,s,r)}putInternal(e,n,s,r,i){this.initConnection_();const o={p:n,d:s};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const i=s.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ce(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ul("Unrecognized action received from server: "+Ce(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){A(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=tr,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=tr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Gw&&(this.reconnectDelay_=tr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Kw)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+zt.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){A(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Le("getToken() completed but was canceled"):(Le("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new Bw(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,p=>{Ge(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(zw)},i))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Ge(h),l())}}}interrupt(e){Le("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Le("Resuming connection for reason: "+e),delete this.interruptReasons_[e],rl(this.interruptReasons_)&&(this.reconnectDelay_=tr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(i=>pc(i)).join("$"):s="default";const r=this.removeListen_(e,s);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,n){const s=new he(e).toString();let r;if(this.listens.has(s)){const i=this.listens.get(s);r=i.get(n),i.delete(n),i.size===0&&this.listens.delete(s)}else r=void 0;return r}onAuthRevoked_(e,n){Le("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ih&&(this.reconnectDelay_=Ch,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Le("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ih&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Vp.replace(/\./g,"-")]=1,cc()?e["framework.cordova"]=1:Dp()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=to.getInstance().currentlyOnline();return rl(this.interruptReasons_)&&e}}zt.nextPersistentConnectionId_=0;zt.nextConnectionId_=0;/**
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
 */class $o{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new Y(Rs,e),r=new Y(Rs,n);return this.compare(s,r)!==0}minPost(){return Y.MIN}}/**
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
 */let wi;class mg extends $o{static get __EMPTY_NODE(){return wi}static set __EMPTY_NODE(e){wi=e}compare(e,n){return Ms(e.name,n.name)}isDefinedOn(e){throw xs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Y.MIN}maxPost(){return new Y(Jn,wi)}makePost(e,n){return A(typeof e=="string","KeyIndex indexValue must always be a string."),new Y(e,wi)}toString(){return".key"}}const vs=new mg;/**
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
 */class Ci{constructor(e,n,s,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Re{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??Re.RED,this.left=r??Ke.EMPTY_NODE,this.right=i??Ke.EMPTY_NODE}copy(e,n,s,r,i){return new Re(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return i<0?r=r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ke.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,r;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ke.EMPTY_NODE;r=s.right.min_(),s=s.copy(r.key,r.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Re.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Re.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Re.RED=!0;Re.BLACK=!1;class Yw{copy(e,n,s,r,i){return this}insert(e,n,s){return new Re(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ke{constructor(e,n=Ke.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ke(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Re.BLACK,null,null))}remove(e){return new Ke(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Re.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,r=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return r?r.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(r=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ci(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ci(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ci(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ci(this.root_,null,this.comparator_,!0,e)}}Ke.EMPTY_NODE=new Yw;/**
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
 */function Jw(t,e){return Ms(t.name,e.name)}function bc(t,e){return Ms(t,e)}/**
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
 */let dl;function Qw(t){dl=t}const yg=function(t){return typeof t=="number"?"number:"+zp(t):"string:"+t},vg=function(t){if(t.isLeafNode()){const e=t.val();A(typeof e=="string"||typeof e=="number"||typeof e=="object"&&en(e,".sv"),"Priority must be a string or number.")}else A(t===dl||t.isEmpty(),"priority of unexpected type.");A(t===dl||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Sh;class Te{constructor(e,n=Te.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,A(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),vg(this.priorityNode_)}static set __childrenNodeConstructor(e){Sh=e}static get __childrenNodeConstructor(){return Sh}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Te(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Te.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return J(e)?this:z(e)===".priority"?this.priorityNode_:Te.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Te.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=z(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(A(s!==".priority"||Sn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Te.__childrenNodeConstructor.EMPTY_NODE.updateChild(pe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+yg(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=zp(this.value_):e+=this.value_,this.lazyHash_=qp(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Te.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Te.__childrenNodeConstructor?-1:(A(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,r=Te.VALUE_TYPE_ORDER.indexOf(n),i=Te.VALUE_TYPE_ORDER.indexOf(s);return A(r>=0,"Unknown leaf type: "+n),A(i>=0,"Unknown leaf type: "+s),r===i?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Te.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let bg,Eg;function Xw(t){bg=t}function Zw(t){Eg=t}class eC extends $o{compare(e,n){const s=e.node.getPriority(),r=n.node.getPriority(),i=s.compareTo(r);return i===0?Ms(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Y.MIN}maxPost(){return new Y(Jn,new Te("[PRIORITY-POST]",Eg))}makePost(e,n){const s=bg(e);return new Y(n,new Te("[PRIORITY-POST]",s))}toString(){return".priority"}}const ve=new eC;/**
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
 */const tC=Math.log(2);class nC{constructor(e){const n=i=>parseInt(Math.log(i)/tC,10),s=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const r=s(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const no=function(t,e,n,s){t.sort(e);const r=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new Re(d,h.node,Re.BLACK,null,null);{const p=parseInt(u/2,10)+l,_=r(l,p),m=r(p+1,c);return h=t[p],d=n?n(h):h,new Re(d,h.node,Re.BLACK,_,m)}},i=function(l){let c=null,u=null,h=t.length;const d=function(_,m){const b=h-_,T=h;h-=_;const R=r(b+1,T),O=t[b],x=n?n(O):O;p(new Re(x,O.node,m,null,R))},p=function(_){c?(c.left=_,c=_):(u=_,c=_)};for(let _=0;_<l.count;++_){const m=l.nextBitIsOne(),b=Math.pow(2,l.count-(_+1));m?d(b,Re.BLACK):(d(b,Re.BLACK),d(b,Re.RED))}return u},o=new nC(t.length),a=i(o);return new Ke(s||e,a)};/**
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
 */let Aa;const as={};class Vt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return A(as&&ve,"ChildrenNode.ts has not been loaded"),Aa=Aa||new Vt({".priority":as},{".priority":ve}),Aa}get(e){const n=Ss(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ke?n:null}hasIndex(e){return en(this.indexSet_,e.toString())}addIndex(e,n){A(e!==vs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let r=!1;const i=n.getIterator(Y.Wrap);let o=i.getNext();for(;o;)r=r||e.isDefinedOn(o.node),s.push(o),o=i.getNext();let a;r?a=no(s,e.getCompare()):a=as;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Vt(u,c)}addToIndexes(e,n){const s=Qi(this.indexes_,(r,i)=>{const o=Ss(this.indexSet_,i);if(A(o,"Missing index implementation for "+i),r===as)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Y.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),no(a,o.getCompare())}else return as;else{const a=n.get(e.name);let l=r;return a&&(l=l.remove(new Y(e.name,a))),l.insert(e,e.node)}});return new Vt(s,this.indexSet_)}removeFromIndexes(e,n){const s=Qi(this.indexes_,r=>{if(r===as)return r;{const i=n.get(e.name);return i?r.remove(new Y(e.name,i)):r}});return new Vt(s,this.indexSet_)}}/**
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
 */let nr;class V{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&vg(this.priorityNode_),this.children_.isEmpty()&&A(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return nr||(nr=new V(new Ke(bc),null,Vt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||nr}updatePriority(e){return this.children_.isEmpty()?this:new V(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?nr:n}}getChild(e){const n=z(e);return n===null?this:this.getImmediateChild(n).getChild(pe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(A(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new Y(e,n);let r,i;n.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(s,this.children_)):(r=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(s,this.children_));const o=r.isEmpty()?nr:this.priorityNode_;return new V(r,o,i)}}updateChild(e,n){const s=z(e);if(s===null)return n;{A(z(e)!==".priority"||Sn(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(s).updateChild(pe(e),n);return this.updateImmediateChild(s,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,r=0,i=!0;if(this.forEachChild(ve,(o,a)=>{n[o]=a.val(e),s++,i&&V.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):i=!1}),!e&&i&&r<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+yg(this.getPriority().val())+":"),this.forEachChild(ve,(n,s)=>{const r=s.hash();r!==""&&(e+=":"+n+":"+r)}),this.lazyHash_=e===""?"":qp(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const r=this.resolveIndex_(s);if(r){const i=r.getPredecessorKey(new Y(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Y(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Y(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,Y.Wrap);let i=r.peek();for(;i!=null&&n.compare(i,e)<0;)r.getNext(),i=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,Y.Wrap);let i=r.peek();for(;i!=null&&n.compare(i,e)>0;)r.getNext(),i=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===si?-1:0}withIndex(e){if(e===vs||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new V(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===vs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(ve),r=n.getIterator(ve);let i=s.getNext(),o=r.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=s.getNext(),o=r.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===vs?null:this.indexMap_.get(e.toString())}}V.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class sC extends V{constructor(){super(new Ke(bc),V.EMPTY_NODE,Vt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return V.EMPTY_NODE}isEmpty(){return!1}}const si=new sC;Object.defineProperties(Y,{MIN:{value:new Y(Rs,V.EMPTY_NODE)},MAX:{value:new Y(Jn,si)}});mg.__EMPTY_NODE=V.EMPTY_NODE;Te.__childrenNodeConstructor=V;Qw(si);Zw(si);/**
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
 */const rC=!0;function Ae(t,e=null){if(t===null)return V.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),A(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Te(n,Ae(e))}if(!(t instanceof Array)&&rC){const n=[];let s=!1;if(Je(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ae(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new Y(o,l)))}}),n.length===0)return V.EMPTY_NODE;const i=no(n,Jw,o=>o.name,bc);if(s){const o=no(n,ve.getCompare());return new V(i,Ae(e),new Vt({".priority":o},{".priority":ve}))}else return new V(i,Ae(e),Vt.Default)}else{let n=V.EMPTY_NODE;return Je(t,(s,r)=>{if(en(t,s)&&s.substring(0,1)!=="."){const i=Ae(r);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(s,i))}}),n.updatePriority(Ae(e))}}Xw(Ae);/**
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
 */class iC extends $o{constructor(e){super(),this.indexPath_=e,A(!J(e)&&z(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),r=this.extractChild(n.node),i=s.compareTo(r);return i===0?Ms(e.name,n.name):i}makePost(e,n){const s=Ae(e),r=V.EMPTY_NODE.updateChild(this.indexPath_,s);return new Y(n,r)}maxPost(){const e=V.EMPTY_NODE.updateChild(this.indexPath_,si);return new Y(Jn,e)}toString(){return pg(this.indexPath_,0).join("/")}}/**
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
 */class oC extends $o{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Ms(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Y.MIN}maxPost(){return Y.MAX}makePost(e,n){const s=Ae(e);return new Y(n,s)}toString(){return".value"}}const aC=new oC;/**
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
 */function wg(t){return{type:"value",snapshotNode:t}}function As(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Lr(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Mr(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function lC(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Ec{constructor(e){this.index_=e}updateChild(e,n,s,r,i,o){A(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(r).equals(s.getChild(r))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Lr(n,a)):A(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(As(n,s)):o.trackChildChange(Mr(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(ve,(r,i)=>{n.hasChild(r)||s.trackChildChange(Lr(r,i))}),n.isLeafNode()||n.forEachChild(ve,(r,i)=>{if(e.hasChild(r)){const o=e.getImmediateChild(r);o.equals(i)||s.trackChildChange(Mr(r,i,o))}else s.trackChildChange(As(r,i))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?V.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Fr{constructor(e){this.indexedFilter_=new Ec(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Fr.getStartPost_(e),this.endPost_=Fr.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,r,i,o){return this.matches(new Y(n,s))||(s=V.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,r,i,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=V.EMPTY_NODE);let r=n.withIndex(this.index_);r=r.updatePriority(V.EMPTY_NODE);const i=this;return n.forEachChild(ve,(o,a)=>{i.matches(new Y(o,a))||(r=r.updateImmediateChild(o,V.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class cC{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Fr(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,r,i,o){return this.rangedFilter_.matches(new Y(n,s))||(s=V.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,r,i,o):this.fullLimitUpdateChild_(e,n,s,i,o)}updateFullNode(e,n,s){let r;if(n.isLeafNode()||n.isEmpty())r=V.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){r=V.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const a=i.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))r=r.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{r=n.withIndex(this.index_),r=r.updatePriority(V.EMPTY_NODE);let i;this.reverse_?i=r.getReverseIterator(this.index_):i=r.getIterator(this.index_);let o=0;for(;i.hasNext();){const a=i.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:r=r.updateImmediateChild(a.name,V.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,r,i){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,p)=>h(p,d)}else o=this.index_.getCompare();const a=e;A(a.numChildren()===this.limit_,"");const l=new Y(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let d=r.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=r.getChildAfterChild(this.index_,d,this.reverse_);const p=d==null?1:o(d,l);if(u&&!s.isEmpty()&&p>=0)return i!=null&&i.trackChildChange(Mr(n,s,h)),a.updateImmediateChild(n,s);{i!=null&&i.trackChildChange(Lr(n,h));const m=a.updateImmediateChild(n,V.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(i!=null&&i.trackChildChange(As(d.name,d.node)),m.updateImmediateChild(d.name,d.node)):m}}else return s.isEmpty()?e:u&&o(c,l)>=0?(i!=null&&(i.trackChildChange(Lr(c.name,c.node)),i.trackChildChange(As(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,V.EMPTY_NODE)):e}}/**
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
 */class wc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ve}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return A(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return A(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Rs}hasEnd(){return this.endSet_}getIndexEndValue(){return A(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return A(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Jn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return A(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ve}copy(){const e=new wc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function uC(t){return t.loadsAllData()?new Ec(t.getIndex()):t.hasLimit()?new cC(t):new Fr(t)}function Th(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ve?n="$priority":t.index_===aC?n="$value":t.index_===vs?n="$key":(A(t.index_ instanceof iC,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ce(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Ce(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Ce(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Ce(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Ce(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Rh(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ve&&(e.i=t.index_.toString()),e}/**
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
 */class so extends hg{constructor(e,n,s,r){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=r,this.log_=ni("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(A(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=so.getListenId_(e,s),a={};this.listens_[o]=a;const l=Th(e._queryParams);this.restRequest_(i+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(i,h,!1,s),Ss(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",r(d,null)}})}unlisten(e,n){const s=so.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Th(e._queryParams),s=e._path.toString(),r=new Mo;return this.restRequest_(s+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(s,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,i])=>{r&&r.accessToken&&(n.auth=r.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ds(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=kr(a.responseText)}catch{Ge("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&Ge("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class hC{constructor(){this.rootNode_=V.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function ro(){return{value:null,children:new Map}}function Cg(t,e,n){if(J(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=z(e);t.children.has(s)||t.children.set(s,ro());const r=t.children.get(s);e=pe(e),Cg(r,e,n)}}function fl(t,e,n){t.value!==null?n(e,t.value):dC(t,(s,r)=>{const i=new he(e.toString()+"/"+s);fl(r,i,n)})}function dC(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class fC{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Je(this.last_,(s,r)=>{n[s]=n[s]-r}),this.last_=e,n}}/**
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
 */const Ah=10*1e3,pC=30*1e3,gC=5*60*1e3;class _C{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new fC(e);const s=Ah+(pC-Ah)*Math.random();vr(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Je(e,(r,i)=>{i>0&&en(this.statsToReport_,r)&&(n[r]=i,s=!0)}),s&&this.server_.reportStats(n),vr(this.reportStats_.bind(this),Math.floor(Math.random()*2*gC))}}/**
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
 */var _t;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(_t||(_t={}));function Ig(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Cc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ic(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class io{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=_t.ACK_USER_WRITE,this.source=Ig()}operationForChild(e){if(J(this.path)){if(this.affectedTree.value!=null)return A(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new he(e));return new io(Z(),n,this.revert)}}else return A(z(this.path)===e,"operationForChild called for unrelated child."),new io(pe(this.path),this.affectedTree,this.revert)}}/**
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
 */class $r{constructor(e,n){this.source=e,this.path=n,this.type=_t.LISTEN_COMPLETE}operationForChild(e){return J(this.path)?new $r(this.source,Z()):new $r(this.source,pe(this.path))}}/**
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
 */class Qn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=_t.OVERWRITE}operationForChild(e){return J(this.path)?new Qn(this.source,Z(),this.snap.getImmediateChild(e)):new Qn(this.source,pe(this.path),this.snap)}}/**
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
 */class Ur{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=_t.MERGE}operationForChild(e){if(J(this.path)){const n=this.children.subtree(new he(e));return n.isEmpty()?null:n.value?new Qn(this.source,Z(),n.value):new Ur(this.source,Z(),n)}else return A(z(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ur(this.source,pe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Tn{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(J(e))return this.isFullyInitialized()&&!this.filtered_;const n=z(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class mC{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function yC(t,e,n,s){const r=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(lC(o.childName,o.snapshotNode))}),sr(t,r,"child_removed",e,s,n),sr(t,r,"child_added",e,s,n),sr(t,r,"child_moved",i,s,n),sr(t,r,"child_changed",e,s,n),sr(t,r,"value",e,s,n),r}function sr(t,e,n,s,r,i){const o=s.filter(a=>a.type===n);o.sort((a,l)=>bC(t,a,l)),o.forEach(a=>{const l=vC(t,a,i);r.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function vC(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function bC(t,e,n){if(e.childName==null||n.childName==null)throw xs("Should only compare child_ events.");const s=new Y(e.childName,e.snapshotNode),r=new Y(n.childName,n.snapshotNode);return t.index_.compare(s,r)}/**
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
 */function Uo(t,e){return{eventCache:t,serverCache:e}}function br(t,e,n,s){return Uo(new Tn(e,n,s),t.serverCache)}function Sg(t,e,n,s){return Uo(t.eventCache,new Tn(e,n,s))}function oo(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Xn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Pa;const EC=()=>(Pa||(Pa=new Ke(ow)),Pa);class me{constructor(e,n=EC()){this.value=e,this.children=n}static fromObject(e){let n=new me(null);return Je(e,(s,r)=>{n=n.set(new he(s),r)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Z(),value:this.value};if(J(e))return null;{const s=z(e),r=this.children.get(s);if(r!==null){const i=r.findRootMostMatchingPathAndValue(pe(e),n);return i!=null?{path:Ie(new he(s),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(J(e))return this;{const n=z(e),s=this.children.get(n);return s!==null?s.subtree(pe(e)):new me(null)}}set(e,n){if(J(e))return new me(n,this.children);{const s=z(e),i=(this.children.get(s)||new me(null)).set(pe(e),n),o=this.children.insert(s,i);return new me(this.value,o)}}remove(e){if(J(e))return this.children.isEmpty()?new me(null):new me(null,this.children);{const n=z(e),s=this.children.get(n);if(s){const r=s.remove(pe(e));let i;return r.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,r),this.value===null&&i.isEmpty()?new me(null):new me(this.value,i)}else return this}}get(e){if(J(e))return this.value;{const n=z(e),s=this.children.get(n);return s?s.get(pe(e)):null}}setTree(e,n){if(J(e))return n;{const s=z(e),i=(this.children.get(s)||new me(null)).setTree(pe(e),n);let o;return i.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,i),new me(this.value,o)}}fold(e){return this.fold_(Z(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((r,i)=>{s[r]=i.fold_(Ie(e,r),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Z(),n)}findOnPath_(e,n,s){const r=this.value?s(n,this.value):!1;if(r)return r;if(J(e))return null;{const i=z(e),o=this.children.get(i);return o?o.findOnPath_(pe(e),Ie(n,i),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Z(),n)}foreachOnPath_(e,n,s){if(J(e))return this;{this.value&&s(n,this.value);const r=z(e),i=this.children.get(r);return i?i.foreachOnPath_(pe(e),Ie(n,r),s):new me(null)}}foreach(e){this.foreach_(Z(),e)}foreach_(e,n){this.children.inorderTraversal((s,r)=>{r.foreach_(Ie(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class vt{constructor(e){this.writeTree_=e}static empty(){return new vt(new me(null))}}function Er(t,e,n){if(J(e))return new vt(new me(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const r=s.path;let i=s.value;const o=Ve(r,e);return i=i.updateChild(o,n),new vt(t.writeTree_.set(r,i))}else{const r=new me(n),i=t.writeTree_.setTree(e,r);return new vt(i)}}}function Ph(t,e,n){let s=t;return Je(n,(r,i)=>{s=Er(s,Ie(e,r),i)}),s}function Oh(t,e){if(J(e))return vt.empty();{const n=t.writeTree_.setTree(e,new me(null));return new vt(n)}}function pl(t,e){return ns(t,e)!=null}function ns(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ve(n.path,e)):null}function Nh(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ve,(s,r)=>{e.push(new Y(s,r))}):t.writeTree_.children.inorderTraversal((s,r)=>{r.value!=null&&e.push(new Y(s,r.value))}),e}function Cn(t,e){if(J(e))return t;{const n=ns(t,e);return n!=null?new vt(new me(n)):new vt(t.writeTree_.subtree(e))}}function gl(t){return t.writeTree_.isEmpty()}function Ps(t,e){return Tg(Z(),t.writeTree_,e)}function Tg(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((r,i)=>{r===".priority"?(A(i.value!==null,"Priority writes must always be leaf nodes"),s=i.value):n=Tg(Ie(t,r),i,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Ie(t,".priority"),s)),n}}/**
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
 */function Bo(t,e){return Og(e,t)}function wC(t,e,n,s,r){A(s>t.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:r}),r&&(t.visibleWrites=Er(t.visibleWrites,e,n)),t.lastWriteId=s}function CC(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function IC(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);A(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let r=s.visible,i=!1,o=t.allWrites.length-1;for(;r&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&SC(a,s.path)?r=!1:gt(s.path,a.path)&&(i=!0)),o--}if(r){if(i)return TC(t),!0;if(s.snap)t.visibleWrites=Oh(t.visibleWrites,s.path);else{const a=s.children;Je(a,l=>{t.visibleWrites=Oh(t.visibleWrites,Ie(s.path,l))})}return!0}else return!1}function SC(t,e){if(t.snap)return gt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&gt(Ie(t.path,n),e))return!0;return!1}function TC(t){t.visibleWrites=Rg(t.allWrites,RC,Z()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function RC(t){return t.visible}function Rg(t,e,n){let s=vt.empty();for(let r=0;r<t.length;++r){const i=t[r];if(e(i)){const o=i.path;let a;if(i.snap)gt(n,o)?(a=Ve(n,o),s=Er(s,a,i.snap)):gt(o,n)&&(a=Ve(o,n),s=Er(s,Z(),i.snap.getChild(a)));else if(i.children){if(gt(n,o))a=Ve(n,o),s=Ph(s,a,i.children);else if(gt(o,n))if(a=Ve(o,n),J(a))s=Ph(s,Z(),i.children);else{const l=Ss(i.children,z(a));if(l){const c=l.getChild(pe(a));s=Er(s,Z(),c)}}}else throw xs("WriteRecord should have .snap or .children")}}return s}function Ag(t,e,n,s,r){if(!s&&!r){const i=ns(t.visibleWrites,e);if(i!=null)return i;{const o=Cn(t.visibleWrites,e);if(gl(o))return n;if(n==null&&!pl(o,Z()))return null;{const a=n||V.EMPTY_NODE;return Ps(o,a)}}}else{const i=Cn(t.visibleWrites,e);if(!r&&gl(i))return n;if(!r&&n==null&&!pl(i,Z()))return null;{const o=function(c){return(c.visible||r)&&(!s||!~s.indexOf(c.writeId))&&(gt(c.path,e)||gt(e,c.path))},a=Rg(t.allWrites,o,e),l=n||V.EMPTY_NODE;return Ps(a,l)}}}function AC(t,e,n){let s=V.EMPTY_NODE;const r=ns(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(ve,(i,o)=>{s=s.updateImmediateChild(i,o)}),s;if(n){const i=Cn(t.visibleWrites,e);return n.forEachChild(ve,(o,a)=>{const l=Ps(Cn(i,new he(o)),a);s=s.updateImmediateChild(o,l)}),Nh(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const i=Cn(t.visibleWrites,e);return Nh(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function PC(t,e,n,s,r){A(s||r,"Either existingEventSnap or existingServerSnap must exist");const i=Ie(e,n);if(pl(t.visibleWrites,i))return null;{const o=Cn(t.visibleWrites,i);return gl(o)?r.getChild(n):Ps(o,r.getChild(n))}}function OC(t,e,n,s){const r=Ie(e,n),i=ns(t.visibleWrites,r);if(i!=null)return i;if(s.isCompleteForChild(n)){const o=Cn(t.visibleWrites,r);return Ps(o,s.getNode().getImmediateChild(n))}else return null}function NC(t,e){return ns(t.visibleWrites,e)}function kC(t,e,n,s,r,i,o){let a;const l=Cn(t.visibleWrites,e),c=ns(l,Z());if(c!=null)a=c;else if(n!=null)a=Ps(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=i?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let p=d.getNext();for(;p&&u.length<r;)h(p,s)!==0&&u.push(p),p=d.getNext();return u}else return[]}function xC(){return{visibleWrites:vt.empty(),allWrites:[],lastWriteId:-1}}function ao(t,e,n,s){return Ag(t.writeTree,t.treePath,e,n,s)}function Sc(t,e){return AC(t.writeTree,t.treePath,e)}function kh(t,e,n,s){return PC(t.writeTree,t.treePath,e,n,s)}function lo(t,e){return NC(t.writeTree,Ie(t.treePath,e))}function DC(t,e,n,s,r,i){return kC(t.writeTree,t.treePath,e,n,s,r,i)}function Tc(t,e,n){return OC(t.writeTree,t.treePath,e,n)}function Pg(t,e){return Og(Ie(t.treePath,e),t.writeTree)}function Og(t,e){return{treePath:t,writeTree:e}}/**
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
 */class LC{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;A(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),A(s!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(s);if(r){const i=r.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(s,Mr(s,e.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(s,Lr(s,r.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(s,As(s,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(s,Mr(s,e.snapshotNode,r.oldSnap));else throw xs("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class MC{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Ng=new MC;class Rc{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Tn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Tc(this.writes_,e,s)}}getChildAfterChild(e,n,s){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Xn(this.viewCache_),i=DC(this.writes_,r,n,1,s,e);return i.length===0?null:i[0]}}/**
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
 */function FC(t){return{filter:t}}function $C(t,e){A(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),A(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function UC(t,e,n,s,r){const i=new LC;let o,a;if(n.type===_t.OVERWRITE){const c=n;c.source.fromUser?o=_l(t,e,c.path,c.snap,s,r,i):(A(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!J(c.path),o=co(t,e,c.path,c.snap,s,r,a,i))}else if(n.type===_t.MERGE){const c=n;c.source.fromUser?o=HC(t,e,c.path,c.children,s,r,i):(A(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=ml(t,e,c.path,c.children,s,r,a,i))}else if(n.type===_t.ACK_USER_WRITE){const c=n;c.revert?o=WC(t,e,c.path,s,r,i):o=jC(t,e,c.path,c.affectedTree,s,r,i)}else if(n.type===_t.LISTEN_COMPLETE)o=VC(t,e,n.path,s,i);else throw xs("Unknown operation type: "+n.type);const l=i.getChanges();return BC(e,o,l),{viewCache:o,changes:l}}function BC(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const r=s.getNode().isLeafNode()||s.getNode().isEmpty(),i=oo(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!s.getNode().equals(i)||!s.getNode().getPriority().equals(i.getPriority()))&&n.push(wg(oo(e)))}}function kg(t,e,n,s,r,i){const o=e.eventCache;if(lo(s,n)!=null)return e;{let a,l;if(J(n))if(A(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Xn(e),u=c instanceof V?c:V.EMPTY_NODE,h=Sc(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,i)}else{const c=ao(s,Xn(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,i)}else{const c=z(n);if(c===".priority"){A(Sn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=kh(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=pe(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=kh(s,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=Tc(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,r,i):a=o.getNode()}}return br(e,a,o.isFullyInitialized()||J(n),t.filter.filtersNodes())}}function co(t,e,n,s,r,i,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(J(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),p,null)}else{const p=z(n);if(!l.isCompleteForPath(n)&&Sn(n)>1)return e;const _=pe(n),b=l.getNode().getImmediateChild(p).updateChild(_,s);p===".priority"?c=u.updatePriority(l.getNode(),b):c=u.updateChild(l.getNode(),p,b,_,Ng,null)}const h=Sg(e,c,l.isFullyInitialized()||J(n),u.filtersNodes()),d=new Rc(r,h,i);return kg(t,h,n,r,d,a)}function _l(t,e,n,s,r,i,o){const a=e.eventCache;let l,c;const u=new Rc(r,e,i);if(J(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=br(e,c,!0,t.filter.filtersNodes());else{const h=z(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=br(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=pe(n),p=a.getNode().getImmediateChild(h);let _;if(J(d))_=s;else{const m=u.getCompleteChild(h);m!=null?fg(d)===".priority"&&m.getChild(gg(d)).isEmpty()?_=m:_=m.updateChild(d,s):_=V.EMPTY_NODE}if(p.equals(_))l=e;else{const m=t.filter.updateChild(a.getNode(),h,_,d,u,o);l=br(e,m,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function xh(t,e){return t.eventCache.isCompleteForChild(e)}function HC(t,e,n,s,r,i,o){let a=e;return s.foreach((l,c)=>{const u=Ie(n,l);xh(e,z(u))&&(a=_l(t,a,u,c,r,i,o))}),s.foreach((l,c)=>{const u=Ie(n,l);xh(e,z(u))||(a=_l(t,a,u,c,r,i,o))}),a}function Dh(t,e,n){return n.foreach((s,r)=>{e=e.updateChild(s,r)}),e}function ml(t,e,n,s,r,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;J(n)?c=s:c=new me(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const p=e.serverCache.getNode().getImmediateChild(h),_=Dh(t,p,d);l=co(t,l,new he(h),_,r,i,o,a)}}),c.children.inorderTraversal((h,d)=>{const p=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!p){const _=e.serverCache.getNode().getImmediateChild(h),m=Dh(t,_,d);l=co(t,l,new he(h),m,r,i,o,a)}}),l}function jC(t,e,n,s,r,i,o){if(lo(r,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(J(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return co(t,e,n,l.getNode().getChild(n),r,i,a,o);if(J(n)){let c=new me(null);return l.getNode().forEachChild(vs,(u,h)=>{c=c.set(new he(u),h)}),ml(t,e,n,c,r,i,a,o)}else return e}else{let c=new me(null);return s.foreach((u,h)=>{const d=Ie(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),ml(t,e,n,c,r,i,a,o)}}function VC(t,e,n,s,r){const i=e.serverCache,o=Sg(e,i.getNode(),i.isFullyInitialized()||J(n),i.isFiltered());return kg(t,o,n,s,Ng,r)}function WC(t,e,n,s,r,i){let o;if(lo(s,n)!=null)return e;{const a=new Rc(s,e,r),l=e.eventCache.getNode();let c;if(J(n)||z(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=ao(s,Xn(e));else{const h=e.serverCache.getNode();A(h instanceof V,"serverChildren would be complete if leaf node"),u=Sc(s,h)}u=u,c=t.filter.updateFullNode(l,u,i)}else{const u=z(n);let h=Tc(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,pe(n),a,i):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,V.EMPTY_NODE,pe(n),a,i):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ao(s,Xn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,i)))}return o=e.serverCache.isFullyInitialized()||lo(s,Z())!=null,br(e,c,o,t.filter.filtersNodes())}}/**
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
 */class qC{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,r=new Ec(s.getIndex()),i=uC(s);this.processor_=FC(i);const o=n.serverCache,a=n.eventCache,l=r.updateFullNode(V.EMPTY_NODE,o.getNode(),null),c=i.updateFullNode(V.EMPTY_NODE,a.getNode(),null),u=new Tn(l,o.isFullyInitialized(),r.filtersNodes()),h=new Tn(c,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=Uo(h,u),this.eventGenerator_=new mC(this.query_)}get query(){return this.query_}}function KC(t){return t.viewCache_.serverCache.getNode()}function GC(t){return oo(t.viewCache_)}function zC(t,e){const n=Xn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!J(e)&&!n.getImmediateChild(z(e)).isEmpty())?n.getChild(e):null}function Lh(t){return t.eventRegistrations_.length===0}function YC(t,e){t.eventRegistrations_.push(e)}function Mh(t,e,n){const s=[];if(n){A(e==null,"A cancel should cancel all event registrations.");const r=t.query._path;t.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(n,r);o&&s.push(o)})}if(e){let r=[];for(let i=0;i<t.eventRegistrations_.length;++i){const o=t.eventRegistrations_[i];if(!o.matches(e))r.push(o);else if(e.hasAnyCallback()){r=r.concat(t.eventRegistrations_.slice(i+1));break}}t.eventRegistrations_=r}else t.eventRegistrations_=[];return s}function Fh(t,e,n,s){e.type===_t.MERGE&&e.source.queryId!==null&&(A(Xn(t.viewCache_),"We should always have a full cache before handling merges"),A(oo(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,i=UC(t.processor_,r,e,n,s);return $C(t.processor_,i.viewCache),A(i.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,xg(t,i.changes,i.viewCache.eventCache.getNode(),null)}function JC(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ve,(i,o)=>{s.push(As(i,o))}),n.isFullyInitialized()&&s.push(wg(n.getNode())),xg(t,s,n.getNode(),e)}function xg(t,e,n,s){const r=s?[s]:t.eventRegistrations_;return yC(t.eventGenerator_,e,n,r)}/**
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
 */let uo;class Dg{constructor(){this.views=new Map}}function QC(t){A(!uo,"__referenceConstructor has already been defined"),uo=t}function XC(){return A(uo,"Reference.ts has not been loaded"),uo}function ZC(t){return t.views.size===0}function Ac(t,e,n,s){const r=e.source.queryId;if(r!==null){const i=t.views.get(r);return A(i!=null,"SyncTree gave us an op for an invalid query."),Fh(i,e,n,s)}else{let i=[];for(const o of t.views.values())i=i.concat(Fh(o,e,n,s));return i}}function Lg(t,e,n,s,r){const i=e._queryIdentifier,o=t.views.get(i);if(!o){let a=ao(n,r?s:null),l=!1;a?l=!0:s instanceof V?(a=Sc(n,s),l=!1):(a=V.EMPTY_NODE,l=!1);const c=Uo(new Tn(a,l,!1),new Tn(s,r,!1));return new qC(e,c)}return o}function eI(t,e,n,s,r,i){const o=Lg(t,e,s,r,i);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),YC(o,n),JC(o,n)}function tI(t,e,n,s){const r=e._queryIdentifier,i=[];let o=[];const a=Rn(t);if(r==="default")for(const[l,c]of t.views.entries())o=o.concat(Mh(c,n,s)),Lh(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||i.push(c.query));else{const l=t.views.get(r);l&&(o=o.concat(Mh(l,n,s)),Lh(l)&&(t.views.delete(r),l.query._queryParams.loadsAllData()||i.push(l.query)))}return a&&!Rn(t)&&i.push(new(XC())(e._repo,e._path)),{removed:i,events:o}}function Mg(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function In(t,e){let n=null;for(const s of t.views.values())n=n||zC(s,e);return n}function Fg(t,e){if(e._queryParams.loadsAllData())return Ho(t);{const s=e._queryIdentifier;return t.views.get(s)}}function $g(t,e){return Fg(t,e)!=null}function Rn(t){return Ho(t)!=null}function Ho(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let ho;function nI(t){A(!ho,"__referenceConstructor has already been defined"),ho=t}function sI(){return A(ho,"Reference.ts has not been loaded"),ho}let rI=1;class $h{constructor(e){this.listenProvider_=e,this.syncPointTree_=new me(null),this.pendingWriteTree_=xC(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Ug(t,e,n,s,r){return wC(t.pendingWriteTree_,e,n,s,r),r?ii(t,new Qn(Ig(),e,n)):[]}function jn(t,e,n=!1){const s=CC(t.pendingWriteTree_,e);if(IC(t.pendingWriteTree_,e)){let i=new me(null);return s.snap!=null?i=i.set(Z(),!0):Je(s.children,o=>{i=i.set(new he(o),!0)}),ii(t,new io(s.path,i,n))}else return[]}function ri(t,e,n){return ii(t,new Qn(Cc(),e,n))}function iI(t,e,n){const s=me.fromObject(n);return ii(t,new Ur(Cc(),e,s))}function oI(t,e){return ii(t,new $r(Cc(),e))}function aI(t,e,n){const s=Oc(t,n);if(s){const r=Nc(s),i=r.path,o=r.queryId,a=Ve(i,e),l=new $r(Ic(o),a);return kc(t,i,l)}else return[]}function fo(t,e,n,s,r=!1){const i=e._path,o=t.syncPointTree_.get(i);let a=[];if(o&&(e._queryIdentifier==="default"||$g(o,e))){const l=tI(o,e,n,s);ZC(o)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const c=l.removed;if(a=l.events,!r){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(i,(d,p)=>Rn(p));if(u&&!h){const d=t.syncPointTree_.subtree(i);if(!d.isEmpty()){const p=uI(d);for(let _=0;_<p.length;++_){const m=p[_],b=m.query,T=Vg(t,m);t.listenProvider_.startListening(wr(b),Br(t,b),T.hashFn,T.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(wr(e),null):c.forEach(d=>{const p=t.queryToTagMap.get(jo(d));t.listenProvider_.stopListening(wr(d),p)}))}hI(t,c)}return a}function Bg(t,e,n,s){const r=Oc(t,s);if(r!=null){const i=Nc(r),o=i.path,a=i.queryId,l=Ve(o,e),c=new Qn(Ic(a),l,n);return kc(t,o,c)}else return[]}function lI(t,e,n,s){const r=Oc(t,s);if(r){const i=Nc(r),o=i.path,a=i.queryId,l=Ve(o,e),c=me.fromObject(n),u=new Ur(Ic(a),l,c);return kc(t,o,u)}else return[]}function yl(t,e,n,s=!1){const r=e._path;let i=null,o=!1;t.syncPointTree_.foreachOnPath(r,(d,p)=>{const _=Ve(d,r);i=i||In(p,_),o=o||Rn(p)});let a=t.syncPointTree_.get(r);a?(o=o||Rn(a),i=i||In(a,Z())):(a=new Dg,t.syncPointTree_=t.syncPointTree_.set(r,a));let l;i!=null?l=!0:(l=!1,i=V.EMPTY_NODE,t.syncPointTree_.subtree(r).foreachChild((p,_)=>{const m=In(_,Z());m&&(i=i.updateImmediateChild(p,m))}));const c=$g(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=jo(e);A(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const p=dI();t.queryToTagMap.set(d,p),t.tagToQueryMap.set(p,d)}const u=Bo(t.pendingWriteTree_,r);let h=eI(a,e,n,u,i,l);if(!c&&!o&&!s){const d=Fg(a,e);h=h.concat(fI(t,e,d))}return h}function Pc(t,e,n){const r=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Ve(o,e),c=In(a,l);if(c)return c});return Ag(r,e,i,n,!0)}function cI(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const h=Ve(c,n);s=s||In(u,h)});let r=t.syncPointTree_.get(n);r?s=s||In(r,Z()):(r=new Dg,t.syncPointTree_=t.syncPointTree_.set(n,r));const i=s!=null,o=i?new Tn(s,!0,!1):null,a=Bo(t.pendingWriteTree_,e._path),l=Lg(r,e,a,i?o.getNode():V.EMPTY_NODE,i);return GC(l)}function ii(t,e){return Hg(e,t.syncPointTree_,null,Bo(t.pendingWriteTree_,Z()))}function Hg(t,e,n,s){if(J(t.path))return jg(t,e,n,s);{const r=e.get(Z());n==null&&r!=null&&(n=In(r,Z()));let i=[];const o=z(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=Pg(s,o);i=i.concat(Hg(a,l,c,u))}return r&&(i=i.concat(Ac(r,t,s,n))),i}}function jg(t,e,n,s){const r=e.get(Z());n==null&&r!=null&&(n=In(r,Z()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Pg(s,o),u=t.operationForChild(o);u&&(i=i.concat(jg(u,a,l,c)))}),r&&(i=i.concat(Ac(r,t,s,n))),i}function Vg(t,e){const n=e.query,s=Br(t,n);return{hashFn:()=>(KC(e)||V.EMPTY_NODE).hash(),onComplete:r=>{if(r==="ok")return s?aI(t,n._path,s):oI(t,n._path);{const i=cw(r,n);return fo(t,n,null,i)}}}}function Br(t,e){const n=jo(e);return t.queryToTagMap.get(n)}function jo(t){return t._path.toString()+"$"+t._queryIdentifier}function Oc(t,e){return t.tagToQueryMap.get(e)}function Nc(t){const e=t.indexOf("$");return A(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new he(t.substr(0,e))}}function kc(t,e,n){const s=t.syncPointTree_.get(e);A(s,"Missing sync point for query tag that we're tracking");const r=Bo(t.pendingWriteTree_,e);return Ac(s,n,r,null)}function uI(t){return t.fold((e,n,s)=>{if(n&&Rn(n))return[Ho(n)];{let r=[];return n&&(r=Mg(n)),Je(s,(i,o)=>{r=r.concat(o)}),r}})}function wr(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(sI())(t._repo,t._path):t}function hI(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const r=jo(s),i=t.queryToTagMap.get(r);t.queryToTagMap.delete(r),t.tagToQueryMap.delete(i)}}}function dI(){return rI++}function fI(t,e,n){const s=e._path,r=Br(t,e),i=Vg(t,n),o=t.listenProvider_.startListening(wr(e),r,i.hashFn,i.onComplete),a=t.syncPointTree_.subtree(s);if(r)A(!Rn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!J(c)&&u&&Rn(u))return[Ho(u).query];{let d=[];return u&&(d=d.concat(Mg(u).map(p=>p.query))),Je(h,(p,_)=>{d=d.concat(_)}),d}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(wr(u),Br(t,u))}}return o}/**
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
 */class xc{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new xc(n)}node(){return this.node_}}class Dc{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ie(this.path_,e);return new Dc(this.syncTree_,n)}node(){return Pc(this.syncTree_,this.path_)}}const pI=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Uh=function(t,e,n){if(!t||typeof t!="object")return t;if(A(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return gI(t[".sv"],e,n);if(typeof t[".sv"]=="object")return _I(t[".sv"],e);A(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},gI=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:A(!1,"Unexpected server value: "+t)}},_I=function(t,e,n){t.hasOwnProperty("increment")||A(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&A(!1,"Unexpected increment value: "+s);const r=e.node();if(A(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return s;const o=r.getValue();return typeof o!="number"?s:o+s},mI=function(t,e,n,s){return Lc(e,new Dc(n,t),s)},Wg=function(t,e,n){return Lc(t,new xc(e),n)};function Lc(t,e,n){const s=t.getPriority().val(),r=Uh(s,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=Uh(o.getValue(),e,n);return a!==o.getValue()||r!==o.getPriority().val()?new Te(a,Ae(r)):t}else{const o=t;return i=o,r!==o.getPriority().val()&&(i=i.updatePriority(new Te(r))),o.forEachChild(ve,(a,l)=>{const c=Lc(l,e.getImmediateChild(a),n);c!==l&&(i=i.updateImmediateChild(a,c))}),i}}/**
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
 */class Mc{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Fc(t,e){let n=e instanceof he?e:new he(e),s=t,r=z(n);for(;r!==null;){const i=Ss(s.node.children,r)||{children:{},childCount:0};s=new Mc(r,s,i),n=pe(n),r=z(n)}return s}function $s(t){return t.node.value}function qg(t,e){t.node.value=e,vl(t)}function Kg(t){return t.node.childCount>0}function yI(t){return $s(t)===void 0&&!Kg(t)}function Vo(t,e){Je(t.node.children,(n,s)=>{e(new Mc(n,t,s))})}function Gg(t,e,n,s){n&&!s&&e(t),Vo(t,r=>{Gg(r,e,!0,s)}),n&&s&&e(t)}function vI(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function oi(t){return new he(t.parent===null?t.name:oi(t.parent)+"/"+t.name)}function vl(t){t.parent!==null&&bI(t.parent,t.name,t)}function bI(t,e,n){const s=yI(n),r=en(t.node.children,e);s&&r?(delete t.node.children[e],t.node.childCount--,vl(t)):!s&&!r&&(t.node.children[e]=n.node,t.node.childCount++,vl(t))}/**
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
 */const EI=/[\[\].#$\/\u0000-\u001F\u007F]/,wI=/[\[\].#$\u0000-\u001F\u007F]/,Oa=10*1024*1024,zg=function(t){return typeof t=="string"&&t.length!==0&&!EI.test(t)},Yg=function(t){return typeof t=="string"&&t.length!==0&&!wI.test(t)},CI=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Yg(t)},Jg=function(t,e,n,s){s&&e===void 0||$c(uc(t,"value"),e,n)},$c=function(t,e,n){const s=n instanceof he?new jw(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Un(s));if(typeof e=="function")throw new Error(t+"contains a function "+Un(s)+" with contents = "+e.toString());if(Kp(e))throw new Error(t+"contains "+e.toString()+" "+Un(s));if(typeof e=="string"&&e.length>Oa/3&&Fo(e)>Oa)throw new Error(t+"contains a string greater than "+Oa+" utf8 bytes "+Un(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,i=!1;if(Je(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!zg(o)))throw new Error(t+" contains an invalid key ("+o+") "+Un(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Vw(s,o),$c(t,a,s),Ww(s)}),r&&i)throw new Error(t+' contains ".value" child '+Un(s)+" in addition to actual children.")}},Qg=function(t,e,n,s){if(!Yg(n))throw new Error(uc(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},II=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Qg(t,e,n)},Uc=function(t,e){if(z(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},SI=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!zg(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!CI(n))throw new Error(uc(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class TI{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Bc(t,e){let n=null;for(let s=0;s<e.length;s++){const r=e[s],i=r.getPath();n!==null&&!yc(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(r)}n&&t.eventLists_.push(n)}function Xg(t,e,n){Bc(t,n),Zg(t,s=>yc(s,e))}function Mt(t,e,n){Bc(t,n),Zg(t,s=>gt(s,e)||gt(e,s))}function Zg(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const r=t.eventLists_[s];if(r){const i=r.path;e(i)?(RI(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function RI(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();yr&&Le("event: "+n.toString()),Fs(s)}}}/**
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
 */const AI="repo_interrupt",PI=25;class OI{constructor(e,n,s,r){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new TI,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ro(),this.transactionQueueTree_=new Mc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function NI(t,e,n){if(t.stats_=_c(t.repoInfo_),t.forceRestClient_||fw())t.server_=new so(t.repoInfo_,(s,r,i,o)=>{Bh(t,s,r,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Hh(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ce(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new zt(t.repoInfo_,e,(s,r,i,o)=>{Bh(t,s,r,i,o)},s=>{Hh(t,s)},s=>{kI(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=yw(t.repoInfo_,()=>new _C(t.stats_,t.server_)),t.infoData_=new hC,t.infoSyncTree_=new $h({startListening:(s,r,i,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=ri(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),jc(t,"connected",!1),t.serverSyncTree_=new $h({startListening:(s,r,i,o)=>(t.server_.listen(s,i,r,(a,l)=>{const c=o(a,l);Mt(t.eventQueue_,s._path,c)}),[]),stopListening:(s,r)=>{t.server_.unlisten(s,r)}})}function e_(t){const n=t.infoData_.getNode(new he(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Hc(t){return pI({timestamp:e_(t)})}function Bh(t,e,n,s,r){t.dataUpdateCount++;const i=new he(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(r)if(s){const l=Qi(n,c=>Ae(c));o=lI(t.serverSyncTree_,i,l,r)}else{const l=Ae(n);o=Bg(t.serverSyncTree_,i,l,r)}else if(s){const l=Qi(n,c=>Ae(c));o=iI(t.serverSyncTree_,i,l)}else{const l=Ae(n);o=ri(t.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=qo(t,i)),Mt(t.eventQueue_,a,o)}function Hh(t,e){jc(t,"connected",e),e===!1&&LI(t)}function kI(t,e){Je(e,(n,s)=>{jc(t,n,s)})}function jc(t,e,n){const s=new he("/.info/"+e),r=Ae(n);t.infoData_.updateSnapshot(s,r);const i=ri(t.infoSyncTree_,s,r);Mt(t.eventQueue_,s,i)}function t_(t){return t.nextWriteId_++}function xI(t,e,n){const s=cI(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(r=>{const i=Ae(r).withIndex(e._queryParams.getIndex());yl(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=ri(t.serverSyncTree_,e._path,i);else{const a=Br(t.serverSyncTree_,e);o=Bg(t.serverSyncTree_,e._path,i,a)}return Mt(t.eventQueue_,e._path,o),fo(t.serverSyncTree_,e,n,null,!0),i},r=>(Wo(t,"get for query "+Ce(e)+" failed: "+r),Promise.reject(new Error(r))))}function DI(t,e,n,s,r){Wo(t,"set",{path:e.toString(),value:n,priority:s});const i=Hc(t),o=Ae(n,s),a=Pc(t.serverSyncTree_,e),l=Wg(o,a,i),c=t_(t),u=Ug(t.serverSyncTree_,e,l,c,!0);Bc(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,p)=>{const _=d==="ok";_||Ge("set at "+e+" failed: "+d);const m=jn(t.serverSyncTree_,c,!_);Mt(t.eventQueue_,e,m),$I(t,r,d,p)});const h=o_(t,e);qo(t,h),Mt(t.eventQueue_,h,[])}function LI(t){Wo(t,"onDisconnectEvents");const e=Hc(t),n=ro();fl(t.onDisconnect_,Z(),(r,i)=>{const o=mI(r,i,t.serverSyncTree_,e);Cg(n,r,o)});let s=[];fl(n,Z(),(r,i)=>{s=s.concat(ri(t.serverSyncTree_,r,i));const o=o_(t,r);qo(t,o)}),t.onDisconnect_=ro(),Mt(t.eventQueue_,Z(),s)}function MI(t,e,n){let s;z(e._path)===".info"?s=yl(t.infoSyncTree_,e,n):s=yl(t.serverSyncTree_,e,n),Xg(t.eventQueue_,e._path,s)}function jh(t,e,n){let s;z(e._path)===".info"?s=fo(t.infoSyncTree_,e,n):s=fo(t.serverSyncTree_,e,n),Xg(t.eventQueue_,e._path,s)}function FI(t){t.persistentConnection_&&t.persistentConnection_.interrupt(AI)}function Wo(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Le(n,...e)}function $I(t,e,n,s){e&&Fs(()=>{if(n==="ok")e(null);else{const r=(n||"error").toUpperCase();let i=r;s&&(i+=": "+s);const o=new Error(i);o.code=r,e(o)}})}function n_(t,e,n){return Pc(t.serverSyncTree_,e,n)||V.EMPTY_NODE}function Vc(t,e=t.transactionQueueTree_){if(e||Ko(t,e),$s(e)){const n=r_(t,e);A(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&UI(t,oi(e),n)}else Kg(e)&&Vo(e,n=>{Vc(t,n)})}function UI(t,e,n){const s=n.map(c=>c.currentWriteId),r=n_(t,e,s);let i=r;const o=r.hash();for(let c=0;c<n.length;c++){const u=n[c];A(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Ve(e,u.path);i=i.updateChild(h,u.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Wo(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(jn(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Ko(t,Fc(t.transactionQueueTree_,e)),Vc(t,t.transactionQueueTree_),Mt(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)Fs(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Ge("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}qo(t,e)}},o)}function qo(t,e){const n=s_(t,e),s=oi(n),r=r_(t,n);return BI(t,r,s),s}function BI(t,e,n){if(e.length===0)return;const s=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Ve(n,l.path);let u=!1,h;if(A(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,r=r.concat(jn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=PI)u=!0,h="maxretry",r=r.concat(jn(t.serverSyncTree_,l.currentWriteId,!0));else{const d=n_(t,l.path,o);l.currentInputSnapshot=d;const p=e[a].update(d.val());if(p!==void 0){$c("transaction failed: Data returned ",p,l.path);let _=Ae(p);typeof p=="object"&&p!=null&&en(p,".priority")||(_=_.updatePriority(d.getPriority()));const b=l.currentWriteId,T=Hc(t),R=Wg(_,d,T);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=R,l.currentWriteId=t_(t),o.splice(o.indexOf(b),1),r=r.concat(Ug(t.serverSyncTree_,l.path,R,l.currentWriteId,l.applyLocally)),r=r.concat(jn(t.serverSyncTree_,b,!0))}else u=!0,h="nodata",r=r.concat(jn(t.serverSyncTree_,l.currentWriteId,!0))}Mt(t.eventQueue_,n,r),r=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}Ko(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Fs(s[a]);Vc(t,t.transactionQueueTree_)}function s_(t,e){let n,s=t.transactionQueueTree_;for(n=z(e);n!==null&&$s(s)===void 0;)s=Fc(s,n),e=pe(e),n=z(e);return s}function r_(t,e){const n=[];return i_(t,e,n),n.sort((s,r)=>s.order-r.order),n}function i_(t,e,n){const s=$s(e);if(s)for(let r=0;r<s.length;r++)n.push(s[r]);Vo(e,r=>{i_(t,r,n)})}function Ko(t,e){const n=$s(e);if(n){let s=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[s]=n[r],s++);n.length=s,qg(e,n.length>0?n:void 0)}Vo(e,s=>{Ko(t,s)})}function o_(t,e){const n=oi(s_(t,e)),s=Fc(t.transactionQueueTree_,e);return vI(s,r=>{Na(t,r)}),Na(t,s),Gg(s,r=>{Na(t,r)}),n}function Na(t,e){const n=$s(e);if(n){const s=[];let r=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(A(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(A(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),r=r.concat(jn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?qg(e,void 0):n.length=i+1,Mt(t.eventQueue_,oi(e),r);for(let o=0;o<s.length;o++)Fs(s[o])}}/**
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
 */function HI(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let r=n[s];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function jI(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Ge(`Invalid query segment '${n}' in query '${t}'`)}return e}const Vh=function(t,e){const n=VI(t),s=n.namespace;n.domain==="firebase.com"&&Qt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Qt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||rw();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new rg(n.host,n.secure,s,r,e,"",s!==n.subdomain),path:new he(n.pathString)}},VI=function(t){let e="",n="",s="",r="",i="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(r=HI(t.substring(u,h)));const d=jI(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const _=e.indexOf(".");s=e.substring(0,_).toLowerCase(),n=e.substring(_+1),i=s}"ns"in d&&(i=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:r,namespace:i}};/**
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
 */const Wh="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",WI=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let r;const i=new Array(8);for(r=7;r>=0;r--)i[r]=Wh.charAt(n%64),n=Math.floor(n/64);A(n===0,"Cannot push at time == 0");let o=i.join("");if(s){for(r=11;r>=0&&e[r]===63;r--)e[r]=0;e[r]++}else for(r=0;r<12;r++)e[r]=Math.floor(Math.random()*64);for(r=0;r<12;r++)o+=Wh.charAt(e[r]);return A(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class qI{constructor(e,n,s,r){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=r}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ce(this.snapshot.exportVal())}}class KI{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class a_{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return A(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Wc{constructor(e,n,s,r){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=r}get key(){return J(this._path)?null:fg(this._path)}get ref(){return new tn(this._repo,this._path)}get _queryIdentifier(){const e=Rh(this._queryParams),n=pc(e);return n==="{}"?"default":n}get _queryObject(){return Rh(this._queryParams)}isEqual(e){if(e=$e(e),!(e instanceof Wc))return!1;const n=this._repo===e._repo,s=yc(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return n&&s&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+Hw(this._path)}}class tn extends Wc{constructor(e,n){super(e,n,new wc,!1)}get parent(){const e=gg(this._path);return e===null?null:new tn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Hr{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new he(e),s=jr(this.ref,e);return new Hr(this._node.getChild(n),s,ve)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,r)=>e(new Hr(r,jr(this.ref,s),ve)))}hasChild(e){const n=new he(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ai(t,e){return t=$e(t),t._checkNotDeleted("ref"),e!==void 0?jr(t._root,e):t._root}function jr(t,e){return t=$e(t),z(t._path)===null?II("child","path",e):Qg("child","path",e),new tn(t._repo,Ie(t._path,e))}function MF(t,e){t=$e(t),Uc("push",t._path),Jg("push",e,t._path,!0);const n=e_(t._repo),s=WI(n),r=jr(t,s),i=jr(t,s);let o;return e!=null?o=qc(i,e).then(()=>i):o=Promise.resolve(i),r.then=o.then.bind(o),r.catch=o.then.bind(o,void 0),r}function FF(t){return Uc("remove",t._path),qc(t,null)}function qc(t,e){t=$e(t),Uc("set",t._path),Jg("set",e,t._path,!1);const n=new Mo;return DI(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function GI(t){t=$e(t);const e=new a_(()=>{}),n=new Go(e);return xI(t._repo,t,n).then(s=>new Hr(s,new tn(t._repo,t._path),t._queryParams.getIndex()))}class Go{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new qI("value",this,new Hr(e.snapshotNode,new tn(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new KI(this,e,n):null}matches(e){return e instanceof Go?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function zI(t,e,n,s,r){let i;if(typeof s=="object"&&(i=void 0,r=s),typeof s=="function"&&(i=s),r&&r.onlyOnce){const l=n,c=(u,h)=>{jh(t._repo,t,a),l(u,h)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new a_(n,i||void 0),a=new Go(o);return MI(t._repo,t,a),()=>jh(t._repo,t,a)}function bl(t,e,n,s){return zI(t,"value",e,n,s)}QC(tn);nI(tn);/**
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
 */const YI="FIREBASE_DATABASE_EMULATOR_HOST",El={};let JI=!1;function QI(t,e,n,s){t.repoInfo_=new rg(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function XI(t,e,n,s,r){let i=s||t.options.databaseURL;i===void 0&&(t.options.projectId||Qt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Le("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Vh(i,r),a=o.repoInfo,l;typeof process<"u"&&ch&&(l=ch[YI]),l?(i=`http://${l}?ns=${a.namespace}`,o=Vh(i,r),a=o.repoInfo):o.repoInfo.secure;const c=new gw(t.name,t.options,e);SI("Invalid Firebase Database URL",o),J(o.path)||Qt("Database URL must point to the root of a Firebase Database (not including a child path).");const u=eS(a,t,c,new pw(t.name,n));return new tS(u,t)}function ZI(t,e){const n=El[e];(!n||n[t.key]!==t)&&Qt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),FI(t),delete n[t.key]}function eS(t,e,n,s){let r=El[e.name];r||(r={},El[e.name]=r);let i=r[t.toURLString()];return i&&Qt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new OI(t,JI,n,s),r[t.toURLString()]=i,i}class tS{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(NI(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new tn(this._repo,Z())),this._rootInternal}_delete(){return this._rootInternal!==null&&(ZI(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Qt("Cannot call "+e+" on a deleted database.")}}function nS(t=Bp(),e){const n=fc(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=Ab("database");s&&sS(n,...s)}return n}function sS(t,e,n,s={}){t=$e(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Qt("Cannot call useEmulator() after instance has already been initialized.");const r=t._repoInternal;let i;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&Qt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),i=new xi(xi.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Pb(s.mockUserToken,t.app.options.projectId);i=new xi(o)}QI(r,e,n,i)}/**
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
 */function rS(t){XE(Ls),Ts(new Yn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return XI(s,r,i,n)},"PUBLIC").setMultipleInstances(!0)),wn(uh,hh,t),wn(uh,hh,"esm2017")}zt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};zt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};rS();function Kc(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function l_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const iS=l_,c_=new ei("auth","Firebase",l_());/**
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
 */const po=new hc("@firebase/auth");function oS(t,...e){po.logLevel<=le.WARN&&po.warn(`Auth (${Ls}): ${t}`,...e)}function Di(t,...e){po.logLevel<=le.ERROR&&po.error(`Auth (${Ls}): ${t}`,...e)}/**
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
 */function bt(t,...e){throw Gc(t,...e)}function kt(t,...e){return Gc(t,...e)}function u_(t,e,n){const s=Object.assign(Object.assign({},iS()),{[e]:n});return new ei("auth","Firebase",s).create(e,{appName:t.name})}function Yt(t){return u_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Gc(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return c_.create(t,...e)}function W(t,e,...n){if(!t)throw Gc(e,...n)}function Wt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Di(e),new Error(e)}function Xt(t,e){t||Wt(e)}/**
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
 */function wl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function aS(){return qh()==="http:"||qh()==="https:"}function qh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function lS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(aS()||Nb()||"connection"in navigator)?navigator.onLine:!0}function cS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class li{constructor(e,n){this.shortDelay=e,this.longDelay=n,Xt(n>e,"Short delay should be less than long delay!"),this.isMobile=cc()||Dp()}get(){return lS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function zc(t,e){Xt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class h_{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Wt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Wt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Wt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const uS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const hS=new li(3e4,6e4);function nn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function sn(t,e,n,s,r={}){return d_(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Ds(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},i);return Ob()||(c.referrerPolicy="no-referrer"),h_.fetch()(f_(t,t.config.apiHost,n,a),c)})}async function d_(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},uS),e);try{const r=new fS(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ii(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ii(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ii(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ii(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw u_(t,u,c);bt(t,u)}}catch(r){if(r instanceof Nn)throw r;bt(t,"network-request-failed",{message:String(r)})}}async function ci(t,e,n,s,r={}){const i=await sn(t,e,n,s,r);return"mfaPendingCredential"in i&&bt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function f_(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?zc(t.config,r):`${t.config.apiScheme}://${r}`}function dS(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class fS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(kt(this.auth,"network-request-failed")),hS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ii(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=kt(t,e,s);return r.customData._tokenResponse=n,r}function Kh(t){return t!==void 0&&t.enterprise!==void 0}class pS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return dS(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function gS(t,e){return sn(t,"GET","/v2/recaptchaConfig",nn(t,e))}/**
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
 */async function _S(t,e){return sn(t,"POST","/v1/accounts:delete",e)}async function p_(t,e){return sn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Cr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function mS(t,e=!1){const n=$e(t),s=await n.getIdToken(e),r=Yc(s);W(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Cr(ka(r.auth_time)),issuedAtTime:Cr(ka(r.iat)),expirationTime:Cr(ka(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ka(t){return Number(t)*1e3}function Yc(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Di("JWT malformed, contained fewer than 3 sections"),null;try{const r=Ji(n);return r?JSON.parse(r):(Di("Failed to decode base64 JWT payload"),null)}catch(r){return Di("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Gh(t){const e=Yc(t);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Vr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Nn&&yS(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function yS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class vS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Cl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Cr(this.lastLoginAt),this.creationTime=Cr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function go(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Vr(t,p_(n,{idToken:s}));W(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?g_(i.providerUserInfo):[],a=ES(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Cl(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function bS(t){const e=$e(t);await go(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ES(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function g_(t){return t.map(e=>{var{providerId:n}=e,s=Kc(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function wS(t,e){const n=await d_(t,{},async()=>{const s=Ds({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=f_(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",h_.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function CS(t,e){return sn(t,"POST","/v2/accounts:revokeToken",nn(t,e))}/**
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
 */class bs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Gh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){W(e.length!==0,"internal-error");const n=Gh(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await wS(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new bs;return s&&(W(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(W(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(W(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new bs,this.toJSON())}_performRefresh(){return Wt("not implemented")}}/**
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
 */function ln(t,e){W(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class qt{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Kc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new vS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Cl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Vr(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return mS(this,e)}reload(){return bS(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new qt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await go(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ot(this.auth.app))return Promise.reject(Yt(this.auth));const e=await this.getIdToken();return await Vr(this,_S(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,m=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,T=(c=n.createdAt)!==null&&c!==void 0?c:void 0,R=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:O,emailVerified:x,isAnonymous:B,providerData:ee,stsTokenManager:Q}=n;W(O&&Q,e,"internal-error");const Oe=bs.fromJSON(this.name,Q);W(typeof O=="string",e,"internal-error"),ln(h,e.name),ln(d,e.name),W(typeof x=="boolean",e,"internal-error"),W(typeof B=="boolean",e,"internal-error"),ln(p,e.name),ln(_,e.name),ln(m,e.name),ln(b,e.name),ln(T,e.name),ln(R,e.name);const Ue=new qt({uid:O,auth:e,email:d,emailVerified:x,displayName:h,isAnonymous:B,photoURL:_,phoneNumber:p,tenantId:m,stsTokenManager:Oe,createdAt:T,lastLoginAt:R});return ee&&Array.isArray(ee)&&(Ue.providerData=ee.map(ot=>Object.assign({},ot))),b&&(Ue._redirectEventId=b),Ue}static async _fromIdTokenResponse(e,n,s=!1){const r=new bs;r.updateFromServerResponse(n);const i=new qt({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await go(i),i}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];W(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?g_(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),a=new bs;a.updateFromIdToken(s);const l=new qt({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Cl(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,c),l}}/**
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
 */const zh=new Map;function Kt(t){Xt(t instanceof Function,"Expected a class definition");let e=zh.get(t);return e?(Xt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,zh.set(t,e),e)}/**
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
 */class __{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}__.type="NONE";const Il=__;/**
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
 */function Li(t,e,n){return`firebase:${t}:${e}:${n}`}class Es{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Li(this.userKey,r.apiKey,i),this.fullPersistenceKey=Li("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?qt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Es(Kt(Il),e,s);const r=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=r[0]||Kt(Il);const o=Li(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=qt._fromJSON(e,u);c!==i&&(a=h),i=c;break}}catch{}const l=r.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Es(i,e,s):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Es(i,e,s))}}/**
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
 */function Yh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(b_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(m_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(w_(e))return"Blackberry";if(C_(e))return"Webos";if(y_(e))return"Safari";if((e.includes("chrome/")||v_(e))&&!e.includes("edge/"))return"Chrome";if(E_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function m_(t=We()){return/firefox\//i.test(t)}function y_(t=We()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function v_(t=We()){return/crios\//i.test(t)}function b_(t=We()){return/iemobile/i.test(t)}function E_(t=We()){return/android/i.test(t)}function w_(t=We()){return/blackberry/i.test(t)}function C_(t=We()){return/webos/i.test(t)}function Jc(t=We()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function IS(t=We()){var e;return Jc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function SS(){return kb()&&document.documentMode===10}function I_(t=We()){return Jc(t)||E_(t)||C_(t)||w_(t)||/windows phone/i.test(t)||b_(t)}/**
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
 */function S_(t,e=[]){let n;switch(t){case"Browser":n=Yh(We());break;case"Worker":n=`${Yh(We())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ls}/${s}`}/**
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
 */class TS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function RS(t,e={}){return sn(t,"GET","/v2/passwordPolicy",nn(t,e))}/**
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
 */const AS=6;class PS{constructor(e){var n,s,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:AS,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,r,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(r=l.containsLowercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class OS{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Jh(this),this.idTokenSubscription=new Jh(this),this.beforeStateQueue=new TS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=c_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Kt(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Es.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await p_(this,{idToken:e}),s=await qt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ot(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await go(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=cS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ot(this.app))return Promise.reject(Yt(this));const n=e?$e(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ot(this.app)?Promise.reject(Yt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ot(this.app)?Promise.reject(Yt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Kt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await RS(this),n=new PS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ei("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await CS(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Kt(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await Es.create(this,[Kt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,r);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=S_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&oS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function kn(t){return $e(t)}class Jh{constructor(e){this.auth=e,this.observer=null,this.addObserver=Hb(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let zo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function NS(t){zo=t}function T_(t){return zo.loadJS(t)}function kS(){return zo.recaptchaEnterpriseScript}function xS(){return zo.gapiScript}function DS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class LS{constructor(){this.enterprise=new MS}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class MS{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const FS="recaptcha-enterprise",R_="NO_RECAPTCHA";class $S{constructor(e){this.type=FS,this.auth=kn(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{gS(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new pS(l);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function r(i,o,a){const l=window.grecaptcha;Kh(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(R_)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new LS().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{s(this.auth).then(a=>{if(!n&&Kh(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=kS();l.length!==0&&(l+=a),T_(l).then(()=>{r(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Qh(t,e,n,s=!1,r=!1){const i=new $S(t);let o;if(r)o=R_;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return s?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function _o(t,e,n,s,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Qh(t,e,n,n==="getOobCode");return s(t,o)}else return s(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Qh(t,e,n,n==="getOobCode");return s(t,a)}else return Promise.reject(o)})}/**
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
 */function US(t,e){const n=fc(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Xi(i,e??{}))return r;bt(r,"already-initialized")}return n.initialize({options:e})}function BS(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Kt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function HS(t,e,n){const s=kn(t);W(s._canInitEmulator,s,"emulator-config-failed"),W(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=A_(e),{host:o,port:a}=jS(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),VS()}function A_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function jS(t){const e=A_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Xh(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Xh(o)}}}function Xh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function VS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Qc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Wt("not implemented")}_getIdTokenResponse(e){return Wt("not implemented")}_linkToIdToken(e,n){return Wt("not implemented")}_getReauthenticationResolver(e){return Wt("not implemented")}}async function WS(t,e){return sn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function qS(t,e){return ci(t,"POST","/v1/accounts:signInWithPassword",nn(t,e))}async function P_(t,e){return sn(t,"POST","/v1/accounts:sendOobCode",nn(t,e))}async function KS(t,e){return P_(t,e)}async function GS(t,e){return P_(t,e)}/**
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
 */async function zS(t,e){return ci(t,"POST","/v1/accounts:signInWithEmailLink",nn(t,e))}async function YS(t,e){return ci(t,"POST","/v1/accounts:signInWithEmailLink",nn(t,e))}/**
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
 */class Wr extends Qc{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Wr(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Wr(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _o(e,n,"signInWithPassword",qS);case"emailLink":return zS(e,{email:this._email,oobCode:this._password});default:bt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _o(e,s,"signUpPassword",WS);case"emailLink":return YS(e,{idToken:n,email:this._email,oobCode:this._password});default:bt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ws(t,e){return ci(t,"POST","/v1/accounts:signInWithIdp",nn(t,e))}/**
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
 */const JS="http://localhost";class Zn extends Qc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Zn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):bt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Kc(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Zn(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ws(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,ws(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ws(e,n)}buildRequest(){const e={requestUri:JS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ds(n)}return e}}/**
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
 */function QS(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function XS(t){const e=cr(ur(t)).link,n=e?cr(ur(e)).deep_link_id:null,s=cr(ur(t)).deep_link_id;return(s?cr(ur(s)).link:null)||s||n||e||t}class Xc{constructor(e){var n,s,r,i,o,a;const l=cr(ur(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,h=QS((r=l.mode)!==null&&r!==void 0?r:null);W(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=XS(e);try{return new Xc(n)}catch{return null}}}/**
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
 */class Us{constructor(){this.providerId=Us.PROVIDER_ID}static credential(e,n){return Wr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Xc.parseLink(n);return W(s,"argument-error"),Wr._fromEmailAndCode(e,s.code,s.tenantId)}}Us.PROVIDER_ID="password";Us.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Us.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class O_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ui extends O_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class gn extends ui{constructor(){super("facebook.com")}static credential(e){return Zn._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gn.credential(e.oauthAccessToken)}catch{return null}}}gn.FACEBOOK_SIGN_IN_METHOD="facebook.com";gn.PROVIDER_ID="facebook.com";/**
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
 */class _n extends ui{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Zn._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return _n.credentialFromTaggedObject(e)}static credentialFromError(e){return _n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return _n.credential(n,s)}catch{return null}}}_n.GOOGLE_SIGN_IN_METHOD="google.com";_n.PROVIDER_ID="google.com";/**
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
 */class mn extends ui{constructor(){super("github.com")}static credential(e){return Zn._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mn.credential(e.oauthAccessToken)}catch{return null}}}mn.GITHUB_SIGN_IN_METHOD="github.com";mn.PROVIDER_ID="github.com";/**
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
 */class yn extends ui{constructor(){super("twitter.com")}static credential(e,n){return Zn._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return yn.credential(n,s)}catch{return null}}}yn.TWITTER_SIGN_IN_METHOD="twitter.com";yn.PROVIDER_ID="twitter.com";/**
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
 */async function ZS(t,e){return ci(t,"POST","/v1/accounts:signUp",nn(t,e))}/**
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
 */class es{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await qt._fromIdTokenResponse(e,s,r),o=Zh(s);return new es({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Zh(s);return new es({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Zh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class mo extends Nn{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,mo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new mo(e,n,s,r)}}function N_(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?mo._fromErrorAndOperation(t,i,e,s):i})}async function eT(t,e,n=!1){const s=await Vr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return es._forOperation(t,"link",s)}/**
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
 */async function tT(t,e,n=!1){const{auth:s}=t;if(Ot(s.app))return Promise.reject(Yt(s));const r="reauthenticate";try{const i=await Vr(t,N_(s,r,e,t),n);W(i.idToken,s,"internal-error");const o=Yc(i.idToken);W(o,s,"internal-error");const{sub:a}=o;return W(t.uid===a,s,"user-mismatch"),es._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&bt(s,"user-mismatch"),i}}/**
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
 */async function k_(t,e,n=!1){if(Ot(t.app))return Promise.reject(Yt(t));const s="signIn",r=await N_(t,s,e),i=await es._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function nT(t,e){return k_(kn(t),e)}/**
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
 */async function x_(t){const e=kn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function sT(t,e,n){const s=kn(t);await _o(s,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",GS)}async function rT(t,e,n){if(Ot(t.app))return Promise.reject(Yt(t));const s=kn(t),o=await _o(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ZS).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&x_(t),l}),a=await es._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function iT(t,e,n){return Ot(t.app)?Promise.reject(Yt(t)):nT($e(t),Us.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&x_(t),s})}async function ed(t,e){const n=$e(t),r={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()},{email:i}=await KS(n.auth,r);i!==t.email&&await t.reload()}/**
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
 */function td(t,e){return $e(t).setPersistence(e)}function oT(t,e,n,s){return $e(t).onIdTokenChanged(e,n,s)}function aT(t,e,n){return $e(t).beforeAuthStateChanged(e,n)}const yo="__sak";/**
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
 */class D_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(yo,"1"),this.storage.removeItem(yo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const lT=1e3,cT=10;class L_ extends D_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=I_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);SS()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,cT):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},lT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}L_.type="LOCAL";const M_=L_;/**
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
 */class F_ extends D_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}F_.type="SESSION";const $_=F_;/**
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
 */function uT(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Yo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Yo(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await uT(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Yo.receivers=[];/**
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
 */function Zc(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class hT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=Zc("",20);r.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function xt(){return window}function dT(t){xt().location.href=t}/**
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
 */function U_(){return typeof xt().WorkerGlobalScope<"u"&&typeof xt().importScripts=="function"}async function fT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function pT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function gT(){return U_()?self:null}/**
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
 */const B_="firebaseLocalStorageDb",_T=1,vo="firebaseLocalStorage",H_="fbase_key";class hi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Jo(t,e){return t.transaction([vo],e?"readwrite":"readonly").objectStore(vo)}function mT(){const t=indexedDB.deleteDatabase(B_);return new hi(t).toPromise()}function Sl(){const t=indexedDB.open(B_,_T);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(vo,{keyPath:H_})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(vo)?e(s):(s.close(),await mT(),e(await Sl()))})})}async function nd(t,e,n){const s=Jo(t,!0).put({[H_]:e,value:n});return new hi(s).toPromise()}async function yT(t,e){const n=Jo(t,!1).get(e),s=await new hi(n).toPromise();return s===void 0?null:s.value}function sd(t,e){const n=Jo(t,!0).delete(e);return new hi(n).toPromise()}const vT=800,bT=3;class j_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Sl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>bT)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return U_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Yo._getInstance(gT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await fT(),!this.activeServiceWorker)return;this.sender=new hT(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||pT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Sl();return await nd(e,yo,"1"),await sd(e,yo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>nd(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>yT(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>sd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Jo(r,!1).getAll();return new hi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),vT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}j_.type="LOCAL";const ET=j_;new li(3e4,6e4);/**
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
 */function wT(t,e){return e?Kt(e):(W(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class eu extends Qc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ws(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ws(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ws(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function CT(t){return k_(t.auth,new eu(t),t.bypassAuthState)}function IT(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),tT(n,new eu(t),t.bypassAuthState)}async function ST(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),eT(n,new eu(t),t.bypassAuthState)}/**
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
 */class V_{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return CT;case"linkViaPopup":case"linkViaRedirect":return ST;case"reauthViaPopup":case"reauthViaRedirect":return IT;default:bt(this.auth,"internal-error")}}resolve(e){Xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const TT=new li(2e3,1e4);class hs extends V_{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,hs.currentPopupAction&&hs.currentPopupAction.cancel(),hs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){Xt(this.filter.length===1,"Popup operations only handle one event");const e=Zc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(kt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(kt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,hs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(kt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,TT.get())};e()}}hs.currentPopupAction=null;/**
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
 */const RT="pendingRedirect",Mi=new Map;class AT extends V_{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Mi.get(this.auth._key());if(!e){try{const s=await PT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Mi.set(this.auth._key(),e)}return this.bypassAuthState||Mi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function PT(t,e){const n=kT(e),s=NT(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function OT(t,e){Mi.set(t._key(),e)}function NT(t){return Kt(t._redirectPersistence)}function kT(t){return Li(RT,t.config.apiKey,t.name)}async function xT(t,e,n=!1){if(Ot(t.app))return Promise.reject(Yt(t));const s=kn(t),r=wT(s,e),o=await new AT(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const DT=10*60*1e3;class LT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!MT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!W_(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(kt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=DT&&this.cachedEventUids.clear(),this.cachedEventUids.has(rd(e))}saveEventToCache(e){this.cachedEventUids.add(rd(e)),this.lastProcessedEventTime=Date.now()}}function rd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function W_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function MT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return W_(t);default:return!1}}/**
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
 */async function FT(t,e={}){return sn(t,"GET","/v1/projects",e)}/**
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
 */const $T=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,UT=/^https?/;async function BT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await FT(t);for(const n of e)try{if(HT(n))return}catch{}bt(t,"unauthorized-domain")}function HT(t){const e=wl(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!UT.test(n))return!1;if($T.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const jT=new li(3e4,6e4);function id(){const t=xt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function VT(t){return new Promise((e,n)=>{var s,r,i;function o(){id(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{id(),n(kt(t,"network-request-failed"))},timeout:jT.get()})}if(!((r=(s=xt().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=xt().gapi)===null||i===void 0)&&i.load)o();else{const a=DS("iframefcb");return xt()[a]=()=>{gapi.load?o():n(kt(t,"network-request-failed"))},T_(`${xS()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Fi=null,e})}let Fi=null;function WT(t){return Fi=Fi||VT(t),Fi}/**
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
 */const qT=new li(5e3,15e3),KT="__/auth/iframe",GT="emulator/auth/iframe",zT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},YT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function JT(t){const e=t.config;W(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?zc(e,GT):`https://${t.config.authDomain}/${KT}`,s={apiKey:e.apiKey,appName:t.name,v:Ls},r=YT.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Ds(s).slice(1)}`}async function QT(t){const e=await WT(t),n=xt().gapi;return W(n,t,"internal-error"),e.open({where:document.body,url:JT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zT,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=kt(t,"network-request-failed"),a=xt().setTimeout(()=>{i(o)},qT.get());function l(){xt().clearTimeout(a),r(s)}s.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const XT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ZT=500,eR=600,tR="_blank",nR="http://localhost";class od{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function sR(t,e,n,s=ZT,r=eR){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},XT),{width:s.toString(),height:r.toString(),top:i,left:o}),c=We().toLowerCase();n&&(a=v_(c)?tR:n),m_(c)&&(e=e||nR,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[p,_])=>`${d}${p}=${_},`,"");if(IS(c)&&a!=="_self")return rR(e||"",a),new od(null);const h=window.open(e||"",a,u);W(h,t,"popup-blocked");try{h.focus()}catch{}return new od(h)}function rR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const iR="__/auth/handler",oR="emulator/auth/handler",aR=encodeURIComponent("fac");async function ad(t,e,n,s,r,i){W(t.config.authDomain,t,"auth-domain-config-required"),W(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Ls,eventId:r};if(e instanceof O_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",rl(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries({}))o[u]=h}if(e instanceof ui){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${aR}=${encodeURIComponent(l)}`:"";return`${lR(t)}?${Ds(a).slice(1)}${c}`}function lR({config:t}){return t.emulator?zc(t,oR):`https://${t.authDomain}/${iR}`}/**
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
 */const xa="webStorageSupport";class cR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$_,this._completeRedirectFn=xT,this._overrideRedirectResult=OT}async _openPopup(e,n,s,r){var i;Xt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await ad(e,n,s,wl(),r);return sR(e,o,Zc())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await ad(e,n,s,wl(),r);return dT(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(Xt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await QT(e),s=new LT(e);return n.register("authEvent",r=>(W(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(xa,{type:xa},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[xa];o!==void 0&&n(!!o),bt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=BT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return I_()||y_()||Jc()}}const uR=cR;var ld="@firebase/auth",cd="1.8.0";/**
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
 */class hR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function dR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function fR(t){Ts(new Yn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;W(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:S_(t)},c=new OS(s,r,i,l);return BS(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Ts(new Yn("auth-internal",e=>{const n=kn(e.getProvider("auth").getImmediate());return(s=>new hR(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),wn(ld,cd,dR(t)),wn(ld,cd,"esm2017")}/**
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
 */const pR=5*60,gR=xp("authIdTokenMaxAge")||pR;let ud=null;const _R=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>gR)return;const r=n==null?void 0:n.token;ud!==r&&(ud=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function qr(t=Bp()){const e=fc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=US(t,{popupRedirectResolver:uR,persistence:[ET,M_,$_]}),s=xp("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=_R(i.toString());aT(n,o,()=>o(n.currentUser)),oT(n,a=>o(a))}}const r=Np("auth");return r&&HS(n,`http://${r}`),n}function mR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}NS({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=kt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",mR().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});fR("Browser");var yR="firebase",vR="11.0.1";/**
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
 */wn(yR,vR,"app");const bR={apiKey:"AIzaSyDU95egjb7rapaUJuVJYu0ZeSbP0OLaeCE",authDomain:"autolearn-members.asia-southeast1.firebaseapp.com",projectId:"autolearn-members",storageBucket:"autolearn-members.appspot.com",messagingSenderId:"535565819374",appId:"1:535565819374:web:ccfe472f513439f3a002ff",measurementId:"G-NTHZSSX71G",databaseURL:"https://autolearn-members-default-rtdb.asia-southeast1.firebasedatabase.app/"},tu=Up(bR);qr(tu);const di=nS(tu),ER=ai(di,"projects"),wR=ai(di,"supervisors"),CR=ai(di,"users"),$F=ai(di,"changelogs");var Si=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function IR(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function SR(t,e,n){var s;return n(t,function(r,i,o){if(e(r,i,o))return s=i,!1}),s}var TR=SR;function RR(t){return function(e,n,s){for(var r=-1,i=Object(e),o=s(e),a=o.length;a--;){var l=o[t?a:++r];if(n(i[l],l,i)===!1)break}return e}}var AR=RR,PR=AR,OR=PR(),NR=OR;function kR(t,e){for(var n=-1,s=Array(t);++n<t;)s[n]=e(n);return s}var xR=kR,DR=typeof Si=="object"&&Si&&Si.Object===Object&&Si,q_=DR,LR=q_,MR=typeof self=="object"&&self&&self.Object===Object&&self,FR=LR||MR||Function("return this")(),rn=FR,$R=rn,UR=$R.Symbol,Qo=UR,hd=Qo,K_=Object.prototype,BR=K_.hasOwnProperty,HR=K_.toString,rr=hd?hd.toStringTag:void 0;function jR(t){var e=BR.call(t,rr),n=t[rr];try{t[rr]=void 0;var s=!0}catch{}var r=HR.call(t);return s&&(e?t[rr]=n:delete t[rr]),r}var VR=jR,WR=Object.prototype,qR=WR.toString;function KR(t){return qR.call(t)}var GR=KR,dd=Qo,zR=VR,YR=GR,JR="[object Null]",QR="[object Undefined]",fd=dd?dd.toStringTag:void 0;function XR(t){return t==null?t===void 0?QR:JR:fd&&fd in Object(t)?zR(t):YR(t)}var fi=XR;function ZR(t){return t!=null&&typeof t=="object"}var pi=ZR,eA=fi,tA=pi,nA="[object Arguments]";function sA(t){return tA(t)&&eA(t)==nA}var rA=sA,pd=rA,iA=pi,G_=Object.prototype,oA=G_.hasOwnProperty,aA=G_.propertyIsEnumerable,lA=pd(function(){return arguments}())?pd:function(t){return iA(t)&&oA.call(t,"callee")&&!aA.call(t,"callee")},z_=lA,cA=Array.isArray,xn=cA,bo={exports:{}};function uA(){return!1}var hA=uA;bo.exports;(function(t,e){var n=rn,s=hA,r=e&&!e.nodeType&&e,i=r&&!0&&t&&!t.nodeType&&t,o=i&&i.exports===r,a=o?n.Buffer:void 0,l=a?a.isBuffer:void 0,c=l||s;t.exports=c})(bo,bo.exports);var Y_=bo.exports,dA=9007199254740991,fA=/^(?:0|[1-9]\d*)$/;function pA(t,e){var n=typeof t;return e=e??dA,!!e&&(n=="number"||n!="symbol"&&fA.test(t))&&t>-1&&t%1==0&&t<e}var J_=pA,gA=9007199254740991;function _A(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=gA}var nu=_A,mA=fi,yA=nu,vA=pi,bA="[object Arguments]",EA="[object Array]",wA="[object Boolean]",CA="[object Date]",IA="[object Error]",SA="[object Function]",TA="[object Map]",RA="[object Number]",AA="[object Object]",PA="[object RegExp]",OA="[object Set]",NA="[object String]",kA="[object WeakMap]",xA="[object ArrayBuffer]",DA="[object DataView]",LA="[object Float32Array]",MA="[object Float64Array]",FA="[object Int8Array]",$A="[object Int16Array]",UA="[object Int32Array]",BA="[object Uint8Array]",HA="[object Uint8ClampedArray]",jA="[object Uint16Array]",VA="[object Uint32Array]",_e={};_e[LA]=_e[MA]=_e[FA]=_e[$A]=_e[UA]=_e[BA]=_e[HA]=_e[jA]=_e[VA]=!0;_e[bA]=_e[EA]=_e[xA]=_e[wA]=_e[DA]=_e[CA]=_e[IA]=_e[SA]=_e[TA]=_e[RA]=_e[AA]=_e[PA]=_e[OA]=_e[NA]=_e[kA]=!1;function WA(t){return vA(t)&&yA(t.length)&&!!_e[mA(t)]}var qA=WA;function KA(t){return function(e){return t(e)}}var GA=KA,Eo={exports:{}};Eo.exports;(function(t,e){var n=q_,s=e&&!e.nodeType&&e,r=s&&!0&&t&&!t.nodeType&&t,i=r&&r.exports===s,o=i&&n.process,a=function(){try{var l=r&&r.require&&r.require("util").types;return l||o&&o.binding&&o.binding("util")}catch{}}();t.exports=a})(Eo,Eo.exports);var zA=Eo.exports,YA=qA,JA=GA,gd=zA,_d=gd&&gd.isTypedArray,QA=_d?JA(_d):YA,Q_=QA,XA=xR,ZA=z_,e0=xn,t0=Y_,n0=J_,s0=Q_,r0=Object.prototype,i0=r0.hasOwnProperty;function o0(t,e){var n=e0(t),s=!n&&ZA(t),r=!n&&!s&&t0(t),i=!n&&!s&&!r&&s0(t),o=n||s||r||i,a=o?XA(t.length,String):[],l=a.length;for(var c in t)(e||i0.call(t,c))&&!(o&&(c=="length"||r&&(c=="offset"||c=="parent")||i&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||n0(c,l)))&&a.push(c);return a}var a0=o0,l0=Object.prototype;function c0(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||l0;return t===n}var u0=c0;function h0(t,e){return function(n){return t(e(n))}}var d0=h0,f0=d0,p0=f0(Object.keys,Object),g0=p0,_0=u0,m0=g0,y0=Object.prototype,v0=y0.hasOwnProperty;function b0(t){if(!_0(t))return m0(t);var e=[];for(var n in Object(t))v0.call(t,n)&&n!="constructor"&&e.push(n);return e}var E0=b0;function w0(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var su=w0,C0=fi,I0=su,S0="[object AsyncFunction]",T0="[object Function]",R0="[object GeneratorFunction]",A0="[object Proxy]";function P0(t){if(!I0(t))return!1;var e=C0(t);return e==T0||e==R0||e==S0||e==A0}var X_=P0,O0=X_,N0=nu;function k0(t){return t!=null&&N0(t.length)&&!O0(t)}var x0=k0,D0=a0,L0=E0,M0=x0;function F0(t){return M0(t)?D0(t):L0(t)}var ru=F0,$0=NR,U0=ru;function B0(t,e){return t&&$0(t,e,U0)}var H0=B0;function j0(){this.__data__=[],this.size=0}var V0=j0;function W0(t,e){return t===e||t!==t&&e!==e}var Z_=W0,q0=Z_;function K0(t,e){for(var n=t.length;n--;)if(q0(t[n][0],e))return n;return-1}var Xo=K0,G0=Xo,z0=Array.prototype,Y0=z0.splice;function J0(t){var e=this.__data__,n=G0(e,t);if(n<0)return!1;var s=e.length-1;return n==s?e.pop():Y0.call(e,n,1),--this.size,!0}var Q0=J0,X0=Xo;function Z0(t){var e=this.__data__,n=X0(e,t);return n<0?void 0:e[n][1]}var eP=Z0,tP=Xo;function nP(t){return tP(this.__data__,t)>-1}var sP=nP,rP=Xo;function iP(t,e){var n=this.__data__,s=rP(n,t);return s<0?(++this.size,n.push([t,e])):n[s][1]=e,this}var oP=iP,aP=V0,lP=Q0,cP=eP,uP=sP,hP=oP;function Bs(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var s=t[e];this.set(s[0],s[1])}}Bs.prototype.clear=aP;Bs.prototype.delete=lP;Bs.prototype.get=cP;Bs.prototype.has=uP;Bs.prototype.set=hP;var Zo=Bs,dP=Zo;function fP(){this.__data__=new dP,this.size=0}var pP=fP;function gP(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}var _P=gP;function mP(t){return this.__data__.get(t)}var yP=mP;function vP(t){return this.__data__.has(t)}var bP=vP,EP=rn,wP=EP["__core-js_shared__"],CP=wP,Da=CP,md=function(){var t=/[^.]+$/.exec(Da&&Da.keys&&Da.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function IP(t){return!!md&&md in t}var SP=IP,TP=Function.prototype,RP=TP.toString;function AP(t){if(t!=null){try{return RP.call(t)}catch{}try{return t+""}catch{}}return""}var em=AP,PP=X_,OP=SP,NP=su,kP=em,xP=/[\\^$.*+?()[\]{}|]/g,DP=/^\[object .+?Constructor\]$/,LP=Function.prototype,MP=Object.prototype,FP=LP.toString,$P=MP.hasOwnProperty,UP=RegExp("^"+FP.call($P).replace(xP,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function BP(t){if(!NP(t)||OP(t))return!1;var e=PP(t)?UP:DP;return e.test(kP(t))}var HP=BP;function jP(t,e){return t==null?void 0:t[e]}var VP=jP,WP=HP,qP=VP;function KP(t,e){var n=qP(t,e);return WP(n)?n:void 0}var Hs=KP,GP=Hs,zP=rn,YP=GP(zP,"Map"),iu=YP,JP=Hs,QP=JP(Object,"create"),ea=QP,yd=ea;function XP(){this.__data__=yd?yd(null):{},this.size=0}var ZP=XP;function eO(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var tO=eO,nO=ea,sO="__lodash_hash_undefined__",rO=Object.prototype,iO=rO.hasOwnProperty;function oO(t){var e=this.__data__;if(nO){var n=e[t];return n===sO?void 0:n}return iO.call(e,t)?e[t]:void 0}var aO=oO,lO=ea,cO=Object.prototype,uO=cO.hasOwnProperty;function hO(t){var e=this.__data__;return lO?e[t]!==void 0:uO.call(e,t)}var dO=hO,fO=ea,pO="__lodash_hash_undefined__";function gO(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=fO&&e===void 0?pO:e,this}var _O=gO,mO=ZP,yO=tO,vO=aO,bO=dO,EO=_O;function js(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var s=t[e];this.set(s[0],s[1])}}js.prototype.clear=mO;js.prototype.delete=yO;js.prototype.get=vO;js.prototype.has=bO;js.prototype.set=EO;var wO=js,vd=wO,CO=Zo,IO=iu;function SO(){this.size=0,this.__data__={hash:new vd,map:new(IO||CO),string:new vd}}var TO=SO;function RO(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}var AO=RO,PO=AO;function OO(t,e){var n=t.__data__;return PO(e)?n[typeof e=="string"?"string":"hash"]:n.map}var ta=OO,NO=ta;function kO(t){var e=NO(this,t).delete(t);return this.size-=e?1:0,e}var xO=kO,DO=ta;function LO(t){return DO(this,t).get(t)}var MO=LO,FO=ta;function $O(t){return FO(this,t).has(t)}var UO=$O,BO=ta;function HO(t,e){var n=BO(this,t),s=n.size;return n.set(t,e),this.size+=n.size==s?0:1,this}var jO=HO,VO=TO,WO=xO,qO=MO,KO=UO,GO=jO;function Vs(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var s=t[e];this.set(s[0],s[1])}}Vs.prototype.clear=VO;Vs.prototype.delete=WO;Vs.prototype.get=qO;Vs.prototype.has=KO;Vs.prototype.set=GO;var ou=Vs,zO=Zo,YO=iu,JO=ou,QO=200;function XO(t,e){var n=this.__data__;if(n instanceof zO){var s=n.__data__;if(!YO||s.length<QO-1)return s.push([t,e]),this.size=++n.size,this;n=this.__data__=new JO(s)}return n.set(t,e),this.size=n.size,this}var ZO=XO,eN=Zo,tN=pP,nN=_P,sN=yP,rN=bP,iN=ZO;function Ws(t){var e=this.__data__=new eN(t);this.size=e.size}Ws.prototype.clear=tN;Ws.prototype.delete=nN;Ws.prototype.get=sN;Ws.prototype.has=rN;Ws.prototype.set=iN;var tm=Ws,oN="__lodash_hash_undefined__";function aN(t){return this.__data__.set(t,oN),this}var lN=aN;function cN(t){return this.__data__.has(t)}var uN=cN,hN=ou,dN=lN,fN=uN;function wo(t){var e=-1,n=t==null?0:t.length;for(this.__data__=new hN;++e<n;)this.add(t[e])}wo.prototype.add=wo.prototype.push=dN;wo.prototype.has=fN;var pN=wo;function gN(t,e){for(var n=-1,s=t==null?0:t.length;++n<s;)if(e(t[n],n,t))return!0;return!1}var _N=gN;function mN(t,e){return t.has(e)}var yN=mN,vN=pN,bN=_N,EN=yN,wN=1,CN=2;function IN(t,e,n,s,r,i){var o=n&wN,a=t.length,l=e.length;if(a!=l&&!(o&&l>a))return!1;var c=i.get(t),u=i.get(e);if(c&&u)return c==e&&u==t;var h=-1,d=!0,p=n&CN?new vN:void 0;for(i.set(t,e),i.set(e,t);++h<a;){var _=t[h],m=e[h];if(s)var b=o?s(m,_,h,e,t,i):s(_,m,h,t,e,i);if(b!==void 0){if(b)continue;d=!1;break}if(p){if(!bN(e,function(T,R){if(!EN(p,R)&&(_===T||r(_,T,n,s,i)))return p.push(R)})){d=!1;break}}else if(!(_===m||r(_,m,n,s,i))){d=!1;break}}return i.delete(t),i.delete(e),d}var nm=IN,SN=rn,TN=SN.Uint8Array,RN=TN;function AN(t){var e=-1,n=Array(t.size);return t.forEach(function(s,r){n[++e]=[r,s]}),n}var PN=AN;function ON(t){var e=-1,n=Array(t.size);return t.forEach(function(s){n[++e]=s}),n}var NN=ON,bd=Qo,Ed=RN,kN=Z_,xN=nm,DN=PN,LN=NN,MN=1,FN=2,$N="[object Boolean]",UN="[object Date]",BN="[object Error]",HN="[object Map]",jN="[object Number]",VN="[object RegExp]",WN="[object Set]",qN="[object String]",KN="[object Symbol]",GN="[object ArrayBuffer]",zN="[object DataView]",wd=bd?bd.prototype:void 0,La=wd?wd.valueOf:void 0;function YN(t,e,n,s,r,i,o){switch(n){case zN:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case GN:return!(t.byteLength!=e.byteLength||!i(new Ed(t),new Ed(e)));case $N:case UN:case jN:return kN(+t,+e);case BN:return t.name==e.name&&t.message==e.message;case VN:case qN:return t==e+"";case HN:var a=DN;case WN:var l=s&MN;if(a||(a=LN),t.size!=e.size&&!l)return!1;var c=o.get(t);if(c)return c==e;s|=FN,o.set(t,e);var u=xN(a(t),a(e),s,r,i,o);return o.delete(t),u;case KN:if(La)return La.call(t)==La.call(e)}return!1}var JN=YN;function QN(t,e){for(var n=-1,s=e.length,r=t.length;++n<s;)t[r+n]=e[n];return t}var XN=QN,ZN=XN,ek=xn;function tk(t,e,n){var s=e(t);return ek(t)?s:ZN(s,n(t))}var nk=tk;function sk(t,e){for(var n=-1,s=t==null?0:t.length,r=0,i=[];++n<s;){var o=t[n];e(o,n,t)&&(i[r++]=o)}return i}var rk=sk;function ik(){return[]}var ok=ik,ak=rk,lk=ok,ck=Object.prototype,uk=ck.propertyIsEnumerable,Cd=Object.getOwnPropertySymbols,hk=Cd?function(t){return t==null?[]:(t=Object(t),ak(Cd(t),function(e){return uk.call(t,e)}))}:lk,dk=hk,fk=nk,pk=dk,gk=ru;function _k(t){return fk(t,gk,pk)}var mk=_k,Id=mk,yk=1,vk=Object.prototype,bk=vk.hasOwnProperty;function Ek(t,e,n,s,r,i){var o=n&yk,a=Id(t),l=a.length,c=Id(e),u=c.length;if(l!=u&&!o)return!1;for(var h=l;h--;){var d=a[h];if(!(o?d in e:bk.call(e,d)))return!1}var p=i.get(t),_=i.get(e);if(p&&_)return p==e&&_==t;var m=!0;i.set(t,e),i.set(e,t);for(var b=o;++h<l;){d=a[h];var T=t[d],R=e[d];if(s)var O=o?s(R,T,d,e,t,i):s(T,R,d,t,e,i);if(!(O===void 0?T===R||r(T,R,n,s,i):O)){m=!1;break}b||(b=d=="constructor")}if(m&&!b){var x=t.constructor,B=e.constructor;x!=B&&"constructor"in t&&"constructor"in e&&!(typeof x=="function"&&x instanceof x&&typeof B=="function"&&B instanceof B)&&(m=!1)}return i.delete(t),i.delete(e),m}var wk=Ek,Ck=Hs,Ik=rn,Sk=Ck(Ik,"DataView"),Tk=Sk,Rk=Hs,Ak=rn,Pk=Rk(Ak,"Promise"),Ok=Pk,Nk=Hs,kk=rn,xk=Nk(kk,"Set"),Dk=xk,Lk=Hs,Mk=rn,Fk=Lk(Mk,"WeakMap"),$k=Fk,Tl=Tk,Rl=iu,Al=Ok,Pl=Dk,Ol=$k,sm=fi,qs=em,Sd="[object Map]",Uk="[object Object]",Td="[object Promise]",Rd="[object Set]",Ad="[object WeakMap]",Pd="[object DataView]",Bk=qs(Tl),Hk=qs(Rl),jk=qs(Al),Vk=qs(Pl),Wk=qs(Ol),Bn=sm;(Tl&&Bn(new Tl(new ArrayBuffer(1)))!=Pd||Rl&&Bn(new Rl)!=Sd||Al&&Bn(Al.resolve())!=Td||Pl&&Bn(new Pl)!=Rd||Ol&&Bn(new Ol)!=Ad)&&(Bn=function(t){var e=sm(t),n=e==Uk?t.constructor:void 0,s=n?qs(n):"";if(s)switch(s){case Bk:return Pd;case Hk:return Sd;case jk:return Td;case Vk:return Rd;case Wk:return Ad}return e});var qk=Bn,Ma=tm,Kk=nm,Gk=JN,zk=wk,Od=qk,Nd=xn,kd=Y_,Yk=Q_,Jk=1,xd="[object Arguments]",Dd="[object Array]",Ti="[object Object]",Qk=Object.prototype,Ld=Qk.hasOwnProperty;function Xk(t,e,n,s,r,i){var o=Nd(t),a=Nd(e),l=o?Dd:Od(t),c=a?Dd:Od(e);l=l==xd?Ti:l,c=c==xd?Ti:c;var u=l==Ti,h=c==Ti,d=l==c;if(d&&kd(t)){if(!kd(e))return!1;o=!0,u=!1}if(d&&!u)return i||(i=new Ma),o||Yk(t)?Kk(t,e,n,s,r,i):Gk(t,e,l,n,s,r,i);if(!(n&Jk)){var p=u&&Ld.call(t,"__wrapped__"),_=h&&Ld.call(e,"__wrapped__");if(p||_){var m=p?t.value():t,b=_?e.value():e;return i||(i=new Ma),r(m,b,n,s,i)}}return d?(i||(i=new Ma),zk(t,e,n,s,r,i)):!1}var Zk=Xk,e1=Zk,Md=pi;function rm(t,e,n,s,r){return t===e?!0:t==null||e==null||!Md(t)&&!Md(e)?t!==t&&e!==e:e1(t,e,n,s,rm,r)}var im=rm,t1=tm,n1=im,s1=1,r1=2;function i1(t,e,n,s){var r=n.length,i=r,o=!s;if(t==null)return!i;for(t=Object(t);r--;){var a=n[r];if(o&&a[2]?a[1]!==t[a[0]]:!(a[0]in t))return!1}for(;++r<i;){a=n[r];var l=a[0],c=t[l],u=a[1];if(o&&a[2]){if(c===void 0&&!(l in t))return!1}else{var h=new t1;if(s)var d=s(c,u,l,t,e,h);if(!(d===void 0?n1(u,c,s1|r1,s,h):d))return!1}}return!0}var o1=i1,a1=su;function l1(t){return t===t&&!a1(t)}var om=l1,c1=om,u1=ru;function h1(t){for(var e=u1(t),n=e.length;n--;){var s=e[n],r=t[s];e[n]=[s,r,c1(r)]}return e}var d1=h1;function f1(t,e){return function(n){return n==null?!1:n[t]===e&&(e!==void 0||t in Object(n))}}var am=f1,p1=o1,g1=d1,_1=am;function m1(t){var e=g1(t);return e.length==1&&e[0][2]?_1(e[0][0],e[0][1]):function(n){return n===t||p1(n,t,e)}}var y1=m1,v1=fi,b1=pi,E1="[object Symbol]";function w1(t){return typeof t=="symbol"||b1(t)&&v1(t)==E1}var au=w1,C1=xn,I1=au,S1=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,T1=/^\w*$/;function R1(t,e){if(C1(t))return!1;var n=typeof t;return n=="number"||n=="symbol"||n=="boolean"||t==null||I1(t)?!0:T1.test(t)||!S1.test(t)||e!=null&&t in Object(e)}var lu=R1,lm=ou,A1="Expected a function";function cu(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(A1);var n=function(){var s=arguments,r=e?e.apply(this,s):s[0],i=n.cache;if(i.has(r))return i.get(r);var o=t.apply(this,s);return n.cache=i.set(r,o)||i,o};return n.cache=new(cu.Cache||lm),n}cu.Cache=lm;var P1=cu,O1=P1,N1=500;function k1(t){var e=O1(t,function(s){return n.size===N1&&n.clear(),s}),n=e.cache;return e}var x1=k1,D1=x1,L1=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,M1=/\\(\\)?/g,F1=D1(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(L1,function(n,s,r,i){e.push(r?i.replace(M1,"$1"):s||n)}),e}),$1=F1;function U1(t,e){for(var n=-1,s=t==null?0:t.length,r=Array(s);++n<s;)r[n]=e(t[n],n,t);return r}var B1=U1,Fd=Qo,H1=B1,j1=xn,V1=au,W1=1/0,$d=Fd?Fd.prototype:void 0,Ud=$d?$d.toString:void 0;function cm(t){if(typeof t=="string")return t;if(j1(t))return H1(t,cm)+"";if(V1(t))return Ud?Ud.call(t):"";var e=t+"";return e=="0"&&1/t==-W1?"-0":e}var q1=cm,K1=q1;function G1(t){return t==null?"":K1(t)}var z1=G1,Y1=xn,J1=lu,Q1=$1,X1=z1;function Z1(t,e){return Y1(t)?t:J1(t,e)?[t]:Q1(X1(t))}var um=Z1,ex=au,tx=1/0;function nx(t){if(typeof t=="string"||ex(t))return t;var e=t+"";return e=="0"&&1/t==-tx?"-0":e}var na=nx,sx=um,rx=na;function ix(t,e){e=sx(e,t);for(var n=0,s=e.length;t!=null&&n<s;)t=t[rx(e[n++])];return n&&n==s?t:void 0}var hm=ix,ox=hm;function ax(t,e,n){var s=t==null?void 0:ox(t,e);return s===void 0?n:s}var lx=ax;function cx(t,e){return t!=null&&e in Object(t)}var ux=cx,hx=um,dx=z_,fx=xn,px=J_,gx=nu,_x=na;function mx(t,e,n){e=hx(e,t);for(var s=-1,r=e.length,i=!1;++s<r;){var o=_x(e[s]);if(!(i=t!=null&&n(t,o)))break;t=t[o]}return i||++s!=r?i:(r=t==null?0:t.length,!!r&&gx(r)&&px(o,r)&&(fx(t)||dx(t)))}var yx=mx,vx=ux,bx=yx;function Ex(t,e){return t!=null&&bx(t,e,vx)}var wx=Ex,Cx=im,Ix=lx,Sx=wx,Tx=lu,Rx=om,Ax=am,Px=na,Ox=1,Nx=2;function kx(t,e){return Tx(t)&&Rx(e)?Ax(Px(t),e):function(n){var s=Ix(n,t);return s===void 0&&s===e?Sx(n,t):Cx(e,s,Ox|Nx)}}var xx=kx;function Dx(t){return t}var Lx=Dx;function Mx(t){return function(e){return e==null?void 0:e[t]}}var Fx=Mx,$x=hm;function Ux(t){return function(e){return $x(e,t)}}var Bx=Ux,Hx=Fx,jx=Bx,Vx=lu,Wx=na;function qx(t){return Vx(t)?Hx(Wx(t)):jx(t)}var Kx=qx,Gx=y1,zx=xx,Yx=Lx,Jx=xn,Qx=Kx;function Xx(t){return typeof t=="function"?t:t==null?Yx:typeof t=="object"?Jx(t)?zx(t[0],t[1]):Gx(t):Qx(t)}var Zx=Xx,eD=TR,tD=H0,nD=Zx;function sD(t,e){return eD(t,nD(e),tD)}var rD=sD,iD=function(){function t(e,n){for(var s=0;s<n.length;s++){var r=n[s];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,s){return n&&t(e.prototype,n),s&&t(e,s),e}}();function oD(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var aD=rD,lD={messenger:/\bFB[\w_]+\/(Messenger|MESSENGER)/,facebook:/\bFB[\w_]+\//,twitter:/\bTwitter/i,line:/\bLine\//i,wechat:/\bMicroMessenger\//i,puffin:/\bPuffin/i,miui:/\bMiuiBrowser\//i,instagram:/\bInstagram/i,chrome:/\bCrMo\b|CriOS|Android.*Chrome\/[.0-9]* (Mobile)?/,safari:/Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari/,ie:/IEMobile|MSIEMobile/,firefox:/fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS/},cD=function(){function t(e){oD(this,t),this.ua="",this.ua=e}return iD(t,[{key:"browser",get:function(){var n=this;return aD(lD,function(s){return s.test(n.ua)})||"other"}},{key:"isMobile",get:function(){return/(iPad|iPhone|Android|Mobile)/i.test(this.ua)||!1}},{key:"isDesktop",get:function(){return!this.isMobile}},{key:"isInApp",get:function(){var n=["WebView","(iPhone|iPod|iPad)(?!.*Safari/)","Android.*(wv|.0.0.0)"],s=new RegExp("("+n.join("|")+")","ig");return!!this.ua.match(s)}}]),t}(),uD=cD;const hD=IR(uD);function dm(t,e){return function(){return t.apply(e,arguments)}}const{toString:dD}=Object.prototype,{getPrototypeOf:uu}=Object,sa=(t=>e=>{const n=dD.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),wt=t=>(t=t.toLowerCase(),e=>sa(e)===t),ra=t=>e=>typeof e===t,{isArray:Ks}=Array,Kr=ra("undefined");function fD(t){return t!==null&&!Kr(t)&&t.constructor!==null&&!Kr(t.constructor)&&it(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const fm=wt("ArrayBuffer");function pD(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&fm(t.buffer),e}const gD=ra("string"),it=ra("function"),pm=ra("number"),ia=t=>t!==null&&typeof t=="object",_D=t=>t===!0||t===!1,$i=t=>{if(sa(t)!=="object")return!1;const e=uu(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},mD=wt("Date"),yD=wt("File"),vD=wt("Blob"),bD=wt("FileList"),ED=t=>ia(t)&&it(t.pipe),wD=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||it(t.append)&&((e=sa(t))==="formdata"||e==="object"&&it(t.toString)&&t.toString()==="[object FormData]"))},CD=wt("URLSearchParams"),[ID,SD,TD,RD]=["ReadableStream","Request","Response","Headers"].map(wt),AD=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function gi(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let s,r;if(typeof t!="object"&&(t=[t]),Ks(t))for(s=0,r=t.length;s<r;s++)e.call(null,t[s],s,t);else{const i=n?Object.getOwnPropertyNames(t):Object.keys(t),o=i.length;let a;for(s=0;s<o;s++)a=i[s],e.call(null,t[a],a,t)}}function gm(t,e){e=e.toLowerCase();const n=Object.keys(t);let s=n.length,r;for(;s-- >0;)if(r=n[s],e===r.toLowerCase())return r;return null}const Vn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,_m=t=>!Kr(t)&&t!==Vn;function Nl(){const{caseless:t}=_m(this)&&this||{},e={},n=(s,r)=>{const i=t&&gm(e,r)||r;$i(e[i])&&$i(s)?e[i]=Nl(e[i],s):$i(s)?e[i]=Nl({},s):Ks(s)?e[i]=s.slice():e[i]=s};for(let s=0,r=arguments.length;s<r;s++)arguments[s]&&gi(arguments[s],n);return e}const PD=(t,e,n,{allOwnKeys:s}={})=>(gi(e,(r,i)=>{n&&it(r)?t[i]=dm(r,n):t[i]=r},{allOwnKeys:s}),t),OD=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),ND=(t,e,n,s)=>{t.prototype=Object.create(e.prototype,s),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},kD=(t,e,n,s)=>{let r,i,o;const a={};if(e=e||{},t==null)return e;do{for(r=Object.getOwnPropertyNames(t),i=r.length;i-- >0;)o=r[i],(!s||s(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&uu(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},xD=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const s=t.indexOf(e,n);return s!==-1&&s===n},DD=t=>{if(!t)return null;if(Ks(t))return t;let e=t.length;if(!pm(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},LD=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&uu(Uint8Array)),MD=(t,e)=>{const s=(t&&t[Symbol.iterator]).call(t);let r;for(;(r=s.next())&&!r.done;){const i=r.value;e.call(t,i[0],i[1])}},FD=(t,e)=>{let n;const s=[];for(;(n=t.exec(e))!==null;)s.push(n);return s},$D=wt("HTMLFormElement"),UD=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,s,r){return s.toUpperCase()+r}),Bd=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),BD=wt("RegExp"),mm=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),s={};gi(n,(r,i)=>{let o;(o=e(r,i,t))!==!1&&(s[i]=o||r)}),Object.defineProperties(t,s)},HD=t=>{mm(t,(e,n)=>{if(it(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const s=t[n];if(it(s)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},jD=(t,e)=>{const n={},s=r=>{r.forEach(i=>{n[i]=!0})};return Ks(t)?s(t):s(String(t).split(e)),n},VD=()=>{},WD=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e,Fa="abcdefghijklmnopqrstuvwxyz",Hd="0123456789",ym={DIGIT:Hd,ALPHA:Fa,ALPHA_DIGIT:Fa+Fa.toUpperCase()+Hd},qD=(t=16,e=ym.ALPHA_DIGIT)=>{let n="";const{length:s}=e;for(;t--;)n+=e[Math.random()*s|0];return n};function KD(t){return!!(t&&it(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const GD=t=>{const e=new Array(10),n=(s,r)=>{if(ia(s)){if(e.indexOf(s)>=0)return;if(!("toJSON"in s)){e[r]=s;const i=Ks(s)?[]:{};return gi(s,(o,a)=>{const l=n(o,r+1);!Kr(l)&&(i[a]=l)}),e[r]=void 0,i}}return s};return n(t,0)},zD=wt("AsyncFunction"),YD=t=>t&&(ia(t)||it(t))&&it(t.then)&&it(t.catch),vm=((t,e)=>t?setImmediate:e?((n,s)=>(Vn.addEventListener("message",({source:r,data:i})=>{r===Vn&&i===n&&s.length&&s.shift()()},!1),r=>{s.push(r),Vn.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",it(Vn.postMessage)),JD=typeof queueMicrotask<"u"?queueMicrotask.bind(Vn):typeof process<"u"&&process.nextTick||vm,v={isArray:Ks,isArrayBuffer:fm,isBuffer:fD,isFormData:wD,isArrayBufferView:pD,isString:gD,isNumber:pm,isBoolean:_D,isObject:ia,isPlainObject:$i,isReadableStream:ID,isRequest:SD,isResponse:TD,isHeaders:RD,isUndefined:Kr,isDate:mD,isFile:yD,isBlob:vD,isRegExp:BD,isFunction:it,isStream:ED,isURLSearchParams:CD,isTypedArray:LD,isFileList:bD,forEach:gi,merge:Nl,extend:PD,trim:AD,stripBOM:OD,inherits:ND,toFlatObject:kD,kindOf:sa,kindOfTest:wt,endsWith:xD,toArray:DD,forEachEntry:MD,matchAll:FD,isHTMLForm:$D,hasOwnProperty:Bd,hasOwnProp:Bd,reduceDescriptors:mm,freezeMethods:HD,toObjectSet:jD,toCamelCase:UD,noop:VD,toFiniteNumber:WD,findKey:gm,global:Vn,isContextDefined:_m,ALPHABET:ym,generateString:qD,isSpecCompliantForm:KD,toJSONObject:GD,isAsyncFn:zD,isThenable:YD,setImmediate:vm,asap:JD};function G(t,e,n,s,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),s&&(this.request=s),r&&(this.response=r,this.status=r.status?r.status:null)}v.inherits(G,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:v.toJSONObject(this.config),code:this.code,status:this.status}}});const bm=G.prototype,Em={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{Em[t]={value:t}});Object.defineProperties(G,Em);Object.defineProperty(bm,"isAxiosError",{value:!0});G.from=(t,e,n,s,r,i)=>{const o=Object.create(bm);return v.toFlatObject(t,o,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),G.call(o,t.message,e,n,s,r),o.cause=t,o.name=t.name,i&&Object.assign(o,i),o};const QD=null;function kl(t){return v.isPlainObject(t)||v.isArray(t)}function wm(t){return v.endsWith(t,"[]")?t.slice(0,-2):t}function jd(t,e,n){return t?t.concat(e).map(function(r,i){return r=wm(r),!n&&i?"["+r+"]":r}).join(n?".":""):e}function XD(t){return v.isArray(t)&&!t.some(kl)}const ZD=v.toFlatObject(v,{},null,function(e){return/^is[A-Z]/.test(e)});function oa(t,e,n){if(!v.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=v.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,b){return!v.isUndefined(b[m])});const s=n.metaTokens,r=n.visitor||u,i=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&v.isSpecCompliantForm(e);if(!v.isFunction(r))throw new TypeError("visitor must be a function");function c(_){if(_===null)return"";if(v.isDate(_))return _.toISOString();if(!l&&v.isBlob(_))throw new G("Blob is not supported. Use a Buffer instead.");return v.isArrayBuffer(_)||v.isTypedArray(_)?l&&typeof Blob=="function"?new Blob([_]):Buffer.from(_):_}function u(_,m,b){let T=_;if(_&&!b&&typeof _=="object"){if(v.endsWith(m,"{}"))m=s?m:m.slice(0,-2),_=JSON.stringify(_);else if(v.isArray(_)&&XD(_)||(v.isFileList(_)||v.endsWith(m,"[]"))&&(T=v.toArray(_)))return m=wm(m),T.forEach(function(O,x){!(v.isUndefined(O)||O===null)&&e.append(o===!0?jd([m],x,i):o===null?m:m+"[]",c(O))}),!1}return kl(_)?!0:(e.append(jd(b,m,i),c(_)),!1)}const h=[],d=Object.assign(ZD,{defaultVisitor:u,convertValue:c,isVisitable:kl});function p(_,m){if(!v.isUndefined(_)){if(h.indexOf(_)!==-1)throw Error("Circular reference detected in "+m.join("."));h.push(_),v.forEach(_,function(T,R){(!(v.isUndefined(T)||T===null)&&r.call(e,T,v.isString(R)?R.trim():R,m,d))===!0&&p(T,m?m.concat(R):[R])}),h.pop()}}if(!v.isObject(t))throw new TypeError("data must be an object");return p(t),e}function Vd(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(s){return e[s]})}function hu(t,e){this._pairs=[],t&&oa(t,this,e)}const Cm=hu.prototype;Cm.append=function(e,n){this._pairs.push([e,n])};Cm.toString=function(e){const n=e?function(s){return e.call(this,s,Vd)}:Vd;return this._pairs.map(function(r){return n(r[0])+"="+n(r[1])},"").join("&")};function eL(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Im(t,e,n){if(!e)return t;const s=n&&n.encode||eL,r=n&&n.serialize;let i;if(r?i=r(e,n):i=v.isURLSearchParams(e)?e.toString():new hu(e,n).toString(s),i){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+i}return t}class Wd{constructor(){this.handlers=[]}use(e,n,s){return this.handlers.push({fulfilled:e,rejected:n,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){v.forEach(this.handlers,function(s){s!==null&&e(s)})}}const Sm={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},tL=typeof URLSearchParams<"u"?URLSearchParams:hu,nL=typeof FormData<"u"?FormData:null,sL=typeof Blob<"u"?Blob:null,rL={isBrowser:!0,classes:{URLSearchParams:tL,FormData:nL,Blob:sL},protocols:["http","https","file","blob","url","data"]},du=typeof window<"u"&&typeof document<"u",xl=typeof navigator=="object"&&navigator||void 0,iL=du&&(!xl||["ReactNative","NativeScript","NS"].indexOf(xl.product)<0),oL=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",aL=du&&window.location.href||"http://localhost",lL=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:du,hasStandardBrowserEnv:iL,hasStandardBrowserWebWorkerEnv:oL,navigator:xl,origin:aL},Symbol.toStringTag,{value:"Module"})),ze={...lL,...rL};function cL(t,e){return oa(t,new ze.classes.URLSearchParams,Object.assign({visitor:function(n,s,r,i){return ze.isNode&&v.isBuffer(n)?(this.append(s,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}function uL(t){return v.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function hL(t){const e={},n=Object.keys(t);let s;const r=n.length;let i;for(s=0;s<r;s++)i=n[s],e[i]=t[i];return e}function Tm(t){function e(n,s,r,i){let o=n[i++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=i>=n.length;return o=!o&&v.isArray(r)?r.length:o,l?(v.hasOwnProp(r,o)?r[o]=[r[o],s]:r[o]=s,!a):((!r[o]||!v.isObject(r[o]))&&(r[o]=[]),e(n,s,r[o],i)&&v.isArray(r[o])&&(r[o]=hL(r[o])),!a)}if(v.isFormData(t)&&v.isFunction(t.entries)){const n={};return v.forEachEntry(t,(s,r)=>{e(uL(s),r,n,0)}),n}return null}function dL(t,e,n){if(v.isString(t))try{return(e||JSON.parse)(t),v.trim(t)}catch(s){if(s.name!=="SyntaxError")throw s}return(0,JSON.stringify)(t)}const _i={transitional:Sm,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const s=n.getContentType()||"",r=s.indexOf("application/json")>-1,i=v.isObject(e);if(i&&v.isHTMLForm(e)&&(e=new FormData(e)),v.isFormData(e))return r?JSON.stringify(Tm(e)):e;if(v.isArrayBuffer(e)||v.isBuffer(e)||v.isStream(e)||v.isFile(e)||v.isBlob(e)||v.isReadableStream(e))return e;if(v.isArrayBufferView(e))return e.buffer;if(v.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(i){if(s.indexOf("application/x-www-form-urlencoded")>-1)return cL(e,this.formSerializer).toString();if((a=v.isFileList(e))||s.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return oa(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return i||r?(n.setContentType("application/json",!1),dL(e)):e}],transformResponse:[function(e){const n=this.transitional||_i.transitional,s=n&&n.forcedJSONParsing,r=this.responseType==="json";if(v.isResponse(e)||v.isReadableStream(e))return e;if(e&&v.isString(e)&&(s&&!this.responseType||r)){const o=!(n&&n.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?G.from(a,G.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ze.classes.FormData,Blob:ze.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};v.forEach(["delete","get","head","post","put","patch"],t=>{_i.headers[t]={}});const fL=v.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),pL=t=>{const e={};let n,s,r;return t&&t.split(`
`).forEach(function(o){r=o.indexOf(":"),n=o.substring(0,r).trim().toLowerCase(),s=o.substring(r+1).trim(),!(!n||e[n]&&fL[n])&&(n==="set-cookie"?e[n]?e[n].push(s):e[n]=[s]:e[n]=e[n]?e[n]+", "+s:s)}),e},qd=Symbol("internals");function ir(t){return t&&String(t).trim().toLowerCase()}function Ui(t){return t===!1||t==null?t:v.isArray(t)?t.map(Ui):String(t)}function gL(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let s;for(;s=n.exec(t);)e[s[1]]=s[2];return e}const _L=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function $a(t,e,n,s,r){if(v.isFunction(s))return s.call(this,e,n);if(r&&(e=n),!!v.isString(e)){if(v.isString(s))return e.indexOf(s)!==-1;if(v.isRegExp(s))return s.test(e)}}function mL(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,s)=>n.toUpperCase()+s)}function yL(t,e){const n=v.toCamelCase(" "+e);["get","set","has"].forEach(s=>{Object.defineProperty(t,s+n,{value:function(r,i,o){return this[s].call(this,e,r,i,o)},configurable:!0})})}class Ye{constructor(e){e&&this.set(e)}set(e,n,s){const r=this;function i(a,l,c){const u=ir(l);if(!u)throw new Error("header name must be a non-empty string");const h=v.findKey(r,u);(!h||r[h]===void 0||c===!0||c===void 0&&r[h]!==!1)&&(r[h||l]=Ui(a))}const o=(a,l)=>v.forEach(a,(c,u)=>i(c,u,l));if(v.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(v.isString(e)&&(e=e.trim())&&!_L(e))o(pL(e),n);else if(v.isHeaders(e))for(const[a,l]of e.entries())i(l,a,s);else e!=null&&i(n,e,s);return this}get(e,n){if(e=ir(e),e){const s=v.findKey(this,e);if(s){const r=this[s];if(!n)return r;if(n===!0)return gL(r);if(v.isFunction(n))return n.call(this,r,s);if(v.isRegExp(n))return n.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=ir(e),e){const s=v.findKey(this,e);return!!(s&&this[s]!==void 0&&(!n||$a(this,this[s],s,n)))}return!1}delete(e,n){const s=this;let r=!1;function i(o){if(o=ir(o),o){const a=v.findKey(s,o);a&&(!n||$a(s,s[a],a,n))&&(delete s[a],r=!0)}}return v.isArray(e)?e.forEach(i):i(e),r}clear(e){const n=Object.keys(this);let s=n.length,r=!1;for(;s--;){const i=n[s];(!e||$a(this,this[i],i,e,!0))&&(delete this[i],r=!0)}return r}normalize(e){const n=this,s={};return v.forEach(this,(r,i)=>{const o=v.findKey(s,i);if(o){n[o]=Ui(r),delete n[i];return}const a=e?mL(i):String(i).trim();a!==i&&delete n[i],n[a]=Ui(r),s[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return v.forEach(this,(s,r)=>{s!=null&&s!==!1&&(n[r]=e&&v.isArray(s)?s.join(", "):s)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const s=new this(e);return n.forEach(r=>s.set(r)),s}static accessor(e){const s=(this[qd]=this[qd]={accessors:{}}).accessors,r=this.prototype;function i(o){const a=ir(o);s[a]||(yL(r,o),s[a]=!0)}return v.isArray(e)?e.forEach(i):i(e),this}}Ye.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);v.reduceDescriptors(Ye.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(s){this[n]=s}}});v.freezeMethods(Ye);function Ua(t,e){const n=this||_i,s=e||n,r=Ye.from(s.headers);let i=s.data;return v.forEach(t,function(a){i=a.call(n,i,r.normalize(),e?e.status:void 0)}),r.normalize(),i}function Rm(t){return!!(t&&t.__CANCEL__)}function Gs(t,e,n){G.call(this,t??"canceled",G.ERR_CANCELED,e,n),this.name="CanceledError"}v.inherits(Gs,G,{__CANCEL__:!0});function Am(t,e,n){const s=n.config.validateStatus;!n.status||!s||s(n.status)?t(n):e(new G("Request failed with status code "+n.status,[G.ERR_BAD_REQUEST,G.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function vL(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function bL(t,e){t=t||10;const n=new Array(t),s=new Array(t);let r=0,i=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),u=s[i];o||(o=c),n[r]=l,s[r]=c;let h=i,d=0;for(;h!==r;)d+=n[h++],h=h%t;if(r=(r+1)%t,r===i&&(i=(i+1)%t),c-o<e)return;const p=u&&c-u;return p?Math.round(d*1e3/p):void 0}}function EL(t,e){let n=0,s=1e3/e,r,i;const o=(c,u=Date.now())=>{n=u,r=null,i&&(clearTimeout(i),i=null),t.apply(null,c)};return[(...c)=>{const u=Date.now(),h=u-n;h>=s?o(c,u):(r=c,i||(i=setTimeout(()=>{i=null,o(r)},s-h)))},()=>r&&o(r)]}const Co=(t,e,n=3)=>{let s=0;const r=bL(50,250);return EL(i=>{const o=i.loaded,a=i.lengthComputable?i.total:void 0,l=o-s,c=r(l),u=o<=a;s=o;const h={loaded:o,total:a,progress:a?o/a:void 0,bytes:l,rate:c||void 0,estimated:c&&a&&u?(a-o)/c:void 0,event:i,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(h)},n)},Kd=(t,e)=>{const n=t!=null;return[s=>e[0]({lengthComputable:n,total:t,loaded:s}),e[1]]},Gd=t=>(...e)=>v.asap(()=>t(...e)),wL=ze.hasStandardBrowserEnv?function(){const e=ze.navigator&&/(msie|trident)/i.test(ze.navigator.userAgent),n=document.createElement("a");let s;function r(i){let o=i;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return s=r(window.location.href),function(o){const a=v.isString(o)?r(o):o;return a.protocol===s.protocol&&a.host===s.host}}():function(){return function(){return!0}}(),CL=ze.hasStandardBrowserEnv?{write(t,e,n,s,r,i){const o=[t+"="+encodeURIComponent(e)];v.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),v.isString(s)&&o.push("path="+s),v.isString(r)&&o.push("domain="+r),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function IL(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function SL(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function Pm(t,e){return t&&!IL(e)?SL(t,e):e}const zd=t=>t instanceof Ye?{...t}:t;function ts(t,e){e=e||{};const n={};function s(c,u,h){return v.isPlainObject(c)&&v.isPlainObject(u)?v.merge.call({caseless:h},c,u):v.isPlainObject(u)?v.merge({},u):v.isArray(u)?u.slice():u}function r(c,u,h){if(v.isUndefined(u)){if(!v.isUndefined(c))return s(void 0,c,h)}else return s(c,u,h)}function i(c,u){if(!v.isUndefined(u))return s(void 0,u)}function o(c,u){if(v.isUndefined(u)){if(!v.isUndefined(c))return s(void 0,c)}else return s(void 0,u)}function a(c,u,h){if(h in e)return s(c,u);if(h in t)return s(void 0,c)}const l={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(c,u)=>r(zd(c),zd(u),!0)};return v.forEach(Object.keys(Object.assign({},t,e)),function(u){const h=l[u]||r,d=h(t[u],e[u],u);v.isUndefined(d)&&h!==a||(n[u]=d)}),n}const Om=t=>{const e=ts({},t);let{data:n,withXSRFToken:s,xsrfHeaderName:r,xsrfCookieName:i,headers:o,auth:a}=e;e.headers=o=Ye.from(o),e.url=Im(Pm(e.baseURL,e.url),t.params,t.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let l;if(v.isFormData(n)){if(ze.hasStandardBrowserEnv||ze.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((l=o.getContentType())!==!1){const[c,...u]=l?l.split(";").map(h=>h.trim()).filter(Boolean):[];o.setContentType([c||"multipart/form-data",...u].join("; "))}}if(ze.hasStandardBrowserEnv&&(s&&v.isFunction(s)&&(s=s(e)),s||s!==!1&&wL(e.url))){const c=r&&i&&CL.read(i);c&&o.set(r,c)}return e},TL=typeof XMLHttpRequest<"u",RL=TL&&function(t){return new Promise(function(n,s){const r=Om(t);let i=r.data;const o=Ye.from(r.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:c}=r,u,h,d,p,_;function m(){p&&p(),_&&_(),r.cancelToken&&r.cancelToken.unsubscribe(u),r.signal&&r.signal.removeEventListener("abort",u)}let b=new XMLHttpRequest;b.open(r.method.toUpperCase(),r.url,!0),b.timeout=r.timeout;function T(){if(!b)return;const O=Ye.from("getAllResponseHeaders"in b&&b.getAllResponseHeaders()),B={data:!a||a==="text"||a==="json"?b.responseText:b.response,status:b.status,statusText:b.statusText,headers:O,config:t,request:b};Am(function(Q){n(Q),m()},function(Q){s(Q),m()},B),b=null}"onloadend"in b?b.onloadend=T:b.onreadystatechange=function(){!b||b.readyState!==4||b.status===0&&!(b.responseURL&&b.responseURL.indexOf("file:")===0)||setTimeout(T)},b.onabort=function(){b&&(s(new G("Request aborted",G.ECONNABORTED,t,b)),b=null)},b.onerror=function(){s(new G("Network Error",G.ERR_NETWORK,t,b)),b=null},b.ontimeout=function(){let x=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const B=r.transitional||Sm;r.timeoutErrorMessage&&(x=r.timeoutErrorMessage),s(new G(x,B.clarifyTimeoutError?G.ETIMEDOUT:G.ECONNABORTED,t,b)),b=null},i===void 0&&o.setContentType(null),"setRequestHeader"in b&&v.forEach(o.toJSON(),function(x,B){b.setRequestHeader(B,x)}),v.isUndefined(r.withCredentials)||(b.withCredentials=!!r.withCredentials),a&&a!=="json"&&(b.responseType=r.responseType),c&&([d,_]=Co(c,!0),b.addEventListener("progress",d)),l&&b.upload&&([h,p]=Co(l),b.upload.addEventListener("progress",h),b.upload.addEventListener("loadend",p)),(r.cancelToken||r.signal)&&(u=O=>{b&&(s(!O||O.type?new Gs(null,t,b):O),b.abort(),b=null)},r.cancelToken&&r.cancelToken.subscribe(u),r.signal&&(r.signal.aborted?u():r.signal.addEventListener("abort",u)));const R=vL(r.url);if(R&&ze.protocols.indexOf(R)===-1){s(new G("Unsupported protocol "+R+":",G.ERR_BAD_REQUEST,t));return}b.send(i||null)})},AL=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let s=new AbortController,r;const i=function(c){if(!r){r=!0,a();const u=c instanceof Error?c:this.reason;s.abort(u instanceof G?u:new Gs(u instanceof Error?u.message:u))}};let o=e&&setTimeout(()=>{o=null,i(new G(`timeout ${e} of ms exceeded`,G.ETIMEDOUT))},e);const a=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(c=>{c.unsubscribe?c.unsubscribe(i):c.removeEventListener("abort",i)}),t=null)};t.forEach(c=>c.addEventListener("abort",i));const{signal:l}=s;return l.unsubscribe=()=>v.asap(a),l}},PL=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let s=0,r;for(;s<n;)r=s+e,yield t.slice(s,r),s=r},OL=async function*(t,e){for await(const n of NL(t))yield*PL(n,e)},NL=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:s}=await e.read();if(n)break;yield s}}finally{await e.cancel()}},Yd=(t,e,n,s)=>{const r=OL(t,e);let i=0,o,a=l=>{o||(o=!0,s&&s(l))};return new ReadableStream({async pull(l){try{const{done:c,value:u}=await r.next();if(c){a(),l.close();return}let h=u.byteLength;if(n){let d=i+=h;n(d)}l.enqueue(new Uint8Array(u))}catch(c){throw a(c),c}},cancel(l){return a(l),r.return()}},{highWaterMark:2})},aa=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Nm=aa&&typeof ReadableStream=="function",kL=aa&&(typeof TextEncoder=="function"?(t=>e=>t.encode(e))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),km=(t,...e)=>{try{return!!t(...e)}catch{return!1}},xL=Nm&&km(()=>{let t=!1;const e=new Request(ze.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e}),Jd=64*1024,Dl=Nm&&km(()=>v.isReadableStream(new Response("").body)),Io={stream:Dl&&(t=>t.body)};aa&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!Io[e]&&(Io[e]=v.isFunction(t[e])?n=>n[e]():(n,s)=>{throw new G(`Response type '${e}' is not supported`,G.ERR_NOT_SUPPORT,s)})})})(new Response);const DL=async t=>{if(t==null)return 0;if(v.isBlob(t))return t.size;if(v.isSpecCompliantForm(t))return(await new Request(ze.origin,{method:"POST",body:t}).arrayBuffer()).byteLength;if(v.isArrayBufferView(t)||v.isArrayBuffer(t))return t.byteLength;if(v.isURLSearchParams(t)&&(t=t+""),v.isString(t))return(await kL(t)).byteLength},LL=async(t,e)=>{const n=v.toFiniteNumber(t.getContentLength());return n??DL(e)},ML=aa&&(async t=>{let{url:e,method:n,data:s,signal:r,cancelToken:i,timeout:o,onDownloadProgress:a,onUploadProgress:l,responseType:c,headers:u,withCredentials:h="same-origin",fetchOptions:d}=Om(t);c=c?(c+"").toLowerCase():"text";let p=AL([r,i&&i.toAbortSignal()],o),_;const m=p&&p.unsubscribe&&(()=>{p.unsubscribe()});let b;try{if(l&&xL&&n!=="get"&&n!=="head"&&(b=await LL(u,s))!==0){let B=new Request(e,{method:"POST",body:s,duplex:"half"}),ee;if(v.isFormData(s)&&(ee=B.headers.get("content-type"))&&u.setContentType(ee),B.body){const[Q,Oe]=Kd(b,Co(Gd(l)));s=Yd(B.body,Jd,Q,Oe)}}v.isString(h)||(h=h?"include":"omit");const T="credentials"in Request.prototype;_=new Request(e,{...d,signal:p,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:s,duplex:"half",credentials:T?h:void 0});let R=await fetch(_);const O=Dl&&(c==="stream"||c==="response");if(Dl&&(a||O&&m)){const B={};["status","statusText","headers"].forEach(Ue=>{B[Ue]=R[Ue]});const ee=v.toFiniteNumber(R.headers.get("content-length")),[Q,Oe]=a&&Kd(ee,Co(Gd(a),!0))||[];R=new Response(Yd(R.body,Jd,Q,()=>{Oe&&Oe(),m&&m()}),B)}c=c||"text";let x=await Io[v.findKey(Io,c)||"text"](R,t);return!O&&m&&m(),await new Promise((B,ee)=>{Am(B,ee,{data:x,headers:Ye.from(R.headers),status:R.status,statusText:R.statusText,config:t,request:_})})}catch(T){throw m&&m(),T&&T.name==="TypeError"&&/fetch/i.test(T.message)?Object.assign(new G("Network Error",G.ERR_NETWORK,t,_),{cause:T.cause||T}):G.from(T,T&&T.code,t,_)}}),Ll={http:QD,xhr:RL,fetch:ML};v.forEach(Ll,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const Qd=t=>`- ${t}`,FL=t=>v.isFunction(t)||t===null||t===!1,xm={getAdapter:t=>{t=v.isArray(t)?t:[t];const{length:e}=t;let n,s;const r={};for(let i=0;i<e;i++){n=t[i];let o;if(s=n,!FL(n)&&(s=Ll[(o=String(n)).toLowerCase()],s===void 0))throw new G(`Unknown adapter '${o}'`);if(s)break;r[o||"#"+i]=s}if(!s){const i=Object.entries(r).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let o=e?i.length>1?`since :
`+i.map(Qd).join(`
`):" "+Qd(i[0]):"as no adapter specified";throw new G("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return s},adapters:Ll};function Ba(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Gs(null,t)}function Xd(t){return Ba(t),t.headers=Ye.from(t.headers),t.data=Ua.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),xm.getAdapter(t.adapter||_i.adapter)(t).then(function(s){return Ba(t),s.data=Ua.call(t,t.transformResponse,s),s.headers=Ye.from(s.headers),s},function(s){return Rm(s)||(Ba(t),s&&s.response&&(s.response.data=Ua.call(t,t.transformResponse,s.response),s.response.headers=Ye.from(s.response.headers))),Promise.reject(s)})}const Dm="1.7.7",fu={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{fu[t]=function(s){return typeof s===t||"a"+(e<1?"n ":" ")+t}});const Zd={};fu.transitional=function(e,n,s){function r(i,o){return"[Axios v"+Dm+"] Transitional option '"+i+"'"+o+(s?". "+s:"")}return(i,o,a)=>{if(e===!1)throw new G(r(o," has been removed"+(n?" in "+n:"")),G.ERR_DEPRECATED);return n&&!Zd[o]&&(Zd[o]=!0,console.warn(r(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,a):!0}};function $L(t,e,n){if(typeof t!="object")throw new G("options must be an object",G.ERR_BAD_OPTION_VALUE);const s=Object.keys(t);let r=s.length;for(;r-- >0;){const i=s[r],o=e[i];if(o){const a=t[i],l=a===void 0||o(a,i,t);if(l!==!0)throw new G("option "+i+" must be "+l,G.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new G("Unknown option "+i,G.ERR_BAD_OPTION)}}const Ml={assertOptions:$L,validators:fu},cn=Ml.validators;class qn{constructor(e){this.defaults=e,this.interceptors={request:new Wd,response:new Wd}}async request(e,n){try{return await this._request(e,n)}catch(s){if(s instanceof Error){let r;Error.captureStackTrace?Error.captureStackTrace(r={}):r=new Error;const i=r.stack?r.stack.replace(/^.+\n/,""):"";try{s.stack?i&&!String(s.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(s.stack+=`
`+i):s.stack=i}catch{}}throw s}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=ts(this.defaults,n);const{transitional:s,paramsSerializer:r,headers:i}=n;s!==void 0&&Ml.assertOptions(s,{silentJSONParsing:cn.transitional(cn.boolean),forcedJSONParsing:cn.transitional(cn.boolean),clarifyTimeoutError:cn.transitional(cn.boolean)},!1),r!=null&&(v.isFunction(r)?n.paramsSerializer={serialize:r}:Ml.assertOptions(r,{encode:cn.function,serialize:cn.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&v.merge(i.common,i[n.method]);i&&v.forEach(["delete","get","head","post","put","patch","common"],_=>{delete i[_]}),n.headers=Ye.concat(o,i);const a=[];let l=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(n)===!1||(l=l&&m.synchronous,a.unshift(m.fulfilled,m.rejected))});const c=[];this.interceptors.response.forEach(function(m){c.push(m.fulfilled,m.rejected)});let u,h=0,d;if(!l){const _=[Xd.bind(this),void 0];for(_.unshift.apply(_,a),_.push.apply(_,c),d=_.length,u=Promise.resolve(n);h<d;)u=u.then(_[h++],_[h++]);return u}d=a.length;let p=n;for(h=0;h<d;){const _=a[h++],m=a[h++];try{p=_(p)}catch(b){m.call(this,b);break}}try{u=Xd.call(this,p)}catch(_){return Promise.reject(_)}for(h=0,d=c.length;h<d;)u=u.then(c[h++],c[h++]);return u}getUri(e){e=ts(this.defaults,e);const n=Pm(e.baseURL,e.url);return Im(n,e.params,e.paramsSerializer)}}v.forEach(["delete","get","head","options"],function(e){qn.prototype[e]=function(n,s){return this.request(ts(s||{},{method:e,url:n,data:(s||{}).data}))}});v.forEach(["post","put","patch"],function(e){function n(s){return function(i,o,a){return this.request(ts(a||{},{method:e,headers:s?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}qn.prototype[e]=n(),qn.prototype[e+"Form"]=n(!0)});class pu{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const s=this;this.promise.then(r=>{if(!s._listeners)return;let i=s._listeners.length;for(;i-- >0;)s._listeners[i](r);s._listeners=null}),this.promise.then=r=>{let i;const o=new Promise(a=>{s.subscribe(a),i=a}).then(r);return o.cancel=function(){s.unsubscribe(i)},o},e(function(i,o,a){s.reason||(s.reason=new Gs(i,o,a),n(s.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=s=>{e.abort(s)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new pu(function(r){e=r}),cancel:e}}}function UL(t){return function(n){return t.apply(null,n)}}function BL(t){return v.isObject(t)&&t.isAxiosError===!0}const Fl={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Fl).forEach(([t,e])=>{Fl[e]=t});function Lm(t){const e=new qn(t),n=dm(qn.prototype.request,e);return v.extend(n,qn.prototype,e,{allOwnKeys:!0}),v.extend(n,e,null,{allOwnKeys:!0}),n.create=function(r){return Lm(ts(t,r))},n}const be=Lm(_i);be.Axios=qn;be.CanceledError=Gs;be.CancelToken=pu;be.isCancel=Rm;be.VERSION=Dm;be.toFormData=oa;be.AxiosError=G;be.Cancel=be.CanceledError;be.all=function(e){return Promise.all(e)};be.spread=UL;be.isAxiosError=BL;be.mergeConfig=ts;be.AxiosHeaders=Ye;be.formToJSON=t=>Tm(v.isHTMLForm(t)?new FormData(t):t);be.getAdapter=xm.getAdapter;be.HttpStatusCode=Fl;be.default=be;const HL=Xr({name:"LoginBox",props:{isInApp:{type:Boolean,required:!0},showLogin:{type:Boolean,required:!0}},setup(t,{emit:e}){const n=ht(""),s=ht(""),r=ht(!1);_r(r,u=>{localStorage.setItem("keeploggedin",JSON.stringify(u))}),sc(()=>{const u=localStorage.getItem("keeploggedin");u!==null&&(r.value=JSON.parse(u))});const i=()=>{e("toggleLogin")},o=async u=>{const h=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,d=/@alearn.org.tw$/;if(h.test(String(u).toLowerCase())&&d.test(String(u).toLowerCase()))return!0;try{return(await be.get(`https://members-backend.alearn13994229.workers.dev/is_member_email/${u}`)).data.isMember===!0}catch(p){return console.error("Error checking member email:",p),!1}};return{users_email:n,user_password:s,keeploggedin:r,toggleLogin:i,registerWithEmail:async()=>{if(console.log("users_email:",n.value),console.log("user_password:",s.value),console.log("Register clicked"),!n.value||!s.value){window.alert("請先填寫email和密碼");return}if(!await o(n.value)){alert("請使用@aleran.org.tw網域的Email，或是會員名冊上有的Email");return}if(!s.value||typeof s.value!="string"){alert("密碼請至少包含一個英文字，請重新輸入");return}e("registerWithEmail",n.value,s.value,r.value)},loginWithEmail:()=>{let u=!0;console.log("Login clicked");const h=window.location.pathname;if((h==="/friends"||h==="/maps"||h==="/privacy-policy"||h.startsWith("/flag")||h.startsWith("/group"))&&(u=!1),!s.value||typeof s.value!="string"){alert("密碼無效，請重新輸入");return}e("loginWithEmail",u,n.value,s.value,r.value)},resetPassword:()=>{if(console.log("Reset password function triggered"),console.log("Email for reset:",n.value),!o(n.value)){alert("請先輸入有效的電子郵件地址");return}const u=qr();console.log("Firebase auth object:",u),sT(u,n.value).then(()=>{alert("密碼重置郵件已發送，請檢查您的電子郵件信箱"),console.log("Password reset email sent successfully")}).catch(h=>{switch(console.error("密碼重置郵件發送失敗：",h.code,h.message),h.code){case"auth/invalid-email":alert("無效的電子郵件地址");break;case"auth/user-not-found":alert("找不到該電子郵件對應的帳號");break;default:alert("密碼重置郵件發送失敗，請稍後再試")}})}}}}),jL={class:"ui middle aligned center aligned grid",id:"login-main",style:{height:"100vh"}},VL={class:"column",style:{"max-width":"420px"}},WL={class:"ui raised segment"},qL={key:0,class:"ui error message"},KL={class:"ui form segment",style:{"border-radius":"10px",padding:"15px","background-color":"#f0f0f0"}},GL={class:"field"},zL={class:"ui left icon input"},YL={class:"field"},JL={class:"ui left icon input"},QL={class:"ui large form"},XL={class:"ui segment",style:{border:"none","padding-top":"10px"}},ZL={class:"field"};function eM(t,e,n,s,r,i){return Ne(),He("div",{class:"ui dimmer modals visible active clickable",id:"login-bg",style:{background:"rgba(0, 0, 0, 0.6)"},onClick:e[9]||(e[9]=o=>t.toggleLogin())},[P("div",jL,[P("div",VL,[P("div",WL,[t.isInApp?(Ne(),He("div",qL,"本系統不支援facebook, line等app內部瀏覽，請用一般瀏覽器開啟，方可登入，謝謝")):Ki("",!0),e[14]||(e[14]=P("h2",{class:"ui black header",style:{"font-size":"1.5rem","font-weight":"600"}},"登入您的帳號",-1)),P("form",KL,[P("div",GL,[P("div",zL,[e[10]||(e[10]=P("i",{class:"envelope icon"},null,-1)),Ai(P("input",{type:"text",name:"email",placeholder:"E-mail address",style:{"font-size":"14px"},"onUpdate:modelValue":e[0]||(e[0]=o=>t.users_email=o),onClick:e[1]||(e[1]=Zs(()=>{},["stop"]))},null,512),[[sl,t.users_email]])])]),P("div",YL,[P("div",JL,[e[11]||(e[11]=P("i",{class:"lock icon"},null,-1)),Ai(P("input",{type:"password",name:"user_password",placeholder:"Password",style:{"font-size":"14px"},"onUpdate:modelValue":e[2]||(e[2]=o=>t.user_password=o),autocomplete:"",onClick:e[3]||(e[3]=Zs(()=>{},["stop"]))},null,512),[[sl,t.user_password]])])]),P("div",{class:Kn(["ui fluid large button",{disabled:t.isInApp}]),onClick:e[4]||(e[4]=Zs((...o)=>t.loginWithEmail&&t.loginWithEmail(...o),["prevent"])),style:{"background-color":"#e47e10",color:"white","font-weight":"bold"}},"登入",2),P("a",{class:"small forgot-password",onClick:e[5]||(e[5]=(...o)=>t.resetPassword&&t.resetPassword(...o))},"忘記密碼")]),P("form",QL,[P("div",XL,[P("div",ZL,[P("div",{class:"ui checkbox",onClick:e[7]||(e[7]=Zs(()=>{},["stop"]))},[Ai(P("input",{type:"checkbox","onUpdate:modelValue":e[6]||(e[6]=o=>t.keeploggedin=o)},null,512),[[ab,t.keeploggedin]]),e[12]||(e[12]=P("label",null,"保持登入狀態",-1))])])]),P("p",null,[e[13]||(e[13]=Ee("新用戶？按此")),P("button",{class:Kn(["ui large basic button",{disabled:t.isInApp}]),id:"register-btn",onClick:e[8]||(e[8]=Zs((...o)=>t.registerWithEmail&&t.registerWithEmail(...o),["stop","prevent"]))},"註冊",2)])])])])])])}const gu=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},tM=gu(HL,[["render",eM],["__scopeId","data-v-c36a608a"]]),nM=new hD(window.navigator.userAgent),sM=nM.isInApp,or=qr(tu),rM=Xr({name:"App",components:{Login:tM},data(){return{isInApp:sM,showLogin:!1,sidebarVisible:!1,uid:"",users:{},user:{},photoURL:"",email:"",emailVerified:!1,zoom:13,center:[23.533,121.0654]}},mounted(){const t=this;or.onAuthStateChanged(e=>{e?(t.uid=e.uid,t.email=e.email||"",t.photoURL=e.photoURL||"https://we.alearn.org.tw/logo-new.png",t.emailVerified=e.emailVerified,t.updateUserData(e)):(t.uid="",t.email="",t.photoURL="",t.emailVerified=!1)})},methods:{toggleLogin(){this.showLogin=!this.showLogin},toggleSidebar(){this.sidebarVisible=!this.sidebarVisible},logout(){const t=this;or.signOut().then(function(){t.user=null,t.users={},t.uid="",t.photoURL="",t.$nextTick().then(()=>{t.$router.push("/")})})},async registerWithEmail(t,e,n){var s,r;if(!e||typeof e!="string"){alert("接收的密碼無效，請確認輸入");return}try{const i=qr(),a=(await rT(i,t,e)).user;if(a&&a.email){this.email=a.email,this.uid=a.uid,this.photoURL="https://we.alearn.org.tw/logo-new.png";const l=[{displayName:((s=this.email)==null?void 0:s.split("@")[0])||"Unknown",email:this.email,photoURL:this.photoURL}];this.user={email:this.email,photoURL:this.photoURL,providerData:l};const c=ai(di,"users/"+this.uid);(await GI(c)).exists()||await qc(c,{email:this.email,name:((r=this.email)==null?void 0:r.split("@")[0])||"Unknown",connect_me:this.email,photoURL:this.photoURL,login_method:"email"}),await ed(a),alert("驗證郵件已發送，請檢查您的郵箱(含垃圾信箱)以完成驗證。"),this.logout()}else console.error("User or user email is undefined after registration"),alert("註冊過程中發生錯誤，請稍後再試。")}catch(i){i.code==="auth/email-already-in-use"?alert("此電子郵件已被使用，請使用其他電子郵件或嘗試登入。"):(console.error("註冊失敗：",i),alert("註冊失敗："+i.message))}},async loginWithEmail(t,e,n,s){try{s?await td(or,M_):await td(or,Il);const i=(await iT(or,e,n)).user;if(!i.emailVerified){alert("您的電子郵件尚未驗證，請檢查您的郵箱並完成驗證。"),this.resendVerificationEmail(),this.logout();return}this.emailVerified=!0,console.log("登入成功：",i),this.updateUserData(i),t&&i.emailVerified&&this.$nextTick().then(()=>{this.$router.push("/profile")})}catch(r){console.error("登入失敗：",r);let i="登入失敗：";r.message.includes("auth/wrong-password")?i="密碼錯誤，請檢查後再試。":r.message.includes("auth/user-not-found")?i="帳號不存在，請確認您的電子郵件地址。":r.message.includes("auth/invalid-email")?i="無效的電子郵件地址，請重新輸入。":r.message.includes("auth/too-many-requests")?i="嘗試次數過多，請稍後再試。":i+=r.message,alert(i)}},resendVerificationEmail(){const t=qr().currentUser;t&&ed(t).then(()=>{console.log("驗證郵件已重新發送。")}).catch(e=>{console.error("重新發送驗證郵件失敗：",e)})},updateUserData(t){var n;if(!t){console.error("User is undefined in updateUserData");return}this.email=t.email||null,this.uid=t.uid,this.photoURL=t.photoURL?decodeURI(t.photoURL):"https://we.alearn.org.tw/logo-new.png",this.emailVerified=t.emailVerified;const e=t.providerData||[{displayName:((n=this.email)==null?void 0:n.split("@")[0])||"Unknown",email:this.email,photoURL:this.photoURL}];this.updateUserInfo(e)},locate:function(t,e){this.zoom=13,this.center=t.latlngColumn.split(","),console.log("Updated location:",this.center),this.$nextTick(()=>{console.log("Center updated and propagated to children")}),e&&this.$router.push({path:"/maps"})},updateUserInfo(t){this.users&&this.uid&&this.users[this.uid]?(this.user={...this.users[this.uid],providerData:t},this.user.latlngColumn&&this.locate(this.user,!1)):this.fetchUserData(t)},async fetchUserData(t){try{bl(CR,e=>{const n=e.val();this.users=n,this.uid&&this.users&&this.users[this.uid]?this.user={...this.users[this.uid],providerData:t}:this.user={providerData:t}},e=>{this.user={providerData:t},console.error("Error fetching users:",e)})}catch(e){console.error("Error fetching user data:",e)}}}}),iM={class:"ui fixed top menu"},oM={class:"right menu"},aM={key:1,class:"ui simple dropdown item"},lM=["src"],cM={key:1,class:"user icon"},uM={class:"menu"},hM={class:"ui container"};function dM(t,e,n,s,r,i){const o=Ei("RouterLink"),a=Ei("router-link"),l=Ei("RouterView"),c=Ei("Login");return Ne(),He(dt,null,[P("header",null,[P("nav",iM,[P("button",{class:"no-border ui item",onClick:e[0]||(e[0]=(...u)=>t.toggleSidebar&&t.toggleSidebar(...u))},e[6]||(e[6]=[P("i",{class:"icon bars"},null,-1)])),ce(o,{class:"item fat-only",to:"/"},{default:et(()=>e[7]||(e[7]=[P("i",{class:"home icon"},null,-1)])),_:1}),ce(o,{class:"item",to:"/about"},{default:et(()=>e[8]||(e[8]=[P("i",{class:"info icon"},null,-1),Ee("關於"),P("span",{class:"fat-only"},"我們",-1)])),_:1}),ce(o,{class:"item",to:"/faq"},{default:et(()=>e[9]||(e[9]=[P("i",{class:"help icon"},null,-1),P("span",{class:"fat-only"},"常見",-1),Ee("問題")])),_:1}),ce(o,{class:"item",to:"/create_faq"},{default:et(()=>e[10]||(e[10]=[P("i",{class:"plus icon"},null,-1),Ee("新增"),P("span",{class:"fat-only"},"問答",-1)])),_:1}),ce(o,{class:"item fat-only",to:"/feedback"},{default:et(()=>e[11]||(e[11]=[P("i",{class:"magic icon"},null,-1),Ee("回饋")])),_:1}),P("div",oM,[t.uid?(Ne(),He("div",aM,[t.photoURL?(Ne(),He("img",{key:0,class:"ui avatar image",src:t.photoURL,alt:"User Avatar",onError:e[2]||(e[2]=(...u)=>t.useDefaultAvatar&&t.useDefaultAvatar(...u)),onLoad:e[3]||(e[3]=(...u)=>t.onImageLoad&&t.onImageLoad(...u))},null,40,lM)):(Ne(),He("i",cM)),P("div",uM,[ce(a,{class:"item",to:"/profile"},{default:et(()=>e[13]||(e[13]=[P("i",{class:"flag icon"},null,-1),Ee("我的旗幟")])),_:1}),t.uid?(Ne(),He("button",{key:0,class:"no-border ui item",onClick:e[4]||(e[4]=(...u)=>t.logout&&t.logout(...u))},e[14]||(e[14]=[P("i",{class:"sign-out icon"},null,-1),Ee("登出")]))):Ki("",!0)])])):(Ne(),He("button",{key:0,class:"no-border ui item",onClick:e[1]||(e[1]=(...u)=>t.toggleLogin&&t.toggleLogin(...u))},e[12]||(e[12]=[P("i",{class:"user icon"},null,-1),Ee("登入"),P("span",{class:"fat-only"},"/ 註冊",-1)])))])])]),e[21]||(e[21]=P("div",{class:"small-spacer"},null,-1)),P("div",{class:Kn(["ui sidebar vertical menu",{hidden:!t.sidebarVisible}]),id:"side-menu"},[ce(o,{class:"item",to:"/",exact:"",name:"home"},{default:et(()=>e[15]||(e[15]=[P("i",{class:"home icon"},null,-1),Ee("首頁")])),_:1}),ce(o,{class:"item",to:"/about",name:"about"},{default:et(()=>e[16]||(e[16]=[P("i",{class:"info icon"},null,-1),Ee("關於我們")])),_:1}),ce(o,{class:"item",to:"/faq",name:"faq"},{default:et(()=>e[17]||(e[17]=[P("i",{class:"help icon"},null,-1),Ee("常見問題")])),_:1}),ce(o,{class:"item",to:"/create_faq",name:"create-faq"},{default:et(()=>e[18]||(e[18]=[P("i",{class:"plus icon"},null,-1),Ee("新增問答")])),_:1}),ce(o,{class:"item",to:"/changelog",name:"changelog"},{default:et(()=>e[19]||(e[19]=[P("i",{class:"history icon"},null,-1),Ee("變更紀錄")])),_:1}),ce(o,{class:"item fat-only",to:"/feedback",name:"feedback"},{default:et(()=>e[20]||(e[20]=[P("i",{class:"magic icon"},null,-1),Ee("回饋")])),_:1})],2),P("div",{class:Kn(["ui sidebar bg",{hidden:!t.sidebarVisible}]),onClick:e[5]||(e[5]=(...u)=>t.toggleSidebar&&t.toggleSidebar(...u))},null,2),P("div",hM,[ce(l,{onToggleLogin:t.toggleLogin,onLocate:t.locate,uid:t.uid,isInApp:t.isInApp,user:t.user,users:t.users,photoURL:t.photoURL,email:t.email,emailVerified:t.emailVerified},null,8,["onToggleLogin","onLocate","uid","isInApp","user","users","photoURL","email","emailVerified"])]),t.showLogin?(Ne(),vp(c,{key:0,showLogin:t.showLogin,isInApp:!1,onToggleLogin:t.toggleLogin,onLogout:t.logout,onRegisterWithEmail:t.registerWithEmail,onLoginWithEmail:t.loginWithEmail,onResendVerificationEmail:t.resendVerificationEmail},null,8,["showLogin","onToggleLogin","onLogout","onRegisterWithEmail","onLoginWithEmail","onResendVerificationEmail"])):Ki("",!0)],64)}const fM=gu(rM,[["render",dM],["__scopeId","data-v-c44f9c7d"]]),pM="modulepreload",gM=function(t){return"/"+t},ef={},Rt=function(e,n,s){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.allSettled(n.map(l=>{if(l=gM(l),l in ef)return;ef[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const h=document.createElement("link");if(h.rel=c?"stylesheet":pM,c||(h.as="script"),h.crossOrigin="",h.href=l,a&&h.setAttribute("nonce",a),document.head.appendChild(h),c)return new Promise((d,p)=>{h.addEventListener("load",d),h.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})};/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const cs=typeof document<"u";function Mm(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function _M(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Mm(t.default)}const oe=Object.assign;function Ha(t,e){const n={};for(const s in e){const r=e[s];n[s]=Et(r)?r.map(t):t(r)}return n}const Ir=()=>{},Et=Array.isArray,Fm=/#/g,mM=/&/g,yM=/\//g,vM=/=/g,bM=/\?/g,$m=/\+/g,EM=/%5B/g,wM=/%5D/g,Um=/%5E/g,CM=/%60/g,Bm=/%7B/g,IM=/%7C/g,Hm=/%7D/g,SM=/%20/g;function _u(t){return encodeURI(""+t).replace(IM,"|").replace(EM,"[").replace(wM,"]")}function TM(t){return _u(t).replace(Bm,"{").replace(Hm,"}").replace(Um,"^")}function $l(t){return _u(t).replace($m,"%2B").replace(SM,"+").replace(Fm,"%23").replace(mM,"%26").replace(CM,"`").replace(Bm,"{").replace(Hm,"}").replace(Um,"^")}function RM(t){return $l(t).replace(vM,"%3D")}function AM(t){return _u(t).replace(Fm,"%23").replace(bM,"%3F")}function PM(t){return t==null?"":AM(t).replace(yM,"%2F")}function Gr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const OM=/\/$/,NM=t=>t.replace(OM,"");function ja(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=LM(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:Gr(o)}}function kM(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function tf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function xM(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Os(e.matched[s],n.matched[r])&&jm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Os(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function jm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!DM(t[n],e[n]))return!1;return!0}function DM(t,e){return Et(t)?nf(t,e):Et(e)?nf(e,t):t===e}function nf(t,e){return Et(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function LM(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o).join("/")}const un={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var zr;(function(t){t.pop="pop",t.push="push"})(zr||(zr={}));var Sr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Sr||(Sr={}));function MM(t){if(!t)if(cs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),NM(t)}const FM=/^[^#]+#/;function $M(t,e){return t.replace(FM,"#")+e}function UM(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const la=()=>({left:window.scrollX,top:window.scrollY});function BM(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=UM(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function sf(t,e){return(history.state?history.state.position-e:-1)+t}const Ul=new Map;function HM(t,e){Ul.set(t,e)}function jM(t){const e=Ul.get(t);return Ul.delete(t),e}let VM=()=>location.protocol+"//"+location.host;function Vm(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),tf(l,"")}return tf(n,t)+s+r}function WM(t,e,n,s){let r=[],i=[],o=null;const a=({state:d})=>{const p=Vm(t,location),_=n.value,m=e.value;let b=0;if(d){if(n.value=p,e.value=d,o&&o===_){o=null;return}b=m?d.position-m.position:0}else s(p);r.forEach(T=>{T(n.value,_,{delta:b,type:zr.pop,direction:b?b>0?Sr.forward:Sr.back:Sr.unknown})})};function l(){o=n.value}function c(d){r.push(d);const p=()=>{const _=r.indexOf(d);_>-1&&r.splice(_,1)};return i.push(p),p}function u(){const{history:d}=window;d.state&&d.replaceState(oe({},d.state,{scroll:la()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function rf(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?la():null}}function qM(t){const{history:e,location:n}=window,s={value:Vm(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:VM()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),r.value=c}catch(p){console.error(p),n[u?"replace":"assign"](d)}}function o(l,c){const u=oe({},e.state,rf(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});i(l,u,!0),s.value=l}function a(l,c){const u=oe({},r.value,e.state,{forward:l,scroll:la()});i(u.current,u,!0);const h=oe({},rf(s.value,l,null),{position:u.position+1},c);i(l,h,!1),s.value=l}return{location:s,state:r,push:a,replace:o}}function KM(t){t=MM(t);const e=qM(t),n=WM(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=oe({location:"",base:t,go:s,createHref:$M.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function GM(t){return typeof t=="string"||t&&typeof t=="object"}function Wm(t){return typeof t=="string"||typeof t=="symbol"}const qm=Symbol("");var of;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(of||(of={}));function Ns(t,e){return oe(new Error,{type:t,[qm]:!0},e)}function Ut(t,e){return t instanceof Error&&qm in t&&(e==null||!!(t.type&e))}const af="[^/]+?",zM={sensitive:!1,strict:!1,start:!0,end:!0},YM=/[.+*?^${}()[\]/\\]/g;function JM(t,e){const n=oe({},zM,e),s=[];let r=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let h=0;h<c.length;h++){const d=c[h];let p=40+(n.sensitive?.25:0);if(d.type===0)h||(r+="/"),r+=d.value.replace(YM,"\\$&"),p+=40;else if(d.type===1){const{value:_,repeatable:m,optional:b,regexp:T}=d;i.push({name:_,repeatable:m,optional:b});const R=T||af;if(R!==af){p+=10;try{new RegExp(`(${R})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${_}" (${R}): `+x.message)}}let O=m?`((?:${R})(?:/(?:${R}))*)`:`(${R})`;h||(O=b&&c.length<2?`(?:/${O})`:"/"+O),b&&(O+="?"),r+=O,p+=20,b&&(p+=-8),m&&(p+=-20),R===".*"&&(p+=-50)}u.push(p)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",_=i[d-1];h[_.name]=p&&_.repeatable?p.split("/"):p}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:_,repeatable:m,optional:b}=p,T=_ in c?c[_]:"";if(Et(T)&&!m)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const R=Et(T)?T.join("/"):T;if(!R)if(b)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${_}"`);u+=R}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:l}}function QM(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Km(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=QM(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(lf(s))return 1;if(lf(r))return-1}return r.length-s.length}function lf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const XM={type:0,value:""},ZM=/[a-zA-Z0-9_]/;function eF(t){if(!t)return[[]];if(t==="/")return[[XM]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,l,c="",u="";function h(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:l==="("?n=2:ZM.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),r}function tF(t,e,n){const s=JM(eF(t.path),n),r=oe(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function nF(t,e){const n=[],s=new Map;e=df({strict:!1,end:!0,sensitive:!1},e);function r(h){return s.get(h)}function i(h,d,p){const _=!p,m=uf(h);m.aliasOf=p&&p.record;const b=df(e,h),T=[m];if("alias"in h){const x=typeof h.alias=="string"?[h.alias]:h.alias;for(const B of x)T.push(uf(oe({},m,{components:p?p.record.components:m.components,path:B,aliasOf:p?p.record:m})))}let R,O;for(const x of T){const{path:B}=x;if(d&&B[0]!=="/"){const ee=d.record.path,Q=ee[ee.length-1]==="/"?"":"/";x.path=d.record.path+(B&&Q+B)}if(R=tF(x,d,b),p?p.alias.push(R):(O=O||R,O!==R&&O.alias.push(R),_&&h.name&&!hf(R)&&o(h.name)),Gm(R)&&l(R),m.children){const ee=m.children;for(let Q=0;Q<ee.length;Q++)i(ee[Q],R,p&&p.children[Q])}p=p||R}return O?()=>{o(O)}:Ir}function o(h){if(Wm(h)){const d=s.get(h);d&&(s.delete(h),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(h);d>-1&&(n.splice(d,1),h.record.name&&s.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function a(){return n}function l(h){const d=iF(h,n);n.splice(d,0,h),h.record.name&&!hf(h)&&s.set(h.record.name,h)}function c(h,d){let p,_={},m,b;if("name"in h&&h.name){if(p=s.get(h.name),!p)throw Ns(1,{location:h});b=p.record.name,_=oe(cf(d.params,p.keys.filter(O=>!O.optional).concat(p.parent?p.parent.keys.filter(O=>O.optional):[]).map(O=>O.name)),h.params&&cf(h.params,p.keys.map(O=>O.name))),m=p.stringify(_)}else if(h.path!=null)m=h.path,p=n.find(O=>O.re.test(m)),p&&(_=p.parse(m),b=p.record.name);else{if(p=d.name?s.get(d.name):n.find(O=>O.re.test(d.path)),!p)throw Ns(1,{location:h,currentLocation:d});b=p.record.name,_=oe({},d.params,h.params),m=p.stringify(_)}const T=[];let R=p;for(;R;)T.unshift(R.record),R=R.parent;return{name:b,path:m,params:_,matched:T,meta:rF(T)}}t.forEach(h=>i(h));function u(){n.length=0,s.clear()}return{addRoute:i,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function cf(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function uf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:sF(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function sF(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function hf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function rF(t){return t.reduce((e,n)=>oe(e,n.meta),{})}function df(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function iF(t,e){let n=0,s=e.length;for(;n!==s;){const i=n+s>>1;Km(t,e[i])<0?s=i:n=i+1}const r=oF(t);return r&&(s=e.lastIndexOf(r,s-1)),s}function oF(t){let e=t;for(;e=e.parent;)if(Gm(e)&&Km(t,e)===0)return e}function Gm({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function aF(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace($m," "),o=i.indexOf("="),a=Gr(o<0?i:i.slice(0,o)),l=o<0?null:Gr(i.slice(o+1));if(a in e){let c=e[a];Et(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function ff(t){let e="";for(let n in t){const s=t[n];if(n=RM(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Et(s)?s.map(i=>i&&$l(i)):[s&&$l(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function lF(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Et(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const cF=Symbol(""),pf=Symbol(""),ca=Symbol(""),mu=Symbol(""),Bl=Symbol("");function ar(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function fn(t,e,n,s,r,i=o=>o()){const o=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(Ns(4,{from:n,to:e})):d instanceof Error?l(d):GM(d)?l(Ns(2,{from:e,to:d})):(o&&s.enterCallbacks[r]===o&&typeof d=="function"&&o.push(d),a())},u=i(()=>t.call(s&&s.instances[r],e,n,c));let h=Promise.resolve(u);t.length<3&&(h=h.then(c)),h.catch(d=>l(d))})}function Va(t,e,n,s,r=i=>i()){const i=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Mm(l)){const u=(l.__vccOpts||l)[e];u&&i.push(fn(u,n,s,o,a,r))}else{let c=l();i.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const h=_M(u)?u.default:u;o.mods[a]=u,o.components[a]=h;const p=(h.__vccOpts||h)[e];return p&&fn(p,n,s,o,a,r)()}))}}return i}function gf(t){const e=yt(ca),n=yt(mu),s=ft(()=>{const l=gs(t.to);return e.resolve(l)}),r=ft(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Os.bind(null,u));if(d>-1)return d;const p=_f(l[c-2]);return c>1&&_f(u)===p&&h[h.length-1].path!==p?h.findIndex(Os.bind(null,l[c-2])):d}),i=ft(()=>r.value>-1&&fF(n.params,s.value.params)),o=ft(()=>r.value>-1&&r.value===n.matched.length-1&&jm(n.params,s.value.params));function a(l={}){return dF(l)?e[gs(t.replace)?"replace":"push"](gs(t.to)).catch(Ir):Promise.resolve()}return{route:s,href:ft(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const uF=Xr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:gf,setup(t,{slots:e}){const n=Oo(gf(t)),{options:s}=yt(ca),r=ft(()=>({[mf(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[mf(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Cp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),hF=uF;function dF(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function fF(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Et(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function _f(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const mf=(t,e,n)=>t??e??n,pF=Xr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=yt(Bl),r=ft(()=>t.route||s.value),i=yt(pf,0),o=ft(()=>{let c=gs(i);const{matched:u}=r.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=ft(()=>r.value.matched[o.value]);Pi(pf,ft(()=>o.value+1)),Pi(cF,a),Pi(Bl,r);const l=ht();return _r(()=>[l.value,a.value,t.name],([c,u,h],[d,p,_])=>{u&&(u.instances[h]=c,p&&p!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!Os(u,p)||!d)&&(u.enterCallbacks[h]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=r.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return yf(n.default,{Component:d,route:c});const p=h.props[u],_=p?p===!0?c.params:typeof p=="function"?p(c):p:null,b=Cp(d,oe({},_,e,{onVnodeUnmounted:T=>{T.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return yf(n.default,{Component:b,route:c})||b}}});function yf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const gF=pF;function _F(t){const e=nF(t.routes,t),n=t.parseQuery||aF,s=t.stringifyQuery||ff,r=t.history,i=ar(),o=ar(),a=ar(),l=Ty(un);let c=un;cs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ha.bind(null,w=>""+w),h=Ha.bind(null,PM),d=Ha.bind(null,Gr);function p(w,F){let L,$;return Wm(w)?(L=e.getRecordMatcher(w),$=F):$=w,e.addRoute($,L)}function _(w){const F=e.getRecordMatcher(w);F&&e.removeRoute(F)}function m(){return e.getRoutes().map(w=>w.record)}function b(w){return!!e.getRecordMatcher(w)}function T(w,F){if(F=oe({},F||l.value),typeof w=="string"){const g=ja(n,w,F.path),y=e.resolve({path:g.path},F),C=r.createHref(g.fullPath);return oe(g,y,{params:d(y.params),hash:Gr(g.hash),redirectedFrom:void 0,href:C})}let L;if(w.path!=null)L=oe({},w,{path:ja(n,w.path,F.path).path});else{const g=oe({},w.params);for(const y in g)g[y]==null&&delete g[y];L=oe({},w,{params:h(g)}),F.params=h(F.params)}const $=e.resolve(L,F),re=w.hash||"";$.params=u(d($.params));const ye=kM(s,oe({},w,{hash:TM(re),path:$.path})),f=r.createHref(ye);return oe({fullPath:ye,hash:re,query:s===ff?lF(w.query):w.query||{}},$,{redirectedFrom:void 0,href:f})}function R(w){return typeof w=="string"?ja(n,w,l.value.path):oe({},w)}function O(w,F){if(c!==w)return Ns(8,{from:F,to:w})}function x(w){return Q(w)}function B(w){return x(oe(R(w),{replace:!0}))}function ee(w){const F=w.matched[w.matched.length-1];if(F&&F.redirect){const{redirect:L}=F;let $=typeof L=="function"?L(w):L;return typeof $=="string"&&($=$.includes("?")||$.includes("#")?$=R($):{path:$},$.params={}),oe({query:w.query,hash:w.hash,params:$.path!=null?{}:w.params},$)}}function Q(w,F){const L=c=T(w),$=l.value,re=w.state,ye=w.force,f=w.replace===!0,g=ee(L);if(g)return Q(oe(R(g),{state:typeof g=="object"?oe({},re,g.state):re,force:ye,replace:f}),F||L);const y=L;y.redirectedFrom=F;let C;return!ye&&xM(s,$,L)&&(C=Ns(16,{to:y,from:$}),It($,$,!0,!1)),(C?Promise.resolve(C):ot(y,$)).catch(E=>Ut(E)?Ut(E,2)?E:an(E):te(E,y,$)).then(E=>{if(E){if(Ut(E,2))return Q(oe({replace:f},R(E.to),{state:typeof E.to=="object"?oe({},re,E.to.state):re,force:ye}),F||y)}else E=Dn(y,$,!0,f,re);return on(y,$,E),E})}function Oe(w,F){const L=O(w,F);return L?Promise.reject(L):Promise.resolve()}function Ue(w){const F=is.values().next().value;return F&&typeof F.runWithContext=="function"?F.runWithContext(w):w()}function ot(w,F){let L;const[$,re,ye]=mF(w,F);L=Va($.reverse(),"beforeRouteLeave",w,F);for(const g of $)g.leaveGuards.forEach(y=>{L.push(fn(y,w,F))});const f=Oe.bind(null,w,F);return L.push(f),at(L).then(()=>{L=[];for(const g of i.list())L.push(fn(g,w,F));return L.push(f),at(L)}).then(()=>{L=Va(re,"beforeRouteUpdate",w,F);for(const g of re)g.updateGuards.forEach(y=>{L.push(fn(y,w,F))});return L.push(f),at(L)}).then(()=>{L=[];for(const g of ye)if(g.beforeEnter)if(Et(g.beforeEnter))for(const y of g.beforeEnter)L.push(fn(y,w,F));else L.push(fn(g.beforeEnter,w,F));return L.push(f),at(L)}).then(()=>(w.matched.forEach(g=>g.enterCallbacks={}),L=Va(ye,"beforeRouteEnter",w,F,Ue),L.push(f),at(L))).then(()=>{L=[];for(const g of o.list())L.push(fn(g,w,F));return L.push(f),at(L)}).catch(g=>Ut(g,8)?g:Promise.reject(g))}function on(w,F,L){a.list().forEach($=>Ue(()=>$(w,F,L)))}function Dn(w,F,L,$,re){const ye=O(w,F);if(ye)return ye;const f=F===un,g=cs?history.state:{};L&&($||f?r.replace(w.fullPath,oe({scroll:f&&g&&g.scroll},re)):r.push(w.fullPath,re)),l.value=w,It(w,F,L,f),an()}let Ct;function zs(){Ct||(Ct=r.listen((w,F,L)=>{if(!mi.listening)return;const $=T(w),re=ee($);if(re){Q(oe(re,{replace:!0}),$).catch(Ir);return}c=$;const ye=l.value;cs&&HM(sf(ye.fullPath,L.delta),la()),ot($,ye).catch(f=>Ut(f,12)?f:Ut(f,2)?(Q(f.to,$).then(g=>{Ut(g,20)&&!L.delta&&L.type===zr.pop&&r.go(-1,!1)}).catch(Ir),Promise.reject()):(L.delta&&r.go(-L.delta,!1),te(f,$,ye))).then(f=>{f=f||Dn($,ye,!1),f&&(L.delta&&!Ut(f,8)?r.go(-L.delta,!1):L.type===zr.pop&&Ut(f,20)&&r.go(-1,!1)),on($,ye,f)}).catch(Ir)}))}let ss=ar(),Se=ar(),ae;function te(w,F,L){an(w);const $=Se.list();return $.length?$.forEach(re=>re(w,F,L)):console.error(w),Promise.reject(w)}function Ft(){return ae&&l.value!==un?Promise.resolve():new Promise((w,F)=>{ss.add([w,F])})}function an(w){return ae||(ae=!w,zs(),ss.list().forEach(([F,L])=>w?L(w):F()),ss.reset()),w}function It(w,F,L,$){const{scrollBehavior:re}=t;if(!cs||!re)return Promise.resolve();const ye=!L&&jM(sf(w.fullPath,0))||($||!L)&&history.state&&history.state.scroll||null;return ec().then(()=>re(w,F,ye)).then(f=>f&&BM(f)).catch(f=>te(f,w,F))}const qe=w=>r.go(w);let rs;const is=new Set,mi={currentRoute:l,listening:!0,addRoute:p,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:b,getRoutes:m,resolve:T,options:t,push:x,replace:B,go:qe,back:()=>qe(-1),forward:()=>qe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Se.add,isReady:Ft,install(w){const F=this;w.component("RouterLink",hF),w.component("RouterView",gF),w.config.globalProperties.$router=F,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>gs(l)}),cs&&!rs&&l.value===un&&(rs=!0,x(r.location).catch(re=>{}));const L={};for(const re in un)Object.defineProperty(L,re,{get:()=>l.value[re],enumerable:!0});w.provide(ca,F),w.provide(mu,Hf(L)),w.provide(Bl,l);const $=w.unmount;is.add(w),w.unmount=function(){is.delete(w),is.size<1&&(c=un,Ct&&Ct(),Ct=null,l.value=un,rs=!1,ae=!1),$()}}};function at(w){return w.reduce((F,L)=>F.then(()=>Ue(L)),Promise.resolve())}return mi}function mF(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>Os(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Os(c,l))||r.push(l))}return[n,s,r]}function UF(){return yt(ca)}function BF(t){return yt(mu)}const yF=Xr({name:"HomeView",props:{isLogin:{type:Boolean,default:!1}},setup(){const t=ht(!1),e=ht([]),n=ht([]),s=new Array,r=ht(s),i=ht(""),o=ht("");return sc(()=>{bl(ER,a=>{const l=a.val();e.value=Object.values(l)},a=>{console.error("讀取專案資料時出錯",a)}),bl(wR,a=>{const l=a.val();n.value=Object.values(l)},a=>{console.error("讀取理監事資料時出錯",a)})}),{isLoading:t,projects:e,supervisors:n,visibleEmails:r,message:i,result:o}},methods:{toggleLogin(){this.$emit("toggleLogin")},toggleEmail(t){this.visibleEmails.includes(t)?this.visibleEmails.splice(this.visibleEmails.indexOf(t),1):this.visibleEmails.push(t)},sendMessage(){this.isLoading=!0,console.log(this.message),this.message.endsWith("？")||(this.message+="？"),be.get("https://members-backend.alearn13994229.workers.dev/ai/"+this.message,{headers:{"Content-Type":"application/json"}}).then(t=>{console.log(t),this.result=t.data,this.isLoading=!1})},parseResult(t){return t==="。"?"請說得詳細一點":t},sendFeedback(t){console.log(t),t==="good"?(console.log("good"),window.alert("感謝您的回饋！")):t==="bad"&&(console.log("bad"),window.confirm("請告訴我們哪裡做得不好，我們會努力改進！")?this.$router.push("/feedback"):window.alert("感謝您的回饋！"))}}}),vF={class:"ui container"},bF={class:"ui input"},EF={class:"result"},wF={key:0},CF={key:1},IF={class:"ui four doubling stackable cards"},SF={class:"card"},TF={class:"content"},RF={class:"description"},AF={key:0},PF=["href"],OF={key:1};function NF(t,e,n,s,r,i){return Ne(),He("main",vF,[e[13]||(e[13]=P("h1",{class:"ui header"},"自主學習促進會",-1)),e[14]||(e[14]=P("h2",{class:"left aligned ui header"},[Ee("自學AI"),P("div",{class:"left aligned ui sub header"},"以自學問答集為基礎，提供更即時的回答")],-1)),P("div",bF,[Ai(P("input",{autofocus:"",type:"text",placeholder:"問AI關於自學的任何問題...","onUpdate:modelValue":e[0]||(e[0]=o=>t.message=o),onKeyup:e[1]||(e[1]=hb((...o)=>t.sendMessage&&t.sendMessage(...o),["enter"]))},null,544),[[sl,t.message]]),P("button",{class:"ui primary button",onClick:e[2]||(e[2]=(...o)=>t.sendMessage&&t.sendMessage(...o))},"送出")]),P("div",EF,[t.result===""&&t.message!==""&&t.isLoading?(Ne(),He("p",wF,"載入中，請稍候...")):t.result!==""?(Ne(),He("p",CF,[Ee(Wa(t.parseResult(t.result)),1),e[7]||(e[7]=P("br",null,null,-1)),e[8]||(e[8]=P("br",null,null,-1)),e[9]||(e[9]=Ee("您覺得這個回答怎麼樣呢？")),P("button",{class:"ui basic green button",onClick:e[3]||(e[3]=o=>t.sendFeedback("good"))},e[5]||(e[5]=[P("i",{class:"thumbs up icon"},null,-1),Ee("很棒")])),P("button",{class:"ui basic red button",onClick:e[4]||(e[4]=o=>t.sendFeedback("bad"))},e[6]||(e[6]=[P("i",{class:"thumbs down icon"},null,-1),Ee("不佳")]))])):Ki("",!0)]),e[15]||(e[15]=P("div",{class:"ui divider"},null,-1)),P("div",IF,[e[12]||(e[12]=Ov('<div class="card" data-v-6c848621><div class="content" data-v-6c848621><div class="header" data-v-6c848621>本會歷史</div><div class="description" style="max-height:300px;overflow-y:auto;" data-v-6c848621><p data-v-6c848621>自主學習促進會的歷史可追溯至1994年種籽親子實驗小學的創立，這是台灣民主學校的先驅。</p><p data-v-6c848621>1998年，台北市自主學習實驗計畫開始，為期六年，證明了自主學習理念在中學階段的可行性。</p><p data-v-6c848621>2000年，面臨停辦危機時，學生發起了台灣首次中學生自發的學運，成功爭取續辦至第三屆學生畢業。</p><p data-v-6c848621>2001年3月，為延續自主學習的經驗與知識，本會正式成立。</p><p data-v-6c848621>2006-2008年間，本會通過&quot;自學中心&quot;提供課程和營隊，幫助體制內學生體驗自主學習。</p><p data-v-6c848621>2008-2010年，&quot;自主培力學園&quot;為拒學、懼學和想自學的青少年提供全日制團體學習。</p><p data-v-6c848621>2009年起，獨立教育工作者社群成立，致力於開設學習團體、培訓教師、支持家長，並開發自學資源。</p><p data-v-6c848621>本會持續致力於推動自主學習理念，為台灣教育改革提供新方向和活力。</p></div></div></div>',1)),P("div",SF,[P("div",TF,[e[11]||(e[11]=P("div",{class:"header"},"網址連結",-1)),P("div",RF,[e[10]||(e[10]=P("ul",null,[P("li",null,[P("a",{href:"https://www.alearn.org",target:"_blank",rel:"noopener noreferrer"},"官方網站")]),P("li",null,[P("a",{href:"https://www.facebook.com/alearnTW",target:"_blank",rel:"noopener noreferrer"},"臉書「自主學習促進會」專頁")]),P("li",null,[P("a",{href:"https://www.facebook.com/groups/homeschooltw",target:"_blank",rel:"noopener noreferrer"},"臉書「在家自學社群」社團")]),P("li",null,[P("a",{href:"https://lin.ee/CashU46",target:"_blank",rel:"noopener noreferrer"},"自學AI聊天機器人@Line")])],-1)),t.projects.length?(Ne(),He("ul",AF,[(Ne(!0),He(dt,null,Xy(t.projects,o=>(Ne(),He("li",{key:o.id},[P("a",{href:o.website,target:"_blank",rel:"noopener noreferrer"},Wa(o.full_name),9,PF)]))),128))])):(Ne(),He("p",OF,"載入中..."))])])])])])}const kF=gu(yF,[["render",NF],["__scopeId","data-v-6c848621"]]),xF=_F({history:KM("/"),routes:[{path:"/",name:"home",component:kF},{path:"/changelog",name:"ChangeLogView",component:()=>Rt(()=>import("./ChangeLogView-BD6Wsish.js"),__vite__mapDeps([0,1]))},{path:"/maps",name:"MapsView",component:()=>Rt(()=>import("./MapsView-CLhmIISi.js"),__vite__mapDeps([2,3,4,5,6,7,8]))},{path:"/flag/:uid",name:"FlagView",component:()=>Rt(()=>import("./FlagView-Vioa0WbO.js"),__vite__mapDeps([9,7,10,11,5,6,12]))},{path:"/profile",name:"ProfileView",component:()=>Rt(()=>import("./ProfileView-CxusCz00.js"),__vite__mapDeps([13,10,7,11,3,4,14]))},{path:"/privacy-policy",name:"PrivacyPolicyView",component:()=>Rt(()=>import("./PrivacyPolicyView-2CNWO9ub.js"),__vite__mapDeps([15,16]))},{path:"/feedback",name:"FeedbackView",component:()=>Rt(()=>import("./FeedbackView-DUSZEGq7.js"),__vite__mapDeps([17,18]))},{path:"/faq",name:"FaqView",component:()=>Rt(()=>import("./FaqView-DlPW2HMQ.js"),__vite__mapDeps([19,20]))},{path:"/create_faq",name:"CreateFaqView",component:()=>Rt(()=>import("./CreateFaqView-DFipXZt0.js"),__vite__mapDeps([21,22]))},{path:"/edit_faq/:id",name:"EditFaqView",component:()=>Rt(()=>import("./EditFaqView-D0t2qIom.js"),__vite__mapDeps([23,24]))},{path:"/about",name:"about",component:()=>Rt(()=>import("./AboutView-2QdbflnZ.js"),__vite__mapDeps([25,26]))}]}),yu=pb(fM);yu.use(vb());yu.use(xF);yu.mount("#app");export{di as A,GI as B,qc as C,FF as D,Zs as E,dt as F,Ov as G,be as H,MF as I,BF as J,ER as K,wR as L,gu as _,bl as a,He as b,$F as c,P as d,Xy as e,Ki as f,Ne as g,Si as h,Ee as i,vp as j,Ei as k,Xr as l,Ai as m,ce as n,sc as o,et as p,sl as q,ht as r,Kn as s,Wa as t,UF as u,DF as v,_r as w,LF as x,ab as y,ai as z};
