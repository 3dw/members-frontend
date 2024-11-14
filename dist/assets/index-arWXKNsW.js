const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FeedbackView-BT_vsLi0.js","assets/FeedbackView-DR4UgRx8.css","assets/FaqView-0uh6YYiD.js","assets/FaqView-CfGDcYPf.css","assets/CreateFaqView-DymzRoTw.js","assets/CreateFaqView-dw9bAaj1.css","assets/EditFaqView-B-8qp0qI.js","assets/EditFaqView-Ded1dbLG.css","assets/AboutView-CZu4n8y6.js","assets/AboutView-CTwSeMp2.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function $l(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ce={},hs=[],Pt=()=>{},Hm=()=>!1,vo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ul=t=>t.startsWith("onUpdate:"),Pe=Object.assign,Bl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},jm=Object.prototype.hasOwnProperty,se=(t,e)=>jm.call(t,e),H=Array.isArray,ds=t=>Gr(t)==="[object Map]",Ns=t=>Gr(t)==="[object Set]",mu=t=>Gr(t)==="[object Date]",K=t=>typeof t=="function",Ee=t=>typeof t=="string",xt=t=>typeof t=="symbol",pe=t=>t!==null&&typeof t=="object",gf=t=>(pe(t)||K(t))&&K(t.then)&&K(t.catch),_f=Object.prototype.toString,Gr=t=>_f.call(t),Wm=t=>Gr(t).slice(8,-1),mf=t=>Gr(t)==="[object Object]",Hl=t=>Ee(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ur=$l(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),bo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Vm=/-(\w)/g,lt=bo(t=>t.replace(Vm,(e,n)=>n?n.toUpperCase():"")),qm=/\B([A-Z])/g,Rn=bo(t=>t.replace(qm,"-$1").toLowerCase()),Eo=bo(t=>t.charAt(0).toUpperCase()+t.slice(1)),ia=bo(t=>t?`on${Eo(t)}`:""),yn=(t,e)=>!Object.is(t,e),wi=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},yf=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Li=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let yu;const wo=()=>yu||(yu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function jl(t){if(H(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Ee(s)?Ym(s):jl(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(Ee(t)||pe(t))return t}const Km=/;(?![^(]*\))/g,Gm=/:([^]+)/,zm=/\/\*[^]*?\*\//g;function Ym(t){const e={};return t.replace(zm,"").split(Km).forEach(n=>{if(n){const s=n.split(Gm);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function qn(t){let e="";if(Ee(t))e=t;else if(H(t))for(let n=0;n<t.length;n++){const s=qn(t[n]);s&&(e+=s+" ")}else if(pe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Jm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Qm=$l(Jm);function vf(t){return!!t||t===""}function Xm(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=zr(t[s],e[s]);return n}function zr(t,e){if(t===e)return!0;let n=mu(t),s=mu(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=xt(t),s=xt(e),n||s)return t===e;if(n=H(t),s=H(e),n||s)return n&&s?Xm(t,e):!1;if(n=pe(t),s=pe(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!zr(t[o],e[o]))return!1}}return String(t)===String(e)}function Wl(t,e){return t.findIndex(n=>zr(n,e))}const bf=t=>!!(t&&t.__v_isRef===!0),Ba=t=>Ee(t)?t:t==null?"":H(t)||pe(t)&&(t.toString===_f||!K(t.toString))?bf(t)?Ba(t.value):JSON.stringify(t,Ef,2):String(t),Ef=(t,e)=>bf(e)?Ef(t,e.value):ds(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],i)=>(n[oa(s,i)+" =>"]=r,n),{})}:Ns(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>oa(n))}:xt(e)?oa(e):pe(e)&&!H(e)&&!mf(e)?String(e):e,oa=(t,e="")=>{var n;return xt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let tt;class wf{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=tt,!e&&tt&&(this.index=(tt.scopes||(tt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=tt;try{return tt=this,e()}finally{tt=n}}}on(){tt=this}off(){tt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Zm(t){return new wf(t)}function ey(){return tt}let de;const aa=new WeakSet;class Cf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,tt&&tt.active&&tt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,aa.has(this)&&(aa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||If(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,vu(this),Tf(this);const e=de,n=mt;de=this,mt=!0;try{return this.fn()}finally{Rf(this),de=e,mt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Kl(e);this.deps=this.depsTail=void 0,vu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?aa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ha(this)&&this.run()}get dirty(){return Ha(this)}}let Sf=0,hr,dr;function If(t,e=!1){if(t.flags|=8,e){t.next=dr,dr=t;return}t.next=hr,hr=t}function Vl(){Sf++}function ql(){if(--Sf>0)return;if(dr){let e=dr;for(dr=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;hr;){let e=hr;for(hr=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Tf(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Rf(t){let e,n=t.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),Kl(s),ty(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}t.deps=e,t.depsTail=n}function Ha(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Af(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Af(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ir))return;t.globalVersion=Ir;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Ha(t)){t.flags&=-3;return}const n=de,s=mt;de=t,mt=!0;try{Tf(t);const r=t.fn(t._value);(e.version===0||yn(r,t._value))&&(t._value=r,e.version++)}catch(r){throw e.version++,r}finally{de=n,mt=s,Rf(t),t.flags&=-3}}function Kl(t,e=!1){const{dep:n,prevSub:s,nextSub:r}=t;if(s&&(s.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Kl(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function ty(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let mt=!0;const Pf=[];function An(){Pf.push(mt),mt=!1}function Pn(){const t=Pf.pop();mt=t===void 0?!0:t}function vu(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=de;de=void 0;try{e()}finally{de=n}}}let Ir=0;class ny{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Gl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!de||!mt||de===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==de)n=this.activeLink=new ny(de,this),de.deps?(n.prevDep=de.depsTail,de.depsTail.nextDep=n,de.depsTail=n):de.deps=de.depsTail=n,Of(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=de.depsTail,n.nextDep=void 0,de.depsTail.nextDep=n,de.depsTail=n,de.deps===n&&(de.deps=s)}return n}trigger(e){this.version++,Ir++,this.notify(e)}notify(e){Vl();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{ql()}}}function Of(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Of(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const ja=new WeakMap,Wn=Symbol(""),Wa=Symbol(""),Tr=Symbol("");function xe(t,e,n){if(mt&&de){let s=ja.get(t);s||ja.set(t,s=new Map);let r=s.get(n);r||(s.set(n,r=new Gl),r.map=s,r.key=n),r.track()}}function Bt(t,e,n,s,r,i){const o=ja.get(t);if(!o){Ir++;return}const a=l=>{l&&l.trigger()};if(Vl(),e==="clear")o.forEach(a);else{const l=H(t),c=l&&Hl(n);if(l&&n==="length"){const u=Number(s);o.forEach((h,d)=>{(d==="length"||d===Tr||!xt(d)&&d>=u)&&a(h)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(Tr)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Wn)),ds(t)&&a(o.get(Wa)));break;case"delete":l||(a(o.get(Wn)),ds(t)&&a(o.get(Wa)));break;case"set":ds(t)&&a(o.get(Wn));break}}ql()}function is(t){const e=ne(t);return e===t?e:(xe(e,"iterate",Tr),at(t)?e:e.map(De))}function Co(t){return xe(t=ne(t),"iterate",Tr),t}const sy={__proto__:null,[Symbol.iterator](){return la(this,Symbol.iterator,De)},concat(...t){return is(this).concat(...t.map(e=>H(e)?is(e):e))},entries(){return la(this,"entries",t=>(t[1]=De(t[1]),t))},every(t,e){return Ft(this,"every",t,e,void 0,arguments)},filter(t,e){return Ft(this,"filter",t,e,n=>n.map(De),arguments)},find(t,e){return Ft(this,"find",t,e,De,arguments)},findIndex(t,e){return Ft(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Ft(this,"findLast",t,e,De,arguments)},findLastIndex(t,e){return Ft(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Ft(this,"forEach",t,e,void 0,arguments)},includes(...t){return ca(this,"includes",t)},indexOf(...t){return ca(this,"indexOf",t)},join(t){return is(this).join(t)},lastIndexOf(...t){return ca(this,"lastIndexOf",t)},map(t,e){return Ft(this,"map",t,e,void 0,arguments)},pop(){return Ys(this,"pop")},push(...t){return Ys(this,"push",t)},reduce(t,...e){return bu(this,"reduce",t,e)},reduceRight(t,...e){return bu(this,"reduceRight",t,e)},shift(){return Ys(this,"shift")},some(t,e){return Ft(this,"some",t,e,void 0,arguments)},splice(...t){return Ys(this,"splice",t)},toReversed(){return is(this).toReversed()},toSorted(t){return is(this).toSorted(t)},toSpliced(...t){return is(this).toSpliced(...t)},unshift(...t){return Ys(this,"unshift",t)},values(){return la(this,"values",De)}};function la(t,e,n){const s=Co(t),r=s[e]();return s!==t&&!at(t)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.value&&(i.value=n(i.value)),i}),r}const ry=Array.prototype;function Ft(t,e,n,s,r,i){const o=Co(t),a=o!==t&&!at(t),l=o[e];if(l!==ry[e]){const h=l.apply(t,i);return a?De(h):h}let c=n;o!==t&&(a?c=function(h,d){return n.call(this,De(h),d,t)}:n.length>2&&(c=function(h,d){return n.call(this,h,d,t)}));const u=l.call(o,c,s);return a&&r?r(u):u}function bu(t,e,n,s){const r=Co(t);let i=n;return r!==t&&(at(t)?n.length>3&&(i=function(o,a,l){return n.call(this,o,a,l,t)}):i=function(o,a,l){return n.call(this,o,De(a),l,t)}),r[e](i,...s)}function ca(t,e,n){const s=ne(t);xe(s,"iterate",Tr);const r=s[e](...n);return(r===-1||r===!1)&&Jl(n[0])?(n[0]=ne(n[0]),s[e](...n)):r}function Ys(t,e,n=[]){An(),Vl();const s=ne(t)[e].apply(t,n);return ql(),Pn(),s}const iy=$l("__proto__,__v_isRef,__isVue"),Nf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(xt));function oy(t){xt(t)||(t=String(t));const e=ne(this);return xe(e,"has",t),e.hasOwnProperty(t)}class kf{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?_y:Mf:i?Lf:Df).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=H(e);if(!r){let l;if(o&&(l=sy[n]))return l;if(n==="hasOwnProperty")return oy}const a=Reflect.get(e,n,Fe(e)?e:s);return(xt(n)?Nf.has(n):iy(n))||(r||xe(e,"get",n),i)?a:Fe(a)?o&&Hl(n)?a:a.value:pe(a)?r?$f(a):So(a):a}}class xf extends kf{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];if(!this._isShallow){const l=Kn(i);if(!at(s)&&!Kn(s)&&(i=ne(i),s=ne(s)),!H(e)&&Fe(i)&&!Fe(s))return l?!1:(i.value=s,!0)}const o=H(e)&&Hl(n)?Number(n)<e.length:se(e,n),a=Reflect.set(e,n,s,Fe(e)?e:r);return e===ne(r)&&(o?yn(s,i)&&Bt(e,"set",n,s):Bt(e,"add",n,s)),a}deleteProperty(e,n){const s=se(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&Bt(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!xt(n)||!Nf.has(n))&&xe(e,"has",n),s}ownKeys(e){return xe(e,"iterate",H(e)?"length":Wn),Reflect.ownKeys(e)}}class ay extends kf{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const ly=new xf,cy=new ay,uy=new xf(!0);const Va=t=>t,pi=t=>Reflect.getPrototypeOf(t);function hy(t,e,n){return function(...s){const r=this.__v_raw,i=ne(r),o=ds(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...s),u=n?Va:e?qa:De;return!e&&xe(i,"iterate",l?Wa:Wn),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function gi(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function dy(t,e){const n={get(r){const i=this.__v_raw,o=ne(i),a=ne(r);t||(yn(r,a)&&xe(o,"get",r),xe(o,"get",a));const{has:l}=pi(o),c=e?Va:t?qa:De;if(l.call(o,r))return c(i.get(r));if(l.call(o,a))return c(i.get(a));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!t&&xe(ne(r),"iterate",Wn),Reflect.get(r,"size",r)},has(r){const i=this.__v_raw,o=ne(i),a=ne(r);return t||(yn(r,a)&&xe(o,"has",r),xe(o,"has",a)),r===a?i.has(r):i.has(r)||i.has(a)},forEach(r,i){const o=this,a=o.__v_raw,l=ne(a),c=e?Va:t?qa:De;return!t&&xe(l,"iterate",Wn),a.forEach((u,h)=>r.call(i,c(u),c(h),o))}};return Pe(n,t?{add:gi("add"),set:gi("set"),delete:gi("delete"),clear:gi("clear")}:{add(r){!e&&!at(r)&&!Kn(r)&&(r=ne(r));const i=ne(this);return pi(i).has.call(i,r)||(i.add(r),Bt(i,"add",r,r)),this},set(r,i){!e&&!at(i)&&!Kn(i)&&(i=ne(i));const o=ne(this),{has:a,get:l}=pi(o);let c=a.call(o,r);c||(r=ne(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,i),c?yn(i,u)&&Bt(o,"set",r,i):Bt(o,"add",r,i),this},delete(r){const i=ne(this),{has:o,get:a}=pi(i);let l=o.call(i,r);l||(r=ne(r),l=o.call(i,r)),a&&a.call(i,r);const c=i.delete(r);return l&&Bt(i,"delete",r,void 0),c},clear(){const r=ne(this),i=r.size!==0,o=r.clear();return i&&Bt(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=hy(r,t,e)}),n}function zl(t,e){const n=dy(t,e);return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(se(n,r)&&r in s?n:s,r,i)}const fy={get:zl(!1,!1)},py={get:zl(!1,!0)},gy={get:zl(!0,!1)};const Df=new WeakMap,Lf=new WeakMap,Mf=new WeakMap,_y=new WeakMap;function my(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function yy(t){return t.__v_skip||!Object.isExtensible(t)?0:my(Wm(t))}function So(t){return Kn(t)?t:Yl(t,!1,ly,fy,Df)}function Ff(t){return Yl(t,!1,uy,py,Lf)}function $f(t){return Yl(t,!0,cy,gy,Mf)}function Yl(t,e,n,s,r){if(!pe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=yy(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function fs(t){return Kn(t)?fs(t.__v_raw):!!(t&&t.__v_isReactive)}function Kn(t){return!!(t&&t.__v_isReadonly)}function at(t){return!!(t&&t.__v_isShallow)}function Jl(t){return t?!!t.__v_raw:!1}function ne(t){const e=t&&t.__v_raw;return e?ne(e):t}function Uf(t){return!se(t,"__v_skip")&&Object.isExtensible(t)&&yf(t,"__v_skip",!0),t}const De=t=>pe(t)?So(t):t,qa=t=>pe(t)?$f(t):t;function Fe(t){return t?t.__v_isRef===!0:!1}function ht(t){return Bf(t,!1)}function vy(t){return Bf(t,!0)}function Bf(t,e){return Fe(t)?t:new by(t,e)}class by{constructor(e,n){this.dep=new Gl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ne(e),this._value=n?e:De(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||at(e)||Kn(e);e=s?e:ne(e),yn(e,n)&&(this._rawValue=e,this._value=s?e:De(e),this.dep.trigger())}}function ps(t){return Fe(t)?t.value:t}const Ey={get:(t,e,n)=>e==="__v_raw"?t:ps(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Fe(r)&&!Fe(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Hf(t){return fs(t)?t:new Proxy(t,Ey)}class wy{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Gl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ir-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&de!==this)return If(this,!0),!0}get value(){const e=this.dep.track();return Af(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Cy(t,e,n=!1){let s,r;return K(t)?s=t:(s=t.get,r=t.set),new wy(s,r,n)}const _i={},Mi=new WeakMap;let Mn;function Sy(t,e=!1,n=Mn){if(n){let s=Mi.get(n);s||Mi.set(n,s=[]),s.push(t)}}function Iy(t,e,n=ce){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:a,call:l}=n,c=k=>r?k:at(k)||r===!1||r===0?Ht(k,1):Ht(k);let u,h,d,p,_=!1,m=!1;if(Fe(t)?(h=()=>t.value,_=at(t)):fs(t)?(h=()=>c(t),_=!0):H(t)?(m=!0,_=t.some(k=>fs(k)||at(k)),h=()=>t.map(k=>{if(Fe(k))return k.value;if(fs(k))return c(k);if(K(k))return l?l(k,2):k()})):K(t)?e?h=l?()=>l(t,2):t:h=()=>{if(d){An();try{d()}finally{Pn()}}const k=Mn;Mn=u;try{return l?l(t,3,[p]):t(p)}finally{Mn=k}}:h=Pt,e&&r){const k=h,B=r===!0?1/0:r;h=()=>Ht(k(),B)}const b=ey(),T=()=>{u.stop(),b&&Bl(b.effects,u)};if(i&&e){const k=e;e=(...B)=>{k(...B),T()}}let R=m?new Array(t.length).fill(_i):_i;const P=k=>{if(!(!(u.flags&1)||!u.dirty&&!k))if(e){const B=u.run();if(r||_||(m?B.some((ee,Q)=>yn(ee,R[Q])):yn(B,R))){d&&d();const ee=Mn;Mn=u;try{const Q=[B,R===_i?void 0:m&&R[0]===_i?[]:R,p];l?l(e,3,Q):e(...Q),R=B}finally{Mn=ee}}}else u.run()};return a&&a(P),u=new Cf(h),u.scheduler=o?()=>o(P,!1):P,p=k=>Sy(k,!1,u),d=u.onStop=()=>{const k=Mi.get(u);if(k){if(l)l(k,4);else for(const B of k)B();Mi.delete(u)}},e?s?P(!0):R=u.run():o?o(P.bind(null,!0),!0):u.run(),T.pause=u.pause.bind(u),T.resume=u.resume.bind(u),T.stop=T,T}function Ht(t,e=1/0,n){if(e<=0||!pe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Fe(t))Ht(t.value,e,n);else if(H(t))for(let s=0;s<t.length;s++)Ht(t[s],e,n);else if(Ns(t)||ds(t))t.forEach(s=>{Ht(s,e,n)});else if(mf(t)){for(const s in t)Ht(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&Ht(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Yr(t,e,n,s){try{return s?t(...s):t()}catch(r){Io(r,e,n)}}function Dt(t,e,n,s){if(K(t)){const r=Yr(t,e,n,s);return r&&gf(r)&&r.catch(i=>{Io(i,e,n)}),r}if(H(t)){const r=[];for(let i=0;i<t.length;i++)r.push(Dt(t[i],e,n,s));return r}}function Io(t,e,n,s=!0){const r=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ce;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](t,l,c)===!1)return}a=a.parent}if(i){An(),Yr(i,null,10,[t,l,c]),Pn();return}}Ty(t,n,r,s,o)}function Ty(t,e,n,s=!0,r=!1){if(r)throw t;console.error(t)}const He=[];let Tt=-1;const gs=[];let un=null,as=0;const jf=Promise.resolve();let Fi=null;function Ql(t){const e=Fi||jf;return t?e.then(this?t.bind(this):t):e}function Ry(t){let e=Tt+1,n=He.length;for(;e<n;){const s=e+n>>>1,r=He[s],i=Rr(r);i<t||i===t&&r.flags&2?e=s+1:n=s}return e}function Xl(t){if(!(t.flags&1)){const e=Rr(t),n=He[He.length-1];!n||!(t.flags&2)&&e>=Rr(n)?He.push(t):He.splice(Ry(e),0,t),t.flags|=1,Wf()}}function Wf(){Fi||(Fi=jf.then(qf))}function Ay(t){H(t)?gs.push(...t):un&&t.id===-1?un.splice(as+1,0,t):t.flags&1||(gs.push(t),t.flags|=1),Wf()}function Eu(t,e,n=Tt+1){for(;n<He.length;n++){const s=He[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;He.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Vf(t){if(gs.length){const e=[...new Set(gs)].sort((n,s)=>Rr(n)-Rr(s));if(gs.length=0,un){un.push(...e);return}for(un=e,as=0;as<un.length;as++){const n=un[as];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}un=null,as=0}}const Rr=t=>t.id==null?t.flags&2?-1:1/0:t.id;function qf(t){try{for(Tt=0;Tt<He.length;Tt++){const e=He[Tt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Yr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Tt<He.length;Tt++){const e=He[Tt];e&&(e.flags&=-2)}Tt=-1,He.length=0,Vf(),Fi=null,(He.length||gs.length)&&qf()}}let nt=null,Kf=null;function $i(t){const e=nt;return nt=t,Kf=t&&t.type.__scopeId||null,e}function ut(t,e=nt,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Ou(-1);const i=$i(e);let o;try{o=t(...r)}finally{$i(i),s._d&&Ou(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Ci(t,e){if(nt===null)return t;const n=Po(nt),s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[i,o,a,l=ce]=e[r];i&&(K(i)&&(i={mounted:i,updated:i}),i.deep&&Ht(o),s.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Dn(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let l=a.dir[s];l&&(An(),Dt(l,n,8,[t.el,a,t,e]),Pn())}}const Py=Symbol("_vte"),Oy=t=>t.__isTeleport;function Zl(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Zl(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Jr(t,e){return K(t)?Pe({name:t.name},e,{setup:t}):t}function Gf(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ka(t,e,n,s,r=!1){if(H(t)){t.forEach((_,m)=>Ka(_,e&&(H(e)?e[m]:e),n,s,r));return}if(fr(s)&&!r)return;const i=s.shapeFlag&4?Po(s.component):s.el,o=r?null:i,{i:a,r:l}=t,c=e&&e.r,u=a.refs===ce?a.refs={}:a.refs,h=a.setupState,d=ne(h),p=h===ce?()=>!1:_=>se(d,_);if(c!=null&&c!==l&&(Ee(c)?(u[c]=null,p(c)&&(h[c]=null)):Fe(c)&&(c.value=null)),K(l))Yr(l,a,12,[o,u]);else{const _=Ee(l),m=Fe(l);if(_||m){const b=()=>{if(t.f){const T=_?p(l)?h[l]:u[l]:l.value;r?H(T)&&Bl(T,i):H(T)?T.includes(i)||T.push(i):_?(u[l]=[i],p(l)&&(h[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else _?(u[l]=o,p(l)&&(h[l]=o)):m&&(l.value=o,t.k&&(u[t.k]=o))};o?(b.id=-1,et(b,n)):b()}}}wo().requestIdleCallback;wo().cancelIdleCallback;const fr=t=>!!t.type.__asyncLoader,zf=t=>t.type.__isKeepAlive;function Ny(t,e){Yf(t,"a",e)}function ky(t,e){Yf(t,"da",e)}function Yf(t,e,n=Me){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(To(e,s,n),n){let r=n.parent;for(;r&&r.parent;)zf(r.parent.vnode)&&xy(s,e,n,r),r=r.parent}}function xy(t,e,n,s){const r=To(e,t,s,!0);Jf(()=>{Bl(s[e],r)},n)}function To(t,e,n=Me,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{An();const a=Qr(n),l=Dt(e,n,t,o);return a(),Pn(),l});return s?r.unshift(i):r.push(i),i}}const Xt=t=>(e,n=Me)=>{(!Pr||t==="sp")&&To(t,(...s)=>e(...s),n)},Dy=Xt("bm"),ec=Xt("m"),Ly=Xt("bu"),My=Xt("u"),Fy=Xt("bum"),Jf=Xt("um"),$y=Xt("sp"),Uy=Xt("rtg"),By=Xt("rtc");function Hy(t,e=Me){To("ec",t,e)}const jy="components";function ua(t,e){return Vy(jy,t,!0,e)||t}const Wy=Symbol.for("v-ndc");function Vy(t,e,n=!0,s=!1){const r=nt||Me;if(r){const i=r.type;{const a=kv(i,!1);if(a&&(a===e||a===lt(e)||a===Eo(lt(e))))return i}const o=wu(r[t]||i[t],e)||wu(r.appContext[t],e);return!o&&s?i:o}}function wu(t,e){return t&&(t[e]||t[lt(e)]||t[Eo(lt(e))])}function qy(t,e,n,s){let r;const i=n,o=H(t);if(o||Ee(t)){const a=o&&fs(t);let l=!1;a&&(l=!at(t),t=Co(t)),r=new Array(t.length);for(let c=0,u=t.length;c<u;c++)r[c]=e(l?De(t[c]):t[c],c,void 0,i)}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,i)}else if(pe(t))if(t[Symbol.iterator])r=Array.from(t,(a,l)=>e(a,l,void 0,i));else{const a=Object.keys(t);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(t[u],u,l,i)}}else r=[];return r}const Ga=t=>t?mp(t)?Po(t):Ga(t.parent):null,pr=Pe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ga(t.parent),$root:t=>Ga(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>tc(t),$forceUpdate:t=>t.f||(t.f=()=>{Xl(t.update)}),$nextTick:t=>t.n||(t.n=Ql.bind(t.proxy)),$watch:t=>dv.bind(t)}),ha=(t,e)=>t!==ce&&!t.__isScriptSetup&&se(t,e),Ky={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(ha(s,e))return o[e]=1,s[e];if(r!==ce&&se(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&se(c,e))return o[e]=3,i[e];if(n!==ce&&se(n,e))return o[e]=4,n[e];za&&(o[e]=0)}}const u=pr[e];let h,d;if(u)return e==="$attrs"&&xe(t.attrs,"get",""),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ce&&se(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,se(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return ha(r,e)?(r[e]=n,!0):s!==ce&&se(s,e)?(s[e]=n,!0):se(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==ce&&se(t,o)||ha(e,o)||(a=i[0])&&se(a,o)||se(s,o)||se(pr,o)||se(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:se(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Cu(t){return H(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let za=!0;function Gy(t){const e=tc(t),n=t.proxy,s=t.ctx;za=!1,e.beforeCreate&&Su(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:_,activated:m,deactivated:b,beforeDestroy:T,beforeUnmount:R,destroyed:P,unmounted:k,render:B,renderTracked:ee,renderTriggered:Q,errorCaptured:Oe,serverPrefetch:$e,expose:it,inheritAttrs:rn,components:xn,directives:wt,filters:Gs}=e;if(c&&zy(c,s,null),o)for(const ae in o){const te=o[ae];K(te)&&(s[ae]=te.bind(n))}if(r){const ae=r.call(n,n);pe(ae)&&(t.data=So(ae))}if(za=!0,i)for(const ae in i){const te=i[ae],Mt=K(te)?te.bind(n,n):K(te.get)?te.get.bind(n,n):Pt,on=!K(te)&&K(te.set)?te.set.bind(n):Pt,Ct=ft({get:Mt,set:on});Object.defineProperty(s,ae,{enumerable:!0,configurable:!0,get:()=>Ct.value,set:qe=>Ct.value=qe})}if(a)for(const ae in a)Qf(a[ae],s,n,ae);if(l){const ae=K(l)?l.call(n):l;Reflect.ownKeys(ae).forEach(te=>{Si(te,ae[te])})}u&&Su(u,t,"c");function Se(ae,te){H(te)?te.forEach(Mt=>ae(Mt.bind(n))):te&&ae(te.bind(n))}if(Se(Dy,h),Se(ec,d),Se(Ly,p),Se(My,_),Se(Ny,m),Se(ky,b),Se(Hy,Oe),Se(By,ee),Se(Uy,Q),Se(Fy,R),Se(Jf,k),Se($y,$e),H(it))if(it.length){const ae=t.exposed||(t.exposed={});it.forEach(te=>{Object.defineProperty(ae,te,{get:()=>n[te],set:Mt=>n[te]=Mt})})}else t.exposed||(t.exposed={});B&&t.render===Pt&&(t.render=B),rn!=null&&(t.inheritAttrs=rn),xn&&(t.components=xn),wt&&(t.directives=wt),$e&&Gf(t)}function zy(t,e,n=Pt){H(t)&&(t=Ya(t));for(const s in t){const r=t[s];let i;pe(r)?"default"in r?i=Ot(r.from||s,r.default,!0):i=Ot(r.from||s):i=Ot(r),Fe(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function Su(t,e,n){Dt(H(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Qf(t,e,n,s){let r=s.includes(".")?hp(n,s):()=>n[s];if(Ee(t)){const i=e[t];K(i)&&gr(r,i)}else if(K(t))gr(r,t.bind(n));else if(pe(t))if(H(t))t.forEach(i=>Qf(i,e,n,s));else{const i=K(t.handler)?t.handler.bind(n):e[t.handler];K(i)&&gr(r,i,t)}}function tc(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!r.length&&!n&&!s?l=e:(l={},r.length&&r.forEach(c=>Ui(l,c,o,!0)),Ui(l,e,o)),pe(e)&&i.set(e,l),l}function Ui(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Ui(t,i,n,!0),r&&r.forEach(o=>Ui(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Yy[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Yy={data:Iu,props:Tu,emits:Tu,methods:ar,computed:ar,beforeCreate:Ue,created:Ue,beforeMount:Ue,mounted:Ue,beforeUpdate:Ue,updated:Ue,beforeDestroy:Ue,beforeUnmount:Ue,destroyed:Ue,unmounted:Ue,activated:Ue,deactivated:Ue,errorCaptured:Ue,serverPrefetch:Ue,components:ar,directives:ar,watch:Qy,provide:Iu,inject:Jy};function Iu(t,e){return e?t?function(){return Pe(K(t)?t.call(this,this):t,K(e)?e.call(this,this):e)}:e:t}function Jy(t,e){return ar(Ya(t),Ya(e))}function Ya(t){if(H(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ue(t,e){return t?[...new Set([].concat(t,e))]:e}function ar(t,e){return t?Pe(Object.create(null),t,e):e}function Tu(t,e){return t?H(t)&&H(e)?[...new Set([...t,...e])]:Pe(Object.create(null),Cu(t),Cu(e??{})):e}function Qy(t,e){if(!t)return e;if(!e)return t;const n=Pe(Object.create(null),t);for(const s in e)n[s]=Ue(t[s],e[s]);return n}function Xf(){return{app:null,config:{isNativeTag:Hm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Xy=0;function Zy(t,e){return function(s,r=null){K(s)||(s=Pe({},s)),r!=null&&!pe(r)&&(r=null);const i=Xf(),o=new WeakSet,a=[];let l=!1;const c=i.app={_uid:Xy++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Dv,get config(){return i.config},set config(u){},use(u,...h){return o.has(u)||(u&&K(u.install)?(o.add(u),u.install(c,...h)):K(u)&&(o.add(u),u(c,...h))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,h){return h?(i.components[u]=h,c):i.components[u]},directive(u,h){return h?(i.directives[u]=h,c):i.directives[u]},mount(u,h,d){if(!l){const p=c._ceVNode||me(s,r);return p.appContext=i,d===!0?d="svg":d===!1&&(d=void 0),h&&e?e(p,u):t(p,u,d),l=!0,c._container=u,u.__vue_app__=c,Po(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Dt(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,h){return i.provides[u]=h,c},runWithContext(u){const h=_s;_s=c;try{return u()}finally{_s=h}}};return c}}let _s=null;function Si(t,e){if(Me){let n=Me.provides;const s=Me.parent&&Me.parent.provides;s===n&&(n=Me.provides=Object.create(s)),n[t]=e}}function Ot(t,e,n=!1){const s=Me||nt;if(s||_s){const r=_s?_s._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&K(e)?e.call(s&&s.proxy):e}}const Zf={},ep=()=>Object.create(Zf),tp=t=>Object.getPrototypeOf(t)===Zf;function ev(t,e,n,s=!1){const r={},i=ep();t.propsDefaults=Object.create(null),np(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Ff(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function tv(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=ne(r),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Ro(t.emitsOptions,d))continue;const p=e[d];if(l)if(se(i,d))p!==i[d]&&(i[d]=p,c=!0);else{const _=lt(d);r[_]=Ja(l,a,_,p,t,!1)}else p!==i[d]&&(i[d]=p,c=!0)}}}else{np(t,e,r,i)&&(c=!0);let u;for(const h in a)(!e||!se(e,h)&&((u=Rn(h))===h||!se(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=Ja(l,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!se(e,h))&&(delete i[h],c=!0)}c&&Bt(t.attrs,"set","")}function np(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(ur(l))continue;const c=e[l];let u;r&&se(r,u=lt(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:Ro(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(i){const l=ne(n),c=a||ce;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Ja(r,l,h,c[h],t,!se(c,h))}}return o}function Ja(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=se(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&K(l)){const{propsDefaults:c}=r;if(n in c)s=c[n];else{const u=Qr(r);s=c[n]=l.call(null,e),u()}}else s=l;r.ce&&r.ce._setProp(n,s)}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Rn(n))&&(s=!0))}return s}const nv=new WeakMap;function sp(t,e,n=!1){const s=n?nv:e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let l=!1;if(!K(t)){const u=h=>{l=!0;const[d,p]=sp(h,e,!0);Pe(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return pe(t)&&s.set(t,hs),hs;if(H(i))for(let u=0;u<i.length;u++){const h=lt(i[u]);Ru(h)&&(o[h]=ce)}else if(i)for(const u in i){const h=lt(u);if(Ru(h)){const d=i[u],p=o[h]=H(d)||K(d)?{type:d}:Pe({},d),_=p.type;let m=!1,b=!0;if(H(_))for(let T=0;T<_.length;++T){const R=_[T],P=K(R)&&R.name;if(P==="Boolean"){m=!0;break}else P==="String"&&(b=!1)}else m=K(_)&&_.name==="Boolean";p[0]=m,p[1]=b,(m||se(p,"default"))&&a.push(h)}}const c=[o,a];return pe(t)&&s.set(t,c),c}function Ru(t){return t[0]!=="$"&&!ur(t)}const rp=t=>t[0]==="_"||t==="$stable",nc=t=>H(t)?t.map(Rt):[Rt(t)],sv=(t,e,n)=>{if(e._n)return e;const s=ut((...r)=>nc(e(...r)),n);return s._c=!1,s},ip=(t,e,n)=>{const s=t._ctx;for(const r in t){if(rp(r))continue;const i=t[r];if(K(i))e[r]=sv(r,i,s);else if(i!=null){const o=nc(i);e[r]=()=>o}}},op=(t,e)=>{const n=nc(e);t.slots.default=()=>n},ap=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},rv=(t,e,n)=>{const s=t.slots=ep();if(t.vnode.shapeFlag&32){const r=e._;r?(ap(s,e,n),n&&yf(s,"_",r,!0)):ip(e,s)}else e&&op(t,e)},iv=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=ce;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:ap(r,e,n):(i=!e.$stable,ip(e,r)),o=e}else e&&(op(t,e),o={default:1});if(i)for(const a in r)!rp(a)&&o[a]==null&&delete r[a]},et=vv;function ov(t){return av(t)}function av(t,e){const n=wo();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:p=Pt,insertStaticContent:_}=t,m=(f,g,y,C=null,E=null,S=null,D=void 0,N=null,O=!!g.dynamicChildren)=>{if(f===g)return;f&&!Js(f,g)&&(C=w(f),qe(f,E,S,!0),f=null),g.patchFlag===-2&&(O=!1,g.dynamicChildren=null);const{type:I,ref:j,shapeFlag:M}=g;switch(I){case Ao:b(f,g,y,C);break;case Gn:T(f,g,y,C);break;case Ii:f==null&&R(g,y,C,D);break;case dt:xn(f,g,y,C,E,S,D,N,O);break;default:M&1?B(f,g,y,C,E,S,D,N,O):M&6?wt(f,g,y,C,E,S,D,N,O):(M&64||M&128)&&I.process(f,g,y,C,E,S,D,N,O,$)}j!=null&&E&&Ka(j,f&&f.ref,S,g||f,!g)},b=(f,g,y,C)=>{if(f==null)s(g.el=a(g.children),y,C);else{const E=g.el=f.el;g.children!==f.children&&c(E,g.children)}},T=(f,g,y,C)=>{f==null?s(g.el=l(g.children||""),y,C):g.el=f.el},R=(f,g,y,C)=>{[f.el,f.anchor]=_(f.children,g,y,C,f.el,f.anchor)},P=({el:f,anchor:g},y,C)=>{let E;for(;f&&f!==g;)E=d(f),s(f,y,C),f=E;s(g,y,C)},k=({el:f,anchor:g})=>{let y;for(;f&&f!==g;)y=d(f),r(f),f=y;r(g)},B=(f,g,y,C,E,S,D,N,O)=>{g.type==="svg"?D="svg":g.type==="math"&&(D="mathml"),f==null?ee(g,y,C,E,S,D,N,O):$e(f,g,E,S,D,N,O)},ee=(f,g,y,C,E,S,D,N)=>{let O,I;const{props:j,shapeFlag:M,transition:U,dirs:q}=f;if(O=f.el=o(f.type,S,j&&j.is,j),M&8?u(O,f.children):M&16&&Oe(f.children,O,null,C,E,da(f,S),D,N),q&&Dn(f,null,C,"created"),Q(O,f,f.scopeId,D,C),j){for(const he in j)he!=="value"&&!ur(he)&&i(O,he,null,j[he],S,C);"value"in j&&i(O,"value",null,j.value,S),(I=j.onVnodeBeforeMount)&&It(I,C,f)}q&&Dn(f,null,C,"beforeMount");const X=lv(E,U);X&&U.beforeEnter(O),s(O,g,y),((I=j&&j.onVnodeMounted)||X||q)&&et(()=>{I&&It(I,C,f),X&&U.enter(O),q&&Dn(f,null,C,"mounted")},E)},Q=(f,g,y,C,E)=>{if(y&&p(f,y),C)for(let S=0;S<C.length;S++)p(f,C[S]);if(E){let S=E.subTree;if(g===S||fp(S.type)&&(S.ssContent===g||S.ssFallback===g)){const D=E.vnode;Q(f,D,D.scopeId,D.slotScopeIds,E.parent)}}},Oe=(f,g,y,C,E,S,D,N,O=0)=>{for(let I=O;I<f.length;I++){const j=f[I]=N?hn(f[I]):Rt(f[I]);m(null,j,g,y,C,E,S,D,N)}},$e=(f,g,y,C,E,S,D)=>{const N=g.el=f.el;let{patchFlag:O,dynamicChildren:I,dirs:j}=g;O|=f.patchFlag&16;const M=f.props||ce,U=g.props||ce;let q;if(y&&Ln(y,!1),(q=U.onVnodeBeforeUpdate)&&It(q,y,g,f),j&&Dn(g,f,y,"beforeUpdate"),y&&Ln(y,!0),(M.innerHTML&&U.innerHTML==null||M.textContent&&U.textContent==null)&&u(N,""),I?it(f.dynamicChildren,I,N,y,C,da(g,E),S):D||te(f,g,N,null,y,C,da(g,E),S,!1),O>0){if(O&16)rn(N,M,U,y,E);else if(O&2&&M.class!==U.class&&i(N,"class",null,U.class,E),O&4&&i(N,"style",M.style,U.style,E),O&8){const X=g.dynamicProps;for(let he=0;he<X.length;he++){const ie=X[he],Qe=M[ie],ke=U[ie];(ke!==Qe||ie==="value")&&i(N,ie,Qe,ke,E,y)}}O&1&&f.children!==g.children&&u(N,g.children)}else!D&&I==null&&rn(N,M,U,y,E);((q=U.onVnodeUpdated)||j)&&et(()=>{q&&It(q,y,g,f),j&&Dn(g,f,y,"updated")},C)},it=(f,g,y,C,E,S,D)=>{for(let N=0;N<g.length;N++){const O=f[N],I=g[N],j=O.el&&(O.type===dt||!Js(O,I)||O.shapeFlag&70)?h(O.el):y;m(O,I,j,null,C,E,S,D,!0)}},rn=(f,g,y,C,E)=>{if(g!==y){if(g!==ce)for(const S in g)!ur(S)&&!(S in y)&&i(f,S,g[S],null,E,C);for(const S in y){if(ur(S))continue;const D=y[S],N=g[S];D!==N&&S!=="value"&&i(f,S,N,D,E,C)}"value"in y&&i(f,"value",g.value,y.value,E)}},xn=(f,g,y,C,E,S,D,N,O)=>{const I=g.el=f?f.el:a(""),j=g.anchor=f?f.anchor:a("");let{patchFlag:M,dynamicChildren:U,slotScopeIds:q}=g;q&&(N=N?N.concat(q):q),f==null?(s(I,y,C),s(j,y,C),Oe(g.children||[],y,j,E,S,D,N,O)):M>0&&M&64&&U&&f.dynamicChildren?(it(f.dynamicChildren,U,y,E,S,D,N),(g.key!=null||E&&g===E.subTree)&&lp(f,g,!0)):te(f,g,y,j,E,S,D,N,O)},wt=(f,g,y,C,E,S,D,N,O)=>{g.slotScopeIds=N,f==null?g.shapeFlag&512?E.ctx.activate(g,y,C,D,O):Gs(g,y,C,E,S,D,O):ns(f,g,O)},Gs=(f,g,y,C,E,S,D)=>{const N=f.component=Rv(f,C,E);if(zf(f)&&(N.ctx.renderer=$),Av(N,!1,D),N.asyncDep){if(E&&E.registerDep(N,Se,D),!f.el){const O=N.subTree=me(Gn);T(null,O,g,y)}}else Se(N,f,g,y,E,S,D)},ns=(f,g,y)=>{const C=g.component=f.component;if(mv(f,g,y))if(C.asyncDep&&!C.asyncResolved){ae(C,g,y);return}else C.next=g,C.update();else g.el=f.el,C.vnode=g},Se=(f,g,y,C,E,S,D)=>{const N=()=>{if(f.isMounted){let{next:M,bu:U,u:q,parent:X,vnode:he}=f;{const Xe=cp(f);if(Xe){M&&(M.el=he.el,ae(f,M,D)),Xe.asyncDep.then(()=>{f.isUnmounted||N()});return}}let ie=M,Qe;Ln(f,!1),M?(M.el=he.el,ae(f,M,D)):M=he,U&&wi(U),(Qe=M.props&&M.props.onVnodeBeforeUpdate)&&It(Qe,X,M,he),Ln(f,!0);const ke=fa(f),ct=f.subTree;f.subTree=ke,m(ct,ke,h(ct.el),w(ct),f,E,S),M.el=ke.el,ie===null&&yv(f,ke.el),q&&et(q,E),(Qe=M.props&&M.props.onVnodeUpdated)&&et(()=>It(Qe,X,M,he),E)}else{let M;const{el:U,props:q}=g,{bm:X,m:he,parent:ie,root:Qe,type:ke}=f,ct=fr(g);if(Ln(f,!1),X&&wi(X),!ct&&(M=q&&q.onVnodeBeforeMount)&&It(M,ie,g),Ln(f,!0),U&&ye){const Xe=()=>{f.subTree=fa(f),ye(U,f.subTree,f,E,null)};ct&&ke.__asyncHydrate?ke.__asyncHydrate(U,f,Xe):Xe()}else{Qe.ce&&Qe.ce._injectChildStyle(ke);const Xe=f.subTree=fa(f);m(null,Xe,y,C,f,E,S),g.el=Xe.el}if(he&&et(he,E),!ct&&(M=q&&q.onVnodeMounted)){const Xe=g;et(()=>It(M,ie,Xe),E)}(g.shapeFlag&256||ie&&fr(ie.vnode)&&ie.vnode.shapeFlag&256)&&f.a&&et(f.a,E),f.isMounted=!0,g=y=C=null}};f.scope.on();const O=f.effect=new Cf(N);f.scope.off();const I=f.update=O.run.bind(O),j=f.job=O.runIfDirty.bind(O);j.i=f,j.id=f.uid,O.scheduler=()=>Xl(j),Ln(f,!0),I()},ae=(f,g,y)=>{g.component=f;const C=f.vnode.props;f.vnode=g,f.next=null,tv(f,g.props,C,y),iv(f,g.children,y),An(),Eu(f),Pn()},te=(f,g,y,C,E,S,D,N,O=!1)=>{const I=f&&f.children,j=f?f.shapeFlag:0,M=g.children,{patchFlag:U,shapeFlag:q}=g;if(U>0){if(U&128){on(I,M,y,C,E,S,D,N,O);return}else if(U&256){Mt(I,M,y,C,E,S,D,N,O);return}}q&8?(j&16&&ot(I,E,S),M!==I&&u(y,M)):j&16?q&16?on(I,M,y,C,E,S,D,N,O):ot(I,E,S,!0):(j&8&&u(y,""),q&16&&Oe(M,y,C,E,S,D,N,O))},Mt=(f,g,y,C,E,S,D,N,O)=>{f=f||hs,g=g||hs;const I=f.length,j=g.length,M=Math.min(I,j);let U;for(U=0;U<M;U++){const q=g[U]=O?hn(g[U]):Rt(g[U]);m(f[U],q,y,null,E,S,D,N,O)}I>j?ot(f,E,S,!0,!1,M):Oe(g,y,C,E,S,D,N,O,M)},on=(f,g,y,C,E,S,D,N,O)=>{let I=0;const j=g.length;let M=f.length-1,U=j-1;for(;I<=M&&I<=U;){const q=f[I],X=g[I]=O?hn(g[I]):Rt(g[I]);if(Js(q,X))m(q,X,y,null,E,S,D,N,O);else break;I++}for(;I<=M&&I<=U;){const q=f[M],X=g[U]=O?hn(g[U]):Rt(g[U]);if(Js(q,X))m(q,X,y,null,E,S,D,N,O);else break;M--,U--}if(I>M){if(I<=U){const q=U+1,X=q<j?g[q].el:C;for(;I<=U;)m(null,g[I]=O?hn(g[I]):Rt(g[I]),y,X,E,S,D,N,O),I++}}else if(I>U)for(;I<=M;)qe(f[I],E,S,!0),I++;else{const q=I,X=I,he=new Map;for(I=X;I<=U;I++){const Ze=g[I]=O?hn(g[I]):Rt(g[I]);Ze.key!=null&&he.set(Ze.key,I)}let ie,Qe=0;const ke=U-X+1;let ct=!1,Xe=0;const zs=new Array(ke);for(I=0;I<ke;I++)zs[I]=0;for(I=q;I<=M;I++){const Ze=f[I];if(Qe>=ke){qe(Ze,E,S,!0);continue}let St;if(Ze.key!=null)St=he.get(Ze.key);else for(ie=X;ie<=U;ie++)if(zs[ie-X]===0&&Js(Ze,g[ie])){St=ie;break}St===void 0?qe(Ze,E,S,!0):(zs[St-X]=I+1,St>=Xe?Xe=St:ct=!0,m(Ze,g[St],y,null,E,S,D,N,O),Qe++)}const gu=ct?cv(zs):hs;for(ie=gu.length-1,I=ke-1;I>=0;I--){const Ze=X+I,St=g[Ze],_u=Ze+1<j?g[Ze+1].el:C;zs[I]===0?m(null,St,y,_u,E,S,D,N,O):ct&&(ie<0||I!==gu[ie]?Ct(St,y,_u,2):ie--)}}},Ct=(f,g,y,C,E=null)=>{const{el:S,type:D,transition:N,children:O,shapeFlag:I}=f;if(I&6){Ct(f.component.subTree,g,y,C);return}if(I&128){f.suspense.move(g,y,C);return}if(I&64){D.move(f,g,y,$);return}if(D===dt){s(S,g,y);for(let M=0;M<O.length;M++)Ct(O[M],g,y,C);s(f.anchor,g,y);return}if(D===Ii){P(f,g,y);return}if(C!==2&&I&1&&N)if(C===0)N.beforeEnter(S),s(S,g,y),et(()=>N.enter(S),E);else{const{leave:M,delayLeave:U,afterLeave:q}=N,X=()=>s(S,g,y),he=()=>{M(S,()=>{X(),q&&q()})};U?U(S,X,he):he()}else s(S,g,y)},qe=(f,g,y,C=!1,E=!1)=>{const{type:S,props:D,ref:N,children:O,dynamicChildren:I,shapeFlag:j,patchFlag:M,dirs:U,cacheIndex:q}=f;if(M===-2&&(E=!1),N!=null&&Ka(N,null,y,f,!0),q!=null&&(g.renderCache[q]=void 0),j&256){g.ctx.deactivate(f);return}const X=j&1&&U,he=!fr(f);let ie;if(he&&(ie=D&&D.onVnodeBeforeUnmount)&&It(ie,g,f),j&6)fi(f.component,y,C);else{if(j&128){f.suspense.unmount(y,C);return}X&&Dn(f,null,g,"beforeUnmount"),j&64?f.type.remove(f,g,y,$,C):I&&!I.hasOnce&&(S!==dt||M>0&&M&64)?ot(I,g,y,!1,!0):(S===dt&&M&384||!E&&j&16)&&ot(O,g,y),C&&ss(f)}(he&&(ie=D&&D.onVnodeUnmounted)||X)&&et(()=>{ie&&It(ie,g,f),X&&Dn(f,null,g,"unmounted")},y)},ss=f=>{const{type:g,el:y,anchor:C,transition:E}=f;if(g===dt){rs(y,C);return}if(g===Ii){k(f);return}const S=()=>{r(y),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(f.shapeFlag&1&&E&&!E.persisted){const{leave:D,delayLeave:N}=E,O=()=>D(y,S);N?N(f.el,S,O):O()}else S()},rs=(f,g)=>{let y;for(;f!==g;)y=d(f),r(f),f=y;r(g)},fi=(f,g,y)=>{const{bum:C,scope:E,job:S,subTree:D,um:N,m:O,a:I}=f;Au(O),Au(I),C&&wi(C),E.stop(),S&&(S.flags|=8,qe(D,f,g,y)),N&&et(N,g),et(()=>{f.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},ot=(f,g,y,C=!1,E=!1,S=0)=>{for(let D=S;D<f.length;D++)qe(f[D],g,y,C,E)},w=f=>{if(f.shapeFlag&6)return w(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const g=d(f.anchor||f.el),y=g&&g[Py];return y?d(y):g};let F=!1;const L=(f,g,y)=>{f==null?g._vnode&&qe(g._vnode,null,null,!0):m(g._vnode||null,f,g,null,null,null,y),g._vnode=f,F||(F=!0,Eu(),Vf(),F=!1)},$={p:m,um:qe,m:Ct,r:ss,mt:Gs,mc:Oe,pc:te,pbc:it,n:w,o:t};let re,ye;return{render:L,hydrate:re,createApp:Zy(L,re)}}function da({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ln({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function lv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function lp(t,e,n=!1){const s=t.children,r=e.children;if(H(s)&&H(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=hn(r[i]),a.el=o.el),!n&&a.patchFlag!==-2&&lp(o,a)),a.type===Ao&&(a.el=o.el)}}function cv(t){const e=t.slice(),n=[0];let s,r,i,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(r=n[n.length-1],t[r]<c){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function cp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:cp(e)}function Au(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const uv=Symbol.for("v-scx"),hv=()=>Ot(uv);function gr(t,e,n){return up(t,e,n)}function up(t,e,n=ce){const{immediate:s,deep:r,flush:i,once:o}=n,a=Pe({},n),l=e&&s||!e&&i!=="post";let c;if(Pr){if(i==="sync"){const p=hv();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Pt,p.resume=Pt,p.pause=Pt,p}}const u=Me;a.call=(p,_,m)=>Dt(p,u,_,m);let h=!1;i==="post"?a.scheduler=p=>{et(p,u&&u.suspense)}:i!=="sync"&&(h=!0,a.scheduler=(p,_)=>{_?p():Xl(p)}),a.augmentJob=p=>{e&&(p.flags|=4),h&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const d=Iy(t,e,a);return Pr&&(c?c.push(d):l&&d()),d}function dv(t,e,n){const s=this.proxy,r=Ee(t)?t.includes(".")?hp(s,t):()=>s[t]:t.bind(s,s);let i;K(e)?i=e:(i=e.handler,n=e);const o=Qr(this),a=up(r,i.bind(s),n);return o(),a}function hp(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const fv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${lt(e)}Modifiers`]||t[`${Rn(e)}Modifiers`];function pv(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ce;let r=n;const i=e.startsWith("update:"),o=i&&fv(s,e.slice(7));o&&(o.trim&&(r=n.map(u=>Ee(u)?u.trim():u)),o.number&&(r=n.map(Li)));let a,l=s[a=ia(e)]||s[a=ia(lt(e))];!l&&i&&(l=s[a=ia(Rn(e))]),l&&Dt(l,t,6,r);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Dt(c,t,6,r)}}function dp(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!K(t)){const l=c=>{const u=dp(c,e,!0);u&&(a=!0,Pe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(pe(t)&&s.set(t,null),null):(H(i)?i.forEach(l=>o[l]=null):Pe(o,i),pe(t)&&s.set(t,o),o)}function Ro(t,e){return!t||!vo(e)?!1:(e=e.slice(2).replace(/Once$/,""),se(t,e[0].toLowerCase()+e.slice(1))||se(t,Rn(e))||se(t,e))}function fa(t){const{type:e,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:d,setupState:p,ctx:_,inheritAttrs:m}=t,b=$i(t);let T,R;try{if(n.shapeFlag&4){const k=r||s,B=k;T=Rt(c.call(B,k,u,h,p,d,_)),R=a}else{const k=e;T=Rt(k.length>1?k(h,{attrs:a,slots:o,emit:l}):k(h,null)),R=e.props?a:gv(a)}}catch(k){_r.length=0,Io(k,t,1),T=me(Gn)}let P=T;if(R&&m!==!1){const k=Object.keys(R),{shapeFlag:B}=P;k.length&&B&7&&(i&&k.some(Ul)&&(R=_v(R,i)),P=ws(P,R,!1,!0))}return n.dirs&&(P=ws(P,null,!1,!0),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&Zl(P,n.transition),T=P,$i(b),T}const gv=t=>{let e;for(const n in t)(n==="class"||n==="style"||vo(n))&&((e||(e={}))[n]=t[n]);return e},_v=(t,e)=>{const n={};for(const s in t)(!Ul(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function mv(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Pu(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!Ro(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Pu(s,o,c):!0:!!o;return!1}function Pu(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Ro(n,i))return!0}return!1}function yv({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const fp=t=>t.__isSuspense;function vv(t,e){e&&e.pendingBranch?H(t)?e.effects.push(...t):e.effects.push(t):Ay(t)}const dt=Symbol.for("v-fgt"),Ao=Symbol.for("v-txt"),Gn=Symbol.for("v-cmt"),Ii=Symbol.for("v-stc"),_r=[];let st=null;function Ne(t=!1){_r.push(st=t?null:[])}function bv(){_r.pop(),st=_r[_r.length-1]||null}let Ar=1;function Ou(t){Ar+=t,t<0&&st&&(st.hasOnce=!0)}function pp(t){return t.dynamicChildren=Ar>0?st||hs:null,bv(),Ar>0&&st&&st.push(t),t}function Be(t,e,n,s,r,i){return pp(x(t,e,n,s,r,i,!0))}function gp(t,e,n,s,r){return pp(me(t,e,n,s,r,!0))}function Bi(t){return t?t.__v_isVNode===!0:!1}function Js(t,e){return t.type===e.type&&t.key===e.key}const _p=({key:t})=>t??null,Ti=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ee(t)||Fe(t)||K(t)?{i:nt,r:t,k:e,f:!!n}:t:null);function x(t,e=null,n=null,s=0,r=null,i=t===dt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&_p(e),ref:e&&Ti(e),scopeId:Kf,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:nt};return a?(sc(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Ee(n)?8:16),Ar>0&&!o&&st&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&st.push(l),l}const me=Ev;function Ev(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===Wy)&&(t=Gn),Bi(t)){const a=ws(t,e,!0);return n&&sc(a,n),Ar>0&&!i&&st&&(a.shapeFlag&6?st[st.indexOf(t)]=a:st.push(a)),a.patchFlag=-2,a}if(xv(t)&&(t=t.__vccOpts),e){e=wv(e);let{class:a,style:l}=e;a&&!Ee(a)&&(e.class=qn(a)),pe(l)&&(Jl(l)&&!H(l)&&(l=Pe({},l)),e.style=jl(l))}const o=Ee(t)?1:fp(t)?128:Oy(t)?64:pe(t)?4:K(t)?2:0;return x(t,e,n,s,r,o,i,!0)}function wv(t){return t?Jl(t)||tp(t)?Pe({},t):t:null}function ws(t,e,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:a,transition:l}=t,c=e?Sv(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&_p(c),ref:e&&e.ref?n&&i?H(i)?i.concat(Ti(e)):[i,Ti(e)]:Ti(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==dt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ws(t.ssContent),ssFallback:t.ssFallback&&ws(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&s&&Zl(u,l.clone(u)),u}function Ie(t=" ",e=0){return me(Ao,null,t,e)}function Cv(t,e){const n=me(Ii,null,t);return n.staticCount=e,n}function Hi(t="",e=!1){return e?(Ne(),gp(Gn,null,t)):me(Gn,null,t)}function Rt(t){return t==null||typeof t=="boolean"?me(Gn):H(t)?me(dt,null,t.slice()):Bi(t)?hn(t):me(Ao,null,String(t))}function hn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ws(t)}function sc(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(H(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),sc(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!tp(e)?e._ctx=nt:r===3&&nt&&(nt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else K(e)?(e={default:e,_ctx:nt},n=32):(e=String(e),s&64?(n=16,e=[Ie(e)]):n=8);t.children=e,t.shapeFlag|=n}function Sv(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=qn([e.class,s.class]));else if(r==="style")e.style=jl([e.style,s.style]);else if(vo(r)){const i=e[r],o=s[r];o&&i!==o&&!(H(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function It(t,e,n,s=null){Dt(t,e,7,[n,s])}const Iv=Xf();let Tv=0;function Rv(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||Iv,i={uid:Tv++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new wf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:sp(s,r),emitsOptions:dp(s,r),emit:null,emitted:null,propsDefaults:ce,inheritAttrs:s.inheritAttrs,ctx:ce,data:ce,props:ce,attrs:ce,slots:ce,refs:ce,setupState:ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=pv.bind(null,i),t.ce&&t.ce(i),i}let Me=null,ji,Qa;{const t=wo(),e=(n,s)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};ji=e("__VUE_INSTANCE_SETTERS__",n=>Me=n),Qa=e("__VUE_SSR_SETTERS__",n=>Pr=n)}const Qr=t=>{const e=Me;return ji(t),t.scope.on(),()=>{t.scope.off(),ji(e)}},Nu=()=>{Me&&Me.scope.off(),ji(null)};function mp(t){return t.vnode.shapeFlag&4}let Pr=!1;function Av(t,e=!1,n=!1){e&&Qa(e);const{props:s,children:r}=t.vnode,i=mp(t);ev(t,s,i,e),rv(t,r,n);const o=i?Pv(t,e):void 0;return e&&Qa(!1),o}function Pv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Ky);const{setup:s}=n;if(s){An();const r=t.setupContext=s.length>1?Nv(t):null,i=Qr(t),o=Yr(s,t,0,[t.props,r]),a=gf(o);if(Pn(),i(),(a||t.sp)&&!fr(t)&&Gf(t),a){if(o.then(Nu,Nu),e)return o.then(l=>{ku(t,l,e)}).catch(l=>{Io(l,t,0)});t.asyncDep=o}else ku(t,o,e)}else yp(t,e)}function ku(t,e,n){K(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:pe(e)&&(t.setupState=Hf(e)),yp(t,n)}let xu;function yp(t,e,n){const s=t.type;if(!t.render){if(!e&&xu&&!s.render){const r=s.template||tc(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Pe(Pe({isCustomElement:i,delimiters:a},o),l);s.render=xu(r,c)}}t.render=s.render||Pt}{const r=Qr(t);An();try{Gy(t)}finally{Pn(),r()}}}const Ov={get(t,e){return xe(t,"get",""),t[e]}};function Nv(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Ov),slots:t.slots,emit:t.emit,expose:e}}function Po(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Hf(Uf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in pr)return pr[n](t)},has(e,n){return n in e||n in pr}})):t.proxy}function kv(t,e=!0){return K(t)?t.displayName||t.name:t.name||e&&t.__name}function xv(t){return K(t)&&"__vccOpts"in t}const ft=(t,e)=>Cy(t,e,Pr);function vp(t,e,n){const s=arguments.length;return s===2?pe(e)&&!H(e)?Bi(e)?me(t,null,[e]):me(t,e):me(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Bi(n)&&(n=[n]),me(t,e,n))}const Dv="3.5.12";/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Xa;const Du=typeof window<"u"&&window.trustedTypes;if(Du)try{Xa=Du.createPolicy("vue",{createHTML:t=>t})}catch{}const bp=Xa?t=>Xa.createHTML(t):t=>t,Lv="http://www.w3.org/2000/svg",Mv="http://www.w3.org/1998/Math/MathML",Ut=typeof document<"u"?document:null,Lu=Ut&&Ut.createElement("template"),Fv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e==="svg"?Ut.createElementNS(Lv,t):e==="mathml"?Ut.createElementNS(Mv,t):n?Ut.createElement(t,{is:n}):Ut.createElement(t);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Ut.createTextNode(t),createComment:t=>Ut.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ut.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Lu.innerHTML=bp(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const a=Lu.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},$v=Symbol("_vtc");function Uv(t,e,n){const s=t[$v];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Mu=Symbol("_vod"),Bv=Symbol("_vsh"),Hv=Symbol(""),jv=/(^|;)\s*display\s*:/;function Wv(t,e,n){const s=t.style,r=Ee(n);let i=!1;if(n&&!r){if(e)if(Ee(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Ri(s,a,"")}else for(const o in e)n[o]==null&&Ri(s,o,"");for(const o in n)o==="display"&&(i=!0),Ri(s,o,n[o])}else if(r){if(e!==n){const o=s[Hv];o&&(n+=";"+o),s.cssText=n,i=jv.test(n)}}else e&&t.removeAttribute("style");Mu in t&&(t[Mu]=i?s.display:"",t[Bv]&&(s.display="none"))}const Fu=/\s*!important$/;function Ri(t,e,n){if(H(n))n.forEach(s=>Ri(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Vv(t,e);Fu.test(n)?t.setProperty(Rn(s),n.replace(Fu,""),"important"):t[s]=n}}const $u=["Webkit","Moz","ms"],pa={};function Vv(t,e){const n=pa[e];if(n)return n;let s=lt(e);if(s!=="filter"&&s in t)return pa[e]=s;s=Eo(s);for(let r=0;r<$u.length;r++){const i=$u[r]+s;if(i in t)return pa[e]=i}return e}const Uu="http://www.w3.org/1999/xlink";function Bu(t,e,n,s,r,i=Qm(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Uu,e.slice(6,e.length)):t.setAttributeNS(Uu,e,n):n==null||i&&!vf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":xt(n)?String(n):n)}function Hu(t,e,n,s,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?bp(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=vf(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function fn(t,e,n,s){t.addEventListener(e,n,s)}function qv(t,e,n,s){t.removeEventListener(e,n,s)}const ju=Symbol("_vei");function Kv(t,e,n,s,r=null){const i=t[ju]||(t[ju]={}),o=i[e];if(s&&o)o.value=s;else{const[a,l]=Gv(e);if(s){const c=i[e]=Jv(s,r);fn(t,a,c,l)}else o&&(qv(t,a,o,l),i[e]=void 0)}}const Wu=/(?:Once|Passive|Capture)$/;function Gv(t){let e;if(Wu.test(t)){e={};let s;for(;s=t.match(Wu);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Rn(t.slice(2)),e]}let ga=0;const zv=Promise.resolve(),Yv=()=>ga||(zv.then(()=>ga=0),ga=Date.now());function Jv(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Dt(Qv(s,n.value),e,5,[s])};return n.value=t,n.attached=Yv(),n}function Qv(t,e){if(H(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Vu=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Xv=(t,e,n,s,r,i)=>{const o=r==="svg";e==="class"?Uv(t,s,o):e==="style"?Wv(t,n,s):vo(e)?Ul(e)||Kv(t,e,n,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Zv(t,e,s,o))?(Hu(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Bu(t,e,s,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ee(s))?Hu(t,lt(e),s,i,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Bu(t,e,s,o))};function Zv(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Vu(e)&&K(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Vu(e)&&Ee(n)?!1:e in t}const Cs=t=>{const e=t.props["onUpdate:modelValue"]||!1;return H(e)?n=>wi(e,n):e};function eb(t){t.target.composing=!0}function qu(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Kt=Symbol("_assign"),Za={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t[Kt]=Cs(r);const i=s||r.props&&r.props.type==="number";fn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Li(a)),t[Kt](a)}),n&&fn(t,"change",()=>{t.value=t.value.trim()}),e||(fn(t,"compositionstart",eb),fn(t,"compositionend",qu),fn(t,"change",qu))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:r,number:i}},o){if(t[Kt]=Cs(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?Li(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||r&&t.value.trim()===l)||(t.value=l))}},tb={deep:!0,created(t,e,n){t[Kt]=Cs(n),fn(t,"change",()=>{const s=t._modelValue,r=Or(t),i=t.checked,o=t[Kt];if(H(s)){const a=Wl(s,r),l=a!==-1;if(i&&!l)o(s.concat(r));else if(!i&&l){const c=[...s];c.splice(a,1),o(c)}}else if(Ns(s)){const a=new Set(s);i?a.add(r):a.delete(r),o(a)}else o(Ep(t,i))})},mounted:Ku,beforeUpdate(t,e,n){t[Kt]=Cs(n),Ku(t,e,n)}};function Ku(t,{value:e,oldValue:n},s){t._modelValue=e;let r;if(H(e))r=Wl(e,s.props.value)>-1;else if(Ns(e))r=e.has(s.props.value);else{if(e===n)return;r=zr(e,Ep(t,!0))}t.checked!==r&&(t.checked=r)}const NF={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=Ns(e);fn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Li(Or(o)):Or(o));t[Kt](t.multiple?r?new Set(i):i:i[0]),t._assigning=!0,Ql(()=>{t._assigning=!1})}),t[Kt]=Cs(s)},mounted(t,{value:e}){Gu(t,e)},beforeUpdate(t,e,n){t[Kt]=Cs(n)},updated(t,{value:e}){t._assigning||Gu(t,e)}};function Gu(t,e){const n=t.multiple,s=H(e);if(!(n&&!s&&!Ns(e))){for(let r=0,i=t.options.length;r<i;r++){const o=t.options[r],a=Or(o);if(n)if(s){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=Wl(e,a)>-1}else o.selected=e.has(a);else if(zr(Or(o),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Or(t){return"_value"in t?t._value:t.value}function Ep(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const nb=["ctrl","shift","alt","meta"],sb={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>nb.some(n=>t[`${n}Key`]&&!e.includes(n))},Qs=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(r,...i)=>{for(let o=0;o<e.length;o++){const a=sb[e[o]];if(a&&a(r,e))return}return t(r,...i)})},rb={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ib=(t,e)=>{const n=t._withKeys||(t._withKeys={}),s=e.join(".");return n[s]||(n[s]=r=>{if(!("key"in r))return;const i=Rn(r.key);if(e.some(o=>o===i||rb[o]===i))return t(r)})},ob=Pe({patchProp:Xv},Fv);let zu;function ab(){return zu||(zu=ov(ob))}const lb=(...t)=>{const e=ab().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=ub(s);if(!r)return;const i=e._component;!K(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,cb(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function cb(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function ub(t){return Ee(t)?document.querySelector(t):t}var hb=!1;/*!
 * pinia v2.2.4
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */const db=Symbol();var Yu;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Yu||(Yu={}));function fb(){const t=Zm(!0),e=t.run(()=>ht({}));let n=[],s=[];const r=Uf({install(i){r._a=i,i.provide(db,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return!this._a&&!hb?s.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}var Ju={};/**
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
 */const wp={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const A=function(t,e){if(!t)throw ks(e)},ks=function(t){return new Error("Firebase Database ("+wp.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Cp=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},pb=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},rc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(d=64)),s.push(n[u],n[h],n[d],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Cp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):pb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||c==null||h==null)throw new gb;const d=i<<2|a>>4;if(s.push(d),c!==64){const p=a<<4&240|c>>2;if(s.push(p),h!==64){const _=c<<6&192|h;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class gb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Sp=function(t){const e=Cp(t);return rc.encodeByteArray(e,!0)},Wi=function(t){return Sp(t).replace(/\./g,"")},Vi=function(t){try{return rc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function _b(t){return Ip(void 0,t)}function Ip(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!mb(n)||(t[n]=Ip(t[n],e[n]));return t}function mb(t){return t!=="__proto__"}/**
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
 */function yb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const vb=()=>yb().__FIREBASE_DEFAULTS__,bb=()=>{if(typeof process>"u"||typeof Ju>"u")return;const t=Ju.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Eb=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Vi(t[1]);return e&&JSON.parse(e)},ic=()=>{try{return vb()||bb()||Eb()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Tp=t=>{var e,n;return(n=(e=ic())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},wb=t=>{const e=Tp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Rp=()=>{var t;return(t=ic())===null||t===void 0?void 0:t.config},Ap=t=>{var e;return(e=ic())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Oo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Cb(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Wi(JSON.stringify(n)),Wi(JSON.stringify(o)),""].join(".")}/**
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
 */function We(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function oc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(We())}function Sb(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ib(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Pp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Tb(){const t=We();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Op(){return wp.NODE_ADMIN===!0}function Rb(){try{return typeof indexedDB=="object"}catch{return!1}}function Ab(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const Pb="FirebaseError";class On extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Pb,Object.setPrototypeOf(this,On.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xr.prototype.create)}}class Xr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Ob(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new On(r,a,s)}}function Ob(t,e){return t.replace(Nb,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Nb=/\{\$([^}]+)}/g;/**
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
 */function Nr(t){return JSON.parse(t)}function we(t){return JSON.stringify(t)}/**
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
 */const Np=function(t){let e={},n={},s={},r="";try{const i=t.split(".");e=Nr(Vi(i[0])||""),n=Nr(Vi(i[1])||""),r=i[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:r}},kb=function(t){const e=Np(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},xb=function(t){const e=Np(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Zt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ss(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function el(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function qi(t,e,n){const s={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(s[r]=e.call(n,t[r],r,t));return s}function Ki(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Qu(i)&&Qu(o)){if(!Ki(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Qu(t){return t!==null&&typeof t=="object"}/**
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
 */function xs(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function lr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function cr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class Db{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let r=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^i&(o^a),u=1518500249):(c=i^o^a,u=1859775393):h<60?(c=i&o|a&(i|o),u=2400959708):(c=i^o^a,u=3395469782);const d=(r<<5|r>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=r,r=d}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let r=0;const i=this.buf_;let o=this.inbuf_;for(;r<n;){if(o===0)for(;r<=s;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<n;)if(i[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else for(;r<n;)if(i[o]=e[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let r=0;r<5;r++)for(let i=24;i>=0;i-=8)e[s]=this.chain_[r]>>i&255,++s;return e}}function Lb(t,e){const n=new Mb(t,e);return n.subscribe.bind(n)}class Mb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Fb(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=_a),r.error===void 0&&(r.error=_a),r.complete===void 0&&(r.complete=_a);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Fb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function _a(){}function ac(t,e){return`${t} failed: ${e} argument `}/**
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
 */const $b=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);if(r>=55296&&r<=56319){const i=r-55296;s++,A(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;r=65536+(i<<10)+o}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},No=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Ve(t){return t&&t._delegate?t._delegate:t}class zn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Fn="[DEFAULT]";/**
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
 */class Ub{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Oo;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Hb(e))try{this.getOrInitializeService({instanceIdentifier:Fn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Fn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Fn){return this.instances.has(e)}getOptions(e=Fn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Bb(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Fn){return this.component?this.component.multipleInstances?e:Fn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Bb(t){return t===Fn?void 0:t}function Hb(t){return t.instantiationMode==="EAGER"}/**
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
 */class jb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ub(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var le;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(le||(le={}));const Wb={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},Vb=le.INFO,qb={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},Kb=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=qb[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class lc{constructor(e){this.name=e,this._logLevel=Vb,this._logHandler=Kb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Wb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}const Gb=(t,e)=>e.some(n=>t instanceof n);let Xu,Zu;function zb(){return Xu||(Xu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Yb(){return Zu||(Zu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const kp=new WeakMap,tl=new WeakMap,xp=new WeakMap,ma=new WeakMap,cc=new WeakMap;function Jb(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(vn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&kp.set(n,t)}).catch(()=>{}),cc.set(e,t),e}function Qb(t){if(tl.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});tl.set(t,e)}let nl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return tl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||xp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return vn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Xb(t){nl=t(nl)}function Zb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ya(this),e,...n);return xp.set(s,e.sort?e.sort():[e]),vn(s)}:Yb().includes(t)?function(...e){return t.apply(ya(this),e),vn(kp.get(this))}:function(...e){return vn(t.apply(ya(this),e))}}function eE(t){return typeof t=="function"?Zb(t):(t instanceof IDBTransaction&&Qb(t),Gb(t,zb())?new Proxy(t,nl):t)}function vn(t){if(t instanceof IDBRequest)return Jb(t);if(ma.has(t))return ma.get(t);const e=eE(t);return e!==t&&(ma.set(t,e),cc.set(e,t)),e}const ya=t=>cc.get(t);function tE(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=vn(o);return s&&o.addEventListener("upgradeneeded",l=>{s(vn(o.result),l.oldVersion,l.newVersion,vn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),r&&l.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const nE=["get","getKey","getAll","getAllKeys","count"],sE=["put","add","delete","clear"],va=new Map;function eh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(va.get(e))return va.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=sE.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||nE.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return va.set(e,i),i}Xb(t=>({...t,get:(e,n,s)=>eh(e,n)||t.get(e,n,s),has:(e,n)=>!!eh(e,n)||t.has(e,n)}));/**
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
 */class rE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(iE(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function iE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const sl="@firebase/app",th="0.10.15";/**
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
 */const Yt=new lc("@firebase/app"),oE="@firebase/app-compat",aE="@firebase/analytics-compat",lE="@firebase/analytics",cE="@firebase/app-check-compat",uE="@firebase/app-check",hE="@firebase/auth",dE="@firebase/auth-compat",fE="@firebase/database",pE="@firebase/data-connect",gE="@firebase/database-compat",_E="@firebase/functions",mE="@firebase/functions-compat",yE="@firebase/installations",vE="@firebase/installations-compat",bE="@firebase/messaging",EE="@firebase/messaging-compat",wE="@firebase/performance",CE="@firebase/performance-compat",SE="@firebase/remote-config",IE="@firebase/remote-config-compat",TE="@firebase/storage",RE="@firebase/storage-compat",AE="@firebase/firestore",PE="@firebase/vertexai",OE="@firebase/firestore-compat",NE="firebase",kE="11.0.1";/**
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
 */const rl="[DEFAULT]",xE={[sl]:"fire-core",[oE]:"fire-core-compat",[lE]:"fire-analytics",[aE]:"fire-analytics-compat",[uE]:"fire-app-check",[cE]:"fire-app-check-compat",[hE]:"fire-auth",[dE]:"fire-auth-compat",[fE]:"fire-rtdb",[pE]:"fire-data-connect",[gE]:"fire-rtdb-compat",[_E]:"fire-fn",[mE]:"fire-fn-compat",[yE]:"fire-iid",[vE]:"fire-iid-compat",[bE]:"fire-fcm",[EE]:"fire-fcm-compat",[wE]:"fire-perf",[CE]:"fire-perf-compat",[SE]:"fire-rc",[IE]:"fire-rc-compat",[TE]:"fire-gcs",[RE]:"fire-gcs-compat",[AE]:"fire-fst",[OE]:"fire-fst-compat",[PE]:"fire-vertex","fire-js":"fire-js",[NE]:"fire-js-all"};/**
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
 */const Gi=new Map,DE=new Map,il=new Map;function nh(t,e){try{t.container.addComponent(e)}catch(n){Yt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Is(t){const e=t.name;if(il.has(e))return Yt.debug(`There were multiple attempts to register component ${e}.`),!1;il.set(e,t);for(const n of Gi.values())nh(n,t);for(const n of DE.values())nh(n,t);return!0}function uc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function At(t){return t.settings!==void 0}/**
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
 */const LE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},bn=new Xr("app","Firebase",LE);/**
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
 */class ME{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new zn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw bn.create("app-deleted",{appName:this._name})}}/**
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
 */const Ds=kE;function Dp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:rl,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw bn.create("bad-app-name",{appName:String(r)});if(n||(n=Rp()),!n)throw bn.create("no-options");const i=Gi.get(r);if(i){if(Ki(n,i.options)&&Ki(s,i.config))return i;throw bn.create("duplicate-app",{appName:r})}const o=new jb(r);for(const l of il.values())o.addComponent(l);const a=new ME(n,s,o);return Gi.set(r,a),a}function Lp(t=rl){const e=Gi.get(t);if(!e&&t===rl&&Rp())return Dp();if(!e)throw bn.create("no-app",{appName:t});return e}function En(t,e,n){var s;let r=(s=xE[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Yt.warn(a.join(" "));return}Is(new zn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const FE="firebase-heartbeat-database",$E=1,kr="firebase-heartbeat-store";let ba=null;function Mp(){return ba||(ba=tE(FE,$E,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(kr)}catch(n){console.warn(n)}}}}).catch(t=>{throw bn.create("idb-open",{originalErrorMessage:t.message})})),ba}async function UE(t){try{const n=(await Mp()).transaction(kr),s=await n.objectStore(kr).get(Fp(t));return await n.done,s}catch(e){if(e instanceof On)Yt.warn(e.message);else{const n=bn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Yt.warn(n.message)}}}async function sh(t,e){try{const s=(await Mp()).transaction(kr,"readwrite");await s.objectStore(kr).put(e,Fp(t)),await s.done}catch(n){if(n instanceof On)Yt.warn(n.message);else{const s=bn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Yt.warn(s.message)}}}function Fp(t){return`${t.name}!${t.options.appId}`}/**
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
 */const BE=1024,HE=30*24*60*60*1e3;class jE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new VE(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=rh();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=HE}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Yt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=rh(),{heartbeatsToSend:s,unsentEntries:r}=WE(this._heartbeatsCache.heartbeats),i=Wi(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Yt.warn(n),""}}}function rh(){return new Date().toISOString().substring(0,10)}function WE(t,e=BE){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),ih(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),ih(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class VE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Rb()?Ab().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await UE(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return sh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return sh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ih(t){return Wi(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function qE(t){Is(new zn("platform-logger",e=>new rE(e),"PRIVATE")),Is(new zn("heartbeat",e=>new jE(e),"PRIVATE")),En(sl,th,t),En(sl,th,"esm2017"),En("fire-js","")}qE("");var oh={};const ah="@firebase/database",lh="1.0.9";/**
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
 */let $p="";function KE(t){$p=t}/**
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
 */class GE{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),we(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Nr(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class zE{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Zt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Up=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new GE(e)}}catch{}return new zE},Bn=Up("localStorage"),YE=Up("sessionStorage");/**
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
 */const ms=new lc("@firebase/database"),JE=function(){let t=1;return function(){return t++}}(),Bp=function(t){const e=$b(t),n=new Db;n.update(e);const s=n.digest();return rc.encodeByteArray(s)},Zr=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Zr.apply(null,s):typeof s=="object"?e+=we(s):e+=s,e+=" "}return e};let mr=null,ch=!0;const QE=function(t,e){A(!e,"Can't turn on custom loggers persistently."),ms.logLevel=le.VERBOSE,mr=ms.log.bind(ms)},Le=function(...t){if(ch===!0&&(ch=!1,mr===null&&YE.get("logging_enabled")===!0&&QE()),mr){const e=Zr.apply(null,t);mr(e)}},ei=function(t){return function(...e){Le(t,...e)}},ol=function(...t){const e="FIREBASE INTERNAL ERROR: "+Zr(...t);ms.error(e)},Jt=function(...t){const e=`FIREBASE FATAL ERROR: ${Zr(...t)}`;throw ms.error(e),new Error(e)},Ge=function(...t){const e="FIREBASE WARNING: "+Zr(...t);ms.warn(e)},XE=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ge("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Hp=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},ZE=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ts="[MIN_NAME]",Yn="[MAX_NAME]",Ls=function(t,e){if(t===e)return 0;if(t===Ts||e===Yn)return-1;if(e===Ts||t===Yn)return 1;{const n=uh(t),s=uh(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},ew=function(t,e){return t===e?0:t<e?-1:1},Xs=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+we(e))},hc=function(t){if(typeof t!="object"||t===null)return we(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=we(e[s]),n+=":",n+=hc(t[e[s]]);return n+="}",n},jp=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let r=0;r<n;r+=e)r+e>n?s.push(t.substring(r,n)):s.push(t.substring(r,r+e));return s};function Je(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Wp=function(t){A(!Hp(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let r,i,o,a,l;t===0?(i=0,o=0,r=1/t===-1/0?1:0):(r=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),i=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(i%2?1:0),i=Math.floor(i/2);c.push(r?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},tw=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},nw=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function sw(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const rw=new RegExp("^-?(0*)\\d{1,10}$"),iw=-2147483648,ow=2147483647,uh=function(t){if(rw.test(t)){const e=Number(t);if(e>=iw&&e<=ow)return e}return null},Ms=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ge("Exception was thrown by user callback.",n),e},Math.floor(0))}},aw=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},yr=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class lw{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Ge(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class cw{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Le("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ge(e)}}class Ai{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ai.OWNER="owner";/**
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
 */const dc="5",Vp="v",qp="s",Kp="r",Gp="f",zp=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Yp="ls",Jp="p",al="ac",Qp="websocket",Xp="long_polling";/**
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
 */class Zp{constructor(e,n,s,r,i=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Bn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Bn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function uw(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function eg(t,e,n){A(typeof e=="string","typeof type must == string"),A(typeof n=="object","typeof params must == object");let s;if(e===Qp)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Xp)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);uw(t)&&(n.ns=t.namespace);const r=[];return Je(n,(i,o)=>{r.push(i+"="+o)}),s+r.join("&")}/**
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
 */class hw{constructor(){this.counters_={}}incrementCounter(e,n=1){Zt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return _b(this.counters_)}}/**
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
 */const Ea={},wa={};function fc(t){const e=t.toString();return Ea[e]||(Ea[e]=new hw),Ea[e]}function dw(t,e){const n=t.toString();return wa[n]||(wa[n]=e()),wa[n]}/**
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
 */class fw{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<s.length;++r)s[r]&&Ms(()=>{this.onMessage_(s[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const hh="start",pw="close",gw="pLPCommand",_w="pRTLPCB",tg="id",ng="pw",sg="ser",mw="cb",yw="seg",vw="ts",bw="d",Ew="dframe",rg=1870,ig=30,ww=rg-ig,Cw=25e3,Sw=3e4;class cs{constructor(e,n,s,r,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ei(e),this.stats_=fc(n),this.urlFn=l=>(this.appCheckToken&&(l[al]=this.appCheckToken),eg(n,Xp,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new fw(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Sw)),ZE(()=>{if(this.isClosed_)return;this.scriptTagHolder=new pc((...i)=>{const[o,a,l,c,u]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===hh)this.id=a,this.password=l;else if(o===pw)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[hh]="t",s[sg]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[mw]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Vp]=dc,this.transportSessionId&&(s[qp]=this.transportSessionId),this.lastSessionId&&(s[Yp]=this.lastSessionId),this.applicationId&&(s[Jp]=this.applicationId),this.appCheckToken&&(s[al]=this.appCheckToken),typeof location<"u"&&location.hostname&&zp.test(location.hostname)&&(s[Kp]=Gp);const r=this.urlFn(s);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){cs.forceAllow_=!0}static forceDisallow(){cs.forceDisallow_=!0}static isAvailable(){return cs.forceAllow_?!0:!cs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!tw()&&!nw()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=we(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Sp(n),r=jp(s,ww);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Ew]="t",s[tg]=e,s[ng]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=we(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class pc{constructor(e,n,s,r){this.onDisconnect=s,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=JE(),window[gw+this.uniqueCallbackIdentifier]=e,window[_w+this.uniqueCallbackIdentifier]=n,this.myIFrame=pc.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Le("frame writing exception"),a.stack&&Le(a.stack),Le(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Le("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[tg]=this.myID,e[ng]=this.myPW,e[sg]=this.currentSerial;let n=this.urlFn(e),s="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+ig+s.length<=rg;){const o=this.pendingSegs.shift();s=s+"&"+yw+r+"="+o.seg+"&"+vw+r+"="+o.ts+"&"+bw+r+"="+o.d,r++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(s,Math.floor(Cw)),i=()=>{clearTimeout(r),s()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const r=s.readyState;(!r||r==="loaded"||r==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Le("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const Iw=16384,Tw=45e3;let zi=null;typeof MozWebSocket<"u"?zi=MozWebSocket:typeof WebSocket<"u"&&(zi=WebSocket);class pt{constructor(e,n,s,r,i,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ei(this.connId),this.stats_=fc(n),this.connURL=pt.connectionURL_(n,o,a,r,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,r,i){const o={};return o[Vp]=dc,typeof location<"u"&&location.hostname&&zp.test(location.hostname)&&(o[Kp]=Gp),n&&(o[qp]=n),s&&(o[Yp]=s),r&&(o[al]=r),i&&(o[Jp]=i),eg(e,Qp,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Bn.set("previous_websocket_failure",!0);try{let s;Op(),this.mySock=new zi(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){pt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&zi!==null&&!pt.forceDisallow_}static previouslyFailed(){return Bn.isInMemoryStorage||Bn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Bn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Nr(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(A(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=we(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=jp(n,Iw);s.length>1&&this.sendString_(String(s.length));for(let r=0;r<s.length;r++)this.sendString_(s[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Tw))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}pt.responsesRequiredToBeHealthy=2;pt.healthyTimeout=3e4;/**
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
 */class xr{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[cs,pt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=pt&&pt.isAvailable();let s=n&&!pt.previouslyFailed();if(e.webSocketOnly&&(n||Ge("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[pt];else{const r=this.transports_=[];for(const i of xr.ALL_TRANSPORTS)i&&i.isAvailable()&&r.push(i);xr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}xr.globalTransportInitialized_=!1;/**
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
 */const Rw=6e4,Aw=5e3,Pw=10*1024,Ow=100*1024,Ca="t",dh="d",Nw="s",fh="r",kw="e",ph="o",gh="a",_h="n",mh="p",xw="h";class Dw{constructor(e,n,s,r,i,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ei("c:"+this.id+":"),this.transportManager_=new xr(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=yr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Ow?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Pw?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ca in e){const n=e[Ca];n===gh?this.upgradeIfSecondaryHealthy_():n===fh?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===ph&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Xs("t",e),s=Xs("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:mh,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:gh,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:_h,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Xs("t",e),s=Xs("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Xs(Ca,e);if(dh in e){const s=e[dh];if(n===xw){const r=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(n===_h){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Nw?this.onConnectionShutdown_(s):n===fh?this.onReset_(s):n===kw?ol("Server Error: "+s):n===ph?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ol("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),dc!==s&&Ge("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),yr(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Rw))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):yr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Aw))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:mh,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Bn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class og{put(e,n,s,r){}merge(e,n,s,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class ag{constructor(e){this.allowedEvents_=e,this.listeners_={},A(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let r=0;r<s.length;r++)s[r].callback.apply(s[r].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const r=this.getInitialEvent(e);r&&n.apply(s,r)}off(e,n,s){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===n&&(!s||s===r[i].context)){r.splice(i,1);return}}validateEventType_(e){A(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Yi extends ag{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!oc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Yi}getInitialEvent(e){return A(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const yh=32,vh=768;class ue{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[s]=this.pieces_[r],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Z(){return new ue("")}function z(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Sn(t){return t.pieces_.length-t.pieceNum_}function fe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ue(t.pieces_,e)}function lg(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Lw(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function cg(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function ug(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ue(e,0)}function Ce(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof ue)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let r=0;r<s.length;r++)s[r].length>0&&n.push(s[r])}return new ue(n,0)}function J(t){return t.pieceNum_>=t.pieces_.length}function je(t,e){const n=z(t),s=z(e);if(n===null)return e;if(n===s)return je(fe(t),fe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function gc(t,e){if(Sn(t)!==Sn(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function gt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Sn(t)>Sn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Mw{constructor(e,n){this.errorPrefix_=n,this.parts_=cg(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=No(this.parts_[s]);hg(this)}}function Fw(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=No(e),hg(t)}function $w(t){const e=t.parts_.pop();t.byteLength_-=No(e),t.parts_.length>0&&(t.byteLength_-=1)}function hg(t){if(t.byteLength_>vh)throw new Error(t.errorPrefix_+"has a key path longer than "+vh+" bytes ("+t.byteLength_+").");if(t.parts_.length>yh)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+yh+") or object contains a cycle "+$n(t))}function $n(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class _c extends ag{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new _c}getInitialEvent(e){return A(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Zs=1e3,Uw=60*5*1e3,bh=30*1e3,Bw=1.3,Hw=3e4,jw="server_kill",Eh=3;class Gt extends og{constructor(e,n,s,r,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Gt.nextPersistentConnectionId_++,this.log_=ei("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Zs,this.maxReconnectDelay_=Uw,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Op())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");_c.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Yi.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const r=++this.requestNumber_,i={r,a:e,b:n};this.log_(we(i)),A(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),s&&(this.requestCBHash_[r]=s)}get(e){this.initConnection_();const n=new Oo,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,s,r){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),A(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),A(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:n,query:e,tag:s};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+s+" for "+r);const i={p:s},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,c=a.s;Gt.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(r))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,r),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Zt(e,"w")){const s=Ss(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();Ge(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||xb(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=bh)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=kb(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,r=>{const i=r.s,o=r.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+r),A(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,r)&&this.connected_&&this.sendUnlisten_(s,r,e._queryObject,n)}sendUnlisten_(e,n,s,r){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";r&&(i.q=s,i.t=r),this.sendRequest(o,i)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,r){const i={p:n,d:s};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,n,s,r){this.putInternal("p",e,n,s,r)}merge(e,n,s,r){this.putInternal("m",e,n,s,r)}putInternal(e,n,s,r,i){this.initConnection_();const o={p:n,d:s};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const i=s.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+we(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ol("Unrecognized action received from server: "+we(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){A(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Zs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Zs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Hw&&(this.reconnectDelay_=Zs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Bw)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Gt.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){A(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Le("getToken() completed but was canceled"):(Le("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new Dw(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,p=>{Ge(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(jw)},i))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Ge(h),l())}}}interrupt(e){Le("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Le("Resuming connection for reason: "+e),delete this.interruptReasons_[e],el(this.interruptReasons_)&&(this.reconnectDelay_=Zs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(i=>hc(i)).join("$"):s="default";const r=this.removeListen_(e,s);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,n){const s=new ue(e).toString();let r;if(this.listens.has(s)){const i=this.listens.get(s);r=i.get(n),i.delete(n),i.size===0&&this.listens.delete(s)}else r=void 0;return r}onAuthRevoked_(e,n){Le("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Eh&&(this.reconnectDelay_=bh,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Le("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Eh&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+$p.replace(/\./g,"-")]=1,oc()?e["framework.cordova"]=1:Pp()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Yi.getInstance().currentlyOnline();return el(this.interruptReasons_)&&e}}Gt.nextPersistentConnectionId_=0;Gt.nextConnectionId_=0;/**
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
 */class ko{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new Y(Ts,e),r=new Y(Ts,n);return this.compare(s,r)!==0}minPost(){return Y.MIN}}/**
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
 */let mi;class dg extends ko{static get __EMPTY_NODE(){return mi}static set __EMPTY_NODE(e){mi=e}compare(e,n){return Ls(e.name,n.name)}isDefinedOn(e){throw ks("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Y.MIN}maxPost(){return new Y(Yn,mi)}makePost(e,n){return A(typeof e=="string","KeyIndex indexValue must always be a string."),new Y(e,mi)}toString(){return".key"}}const ys=new dg;/**
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
 */class yi{constructor(e,n,s,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Re{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??Re.RED,this.left=r??Ke.EMPTY_NODE,this.right=i??Ke.EMPTY_NODE}copy(e,n,s,r,i){return new Re(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return i<0?r=r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ke.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,r;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ke.EMPTY_NODE;r=s.right.min_(),s=s.copy(r.key,r.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Re.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Re.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Re.RED=!0;Re.BLACK=!1;class Ww{copy(e,n,s,r,i){return this}insert(e,n,s){return new Re(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ke{constructor(e,n=Ke.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ke(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Re.BLACK,null,null))}remove(e){return new Ke(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Re.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,r=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return r?r.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(r=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new yi(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new yi(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new yi(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new yi(this.root_,null,this.comparator_,!0,e)}}Ke.EMPTY_NODE=new Ww;/**
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
 */function Vw(t,e){return Ls(t.name,e.name)}function mc(t,e){return Ls(t,e)}/**
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
 */let ll;function qw(t){ll=t}const fg=function(t){return typeof t=="number"?"number:"+Wp(t):"string:"+t},pg=function(t){if(t.isLeafNode()){const e=t.val();A(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Zt(e,".sv"),"Priority must be a string or number.")}else A(t===ll||t.isEmpty(),"priority of unexpected type.");A(t===ll||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let wh;class Te{constructor(e,n=Te.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,A(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),pg(this.priorityNode_)}static set __childrenNodeConstructor(e){wh=e}static get __childrenNodeConstructor(){return wh}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Te(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Te.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return J(e)?this:z(e)===".priority"?this.priorityNode_:Te.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Te.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=z(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(A(s!==".priority"||Sn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Te.__childrenNodeConstructor.EMPTY_NODE.updateChild(fe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+fg(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Wp(this.value_):e+=this.value_,this.lazyHash_=Bp(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Te.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Te.__childrenNodeConstructor?-1:(A(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,r=Te.VALUE_TYPE_ORDER.indexOf(n),i=Te.VALUE_TYPE_ORDER.indexOf(s);return A(r>=0,"Unknown leaf type: "+n),A(i>=0,"Unknown leaf type: "+s),r===i?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Te.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let gg,_g;function Kw(t){gg=t}function Gw(t){_g=t}class zw extends ko{compare(e,n){const s=e.node.getPriority(),r=n.node.getPriority(),i=s.compareTo(r);return i===0?Ls(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Y.MIN}maxPost(){return new Y(Yn,new Te("[PRIORITY-POST]",_g))}makePost(e,n){const s=gg(e);return new Y(n,new Te("[PRIORITY-POST]",s))}toString(){return".priority"}}const ve=new zw;/**
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
 */const Yw=Math.log(2);class Jw{constructor(e){const n=i=>parseInt(Math.log(i)/Yw,10),s=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const r=s(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ji=function(t,e,n,s){t.sort(e);const r=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new Re(d,h.node,Re.BLACK,null,null);{const p=parseInt(u/2,10)+l,_=r(l,p),m=r(p+1,c);return h=t[p],d=n?n(h):h,new Re(d,h.node,Re.BLACK,_,m)}},i=function(l){let c=null,u=null,h=t.length;const d=function(_,m){const b=h-_,T=h;h-=_;const R=r(b+1,T),P=t[b],k=n?n(P):P;p(new Re(k,P.node,m,null,R))},p=function(_){c?(c.left=_,c=_):(u=_,c=_)};for(let _=0;_<l.count;++_){const m=l.nextBitIsOne(),b=Math.pow(2,l.count-(_+1));m?d(b,Re.BLACK):(d(b,Re.BLACK),d(b,Re.RED))}return u},o=new Jw(t.length),a=i(o);return new Ke(s||e,a)};/**
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
 */let Sa;const os={};class jt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return A(os&&ve,"ChildrenNode.ts has not been loaded"),Sa=Sa||new jt({".priority":os},{".priority":ve}),Sa}get(e){const n=Ss(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ke?n:null}hasIndex(e){return Zt(this.indexSet_,e.toString())}addIndex(e,n){A(e!==ys,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let r=!1;const i=n.getIterator(Y.Wrap);let o=i.getNext();for(;o;)r=r||e.isDefinedOn(o.node),s.push(o),o=i.getNext();let a;r?a=Ji(s,e.getCompare()):a=os;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new jt(u,c)}addToIndexes(e,n){const s=qi(this.indexes_,(r,i)=>{const o=Ss(this.indexSet_,i);if(A(o,"Missing index implementation for "+i),r===os)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Y.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Ji(a,o.getCompare())}else return os;else{const a=n.get(e.name);let l=r;return a&&(l=l.remove(new Y(e.name,a))),l.insert(e,e.node)}});return new jt(s,this.indexSet_)}removeFromIndexes(e,n){const s=qi(this.indexes_,r=>{if(r===os)return r;{const i=n.get(e.name);return i?r.remove(new Y(e.name,i)):r}});return new jt(s,this.indexSet_)}}/**
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
 */let er;class W{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&pg(this.priorityNode_),this.children_.isEmpty()&&A(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return er||(er=new W(new Ke(mc),null,jt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||er}updatePriority(e){return this.children_.isEmpty()?this:new W(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?er:n}}getChild(e){const n=z(e);return n===null?this:this.getImmediateChild(n).getChild(fe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(A(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new Y(e,n);let r,i;n.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(s,this.children_)):(r=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(s,this.children_));const o=r.isEmpty()?er:this.priorityNode_;return new W(r,o,i)}}updateChild(e,n){const s=z(e);if(s===null)return n;{A(z(e)!==".priority"||Sn(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(s).updateChild(fe(e),n);return this.updateImmediateChild(s,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,r=0,i=!0;if(this.forEachChild(ve,(o,a)=>{n[o]=a.val(e),s++,i&&W.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):i=!1}),!e&&i&&r<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+fg(this.getPriority().val())+":"),this.forEachChild(ve,(n,s)=>{const r=s.hash();r!==""&&(e+=":"+n+":"+r)}),this.lazyHash_=e===""?"":Bp(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const r=this.resolveIndex_(s);if(r){const i=r.getPredecessorKey(new Y(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Y(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Y(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,Y.Wrap);let i=r.peek();for(;i!=null&&n.compare(i,e)<0;)r.getNext(),i=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,Y.Wrap);let i=r.peek();for(;i!=null&&n.compare(i,e)>0;)r.getNext(),i=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ti?-1:0}withIndex(e){if(e===ys||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new W(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ys||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(ve),r=n.getIterator(ve);let i=s.getNext(),o=r.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=s.getNext(),o=r.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ys?null:this.indexMap_.get(e.toString())}}W.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Qw extends W{constructor(){super(new Ke(mc),W.EMPTY_NODE,jt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return W.EMPTY_NODE}isEmpty(){return!1}}const ti=new Qw;Object.defineProperties(Y,{MIN:{value:new Y(Ts,W.EMPTY_NODE)},MAX:{value:new Y(Yn,ti)}});dg.__EMPTY_NODE=W.EMPTY_NODE;Te.__childrenNodeConstructor=W;qw(ti);Gw(ti);/**
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
 */const Xw=!0;function Ae(t,e=null){if(t===null)return W.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),A(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Te(n,Ae(e))}if(!(t instanceof Array)&&Xw){const n=[];let s=!1;if(Je(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ae(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new Y(o,l)))}}),n.length===0)return W.EMPTY_NODE;const i=Ji(n,Vw,o=>o.name,mc);if(s){const o=Ji(n,ve.getCompare());return new W(i,Ae(e),new jt({".priority":o},{".priority":ve}))}else return new W(i,Ae(e),jt.Default)}else{let n=W.EMPTY_NODE;return Je(t,(s,r)=>{if(Zt(t,s)&&s.substring(0,1)!=="."){const i=Ae(r);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(s,i))}}),n.updatePriority(Ae(e))}}Kw(Ae);/**
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
 */class Zw extends ko{constructor(e){super(),this.indexPath_=e,A(!J(e)&&z(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),r=this.extractChild(n.node),i=s.compareTo(r);return i===0?Ls(e.name,n.name):i}makePost(e,n){const s=Ae(e),r=W.EMPTY_NODE.updateChild(this.indexPath_,s);return new Y(n,r)}maxPost(){const e=W.EMPTY_NODE.updateChild(this.indexPath_,ti);return new Y(Yn,e)}toString(){return cg(this.indexPath_,0).join("/")}}/**
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
 */class eC extends ko{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Ls(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Y.MIN}maxPost(){return Y.MAX}makePost(e,n){const s=Ae(e);return new Y(n,s)}toString(){return".value"}}const tC=new eC;/**
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
 */function mg(t){return{type:"value",snapshotNode:t}}function Rs(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Dr(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Lr(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function nC(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class yc{constructor(e){this.index_=e}updateChild(e,n,s,r,i,o){A(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(r).equals(s.getChild(r))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Dr(n,a)):A(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Rs(n,s)):o.trackChildChange(Lr(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(ve,(r,i)=>{n.hasChild(r)||s.trackChildChange(Dr(r,i))}),n.isLeafNode()||n.forEachChild(ve,(r,i)=>{if(e.hasChild(r)){const o=e.getImmediateChild(r);o.equals(i)||s.trackChildChange(Lr(r,i,o))}else s.trackChildChange(Rs(r,i))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?W.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Mr{constructor(e){this.indexedFilter_=new yc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Mr.getStartPost_(e),this.endPost_=Mr.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,r,i,o){return this.matches(new Y(n,s))||(s=W.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,r,i,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=W.EMPTY_NODE);let r=n.withIndex(this.index_);r=r.updatePriority(W.EMPTY_NODE);const i=this;return n.forEachChild(ve,(o,a)=>{i.matches(new Y(o,a))||(r=r.updateImmediateChild(o,W.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class sC{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Mr(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,r,i,o){return this.rangedFilter_.matches(new Y(n,s))||(s=W.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,r,i,o):this.fullLimitUpdateChild_(e,n,s,i,o)}updateFullNode(e,n,s){let r;if(n.isLeafNode()||n.isEmpty())r=W.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){r=W.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const a=i.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))r=r.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{r=n.withIndex(this.index_),r=r.updatePriority(W.EMPTY_NODE);let i;this.reverse_?i=r.getReverseIterator(this.index_):i=r.getIterator(this.index_);let o=0;for(;i.hasNext();){const a=i.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:r=r.updateImmediateChild(a.name,W.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,r,i){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,p)=>h(p,d)}else o=this.index_.getCompare();const a=e;A(a.numChildren()===this.limit_,"");const l=new Y(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let d=r.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=r.getChildAfterChild(this.index_,d,this.reverse_);const p=d==null?1:o(d,l);if(u&&!s.isEmpty()&&p>=0)return i!=null&&i.trackChildChange(Lr(n,s,h)),a.updateImmediateChild(n,s);{i!=null&&i.trackChildChange(Dr(n,h));const m=a.updateImmediateChild(n,W.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(i!=null&&i.trackChildChange(Rs(d.name,d.node)),m.updateImmediateChild(d.name,d.node)):m}}else return s.isEmpty()?e:u&&o(c,l)>=0?(i!=null&&(i.trackChildChange(Dr(c.name,c.node)),i.trackChildChange(Rs(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,W.EMPTY_NODE)):e}}/**
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
 */class vc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ve}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return A(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return A(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ts}hasEnd(){return this.endSet_}getIndexEndValue(){return A(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return A(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Yn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return A(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ve}copy(){const e=new vc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function rC(t){return t.loadsAllData()?new yc(t.getIndex()):t.hasLimit()?new sC(t):new Mr(t)}function Ch(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ve?n="$priority":t.index_===tC?n="$value":t.index_===ys?n="$key":(A(t.index_ instanceof Zw,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=we(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=we(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+we(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=we(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+we(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Sh(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ve&&(e.i=t.index_.toString()),e}/**
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
 */class Qi extends og{constructor(e,n,s,r){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=r,this.log_=ei("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(A(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=Qi.getListenId_(e,s),a={};this.listens_[o]=a;const l=Ch(e._queryParams);this.restRequest_(i+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(i,h,!1,s),Ss(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",r(d,null)}})}unlisten(e,n){const s=Qi.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Ch(e._queryParams),s=e._path.toString(),r=new Oo;return this.restRequest_(s+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(s,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,i])=>{r&&r.accessToken&&(n.auth=r.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+xs(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Nr(a.responseText)}catch{Ge("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&Ge("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class iC{constructor(){this.rootNode_=W.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Xi(){return{value:null,children:new Map}}function yg(t,e,n){if(J(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=z(e);t.children.has(s)||t.children.set(s,Xi());const r=t.children.get(s);e=fe(e),yg(r,e,n)}}function cl(t,e,n){t.value!==null?n(e,t.value):oC(t,(s,r)=>{const i=new ue(e.toString()+"/"+s);cl(r,i,n)})}function oC(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class aC{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Je(this.last_,(s,r)=>{n[s]=n[s]-r}),this.last_=e,n}}/**
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
 */const Ih=10*1e3,lC=30*1e3,cC=5*60*1e3;class uC{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new aC(e);const s=Ih+(lC-Ih)*Math.random();yr(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Je(e,(r,i)=>{i>0&&Zt(this.statsToReport_,r)&&(n[r]=i,s=!0)}),s&&this.server_.reportStats(n),yr(this.reportStats_.bind(this),Math.floor(Math.random()*2*cC))}}/**
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
 */var _t;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(_t||(_t={}));function vg(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function bc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ec(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Zi{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=_t.ACK_USER_WRITE,this.source=vg()}operationForChild(e){if(J(this.path)){if(this.affectedTree.value!=null)return A(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ue(e));return new Zi(Z(),n,this.revert)}}else return A(z(this.path)===e,"operationForChild called for unrelated child."),new Zi(fe(this.path),this.affectedTree,this.revert)}}/**
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
 */class Fr{constructor(e,n){this.source=e,this.path=n,this.type=_t.LISTEN_COMPLETE}operationForChild(e){return J(this.path)?new Fr(this.source,Z()):new Fr(this.source,fe(this.path))}}/**
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
 */class Jn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=_t.OVERWRITE}operationForChild(e){return J(this.path)?new Jn(this.source,Z(),this.snap.getImmediateChild(e)):new Jn(this.source,fe(this.path),this.snap)}}/**
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
 */class $r{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=_t.MERGE}operationForChild(e){if(J(this.path)){const n=this.children.subtree(new ue(e));return n.isEmpty()?null:n.value?new Jn(this.source,Z(),n.value):new $r(this.source,Z(),n)}else return A(z(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new $r(this.source,fe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class In{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(J(e))return this.isFullyInitialized()&&!this.filtered_;const n=z(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class hC{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function dC(t,e,n,s){const r=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(nC(o.childName,o.snapshotNode))}),tr(t,r,"child_removed",e,s,n),tr(t,r,"child_added",e,s,n),tr(t,r,"child_moved",i,s,n),tr(t,r,"child_changed",e,s,n),tr(t,r,"value",e,s,n),r}function tr(t,e,n,s,r,i){const o=s.filter(a=>a.type===n);o.sort((a,l)=>pC(t,a,l)),o.forEach(a=>{const l=fC(t,a,i);r.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function fC(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function pC(t,e,n){if(e.childName==null||n.childName==null)throw ks("Should only compare child_ events.");const s=new Y(e.childName,e.snapshotNode),r=new Y(n.childName,n.snapshotNode);return t.index_.compare(s,r)}/**
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
 */function xo(t,e){return{eventCache:t,serverCache:e}}function vr(t,e,n,s){return xo(new In(e,n,s),t.serverCache)}function bg(t,e,n,s){return xo(t.eventCache,new In(e,n,s))}function eo(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Qn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Ia;const gC=()=>(Ia||(Ia=new Ke(ew)),Ia);class _e{constructor(e,n=gC()){this.value=e,this.children=n}static fromObject(e){let n=new _e(null);return Je(e,(s,r)=>{n=n.set(new ue(s),r)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Z(),value:this.value};if(J(e))return null;{const s=z(e),r=this.children.get(s);if(r!==null){const i=r.findRootMostMatchingPathAndValue(fe(e),n);return i!=null?{path:Ce(new ue(s),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(J(e))return this;{const n=z(e),s=this.children.get(n);return s!==null?s.subtree(fe(e)):new _e(null)}}set(e,n){if(J(e))return new _e(n,this.children);{const s=z(e),i=(this.children.get(s)||new _e(null)).set(fe(e),n),o=this.children.insert(s,i);return new _e(this.value,o)}}remove(e){if(J(e))return this.children.isEmpty()?new _e(null):new _e(null,this.children);{const n=z(e),s=this.children.get(n);if(s){const r=s.remove(fe(e));let i;return r.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,r),this.value===null&&i.isEmpty()?new _e(null):new _e(this.value,i)}else return this}}get(e){if(J(e))return this.value;{const n=z(e),s=this.children.get(n);return s?s.get(fe(e)):null}}setTree(e,n){if(J(e))return n;{const s=z(e),i=(this.children.get(s)||new _e(null)).setTree(fe(e),n);let o;return i.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,i),new _e(this.value,o)}}fold(e){return this.fold_(Z(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((r,i)=>{s[r]=i.fold_(Ce(e,r),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Z(),n)}findOnPath_(e,n,s){const r=this.value?s(n,this.value):!1;if(r)return r;if(J(e))return null;{const i=z(e),o=this.children.get(i);return o?o.findOnPath_(fe(e),Ce(n,i),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Z(),n)}foreachOnPath_(e,n,s){if(J(e))return this;{this.value&&s(n,this.value);const r=z(e),i=this.children.get(r);return i?i.foreachOnPath_(fe(e),Ce(n,r),s):new _e(null)}}foreach(e){this.foreach_(Z(),e)}foreach_(e,n){this.children.inorderTraversal((s,r)=>{r.foreach_(Ce(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class yt{constructor(e){this.writeTree_=e}static empty(){return new yt(new _e(null))}}function br(t,e,n){if(J(e))return new yt(new _e(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const r=s.path;let i=s.value;const o=je(r,e);return i=i.updateChild(o,n),new yt(t.writeTree_.set(r,i))}else{const r=new _e(n),i=t.writeTree_.setTree(e,r);return new yt(i)}}}function Th(t,e,n){let s=t;return Je(n,(r,i)=>{s=br(s,Ce(e,r),i)}),s}function Rh(t,e){if(J(e))return yt.empty();{const n=t.writeTree_.setTree(e,new _e(null));return new yt(n)}}function ul(t,e){return ts(t,e)!=null}function ts(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(je(n.path,e)):null}function Ah(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ve,(s,r)=>{e.push(new Y(s,r))}):t.writeTree_.children.inorderTraversal((s,r)=>{r.value!=null&&e.push(new Y(s,r.value))}),e}function wn(t,e){if(J(e))return t;{const n=ts(t,e);return n!=null?new yt(new _e(n)):new yt(t.writeTree_.subtree(e))}}function hl(t){return t.writeTree_.isEmpty()}function As(t,e){return Eg(Z(),t.writeTree_,e)}function Eg(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((r,i)=>{r===".priority"?(A(i.value!==null,"Priority writes must always be leaf nodes"),s=i.value):n=Eg(Ce(t,r),i,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Ce(t,".priority"),s)),n}}/**
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
 */function Do(t,e){return Ig(e,t)}function _C(t,e,n,s,r){A(s>t.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:r}),r&&(t.visibleWrites=br(t.visibleWrites,e,n)),t.lastWriteId=s}function mC(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function yC(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);A(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let r=s.visible,i=!1,o=t.allWrites.length-1;for(;r&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&vC(a,s.path)?r=!1:gt(s.path,a.path)&&(i=!0)),o--}if(r){if(i)return bC(t),!0;if(s.snap)t.visibleWrites=Rh(t.visibleWrites,s.path);else{const a=s.children;Je(a,l=>{t.visibleWrites=Rh(t.visibleWrites,Ce(s.path,l))})}return!0}else return!1}function vC(t,e){if(t.snap)return gt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&gt(Ce(t.path,n),e))return!0;return!1}function bC(t){t.visibleWrites=wg(t.allWrites,EC,Z()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function EC(t){return t.visible}function wg(t,e,n){let s=yt.empty();for(let r=0;r<t.length;++r){const i=t[r];if(e(i)){const o=i.path;let a;if(i.snap)gt(n,o)?(a=je(n,o),s=br(s,a,i.snap)):gt(o,n)&&(a=je(o,n),s=br(s,Z(),i.snap.getChild(a)));else if(i.children){if(gt(n,o))a=je(n,o),s=Th(s,a,i.children);else if(gt(o,n))if(a=je(o,n),J(a))s=Th(s,Z(),i.children);else{const l=Ss(i.children,z(a));if(l){const c=l.getChild(fe(a));s=br(s,Z(),c)}}}else throw ks("WriteRecord should have .snap or .children")}}return s}function Cg(t,e,n,s,r){if(!s&&!r){const i=ts(t.visibleWrites,e);if(i!=null)return i;{const o=wn(t.visibleWrites,e);if(hl(o))return n;if(n==null&&!ul(o,Z()))return null;{const a=n||W.EMPTY_NODE;return As(o,a)}}}else{const i=wn(t.visibleWrites,e);if(!r&&hl(i))return n;if(!r&&n==null&&!ul(i,Z()))return null;{const o=function(c){return(c.visible||r)&&(!s||!~s.indexOf(c.writeId))&&(gt(c.path,e)||gt(e,c.path))},a=wg(t.allWrites,o,e),l=n||W.EMPTY_NODE;return As(a,l)}}}function wC(t,e,n){let s=W.EMPTY_NODE;const r=ts(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(ve,(i,o)=>{s=s.updateImmediateChild(i,o)}),s;if(n){const i=wn(t.visibleWrites,e);return n.forEachChild(ve,(o,a)=>{const l=As(wn(i,new ue(o)),a);s=s.updateImmediateChild(o,l)}),Ah(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const i=wn(t.visibleWrites,e);return Ah(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function CC(t,e,n,s,r){A(s||r,"Either existingEventSnap or existingServerSnap must exist");const i=Ce(e,n);if(ul(t.visibleWrites,i))return null;{const o=wn(t.visibleWrites,i);return hl(o)?r.getChild(n):As(o,r.getChild(n))}}function SC(t,e,n,s){const r=Ce(e,n),i=ts(t.visibleWrites,r);if(i!=null)return i;if(s.isCompleteForChild(n)){const o=wn(t.visibleWrites,r);return As(o,s.getNode().getImmediateChild(n))}else return null}function IC(t,e){return ts(t.visibleWrites,e)}function TC(t,e,n,s,r,i,o){let a;const l=wn(t.visibleWrites,e),c=ts(l,Z());if(c!=null)a=c;else if(n!=null)a=As(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=i?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let p=d.getNext();for(;p&&u.length<r;)h(p,s)!==0&&u.push(p),p=d.getNext();return u}else return[]}function RC(){return{visibleWrites:yt.empty(),allWrites:[],lastWriteId:-1}}function to(t,e,n,s){return Cg(t.writeTree,t.treePath,e,n,s)}function wc(t,e){return wC(t.writeTree,t.treePath,e)}function Ph(t,e,n,s){return CC(t.writeTree,t.treePath,e,n,s)}function no(t,e){return IC(t.writeTree,Ce(t.treePath,e))}function AC(t,e,n,s,r,i){return TC(t.writeTree,t.treePath,e,n,s,r,i)}function Cc(t,e,n){return SC(t.writeTree,t.treePath,e,n)}function Sg(t,e){return Ig(Ce(t.treePath,e),t.writeTree)}function Ig(t,e){return{treePath:t,writeTree:e}}/**
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
 */class PC{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;A(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),A(s!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(s);if(r){const i=r.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(s,Lr(s,e.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(s,Dr(s,r.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(s,Rs(s,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(s,Lr(s,e.snapshotNode,r.oldSnap));else throw ks("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class OC{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Tg=new OC;class Sc{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new In(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Cc(this.writes_,e,s)}}getChildAfterChild(e,n,s){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Qn(this.viewCache_),i=AC(this.writes_,r,n,1,s,e);return i.length===0?null:i[0]}}/**
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
 */function NC(t){return{filter:t}}function kC(t,e){A(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),A(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function xC(t,e,n,s,r){const i=new PC;let o,a;if(n.type===_t.OVERWRITE){const c=n;c.source.fromUser?o=dl(t,e,c.path,c.snap,s,r,i):(A(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!J(c.path),o=so(t,e,c.path,c.snap,s,r,a,i))}else if(n.type===_t.MERGE){const c=n;c.source.fromUser?o=LC(t,e,c.path,c.children,s,r,i):(A(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=fl(t,e,c.path,c.children,s,r,a,i))}else if(n.type===_t.ACK_USER_WRITE){const c=n;c.revert?o=$C(t,e,c.path,s,r,i):o=MC(t,e,c.path,c.affectedTree,s,r,i)}else if(n.type===_t.LISTEN_COMPLETE)o=FC(t,e,n.path,s,i);else throw ks("Unknown operation type: "+n.type);const l=i.getChanges();return DC(e,o,l),{viewCache:o,changes:l}}function DC(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const r=s.getNode().isLeafNode()||s.getNode().isEmpty(),i=eo(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!s.getNode().equals(i)||!s.getNode().getPriority().equals(i.getPriority()))&&n.push(mg(eo(e)))}}function Rg(t,e,n,s,r,i){const o=e.eventCache;if(no(s,n)!=null)return e;{let a,l;if(J(n))if(A(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Qn(e),u=c instanceof W?c:W.EMPTY_NODE,h=wc(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,i)}else{const c=to(s,Qn(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,i)}else{const c=z(n);if(c===".priority"){A(Sn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=Ph(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=fe(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=Ph(s,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=Cc(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,r,i):a=o.getNode()}}return vr(e,a,o.isFullyInitialized()||J(n),t.filter.filtersNodes())}}function so(t,e,n,s,r,i,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(J(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),p,null)}else{const p=z(n);if(!l.isCompleteForPath(n)&&Sn(n)>1)return e;const _=fe(n),b=l.getNode().getImmediateChild(p).updateChild(_,s);p===".priority"?c=u.updatePriority(l.getNode(),b):c=u.updateChild(l.getNode(),p,b,_,Tg,null)}const h=bg(e,c,l.isFullyInitialized()||J(n),u.filtersNodes()),d=new Sc(r,h,i);return Rg(t,h,n,r,d,a)}function dl(t,e,n,s,r,i,o){const a=e.eventCache;let l,c;const u=new Sc(r,e,i);if(J(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=vr(e,c,!0,t.filter.filtersNodes());else{const h=z(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=vr(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=fe(n),p=a.getNode().getImmediateChild(h);let _;if(J(d))_=s;else{const m=u.getCompleteChild(h);m!=null?lg(d)===".priority"&&m.getChild(ug(d)).isEmpty()?_=m:_=m.updateChild(d,s):_=W.EMPTY_NODE}if(p.equals(_))l=e;else{const m=t.filter.updateChild(a.getNode(),h,_,d,u,o);l=vr(e,m,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Oh(t,e){return t.eventCache.isCompleteForChild(e)}function LC(t,e,n,s,r,i,o){let a=e;return s.foreach((l,c)=>{const u=Ce(n,l);Oh(e,z(u))&&(a=dl(t,a,u,c,r,i,o))}),s.foreach((l,c)=>{const u=Ce(n,l);Oh(e,z(u))||(a=dl(t,a,u,c,r,i,o))}),a}function Nh(t,e,n){return n.foreach((s,r)=>{e=e.updateChild(s,r)}),e}function fl(t,e,n,s,r,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;J(n)?c=s:c=new _e(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const p=e.serverCache.getNode().getImmediateChild(h),_=Nh(t,p,d);l=so(t,l,new ue(h),_,r,i,o,a)}}),c.children.inorderTraversal((h,d)=>{const p=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!p){const _=e.serverCache.getNode().getImmediateChild(h),m=Nh(t,_,d);l=so(t,l,new ue(h),m,r,i,o,a)}}),l}function MC(t,e,n,s,r,i,o){if(no(r,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(J(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return so(t,e,n,l.getNode().getChild(n),r,i,a,o);if(J(n)){let c=new _e(null);return l.getNode().forEachChild(ys,(u,h)=>{c=c.set(new ue(u),h)}),fl(t,e,n,c,r,i,a,o)}else return e}else{let c=new _e(null);return s.foreach((u,h)=>{const d=Ce(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),fl(t,e,n,c,r,i,a,o)}}function FC(t,e,n,s,r){const i=e.serverCache,o=bg(e,i.getNode(),i.isFullyInitialized()||J(n),i.isFiltered());return Rg(t,o,n,s,Tg,r)}function $C(t,e,n,s,r,i){let o;if(no(s,n)!=null)return e;{const a=new Sc(s,e,r),l=e.eventCache.getNode();let c;if(J(n)||z(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=to(s,Qn(e));else{const h=e.serverCache.getNode();A(h instanceof W,"serverChildren would be complete if leaf node"),u=wc(s,h)}u=u,c=t.filter.updateFullNode(l,u,i)}else{const u=z(n);let h=Cc(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,fe(n),a,i):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,W.EMPTY_NODE,fe(n),a,i):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=to(s,Qn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,i)))}return o=e.serverCache.isFullyInitialized()||no(s,Z())!=null,vr(e,c,o,t.filter.filtersNodes())}}/**
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
 */class UC{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,r=new yc(s.getIndex()),i=rC(s);this.processor_=NC(i);const o=n.serverCache,a=n.eventCache,l=r.updateFullNode(W.EMPTY_NODE,o.getNode(),null),c=i.updateFullNode(W.EMPTY_NODE,a.getNode(),null),u=new In(l,o.isFullyInitialized(),r.filtersNodes()),h=new In(c,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=xo(h,u),this.eventGenerator_=new hC(this.query_)}get query(){return this.query_}}function BC(t){return t.viewCache_.serverCache.getNode()}function HC(t){return eo(t.viewCache_)}function jC(t,e){const n=Qn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!J(e)&&!n.getImmediateChild(z(e)).isEmpty())?n.getChild(e):null}function kh(t){return t.eventRegistrations_.length===0}function WC(t,e){t.eventRegistrations_.push(e)}function xh(t,e,n){const s=[];if(n){A(e==null,"A cancel should cancel all event registrations.");const r=t.query._path;t.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(n,r);o&&s.push(o)})}if(e){let r=[];for(let i=0;i<t.eventRegistrations_.length;++i){const o=t.eventRegistrations_[i];if(!o.matches(e))r.push(o);else if(e.hasAnyCallback()){r=r.concat(t.eventRegistrations_.slice(i+1));break}}t.eventRegistrations_=r}else t.eventRegistrations_=[];return s}function Dh(t,e,n,s){e.type===_t.MERGE&&e.source.queryId!==null&&(A(Qn(t.viewCache_),"We should always have a full cache before handling merges"),A(eo(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,i=xC(t.processor_,r,e,n,s);return kC(t.processor_,i.viewCache),A(i.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,Ag(t,i.changes,i.viewCache.eventCache.getNode(),null)}function VC(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ve,(i,o)=>{s.push(Rs(i,o))}),n.isFullyInitialized()&&s.push(mg(n.getNode())),Ag(t,s,n.getNode(),e)}function Ag(t,e,n,s){const r=s?[s]:t.eventRegistrations_;return dC(t.eventGenerator_,e,n,r)}/**
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
 */let ro;class Pg{constructor(){this.views=new Map}}function qC(t){A(!ro,"__referenceConstructor has already been defined"),ro=t}function KC(){return A(ro,"Reference.ts has not been loaded"),ro}function GC(t){return t.views.size===0}function Ic(t,e,n,s){const r=e.source.queryId;if(r!==null){const i=t.views.get(r);return A(i!=null,"SyncTree gave us an op for an invalid query."),Dh(i,e,n,s)}else{let i=[];for(const o of t.views.values())i=i.concat(Dh(o,e,n,s));return i}}function Og(t,e,n,s,r){const i=e._queryIdentifier,o=t.views.get(i);if(!o){let a=to(n,r?s:null),l=!1;a?l=!0:s instanceof W?(a=wc(n,s),l=!1):(a=W.EMPTY_NODE,l=!1);const c=xo(new In(a,l,!1),new In(s,r,!1));return new UC(e,c)}return o}function zC(t,e,n,s,r,i){const o=Og(t,e,s,r,i);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),WC(o,n),VC(o,n)}function YC(t,e,n,s){const r=e._queryIdentifier,i=[];let o=[];const a=Tn(t);if(r==="default")for(const[l,c]of t.views.entries())o=o.concat(xh(c,n,s)),kh(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||i.push(c.query));else{const l=t.views.get(r);l&&(o=o.concat(xh(l,n,s)),kh(l)&&(t.views.delete(r),l.query._queryParams.loadsAllData()||i.push(l.query)))}return a&&!Tn(t)&&i.push(new(KC())(e._repo,e._path)),{removed:i,events:o}}function Ng(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Cn(t,e){let n=null;for(const s of t.views.values())n=n||jC(s,e);return n}function kg(t,e){if(e._queryParams.loadsAllData())return Lo(t);{const s=e._queryIdentifier;return t.views.get(s)}}function xg(t,e){return kg(t,e)!=null}function Tn(t){return Lo(t)!=null}function Lo(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let io;function JC(t){A(!io,"__referenceConstructor has already been defined"),io=t}function QC(){return A(io,"Reference.ts has not been loaded"),io}let XC=1;class Lh{constructor(e){this.listenProvider_=e,this.syncPointTree_=new _e(null),this.pendingWriteTree_=RC(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Dg(t,e,n,s,r){return _C(t.pendingWriteTree_,e,n,s,r),r?si(t,new Jn(vg(),e,n)):[]}function Hn(t,e,n=!1){const s=mC(t.pendingWriteTree_,e);if(yC(t.pendingWriteTree_,e)){let i=new _e(null);return s.snap!=null?i=i.set(Z(),!0):Je(s.children,o=>{i=i.set(new ue(o),!0)}),si(t,new Zi(s.path,i,n))}else return[]}function ni(t,e,n){return si(t,new Jn(bc(),e,n))}function ZC(t,e,n){const s=_e.fromObject(n);return si(t,new $r(bc(),e,s))}function eS(t,e){return si(t,new Fr(bc(),e))}function tS(t,e,n){const s=Rc(t,n);if(s){const r=Ac(s),i=r.path,o=r.queryId,a=je(i,e),l=new Fr(Ec(o),a);return Pc(t,i,l)}else return[]}function oo(t,e,n,s,r=!1){const i=e._path,o=t.syncPointTree_.get(i);let a=[];if(o&&(e._queryIdentifier==="default"||xg(o,e))){const l=YC(o,e,n,s);GC(o)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const c=l.removed;if(a=l.events,!r){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(i,(d,p)=>Tn(p));if(u&&!h){const d=t.syncPointTree_.subtree(i);if(!d.isEmpty()){const p=rS(d);for(let _=0;_<p.length;++_){const m=p[_],b=m.query,T=$g(t,m);t.listenProvider_.startListening(Er(b),Ur(t,b),T.hashFn,T.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(Er(e),null):c.forEach(d=>{const p=t.queryToTagMap.get(Mo(d));t.listenProvider_.stopListening(Er(d),p)}))}iS(t,c)}return a}function Lg(t,e,n,s){const r=Rc(t,s);if(r!=null){const i=Ac(r),o=i.path,a=i.queryId,l=je(o,e),c=new Jn(Ec(a),l,n);return Pc(t,o,c)}else return[]}function nS(t,e,n,s){const r=Rc(t,s);if(r){const i=Ac(r),o=i.path,a=i.queryId,l=je(o,e),c=_e.fromObject(n),u=new $r(Ec(a),l,c);return Pc(t,o,u)}else return[]}function pl(t,e,n,s=!1){const r=e._path;let i=null,o=!1;t.syncPointTree_.foreachOnPath(r,(d,p)=>{const _=je(d,r);i=i||Cn(p,_),o=o||Tn(p)});let a=t.syncPointTree_.get(r);a?(o=o||Tn(a),i=i||Cn(a,Z())):(a=new Pg,t.syncPointTree_=t.syncPointTree_.set(r,a));let l;i!=null?l=!0:(l=!1,i=W.EMPTY_NODE,t.syncPointTree_.subtree(r).foreachChild((p,_)=>{const m=Cn(_,Z());m&&(i=i.updateImmediateChild(p,m))}));const c=xg(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=Mo(e);A(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const p=oS();t.queryToTagMap.set(d,p),t.tagToQueryMap.set(p,d)}const u=Do(t.pendingWriteTree_,r);let h=zC(a,e,n,u,i,l);if(!c&&!o&&!s){const d=kg(a,e);h=h.concat(aS(t,e,d))}return h}function Tc(t,e,n){const r=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=je(o,e),c=Cn(a,l);if(c)return c});return Cg(r,e,i,n,!0)}function sS(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const h=je(c,n);s=s||Cn(u,h)});let r=t.syncPointTree_.get(n);r?s=s||Cn(r,Z()):(r=new Pg,t.syncPointTree_=t.syncPointTree_.set(n,r));const i=s!=null,o=i?new In(s,!0,!1):null,a=Do(t.pendingWriteTree_,e._path),l=Og(r,e,a,i?o.getNode():W.EMPTY_NODE,i);return HC(l)}function si(t,e){return Mg(e,t.syncPointTree_,null,Do(t.pendingWriteTree_,Z()))}function Mg(t,e,n,s){if(J(t.path))return Fg(t,e,n,s);{const r=e.get(Z());n==null&&r!=null&&(n=Cn(r,Z()));let i=[];const o=z(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=Sg(s,o);i=i.concat(Mg(a,l,c,u))}return r&&(i=i.concat(Ic(r,t,s,n))),i}}function Fg(t,e,n,s){const r=e.get(Z());n==null&&r!=null&&(n=Cn(r,Z()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Sg(s,o),u=t.operationForChild(o);u&&(i=i.concat(Fg(u,a,l,c)))}),r&&(i=i.concat(Ic(r,t,s,n))),i}function $g(t,e){const n=e.query,s=Ur(t,n);return{hashFn:()=>(BC(e)||W.EMPTY_NODE).hash(),onComplete:r=>{if(r==="ok")return s?tS(t,n._path,s):eS(t,n._path);{const i=sw(r,n);return oo(t,n,null,i)}}}}function Ur(t,e){const n=Mo(e);return t.queryToTagMap.get(n)}function Mo(t){return t._path.toString()+"$"+t._queryIdentifier}function Rc(t,e){return t.tagToQueryMap.get(e)}function Ac(t){const e=t.indexOf("$");return A(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ue(t.substr(0,e))}}function Pc(t,e,n){const s=t.syncPointTree_.get(e);A(s,"Missing sync point for query tag that we're tracking");const r=Do(t.pendingWriteTree_,e);return Ic(s,n,r,null)}function rS(t){return t.fold((e,n,s)=>{if(n&&Tn(n))return[Lo(n)];{let r=[];return n&&(r=Ng(n)),Je(s,(i,o)=>{r=r.concat(o)}),r}})}function Er(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(QC())(t._repo,t._path):t}function iS(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const r=Mo(s),i=t.queryToTagMap.get(r);t.queryToTagMap.delete(r),t.tagToQueryMap.delete(i)}}}function oS(){return XC++}function aS(t,e,n){const s=e._path,r=Ur(t,e),i=$g(t,n),o=t.listenProvider_.startListening(Er(e),r,i.hashFn,i.onComplete),a=t.syncPointTree_.subtree(s);if(r)A(!Tn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!J(c)&&u&&Tn(u))return[Lo(u).query];{let d=[];return u&&(d=d.concat(Ng(u).map(p=>p.query))),Je(h,(p,_)=>{d=d.concat(_)}),d}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(Er(u),Ur(t,u))}}return o}/**
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
 */class Oc{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Oc(n)}node(){return this.node_}}class Nc{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ce(this.path_,e);return new Nc(this.syncTree_,n)}node(){return Tc(this.syncTree_,this.path_)}}const lS=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Mh=function(t,e,n){if(!t||typeof t!="object")return t;if(A(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return cS(t[".sv"],e,n);if(typeof t[".sv"]=="object")return uS(t[".sv"],e);A(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},cS=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:A(!1,"Unexpected server value: "+t)}},uS=function(t,e,n){t.hasOwnProperty("increment")||A(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&A(!1,"Unexpected increment value: "+s);const r=e.node();if(A(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return s;const o=r.getValue();return typeof o!="number"?s:o+s},hS=function(t,e,n,s){return kc(e,new Nc(n,t),s)},Ug=function(t,e,n){return kc(t,new Oc(e),n)};function kc(t,e,n){const s=t.getPriority().val(),r=Mh(s,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=Mh(o.getValue(),e,n);return a!==o.getValue()||r!==o.getPriority().val()?new Te(a,Ae(r)):t}else{const o=t;return i=o,r!==o.getPriority().val()&&(i=i.updatePriority(new Te(r))),o.forEachChild(ve,(a,l)=>{const c=kc(l,e.getImmediateChild(a),n);c!==l&&(i=i.updateImmediateChild(a,c))}),i}}/**
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
 */class xc{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Dc(t,e){let n=e instanceof ue?e:new ue(e),s=t,r=z(n);for(;r!==null;){const i=Ss(s.node.children,r)||{children:{},childCount:0};s=new xc(r,s,i),n=fe(n),r=z(n)}return s}function Fs(t){return t.node.value}function Bg(t,e){t.node.value=e,gl(t)}function Hg(t){return t.node.childCount>0}function dS(t){return Fs(t)===void 0&&!Hg(t)}function Fo(t,e){Je(t.node.children,(n,s)=>{e(new xc(n,t,s))})}function jg(t,e,n,s){n&&!s&&e(t),Fo(t,r=>{jg(r,e,!0,s)}),n&&s&&e(t)}function fS(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function ri(t){return new ue(t.parent===null?t.name:ri(t.parent)+"/"+t.name)}function gl(t){t.parent!==null&&pS(t.parent,t.name,t)}function pS(t,e,n){const s=dS(n),r=Zt(t.node.children,e);s&&r?(delete t.node.children[e],t.node.childCount--,gl(t)):!s&&!r&&(t.node.children[e]=n.node,t.node.childCount++,gl(t))}/**
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
 */const gS=/[\[\].#$\/\u0000-\u001F\u007F]/,_S=/[\[\].#$\u0000-\u001F\u007F]/,Ta=10*1024*1024,Wg=function(t){return typeof t=="string"&&t.length!==0&&!gS.test(t)},Vg=function(t){return typeof t=="string"&&t.length!==0&&!_S.test(t)},mS=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Vg(t)},yS=function(t,e,n,s){Lc(ac(t,"value"),e,n)},Lc=function(t,e,n){const s=n instanceof ue?new Mw(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+$n(s));if(typeof e=="function")throw new Error(t+"contains a function "+$n(s)+" with contents = "+e.toString());if(Hp(e))throw new Error(t+"contains "+e.toString()+" "+$n(s));if(typeof e=="string"&&e.length>Ta/3&&No(e)>Ta)throw new Error(t+"contains a string greater than "+Ta+" utf8 bytes "+$n(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,i=!1;if(Je(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!Wg(o)))throw new Error(t+" contains an invalid key ("+o+") "+$n(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Fw(s,o),Lc(t,a,s),$w(s)}),r&&i)throw new Error(t+' contains ".value" child '+$n(s)+" in addition to actual children.")}},qg=function(t,e,n,s){if(!Vg(n))throw new Error(ac(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},vS=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),qg(t,e,n)},bS=function(t,e){if(z(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},ES=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Wg(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!mS(n))throw new Error(ac(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class wS{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Mc(t,e){let n=null;for(let s=0;s<e.length;s++){const r=e[s],i=r.getPath();n!==null&&!gc(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(r)}n&&t.eventLists_.push(n)}function Kg(t,e,n){Mc(t,n),Gg(t,s=>gc(s,e))}function Lt(t,e,n){Mc(t,n),Gg(t,s=>gt(s,e)||gt(e,s))}function Gg(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const r=t.eventLists_[s];if(r){const i=r.path;e(i)?(CS(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function CS(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();mr&&Le("event: "+n.toString()),Ms(s)}}}/**
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
 */const SS="repo_interrupt",IS=25;class TS{constructor(e,n,s,r){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new wS,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Xi(),this.transactionQueueTree_=new xc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function RS(t,e,n){if(t.stats_=fc(t.repoInfo_),t.forceRestClient_||aw())t.server_=new Qi(t.repoInfo_,(s,r,i,o)=>{Fh(t,s,r,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>$h(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{we(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Gt(t.repoInfo_,e,(s,r,i,o)=>{Fh(t,s,r,i,o)},s=>{$h(t,s)},s=>{PS(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=dw(t.repoInfo_,()=>new uC(t.stats_,t.server_)),t.infoData_=new iC,t.infoSyncTree_=new Lh({startListening:(s,r,i,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=ni(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),$c(t,"connected",!1),t.serverSyncTree_=new Lh({startListening:(s,r,i,o)=>(t.server_.listen(s,i,r,(a,l)=>{const c=o(a,l);Lt(t.eventQueue_,s._path,c)}),[]),stopListening:(s,r)=>{t.server_.unlisten(s,r)}})}function AS(t){const n=t.infoData_.getNode(new ue(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Fc(t){return lS({timestamp:AS(t)})}function Fh(t,e,n,s,r){t.dataUpdateCount++;const i=new ue(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(r)if(s){const l=qi(n,c=>Ae(c));o=nS(t.serverSyncTree_,i,l,r)}else{const l=Ae(n);o=Lg(t.serverSyncTree_,i,l,r)}else if(s){const l=qi(n,c=>Ae(c));o=ZC(t.serverSyncTree_,i,l)}else{const l=Ae(n);o=ni(t.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=Uo(t,i)),Lt(t.eventQueue_,a,o)}function $h(t,e){$c(t,"connected",e),e===!1&&kS(t)}function PS(t,e){Je(e,(n,s)=>{$c(t,n,s)})}function $c(t,e,n){const s=new ue("/.info/"+e),r=Ae(n);t.infoData_.updateSnapshot(s,r);const i=ni(t.infoSyncTree_,s,r);Lt(t.eventQueue_,s,i)}function zg(t){return t.nextWriteId_++}function OS(t,e,n){const s=sS(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(r=>{const i=Ae(r).withIndex(e._queryParams.getIndex());pl(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=ni(t.serverSyncTree_,e._path,i);else{const a=Ur(t.serverSyncTree_,e);o=Lg(t.serverSyncTree_,e._path,i,a)}return Lt(t.eventQueue_,e._path,o),oo(t.serverSyncTree_,e,n,null,!0),i},r=>($o(t,"get for query "+we(e)+" failed: "+r),Promise.reject(new Error(r))))}function NS(t,e,n,s,r){$o(t,"set",{path:e.toString(),value:n,priority:s});const i=Fc(t),o=Ae(n,s),a=Tc(t.serverSyncTree_,e),l=Ug(o,a,i),c=zg(t),u=Dg(t.serverSyncTree_,e,l,c,!0);Mc(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,p)=>{const _=d==="ok";_||Ge("set at "+e+" failed: "+d);const m=Hn(t.serverSyncTree_,c,!_);Lt(t.eventQueue_,e,m),LS(t,r,d,p)});const h=Zg(t,e);Uo(t,h),Lt(t.eventQueue_,h,[])}function kS(t){$o(t,"onDisconnectEvents");const e=Fc(t),n=Xi();cl(t.onDisconnect_,Z(),(r,i)=>{const o=hS(r,i,t.serverSyncTree_,e);yg(n,r,o)});let s=[];cl(n,Z(),(r,i)=>{s=s.concat(ni(t.serverSyncTree_,r,i));const o=Zg(t,r);Uo(t,o)}),t.onDisconnect_=Xi(),Lt(t.eventQueue_,Z(),s)}function xS(t,e,n){let s;z(e._path)===".info"?s=pl(t.infoSyncTree_,e,n):s=pl(t.serverSyncTree_,e,n),Kg(t.eventQueue_,e._path,s)}function Uh(t,e,n){let s;z(e._path)===".info"?s=oo(t.infoSyncTree_,e,n):s=oo(t.serverSyncTree_,e,n),Kg(t.eventQueue_,e._path,s)}function DS(t){t.persistentConnection_&&t.persistentConnection_.interrupt(SS)}function $o(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Le(n,...e)}function LS(t,e,n,s){e&&Ms(()=>{if(n==="ok")e(null);else{const r=(n||"error").toUpperCase();let i=r;s&&(i+=": "+s);const o=new Error(i);o.code=r,e(o)}})}function Yg(t,e,n){return Tc(t.serverSyncTree_,e,n)||W.EMPTY_NODE}function Uc(t,e=t.transactionQueueTree_){if(e||Bo(t,e),Fs(e)){const n=Qg(t,e);A(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&MS(t,ri(e),n)}else Hg(e)&&Fo(e,n=>{Uc(t,n)})}function MS(t,e,n){const s=n.map(c=>c.currentWriteId),r=Yg(t,e,s);let i=r;const o=r.hash();for(let c=0;c<n.length;c++){const u=n[c];A(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=je(e,u.path);i=i.updateChild(h,u.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;t.server_.put(l.toString(),a,c=>{$o(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(Hn(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Bo(t,Dc(t.transactionQueueTree_,e)),Uc(t,t.transactionQueueTree_),Lt(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)Ms(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Ge("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Uo(t,e)}},o)}function Uo(t,e){const n=Jg(t,e),s=ri(n),r=Qg(t,n);return FS(t,r,s),s}function FS(t,e,n){if(e.length===0)return;const s=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=je(n,l.path);let u=!1,h;if(A(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,r=r.concat(Hn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=IS)u=!0,h="maxretry",r=r.concat(Hn(t.serverSyncTree_,l.currentWriteId,!0));else{const d=Yg(t,l.path,o);l.currentInputSnapshot=d;const p=e[a].update(d.val());if(p!==void 0){Lc("transaction failed: Data returned ",p,l.path);let _=Ae(p);typeof p=="object"&&p!=null&&Zt(p,".priority")||(_=_.updatePriority(d.getPriority()));const b=l.currentWriteId,T=Fc(t),R=Ug(_,d,T);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=R,l.currentWriteId=zg(t),o.splice(o.indexOf(b),1),r=r.concat(Dg(t.serverSyncTree_,l.path,R,l.currentWriteId,l.applyLocally)),r=r.concat(Hn(t.serverSyncTree_,b,!0))}else u=!0,h="nodata",r=r.concat(Hn(t.serverSyncTree_,l.currentWriteId,!0))}Lt(t.eventQueue_,n,r),r=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}Bo(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Ms(s[a]);Uc(t,t.transactionQueueTree_)}function Jg(t,e){let n,s=t.transactionQueueTree_;for(n=z(e);n!==null&&Fs(s)===void 0;)s=Dc(s,n),e=fe(e),n=z(e);return s}function Qg(t,e){const n=[];return Xg(t,e,n),n.sort((s,r)=>s.order-r.order),n}function Xg(t,e,n){const s=Fs(e);if(s)for(let r=0;r<s.length;r++)n.push(s[r]);Fo(e,r=>{Xg(t,r,n)})}function Bo(t,e){const n=Fs(e);if(n){let s=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[s]=n[r],s++);n.length=s,Bg(e,n.length>0?n:void 0)}Fo(e,s=>{Bo(t,s)})}function Zg(t,e){const n=ri(Jg(t,e)),s=Dc(t.transactionQueueTree_,e);return fS(s,r=>{Ra(t,r)}),Ra(t,s),jg(s,r=>{Ra(t,r)}),n}function Ra(t,e){const n=Fs(e);if(n){const s=[];let r=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(A(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(A(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),r=r.concat(Hn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?Bg(e,void 0):n.length=i+1,Lt(t.eventQueue_,ri(e),r);for(let o=0;o<s.length;o++)Ms(s[o])}}/**
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
 */function $S(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let r=n[s];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function US(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Ge(`Invalid query segment '${n}' in query '${t}'`)}return e}const Bh=function(t,e){const n=BS(t),s=n.namespace;n.domain==="firebase.com"&&Jt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Jt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||XE();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Zp(n.host,n.secure,s,r,e,"",s!==n.subdomain),path:new ue(n.pathString)}},BS=function(t){let e="",n="",s="",r="",i="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(r=$S(t.substring(u,h)));const d=US(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const _=e.indexOf(".");s=e.substring(0,_).toLowerCase(),n=e.substring(_+1),i=s}"ns"in d&&(i=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:r,namespace:i}};/**
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
 */class HS{constructor(e,n,s,r){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=r}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+we(this.snapshot.exportVal())}}class jS{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class e_{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return A(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Bc{constructor(e,n,s,r){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=r}get key(){return J(this._path)?null:lg(this._path)}get ref(){return new en(this._repo,this._path)}get _queryIdentifier(){const e=Sh(this._queryParams),n=hc(e);return n==="{}"?"default":n}get _queryObject(){return Sh(this._queryParams)}isEqual(e){if(e=Ve(e),!(e instanceof Bc))return!1;const n=this._repo===e._repo,s=gc(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return n&&s&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+Lw(this._path)}}class en extends Bc{constructor(e,n){super(e,n,new vc,!1)}get parent(){const e=ug(this._path);return e===null?null:new en(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Br{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ue(e),s=_l(this.ref,e);return new Br(this._node.getChild(n),s,ve)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,r)=>e(new Br(r,_l(this.ref,s),ve)))}hasChild(e){const n=new ue(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ho(t,e){return t=Ve(t),t._checkNotDeleted("ref"),e!==void 0?_l(t._root,e):t._root}function _l(t,e){return t=Ve(t),z(t._path)===null?vS("child","path",e):qg("child","path",e),new en(t._repo,Ce(t._path,e))}function WS(t,e){t=Ve(t),bS("set",t._path),yS("set",e,t._path);const n=new Oo;return NS(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function VS(t){t=Ve(t);const e=new e_(()=>{}),n=new jo(e);return OS(t._repo,t,n).then(s=>new Br(s,new en(t._repo,t._path),t._queryParams.getIndex()))}class jo{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new HS("value",this,new Br(e.snapshotNode,new en(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new jS(this,e,n):null}matches(e){return e instanceof jo?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function qS(t,e,n,s,r){let i;if(typeof s=="object"&&(i=void 0,r=s),typeof s=="function"&&(i=s),r&&r.onlyOnce){const l=n,c=(u,h)=>{Uh(t._repo,t,a),l(u,h)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new e_(n,i||void 0),a=new jo(o);return xS(t._repo,t,a),()=>Uh(t._repo,t,a)}function ml(t,e,n,s){return qS(t,"value",e,n,s)}qC(en);JC(en);/**
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
 */const KS="FIREBASE_DATABASE_EMULATOR_HOST",yl={};let GS=!1;function zS(t,e,n,s){t.repoInfo_=new Zp(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function YS(t,e,n,s,r){let i=s||t.options.databaseURL;i===void 0&&(t.options.projectId||Jt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Le("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Bh(i,r),a=o.repoInfo,l;typeof process<"u"&&oh&&(l=oh[KS]),l?(i=`http://${l}?ns=${a.namespace}`,o=Bh(i,r),a=o.repoInfo):o.repoInfo.secure;const c=new cw(t.name,t.options,e);ES("Invalid Firebase Database URL",o),J(o.path)||Jt("Database URL must point to the root of a Firebase Database (not including a child path).");const u=QS(a,t,c,new lw(t.name,n));return new XS(u,t)}function JS(t,e){const n=yl[e];(!n||n[t.key]!==t)&&Jt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),DS(t),delete n[t.key]}function QS(t,e,n,s){let r=yl[e.name];r||(r={},yl[e.name]=r);let i=r[t.toURLString()];return i&&Jt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new TS(t,GS,n,s),r[t.toURLString()]=i,i}class XS{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(RS(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new en(this._repo,Z())),this._rootInternal}_delete(){return this._rootInternal!==null&&(JS(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Jt("Cannot call "+e+" on a deleted database.")}}function ZS(t=Lp(),e){const n=uc(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=wb("database");s&&eI(n,...s)}return n}function eI(t,e,n,s={}){t=Ve(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Jt("Cannot call useEmulator() after instance has already been initialized.");const r=t._repoInternal;let i;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&Jt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),i=new Ai(Ai.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Cb(s.mockUserToken,t.app.options.projectId);i=new Ai(o)}zS(r,e,n,i)}/**
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
 */function tI(t){KE(Ds),Is(new zn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return YS(s,r,i,n)},"PUBLIC").setMultipleInstances(!0)),En(ah,lh,t),En(ah,lh,"esm2017")}Gt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Gt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};tI();function Hc(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function t_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nI=t_,n_=new Xr("auth","Firebase",t_());/**
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
 */const ao=new lc("@firebase/auth");function sI(t,...e){ao.logLevel<=le.WARN&&ao.warn(`Auth (${Ds}): ${t}`,...e)}function Pi(t,...e){ao.logLevel<=le.ERROR&&ao.error(`Auth (${Ds}): ${t}`,...e)}/**
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
 */function vt(t,...e){throw jc(t,...e)}function Nt(t,...e){return jc(t,...e)}function s_(t,e,n){const s=Object.assign(Object.assign({},nI()),{[e]:n});return new Xr("auth","Firebase",s).create(e,{appName:t.name})}function zt(t){return s_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function jc(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return n_.create(t,...e)}function V(t,e,...n){if(!t)throw jc(e,...n)}function Wt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Pi(e),new Error(e)}function Qt(t,e){t||Wt(e)}/**
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
 */function vl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function rI(){return Hh()==="http:"||Hh()==="https:"}function Hh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function iI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(rI()||Ib()||"connection"in navigator)?navigator.onLine:!0}function oI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ii{constructor(e,n){this.shortDelay=e,this.longDelay=n,Qt(n>e,"Short delay should be less than long delay!"),this.isMobile=oc()||Pp()}get(){return iI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Wc(t,e){Qt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class r_{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Wt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Wt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Wt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const aI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const lI=new ii(3e4,6e4);function tn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function nn(t,e,n,s,r={}){return i_(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=xs(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},i);return Sb()||(c.referrerPolicy="no-referrer"),r_.fetch()(o_(t,t.config.apiHost,n,a),c)})}async function i_(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},aI),e);try{const r=new uI(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw vi(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw vi(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw vi(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw vi(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw s_(t,u,c);vt(t,u)}}catch(r){if(r instanceof On)throw r;vt(t,"network-request-failed",{message:String(r)})}}async function oi(t,e,n,s,r={}){const i=await nn(t,e,n,s,r);return"mfaPendingCredential"in i&&vt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function o_(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Wc(t.config,r):`${t.config.apiScheme}://${r}`}function cI(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class uI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Nt(this.auth,"network-request-failed")),lI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function vi(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Nt(t,e,s);return r.customData._tokenResponse=n,r}function jh(t){return t!==void 0&&t.enterprise!==void 0}class hI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return cI(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function dI(t,e){return nn(t,"GET","/v2/recaptchaConfig",tn(t,e))}/**
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
 */async function fI(t,e){return nn(t,"POST","/v1/accounts:delete",e)}async function a_(t,e){return nn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function wr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function pI(t,e=!1){const n=Ve(t),s=await n.getIdToken(e),r=Vc(s);V(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:wr(Aa(r.auth_time)),issuedAtTime:wr(Aa(r.iat)),expirationTime:wr(Aa(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Aa(t){return Number(t)*1e3}function Vc(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Pi("JWT malformed, contained fewer than 3 sections"),null;try{const r=Vi(n);return r?JSON.parse(r):(Pi("Failed to decode base64 JWT payload"),null)}catch(r){return Pi("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Wh(t){const e=Vc(t);return V(e,"internal-error"),V(typeof e.exp<"u","internal-error"),V(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Hr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof On&&gI(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function gI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class _I{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class bl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=wr(this.lastLoginAt),this.creationTime=wr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function lo(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Hr(t,a_(n,{idToken:s}));V(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?l_(i.providerUserInfo):[],a=yI(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new bl(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function mI(t){const e=Ve(t);await lo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function yI(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function l_(t){return t.map(e=>{var{providerId:n}=e,s=Hc(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function vI(t,e){const n=await i_(t,{},async()=>{const s=xs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=o_(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",r_.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function bI(t,e){return nn(t,"POST","/v2/accounts:revokeToken",tn(t,e))}/**
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
 */class vs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){V(e.idToken,"internal-error"),V(typeof e.idToken<"u","internal-error"),V(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Wh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){V(e.length!==0,"internal-error");const n=Wh(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(V(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await vI(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new vs;return s&&(V(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(V(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(V(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vs,this.toJSON())}_performRefresh(){return Wt("not implemented")}}/**
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
 */function an(t,e){V(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Vt{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Hc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new _I(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new bl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Hr(this,this.stsTokenManager.getToken(this.auth,e));return V(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return pI(this,e)}reload(){return mI(this)}_assign(e){this!==e&&(V(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Vt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){V(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await lo(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(At(this.auth.app))return Promise.reject(zt(this.auth));const e=await this.getIdToken();return await Hr(this,fI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,m=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,T=(c=n.createdAt)!==null&&c!==void 0?c:void 0,R=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:P,emailVerified:k,isAnonymous:B,providerData:ee,stsTokenManager:Q}=n;V(P&&Q,e,"internal-error");const Oe=vs.fromJSON(this.name,Q);V(typeof P=="string",e,"internal-error"),an(h,e.name),an(d,e.name),V(typeof k=="boolean",e,"internal-error"),V(typeof B=="boolean",e,"internal-error"),an(p,e.name),an(_,e.name),an(m,e.name),an(b,e.name),an(T,e.name),an(R,e.name);const $e=new Vt({uid:P,auth:e,email:d,emailVerified:k,displayName:h,isAnonymous:B,photoURL:_,phoneNumber:p,tenantId:m,stsTokenManager:Oe,createdAt:T,lastLoginAt:R});return ee&&Array.isArray(ee)&&($e.providerData=ee.map(it=>Object.assign({},it))),b&&($e._redirectEventId=b),$e}static async _fromIdTokenResponse(e,n,s=!1){const r=new vs;r.updateFromServerResponse(n);const i=new Vt({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await lo(i),i}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];V(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?l_(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),a=new vs;a.updateFromIdToken(s);const l=new Vt({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new bl(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,c),l}}/**
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
 */const Vh=new Map;function qt(t){Qt(t instanceof Function,"Expected a class definition");let e=Vh.get(t);return e?(Qt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Vh.set(t,e),e)}/**
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
 */class c_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}c_.type="NONE";const El=c_;/**
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
 */function Oi(t,e,n){return`firebase:${t}:${e}:${n}`}class bs{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Oi(this.userKey,r.apiKey,i),this.fullPersistenceKey=Oi("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Vt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new bs(qt(El),e,s);const r=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=r[0]||qt(El);const o=Oi(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=Vt._fromJSON(e,u);c!==i&&(a=h),i=c;break}}catch{}const l=r.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new bs(i,e,s):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new bs(i,e,s))}}/**
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
 */function qh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(f_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(u_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(g_(e))return"Blackberry";if(__(e))return"Webos";if(h_(e))return"Safari";if((e.includes("chrome/")||d_(e))&&!e.includes("edge/"))return"Chrome";if(p_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function u_(t=We()){return/firefox\//i.test(t)}function h_(t=We()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function d_(t=We()){return/crios\//i.test(t)}function f_(t=We()){return/iemobile/i.test(t)}function p_(t=We()){return/android/i.test(t)}function g_(t=We()){return/blackberry/i.test(t)}function __(t=We()){return/webos/i.test(t)}function qc(t=We()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function EI(t=We()){var e;return qc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function wI(){return Tb()&&document.documentMode===10}function m_(t=We()){return qc(t)||p_(t)||__(t)||g_(t)||/windows phone/i.test(t)||f_(t)}/**
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
 */function y_(t,e=[]){let n;switch(t){case"Browser":n=qh(We());break;case"Worker":n=`${qh(We())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ds}/${s}`}/**
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
 */class CI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function SI(t,e={}){return nn(t,"GET","/v2/passwordPolicy",tn(t,e))}/**
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
 */const II=6;class TI{constructor(e){var n,s,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:II,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,r,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(r=l.containsLowercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class RI{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Kh(this),this.idTokenSubscription=new Kh(this),this.beforeStateQueue=new CI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=n_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=qt(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await bs.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await a_(this,{idToken:e}),s=await Vt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(At(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return V(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await lo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=oI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(At(this.app))return Promise.reject(zt(this));const n=e?Ve(e):null;return n&&V(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&V(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return At(this.app)?Promise.reject(zt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return At(this.app)?Promise.reject(zt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(qt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await SI(this),n=new TI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Xr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await bI(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&qt(e)||this._popupRedirectResolver;V(n,this,"argument-error"),this.redirectPersistenceManager=await bs.create(this,[qt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(V(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,r);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return V(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=y_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&sI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Nn(t){return Ve(t)}class Kh{constructor(e){this.auth=e,this.observer=null,this.addObserver=Lb(n=>this.observer=n)}get next(){return V(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Wo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function AI(t){Wo=t}function v_(t){return Wo.loadJS(t)}function PI(){return Wo.recaptchaEnterpriseScript}function OI(){return Wo.gapiScript}function NI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class kI{constructor(){this.enterprise=new xI}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class xI{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const DI="recaptcha-enterprise",b_="NO_RECAPTCHA";class LI{constructor(e){this.type=DI,this.auth=Nn(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{dI(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new hI(l);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function r(i,o,a){const l=window.grecaptcha;jh(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(b_)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new kI().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{s(this.auth).then(a=>{if(!n&&jh(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=PI();l.length!==0&&(l+=a),v_(l).then(()=>{r(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Gh(t,e,n,s=!1,r=!1){const i=new LI(t);let o;if(r)o=b_;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return s?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function co(t,e,n,s,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Gh(t,e,n,n==="getOobCode");return s(t,o)}else return s(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Gh(t,e,n,n==="getOobCode");return s(t,a)}else return Promise.reject(o)})}/**
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
 */function MI(t,e){const n=uc(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Ki(i,e??{}))return r;vt(r,"already-initialized")}return n.initialize({options:e})}function FI(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(qt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function $I(t,e,n){const s=Nn(t);V(s._canInitEmulator,s,"emulator-config-failed"),V(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=E_(e),{host:o,port:a}=UI(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),BI()}function E_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function UI(t){const e=E_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:zh(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:zh(o)}}}function zh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function BI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Kc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Wt("not implemented")}_getIdTokenResponse(e){return Wt("not implemented")}_linkToIdToken(e,n){return Wt("not implemented")}_getReauthenticationResolver(e){return Wt("not implemented")}}async function HI(t,e){return nn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function jI(t,e){return oi(t,"POST","/v1/accounts:signInWithPassword",tn(t,e))}async function w_(t,e){return nn(t,"POST","/v1/accounts:sendOobCode",tn(t,e))}async function WI(t,e){return w_(t,e)}async function VI(t,e){return w_(t,e)}/**
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
 */async function qI(t,e){return oi(t,"POST","/v1/accounts:signInWithEmailLink",tn(t,e))}async function KI(t,e){return oi(t,"POST","/v1/accounts:signInWithEmailLink",tn(t,e))}/**
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
 */class jr extends Kc{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new jr(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new jr(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return co(e,n,"signInWithPassword",jI);case"emailLink":return qI(e,{email:this._email,oobCode:this._password});default:vt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return co(e,s,"signUpPassword",HI);case"emailLink":return KI(e,{idToken:n,email:this._email,oobCode:this._password});default:vt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Es(t,e){return oi(t,"POST","/v1/accounts:signInWithIdp",tn(t,e))}/**
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
 */const GI="http://localhost";class Xn extends Kc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Xn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):vt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Hc(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Xn(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Es(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Es(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Es(e,n)}buildRequest(){const e={requestUri:GI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=xs(n)}return e}}/**
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
 */function zI(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function YI(t){const e=lr(cr(t)).link,n=e?lr(cr(e)).deep_link_id:null,s=lr(cr(t)).deep_link_id;return(s?lr(cr(s)).link:null)||s||n||e||t}class Gc{constructor(e){var n,s,r,i,o,a;const l=lr(cr(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,h=zI((r=l.mode)!==null&&r!==void 0?r:null);V(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=YI(e);try{return new Gc(n)}catch{return null}}}/**
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
 */class $s{constructor(){this.providerId=$s.PROVIDER_ID}static credential(e,n){return jr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Gc.parseLink(n);return V(s,"argument-error"),jr._fromEmailAndCode(e,s.code,s.tenantId)}}$s.PROVIDER_ID="password";$s.EMAIL_PASSWORD_SIGN_IN_METHOD="password";$s.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class C_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ai extends C_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class pn extends ai{constructor(){super("facebook.com")}static credential(e){return Xn._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pn.credential(e.oauthAccessToken)}catch{return null}}}pn.FACEBOOK_SIGN_IN_METHOD="facebook.com";pn.PROVIDER_ID="facebook.com";/**
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
 */class gn extends ai{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Xn._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return gn.credential(n,s)}catch{return null}}}gn.GOOGLE_SIGN_IN_METHOD="google.com";gn.PROVIDER_ID="google.com";/**
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
 */class _n extends ai{constructor(){super("github.com")}static credential(e){return Xn._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _n.credentialFromTaggedObject(e)}static credentialFromError(e){return _n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _n.credential(e.oauthAccessToken)}catch{return null}}}_n.GITHUB_SIGN_IN_METHOD="github.com";_n.PROVIDER_ID="github.com";/**
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
 */class mn extends ai{constructor(){super("twitter.com")}static credential(e,n){return Xn._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return mn.credential(n,s)}catch{return null}}}mn.TWITTER_SIGN_IN_METHOD="twitter.com";mn.PROVIDER_ID="twitter.com";/**
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
 */async function JI(t,e){return oi(t,"POST","/v1/accounts:signUp",tn(t,e))}/**
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
 */class Zn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Vt._fromIdTokenResponse(e,s,r),o=Yh(s);return new Zn({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Yh(s);return new Zn({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Yh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class uo extends On{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,uo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new uo(e,n,s,r)}}function S_(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?uo._fromErrorAndOperation(t,i,e,s):i})}async function QI(t,e,n=!1){const s=await Hr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Zn._forOperation(t,"link",s)}/**
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
 */async function XI(t,e,n=!1){const{auth:s}=t;if(At(s.app))return Promise.reject(zt(s));const r="reauthenticate";try{const i=await Hr(t,S_(s,r,e,t),n);V(i.idToken,s,"internal-error");const o=Vc(i.idToken);V(o,s,"internal-error");const{sub:a}=o;return V(t.uid===a,s,"user-mismatch"),Zn._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&vt(s,"user-mismatch"),i}}/**
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
 */async function I_(t,e,n=!1){if(At(t.app))return Promise.reject(zt(t));const s="signIn",r=await S_(t,s,e),i=await Zn._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function ZI(t,e){return I_(Nn(t),e)}/**
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
 */async function T_(t){const e=Nn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function eT(t,e,n){const s=Nn(t);await co(s,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",VI)}async function tT(t,e,n){if(At(t.app))return Promise.reject(zt(t));const s=Nn(t),o=await co(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",JI).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&T_(t),l}),a=await Zn._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function nT(t,e,n){return At(t.app)?Promise.reject(zt(t)):ZI(Ve(t),$s.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&T_(t),s})}async function Jh(t,e){const n=Ve(t),r={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()},{email:i}=await WI(n.auth,r);i!==t.email&&await t.reload()}/**
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
 */function Qh(t,e){return Ve(t).setPersistence(e)}function sT(t,e,n,s){return Ve(t).onIdTokenChanged(e,n,s)}function rT(t,e,n){return Ve(t).beforeAuthStateChanged(e,n)}const ho="__sak";/**
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
 */class R_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ho,"1"),this.storage.removeItem(ho),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const iT=1e3,oT=10;class A_ extends R_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=m_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);wI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,oT):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},iT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}A_.type="LOCAL";const P_=A_;/**
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
 */class O_ extends R_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}O_.type="SESSION";const N_=O_;/**
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
 */function aT(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Vo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Vo(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await aT(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Vo.receivers=[];/**
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
 */function zc(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class lT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=zc("",20);r.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function kt(){return window}function cT(t){kt().location.href=t}/**
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
 */function k_(){return typeof kt().WorkerGlobalScope<"u"&&typeof kt().importScripts=="function"}async function uT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function hT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function dT(){return k_()?self:null}/**
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
 */const x_="firebaseLocalStorageDb",fT=1,fo="firebaseLocalStorage",D_="fbase_key";class li{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function qo(t,e){return t.transaction([fo],e?"readwrite":"readonly").objectStore(fo)}function pT(){const t=indexedDB.deleteDatabase(x_);return new li(t).toPromise()}function wl(){const t=indexedDB.open(x_,fT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(fo,{keyPath:D_})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(fo)?e(s):(s.close(),await pT(),e(await wl()))})})}async function Xh(t,e,n){const s=qo(t,!0).put({[D_]:e,value:n});return new li(s).toPromise()}async function gT(t,e){const n=qo(t,!1).get(e),s=await new li(n).toPromise();return s===void 0?null:s.value}function Zh(t,e){const n=qo(t,!0).delete(e);return new li(n).toPromise()}const _T=800,mT=3;class L_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>mT)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return k_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vo._getInstance(dT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await uT(),!this.activeServiceWorker)return;this.sender=new lT(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||hT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wl();return await Xh(e,ho,"1"),await Zh(e,ho),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Xh(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>gT(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Zh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=qo(r,!1).getAll();return new li(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_T)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}L_.type="LOCAL";const yT=L_;new ii(3e4,6e4);/**
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
 */function vT(t,e){return e?qt(e):(V(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Yc extends Kc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Es(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Es(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Es(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function bT(t){return I_(t.auth,new Yc(t),t.bypassAuthState)}function ET(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),XI(n,new Yc(t),t.bypassAuthState)}async function wT(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),QI(n,new Yc(t),t.bypassAuthState)}/**
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
 */class M_{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return bT;case"linkViaPopup":case"linkViaRedirect":return wT;case"reauthViaPopup":case"reauthViaRedirect":return ET;default:vt(this.auth,"internal-error")}}resolve(e){Qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const CT=new ii(2e3,1e4);class us extends M_{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,us.currentPopupAction&&us.currentPopupAction.cancel(),us.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return V(e,this.auth,"internal-error"),e}async onExecution(){Qt(this.filter.length===1,"Popup operations only handle one event");const e=zc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,us.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Nt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,CT.get())};e()}}us.currentPopupAction=null;/**
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
 */const ST="pendingRedirect",Ni=new Map;class IT extends M_{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Ni.get(this.auth._key());if(!e){try{const s=await TT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Ni.set(this.auth._key(),e)}return this.bypassAuthState||Ni.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function TT(t,e){const n=PT(e),s=AT(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function RT(t,e){Ni.set(t._key(),e)}function AT(t){return qt(t._redirectPersistence)}function PT(t){return Oi(ST,t.config.apiKey,t.name)}async function OT(t,e,n=!1){if(At(t.app))return Promise.reject(zt(t));const s=Nn(t),r=vT(s,e),o=await new IT(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const NT=10*60*1e3;class kT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!xT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!F_(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Nt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=NT&&this.cachedEventUids.clear(),this.cachedEventUids.has(ed(e))}saveEventToCache(e){this.cachedEventUids.add(ed(e)),this.lastProcessedEventTime=Date.now()}}function ed(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function F_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function xT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return F_(t);default:return!1}}/**
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
 */async function DT(t,e={}){return nn(t,"GET","/v1/projects",e)}/**
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
 */const LT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,MT=/^https?/;async function FT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await DT(t);for(const n of e)try{if($T(n))return}catch{}vt(t,"unauthorized-domain")}function $T(t){const e=vl(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!MT.test(n))return!1;if(LT.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const UT=new ii(3e4,6e4);function td(){const t=kt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function BT(t){return new Promise((e,n)=>{var s,r,i;function o(){td(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{td(),n(Nt(t,"network-request-failed"))},timeout:UT.get()})}if(!((r=(s=kt().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=kt().gapi)===null||i===void 0)&&i.load)o();else{const a=NI("iframefcb");return kt()[a]=()=>{gapi.load?o():n(Nt(t,"network-request-failed"))},v_(`${OI()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ki=null,e})}let ki=null;function HT(t){return ki=ki||BT(t),ki}/**
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
 */const jT=new ii(5e3,15e3),WT="__/auth/iframe",VT="emulator/auth/iframe",qT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},KT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function GT(t){const e=t.config;V(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Wc(e,VT):`https://${t.config.authDomain}/${WT}`,s={apiKey:e.apiKey,appName:t.name,v:Ds},r=KT.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${xs(s).slice(1)}`}async function zT(t){const e=await HT(t),n=kt().gapi;return V(n,t,"internal-error"),e.open({where:document.body,url:GT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:qT,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Nt(t,"network-request-failed"),a=kt().setTimeout(()=>{i(o)},jT.get());function l(){kt().clearTimeout(a),r(s)}s.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const YT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},JT=500,QT=600,XT="_blank",ZT="http://localhost";class nd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function eR(t,e,n,s=JT,r=QT){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},YT),{width:s.toString(),height:r.toString(),top:i,left:o}),c=We().toLowerCase();n&&(a=d_(c)?XT:n),u_(c)&&(e=e||ZT,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[p,_])=>`${d}${p}=${_},`,"");if(EI(c)&&a!=="_self")return tR(e||"",a),new nd(null);const h=window.open(e||"",a,u);V(h,t,"popup-blocked");try{h.focus()}catch{}return new nd(h)}function tR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const nR="__/auth/handler",sR="emulator/auth/handler",rR=encodeURIComponent("fac");async function sd(t,e,n,s,r,i){V(t.config.authDomain,t,"auth-domain-config-required"),V(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Ds,eventId:r};if(e instanceof C_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",el(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries({}))o[u]=h}if(e instanceof ai){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${rR}=${encodeURIComponent(l)}`:"";return`${iR(t)}?${xs(a).slice(1)}${c}`}function iR({config:t}){return t.emulator?Wc(t,sR):`https://${t.authDomain}/${nR}`}/**
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
 */const Pa="webStorageSupport";class oR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=N_,this._completeRedirectFn=OT,this._overrideRedirectResult=RT}async _openPopup(e,n,s,r){var i;Qt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await sd(e,n,s,vl(),r);return eR(e,o,zc())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await sd(e,n,s,vl(),r);return cT(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(Qt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await zT(e),s=new kT(e);return n.register("authEvent",r=>(V(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Pa,{type:Pa},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Pa];o!==void 0&&n(!!o),vt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=FT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return m_()||h_()||qc()}}const aR=oR;var rd="@firebase/auth",id="1.8.0";/**
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
 */class lR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){V(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function cR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function uR(t){Is(new zn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;V(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:y_(t)},c=new RI(s,r,i,l);return FI(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Is(new zn("auth-internal",e=>{const n=Nn(e.getProvider("auth").getImmediate());return(s=>new lR(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),En(rd,id,cR(t)),En(rd,id,"esm2017")}/**
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
 */const hR=5*60,dR=Ap("authIdTokenMaxAge")||hR;let od=null;const fR=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>dR)return;const r=n==null?void 0:n.token;od!==r&&(od=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Wr(t=Lp()){const e=uc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=MI(t,{popupRedirectResolver:aR,persistence:[yT,P_,N_]}),s=Ap("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=fR(i.toString());rT(n,o,()=>o(n.currentUser)),sT(n,a=>o(a))}}const r=Tp("auth");return r&&$I(n,`http://${r}`),n}function pR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}AI({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Nt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",pR().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});uR("Browser");var gR="firebase",_R="11.0.1";/**
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
 */En(gR,_R,"app");const mR={apiKey:"AIzaSyDU95egjb7rapaUJuVJYu0ZeSbP0OLaeCE",authDomain:"autolearn-members.asia-southeast1.firebaseapp.com",projectId:"autolearn-members",storageBucket:"autolearn-members.appspot.com",messagingSenderId:"535565819374",appId:"1:535565819374:web:ccfe472f513439f3a002ff",measurementId:"G-NTHZSSX71G",databaseURL:"https://autolearn-members-default-rtdb.asia-southeast1.firebasedatabase.app/"},Jc=Dp(mR);Wr(Jc);const Ko=ZS(Jc),yR=Ho(Ko,"projects"),vR=Ho(Ko,"supervisors"),bR=Ho(Ko,"users");var bi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ER(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function wR(t,e,n){var s;return n(t,function(r,i,o){if(e(r,i,o))return s=i,!1}),s}var CR=wR;function SR(t){return function(e,n,s){for(var r=-1,i=Object(e),o=s(e),a=o.length;a--;){var l=o[t?a:++r];if(n(i[l],l,i)===!1)break}return e}}var IR=SR,TR=IR,RR=TR(),AR=RR;function PR(t,e){for(var n=-1,s=Array(t);++n<t;)s[n]=e(n);return s}var OR=PR,NR=typeof bi=="object"&&bi&&bi.Object===Object&&bi,$_=NR,kR=$_,xR=typeof self=="object"&&self&&self.Object===Object&&self,DR=kR||xR||Function("return this")(),sn=DR,LR=sn,MR=LR.Symbol,Go=MR,ad=Go,U_=Object.prototype,FR=U_.hasOwnProperty,$R=U_.toString,nr=ad?ad.toStringTag:void 0;function UR(t){var e=FR.call(t,nr),n=t[nr];try{t[nr]=void 0;var s=!0}catch{}var r=$R.call(t);return s&&(e?t[nr]=n:delete t[nr]),r}var BR=UR,HR=Object.prototype,jR=HR.toString;function WR(t){return jR.call(t)}var VR=WR,ld=Go,qR=BR,KR=VR,GR="[object Null]",zR="[object Undefined]",cd=ld?ld.toStringTag:void 0;function YR(t){return t==null?t===void 0?zR:GR:cd&&cd in Object(t)?qR(t):KR(t)}var ci=YR;function JR(t){return t!=null&&typeof t=="object"}var ui=JR,QR=ci,XR=ui,ZR="[object Arguments]";function eA(t){return XR(t)&&QR(t)==ZR}var tA=eA,ud=tA,nA=ui,B_=Object.prototype,sA=B_.hasOwnProperty,rA=B_.propertyIsEnumerable,iA=ud(function(){return arguments}())?ud:function(t){return nA(t)&&sA.call(t,"callee")&&!rA.call(t,"callee")},H_=iA,oA=Array.isArray,kn=oA,po={exports:{}};function aA(){return!1}var lA=aA;po.exports;(function(t,e){var n=sn,s=lA,r=e&&!e.nodeType&&e,i=r&&!0&&t&&!t.nodeType&&t,o=i&&i.exports===r,a=o?n.Buffer:void 0,l=a?a.isBuffer:void 0,c=l||s;t.exports=c})(po,po.exports);var j_=po.exports,cA=9007199254740991,uA=/^(?:0|[1-9]\d*)$/;function hA(t,e){var n=typeof t;return e=e??cA,!!e&&(n=="number"||n!="symbol"&&uA.test(t))&&t>-1&&t%1==0&&t<e}var W_=hA,dA=9007199254740991;function fA(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=dA}var Qc=fA,pA=ci,gA=Qc,_A=ui,mA="[object Arguments]",yA="[object Array]",vA="[object Boolean]",bA="[object Date]",EA="[object Error]",wA="[object Function]",CA="[object Map]",SA="[object Number]",IA="[object Object]",TA="[object RegExp]",RA="[object Set]",AA="[object String]",PA="[object WeakMap]",OA="[object ArrayBuffer]",NA="[object DataView]",kA="[object Float32Array]",xA="[object Float64Array]",DA="[object Int8Array]",LA="[object Int16Array]",MA="[object Int32Array]",FA="[object Uint8Array]",$A="[object Uint8ClampedArray]",UA="[object Uint16Array]",BA="[object Uint32Array]",ge={};ge[kA]=ge[xA]=ge[DA]=ge[LA]=ge[MA]=ge[FA]=ge[$A]=ge[UA]=ge[BA]=!0;ge[mA]=ge[yA]=ge[OA]=ge[vA]=ge[NA]=ge[bA]=ge[EA]=ge[wA]=ge[CA]=ge[SA]=ge[IA]=ge[TA]=ge[RA]=ge[AA]=ge[PA]=!1;function HA(t){return _A(t)&&gA(t.length)&&!!ge[pA(t)]}var jA=HA;function WA(t){return function(e){return t(e)}}var VA=WA,go={exports:{}};go.exports;(function(t,e){var n=$_,s=e&&!e.nodeType&&e,r=s&&!0&&t&&!t.nodeType&&t,i=r&&r.exports===s,o=i&&n.process,a=function(){try{var l=r&&r.require&&r.require("util").types;return l||o&&o.binding&&o.binding("util")}catch{}}();t.exports=a})(go,go.exports);var qA=go.exports,KA=jA,GA=VA,hd=qA,dd=hd&&hd.isTypedArray,zA=dd?GA(dd):KA,V_=zA,YA=OR,JA=H_,QA=kn,XA=j_,ZA=W_,e0=V_,t0=Object.prototype,n0=t0.hasOwnProperty;function s0(t,e){var n=QA(t),s=!n&&JA(t),r=!n&&!s&&XA(t),i=!n&&!s&&!r&&e0(t),o=n||s||r||i,a=o?YA(t.length,String):[],l=a.length;for(var c in t)(e||n0.call(t,c))&&!(o&&(c=="length"||r&&(c=="offset"||c=="parent")||i&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||ZA(c,l)))&&a.push(c);return a}var r0=s0,i0=Object.prototype;function o0(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||i0;return t===n}var a0=o0;function l0(t,e){return function(n){return t(e(n))}}var c0=l0,u0=c0,h0=u0(Object.keys,Object),d0=h0,f0=a0,p0=d0,g0=Object.prototype,_0=g0.hasOwnProperty;function m0(t){if(!f0(t))return p0(t);var e=[];for(var n in Object(t))_0.call(t,n)&&n!="constructor"&&e.push(n);return e}var y0=m0;function v0(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var Xc=v0,b0=ci,E0=Xc,w0="[object AsyncFunction]",C0="[object Function]",S0="[object GeneratorFunction]",I0="[object Proxy]";function T0(t){if(!E0(t))return!1;var e=b0(t);return e==C0||e==S0||e==w0||e==I0}var q_=T0,R0=q_,A0=Qc;function P0(t){return t!=null&&A0(t.length)&&!R0(t)}var O0=P0,N0=r0,k0=y0,x0=O0;function D0(t){return x0(t)?N0(t):k0(t)}var Zc=D0,L0=AR,M0=Zc;function F0(t,e){return t&&L0(t,e,M0)}var $0=F0;function U0(){this.__data__=[],this.size=0}var B0=U0;function H0(t,e){return t===e||t!==t&&e!==e}var K_=H0,j0=K_;function W0(t,e){for(var n=t.length;n--;)if(j0(t[n][0],e))return n;return-1}var zo=W0,V0=zo,q0=Array.prototype,K0=q0.splice;function G0(t){var e=this.__data__,n=V0(e,t);if(n<0)return!1;var s=e.length-1;return n==s?e.pop():K0.call(e,n,1),--this.size,!0}var z0=G0,Y0=zo;function J0(t){var e=this.__data__,n=Y0(e,t);return n<0?void 0:e[n][1]}var Q0=J0,X0=zo;function Z0(t){return X0(this.__data__,t)>-1}var eP=Z0,tP=zo;function nP(t,e){var n=this.__data__,s=tP(n,t);return s<0?(++this.size,n.push([t,e])):n[s][1]=e,this}var sP=nP,rP=B0,iP=z0,oP=Q0,aP=eP,lP=sP;function Us(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var s=t[e];this.set(s[0],s[1])}}Us.prototype.clear=rP;Us.prototype.delete=iP;Us.prototype.get=oP;Us.prototype.has=aP;Us.prototype.set=lP;var Yo=Us,cP=Yo;function uP(){this.__data__=new cP,this.size=0}var hP=uP;function dP(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}var fP=dP;function pP(t){return this.__data__.get(t)}var gP=pP;function _P(t){return this.__data__.has(t)}var mP=_P,yP=sn,vP=yP["__core-js_shared__"],bP=vP,Oa=bP,fd=function(){var t=/[^.]+$/.exec(Oa&&Oa.keys&&Oa.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function EP(t){return!!fd&&fd in t}var wP=EP,CP=Function.prototype,SP=CP.toString;function IP(t){if(t!=null){try{return SP.call(t)}catch{}try{return t+""}catch{}}return""}var G_=IP,TP=q_,RP=wP,AP=Xc,PP=G_,OP=/[\\^$.*+?()[\]{}|]/g,NP=/^\[object .+?Constructor\]$/,kP=Function.prototype,xP=Object.prototype,DP=kP.toString,LP=xP.hasOwnProperty,MP=RegExp("^"+DP.call(LP).replace(OP,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function FP(t){if(!AP(t)||RP(t))return!1;var e=TP(t)?MP:NP;return e.test(PP(t))}var $P=FP;function UP(t,e){return t==null?void 0:t[e]}var BP=UP,HP=$P,jP=BP;function WP(t,e){var n=jP(t,e);return HP(n)?n:void 0}var Bs=WP,VP=Bs,qP=sn,KP=VP(qP,"Map"),eu=KP,GP=Bs,zP=GP(Object,"create"),Jo=zP,pd=Jo;function YP(){this.__data__=pd?pd(null):{},this.size=0}var JP=YP;function QP(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var XP=QP,ZP=Jo,eO="__lodash_hash_undefined__",tO=Object.prototype,nO=tO.hasOwnProperty;function sO(t){var e=this.__data__;if(ZP){var n=e[t];return n===eO?void 0:n}return nO.call(e,t)?e[t]:void 0}var rO=sO,iO=Jo,oO=Object.prototype,aO=oO.hasOwnProperty;function lO(t){var e=this.__data__;return iO?e[t]!==void 0:aO.call(e,t)}var cO=lO,uO=Jo,hO="__lodash_hash_undefined__";function dO(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=uO&&e===void 0?hO:e,this}var fO=dO,pO=JP,gO=XP,_O=rO,mO=cO,yO=fO;function Hs(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var s=t[e];this.set(s[0],s[1])}}Hs.prototype.clear=pO;Hs.prototype.delete=gO;Hs.prototype.get=_O;Hs.prototype.has=mO;Hs.prototype.set=yO;var vO=Hs,gd=vO,bO=Yo,EO=eu;function wO(){this.size=0,this.__data__={hash:new gd,map:new(EO||bO),string:new gd}}var CO=wO;function SO(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}var IO=SO,TO=IO;function RO(t,e){var n=t.__data__;return TO(e)?n[typeof e=="string"?"string":"hash"]:n.map}var Qo=RO,AO=Qo;function PO(t){var e=AO(this,t).delete(t);return this.size-=e?1:0,e}var OO=PO,NO=Qo;function kO(t){return NO(this,t).get(t)}var xO=kO,DO=Qo;function LO(t){return DO(this,t).has(t)}var MO=LO,FO=Qo;function $O(t,e){var n=FO(this,t),s=n.size;return n.set(t,e),this.size+=n.size==s?0:1,this}var UO=$O,BO=CO,HO=OO,jO=xO,WO=MO,VO=UO;function js(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var s=t[e];this.set(s[0],s[1])}}js.prototype.clear=BO;js.prototype.delete=HO;js.prototype.get=jO;js.prototype.has=WO;js.prototype.set=VO;var tu=js,qO=Yo,KO=eu,GO=tu,zO=200;function YO(t,e){var n=this.__data__;if(n instanceof qO){var s=n.__data__;if(!KO||s.length<zO-1)return s.push([t,e]),this.size=++n.size,this;n=this.__data__=new GO(s)}return n.set(t,e),this.size=n.size,this}var JO=YO,QO=Yo,XO=hP,ZO=fP,eN=gP,tN=mP,nN=JO;function Ws(t){var e=this.__data__=new QO(t);this.size=e.size}Ws.prototype.clear=XO;Ws.prototype.delete=ZO;Ws.prototype.get=eN;Ws.prototype.has=tN;Ws.prototype.set=nN;var z_=Ws,sN="__lodash_hash_undefined__";function rN(t){return this.__data__.set(t,sN),this}var iN=rN;function oN(t){return this.__data__.has(t)}var aN=oN,lN=tu,cN=iN,uN=aN;function _o(t){var e=-1,n=t==null?0:t.length;for(this.__data__=new lN;++e<n;)this.add(t[e])}_o.prototype.add=_o.prototype.push=cN;_o.prototype.has=uN;var hN=_o;function dN(t,e){for(var n=-1,s=t==null?0:t.length;++n<s;)if(e(t[n],n,t))return!0;return!1}var fN=dN;function pN(t,e){return t.has(e)}var gN=pN,_N=hN,mN=fN,yN=gN,vN=1,bN=2;function EN(t,e,n,s,r,i){var o=n&vN,a=t.length,l=e.length;if(a!=l&&!(o&&l>a))return!1;var c=i.get(t),u=i.get(e);if(c&&u)return c==e&&u==t;var h=-1,d=!0,p=n&bN?new _N:void 0;for(i.set(t,e),i.set(e,t);++h<a;){var _=t[h],m=e[h];if(s)var b=o?s(m,_,h,e,t,i):s(_,m,h,t,e,i);if(b!==void 0){if(b)continue;d=!1;break}if(p){if(!mN(e,function(T,R){if(!yN(p,R)&&(_===T||r(_,T,n,s,i)))return p.push(R)})){d=!1;break}}else if(!(_===m||r(_,m,n,s,i))){d=!1;break}}return i.delete(t),i.delete(e),d}var Y_=EN,wN=sn,CN=wN.Uint8Array,SN=CN;function IN(t){var e=-1,n=Array(t.size);return t.forEach(function(s,r){n[++e]=[r,s]}),n}var TN=IN;function RN(t){var e=-1,n=Array(t.size);return t.forEach(function(s){n[++e]=s}),n}var AN=RN,_d=Go,md=SN,PN=K_,ON=Y_,NN=TN,kN=AN,xN=1,DN=2,LN="[object Boolean]",MN="[object Date]",FN="[object Error]",$N="[object Map]",UN="[object Number]",BN="[object RegExp]",HN="[object Set]",jN="[object String]",WN="[object Symbol]",VN="[object ArrayBuffer]",qN="[object DataView]",yd=_d?_d.prototype:void 0,Na=yd?yd.valueOf:void 0;function KN(t,e,n,s,r,i,o){switch(n){case qN:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case VN:return!(t.byteLength!=e.byteLength||!i(new md(t),new md(e)));case LN:case MN:case UN:return PN(+t,+e);case FN:return t.name==e.name&&t.message==e.message;case BN:case jN:return t==e+"";case $N:var a=NN;case HN:var l=s&xN;if(a||(a=kN),t.size!=e.size&&!l)return!1;var c=o.get(t);if(c)return c==e;s|=DN,o.set(t,e);var u=ON(a(t),a(e),s,r,i,o);return o.delete(t),u;case WN:if(Na)return Na.call(t)==Na.call(e)}return!1}var GN=KN;function zN(t,e){for(var n=-1,s=e.length,r=t.length;++n<s;)t[r+n]=e[n];return t}var YN=zN,JN=YN,QN=kn;function XN(t,e,n){var s=e(t);return QN(t)?s:JN(s,n(t))}var ZN=XN;function ek(t,e){for(var n=-1,s=t==null?0:t.length,r=0,i=[];++n<s;){var o=t[n];e(o,n,t)&&(i[r++]=o)}return i}var tk=ek;function nk(){return[]}var sk=nk,rk=tk,ik=sk,ok=Object.prototype,ak=ok.propertyIsEnumerable,vd=Object.getOwnPropertySymbols,lk=vd?function(t){return t==null?[]:(t=Object(t),rk(vd(t),function(e){return ak.call(t,e)}))}:ik,ck=lk,uk=ZN,hk=ck,dk=Zc;function fk(t){return uk(t,dk,hk)}var pk=fk,bd=pk,gk=1,_k=Object.prototype,mk=_k.hasOwnProperty;function yk(t,e,n,s,r,i){var o=n&gk,a=bd(t),l=a.length,c=bd(e),u=c.length;if(l!=u&&!o)return!1;for(var h=l;h--;){var d=a[h];if(!(o?d in e:mk.call(e,d)))return!1}var p=i.get(t),_=i.get(e);if(p&&_)return p==e&&_==t;var m=!0;i.set(t,e),i.set(e,t);for(var b=o;++h<l;){d=a[h];var T=t[d],R=e[d];if(s)var P=o?s(R,T,d,e,t,i):s(T,R,d,t,e,i);if(!(P===void 0?T===R||r(T,R,n,s,i):P)){m=!1;break}b||(b=d=="constructor")}if(m&&!b){var k=t.constructor,B=e.constructor;k!=B&&"constructor"in t&&"constructor"in e&&!(typeof k=="function"&&k instanceof k&&typeof B=="function"&&B instanceof B)&&(m=!1)}return i.delete(t),i.delete(e),m}var vk=yk,bk=Bs,Ek=sn,wk=bk(Ek,"DataView"),Ck=wk,Sk=Bs,Ik=sn,Tk=Sk(Ik,"Promise"),Rk=Tk,Ak=Bs,Pk=sn,Ok=Ak(Pk,"Set"),Nk=Ok,kk=Bs,xk=sn,Dk=kk(xk,"WeakMap"),Lk=Dk,Cl=Ck,Sl=eu,Il=Rk,Tl=Nk,Rl=Lk,J_=ci,Vs=G_,Ed="[object Map]",Mk="[object Object]",wd="[object Promise]",Cd="[object Set]",Sd="[object WeakMap]",Id="[object DataView]",Fk=Vs(Cl),$k=Vs(Sl),Uk=Vs(Il),Bk=Vs(Tl),Hk=Vs(Rl),Un=J_;(Cl&&Un(new Cl(new ArrayBuffer(1)))!=Id||Sl&&Un(new Sl)!=Ed||Il&&Un(Il.resolve())!=wd||Tl&&Un(new Tl)!=Cd||Rl&&Un(new Rl)!=Sd)&&(Un=function(t){var e=J_(t),n=e==Mk?t.constructor:void 0,s=n?Vs(n):"";if(s)switch(s){case Fk:return Id;case $k:return Ed;case Uk:return wd;case Bk:return Cd;case Hk:return Sd}return e});var jk=Un,ka=z_,Wk=Y_,Vk=GN,qk=vk,Td=jk,Rd=kn,Ad=j_,Kk=V_,Gk=1,Pd="[object Arguments]",Od="[object Array]",Ei="[object Object]",zk=Object.prototype,Nd=zk.hasOwnProperty;function Yk(t,e,n,s,r,i){var o=Rd(t),a=Rd(e),l=o?Od:Td(t),c=a?Od:Td(e);l=l==Pd?Ei:l,c=c==Pd?Ei:c;var u=l==Ei,h=c==Ei,d=l==c;if(d&&Ad(t)){if(!Ad(e))return!1;o=!0,u=!1}if(d&&!u)return i||(i=new ka),o||Kk(t)?Wk(t,e,n,s,r,i):Vk(t,e,l,n,s,r,i);if(!(n&Gk)){var p=u&&Nd.call(t,"__wrapped__"),_=h&&Nd.call(e,"__wrapped__");if(p||_){var m=p?t.value():t,b=_?e.value():e;return i||(i=new ka),r(m,b,n,s,i)}}return d?(i||(i=new ka),qk(t,e,n,s,r,i)):!1}var Jk=Yk,Qk=Jk,kd=ui;function Q_(t,e,n,s,r){return t===e?!0:t==null||e==null||!kd(t)&&!kd(e)?t!==t&&e!==e:Qk(t,e,n,s,Q_,r)}var X_=Q_,Xk=z_,Zk=X_,e1=1,t1=2;function n1(t,e,n,s){var r=n.length,i=r,o=!s;if(t==null)return!i;for(t=Object(t);r--;){var a=n[r];if(o&&a[2]?a[1]!==t[a[0]]:!(a[0]in t))return!1}for(;++r<i;){a=n[r];var l=a[0],c=t[l],u=a[1];if(o&&a[2]){if(c===void 0&&!(l in t))return!1}else{var h=new Xk;if(s)var d=s(c,u,l,t,e,h);if(!(d===void 0?Zk(u,c,e1|t1,s,h):d))return!1}}return!0}var s1=n1,r1=Xc;function i1(t){return t===t&&!r1(t)}var Z_=i1,o1=Z_,a1=Zc;function l1(t){for(var e=a1(t),n=e.length;n--;){var s=e[n],r=t[s];e[n]=[s,r,o1(r)]}return e}var c1=l1;function u1(t,e){return function(n){return n==null?!1:n[t]===e&&(e!==void 0||t in Object(n))}}var em=u1,h1=s1,d1=c1,f1=em;function p1(t){var e=d1(t);return e.length==1&&e[0][2]?f1(e[0][0],e[0][1]):function(n){return n===t||h1(n,t,e)}}var g1=p1,_1=ci,m1=ui,y1="[object Symbol]";function v1(t){return typeof t=="symbol"||m1(t)&&_1(t)==y1}var nu=v1,b1=kn,E1=nu,w1=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,C1=/^\w*$/;function S1(t,e){if(b1(t))return!1;var n=typeof t;return n=="number"||n=="symbol"||n=="boolean"||t==null||E1(t)?!0:C1.test(t)||!w1.test(t)||e!=null&&t in Object(e)}var su=S1,tm=tu,I1="Expected a function";function ru(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(I1);var n=function(){var s=arguments,r=e?e.apply(this,s):s[0],i=n.cache;if(i.has(r))return i.get(r);var o=t.apply(this,s);return n.cache=i.set(r,o)||i,o};return n.cache=new(ru.Cache||tm),n}ru.Cache=tm;var T1=ru,R1=T1,A1=500;function P1(t){var e=R1(t,function(s){return n.size===A1&&n.clear(),s}),n=e.cache;return e}var O1=P1,N1=O1,k1=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,x1=/\\(\\)?/g,D1=N1(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(k1,function(n,s,r,i){e.push(r?i.replace(x1,"$1"):s||n)}),e}),L1=D1;function M1(t,e){for(var n=-1,s=t==null?0:t.length,r=Array(s);++n<s;)r[n]=e(t[n],n,t);return r}var F1=M1,xd=Go,$1=F1,U1=kn,B1=nu,H1=1/0,Dd=xd?xd.prototype:void 0,Ld=Dd?Dd.toString:void 0;function nm(t){if(typeof t=="string")return t;if(U1(t))return $1(t,nm)+"";if(B1(t))return Ld?Ld.call(t):"";var e=t+"";return e=="0"&&1/t==-H1?"-0":e}var j1=nm,W1=j1;function V1(t){return t==null?"":W1(t)}var q1=V1,K1=kn,G1=su,z1=L1,Y1=q1;function J1(t,e){return K1(t)?t:G1(t,e)?[t]:z1(Y1(t))}var sm=J1,Q1=nu,X1=1/0;function Z1(t){if(typeof t=="string"||Q1(t))return t;var e=t+"";return e=="0"&&1/t==-X1?"-0":e}var Xo=Z1,ex=sm,tx=Xo;function nx(t,e){e=ex(e,t);for(var n=0,s=e.length;t!=null&&n<s;)t=t[tx(e[n++])];return n&&n==s?t:void 0}var rm=nx,sx=rm;function rx(t,e,n){var s=t==null?void 0:sx(t,e);return s===void 0?n:s}var ix=rx;function ox(t,e){return t!=null&&e in Object(t)}var ax=ox,lx=sm,cx=H_,ux=kn,hx=W_,dx=Qc,fx=Xo;function px(t,e,n){e=lx(e,t);for(var s=-1,r=e.length,i=!1;++s<r;){var o=fx(e[s]);if(!(i=t!=null&&n(t,o)))break;t=t[o]}return i||++s!=r?i:(r=t==null?0:t.length,!!r&&dx(r)&&hx(o,r)&&(ux(t)||cx(t)))}var gx=px,_x=ax,mx=gx;function yx(t,e){return t!=null&&mx(t,e,_x)}var vx=yx,bx=X_,Ex=ix,wx=vx,Cx=su,Sx=Z_,Ix=em,Tx=Xo,Rx=1,Ax=2;function Px(t,e){return Cx(t)&&Sx(e)?Ix(Tx(t),e):function(n){var s=Ex(n,t);return s===void 0&&s===e?wx(n,t):bx(e,s,Rx|Ax)}}var Ox=Px;function Nx(t){return t}var kx=Nx;function xx(t){return function(e){return e==null?void 0:e[t]}}var Dx=xx,Lx=rm;function Mx(t){return function(e){return Lx(e,t)}}var Fx=Mx,$x=Dx,Ux=Fx,Bx=su,Hx=Xo;function jx(t){return Bx(t)?$x(Hx(t)):Ux(t)}var Wx=jx,Vx=g1,qx=Ox,Kx=kx,Gx=kn,zx=Wx;function Yx(t){return typeof t=="function"?t:t==null?Kx:typeof t=="object"?Gx(t)?qx(t[0],t[1]):Vx(t):zx(t)}var Jx=Yx,Qx=CR,Xx=$0,Zx=Jx;function eD(t,e){return Qx(t,Zx(e),Xx)}var tD=eD,nD=function(){function t(e,n){for(var s=0;s<n.length;s++){var r=n[s];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,s){return n&&t(e.prototype,n),s&&t(e,s),e}}();function sD(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var rD=tD,iD={messenger:/\bFB[\w_]+\/(Messenger|MESSENGER)/,facebook:/\bFB[\w_]+\//,twitter:/\bTwitter/i,line:/\bLine\//i,wechat:/\bMicroMessenger\//i,puffin:/\bPuffin/i,miui:/\bMiuiBrowser\//i,instagram:/\bInstagram/i,chrome:/\bCrMo\b|CriOS|Android.*Chrome\/[.0-9]* (Mobile)?/,safari:/Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari/,ie:/IEMobile|MSIEMobile/,firefox:/fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS/},oD=function(){function t(e){sD(this,t),this.ua="",this.ua=e}return nD(t,[{key:"browser",get:function(){var n=this;return rD(iD,function(s){return s.test(n.ua)})||"other"}},{key:"isMobile",get:function(){return/(iPad|iPhone|Android|Mobile)/i.test(this.ua)||!1}},{key:"isDesktop",get:function(){return!this.isMobile}},{key:"isInApp",get:function(){var n=["WebView","(iPhone|iPod|iPad)(?!.*Safari/)","Android.*(wv|.0.0.0)"],s=new RegExp("("+n.join("|")+")","ig");return!!this.ua.match(s)}}]),t}(),aD=oD;const lD=ER(aD);function im(t,e){return function(){return t.apply(e,arguments)}}const{toString:cD}=Object.prototype,{getPrototypeOf:iu}=Object,Zo=(t=>e=>{const n=cD.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Et=t=>(t=t.toLowerCase(),e=>Zo(e)===t),ea=t=>e=>typeof e===t,{isArray:qs}=Array,Vr=ea("undefined");function uD(t){return t!==null&&!Vr(t)&&t.constructor!==null&&!Vr(t.constructor)&&rt(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const om=Et("ArrayBuffer");function hD(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&om(t.buffer),e}const dD=ea("string"),rt=ea("function"),am=ea("number"),ta=t=>t!==null&&typeof t=="object",fD=t=>t===!0||t===!1,xi=t=>{if(Zo(t)!=="object")return!1;const e=iu(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},pD=Et("Date"),gD=Et("File"),_D=Et("Blob"),mD=Et("FileList"),yD=t=>ta(t)&&rt(t.pipe),vD=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||rt(t.append)&&((e=Zo(t))==="formdata"||e==="object"&&rt(t.toString)&&t.toString()==="[object FormData]"))},bD=Et("URLSearchParams"),[ED,wD,CD,SD]=["ReadableStream","Request","Response","Headers"].map(Et),ID=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function hi(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let s,r;if(typeof t!="object"&&(t=[t]),qs(t))for(s=0,r=t.length;s<r;s++)e.call(null,t[s],s,t);else{const i=n?Object.getOwnPropertyNames(t):Object.keys(t),o=i.length;let a;for(s=0;s<o;s++)a=i[s],e.call(null,t[a],a,t)}}function lm(t,e){e=e.toLowerCase();const n=Object.keys(t);let s=n.length,r;for(;s-- >0;)if(r=n[s],e===r.toLowerCase())return r;return null}const jn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,cm=t=>!Vr(t)&&t!==jn;function Al(){const{caseless:t}=cm(this)&&this||{},e={},n=(s,r)=>{const i=t&&lm(e,r)||r;xi(e[i])&&xi(s)?e[i]=Al(e[i],s):xi(s)?e[i]=Al({},s):qs(s)?e[i]=s.slice():e[i]=s};for(let s=0,r=arguments.length;s<r;s++)arguments[s]&&hi(arguments[s],n);return e}const TD=(t,e,n,{allOwnKeys:s}={})=>(hi(e,(r,i)=>{n&&rt(r)?t[i]=im(r,n):t[i]=r},{allOwnKeys:s}),t),RD=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),AD=(t,e,n,s)=>{t.prototype=Object.create(e.prototype,s),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},PD=(t,e,n,s)=>{let r,i,o;const a={};if(e=e||{},t==null)return e;do{for(r=Object.getOwnPropertyNames(t),i=r.length;i-- >0;)o=r[i],(!s||s(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&iu(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},OD=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const s=t.indexOf(e,n);return s!==-1&&s===n},ND=t=>{if(!t)return null;if(qs(t))return t;let e=t.length;if(!am(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},kD=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&iu(Uint8Array)),xD=(t,e)=>{const s=(t&&t[Symbol.iterator]).call(t);let r;for(;(r=s.next())&&!r.done;){const i=r.value;e.call(t,i[0],i[1])}},DD=(t,e)=>{let n;const s=[];for(;(n=t.exec(e))!==null;)s.push(n);return s},LD=Et("HTMLFormElement"),MD=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,s,r){return s.toUpperCase()+r}),Md=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),FD=Et("RegExp"),um=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),s={};hi(n,(r,i)=>{let o;(o=e(r,i,t))!==!1&&(s[i]=o||r)}),Object.defineProperties(t,s)},$D=t=>{um(t,(e,n)=>{if(rt(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const s=t[n];if(rt(s)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},UD=(t,e)=>{const n={},s=r=>{r.forEach(i=>{n[i]=!0})};return qs(t)?s(t):s(String(t).split(e)),n},BD=()=>{},HD=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e,xa="abcdefghijklmnopqrstuvwxyz",Fd="0123456789",hm={DIGIT:Fd,ALPHA:xa,ALPHA_DIGIT:xa+xa.toUpperCase()+Fd},jD=(t=16,e=hm.ALPHA_DIGIT)=>{let n="";const{length:s}=e;for(;t--;)n+=e[Math.random()*s|0];return n};function WD(t){return!!(t&&rt(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const VD=t=>{const e=new Array(10),n=(s,r)=>{if(ta(s)){if(e.indexOf(s)>=0)return;if(!("toJSON"in s)){e[r]=s;const i=qs(s)?[]:{};return hi(s,(o,a)=>{const l=n(o,r+1);!Vr(l)&&(i[a]=l)}),e[r]=void 0,i}}return s};return n(t,0)},qD=Et("AsyncFunction"),KD=t=>t&&(ta(t)||rt(t))&&rt(t.then)&&rt(t.catch),dm=((t,e)=>t?setImmediate:e?((n,s)=>(jn.addEventListener("message",({source:r,data:i})=>{r===jn&&i===n&&s.length&&s.shift()()},!1),r=>{s.push(r),jn.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",rt(jn.postMessage)),GD=typeof queueMicrotask<"u"?queueMicrotask.bind(jn):typeof process<"u"&&process.nextTick||dm,v={isArray:qs,isArrayBuffer:om,isBuffer:uD,isFormData:vD,isArrayBufferView:hD,isString:dD,isNumber:am,isBoolean:fD,isObject:ta,isPlainObject:xi,isReadableStream:ED,isRequest:wD,isResponse:CD,isHeaders:SD,isUndefined:Vr,isDate:pD,isFile:gD,isBlob:_D,isRegExp:FD,isFunction:rt,isStream:yD,isURLSearchParams:bD,isTypedArray:kD,isFileList:mD,forEach:hi,merge:Al,extend:TD,trim:ID,stripBOM:RD,inherits:AD,toFlatObject:PD,kindOf:Zo,kindOfTest:Et,endsWith:OD,toArray:ND,forEachEntry:xD,matchAll:DD,isHTMLForm:LD,hasOwnProperty:Md,hasOwnProp:Md,reduceDescriptors:um,freezeMethods:$D,toObjectSet:UD,toCamelCase:MD,noop:BD,toFiniteNumber:HD,findKey:lm,global:jn,isContextDefined:cm,ALPHABET:hm,generateString:jD,isSpecCompliantForm:WD,toJSONObject:VD,isAsyncFn:qD,isThenable:KD,setImmediate:dm,asap:GD};function G(t,e,n,s,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),s&&(this.request=s),r&&(this.response=r,this.status=r.status?r.status:null)}v.inherits(G,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:v.toJSONObject(this.config),code:this.code,status:this.status}}});const fm=G.prototype,pm={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{pm[t]={value:t}});Object.defineProperties(G,pm);Object.defineProperty(fm,"isAxiosError",{value:!0});G.from=(t,e,n,s,r,i)=>{const o=Object.create(fm);return v.toFlatObject(t,o,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),G.call(o,t.message,e,n,s,r),o.cause=t,o.name=t.name,i&&Object.assign(o,i),o};const zD=null;function Pl(t){return v.isPlainObject(t)||v.isArray(t)}function gm(t){return v.endsWith(t,"[]")?t.slice(0,-2):t}function $d(t,e,n){return t?t.concat(e).map(function(r,i){return r=gm(r),!n&&i?"["+r+"]":r}).join(n?".":""):e}function YD(t){return v.isArray(t)&&!t.some(Pl)}const JD=v.toFlatObject(v,{},null,function(e){return/^is[A-Z]/.test(e)});function na(t,e,n){if(!v.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=v.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,b){return!v.isUndefined(b[m])});const s=n.metaTokens,r=n.visitor||u,i=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&v.isSpecCompliantForm(e);if(!v.isFunction(r))throw new TypeError("visitor must be a function");function c(_){if(_===null)return"";if(v.isDate(_))return _.toISOString();if(!l&&v.isBlob(_))throw new G("Blob is not supported. Use a Buffer instead.");return v.isArrayBuffer(_)||v.isTypedArray(_)?l&&typeof Blob=="function"?new Blob([_]):Buffer.from(_):_}function u(_,m,b){let T=_;if(_&&!b&&typeof _=="object"){if(v.endsWith(m,"{}"))m=s?m:m.slice(0,-2),_=JSON.stringify(_);else if(v.isArray(_)&&YD(_)||(v.isFileList(_)||v.endsWith(m,"[]"))&&(T=v.toArray(_)))return m=gm(m),T.forEach(function(P,k){!(v.isUndefined(P)||P===null)&&e.append(o===!0?$d([m],k,i):o===null?m:m+"[]",c(P))}),!1}return Pl(_)?!0:(e.append($d(b,m,i),c(_)),!1)}const h=[],d=Object.assign(JD,{defaultVisitor:u,convertValue:c,isVisitable:Pl});function p(_,m){if(!v.isUndefined(_)){if(h.indexOf(_)!==-1)throw Error("Circular reference detected in "+m.join("."));h.push(_),v.forEach(_,function(T,R){(!(v.isUndefined(T)||T===null)&&r.call(e,T,v.isString(R)?R.trim():R,m,d))===!0&&p(T,m?m.concat(R):[R])}),h.pop()}}if(!v.isObject(t))throw new TypeError("data must be an object");return p(t),e}function Ud(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(s){return e[s]})}function ou(t,e){this._pairs=[],t&&na(t,this,e)}const _m=ou.prototype;_m.append=function(e,n){this._pairs.push([e,n])};_m.toString=function(e){const n=e?function(s){return e.call(this,s,Ud)}:Ud;return this._pairs.map(function(r){return n(r[0])+"="+n(r[1])},"").join("&")};function QD(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function mm(t,e,n){if(!e)return t;const s=n&&n.encode||QD,r=n&&n.serialize;let i;if(r?i=r(e,n):i=v.isURLSearchParams(e)?e.toString():new ou(e,n).toString(s),i){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+i}return t}class Bd{constructor(){this.handlers=[]}use(e,n,s){return this.handlers.push({fulfilled:e,rejected:n,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){v.forEach(this.handlers,function(s){s!==null&&e(s)})}}const ym={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},XD=typeof URLSearchParams<"u"?URLSearchParams:ou,ZD=typeof FormData<"u"?FormData:null,eL=typeof Blob<"u"?Blob:null,tL={isBrowser:!0,classes:{URLSearchParams:XD,FormData:ZD,Blob:eL},protocols:["http","https","file","blob","url","data"]},au=typeof window<"u"&&typeof document<"u",Ol=typeof navigator=="object"&&navigator||void 0,nL=au&&(!Ol||["ReactNative","NativeScript","NS"].indexOf(Ol.product)<0),sL=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",rL=au&&window.location.href||"http://localhost",iL=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:au,hasStandardBrowserEnv:nL,hasStandardBrowserWebWorkerEnv:sL,navigator:Ol,origin:rL},Symbol.toStringTag,{value:"Module"})),ze={...iL,...tL};function oL(t,e){return na(t,new ze.classes.URLSearchParams,Object.assign({visitor:function(n,s,r,i){return ze.isNode&&v.isBuffer(n)?(this.append(s,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}function aL(t){return v.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function lL(t){const e={},n=Object.keys(t);let s;const r=n.length;let i;for(s=0;s<r;s++)i=n[s],e[i]=t[i];return e}function vm(t){function e(n,s,r,i){let o=n[i++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=i>=n.length;return o=!o&&v.isArray(r)?r.length:o,l?(v.hasOwnProp(r,o)?r[o]=[r[o],s]:r[o]=s,!a):((!r[o]||!v.isObject(r[o]))&&(r[o]=[]),e(n,s,r[o],i)&&v.isArray(r[o])&&(r[o]=lL(r[o])),!a)}if(v.isFormData(t)&&v.isFunction(t.entries)){const n={};return v.forEachEntry(t,(s,r)=>{e(aL(s),r,n,0)}),n}return null}function cL(t,e,n){if(v.isString(t))try{return(e||JSON.parse)(t),v.trim(t)}catch(s){if(s.name!=="SyntaxError")throw s}return(0,JSON.stringify)(t)}const di={transitional:ym,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const s=n.getContentType()||"",r=s.indexOf("application/json")>-1,i=v.isObject(e);if(i&&v.isHTMLForm(e)&&(e=new FormData(e)),v.isFormData(e))return r?JSON.stringify(vm(e)):e;if(v.isArrayBuffer(e)||v.isBuffer(e)||v.isStream(e)||v.isFile(e)||v.isBlob(e)||v.isReadableStream(e))return e;if(v.isArrayBufferView(e))return e.buffer;if(v.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(i){if(s.indexOf("application/x-www-form-urlencoded")>-1)return oL(e,this.formSerializer).toString();if((a=v.isFileList(e))||s.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return na(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return i||r?(n.setContentType("application/json",!1),cL(e)):e}],transformResponse:[function(e){const n=this.transitional||di.transitional,s=n&&n.forcedJSONParsing,r=this.responseType==="json";if(v.isResponse(e)||v.isReadableStream(e))return e;if(e&&v.isString(e)&&(s&&!this.responseType||r)){const o=!(n&&n.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?G.from(a,G.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ze.classes.FormData,Blob:ze.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};v.forEach(["delete","get","head","post","put","patch"],t=>{di.headers[t]={}});const uL=v.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),hL=t=>{const e={};let n,s,r;return t&&t.split(`
`).forEach(function(o){r=o.indexOf(":"),n=o.substring(0,r).trim().toLowerCase(),s=o.substring(r+1).trim(),!(!n||e[n]&&uL[n])&&(n==="set-cookie"?e[n]?e[n].push(s):e[n]=[s]:e[n]=e[n]?e[n]+", "+s:s)}),e},Hd=Symbol("internals");function sr(t){return t&&String(t).trim().toLowerCase()}function Di(t){return t===!1||t==null?t:v.isArray(t)?t.map(Di):String(t)}function dL(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let s;for(;s=n.exec(t);)e[s[1]]=s[2];return e}const fL=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Da(t,e,n,s,r){if(v.isFunction(s))return s.call(this,e,n);if(r&&(e=n),!!v.isString(e)){if(v.isString(s))return e.indexOf(s)!==-1;if(v.isRegExp(s))return s.test(e)}}function pL(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,s)=>n.toUpperCase()+s)}function gL(t,e){const n=v.toCamelCase(" "+e);["get","set","has"].forEach(s=>{Object.defineProperty(t,s+n,{value:function(r,i,o){return this[s].call(this,e,r,i,o)},configurable:!0})})}class Ye{constructor(e){e&&this.set(e)}set(e,n,s){const r=this;function i(a,l,c){const u=sr(l);if(!u)throw new Error("header name must be a non-empty string");const h=v.findKey(r,u);(!h||r[h]===void 0||c===!0||c===void 0&&r[h]!==!1)&&(r[h||l]=Di(a))}const o=(a,l)=>v.forEach(a,(c,u)=>i(c,u,l));if(v.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(v.isString(e)&&(e=e.trim())&&!fL(e))o(hL(e),n);else if(v.isHeaders(e))for(const[a,l]of e.entries())i(l,a,s);else e!=null&&i(n,e,s);return this}get(e,n){if(e=sr(e),e){const s=v.findKey(this,e);if(s){const r=this[s];if(!n)return r;if(n===!0)return dL(r);if(v.isFunction(n))return n.call(this,r,s);if(v.isRegExp(n))return n.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=sr(e),e){const s=v.findKey(this,e);return!!(s&&this[s]!==void 0&&(!n||Da(this,this[s],s,n)))}return!1}delete(e,n){const s=this;let r=!1;function i(o){if(o=sr(o),o){const a=v.findKey(s,o);a&&(!n||Da(s,s[a],a,n))&&(delete s[a],r=!0)}}return v.isArray(e)?e.forEach(i):i(e),r}clear(e){const n=Object.keys(this);let s=n.length,r=!1;for(;s--;){const i=n[s];(!e||Da(this,this[i],i,e,!0))&&(delete this[i],r=!0)}return r}normalize(e){const n=this,s={};return v.forEach(this,(r,i)=>{const o=v.findKey(s,i);if(o){n[o]=Di(r),delete n[i];return}const a=e?pL(i):String(i).trim();a!==i&&delete n[i],n[a]=Di(r),s[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return v.forEach(this,(s,r)=>{s!=null&&s!==!1&&(n[r]=e&&v.isArray(s)?s.join(", "):s)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const s=new this(e);return n.forEach(r=>s.set(r)),s}static accessor(e){const s=(this[Hd]=this[Hd]={accessors:{}}).accessors,r=this.prototype;function i(o){const a=sr(o);s[a]||(gL(r,o),s[a]=!0)}return v.isArray(e)?e.forEach(i):i(e),this}}Ye.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);v.reduceDescriptors(Ye.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(s){this[n]=s}}});v.freezeMethods(Ye);function La(t,e){const n=this||di,s=e||n,r=Ye.from(s.headers);let i=s.data;return v.forEach(t,function(a){i=a.call(n,i,r.normalize(),e?e.status:void 0)}),r.normalize(),i}function bm(t){return!!(t&&t.__CANCEL__)}function Ks(t,e,n){G.call(this,t??"canceled",G.ERR_CANCELED,e,n),this.name="CanceledError"}v.inherits(Ks,G,{__CANCEL__:!0});function Em(t,e,n){const s=n.config.validateStatus;!n.status||!s||s(n.status)?t(n):e(new G("Request failed with status code "+n.status,[G.ERR_BAD_REQUEST,G.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function _L(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function mL(t,e){t=t||10;const n=new Array(t),s=new Array(t);let r=0,i=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),u=s[i];o||(o=c),n[r]=l,s[r]=c;let h=i,d=0;for(;h!==r;)d+=n[h++],h=h%t;if(r=(r+1)%t,r===i&&(i=(i+1)%t),c-o<e)return;const p=u&&c-u;return p?Math.round(d*1e3/p):void 0}}function yL(t,e){let n=0,s=1e3/e,r,i;const o=(c,u=Date.now())=>{n=u,r=null,i&&(clearTimeout(i),i=null),t.apply(null,c)};return[(...c)=>{const u=Date.now(),h=u-n;h>=s?o(c,u):(r=c,i||(i=setTimeout(()=>{i=null,o(r)},s-h)))},()=>r&&o(r)]}const mo=(t,e,n=3)=>{let s=0;const r=mL(50,250);return yL(i=>{const o=i.loaded,a=i.lengthComputable?i.total:void 0,l=o-s,c=r(l),u=o<=a;s=o;const h={loaded:o,total:a,progress:a?o/a:void 0,bytes:l,rate:c||void 0,estimated:c&&a&&u?(a-o)/c:void 0,event:i,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(h)},n)},jd=(t,e)=>{const n=t!=null;return[s=>e[0]({lengthComputable:n,total:t,loaded:s}),e[1]]},Wd=t=>(...e)=>v.asap(()=>t(...e)),vL=ze.hasStandardBrowserEnv?function(){const e=ze.navigator&&/(msie|trident)/i.test(ze.navigator.userAgent),n=document.createElement("a");let s;function r(i){let o=i;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return s=r(window.location.href),function(o){const a=v.isString(o)?r(o):o;return a.protocol===s.protocol&&a.host===s.host}}():function(){return function(){return!0}}(),bL=ze.hasStandardBrowserEnv?{write(t,e,n,s,r,i){const o=[t+"="+encodeURIComponent(e)];v.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),v.isString(s)&&o.push("path="+s),v.isString(r)&&o.push("domain="+r),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function EL(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function wL(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function wm(t,e){return t&&!EL(e)?wL(t,e):e}const Vd=t=>t instanceof Ye?{...t}:t;function es(t,e){e=e||{};const n={};function s(c,u,h){return v.isPlainObject(c)&&v.isPlainObject(u)?v.merge.call({caseless:h},c,u):v.isPlainObject(u)?v.merge({},u):v.isArray(u)?u.slice():u}function r(c,u,h){if(v.isUndefined(u)){if(!v.isUndefined(c))return s(void 0,c,h)}else return s(c,u,h)}function i(c,u){if(!v.isUndefined(u))return s(void 0,u)}function o(c,u){if(v.isUndefined(u)){if(!v.isUndefined(c))return s(void 0,c)}else return s(void 0,u)}function a(c,u,h){if(h in e)return s(c,u);if(h in t)return s(void 0,c)}const l={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(c,u)=>r(Vd(c),Vd(u),!0)};return v.forEach(Object.keys(Object.assign({},t,e)),function(u){const h=l[u]||r,d=h(t[u],e[u],u);v.isUndefined(d)&&h!==a||(n[u]=d)}),n}const Cm=t=>{const e=es({},t);let{data:n,withXSRFToken:s,xsrfHeaderName:r,xsrfCookieName:i,headers:o,auth:a}=e;e.headers=o=Ye.from(o),e.url=mm(wm(e.baseURL,e.url),t.params,t.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let l;if(v.isFormData(n)){if(ze.hasStandardBrowserEnv||ze.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((l=o.getContentType())!==!1){const[c,...u]=l?l.split(";").map(h=>h.trim()).filter(Boolean):[];o.setContentType([c||"multipart/form-data",...u].join("; "))}}if(ze.hasStandardBrowserEnv&&(s&&v.isFunction(s)&&(s=s(e)),s||s!==!1&&vL(e.url))){const c=r&&i&&bL.read(i);c&&o.set(r,c)}return e},CL=typeof XMLHttpRequest<"u",SL=CL&&function(t){return new Promise(function(n,s){const r=Cm(t);let i=r.data;const o=Ye.from(r.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:c}=r,u,h,d,p,_;function m(){p&&p(),_&&_(),r.cancelToken&&r.cancelToken.unsubscribe(u),r.signal&&r.signal.removeEventListener("abort",u)}let b=new XMLHttpRequest;b.open(r.method.toUpperCase(),r.url,!0),b.timeout=r.timeout;function T(){if(!b)return;const P=Ye.from("getAllResponseHeaders"in b&&b.getAllResponseHeaders()),B={data:!a||a==="text"||a==="json"?b.responseText:b.response,status:b.status,statusText:b.statusText,headers:P,config:t,request:b};Em(function(Q){n(Q),m()},function(Q){s(Q),m()},B),b=null}"onloadend"in b?b.onloadend=T:b.onreadystatechange=function(){!b||b.readyState!==4||b.status===0&&!(b.responseURL&&b.responseURL.indexOf("file:")===0)||setTimeout(T)},b.onabort=function(){b&&(s(new G("Request aborted",G.ECONNABORTED,t,b)),b=null)},b.onerror=function(){s(new G("Network Error",G.ERR_NETWORK,t,b)),b=null},b.ontimeout=function(){let k=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const B=r.transitional||ym;r.timeoutErrorMessage&&(k=r.timeoutErrorMessage),s(new G(k,B.clarifyTimeoutError?G.ETIMEDOUT:G.ECONNABORTED,t,b)),b=null},i===void 0&&o.setContentType(null),"setRequestHeader"in b&&v.forEach(o.toJSON(),function(k,B){b.setRequestHeader(B,k)}),v.isUndefined(r.withCredentials)||(b.withCredentials=!!r.withCredentials),a&&a!=="json"&&(b.responseType=r.responseType),c&&([d,_]=mo(c,!0),b.addEventListener("progress",d)),l&&b.upload&&([h,p]=mo(l),b.upload.addEventListener("progress",h),b.upload.addEventListener("loadend",p)),(r.cancelToken||r.signal)&&(u=P=>{b&&(s(!P||P.type?new Ks(null,t,b):P),b.abort(),b=null)},r.cancelToken&&r.cancelToken.subscribe(u),r.signal&&(r.signal.aborted?u():r.signal.addEventListener("abort",u)));const R=_L(r.url);if(R&&ze.protocols.indexOf(R)===-1){s(new G("Unsupported protocol "+R+":",G.ERR_BAD_REQUEST,t));return}b.send(i||null)})},IL=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let s=new AbortController,r;const i=function(c){if(!r){r=!0,a();const u=c instanceof Error?c:this.reason;s.abort(u instanceof G?u:new Ks(u instanceof Error?u.message:u))}};let o=e&&setTimeout(()=>{o=null,i(new G(`timeout ${e} of ms exceeded`,G.ETIMEDOUT))},e);const a=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(c=>{c.unsubscribe?c.unsubscribe(i):c.removeEventListener("abort",i)}),t=null)};t.forEach(c=>c.addEventListener("abort",i));const{signal:l}=s;return l.unsubscribe=()=>v.asap(a),l}},TL=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let s=0,r;for(;s<n;)r=s+e,yield t.slice(s,r),s=r},RL=async function*(t,e){for await(const n of AL(t))yield*TL(n,e)},AL=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:s}=await e.read();if(n)break;yield s}}finally{await e.cancel()}},qd=(t,e,n,s)=>{const r=RL(t,e);let i=0,o,a=l=>{o||(o=!0,s&&s(l))};return new ReadableStream({async pull(l){try{const{done:c,value:u}=await r.next();if(c){a(),l.close();return}let h=u.byteLength;if(n){let d=i+=h;n(d)}l.enqueue(new Uint8Array(u))}catch(c){throw a(c),c}},cancel(l){return a(l),r.return()}},{highWaterMark:2})},sa=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Sm=sa&&typeof ReadableStream=="function",PL=sa&&(typeof TextEncoder=="function"?(t=>e=>t.encode(e))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),Im=(t,...e)=>{try{return!!t(...e)}catch{return!1}},OL=Sm&&Im(()=>{let t=!1;const e=new Request(ze.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e}),Kd=64*1024,Nl=Sm&&Im(()=>v.isReadableStream(new Response("").body)),yo={stream:Nl&&(t=>t.body)};sa&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!yo[e]&&(yo[e]=v.isFunction(t[e])?n=>n[e]():(n,s)=>{throw new G(`Response type '${e}' is not supported`,G.ERR_NOT_SUPPORT,s)})})})(new Response);const NL=async t=>{if(t==null)return 0;if(v.isBlob(t))return t.size;if(v.isSpecCompliantForm(t))return(await new Request(ze.origin,{method:"POST",body:t}).arrayBuffer()).byteLength;if(v.isArrayBufferView(t)||v.isArrayBuffer(t))return t.byteLength;if(v.isURLSearchParams(t)&&(t=t+""),v.isString(t))return(await PL(t)).byteLength},kL=async(t,e)=>{const n=v.toFiniteNumber(t.getContentLength());return n??NL(e)},xL=sa&&(async t=>{let{url:e,method:n,data:s,signal:r,cancelToken:i,timeout:o,onDownloadProgress:a,onUploadProgress:l,responseType:c,headers:u,withCredentials:h="same-origin",fetchOptions:d}=Cm(t);c=c?(c+"").toLowerCase():"text";let p=IL([r,i&&i.toAbortSignal()],o),_;const m=p&&p.unsubscribe&&(()=>{p.unsubscribe()});let b;try{if(l&&OL&&n!=="get"&&n!=="head"&&(b=await kL(u,s))!==0){let B=new Request(e,{method:"POST",body:s,duplex:"half"}),ee;if(v.isFormData(s)&&(ee=B.headers.get("content-type"))&&u.setContentType(ee),B.body){const[Q,Oe]=jd(b,mo(Wd(l)));s=qd(B.body,Kd,Q,Oe)}}v.isString(h)||(h=h?"include":"omit");const T="credentials"in Request.prototype;_=new Request(e,{...d,signal:p,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:s,duplex:"half",credentials:T?h:void 0});let R=await fetch(_);const P=Nl&&(c==="stream"||c==="response");if(Nl&&(a||P&&m)){const B={};["status","statusText","headers"].forEach($e=>{B[$e]=R[$e]});const ee=v.toFiniteNumber(R.headers.get("content-length")),[Q,Oe]=a&&jd(ee,mo(Wd(a),!0))||[];R=new Response(qd(R.body,Kd,Q,()=>{Oe&&Oe(),m&&m()}),B)}c=c||"text";let k=await yo[v.findKey(yo,c)||"text"](R,t);return!P&&m&&m(),await new Promise((B,ee)=>{Em(B,ee,{data:k,headers:Ye.from(R.headers),status:R.status,statusText:R.statusText,config:t,request:_})})}catch(T){throw m&&m(),T&&T.name==="TypeError"&&/fetch/i.test(T.message)?Object.assign(new G("Network Error",G.ERR_NETWORK,t,_),{cause:T.cause||T}):G.from(T,T&&T.code,t,_)}}),kl={http:zD,xhr:SL,fetch:xL};v.forEach(kl,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const Gd=t=>`- ${t}`,DL=t=>v.isFunction(t)||t===null||t===!1,Tm={getAdapter:t=>{t=v.isArray(t)?t:[t];const{length:e}=t;let n,s;const r={};for(let i=0;i<e;i++){n=t[i];let o;if(s=n,!DL(n)&&(s=kl[(o=String(n)).toLowerCase()],s===void 0))throw new G(`Unknown adapter '${o}'`);if(s)break;r[o||"#"+i]=s}if(!s){const i=Object.entries(r).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let o=e?i.length>1?`since :
`+i.map(Gd).join(`
`):" "+Gd(i[0]):"as no adapter specified";throw new G("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return s},adapters:kl};function Ma(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Ks(null,t)}function zd(t){return Ma(t),t.headers=Ye.from(t.headers),t.data=La.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Tm.getAdapter(t.adapter||di.adapter)(t).then(function(s){return Ma(t),s.data=La.call(t,t.transformResponse,s),s.headers=Ye.from(s.headers),s},function(s){return bm(s)||(Ma(t),s&&s.response&&(s.response.data=La.call(t,t.transformResponse,s.response),s.response.headers=Ye.from(s.response.headers))),Promise.reject(s)})}const Rm="1.7.7",lu={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{lu[t]=function(s){return typeof s===t||"a"+(e<1?"n ":" ")+t}});const Yd={};lu.transitional=function(e,n,s){function r(i,o){return"[Axios v"+Rm+"] Transitional option '"+i+"'"+o+(s?". "+s:"")}return(i,o,a)=>{if(e===!1)throw new G(r(o," has been removed"+(n?" in "+n:"")),G.ERR_DEPRECATED);return n&&!Yd[o]&&(Yd[o]=!0,console.warn(r(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,a):!0}};function LL(t,e,n){if(typeof t!="object")throw new G("options must be an object",G.ERR_BAD_OPTION_VALUE);const s=Object.keys(t);let r=s.length;for(;r-- >0;){const i=s[r],o=e[i];if(o){const a=t[i],l=a===void 0||o(a,i,t);if(l!==!0)throw new G("option "+i+" must be "+l,G.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new G("Unknown option "+i,G.ERR_BAD_OPTION)}}const xl={assertOptions:LL,validators:lu},ln=xl.validators;class Vn{constructor(e){this.defaults=e,this.interceptors={request:new Bd,response:new Bd}}async request(e,n){try{return await this._request(e,n)}catch(s){if(s instanceof Error){let r;Error.captureStackTrace?Error.captureStackTrace(r={}):r=new Error;const i=r.stack?r.stack.replace(/^.+\n/,""):"";try{s.stack?i&&!String(s.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(s.stack+=`
`+i):s.stack=i}catch{}}throw s}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=es(this.defaults,n);const{transitional:s,paramsSerializer:r,headers:i}=n;s!==void 0&&xl.assertOptions(s,{silentJSONParsing:ln.transitional(ln.boolean),forcedJSONParsing:ln.transitional(ln.boolean),clarifyTimeoutError:ln.transitional(ln.boolean)},!1),r!=null&&(v.isFunction(r)?n.paramsSerializer={serialize:r}:xl.assertOptions(r,{encode:ln.function,serialize:ln.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&v.merge(i.common,i[n.method]);i&&v.forEach(["delete","get","head","post","put","patch","common"],_=>{delete i[_]}),n.headers=Ye.concat(o,i);const a=[];let l=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(n)===!1||(l=l&&m.synchronous,a.unshift(m.fulfilled,m.rejected))});const c=[];this.interceptors.response.forEach(function(m){c.push(m.fulfilled,m.rejected)});let u,h=0,d;if(!l){const _=[zd.bind(this),void 0];for(_.unshift.apply(_,a),_.push.apply(_,c),d=_.length,u=Promise.resolve(n);h<d;)u=u.then(_[h++],_[h++]);return u}d=a.length;let p=n;for(h=0;h<d;){const _=a[h++],m=a[h++];try{p=_(p)}catch(b){m.call(this,b);break}}try{u=zd.call(this,p)}catch(_){return Promise.reject(_)}for(h=0,d=c.length;h<d;)u=u.then(c[h++],c[h++]);return u}getUri(e){e=es(this.defaults,e);const n=wm(e.baseURL,e.url);return mm(n,e.params,e.paramsSerializer)}}v.forEach(["delete","get","head","options"],function(e){Vn.prototype[e]=function(n,s){return this.request(es(s||{},{method:e,url:n,data:(s||{}).data}))}});v.forEach(["post","put","patch"],function(e){function n(s){return function(i,o,a){return this.request(es(a||{},{method:e,headers:s?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}Vn.prototype[e]=n(),Vn.prototype[e+"Form"]=n(!0)});class cu{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const s=this;this.promise.then(r=>{if(!s._listeners)return;let i=s._listeners.length;for(;i-- >0;)s._listeners[i](r);s._listeners=null}),this.promise.then=r=>{let i;const o=new Promise(a=>{s.subscribe(a),i=a}).then(r);return o.cancel=function(){s.unsubscribe(i)},o},e(function(i,o,a){s.reason||(s.reason=new Ks(i,o,a),n(s.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=s=>{e.abort(s)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new cu(function(r){e=r}),cancel:e}}}function ML(t){return function(n){return t.apply(null,n)}}function FL(t){return v.isObject(t)&&t.isAxiosError===!0}const Dl={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Dl).forEach(([t,e])=>{Dl[e]=t});function Am(t){const e=new Vn(t),n=im(Vn.prototype.request,e);return v.extend(n,Vn.prototype,e,{allOwnKeys:!0}),v.extend(n,e,null,{allOwnKeys:!0}),n.create=function(r){return Am(es(t,r))},n}const be=Am(di);be.Axios=Vn;be.CanceledError=Ks;be.CancelToken=cu;be.isCancel=bm;be.VERSION=Rm;be.toFormData=na;be.AxiosError=G;be.Cancel=be.CanceledError;be.all=function(e){return Promise.all(e)};be.spread=ML;be.isAxiosError=FL;be.mergeConfig=es;be.AxiosHeaders=Ye;be.formToJSON=t=>vm(v.isHTMLForm(t)?new FormData(t):t);be.getAdapter=Tm.getAdapter;be.HttpStatusCode=Dl;be.default=be;const $L=Jr({name:"LoginBox",props:{isInApp:{type:Boolean,required:!0},showLogin:{type:Boolean,required:!0}},setup(t,{emit:e}){const n=ht(""),s=ht(""),r=ht(!1);gr(r,u=>{localStorage.setItem("keeploggedin",JSON.stringify(u))}),ec(()=>{const u=localStorage.getItem("keeploggedin");u!==null&&(r.value=JSON.parse(u))});const i=()=>{e("toggleLogin")},o=async u=>{const h=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,d=/@alearn.org.tw$/;if(h.test(String(u).toLowerCase())&&d.test(String(u).toLowerCase()))return!0;try{return(await be.get(`https://members-backend.alearn13994229.workers.dev/is_member_email/${u}`)).data.isMember===!0}catch(p){return console.error("Error checking member email:",p),!1}};return{users_email:n,user_password:s,keeploggedin:r,toggleLogin:i,registerWithEmail:async()=>{if(console.log("users_email:",n.value),console.log("user_password:",s.value),console.log("Register clicked"),!n.value||!s.value){window.alert("請先填寫email和密碼");return}if(!await o(n.value)){alert("請使用@aleran.org.tw網域的Email，或是會員名冊上有的Email");return}if(!s.value||typeof s.value!="string"){alert("密碼請至少包含一個英文字，請重新輸入");return}e("registerWithEmail",n.value,s.value,r.value)},loginWithEmail:()=>{let u=!0;console.log("Login clicked");const h=window.location.pathname;if((h==="/friends"||h==="/maps"||h==="/privacy-policy"||h.startsWith("/flag")||h.startsWith("/group"))&&(u=!1),!s.value||typeof s.value!="string"){alert("密碼無效，請重新輸入");return}e("loginWithEmail",u,n.value,s.value,r.value)},resetPassword:()=>{if(console.log("Reset password function triggered"),console.log("Email for reset:",n.value),!o(n.value)){alert("請先輸入有效的電子郵件地址");return}const u=Wr();console.log("Firebase auth object:",u),eT(u,n.value).then(()=>{alert("密碼重置郵件已發送，請檢查您的電子郵件信箱"),console.log("Password reset email sent successfully")}).catch(h=>{switch(console.error("密碼重置郵件發送失敗：",h.code,h.message),h.code){case"auth/invalid-email":alert("無效的電子郵件地址");break;case"auth/user-not-found":alert("找不到該電子郵件對應的帳號");break;default:alert("密碼重置郵件發送失敗，請稍後再試")}})}}}}),UL={class:"ui middle aligned center aligned grid",id:"login-main",style:{height:"100vh"}},BL={class:"column",style:{"max-width":"420px"}},HL={class:"ui raised segment"},jL={key:0,class:"ui error message"},WL={class:"ui form segment",style:{"border-radius":"10px",padding:"15px","background-color":"#f0f0f0"}},VL={class:"field"},qL={class:"ui left icon input"},KL={class:"field"},GL={class:"ui left icon input"},zL={class:"ui large form"},YL={class:"ui segment",style:{border:"none","padding-top":"10px"}},JL={class:"field"};function QL(t,e,n,s,r,i){return Ne(),Be("div",{class:"ui dimmer modals visible active clickable",id:"login-bg",style:{background:"rgba(0, 0, 0, 0.6)"},onClick:e[9]||(e[9]=o=>t.toggleLogin())},[x("div",UL,[x("div",BL,[x("div",HL,[t.isInApp?(Ne(),Be("div",jL,"本系統不支援facebook, line等app內部瀏覽，請用一般瀏覽器開啟，方可登入，謝謝")):Hi("",!0),e[14]||(e[14]=x("h2",{class:"ui black header",style:{"font-size":"1.5rem","font-weight":"600"}},"登入您的帳號",-1)),x("form",WL,[x("div",VL,[x("div",qL,[e[10]||(e[10]=x("i",{class:"envelope icon"},null,-1)),Ci(x("input",{type:"text",name:"email",placeholder:"E-mail address",style:{"font-size":"14px"},"onUpdate:modelValue":e[0]||(e[0]=o=>t.users_email=o),onClick:e[1]||(e[1]=Qs(()=>{},["stop"]))},null,512),[[Za,t.users_email]])])]),x("div",KL,[x("div",GL,[e[11]||(e[11]=x("i",{class:"lock icon"},null,-1)),Ci(x("input",{type:"password",name:"user_password",placeholder:"Password",style:{"font-size":"14px"},"onUpdate:modelValue":e[2]||(e[2]=o=>t.user_password=o),autocomplete:"",onClick:e[3]||(e[3]=Qs(()=>{},["stop"]))},null,512),[[Za,t.user_password]])])]),x("div",{class:qn(["ui fluid large button",{disabled:t.isInApp}]),onClick:e[4]||(e[4]=Qs((...o)=>t.loginWithEmail&&t.loginWithEmail(...o),["prevent"])),style:{"background-color":"#e47e10",color:"white","font-weight":"bold"}},"登入",2),x("a",{class:"small forgot-password",onClick:e[5]||(e[5]=(...o)=>t.resetPassword&&t.resetPassword(...o))},"忘記密碼")]),x("form",zL,[x("div",YL,[x("div",JL,[x("div",{class:"ui checkbox",onClick:e[7]||(e[7]=Qs(()=>{},["stop"]))},[Ci(x("input",{type:"checkbox","onUpdate:modelValue":e[6]||(e[6]=o=>t.keeploggedin=o)},null,512),[[tb,t.keeploggedin]]),e[12]||(e[12]=x("label",null,"保持登入狀態",-1))])])]),x("p",null,[e[13]||(e[13]=Ie("新用戶？按此")),x("button",{class:qn(["ui large basic button",{disabled:t.isInApp}]),id:"register-btn",onClick:e[8]||(e[8]=Qs((...o)=>t.registerWithEmail&&t.registerWithEmail(...o),["stop","prevent"]))},"註冊",2)])])])])])])}const uu=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},XL=uu($L,[["render",QL],["__scopeId","data-v-c36a608a"]]),ZL=new lD(window.navigator.userAgent),eM=ZL.isInApp,rr=Wr(Jc),tM=Jr({name:"App",components:{Login:XL},data(){return{isInApp:eM,showLogin:!1,sidebarVisible:!1,uid:"",users:{},user:{},photoURL:"",email:"",emailVerified:!1}},mounted(){const t=this;rr.onAuthStateChanged(e=>{e?(t.uid=e.uid,t.email=e.email||"",t.photoURL=e.photoURL||"https://we.alearn.org.tw/logo-new.png",t.emailVerified=e.emailVerified,t.updateUserData(e)):(t.uid="",t.email="",t.photoURL="",t.emailVerified=!1)})},methods:{toggleLogin(){this.showLogin=!this.showLogin},toggleSidebar(){this.sidebarVisible=!this.sidebarVisible},logout(){const t=this;rr.signOut().then(function(){t.user=null,t.users={},t.uid="",t.photoURL="",t.$nextTick().then(()=>{t.$router.push("/")})})},async registerWithEmail(t,e,n){var s,r;if(!e||typeof e!="string"){alert("接收的密碼無效，請確認輸入");return}try{const i=Wr(),a=(await tT(i,t,e)).user;if(a&&a.email){this.email=a.email,this.uid=a.uid,this.photoURL="https://we.alearn.org.tw/logo-new.png";const l=[{displayName:((s=this.email)==null?void 0:s.split("@")[0])||"Unknown",email:this.email,photoURL:this.photoURL}];this.user={email:this.email,photoURL:this.photoURL,providerData:l};const c=Ho(Ko,"users/"+this.uid);(await VS(c)).exists()||await WS(c,{email:this.email,name:((r=this.email)==null?void 0:r.split("@")[0])||"Unknown",connect_me:this.email,photoURL:this.photoURL,login_method:"email"}),await Jh(a),alert("驗證郵件已發送，請檢查您的郵箱(含垃圾信箱)以完成驗證。"),this.logout()}else console.error("User or user email is undefined after registration"),alert("註冊過程中發生錯誤，請稍後再試。")}catch(i){i.code==="auth/email-already-in-use"?alert("此電子郵件已被使用，請使用其他電子郵件或嘗試登入。"):(console.error("註冊失敗：",i),alert("註冊失敗："+i.message))}},async loginWithEmail(t,e,n,s){try{s?await Qh(rr,P_):await Qh(rr,El);const i=(await nT(rr,e,n)).user;if(!i.emailVerified){alert("您的電子郵件尚未驗證，請檢查您的郵箱並完成驗證。"),this.resendVerificationEmail(),this.logout();return}this.emailVerified=!0,console.log("登入成功：",i),this.updateUserData(i)}catch(r){console.error("登入失敗：",r);let i="登入失敗：";r.message.includes("auth/wrong-password")?i="密碼錯誤，請檢查後再試。":r.message.includes("auth/user-not-found")?i="帳號不存在，請確認您的電子郵件地址。":r.message.includes("auth/invalid-email")?i="無效的電子郵件地址，請重新輸入。":r.message.includes("auth/too-many-requests")?i="嘗試次數過多，請稍後再試。":i+=r.message,alert(i)}},resendVerificationEmail(){const t=Wr().currentUser;t&&Jh(t).then(()=>{console.log("驗證郵件已重新發送。")}).catch(e=>{console.error("重新發送驗證郵件失敗：",e)})},updateUserData(t){var n;if(!t){console.error("User is undefined in updateUserData");return}this.email=t.email||null,this.uid=t.uid,this.photoURL=t.photoURL?decodeURI(t.photoURL):"https://we.alearn.org.tw/logo-new.png",this.emailVerified=t.emailVerified;const e=t.providerData||[{displayName:((n=this.email)==null?void 0:n.split("@")[0])||"Unknown",email:this.email,photoURL:this.photoURL}];this.updateUserInfo(e)},updateUserInfo(t){this.users&&this.uid&&this.users[this.uid]?this.user={...this.users[this.uid],providerData:t}:this.fetchUserData(t)},async fetchUserData(t){try{ml(bR,e=>{const n=e.val();this.users=n,this.uid&&this.users&&this.users[this.uid]?this.user={...this.users[this.uid],providerData:t}:this.user={providerData:t}},e=>{this.user={providerData:t},console.error("Error fetching users:",e)})}catch(e){console.error("Error fetching user data:",e)}}}}),nM={class:"ui fixed top menu"},sM={class:"right menu"},rM={key:1,class:"ui simple dropdown item"},iM=["src"],oM={key:1,class:"user icon"},aM={class:"menu"},lM={class:"ui container"};function cM(t,e,n,s,r,i){const o=ua("RouterLink"),a=ua("RouterView"),l=ua("Login");return Ne(),Be(dt,null,[x("header",null,[x("nav",nM,[x("button",{class:"no-border ui item",onClick:e[0]||(e[0]=(...c)=>t.toggleSidebar&&t.toggleSidebar(...c))},e[6]||(e[6]=[x("i",{class:"icon bars"},null,-1)])),me(o,{class:"item fat-only",to:"/"},{default:ut(()=>e[7]||(e[7]=[x("i",{class:"home icon"},null,-1)])),_:1}),me(o,{class:"item",to:"/about"},{default:ut(()=>e[8]||(e[8]=[x("i",{class:"info icon"},null,-1),Ie("關於"),x("span",{class:"fat-only"},"我們",-1)])),_:1}),me(o,{class:"item",to:"/faq"},{default:ut(()=>e[9]||(e[9]=[x("i",{class:"help icon"},null,-1),x("span",{class:"fat-only"},"常見",-1),Ie("問題")])),_:1}),me(o,{class:"item",to:"/create_faq"},{default:ut(()=>e[10]||(e[10]=[x("i",{class:"plus icon"},null,-1),Ie("新增"),x("span",{class:"fat-only"},"問答",-1)])),_:1}),me(o,{class:"item fat-only",to:"/feedback"},{default:ut(()=>e[11]||(e[11]=[x("i",{class:"magic icon"},null,-1),Ie("回饋")])),_:1}),x("div",sM,[t.uid?(Ne(),Be("div",rM,[t.photoURL?(Ne(),Be("img",{key:0,class:"ui avatar image",src:t.photoURL,alt:"User Avatar",onError:e[2]||(e[2]=(...c)=>t.useDefaultAvatar&&t.useDefaultAvatar(...c)),onLoad:e[3]||(e[3]=(...c)=>t.onImageLoad&&t.onImageLoad(...c))},null,40,iM)):(Ne(),Be("i",oM)),x("div",aM,[t.uid?(Ne(),Be("button",{key:0,class:"no-border ui item",onClick:e[4]||(e[4]=(...c)=>t.logout&&t.logout(...c))},e[13]||(e[13]=[x("i",{class:"sign-out icon"},null,-1),Ie("登出")]))):Hi("",!0)])])):(Ne(),Be("button",{key:0,class:"no-border ui item",onClick:e[1]||(e[1]=(...c)=>t.toggleLogin&&t.toggleLogin(...c))},e[12]||(e[12]=[x("i",{class:"user icon"},null,-1),Ie("登入")])))])])]),e[19]||(e[19]=x("div",{class:"small-spacer"},null,-1)),x("div",{class:qn(["ui sidebar vertical menu",{hidden:!t.sidebarVisible}]),id:"side-menu"},[me(o,{class:"item",to:"/",exact:"",name:"home"},{default:ut(()=>e[14]||(e[14]=[x("i",{class:"home icon"},null,-1),Ie("首頁")])),_:1}),me(o,{class:"item",to:"/about",name:"about"},{default:ut(()=>e[15]||(e[15]=[x("i",{class:"info icon"},null,-1),Ie("關於我們")])),_:1}),me(o,{class:"item",to:"/faq",name:"faq"},{default:ut(()=>e[16]||(e[16]=[x("i",{class:"help icon"},null,-1),Ie("常見問題")])),_:1}),me(o,{class:"item",to:"/create_faq",name:"create-faq"},{default:ut(()=>e[17]||(e[17]=[x("i",{class:"plus icon"},null,-1),Ie("新增問答")])),_:1}),me(o,{class:"item fat-only",to:"/feedback",name:"feedback"},{default:ut(()=>e[18]||(e[18]=[x("i",{class:"magic icon"},null,-1),Ie("回饋")])),_:1})],2),x("div",{class:qn(["ui sidebar bg",{hidden:!t.sidebarVisible}]),onClick:e[5]||(e[5]=(...c)=>t.toggleSidebar&&t.toggleSidebar(...c))},null,2),x("div",lM,[me(a,{onToggleLogin:t.toggleLogin,uid:t.uid},null,8,["onToggleLogin","uid"])]),t.showLogin?(Ne(),gp(l,{key:0,showLogin:t.showLogin,isInApp:!1,onToggleLogin:t.toggleLogin,onLogout:t.logout,onRegisterWithEmail:t.registerWithEmail,onLoginWithEmail:t.loginWithEmail,onResendVerificationEmail:t.resendVerificationEmail},null,8,["showLogin","onToggleLogin","onLogout","onRegisterWithEmail","onLoginWithEmail","onResendVerificationEmail"])):Hi("",!0)],64)}const uM=uu(tM,[["render",cM],["__scopeId","data-v-88701e9b"]]),hM="modulepreload",dM=function(t){return"/"+t},Jd={},ir=function(e,n,s){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.allSettled(n.map(l=>{if(l=dM(l),l in Jd)return;Jd[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const h=document.createElement("link");if(h.rel=c?"stylesheet":hM,c||(h.as="script"),h.crossOrigin="",h.href=l,a&&h.setAttribute("nonce",a),document.head.appendChild(h),c)return new Promise((d,p)=>{h.addEventListener("load",d),h.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})};/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const ls=typeof document<"u";function Pm(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function fM(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Pm(t.default)}const oe=Object.assign;function Fa(t,e){const n={};for(const s in e){const r=e[s];n[s]=bt(r)?r.map(t):t(r)}return n}const Cr=()=>{},bt=Array.isArray,Om=/#/g,pM=/&/g,gM=/\//g,_M=/=/g,mM=/\?/g,Nm=/\+/g,yM=/%5B/g,vM=/%5D/g,km=/%5E/g,bM=/%60/g,xm=/%7B/g,EM=/%7C/g,Dm=/%7D/g,wM=/%20/g;function hu(t){return encodeURI(""+t).replace(EM,"|").replace(yM,"[").replace(vM,"]")}function CM(t){return hu(t).replace(xm,"{").replace(Dm,"}").replace(km,"^")}function Ll(t){return hu(t).replace(Nm,"%2B").replace(wM,"+").replace(Om,"%23").replace(pM,"%26").replace(bM,"`").replace(xm,"{").replace(Dm,"}").replace(km,"^")}function SM(t){return Ll(t).replace(_M,"%3D")}function IM(t){return hu(t).replace(Om,"%23").replace(mM,"%3F")}function TM(t){return t==null?"":IM(t).replace(gM,"%2F")}function qr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const RM=/\/$/,AM=t=>t.replace(RM,"");function $a(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=kM(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:qr(o)}}function PM(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Qd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function OM(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Ps(e.matched[s],n.matched[r])&&Lm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ps(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Lm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!NM(t[n],e[n]))return!1;return!0}function NM(t,e){return bt(t)?Xd(t,e):bt(e)?Xd(e,t):t===e}function Xd(t,e){return bt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function kM(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o).join("/")}const cn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Kr;(function(t){t.pop="pop",t.push="push"})(Kr||(Kr={}));var Sr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Sr||(Sr={}));function xM(t){if(!t)if(ls){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),AM(t)}const DM=/^[^#]+#/;function LM(t,e){return t.replace(DM,"#")+e}function MM(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const ra=()=>({left:window.scrollX,top:window.scrollY});function FM(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=MM(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Zd(t,e){return(history.state?history.state.position-e:-1)+t}const Ml=new Map;function $M(t,e){Ml.set(t,e)}function UM(t){const e=Ml.get(t);return Ml.delete(t),e}let BM=()=>location.protocol+"//"+location.host;function Mm(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),Qd(l,"")}return Qd(n,t)+s+r}function HM(t,e,n,s){let r=[],i=[],o=null;const a=({state:d})=>{const p=Mm(t,location),_=n.value,m=e.value;let b=0;if(d){if(n.value=p,e.value=d,o&&o===_){o=null;return}b=m?d.position-m.position:0}else s(p);r.forEach(T=>{T(n.value,_,{delta:b,type:Kr.pop,direction:b?b>0?Sr.forward:Sr.back:Sr.unknown})})};function l(){o=n.value}function c(d){r.push(d);const p=()=>{const _=r.indexOf(d);_>-1&&r.splice(_,1)};return i.push(p),p}function u(){const{history:d}=window;d.state&&d.replaceState(oe({},d.state,{scroll:ra()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function ef(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?ra():null}}function jM(t){const{history:e,location:n}=window,s={value:Mm(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:BM()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),r.value=c}catch(p){console.error(p),n[u?"replace":"assign"](d)}}function o(l,c){const u=oe({},e.state,ef(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});i(l,u,!0),s.value=l}function a(l,c){const u=oe({},r.value,e.state,{forward:l,scroll:ra()});i(u.current,u,!0);const h=oe({},ef(s.value,l,null),{position:u.position+1},c);i(l,h,!1),s.value=l}return{location:s,state:r,push:a,replace:o}}function WM(t){t=xM(t);const e=jM(t),n=HM(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=oe({location:"",base:t,go:s,createHref:LM.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function VM(t){return typeof t=="string"||t&&typeof t=="object"}function Fm(t){return typeof t=="string"||typeof t=="symbol"}const $m=Symbol("");var tf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(tf||(tf={}));function Os(t,e){return oe(new Error,{type:t,[$m]:!0},e)}function $t(t,e){return t instanceof Error&&$m in t&&(e==null||!!(t.type&e))}const nf="[^/]+?",qM={sensitive:!1,strict:!1,start:!0,end:!0},KM=/[.+*?^${}()[\]/\\]/g;function GM(t,e){const n=oe({},qM,e),s=[];let r=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let h=0;h<c.length;h++){const d=c[h];let p=40+(n.sensitive?.25:0);if(d.type===0)h||(r+="/"),r+=d.value.replace(KM,"\\$&"),p+=40;else if(d.type===1){const{value:_,repeatable:m,optional:b,regexp:T}=d;i.push({name:_,repeatable:m,optional:b});const R=T||nf;if(R!==nf){p+=10;try{new RegExp(`(${R})`)}catch(k){throw new Error(`Invalid custom RegExp for param "${_}" (${R}): `+k.message)}}let P=m?`((?:${R})(?:/(?:${R}))*)`:`(${R})`;h||(P=b&&c.length<2?`(?:/${P})`:"/"+P),b&&(P+="?"),r+=P,p+=20,b&&(p+=-8),m&&(p+=-20),R===".*"&&(p+=-50)}u.push(p)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",_=i[d-1];h[_.name]=p&&_.repeatable?p.split("/"):p}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:_,repeatable:m,optional:b}=p,T=_ in c?c[_]:"";if(bt(T)&&!m)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const R=bt(T)?T.join("/"):T;if(!R)if(b)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${_}"`);u+=R}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:l}}function zM(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Um(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=zM(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(sf(s))return 1;if(sf(r))return-1}return r.length-s.length}function sf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const YM={type:0,value:""},JM=/[a-zA-Z0-9_]/;function QM(t){if(!t)return[[]];if(t==="/")return[[YM]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,l,c="",u="";function h(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:l==="("?n=2:JM.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),r}function XM(t,e,n){const s=GM(QM(t.path),n),r=oe(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function ZM(t,e){const n=[],s=new Map;e=lf({strict:!1,end:!0,sensitive:!1},e);function r(h){return s.get(h)}function i(h,d,p){const _=!p,m=of(h);m.aliasOf=p&&p.record;const b=lf(e,h),T=[m];if("alias"in h){const k=typeof h.alias=="string"?[h.alias]:h.alias;for(const B of k)T.push(of(oe({},m,{components:p?p.record.components:m.components,path:B,aliasOf:p?p.record:m})))}let R,P;for(const k of T){const{path:B}=k;if(d&&B[0]!=="/"){const ee=d.record.path,Q=ee[ee.length-1]==="/"?"":"/";k.path=d.record.path+(B&&Q+B)}if(R=XM(k,d,b),p?p.alias.push(R):(P=P||R,P!==R&&P.alias.push(R),_&&h.name&&!af(R)&&o(h.name)),Bm(R)&&l(R),m.children){const ee=m.children;for(let Q=0;Q<ee.length;Q++)i(ee[Q],R,p&&p.children[Q])}p=p||R}return P?()=>{o(P)}:Cr}function o(h){if(Fm(h)){const d=s.get(h);d&&(s.delete(h),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(h);d>-1&&(n.splice(d,1),h.record.name&&s.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function a(){return n}function l(h){const d=nF(h,n);n.splice(d,0,h),h.record.name&&!af(h)&&s.set(h.record.name,h)}function c(h,d){let p,_={},m,b;if("name"in h&&h.name){if(p=s.get(h.name),!p)throw Os(1,{location:h});b=p.record.name,_=oe(rf(d.params,p.keys.filter(P=>!P.optional).concat(p.parent?p.parent.keys.filter(P=>P.optional):[]).map(P=>P.name)),h.params&&rf(h.params,p.keys.map(P=>P.name))),m=p.stringify(_)}else if(h.path!=null)m=h.path,p=n.find(P=>P.re.test(m)),p&&(_=p.parse(m),b=p.record.name);else{if(p=d.name?s.get(d.name):n.find(P=>P.re.test(d.path)),!p)throw Os(1,{location:h,currentLocation:d});b=p.record.name,_=oe({},d.params,h.params),m=p.stringify(_)}const T=[];let R=p;for(;R;)T.unshift(R.record),R=R.parent;return{name:b,path:m,params:_,matched:T,meta:tF(T)}}t.forEach(h=>i(h));function u(){n.length=0,s.clear()}return{addRoute:i,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function rf(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function of(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:eF(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function eF(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function af(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function tF(t){return t.reduce((e,n)=>oe(e,n.meta),{})}function lf(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function nF(t,e){let n=0,s=e.length;for(;n!==s;){const i=n+s>>1;Um(t,e[i])<0?s=i:n=i+1}const r=sF(t);return r&&(s=e.lastIndexOf(r,s-1)),s}function sF(t){let e=t;for(;e=e.parent;)if(Bm(e)&&Um(t,e)===0)return e}function Bm({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function rF(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(Nm," "),o=i.indexOf("="),a=qr(o<0?i:i.slice(0,o)),l=o<0?null:qr(i.slice(o+1));if(a in e){let c=e[a];bt(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function cf(t){let e="";for(let n in t){const s=t[n];if(n=SM(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(bt(s)?s.map(i=>i&&Ll(i)):[s&&Ll(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function iF(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=bt(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const oF=Symbol(""),uf=Symbol(""),du=Symbol(""),fu=Symbol(""),Fl=Symbol("");function or(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function dn(t,e,n,s,r,i=o=>o()){const o=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(Os(4,{from:n,to:e})):d instanceof Error?l(d):VM(d)?l(Os(2,{from:e,to:d})):(o&&s.enterCallbacks[r]===o&&typeof d=="function"&&o.push(d),a())},u=i(()=>t.call(s&&s.instances[r],e,n,c));let h=Promise.resolve(u);t.length<3&&(h=h.then(c)),h.catch(d=>l(d))})}function Ua(t,e,n,s,r=i=>i()){const i=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Pm(l)){const u=(l.__vccOpts||l)[e];u&&i.push(dn(u,n,s,o,a,r))}else{let c=l();i.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const h=fM(u)?u.default:u;o.mods[a]=u,o.components[a]=h;const p=(h.__vccOpts||h)[e];return p&&dn(p,n,s,o,a,r)()}))}}return i}function hf(t){const e=Ot(du),n=Ot(fu),s=ft(()=>{const l=ps(t.to);return e.resolve(l)}),r=ft(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Ps.bind(null,u));if(d>-1)return d;const p=df(l[c-2]);return c>1&&df(u)===p&&h[h.length-1].path!==p?h.findIndex(Ps.bind(null,l[c-2])):d}),i=ft(()=>r.value>-1&&uF(n.params,s.value.params)),o=ft(()=>r.value>-1&&r.value===n.matched.length-1&&Lm(n.params,s.value.params));function a(l={}){return cF(l)?e[ps(t.replace)?"replace":"push"](ps(t.to)).catch(Cr):Promise.resolve()}return{route:s,href:ft(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const aF=Jr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:hf,setup(t,{slots:e}){const n=So(hf(t)),{options:s}=Ot(du),r=ft(()=>({[ff(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[ff(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:vp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),lF=aF;function cF(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function uF(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!bt(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function df(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ff=(t,e,n)=>t??e??n,hF=Jr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Ot(Fl),r=ft(()=>t.route||s.value),i=Ot(uf,0),o=ft(()=>{let c=ps(i);const{matched:u}=r.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=ft(()=>r.value.matched[o.value]);Si(uf,ft(()=>o.value+1)),Si(oF,a),Si(Fl,r);const l=ht();return gr(()=>[l.value,a.value,t.name],([c,u,h],[d,p,_])=>{u&&(u.instances[h]=c,p&&p!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!Ps(u,p)||!d)&&(u.enterCallbacks[h]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=r.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return pf(n.default,{Component:d,route:c});const p=h.props[u],_=p?p===!0?c.params:typeof p=="function"?p(c):p:null,b=vp(d,oe({},_,e,{onVnodeUnmounted:T=>{T.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return pf(n.default,{Component:b,route:c})||b}}});function pf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const dF=hF;function fF(t){const e=ZM(t.routes,t),n=t.parseQuery||rF,s=t.stringifyQuery||cf,r=t.history,i=or(),o=or(),a=or(),l=vy(cn);let c=cn;ls&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Fa.bind(null,w=>""+w),h=Fa.bind(null,TM),d=Fa.bind(null,qr);function p(w,F){let L,$;return Fm(w)?(L=e.getRecordMatcher(w),$=F):$=w,e.addRoute($,L)}function _(w){const F=e.getRecordMatcher(w);F&&e.removeRoute(F)}function m(){return e.getRoutes().map(w=>w.record)}function b(w){return!!e.getRecordMatcher(w)}function T(w,F){if(F=oe({},F||l.value),typeof w=="string"){const g=$a(n,w,F.path),y=e.resolve({path:g.path},F),C=r.createHref(g.fullPath);return oe(g,y,{params:d(y.params),hash:qr(g.hash),redirectedFrom:void 0,href:C})}let L;if(w.path!=null)L=oe({},w,{path:$a(n,w.path,F.path).path});else{const g=oe({},w.params);for(const y in g)g[y]==null&&delete g[y];L=oe({},w,{params:h(g)}),F.params=h(F.params)}const $=e.resolve(L,F),re=w.hash||"";$.params=u(d($.params));const ye=PM(s,oe({},w,{hash:CM(re),path:$.path})),f=r.createHref(ye);return oe({fullPath:ye,hash:re,query:s===cf?iF(w.query):w.query||{}},$,{redirectedFrom:void 0,href:f})}function R(w){return typeof w=="string"?$a(n,w,l.value.path):oe({},w)}function P(w,F){if(c!==w)return Os(8,{from:F,to:w})}function k(w){return Q(w)}function B(w){return k(oe(R(w),{replace:!0}))}function ee(w){const F=w.matched[w.matched.length-1];if(F&&F.redirect){const{redirect:L}=F;let $=typeof L=="function"?L(w):L;return typeof $=="string"&&($=$.includes("?")||$.includes("#")?$=R($):{path:$},$.params={}),oe({query:w.query,hash:w.hash,params:$.path!=null?{}:w.params},$)}}function Q(w,F){const L=c=T(w),$=l.value,re=w.state,ye=w.force,f=w.replace===!0,g=ee(L);if(g)return Q(oe(R(g),{state:typeof g=="object"?oe({},re,g.state):re,force:ye,replace:f}),F||L);const y=L;y.redirectedFrom=F;let C;return!ye&&OM(s,$,L)&&(C=Os(16,{to:y,from:$}),Ct($,$,!0,!1)),(C?Promise.resolve(C):it(y,$)).catch(E=>$t(E)?$t(E,2)?E:on(E):te(E,y,$)).then(E=>{if(E){if($t(E,2))return Q(oe({replace:f},R(E.to),{state:typeof E.to=="object"?oe({},re,E.to.state):re,force:ye}),F||y)}else E=xn(y,$,!0,f,re);return rn(y,$,E),E})}function Oe(w,F){const L=P(w,F);return L?Promise.reject(L):Promise.resolve()}function $e(w){const F=rs.values().next().value;return F&&typeof F.runWithContext=="function"?F.runWithContext(w):w()}function it(w,F){let L;const[$,re,ye]=pF(w,F);L=Ua($.reverse(),"beforeRouteLeave",w,F);for(const g of $)g.leaveGuards.forEach(y=>{L.push(dn(y,w,F))});const f=Oe.bind(null,w,F);return L.push(f),ot(L).then(()=>{L=[];for(const g of i.list())L.push(dn(g,w,F));return L.push(f),ot(L)}).then(()=>{L=Ua(re,"beforeRouteUpdate",w,F);for(const g of re)g.updateGuards.forEach(y=>{L.push(dn(y,w,F))});return L.push(f),ot(L)}).then(()=>{L=[];for(const g of ye)if(g.beforeEnter)if(bt(g.beforeEnter))for(const y of g.beforeEnter)L.push(dn(y,w,F));else L.push(dn(g.beforeEnter,w,F));return L.push(f),ot(L)}).then(()=>(w.matched.forEach(g=>g.enterCallbacks={}),L=Ua(ye,"beforeRouteEnter",w,F,$e),L.push(f),ot(L))).then(()=>{L=[];for(const g of o.list())L.push(dn(g,w,F));return L.push(f),ot(L)}).catch(g=>$t(g,8)?g:Promise.reject(g))}function rn(w,F,L){a.list().forEach($=>$e(()=>$(w,F,L)))}function xn(w,F,L,$,re){const ye=P(w,F);if(ye)return ye;const f=F===cn,g=ls?history.state:{};L&&($||f?r.replace(w.fullPath,oe({scroll:f&&g&&g.scroll},re)):r.push(w.fullPath,re)),l.value=w,Ct(w,F,L,f),on()}let wt;function Gs(){wt||(wt=r.listen((w,F,L)=>{if(!fi.listening)return;const $=T(w),re=ee($);if(re){Q(oe(re,{replace:!0}),$).catch(Cr);return}c=$;const ye=l.value;ls&&$M(Zd(ye.fullPath,L.delta),ra()),it($,ye).catch(f=>$t(f,12)?f:$t(f,2)?(Q(f.to,$).then(g=>{$t(g,20)&&!L.delta&&L.type===Kr.pop&&r.go(-1,!1)}).catch(Cr),Promise.reject()):(L.delta&&r.go(-L.delta,!1),te(f,$,ye))).then(f=>{f=f||xn($,ye,!1),f&&(L.delta&&!$t(f,8)?r.go(-L.delta,!1):L.type===Kr.pop&&$t(f,20)&&r.go(-1,!1)),rn($,ye,f)}).catch(Cr)}))}let ns=or(),Se=or(),ae;function te(w,F,L){on(w);const $=Se.list();return $.length?$.forEach(re=>re(w,F,L)):console.error(w),Promise.reject(w)}function Mt(){return ae&&l.value!==cn?Promise.resolve():new Promise((w,F)=>{ns.add([w,F])})}function on(w){return ae||(ae=!w,Gs(),ns.list().forEach(([F,L])=>w?L(w):F()),ns.reset()),w}function Ct(w,F,L,$){const{scrollBehavior:re}=t;if(!ls||!re)return Promise.resolve();const ye=!L&&UM(Zd(w.fullPath,0))||($||!L)&&history.state&&history.state.scroll||null;return Ql().then(()=>re(w,F,ye)).then(f=>f&&FM(f)).catch(f=>te(f,w,F))}const qe=w=>r.go(w);let ss;const rs=new Set,fi={currentRoute:l,listening:!0,addRoute:p,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:b,getRoutes:m,resolve:T,options:t,push:k,replace:B,go:qe,back:()=>qe(-1),forward:()=>qe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Se.add,isReady:Mt,install(w){const F=this;w.component("RouterLink",lF),w.component("RouterView",dF),w.config.globalProperties.$router=F,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>ps(l)}),ls&&!ss&&l.value===cn&&(ss=!0,k(r.location).catch(re=>{}));const L={};for(const re in cn)Object.defineProperty(L,re,{get:()=>l.value[re],enumerable:!0});w.provide(du,F),w.provide(fu,Ff(L)),w.provide(Fl,l);const $=w.unmount;rs.add(w),w.unmount=function(){rs.delete(w),rs.size<1&&(c=cn,wt&&wt(),wt=null,l.value=cn,ss=!1,ae=!1),$()}}};function ot(w){return w.reduce((F,L)=>F.then(()=>$e(L)),Promise.resolve())}return fi}function pF(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>Ps(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Ps(c,l))||r.push(l))}return[n,s,r]}function kF(t){return Ot(fu)}const gF=Jr({name:"HomeView",props:{isLogin:{type:Boolean,default:!1}},setup(){const t=ht(!1),e=ht([]),n=ht([]),s=new Array,r=ht(s),i=ht(""),o=ht("");return ec(()=>{ml(yR,a=>{const l=a.val();e.value=Object.values(l)},a=>{console.error("讀取專案資料時出錯",a)}),ml(vR,a=>{const l=a.val();n.value=Object.values(l)},a=>{console.error("讀取理監事資料時出錯",a)})}),{isLoading:t,projects:e,supervisors:n,visibleEmails:r,message:i,result:o}},methods:{toggleLogin(){this.$emit("toggleLogin")},toggleEmail(t){this.visibleEmails.includes(t)?this.visibleEmails.splice(this.visibleEmails.indexOf(t),1):this.visibleEmails.push(t)},sendMessage(){this.isLoading=!0,console.log(this.message),this.message.endsWith("？")||(this.message+="？"),be.get("https://members-backend.alearn13994229.workers.dev/ai/"+this.message,{headers:{"Content-Type":"application/json"}}).then(t=>{console.log(t),this.result=t.data,this.isLoading=!1})},parseResult(t){return t==="。"?"請說得詳細一點":t},sendFeedback(t){console.log(t),t==="good"?(console.log("good"),window.alert("感謝您的回饋！")):t==="bad"&&(console.log("bad"),window.confirm("請告訴我們哪裡做得不好，我們會努力改進！")?this.$router.push("/feedback"):window.alert("感謝您的回饋！"))}}}),_F={class:"ui container"},mF={class:"ui input"},yF={class:"result"},vF={key:0},bF={key:1},EF={class:"ui four doubling stackable cards"},wF={class:"card"},CF={class:"content"},SF={class:"description"},IF={key:0},TF=["href"],RF={key:1};function AF(t,e,n,s,r,i){return Ne(),Be("main",_F,[e[13]||(e[13]=x("h1",{class:"ui header"},"自主學習促進會",-1)),e[14]||(e[14]=x("h2",{class:"left aligned ui header"},[Ie("自學AI"),x("div",{class:"left aligned ui sub header"},"以自學問答集為基礎，提供更即時的回答")],-1)),x("div",mF,[Ci(x("input",{autofocus:"",type:"text",placeholder:"問AI關於自學的任何問題...","onUpdate:modelValue":e[0]||(e[0]=o=>t.message=o),onKeyup:e[1]||(e[1]=ib((...o)=>t.sendMessage&&t.sendMessage(...o),["enter"]))},null,544),[[Za,t.message]]),x("button",{class:"ui primary button",onClick:e[2]||(e[2]=(...o)=>t.sendMessage&&t.sendMessage(...o))},"送出")]),x("div",yF,[t.result===""&&t.message!==""&&t.isLoading?(Ne(),Be("p",vF,"載入中，請稍候...")):t.result!==""?(Ne(),Be("p",bF,[Ie(Ba(t.parseResult(t.result)),1),e[7]||(e[7]=x("br",null,null,-1)),e[8]||(e[8]=x("br",null,null,-1)),e[9]||(e[9]=Ie("您覺得這個回答怎麼樣呢？")),x("button",{class:"ui basic green button",onClick:e[3]||(e[3]=o=>t.sendFeedback("good"))},e[5]||(e[5]=[x("i",{class:"thumbs up icon"},null,-1),Ie("很棒")])),x("button",{class:"ui basic red button",onClick:e[4]||(e[4]=o=>t.sendFeedback("bad"))},e[6]||(e[6]=[x("i",{class:"thumbs down icon"},null,-1),Ie("不佳")]))])):Hi("",!0)]),e[15]||(e[15]=x("div",{class:"ui divider"},null,-1)),x("div",EF,[e[12]||(e[12]=Cv('<div class="card" data-v-6eba21ae><div class="content" data-v-6eba21ae><div class="header" data-v-6eba21ae>本會歷史</div><div class="description" style="max-height:300px;overflow-y:auto;" data-v-6eba21ae><p data-v-6eba21ae>自主學習促進會的歷史可追溯至1994年種籽親子實驗小學的創立，這是台灣民主學校的先驅。</p><p data-v-6eba21ae>1998年，台北市自主學習實驗計畫開始，為期六年，證明了自主學習理念在中學階段的可行性。</p><p data-v-6eba21ae>2000年，面臨停辦危機時，學生發起了台灣首次中學生自發的學運，成功爭取續辦至第三屆學生畢業。</p><p data-v-6eba21ae>2001年3月，為延續自主學習的經驗與知識，本會正式成立。</p><p data-v-6eba21ae>2006-2008年間，本會通過&quot;自學中心&quot;提供課程和營隊，幫助體制內學生體驗自主學習。</p><p data-v-6eba21ae>2008-2010年，&quot;自主培力學園&quot;為拒學、懼學和想自學的青少年提供全日制團體學習。</p><p data-v-6eba21ae>2009年起，獨立教育工作者社群成立，致力於開設學習團體、培訓教師、支持家長，並開發自學資源。</p><p data-v-6eba21ae>本會持續致力於推動自主學習理念，為台灣教育改革提供新方向和活力。</p></div></div></div>',1)),x("div",wF,[x("div",CF,[e[11]||(e[11]=x("div",{class:"header"},"網址連結",-1)),x("div",SF,[e[10]||(e[10]=x("ul",null,[x("li",null,[x("a",{href:"https://www.alearn.org",target:"_blank",rel:"noopener noreferrer"},"官方網站")]),x("li",null,[x("a",{href:"https://www.facebook.com/alearnTW",target:"_blank",rel:"noopener noreferrer"},"臉書「自主學習促進會」專頁")]),x("li",null,[x("a",{href:"https://www.facebook.com/groups/homeschooltw",target:"_blank",rel:"noopener noreferrer"},"臉書「在家自學社群」社團")])],-1)),t.projects.length?(Ne(),Be("ul",IF,[(Ne(!0),Be(dt,null,qy(t.projects,o=>(Ne(),Be("li",{key:o.id},[x("a",{href:o.website,target:"_blank",rel:"noopener noreferrer"},Ba(o.full_name),9,TF)]))),128))])):(Ne(),Be("p",RF,"載入中..."))])])])])])}const PF=uu(gF,[["render",AF],["__scopeId","data-v-6eba21ae"]]),OF=fF({history:WM("/"),routes:[{path:"/",name:"home",component:PF},{path:"/feedback",name:"FeedbackView",component:()=>ir(()=>import("./FeedbackView-BT_vsLi0.js"),__vite__mapDeps([0,1]))},{path:"/faq",name:"FaqView",component:()=>ir(()=>import("./FaqView-0uh6YYiD.js"),__vite__mapDeps([2,3]))},{path:"/create_faq",name:"CreateFaqView",component:()=>ir(()=>import("./CreateFaqView-DymzRoTw.js"),__vite__mapDeps([4,5]))},{path:"/edit_faq/:id",name:"EditFaqView",component:()=>ir(()=>import("./EditFaqView-B-8qp0qI.js"),__vite__mapDeps([6,7]))},{path:"/about",name:"about",component:()=>ir(()=>import("./AboutView-CZu4n8y6.js"),__vite__mapDeps([8,9]))}]}),pu=lb(uM);pu.use(fb());pu.use(OF);pu.mount("#app");export{dt as F,uu as _,x as a,ec as b,Be as c,Jr as d,be as e,qy as f,Za as g,Ie as h,Hi as i,Cv as j,ml as k,Ne as o,yR as p,ht as r,vR as s,Ba as t,kF as u,NF as v,Ci as w};
