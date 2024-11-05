const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AboutView-D2cNNFov.js","assets/AboutView-CTwSeMp2.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ja(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const re={},Zn=[],yt=()=>{},d_=()=>!1,Gr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Xa=t=>t.startsWith("onUpdate:"),Te=Object.assign,Za=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},f_=Object.prototype.hasOwnProperty,Z=(t,e)=>f_.call(t,e),W=Array.isArray,es=t=>Ri(t)==="[object Map]",Kr=t=>Ri(t)==="[object Set]",wc=t=>Ri(t)==="[object Date]",j=t=>typeof t=="function",ve=t=>typeof t=="string",wt=t=>typeof t=="symbol",he=t=>t!==null&&typeof t=="object",rd=t=>(he(t)||j(t))&&j(t.then)&&j(t.catch),od=Object.prototype.toString,Ri=t=>od.call(t),p_=t=>Ri(t).slice(8,-1),ad=t=>Ri(t)==="[object Object]",el=t=>ve(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ks=Ja(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),qr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},g_=/-(\w)/g,tt=qr(t=>t.replace(g_,(e,n)=>n?n.toUpperCase():"")),__=/\B([A-Z])/g,Wn=qr(t=>t.replace(__,"-$1").toLowerCase()),zr=qr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Po=qr(t=>t?`on${zr(t)}`:""),on=(t,e)=>!Object.is(t,e),tr=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},ld=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},oa=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ic;const Yr=()=>Ic||(Ic=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function tl(t){if(W(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=ve(s)?E_(s):tl(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(ve(t)||he(t))return t}const m_=/;(?![^(]*\))/g,v_=/:([^]+)/,y_=/\/\*[^]*?\*\//g;function E_(t){const e={};return t.replace(y_,"").split(m_).forEach(n=>{if(n){const s=n.split(v_);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function kn(t){let e="";if(ve(t))e=t;else if(W(t))for(let n=0;n<t.length;n++){const s=kn(t[n]);s&&(e+=s+" ")}else if(he(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const b_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",w_=Ja(b_);function cd(t){return!!t||t===""}function I_(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Qr(t[s],e[s]);return n}function Qr(t,e){if(t===e)return!0;let n=wc(t),s=wc(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=wt(t),s=wt(e),n||s)return t===e;if(n=W(t),s=W(e),n||s)return n&&s?I_(t,e):!1;if(n=he(t),s=he(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Qr(t[o],e[o]))return!1}}return String(t)===String(e)}function ud(t,e){return t.findIndex(n=>Qr(n,e))}const hd=t=>!!(t&&t.__v_isRef===!0),dd=t=>ve(t)?t:t==null?"":W(t)||he(t)&&(t.toString===od||!j(t.toString))?hd(t)?dd(t.value):JSON.stringify(t,fd,2):String(t),fd=(t,e)=>hd(e)?fd(t,e.value):es(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[Oo(s,r)+" =>"]=i,n),{})}:Kr(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Oo(n))}:wt(e)?Oo(e):he(e)&&!W(e)&&!ad(e)?String(e):e,Oo=(t,e="")=>{var n;return wt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ke;class pd{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ke,!e&&Ke&&(this.index=(Ke.scopes||(Ke.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ke;try{return Ke=this,e()}finally{Ke=n}}}on(){Ke=this}off(){Ke=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function C_(t){return new pd(t)}function T_(){return Ke}let ce;const No=new WeakSet;class gd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ke&&Ke.active&&Ke.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,No.has(this)&&(No.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||md(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Cc(this),vd(this);const e=ce,n=lt;ce=this,lt=!0;try{return this.fn()}finally{yd(this),ce=e,lt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)il(e);this.deps=this.depsTail=void 0,Cc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?No.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){aa(this)&&this.run()}get dirty(){return aa(this)}}let _d=0,qs,zs;function md(t,e=!1){if(t.flags|=8,e){t.next=zs,zs=t;return}t.next=qs,qs=t}function nl(){_d++}function sl(){if(--_d>0)return;if(zs){let e=zs;for(zs=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;qs;){let e=qs;for(qs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function vd(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function yd(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),il(s),S_(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function aa(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Ed(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Ed(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ai))return;t.globalVersion=ai;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!aa(t)){t.flags&=-3;return}const n=ce,s=lt;ce=t,lt=!0;try{vd(t);const i=t.fn(t._value);(e.version===0||on(i,t._value))&&(t._value=i,e.version++)}catch(i){throw e.version++,i}finally{ce=n,lt=s,yd(t),t.flags&=-3}}function il(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)il(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function S_(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let lt=!0;const bd=[];function _n(){bd.push(lt),lt=!1}function mn(){const t=bd.pop();lt=t===void 0?!0:t}function Cc(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ce;ce=void 0;try{e()}finally{ce=n}}}let ai=0;class R_{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class rl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ce||!lt||ce===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ce)n=this.activeLink=new R_(ce,this),ce.deps?(n.prevDep=ce.depsTail,ce.depsTail.nextDep=n,ce.depsTail=n):ce.deps=ce.depsTail=n,wd(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=ce.depsTail,n.nextDep=void 0,ce.depsTail.nextDep=n,ce.depsTail=n,ce.deps===n&&(ce.deps=s)}return n}trigger(e){this.version++,ai++,this.notify(e)}notify(e){nl();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{sl()}}}function wd(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)wd(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const la=new WeakMap,Nn=Symbol(""),ca=Symbol(""),li=Symbol("");function Re(t,e,n){if(lt&&ce){let s=la.get(t);s||la.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new rl),i.map=s,i.key=n),i.track()}}function Pt(t,e,n,s,i,r){const o=la.get(t);if(!o){ai++;return}const a=l=>{l&&l.trigger()};if(nl(),e==="clear")o.forEach(a);else{const l=W(t),c=l&&el(n);if(l&&n==="length"){const u=Number(s);o.forEach((h,d)=>{(d==="length"||d===li||!wt(d)&&d>=u)&&a(h)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(li)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Nn)),es(t)&&a(o.get(ca)));break;case"delete":l||(a(o.get(Nn)),es(t)&&a(o.get(ca)));break;case"set":es(t)&&a(o.get(Nn));break}}sl()}function Kn(t){const e=X(t);return e===t?e:(Re(e,"iterate",li),et(t)?e:e.map(Ae))}function Jr(t){return Re(t=X(t),"iterate",li),t}const A_={__proto__:null,[Symbol.iterator](){return ko(this,Symbol.iterator,Ae)},concat(...t){return Kn(this).concat(...t.map(e=>W(e)?Kn(e):e))},entries(){return ko(this,"entries",t=>(t[1]=Ae(t[1]),t))},every(t,e){return St(this,"every",t,e,void 0,arguments)},filter(t,e){return St(this,"filter",t,e,n=>n.map(Ae),arguments)},find(t,e){return St(this,"find",t,e,Ae,arguments)},findIndex(t,e){return St(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return St(this,"findLast",t,e,Ae,arguments)},findLastIndex(t,e){return St(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return St(this,"forEach",t,e,void 0,arguments)},includes(...t){return xo(this,"includes",t)},indexOf(...t){return xo(this,"indexOf",t)},join(t){return Kn(this).join(t)},lastIndexOf(...t){return xo(this,"lastIndexOf",t)},map(t,e){return St(this,"map",t,e,void 0,arguments)},pop(){return Ds(this,"pop")},push(...t){return Ds(this,"push",t)},reduce(t,...e){return Tc(this,"reduce",t,e)},reduceRight(t,...e){return Tc(this,"reduceRight",t,e)},shift(){return Ds(this,"shift")},some(t,e){return St(this,"some",t,e,void 0,arguments)},splice(...t){return Ds(this,"splice",t)},toReversed(){return Kn(this).toReversed()},toSorted(t){return Kn(this).toSorted(t)},toSpliced(...t){return Kn(this).toSpliced(...t)},unshift(...t){return Ds(this,"unshift",t)},values(){return ko(this,"values",Ae)}};function ko(t,e,n){const s=Jr(t),i=s[e]();return s!==t&&!et(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=n(r.value)),r}),i}const P_=Array.prototype;function St(t,e,n,s,i,r){const o=Jr(t),a=o!==t&&!et(t),l=o[e];if(l!==P_[e]){const h=l.apply(t,r);return a?Ae(h):h}let c=n;o!==t&&(a?c=function(h,d){return n.call(this,Ae(h),d,t)}:n.length>2&&(c=function(h,d){return n.call(this,h,d,t)}));const u=l.call(o,c,s);return a&&i?i(u):u}function Tc(t,e,n,s){const i=Jr(t);let r=n;return i!==t&&(et(t)?n.length>3&&(r=function(o,a,l){return n.call(this,o,a,l,t)}):r=function(o,a,l){return n.call(this,o,Ae(a),l,t)}),i[e](r,...s)}function xo(t,e,n){const s=X(t);Re(s,"iterate",li);const i=s[e](...n);return(i===-1||i===!1)&&ll(n[0])?(n[0]=X(n[0]),s[e](...n)):i}function Ds(t,e,n=[]){_n(),nl();const s=X(t)[e].apply(t,n);return sl(),mn(),s}const O_=Ja("__proto__,__v_isRef,__isVue"),Id=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(wt));function N_(t){wt(t)||(t=String(t));const e=X(this);return Re(e,"has",t),e.hasOwnProperty(t)}class Cd{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?W_:Ad:r?Rd:Sd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=W(e);if(!i){let l;if(o&&(l=A_[n]))return l;if(n==="hasOwnProperty")return N_}const a=Reflect.get(e,n,Ne(e)?e:s);return(wt(n)?Id.has(n):O_(n))||(i||Re(e,"get",n),r)?a:Ne(a)?o&&el(n)?a:a.value:he(a)?i?Od(a):Xr(a):a}}class Td extends Cd{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const l=xn(r);if(!et(s)&&!xn(s)&&(r=X(r),s=X(s)),!W(e)&&Ne(r)&&!Ne(s))return l?!1:(r.value=s,!0)}const o=W(e)&&el(n)?Number(n)<e.length:Z(e,n),a=Reflect.set(e,n,s,Ne(e)?e:i);return e===X(i)&&(o?on(s,r)&&Pt(e,"set",n,s):Pt(e,"add",n,s)),a}deleteProperty(e,n){const s=Z(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&Pt(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!wt(n)||!Id.has(n))&&Re(e,"has",n),s}ownKeys(e){return Re(e,"iterate",W(e)?"length":Nn),Reflect.ownKeys(e)}}class k_ extends Cd{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const x_=new Td,D_=new k_,M_=new Td(!0);const ua=t=>t,Gi=t=>Reflect.getPrototypeOf(t);function L_(t,e,n){return function(...s){const i=this.__v_raw,r=X(i),o=es(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?ua:e?ha:Ae;return!e&&Re(r,"iterate",l?ca:Nn),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Ki(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function $_(t,e){const n={get(i){const r=this.__v_raw,o=X(r),a=X(i);t||(on(i,a)&&Re(o,"get",i),Re(o,"get",a));const{has:l}=Gi(o),c=e?ua:t?ha:Ae;if(l.call(o,i))return c(r.get(i));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&Re(X(i),"iterate",Nn),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,o=X(r),a=X(i);return t||(on(i,a)&&Re(o,"has",i),Re(o,"has",a)),i===a?r.has(i):r.has(i)||r.has(a)},forEach(i,r){const o=this,a=o.__v_raw,l=X(a),c=e?ua:t?ha:Ae;return!t&&Re(l,"iterate",Nn),a.forEach((u,h)=>i.call(r,c(u),c(h),o))}};return Te(n,t?{add:Ki("add"),set:Ki("set"),delete:Ki("delete"),clear:Ki("clear")}:{add(i){!e&&!et(i)&&!xn(i)&&(i=X(i));const r=X(this);return Gi(r).has.call(r,i)||(r.add(i),Pt(r,"add",i,i)),this},set(i,r){!e&&!et(r)&&!xn(r)&&(r=X(r));const o=X(this),{has:a,get:l}=Gi(o);let c=a.call(o,i);c||(i=X(i),c=a.call(o,i));const u=l.call(o,i);return o.set(i,r),c?on(r,u)&&Pt(o,"set",i,r):Pt(o,"add",i,r),this},delete(i){const r=X(this),{has:o,get:a}=Gi(r);let l=o.call(r,i);l||(i=X(i),l=o.call(r,i)),a&&a.call(r,i);const c=r.delete(i);return l&&Pt(r,"delete",i,void 0),c},clear(){const i=X(this),r=i.size!==0,o=i.clear();return r&&Pt(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=L_(i,t,e)}),n}function ol(t,e){const n=$_(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(Z(n,i)&&i in s?n:s,i,r)}const F_={get:ol(!1,!1)},U_={get:ol(!1,!0)},H_={get:ol(!0,!1)};const Sd=new WeakMap,Rd=new WeakMap,Ad=new WeakMap,W_=new WeakMap;function V_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function B_(t){return t.__v_skip||!Object.isExtensible(t)?0:V_(p_(t))}function Xr(t){return xn(t)?t:al(t,!1,x_,F_,Sd)}function Pd(t){return al(t,!1,M_,U_,Rd)}function Od(t){return al(t,!0,D_,H_,Ad)}function al(t,e,n,s,i){if(!he(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=B_(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function ts(t){return xn(t)?ts(t.__v_raw):!!(t&&t.__v_isReactive)}function xn(t){return!!(t&&t.__v_isReadonly)}function et(t){return!!(t&&t.__v_isShallow)}function ll(t){return t?!!t.__v_raw:!1}function X(t){const e=t&&t.__v_raw;return e?X(e):t}function Nd(t){return!Z(t,"__v_skip")&&Object.isExtensible(t)&&ld(t,"__v_skip",!0),t}const Ae=t=>he(t)?Xr(t):t,ha=t=>he(t)?Od(t):t;function Ne(t){return t?t.__v_isRef===!0:!1}function an(t){return kd(t,!1)}function j_(t){return kd(t,!0)}function kd(t,e){return Ne(t)?t:new G_(t,e)}class G_{constructor(e,n){this.dep=new rl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:X(e),this._value=n?e:Ae(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||et(e)||xn(e);e=s?e:X(e),on(e,n)&&(this._rawValue=e,this._value=s?e:Ae(e),this.dep.trigger())}}function ns(t){return Ne(t)?t.value:t}const K_={get:(t,e,n)=>e==="__v_raw"?t:ns(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Ne(i)&&!Ne(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function xd(t){return ts(t)?t:new Proxy(t,K_)}class q_{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new rl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ai-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&ce!==this)return md(this,!0),!0}get value(){const e=this.dep.track();return Ed(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function z_(t,e,n=!1){let s,i;return j(t)?s=t:(s=t.get,i=t.set),new q_(s,i,n)}const qi={},hr=new WeakMap;let Cn;function Y_(t,e=!1,n=Cn){if(n){let s=hr.get(n);s||hr.set(n,s=[]),s.push(t)}}function Q_(t,e,n=re){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:a,call:l}=n,c=x=>i?x:et(x)||i===!1||i===0?Ot(x,1):Ot(x);let u,h,d,g,m=!1,E=!1;if(Ne(t)?(h=()=>t.value,m=et(t)):ts(t)?(h=()=>c(t),m=!0):W(t)?(E=!0,m=t.some(x=>ts(x)||et(x)),h=()=>t.map(x=>{if(Ne(x))return x.value;if(ts(x))return c(x);if(j(x))return l?l(x,2):x()})):j(t)?e?h=l?()=>l(t,2):t:h=()=>{if(d){_n();try{d()}finally{mn()}}const x=Cn;Cn=u;try{return l?l(t,3,[g]):t(g)}finally{Cn=x}}:h=yt,e&&i){const x=h,z=i===!0?1/0:i;h=()=>Ot(x(),z)}const O=T_(),k=()=>{u.stop(),O&&Za(O.effects,u)};if(r&&e){const x=e;e=(...z)=>{x(...z),k()}}let P=E?new Array(t.length).fill(qi):qi;const M=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(e){const z=u.run();if(i||m||(E?z.some((_e,ae)=>on(_e,P[ae])):on(z,P))){d&&d();const _e=Cn;Cn=u;try{const ae=[z,P===qi?void 0:E&&P[0]===qi?[]:P,g];l?l(e,3,ae):e(...ae),P=z}finally{Cn=_e}}}else u.run()};return a&&a(M),u=new gd(h),u.scheduler=o?()=>o(M,!1):M,g=x=>Y_(x,!1,u),d=u.onStop=()=>{const x=hr.get(u);if(x){if(l)l(x,4);else for(const z of x)z();hr.delete(u)}},e?s?M(!0):P=u.run():o?o(M.bind(null,!0),!0):u.run(),k.pause=u.pause.bind(u),k.resume=u.resume.bind(u),k.stop=k,k}function Ot(t,e=1/0,n){if(e<=0||!he(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Ne(t))Ot(t.value,e,n);else if(W(t))for(let s=0;s<t.length;s++)Ot(t[s],e,n);else if(Kr(t)||es(t))t.forEach(s=>{Ot(s,e,n)});else if(ad(t)){for(const s in t)Ot(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&Ot(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ai(t,e,n,s){try{return s?t(...s):t()}catch(i){Zr(i,e,n)}}function It(t,e,n,s){if(j(t)){const i=Ai(t,e,n,s);return i&&rd(i)&&i.catch(r=>{Zr(r,e,n)}),i}if(W(t)){const i=[];for(let r=0;r<t.length;r++)i.push(It(t[r],e,n,s));return i}}function Zr(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||re;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](t,l,c)===!1)return}a=a.parent}if(r){_n(),Ai(r,null,10,[t,l,c]),mn();return}}J_(t,n,i,s,o)}function J_(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const De=[];let _t=-1;const ss=[];let Jt=null,zn=0;const Dd=Promise.resolve();let dr=null;function Md(t){const e=dr||Dd;return t?e.then(this?t.bind(this):t):e}function X_(t){let e=_t+1,n=De.length;for(;e<n;){const s=e+n>>>1,i=De[s],r=ci(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function cl(t){if(!(t.flags&1)){const e=ci(t),n=De[De.length-1];!n||!(t.flags&2)&&e>=ci(n)?De.push(t):De.splice(X_(e),0,t),t.flags|=1,Ld()}}function Ld(){dr||(dr=Dd.then(Fd))}function Z_(t){W(t)?ss.push(...t):Jt&&t.id===-1?Jt.splice(zn+1,0,t):t.flags&1||(ss.push(t),t.flags|=1),Ld()}function Sc(t,e,n=_t+1){for(;n<De.length;n++){const s=De[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;De.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function $d(t){if(ss.length){const e=[...new Set(ss)].sort((n,s)=>ci(n)-ci(s));if(ss.length=0,Jt){Jt.push(...e);return}for(Jt=e,zn=0;zn<Jt.length;zn++){const n=Jt[zn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Jt=null,zn=0}}const ci=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Fd(t){try{for(_t=0;_t<De.length;_t++){const e=De[_t];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ai(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;_t<De.length;_t++){const e=De[_t];e&&(e.flags&=-2)}_t=-1,De.length=0,$d(),dr=null,(De.length||ss.length)&&Fd()}}let ze=null,Ud=null;function fr(t){const e=ze;return ze=t,Ud=t&&t.type.__scopeId||null,e}function Yn(t,e=ze,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Mc(-1);const r=fr(e);let o;try{o=t(...i)}finally{fr(r),s._d&&Mc(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Do(t,e){if(ze===null)return t;const n=so(ze),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,a,l=re]=e[i];r&&(j(r)&&(r={mounted:r,updated:r}),r.deep&&Ot(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function wn(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(_n(),It(l,n,8,[t.el,a,t,e]),mn())}}const em=Symbol("_vte"),tm=t=>t.__isTeleport;function ul(t,e){t.shapeFlag&6&&t.component?(t.transition=e,ul(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Pi(t,e){return j(t)?Te({name:t.name},e,{setup:t}):t}function Hd(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function da(t,e,n,s,i=!1){if(W(t)){t.forEach((m,E)=>da(m,e&&(W(e)?e[E]:e),n,s,i));return}if(Ys(s)&&!i)return;const r=s.shapeFlag&4?so(s.component):s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===re?a.refs={}:a.refs,h=a.setupState,d=X(h),g=h===re?()=>!1:m=>Z(d,m);if(c!=null&&c!==l&&(ve(c)?(u[c]=null,g(c)&&(h[c]=null)):Ne(c)&&(c.value=null)),j(l))Ai(l,a,12,[o,u]);else{const m=ve(l),E=Ne(l);if(m||E){const O=()=>{if(t.f){const k=m?g(l)?h[l]:u[l]:l.value;i?W(k)&&Za(k,r):W(k)?k.includes(r)||k.push(r):m?(u[l]=[r],g(l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else m?(u[l]=o,g(l)&&(h[l]=o)):E&&(l.value=o,t.k&&(u[t.k]=o))};o?(O.id=-1,Ge(O,n)):O()}}}Yr().requestIdleCallback;Yr().cancelIdleCallback;const Ys=t=>!!t.type.__asyncLoader,Wd=t=>t.type.__isKeepAlive;function nm(t,e){Vd(t,"a",e)}function sm(t,e){Vd(t,"da",e)}function Vd(t,e,n=Oe){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(eo(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Wd(i.parent.vnode)&&im(s,e,n,i),i=i.parent}}function im(t,e,n,s){const i=eo(e,t,s,!0);Bd(()=>{Za(s[e],i)},n)}function eo(t,e,n=Oe,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{_n();const a=Oi(n),l=It(e,n,t,o);return a(),mn(),l});return s?i.unshift(r):i.push(r),r}}const Wt=t=>(e,n=Oe)=>{(!hi||t==="sp")&&eo(t,(...s)=>e(...s),n)},rm=Wt("bm"),hl=Wt("m"),om=Wt("bu"),am=Wt("u"),lm=Wt("bum"),Bd=Wt("um"),cm=Wt("sp"),um=Wt("rtg"),hm=Wt("rtc");function dm(t,e=Oe){eo("ec",t,e)}const fm="components";function zi(t,e){return gm(fm,t,!0,e)||t}const pm=Symbol.for("v-ndc");function gm(t,e,n=!0,s=!1){const i=ze||Oe;if(i){const r=i.type;{const a=sv(r,!1);if(a&&(a===e||a===tt(e)||a===zr(tt(e))))return r}const o=Rc(i[t]||r[t],e)||Rc(i.appContext[t],e);return!o&&s?r:o}}function Rc(t,e){return t&&(t[e]||t[tt(e)]||t[zr(tt(e))])}function _m(t,e,n,s){let i;const r=n,o=W(t);if(o||ve(t)){const a=o&&ts(t);let l=!1;a&&(l=!et(t),t=Jr(t)),i=new Array(t.length);for(let c=0,u=t.length;c<u;c++)i[c]=e(l?Ae(t[c]):t[c],c,void 0,r)}else if(typeof t=="number"){i=new Array(t);for(let a=0;a<t;a++)i[a]=e(a+1,a,void 0,r)}else if(he(t))if(t[Symbol.iterator])i=Array.from(t,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(t);i=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];i[l]=e(t[u],u,l,r)}}else i=[];return i}const fa=t=>t?hf(t)?so(t):fa(t.parent):null,Qs=Te(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>fa(t.parent),$root:t=>fa(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>dl(t),$forceUpdate:t=>t.f||(t.f=()=>{cl(t.update)}),$nextTick:t=>t.n||(t.n=Md.bind(t.proxy)),$watch:t=>$m.bind(t)}),Mo=(t,e)=>t!==re&&!t.__isScriptSetup&&Z(t,e),mm={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Mo(s,e))return o[e]=1,s[e];if(i!==re&&Z(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&Z(c,e))return o[e]=3,r[e];if(n!==re&&Z(n,e))return o[e]=4,n[e];pa&&(o[e]=0)}}const u=Qs[e];let h,d;if(u)return e==="$attrs"&&Re(t.attrs,"get",""),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==re&&Z(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,Z(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Mo(i,e)?(i[e]=n,!0):s!==re&&Z(s,e)?(s[e]=n,!0):Z(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==re&&Z(t,o)||Mo(e,o)||(a=r[0])&&Z(a,o)||Z(s,o)||Z(Qs,o)||Z(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Z(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ac(t){return W(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let pa=!0;function vm(t){const e=dl(t),n=t.proxy,s=t.ctx;pa=!1,e.beforeCreate&&Pc(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:g,updated:m,activated:E,deactivated:O,beforeDestroy:k,beforeUnmount:P,destroyed:M,unmounted:x,render:z,renderTracked:_e,renderTriggered:ae,errorCaptured:Qe,serverPrefetch:Je,expose:Xe,inheritAttrs:qt,components:bn,directives:dt,filters:ks}=e;if(c&&ym(c,s,null),o)for(const se in o){const J=o[se];j(J)&&(s[se]=J.bind(n))}if(i){const se=i.call(n,n);he(se)&&(t.data=Xr(se))}if(pa=!0,r)for(const se in r){const J=r[se],Tt=j(J)?J.bind(n,n):j(J.get)?J.get.bind(n,n):yt,zt=!j(J)&&j(J.set)?J.set.bind(n):yt,ft=it({get:Tt,set:zt});Object.defineProperty(s,se,{enumerable:!0,configurable:!0,get:()=>ft.value,set:Fe=>ft.value=Fe})}if(a)for(const se in a)jd(a[se],s,n,se);if(l){const se=j(l)?l.call(n):l;Reflect.ownKeys(se).forEach(J=>{nr(J,se[J])})}u&&Pc(u,t,"c");function be(se,J){W(J)?J.forEach(Tt=>se(Tt.bind(n))):J&&se(J.bind(n))}if(be(rm,h),be(hl,d),be(om,g),be(am,m),be(nm,E),be(sm,O),be(dm,Qe),be(hm,_e),be(um,ae),be(lm,P),be(Bd,x),be(cm,Je),W(Xe))if(Xe.length){const se=t.exposed||(t.exposed={});Xe.forEach(J=>{Object.defineProperty(se,J,{get:()=>n[J],set:Tt=>n[J]=Tt})})}else t.exposed||(t.exposed={});z&&t.render===yt&&(t.render=z),qt!=null&&(t.inheritAttrs=qt),bn&&(t.components=bn),dt&&(t.directives=dt),Je&&Hd(t)}function ym(t,e,n=yt){W(t)&&(t=ga(t));for(const s in t){const i=t[s];let r;he(i)?"default"in i?r=Mt(i.from||s,i.default,!0):r=Mt(i.from||s):r=Mt(i),Ne(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function Pc(t,e,n){It(W(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function jd(t,e,n,s){let i=s.includes(".")?rf(n,s):()=>n[s];if(ve(t)){const r=e[t];j(r)&&Js(i,r)}else if(j(t))Js(i,t.bind(n));else if(he(t))if(W(t))t.forEach(r=>jd(r,e,n,s));else{const r=j(t.handler)?t.handler.bind(n):e[t.handler];j(r)&&Js(i,r,t)}}function dl(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>pr(l,c,o,!0)),pr(l,e,o)),he(e)&&r.set(e,l),l}function pr(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&pr(t,r,n,!0),i&&i.forEach(o=>pr(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Em[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Em={data:Oc,props:Nc,emits:Nc,methods:Bs,computed:Bs,beforeCreate:ke,created:ke,beforeMount:ke,mounted:ke,beforeUpdate:ke,updated:ke,beforeDestroy:ke,beforeUnmount:ke,destroyed:ke,unmounted:ke,activated:ke,deactivated:ke,errorCaptured:ke,serverPrefetch:ke,components:Bs,directives:Bs,watch:wm,provide:Oc,inject:bm};function Oc(t,e){return e?t?function(){return Te(j(t)?t.call(this,this):t,j(e)?e.call(this,this):e)}:e:t}function bm(t,e){return Bs(ga(t),ga(e))}function ga(t){if(W(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ke(t,e){return t?[...new Set([].concat(t,e))]:e}function Bs(t,e){return t?Te(Object.create(null),t,e):e}function Nc(t,e){return t?W(t)&&W(e)?[...new Set([...t,...e])]:Te(Object.create(null),Ac(t),Ac(e??{})):e}function wm(t,e){if(!t)return e;if(!e)return t;const n=Te(Object.create(null),t);for(const s in e)n[s]=ke(t[s],e[s]);return n}function Gd(){return{app:null,config:{isNativeTag:d_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Im=0;function Cm(t,e){return function(s,i=null){j(s)||(s=Te({},s)),i!=null&&!he(i)&&(i=null);const r=Gd(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Im++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:rv,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&j(u.install)?(o.add(u),u.install(c,...h)):j(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,d){if(!l){const g=c._ceVNode||me(s,i);return g.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),h&&e?e(g,u):t(g,u,d),l=!0,c._container=u,u.__vue_app__=c,so(g.component)}},onUnmount(u){a.push(u)},unmount(){l&&(It(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=is;is=c;try{return u()}finally{is=h}}};return c}}let is=null;function nr(t,e){if(Oe){let n=Oe.provides;const s=Oe.parent&&Oe.parent.provides;s===n&&(n=Oe.provides=Object.create(s)),n[t]=e}}function Mt(t,e,n=!1){const s=Oe||ze;if(s||is){const i=is?is._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&j(e)?e.call(s&&s.proxy):e}}const Kd={},qd=()=>Object.create(Kd),zd=t=>Object.getPrototypeOf(t)===Kd;function Tm(t,e,n,s=!1){const i={},r=qd();t.propsDefaults=Object.create(null),Yd(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Pd(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Sm(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=X(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(to(t.emitsOptions,d))continue;const g=e[d];if(l)if(Z(r,d))g!==r[d]&&(r[d]=g,c=!0);else{const m=tt(d);i[m]=_a(l,a,m,g,t,!1)}else g!==r[d]&&(r[d]=g,c=!0)}}}else{Yd(t,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!Z(e,h)&&((u=Wn(h))===h||!Z(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=_a(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!Z(e,h))&&(delete r[h],c=!0)}c&&Pt(t.attrs,"set","")}function Yd(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ks(l))continue;const c=e[l];let u;i&&Z(i,u=tt(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:to(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=X(n),c=a||re;for(let u=0;u<r.length;u++){const h=r[u];n[h]=_a(i,l,h,c[h],t,!Z(c,h))}}return o}function _a(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=Z(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&j(l)){const{propsDefaults:c}=i;if(n in c)s=c[n];else{const u=Oi(i);s=c[n]=l.call(null,e),u()}}else s=l;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Wn(n))&&(s=!0))}return s}const Rm=new WeakMap;function Qd(t,e,n=!1){const s=n?Rm:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!j(t)){const u=h=>{l=!0;const[d,g]=Qd(h,e,!0);Te(o,d),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return he(t)&&s.set(t,Zn),Zn;if(W(r))for(let u=0;u<r.length;u++){const h=tt(r[u]);kc(h)&&(o[h]=re)}else if(r)for(const u in r){const h=tt(u);if(kc(h)){const d=r[u],g=o[h]=W(d)||j(d)?{type:d}:Te({},d),m=g.type;let E=!1,O=!0;if(W(m))for(let k=0;k<m.length;++k){const P=m[k],M=j(P)&&P.name;if(M==="Boolean"){E=!0;break}else M==="String"&&(O=!1)}else E=j(m)&&m.name==="Boolean";g[0]=E,g[1]=O,(E||Z(g,"default"))&&a.push(h)}}const c=[o,a];return he(t)&&s.set(t,c),c}function kc(t){return t[0]!=="$"&&!Ks(t)}const Jd=t=>t[0]==="_"||t==="$stable",fl=t=>W(t)?t.map(mt):[mt(t)],Am=(t,e,n)=>{if(e._n)return e;const s=Yn((...i)=>fl(e(...i)),n);return s._c=!1,s},Xd=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Jd(i))continue;const r=t[i];if(j(r))e[i]=Am(i,r,s);else if(r!=null){const o=fl(r);e[i]=()=>o}}},Zd=(t,e)=>{const n=fl(e);t.slots.default=()=>n},ef=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},Pm=(t,e,n)=>{const s=t.slots=qd();if(t.vnode.shapeFlag&32){const i=e._;i?(ef(s,e,n),n&&ld(s,"_",i,!0)):Xd(e,s)}else e&&Zd(t,e)},Om=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=re;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:ef(i,e,n):(r=!e.$stable,Xd(e,i)),o=e}else e&&(Zd(t,e),o={default:1});if(r)for(const a in i)!Jd(a)&&o[a]==null&&delete i[a]},Ge=jm;function Nm(t){return km(t)}function km(t,e){const n=Yr();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:g=yt,insertStaticContent:m}=t,E=(f,p,_,b=null,v=null,w=null,R=void 0,S=null,T=!!p.dynamicChildren)=>{if(f===p)return;f&&!Ms(f,p)&&(b=y(f),Fe(f,v,w,!0),f=null),p.patchFlag===-2&&(T=!1,p.dynamicChildren=null);const{type:I,ref:U,shapeFlag:N}=p;switch(I){case no:O(f,p,_,b);break;case Dn:k(f,p,_,b);break;case sr:f==null&&P(p,_,b,R);break;case st:bn(f,p,_,b,v,w,R,S,T);break;default:N&1?z(f,p,_,b,v,w,R,S,T):N&6?dt(f,p,_,b,v,w,R,S,T):(N&64||N&128)&&I.process(f,p,_,b,v,w,R,S,T,L)}U!=null&&v&&da(U,f&&f.ref,w,p||f,!p)},O=(f,p,_,b)=>{if(f==null)s(p.el=a(p.children),_,b);else{const v=p.el=f.el;p.children!==f.children&&c(v,p.children)}},k=(f,p,_,b)=>{f==null?s(p.el=l(p.children||""),_,b):p.el=f.el},P=(f,p,_,b)=>{[f.el,f.anchor]=m(f.children,p,_,b,f.el,f.anchor)},M=({el:f,anchor:p},_,b)=>{let v;for(;f&&f!==p;)v=d(f),s(f,_,b),f=v;s(p,_,b)},x=({el:f,anchor:p})=>{let _;for(;f&&f!==p;)_=d(f),i(f),f=_;i(p)},z=(f,p,_,b,v,w,R,S,T)=>{p.type==="svg"?R="svg":p.type==="math"&&(R="mathml"),f==null?_e(p,_,b,v,w,R,S,T):Je(f,p,v,w,R,S,T)},_e=(f,p,_,b,v,w,R,S)=>{let T,I;const{props:U,shapeFlag:N,transition:F,dirs:B}=f;if(T=f.el=o(f.type,w,U&&U.is,U),N&8?u(T,f.children):N&16&&Qe(f.children,T,null,b,v,Lo(f,w),R,S),B&&wn(f,null,b,"created"),ae(T,f,f.scopeId,R,b),U){for(const le in U)le!=="value"&&!Ks(le)&&r(T,le,null,U[le],w,b);"value"in U&&r(T,"value",null,U.value,w),(I=U.onVnodeBeforeMount)&&gt(I,b,f)}B&&wn(f,null,b,"beforeMount");const Y=xm(v,F);Y&&F.beforeEnter(T),s(T,p,_),((I=U&&U.onVnodeMounted)||Y||B)&&Ge(()=>{I&&gt(I,b,f),Y&&F.enter(T),B&&wn(f,null,b,"mounted")},v)},ae=(f,p,_,b,v)=>{if(_&&g(f,_),b)for(let w=0;w<b.length;w++)g(f,b[w]);if(v){let w=v.subTree;if(p===w||af(w.type)&&(w.ssContent===p||w.ssFallback===p)){const R=v.vnode;ae(f,R,R.scopeId,R.slotScopeIds,v.parent)}}},Qe=(f,p,_,b,v,w,R,S,T=0)=>{for(let I=T;I<f.length;I++){const U=f[I]=S?Zt(f[I]):mt(f[I]);E(null,U,p,_,b,v,w,R,S)}},Je=(f,p,_,b,v,w,R)=>{const S=p.el=f.el;let{patchFlag:T,dynamicChildren:I,dirs:U}=p;T|=f.patchFlag&16;const N=f.props||re,F=p.props||re;let B;if(_&&In(_,!1),(B=F.onVnodeBeforeUpdate)&&gt(B,_,p,f),U&&wn(p,f,_,"beforeUpdate"),_&&In(_,!0),(N.innerHTML&&F.innerHTML==null||N.textContent&&F.textContent==null)&&u(S,""),I?Xe(f.dynamicChildren,I,S,_,b,Lo(p,v),w):R||J(f,p,S,null,_,b,Lo(p,v),w,!1),T>0){if(T&16)qt(S,N,F,_,v);else if(T&2&&N.class!==F.class&&r(S,"class",null,F.class,v),T&4&&r(S,"style",N.style,F.style,v),T&8){const Y=p.dynamicProps;for(let le=0;le<Y.length;le++){const te=Y[le],Ve=N[te],Se=F[te];(Se!==Ve||te==="value")&&r(S,te,Ve,Se,v,_)}}T&1&&f.children!==p.children&&u(S,p.children)}else!R&&I==null&&qt(S,N,F,_,v);((B=F.onVnodeUpdated)||U)&&Ge(()=>{B&&gt(B,_,p,f),U&&wn(p,f,_,"updated")},b)},Xe=(f,p,_,b,v,w,R)=>{for(let S=0;S<p.length;S++){const T=f[S],I=p[S],U=T.el&&(T.type===st||!Ms(T,I)||T.shapeFlag&70)?h(T.el):_;E(T,I,U,null,b,v,w,R,!0)}},qt=(f,p,_,b,v)=>{if(p!==_){if(p!==re)for(const w in p)!Ks(w)&&!(w in _)&&r(f,w,p[w],null,v,b);for(const w in _){if(Ks(w))continue;const R=_[w],S=p[w];R!==S&&w!=="value"&&r(f,w,S,R,v,b)}"value"in _&&r(f,"value",p.value,_.value,v)}},bn=(f,p,_,b,v,w,R,S,T)=>{const I=p.el=f?f.el:a(""),U=p.anchor=f?f.anchor:a("");let{patchFlag:N,dynamicChildren:F,slotScopeIds:B}=p;B&&(S=S?S.concat(B):B),f==null?(s(I,_,b),s(U,_,b),Qe(p.children||[],_,U,v,w,R,S,T)):N>0&&N&64&&F&&f.dynamicChildren?(Xe(f.dynamicChildren,F,_,v,w,R,S),(p.key!=null||v&&p===v.subTree)&&tf(f,p,!0)):J(f,p,_,U,v,w,R,S,T)},dt=(f,p,_,b,v,w,R,S,T)=>{p.slotScopeIds=S,f==null?p.shapeFlag&512?v.ctx.activate(p,_,b,R,T):ks(p,_,b,v,w,R,T):Bn(f,p,T)},ks=(f,p,_,b,v,w,R)=>{const S=f.component=Xm(f,b,v);if(Wd(f)&&(S.ctx.renderer=L),Zm(S,!1,R),S.asyncDep){if(v&&v.registerDep(S,be,R),!f.el){const T=S.subTree=me(Dn);k(null,T,p,_)}}else be(S,f,p,_,v,w,R)},Bn=(f,p,_)=>{const b=p.component=f.component;if(Vm(f,p,_))if(b.asyncDep&&!b.asyncResolved){se(b,p,_);return}else b.next=p,b.update();else p.el=f.el,b.vnode=p},be=(f,p,_,b,v,w,R)=>{const S=()=>{if(f.isMounted){let{next:N,bu:F,u:B,parent:Y,vnode:le}=f;{const Be=nf(f);if(Be){N&&(N.el=le.el,se(f,N,R)),Be.asyncDep.then(()=>{f.isUnmounted||S()});return}}let te=N,Ve;In(f,!1),N?(N.el=le.el,se(f,N,R)):N=le,F&&tr(F),(Ve=N.props&&N.props.onVnodeBeforeUpdate)&&gt(Ve,Y,N,le),In(f,!0);const Se=$o(f),nt=f.subTree;f.subTree=Se,E(nt,Se,h(nt.el),y(nt),f,v,w),N.el=Se.el,te===null&&Bm(f,Se.el),B&&Ge(B,v),(Ve=N.props&&N.props.onVnodeUpdated)&&Ge(()=>gt(Ve,Y,N,le),v)}else{let N;const{el:F,props:B}=p,{bm:Y,m:le,parent:te,root:Ve,type:Se}=f,nt=Ys(p);if(In(f,!1),Y&&tr(Y),!nt&&(N=B&&B.onVnodeBeforeMount)&&gt(N,te,p),In(f,!0),F&&pe){const Be=()=>{f.subTree=$o(f),pe(F,f.subTree,f,v,null)};nt&&Se.__asyncHydrate?Se.__asyncHydrate(F,f,Be):Be()}else{Ve.ce&&Ve.ce._injectChildStyle(Se);const Be=f.subTree=$o(f);E(null,Be,_,b,f,v,w),p.el=Be.el}if(le&&Ge(le,v),!nt&&(N=B&&B.onVnodeMounted)){const Be=p;Ge(()=>gt(N,te,Be),v)}(p.shapeFlag&256||te&&Ys(te.vnode)&&te.vnode.shapeFlag&256)&&f.a&&Ge(f.a,v),f.isMounted=!0,p=_=b=null}};f.scope.on();const T=f.effect=new gd(S);f.scope.off();const I=f.update=T.run.bind(T),U=f.job=T.runIfDirty.bind(T);U.i=f,U.id=f.uid,T.scheduler=()=>cl(U),In(f,!0),I()},se=(f,p,_)=>{p.component=f;const b=f.vnode.props;f.vnode=p,f.next=null,Sm(f,p.props,b,_),Om(f,p.children,_),_n(),Sc(f),mn()},J=(f,p,_,b,v,w,R,S,T=!1)=>{const I=f&&f.children,U=f?f.shapeFlag:0,N=p.children,{patchFlag:F,shapeFlag:B}=p;if(F>0){if(F&128){zt(I,N,_,b,v,w,R,S,T);return}else if(F&256){Tt(I,N,_,b,v,w,R,S,T);return}}B&8?(U&16&&Ze(I,v,w),N!==I&&u(_,N)):U&16?B&16?zt(I,N,_,b,v,w,R,S,T):Ze(I,v,w,!0):(U&8&&u(_,""),B&16&&Qe(N,_,b,v,w,R,S,T))},Tt=(f,p,_,b,v,w,R,S,T)=>{f=f||Zn,p=p||Zn;const I=f.length,U=p.length,N=Math.min(I,U);let F;for(F=0;F<N;F++){const B=p[F]=T?Zt(p[F]):mt(p[F]);E(f[F],B,_,null,v,w,R,S,T)}I>U?Ze(f,v,w,!0,!1,N):Qe(p,_,b,v,w,R,S,T,N)},zt=(f,p,_,b,v,w,R,S,T)=>{let I=0;const U=p.length;let N=f.length-1,F=U-1;for(;I<=N&&I<=F;){const B=f[I],Y=p[I]=T?Zt(p[I]):mt(p[I]);if(Ms(B,Y))E(B,Y,_,null,v,w,R,S,T);else break;I++}for(;I<=N&&I<=F;){const B=f[N],Y=p[F]=T?Zt(p[F]):mt(p[F]);if(Ms(B,Y))E(B,Y,_,null,v,w,R,S,T);else break;N--,F--}if(I>N){if(I<=F){const B=F+1,Y=B<U?p[B].el:b;for(;I<=F;)E(null,p[I]=T?Zt(p[I]):mt(p[I]),_,Y,v,w,R,S,T),I++}}else if(I>F)for(;I<=N;)Fe(f[I],v,w,!0),I++;else{const B=I,Y=I,le=new Map;for(I=Y;I<=F;I++){const je=p[I]=T?Zt(p[I]):mt(p[I]);je.key!=null&&le.set(je.key,I)}let te,Ve=0;const Se=F-Y+1;let nt=!1,Be=0;const xs=new Array(Se);for(I=0;I<Se;I++)xs[I]=0;for(I=B;I<=N;I++){const je=f[I];if(Ve>=Se){Fe(je,v,w,!0);continue}let pt;if(je.key!=null)pt=le.get(je.key);else for(te=Y;te<=F;te++)if(xs[te-Y]===0&&Ms(je,p[te])){pt=te;break}pt===void 0?Fe(je,v,w,!0):(xs[pt-Y]=I+1,pt>=Be?Be=pt:nt=!0,E(je,p[pt],_,null,v,w,R,S,T),Ve++)}const Ec=nt?Dm(xs):Zn;for(te=Ec.length-1,I=Se-1;I>=0;I--){const je=Y+I,pt=p[je],bc=je+1<U?p[je+1].el:b;xs[I]===0?E(null,pt,_,bc,v,w,R,S,T):nt&&(te<0||I!==Ec[te]?ft(pt,_,bc,2):te--)}}},ft=(f,p,_,b,v=null)=>{const{el:w,type:R,transition:S,children:T,shapeFlag:I}=f;if(I&6){ft(f.component.subTree,p,_,b);return}if(I&128){f.suspense.move(p,_,b);return}if(I&64){R.move(f,p,_,L);return}if(R===st){s(w,p,_);for(let N=0;N<T.length;N++)ft(T[N],p,_,b);s(f.anchor,p,_);return}if(R===sr){M(f,p,_);return}if(b!==2&&I&1&&S)if(b===0)S.beforeEnter(w),s(w,p,_),Ge(()=>S.enter(w),v);else{const{leave:N,delayLeave:F,afterLeave:B}=S,Y=()=>s(w,p,_),le=()=>{N(w,()=>{Y(),B&&B()})};F?F(w,Y,le):le()}else s(w,p,_)},Fe=(f,p,_,b=!1,v=!1)=>{const{type:w,props:R,ref:S,children:T,dynamicChildren:I,shapeFlag:U,patchFlag:N,dirs:F,cacheIndex:B}=f;if(N===-2&&(v=!1),S!=null&&da(S,null,_,f,!0),B!=null&&(p.renderCache[B]=void 0),U&256){p.ctx.deactivate(f);return}const Y=U&1&&F,le=!Ys(f);let te;if(le&&(te=R&&R.onVnodeBeforeUnmount)&&gt(te,p,f),U&6)ji(f.component,_,b);else{if(U&128){f.suspense.unmount(_,b);return}Y&&wn(f,null,p,"beforeUnmount"),U&64?f.type.remove(f,p,_,L,b):I&&!I.hasOnce&&(w!==st||N>0&&N&64)?Ze(I,p,_,!1,!0):(w===st&&N&384||!v&&U&16)&&Ze(T,p,_),b&&jn(f)}(le&&(te=R&&R.onVnodeUnmounted)||Y)&&Ge(()=>{te&&gt(te,p,f),Y&&wn(f,null,p,"unmounted")},_)},jn=f=>{const{type:p,el:_,anchor:b,transition:v}=f;if(p===st){Gn(_,b);return}if(p===sr){x(f);return}const w=()=>{i(_),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:R,delayLeave:S}=v,T=()=>R(_,w);S?S(f.el,w,T):T()}else w()},Gn=(f,p)=>{let _;for(;f!==p;)_=d(f),i(f),f=_;i(p)},ji=(f,p,_)=>{const{bum:b,scope:v,job:w,subTree:R,um:S,m:T,a:I}=f;xc(T),xc(I),b&&tr(b),v.stop(),w&&(w.flags|=8,Fe(R,f,p,_)),S&&Ge(S,p),Ge(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Ze=(f,p,_,b=!1,v=!1,w=0)=>{for(let R=w;R<f.length;R++)Fe(f[R],p,_,b,v)},y=f=>{if(f.shapeFlag&6)return y(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const p=d(f.anchor||f.el),_=p&&p[em];return _?d(_):p};let D=!1;const A=(f,p,_)=>{f==null?p._vnode&&Fe(p._vnode,null,null,!0):E(p._vnode||null,f,p,null,null,null,_),p._vnode=f,D||(D=!0,Sc(),$d(),D=!1)},L={p:E,um:Fe,m:ft,r:jn,mt:ks,mc:Qe,pc:J,pbc:Xe,n:y,o:t};let ee,pe;return{render:A,hydrate:ee,createApp:Cm(A,ee)}}function Lo({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function In({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function xm(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function tf(t,e,n=!1){const s=t.children,i=e.children;if(W(s)&&W(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Zt(i[r]),a.el=o.el),!n&&a.patchFlag!==-2&&tf(o,a)),a.type===no&&(a.el=o.el)}}function Dm(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function nf(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:nf(e)}function xc(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Mm=Symbol.for("v-scx"),Lm=()=>Mt(Mm);function Js(t,e,n){return sf(t,e,n)}function sf(t,e,n=re){const{immediate:s,deep:i,flush:r,once:o}=n,a=Te({},n),l=e&&s||!e&&r!=="post";let c;if(hi){if(r==="sync"){const g=Lm();c=g.__watcherHandles||(g.__watcherHandles=[])}else if(!l){const g=()=>{};return g.stop=yt,g.resume=yt,g.pause=yt,g}}const u=Oe;a.call=(g,m,E)=>It(g,u,m,E);let h=!1;r==="post"?a.scheduler=g=>{Ge(g,u&&u.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(g,m)=>{m?g():cl(g)}),a.augmentJob=g=>{e&&(g.flags|=4),h&&(g.flags|=2,u&&(g.id=u.uid,g.i=u))};const d=Q_(t,e,a);return hi&&(c?c.push(d):l&&d()),d}function $m(t,e,n){const s=this.proxy,i=ve(t)?t.includes(".")?rf(s,t):()=>s[t]:t.bind(s,s);let r;j(e)?r=e:(r=e.handler,n=e);const o=Oi(this),a=sf(i,r.bind(s),n);return o(),a}function rf(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const Fm=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${tt(e)}Modifiers`]||t[`${Wn(e)}Modifiers`];function Um(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||re;let i=n;const r=e.startsWith("update:"),o=r&&Fm(s,e.slice(7));o&&(o.trim&&(i=n.map(u=>ve(u)?u.trim():u)),o.number&&(i=n.map(oa)));let a,l=s[a=Po(e)]||s[a=Po(tt(e))];!l&&r&&(l=s[a=Po(Wn(e))]),l&&It(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,It(c,t,6,i)}}function of(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!j(t)){const l=c=>{const u=of(c,e,!0);u&&(a=!0,Te(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(he(t)&&s.set(t,null),null):(W(r)?r.forEach(l=>o[l]=null):Te(o,r),he(t)&&s.set(t,o),o)}function to(t,e){return!t||!Gr(e)?!1:(e=e.slice(2).replace(/Once$/,""),Z(t,e[0].toLowerCase()+e.slice(1))||Z(t,Wn(e))||Z(t,e))}function $o(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:d,setupState:g,ctx:m,inheritAttrs:E}=t,O=fr(t);let k,P;try{if(n.shapeFlag&4){const x=i||s,z=x;k=mt(c.call(z,x,u,h,g,d,m)),P=a}else{const x=e;k=mt(x.length>1?x(h,{attrs:a,slots:o,emit:l}):x(h,null)),P=e.props?a:Hm(a)}}catch(x){Xs.length=0,Zr(x,t,1),k=me(Dn)}let M=k;if(P&&E!==!1){const x=Object.keys(P),{shapeFlag:z}=M;x.length&&z&7&&(r&&x.some(Xa)&&(P=Wm(P,r)),M=hs(M,P,!1,!0))}return n.dirs&&(M=hs(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&ul(M,n.transition),k=M,fr(O),k}const Hm=t=>{let e;for(const n in t)(n==="class"||n==="style"||Gr(n))&&((e||(e={}))[n]=t[n]);return e},Wm=(t,e)=>{const n={};for(const s in t)(!Xa(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Vm(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Dc(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!to(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Dc(s,o,c):!0:!!o;return!1}function Dc(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!to(n,r))return!0}return!1}function Bm({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const af=t=>t.__isSuspense;function jm(t,e){e&&e.pendingBranch?W(t)?e.effects.push(...t):e.effects.push(t):Z_(t)}const st=Symbol.for("v-fgt"),no=Symbol.for("v-txt"),Dn=Symbol.for("v-cmt"),sr=Symbol.for("v-stc"),Xs=[];let Ye=null;function xe(t=!1){Xs.push(Ye=t?null:[])}function Gm(){Xs.pop(),Ye=Xs[Xs.length-1]||null}let ui=1;function Mc(t){ui+=t,t<0&&Ye&&(Ye.hasOnce=!0)}function lf(t){return t.dynamicChildren=ui>0?Ye||Zn:null,Gm(),ui>0&&Ye&&Ye.push(t),t}function qe(t,e,n,s,i,r){return lf($(t,e,n,s,i,r,!0))}function cf(t,e,n,s,i){return lf(me(t,e,n,s,i,!0))}function gr(t){return t?t.__v_isVNode===!0:!1}function Ms(t,e){return t.type===e.type&&t.key===e.key}const uf=({key:t})=>t??null,ir=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ve(t)||Ne(t)||j(t)?{i:ze,r:t,k:e,f:!!n}:t:null);function $(t,e=null,n=null,s=0,i=null,r=t===st?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&uf(e),ref:e&&ir(e),scopeId:Ud,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:ze};return a?(pl(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=ve(n)?8:16),ui>0&&!o&&Ye&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Ye.push(l),l}const me=Km;function Km(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===pm)&&(t=Dn),gr(t)){const a=hs(t,e,!0);return n&&pl(a,n),ui>0&&!r&&Ye&&(a.shapeFlag&6?Ye[Ye.indexOf(t)]=a:Ye.push(a)),a.patchFlag=-2,a}if(iv(t)&&(t=t.__vccOpts),e){e=qm(e);let{class:a,style:l}=e;a&&!ve(a)&&(e.class=kn(a)),he(l)&&(ll(l)&&!W(l)&&(l=Te({},l)),e.style=tl(l))}const o=ve(t)?1:af(t)?128:tm(t)?64:he(t)?4:j(t)?2:0;return $(t,e,n,s,i,o,r,!0)}function qm(t){return t?ll(t)||zd(t)?Te({},t):t:null}function hs(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:a,transition:l}=t,c=e?Ym(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&uf(c),ref:e&&e.ref?n&&r?W(r)?r.concat(ir(e)):[r,ir(e)]:ir(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==st?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&hs(t.ssContent),ssFallback:t.ssFallback&&hs(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&s&&ul(u,l.clone(u)),u}function Xt(t=" ",e=0){return me(no,null,t,e)}function zm(t,e){const n=me(sr,null,t);return n.staticCount=e,n}function ma(t="",e=!1){return e?(xe(),cf(Dn,null,t)):me(Dn,null,t)}function mt(t){return t==null||typeof t=="boolean"?me(Dn):W(t)?me(st,null,t.slice()):gr(t)?Zt(t):me(no,null,String(t))}function Zt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:hs(t)}function pl(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(W(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),pl(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!zd(e)?e._ctx=ze:i===3&&ze&&(ze.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else j(e)?(e={default:e,_ctx:ze},n=32):(e=String(e),s&64?(n=16,e=[Xt(e)]):n=8);t.children=e,t.shapeFlag|=n}function Ym(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=kn([e.class,s.class]));else if(i==="style")e.style=tl([e.style,s.style]);else if(Gr(i)){const r=e[i],o=s[i];o&&r!==o&&!(W(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function gt(t,e,n,s=null){It(t,e,7,[n,s])}const Qm=Gd();let Jm=0;function Xm(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Qm,r={uid:Jm++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new pd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Qd(s,i),emitsOptions:of(s,i),emit:null,emitted:null,propsDefaults:re,inheritAttrs:s.inheritAttrs,ctx:re,data:re,props:re,attrs:re,slots:re,refs:re,setupState:re,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Um.bind(null,r),t.ce&&t.ce(r),r}let Oe=null,_r,va;{const t=Yr(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};_r=e("__VUE_INSTANCE_SETTERS__",n=>Oe=n),va=e("__VUE_SSR_SETTERS__",n=>hi=n)}const Oi=t=>{const e=Oe;return _r(t),t.scope.on(),()=>{t.scope.off(),_r(e)}},Lc=()=>{Oe&&Oe.scope.off(),_r(null)};function hf(t){return t.vnode.shapeFlag&4}let hi=!1;function Zm(t,e=!1,n=!1){e&&va(e);const{props:s,children:i}=t.vnode,r=hf(t);Tm(t,s,r,e),Pm(t,i,n);const o=r?ev(t,e):void 0;return e&&va(!1),o}function ev(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,mm);const{setup:s}=n;if(s){_n();const i=t.setupContext=s.length>1?nv(t):null,r=Oi(t),o=Ai(s,t,0,[t.props,i]),a=rd(o);if(mn(),r(),(a||t.sp)&&!Ys(t)&&Hd(t),a){if(o.then(Lc,Lc),e)return o.then(l=>{$c(t,l,e)}).catch(l=>{Zr(l,t,0)});t.asyncDep=o}else $c(t,o,e)}else df(t,e)}function $c(t,e,n){j(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:he(e)&&(t.setupState=xd(e)),df(t,n)}let Fc;function df(t,e,n){const s=t.type;if(!t.render){if(!e&&Fc&&!s.render){const i=s.template||dl(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Te(Te({isCustomElement:r,delimiters:a},o),l);s.render=Fc(i,c)}}t.render=s.render||yt}{const i=Oi(t);_n();try{vm(t)}finally{mn(),i()}}}const tv={get(t,e){return Re(t,"get",""),t[e]}};function nv(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,tv),slots:t.slots,emit:t.emit,expose:e}}function so(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(xd(Nd(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Qs)return Qs[n](t)},has(e,n){return n in e||n in Qs}})):t.proxy}function sv(t,e=!0){return j(t)?t.displayName||t.name:t.name||e&&t.__name}function iv(t){return j(t)&&"__vccOpts"in t}const it=(t,e)=>z_(t,e,hi);function ff(t,e,n){const s=arguments.length;return s===2?he(e)&&!W(e)?gr(e)?me(t,null,[e]):me(t,e):me(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&gr(n)&&(n=[n]),me(t,e,n))}const rv="3.5.12";/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ya;const Uc=typeof window<"u"&&window.trustedTypes;if(Uc)try{ya=Uc.createPolicy("vue",{createHTML:t=>t})}catch{}const pf=ya?t=>ya.createHTML(t):t=>t,ov="http://www.w3.org/2000/svg",av="http://www.w3.org/1998/Math/MathML",At=typeof document<"u"?document:null,Hc=At&&At.createElement("template"),lv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?At.createElementNS(ov,t):e==="mathml"?At.createElementNS(av,t):n?At.createElement(t,{is:n}):At.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>At.createTextNode(t),createComment:t=>At.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>At.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Hc.innerHTML=pf(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const a=Hc.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},cv=Symbol("_vtc");function uv(t,e,n){const s=t[cv];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Wc=Symbol("_vod"),hv=Symbol("_vsh"),dv=Symbol(""),fv=/(^|;)\s*display\s*:/;function pv(t,e,n){const s=t.style,i=ve(n);let r=!1;if(n&&!i){if(e)if(ve(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&rr(s,a,"")}else for(const o in e)n[o]==null&&rr(s,o,"");for(const o in n)o==="display"&&(r=!0),rr(s,o,n[o])}else if(i){if(e!==n){const o=s[dv];o&&(n+=";"+o),s.cssText=n,r=fv.test(n)}}else e&&t.removeAttribute("style");Wc in t&&(t[Wc]=r?s.display:"",t[hv]&&(s.display="none"))}const Vc=/\s*!important$/;function rr(t,e,n){if(W(n))n.forEach(s=>rr(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=gv(t,e);Vc.test(n)?t.setProperty(Wn(s),n.replace(Vc,""),"important"):t[s]=n}}const Bc=["Webkit","Moz","ms"],Fo={};function gv(t,e){const n=Fo[e];if(n)return n;let s=tt(e);if(s!=="filter"&&s in t)return Fo[e]=s;s=zr(s);for(let i=0;i<Bc.length;i++){const r=Bc[i]+s;if(r in t)return Fo[e]=r}return e}const jc="http://www.w3.org/1999/xlink";function Gc(t,e,n,s,i,r=w_(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(jc,e.slice(6,e.length)):t.setAttributeNS(jc,e,n):n==null||r&&!cd(n)?t.removeAttribute(e):t.setAttribute(e,r?"":wt(n)?String(n):n)}function Kc(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?pf(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=cd(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function An(t,e,n,s){t.addEventListener(e,n,s)}function _v(t,e,n,s){t.removeEventListener(e,n,s)}const qc=Symbol("_vei");function mv(t,e,n,s,i=null){const r=t[qc]||(t[qc]={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=vv(e);if(s){const c=r[e]=bv(s,i);An(t,a,c,l)}else o&&(_v(t,a,o,l),r[e]=void 0)}}const zc=/(?:Once|Passive|Capture)$/;function vv(t){let e;if(zc.test(t)){e={};let s;for(;s=t.match(zc);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Wn(t.slice(2)),e]}let Uo=0;const yv=Promise.resolve(),Ev=()=>Uo||(yv.then(()=>Uo=0),Uo=Date.now());function bv(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;It(wv(s,n.value),e,5,[s])};return n.value=t,n.attached=Ev(),n}function wv(t,e){if(W(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Yc=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Iv=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?uv(t,s,o):e==="style"?pv(t,n,s):Gr(e)?Xa(e)||mv(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Cv(t,e,s,o))?(Kc(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Gc(t,e,s,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ve(s))?Kc(t,tt(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Gc(t,e,s,o))};function Cv(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Yc(e)&&j(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Yc(e)&&ve(n)?!1:e in t}const mr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return W(e)?n=>tr(e,n):e};function Tv(t){t.target.composing=!0}function Qc(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const rs=Symbol("_assign"),Jc={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[rs]=mr(i);const r=s||i.props&&i.props.type==="number";An(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=oa(a)),t[rs](a)}),n&&An(t,"change",()=>{t.value=t.value.trim()}),e||(An(t,"compositionstart",Tv),An(t,"compositionend",Qc),An(t,"change",Qc))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[rs]=mr(o),t.composing)return;const a=(r||t.type==="number")&&!/^0\d/.test(t.value)?oa(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===l)||(t.value=l))}},Sv={deep:!0,created(t,e,n){t[rs]=mr(n),An(t,"change",()=>{const s=t._modelValue,i=Rv(t),r=t.checked,o=t[rs];if(W(s)){const a=ud(s,i),l=a!==-1;if(r&&!l)o(s.concat(i));else if(!r&&l){const c=[...s];c.splice(a,1),o(c)}}else if(Kr(s)){const a=new Set(s);r?a.add(i):a.delete(i),o(a)}else o(gf(t,r))})},mounted:Xc,beforeUpdate(t,e,n){t[rs]=mr(n),Xc(t,e,n)}};function Xc(t,{value:e,oldValue:n},s){t._modelValue=e;let i;if(W(e))i=ud(e,s.props.value)>-1;else if(Kr(e))i=e.has(s.props.value);else{if(e===n)return;i=Qr(e,gf(t,!0))}t.checked!==i&&(t.checked=i)}function Rv(t){return"_value"in t?t._value:t.value}function gf(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Av=["ctrl","shift","alt","meta"],Pv={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Av.some(n=>t[`${n}Key`]&&!e.includes(n))},Ls=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(i,...r)=>{for(let o=0;o<e.length;o++){const a=Pv[e[o]];if(a&&a(i,e))return}return t(i,...r)})},Ov=Te({patchProp:Iv},lv);let Zc;function Nv(){return Zc||(Zc=Nm(Ov))}const kv=(...t)=>{const e=Nv().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Dv(s);if(!i)return;const r=e._component;!j(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,xv(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function xv(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Dv(t){return ve(t)?document.querySelector(t):t}var Mv=!1;/*!
 * pinia v2.2.4
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */const Lv=Symbol();var eu;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(eu||(eu={}));function $v(){const t=C_(!0),e=t.run(()=>an({}));let n=[],s=[];const i=Nd({install(r){i._a=r,r.provide(Lv,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!Mv?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}var tu={};/**
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
 */const _f={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const C=function(t,e){if(!t)throw ys(e)},ys=function(t){return new Error("Firebase Database ("+_f.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const mf=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Fv=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},gl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(d=64)),s.push(n[u],n[h],n[d],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(mf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Fv(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new Uv;const d=r<<2|a>>4;if(s.push(d),c!==64){const g=a<<4&240|c>>2;if(s.push(g),h!==64){const m=c<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Uv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const vf=function(t){const e=mf(t);return gl.encodeByteArray(e,!0)},vr=function(t){return vf(t).replace(/\./g,"")},yr=function(t){try{return gl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Hv(t){return yf(void 0,t)}function yf(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Wv(n)||(t[n]=yf(t[n],e[n]));return t}function Wv(t){return t!=="__proto__"}/**
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
 */function Vv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Bv=()=>Vv().__FIREBASE_DEFAULTS__,jv=()=>{if(typeof process>"u"||typeof tu>"u")return;const t=tu.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Gv=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&yr(t[1]);return e&&JSON.parse(e)},_l=()=>{try{return Bv()||jv()||Gv()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ef=t=>{var e,n;return(n=(e=_l())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Kv=t=>{const e=Ef(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},bf=()=>{var t;return(t=_l())===null||t===void 0?void 0:t.config},wf=t=>{var e;return(e=_l())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class io{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function qv(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[vr(JSON.stringify(n)),vr(JSON.stringify(o)),""].join(".")}/**
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
 */function Le(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ml(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Le())}function zv(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Yv(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function If(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Qv(){const t=Le();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Cf(){return _f.NODE_ADMIN===!0}function Jv(){try{return typeof indexedDB=="object"}catch{return!1}}function Xv(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const Zv="FirebaseError";class vn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Zv,Object.setPrototypeOf(this,vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ni.prototype.create)}}class Ni{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?ey(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new vn(i,a,s)}}function ey(t,e){return t.replace(ty,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const ty=/\{\$([^}]+)}/g;/**
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
 */function di(t){return JSON.parse(t)}function ye(t){return JSON.stringify(t)}/**
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
 */const Tf=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=di(yr(r[0])||""),n=di(yr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},ny=function(t){const e=Tf(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},sy=function(t){const e=Tf(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Vt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ds(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ea(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Er(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function br(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(nu(r)&&nu(o)){if(!br(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function nu(t){return t!==null&&typeof t=="object"}/**
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
 */function Es(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function js(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function Gs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class iy{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function ry(t,e){const n=new oy(t,e);return n.subscribe.bind(n)}class oy{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");ay(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Ho),i.error===void 0&&(i.error=Ho),i.complete===void 0&&(i.complete=Ho);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ay(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ho(){}function vl(t,e){return`${t} failed: ${e} argument `}/**
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
 */const ly=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,C(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ro=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function $e(t){return t&&t._delegate?t._delegate:t}class Mn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Tn="[DEFAULT]";/**
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
 */class cy{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new io;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(hy(e))try{this.getOrInitializeService({instanceIdentifier:Tn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Tn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Tn){return this.instances.has(e)}getOptions(e=Tn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:uy(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Tn){return this.component?this.component.multipleInstances?e:Tn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function uy(t){return t===Tn?void 0:t}function hy(t){return t.instantiationMode==="EAGER"}/**
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
 */class dy{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new cy(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const fy={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},py=ie.INFO,gy={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},_y=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=gy[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class yl{constructor(e){this.name=e,this._logLevel=py,this._logHandler=_y,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?fy[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const my=(t,e)=>e.some(n=>t instanceof n);let su,iu;function vy(){return su||(su=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yy(){return iu||(iu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Sf=new WeakMap,ba=new WeakMap,Rf=new WeakMap,Wo=new WeakMap,El=new WeakMap;function Ey(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(ln(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Sf.set(n,t)}).catch(()=>{}),El.set(e,t),e}function by(t){if(ba.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});ba.set(t,e)}let wa={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ba.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Rf.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ln(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function wy(t){wa=t(wa)}function Iy(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Vo(this),e,...n);return Rf.set(s,e.sort?e.sort():[e]),ln(s)}:yy().includes(t)?function(...e){return t.apply(Vo(this),e),ln(Sf.get(this))}:function(...e){return ln(t.apply(Vo(this),e))}}function Cy(t){return typeof t=="function"?Iy(t):(t instanceof IDBTransaction&&by(t),my(t,vy())?new Proxy(t,wa):t)}function ln(t){if(t instanceof IDBRequest)return Ey(t);if(Wo.has(t))return Wo.get(t);const e=Cy(t);return e!==t&&(Wo.set(t,e),El.set(e,t)),e}const Vo=t=>El.get(t);function Ty(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=ln(o);return s&&o.addEventListener("upgradeneeded",l=>{s(ln(o.result),l.oldVersion,l.newVersion,ln(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Sy=["get","getKey","getAll","getAllKeys","count"],Ry=["put","add","delete","clear"],Bo=new Map;function ru(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Bo.get(e))return Bo.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Ry.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Sy.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Bo.set(e,r),r}wy(t=>({...t,get:(e,n,s)=>ru(e,n)||t.get(e,n,s),has:(e,n)=>!!ru(e,n)||t.has(e,n)}));/**
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
 */class Ay{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Py(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Py(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ia="@firebase/app",ou="0.10.15";/**
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
 */const Ft=new yl("@firebase/app"),Oy="@firebase/app-compat",Ny="@firebase/analytics-compat",ky="@firebase/analytics",xy="@firebase/app-check-compat",Dy="@firebase/app-check",My="@firebase/auth",Ly="@firebase/auth-compat",$y="@firebase/database",Fy="@firebase/data-connect",Uy="@firebase/database-compat",Hy="@firebase/functions",Wy="@firebase/functions-compat",Vy="@firebase/installations",By="@firebase/installations-compat",jy="@firebase/messaging",Gy="@firebase/messaging-compat",Ky="@firebase/performance",qy="@firebase/performance-compat",zy="@firebase/remote-config",Yy="@firebase/remote-config-compat",Qy="@firebase/storage",Jy="@firebase/storage-compat",Xy="@firebase/firestore",Zy="@firebase/vertexai",eE="@firebase/firestore-compat",tE="firebase",nE="11.0.1";/**
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
 */const Ca="[DEFAULT]",sE={[Ia]:"fire-core",[Oy]:"fire-core-compat",[ky]:"fire-analytics",[Ny]:"fire-analytics-compat",[Dy]:"fire-app-check",[xy]:"fire-app-check-compat",[My]:"fire-auth",[Ly]:"fire-auth-compat",[$y]:"fire-rtdb",[Fy]:"fire-data-connect",[Uy]:"fire-rtdb-compat",[Hy]:"fire-fn",[Wy]:"fire-fn-compat",[Vy]:"fire-iid",[By]:"fire-iid-compat",[jy]:"fire-fcm",[Gy]:"fire-fcm-compat",[Ky]:"fire-perf",[qy]:"fire-perf-compat",[zy]:"fire-rc",[Yy]:"fire-rc-compat",[Qy]:"fire-gcs",[Jy]:"fire-gcs-compat",[Xy]:"fire-fst",[eE]:"fire-fst-compat",[Zy]:"fire-vertex","fire-js":"fire-js",[tE]:"fire-js-all"};/**
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
 */const wr=new Map,iE=new Map,Ta=new Map;function au(t,e){try{t.container.addComponent(e)}catch(n){Ft.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function fs(t){const e=t.name;if(Ta.has(e))return Ft.debug(`There were multiple attempts to register component ${e}.`),!1;Ta.set(e,t);for(const n of wr.values())au(n,t);for(const n of iE.values())au(n,t);return!0}function bl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function vt(t){return t.settings!==void 0}/**
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
 */const rE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},cn=new Ni("app","Firebase",rE);/**
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
 */class oE{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Mn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw cn.create("app-deleted",{appName:this._name})}}/**
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
 */const bs=nE;function Af(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Ca,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw cn.create("bad-app-name",{appName:String(i)});if(n||(n=bf()),!n)throw cn.create("no-options");const r=wr.get(i);if(r){if(br(n,r.options)&&br(s,r.config))return r;throw cn.create("duplicate-app",{appName:i})}const o=new dy(i);for(const l of Ta.values())o.addComponent(l);const a=new oE(n,s,o);return wr.set(i,a),a}function Pf(t=Ca){const e=wr.get(t);if(!e&&t===Ca&&bf())return Af();if(!e)throw cn.create("no-app",{appName:t});return e}function un(t,e,n){var s;let i=(s=sE[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ft.warn(a.join(" "));return}fs(new Mn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const aE="firebase-heartbeat-database",lE=1,fi="firebase-heartbeat-store";let jo=null;function Of(){return jo||(jo=Ty(aE,lE,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(fi)}catch(n){console.warn(n)}}}}).catch(t=>{throw cn.create("idb-open",{originalErrorMessage:t.message})})),jo}async function cE(t){try{const n=(await Of()).transaction(fi),s=await n.objectStore(fi).get(Nf(t));return await n.done,s}catch(e){if(e instanceof vn)Ft.warn(e.message);else{const n=cn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ft.warn(n.message)}}}async function lu(t,e){try{const s=(await Of()).transaction(fi,"readwrite");await s.objectStore(fi).put(e,Nf(t)),await s.done}catch(n){if(n instanceof vn)Ft.warn(n.message);else{const s=cn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ft.warn(s.message)}}}function Nf(t){return`${t.name}!${t.options.appId}`}/**
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
 */const uE=1024,hE=30*24*60*60*1e3;class dE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new pE(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=cu();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=hE}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Ft.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=cu(),{heartbeatsToSend:s,unsentEntries:i}=fE(this._heartbeatsCache.heartbeats),r=vr(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return Ft.warn(n),""}}}function cu(){return new Date().toISOString().substring(0,10)}function fE(t,e=uE){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),uu(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),uu(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class pE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Jv()?Xv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await cE(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return lu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return lu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function uu(t){return vr(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function gE(t){fs(new Mn("platform-logger",e=>new Ay(e),"PRIVATE")),fs(new Mn("heartbeat",e=>new dE(e),"PRIVATE")),un(Ia,ou,t),un(Ia,ou,"esm2017"),un("fire-js","")}gE("");var hu={};const du="@firebase/database",fu="1.0.9";/**
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
 */let kf="";function _E(t){kf=t}/**
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
 */class mE{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ye(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:di(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class vE{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Vt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const xf=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new mE(e)}}catch{}return new vE},Pn=xf("localStorage"),yE=xf("sessionStorage");/**
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
 */const os=new yl("@firebase/database"),EE=function(){let t=1;return function(){return t++}}(),Df=function(t){const e=ly(t),n=new iy;n.update(e);const s=n.digest();return gl.encodeByteArray(s)},ki=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=ki.apply(null,s):typeof s=="object"?e+=ye(s):e+=s,e+=" "}return e};let Zs=null,pu=!0;const bE=function(t,e){C(!e,"Can't turn on custom loggers persistently."),os.logLevel=ie.VERBOSE,Zs=os.log.bind(os)},Pe=function(...t){if(pu===!0&&(pu=!1,Zs===null&&yE.get("logging_enabled")===!0&&bE()),Zs){const e=ki.apply(null,t);Zs(e)}},xi=function(t){return function(...e){Pe(t,...e)}},Sa=function(...t){const e="FIREBASE INTERNAL ERROR: "+ki(...t);os.error(e)},Ut=function(...t){const e=`FIREBASE FATAL ERROR: ${ki(...t)}`;throw os.error(e),new Error(e)},He=function(...t){const e="FIREBASE WARNING: "+ki(...t);os.warn(e)},wE=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&He("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Mf=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},IE=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ps="[MIN_NAME]",Ln="[MAX_NAME]",ws=function(t,e){if(t===e)return 0;if(t===ps||e===Ln)return-1;if(e===ps||t===Ln)return 1;{const n=gu(t),s=gu(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},CE=function(t,e){return t===e?0:t<e?-1:1},$s=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ye(e))},wl=function(t){if(typeof t!="object"||t===null)return ye(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=ye(e[s]),n+=":",n+=wl(t[e[s]]);return n+="}",n},Lf=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function We(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const $f=function(t){C(!Mf(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},TE=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},SE=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function RE(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const AE=new RegExp("^-?(0*)\\d{1,10}$"),PE=-2147483648,OE=2147483647,gu=function(t){if(AE.test(t)){const e=Number(t);if(e>=PE&&e<=OE)return e}return null},Is=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw He("Exception was thrown by user callback.",n),e},Math.floor(0))}},NE=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ei=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class kE{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){He(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class xE{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Pe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',He(e)}}class or{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}or.OWNER="owner";/**
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
 */const Il="5",Ff="v",Uf="s",Hf="r",Wf="f",Vf=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Bf="ls",jf="p",Ra="ac",Gf="websocket",Kf="long_polling";/**
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
 */class qf{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Pn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Pn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function DE(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function zf(t,e,n){C(typeof e=="string","typeof type must == string"),C(typeof n=="object","typeof params must == object");let s;if(e===Gf)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Kf)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);DE(t)&&(n.ns=t.namespace);const i=[];return We(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class ME{constructor(){this.counters_={}}incrementCounter(e,n=1){Vt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Hv(this.counters_)}}/**
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
 */const Go={},Ko={};function Cl(t){const e=t.toString();return Go[e]||(Go[e]=new ME),Go[e]}function LE(t,e){const n=t.toString();return Ko[n]||(Ko[n]=e()),Ko[n]}/**
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
 */class $E{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Is(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const _u="start",FE="close",UE="pLPCommand",HE="pRTLPCB",Yf="id",Qf="pw",Jf="ser",WE="cb",VE="seg",BE="ts",jE="d",GE="dframe",Xf=1870,Zf=30,KE=Xf-Zf,qE=25e3,zE=3e4;class Jn{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=xi(e),this.stats_=Cl(n),this.urlFn=l=>(this.appCheckToken&&(l[Ra]=this.appCheckToken),zf(n,Kf,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new $E(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(zE)),IE(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Tl((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===_u)this.id=a,this.password=l;else if(o===FE)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[_u]="t",s[Jf]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[WE]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Ff]=Il,this.transportSessionId&&(s[Uf]=this.transportSessionId),this.lastSessionId&&(s[Bf]=this.lastSessionId),this.applicationId&&(s[jf]=this.applicationId),this.appCheckToken&&(s[Ra]=this.appCheckToken),typeof location<"u"&&location.hostname&&Vf.test(location.hostname)&&(s[Hf]=Wf);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Jn.forceAllow_=!0}static forceDisallow(){Jn.forceDisallow_=!0}static isAvailable(){return Jn.forceAllow_?!0:!Jn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!TE()&&!SE()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ye(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=vf(n),i=Lf(s,KE);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[GE]="t",s[Yf]=e,s[Qf]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ye(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Tl{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=EE(),window[UE+this.uniqueCallbackIdentifier]=e,window[HE+this.uniqueCallbackIdentifier]=n,this.myIFrame=Tl.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Pe("frame writing exception"),a.stack&&Pe(a.stack),Pe(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Pe("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Yf]=this.myID,e[Qf]=this.myPW,e[Jf]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Zf+s.length<=Xf;){const o=this.pendingSegs.shift();s=s+"&"+VE+i+"="+o.seg+"&"+BE+i+"="+o.ts+"&"+jE+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(qE)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Pe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const YE=16384,QE=45e3;let Ir=null;typeof MozWebSocket<"u"?Ir=MozWebSocket:typeof WebSocket<"u"&&(Ir=WebSocket);class rt{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=xi(this.connId),this.stats_=Cl(n),this.connURL=rt.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Ff]=Il,typeof location<"u"&&location.hostname&&Vf.test(location.hostname)&&(o[Hf]=Wf),n&&(o[Uf]=n),s&&(o[Bf]=s),i&&(o[Ra]=i),r&&(o[jf]=r),zf(e,Gf,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Pn.set("previous_websocket_failure",!0);try{let s;Cf(),this.mySock=new Ir(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){rt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Ir!==null&&!rt.forceDisallow_}static previouslyFailed(){return Pn.isInMemoryStorage||Pn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Pn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=di(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(C(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=ye(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Lf(n,YE);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(QE))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}rt.responsesRequiredToBeHealthy=2;rt.healthyTimeout=3e4;/**
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
 */class pi{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Jn,rt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=rt&&rt.isAvailable();let s=n&&!rt.previouslyFailed();if(e.webSocketOnly&&(n||He("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[rt];else{const i=this.transports_=[];for(const r of pi.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);pi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}pi.globalTransportInitialized_=!1;/**
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
 */const JE=6e4,XE=5e3,ZE=10*1024,eb=100*1024,qo="t",mu="d",tb="s",vu="r",nb="e",yu="o",Eu="a",bu="n",wu="p",sb="h";class ib{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=xi("c:"+this.id+":"),this.transportManager_=new pi(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ei(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>eb?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>ZE?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(qo in e){const n=e[qo];n===Eu?this.upgradeIfSecondaryHealthy_():n===vu?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===yu&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=$s("t",e),s=$s("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:wu,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Eu,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:bu,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=$s("t",e),s=$s("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=$s(qo,e);if(mu in e){const s=e[mu];if(n===sb){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===bu){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===tb?this.onConnectionShutdown_(s):n===vu?this.onReset_(s):n===nb?Sa("Server Error: "+s):n===yu?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Sa("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Il!==s&&He("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),ei(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(JE))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ei(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(XE))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:wu,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Pn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class ep{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class tp{constructor(e){this.allowedEvents_=e,this.listeners_={},C(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){C(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Cr extends tp{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ml()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Cr}getInitialEvent(e){return C(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Iu=32,Cu=768;class oe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Q(){return new oe("")}function G(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function fn(t){return t.pieces_.length-t.pieceNum_}function ue(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new oe(t.pieces_,e)}function np(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function rb(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function sp(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function ip(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new oe(e,0)}function Ee(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof oe)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new oe(n,0)}function q(t){return t.pieceNum_>=t.pieces_.length}function Me(t,e){const n=G(t),s=G(e);if(n===null)return e;if(n===s)return Me(ue(t),ue(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Sl(t,e){if(fn(t)!==fn(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function ot(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(fn(t)>fn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class ob{constructor(e,n){this.errorPrefix_=n,this.parts_=sp(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=ro(this.parts_[s]);rp(this)}}function ab(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ro(e),rp(t)}function lb(t){const e=t.parts_.pop();t.byteLength_-=ro(e),t.parts_.length>0&&(t.byteLength_-=1)}function rp(t){if(t.byteLength_>Cu)throw new Error(t.errorPrefix_+"has a key path longer than "+Cu+" bytes ("+t.byteLength_+").");if(t.parts_.length>Iu)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Iu+") or object contains a cycle "+Sn(t))}function Sn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Rl extends tp{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Rl}getInitialEvent(e){return C(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Fs=1e3,cb=60*5*1e3,Tu=30*1e3,ub=1.3,hb=3e4,db="server_kill",Su=3;class Lt extends ep{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Lt.nextPersistentConnectionId_++,this.log_=xi("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Fs,this.maxReconnectDelay_=cb,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Cf())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Rl.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Cr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(ye(r)),C(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new io,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),C(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Lt.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Vt(e,"w")){const s=ds(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();He(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||sy(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Tu)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=ny(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ye(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Sa("Unrecognized action received from server: "+ye(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){C(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Fs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Fs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>hb&&(this.reconnectDelay_=Fs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*ub)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Lt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){C(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Pe("getToken() completed but was canceled"):(Pe("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new ib(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,g=>{He(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(db)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&He(h),l())}}}interrupt(e){Pe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Pe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ea(this.interruptReasons_)&&(this.reconnectDelay_=Fs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>wl(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new oe(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Pe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Su&&(this.reconnectDelay_=Tu,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Pe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Su&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+kf.replace(/\./g,"-")]=1,ml()?e["framework.cordova"]=1:If()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Cr.getInstance().currentlyOnline();return Ea(this.interruptReasons_)&&e}}Lt.nextPersistentConnectionId_=0;Lt.nextConnectionId_=0;/**
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
 */class K{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new K(e,n)}}/**
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
 */class oo{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new K(ps,e),i=new K(ps,n);return this.compare(s,i)!==0}minPost(){return K.MIN}}/**
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
 */let Yi;class op extends oo{static get __EMPTY_NODE(){return Yi}static set __EMPTY_NODE(e){Yi=e}compare(e,n){return ws(e.name,n.name)}isDefinedOn(e){throw ys("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return K.MIN}maxPost(){return new K(Ln,Yi)}makePost(e,n){return C(typeof e=="string","KeyIndex indexValue must always be a string."),new K(e,Yi)}toString(){return".key"}}const as=new op;/**
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
 */class Qi{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ie{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Ie.RED,this.left=i??Ue.EMPTY_NODE,this.right=r??Ue.EMPTY_NODE}copy(e,n,s,i,r){return new Ie(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ue.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ue.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ie.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ie.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ie.RED=!0;Ie.BLACK=!1;class fb{copy(e,n,s,i,r){return this}insert(e,n,s){return new Ie(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ue{constructor(e,n=Ue.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ue(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ie.BLACK,null,null))}remove(e){return new Ue(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ie.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Qi(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Qi(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Qi(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Qi(this.root_,null,this.comparator_,!0,e)}}Ue.EMPTY_NODE=new fb;/**
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
 */function pb(t,e){return ws(t.name,e.name)}function Al(t,e){return ws(t,e)}/**
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
 */let Aa;function gb(t){Aa=t}const ap=function(t){return typeof t=="number"?"number:"+$f(t):"string:"+t},lp=function(t){if(t.isLeafNode()){const e=t.val();C(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Vt(e,".sv"),"Priority must be a string or number.")}else C(t===Aa||t.isEmpty(),"priority of unexpected type.");C(t===Aa||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Ru;class we{constructor(e,n=we.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,C(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),lp(this.priorityNode_)}static set __childrenNodeConstructor(e){Ru=e}static get __childrenNodeConstructor(){return Ru}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new we(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:we.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return q(e)?this:G(e)===".priority"?this.priorityNode_:we.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:we.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=G(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(C(s!==".priority"||fn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,we.__childrenNodeConstructor.EMPTY_NODE.updateChild(ue(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ap(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=$f(this.value_):e+=this.value_,this.lazyHash_=Df(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===we.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof we.__childrenNodeConstructor?-1:(C(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=we.VALUE_TYPE_ORDER.indexOf(n),r=we.VALUE_TYPE_ORDER.indexOf(s);return C(i>=0,"Unknown leaf type: "+n),C(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}we.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let cp,up;function _b(t){cp=t}function mb(t){up=t}class vb extends oo{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?ws(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return K.MIN}maxPost(){return new K(Ln,new we("[PRIORITY-POST]",up))}makePost(e,n){const s=cp(e);return new K(n,new we("[PRIORITY-POST]",s))}toString(){return".priority"}}const ge=new vb;/**
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
 */const yb=Math.log(2);class Eb{constructor(e){const n=r=>parseInt(Math.log(r)/yb,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Tr=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new Ie(d,h.node,Ie.BLACK,null,null);{const g=parseInt(u/2,10)+l,m=i(l,g),E=i(g+1,c);return h=t[g],d=n?n(h):h,new Ie(d,h.node,Ie.BLACK,m,E)}},r=function(l){let c=null,u=null,h=t.length;const d=function(m,E){const O=h-m,k=h;h-=m;const P=i(O+1,k),M=t[O],x=n?n(M):M;g(new Ie(x,M.node,E,null,P))},g=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<l.count;++m){const E=l.nextBitIsOne(),O=Math.pow(2,l.count-(m+1));E?d(O,Ie.BLACK):(d(O,Ie.BLACK),d(O,Ie.RED))}return u},o=new Eb(t.length),a=r(o);return new Ue(s||e,a)};/**
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
 */let zo;const qn={};class Nt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return C(qn&&ge,"ChildrenNode.ts has not been loaded"),zo=zo||new Nt({".priority":qn},{".priority":ge}),zo}get(e){const n=ds(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ue?n:null}hasIndex(e){return Vt(this.indexSet_,e.toString())}addIndex(e,n){C(e!==as,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(K.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Tr(s,e.getCompare()):a=qn;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Nt(u,c)}addToIndexes(e,n){const s=Er(this.indexes_,(i,r)=>{const o=ds(this.indexSet_,r);if(C(o,"Missing index implementation for "+r),i===qn)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(K.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Tr(a,o.getCompare())}else return qn;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new K(e.name,a))),l.insert(e,e.node)}});return new Nt(s,this.indexSet_)}removeFromIndexes(e,n){const s=Er(this.indexes_,i=>{if(i===qn)return i;{const r=n.get(e.name);return r?i.remove(new K(e.name,r)):i}});return new Nt(s,this.indexSet_)}}/**
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
 */let Us;class H{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&lp(this.priorityNode_),this.children_.isEmpty()&&C(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Us||(Us=new H(new Ue(Al),null,Nt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Us}updatePriority(e){return this.children_.isEmpty()?this:new H(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Us:n}}getChild(e){const n=G(e);return n===null?this:this.getImmediateChild(n).getChild(ue(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(C(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new K(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Us:this.priorityNode_;return new H(i,o,r)}}updateChild(e,n){const s=G(e);if(s===null)return n;{C(G(e)!==".priority"||fn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ue(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(ge,(o,a)=>{n[o]=a.val(e),s++,r&&H.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+ap(this.getPriority().val())+":"),this.forEachChild(ge,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Df(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new K(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new K(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new K(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,K.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,K.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Di?-1:0}withIndex(e){if(e===as||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new H(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===as||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(ge),i=n.getIterator(ge);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===as?null:this.indexMap_.get(e.toString())}}H.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class bb extends H{constructor(){super(new Ue(Al),H.EMPTY_NODE,Nt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return H.EMPTY_NODE}isEmpty(){return!1}}const Di=new bb;Object.defineProperties(K,{MIN:{value:new K(ps,H.EMPTY_NODE)},MAX:{value:new K(Ln,Di)}});op.__EMPTY_NODE=H.EMPTY_NODE;we.__childrenNodeConstructor=H;gb(Di);mb(Di);/**
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
 */const wb=!0;function Ce(t,e=null){if(t===null)return H.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),C(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new we(n,Ce(e))}if(!(t instanceof Array)&&wb){const n=[];let s=!1;if(We(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ce(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new K(o,l)))}}),n.length===0)return H.EMPTY_NODE;const r=Tr(n,pb,o=>o.name,Al);if(s){const o=Tr(n,ge.getCompare());return new H(r,Ce(e),new Nt({".priority":o},{".priority":ge}))}else return new H(r,Ce(e),Nt.Default)}else{let n=H.EMPTY_NODE;return We(t,(s,i)=>{if(Vt(t,s)&&s.substring(0,1)!=="."){const r=Ce(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Ce(e))}}_b(Ce);/**
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
 */class Ib extends oo{constructor(e){super(),this.indexPath_=e,C(!q(e)&&G(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?ws(e.name,n.name):r}makePost(e,n){const s=Ce(e),i=H.EMPTY_NODE.updateChild(this.indexPath_,s);return new K(n,i)}maxPost(){const e=H.EMPTY_NODE.updateChild(this.indexPath_,Di);return new K(Ln,e)}toString(){return sp(this.indexPath_,0).join("/")}}/**
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
 */class Cb extends oo{compare(e,n){const s=e.node.compareTo(n.node);return s===0?ws(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return K.MIN}maxPost(){return K.MAX}makePost(e,n){const s=Ce(e);return new K(n,s)}toString(){return".value"}}const Tb=new Cb;/**
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
 */function hp(t){return{type:"value",snapshotNode:t}}function gs(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function gi(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function _i(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Sb(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Pl{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){C(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(gi(n,a)):C(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(gs(n,s)):o.trackChildChange(_i(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(ge,(i,r)=>{n.hasChild(i)||s.trackChildChange(gi(i,r))}),n.isLeafNode()||n.forEachChild(ge,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(_i(i,r,o))}else s.trackChildChange(gs(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?H.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class mi{constructor(e){this.indexedFilter_=new Pl(e.getIndex()),this.index_=e.getIndex(),this.startPost_=mi.getStartPost_(e),this.endPost_=mi.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new K(n,s))||(s=H.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=H.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(H.EMPTY_NODE);const r=this;return n.forEachChild(ge,(o,a)=>{r.matches(new K(o,a))||(i=i.updateImmediateChild(o,H.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class Rb{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new mi(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new K(n,s))||(s=H.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=H.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=H.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(H.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,H.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,g)=>h(g,d)}else o=this.index_.getCompare();const a=e;C(a.numChildren()===this.limit_,"");const l=new K(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const g=d==null?1:o(d,l);if(u&&!s.isEmpty()&&g>=0)return r!=null&&r.trackChildChange(_i(n,s,h)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(gi(n,h));const E=a.updateImmediateChild(n,H.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(gs(d.name,d.node)),E.updateImmediateChild(d.name,d.node)):E}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(gi(c.name,c.node)),r.trackChildChange(gs(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,H.EMPTY_NODE)):e}}/**
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
 */class Ol{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ge}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return C(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return C(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ps}hasEnd(){return this.endSet_}getIndexEndValue(){return C(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return C(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ln}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return C(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ge}copy(){const e=new Ol;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Ab(t){return t.loadsAllData()?new Pl(t.getIndex()):t.hasLimit()?new Rb(t):new mi(t)}function Au(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ge?n="$priority":t.index_===Tb?n="$value":t.index_===as?n="$key":(C(t.index_ instanceof Ib,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ye(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=ye(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+ye(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=ye(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+ye(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Pu(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ge&&(e.i=t.index_.toString()),e}/**
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
 */class Sr extends ep{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=xi("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(C(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Sr.getListenId_(e,s),a={};this.listens_[o]=a;const l=Au(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),ds(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=Sr.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Au(e._queryParams),s=e._path.toString(),i=new io;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Es(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=di(a.responseText)}catch{He("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&He("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class Pb{constructor(){this.rootNode_=H.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Rr(){return{value:null,children:new Map}}function dp(t,e,n){if(q(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=G(e);t.children.has(s)||t.children.set(s,Rr());const i=t.children.get(s);e=ue(e),dp(i,e,n)}}function Pa(t,e,n){t.value!==null?n(e,t.value):Ob(t,(s,i)=>{const r=new oe(e.toString()+"/"+s);Pa(i,r,n)})}function Ob(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class Nb{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&We(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const Ou=10*1e3,kb=30*1e3,xb=5*60*1e3;class Db{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Nb(e);const s=Ou+(kb-Ou)*Math.random();ei(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;We(e,(i,r)=>{r>0&&Vt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),ei(this.reportStats_.bind(this),Math.floor(Math.random()*2*xb))}}/**
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
 */var at;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(at||(at={}));function fp(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Nl(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function kl(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Ar{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=at.ACK_USER_WRITE,this.source=fp()}operationForChild(e){if(q(this.path)){if(this.affectedTree.value!=null)return C(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new oe(e));return new Ar(Q(),n,this.revert)}}else return C(G(this.path)===e,"operationForChild called for unrelated child."),new Ar(ue(this.path),this.affectedTree,this.revert)}}/**
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
 */class vi{constructor(e,n){this.source=e,this.path=n,this.type=at.LISTEN_COMPLETE}operationForChild(e){return q(this.path)?new vi(this.source,Q()):new vi(this.source,ue(this.path))}}/**
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
 */class $n{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=at.OVERWRITE}operationForChild(e){return q(this.path)?new $n(this.source,Q(),this.snap.getImmediateChild(e)):new $n(this.source,ue(this.path),this.snap)}}/**
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
 */class yi{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=at.MERGE}operationForChild(e){if(q(this.path)){const n=this.children.subtree(new oe(e));return n.isEmpty()?null:n.value?new $n(this.source,Q(),n.value):new yi(this.source,Q(),n)}else return C(G(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new yi(this.source,ue(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class pn{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(q(e))return this.isFullyInitialized()&&!this.filtered_;const n=G(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Mb{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Lb(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Sb(o.childName,o.snapshotNode))}),Hs(t,i,"child_removed",e,s,n),Hs(t,i,"child_added",e,s,n),Hs(t,i,"child_moved",r,s,n),Hs(t,i,"child_changed",e,s,n),Hs(t,i,"value",e,s,n),i}function Hs(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>Fb(t,a,l)),o.forEach(a=>{const l=$b(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function $b(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Fb(t,e,n){if(e.childName==null||n.childName==null)throw ys("Should only compare child_ events.");const s=new K(e.childName,e.snapshotNode),i=new K(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function ao(t,e){return{eventCache:t,serverCache:e}}function ti(t,e,n,s){return ao(new pn(e,n,s),t.serverCache)}function pp(t,e,n,s){return ao(t.eventCache,new pn(e,n,s))}function Pr(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Fn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Yo;const Ub=()=>(Yo||(Yo=new Ue(CE)),Yo);class fe{constructor(e,n=Ub()){this.value=e,this.children=n}static fromObject(e){let n=new fe(null);return We(e,(s,i)=>{n=n.set(new oe(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Q(),value:this.value};if(q(e))return null;{const s=G(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ue(e),n);return r!=null?{path:Ee(new oe(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(q(e))return this;{const n=G(e),s=this.children.get(n);return s!==null?s.subtree(ue(e)):new fe(null)}}set(e,n){if(q(e))return new fe(n,this.children);{const s=G(e),r=(this.children.get(s)||new fe(null)).set(ue(e),n),o=this.children.insert(s,r);return new fe(this.value,o)}}remove(e){if(q(e))return this.children.isEmpty()?new fe(null):new fe(null,this.children);{const n=G(e),s=this.children.get(n);if(s){const i=s.remove(ue(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new fe(null):new fe(this.value,r)}else return this}}get(e){if(q(e))return this.value;{const n=G(e),s=this.children.get(n);return s?s.get(ue(e)):null}}setTree(e,n){if(q(e))return n;{const s=G(e),r=(this.children.get(s)||new fe(null)).setTree(ue(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new fe(this.value,o)}}fold(e){return this.fold_(Q(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Ee(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Q(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(q(e))return null;{const r=G(e),o=this.children.get(r);return o?o.findOnPath_(ue(e),Ee(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Q(),n)}foreachOnPath_(e,n,s){if(q(e))return this;{this.value&&s(n,this.value);const i=G(e),r=this.children.get(i);return r?r.foreachOnPath_(ue(e),Ee(n,i),s):new fe(null)}}foreach(e){this.foreach_(Q(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(Ee(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class ct{constructor(e){this.writeTree_=e}static empty(){return new ct(new fe(null))}}function ni(t,e,n){if(q(e))return new ct(new fe(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Me(i,e);return r=r.updateChild(o,n),new ct(t.writeTree_.set(i,r))}else{const i=new fe(n),r=t.writeTree_.setTree(e,i);return new ct(r)}}}function Nu(t,e,n){let s=t;return We(n,(i,r)=>{s=ni(s,Ee(e,i),r)}),s}function ku(t,e){if(q(e))return ct.empty();{const n=t.writeTree_.setTree(e,new fe(null));return new ct(n)}}function Oa(t,e){return Vn(t,e)!=null}function Vn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Me(n.path,e)):null}function xu(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ge,(s,i)=>{e.push(new K(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new K(s,i.value))}),e}function hn(t,e){if(q(e))return t;{const n=Vn(t,e);return n!=null?new ct(new fe(n)):new ct(t.writeTree_.subtree(e))}}function Na(t){return t.writeTree_.isEmpty()}function _s(t,e){return gp(Q(),t.writeTree_,e)}function gp(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(C(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=gp(Ee(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Ee(t,".priority"),s)),n}}/**
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
 */function lo(t,e){return yp(e,t)}function Hb(t,e,n,s,i){C(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=ni(t.visibleWrites,e,n)),t.lastWriteId=s}function Wb(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function Vb(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);C(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Bb(a,s.path)?i=!1:ot(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return jb(t),!0;if(s.snap)t.visibleWrites=ku(t.visibleWrites,s.path);else{const a=s.children;We(a,l=>{t.visibleWrites=ku(t.visibleWrites,Ee(s.path,l))})}return!0}else return!1}function Bb(t,e){if(t.snap)return ot(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ot(Ee(t.path,n),e))return!0;return!1}function jb(t){t.visibleWrites=_p(t.allWrites,Gb,Q()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Gb(t){return t.visible}function _p(t,e,n){let s=ct.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)ot(n,o)?(a=Me(n,o),s=ni(s,a,r.snap)):ot(o,n)&&(a=Me(o,n),s=ni(s,Q(),r.snap.getChild(a)));else if(r.children){if(ot(n,o))a=Me(n,o),s=Nu(s,a,r.children);else if(ot(o,n))if(a=Me(o,n),q(a))s=Nu(s,Q(),r.children);else{const l=ds(r.children,G(a));if(l){const c=l.getChild(ue(a));s=ni(s,Q(),c)}}}else throw ys("WriteRecord should have .snap or .children")}}return s}function mp(t,e,n,s,i){if(!s&&!i){const r=Vn(t.visibleWrites,e);if(r!=null)return r;{const o=hn(t.visibleWrites,e);if(Na(o))return n;if(n==null&&!Oa(o,Q()))return null;{const a=n||H.EMPTY_NODE;return _s(o,a)}}}else{const r=hn(t.visibleWrites,e);if(!i&&Na(r))return n;if(!i&&n==null&&!Oa(r,Q()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(ot(c.path,e)||ot(e,c.path))},a=_p(t.allWrites,o,e),l=n||H.EMPTY_NODE;return _s(a,l)}}}function Kb(t,e,n){let s=H.EMPTY_NODE;const i=Vn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ge,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=hn(t.visibleWrites,e);return n.forEachChild(ge,(o,a)=>{const l=_s(hn(r,new oe(o)),a);s=s.updateImmediateChild(o,l)}),xu(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=hn(t.visibleWrites,e);return xu(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function qb(t,e,n,s,i){C(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Ee(e,n);if(Oa(t.visibleWrites,r))return null;{const o=hn(t.visibleWrites,r);return Na(o)?i.getChild(n):_s(o,i.getChild(n))}}function zb(t,e,n,s){const i=Ee(e,n),r=Vn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=hn(t.visibleWrites,i);return _s(o,s.getNode().getImmediateChild(n))}else return null}function Yb(t,e){return Vn(t.visibleWrites,e)}function Qb(t,e,n,s,i,r,o){let a;const l=hn(t.visibleWrites,e),c=Vn(l,Q());if(c!=null)a=c;else if(n!=null)a=_s(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let g=d.getNext();for(;g&&u.length<i;)h(g,s)!==0&&u.push(g),g=d.getNext();return u}else return[]}function Jb(){return{visibleWrites:ct.empty(),allWrites:[],lastWriteId:-1}}function Or(t,e,n,s){return mp(t.writeTree,t.treePath,e,n,s)}function xl(t,e){return Kb(t.writeTree,t.treePath,e)}function Du(t,e,n,s){return qb(t.writeTree,t.treePath,e,n,s)}function Nr(t,e){return Yb(t.writeTree,Ee(t.treePath,e))}function Xb(t,e,n,s,i,r){return Qb(t.writeTree,t.treePath,e,n,s,i,r)}function Dl(t,e,n){return zb(t.writeTree,t.treePath,e,n)}function vp(t,e){return yp(Ee(t.treePath,e),t.writeTree)}function yp(t,e){return{treePath:t,writeTree:e}}/**
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
 */class Zb{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;C(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),C(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,_i(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,gi(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,gs(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,_i(s,e.snapshotNode,i.oldSnap));else throw ys("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class ew{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Ep=new ew;class Ml{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new pn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Dl(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Fn(this.viewCache_),r=Xb(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function tw(t){return{filter:t}}function nw(t,e){C(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),C(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function sw(t,e,n,s,i){const r=new Zb;let o,a;if(n.type===at.OVERWRITE){const c=n;c.source.fromUser?o=ka(t,e,c.path,c.snap,s,i,r):(C(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!q(c.path),o=kr(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===at.MERGE){const c=n;c.source.fromUser?o=rw(t,e,c.path,c.children,s,i,r):(C(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=xa(t,e,c.path,c.children,s,i,a,r))}else if(n.type===at.ACK_USER_WRITE){const c=n;c.revert?o=lw(t,e,c.path,s,i,r):o=ow(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===at.LISTEN_COMPLETE)o=aw(t,e,n.path,s,r);else throw ys("Unknown operation type: "+n.type);const l=r.getChanges();return iw(e,o,l),{viewCache:o,changes:l}}function iw(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Pr(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(hp(Pr(e)))}}function bp(t,e,n,s,i,r){const o=e.eventCache;if(Nr(s,n)!=null)return e;{let a,l;if(q(n))if(C(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Fn(e),u=c instanceof H?c:H.EMPTY_NODE,h=xl(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Or(s,Fn(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=G(n);if(c===".priority"){C(fn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=Du(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=ue(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=Du(s,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=Dl(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return ti(e,a,o.isFullyInitialized()||q(n),t.filter.filtersNodes())}}function kr(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(q(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),g,null)}else{const g=G(n);if(!l.isCompleteForPath(n)&&fn(n)>1)return e;const m=ue(n),O=l.getNode().getImmediateChild(g).updateChild(m,s);g===".priority"?c=u.updatePriority(l.getNode(),O):c=u.updateChild(l.getNode(),g,O,m,Ep,null)}const h=pp(e,c,l.isFullyInitialized()||q(n),u.filtersNodes()),d=new Ml(i,h,r);return bp(t,h,n,i,d,a)}function ka(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new Ml(i,e,r);if(q(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=ti(e,c,!0,t.filter.filtersNodes());else{const h=G(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=ti(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=ue(n),g=a.getNode().getImmediateChild(h);let m;if(q(d))m=s;else{const E=u.getCompleteChild(h);E!=null?np(d)===".priority"&&E.getChild(ip(d)).isEmpty()?m=E:m=E.updateChild(d,s):m=H.EMPTY_NODE}if(g.equals(m))l=e;else{const E=t.filter.updateChild(a.getNode(),h,m,d,u,o);l=ti(e,E,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Mu(t,e){return t.eventCache.isCompleteForChild(e)}function rw(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=Ee(n,l);Mu(e,G(u))&&(a=ka(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=Ee(n,l);Mu(e,G(u))||(a=ka(t,a,u,c,i,r,o))}),a}function Lu(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function xa(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;q(n)?c=s:c=new fe(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const g=e.serverCache.getNode().getImmediateChild(h),m=Lu(t,g,d);l=kr(t,l,new oe(h),m,i,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const g=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!g){const m=e.serverCache.getNode().getImmediateChild(h),E=Lu(t,m,d);l=kr(t,l,new oe(h),E,i,r,o,a)}}),l}function ow(t,e,n,s,i,r,o){if(Nr(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(q(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return kr(t,e,n,l.getNode().getChild(n),i,r,a,o);if(q(n)){let c=new fe(null);return l.getNode().forEachChild(as,(u,h)=>{c=c.set(new oe(u),h)}),xa(t,e,n,c,i,r,a,o)}else return e}else{let c=new fe(null);return s.foreach((u,h)=>{const d=Ee(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),xa(t,e,n,c,i,r,a,o)}}function aw(t,e,n,s,i){const r=e.serverCache,o=pp(e,r.getNode(),r.isFullyInitialized()||q(n),r.isFiltered());return bp(t,o,n,s,Ep,i)}function lw(t,e,n,s,i,r){let o;if(Nr(s,n)!=null)return e;{const a=new Ml(s,e,i),l=e.eventCache.getNode();let c;if(q(n)||G(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Or(s,Fn(e));else{const h=e.serverCache.getNode();C(h instanceof H,"serverChildren would be complete if leaf node"),u=xl(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=G(n);let h=Dl(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,ue(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,H.EMPTY_NODE,ue(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Or(s,Fn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Nr(s,Q())!=null,ti(e,c,o,t.filter.filtersNodes())}}/**
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
 */class cw{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Pl(s.getIndex()),r=Ab(s);this.processor_=tw(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(H.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(H.EMPTY_NODE,a.getNode(),null),u=new pn(l,o.isFullyInitialized(),i.filtersNodes()),h=new pn(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=ao(h,u),this.eventGenerator_=new Mb(this.query_)}get query(){return this.query_}}function uw(t){return t.viewCache_.serverCache.getNode()}function hw(t){return Pr(t.viewCache_)}function dw(t,e){const n=Fn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!q(e)&&!n.getImmediateChild(G(e)).isEmpty())?n.getChild(e):null}function $u(t){return t.eventRegistrations_.length===0}function fw(t,e){t.eventRegistrations_.push(e)}function Fu(t,e,n){const s=[];if(n){C(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Uu(t,e,n,s){e.type===at.MERGE&&e.source.queryId!==null&&(C(Fn(t.viewCache_),"We should always have a full cache before handling merges"),C(Pr(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=sw(t.processor_,i,e,n,s);return nw(t.processor_,r.viewCache),C(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,wp(t,r.changes,r.viewCache.eventCache.getNode(),null)}function pw(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ge,(r,o)=>{s.push(gs(r,o))}),n.isFullyInitialized()&&s.push(hp(n.getNode())),wp(t,s,n.getNode(),e)}function wp(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Lb(t.eventGenerator_,e,n,i)}/**
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
 */let xr;class Ip{constructor(){this.views=new Map}}function gw(t){C(!xr,"__referenceConstructor has already been defined"),xr=t}function _w(){return C(xr,"Reference.ts has not been loaded"),xr}function mw(t){return t.views.size===0}function Ll(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return C(r!=null,"SyncTree gave us an op for an invalid query."),Uu(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Uu(o,e,n,s));return r}}function Cp(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=Or(n,i?s:null),l=!1;a?l=!0:s instanceof H?(a=xl(n,s),l=!1):(a=H.EMPTY_NODE,l=!1);const c=ao(new pn(a,l,!1),new pn(s,i,!1));return new cw(e,c)}return o}function vw(t,e,n,s,i,r){const o=Cp(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),fw(o,n),pw(o,n)}function yw(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=gn(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(Fu(c,n,s)),$u(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(Fu(l,n,s)),$u(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!gn(t)&&r.push(new(_w())(e._repo,e._path)),{removed:r,events:o}}function Tp(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function dn(t,e){let n=null;for(const s of t.views.values())n=n||dw(s,e);return n}function Sp(t,e){if(e._queryParams.loadsAllData())return co(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Rp(t,e){return Sp(t,e)!=null}function gn(t){return co(t)!=null}function co(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Dr;function Ew(t){C(!Dr,"__referenceConstructor has already been defined"),Dr=t}function bw(){return C(Dr,"Reference.ts has not been loaded"),Dr}let ww=1;class Hu{constructor(e){this.listenProvider_=e,this.syncPointTree_=new fe(null),this.pendingWriteTree_=Jb(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Ap(t,e,n,s,i){return Hb(t.pendingWriteTree_,e,n,s,i),i?Li(t,new $n(fp(),e,n)):[]}function On(t,e,n=!1){const s=Wb(t.pendingWriteTree_,e);if(Vb(t.pendingWriteTree_,e)){let r=new fe(null);return s.snap!=null?r=r.set(Q(),!0):We(s.children,o=>{r=r.set(new oe(o),!0)}),Li(t,new Ar(s.path,r,n))}else return[]}function Mi(t,e,n){return Li(t,new $n(Nl(),e,n))}function Iw(t,e,n){const s=fe.fromObject(n);return Li(t,new yi(Nl(),e,s))}function Cw(t,e){return Li(t,new vi(Nl(),e))}function Tw(t,e,n){const s=Fl(t,n);if(s){const i=Ul(s),r=i.path,o=i.queryId,a=Me(r,e),l=new vi(kl(o),a);return Hl(t,r,l)}else return[]}function Mr(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||Rp(o,e))){const l=yw(o,e,n,s);mw(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(d,g)=>gn(g));if(u&&!h){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const g=Aw(d);for(let m=0;m<g.length;++m){const E=g[m],O=E.query,k=kp(t,E);t.listenProvider_.startListening(si(O),Ei(t,O),k.hashFn,k.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(si(e),null):c.forEach(d=>{const g=t.queryToTagMap.get(uo(d));t.listenProvider_.stopListening(si(d),g)}))}Pw(t,c)}return a}function Pp(t,e,n,s){const i=Fl(t,s);if(i!=null){const r=Ul(i),o=r.path,a=r.queryId,l=Me(o,e),c=new $n(kl(a),l,n);return Hl(t,o,c)}else return[]}function Sw(t,e,n,s){const i=Fl(t,s);if(i){const r=Ul(i),o=r.path,a=r.queryId,l=Me(o,e),c=fe.fromObject(n),u=new yi(kl(a),l,c);return Hl(t,o,u)}else return[]}function Da(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,g)=>{const m=Me(d,i);r=r||dn(g,m),o=o||gn(g)});let a=t.syncPointTree_.get(i);a?(o=o||gn(a),r=r||dn(a,Q())):(a=new Ip,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=H.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,m)=>{const E=dn(m,Q());E&&(r=r.updateImmediateChild(g,E))}));const c=Rp(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=uo(e);C(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const g=Ow();t.queryToTagMap.set(d,g),t.tagToQueryMap.set(g,d)}const u=lo(t.pendingWriteTree_,i);let h=vw(a,e,n,u,r,l);if(!c&&!o&&!s){const d=Sp(a,e);h=h.concat(Nw(t,e,d))}return h}function $l(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Me(o,e),c=dn(a,l);if(c)return c});return mp(i,e,r,n,!0)}function Rw(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const h=Me(c,n);s=s||dn(u,h)});let i=t.syncPointTree_.get(n);i?s=s||dn(i,Q()):(i=new Ip,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new pn(s,!0,!1):null,a=lo(t.pendingWriteTree_,e._path),l=Cp(i,e,a,r?o.getNode():H.EMPTY_NODE,r);return hw(l)}function Li(t,e){return Op(e,t.syncPointTree_,null,lo(t.pendingWriteTree_,Q()))}function Op(t,e,n,s){if(q(t.path))return Np(t,e,n,s);{const i=e.get(Q());n==null&&i!=null&&(n=dn(i,Q()));let r=[];const o=G(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=vp(s,o);r=r.concat(Op(a,l,c,u))}return i&&(r=r.concat(Ll(i,t,s,n))),r}}function Np(t,e,n,s){const i=e.get(Q());n==null&&i!=null&&(n=dn(i,Q()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=vp(s,o),u=t.operationForChild(o);u&&(r=r.concat(Np(u,a,l,c)))}),i&&(r=r.concat(Ll(i,t,s,n))),r}function kp(t,e){const n=e.query,s=Ei(t,n);return{hashFn:()=>(uw(e)||H.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Tw(t,n._path,s):Cw(t,n._path);{const r=RE(i,n);return Mr(t,n,null,r)}}}}function Ei(t,e){const n=uo(e);return t.queryToTagMap.get(n)}function uo(t){return t._path.toString()+"$"+t._queryIdentifier}function Fl(t,e){return t.tagToQueryMap.get(e)}function Ul(t){const e=t.indexOf("$");return C(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new oe(t.substr(0,e))}}function Hl(t,e,n){const s=t.syncPointTree_.get(e);C(s,"Missing sync point for query tag that we're tracking");const i=lo(t.pendingWriteTree_,e);return Ll(s,n,i,null)}function Aw(t){return t.fold((e,n,s)=>{if(n&&gn(n))return[co(n)];{let i=[];return n&&(i=Tp(n)),We(s,(r,o)=>{i=i.concat(o)}),i}})}function si(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(bw())(t._repo,t._path):t}function Pw(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=uo(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function Ow(){return ww++}function Nw(t,e,n){const s=e._path,i=Ei(t,e),r=kp(t,n),o=t.listenProvider_.startListening(si(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)C(!gn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!q(c)&&u&&gn(u))return[co(u).query];{let d=[];return u&&(d=d.concat(Tp(u).map(g=>g.query))),We(h,(g,m)=>{d=d.concat(m)}),d}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(si(u),Ei(t,u))}}return o}/**
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
 */class Wl{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Wl(n)}node(){return this.node_}}class Vl{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ee(this.path_,e);return new Vl(this.syncTree_,n)}node(){return $l(this.syncTree_,this.path_)}}const kw=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Wu=function(t,e,n){if(!t||typeof t!="object")return t;if(C(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return xw(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Dw(t[".sv"],e);C(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},xw=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:C(!1,"Unexpected server value: "+t)}},Dw=function(t,e,n){t.hasOwnProperty("increment")||C(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&C(!1,"Unexpected increment value: "+s);const i=e.node();if(C(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Mw=function(t,e,n,s){return Bl(e,new Vl(n,t),s)},xp=function(t,e,n){return Bl(t,new Wl(e),n)};function Bl(t,e,n){const s=t.getPriority().val(),i=Wu(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Wu(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new we(a,Ce(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new we(i))),o.forEachChild(ge,(a,l)=>{const c=Bl(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class jl{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Gl(t,e){let n=e instanceof oe?e:new oe(e),s=t,i=G(n);for(;i!==null;){const r=ds(s.node.children,i)||{children:{},childCount:0};s=new jl(i,s,r),n=ue(n),i=G(n)}return s}function Cs(t){return t.node.value}function Dp(t,e){t.node.value=e,Ma(t)}function Mp(t){return t.node.childCount>0}function Lw(t){return Cs(t)===void 0&&!Mp(t)}function ho(t,e){We(t.node.children,(n,s)=>{e(new jl(n,t,s))})}function Lp(t,e,n,s){n&&!s&&e(t),ho(t,i=>{Lp(i,e,!0,s)}),n&&s&&e(t)}function $w(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function $i(t){return new oe(t.parent===null?t.name:$i(t.parent)+"/"+t.name)}function Ma(t){t.parent!==null&&Fw(t.parent,t.name,t)}function Fw(t,e,n){const s=Lw(n),i=Vt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Ma(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Ma(t))}/**
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
 */const Uw=/[\[\].#$\/\u0000-\u001F\u007F]/,Hw=/[\[\].#$\u0000-\u001F\u007F]/,Qo=10*1024*1024,$p=function(t){return typeof t=="string"&&t.length!==0&&!Uw.test(t)},Fp=function(t){return typeof t=="string"&&t.length!==0&&!Hw.test(t)},Ww=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Fp(t)},Vw=function(t,e,n,s){Kl(vl(t,"value"),e,n)},Kl=function(t,e,n){const s=n instanceof oe?new ob(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Sn(s));if(typeof e=="function")throw new Error(t+"contains a function "+Sn(s)+" with contents = "+e.toString());if(Mf(e))throw new Error(t+"contains "+e.toString()+" "+Sn(s));if(typeof e=="string"&&e.length>Qo/3&&ro(e)>Qo)throw new Error(t+"contains a string greater than "+Qo+" utf8 bytes "+Sn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(We(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!$p(o)))throw new Error(t+" contains an invalid key ("+o+") "+Sn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);ab(s,o),Kl(t,a,s),lb(s)}),i&&r)throw new Error(t+' contains ".value" child '+Sn(s)+" in addition to actual children.")}},Up=function(t,e,n,s){if(!Fp(n))throw new Error(vl(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Bw=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Up(t,e,n)},jw=function(t,e){if(G(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Gw=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!$p(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Ww(n))throw new Error(vl(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Kw{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ql(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Sl(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Hp(t,e,n){ql(t,n),Wp(t,s=>Sl(s,e))}function Ct(t,e,n){ql(t,n),Wp(t,s=>ot(s,e)||ot(e,s))}function Wp(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(qw(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function qw(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Zs&&Pe("event: "+n.toString()),Is(s)}}}/**
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
 */const zw="repo_interrupt",Yw=25;class Qw{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Kw,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Rr(),this.transactionQueueTree_=new jl,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Jw(t,e,n){if(t.stats_=Cl(t.repoInfo_),t.forceRestClient_||NE())t.server_=new Sr(t.repoInfo_,(s,i,r,o)=>{Vu(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Bu(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ye(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Lt(t.repoInfo_,e,(s,i,r,o)=>{Vu(t,s,i,r,o)},s=>{Bu(t,s)},s=>{Zw(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=LE(t.repoInfo_,()=>new Db(t.stats_,t.server_)),t.infoData_=new Pb,t.infoSyncTree_=new Hu({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Mi(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Yl(t,"connected",!1),t.serverSyncTree_=new Hu({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);Ct(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function Xw(t){const n=t.infoData_.getNode(new oe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function zl(t){return kw({timestamp:Xw(t)})}function Vu(t,e,n,s,i){t.dataUpdateCount++;const r=new oe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=Er(n,c=>Ce(c));o=Sw(t.serverSyncTree_,r,l,i)}else{const l=Ce(n);o=Pp(t.serverSyncTree_,r,l,i)}else if(s){const l=Er(n,c=>Ce(c));o=Iw(t.serverSyncTree_,r,l)}else{const l=Ce(n);o=Mi(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=po(t,r)),Ct(t.eventQueue_,a,o)}function Bu(t,e){Yl(t,"connected",e),e===!1&&nI(t)}function Zw(t,e){We(e,(n,s)=>{Yl(t,n,s)})}function Yl(t,e,n){const s=new oe("/.info/"+e),i=Ce(n);t.infoData_.updateSnapshot(s,i);const r=Mi(t.infoSyncTree_,s,i);Ct(t.eventQueue_,s,r)}function Vp(t){return t.nextWriteId_++}function eI(t,e,n){const s=Rw(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=Ce(i).withIndex(e._queryParams.getIndex());Da(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Mi(t.serverSyncTree_,e._path,r);else{const a=Ei(t.serverSyncTree_,e);o=Pp(t.serverSyncTree_,e._path,r,a)}return Ct(t.eventQueue_,e._path,o),Mr(t.serverSyncTree_,e,n,null,!0),r},i=>(fo(t,"get for query "+ye(e)+" failed: "+i),Promise.reject(new Error(i))))}function tI(t,e,n,s,i){fo(t,"set",{path:e.toString(),value:n,priority:s});const r=zl(t),o=Ce(n,s),a=$l(t.serverSyncTree_,e),l=xp(o,a,r),c=Vp(t),u=Ap(t.serverSyncTree_,e,l,c,!0);ql(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,g)=>{const m=d==="ok";m||He("set at "+e+" failed: "+d);const E=On(t.serverSyncTree_,c,!m);Ct(t.eventQueue_,e,E),rI(t,i,d,g)});const h=qp(t,e);po(t,h),Ct(t.eventQueue_,h,[])}function nI(t){fo(t,"onDisconnectEvents");const e=zl(t),n=Rr();Pa(t.onDisconnect_,Q(),(i,r)=>{const o=Mw(i,r,t.serverSyncTree_,e);dp(n,i,o)});let s=[];Pa(n,Q(),(i,r)=>{s=s.concat(Mi(t.serverSyncTree_,i,r));const o=qp(t,i);po(t,o)}),t.onDisconnect_=Rr(),Ct(t.eventQueue_,Q(),s)}function sI(t,e,n){let s;G(e._path)===".info"?s=Da(t.infoSyncTree_,e,n):s=Da(t.serverSyncTree_,e,n),Hp(t.eventQueue_,e._path,s)}function ju(t,e,n){let s;G(e._path)===".info"?s=Mr(t.infoSyncTree_,e,n):s=Mr(t.serverSyncTree_,e,n),Hp(t.eventQueue_,e._path,s)}function iI(t){t.persistentConnection_&&t.persistentConnection_.interrupt(zw)}function fo(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Pe(n,...e)}function rI(t,e,n,s){e&&Is(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Bp(t,e,n){return $l(t.serverSyncTree_,e,n)||H.EMPTY_NODE}function Ql(t,e=t.transactionQueueTree_){if(e||go(t,e),Cs(e)){const n=Gp(t,e);C(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&oI(t,$i(e),n)}else Mp(e)&&ho(e,n=>{Ql(t,n)})}function oI(t,e,n){const s=n.map(c=>c.currentWriteId),i=Bp(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];C(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Me(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{fo(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(On(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();go(t,Gl(t.transactionQueueTree_,e)),Ql(t,t.transactionQueueTree_),Ct(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)Is(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{He("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}po(t,e)}},o)}function po(t,e){const n=jp(t,e),s=$i(n),i=Gp(t,n);return aI(t,i,s),s}function aI(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Me(n,l.path);let u=!1,h;if(C(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(On(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Yw)u=!0,h="maxretry",i=i.concat(On(t.serverSyncTree_,l.currentWriteId,!0));else{const d=Bp(t,l.path,o);l.currentInputSnapshot=d;const g=e[a].update(d.val());if(g!==void 0){Kl("transaction failed: Data returned ",g,l.path);let m=Ce(g);typeof g=="object"&&g!=null&&Vt(g,".priority")||(m=m.updatePriority(d.getPriority()));const O=l.currentWriteId,k=zl(t),P=xp(m,d,k);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=P,l.currentWriteId=Vp(t),o.splice(o.indexOf(O),1),i=i.concat(Ap(t.serverSyncTree_,l.path,P,l.currentWriteId,l.applyLocally)),i=i.concat(On(t.serverSyncTree_,O,!0))}else u=!0,h="nodata",i=i.concat(On(t.serverSyncTree_,l.currentWriteId,!0))}Ct(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}go(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Is(s[a]);Ql(t,t.transactionQueueTree_)}function jp(t,e){let n,s=t.transactionQueueTree_;for(n=G(e);n!==null&&Cs(s)===void 0;)s=Gl(s,n),e=ue(e),n=G(e);return s}function Gp(t,e){const n=[];return Kp(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Kp(t,e,n){const s=Cs(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);ho(e,i=>{Kp(t,i,n)})}function go(t,e){const n=Cs(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Dp(e,n.length>0?n:void 0)}ho(e,s=>{go(t,s)})}function qp(t,e){const n=$i(jp(t,e)),s=Gl(t.transactionQueueTree_,e);return $w(s,i=>{Jo(t,i)}),Jo(t,s),Lp(s,i=>{Jo(t,i)}),n}function Jo(t,e){const n=Cs(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(C(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(C(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(On(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Dp(e,void 0):n.length=r+1,Ct(t.eventQueue_,$i(e),i);for(let o=0;o<s.length;o++)Is(s[o])}}/**
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
 */function lI(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function cI(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):He(`Invalid query segment '${n}' in query '${t}'`)}return e}const Gu=function(t,e){const n=uI(t),s=n.namespace;n.domain==="firebase.com"&&Ut(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Ut("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||wE();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new qf(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new oe(n.pathString)}},uI=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=lI(t.substring(u,h)));const d=cI(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const g=e.slice(0,c);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */class hI{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ye(this.snapshot.exportVal())}}class dI{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class zp{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return C(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Jl{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return q(this._path)?null:np(this._path)}get ref(){return new Bt(this._repo,this._path)}get _queryIdentifier(){const e=Pu(this._queryParams),n=wl(e);return n==="{}"?"default":n}get _queryObject(){return Pu(this._queryParams)}isEqual(e){if(e=$e(e),!(e instanceof Jl))return!1;const n=this._repo===e._repo,s=Sl(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+rb(this._path)}}class Bt extends Jl{constructor(e,n){super(e,n,new Ol,!1)}get parent(){const e=ip(this._path);return e===null?null:new Bt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class bi{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new oe(e),s=La(this.ref,e);return new bi(this._node.getChild(n),s,ge)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new bi(i,La(this.ref,s),ge)))}hasChild(e){const n=new oe(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function _o(t,e){return t=$e(t),t._checkNotDeleted("ref"),e!==void 0?La(t._root,e):t._root}function La(t,e){return t=$e(t),G(t._path)===null?Bw("child","path",e):Up("child","path",e),new Bt(t._repo,Ee(t._path,e))}function fI(t,e){t=$e(t),jw("set",t._path),Vw("set",e,t._path);const n=new io;return tI(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function pI(t){t=$e(t);const e=new zp(()=>{}),n=new mo(e);return eI(t._repo,t,n).then(s=>new bi(s,new Bt(t._repo,t._path),t._queryParams.getIndex()))}class mo{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new hI("value",this,new bi(e.snapshotNode,new Bt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new dI(this,e,n):null}matches(e){return e instanceof mo?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function gI(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const l=n,c=(u,h)=>{ju(t._repo,t,a),l(u,h)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new zp(n,r||void 0),a=new mo(o);return sI(t._repo,t,a),()=>ju(t._repo,t,a)}function $a(t,e,n,s){return gI(t,"value",e,n,s)}gw(Bt);Ew(Bt);/**
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
 */const _I="FIREBASE_DATABASE_EMULATOR_HOST",Fa={};let mI=!1;function vI(t,e,n,s){t.repoInfo_=new qf(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function yI(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Ut("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Pe("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Gu(r,i),a=o.repoInfo,l;typeof process<"u"&&hu&&(l=hu[_I]),l?(r=`http://${l}?ns=${a.namespace}`,o=Gu(r,i),a=o.repoInfo):o.repoInfo.secure;const c=new xE(t.name,t.options,e);Gw("Invalid Firebase Database URL",o),q(o.path)||Ut("Database URL must point to the root of a Firebase Database (not including a child path).");const u=bI(a,t,c,new kE(t.name,n));return new wI(u,t)}function EI(t,e){const n=Fa[e];(!n||n[t.key]!==t)&&Ut(`Database ${e}(${t.repoInfo_}) has already been deleted.`),iI(t),delete n[t.key]}function bI(t,e,n,s){let i=Fa[e.name];i||(i={},Fa[e.name]=i);let r=i[t.toURLString()];return r&&Ut("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Qw(t,mI,n,s),i[t.toURLString()]=r,r}class wI{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Jw(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Bt(this._repo,Q())),this._rootInternal}_delete(){return this._rootInternal!==null&&(EI(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ut("Cannot call "+e+" on a deleted database.")}}function II(t=Pf(),e){const n=bl(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=Kv("database");s&&CI(n,...s)}return n}function CI(t,e,n,s={}){t=$e(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Ut("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Ut('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new or(or.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:qv(s.mockUserToken,t.app.options.projectId);r=new or(o)}vI(i,e,n,r)}/**
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
 */function TI(t){_E(bs),fs(new Mn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return yI(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),un(du,fu,t),un(du,fu,"esm2017")}Lt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Lt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};TI();function Xl(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Yp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const SI=Yp,Qp=new Ni("auth","Firebase",Yp());/**
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
 */const Lr=new yl("@firebase/auth");function RI(t,...e){Lr.logLevel<=ie.WARN&&Lr.warn(`Auth (${bs}): ${t}`,...e)}function ar(t,...e){Lr.logLevel<=ie.ERROR&&Lr.error(`Auth (${bs}): ${t}`,...e)}/**
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
 */function ut(t,...e){throw Zl(t,...e)}function Et(t,...e){return Zl(t,...e)}function Jp(t,e,n){const s=Object.assign(Object.assign({},SI()),{[e]:n});return new Ni("auth","Firebase",s).create(e,{appName:t.name})}function $t(t){return Jp(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Zl(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Qp.create(t,...e)}function V(t,e,...n){if(!t)throw Zl(e,...n)}function kt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ar(e),new Error(e)}function Ht(t,e){t||kt(e)}/**
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
 */function Ua(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function AI(){return Ku()==="http:"||Ku()==="https:"}function Ku(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function PI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(AI()||Yv()||"connection"in navigator)?navigator.onLine:!0}function OI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Fi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ht(n>e,"Short delay should be less than long delay!"),this.isMobile=ml()||If()}get(){return PI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ec(t,e){Ht(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Xp{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;kt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;kt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;kt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const NI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const kI=new Fi(3e4,6e4);function jt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Gt(t,e,n,s,i={}){return Zp(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Es(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},r);return zv()||(c.referrerPolicy="no-referrer"),Xp.fetch()(eg(t,t.config.apiHost,n,a),c)})}async function Zp(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},NI),e);try{const i=new DI(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Ji(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ji(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ji(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ji(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Jp(t,u,c);ut(t,u)}}catch(i){if(i instanceof vn)throw i;ut(t,"network-request-failed",{message:String(i)})}}async function Ui(t,e,n,s,i={}){const r=await Gt(t,e,n,s,i);return"mfaPendingCredential"in r&&ut(t,"multi-factor-auth-required",{_serverResponse:r}),r}function eg(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?ec(t.config,i):`${t.config.apiScheme}://${i}`}function xI(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class DI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Et(this.auth,"network-request-failed")),kI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ji(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Et(t,e,s);return i.customData._tokenResponse=n,i}function qu(t){return t!==void 0&&t.enterprise!==void 0}class MI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return xI(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function LI(t,e){return Gt(t,"GET","/v2/recaptchaConfig",jt(t,e))}/**
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
 */async function $I(t,e){return Gt(t,"POST","/v1/accounts:delete",e)}async function tg(t,e){return Gt(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ii(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function FI(t,e=!1){const n=$e(t),s=await n.getIdToken(e),i=tc(s);V(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:ii(Xo(i.auth_time)),issuedAtTime:ii(Xo(i.iat)),expirationTime:ii(Xo(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Xo(t){return Number(t)*1e3}function tc(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return ar("JWT malformed, contained fewer than 3 sections"),null;try{const i=yr(n);return i?JSON.parse(i):(ar("Failed to decode base64 JWT payload"),null)}catch(i){return ar("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function zu(t){const e=tc(t);return V(e,"internal-error"),V(typeof e.exp<"u","internal-error"),V(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function wi(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof vn&&UI(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function UI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class HI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ha{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ii(this.lastLoginAt),this.creationTime=ii(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function $r(t){var e;const n=t.auth,s=await t.getIdToken(),i=await wi(t,tg(n,{idToken:s}));V(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?ng(r.providerUserInfo):[],a=VI(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Ha(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function WI(t){const e=$e(t);await $r(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function VI(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function ng(t){return t.map(e=>{var{providerId:n}=e,s=Xl(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function BI(t,e){const n=await Zp(t,{},async()=>{const s=Es({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=eg(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Xp.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function jI(t,e){return Gt(t,"POST","/v2/accounts:revokeToken",jt(t,e))}/**
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
 */class ls{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){V(e.idToken,"internal-error"),V(typeof e.idToken<"u","internal-error"),V(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):zu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){V(e.length!==0,"internal-error");const n=zu(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(V(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await BI(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new ls;return s&&(V(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(V(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(V(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ls,this.toJSON())}_performRefresh(){return kt("not implemented")}}/**
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
 */function Yt(t,e){V(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class xt{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Xl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new HI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Ha(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await wi(this,this.stsTokenManager.getToken(this.auth,e));return V(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return FI(this,e)}reload(){return WI(this)}_assign(e){this!==e&&(V(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new xt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){V(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await $r(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(vt(this.auth.app))return Promise.reject($t(this.auth));const e=await this.getIdToken();return await wi(this,$I(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,g=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,O=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,k=(c=n.createdAt)!==null&&c!==void 0?c:void 0,P=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:M,emailVerified:x,isAnonymous:z,providerData:_e,stsTokenManager:ae}=n;V(M&&ae,e,"internal-error");const Qe=ls.fromJSON(this.name,ae);V(typeof M=="string",e,"internal-error"),Yt(h,e.name),Yt(d,e.name),V(typeof x=="boolean",e,"internal-error"),V(typeof z=="boolean",e,"internal-error"),Yt(g,e.name),Yt(m,e.name),Yt(E,e.name),Yt(O,e.name),Yt(k,e.name),Yt(P,e.name);const Je=new xt({uid:M,auth:e,email:d,emailVerified:x,displayName:h,isAnonymous:z,photoURL:m,phoneNumber:g,tenantId:E,stsTokenManager:Qe,createdAt:k,lastLoginAt:P});return _e&&Array.isArray(_e)&&(Je.providerData=_e.map(Xe=>Object.assign({},Xe))),O&&(Je._redirectEventId=O),Je}static async _fromIdTokenResponse(e,n,s=!1){const i=new ls;i.updateFromServerResponse(n);const r=new xt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await $r(r),r}static async _fromGetAccountInfoResponse(e,n,s){const i=n.users[0];V(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?ng(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),a=new ls;a.updateFromIdToken(s);const l=new xt({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new Ha(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,c),l}}/**
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
 */const Yu=new Map;function Dt(t){Ht(t instanceof Function,"Expected a class definition");let e=Yu.get(t);return e?(Ht(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Yu.set(t,e),e)}/**
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
 */class sg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}sg.type="NONE";const Wa=sg;/**
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
 */function lr(t,e,n){return`firebase:${t}:${e}:${n}`}class cs{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=lr(this.userKey,i.apiKey,r),this.fullPersistenceKey=lr("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?xt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new cs(Dt(Wa),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Dt(Wa);const o=lr(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=xt._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new cs(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new cs(r,e,s))}}/**
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
 */function Qu(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ag(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ig(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(cg(e))return"Blackberry";if(ug(e))return"Webos";if(rg(e))return"Safari";if((e.includes("chrome/")||og(e))&&!e.includes("edge/"))return"Chrome";if(lg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function ig(t=Le()){return/firefox\//i.test(t)}function rg(t=Le()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function og(t=Le()){return/crios\//i.test(t)}function ag(t=Le()){return/iemobile/i.test(t)}function lg(t=Le()){return/android/i.test(t)}function cg(t=Le()){return/blackberry/i.test(t)}function ug(t=Le()){return/webos/i.test(t)}function nc(t=Le()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function GI(t=Le()){var e;return nc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function KI(){return Qv()&&document.documentMode===10}function hg(t=Le()){return nc(t)||lg(t)||ug(t)||cg(t)||/windows phone/i.test(t)||ag(t)}/**
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
 */function dg(t,e=[]){let n;switch(t){case"Browser":n=Qu(Le());break;case"Worker":n=`${Qu(Le())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${bs}/${s}`}/**
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
 */class qI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function zI(t,e={}){return Gt(t,"GET","/v2/passwordPolicy",jt(t,e))}/**
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
 */const YI=6;class QI{constructor(e){var n,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:YI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,i,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class JI{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ju(this),this.idTokenSubscription=new Ju(this),this.beforeStateQueue=new qI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Qp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Dt(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await cs.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await tg(this,{idToken:e}),s=await xt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(vt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return V(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await $r(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=OI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(vt(this.app))return Promise.reject($t(this));const n=e?$e(e):null;return n&&V(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&V(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return vt(this.app)?Promise.reject($t(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return vt(this.app)?Promise.reject($t(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Dt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await zI(this),n=new QI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ni("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await jI(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Dt(e)||this._popupRedirectResolver;V(n,this,"argument-error"),this.redirectPersistenceManager=await cs.create(this,[Dt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(V(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return V(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=dg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&RI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function yn(t){return $e(t)}class Ju{constructor(e){this.auth=e,this.observer=null,this.addObserver=ry(n=>this.observer=n)}get next(){return V(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let vo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function XI(t){vo=t}function fg(t){return vo.loadJS(t)}function ZI(){return vo.recaptchaEnterpriseScript}function eC(){return vo.gapiScript}function tC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class nC{constructor(){this.enterprise=new sC}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class sC{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const iC="recaptcha-enterprise",pg="NO_RECAPTCHA";class rC{constructor(e){this.type=iC,this.auth=yn(e)}async verify(e="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{LI(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new MI(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(r,o,a){const l=window.grecaptcha;qu(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(pg)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new nC().execute("siteKey",{action:"verify"}):new Promise((r,o)=>{s(this.auth).then(a=>{if(!n&&qu(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=ZI();l.length!==0&&(l+=a),fg(l).then(()=>{i(a,r,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Xu(t,e,n,s=!1,i=!1){const r=new rC(t);let o;if(i)o=pg;else try{o=await r.verify(n)}catch{o=await r.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return s?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Fr(t,e,n,s,i){var r;if(!((r=t._getRecaptchaConfig())===null||r===void 0)&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Xu(t,e,n,n==="getOobCode");return s(t,o)}else return s(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Xu(t,e,n,n==="getOobCode");return s(t,a)}else return Promise.reject(o)})}/**
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
 */function oC(t,e){const n=bl(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(br(r,e??{}))return i;ut(i,"already-initialized")}return n.initialize({options:e})}function aC(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Dt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function lC(t,e,n){const s=yn(t);V(s._canInitEmulator,s,"emulator-config-failed"),V(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=gg(e),{host:o,port:a}=cC(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),uC()}function gg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function cC(t){const e=gg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Zu(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Zu(o)}}}function Zu(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function uC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class sc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return kt("not implemented")}_getIdTokenResponse(e){return kt("not implemented")}_linkToIdToken(e,n){return kt("not implemented")}_getReauthenticationResolver(e){return kt("not implemented")}}async function hC(t,e){return Gt(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function dC(t,e){return Ui(t,"POST","/v1/accounts:signInWithPassword",jt(t,e))}async function _g(t,e){return Gt(t,"POST","/v1/accounts:sendOobCode",jt(t,e))}async function fC(t,e){return _g(t,e)}async function pC(t,e){return _g(t,e)}/**
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
 */async function gC(t,e){return Ui(t,"POST","/v1/accounts:signInWithEmailLink",jt(t,e))}async function _C(t,e){return Ui(t,"POST","/v1/accounts:signInWithEmailLink",jt(t,e))}/**
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
 */class Ii extends sc{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ii(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Ii(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Fr(e,n,"signInWithPassword",dC);case"emailLink":return gC(e,{email:this._email,oobCode:this._password});default:ut(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Fr(e,s,"signUpPassword",hC);case"emailLink":return _C(e,{idToken:n,email:this._email,oobCode:this._password});default:ut(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function us(t,e){return Ui(t,"POST","/v1/accounts:signInWithIdp",jt(t,e))}/**
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
 */const mC="http://localhost";class Un extends sc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Un(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ut("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Xl(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Un(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return us(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,us(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,us(e,n)}buildRequest(){const e={requestUri:mC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Es(n)}return e}}/**
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
 */function vC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function yC(t){const e=js(Gs(t)).link,n=e?js(Gs(e)).deep_link_id:null,s=js(Gs(t)).deep_link_id;return(s?js(Gs(s)).link:null)||s||n||e||t}class ic{constructor(e){var n,s,i,r,o,a;const l=js(Gs(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,h=vC((i=l.mode)!==null&&i!==void 0?i:null);V(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=yC(e);try{return new ic(n)}catch{return null}}}/**
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
 */class Ts{constructor(){this.providerId=Ts.PROVIDER_ID}static credential(e,n){return Ii._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=ic.parseLink(n);return V(s,"argument-error"),Ii._fromEmailAndCode(e,s.code,s.tenantId)}}Ts.PROVIDER_ID="password";Ts.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ts.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class mg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Hi extends mg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class tn extends Hi{constructor(){super("facebook.com")}static credential(e){return Un._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tn.credential(e.oauthAccessToken)}catch{return null}}}tn.FACEBOOK_SIGN_IN_METHOD="facebook.com";tn.PROVIDER_ID="facebook.com";/**
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
 */class nn extends Hi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Un._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return nn.credential(n,s)}catch{return null}}}nn.GOOGLE_SIGN_IN_METHOD="google.com";nn.PROVIDER_ID="google.com";/**
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
 */class sn extends Hi{constructor(){super("github.com")}static credential(e){return Un._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sn.credentialFromTaggedObject(e)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sn.credential(e.oauthAccessToken)}catch{return null}}}sn.GITHUB_SIGN_IN_METHOD="github.com";sn.PROVIDER_ID="github.com";/**
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
 */class rn extends Hi{constructor(){super("twitter.com")}static credential(e,n){return Un._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return rn.credential(n,s)}catch{return null}}}rn.TWITTER_SIGN_IN_METHOD="twitter.com";rn.PROVIDER_ID="twitter.com";/**
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
 */async function EC(t,e){return Ui(t,"POST","/v1/accounts:signUp",jt(t,e))}/**
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
 */class Hn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await xt._fromIdTokenResponse(e,s,i),o=eh(s);return new Hn({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=eh(s);return new Hn({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function eh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ur extends vn{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Ur.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Ur(e,n,s,i)}}function vg(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Ur._fromErrorAndOperation(t,r,e,s):r})}async function bC(t,e,n=!1){const s=await wi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Hn._forOperation(t,"link",s)}/**
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
 */async function wC(t,e,n=!1){const{auth:s}=t;if(vt(s.app))return Promise.reject($t(s));const i="reauthenticate";try{const r=await wi(t,vg(s,i,e,t),n);V(r.idToken,s,"internal-error");const o=tc(r.idToken);V(o,s,"internal-error");const{sub:a}=o;return V(t.uid===a,s,"user-mismatch"),Hn._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&ut(s,"user-mismatch"),r}}/**
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
 */async function yg(t,e,n=!1){if(vt(t.app))return Promise.reject($t(t));const s="signIn",i=await vg(t,s,e),r=await Hn._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function IC(t,e){return yg(yn(t),e)}/**
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
 */async function Eg(t){const e=yn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function CC(t,e,n){const s=yn(t);await Fr(s,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",pC)}async function TC(t,e,n){if(vt(t.app))return Promise.reject($t(t));const s=yn(t),o=await Fr(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",EC).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Eg(t),l}),a=await Hn._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function SC(t,e,n){return vt(t.app)?Promise.reject($t(t)):IC($e(t),Ts.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Eg(t),s})}async function th(t,e){const n=$e(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()},{email:r}=await fC(n.auth,i);r!==t.email&&await t.reload()}/**
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
 */function nh(t,e){return $e(t).setPersistence(e)}function RC(t,e,n,s){return $e(t).onIdTokenChanged(e,n,s)}function AC(t,e,n){return $e(t).beforeAuthStateChanged(e,n)}const Hr="__sak";/**
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
 */class bg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Hr,"1"),this.storage.removeItem(Hr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const PC=1e3,OC=10;class wg extends bg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=hg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);KI()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,OC):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},PC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}wg.type="LOCAL";const Ig=wg;/**
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
 */class Cg extends bg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Cg.type="SESSION";const Tg=Cg;/**
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
 */function NC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class yo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new yo(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await NC(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}yo.receivers=[];/**
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
 */function rc(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class kC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=rc("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function bt(){return window}function xC(t){bt().location.href=t}/**
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
 */function Sg(){return typeof bt().WorkerGlobalScope<"u"&&typeof bt().importScripts=="function"}async function DC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function MC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function LC(){return Sg()?self:null}/**
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
 */const Rg="firebaseLocalStorageDb",$C=1,Wr="firebaseLocalStorage",Ag="fbase_key";class Wi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Eo(t,e){return t.transaction([Wr],e?"readwrite":"readonly").objectStore(Wr)}function FC(){const t=indexedDB.deleteDatabase(Rg);return new Wi(t).toPromise()}function Va(){const t=indexedDB.open(Rg,$C);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Wr,{keyPath:Ag})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Wr)?e(s):(s.close(),await FC(),e(await Va()))})})}async function sh(t,e,n){const s=Eo(t,!0).put({[Ag]:e,value:n});return new Wi(s).toPromise()}async function UC(t,e){const n=Eo(t,!1).get(e),s=await new Wi(n).toPromise();return s===void 0?null:s.value}function ih(t,e){const n=Eo(t,!0).delete(e);return new Wi(n).toPromise()}const HC=800,WC=3;class Pg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Va(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>WC)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Sg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=yo._getInstance(LC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await DC(),!this.activeServiceWorker)return;this.sender=new kC(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||MC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Va();return await sh(e,Hr,"1"),await ih(e,Hr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>sh(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>UC(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ih(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Eo(i,!1).getAll();return new Wi(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),HC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Pg.type="LOCAL";const VC=Pg;new Fi(3e4,6e4);/**
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
 */function BC(t,e){return e?Dt(e):(V(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class oc extends sc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return us(e,this._buildIdpRequest())}_linkToIdToken(e,n){return us(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return us(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function jC(t){return yg(t.auth,new oc(t),t.bypassAuthState)}function GC(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),wC(n,new oc(t),t.bypassAuthState)}async function KC(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),bC(n,new oc(t),t.bypassAuthState)}/**
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
 */class Og{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return jC;case"linkViaPopup":case"linkViaRedirect":return KC;case"reauthViaPopup":case"reauthViaRedirect":return GC;default:ut(this.auth,"internal-error")}}resolve(e){Ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const qC=new Fi(2e3,1e4);class Xn extends Og{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Xn.currentPopupAction&&Xn.currentPopupAction.cancel(),Xn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return V(e,this.auth,"internal-error"),e}async onExecution(){Ht(this.filter.length===1,"Popup operations only handle one event");const e=rc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Et(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Et(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Et(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,qC.get())};e()}}Xn.currentPopupAction=null;/**
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
 */const zC="pendingRedirect",cr=new Map;class YC extends Og{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=cr.get(this.auth._key());if(!e){try{const s=await QC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}cr.set(this.auth._key(),e)}return this.bypassAuthState||cr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function QC(t,e){const n=ZC(e),s=XC(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function JC(t,e){cr.set(t._key(),e)}function XC(t){return Dt(t._redirectPersistence)}function ZC(t){return lr(zC,t.config.apiKey,t.name)}async function eT(t,e,n=!1){if(vt(t.app))return Promise.reject($t(t));const s=yn(t),i=BC(s,e),o=await new YC(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const tT=10*60*1e3;class nT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!sT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Ng(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Et(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=tT&&this.cachedEventUids.clear(),this.cachedEventUids.has(rh(e))}saveEventToCache(e){this.cachedEventUids.add(rh(e)),this.lastProcessedEventTime=Date.now()}}function rh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ng({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function sT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ng(t);default:return!1}}/**
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
 */async function iT(t,e={}){return Gt(t,"GET","/v1/projects",e)}/**
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
 */const rT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,oT=/^https?/;async function aT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await iT(t);for(const n of e)try{if(lT(n))return}catch{}ut(t,"unauthorized-domain")}function lT(t){const e=Ua(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!oT.test(n))return!1;if(rT.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const cT=new Fi(3e4,6e4);function oh(){const t=bt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function uT(t){return new Promise((e,n)=>{var s,i,r;function o(){oh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{oh(),n(Et(t,"network-request-failed"))},timeout:cT.get()})}if(!((i=(s=bt().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=bt().gapi)===null||r===void 0)&&r.load)o();else{const a=tC("iframefcb");return bt()[a]=()=>{gapi.load?o():n(Et(t,"network-request-failed"))},fg(`${eC()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ur=null,e})}let ur=null;function hT(t){return ur=ur||uT(t),ur}/**
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
 */const dT=new Fi(5e3,15e3),fT="__/auth/iframe",pT="emulator/auth/iframe",gT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_T=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function mT(t){const e=t.config;V(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ec(e,pT):`https://${t.config.authDomain}/${fT}`,s={apiKey:e.apiKey,appName:t.name,v:bs},i=_T.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Es(s).slice(1)}`}async function vT(t){const e=await hT(t),n=bt().gapi;return V(n,t,"internal-error"),e.open({where:document.body,url:mT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gT,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Et(t,"network-request-failed"),a=bt().setTimeout(()=>{r(o)},dT.get());function l(){bt().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const yT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ET=500,bT=600,wT="_blank",IT="http://localhost";class ah{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function CT(t,e,n,s=ET,i=bT){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},yT),{width:s.toString(),height:i.toString(),top:r,left:o}),c=Le().toLowerCase();n&&(a=og(c)?wT:n),ig(c)&&(e=e||IT,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[g,m])=>`${d}${g}=${m},`,"");if(GI(c)&&a!=="_self")return TT(e||"",a),new ah(null);const h=window.open(e||"",a,u);V(h,t,"popup-blocked");try{h.focus()}catch{}return new ah(h)}function TT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const ST="__/auth/handler",RT="emulator/auth/handler",AT=encodeURIComponent("fac");async function lh(t,e,n,s,i,r){V(t.config.authDomain,t,"auth-domain-config-required"),V(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:bs,eventId:i};if(e instanceof mg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ea(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries({}))o[u]=h}if(e instanceof Hi){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${AT}=${encodeURIComponent(l)}`:"";return`${PT(t)}?${Es(a).slice(1)}${c}`}function PT({config:t}){return t.emulator?ec(t,RT):`https://${t.authDomain}/${ST}`}/**
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
 */const Zo="webStorageSupport";class OT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Tg,this._completeRedirectFn=eT,this._overrideRedirectResult=JC}async _openPopup(e,n,s,i){var r;Ht((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await lh(e,n,s,Ua(),i);return CT(e,o,rc())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await lh(e,n,s,Ua(),i);return xC(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Ht(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await vT(e),s=new nT(e);return n.register("authEvent",i=>(V(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Zo,{type:Zo},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Zo];o!==void 0&&n(!!o),ut(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=aT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return hg()||rg()||nc()}}const NT=OT;var ch="@firebase/auth",uh="1.8.0";/**
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
 */class kT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){V(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function xT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function DT(t){fs(new Mn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;V(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:dg(t)},c=new JI(s,i,r,l);return aC(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),fs(new Mn("auth-internal",e=>{const n=yn(e.getProvider("auth").getImmediate());return(s=>new kT(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),un(ch,uh,xT(t)),un(ch,uh,"esm2017")}/**
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
 */const MT=5*60,LT=wf("authIdTokenMaxAge")||MT;let hh=null;const $T=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>LT)return;const i=n==null?void 0:n.token;hh!==i&&(hh=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Ci(t=Pf()){const e=bl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=oC(t,{popupRedirectResolver:NT,persistence:[VC,Ig,Tg]}),s=wf("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=$T(r.toString());AC(n,o,()=>o(n.currentUser)),RC(n,a=>o(a))}}const i=Ef("auth");return i&&lC(n,`http://${i}`),n}function FT(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}XI({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Et("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",FT().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});DT("Browser");var UT="firebase",HT="11.0.1";/**
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
 */un(UT,HT,"app");const WT={apiKey:"AIzaSyDU95egjb7rapaUJuVJYu0ZeSbP0OLaeCE",authDomain:"autolearn-members.asia-southeast1.firebaseapp.com",projectId:"autolearn-members",storageBucket:"autolearn-members.appspot.com",messagingSenderId:"535565819374",appId:"1:535565819374:web:ccfe472f513439f3a002ff",measurementId:"G-NTHZSSX71G",databaseURL:"https://autolearn-members-default-rtdb.asia-southeast1.firebasedatabase.app/"},ac=Af(WT);Ci(ac);const bo=II(ac),VT=_o(bo,"projects"),BT=_o(bo,"supervisors"),jT=_o(bo,"users");var Xi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function GT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function KT(t,e,n){var s;return n(t,function(i,r,o){if(e(i,r,o))return s=r,!1}),s}var qT=KT;function zT(t){return function(e,n,s){for(var i=-1,r=Object(e),o=s(e),a=o.length;a--;){var l=o[t?a:++i];if(n(r[l],l,r)===!1)break}return e}}var YT=zT,QT=YT,JT=QT(),XT=JT;function ZT(t,e){for(var n=-1,s=Array(t);++n<t;)s[n]=e(n);return s}var eS=ZT,tS=typeof Xi=="object"&&Xi&&Xi.Object===Object&&Xi,kg=tS,nS=kg,sS=typeof self=="object"&&self&&self.Object===Object&&self,iS=nS||sS||Function("return this")(),Kt=iS,rS=Kt,oS=rS.Symbol,wo=oS,dh=wo,xg=Object.prototype,aS=xg.hasOwnProperty,lS=xg.toString,Ws=dh?dh.toStringTag:void 0;function cS(t){var e=aS.call(t,Ws),n=t[Ws];try{t[Ws]=void 0;var s=!0}catch{}var i=lS.call(t);return s&&(e?t[Ws]=n:delete t[Ws]),i}var uS=cS,hS=Object.prototype,dS=hS.toString;function fS(t){return dS.call(t)}var pS=fS,fh=wo,gS=uS,_S=pS,mS="[object Null]",vS="[object Undefined]",ph=fh?fh.toStringTag:void 0;function yS(t){return t==null?t===void 0?vS:mS:ph&&ph in Object(t)?gS(t):_S(t)}var Vi=yS;function ES(t){return t!=null&&typeof t=="object"}var Bi=ES,bS=Vi,wS=Bi,IS="[object Arguments]";function CS(t){return wS(t)&&bS(t)==IS}var TS=CS,gh=TS,SS=Bi,Dg=Object.prototype,RS=Dg.hasOwnProperty,AS=Dg.propertyIsEnumerable,PS=gh(function(){return arguments}())?gh:function(t){return SS(t)&&RS.call(t,"callee")&&!AS.call(t,"callee")},Mg=PS,OS=Array.isArray,En=OS,Vr={exports:{}};function NS(){return!1}var kS=NS;Vr.exports;(function(t,e){var n=Kt,s=kS,i=e&&!e.nodeType&&e,r=i&&!0&&t&&!t.nodeType&&t,o=r&&r.exports===i,a=o?n.Buffer:void 0,l=a?a.isBuffer:void 0,c=l||s;t.exports=c})(Vr,Vr.exports);var Lg=Vr.exports,xS=9007199254740991,DS=/^(?:0|[1-9]\d*)$/;function MS(t,e){var n=typeof t;return e=e??xS,!!e&&(n=="number"||n!="symbol"&&DS.test(t))&&t>-1&&t%1==0&&t<e}var $g=MS,LS=9007199254740991;function $S(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=LS}var lc=$S,FS=Vi,US=lc,HS=Bi,WS="[object Arguments]",VS="[object Array]",BS="[object Boolean]",jS="[object Date]",GS="[object Error]",KS="[object Function]",qS="[object Map]",zS="[object Number]",YS="[object Object]",QS="[object RegExp]",JS="[object Set]",XS="[object String]",ZS="[object WeakMap]",eR="[object ArrayBuffer]",tR="[object DataView]",nR="[object Float32Array]",sR="[object Float64Array]",iR="[object Int8Array]",rR="[object Int16Array]",oR="[object Int32Array]",aR="[object Uint8Array]",lR="[object Uint8ClampedArray]",cR="[object Uint16Array]",uR="[object Uint32Array]",de={};de[nR]=de[sR]=de[iR]=de[rR]=de[oR]=de[aR]=de[lR]=de[cR]=de[uR]=!0;de[WS]=de[VS]=de[eR]=de[BS]=de[tR]=de[jS]=de[GS]=de[KS]=de[qS]=de[zS]=de[YS]=de[QS]=de[JS]=de[XS]=de[ZS]=!1;function hR(t){return HS(t)&&US(t.length)&&!!de[FS(t)]}var dR=hR;function fR(t){return function(e){return t(e)}}var pR=fR,Br={exports:{}};Br.exports;(function(t,e){var n=kg,s=e&&!e.nodeType&&e,i=s&&!0&&t&&!t.nodeType&&t,r=i&&i.exports===s,o=r&&n.process,a=function(){try{var l=i&&i.require&&i.require("util").types;return l||o&&o.binding&&o.binding("util")}catch{}}();t.exports=a})(Br,Br.exports);var gR=Br.exports,_R=dR,mR=pR,_h=gR,mh=_h&&_h.isTypedArray,vR=mh?mR(mh):_R,Fg=vR,yR=eS,ER=Mg,bR=En,wR=Lg,IR=$g,CR=Fg,TR=Object.prototype,SR=TR.hasOwnProperty;function RR(t,e){var n=bR(t),s=!n&&ER(t),i=!n&&!s&&wR(t),r=!n&&!s&&!i&&CR(t),o=n||s||i||r,a=o?yR(t.length,String):[],l=a.length;for(var c in t)(e||SR.call(t,c))&&!(o&&(c=="length"||i&&(c=="offset"||c=="parent")||r&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||IR(c,l)))&&a.push(c);return a}var AR=RR,PR=Object.prototype;function OR(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||PR;return t===n}var NR=OR;function kR(t,e){return function(n){return t(e(n))}}var xR=kR,DR=xR,MR=DR(Object.keys,Object),LR=MR,$R=NR,FR=LR,UR=Object.prototype,HR=UR.hasOwnProperty;function WR(t){if(!$R(t))return FR(t);var e=[];for(var n in Object(t))HR.call(t,n)&&n!="constructor"&&e.push(n);return e}var VR=WR;function BR(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var cc=BR,jR=Vi,GR=cc,KR="[object AsyncFunction]",qR="[object Function]",zR="[object GeneratorFunction]",YR="[object Proxy]";function QR(t){if(!GR(t))return!1;var e=jR(t);return e==qR||e==zR||e==KR||e==YR}var Ug=QR,JR=Ug,XR=lc;function ZR(t){return t!=null&&XR(t.length)&&!JR(t)}var e0=ZR,t0=AR,n0=VR,s0=e0;function i0(t){return s0(t)?t0(t):n0(t)}var uc=i0,r0=XT,o0=uc;function a0(t,e){return t&&r0(t,e,o0)}var l0=a0;function c0(){this.__data__=[],this.size=0}var u0=c0;function h0(t,e){return t===e||t!==t&&e!==e}var Hg=h0,d0=Hg;function f0(t,e){for(var n=t.length;n--;)if(d0(t[n][0],e))return n;return-1}var Io=f0,p0=Io,g0=Array.prototype,_0=g0.splice;function m0(t){var e=this.__data__,n=p0(e,t);if(n<0)return!1;var s=e.length-1;return n==s?e.pop():_0.call(e,n,1),--this.size,!0}var v0=m0,y0=Io;function E0(t){var e=this.__data__,n=y0(e,t);return n<0?void 0:e[n][1]}var b0=E0,w0=Io;function I0(t){return w0(this.__data__,t)>-1}var C0=I0,T0=Io;function S0(t,e){var n=this.__data__,s=T0(n,t);return s<0?(++this.size,n.push([t,e])):n[s][1]=e,this}var R0=S0,A0=u0,P0=v0,O0=b0,N0=C0,k0=R0;function Ss(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var s=t[e];this.set(s[0],s[1])}}Ss.prototype.clear=A0;Ss.prototype.delete=P0;Ss.prototype.get=O0;Ss.prototype.has=N0;Ss.prototype.set=k0;var Co=Ss,x0=Co;function D0(){this.__data__=new x0,this.size=0}var M0=D0;function L0(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}var $0=L0;function F0(t){return this.__data__.get(t)}var U0=F0;function H0(t){return this.__data__.has(t)}var W0=H0,V0=Kt,B0=V0["__core-js_shared__"],j0=B0,ea=j0,vh=function(){var t=/[^.]+$/.exec(ea&&ea.keys&&ea.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function G0(t){return!!vh&&vh in t}var K0=G0,q0=Function.prototype,z0=q0.toString;function Y0(t){if(t!=null){try{return z0.call(t)}catch{}try{return t+""}catch{}}return""}var Wg=Y0,Q0=Ug,J0=K0,X0=cc,Z0=Wg,eA=/[\\^$.*+?()[\]{}|]/g,tA=/^\[object .+?Constructor\]$/,nA=Function.prototype,sA=Object.prototype,iA=nA.toString,rA=sA.hasOwnProperty,oA=RegExp("^"+iA.call(rA).replace(eA,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function aA(t){if(!X0(t)||J0(t))return!1;var e=Q0(t)?oA:tA;return e.test(Z0(t))}var lA=aA;function cA(t,e){return t==null?void 0:t[e]}var uA=cA,hA=lA,dA=uA;function fA(t,e){var n=dA(t,e);return hA(n)?n:void 0}var Rs=fA,pA=Rs,gA=Kt,_A=pA(gA,"Map"),hc=_A,mA=Rs,vA=mA(Object,"create"),To=vA,yh=To;function yA(){this.__data__=yh?yh(null):{},this.size=0}var EA=yA;function bA(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var wA=bA,IA=To,CA="__lodash_hash_undefined__",TA=Object.prototype,SA=TA.hasOwnProperty;function RA(t){var e=this.__data__;if(IA){var n=e[t];return n===CA?void 0:n}return SA.call(e,t)?e[t]:void 0}var AA=RA,PA=To,OA=Object.prototype,NA=OA.hasOwnProperty;function kA(t){var e=this.__data__;return PA?e[t]!==void 0:NA.call(e,t)}var xA=kA,DA=To,MA="__lodash_hash_undefined__";function LA(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=DA&&e===void 0?MA:e,this}var $A=LA,FA=EA,UA=wA,HA=AA,WA=xA,VA=$A;function As(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var s=t[e];this.set(s[0],s[1])}}As.prototype.clear=FA;As.prototype.delete=UA;As.prototype.get=HA;As.prototype.has=WA;As.prototype.set=VA;var BA=As,Eh=BA,jA=Co,GA=hc;function KA(){this.size=0,this.__data__={hash:new Eh,map:new(GA||jA),string:new Eh}}var qA=KA;function zA(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}var YA=zA,QA=YA;function JA(t,e){var n=t.__data__;return QA(e)?n[typeof e=="string"?"string":"hash"]:n.map}var So=JA,XA=So;function ZA(t){var e=XA(this,t).delete(t);return this.size-=e?1:0,e}var eP=ZA,tP=So;function nP(t){return tP(this,t).get(t)}var sP=nP,iP=So;function rP(t){return iP(this,t).has(t)}var oP=rP,aP=So;function lP(t,e){var n=aP(this,t),s=n.size;return n.set(t,e),this.size+=n.size==s?0:1,this}var cP=lP,uP=qA,hP=eP,dP=sP,fP=oP,pP=cP;function Ps(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var s=t[e];this.set(s[0],s[1])}}Ps.prototype.clear=uP;Ps.prototype.delete=hP;Ps.prototype.get=dP;Ps.prototype.has=fP;Ps.prototype.set=pP;var dc=Ps,gP=Co,_P=hc,mP=dc,vP=200;function yP(t,e){var n=this.__data__;if(n instanceof gP){var s=n.__data__;if(!_P||s.length<vP-1)return s.push([t,e]),this.size=++n.size,this;n=this.__data__=new mP(s)}return n.set(t,e),this.size=n.size,this}var EP=yP,bP=Co,wP=M0,IP=$0,CP=U0,TP=W0,SP=EP;function Os(t){var e=this.__data__=new bP(t);this.size=e.size}Os.prototype.clear=wP;Os.prototype.delete=IP;Os.prototype.get=CP;Os.prototype.has=TP;Os.prototype.set=SP;var Vg=Os,RP="__lodash_hash_undefined__";function AP(t){return this.__data__.set(t,RP),this}var PP=AP;function OP(t){return this.__data__.has(t)}var NP=OP,kP=dc,xP=PP,DP=NP;function jr(t){var e=-1,n=t==null?0:t.length;for(this.__data__=new kP;++e<n;)this.add(t[e])}jr.prototype.add=jr.prototype.push=xP;jr.prototype.has=DP;var MP=jr;function LP(t,e){for(var n=-1,s=t==null?0:t.length;++n<s;)if(e(t[n],n,t))return!0;return!1}var $P=LP;function FP(t,e){return t.has(e)}var UP=FP,HP=MP,WP=$P,VP=UP,BP=1,jP=2;function GP(t,e,n,s,i,r){var o=n&BP,a=t.length,l=e.length;if(a!=l&&!(o&&l>a))return!1;var c=r.get(t),u=r.get(e);if(c&&u)return c==e&&u==t;var h=-1,d=!0,g=n&jP?new HP:void 0;for(r.set(t,e),r.set(e,t);++h<a;){var m=t[h],E=e[h];if(s)var O=o?s(E,m,h,e,t,r):s(m,E,h,t,e,r);if(O!==void 0){if(O)continue;d=!1;break}if(g){if(!WP(e,function(k,P){if(!VP(g,P)&&(m===k||i(m,k,n,s,r)))return g.push(P)})){d=!1;break}}else if(!(m===E||i(m,E,n,s,r))){d=!1;break}}return r.delete(t),r.delete(e),d}var Bg=GP,KP=Kt,qP=KP.Uint8Array,zP=qP;function YP(t){var e=-1,n=Array(t.size);return t.forEach(function(s,i){n[++e]=[i,s]}),n}var QP=YP;function JP(t){var e=-1,n=Array(t.size);return t.forEach(function(s){n[++e]=s}),n}var XP=JP,bh=wo,wh=zP,ZP=Hg,eO=Bg,tO=QP,nO=XP,sO=1,iO=2,rO="[object Boolean]",oO="[object Date]",aO="[object Error]",lO="[object Map]",cO="[object Number]",uO="[object RegExp]",hO="[object Set]",dO="[object String]",fO="[object Symbol]",pO="[object ArrayBuffer]",gO="[object DataView]",Ih=bh?bh.prototype:void 0,ta=Ih?Ih.valueOf:void 0;function _O(t,e,n,s,i,r,o){switch(n){case gO:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case pO:return!(t.byteLength!=e.byteLength||!r(new wh(t),new wh(e)));case rO:case oO:case cO:return ZP(+t,+e);case aO:return t.name==e.name&&t.message==e.message;case uO:case dO:return t==e+"";case lO:var a=tO;case hO:var l=s&sO;if(a||(a=nO),t.size!=e.size&&!l)return!1;var c=o.get(t);if(c)return c==e;s|=iO,o.set(t,e);var u=eO(a(t),a(e),s,i,r,o);return o.delete(t),u;case fO:if(ta)return ta.call(t)==ta.call(e)}return!1}var mO=_O;function vO(t,e){for(var n=-1,s=e.length,i=t.length;++n<s;)t[i+n]=e[n];return t}var yO=vO,EO=yO,bO=En;function wO(t,e,n){var s=e(t);return bO(t)?s:EO(s,n(t))}var IO=wO;function CO(t,e){for(var n=-1,s=t==null?0:t.length,i=0,r=[];++n<s;){var o=t[n];e(o,n,t)&&(r[i++]=o)}return r}var TO=CO;function SO(){return[]}var RO=SO,AO=TO,PO=RO,OO=Object.prototype,NO=OO.propertyIsEnumerable,Ch=Object.getOwnPropertySymbols,kO=Ch?function(t){return t==null?[]:(t=Object(t),AO(Ch(t),function(e){return NO.call(t,e)}))}:PO,xO=kO,DO=IO,MO=xO,LO=uc;function $O(t){return DO(t,LO,MO)}var FO=$O,Th=FO,UO=1,HO=Object.prototype,WO=HO.hasOwnProperty;function VO(t,e,n,s,i,r){var o=n&UO,a=Th(t),l=a.length,c=Th(e),u=c.length;if(l!=u&&!o)return!1;for(var h=l;h--;){var d=a[h];if(!(o?d in e:WO.call(e,d)))return!1}var g=r.get(t),m=r.get(e);if(g&&m)return g==e&&m==t;var E=!0;r.set(t,e),r.set(e,t);for(var O=o;++h<l;){d=a[h];var k=t[d],P=e[d];if(s)var M=o?s(P,k,d,e,t,r):s(k,P,d,t,e,r);if(!(M===void 0?k===P||i(k,P,n,s,r):M)){E=!1;break}O||(O=d=="constructor")}if(E&&!O){var x=t.constructor,z=e.constructor;x!=z&&"constructor"in t&&"constructor"in e&&!(typeof x=="function"&&x instanceof x&&typeof z=="function"&&z instanceof z)&&(E=!1)}return r.delete(t),r.delete(e),E}var BO=VO,jO=Rs,GO=Kt,KO=jO(GO,"DataView"),qO=KO,zO=Rs,YO=Kt,QO=zO(YO,"Promise"),JO=QO,XO=Rs,ZO=Kt,eN=XO(ZO,"Set"),tN=eN,nN=Rs,sN=Kt,iN=nN(sN,"WeakMap"),rN=iN,Ba=qO,ja=hc,Ga=JO,Ka=tN,qa=rN,jg=Vi,Ns=Wg,Sh="[object Map]",oN="[object Object]",Rh="[object Promise]",Ah="[object Set]",Ph="[object WeakMap]",Oh="[object DataView]",aN=Ns(Ba),lN=Ns(ja),cN=Ns(Ga),uN=Ns(Ka),hN=Ns(qa),Rn=jg;(Ba&&Rn(new Ba(new ArrayBuffer(1)))!=Oh||ja&&Rn(new ja)!=Sh||Ga&&Rn(Ga.resolve())!=Rh||Ka&&Rn(new Ka)!=Ah||qa&&Rn(new qa)!=Ph)&&(Rn=function(t){var e=jg(t),n=e==oN?t.constructor:void 0,s=n?Ns(n):"";if(s)switch(s){case aN:return Oh;case lN:return Sh;case cN:return Rh;case uN:return Ah;case hN:return Ph}return e});var dN=Rn,na=Vg,fN=Bg,pN=mO,gN=BO,Nh=dN,kh=En,xh=Lg,_N=Fg,mN=1,Dh="[object Arguments]",Mh="[object Array]",Zi="[object Object]",vN=Object.prototype,Lh=vN.hasOwnProperty;function yN(t,e,n,s,i,r){var o=kh(t),a=kh(e),l=o?Mh:Nh(t),c=a?Mh:Nh(e);l=l==Dh?Zi:l,c=c==Dh?Zi:c;var u=l==Zi,h=c==Zi,d=l==c;if(d&&xh(t)){if(!xh(e))return!1;o=!0,u=!1}if(d&&!u)return r||(r=new na),o||_N(t)?fN(t,e,n,s,i,r):pN(t,e,l,n,s,i,r);if(!(n&mN)){var g=u&&Lh.call(t,"__wrapped__"),m=h&&Lh.call(e,"__wrapped__");if(g||m){var E=g?t.value():t,O=m?e.value():e;return r||(r=new na),i(E,O,n,s,r)}}return d?(r||(r=new na),gN(t,e,n,s,i,r)):!1}var EN=yN,bN=EN,$h=Bi;function Gg(t,e,n,s,i){return t===e?!0:t==null||e==null||!$h(t)&&!$h(e)?t!==t&&e!==e:bN(t,e,n,s,Gg,i)}var Kg=Gg,wN=Vg,IN=Kg,CN=1,TN=2;function SN(t,e,n,s){var i=n.length,r=i,o=!s;if(t==null)return!r;for(t=Object(t);i--;){var a=n[i];if(o&&a[2]?a[1]!==t[a[0]]:!(a[0]in t))return!1}for(;++i<r;){a=n[i];var l=a[0],c=t[l],u=a[1];if(o&&a[2]){if(c===void 0&&!(l in t))return!1}else{var h=new wN;if(s)var d=s(c,u,l,t,e,h);if(!(d===void 0?IN(u,c,CN|TN,s,h):d))return!1}}return!0}var RN=SN,AN=cc;function PN(t){return t===t&&!AN(t)}var qg=PN,ON=qg,NN=uc;function kN(t){for(var e=NN(t),n=e.length;n--;){var s=e[n],i=t[s];e[n]=[s,i,ON(i)]}return e}var xN=kN;function DN(t,e){return function(n){return n==null?!1:n[t]===e&&(e!==void 0||t in Object(n))}}var zg=DN,MN=RN,LN=xN,$N=zg;function FN(t){var e=LN(t);return e.length==1&&e[0][2]?$N(e[0][0],e[0][1]):function(n){return n===t||MN(n,t,e)}}var UN=FN,HN=Vi,WN=Bi,VN="[object Symbol]";function BN(t){return typeof t=="symbol"||WN(t)&&HN(t)==VN}var fc=BN,jN=En,GN=fc,KN=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,qN=/^\w*$/;function zN(t,e){if(jN(t))return!1;var n=typeof t;return n=="number"||n=="symbol"||n=="boolean"||t==null||GN(t)?!0:qN.test(t)||!KN.test(t)||e!=null&&t in Object(e)}var pc=zN,Yg=dc,YN="Expected a function";function gc(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(YN);var n=function(){var s=arguments,i=e?e.apply(this,s):s[0],r=n.cache;if(r.has(i))return r.get(i);var o=t.apply(this,s);return n.cache=r.set(i,o)||r,o};return n.cache=new(gc.Cache||Yg),n}gc.Cache=Yg;var QN=gc,JN=QN,XN=500;function ZN(t){var e=JN(t,function(s){return n.size===XN&&n.clear(),s}),n=e.cache;return e}var ek=ZN,tk=ek,nk=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,sk=/\\(\\)?/g,ik=tk(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(nk,function(n,s,i,r){e.push(i?r.replace(sk,"$1"):s||n)}),e}),rk=ik;function ok(t,e){for(var n=-1,s=t==null?0:t.length,i=Array(s);++n<s;)i[n]=e(t[n],n,t);return i}var ak=ok,Fh=wo,lk=ak,ck=En,uk=fc,hk=1/0,Uh=Fh?Fh.prototype:void 0,Hh=Uh?Uh.toString:void 0;function Qg(t){if(typeof t=="string")return t;if(ck(t))return lk(t,Qg)+"";if(uk(t))return Hh?Hh.call(t):"";var e=t+"";return e=="0"&&1/t==-hk?"-0":e}var dk=Qg,fk=dk;function pk(t){return t==null?"":fk(t)}var gk=pk,_k=En,mk=pc,vk=rk,yk=gk;function Ek(t,e){return _k(t)?t:mk(t,e)?[t]:vk(yk(t))}var Jg=Ek,bk=fc,wk=1/0;function Ik(t){if(typeof t=="string"||bk(t))return t;var e=t+"";return e=="0"&&1/t==-wk?"-0":e}var Ro=Ik,Ck=Jg,Tk=Ro;function Sk(t,e){e=Ck(e,t);for(var n=0,s=e.length;t!=null&&n<s;)t=t[Tk(e[n++])];return n&&n==s?t:void 0}var Xg=Sk,Rk=Xg;function Ak(t,e,n){var s=t==null?void 0:Rk(t,e);return s===void 0?n:s}var Pk=Ak;function Ok(t,e){return t!=null&&e in Object(t)}var Nk=Ok,kk=Jg,xk=Mg,Dk=En,Mk=$g,Lk=lc,$k=Ro;function Fk(t,e,n){e=kk(e,t);for(var s=-1,i=e.length,r=!1;++s<i;){var o=$k(e[s]);if(!(r=t!=null&&n(t,o)))break;t=t[o]}return r||++s!=i?r:(i=t==null?0:t.length,!!i&&Lk(i)&&Mk(o,i)&&(Dk(t)||xk(t)))}var Uk=Fk,Hk=Nk,Wk=Uk;function Vk(t,e){return t!=null&&Wk(t,e,Hk)}var Bk=Vk,jk=Kg,Gk=Pk,Kk=Bk,qk=pc,zk=qg,Yk=zg,Qk=Ro,Jk=1,Xk=2;function Zk(t,e){return qk(t)&&zk(e)?Yk(Qk(t),e):function(n){var s=Gk(n,t);return s===void 0&&s===e?Kk(n,t):jk(e,s,Jk|Xk)}}var e1=Zk;function t1(t){return t}var n1=t1;function s1(t){return function(e){return e==null?void 0:e[t]}}var i1=s1,r1=Xg;function o1(t){return function(e){return r1(e,t)}}var a1=o1,l1=i1,c1=a1,u1=pc,h1=Ro;function d1(t){return u1(t)?l1(h1(t)):c1(t)}var f1=d1,p1=UN,g1=e1,_1=n1,m1=En,v1=f1;function y1(t){return typeof t=="function"?t:t==null?_1:typeof t=="object"?m1(t)?g1(t[0],t[1]):p1(t):v1(t)}var E1=y1,b1=qT,w1=l0,I1=E1;function C1(t,e){return b1(t,I1(e),w1)}var T1=C1,S1=function(){function t(e,n){for(var s=0;s<n.length;s++){var i=n[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,s){return n&&t(e.prototype,n),s&&t(e,s),e}}();function R1(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var A1=T1,P1={messenger:/\bFB[\w_]+\/(Messenger|MESSENGER)/,facebook:/\bFB[\w_]+\//,twitter:/\bTwitter/i,line:/\bLine\//i,wechat:/\bMicroMessenger\//i,puffin:/\bPuffin/i,miui:/\bMiuiBrowser\//i,instagram:/\bInstagram/i,chrome:/\bCrMo\b|CriOS|Android.*Chrome\/[.0-9]* (Mobile)?/,safari:/Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari/,ie:/IEMobile|MSIEMobile/,firefox:/fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS/},O1=function(){function t(e){R1(this,t),this.ua="",this.ua=e}return S1(t,[{key:"browser",get:function(){var n=this;return A1(P1,function(s){return s.test(n.ua)})||"other"}},{key:"isMobile",get:function(){return/(iPad|iPhone|Android|Mobile)/i.test(this.ua)||!1}},{key:"isDesktop",get:function(){return!this.isMobile}},{key:"isInApp",get:function(){var n=["WebView","(iPhone|iPod|iPad)(?!.*Safari/)","Android.*(wv|.0.0.0)"],s=new RegExp("("+n.join("|")+")","ig");return!!this.ua.match(s)}}]),t}(),N1=O1;const k1=GT(N1),x1=Pi({name:"LoginBox",props:{isInApp:{type:Boolean,required:!0},showLogin:{type:Boolean,required:!0}},setup(t,{emit:e}){const n=an(""),s=an(""),i=an(!1);Js(i,u=>{localStorage.setItem("keeploggedin",JSON.stringify(u))}),hl(()=>{const u=localStorage.getItem("keeploggedin");u!==null&&(i.value=JSON.parse(u))});const r=()=>{e("toggleLogin")},o=u=>{const h=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,d=/@alearn.org.tw$/;return h.test(String(u).toLowerCase())&&d.test(String(u).toLowerCase())};return{users_email:n,user_password:s,keeploggedin:i,toggleLogin:r,registerWithEmail:()=>{if(console.log("users_email:",n.value),console.log("user_password:",s.value),console.log("Register clicked"),!n.value||!s.value){window.alert("請先填寫email和密碼");return}if(!s.value||typeof s.value!="string"){alert("密碼請至少包含一個英文字，請重新輸入");return}e("registerWithEmail",n.value,s.value,i.value)},loginWithEmail:()=>{let u=!0;console.log("Login clicked");const h=window.location.pathname;if((h==="/friends"||h==="/maps"||h==="/privacy-policy"||h.startsWith("/flag")||h.startsWith("/group"))&&(u=!1),!s.value||typeof s.value!="string"){alert("密碼無效，請重新輸入");return}e("loginWithEmail",u,n.value,s.value,i.value)},resetPassword:()=>{if(console.log("Reset password function triggered"),console.log("Email for reset:",n.value),!o(n.value)){alert("請先輸入有效的電子郵件地址");return}const u=Ci();console.log("Firebase auth object:",u),CC(u,n.value).then(()=>{alert("密碼重置郵件已發送，請檢查您的電子郵件信箱"),console.log("Password reset email sent successfully")}).catch(h=>{switch(console.error("密碼重置郵件發送失敗：",h.code,h.message),h.code){case"auth/invalid-email":alert("無效的電子郵件地址");break;case"auth/user-not-found":alert("找不到該電子郵件對應的帳號");break;default:alert("密碼重置郵件發送失敗，請稍後再試")}})}}}}),D1={class:"ui middle aligned center aligned grid",id:"login-main",style:{height:"100vh"}},M1={class:"column",style:{"max-width":"420px"}},L1={class:"ui raised segment"},$1={key:0,class:"ui error message"},F1={class:"ui form segment",style:{"border-radius":"10px",padding:"15px","background-color":"#f0f0f0"}},U1={class:"field"},H1={class:"ui left icon input"},W1={class:"field"},V1={class:"ui left icon input"},B1={class:"ui large form"},j1={class:"ui segment",style:{border:"none","padding-top":"10px"}},G1={class:"field"};function K1(t,e,n,s,i,r){return xe(),qe("div",{class:"ui dimmer modals visible active clickable",id:"login-bg",style:{background:"rgba(0, 0, 0, 0.6)"},onClick:e[9]||(e[9]=o=>t.toggleLogin())},[$("div",D1,[$("div",M1,[$("div",L1,[t.isInApp?(xe(),qe("div",$1,"本系統不支援facebook, line等app內部瀏覽，請用一般瀏覽器開啟，方可登入，謝謝")):ma("",!0),e[14]||(e[14]=$("h2",{class:"ui black header",style:{"font-size":"1.5rem","font-weight":"600"}},"登入您的帳號",-1)),$("form",F1,[$("div",U1,[$("div",H1,[e[10]||(e[10]=$("i",{class:"envelope icon"},null,-1)),Do($("input",{type:"text",name:"email",placeholder:"E-mail address",style:{"font-size":"14px"},"onUpdate:modelValue":e[0]||(e[0]=o=>t.users_email=o),onClick:e[1]||(e[1]=Ls(()=>{},["stop"]))},null,512),[[Jc,t.users_email]])])]),$("div",W1,[$("div",V1,[e[11]||(e[11]=$("i",{class:"lock icon"},null,-1)),Do($("input",{type:"password",name:"user_password",placeholder:"Password",style:{"font-size":"14px"},"onUpdate:modelValue":e[2]||(e[2]=o=>t.user_password=o),autocomplete:"",onClick:e[3]||(e[3]=Ls(()=>{},["stop"]))},null,512),[[Jc,t.user_password]])])]),$("div",{class:kn(["ui fluid large button",{disabled:t.isInApp}]),onClick:e[4]||(e[4]=Ls((...o)=>t.loginWithEmail&&t.loginWithEmail(...o),["prevent"])),style:{"background-color":"#e47e10",color:"white","font-weight":"bold"}},"登入",2),$("a",{class:"small forgot-password",onClick:e[5]||(e[5]=(...o)=>t.resetPassword&&t.resetPassword(...o))},"忘記密碼")]),$("form",B1,[$("div",j1,[$("div",G1,[$("div",{class:"ui checkbox",onClick:e[7]||(e[7]=Ls(()=>{},["stop"]))},[Do($("input",{type:"checkbox","onUpdate:modelValue":e[6]||(e[6]=o=>t.keeploggedin=o)},null,512),[[Sv,t.keeploggedin]]),e[12]||(e[12]=$("label",null,"保持登入狀態",-1))])])]),$("p",null,[e[13]||(e[13]=Xt("新用戶？按此")),$("button",{class:kn(["ui large basic button",{disabled:t.isInApp}]),id:"register-btn",onClick:e[8]||(e[8]=Ls((...o)=>t.registerWithEmail&&t.registerWithEmail(...o),["stop","prevent"]))},"註冊",2)])])])])])])}const _c=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},q1=_c(x1,[["render",K1],["__scopeId","data-v-f5e0e55f"]]),z1=new k1(window.navigator.userAgent),Y1=z1.isInApp,er=Ci(ac),Q1=Pi({name:"App",components:{Login:q1},data(){return{isInApp:Y1,showLogin:!1,sidebarVisible:!1,uid:"",users:{},user:{},photoURL:"",email:"",emailVerified:!1}},methods:{toggleLogin(){this.showLogin=!this.showLogin},toggleSidebar(){this.sidebarVisible=!this.sidebarVisible},logout(){const t=this;er.signOut().then(function(){t.user=null,t.users={},t.uid="",t.photoURL="",t.$nextTick().then(()=>{t.$router.push("/")})})},async registerWithEmail(t,e,n){var s,i;if(!e||typeof e!="string"){alert("接收的密碼無效，請確認輸入");return}try{const r=Ci(),a=(await TC(r,t,e)).user;if(a&&a.email){this.email=a.email,this.uid=a.uid,this.photoURL="https://we.alearn.org.tw/logo-new.png";const l=[{displayName:((s=this.email)==null?void 0:s.split("@")[0])||"Unknown",email:this.email,photoURL:this.photoURL}];this.user={email:this.email,photoURL:this.photoURL,providerData:l};const c=_o(bo,"users/"+this.uid);(await pI(c)).exists()||await fI(c,{email:this.email,name:((i=this.email)==null?void 0:i.split("@")[0])||"Unknown",connect_me:this.email,photoURL:this.photoURL,login_method:"email"}),await th(a),alert("驗證郵件已發送，請檢查您的郵箱(含垃圾信箱)以完成驗證。"),this.logout()}else console.error("User or user email is undefined after registration"),alert("註冊過程中發生錯誤，請稍後再試。")}catch(r){r.code==="auth/email-already-in-use"?alert("此電子郵件已被使用，請使用其他電子郵件或嘗試登入。"):(console.error("註冊失敗：",r),alert("註冊失敗："+r.message))}},async loginWithEmail(t,e,n,s){try{s?await nh(er,Ig):await nh(er,Wa);const r=(await SC(er,e,n)).user;if(!r.emailVerified){alert("您的電子郵件尚未驗證，請檢查您的郵箱並完成驗證。"),this.resendVerificationEmail(),this.logout();return}this.emailVerified=!0,console.log("登入成功：",r),this.updateUserData(r),t&&r.emailVerified&&this.$nextTick().then(()=>{this.$router.push("/profile")})}catch(i){console.error("登入失敗：",i);let r="登入失敗：";i.message.includes("auth/wrong-password")?r="密碼錯誤，請檢查後再試。":i.message.includes("auth/user-not-found")?r="帳號不存在，請確認您的電子郵件地址。":i.message.includes("auth/invalid-email")?r="無效的電子郵件地址，請重新輸入。":i.message.includes("auth/too-many-requests")?r="嘗試次數過多，請稍後再試。":r+=i.message,alert(r)}},resendVerificationEmail(){const t=Ci().currentUser;t&&th(t).then(()=>{console.log("驗證郵件已重新發送。")}).catch(e=>{console.error("重新發送驗證郵件失敗：",e)})},updateUserData(t){var n;if(!t){console.error("User is undefined in updateUserData");return}this.email=t.email||null,this.uid=t.uid,this.photoURL=t.photoURL?decodeURI(t.photoURL):"https://we.alearn.org.tw/logo-new.png",this.emailVerified=t.emailVerified;const e=t.providerData||[{displayName:((n=this.email)==null?void 0:n.split("@")[0])||"Unknown",email:this.email,photoURL:this.photoURL}];this.updateUserInfo(e)},updateUserInfo(t){this.users&&this.uid&&this.users[this.uid]?this.user={...this.users[this.uid],providerData:t}:this.fetchUserData(t)},async fetchUserData(t){try{$a(jT,e=>{const n=e.val();this.users=n,this.uid&&this.users&&this.users[this.uid]?this.user={...this.users[this.uid],providerData:t}:this.user={providerData:t}},e=>{this.user={providerData:t},console.error("Error fetching users:",e)})}catch(e){console.error("Error fetching user data:",e)}}}}),J1={class:"ui fixed top menu"},X1={class:"right menu"},Z1={key:1,class:"ui simple dropdown item"},ex=["src"],tx={key:1,class:"user icon"},nx={class:"menu"},sx={class:"ui container"};function ix(t,e,n,s,i,r){const o=zi("RouterLink"),a=zi("router-link"),l=zi("RouterView"),c=zi("Login");return xe(),qe(st,null,[$("header",null,[$("nav",J1,[$("button",{class:"no-border ui item",onClick:e[0]||(e[0]=(...u)=>t.toggleSidebar&&t.toggleSidebar(...u))},e[6]||(e[6]=[$("i",{class:"icon bars"},null,-1)])),me(o,{class:"item",to:"/"},{default:Yn(()=>e[7]||(e[7]=[$("i",{class:"home icon"},null,-1)])),_:1}),me(o,{class:"item",to:"/about"},{default:Yn(()=>e[8]||(e[8]=[$("i",{class:"info icon"},null,-1),Xt("關於我們")])),_:1}),$("div",X1,[t.uid?(xe(),qe("div",Z1,[t.photoURL?(xe(),qe("img",{key:0,class:"ui avatar image",src:t.photoURL,alt:"User Avatar",onError:e[2]||(e[2]=(...u)=>t.useDefaultAvatar&&t.useDefaultAvatar(...u)),onLoad:e[3]||(e[3]=(...u)=>t.onImageLoad&&t.onImageLoad(...u))},null,40,ex)):(xe(),qe("i",tx)),$("div",nx,[me(a,{class:"item",to:"/profile"},{default:Yn(()=>e[10]||(e[10]=[$("i",{class:"flag icon"},null,-1),Xt("我的旗幟")])),_:1}),t.uid?(xe(),qe("button",{key:0,class:"no-border ui item",onClick:e[4]||(e[4]=(...u)=>t.logout&&t.logout(...u))},e[11]||(e[11]=[$("i",{class:"sign-out icon"},null,-1),Xt("登出")]))):ma("",!0)])])):(xe(),qe("button",{key:0,class:"no-border ui item",onClick:e[1]||(e[1]=(...u)=>t.toggleLogin&&t.toggleLogin(...u))},e[9]||(e[9]=[$("i",{class:"user icon"},null,-1),Xt("登入")])))])])]),e[14]||(e[14]=$("div",{class:"small-spacer"},null,-1)),$("div",{class:kn(["ui sidebar vertical menu",{hidden:!t.sidebarVisible}]),id:"side-menu"},[me(o,{class:"item",to:"/",exact:"",name:"home"},{default:Yn(()=>e[12]||(e[12]=[$("i",{class:"home icon"},null,-1),Xt("首頁")])),_:1}),me(o,{class:"item",to:"/about",name:"about"},{default:Yn(()=>e[13]||(e[13]=[$("i",{class:"info icon"},null,-1),Xt("關於我們")])),_:1})],2),$("div",{class:kn(["ui sidebar bg",{hidden:!t.sidebarVisible}]),onClick:e[5]||(e[5]=(...u)=>t.toggleSidebar&&t.toggleSidebar(...u))},null,2),$("div",sx,[me(l,{onToggleLogin:t.toggleLogin},null,8,["onToggleLogin"])]),t.showLogin?(xe(),cf(c,{key:0,showLogin:t.showLogin,isInApp:!1,onToggleLogin:t.toggleLogin,onLogout:t.logout,onRegisterWithEmail:t.registerWithEmail,onLoginWithEmail:t.loginWithEmail,onResendVerificationEmail:t.resendVerificationEmail},null,8,["showLogin","onToggleLogin","onLogout","onRegisterWithEmail","onLoginWithEmail","onResendVerificationEmail"])):ma("",!0)],64)}const rx=_c(Q1,[["render",ix],["__scopeId","data-v-f62c68ce"]]),ox="modulepreload",ax=function(t){return"/"+t},Wh={},lx=function(e,n,s){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(n.map(l=>{if(l=ax(l),l in Wh)return;Wh[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const h=document.createElement("link");if(h.rel=c?"stylesheet":ox,c||(h.as="script"),h.crossOrigin="",h.href=l,a&&h.setAttribute("nonce",a),document.head.appendChild(h),c)return new Promise((d,g)=>{h.addEventListener("load",d),h.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})};/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Qn=typeof document<"u";function Zg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function cx(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Zg(t.default)}const ne=Object.assign;function sa(t,e){const n={};for(const s in e){const i=e[s];n[s]=ht(i)?i.map(t):t(i)}return n}const ri=()=>{},ht=Array.isArray,e_=/#/g,ux=/&/g,hx=/\//g,dx=/=/g,fx=/\?/g,t_=/\+/g,px=/%5B/g,gx=/%5D/g,n_=/%5E/g,_x=/%60/g,s_=/%7B/g,mx=/%7C/g,i_=/%7D/g,vx=/%20/g;function mc(t){return encodeURI(""+t).replace(mx,"|").replace(px,"[").replace(gx,"]")}function yx(t){return mc(t).replace(s_,"{").replace(i_,"}").replace(n_,"^")}function za(t){return mc(t).replace(t_,"%2B").replace(vx,"+").replace(e_,"%23").replace(ux,"%26").replace(_x,"`").replace(s_,"{").replace(i_,"}").replace(n_,"^")}function Ex(t){return za(t).replace(dx,"%3D")}function bx(t){return mc(t).replace(e_,"%23").replace(fx,"%3F")}function wx(t){return t==null?"":bx(t).replace(hx,"%2F")}function Ti(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Ix=/\/$/,Cx=t=>t.replace(Ix,"");function ia(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=Ax(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:Ti(o)}}function Tx(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Vh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Sx(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&ms(e.matched[s],n.matched[i])&&r_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ms(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function r_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Rx(t[n],e[n]))return!1;return!0}function Rx(t,e){return ht(t)?Bh(t,e):ht(e)?Bh(e,t):t===e}function Bh(t,e){return ht(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Ax(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o).join("/")}const Qt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Si;(function(t){t.pop="pop",t.push="push"})(Si||(Si={}));var oi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(oi||(oi={}));function Px(t){if(!t)if(Qn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Cx(t)}const Ox=/^[^#]+#/;function Nx(t,e){return t.replace(Ox,"#")+e}function kx(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Ao=()=>({left:window.scrollX,top:window.scrollY});function xx(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=kx(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function jh(t,e){return(history.state?history.state.position-e:-1)+t}const Ya=new Map;function Dx(t,e){Ya.set(t,e)}function Mx(t){const e=Ya.get(t);return Ya.delete(t),e}let Lx=()=>location.protocol+"//"+location.host;function o_(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),Vh(l,"")}return Vh(n,t)+s+i}function $x(t,e,n,s){let i=[],r=[],o=null;const a=({state:d})=>{const g=o_(t,location),m=n.value,E=e.value;let O=0;if(d){if(n.value=g,e.value=d,o&&o===m){o=null;return}O=E?d.position-E.position:0}else s(g);i.forEach(k=>{k(n.value,m,{delta:O,type:Si.pop,direction:O?O>0?oi.forward:oi.back:oi.unknown})})};function l(){o=n.value}function c(d){i.push(d);const g=()=>{const m=i.indexOf(d);m>-1&&i.splice(m,1)};return r.push(g),g}function u(){const{history:d}=window;d.state&&d.replaceState(ne({},d.state,{scroll:Ao()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function Gh(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?Ao():null}}function Fx(t){const{history:e,location:n}=window,s={value:o_(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:Lx()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),i.value=c}catch(g){console.error(g),n[u?"replace":"assign"](d)}}function o(l,c){const u=ne({},e.state,Gh(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=ne({},i.value,e.state,{forward:l,scroll:Ao()});r(u.current,u,!0);const h=ne({},Gh(s.value,l,null),{position:u.position+1},c);r(l,h,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function Ux(t){t=Px(t);const e=Fx(t),n=$x(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=ne({location:"",base:t,go:s,createHref:Nx.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function Hx(t){return typeof t=="string"||t&&typeof t=="object"}function a_(t){return typeof t=="string"||typeof t=="symbol"}const l_=Symbol("");var Kh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Kh||(Kh={}));function vs(t,e){return ne(new Error,{type:t,[l_]:!0},e)}function Rt(t,e){return t instanceof Error&&l_ in t&&(e==null||!!(t.type&e))}const qh="[^/]+?",Wx={sensitive:!1,strict:!1,start:!0,end:!0},Vx=/[.+*?^${}()[\]/\\]/g;function Bx(t,e){const n=ne({},Wx,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const d=c[h];let g=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(Vx,"\\$&"),g+=40;else if(d.type===1){const{value:m,repeatable:E,optional:O,regexp:k}=d;r.push({name:m,repeatable:E,optional:O});const P=k||qh;if(P!==qh){g+=10;try{new RegExp(`(${P})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${m}" (${P}): `+x.message)}}let M=E?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;h||(M=O&&c.length<2?`(?:/${M})`:"/"+M),O&&(M+="?"),i+=M,g+=20,O&&(g+=-8),E&&(g+=-20),P===".*"&&(g+=-50)}u.push(g)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const g=u[d]||"",m=r[d-1];h[m.name]=g&&m.repeatable?g.split("/"):g}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of d)if(g.type===0)u+=g.value;else if(g.type===1){const{value:m,repeatable:E,optional:O}=g,k=m in c?c[m]:"";if(ht(k)&&!E)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const P=ht(k)?k.join("/"):k;if(!P)if(O)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=P}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function jx(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function c_(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=jx(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(zh(s))return 1;if(zh(i))return-1}return i.length-s.length}function zh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Gx={type:0,value:""},Kx=/[a-zA-Z0-9_]/;function qx(t){if(!t)return[[]];if(t==="/")return[[Gx]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${c}": ${g}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:l==="("?n=2:Kx.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function zx(t,e,n){const s=Bx(qx(t.path),n),i=ne(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function Yx(t,e){const n=[],s=new Map;e=Xh({strict:!1,end:!0,sensitive:!1},e);function i(h){return s.get(h)}function r(h,d,g){const m=!g,E=Qh(h);E.aliasOf=g&&g.record;const O=Xh(e,h),k=[E];if("alias"in h){const x=typeof h.alias=="string"?[h.alias]:h.alias;for(const z of x)k.push(Qh(ne({},E,{components:g?g.record.components:E.components,path:z,aliasOf:g?g.record:E})))}let P,M;for(const x of k){const{path:z}=x;if(d&&z[0]!=="/"){const _e=d.record.path,ae=_e[_e.length-1]==="/"?"":"/";x.path=d.record.path+(z&&ae+z)}if(P=zx(x,d,O),g?g.alias.push(P):(M=M||P,M!==P&&M.alias.push(P),m&&h.name&&!Jh(P)&&o(h.name)),u_(P)&&l(P),E.children){const _e=E.children;for(let ae=0;ae<_e.length;ae++)r(_e[ae],P,g&&g.children[ae])}g=g||P}return M?()=>{o(M)}:ri}function o(h){if(a_(h)){const d=s.get(h);d&&(s.delete(h),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(h);d>-1&&(n.splice(d,1),h.record.name&&s.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function a(){return n}function l(h){const d=Xx(h,n);n.splice(d,0,h),h.record.name&&!Jh(h)&&s.set(h.record.name,h)}function c(h,d){let g,m={},E,O;if("name"in h&&h.name){if(g=s.get(h.name),!g)throw vs(1,{location:h});O=g.record.name,m=ne(Yh(d.params,g.keys.filter(M=>!M.optional).concat(g.parent?g.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),h.params&&Yh(h.params,g.keys.map(M=>M.name))),E=g.stringify(m)}else if(h.path!=null)E=h.path,g=n.find(M=>M.re.test(E)),g&&(m=g.parse(E),O=g.record.name);else{if(g=d.name?s.get(d.name):n.find(M=>M.re.test(d.path)),!g)throw vs(1,{location:h,currentLocation:d});O=g.record.name,m=ne({},d.params,h.params),E=g.stringify(m)}const k=[];let P=g;for(;P;)k.unshift(P.record),P=P.parent;return{name:O,path:E,params:m,matched:k,meta:Jx(k)}}t.forEach(h=>r(h));function u(){n.length=0,s.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:i}}function Yh(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Qh(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Qx(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Qx(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function Jh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Jx(t){return t.reduce((e,n)=>ne(e,n.meta),{})}function Xh(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Xx(t,e){let n=0,s=e.length;for(;n!==s;){const r=n+s>>1;c_(t,e[r])<0?s=r:n=r+1}const i=Zx(t);return i&&(s=e.lastIndexOf(i,s-1)),s}function Zx(t){let e=t;for(;e=e.parent;)if(u_(e)&&c_(t,e)===0)return e}function u_({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function eD(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(t_," "),o=r.indexOf("="),a=Ti(o<0?r:r.slice(0,o)),l=o<0?null:Ti(r.slice(o+1));if(a in e){let c=e[a];ht(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Zh(t){let e="";for(let n in t){const s=t[n];if(n=Ex(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(ht(s)?s.map(r=>r&&za(r)):[s&&za(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function tD(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=ht(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const nD=Symbol(""),ed=Symbol(""),vc=Symbol(""),h_=Symbol(""),Qa=Symbol("");function Vs(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function en(t,e,n,s,i,r=o=>o()){const o=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(vs(4,{from:n,to:e})):d instanceof Error?l(d):Hx(d)?l(vs(2,{from:e,to:d})):(o&&s.enterCallbacks[i]===o&&typeof d=="function"&&o.push(d),a())},u=r(()=>t.call(s&&s.instances[i],e,n,c));let h=Promise.resolve(u);t.length<3&&(h=h.then(c)),h.catch(d=>l(d))})}function ra(t,e,n,s,i=r=>r()){const r=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Zg(l)){const u=(l.__vccOpts||l)[e];u&&r.push(en(u,n,s,o,a,i))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const h=cx(u)?u.default:u;o.mods[a]=u,o.components[a]=h;const g=(h.__vccOpts||h)[e];return g&&en(g,n,s,o,a,i)()}))}}return r}function td(t){const e=Mt(vc),n=Mt(h_),s=it(()=>{const l=ns(t.to);return e.resolve(l)}),i=it(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(ms.bind(null,u));if(d>-1)return d;const g=nd(l[c-2]);return c>1&&nd(u)===g&&h[h.length-1].path!==g?h.findIndex(ms.bind(null,l[c-2])):d}),r=it(()=>i.value>-1&&oD(n.params,s.value.params)),o=it(()=>i.value>-1&&i.value===n.matched.length-1&&r_(n.params,s.value.params));function a(l={}){return rD(l)?e[ns(t.replace)?"replace":"push"](ns(t.to)).catch(ri):Promise.resolve()}return{route:s,href:it(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const sD=Pi({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:td,setup(t,{slots:e}){const n=Xr(td(t)),{options:s}=Mt(vc),i=it(()=>({[sd(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[sd(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:ff("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),iD=sD;function rD(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function oD(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!ht(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function nd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const sd=(t,e,n)=>t??e??n,aD=Pi({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Mt(Qa),i=it(()=>t.route||s.value),r=Mt(ed,0),o=it(()=>{let c=ns(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=it(()=>i.value.matched[o.value]);nr(ed,it(()=>o.value+1)),nr(nD,a),nr(Qa,i);const l=an();return Js(()=>[l.value,a.value,t.name],([c,u,h],[d,g,m])=>{u&&(u.instances[h]=c,g&&g!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),c&&u&&(!g||!ms(u,g)||!d)&&(u.enterCallbacks[h]||[]).forEach(E=>E(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return id(n.default,{Component:d,route:c});const g=h.props[u],m=g?g===!0?c.params:typeof g=="function"?g(c):g:null,O=ff(d,ne({},m,e,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return id(n.default,{Component:O,route:c})||O}}});function id(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const lD=aD;function cD(t){const e=Yx(t.routes,t),n=t.parseQuery||eD,s=t.stringifyQuery||Zh,i=t.history,r=Vs(),o=Vs(),a=Vs(),l=j_(Qt);let c=Qt;Qn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=sa.bind(null,y=>""+y),h=sa.bind(null,wx),d=sa.bind(null,Ti);function g(y,D){let A,L;return a_(y)?(A=e.getRecordMatcher(y),L=D):L=y,e.addRoute(L,A)}function m(y){const D=e.getRecordMatcher(y);D&&e.removeRoute(D)}function E(){return e.getRoutes().map(y=>y.record)}function O(y){return!!e.getRecordMatcher(y)}function k(y,D){if(D=ne({},D||l.value),typeof y=="string"){const p=ia(n,y,D.path),_=e.resolve({path:p.path},D),b=i.createHref(p.fullPath);return ne(p,_,{params:d(_.params),hash:Ti(p.hash),redirectedFrom:void 0,href:b})}let A;if(y.path!=null)A=ne({},y,{path:ia(n,y.path,D.path).path});else{const p=ne({},y.params);for(const _ in p)p[_]==null&&delete p[_];A=ne({},y,{params:h(p)}),D.params=h(D.params)}const L=e.resolve(A,D),ee=y.hash||"";L.params=u(d(L.params));const pe=Tx(s,ne({},y,{hash:yx(ee),path:L.path})),f=i.createHref(pe);return ne({fullPath:pe,hash:ee,query:s===Zh?tD(y.query):y.query||{}},L,{redirectedFrom:void 0,href:f})}function P(y){return typeof y=="string"?ia(n,y,l.value.path):ne({},y)}function M(y,D){if(c!==y)return vs(8,{from:D,to:y})}function x(y){return ae(y)}function z(y){return x(ne(P(y),{replace:!0}))}function _e(y){const D=y.matched[y.matched.length-1];if(D&&D.redirect){const{redirect:A}=D;let L=typeof A=="function"?A(y):A;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=P(L):{path:L},L.params={}),ne({query:y.query,hash:y.hash,params:L.path!=null?{}:y.params},L)}}function ae(y,D){const A=c=k(y),L=l.value,ee=y.state,pe=y.force,f=y.replace===!0,p=_e(A);if(p)return ae(ne(P(p),{state:typeof p=="object"?ne({},ee,p.state):ee,force:pe,replace:f}),D||A);const _=A;_.redirectedFrom=D;let b;return!pe&&Sx(s,L,A)&&(b=vs(16,{to:_,from:L}),ft(L,L,!0,!1)),(b?Promise.resolve(b):Xe(_,L)).catch(v=>Rt(v)?Rt(v,2)?v:zt(v):J(v,_,L)).then(v=>{if(v){if(Rt(v,2))return ae(ne({replace:f},P(v.to),{state:typeof v.to=="object"?ne({},ee,v.to.state):ee,force:pe}),D||_)}else v=bn(_,L,!0,f,ee);return qt(_,L,v),v})}function Qe(y,D){const A=M(y,D);return A?Promise.reject(A):Promise.resolve()}function Je(y){const D=Gn.values().next().value;return D&&typeof D.runWithContext=="function"?D.runWithContext(y):y()}function Xe(y,D){let A;const[L,ee,pe]=uD(y,D);A=ra(L.reverse(),"beforeRouteLeave",y,D);for(const p of L)p.leaveGuards.forEach(_=>{A.push(en(_,y,D))});const f=Qe.bind(null,y,D);return A.push(f),Ze(A).then(()=>{A=[];for(const p of r.list())A.push(en(p,y,D));return A.push(f),Ze(A)}).then(()=>{A=ra(ee,"beforeRouteUpdate",y,D);for(const p of ee)p.updateGuards.forEach(_=>{A.push(en(_,y,D))});return A.push(f),Ze(A)}).then(()=>{A=[];for(const p of pe)if(p.beforeEnter)if(ht(p.beforeEnter))for(const _ of p.beforeEnter)A.push(en(_,y,D));else A.push(en(p.beforeEnter,y,D));return A.push(f),Ze(A)}).then(()=>(y.matched.forEach(p=>p.enterCallbacks={}),A=ra(pe,"beforeRouteEnter",y,D,Je),A.push(f),Ze(A))).then(()=>{A=[];for(const p of o.list())A.push(en(p,y,D));return A.push(f),Ze(A)}).catch(p=>Rt(p,8)?p:Promise.reject(p))}function qt(y,D,A){a.list().forEach(L=>Je(()=>L(y,D,A)))}function bn(y,D,A,L,ee){const pe=M(y,D);if(pe)return pe;const f=D===Qt,p=Qn?history.state:{};A&&(L||f?i.replace(y.fullPath,ne({scroll:f&&p&&p.scroll},ee)):i.push(y.fullPath,ee)),l.value=y,ft(y,D,A,f),zt()}let dt;function ks(){dt||(dt=i.listen((y,D,A)=>{if(!ji.listening)return;const L=k(y),ee=_e(L);if(ee){ae(ne(ee,{replace:!0}),L).catch(ri);return}c=L;const pe=l.value;Qn&&Dx(jh(pe.fullPath,A.delta),Ao()),Xe(L,pe).catch(f=>Rt(f,12)?f:Rt(f,2)?(ae(f.to,L).then(p=>{Rt(p,20)&&!A.delta&&A.type===Si.pop&&i.go(-1,!1)}).catch(ri),Promise.reject()):(A.delta&&i.go(-A.delta,!1),J(f,L,pe))).then(f=>{f=f||bn(L,pe,!1),f&&(A.delta&&!Rt(f,8)?i.go(-A.delta,!1):A.type===Si.pop&&Rt(f,20)&&i.go(-1,!1)),qt(L,pe,f)}).catch(ri)}))}let Bn=Vs(),be=Vs(),se;function J(y,D,A){zt(y);const L=be.list();return L.length?L.forEach(ee=>ee(y,D,A)):console.error(y),Promise.reject(y)}function Tt(){return se&&l.value!==Qt?Promise.resolve():new Promise((y,D)=>{Bn.add([y,D])})}function zt(y){return se||(se=!y,ks(),Bn.list().forEach(([D,A])=>y?A(y):D()),Bn.reset()),y}function ft(y,D,A,L){const{scrollBehavior:ee}=t;if(!Qn||!ee)return Promise.resolve();const pe=!A&&Mx(jh(y.fullPath,0))||(L||!A)&&history.state&&history.state.scroll||null;return Md().then(()=>ee(y,D,pe)).then(f=>f&&xx(f)).catch(f=>J(f,y,D))}const Fe=y=>i.go(y);let jn;const Gn=new Set,ji={currentRoute:l,listening:!0,addRoute:g,removeRoute:m,clearRoutes:e.clearRoutes,hasRoute:O,getRoutes:E,resolve:k,options:t,push:x,replace:z,go:Fe,back:()=>Fe(-1),forward:()=>Fe(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:be.add,isReady:Tt,install(y){const D=this;y.component("RouterLink",iD),y.component("RouterView",lD),y.config.globalProperties.$router=D,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>ns(l)}),Qn&&!jn&&l.value===Qt&&(jn=!0,x(i.location).catch(ee=>{}));const A={};for(const ee in Qt)Object.defineProperty(A,ee,{get:()=>l.value[ee],enumerable:!0});y.provide(vc,D),y.provide(h_,Pd(A)),y.provide(Qa,l);const L=y.unmount;Gn.add(y),y.unmount=function(){Gn.delete(y),Gn.size<1&&(c=Qt,dt&&dt(),dt=null,l.value=Qt,jn=!1,se=!1),L()}}};function Ze(y){return y.reduce((D,A)=>D.then(()=>Je(A)),Promise.resolve())}return ji}function uD(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>ms(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>ms(c,l))||i.push(l))}return[n,s,i]}const hD=Pi({name:"HomeView",props:{isLogin:{type:Boolean,default:!1}},setup(){const t=an([]),e=an([]),n=new Array,s=an(n);return hl(()=>{$a(VT,i=>{const r=i.val();t.value=Object.values(r)},i=>{console.error("讀取專案資料時出錯",i)}),$a(BT,i=>{const r=i.val();e.value=Object.values(r)},i=>{console.error("讀取理監事資料時出錯",i)})}),{projects:t,supervisors:e,visibleEmails:s}},methods:{toggleLogin(){this.$emit("toggleLogin")},toggleEmail(t){this.visibleEmails.includes(t)?this.visibleEmails.splice(this.visibleEmails.indexOf(t),1):this.visibleEmails.push(t)}}}),dD={class:"ui container"},fD={class:"ui four doubling stackable cards"},pD={class:"card"},gD={class:"content"},_D={class:"description"},mD={key:0},vD=["href"],yD={key:1};function ED(t,e,n,s,i,r){return xe(),qe("main",dD,[e[3]||(e[3]=$("h1",{class:"ui header"},"自主學習促進會",-1)),$("div",fD,[e[2]||(e[2]=zm('<div class="card" data-v-6205c94b><div class="content" data-v-6205c94b><div class="header" data-v-6205c94b>本會歷史</div><div class="description" style="max-height:300px;overflow-y:auto;" data-v-6205c94b><p data-v-6205c94b>自主學習促進會的歷史可追溯至1994年種籽親子實驗小學的創立，這是台灣民主學校的先驅。</p><p data-v-6205c94b>1998年，台北市自主學習實驗計畫開始，為期六年，證明了自主學習理念在中學階段的可行性。</p><p data-v-6205c94b>2000年，面臨停辦危機時，學生發起了台灣首次中學生自發的學運，成功爭取續辦至第三屆學生畢業。</p><p data-v-6205c94b>2001年3月，為延續自主學習的經驗與知識，本會正式成立。</p><p data-v-6205c94b>2006-2008年間，本會通過&quot;自學中心&quot;提供課程和營隊，幫助體制內學生體驗自主學習。</p><p data-v-6205c94b>2008-2010年，&quot;自主培力學園&quot;為拒學、懼學和想自學的青少年提供全日制團體學習。</p><p data-v-6205c94b>2009年起，獨立教育工作者社群成立，致力於開設學習團體、培訓教師、支持家長，並開發自學資源。</p><p data-v-6205c94b>本會持續致力於推動自主學習理念，為台灣教育改革提供新方向和活力。</p></div></div></div>',1)),$("div",pD,[$("div",gD,[e[1]||(e[1]=$("div",{class:"header"},"網址連結",-1)),$("div",_D,[e[0]||(e[0]=$("ul",null,[$("li",null,[$("a",{href:"https://www.alearn.org",target:"_blank",rel:"noopener noreferrer"},"官方網站")]),$("li",null,[$("a",{href:"https://www.facebook.com/alearnTW",target:"_blank",rel:"noopener noreferrer"},"臉書「自主學習促進會」專頁")]),$("li",null,[$("a",{href:"https://www.facebook.com/groups/homeschooltw",target:"_blank",rel:"noopener noreferrer"},"臉書「在家自學社群」社團")])],-1)),t.projects.length?(xe(),qe("ul",mD,[(xe(!0),qe(st,null,_m(t.projects,o=>(xe(),qe("li",{key:o.id},[$("a",{href:o.website,target:"_blank",rel:"noopener noreferrer"},dd(o.full_name),9,vD)]))),128))])):(xe(),qe("p",yD,"載入中..."))])])])])])}const bD=_c(hD,[["render",ED],["__scopeId","data-v-6205c94b"]]),wD=cD({history:Ux("/"),routes:[{path:"/",name:"home",component:bD},{path:"/about",name:"about",component:()=>lx(()=>import("./AboutView-D2cNNFov.js"),__vite__mapDeps([0,1]))}]}),yc=kv(rx);yc.use($v());yc.use(wD);yc.mount("#app");export{st as F,_c as _,$a as a,$ as b,qe as c,_m as d,xe as e,Xt as f,hl as o,VT as p,an as r,BT as s,dd as t};
