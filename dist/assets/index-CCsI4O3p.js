const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AboutView-BYiIgR_D.js","assets/AboutView-CBrr3j4Z.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ei(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const te={},tn=[],Je=()=>{},Ju=()=>!1,Xr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ii=t=>t.startsWith("onUpdate:"),de=Object.assign,Si=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Yu=Object.prototype.hasOwnProperty,q=(t,e)=>Yu.call(t,e),F=Array.isArray,nn=t=>sr(t)==="[object Map]",Qr=t=>sr(t)==="[object Set]",ao=t=>sr(t)==="[object Date]",B=t=>typeof t=="function",ce=t=>typeof t=="string",He=t=>typeof t=="symbol",ie=t=>t!==null&&typeof t=="object",ul=t=>(ie(t)||B(t))&&B(t.then)&&B(t.catch),fl=Object.prototype.toString,sr=t=>fl.call(t),Xu=t=>sr(t).slice(8,-1),dl=t=>sr(t)==="[object Object]",Ti=t=>ce(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,xn=Ei(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Zr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Qu=/-(\w)/g,Ne=Zr(t=>t.replace(Qu,(e,n)=>n?n.toUpperCase():"")),Zu=/\B([A-Z])/g,Gt=Zr(t=>t.replace(Zu,"-$1").toLowerCase()),es=Zr(t=>t.charAt(0).toUpperCase()+t.slice(1)),bs=Zr(t=>t?`on${es(t)}`:""),At=(t,e)=>!Object.is(t,e),Sr=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},hl=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Gs=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let lo;const ts=()=>lo||(lo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ai(t){if(F(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ce(r)?rf(r):Ai(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(ce(t)||ie(t))return t}const ef=/;(?![^(]*\))/g,tf=/:([^]+)/,nf=/\/\*[^]*?\*\//g;function rf(t){const e={};return t.replace(nf,"").split(ef).forEach(n=>{if(n){const r=n.split(tf);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Kn(t){let e="";if(ce(t))e=t;else if(F(t))for(let n=0;n<t.length;n++){const r=Kn(t[n]);r&&(e+=r+" ")}else if(ie(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const sf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",of=Ei(sf);function pl(t){return!!t||t===""}function af(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=ns(t[r],e[r]);return n}function ns(t,e){if(t===e)return!0;let n=ao(t),r=ao(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=He(t),r=He(e),n||r)return t===e;if(n=F(t),r=F(e),n||r)return n&&r?af(t,e):!1;if(n=ie(t),r=ie(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!ns(t[o],e[o]))return!1}}return String(t)===String(e)}function gl(t,e){return t.findIndex(n=>ns(n,e))}const ml=t=>!!(t&&t.__v_isRef===!0),lf=t=>ce(t)?t:t==null?"":F(t)||ie(t)&&(t.toString===fl||!B(t.toString))?ml(t)?lf(t.value):JSON.stringify(t,vl,2):String(t),vl=(t,e)=>ml(e)?vl(t,e.value):nn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[ws(r,i)+" =>"]=s,n),{})}:Qr(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>ws(n))}:He(e)?ws(e):ie(e)&&!F(e)&&!dl(e)?String(e):e,ws=(t,e="")=>{var n;return He(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Re;class _l{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Re,!e&&Re&&(this.index=(Re.scopes||(Re.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Re;try{return Re=this,e()}finally{Re=n}}}on(){Re=this}off(){Re=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function cf(t){return new _l(t)}function uf(){return Re}let se;const Es=new WeakSet;class yl{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Re&&Re.active&&Re.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Es.has(this)&&(Es.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||wl(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,co(this),El(this);const e=se,n=Fe;se=this,Fe=!0;try{return this.fn()}finally{Il(this),se=e,Fe=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ri(e);this.deps=this.depsTail=void 0,co(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Es.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){qs(this)&&this.run()}get dirty(){return qs(this)}}let bl=0,Nn,Ln;function wl(t,e=!1){if(t.flags|=8,e){t.next=Ln,Ln=t;return}t.next=Nn,Nn=t}function Ci(){bl++}function Pi(){if(--bl>0)return;if(Ln){let e=Ln;for(Ln=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Nn;){let e=Nn;for(Nn=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function El(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Il(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Ri(r),ff(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function qs(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Sl(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Sl(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Gn))return;t.globalVersion=Gn;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!qs(t)){t.flags&=-3;return}const n=se,r=Fe;se=t,Fe=!0;try{El(t);const s=t.fn(t._value);(e.version===0||At(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{se=n,Fe=r,Il(t),t.flags&=-3}}function Ri(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Ri(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function ff(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Fe=!0;const Tl=[];function Ot(){Tl.push(Fe),Fe=!1}function kt(){const t=Tl.pop();Fe=t===void 0?!0:t}function co(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=se;se=void 0;try{e()}finally{se=n}}}let Gn=0;class df{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Oi{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!se||!Fe||se===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==se)n=this.activeLink=new df(se,this),se.deps?(n.prevDep=se.depsTail,se.depsTail.nextDep=n,se.depsTail=n):se.deps=se.depsTail=n,Al(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=se.depsTail,n.nextDep=void 0,se.depsTail.nextDep=n,se.depsTail=n,se.deps===n&&(se.deps=r)}return n}trigger(e){this.version++,Gn++,this.notify(e)}notify(e){Ci();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Pi()}}}function Al(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Al(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Js=new WeakMap,zt=Symbol(""),Ys=Symbol(""),qn=Symbol("");function ge(t,e,n){if(Fe&&se){let r=Js.get(t);r||Js.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Oi),s.map=r,s.key=n),s.track()}}function rt(t,e,n,r,s,i){const o=Js.get(t);if(!o){Gn++;return}const a=l=>{l&&l.trigger()};if(Ci(),e==="clear")o.forEach(a);else{const l=F(t),c=l&&Ti(n);if(l&&n==="length"){const u=Number(r);o.forEach((f,p)=>{(p==="length"||p===qn||!He(p)&&p>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(qn)),e){case"add":l?c&&a(o.get("length")):(a(o.get(zt)),nn(t)&&a(o.get(Ys)));break;case"delete":l||(a(o.get(zt)),nn(t)&&a(o.get(Ys)));break;case"set":nn(t)&&a(o.get(zt));break}}Pi()}function Xt(t){const e=G(t);return e===t?e:(ge(e,"iterate",qn),xe(t)?e:e.map(me))}function rs(t){return ge(t=G(t),"iterate",qn),t}const hf={__proto__:null,[Symbol.iterator](){return Is(this,Symbol.iterator,me)},concat(...t){return Xt(this).concat(...t.map(e=>F(e)?Xt(e):e))},entries(){return Is(this,"entries",t=>(t[1]=me(t[1]),t))},every(t,e){return et(this,"every",t,e,void 0,arguments)},filter(t,e){return et(this,"filter",t,e,n=>n.map(me),arguments)},find(t,e){return et(this,"find",t,e,me,arguments)},findIndex(t,e){return et(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return et(this,"findLast",t,e,me,arguments)},findLastIndex(t,e){return et(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return et(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ss(this,"includes",t)},indexOf(...t){return Ss(this,"indexOf",t)},join(t){return Xt(this).join(t)},lastIndexOf(...t){return Ss(this,"lastIndexOf",t)},map(t,e){return et(this,"map",t,e,void 0,arguments)},pop(){return Pn(this,"pop")},push(...t){return Pn(this,"push",t)},reduce(t,...e){return uo(this,"reduce",t,e)},reduceRight(t,...e){return uo(this,"reduceRight",t,e)},shift(){return Pn(this,"shift")},some(t,e){return et(this,"some",t,e,void 0,arguments)},splice(...t){return Pn(this,"splice",t)},toReversed(){return Xt(this).toReversed()},toSorted(t){return Xt(this).toSorted(t)},toSpliced(...t){return Xt(this).toSpliced(...t)},unshift(...t){return Pn(this,"unshift",t)},values(){return Is(this,"values",me)}};function Is(t,e,n){const r=rs(t),s=r[e]();return r!==t&&!xe(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const pf=Array.prototype;function et(t,e,n,r,s,i){const o=rs(t),a=o!==t&&!xe(t),l=o[e];if(l!==pf[e]){const f=l.apply(t,i);return a?me(f):f}let c=n;o!==t&&(a?c=function(f,p){return n.call(this,me(f),p,t)}:n.length>2&&(c=function(f,p){return n.call(this,f,p,t)}));const u=l.call(o,c,r);return a&&s?s(u):u}function uo(t,e,n,r){const s=rs(t);let i=n;return s!==t&&(xe(t)?n.length>3&&(i=function(o,a,l){return n.call(this,o,a,l,t)}):i=function(o,a,l){return n.call(this,o,me(a),l,t)}),s[e](i,...r)}function Ss(t,e,n){const r=G(t);ge(r,"iterate",qn);const s=r[e](...n);return(s===-1||s===!1)&&$i(n[0])?(n[0]=G(n[0]),r[e](...n)):s}function Pn(t,e,n=[]){Ot(),Ci();const r=G(t)[e].apply(t,n);return Pi(),kt(),r}const gf=Ei("__proto__,__v_isRef,__isVue"),Cl=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(He));function mf(t){He(t)||(t=String(t));const e=G(this);return ge(e,"has",t),e.hasOwnProperty(t)}class Pl{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Af:Ml:i?kl:Ol).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=F(e);if(!s){let l;if(o&&(l=hf[n]))return l;if(n==="hasOwnProperty")return mf}const a=Reflect.get(e,n,_e(e)?e:r);return(He(n)?Cl.has(n):gf(n))||(s||ge(e,"get",n),i)?a:_e(a)?o&&Ti(n)?a:a.value:ie(a)?s?Dl(a):ss(a):a}}class Rl extends Pl{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=Wt(i);if(!xe(r)&&!Wt(r)&&(i=G(i),r=G(r)),!F(e)&&_e(i)&&!_e(r))return l?!1:(i.value=r,!0)}const o=F(e)&&Ti(n)?Number(n)<e.length:q(e,n),a=Reflect.set(e,n,r,_e(e)?e:s);return e===G(s)&&(o?At(r,i)&&rt(e,"set",n,r):rt(e,"add",n,r)),a}deleteProperty(e,n){const r=q(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&rt(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!He(n)||!Cl.has(n))&&ge(e,"has",n),r}ownKeys(e){return ge(e,"iterate",F(e)?"length":zt),Reflect.ownKeys(e)}}class vf extends Pl{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const _f=new Rl,yf=new vf,bf=new Rl(!0);const Xs=t=>t,_r=t=>Reflect.getPrototypeOf(t);function wf(t,e,n){return function(...r){const s=this.__v_raw,i=G(s),o=nn(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...r),u=n?Xs:e?Qs:me;return!e&&ge(i,"iterate",l?Ys:zt),{next(){const{value:f,done:p}=c.next();return p?{value:f,done:p}:{value:a?[u(f[0]),u(f[1])]:u(f),done:p}},[Symbol.iterator](){return this}}}}function yr(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Ef(t,e){const n={get(s){const i=this.__v_raw,o=G(i),a=G(s);t||(At(s,a)&&ge(o,"get",s),ge(o,"get",a));const{has:l}=_r(o),c=e?Xs:t?Qs:me;if(l.call(o,s))return c(i.get(s));if(l.call(o,a))return c(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&ge(G(s),"iterate",zt),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=G(i),a=G(s);return t||(At(s,a)&&ge(o,"has",s),ge(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,l=G(a),c=e?Xs:t?Qs:me;return!t&&ge(l,"iterate",zt),a.forEach((u,f)=>s.call(i,c(u),c(f),o))}};return de(n,t?{add:yr("add"),set:yr("set"),delete:yr("delete"),clear:yr("clear")}:{add(s){!e&&!xe(s)&&!Wt(s)&&(s=G(s));const i=G(this);return _r(i).has.call(i,s)||(i.add(s),rt(i,"add",s,s)),this},set(s,i){!e&&!xe(i)&&!Wt(i)&&(i=G(i));const o=G(this),{has:a,get:l}=_r(o);let c=a.call(o,s);c||(s=G(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,i),c?At(i,u)&&rt(o,"set",s,i):rt(o,"add",s,i),this},delete(s){const i=G(this),{has:o,get:a}=_r(i);let l=o.call(i,s);l||(s=G(s),l=o.call(i,s)),a&&a.call(i,s);const c=i.delete(s);return l&&rt(i,"delete",s,void 0),c},clear(){const s=G(this),i=s.size!==0,o=s.clear();return i&&rt(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=wf(s,t,e)}),n}function ki(t,e){const n=Ef(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(q(n,s)&&s in r?n:r,s,i)}const If={get:ki(!1,!1)},Sf={get:ki(!1,!0)},Tf={get:ki(!0,!1)};const Ol=new WeakMap,kl=new WeakMap,Ml=new WeakMap,Af=new WeakMap;function Cf(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Pf(t){return t.__v_skip||!Object.isExtensible(t)?0:Cf(Xu(t))}function ss(t){return Wt(t)?t:Mi(t,!1,_f,If,Ol)}function $l(t){return Mi(t,!1,bf,Sf,kl)}function Dl(t){return Mi(t,!0,yf,Tf,Ml)}function Mi(t,e,n,r,s){if(!ie(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Pf(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function rn(t){return Wt(t)?rn(t.__v_raw):!!(t&&t.__v_isReactive)}function Wt(t){return!!(t&&t.__v_isReadonly)}function xe(t){return!!(t&&t.__v_isShallow)}function $i(t){return t?!!t.__v_raw:!1}function G(t){const e=t&&t.__v_raw;return e?G(e):t}function xl(t){return!q(t,"__v_skip")&&Object.isExtensible(t)&&hl(t,"__v_skip",!0),t}const me=t=>ie(t)?ss(t):t,Qs=t=>ie(t)?Dl(t):t;function _e(t){return t?t.__v_isRef===!0:!1}function Un(t){return Nl(t,!1)}function Rf(t){return Nl(t,!0)}function Nl(t,e){return _e(t)?t:new Of(t,e)}class Of{constructor(e,n){this.dep=new Oi,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:G(e),this._value=n?e:me(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||xe(e)||Wt(e);e=r?e:G(e),At(e,n)&&(this._rawValue=e,this._value=r?e:me(e),this.dep.trigger())}}function sn(t){return _e(t)?t.value:t}const kf={get:(t,e,n)=>e==="__v_raw"?t:sn(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return _e(s)&&!_e(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Ll(t){return rn(t)?t:new Proxy(t,kf)}class Mf{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Oi(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Gn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&se!==this)return wl(this,!0),!0}get value(){const e=this.dep.track();return Sl(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function $f(t,e,n=!1){let r,s;return B(t)?r=t:(r=t.get,s=t.set),new Mf(r,s,n)}const br={},Mr=new WeakMap;let Ft;function Df(t,e=!1,n=Ft){if(n){let r=Mr.get(n);r||Mr.set(n,r=[]),r.push(t)}}function xf(t,e,n=te){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:l}=n,c=k=>s?k:xe(k)||s===!1||s===0?st(k,1):st(k);let u,f,p,g,E=!1,T=!1;if(_e(t)?(f=()=>t.value,E=xe(t)):rn(t)?(f=()=>c(t),E=!0):F(t)?(T=!0,E=t.some(k=>rn(k)||xe(k)),f=()=>t.map(k=>{if(_e(k))return k.value;if(rn(k))return c(k);if(B(k))return l?l(k,2):k()})):B(t)?e?f=l?()=>l(t,2):t:f=()=>{if(p){Ot();try{p()}finally{kt()}}const k=Ft;Ft=u;try{return l?l(t,3,[g]):t(g)}finally{Ft=k}}:f=Je,e&&s){const k=f,z=s===!0?1/0:s;f=()=>st(k(),z)}const L=uf(),M=()=>{u.stop(),L&&Si(L.effects,u)};if(i&&e){const k=e;e=(...z)=>{k(...z),M()}}let O=T?new Array(t.length).fill(br):br;const $=k=>{if(!(!(u.flags&1)||!u.dirty&&!k))if(e){const z=u.run();if(s||E||(T?z.some((le,ne)=>At(le,O[ne])):At(z,O))){p&&p();const le=Ft;Ft=u;try{const ne=[z,O===br?void 0:T&&O[0]===br?[]:O,g];l?l(e,3,ne):e(...ne),O=z}finally{Ft=le}}}else u.run()};return a&&a($),u=new yl(f),u.scheduler=o?()=>o($,!1):$,g=k=>Df(k,!1,u),p=u.onStop=()=>{const k=Mr.get(u);if(k){if(l)l(k,4);else for(const z of k)z();Mr.delete(u)}},e?r?$(!0):O=u.run():o?o($.bind(null,!0),!0):u.run(),M.pause=u.pause.bind(u),M.resume=u.resume.bind(u),M.stop=M,M}function st(t,e=1/0,n){if(e<=0||!ie(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,_e(t))st(t.value,e,n);else if(F(t))for(let r=0;r<t.length;r++)st(t[r],e,n);else if(Qr(t)||nn(t))t.forEach(r=>{st(r,e,n)});else if(dl(t)){for(const r in t)st(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&st(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ir(t,e,n,r){try{return r?t(...r):t()}catch(s){is(s,e,n)}}function Qe(t,e,n,r){if(B(t)){const s=ir(t,e,n,r);return s&&ul(s)&&s.catch(i=>{is(i,e,n)}),s}if(F(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Qe(t[i],e,n,r));return s}}function is(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||te;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,l,c)===!1)return}a=a.parent}if(i){Ot(),ir(i,null,10,[t,l,c]),kt();return}}Nf(t,n,s,r,o)}function Nf(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const be=[];let Ge=-1;const on=[];let _t=null,Qt=0;const Ul=Promise.resolve();let $r=null;function Fl(t){const e=$r||Ul;return t?e.then(this?t.bind(this):t):e}function Lf(t){let e=Ge+1,n=be.length;for(;e<n;){const r=e+n>>>1,s=be[r],i=Jn(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Di(t){if(!(t.flags&1)){const e=Jn(t),n=be[be.length-1];!n||!(t.flags&2)&&e>=Jn(n)?be.push(t):be.splice(Lf(e),0,t),t.flags|=1,Hl()}}function Hl(){$r||($r=Ul.then(Bl))}function Uf(t){F(t)?on.push(...t):_t&&t.id===-1?_t.splice(Qt+1,0,t):t.flags&1||(on.push(t),t.flags|=1),Hl()}function fo(t,e,n=Ge+1){for(;n<be.length;n++){const r=be[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;be.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function jl(t){if(on.length){const e=[...new Set(on)].sort((n,r)=>Jn(n)-Jn(r));if(on.length=0,_t){_t.push(...e);return}for(_t=e,Qt=0;Qt<_t.length;Qt++){const n=_t[Qt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}_t=null,Qt=0}}const Jn=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Bl(t){try{for(Ge=0;Ge<be.length;Ge++){const e=be[Ge];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ir(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Ge<be.length;Ge++){const e=be[Ge];e&&(e.flags&=-2)}Ge=-1,be.length=0,jl(),$r=null,(be.length||on.length)&&Bl()}}let he=null,zl=null;function Dr(t){const e=he;return he=t,zl=t&&t.type.__scopeId||null,e}function fe(t,e=he,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&wo(-1);const i=Dr(e);let o;try{o=t(...s)}finally{Dr(i),r._d&&wo(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Ts(t,e){if(he===null)return t;const n=cs(he),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,l=te]=e[s];i&&(B(i)&&(i={mounted:i,updated:i}),i.deep&&st(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Lt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(Ot(),Qe(l,n,8,[t.el,a,t,e]),kt())}}const Ff=Symbol("_vte"),Hf=t=>t.__isTeleport;function xi(t,e){t.shapeFlag&6&&t.component?(t.transition=e,xi(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function _n(t,e){return B(t)?de({name:t.name},e,{setup:t}):t}function Vl(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Zs(t,e,n,r,s=!1){if(F(t)){t.forEach((E,T)=>Zs(E,e&&(F(e)?e[T]:e),n,r,s));return}if(an(r)&&!s)return;const i=r.shapeFlag&4?cs(r.component):r.el,o=s?null:i,{i:a,r:l}=t,c=e&&e.r,u=a.refs===te?a.refs={}:a.refs,f=a.setupState,p=G(f),g=f===te?()=>!1:E=>q(p,E);if(c!=null&&c!==l&&(ce(c)?(u[c]=null,g(c)&&(f[c]=null)):_e(c)&&(c.value=null)),B(l))ir(l,a,12,[o,u]);else{const E=ce(l),T=_e(l);if(E||T){const L=()=>{if(t.f){const M=E?g(l)?f[l]:u[l]:l.value;s?F(M)&&Si(M,i):F(M)?M.includes(i)||M.push(i):E?(u[l]=[i],g(l)&&(f[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else E?(u[l]=o,g(l)&&(f[l]=o)):T&&(l.value=o,t.k&&(u[t.k]=o))};o?(L.id=-1,Pe(L,n)):L()}}}ts().requestIdleCallback;ts().cancelIdleCallback;const an=t=>!!t.type.__asyncLoader,Wl=t=>t.type.__isKeepAlive;function jf(t,e){Kl(t,"a",e)}function Bf(t,e){Kl(t,"da",e)}function Kl(t,e,n=ve){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(os(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Wl(s.parent.vnode)&&zf(r,e,n,s),s=s.parent}}function zf(t,e,n,r){const s=os(e,t,r,!0);ql(()=>{Si(r[e],s)},n)}function os(t,e,n=ve,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Ot();const a=or(n),l=Qe(e,n,t,o);return a(),kt(),l});return r?s.unshift(i):s.push(i),i}}const dt=t=>(e,n=ve)=>{(!Qn||t==="sp")&&os(t,(...r)=>e(...r),n)},Vf=dt("bm"),Gl=dt("m"),Wf=dt("bu"),Kf=dt("u"),Gf=dt("bum"),ql=dt("um"),qf=dt("sp"),Jf=dt("rtg"),Yf=dt("rtc");function Xf(t,e=ve){os("ec",t,e)}const Qf="components";function As(t,e){return ed(Qf,t,!0,e)||t}const Zf=Symbol.for("v-ndc");function ed(t,e,n=!0,r=!1){const s=he||ve;if(s){const i=s.type;{const a=Hd(i,!1);if(a&&(a===e||a===Ne(e)||a===es(Ne(e))))return i}const o=ho(s[t]||i[t],e)||ho(s.appContext[t],e);return!o&&r?i:o}}function ho(t,e){return t&&(t[e]||t[Ne(e)]||t[es(Ne(e))])}function XT(t,e,n,r){let s;const i=n,o=F(t);if(o||ce(t)){const a=o&&rn(t);let l=!1;a&&(l=!xe(t),t=rs(t)),s=new Array(t.length);for(let c=0,u=t.length;c<u;c++)s[c]=e(l?me(t[c]):t[c],c,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,i)}else if(ie(t))if(t[Symbol.iterator])s=Array.from(t,(a,l)=>e(a,l,void 0,i));else{const a=Object.keys(t);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(t[u],u,l,i)}}else s=[];return s}function Cs(t,e,n={},r,s){if(he.ce||he.parent&&an(he.parent)&&he.parent.ce)return e!=="default"&&(n.name=e),we(),Nr(Se,null,[Z("slot",n,r)],64);let i=t[e];i&&i._c&&(i._d=!1),we();const o=i&&Jl(i(n)),a=n.key||o&&o.key,l=Nr(Se,{key:(a&&!He(a)?a:`_${e}`)+(!o&&r?"_fb":"")},o||[],o&&t._===1?64:-2);return i&&i._c&&(i._d=!0),l}function Jl(t){return t.some(e=>Xn(e)?!(e.type===Rt||e.type===Se&&!Jl(e.children)):!0)?t:null}const ei=t=>t?mc(t)?cs(t):ei(t.parent):null,Fn=de(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ei(t.parent),$root:t=>ei(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Ni(t),$forceUpdate:t=>t.f||(t.f=()=>{Di(t.update)}),$nextTick:t=>t.n||(t.n=Fl.bind(t.proxy)),$watch:t=>wd.bind(t)}),Ps=(t,e)=>t!==te&&!t.__isScriptSetup&&q(t,e),td={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Ps(r,e))return o[e]=1,r[e];if(s!==te&&q(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&q(c,e))return o[e]=3,i[e];if(n!==te&&q(n,e))return o[e]=4,n[e];ti&&(o[e]=0)}}const u=Fn[e];let f,p;if(u)return e==="$attrs"&&ge(t.attrs,"get",""),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==te&&q(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,q(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Ps(s,e)?(s[e]=n,!0):r!==te&&q(r,e)?(r[e]=n,!0):q(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==te&&q(t,o)||Ps(e,o)||(a=i[0])&&q(a,o)||q(r,o)||q(Fn,o)||q(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:q(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function po(t){return F(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ti=!0;function nd(t){const e=Ni(t),n=t.proxy,r=t.ctx;ti=!1,e.beforeCreate&&go(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:p,beforeUpdate:g,updated:E,activated:T,deactivated:L,beforeDestroy:M,beforeUnmount:O,destroyed:$,unmounted:k,render:z,renderTracked:le,renderTriggered:ne,errorCaptured:ke,serverPrefetch:Me,expose:$e,inheritAttrs:pt,components:Nt,directives:ze,filters:An}=e;if(c&&rd(c,r,null),o)for(const Q in o){const K=o[Q];B(K)&&(r[Q]=K.bind(n))}if(s){const Q=s.call(n,n);ie(Q)&&(t.data=ss(Q))}if(ti=!0,i)for(const Q in i){const K=i[Q],Ze=B(K)?K.bind(n,n):B(K.get)?K.get.bind(n,n):Je,gt=!B(K)&&B(K.set)?K.set.bind(n):Je,Ve=Ue({get:Ze,set:gt});Object.defineProperty(r,Q,{enumerable:!0,configurable:!0,get:()=>Ve.value,set:Ie=>Ve.value=Ie})}if(a)for(const Q in a)Yl(a[Q],r,n,Q);if(l){const Q=B(l)?l.call(n):l;Reflect.ownKeys(Q).forEach(K=>{Tr(K,Q[K])})}u&&go(u,t,"c");function ue(Q,K){F(K)?K.forEach(Ze=>Q(Ze.bind(n))):K&&Q(K.bind(n))}if(ue(Vf,f),ue(Gl,p),ue(Wf,g),ue(Kf,E),ue(jf,T),ue(Bf,L),ue(Xf,ke),ue(Yf,le),ue(Jf,ne),ue(Gf,O),ue(ql,k),ue(qf,Me),F($e))if($e.length){const Q=t.exposed||(t.exposed={});$e.forEach(K=>{Object.defineProperty(Q,K,{get:()=>n[K],set:Ze=>n[K]=Ze})})}else t.exposed||(t.exposed={});z&&t.render===Je&&(t.render=z),pt!=null&&(t.inheritAttrs=pt),Nt&&(t.components=Nt),ze&&(t.directives=ze),Me&&Vl(t)}function rd(t,e,n=Je){F(t)&&(t=ni(t));for(const r in t){const s=t[r];let i;ie(s)?"default"in s?i=lt(s.from||r,s.default,!0):i=lt(s.from||r):i=lt(s),_e(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function go(t,e,n){Qe(F(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Yl(t,e,n,r){let s=r.includes(".")?uc(n,r):()=>n[r];if(ce(t)){const i=e[t];B(i)&&Hn(s,i)}else if(B(t))Hn(s,t.bind(n));else if(ie(t))if(F(t))t.forEach(i=>Yl(i,e,n,r));else{const i=B(t.handler)?t.handler.bind(n):e[t.handler];B(i)&&Hn(s,i,t)}}function Ni(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(c=>xr(l,c,o,!0)),xr(l,e,o)),ie(e)&&i.set(e,l),l}function xr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&xr(t,i,n,!0),s&&s.forEach(o=>xr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=sd[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const sd={data:mo,props:vo,emits:vo,methods:Dn,computed:Dn,beforeCreate:ye,created:ye,beforeMount:ye,mounted:ye,beforeUpdate:ye,updated:ye,beforeDestroy:ye,beforeUnmount:ye,destroyed:ye,unmounted:ye,activated:ye,deactivated:ye,errorCaptured:ye,serverPrefetch:ye,components:Dn,directives:Dn,watch:od,provide:mo,inject:id};function mo(t,e){return e?t?function(){return de(B(t)?t.call(this,this):t,B(e)?e.call(this,this):e)}:e:t}function id(t,e){return Dn(ni(t),ni(e))}function ni(t){if(F(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ye(t,e){return t?[...new Set([].concat(t,e))]:e}function Dn(t,e){return t?de(Object.create(null),t,e):e}function vo(t,e){return t?F(t)&&F(e)?[...new Set([...t,...e])]:de(Object.create(null),po(t),po(e??{})):e}function od(t,e){if(!t)return e;if(!e)return t;const n=de(Object.create(null),t);for(const r in e)n[r]=ye(t[r],e[r]);return n}function Xl(){return{app:null,config:{isNativeTag:Ju,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ad=0;function ld(t,e){return function(r,s=null){B(r)||(r=de({},r)),s!=null&&!ie(s)&&(s=null);const i=Xl(),o=new WeakSet,a=[];let l=!1;const c=i.app={_uid:ad++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Bd,get config(){return i.config},set config(u){},use(u,...f){return o.has(u)||(u&&B(u.install)?(o.add(u),u.install(c,...f)):B(u)&&(o.add(u),u(c,...f))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,f){return f?(i.components[u]=f,c):i.components[u]},directive(u,f){return f?(i.directives[u]=f,c):i.directives[u]},mount(u,f,p){if(!l){const g=c._ceVNode||Z(r,s);return g.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),f&&e?e(g,u):t(g,u,p),l=!0,c._container=u,u.__vue_app__=c,cs(g.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Qe(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return i.provides[u]=f,c},runWithContext(u){const f=ln;ln=c;try{return u()}finally{ln=f}}};return c}}let ln=null;function Tr(t,e){if(ve){let n=ve.provides;const r=ve.parent&&ve.parent.provides;r===n&&(n=ve.provides=Object.create(r)),n[t]=e}}function lt(t,e,n=!1){const r=ve||he;if(r||ln){const s=ln?ln._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&B(e)?e.call(r&&r.proxy):e}}const Ql={},Zl=()=>Object.create(Ql),ec=t=>Object.getPrototypeOf(t)===Ql;function cd(t,e,n,r=!1){const s={},i=Zl();t.propsDefaults=Object.create(null),tc(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:$l(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function ud(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=G(s),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let p=u[f];if(as(t.emitsOptions,p))continue;const g=e[p];if(l)if(q(i,p))g!==i[p]&&(i[p]=g,c=!0);else{const E=Ne(p);s[E]=ri(l,a,E,g,t,!1)}else g!==i[p]&&(i[p]=g,c=!0)}}}else{tc(t,e,s,i)&&(c=!0);let u;for(const f in a)(!e||!q(e,f)&&((u=Gt(f))===f||!q(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=ri(l,a,f,void 0,t,!0)):delete s[f]);if(i!==a)for(const f in i)(!e||!q(e,f))&&(delete i[f],c=!0)}c&&rt(t.attrs,"set","")}function tc(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(xn(l))continue;const c=e[l];let u;s&&q(s,u=Ne(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:as(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=G(n),c=a||te;for(let u=0;u<i.length;u++){const f=i[u];n[f]=ri(s,l,f,c[f],t,!q(c,f))}}return o}function ri(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=q(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&B(l)){const{propsDefaults:c}=s;if(n in c)r=c[n];else{const u=or(s);r=c[n]=l.call(null,e),u()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Gt(n))&&(r=!0))}return r}const fd=new WeakMap;function nc(t,e,n=!1){const r=n?fd:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!B(t)){const u=f=>{l=!0;const[p,g]=nc(f,e,!0);de(o,p),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return ie(t)&&r.set(t,tn),tn;if(F(i))for(let u=0;u<i.length;u++){const f=Ne(i[u]);_o(f)&&(o[f]=te)}else if(i)for(const u in i){const f=Ne(u);if(_o(f)){const p=i[u],g=o[f]=F(p)||B(p)?{type:p}:de({},p),E=g.type;let T=!1,L=!0;if(F(E))for(let M=0;M<E.length;++M){const O=E[M],$=B(O)&&O.name;if($==="Boolean"){T=!0;break}else $==="String"&&(L=!1)}else T=B(E)&&E.name==="Boolean";g[0]=T,g[1]=L,(T||q(g,"default"))&&a.push(f)}}const c=[o,a];return ie(t)&&r.set(t,c),c}function _o(t){return t[0]!=="$"&&!xn(t)}const rc=t=>t[0]==="_"||t==="$stable",Li=t=>F(t)?t.map(qe):[qe(t)],dd=(t,e,n)=>{if(e._n)return e;const r=fe((...s)=>Li(e(...s)),n);return r._c=!1,r},sc=(t,e,n)=>{const r=t._ctx;for(const s in t){if(rc(s))continue;const i=t[s];if(B(i))e[s]=dd(s,i,r);else if(i!=null){const o=Li(i);e[s]=()=>o}}},ic=(t,e)=>{const n=Li(e);t.slots.default=()=>n},oc=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},hd=(t,e,n)=>{const r=t.slots=Zl();if(t.vnode.shapeFlag&32){const s=e._;s?(oc(r,e,n),n&&hl(r,"_",s,!0)):sc(e,r)}else e&&ic(t,e)},pd=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=te;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:oc(s,e,n):(i=!e.$stable,sc(e,s)),o=e}else e&&(ic(t,e),o={default:1});if(i)for(const a in s)!rc(a)&&o[a]==null&&delete s[a]},Pe=Pd;function gd(t){return md(t)}function md(t,e){const n=ts();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:p,setScopeId:g=Je,insertStaticContent:E}=t,T=(d,h,m,y=null,v=null,b=null,A=void 0,S=null,I=!!h.dynamicChildren)=>{if(d===h)return;d&&!Rn(d,h)&&(y=_(d),Ie(d,v,b,!0),d=null),h.patchFlag===-2&&(I=!1,h.dynamicChildren=null);const{type:w,ref:U,shapeFlag:P}=h;switch(w){case ls:L(d,h,m,y);break;case Rt:M(d,h,m,y);break;case ks:d==null&&O(h,m,y,A);break;case Se:Nt(d,h,m,y,v,b,A,S,I);break;default:P&1?z(d,h,m,y,v,b,A,S,I):P&6?ze(d,h,m,y,v,b,A,S,I):(P&64||P&128)&&w.process(d,h,m,y,v,b,A,S,I,D)}U!=null&&v&&Zs(U,d&&d.ref,b,h||d,!h)},L=(d,h,m,y)=>{if(d==null)r(h.el=a(h.children),m,y);else{const v=h.el=d.el;h.children!==d.children&&c(v,h.children)}},M=(d,h,m,y)=>{d==null?r(h.el=l(h.children||""),m,y):h.el=d.el},O=(d,h,m,y)=>{[d.el,d.anchor]=E(d.children,h,m,y,d.el,d.anchor)},$=({el:d,anchor:h},m,y)=>{let v;for(;d&&d!==h;)v=p(d),r(d,m,y),d=v;r(h,m,y)},k=({el:d,anchor:h})=>{let m;for(;d&&d!==h;)m=p(d),s(d),d=m;s(h)},z=(d,h,m,y,v,b,A,S,I)=>{h.type==="svg"?A="svg":h.type==="math"&&(A="mathml"),d==null?le(h,m,y,v,b,A,S,I):Me(d,h,v,b,A,S,I)},le=(d,h,m,y,v,b,A,S)=>{let I,w;const{props:U,shapeFlag:P,transition:N,dirs:j}=d;if(I=d.el=o(d.type,b,U&&U.is,U),P&8?u(I,d.children):P&16&&ke(d.children,I,null,y,v,Rs(d,b),A,S),j&&Lt(d,null,y,"created"),ne(I,d,d.scopeId,A,y),U){for(const re in U)re!=="value"&&!xn(re)&&i(I,re,null,U[re],b,y);"value"in U&&i(I,"value",null,U.value,b),(w=U.onVnodeBeforeMount)&&Ke(w,y,d)}j&&Lt(d,null,y,"beforeMount");const V=vd(v,N);V&&N.beforeEnter(I),r(I,h,m),((w=U&&U.onVnodeMounted)||V||j)&&Pe(()=>{w&&Ke(w,y,d),V&&N.enter(I),j&&Lt(d,null,y,"mounted")},v)},ne=(d,h,m,y,v)=>{if(m&&g(d,m),y)for(let b=0;b<y.length;b++)g(d,y[b]);if(v){let b=v.subTree;if(h===b||dc(b.type)&&(b.ssContent===h||b.ssFallback===h)){const A=v.vnode;ne(d,A,A.scopeId,A.slotScopeIds,v.parent)}}},ke=(d,h,m,y,v,b,A,S,I=0)=>{for(let w=I;w<d.length;w++){const U=d[w]=S?yt(d[w]):qe(d[w]);T(null,U,h,m,y,v,b,A,S)}},Me=(d,h,m,y,v,b,A)=>{const S=h.el=d.el;let{patchFlag:I,dynamicChildren:w,dirs:U}=h;I|=d.patchFlag&16;const P=d.props||te,N=h.props||te;let j;if(m&&Ut(m,!1),(j=N.onVnodeBeforeUpdate)&&Ke(j,m,h,d),U&&Lt(h,d,m,"beforeUpdate"),m&&Ut(m,!0),(P.innerHTML&&N.innerHTML==null||P.textContent&&N.textContent==null)&&u(S,""),w?$e(d.dynamicChildren,w,S,m,y,Rs(h,v),b):A||K(d,h,S,null,m,y,Rs(h,v),b,!1),I>0){if(I&16)pt(S,P,N,m,v);else if(I&2&&P.class!==N.class&&i(S,"class",null,N.class,v),I&4&&i(S,"style",P.style,N.style,v),I&8){const V=h.dynamicProps;for(let re=0;re<V.length;re++){const Y=V[re],Te=P[Y],pe=N[Y];(pe!==Te||Y==="value")&&i(S,Y,Te,pe,v,m)}}I&1&&d.children!==h.children&&u(S,h.children)}else!A&&w==null&&pt(S,P,N,m,v);((j=N.onVnodeUpdated)||U)&&Pe(()=>{j&&Ke(j,m,h,d),U&&Lt(h,d,m,"updated")},y)},$e=(d,h,m,y,v,b,A)=>{for(let S=0;S<h.length;S++){const I=d[S],w=h[S],U=I.el&&(I.type===Se||!Rn(I,w)||I.shapeFlag&70)?f(I.el):m;T(I,w,U,null,y,v,b,A,!0)}},pt=(d,h,m,y,v)=>{if(h!==m){if(h!==te)for(const b in h)!xn(b)&&!(b in m)&&i(d,b,h[b],null,v,y);for(const b in m){if(xn(b))continue;const A=m[b],S=h[b];A!==S&&b!=="value"&&i(d,b,S,A,v,y)}"value"in m&&i(d,"value",h.value,m.value,v)}},Nt=(d,h,m,y,v,b,A,S,I)=>{const w=h.el=d?d.el:a(""),U=h.anchor=d?d.anchor:a("");let{patchFlag:P,dynamicChildren:N,slotScopeIds:j}=h;j&&(S=S?S.concat(j):j),d==null?(r(w,m,y),r(U,m,y),ke(h.children||[],m,U,v,b,A,S,I)):P>0&&P&64&&N&&d.dynamicChildren?($e(d.dynamicChildren,N,m,v,b,A,S),(h.key!=null||v&&h===v.subTree)&&ac(d,h,!0)):K(d,h,m,U,v,b,A,S,I)},ze=(d,h,m,y,v,b,A,S,I)=>{h.slotScopeIds=S,d==null?h.shapeFlag&512?v.ctx.activate(h,m,y,A,I):An(h,m,y,v,b,A,I):qt(d,h,I)},An=(d,h,m,y,v,b,A)=>{const S=d.component=xd(d,y,v);if(Wl(d)&&(S.ctx.renderer=D),Nd(S,!1,A),S.asyncDep){if(v&&v.registerDep(S,ue,A),!d.el){const I=S.subTree=Z(Rt);M(null,I,h,m)}}else ue(S,d,h,m,v,b,A)},qt=(d,h,m)=>{const y=h.component=d.component;if(Ad(d,h,m))if(y.asyncDep&&!y.asyncResolved){Q(y,h,m);return}else y.next=h,y.update();else h.el=d.el,y.vnode=h},ue=(d,h,m,y,v,b,A)=>{const S=()=>{if(d.isMounted){let{next:P,bu:N,u:j,parent:V,vnode:re}=d;{const Ae=lc(d);if(Ae){P&&(P.el=re.el,Q(d,P,A)),Ae.asyncDep.then(()=>{d.isUnmounted||S()});return}}let Y=P,Te;Ut(d,!1),P?(P.el=re.el,Q(d,P,A)):P=re,N&&Sr(N),(Te=P.props&&P.props.onVnodeBeforeUpdate)&&Ke(Te,V,P,re),Ut(d,!0);const pe=Os(d),Le=d.subTree;d.subTree=pe,T(Le,pe,f(Le.el),_(Le),d,v,b),P.el=pe.el,Y===null&&Cd(d,pe.el),j&&Pe(j,v),(Te=P.props&&P.props.onVnodeUpdated)&&Pe(()=>Ke(Te,V,P,re),v)}else{let P;const{el:N,props:j}=h,{bm:V,m:re,parent:Y,root:Te,type:pe}=d,Le=an(h);if(Ut(d,!1),V&&Sr(V),!Le&&(P=j&&j.onVnodeBeforeMount)&&Ke(P,Y,h),Ut(d,!0),N&&ae){const Ae=()=>{d.subTree=Os(d),ae(N,d.subTree,d,v,null)};Le&&pe.__asyncHydrate?pe.__asyncHydrate(N,d,Ae):Ae()}else{Te.ce&&Te.ce._injectChildStyle(pe);const Ae=d.subTree=Os(d);T(null,Ae,m,y,d,v,b),h.el=Ae.el}if(re&&Pe(re,v),!Le&&(P=j&&j.onVnodeMounted)){const Ae=h;Pe(()=>Ke(P,Y,Ae),v)}(h.shapeFlag&256||Y&&an(Y.vnode)&&Y.vnode.shapeFlag&256)&&d.a&&Pe(d.a,v),d.isMounted=!0,h=m=y=null}};d.scope.on();const I=d.effect=new yl(S);d.scope.off();const w=d.update=I.run.bind(I),U=d.job=I.runIfDirty.bind(I);U.i=d,U.id=d.uid,I.scheduler=()=>Di(U),Ut(d,!0),w()},Q=(d,h,m)=>{h.component=d;const y=d.vnode.props;d.vnode=h,d.next=null,ud(d,h.props,y,m),pd(d,h.children,m),Ot(),fo(d),kt()},K=(d,h,m,y,v,b,A,S,I=!1)=>{const w=d&&d.children,U=d?d.shapeFlag:0,P=h.children,{patchFlag:N,shapeFlag:j}=h;if(N>0){if(N&128){gt(w,P,m,y,v,b,A,S,I);return}else if(N&256){Ze(w,P,m,y,v,b,A,S,I);return}}j&8?(U&16&&De(w,v,b),P!==w&&u(m,P)):U&16?j&16?gt(w,P,m,y,v,b,A,S,I):De(w,v,b,!0):(U&8&&u(m,""),j&16&&ke(P,m,y,v,b,A,S,I))},Ze=(d,h,m,y,v,b,A,S,I)=>{d=d||tn,h=h||tn;const w=d.length,U=h.length,P=Math.min(w,U);let N;for(N=0;N<P;N++){const j=h[N]=I?yt(h[N]):qe(h[N]);T(d[N],j,m,null,v,b,A,S,I)}w>U?De(d,v,b,!0,!1,P):ke(h,m,y,v,b,A,S,I,P)},gt=(d,h,m,y,v,b,A,S,I)=>{let w=0;const U=h.length;let P=d.length-1,N=U-1;for(;w<=P&&w<=N;){const j=d[w],V=h[w]=I?yt(h[w]):qe(h[w]);if(Rn(j,V))T(j,V,m,null,v,b,A,S,I);else break;w++}for(;w<=P&&w<=N;){const j=d[P],V=h[N]=I?yt(h[N]):qe(h[N]);if(Rn(j,V))T(j,V,m,null,v,b,A,S,I);else break;P--,N--}if(w>P){if(w<=N){const j=N+1,V=j<U?h[j].el:y;for(;w<=N;)T(null,h[w]=I?yt(h[w]):qe(h[w]),m,V,v,b,A,S,I),w++}}else if(w>N)for(;w<=P;)Ie(d[w],v,b,!0),w++;else{const j=w,V=w,re=new Map;for(w=V;w<=N;w++){const Ce=h[w]=I?yt(h[w]):qe(h[w]);Ce.key!=null&&re.set(Ce.key,w)}let Y,Te=0;const pe=N-V+1;let Le=!1,Ae=0;const Cn=new Array(pe);for(w=0;w<pe;w++)Cn[w]=0;for(w=j;w<=P;w++){const Ce=d[w];if(Te>=pe){Ie(Ce,v,b,!0);continue}let We;if(Ce.key!=null)We=re.get(Ce.key);else for(Y=V;Y<=N;Y++)if(Cn[Y-V]===0&&Rn(Ce,h[Y])){We=Y;break}We===void 0?Ie(Ce,v,b,!0):(Cn[We-V]=w+1,We>=Ae?Ae=We:Le=!0,T(Ce,h[We],m,null,v,b,A,S,I),Te++)}const io=Le?_d(Cn):tn;for(Y=io.length-1,w=pe-1;w>=0;w--){const Ce=V+w,We=h[Ce],oo=Ce+1<U?h[Ce+1].el:y;Cn[w]===0?T(null,We,m,oo,v,b,A,S,I):Le&&(Y<0||w!==io[Y]?Ve(We,m,oo,2):Y--)}}},Ve=(d,h,m,y,v=null)=>{const{el:b,type:A,transition:S,children:I,shapeFlag:w}=d;if(w&6){Ve(d.component.subTree,h,m,y);return}if(w&128){d.suspense.move(h,m,y);return}if(w&64){A.move(d,h,m,D);return}if(A===Se){r(b,h,m);for(let P=0;P<I.length;P++)Ve(I[P],h,m,y);r(d.anchor,h,m);return}if(A===ks){$(d,h,m);return}if(y!==2&&w&1&&S)if(y===0)S.beforeEnter(b),r(b,h,m),Pe(()=>S.enter(b),v);else{const{leave:P,delayLeave:N,afterLeave:j}=S,V=()=>r(b,h,m),re=()=>{P(b,()=>{V(),j&&j()})};N?N(b,V,re):re()}else r(b,h,m)},Ie=(d,h,m,y=!1,v=!1)=>{const{type:b,props:A,ref:S,children:I,dynamicChildren:w,shapeFlag:U,patchFlag:P,dirs:N,cacheIndex:j}=d;if(P===-2&&(v=!1),S!=null&&Zs(S,null,m,d,!0),j!=null&&(h.renderCache[j]=void 0),U&256){h.ctx.deactivate(d);return}const V=U&1&&N,re=!an(d);let Y;if(re&&(Y=A&&A.onVnodeBeforeUnmount)&&Ke(Y,h,d),U&6)vr(d.component,m,y);else{if(U&128){d.suspense.unmount(m,y);return}V&&Lt(d,null,h,"beforeUnmount"),U&64?d.type.remove(d,h,m,D,y):w&&!w.hasOnce&&(b!==Se||P>0&&P&64)?De(w,h,m,!1,!0):(b===Se&&P&384||!v&&U&16)&&De(I,h,m),y&&Jt(d)}(re&&(Y=A&&A.onVnodeUnmounted)||V)&&Pe(()=>{Y&&Ke(Y,h,d),V&&Lt(d,null,h,"unmounted")},m)},Jt=d=>{const{type:h,el:m,anchor:y,transition:v}=d;if(h===Se){Yt(m,y);return}if(h===ks){k(d);return}const b=()=>{s(m),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(d.shapeFlag&1&&v&&!v.persisted){const{leave:A,delayLeave:S}=v,I=()=>A(m,b);S?S(d.el,b,I):I()}else b()},Yt=(d,h)=>{let m;for(;d!==h;)m=p(d),s(d),d=m;s(h)},vr=(d,h,m)=>{const{bum:y,scope:v,job:b,subTree:A,um:S,m:I,a:w}=d;yo(I),yo(w),y&&Sr(y),v.stop(),b&&(b.flags|=8,Ie(A,d,h,m)),S&&Pe(S,h),Pe(()=>{d.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},De=(d,h,m,y=!1,v=!1,b=0)=>{for(let A=b;A<d.length;A++)Ie(d[A],h,m,y,v)},_=d=>{if(d.shapeFlag&6)return _(d.component.subTree);if(d.shapeFlag&128)return d.suspense.next();const h=p(d.anchor||d.el),m=h&&h[Ff];return m?p(m):h};let R=!1;const C=(d,h,m)=>{d==null?h._vnode&&Ie(h._vnode,null,null,!0):T(h._vnode||null,d,h,null,null,null,m),h._vnode=d,R||(R=!0,fo(),jl(),R=!1)},D={p:T,um:Ie,m:Ve,r:Jt,mt:An,mc:ke,pc:K,pbc:$e,n:_,o:t};let J,ae;return{render:C,hydrate:J,createApp:ld(C,J)}}function Rs({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ut({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function vd(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function ac(t,e,n=!1){const r=t.children,s=e.children;if(F(r)&&F(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=yt(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&ac(o,a)),a.type===ls&&(a.el=o.el)}}function _d(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(s=n[n.length-1],t[s]<c){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function lc(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:lc(e)}function yo(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const yd=Symbol.for("v-scx"),bd=()=>lt(yd);function Hn(t,e,n){return cc(t,e,n)}function cc(t,e,n=te){const{immediate:r,deep:s,flush:i,once:o}=n,a=de({},n),l=e&&r||!e&&i!=="post";let c;if(Qn){if(i==="sync"){const g=bd();c=g.__watcherHandles||(g.__watcherHandles=[])}else if(!l){const g=()=>{};return g.stop=Je,g.resume=Je,g.pause=Je,g}}const u=ve;a.call=(g,E,T)=>Qe(g,u,E,T);let f=!1;i==="post"?a.scheduler=g=>{Pe(g,u&&u.suspense)}:i!=="sync"&&(f=!0,a.scheduler=(g,E)=>{E?g():Di(g)}),a.augmentJob=g=>{e&&(g.flags|=4),f&&(g.flags|=2,u&&(g.id=u.uid,g.i=u))};const p=xf(t,e,a);return Qn&&(c?c.push(p):l&&p()),p}function wd(t,e,n){const r=this.proxy,s=ce(t)?t.includes(".")?uc(r,t):()=>r[t]:t.bind(r,r);let i;B(e)?i=e:(i=e.handler,n=e);const o=or(this),a=cc(s,i.bind(r),n);return o(),a}function uc(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Ed=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Ne(e)}Modifiers`]||t[`${Gt(e)}Modifiers`];function Id(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||te;let s=n;const i=e.startsWith("update:"),o=i&&Ed(r,e.slice(7));o&&(o.trim&&(s=n.map(u=>ce(u)?u.trim():u)),o.number&&(s=n.map(Gs)));let a,l=r[a=bs(e)]||r[a=bs(Ne(e))];!l&&i&&(l=r[a=bs(Gt(e))]),l&&Qe(l,t,6,s);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Qe(c,t,6,s)}}function fc(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!B(t)){const l=c=>{const u=fc(c,e,!0);u&&(a=!0,de(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(ie(t)&&r.set(t,null),null):(F(i)?i.forEach(l=>o[l]=null):de(o,i),ie(t)&&r.set(t,o),o)}function as(t,e){return!t||!Xr(e)?!1:(e=e.slice(2).replace(/Once$/,""),q(t,e[0].toLowerCase()+e.slice(1))||q(t,Gt(e))||q(t,e))}function Os(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:p,setupState:g,ctx:E,inheritAttrs:T}=t,L=Dr(t);let M,O;try{if(n.shapeFlag&4){const k=s||r,z=k;M=qe(c.call(z,k,u,f,g,p,E)),O=a}else{const k=e;M=qe(k.length>1?k(f,{attrs:a,slots:o,emit:l}):k(f,null)),O=e.props?a:Sd(a)}}catch(k){jn.length=0,is(k,t,1),M=Z(Rt)}let $=M;if(O&&T!==!1){const k=Object.keys(O),{shapeFlag:z}=$;k.length&&z&7&&(i&&k.some(Ii)&&(O=Td(O,i)),$=hn($,O,!1,!0))}return n.dirs&&($=hn($,null,!1,!0),$.dirs=$.dirs?$.dirs.concat(n.dirs):n.dirs),n.transition&&xi($,n.transition),M=$,Dr(L),M}const Sd=t=>{let e;for(const n in t)(n==="class"||n==="style"||Xr(n))&&((e||(e={}))[n]=t[n]);return e},Td=(t,e)=>{const n={};for(const r in t)(!Ii(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Ad(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?bo(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const p=u[f];if(o[p]!==r[p]&&!as(c,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?bo(r,o,c):!0:!!o;return!1}function bo(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!as(n,i))return!0}return!1}function Cd({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const dc=t=>t.__isSuspense;function Pd(t,e){e&&e.pendingBranch?F(t)?e.effects.push(...t):e.effects.push(t):Uf(t)}const Se=Symbol.for("v-fgt"),ls=Symbol.for("v-txt"),Rt=Symbol.for("v-cmt"),ks=Symbol.for("v-stc"),jn=[];let Oe=null;function we(t=!1){jn.push(Oe=t?null:[])}function Rd(){jn.pop(),Oe=jn[jn.length-1]||null}let Yn=1;function wo(t){Yn+=t,t<0&&Oe&&(Oe.hasOnce=!0)}function hc(t){return t.dynamicChildren=Yn>0?Oe||tn:null,Rd(),Yn>0&&Oe&&Oe.push(t),t}function je(t,e,n,r,s,i){return hc(x(t,e,n,r,s,i,!0))}function Nr(t,e,n,r,s){return hc(Z(t,e,n,r,s,!0))}function Xn(t){return t?t.__v_isVNode===!0:!1}function Rn(t,e){return t.type===e.type&&t.key===e.key}const pc=({key:t})=>t??null,Ar=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ce(t)||_e(t)||B(t)?{i:he,r:t,k:e,f:!!n}:t:null);function x(t,e=null,n=null,r=0,s=null,i=t===Se?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&pc(e),ref:e&&Ar(e),scopeId:zl,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:he};return a?(Ui(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=ce(n)?8:16),Yn>0&&!o&&Oe&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Oe.push(l),l}const Z=Od;function Od(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Zf)&&(t=Rt),Xn(t)){const a=hn(t,e,!0);return n&&Ui(a,n),Yn>0&&!i&&Oe&&(a.shapeFlag&6?Oe[Oe.indexOf(t)]=a:Oe.push(a)),a.patchFlag=-2,a}if(jd(t)&&(t=t.__vccOpts),e){e=kd(e);let{class:a,style:l}=e;a&&!ce(a)&&(e.class=Kn(a)),ie(l)&&($i(l)&&!F(l)&&(l=de({},l)),e.style=Ai(l))}const o=ce(t)?1:dc(t)?128:Hf(t)?64:ie(t)?4:B(t)?2:0;return x(t,e,n,r,s,o,i,!0)}function kd(t){return t?$i(t)||ec(t)?de({},t):t:null}function hn(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:l}=t,c=e?Md(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&pc(c),ref:e&&e.ref?n&&i?F(i)?i.concat(Ar(e)):[i,Ar(e)]:Ar(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Se?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&hn(t.ssContent),ssFallback:t.ssFallback&&hn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&xi(u,l.clone(u)),u}function W(t=" ",e=0){return Z(ls,null,t,e)}function gc(t="",e=!1){return e?(we(),Nr(Rt,null,t)):Z(Rt,null,t)}function qe(t){return t==null||typeof t=="boolean"?Z(Rt):F(t)?Z(Se,null,t.slice()):Xn(t)?yt(t):Z(ls,null,String(t))}function yt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:hn(t)}function Ui(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(F(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Ui(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!ec(e)?e._ctx=he:s===3&&he&&(he.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else B(e)?(e={default:e,_ctx:he},n=32):(e=String(e),r&64?(n=16,e=[W(e)]):n=8);t.children=e,t.shapeFlag|=n}function Md(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Kn([e.class,r.class]));else if(s==="style")e.style=Ai([e.style,r.style]);else if(Xr(s)){const i=e[s],o=r[s];o&&i!==o&&!(F(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Ke(t,e,n,r=null){Qe(t,e,7,[n,r])}const $d=Xl();let Dd=0;function xd(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||$d,i={uid:Dd++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new _l(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:nc(r,s),emitsOptions:fc(r,s),emit:null,emitted:null,propsDefaults:te,inheritAttrs:r.inheritAttrs,ctx:te,data:te,props:te,attrs:te,slots:te,refs:te,setupState:te,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Id.bind(null,i),t.ce&&t.ce(i),i}let ve=null,Lr,si;{const t=ts(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Lr=e("__VUE_INSTANCE_SETTERS__",n=>ve=n),si=e("__VUE_SSR_SETTERS__",n=>Qn=n)}const or=t=>{const e=ve;return Lr(t),t.scope.on(),()=>{t.scope.off(),Lr(e)}},Eo=()=>{ve&&ve.scope.off(),Lr(null)};function mc(t){return t.vnode.shapeFlag&4}let Qn=!1;function Nd(t,e=!1,n=!1){e&&si(e);const{props:r,children:s}=t.vnode,i=mc(t);cd(t,r,i,e),hd(t,s,n);const o=i?Ld(t,e):void 0;return e&&si(!1),o}function Ld(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,td);const{setup:r}=n;if(r){Ot();const s=t.setupContext=r.length>1?Fd(t):null,i=or(t),o=ir(r,t,0,[t.props,s]),a=ul(o);if(kt(),i(),(a||t.sp)&&!an(t)&&Vl(t),a){if(o.then(Eo,Eo),e)return o.then(l=>{Io(t,l,e)}).catch(l=>{is(l,t,0)});t.asyncDep=o}else Io(t,o,e)}else vc(t,e)}function Io(t,e,n){B(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ie(e)&&(t.setupState=Ll(e)),vc(t,n)}let So;function vc(t,e,n){const r=t.type;if(!t.render){if(!e&&So&&!r.render){const s=r.template||Ni(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=de(de({isCustomElement:i,delimiters:a},o),l);r.render=So(s,c)}}t.render=r.render||Je}{const s=or(t);Ot();try{nd(t)}finally{kt(),s()}}}const Ud={get(t,e){return ge(t,"get",""),t[e]}};function Fd(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Ud),slots:t.slots,emit:t.emit,expose:e}}function cs(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Ll(xl(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Fn)return Fn[n](t)},has(e,n){return n in e||n in Fn}})):t.proxy}function Hd(t,e=!0){return B(t)?t.displayName||t.name:t.name||e&&t.__name}function jd(t){return B(t)&&"__vccOpts"in t}const Ue=(t,e)=>$f(t,e,Qn);function _c(t,e,n){const r=arguments.length;return r===2?ie(e)&&!F(e)?Xn(e)?Z(t,null,[e]):Z(t,e):Z(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Xn(n)&&(n=[n]),Z(t,e,n))}const Bd="3.5.12";/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ii;const To=typeof window<"u"&&window.trustedTypes;if(To)try{ii=To.createPolicy("vue",{createHTML:t=>t})}catch{}const yc=ii?t=>ii.createHTML(t):t=>t,zd="http://www.w3.org/2000/svg",Vd="http://www.w3.org/1998/Math/MathML",nt=typeof document<"u"?document:null,Ao=nt&&nt.createElement("template"),Wd={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?nt.createElementNS(zd,t):e==="mathml"?nt.createElementNS(Vd,t):n?nt.createElement(t,{is:n}):nt.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>nt.createTextNode(t),createComment:t=>nt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>nt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Ao.innerHTML=yc(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=Ao.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Kd=Symbol("_vtc");function Gd(t,e,n){const r=t[Kd];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Co=Symbol("_vod"),qd=Symbol("_vsh"),Jd=Symbol(""),Yd=/(^|;)\s*display\s*:/;function Xd(t,e,n){const r=t.style,s=ce(n);let i=!1;if(n&&!s){if(e)if(ce(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Cr(r,a,"")}else for(const o in e)n[o]==null&&Cr(r,o,"");for(const o in n)o==="display"&&(i=!0),Cr(r,o,n[o])}else if(s){if(e!==n){const o=r[Jd];o&&(n+=";"+o),r.cssText=n,i=Yd.test(n)}}else e&&t.removeAttribute("style");Co in t&&(t[Co]=i?r.display:"",t[qd]&&(r.display="none"))}const Po=/\s*!important$/;function Cr(t,e,n){if(F(n))n.forEach(r=>Cr(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Qd(t,e);Po.test(n)?t.setProperty(Gt(r),n.replace(Po,""),"important"):t[r]=n}}const Ro=["Webkit","Moz","ms"],Ms={};function Qd(t,e){const n=Ms[e];if(n)return n;let r=Ne(e);if(r!=="filter"&&r in t)return Ms[e]=r;r=es(r);for(let s=0;s<Ro.length;s++){const i=Ro[s]+r;if(i in t)return Ms[e]=i}return e}const Oo="http://www.w3.org/1999/xlink";function ko(t,e,n,r,s,i=of(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Oo,e.slice(6,e.length)):t.setAttributeNS(Oo,e,n):n==null||i&&!pl(n)?t.removeAttribute(e):t.setAttribute(e,i?"":He(n)?String(n):n)}function Mo(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?yc(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=pl(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Bt(t,e,n,r){t.addEventListener(e,n,r)}function Zd(t,e,n,r){t.removeEventListener(e,n,r)}const $o=Symbol("_vei");function eh(t,e,n,r,s=null){const i=t[$o]||(t[$o]={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=th(e);if(r){const c=i[e]=sh(r,s);Bt(t,a,c,l)}else o&&(Zd(t,a,o,l),i[e]=void 0)}}const Do=/(?:Once|Passive|Capture)$/;function th(t){let e;if(Do.test(t)){e={};let r;for(;r=t.match(Do);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Gt(t.slice(2)),e]}let $s=0;const nh=Promise.resolve(),rh=()=>$s||(nh.then(()=>$s=0),$s=Date.now());function sh(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Qe(ih(r,n.value),e,5,[r])};return n.value=t,n.attached=rh(),n}function ih(t,e){if(F(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const xo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,oh=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?Gd(t,r,o):e==="style"?Xd(t,n,r):Xr(e)?Ii(e)||eh(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ah(t,e,r,o))?(Mo(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&ko(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ce(r))?Mo(t,Ne(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),ko(t,e,r,o))};function ah(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&xo(e)&&B(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return xo(e)&&ce(n)?!1:e in t}const Ur=t=>{const e=t.props["onUpdate:modelValue"]||!1;return F(e)?n=>Sr(e,n):e};function lh(t){t.target.composing=!0}function No(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const cn=Symbol("_assign"),Lo={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[cn]=Ur(s);const i=r||s.props&&s.props.type==="number";Bt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Gs(a)),t[cn](a)}),n&&Bt(t,"change",()=>{t.value=t.value.trim()}),e||(Bt(t,"compositionstart",lh),Bt(t,"compositionend",No),Bt(t,"change",No))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[cn]=Ur(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?Gs(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},ch={deep:!0,created(t,e,n){t[cn]=Ur(n),Bt(t,"change",()=>{const r=t._modelValue,s=uh(t),i=t.checked,o=t[cn];if(F(r)){const a=gl(r,s),l=a!==-1;if(i&&!l)o(r.concat(s));else if(!i&&l){const c=[...r];c.splice(a,1),o(c)}}else if(Qr(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(bc(t,i))})},mounted:Uo,beforeUpdate(t,e,n){t[cn]=Ur(n),Uo(t,e,n)}};function Uo(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(F(e))s=gl(e,r.props.value)>-1;else if(Qr(e))s=e.has(r.props.value);else{if(e===n)return;s=ns(e,bc(t,!0))}t.checked!==s&&(t.checked=s)}function uh(t){return"_value"in t?t._value:t.value}function bc(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const fh=["ctrl","shift","alt","meta"],dh={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>fh.some(n=>t[`${n}Key`]&&!e.includes(n))},On=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=dh[e[o]];if(a&&a(s,e))return}return t(s,...i)})},hh=de({patchProp:oh},Wd);let Fo;function ph(){return Fo||(Fo=gd(hh))}const gh=(...t)=>{const e=ph().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=vh(r);if(!s)return;const i=e._component;!B(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,mh(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function mh(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function vh(t){return ce(t)?document.querySelector(t):t}var _h=!1;/*!
 * pinia v2.2.4
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */const yh=Symbol();var Ho;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ho||(Ho={}));function bh(){const t=cf(!0),e=t.run(()=>Un({}));let n=[],r=[];const s=xl({install(i){s._a=i,i.provide(yh,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!_h?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}var wr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function wh(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function Eh(t,e,n){var r;return n(t,function(s,i,o){if(e(s,i,o))return r=i,!1}),r}var Ih=Eh;function Sh(t){return function(e,n,r){for(var s=-1,i=Object(e),o=r(e),a=o.length;a--;){var l=o[t?a:++s];if(n(i[l],l,i)===!1)break}return e}}var Th=Sh,Ah=Th,Ch=Ah(),Ph=Ch;function Rh(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}var Oh=Rh,kh=typeof wr=="object"&&wr&&wr.Object===Object&&wr,wc=kh,Mh=wc,$h=typeof self=="object"&&self&&self.Object===Object&&self,Dh=Mh||$h||Function("return this")(),ht=Dh,xh=ht,Nh=xh.Symbol,us=Nh,jo=us,Ec=Object.prototype,Lh=Ec.hasOwnProperty,Uh=Ec.toString,kn=jo?jo.toStringTag:void 0;function Fh(t){var e=Lh.call(t,kn),n=t[kn];try{t[kn]=void 0;var r=!0}catch{}var s=Uh.call(t);return r&&(e?t[kn]=n:delete t[kn]),s}var Hh=Fh,jh=Object.prototype,Bh=jh.toString;function zh(t){return Bh.call(t)}var Vh=zh,Bo=us,Wh=Hh,Kh=Vh,Gh="[object Null]",qh="[object Undefined]",zo=Bo?Bo.toStringTag:void 0;function Jh(t){return t==null?t===void 0?qh:Gh:zo&&zo in Object(t)?Wh(t):Kh(t)}var ar=Jh;function Yh(t){return t!=null&&typeof t=="object"}var lr=Yh,Xh=ar,Qh=lr,Zh="[object Arguments]";function ep(t){return Qh(t)&&Xh(t)==Zh}var tp=ep,Vo=tp,np=lr,Ic=Object.prototype,rp=Ic.hasOwnProperty,sp=Ic.propertyIsEnumerable,ip=Vo(function(){return arguments}())?Vo:function(t){return np(t)&&rp.call(t,"callee")&&!sp.call(t,"callee")},Sc=ip,op=Array.isArray,Mt=op,Fr={exports:{}};function ap(){return!1}var lp=ap;Fr.exports;(function(t,e){var n=ht,r=lp,s=e&&!e.nodeType&&e,i=s&&!0&&t&&!t.nodeType&&t,o=i&&i.exports===s,a=o?n.Buffer:void 0,l=a?a.isBuffer:void 0,c=l||r;t.exports=c})(Fr,Fr.exports);var Tc=Fr.exports,cp=9007199254740991,up=/^(?:0|[1-9]\d*)$/;function fp(t,e){var n=typeof t;return e=e??cp,!!e&&(n=="number"||n!="symbol"&&up.test(t))&&t>-1&&t%1==0&&t<e}var Ac=fp,dp=9007199254740991;function hp(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=dp}var Fi=hp,pp=ar,gp=Fi,mp=lr,vp="[object Arguments]",_p="[object Array]",yp="[object Boolean]",bp="[object Date]",wp="[object Error]",Ep="[object Function]",Ip="[object Map]",Sp="[object Number]",Tp="[object Object]",Ap="[object RegExp]",Cp="[object Set]",Pp="[object String]",Rp="[object WeakMap]",Op="[object ArrayBuffer]",kp="[object DataView]",Mp="[object Float32Array]",$p="[object Float64Array]",Dp="[object Int8Array]",xp="[object Int16Array]",Np="[object Int32Array]",Lp="[object Uint8Array]",Up="[object Uint8ClampedArray]",Fp="[object Uint16Array]",Hp="[object Uint32Array]",oe={};oe[Mp]=oe[$p]=oe[Dp]=oe[xp]=oe[Np]=oe[Lp]=oe[Up]=oe[Fp]=oe[Hp]=!0;oe[vp]=oe[_p]=oe[Op]=oe[yp]=oe[kp]=oe[bp]=oe[wp]=oe[Ep]=oe[Ip]=oe[Sp]=oe[Tp]=oe[Ap]=oe[Cp]=oe[Pp]=oe[Rp]=!1;function jp(t){return mp(t)&&gp(t.length)&&!!oe[pp(t)]}var Bp=jp;function zp(t){return function(e){return t(e)}}var Vp=zp,Hr={exports:{}};Hr.exports;(function(t,e){var n=wc,r=e&&!e.nodeType&&e,s=r&&!0&&t&&!t.nodeType&&t,i=s&&s.exports===r,o=i&&n.process,a=function(){try{var l=s&&s.require&&s.require("util").types;return l||o&&o.binding&&o.binding("util")}catch{}}();t.exports=a})(Hr,Hr.exports);var Wp=Hr.exports,Kp=Bp,Gp=Vp,Wo=Wp,Ko=Wo&&Wo.isTypedArray,qp=Ko?Gp(Ko):Kp,Cc=qp,Jp=Oh,Yp=Sc,Xp=Mt,Qp=Tc,Zp=Ac,eg=Cc,tg=Object.prototype,ng=tg.hasOwnProperty;function rg(t,e){var n=Xp(t),r=!n&&Yp(t),s=!n&&!r&&Qp(t),i=!n&&!r&&!s&&eg(t),o=n||r||s||i,a=o?Jp(t.length,String):[],l=a.length;for(var c in t)(e||ng.call(t,c))&&!(o&&(c=="length"||s&&(c=="offset"||c=="parent")||i&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||Zp(c,l)))&&a.push(c);return a}var sg=rg,ig=Object.prototype;function og(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||ig;return t===n}var ag=og;function lg(t,e){return function(n){return t(e(n))}}var cg=lg,ug=cg,fg=ug(Object.keys,Object),dg=fg,hg=ag,pg=dg,gg=Object.prototype,mg=gg.hasOwnProperty;function vg(t){if(!hg(t))return pg(t);var e=[];for(var n in Object(t))mg.call(t,n)&&n!="constructor"&&e.push(n);return e}var _g=vg;function yg(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var Hi=yg,bg=ar,wg=Hi,Eg="[object AsyncFunction]",Ig="[object Function]",Sg="[object GeneratorFunction]",Tg="[object Proxy]";function Ag(t){if(!wg(t))return!1;var e=bg(t);return e==Ig||e==Sg||e==Eg||e==Tg}var Pc=Ag,Cg=Pc,Pg=Fi;function Rg(t){return t!=null&&Pg(t.length)&&!Cg(t)}var Og=Rg,kg=sg,Mg=_g,$g=Og;function Dg(t){return $g(t)?kg(t):Mg(t)}var ji=Dg,xg=Ph,Ng=ji;function Lg(t,e){return t&&xg(t,e,Ng)}var Ug=Lg;function Fg(){this.__data__=[],this.size=0}var Hg=Fg;function jg(t,e){return t===e||t!==t&&e!==e}var Rc=jg,Bg=Rc;function zg(t,e){for(var n=t.length;n--;)if(Bg(t[n][0],e))return n;return-1}var fs=zg,Vg=fs,Wg=Array.prototype,Kg=Wg.splice;function Gg(t){var e=this.__data__,n=Vg(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():Kg.call(e,n,1),--this.size,!0}var qg=Gg,Jg=fs;function Yg(t){var e=this.__data__,n=Jg(e,t);return n<0?void 0:e[n][1]}var Xg=Yg,Qg=fs;function Zg(t){return Qg(this.__data__,t)>-1}var em=Zg,tm=fs;function nm(t,e){var n=this.__data__,r=tm(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}var rm=nm,sm=Hg,im=qg,om=Xg,am=em,lm=rm;function yn(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}yn.prototype.clear=sm;yn.prototype.delete=im;yn.prototype.get=om;yn.prototype.has=am;yn.prototype.set=lm;var ds=yn,cm=ds;function um(){this.__data__=new cm,this.size=0}var fm=um;function dm(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}var hm=dm;function pm(t){return this.__data__.get(t)}var gm=pm;function mm(t){return this.__data__.has(t)}var vm=mm,_m=ht,ym=_m["__core-js_shared__"],bm=ym,Ds=bm,Go=function(){var t=/[^.]+$/.exec(Ds&&Ds.keys&&Ds.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function wm(t){return!!Go&&Go in t}var Em=wm,Im=Function.prototype,Sm=Im.toString;function Tm(t){if(t!=null){try{return Sm.call(t)}catch{}try{return t+""}catch{}}return""}var Oc=Tm,Am=Pc,Cm=Em,Pm=Hi,Rm=Oc,Om=/[\\^$.*+?()[\]{}|]/g,km=/^\[object .+?Constructor\]$/,Mm=Function.prototype,$m=Object.prototype,Dm=Mm.toString,xm=$m.hasOwnProperty,Nm=RegExp("^"+Dm.call(xm).replace(Om,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Lm(t){if(!Pm(t)||Cm(t))return!1;var e=Am(t)?Nm:km;return e.test(Rm(t))}var Um=Lm;function Fm(t,e){return t==null?void 0:t[e]}var Hm=Fm,jm=Um,Bm=Hm;function zm(t,e){var n=Bm(t,e);return jm(n)?n:void 0}var bn=zm,Vm=bn,Wm=ht,Km=Vm(Wm,"Map"),Bi=Km,Gm=bn,qm=Gm(Object,"create"),hs=qm,qo=hs;function Jm(){this.__data__=qo?qo(null):{},this.size=0}var Ym=Jm;function Xm(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var Qm=Xm,Zm=hs,ev="__lodash_hash_undefined__",tv=Object.prototype,nv=tv.hasOwnProperty;function rv(t){var e=this.__data__;if(Zm){var n=e[t];return n===ev?void 0:n}return nv.call(e,t)?e[t]:void 0}var sv=rv,iv=hs,ov=Object.prototype,av=ov.hasOwnProperty;function lv(t){var e=this.__data__;return iv?e[t]!==void 0:av.call(e,t)}var cv=lv,uv=hs,fv="__lodash_hash_undefined__";function dv(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=uv&&e===void 0?fv:e,this}var hv=dv,pv=Ym,gv=Qm,mv=sv,vv=cv,_v=hv;function wn(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}wn.prototype.clear=pv;wn.prototype.delete=gv;wn.prototype.get=mv;wn.prototype.has=vv;wn.prototype.set=_v;var yv=wn,Jo=yv,bv=ds,wv=Bi;function Ev(){this.size=0,this.__data__={hash:new Jo,map:new(wv||bv),string:new Jo}}var Iv=Ev;function Sv(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}var Tv=Sv,Av=Tv;function Cv(t,e){var n=t.__data__;return Av(e)?n[typeof e=="string"?"string":"hash"]:n.map}var ps=Cv,Pv=ps;function Rv(t){var e=Pv(this,t).delete(t);return this.size-=e?1:0,e}var Ov=Rv,kv=ps;function Mv(t){return kv(this,t).get(t)}var $v=Mv,Dv=ps;function xv(t){return Dv(this,t).has(t)}var Nv=xv,Lv=ps;function Uv(t,e){var n=Lv(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}var Fv=Uv,Hv=Iv,jv=Ov,Bv=$v,zv=Nv,Vv=Fv;function En(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}En.prototype.clear=Hv;En.prototype.delete=jv;En.prototype.get=Bv;En.prototype.has=zv;En.prototype.set=Vv;var zi=En,Wv=ds,Kv=Bi,Gv=zi,qv=200;function Jv(t,e){var n=this.__data__;if(n instanceof Wv){var r=n.__data__;if(!Kv||r.length<qv-1)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new Gv(r)}return n.set(t,e),this.size=n.size,this}var Yv=Jv,Xv=ds,Qv=fm,Zv=hm,e_=gm,t_=vm,n_=Yv;function In(t){var e=this.__data__=new Xv(t);this.size=e.size}In.prototype.clear=Qv;In.prototype.delete=Zv;In.prototype.get=e_;In.prototype.has=t_;In.prototype.set=n_;var kc=In,r_="__lodash_hash_undefined__";function s_(t){return this.__data__.set(t,r_),this}var i_=s_;function o_(t){return this.__data__.has(t)}var a_=o_,l_=zi,c_=i_,u_=a_;function jr(t){var e=-1,n=t==null?0:t.length;for(this.__data__=new l_;++e<n;)this.add(t[e])}jr.prototype.add=jr.prototype.push=c_;jr.prototype.has=u_;var f_=jr;function d_(t,e){for(var n=-1,r=t==null?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1}var h_=d_;function p_(t,e){return t.has(e)}var g_=p_,m_=f_,v_=h_,__=g_,y_=1,b_=2;function w_(t,e,n,r,s,i){var o=n&y_,a=t.length,l=e.length;if(a!=l&&!(o&&l>a))return!1;var c=i.get(t),u=i.get(e);if(c&&u)return c==e&&u==t;var f=-1,p=!0,g=n&b_?new m_:void 0;for(i.set(t,e),i.set(e,t);++f<a;){var E=t[f],T=e[f];if(r)var L=o?r(T,E,f,e,t,i):r(E,T,f,t,e,i);if(L!==void 0){if(L)continue;p=!1;break}if(g){if(!v_(e,function(M,O){if(!__(g,O)&&(E===M||s(E,M,n,r,i)))return g.push(O)})){p=!1;break}}else if(!(E===T||s(E,T,n,r,i))){p=!1;break}}return i.delete(t),i.delete(e),p}var Mc=w_,E_=ht,I_=E_.Uint8Array,S_=I_;function T_(t){var e=-1,n=Array(t.size);return t.forEach(function(r,s){n[++e]=[s,r]}),n}var A_=T_;function C_(t){var e=-1,n=Array(t.size);return t.forEach(function(r){n[++e]=r}),n}var P_=C_,Yo=us,Xo=S_,R_=Rc,O_=Mc,k_=A_,M_=P_,$_=1,D_=2,x_="[object Boolean]",N_="[object Date]",L_="[object Error]",U_="[object Map]",F_="[object Number]",H_="[object RegExp]",j_="[object Set]",B_="[object String]",z_="[object Symbol]",V_="[object ArrayBuffer]",W_="[object DataView]",Qo=Yo?Yo.prototype:void 0,xs=Qo?Qo.valueOf:void 0;function K_(t,e,n,r,s,i,o){switch(n){case W_:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case V_:return!(t.byteLength!=e.byteLength||!i(new Xo(t),new Xo(e)));case x_:case N_:case F_:return R_(+t,+e);case L_:return t.name==e.name&&t.message==e.message;case H_:case B_:return t==e+"";case U_:var a=k_;case j_:var l=r&$_;if(a||(a=M_),t.size!=e.size&&!l)return!1;var c=o.get(t);if(c)return c==e;r|=D_,o.set(t,e);var u=O_(a(t),a(e),r,s,i,o);return o.delete(t),u;case z_:if(xs)return xs.call(t)==xs.call(e)}return!1}var G_=K_;function q_(t,e){for(var n=-1,r=e.length,s=t.length;++n<r;)t[s+n]=e[n];return t}var J_=q_,Y_=J_,X_=Mt;function Q_(t,e,n){var r=e(t);return X_(t)?r:Y_(r,n(t))}var Z_=Q_;function ey(t,e){for(var n=-1,r=t==null?0:t.length,s=0,i=[];++n<r;){var o=t[n];e(o,n,t)&&(i[s++]=o)}return i}var ty=ey;function ny(){return[]}var ry=ny,sy=ty,iy=ry,oy=Object.prototype,ay=oy.propertyIsEnumerable,Zo=Object.getOwnPropertySymbols,ly=Zo?function(t){return t==null?[]:(t=Object(t),sy(Zo(t),function(e){return ay.call(t,e)}))}:iy,cy=ly,uy=Z_,fy=cy,dy=ji;function hy(t){return uy(t,dy,fy)}var py=hy,ea=py,gy=1,my=Object.prototype,vy=my.hasOwnProperty;function _y(t,e,n,r,s,i){var o=n&gy,a=ea(t),l=a.length,c=ea(e),u=c.length;if(l!=u&&!o)return!1;for(var f=l;f--;){var p=a[f];if(!(o?p in e:vy.call(e,p)))return!1}var g=i.get(t),E=i.get(e);if(g&&E)return g==e&&E==t;var T=!0;i.set(t,e),i.set(e,t);for(var L=o;++f<l;){p=a[f];var M=t[p],O=e[p];if(r)var $=o?r(O,M,p,e,t,i):r(M,O,p,t,e,i);if(!($===void 0?M===O||s(M,O,n,r,i):$)){T=!1;break}L||(L=p=="constructor")}if(T&&!L){var k=t.constructor,z=e.constructor;k!=z&&"constructor"in t&&"constructor"in e&&!(typeof k=="function"&&k instanceof k&&typeof z=="function"&&z instanceof z)&&(T=!1)}return i.delete(t),i.delete(e),T}var yy=_y,by=bn,wy=ht,Ey=by(wy,"DataView"),Iy=Ey,Sy=bn,Ty=ht,Ay=Sy(Ty,"Promise"),Cy=Ay,Py=bn,Ry=ht,Oy=Py(Ry,"Set"),ky=Oy,My=bn,$y=ht,Dy=My($y,"WeakMap"),xy=Dy,oi=Iy,ai=Bi,li=Cy,ci=ky,ui=xy,$c=ar,Sn=Oc,ta="[object Map]",Ny="[object Object]",na="[object Promise]",ra="[object Set]",sa="[object WeakMap]",ia="[object DataView]",Ly=Sn(oi),Uy=Sn(ai),Fy=Sn(li),Hy=Sn(ci),jy=Sn(ui),Ht=$c;(oi&&Ht(new oi(new ArrayBuffer(1)))!=ia||ai&&Ht(new ai)!=ta||li&&Ht(li.resolve())!=na||ci&&Ht(new ci)!=ra||ui&&Ht(new ui)!=sa)&&(Ht=function(t){var e=$c(t),n=e==Ny?t.constructor:void 0,r=n?Sn(n):"";if(r)switch(r){case Ly:return ia;case Uy:return ta;case Fy:return na;case Hy:return ra;case jy:return sa}return e});var By=Ht,Ns=kc,zy=Mc,Vy=G_,Wy=yy,oa=By,aa=Mt,la=Tc,Ky=Cc,Gy=1,ca="[object Arguments]",ua="[object Array]",Er="[object Object]",qy=Object.prototype,fa=qy.hasOwnProperty;function Jy(t,e,n,r,s,i){var o=aa(t),a=aa(e),l=o?ua:oa(t),c=a?ua:oa(e);l=l==ca?Er:l,c=c==ca?Er:c;var u=l==Er,f=c==Er,p=l==c;if(p&&la(t)){if(!la(e))return!1;o=!0,u=!1}if(p&&!u)return i||(i=new Ns),o||Ky(t)?zy(t,e,n,r,s,i):Vy(t,e,l,n,r,s,i);if(!(n&Gy)){var g=u&&fa.call(t,"__wrapped__"),E=f&&fa.call(e,"__wrapped__");if(g||E){var T=g?t.value():t,L=E?e.value():e;return i||(i=new Ns),s(T,L,n,r,i)}}return p?(i||(i=new Ns),Wy(t,e,n,r,s,i)):!1}var Yy=Jy,Xy=Yy,da=lr;function Dc(t,e,n,r,s){return t===e?!0:t==null||e==null||!da(t)&&!da(e)?t!==t&&e!==e:Xy(t,e,n,r,Dc,s)}var xc=Dc,Qy=kc,Zy=xc,eb=1,tb=2;function nb(t,e,n,r){var s=n.length,i=s,o=!r;if(t==null)return!i;for(t=Object(t);s--;){var a=n[s];if(o&&a[2]?a[1]!==t[a[0]]:!(a[0]in t))return!1}for(;++s<i;){a=n[s];var l=a[0],c=t[l],u=a[1];if(o&&a[2]){if(c===void 0&&!(l in t))return!1}else{var f=new Qy;if(r)var p=r(c,u,l,t,e,f);if(!(p===void 0?Zy(u,c,eb|tb,r,f):p))return!1}}return!0}var rb=nb,sb=Hi;function ib(t){return t===t&&!sb(t)}var Nc=ib,ob=Nc,ab=ji;function lb(t){for(var e=ab(t),n=e.length;n--;){var r=e[n],s=t[r];e[n]=[r,s,ob(s)]}return e}var cb=lb;function ub(t,e){return function(n){return n==null?!1:n[t]===e&&(e!==void 0||t in Object(n))}}var Lc=ub,fb=rb,db=cb,hb=Lc;function pb(t){var e=db(t);return e.length==1&&e[0][2]?hb(e[0][0],e[0][1]):function(n){return n===t||fb(n,t,e)}}var gb=pb,mb=ar,vb=lr,_b="[object Symbol]";function yb(t){return typeof t=="symbol"||vb(t)&&mb(t)==_b}var Vi=yb,bb=Mt,wb=Vi,Eb=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ib=/^\w*$/;function Sb(t,e){if(bb(t))return!1;var n=typeof t;return n=="number"||n=="symbol"||n=="boolean"||t==null||wb(t)?!0:Ib.test(t)||!Eb.test(t)||e!=null&&t in Object(e)}var Wi=Sb,Uc=zi,Tb="Expected a function";function Ki(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(Tb);var n=function(){var r=arguments,s=e?e.apply(this,r):r[0],i=n.cache;if(i.has(s))return i.get(s);var o=t.apply(this,r);return n.cache=i.set(s,o)||i,o};return n.cache=new(Ki.Cache||Uc),n}Ki.Cache=Uc;var Ab=Ki,Cb=Ab,Pb=500;function Rb(t){var e=Cb(t,function(r){return n.size===Pb&&n.clear(),r}),n=e.cache;return e}var Ob=Rb,kb=Ob,Mb=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,$b=/\\(\\)?/g,Db=kb(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(Mb,function(n,r,s,i){e.push(s?i.replace($b,"$1"):r||n)}),e}),xb=Db;function Nb(t,e){for(var n=-1,r=t==null?0:t.length,s=Array(r);++n<r;)s[n]=e(t[n],n,t);return s}var Lb=Nb,ha=us,Ub=Lb,Fb=Mt,Hb=Vi,jb=1/0,pa=ha?ha.prototype:void 0,ga=pa?pa.toString:void 0;function Fc(t){if(typeof t=="string")return t;if(Fb(t))return Ub(t,Fc)+"";if(Hb(t))return ga?ga.call(t):"";var e=t+"";return e=="0"&&1/t==-jb?"-0":e}var Bb=Fc,zb=Bb;function Vb(t){return t==null?"":zb(t)}var Wb=Vb,Kb=Mt,Gb=Wi,qb=xb,Jb=Wb;function Yb(t,e){return Kb(t)?t:Gb(t,e)?[t]:qb(Jb(t))}var Hc=Yb,Xb=Vi,Qb=1/0;function Zb(t){if(typeof t=="string"||Xb(t))return t;var e=t+"";return e=="0"&&1/t==-Qb?"-0":e}var gs=Zb,e1=Hc,t1=gs;function n1(t,e){e=e1(e,t);for(var n=0,r=e.length;t!=null&&n<r;)t=t[t1(e[n++])];return n&&n==r?t:void 0}var jc=n1,r1=jc;function s1(t,e,n){var r=t==null?void 0:r1(t,e);return r===void 0?n:r}var i1=s1;function o1(t,e){return t!=null&&e in Object(t)}var a1=o1,l1=Hc,c1=Sc,u1=Mt,f1=Ac,d1=Fi,h1=gs;function p1(t,e,n){e=l1(e,t);for(var r=-1,s=e.length,i=!1;++r<s;){var o=h1(e[r]);if(!(i=t!=null&&n(t,o)))break;t=t[o]}return i||++r!=s?i:(s=t==null?0:t.length,!!s&&d1(s)&&f1(o,s)&&(u1(t)||c1(t)))}var g1=p1,m1=a1,v1=g1;function _1(t,e){return t!=null&&v1(t,e,m1)}var y1=_1,b1=xc,w1=i1,E1=y1,I1=Wi,S1=Nc,T1=Lc,A1=gs,C1=1,P1=2;function R1(t,e){return I1(t)&&S1(e)?T1(A1(t),e):function(n){var r=w1(n,t);return r===void 0&&r===e?E1(n,t):b1(e,r,C1|P1)}}var O1=R1;function k1(t){return t}var M1=k1;function $1(t){return function(e){return e==null?void 0:e[t]}}var D1=$1,x1=jc;function N1(t){return function(e){return x1(e,t)}}var L1=N1,U1=D1,F1=L1,H1=Wi,j1=gs;function B1(t){return H1(t)?U1(j1(t)):F1(t)}var z1=B1,V1=gb,W1=O1,K1=M1,G1=Mt,q1=z1;function J1(t){return typeof t=="function"?t:t==null?K1:typeof t=="object"?G1(t)?W1(t[0],t[1]):V1(t):q1(t)}var Y1=J1,X1=Ih,Q1=Ug,Z1=Y1;function e0(t,e){return X1(t,Z1(e),Q1)}var t0=e0,n0=function(){function t(e,n){for(var r=0;r<n.length;r++){var s=n[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();function r0(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var s0=t0,i0={messenger:/\bFB[\w_]+\/(Messenger|MESSENGER)/,facebook:/\bFB[\w_]+\//,twitter:/\bTwitter/i,line:/\bLine\//i,wechat:/\bMicroMessenger\//i,puffin:/\bPuffin/i,miui:/\bMiuiBrowser\//i,instagram:/\bInstagram/i,chrome:/\bCrMo\b|CriOS|Android.*Chrome\/[.0-9]* (Mobile)?/,safari:/Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari/,ie:/IEMobile|MSIEMobile/,firefox:/fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS/},o0=function(){function t(e){r0(this,t),this.ua="",this.ua=e}return n0(t,[{key:"browser",get:function(){var n=this;return s0(i0,function(r){return r.test(n.ua)})||"other"}},{key:"isMobile",get:function(){return/(iPad|iPhone|Android|Mobile)/i.test(this.ua)||!1}},{key:"isDesktop",get:function(){return!this.isMobile}},{key:"isInApp",get:function(){var n=["WebView","(iPhone|iPod|iPad)(?!.*Safari/)","Android.*(wv|.0.0.0)"],r=new RegExp("("+n.join("|")+")","ig");return!!this.ua.match(r)}}]),t}(),a0=o0;const l0=wh(a0);var ma={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c0=function(t,e){if(!t)throw u0(e)},u0=function(t){return new Error("Firebase Database ("+Bc.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zc=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},f0=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Vc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let p=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(p=64)),r.push(n[u],n[f],n[p],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(zc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):f0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||f==null)throw new d0;const p=i<<2|a>>4;if(r.push(p),c!==64){const g=a<<4&240|c>>2;if(r.push(g),f!==64){const E=c<<6&192|f;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class d0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const h0=function(t){const e=zc(t);return Vc.encodeByteArray(e,!0)},Br=function(t){return h0(t).replace(/\./g,"")},zr=function(t){try{return Vc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QT(t){return Wc(void 0,t)}function Wc(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!p0(n)||(t[n]=Wc(t[n],e[n]));return t}function p0(t){return t!=="__proto__"}/**
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
 */function g0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const m0=()=>g0().__FIREBASE_DEFAULTS__,v0=()=>{if(typeof process>"u"||typeof ma>"u")return;const t=ma.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},_0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&zr(t[1]);return e&&JSON.parse(e)},Gi=()=>{try{return m0()||v0()||_0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Kc=t=>{var e,n;return(n=(e=Gi())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ZT=t=>{const e=Kc(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Gc=()=>{var t;return(t=Gi())===null||t===void 0?void 0:t.config},qc=t=>{var e;return(e=Gi())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function eA(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Br(JSON.stringify(n)),Br(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function b0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ee())}function w0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function E0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function I0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function S0(){const t=Ee();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function tA(){return Bc.NODE_ADMIN===!0}function T0(){try{return typeof indexedDB=="object"}catch{return!1}}function A0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C0="FirebaseError";class $t extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=C0,Object.setPrototypeOf(this,$t.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,cr.prototype.create)}}class cr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?P0(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new $t(s,a,r)}}function P0(t,e){return t.replace(R0,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const R0=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(t){return JSON.parse(t)}function nA(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jc=function(t){let e={},n={},r={},s="";try{const i=t.split(".");e=va(zr(i[0])||""),n=va(zr(i[1])||""),s=i[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:s}},rA=function(t){const e=Jc(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},sA=function(t){const e=Jc(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iA(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function oA(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function O0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function aA(t,e,n){const r={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=e.call(n,t[s],s,t));return r}function Vr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(_a(i)&&_a(o)){if(!Vr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function _a(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lA{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const p=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(p<<1|p>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let f=0;f<80;f++){f<40?f<20?(c=a^i&(o^a),u=1518500249):(c=i^o^a,u=1859775393):f<60?(c=i&o|a&(i|o),u=2400959708):(c=i^o^a,u=3395469782);const p=(s<<5|s>>>27)+c+l+u+r[f]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=s,s=p}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<n;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function k0(t,e){const n=new M0(t,e);return n.subscribe.bind(n)}class M0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");$0(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Ls),s.error===void 0&&(s.error=Ls),s.complete===void 0&&(s.complete=Ls);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ls(){}function cA(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uA=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,c0(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},fA=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Tn(t){return t&&t._delegate?t._delegate:t}class pn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const jt="[DEFAULT]";/**
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
 */class D0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new y0;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(N0(e))try{this.getOrInitializeService({instanceIdentifier:jt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=jt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=jt){return this.instances.has(e)}getOptions(e=jt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:x0(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=jt){return this.component?this.component.multipleInstances?e:jt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function x0(t){return t===jt?void 0:t}function N0(t){return t.instantiationMode==="EAGER"}/**
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
 */class L0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new D0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const U0={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},F0=ee.INFO,H0={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},j0=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=H0[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Yc{constructor(e){this.name=e,this._logLevel=F0,this._logHandler=j0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?U0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const B0=(t,e)=>e.some(n=>t instanceof n);let ya,ba;function z0(){return ya||(ya=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function V0(){return ba||(ba=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xc=new WeakMap,fi=new WeakMap,Qc=new WeakMap,Us=new WeakMap,qi=new WeakMap;function W0(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Ct(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Xc.set(n,t)}).catch(()=>{}),qi.set(e,t),e}function K0(t){if(fi.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});fi.set(t,e)}let di={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return fi.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Qc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ct(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function G0(t){di=t(di)}function q0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Fs(this),e,...n);return Qc.set(r,e.sort?e.sort():[e]),Ct(r)}:V0().includes(t)?function(...e){return t.apply(Fs(this),e),Ct(Xc.get(this))}:function(...e){return Ct(t.apply(Fs(this),e))}}function J0(t){return typeof t=="function"?q0(t):(t instanceof IDBTransaction&&K0(t),B0(t,z0())?new Proxy(t,di):t)}function Ct(t){if(t instanceof IDBRequest)return W0(t);if(Us.has(t))return Us.get(t);const e=J0(t);return e!==t&&(Us.set(t,e),qi.set(e,t)),e}const Fs=t=>qi.get(t);function Y0(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Ct(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Ct(o.result),l.oldVersion,l.newVersion,Ct(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const X0=["get","getKey","getAll","getAllKeys","count"],Q0=["put","add","delete","clear"],Hs=new Map;function wa(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Hs.get(e))return Hs.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Q0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||X0.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return Hs.set(e,i),i}G0(t=>({...t,get:(e,n,r)=>wa(e,n)||t.get(e,n,r),has:(e,n)=>!!wa(e,n)||t.has(e,n)}));/**
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
 */class Z0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ew(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ew(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hi="@firebase/app",Ea="0.10.15";/**
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
 */const ct=new Yc("@firebase/app"),tw="@firebase/app-compat",nw="@firebase/analytics-compat",rw="@firebase/analytics",sw="@firebase/app-check-compat",iw="@firebase/app-check",ow="@firebase/auth",aw="@firebase/auth-compat",lw="@firebase/database",cw="@firebase/data-connect",uw="@firebase/database-compat",fw="@firebase/functions",dw="@firebase/functions-compat",hw="@firebase/installations",pw="@firebase/installations-compat",gw="@firebase/messaging",mw="@firebase/messaging-compat",vw="@firebase/performance",_w="@firebase/performance-compat",yw="@firebase/remote-config",bw="@firebase/remote-config-compat",ww="@firebase/storage",Ew="@firebase/storage-compat",Iw="@firebase/firestore",Sw="@firebase/vertexai",Tw="@firebase/firestore-compat",Aw="firebase",Cw="11.0.1";/**
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
 */const pi="[DEFAULT]",Pw={[hi]:"fire-core",[tw]:"fire-core-compat",[rw]:"fire-analytics",[nw]:"fire-analytics-compat",[iw]:"fire-app-check",[sw]:"fire-app-check-compat",[ow]:"fire-auth",[aw]:"fire-auth-compat",[lw]:"fire-rtdb",[cw]:"fire-data-connect",[uw]:"fire-rtdb-compat",[fw]:"fire-fn",[dw]:"fire-fn-compat",[hw]:"fire-iid",[pw]:"fire-iid-compat",[gw]:"fire-fcm",[mw]:"fire-fcm-compat",[vw]:"fire-perf",[_w]:"fire-perf-compat",[yw]:"fire-rc",[bw]:"fire-rc-compat",[ww]:"fire-gcs",[Ew]:"fire-gcs-compat",[Iw]:"fire-fst",[Tw]:"fire-fst-compat",[Sw]:"fire-vertex","fire-js":"fire-js",[Aw]:"fire-js-all"};/**
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
 */const Wr=new Map,Rw=new Map,gi=new Map;function Ia(t,e){try{t.container.addComponent(e)}catch(n){ct.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Zn(t){const e=t.name;if(gi.has(e))return ct.debug(`There were multiple attempts to register component ${e}.`),!1;gi.set(e,t);for(const n of Wr.values())Ia(n,t);for(const n of Rw.values())Ia(n,t);return!0}function Zc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Tt(t){return t.settings!==void 0}/**
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
 */const Ow={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Pt=new cr("app","Firebase",Ow);/**
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
 */class kw{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new pn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pt.create("app-deleted",{appName:this._name})}}/**
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
 */const fr=Cw;function Mw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:pi,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Pt.create("bad-app-name",{appName:String(s)});if(n||(n=Gc()),!n)throw Pt.create("no-options");const i=Wr.get(s);if(i){if(Vr(n,i.options)&&Vr(r,i.config))return i;throw Pt.create("duplicate-app",{appName:s})}const o=new L0(s);for(const l of gi.values())o.addComponent(l);const a=new kw(n,r,o);return Wr.set(s,a),a}function $w(t=pi){const e=Wr.get(t);if(!e&&t===pi&&Gc())return Mw();if(!e)throw Pt.create("no-app",{appName:t});return e}function Bn(t,e,n){var r;let s=(r=Pw[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ct.warn(a.join(" "));return}Zn(new pn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Dw="firebase-heartbeat-database",xw=1,er="firebase-heartbeat-store";let js=null;function eu(){return js||(js=Y0(Dw,xw,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(er)}catch(n){console.warn(n)}}}}).catch(t=>{throw Pt.create("idb-open",{originalErrorMessage:t.message})})),js}async function Nw(t){try{const n=(await eu()).transaction(er),r=await n.objectStore(er).get(tu(t));return await n.done,r}catch(e){if(e instanceof $t)ct.warn(e.message);else{const n=Pt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ct.warn(n.message)}}}async function Sa(t,e){try{const r=(await eu()).transaction(er,"readwrite");await r.objectStore(er).put(e,tu(t)),await r.done}catch(n){if(n instanceof $t)ct.warn(n.message);else{const r=Pt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ct.warn(r.message)}}}function tu(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Lw=1024,Uw=30*24*60*60*1e3;class Fw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new jw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ta();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Uw}),this._storage.overwrite(this._heartbeatsCache))}catch(r){ct.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ta(),{heartbeatsToSend:r,unsentEntries:s}=Hw(this._heartbeatsCache.heartbeats),i=Br(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return ct.warn(n),""}}}function Ta(){return new Date().toISOString().substring(0,10)}function Hw(t,e=Lw){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Aa(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Aa(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class jw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return T0()?A0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Nw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Sa(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Sa(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Aa(t){return Br(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Bw(t){Zn(new pn("platform-logger",e=>new Z0(e),"PRIVATE")),Zn(new pn("heartbeat",e=>new Fw(e),"PRIVATE")),Bn(hi,Ea,t),Bn(hi,Ea,"esm2017"),Bn("fire-js","")}Bw("");function Ji(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function nu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const zw=nu,ru=new cr("auth","Firebase",nu());/**
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
 */const Kr=new Yc("@firebase/auth");function Vw(t,...e){Kr.logLevel<=ee.WARN&&Kr.warn(`Auth (${fr}): ${t}`,...e)}function Pr(t,...e){Kr.logLevel<=ee.ERROR&&Kr.error(`Auth (${fr}): ${t}`,...e)}/**
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
 */function ut(t,...e){throw Yi(t,...e)}function Ye(t,...e){return Yi(t,...e)}function su(t,e,n){const r=Object.assign(Object.assign({},zw()),{[e]:n});return new cr("auth","Firebase",r).create(e,{appName:t.name})}function Vt(t){return su(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Yi(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return ru.create(t,...e)}function H(t,e,...n){if(!t)throw Yi(e,...n)}function it(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Pr(e),new Error(e)}function ft(t,e){t||it(e)}/**
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
 */function mi(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Ww(){return Ca()==="http:"||Ca()==="https:"}function Ca(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Kw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ww()||E0()||"connection"in navigator)?navigator.onLine:!0}function Gw(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class dr{constructor(e,n){this.shortDelay=e,this.longDelay=n,ft(n>e,"Short delay should be less than long delay!"),this.isMobile=b0()||I0()}get(){return Kw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Xi(t,e){ft(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class iu{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;it("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;it("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;it("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const qw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Jw=new dr(3e4,6e4);function hr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Dt(t,e,n,r,s={}){return ou(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=ur(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},i);return w0()||(c.referrerPolicy="no-referrer"),iu.fetch()(au(t,t.config.apiHost,n,a),c)})}async function ou(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},qw),e);try{const s=new Qw(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ir(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ir(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ir(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ir(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw su(t,u,c);ut(t,u)}}catch(s){if(s instanceof $t)throw s;ut(t,"network-request-failed",{message:String(s)})}}async function Yw(t,e,n,r,s={}){const i=await Dt(t,e,n,r,s);return"mfaPendingCredential"in i&&ut(t,"multi-factor-auth-required",{_serverResponse:i}),i}function au(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Xi(t.config,s):`${t.config.apiScheme}://${s}`}function Xw(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Qw{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ye(this.auth,"network-request-failed")),Jw.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ir(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Ye(t,e,r);return s.customData._tokenResponse=n,s}function Pa(t){return t!==void 0&&t.enterprise!==void 0}class Zw{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Xw(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function eE(t,e){return Dt(t,"GET","/v2/recaptchaConfig",hr(t,e))}/**
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
 */async function tE(t,e){return Dt(t,"POST","/v1/accounts:delete",e)}async function lu(t,e){return Dt(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function zn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function nE(t,e=!1){const n=Tn(t),r=await n.getIdToken(e),s=Qi(r);H(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:zn(Bs(s.auth_time)),issuedAtTime:zn(Bs(s.iat)),expirationTime:zn(Bs(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Bs(t){return Number(t)*1e3}function Qi(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Pr("JWT malformed, contained fewer than 3 sections"),null;try{const s=zr(n);return s?JSON.parse(s):(Pr("Failed to decode base64 JWT payload"),null)}catch(s){return Pr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Ra(t){const e=Qi(t);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function tr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof $t&&rE(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function rE({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class sE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class vi{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=zn(this.lastLoginAt),this.creationTime=zn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Gr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await tr(t,lu(n,{idToken:r}));H(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?cu(i.providerUserInfo):[],a=oE(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new vi(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function iE(t){const e=Tn(t);await Gr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function oE(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function cu(t){return t.map(e=>{var{providerId:n}=e,r=Ji(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function aE(t,e){const n=await ou(t,{},async()=>{const r=ur({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=au(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",iu.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function lE(t,e){return Dt(t,"POST","/v2/accounts:revokeToken",hr(t,e))}/**
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
 */class un{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ra(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){H(e.length!==0,"internal-error");const n=Ra(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(H(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await aE(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new un;return r&&(H(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(H(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(H(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new un,this.toJSON())}_performRefresh(){return it("not implemented")}}/**
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
 */function mt(t,e){H(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ot{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Ji(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new sE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new vi(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await tr(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return nE(this,e)}reload(){return iE(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ot(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Gr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Tt(this.auth.app))return Promise.reject(Vt(this.auth));const e=await this.getIdToken();return await tr(this,tE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,c,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,E=(o=n.photoURL)!==null&&o!==void 0?o:void 0,T=(a=n.tenantId)!==null&&a!==void 0?a:void 0,L=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,M=(c=n.createdAt)!==null&&c!==void 0?c:void 0,O=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:$,emailVerified:k,isAnonymous:z,providerData:le,stsTokenManager:ne}=n;H($&&ne,e,"internal-error");const ke=un.fromJSON(this.name,ne);H(typeof $=="string",e,"internal-error"),mt(f,e.name),mt(p,e.name),H(typeof k=="boolean",e,"internal-error"),H(typeof z=="boolean",e,"internal-error"),mt(g,e.name),mt(E,e.name),mt(T,e.name),mt(L,e.name),mt(M,e.name),mt(O,e.name);const Me=new ot({uid:$,auth:e,email:p,emailVerified:k,displayName:f,isAnonymous:z,photoURL:E,phoneNumber:g,tenantId:T,stsTokenManager:ke,createdAt:M,lastLoginAt:O});return le&&Array.isArray(le)&&(Me.providerData=le.map($e=>Object.assign({},$e))),L&&(Me._redirectEventId=L),Me}static async _fromIdTokenResponse(e,n,r=!1){const s=new un;s.updateFromServerResponse(n);const i=new ot({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Gr(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];H(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?cu(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new un;a.updateFromIdToken(r);const l=new ot({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new vi(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,c),l}}/**
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
 */const Oa=new Map;function at(t){ft(t instanceof Function,"Expected a class definition");let e=Oa.get(t);return e?(ft(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Oa.set(t,e),e)}/**
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
 */class uu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}uu.type="NONE";const ka=uu;/**
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
 */function Rr(t,e,n){return`firebase:${t}:${e}:${n}`}class fn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Rr(this.userKey,s.apiKey,i),this.fullPersistenceKey=Rr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ot._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new fn(at(ka),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||at(ka);const o=Rr(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const f=ot._fromJSON(e,u);c!==i&&(a=f),i=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new fn(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new fn(i,e,r))}}/**
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
 */function Ma(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(pu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(fu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(mu(e))return"Blackberry";if(vu(e))return"Webos";if(du(e))return"Safari";if((e.includes("chrome/")||hu(e))&&!e.includes("edge/"))return"Chrome";if(gu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function fu(t=Ee()){return/firefox\//i.test(t)}function du(t=Ee()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function hu(t=Ee()){return/crios\//i.test(t)}function pu(t=Ee()){return/iemobile/i.test(t)}function gu(t=Ee()){return/android/i.test(t)}function mu(t=Ee()){return/blackberry/i.test(t)}function vu(t=Ee()){return/webos/i.test(t)}function Zi(t=Ee()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function cE(t=Ee()){var e;return Zi(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function uE(){return S0()&&document.documentMode===10}function _u(t=Ee()){return Zi(t)||gu(t)||vu(t)||mu(t)||/windows phone/i.test(t)||pu(t)}/**
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
 */function yu(t,e=[]){let n;switch(t){case"Browser":n=Ma(Ee());break;case"Worker":n=`${Ma(Ee())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${fr}/${r}`}/**
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
 */class fE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function dE(t,e={}){return Dt(t,"GET","/v2/passwordPolicy",hr(t,e))}/**
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
 */const hE=6;class pE{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:hE,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class gE{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $a(this),this.idTokenSubscription=new $a(this),this.beforeStateQueue=new fE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ru,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=at(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await fn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await lu(this,{idToken:e}),r=await ot._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Tt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Gr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Gw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Tt(this.app))return Promise.reject(Vt(this));const n=e?Tn(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Tt(this.app)?Promise.reject(Vt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Tt(this.app)?Promise.reject(Vt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(at(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await dE(this),n=new pE(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new cr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await lE(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&at(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await fn.create(this,[at(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=yu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Vw(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function pr(t){return Tn(t)}class $a{constructor(e){this.auth=e,this.observer=null,this.addObserver=k0(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ms={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function mE(t){ms=t}function bu(t){return ms.loadJS(t)}function vE(){return ms.recaptchaEnterpriseScript}function _E(){return ms.gapiScript}function yE(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class bE{constructor(){this.enterprise=new wE}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class wE{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const EE="recaptcha-enterprise",wu="NO_RECAPTCHA";class IE{constructor(e){this.type=EE,this.auth=pr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{eE(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Zw(l);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;Pa(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(wu)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new bE().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Pa(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=vE();l.length!==0&&(l+=a),bu(l).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Da(t,e,n,r=!1,s=!1){const i=new IE(t);let o;if(s)o=wu;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a=Object.assign({},e);return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function SE(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Da(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Da(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
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
 */function TE(t,e){const n=Zc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Vr(i,e??{}))return s;ut(s,"already-initialized")}return n.initialize({options:e})}function AE(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(at);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function CE(t,e,n){const r=pr(t);H(r._canInitEmulator,r,"emulator-config-failed"),H(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Eu(e),{host:o,port:a}=PE(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),RE()}function Eu(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function PE(t){const e=Eu(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:xa(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:xa(o)}}}function xa(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function RE(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Iu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return it("not implemented")}_getIdTokenResponse(e){return it("not implemented")}_linkToIdToken(e,n){return it("not implemented")}_getReauthenticationResolver(e){return it("not implemented")}}async function OE(t,e){return Dt(t,"POST","/v1/accounts:sendOobCode",hr(t,e))}async function kE(t,e){return OE(t,e)}/**
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
 */async function dn(t,e){return Yw(t,"POST","/v1/accounts:signInWithIdp",hr(t,e))}/**
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
 */const ME="http://localhost";class Kt extends Iu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Kt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ut("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Ji(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Kt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return dn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,dn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,dn(e,n)}buildRequest(){const e={requestUri:ME,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ur(n)}return e}}/**
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
 */class Su{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class gr extends Su{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class wt extends gr{constructor(){super("facebook.com")}static credential(e){return Kt._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wt.credential(e.oauthAccessToken)}catch{return null}}}wt.FACEBOOK_SIGN_IN_METHOD="facebook.com";wt.PROVIDER_ID="facebook.com";/**
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
 */class Et extends gr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Kt._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Et.credential(n,r)}catch{return null}}}Et.GOOGLE_SIGN_IN_METHOD="google.com";Et.PROVIDER_ID="google.com";/**
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
 */class It extends gr{constructor(){super("github.com")}static credential(e){return Kt._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return It.credential(e.oauthAccessToken)}catch{return null}}}It.GITHUB_SIGN_IN_METHOD="github.com";It.PROVIDER_ID="github.com";/**
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
 */class St extends gr{constructor(){super("twitter.com")}static credential(e,n){return Kt._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return St.credentialFromTaggedObject(e)}static credentialFromError(e){return St.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return St.credential(n,r)}catch{return null}}}St.TWITTER_SIGN_IN_METHOD="twitter.com";St.PROVIDER_ID="twitter.com";/**
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
 */class gn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await ot._fromIdTokenResponse(e,r,s),o=Na(r);return new gn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Na(r);return new gn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Na(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class qr extends $t{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,qr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new qr(e,n,r,s)}}function Tu(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?qr._fromErrorAndOperation(t,i,e,r):i})}async function $E(t,e,n=!1){const r=await tr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return gn._forOperation(t,"link",r)}/**
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
 */async function DE(t,e,n=!1){const{auth:r}=t;if(Tt(r.app))return Promise.reject(Vt(r));const s="reauthenticate";try{const i=await tr(t,Tu(r,s,e,t),n);H(i.idToken,r,"internal-error");const o=Qi(i.idToken);H(o,r,"internal-error");const{sub:a}=o;return H(t.uid===a,r,"user-mismatch"),gn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&ut(r,"user-mismatch"),i}}/**
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
 */async function xE(t,e,n=!1){if(Tt(t.app))return Promise.reject(Vt(t));const r="signIn",s=await Tu(t,r,e),i=await gn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function NE(t,e,n){const r=pr(t);await SE(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",kE)}function LE(t,e,n,r){return Tn(t).onIdTokenChanged(e,n,r)}function UE(t,e,n){return Tn(t).beforeAuthStateChanged(e,n)}const Jr="__sak";/**
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
 */class Au{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Jr,"1"),this.storage.removeItem(Jr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const FE=1e3,HE=10;class Cu extends Au{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=_u(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);uE()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,HE):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},FE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Cu.type="LOCAL";const jE=Cu;/**
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
 */class Pu extends Au{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Pu.type="SESSION";const Ru=Pu;/**
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
 */function BE(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class vs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new vs(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await BE(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}vs.receivers=[];/**
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
 */function eo(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class zE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=eo("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const p=f;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Xe(){return window}function VE(t){Xe().location.href=t}/**
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
 */function Ou(){return typeof Xe().WorkerGlobalScope<"u"&&typeof Xe().importScripts=="function"}async function WE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function KE(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function GE(){return Ou()?self:null}/**
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
 */const ku="firebaseLocalStorageDb",qE=1,Yr="firebaseLocalStorage",Mu="fbase_key";class mr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function _s(t,e){return t.transaction([Yr],e?"readwrite":"readonly").objectStore(Yr)}function JE(){const t=indexedDB.deleteDatabase(ku);return new mr(t).toPromise()}function _i(){const t=indexedDB.open(ku,qE);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Yr,{keyPath:Mu})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Yr)?e(r):(r.close(),await JE(),e(await _i()))})})}async function La(t,e,n){const r=_s(t,!0).put({[Mu]:e,value:n});return new mr(r).toPromise()}async function YE(t,e){const n=_s(t,!1).get(e),r=await new mr(n).toPromise();return r===void 0?null:r.value}function Ua(t,e){const n=_s(t,!0).delete(e);return new mr(n).toPromise()}const XE=800,QE=3;class $u{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _i(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>QE)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ou()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=vs._getInstance(GE()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await WE(),!this.activeServiceWorker)return;this.sender=new zE(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||KE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _i();return await La(e,Jr,"1"),await Ua(e,Jr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>La(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>YE(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ua(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=_s(s,!1).getAll();return new mr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),XE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}$u.type="LOCAL";const ZE=$u;new dr(3e4,6e4);/**
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
 */function eI(t,e){return e?at(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class to extends Iu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return dn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return dn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return dn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function tI(t){return xE(t.auth,new to(t),t.bypassAuthState)}function nI(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),DE(n,new to(t),t.bypassAuthState)}async function rI(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),$E(n,new to(t),t.bypassAuthState)}/**
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
 */class Du{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tI;case"linkViaPopup":case"linkViaRedirect":return rI;case"reauthViaPopup":case"reauthViaRedirect":return nI;default:ut(this.auth,"internal-error")}}resolve(e){ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const sI=new dr(2e3,1e4);class en extends Du{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,en.currentPopupAction&&en.currentPopupAction.cancel(),en.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){ft(this.filter.length===1,"Popup operations only handle one event");const e=eo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ye(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ye(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,en.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ye(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,sI.get())};e()}}en.currentPopupAction=null;/**
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
 */const iI="pendingRedirect",Or=new Map;class oI extends Du{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Or.get(this.auth._key());if(!e){try{const r=await aI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Or.set(this.auth._key(),e)}return this.bypassAuthState||Or.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function aI(t,e){const n=uI(e),r=cI(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function lI(t,e){Or.set(t._key(),e)}function cI(t){return at(t._redirectPersistence)}function uI(t){return Rr(iI,t.config.apiKey,t.name)}async function fI(t,e,n=!1){if(Tt(t.app))return Promise.reject(Vt(t));const r=pr(t),s=eI(r,e),o=await new oI(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const dI=10*60*1e3;class hI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!pI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!xu(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ye(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=dI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Fa(e))}saveEventToCache(e){this.cachedEventUids.add(Fa(e)),this.lastProcessedEventTime=Date.now()}}function Fa(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function xu({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function pI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xu(t);default:return!1}}/**
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
 */async function gI(t,e={}){return Dt(t,"GET","/v1/projects",e)}/**
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
 */const mI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vI=/^https?/;async function _I(t){if(t.config.emulator)return;const{authorizedDomains:e}=await gI(t);for(const n of e)try{if(yI(n))return}catch{}ut(t,"unauthorized-domain")}function yI(t){const e=mi(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!vI.test(n))return!1;if(mI.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const bI=new dr(3e4,6e4);function Ha(){const t=Xe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function wI(t){return new Promise((e,n)=>{var r,s,i;function o(){Ha(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ha(),n(Ye(t,"network-request-failed"))},timeout:bI.get()})}if(!((s=(r=Xe().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Xe().gapi)===null||i===void 0)&&i.load)o();else{const a=yE("iframefcb");return Xe()[a]=()=>{gapi.load?o():n(Ye(t,"network-request-failed"))},bu(`${_E()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw kr=null,e})}let kr=null;function EI(t){return kr=kr||wI(t),kr}/**
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
 */const II=new dr(5e3,15e3),SI="__/auth/iframe",TI="emulator/auth/iframe",AI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},CI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function PI(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Xi(e,TI):`https://${t.config.authDomain}/${SI}`,r={apiKey:e.apiKey,appName:t.name,v:fr},s=CI.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ur(r).slice(1)}`}async function RI(t){const e=await EI(t),n=Xe().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:PI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:AI,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Ye(t,"network-request-failed"),a=Xe().setTimeout(()=>{i(o)},II.get());function l(){Xe().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const OI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},kI=500,MI=600,$I="_blank",DI="http://localhost";class ja{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function xI(t,e,n,r=kI,s=MI){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},OI),{width:r.toString(),height:s.toString(),top:i,left:o}),c=Ee().toLowerCase();n&&(a=hu(c)?$I:n),fu(c)&&(e=e||DI,l.scrollbars="yes");const u=Object.entries(l).reduce((p,[g,E])=>`${p}${g}=${E},`,"");if(cE(c)&&a!=="_self")return NI(e||"",a),new ja(null);const f=window.open(e||"",a,u);H(f,t,"popup-blocked");try{f.focus()}catch{}return new ja(f)}function NI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const LI="__/auth/handler",UI="emulator/auth/handler",FI=encodeURIComponent("fac");async function Ba(t,e,n,r,s,i){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:fr,eventId:s};if(e instanceof Su){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",O0(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,f]of Object.entries({}))o[u]=f}if(e instanceof gr){const u=e.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${FI}=${encodeURIComponent(l)}`:"";return`${HI(t)}?${ur(a).slice(1)}${c}`}function HI({config:t}){return t.emulator?Xi(t,UI):`https://${t.authDomain}/${LI}`}/**
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
 */const zs="webStorageSupport";class jI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ru,this._completeRedirectFn=fI,this._overrideRedirectResult=lI}async _openPopup(e,n,r,s){var i;ft((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Ba(e,n,r,mi(),s);return xI(e,o,eo())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Ba(e,n,r,mi(),s);return VE(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ft(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await RI(e),r=new hI(e);return n.register("authEvent",s=>(H(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(zs,{type:zs},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[zs];o!==void 0&&n(!!o),ut(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=_I(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return _u()||du()||Zi()}}const BI=jI;var za="@firebase/auth",Va="1.8.0";/**
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
 */class zI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function VI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function WI(t){Zn(new pn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:yu(t)},c=new gE(r,s,i,l);return AE(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Zn(new pn("auth-internal",e=>{const n=pr(e.getProvider("auth").getImmediate());return(r=>new zI(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Bn(za,Va,VI(t)),Bn(za,Va,"esm2017")}/**
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
 */const KI=5*60,GI=qc("authIdTokenMaxAge")||KI;let Wa=null;const qI=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>GI)return;const s=n==null?void 0:n.token;Wa!==s&&(Wa=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function JI(t=$w()){const e=Zc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=TE(t,{popupRedirectResolver:BI,persistence:[ZE,jE,Ru]}),r=qc("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=qI(i.toString());UE(n,o,()=>o(n.currentUser)),LE(n,a=>o(a))}}const s=Kc("auth");return s&&CE(n,`http://${s}`),n}function YI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}mE({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Ye("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",YI().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});WI("Browser");const XI=_n({name:"LoginBox",props:{isInApp:{type:Boolean,required:!0},showLogin:{type:Boolean,required:!0}},setup(t,{emit:e}){const n=Un(""),r=Un(""),s=Un(!1);Hn(s,u=>{localStorage.setItem("keeploggedin",JSON.stringify(u))}),Gl(()=>{const u=localStorage.getItem("keeploggedin");u!==null&&(s.value=JSON.parse(u))});const i=()=>{e("toggleLogin")},o=u=>{const f=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,p=/@alearn.org.tw$/;return f.test(String(u).toLowerCase())&&p.test(String(u).toLowerCase())};return{users_email:n,user_password:r,keeploggedin:s,toggleLogin:i,registerWithEmail:()=>{if(console.log("users_email:",n.value),console.log("user_password:",r.value),console.log("Register clicked"),!n.value||!r.value){window.alert("請先填寫email和密碼");return}if(!o(n.value)){alert("email格式錯誤，請重試");return}if(!r.value||typeof r.value!="string"){alert("密碼請至少包含一個英文字，請重新輸入");return}e("registerWithEmail",n.value,r.value,s.value)},loginWithEmail:()=>{let u=!0;console.log("Login clicked");const f=window.location.pathname;if(!o(n.value)){alert("請用@alearn.org.tw的Email登入");return}if((f==="/friends"||f==="/maps"||f==="/privacy-policy"||f.startsWith("/flag")||f.startsWith("/group"))&&(u=!1),!r.value||typeof r.value!="string"){alert("密碼無效，請重新輸入");return}e("loginWithEmail",u,n.value,r.value,s.value)},resetPassword:()=>{if(console.log("Reset password function triggered"),console.log("Email for reset:",n.value),!o(n.value)){alert("請先輸入有效的電子郵件地址");return}const u=JI();console.log("Firebase auth object:",u),NE(u,n.value).then(()=>{alert("密碼重置郵件已發送，請檢查您的郵箱"),console.log("Password reset email sent successfully")}).catch(f=>{switch(console.error("密碼重置郵件發送失敗：",f.code,f.message),f.code){case"auth/invalid-email":alert("無效的電子郵件地址");break;case"auth/user-not-found":alert("找不到該電子郵件對應的帳號");break;default:alert("密碼重置郵件發送失敗，請稍後再試")}})}}}}),QI={class:"ui middle aligned center aligned grid",id:"login-main",style:{height:"100vh"}},ZI={class:"column",style:{"max-width":"420px"}},eS={class:"ui raised segment"},tS={key:0,class:"ui error message"},nS={class:"ui form segment",style:{"border-radius":"10px",padding:"15px","background-color":"#f0f0f0"}},rS={class:"field"},sS={class:"ui left icon input"},iS={class:"field"},oS={class:"ui left icon input"},aS={class:"ui large form"},lS={class:"ui segment",style:{border:"none","padding-top":"10px"}},cS={class:"field"};function uS(t,e,n,r,s,i){return we(),je("div",{class:"ui dimmer modals visible active clickable",id:"login-bg",style:{background:"rgba(0, 0, 0, 0.6)"},onClick:e[9]||(e[9]=o=>t.toggleLogin())},[x("div",QI,[x("div",ZI,[x("div",eS,[t.isInApp?(we(),je("div",tS,"本系統不支援facebook, line等app內部瀏覽，請用一般瀏覽器開啟，方可登入，謝謝")):gc("",!0),e[14]||(e[14]=x("h2",{class:"ui black header",style:{"font-size":"1.5rem","font-weight":"600"}},"登入您的帳號",-1)),x("div",nS,[x("div",rS,[x("div",sS,[e[10]||(e[10]=x("i",{class:"envelope icon"},null,-1)),Ts(x("input",{type:"text",name:"email",placeholder:"E-mail address",style:{"font-size":"14px"},"onUpdate:modelValue":e[0]||(e[0]=o=>t.users_email=o),onClick:e[1]||(e[1]=On(()=>{},["stop"]))},null,512),[[Lo,t.users_email]])])]),x("div",iS,[x("div",oS,[e[11]||(e[11]=x("i",{class:"lock icon"},null,-1)),Ts(x("input",{type:"password",name:"user_password",placeholder:"Password",style:{"font-size":"14px"},"onUpdate:modelValue":e[2]||(e[2]=o=>t.user_password=o),onClick:e[3]||(e[3]=On(()=>{},["stop"]))},null,512),[[Lo,t.user_password]])])]),x("div",{class:Kn(["ui fluid large button",{disabled:t.isInApp}]),onClick:e[4]||(e[4]=On((...o)=>t.loginWithEmail&&t.loginWithEmail(...o),["prevent"])),style:{"background-color":"#e47e10",color:"white","font-weight":"bold"}},"登入",2),x("a",{class:"small forgot-password",onClick:e[5]||(e[5]=(...o)=>t.resetPassword&&t.resetPassword(...o))},"忘記密碼")]),x("form",aS,[x("div",lS,[x("div",cS,[x("div",{class:"ui checkbox",onClick:e[7]||(e[7]=On(()=>{},["stop"]))},[Ts(x("input",{type:"checkbox","onUpdate:modelValue":e[6]||(e[6]=o=>t.keeploggedin=o)},null,512),[[ch,t.keeploggedin]]),e[12]||(e[12]=x("label",null,"保持登入狀態",-1))])])]),x("p",null,[e[13]||(e[13]=W("新用戶？按此")),x("button",{class:Kn(["ui large basic button",{disabled:t.isInApp}]),id:"register-btn",onClick:e[8]||(e[8]=On((...o)=>t.registerWithEmail&&t.registerWithEmail(...o),["stop"]))},"註冊",2)])])])])])])}const xt=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},fS=xt(XI,[["render",uS],["__scopeId","data-v-44806ccd"]]),dS=new l0(window.navigator.userAgent),hS=dS.isInApp,pS=_n({name:"App",components:{Login:fS},data(){return{isInApp:hS,showLogin:!0}},methods:{toggleLogin(){this.showLogin=!this.showLogin}}}),gS={class:"ui fixed top menu"},mS={class:"ui container"};function vS(t,e,n,r,s,i){const o=As("RouterLink"),a=As("RouterView"),l=As("Login");return we(),je(Se,null,[x("header",null,[x("nav",gS,[Z(o,{to:"/",class:"item"},{default:fe(()=>e[0]||(e[0]=[W("Home")])),_:1}),Z(o,{to:"/about",class:"item"},{default:fe(()=>e[1]||(e[1]=[W("About")])),_:1})])]),e[2]||(e[2]=x("div",{class:"small-spacer"},null,-1)),x("div",mS,[Z(a,{onToggleLogin:t.toggleLogin},null,8,["onToggleLogin"])]),t.showLogin?(we(),Nr(l,{key:0,showLogin:t.showLogin,isInApp:!1,onToggleLogin:t.toggleLogin},null,8,["showLogin","onToggleLogin"])):gc("",!0)],64)}const _S=xt(pS,[["render",vS],["__scopeId","data-v-464007f9"]]),yS="modulepreload",bS=function(t){return"/"+t},Ka={},wS=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(l=>{if(l=bS(l),l in Ka)return;Ka[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":yS,c||(f.as="script"),f.crossOrigin="",f.href=l,a&&f.setAttribute("nonce",a),document.head.appendChild(f),c)return new Promise((p,g)=>{f.addEventListener("load",p),f.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})};/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Zt=typeof document<"u";function Nu(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ES(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Nu(t.default)}const X=Object.assign;function Vs(t,e){const n={};for(const r in e){const s=e[r];n[r]=Be(s)?s.map(t):t(s)}return n}const Vn=()=>{},Be=Array.isArray,Lu=/#/g,IS=/&/g,SS=/\//g,TS=/=/g,AS=/\?/g,Uu=/\+/g,CS=/%5B/g,PS=/%5D/g,Fu=/%5E/g,RS=/%60/g,Hu=/%7B/g,OS=/%7C/g,ju=/%7D/g,kS=/%20/g;function no(t){return encodeURI(""+t).replace(OS,"|").replace(CS,"[").replace(PS,"]")}function MS(t){return no(t).replace(Hu,"{").replace(ju,"}").replace(Fu,"^")}function yi(t){return no(t).replace(Uu,"%2B").replace(kS,"+").replace(Lu,"%23").replace(IS,"%26").replace(RS,"`").replace(Hu,"{").replace(ju,"}").replace(Fu,"^")}function $S(t){return yi(t).replace(TS,"%3D")}function DS(t){return no(t).replace(Lu,"%23").replace(AS,"%3F")}function xS(t){return t==null?"":DS(t).replace(SS,"%2F")}function nr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const NS=/\/$/,LS=t=>t.replace(NS,"");function Ws(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=jS(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:nr(o)}}function US(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ga(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function FS(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&mn(e.matched[r],n.matched[s])&&Bu(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function mn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Bu(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!HS(t[n],e[n]))return!1;return!0}function HS(t,e){return Be(t)?qa(t,e):Be(e)?qa(e,t):t===e}function qa(t,e){return Be(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function jS(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const vt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var rr;(function(t){t.pop="pop",t.push="push"})(rr||(rr={}));var Wn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Wn||(Wn={}));function BS(t){if(!t)if(Zt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),LS(t)}const zS=/^[^#]+#/;function VS(t,e){return t.replace(zS,"#")+e}function WS(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const ys=()=>({left:window.scrollX,top:window.scrollY});function KS(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=WS(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Ja(t,e){return(history.state?history.state.position-e:-1)+t}const bi=new Map;function GS(t,e){bi.set(t,e)}function qS(t){const e=bi.get(t);return bi.delete(t),e}let JS=()=>location.protocol+"//"+location.host;function zu(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),Ga(l,"")}return Ga(n,t)+r+s}function YS(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const g=zu(t,location),E=n.value,T=e.value;let L=0;if(p){if(n.value=g,e.value=p,o&&o===E){o=null;return}L=T?p.position-T.position:0}else r(g);s.forEach(M=>{M(n.value,E,{delta:L,type:rr.pop,direction:L?L>0?Wn.forward:Wn.back:Wn.unknown})})};function l(){o=n.value}function c(p){s.push(p);const g=()=>{const E=s.indexOf(p);E>-1&&s.splice(E,1)};return i.push(g),g}function u(){const{history:p}=window;p.state&&p.replaceState(X({},p.state,{scroll:ys()}),"")}function f(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function Ya(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?ys():null}}function XS(t){const{history:e,location:n}=window,r={value:zu(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const f=t.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:JS()+t+l;try{e[u?"replaceState":"pushState"](c,"",p),s.value=c}catch(g){console.error(g),n[u?"replace":"assign"](p)}}function o(l,c){const u=X({},e.state,Ya(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});i(l,u,!0),r.value=l}function a(l,c){const u=X({},s.value,e.state,{forward:l,scroll:ys()});i(u.current,u,!0);const f=X({},Ya(r.value,l,null),{position:u.position+1},c);i(l,f,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function QS(t){t=BS(t);const e=XS(t),n=YS(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=X({location:"",base:t,go:r,createHref:VS.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function ZS(t){return typeof t=="string"||t&&typeof t=="object"}function Vu(t){return typeof t=="string"||typeof t=="symbol"}const Wu=Symbol("");var Xa;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Xa||(Xa={}));function vn(t,e){return X(new Error,{type:t,[Wu]:!0},e)}function tt(t,e){return t instanceof Error&&Wu in t&&(e==null||!!(t.type&e))}const Qa="[^/]+?",eT={sensitive:!1,strict:!1,start:!0,end:!0},tT=/[.+*?^${}()[\]/\\]/g;function nT(t,e){const n=X({},eT,e),r=[];let s=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let f=0;f<c.length;f++){const p=c[f];let g=40+(n.sensitive?.25:0);if(p.type===0)f||(s+="/"),s+=p.value.replace(tT,"\\$&"),g+=40;else if(p.type===1){const{value:E,repeatable:T,optional:L,regexp:M}=p;i.push({name:E,repeatable:T,optional:L});const O=M||Qa;if(O!==Qa){g+=10;try{new RegExp(`(${O})`)}catch(k){throw new Error(`Invalid custom RegExp for param "${E}" (${O}): `+k.message)}}let $=T?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;f||($=L&&c.length<2?`(?:/${$})`:"/"+$),L&&($+="?"),s+=$,g+=20,L&&(g+=-8),T&&(g+=-20),O===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let p=1;p<u.length;p++){const g=u[p]||"",E=i[p-1];f[E.name]=g&&E.repeatable?g.split("/"):g}return f}function l(c){let u="",f=!1;for(const p of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const g of p)if(g.type===0)u+=g.value;else if(g.type===1){const{value:E,repeatable:T,optional:L}=g,M=E in c?c[E]:"";if(Be(M)&&!T)throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);const O=Be(M)?M.join("/"):M;if(!O)if(L)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${E}"`);u+=O}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function rT(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Ku(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=rT(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Za(r))return 1;if(Za(s))return-1}return s.length-r.length}function Za(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const sT={type:0,value:""},iT=/[a-zA-Z0-9_]/;function oT(t){if(!t)return[[]];if(t==="/")return[[sT]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${c}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,c="",u="";function f(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function p(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:l==="("?n=2:iT.test(l)?p():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),s}function aT(t,e,n){const r=nT(oT(t.path),n),s=X(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function lT(t,e){const n=[],r=new Map;e=rl({strict:!1,end:!0,sensitive:!1},e);function s(f){return r.get(f)}function i(f,p,g){const E=!g,T=tl(f);T.aliasOf=g&&g.record;const L=rl(e,f),M=[T];if("alias"in f){const k=typeof f.alias=="string"?[f.alias]:f.alias;for(const z of k)M.push(tl(X({},T,{components:g?g.record.components:T.components,path:z,aliasOf:g?g.record:T})))}let O,$;for(const k of M){const{path:z}=k;if(p&&z[0]!=="/"){const le=p.record.path,ne=le[le.length-1]==="/"?"":"/";k.path=p.record.path+(z&&ne+z)}if(O=aT(k,p,L),g?g.alias.push(O):($=$||O,$!==O&&$.alias.push(O),E&&f.name&&!nl(O)&&o(f.name)),Gu(O)&&l(O),T.children){const le=T.children;for(let ne=0;ne<le.length;ne++)i(le[ne],O,g&&g.children[ne])}g=g||O}return $?()=>{o($)}:Vn}function o(f){if(Vu(f)){const p=r.get(f);p&&(r.delete(f),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(f);p>-1&&(n.splice(p,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function l(f){const p=fT(f,n);n.splice(p,0,f),f.record.name&&!nl(f)&&r.set(f.record.name,f)}function c(f,p){let g,E={},T,L;if("name"in f&&f.name){if(g=r.get(f.name),!g)throw vn(1,{location:f});L=g.record.name,E=X(el(p.params,g.keys.filter($=>!$.optional).concat(g.parent?g.parent.keys.filter($=>$.optional):[]).map($=>$.name)),f.params&&el(f.params,g.keys.map($=>$.name))),T=g.stringify(E)}else if(f.path!=null)T=f.path,g=n.find($=>$.re.test(T)),g&&(E=g.parse(T),L=g.record.name);else{if(g=p.name?r.get(p.name):n.find($=>$.re.test(p.path)),!g)throw vn(1,{location:f,currentLocation:p});L=g.record.name,E=X({},p.params,f.params),T=g.stringify(E)}const M=[];let O=g;for(;O;)M.unshift(O.record),O=O.parent;return{name:L,path:T,params:E,matched:M,meta:uT(M)}}t.forEach(f=>i(f));function u(){n.length=0,r.clear()}return{addRoute:i,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function el(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function tl(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:cT(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function cT(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function nl(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function uT(t){return t.reduce((e,n)=>X(e,n.meta),{})}function rl(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function fT(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Ku(t,e[i])<0?r=i:n=i+1}const s=dT(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function dT(t){let e=t;for(;e=e.parent;)if(Gu(e)&&Ku(t,e)===0)return e}function Gu({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function hT(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Uu," "),o=i.indexOf("="),a=nr(o<0?i:i.slice(0,o)),l=o<0?null:nr(i.slice(o+1));if(a in e){let c=e[a];Be(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function sl(t){let e="";for(let n in t){const r=t[n];if(n=$S(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Be(r)?r.map(i=>i&&yi(i)):[r&&yi(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function pT(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Be(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const gT=Symbol(""),il=Symbol(""),ro=Symbol(""),qu=Symbol(""),wi=Symbol("");function Mn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function bt(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=p=>{p===!1?l(vn(4,{from:n,to:e})):p instanceof Error?l(p):ZS(p)?l(vn(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),a())},u=i(()=>t.call(r&&r.instances[s],e,n,c));let f=Promise.resolve(u);t.length<3&&(f=f.then(c)),f.catch(p=>l(p))})}function Ks(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Nu(l)){const u=(l.__vccOpts||l)[e];u&&i.push(bt(u,n,r,o,a,s))}else{let c=l();i.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=ES(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const g=(f.__vccOpts||f)[e];return g&&bt(g,n,r,o,a,s)()}))}}return i}function ol(t){const e=lt(ro),n=lt(qu),r=Ue(()=>{const l=sn(t.to);return e.resolve(l)}),s=Ue(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const p=f.findIndex(mn.bind(null,u));if(p>-1)return p;const g=al(l[c-2]);return c>1&&al(u)===g&&f[f.length-1].path!==g?f.findIndex(mn.bind(null,l[c-2])):p}),i=Ue(()=>s.value>-1&&yT(n.params,r.value.params)),o=Ue(()=>s.value>-1&&s.value===n.matched.length-1&&Bu(n.params,r.value.params));function a(l={}){return _T(l)?e[sn(t.replace)?"replace":"push"](sn(t.to)).catch(Vn):Promise.resolve()}return{route:r,href:Ue(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const mT=_n({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ol,setup(t,{slots:e}){const n=ss(ol(t)),{options:r}=lt(ro),s=Ue(()=>({[ll(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ll(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:_c("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),vT=mT;function _T(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function yT(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Be(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function al(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ll=(t,e,n)=>t??e??n,bT=_n({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=lt(wi),s=Ue(()=>t.route||r.value),i=lt(il,0),o=Ue(()=>{let c=sn(i);const{matched:u}=s.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=Ue(()=>s.value.matched[o.value]);Tr(il,Ue(()=>o.value+1)),Tr(gT,a),Tr(wi,s);const l=Un();return Hn(()=>[l.value,a.value,t.name],([c,u,f],[p,g,E])=>{u&&(u.instances[f]=c,g&&g!==u&&c&&c===p&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),c&&u&&(!g||!mn(u,g)||!p)&&(u.enterCallbacks[f]||[]).forEach(T=>T(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,f=a.value,p=f&&f.components[u];if(!p)return cl(n.default,{Component:p,route:c});const g=f.props[u],E=g?g===!0?c.params:typeof g=="function"?g(c):g:null,L=_c(p,X({},E,e,{onVnodeUnmounted:M=>{M.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return cl(n.default,{Component:L,route:c})||L}}});function cl(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const wT=bT;function ET(t){const e=lT(t.routes,t),n=t.parseQuery||hT,r=t.stringifyQuery||sl,s=t.history,i=Mn(),o=Mn(),a=Mn(),l=Rf(vt);let c=vt;Zt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Vs.bind(null,_=>""+_),f=Vs.bind(null,xS),p=Vs.bind(null,nr);function g(_,R){let C,D;return Vu(_)?(C=e.getRecordMatcher(_),D=R):D=_,e.addRoute(D,C)}function E(_){const R=e.getRecordMatcher(_);R&&e.removeRoute(R)}function T(){return e.getRoutes().map(_=>_.record)}function L(_){return!!e.getRecordMatcher(_)}function M(_,R){if(R=X({},R||l.value),typeof _=="string"){const h=Ws(n,_,R.path),m=e.resolve({path:h.path},R),y=s.createHref(h.fullPath);return X(h,m,{params:p(m.params),hash:nr(h.hash),redirectedFrom:void 0,href:y})}let C;if(_.path!=null)C=X({},_,{path:Ws(n,_.path,R.path).path});else{const h=X({},_.params);for(const m in h)h[m]==null&&delete h[m];C=X({},_,{params:f(h)}),R.params=f(R.params)}const D=e.resolve(C,R),J=_.hash||"";D.params=u(p(D.params));const ae=US(r,X({},_,{hash:MS(J),path:D.path})),d=s.createHref(ae);return X({fullPath:ae,hash:J,query:r===sl?pT(_.query):_.query||{}},D,{redirectedFrom:void 0,href:d})}function O(_){return typeof _=="string"?Ws(n,_,l.value.path):X({},_)}function $(_,R){if(c!==_)return vn(8,{from:R,to:_})}function k(_){return ne(_)}function z(_){return k(X(O(_),{replace:!0}))}function le(_){const R=_.matched[_.matched.length-1];if(R&&R.redirect){const{redirect:C}=R;let D=typeof C=="function"?C(_):C;return typeof D=="string"&&(D=D.includes("?")||D.includes("#")?D=O(D):{path:D},D.params={}),X({query:_.query,hash:_.hash,params:D.path!=null?{}:_.params},D)}}function ne(_,R){const C=c=M(_),D=l.value,J=_.state,ae=_.force,d=_.replace===!0,h=le(C);if(h)return ne(X(O(h),{state:typeof h=="object"?X({},J,h.state):J,force:ae,replace:d}),R||C);const m=C;m.redirectedFrom=R;let y;return!ae&&FS(r,D,C)&&(y=vn(16,{to:m,from:D}),Ve(D,D,!0,!1)),(y?Promise.resolve(y):$e(m,D)).catch(v=>tt(v)?tt(v,2)?v:gt(v):K(v,m,D)).then(v=>{if(v){if(tt(v,2))return ne(X({replace:d},O(v.to),{state:typeof v.to=="object"?X({},J,v.to.state):J,force:ae}),R||m)}else v=Nt(m,D,!0,d,J);return pt(m,D,v),v})}function ke(_,R){const C=$(_,R);return C?Promise.reject(C):Promise.resolve()}function Me(_){const R=Yt.values().next().value;return R&&typeof R.runWithContext=="function"?R.runWithContext(_):_()}function $e(_,R){let C;const[D,J,ae]=IT(_,R);C=Ks(D.reverse(),"beforeRouteLeave",_,R);for(const h of D)h.leaveGuards.forEach(m=>{C.push(bt(m,_,R))});const d=ke.bind(null,_,R);return C.push(d),De(C).then(()=>{C=[];for(const h of i.list())C.push(bt(h,_,R));return C.push(d),De(C)}).then(()=>{C=Ks(J,"beforeRouteUpdate",_,R);for(const h of J)h.updateGuards.forEach(m=>{C.push(bt(m,_,R))});return C.push(d),De(C)}).then(()=>{C=[];for(const h of ae)if(h.beforeEnter)if(Be(h.beforeEnter))for(const m of h.beforeEnter)C.push(bt(m,_,R));else C.push(bt(h.beforeEnter,_,R));return C.push(d),De(C)}).then(()=>(_.matched.forEach(h=>h.enterCallbacks={}),C=Ks(ae,"beforeRouteEnter",_,R,Me),C.push(d),De(C))).then(()=>{C=[];for(const h of o.list())C.push(bt(h,_,R));return C.push(d),De(C)}).catch(h=>tt(h,8)?h:Promise.reject(h))}function pt(_,R,C){a.list().forEach(D=>Me(()=>D(_,R,C)))}function Nt(_,R,C,D,J){const ae=$(_,R);if(ae)return ae;const d=R===vt,h=Zt?history.state:{};C&&(D||d?s.replace(_.fullPath,X({scroll:d&&h&&h.scroll},J)):s.push(_.fullPath,J)),l.value=_,Ve(_,R,C,d),gt()}let ze;function An(){ze||(ze=s.listen((_,R,C)=>{if(!vr.listening)return;const D=M(_),J=le(D);if(J){ne(X(J,{replace:!0}),D).catch(Vn);return}c=D;const ae=l.value;Zt&&GS(Ja(ae.fullPath,C.delta),ys()),$e(D,ae).catch(d=>tt(d,12)?d:tt(d,2)?(ne(d.to,D).then(h=>{tt(h,20)&&!C.delta&&C.type===rr.pop&&s.go(-1,!1)}).catch(Vn),Promise.reject()):(C.delta&&s.go(-C.delta,!1),K(d,D,ae))).then(d=>{d=d||Nt(D,ae,!1),d&&(C.delta&&!tt(d,8)?s.go(-C.delta,!1):C.type===rr.pop&&tt(d,20)&&s.go(-1,!1)),pt(D,ae,d)}).catch(Vn)}))}let qt=Mn(),ue=Mn(),Q;function K(_,R,C){gt(_);const D=ue.list();return D.length?D.forEach(J=>J(_,R,C)):console.error(_),Promise.reject(_)}function Ze(){return Q&&l.value!==vt?Promise.resolve():new Promise((_,R)=>{qt.add([_,R])})}function gt(_){return Q||(Q=!_,An(),qt.list().forEach(([R,C])=>_?C(_):R()),qt.reset()),_}function Ve(_,R,C,D){const{scrollBehavior:J}=t;if(!Zt||!J)return Promise.resolve();const ae=!C&&qS(Ja(_.fullPath,0))||(D||!C)&&history.state&&history.state.scroll||null;return Fl().then(()=>J(_,R,ae)).then(d=>d&&KS(d)).catch(d=>K(d,_,R))}const Ie=_=>s.go(_);let Jt;const Yt=new Set,vr={currentRoute:l,listening:!0,addRoute:g,removeRoute:E,clearRoutes:e.clearRoutes,hasRoute:L,getRoutes:T,resolve:M,options:t,push:k,replace:z,go:Ie,back:()=>Ie(-1),forward:()=>Ie(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ue.add,isReady:Ze,install(_){const R=this;_.component("RouterLink",vT),_.component("RouterView",wT),_.config.globalProperties.$router=R,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>sn(l)}),Zt&&!Jt&&l.value===vt&&(Jt=!0,k(s.location).catch(J=>{}));const C={};for(const J in vt)Object.defineProperty(C,J,{get:()=>l.value[J],enumerable:!0});_.provide(ro,R),_.provide(qu,$l(C)),_.provide(wi,l);const D=_.unmount;Yt.add(_),_.unmount=function(){Yt.delete(_),Yt.size<1&&(c=vt,ze&&ze(),ze=null,l.value=vt,Jt=!1,Q=!1),D()}}};function De(_){return _.reduce((R,C)=>R.then(()=>Me(C)),Promise.resolve())}return vr}function IT(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>mn(c,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>mn(c,l))||s.push(l))}return[n,r,s]}const ST={},TT={class:"item"},AT={class:"details"};function CT(t,e){return we(),je("div",TT,[x("i",null,[Cs(t.$slots,"icon",{},void 0)]),x("div",AT,[x("h3",null,[Cs(t.$slots,"heading",{},void 0)]),Cs(t.$slots,"default",{},void 0)])])}const $n=xt(ST,[["render",CT],["__scopeId","data-v-fd0742eb"]]),PT={},RT={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"17",fill:"currentColor"};function OT(t,e){return we(),je("svg",RT,e[0]||(e[0]=[x("path",{d:"M11 2.253a1 1 0 1 0-2 0h2zm-2 13a1 1 0 1 0 2 0H9zm.447-12.167a1 1 0 1 0 1.107-1.666L9.447 3.086zM1 2.253L.447 1.42A1 1 0 0 0 0 2.253h1zm0 13H0a1 1 0 0 0 1.553.833L1 15.253zm8.447.833a1 1 0 1 0 1.107-1.666l-1.107 1.666zm0-14.666a1 1 0 1 0 1.107 1.666L9.447 1.42zM19 2.253h1a1 1 0 0 0-.447-.833L19 2.253zm0 13l-.553.833A1 1 0 0 0 20 15.253h-1zm-9.553-.833a1 1 0 1 0 1.107 1.666L9.447 14.42zM9 2.253v13h2v-13H9zm1.553-.833C9.203.523 7.42 0 5.5 0v2c1.572 0 2.961.431 3.947 1.086l1.107-1.666zM5.5 0C3.58 0 1.797.523.447 1.42l1.107 1.666C2.539 2.431 3.928 2 5.5 2V0zM0 2.253v13h2v-13H0zm1.553 13.833C2.539 15.431 3.928 15 5.5 15v-2c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM5.5 15c1.572 0 2.961.431 3.947 1.086l1.107-1.666C9.203 13.523 7.42 13 5.5 13v2zm5.053-11.914C11.539 2.431 12.928 2 14.5 2V0c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM14.5 2c1.573 0 2.961.431 3.947 1.086l1.107-1.666C18.203.523 16.421 0 14.5 0v2zm3.5.253v13h2v-13h-2zm1.553 12.167C18.203 13.523 16.421 13 14.5 13v2c1.573 0 2.961.431 3.947 1.086l1.107-1.666zM14.5 13c-1.92 0-3.703.523-5.053 1.42l1.107 1.666C11.539 15.431 12.928 15 14.5 15v-2z"},null,-1)]))}const kT=xt(PT,[["render",OT]]),MT={},$T={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",class:"iconify iconify--mdi",width:"24",height:"24",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"};function DT(t,e){return we(),je("svg",$T,e[0]||(e[0]=[x("path",{d:"M20 18v-4h-3v1h-2v-1H9v1H7v-1H4v4h16M6.33 8l-1.74 4H7v-1h2v1h6v-1h2v1h2.41l-1.74-4H6.33M9 5v1h6V5H9m12.84 7.61c.1.22.16.48.16.8V18c0 .53-.21 1-.6 1.41c-.4.4-.85.59-1.4.59H4c-.55 0-1-.19-1.4-.59C2.21 19 2 18.53 2 18v-4.59c0-.32.06-.58.16-.8L4.5 7.22C4.84 6.41 5.45 6 6.33 6H7V5c0-.55.18-1 .57-1.41C7.96 3.2 8.44 3 9 3h6c.56 0 1.04.2 1.43.59c.39.41.57.86.57 1.41v1h.67c.88 0 1.49.41 1.83 1.22l2.34 5.39z",fill:"currentColor"},null,-1)]))}const xT=xt(MT,[["render",DT]]),NT={},LT={xmlns:"http://www.w3.org/2000/svg",width:"18",height:"20",fill:"currentColor"};function UT(t,e){return we(),je("svg",LT,e[0]||(e[0]=[x("path",{d:"M11.447 8.894a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm0 1.789a1 1 0 1 0 .894-1.789l-.894 1.789zM7.447 7.106a1 1 0 1 0-.894 1.789l.894-1.789zM10 9a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0H8zm9.447-5.606a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm2 .789a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zM18 5a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0h-2zm-5.447-4.606a1 1 0 1 0 .894-1.789l-.894 1.789zM9 1l.447-.894a1 1 0 0 0-.894 0L9 1zm-2.447.106a1 1 0 1 0 .894 1.789l-.894-1.789zm-6 3a1 1 0 1 0 .894 1.789L.553 4.106zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zm-2-.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 2.789a1 1 0 1 0 .894-1.789l-.894 1.789zM2 5a1 1 0 1 0-2 0h2zM0 7.5a1 1 0 1 0 2 0H0zm8.553 12.394a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 1a1 1 0 1 0 .894 1.789l-.894-1.789zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zM8 19a1 1 0 1 0 2 0H8zm2-2.5a1 1 0 1 0-2 0h2zm-7.447.394a1 1 0 1 0 .894-1.789l-.894 1.789zM1 15H0a1 1 0 0 0 .553.894L1 15zm1-2.5a1 1 0 1 0-2 0h2zm12.553 2.606a1 1 0 1 0 .894 1.789l-.894-1.789zM17 15l.447.894A1 1 0 0 0 18 15h-1zm1-2.5a1 1 0 1 0-2 0h2zm-7.447-5.394l-2 1 .894 1.789 2-1-.894-1.789zm-1.106 1l-2-1-.894 1.789 2 1 .894-1.789zM8 9v2.5h2V9H8zm8.553-4.894l-2 1 .894 1.789 2-1-.894-1.789zm.894 0l-2-1-.894 1.789 2 1 .894-1.789zM16 5v2.5h2V5h-2zm-4.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zm-2.894-1l-2 1 .894 1.789 2-1L8.553.106zM1.447 5.894l2-1-.894-1.789-2 1 .894 1.789zm-.894 0l2 1 .894-1.789-2-1-.894 1.789zM0 5v2.5h2V5H0zm9.447 13.106l-2-1-.894 1.789 2 1 .894-1.789zm0 1.789l2-1-.894-1.789-2 1 .894 1.789zM10 19v-2.5H8V19h2zm-6.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zM2 15v-2.5H0V15h2zm13.447 1.894l2-1-.894-1.789-2 1 .894 1.789zM18 15v-2.5h-2V15h2z"},null,-1)]))}const FT=xt(NT,[["render",UT]]),HT={},jT={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"};function BT(t,e){return we(),je("svg",jT,e[0]||(e[0]=[x("path",{d:"M15 4a1 1 0 1 0 0 2V4zm0 11v-1a1 1 0 0 0-1 1h1zm0 4l-.707.707A1 1 0 0 0 16 19h-1zm-4-4l.707-.707A1 1 0 0 0 11 14v1zm-4.707-1.293a1 1 0 0 0-1.414 1.414l1.414-1.414zm-.707.707l-.707-.707.707.707zM9 11v-1a1 1 0 0 0-.707.293L9 11zm-4 0h1a1 1 0 0 0-1-1v1zm0 4H4a1 1 0 0 0 1.707.707L5 15zm10-9h2V4h-2v2zm2 0a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2zm1 1v6h2V7h-2zm0 6a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2zm-1 1h-2v2h2v-2zm-3 1v4h2v-4h-2zm1.707 3.293l-4-4-1.414 1.414 4 4 1.414-1.414zM11 14H7v2h4v-2zm-4 0c-.276 0-.525-.111-.707-.293l-1.414 1.414C5.42 15.663 6.172 16 7 16v-2zm-.707 1.121l3.414-3.414-1.414-1.414-3.414 3.414 1.414 1.414zM9 12h4v-2H9v2zm4 0a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2zm3-3V3h-2v6h2zm0-6a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2zm-3-3H3v2h10V0zM3 0a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1V0zM0 3v6h2V3H0zm0 6a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1H0zm3 3h2v-2H3v2zm1-1v4h2v-4H4zm1.707 4.707l.586-.586-1.414-1.414-.586.586 1.414 1.414z"},null,-1)]))}const zT=xt(HT,[["render",BT]]),VT={},WT={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor"};function KT(t,e){return we(),je("svg",WT,e[0]||(e[0]=[x("path",{d:"M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.666.105 5.5 5.5 0 0 0-.114 7.665L10 18.78l8.39-8.4a5.5 5.5 0 0 0-.114-7.665 5.5 5.5 0 0 0-7.666-.105l-.61.61z"},null,-1)]))}const GT=xt(VT,[["render",KT]]),qT=_n({__name:"TheWelcome",setup(t){return(e,n)=>(we(),je(Se,null,[Z($n,null,{icon:fe(()=>[Z(kT)]),heading:fe(()=>n[0]||(n[0]=[W("Documentation")])),default:fe(()=>[n[1]||(n[1]=W(" Vue’s ")),n[2]||(n[2]=x("a",{href:"https://vuejs.org/",target:"_blank",rel:"noopener"},"official documentation",-1)),n[3]||(n[3]=W(" provides you with all information you need to get started. "))]),_:1}),Z($n,null,{icon:fe(()=>[Z(xT)]),heading:fe(()=>n[4]||(n[4]=[W("Tooling")])),default:fe(()=>[n[5]||(n[5]=W(" This project is served and bundled with ")),n[6]||(n[6]=x("a",{href:"https://vite.dev/guide/features.html",target:"_blank",rel:"noopener"},"Vite",-1)),n[7]||(n[7]=W(". The recommended IDE setup is ")),n[8]||(n[8]=x("a",{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener"},"VSCode",-1)),n[9]||(n[9]=W(" + ")),n[10]||(n[10]=x("a",{href:"https://github.com/johnsoncodehk/volar",target:"_blank",rel:"noopener"},"Volar",-1)),n[11]||(n[11]=W(". If you need to test your components and web pages, check out ")),n[12]||(n[12]=x("a",{href:"https://www.cypress.io/",target:"_blank",rel:"noopener"},"Cypress",-1)),n[13]||(n[13]=W(" and ")),n[14]||(n[14]=x("a",{href:"https://on.cypress.io/component",target:"_blank",rel:"noopener"},"Cypress Component Testing",-1)),n[15]||(n[15]=W(". ")),n[16]||(n[16]=x("br",null,null,-1)),n[17]||(n[17]=W(" More instructions are available in ")),n[18]||(n[18]=x("code",null,"README.md",-1)),n[19]||(n[19]=W(". "))]),_:1}),Z($n,null,{icon:fe(()=>[Z(FT)]),heading:fe(()=>n[20]||(n[20]=[W("Ecosystem")])),default:fe(()=>[n[21]||(n[21]=W(" Get official tools and libraries for your project: ")),n[22]||(n[22]=x("a",{href:"https://pinia.vuejs.org/",target:"_blank",rel:"noopener"},"Pinia",-1)),n[23]||(n[23]=W(", ")),n[24]||(n[24]=x("a",{href:"https://router.vuejs.org/",target:"_blank",rel:"noopener"},"Vue Router",-1)),n[25]||(n[25]=W(", ")),n[26]||(n[26]=x("a",{href:"https://test-utils.vuejs.org/",target:"_blank",rel:"noopener"},"Vue Test Utils",-1)),n[27]||(n[27]=W(", and ")),n[28]||(n[28]=x("a",{href:"https://github.com/vuejs/devtools",target:"_blank",rel:"noopener"},"Vue Dev Tools",-1)),n[29]||(n[29]=W(". If you need more resources, we suggest paying ")),n[30]||(n[30]=x("a",{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"},"Awesome Vue",-1)),n[31]||(n[31]=W(" a visit. "))]),_:1}),Z($n,null,{icon:fe(()=>[Z(zT)]),heading:fe(()=>n[32]||(n[32]=[W("Community")])),default:fe(()=>[n[33]||(n[33]=W(" Got stuck? Ask your question on ")),n[34]||(n[34]=x("a",{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"},"Vue Land",-1)),n[35]||(n[35]=W(", our official Discord server, or ")),n[36]||(n[36]=x("a",{href:"https://stackoverflow.com/questions/tagged/vue.js",target:"_blank",rel:"noopener"},"StackOverflow",-1)),n[37]||(n[37]=W(". You should also subscribe to ")),n[38]||(n[38]=x("a",{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"},"our mailing list",-1)),n[39]||(n[39]=W(" and follow the official ")),n[40]||(n[40]=x("a",{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"},"@vuejs",-1)),n[41]||(n[41]=W(" twitter account for latest news in the Vue world. "))]),_:1}),Z($n,null,{icon:fe(()=>[Z(GT)]),heading:fe(()=>n[42]||(n[42]=[W("Support Vue")])),default:fe(()=>[n[43]||(n[43]=W(" As an independent project, Vue relies on community backing for its sustainability. You can help us by ")),n[44]||(n[44]=x("a",{href:"https://vuejs.org/sponsor/",target:"_blank",rel:"noopener"},"becoming a sponsor",-1)),n[45]||(n[45]=W(". "))]),_:1})],64))}}),JT=_n({__name:"HomeView",emits:["toggleLogin"],setup(t,{emit:e}){const n=e,r=()=>{n("toggleLogin")};return(s,i)=>(we(),je("main",null,[x("button",{class:"ui button",onClick:r},"Login"),Z(qT)]))}}),YT=ET({history:QS("/"),routes:[{path:"/",name:"home",component:JT},{path:"/about",name:"about",component:()=>wS(()=>import("./AboutView-BYiIgR_D.js"),__vite__mapDeps([0,1]))}]}),so=gh(_S);so.use(bh());so.use(YT);so.mount("#app");export{fr as A,h0 as B,pn as C,y0 as D,Mw as E,JI as F,Un as G,Gl as H,je as I,x as J,Se as K,Yc as L,XT as M,we as N,lf as O,xt as P,lA as S,Zc as _,c0 as a,ZT as b,$w as c,eA as d,Zn as e,iA as f,Tn as g,uA as h,Vc as i,va as j,oA as k,cA as l,aA as m,u0 as n,ee as o,tA as p,sA as q,Bn as r,nA as s,rA as t,O0 as u,b0 as v,I0 as w,ur as x,fA as y,QT as z};
