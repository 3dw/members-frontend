const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ActionView-DkfzgeyT.js","assets/ActionView-Bu2FJU03.css","assets/AdminView-DaZkm-mV.js","assets/AdminView-BxCgHhPk.css","assets/DocView-Cd2-0Vwg.js","assets/DocView-JHBvaCaX.css","assets/JoinUsView-DmrQn4eU.js","assets/JoinUsView-69UeaZhz.css","assets/ChangeLogView-LgcgXWRd.js","assets/ChangeLogView-BvE15HZA.css","assets/MapsView-Cum_6abA.js","assets/leaflet-src-BtFTsOJo.js","assets/leaflet-src-HupOsEJb.css","assets/Loader-I9Y_ebAZ.js","assets/Loader-D04Knui3.css","assets/mix-O88PJOmL.js","assets/MapsView-BZlJAW8u.css","assets/FlagView-Dv10BlA1.js","assets/Card-BpWniMcg.js","assets/Card-BUJkKdzi.css","assets/FlagView-BdJvIrvN.css","assets/ProfileView-CUDoldLh.js","assets/ProfileView-Kgc4-67G.css","assets/PrivacyPolicyView-RT2mQVA2.js","assets/PrivacyPolicyView-CBD_1jnB.css","assets/FeedbackView-Dc6bhG-G.js","assets/FeedbackView-DR4UgRx8.css","assets/FaqView-DPUdn6lt.js","assets/FaqView-BGOxJ8aB.css","assets/CreateFaqView-DrkOUWGh.js","assets/CreateFaqView-_Khm9L0Y.css","assets/EditFaqView-D56s8cqG.js","assets/EditFaqView-BijKtgWG.css","assets/AboutView-dkZ06eda.js","assets/AboutView-B0xuRFU5.css","assets/404ErrorView-hsWIqbfc.js","assets/404ErrorView-DOV6fQwr.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Xl(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const de={},_s=[],Dt=()=>{},vv=()=>!1,ko=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Zl=t=>t.startsWith("onUpdate:"),Ne=Object.assign,ec=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},yv=Object.prototype.hasOwnProperty,re=(t,e)=>yv.call(t,e),j=Array.isArray,vs=t=>ii(t)==="[object Map]",Fs=t=>ii(t)==="[object Set]",ku=t=>ii(t)==="[object Date]",q=t=>typeof t=="function",Te=t=>typeof t=="string",Mt=t=>typeof t=="symbol",me=t=>t!==null&&typeof t=="object",Ff=t=>(me(t)||q(t))&&q(t.then)&&q(t.catch),Uf=Object.prototype.toString,ii=t=>Uf.call(t),bv=t=>ii(t).slice(8,-1),yr=t=>ii(t)==="[object Object]",tc=t=>Te(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,br=Xl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Do=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},wv=/-(\w)/g,dt=Do(t=>t.replace(wv,(e,n)=>n?n.toUpperCase():"")),Ev=/\B([A-Z])/g,Nn=Do(t=>t.replace(Ev,"-$1").toLowerCase()),xo=Do(t=>t.charAt(0).toUpperCase()+t.slice(1)),va=Do(t=>t?`on${xo(t)}`:""),En=(t,e)=>!Object.is(t,e),Li=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},$f=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Ki=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Du;const Lo=()=>Du||(Du=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function nc(t){if(j(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Te(s)?Iv(s):nc(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(Te(t)||me(t))return t}const Cv=/;(?![^(]*\))/g,Tv=/:([^]+)/,Sv=/\/\*[^]*?\*\//g;function Iv(t){const e={};return t.replace(Sv,"").split(Cv).forEach(n=>{if(n){const s=n.split(Tv);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Yn(t){let e="";if(Te(t))e=t;else if(j(t))for(let n=0;n<t.length;n++){const s=Yn(t[n]);s&&(e+=s+" ")}else if(me(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Av="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Rv=Xl(Av);function Bf(t){return!!t||t===""}function Pv(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=oi(t[s],e[s]);return n}function oi(t,e){if(t===e)return!0;let n=ku(t),s=ku(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Mt(t),s=Mt(e),n||s)return t===e;if(n=j(t),s=j(e),n||s)return n&&s?Pv(t,e):!1;if(n=me(t),s=me(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!oi(t[o],e[o]))return!1}}return String(t)===String(e)}function sc(t,e){return t.findIndex(n=>oi(n,e))}const jf=t=>!!(t&&t.__v_isRef===!0),Za=t=>Te(t)?t:t==null?"":j(t)||me(t)&&(t.toString===Uf||!q(t.toString))?jf(t)?Za(t.value):JSON.stringify(t,Hf,2):String(t),Hf=(t,e)=>jf(e)?Hf(t,e.value):vs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],i)=>(n[ya(s,i)+" =>"]=r,n),{})}:Fs(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>ya(n))}:Mt(e)?ya(e):me(e)&&!j(e)&&!yr(e)?String(e):e,ya=(t,e="")=>{var n;return Mt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let st;class Vf{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=st,!e&&st&&(this.index=(st.scopes||(st.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=st;try{return st=this,e()}finally{st=n}}}on(){st=this}off(){st=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Ov(t){return new Vf(t)}function Nv(){return st}let pe;const ba=new WeakSet;class Wf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,st&&st.active&&st.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ba.has(this)&&(ba.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Gf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,xu(this),zf(this);const e=pe,n=bt;pe=this,bt=!0;try{return this.fn()}finally{Kf(this),pe=e,bt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)oc(e);this.deps=this.depsTail=void 0,xu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ba.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){el(this)&&this.run()}get dirty(){return el(this)}}let qf=0,wr,Er;function Gf(t,e=!1){if(t.flags|=8,e){t.next=Er,Er=t;return}t.next=wr,wr=t}function rc(){qf++}function ic(){if(--qf>0)return;if(Er){let e=Er;for(Er=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;wr;){let e=wr;for(wr=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function zf(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Kf(t){let e,n=t.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),oc(s),kv(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}t.deps=e,t.depsTail=n}function el(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Yf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Yf(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Lr))return;t.globalVersion=Lr;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!el(t)){t.flags&=-3;return}const n=pe,s=bt;pe=t,bt=!0;try{zf(t);const r=t.fn(t._value);(e.version===0||En(r,t._value))&&(t._value=r,e.version++)}catch(r){throw e.version++,r}finally{pe=n,bt=s,Kf(t),t.flags&=-3}}function oc(t,e=!1){const{dep:n,prevSub:s,nextSub:r}=t;if(s&&(s.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)oc(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function kv(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let bt=!0;const Jf=[];function kn(){Jf.push(bt),bt=!1}function Dn(){const t=Jf.pop();bt=t===void 0?!0:t}function xu(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=pe;pe=void 0;try{e()}finally{pe=n}}}let Lr=0;class Dv{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ac{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!pe||!bt||pe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==pe)n=this.activeLink=new Dv(pe,this),pe.deps?(n.prevDep=pe.depsTail,pe.depsTail.nextDep=n,pe.depsTail=n):pe.deps=pe.depsTail=n,Qf(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=pe.depsTail,n.nextDep=void 0,pe.depsTail.nextDep=n,pe.depsTail=n,pe.deps===n&&(pe.deps=s)}return n}trigger(e){this.version++,Lr++,this.notify(e)}notify(e){rc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{ic()}}}function Qf(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Qf(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const tl=new WeakMap,zn=Symbol(""),nl=Symbol(""),Mr=Symbol("");function Le(t,e,n){if(bt&&pe){let s=tl.get(t);s||tl.set(t,s=new Map);let r=s.get(n);r||(s.set(n,r=new ac),r.map=s,r.key=n),r.track()}}function Wt(t,e,n,s,r,i){const o=tl.get(t);if(!o){Lr++;return}const a=l=>{l&&l.trigger()};if(rc(),e==="clear")o.forEach(a);else{const l=j(t),c=l&&tc(n);if(l&&n==="length"){const u=Number(s);o.forEach((d,h)=>{(h==="length"||h===Mr||!Mt(h)&&h>=u)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(Mr)),e){case"add":l?c&&a(o.get("length")):(a(o.get(zn)),vs(t)&&a(o.get(nl)));break;case"delete":l||(a(o.get(zn)),vs(t)&&a(o.get(nl)));break;case"set":vs(t)&&a(o.get(zn));break}}ic()}function ds(t){const e=se(t);return e===t?e:(Le(e,"iterate",Mr),ut(t)?e:e.map(Me))}function Mo(t){return Le(t=se(t),"iterate",Mr),t}const xv={__proto__:null,[Symbol.iterator](){return wa(this,Symbol.iterator,Me)},concat(...t){return ds(this).concat(...t.map(e=>j(e)?ds(e):e))},entries(){return wa(this,"entries",t=>(t[1]=Me(t[1]),t))},every(t,e){return Bt(this,"every",t,e,void 0,arguments)},filter(t,e){return Bt(this,"filter",t,e,n=>n.map(Me),arguments)},find(t,e){return Bt(this,"find",t,e,Me,arguments)},findIndex(t,e){return Bt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Bt(this,"findLast",t,e,Me,arguments)},findLastIndex(t,e){return Bt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Bt(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ea(this,"includes",t)},indexOf(...t){return Ea(this,"indexOf",t)},join(t){return ds(this).join(t)},lastIndexOf(...t){return Ea(this,"lastIndexOf",t)},map(t,e){return Bt(this,"map",t,e,void 0,arguments)},pop(){return sr(this,"pop")},push(...t){return sr(this,"push",t)},reduce(t,...e){return Lu(this,"reduce",t,e)},reduceRight(t,...e){return Lu(this,"reduceRight",t,e)},shift(){return sr(this,"shift")},some(t,e){return Bt(this,"some",t,e,void 0,arguments)},splice(...t){return sr(this,"splice",t)},toReversed(){return ds(this).toReversed()},toSorted(t){return ds(this).toSorted(t)},toSpliced(...t){return ds(this).toSpliced(...t)},unshift(...t){return sr(this,"unshift",t)},values(){return wa(this,"values",Me)}};function wa(t,e,n){const s=Mo(t),r=s[e]();return s!==t&&!ut(t)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.value&&(i.value=n(i.value)),i}),r}const Lv=Array.prototype;function Bt(t,e,n,s,r,i){const o=Mo(t),a=o!==t&&!ut(t),l=o[e];if(l!==Lv[e]){const d=l.apply(t,i);return a?Me(d):d}let c=n;o!==t&&(a?c=function(d,h){return n.call(this,Me(d),h,t)}:n.length>2&&(c=function(d,h){return n.call(this,d,h,t)}));const u=l.call(o,c,s);return a&&r?r(u):u}function Lu(t,e,n,s){const r=Mo(t);let i=n;return r!==t&&(ut(t)?n.length>3&&(i=function(o,a,l){return n.call(this,o,a,l,t)}):i=function(o,a,l){return n.call(this,o,Me(a),l,t)}),r[e](i,...s)}function Ea(t,e,n){const s=se(t);Le(s,"iterate",Mr);const r=s[e](...n);return(r===-1||r===!1)&&uc(n[0])?(n[0]=se(n[0]),s[e](...n)):r}function sr(t,e,n=[]){kn(),rc();const s=se(t)[e].apply(t,n);return ic(),Dn(),s}const Mv=Xl("__proto__,__v_isRef,__isVue"),Xf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Mt));function Fv(t){Mt(t)||(t=String(t));const e=se(this);return Le(e,"has",t),e.hasOwnProperty(t)}class Zf{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?zv:sp:i?np:tp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=j(e);if(!r){let l;if(o&&(l=xv[n]))return l;if(n==="hasOwnProperty")return Fv}const a=Reflect.get(e,n,$e(e)?e:s);return(Mt(n)?Xf.has(n):Mv(n))||(r||Le(e,"get",n),i)?a:$e(a)?o&&tc(n)?a:a.value:me(a)?r?ip(a):Fo(a):a}}class ep extends Zf{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];if(!this._isShallow){const l=Jn(i);if(!ut(s)&&!Jn(s)&&(i=se(i),s=se(s)),!j(e)&&$e(i)&&!$e(s))return l?!1:(i.value=s,!0)}const o=j(e)&&tc(n)?Number(n)<e.length:re(e,n),a=Reflect.set(e,n,s,$e(e)?e:r);return e===se(r)&&(o?En(s,i)&&Wt(e,"set",n,s):Wt(e,"add",n,s)),a}deleteProperty(e,n){const s=re(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&Wt(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!Mt(n)||!Xf.has(n))&&Le(e,"has",n),s}ownKeys(e){return Le(e,"iterate",j(e)?"length":zn),Reflect.ownKeys(e)}}class Uv extends Zf{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const $v=new ep,Bv=new Uv,jv=new ep(!0);const sl=t=>t,Ai=t=>Reflect.getPrototypeOf(t);function Hv(t,e,n){return function(...s){const r=this.__v_raw,i=se(r),o=vs(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...s),u=n?sl:e?rl:Me;return!e&&Le(i,"iterate",l?nl:zn),{next(){const{value:d,done:h}=c.next();return h?{value:d,done:h}:{value:a?[u(d[0]),u(d[1])]:u(d),done:h}},[Symbol.iterator](){return this}}}}function Ri(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Vv(t,e){const n={get(r){const i=this.__v_raw,o=se(i),a=se(r);t||(En(r,a)&&Le(o,"get",r),Le(o,"get",a));const{has:l}=Ai(o),c=e?sl:t?rl:Me;if(l.call(o,r))return c(i.get(r));if(l.call(o,a))return c(i.get(a));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!t&&Le(se(r),"iterate",zn),Reflect.get(r,"size",r)},has(r){const i=this.__v_raw,o=se(i),a=se(r);return t||(En(r,a)&&Le(o,"has",r),Le(o,"has",a)),r===a?i.has(r):i.has(r)||i.has(a)},forEach(r,i){const o=this,a=o.__v_raw,l=se(a),c=e?sl:t?rl:Me;return!t&&Le(l,"iterate",zn),a.forEach((u,d)=>r.call(i,c(u),c(d),o))}};return Ne(n,t?{add:Ri("add"),set:Ri("set"),delete:Ri("delete"),clear:Ri("clear")}:{add(r){!e&&!ut(r)&&!Jn(r)&&(r=se(r));const i=se(this);return Ai(i).has.call(i,r)||(i.add(r),Wt(i,"add",r,r)),this},set(r,i){!e&&!ut(i)&&!Jn(i)&&(i=se(i));const o=se(this),{has:a,get:l}=Ai(o);let c=a.call(o,r);c||(r=se(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,i),c?En(i,u)&&Wt(o,"set",r,i):Wt(o,"add",r,i),this},delete(r){const i=se(this),{has:o,get:a}=Ai(i);let l=o.call(i,r);l||(r=se(r),l=o.call(i,r)),a&&a.call(i,r);const c=i.delete(r);return l&&Wt(i,"delete",r,void 0),c},clear(){const r=se(this),i=r.size!==0,o=r.clear();return i&&Wt(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Hv(r,t,e)}),n}function lc(t,e){const n=Vv(t,e);return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(re(n,r)&&r in s?n:s,r,i)}const Wv={get:lc(!1,!1)},qv={get:lc(!1,!0)},Gv={get:lc(!0,!1)};const tp=new WeakMap,np=new WeakMap,sp=new WeakMap,zv=new WeakMap;function Kv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Yv(t){return t.__v_skip||!Object.isExtensible(t)?0:Kv(bv(t))}function Fo(t){return Jn(t)?t:cc(t,!1,$v,Wv,tp)}function rp(t){return cc(t,!1,jv,qv,np)}function ip(t){return cc(t,!0,Bv,Gv,sp)}function cc(t,e,n,s,r){if(!me(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=Yv(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function ys(t){return Jn(t)?ys(t.__v_raw):!!(t&&t.__v_isReactive)}function Jn(t){return!!(t&&t.__v_isReadonly)}function ut(t){return!!(t&&t.__v_isShallow)}function uc(t){return t?!!t.__v_raw:!1}function se(t){const e=t&&t.__v_raw;return e?se(e):t}function op(t){return!re(t,"__v_skip")&&Object.isExtensible(t)&&$f(t,"__v_skip",!0),t}const Me=t=>me(t)?Fo(t):t,rl=t=>me(t)?ip(t):t;function $e(t){return t?t.__v_isRef===!0:!1}function pt(t){return ap(t,!1)}function Jv(t){return ap(t,!0)}function ap(t,e){return $e(t)?t:new Qv(t,e)}class Qv{constructor(e,n){this.dep=new ac,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:se(e),this._value=n?e:Me(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||ut(e)||Jn(e);e=s?e:se(e),En(e,n)&&(this._rawValue=e,this._value=s?e:Me(e),this.dep.trigger())}}function bs(t){return $e(t)?t.value:t}const Xv={get:(t,e,n)=>e==="__v_raw"?t:bs(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return $e(r)&&!$e(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function lp(t){return ys(t)?t:new Proxy(t,Xv)}class Zv{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new ac(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Lr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&pe!==this)return Gf(this,!0),!0}get value(){const e=this.dep.track();return Yf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function ey(t,e,n=!1){let s,r;return q(t)?s=t:(s=t.get,r=t.set),new Zv(s,r,n)}const Pi={},Yi=new WeakMap;let Bn;function ty(t,e=!1,n=Bn){if(n){let s=Yi.get(n);s||Yi.set(n,s=[]),s.push(t)}}function ny(t,e,n=de){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:a,call:l}=n,c=D=>r?D:ut(D)||r===!1||r===0?qt(D,1):qt(D);let u,d,h,p,m=!1,_=!1;if($e(t)?(d=()=>t.value,m=ut(t)):ys(t)?(d=()=>c(t),m=!0):j(t)?(_=!0,m=t.some(D=>ys(D)||ut(D)),d=()=>t.map(D=>{if($e(D))return D.value;if(ys(D))return c(D);if(q(D))return l?l(D,2):D()})):q(t)?e?d=l?()=>l(t,2):t:d=()=>{if(h){kn();try{h()}finally{Dn()}}const D=Bn;Bn=u;try{return l?l(t,3,[p]):t(p)}finally{Bn=D}}:d=Dt,e&&r){const D=d,B=r===!0?1/0:r;d=()=>qt(D(),B)}const b=Nv(),A=()=>{u.stop(),b&&ec(b.effects,u)};if(i&&e){const D=e;e=(...B)=>{D(...B),A()}}let R=_?new Array(t.length).fill(Pi):Pi;const O=D=>{if(!(!(u.flags&1)||!u.dirty&&!D))if(e){const B=u.run();if(r||m||(_?B.some((ee,Q)=>En(ee,R[Q])):En(B,R))){h&&h();const ee=Bn;Bn=u;try{const Q=[B,R===Pi?void 0:_&&R[0]===Pi?[]:R,p];l?l(e,3,Q):e(...Q),R=B}finally{Bn=ee}}}else u.run()};return a&&a(O),u=new Wf(d),u.scheduler=o?()=>o(O,!1):O,p=D=>ty(D,!1,u),h=u.onStop=()=>{const D=Yi.get(u);if(D){if(l)l(D,4);else for(const B of D)B();Yi.delete(u)}},e?s?O(!0):R=u.run():o?o(O.bind(null,!0),!0):u.run(),A.pause=u.pause.bind(u),A.resume=u.resume.bind(u),A.stop=A,A}function qt(t,e=1/0,n){if(e<=0||!me(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,$e(t))qt(t.value,e,n);else if(j(t))for(let s=0;s<t.length;s++)qt(t[s],e,n);else if(Fs(t)||vs(t))t.forEach(s=>{qt(s,e,n)});else if(yr(t)){for(const s in t)qt(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&qt(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ai(t,e,n,s){try{return s?t(...s):t()}catch(r){Uo(r,e,n)}}function Ft(t,e,n,s){if(q(t)){const r=ai(t,e,n,s);return r&&Ff(r)&&r.catch(i=>{Uo(i,e,n)}),r}if(j(t)){const r=[];for(let i=0;i<t.length;i++)r.push(Ft(t[i],e,n,s));return r}}function Uo(t,e,n,s=!0){const r=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||de;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,l,c)===!1)return}a=a.parent}if(i){kn(),ai(i,null,10,[t,l,c]),Dn();return}}sy(t,n,r,s,o)}function sy(t,e,n,s=!0,r=!1){if(r)throw t;console.error(t)}const We=[];let Ot=-1;const ws=[];let pn=null,fs=0;const cp=Promise.resolve();let Ji=null;function Fr(t){const e=Ji||cp;return t?e.then(this?t.bind(this):t):e}function ry(t){let e=Ot+1,n=We.length;for(;e<n;){const s=e+n>>>1,r=We[s],i=Ur(r);i<t||i===t&&r.flags&2?e=s+1:n=s}return e}function dc(t){if(!(t.flags&1)){const e=Ur(t),n=We[We.length-1];!n||!(t.flags&2)&&e>=Ur(n)?We.push(t):We.splice(ry(e),0,t),t.flags|=1,up()}}function up(){Ji||(Ji=cp.then(hp))}function iy(t){j(t)?ws.push(...t):pn&&t.id===-1?pn.splice(fs+1,0,t):t.flags&1||(ws.push(t),t.flags|=1),up()}function Mu(t,e,n=Ot+1){for(;n<We.length;n++){const s=We[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;We.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function dp(t){if(ws.length){const e=[...new Set(ws)].sort((n,s)=>Ur(n)-Ur(s));if(ws.length=0,pn){pn.push(...e);return}for(pn=e,fs=0;fs<pn.length;fs++){const n=pn[fs];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}pn=null,fs=0}}const Ur=t=>t.id==null?t.flags&2?-1:1/0:t.id;function hp(t){try{for(Ot=0;Ot<We.length;Ot++){const e=We[Ot];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ai(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Ot<We.length;Ot++){const e=We[Ot];e&&(e.flags&=-2)}Ot=-1,We.length=0,dp(),Ji=null,(We.length||ws.length)&&hp()}}let rt=null,fp=null;function Qi(t){const e=rt;return rt=t,fp=t&&t.type.__scopeId||null,e}function we(t,e=rt,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&qu(-1);const i=Qi(e);let o;try{o=t(...r)}finally{Qi(i),s._d&&qu(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Mi(t,e){if(rt===null)return t;const n=Ho(rt),s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[i,o,a,l=de]=e[r];i&&(q(i)&&(i={mounted:i,updated:i}),i.deep&&qt(o),s.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Un(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let l=a.dir[s];l&&(kn(),Ft(l,n,8,[t.el,a,t,e]),Dn())}}const oy=Symbol("_vte"),ay=t=>t.__isTeleport;function hc(t,e){t.shapeFlag&6&&t.component?(t.transition=e,hc(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function li(t,e){return q(t)?Ne({name:t.name},e,{setup:t}):t}function pp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function il(t,e,n,s,r=!1){if(j(t)){t.forEach((m,_)=>il(m,e&&(j(e)?e[_]:e),n,s,r));return}if(Cr(s)&&!r)return;const i=s.shapeFlag&4?Ho(s.component):s.el,o=r?null:i,{i:a,r:l}=t,c=e&&e.r,u=a.refs===de?a.refs={}:a.refs,d=a.setupState,h=se(d),p=d===de?()=>!1:m=>re(h,m);if(c!=null&&c!==l&&(Te(c)?(u[c]=null,p(c)&&(d[c]=null)):$e(c)&&(c.value=null)),q(l))ai(l,a,12,[o,u]);else{const m=Te(l),_=$e(l);if(m||_){const b=()=>{if(t.f){const A=m?p(l)?d[l]:u[l]:l.value;r?j(A)&&ec(A,i):j(A)?A.includes(i)||A.push(i):m?(u[l]=[i],p(l)&&(d[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else m?(u[l]=o,p(l)&&(d[l]=o)):_&&(l.value=o,t.k&&(u[t.k]=o))};o?(b.id=-1,nt(b,n)):b()}}}Lo().requestIdleCallback;Lo().cancelIdleCallback;const Cr=t=>!!t.type.__asyncLoader,gp=t=>t.type.__isKeepAlive;function ly(t,e){mp(t,"a",e)}function cy(t,e){mp(t,"da",e)}function mp(t,e,n=Ue){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if($o(e,s,n),n){let r=n.parent;for(;r&&r.parent;)gp(r.parent.vnode)&&uy(s,e,n,r),r=r.parent}}function uy(t,e,n,s){const r=$o(e,t,s,!0);_p(()=>{ec(s[e],r)},n)}function $o(t,e,n=Ue,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{kn();const a=ci(n),l=Ft(e,n,t,o);return a(),Dn(),l});return s?r.unshift(i):r.push(i),i}}const nn=t=>(e,n=Ue)=>{(!Br||t==="sp")&&$o(t,(...s)=>e(...s),n)},dy=nn("bm"),fc=nn("m"),hy=nn("bu"),fy=nn("u"),py=nn("bum"),_p=nn("um"),gy=nn("sp"),my=nn("rtg"),_y=nn("rtc");function vy(t,e=Ue){$o("ec",t,e)}const yy="components";function gr(t,e){return wy(yy,t,!0,e)||t}const by=Symbol.for("v-ndc");function wy(t,e,n=!0,s=!1){const r=rt||Ue;if(r){const i=r.type;{const a=lb(i,!1);if(a&&(a===e||a===dt(e)||a===xo(dt(e))))return i}const o=Fu(r[t]||i[t],e)||Fu(r.appContext[t],e);return!o&&s?i:o}}function Fu(t,e){return t&&(t[e]||t[dt(e)]||t[xo(dt(e))])}function Ey(t,e,n,s){let r;const i=n,o=j(t);if(o||Te(t)){const a=o&&ys(t);let l=!1;a&&(l=!ut(t),t=Mo(t)),r=new Array(t.length);for(let c=0,u=t.length;c<u;c++)r[c]=e(l?Me(t[c]):t[c],c,void 0,i)}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,i)}else if(me(t))if(t[Symbol.iterator])r=Array.from(t,(a,l)=>e(a,l,void 0,i));else{const a=Object.keys(t);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(t[u],u,l,i)}}else r=[];return r}const ol=t=>t?Fp(t)?Ho(t):ol(t.parent):null,Tr=Ne(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ol(t.parent),$root:t=>ol(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>pc(t),$forceUpdate:t=>t.f||(t.f=()=>{dc(t.update)}),$nextTick:t=>t.n||(t.n=Fr.bind(t.proxy)),$watch:t=>Vy.bind(t)}),Ca=(t,e)=>t!==de&&!t.__isScriptSetup&&re(t,e),Cy={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(Ca(s,e))return o[e]=1,s[e];if(r!==de&&re(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&re(c,e))return o[e]=3,i[e];if(n!==de&&re(n,e))return o[e]=4,n[e];al&&(o[e]=0)}}const u=Tr[e];let d,h;if(u)return e==="$attrs"&&Le(t.attrs,"get",""),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==de&&re(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,re(h,e))return h[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return Ca(r,e)?(r[e]=n,!0):s!==de&&re(s,e)?(s[e]=n,!0):re(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==de&&re(t,o)||Ca(e,o)||(a=i[0])&&re(a,o)||re(s,o)||re(Tr,o)||re(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:re(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Uu(t){return j(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let al=!0;function Ty(t){const e=pc(t),n=t.proxy,s=t.ctx;al=!1,e.beforeCreate&&$u(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:h,beforeUpdate:p,updated:m,activated:_,deactivated:b,beforeDestroy:A,beforeUnmount:R,destroyed:O,unmounted:D,render:B,renderTracked:ee,renderTriggered:Q,errorCaptured:ke,serverPrefetch:je,expose:lt,inheritAttrs:cn,components:Fn,directives:It,filters:tr}=e;if(c&&Sy(c,s,null),o)for(const ce in o){const te=o[ce];q(te)&&(s[ce]=te.bind(n))}if(r){const ce=r.call(n,n);me(ce)&&(t.data=Fo(ce))}if(al=!0,i)for(const ce in i){const te=i[ce],$t=q(te)?te.bind(n,n):q(te.get)?te.get.bind(n,n):Dt,un=!q(te)&&q(te.set)?te.set.bind(n):Dt,At=mt({get:$t,set:un});Object.defineProperty(s,ce,{enumerable:!0,configurable:!0,get:()=>At.value,set:ze=>At.value=ze})}if(a)for(const ce in a)vp(a[ce],s,n,ce);if(l){const ce=q(l)?l.call(n):l;Reflect.ownKeys(ce).forEach(te=>{Fi(te,ce[te])})}u&&$u(u,t,"c");function Ae(ce,te){j(te)?te.forEach($t=>ce($t.bind(n))):te&&ce(te.bind(n))}if(Ae(dy,d),Ae(fc,h),Ae(hy,p),Ae(fy,m),Ae(ly,_),Ae(cy,b),Ae(vy,ke),Ae(_y,ee),Ae(my,Q),Ae(py,R),Ae(_p,D),Ae(gy,je),j(lt))if(lt.length){const ce=t.exposed||(t.exposed={});lt.forEach(te=>{Object.defineProperty(ce,te,{get:()=>n[te],set:$t=>n[te]=$t})})}else t.exposed||(t.exposed={});B&&t.render===Dt&&(t.render=B),cn!=null&&(t.inheritAttrs=cn),Fn&&(t.components=Fn),It&&(t.directives=It),je&&pp(t)}function Sy(t,e,n=Dt){j(t)&&(t=ll(t));for(const s in t){const r=t[s];let i;me(r)?"default"in r?i=wt(r.from||s,r.default,!0):i=wt(r.from||s):i=wt(r),$e(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function $u(t,e,n){Ft(j(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function vp(t,e,n,s){let r=s.includes(".")?kp(n,s):()=>n[s];if(Te(t)){const i=e[t];q(i)&&Sr(r,i)}else if(q(t))Sr(r,t.bind(n));else if(me(t))if(j(t))t.forEach(i=>vp(i,e,n,s));else{const i=q(t.handler)?t.handler.bind(n):e[t.handler];q(i)&&Sr(r,i,t)}}function pc(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!r.length&&!n&&!s?l=e:(l={},r.length&&r.forEach(c=>Xi(l,c,o,!0)),Xi(l,e,o)),me(e)&&i.set(e,l),l}function Xi(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Xi(t,i,n,!0),r&&r.forEach(o=>Xi(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Iy[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Iy={data:Bu,props:ju,emits:ju,methods:mr,computed:mr,beforeCreate:He,created:He,beforeMount:He,mounted:He,beforeUpdate:He,updated:He,beforeDestroy:He,beforeUnmount:He,destroyed:He,unmounted:He,activated:He,deactivated:He,errorCaptured:He,serverPrefetch:He,components:mr,directives:mr,watch:Ry,provide:Bu,inject:Ay};function Bu(t,e){return e?t?function(){return Ne(q(t)?t.call(this,this):t,q(e)?e.call(this,this):e)}:e:t}function Ay(t,e){return mr(ll(t),ll(e))}function ll(t){if(j(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function He(t,e){return t?[...new Set([].concat(t,e))]:e}function mr(t,e){return t?Ne(Object.create(null),t,e):e}function ju(t,e){return t?j(t)&&j(e)?[...new Set([...t,...e])]:Ne(Object.create(null),Uu(t),Uu(e??{})):e}function Ry(t,e){if(!t)return e;if(!e)return t;const n=Ne(Object.create(null),t);for(const s in e)n[s]=He(t[s],e[s]);return n}function yp(){return{app:null,config:{isNativeTag:vv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Py=0;function Oy(t,e){return function(s,r=null){q(s)||(s=Ne({},s)),r!=null&&!me(r)&&(r=null);const i=yp(),o=new WeakSet,a=[];let l=!1;const c=i.app={_uid:Py++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:ub,get config(){return i.config},set config(u){},use(u,...d){return o.has(u)||(u&&q(u.install)?(o.add(u),u.install(c,...d)):q(u)&&(o.add(u),u(c,...d))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,d){return d?(i.components[u]=d,c):i.components[u]},directive(u,d){return d?(i.directives[u]=d,c):i.directives[u]},mount(u,d,h){if(!l){const p=c._ceVNode||le(s,r);return p.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),d&&e?e(p,u):t(p,u,h),l=!0,c._container=u,u.__vue_app__=c,Ho(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Ft(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,d){return i.provides[u]=d,c},runWithContext(u){const d=Es;Es=c;try{return u()}finally{Es=d}}};return c}}let Es=null;function Fi(t,e){if(Ue){let n=Ue.provides;const s=Ue.parent&&Ue.parent.provides;s===n&&(n=Ue.provides=Object.create(s)),n[t]=e}}function wt(t,e,n=!1){const s=Ue||rt;if(s||Es){const r=Es?Es._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&q(e)?e.call(s&&s.proxy):e}}const bp={},wp=()=>Object.create(bp),Ep=t=>Object.getPrototypeOf(t)===bp;function Ny(t,e,n,s=!1){const r={},i=wp();t.propsDefaults=Object.create(null),Cp(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:rp(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function ky(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=se(r),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];if(Bo(t.emitsOptions,h))continue;const p=e[h];if(l)if(re(i,h))p!==i[h]&&(i[h]=p,c=!0);else{const m=dt(h);r[m]=cl(l,a,m,p,t,!1)}else p!==i[h]&&(i[h]=p,c=!0)}}}else{Cp(t,e,r,i)&&(c=!0);let u;for(const d in a)(!e||!re(e,d)&&((u=Nn(d))===d||!re(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(r[d]=cl(l,a,d,void 0,t,!0)):delete r[d]);if(i!==a)for(const d in i)(!e||!re(e,d))&&(delete i[d],c=!0)}c&&Wt(t.attrs,"set","")}function Cp(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(br(l))continue;const c=e[l];let u;r&&re(r,u=dt(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:Bo(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(i){const l=se(n),c=a||de;for(let u=0;u<i.length;u++){const d=i[u];n[d]=cl(r,l,d,c[d],t,!re(c,d))}}return o}function cl(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=re(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&q(l)){const{propsDefaults:c}=r;if(n in c)s=c[n];else{const u=ci(r);s=c[n]=l.call(null,e),u()}}else s=l;r.ce&&r.ce._setProp(n,s)}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Nn(n))&&(s=!0))}return s}const Dy=new WeakMap;function Tp(t,e,n=!1){const s=n?Dy:e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let l=!1;if(!q(t)){const u=d=>{l=!0;const[h,p]=Tp(d,e,!0);Ne(o,h),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return me(t)&&s.set(t,_s),_s;if(j(i))for(let u=0;u<i.length;u++){const d=dt(i[u]);Hu(d)&&(o[d]=de)}else if(i)for(const u in i){const d=dt(u);if(Hu(d)){const h=i[u],p=o[d]=j(h)||q(h)?{type:h}:Ne({},h),m=p.type;let _=!1,b=!0;if(j(m))for(let A=0;A<m.length;++A){const R=m[A],O=q(R)&&R.name;if(O==="Boolean"){_=!0;break}else O==="String"&&(b=!1)}else _=q(m)&&m.name==="Boolean";p[0]=_,p[1]=b,(_||re(p,"default"))&&a.push(d)}}const c=[o,a];return me(t)&&s.set(t,c),c}function Hu(t){return t[0]!=="$"&&!br(t)}const Sp=t=>t[0]==="_"||t==="$stable",gc=t=>j(t)?t.map(Nt):[Nt(t)],xy=(t,e,n)=>{if(e._n)return e;const s=we((...r)=>gc(e(...r)),n);return s._c=!1,s},Ip=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Sp(r))continue;const i=t[r];if(q(i))e[r]=xy(r,i,s);else if(i!=null){const o=gc(i);e[r]=()=>o}}},Ap=(t,e)=>{const n=gc(e);t.slots.default=()=>n},Rp=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},Ly=(t,e,n)=>{const s=t.slots=wp();if(t.vnode.shapeFlag&32){const r=e._;r?(Rp(s,e,n),n&&$f(s,"_",r,!0)):Ip(e,s)}else e&&Ap(t,e)},My=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=de;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:Rp(r,e,n):(i=!e.$stable,Ip(e,r)),o=e}else e&&(Ap(t,e),o={default:1});if(i)for(const a in r)!Sp(a)&&o[a]==null&&delete r[a]},nt=Jy;function Fy(t){return Uy(t)}function Uy(t,e){const n=Lo();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:h,setScopeId:p=Dt,insertStaticContent:m}=t,_=(f,g,v,C=null,w=null,S=null,x=void 0,k=null,N=!!g.dynamicChildren)=>{if(f===g)return;f&&!rr(f,g)&&(C=E(f),ze(f,w,S,!0),f=null),g.patchFlag===-2&&(N=!1,g.dynamicChildren=null);const{type:I,ref:H,shapeFlag:M}=g;switch(I){case jo:b(f,g,v,C);break;case Qn:A(f,g,v,C);break;case Ui:f==null&&R(g,v,C,x);break;case gt:Fn(f,g,v,C,w,S,x,k,N);break;default:M&1?B(f,g,v,C,w,S,x,k,N):M&6?It(f,g,v,C,w,S,x,k,N):(M&64||M&128)&&I.process(f,g,v,C,w,S,x,k,N,U)}H!=null&&w&&il(H,f&&f.ref,S,g||f,!g)},b=(f,g,v,C)=>{if(f==null)s(g.el=a(g.children),v,C);else{const w=g.el=f.el;g.children!==f.children&&c(w,g.children)}},A=(f,g,v,C)=>{f==null?s(g.el=l(g.children||""),v,C):g.el=f.el},R=(f,g,v,C)=>{[f.el,f.anchor]=m(f.children,g,v,C,f.el,f.anchor)},O=({el:f,anchor:g},v,C)=>{let w;for(;f&&f!==g;)w=h(f),s(f,v,C),f=w;s(g,v,C)},D=({el:f,anchor:g})=>{let v;for(;f&&f!==g;)v=h(f),r(f),f=v;r(g)},B=(f,g,v,C,w,S,x,k,N)=>{g.type==="svg"?x="svg":g.type==="math"&&(x="mathml"),f==null?ee(g,v,C,w,S,x,k,N):je(f,g,w,S,x,k,N)},ee=(f,g,v,C,w,S,x,k)=>{let N,I;const{props:H,shapeFlag:M,transition:$,dirs:G}=f;if(N=f.el=o(f.type,S,H&&H.is,H),M&8?u(N,f.children):M&16&&ke(f.children,N,null,C,w,Ta(f,S),x,k),G&&Un(f,null,C,"created"),Q(N,f,f.scopeId,x,C),H){for(const fe in H)fe!=="value"&&!br(fe)&&i(N,fe,null,H[fe],S,C);"value"in H&&i(N,"value",null,H.value,S),(I=H.onVnodeBeforeMount)&&Pt(I,C,f)}G&&Un(f,null,C,"beforeMount");const X=$y(w,$);X&&$.beforeEnter(N),s(N,g,v),((I=H&&H.onVnodeMounted)||X||G)&&nt(()=>{I&&Pt(I,C,f),X&&$.enter(N),G&&Un(f,null,C,"mounted")},w)},Q=(f,g,v,C,w)=>{if(v&&p(f,v),C)for(let S=0;S<C.length;S++)p(f,C[S]);if(w){let S=w.subTree;if(g===S||xp(S.type)&&(S.ssContent===g||S.ssFallback===g)){const x=w.vnode;Q(f,x,x.scopeId,x.slotScopeIds,w.parent)}}},ke=(f,g,v,C,w,S,x,k,N=0)=>{for(let I=N;I<f.length;I++){const H=f[I]=k?gn(f[I]):Nt(f[I]);_(null,H,g,v,C,w,S,x,k)}},je=(f,g,v,C,w,S,x)=>{const k=g.el=f.el;let{patchFlag:N,dynamicChildren:I,dirs:H}=g;N|=f.patchFlag&16;const M=f.props||de,$=g.props||de;let G;if(v&&$n(v,!1),(G=$.onVnodeBeforeUpdate)&&Pt(G,v,g,f),H&&Un(g,f,v,"beforeUpdate"),v&&$n(v,!0),(M.innerHTML&&$.innerHTML==null||M.textContent&&$.textContent==null)&&u(k,""),I?lt(f.dynamicChildren,I,k,v,C,Ta(g,w),S):x||te(f,g,k,null,v,C,Ta(g,w),S,!1),N>0){if(N&16)cn(k,M,$,v,w);else if(N&2&&M.class!==$.class&&i(k,"class",null,$.class,w),N&4&&i(k,"style",M.style,$.style,w),N&8){const X=g.dynamicProps;for(let fe=0;fe<X.length;fe++){const oe=X[fe],Ze=M[oe],De=$[oe];(De!==Ze||oe==="value")&&i(k,oe,Ze,De,w,v)}}N&1&&f.children!==g.children&&u(k,g.children)}else!x&&I==null&&cn(k,M,$,v,w);((G=$.onVnodeUpdated)||H)&&nt(()=>{G&&Pt(G,v,g,f),H&&Un(g,f,v,"updated")},C)},lt=(f,g,v,C,w,S,x)=>{for(let k=0;k<g.length;k++){const N=f[k],I=g[k],H=N.el&&(N.type===gt||!rr(N,I)||N.shapeFlag&70)?d(N.el):v;_(N,I,H,null,C,w,S,x,!0)}},cn=(f,g,v,C,w)=>{if(g!==v){if(g!==de)for(const S in g)!br(S)&&!(S in v)&&i(f,S,g[S],null,w,C);for(const S in v){if(br(S))continue;const x=v[S],k=g[S];x!==k&&S!=="value"&&i(f,S,k,x,w,C)}"value"in v&&i(f,"value",g.value,v.value,w)}},Fn=(f,g,v,C,w,S,x,k,N)=>{const I=g.el=f?f.el:a(""),H=g.anchor=f?f.anchor:a("");let{patchFlag:M,dynamicChildren:$,slotScopeIds:G}=g;G&&(k=k?k.concat(G):G),f==null?(s(I,v,C),s(H,v,C),ke(g.children||[],v,H,w,S,x,k,N)):M>0&&M&64&&$&&f.dynamicChildren?(lt(f.dynamicChildren,$,v,w,S,x,k),(g.key!=null||w&&g===w.subTree)&&Pp(f,g,!0)):te(f,g,v,H,w,S,x,k,N)},It=(f,g,v,C,w,S,x,k,N)=>{g.slotScopeIds=k,f==null?g.shapeFlag&512?w.ctx.activate(g,v,C,x,N):tr(g,v,C,w,S,x,N):ls(f,g,N)},tr=(f,g,v,C,w,S,x)=>{const k=f.component=sb(f,C,w);if(gp(f)&&(k.ctx.renderer=U),rb(k,!1,x),k.asyncDep){if(w&&w.registerDep(k,Ae,x),!f.el){const N=k.subTree=le(Qn);A(null,N,g,v)}}else Ae(k,f,g,v,w,S,x)},ls=(f,g,v)=>{const C=g.component=f.component;if(Ky(f,g,v))if(C.asyncDep&&!C.asyncResolved){ce(C,g,v);return}else C.next=g,C.update();else g.el=f.el,C.vnode=g},Ae=(f,g,v,C,w,S,x)=>{const k=()=>{if(f.isMounted){let{next:M,bu:$,u:G,parent:X,vnode:fe}=f;{const et=Op(f);if(et){M&&(M.el=fe.el,ce(f,M,x)),et.asyncDep.then(()=>{f.isUnmounted||k()});return}}let oe=M,Ze;$n(f,!1),M?(M.el=fe.el,ce(f,M,x)):M=fe,$&&Li($),(Ze=M.props&&M.props.onVnodeBeforeUpdate)&&Pt(Ze,X,M,fe),$n(f,!0);const De=Sa(f),ht=f.subTree;f.subTree=De,_(ht,De,d(ht.el),E(ht),f,w,S),M.el=De.el,oe===null&&Yy(f,De.el),G&&nt(G,w),(Ze=M.props&&M.props.onVnodeUpdated)&&nt(()=>Pt(Ze,X,M,fe),w)}else{let M;const{el:$,props:G}=g,{bm:X,m:fe,parent:oe,root:Ze,type:De}=f,ht=Cr(g);if($n(f,!1),X&&Li(X),!ht&&(M=G&&G.onVnodeBeforeMount)&&Pt(M,oe,g),$n(f,!0),$&&be){const et=()=>{f.subTree=Sa(f),be($,f.subTree,f,w,null)};ht&&De.__asyncHydrate?De.__asyncHydrate($,f,et):et()}else{Ze.ce&&Ze.ce._injectChildStyle(De);const et=f.subTree=Sa(f);_(null,et,v,C,f,w,S),g.el=et.el}if(fe&&nt(fe,w),!ht&&(M=G&&G.onVnodeMounted)){const et=g;nt(()=>Pt(M,oe,et),w)}(g.shapeFlag&256||oe&&Cr(oe.vnode)&&oe.vnode.shapeFlag&256)&&f.a&&nt(f.a,w),f.isMounted=!0,g=v=C=null}};f.scope.on();const N=f.effect=new Wf(k);f.scope.off();const I=f.update=N.run.bind(N),H=f.job=N.runIfDirty.bind(N);H.i=f,H.id=f.uid,N.scheduler=()=>dc(H),$n(f,!0),I()},ce=(f,g,v)=>{g.component=f;const C=f.vnode.props;f.vnode=g,f.next=null,ky(f,g.props,C,v),My(f,g.children,v),kn(),Mu(f),Dn()},te=(f,g,v,C,w,S,x,k,N=!1)=>{const I=f&&f.children,H=f?f.shapeFlag:0,M=g.children,{patchFlag:$,shapeFlag:G}=g;if($>0){if($&128){un(I,M,v,C,w,S,x,k,N);return}else if($&256){$t(I,M,v,C,w,S,x,k,N);return}}G&8?(H&16&&ct(I,w,S),M!==I&&u(v,M)):H&16?G&16?un(I,M,v,C,w,S,x,k,N):ct(I,w,S,!0):(H&8&&u(v,""),G&16&&ke(M,v,C,w,S,x,k,N))},$t=(f,g,v,C,w,S,x,k,N)=>{f=f||_s,g=g||_s;const I=f.length,H=g.length,M=Math.min(I,H);let $;for($=0;$<M;$++){const G=g[$]=N?gn(g[$]):Nt(g[$]);_(f[$],G,v,null,w,S,x,k,N)}I>H?ct(f,w,S,!0,!1,M):ke(g,v,C,w,S,x,k,N,M)},un=(f,g,v,C,w,S,x,k,N)=>{let I=0;const H=g.length;let M=f.length-1,$=H-1;for(;I<=M&&I<=$;){const G=f[I],X=g[I]=N?gn(g[I]):Nt(g[I]);if(rr(G,X))_(G,X,v,null,w,S,x,k,N);else break;I++}for(;I<=M&&I<=$;){const G=f[M],X=g[$]=N?gn(g[$]):Nt(g[$]);if(rr(G,X))_(G,X,v,null,w,S,x,k,N);else break;M--,$--}if(I>M){if(I<=$){const G=$+1,X=G<H?g[G].el:C;for(;I<=$;)_(null,g[I]=N?gn(g[I]):Nt(g[I]),v,X,w,S,x,k,N),I++}}else if(I>$)for(;I<=M;)ze(f[I],w,S,!0),I++;else{const G=I,X=I,fe=new Map;for(I=X;I<=$;I++){const tt=g[I]=N?gn(g[I]):Nt(g[I]);tt.key!=null&&fe.set(tt.key,I)}let oe,Ze=0;const De=$-X+1;let ht=!1,et=0;const nr=new Array(De);for(I=0;I<De;I++)nr[I]=0;for(I=G;I<=M;I++){const tt=f[I];if(Ze>=De){ze(tt,w,S,!0);continue}let Rt;if(tt.key!=null)Rt=fe.get(tt.key);else for(oe=X;oe<=$;oe++)if(nr[oe-X]===0&&rr(tt,g[oe])){Rt=oe;break}Rt===void 0?ze(tt,w,S,!0):(nr[Rt-X]=I+1,Rt>=et?et=Rt:ht=!0,_(tt,g[Rt],v,null,w,S,x,k,N),Ze++)}const Ou=ht?By(nr):_s;for(oe=Ou.length-1,I=De-1;I>=0;I--){const tt=X+I,Rt=g[tt],Nu=tt+1<H?g[tt+1].el:C;nr[I]===0?_(null,Rt,v,Nu,w,S,x,k,N):ht&&(oe<0||I!==Ou[oe]?At(Rt,v,Nu,2):oe--)}}},At=(f,g,v,C,w=null)=>{const{el:S,type:x,transition:k,children:N,shapeFlag:I}=f;if(I&6){At(f.component.subTree,g,v,C);return}if(I&128){f.suspense.move(g,v,C);return}if(I&64){x.move(f,g,v,U);return}if(x===gt){s(S,g,v);for(let M=0;M<N.length;M++)At(N[M],g,v,C);s(f.anchor,g,v);return}if(x===Ui){O(f,g,v);return}if(C!==2&&I&1&&k)if(C===0)k.beforeEnter(S),s(S,g,v),nt(()=>k.enter(S),w);else{const{leave:M,delayLeave:$,afterLeave:G}=k,X=()=>s(S,g,v),fe=()=>{M(S,()=>{X(),G&&G()})};$?$(S,X,fe):fe()}else s(S,g,v)},ze=(f,g,v,C=!1,w=!1)=>{const{type:S,props:x,ref:k,children:N,dynamicChildren:I,shapeFlag:H,patchFlag:M,dirs:$,cacheIndex:G}=f;if(M===-2&&(w=!1),k!=null&&il(k,null,v,f,!0),G!=null&&(g.renderCache[G]=void 0),H&256){g.ctx.deactivate(f);return}const X=H&1&&$,fe=!Cr(f);let oe;if(fe&&(oe=x&&x.onVnodeBeforeUnmount)&&Pt(oe,g,f),H&6)Ii(f.component,v,C);else{if(H&128){f.suspense.unmount(v,C);return}X&&Un(f,null,g,"beforeUnmount"),H&64?f.type.remove(f,g,v,U,C):I&&!I.hasOnce&&(S!==gt||M>0&&M&64)?ct(I,g,v,!1,!0):(S===gt&&M&384||!w&&H&16)&&ct(N,g,v),C&&cs(f)}(fe&&(oe=x&&x.onVnodeUnmounted)||X)&&nt(()=>{oe&&Pt(oe,g,f),X&&Un(f,null,g,"unmounted")},v)},cs=f=>{const{type:g,el:v,anchor:C,transition:w}=f;if(g===gt){us(v,C);return}if(g===Ui){D(f);return}const S=()=>{r(v),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(f.shapeFlag&1&&w&&!w.persisted){const{leave:x,delayLeave:k}=w,N=()=>x(v,S);k?k(f.el,S,N):N()}else S()},us=(f,g)=>{let v;for(;f!==g;)v=h(f),r(f),f=v;r(g)},Ii=(f,g,v)=>{const{bum:C,scope:w,job:S,subTree:x,um:k,m:N,a:I}=f;Vu(N),Vu(I),C&&Li(C),w.stop(),S&&(S.flags|=8,ze(x,f,g,v)),k&&nt(k,g),nt(()=>{f.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},ct=(f,g,v,C=!1,w=!1,S=0)=>{for(let x=S;x<f.length;x++)ze(f[x],g,v,C,w)},E=f=>{if(f.shapeFlag&6)return E(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const g=h(f.anchor||f.el),v=g&&g[oy];return v?h(v):g};let F=!1;const L=(f,g,v)=>{f==null?g._vnode&&ze(g._vnode,null,null,!0):_(g._vnode||null,f,g,null,null,null,v),g._vnode=f,F||(F=!0,Mu(),dp(),F=!1)},U={p:_,um:ze,m:At,r:cs,mt:tr,mc:ke,pc:te,pbc:lt,n:E,o:t};let ie,be;return{render:L,hydrate:ie,createApp:Oy(L,ie)}}function Ta({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function $n({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function $y(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Pp(t,e,n=!1){const s=t.children,r=e.children;if(j(s)&&j(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=gn(r[i]),a.el=o.el),!n&&a.patchFlag!==-2&&Pp(o,a)),a.type===jo&&(a.el=o.el)}}function By(t){const e=t.slice(),n=[0];let s,r,i,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(r=n[n.length-1],t[r]<c){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Op(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Op(e)}function Vu(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const jy=Symbol.for("v-scx"),Hy=()=>wt(jy);function Sr(t,e,n){return Np(t,e,n)}function Np(t,e,n=de){const{immediate:s,deep:r,flush:i,once:o}=n,a=Ne({},n),l=e&&s||!e&&i!=="post";let c;if(Br){if(i==="sync"){const p=Hy();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Dt,p.resume=Dt,p.pause=Dt,p}}const u=Ue;a.call=(p,m,_)=>Ft(p,u,m,_);let d=!1;i==="post"?a.scheduler=p=>{nt(p,u&&u.suspense)}:i!=="sync"&&(d=!0,a.scheduler=(p,m)=>{m?p():dc(p)}),a.augmentJob=p=>{e&&(p.flags|=4),d&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const h=ny(t,e,a);return Br&&(c?c.push(h):l&&h()),h}function Vy(t,e,n){const s=this.proxy,r=Te(t)?t.includes(".")?kp(s,t):()=>s[t]:t.bind(s,s);let i;q(e)?i=e:(i=e.handler,n=e);const o=ci(this),a=Np(r,i.bind(s),n);return o(),a}function kp(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const Wy=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${dt(e)}Modifiers`]||t[`${Nn(e)}Modifiers`];function qy(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||de;let r=n;const i=e.startsWith("update:"),o=i&&Wy(s,e.slice(7));o&&(o.trim&&(r=n.map(u=>Te(u)?u.trim():u)),o.number&&(r=n.map(Ki)));let a,l=s[a=va(e)]||s[a=va(dt(e))];!l&&i&&(l=s[a=va(Nn(e))]),l&&Ft(l,t,6,r);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ft(c,t,6,r)}}function Dp(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!q(t)){const l=c=>{const u=Dp(c,e,!0);u&&(a=!0,Ne(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(me(t)&&s.set(t,null),null):(j(i)?i.forEach(l=>o[l]=null):Ne(o,i),me(t)&&s.set(t,o),o)}function Bo(t,e){return!t||!ko(e)?!1:(e=e.slice(2).replace(/Once$/,""),re(t,e[0].toLowerCase()+e.slice(1))||re(t,Nn(e))||re(t,e))}function Sa(t){const{type:e,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:d,data:h,setupState:p,ctx:m,inheritAttrs:_}=t,b=Qi(t);let A,R;try{if(n.shapeFlag&4){const D=r||s,B=D;A=Nt(c.call(B,D,u,d,p,h,m)),R=a}else{const D=e;A=Nt(D.length>1?D(d,{attrs:a,slots:o,emit:l}):D(d,null)),R=e.props?a:Gy(a)}}catch(D){Ir.length=0,Uo(D,t,1),A=le(Qn)}let O=A;if(R&&_!==!1){const D=Object.keys(R),{shapeFlag:B}=O;D.length&&B&7&&(i&&D.some(Zl)&&(R=zy(R,i)),O=Rs(O,R,!1,!0))}return n.dirs&&(O=Rs(O,null,!1,!0),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&hc(O,n.transition),A=O,Qi(b),A}const Gy=t=>{let e;for(const n in t)(n==="class"||n==="style"||ko(n))&&((e||(e={}))[n]=t[n]);return e},zy=(t,e)=>{const n={};for(const s in t)(!Zl(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Ky(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Wu(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(o[h]!==s[h]&&!Bo(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Wu(s,o,c):!0:!!o;return!1}function Wu(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Bo(n,i))return!0}return!1}function Yy({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const xp=t=>t.__isSuspense;function Jy(t,e){e&&e.pendingBranch?j(t)?e.effects.push(...t):e.effects.push(t):iy(t)}const gt=Symbol.for("v-fgt"),jo=Symbol.for("v-txt"),Qn=Symbol.for("v-cmt"),Ui=Symbol.for("v-stc"),Ir=[];let it=null;function ye(t=!1){Ir.push(it=t?null:[])}function Qy(){Ir.pop(),it=Ir[Ir.length-1]||null}let $r=1;function qu(t){$r+=t,t<0&&it&&(it.hasOnce=!0)}function Lp(t){return t.dynamicChildren=$r>0?it||_s:null,Qy(),$r>0&&it&&it.push(t),t}function Ve(t,e,n,s,r,i){return Lp(T(t,e,n,s,r,i,!0))}function Ht(t,e,n,s,r){return Lp(le(t,e,n,s,r,!0))}function Zi(t){return t?t.__v_isVNode===!0:!1}function rr(t,e){return t.type===e.type&&t.key===e.key}const Mp=({key:t})=>t??null,$i=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Te(t)||$e(t)||q(t)?{i:rt,r:t,k:e,f:!!n}:t:null);function T(t,e=null,n=null,s=0,r=null,i=t===gt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Mp(e),ref:e&&$i(e),scopeId:fp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:rt};return a?(mc(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Te(n)?8:16),$r>0&&!o&&it&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&it.push(l),l}const le=Xy;function Xy(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===by)&&(t=Qn),Zi(t)){const a=Rs(t,e,!0);return n&&mc(a,n),$r>0&&!i&&it&&(a.shapeFlag&6?it[it.indexOf(t)]=a:it.push(a)),a.patchFlag=-2,a}if(cb(t)&&(t=t.__vccOpts),e){e=Zy(e);let{class:a,style:l}=e;a&&!Te(a)&&(e.class=Yn(a)),me(l)&&(uc(l)&&!j(l)&&(l=Ne({},l)),e.style=nc(l))}const o=Te(t)?1:xp(t)?128:ay(t)?64:me(t)?4:q(t)?2:0;return T(t,e,n,s,r,o,i,!0)}function Zy(t){return t?uc(t)||Ep(t)?Ne({},t):t:null}function Rs(t,e,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:a,transition:l}=t,c=e?eb(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Mp(c),ref:e&&e.ref?n&&i?j(i)?i.concat($i(e)):[i,$i(e)]:$i(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==gt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Rs(t.ssContent),ssFallback:t.ssFallback&&Rs(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&s&&hc(u,l.clone(u)),u}function ne(t=" ",e=0){return le(jo,null,t,e)}function Ia(t,e){const n=le(Ui,null,t);return n.staticCount=e,n}function ft(t="",e=!1){return e?(ye(),Ht(Qn,null,t)):le(Qn,null,t)}function Nt(t){return t==null||typeof t=="boolean"?le(Qn):j(t)?le(gt,null,t.slice()):Zi(t)?gn(t):le(jo,null,String(t))}function gn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Rs(t)}function mc(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(j(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),mc(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!Ep(e)?e._ctx=rt:r===3&&rt&&(rt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else q(e)?(e={default:e,_ctx:rt},n=32):(e=String(e),s&64?(n=16,e=[ne(e)]):n=8);t.children=e,t.shapeFlag|=n}function eb(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Yn([e.class,s.class]));else if(r==="style")e.style=nc([e.style,s.style]);else if(ko(r)){const i=e[r],o=s[r];o&&i!==o&&!(j(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Pt(t,e,n,s=null){Ft(t,e,7,[n,s])}const tb=yp();let nb=0;function sb(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||tb,i={uid:nb++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Vf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Tp(s,r),emitsOptions:Dp(s,r),emit:null,emitted:null,propsDefaults:de,inheritAttrs:s.inheritAttrs,ctx:de,data:de,props:de,attrs:de,slots:de,refs:de,setupState:de,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=qy.bind(null,i),t.ce&&t.ce(i),i}let Ue=null,eo,ul;{const t=Lo(),e=(n,s)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};eo=e("__VUE_INSTANCE_SETTERS__",n=>Ue=n),ul=e("__VUE_SSR_SETTERS__",n=>Br=n)}const ci=t=>{const e=Ue;return eo(t),t.scope.on(),()=>{t.scope.off(),eo(e)}},Gu=()=>{Ue&&Ue.scope.off(),eo(null)};function Fp(t){return t.vnode.shapeFlag&4}let Br=!1;function rb(t,e=!1,n=!1){e&&ul(e);const{props:s,children:r}=t.vnode,i=Fp(t);Ny(t,s,i,e),Ly(t,r,n);const o=i?ib(t,e):void 0;return e&&ul(!1),o}function ib(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Cy);const{setup:s}=n;if(s){kn();const r=t.setupContext=s.length>1?ab(t):null,i=ci(t),o=ai(s,t,0,[t.props,r]),a=Ff(o);if(Dn(),i(),(a||t.sp)&&!Cr(t)&&pp(t),a){if(o.then(Gu,Gu),e)return o.then(l=>{zu(t,l,e)}).catch(l=>{Uo(l,t,0)});t.asyncDep=o}else zu(t,o,e)}else Up(t,e)}function zu(t,e,n){q(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:me(e)&&(t.setupState=lp(e)),Up(t,n)}let Ku;function Up(t,e,n){const s=t.type;if(!t.render){if(!e&&Ku&&!s.render){const r=s.template||pc(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Ne(Ne({isCustomElement:i,delimiters:a},o),l);s.render=Ku(r,c)}}t.render=s.render||Dt}{const r=ci(t);kn();try{Ty(t)}finally{Dn(),r()}}}const ob={get(t,e){return Le(t,"get",""),t[e]}};function ab(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,ob),slots:t.slots,emit:t.emit,expose:e}}function Ho(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(lp(op(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Tr)return Tr[n](t)},has(e,n){return n in e||n in Tr}})):t.proxy}function lb(t,e=!0){return q(t)?t.displayName||t.name:t.name||e&&t.__name}function cb(t){return q(t)&&"__vccOpts"in t}const mt=(t,e)=>ey(t,e,Br);function $p(t,e,n){const s=arguments.length;return s===2?me(e)&&!j(e)?Zi(e)?le(t,null,[e]):le(t,e):le(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Zi(n)&&(n=[n]),le(t,e,n))}const ub="3.5.12";/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let dl;const Yu=typeof window<"u"&&window.trustedTypes;if(Yu)try{dl=Yu.createPolicy("vue",{createHTML:t=>t})}catch{}const Bp=dl?t=>dl.createHTML(t):t=>t,db="http://www.w3.org/2000/svg",hb="http://www.w3.org/1998/Math/MathML",Vt=typeof document<"u"?document:null,Ju=Vt&&Vt.createElement("template"),fb={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e==="svg"?Vt.createElementNS(db,t):e==="mathml"?Vt.createElementNS(hb,t):n?Vt.createElement(t,{is:n}):Vt.createElement(t);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Vt.createTextNode(t),createComment:t=>Vt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Vt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Ju.innerHTML=Bp(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const a=Ju.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},pb=Symbol("_vtc");function gb(t,e,n){const s=t[pb];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const to=Symbol("_vod"),jp=Symbol("_vsh"),RU={beforeMount(t,{value:e},{transition:n}){t[to]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):ir(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),ir(t,!0),s.enter(t)):s.leave(t,()=>{ir(t,!1)}):ir(t,e))},beforeUnmount(t,{value:e}){ir(t,e)}};function ir(t,e){t.style.display=e?t[to]:"none",t[jp]=!e}const mb=Symbol(""),_b=/(^|;)\s*display\s*:/;function vb(t,e,n){const s=t.style,r=Te(n);let i=!1;if(n&&!r){if(e)if(Te(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Bi(s,a,"")}else for(const o in e)n[o]==null&&Bi(s,o,"");for(const o in n)o==="display"&&(i=!0),Bi(s,o,n[o])}else if(r){if(e!==n){const o=s[mb];o&&(n+=";"+o),s.cssText=n,i=_b.test(n)}}else e&&t.removeAttribute("style");to in t&&(t[to]=i?s.display:"",t[jp]&&(s.display="none"))}const Qu=/\s*!important$/;function Bi(t,e,n){if(j(n))n.forEach(s=>Bi(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=yb(t,e);Qu.test(n)?t.setProperty(Nn(s),n.replace(Qu,""),"important"):t[s]=n}}const Xu=["Webkit","Moz","ms"],Aa={};function yb(t,e){const n=Aa[e];if(n)return n;let s=dt(e);if(s!=="filter"&&s in t)return Aa[e]=s;s=xo(s);for(let r=0;r<Xu.length;r++){const i=Xu[r]+s;if(i in t)return Aa[e]=i}return e}const Zu="http://www.w3.org/1999/xlink";function ed(t,e,n,s,r,i=Rv(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Zu,e.slice(6,e.length)):t.setAttributeNS(Zu,e,n):n==null||i&&!Bf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Mt(n)?String(n):n)}function td(t,e,n,s,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Bp(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Bf(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function _n(t,e,n,s){t.addEventListener(e,n,s)}function bb(t,e,n,s){t.removeEventListener(e,n,s)}const nd=Symbol("_vei");function wb(t,e,n,s,r=null){const i=t[nd]||(t[nd]={}),o=i[e];if(s&&o)o.value=s;else{const[a,l]=Eb(e);if(s){const c=i[e]=Sb(s,r);_n(t,a,c,l)}else o&&(bb(t,a,o,l),i[e]=void 0)}}const sd=/(?:Once|Passive|Capture)$/;function Eb(t){let e;if(sd.test(t)){e={};let s;for(;s=t.match(sd);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Nn(t.slice(2)),e]}let Ra=0;const Cb=Promise.resolve(),Tb=()=>Ra||(Cb.then(()=>Ra=0),Ra=Date.now());function Sb(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Ft(Ib(s,n.value),e,5,[s])};return n.value=t,n.attached=Tb(),n}function Ib(t,e){if(j(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const rd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Ab=(t,e,n,s,r,i)=>{const o=r==="svg";e==="class"?gb(t,s,o):e==="style"?vb(t,n,s):ko(e)?Zl(e)||wb(t,e,n,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Rb(t,e,s,o))?(td(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&ed(t,e,s,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Te(s))?td(t,dt(e),s,i,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),ed(t,e,s,o))};function Rb(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&rd(e)&&q(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return rd(e)&&Te(n)?!1:e in t}const Ps=t=>{const e=t.props["onUpdate:modelValue"]||!1;return j(e)?n=>Li(e,n):e};function Pb(t){t.target.composing=!0}function id(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Jt=Symbol("_assign"),hl={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t[Jt]=Ps(r);const i=s||r.props&&r.props.type==="number";_n(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Ki(a)),t[Jt](a)}),n&&_n(t,"change",()=>{t.value=t.value.trim()}),e||(_n(t,"compositionstart",Pb),_n(t,"compositionend",id),_n(t,"change",id))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:r,number:i}},o){if(t[Jt]=Ps(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?Ki(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||r&&t.value.trim()===l)||(t.value=l))}},Ob={deep:!0,created(t,e,n){t[Jt]=Ps(n),_n(t,"change",()=>{const s=t._modelValue,r=jr(t),i=t.checked,o=t[Jt];if(j(s)){const a=sc(s,r),l=a!==-1;if(i&&!l)o(s.concat(r));else if(!i&&l){const c=[...s];c.splice(a,1),o(c)}}else if(Fs(s)){const a=new Set(s);i?a.add(r):a.delete(r),o(a)}else o(Hp(t,i))})},mounted:od,beforeUpdate(t,e,n){t[Jt]=Ps(n),od(t,e,n)}};function od(t,{value:e,oldValue:n},s){t._modelValue=e;let r;if(j(e))r=sc(e,s.props.value)>-1;else if(Fs(e))r=e.has(s.props.value);else{if(e===n)return;r=oi(e,Hp(t,!0))}t.checked!==r&&(t.checked=r)}const PU={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=Fs(e);_n(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Ki(jr(o)):jr(o));t[Jt](t.multiple?r?new Set(i):i:i[0]),t._assigning=!0,Fr(()=>{t._assigning=!1})}),t[Jt]=Ps(s)},mounted(t,{value:e}){ad(t,e)},beforeUpdate(t,e,n){t[Jt]=Ps(n)},updated(t,{value:e}){t._assigning||ad(t,e)}};function ad(t,e){const n=t.multiple,s=j(e);if(!(n&&!s&&!Fs(e))){for(let r=0,i=t.options.length;r<i;r++){const o=t.options[r],a=jr(o);if(n)if(s){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=sc(e,a)>-1}else o.selected=e.has(a);else if(oi(jr(o),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function jr(t){return"_value"in t?t._value:t.value}function Hp(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Nb=["ctrl","shift","alt","meta"],kb={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Nb.some(n=>t[`${n}Key`]&&!e.includes(n))},or=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(r,...i)=>{for(let o=0;o<e.length;o++){const a=kb[e[o]];if(a&&a(r,e))return}return t(r,...i)})},Db={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},xb=(t,e)=>{const n=t._withKeys||(t._withKeys={}),s=e.join(".");return n[s]||(n[s]=r=>{if(!("key"in r))return;const i=Nn(r.key);if(e.some(o=>o===i||Db[o]===i))return t(r)})},Lb=Ne({patchProp:Ab},fb);let ld;function Mb(){return ld||(ld=Fy(Lb))}const Fb=(...t)=>{const e=Mb().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=$b(s);if(!r)return;const i=e._component;!q(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,Ub(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Ub(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function $b(t){return Te(t)?document.querySelector(t):t}var Bb=!1;/*!
 * pinia v2.2.4
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */const jb=Symbol();var cd;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(cd||(cd={}));function Hb(){const t=Ov(!0),e=t.run(()=>pt({}));let n=[],s=[];const r=op({install(i){r._a=i,i.provide(jb,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return!this._a&&!Bb?s.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}var ud={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vp={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P=function(t,e){if(!t)throw Us(e)},Us=function(t){return new Error("Firebase Database ("+Vp.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wp=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Vb=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},_c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,u=i>>2,d=(i&3)<<4|a>>4;let h=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(h=64)),s.push(n[u],n[d],n[h],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Wp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Vb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const d=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||c==null||d==null)throw new Wb;const h=i<<2|a>>4;if(s.push(h),c!==64){const p=a<<4&240|c>>2;if(s.push(p),d!==64){const m=c<<6&192|d;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Wb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const qp=function(t){const e=Wp(t);return _c.encodeByteArray(e,!0)},no=function(t){return qp(t).replace(/\./g,"")},so=function(t){try{return _c.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qb(t){return Gp(void 0,t)}function Gp(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Gb(n)||(t[n]=Gp(t[n],e[n]));return t}function Gb(t){return t!=="__proto__"}/**
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
 */function zb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Kb=()=>zb().__FIREBASE_DEFAULTS__,Yb=()=>{if(typeof process>"u"||typeof ud>"u")return;const t=ud.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Jb=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&so(t[1]);return e&&JSON.parse(e)},vc=()=>{try{return Kb()||Yb()||Jb()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},zp=t=>{var e,n;return(n=(e=vc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Qb=t=>{const e=zp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Kp=()=>{var t;return(t=vc())===null||t===void 0?void 0:t.config},Yp=t=>{var e;return(e=vc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Xb(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[no(JSON.stringify(n)),no(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function yc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ge())}function Zb(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ew(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Jp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function tw(){const t=Ge();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Qp(){return Vp.NODE_ADMIN===!0}function nw(){try{return typeof indexedDB=="object"}catch{return!1}}function sw(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rw="FirebaseError";class xn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=rw,Object.setPrototypeOf(this,xn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ui.prototype.create)}}class ui{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?iw(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new xn(r,a,s)}}function iw(t,e){return t.replace(ow,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const ow=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hr(t){return JSON.parse(t)}function Se(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xp=function(t){let e={},n={},s={},r="";try{const i=t.split(".");e=Hr(so(i[0])||""),n=Hr(so(i[1])||""),r=i[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:r}},aw=function(t){const e=Xp(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},lw=function(t){const e=Xp(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Os(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function fl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ro(t,e,n){const s={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(s[r]=e.call(n,t[r],r,t));return s}function io(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(dd(i)&&dd(o)){if(!io(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function dd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $s(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function _r(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function vr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)s[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)s[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=s[d-3]^s[d-8]^s[d-14]^s[d-16];s[d]=(h<<1|h>>>31)&4294967295}let r=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^i&(o^a),u=1518500249):(c=i^o^a,u=1859775393):d<60?(c=i&o|a&(i|o),u=2400959708):(c=i^o^a,u=3395469782);const h=(r<<5|r>>>27)+c+l+u+s[d]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=r,r=h}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let r=0;const i=this.buf_;let o=this.inbuf_;for(;r<n;){if(o===0)for(;r<=s;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<n;)if(i[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else for(;r<n;)if(i[o]=e[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let r=0;r<5;r++)for(let i=24;i>=0;i-=8)e[s]=this.chain_[r]>>i&255,++s;return e}}function uw(t,e){const n=new dw(t,e);return n.subscribe.bind(n)}class dw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");hw(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Pa),r.error===void 0&&(r.error=Pa),r.complete===void 0&&(r.complete=Pa);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function hw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Pa(){}function bc(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fw=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);if(r>=55296&&r<=56319){const i=r-55296;s++,P(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;r=65536+(i<<10)+o}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Wo=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Be(t){return t&&t._delegate?t._delegate:t}class Xn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const jn="[DEFAULT]";/**
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
 */class pw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Vo;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(mw(e))try{this.getOrInitializeService({instanceIdentifier:jn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=jn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=jn){return this.instances.has(e)}getOptions(e=jn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:gw(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=jn){return this.component?this.component.multipleInstances?e:jn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gw(t){return t===jn?void 0:t}function mw(t){return t.instantiationMode==="EAGER"}/**
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
 */class _w{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new pw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const vw={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},yw=ue.INFO,bw={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},ww=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=bw[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wc{constructor(e){this.name=e,this._logLevel=yw,this._logHandler=ww,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const Ew=(t,e)=>e.some(n=>t instanceof n);let hd,fd;function Cw(){return hd||(hd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Tw(){return fd||(fd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Zp=new WeakMap,pl=new WeakMap,eg=new WeakMap,Oa=new WeakMap,Ec=new WeakMap;function Sw(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Cn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Zp.set(n,t)}).catch(()=>{}),Ec.set(e,t),e}function Iw(t){if(pl.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});pl.set(t,e)}let gl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return pl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||eg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Cn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Aw(t){gl=t(gl)}function Rw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Na(this),e,...n);return eg.set(s,e.sort?e.sort():[e]),Cn(s)}:Tw().includes(t)?function(...e){return t.apply(Na(this),e),Cn(Zp.get(this))}:function(...e){return Cn(t.apply(Na(this),e))}}function Pw(t){return typeof t=="function"?Rw(t):(t instanceof IDBTransaction&&Iw(t),Ew(t,Cw())?new Proxy(t,gl):t)}function Cn(t){if(t instanceof IDBRequest)return Sw(t);if(Oa.has(t))return Oa.get(t);const e=Pw(t);return e!==t&&(Oa.set(t,e),Ec.set(e,t)),e}const Na=t=>Ec.get(t);function Ow(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Cn(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Cn(o.result),l.oldVersion,l.newVersion,Cn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),r&&l.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Nw=["get","getKey","getAll","getAllKeys","count"],kw=["put","add","delete","clear"],ka=new Map;function pd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ka.get(e))return ka.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=kw.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Nw.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return ka.set(e,i),i}Aw(t=>({...t,get:(e,n,s)=>pd(e,n)||t.get(e,n,s),has:(e,n)=>!!pd(e,n)||t.has(e,n)}));/**
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
 */class Dw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(xw(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function xw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ml="@firebase/app",gd="0.10.15";/**
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
 */const Zt=new wc("@firebase/app"),Lw="@firebase/app-compat",Mw="@firebase/analytics-compat",Fw="@firebase/analytics",Uw="@firebase/app-check-compat",$w="@firebase/app-check",Bw="@firebase/auth",jw="@firebase/auth-compat",Hw="@firebase/database",Vw="@firebase/data-connect",Ww="@firebase/database-compat",qw="@firebase/functions",Gw="@firebase/functions-compat",zw="@firebase/installations",Kw="@firebase/installations-compat",Yw="@firebase/messaging",Jw="@firebase/messaging-compat",Qw="@firebase/performance",Xw="@firebase/performance-compat",Zw="@firebase/remote-config",eE="@firebase/remote-config-compat",tE="@firebase/storage",nE="@firebase/storage-compat",sE="@firebase/firestore",rE="@firebase/vertexai",iE="@firebase/firestore-compat",oE="firebase",aE="11.0.1";/**
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
 */const _l="[DEFAULT]",lE={[ml]:"fire-core",[Lw]:"fire-core-compat",[Fw]:"fire-analytics",[Mw]:"fire-analytics-compat",[$w]:"fire-app-check",[Uw]:"fire-app-check-compat",[Bw]:"fire-auth",[jw]:"fire-auth-compat",[Hw]:"fire-rtdb",[Vw]:"fire-data-connect",[Ww]:"fire-rtdb-compat",[qw]:"fire-fn",[Gw]:"fire-fn-compat",[zw]:"fire-iid",[Kw]:"fire-iid-compat",[Yw]:"fire-fcm",[Jw]:"fire-fcm-compat",[Qw]:"fire-perf",[Xw]:"fire-perf-compat",[Zw]:"fire-rc",[eE]:"fire-rc-compat",[tE]:"fire-gcs",[nE]:"fire-gcs-compat",[sE]:"fire-fst",[iE]:"fire-fst-compat",[rE]:"fire-vertex","fire-js":"fire-js",[oE]:"fire-js-all"};/**
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
 */const oo=new Map,cE=new Map,vl=new Map;function md(t,e){try{t.container.addComponent(e)}catch(n){Zt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ns(t){const e=t.name;if(vl.has(e))return Zt.debug(`There were multiple attempts to register component ${e}.`),!1;vl.set(e,t);for(const n of oo.values())md(n,t);for(const n of cE.values())md(n,t);return!0}function Cc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function kt(t){return t.settings!==void 0}/**
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
 */const uE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Tn=new ui("app","Firebase",uE);/**
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
 */class dE{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Xn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Tn.create("app-deleted",{appName:this._name})}}/**
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
 */const Bs=aE;function tg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:_l,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Tn.create("bad-app-name",{appName:String(r)});if(n||(n=Kp()),!n)throw Tn.create("no-options");const i=oo.get(r);if(i){if(io(n,i.options)&&io(s,i.config))return i;throw Tn.create("duplicate-app",{appName:r})}const o=new _w(r);for(const l of vl.values())o.addComponent(l);const a=new dE(n,s,o);return oo.set(r,a),a}function ng(t=_l){const e=oo.get(t);if(!e&&t===_l&&Kp())return tg();if(!e)throw Tn.create("no-app",{appName:t});return e}function Sn(t,e,n){var s;let r=(s=lE[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Zt.warn(a.join(" "));return}Ns(new Xn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const hE="firebase-heartbeat-database",fE=1,Vr="firebase-heartbeat-store";let Da=null;function sg(){return Da||(Da=Ow(hE,fE,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Vr)}catch(n){console.warn(n)}}}}).catch(t=>{throw Tn.create("idb-open",{originalErrorMessage:t.message})})),Da}async function pE(t){try{const n=(await sg()).transaction(Vr),s=await n.objectStore(Vr).get(rg(t));return await n.done,s}catch(e){if(e instanceof xn)Zt.warn(e.message);else{const n=Tn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Zt.warn(n.message)}}}async function _d(t,e){try{const s=(await sg()).transaction(Vr,"readwrite");await s.objectStore(Vr).put(e,rg(t)),await s.done}catch(n){if(n instanceof xn)Zt.warn(n.message);else{const s=Tn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Zt.warn(s.message)}}}function rg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const gE=1024,mE=30*24*60*60*1e3;class _E{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new yE(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=vd();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=mE}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Zt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=vd(),{heartbeatsToSend:s,unsentEntries:r}=vE(this._heartbeatsCache.heartbeats),i=no(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Zt.warn(n),""}}}function vd(){return new Date().toISOString().substring(0,10)}function vE(t,e=gE){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),yd(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),yd(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class yE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return nw()?sw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await pE(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return _d(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return _d(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function yd(t){return no(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function bE(t){Ns(new Xn("platform-logger",e=>new Dw(e),"PRIVATE")),Ns(new Xn("heartbeat",e=>new _E(e),"PRIVATE")),Sn(ml,gd,t),Sn(ml,gd,"esm2017"),Sn("fire-js","")}bE("");var bd={};const wd="@firebase/database",Ed="1.0.9";/**
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
 */let ig="";function wE(t){ig=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Se(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Hr(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return sn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new EE(e)}}catch{}return new CE},Wn=og("localStorage"),TE=og("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs=new wc("@firebase/database"),SE=function(){let t=1;return function(){return t++}}(),ag=function(t){const e=fw(t),n=new cw;n.update(e);const s=n.digest();return _c.encodeByteArray(s)},di=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=di.apply(null,s):typeof s=="object"?e+=Se(s):e+=s,e+=" "}return e};let Ar=null,Cd=!0;const IE=function(t,e){P(!e,"Can't turn on custom loggers persistently."),Cs.logLevel=ue.VERBOSE,Ar=Cs.log.bind(Cs)},Fe=function(...t){if(Cd===!0&&(Cd=!1,Ar===null&&TE.get("logging_enabled")===!0&&IE()),Ar){const e=di.apply(null,t);Ar(e)}},hi=function(t){return function(...e){Fe(t,...e)}},yl=function(...t){const e="FIREBASE INTERNAL ERROR: "+di(...t);Cs.error(e)},en=function(...t){const e=`FIREBASE FATAL ERROR: ${di(...t)}`;throw Cs.error(e),new Error(e)},Ye=function(...t){const e="FIREBASE WARNING: "+di(...t);Cs.warn(e)},AE=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ye("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},lg=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},RE=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ks="[MIN_NAME]",Zn="[MAX_NAME]",js=function(t,e){if(t===e)return 0;if(t===ks||e===Zn)return-1;if(e===ks||t===Zn)return 1;{const n=Td(t),s=Td(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},PE=function(t,e){return t===e?0:t<e?-1:1},ar=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Se(e))},Tc=function(t){if(typeof t!="object"||t===null)return Se(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Se(e[s]),n+=":",n+=Tc(t[e[s]]);return n+="}",n},cg=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let r=0;r<n;r+=e)r+e>n?s.push(t.substring(r,n)):s.push(t.substring(r,r+e));return s};function Xe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const ug=function(t){P(!lg(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let r,i,o,a,l;t===0?(i=0,o=0,r=1/t===-1/0?1:0):(r=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),i=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(i%2?1:0),i=Math.floor(i/2);c.push(r?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let h=parseInt(u.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},OE=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},NE=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function kE(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const DE=new RegExp("^-?(0*)\\d{1,10}$"),xE=-2147483648,LE=2147483647,Td=function(t){if(DE.test(t)){const e=Number(t);if(e>=xE&&e<=LE)return e}return null},Hs=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ye("Exception was thrown by user callback.",n),e},Math.floor(0))}},ME=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Rr=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class FE{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Ye(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Fe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ye(e)}}class ji{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ji.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc="5",dg="v",hg="s",fg="r",pg="f",gg=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,mg="ls",_g="p",bl="ac",vg="websocket",yg="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(e,n,s,r,i=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Wn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Wn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function $E(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function wg(t,e,n){P(typeof e=="string","typeof type must == string"),P(typeof n=="object","typeof params must == object");let s;if(e===vg)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===yg)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);$E(t)&&(n.ns=t.namespace);const r=[];return Xe(n,(i,o)=>{r.push(i+"="+o)}),s+r.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{constructor(){this.counters_={}}incrementCounter(e,n=1){sn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return qb(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xa={},La={};function Ic(t){const e=t.toString();return xa[e]||(xa[e]=new BE),xa[e]}function jE(t,e){const n=t.toString();return La[n]||(La[n]=e()),La[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<s.length;++r)s[r]&&Hs(()=>{this.onMessage_(s[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd="start",VE="close",WE="pLPCommand",qE="pRTLPCB",Eg="id",Cg="pw",Tg="ser",GE="cb",zE="seg",KE="ts",YE="d",JE="dframe",Sg=1870,Ig=30,QE=Sg-Ig,XE=25e3,ZE=3e4;class gs{constructor(e,n,s,r,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=hi(e),this.stats_=Ic(n),this.urlFn=l=>(this.appCheckToken&&(l[bl]=this.appCheckToken),wg(n,yg,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new HE(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(ZE)),RE(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ac((...i)=>{const[o,a,l,c,u]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Sd)this.id=a,this.password=l;else if(o===VE)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Sd]="t",s[Tg]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[GE]=this.scriptTagHolder.uniqueCallbackIdentifier),s[dg]=Sc,this.transportSessionId&&(s[hg]=this.transportSessionId),this.lastSessionId&&(s[mg]=this.lastSessionId),this.applicationId&&(s[_g]=this.applicationId),this.appCheckToken&&(s[bl]=this.appCheckToken),typeof location<"u"&&location.hostname&&gg.test(location.hostname)&&(s[fg]=pg);const r=this.urlFn(s);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){gs.forceAllow_=!0}static forceDisallow(){gs.forceDisallow_=!0}static isAvailable(){return gs.forceAllow_?!0:!gs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!OE()&&!NE()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Se(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=qp(n),r=cg(s,QE);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[JE]="t",s[Eg]=e,s[Cg]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Se(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Ac{constructor(e,n,s,r){this.onDisconnect=s,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=SE(),window[WE+this.uniqueCallbackIdentifier]=e,window[qE+this.uniqueCallbackIdentifier]=n,this.myIFrame=Ac.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Fe("frame writing exception"),a.stack&&Fe(a.stack),Fe(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Fe("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Eg]=this.myID,e[Cg]=this.myPW,e[Tg]=this.currentSerial;let n=this.urlFn(e),s="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Ig+s.length<=Sg;){const o=this.pendingSegs.shift();s=s+"&"+zE+r+"="+o.seg+"&"+KE+r+"="+o.ts+"&"+YE+r+"="+o.d,r++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(s,Math.floor(XE)),i=()=>{clearTimeout(r),s()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const r=s.readyState;(!r||r==="loaded"||r==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Fe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eC=16384,tC=45e3;let ao=null;typeof MozWebSocket<"u"?ao=MozWebSocket:typeof WebSocket<"u"&&(ao=WebSocket);class _t{constructor(e,n,s,r,i,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=hi(this.connId),this.stats_=Ic(n),this.connURL=_t.connectionURL_(n,o,a,r,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,r,i){const o={};return o[dg]=Sc,typeof location<"u"&&location.hostname&&gg.test(location.hostname)&&(o[fg]=pg),n&&(o[hg]=n),s&&(o[mg]=s),r&&(o[bl]=r),i&&(o[_g]=i),wg(e,vg,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Wn.set("previous_websocket_failure",!0);try{let s;Qp(),this.mySock=new ao(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){_t.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&ao!==null&&!_t.forceDisallow_}static previouslyFailed(){return Wn.isInMemoryStorage||Wn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Wn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Hr(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(P(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Se(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=cg(n,eC);s.length>1&&this.sendString_(String(s.length));for(let r=0;r<s.length;r++)this.sendString_(s[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(tC))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}_t.responsesRequiredToBeHealthy=2;_t.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[gs,_t]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=_t&&_t.isAvailable();let s=n&&!_t.previouslyFailed();if(e.webSocketOnly&&(n||Ye("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[_t];else{const r=this.transports_=[];for(const i of Wr.ALL_TRANSPORTS)i&&i.isAvailable()&&r.push(i);Wr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Wr.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC=6e4,sC=5e3,rC=10*1024,iC=100*1024,Ma="t",Id="d",oC="s",Ad="r",aC="e",Rd="o",Pd="a",Od="n",Nd="p",lC="h";class cC{constructor(e,n,s,r,i,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=hi("c:"+this.id+":"),this.transportManager_=new Wr(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=Rr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>iC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>rC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ma in e){const n=e[Ma];n===Pd?this.upgradeIfSecondaryHealthy_():n===Ad?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Rd&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ar("t",e),s=ar("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Nd,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Pd,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Od,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ar("t",e),s=ar("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ar(Ma,e);if(Id in e){const s=e[Id];if(n===lC){const r=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(n===Od){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===oC?this.onConnectionShutdown_(s):n===Ad?this.onReset_(s):n===aC?yl("Server Error: "+s):n===Rd?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):yl("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Sc!==s&&Ye("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Rr(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(nC))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Rr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(sC))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Nd,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Wn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{put(e,n,s,r){}merge(e,n,s,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(e){this.allowedEvents_=e,this.listeners_={},P(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let r=0;r<s.length;r++)s[r].callback.apply(s[r].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const r=this.getInitialEvent(e);r&&n.apply(s,r)}off(e,n,s){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===n&&(!s||s===r[i].context)){r.splice(i,1);return}}validateEventType_(e){P(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo extends Rg{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!yc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new lo}getInitialEvent(e){return P(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kd=32,Dd=768;class he{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[s]=this.pieces_[r],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Z(){return new he("")}function K(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Rn(t){return t.pieces_.length-t.pieceNum_}function ge(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new he(t.pieces_,e)}function Pg(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function uC(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Og(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Ng(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new he(e,0)}function Ie(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof he)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let r=0;r<s.length;r++)s[r].length>0&&n.push(s[r])}return new he(n,0)}function J(t){return t.pieceNum_>=t.pieces_.length}function qe(t,e){const n=K(t),s=K(e);if(n===null)return e;if(n===s)return qe(ge(t),ge(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Rc(t,e){if(Rn(t)!==Rn(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function vt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Rn(t)>Rn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class dC{constructor(e,n){this.errorPrefix_=n,this.parts_=Og(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Wo(this.parts_[s]);kg(this)}}function hC(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Wo(e),kg(t)}function fC(t){const e=t.parts_.pop();t.byteLength_-=Wo(e),t.parts_.length>0&&(t.byteLength_-=1)}function kg(t){if(t.byteLength_>Dd)throw new Error(t.errorPrefix_+"has a key path longer than "+Dd+" bytes ("+t.byteLength_+").");if(t.parts_.length>kd)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+kd+") or object contains a cycle "+Hn(t))}function Hn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc extends Rg{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Pc}getInitialEvent(e){return P(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr=1e3,pC=60*5*1e3,xd=30*1e3,gC=1.3,mC=3e4,_C="server_kill",Ld=3;class Qt extends Ag{constructor(e,n,s,r,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Qt.nextPersistentConnectionId_++,this.log_=hi("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=lr,this.maxReconnectDelay_=pC,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Qp())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Pc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&lo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const r=++this.requestNumber_,i={r,a:e,b:n};this.log_(Se(i)),P(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),s&&(this.requestCBHash_[r]=s)}get(e){this.initConnection_();const n=new Vo,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,s,r){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),P(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:n,query:e,tag:s};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+s+" for "+r);const i={p:s},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,c=a.s;Qt.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(r))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,r),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&sn(e,"w")){const s=Os(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();Ye(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||lw(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=xd)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=aw(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,r=>{const i=r.s,o=r.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+r),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,r)&&this.connected_&&this.sendUnlisten_(s,r,e._queryObject,n)}sendUnlisten_(e,n,s,r){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";r&&(i.q=s,i.t=r),this.sendRequest(o,i)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,r){const i={p:n,d:s};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,n,s,r){this.putInternal("p",e,n,s,r)}merge(e,n,s,r){this.putInternal("m",e,n,s,r)}putInternal(e,n,s,r,i){this.initConnection_();const o={p:n,d:s};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const i=s.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Se(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):yl("Unrecognized action received from server: "+Se(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){P(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=lr,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=lr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>mC&&(this.reconnectDelay_=lr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*gC)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Qt.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(d){P(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Fe("getToken() completed but was canceled"):(Fe("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new cC(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,p=>{Ye(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(_C)},i))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Ye(d),l())}}}interrupt(e){Fe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Fe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],fl(this.interruptReasons_)&&(this.reconnectDelay_=lr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(i=>Tc(i)).join("$"):s="default";const r=this.removeListen_(e,s);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,n){const s=new he(e).toString();let r;if(this.listens.has(s)){const i=this.listens.get(s);r=i.get(n),i.delete(n),i.size===0&&this.listens.delete(s)}else r=void 0;return r}onAuthRevoked_(e,n){Fe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ld&&(this.reconnectDelay_=xd,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Fe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ld&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+ig.replace(/\./g,"-")]=1,yc()?e["framework.cordova"]=1:Jp()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=lo.getInstance().currentlyOnline();return fl(this.interruptReasons_)&&e}}Qt.nextPersistentConnectionId_=0;Qt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class qo{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new Y(ks,e),r=new Y(ks,n);return this.compare(s,r)!==0}minPost(){return Y.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oi;class Dg extends qo{static get __EMPTY_NODE(){return Oi}static set __EMPTY_NODE(e){Oi=e}compare(e,n){return js(e.name,n.name)}isDefinedOn(e){throw Us("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Y.MIN}maxPost(){return new Y(Zn,Oi)}makePost(e,n){return P(typeof e=="string","KeyIndex indexValue must always be a string."),new Y(e,Oi)}toString(){return".key"}}const Ts=new Dg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e,n,s,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Pe{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??Pe.RED,this.left=r??Ke.EMPTY_NODE,this.right=i??Ke.EMPTY_NODE}copy(e,n,s,r,i){return new Pe(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return i<0?r=r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ke.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,r;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ke.EMPTY_NODE;r=s.right.min_(),s=s.copy(r.key,r.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Pe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Pe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Pe.RED=!0;Pe.BLACK=!1;class vC{copy(e,n,s,r,i){return this}insert(e,n,s){return new Pe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ke{constructor(e,n=Ke.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ke(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Pe.BLACK,null,null))}remove(e){return new Ke(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Pe.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,r=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return r?r.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(r=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ni(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ni(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ni(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ni(this.root_,null,this.comparator_,!0,e)}}Ke.EMPTY_NODE=new vC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yC(t,e){return js(t.name,e.name)}function Oc(t,e){return js(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wl;function bC(t){wl=t}const xg=function(t){return typeof t=="number"?"number:"+ug(t):"string:"+t},Lg=function(t){if(t.isLeafNode()){const e=t.val();P(typeof e=="string"||typeof e=="number"||typeof e=="object"&&sn(e,".sv"),"Priority must be a string or number.")}else P(t===wl||t.isEmpty(),"priority of unexpected type.");P(t===wl||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Md;class Re{constructor(e,n=Re.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,P(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Lg(this.priorityNode_)}static set __childrenNodeConstructor(e){Md=e}static get __childrenNodeConstructor(){return Md}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Re(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Re.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return J(e)?this:K(e)===".priority"?this.priorityNode_:Re.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Re.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=K(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(P(s!==".priority"||Rn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Re.__childrenNodeConstructor.EMPTY_NODE.updateChild(ge(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+xg(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=ug(this.value_):e+=this.value_,this.lazyHash_=ag(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Re.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Re.__childrenNodeConstructor?-1:(P(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,r=Re.VALUE_TYPE_ORDER.indexOf(n),i=Re.VALUE_TYPE_ORDER.indexOf(s);return P(r>=0,"Unknown leaf type: "+n),P(i>=0,"Unknown leaf type: "+s),r===i?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Re.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mg,Fg;function wC(t){Mg=t}function EC(t){Fg=t}class CC extends qo{compare(e,n){const s=e.node.getPriority(),r=n.node.getPriority(),i=s.compareTo(r);return i===0?js(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Y.MIN}maxPost(){return new Y(Zn,new Re("[PRIORITY-POST]",Fg))}makePost(e,n){const s=Mg(e);return new Y(n,new Re("[PRIORITY-POST]",s))}toString(){return".priority"}}const Ee=new CC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TC=Math.log(2);class SC{constructor(e){const n=i=>parseInt(Math.log(i)/TC,10),s=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const r=s(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const co=function(t,e,n,s){t.sort(e);const r=function(l,c){const u=c-l;let d,h;if(u===0)return null;if(u===1)return d=t[l],h=n?n(d):d,new Pe(h,d.node,Pe.BLACK,null,null);{const p=parseInt(u/2,10)+l,m=r(l,p),_=r(p+1,c);return d=t[p],h=n?n(d):d,new Pe(h,d.node,Pe.BLACK,m,_)}},i=function(l){let c=null,u=null,d=t.length;const h=function(m,_){const b=d-m,A=d;d-=m;const R=r(b+1,A),O=t[b],D=n?n(O):O;p(new Pe(D,O.node,_,null,R))},p=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<l.count;++m){const _=l.nextBitIsOne(),b=Math.pow(2,l.count-(m+1));_?h(b,Pe.BLACK):(h(b,Pe.BLACK),h(b,Pe.RED))}return u},o=new SC(t.length),a=i(o);return new Ke(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fa;const hs={};class Gt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return P(hs&&Ee,"ChildrenNode.ts has not been loaded"),Fa=Fa||new Gt({".priority":hs},{".priority":Ee}),Fa}get(e){const n=Os(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ke?n:null}hasIndex(e){return sn(this.indexSet_,e.toString())}addIndex(e,n){P(e!==Ts,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let r=!1;const i=n.getIterator(Y.Wrap);let o=i.getNext();for(;o;)r=r||e.isDefinedOn(o.node),s.push(o),o=i.getNext();let a;r?a=co(s,e.getCompare()):a=hs;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Gt(u,c)}addToIndexes(e,n){const s=ro(this.indexes_,(r,i)=>{const o=Os(this.indexSet_,i);if(P(o,"Missing index implementation for "+i),r===hs)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Y.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),co(a,o.getCompare())}else return hs;else{const a=n.get(e.name);let l=r;return a&&(l=l.remove(new Y(e.name,a))),l.insert(e,e.node)}});return new Gt(s,this.indexSet_)}removeFromIndexes(e,n){const s=ro(this.indexes_,r=>{if(r===hs)return r;{const i=n.get(e.name);return i?r.remove(new Y(e.name,i)):r}});return new Gt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cr;class V{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Lg(this.priorityNode_),this.children_.isEmpty()&&P(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return cr||(cr=new V(new Ke(Oc),null,Gt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||cr}updatePriority(e){return this.children_.isEmpty()?this:new V(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?cr:n}}getChild(e){const n=K(e);return n===null?this:this.getImmediateChild(n).getChild(ge(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(P(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new Y(e,n);let r,i;n.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(s,this.children_)):(r=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(s,this.children_));const o=r.isEmpty()?cr:this.priorityNode_;return new V(r,o,i)}}updateChild(e,n){const s=K(e);if(s===null)return n;{P(K(e)!==".priority"||Rn(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(s).updateChild(ge(e),n);return this.updateImmediateChild(s,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,r=0,i=!0;if(this.forEachChild(Ee,(o,a)=>{n[o]=a.val(e),s++,i&&V.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):i=!1}),!e&&i&&r<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+xg(this.getPriority().val())+":"),this.forEachChild(Ee,(n,s)=>{const r=s.hash();r!==""&&(e+=":"+n+":"+r)}),this.lazyHash_=e===""?"":ag(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const r=this.resolveIndex_(s);if(r){const i=r.getPredecessorKey(new Y(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Y(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Y(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,Y.Wrap);let i=r.peek();for(;i!=null&&n.compare(i,e)<0;)r.getNext(),i=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,Y.Wrap);let i=r.peek();for(;i!=null&&n.compare(i,e)>0;)r.getNext(),i=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===fi?-1:0}withIndex(e){if(e===Ts||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new V(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ts||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Ee),r=n.getIterator(Ee);let i=s.getNext(),o=r.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=s.getNext(),o=r.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ts?null:this.indexMap_.get(e.toString())}}V.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class IC extends V{constructor(){super(new Ke(Oc),V.EMPTY_NODE,Gt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return V.EMPTY_NODE}isEmpty(){return!1}}const fi=new IC;Object.defineProperties(Y,{MIN:{value:new Y(ks,V.EMPTY_NODE)},MAX:{value:new Y(Zn,fi)}});Dg.__EMPTY_NODE=V.EMPTY_NODE;Re.__childrenNodeConstructor=V;bC(fi);EC(fi);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AC=!0;function Oe(t,e=null){if(t===null)return V.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),P(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Re(n,Oe(e))}if(!(t instanceof Array)&&AC){const n=[];let s=!1;if(Xe(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Oe(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new Y(o,l)))}}),n.length===0)return V.EMPTY_NODE;const i=co(n,yC,o=>o.name,Oc);if(s){const o=co(n,Ee.getCompare());return new V(i,Oe(e),new Gt({".priority":o},{".priority":Ee}))}else return new V(i,Oe(e),Gt.Default)}else{let n=V.EMPTY_NODE;return Xe(t,(s,r)=>{if(sn(t,s)&&s.substring(0,1)!=="."){const i=Oe(r);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(s,i))}}),n.updatePriority(Oe(e))}}wC(Oe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC extends qo{constructor(e){super(),this.indexPath_=e,P(!J(e)&&K(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),r=this.extractChild(n.node),i=s.compareTo(r);return i===0?js(e.name,n.name):i}makePost(e,n){const s=Oe(e),r=V.EMPTY_NODE.updateChild(this.indexPath_,s);return new Y(n,r)}maxPost(){const e=V.EMPTY_NODE.updateChild(this.indexPath_,fi);return new Y(Zn,e)}toString(){return Og(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC extends qo{compare(e,n){const s=e.node.compareTo(n.node);return s===0?js(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Y.MIN}maxPost(){return Y.MAX}makePost(e,n){const s=Oe(e);return new Y(n,s)}toString(){return".value"}}const OC=new PC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ug(t){return{type:"value",snapshotNode:t}}function Ds(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function qr(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Gr(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function NC(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(e){this.index_=e}updateChild(e,n,s,r,i,o){P(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(r).equals(s.getChild(r))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(qr(n,a)):P(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ds(n,s)):o.trackChildChange(Gr(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Ee,(r,i)=>{n.hasChild(r)||s.trackChildChange(qr(r,i))}),n.isLeafNode()||n.forEachChild(Ee,(r,i)=>{if(e.hasChild(r)){const o=e.getImmediateChild(r);o.equals(i)||s.trackChildChange(Gr(r,i,o))}else s.trackChildChange(Ds(r,i))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?V.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e){this.indexedFilter_=new Nc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=zr.getStartPost_(e),this.endPost_=zr.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,r,i,o){return this.matches(new Y(n,s))||(s=V.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,r,i,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=V.EMPTY_NODE);let r=n.withIndex(this.index_);r=r.updatePriority(V.EMPTY_NODE);const i=this;return n.forEachChild(Ee,(o,a)=>{i.matches(new Y(o,a))||(r=r.updateImmediateChild(o,V.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new zr(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,r,i,o){return this.rangedFilter_.matches(new Y(n,s))||(s=V.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,r,i,o):this.fullLimitUpdateChild_(e,n,s,i,o)}updateFullNode(e,n,s){let r;if(n.isLeafNode()||n.isEmpty())r=V.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){r=V.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const a=i.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))r=r.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{r=n.withIndex(this.index_),r=r.updatePriority(V.EMPTY_NODE);let i;this.reverse_?i=r.getReverseIterator(this.index_):i=r.getIterator(this.index_);let o=0;for(;i.hasNext();){const a=i.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:r=r.updateImmediateChild(a.name,V.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,r,i){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,p)=>d(p,h)}else o=this.index_.getCompare();const a=e;P(a.numChildren()===this.limit_,"");const l=new Y(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let h=r.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=r.getChildAfterChild(this.index_,h,this.reverse_);const p=h==null?1:o(h,l);if(u&&!s.isEmpty()&&p>=0)return i!=null&&i.trackChildChange(Gr(n,s,d)),a.updateImmediateChild(n,s);{i!=null&&i.trackChildChange(qr(n,d));const _=a.updateImmediateChild(n,V.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(i!=null&&i.trackChildChange(Ds(h.name,h.node)),_.updateImmediateChild(h.name,h.node)):_}}else return s.isEmpty()?e:u&&o(c,l)>=0?(i!=null&&(i.trackChildChange(qr(c.name,c.node)),i.trackChildChange(Ds(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,V.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ee}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return P(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return P(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ks}hasEnd(){return this.endSet_}getIndexEndValue(){return P(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return P(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Zn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return P(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ee}copy(){const e=new kc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function DC(t){return t.loadsAllData()?new Nc(t.getIndex()):t.hasLimit()?new kC(t):new zr(t)}function Fd(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ee?n="$priority":t.index_===OC?n="$value":t.index_===Ts?n="$key":(P(t.index_ instanceof RC,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Se(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Se(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Se(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Se(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Se(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Ud(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ee&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo extends Ag{constructor(e,n,s,r){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=r,this.log_=hi("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(P(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=uo.getListenId_(e,s),a={};this.listens_[o]=a;const l=Fd(e._queryParams);this.restRequest_(i+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(i,d,!1,s),Os(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",r(h,null)}})}unlisten(e,n){const s=uo.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Fd(e._queryParams),s=e._path.toString(),r=new Vo;return this.restRequest_(s+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(s,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,i])=>{r&&r.accessToken&&(n.auth=r.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+$s(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Hr(a.responseText)}catch{Ye("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&Ye("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(){this.rootNode_=V.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ho(){return{value:null,children:new Map}}function $g(t,e,n){if(J(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=K(e);t.children.has(s)||t.children.set(s,ho());const r=t.children.get(s);e=ge(e),$g(r,e,n)}}function El(t,e,n){t.value!==null?n(e,t.value):LC(t,(s,r)=>{const i=new he(e.toString()+"/"+s);El(r,i,n)})}function LC(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Xe(this.last_,(s,r)=>{n[s]=n[s]-r}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $d=10*1e3,FC=30*1e3,UC=5*60*1e3;class $C{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new MC(e);const s=$d+(FC-$d)*Math.random();Rr(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Xe(e,(r,i)=>{i>0&&sn(this.statsToReport_,r)&&(n[r]=i,s=!0)}),s&&this.server_.reportStats(n),Rr(this.reportStats_.bind(this),Math.floor(Math.random()*2*UC))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(yt||(yt={}));function Bg(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Dc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function xc(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=yt.ACK_USER_WRITE,this.source=Bg()}operationForChild(e){if(J(this.path)){if(this.affectedTree.value!=null)return P(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new he(e));return new fo(Z(),n,this.revert)}}else return P(K(this.path)===e,"operationForChild called for unrelated child."),new fo(ge(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e,n){this.source=e,this.path=n,this.type=yt.LISTEN_COMPLETE}operationForChild(e){return J(this.path)?new Kr(this.source,Z()):new Kr(this.source,ge(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=yt.OVERWRITE}operationForChild(e){return J(this.path)?new es(this.source,Z(),this.snap.getImmediateChild(e)):new es(this.source,ge(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=yt.MERGE}operationForChild(e){if(J(this.path)){const n=this.children.subtree(new he(e));return n.isEmpty()?null:n.value?new es(this.source,Z(),n.value):new Yr(this.source,Z(),n)}else return P(K(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Yr(this.source,ge(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(J(e))return this.isFullyInitialized()&&!this.filtered_;const n=K(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function jC(t,e,n,s){const r=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(NC(o.childName,o.snapshotNode))}),ur(t,r,"child_removed",e,s,n),ur(t,r,"child_added",e,s,n),ur(t,r,"child_moved",i,s,n),ur(t,r,"child_changed",e,s,n),ur(t,r,"value",e,s,n),r}function ur(t,e,n,s,r,i){const o=s.filter(a=>a.type===n);o.sort((a,l)=>VC(t,a,l)),o.forEach(a=>{const l=HC(t,a,i);r.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function HC(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function VC(t,e,n){if(e.childName==null||n.childName==null)throw Us("Should only compare child_ events.");const s=new Y(e.childName,e.snapshotNode),r=new Y(n.childName,n.snapshotNode);return t.index_.compare(s,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Go(t,e){return{eventCache:t,serverCache:e}}function Pr(t,e,n,s){return Go(new Pn(e,n,s),t.serverCache)}function jg(t,e,n,s){return Go(t.eventCache,new Pn(e,n,s))}function po(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ts(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ua;const WC=()=>(Ua||(Ua=new Ke(PE)),Ua);class ve{constructor(e,n=WC()){this.value=e,this.children=n}static fromObject(e){let n=new ve(null);return Xe(e,(s,r)=>{n=n.set(new he(s),r)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Z(),value:this.value};if(J(e))return null;{const s=K(e),r=this.children.get(s);if(r!==null){const i=r.findRootMostMatchingPathAndValue(ge(e),n);return i!=null?{path:Ie(new he(s),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(J(e))return this;{const n=K(e),s=this.children.get(n);return s!==null?s.subtree(ge(e)):new ve(null)}}set(e,n){if(J(e))return new ve(n,this.children);{const s=K(e),i=(this.children.get(s)||new ve(null)).set(ge(e),n),o=this.children.insert(s,i);return new ve(this.value,o)}}remove(e){if(J(e))return this.children.isEmpty()?new ve(null):new ve(null,this.children);{const n=K(e),s=this.children.get(n);if(s){const r=s.remove(ge(e));let i;return r.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,r),this.value===null&&i.isEmpty()?new ve(null):new ve(this.value,i)}else return this}}get(e){if(J(e))return this.value;{const n=K(e),s=this.children.get(n);return s?s.get(ge(e)):null}}setTree(e,n){if(J(e))return n;{const s=K(e),i=(this.children.get(s)||new ve(null)).setTree(ge(e),n);let o;return i.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,i),new ve(this.value,o)}}fold(e){return this.fold_(Z(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((r,i)=>{s[r]=i.fold_(Ie(e,r),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Z(),n)}findOnPath_(e,n,s){const r=this.value?s(n,this.value):!1;if(r)return r;if(J(e))return null;{const i=K(e),o=this.children.get(i);return o?o.findOnPath_(ge(e),Ie(n,i),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Z(),n)}foreachOnPath_(e,n,s){if(J(e))return this;{this.value&&s(n,this.value);const r=K(e),i=this.children.get(r);return i?i.foreachOnPath_(ge(e),Ie(n,r),s):new ve(null)}}foreach(e){this.foreach_(Z(),e)}foreach_(e,n){this.children.inorderTraversal((s,r)=>{r.foreach_(Ie(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.writeTree_=e}static empty(){return new Et(new ve(null))}}function Or(t,e,n){if(J(e))return new Et(new ve(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const r=s.path;let i=s.value;const o=qe(r,e);return i=i.updateChild(o,n),new Et(t.writeTree_.set(r,i))}else{const r=new ve(n),i=t.writeTree_.setTree(e,r);return new Et(i)}}}function Bd(t,e,n){let s=t;return Xe(n,(r,i)=>{s=Or(s,Ie(e,r),i)}),s}function jd(t,e){if(J(e))return Et.empty();{const n=t.writeTree_.setTree(e,new ve(null));return new Et(n)}}function Cl(t,e){return os(t,e)!=null}function os(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(qe(n.path,e)):null}function Hd(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ee,(s,r)=>{e.push(new Y(s,r))}):t.writeTree_.children.inorderTraversal((s,r)=>{r.value!=null&&e.push(new Y(s,r.value))}),e}function In(t,e){if(J(e))return t;{const n=os(t,e);return n!=null?new Et(new ve(n)):new Et(t.writeTree_.subtree(e))}}function Tl(t){return t.writeTree_.isEmpty()}function xs(t,e){return Hg(Z(),t.writeTree_,e)}function Hg(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((r,i)=>{r===".priority"?(P(i.value!==null,"Priority writes must always be leaf nodes"),s=i.value):n=Hg(Ie(t,r),i,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Ie(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zo(t,e){return Gg(e,t)}function qC(t,e,n,s,r){P(s>t.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:r}),r&&(t.visibleWrites=Or(t.visibleWrites,e,n)),t.lastWriteId=s}function GC(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function zC(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);P(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let r=s.visible,i=!1,o=t.allWrites.length-1;for(;r&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&KC(a,s.path)?r=!1:vt(s.path,a.path)&&(i=!0)),o--}if(r){if(i)return YC(t),!0;if(s.snap)t.visibleWrites=jd(t.visibleWrites,s.path);else{const a=s.children;Xe(a,l=>{t.visibleWrites=jd(t.visibleWrites,Ie(s.path,l))})}return!0}else return!1}function KC(t,e){if(t.snap)return vt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&vt(Ie(t.path,n),e))return!0;return!1}function YC(t){t.visibleWrites=Vg(t.allWrites,JC,Z()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function JC(t){return t.visible}function Vg(t,e,n){let s=Et.empty();for(let r=0;r<t.length;++r){const i=t[r];if(e(i)){const o=i.path;let a;if(i.snap)vt(n,o)?(a=qe(n,o),s=Or(s,a,i.snap)):vt(o,n)&&(a=qe(o,n),s=Or(s,Z(),i.snap.getChild(a)));else if(i.children){if(vt(n,o))a=qe(n,o),s=Bd(s,a,i.children);else if(vt(o,n))if(a=qe(o,n),J(a))s=Bd(s,Z(),i.children);else{const l=Os(i.children,K(a));if(l){const c=l.getChild(ge(a));s=Or(s,Z(),c)}}}else throw Us("WriteRecord should have .snap or .children")}}return s}function Wg(t,e,n,s,r){if(!s&&!r){const i=os(t.visibleWrites,e);if(i!=null)return i;{const o=In(t.visibleWrites,e);if(Tl(o))return n;if(n==null&&!Cl(o,Z()))return null;{const a=n||V.EMPTY_NODE;return xs(o,a)}}}else{const i=In(t.visibleWrites,e);if(!r&&Tl(i))return n;if(!r&&n==null&&!Cl(i,Z()))return null;{const o=function(c){return(c.visible||r)&&(!s||!~s.indexOf(c.writeId))&&(vt(c.path,e)||vt(e,c.path))},a=Vg(t.allWrites,o,e),l=n||V.EMPTY_NODE;return xs(a,l)}}}function QC(t,e,n){let s=V.EMPTY_NODE;const r=os(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(Ee,(i,o)=>{s=s.updateImmediateChild(i,o)}),s;if(n){const i=In(t.visibleWrites,e);return n.forEachChild(Ee,(o,a)=>{const l=xs(In(i,new he(o)),a);s=s.updateImmediateChild(o,l)}),Hd(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const i=In(t.visibleWrites,e);return Hd(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function XC(t,e,n,s,r){P(s||r,"Either existingEventSnap or existingServerSnap must exist");const i=Ie(e,n);if(Cl(t.visibleWrites,i))return null;{const o=In(t.visibleWrites,i);return Tl(o)?r.getChild(n):xs(o,r.getChild(n))}}function ZC(t,e,n,s){const r=Ie(e,n),i=os(t.visibleWrites,r);if(i!=null)return i;if(s.isCompleteForChild(n)){const o=In(t.visibleWrites,r);return xs(o,s.getNode().getImmediateChild(n))}else return null}function eT(t,e){return os(t.visibleWrites,e)}function tT(t,e,n,s,r,i,o){let a;const l=In(t.visibleWrites,e),c=os(l,Z());if(c!=null)a=c;else if(n!=null)a=xs(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),h=i?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let p=h.getNext();for(;p&&u.length<r;)d(p,s)!==0&&u.push(p),p=h.getNext();return u}else return[]}function nT(){return{visibleWrites:Et.empty(),allWrites:[],lastWriteId:-1}}function go(t,e,n,s){return Wg(t.writeTree,t.treePath,e,n,s)}function Lc(t,e){return QC(t.writeTree,t.treePath,e)}function Vd(t,e,n,s){return XC(t.writeTree,t.treePath,e,n,s)}function mo(t,e){return eT(t.writeTree,Ie(t.treePath,e))}function sT(t,e,n,s,r,i){return tT(t.writeTree,t.treePath,e,n,s,r,i)}function Mc(t,e,n){return ZC(t.writeTree,t.treePath,e,n)}function qg(t,e){return Gg(Ie(t.treePath,e),t.writeTree)}function Gg(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;P(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),P(s!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(s);if(r){const i=r.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(s,Gr(s,e.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(s,qr(s,r.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(s,Ds(s,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(s,Gr(s,e.snapshotNode,r.oldSnap));else throw Us("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const zg=new iT;class Fc{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Pn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Mc(this.writes_,e,s)}}getChildAfterChild(e,n,s){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ts(this.viewCache_),i=sT(this.writes_,r,n,1,s,e);return i.length===0?null:i[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oT(t){return{filter:t}}function aT(t,e){P(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),P(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function lT(t,e,n,s,r){const i=new rT;let o,a;if(n.type===yt.OVERWRITE){const c=n;c.source.fromUser?o=Sl(t,e,c.path,c.snap,s,r,i):(P(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!J(c.path),o=_o(t,e,c.path,c.snap,s,r,a,i))}else if(n.type===yt.MERGE){const c=n;c.source.fromUser?o=uT(t,e,c.path,c.children,s,r,i):(P(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Il(t,e,c.path,c.children,s,r,a,i))}else if(n.type===yt.ACK_USER_WRITE){const c=n;c.revert?o=fT(t,e,c.path,s,r,i):o=dT(t,e,c.path,c.affectedTree,s,r,i)}else if(n.type===yt.LISTEN_COMPLETE)o=hT(t,e,n.path,s,i);else throw Us("Unknown operation type: "+n.type);const l=i.getChanges();return cT(e,o,l),{viewCache:o,changes:l}}function cT(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const r=s.getNode().isLeafNode()||s.getNode().isEmpty(),i=po(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!s.getNode().equals(i)||!s.getNode().getPriority().equals(i.getPriority()))&&n.push(Ug(po(e)))}}function Kg(t,e,n,s,r,i){const o=e.eventCache;if(mo(s,n)!=null)return e;{let a,l;if(J(n))if(P(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=ts(e),u=c instanceof V?c:V.EMPTY_NODE,d=Lc(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,i)}else{const c=go(s,ts(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,i)}else{const c=K(n);if(c===".priority"){P(Rn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=Vd(s,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=ge(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=Vd(s,n,o.getNode(),l);h!=null?d=o.getNode().getImmediateChild(c).updateChild(u,h):d=o.getNode().getImmediateChild(c)}else d=Mc(s,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,r,i):a=o.getNode()}}return Pr(e,a,o.isFullyInitialized()||J(n),t.filter.filtersNodes())}}function _o(t,e,n,s,r,i,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(J(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),p,null)}else{const p=K(n);if(!l.isCompleteForPath(n)&&Rn(n)>1)return e;const m=ge(n),b=l.getNode().getImmediateChild(p).updateChild(m,s);p===".priority"?c=u.updatePriority(l.getNode(),b):c=u.updateChild(l.getNode(),p,b,m,zg,null)}const d=jg(e,c,l.isFullyInitialized()||J(n),u.filtersNodes()),h=new Fc(r,d,i);return Kg(t,d,n,r,h,a)}function Sl(t,e,n,s,r,i,o){const a=e.eventCache;let l,c;const u=new Fc(r,e,i);if(J(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Pr(e,c,!0,t.filter.filtersNodes());else{const d=K(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=Pr(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=ge(n),p=a.getNode().getImmediateChild(d);let m;if(J(h))m=s;else{const _=u.getCompleteChild(d);_!=null?Pg(h)===".priority"&&_.getChild(Ng(h)).isEmpty()?m=_:m=_.updateChild(h,s):m=V.EMPTY_NODE}if(p.equals(m))l=e;else{const _=t.filter.updateChild(a.getNode(),d,m,h,u,o);l=Pr(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Wd(t,e){return t.eventCache.isCompleteForChild(e)}function uT(t,e,n,s,r,i,o){let a=e;return s.foreach((l,c)=>{const u=Ie(n,l);Wd(e,K(u))&&(a=Sl(t,a,u,c,r,i,o))}),s.foreach((l,c)=>{const u=Ie(n,l);Wd(e,K(u))||(a=Sl(t,a,u,c,r,i,o))}),a}function qd(t,e,n){return n.foreach((s,r)=>{e=e.updateChild(s,r)}),e}function Il(t,e,n,s,r,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;J(n)?c=s:c=new ve(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,h)=>{if(u.hasChild(d)){const p=e.serverCache.getNode().getImmediateChild(d),m=qd(t,p,h);l=_o(t,l,new he(d),m,r,i,o,a)}}),c.children.inorderTraversal((d,h)=>{const p=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!u.hasChild(d)&&!p){const m=e.serverCache.getNode().getImmediateChild(d),_=qd(t,m,h);l=_o(t,l,new he(d),_,r,i,o,a)}}),l}function dT(t,e,n,s,r,i,o){if(mo(r,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(J(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return _o(t,e,n,l.getNode().getChild(n),r,i,a,o);if(J(n)){let c=new ve(null);return l.getNode().forEachChild(Ts,(u,d)=>{c=c.set(new he(u),d)}),Il(t,e,n,c,r,i,a,o)}else return e}else{let c=new ve(null);return s.foreach((u,d)=>{const h=Ie(n,u);l.isCompleteForPath(h)&&(c=c.set(u,l.getNode().getChild(h)))}),Il(t,e,n,c,r,i,a,o)}}function hT(t,e,n,s,r){const i=e.serverCache,o=jg(e,i.getNode(),i.isFullyInitialized()||J(n),i.isFiltered());return Kg(t,o,n,s,zg,r)}function fT(t,e,n,s,r,i){let o;if(mo(s,n)!=null)return e;{const a=new Fc(s,e,r),l=e.eventCache.getNode();let c;if(J(n)||K(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=go(s,ts(e));else{const d=e.serverCache.getNode();P(d instanceof V,"serverChildren would be complete if leaf node"),u=Lc(s,d)}u=u,c=t.filter.updateFullNode(l,u,i)}else{const u=K(n);let d=Mc(s,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,ge(n),a,i):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,V.EMPTY_NODE,ge(n),a,i):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=go(s,ts(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,i)))}return o=e.serverCache.isFullyInitialized()||mo(s,Z())!=null,Pr(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pT{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,r=new Nc(s.getIndex()),i=DC(s);this.processor_=oT(i);const o=n.serverCache,a=n.eventCache,l=r.updateFullNode(V.EMPTY_NODE,o.getNode(),null),c=i.updateFullNode(V.EMPTY_NODE,a.getNode(),null),u=new Pn(l,o.isFullyInitialized(),r.filtersNodes()),d=new Pn(c,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=Go(d,u),this.eventGenerator_=new BC(this.query_)}get query(){return this.query_}}function gT(t){return t.viewCache_.serverCache.getNode()}function mT(t){return po(t.viewCache_)}function _T(t,e){const n=ts(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!J(e)&&!n.getImmediateChild(K(e)).isEmpty())?n.getChild(e):null}function Gd(t){return t.eventRegistrations_.length===0}function vT(t,e){t.eventRegistrations_.push(e)}function zd(t,e,n){const s=[];if(n){P(e==null,"A cancel should cancel all event registrations.");const r=t.query._path;t.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(n,r);o&&s.push(o)})}if(e){let r=[];for(let i=0;i<t.eventRegistrations_.length;++i){const o=t.eventRegistrations_[i];if(!o.matches(e))r.push(o);else if(e.hasAnyCallback()){r=r.concat(t.eventRegistrations_.slice(i+1));break}}t.eventRegistrations_=r}else t.eventRegistrations_=[];return s}function Kd(t,e,n,s){e.type===yt.MERGE&&e.source.queryId!==null&&(P(ts(t.viewCache_),"We should always have a full cache before handling merges"),P(po(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,i=lT(t.processor_,r,e,n,s);return aT(t.processor_,i.viewCache),P(i.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,Yg(t,i.changes,i.viewCache.eventCache.getNode(),null)}function yT(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ee,(i,o)=>{s.push(Ds(i,o))}),n.isFullyInitialized()&&s.push(Ug(n.getNode())),Yg(t,s,n.getNode(),e)}function Yg(t,e,n,s){const r=s?[s]:t.eventRegistrations_;return jC(t.eventGenerator_,e,n,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vo;class Jg{constructor(){this.views=new Map}}function bT(t){P(!vo,"__referenceConstructor has already been defined"),vo=t}function wT(){return P(vo,"Reference.ts has not been loaded"),vo}function ET(t){return t.views.size===0}function Uc(t,e,n,s){const r=e.source.queryId;if(r!==null){const i=t.views.get(r);return P(i!=null,"SyncTree gave us an op for an invalid query."),Kd(i,e,n,s)}else{let i=[];for(const o of t.views.values())i=i.concat(Kd(o,e,n,s));return i}}function Qg(t,e,n,s,r){const i=e._queryIdentifier,o=t.views.get(i);if(!o){let a=go(n,r?s:null),l=!1;a?l=!0:s instanceof V?(a=Lc(n,s),l=!1):(a=V.EMPTY_NODE,l=!1);const c=Go(new Pn(a,l,!1),new Pn(s,r,!1));return new pT(e,c)}return o}function CT(t,e,n,s,r,i){const o=Qg(t,e,s,r,i);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),vT(o,n),yT(o,n)}function TT(t,e,n,s){const r=e._queryIdentifier,i=[];let o=[];const a=On(t);if(r==="default")for(const[l,c]of t.views.entries())o=o.concat(zd(c,n,s)),Gd(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||i.push(c.query));else{const l=t.views.get(r);l&&(o=o.concat(zd(l,n,s)),Gd(l)&&(t.views.delete(r),l.query._queryParams.loadsAllData()||i.push(l.query)))}return a&&!On(t)&&i.push(new(wT())(e._repo,e._path)),{removed:i,events:o}}function Xg(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function An(t,e){let n=null;for(const s of t.views.values())n=n||_T(s,e);return n}function Zg(t,e){if(e._queryParams.loadsAllData())return Ko(t);{const s=e._queryIdentifier;return t.views.get(s)}}function em(t,e){return Zg(t,e)!=null}function On(t){return Ko(t)!=null}function Ko(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yo;function ST(t){P(!yo,"__referenceConstructor has already been defined"),yo=t}function IT(){return P(yo,"Reference.ts has not been loaded"),yo}let AT=1;class Yd{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ve(null),this.pendingWriteTree_=nT(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function tm(t,e,n,s,r){return qC(t.pendingWriteTree_,e,n,s,r),r?gi(t,new es(Bg(),e,n)):[]}function qn(t,e,n=!1){const s=GC(t.pendingWriteTree_,e);if(zC(t.pendingWriteTree_,e)){let i=new ve(null);return s.snap!=null?i=i.set(Z(),!0):Xe(s.children,o=>{i=i.set(new he(o),!0)}),gi(t,new fo(s.path,i,n))}else return[]}function pi(t,e,n){return gi(t,new es(Dc(),e,n))}function RT(t,e,n){const s=ve.fromObject(n);return gi(t,new Yr(Dc(),e,s))}function PT(t,e){return gi(t,new Kr(Dc(),e))}function OT(t,e,n){const s=Bc(t,n);if(s){const r=jc(s),i=r.path,o=r.queryId,a=qe(i,e),l=new Kr(xc(o),a);return Hc(t,i,l)}else return[]}function bo(t,e,n,s,r=!1){const i=e._path,o=t.syncPointTree_.get(i);let a=[];if(o&&(e._queryIdentifier==="default"||em(o,e))){const l=TT(o,e,n,s);ET(o)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const c=l.removed;if(a=l.events,!r){const u=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(i,(h,p)=>On(p));if(u&&!d){const h=t.syncPointTree_.subtree(i);if(!h.isEmpty()){const p=DT(h);for(let m=0;m<p.length;++m){const _=p[m],b=_.query,A=im(t,_);t.listenProvider_.startListening(Nr(b),Jr(t,b),A.hashFn,A.onComplete)}}}!d&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(Nr(e),null):c.forEach(h=>{const p=t.queryToTagMap.get(Yo(h));t.listenProvider_.stopListening(Nr(h),p)}))}xT(t,c)}return a}function nm(t,e,n,s){const r=Bc(t,s);if(r!=null){const i=jc(r),o=i.path,a=i.queryId,l=qe(o,e),c=new es(xc(a),l,n);return Hc(t,o,c)}else return[]}function NT(t,e,n,s){const r=Bc(t,s);if(r){const i=jc(r),o=i.path,a=i.queryId,l=qe(o,e),c=ve.fromObject(n),u=new Yr(xc(a),l,c);return Hc(t,o,u)}else return[]}function Al(t,e,n,s=!1){const r=e._path;let i=null,o=!1;t.syncPointTree_.foreachOnPath(r,(h,p)=>{const m=qe(h,r);i=i||An(p,m),o=o||On(p)});let a=t.syncPointTree_.get(r);a?(o=o||On(a),i=i||An(a,Z())):(a=new Jg,t.syncPointTree_=t.syncPointTree_.set(r,a));let l;i!=null?l=!0:(l=!1,i=V.EMPTY_NODE,t.syncPointTree_.subtree(r).foreachChild((p,m)=>{const _=An(m,Z());_&&(i=i.updateImmediateChild(p,_))}));const c=em(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=Yo(e);P(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const p=LT();t.queryToTagMap.set(h,p),t.tagToQueryMap.set(p,h)}const u=zo(t.pendingWriteTree_,r);let d=CT(a,e,n,u,i,l);if(!c&&!o&&!s){const h=Zg(a,e);d=d.concat(MT(t,e,h))}return d}function $c(t,e,n){const r=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=qe(o,e),c=An(a,l);if(c)return c});return Wg(r,e,i,n,!0)}function kT(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const d=qe(c,n);s=s||An(u,d)});let r=t.syncPointTree_.get(n);r?s=s||An(r,Z()):(r=new Jg,t.syncPointTree_=t.syncPointTree_.set(n,r));const i=s!=null,o=i?new Pn(s,!0,!1):null,a=zo(t.pendingWriteTree_,e._path),l=Qg(r,e,a,i?o.getNode():V.EMPTY_NODE,i);return mT(l)}function gi(t,e){return sm(e,t.syncPointTree_,null,zo(t.pendingWriteTree_,Z()))}function sm(t,e,n,s){if(J(t.path))return rm(t,e,n,s);{const r=e.get(Z());n==null&&r!=null&&(n=An(r,Z()));let i=[];const o=K(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=qg(s,o);i=i.concat(sm(a,l,c,u))}return r&&(i=i.concat(Uc(r,t,s,n))),i}}function rm(t,e,n,s){const r=e.get(Z());n==null&&r!=null&&(n=An(r,Z()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=qg(s,o),u=t.operationForChild(o);u&&(i=i.concat(rm(u,a,l,c)))}),r&&(i=i.concat(Uc(r,t,s,n))),i}function im(t,e){const n=e.query,s=Jr(t,n);return{hashFn:()=>(gT(e)||V.EMPTY_NODE).hash(),onComplete:r=>{if(r==="ok")return s?OT(t,n._path,s):PT(t,n._path);{const i=kE(r,n);return bo(t,n,null,i)}}}}function Jr(t,e){const n=Yo(e);return t.queryToTagMap.get(n)}function Yo(t){return t._path.toString()+"$"+t._queryIdentifier}function Bc(t,e){return t.tagToQueryMap.get(e)}function jc(t){const e=t.indexOf("$");return P(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new he(t.substr(0,e))}}function Hc(t,e,n){const s=t.syncPointTree_.get(e);P(s,"Missing sync point for query tag that we're tracking");const r=zo(t.pendingWriteTree_,e);return Uc(s,n,r,null)}function DT(t){return t.fold((e,n,s)=>{if(n&&On(n))return[Ko(n)];{let r=[];return n&&(r=Xg(n)),Xe(s,(i,o)=>{r=r.concat(o)}),r}})}function Nr(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(IT())(t._repo,t._path):t}function xT(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const r=Yo(s),i=t.queryToTagMap.get(r);t.queryToTagMap.delete(r),t.tagToQueryMap.delete(i)}}}function LT(){return AT++}function MT(t,e,n){const s=e._path,r=Jr(t,e),i=im(t,n),o=t.listenProvider_.startListening(Nr(e),r,i.hashFn,i.onComplete),a=t.syncPointTree_.subtree(s);if(r)P(!On(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!J(c)&&u&&On(u))return[Ko(u).query];{let h=[];return u&&(h=h.concat(Xg(u).map(p=>p.query))),Xe(d,(p,m)=>{h=h.concat(m)}),h}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(Nr(u),Jr(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Vc(n)}node(){return this.node_}}class Wc{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ie(this.path_,e);return new Wc(this.syncTree_,n)}node(){return $c(this.syncTree_,this.path_)}}const FT=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Jd=function(t,e,n){if(!t||typeof t!="object")return t;if(P(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return UT(t[".sv"],e,n);if(typeof t[".sv"]=="object")return $T(t[".sv"],e);P(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},UT=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:P(!1,"Unexpected server value: "+t)}},$T=function(t,e,n){t.hasOwnProperty("increment")||P(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&P(!1,"Unexpected increment value: "+s);const r=e.node();if(P(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return s;const o=r.getValue();return typeof o!="number"?s:o+s},BT=function(t,e,n,s){return qc(e,new Wc(n,t),s)},om=function(t,e,n){return qc(t,new Vc(e),n)};function qc(t,e,n){const s=t.getPriority().val(),r=Jd(s,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=Jd(o.getValue(),e,n);return a!==o.getValue()||r!==o.getPriority().val()?new Re(a,Oe(r)):t}else{const o=t;return i=o,r!==o.getPriority().val()&&(i=i.updatePriority(new Re(r))),o.forEachChild(Ee,(a,l)=>{const c=qc(l,e.getImmediateChild(a),n);c!==l&&(i=i.updateImmediateChild(a,c))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function zc(t,e){let n=e instanceof he?e:new he(e),s=t,r=K(n);for(;r!==null;){const i=Os(s.node.children,r)||{children:{},childCount:0};s=new Gc(r,s,i),n=ge(n),r=K(n)}return s}function Vs(t){return t.node.value}function am(t,e){t.node.value=e,Rl(t)}function lm(t){return t.node.childCount>0}function jT(t){return Vs(t)===void 0&&!lm(t)}function Jo(t,e){Xe(t.node.children,(n,s)=>{e(new Gc(n,t,s))})}function cm(t,e,n,s){n&&!s&&e(t),Jo(t,r=>{cm(r,e,!0,s)}),n&&s&&e(t)}function HT(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function mi(t){return new he(t.parent===null?t.name:mi(t.parent)+"/"+t.name)}function Rl(t){t.parent!==null&&VT(t.parent,t.name,t)}function VT(t,e,n){const s=jT(n),r=sn(t.node.children,e);s&&r?(delete t.node.children[e],t.node.childCount--,Rl(t)):!s&&!r&&(t.node.children[e]=n.node,t.node.childCount++,Rl(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WT=/[\[\].#$\/\u0000-\u001F\u007F]/,qT=/[\[\].#$\u0000-\u001F\u007F]/,$a=10*1024*1024,um=function(t){return typeof t=="string"&&t.length!==0&&!WT.test(t)},dm=function(t){return typeof t=="string"&&t.length!==0&&!qT.test(t)},GT=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),dm(t)},hm=function(t,e,n,s){s&&e===void 0||Kc(bc(t,"value"),e,n)},Kc=function(t,e,n){const s=n instanceof he?new dC(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Hn(s));if(typeof e=="function")throw new Error(t+"contains a function "+Hn(s)+" with contents = "+e.toString());if(lg(e))throw new Error(t+"contains "+e.toString()+" "+Hn(s));if(typeof e=="string"&&e.length>$a/3&&Wo(e)>$a)throw new Error(t+"contains a string greater than "+$a+" utf8 bytes "+Hn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,i=!1;if(Xe(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!um(o)))throw new Error(t+" contains an invalid key ("+o+") "+Hn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);hC(s,o),Kc(t,a,s),fC(s)}),r&&i)throw new Error(t+' contains ".value" child '+Hn(s)+" in addition to actual children.")}},fm=function(t,e,n,s){if(!dm(n))throw new Error(bc(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},zT=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),fm(t,e,n)},Yc=function(t,e){if(K(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},KT=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!um(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!GT(n))throw new Error(bc(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Jc(t,e){let n=null;for(let s=0;s<e.length;s++){const r=e[s],i=r.getPath();n!==null&&!Rc(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(r)}n&&t.eventLists_.push(n)}function pm(t,e,n){Jc(t,n),gm(t,s=>Rc(s,e))}function Ut(t,e,n){Jc(t,n),gm(t,s=>vt(s,e)||vt(e,s))}function gm(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const r=t.eventLists_[s];if(r){const i=r.path;e(i)?(JT(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function JT(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Ar&&Fe("event: "+n.toString()),Hs(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QT="repo_interrupt",XT=25;class ZT{constructor(e,n,s,r){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new YT,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ho(),this.transactionQueueTree_=new Gc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function eS(t,e,n){if(t.stats_=Ic(t.repoInfo_),t.forceRestClient_||ME())t.server_=new uo(t.repoInfo_,(s,r,i,o)=>{Qd(t,s,r,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Xd(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Se(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Qt(t.repoInfo_,e,(s,r,i,o)=>{Qd(t,s,r,i,o)},s=>{Xd(t,s)},s=>{tS(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=jE(t.repoInfo_,()=>new $C(t.stats_,t.server_)),t.infoData_=new xC,t.infoSyncTree_=new Yd({startListening:(s,r,i,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=pi(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Xc(t,"connected",!1),t.serverSyncTree_=new Yd({startListening:(s,r,i,o)=>(t.server_.listen(s,i,r,(a,l)=>{const c=o(a,l);Ut(t.eventQueue_,s._path,c)}),[]),stopListening:(s,r)=>{t.server_.unlisten(s,r)}})}function mm(t){const n=t.infoData_.getNode(new he(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Qc(t){return FT({timestamp:mm(t)})}function Qd(t,e,n,s,r){t.dataUpdateCount++;const i=new he(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(r)if(s){const l=ro(n,c=>Oe(c));o=NT(t.serverSyncTree_,i,l,r)}else{const l=Oe(n);o=nm(t.serverSyncTree_,i,l,r)}else if(s){const l=ro(n,c=>Oe(c));o=RT(t.serverSyncTree_,i,l)}else{const l=Oe(n);o=pi(t.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=Xo(t,i)),Ut(t.eventQueue_,a,o)}function Xd(t,e){Xc(t,"connected",e),e===!1&&rS(t)}function tS(t,e){Xe(e,(n,s)=>{Xc(t,n,s)})}function Xc(t,e,n){const s=new he("/.info/"+e),r=Oe(n);t.infoData_.updateSnapshot(s,r);const i=pi(t.infoSyncTree_,s,r);Ut(t.eventQueue_,s,i)}function _m(t){return t.nextWriteId_++}function nS(t,e,n){const s=kT(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(r=>{const i=Oe(r).withIndex(e._queryParams.getIndex());Al(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=pi(t.serverSyncTree_,e._path,i);else{const a=Jr(t.serverSyncTree_,e);o=nm(t.serverSyncTree_,e._path,i,a)}return Ut(t.eventQueue_,e._path,o),bo(t.serverSyncTree_,e,n,null,!0),i},r=>(Qo(t,"get for query "+Se(e)+" failed: "+r),Promise.reject(new Error(r))))}function sS(t,e,n,s,r){Qo(t,"set",{path:e.toString(),value:n,priority:s});const i=Qc(t),o=Oe(n,s),a=$c(t.serverSyncTree_,e),l=om(o,a,i),c=_m(t),u=tm(t.serverSyncTree_,e,l,c,!0);Jc(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(h,p)=>{const m=h==="ok";m||Ye("set at "+e+" failed: "+h);const _=qn(t.serverSyncTree_,c,!m);Ut(t.eventQueue_,e,_),aS(t,r,h,p)});const d=Em(t,e);Xo(t,d),Ut(t.eventQueue_,d,[])}function rS(t){Qo(t,"onDisconnectEvents");const e=Qc(t),n=ho();El(t.onDisconnect_,Z(),(r,i)=>{const o=BT(r,i,t.serverSyncTree_,e);$g(n,r,o)});let s=[];El(n,Z(),(r,i)=>{s=s.concat(pi(t.serverSyncTree_,r,i));const o=Em(t,r);Xo(t,o)}),t.onDisconnect_=ho(),Ut(t.eventQueue_,Z(),s)}function iS(t,e,n){let s;K(e._path)===".info"?s=Al(t.infoSyncTree_,e,n):s=Al(t.serverSyncTree_,e,n),pm(t.eventQueue_,e._path,s)}function Zd(t,e,n){let s;K(e._path)===".info"?s=bo(t.infoSyncTree_,e,n):s=bo(t.serverSyncTree_,e,n),pm(t.eventQueue_,e._path,s)}function oS(t){t.persistentConnection_&&t.persistentConnection_.interrupt(QT)}function Qo(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Fe(n,...e)}function aS(t,e,n,s){e&&Hs(()=>{if(n==="ok")e(null);else{const r=(n||"error").toUpperCase();let i=r;s&&(i+=": "+s);const o=new Error(i);o.code=r,e(o)}})}function vm(t,e,n){return $c(t.serverSyncTree_,e,n)||V.EMPTY_NODE}function Zc(t,e=t.transactionQueueTree_){if(e||Zo(t,e),Vs(e)){const n=bm(t,e);P(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&lS(t,mi(e),n)}else lm(e)&&Jo(e,n=>{Zc(t,n)})}function lS(t,e,n){const s=n.map(c=>c.currentWriteId),r=vm(t,e,s);let i=r;const o=r.hash();for(let c=0;c<n.length;c++){const u=n[c];P(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=qe(e,u.path);i=i.updateChild(d,u.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Qo(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,u=u.concat(qn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Zo(t,zc(t.transactionQueueTree_,e)),Zc(t,t.transactionQueueTree_),Ut(t.eventQueue_,e,u);for(let h=0;h<d.length;h++)Hs(d[h])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Ye("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}Xo(t,e)}},o)}function Xo(t,e){const n=ym(t,e),s=mi(n),r=bm(t,n);return cS(t,r,s),s}function cS(t,e,n){if(e.length===0)return;const s=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=qe(n,l.path);let u=!1,d;if(P(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,r=r.concat(qn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=XT)u=!0,d="maxretry",r=r.concat(qn(t.serverSyncTree_,l.currentWriteId,!0));else{const h=vm(t,l.path,o);l.currentInputSnapshot=h;const p=e[a].update(h.val());if(p!==void 0){Kc("transaction failed: Data returned ",p,l.path);let m=Oe(p);typeof p=="object"&&p!=null&&sn(p,".priority")||(m=m.updatePriority(h.getPriority()));const b=l.currentWriteId,A=Qc(t),R=om(m,h,A);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=R,l.currentWriteId=_m(t),o.splice(o.indexOf(b),1),r=r.concat(tm(t.serverSyncTree_,l.path,R,l.currentWriteId,l.applyLocally)),r=r.concat(qn(t.serverSyncTree_,b,!0))}else u=!0,d="nodata",r=r.concat(qn(t.serverSyncTree_,l.currentWriteId,!0))}Ut(t.eventQueue_,n,r),r=[],u&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(d),!1,null))))}Zo(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Hs(s[a]);Zc(t,t.transactionQueueTree_)}function ym(t,e){let n,s=t.transactionQueueTree_;for(n=K(e);n!==null&&Vs(s)===void 0;)s=zc(s,n),e=ge(e),n=K(e);return s}function bm(t,e){const n=[];return wm(t,e,n),n.sort((s,r)=>s.order-r.order),n}function wm(t,e,n){const s=Vs(e);if(s)for(let r=0;r<s.length;r++)n.push(s[r]);Jo(e,r=>{wm(t,r,n)})}function Zo(t,e){const n=Vs(e);if(n){let s=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[s]=n[r],s++);n.length=s,am(e,n.length>0?n:void 0)}Jo(e,s=>{Zo(t,s)})}function Em(t,e){const n=mi(ym(t,e)),s=zc(t.transactionQueueTree_,e);return HT(s,r=>{Ba(t,r)}),Ba(t,s),cm(s,r=>{Ba(t,r)}),n}function Ba(t,e){const n=Vs(e);if(n){const s=[];let r=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(P(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(P(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),r=r.concat(qn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?am(e,void 0):n.length=i+1,Ut(t.eventQueue_,mi(e),r);for(let o=0;o<s.length;o++)Hs(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uS(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let r=n[s];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function dS(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Ye(`Invalid query segment '${n}' in query '${t}'`)}return e}const eh=function(t,e){const n=hS(t),s=n.namespace;n.domain==="firebase.com"&&en(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&en("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||AE();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new bg(n.host,n.secure,s,r,e,"",s!==n.subdomain),path:new he(n.pathString)}},hS=function(t){let e="",n="",s="",r="",i="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(r=uS(t.substring(u,d)));const h=dS(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),i=s}"ns"in h&&(i=h.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:r,namespace:i}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const th="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",fS=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let r;const i=new Array(8);for(r=7;r>=0;r--)i[r]=th.charAt(n%64),n=Math.floor(n/64);P(n===0,"Cannot push at time == 0");let o=i.join("");if(s){for(r=11;r>=0&&e[r]===63;r--)e[r]=0;e[r]++}else for(r=0;r<12;r++)e[r]=Math.floor(Math.random()*64);for(r=0;r<12;r++)o+=th.charAt(e[r]);return P(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{constructor(e,n,s,r){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=r}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Se(this.snapshot.exportVal())}}class gS{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return P(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e,n,s,r){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=r}get key(){return J(this._path)?null:Pg(this._path)}get ref(){return new rn(this._repo,this._path)}get _queryIdentifier(){const e=Ud(this._queryParams),n=Tc(e);return n==="{}"?"default":n}get _queryObject(){return Ud(this._queryParams)}isEqual(e){if(e=Be(e),!(e instanceof eu))return!1;const n=this._repo===e._repo,s=Rc(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return n&&s&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+uC(this._path)}}class rn extends eu{constructor(e,n){super(e,n,new kc,!1)}get parent(){const e=Ng(this._path);return e===null?null:new rn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Qr{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new he(e),s=Xr(this.ref,e);return new Qr(this._node.getChild(n),s,Ee)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,r)=>e(new Qr(r,Xr(this.ref,s),Ee)))}hasChild(e){const n=new he(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ws(t,e){return t=Be(t),t._checkNotDeleted("ref"),e!==void 0?Xr(t._root,e):t._root}function Xr(t,e){return t=Be(t),K(t._path)===null?zT("child","path",e):fm("child","path",e),new rn(t._repo,Ie(t._path,e))}function OU(t,e){t=Be(t),Yc("push",t._path),hm("push",e,t._path,!0);const n=mm(t._repo),s=fS(n),r=Xr(t,s),i=Xr(t,s);let o;return e!=null?o=tu(i,e).then(()=>i):o=Promise.resolve(i),r.then=o.then.bind(o),r.catch=o.then.bind(o,void 0),r}function NU(t){return Yc("remove",t._path),tu(t,null)}function tu(t,e){t=Be(t),Yc("set",t._path),hm("set",e,t._path,!1);const n=new Vo;return sS(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function mS(t){t=Be(t);const e=new Cm(()=>{}),n=new ea(e);return nS(t._repo,t,n).then(s=>new Qr(s,new rn(t._repo,t._path),t._queryParams.getIndex()))}class ea{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new pS("value",this,new Qr(e.snapshotNode,new rn(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new gS(this,e,n):null}matches(e){return e instanceof ea?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function _S(t,e,n,s,r){let i;if(typeof s=="object"&&(i=void 0,r=s),typeof s=="function"&&(i=s),r&&r.onlyOnce){const l=n,c=(u,d)=>{Zd(t._repo,t,a),l(u,d)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new Cm(n,i||void 0),a=new ea(o);return iS(t._repo,t,a),()=>Zd(t._repo,t,a)}function Pl(t,e,n,s){return _S(t,"value",e,n,s)}bT(rn);ST(rn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vS="FIREBASE_DATABASE_EMULATOR_HOST",Ol={};let yS=!1;function bS(t,e,n,s){t.repoInfo_=new bg(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function wS(t,e,n,s,r){let i=s||t.options.databaseURL;i===void 0&&(t.options.projectId||en("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Fe("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=eh(i,r),a=o.repoInfo,l;typeof process<"u"&&bd&&(l=bd[vS]),l?(i=`http://${l}?ns=${a.namespace}`,o=eh(i,r),a=o.repoInfo):o.repoInfo.secure;const c=new UE(t.name,t.options,e);KT("Invalid Firebase Database URL",o),J(o.path)||en("Database URL must point to the root of a Firebase Database (not including a child path).");const u=CS(a,t,c,new FE(t.name,n));return new TS(u,t)}function ES(t,e){const n=Ol[e];(!n||n[t.key]!==t)&&en(`Database ${e}(${t.repoInfo_}) has already been deleted.`),oS(t),delete n[t.key]}function CS(t,e,n,s){let r=Ol[e.name];r||(r={},Ol[e.name]=r);let i=r[t.toURLString()];return i&&en("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new ZT(t,yS,n,s),r[t.toURLString()]=i,i}class TS{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(eS(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new rn(this._repo,Z())),this._rootInternal}_delete(){return this._rootInternal!==null&&(ES(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&en("Cannot call "+e+" on a deleted database.")}}function SS(t=ng(),e){const n=Cc(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=Qb("database");s&&IS(n,...s)}return n}function IS(t,e,n,s={}){t=Be(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&en("Cannot call useEmulator() after instance has already been initialized.");const r=t._repoInternal;let i;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&en('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),i=new ji(ji.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Xb(s.mockUserToken,t.app.options.projectId);i=new ji(o)}bS(r,e,n,i)}/**
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
 */function AS(t){wE(Bs),Ns(new Xn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return wS(s,r,i,n)},"PUBLIC").setMultipleInstances(!0)),Sn(wd,Ed,t),Sn(wd,Ed,"esm2017")}Qt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Qt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};AS();function nu(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Tm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const RS=Tm,Sm=new ui("auth","Firebase",Tm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wo=new wc("@firebase/auth");function PS(t,...e){wo.logLevel<=ue.WARN&&wo.warn(`Auth (${Bs}): ${t}`,...e)}function Hi(t,...e){wo.logLevel<=ue.ERROR&&wo.error(`Auth (${Bs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(t,...e){throw su(t,...e)}function xt(t,...e){return su(t,...e)}function Im(t,e,n){const s=Object.assign(Object.assign({},RS()),{[e]:n});return new ui("auth","Firebase",s).create(e,{appName:t.name})}function Xt(t){return Im(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function su(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Sm.create(t,...e)}function W(t,e,...n){if(!t)throw su(e,...n)}function zt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Hi(e),new Error(e)}function tn(t,e){t||zt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function OS(){return nh()==="http:"||nh()==="https:"}function nh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(OS()||ew()||"connection"in navigator)?navigator.onLine:!0}function kS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e,n){this.shortDelay=e,this.longDelay=n,tn(n>e,"Short delay should be less than long delay!"),this.isMobile=yc()||Jp()}get(){return NS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ru(t,e){tn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;zt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;zt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;zt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xS=new _i(3e4,6e4);function on(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function an(t,e,n,s,r={}){return Rm(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=$s(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},i);return Zb()||(c.referrerPolicy="no-referrer"),Am.fetch()(Pm(t,t.config.apiHost,n,a),c)})}async function Rm(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},DS),e);try{const r=new MS(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ki(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ki(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ki(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ki(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Im(t,u,c);Ct(t,u)}}catch(r){if(r instanceof xn)throw r;Ct(t,"network-request-failed",{message:String(r)})}}async function vi(t,e,n,s,r={}){const i=await an(t,e,n,s,r);return"mfaPendingCredential"in i&&Ct(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Pm(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?ru(t.config,r):`${t.config.apiScheme}://${r}`}function LS(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class MS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(xt(this.auth,"network-request-failed")),xS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ki(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=xt(t,e,s);return r.customData._tokenResponse=n,r}function sh(t){return t!==void 0&&t.enterprise!==void 0}class FS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return LS(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function US(t,e){return an(t,"GET","/v2/recaptchaConfig",on(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $S(t,e){return an(t,"POST","/v1/accounts:delete",e)}async function Om(t,e){return an(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function BS(t,e=!1){const n=Be(t),s=await n.getIdToken(e),r=iu(s);W(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:kr(ja(r.auth_time)),issuedAtTime:kr(ja(r.iat)),expirationTime:kr(ja(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ja(t){return Number(t)*1e3}function iu(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Hi("JWT malformed, contained fewer than 3 sections"),null;try{const r=so(n);return r?JSON.parse(r):(Hi("Failed to decode base64 JWT payload"),null)}catch(r){return Hi("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function rh(t){const e=iu(t);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof xn&&jS(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function jS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=kr(this.lastLoginAt),this.creationTime=kr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Eo(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Zr(t,Om(n,{idToken:s}));W(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Nm(i.providerUserInfo):[],a=WS(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new kl(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function VS(t){const e=Be(t);await Eo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function WS(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Nm(t){return t.map(e=>{var{providerId:n}=e,s=nu(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qS(t,e){const n=await Rm(t,{},async()=>{const s=$s({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Pm(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Am.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function GS(t,e){return an(t,"POST","/v2/accounts:revokeToken",on(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):rh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){W(e.length!==0,"internal-error");const n=rh(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await qS(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Ss;return s&&(W(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(W(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(W(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ss,this.toJSON())}_performRefresh(){return zt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(t,e){W(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Kt{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=nu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new HS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new kl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Zr(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return BS(this,e)}reload(){return VS(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Kt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Eo(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(kt(this.auth.app))return Promise.reject(Xt(this.auth));const e=await this.getIdToken();return await Zr(this,$S(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,l,c,u;const d=(s=n.displayName)!==null&&s!==void 0?s:void 0,h=(r=n.email)!==null&&r!==void 0?r:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,A=(c=n.createdAt)!==null&&c!==void 0?c:void 0,R=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:O,emailVerified:D,isAnonymous:B,providerData:ee,stsTokenManager:Q}=n;W(O&&Q,e,"internal-error");const ke=Ss.fromJSON(this.name,Q);W(typeof O=="string",e,"internal-error"),dn(d,e.name),dn(h,e.name),W(typeof D=="boolean",e,"internal-error"),W(typeof B=="boolean",e,"internal-error"),dn(p,e.name),dn(m,e.name),dn(_,e.name),dn(b,e.name),dn(A,e.name),dn(R,e.name);const je=new Kt({uid:O,auth:e,email:h,emailVerified:D,displayName:d,isAnonymous:B,photoURL:m,phoneNumber:p,tenantId:_,stsTokenManager:ke,createdAt:A,lastLoginAt:R});return ee&&Array.isArray(ee)&&(je.providerData=ee.map(lt=>Object.assign({},lt))),b&&(je._redirectEventId=b),je}static async _fromIdTokenResponse(e,n,s=!1){const r=new Ss;r.updateFromServerResponse(n);const i=new Kt({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Eo(i),i}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];W(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?Nm(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),a=new Ss;a.updateFromIdToken(s);const l=new Kt({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new kl(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ih=new Map;function Yt(t){tn(t instanceof Function,"Expected a class definition");let e=ih.get(t);return e?(tn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ih.set(t,e),e)}/**
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
 */class km{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}km.type="NONE";const Dl=km;/**
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
 */function Vi(t,e,n){return`firebase:${t}:${e}:${n}`}class Is{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Vi(this.userKey,r.apiKey,i),this.fullPersistenceKey=Vi("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Kt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Is(Yt(Dl),e,s);const r=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=r[0]||Yt(Dl);const o=Vi(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=Kt._fromJSON(e,u);c!==i&&(a=d),i=c;break}}catch{}const l=r.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Is(i,e,s):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Is(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Mm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Dm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Um(e))return"Blackberry";if($m(e))return"Webos";if(xm(e))return"Safari";if((e.includes("chrome/")||Lm(e))&&!e.includes("edge/"))return"Chrome";if(Fm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Dm(t=Ge()){return/firefox\//i.test(t)}function xm(t=Ge()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Lm(t=Ge()){return/crios\//i.test(t)}function Mm(t=Ge()){return/iemobile/i.test(t)}function Fm(t=Ge()){return/android/i.test(t)}function Um(t=Ge()){return/blackberry/i.test(t)}function $m(t=Ge()){return/webos/i.test(t)}function ou(t=Ge()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function zS(t=Ge()){var e;return ou(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function KS(){return tw()&&document.documentMode===10}function Bm(t=Ge()){return ou(t)||Fm(t)||$m(t)||Um(t)||/windows phone/i.test(t)||Mm(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jm(t,e=[]){let n;switch(t){case"Browser":n=oh(Ge());break;case"Worker":n=`${oh(Ge())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Bs}/${s}`}/**
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
 */class YS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function JS(t,e={}){return an(t,"GET","/v2/passwordPolicy",on(t,e))}/**
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
 */const QS=6;class XS{constructor(e){var n,s,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:QS,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,r,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(r=l.containsLowercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZS{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ah(this),this.idTokenSubscription=new ah(this),this.beforeStateQueue=new YS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Sm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Yt(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Is.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Om(this,{idToken:e}),s=await Kt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(kt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Eo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=kS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(kt(this.app))return Promise.reject(Xt(this));const n=e?Be(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return kt(this.app)?Promise.reject(Xt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return kt(this.app)?Promise.reject(Xt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Yt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await JS(this),n=new XS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ui("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await GS(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Yt(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await Is.create(this,[Yt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,r);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=jm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&PS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ln(t){return Be(t)}class ah{constructor(e){this.auth=e,this.observer=null,this.addObserver=uw(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ta={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function eI(t){ta=t}function Hm(t){return ta.loadJS(t)}function tI(){return ta.recaptchaEnterpriseScript}function nI(){return ta.gapiScript}function sI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class rI{constructor(){this.enterprise=new iI}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class iI{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const oI="recaptcha-enterprise",Vm="NO_RECAPTCHA";class aI{constructor(e){this.type=oI,this.auth=Ln(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{US(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new FS(l);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function r(i,o,a){const l=window.grecaptcha;sh(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(Vm)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new rI().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{s(this.auth).then(a=>{if(!n&&sh(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=tI();l.length!==0&&(l+=a),Hm(l).then(()=>{r(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function lh(t,e,n,s=!1,r=!1){const i=new aI(t);let o;if(r)o=Vm;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return s?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Co(t,e,n,s,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await lh(t,e,n,n==="getOobCode");return s(t,o)}else return s(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await lh(t,e,n,n==="getOobCode");return s(t,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lI(t,e){const n=Cc(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(io(i,e??{}))return r;Ct(r,"already-initialized")}return n.initialize({options:e})}function cI(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Yt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function uI(t,e,n){const s=Ln(t);W(s._canInitEmulator,s,"emulator-config-failed"),W(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=Wm(e),{host:o,port:a}=dI(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),hI()}function Wm(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function dI(t){const e=Wm(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:ch(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:ch(o)}}}function ch(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function hI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return zt("not implemented")}_getIdTokenResponse(e){return zt("not implemented")}_linkToIdToken(e,n){return zt("not implemented")}_getReauthenticationResolver(e){return zt("not implemented")}}async function fI(t,e){return an(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pI(t,e){return vi(t,"POST","/v1/accounts:signInWithPassword",on(t,e))}async function qm(t,e){return an(t,"POST","/v1/accounts:sendOobCode",on(t,e))}async function gI(t,e){return qm(t,e)}async function mI(t,e){return qm(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _I(t,e){return vi(t,"POST","/v1/accounts:signInWithEmailLink",on(t,e))}async function vI(t,e){return vi(t,"POST","/v1/accounts:signInWithEmailLink",on(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei extends au{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new ei(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new ei(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Co(e,n,"signInWithPassword",pI);case"emailLink":return _I(e,{email:this._email,oobCode:this._password});default:Ct(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Co(e,s,"signUpPassword",fI);case"emailLink":return vI(e,{idToken:n,email:this._email,oobCode:this._password});default:Ct(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function As(t,e){return vi(t,"POST","/v1/accounts:signInWithIdp",on(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yI="http://localhost";class ns extends au{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ns(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ct("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=nu(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new ns(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return As(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,As(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,As(e,n)}buildRequest(){const e={requestUri:yI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=$s(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bI(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function wI(t){const e=_r(vr(t)).link,n=e?_r(vr(e)).deep_link_id:null,s=_r(vr(t)).deep_link_id;return(s?_r(vr(s)).link:null)||s||n||e||t}class lu{constructor(e){var n,s,r,i,o,a;const l=_r(vr(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,d=bI((r=l.mode)!==null&&r!==void 0?r:null);W(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=wI(e);try{return new lu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(){this.providerId=qs.PROVIDER_ID}static credential(e,n){return ei._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=lu.parseLink(n);return W(s,"argument-error"),ei._fromEmailAndCode(e,s.code,s.tenantId)}}qs.PROVIDER_ID="password";qs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";qs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class yi extends Gm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn extends yi{constructor(){super("facebook.com")}static credential(e){return ns._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vn.credential(e.oauthAccessToken)}catch{return null}}}vn.FACEBOOK_SIGN_IN_METHOD="facebook.com";vn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn extends yi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ns._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return yn.credential(n,s)}catch{return null}}}yn.GOOGLE_SIGN_IN_METHOD="google.com";yn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends yi{constructor(){super("github.com")}static credential(e){return ns._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bn.credential(e.oauthAccessToken)}catch{return null}}}bn.GITHUB_SIGN_IN_METHOD="github.com";bn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends yi{constructor(){super("twitter.com")}static credential(e,n){return ns._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return wn.credential(n,s)}catch{return null}}}wn.TWITTER_SIGN_IN_METHOD="twitter.com";wn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EI(t,e){return vi(t,"POST","/v1/accounts:signUp",on(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Kt._fromIdTokenResponse(e,s,r),o=uh(s);return new ss({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=uh(s);return new ss({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function uh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To extends xn{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,To.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new To(e,n,s,r)}}function zm(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?To._fromErrorAndOperation(t,i,e,s):i})}async function CI(t,e,n=!1){const s=await Zr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ss._forOperation(t,"link",s)}/**
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
 */async function TI(t,e,n=!1){const{auth:s}=t;if(kt(s.app))return Promise.reject(Xt(s));const r="reauthenticate";try{const i=await Zr(t,zm(s,r,e,t),n);W(i.idToken,s,"internal-error");const o=iu(i.idToken);W(o,s,"internal-error");const{sub:a}=o;return W(t.uid===a,s,"user-mismatch"),ss._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ct(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Km(t,e,n=!1){if(kt(t.app))return Promise.reject(Xt(t));const s="signIn",r=await zm(t,s,e),i=await ss._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function SI(t,e){return Km(Ln(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ym(t){const e=Ln(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function II(t,e,n){const s=Ln(t);await Co(s,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",mI)}async function AI(t,e,n){if(kt(t.app))return Promise.reject(Xt(t));const s=Ln(t),o=await Co(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",EI).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Ym(t),l}),a=await ss._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function RI(t,e,n){return kt(t.app)?Promise.reject(Xt(t)):SI(Be(t),qs.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Ym(t),s})}async function dh(t,e){const n=Be(t),r={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()},{email:i}=await gI(n.auth,r);i!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hh(t,e){return Be(t).setPersistence(e)}function PI(t,e,n,s){return Be(t).onIdTokenChanged(e,n,s)}function OI(t,e,n){return Be(t).beforeAuthStateChanged(e,n)}const So="__sak";/**
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
 */class Jm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(So,"1"),this.storage.removeItem(So),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NI=1e3,kI=10;class Qm extends Jm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Bm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);KS()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,kI):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},NI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Qm.type="LOCAL";const Xm=Qm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm extends Jm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Zm.type="SESSION";const e_=Zm;/**
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
 */function DI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class na{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new na(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await DI(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}na.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cu(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class xI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=cu("",20);r.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(d){const h=d;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(h.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(){return window}function LI(t){Lt().location.href=t}/**
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
 */function t_(){return typeof Lt().WorkerGlobalScope<"u"&&typeof Lt().importScripts=="function"}async function MI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function FI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function UI(){return t_()?self:null}/**
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
 */const n_="firebaseLocalStorageDb",$I=1,Io="firebaseLocalStorage",s_="fbase_key";class bi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function sa(t,e){return t.transaction([Io],e?"readwrite":"readonly").objectStore(Io)}function BI(){const t=indexedDB.deleteDatabase(n_);return new bi(t).toPromise()}function xl(){const t=indexedDB.open(n_,$I);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Io,{keyPath:s_})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Io)?e(s):(s.close(),await BI(),e(await xl()))})})}async function fh(t,e,n){const s=sa(t,!0).put({[s_]:e,value:n});return new bi(s).toPromise()}async function jI(t,e){const n=sa(t,!1).get(e),s=await new bi(n).toPromise();return s===void 0?null:s.value}function ph(t,e){const n=sa(t,!0).delete(e);return new bi(n).toPromise()}const HI=800,VI=3;class r_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>VI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return t_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=na._getInstance(UI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await MI(),!this.activeServiceWorker)return;this.sender=new xI(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||FI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xl();return await fh(e,So,"1"),await ph(e,So),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>fh(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>jI(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ph(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=sa(r,!1).getAll();return new bi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),HI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}r_.type="LOCAL";const WI=r_;new _i(3e4,6e4);/**
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
 */function qI(t,e){return e?Yt(e):(W(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class uu extends au{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return As(e,this._buildIdpRequest())}_linkToIdToken(e,n){return As(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return As(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function GI(t){return Km(t.auth,new uu(t),t.bypassAuthState)}function zI(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),TI(n,new uu(t),t.bypassAuthState)}async function KI(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),CI(n,new uu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return GI;case"linkViaPopup":case"linkViaRedirect":return KI;case"reauthViaPopup":case"reauthViaRedirect":return zI;default:Ct(this.auth,"internal-error")}}resolve(e){tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YI=new _i(2e3,1e4);class ms extends i_{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,ms.currentPopupAction&&ms.currentPopupAction.cancel(),ms.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){tn(this.filter.length===1,"Popup operations only handle one event");const e=cu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(xt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(xt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ms.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(xt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,YI.get())};e()}}ms.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI="pendingRedirect",Wi=new Map;class QI extends i_{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Wi.get(this.auth._key());if(!e){try{const s=await XI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Wi.set(this.auth._key(),e)}return this.bypassAuthState||Wi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function XI(t,e){const n=tA(e),s=eA(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function ZI(t,e){Wi.set(t._key(),e)}function eA(t){return Yt(t._redirectPersistence)}function tA(t){return Vi(JI,t.config.apiKey,t.name)}async function nA(t,e,n=!1){if(kt(t.app))return Promise.reject(Xt(t));const s=Ln(t),r=qI(s,e),o=await new QI(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sA=10*60*1e3;class rA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!iA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!o_(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(xt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=sA&&this.cachedEventUids.clear(),this.cachedEventUids.has(gh(e))}saveEventToCache(e){this.cachedEventUids.add(gh(e)),this.lastProcessedEventTime=Date.now()}}function gh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function o_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function iA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return o_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oA(t,e={}){return an(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,lA=/^https?/;async function cA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await oA(t);for(const n of e)try{if(uA(n))return}catch{}Ct(t,"unauthorized-domain")}function uA(t){const e=Nl(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!lA.test(n))return!1;if(aA.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const dA=new _i(3e4,6e4);function mh(){const t=Lt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function hA(t){return new Promise((e,n)=>{var s,r,i;function o(){mh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{mh(),n(xt(t,"network-request-failed"))},timeout:dA.get()})}if(!((r=(s=Lt().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Lt().gapi)===null||i===void 0)&&i.load)o();else{const a=sI("iframefcb");return Lt()[a]=()=>{gapi.load?o():n(xt(t,"network-request-failed"))},Hm(`${nI()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw qi=null,e})}let qi=null;function fA(t){return qi=qi||hA(t),qi}/**
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
 */const pA=new _i(5e3,15e3),gA="__/auth/iframe",mA="emulator/auth/iframe",_A={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},vA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function yA(t){const e=t.config;W(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ru(e,mA):`https://${t.config.authDomain}/${gA}`,s={apiKey:e.apiKey,appName:t.name,v:Bs},r=vA.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${$s(s).slice(1)}`}async function bA(t){const e=await fA(t),n=Lt().gapi;return W(n,t,"internal-error"),e.open({where:document.body,url:yA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_A,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=xt(t,"network-request-failed"),a=Lt().setTimeout(()=>{i(o)},pA.get());function l(){Lt().clearTimeout(a),r(s)}s.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const wA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},EA=500,CA=600,TA="_blank",SA="http://localhost";class _h{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function IA(t,e,n,s=EA,r=CA){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},wA),{width:s.toString(),height:r.toString(),top:i,left:o}),c=Ge().toLowerCase();n&&(a=Lm(c)?TA:n),Dm(c)&&(e=e||SA,l.scrollbars="yes");const u=Object.entries(l).reduce((h,[p,m])=>`${h}${p}=${m},`,"");if(zS(c)&&a!=="_self")return AA(e||"",a),new _h(null);const d=window.open(e||"",a,u);W(d,t,"popup-blocked");try{d.focus()}catch{}return new _h(d)}function AA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const RA="__/auth/handler",PA="emulator/auth/handler",OA=encodeURIComponent("fac");async function vh(t,e,n,s,r,i){W(t.config.authDomain,t,"auth-domain-config-required"),W(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Bs,eventId:r};if(e instanceof Gm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",fl(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries({}))o[u]=d}if(e instanceof yi){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${OA}=${encodeURIComponent(l)}`:"";return`${NA(t)}?${$s(a).slice(1)}${c}`}function NA({config:t}){return t.emulator?ru(t,PA):`https://${t.authDomain}/${RA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ha="webStorageSupport";class kA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=e_,this._completeRedirectFn=nA,this._overrideRedirectResult=ZI}async _openPopup(e,n,s,r){var i;tn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await vh(e,n,s,Nl(),r);return IA(e,o,cu())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await vh(e,n,s,Nl(),r);return LI(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(tn(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await bA(e),s=new rA(e);return n.register("authEvent",r=>(W(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ha,{type:Ha},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Ha];o!==void 0&&n(!!o),Ct(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=cA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Bm()||xm()||ou()}}const DA=kA;var yh="@firebase/auth",bh="1.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function MA(t){Ns(new Xn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;W(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jm(t)},c=new ZS(s,r,i,l);return cI(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Ns(new Xn("auth-internal",e=>{const n=Ln(e.getProvider("auth").getImmediate());return(s=>new xA(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Sn(yh,bh,LA(t)),Sn(yh,bh,"esm2017")}/**
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
 */const FA=5*60,UA=Yp("authIdTokenMaxAge")||FA;let wh=null;const $A=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>UA)return;const r=n==null?void 0:n.token;wh!==r&&(wh=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function ti(t=ng()){const e=Cc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=lI(t,{popupRedirectResolver:DA,persistence:[WI,Xm,e_]}),s=Yp("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=$A(i.toString());OI(n,o,()=>o(n.currentUser)),PI(n,a=>o(a))}}const r=zp("auth");return r&&uI(n,`http://${r}`),n}function BA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}eI({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=xt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",BA().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});MA("Browser");var jA="firebase",HA="11.0.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Sn(jA,HA,"app");const VA={apiKey:"AIzaSyDU95egjb7rapaUJuVJYu0ZeSbP0OLaeCE",authDomain:"autolearn-members.asia-southeast1.firebaseapp.com",projectId:"autolearn-members",storageBucket:"autolearn-members.appspot.com",messagingSenderId:"535565819374",appId:"1:535565819374:web:ccfe472f513439f3a002ff",measurementId:"G-NTHZSSX71G",databaseURL:"https://autolearn-members-default-rtdb.asia-southeast1.firebasedatabase.app/"},du=tg(VA);ti(du);const Gs=SS(du),WA=Ws(Gs,"projects"),qA=Ws(Gs,"supervisors"),GA=Ws(Gs,"users"),kU=Ws(Gs,"changelogs"),DU=Ws(Gs,"actions");var Di=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function zA(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function KA(t,e,n){var s;return n(t,function(r,i,o){if(e(r,i,o))return s=i,!1}),s}var YA=KA;function JA(t){return function(e,n,s){for(var r=-1,i=Object(e),o=s(e),a=o.length;a--;){var l=o[t?a:++r];if(n(i[l],l,i)===!1)break}return e}}var QA=JA,XA=QA,ZA=XA(),eR=ZA;function tR(t,e){for(var n=-1,s=Array(t);++n<t;)s[n]=e(n);return s}var nR=tR,sR=typeof Di=="object"&&Di&&Di.Object===Object&&Di,a_=sR,rR=a_,iR=typeof self=="object"&&self&&self.Object===Object&&self,oR=rR||iR||Function("return this")(),ln=oR,aR=ln,lR=aR.Symbol,ra=lR,Eh=ra,l_=Object.prototype,cR=l_.hasOwnProperty,uR=l_.toString,dr=Eh?Eh.toStringTag:void 0;function dR(t){var e=cR.call(t,dr),n=t[dr];try{t[dr]=void 0;var s=!0}catch{}var r=uR.call(t);return s&&(e?t[dr]=n:delete t[dr]),r}var hR=dR,fR=Object.prototype,pR=fR.toString;function gR(t){return pR.call(t)}var mR=gR,Ch=ra,_R=hR,vR=mR,yR="[object Null]",bR="[object Undefined]",Th=Ch?Ch.toStringTag:void 0;function wR(t){return t==null?t===void 0?bR:yR:Th&&Th in Object(t)?_R(t):vR(t)}var wi=wR;function ER(t){return t!=null&&typeof t=="object"}var Ei=ER,CR=wi,TR=Ei,SR="[object Arguments]";function IR(t){return TR(t)&&CR(t)==SR}var AR=IR,Sh=AR,RR=Ei,c_=Object.prototype,PR=c_.hasOwnProperty,OR=c_.propertyIsEnumerable,NR=Sh(function(){return arguments}())?Sh:function(t){return RR(t)&&PR.call(t,"callee")&&!OR.call(t,"callee")},u_=NR,kR=Array.isArray,Mn=kR,Ao={exports:{}};function DR(){return!1}var xR=DR;Ao.exports;(function(t,e){var n=ln,s=xR,r=e&&!e.nodeType&&e,i=r&&!0&&t&&!t.nodeType&&t,o=i&&i.exports===r,a=o?n.Buffer:void 0,l=a?a.isBuffer:void 0,c=l||s;t.exports=c})(Ao,Ao.exports);var d_=Ao.exports,LR=9007199254740991,MR=/^(?:0|[1-9]\d*)$/;function FR(t,e){var n=typeof t;return e=e??LR,!!e&&(n=="number"||n!="symbol"&&MR.test(t))&&t>-1&&t%1==0&&t<e}var h_=FR,UR=9007199254740991;function $R(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=UR}var hu=$R,BR=wi,jR=hu,HR=Ei,VR="[object Arguments]",WR="[object Array]",qR="[object Boolean]",GR="[object Date]",zR="[object Error]",KR="[object Function]",YR="[object Map]",JR="[object Number]",QR="[object Object]",XR="[object RegExp]",ZR="[object Set]",e0="[object String]",t0="[object WeakMap]",n0="[object ArrayBuffer]",s0="[object DataView]",r0="[object Float32Array]",i0="[object Float64Array]",o0="[object Int8Array]",a0="[object Int16Array]",l0="[object Int32Array]",c0="[object Uint8Array]",u0="[object Uint8ClampedArray]",d0="[object Uint16Array]",h0="[object Uint32Array]",_e={};_e[r0]=_e[i0]=_e[o0]=_e[a0]=_e[l0]=_e[c0]=_e[u0]=_e[d0]=_e[h0]=!0;_e[VR]=_e[WR]=_e[n0]=_e[qR]=_e[s0]=_e[GR]=_e[zR]=_e[KR]=_e[YR]=_e[JR]=_e[QR]=_e[XR]=_e[ZR]=_e[e0]=_e[t0]=!1;function f0(t){return HR(t)&&jR(t.length)&&!!_e[BR(t)]}var p0=f0;function g0(t){return function(e){return t(e)}}var m0=g0,Ro={exports:{}};Ro.exports;(function(t,e){var n=a_,s=e&&!e.nodeType&&e,r=s&&!0&&t&&!t.nodeType&&t,i=r&&r.exports===s,o=i&&n.process,a=function(){try{var l=r&&r.require&&r.require("util").types;return l||o&&o.binding&&o.binding("util")}catch{}}();t.exports=a})(Ro,Ro.exports);var _0=Ro.exports,v0=p0,y0=m0,Ih=_0,Ah=Ih&&Ih.isTypedArray,b0=Ah?y0(Ah):v0,f_=b0,w0=nR,E0=u_,C0=Mn,T0=d_,S0=h_,I0=f_,A0=Object.prototype,R0=A0.hasOwnProperty;function P0(t,e){var n=C0(t),s=!n&&E0(t),r=!n&&!s&&T0(t),i=!n&&!s&&!r&&I0(t),o=n||s||r||i,a=o?w0(t.length,String):[],l=a.length;for(var c in t)(e||R0.call(t,c))&&!(o&&(c=="length"||r&&(c=="offset"||c=="parent")||i&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||S0(c,l)))&&a.push(c);return a}var O0=P0,N0=Object.prototype;function k0(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||N0;return t===n}var D0=k0;function x0(t,e){return function(n){return t(e(n))}}var L0=x0,M0=L0,F0=M0(Object.keys,Object),U0=F0,$0=D0,B0=U0,j0=Object.prototype,H0=j0.hasOwnProperty;function V0(t){if(!$0(t))return B0(t);var e=[];for(var n in Object(t))H0.call(t,n)&&n!="constructor"&&e.push(n);return e}var W0=V0;function q0(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var fu=q0,G0=wi,z0=fu,K0="[object AsyncFunction]",Y0="[object Function]",J0="[object GeneratorFunction]",Q0="[object Proxy]";function X0(t){if(!z0(t))return!1;var e=G0(t);return e==Y0||e==J0||e==K0||e==Q0}var p_=X0,Z0=p_,eP=hu;function tP(t){return t!=null&&eP(t.length)&&!Z0(t)}var nP=tP,sP=O0,rP=W0,iP=nP;function oP(t){return iP(t)?sP(t):rP(t)}var pu=oP,aP=eR,lP=pu;function cP(t,e){return t&&aP(t,e,lP)}var uP=cP;function dP(){this.__data__=[],this.size=0}var hP=dP;function fP(t,e){return t===e||t!==t&&e!==e}var g_=fP,pP=g_;function gP(t,e){for(var n=t.length;n--;)if(pP(t[n][0],e))return n;return-1}var ia=gP,mP=ia,_P=Array.prototype,vP=_P.splice;function yP(t){var e=this.__data__,n=mP(e,t);if(n<0)return!1;var s=e.length-1;return n==s?e.pop():vP.call(e,n,1),--this.size,!0}var bP=yP,wP=ia;function EP(t){var e=this.__data__,n=wP(e,t);return n<0?void 0:e[n][1]}var CP=EP,TP=ia;function SP(t){return TP(this.__data__,t)>-1}var IP=SP,AP=ia;function RP(t,e){var n=this.__data__,s=AP(n,t);return s<0?(++this.size,n.push([t,e])):n[s][1]=e,this}var PP=RP,OP=hP,NP=bP,kP=CP,DP=IP,xP=PP;function zs(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var s=t[e];this.set(s[0],s[1])}}zs.prototype.clear=OP;zs.prototype.delete=NP;zs.prototype.get=kP;zs.prototype.has=DP;zs.prototype.set=xP;var oa=zs,LP=oa;function MP(){this.__data__=new LP,this.size=0}var FP=MP;function UP(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}var $P=UP;function BP(t){return this.__data__.get(t)}var jP=BP;function HP(t){return this.__data__.has(t)}var VP=HP,WP=ln,qP=WP["__core-js_shared__"],GP=qP,Va=GP,Rh=function(){var t=/[^.]+$/.exec(Va&&Va.keys&&Va.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function zP(t){return!!Rh&&Rh in t}var KP=zP,YP=Function.prototype,JP=YP.toString;function QP(t){if(t!=null){try{return JP.call(t)}catch{}try{return t+""}catch{}}return""}var m_=QP,XP=p_,ZP=KP,eO=fu,tO=m_,nO=/[\\^$.*+?()[\]{}|]/g,sO=/^\[object .+?Constructor\]$/,rO=Function.prototype,iO=Object.prototype,oO=rO.toString,aO=iO.hasOwnProperty,lO=RegExp("^"+oO.call(aO).replace(nO,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function cO(t){if(!eO(t)||ZP(t))return!1;var e=XP(t)?lO:sO;return e.test(tO(t))}var uO=cO;function dO(t,e){return t==null?void 0:t[e]}var hO=dO,fO=uO,pO=hO;function gO(t,e){var n=pO(t,e);return fO(n)?n:void 0}var Ks=gO,mO=Ks,_O=ln,vO=mO(_O,"Map"),gu=vO,yO=Ks,bO=yO(Object,"create"),aa=bO,Ph=aa;function wO(){this.__data__=Ph?Ph(null):{},this.size=0}var EO=wO;function CO(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var TO=CO,SO=aa,IO="__lodash_hash_undefined__",AO=Object.prototype,RO=AO.hasOwnProperty;function PO(t){var e=this.__data__;if(SO){var n=e[t];return n===IO?void 0:n}return RO.call(e,t)?e[t]:void 0}var OO=PO,NO=aa,kO=Object.prototype,DO=kO.hasOwnProperty;function xO(t){var e=this.__data__;return NO?e[t]!==void 0:DO.call(e,t)}var LO=xO,MO=aa,FO="__lodash_hash_undefined__";function UO(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=MO&&e===void 0?FO:e,this}var $O=UO,BO=EO,jO=TO,HO=OO,VO=LO,WO=$O;function Ys(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var s=t[e];this.set(s[0],s[1])}}Ys.prototype.clear=BO;Ys.prototype.delete=jO;Ys.prototype.get=HO;Ys.prototype.has=VO;Ys.prototype.set=WO;var qO=Ys,Oh=qO,GO=oa,zO=gu;function KO(){this.size=0,this.__data__={hash:new Oh,map:new(zO||GO),string:new Oh}}var YO=KO;function JO(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}var QO=JO,XO=QO;function ZO(t,e){var n=t.__data__;return XO(e)?n[typeof e=="string"?"string":"hash"]:n.map}var la=ZO,eN=la;function tN(t){var e=eN(this,t).delete(t);return this.size-=e?1:0,e}var nN=tN,sN=la;function rN(t){return sN(this,t).get(t)}var iN=rN,oN=la;function aN(t){return oN(this,t).has(t)}var lN=aN,cN=la;function uN(t,e){var n=cN(this,t),s=n.size;return n.set(t,e),this.size+=n.size==s?0:1,this}var dN=uN,hN=YO,fN=nN,pN=iN,gN=lN,mN=dN;function Js(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var s=t[e];this.set(s[0],s[1])}}Js.prototype.clear=hN;Js.prototype.delete=fN;Js.prototype.get=pN;Js.prototype.has=gN;Js.prototype.set=mN;var mu=Js,_N=oa,vN=gu,yN=mu,bN=200;function wN(t,e){var n=this.__data__;if(n instanceof _N){var s=n.__data__;if(!vN||s.length<bN-1)return s.push([t,e]),this.size=++n.size,this;n=this.__data__=new yN(s)}return n.set(t,e),this.size=n.size,this}var EN=wN,CN=oa,TN=FP,SN=$P,IN=jP,AN=VP,RN=EN;function Qs(t){var e=this.__data__=new CN(t);this.size=e.size}Qs.prototype.clear=TN;Qs.prototype.delete=SN;Qs.prototype.get=IN;Qs.prototype.has=AN;Qs.prototype.set=RN;var __=Qs,PN="__lodash_hash_undefined__";function ON(t){return this.__data__.set(t,PN),this}var NN=ON;function kN(t){return this.__data__.has(t)}var DN=kN,xN=mu,LN=NN,MN=DN;function Po(t){var e=-1,n=t==null?0:t.length;for(this.__data__=new xN;++e<n;)this.add(t[e])}Po.prototype.add=Po.prototype.push=LN;Po.prototype.has=MN;var FN=Po;function UN(t,e){for(var n=-1,s=t==null?0:t.length;++n<s;)if(e(t[n],n,t))return!0;return!1}var $N=UN;function BN(t,e){return t.has(e)}var jN=BN,HN=FN,VN=$N,WN=jN,qN=1,GN=2;function zN(t,e,n,s,r,i){var o=n&qN,a=t.length,l=e.length;if(a!=l&&!(o&&l>a))return!1;var c=i.get(t),u=i.get(e);if(c&&u)return c==e&&u==t;var d=-1,h=!0,p=n&GN?new HN:void 0;for(i.set(t,e),i.set(e,t);++d<a;){var m=t[d],_=e[d];if(s)var b=o?s(_,m,d,e,t,i):s(m,_,d,t,e,i);if(b!==void 0){if(b)continue;h=!1;break}if(p){if(!VN(e,function(A,R){if(!WN(p,R)&&(m===A||r(m,A,n,s,i)))return p.push(R)})){h=!1;break}}else if(!(m===_||r(m,_,n,s,i))){h=!1;break}}return i.delete(t),i.delete(e),h}var v_=zN,KN=ln,YN=KN.Uint8Array,JN=YN;function QN(t){var e=-1,n=Array(t.size);return t.forEach(function(s,r){n[++e]=[r,s]}),n}var XN=QN;function ZN(t){var e=-1,n=Array(t.size);return t.forEach(function(s){n[++e]=s}),n}var e1=ZN,Nh=ra,kh=JN,t1=g_,n1=v_,s1=XN,r1=e1,i1=1,o1=2,a1="[object Boolean]",l1="[object Date]",c1="[object Error]",u1="[object Map]",d1="[object Number]",h1="[object RegExp]",f1="[object Set]",p1="[object String]",g1="[object Symbol]",m1="[object ArrayBuffer]",_1="[object DataView]",Dh=Nh?Nh.prototype:void 0,Wa=Dh?Dh.valueOf:void 0;function v1(t,e,n,s,r,i,o){switch(n){case _1:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case m1:return!(t.byteLength!=e.byteLength||!i(new kh(t),new kh(e)));case a1:case l1:case d1:return t1(+t,+e);case c1:return t.name==e.name&&t.message==e.message;case h1:case p1:return t==e+"";case u1:var a=s1;case f1:var l=s&i1;if(a||(a=r1),t.size!=e.size&&!l)return!1;var c=o.get(t);if(c)return c==e;s|=o1,o.set(t,e);var u=n1(a(t),a(e),s,r,i,o);return o.delete(t),u;case g1:if(Wa)return Wa.call(t)==Wa.call(e)}return!1}var y1=v1;function b1(t,e){for(var n=-1,s=e.length,r=t.length;++n<s;)t[r+n]=e[n];return t}var w1=b1,E1=w1,C1=Mn;function T1(t,e,n){var s=e(t);return C1(t)?s:E1(s,n(t))}var S1=T1;function I1(t,e){for(var n=-1,s=t==null?0:t.length,r=0,i=[];++n<s;){var o=t[n];e(o,n,t)&&(i[r++]=o)}return i}var A1=I1;function R1(){return[]}var P1=R1,O1=A1,N1=P1,k1=Object.prototype,D1=k1.propertyIsEnumerable,xh=Object.getOwnPropertySymbols,x1=xh?function(t){return t==null?[]:(t=Object(t),O1(xh(t),function(e){return D1.call(t,e)}))}:N1,L1=x1,M1=S1,F1=L1,U1=pu;function $1(t){return M1(t,U1,F1)}var B1=$1,Lh=B1,j1=1,H1=Object.prototype,V1=H1.hasOwnProperty;function W1(t,e,n,s,r,i){var o=n&j1,a=Lh(t),l=a.length,c=Lh(e),u=c.length;if(l!=u&&!o)return!1;for(var d=l;d--;){var h=a[d];if(!(o?h in e:V1.call(e,h)))return!1}var p=i.get(t),m=i.get(e);if(p&&m)return p==e&&m==t;var _=!0;i.set(t,e),i.set(e,t);for(var b=o;++d<l;){h=a[d];var A=t[h],R=e[h];if(s)var O=o?s(R,A,h,e,t,i):s(A,R,h,t,e,i);if(!(O===void 0?A===R||r(A,R,n,s,i):O)){_=!1;break}b||(b=h=="constructor")}if(_&&!b){var D=t.constructor,B=e.constructor;D!=B&&"constructor"in t&&"constructor"in e&&!(typeof D=="function"&&D instanceof D&&typeof B=="function"&&B instanceof B)&&(_=!1)}return i.delete(t),i.delete(e),_}var q1=W1,G1=Ks,z1=ln,K1=G1(z1,"DataView"),Y1=K1,J1=Ks,Q1=ln,X1=J1(Q1,"Promise"),Z1=X1,ek=Ks,tk=ln,nk=ek(tk,"Set"),sk=nk,rk=Ks,ik=ln,ok=rk(ik,"WeakMap"),ak=ok,Ll=Y1,Ml=gu,Fl=Z1,Ul=sk,$l=ak,y_=wi,Xs=m_,Mh="[object Map]",lk="[object Object]",Fh="[object Promise]",Uh="[object Set]",$h="[object WeakMap]",Bh="[object DataView]",ck=Xs(Ll),uk=Xs(Ml),dk=Xs(Fl),hk=Xs(Ul),fk=Xs($l),Vn=y_;(Ll&&Vn(new Ll(new ArrayBuffer(1)))!=Bh||Ml&&Vn(new Ml)!=Mh||Fl&&Vn(Fl.resolve())!=Fh||Ul&&Vn(new Ul)!=Uh||$l&&Vn(new $l)!=$h)&&(Vn=function(t){var e=y_(t),n=e==lk?t.constructor:void 0,s=n?Xs(n):"";if(s)switch(s){case ck:return Bh;case uk:return Mh;case dk:return Fh;case hk:return Uh;case fk:return $h}return e});var pk=Vn,qa=__,gk=v_,mk=y1,_k=q1,jh=pk,Hh=Mn,Vh=d_,vk=f_,yk=1,Wh="[object Arguments]",qh="[object Array]",xi="[object Object]",bk=Object.prototype,Gh=bk.hasOwnProperty;function wk(t,e,n,s,r,i){var o=Hh(t),a=Hh(e),l=o?qh:jh(t),c=a?qh:jh(e);l=l==Wh?xi:l,c=c==Wh?xi:c;var u=l==xi,d=c==xi,h=l==c;if(h&&Vh(t)){if(!Vh(e))return!1;o=!0,u=!1}if(h&&!u)return i||(i=new qa),o||vk(t)?gk(t,e,n,s,r,i):mk(t,e,l,n,s,r,i);if(!(n&yk)){var p=u&&Gh.call(t,"__wrapped__"),m=d&&Gh.call(e,"__wrapped__");if(p||m){var _=p?t.value():t,b=m?e.value():e;return i||(i=new qa),r(_,b,n,s,i)}}return h?(i||(i=new qa),_k(t,e,n,s,r,i)):!1}var Ek=wk,Ck=Ek,zh=Ei;function b_(t,e,n,s,r){return t===e?!0:t==null||e==null||!zh(t)&&!zh(e)?t!==t&&e!==e:Ck(t,e,n,s,b_,r)}var w_=b_,Tk=__,Sk=w_,Ik=1,Ak=2;function Rk(t,e,n,s){var r=n.length,i=r,o=!s;if(t==null)return!i;for(t=Object(t);r--;){var a=n[r];if(o&&a[2]?a[1]!==t[a[0]]:!(a[0]in t))return!1}for(;++r<i;){a=n[r];var l=a[0],c=t[l],u=a[1];if(o&&a[2]){if(c===void 0&&!(l in t))return!1}else{var d=new Tk;if(s)var h=s(c,u,l,t,e,d);if(!(h===void 0?Sk(u,c,Ik|Ak,s,d):h))return!1}}return!0}var Pk=Rk,Ok=fu;function Nk(t){return t===t&&!Ok(t)}var E_=Nk,kk=E_,Dk=pu;function xk(t){for(var e=Dk(t),n=e.length;n--;){var s=e[n],r=t[s];e[n]=[s,r,kk(r)]}return e}var Lk=xk;function Mk(t,e){return function(n){return n==null?!1:n[t]===e&&(e!==void 0||t in Object(n))}}var C_=Mk,Fk=Pk,Uk=Lk,$k=C_;function Bk(t){var e=Uk(t);return e.length==1&&e[0][2]?$k(e[0][0],e[0][1]):function(n){return n===t||Fk(n,t,e)}}var jk=Bk,Hk=wi,Vk=Ei,Wk="[object Symbol]";function qk(t){return typeof t=="symbol"||Vk(t)&&Hk(t)==Wk}var _u=qk,Gk=Mn,zk=_u,Kk=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Yk=/^\w*$/;function Jk(t,e){if(Gk(t))return!1;var n=typeof t;return n=="number"||n=="symbol"||n=="boolean"||t==null||zk(t)?!0:Yk.test(t)||!Kk.test(t)||e!=null&&t in Object(e)}var vu=Jk,T_=mu,Qk="Expected a function";function yu(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(Qk);var n=function(){var s=arguments,r=e?e.apply(this,s):s[0],i=n.cache;if(i.has(r))return i.get(r);var o=t.apply(this,s);return n.cache=i.set(r,o)||i,o};return n.cache=new(yu.Cache||T_),n}yu.Cache=T_;var Xk=yu,Zk=Xk,eD=500;function tD(t){var e=Zk(t,function(s){return n.size===eD&&n.clear(),s}),n=e.cache;return e}var nD=tD,sD=nD,rD=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,iD=/\\(\\)?/g,oD=sD(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(rD,function(n,s,r,i){e.push(r?i.replace(iD,"$1"):s||n)}),e}),aD=oD;function lD(t,e){for(var n=-1,s=t==null?0:t.length,r=Array(s);++n<s;)r[n]=e(t[n],n,t);return r}var cD=lD,Kh=ra,uD=cD,dD=Mn,hD=_u,fD=1/0,Yh=Kh?Kh.prototype:void 0,Jh=Yh?Yh.toString:void 0;function S_(t){if(typeof t=="string")return t;if(dD(t))return uD(t,S_)+"";if(hD(t))return Jh?Jh.call(t):"";var e=t+"";return e=="0"&&1/t==-fD?"-0":e}var pD=S_,gD=pD;function mD(t){return t==null?"":gD(t)}var _D=mD,vD=Mn,yD=vu,bD=aD,wD=_D;function ED(t,e){return vD(t)?t:yD(t,e)?[t]:bD(wD(t))}var I_=ED,CD=_u,TD=1/0;function SD(t){if(typeof t=="string"||CD(t))return t;var e=t+"";return e=="0"&&1/t==-TD?"-0":e}var ca=SD,ID=I_,AD=ca;function RD(t,e){e=ID(e,t);for(var n=0,s=e.length;t!=null&&n<s;)t=t[AD(e[n++])];return n&&n==s?t:void 0}var A_=RD,PD=A_;function OD(t,e,n){var s=t==null?void 0:PD(t,e);return s===void 0?n:s}var ND=OD;function kD(t,e){return t!=null&&e in Object(t)}var DD=kD,xD=I_,LD=u_,MD=Mn,FD=h_,UD=hu,$D=ca;function BD(t,e,n){e=xD(e,t);for(var s=-1,r=e.length,i=!1;++s<r;){var o=$D(e[s]);if(!(i=t!=null&&n(t,o)))break;t=t[o]}return i||++s!=r?i:(r=t==null?0:t.length,!!r&&UD(r)&&FD(o,r)&&(MD(t)||LD(t)))}var jD=BD,HD=DD,VD=jD;function WD(t,e){return t!=null&&VD(t,e,HD)}var qD=WD,GD=w_,zD=ND,KD=qD,YD=vu,JD=E_,QD=C_,XD=ca,ZD=1,ex=2;function tx(t,e){return YD(t)&&JD(e)?QD(XD(t),e):function(n){var s=zD(n,t);return s===void 0&&s===e?KD(n,t):GD(e,s,ZD|ex)}}var nx=tx;function sx(t){return t}var rx=sx;function ix(t){return function(e){return e==null?void 0:e[t]}}var ox=ix,ax=A_;function lx(t){return function(e){return ax(e,t)}}var cx=lx,ux=ox,dx=cx,hx=vu,fx=ca;function px(t){return hx(t)?ux(fx(t)):dx(t)}var gx=px,mx=jk,_x=nx,vx=rx,yx=Mn,bx=gx;function wx(t){return typeof t=="function"?t:t==null?vx:typeof t=="object"?yx(t)?_x(t[0],t[1]):mx(t):bx(t)}var Ex=wx,Cx=YA,Tx=uP,Sx=Ex;function Ix(t,e){return Cx(t,Sx(e),Tx)}var Ax=Ix,Rx=function(){function t(e,n){for(var s=0;s<n.length;s++){var r=n[s];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,s){return n&&t(e.prototype,n),s&&t(e,s),e}}();function Px(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var Ox=Ax,Nx={messenger:/\bFB[\w_]+\/(Messenger|MESSENGER)/,facebook:/\bFB[\w_]+\//,twitter:/\bTwitter/i,line:/\bLine\//i,wechat:/\bMicroMessenger\//i,puffin:/\bPuffin/i,miui:/\bMiuiBrowser\//i,instagram:/\bInstagram/i,chrome:/\bCrMo\b|CriOS|Android.*Chrome\/[.0-9]* (Mobile)?/,safari:/Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari/,ie:/IEMobile|MSIEMobile/,firefox:/fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS/},kx=function(){function t(e){Px(this,t),this.ua="",this.ua=e}return Rx(t,[{key:"browser",get:function(){var n=this;return Ox(Nx,function(s){return s.test(n.ua)})||"other"}},{key:"isMobile",get:function(){return/(iPad|iPhone|Android|Mobile)/i.test(this.ua)||!1}},{key:"isDesktop",get:function(){return!this.isMobile}},{key:"isInApp",get:function(){var n=["WebView","(iPhone|iPod|iPad)(?!.*Safari/)","Android.*(wv|.0.0.0)"],s=new RegExp("("+n.join("|")+")","ig");return!!this.ua.match(s)}}]),t}(),Dx=kx;const xx=zA(Dx);function R_(t,e){return function(){return t.apply(e,arguments)}}const{toString:Lx}=Object.prototype,{getPrototypeOf:bu}=Object,ua=(t=>e=>{const n=Lx.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),St=t=>(t=t.toLowerCase(),e=>ua(e)===t),da=t=>e=>typeof e===t,{isArray:Zs}=Array,ni=da("undefined");function Mx(t){return t!==null&&!ni(t)&&t.constructor!==null&&!ni(t.constructor)&&ot(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const P_=St("ArrayBuffer");function Fx(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&P_(t.buffer),e}const Ux=da("string"),ot=da("function"),O_=da("number"),ha=t=>t!==null&&typeof t=="object",$x=t=>t===!0||t===!1,Gi=t=>{if(ua(t)!=="object")return!1;const e=bu(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},Bx=St("Date"),jx=St("File"),Hx=St("Blob"),Vx=St("FileList"),Wx=t=>ha(t)&&ot(t.pipe),qx=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||ot(t.append)&&((e=ua(t))==="formdata"||e==="object"&&ot(t.toString)&&t.toString()==="[object FormData]"))},Gx=St("URLSearchParams"),[zx,Kx,Yx,Jx]=["ReadableStream","Request","Response","Headers"].map(St),Qx=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ci(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let s,r;if(typeof t!="object"&&(t=[t]),Zs(t))for(s=0,r=t.length;s<r;s++)e.call(null,t[s],s,t);else{const i=n?Object.getOwnPropertyNames(t):Object.keys(t),o=i.length;let a;for(s=0;s<o;s++)a=i[s],e.call(null,t[a],a,t)}}function N_(t,e){e=e.toLowerCase();const n=Object.keys(t);let s=n.length,r;for(;s-- >0;)if(r=n[s],e===r.toLowerCase())return r;return null}const Gn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,k_=t=>!ni(t)&&t!==Gn;function Bl(){const{caseless:t}=k_(this)&&this||{},e={},n=(s,r)=>{const i=t&&N_(e,r)||r;Gi(e[i])&&Gi(s)?e[i]=Bl(e[i],s):Gi(s)?e[i]=Bl({},s):Zs(s)?e[i]=s.slice():e[i]=s};for(let s=0,r=arguments.length;s<r;s++)arguments[s]&&Ci(arguments[s],n);return e}const Xx=(t,e,n,{allOwnKeys:s}={})=>(Ci(e,(r,i)=>{n&&ot(r)?t[i]=R_(r,n):t[i]=r},{allOwnKeys:s}),t),Zx=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),eL=(t,e,n,s)=>{t.prototype=Object.create(e.prototype,s),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},tL=(t,e,n,s)=>{let r,i,o;const a={};if(e=e||{},t==null)return e;do{for(r=Object.getOwnPropertyNames(t),i=r.length;i-- >0;)o=r[i],(!s||s(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&bu(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},nL=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const s=t.indexOf(e,n);return s!==-1&&s===n},sL=t=>{if(!t)return null;if(Zs(t))return t;let e=t.length;if(!O_(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},rL=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&bu(Uint8Array)),iL=(t,e)=>{const s=(t&&t[Symbol.iterator]).call(t);let r;for(;(r=s.next())&&!r.done;){const i=r.value;e.call(t,i[0],i[1])}},oL=(t,e)=>{let n;const s=[];for(;(n=t.exec(e))!==null;)s.push(n);return s},aL=St("HTMLFormElement"),lL=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,s,r){return s.toUpperCase()+r}),Qh=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),cL=St("RegExp"),D_=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),s={};Ci(n,(r,i)=>{let o;(o=e(r,i,t))!==!1&&(s[i]=o||r)}),Object.defineProperties(t,s)},uL=t=>{D_(t,(e,n)=>{if(ot(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const s=t[n];if(ot(s)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},dL=(t,e)=>{const n={},s=r=>{r.forEach(i=>{n[i]=!0})};return Zs(t)?s(t):s(String(t).split(e)),n},hL=()=>{},fL=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e,Ga="abcdefghijklmnopqrstuvwxyz",Xh="0123456789",x_={DIGIT:Xh,ALPHA:Ga,ALPHA_DIGIT:Ga+Ga.toUpperCase()+Xh},pL=(t=16,e=x_.ALPHA_DIGIT)=>{let n="";const{length:s}=e;for(;t--;)n+=e[Math.random()*s|0];return n};function gL(t){return!!(t&&ot(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const mL=t=>{const e=new Array(10),n=(s,r)=>{if(ha(s)){if(e.indexOf(s)>=0)return;if(!("toJSON"in s)){e[r]=s;const i=Zs(s)?[]:{};return Ci(s,(o,a)=>{const l=n(o,r+1);!ni(l)&&(i[a]=l)}),e[r]=void 0,i}}return s};return n(t,0)},_L=St("AsyncFunction"),vL=t=>t&&(ha(t)||ot(t))&&ot(t.then)&&ot(t.catch),L_=((t,e)=>t?setImmediate:e?((n,s)=>(Gn.addEventListener("message",({source:r,data:i})=>{r===Gn&&i===n&&s.length&&s.shift()()},!1),r=>{s.push(r),Gn.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",ot(Gn.postMessage)),yL=typeof queueMicrotask<"u"?queueMicrotask.bind(Gn):typeof process<"u"&&process.nextTick||L_,y={isArray:Zs,isArrayBuffer:P_,isBuffer:Mx,isFormData:qx,isArrayBufferView:Fx,isString:Ux,isNumber:O_,isBoolean:$x,isObject:ha,isPlainObject:Gi,isReadableStream:zx,isRequest:Kx,isResponse:Yx,isHeaders:Jx,isUndefined:ni,isDate:Bx,isFile:jx,isBlob:Hx,isRegExp:cL,isFunction:ot,isStream:Wx,isURLSearchParams:Gx,isTypedArray:rL,isFileList:Vx,forEach:Ci,merge:Bl,extend:Xx,trim:Qx,stripBOM:Zx,inherits:eL,toFlatObject:tL,kindOf:ua,kindOfTest:St,endsWith:nL,toArray:sL,forEachEntry:iL,matchAll:oL,isHTMLForm:aL,hasOwnProperty:Qh,hasOwnProp:Qh,reduceDescriptors:D_,freezeMethods:uL,toObjectSet:dL,toCamelCase:lL,noop:hL,toFiniteNumber:fL,findKey:N_,global:Gn,isContextDefined:k_,ALPHABET:x_,generateString:pL,isSpecCompliantForm:gL,toJSONObject:mL,isAsyncFn:_L,isThenable:vL,setImmediate:L_,asap:yL};function z(t,e,n,s,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),s&&(this.request=s),r&&(this.response=r,this.status=r.status?r.status:null)}y.inherits(z,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:y.toJSONObject(this.config),code:this.code,status:this.status}}});const M_=z.prototype,F_={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{F_[t]={value:t}});Object.defineProperties(z,F_);Object.defineProperty(M_,"isAxiosError",{value:!0});z.from=(t,e,n,s,r,i)=>{const o=Object.create(M_);return y.toFlatObject(t,o,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),z.call(o,t.message,e,n,s,r),o.cause=t,o.name=t.name,i&&Object.assign(o,i),o};const bL=null;function jl(t){return y.isPlainObject(t)||y.isArray(t)}function U_(t){return y.endsWith(t,"[]")?t.slice(0,-2):t}function Zh(t,e,n){return t?t.concat(e).map(function(r,i){return r=U_(r),!n&&i?"["+r+"]":r}).join(n?".":""):e}function wL(t){return y.isArray(t)&&!t.some(jl)}const EL=y.toFlatObject(y,{},null,function(e){return/^is[A-Z]/.test(e)});function fa(t,e,n){if(!y.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=y.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(_,b){return!y.isUndefined(b[_])});const s=n.metaTokens,r=n.visitor||u,i=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&y.isSpecCompliantForm(e);if(!y.isFunction(r))throw new TypeError("visitor must be a function");function c(m){if(m===null)return"";if(y.isDate(m))return m.toISOString();if(!l&&y.isBlob(m))throw new z("Blob is not supported. Use a Buffer instead.");return y.isArrayBuffer(m)||y.isTypedArray(m)?l&&typeof Blob=="function"?new Blob([m]):Buffer.from(m):m}function u(m,_,b){let A=m;if(m&&!b&&typeof m=="object"){if(y.endsWith(_,"{}"))_=s?_:_.slice(0,-2),m=JSON.stringify(m);else if(y.isArray(m)&&wL(m)||(y.isFileList(m)||y.endsWith(_,"[]"))&&(A=y.toArray(m)))return _=U_(_),A.forEach(function(O,D){!(y.isUndefined(O)||O===null)&&e.append(o===!0?Zh([_],D,i):o===null?_:_+"[]",c(O))}),!1}return jl(m)?!0:(e.append(Zh(b,_,i),c(m)),!1)}const d=[],h=Object.assign(EL,{defaultVisitor:u,convertValue:c,isVisitable:jl});function p(m,_){if(!y.isUndefined(m)){if(d.indexOf(m)!==-1)throw Error("Circular reference detected in "+_.join("."));d.push(m),y.forEach(m,function(A,R){(!(y.isUndefined(A)||A===null)&&r.call(e,A,y.isString(R)?R.trim():R,_,h))===!0&&p(A,_?_.concat(R):[R])}),d.pop()}}if(!y.isObject(t))throw new TypeError("data must be an object");return p(t),e}function ef(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(s){return e[s]})}function wu(t,e){this._pairs=[],t&&fa(t,this,e)}const $_=wu.prototype;$_.append=function(e,n){this._pairs.push([e,n])};$_.toString=function(e){const n=e?function(s){return e.call(this,s,ef)}:ef;return this._pairs.map(function(r){return n(r[0])+"="+n(r[1])},"").join("&")};function CL(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function B_(t,e,n){if(!e)return t;const s=n&&n.encode||CL,r=n&&n.serialize;let i;if(r?i=r(e,n):i=y.isURLSearchParams(e)?e.toString():new wu(e,n).toString(s),i){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+i}return t}class tf{constructor(){this.handlers=[]}use(e,n,s){return this.handlers.push({fulfilled:e,rejected:n,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){y.forEach(this.handlers,function(s){s!==null&&e(s)})}}const j_={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},TL=typeof URLSearchParams<"u"?URLSearchParams:wu,SL=typeof FormData<"u"?FormData:null,IL=typeof Blob<"u"?Blob:null,AL={isBrowser:!0,classes:{URLSearchParams:TL,FormData:SL,Blob:IL},protocols:["http","https","file","blob","url","data"]},Eu=typeof window<"u"&&typeof document<"u",Hl=typeof navigator=="object"&&navigator||void 0,RL=Eu&&(!Hl||["ReactNative","NativeScript","NS"].indexOf(Hl.product)<0),PL=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",OL=Eu&&window.location.href||"http://localhost",NL=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Eu,hasStandardBrowserEnv:RL,hasStandardBrowserWebWorkerEnv:PL,navigator:Hl,origin:OL},Symbol.toStringTag,{value:"Module"})),Je={...NL,...AL};function kL(t,e){return fa(t,new Je.classes.URLSearchParams,Object.assign({visitor:function(n,s,r,i){return Je.isNode&&y.isBuffer(n)?(this.append(s,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}function DL(t){return y.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function xL(t){const e={},n=Object.keys(t);let s;const r=n.length;let i;for(s=0;s<r;s++)i=n[s],e[i]=t[i];return e}function H_(t){function e(n,s,r,i){let o=n[i++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=i>=n.length;return o=!o&&y.isArray(r)?r.length:o,l?(y.hasOwnProp(r,o)?r[o]=[r[o],s]:r[o]=s,!a):((!r[o]||!y.isObject(r[o]))&&(r[o]=[]),e(n,s,r[o],i)&&y.isArray(r[o])&&(r[o]=xL(r[o])),!a)}if(y.isFormData(t)&&y.isFunction(t.entries)){const n={};return y.forEachEntry(t,(s,r)=>{e(DL(s),r,n,0)}),n}return null}function LL(t,e,n){if(y.isString(t))try{return(e||JSON.parse)(t),y.trim(t)}catch(s){if(s.name!=="SyntaxError")throw s}return(0,JSON.stringify)(t)}const Ti={transitional:j_,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const s=n.getContentType()||"",r=s.indexOf("application/json")>-1,i=y.isObject(e);if(i&&y.isHTMLForm(e)&&(e=new FormData(e)),y.isFormData(e))return r?JSON.stringify(H_(e)):e;if(y.isArrayBuffer(e)||y.isBuffer(e)||y.isStream(e)||y.isFile(e)||y.isBlob(e)||y.isReadableStream(e))return e;if(y.isArrayBufferView(e))return e.buffer;if(y.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(i){if(s.indexOf("application/x-www-form-urlencoded")>-1)return kL(e,this.formSerializer).toString();if((a=y.isFileList(e))||s.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return fa(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return i||r?(n.setContentType("application/json",!1),LL(e)):e}],transformResponse:[function(e){const n=this.transitional||Ti.transitional,s=n&&n.forcedJSONParsing,r=this.responseType==="json";if(y.isResponse(e)||y.isReadableStream(e))return e;if(e&&y.isString(e)&&(s&&!this.responseType||r)){const o=!(n&&n.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?z.from(a,z.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Je.classes.FormData,Blob:Je.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};y.forEach(["delete","get","head","post","put","patch"],t=>{Ti.headers[t]={}});const ML=y.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),FL=t=>{const e={};let n,s,r;return t&&t.split(`
`).forEach(function(o){r=o.indexOf(":"),n=o.substring(0,r).trim().toLowerCase(),s=o.substring(r+1).trim(),!(!n||e[n]&&ML[n])&&(n==="set-cookie"?e[n]?e[n].push(s):e[n]=[s]:e[n]=e[n]?e[n]+", "+s:s)}),e},nf=Symbol("internals");function hr(t){return t&&String(t).trim().toLowerCase()}function zi(t){return t===!1||t==null?t:y.isArray(t)?t.map(zi):String(t)}function UL(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let s;for(;s=n.exec(t);)e[s[1]]=s[2];return e}const $L=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function za(t,e,n,s,r){if(y.isFunction(s))return s.call(this,e,n);if(r&&(e=n),!!y.isString(e)){if(y.isString(s))return e.indexOf(s)!==-1;if(y.isRegExp(s))return s.test(e)}}function BL(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,s)=>n.toUpperCase()+s)}function jL(t,e){const n=y.toCamelCase(" "+e);["get","set","has"].forEach(s=>{Object.defineProperty(t,s+n,{value:function(r,i,o){return this[s].call(this,e,r,i,o)},configurable:!0})})}class Qe{constructor(e){e&&this.set(e)}set(e,n,s){const r=this;function i(a,l,c){const u=hr(l);if(!u)throw new Error("header name must be a non-empty string");const d=y.findKey(r,u);(!d||r[d]===void 0||c===!0||c===void 0&&r[d]!==!1)&&(r[d||l]=zi(a))}const o=(a,l)=>y.forEach(a,(c,u)=>i(c,u,l));if(y.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(y.isString(e)&&(e=e.trim())&&!$L(e))o(FL(e),n);else if(y.isHeaders(e))for(const[a,l]of e.entries())i(l,a,s);else e!=null&&i(n,e,s);return this}get(e,n){if(e=hr(e),e){const s=y.findKey(this,e);if(s){const r=this[s];if(!n)return r;if(n===!0)return UL(r);if(y.isFunction(n))return n.call(this,r,s);if(y.isRegExp(n))return n.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=hr(e),e){const s=y.findKey(this,e);return!!(s&&this[s]!==void 0&&(!n||za(this,this[s],s,n)))}return!1}delete(e,n){const s=this;let r=!1;function i(o){if(o=hr(o),o){const a=y.findKey(s,o);a&&(!n||za(s,s[a],a,n))&&(delete s[a],r=!0)}}return y.isArray(e)?e.forEach(i):i(e),r}clear(e){const n=Object.keys(this);let s=n.length,r=!1;for(;s--;){const i=n[s];(!e||za(this,this[i],i,e,!0))&&(delete this[i],r=!0)}return r}normalize(e){const n=this,s={};return y.forEach(this,(r,i)=>{const o=y.findKey(s,i);if(o){n[o]=zi(r),delete n[i];return}const a=e?BL(i):String(i).trim();a!==i&&delete n[i],n[a]=zi(r),s[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return y.forEach(this,(s,r)=>{s!=null&&s!==!1&&(n[r]=e&&y.isArray(s)?s.join(", "):s)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const s=new this(e);return n.forEach(r=>s.set(r)),s}static accessor(e){const s=(this[nf]=this[nf]={accessors:{}}).accessors,r=this.prototype;function i(o){const a=hr(o);s[a]||(jL(r,o),s[a]=!0)}return y.isArray(e)?e.forEach(i):i(e),this}}Qe.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);y.reduceDescriptors(Qe.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(s){this[n]=s}}});y.freezeMethods(Qe);function Ka(t,e){const n=this||Ti,s=e||n,r=Qe.from(s.headers);let i=s.data;return y.forEach(t,function(a){i=a.call(n,i,r.normalize(),e?e.status:void 0)}),r.normalize(),i}function V_(t){return!!(t&&t.__CANCEL__)}function er(t,e,n){z.call(this,t??"canceled",z.ERR_CANCELED,e,n),this.name="CanceledError"}y.inherits(er,z,{__CANCEL__:!0});function W_(t,e,n){const s=n.config.validateStatus;!n.status||!s||s(n.status)?t(n):e(new z("Request failed with status code "+n.status,[z.ERR_BAD_REQUEST,z.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function HL(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function VL(t,e){t=t||10;const n=new Array(t),s=new Array(t);let r=0,i=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),u=s[i];o||(o=c),n[r]=l,s[r]=c;let d=i,h=0;for(;d!==r;)h+=n[d++],d=d%t;if(r=(r+1)%t,r===i&&(i=(i+1)%t),c-o<e)return;const p=u&&c-u;return p?Math.round(h*1e3/p):void 0}}function WL(t,e){let n=0,s=1e3/e,r,i;const o=(c,u=Date.now())=>{n=u,r=null,i&&(clearTimeout(i),i=null),t.apply(null,c)};return[(...c)=>{const u=Date.now(),d=u-n;d>=s?o(c,u):(r=c,i||(i=setTimeout(()=>{i=null,o(r)},s-d)))},()=>r&&o(r)]}const Oo=(t,e,n=3)=>{let s=0;const r=VL(50,250);return WL(i=>{const o=i.loaded,a=i.lengthComputable?i.total:void 0,l=o-s,c=r(l),u=o<=a;s=o;const d={loaded:o,total:a,progress:a?o/a:void 0,bytes:l,rate:c||void 0,estimated:c&&a&&u?(a-o)/c:void 0,event:i,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(d)},n)},sf=(t,e)=>{const n=t!=null;return[s=>e[0]({lengthComputable:n,total:t,loaded:s}),e[1]]},rf=t=>(...e)=>y.asap(()=>t(...e)),qL=Je.hasStandardBrowserEnv?function(){const e=Je.navigator&&/(msie|trident)/i.test(Je.navigator.userAgent),n=document.createElement("a");let s;function r(i){let o=i;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return s=r(window.location.href),function(o){const a=y.isString(o)?r(o):o;return a.protocol===s.protocol&&a.host===s.host}}():function(){return function(){return!0}}(),GL=Je.hasStandardBrowserEnv?{write(t,e,n,s,r,i){const o=[t+"="+encodeURIComponent(e)];y.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),y.isString(s)&&o.push("path="+s),y.isString(r)&&o.push("domain="+r),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function zL(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function KL(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function q_(t,e){return t&&!zL(e)?KL(t,e):e}const of=t=>t instanceof Qe?{...t}:t;function rs(t,e){e=e||{};const n={};function s(c,u,d){return y.isPlainObject(c)&&y.isPlainObject(u)?y.merge.call({caseless:d},c,u):y.isPlainObject(u)?y.merge({},u):y.isArray(u)?u.slice():u}function r(c,u,d){if(y.isUndefined(u)){if(!y.isUndefined(c))return s(void 0,c,d)}else return s(c,u,d)}function i(c,u){if(!y.isUndefined(u))return s(void 0,u)}function o(c,u){if(y.isUndefined(u)){if(!y.isUndefined(c))return s(void 0,c)}else return s(void 0,u)}function a(c,u,d){if(d in e)return s(c,u);if(d in t)return s(void 0,c)}const l={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(c,u)=>r(of(c),of(u),!0)};return y.forEach(Object.keys(Object.assign({},t,e)),function(u){const d=l[u]||r,h=d(t[u],e[u],u);y.isUndefined(h)&&d!==a||(n[u]=h)}),n}const G_=t=>{const e=rs({},t);let{data:n,withXSRFToken:s,xsrfHeaderName:r,xsrfCookieName:i,headers:o,auth:a}=e;e.headers=o=Qe.from(o),e.url=B_(q_(e.baseURL,e.url),t.params,t.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let l;if(y.isFormData(n)){if(Je.hasStandardBrowserEnv||Je.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((l=o.getContentType())!==!1){const[c,...u]=l?l.split(";").map(d=>d.trim()).filter(Boolean):[];o.setContentType([c||"multipart/form-data",...u].join("; "))}}if(Je.hasStandardBrowserEnv&&(s&&y.isFunction(s)&&(s=s(e)),s||s!==!1&&qL(e.url))){const c=r&&i&&GL.read(i);c&&o.set(r,c)}return e},YL=typeof XMLHttpRequest<"u",JL=YL&&function(t){return new Promise(function(n,s){const r=G_(t);let i=r.data;const o=Qe.from(r.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:c}=r,u,d,h,p,m;function _(){p&&p(),m&&m(),r.cancelToken&&r.cancelToken.unsubscribe(u),r.signal&&r.signal.removeEventListener("abort",u)}let b=new XMLHttpRequest;b.open(r.method.toUpperCase(),r.url,!0),b.timeout=r.timeout;function A(){if(!b)return;const O=Qe.from("getAllResponseHeaders"in b&&b.getAllResponseHeaders()),B={data:!a||a==="text"||a==="json"?b.responseText:b.response,status:b.status,statusText:b.statusText,headers:O,config:t,request:b};W_(function(Q){n(Q),_()},function(Q){s(Q),_()},B),b=null}"onloadend"in b?b.onloadend=A:b.onreadystatechange=function(){!b||b.readyState!==4||b.status===0&&!(b.responseURL&&b.responseURL.indexOf("file:")===0)||setTimeout(A)},b.onabort=function(){b&&(s(new z("Request aborted",z.ECONNABORTED,t,b)),b=null)},b.onerror=function(){s(new z("Network Error",z.ERR_NETWORK,t,b)),b=null},b.ontimeout=function(){let D=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const B=r.transitional||j_;r.timeoutErrorMessage&&(D=r.timeoutErrorMessage),s(new z(D,B.clarifyTimeoutError?z.ETIMEDOUT:z.ECONNABORTED,t,b)),b=null},i===void 0&&o.setContentType(null),"setRequestHeader"in b&&y.forEach(o.toJSON(),function(D,B){b.setRequestHeader(B,D)}),y.isUndefined(r.withCredentials)||(b.withCredentials=!!r.withCredentials),a&&a!=="json"&&(b.responseType=r.responseType),c&&([h,m]=Oo(c,!0),b.addEventListener("progress",h)),l&&b.upload&&([d,p]=Oo(l),b.upload.addEventListener("progress",d),b.upload.addEventListener("loadend",p)),(r.cancelToken||r.signal)&&(u=O=>{b&&(s(!O||O.type?new er(null,t,b):O),b.abort(),b=null)},r.cancelToken&&r.cancelToken.subscribe(u),r.signal&&(r.signal.aborted?u():r.signal.addEventListener("abort",u)));const R=HL(r.url);if(R&&Je.protocols.indexOf(R)===-1){s(new z("Unsupported protocol "+R+":",z.ERR_BAD_REQUEST,t));return}b.send(i||null)})},QL=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let s=new AbortController,r;const i=function(c){if(!r){r=!0,a();const u=c instanceof Error?c:this.reason;s.abort(u instanceof z?u:new er(u instanceof Error?u.message:u))}};let o=e&&setTimeout(()=>{o=null,i(new z(`timeout ${e} of ms exceeded`,z.ETIMEDOUT))},e);const a=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(c=>{c.unsubscribe?c.unsubscribe(i):c.removeEventListener("abort",i)}),t=null)};t.forEach(c=>c.addEventListener("abort",i));const{signal:l}=s;return l.unsubscribe=()=>y.asap(a),l}},XL=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let s=0,r;for(;s<n;)r=s+e,yield t.slice(s,r),s=r},ZL=async function*(t,e){for await(const n of eM(t))yield*XL(n,e)},eM=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:s}=await e.read();if(n)break;yield s}}finally{await e.cancel()}},af=(t,e,n,s)=>{const r=ZL(t,e);let i=0,o,a=l=>{o||(o=!0,s&&s(l))};return new ReadableStream({async pull(l){try{const{done:c,value:u}=await r.next();if(c){a(),l.close();return}let d=u.byteLength;if(n){let h=i+=d;n(h)}l.enqueue(new Uint8Array(u))}catch(c){throw a(c),c}},cancel(l){return a(l),r.return()}},{highWaterMark:2})},pa=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",z_=pa&&typeof ReadableStream=="function",tM=pa&&(typeof TextEncoder=="function"?(t=>e=>t.encode(e))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),K_=(t,...e)=>{try{return!!t(...e)}catch{return!1}},nM=z_&&K_(()=>{let t=!1;const e=new Request(Je.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e}),lf=64*1024,Vl=z_&&K_(()=>y.isReadableStream(new Response("").body)),No={stream:Vl&&(t=>t.body)};pa&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!No[e]&&(No[e]=y.isFunction(t[e])?n=>n[e]():(n,s)=>{throw new z(`Response type '${e}' is not supported`,z.ERR_NOT_SUPPORT,s)})})})(new Response);const sM=async t=>{if(t==null)return 0;if(y.isBlob(t))return t.size;if(y.isSpecCompliantForm(t))return(await new Request(Je.origin,{method:"POST",body:t}).arrayBuffer()).byteLength;if(y.isArrayBufferView(t)||y.isArrayBuffer(t))return t.byteLength;if(y.isURLSearchParams(t)&&(t=t+""),y.isString(t))return(await tM(t)).byteLength},rM=async(t,e)=>{const n=y.toFiniteNumber(t.getContentLength());return n??sM(e)},iM=pa&&(async t=>{let{url:e,method:n,data:s,signal:r,cancelToken:i,timeout:o,onDownloadProgress:a,onUploadProgress:l,responseType:c,headers:u,withCredentials:d="same-origin",fetchOptions:h}=G_(t);c=c?(c+"").toLowerCase():"text";let p=QL([r,i&&i.toAbortSignal()],o),m;const _=p&&p.unsubscribe&&(()=>{p.unsubscribe()});let b;try{if(l&&nM&&n!=="get"&&n!=="head"&&(b=await rM(u,s))!==0){let B=new Request(e,{method:"POST",body:s,duplex:"half"}),ee;if(y.isFormData(s)&&(ee=B.headers.get("content-type"))&&u.setContentType(ee),B.body){const[Q,ke]=sf(b,Oo(rf(l)));s=af(B.body,lf,Q,ke)}}y.isString(d)||(d=d?"include":"omit");const A="credentials"in Request.prototype;m=new Request(e,{...h,signal:p,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:s,duplex:"half",credentials:A?d:void 0});let R=await fetch(m);const O=Vl&&(c==="stream"||c==="response");if(Vl&&(a||O&&_)){const B={};["status","statusText","headers"].forEach(je=>{B[je]=R[je]});const ee=y.toFiniteNumber(R.headers.get("content-length")),[Q,ke]=a&&sf(ee,Oo(rf(a),!0))||[];R=new Response(af(R.body,lf,Q,()=>{ke&&ke(),_&&_()}),B)}c=c||"text";let D=await No[y.findKey(No,c)||"text"](R,t);return!O&&_&&_(),await new Promise((B,ee)=>{W_(B,ee,{data:D,headers:Qe.from(R.headers),status:R.status,statusText:R.statusText,config:t,request:m})})}catch(A){throw _&&_(),A&&A.name==="TypeError"&&/fetch/i.test(A.message)?Object.assign(new z("Network Error",z.ERR_NETWORK,t,m),{cause:A.cause||A}):z.from(A,A&&A.code,t,m)}}),Wl={http:bL,xhr:JL,fetch:iM};y.forEach(Wl,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const cf=t=>`- ${t}`,oM=t=>y.isFunction(t)||t===null||t===!1,Y_={getAdapter:t=>{t=y.isArray(t)?t:[t];const{length:e}=t;let n,s;const r={};for(let i=0;i<e;i++){n=t[i];let o;if(s=n,!oM(n)&&(s=Wl[(o=String(n)).toLowerCase()],s===void 0))throw new z(`Unknown adapter '${o}'`);if(s)break;r[o||"#"+i]=s}if(!s){const i=Object.entries(r).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let o=e?i.length>1?`since :
`+i.map(cf).join(`
`):" "+cf(i[0]):"as no adapter specified";throw new z("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return s},adapters:Wl};function Ya(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new er(null,t)}function uf(t){return Ya(t),t.headers=Qe.from(t.headers),t.data=Ka.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Y_.getAdapter(t.adapter||Ti.adapter)(t).then(function(s){return Ya(t),s.data=Ka.call(t,t.transformResponse,s),s.headers=Qe.from(s.headers),s},function(s){return V_(s)||(Ya(t),s&&s.response&&(s.response.data=Ka.call(t,t.transformResponse,s.response),s.response.headers=Qe.from(s.response.headers))),Promise.reject(s)})}const J_="1.7.7",Cu={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Cu[t]=function(s){return typeof s===t||"a"+(e<1?"n ":" ")+t}});const df={};Cu.transitional=function(e,n,s){function r(i,o){return"[Axios v"+J_+"] Transitional option '"+i+"'"+o+(s?". "+s:"")}return(i,o,a)=>{if(e===!1)throw new z(r(o," has been removed"+(n?" in "+n:"")),z.ERR_DEPRECATED);return n&&!df[o]&&(df[o]=!0,console.warn(r(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,a):!0}};function aM(t,e,n){if(typeof t!="object")throw new z("options must be an object",z.ERR_BAD_OPTION_VALUE);const s=Object.keys(t);let r=s.length;for(;r-- >0;){const i=s[r],o=e[i];if(o){const a=t[i],l=a===void 0||o(a,i,t);if(l!==!0)throw new z("option "+i+" must be "+l,z.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new z("Unknown option "+i,z.ERR_BAD_OPTION)}}const ql={assertOptions:aM,validators:Cu},hn=ql.validators;class Kn{constructor(e){this.defaults=e,this.interceptors={request:new tf,response:new tf}}async request(e,n){try{return await this._request(e,n)}catch(s){if(s instanceof Error){let r;Error.captureStackTrace?Error.captureStackTrace(r={}):r=new Error;const i=r.stack?r.stack.replace(/^.+\n/,""):"";try{s.stack?i&&!String(s.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(s.stack+=`
`+i):s.stack=i}catch{}}throw s}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=rs(this.defaults,n);const{transitional:s,paramsSerializer:r,headers:i}=n;s!==void 0&&ql.assertOptions(s,{silentJSONParsing:hn.transitional(hn.boolean),forcedJSONParsing:hn.transitional(hn.boolean),clarifyTimeoutError:hn.transitional(hn.boolean)},!1),r!=null&&(y.isFunction(r)?n.paramsSerializer={serialize:r}:ql.assertOptions(r,{encode:hn.function,serialize:hn.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&y.merge(i.common,i[n.method]);i&&y.forEach(["delete","get","head","post","put","patch","common"],m=>{delete i[m]}),n.headers=Qe.concat(o,i);const a=[];let l=!0;this.interceptors.request.forEach(function(_){typeof _.runWhen=="function"&&_.runWhen(n)===!1||(l=l&&_.synchronous,a.unshift(_.fulfilled,_.rejected))});const c=[];this.interceptors.response.forEach(function(_){c.push(_.fulfilled,_.rejected)});let u,d=0,h;if(!l){const m=[uf.bind(this),void 0];for(m.unshift.apply(m,a),m.push.apply(m,c),h=m.length,u=Promise.resolve(n);d<h;)u=u.then(m[d++],m[d++]);return u}h=a.length;let p=n;for(d=0;d<h;){const m=a[d++],_=a[d++];try{p=m(p)}catch(b){_.call(this,b);break}}try{u=uf.call(this,p)}catch(m){return Promise.reject(m)}for(d=0,h=c.length;d<h;)u=u.then(c[d++],c[d++]);return u}getUri(e){e=rs(this.defaults,e);const n=q_(e.baseURL,e.url);return B_(n,e.params,e.paramsSerializer)}}y.forEach(["delete","get","head","options"],function(e){Kn.prototype[e]=function(n,s){return this.request(rs(s||{},{method:e,url:n,data:(s||{}).data}))}});y.forEach(["post","put","patch"],function(e){function n(s){return function(i,o,a){return this.request(rs(a||{},{method:e,headers:s?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}Kn.prototype[e]=n(),Kn.prototype[e+"Form"]=n(!0)});class Tu{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const s=this;this.promise.then(r=>{if(!s._listeners)return;let i=s._listeners.length;for(;i-- >0;)s._listeners[i](r);s._listeners=null}),this.promise.then=r=>{let i;const o=new Promise(a=>{s.subscribe(a),i=a}).then(r);return o.cancel=function(){s.unsubscribe(i)},o},e(function(i,o,a){s.reason||(s.reason=new er(i,o,a),n(s.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=s=>{e.abort(s)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new Tu(function(r){e=r}),cancel:e}}}function lM(t){return function(n){return t.apply(null,n)}}function cM(t){return y.isObject(t)&&t.isAxiosError===!0}const Gl={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Gl).forEach(([t,e])=>{Gl[e]=t});function Q_(t){const e=new Kn(t),n=R_(Kn.prototype.request,e);return y.extend(n,Kn.prototype,e,{allOwnKeys:!0}),y.extend(n,e,null,{allOwnKeys:!0}),n.create=function(r){return Q_(rs(t,r))},n}const Ce=Q_(Ti);Ce.Axios=Kn;Ce.CanceledError=er;Ce.CancelToken=Tu;Ce.isCancel=V_;Ce.VERSION=J_;Ce.toFormData=fa;Ce.AxiosError=z;Ce.Cancel=Ce.CanceledError;Ce.all=function(e){return Promise.all(e)};Ce.spread=lM;Ce.isAxiosError=cM;Ce.mergeConfig=rs;Ce.AxiosHeaders=Qe;Ce.formToJSON=t=>H_(y.isHTMLForm(t)?new FormData(t):t);Ce.getAdapter=Y_.getAdapter;Ce.HttpStatusCode=Gl;Ce.default=Ce;const uM=li({name:"LoginBox",props:{isInApp:{type:Boolean,required:!0},showLogin:{type:Boolean,required:!0}},setup(t,{emit:e}){const n=pt(""),s=pt(""),r=pt(!1);Sr(r,u=>{localStorage.setItem("keeploggedin",JSON.stringify(u))}),fc(()=>{const u=localStorage.getItem("keeploggedin");u!==null&&(r.value=JSON.parse(u))});const i=()=>{e("toggleLogin")},o=async u=>{const d=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,h=/@alearn.org.tw$/;if(d.test(String(u).toLowerCase())&&h.test(String(u).toLowerCase()))return!0;try{return(await Ce.get(`https://members-backend.alearn13994229.workers.dev/is_member_email/${u}`)).data.isMember===!0}catch(p){return console.error("Error checking member email:",p),!1}};return{users_email:n,user_password:s,keeploggedin:r,toggleLogin:i,registerWithEmail:async()=>{if(console.log("users_email:",n.value),console.log("user_password:",s.value),console.log("Register clicked"),!n.value||!s.value){window.alert("請先填寫email和密碼");return}if(!await o(n.value)){alert("請使用@aleran.org.tw網域的Email，或是會員名冊上有的Email");return}if(!s.value||typeof s.value!="string"){alert("密碼請至少包含一個英文字，請重新輸入");return}e("registerWithEmail",n.value,s.value,r.value)},loginWithEmail:()=>{let u=!0;console.log("Login clicked");const d=window.location.pathname;if((d==="/friends"||d==="/maps"||d==="/privacy-policy"||d.startsWith("/flag")||d.startsWith("/group"))&&(u=!1),!s.value||typeof s.value!="string"){alert("密碼無效，請重新輸入");return}e("loginWithEmail",u,n.value,s.value,r.value)},resetPassword:()=>{if(console.log("Reset password function triggered"),console.log("Email for reset:",n.value),!o(n.value)){alert("請先輸入有效的電子郵件地址");return}const u=ti();console.log("Firebase auth object:",u),II(u,n.value).then(()=>{alert("密碼重置郵件已發送，請檢查您的電子郵件信箱"),console.log("Password reset email sent successfully")}).catch(d=>{switch(console.error("密碼重置郵件發送失敗：",d.code,d.message),d.code){case"auth/invalid-email":alert("無效的電子郵件地址");break;case"auth/user-not-found":alert("找不到該電子郵件對應的帳號");break;default:alert("密碼重置郵件發送失敗，請稍後再試")}})}}}}),dM={class:"ui middle aligned center aligned grid",id:"login-main",style:{height:"100vh"}},hM={class:"column",style:{"max-width":"420px"}},fM={class:"ui raised segment"},pM={key:0,class:"ui error message"},gM={class:"ui form segment",style:{"border-radius":"10px",padding:"15px","background-color":"#f0f0f0"}},mM={class:"field"},_M={class:"ui left icon input"},vM={class:"field"},yM={class:"ui left icon input"},bM={class:"ui large form"},wM={class:"ui segment",style:{border:"none","padding-top":"10px"}},EM={class:"field"};function CM(t,e,n,s,r,i){return ye(),Ve("div",{class:"ui dimmer modals visible active clickable",id:"login-bg",style:{background:"rgba(0, 0, 0, 0.6)"},onClick:e[9]||(e[9]=o=>t.toggleLogin())},[T("div",dM,[T("div",hM,[T("div",fM,[t.isInApp?(ye(),Ve("div",pM,"本系統不支援facebook, line等app內部瀏覽，請用一般瀏覽器開啟，方可登入，謝謝")):ft("",!0),e[14]||(e[14]=T("h2",{class:"ui black header",style:{"font-size":"1.5rem","font-weight":"600"}},"登入您的帳號",-1)),T("form",gM,[T("div",mM,[T("div",_M,[e[10]||(e[10]=T("i",{class:"envelope icon"},null,-1)),Mi(T("input",{type:"text",name:"email",placeholder:"E-mail address",style:{"font-size":"14px"},"onUpdate:modelValue":e[0]||(e[0]=o=>t.users_email=o),onClick:e[1]||(e[1]=or(()=>{},["stop"]))},null,512),[[hl,t.users_email]])])]),T("div",vM,[T("div",yM,[e[11]||(e[11]=T("i",{class:"lock icon"},null,-1)),Mi(T("input",{type:"password",name:"user_password",placeholder:"Password",style:{"font-size":"14px"},"onUpdate:modelValue":e[2]||(e[2]=o=>t.user_password=o),autocomplete:"",onClick:e[3]||(e[3]=or(()=>{},["stop"]))},null,512),[[hl,t.user_password]])])]),T("div",{class:Yn(["ui fluid large button",{disabled:t.isInApp}]),onClick:e[4]||(e[4]=or((...o)=>t.loginWithEmail&&t.loginWithEmail(...o),["prevent"])),style:{"background-color":"#e47e10",color:"white","font-weight":"bold"}},"登入",2),T("a",{class:"small forgot-password",onClick:e[5]||(e[5]=(...o)=>t.resetPassword&&t.resetPassword(...o))},"忘記密碼")]),T("form",bM,[T("div",wM,[T("div",EM,[T("div",{class:"ui checkbox",onClick:e[7]||(e[7]=or(()=>{},["stop"]))},[Mi(T("input",{type:"checkbox","onUpdate:modelValue":e[6]||(e[6]=o=>t.keeploggedin=o)},null,512),[[Ob,t.keeploggedin]]),e[12]||(e[12]=T("label",null,"保持登入狀態",-1))])])]),T("p",null,[e[13]||(e[13]=ne("新用戶？按此")),T("button",{class:Yn(["ui large basic button",{disabled:t.isInApp}]),id:"register-btn",onClick:e[8]||(e[8]=or((...o)=>t.registerWithEmail&&t.registerWithEmail(...o),["stop","prevent"]))},"註冊",2)])])])])])])}const Su=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},TM=Su(uM,[["render",CM],["__scopeId","data-v-c36a608a"]]),SM=new xx(window.navigator.userAgent),IM=SM.isInApp,fr=ti(du),AM=li({name:"App",components:{Login:TM},data(){return{isInApp:IM,showLogin:!1,sidebarVisible:!1,uid:"",users:{},user:{},photoURL:"",email:"",emailVerified:!1,zoom:13,center:[23.533,121.0654]}},mounted(){const t=this;fr.onAuthStateChanged(e=>{e?(t.uid=e.uid,t.email=e.email||"",t.photoURL=e.photoURL||"https://we.alearn.org.tw/logo-new.png",t.emailVerified=e.emailVerified,t.updateUserData(e)):(t.uid="",t.email="",t.photoURL="",t.emailVerified=!1)})},methods:{toggleLogin(){this.showLogin=!this.showLogin},toggleSidebar(){this.sidebarVisible=!this.sidebarVisible},logout(){const t=this;fr.signOut().then(function(){t.user=null,t.users={},t.uid="",t.photoURL="",t.$nextTick().then(()=>{t.$router.push("/")})})},async registerWithEmail(t,e,n){var s,r;if(!e||typeof e!="string"){alert("接收的密碼無效，請確認輸入");return}try{const i=ti(),a=(await AI(i,t,e)).user;if(a&&a.email){this.email=a.email,this.uid=a.uid,this.photoURL="https://we.alearn.org.tw/logo-new.png";const l=[{displayName:((s=this.email)==null?void 0:s.split("@")[0])||"Unknown",email:this.email,photoURL:this.photoURL}];this.user={email:this.email,photoURL:this.photoURL,providerData:l};const c=Ws(Gs,"users/"+this.uid);(await mS(c)).exists()||await tu(c,{email:this.email,name:((r=this.email)==null?void 0:r.split("@")[0])||"Unknown",connect_me:this.email,photoURL:this.photoURL,login_method:"email"}),await dh(a),alert("驗證郵件已發送，請檢查您的郵箱(含垃圾信箱)以完成驗證。"),this.logout()}else console.error("User or user email is undefined after registration"),alert("註冊過程中發生錯誤，請稍後再試。")}catch(i){i.code==="auth/email-already-in-use"?alert("此電子郵件已被使用，請使用其他電子郵件或嘗試登入。"):(console.error("註冊失敗：",i),alert("註冊失敗："+i.message))}},async loginWithEmail(t,e,n,s){try{s?await hh(fr,Xm):await hh(fr,Dl);const i=(await RI(fr,e,n)).user;if(!i.emailVerified){alert("您的電子郵件尚未驗證，請檢查您的郵箱並完成驗證。"),this.resendVerificationEmail(),this.logout();return}this.emailVerified=!0,console.log("登入成功：",i),this.updateUserData(i),t&&i.emailVerified&&this.$nextTick().then(()=>{this.$router.push("/profile")})}catch(r){console.error("登入失敗：",r);let i="登入失敗：";r.message.includes("auth/wrong-password")?i="密碼錯誤，請檢查後再試。":r.message.includes("auth/user-not-found")?i="帳號不存在，請確認您的電子郵件地址。":r.message.includes("auth/invalid-email")?i="無效的電子郵件地址，請重新輸入。":r.message.includes("auth/too-many-requests")?i="嘗試次數過多，請稍後再試。":i+=r.message,alert(i)}},resendVerificationEmail(){const t=ti().currentUser;t&&dh(t).then(()=>{console.log("驗證郵件已重新發送。")}).catch(e=>{console.error("重新發送驗證郵件失敗：",e)})},updateUserData(t){var n;if(!t){console.error("User is undefined in updateUserData");return}this.email=t.email||null,this.uid=t.uid,this.photoURL=t.photoURL?decodeURI(t.photoURL):"https://we.alearn.org.tw/logo-new.png",this.emailVerified=t.emailVerified;const e=t.providerData||[{displayName:((n=this.email)==null?void 0:n.split("@")[0])||"Unknown",email:this.email,photoURL:this.photoURL}];this.updateUserInfo(e)},locate:function(t,e){this.zoom=13,this.center=t.latlngColumn.split(","),console.log("Updated location:",this.center),this.$nextTick(()=>{console.log("Center updated and propagated to children")}),e&&this.$router.push({path:"/maps"})},updateUserInfo(t){this.users&&this.uid&&this.users[this.uid]?(this.user={...this.users[this.uid],providerData:t},this.user.latlngColumn&&this.locate(this.user,!1)):this.fetchUserData(t)},async fetchUserData(t){try{Pl(GA,e=>{const n=e.val();this.users=n,this.uid&&this.users&&this.users[this.uid]?(this.user={...this.users[this.uid],providerData:t},this.user.photoURL&&this.user.photoURL!="undefined"&&(this.photoURL=this.user.photoURL)):this.user={providerData:t}},e=>{this.user={providerData:t},console.error("Error fetching users:",e)})}catch(e){console.error("Error fetching user data:",e)}}}}),RM={class:"ui fixed top menu"},PM={class:"right menu"},OM={key:1,class:"ui simple dropdown item"},NM=["src"],kM={key:1,class:"user icon"},DM={class:"menu"},xM={class:"ui container"};function LM(t,e,n,s,r,i){const o=gr("RouterLink"),a=gr("router-link"),l=gr("RouterView"),c=gr("Login");return ye(),Ve(gt,null,[T("header",null,[T("nav",RM,[T("button",{class:"no-border ui item",onClick:e[0]||(e[0]=(...u)=>t.toggleSidebar&&t.toggleSidebar(...u))},e[6]||(e[6]=[T("i",{class:"icon bars"},null,-1)])),le(o,{class:"item fat-only",to:"/"},{default:we(()=>e[7]||(e[7]=[T("i",{class:"home icon"},null,-1)])),_:1}),le(o,{class:"item",to:"/about"},{default:we(()=>e[8]||(e[8]=[T("i",{class:"info icon"},null,-1),ne("關於"),T("span",{class:"fat-only"},"我們",-1)])),_:1}),le(o,{class:"item",to:"/podcast",name:"podcast"},{default:we(()=>e[9]||(e[9]=[T("i",{class:"vedio play icon"},null,-1),ne("影音"),T("span",{class:"fat-only"},"短講",-1)])),_:1}),le(o,{class:"item",to:"/faq"},{default:we(()=>e[10]||(e[10]=[T("i",{class:"help icon"},null,-1),T("span",{class:"fat-only"},"常見",-1),ne("問題")])),_:1}),t.uid?(ye(),Ht(o,{key:0,class:"item",to:"/create_faq"},{default:we(()=>e[11]||(e[11]=[T("i",{class:"plus icon"},null,-1),ne("新增"),T("span",{class:"fat-only"},"問答",-1)])),_:1})):ft("",!0),t.uid?(ye(),Ht(o,{key:1,class:"item fat-only",to:"/feedback"},{default:we(()=>e[12]||(e[12]=[T("i",{class:"magic icon"},null,-1),ne("回饋")])),_:1})):ft("",!0),T("div",PM,[t.uid?(ye(),Ve("div",OM,[t.photoURL?(ye(),Ve("img",{key:0,class:"ui avatar image",src:t.photoURL,alt:"User Avatar",onError:e[2]||(e[2]=(...u)=>t.useDefaultAvatar&&t.useDefaultAvatar(...u)),onLoad:e[3]||(e[3]=(...u)=>t.onImageLoad&&t.onImageLoad(...u))},null,40,NM)):(ye(),Ve("i",kM)),T("div",DM,[le(a,{class:"item",to:"/profile"},{default:we(()=>e[14]||(e[14]=[T("i",{class:"flag icon"},null,-1),ne("我的旗幟")])),_:1}),t.uid?(ye(),Ve("button",{key:0,class:"no-border ui item",onClick:e[4]||(e[4]=(...u)=>t.logout&&t.logout(...u))},e[15]||(e[15]=[T("i",{class:"sign-out icon"},null,-1),ne("登出")]))):ft("",!0)])])):(ye(),Ve("button",{key:0,class:"no-border ui item",onClick:e[1]||(e[1]=(...u)=>t.toggleLogin&&t.toggleLogin(...u))},e[13]||(e[13]=[T("i",{class:"user icon"},null,-1),ne("登入"),T("span",{class:"fat-only"},"/ 註冊",-1)])))])])]),e[29]||(e[29]=T("div",{class:"small-spacer"},null,-1)),T("div",{class:Yn(["ui sidebar vertical menu",{hidden:!t.sidebarVisible}]),id:"side-menu"},[le(o,{class:"item",to:"/",exact:"",name:"home"},{default:we(()=>e[16]||(e[16]=[T("i",{class:"home icon"},null,-1),ne("首頁")])),_:1}),t.uid&&t.user.isAdmin?(ye(),Ht(o,{key:0,class:"item",to:"/admin",name:"admin"},{default:we(()=>e[17]||(e[17]=[T("i",{class:"cogs icon"},null,-1),ne("管理")])),_:1})):ft("",!0),le(o,{class:"item",to:"/about",name:"about"},{default:we(()=>e[18]||(e[18]=[T("i",{class:"info icon"},null,-1),ne("關於我們")])),_:1}),le(o,{class:"item",to:"/podcast",name:"podcast"},{default:we(()=>e[19]||(e[19]=[T("i",{class:"vedio play icon"},null,-1),ne("影音短講")])),_:1}),le(o,{class:"item",to:"/action",name:"action"},{default:we(()=>e[20]||(e[20]=[T("i",{class:"users icon"},null,-1),ne("修法行動")])),_:1}),le(o,{class:"item",to:"/doc",name:"doc"},{default:we(()=>e[21]||(e[21]=[T("i",{class:"book icon"},null,-1),ne("本會章程")])),_:1}),le(o,{class:"item",to:"/join-us",name:"join-us"},{default:we(()=>e[22]||(e[22]=[T("i",{class:"user icon"},null,-1),ne("入會申請")])),_:1}),le(o,{class:"item",to:"/faq",name:"faq"},{default:we(()=>e[23]||(e[23]=[T("i",{class:"help icon"},null,-1),ne("常見問題")])),_:1}),t.uid?(ye(),Ht(o,{key:1,class:"item",to:"/create_faq",name:"create-faq"},{default:we(()=>e[24]||(e[24]=[T("i",{class:"plus icon"},null,-1),ne("新增問答")])),_:1})):ft("",!0),t.uid?(ye(),Ht(o,{key:2,class:"item",to:"/maps",name:"maps"},{default:we(()=>e[25]||(e[25]=[T("i",{class:"map icon"},null,-1),ne("地圖")])),_:1})):ft("",!0),t.uid?(ye(),Ht(o,{key:3,class:"item",to:"/changelog",name:"changelog"},{default:we(()=>e[26]||(e[26]=[T("i",{class:"history icon"},null,-1),ne("變更紀錄")])),_:1})):ft("",!0),t.uid?(ye(),Ht(o,{key:4,class:"item",to:"/privacy-policy",name:"privacy"},{default:we(()=>e[27]||(e[27]=[T("i",{class:"lock icon"},null,-1),ne("隱私權政策")])),_:1})):ft("",!0),le(o,{class:"item fat-only",to:"/feedback",name:"feedback"},{default:we(()=>e[28]||(e[28]=[T("i",{class:"magic icon"},null,-1),ne("回饋")])),_:1})],2),T("div",{class:Yn(["ui sidebar bg",{hidden:!t.sidebarVisible}]),onClick:e[5]||(e[5]=(...u)=>t.toggleSidebar&&t.toggleSidebar(...u))},null,2),T("div",xM,[le(l,{onToggleLogin:t.toggleLogin,onLocate:t.locate,uid:t.uid,isInApp:t.isInApp,user:t.user,users:t.users,photoURL:t.photoURL,email:t.email,emailVerified:t.emailVerified},null,8,["onToggleLogin","onLocate","uid","isInApp","user","users","photoURL","email","emailVerified"])]),t.showLogin?(ye(),Ht(c,{key:0,showLogin:t.showLogin,isInApp:!1,onToggleLogin:t.toggleLogin,onLogout:t.logout,onRegisterWithEmail:t.registerWithEmail,onLoginWithEmail:t.loginWithEmail,onResendVerificationEmail:t.resendVerificationEmail},null,8,["showLogin","onToggleLogin","onLogout","onRegisterWithEmail","onLoginWithEmail","onResendVerificationEmail"])):ft("",!0)],64)}const MM=Su(AM,[["render",LM],["__scopeId","data-v-39ba44f7"]]),FM="modulepreload",UM=function(t){return"/"+t},hf={},xe=function(e,n,s){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.allSettled(n.map(l=>{if(l=UM(l),l in hf)return;hf[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":FM,c||(d.as="script"),d.crossOrigin="",d.href=l,a&&d.setAttribute("nonce",a),document.head.appendChild(d),c)return new Promise((h,p)=>{d.addEventListener("load",h),d.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})};/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const ps=typeof document<"u";function X_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function $M(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&X_(t.default)}const ae=Object.assign;function Ja(t,e){const n={};for(const s in e){const r=e[s];n[s]=Tt(r)?r.map(t):t(r)}return n}const Dr=()=>{},Tt=Array.isArray,Z_=/#/g,BM=/&/g,jM=/\//g,HM=/=/g,VM=/\?/g,ev=/\+/g,WM=/%5B/g,qM=/%5D/g,tv=/%5E/g,GM=/%60/g,nv=/%7B/g,zM=/%7C/g,sv=/%7D/g,KM=/%20/g;function Iu(t){return encodeURI(""+t).replace(zM,"|").replace(WM,"[").replace(qM,"]")}function YM(t){return Iu(t).replace(nv,"{").replace(sv,"}").replace(tv,"^")}function zl(t){return Iu(t).replace(ev,"%2B").replace(KM,"+").replace(Z_,"%23").replace(BM,"%26").replace(GM,"`").replace(nv,"{").replace(sv,"}").replace(tv,"^")}function JM(t){return zl(t).replace(HM,"%3D")}function QM(t){return Iu(t).replace(Z_,"%23").replace(VM,"%3F")}function XM(t){return t==null?"":QM(t).replace(jM,"%2F")}function si(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const ZM=/\/$/,eF=t=>t.replace(ZM,"");function Qa(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=rF(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:si(o)}}function tF(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ff(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function nF(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Ls(e.matched[s],n.matched[r])&&rv(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ls(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function rv(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!sF(t[n],e[n]))return!1;return!0}function sF(t,e){return Tt(t)?pf(t,e):Tt(e)?pf(e,t):t===e}function pf(t,e){return Tt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function rF(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o).join("/")}const fn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ri;(function(t){t.pop="pop",t.push="push"})(ri||(ri={}));var xr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(xr||(xr={}));function iF(t){if(!t)if(ps){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),eF(t)}const oF=/^[^#]+#/;function aF(t,e){return t.replace(oF,"#")+e}function lF(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const ga=()=>({left:window.scrollX,top:window.scrollY});function cF(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=lF(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function gf(t,e){return(history.state?history.state.position-e:-1)+t}const Kl=new Map;function uF(t,e){Kl.set(t,e)}function dF(t){const e=Kl.get(t);return Kl.delete(t),e}let hF=()=>location.protocol+"//"+location.host;function iv(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),ff(l,"")}return ff(n,t)+s+r}function fF(t,e,n,s){let r=[],i=[],o=null;const a=({state:h})=>{const p=iv(t,location),m=n.value,_=e.value;let b=0;if(h){if(n.value=p,e.value=h,o&&o===m){o=null;return}b=_?h.position-_.position:0}else s(p);r.forEach(A=>{A(n.value,m,{delta:b,type:ri.pop,direction:b?b>0?xr.forward:xr.back:xr.unknown})})};function l(){o=n.value}function c(h){r.push(h);const p=()=>{const m=r.indexOf(h);m>-1&&r.splice(m,1)};return i.push(p),p}function u(){const{history:h}=window;h.state&&h.replaceState(ae({},h.state,{scroll:ga()}),"")}function d(){for(const h of i)h();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:d}}function mf(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?ga():null}}function pF(t){const{history:e,location:n}=window,s={value:iv(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const d=t.indexOf("#"),h=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:hF()+t+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(p){console.error(p),n[u?"replace":"assign"](h)}}function o(l,c){const u=ae({},e.state,mf(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});i(l,u,!0),s.value=l}function a(l,c){const u=ae({},r.value,e.state,{forward:l,scroll:ga()});i(u.current,u,!0);const d=ae({},mf(s.value,l,null),{position:u.position+1},c);i(l,d,!1),s.value=l}return{location:s,state:r,push:a,replace:o}}function gF(t){t=iF(t);const e=pF(t),n=fF(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=ae({location:"",base:t,go:s,createHref:aF.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function mF(t){return typeof t=="string"||t&&typeof t=="object"}function ov(t){return typeof t=="string"||typeof t=="symbol"}const av=Symbol("");var _f;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(_f||(_f={}));function Ms(t,e){return ae(new Error,{type:t,[av]:!0},e)}function jt(t,e){return t instanceof Error&&av in t&&(e==null||!!(t.type&e))}const vf="[^/]+?",_F={sensitive:!1,strict:!1,start:!0,end:!0},vF=/[.+*?^${}()[\]/\\]/g;function yF(t,e){const n=ae({},_F,e),s=[];let r=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let d=0;d<c.length;d++){const h=c[d];let p=40+(n.sensitive?.25:0);if(h.type===0)d||(r+="/"),r+=h.value.replace(vF,"\\$&"),p+=40;else if(h.type===1){const{value:m,repeatable:_,optional:b,regexp:A}=h;i.push({name:m,repeatable:_,optional:b});const R=A||vf;if(R!==vf){p+=10;try{new RegExp(`(${R})`)}catch(D){throw new Error(`Invalid custom RegExp for param "${m}" (${R}): `+D.message)}}let O=_?`((?:${R})(?:/(?:${R}))*)`:`(${R})`;d||(O=b&&c.length<2?`(?:/${O})`:"/"+O),b&&(O+="?"),r+=O,p+=20,b&&(p+=-8),_&&(p+=-20),R===".*"&&(p+=-50)}u.push(p)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let h=1;h<u.length;h++){const p=u[h]||"",m=i[h-1];d[m.name]=p&&m.repeatable?p.split("/"):p}return d}function l(c){let u="",d=!1;for(const h of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const p of h)if(p.type===0)u+=p.value;else if(p.type===1){const{value:m,repeatable:_,optional:b}=p,A=m in c?c[m]:"";if(Tt(A)&&!_)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const R=Tt(A)?A.join("/"):A;if(!R)if(b)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${m}"`);u+=R}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:l}}function bF(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function lv(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=bF(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(yf(s))return 1;if(yf(r))return-1}return r.length-s.length}function yf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const wF={type:0,value:""},EF=/[a-zA-Z0-9_]/;function CF(t){if(!t)return[[]];if(t==="/")return[[wF]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,l,c="",u="";function d(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):h();break;case 4:h(),n=s;break;case 1:l==="("?n=2:EF.test(l)?h():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),o(),r}function TF(t,e,n){const s=yF(CF(t.path),n),r=ae(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function SF(t,e){const n=[],s=new Map;e=Cf({strict:!1,end:!0,sensitive:!1},e);function r(d){return s.get(d)}function i(d,h,p){const m=!p,_=wf(d);_.aliasOf=p&&p.record;const b=Cf(e,d),A=[_];if("alias"in d){const D=typeof d.alias=="string"?[d.alias]:d.alias;for(const B of D)A.push(wf(ae({},_,{components:p?p.record.components:_.components,path:B,aliasOf:p?p.record:_})))}let R,O;for(const D of A){const{path:B}=D;if(h&&B[0]!=="/"){const ee=h.record.path,Q=ee[ee.length-1]==="/"?"":"/";D.path=h.record.path+(B&&Q+B)}if(R=TF(D,h,b),p?p.alias.push(R):(O=O||R,O!==R&&O.alias.push(R),m&&d.name&&!Ef(R)&&o(d.name)),cv(R)&&l(R),_.children){const ee=_.children;for(let Q=0;Q<ee.length;Q++)i(ee[Q],R,p&&p.children[Q])}p=p||R}return O?()=>{o(O)}:Dr}function o(d){if(ov(d)){const h=s.get(d);h&&(s.delete(d),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(d);h>-1&&(n.splice(h,1),d.record.name&&s.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function l(d){const h=RF(d,n);n.splice(h,0,d),d.record.name&&!Ef(d)&&s.set(d.record.name,d)}function c(d,h){let p,m={},_,b;if("name"in d&&d.name){if(p=s.get(d.name),!p)throw Ms(1,{location:d});b=p.record.name,m=ae(bf(h.params,p.keys.filter(O=>!O.optional).concat(p.parent?p.parent.keys.filter(O=>O.optional):[]).map(O=>O.name)),d.params&&bf(d.params,p.keys.map(O=>O.name))),_=p.stringify(m)}else if(d.path!=null)_=d.path,p=n.find(O=>O.re.test(_)),p&&(m=p.parse(_),b=p.record.name);else{if(p=h.name?s.get(h.name):n.find(O=>O.re.test(h.path)),!p)throw Ms(1,{location:d,currentLocation:h});b=p.record.name,m=ae({},h.params,d.params),_=p.stringify(m)}const A=[];let R=p;for(;R;)A.unshift(R.record),R=R.parent;return{name:b,path:_,params:m,matched:A,meta:AF(A)}}t.forEach(d=>i(d));function u(){n.length=0,s.clear()}return{addRoute:i,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function bf(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function wf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:IF(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function IF(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function Ef(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function AF(t){return t.reduce((e,n)=>ae(e,n.meta),{})}function Cf(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function RF(t,e){let n=0,s=e.length;for(;n!==s;){const i=n+s>>1;lv(t,e[i])<0?s=i:n=i+1}const r=PF(t);return r&&(s=e.lastIndexOf(r,s-1)),s}function PF(t){let e=t;for(;e=e.parent;)if(cv(e)&&lv(t,e)===0)return e}function cv({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function OF(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(ev," "),o=i.indexOf("="),a=si(o<0?i:i.slice(0,o)),l=o<0?null:si(i.slice(o+1));if(a in e){let c=e[a];Tt(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Tf(t){let e="";for(let n in t){const s=t[n];if(n=JM(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Tt(s)?s.map(i=>i&&zl(i)):[s&&zl(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function NF(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Tt(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const kF=Symbol(""),Sf=Symbol(""),ma=Symbol(""),Au=Symbol(""),Yl=Symbol("");function pr(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function mn(t,e,n,s,r,i=o=>o()){const o=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=h=>{h===!1?l(Ms(4,{from:n,to:e})):h instanceof Error?l(h):mF(h)?l(Ms(2,{from:e,to:h})):(o&&s.enterCallbacks[r]===o&&typeof h=="function"&&o.push(h),a())},u=i(()=>t.call(s&&s.instances[r],e,n,c));let d=Promise.resolve(u);t.length<3&&(d=d.then(c)),d.catch(h=>l(h))})}function Xa(t,e,n,s,r=i=>i()){const i=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(X_(l)){const u=(l.__vccOpts||l)[e];u&&i.push(mn(u,n,s,o,a,r))}else{let c=l();i.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=$M(u)?u.default:u;o.mods[a]=u,o.components[a]=d;const p=(d.__vccOpts||d)[e];return p&&mn(p,n,s,o,a,r)()}))}}return i}function If(t){const e=wt(ma),n=wt(Au),s=mt(()=>{const l=bs(t.to);return e.resolve(l)}),r=mt(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],d=n.matched;if(!u||!d.length)return-1;const h=d.findIndex(Ls.bind(null,u));if(h>-1)return h;const p=Af(l[c-2]);return c>1&&Af(u)===p&&d[d.length-1].path!==p?d.findIndex(Ls.bind(null,l[c-2])):h}),i=mt(()=>r.value>-1&&MF(n.params,s.value.params)),o=mt(()=>r.value>-1&&r.value===n.matched.length-1&&rv(n.params,s.value.params));function a(l={}){return LF(l)?e[bs(t.replace)?"replace":"push"](bs(t.to)).catch(Dr):Promise.resolve()}return{route:s,href:mt(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const DF=li({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:If,setup(t,{slots:e}){const n=Fo(If(t)),{options:s}=wt(ma),r=mt(()=>({[Rf(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Rf(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:$p("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),xF=DF;function LF(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function MF(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Tt(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Af(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Rf=(t,e,n)=>t??e??n,FF=li({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=wt(Yl),r=mt(()=>t.route||s.value),i=wt(Sf,0),o=mt(()=>{let c=bs(i);const{matched:u}=r.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=mt(()=>r.value.matched[o.value]);Fi(Sf,mt(()=>o.value+1)),Fi(kF,a),Fi(Yl,r);const l=pt();return Sr(()=>[l.value,a.value,t.name],([c,u,d],[h,p,m])=>{u&&(u.instances[d]=c,p&&p!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!Ls(u,p)||!h)&&(u.enterCallbacks[d]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=r.value,u=t.name,d=a.value,h=d&&d.components[u];if(!h)return Pf(n.default,{Component:h,route:c});const p=d.props[u],m=p?p===!0?c.params:typeof p=="function"?p(c):p:null,b=$p(h,ae({},m,e,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return Pf(n.default,{Component:b,route:c})||b}}});function Pf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const UF=FF;function $F(t){const e=SF(t.routes,t),n=t.parseQuery||OF,s=t.stringifyQuery||Tf,r=t.history,i=pr(),o=pr(),a=pr(),l=Jv(fn);let c=fn;ps&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ja.bind(null,E=>""+E),d=Ja.bind(null,XM),h=Ja.bind(null,si);function p(E,F){let L,U;return ov(E)?(L=e.getRecordMatcher(E),U=F):U=E,e.addRoute(U,L)}function m(E){const F=e.getRecordMatcher(E);F&&e.removeRoute(F)}function _(){return e.getRoutes().map(E=>E.record)}function b(E){return!!e.getRecordMatcher(E)}function A(E,F){if(F=ae({},F||l.value),typeof E=="string"){const g=Qa(n,E,F.path),v=e.resolve({path:g.path},F),C=r.createHref(g.fullPath);return ae(g,v,{params:h(v.params),hash:si(g.hash),redirectedFrom:void 0,href:C})}let L;if(E.path!=null)L=ae({},E,{path:Qa(n,E.path,F.path).path});else{const g=ae({},E.params);for(const v in g)g[v]==null&&delete g[v];L=ae({},E,{params:d(g)}),F.params=d(F.params)}const U=e.resolve(L,F),ie=E.hash||"";U.params=u(h(U.params));const be=tF(s,ae({},E,{hash:YM(ie),path:U.path})),f=r.createHref(be);return ae({fullPath:be,hash:ie,query:s===Tf?NF(E.query):E.query||{}},U,{redirectedFrom:void 0,href:f})}function R(E){return typeof E=="string"?Qa(n,E,l.value.path):ae({},E)}function O(E,F){if(c!==E)return Ms(8,{from:F,to:E})}function D(E){return Q(E)}function B(E){return D(ae(R(E),{replace:!0}))}function ee(E){const F=E.matched[E.matched.length-1];if(F&&F.redirect){const{redirect:L}=F;let U=typeof L=="function"?L(E):L;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=R(U):{path:U},U.params={}),ae({query:E.query,hash:E.hash,params:U.path!=null?{}:E.params},U)}}function Q(E,F){const L=c=A(E),U=l.value,ie=E.state,be=E.force,f=E.replace===!0,g=ee(L);if(g)return Q(ae(R(g),{state:typeof g=="object"?ae({},ie,g.state):ie,force:be,replace:f}),F||L);const v=L;v.redirectedFrom=F;let C;return!be&&nF(s,U,L)&&(C=Ms(16,{to:v,from:U}),At(U,U,!0,!1)),(C?Promise.resolve(C):lt(v,U)).catch(w=>jt(w)?jt(w,2)?w:un(w):te(w,v,U)).then(w=>{if(w){if(jt(w,2))return Q(ae({replace:f},R(w.to),{state:typeof w.to=="object"?ae({},ie,w.to.state):ie,force:be}),F||v)}else w=Fn(v,U,!0,f,ie);return cn(v,U,w),w})}function ke(E,F){const L=O(E,F);return L?Promise.reject(L):Promise.resolve()}function je(E){const F=us.values().next().value;return F&&typeof F.runWithContext=="function"?F.runWithContext(E):E()}function lt(E,F){let L;const[U,ie,be]=BF(E,F);L=Xa(U.reverse(),"beforeRouteLeave",E,F);for(const g of U)g.leaveGuards.forEach(v=>{L.push(mn(v,E,F))});const f=ke.bind(null,E,F);return L.push(f),ct(L).then(()=>{L=[];for(const g of i.list())L.push(mn(g,E,F));return L.push(f),ct(L)}).then(()=>{L=Xa(ie,"beforeRouteUpdate",E,F);for(const g of ie)g.updateGuards.forEach(v=>{L.push(mn(v,E,F))});return L.push(f),ct(L)}).then(()=>{L=[];for(const g of be)if(g.beforeEnter)if(Tt(g.beforeEnter))for(const v of g.beforeEnter)L.push(mn(v,E,F));else L.push(mn(g.beforeEnter,E,F));return L.push(f),ct(L)}).then(()=>(E.matched.forEach(g=>g.enterCallbacks={}),L=Xa(be,"beforeRouteEnter",E,F,je),L.push(f),ct(L))).then(()=>{L=[];for(const g of o.list())L.push(mn(g,E,F));return L.push(f),ct(L)}).catch(g=>jt(g,8)?g:Promise.reject(g))}function cn(E,F,L){a.list().forEach(U=>je(()=>U(E,F,L)))}function Fn(E,F,L,U,ie){const be=O(E,F);if(be)return be;const f=F===fn,g=ps?history.state:{};L&&(U||f?r.replace(E.fullPath,ae({scroll:f&&g&&g.scroll},ie)):r.push(E.fullPath,ie)),l.value=E,At(E,F,L,f),un()}let It;function tr(){It||(It=r.listen((E,F,L)=>{if(!Ii.listening)return;const U=A(E),ie=ee(U);if(ie){Q(ae(ie,{replace:!0}),U).catch(Dr);return}c=U;const be=l.value;ps&&uF(gf(be.fullPath,L.delta),ga()),lt(U,be).catch(f=>jt(f,12)?f:jt(f,2)?(Q(f.to,U).then(g=>{jt(g,20)&&!L.delta&&L.type===ri.pop&&r.go(-1,!1)}).catch(Dr),Promise.reject()):(L.delta&&r.go(-L.delta,!1),te(f,U,be))).then(f=>{f=f||Fn(U,be,!1),f&&(L.delta&&!jt(f,8)?r.go(-L.delta,!1):L.type===ri.pop&&jt(f,20)&&r.go(-1,!1)),cn(U,be,f)}).catch(Dr)}))}let ls=pr(),Ae=pr(),ce;function te(E,F,L){un(E);const U=Ae.list();return U.length?U.forEach(ie=>ie(E,F,L)):console.error(E),Promise.reject(E)}function $t(){return ce&&l.value!==fn?Promise.resolve():new Promise((E,F)=>{ls.add([E,F])})}function un(E){return ce||(ce=!E,tr(),ls.list().forEach(([F,L])=>E?L(E):F()),ls.reset()),E}function At(E,F,L,U){const{scrollBehavior:ie}=t;if(!ps||!ie)return Promise.resolve();const be=!L&&dF(gf(E.fullPath,0))||(U||!L)&&history.state&&history.state.scroll||null;return Fr().then(()=>ie(E,F,be)).then(f=>f&&cF(f)).catch(f=>te(f,E,F))}const ze=E=>r.go(E);let cs;const us=new Set,Ii={currentRoute:l,listening:!0,addRoute:p,removeRoute:m,clearRoutes:e.clearRoutes,hasRoute:b,getRoutes:_,resolve:A,options:t,push:D,replace:B,go:ze,back:()=>ze(-1),forward:()=>ze(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Ae.add,isReady:$t,install(E){const F=this;E.component("RouterLink",xF),E.component("RouterView",UF),E.config.globalProperties.$router=F,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>bs(l)}),ps&&!cs&&l.value===fn&&(cs=!0,D(r.location).catch(ie=>{}));const L={};for(const ie in fn)Object.defineProperty(L,ie,{get:()=>l.value[ie],enumerable:!0});E.provide(ma,F),E.provide(Au,rp(L)),E.provide(Yl,l);const U=E.unmount;us.add(E),E.unmount=function(){us.delete(E),us.size<1&&(c=fn,It&&It(),It=null,l.value=fn,cs=!1,ce=!1),U()}}};function ct(E){return E.reduce((F,L)=>F.then(()=>je(L)),Promise.resolve())}return Ii}function BF(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>Ls(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Ls(c,l))||r.push(l))}return[n,s,r]}function xU(){return wt(ma)}function LU(t){return wt(Au)}const jF=li({name:"HomeView",props:{isLogin:{type:Boolean,default:!1}},setup(){const t=pt(!1),e=pt([]),n=pt([]),s=new Array,r=pt(s),i=pt(""),o=pt("");return fc(()=>{Pl(WA,a=>{const l=a.val();e.value=Object.values(l)},a=>{console.error("讀取專案資料時出錯",a)}),Pl(qA,a=>{const l=a.val();n.value=Object.values(l)},a=>{console.error("讀取理監事資料時出錯",a)})}),{isLoading:t,projects:e,supervisors:n,visibleEmails:r,message:i,result:o}},methods:{toggleLogin(){this.$emit("toggleLogin")},toggleEmail(t){this.visibleEmails.includes(t)?this.visibleEmails.splice(this.visibleEmails.indexOf(t),1):this.visibleEmails.push(t)},sendMessage(){this.isLoading=!0,console.log(this.message),this.message.endsWith("？")||(this.message+="？"),Ce.get("https://members-backend.alearn13994229.workers.dev/ai/"+this.message,{headers:{"Content-Type":"application/json"}}).then(t=>{console.log(t),this.result=t.data,this.isLoading=!1})},parseResult(t){return t==="。"?"請說得詳細一點":t},sendFeedback(t){console.log(t),t==="good"?(console.log("good"),window.alert("感謝您的回饋！")):t==="bad"&&(console.log("bad"),window.confirm("請告訴我們哪裡做得不好，我們會努力改進！")?this.$router.push("/feedback"):window.alert("感謝您的回饋！"))}}}),Of="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAACDCAIAAAAs6NoaAAAAA3NCSVQICAjb4U/gAAAHtklEQVR4nO3dwXHbOBSA4aedLUDuwLccQ5XgCuKUoEMKyC232BUkHcQFZCZqY09iAT4wFZgdcA/ccCGAAEEQoPXM/5vMjk0+AiBtPgMghd11XSelHQ5S13I+S1UVrwvAVWlbEZH9Pkthf2cpBQDGZUpVvVUS1ocPUlV52w1gg3ZrDAkBIIe/XrsBABCLhAVADRIWADVIWADUIGEBKOZwkJsbaZpc5RmvNdT1f694Ddx3EYghhhhiZsW0rfzzj52zkuvqBvf3ncjFv1+/OktazJcv3Y8f3cvLGnURQwwx1xNTVZ1Id3eXqy6jh/X+vZ3h3Fc902J+/pTnZ6mq/z+aU64uYogh5tpi3r0T633P1LpWeXGUzxIC25T73mfSHYAaJCwAapCwAKjB8jIAijmf7an0ZUhYAEpiPSwA28R6WADUYNIdgBokLABqkLAAqEHCAqAGCQtAMbnXwyJhASipbTO+O7pKwjqd5Okp7wuvADZolYT1+CjHY8ZuIYBtYkgIQA0SFgA1SFgA1CBhAVCD5WUAFMN6WAA0YT0sANvEelgA1GDSHYAaJCwAapCwAKhBwnpNd3d3Dw8P5pbv378fDoe2bU+n08Hw9PTUxw9bPn786MbXdd00jXng3PL7+OPxaO41yx9tfyC+b49VvtWega/9x+Nx9Hyt9g8Wtifh+s/7wSMVrzW8pqZp9pcPT9u2reu6vwHM7NA0Tf/f5s9nyPsYK75pmqqqzANvb29nld+3pw8zjzLLd9sfju+/CJyvWeBo+4ewcPt9xc5tT8L13/MQfNThIE0j57Nc/h4mo4cFoCTWwwKwTayHBUANhoQA1CBhAVCDhAVADRIWADV4DwtAMayHBUAT1sMCsE2rJKzLj2sBQBom3QGoQcICoAYJC4AaJCwAapCwABRzOMjNTcaFD0hYAEpiPSwA28R6WADUYEgIQA0SFgA1SFgA1CBhAVCD5WUAFMN6WAA0YT0sANvEelgA1GDSHYAaJCwAapCwAKhBwgKgBgkLQDGshwVAE9bDArBNrIcFQA2GhADUIGEBUIOEBUANEhYANVheBkAxrIcFQBPWwwKwTayHBUANJt0BqEHCAqAGCQuAGiQsAGqQsAAUw3pYADRhPSwA28R6WADUYEgIQA0SFgA1SFgA1CBhAVBj13Vd8UoOB6lrOZ+lqorXpU3btvvLdSzathWR/X7fXj5X7cPMjeaWId53YHz5bkVW+aPtD8SbB/rO1z0w3LDI00xuT8L1F4zqr1im60PCymy324lIwlXd7Wb/LIa6hmMTCgkf5e5yT3D0cHOjFRBubfgCTp5p2hWAFqyHlV/aDWPmnUnWXd0fO2zpv3bbY20fLXN0u9UqX5YJHGgF9Lt8p2xlN1+x8Q1OZlYRPmtf9vTtcgshz8bgz1FmS+6W+N5ZTMcnvjFze1gxtcT0sNxmx7ckUP6ktMsy61u5TKzxlxdhTLovMtpxmAzzCfxaj27sDfUO/SxzV+Co+F2RTUrgGyqmlRZz4HCJJsPcfuVwVHivFWDtClSBSazpvpSbs3xh4ZFOeFfMuMzd5RY1ZARfgaO7rKLMLDl5Oj5ugdYXkzezrwQVWUBLO68NCWuptDHX8jGCOfcRnsOa1WbfrvD4a3JWy9ckt9j4sW3akHDWXGEaX/8reQyLAUNCrbo/Zu0ahEd/s8aGvjZYc9Juq9yx0uSdHG7VwqF3vISWIwsSlj7urWLNYcXHjwYH9vraM8qtOuZ0wrXI5ejP3BhfYxbhKa2APti6UG9W7vWwGBIutfIvnDvdE7N9uEnE/9KAtXeyL2NOKk/G+MTc9tZo1633tXo3o5c0xs6Z0HzLvbOs62GtkrBOJ2lbub9/k69iRc5hJZcfP/81WUJ47im+loQbLNz182XbQuIzafg5iTnvNuuChGe4ELBKwnp8lLqWqtrCm+7xfDdn4MaQ6B6QjHVJAtXNeiTnzoj7do1uH+IDXTPz65ihrhsQLnxu78/91vqhkHHWwZDw1fiGP5G/9+EbMjBeM6sIZCurJcM9GUgNw4xMzCn40pAE+32+MLfxkw2IET/aJWetg4S11JVMmk52W0aDR781t0fmDisg/pqM5tO5B84amiVnlll/S7Y1S7UiEtZSpeewFrZk9FaJbHPaXT2UHx6yLTR094bHo+YX4WOLZisURcJSJnDnR3aUwoUsbNKsOazsLSlhdJA72YcyAwK7Ro9FAAlLmSXvEEwWYhUYX1q4dvPx/+QwM+ZZhPncc+hb+QpMFp6Pc6fkfQGBXb5j347zOe//LouEtdT1PIlfX+CFCZeVYubW5Q4zA62aW3igxkIBV/jTLCXry0ysh7VUxknu8N6MI7uEA+MPCb+WYW2ZO8Xu5sfRmf4NpYONuca/2wAwis8SAlCDhAVADRIWADVIWADUIGEBKCb3elgkLAAlZV0Pa5WEdTrJ01PeF14BbNAqCevxUY7HjN1CANvEkBCAGiQsAGqQsACocfnh58+fpa4vtnz7Zi/EnhDz/DxSc6G6iCGGmDcc05nu7zuRi3+/fnWWtBiR7nxeqS5iiCHmemJeXrqXl1x1Xa7W0DT2s7zbW7m9vdiSEPPpkzw/y/l8kSwL1UUMMcS83ZhVlpd5eJDfv+XrV7t9ADDHv2/b4eELVrgCAAAAAElFTkSuQmCC",HF="/assets/main-B2ZSMcEb.png",VF="/assets/autolearn_donate_QRCode-CzydMDc6.png",WF={class:"ui container"},qF={class:"ui warning message",id:"action-message"},GF={class:"ui two column stackable segment padded grid"},zF={class:"column"},KF={class:"ui fluid input"},YF={class:"result"},JF={key:0},QF={key:1},XF={class:"ui two stackable cards"},ZF={class:"card"},eU={class:"content"},tU={class:"description"},nU={key:0},sU=["href"],rU={key:1};function iU(t,e,n,s,r,i){const o=gr("RouterLink");return ye(),Ve("main",WF,[T("div",qF,[e[7]||(e[7]=T("div",{class:"header"},"請協助捍衛每個孩子選擇自學的權利",-1)),T("p",null,[e[6]||(e[6]=ne("只有補助自學，弱勢家庭的孩子才有足夠的機會參與實驗教育")),le(o,{id:"action-link",to:"/action",name:"action"},{default:we(()=>e[5]||(e[5]=[T("i",{class:"users icon"},null,-1),ne("瞭解修法焦點"),T("i",{class:"chevron right icon"},null,-1)])),_:1})])]),T("div",GF,[e[15]||(e[15]=Ia('<div class="sixteen wide center aligned column" id="main-column" data-v-2f934230><h1 class="ui header" id="main-title" data-v-2f934230>自主學習促進會</h1></div><div class="column right-bordered" data-v-2f934230><h2 class="ui header" data-v-2f934230>本會網站改版中，請點擊<br class="thin-only" data-v-2f934230><a class="text-underline" href="https://sites.google.com/view/autoalearn/%E9%A6%96%E9%A0%81" data-v-2f934230>這裡前往舊版官方網站</a></h2><img id="donate" src="'+Of+'" alt="愛心碼" data-v-2f934230><p data-v-2f934230>自主學習，就是學習自主。</p><p data-v-2f934230>與他律到自主的過程，一般會經過解放散漫、自我中心、眼高手低和自主成熟這四個階段。</p><p data-v-2f934230>在解放散漫期需要安全感和健康的生活節奏、自我中心期需要明確界限、眼高手低期需要踏實的累積與創作。</p><p data-v-2f934230>這些需要成人有意識的提點和支持。</p><p data-v-2f934230>因此，本會致力於促進自主學習與教育的土壤。</p></div>',2)),T("div",zF,[e[13]||(e[13]=T("img",{id:"main",src:HF,alt:"logo"},null,-1)),e[14]||(e[14]=T("h2",{class:"left aligned ui header"},[ne("自學AI"),T("div",{class:"left aligned ui sub header"},"以自學問答集為基礎，提供更即時的回答")],-1)),T("div",KF,[Mi(T("input",{id:"input-message",type:"text",placeholder:"問AI關於自學的任何問題...","onUpdate:modelValue":e[0]||(e[0]=a=>t.message=a),onKeyup:e[1]||(e[1]=xb((...a)=>t.sendMessage&&t.sendMessage(...a),["enter"]))},null,544),[[hl,t.message]]),T("button",{class:"ui primary button",id:"send-button",onClick:e[2]||(e[2]=(...a)=>t.sendMessage&&t.sendMessage(...a))},"送出")]),T("div",YF,[t.result===""&&t.message!==""&&t.isLoading?(ye(),Ve("p",JF,"載入中，請稍候...")):t.result!==""?(ye(),Ve("p",QF,[ne(Za(t.parseResult(t.result)),1),e[10]||(e[10]=T("br",null,null,-1)),e[11]||(e[11]=T("br",null,null,-1)),e[12]||(e[12]=ne("您覺得這個回答怎麼樣呢？")),T("button",{class:"ui basic green button",onClick:e[3]||(e[3]=a=>t.sendFeedback("good"))},e[8]||(e[8]=[T("i",{class:"thumbs up icon"},null,-1),ne("很棒")])),T("button",{class:"ui basic red button",onClick:e[4]||(e[4]=a=>t.sendFeedback("bad"))},e[9]||(e[9]=[T("i",{class:"thumbs down icon"},null,-1),ne("不佳")]))])):ft("",!0)])])]),e[20]||(e[20]=T("div",{class:"ui divider"},null,-1)),T("div",XF,[e[18]||(e[18]=Ia('<div class="card" data-v-2f934230><div class="content" data-v-2f934230><div class="header" data-v-2f934230>本會歷史</div><div class="description" data-v-2f934230><p data-v-2f934230>自主學習促進會的歷史可追溯至1994年種籽親子實驗小學的創立，這是台灣民主學校的先驅。</p><p data-v-2f934230>1998年，台北市自主學習實驗計畫開始，為期六年，證明了自主學習理念在中學階段的可行性。</p><p data-v-2f934230>2000年，面臨停辦危機時，學生發起了台灣首次中學生自發的學運，成功爭取續辦至第三屆學生畢業。</p><p data-v-2f934230>2001年3月，為延續自主學習的經驗與知識，本會正式成立。</p><p data-v-2f934230>2006-2008年間，本會通過&quot;自學中心&quot;提供課程和營隊，幫助體制內學生體驗自主學習。</p><p data-v-2f934230>2008-2010年，&quot;自主培力學園&quot;為拒學、懼學和想自學的青少年提供全日制團體學習。</p><p data-v-2f934230>2009年起，獨立教育工作者社群成立，致力於開設學習團體、培訓教師、支持家長，並開發自學資源。</p><p data-v-2f934230>本會持續致力於推動自主學習理念，為台灣教育改革提供新方向和活力。</p></div></div></div>',1)),T("div",ZF,[T("div",eU,[e[17]||(e[17]=T("div",{class:"header"},"本會專案一覽",-1)),T("div",tU,[e[16]||(e[16]=T("ul",null,[T("li",null,[T("a",{href:"https://sites.google.com/view/autoalearn/%E9%A6%96%E9%A0%81",target:"_blank",rel:"noopener noreferrer"},"舊版官方網站")]),T("li",null,[T("a",{href:"https://www.facebook.com/alearnTW",target:"_blank",rel:"noopener noreferrer"},"臉書「自主學習促進會」專頁")]),T("li",null,[T("a",{href:"https://www.facebook.com/groups/homeschooltw",target:"_blank",rel:"noopener noreferrer"},"臉書「在家自學社群」社團")]),T("li",null,[T("a",{href:"https://lin.ee/CashU46",target:"_blank",rel:"noopener noreferrer"},"自學AI聊天機器人@Line")])],-1)),t.projects.length?(ye(),Ve("ul",nU,[(ye(!0),Ve(gt,null,Ey(t.projects,a=>(ye(),Ve("li",{key:a.id},[T("a",{href:a.website,target:"_blank",rel:"noopener noreferrer"},Za(a.full_name),9,sU)]))),128))])):(ye(),Ve("p",rU,"載入中..."))])])]),e[19]||(e[19]=Ia('<div class="card" data-v-2f934230><div class="content" data-v-2f934230><div class="header" data-v-2f934230>以愛心碼捐助本會</div><div class="description" data-v-2f934230><p data-v-2f934230>本會是一個非營利組織，需要您的支持。</p><p data-v-2f934230>愛心碼取為「9806」，是因為最初成立的契機，在於1998~2006年的「台北市自主學習（中學六年一貫）實驗計畫」，本會第一代會員多是計畫中的親師生及關注計畫的學者賢達，別具意義。</p><p data-v-2f934230>邀請並歡迎大家未來在開立電子發票的商家購物時，可主動向店員要求使用愛心碼，說出捐贈碼9806，或出示條碼即可。發票若中獎，將會自動捐入本會！</p><img id="donate" src="'+Of+'" alt="愛心碼" data-v-2f934230></div></div></div><div class="card" data-v-2f934230><div class="content" data-v-2f934230><div class="header" data-v-2f934230>線上捐款</div><div class="description" data-v-2f934230><img id="donate-qrcode" src="'+VF+'" alt="線上捐款" data-v-2f934230><p data-v-2f934230>捐款流程：</p><ol data-v-2f934230><li data-v-2f934230>請掃描上方 QR Code 或使用以下帳戶進行捐款：<br data-v-2f934230>台北富邦 士林分行（012）<br data-v-2f934230>帳號：30012-0000601<br data-v-2f934230>戶名：社團法人中華民國自主學習促進會</li><li data-v-2f934230>完成捐款後，請將以下資訊寄至本會行政室：<br data-v-2f934230><a href="mailto:alearn13994229@gmail.com" data-v-2f934230>Email：alearn13994229@gmail.com</a><ul data-v-2f934230><li data-v-2f934230>捐款人姓名</li><li data-v-2f934230>聯絡電話</li><li data-v-2f934230>通訊地址</li><li data-v-2f934230>捐款金額</li><li data-v-2f934230>匯款帳號後五碼</li></ul></li><li data-v-2f934230>本會將開立捐款收據並寄回給您，可供節稅使用。</li></ol></div></div></div>',2))])])}const oU=Su(jF,[["render",iU],["__scopeId","data-v-2f934230"]]),uv=$F({history:gF("/"),routes:[{path:"/",name:"home",component:oU},{path:"/action",name:"action",component:()=>xe(()=>import("./ActionView-DkfzgeyT.js"),__vite__mapDeps([0,1]))},{path:"/podcast",name:"padcast",component:()=>xe(()=>import("./PodcastView-Bbk3hOf6.js"),[])},{path:"/admin",name:"AdminView",component:()=>xe(()=>import("./AdminView-DaZkm-mV.js"),__vite__mapDeps([2,3]))},{path:"/doc",name:"DocView",component:()=>xe(()=>import("./DocView-Cd2-0Vwg.js"),__vite__mapDeps([4,5]))},{path:"/join-us",name:"JoinUsView",component:()=>xe(()=>import("./JoinUsView-DmrQn4eU.js"),__vite__mapDeps([6,7]))},{path:"/changelog",name:"ChangeLogView",component:()=>xe(()=>import("./ChangeLogView-LgcgXWRd.js"),__vite__mapDeps([8,9]))},{path:"/maps",name:"MapsView",component:()=>xe(()=>import("./MapsView-Cum_6abA.js"),__vite__mapDeps([10,11,12,13,14,15,16]))},{path:"/flag/:uid",name:"FlagView",component:()=>xe(()=>import("./FlagView-Dv10BlA1.js"),__vite__mapDeps([17,15,18,19,13,14,20]))},{path:"/profile",name:"ProfileView",component:()=>xe(()=>import("./ProfileView-CUDoldLh.js"),__vite__mapDeps([21,18,15,19,11,12,22]))},{path:"/privacy-policy",name:"PrivacyPolicyView",component:()=>xe(()=>import("./PrivacyPolicyView-RT2mQVA2.js"),__vite__mapDeps([23,24]))},{path:"/feedback",name:"FeedbackView",component:()=>xe(()=>import("./FeedbackView-Dc6bhG-G.js"),__vite__mapDeps([25,26]))},{path:"/faq",name:"FaqView",component:()=>xe(()=>import("./FaqView-DPUdn6lt.js"),__vite__mapDeps([27,28]))},{path:"/create_faq",name:"CreateFaqView",component:()=>xe(()=>import("./CreateFaqView-DrkOUWGh.js"),__vite__mapDeps([29,30]))},{path:"/edit_faq/:id",name:"EditFaqView",component:()=>xe(()=>import("./EditFaqView-D56s8cqG.js"),__vite__mapDeps([31,32]))},{path:"/about",name:"about",component:()=>xe(()=>import("./AboutView-dkZ06eda.js"),__vite__mapDeps([33,34]))},{path:"/404",name:"404Error",component:()=>xe(()=>import("./404ErrorView-hsWIqbfc.js"),__vite__mapDeps([35,36]))},{path:"/:pathMatch(.*)*",redirect:"/404"}]});function Jl(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Nf(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,s)}return n}function Ql(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Nf(Object(n),!0).forEach(function(s){Jl(t,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Nf(Object(n)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(n,s))})}return t}var aU=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return new Promise(function(s,r){if(!(typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],o=document.createElement("script");if(o.async=!0,o.src=e,o.defer=n.defer,n.preconnectOrigin){var a=document.createElement("link");a.href=n.preconnectOrigin,a.rel="preconnect",i.appendChild(a)}i.appendChild(o),o.onload=s,o.onerror=r}})},lU=function t(e){for(var n=arguments.length,s=new Array(n>1?n-1:0),r=1;r<n;r++)s[r-1]=arguments[r];if(!s.length)return e;var i=s.shift();if(!(!yr(e)||!yr(i))){for(var o in i)yr(i[o])?(e[o]||Object.assign(e,Jl({},o,{})),t(e[o],i[o])):Object.assign(e,Jl({},o,i[o]));return t.apply(void 0,[e].concat(s))}},Si=function(){return!(typeof window>"u"||typeof document>"u")},kf=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;Si()},cU=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return kf('Missing "appName" property inside the plugin options.',e.app_name==null),kf('Missing "name" property in the route.',e.screen_name==null),e};function uU(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",n=t.split("/"),s=e.split("/");return n[0]===""&&e[e.length-1]==="/"&&n.shift(),s.join("/")+n.join("/")}var dU=function(){return{bootstrap:!0,onReady:null,onError:null,onBeforeTrack:null,onAfterTrack:null,pageTrackerTemplate:null,customResourceURL:"https://www.googletagmanager.com/gtag/js",customPreconnectOrigin:"https://www.googletagmanager.com",deferScriptLoad:!1,pageTrackerExcludedRoutes:[],pageTrackerEnabled:!0,enabled:!0,disableScriptLoad:!1,pageTrackerScreenviewEnabled:!1,appName:null,pageTrackerUseFullPath:!1,pageTrackerPrependBase:!0,pageTrackerSkipSamePath:!0,globalDataLayerName:"dataLayer",globalObjectName:"gtag",defaultGroupName:"default",includes:null,config:{id:null,params:{send_page_view:!1}}}},dv={},hU=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=dU();dv=lU(n,e)},at=function(){return dv},is=function(){var t,e=at(),n=e.globalObjectName;!Si()||typeof window[n]>"u"||(t=window)[n].apply(t,arguments)},Ru=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var s=at(),r=s.config,i=s.includes;is.apply(void 0,["config",r.id].concat(e)),Array.isArray(i)&&i.forEach(function(o){is.apply(void 0,["config",o.id].concat(e))})},Df=function(e,n){Si()&&(window["ga-disable-".concat(e)]=n)},hv=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,e=at(),n=e.config,s=e.includes;Df(n.id,t),Array.isArray(s)&&s.forEach(function(r){return Df(r.id,t)})},fv=function(){hv(!0)},fU=function(){hv(!1)},pv,pU=function(e){pv=e},Pu=function(){return pv},as=function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=at(),s=n.includes,r=n.defaultGroupName;e.send_to==null&&Array.isArray(s)&&s.length&&(e.send_to=s.map(function(i){return i.id}).concat(r)),is("event",t,e)},gv=function(t){if(Si()){var e;if(typeof t=="string")e={page_path:t};else if(t.path||t.fullPath){var n=at(),s=n.pageTrackerUseFullPath,r=n.pageTrackerPrependBase,i=Pu(),o=i&&i.options.base,a=s?t.fullPath:t.path;e=Ql(Ql({},t.name&&{page_title:t.name}),{},{page_path:r?uU(a,o):a})}else e=t;e.page_location==null&&(e.page_location=window.location.href),e.send_page_view==null&&(e.send_page_view=!0),as("page_view",e)}},mv=function(t){var e=at(),n=e.appName;if(t){var s;typeof t=="string"?s={screen_name:t}:s=t,s.app_name=s.app_name||n,as("screen_view",s)}},gU=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];as.apply(void 0,["exception"].concat(e))},mU=function(t){Ru("linker",t)},_U=function(t){as("timing_complete",t)},vU=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];is.apply(void 0,["set"].concat(e))},yU=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];as.apply(void 0,["refund"].concat(e))},bU=function(t){as("purchase",t)},wU=function(t){Ru({custom_map:t})},EU=Object.freeze({__proto__:null,query:is,config:Ru,optOut:fv,optIn:fU,pageview:gv,screenview:mv,exception:gU,linker:mU,time:_U,set:vU,refund:yU,purchase:bU,customMap:wU,event:as}),CU=function(e){e.config.globalProperties.$gtag=EU},TU=function(){if(Si()){var t=at(),e=t.enabled,n=t.globalObjectName,s=t.globalDataLayerName;return window[n]==null&&(window[s]=window[s]||[],window[n]=function(){window[s].push(arguments)}),window[n]("js",new Date),e||fv(),window[n]}},xf=function(e){return Ql({send_page_view:!1},e)},_v=function(){var t=at(),e=t.config,n=t.includes;is("config",e.id,xf(e.params)),Array.isArray(n)&&n.forEach(function(s){is("config",s.id,xf(s.params))})},Lf=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=at(),s=n.appName,r=n.pageTrackerTemplate,i=n.pageTrackerScreenviewEnabled,o=n.pageTrackerSkipSamePath;if(!(o&&t.path===e.path)){var a=t;if(q(r)?a=r(t,e):i&&(a=cU({app_name:s,screen_name:t.name})),i){mv(a);return}gv(a)}},Mf=function(e){var n=at(),s=n.pageTrackerExcludedRoutes;return s.includes(e.path)||s.includes(e.name)},SU=function(){var t=at(),e=t.onBeforeTrack,n=t.onAfterTrack,s=Pu();s.isReady().then(function(){Fr().then(function(){var r=s.currentRoute;_v(),!Mf(r.value)&&Lf(r.value)}),s.afterEach(function(r,i){Fr().then(function(){Mf(r)||(q(e)&&e(r,i),Lf(r,i),q(n)&&n(r,i))})})})},IU=function(){var t=at(),e=t.onReady,n=t.onError,s=t.globalObjectName,r=t.globalDataLayerName,i=t.config,o=t.customResourceURL,a=t.customPreconnectOrigin,l=t.deferScriptLoad,c=t.pageTrackerEnabled,u=t.disableScriptLoad,d=!!(c&&Pu());if(TU(),d?SU():_v(),!u)return aU("".concat(o,"?id=").concat(i.id,"&l=").concat(r),{preconnectOrigin:a,defer:l}).then(function(){e&&e(window[s])}).catch(function(h){return n&&n(h),h})},AU=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=arguments.length>2?arguments[2]:void 0;CU(e),hU(n),pU(s),at().bootstrap&&IU()};const _a=Fb(MM);_a.use(Hb());_a.use(uv);_a.use(AU,{config:{id:"G-54PE9QLK7Z"}},uv);_a.mount("#app");export{Ht as A,gr as B,li as C,Sr as D,xU as E,gt as F,zA as G,le as H,we as I,PU as J,Ob as K,mS as L,NU as M,or as N,LU as O,Su as _,Pl as a,DU as b,mt as c,Ve as d,Ia as e,T as f,Ey as g,ne as h,ft as i,ye as j,Ws as k,Ce as l,Gs as m,Yn as n,fc as o,OU as p,WA as q,pt as r,tu as s,Za as t,qA as u,hl as v,Mi as w,RU as x,kU as y,Di as z};
