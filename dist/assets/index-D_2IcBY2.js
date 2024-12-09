const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DocView-yVsHiZQ5.js","assets/DocView-DPuEcRNM.css","assets/ChangeLogView-CLuhSGbu.js","assets/ChangeLogView-BvE15HZA.css","assets/MapsView-CxQdBRwn.js","assets/leaflet-src-dOO-dvif.js","assets/leaflet-src-HupOsEJb.css","assets/Loader-CkmCfit2.js","assets/Loader-D04Knui3.css","assets/mix-O88PJOmL.js","assets/MapsView-BZlJAW8u.css","assets/FlagView-CqMPPmug.js","assets/Card-BhM8-IRv.js","assets/Card-BUJkKdzi.css","assets/FlagView-BdJvIrvN.css","assets/ProfileView-mejET_05.js","assets/ProfileView-Kgc4-67G.css","assets/PrivacyPolicyView-Fo8yxNN0.js","assets/PrivacyPolicyView-CBD_1jnB.css","assets/FeedbackView-O8GYs6Ka.js","assets/FeedbackView-DR4UgRx8.css","assets/FaqView-IVkBY_ms.js","assets/FaqView-C2ba5Deb.css","assets/CreateFaqView-1Px3a8AP.js","assets/CreateFaqView-_Khm9L0Y.css","assets/EditFaqView-0PSOLxle.js","assets/EditFaqView-BijKtgWG.css","assets/AboutView-DLINsza3.js","assets/AboutView-DaBWpBrY.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Vl(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ce={},ps=[],kt=()=>{},J_=()=>!1,To=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),jl=t=>t.startsWith("onUpdate:"),Oe=Object.assign,ql=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Q_=Object.prototype.hasOwnProperty,se=(t,e)=>Q_.call(t,e),H=Array.isArray,gs=t=>Qr(t)==="[object Map]",xs=t=>Qr(t)==="[object Set]",Cu=t=>Qr(t)==="[object Date]",G=t=>typeof t=="function",Ce=t=>typeof t=="string",Lt=t=>typeof t=="symbol",pe=t=>t!==null&&typeof t=="object",wf=t=>(pe(t)||G(t))&&G(t.then)&&G(t.catch),Cf=Object.prototype.toString,Qr=t=>Cf.call(t),X_=t=>Qr(t).slice(8,-1),If=t=>Qr(t)==="[object Object]",Gl=t=>Ce(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,fr=Vl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ao=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Z_=/-(\w)/g,ct=Ao(t=>t.replace(Z_,(e,n)=>n?n.toUpperCase():"")),ev=/\B([A-Z])/g,On=Ao(t=>t.replace(ev,"-$1").toLowerCase()),Ro=Ao(t=>t.charAt(0).toUpperCase()+t.slice(1)),ha=Ao(t=>t?`on${Ro(t)}`:""),En=(t,e)=>!Object.is(t,e),Pi=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Sf=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Wi=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Iu;const Po=()=>Iu||(Iu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function zl(t){if(H(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Ce(s)?rv(s):zl(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(Ce(t)||pe(t))return t}const tv=/;(?![^(]*\))/g,nv=/:([^]+)/,sv=/\/\*[^]*?\*\//g;function rv(t){const e={};return t.replace(sv,"").split(tv).forEach(n=>{if(n){const s=n.split(nv);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Kn(t){let e="";if(Ce(t))e=t;else if(H(t))for(let n=0;n<t.length;n++){const s=Kn(t[n]);s&&(e+=s+" ")}else if(pe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const iv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ov=Vl(iv);function Tf(t){return!!t||t===""}function av(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Xr(t[s],e[s]);return n}function Xr(t,e){if(t===e)return!0;let n=Cu(t),s=Cu(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Lt(t),s=Lt(e),n||s)return t===e;if(n=H(t),s=H(e),n||s)return n&&s?av(t,e):!1;if(n=pe(t),s=pe(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Xr(t[o],e[o]))return!1}}return String(t)===String(e)}function Kl(t,e){return t.findIndex(n=>Xr(n,e))}const Af=t=>!!(t&&t.__v_isRef===!0),Ga=t=>Ce(t)?t:t==null?"":H(t)||pe(t)&&(t.toString===Cf||!G(t.toString))?Af(t)?Ga(t.value):JSON.stringify(t,Rf,2):String(t),Rf=(t,e)=>Af(e)?Rf(t,e.value):gs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],i)=>(n[da(s,i)+" =>"]=r,n),{})}:xs(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>da(n))}:Lt(e)?da(e):pe(e)&&!H(e)&&!If(e)?String(e):e,da=(t,e="")=>{var n;return Lt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let nt;class Pf{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=nt,!e&&nt&&(this.index=(nt.scopes||(nt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=nt;try{return nt=this,e()}finally{nt=n}}}on(){nt=this}off(){nt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function lv(t){return new Pf(t)}function cv(){return nt}let de;const fa=new WeakSet;class Of{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,nt&&nt.active&&nt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,fa.has(this)&&(fa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||kf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Su(this),Df(this);const e=de,n=vt;de=this,vt=!0;try{return this.fn()}finally{xf(this),de=e,vt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ql(e);this.deps=this.depsTail=void 0,Su(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?fa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){za(this)&&this.run()}get dirty(){return za(this)}}let Nf=0,pr,gr;function kf(t,e=!1){if(t.flags|=8,e){t.next=gr,gr=t;return}t.next=pr,pr=t}function Yl(){Nf++}function Jl(){if(--Nf>0)return;if(gr){let e=gr;for(gr=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;pr;){let e=pr;for(pr=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Df(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function xf(t){let e,n=t.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),Ql(s),uv(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}t.deps=e,t.depsTail=n}function za(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Lf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Lf(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Rr))return;t.globalVersion=Rr;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!za(t)){t.flags&=-3;return}const n=de,s=vt;de=t,vt=!0;try{Df(t);const r=t.fn(t._value);(e.version===0||En(r,t._value))&&(t._value=r,e.version++)}catch(r){throw e.version++,r}finally{de=n,vt=s,xf(t),t.flags&=-3}}function Ql(t,e=!1){const{dep:n,prevSub:s,nextSub:r}=t;if(s&&(s.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Ql(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function uv(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let vt=!0;const Mf=[];function Nn(){Mf.push(vt),vt=!1}function kn(){const t=Mf.pop();vt=t===void 0?!0:t}function Su(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=de;de=void 0;try{e()}finally{de=n}}}let Rr=0;class hv{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Xl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!de||!vt||de===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==de)n=this.activeLink=new hv(de,this),de.deps?(n.prevDep=de.depsTail,de.depsTail.nextDep=n,de.depsTail=n):de.deps=de.depsTail=n,Ff(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=de.depsTail,n.nextDep=void 0,de.depsTail.nextDep=n,de.depsTail=n,de.deps===n&&(de.deps=s)}return n}trigger(e){this.version++,Rr++,this.notify(e)}notify(e){Yl();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Jl()}}}function Ff(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Ff(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ka=new WeakMap,Gn=Symbol(""),Ya=Symbol(""),Pr=Symbol("");function xe(t,e,n){if(vt&&de){let s=Ka.get(t);s||Ka.set(t,s=new Map);let r=s.get(n);r||(s.set(n,r=new Xl),r.map=s,r.key=n),r.track()}}function Wt(t,e,n,s,r,i){const o=Ka.get(t);if(!o){Rr++;return}const a=l=>{l&&l.trigger()};if(Yl(),e==="clear")o.forEach(a);else{const l=H(t),c=l&&Gl(n);if(l&&n==="length"){const u=Number(s);o.forEach((h,d)=>{(d==="length"||d===Pr||!Lt(d)&&d>=u)&&a(h)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(Pr)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Gn)),gs(t)&&a(o.get(Ya)));break;case"delete":l||(a(o.get(Gn)),gs(t)&&a(o.get(Ya)));break;case"set":gs(t)&&a(o.get(Gn));break}}Jl()}function ls(t){const e=ne(t);return e===t?e:(xe(e,"iterate",Pr),lt(t)?e:e.map(Le))}function Oo(t){return xe(t=ne(t),"iterate",Pr),t}const dv={__proto__:null,[Symbol.iterator](){return pa(this,Symbol.iterator,Le)},concat(...t){return ls(this).concat(...t.map(e=>H(e)?ls(e):e))},entries(){return pa(this,"entries",t=>(t[1]=Le(t[1]),t))},every(t,e){return $t(this,"every",t,e,void 0,arguments)},filter(t,e){return $t(this,"filter",t,e,n=>n.map(Le),arguments)},find(t,e){return $t(this,"find",t,e,Le,arguments)},findIndex(t,e){return $t(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return $t(this,"findLast",t,e,Le,arguments)},findLastIndex(t,e){return $t(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return $t(this,"forEach",t,e,void 0,arguments)},includes(...t){return ga(this,"includes",t)},indexOf(...t){return ga(this,"indexOf",t)},join(t){return ls(this).join(t)},lastIndexOf(...t){return ga(this,"lastIndexOf",t)},map(t,e){return $t(this,"map",t,e,void 0,arguments)},pop(){return Xs(this,"pop")},push(...t){return Xs(this,"push",t)},reduce(t,...e){return Tu(this,"reduce",t,e)},reduceRight(t,...e){return Tu(this,"reduceRight",t,e)},shift(){return Xs(this,"shift")},some(t,e){return $t(this,"some",t,e,void 0,arguments)},splice(...t){return Xs(this,"splice",t)},toReversed(){return ls(this).toReversed()},toSorted(t){return ls(this).toSorted(t)},toSpliced(...t){return ls(this).toSpliced(...t)},unshift(...t){return Xs(this,"unshift",t)},values(){return pa(this,"values",Le)}};function pa(t,e,n){const s=Oo(t),r=s[e]();return s!==t&&!lt(t)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.value&&(i.value=n(i.value)),i}),r}const fv=Array.prototype;function $t(t,e,n,s,r,i){const o=Oo(t),a=o!==t&&!lt(t),l=o[e];if(l!==fv[e]){const h=l.apply(t,i);return a?Le(h):h}let c=n;o!==t&&(a?c=function(h,d){return n.call(this,Le(h),d,t)}:n.length>2&&(c=function(h,d){return n.call(this,h,d,t)}));const u=l.call(o,c,s);return a&&r?r(u):u}function Tu(t,e,n,s){const r=Oo(t);let i=n;return r!==t&&(lt(t)?n.length>3&&(i=function(o,a,l){return n.call(this,o,a,l,t)}):i=function(o,a,l){return n.call(this,o,Le(a),l,t)}),r[e](i,...s)}function ga(t,e,n){const s=ne(t);xe(s,"iterate",Pr);const r=s[e](...n);return(r===-1||r===!1)&&tc(n[0])?(n[0]=ne(n[0]),s[e](...n)):r}function Xs(t,e,n=[]){Nn(),Yl();const s=ne(t)[e].apply(t,n);return Jl(),kn(),s}const pv=Vl("__proto__,__v_isRef,__isVue"),Uf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Lt));function gv(t){Lt(t)||(t=String(t));const e=ne(this);return xe(e,"has",t),e.hasOwnProperty(t)}class $f{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?Sv:Vf:i?Wf:Hf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=H(e);if(!r){let l;if(o&&(l=dv[n]))return l;if(n==="hasOwnProperty")return gv}const a=Reflect.get(e,n,Ue(e)?e:s);return(Lt(n)?Uf.has(n):pv(n))||(r||xe(e,"get",n),i)?a:Ue(a)?o&&Gl(n)?a:a.value:pe(a)?r?qf(a):No(a):a}}class Bf extends $f{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];if(!this._isShallow){const l=Yn(i);if(!lt(s)&&!Yn(s)&&(i=ne(i),s=ne(s)),!H(e)&&Ue(i)&&!Ue(s))return l?!1:(i.value=s,!0)}const o=H(e)&&Gl(n)?Number(n)<e.length:se(e,n),a=Reflect.set(e,n,s,Ue(e)?e:r);return e===ne(r)&&(o?En(s,i)&&Wt(e,"set",n,s):Wt(e,"add",n,s)),a}deleteProperty(e,n){const s=se(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&Wt(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!Lt(n)||!Uf.has(n))&&xe(e,"has",n),s}ownKeys(e){return xe(e,"iterate",H(e)?"length":Gn),Reflect.ownKeys(e)}}class mv extends $f{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const _v=new Bf,vv=new mv,yv=new Bf(!0);const Ja=t=>t,bi=t=>Reflect.getPrototypeOf(t);function bv(t,e,n){return function(...s){const r=this.__v_raw,i=ne(r),o=gs(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...s),u=n?Ja:e?Qa:Le;return!e&&xe(i,"iterate",l?Ya:Gn),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Ei(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Ev(t,e){const n={get(r){const i=this.__v_raw,o=ne(i),a=ne(r);t||(En(r,a)&&xe(o,"get",r),xe(o,"get",a));const{has:l}=bi(o),c=e?Ja:t?Qa:Le;if(l.call(o,r))return c(i.get(r));if(l.call(o,a))return c(i.get(a));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!t&&xe(ne(r),"iterate",Gn),Reflect.get(r,"size",r)},has(r){const i=this.__v_raw,o=ne(i),a=ne(r);return t||(En(r,a)&&xe(o,"has",r),xe(o,"has",a)),r===a?i.has(r):i.has(r)||i.has(a)},forEach(r,i){const o=this,a=o.__v_raw,l=ne(a),c=e?Ja:t?Qa:Le;return!t&&xe(l,"iterate",Gn),a.forEach((u,h)=>r.call(i,c(u),c(h),o))}};return Oe(n,t?{add:Ei("add"),set:Ei("set"),delete:Ei("delete"),clear:Ei("clear")}:{add(r){!e&&!lt(r)&&!Yn(r)&&(r=ne(r));const i=ne(this);return bi(i).has.call(i,r)||(i.add(r),Wt(i,"add",r,r)),this},set(r,i){!e&&!lt(i)&&!Yn(i)&&(i=ne(i));const o=ne(this),{has:a,get:l}=bi(o);let c=a.call(o,r);c||(r=ne(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,i),c?En(i,u)&&Wt(o,"set",r,i):Wt(o,"add",r,i),this},delete(r){const i=ne(this),{has:o,get:a}=bi(i);let l=o.call(i,r);l||(r=ne(r),l=o.call(i,r)),a&&a.call(i,r);const c=i.delete(r);return l&&Wt(i,"delete",r,void 0),c},clear(){const r=ne(this),i=r.size!==0,o=r.clear();return i&&Wt(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=bv(r,t,e)}),n}function Zl(t,e){const n=Ev(t,e);return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(se(n,r)&&r in s?n:s,r,i)}const wv={get:Zl(!1,!1)},Cv={get:Zl(!1,!0)},Iv={get:Zl(!0,!1)};const Hf=new WeakMap,Wf=new WeakMap,Vf=new WeakMap,Sv=new WeakMap;function Tv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Av(t){return t.__v_skip||!Object.isExtensible(t)?0:Tv(X_(t))}function No(t){return Yn(t)?t:ec(t,!1,_v,wv,Hf)}function jf(t){return ec(t,!1,yv,Cv,Wf)}function qf(t){return ec(t,!0,vv,Iv,Vf)}function ec(t,e,n,s,r){if(!pe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=Av(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function ms(t){return Yn(t)?ms(t.__v_raw):!!(t&&t.__v_isReactive)}function Yn(t){return!!(t&&t.__v_isReadonly)}function lt(t){return!!(t&&t.__v_isShallow)}function tc(t){return t?!!t.__v_raw:!1}function ne(t){const e=t&&t.__v_raw;return e?ne(e):t}function Gf(t){return!se(t,"__v_skip")&&Object.isExtensible(t)&&Sf(t,"__v_skip",!0),t}const Le=t=>pe(t)?No(t):t,Qa=t=>pe(t)?qf(t):t;function Ue(t){return t?t.__v_isRef===!0:!1}function dt(t){return zf(t,!1)}function Rv(t){return zf(t,!0)}function zf(t,e){return Ue(t)?t:new Pv(t,e)}class Pv{constructor(e,n){this.dep=new Xl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ne(e),this._value=n?e:Le(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||lt(e)||Yn(e);e=s?e:ne(e),En(e,n)&&(this._rawValue=e,this._value=s?e:Le(e),this.dep.trigger())}}function _s(t){return Ue(t)?t.value:t}const Ov={get:(t,e,n)=>e==="__v_raw"?t:_s(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Ue(r)&&!Ue(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Kf(t){return ms(t)?t:new Proxy(t,Ov)}class Nv{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Xl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Rr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&de!==this)return kf(this,!0),!0}get value(){const e=this.dep.track();return Lf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function kv(t,e,n=!1){let s,r;return G(t)?s=t:(s=t.get,r=t.set),new Nv(s,r,n)}const wi={},Vi=new WeakMap;let $n;function Dv(t,e=!1,n=$n){if(n){let s=Vi.get(n);s||Vi.set(n,s=[]),s.push(t)}}function xv(t,e,n=ce){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:a,call:l}=n,c=D=>r?D:lt(D)||r===!1||r===0?Vt(D,1):Vt(D);let u,h,d,p,m=!1,_=!1;if(Ue(t)?(h=()=>t.value,m=lt(t)):ms(t)?(h=()=>c(t),m=!0):H(t)?(_=!0,m=t.some(D=>ms(D)||lt(D)),h=()=>t.map(D=>{if(Ue(D))return D.value;if(ms(D))return c(D);if(G(D))return l?l(D,2):D()})):G(t)?e?h=l?()=>l(t,2):t:h=()=>{if(d){Nn();try{d()}finally{kn()}}const D=$n;$n=u;try{return l?l(t,3,[p]):t(p)}finally{$n=D}}:h=kt,e&&r){const D=h,B=r===!0?1/0:r;h=()=>Vt(D(),B)}const b=cv(),T=()=>{u.stop(),b&&ql(b.effects,u)};if(i&&e){const D=e;e=(...B)=>{D(...B),T()}}let A=_?new Array(t.length).fill(wi):wi;const O=D=>{if(!(!(u.flags&1)||!u.dirty&&!D))if(e){const B=u.run();if(r||m||(_?B.some((ee,Q)=>En(ee,A[Q])):En(B,A))){d&&d();const ee=$n;$n=u;try{const Q=[B,A===wi?void 0:_&&A[0]===wi?[]:A,p];l?l(e,3,Q):e(...Q),A=B}finally{$n=ee}}}else u.run()};return a&&a(O),u=new Of(h),u.scheduler=o?()=>o(O,!1):O,p=D=>Dv(D,!1,u),d=u.onStop=()=>{const D=Vi.get(u);if(D){if(l)l(D,4);else for(const B of D)B();Vi.delete(u)}},e?s?O(!0):A=u.run():o?o(O.bind(null,!0),!0):u.run(),T.pause=u.pause.bind(u),T.resume=u.resume.bind(u),T.stop=T,T}function Vt(t,e=1/0,n){if(e<=0||!pe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Ue(t))Vt(t.value,e,n);else if(H(t))for(let s=0;s<t.length;s++)Vt(t[s],e,n);else if(xs(t)||gs(t))t.forEach(s=>{Vt(s,e,n)});else if(If(t)){for(const s in t)Vt(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&Vt(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Zr(t,e,n,s){try{return s?t(...s):t()}catch(r){ko(r,e,n)}}function Mt(t,e,n,s){if(G(t)){const r=Zr(t,e,n,s);return r&&wf(r)&&r.catch(i=>{ko(i,e,n)}),r}if(H(t)){const r=[];for(let i=0;i<t.length;i++)r.push(Mt(t[i],e,n,s));return r}}function ko(t,e,n,s=!0){const r=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ce;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](t,l,c)===!1)return}a=a.parent}if(i){Nn(),Zr(i,null,10,[t,l,c]),kn();return}}Lv(t,n,r,s,o)}function Lv(t,e,n,s=!0,r=!1){if(r)throw t;console.error(t)}const Ve=[];let Rt=-1;const vs=[];let fn=null,us=0;const Yf=Promise.resolve();let ji=null;function nc(t){const e=ji||Yf;return t?e.then(this?t.bind(this):t):e}function Mv(t){let e=Rt+1,n=Ve.length;for(;e<n;){const s=e+n>>>1,r=Ve[s],i=Or(r);i<t||i===t&&r.flags&2?e=s+1:n=s}return e}function sc(t){if(!(t.flags&1)){const e=Or(t),n=Ve[Ve.length-1];!n||!(t.flags&2)&&e>=Or(n)?Ve.push(t):Ve.splice(Mv(e),0,t),t.flags|=1,Jf()}}function Jf(){ji||(ji=Yf.then(Xf))}function Fv(t){H(t)?vs.push(...t):fn&&t.id===-1?fn.splice(us+1,0,t):t.flags&1||(vs.push(t),t.flags|=1),Jf()}function Au(t,e,n=Rt+1){for(;n<Ve.length;n++){const s=Ve[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Ve.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Qf(t){if(vs.length){const e=[...new Set(vs)].sort((n,s)=>Or(n)-Or(s));if(vs.length=0,fn){fn.push(...e);return}for(fn=e,us=0;us<fn.length;us++){const n=fn[us];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}fn=null,us=0}}const Or=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Xf(t){try{for(Rt=0;Rt<Ve.length;Rt++){const e=Ve[Rt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Zr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Rt<Ve.length;Rt++){const e=Ve[Rt];e&&(e.flags&=-2)}Rt=-1,Ve.length=0,Qf(),ji=null,(Ve.length||vs.length)&&Xf()}}let st=null,Zf=null;function qi(t){const e=st;return st=t,Zf=t&&t.type.__scopeId||null,e}function De(t,e=st,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Mu(-1);const i=qi(e);let o;try{o=t(...r)}finally{qi(i),s._d&&Mu(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Oi(t,e){if(st===null)return t;const n=Mo(st),s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[i,o,a,l=ce]=e[r];i&&(G(i)&&(i={mounted:i,updated:i}),i.deep&&Vt(o),s.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Fn(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let l=a.dir[s];l&&(Nn(),Mt(l,n,8,[t.el,a,t,e]),kn())}}const Uv=Symbol("_vte"),$v=t=>t.__isTeleport;function rc(t,e){t.shapeFlag&6&&t.component?(t.transition=e,rc(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function ei(t,e){return G(t)?Oe({name:t.name},e,{setup:t}):t}function ep(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Xa(t,e,n,s,r=!1){if(H(t)){t.forEach((m,_)=>Xa(m,e&&(H(e)?e[_]:e),n,s,r));return}if(mr(s)&&!r)return;const i=s.shapeFlag&4?Mo(s.component):s.el,o=r?null:i,{i:a,r:l}=t,c=e&&e.r,u=a.refs===ce?a.refs={}:a.refs,h=a.setupState,d=ne(h),p=h===ce?()=>!1:m=>se(d,m);if(c!=null&&c!==l&&(Ce(c)?(u[c]=null,p(c)&&(h[c]=null)):Ue(c)&&(c.value=null)),G(l))Zr(l,a,12,[o,u]);else{const m=Ce(l),_=Ue(l);if(m||_){const b=()=>{if(t.f){const T=m?p(l)?h[l]:u[l]:l.value;r?H(T)&&ql(T,i):H(T)?T.includes(i)||T.push(i):m?(u[l]=[i],p(l)&&(h[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else m?(u[l]=o,p(l)&&(h[l]=o)):_&&(l.value=o,t.k&&(u[t.k]=o))};o?(b.id=-1,tt(b,n)):b()}}}Po().requestIdleCallback;Po().cancelIdleCallback;const mr=t=>!!t.type.__asyncLoader,tp=t=>t.type.__isKeepAlive;function Bv(t,e){np(t,"a",e)}function Hv(t,e){np(t,"da",e)}function np(t,e,n=Fe){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Do(e,s,n),n){let r=n.parent;for(;r&&r.parent;)tp(r.parent.vnode)&&Wv(s,e,n,r),r=r.parent}}function Wv(t,e,n,s){const r=Do(e,t,s,!0);sp(()=>{ql(s[e],r)},n)}function Do(t,e,n=Fe,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Nn();const a=ti(n),l=Mt(e,n,t,o);return a(),kn(),l});return s?r.unshift(i):r.push(i),i}}const en=t=>(e,n=Fe)=>{(!kr||t==="sp")&&Do(t,(...s)=>e(...s),n)},Vv=en("bm"),ic=en("m"),jv=en("bu"),qv=en("u"),Gv=en("bum"),sp=en("um"),zv=en("sp"),Kv=en("rtg"),Yv=en("rtc");function Jv(t,e=Fe){Do("ec",t,e)}const Qv="components";function Ci(t,e){return Zv(Qv,t,!0,e)||t}const Xv=Symbol.for("v-ndc");function Zv(t,e,n=!0,s=!1){const r=st||Fe;if(r){const i=r.type;{const a=By(i,!1);if(a&&(a===e||a===ct(e)||a===Ro(ct(e))))return i}const o=Ru(r[t]||i[t],e)||Ru(r.appContext[t],e);return!o&&s?i:o}}function Ru(t,e){return t&&(t[e]||t[ct(e)]||t[Ro(ct(e))])}function ey(t,e,n,s){let r;const i=n,o=H(t);if(o||Ce(t)){const a=o&&ms(t);let l=!1;a&&(l=!lt(t),t=Oo(t)),r=new Array(t.length);for(let c=0,u=t.length;c<u;c++)r[c]=e(l?Le(t[c]):t[c],c,void 0,i)}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,i)}else if(pe(t))if(t[Symbol.iterator])r=Array.from(t,(a,l)=>e(a,l,void 0,i));else{const a=Object.keys(t);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(t[u],u,l,i)}}else r=[];return r}const Za=t=>t?Cp(t)?Mo(t):Za(t.parent):null,_r=Oe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Za(t.parent),$root:t=>Za(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>oc(t),$forceUpdate:t=>t.f||(t.f=()=>{sc(t.update)}),$nextTick:t=>t.n||(t.n=nc.bind(t.proxy)),$watch:t=>Ey.bind(t)}),ma=(t,e)=>t!==ce&&!t.__isScriptSetup&&se(t,e),ty={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(ma(s,e))return o[e]=1,s[e];if(r!==ce&&se(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&se(c,e))return o[e]=3,i[e];if(n!==ce&&se(n,e))return o[e]=4,n[e];el&&(o[e]=0)}}const u=_r[e];let h,d;if(u)return e==="$attrs"&&xe(t.attrs,"get",""),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ce&&se(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,se(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return ma(r,e)?(r[e]=n,!0):s!==ce&&se(s,e)?(s[e]=n,!0):se(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==ce&&se(t,o)||ma(e,o)||(a=i[0])&&se(a,o)||se(s,o)||se(_r,o)||se(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:se(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Pu(t){return H(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let el=!0;function ny(t){const e=oc(t),n=t.proxy,s=t.ctx;el=!1,e.beforeCreate&&Ou(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:m,activated:_,deactivated:b,beforeDestroy:T,beforeUnmount:A,destroyed:O,unmounted:D,render:B,renderTracked:ee,renderTriggered:Q,errorCaptured:Ne,serverPrefetch:Be,expose:ot,inheritAttrs:an,components:Mn,directives:It,filters:Js}=e;if(c&&sy(c,s,null),o)for(const ae in o){const te=o[ae];G(te)&&(s[ae]=te.bind(n))}if(r){const ae=r.call(n,n);pe(ae)&&(t.data=No(ae))}if(el=!0,i)for(const ae in i){const te=i[ae],Ut=G(te)?te.bind(n,n):G(te.get)?te.get.bind(n,n):kt,ln=!G(te)&&G(te.set)?te.set.bind(n):kt,St=pt({get:Ut,set:ln});Object.defineProperty(s,ae,{enumerable:!0,configurable:!0,get:()=>St.value,set:Ge=>St.value=Ge})}if(a)for(const ae in a)rp(a[ae],s,n,ae);if(l){const ae=G(l)?l.call(n):l;Reflect.ownKeys(ae).forEach(te=>{Ni(te,ae[te])})}u&&Ou(u,t,"c");function Te(ae,te){H(te)?te.forEach(Ut=>ae(Ut.bind(n))):te&&ae(te.bind(n))}if(Te(Vv,h),Te(ic,d),Te(jv,p),Te(qv,m),Te(Bv,_),Te(Hv,b),Te(Jv,Ne),Te(Yv,ee),Te(Kv,Q),Te(Gv,A),Te(sp,D),Te(zv,Be),H(ot))if(ot.length){const ae=t.exposed||(t.exposed={});ot.forEach(te=>{Object.defineProperty(ae,te,{get:()=>n[te],set:Ut=>n[te]=Ut})})}else t.exposed||(t.exposed={});B&&t.render===kt&&(t.render=B),an!=null&&(t.inheritAttrs=an),Mn&&(t.components=Mn),It&&(t.directives=It),Be&&ep(t)}function sy(t,e,n=kt){H(t)&&(t=tl(t));for(const s in t){const r=t[s];let i;pe(r)?"default"in r?i=yt(r.from||s,r.default,!0):i=yt(r.from||s):i=yt(r),Ue(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function Ou(t,e,n){Mt(H(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function rp(t,e,n,s){let r=s.includes(".")?vp(n,s):()=>n[s];if(Ce(t)){const i=e[t];G(i)&&vr(r,i)}else if(G(t))vr(r,t.bind(n));else if(pe(t))if(H(t))t.forEach(i=>rp(i,e,n,s));else{const i=G(t.handler)?t.handler.bind(n):e[t.handler];G(i)&&vr(r,i,t)}}function oc(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!r.length&&!n&&!s?l=e:(l={},r.length&&r.forEach(c=>Gi(l,c,o,!0)),Gi(l,e,o)),pe(e)&&i.set(e,l),l}function Gi(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Gi(t,i,n,!0),r&&r.forEach(o=>Gi(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=ry[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const ry={data:Nu,props:ku,emits:ku,methods:ur,computed:ur,beforeCreate:He,created:He,beforeMount:He,mounted:He,beforeUpdate:He,updated:He,beforeDestroy:He,beforeUnmount:He,destroyed:He,unmounted:He,activated:He,deactivated:He,errorCaptured:He,serverPrefetch:He,components:ur,directives:ur,watch:oy,provide:Nu,inject:iy};function Nu(t,e){return e?t?function(){return Oe(G(t)?t.call(this,this):t,G(e)?e.call(this,this):e)}:e:t}function iy(t,e){return ur(tl(t),tl(e))}function tl(t){if(H(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function He(t,e){return t?[...new Set([].concat(t,e))]:e}function ur(t,e){return t?Oe(Object.create(null),t,e):e}function ku(t,e){return t?H(t)&&H(e)?[...new Set([...t,...e])]:Oe(Object.create(null),Pu(t),Pu(e??{})):e}function oy(t,e){if(!t)return e;if(!e)return t;const n=Oe(Object.create(null),t);for(const s in e)n[s]=He(t[s],e[s]);return n}function ip(){return{app:null,config:{isNativeTag:J_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ay=0;function ly(t,e){return function(s,r=null){G(s)||(s=Oe({},s)),r!=null&&!pe(r)&&(r=null);const i=ip(),o=new WeakSet,a=[];let l=!1;const c=i.app={_uid:ay++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Wy,get config(){return i.config},set config(u){},use(u,...h){return o.has(u)||(u&&G(u.install)?(o.add(u),u.install(c,...h)):G(u)&&(o.add(u),u(c,...h))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,h){return h?(i.components[u]=h,c):i.components[u]},directive(u,h){return h?(i.directives[u]=h,c):i.directives[u]},mount(u,h,d){if(!l){const p=c._ceVNode||_e(s,r);return p.appContext=i,d===!0?d="svg":d===!1&&(d=void 0),h&&e?e(p,u):t(p,u,d),l=!0,c._container=u,u.__vue_app__=c,Mo(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Mt(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,h){return i.provides[u]=h,c},runWithContext(u){const h=ys;ys=c;try{return u()}finally{ys=h}}};return c}}let ys=null;function Ni(t,e){if(Fe){let n=Fe.provides;const s=Fe.parent&&Fe.parent.provides;s===n&&(n=Fe.provides=Object.create(s)),n[t]=e}}function yt(t,e,n=!1){const s=Fe||st;if(s||ys){const r=ys?ys._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&G(e)?e.call(s&&s.proxy):e}}const op={},ap=()=>Object.create(op),lp=t=>Object.getPrototypeOf(t)===op;function cy(t,e,n,s=!1){const r={},i=ap();t.propsDefaults=Object.create(null),cp(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:jf(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function uy(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=ne(r),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(xo(t.emitsOptions,d))continue;const p=e[d];if(l)if(se(i,d))p!==i[d]&&(i[d]=p,c=!0);else{const m=ct(d);r[m]=nl(l,a,m,p,t,!1)}else p!==i[d]&&(i[d]=p,c=!0)}}}else{cp(t,e,r,i)&&(c=!0);let u;for(const h in a)(!e||!se(e,h)&&((u=On(h))===h||!se(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=nl(l,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!se(e,h))&&(delete i[h],c=!0)}c&&Wt(t.attrs,"set","")}function cp(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(fr(l))continue;const c=e[l];let u;r&&se(r,u=ct(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:xo(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(i){const l=ne(n),c=a||ce;for(let u=0;u<i.length;u++){const h=i[u];n[h]=nl(r,l,h,c[h],t,!se(c,h))}}return o}function nl(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=se(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&G(l)){const{propsDefaults:c}=r;if(n in c)s=c[n];else{const u=ti(r);s=c[n]=l.call(null,e),u()}}else s=l;r.ce&&r.ce._setProp(n,s)}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===On(n))&&(s=!0))}return s}const hy=new WeakMap;function up(t,e,n=!1){const s=n?hy:e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let l=!1;if(!G(t)){const u=h=>{l=!0;const[d,p]=up(h,e,!0);Oe(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return pe(t)&&s.set(t,ps),ps;if(H(i))for(let u=0;u<i.length;u++){const h=ct(i[u]);Du(h)&&(o[h]=ce)}else if(i)for(const u in i){const h=ct(u);if(Du(h)){const d=i[u],p=o[h]=H(d)||G(d)?{type:d}:Oe({},d),m=p.type;let _=!1,b=!0;if(H(m))for(let T=0;T<m.length;++T){const A=m[T],O=G(A)&&A.name;if(O==="Boolean"){_=!0;break}else O==="String"&&(b=!1)}else _=G(m)&&m.name==="Boolean";p[0]=_,p[1]=b,(_||se(p,"default"))&&a.push(h)}}const c=[o,a];return pe(t)&&s.set(t,c),c}function Du(t){return t[0]!=="$"&&!fr(t)}const hp=t=>t[0]==="_"||t==="$stable",ac=t=>H(t)?t.map(Ot):[Ot(t)],dy=(t,e,n)=>{if(e._n)return e;const s=De((...r)=>ac(e(...r)),n);return s._c=!1,s},dp=(t,e,n)=>{const s=t._ctx;for(const r in t){if(hp(r))continue;const i=t[r];if(G(i))e[r]=dy(r,i,s);else if(i!=null){const o=ac(i);e[r]=()=>o}}},fp=(t,e)=>{const n=ac(e);t.slots.default=()=>n},pp=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},fy=(t,e,n)=>{const s=t.slots=ap();if(t.vnode.shapeFlag&32){const r=e._;r?(pp(s,e,n),n&&Sf(s,"_",r,!0)):dp(e,s)}else e&&fp(t,e)},py=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=ce;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:pp(r,e,n):(i=!e.$stable,dp(e,r)),o=e}else e&&(fp(t,e),o={default:1});if(i)for(const a in r)!hp(a)&&o[a]==null&&delete r[a]},tt=Ry;function gy(t){return my(t)}function my(t,e){const n=Po();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:p=kt,insertStaticContent:m}=t,_=(f,g,v,C=null,E=null,I=null,x=void 0,k=null,N=!!g.dynamicChildren)=>{if(f===g)return;f&&!Zs(f,g)&&(C=w(f),Ge(f,E,I,!0),f=null),g.patchFlag===-2&&(N=!1,g.dynamicChildren=null);const{type:S,ref:W,shapeFlag:M}=g;switch(S){case Lo:b(f,g,v,C);break;case Jn:T(f,g,v,C);break;case ki:f==null&&A(g,v,C,x);break;case ft:Mn(f,g,v,C,E,I,x,k,N);break;default:M&1?B(f,g,v,C,E,I,x,k,N):M&6?It(f,g,v,C,E,I,x,k,N):(M&64||M&128)&&S.process(f,g,v,C,E,I,x,k,N,U)}W!=null&&E&&Xa(W,f&&f.ref,I,g||f,!g)},b=(f,g,v,C)=>{if(f==null)s(g.el=a(g.children),v,C);else{const E=g.el=f.el;g.children!==f.children&&c(E,g.children)}},T=(f,g,v,C)=>{f==null?s(g.el=l(g.children||""),v,C):g.el=f.el},A=(f,g,v,C)=>{[f.el,f.anchor]=m(f.children,g,v,C,f.el,f.anchor)},O=({el:f,anchor:g},v,C)=>{let E;for(;f&&f!==g;)E=d(f),s(f,v,C),f=E;s(g,v,C)},D=({el:f,anchor:g})=>{let v;for(;f&&f!==g;)v=d(f),r(f),f=v;r(g)},B=(f,g,v,C,E,I,x,k,N)=>{g.type==="svg"?x="svg":g.type==="math"&&(x="mathml"),f==null?ee(g,v,C,E,I,x,k,N):Be(f,g,E,I,x,k,N)},ee=(f,g,v,C,E,I,x,k)=>{let N,S;const{props:W,shapeFlag:M,transition:$,dirs:q}=f;if(N=f.el=o(f.type,I,W&&W.is,W),M&8?u(N,f.children):M&16&&Ne(f.children,N,null,C,E,_a(f,I),x,k),q&&Fn(f,null,C,"created"),Q(N,f,f.scopeId,x,C),W){for(const he in W)he!=="value"&&!fr(he)&&i(N,he,null,W[he],I,C);"value"in W&&i(N,"value",null,W.value,I),(S=W.onVnodeBeforeMount)&&At(S,C,f)}q&&Fn(f,null,C,"beforeMount");const X=_y(E,$);X&&$.beforeEnter(N),s(N,g,v),((S=W&&W.onVnodeMounted)||X||q)&&tt(()=>{S&&At(S,C,f),X&&$.enter(N),q&&Fn(f,null,C,"mounted")},E)},Q=(f,g,v,C,E)=>{if(v&&p(f,v),C)for(let I=0;I<C.length;I++)p(f,C[I]);if(E){let I=E.subTree;if(g===I||bp(I.type)&&(I.ssContent===g||I.ssFallback===g)){const x=E.vnode;Q(f,x,x.scopeId,x.slotScopeIds,E.parent)}}},Ne=(f,g,v,C,E,I,x,k,N=0)=>{for(let S=N;S<f.length;S++){const W=f[S]=k?pn(f[S]):Ot(f[S]);_(null,W,g,v,C,E,I,x,k)}},Be=(f,g,v,C,E,I,x)=>{const k=g.el=f.el;let{patchFlag:N,dynamicChildren:S,dirs:W}=g;N|=f.patchFlag&16;const M=f.props||ce,$=g.props||ce;let q;if(v&&Un(v,!1),(q=$.onVnodeBeforeUpdate)&&At(q,v,g,f),W&&Fn(g,f,v,"beforeUpdate"),v&&Un(v,!0),(M.innerHTML&&$.innerHTML==null||M.textContent&&$.textContent==null)&&u(k,""),S?ot(f.dynamicChildren,S,k,v,C,_a(g,E),I):x||te(f,g,k,null,v,C,_a(g,E),I,!1),N>0){if(N&16)an(k,M,$,v,E);else if(N&2&&M.class!==$.class&&i(k,"class",null,$.class,E),N&4&&i(k,"style",M.style,$.style,E),N&8){const X=g.dynamicProps;for(let he=0;he<X.length;he++){const ie=X[he],Xe=M[ie],ke=$[ie];(ke!==Xe||ie==="value")&&i(k,ie,Xe,ke,E,v)}}N&1&&f.children!==g.children&&u(k,g.children)}else!x&&S==null&&an(k,M,$,v,E);((q=$.onVnodeUpdated)||W)&&tt(()=>{q&&At(q,v,g,f),W&&Fn(g,f,v,"updated")},C)},ot=(f,g,v,C,E,I,x)=>{for(let k=0;k<g.length;k++){const N=f[k],S=g[k],W=N.el&&(N.type===ft||!Zs(N,S)||N.shapeFlag&70)?h(N.el):v;_(N,S,W,null,C,E,I,x,!0)}},an=(f,g,v,C,E)=>{if(g!==v){if(g!==ce)for(const I in g)!fr(I)&&!(I in v)&&i(f,I,g[I],null,E,C);for(const I in v){if(fr(I))continue;const x=v[I],k=g[I];x!==k&&I!=="value"&&i(f,I,k,x,E,C)}"value"in v&&i(f,"value",g.value,v.value,E)}},Mn=(f,g,v,C,E,I,x,k,N)=>{const S=g.el=f?f.el:a(""),W=g.anchor=f?f.anchor:a("");let{patchFlag:M,dynamicChildren:$,slotScopeIds:q}=g;q&&(k=k?k.concat(q):q),f==null?(s(S,v,C),s(W,v,C),Ne(g.children||[],v,W,E,I,x,k,N)):M>0&&M&64&&$&&f.dynamicChildren?(ot(f.dynamicChildren,$,v,E,I,x,k),(g.key!=null||E&&g===E.subTree)&&gp(f,g,!0)):te(f,g,v,W,E,I,x,k,N)},It=(f,g,v,C,E,I,x,k,N)=>{g.slotScopeIds=k,f==null?g.shapeFlag&512?E.ctx.activate(g,v,C,x,N):Js(g,v,C,E,I,x,N):is(f,g,N)},Js=(f,g,v,C,E,I,x)=>{const k=f.component=Ly(f,C,E);if(tp(f)&&(k.ctx.renderer=U),My(k,!1,x),k.asyncDep){if(E&&E.registerDep(k,Te,x),!f.el){const N=k.subTree=_e(Jn);T(null,N,g,v)}}else Te(k,f,g,v,E,I,x)},is=(f,g,v)=>{const C=g.component=f.component;if(Ty(f,g,v))if(C.asyncDep&&!C.asyncResolved){ae(C,g,v);return}else C.next=g,C.update();else g.el=f.el,C.vnode=g},Te=(f,g,v,C,E,I,x)=>{const k=()=>{if(f.isMounted){let{next:M,bu:$,u:q,parent:X,vnode:he}=f;{const Ze=mp(f);if(Ze){M&&(M.el=he.el,ae(f,M,x)),Ze.asyncDep.then(()=>{f.isUnmounted||k()});return}}let ie=M,Xe;Un(f,!1),M?(M.el=he.el,ae(f,M,x)):M=he,$&&Pi($),(Xe=M.props&&M.props.onVnodeBeforeUpdate)&&At(Xe,X,M,he),Un(f,!0);const ke=va(f),ut=f.subTree;f.subTree=ke,_(ut,ke,h(ut.el),w(ut),f,E,I),M.el=ke.el,ie===null&&Ay(f,ke.el),q&&tt(q,E),(Xe=M.props&&M.props.onVnodeUpdated)&&tt(()=>At(Xe,X,M,he),E)}else{let M;const{el:$,props:q}=g,{bm:X,m:he,parent:ie,root:Xe,type:ke}=f,ut=mr(g);if(Un(f,!1),X&&Pi(X),!ut&&(M=q&&q.onVnodeBeforeMount)&&At(M,ie,g),Un(f,!0),$&&ve){const Ze=()=>{f.subTree=va(f),ve($,f.subTree,f,E,null)};ut&&ke.__asyncHydrate?ke.__asyncHydrate($,f,Ze):Ze()}else{Xe.ce&&Xe.ce._injectChildStyle(ke);const Ze=f.subTree=va(f);_(null,Ze,v,C,f,E,I),g.el=Ze.el}if(he&&tt(he,E),!ut&&(M=q&&q.onVnodeMounted)){const Ze=g;tt(()=>At(M,ie,Ze),E)}(g.shapeFlag&256||ie&&mr(ie.vnode)&&ie.vnode.shapeFlag&256)&&f.a&&tt(f.a,E),f.isMounted=!0,g=v=C=null}};f.scope.on();const N=f.effect=new Of(k);f.scope.off();const S=f.update=N.run.bind(N),W=f.job=N.runIfDirty.bind(N);W.i=f,W.id=f.uid,N.scheduler=()=>sc(W),Un(f,!0),S()},ae=(f,g,v)=>{g.component=f;const C=f.vnode.props;f.vnode=g,f.next=null,uy(f,g.props,C,v),py(f,g.children,v),Nn(),Au(f),kn()},te=(f,g,v,C,E,I,x,k,N=!1)=>{const S=f&&f.children,W=f?f.shapeFlag:0,M=g.children,{patchFlag:$,shapeFlag:q}=g;if($>0){if($&128){ln(S,M,v,C,E,I,x,k,N);return}else if($&256){Ut(S,M,v,C,E,I,x,k,N);return}}q&8?(W&16&&at(S,E,I),M!==S&&u(v,M)):W&16?q&16?ln(S,M,v,C,E,I,x,k,N):at(S,E,I,!0):(W&8&&u(v,""),q&16&&Ne(M,v,C,E,I,x,k,N))},Ut=(f,g,v,C,E,I,x,k,N)=>{f=f||ps,g=g||ps;const S=f.length,W=g.length,M=Math.min(S,W);let $;for($=0;$<M;$++){const q=g[$]=N?pn(g[$]):Ot(g[$]);_(f[$],q,v,null,E,I,x,k,N)}S>W?at(f,E,I,!0,!1,M):Ne(g,v,C,E,I,x,k,N,M)},ln=(f,g,v,C,E,I,x,k,N)=>{let S=0;const W=g.length;let M=f.length-1,$=W-1;for(;S<=M&&S<=$;){const q=f[S],X=g[S]=N?pn(g[S]):Ot(g[S]);if(Zs(q,X))_(q,X,v,null,E,I,x,k,N);else break;S++}for(;S<=M&&S<=$;){const q=f[M],X=g[$]=N?pn(g[$]):Ot(g[$]);if(Zs(q,X))_(q,X,v,null,E,I,x,k,N);else break;M--,$--}if(S>M){if(S<=$){const q=$+1,X=q<W?g[q].el:C;for(;S<=$;)_(null,g[S]=N?pn(g[S]):Ot(g[S]),v,X,E,I,x,k,N),S++}}else if(S>$)for(;S<=M;)Ge(f[S],E,I,!0),S++;else{const q=S,X=S,he=new Map;for(S=X;S<=$;S++){const et=g[S]=N?pn(g[S]):Ot(g[S]);et.key!=null&&he.set(et.key,S)}let ie,Xe=0;const ke=$-X+1;let ut=!1,Ze=0;const Qs=new Array(ke);for(S=0;S<ke;S++)Qs[S]=0;for(S=q;S<=M;S++){const et=f[S];if(Xe>=ke){Ge(et,E,I,!0);continue}let Tt;if(et.key!=null)Tt=he.get(et.key);else for(ie=X;ie<=$;ie++)if(Qs[ie-X]===0&&Zs(et,g[ie])){Tt=ie;break}Tt===void 0?Ge(et,E,I,!0):(Qs[Tt-X]=S+1,Tt>=Ze?Ze=Tt:ut=!0,_(et,g[Tt],v,null,E,I,x,k,N),Xe++)}const Eu=ut?vy(Qs):ps;for(ie=Eu.length-1,S=ke-1;S>=0;S--){const et=X+S,Tt=g[et],wu=et+1<W?g[et+1].el:C;Qs[S]===0?_(null,Tt,v,wu,E,I,x,k,N):ut&&(ie<0||S!==Eu[ie]?St(Tt,v,wu,2):ie--)}}},St=(f,g,v,C,E=null)=>{const{el:I,type:x,transition:k,children:N,shapeFlag:S}=f;if(S&6){St(f.component.subTree,g,v,C);return}if(S&128){f.suspense.move(g,v,C);return}if(S&64){x.move(f,g,v,U);return}if(x===ft){s(I,g,v);for(let M=0;M<N.length;M++)St(N[M],g,v,C);s(f.anchor,g,v);return}if(x===ki){O(f,g,v);return}if(C!==2&&S&1&&k)if(C===0)k.beforeEnter(I),s(I,g,v),tt(()=>k.enter(I),E);else{const{leave:M,delayLeave:$,afterLeave:q}=k,X=()=>s(I,g,v),he=()=>{M(I,()=>{X(),q&&q()})};$?$(I,X,he):he()}else s(I,g,v)},Ge=(f,g,v,C=!1,E=!1)=>{const{type:I,props:x,ref:k,children:N,dynamicChildren:S,shapeFlag:W,patchFlag:M,dirs:$,cacheIndex:q}=f;if(M===-2&&(E=!1),k!=null&&Xa(k,null,v,f,!0),q!=null&&(g.renderCache[q]=void 0),W&256){g.ctx.deactivate(f);return}const X=W&1&&$,he=!mr(f);let ie;if(he&&(ie=x&&x.onVnodeBeforeUnmount)&&At(ie,g,f),W&6)yi(f.component,v,C);else{if(W&128){f.suspense.unmount(v,C);return}X&&Fn(f,null,g,"beforeUnmount"),W&64?f.type.remove(f,g,v,U,C):S&&!S.hasOnce&&(I!==ft||M>0&&M&64)?at(S,g,v,!1,!0):(I===ft&&M&384||!E&&W&16)&&at(N,g,v),C&&os(f)}(he&&(ie=x&&x.onVnodeUnmounted)||X)&&tt(()=>{ie&&At(ie,g,f),X&&Fn(f,null,g,"unmounted")},v)},os=f=>{const{type:g,el:v,anchor:C,transition:E}=f;if(g===ft){as(v,C);return}if(g===ki){D(f);return}const I=()=>{r(v),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(f.shapeFlag&1&&E&&!E.persisted){const{leave:x,delayLeave:k}=E,N=()=>x(v,I);k?k(f.el,I,N):N()}else I()},as=(f,g)=>{let v;for(;f!==g;)v=d(f),r(f),f=v;r(g)},yi=(f,g,v)=>{const{bum:C,scope:E,job:I,subTree:x,um:k,m:N,a:S}=f;xu(N),xu(S),C&&Pi(C),E.stop(),I&&(I.flags|=8,Ge(x,f,g,v)),k&&tt(k,g),tt(()=>{f.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},at=(f,g,v,C=!1,E=!1,I=0)=>{for(let x=I;x<f.length;x++)Ge(f[x],g,v,C,E)},w=f=>{if(f.shapeFlag&6)return w(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const g=d(f.anchor||f.el),v=g&&g[Uv];return v?d(v):g};let F=!1;const L=(f,g,v)=>{f==null?g._vnode&&Ge(g._vnode,null,null,!0):_(g._vnode||null,f,g,null,null,null,v),g._vnode=f,F||(F=!0,Au(),Qf(),F=!1)},U={p:_,um:Ge,m:St,r:os,mt:Js,mc:Ne,pc:te,pbc:ot,n:w,o:t};let re,ve;return{render:L,hydrate:re,createApp:ly(L,re)}}function _a({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Un({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function _y(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function gp(t,e,n=!1){const s=t.children,r=e.children;if(H(s)&&H(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=pn(r[i]),a.el=o.el),!n&&a.patchFlag!==-2&&gp(o,a)),a.type===Lo&&(a.el=o.el)}}function vy(t){const e=t.slice(),n=[0];let s,r,i,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(r=n[n.length-1],t[r]<c){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function mp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:mp(e)}function xu(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const yy=Symbol.for("v-scx"),by=()=>yt(yy);function vr(t,e,n){return _p(t,e,n)}function _p(t,e,n=ce){const{immediate:s,deep:r,flush:i,once:o}=n,a=Oe({},n),l=e&&s||!e&&i!=="post";let c;if(kr){if(i==="sync"){const p=by();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=kt,p.resume=kt,p.pause=kt,p}}const u=Fe;a.call=(p,m,_)=>Mt(p,u,m,_);let h=!1;i==="post"?a.scheduler=p=>{tt(p,u&&u.suspense)}:i!=="sync"&&(h=!0,a.scheduler=(p,m)=>{m?p():sc(p)}),a.augmentJob=p=>{e&&(p.flags|=4),h&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const d=xv(t,e,a);return kr&&(c?c.push(d):l&&d()),d}function Ey(t,e,n){const s=this.proxy,r=Ce(t)?t.includes(".")?vp(s,t):()=>s[t]:t.bind(s,s);let i;G(e)?i=e:(i=e.handler,n=e);const o=ti(this),a=_p(r,i.bind(s),n);return o(),a}function vp(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const wy=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${ct(e)}Modifiers`]||t[`${On(e)}Modifiers`];function Cy(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ce;let r=n;const i=e.startsWith("update:"),o=i&&wy(s,e.slice(7));o&&(o.trim&&(r=n.map(u=>Ce(u)?u.trim():u)),o.number&&(r=n.map(Wi)));let a,l=s[a=ha(e)]||s[a=ha(ct(e))];!l&&i&&(l=s[a=ha(On(e))]),l&&Mt(l,t,6,r);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Mt(c,t,6,r)}}function yp(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!G(t)){const l=c=>{const u=yp(c,e,!0);u&&(a=!0,Oe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(pe(t)&&s.set(t,null),null):(H(i)?i.forEach(l=>o[l]=null):Oe(o,i),pe(t)&&s.set(t,o),o)}function xo(t,e){return!t||!To(e)?!1:(e=e.slice(2).replace(/Once$/,""),se(t,e[0].toLowerCase()+e.slice(1))||se(t,On(e))||se(t,e))}function va(t){const{type:e,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:d,setupState:p,ctx:m,inheritAttrs:_}=t,b=qi(t);let T,A;try{if(n.shapeFlag&4){const D=r||s,B=D;T=Ot(c.call(B,D,u,h,p,d,m)),A=a}else{const D=e;T=Ot(D.length>1?D(h,{attrs:a,slots:o,emit:l}):D(h,null)),A=e.props?a:Iy(a)}}catch(D){yr.length=0,ko(D,t,1),T=_e(Jn)}let O=T;if(A&&_!==!1){const D=Object.keys(A),{shapeFlag:B}=O;D.length&&B&7&&(i&&D.some(jl)&&(A=Sy(A,i)),O=Ss(O,A,!1,!0))}return n.dirs&&(O=Ss(O,null,!1,!0),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&rc(O,n.transition),T=O,qi(b),T}const Iy=t=>{let e;for(const n in t)(n==="class"||n==="style"||To(n))&&((e||(e={}))[n]=t[n]);return e},Sy=(t,e)=>{const n={};for(const s in t)(!jl(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Ty(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Lu(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!xo(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Lu(s,o,c):!0:!!o;return!1}function Lu(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!xo(n,i))return!0}return!1}function Ay({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const bp=t=>t.__isSuspense;function Ry(t,e){e&&e.pendingBranch?H(t)?e.effects.push(...t):e.effects.push(t):Fv(t)}const ft=Symbol.for("v-fgt"),Lo=Symbol.for("v-txt"),Jn=Symbol.for("v-cmt"),ki=Symbol.for("v-stc"),yr=[];let rt=null;function be(t=!1){yr.push(rt=t?null:[])}function Py(){yr.pop(),rt=yr[yr.length-1]||null}let Nr=1;function Mu(t){Nr+=t,t<0&&rt&&(rt.hasOnce=!0)}function Ep(t){return t.dynamicChildren=Nr>0?rt||ps:null,Py(),Nr>0&&rt&&rt.push(t),t}function We(t,e,n,s,r,i){return Ep(R(t,e,n,s,r,i,!0))}function dn(t,e,n,s,r){return Ep(_e(t,e,n,s,r,!0))}function zi(t){return t?t.__v_isVNode===!0:!1}function Zs(t,e){return t.type===e.type&&t.key===e.key}const wp=({key:t})=>t??null,Di=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ce(t)||Ue(t)||G(t)?{i:st,r:t,k:e,f:!!n}:t:null);function R(t,e=null,n=null,s=0,r=null,i=t===ft?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&wp(e),ref:e&&Di(e),scopeId:Zf,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:st};return a?(lc(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Ce(n)?8:16),Nr>0&&!o&&rt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&rt.push(l),l}const _e=Oy;function Oy(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===Xv)&&(t=Jn),zi(t)){const a=Ss(t,e,!0);return n&&lc(a,n),Nr>0&&!i&&rt&&(a.shapeFlag&6?rt[rt.indexOf(t)]=a:rt.push(a)),a.patchFlag=-2,a}if(Hy(t)&&(t=t.__vccOpts),e){e=Ny(e);let{class:a,style:l}=e;a&&!Ce(a)&&(e.class=Kn(a)),pe(l)&&(tc(l)&&!H(l)&&(l=Oe({},l)),e.style=zl(l))}const o=Ce(t)?1:bp(t)?128:$v(t)?64:pe(t)?4:G(t)?2:0;return R(t,e,n,s,r,o,i,!0)}function Ny(t){return t?tc(t)||lp(t)?Oe({},t):t:null}function Ss(t,e,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:a,transition:l}=t,c=e?ky(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&wp(c),ref:e&&e.ref?n&&i?H(i)?i.concat(Di(e)):[i,Di(e)]:Di(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ft?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ss(t.ssContent),ssFallback:t.ssFallback&&Ss(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&s&&rc(u,l.clone(u)),u}function ye(t=" ",e=0){return _e(Lo,null,t,e)}function ya(t,e){const n=_e(ki,null,t);return n.staticCount=e,n}function Pt(t="",e=!1){return e?(be(),dn(Jn,null,t)):_e(Jn,null,t)}function Ot(t){return t==null||typeof t=="boolean"?_e(Jn):H(t)?_e(ft,null,t.slice()):zi(t)?pn(t):_e(Lo,null,String(t))}function pn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ss(t)}function lc(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(H(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),lc(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!lp(e)?e._ctx=st:r===3&&st&&(st.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else G(e)?(e={default:e,_ctx:st},n=32):(e=String(e),s&64?(n=16,e=[ye(e)]):n=8);t.children=e,t.shapeFlag|=n}function ky(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Kn([e.class,s.class]));else if(r==="style")e.style=zl([e.style,s.style]);else if(To(r)){const i=e[r],o=s[r];o&&i!==o&&!(H(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function At(t,e,n,s=null){Mt(t,e,7,[n,s])}const Dy=ip();let xy=0;function Ly(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||Dy,i={uid:xy++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Pf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:up(s,r),emitsOptions:yp(s,r),emit:null,emitted:null,propsDefaults:ce,inheritAttrs:s.inheritAttrs,ctx:ce,data:ce,props:ce,attrs:ce,slots:ce,refs:ce,setupState:ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Cy.bind(null,i),t.ce&&t.ce(i),i}let Fe=null,Ki,sl;{const t=Po(),e=(n,s)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};Ki=e("__VUE_INSTANCE_SETTERS__",n=>Fe=n),sl=e("__VUE_SSR_SETTERS__",n=>kr=n)}const ti=t=>{const e=Fe;return Ki(t),t.scope.on(),()=>{t.scope.off(),Ki(e)}},Fu=()=>{Fe&&Fe.scope.off(),Ki(null)};function Cp(t){return t.vnode.shapeFlag&4}let kr=!1;function My(t,e=!1,n=!1){e&&sl(e);const{props:s,children:r}=t.vnode,i=Cp(t);cy(t,s,i,e),fy(t,r,n);const o=i?Fy(t,e):void 0;return e&&sl(!1),o}function Fy(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,ty);const{setup:s}=n;if(s){Nn();const r=t.setupContext=s.length>1?$y(t):null,i=ti(t),o=Zr(s,t,0,[t.props,r]),a=wf(o);if(kn(),i(),(a||t.sp)&&!mr(t)&&ep(t),a){if(o.then(Fu,Fu),e)return o.then(l=>{Uu(t,l,e)}).catch(l=>{ko(l,t,0)});t.asyncDep=o}else Uu(t,o,e)}else Ip(t,e)}function Uu(t,e,n){G(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:pe(e)&&(t.setupState=Kf(e)),Ip(t,n)}let $u;function Ip(t,e,n){const s=t.type;if(!t.render){if(!e&&$u&&!s.render){const r=s.template||oc(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Oe(Oe({isCustomElement:i,delimiters:a},o),l);s.render=$u(r,c)}}t.render=s.render||kt}{const r=ti(t);Nn();try{ny(t)}finally{kn(),r()}}}const Uy={get(t,e){return xe(t,"get",""),t[e]}};function $y(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Uy),slots:t.slots,emit:t.emit,expose:e}}function Mo(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Kf(Gf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in _r)return _r[n](t)},has(e,n){return n in e||n in _r}})):t.proxy}function By(t,e=!0){return G(t)?t.displayName||t.name:t.name||e&&t.__name}function Hy(t){return G(t)&&"__vccOpts"in t}const pt=(t,e)=>kv(t,e,kr);function Sp(t,e,n){const s=arguments.length;return s===2?pe(e)&&!H(e)?zi(e)?_e(t,null,[e]):_e(t,e):_e(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&zi(n)&&(n=[n]),_e(t,e,n))}const Wy="3.5.12";/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let rl;const Bu=typeof window<"u"&&window.trustedTypes;if(Bu)try{rl=Bu.createPolicy("vue",{createHTML:t=>t})}catch{}const Tp=rl?t=>rl.createHTML(t):t=>t,Vy="http://www.w3.org/2000/svg",jy="http://www.w3.org/1998/Math/MathML",Ht=typeof document<"u"?document:null,Hu=Ht&&Ht.createElement("template"),qy={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e==="svg"?Ht.createElementNS(Vy,t):e==="mathml"?Ht.createElementNS(jy,t):n?Ht.createElement(t,{is:n}):Ht.createElement(t);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Ht.createTextNode(t),createComment:t=>Ht.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ht.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Hu.innerHTML=Tp(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const a=Hu.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Gy=Symbol("_vtc");function zy(t,e,n){const s=t[Gy];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Yi=Symbol("_vod"),Ap=Symbol("_vsh"),$F={beforeMount(t,{value:e},{transition:n}){t[Yi]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):er(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),er(t,!0),s.enter(t)):s.leave(t,()=>{er(t,!1)}):er(t,e))},beforeUnmount(t,{value:e}){er(t,e)}};function er(t,e){t.style.display=e?t[Yi]:"none",t[Ap]=!e}const Ky=Symbol(""),Yy=/(^|;)\s*display\s*:/;function Jy(t,e,n){const s=t.style,r=Ce(n);let i=!1;if(n&&!r){if(e)if(Ce(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&xi(s,a,"")}else for(const o in e)n[o]==null&&xi(s,o,"");for(const o in n)o==="display"&&(i=!0),xi(s,o,n[o])}else if(r){if(e!==n){const o=s[Ky];o&&(n+=";"+o),s.cssText=n,i=Yy.test(n)}}else e&&t.removeAttribute("style");Yi in t&&(t[Yi]=i?s.display:"",t[Ap]&&(s.display="none"))}const Wu=/\s*!important$/;function xi(t,e,n){if(H(n))n.forEach(s=>xi(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Qy(t,e);Wu.test(n)?t.setProperty(On(s),n.replace(Wu,""),"important"):t[s]=n}}const Vu=["Webkit","Moz","ms"],ba={};function Qy(t,e){const n=ba[e];if(n)return n;let s=ct(e);if(s!=="filter"&&s in t)return ba[e]=s;s=Ro(s);for(let r=0;r<Vu.length;r++){const i=Vu[r]+s;if(i in t)return ba[e]=i}return e}const ju="http://www.w3.org/1999/xlink";function qu(t,e,n,s,r,i=ov(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(ju,e.slice(6,e.length)):t.setAttributeNS(ju,e,n):n==null||i&&!Tf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Lt(n)?String(n):n)}function Gu(t,e,n,s,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Tp(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Tf(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function mn(t,e,n,s){t.addEventListener(e,n,s)}function Xy(t,e,n,s){t.removeEventListener(e,n,s)}const zu=Symbol("_vei");function Zy(t,e,n,s,r=null){const i=t[zu]||(t[zu]={}),o=i[e];if(s&&o)o.value=s;else{const[a,l]=eb(e);if(s){const c=i[e]=sb(s,r);mn(t,a,c,l)}else o&&(Xy(t,a,o,l),i[e]=void 0)}}const Ku=/(?:Once|Passive|Capture)$/;function eb(t){let e;if(Ku.test(t)){e={};let s;for(;s=t.match(Ku);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):On(t.slice(2)),e]}let Ea=0;const tb=Promise.resolve(),nb=()=>Ea||(tb.then(()=>Ea=0),Ea=Date.now());function sb(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Mt(rb(s,n.value),e,5,[s])};return n.value=t,n.attached=nb(),n}function rb(t,e){if(H(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Yu=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,ib=(t,e,n,s,r,i)=>{const o=r==="svg";e==="class"?zy(t,s,o):e==="style"?Jy(t,n,s):To(e)?jl(e)||Zy(t,e,n,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ob(t,e,s,o))?(Gu(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&qu(t,e,s,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ce(s))?Gu(t,ct(e),s,i,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),qu(t,e,s,o))};function ob(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Yu(e)&&G(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Yu(e)&&Ce(n)?!1:e in t}const Ts=t=>{const e=t.props["onUpdate:modelValue"]||!1;return H(e)?n=>Pi(e,n):e};function ab(t){t.target.composing=!0}function Ju(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Kt=Symbol("_assign"),il={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t[Kt]=Ts(r);const i=s||r.props&&r.props.type==="number";mn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Wi(a)),t[Kt](a)}),n&&mn(t,"change",()=>{t.value=t.value.trim()}),e||(mn(t,"compositionstart",ab),mn(t,"compositionend",Ju),mn(t,"change",Ju))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:r,number:i}},o){if(t[Kt]=Ts(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?Wi(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||r&&t.value.trim()===l)||(t.value=l))}},lb={deep:!0,created(t,e,n){t[Kt]=Ts(n),mn(t,"change",()=>{const s=t._modelValue,r=Dr(t),i=t.checked,o=t[Kt];if(H(s)){const a=Kl(s,r),l=a!==-1;if(i&&!l)o(s.concat(r));else if(!i&&l){const c=[...s];c.splice(a,1),o(c)}}else if(xs(s)){const a=new Set(s);i?a.add(r):a.delete(r),o(a)}else o(Rp(t,i))})},mounted:Qu,beforeUpdate(t,e,n){t[Kt]=Ts(n),Qu(t,e,n)}};function Qu(t,{value:e,oldValue:n},s){t._modelValue=e;let r;if(H(e))r=Kl(e,s.props.value)>-1;else if(xs(e))r=e.has(s.props.value);else{if(e===n)return;r=Xr(e,Rp(t,!0))}t.checked!==r&&(t.checked=r)}const BF={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=xs(e);mn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Wi(Dr(o)):Dr(o));t[Kt](t.multiple?r?new Set(i):i:i[0]),t._assigning=!0,nc(()=>{t._assigning=!1})}),t[Kt]=Ts(s)},mounted(t,{value:e}){Xu(t,e)},beforeUpdate(t,e,n){t[Kt]=Ts(n)},updated(t,{value:e}){t._assigning||Xu(t,e)}};function Xu(t,e){const n=t.multiple,s=H(e);if(!(n&&!s&&!xs(e))){for(let r=0,i=t.options.length;r<i;r++){const o=t.options[r],a=Dr(o);if(n)if(s){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=Kl(e,a)>-1}else o.selected=e.has(a);else if(Xr(Dr(o),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Dr(t){return"_value"in t?t._value:t.value}function Rp(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const cb=["ctrl","shift","alt","meta"],ub={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>cb.some(n=>t[`${n}Key`]&&!e.includes(n))},tr=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(r,...i)=>{for(let o=0;o<e.length;o++){const a=ub[e[o]];if(a&&a(r,e))return}return t(r,...i)})},hb={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},db=(t,e)=>{const n=t._withKeys||(t._withKeys={}),s=e.join(".");return n[s]||(n[s]=r=>{if(!("key"in r))return;const i=On(r.key);if(e.some(o=>o===i||hb[o]===i))return t(r)})},fb=Oe({patchProp:ib},qy);let Zu;function pb(){return Zu||(Zu=gy(fb))}const gb=(...t)=>{const e=pb().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=_b(s);if(!r)return;const i=e._component;!G(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,mb(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function mb(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function _b(t){return Ce(t)?document.querySelector(t):t}var vb=!1;/*!
 * pinia v2.2.4
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */const yb=Symbol();var eh;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(eh||(eh={}));function bb(){const t=lv(!0),e=t.run(()=>dt({}));let n=[],s=[];const r=Gf({install(i){r._a=i,i.provide(yb,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return!this._a&&!vb?s.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}var th={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pp={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P=function(t,e){if(!t)throw Ls(e)},Ls=function(t){return new Error("Firebase Database ("+Pp.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Op=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Eb=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},cc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(d=64)),s.push(n[u],n[h],n[d],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Op(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Eb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||c==null||h==null)throw new wb;const d=i<<2|a>>4;if(s.push(d),c!==64){const p=a<<4&240|c>>2;if(s.push(p),h!==64){const m=c<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class wb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Np=function(t){const e=Op(t);return cc.encodeByteArray(e,!0)},Ji=function(t){return Np(t).replace(/\./g,"")},Qi=function(t){try{return cc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cb(t){return kp(void 0,t)}function kp(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Ib(n)||(t[n]=kp(t[n],e[n]));return t}function Ib(t){return t!=="__proto__"}/**
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
 */function Sb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Tb=()=>Sb().__FIREBASE_DEFAULTS__,Ab=()=>{if(typeof process>"u"||typeof th>"u")return;const t=th.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Rb=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Qi(t[1]);return e&&JSON.parse(e)},uc=()=>{try{return Tb()||Ab()||Rb()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Dp=t=>{var e,n;return(n=(e=uc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Pb=t=>{const e=Dp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},xp=()=>{var t;return(t=uc())===null||t===void 0?void 0:t.config},Lp=t=>{var e;return(e=uc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Ob(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ji(JSON.stringify(n)),Ji(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(qe())}function Nb(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function kb(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Mp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Db(){const t=qe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Fp(){return Pp.NODE_ADMIN===!0}function xb(){try{return typeof indexedDB=="object"}catch{return!1}}function Lb(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mb="FirebaseError";class Dn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Mb,Object.setPrototypeOf(this,Dn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ni.prototype.create)}}class ni{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Fb(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Dn(r,a,s)}}function Fb(t,e){return t.replace(Ub,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Ub=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xr(t){return JSON.parse(t)}function Ie(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Up=function(t){let e={},n={},s={},r="";try{const i=t.split(".");e=xr(Qi(i[0])||""),n=xr(Qi(i[1])||""),r=i[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:r}},$b=function(t){const e=Up(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Bb=function(t){const e=Up(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function As(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ol(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Xi(t,e,n){const s={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(s[r]=e.call(n,t[r],r,t));return s}function Zi(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(nh(i)&&nh(o)){if(!Zi(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function nh(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ms(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function hr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function dr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hb{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let r=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^i&(o^a),u=1518500249):(c=i^o^a,u=1859775393):h<60?(c=i&o|a&(i|o),u=2400959708):(c=i^o^a,u=3395469782);const d=(r<<5|r>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=r,r=d}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let r=0;const i=this.buf_;let o=this.inbuf_;for(;r<n;){if(o===0)for(;r<=s;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<n;)if(i[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else for(;r<n;)if(i[o]=e[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let r=0;r<5;r++)for(let i=24;i>=0;i-=8)e[s]=this.chain_[r]>>i&255,++s;return e}}function Wb(t,e){const n=new Vb(t,e);return n.subscribe.bind(n)}class Vb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");jb(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=wa),r.error===void 0&&(r.error=wa),r.complete===void 0&&(r.complete=wa);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function jb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function wa(){}function dc(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qb=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);if(r>=55296&&r<=56319){const i=r-55296;s++,P(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;r=65536+(i<<10)+o}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Uo=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function $e(t){return t&&t._delegate?t._delegate:t}class Qn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Bn="[DEFAULT]";/**
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
 */class Gb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Fo;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Kb(e))try{this.getOrInitializeService({instanceIdentifier:Bn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Bn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Bn){return this.instances.has(e)}getOptions(e=Bn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:zb(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Bn){return this.component?this.component.multipleInstances?e:Bn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zb(t){return t===Bn?void 0:t}function Kb(t){return t.instantiationMode==="EAGER"}/**
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
 */class Yb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Gb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var le;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(le||(le={}));const Jb={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},Qb=le.INFO,Xb={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},Zb=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Xb[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class fc{constructor(e){this.name=e,this._logLevel=Qb,this._logHandler=Zb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Jb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}const eE=(t,e)=>e.some(n=>t instanceof n);let sh,rh;function tE(){return sh||(sh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function nE(){return rh||(rh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $p=new WeakMap,al=new WeakMap,Bp=new WeakMap,Ca=new WeakMap,pc=new WeakMap;function sE(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(wn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&$p.set(n,t)}).catch(()=>{}),pc.set(e,t),e}function rE(t){if(al.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});al.set(t,e)}let ll={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return al.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Bp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return wn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function iE(t){ll=t(ll)}function oE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Ia(this),e,...n);return Bp.set(s,e.sort?e.sort():[e]),wn(s)}:nE().includes(t)?function(...e){return t.apply(Ia(this),e),wn($p.get(this))}:function(...e){return wn(t.apply(Ia(this),e))}}function aE(t){return typeof t=="function"?oE(t):(t instanceof IDBTransaction&&rE(t),eE(t,tE())?new Proxy(t,ll):t)}function wn(t){if(t instanceof IDBRequest)return sE(t);if(Ca.has(t))return Ca.get(t);const e=aE(t);return e!==t&&(Ca.set(t,e),pc.set(e,t)),e}const Ia=t=>pc.get(t);function lE(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=wn(o);return s&&o.addEventListener("upgradeneeded",l=>{s(wn(o.result),l.oldVersion,l.newVersion,wn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),r&&l.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const cE=["get","getKey","getAll","getAllKeys","count"],uE=["put","add","delete","clear"],Sa=new Map;function ih(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Sa.get(e))return Sa.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=uE.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||cE.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return Sa.set(e,i),i}iE(t=>({...t,get:(e,n,s)=>ih(e,n)||t.get(e,n,s),has:(e,n)=>!!ih(e,n)||t.has(e,n)}));/**
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
 */class hE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(dE(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function dE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const cl="@firebase/app",oh="0.10.15";/**
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
 */const Qt=new fc("@firebase/app"),fE="@firebase/app-compat",pE="@firebase/analytics-compat",gE="@firebase/analytics",mE="@firebase/app-check-compat",_E="@firebase/app-check",vE="@firebase/auth",yE="@firebase/auth-compat",bE="@firebase/database",EE="@firebase/data-connect",wE="@firebase/database-compat",CE="@firebase/functions",IE="@firebase/functions-compat",SE="@firebase/installations",TE="@firebase/installations-compat",AE="@firebase/messaging",RE="@firebase/messaging-compat",PE="@firebase/performance",OE="@firebase/performance-compat",NE="@firebase/remote-config",kE="@firebase/remote-config-compat",DE="@firebase/storage",xE="@firebase/storage-compat",LE="@firebase/firestore",ME="@firebase/vertexai",FE="@firebase/firestore-compat",UE="firebase",$E="11.0.1";/**
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
 */const ul="[DEFAULT]",BE={[cl]:"fire-core",[fE]:"fire-core-compat",[gE]:"fire-analytics",[pE]:"fire-analytics-compat",[_E]:"fire-app-check",[mE]:"fire-app-check-compat",[vE]:"fire-auth",[yE]:"fire-auth-compat",[bE]:"fire-rtdb",[EE]:"fire-data-connect",[wE]:"fire-rtdb-compat",[CE]:"fire-fn",[IE]:"fire-fn-compat",[SE]:"fire-iid",[TE]:"fire-iid-compat",[AE]:"fire-fcm",[RE]:"fire-fcm-compat",[PE]:"fire-perf",[OE]:"fire-perf-compat",[NE]:"fire-rc",[kE]:"fire-rc-compat",[DE]:"fire-gcs",[xE]:"fire-gcs-compat",[LE]:"fire-fst",[FE]:"fire-fst-compat",[ME]:"fire-vertex","fire-js":"fire-js",[UE]:"fire-js-all"};/**
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
 */const eo=new Map,HE=new Map,hl=new Map;function ah(t,e){try{t.container.addComponent(e)}catch(n){Qt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Rs(t){const e=t.name;if(hl.has(e))return Qt.debug(`There were multiple attempts to register component ${e}.`),!1;hl.set(e,t);for(const n of eo.values())ah(n,t);for(const n of HE.values())ah(n,t);return!0}function gc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Nt(t){return t.settings!==void 0}/**
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
 */const WE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Cn=new ni("app","Firebase",WE);/**
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
 */class VE{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Qn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Cn.create("app-deleted",{appName:this._name})}}/**
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
 */const Fs=$E;function Hp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:ul,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Cn.create("bad-app-name",{appName:String(r)});if(n||(n=xp()),!n)throw Cn.create("no-options");const i=eo.get(r);if(i){if(Zi(n,i.options)&&Zi(s,i.config))return i;throw Cn.create("duplicate-app",{appName:r})}const o=new Yb(r);for(const l of hl.values())o.addComponent(l);const a=new VE(n,s,o);return eo.set(r,a),a}function Wp(t=ul){const e=eo.get(t);if(!e&&t===ul&&xp())return Hp();if(!e)throw Cn.create("no-app",{appName:t});return e}function In(t,e,n){var s;let r=(s=BE[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qt.warn(a.join(" "));return}Rs(new Qn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const jE="firebase-heartbeat-database",qE=1,Lr="firebase-heartbeat-store";let Ta=null;function Vp(){return Ta||(Ta=lE(jE,qE,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Lr)}catch(n){console.warn(n)}}}}).catch(t=>{throw Cn.create("idb-open",{originalErrorMessage:t.message})})),Ta}async function GE(t){try{const n=(await Vp()).transaction(Lr),s=await n.objectStore(Lr).get(jp(t));return await n.done,s}catch(e){if(e instanceof Dn)Qt.warn(e.message);else{const n=Cn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Qt.warn(n.message)}}}async function lh(t,e){try{const s=(await Vp()).transaction(Lr,"readwrite");await s.objectStore(Lr).put(e,jp(t)),await s.done}catch(n){if(n instanceof Dn)Qt.warn(n.message);else{const s=Cn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Qt.warn(s.message)}}}function jp(t){return`${t.name}!${t.options.appId}`}/**
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
 */const zE=1024,KE=30*24*60*60*1e3;class YE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new QE(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ch();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=KE}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Qt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ch(),{heartbeatsToSend:s,unsentEntries:r}=JE(this._heartbeatsCache.heartbeats),i=Ji(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Qt.warn(n),""}}}function ch(){return new Date().toISOString().substring(0,10)}function JE(t,e=zE){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),uh(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),uh(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class QE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xb()?Lb().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await GE(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return lh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return lh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function uh(t){return Ji(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function XE(t){Rs(new Qn("platform-logger",e=>new hE(e),"PRIVATE")),Rs(new Qn("heartbeat",e=>new YE(e),"PRIVATE")),In(cl,oh,t),In(cl,oh,"esm2017"),In("fire-js","")}XE("");var hh={};const dh="@firebase/database",fh="1.0.9";/**
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
 */let qp="";function ZE(t){qp=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ie(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:xr(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return tn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gp=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new ew(e)}}catch{}return new tw},Vn=Gp("localStorage"),nw=Gp("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs=new fc("@firebase/database"),sw=function(){let t=1;return function(){return t++}}(),zp=function(t){const e=qb(t),n=new Hb;n.update(e);const s=n.digest();return cc.encodeByteArray(s)},si=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=si.apply(null,s):typeof s=="object"?e+=Ie(s):e+=s,e+=" "}return e};let br=null,ph=!0;const rw=function(t,e){P(!e,"Can't turn on custom loggers persistently."),bs.logLevel=le.VERBOSE,br=bs.log.bind(bs)},Me=function(...t){if(ph===!0&&(ph=!1,br===null&&nw.get("logging_enabled")===!0&&rw()),br){const e=si.apply(null,t);br(e)}},ri=function(t){return function(...e){Me(t,...e)}},dl=function(...t){const e="FIREBASE INTERNAL ERROR: "+si(...t);bs.error(e)},Xt=function(...t){const e=`FIREBASE FATAL ERROR: ${si(...t)}`;throw bs.error(e),new Error(e)},Ke=function(...t){const e="FIREBASE WARNING: "+si(...t);bs.warn(e)},iw=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ke("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Kp=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},ow=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ps="[MIN_NAME]",Xn="[MAX_NAME]",Us=function(t,e){if(t===e)return 0;if(t===Ps||e===Xn)return-1;if(e===Ps||t===Xn)return 1;{const n=gh(t),s=gh(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},aw=function(t,e){return t===e?0:t<e?-1:1},nr=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ie(e))},mc=function(t){if(typeof t!="object"||t===null)return Ie(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Ie(e[s]),n+=":",n+=mc(t[e[s]]);return n+="}",n},Yp=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let r=0;r<n;r+=e)r+e>n?s.push(t.substring(r,n)):s.push(t.substring(r,r+e));return s};function Qe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Jp=function(t){P(!Kp(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let r,i,o,a,l;t===0?(i=0,o=0,r=1/t===-1/0?1:0):(r=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),i=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(i%2?1:0),i=Math.floor(i/2);c.push(r?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},lw=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},cw=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function uw(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const hw=new RegExp("^-?(0*)\\d{1,10}$"),dw=-2147483648,fw=2147483647,gh=function(t){if(hw.test(t)){const e=Number(t);if(e>=dw&&e<=fw)return e}return null},$s=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ke("Exception was thrown by user callback.",n),e},Math.floor(0))}},pw=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Er=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class gw{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Ke(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Me("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ke(e)}}class Li{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Li.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _c="5",Qp="v",Xp="s",Zp="r",eg="f",tg=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,ng="ls",sg="p",fl="ac",rg="websocket",ig="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(e,n,s,r,i=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Vn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Vn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function _w(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function ag(t,e,n){P(typeof e=="string","typeof type must == string"),P(typeof n=="object","typeof params must == object");let s;if(e===rg)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===ig)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);_w(t)&&(n.ns=t.namespace);const r=[];return Qe(n,(i,o)=>{r.push(i+"="+o)}),s+r.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(){this.counters_={}}incrementCounter(e,n=1){tn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Cb(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aa={},Ra={};function vc(t){const e=t.toString();return Aa[e]||(Aa[e]=new vw),Aa[e]}function yw(t,e){const n=t.toString();return Ra[n]||(Ra[n]=e()),Ra[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bw{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<s.length;++r)s[r]&&$s(()=>{this.onMessage_(s[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mh="start",Ew="close",ww="pLPCommand",Cw="pRTLPCB",lg="id",cg="pw",ug="ser",Iw="cb",Sw="seg",Tw="ts",Aw="d",Rw="dframe",hg=1870,dg=30,Pw=hg-dg,Ow=25e3,Nw=3e4;class ds{constructor(e,n,s,r,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ri(e),this.stats_=vc(n),this.urlFn=l=>(this.appCheckToken&&(l[fl]=this.appCheckToken),ag(n,ig,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new bw(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Nw)),ow(()=>{if(this.isClosed_)return;this.scriptTagHolder=new yc((...i)=>{const[o,a,l,c,u]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===mh)this.id=a,this.password=l;else if(o===Ew)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[mh]="t",s[ug]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Iw]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Qp]=_c,this.transportSessionId&&(s[Xp]=this.transportSessionId),this.lastSessionId&&(s[ng]=this.lastSessionId),this.applicationId&&(s[sg]=this.applicationId),this.appCheckToken&&(s[fl]=this.appCheckToken),typeof location<"u"&&location.hostname&&tg.test(location.hostname)&&(s[Zp]=eg);const r=this.urlFn(s);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ds.forceAllow_=!0}static forceDisallow(){ds.forceDisallow_=!0}static isAvailable(){return ds.forceAllow_?!0:!ds.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!lw()&&!cw()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ie(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Np(n),r=Yp(s,Pw);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Rw]="t",s[lg]=e,s[cg]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ie(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class yc{constructor(e,n,s,r){this.onDisconnect=s,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=sw(),window[ww+this.uniqueCallbackIdentifier]=e,window[Cw+this.uniqueCallbackIdentifier]=n,this.myIFrame=yc.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Me("frame writing exception"),a.stack&&Me(a.stack),Me(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Me("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[lg]=this.myID,e[cg]=this.myPW,e[ug]=this.currentSerial;let n=this.urlFn(e),s="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+dg+s.length<=hg;){const o=this.pendingSegs.shift();s=s+"&"+Sw+r+"="+o.seg+"&"+Tw+r+"="+o.ts+"&"+Aw+r+"="+o.d,r++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(s,Math.floor(Ow)),i=()=>{clearTimeout(r),s()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const r=s.readyState;(!r||r==="loaded"||r==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Me("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kw=16384,Dw=45e3;let to=null;typeof MozWebSocket<"u"?to=MozWebSocket:typeof WebSocket<"u"&&(to=WebSocket);class gt{constructor(e,n,s,r,i,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ri(this.connId),this.stats_=vc(n),this.connURL=gt.connectionURL_(n,o,a,r,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,r,i){const o={};return o[Qp]=_c,typeof location<"u"&&location.hostname&&tg.test(location.hostname)&&(o[Zp]=eg),n&&(o[Xp]=n),s&&(o[ng]=s),r&&(o[fl]=r),i&&(o[sg]=i),ag(e,rg,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Vn.set("previous_websocket_failure",!0);try{let s;Fp(),this.mySock=new to(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){gt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&to!==null&&!gt.forceDisallow_}static previouslyFailed(){return Vn.isInMemoryStorage||Vn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Vn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=xr(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(P(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Ie(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Yp(n,kw);s.length>1&&this.sendString_(String(s.length));for(let r=0;r<s.length;r++)this.sendString_(s[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Dw))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}gt.responsesRequiredToBeHealthy=2;gt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ds,gt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=gt&&gt.isAvailable();let s=n&&!gt.previouslyFailed();if(e.webSocketOnly&&(n||Ke("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[gt];else{const r=this.transports_=[];for(const i of Mr.ALL_TRANSPORTS)i&&i.isAvailable()&&r.push(i);Mr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Mr.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xw=6e4,Lw=5e3,Mw=10*1024,Fw=100*1024,Pa="t",_h="d",Uw="s",vh="r",$w="e",yh="o",bh="a",Eh="n",wh="p",Bw="h";class Hw{constructor(e,n,s,r,i,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ri("c:"+this.id+":"),this.transportManager_=new Mr(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=Er(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Fw?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Mw?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Pa in e){const n=e[Pa];n===bh?this.upgradeIfSecondaryHealthy_():n===vh?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===yh&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=nr("t",e),s=nr("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:wh,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:bh,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Eh,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=nr("t",e),s=nr("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=nr(Pa,e);if(_h in e){const s=e[_h];if(n===Bw){const r=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(n===Eh){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Uw?this.onConnectionShutdown_(s):n===vh?this.onReset_(s):n===$w?dl("Server Error: "+s):n===yh?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):dl("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),_c!==s&&Ke("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Er(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(xw))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Er(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Lw))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:wh,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Vn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{put(e,n,s,r){}merge(e,n,s,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(e){this.allowedEvents_=e,this.listeners_={},P(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let r=0;r<s.length;r++)s[r].callback.apply(s[r].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const r=this.getInitialEvent(e);r&&n.apply(s,r)}off(e,n,s){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===n&&(!s||s===r[i].context)){r.splice(i,1);return}}validateEventType_(e){P(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no extends pg{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!hc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new no}getInitialEvent(e){return P(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ch=32,Ih=768;class ue{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[s]=this.pieces_[r],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Z(){return new ue("")}function K(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function An(t){return t.pieces_.length-t.pieceNum_}function fe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ue(t.pieces_,e)}function gg(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Ww(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function mg(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function _g(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ue(e,0)}function Se(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof ue)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let r=0;r<s.length;r++)s[r].length>0&&n.push(s[r])}return new ue(n,0)}function J(t){return t.pieceNum_>=t.pieces_.length}function je(t,e){const n=K(t),s=K(e);if(n===null)return e;if(n===s)return je(fe(t),fe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function bc(t,e){if(An(t)!==An(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function mt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(An(t)>An(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Vw{constructor(e,n){this.errorPrefix_=n,this.parts_=mg(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Uo(this.parts_[s]);vg(this)}}function jw(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Uo(e),vg(t)}function qw(t){const e=t.parts_.pop();t.byteLength_-=Uo(e),t.parts_.length>0&&(t.byteLength_-=1)}function vg(t){if(t.byteLength_>Ih)throw new Error(t.errorPrefix_+"has a key path longer than "+Ih+" bytes ("+t.byteLength_+").");if(t.parts_.length>Ch)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ch+") or object contains a cycle "+Hn(t))}function Hn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec extends pg{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Ec}getInitialEvent(e){return P(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr=1e3,Gw=60*5*1e3,Sh=30*1e3,zw=1.3,Kw=3e4,Yw="server_kill",Th=3;class Yt extends fg{constructor(e,n,s,r,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Yt.nextPersistentConnectionId_++,this.log_=ri("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=sr,this.maxReconnectDelay_=Gw,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Fp())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ec.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&no.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const r=++this.requestNumber_,i={r,a:e,b:n};this.log_(Ie(i)),P(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),s&&(this.requestCBHash_[r]=s)}get(e){this.initConnection_();const n=new Fo,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,s,r){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),P(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:n,query:e,tag:s};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+s+" for "+r);const i={p:s},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,c=a.s;Yt.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(r))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,r),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&tn(e,"w")){const s=As(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();Ke(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Bb(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Sh)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=$b(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,r=>{const i=r.s,o=r.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+r),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,r)&&this.connected_&&this.sendUnlisten_(s,r,e._queryObject,n)}sendUnlisten_(e,n,s,r){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";r&&(i.q=s,i.t=r),this.sendRequest(o,i)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,r){const i={p:n,d:s};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,n,s,r){this.putInternal("p",e,n,s,r)}merge(e,n,s,r){this.putInternal("m",e,n,s,r)}putInternal(e,n,s,r,i){this.initConnection_();const o={p:n,d:s};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const i=s.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ie(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):dl("Unrecognized action received from server: "+Ie(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){P(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=sr,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=sr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Kw&&(this.reconnectDelay_=sr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*zw)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Yt.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){P(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Me("getToken() completed but was canceled"):(Me("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new Hw(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,p=>{Ke(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(Yw)},i))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Ke(h),l())}}}interrupt(e){Me("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Me("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ol(this.interruptReasons_)&&(this.reconnectDelay_=sr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(i=>mc(i)).join("$"):s="default";const r=this.removeListen_(e,s);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,n){const s=new ue(e).toString();let r;if(this.listens.has(s)){const i=this.listens.get(s);r=i.get(n),i.delete(n),i.size===0&&this.listens.delete(s)}else r=void 0;return r}onAuthRevoked_(e,n){Me("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Th&&(this.reconnectDelay_=Sh,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Me("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Th&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+qp.replace(/\./g,"-")]=1,hc()?e["framework.cordova"]=1:Mp()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=no.getInstance().currentlyOnline();return ol(this.interruptReasons_)&&e}}Yt.nextPersistentConnectionId_=0;Yt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class $o{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new Y(Ps,e),r=new Y(Ps,n);return this.compare(s,r)!==0}minPost(){return Y.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ii;class yg extends $o{static get __EMPTY_NODE(){return Ii}static set __EMPTY_NODE(e){Ii=e}compare(e,n){return Us(e.name,n.name)}isDefinedOn(e){throw Ls("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Y.MIN}maxPost(){return new Y(Xn,Ii)}makePost(e,n){return P(typeof e=="string","KeyIndex indexValue must always be a string."),new Y(e,Ii)}toString(){return".key"}}const Es=new yg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e,n,s,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Re{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??Re.RED,this.left=r??ze.EMPTY_NODE,this.right=i??ze.EMPTY_NODE}copy(e,n,s,r,i){return new Re(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return i<0?r=r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return ze.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,r;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return ze.EMPTY_NODE;r=s.right.min_(),s=s.copy(r.key,r.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Re.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Re.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Re.RED=!0;Re.BLACK=!1;class Jw{copy(e,n,s,r,i){return this}insert(e,n,s){return new Re(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ze{constructor(e,n=ze.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ze(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Re.BLACK,null,null))}remove(e){return new ze(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Re.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,r=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return r?r.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(r=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Si(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Si(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Si(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Si(this.root_,null,this.comparator_,!0,e)}}ze.EMPTY_NODE=new Jw;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qw(t,e){return Us(t.name,e.name)}function wc(t,e){return Us(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pl;function Xw(t){pl=t}const bg=function(t){return typeof t=="number"?"number:"+Jp(t):"string:"+t},Eg=function(t){if(t.isLeafNode()){const e=t.val();P(typeof e=="string"||typeof e=="number"||typeof e=="object"&&tn(e,".sv"),"Priority must be a string or number.")}else P(t===pl||t.isEmpty(),"priority of unexpected type.");P(t===pl||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ah;class Ae{constructor(e,n=Ae.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,P(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Eg(this.priorityNode_)}static set __childrenNodeConstructor(e){Ah=e}static get __childrenNodeConstructor(){return Ah}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ae(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ae.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return J(e)?this:K(e)===".priority"?this.priorityNode_:Ae.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ae.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=K(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(P(s!==".priority"||An(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ae.__childrenNodeConstructor.EMPTY_NODE.updateChild(fe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+bg(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Jp(this.value_):e+=this.value_,this.lazyHash_=zp(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ae.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ae.__childrenNodeConstructor?-1:(P(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,r=Ae.VALUE_TYPE_ORDER.indexOf(n),i=Ae.VALUE_TYPE_ORDER.indexOf(s);return P(r>=0,"Unknown leaf type: "+n),P(i>=0,"Unknown leaf type: "+s),r===i?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ae.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wg,Cg;function Zw(t){wg=t}function eC(t){Cg=t}class tC extends $o{compare(e,n){const s=e.node.getPriority(),r=n.node.getPriority(),i=s.compareTo(r);return i===0?Us(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Y.MIN}maxPost(){return new Y(Xn,new Ae("[PRIORITY-POST]",Cg))}makePost(e,n){const s=wg(e);return new Y(n,new Ae("[PRIORITY-POST]",s))}toString(){return".priority"}}const Ee=new tC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC=Math.log(2);class sC{constructor(e){const n=i=>parseInt(Math.log(i)/nC,10),s=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const r=s(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const so=function(t,e,n,s){t.sort(e);const r=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new Re(d,h.node,Re.BLACK,null,null);{const p=parseInt(u/2,10)+l,m=r(l,p),_=r(p+1,c);return h=t[p],d=n?n(h):h,new Re(d,h.node,Re.BLACK,m,_)}},i=function(l){let c=null,u=null,h=t.length;const d=function(m,_){const b=h-m,T=h;h-=m;const A=r(b+1,T),O=t[b],D=n?n(O):O;p(new Re(D,O.node,_,null,A))},p=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<l.count;++m){const _=l.nextBitIsOne(),b=Math.pow(2,l.count-(m+1));_?d(b,Re.BLACK):(d(b,Re.BLACK),d(b,Re.RED))}return u},o=new sC(t.length),a=i(o);return new ze(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oa;const cs={};class jt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return P(cs&&Ee,"ChildrenNode.ts has not been loaded"),Oa=Oa||new jt({".priority":cs},{".priority":Ee}),Oa}get(e){const n=As(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof ze?n:null}hasIndex(e){return tn(this.indexSet_,e.toString())}addIndex(e,n){P(e!==Es,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let r=!1;const i=n.getIterator(Y.Wrap);let o=i.getNext();for(;o;)r=r||e.isDefinedOn(o.node),s.push(o),o=i.getNext();let a;r?a=so(s,e.getCompare()):a=cs;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new jt(u,c)}addToIndexes(e,n){const s=Xi(this.indexes_,(r,i)=>{const o=As(this.indexSet_,i);if(P(o,"Missing index implementation for "+i),r===cs)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Y.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),so(a,o.getCompare())}else return cs;else{const a=n.get(e.name);let l=r;return a&&(l=l.remove(new Y(e.name,a))),l.insert(e,e.node)}});return new jt(s,this.indexSet_)}removeFromIndexes(e,n){const s=Xi(this.indexes_,r=>{if(r===cs)return r;{const i=n.get(e.name);return i?r.remove(new Y(e.name,i)):r}});return new jt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rr;class V{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Eg(this.priorityNode_),this.children_.isEmpty()&&P(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return rr||(rr=new V(new ze(wc),null,jt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||rr}updatePriority(e){return this.children_.isEmpty()?this:new V(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?rr:n}}getChild(e){const n=K(e);return n===null?this:this.getImmediateChild(n).getChild(fe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(P(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new Y(e,n);let r,i;n.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(s,this.children_)):(r=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(s,this.children_));const o=r.isEmpty()?rr:this.priorityNode_;return new V(r,o,i)}}updateChild(e,n){const s=K(e);if(s===null)return n;{P(K(e)!==".priority"||An(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(s).updateChild(fe(e),n);return this.updateImmediateChild(s,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,r=0,i=!0;if(this.forEachChild(Ee,(o,a)=>{n[o]=a.val(e),s++,i&&V.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):i=!1}),!e&&i&&r<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+bg(this.getPriority().val())+":"),this.forEachChild(Ee,(n,s)=>{const r=s.hash();r!==""&&(e+=":"+n+":"+r)}),this.lazyHash_=e===""?"":zp(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const r=this.resolveIndex_(s);if(r){const i=r.getPredecessorKey(new Y(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Y(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Y(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,Y.Wrap);let i=r.peek();for(;i!=null&&n.compare(i,e)<0;)r.getNext(),i=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,Y.Wrap);let i=r.peek();for(;i!=null&&n.compare(i,e)>0;)r.getNext(),i=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ii?-1:0}withIndex(e){if(e===Es||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new V(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Es||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Ee),r=n.getIterator(Ee);let i=s.getNext(),o=r.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=s.getNext(),o=r.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Es?null:this.indexMap_.get(e.toString())}}V.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class rC extends V{constructor(){super(new ze(wc),V.EMPTY_NODE,jt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return V.EMPTY_NODE}isEmpty(){return!1}}const ii=new rC;Object.defineProperties(Y,{MIN:{value:new Y(Ps,V.EMPTY_NODE)},MAX:{value:new Y(Xn,ii)}});yg.__EMPTY_NODE=V.EMPTY_NODE;Ae.__childrenNodeConstructor=V;Xw(ii);eC(ii);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iC=!0;function Pe(t,e=null){if(t===null)return V.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),P(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ae(n,Pe(e))}if(!(t instanceof Array)&&iC){const n=[];let s=!1;if(Qe(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Pe(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new Y(o,l)))}}),n.length===0)return V.EMPTY_NODE;const i=so(n,Qw,o=>o.name,wc);if(s){const o=so(n,Ee.getCompare());return new V(i,Pe(e),new jt({".priority":o},{".priority":Ee}))}else return new V(i,Pe(e),jt.Default)}else{let n=V.EMPTY_NODE;return Qe(t,(s,r)=>{if(tn(t,s)&&s.substring(0,1)!=="."){const i=Pe(r);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(s,i))}}),n.updatePriority(Pe(e))}}Zw(Pe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC extends $o{constructor(e){super(),this.indexPath_=e,P(!J(e)&&K(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),r=this.extractChild(n.node),i=s.compareTo(r);return i===0?Us(e.name,n.name):i}makePost(e,n){const s=Pe(e),r=V.EMPTY_NODE.updateChild(this.indexPath_,s);return new Y(n,r)}maxPost(){const e=V.EMPTY_NODE.updateChild(this.indexPath_,ii);return new Y(Xn,e)}toString(){return mg(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC extends $o{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Us(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Y.MIN}maxPost(){return Y.MAX}makePost(e,n){const s=Pe(e);return new Y(n,s)}toString(){return".value"}}const lC=new aC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ig(t){return{type:"value",snapshotNode:t}}function Os(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Fr(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ur(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function cC(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(e){this.index_=e}updateChild(e,n,s,r,i,o){P(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(r).equals(s.getChild(r))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Fr(n,a)):P(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Os(n,s)):o.trackChildChange(Ur(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Ee,(r,i)=>{n.hasChild(r)||s.trackChildChange(Fr(r,i))}),n.isLeafNode()||n.forEachChild(Ee,(r,i)=>{if(e.hasChild(r)){const o=e.getImmediateChild(r);o.equals(i)||s.trackChildChange(Ur(r,i,o))}else s.trackChildChange(Os(r,i))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?V.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e){this.indexedFilter_=new Cc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=$r.getStartPost_(e),this.endPost_=$r.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,r,i,o){return this.matches(new Y(n,s))||(s=V.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,r,i,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=V.EMPTY_NODE);let r=n.withIndex(this.index_);r=r.updatePriority(V.EMPTY_NODE);const i=this;return n.forEachChild(Ee,(o,a)=>{i.matches(new Y(o,a))||(r=r.updateImmediateChild(o,V.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new $r(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,r,i,o){return this.rangedFilter_.matches(new Y(n,s))||(s=V.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,r,i,o):this.fullLimitUpdateChild_(e,n,s,i,o)}updateFullNode(e,n,s){let r;if(n.isLeafNode()||n.isEmpty())r=V.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){r=V.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const a=i.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))r=r.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{r=n.withIndex(this.index_),r=r.updatePriority(V.EMPTY_NODE);let i;this.reverse_?i=r.getReverseIterator(this.index_):i=r.getIterator(this.index_);let o=0;for(;i.hasNext();){const a=i.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:r=r.updateImmediateChild(a.name,V.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,r,i){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,p)=>h(p,d)}else o=this.index_.getCompare();const a=e;P(a.numChildren()===this.limit_,"");const l=new Y(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let d=r.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=r.getChildAfterChild(this.index_,d,this.reverse_);const p=d==null?1:o(d,l);if(u&&!s.isEmpty()&&p>=0)return i!=null&&i.trackChildChange(Ur(n,s,h)),a.updateImmediateChild(n,s);{i!=null&&i.trackChildChange(Fr(n,h));const _=a.updateImmediateChild(n,V.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(i!=null&&i.trackChildChange(Os(d.name,d.node)),_.updateImmediateChild(d.name,d.node)):_}}else return s.isEmpty()?e:u&&o(c,l)>=0?(i!=null&&(i.trackChildChange(Fr(c.name,c.node)),i.trackChildChange(Os(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,V.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ee}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return P(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return P(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ps}hasEnd(){return this.endSet_}getIndexEndValue(){return P(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return P(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Xn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return P(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ee}copy(){const e=new Ic;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function hC(t){return t.loadsAllData()?new Cc(t.getIndex()):t.hasLimit()?new uC(t):new $r(t)}function Rh(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ee?n="$priority":t.index_===lC?n="$value":t.index_===Es?n="$key":(P(t.index_ instanceof oC,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ie(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Ie(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Ie(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Ie(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Ie(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Ph(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ee&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro extends fg{constructor(e,n,s,r){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=r,this.log_=ri("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(P(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=ro.getListenId_(e,s),a={};this.listens_[o]=a;const l=Rh(e._queryParams);this.restRequest_(i+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(i,h,!1,s),As(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",r(d,null)}})}unlisten(e,n){const s=ro.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Rh(e._queryParams),s=e._path.toString(),r=new Fo;return this.restRequest_(s+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(s,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,i])=>{r&&r.accessToken&&(n.auth=r.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ms(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=xr(a.responseText)}catch{Ke("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&Ke("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{constructor(){this.rootNode_=V.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(){return{value:null,children:new Map}}function Sg(t,e,n){if(J(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=K(e);t.children.has(s)||t.children.set(s,io());const r=t.children.get(s);e=fe(e),Sg(r,e,n)}}function gl(t,e,n){t.value!==null?n(e,t.value):fC(t,(s,r)=>{const i=new ue(e.toString()+"/"+s);gl(r,i,n)})}function fC(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Qe(this.last_,(s,r)=>{n[s]=n[s]-r}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oh=10*1e3,gC=30*1e3,mC=5*60*1e3;class _C{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new pC(e);const s=Oh+(gC-Oh)*Math.random();Er(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Qe(e,(r,i)=>{i>0&&tn(this.statsToReport_,r)&&(n[r]=i,s=!0)}),s&&this.server_.reportStats(n),Er(this.reportStats_.bind(this),Math.floor(Math.random()*2*mC))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _t;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(_t||(_t={}));function Tg(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Sc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Tc(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=_t.ACK_USER_WRITE,this.source=Tg()}operationForChild(e){if(J(this.path)){if(this.affectedTree.value!=null)return P(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ue(e));return new oo(Z(),n,this.revert)}}else return P(K(this.path)===e,"operationForChild called for unrelated child."),new oo(fe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e,n){this.source=e,this.path=n,this.type=_t.LISTEN_COMPLETE}operationForChild(e){return J(this.path)?new Br(this.source,Z()):new Br(this.source,fe(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=_t.OVERWRITE}operationForChild(e){return J(this.path)?new Zn(this.source,Z(),this.snap.getImmediateChild(e)):new Zn(this.source,fe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=_t.MERGE}operationForChild(e){if(J(this.path)){const n=this.children.subtree(new ue(e));return n.isEmpty()?null:n.value?new Zn(this.source,Z(),n.value):new Hr(this.source,Z(),n)}else return P(K(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Hr(this.source,fe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(J(e))return this.isFullyInitialized()&&!this.filtered_;const n=K(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vC{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function yC(t,e,n,s){const r=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(cC(o.childName,o.snapshotNode))}),ir(t,r,"child_removed",e,s,n),ir(t,r,"child_added",e,s,n),ir(t,r,"child_moved",i,s,n),ir(t,r,"child_changed",e,s,n),ir(t,r,"value",e,s,n),r}function ir(t,e,n,s,r,i){const o=s.filter(a=>a.type===n);o.sort((a,l)=>EC(t,a,l)),o.forEach(a=>{const l=bC(t,a,i);r.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function bC(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function EC(t,e,n){if(e.childName==null||n.childName==null)throw Ls("Should only compare child_ events.");const s=new Y(e.childName,e.snapshotNode),r=new Y(n.childName,n.snapshotNode);return t.index_.compare(s,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bo(t,e){return{eventCache:t,serverCache:e}}function wr(t,e,n,s){return Bo(new Rn(e,n,s),t.serverCache)}function Ag(t,e,n,s){return Bo(t.eventCache,new Rn(e,n,s))}function ao(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function es(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Na;const wC=()=>(Na||(Na=new ze(aw)),Na);class me{constructor(e,n=wC()){this.value=e,this.children=n}static fromObject(e){let n=new me(null);return Qe(e,(s,r)=>{n=n.set(new ue(s),r)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Z(),value:this.value};if(J(e))return null;{const s=K(e),r=this.children.get(s);if(r!==null){const i=r.findRootMostMatchingPathAndValue(fe(e),n);return i!=null?{path:Se(new ue(s),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(J(e))return this;{const n=K(e),s=this.children.get(n);return s!==null?s.subtree(fe(e)):new me(null)}}set(e,n){if(J(e))return new me(n,this.children);{const s=K(e),i=(this.children.get(s)||new me(null)).set(fe(e),n),o=this.children.insert(s,i);return new me(this.value,o)}}remove(e){if(J(e))return this.children.isEmpty()?new me(null):new me(null,this.children);{const n=K(e),s=this.children.get(n);if(s){const r=s.remove(fe(e));let i;return r.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,r),this.value===null&&i.isEmpty()?new me(null):new me(this.value,i)}else return this}}get(e){if(J(e))return this.value;{const n=K(e),s=this.children.get(n);return s?s.get(fe(e)):null}}setTree(e,n){if(J(e))return n;{const s=K(e),i=(this.children.get(s)||new me(null)).setTree(fe(e),n);let o;return i.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,i),new me(this.value,o)}}fold(e){return this.fold_(Z(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((r,i)=>{s[r]=i.fold_(Se(e,r),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Z(),n)}findOnPath_(e,n,s){const r=this.value?s(n,this.value):!1;if(r)return r;if(J(e))return null;{const i=K(e),o=this.children.get(i);return o?o.findOnPath_(fe(e),Se(n,i),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Z(),n)}foreachOnPath_(e,n,s){if(J(e))return this;{this.value&&s(n,this.value);const r=K(e),i=this.children.get(r);return i?i.foreachOnPath_(fe(e),Se(n,r),s):new me(null)}}foreach(e){this.foreach_(Z(),e)}foreach_(e,n){this.children.inorderTraversal((s,r)=>{r.foreach_(Se(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.writeTree_=e}static empty(){return new bt(new me(null))}}function Cr(t,e,n){if(J(e))return new bt(new me(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const r=s.path;let i=s.value;const o=je(r,e);return i=i.updateChild(o,n),new bt(t.writeTree_.set(r,i))}else{const r=new me(n),i=t.writeTree_.setTree(e,r);return new bt(i)}}}function Nh(t,e,n){let s=t;return Qe(n,(r,i)=>{s=Cr(s,Se(e,r),i)}),s}function kh(t,e){if(J(e))return bt.empty();{const n=t.writeTree_.setTree(e,new me(null));return new bt(n)}}function ml(t,e){return rs(t,e)!=null}function rs(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(je(n.path,e)):null}function Dh(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ee,(s,r)=>{e.push(new Y(s,r))}):t.writeTree_.children.inorderTraversal((s,r)=>{r.value!=null&&e.push(new Y(s,r.value))}),e}function Sn(t,e){if(J(e))return t;{const n=rs(t,e);return n!=null?new bt(new me(n)):new bt(t.writeTree_.subtree(e))}}function _l(t){return t.writeTree_.isEmpty()}function Ns(t,e){return Rg(Z(),t.writeTree_,e)}function Rg(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((r,i)=>{r===".priority"?(P(i.value!==null,"Priority writes must always be leaf nodes"),s=i.value):n=Rg(Se(t,r),i,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Se(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ho(t,e){return kg(e,t)}function CC(t,e,n,s,r){P(s>t.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:r}),r&&(t.visibleWrites=Cr(t.visibleWrites,e,n)),t.lastWriteId=s}function IC(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function SC(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);P(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let r=s.visible,i=!1,o=t.allWrites.length-1;for(;r&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&TC(a,s.path)?r=!1:mt(s.path,a.path)&&(i=!0)),o--}if(r){if(i)return AC(t),!0;if(s.snap)t.visibleWrites=kh(t.visibleWrites,s.path);else{const a=s.children;Qe(a,l=>{t.visibleWrites=kh(t.visibleWrites,Se(s.path,l))})}return!0}else return!1}function TC(t,e){if(t.snap)return mt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&mt(Se(t.path,n),e))return!0;return!1}function AC(t){t.visibleWrites=Pg(t.allWrites,RC,Z()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function RC(t){return t.visible}function Pg(t,e,n){let s=bt.empty();for(let r=0;r<t.length;++r){const i=t[r];if(e(i)){const o=i.path;let a;if(i.snap)mt(n,o)?(a=je(n,o),s=Cr(s,a,i.snap)):mt(o,n)&&(a=je(o,n),s=Cr(s,Z(),i.snap.getChild(a)));else if(i.children){if(mt(n,o))a=je(n,o),s=Nh(s,a,i.children);else if(mt(o,n))if(a=je(o,n),J(a))s=Nh(s,Z(),i.children);else{const l=As(i.children,K(a));if(l){const c=l.getChild(fe(a));s=Cr(s,Z(),c)}}}else throw Ls("WriteRecord should have .snap or .children")}}return s}function Og(t,e,n,s,r){if(!s&&!r){const i=rs(t.visibleWrites,e);if(i!=null)return i;{const o=Sn(t.visibleWrites,e);if(_l(o))return n;if(n==null&&!ml(o,Z()))return null;{const a=n||V.EMPTY_NODE;return Ns(o,a)}}}else{const i=Sn(t.visibleWrites,e);if(!r&&_l(i))return n;if(!r&&n==null&&!ml(i,Z()))return null;{const o=function(c){return(c.visible||r)&&(!s||!~s.indexOf(c.writeId))&&(mt(c.path,e)||mt(e,c.path))},a=Pg(t.allWrites,o,e),l=n||V.EMPTY_NODE;return Ns(a,l)}}}function PC(t,e,n){let s=V.EMPTY_NODE;const r=rs(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(Ee,(i,o)=>{s=s.updateImmediateChild(i,o)}),s;if(n){const i=Sn(t.visibleWrites,e);return n.forEachChild(Ee,(o,a)=>{const l=Ns(Sn(i,new ue(o)),a);s=s.updateImmediateChild(o,l)}),Dh(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const i=Sn(t.visibleWrites,e);return Dh(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function OC(t,e,n,s,r){P(s||r,"Either existingEventSnap or existingServerSnap must exist");const i=Se(e,n);if(ml(t.visibleWrites,i))return null;{const o=Sn(t.visibleWrites,i);return _l(o)?r.getChild(n):Ns(o,r.getChild(n))}}function NC(t,e,n,s){const r=Se(e,n),i=rs(t.visibleWrites,r);if(i!=null)return i;if(s.isCompleteForChild(n)){const o=Sn(t.visibleWrites,r);return Ns(o,s.getNode().getImmediateChild(n))}else return null}function kC(t,e){return rs(t.visibleWrites,e)}function DC(t,e,n,s,r,i,o){let a;const l=Sn(t.visibleWrites,e),c=rs(l,Z());if(c!=null)a=c;else if(n!=null)a=Ns(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=i?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let p=d.getNext();for(;p&&u.length<r;)h(p,s)!==0&&u.push(p),p=d.getNext();return u}else return[]}function xC(){return{visibleWrites:bt.empty(),allWrites:[],lastWriteId:-1}}function lo(t,e,n,s){return Og(t.writeTree,t.treePath,e,n,s)}function Ac(t,e){return PC(t.writeTree,t.treePath,e)}function xh(t,e,n,s){return OC(t.writeTree,t.treePath,e,n,s)}function co(t,e){return kC(t.writeTree,Se(t.treePath,e))}function LC(t,e,n,s,r,i){return DC(t.writeTree,t.treePath,e,n,s,r,i)}function Rc(t,e,n){return NC(t.writeTree,t.treePath,e,n)}function Ng(t,e){return kg(Se(t.treePath,e),t.writeTree)}function kg(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;P(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),P(s!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(s);if(r){const i=r.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(s,Ur(s,e.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(s,Fr(s,r.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(s,Os(s,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(s,Ur(s,e.snapshotNode,r.oldSnap));else throw Ls("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FC{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Dg=new FC;class Pc{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Rn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Rc(this.writes_,e,s)}}getChildAfterChild(e,n,s){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:es(this.viewCache_),i=LC(this.writes_,r,n,1,s,e);return i.length===0?null:i[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UC(t){return{filter:t}}function $C(t,e){P(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),P(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function BC(t,e,n,s,r){const i=new MC;let o,a;if(n.type===_t.OVERWRITE){const c=n;c.source.fromUser?o=vl(t,e,c.path,c.snap,s,r,i):(P(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!J(c.path),o=uo(t,e,c.path,c.snap,s,r,a,i))}else if(n.type===_t.MERGE){const c=n;c.source.fromUser?o=WC(t,e,c.path,c.children,s,r,i):(P(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=yl(t,e,c.path,c.children,s,r,a,i))}else if(n.type===_t.ACK_USER_WRITE){const c=n;c.revert?o=qC(t,e,c.path,s,r,i):o=VC(t,e,c.path,c.affectedTree,s,r,i)}else if(n.type===_t.LISTEN_COMPLETE)o=jC(t,e,n.path,s,i);else throw Ls("Unknown operation type: "+n.type);const l=i.getChanges();return HC(e,o,l),{viewCache:o,changes:l}}function HC(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const r=s.getNode().isLeafNode()||s.getNode().isEmpty(),i=ao(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!s.getNode().equals(i)||!s.getNode().getPriority().equals(i.getPriority()))&&n.push(Ig(ao(e)))}}function xg(t,e,n,s,r,i){const o=e.eventCache;if(co(s,n)!=null)return e;{let a,l;if(J(n))if(P(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=es(e),u=c instanceof V?c:V.EMPTY_NODE,h=Ac(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,i)}else{const c=lo(s,es(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,i)}else{const c=K(n);if(c===".priority"){P(An(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=xh(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=fe(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=xh(s,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=Rc(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,r,i):a=o.getNode()}}return wr(e,a,o.isFullyInitialized()||J(n),t.filter.filtersNodes())}}function uo(t,e,n,s,r,i,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(J(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),p,null)}else{const p=K(n);if(!l.isCompleteForPath(n)&&An(n)>1)return e;const m=fe(n),b=l.getNode().getImmediateChild(p).updateChild(m,s);p===".priority"?c=u.updatePriority(l.getNode(),b):c=u.updateChild(l.getNode(),p,b,m,Dg,null)}const h=Ag(e,c,l.isFullyInitialized()||J(n),u.filtersNodes()),d=new Pc(r,h,i);return xg(t,h,n,r,d,a)}function vl(t,e,n,s,r,i,o){const a=e.eventCache;let l,c;const u=new Pc(r,e,i);if(J(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=wr(e,c,!0,t.filter.filtersNodes());else{const h=K(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=wr(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=fe(n),p=a.getNode().getImmediateChild(h);let m;if(J(d))m=s;else{const _=u.getCompleteChild(h);_!=null?gg(d)===".priority"&&_.getChild(_g(d)).isEmpty()?m=_:m=_.updateChild(d,s):m=V.EMPTY_NODE}if(p.equals(m))l=e;else{const _=t.filter.updateChild(a.getNode(),h,m,d,u,o);l=wr(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Lh(t,e){return t.eventCache.isCompleteForChild(e)}function WC(t,e,n,s,r,i,o){let a=e;return s.foreach((l,c)=>{const u=Se(n,l);Lh(e,K(u))&&(a=vl(t,a,u,c,r,i,o))}),s.foreach((l,c)=>{const u=Se(n,l);Lh(e,K(u))||(a=vl(t,a,u,c,r,i,o))}),a}function Mh(t,e,n){return n.foreach((s,r)=>{e=e.updateChild(s,r)}),e}function yl(t,e,n,s,r,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;J(n)?c=s:c=new me(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const p=e.serverCache.getNode().getImmediateChild(h),m=Mh(t,p,d);l=uo(t,l,new ue(h),m,r,i,o,a)}}),c.children.inorderTraversal((h,d)=>{const p=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!p){const m=e.serverCache.getNode().getImmediateChild(h),_=Mh(t,m,d);l=uo(t,l,new ue(h),_,r,i,o,a)}}),l}function VC(t,e,n,s,r,i,o){if(co(r,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(J(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return uo(t,e,n,l.getNode().getChild(n),r,i,a,o);if(J(n)){let c=new me(null);return l.getNode().forEachChild(Es,(u,h)=>{c=c.set(new ue(u),h)}),yl(t,e,n,c,r,i,a,o)}else return e}else{let c=new me(null);return s.foreach((u,h)=>{const d=Se(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),yl(t,e,n,c,r,i,a,o)}}function jC(t,e,n,s,r){const i=e.serverCache,o=Ag(e,i.getNode(),i.isFullyInitialized()||J(n),i.isFiltered());return xg(t,o,n,s,Dg,r)}function qC(t,e,n,s,r,i){let o;if(co(s,n)!=null)return e;{const a=new Pc(s,e,r),l=e.eventCache.getNode();let c;if(J(n)||K(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=lo(s,es(e));else{const h=e.serverCache.getNode();P(h instanceof V,"serverChildren would be complete if leaf node"),u=Ac(s,h)}u=u,c=t.filter.updateFullNode(l,u,i)}else{const u=K(n);let h=Rc(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,fe(n),a,i):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,V.EMPTY_NODE,fe(n),a,i):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=lo(s,es(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,i)))}return o=e.serverCache.isFullyInitialized()||co(s,Z())!=null,wr(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,r=new Cc(s.getIndex()),i=hC(s);this.processor_=UC(i);const o=n.serverCache,a=n.eventCache,l=r.updateFullNode(V.EMPTY_NODE,o.getNode(),null),c=i.updateFullNode(V.EMPTY_NODE,a.getNode(),null),u=new Rn(l,o.isFullyInitialized(),r.filtersNodes()),h=new Rn(c,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=Bo(h,u),this.eventGenerator_=new vC(this.query_)}get query(){return this.query_}}function zC(t){return t.viewCache_.serverCache.getNode()}function KC(t){return ao(t.viewCache_)}function YC(t,e){const n=es(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!J(e)&&!n.getImmediateChild(K(e)).isEmpty())?n.getChild(e):null}function Fh(t){return t.eventRegistrations_.length===0}function JC(t,e){t.eventRegistrations_.push(e)}function Uh(t,e,n){const s=[];if(n){P(e==null,"A cancel should cancel all event registrations.");const r=t.query._path;t.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(n,r);o&&s.push(o)})}if(e){let r=[];for(let i=0;i<t.eventRegistrations_.length;++i){const o=t.eventRegistrations_[i];if(!o.matches(e))r.push(o);else if(e.hasAnyCallback()){r=r.concat(t.eventRegistrations_.slice(i+1));break}}t.eventRegistrations_=r}else t.eventRegistrations_=[];return s}function $h(t,e,n,s){e.type===_t.MERGE&&e.source.queryId!==null&&(P(es(t.viewCache_),"We should always have a full cache before handling merges"),P(ao(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,i=BC(t.processor_,r,e,n,s);return $C(t.processor_,i.viewCache),P(i.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,Lg(t,i.changes,i.viewCache.eventCache.getNode(),null)}function QC(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ee,(i,o)=>{s.push(Os(i,o))}),n.isFullyInitialized()&&s.push(Ig(n.getNode())),Lg(t,s,n.getNode(),e)}function Lg(t,e,n,s){const r=s?[s]:t.eventRegistrations_;return yC(t.eventGenerator_,e,n,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ho;class Mg{constructor(){this.views=new Map}}function XC(t){P(!ho,"__referenceConstructor has already been defined"),ho=t}function ZC(){return P(ho,"Reference.ts has not been loaded"),ho}function eI(t){return t.views.size===0}function Oc(t,e,n,s){const r=e.source.queryId;if(r!==null){const i=t.views.get(r);return P(i!=null,"SyncTree gave us an op for an invalid query."),$h(i,e,n,s)}else{let i=[];for(const o of t.views.values())i=i.concat($h(o,e,n,s));return i}}function Fg(t,e,n,s,r){const i=e._queryIdentifier,o=t.views.get(i);if(!o){let a=lo(n,r?s:null),l=!1;a?l=!0:s instanceof V?(a=Ac(n,s),l=!1):(a=V.EMPTY_NODE,l=!1);const c=Bo(new Rn(a,l,!1),new Rn(s,r,!1));return new GC(e,c)}return o}function tI(t,e,n,s,r,i){const o=Fg(t,e,s,r,i);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),JC(o,n),QC(o,n)}function nI(t,e,n,s){const r=e._queryIdentifier,i=[];let o=[];const a=Pn(t);if(r==="default")for(const[l,c]of t.views.entries())o=o.concat(Uh(c,n,s)),Fh(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||i.push(c.query));else{const l=t.views.get(r);l&&(o=o.concat(Uh(l,n,s)),Fh(l)&&(t.views.delete(r),l.query._queryParams.loadsAllData()||i.push(l.query)))}return a&&!Pn(t)&&i.push(new(ZC())(e._repo,e._path)),{removed:i,events:o}}function Ug(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Tn(t,e){let n=null;for(const s of t.views.values())n=n||YC(s,e);return n}function $g(t,e){if(e._queryParams.loadsAllData())return Wo(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Bg(t,e){return $g(t,e)!=null}function Pn(t){return Wo(t)!=null}function Wo(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fo;function sI(t){P(!fo,"__referenceConstructor has already been defined"),fo=t}function rI(){return P(fo,"Reference.ts has not been loaded"),fo}let iI=1;class Bh{constructor(e){this.listenProvider_=e,this.syncPointTree_=new me(null),this.pendingWriteTree_=xC(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Hg(t,e,n,s,r){return CC(t.pendingWriteTree_,e,n,s,r),r?ai(t,new Zn(Tg(),e,n)):[]}function jn(t,e,n=!1){const s=IC(t.pendingWriteTree_,e);if(SC(t.pendingWriteTree_,e)){let i=new me(null);return s.snap!=null?i=i.set(Z(),!0):Qe(s.children,o=>{i=i.set(new ue(o),!0)}),ai(t,new oo(s.path,i,n))}else return[]}function oi(t,e,n){return ai(t,new Zn(Sc(),e,n))}function oI(t,e,n){const s=me.fromObject(n);return ai(t,new Hr(Sc(),e,s))}function aI(t,e){return ai(t,new Br(Sc(),e))}function lI(t,e,n){const s=kc(t,n);if(s){const r=Dc(s),i=r.path,o=r.queryId,a=je(i,e),l=new Br(Tc(o),a);return xc(t,i,l)}else return[]}function po(t,e,n,s,r=!1){const i=e._path,o=t.syncPointTree_.get(i);let a=[];if(o&&(e._queryIdentifier==="default"||Bg(o,e))){const l=nI(o,e,n,s);eI(o)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const c=l.removed;if(a=l.events,!r){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(i,(d,p)=>Pn(p));if(u&&!h){const d=t.syncPointTree_.subtree(i);if(!d.isEmpty()){const p=hI(d);for(let m=0;m<p.length;++m){const _=p[m],b=_.query,T=qg(t,_);t.listenProvider_.startListening(Ir(b),Wr(t,b),T.hashFn,T.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(Ir(e),null):c.forEach(d=>{const p=t.queryToTagMap.get(Vo(d));t.listenProvider_.stopListening(Ir(d),p)}))}dI(t,c)}return a}function Wg(t,e,n,s){const r=kc(t,s);if(r!=null){const i=Dc(r),o=i.path,a=i.queryId,l=je(o,e),c=new Zn(Tc(a),l,n);return xc(t,o,c)}else return[]}function cI(t,e,n,s){const r=kc(t,s);if(r){const i=Dc(r),o=i.path,a=i.queryId,l=je(o,e),c=me.fromObject(n),u=new Hr(Tc(a),l,c);return xc(t,o,u)}else return[]}function bl(t,e,n,s=!1){const r=e._path;let i=null,o=!1;t.syncPointTree_.foreachOnPath(r,(d,p)=>{const m=je(d,r);i=i||Tn(p,m),o=o||Pn(p)});let a=t.syncPointTree_.get(r);a?(o=o||Pn(a),i=i||Tn(a,Z())):(a=new Mg,t.syncPointTree_=t.syncPointTree_.set(r,a));let l;i!=null?l=!0:(l=!1,i=V.EMPTY_NODE,t.syncPointTree_.subtree(r).foreachChild((p,m)=>{const _=Tn(m,Z());_&&(i=i.updateImmediateChild(p,_))}));const c=Bg(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=Vo(e);P(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const p=fI();t.queryToTagMap.set(d,p),t.tagToQueryMap.set(p,d)}const u=Ho(t.pendingWriteTree_,r);let h=tI(a,e,n,u,i,l);if(!c&&!o&&!s){const d=$g(a,e);h=h.concat(pI(t,e,d))}return h}function Nc(t,e,n){const r=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=je(o,e),c=Tn(a,l);if(c)return c});return Og(r,e,i,n,!0)}function uI(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const h=je(c,n);s=s||Tn(u,h)});let r=t.syncPointTree_.get(n);r?s=s||Tn(r,Z()):(r=new Mg,t.syncPointTree_=t.syncPointTree_.set(n,r));const i=s!=null,o=i?new Rn(s,!0,!1):null,a=Ho(t.pendingWriteTree_,e._path),l=Fg(r,e,a,i?o.getNode():V.EMPTY_NODE,i);return KC(l)}function ai(t,e){return Vg(e,t.syncPointTree_,null,Ho(t.pendingWriteTree_,Z()))}function Vg(t,e,n,s){if(J(t.path))return jg(t,e,n,s);{const r=e.get(Z());n==null&&r!=null&&(n=Tn(r,Z()));let i=[];const o=K(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=Ng(s,o);i=i.concat(Vg(a,l,c,u))}return r&&(i=i.concat(Oc(r,t,s,n))),i}}function jg(t,e,n,s){const r=e.get(Z());n==null&&r!=null&&(n=Tn(r,Z()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Ng(s,o),u=t.operationForChild(o);u&&(i=i.concat(jg(u,a,l,c)))}),r&&(i=i.concat(Oc(r,t,s,n))),i}function qg(t,e){const n=e.query,s=Wr(t,n);return{hashFn:()=>(zC(e)||V.EMPTY_NODE).hash(),onComplete:r=>{if(r==="ok")return s?lI(t,n._path,s):aI(t,n._path);{const i=uw(r,n);return po(t,n,null,i)}}}}function Wr(t,e){const n=Vo(e);return t.queryToTagMap.get(n)}function Vo(t){return t._path.toString()+"$"+t._queryIdentifier}function kc(t,e){return t.tagToQueryMap.get(e)}function Dc(t){const e=t.indexOf("$");return P(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ue(t.substr(0,e))}}function xc(t,e,n){const s=t.syncPointTree_.get(e);P(s,"Missing sync point for query tag that we're tracking");const r=Ho(t.pendingWriteTree_,e);return Oc(s,n,r,null)}function hI(t){return t.fold((e,n,s)=>{if(n&&Pn(n))return[Wo(n)];{let r=[];return n&&(r=Ug(n)),Qe(s,(i,o)=>{r=r.concat(o)}),r}})}function Ir(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(rI())(t._repo,t._path):t}function dI(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const r=Vo(s),i=t.queryToTagMap.get(r);t.queryToTagMap.delete(r),t.tagToQueryMap.delete(i)}}}function fI(){return iI++}function pI(t,e,n){const s=e._path,r=Wr(t,e),i=qg(t,n),o=t.listenProvider_.startListening(Ir(e),r,i.hashFn,i.onComplete),a=t.syncPointTree_.subtree(s);if(r)P(!Pn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!J(c)&&u&&Pn(u))return[Wo(u).query];{let d=[];return u&&(d=d.concat(Ug(u).map(p=>p.query))),Qe(h,(p,m)=>{d=d.concat(m)}),d}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(Ir(u),Wr(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Lc(n)}node(){return this.node_}}class Mc{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Se(this.path_,e);return new Mc(this.syncTree_,n)}node(){return Nc(this.syncTree_,this.path_)}}const gI=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Hh=function(t,e,n){if(!t||typeof t!="object")return t;if(P(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return mI(t[".sv"],e,n);if(typeof t[".sv"]=="object")return _I(t[".sv"],e);P(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},mI=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:P(!1,"Unexpected server value: "+t)}},_I=function(t,e,n){t.hasOwnProperty("increment")||P(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&P(!1,"Unexpected increment value: "+s);const r=e.node();if(P(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return s;const o=r.getValue();return typeof o!="number"?s:o+s},vI=function(t,e,n,s){return Fc(e,new Mc(n,t),s)},Gg=function(t,e,n){return Fc(t,new Lc(e),n)};function Fc(t,e,n){const s=t.getPriority().val(),r=Hh(s,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=Hh(o.getValue(),e,n);return a!==o.getValue()||r!==o.getPriority().val()?new Ae(a,Pe(r)):t}else{const o=t;return i=o,r!==o.getPriority().val()&&(i=i.updatePriority(new Ae(r))),o.forEachChild(Ee,(a,l)=>{const c=Fc(l,e.getImmediateChild(a),n);c!==l&&(i=i.updateImmediateChild(a,c))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function $c(t,e){let n=e instanceof ue?e:new ue(e),s=t,r=K(n);for(;r!==null;){const i=As(s.node.children,r)||{children:{},childCount:0};s=new Uc(r,s,i),n=fe(n),r=K(n)}return s}function Bs(t){return t.node.value}function zg(t,e){t.node.value=e,El(t)}function Kg(t){return t.node.childCount>0}function yI(t){return Bs(t)===void 0&&!Kg(t)}function jo(t,e){Qe(t.node.children,(n,s)=>{e(new Uc(n,t,s))})}function Yg(t,e,n,s){n&&!s&&e(t),jo(t,r=>{Yg(r,e,!0,s)}),n&&s&&e(t)}function bI(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function li(t){return new ue(t.parent===null?t.name:li(t.parent)+"/"+t.name)}function El(t){t.parent!==null&&EI(t.parent,t.name,t)}function EI(t,e,n){const s=yI(n),r=tn(t.node.children,e);s&&r?(delete t.node.children[e],t.node.childCount--,El(t)):!s&&!r&&(t.node.children[e]=n.node,t.node.childCount++,El(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wI=/[\[\].#$\/\u0000-\u001F\u007F]/,CI=/[\[\].#$\u0000-\u001F\u007F]/,ka=10*1024*1024,Jg=function(t){return typeof t=="string"&&t.length!==0&&!wI.test(t)},Qg=function(t){return typeof t=="string"&&t.length!==0&&!CI.test(t)},II=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Qg(t)},Xg=function(t,e,n,s){s&&e===void 0||Bc(dc(t,"value"),e,n)},Bc=function(t,e,n){const s=n instanceof ue?new Vw(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Hn(s));if(typeof e=="function")throw new Error(t+"contains a function "+Hn(s)+" with contents = "+e.toString());if(Kp(e))throw new Error(t+"contains "+e.toString()+" "+Hn(s));if(typeof e=="string"&&e.length>ka/3&&Uo(e)>ka)throw new Error(t+"contains a string greater than "+ka+" utf8 bytes "+Hn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,i=!1;if(Qe(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!Jg(o)))throw new Error(t+" contains an invalid key ("+o+") "+Hn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);jw(s,o),Bc(t,a,s),qw(s)}),r&&i)throw new Error(t+' contains ".value" child '+Hn(s)+" in addition to actual children.")}},Zg=function(t,e,n,s){if(!Qg(n))throw new Error(dc(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},SI=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Zg(t,e,n)},Hc=function(t,e){if(K(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},TI=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Jg(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!II(n))throw new Error(dc(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Wc(t,e){let n=null;for(let s=0;s<e.length;s++){const r=e[s],i=r.getPath();n!==null&&!bc(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(r)}n&&t.eventLists_.push(n)}function em(t,e,n){Wc(t,n),tm(t,s=>bc(s,e))}function Ft(t,e,n){Wc(t,n),tm(t,s=>mt(s,e)||mt(e,s))}function tm(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const r=t.eventLists_[s];if(r){const i=r.path;e(i)?(RI(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function RI(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();br&&Me("event: "+n.toString()),$s(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PI="repo_interrupt",OI=25;class NI{constructor(e,n,s,r){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new AI,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=io(),this.transactionQueueTree_=new Uc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function kI(t,e,n){if(t.stats_=vc(t.repoInfo_),t.forceRestClient_||pw())t.server_=new ro(t.repoInfo_,(s,r,i,o)=>{Wh(t,s,r,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Vh(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ie(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Yt(t.repoInfo_,e,(s,r,i,o)=>{Wh(t,s,r,i,o)},s=>{Vh(t,s)},s=>{DI(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=yw(t.repoInfo_,()=>new _C(t.stats_,t.server_)),t.infoData_=new dC,t.infoSyncTree_=new Bh({startListening:(s,r,i,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=oi(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),jc(t,"connected",!1),t.serverSyncTree_=new Bh({startListening:(s,r,i,o)=>(t.server_.listen(s,i,r,(a,l)=>{const c=o(a,l);Ft(t.eventQueue_,s._path,c)}),[]),stopListening:(s,r)=>{t.server_.unlisten(s,r)}})}function nm(t){const n=t.infoData_.getNode(new ue(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Vc(t){return gI({timestamp:nm(t)})}function Wh(t,e,n,s,r){t.dataUpdateCount++;const i=new ue(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(r)if(s){const l=Xi(n,c=>Pe(c));o=cI(t.serverSyncTree_,i,l,r)}else{const l=Pe(n);o=Wg(t.serverSyncTree_,i,l,r)}else if(s){const l=Xi(n,c=>Pe(c));o=oI(t.serverSyncTree_,i,l)}else{const l=Pe(n);o=oi(t.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=Go(t,i)),Ft(t.eventQueue_,a,o)}function Vh(t,e){jc(t,"connected",e),e===!1&&MI(t)}function DI(t,e){Qe(e,(n,s)=>{jc(t,n,s)})}function jc(t,e,n){const s=new ue("/.info/"+e),r=Pe(n);t.infoData_.updateSnapshot(s,r);const i=oi(t.infoSyncTree_,s,r);Ft(t.eventQueue_,s,i)}function sm(t){return t.nextWriteId_++}function xI(t,e,n){const s=uI(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(r=>{const i=Pe(r).withIndex(e._queryParams.getIndex());bl(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=oi(t.serverSyncTree_,e._path,i);else{const a=Wr(t.serverSyncTree_,e);o=Wg(t.serverSyncTree_,e._path,i,a)}return Ft(t.eventQueue_,e._path,o),po(t.serverSyncTree_,e,n,null,!0),i},r=>(qo(t,"get for query "+Ie(e)+" failed: "+r),Promise.reject(new Error(r))))}function LI(t,e,n,s,r){qo(t,"set",{path:e.toString(),value:n,priority:s});const i=Vc(t),o=Pe(n,s),a=Nc(t.serverSyncTree_,e),l=Gg(o,a,i),c=sm(t),u=Hg(t.serverSyncTree_,e,l,c,!0);Wc(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,p)=>{const m=d==="ok";m||Ke("set at "+e+" failed: "+d);const _=jn(t.serverSyncTree_,c,!m);Ft(t.eventQueue_,e,_),$I(t,r,d,p)});const h=lm(t,e);Go(t,h),Ft(t.eventQueue_,h,[])}function MI(t){qo(t,"onDisconnectEvents");const e=Vc(t),n=io();gl(t.onDisconnect_,Z(),(r,i)=>{const o=vI(r,i,t.serverSyncTree_,e);Sg(n,r,o)});let s=[];gl(n,Z(),(r,i)=>{s=s.concat(oi(t.serverSyncTree_,r,i));const o=lm(t,r);Go(t,o)}),t.onDisconnect_=io(),Ft(t.eventQueue_,Z(),s)}function FI(t,e,n){let s;K(e._path)===".info"?s=bl(t.infoSyncTree_,e,n):s=bl(t.serverSyncTree_,e,n),em(t.eventQueue_,e._path,s)}function jh(t,e,n){let s;K(e._path)===".info"?s=po(t.infoSyncTree_,e,n):s=po(t.serverSyncTree_,e,n),em(t.eventQueue_,e._path,s)}function UI(t){t.persistentConnection_&&t.persistentConnection_.interrupt(PI)}function qo(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Me(n,...e)}function $I(t,e,n,s){e&&$s(()=>{if(n==="ok")e(null);else{const r=(n||"error").toUpperCase();let i=r;s&&(i+=": "+s);const o=new Error(i);o.code=r,e(o)}})}function rm(t,e,n){return Nc(t.serverSyncTree_,e,n)||V.EMPTY_NODE}function qc(t,e=t.transactionQueueTree_){if(e||zo(t,e),Bs(e)){const n=om(t,e);P(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&BI(t,li(e),n)}else Kg(e)&&jo(e,n=>{qc(t,n)})}function BI(t,e,n){const s=n.map(c=>c.currentWriteId),r=rm(t,e,s);let i=r;const o=r.hash();for(let c=0;c<n.length;c++){const u=n[c];P(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=je(e,u.path);i=i.updateChild(h,u.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;t.server_.put(l.toString(),a,c=>{qo(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(jn(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();zo(t,$c(t.transactionQueueTree_,e)),qc(t,t.transactionQueueTree_),Ft(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)$s(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Ke("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Go(t,e)}},o)}function Go(t,e){const n=im(t,e),s=li(n),r=om(t,n);return HI(t,r,s),s}function HI(t,e,n){if(e.length===0)return;const s=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=je(n,l.path);let u=!1,h;if(P(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,r=r.concat(jn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=OI)u=!0,h="maxretry",r=r.concat(jn(t.serverSyncTree_,l.currentWriteId,!0));else{const d=rm(t,l.path,o);l.currentInputSnapshot=d;const p=e[a].update(d.val());if(p!==void 0){Bc("transaction failed: Data returned ",p,l.path);let m=Pe(p);typeof p=="object"&&p!=null&&tn(p,".priority")||(m=m.updatePriority(d.getPriority()));const b=l.currentWriteId,T=Vc(t),A=Gg(m,d,T);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=A,l.currentWriteId=sm(t),o.splice(o.indexOf(b),1),r=r.concat(Hg(t.serverSyncTree_,l.path,A,l.currentWriteId,l.applyLocally)),r=r.concat(jn(t.serverSyncTree_,b,!0))}else u=!0,h="nodata",r=r.concat(jn(t.serverSyncTree_,l.currentWriteId,!0))}Ft(t.eventQueue_,n,r),r=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}zo(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)$s(s[a]);qc(t,t.transactionQueueTree_)}function im(t,e){let n,s=t.transactionQueueTree_;for(n=K(e);n!==null&&Bs(s)===void 0;)s=$c(s,n),e=fe(e),n=K(e);return s}function om(t,e){const n=[];return am(t,e,n),n.sort((s,r)=>s.order-r.order),n}function am(t,e,n){const s=Bs(e);if(s)for(let r=0;r<s.length;r++)n.push(s[r]);jo(e,r=>{am(t,r,n)})}function zo(t,e){const n=Bs(e);if(n){let s=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[s]=n[r],s++);n.length=s,zg(e,n.length>0?n:void 0)}jo(e,s=>{zo(t,s)})}function lm(t,e){const n=li(im(t,e)),s=$c(t.transactionQueueTree_,e);return bI(s,r=>{Da(t,r)}),Da(t,s),Yg(s,r=>{Da(t,r)}),n}function Da(t,e){const n=Bs(e);if(n){const s=[];let r=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(P(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(P(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),r=r.concat(jn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?zg(e,void 0):n.length=i+1,Ft(t.eventQueue_,li(e),r);for(let o=0;o<s.length;o++)$s(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WI(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let r=n[s];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function VI(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Ke(`Invalid query segment '${n}' in query '${t}'`)}return e}const qh=function(t,e){const n=jI(t),s=n.namespace;n.domain==="firebase.com"&&Xt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Xt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||iw();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new og(n.host,n.secure,s,r,e,"",s!==n.subdomain),path:new ue(n.pathString)}},jI=function(t){let e="",n="",s="",r="",i="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(r=WI(t.substring(u,h)));const d=VI(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),i=s}"ns"in d&&(i=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:r,namespace:i}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gh="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",qI=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let r;const i=new Array(8);for(r=7;r>=0;r--)i[r]=Gh.charAt(n%64),n=Math.floor(n/64);P(n===0,"Cannot push at time == 0");let o=i.join("");if(s){for(r=11;r>=0&&e[r]===63;r--)e[r]=0;e[r]++}else for(r=0;r<12;r++)e[r]=Math.floor(Math.random()*64);for(r=0;r<12;r++)o+=Gh.charAt(e[r]);return P(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(e,n,s,r){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=r}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ie(this.snapshot.exportVal())}}class zI{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return P(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(e,n,s,r){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=r}get key(){return J(this._path)?null:gg(this._path)}get ref(){return new nn(this._repo,this._path)}get _queryIdentifier(){const e=Ph(this._queryParams),n=mc(e);return n==="{}"?"default":n}get _queryObject(){return Ph(this._queryParams)}isEqual(e){if(e=$e(e),!(e instanceof Gc))return!1;const n=this._repo===e._repo,s=bc(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return n&&s&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+Ww(this._path)}}class nn extends Gc{constructor(e,n){super(e,n,new Ic,!1)}get parent(){const e=_g(this._path);return e===null?null:new nn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Vr{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ue(e),s=jr(this.ref,e);return new Vr(this._node.getChild(n),s,Ee)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,r)=>e(new Vr(r,jr(this.ref,s),Ee)))}hasChild(e){const n=new ue(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ci(t,e){return t=$e(t),t._checkNotDeleted("ref"),e!==void 0?jr(t._root,e):t._root}function jr(t,e){return t=$e(t),K(t._path)===null?SI("child","path",e):Zg("child","path",e),new nn(t._repo,Se(t._path,e))}function HF(t,e){t=$e(t),Hc("push",t._path),Xg("push",e,t._path,!0);const n=nm(t._repo),s=qI(n),r=jr(t,s),i=jr(t,s);let o;return e!=null?o=zc(i,e).then(()=>i):o=Promise.resolve(i),r.then=o.then.bind(o),r.catch=o.then.bind(o,void 0),r}function WF(t){return Hc("remove",t._path),zc(t,null)}function zc(t,e){t=$e(t),Hc("set",t._path),Xg("set",e,t._path,!1);const n=new Fo;return LI(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function KI(t){t=$e(t);const e=new cm(()=>{}),n=new Ko(e);return xI(t._repo,t,n).then(s=>new Vr(s,new nn(t._repo,t._path),t._queryParams.getIndex()))}class Ko{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new GI("value",this,new Vr(e.snapshotNode,new nn(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new zI(this,e,n):null}matches(e){return e instanceof Ko?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function YI(t,e,n,s,r){let i;if(typeof s=="object"&&(i=void 0,r=s),typeof s=="function"&&(i=s),r&&r.onlyOnce){const l=n,c=(u,h)=>{jh(t._repo,t,a),l(u,h)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new cm(n,i||void 0),a=new Ko(o);return FI(t._repo,t,a),()=>jh(t._repo,t,a)}function wl(t,e,n,s){return YI(t,"value",e,n,s)}XC(nn);sI(nn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI="FIREBASE_DATABASE_EMULATOR_HOST",Cl={};let QI=!1;function XI(t,e,n,s){t.repoInfo_=new og(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function ZI(t,e,n,s,r){let i=s||t.options.databaseURL;i===void 0&&(t.options.projectId||Xt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Me("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=qh(i,r),a=o.repoInfo,l;typeof process<"u"&&hh&&(l=hh[JI]),l?(i=`http://${l}?ns=${a.namespace}`,o=qh(i,r),a=o.repoInfo):o.repoInfo.secure;const c=new mw(t.name,t.options,e);TI("Invalid Firebase Database URL",o),J(o.path)||Xt("Database URL must point to the root of a Firebase Database (not including a child path).");const u=tS(a,t,c,new gw(t.name,n));return new nS(u,t)}function eS(t,e){const n=Cl[e];(!n||n[t.key]!==t)&&Xt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),UI(t),delete n[t.key]}function tS(t,e,n,s){let r=Cl[e.name];r||(r={},Cl[e.name]=r);let i=r[t.toURLString()];return i&&Xt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new NI(t,QI,n,s),r[t.toURLString()]=i,i}class nS{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(kI(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new nn(this._repo,Z())),this._rootInternal}_delete(){return this._rootInternal!==null&&(eS(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Xt("Cannot call "+e+" on a deleted database.")}}function sS(t=Wp(),e){const n=gc(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=Pb("database");s&&rS(n,...s)}return n}function rS(t,e,n,s={}){t=$e(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Xt("Cannot call useEmulator() after instance has already been initialized.");const r=t._repoInternal;let i;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&Xt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),i=new Li(Li.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Ob(s.mockUserToken,t.app.options.projectId);i=new Li(o)}XI(r,e,n,i)}/**
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
 */function iS(t){ZE(Fs),Rs(new Qn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return ZI(s,r,i,n)},"PUBLIC").setMultipleInstances(!0)),In(dh,fh,t),In(dh,fh,"esm2017")}Yt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Yt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};iS();function Kc(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function um(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const oS=um,hm=new ni("auth","Firebase",um());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const go=new fc("@firebase/auth");function aS(t,...e){go.logLevel<=le.WARN&&go.warn(`Auth (${Fs}): ${t}`,...e)}function Mi(t,...e){go.logLevel<=le.ERROR&&go.error(`Auth (${Fs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(t,...e){throw Yc(t,...e)}function Dt(t,...e){return Yc(t,...e)}function dm(t,e,n){const s=Object.assign(Object.assign({},oS()),{[e]:n});return new ni("auth","Firebase",s).create(e,{appName:t.name})}function Jt(t){return dm(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Yc(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return hm.create(t,...e)}function j(t,e,...n){if(!t)throw Yc(e,...n)}function qt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Mi(e),new Error(e)}function Zt(t,e){t||qt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Il(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function lS(){return zh()==="http:"||zh()==="https:"}function zh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(lS()||kb()||"connection"in navigator)?navigator.onLine:!0}function uS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,n){this.shortDelay=e,this.longDelay=n,Zt(n>e,"Short delay should be less than long delay!"),this.isMobile=hc()||Mp()}get(){return cS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jc(t,e){Zt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;qt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;qt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;qt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dS=new ui(3e4,6e4);function sn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function rn(t,e,n,s,r={}){return pm(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Ms(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},i);return Nb()||(c.referrerPolicy="no-referrer"),fm.fetch()(gm(t,t.config.apiHost,n,a),c)})}async function pm(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},hS),e);try{const r=new pS(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ti(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ti(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ti(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ti(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw dm(t,u,c);Et(t,u)}}catch(r){if(r instanceof Dn)throw r;Et(t,"network-request-failed",{message:String(r)})}}async function hi(t,e,n,s,r={}){const i=await rn(t,e,n,s,r);return"mfaPendingCredential"in i&&Et(t,"multi-factor-auth-required",{_serverResponse:i}),i}function gm(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Jc(t.config,r):`${t.config.apiScheme}://${r}`}function fS(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class pS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Dt(this.auth,"network-request-failed")),dS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ti(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Dt(t,e,s);return r.customData._tokenResponse=n,r}function Kh(t){return t!==void 0&&t.enterprise!==void 0}class gS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return fS(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function mS(t,e){return rn(t,"GET","/v2/recaptchaConfig",sn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _S(t,e){return rn(t,"POST","/v1/accounts:delete",e)}async function mm(t,e){return rn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function vS(t,e=!1){const n=$e(t),s=await n.getIdToken(e),r=Qc(s);j(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Sr(xa(r.auth_time)),issuedAtTime:Sr(xa(r.iat)),expirationTime:Sr(xa(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function xa(t){return Number(t)*1e3}function Qc(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Mi("JWT malformed, contained fewer than 3 sections"),null;try{const r=Qi(n);return r?JSON.parse(r):(Mi("Failed to decode base64 JWT payload"),null)}catch(r){return Mi("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Yh(t){const e=Qc(t);return j(e,"internal-error"),j(typeof e.exp<"u","internal-error"),j(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Dn&&yS(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function yS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Sr(this.lastLoginAt),this.creationTime=Sr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function mo(t){var e;const n=t.auth,s=await t.getIdToken(),r=await qr(t,mm(n,{idToken:s}));j(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?_m(i.providerUserInfo):[],a=wS(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Sl(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function ES(t){const e=$e(t);await mo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function wS(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function _m(t){return t.map(e=>{var{providerId:n}=e,s=Kc(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CS(t,e){const n=await pm(t,{},async()=>{const s=Ms({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=gm(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",fm.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function IS(t,e){return rn(t,"POST","/v2/accounts:revokeToken",sn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){j(e.idToken,"internal-error"),j(typeof e.idToken<"u","internal-error"),j(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Yh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){j(e.length!==0,"internal-error");const n=Yh(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(j(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await CS(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new ws;return s&&(j(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(j(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(j(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ws,this.toJSON())}_performRefresh(){return qt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(t,e){j(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Gt{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Kc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new bS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Sl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await qr(this,this.stsTokenManager.getToken(this.auth,e));return j(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return vS(this,e)}reload(){return ES(this)}_assign(e){this!==e&&(j(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Gt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await mo(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Nt(this.auth.app))return Promise.reject(Jt(this.auth));const e=await this.getIdToken();return await qr(this,_S(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,T=(c=n.createdAt)!==null&&c!==void 0?c:void 0,A=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:O,emailVerified:D,isAnonymous:B,providerData:ee,stsTokenManager:Q}=n;j(O&&Q,e,"internal-error");const Ne=ws.fromJSON(this.name,Q);j(typeof O=="string",e,"internal-error"),cn(h,e.name),cn(d,e.name),j(typeof D=="boolean",e,"internal-error"),j(typeof B=="boolean",e,"internal-error"),cn(p,e.name),cn(m,e.name),cn(_,e.name),cn(b,e.name),cn(T,e.name),cn(A,e.name);const Be=new Gt({uid:O,auth:e,email:d,emailVerified:D,displayName:h,isAnonymous:B,photoURL:m,phoneNumber:p,tenantId:_,stsTokenManager:Ne,createdAt:T,lastLoginAt:A});return ee&&Array.isArray(ee)&&(Be.providerData=ee.map(ot=>Object.assign({},ot))),b&&(Be._redirectEventId=b),Be}static async _fromIdTokenResponse(e,n,s=!1){const r=new ws;r.updateFromServerResponse(n);const i=new Gt({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await mo(i),i}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];j(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?_m(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),a=new ws;a.updateFromIdToken(s);const l=new Gt({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Sl(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh=new Map;function zt(t){Zt(t instanceof Function,"Expected a class definition");let e=Jh.get(t);return e?(Zt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Jh.set(t,e),e)}/**
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
 */class vm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}vm.type="NONE";const Tl=vm;/**
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
 */function Fi(t,e,n){return`firebase:${t}:${e}:${n}`}class Cs{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Fi(this.userKey,r.apiKey,i),this.fullPersistenceKey=Fi("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Gt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Cs(zt(Tl),e,s);const r=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=r[0]||zt(Tl);const o=Fi(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=Gt._fromJSON(e,u);c!==i&&(a=h),i=c;break}}catch{}const l=r.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Cs(i,e,s):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Cs(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(wm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ym(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Im(e))return"Blackberry";if(Sm(e))return"Webos";if(bm(e))return"Safari";if((e.includes("chrome/")||Em(e))&&!e.includes("edge/"))return"Chrome";if(Cm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function ym(t=qe()){return/firefox\//i.test(t)}function bm(t=qe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Em(t=qe()){return/crios\//i.test(t)}function wm(t=qe()){return/iemobile/i.test(t)}function Cm(t=qe()){return/android/i.test(t)}function Im(t=qe()){return/blackberry/i.test(t)}function Sm(t=qe()){return/webos/i.test(t)}function Xc(t=qe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function SS(t=qe()){var e;return Xc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function TS(){return Db()&&document.documentMode===10}function Tm(t=qe()){return Xc(t)||Cm(t)||Sm(t)||Im(t)||/windows phone/i.test(t)||wm(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Am(t,e=[]){let n;switch(t){case"Browser":n=Qh(qe());break;case"Worker":n=`${Qh(qe())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Fs}/${s}`}/**
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
 */class AS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function RS(t,e={}){return rn(t,"GET","/v2/passwordPolicy",sn(t,e))}/**
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
 */const PS=6;class OS{constructor(e){var n,s,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:PS,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,r,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(r=l.containsLowercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NS{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xh(this),this.idTokenSubscription=new Xh(this),this.beforeStateQueue=new AS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=hm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=zt(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Cs.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await mm(this,{idToken:e}),s=await Gt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Nt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await mo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=uS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Nt(this.app))return Promise.reject(Jt(this));const n=e?$e(e):null;return n&&j(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&j(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Nt(this.app)?Promise.reject(Jt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Nt(this.app)?Promise.reject(Jt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(zt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await RS(this),n=new OS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ni("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await IS(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&zt(e)||this._popupRedirectResolver;j(n,this,"argument-error"),this.redirectPersistenceManager=await Cs.create(this,[zt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(j(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,r);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Am(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&aS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function xn(t){return $e(t)}class Xh{constructor(e){this.auth=e,this.observer=null,this.addObserver=Wb(n=>this.observer=n)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function kS(t){Yo=t}function Rm(t){return Yo.loadJS(t)}function DS(){return Yo.recaptchaEnterpriseScript}function xS(){return Yo.gapiScript}function LS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class MS{constructor(){this.enterprise=new FS}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class FS{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const US="recaptcha-enterprise",Pm="NO_RECAPTCHA";class $S{constructor(e){this.type=US,this.auth=xn(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{mS(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new gS(l);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function r(i,o,a){const l=window.grecaptcha;Kh(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(Pm)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new MS().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{s(this.auth).then(a=>{if(!n&&Kh(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=DS();l.length!==0&&(l+=a),Rm(l).then(()=>{r(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Zh(t,e,n,s=!1,r=!1){const i=new $S(t);let o;if(r)o=Pm;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return s?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function _o(t,e,n,s,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Zh(t,e,n,n==="getOobCode");return s(t,o)}else return s(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Zh(t,e,n,n==="getOobCode");return s(t,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BS(t,e){const n=gc(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Zi(i,e??{}))return r;Et(r,"already-initialized")}return n.initialize({options:e})}function HS(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(zt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function WS(t,e,n){const s=xn(t);j(s._canInitEmulator,s,"emulator-config-failed"),j(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=Om(e),{host:o,port:a}=VS(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),jS()}function Om(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function VS(t){const e=Om(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:ed(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:ed(o)}}}function ed(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function jS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return qt("not implemented")}_getIdTokenResponse(e){return qt("not implemented")}_linkToIdToken(e,n){return qt("not implemented")}_getReauthenticationResolver(e){return qt("not implemented")}}async function qS(t,e){return rn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GS(t,e){return hi(t,"POST","/v1/accounts:signInWithPassword",sn(t,e))}async function Nm(t,e){return rn(t,"POST","/v1/accounts:sendOobCode",sn(t,e))}async function zS(t,e){return Nm(t,e)}async function KS(t,e){return Nm(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YS(t,e){return hi(t,"POST","/v1/accounts:signInWithEmailLink",sn(t,e))}async function JS(t,e){return hi(t,"POST","/v1/accounts:signInWithEmailLink",sn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr extends Zc{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Gr(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Gr(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _o(e,n,"signInWithPassword",GS);case"emailLink":return YS(e,{email:this._email,oobCode:this._password});default:Et(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _o(e,s,"signUpPassword",qS);case"emailLink":return JS(e,{idToken:n,email:this._email,oobCode:this._password});default:Et(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Is(t,e){return hi(t,"POST","/v1/accounts:signInWithIdp",sn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QS="http://localhost";class ts extends Zc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ts(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Et("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Kc(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new ts(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Is(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Is(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Is(e,n)}buildRequest(){const e={requestUri:QS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ms(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XS(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ZS(t){const e=hr(dr(t)).link,n=e?hr(dr(e)).deep_link_id:null,s=hr(dr(t)).deep_link_id;return(s?hr(dr(s)).link:null)||s||n||e||t}class eu{constructor(e){var n,s,r,i,o,a;const l=hr(dr(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,h=XS((r=l.mode)!==null&&r!==void 0?r:null);j(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=ZS(e);try{return new eu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(){this.providerId=Hs.PROVIDER_ID}static credential(e,n){return Gr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=eu.parseLink(n);return j(s,"argument-error"),Gr._fromEmailAndCode(e,s.code,s.tenantId)}}Hs.PROVIDER_ID="password";Hs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Hs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class di extends km{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n extends di{constructor(){super("facebook.com")}static credential(e){return ts._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _n.credentialFromTaggedObject(e)}static credentialFromError(e){return _n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _n.credential(e.oauthAccessToken)}catch{return null}}}_n.FACEBOOK_SIGN_IN_METHOD="facebook.com";_n.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn extends di{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ts._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return vn.credential(n,s)}catch{return null}}}vn.GOOGLE_SIGN_IN_METHOD="google.com";vn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn extends di{constructor(){super("github.com")}static credential(e){return ts._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yn.credential(e.oauthAccessToken)}catch{return null}}}yn.GITHUB_SIGN_IN_METHOD="github.com";yn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends di{constructor(){super("twitter.com")}static credential(e,n){return ts._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return bn.credential(n,s)}catch{return null}}}bn.TWITTER_SIGN_IN_METHOD="twitter.com";bn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eT(t,e){return hi(t,"POST","/v1/accounts:signUp",sn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Gt._fromIdTokenResponse(e,s,r),o=td(s);return new ns({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=td(s);return new ns({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function td(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo extends Dn{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,vo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new vo(e,n,s,r)}}function Dm(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?vo._fromErrorAndOperation(t,i,e,s):i})}async function tT(t,e,n=!1){const s=await qr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ns._forOperation(t,"link",s)}/**
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
 */async function nT(t,e,n=!1){const{auth:s}=t;if(Nt(s.app))return Promise.reject(Jt(s));const r="reauthenticate";try{const i=await qr(t,Dm(s,r,e,t),n);j(i.idToken,s,"internal-error");const o=Qc(i.idToken);j(o,s,"internal-error");const{sub:a}=o;return j(t.uid===a,s,"user-mismatch"),ns._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Et(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xm(t,e,n=!1){if(Nt(t.app))return Promise.reject(Jt(t));const s="signIn",r=await Dm(t,s,e),i=await ns._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function sT(t,e){return xm(xn(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lm(t){const e=xn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function rT(t,e,n){const s=xn(t);await _o(s,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",KS)}async function iT(t,e,n){if(Nt(t.app))return Promise.reject(Jt(t));const s=xn(t),o=await _o(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",eT).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Lm(t),l}),a=await ns._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function oT(t,e,n){return Nt(t.app)?Promise.reject(Jt(t)):sT($e(t),Hs.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Lm(t),s})}async function nd(t,e){const n=$e(t),r={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()},{email:i}=await zS(n.auth,r);i!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sd(t,e){return $e(t).setPersistence(e)}function aT(t,e,n,s){return $e(t).onIdTokenChanged(e,n,s)}function lT(t,e,n){return $e(t).beforeAuthStateChanged(e,n)}const yo="__sak";/**
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
 */class Mm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(yo,"1"),this.storage.removeItem(yo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cT=1e3,uT=10;class Fm extends Mm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Tm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);TS()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,uT):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},cT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Fm.type="LOCAL";const Um=Fm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m extends Mm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}$m.type="SESSION";const Bm=$m;/**
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
 */function hT(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Jo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Jo(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await hT(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Jo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tu(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class dT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=tu("",20);r.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(){return window}function fT(t){xt().location.href=t}/**
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
 */function Hm(){return typeof xt().WorkerGlobalScope<"u"&&typeof xt().importScripts=="function"}async function pT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function gT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function mT(){return Hm()?self:null}/**
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
 */const Wm="firebaseLocalStorageDb",_T=1,bo="firebaseLocalStorage",Vm="fbase_key";class fi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Qo(t,e){return t.transaction([bo],e?"readwrite":"readonly").objectStore(bo)}function vT(){const t=indexedDB.deleteDatabase(Wm);return new fi(t).toPromise()}function Al(){const t=indexedDB.open(Wm,_T);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(bo,{keyPath:Vm})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(bo)?e(s):(s.close(),await vT(),e(await Al()))})})}async function rd(t,e,n){const s=Qo(t,!0).put({[Vm]:e,value:n});return new fi(s).toPromise()}async function yT(t,e){const n=Qo(t,!1).get(e),s=await new fi(n).toPromise();return s===void 0?null:s.value}function id(t,e){const n=Qo(t,!0).delete(e);return new fi(n).toPromise()}const bT=800,ET=3;class jm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Al(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>ET)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Hm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Jo._getInstance(mT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await pT(),!this.activeServiceWorker)return;this.sender=new dT(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||gT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Al();return await rd(e,yo,"1"),await id(e,yo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>rd(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>yT(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>id(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Qo(r,!1).getAll();return new fi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),bT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}jm.type="LOCAL";const wT=jm;new ui(3e4,6e4);/**
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
 */function CT(t,e){return e?zt(e):(j(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class nu extends Zc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Is(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Is(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Is(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function IT(t){return xm(t.auth,new nu(t),t.bypassAuthState)}function ST(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),nT(n,new nu(t),t.bypassAuthState)}async function TT(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),tT(n,new nu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return IT;case"linkViaPopup":case"linkViaRedirect":return TT;case"reauthViaPopup":case"reauthViaRedirect":return ST;default:Et(this.auth,"internal-error")}}resolve(e){Zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AT=new ui(2e3,1e4);class fs extends qm{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,fs.currentPopupAction&&fs.currentPopupAction.cancel(),fs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return j(e,this.auth,"internal-error"),e}async onExecution(){Zt(this.filter.length===1,"Popup operations only handle one event");const e=tu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Dt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Dt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Dt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,AT.get())};e()}}fs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RT="pendingRedirect",Ui=new Map;class PT extends qm{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Ui.get(this.auth._key());if(!e){try{const s=await OT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Ui.set(this.auth._key(),e)}return this.bypassAuthState||Ui.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function OT(t,e){const n=DT(e),s=kT(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function NT(t,e){Ui.set(t._key(),e)}function kT(t){return zt(t._redirectPersistence)}function DT(t){return Fi(RT,t.config.apiKey,t.name)}async function xT(t,e,n=!1){if(Nt(t.app))return Promise.reject(Jt(t));const s=xn(t),r=CT(s,e),o=await new PT(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LT=10*60*1e3;class MT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!FT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Gm(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Dt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=LT&&this.cachedEventUids.clear(),this.cachedEventUids.has(od(e))}saveEventToCache(e){this.cachedEventUids.add(od(e)),this.lastProcessedEventTime=Date.now()}}function od(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Gm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function FT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Gm(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UT(t,e={}){return rn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $T=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,BT=/^https?/;async function HT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await UT(t);for(const n of e)try{if(WT(n))return}catch{}Et(t,"unauthorized-domain")}function WT(t){const e=Il(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!BT.test(n))return!1;if($T.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const VT=new ui(3e4,6e4);function ad(){const t=xt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function jT(t){return new Promise((e,n)=>{var s,r,i;function o(){ad(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ad(),n(Dt(t,"network-request-failed"))},timeout:VT.get()})}if(!((r=(s=xt().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=xt().gapi)===null||i===void 0)&&i.load)o();else{const a=LS("iframefcb");return xt()[a]=()=>{gapi.load?o():n(Dt(t,"network-request-failed"))},Rm(`${xS()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw $i=null,e})}let $i=null;function qT(t){return $i=$i||jT(t),$i}/**
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
 */const GT=new ui(5e3,15e3),zT="__/auth/iframe",KT="emulator/auth/iframe",YT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},JT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function QT(t){const e=t.config;j(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Jc(e,KT):`https://${t.config.authDomain}/${zT}`,s={apiKey:e.apiKey,appName:t.name,v:Fs},r=JT.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Ms(s).slice(1)}`}async function XT(t){const e=await qT(t),n=xt().gapi;return j(n,t,"internal-error"),e.open({where:document.body,url:QT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:YT,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Dt(t,"network-request-failed"),a=xt().setTimeout(()=>{i(o)},GT.get());function l(){xt().clearTimeout(a),r(s)}s.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const ZT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},eA=500,tA=600,nA="_blank",sA="http://localhost";class ld{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function rA(t,e,n,s=eA,r=tA){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},ZT),{width:s.toString(),height:r.toString(),top:i,left:o}),c=qe().toLowerCase();n&&(a=Em(c)?nA:n),ym(c)&&(e=e||sA,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[p,m])=>`${d}${p}=${m},`,"");if(SS(c)&&a!=="_self")return iA(e||"",a),new ld(null);const h=window.open(e||"",a,u);j(h,t,"popup-blocked");try{h.focus()}catch{}return new ld(h)}function iA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const oA="__/auth/handler",aA="emulator/auth/handler",lA=encodeURIComponent("fac");async function cd(t,e,n,s,r,i){j(t.config.authDomain,t,"auth-domain-config-required"),j(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Fs,eventId:r};if(e instanceof km){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ol(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries({}))o[u]=h}if(e instanceof di){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${lA}=${encodeURIComponent(l)}`:"";return`${cA(t)}?${Ms(a).slice(1)}${c}`}function cA({config:t}){return t.emulator?Jc(t,aA):`https://${t.authDomain}/${oA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const La="webStorageSupport";class uA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Bm,this._completeRedirectFn=xT,this._overrideRedirectResult=NT}async _openPopup(e,n,s,r){var i;Zt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await cd(e,n,s,Il(),r);return rA(e,o,tu())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await cd(e,n,s,Il(),r);return fT(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(Zt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await XT(e),s=new MT(e);return n.register("authEvent",r=>(j(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(La,{type:La},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[La];o!==void 0&&n(!!o),Et(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=HT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Tm()||bm()||Xc()}}const hA=uA;var ud="@firebase/auth",hd="1.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function pA(t){Rs(new Qn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;j(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Am(t)},c=new NS(s,r,i,l);return HS(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Rs(new Qn("auth-internal",e=>{const n=xn(e.getProvider("auth").getImmediate());return(s=>new dA(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),In(ud,hd,fA(t)),In(ud,hd,"esm2017")}/**
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
 */const gA=5*60,mA=Lp("authIdTokenMaxAge")||gA;let dd=null;const _A=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>mA)return;const r=n==null?void 0:n.token;dd!==r&&(dd=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function zr(t=Wp()){const e=gc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=BS(t,{popupRedirectResolver:hA,persistence:[wT,Um,Bm]}),s=Lp("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=_A(i.toString());lT(n,o,()=>o(n.currentUser)),aT(n,a=>o(a))}}const r=Dp("auth");return r&&WS(n,`http://${r}`),n}function vA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}kS({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Dt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",vA().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});pA("Browser");var yA="firebase",bA="11.0.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */In(yA,bA,"app");const EA={apiKey:"AIzaSyDU95egjb7rapaUJuVJYu0ZeSbP0OLaeCE",authDomain:"autolearn-members.asia-southeast1.firebaseapp.com",projectId:"autolearn-members",storageBucket:"autolearn-members.appspot.com",messagingSenderId:"535565819374",appId:"1:535565819374:web:ccfe472f513439f3a002ff",measurementId:"G-NTHZSSX71G",databaseURL:"https://autolearn-members-default-rtdb.asia-southeast1.firebasedatabase.app/"},su=Hp(EA);zr(su);const pi=sS(su),wA=ci(pi,"projects"),CA=ci(pi,"supervisors"),IA=ci(pi,"users"),VF=ci(pi,"changelogs");var Ai=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function SA(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function TA(t,e,n){var s;return n(t,function(r,i,o){if(e(r,i,o))return s=i,!1}),s}var AA=TA;function RA(t){return function(e,n,s){for(var r=-1,i=Object(e),o=s(e),a=o.length;a--;){var l=o[t?a:++r];if(n(i[l],l,i)===!1)break}return e}}var PA=RA,OA=PA,NA=OA(),kA=NA;function DA(t,e){for(var n=-1,s=Array(t);++n<t;)s[n]=e(n);return s}var xA=DA,LA=typeof Ai=="object"&&Ai&&Ai.Object===Object&&Ai,zm=LA,MA=zm,FA=typeof self=="object"&&self&&self.Object===Object&&self,UA=MA||FA||Function("return this")(),on=UA,$A=on,BA=$A.Symbol,Xo=BA,fd=Xo,Km=Object.prototype,HA=Km.hasOwnProperty,WA=Km.toString,or=fd?fd.toStringTag:void 0;function VA(t){var e=HA.call(t,or),n=t[or];try{t[or]=void 0;var s=!0}catch{}var r=WA.call(t);return s&&(e?t[or]=n:delete t[or]),r}var jA=VA,qA=Object.prototype,GA=qA.toString;function zA(t){return GA.call(t)}var KA=zA,pd=Xo,YA=jA,JA=KA,QA="[object Null]",XA="[object Undefined]",gd=pd?pd.toStringTag:void 0;function ZA(t){return t==null?t===void 0?XA:QA:gd&&gd in Object(t)?YA(t):JA(t)}var gi=ZA;function eR(t){return t!=null&&typeof t=="object"}var mi=eR,tR=gi,nR=mi,sR="[object Arguments]";function rR(t){return nR(t)&&tR(t)==sR}var iR=rR,md=iR,oR=mi,Ym=Object.prototype,aR=Ym.hasOwnProperty,lR=Ym.propertyIsEnumerable,cR=md(function(){return arguments}())?md:function(t){return oR(t)&&aR.call(t,"callee")&&!lR.call(t,"callee")},Jm=cR,uR=Array.isArray,Ln=uR,Eo={exports:{}};function hR(){return!1}var dR=hR;Eo.exports;(function(t,e){var n=on,s=dR,r=e&&!e.nodeType&&e,i=r&&!0&&t&&!t.nodeType&&t,o=i&&i.exports===r,a=o?n.Buffer:void 0,l=a?a.isBuffer:void 0,c=l||s;t.exports=c})(Eo,Eo.exports);var Qm=Eo.exports,fR=9007199254740991,pR=/^(?:0|[1-9]\d*)$/;function gR(t,e){var n=typeof t;return e=e??fR,!!e&&(n=="number"||n!="symbol"&&pR.test(t))&&t>-1&&t%1==0&&t<e}var Xm=gR,mR=9007199254740991;function _R(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=mR}var ru=_R,vR=gi,yR=ru,bR=mi,ER="[object Arguments]",wR="[object Array]",CR="[object Boolean]",IR="[object Date]",SR="[object Error]",TR="[object Function]",AR="[object Map]",RR="[object Number]",PR="[object Object]",OR="[object RegExp]",NR="[object Set]",kR="[object String]",DR="[object WeakMap]",xR="[object ArrayBuffer]",LR="[object DataView]",MR="[object Float32Array]",FR="[object Float64Array]",UR="[object Int8Array]",$R="[object Int16Array]",BR="[object Int32Array]",HR="[object Uint8Array]",WR="[object Uint8ClampedArray]",VR="[object Uint16Array]",jR="[object Uint32Array]",ge={};ge[MR]=ge[FR]=ge[UR]=ge[$R]=ge[BR]=ge[HR]=ge[WR]=ge[VR]=ge[jR]=!0;ge[ER]=ge[wR]=ge[xR]=ge[CR]=ge[LR]=ge[IR]=ge[SR]=ge[TR]=ge[AR]=ge[RR]=ge[PR]=ge[OR]=ge[NR]=ge[kR]=ge[DR]=!1;function qR(t){return bR(t)&&yR(t.length)&&!!ge[vR(t)]}var GR=qR;function zR(t){return function(e){return t(e)}}var KR=zR,wo={exports:{}};wo.exports;(function(t,e){var n=zm,s=e&&!e.nodeType&&e,r=s&&!0&&t&&!t.nodeType&&t,i=r&&r.exports===s,o=i&&n.process,a=function(){try{var l=r&&r.require&&r.require("util").types;return l||o&&o.binding&&o.binding("util")}catch{}}();t.exports=a})(wo,wo.exports);var YR=wo.exports,JR=GR,QR=KR,_d=YR,vd=_d&&_d.isTypedArray,XR=vd?QR(vd):JR,Zm=XR,ZR=xA,e0=Jm,t0=Ln,n0=Qm,s0=Xm,r0=Zm,i0=Object.prototype,o0=i0.hasOwnProperty;function a0(t,e){var n=t0(t),s=!n&&e0(t),r=!n&&!s&&n0(t),i=!n&&!s&&!r&&r0(t),o=n||s||r||i,a=o?ZR(t.length,String):[],l=a.length;for(var c in t)(e||o0.call(t,c))&&!(o&&(c=="length"||r&&(c=="offset"||c=="parent")||i&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||s0(c,l)))&&a.push(c);return a}var l0=a0,c0=Object.prototype;function u0(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||c0;return t===n}var h0=u0;function d0(t,e){return function(n){return t(e(n))}}var f0=d0,p0=f0,g0=p0(Object.keys,Object),m0=g0,_0=h0,v0=m0,y0=Object.prototype,b0=y0.hasOwnProperty;function E0(t){if(!_0(t))return v0(t);var e=[];for(var n in Object(t))b0.call(t,n)&&n!="constructor"&&e.push(n);return e}var w0=E0;function C0(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var iu=C0,I0=gi,S0=iu,T0="[object AsyncFunction]",A0="[object Function]",R0="[object GeneratorFunction]",P0="[object Proxy]";function O0(t){if(!S0(t))return!1;var e=I0(t);return e==A0||e==R0||e==T0||e==P0}var e_=O0,N0=e_,k0=ru;function D0(t){return t!=null&&k0(t.length)&&!N0(t)}var x0=D0,L0=l0,M0=w0,F0=x0;function U0(t){return F0(t)?L0(t):M0(t)}var ou=U0,$0=kA,B0=ou;function H0(t,e){return t&&$0(t,e,B0)}var W0=H0;function V0(){this.__data__=[],this.size=0}var j0=V0;function q0(t,e){return t===e||t!==t&&e!==e}var t_=q0,G0=t_;function z0(t,e){for(var n=t.length;n--;)if(G0(t[n][0],e))return n;return-1}var Zo=z0,K0=Zo,Y0=Array.prototype,J0=Y0.splice;function Q0(t){var e=this.__data__,n=K0(e,t);if(n<0)return!1;var s=e.length-1;return n==s?e.pop():J0.call(e,n,1),--this.size,!0}var X0=Q0,Z0=Zo;function eP(t){var e=this.__data__,n=Z0(e,t);return n<0?void 0:e[n][1]}var tP=eP,nP=Zo;function sP(t){return nP(this.__data__,t)>-1}var rP=sP,iP=Zo;function oP(t,e){var n=this.__data__,s=iP(n,t);return s<0?(++this.size,n.push([t,e])):n[s][1]=e,this}var aP=oP,lP=j0,cP=X0,uP=tP,hP=rP,dP=aP;function Ws(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var s=t[e];this.set(s[0],s[1])}}Ws.prototype.clear=lP;Ws.prototype.delete=cP;Ws.prototype.get=uP;Ws.prototype.has=hP;Ws.prototype.set=dP;var ea=Ws,fP=ea;function pP(){this.__data__=new fP,this.size=0}var gP=pP;function mP(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}var _P=mP;function vP(t){return this.__data__.get(t)}var yP=vP;function bP(t){return this.__data__.has(t)}var EP=bP,wP=on,CP=wP["__core-js_shared__"],IP=CP,Ma=IP,yd=function(){var t=/[^.]+$/.exec(Ma&&Ma.keys&&Ma.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function SP(t){return!!yd&&yd in t}var TP=SP,AP=Function.prototype,RP=AP.toString;function PP(t){if(t!=null){try{return RP.call(t)}catch{}try{return t+""}catch{}}return""}var n_=PP,OP=e_,NP=TP,kP=iu,DP=n_,xP=/[\\^$.*+?()[\]{}|]/g,LP=/^\[object .+?Constructor\]$/,MP=Function.prototype,FP=Object.prototype,UP=MP.toString,$P=FP.hasOwnProperty,BP=RegExp("^"+UP.call($P).replace(xP,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function HP(t){if(!kP(t)||NP(t))return!1;var e=OP(t)?BP:LP;return e.test(DP(t))}var WP=HP;function VP(t,e){return t==null?void 0:t[e]}var jP=VP,qP=WP,GP=jP;function zP(t,e){var n=GP(t,e);return qP(n)?n:void 0}var Vs=zP,KP=Vs,YP=on,JP=KP(YP,"Map"),au=JP,QP=Vs,XP=QP(Object,"create"),ta=XP,bd=ta;function ZP(){this.__data__=bd?bd(null):{},this.size=0}var eO=ZP;function tO(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var nO=tO,sO=ta,rO="__lodash_hash_undefined__",iO=Object.prototype,oO=iO.hasOwnProperty;function aO(t){var e=this.__data__;if(sO){var n=e[t];return n===rO?void 0:n}return oO.call(e,t)?e[t]:void 0}var lO=aO,cO=ta,uO=Object.prototype,hO=uO.hasOwnProperty;function dO(t){var e=this.__data__;return cO?e[t]!==void 0:hO.call(e,t)}var fO=dO,pO=ta,gO="__lodash_hash_undefined__";function mO(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=pO&&e===void 0?gO:e,this}var _O=mO,vO=eO,yO=nO,bO=lO,EO=fO,wO=_O;function js(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var s=t[e];this.set(s[0],s[1])}}js.prototype.clear=vO;js.prototype.delete=yO;js.prototype.get=bO;js.prototype.has=EO;js.prototype.set=wO;var CO=js,Ed=CO,IO=ea,SO=au;function TO(){this.size=0,this.__data__={hash:new Ed,map:new(SO||IO),string:new Ed}}var AO=TO;function RO(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}var PO=RO,OO=PO;function NO(t,e){var n=t.__data__;return OO(e)?n[typeof e=="string"?"string":"hash"]:n.map}var na=NO,kO=na;function DO(t){var e=kO(this,t).delete(t);return this.size-=e?1:0,e}var xO=DO,LO=na;function MO(t){return LO(this,t).get(t)}var FO=MO,UO=na;function $O(t){return UO(this,t).has(t)}var BO=$O,HO=na;function WO(t,e){var n=HO(this,t),s=n.size;return n.set(t,e),this.size+=n.size==s?0:1,this}var VO=WO,jO=AO,qO=xO,GO=FO,zO=BO,KO=VO;function qs(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var s=t[e];this.set(s[0],s[1])}}qs.prototype.clear=jO;qs.prototype.delete=qO;qs.prototype.get=GO;qs.prototype.has=zO;qs.prototype.set=KO;var lu=qs,YO=ea,JO=au,QO=lu,XO=200;function ZO(t,e){var n=this.__data__;if(n instanceof YO){var s=n.__data__;if(!JO||s.length<XO-1)return s.push([t,e]),this.size=++n.size,this;n=this.__data__=new QO(s)}return n.set(t,e),this.size=n.size,this}var eN=ZO,tN=ea,nN=gP,sN=_P,rN=yP,iN=EP,oN=eN;function Gs(t){var e=this.__data__=new tN(t);this.size=e.size}Gs.prototype.clear=nN;Gs.prototype.delete=sN;Gs.prototype.get=rN;Gs.prototype.has=iN;Gs.prototype.set=oN;var s_=Gs,aN="__lodash_hash_undefined__";function lN(t){return this.__data__.set(t,aN),this}var cN=lN;function uN(t){return this.__data__.has(t)}var hN=uN,dN=lu,fN=cN,pN=hN;function Co(t){var e=-1,n=t==null?0:t.length;for(this.__data__=new dN;++e<n;)this.add(t[e])}Co.prototype.add=Co.prototype.push=fN;Co.prototype.has=pN;var gN=Co;function mN(t,e){for(var n=-1,s=t==null?0:t.length;++n<s;)if(e(t[n],n,t))return!0;return!1}var _N=mN;function vN(t,e){return t.has(e)}var yN=vN,bN=gN,EN=_N,wN=yN,CN=1,IN=2;function SN(t,e,n,s,r,i){var o=n&CN,a=t.length,l=e.length;if(a!=l&&!(o&&l>a))return!1;var c=i.get(t),u=i.get(e);if(c&&u)return c==e&&u==t;var h=-1,d=!0,p=n&IN?new bN:void 0;for(i.set(t,e),i.set(e,t);++h<a;){var m=t[h],_=e[h];if(s)var b=o?s(_,m,h,e,t,i):s(m,_,h,t,e,i);if(b!==void 0){if(b)continue;d=!1;break}if(p){if(!EN(e,function(T,A){if(!wN(p,A)&&(m===T||r(m,T,n,s,i)))return p.push(A)})){d=!1;break}}else if(!(m===_||r(m,_,n,s,i))){d=!1;break}}return i.delete(t),i.delete(e),d}var r_=SN,TN=on,AN=TN.Uint8Array,RN=AN;function PN(t){var e=-1,n=Array(t.size);return t.forEach(function(s,r){n[++e]=[r,s]}),n}var ON=PN;function NN(t){var e=-1,n=Array(t.size);return t.forEach(function(s){n[++e]=s}),n}var kN=NN,wd=Xo,Cd=RN,DN=t_,xN=r_,LN=ON,MN=kN,FN=1,UN=2,$N="[object Boolean]",BN="[object Date]",HN="[object Error]",WN="[object Map]",VN="[object Number]",jN="[object RegExp]",qN="[object Set]",GN="[object String]",zN="[object Symbol]",KN="[object ArrayBuffer]",YN="[object DataView]",Id=wd?wd.prototype:void 0,Fa=Id?Id.valueOf:void 0;function JN(t,e,n,s,r,i,o){switch(n){case YN:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case KN:return!(t.byteLength!=e.byteLength||!i(new Cd(t),new Cd(e)));case $N:case BN:case VN:return DN(+t,+e);case HN:return t.name==e.name&&t.message==e.message;case jN:case GN:return t==e+"";case WN:var a=LN;case qN:var l=s&FN;if(a||(a=MN),t.size!=e.size&&!l)return!1;var c=o.get(t);if(c)return c==e;s|=UN,o.set(t,e);var u=xN(a(t),a(e),s,r,i,o);return o.delete(t),u;case zN:if(Fa)return Fa.call(t)==Fa.call(e)}return!1}var QN=JN;function XN(t,e){for(var n=-1,s=e.length,r=t.length;++n<s;)t[r+n]=e[n];return t}var ZN=XN,ek=ZN,tk=Ln;function nk(t,e,n){var s=e(t);return tk(t)?s:ek(s,n(t))}var sk=nk;function rk(t,e){for(var n=-1,s=t==null?0:t.length,r=0,i=[];++n<s;){var o=t[n];e(o,n,t)&&(i[r++]=o)}return i}var ik=rk;function ok(){return[]}var ak=ok,lk=ik,ck=ak,uk=Object.prototype,hk=uk.propertyIsEnumerable,Sd=Object.getOwnPropertySymbols,dk=Sd?function(t){return t==null?[]:(t=Object(t),lk(Sd(t),function(e){return hk.call(t,e)}))}:ck,fk=dk,pk=sk,gk=fk,mk=ou;function _k(t){return pk(t,mk,gk)}var vk=_k,Td=vk,yk=1,bk=Object.prototype,Ek=bk.hasOwnProperty;function wk(t,e,n,s,r,i){var o=n&yk,a=Td(t),l=a.length,c=Td(e),u=c.length;if(l!=u&&!o)return!1;for(var h=l;h--;){var d=a[h];if(!(o?d in e:Ek.call(e,d)))return!1}var p=i.get(t),m=i.get(e);if(p&&m)return p==e&&m==t;var _=!0;i.set(t,e),i.set(e,t);for(var b=o;++h<l;){d=a[h];var T=t[d],A=e[d];if(s)var O=o?s(A,T,d,e,t,i):s(T,A,d,t,e,i);if(!(O===void 0?T===A||r(T,A,n,s,i):O)){_=!1;break}b||(b=d=="constructor")}if(_&&!b){var D=t.constructor,B=e.constructor;D!=B&&"constructor"in t&&"constructor"in e&&!(typeof D=="function"&&D instanceof D&&typeof B=="function"&&B instanceof B)&&(_=!1)}return i.delete(t),i.delete(e),_}var Ck=wk,Ik=Vs,Sk=on,Tk=Ik(Sk,"DataView"),Ak=Tk,Rk=Vs,Pk=on,Ok=Rk(Pk,"Promise"),Nk=Ok,kk=Vs,Dk=on,xk=kk(Dk,"Set"),Lk=xk,Mk=Vs,Fk=on,Uk=Mk(Fk,"WeakMap"),$k=Uk,Rl=Ak,Pl=au,Ol=Nk,Nl=Lk,kl=$k,i_=gi,zs=n_,Ad="[object Map]",Bk="[object Object]",Rd="[object Promise]",Pd="[object Set]",Od="[object WeakMap]",Nd="[object DataView]",Hk=zs(Rl),Wk=zs(Pl),Vk=zs(Ol),jk=zs(Nl),qk=zs(kl),Wn=i_;(Rl&&Wn(new Rl(new ArrayBuffer(1)))!=Nd||Pl&&Wn(new Pl)!=Ad||Ol&&Wn(Ol.resolve())!=Rd||Nl&&Wn(new Nl)!=Pd||kl&&Wn(new kl)!=Od)&&(Wn=function(t){var e=i_(t),n=e==Bk?t.constructor:void 0,s=n?zs(n):"";if(s)switch(s){case Hk:return Nd;case Wk:return Ad;case Vk:return Rd;case jk:return Pd;case qk:return Od}return e});var Gk=Wn,Ua=s_,zk=r_,Kk=QN,Yk=Ck,kd=Gk,Dd=Ln,xd=Qm,Jk=Zm,Qk=1,Ld="[object Arguments]",Md="[object Array]",Ri="[object Object]",Xk=Object.prototype,Fd=Xk.hasOwnProperty;function Zk(t,e,n,s,r,i){var o=Dd(t),a=Dd(e),l=o?Md:kd(t),c=a?Md:kd(e);l=l==Ld?Ri:l,c=c==Ld?Ri:c;var u=l==Ri,h=c==Ri,d=l==c;if(d&&xd(t)){if(!xd(e))return!1;o=!0,u=!1}if(d&&!u)return i||(i=new Ua),o||Jk(t)?zk(t,e,n,s,r,i):Kk(t,e,l,n,s,r,i);if(!(n&Qk)){var p=u&&Fd.call(t,"__wrapped__"),m=h&&Fd.call(e,"__wrapped__");if(p||m){var _=p?t.value():t,b=m?e.value():e;return i||(i=new Ua),r(_,b,n,s,i)}}return d?(i||(i=new Ua),Yk(t,e,n,s,r,i)):!1}var e1=Zk,t1=e1,Ud=mi;function o_(t,e,n,s,r){return t===e?!0:t==null||e==null||!Ud(t)&&!Ud(e)?t!==t&&e!==e:t1(t,e,n,s,o_,r)}var a_=o_,n1=s_,s1=a_,r1=1,i1=2;function o1(t,e,n,s){var r=n.length,i=r,o=!s;if(t==null)return!i;for(t=Object(t);r--;){var a=n[r];if(o&&a[2]?a[1]!==t[a[0]]:!(a[0]in t))return!1}for(;++r<i;){a=n[r];var l=a[0],c=t[l],u=a[1];if(o&&a[2]){if(c===void 0&&!(l in t))return!1}else{var h=new n1;if(s)var d=s(c,u,l,t,e,h);if(!(d===void 0?s1(u,c,r1|i1,s,h):d))return!1}}return!0}var a1=o1,l1=iu;function c1(t){return t===t&&!l1(t)}var l_=c1,u1=l_,h1=ou;function d1(t){for(var e=h1(t),n=e.length;n--;){var s=e[n],r=t[s];e[n]=[s,r,u1(r)]}return e}var f1=d1;function p1(t,e){return function(n){return n==null?!1:n[t]===e&&(e!==void 0||t in Object(n))}}var c_=p1,g1=a1,m1=f1,_1=c_;function v1(t){var e=m1(t);return e.length==1&&e[0][2]?_1(e[0][0],e[0][1]):function(n){return n===t||g1(n,t,e)}}var y1=v1,b1=gi,E1=mi,w1="[object Symbol]";function C1(t){return typeof t=="symbol"||E1(t)&&b1(t)==w1}var cu=C1,I1=Ln,S1=cu,T1=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,A1=/^\w*$/;function R1(t,e){if(I1(t))return!1;var n=typeof t;return n=="number"||n=="symbol"||n=="boolean"||t==null||S1(t)?!0:A1.test(t)||!T1.test(t)||e!=null&&t in Object(e)}var uu=R1,u_=lu,P1="Expected a function";function hu(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(P1);var n=function(){var s=arguments,r=e?e.apply(this,s):s[0],i=n.cache;if(i.has(r))return i.get(r);var o=t.apply(this,s);return n.cache=i.set(r,o)||i,o};return n.cache=new(hu.Cache||u_),n}hu.Cache=u_;var O1=hu,N1=O1,k1=500;function D1(t){var e=N1(t,function(s){return n.size===k1&&n.clear(),s}),n=e.cache;return e}var x1=D1,L1=x1,M1=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,F1=/\\(\\)?/g,U1=L1(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(M1,function(n,s,r,i){e.push(r?i.replace(F1,"$1"):s||n)}),e}),$1=U1;function B1(t,e){for(var n=-1,s=t==null?0:t.length,r=Array(s);++n<s;)r[n]=e(t[n],n,t);return r}var H1=B1,$d=Xo,W1=H1,V1=Ln,j1=cu,q1=1/0,Bd=$d?$d.prototype:void 0,Hd=Bd?Bd.toString:void 0;function h_(t){if(typeof t=="string")return t;if(V1(t))return W1(t,h_)+"";if(j1(t))return Hd?Hd.call(t):"";var e=t+"";return e=="0"&&1/t==-q1?"-0":e}var G1=h_,z1=G1;function K1(t){return t==null?"":z1(t)}var Y1=K1,J1=Ln,Q1=uu,X1=$1,Z1=Y1;function eD(t,e){return J1(t)?t:Q1(t,e)?[t]:X1(Z1(t))}var d_=eD,tD=cu,nD=1/0;function sD(t){if(typeof t=="string"||tD(t))return t;var e=t+"";return e=="0"&&1/t==-nD?"-0":e}var sa=sD,rD=d_,iD=sa;function oD(t,e){e=rD(e,t);for(var n=0,s=e.length;t!=null&&n<s;)t=t[iD(e[n++])];return n&&n==s?t:void 0}var f_=oD,aD=f_;function lD(t,e,n){var s=t==null?void 0:aD(t,e);return s===void 0?n:s}var cD=lD;function uD(t,e){return t!=null&&e in Object(t)}var hD=uD,dD=d_,fD=Jm,pD=Ln,gD=Xm,mD=ru,_D=sa;function vD(t,e,n){e=dD(e,t);for(var s=-1,r=e.length,i=!1;++s<r;){var o=_D(e[s]);if(!(i=t!=null&&n(t,o)))break;t=t[o]}return i||++s!=r?i:(r=t==null?0:t.length,!!r&&mD(r)&&gD(o,r)&&(pD(t)||fD(t)))}var yD=vD,bD=hD,ED=yD;function wD(t,e){return t!=null&&ED(t,e,bD)}var CD=wD,ID=a_,SD=cD,TD=CD,AD=uu,RD=l_,PD=c_,OD=sa,ND=1,kD=2;function DD(t,e){return AD(t)&&RD(e)?PD(OD(t),e):function(n){var s=SD(n,t);return s===void 0&&s===e?TD(n,t):ID(e,s,ND|kD)}}var xD=DD;function LD(t){return t}var MD=LD;function FD(t){return function(e){return e==null?void 0:e[t]}}var UD=FD,$D=f_;function BD(t){return function(e){return $D(e,t)}}var HD=BD,WD=UD,VD=HD,jD=uu,qD=sa;function GD(t){return jD(t)?WD(qD(t)):VD(t)}var zD=GD,KD=y1,YD=xD,JD=MD,QD=Ln,XD=zD;function ZD(t){return typeof t=="function"?t:t==null?JD:typeof t=="object"?QD(t)?YD(t[0],t[1]):KD(t):XD(t)}var ex=ZD,tx=AA,nx=W0,sx=ex;function rx(t,e){return tx(t,sx(e),nx)}var ix=rx,ox=function(){function t(e,n){for(var s=0;s<n.length;s++){var r=n[s];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,s){return n&&t(e.prototype,n),s&&t(e,s),e}}();function ax(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var lx=ix,cx={messenger:/\bFB[\w_]+\/(Messenger|MESSENGER)/,facebook:/\bFB[\w_]+\//,twitter:/\bTwitter/i,line:/\bLine\//i,wechat:/\bMicroMessenger\//i,puffin:/\bPuffin/i,miui:/\bMiuiBrowser\//i,instagram:/\bInstagram/i,chrome:/\bCrMo\b|CriOS|Android.*Chrome\/[.0-9]* (Mobile)?/,safari:/Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari/,ie:/IEMobile|MSIEMobile/,firefox:/fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS/},ux=function(){function t(e){ax(this,t),this.ua="",this.ua=e}return ox(t,[{key:"browser",get:function(){var n=this;return lx(cx,function(s){return s.test(n.ua)})||"other"}},{key:"isMobile",get:function(){return/(iPad|iPhone|Android|Mobile)/i.test(this.ua)||!1}},{key:"isDesktop",get:function(){return!this.isMobile}},{key:"isInApp",get:function(){var n=["WebView","(iPhone|iPod|iPad)(?!.*Safari/)","Android.*(wv|.0.0.0)"],s=new RegExp("("+n.join("|")+")","ig");return!!this.ua.match(s)}}]),t}(),hx=ux;const dx=SA(hx);function p_(t,e){return function(){return t.apply(e,arguments)}}const{toString:fx}=Object.prototype,{getPrototypeOf:du}=Object,ra=(t=>e=>{const n=fx.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Ct=t=>(t=t.toLowerCase(),e=>ra(e)===t),ia=t=>e=>typeof e===t,{isArray:Ks}=Array,Kr=ia("undefined");function px(t){return t!==null&&!Kr(t)&&t.constructor!==null&&!Kr(t.constructor)&&it(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const g_=Ct("ArrayBuffer");function gx(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&g_(t.buffer),e}const mx=ia("string"),it=ia("function"),m_=ia("number"),oa=t=>t!==null&&typeof t=="object",_x=t=>t===!0||t===!1,Bi=t=>{if(ra(t)!=="object")return!1;const e=du(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},vx=Ct("Date"),yx=Ct("File"),bx=Ct("Blob"),Ex=Ct("FileList"),wx=t=>oa(t)&&it(t.pipe),Cx=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||it(t.append)&&((e=ra(t))==="formdata"||e==="object"&&it(t.toString)&&t.toString()==="[object FormData]"))},Ix=Ct("URLSearchParams"),[Sx,Tx,Ax,Rx]=["ReadableStream","Request","Response","Headers"].map(Ct),Px=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function _i(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let s,r;if(typeof t!="object"&&(t=[t]),Ks(t))for(s=0,r=t.length;s<r;s++)e.call(null,t[s],s,t);else{const i=n?Object.getOwnPropertyNames(t):Object.keys(t),o=i.length;let a;for(s=0;s<o;s++)a=i[s],e.call(null,t[a],a,t)}}function __(t,e){e=e.toLowerCase();const n=Object.keys(t);let s=n.length,r;for(;s-- >0;)if(r=n[s],e===r.toLowerCase())return r;return null}const qn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,v_=t=>!Kr(t)&&t!==qn;function Dl(){const{caseless:t}=v_(this)&&this||{},e={},n=(s,r)=>{const i=t&&__(e,r)||r;Bi(e[i])&&Bi(s)?e[i]=Dl(e[i],s):Bi(s)?e[i]=Dl({},s):Ks(s)?e[i]=s.slice():e[i]=s};for(let s=0,r=arguments.length;s<r;s++)arguments[s]&&_i(arguments[s],n);return e}const Ox=(t,e,n,{allOwnKeys:s}={})=>(_i(e,(r,i)=>{n&&it(r)?t[i]=p_(r,n):t[i]=r},{allOwnKeys:s}),t),Nx=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),kx=(t,e,n,s)=>{t.prototype=Object.create(e.prototype,s),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},Dx=(t,e,n,s)=>{let r,i,o;const a={};if(e=e||{},t==null)return e;do{for(r=Object.getOwnPropertyNames(t),i=r.length;i-- >0;)o=r[i],(!s||s(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&du(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},xx=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const s=t.indexOf(e,n);return s!==-1&&s===n},Lx=t=>{if(!t)return null;if(Ks(t))return t;let e=t.length;if(!m_(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},Mx=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&du(Uint8Array)),Fx=(t,e)=>{const s=(t&&t[Symbol.iterator]).call(t);let r;for(;(r=s.next())&&!r.done;){const i=r.value;e.call(t,i[0],i[1])}},Ux=(t,e)=>{let n;const s=[];for(;(n=t.exec(e))!==null;)s.push(n);return s},$x=Ct("HTMLFormElement"),Bx=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,s,r){return s.toUpperCase()+r}),Wd=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),Hx=Ct("RegExp"),y_=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),s={};_i(n,(r,i)=>{let o;(o=e(r,i,t))!==!1&&(s[i]=o||r)}),Object.defineProperties(t,s)},Wx=t=>{y_(t,(e,n)=>{if(it(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const s=t[n];if(it(s)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Vx=(t,e)=>{const n={},s=r=>{r.forEach(i=>{n[i]=!0})};return Ks(t)?s(t):s(String(t).split(e)),n},jx=()=>{},qx=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e,$a="abcdefghijklmnopqrstuvwxyz",Vd="0123456789",b_={DIGIT:Vd,ALPHA:$a,ALPHA_DIGIT:$a+$a.toUpperCase()+Vd},Gx=(t=16,e=b_.ALPHA_DIGIT)=>{let n="";const{length:s}=e;for(;t--;)n+=e[Math.random()*s|0];return n};function zx(t){return!!(t&&it(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const Kx=t=>{const e=new Array(10),n=(s,r)=>{if(oa(s)){if(e.indexOf(s)>=0)return;if(!("toJSON"in s)){e[r]=s;const i=Ks(s)?[]:{};return _i(s,(o,a)=>{const l=n(o,r+1);!Kr(l)&&(i[a]=l)}),e[r]=void 0,i}}return s};return n(t,0)},Yx=Ct("AsyncFunction"),Jx=t=>t&&(oa(t)||it(t))&&it(t.then)&&it(t.catch),E_=((t,e)=>t?setImmediate:e?((n,s)=>(qn.addEventListener("message",({source:r,data:i})=>{r===qn&&i===n&&s.length&&s.shift()()},!1),r=>{s.push(r),qn.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",it(qn.postMessage)),Qx=typeof queueMicrotask<"u"?queueMicrotask.bind(qn):typeof process<"u"&&process.nextTick||E_,y={isArray:Ks,isArrayBuffer:g_,isBuffer:px,isFormData:Cx,isArrayBufferView:gx,isString:mx,isNumber:m_,isBoolean:_x,isObject:oa,isPlainObject:Bi,isReadableStream:Sx,isRequest:Tx,isResponse:Ax,isHeaders:Rx,isUndefined:Kr,isDate:vx,isFile:yx,isBlob:bx,isRegExp:Hx,isFunction:it,isStream:wx,isURLSearchParams:Ix,isTypedArray:Mx,isFileList:Ex,forEach:_i,merge:Dl,extend:Ox,trim:Px,stripBOM:Nx,inherits:kx,toFlatObject:Dx,kindOf:ra,kindOfTest:Ct,endsWith:xx,toArray:Lx,forEachEntry:Fx,matchAll:Ux,isHTMLForm:$x,hasOwnProperty:Wd,hasOwnProp:Wd,reduceDescriptors:y_,freezeMethods:Wx,toObjectSet:Vx,toCamelCase:Bx,noop:jx,toFiniteNumber:qx,findKey:__,global:qn,isContextDefined:v_,ALPHABET:b_,generateString:Gx,isSpecCompliantForm:zx,toJSONObject:Kx,isAsyncFn:Yx,isThenable:Jx,setImmediate:E_,asap:Qx};function z(t,e,n,s,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),s&&(this.request=s),r&&(this.response=r,this.status=r.status?r.status:null)}y.inherits(z,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:y.toJSONObject(this.config),code:this.code,status:this.status}}});const w_=z.prototype,C_={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{C_[t]={value:t}});Object.defineProperties(z,C_);Object.defineProperty(w_,"isAxiosError",{value:!0});z.from=(t,e,n,s,r,i)=>{const o=Object.create(w_);return y.toFlatObject(t,o,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),z.call(o,t.message,e,n,s,r),o.cause=t,o.name=t.name,i&&Object.assign(o,i),o};const Xx=null;function xl(t){return y.isPlainObject(t)||y.isArray(t)}function I_(t){return y.endsWith(t,"[]")?t.slice(0,-2):t}function jd(t,e,n){return t?t.concat(e).map(function(r,i){return r=I_(r),!n&&i?"["+r+"]":r}).join(n?".":""):e}function Zx(t){return y.isArray(t)&&!t.some(xl)}const eL=y.toFlatObject(y,{},null,function(e){return/^is[A-Z]/.test(e)});function aa(t,e,n){if(!y.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=y.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(_,b){return!y.isUndefined(b[_])});const s=n.metaTokens,r=n.visitor||u,i=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&y.isSpecCompliantForm(e);if(!y.isFunction(r))throw new TypeError("visitor must be a function");function c(m){if(m===null)return"";if(y.isDate(m))return m.toISOString();if(!l&&y.isBlob(m))throw new z("Blob is not supported. Use a Buffer instead.");return y.isArrayBuffer(m)||y.isTypedArray(m)?l&&typeof Blob=="function"?new Blob([m]):Buffer.from(m):m}function u(m,_,b){let T=m;if(m&&!b&&typeof m=="object"){if(y.endsWith(_,"{}"))_=s?_:_.slice(0,-2),m=JSON.stringify(m);else if(y.isArray(m)&&Zx(m)||(y.isFileList(m)||y.endsWith(_,"[]"))&&(T=y.toArray(m)))return _=I_(_),T.forEach(function(O,D){!(y.isUndefined(O)||O===null)&&e.append(o===!0?jd([_],D,i):o===null?_:_+"[]",c(O))}),!1}return xl(m)?!0:(e.append(jd(b,_,i),c(m)),!1)}const h=[],d=Object.assign(eL,{defaultVisitor:u,convertValue:c,isVisitable:xl});function p(m,_){if(!y.isUndefined(m)){if(h.indexOf(m)!==-1)throw Error("Circular reference detected in "+_.join("."));h.push(m),y.forEach(m,function(T,A){(!(y.isUndefined(T)||T===null)&&r.call(e,T,y.isString(A)?A.trim():A,_,d))===!0&&p(T,_?_.concat(A):[A])}),h.pop()}}if(!y.isObject(t))throw new TypeError("data must be an object");return p(t),e}function qd(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(s){return e[s]})}function fu(t,e){this._pairs=[],t&&aa(t,this,e)}const S_=fu.prototype;S_.append=function(e,n){this._pairs.push([e,n])};S_.toString=function(e){const n=e?function(s){return e.call(this,s,qd)}:qd;return this._pairs.map(function(r){return n(r[0])+"="+n(r[1])},"").join("&")};function tL(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function T_(t,e,n){if(!e)return t;const s=n&&n.encode||tL,r=n&&n.serialize;let i;if(r?i=r(e,n):i=y.isURLSearchParams(e)?e.toString():new fu(e,n).toString(s),i){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+i}return t}class Gd{constructor(){this.handlers=[]}use(e,n,s){return this.handlers.push({fulfilled:e,rejected:n,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){y.forEach(this.handlers,function(s){s!==null&&e(s)})}}const A_={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},nL=typeof URLSearchParams<"u"?URLSearchParams:fu,sL=typeof FormData<"u"?FormData:null,rL=typeof Blob<"u"?Blob:null,iL={isBrowser:!0,classes:{URLSearchParams:nL,FormData:sL,Blob:rL},protocols:["http","https","file","blob","url","data"]},pu=typeof window<"u"&&typeof document<"u",Ll=typeof navigator=="object"&&navigator||void 0,oL=pu&&(!Ll||["ReactNative","NativeScript","NS"].indexOf(Ll.product)<0),aL=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",lL=pu&&window.location.href||"http://localhost",cL=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:pu,hasStandardBrowserEnv:oL,hasStandardBrowserWebWorkerEnv:aL,navigator:Ll,origin:lL},Symbol.toStringTag,{value:"Module"})),Ye={...cL,...iL};function uL(t,e){return aa(t,new Ye.classes.URLSearchParams,Object.assign({visitor:function(n,s,r,i){return Ye.isNode&&y.isBuffer(n)?(this.append(s,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}function hL(t){return y.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function dL(t){const e={},n=Object.keys(t);let s;const r=n.length;let i;for(s=0;s<r;s++)i=n[s],e[i]=t[i];return e}function R_(t){function e(n,s,r,i){let o=n[i++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=i>=n.length;return o=!o&&y.isArray(r)?r.length:o,l?(y.hasOwnProp(r,o)?r[o]=[r[o],s]:r[o]=s,!a):((!r[o]||!y.isObject(r[o]))&&(r[o]=[]),e(n,s,r[o],i)&&y.isArray(r[o])&&(r[o]=dL(r[o])),!a)}if(y.isFormData(t)&&y.isFunction(t.entries)){const n={};return y.forEachEntry(t,(s,r)=>{e(hL(s),r,n,0)}),n}return null}function fL(t,e,n){if(y.isString(t))try{return(e||JSON.parse)(t),y.trim(t)}catch(s){if(s.name!=="SyntaxError")throw s}return(0,JSON.stringify)(t)}const vi={transitional:A_,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const s=n.getContentType()||"",r=s.indexOf("application/json")>-1,i=y.isObject(e);if(i&&y.isHTMLForm(e)&&(e=new FormData(e)),y.isFormData(e))return r?JSON.stringify(R_(e)):e;if(y.isArrayBuffer(e)||y.isBuffer(e)||y.isStream(e)||y.isFile(e)||y.isBlob(e)||y.isReadableStream(e))return e;if(y.isArrayBufferView(e))return e.buffer;if(y.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(i){if(s.indexOf("application/x-www-form-urlencoded")>-1)return uL(e,this.formSerializer).toString();if((a=y.isFileList(e))||s.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return aa(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return i||r?(n.setContentType("application/json",!1),fL(e)):e}],transformResponse:[function(e){const n=this.transitional||vi.transitional,s=n&&n.forcedJSONParsing,r=this.responseType==="json";if(y.isResponse(e)||y.isReadableStream(e))return e;if(e&&y.isString(e)&&(s&&!this.responseType||r)){const o=!(n&&n.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?z.from(a,z.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ye.classes.FormData,Blob:Ye.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};y.forEach(["delete","get","head","post","put","patch"],t=>{vi.headers[t]={}});const pL=y.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),gL=t=>{const e={};let n,s,r;return t&&t.split(`
`).forEach(function(o){r=o.indexOf(":"),n=o.substring(0,r).trim().toLowerCase(),s=o.substring(r+1).trim(),!(!n||e[n]&&pL[n])&&(n==="set-cookie"?e[n]?e[n].push(s):e[n]=[s]:e[n]=e[n]?e[n]+", "+s:s)}),e},zd=Symbol("internals");function ar(t){return t&&String(t).trim().toLowerCase()}function Hi(t){return t===!1||t==null?t:y.isArray(t)?t.map(Hi):String(t)}function mL(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let s;for(;s=n.exec(t);)e[s[1]]=s[2];return e}const _L=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Ba(t,e,n,s,r){if(y.isFunction(s))return s.call(this,e,n);if(r&&(e=n),!!y.isString(e)){if(y.isString(s))return e.indexOf(s)!==-1;if(y.isRegExp(s))return s.test(e)}}function vL(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,s)=>n.toUpperCase()+s)}function yL(t,e){const n=y.toCamelCase(" "+e);["get","set","has"].forEach(s=>{Object.defineProperty(t,s+n,{value:function(r,i,o){return this[s].call(this,e,r,i,o)},configurable:!0})})}class Je{constructor(e){e&&this.set(e)}set(e,n,s){const r=this;function i(a,l,c){const u=ar(l);if(!u)throw new Error("header name must be a non-empty string");const h=y.findKey(r,u);(!h||r[h]===void 0||c===!0||c===void 0&&r[h]!==!1)&&(r[h||l]=Hi(a))}const o=(a,l)=>y.forEach(a,(c,u)=>i(c,u,l));if(y.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(y.isString(e)&&(e=e.trim())&&!_L(e))o(gL(e),n);else if(y.isHeaders(e))for(const[a,l]of e.entries())i(l,a,s);else e!=null&&i(n,e,s);return this}get(e,n){if(e=ar(e),e){const s=y.findKey(this,e);if(s){const r=this[s];if(!n)return r;if(n===!0)return mL(r);if(y.isFunction(n))return n.call(this,r,s);if(y.isRegExp(n))return n.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=ar(e),e){const s=y.findKey(this,e);return!!(s&&this[s]!==void 0&&(!n||Ba(this,this[s],s,n)))}return!1}delete(e,n){const s=this;let r=!1;function i(o){if(o=ar(o),o){const a=y.findKey(s,o);a&&(!n||Ba(s,s[a],a,n))&&(delete s[a],r=!0)}}return y.isArray(e)?e.forEach(i):i(e),r}clear(e){const n=Object.keys(this);let s=n.length,r=!1;for(;s--;){const i=n[s];(!e||Ba(this,this[i],i,e,!0))&&(delete this[i],r=!0)}return r}normalize(e){const n=this,s={};return y.forEach(this,(r,i)=>{const o=y.findKey(s,i);if(o){n[o]=Hi(r),delete n[i];return}const a=e?vL(i):String(i).trim();a!==i&&delete n[i],n[a]=Hi(r),s[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return y.forEach(this,(s,r)=>{s!=null&&s!==!1&&(n[r]=e&&y.isArray(s)?s.join(", "):s)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const s=new this(e);return n.forEach(r=>s.set(r)),s}static accessor(e){const s=(this[zd]=this[zd]={accessors:{}}).accessors,r=this.prototype;function i(o){const a=ar(o);s[a]||(yL(r,o),s[a]=!0)}return y.isArray(e)?e.forEach(i):i(e),this}}Je.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);y.reduceDescriptors(Je.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(s){this[n]=s}}});y.freezeMethods(Je);function Ha(t,e){const n=this||vi,s=e||n,r=Je.from(s.headers);let i=s.data;return y.forEach(t,function(a){i=a.call(n,i,r.normalize(),e?e.status:void 0)}),r.normalize(),i}function P_(t){return!!(t&&t.__CANCEL__)}function Ys(t,e,n){z.call(this,t??"canceled",z.ERR_CANCELED,e,n),this.name="CanceledError"}y.inherits(Ys,z,{__CANCEL__:!0});function O_(t,e,n){const s=n.config.validateStatus;!n.status||!s||s(n.status)?t(n):e(new z("Request failed with status code "+n.status,[z.ERR_BAD_REQUEST,z.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function bL(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function EL(t,e){t=t||10;const n=new Array(t),s=new Array(t);let r=0,i=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),u=s[i];o||(o=c),n[r]=l,s[r]=c;let h=i,d=0;for(;h!==r;)d+=n[h++],h=h%t;if(r=(r+1)%t,r===i&&(i=(i+1)%t),c-o<e)return;const p=u&&c-u;return p?Math.round(d*1e3/p):void 0}}function wL(t,e){let n=0,s=1e3/e,r,i;const o=(c,u=Date.now())=>{n=u,r=null,i&&(clearTimeout(i),i=null),t.apply(null,c)};return[(...c)=>{const u=Date.now(),h=u-n;h>=s?o(c,u):(r=c,i||(i=setTimeout(()=>{i=null,o(r)},s-h)))},()=>r&&o(r)]}const Io=(t,e,n=3)=>{let s=0;const r=EL(50,250);return wL(i=>{const o=i.loaded,a=i.lengthComputable?i.total:void 0,l=o-s,c=r(l),u=o<=a;s=o;const h={loaded:o,total:a,progress:a?o/a:void 0,bytes:l,rate:c||void 0,estimated:c&&a&&u?(a-o)/c:void 0,event:i,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(h)},n)},Kd=(t,e)=>{const n=t!=null;return[s=>e[0]({lengthComputable:n,total:t,loaded:s}),e[1]]},Yd=t=>(...e)=>y.asap(()=>t(...e)),CL=Ye.hasStandardBrowserEnv?function(){const e=Ye.navigator&&/(msie|trident)/i.test(Ye.navigator.userAgent),n=document.createElement("a");let s;function r(i){let o=i;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return s=r(window.location.href),function(o){const a=y.isString(o)?r(o):o;return a.protocol===s.protocol&&a.host===s.host}}():function(){return function(){return!0}}(),IL=Ye.hasStandardBrowserEnv?{write(t,e,n,s,r,i){const o=[t+"="+encodeURIComponent(e)];y.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),y.isString(s)&&o.push("path="+s),y.isString(r)&&o.push("domain="+r),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function SL(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function TL(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function N_(t,e){return t&&!SL(e)?TL(t,e):e}const Jd=t=>t instanceof Je?{...t}:t;function ss(t,e){e=e||{};const n={};function s(c,u,h){return y.isPlainObject(c)&&y.isPlainObject(u)?y.merge.call({caseless:h},c,u):y.isPlainObject(u)?y.merge({},u):y.isArray(u)?u.slice():u}function r(c,u,h){if(y.isUndefined(u)){if(!y.isUndefined(c))return s(void 0,c,h)}else return s(c,u,h)}function i(c,u){if(!y.isUndefined(u))return s(void 0,u)}function o(c,u){if(y.isUndefined(u)){if(!y.isUndefined(c))return s(void 0,c)}else return s(void 0,u)}function a(c,u,h){if(h in e)return s(c,u);if(h in t)return s(void 0,c)}const l={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(c,u)=>r(Jd(c),Jd(u),!0)};return y.forEach(Object.keys(Object.assign({},t,e)),function(u){const h=l[u]||r,d=h(t[u],e[u],u);y.isUndefined(d)&&h!==a||(n[u]=d)}),n}const k_=t=>{const e=ss({},t);let{data:n,withXSRFToken:s,xsrfHeaderName:r,xsrfCookieName:i,headers:o,auth:a}=e;e.headers=o=Je.from(o),e.url=T_(N_(e.baseURL,e.url),t.params,t.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let l;if(y.isFormData(n)){if(Ye.hasStandardBrowserEnv||Ye.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((l=o.getContentType())!==!1){const[c,...u]=l?l.split(";").map(h=>h.trim()).filter(Boolean):[];o.setContentType([c||"multipart/form-data",...u].join("; "))}}if(Ye.hasStandardBrowserEnv&&(s&&y.isFunction(s)&&(s=s(e)),s||s!==!1&&CL(e.url))){const c=r&&i&&IL.read(i);c&&o.set(r,c)}return e},AL=typeof XMLHttpRequest<"u",RL=AL&&function(t){return new Promise(function(n,s){const r=k_(t);let i=r.data;const o=Je.from(r.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:c}=r,u,h,d,p,m;function _(){p&&p(),m&&m(),r.cancelToken&&r.cancelToken.unsubscribe(u),r.signal&&r.signal.removeEventListener("abort",u)}let b=new XMLHttpRequest;b.open(r.method.toUpperCase(),r.url,!0),b.timeout=r.timeout;function T(){if(!b)return;const O=Je.from("getAllResponseHeaders"in b&&b.getAllResponseHeaders()),B={data:!a||a==="text"||a==="json"?b.responseText:b.response,status:b.status,statusText:b.statusText,headers:O,config:t,request:b};O_(function(Q){n(Q),_()},function(Q){s(Q),_()},B),b=null}"onloadend"in b?b.onloadend=T:b.onreadystatechange=function(){!b||b.readyState!==4||b.status===0&&!(b.responseURL&&b.responseURL.indexOf("file:")===0)||setTimeout(T)},b.onabort=function(){b&&(s(new z("Request aborted",z.ECONNABORTED,t,b)),b=null)},b.onerror=function(){s(new z("Network Error",z.ERR_NETWORK,t,b)),b=null},b.ontimeout=function(){let D=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const B=r.transitional||A_;r.timeoutErrorMessage&&(D=r.timeoutErrorMessage),s(new z(D,B.clarifyTimeoutError?z.ETIMEDOUT:z.ECONNABORTED,t,b)),b=null},i===void 0&&o.setContentType(null),"setRequestHeader"in b&&y.forEach(o.toJSON(),function(D,B){b.setRequestHeader(B,D)}),y.isUndefined(r.withCredentials)||(b.withCredentials=!!r.withCredentials),a&&a!=="json"&&(b.responseType=r.responseType),c&&([d,m]=Io(c,!0),b.addEventListener("progress",d)),l&&b.upload&&([h,p]=Io(l),b.upload.addEventListener("progress",h),b.upload.addEventListener("loadend",p)),(r.cancelToken||r.signal)&&(u=O=>{b&&(s(!O||O.type?new Ys(null,t,b):O),b.abort(),b=null)},r.cancelToken&&r.cancelToken.subscribe(u),r.signal&&(r.signal.aborted?u():r.signal.addEventListener("abort",u)));const A=bL(r.url);if(A&&Ye.protocols.indexOf(A)===-1){s(new z("Unsupported protocol "+A+":",z.ERR_BAD_REQUEST,t));return}b.send(i||null)})},PL=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let s=new AbortController,r;const i=function(c){if(!r){r=!0,a();const u=c instanceof Error?c:this.reason;s.abort(u instanceof z?u:new Ys(u instanceof Error?u.message:u))}};let o=e&&setTimeout(()=>{o=null,i(new z(`timeout ${e} of ms exceeded`,z.ETIMEDOUT))},e);const a=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(c=>{c.unsubscribe?c.unsubscribe(i):c.removeEventListener("abort",i)}),t=null)};t.forEach(c=>c.addEventListener("abort",i));const{signal:l}=s;return l.unsubscribe=()=>y.asap(a),l}},OL=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let s=0,r;for(;s<n;)r=s+e,yield t.slice(s,r),s=r},NL=async function*(t,e){for await(const n of kL(t))yield*OL(n,e)},kL=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:s}=await e.read();if(n)break;yield s}}finally{await e.cancel()}},Qd=(t,e,n,s)=>{const r=NL(t,e);let i=0,o,a=l=>{o||(o=!0,s&&s(l))};return new ReadableStream({async pull(l){try{const{done:c,value:u}=await r.next();if(c){a(),l.close();return}let h=u.byteLength;if(n){let d=i+=h;n(d)}l.enqueue(new Uint8Array(u))}catch(c){throw a(c),c}},cancel(l){return a(l),r.return()}},{highWaterMark:2})},la=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",D_=la&&typeof ReadableStream=="function",DL=la&&(typeof TextEncoder=="function"?(t=>e=>t.encode(e))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),x_=(t,...e)=>{try{return!!t(...e)}catch{return!1}},xL=D_&&x_(()=>{let t=!1;const e=new Request(Ye.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e}),Xd=64*1024,Ml=D_&&x_(()=>y.isReadableStream(new Response("").body)),So={stream:Ml&&(t=>t.body)};la&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!So[e]&&(So[e]=y.isFunction(t[e])?n=>n[e]():(n,s)=>{throw new z(`Response type '${e}' is not supported`,z.ERR_NOT_SUPPORT,s)})})})(new Response);const LL=async t=>{if(t==null)return 0;if(y.isBlob(t))return t.size;if(y.isSpecCompliantForm(t))return(await new Request(Ye.origin,{method:"POST",body:t}).arrayBuffer()).byteLength;if(y.isArrayBufferView(t)||y.isArrayBuffer(t))return t.byteLength;if(y.isURLSearchParams(t)&&(t=t+""),y.isString(t))return(await DL(t)).byteLength},ML=async(t,e)=>{const n=y.toFiniteNumber(t.getContentLength());return n??LL(e)},FL=la&&(async t=>{let{url:e,method:n,data:s,signal:r,cancelToken:i,timeout:o,onDownloadProgress:a,onUploadProgress:l,responseType:c,headers:u,withCredentials:h="same-origin",fetchOptions:d}=k_(t);c=c?(c+"").toLowerCase():"text";let p=PL([r,i&&i.toAbortSignal()],o),m;const _=p&&p.unsubscribe&&(()=>{p.unsubscribe()});let b;try{if(l&&xL&&n!=="get"&&n!=="head"&&(b=await ML(u,s))!==0){let B=new Request(e,{method:"POST",body:s,duplex:"half"}),ee;if(y.isFormData(s)&&(ee=B.headers.get("content-type"))&&u.setContentType(ee),B.body){const[Q,Ne]=Kd(b,Io(Yd(l)));s=Qd(B.body,Xd,Q,Ne)}}y.isString(h)||(h=h?"include":"omit");const T="credentials"in Request.prototype;m=new Request(e,{...d,signal:p,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:s,duplex:"half",credentials:T?h:void 0});let A=await fetch(m);const O=Ml&&(c==="stream"||c==="response");if(Ml&&(a||O&&_)){const B={};["status","statusText","headers"].forEach(Be=>{B[Be]=A[Be]});const ee=y.toFiniteNumber(A.headers.get("content-length")),[Q,Ne]=a&&Kd(ee,Io(Yd(a),!0))||[];A=new Response(Qd(A.body,Xd,Q,()=>{Ne&&Ne(),_&&_()}),B)}c=c||"text";let D=await So[y.findKey(So,c)||"text"](A,t);return!O&&_&&_(),await new Promise((B,ee)=>{O_(B,ee,{data:D,headers:Je.from(A.headers),status:A.status,statusText:A.statusText,config:t,request:m})})}catch(T){throw _&&_(),T&&T.name==="TypeError"&&/fetch/i.test(T.message)?Object.assign(new z("Network Error",z.ERR_NETWORK,t,m),{cause:T.cause||T}):z.from(T,T&&T.code,t,m)}}),Fl={http:Xx,xhr:RL,fetch:FL};y.forEach(Fl,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const Zd=t=>`- ${t}`,UL=t=>y.isFunction(t)||t===null||t===!1,L_={getAdapter:t=>{t=y.isArray(t)?t:[t];const{length:e}=t;let n,s;const r={};for(let i=0;i<e;i++){n=t[i];let o;if(s=n,!UL(n)&&(s=Fl[(o=String(n)).toLowerCase()],s===void 0))throw new z(`Unknown adapter '${o}'`);if(s)break;r[o||"#"+i]=s}if(!s){const i=Object.entries(r).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let o=e?i.length>1?`since :
`+i.map(Zd).join(`
`):" "+Zd(i[0]):"as no adapter specified";throw new z("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return s},adapters:Fl};function Wa(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Ys(null,t)}function ef(t){return Wa(t),t.headers=Je.from(t.headers),t.data=Ha.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),L_.getAdapter(t.adapter||vi.adapter)(t).then(function(s){return Wa(t),s.data=Ha.call(t,t.transformResponse,s),s.headers=Je.from(s.headers),s},function(s){return P_(s)||(Wa(t),s&&s.response&&(s.response.data=Ha.call(t,t.transformResponse,s.response),s.response.headers=Je.from(s.response.headers))),Promise.reject(s)})}const M_="1.7.7",gu={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{gu[t]=function(s){return typeof s===t||"a"+(e<1?"n ":" ")+t}});const tf={};gu.transitional=function(e,n,s){function r(i,o){return"[Axios v"+M_+"] Transitional option '"+i+"'"+o+(s?". "+s:"")}return(i,o,a)=>{if(e===!1)throw new z(r(o," has been removed"+(n?" in "+n:"")),z.ERR_DEPRECATED);return n&&!tf[o]&&(tf[o]=!0,console.warn(r(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,a):!0}};function $L(t,e,n){if(typeof t!="object")throw new z("options must be an object",z.ERR_BAD_OPTION_VALUE);const s=Object.keys(t);let r=s.length;for(;r-- >0;){const i=s[r],o=e[i];if(o){const a=t[i],l=a===void 0||o(a,i,t);if(l!==!0)throw new z("option "+i+" must be "+l,z.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new z("Unknown option "+i,z.ERR_BAD_OPTION)}}const Ul={assertOptions:$L,validators:gu},un=Ul.validators;class zn{constructor(e){this.defaults=e,this.interceptors={request:new Gd,response:new Gd}}async request(e,n){try{return await this._request(e,n)}catch(s){if(s instanceof Error){let r;Error.captureStackTrace?Error.captureStackTrace(r={}):r=new Error;const i=r.stack?r.stack.replace(/^.+\n/,""):"";try{s.stack?i&&!String(s.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(s.stack+=`
`+i):s.stack=i}catch{}}throw s}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=ss(this.defaults,n);const{transitional:s,paramsSerializer:r,headers:i}=n;s!==void 0&&Ul.assertOptions(s,{silentJSONParsing:un.transitional(un.boolean),forcedJSONParsing:un.transitional(un.boolean),clarifyTimeoutError:un.transitional(un.boolean)},!1),r!=null&&(y.isFunction(r)?n.paramsSerializer={serialize:r}:Ul.assertOptions(r,{encode:un.function,serialize:un.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&y.merge(i.common,i[n.method]);i&&y.forEach(["delete","get","head","post","put","patch","common"],m=>{delete i[m]}),n.headers=Je.concat(o,i);const a=[];let l=!0;this.interceptors.request.forEach(function(_){typeof _.runWhen=="function"&&_.runWhen(n)===!1||(l=l&&_.synchronous,a.unshift(_.fulfilled,_.rejected))});const c=[];this.interceptors.response.forEach(function(_){c.push(_.fulfilled,_.rejected)});let u,h=0,d;if(!l){const m=[ef.bind(this),void 0];for(m.unshift.apply(m,a),m.push.apply(m,c),d=m.length,u=Promise.resolve(n);h<d;)u=u.then(m[h++],m[h++]);return u}d=a.length;let p=n;for(h=0;h<d;){const m=a[h++],_=a[h++];try{p=m(p)}catch(b){_.call(this,b);break}}try{u=ef.call(this,p)}catch(m){return Promise.reject(m)}for(h=0,d=c.length;h<d;)u=u.then(c[h++],c[h++]);return u}getUri(e){e=ss(this.defaults,e);const n=N_(e.baseURL,e.url);return T_(n,e.params,e.paramsSerializer)}}y.forEach(["delete","get","head","options"],function(e){zn.prototype[e]=function(n,s){return this.request(ss(s||{},{method:e,url:n,data:(s||{}).data}))}});y.forEach(["post","put","patch"],function(e){function n(s){return function(i,o,a){return this.request(ss(a||{},{method:e,headers:s?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}zn.prototype[e]=n(),zn.prototype[e+"Form"]=n(!0)});class mu{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const s=this;this.promise.then(r=>{if(!s._listeners)return;let i=s._listeners.length;for(;i-- >0;)s._listeners[i](r);s._listeners=null}),this.promise.then=r=>{let i;const o=new Promise(a=>{s.subscribe(a),i=a}).then(r);return o.cancel=function(){s.unsubscribe(i)},o},e(function(i,o,a){s.reason||(s.reason=new Ys(i,o,a),n(s.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=s=>{e.abort(s)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new mu(function(r){e=r}),cancel:e}}}function BL(t){return function(n){return t.apply(null,n)}}function HL(t){return y.isObject(t)&&t.isAxiosError===!0}const $l={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries($l).forEach(([t,e])=>{$l[e]=t});function F_(t){const e=new zn(t),n=p_(zn.prototype.request,e);return y.extend(n,zn.prototype,e,{allOwnKeys:!0}),y.extend(n,e,null,{allOwnKeys:!0}),n.create=function(r){return F_(ss(t,r))},n}const we=F_(vi);we.Axios=zn;we.CanceledError=Ys;we.CancelToken=mu;we.isCancel=P_;we.VERSION=M_;we.toFormData=aa;we.AxiosError=z;we.Cancel=we.CanceledError;we.all=function(e){return Promise.all(e)};we.spread=BL;we.isAxiosError=HL;we.mergeConfig=ss;we.AxiosHeaders=Je;we.formToJSON=t=>R_(y.isHTMLForm(t)?new FormData(t):t);we.getAdapter=L_.getAdapter;we.HttpStatusCode=$l;we.default=we;const WL=ei({name:"LoginBox",props:{isInApp:{type:Boolean,required:!0},showLogin:{type:Boolean,required:!0}},setup(t,{emit:e}){const n=dt(""),s=dt(""),r=dt(!1);vr(r,u=>{localStorage.setItem("keeploggedin",JSON.stringify(u))}),ic(()=>{const u=localStorage.getItem("keeploggedin");u!==null&&(r.value=JSON.parse(u))});const i=()=>{e("toggleLogin")},o=async u=>{const h=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,d=/@alearn.org.tw$/;if(h.test(String(u).toLowerCase())&&d.test(String(u).toLowerCase()))return!0;try{return(await we.get(`https://members-backend.alearn13994229.workers.dev/is_member_email/${u}`)).data.isMember===!0}catch(p){return console.error("Error checking member email:",p),!1}};return{users_email:n,user_password:s,keeploggedin:r,toggleLogin:i,registerWithEmail:async()=>{if(console.log("users_email:",n.value),console.log("user_password:",s.value),console.log("Register clicked"),!n.value||!s.value){window.alert("請先填寫email和密碼");return}if(!await o(n.value)){alert("請使用@aleran.org.tw網域的Email，或是會員名冊上有的Email");return}if(!s.value||typeof s.value!="string"){alert("密碼請至少包含一個英文字，請重新輸入");return}e("registerWithEmail",n.value,s.value,r.value)},loginWithEmail:()=>{let u=!0;console.log("Login clicked");const h=window.location.pathname;if((h==="/friends"||h==="/maps"||h==="/privacy-policy"||h.startsWith("/flag")||h.startsWith("/group"))&&(u=!1),!s.value||typeof s.value!="string"){alert("密碼無效，請重新輸入");return}e("loginWithEmail",u,n.value,s.value,r.value)},resetPassword:()=>{if(console.log("Reset password function triggered"),console.log("Email for reset:",n.value),!o(n.value)){alert("請先輸入有效的電子郵件地址");return}const u=zr();console.log("Firebase auth object:",u),rT(u,n.value).then(()=>{alert("密碼重置郵件已發送，請檢查您的電子郵件信箱"),console.log("Password reset email sent successfully")}).catch(h=>{switch(console.error("密碼重置郵件發送失敗：",h.code,h.message),h.code){case"auth/invalid-email":alert("無效的電子郵件地址");break;case"auth/user-not-found":alert("找不到該電子郵件對應的帳號");break;default:alert("密碼重置郵件發送失敗，請稍後再試")}})}}}}),VL={class:"ui middle aligned center aligned grid",id:"login-main",style:{height:"100vh"}},jL={class:"column",style:{"max-width":"420px"}},qL={class:"ui raised segment"},GL={key:0,class:"ui error message"},zL={class:"ui form segment",style:{"border-radius":"10px",padding:"15px","background-color":"#f0f0f0"}},KL={class:"field"},YL={class:"ui left icon input"},JL={class:"field"},QL={class:"ui left icon input"},XL={class:"ui large form"},ZL={class:"ui segment",style:{border:"none","padding-top":"10px"}},eM={class:"field"};function tM(t,e,n,s,r,i){return be(),We("div",{class:"ui dimmer modals visible active clickable",id:"login-bg",style:{background:"rgba(0, 0, 0, 0.6)"},onClick:e[9]||(e[9]=o=>t.toggleLogin())},[R("div",VL,[R("div",jL,[R("div",qL,[t.isInApp?(be(),We("div",GL,"本系統不支援facebook, line等app內部瀏覽，請用一般瀏覽器開啟，方可登入，謝謝")):Pt("",!0),e[14]||(e[14]=R("h2",{class:"ui black header",style:{"font-size":"1.5rem","font-weight":"600"}},"登入您的帳號",-1)),R("form",zL,[R("div",KL,[R("div",YL,[e[10]||(e[10]=R("i",{class:"envelope icon"},null,-1)),Oi(R("input",{type:"text",name:"email",placeholder:"E-mail address",style:{"font-size":"14px"},"onUpdate:modelValue":e[0]||(e[0]=o=>t.users_email=o),onClick:e[1]||(e[1]=tr(()=>{},["stop"]))},null,512),[[il,t.users_email]])])]),R("div",JL,[R("div",QL,[e[11]||(e[11]=R("i",{class:"lock icon"},null,-1)),Oi(R("input",{type:"password",name:"user_password",placeholder:"Password",style:{"font-size":"14px"},"onUpdate:modelValue":e[2]||(e[2]=o=>t.user_password=o),autocomplete:"",onClick:e[3]||(e[3]=tr(()=>{},["stop"]))},null,512),[[il,t.user_password]])])]),R("div",{class:Kn(["ui fluid large button",{disabled:t.isInApp}]),onClick:e[4]||(e[4]=tr((...o)=>t.loginWithEmail&&t.loginWithEmail(...o),["prevent"])),style:{"background-color":"#e47e10",color:"white","font-weight":"bold"}},"登入",2),R("a",{class:"small forgot-password",onClick:e[5]||(e[5]=(...o)=>t.resetPassword&&t.resetPassword(...o))},"忘記密碼")]),R("form",XL,[R("div",ZL,[R("div",eM,[R("div",{class:"ui checkbox",onClick:e[7]||(e[7]=tr(()=>{},["stop"]))},[Oi(R("input",{type:"checkbox","onUpdate:modelValue":e[6]||(e[6]=o=>t.keeploggedin=o)},null,512),[[lb,t.keeploggedin]]),e[12]||(e[12]=R("label",null,"保持登入狀態",-1))])])]),R("p",null,[e[13]||(e[13]=ye("新用戶？按此")),R("button",{class:Kn(["ui large basic button",{disabled:t.isInApp}]),id:"register-btn",onClick:e[8]||(e[8]=tr((...o)=>t.registerWithEmail&&t.registerWithEmail(...o),["stop","prevent"]))},"註冊",2)])])])])])])}const _u=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},nM=_u(WL,[["render",tM],["__scopeId","data-v-c36a608a"]]),sM=new dx(window.navigator.userAgent),rM=sM.isInApp,lr=zr(su),iM=ei({name:"App",components:{Login:nM},data(){return{isInApp:rM,showLogin:!1,sidebarVisible:!1,uid:"",users:{},user:{},photoURL:"",email:"",emailVerified:!1,zoom:13,center:[23.533,121.0654]}},mounted(){const t=this;lr.onAuthStateChanged(e=>{e?(t.uid=e.uid,t.email=e.email||"",t.photoURL=e.photoURL||"https://we.alearn.org.tw/logo-new.png",t.emailVerified=e.emailVerified,t.updateUserData(e)):(t.uid="",t.email="",t.photoURL="",t.emailVerified=!1)})},methods:{toggleLogin(){this.showLogin=!this.showLogin},toggleSidebar(){this.sidebarVisible=!this.sidebarVisible},logout(){const t=this;lr.signOut().then(function(){t.user=null,t.users={},t.uid="",t.photoURL="",t.$nextTick().then(()=>{t.$router.push("/")})})},async registerWithEmail(t,e,n){var s,r;if(!e||typeof e!="string"){alert("接收的密碼無效，請確認輸入");return}try{const i=zr(),a=(await iT(i,t,e)).user;if(a&&a.email){this.email=a.email,this.uid=a.uid,this.photoURL="https://we.alearn.org.tw/logo-new.png";const l=[{displayName:((s=this.email)==null?void 0:s.split("@")[0])||"Unknown",email:this.email,photoURL:this.photoURL}];this.user={email:this.email,photoURL:this.photoURL,providerData:l};const c=ci(pi,"users/"+this.uid);(await KI(c)).exists()||await zc(c,{email:this.email,name:((r=this.email)==null?void 0:r.split("@")[0])||"Unknown",connect_me:this.email,photoURL:this.photoURL,login_method:"email"}),await nd(a),alert("驗證郵件已發送，請檢查您的郵箱(含垃圾信箱)以完成驗證。"),this.logout()}else console.error("User or user email is undefined after registration"),alert("註冊過程中發生錯誤，請稍後再試。")}catch(i){i.code==="auth/email-already-in-use"?alert("此電子郵件已被使用，請使用其他電子郵件或嘗試登入。"):(console.error("註冊失敗：",i),alert("註冊失敗："+i.message))}},async loginWithEmail(t,e,n,s){try{s?await sd(lr,Um):await sd(lr,Tl);const i=(await oT(lr,e,n)).user;if(!i.emailVerified){alert("您的電子郵件尚未驗證，請檢查您的郵箱並完成驗證。"),this.resendVerificationEmail(),this.logout();return}this.emailVerified=!0,console.log("登入成功：",i),this.updateUserData(i),t&&i.emailVerified&&this.$nextTick().then(()=>{this.$router.push("/profile")})}catch(r){console.error("登入失敗：",r);let i="登入失敗：";r.message.includes("auth/wrong-password")?i="密碼錯誤，請檢查後再試。":r.message.includes("auth/user-not-found")?i="帳號不存在，請確認您的電子郵件地址。":r.message.includes("auth/invalid-email")?i="無效的電子郵件地址，請重新輸入。":r.message.includes("auth/too-many-requests")?i="嘗試次數過多，請稍後再試。":i+=r.message,alert(i)}},resendVerificationEmail(){const t=zr().currentUser;t&&nd(t).then(()=>{console.log("驗證郵件已重新發送。")}).catch(e=>{console.error("重新發送驗證郵件失敗：",e)})},updateUserData(t){var n;if(!t){console.error("User is undefined in updateUserData");return}this.email=t.email||null,this.uid=t.uid,this.photoURL=t.photoURL?decodeURI(t.photoURL):"https://we.alearn.org.tw/logo-new.png",this.emailVerified=t.emailVerified;const e=t.providerData||[{displayName:((n=this.email)==null?void 0:n.split("@")[0])||"Unknown",email:this.email,photoURL:this.photoURL}];this.updateUserInfo(e)},locate:function(t,e){this.zoom=13,this.center=t.latlngColumn.split(","),console.log("Updated location:",this.center),this.$nextTick(()=>{console.log("Center updated and propagated to children")}),e&&this.$router.push({path:"/maps"})},updateUserInfo(t){this.users&&this.uid&&this.users[this.uid]?(this.user={...this.users[this.uid],providerData:t},this.user.latlngColumn&&this.locate(this.user,!1)):this.fetchUserData(t)},async fetchUserData(t){try{wl(IA,e=>{const n=e.val();this.users=n,this.uid&&this.users&&this.users[this.uid]?(this.user={...this.users[this.uid],providerData:t},console.log(this.user.photoURL),this.user.photoURL&&this.user.photoURL!="undefined"&&(this.photoURL=this.user.photoURL)):this.user={providerData:t}},e=>{this.user={providerData:t},console.error("Error fetching users:",e)})}catch(e){console.error("Error fetching user data:",e)}}}}),oM={class:"ui fixed top menu"},aM={class:"right menu"},lM={key:1,class:"ui simple dropdown item"},cM=["src"],uM={key:1,class:"user icon"},hM={class:"menu"},dM={class:"ui container"};function fM(t,e,n,s,r,i){const o=Ci("RouterLink"),a=Ci("router-link"),l=Ci("RouterView"),c=Ci("Login");return be(),We(ft,null,[R("header",null,[R("nav",oM,[R("button",{class:"no-border ui item",onClick:e[0]||(e[0]=(...u)=>t.toggleSidebar&&t.toggleSidebar(...u))},e[6]||(e[6]=[R("i",{class:"icon bars"},null,-1)])),_e(o,{class:"item fat-only",to:"/"},{default:De(()=>e[7]||(e[7]=[R("i",{class:"home icon"},null,-1)])),_:1}),_e(o,{class:"item",to:"/about"},{default:De(()=>e[8]||(e[8]=[R("i",{class:"info icon"},null,-1),ye("關於"),R("span",{class:"fat-only"},"我們",-1)])),_:1}),_e(o,{class:"item",to:"/faq"},{default:De(()=>e[9]||(e[9]=[R("i",{class:"help icon"},null,-1),R("span",{class:"fat-only"},"常見",-1),ye("問題")])),_:1}),t.uid?(be(),dn(o,{key:0,class:"item",to:"/create_faq"},{default:De(()=>e[10]||(e[10]=[R("i",{class:"plus icon"},null,-1),ye("新增"),R("span",{class:"fat-only"},"問答",-1)])),_:1})):Pt("",!0),t.uid?(be(),dn(o,{key:1,class:"item fat-only",to:"/feedback"},{default:De(()=>e[11]||(e[11]=[R("i",{class:"magic icon"},null,-1),ye("回饋")])),_:1})):Pt("",!0),R("div",aM,[t.uid?(be(),We("div",lM,[t.photoURL?(be(),We("img",{key:0,class:"ui avatar image",src:t.photoURL,alt:"User Avatar",onError:e[2]||(e[2]=(...u)=>t.useDefaultAvatar&&t.useDefaultAvatar(...u)),onLoad:e[3]||(e[3]=(...u)=>t.onImageLoad&&t.onImageLoad(...u))},null,40,cM)):(be(),We("i",uM)),R("div",hM,[_e(a,{class:"item",to:"/profile"},{default:De(()=>e[13]||(e[13]=[R("i",{class:"flag icon"},null,-1),ye("我的旗幟")])),_:1}),t.uid?(be(),We("button",{key:0,class:"no-border ui item",onClick:e[4]||(e[4]=(...u)=>t.logout&&t.logout(...u))},e[14]||(e[14]=[R("i",{class:"sign-out icon"},null,-1),ye("登出")]))):Pt("",!0)])])):(be(),We("button",{key:0,class:"no-border ui item",onClick:e[1]||(e[1]=(...u)=>t.toggleLogin&&t.toggleLogin(...u))},e[12]||(e[12]=[R("i",{class:"user icon"},null,-1),ye("登入"),R("span",{class:"fat-only"},"/ 註冊",-1)])))])])]),e[24]||(e[24]=R("div",{class:"small-spacer"},null,-1)),R("div",{class:Kn(["ui sidebar vertical menu",{hidden:!t.sidebarVisible}]),id:"side-menu"},[_e(o,{class:"item",to:"/",exact:"",name:"home"},{default:De(()=>e[15]||(e[15]=[R("i",{class:"home icon"},null,-1),ye("首頁")])),_:1}),_e(o,{class:"item",to:"/about",name:"about"},{default:De(()=>e[16]||(e[16]=[R("i",{class:"info icon"},null,-1),ye("關於我們")])),_:1}),_e(o,{class:"item",to:"/doc",name:"doc"},{default:De(()=>e[17]||(e[17]=[R("i",{class:"book icon"},null,-1),ye("本會章程")])),_:1}),_e(o,{class:"item",to:"/faq",name:"faq"},{default:De(()=>e[18]||(e[18]=[R("i",{class:"help icon"},null,-1),ye("常見問題")])),_:1}),t.uid?(be(),dn(o,{key:0,class:"item",to:"/create_faq",name:"create-faq"},{default:De(()=>e[19]||(e[19]=[R("i",{class:"plus icon"},null,-1),ye("新增問答")])),_:1})):Pt("",!0),t.uid?(be(),dn(o,{key:1,class:"item",to:"/maps",name:"maps"},{default:De(()=>e[20]||(e[20]=[R("i",{class:"map icon"},null,-1),ye("地圖")])),_:1})):Pt("",!0),t.uid?(be(),dn(o,{key:2,class:"item",to:"/changelog",name:"changelog"},{default:De(()=>e[21]||(e[21]=[R("i",{class:"history icon"},null,-1),ye("變更紀錄")])),_:1})):Pt("",!0),t.uid?(be(),dn(o,{key:3,class:"item",to:"/privacy-policy",name:"privacy"},{default:De(()=>e[22]||(e[22]=[R("i",{class:"lock icon"},null,-1),ye("隱私權政策")])),_:1})):Pt("",!0),_e(o,{class:"item fat-only",to:"/feedback",name:"feedback"},{default:De(()=>e[23]||(e[23]=[R("i",{class:"magic icon"},null,-1),ye("回饋")])),_:1})],2),R("div",{class:Kn(["ui sidebar bg",{hidden:!t.sidebarVisible}]),onClick:e[5]||(e[5]=(...u)=>t.toggleSidebar&&t.toggleSidebar(...u))},null,2),R("div",dM,[_e(l,{onToggleLogin:t.toggleLogin,onLocate:t.locate,uid:t.uid,isInApp:t.isInApp,user:t.user,users:t.users,photoURL:t.photoURL,email:t.email,emailVerified:t.emailVerified},null,8,["onToggleLogin","onLocate","uid","isInApp","user","users","photoURL","email","emailVerified"])]),t.showLogin?(be(),dn(c,{key:0,showLogin:t.showLogin,isInApp:!1,onToggleLogin:t.toggleLogin,onLogout:t.logout,onRegisterWithEmail:t.registerWithEmail,onLoginWithEmail:t.loginWithEmail,onResendVerificationEmail:t.resendVerificationEmail},null,8,["showLogin","onToggleLogin","onLogout","onRegisterWithEmail","onLoginWithEmail","onResendVerificationEmail"])):Pt("",!0)],64)}const pM=_u(iM,[["render",fM],["__scopeId","data-v-89a87a7c"]]),gM="modulepreload",mM=function(t){return"/"+t},nf={},ht=function(e,n,s){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.allSettled(n.map(l=>{if(l=mM(l),l in nf)return;nf[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const h=document.createElement("link");if(h.rel=c?"stylesheet":gM,c||(h.as="script"),h.crossOrigin="",h.href=l,a&&h.setAttribute("nonce",a),document.head.appendChild(h),c)return new Promise((d,p)=>{h.addEventListener("load",d),h.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})};/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const hs=typeof document<"u";function U_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function _M(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&U_(t.default)}const oe=Object.assign;function Va(t,e){const n={};for(const s in e){const r=e[s];n[s]=wt(r)?r.map(t):t(r)}return n}const Tr=()=>{},wt=Array.isArray,$_=/#/g,vM=/&/g,yM=/\//g,bM=/=/g,EM=/\?/g,B_=/\+/g,wM=/%5B/g,CM=/%5D/g,H_=/%5E/g,IM=/%60/g,W_=/%7B/g,SM=/%7C/g,V_=/%7D/g,TM=/%20/g;function vu(t){return encodeURI(""+t).replace(SM,"|").replace(wM,"[").replace(CM,"]")}function AM(t){return vu(t).replace(W_,"{").replace(V_,"}").replace(H_,"^")}function Bl(t){return vu(t).replace(B_,"%2B").replace(TM,"+").replace($_,"%23").replace(vM,"%26").replace(IM,"`").replace(W_,"{").replace(V_,"}").replace(H_,"^")}function RM(t){return Bl(t).replace(bM,"%3D")}function PM(t){return vu(t).replace($_,"%23").replace(EM,"%3F")}function OM(t){return t==null?"":PM(t).replace(yM,"%2F")}function Yr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const NM=/\/$/,kM=t=>t.replace(NM,"");function ja(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=MM(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:Yr(o)}}function DM(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function sf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function xM(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&ks(e.matched[s],n.matched[r])&&j_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ks(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function j_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!LM(t[n],e[n]))return!1;return!0}function LM(t,e){return wt(t)?rf(t,e):wt(e)?rf(e,t):t===e}function rf(t,e){return wt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function MM(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o).join("/")}const hn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Jr;(function(t){t.pop="pop",t.push="push"})(Jr||(Jr={}));var Ar;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ar||(Ar={}));function FM(t){if(!t)if(hs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),kM(t)}const UM=/^[^#]+#/;function $M(t,e){return t.replace(UM,"#")+e}function BM(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const ca=()=>({left:window.scrollX,top:window.scrollY});function HM(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=BM(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function of(t,e){return(history.state?history.state.position-e:-1)+t}const Hl=new Map;function WM(t,e){Hl.set(t,e)}function VM(t){const e=Hl.get(t);return Hl.delete(t),e}let jM=()=>location.protocol+"//"+location.host;function q_(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),sf(l,"")}return sf(n,t)+s+r}function qM(t,e,n,s){let r=[],i=[],o=null;const a=({state:d})=>{const p=q_(t,location),m=n.value,_=e.value;let b=0;if(d){if(n.value=p,e.value=d,o&&o===m){o=null;return}b=_?d.position-_.position:0}else s(p);r.forEach(T=>{T(n.value,m,{delta:b,type:Jr.pop,direction:b?b>0?Ar.forward:Ar.back:Ar.unknown})})};function l(){o=n.value}function c(d){r.push(d);const p=()=>{const m=r.indexOf(d);m>-1&&r.splice(m,1)};return i.push(p),p}function u(){const{history:d}=window;d.state&&d.replaceState(oe({},d.state,{scroll:ca()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function af(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?ca():null}}function GM(t){const{history:e,location:n}=window,s={value:q_(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:jM()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),r.value=c}catch(p){console.error(p),n[u?"replace":"assign"](d)}}function o(l,c){const u=oe({},e.state,af(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});i(l,u,!0),s.value=l}function a(l,c){const u=oe({},r.value,e.state,{forward:l,scroll:ca()});i(u.current,u,!0);const h=oe({},af(s.value,l,null),{position:u.position+1},c);i(l,h,!1),s.value=l}return{location:s,state:r,push:a,replace:o}}function zM(t){t=FM(t);const e=GM(t),n=qM(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=oe({location:"",base:t,go:s,createHref:$M.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function KM(t){return typeof t=="string"||t&&typeof t=="object"}function G_(t){return typeof t=="string"||typeof t=="symbol"}const z_=Symbol("");var lf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(lf||(lf={}));function Ds(t,e){return oe(new Error,{type:t,[z_]:!0},e)}function Bt(t,e){return t instanceof Error&&z_ in t&&(e==null||!!(t.type&e))}const cf="[^/]+?",YM={sensitive:!1,strict:!1,start:!0,end:!0},JM=/[.+*?^${}()[\]/\\]/g;function QM(t,e){const n=oe({},YM,e),s=[];let r=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let h=0;h<c.length;h++){const d=c[h];let p=40+(n.sensitive?.25:0);if(d.type===0)h||(r+="/"),r+=d.value.replace(JM,"\\$&"),p+=40;else if(d.type===1){const{value:m,repeatable:_,optional:b,regexp:T}=d;i.push({name:m,repeatable:_,optional:b});const A=T||cf;if(A!==cf){p+=10;try{new RegExp(`(${A})`)}catch(D){throw new Error(`Invalid custom RegExp for param "${m}" (${A}): `+D.message)}}let O=_?`((?:${A})(?:/(?:${A}))*)`:`(${A})`;h||(O=b&&c.length<2?`(?:/${O})`:"/"+O),b&&(O+="?"),r+=O,p+=20,b&&(p+=-8),_&&(p+=-20),A===".*"&&(p+=-50)}u.push(p)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",m=i[d-1];h[m.name]=p&&m.repeatable?p.split("/"):p}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:m,repeatable:_,optional:b}=p,T=m in c?c[m]:"";if(wt(T)&&!_)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const A=wt(T)?T.join("/"):T;if(!A)if(b)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=A}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:l}}function XM(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function K_(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=XM(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(uf(s))return 1;if(uf(r))return-1}return r.length-s.length}function uf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const ZM={type:0,value:""},eF=/[a-zA-Z0-9_]/;function tF(t){if(!t)return[[]];if(t==="/")return[[ZM]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,l,c="",u="";function h(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:l==="("?n=2:eF.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),r}function nF(t,e,n){const s=QM(tF(t.path),n),r=oe(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function sF(t,e){const n=[],s=new Map;e=pf({strict:!1,end:!0,sensitive:!1},e);function r(h){return s.get(h)}function i(h,d,p){const m=!p,_=df(h);_.aliasOf=p&&p.record;const b=pf(e,h),T=[_];if("alias"in h){const D=typeof h.alias=="string"?[h.alias]:h.alias;for(const B of D)T.push(df(oe({},_,{components:p?p.record.components:_.components,path:B,aliasOf:p?p.record:_})))}let A,O;for(const D of T){const{path:B}=D;if(d&&B[0]!=="/"){const ee=d.record.path,Q=ee[ee.length-1]==="/"?"":"/";D.path=d.record.path+(B&&Q+B)}if(A=nF(D,d,b),p?p.alias.push(A):(O=O||A,O!==A&&O.alias.push(A),m&&h.name&&!ff(A)&&o(h.name)),Y_(A)&&l(A),_.children){const ee=_.children;for(let Q=0;Q<ee.length;Q++)i(ee[Q],A,p&&p.children[Q])}p=p||A}return O?()=>{o(O)}:Tr}function o(h){if(G_(h)){const d=s.get(h);d&&(s.delete(h),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(h);d>-1&&(n.splice(d,1),h.record.name&&s.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function a(){return n}function l(h){const d=oF(h,n);n.splice(d,0,h),h.record.name&&!ff(h)&&s.set(h.record.name,h)}function c(h,d){let p,m={},_,b;if("name"in h&&h.name){if(p=s.get(h.name),!p)throw Ds(1,{location:h});b=p.record.name,m=oe(hf(d.params,p.keys.filter(O=>!O.optional).concat(p.parent?p.parent.keys.filter(O=>O.optional):[]).map(O=>O.name)),h.params&&hf(h.params,p.keys.map(O=>O.name))),_=p.stringify(m)}else if(h.path!=null)_=h.path,p=n.find(O=>O.re.test(_)),p&&(m=p.parse(_),b=p.record.name);else{if(p=d.name?s.get(d.name):n.find(O=>O.re.test(d.path)),!p)throw Ds(1,{location:h,currentLocation:d});b=p.record.name,m=oe({},d.params,h.params),_=p.stringify(m)}const T=[];let A=p;for(;A;)T.unshift(A.record),A=A.parent;return{name:b,path:_,params:m,matched:T,meta:iF(T)}}t.forEach(h=>i(h));function u(){n.length=0,s.clear()}return{addRoute:i,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function hf(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function df(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:rF(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function rF(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function ff(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function iF(t){return t.reduce((e,n)=>oe(e,n.meta),{})}function pf(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function oF(t,e){let n=0,s=e.length;for(;n!==s;){const i=n+s>>1;K_(t,e[i])<0?s=i:n=i+1}const r=aF(t);return r&&(s=e.lastIndexOf(r,s-1)),s}function aF(t){let e=t;for(;e=e.parent;)if(Y_(e)&&K_(t,e)===0)return e}function Y_({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function lF(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(B_," "),o=i.indexOf("="),a=Yr(o<0?i:i.slice(0,o)),l=o<0?null:Yr(i.slice(o+1));if(a in e){let c=e[a];wt(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function gf(t){let e="";for(let n in t){const s=t[n];if(n=RM(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(wt(s)?s.map(i=>i&&Bl(i)):[s&&Bl(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function cF(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=wt(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const uF=Symbol(""),mf=Symbol(""),ua=Symbol(""),yu=Symbol(""),Wl=Symbol("");function cr(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function gn(t,e,n,s,r,i=o=>o()){const o=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(Ds(4,{from:n,to:e})):d instanceof Error?l(d):KM(d)?l(Ds(2,{from:e,to:d})):(o&&s.enterCallbacks[r]===o&&typeof d=="function"&&o.push(d),a())},u=i(()=>t.call(s&&s.instances[r],e,n,c));let h=Promise.resolve(u);t.length<3&&(h=h.then(c)),h.catch(d=>l(d))})}function qa(t,e,n,s,r=i=>i()){const i=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(U_(l)){const u=(l.__vccOpts||l)[e];u&&i.push(gn(u,n,s,o,a,r))}else{let c=l();i.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const h=_M(u)?u.default:u;o.mods[a]=u,o.components[a]=h;const p=(h.__vccOpts||h)[e];return p&&gn(p,n,s,o,a,r)()}))}}return i}function _f(t){const e=yt(ua),n=yt(yu),s=pt(()=>{const l=_s(t.to);return e.resolve(l)}),r=pt(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(ks.bind(null,u));if(d>-1)return d;const p=vf(l[c-2]);return c>1&&vf(u)===p&&h[h.length-1].path!==p?h.findIndex(ks.bind(null,l[c-2])):d}),i=pt(()=>r.value>-1&&pF(n.params,s.value.params)),o=pt(()=>r.value>-1&&r.value===n.matched.length-1&&j_(n.params,s.value.params));function a(l={}){return fF(l)?e[_s(t.replace)?"replace":"push"](_s(t.to)).catch(Tr):Promise.resolve()}return{route:s,href:pt(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const hF=ei({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:_f,setup(t,{slots:e}){const n=No(_f(t)),{options:s}=yt(ua),r=pt(()=>({[yf(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[yf(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Sp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),dF=hF;function fF(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function pF(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!wt(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function vf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const yf=(t,e,n)=>t??e??n,gF=ei({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=yt(Wl),r=pt(()=>t.route||s.value),i=yt(mf,0),o=pt(()=>{let c=_s(i);const{matched:u}=r.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=pt(()=>r.value.matched[o.value]);Ni(mf,pt(()=>o.value+1)),Ni(uF,a),Ni(Wl,r);const l=dt();return vr(()=>[l.value,a.value,t.name],([c,u,h],[d,p,m])=>{u&&(u.instances[h]=c,p&&p!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!ks(u,p)||!d)&&(u.enterCallbacks[h]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=r.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return bf(n.default,{Component:d,route:c});const p=h.props[u],m=p?p===!0?c.params:typeof p=="function"?p(c):p:null,b=Sp(d,oe({},m,e,{onVnodeUnmounted:T=>{T.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return bf(n.default,{Component:b,route:c})||b}}});function bf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const mF=gF;function _F(t){const e=sF(t.routes,t),n=t.parseQuery||lF,s=t.stringifyQuery||gf,r=t.history,i=cr(),o=cr(),a=cr(),l=Rv(hn);let c=hn;hs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Va.bind(null,w=>""+w),h=Va.bind(null,OM),d=Va.bind(null,Yr);function p(w,F){let L,U;return G_(w)?(L=e.getRecordMatcher(w),U=F):U=w,e.addRoute(U,L)}function m(w){const F=e.getRecordMatcher(w);F&&e.removeRoute(F)}function _(){return e.getRoutes().map(w=>w.record)}function b(w){return!!e.getRecordMatcher(w)}function T(w,F){if(F=oe({},F||l.value),typeof w=="string"){const g=ja(n,w,F.path),v=e.resolve({path:g.path},F),C=r.createHref(g.fullPath);return oe(g,v,{params:d(v.params),hash:Yr(g.hash),redirectedFrom:void 0,href:C})}let L;if(w.path!=null)L=oe({},w,{path:ja(n,w.path,F.path).path});else{const g=oe({},w.params);for(const v in g)g[v]==null&&delete g[v];L=oe({},w,{params:h(g)}),F.params=h(F.params)}const U=e.resolve(L,F),re=w.hash||"";U.params=u(d(U.params));const ve=DM(s,oe({},w,{hash:AM(re),path:U.path})),f=r.createHref(ve);return oe({fullPath:ve,hash:re,query:s===gf?cF(w.query):w.query||{}},U,{redirectedFrom:void 0,href:f})}function A(w){return typeof w=="string"?ja(n,w,l.value.path):oe({},w)}function O(w,F){if(c!==w)return Ds(8,{from:F,to:w})}function D(w){return Q(w)}function B(w){return D(oe(A(w),{replace:!0}))}function ee(w){const F=w.matched[w.matched.length-1];if(F&&F.redirect){const{redirect:L}=F;let U=typeof L=="function"?L(w):L;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=A(U):{path:U},U.params={}),oe({query:w.query,hash:w.hash,params:U.path!=null?{}:w.params},U)}}function Q(w,F){const L=c=T(w),U=l.value,re=w.state,ve=w.force,f=w.replace===!0,g=ee(L);if(g)return Q(oe(A(g),{state:typeof g=="object"?oe({},re,g.state):re,force:ve,replace:f}),F||L);const v=L;v.redirectedFrom=F;let C;return!ve&&xM(s,U,L)&&(C=Ds(16,{to:v,from:U}),St(U,U,!0,!1)),(C?Promise.resolve(C):ot(v,U)).catch(E=>Bt(E)?Bt(E,2)?E:ln(E):te(E,v,U)).then(E=>{if(E){if(Bt(E,2))return Q(oe({replace:f},A(E.to),{state:typeof E.to=="object"?oe({},re,E.to.state):re,force:ve}),F||v)}else E=Mn(v,U,!0,f,re);return an(v,U,E),E})}function Ne(w,F){const L=O(w,F);return L?Promise.reject(L):Promise.resolve()}function Be(w){const F=as.values().next().value;return F&&typeof F.runWithContext=="function"?F.runWithContext(w):w()}function ot(w,F){let L;const[U,re,ve]=vF(w,F);L=qa(U.reverse(),"beforeRouteLeave",w,F);for(const g of U)g.leaveGuards.forEach(v=>{L.push(gn(v,w,F))});const f=Ne.bind(null,w,F);return L.push(f),at(L).then(()=>{L=[];for(const g of i.list())L.push(gn(g,w,F));return L.push(f),at(L)}).then(()=>{L=qa(re,"beforeRouteUpdate",w,F);for(const g of re)g.updateGuards.forEach(v=>{L.push(gn(v,w,F))});return L.push(f),at(L)}).then(()=>{L=[];for(const g of ve)if(g.beforeEnter)if(wt(g.beforeEnter))for(const v of g.beforeEnter)L.push(gn(v,w,F));else L.push(gn(g.beforeEnter,w,F));return L.push(f),at(L)}).then(()=>(w.matched.forEach(g=>g.enterCallbacks={}),L=qa(ve,"beforeRouteEnter",w,F,Be),L.push(f),at(L))).then(()=>{L=[];for(const g of o.list())L.push(gn(g,w,F));return L.push(f),at(L)}).catch(g=>Bt(g,8)?g:Promise.reject(g))}function an(w,F,L){a.list().forEach(U=>Be(()=>U(w,F,L)))}function Mn(w,F,L,U,re){const ve=O(w,F);if(ve)return ve;const f=F===hn,g=hs?history.state:{};L&&(U||f?r.replace(w.fullPath,oe({scroll:f&&g&&g.scroll},re)):r.push(w.fullPath,re)),l.value=w,St(w,F,L,f),ln()}let It;function Js(){It||(It=r.listen((w,F,L)=>{if(!yi.listening)return;const U=T(w),re=ee(U);if(re){Q(oe(re,{replace:!0}),U).catch(Tr);return}c=U;const ve=l.value;hs&&WM(of(ve.fullPath,L.delta),ca()),ot(U,ve).catch(f=>Bt(f,12)?f:Bt(f,2)?(Q(f.to,U).then(g=>{Bt(g,20)&&!L.delta&&L.type===Jr.pop&&r.go(-1,!1)}).catch(Tr),Promise.reject()):(L.delta&&r.go(-L.delta,!1),te(f,U,ve))).then(f=>{f=f||Mn(U,ve,!1),f&&(L.delta&&!Bt(f,8)?r.go(-L.delta,!1):L.type===Jr.pop&&Bt(f,20)&&r.go(-1,!1)),an(U,ve,f)}).catch(Tr)}))}let is=cr(),Te=cr(),ae;function te(w,F,L){ln(w);const U=Te.list();return U.length?U.forEach(re=>re(w,F,L)):console.error(w),Promise.reject(w)}function Ut(){return ae&&l.value!==hn?Promise.resolve():new Promise((w,F)=>{is.add([w,F])})}function ln(w){return ae||(ae=!w,Js(),is.list().forEach(([F,L])=>w?L(w):F()),is.reset()),w}function St(w,F,L,U){const{scrollBehavior:re}=t;if(!hs||!re)return Promise.resolve();const ve=!L&&VM(of(w.fullPath,0))||(U||!L)&&history.state&&history.state.scroll||null;return nc().then(()=>re(w,F,ve)).then(f=>f&&HM(f)).catch(f=>te(f,w,F))}const Ge=w=>r.go(w);let os;const as=new Set,yi={currentRoute:l,listening:!0,addRoute:p,removeRoute:m,clearRoutes:e.clearRoutes,hasRoute:b,getRoutes:_,resolve:T,options:t,push:D,replace:B,go:Ge,back:()=>Ge(-1),forward:()=>Ge(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Te.add,isReady:Ut,install(w){const F=this;w.component("RouterLink",dF),w.component("RouterView",mF),w.config.globalProperties.$router=F,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>_s(l)}),hs&&!os&&l.value===hn&&(os=!0,D(r.location).catch(re=>{}));const L={};for(const re in hn)Object.defineProperty(L,re,{get:()=>l.value[re],enumerable:!0});w.provide(ua,F),w.provide(yu,jf(L)),w.provide(Wl,l);const U=w.unmount;as.add(w),w.unmount=function(){as.delete(w),as.size<1&&(c=hn,It&&It(),It=null,l.value=hn,os=!1,ae=!1),U()}}};function at(w){return w.reduce((F,L)=>F.then(()=>Be(L)),Promise.resolve())}return yi}function vF(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>ks(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>ks(c,l))||r.push(l))}return[n,s,r]}function jF(){return yt(ua)}function qF(t){return yt(yu)}const yF=ei({name:"HomeView",props:{isLogin:{type:Boolean,default:!1}},setup(){const t=dt(!1),e=dt([]),n=dt([]),s=new Array,r=dt(s),i=dt(""),o=dt("");return ic(()=>{wl(wA,a=>{const l=a.val();e.value=Object.values(l)},a=>{console.error("讀取專案資料時出錯",a)}),wl(CA,a=>{const l=a.val();n.value=Object.values(l)},a=>{console.error("讀取理監事資料時出錯",a)})}),{isLoading:t,projects:e,supervisors:n,visibleEmails:r,message:i,result:o}},methods:{toggleLogin(){this.$emit("toggleLogin")},toggleEmail(t){this.visibleEmails.includes(t)?this.visibleEmails.splice(this.visibleEmails.indexOf(t),1):this.visibleEmails.push(t)},sendMessage(){this.isLoading=!0,console.log(this.message),this.message.endsWith("？")||(this.message+="？"),we.get("https://members-backend.alearn13994229.workers.dev/ai/"+this.message,{headers:{"Content-Type":"application/json"}}).then(t=>{console.log(t),this.result=t.data,this.isLoading=!1})},parseResult(t){return t==="。"?"請說得詳細一點":t},sendFeedback(t){console.log(t),t==="good"?(console.log("good"),window.alert("感謝您的回饋！")):t==="bad"&&(console.log("bad"),window.confirm("請告訴我們哪裡做得不好，我們會努力改進！")?this.$router.push("/feedback"):window.alert("感謝您的回饋！"))}}}),Ef="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAACDCAIAAAAs6NoaAAAAA3NCSVQICAjb4U/gAAAHtklEQVR4nO3dwXHbOBSA4aedLUDuwLccQ5XgCuKUoEMKyC232BUkHcQFZCZqY09iAT4wFZgdcA/ccCGAAEEQoPXM/5vMjk0+AiBtPgMghd11XSelHQ5S13I+S1UVrwvAVWlbEZH9Pkthf2cpBQDGZUpVvVUS1ocPUlV52w1gg3ZrDAkBIIe/XrsBABCLhAVADRIWADVIWADUIGEBKOZwkJsbaZpc5RmvNdT1f694Ddx3EYghhhhiZsW0rfzzj52zkuvqBvf3ncjFv1+/OktazJcv3Y8f3cvLGnURQwwx1xNTVZ1Id3eXqy6jh/X+vZ3h3Fc902J+/pTnZ6mq/z+aU64uYogh5tpi3r0T633P1LpWeXGUzxIC25T73mfSHYAaJCwAapCwAKjB8jIAijmf7an0ZUhYAEpiPSwA28R6WADUYNIdgBokLABqkLAAqEHCAqAGCQtAMbnXwyJhASipbTO+O7pKwjqd5Okp7wuvADZolYT1+CjHY8ZuIYBtYkgIQA0SFgA1SFgA1CBhAVCD5WUAFMN6WAA0YT0sANvEelgA1GDSHYAaJCwAapCwAKhBwnpNd3d3Dw8P5pbv378fDoe2bU+n08Hw9PTUxw9bPn786MbXdd00jXng3PL7+OPxaO41yx9tfyC+b49VvtWega/9x+Nx9Hyt9g8Wtifh+s/7wSMVrzW8pqZp9pcPT9u2reu6vwHM7NA0Tf/f5s9nyPsYK75pmqqqzANvb29nld+3pw8zjzLLd9sfju+/CJyvWeBo+4ewcPt9xc5tT8L13/MQfNThIE0j57Nc/h4mo4cFoCTWwwKwTayHBUANhoQA1CBhAVCDhAVADRIWADV4DwtAMayHBUAT1sMCsE2rJKzLj2sBQBom3QGoQcICoAYJC4AaJCwAapCwABRzOMjNTcaFD0hYAEpiPSwA28R6WADUYEgIQA0SFgA1SFgA1CBhAVCD5WUAFMN6WAA0YT0sANvEelgA1GDSHYAaJCwAapCwAKhBwgKgBgkLQDGshwVAE9bDArBNrIcFQA2GhADUIGEBUIOEBUANEhYANVheBkAxrIcFQBPWwwKwTayHBUANJt0BqEHCAqAGCQuAGiQsAGqQsAAUw3pYADRhPSwA28R6WADUYEgIQA0SFgA1SFgA1CBhAVBj13Vd8UoOB6lrOZ+lqorXpU3btvvLdSzathWR/X7fXj5X7cPMjeaWId53YHz5bkVW+aPtD8SbB/rO1z0w3LDI00xuT8L1F4zqr1im60PCymy324lIwlXd7Wb/LIa6hmMTCgkf5e5yT3D0cHOjFRBubfgCTp5p2hWAFqyHlV/aDWPmnUnWXd0fO2zpv3bbY20fLXN0u9UqX5YJHGgF9Lt8p2xlN1+x8Q1OZlYRPmtf9vTtcgshz8bgz1FmS+6W+N5ZTMcnvjFze1gxtcT0sNxmx7ckUP6ktMsy61u5TKzxlxdhTLovMtpxmAzzCfxaj27sDfUO/SxzV+Co+F2RTUrgGyqmlRZz4HCJJsPcfuVwVHivFWDtClSBSazpvpSbs3xh4ZFOeFfMuMzd5RY1ZARfgaO7rKLMLDl5Oj5ugdYXkzezrwQVWUBLO68NCWuptDHX8jGCOfcRnsOa1WbfrvD4a3JWy9ckt9j4sW3akHDWXGEaX/8reQyLAUNCrbo/Zu0ahEd/s8aGvjZYc9Juq9yx0uSdHG7VwqF3vISWIwsSlj7urWLNYcXHjwYH9vraM8qtOuZ0wrXI5ejP3BhfYxbhKa2APti6UG9W7vWwGBIutfIvnDvdE7N9uEnE/9KAtXeyL2NOKk/G+MTc9tZo1633tXo3o5c0xs6Z0HzLvbOs62GtkrBOJ2lbub9/k69iRc5hJZcfP/81WUJ47im+loQbLNz182XbQuIzafg5iTnvNuuChGe4ELBKwnp8lLqWqtrCm+7xfDdn4MaQ6B6QjHVJAtXNeiTnzoj7do1uH+IDXTPz65ihrhsQLnxu78/91vqhkHHWwZDw1fiGP5G/9+EbMjBeM6sIZCurJcM9GUgNw4xMzCn40pAE+32+MLfxkw2IET/aJWetg4S11JVMmk52W0aDR781t0fmDisg/pqM5tO5B84amiVnlll/S7Y1S7UiEtZSpeewFrZk9FaJbHPaXT2UHx6yLTR094bHo+YX4WOLZisURcJSJnDnR3aUwoUsbNKsOazsLSlhdJA72YcyAwK7Ro9FAAlLmSXvEEwWYhUYX1q4dvPx/+QwM+ZZhPncc+hb+QpMFp6Pc6fkfQGBXb5j347zOe//LouEtdT1PIlfX+CFCZeVYubW5Q4zA62aW3igxkIBV/jTLCXry0ysh7VUxknu8N6MI7uEA+MPCb+WYW2ZO8Xu5sfRmf4NpYONuca/2wAwis8SAlCDhAVADRIWADVIWADUIGEBKCb3elgkLAAlZV0Pa5WEdTrJ01PeF14BbNAqCevxUY7HjN1CANvEkBCAGiQsAGqQsACocfnh58+fpa4vtnz7Zi/EnhDz/DxSc6G6iCGGmDcc05nu7zuRi3+/fnWWtBiR7nxeqS5iiCHmemJeXrqXl1x1Xa7W0DT2s7zbW7m9vdiSEPPpkzw/y/l8kSwL1UUMMcS83ZhVlpd5eJDfv+XrV7t9ADDHv2/b4eELVrgCAAAAAElFTkSuQmCC",bF="/assets/main-B2ZSMcEb.png",EF="/assets/autolearn_donate_QRCode-CzydMDc6.png",wF={class:"ui container"},CF={class:"ui two column stackable segment padded grid"},IF={class:"column"},SF={class:"ui input"},TF={class:"result"},AF={key:0},RF={key:1},PF={class:"ui two stackable cards"},OF={class:"card"},NF={class:"content"},kF={class:"description"},DF={key:0},xF=["href"],LF={key:1};function MF(t,e,n,s,r,i){return be(),We("main",wF,[R("div",CF,[e[12]||(e[12]=ya('<div class="sixteen wide center aligned column" id="main-column" data-v-2e3e76e3><h1 class="ui header" id="main-title" data-v-2e3e76e3>自主學習促進會</h1></div><div class="column right-bordered" data-v-2e3e76e3><h2 class="ui header" data-v-2e3e76e3>本會網站改版中，請點擊<br class="thin-only" data-v-2e3e76e3><a class="text-underline" href="https://sites.google.com/view/autoalearn/%E9%A6%96%E9%A0%81" data-v-2e3e76e3>這裡前往舊版官方網站</a></h2><img id="donate" src="'+Ef+'" alt="愛心碼" data-v-2e3e76e3><p data-v-2e3e76e3>自主學習，就是學習自主。</p><p data-v-2e3e76e3>與他律到自主的過程，一般會經過解放散漫、自我中心、眼高手低和自主成熟這四個階段。</p><p data-v-2e3e76e3>在解放散漫期需要安全感和健康的生活節奏、自我中心期需要明確界限、眼高手低期需要踏實的累積與創作。</p><p data-v-2e3e76e3>這些需要成人有意識的提點和支持。</p><p data-v-2e3e76e3>因此，本會致力於促進自主學習與教育的土壤。</p></div>',2)),R("div",IF,[e[10]||(e[10]=R("img",{id:"main",src:bF,alt:"logo"},null,-1)),e[11]||(e[11]=R("h2",{class:"left aligned ui header"},[ye("自學AI"),R("div",{class:"left aligned ui sub header"},"以自學問答集為基礎，提供更即時的回答")],-1)),R("div",SF,[Oi(R("input",{type:"text",placeholder:"問AI關於自學的任何問題...","onUpdate:modelValue":e[0]||(e[0]=o=>t.message=o),onKeyup:e[1]||(e[1]=db((...o)=>t.sendMessage&&t.sendMessage(...o),["enter"]))},null,544),[[il,t.message]])]),R("button",{class:"ui primary button",onClick:e[2]||(e[2]=(...o)=>t.sendMessage&&t.sendMessage(...o))},"送出"),R("div",TF,[t.result===""&&t.message!==""&&t.isLoading?(be(),We("p",AF,"載入中，請稍候...")):t.result!==""?(be(),We("p",RF,[ye(Ga(t.parseResult(t.result)),1),e[7]||(e[7]=R("br",null,null,-1)),e[8]||(e[8]=R("br",null,null,-1)),e[9]||(e[9]=ye("您覺得這個回答怎麼樣呢？")),R("button",{class:"ui basic green button",onClick:e[3]||(e[3]=o=>t.sendFeedback("good"))},e[5]||(e[5]=[R("i",{class:"thumbs up icon"},null,-1),ye("很棒")])),R("button",{class:"ui basic red button",onClick:e[4]||(e[4]=o=>t.sendFeedback("bad"))},e[6]||(e[6]=[R("i",{class:"thumbs down icon"},null,-1),ye("不佳")]))])):Pt("",!0)])])]),e[17]||(e[17]=R("div",{class:"ui divider"},null,-1)),R("div",PF,[e[15]||(e[15]=ya('<div class="card" data-v-2e3e76e3><div class="content" data-v-2e3e76e3><div class="header" data-v-2e3e76e3>本會歷史</div><div class="description" data-v-2e3e76e3><p data-v-2e3e76e3>自主學習促進會的歷史可追溯至1994年種籽親子實驗小學的創立，這是台灣民主學校的先驅。</p><p data-v-2e3e76e3>1998年，台北市自主學習實驗計畫開始，為期六年，證明了自主學習理念在中學階段的可行性。</p><p data-v-2e3e76e3>2000年，面臨停辦危機時，學生發起了台灣首次中學生自發的學運，成功爭取續辦至第三屆學生畢業。</p><p data-v-2e3e76e3>2001年3月，為延續自主學習的經驗與知識，本會正式成立。</p><p data-v-2e3e76e3>2006-2008年間，本會通過&quot;自學中心&quot;提供課程和營隊，幫助體制內學生體驗自主學習。</p><p data-v-2e3e76e3>2008-2010年，&quot;自主培力學園&quot;為拒學、懼學和想自學的青少年提供全日制團體學習。</p><p data-v-2e3e76e3>2009年起，獨立教育工作者社群成立，致力於開設學習團體、培訓教師、支持家長，並開發自學資源。</p><p data-v-2e3e76e3>本會持續致力於推動自主學習理念，為台灣教育改革提供新方向和活力。</p></div></div></div>',1)),R("div",OF,[R("div",NF,[e[14]||(e[14]=R("div",{class:"header"},"本會專案一覽",-1)),R("div",kF,[e[13]||(e[13]=R("ul",null,[R("li",null,[R("a",{href:"https://sites.google.com/view/autoalearn/%E9%A6%96%E9%A0%81",target:"_blank",rel:"noopener noreferrer"},"舊版官方網站")]),R("li",null,[R("a",{href:"https://www.facebook.com/alearnTW",target:"_blank",rel:"noopener noreferrer"},"臉書「自主學習促進會」專頁")]),R("li",null,[R("a",{href:"https://www.facebook.com/groups/homeschooltw",target:"_blank",rel:"noopener noreferrer"},"臉書「在家自學社群」社團")]),R("li",null,[R("a",{href:"https://lin.ee/CashU46",target:"_blank",rel:"noopener noreferrer"},"自學AI聊天機器人@Line")])],-1)),t.projects.length?(be(),We("ul",DF,[(be(!0),We(ft,null,ey(t.projects,o=>(be(),We("li",{key:o.id},[R("a",{href:o.website,target:"_blank",rel:"noopener noreferrer"},Ga(o.full_name),9,xF)]))),128))])):(be(),We("p",LF,"載入中..."))])])]),e[16]||(e[16]=ya('<div class="card" data-v-2e3e76e3><div class="content" data-v-2e3e76e3><div class="header" data-v-2e3e76e3>以愛心碼捐助本會</div><div class="description" data-v-2e3e76e3><p data-v-2e3e76e3>本會是一個非營利組織，需要您的支持。</p><p data-v-2e3e76e3>愛心碼取為「9806」，是因為最初成立的契機，在於1998~2006年的「台北市自主學習（中學六年一貫）實驗計畫」，本會第一代會員多是計畫中的親師生及關注計畫的學者賢達，別具意義。</p><p data-v-2e3e76e3>邀請並歡迎大家未來在開立電子發票的商家購物時，可主動向店員要求使用愛心碼，說出捐贈碼9806，或出示條碼即可。發票若中獎，將會自動捐入本會！</p><img id="donate" src="'+Ef+'" alt="愛心碼" data-v-2e3e76e3></div></div></div><div class="card" data-v-2e3e76e3><div class="content" data-v-2e3e76e3><div class="header" data-v-2e3e76e3>線上捐款</div><div class="description" data-v-2e3e76e3><p data-v-2e3e76e3>請掃描</p><img id="donate-qrcode" src="'+EF+'" alt="線上捐款" data-v-2e3e76e3><p data-v-2e3e76e3>或使用以下捐款帳戶：</p><br data-v-2e3e76e3>台北富邦 士林分行（012）<br data-v-2e3e76e3>帳號：30012-0000601<br data-v-2e3e76e3>戶名：社團法人中華民國自主學習促進會</div></div></div>',2))])])}const FF=_u(yF,[["render",MF],["__scopeId","data-v-2e3e76e3"]]),UF=_F({history:zM("/"),routes:[{path:"/",name:"home",component:FF},{path:"/doc",name:"DocView",component:()=>ht(()=>import("./DocView-yVsHiZQ5.js"),__vite__mapDeps([0,1]))},{path:"/changelog",name:"ChangeLogView",component:()=>ht(()=>import("./ChangeLogView-CLuhSGbu.js"),__vite__mapDeps([2,3]))},{path:"/maps",name:"MapsView",component:()=>ht(()=>import("./MapsView-CxQdBRwn.js"),__vite__mapDeps([4,5,6,7,8,9,10]))},{path:"/flag/:uid",name:"FlagView",component:()=>ht(()=>import("./FlagView-CqMPPmug.js"),__vite__mapDeps([11,9,12,13,7,8,14]))},{path:"/profile",name:"ProfileView",component:()=>ht(()=>import("./ProfileView-mejET_05.js"),__vite__mapDeps([15,12,9,13,5,6,16]))},{path:"/privacy-policy",name:"PrivacyPolicyView",component:()=>ht(()=>import("./PrivacyPolicyView-Fo8yxNN0.js"),__vite__mapDeps([17,18]))},{path:"/feedback",name:"FeedbackView",component:()=>ht(()=>import("./FeedbackView-O8GYs6Ka.js"),__vite__mapDeps([19,20]))},{path:"/faq",name:"FaqView",component:()=>ht(()=>import("./FaqView-IVkBY_ms.js"),__vite__mapDeps([21,22]))},{path:"/create_faq",name:"CreateFaqView",component:()=>ht(()=>import("./CreateFaqView-1Px3a8AP.js"),__vite__mapDeps([23,24]))},{path:"/edit_faq/:id",name:"EditFaqView",component:()=>ht(()=>import("./EditFaqView-0PSOLxle.js"),__vite__mapDeps([25,26]))},{path:"/about",name:"about",component:()=>ht(()=>import("./AboutView-DLINsza3.js"),__vite__mapDeps([27,28]))}]}),bu=gb(pM);bu.use(bb());bu.use(UF);bu.mount("#app");export{lb as A,ci as B,pi as C,KI as D,zc as E,ft as F,WF as G,tr as H,we as I,HF as J,qF as K,wA as L,CA as M,_u as _,ya as a,ic as b,We as c,ei as d,wl as e,VF as f,R as g,ey as h,Pt as i,Ai as j,ye as k,dn as l,Ci as m,Oi as n,be as o,SA as p,_e as q,dt as r,De as s,Ga as t,jF as u,$F as v,vr as w,il as x,Kn as y,BF as z};
