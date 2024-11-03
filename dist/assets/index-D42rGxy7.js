const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AboutView-KHGOYhWy.js","assets/AboutView-CTwSeMp2.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ka(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const re={},zn=[],gt=()=>{},Vg=()=>!1,xr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),xa=t=>t.startsWith("onUpdate:"),Ie=Object.assign,Da=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Gg=Object.prototype.hasOwnProperty,Z=(t,e)=>Gg.call(t,e),H=Array.isArray,Yn=t=>mi(t)==="[object Map]",Dr=t=>mi(t)==="[object Set]",Zl=t=>mi(t)==="[object Date]",V=t=>typeof t=="function",me=t=>typeof t=="string",vt=t=>typeof t=="symbol",he=t=>t!==null&&typeof t=="object",$h=t=>(he(t)||V(t))&&V(t.then)&&V(t.catch),Fh=Object.prototype.toString,mi=t=>Fh.call(t),Kg=t=>mi(t).slice(8,-1),Uh=t=>mi(t)==="[object Object]",Ma=t=>me(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Hs=ka(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Mr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},qg=/-(\w)/g,Xe=Mr(t=>t.replace(qg,(e,n)=>n?n.toUpperCase():"")),zg=/\B([A-Z])/g,Dn=Mr(t=>t.replace(zg,"-$1").toLowerCase()),Lr=Mr(t=>t.charAt(0).toUpperCase()+t.slice(1)),uo=Mr(t=>t?`on${Lr(t)}`:""),Zt=(t,e)=>!Object.is(t,e),Vi=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Hh=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},jo=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ec;const $r=()=>ec||(ec=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function La(t){if(H(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=me(s)?Xg(s):La(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(me(t)||he(t))return t}const Yg=/;(?![^(]*\))/g,Qg=/:([^]+)/,Jg=/\/\*[^]*?\*\//g;function Xg(t){const e={};return t.replace(Jg,"").split(Yg).forEach(n=>{if(n){const s=n.split(Qg);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Tn(t){let e="";if(me(t))e=t;else if(H(t))for(let n=0;n<t.length;n++){const s=Tn(t[n]);s&&(e+=s+" ")}else if(he(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Zg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",e_=ka(Zg);function Bh(t){return!!t||t===""}function t_(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Fr(t[s],e[s]);return n}function Fr(t,e){if(t===e)return!0;let n=Zl(t),s=Zl(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=vt(t),s=vt(e),n||s)return t===e;if(n=H(t),s=H(e),n||s)return n&&s?t_(t,e):!1;if(n=he(t),s=he(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Fr(t[o],e[o]))return!1}}return String(t)===String(e)}function Wh(t,e){return t.findIndex(n=>Fr(n,e))}const jh=t=>!!(t&&t.__v_isRef===!0),Vh=t=>me(t)?t:t==null?"":H(t)||he(t)&&(t.toString===Fh||!V(t.toString))?jh(t)?Vh(t.value):JSON.stringify(t,Gh,2):String(t),Gh=(t,e)=>jh(e)?Gh(t,e.value):Yn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[ho(s,r)+" =>"]=i,n),{})}:Dr(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>ho(n))}:vt(e)?ho(e):he(e)&&!H(e)&&!Uh(e)?String(e):e,ho=(t,e="")=>{var n;return vt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let je;class Kh{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=je,!e&&je&&(this.index=(je.scopes||(je.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=je;try{return je=this,e()}finally{je=n}}}on(){je=this}off(){je=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function n_(t){return new Kh(t)}function s_(){return je}let ce;const fo=new WeakSet;class qh{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,je&&je.active&&je.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,fo.has(this)&&(fo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Yh(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,tc(this),Qh(this);const e=ce,n=rt;ce=this,rt=!0;try{return this.fn()}finally{Jh(this),ce=e,rt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ua(e);this.deps=this.depsTail=void 0,tc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?fo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Vo(this)&&this.run()}get dirty(){return Vo(this)}}let zh=0,Bs,Ws;function Yh(t,e=!1){if(t.flags|=8,e){t.next=Ws,Ws=t;return}t.next=Bs,Bs=t}function $a(){zh++}function Fa(){if(--zh>0)return;if(Ws){let e=Ws;for(Ws=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Bs;){let e=Bs;for(Bs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Qh(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Jh(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),Ua(s),i_(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function Vo(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Xh(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Xh(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ti))return;t.globalVersion=ti;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Vo(t)){t.flags&=-3;return}const n=ce,s=rt;ce=t,rt=!0;try{Qh(t);const i=t.fn(t._value);(e.version===0||Zt(i,t._value))&&(t._value=i,e.version++)}catch(i){throw e.version++,i}finally{ce=n,rt=s,Jh(t),t.flags&=-3}}function Ua(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)Ua(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function i_(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let rt=!0;const Zh=[];function ln(){Zh.push(rt),rt=!1}function cn(){const t=Zh.pop();rt=t===void 0?!0:t}function tc(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ce;ce=void 0;try{e()}finally{ce=n}}}let ti=0;class r_{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ha{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ce||!rt||ce===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ce)n=this.activeLink=new r_(ce,this),ce.deps?(n.prevDep=ce.depsTail,ce.depsTail.nextDep=n,ce.depsTail=n):ce.deps=ce.depsTail=n,ed(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=ce.depsTail,n.nextDep=void 0,ce.depsTail.nextDep=n,ce.depsTail=n,ce.deps===n&&(ce.deps=s)}return n}trigger(e){this.version++,ti++,this.notify(e)}notify(e){$a();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Fa()}}}function ed(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)ed(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Go=new WeakMap,Cn=Symbol(""),Ko=Symbol(""),ni=Symbol("");function Se(t,e,n){if(rt&&ce){let s=Go.get(t);s||Go.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new Ha),i.map=s,i.key=n),i.track()}}function Tt(t,e,n,s,i,r){const o=Go.get(t);if(!o){ti++;return}const a=l=>{l&&l.trigger()};if($a(),e==="clear")o.forEach(a);else{const l=H(t),c=l&&Ma(n);if(l&&n==="length"){const u=Number(s);o.forEach((h,d)=>{(d==="length"||d===ni||!vt(d)&&d>=u)&&a(h)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(ni)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Cn)),Yn(t)&&a(o.get(Ko)));break;case"delete":l||(a(o.get(Cn)),Yn(t)&&a(o.get(Ko)));break;case"set":Yn(t)&&a(o.get(Cn));break}}Fa()}function Hn(t){const e=X(t);return e===t?e:(Se(e,"iterate",ni),Je(t)?e:e.map(Re))}function Ur(t){return Se(t=X(t),"iterate",ni),t}const o_={__proto__:null,[Symbol.iterator](){return po(this,Symbol.iterator,Re)},concat(...t){return Hn(this).concat(...t.map(e=>H(e)?Hn(e):e))},entries(){return po(this,"entries",t=>(t[1]=Re(t[1]),t))},every(t,e){return wt(this,"every",t,e,void 0,arguments)},filter(t,e){return wt(this,"filter",t,e,n=>n.map(Re),arguments)},find(t,e){return wt(this,"find",t,e,Re,arguments)},findIndex(t,e){return wt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return wt(this,"findLast",t,e,Re,arguments)},findLastIndex(t,e){return wt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return wt(this,"forEach",t,e,void 0,arguments)},includes(...t){return go(this,"includes",t)},indexOf(...t){return go(this,"indexOf",t)},join(t){return Hn(this).join(t)},lastIndexOf(...t){return go(this,"lastIndexOf",t)},map(t,e){return wt(this,"map",t,e,void 0,arguments)},pop(){return Ps(this,"pop")},push(...t){return Ps(this,"push",t)},reduce(t,...e){return nc(this,"reduce",t,e)},reduceRight(t,...e){return nc(this,"reduceRight",t,e)},shift(){return Ps(this,"shift")},some(t,e){return wt(this,"some",t,e,void 0,arguments)},splice(...t){return Ps(this,"splice",t)},toReversed(){return Hn(this).toReversed()},toSorted(t){return Hn(this).toSorted(t)},toSpliced(...t){return Hn(this).toSpliced(...t)},unshift(...t){return Ps(this,"unshift",t)},values(){return po(this,"values",Re)}};function po(t,e,n){const s=Ur(t),i=s[e]();return s!==t&&!Je(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=n(r.value)),r}),i}const a_=Array.prototype;function wt(t,e,n,s,i,r){const o=Ur(t),a=o!==t&&!Je(t),l=o[e];if(l!==a_[e]){const h=l.apply(t,r);return a?Re(h):h}let c=n;o!==t&&(a?c=function(h,d){return n.call(this,Re(h),d,t)}:n.length>2&&(c=function(h,d){return n.call(this,h,d,t)}));const u=l.call(o,c,s);return a&&i?i(u):u}function nc(t,e,n,s){const i=Ur(t);let r=n;return i!==t&&(Je(t)?n.length>3&&(r=function(o,a,l){return n.call(this,o,a,l,t)}):r=function(o,a,l){return n.call(this,o,Re(a),l,t)}),i[e](r,...s)}function go(t,e,n){const s=X(t);Se(s,"iterate",ni);const i=s[e](...n);return(i===-1||i===!1)&&ja(n[0])?(n[0]=X(n[0]),s[e](...n)):i}function Ps(t,e,n=[]){ln(),$a();const s=X(t)[e].apply(t,n);return Fa(),cn(),s}const l_=ka("__proto__,__v_isRef,__isVue"),td=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(vt));function c_(t){vt(t)||(t=String(t));const e=X(this);return Se(e,"has",t),e.hasOwnProperty(t)}class nd{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?y_:od:r?rd:id).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=H(e);if(!i){let l;if(o&&(l=o_[n]))return l;if(n==="hasOwnProperty")return c_}const a=Reflect.get(e,n,Ne(e)?e:s);return(vt(n)?td.has(n):l_(n))||(i||Se(e,"get",n),r)?a:Ne(a)?o&&Ma(n)?a:a.value:he(a)?i?ld(a):Hr(a):a}}class sd extends nd{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const l=Sn(r);if(!Je(s)&&!Sn(s)&&(r=X(r),s=X(s)),!H(e)&&Ne(r)&&!Ne(s))return l?!1:(r.value=s,!0)}const o=H(e)&&Ma(n)?Number(n)<e.length:Z(e,n),a=Reflect.set(e,n,s,Ne(e)?e:i);return e===X(i)&&(o?Zt(s,r)&&Tt(e,"set",n,s):Tt(e,"add",n,s)),a}deleteProperty(e,n){const s=Z(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&Tt(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!vt(n)||!td.has(n))&&Se(e,"has",n),s}ownKeys(e){return Se(e,"iterate",H(e)?"length":Cn),Reflect.ownKeys(e)}}class u_ extends nd{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const h_=new sd,d_=new u_,f_=new sd(!0);const qo=t=>t,Li=t=>Reflect.getPrototypeOf(t);function p_(t,e,n){return function(...s){const i=this.__v_raw,r=X(i),o=Yn(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?qo:e?zo:Re;return!e&&Se(r,"iterate",l?Ko:Cn),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function $i(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function g_(t,e){const n={get(i){const r=this.__v_raw,o=X(r),a=X(i);t||(Zt(i,a)&&Se(o,"get",i),Se(o,"get",a));const{has:l}=Li(o),c=e?qo:t?zo:Re;if(l.call(o,i))return c(r.get(i));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&Se(X(i),"iterate",Cn),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,o=X(r),a=X(i);return t||(Zt(i,a)&&Se(o,"has",i),Se(o,"has",a)),i===a?r.has(i):r.has(i)||r.has(a)},forEach(i,r){const o=this,a=o.__v_raw,l=X(a),c=e?qo:t?zo:Re;return!t&&Se(l,"iterate",Cn),a.forEach((u,h)=>i.call(r,c(u),c(h),o))}};return Ie(n,t?{add:$i("add"),set:$i("set"),delete:$i("delete"),clear:$i("clear")}:{add(i){!e&&!Je(i)&&!Sn(i)&&(i=X(i));const r=X(this);return Li(r).has.call(r,i)||(r.add(i),Tt(r,"add",i,i)),this},set(i,r){!e&&!Je(r)&&!Sn(r)&&(r=X(r));const o=X(this),{has:a,get:l}=Li(o);let c=a.call(o,i);c||(i=X(i),c=a.call(o,i));const u=l.call(o,i);return o.set(i,r),c?Zt(r,u)&&Tt(o,"set",i,r):Tt(o,"add",i,r),this},delete(i){const r=X(this),{has:o,get:a}=Li(r);let l=o.call(r,i);l||(i=X(i),l=o.call(r,i)),a&&a.call(r,i);const c=r.delete(i);return l&&Tt(r,"delete",i,void 0),c},clear(){const i=X(this),r=i.size!==0,o=i.clear();return r&&Tt(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=p_(i,t,e)}),n}function Ba(t,e){const n=g_(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(Z(n,i)&&i in s?n:s,i,r)}const __={get:Ba(!1,!1)},m_={get:Ba(!1,!0)},v_={get:Ba(!0,!1)};const id=new WeakMap,rd=new WeakMap,od=new WeakMap,y_=new WeakMap;function b_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function E_(t){return t.__v_skip||!Object.isExtensible(t)?0:b_(Kg(t))}function Hr(t){return Sn(t)?t:Wa(t,!1,h_,__,id)}function ad(t){return Wa(t,!1,f_,m_,rd)}function ld(t){return Wa(t,!0,d_,v_,od)}function Wa(t,e,n,s,i){if(!he(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=E_(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function Qn(t){return Sn(t)?Qn(t.__v_raw):!!(t&&t.__v_isReactive)}function Sn(t){return!!(t&&t.__v_isReadonly)}function Je(t){return!!(t&&t.__v_isShallow)}function ja(t){return t?!!t.__v_raw:!1}function X(t){const e=t&&t.__v_raw;return e?X(e):t}function cd(t){return!Z(t,"__v_skip")&&Object.isExtensible(t)&&Hh(t,"__v_skip",!0),t}const Re=t=>he(t)?Hr(t):t,zo=t=>he(t)?ld(t):t;function Ne(t){return t?t.__v_isRef===!0:!1}function en(t){return ud(t,!1)}function w_(t){return ud(t,!0)}function ud(t,e){return Ne(t)?t:new C_(t,e)}class C_{constructor(e,n){this.dep=new Ha,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:X(e),this._value=n?e:Re(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||Je(e)||Sn(e);e=s?e:X(e),Zt(e,n)&&(this._rawValue=e,this._value=s?e:Re(e),this.dep.trigger())}}function Jn(t){return Ne(t)?t.value:t}const I_={get:(t,e,n)=>e==="__v_raw"?t:Jn(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Ne(i)&&!Ne(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function hd(t){return Qn(t)?t:new Proxy(t,I_)}class T_{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Ha(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ti-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&ce!==this)return Yh(this,!0),!0}get value(){const e=this.dep.track();return Xh(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function S_(t,e,n=!1){let s,i;return V(t)?s=t:(s=t.get,i=t.set),new T_(s,i,n)}const Fi={},er=new WeakMap;let mn;function R_(t,e=!1,n=mn){if(n){let s=er.get(n);s||er.set(n,s=[]),s.push(t)}}function A_(t,e,n=re){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:a,call:l}=n,c=x=>i?x:Je(x)||i===!1||i===0?St(x,1):St(x);let u,h,d,g,m=!1,b=!1;if(Ne(t)?(h=()=>t.value,m=Je(t)):Qn(t)?(h=()=>c(t),m=!0):H(t)?(b=!0,m=t.some(x=>Qn(x)||Je(x)),h=()=>t.map(x=>{if(Ne(x))return x.value;if(Qn(x))return c(x);if(V(x))return l?l(x,2):x()})):V(t)?e?h=l?()=>l(t,2):t:h=()=>{if(d){ln();try{d()}finally{cn()}}const x=mn;mn=u;try{return l?l(t,3,[g]):t(g)}finally{mn=x}}:h=gt,e&&i){const x=h,z=i===!0?1/0:i;h=()=>St(x(),z)}const O=s_(),k=()=>{u.stop(),O&&Da(O.effects,u)};if(r&&e){const x=e;e=(...z)=>{x(...z),k()}}let P=b?new Array(t.length).fill(Fi):Fi;const M=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(e){const z=u.run();if(i||m||(b?z.some((_e,ae)=>Zt(_e,P[ae])):Zt(z,P))){d&&d();const _e=mn;mn=u;try{const ae=[z,P===Fi?void 0:b&&P[0]===Fi?[]:P,g];l?l(e,3,ae):e(...ae),P=z}finally{mn=_e}}}else u.run()};return a&&a(M),u=new qh(h),u.scheduler=o?()=>o(M,!1):M,g=x=>R_(x,!1,u),d=u.onStop=()=>{const x=er.get(u);if(x){if(l)l(x,4);else for(const z of x)z();er.delete(u)}},e?s?M(!0):P=u.run():o?o(M.bind(null,!0),!0):u.run(),k.pause=u.pause.bind(u),k.resume=u.resume.bind(u),k.stop=k,k}function St(t,e=1/0,n){if(e<=0||!he(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Ne(t))St(t.value,e,n);else if(H(t))for(let s=0;s<t.length;s++)St(t[s],e,n);else if(Dr(t)||Yn(t))t.forEach(s=>{St(s,e,n)});else if(Uh(t)){for(const s in t)St(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&St(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function vi(t,e,n,s){try{return s?t(...s):t()}catch(i){Br(i,e,n)}}function yt(t,e,n,s){if(V(t)){const i=vi(t,e,n,s);return i&&$h(i)&&i.catch(r=>{Br(r,e,n)}),i}if(H(t)){const i=[];for(let r=0;r<t.length;r++)i.push(yt(t[r],e,n,s));return i}}function Br(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||re;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](t,l,c)===!1)return}a=a.parent}if(r){ln(),vi(r,null,10,[t,l,c]),cn();return}}P_(t,n,i,s,o)}function P_(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const xe=[];let dt=-1;const Xn=[];let Vt=null,Wn=0;const dd=Promise.resolve();let tr=null;function fd(t){const e=tr||dd;return t?e.then(this?t.bind(this):t):e}function O_(t){let e=dt+1,n=xe.length;for(;e<n;){const s=e+n>>>1,i=xe[s],r=si(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function Va(t){if(!(t.flags&1)){const e=si(t),n=xe[xe.length-1];!n||!(t.flags&2)&&e>=si(n)?xe.push(t):xe.splice(O_(e),0,t),t.flags|=1,pd()}}function pd(){tr||(tr=dd.then(_d))}function N_(t){H(t)?Xn.push(...t):Vt&&t.id===-1?Vt.splice(Wn+1,0,t):t.flags&1||(Xn.push(t),t.flags|=1),pd()}function sc(t,e,n=dt+1){for(;n<xe.length;n++){const s=xe[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;xe.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function gd(t){if(Xn.length){const e=[...new Set(Xn)].sort((n,s)=>si(n)-si(s));if(Xn.length=0,Vt){Vt.push(...e);return}for(Vt=e,Wn=0;Wn<Vt.length;Wn++){const n=Vt[Wn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Vt=null,Wn=0}}const si=t=>t.id==null?t.flags&2?-1:1/0:t.id;function _d(t){try{for(dt=0;dt<xe.length;dt++){const e=xe[dt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),vi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;dt<xe.length;dt++){const e=xe[dt];e&&(e.flags&=-2)}dt=-1,xe.length=0,gd(),tr=null,(xe.length||Xn.length)&&_d()}}let Ve=null,md=null;function nr(t){const e=Ve;return Ve=t,md=t&&t.type.__scopeId||null,e}function Fs(t,e=Ve,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&dc(-1);const r=nr(e);let o;try{o=t(...i)}finally{nr(r),s._d&&dc(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function _o(t,e){if(Ve===null)return t;const n=Gr(Ve),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,a,l=re]=e[i];r&&(V(r)&&(r={mounted:r,updated:r}),r.deep&&St(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function gn(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(ln(),yt(l,n,8,[t.el,a,t,e]),cn())}}const k_=Symbol("_vte"),x_=t=>t.__isTeleport;function Ga(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ga(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function yi(t,e){return V(t)?Ie({name:t.name},e,{setup:t}):t}function vd(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Yo(t,e,n,s,i=!1){if(H(t)){t.forEach((m,b)=>Yo(m,e&&(H(e)?e[b]:e),n,s,i));return}if(js(s)&&!i)return;const r=s.shapeFlag&4?Gr(s.component):s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===re?a.refs={}:a.refs,h=a.setupState,d=X(h),g=h===re?()=>!1:m=>Z(d,m);if(c!=null&&c!==l&&(me(c)?(u[c]=null,g(c)&&(h[c]=null)):Ne(c)&&(c.value=null)),V(l))vi(l,a,12,[o,u]);else{const m=me(l),b=Ne(l);if(m||b){const O=()=>{if(t.f){const k=m?g(l)?h[l]:u[l]:l.value;i?H(k)&&Da(k,r):H(k)?k.includes(r)||k.push(r):m?(u[l]=[r],g(l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else m?(u[l]=o,g(l)&&(h[l]=o)):b&&(l.value=o,t.k&&(u[t.k]=o))};o?(O.id=-1,We(O,n)):O()}}}$r().requestIdleCallback;$r().cancelIdleCallback;const js=t=>!!t.type.__asyncLoader,yd=t=>t.type.__isKeepAlive;function D_(t,e){bd(t,"a",e)}function M_(t,e){bd(t,"da",e)}function bd(t,e,n=Oe){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Wr(e,s,n),n){let i=n.parent;for(;i&&i.parent;)yd(i.parent.vnode)&&L_(s,e,n,i),i=i.parent}}function L_(t,e,n,s){const i=Wr(e,t,s,!0);Ed(()=>{Da(s[e],i)},n)}function Wr(t,e,n=Oe,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{ln();const a=bi(n),l=yt(e,n,t,o);return a(),cn(),l});return s?i.unshift(r):i.push(r),r}}const $t=t=>(e,n=Oe)=>{(!ri||t==="sp")&&Wr(t,(...s)=>e(...s),n)},$_=$t("bm"),Ka=$t("m"),F_=$t("bu"),U_=$t("u"),H_=$t("bum"),Ed=$t("um"),B_=$t("sp"),W_=$t("rtg"),j_=$t("rtc");function V_(t,e=Oe){Wr("ec",t,e)}const G_="components";function mo(t,e){return q_(G_,t,!0,e)||t}const K_=Symbol.for("v-ndc");function q_(t,e,n=!0,s=!1){const i=Ve||Oe;if(i){const r=i.type;{const a=Mm(r,!1);if(a&&(a===e||a===Xe(e)||a===Lr(Xe(e))))return r}const o=ic(i[t]||r[t],e)||ic(i.appContext[t],e);return!o&&s?r:o}}function ic(t,e){return t&&(t[e]||t[Xe(e)]||t[Lr(Xe(e))])}function z_(t,e,n,s){let i;const r=n,o=H(t);if(o||me(t)){const a=o&&Qn(t);let l=!1;a&&(l=!Je(t),t=Ur(t)),i=new Array(t.length);for(let c=0,u=t.length;c<u;c++)i[c]=e(l?Re(t[c]):t[c],c,void 0,r)}else if(typeof t=="number"){i=new Array(t);for(let a=0;a<t;a++)i[a]=e(a+1,a,void 0,r)}else if(he(t))if(t[Symbol.iterator])i=Array.from(t,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(t);i=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];i[l]=e(t[u],u,l,r)}}else i=[];return i}const Qo=t=>t?jd(t)?Gr(t):Qo(t.parent):null,Vs=Ie(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Qo(t.parent),$root:t=>Qo(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>qa(t),$forceUpdate:t=>t.f||(t.f=()=>{Va(t.update)}),$nextTick:t=>t.n||(t.n=fd.bind(t.proxy)),$watch:t=>gm.bind(t)}),vo=(t,e)=>t!==re&&!t.__isScriptSetup&&Z(t,e),Y_={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(vo(s,e))return o[e]=1,s[e];if(i!==re&&Z(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&Z(c,e))return o[e]=3,r[e];if(n!==re&&Z(n,e))return o[e]=4,n[e];Jo&&(o[e]=0)}}const u=Vs[e];let h,d;if(u)return e==="$attrs"&&Se(t.attrs,"get",""),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==re&&Z(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,Z(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return vo(i,e)?(i[e]=n,!0):s!==re&&Z(s,e)?(s[e]=n,!0):Z(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==re&&Z(t,o)||vo(e,o)||(a=r[0])&&Z(a,o)||Z(s,o)||Z(Vs,o)||Z(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Z(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function rc(t){return H(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Jo=!0;function Q_(t){const e=qa(t),n=t.proxy,s=t.ctx;Jo=!1,e.beforeCreate&&oc(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:g,updated:m,activated:b,deactivated:O,beforeDestroy:k,beforeUnmount:P,destroyed:M,unmounted:x,render:z,renderTracked:_e,renderTriggered:ae,errorCaptured:qe,serverPrefetch:ze,expose:Ye,inheritAttrs:Ht,components:pn,directives:lt,filters:Rs}=e;if(c&&J_(c,s,null),o)for(const se in o){const J=o[se];V(J)&&(s[se]=J.bind(n))}if(i){const se=i.call(n,n);he(se)&&(t.data=Hr(se))}if(Jo=!0,r)for(const se in r){const J=r[se],Et=V(J)?J.bind(n,n):V(J.get)?J.get.bind(n,n):gt,Bt=!V(J)&&V(J.set)?J.set.bind(n):gt,ct=tt({get:Et,set:Bt});Object.defineProperty(s,se,{enumerable:!0,configurable:!0,get:()=>ct.value,set:Me=>ct.value=Me})}if(a)for(const se in a)wd(a[se],s,n,se);if(l){const se=V(l)?l.call(n):l;Reflect.ownKeys(se).forEach(J=>{Gi(J,se[J])})}u&&oc(u,t,"c");function be(se,J){H(J)?J.forEach(Et=>se(Et.bind(n))):J&&se(J.bind(n))}if(be($_,h),be(Ka,d),be(F_,g),be(U_,m),be(D_,b),be(M_,O),be(V_,qe),be(j_,_e),be(W_,ae),be(H_,P),be(Ed,x),be(B_,ze),H(Ye))if(Ye.length){const se=t.exposed||(t.exposed={});Ye.forEach(J=>{Object.defineProperty(se,J,{get:()=>n[J],set:Et=>n[J]=Et})})}else t.exposed||(t.exposed={});z&&t.render===gt&&(t.render=z),Ht!=null&&(t.inheritAttrs=Ht),pn&&(t.components=pn),lt&&(t.directives=lt),ze&&vd(t)}function J_(t,e,n=gt){H(t)&&(t=Xo(t));for(const s in t){const i=t[s];let r;he(i)?"default"in i?r=Nt(i.from||s,i.default,!0):r=Nt(i.from||s):r=Nt(i),Ne(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function oc(t,e,n){yt(H(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function wd(t,e,n,s){let i=s.includes(".")?Ld(n,s):()=>n[s];if(me(t)){const r=e[t];V(r)&&Gs(i,r)}else if(V(t))Gs(i,t.bind(n));else if(he(t))if(H(t))t.forEach(r=>wd(r,e,n,s));else{const r=V(t.handler)?t.handler.bind(n):e[t.handler];V(r)&&Gs(i,r,t)}}function qa(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>sr(l,c,o,!0)),sr(l,e,o)),he(e)&&r.set(e,l),l}function sr(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&sr(t,r,n,!0),i&&i.forEach(o=>sr(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=X_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const X_={data:ac,props:lc,emits:lc,methods:Us,computed:Us,beforeCreate:ke,created:ke,beforeMount:ke,mounted:ke,beforeUpdate:ke,updated:ke,beforeDestroy:ke,beforeUnmount:ke,destroyed:ke,unmounted:ke,activated:ke,deactivated:ke,errorCaptured:ke,serverPrefetch:ke,components:Us,directives:Us,watch:em,provide:ac,inject:Z_};function ac(t,e){return e?t?function(){return Ie(V(t)?t.call(this,this):t,V(e)?e.call(this,this):e)}:e:t}function Z_(t,e){return Us(Xo(t),Xo(e))}function Xo(t){if(H(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ke(t,e){return t?[...new Set([].concat(t,e))]:e}function Us(t,e){return t?Ie(Object.create(null),t,e):e}function lc(t,e){return t?H(t)&&H(e)?[...new Set([...t,...e])]:Ie(Object.create(null),rc(t),rc(e??{})):e}function em(t,e){if(!t)return e;if(!e)return t;const n=Ie(Object.create(null),t);for(const s in e)n[s]=ke(t[s],e[s]);return n}function Cd(){return{app:null,config:{isNativeTag:Vg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let tm=0;function nm(t,e){return function(s,i=null){V(s)||(s=Ie({},s)),i!=null&&!he(i)&&(i=null);const r=Cd(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:tm++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:$m,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&V(u.install)?(o.add(u),u.install(c,...h)):V(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,d){if(!l){const g=c._ceVNode||ve(s,i);return g.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),h&&e?e(g,u):t(g,u,d),l=!0,c._container=u,u.__vue_app__=c,Gr(g.component)}},onUnmount(u){a.push(u)},unmount(){l&&(yt(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=Zn;Zn=c;try{return u()}finally{Zn=h}}};return c}}let Zn=null;function Gi(t,e){if(Oe){let n=Oe.provides;const s=Oe.parent&&Oe.parent.provides;s===n&&(n=Oe.provides=Object.create(s)),n[t]=e}}function Nt(t,e,n=!1){const s=Oe||Ve;if(s||Zn){const i=Zn?Zn._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&V(e)?e.call(s&&s.proxy):e}}const Id={},Td=()=>Object.create(Id),Sd=t=>Object.getPrototypeOf(t)===Id;function sm(t,e,n,s=!1){const i={},r=Td();t.propsDefaults=Object.create(null),Rd(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:ad(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function im(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=X(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(jr(t.emitsOptions,d))continue;const g=e[d];if(l)if(Z(r,d))g!==r[d]&&(r[d]=g,c=!0);else{const m=Xe(d);i[m]=Zo(l,a,m,g,t,!1)}else g!==r[d]&&(r[d]=g,c=!0)}}}else{Rd(t,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!Z(e,h)&&((u=Dn(h))===h||!Z(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Zo(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!Z(e,h))&&(delete r[h],c=!0)}c&&Tt(t.attrs,"set","")}function Rd(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Hs(l))continue;const c=e[l];let u;i&&Z(i,u=Xe(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:jr(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=X(n),c=a||re;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Zo(i,l,h,c[h],t,!Z(c,h))}}return o}function Zo(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=Z(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&V(l)){const{propsDefaults:c}=i;if(n in c)s=c[n];else{const u=bi(i);s=c[n]=l.call(null,e),u()}}else s=l;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Dn(n))&&(s=!0))}return s}const rm=new WeakMap;function Ad(t,e,n=!1){const s=n?rm:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!V(t)){const u=h=>{l=!0;const[d,g]=Ad(h,e,!0);Ie(o,d),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return he(t)&&s.set(t,zn),zn;if(H(r))for(let u=0;u<r.length;u++){const h=Xe(r[u]);cc(h)&&(o[h]=re)}else if(r)for(const u in r){const h=Xe(u);if(cc(h)){const d=r[u],g=o[h]=H(d)||V(d)?{type:d}:Ie({},d),m=g.type;let b=!1,O=!0;if(H(m))for(let k=0;k<m.length;++k){const P=m[k],M=V(P)&&P.name;if(M==="Boolean"){b=!0;break}else M==="String"&&(O=!1)}else b=V(m)&&m.name==="Boolean";g[0]=b,g[1]=O,(b||Z(g,"default"))&&a.push(h)}}const c=[o,a];return he(t)&&s.set(t,c),c}function cc(t){return t[0]!=="$"&&!Hs(t)}const Pd=t=>t[0]==="_"||t==="$stable",za=t=>H(t)?t.map(ft):[ft(t)],om=(t,e,n)=>{if(e._n)return e;const s=Fs((...i)=>za(e(...i)),n);return s._c=!1,s},Od=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Pd(i))continue;const r=t[i];if(V(r))e[i]=om(i,r,s);else if(r!=null){const o=za(r);e[i]=()=>o}}},Nd=(t,e)=>{const n=za(e);t.slots.default=()=>n},kd=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},am=(t,e,n)=>{const s=t.slots=Td();if(t.vnode.shapeFlag&32){const i=e._;i?(kd(s,e,n),n&&Hh(s,"_",i,!0)):Od(e,s)}else e&&Nd(t,e)},lm=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=re;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:kd(i,e,n):(r=!e.$stable,Od(e,i)),o=e}else e&&(Nd(t,e),o={default:1});if(r)for(const a in i)!Pd(a)&&o[a]==null&&delete i[a]},We=wm;function cm(t){return um(t)}function um(t,e){const n=$r();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:g=gt,insertStaticContent:m}=t,b=(f,p,_,E=null,v=null,w=null,R=void 0,S=null,T=!!p.dynamicChildren)=>{if(f===p)return;f&&!Os(f,p)&&(E=y(f),Me(f,v,w,!0),f=null),p.patchFlag===-2&&(T=!1,p.dynamicChildren=null);const{type:C,ref:U,shapeFlag:N}=p;switch(C){case Vr:O(f,p,_,E);break;case Rn:k(f,p,_,E);break;case Ki:f==null&&P(p,_,E,R);break;case et:pn(f,p,_,E,v,w,R,S,T);break;default:N&1?z(f,p,_,E,v,w,R,S,T):N&6?lt(f,p,_,E,v,w,R,S,T):(N&64||N&128)&&C.process(f,p,_,E,v,w,R,S,T,L)}U!=null&&v&&Yo(U,f&&f.ref,w,p||f,!p)},O=(f,p,_,E)=>{if(f==null)s(p.el=a(p.children),_,E);else{const v=p.el=f.el;p.children!==f.children&&c(v,p.children)}},k=(f,p,_,E)=>{f==null?s(p.el=l(p.children||""),_,E):p.el=f.el},P=(f,p,_,E)=>{[f.el,f.anchor]=m(f.children,p,_,E,f.el,f.anchor)},M=({el:f,anchor:p},_,E)=>{let v;for(;f&&f!==p;)v=d(f),s(f,_,E),f=v;s(p,_,E)},x=({el:f,anchor:p})=>{let _;for(;f&&f!==p;)_=d(f),i(f),f=_;i(p)},z=(f,p,_,E,v,w,R,S,T)=>{p.type==="svg"?R="svg":p.type==="math"&&(R="mathml"),f==null?_e(p,_,E,v,w,R,S,T):ze(f,p,v,w,R,S,T)},_e=(f,p,_,E,v,w,R,S)=>{let T,C;const{props:U,shapeFlag:N,transition:$,dirs:j}=f;if(T=f.el=o(f.type,w,U&&U.is,U),N&8?u(T,f.children):N&16&&qe(f.children,T,null,E,v,yo(f,w),R,S),j&&gn(f,null,E,"created"),ae(T,f,f.scopeId,R,E),U){for(const le in U)le!=="value"&&!Hs(le)&&r(T,le,null,U[le],w,E);"value"in U&&r(T,"value",null,U.value,w),(C=U.onVnodeBeforeMount)&&ht(C,E,f)}j&&gn(f,null,E,"beforeMount");const Y=hm(v,$);Y&&$.beforeEnter(T),s(T,p,_),((C=U&&U.onVnodeMounted)||Y||j)&&We(()=>{C&&ht(C,E,f),Y&&$.enter(T),j&&gn(f,null,E,"mounted")},v)},ae=(f,p,_,E,v)=>{if(_&&g(f,_),E)for(let w=0;w<E.length;w++)g(f,E[w]);if(v){let w=v.subTree;if(p===w||Fd(w.type)&&(w.ssContent===p||w.ssFallback===p)){const R=v.vnode;ae(f,R,R.scopeId,R.slotScopeIds,v.parent)}}},qe=(f,p,_,E,v,w,R,S,T=0)=>{for(let C=T;C<f.length;C++){const U=f[C]=S?Gt(f[C]):ft(f[C]);b(null,U,p,_,E,v,w,R,S)}},ze=(f,p,_,E,v,w,R)=>{const S=p.el=f.el;let{patchFlag:T,dynamicChildren:C,dirs:U}=p;T|=f.patchFlag&16;const N=f.props||re,$=p.props||re;let j;if(_&&_n(_,!1),(j=$.onVnodeBeforeUpdate)&&ht(j,_,p,f),U&&gn(p,f,_,"beforeUpdate"),_&&_n(_,!0),(N.innerHTML&&$.innerHTML==null||N.textContent&&$.textContent==null)&&u(S,""),C?Ye(f.dynamicChildren,C,S,_,E,yo(p,v),w):R||J(f,p,S,null,_,E,yo(p,v),w,!1),T>0){if(T&16)Ht(S,N,$,_,v);else if(T&2&&N.class!==$.class&&r(S,"class",null,$.class,v),T&4&&r(S,"style",N.style,$.style,v),T&8){const Y=p.dynamicProps;for(let le=0;le<Y.length;le++){const te=Y[le],Ue=N[te],Te=$[te];(Te!==Ue||te==="value")&&r(S,te,Ue,Te,v,_)}}T&1&&f.children!==p.children&&u(S,p.children)}else!R&&C==null&&Ht(S,N,$,_,v);((j=$.onVnodeUpdated)||U)&&We(()=>{j&&ht(j,_,p,f),U&&gn(p,f,_,"updated")},E)},Ye=(f,p,_,E,v,w,R)=>{for(let S=0;S<p.length;S++){const T=f[S],C=p[S],U=T.el&&(T.type===et||!Os(T,C)||T.shapeFlag&70)?h(T.el):_;b(T,C,U,null,E,v,w,R,!0)}},Ht=(f,p,_,E,v)=>{if(p!==_){if(p!==re)for(const w in p)!Hs(w)&&!(w in _)&&r(f,w,p[w],null,v,E);for(const w in _){if(Hs(w))continue;const R=_[w],S=p[w];R!==S&&w!=="value"&&r(f,w,S,R,v,E)}"value"in _&&r(f,"value",p.value,_.value,v)}},pn=(f,p,_,E,v,w,R,S,T)=>{const C=p.el=f?f.el:a(""),U=p.anchor=f?f.anchor:a("");let{patchFlag:N,dynamicChildren:$,slotScopeIds:j}=p;j&&(S=S?S.concat(j):j),f==null?(s(C,_,E),s(U,_,E),qe(p.children||[],_,U,v,w,R,S,T)):N>0&&N&64&&$&&f.dynamicChildren?(Ye(f.dynamicChildren,$,_,v,w,R,S),(p.key!=null||v&&p===v.subTree)&&xd(f,p,!0)):J(f,p,_,U,v,w,R,S,T)},lt=(f,p,_,E,v,w,R,S,T)=>{p.slotScopeIds=S,f==null?p.shapeFlag&512?v.ctx.activate(p,_,E,R,T):Rs(p,_,E,v,w,R,T):$n(f,p,T)},Rs=(f,p,_,E,v,w,R)=>{const S=f.component=Om(f,E,v);if(yd(f)&&(S.ctx.renderer=L),Nm(S,!1,R),S.asyncDep){if(v&&v.registerDep(S,be,R),!f.el){const T=S.subTree=ve(Rn);k(null,T,p,_)}}else be(S,f,p,_,v,w,R)},$n=(f,p,_)=>{const E=p.component=f.component;if(bm(f,p,_))if(E.asyncDep&&!E.asyncResolved){se(E,p,_);return}else E.next=p,E.update();else p.el=f.el,E.vnode=p},be=(f,p,_,E,v,w,R)=>{const S=()=>{if(f.isMounted){let{next:N,bu:$,u:j,parent:Y,vnode:le}=f;{const He=Dd(f);if(He){N&&(N.el=le.el,se(f,N,R)),He.asyncDep.then(()=>{f.isUnmounted||S()});return}}let te=N,Ue;_n(f,!1),N?(N.el=le.el,se(f,N,R)):N=le,$&&Vi($),(Ue=N.props&&N.props.onVnodeBeforeUpdate)&&ht(Ue,Y,N,le),_n(f,!0);const Te=bo(f),Ze=f.subTree;f.subTree=Te,b(Ze,Te,h(Ze.el),y(Ze),f,v,w),N.el=Te.el,te===null&&Em(f,Te.el),j&&We(j,v),(Ue=N.props&&N.props.onVnodeUpdated)&&We(()=>ht(Ue,Y,N,le),v)}else{let N;const{el:$,props:j}=p,{bm:Y,m:le,parent:te,root:Ue,type:Te}=f,Ze=js(p);if(_n(f,!1),Y&&Vi(Y),!Ze&&(N=j&&j.onVnodeBeforeMount)&&ht(N,te,p),_n(f,!0),$&&pe){const He=()=>{f.subTree=bo(f),pe($,f.subTree,f,v,null)};Ze&&Te.__asyncHydrate?Te.__asyncHydrate($,f,He):He()}else{Ue.ce&&Ue.ce._injectChildStyle(Te);const He=f.subTree=bo(f);b(null,He,_,E,f,v,w),p.el=He.el}if(le&&We(le,v),!Ze&&(N=j&&j.onVnodeMounted)){const He=p;We(()=>ht(N,te,He),v)}(p.shapeFlag&256||te&&js(te.vnode)&&te.vnode.shapeFlag&256)&&f.a&&We(f.a,v),f.isMounted=!0,p=_=E=null}};f.scope.on();const T=f.effect=new qh(S);f.scope.off();const C=f.update=T.run.bind(T),U=f.job=T.runIfDirty.bind(T);U.i=f,U.id=f.uid,T.scheduler=()=>Va(U),_n(f,!0),C()},se=(f,p,_)=>{p.component=f;const E=f.vnode.props;f.vnode=p,f.next=null,im(f,p.props,E,_),lm(f,p.children,_),ln(),sc(f),cn()},J=(f,p,_,E,v,w,R,S,T=!1)=>{const C=f&&f.children,U=f?f.shapeFlag:0,N=p.children,{patchFlag:$,shapeFlag:j}=p;if($>0){if($&128){Bt(C,N,_,E,v,w,R,S,T);return}else if($&256){Et(C,N,_,E,v,w,R,S,T);return}}j&8?(U&16&&Qe(C,v,w),N!==C&&u(_,N)):U&16?j&16?Bt(C,N,_,E,v,w,R,S,T):Qe(C,v,w,!0):(U&8&&u(_,""),j&16&&qe(N,_,E,v,w,R,S,T))},Et=(f,p,_,E,v,w,R,S,T)=>{f=f||zn,p=p||zn;const C=f.length,U=p.length,N=Math.min(C,U);let $;for($=0;$<N;$++){const j=p[$]=T?Gt(p[$]):ft(p[$]);b(f[$],j,_,null,v,w,R,S,T)}C>U?Qe(f,v,w,!0,!1,N):qe(p,_,E,v,w,R,S,T,N)},Bt=(f,p,_,E,v,w,R,S,T)=>{let C=0;const U=p.length;let N=f.length-1,$=U-1;for(;C<=N&&C<=$;){const j=f[C],Y=p[C]=T?Gt(p[C]):ft(p[C]);if(Os(j,Y))b(j,Y,_,null,v,w,R,S,T);else break;C++}for(;C<=N&&C<=$;){const j=f[N],Y=p[$]=T?Gt(p[$]):ft(p[$]);if(Os(j,Y))b(j,Y,_,null,v,w,R,S,T);else break;N--,$--}if(C>N){if(C<=$){const j=$+1,Y=j<U?p[j].el:E;for(;C<=$;)b(null,p[C]=T?Gt(p[C]):ft(p[C]),_,Y,v,w,R,S,T),C++}}else if(C>$)for(;C<=N;)Me(f[C],v,w,!0),C++;else{const j=C,Y=C,le=new Map;for(C=Y;C<=$;C++){const Be=p[C]=T?Gt(p[C]):ft(p[C]);Be.key!=null&&le.set(Be.key,C)}let te,Ue=0;const Te=$-Y+1;let Ze=!1,He=0;const As=new Array(Te);for(C=0;C<Te;C++)As[C]=0;for(C=j;C<=N;C++){const Be=f[C];if(Ue>=Te){Me(Be,v,w,!0);continue}let ut;if(Be.key!=null)ut=le.get(Be.key);else for(te=Y;te<=$;te++)if(As[te-Y]===0&&Os(Be,p[te])){ut=te;break}ut===void 0?Me(Be,v,w,!0):(As[ut-Y]=C+1,ut>=He?He=ut:Ze=!0,b(Be,p[ut],_,null,v,w,R,S,T),Ue++)}const Jl=Ze?dm(As):zn;for(te=Jl.length-1,C=Te-1;C>=0;C--){const Be=Y+C,ut=p[Be],Xl=Be+1<U?p[Be+1].el:E;As[C]===0?b(null,ut,_,Xl,v,w,R,S,T):Ze&&(te<0||C!==Jl[te]?ct(ut,_,Xl,2):te--)}}},ct=(f,p,_,E,v=null)=>{const{el:w,type:R,transition:S,children:T,shapeFlag:C}=f;if(C&6){ct(f.component.subTree,p,_,E);return}if(C&128){f.suspense.move(p,_,E);return}if(C&64){R.move(f,p,_,L);return}if(R===et){s(w,p,_);for(let N=0;N<T.length;N++)ct(T[N],p,_,E);s(f.anchor,p,_);return}if(R===Ki){M(f,p,_);return}if(E!==2&&C&1&&S)if(E===0)S.beforeEnter(w),s(w,p,_),We(()=>S.enter(w),v);else{const{leave:N,delayLeave:$,afterLeave:j}=S,Y=()=>s(w,p,_),le=()=>{N(w,()=>{Y(),j&&j()})};$?$(w,Y,le):le()}else s(w,p,_)},Me=(f,p,_,E=!1,v=!1)=>{const{type:w,props:R,ref:S,children:T,dynamicChildren:C,shapeFlag:U,patchFlag:N,dirs:$,cacheIndex:j}=f;if(N===-2&&(v=!1),S!=null&&Yo(S,null,_,f,!0),j!=null&&(p.renderCache[j]=void 0),U&256){p.ctx.deactivate(f);return}const Y=U&1&&$,le=!js(f);let te;if(le&&(te=R&&R.onVnodeBeforeUnmount)&&ht(te,p,f),U&6)Mi(f.component,_,E);else{if(U&128){f.suspense.unmount(_,E);return}Y&&gn(f,null,p,"beforeUnmount"),U&64?f.type.remove(f,p,_,L,E):C&&!C.hasOnce&&(w!==et||N>0&&N&64)?Qe(C,p,_,!1,!0):(w===et&&N&384||!v&&U&16)&&Qe(T,p,_),E&&Fn(f)}(le&&(te=R&&R.onVnodeUnmounted)||Y)&&We(()=>{te&&ht(te,p,f),Y&&gn(f,null,p,"unmounted")},_)},Fn=f=>{const{type:p,el:_,anchor:E,transition:v}=f;if(p===et){Un(_,E);return}if(p===Ki){x(f);return}const w=()=>{i(_),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:R,delayLeave:S}=v,T=()=>R(_,w);S?S(f.el,w,T):T()}else w()},Un=(f,p)=>{let _;for(;f!==p;)_=d(f),i(f),f=_;i(p)},Mi=(f,p,_)=>{const{bum:E,scope:v,job:w,subTree:R,um:S,m:T,a:C}=f;uc(T),uc(C),E&&Vi(E),v.stop(),w&&(w.flags|=8,Me(R,f,p,_)),S&&We(S,p),We(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Qe=(f,p,_,E=!1,v=!1,w=0)=>{for(let R=w;R<f.length;R++)Me(f[R],p,_,E,v)},y=f=>{if(f.shapeFlag&6)return y(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const p=d(f.anchor||f.el),_=p&&p[k_];return _?d(_):p};let D=!1;const A=(f,p,_)=>{f==null?p._vnode&&Me(p._vnode,null,null,!0):b(p._vnode||null,f,p,null,null,null,_),p._vnode=f,D||(D=!0,sc(),gd(),D=!1)},L={p:b,um:Me,m:ct,r:Fn,mt:Rs,mc:qe,pc:J,pbc:Ye,n:y,o:t};let ee,pe;return{render:A,hydrate:ee,createApp:nm(A,ee)}}function yo({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function _n({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function hm(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function xd(t,e,n=!1){const s=t.children,i=e.children;if(H(s)&&H(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Gt(i[r]),a.el=o.el),!n&&a.patchFlag!==-2&&xd(o,a)),a.type===Vr&&(a.el=o.el)}}function dm(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Dd(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Dd(e)}function uc(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const fm=Symbol.for("v-scx"),pm=()=>Nt(fm);function Gs(t,e,n){return Md(t,e,n)}function Md(t,e,n=re){const{immediate:s,deep:i,flush:r,once:o}=n,a=Ie({},n),l=e&&s||!e&&r!=="post";let c;if(ri){if(r==="sync"){const g=pm();c=g.__watcherHandles||(g.__watcherHandles=[])}else if(!l){const g=()=>{};return g.stop=gt,g.resume=gt,g.pause=gt,g}}const u=Oe;a.call=(g,m,b)=>yt(g,u,m,b);let h=!1;r==="post"?a.scheduler=g=>{We(g,u&&u.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(g,m)=>{m?g():Va(g)}),a.augmentJob=g=>{e&&(g.flags|=4),h&&(g.flags|=2,u&&(g.id=u.uid,g.i=u))};const d=A_(t,e,a);return ri&&(c?c.push(d):l&&d()),d}function gm(t,e,n){const s=this.proxy,i=me(t)?t.includes(".")?Ld(s,t):()=>s[t]:t.bind(s,s);let r;V(e)?r=e:(r=e.handler,n=e);const o=bi(this),a=Md(i,r.bind(s),n);return o(),a}function Ld(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const _m=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Xe(e)}Modifiers`]||t[`${Dn(e)}Modifiers`];function mm(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||re;let i=n;const r=e.startsWith("update:"),o=r&&_m(s,e.slice(7));o&&(o.trim&&(i=n.map(u=>me(u)?u.trim():u)),o.number&&(i=n.map(jo)));let a,l=s[a=uo(e)]||s[a=uo(Xe(e))];!l&&r&&(l=s[a=uo(Dn(e))]),l&&yt(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,yt(c,t,6,i)}}function $d(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!V(t)){const l=c=>{const u=$d(c,e,!0);u&&(a=!0,Ie(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(he(t)&&s.set(t,null),null):(H(r)?r.forEach(l=>o[l]=null):Ie(o,r),he(t)&&s.set(t,o),o)}function jr(t,e){return!t||!xr(e)?!1:(e=e.slice(2).replace(/Once$/,""),Z(t,e[0].toLowerCase()+e.slice(1))||Z(t,Dn(e))||Z(t,e))}function bo(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:d,setupState:g,ctx:m,inheritAttrs:b}=t,O=nr(t);let k,P;try{if(n.shapeFlag&4){const x=i||s,z=x;k=ft(c.call(z,x,u,h,g,d,m)),P=a}else{const x=e;k=ft(x.length>1?x(h,{attrs:a,slots:o,emit:l}):x(h,null)),P=e.props?a:vm(a)}}catch(x){Ks.length=0,Br(x,t,1),k=ve(Rn)}let M=k;if(P&&b!==!1){const x=Object.keys(P),{shapeFlag:z}=M;x.length&&z&7&&(r&&x.some(xa)&&(P=ym(P,r)),M=as(M,P,!1,!0))}return n.dirs&&(M=as(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&Ga(M,n.transition),k=M,nr(O),k}const vm=t=>{let e;for(const n in t)(n==="class"||n==="style"||xr(n))&&((e||(e={}))[n]=t[n]);return e},ym=(t,e)=>{const n={};for(const s in t)(!xa(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function bm(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?hc(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!jr(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?hc(s,o,c):!0:!!o;return!1}function hc(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!jr(n,r))return!0}return!1}function Em({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const Fd=t=>t.__isSuspense;function wm(t,e){e&&e.pendingBranch?H(t)?e.effects.push(...t):e.effects.push(t):N_(t)}const et=Symbol.for("v-fgt"),Vr=Symbol.for("v-txt"),Rn=Symbol.for("v-cmt"),Ki=Symbol.for("v-stc"),Ks=[];let Ge=null;function pt(t=!1){Ks.push(Ge=t?null:[])}function Cm(){Ks.pop(),Ge=Ks[Ks.length-1]||null}let ii=1;function dc(t){ii+=t,t<0&&Ge&&(Ge.hasOnce=!0)}function Ud(t){return t.dynamicChildren=ii>0?Ge||zn:null,Cm(),ii>0&&Ge&&Ge.push(t),t}function qt(t,e,n,s,i,r){return Ud(F(t,e,n,s,i,r,!0))}function Hd(t,e,n,s,i){return Ud(ve(t,e,n,s,i,!0))}function ir(t){return t?t.__v_isVNode===!0:!1}function Os(t,e){return t.type===e.type&&t.key===e.key}const Bd=({key:t})=>t??null,qi=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?me(t)||Ne(t)||V(t)?{i:Ve,r:t,k:e,f:!!n}:t:null);function F(t,e=null,n=null,s=0,i=null,r=t===et?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Bd(e),ref:e&&qi(e),scopeId:md,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Ve};return a?(Ya(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=me(n)?8:16),ii>0&&!o&&Ge&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Ge.push(l),l}const ve=Im;function Im(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===K_)&&(t=Rn),ir(t)){const a=as(t,e,!0);return n&&Ya(a,n),ii>0&&!r&&Ge&&(a.shapeFlag&6?Ge[Ge.indexOf(t)]=a:Ge.push(a)),a.patchFlag=-2,a}if(Lm(t)&&(t=t.__vccOpts),e){e=Tm(e);let{class:a,style:l}=e;a&&!me(a)&&(e.class=Tn(a)),he(l)&&(ja(l)&&!H(l)&&(l=Ie({},l)),e.style=La(l))}const o=me(t)?1:Fd(t)?128:x_(t)?64:he(t)?4:V(t)?2:0;return F(t,e,n,s,i,o,r,!0)}function Tm(t){return t?ja(t)||Sd(t)?Ie({},t):t:null}function as(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:a,transition:l}=t,c=e?Rm(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Bd(c),ref:e&&e.ref?n&&r?H(r)?r.concat(qi(e)):[r,qi(e)]:qi(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==et?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&as(t.ssContent),ssFallback:t.ssFallback&&as(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&s&&Ga(u,l.clone(u)),u}function Vn(t=" ",e=0){return ve(Vr,null,t,e)}function Sm(t,e){const n=ve(Ki,null,t);return n.staticCount=e,n}function Wd(t="",e=!1){return e?(pt(),Hd(Rn,null,t)):ve(Rn,null,t)}function ft(t){return t==null||typeof t=="boolean"?ve(Rn):H(t)?ve(et,null,t.slice()):ir(t)?Gt(t):ve(Vr,null,String(t))}function Gt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:as(t)}function Ya(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(H(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Ya(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!Sd(e)?e._ctx=Ve:i===3&&Ve&&(Ve.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else V(e)?(e={default:e,_ctx:Ve},n=32):(e=String(e),s&64?(n=16,e=[Vn(e)]):n=8);t.children=e,t.shapeFlag|=n}function Rm(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Tn([e.class,s.class]));else if(i==="style")e.style=La([e.style,s.style]);else if(xr(i)){const r=e[i],o=s[i];o&&r!==o&&!(H(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function ht(t,e,n,s=null){yt(t,e,7,[n,s])}const Am=Cd();let Pm=0;function Om(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Am,r={uid:Pm++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Kh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ad(s,i),emitsOptions:$d(s,i),emit:null,emitted:null,propsDefaults:re,inheritAttrs:s.inheritAttrs,ctx:re,data:re,props:re,attrs:re,slots:re,refs:re,setupState:re,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=mm.bind(null,r),t.ce&&t.ce(r),r}let Oe=null,rr,ea;{const t=$r(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};rr=e("__VUE_INSTANCE_SETTERS__",n=>Oe=n),ea=e("__VUE_SSR_SETTERS__",n=>ri=n)}const bi=t=>{const e=Oe;return rr(t),t.scope.on(),()=>{t.scope.off(),rr(e)}},fc=()=>{Oe&&Oe.scope.off(),rr(null)};function jd(t){return t.vnode.shapeFlag&4}let ri=!1;function Nm(t,e=!1,n=!1){e&&ea(e);const{props:s,children:i}=t.vnode,r=jd(t);sm(t,s,r,e),am(t,i,n);const o=r?km(t,e):void 0;return e&&ea(!1),o}function km(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Y_);const{setup:s}=n;if(s){ln();const i=t.setupContext=s.length>1?Dm(t):null,r=bi(t),o=vi(s,t,0,[t.props,i]),a=$h(o);if(cn(),r(),(a||t.sp)&&!js(t)&&vd(t),a){if(o.then(fc,fc),e)return o.then(l=>{pc(t,l,e)}).catch(l=>{Br(l,t,0)});t.asyncDep=o}else pc(t,o,e)}else Vd(t,e)}function pc(t,e,n){V(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:he(e)&&(t.setupState=hd(e)),Vd(t,n)}let gc;function Vd(t,e,n){const s=t.type;if(!t.render){if(!e&&gc&&!s.render){const i=s.template||qa(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Ie(Ie({isCustomElement:r,delimiters:a},o),l);s.render=gc(i,c)}}t.render=s.render||gt}{const i=bi(t);ln();try{Q_(t)}finally{cn(),i()}}}const xm={get(t,e){return Se(t,"get",""),t[e]}};function Dm(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,xm),slots:t.slots,emit:t.emit,expose:e}}function Gr(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(hd(cd(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Vs)return Vs[n](t)},has(e,n){return n in e||n in Vs}})):t.proxy}function Mm(t,e=!0){return V(t)?t.displayName||t.name:t.name||e&&t.__name}function Lm(t){return V(t)&&"__vccOpts"in t}const tt=(t,e)=>S_(t,e,ri);function Gd(t,e,n){const s=arguments.length;return s===2?he(e)&&!H(e)?ir(e)?ve(t,null,[e]):ve(t,e):ve(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&ir(n)&&(n=[n]),ve(t,e,n))}const $m="3.5.12";/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ta;const _c=typeof window<"u"&&window.trustedTypes;if(_c)try{ta=_c.createPolicy("vue",{createHTML:t=>t})}catch{}const Kd=ta?t=>ta.createHTML(t):t=>t,Fm="http://www.w3.org/2000/svg",Um="http://www.w3.org/1998/Math/MathML",It=typeof document<"u"?document:null,mc=It&&It.createElement("template"),Hm={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?It.createElementNS(Fm,t):e==="mathml"?It.createElementNS(Um,t):n?It.createElement(t,{is:n}):It.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>It.createTextNode(t),createComment:t=>It.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>It.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{mc.innerHTML=Kd(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const a=mc.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Bm=Symbol("_vtc");function Wm(t,e,n){const s=t[Bm];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const vc=Symbol("_vod"),jm=Symbol("_vsh"),Vm=Symbol(""),Gm=/(^|;)\s*display\s*:/;function Km(t,e,n){const s=t.style,i=me(n);let r=!1;if(n&&!i){if(e)if(me(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&zi(s,a,"")}else for(const o in e)n[o]==null&&zi(s,o,"");for(const o in n)o==="display"&&(r=!0),zi(s,o,n[o])}else if(i){if(e!==n){const o=s[Vm];o&&(n+=";"+o),s.cssText=n,r=Gm.test(n)}}else e&&t.removeAttribute("style");vc in t&&(t[vc]=r?s.display:"",t[jm]&&(s.display="none"))}const yc=/\s*!important$/;function zi(t,e,n){if(H(n))n.forEach(s=>zi(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=qm(t,e);yc.test(n)?t.setProperty(Dn(s),n.replace(yc,""),"important"):t[s]=n}}const bc=["Webkit","Moz","ms"],Eo={};function qm(t,e){const n=Eo[e];if(n)return n;let s=Xe(e);if(s!=="filter"&&s in t)return Eo[e]=s;s=Lr(s);for(let i=0;i<bc.length;i++){const r=bc[i]+s;if(r in t)return Eo[e]=r}return e}const Ec="http://www.w3.org/1999/xlink";function wc(t,e,n,s,i,r=e_(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Ec,e.slice(6,e.length)):t.setAttributeNS(Ec,e,n):n==null||r&&!Bh(n)?t.removeAttribute(e):t.setAttribute(e,r?"":vt(n)?String(n):n)}function Cc(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Kd(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Bh(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function En(t,e,n,s){t.addEventListener(e,n,s)}function zm(t,e,n,s){t.removeEventListener(e,n,s)}const Ic=Symbol("_vei");function Ym(t,e,n,s,i=null){const r=t[Ic]||(t[Ic]={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=Qm(e);if(s){const c=r[e]=Zm(s,i);En(t,a,c,l)}else o&&(zm(t,a,o,l),r[e]=void 0)}}const Tc=/(?:Once|Passive|Capture)$/;function Qm(t){let e;if(Tc.test(t)){e={};let s;for(;s=t.match(Tc);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Dn(t.slice(2)),e]}let wo=0;const Jm=Promise.resolve(),Xm=()=>wo||(Jm.then(()=>wo=0),wo=Date.now());function Zm(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;yt(ev(s,n.value),e,5,[s])};return n.value=t,n.attached=Xm(),n}function ev(t,e){if(H(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Sc=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,tv=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?Wm(t,s,o):e==="style"?Km(t,n,s):xr(e)?xa(e)||Ym(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):nv(t,e,s,o))?(Cc(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&wc(t,e,s,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!me(s))?Cc(t,Xe(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),wc(t,e,s,o))};function nv(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Sc(e)&&V(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Sc(e)&&me(n)?!1:e in t}const or=t=>{const e=t.props["onUpdate:modelValue"]||!1;return H(e)?n=>Vi(e,n):e};function sv(t){t.target.composing=!0}function Rc(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const es=Symbol("_assign"),Ac={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[es]=or(i);const r=s||i.props&&i.props.type==="number";En(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=jo(a)),t[es](a)}),n&&En(t,"change",()=>{t.value=t.value.trim()}),e||(En(t,"compositionstart",sv),En(t,"compositionend",Rc),En(t,"change",Rc))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[es]=or(o),t.composing)return;const a=(r||t.type==="number")&&!/^0\d/.test(t.value)?jo(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===l)||(t.value=l))}},iv={deep:!0,created(t,e,n){t[es]=or(n),En(t,"change",()=>{const s=t._modelValue,i=rv(t),r=t.checked,o=t[es];if(H(s)){const a=Wh(s,i),l=a!==-1;if(r&&!l)o(s.concat(i));else if(!r&&l){const c=[...s];c.splice(a,1),o(c)}}else if(Dr(s)){const a=new Set(s);r?a.add(i):a.delete(i),o(a)}else o(qd(t,r))})},mounted:Pc,beforeUpdate(t,e,n){t[es]=or(n),Pc(t,e,n)}};function Pc(t,{value:e,oldValue:n},s){t._modelValue=e;let i;if(H(e))i=Wh(e,s.props.value)>-1;else if(Dr(e))i=e.has(s.props.value);else{if(e===n)return;i=Fr(e,qd(t,!0))}t.checked!==i&&(t.checked=i)}function rv(t){return"_value"in t?t._value:t.value}function qd(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const ov=["ctrl","shift","alt","meta"],av={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>ov.some(n=>t[`${n}Key`]&&!e.includes(n))},Ns=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(i,...r)=>{for(let o=0;o<e.length;o++){const a=av[e[o]];if(a&&a(i,e))return}return t(i,...r)})},lv=Ie({patchProp:tv},Hm);let Oc;function cv(){return Oc||(Oc=cm(lv))}const uv=(...t)=>{const e=cv().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=dv(s);if(!i)return;const r=e._component;!V(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,hv(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function hv(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function dv(t){return me(t)?document.querySelector(t):t}var fv=!1;/*!
 * pinia v2.2.4
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */const pv=Symbol();var Nc;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Nc||(Nc={}));function gv(){const t=n_(!0),e=t.run(()=>en({}));let n=[],s=[];const i=cd({install(r){i._a=r,r.provide(pv,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!fv?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}var Ui=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function _v(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function mv(t,e,n){var s;return n(t,function(i,r,o){if(e(i,r,o))return s=r,!1}),s}var vv=mv;function yv(t){return function(e,n,s){for(var i=-1,r=Object(e),o=s(e),a=o.length;a--;){var l=o[t?a:++i];if(n(r[l],l,r)===!1)break}return e}}var bv=yv,Ev=bv,wv=Ev(),Cv=wv;function Iv(t,e){for(var n=-1,s=Array(t);++n<t;)s[n]=e(n);return s}var Tv=Iv,Sv=typeof Ui=="object"&&Ui&&Ui.Object===Object&&Ui,zd=Sv,Rv=zd,Av=typeof self=="object"&&self&&self.Object===Object&&self,Pv=Rv||Av||Function("return this")(),Ft=Pv,Ov=Ft,Nv=Ov.Symbol,Kr=Nv,kc=Kr,Yd=Object.prototype,kv=Yd.hasOwnProperty,xv=Yd.toString,ks=kc?kc.toStringTag:void 0;function Dv(t){var e=kv.call(t,ks),n=t[ks];try{t[ks]=void 0;var s=!0}catch{}var i=xv.call(t);return s&&(e?t[ks]=n:delete t[ks]),i}var Mv=Dv,Lv=Object.prototype,$v=Lv.toString;function Fv(t){return $v.call(t)}var Uv=Fv,xc=Kr,Hv=Mv,Bv=Uv,Wv="[object Null]",jv="[object Undefined]",Dc=xc?xc.toStringTag:void 0;function Vv(t){return t==null?t===void 0?jv:Wv:Dc&&Dc in Object(t)?Hv(t):Bv(t)}var Ei=Vv;function Gv(t){return t!=null&&typeof t=="object"}var wi=Gv,Kv=Ei,qv=wi,zv="[object Arguments]";function Yv(t){return qv(t)&&Kv(t)==zv}var Qv=Yv,Mc=Qv,Jv=wi,Qd=Object.prototype,Xv=Qd.hasOwnProperty,Zv=Qd.propertyIsEnumerable,ey=Mc(function(){return arguments}())?Mc:function(t){return Jv(t)&&Xv.call(t,"callee")&&!Zv.call(t,"callee")},Jd=ey,ty=Array.isArray,un=ty,ar={exports:{}};function ny(){return!1}var sy=ny;ar.exports;(function(t,e){var n=Ft,s=sy,i=e&&!e.nodeType&&e,r=i&&!0&&t&&!t.nodeType&&t,o=r&&r.exports===i,a=o?n.Buffer:void 0,l=a?a.isBuffer:void 0,c=l||s;t.exports=c})(ar,ar.exports);var Xd=ar.exports,iy=9007199254740991,ry=/^(?:0|[1-9]\d*)$/;function oy(t,e){var n=typeof t;return e=e??iy,!!e&&(n=="number"||n!="symbol"&&ry.test(t))&&t>-1&&t%1==0&&t<e}var Zd=oy,ay=9007199254740991;function ly(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=ay}var Qa=ly,cy=Ei,uy=Qa,hy=wi,dy="[object Arguments]",fy="[object Array]",py="[object Boolean]",gy="[object Date]",_y="[object Error]",my="[object Function]",vy="[object Map]",yy="[object Number]",by="[object Object]",Ey="[object RegExp]",wy="[object Set]",Cy="[object String]",Iy="[object WeakMap]",Ty="[object ArrayBuffer]",Sy="[object DataView]",Ry="[object Float32Array]",Ay="[object Float64Array]",Py="[object Int8Array]",Oy="[object Int16Array]",Ny="[object Int32Array]",ky="[object Uint8Array]",xy="[object Uint8ClampedArray]",Dy="[object Uint16Array]",My="[object Uint32Array]",de={};de[Ry]=de[Ay]=de[Py]=de[Oy]=de[Ny]=de[ky]=de[xy]=de[Dy]=de[My]=!0;de[dy]=de[fy]=de[Ty]=de[py]=de[Sy]=de[gy]=de[_y]=de[my]=de[vy]=de[yy]=de[by]=de[Ey]=de[wy]=de[Cy]=de[Iy]=!1;function Ly(t){return hy(t)&&uy(t.length)&&!!de[cy(t)]}var $y=Ly;function Fy(t){return function(e){return t(e)}}var Uy=Fy,lr={exports:{}};lr.exports;(function(t,e){var n=zd,s=e&&!e.nodeType&&e,i=s&&!0&&t&&!t.nodeType&&t,r=i&&i.exports===s,o=r&&n.process,a=function(){try{var l=i&&i.require&&i.require("util").types;return l||o&&o.binding&&o.binding("util")}catch{}}();t.exports=a})(lr,lr.exports);var Hy=lr.exports,By=$y,Wy=Uy,Lc=Hy,$c=Lc&&Lc.isTypedArray,jy=$c?Wy($c):By,ef=jy,Vy=Tv,Gy=Jd,Ky=un,qy=Xd,zy=Zd,Yy=ef,Qy=Object.prototype,Jy=Qy.hasOwnProperty;function Xy(t,e){var n=Ky(t),s=!n&&Gy(t),i=!n&&!s&&qy(t),r=!n&&!s&&!i&&Yy(t),o=n||s||i||r,a=o?Vy(t.length,String):[],l=a.length;for(var c in t)(e||Jy.call(t,c))&&!(o&&(c=="length"||i&&(c=="offset"||c=="parent")||r&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||zy(c,l)))&&a.push(c);return a}var Zy=Xy,eb=Object.prototype;function tb(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||eb;return t===n}var nb=tb;function sb(t,e){return function(n){return t(e(n))}}var ib=sb,rb=ib,ob=rb(Object.keys,Object),ab=ob,lb=nb,cb=ab,ub=Object.prototype,hb=ub.hasOwnProperty;function db(t){if(!lb(t))return cb(t);var e=[];for(var n in Object(t))hb.call(t,n)&&n!="constructor"&&e.push(n);return e}var fb=db;function pb(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var Ja=pb,gb=Ei,_b=Ja,mb="[object AsyncFunction]",vb="[object Function]",yb="[object GeneratorFunction]",bb="[object Proxy]";function Eb(t){if(!_b(t))return!1;var e=gb(t);return e==vb||e==yb||e==mb||e==bb}var tf=Eb,wb=tf,Cb=Qa;function Ib(t){return t!=null&&Cb(t.length)&&!wb(t)}var Tb=Ib,Sb=Zy,Rb=fb,Ab=Tb;function Pb(t){return Ab(t)?Sb(t):Rb(t)}var Xa=Pb,Ob=Cv,Nb=Xa;function kb(t,e){return t&&Ob(t,e,Nb)}var xb=kb;function Db(){this.__data__=[],this.size=0}var Mb=Db;function Lb(t,e){return t===e||t!==t&&e!==e}var nf=Lb,$b=nf;function Fb(t,e){for(var n=t.length;n--;)if($b(t[n][0],e))return n;return-1}var qr=Fb,Ub=qr,Hb=Array.prototype,Bb=Hb.splice;function Wb(t){var e=this.__data__,n=Ub(e,t);if(n<0)return!1;var s=e.length-1;return n==s?e.pop():Bb.call(e,n,1),--this.size,!0}var jb=Wb,Vb=qr;function Gb(t){var e=this.__data__,n=Vb(e,t);return n<0?void 0:e[n][1]}var Kb=Gb,qb=qr;function zb(t){return qb(this.__data__,t)>-1}var Yb=zb,Qb=qr;function Jb(t,e){var n=this.__data__,s=Qb(n,t);return s<0?(++this.size,n.push([t,e])):n[s][1]=e,this}var Xb=Jb,Zb=Mb,eE=jb,tE=Kb,nE=Yb,sE=Xb;function _s(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var s=t[e];this.set(s[0],s[1])}}_s.prototype.clear=Zb;_s.prototype.delete=eE;_s.prototype.get=tE;_s.prototype.has=nE;_s.prototype.set=sE;var zr=_s,iE=zr;function rE(){this.__data__=new iE,this.size=0}var oE=rE;function aE(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}var lE=aE;function cE(t){return this.__data__.get(t)}var uE=cE;function hE(t){return this.__data__.has(t)}var dE=hE,fE=Ft,pE=fE["__core-js_shared__"],gE=pE,Co=gE,Fc=function(){var t=/[^.]+$/.exec(Co&&Co.keys&&Co.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function _E(t){return!!Fc&&Fc in t}var mE=_E,vE=Function.prototype,yE=vE.toString;function bE(t){if(t!=null){try{return yE.call(t)}catch{}try{return t+""}catch{}}return""}var sf=bE,EE=tf,wE=mE,CE=Ja,IE=sf,TE=/[\\^$.*+?()[\]{}|]/g,SE=/^\[object .+?Constructor\]$/,RE=Function.prototype,AE=Object.prototype,PE=RE.toString,OE=AE.hasOwnProperty,NE=RegExp("^"+PE.call(OE).replace(TE,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function kE(t){if(!CE(t)||wE(t))return!1;var e=EE(t)?NE:SE;return e.test(IE(t))}var xE=kE;function DE(t,e){return t==null?void 0:t[e]}var ME=DE,LE=xE,$E=ME;function FE(t,e){var n=$E(t,e);return LE(n)?n:void 0}var ms=FE,UE=ms,HE=Ft,BE=UE(HE,"Map"),Za=BE,WE=ms,jE=WE(Object,"create"),Yr=jE,Uc=Yr;function VE(){this.__data__=Uc?Uc(null):{},this.size=0}var GE=VE;function KE(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var qE=KE,zE=Yr,YE="__lodash_hash_undefined__",QE=Object.prototype,JE=QE.hasOwnProperty;function XE(t){var e=this.__data__;if(zE){var n=e[t];return n===YE?void 0:n}return JE.call(e,t)?e[t]:void 0}var ZE=XE,ew=Yr,tw=Object.prototype,nw=tw.hasOwnProperty;function sw(t){var e=this.__data__;return ew?e[t]!==void 0:nw.call(e,t)}var iw=sw,rw=Yr,ow="__lodash_hash_undefined__";function aw(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=rw&&e===void 0?ow:e,this}var lw=aw,cw=GE,uw=qE,hw=ZE,dw=iw,fw=lw;function vs(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var s=t[e];this.set(s[0],s[1])}}vs.prototype.clear=cw;vs.prototype.delete=uw;vs.prototype.get=hw;vs.prototype.has=dw;vs.prototype.set=fw;var pw=vs,Hc=pw,gw=zr,_w=Za;function mw(){this.size=0,this.__data__={hash:new Hc,map:new(_w||gw),string:new Hc}}var vw=mw;function yw(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}var bw=yw,Ew=bw;function ww(t,e){var n=t.__data__;return Ew(e)?n[typeof e=="string"?"string":"hash"]:n.map}var Qr=ww,Cw=Qr;function Iw(t){var e=Cw(this,t).delete(t);return this.size-=e?1:0,e}var Tw=Iw,Sw=Qr;function Rw(t){return Sw(this,t).get(t)}var Aw=Rw,Pw=Qr;function Ow(t){return Pw(this,t).has(t)}var Nw=Ow,kw=Qr;function xw(t,e){var n=kw(this,t),s=n.size;return n.set(t,e),this.size+=n.size==s?0:1,this}var Dw=xw,Mw=vw,Lw=Tw,$w=Aw,Fw=Nw,Uw=Dw;function ys(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var s=t[e];this.set(s[0],s[1])}}ys.prototype.clear=Mw;ys.prototype.delete=Lw;ys.prototype.get=$w;ys.prototype.has=Fw;ys.prototype.set=Uw;var el=ys,Hw=zr,Bw=Za,Ww=el,jw=200;function Vw(t,e){var n=this.__data__;if(n instanceof Hw){var s=n.__data__;if(!Bw||s.length<jw-1)return s.push([t,e]),this.size=++n.size,this;n=this.__data__=new Ww(s)}return n.set(t,e),this.size=n.size,this}var Gw=Vw,Kw=zr,qw=oE,zw=lE,Yw=uE,Qw=dE,Jw=Gw;function bs(t){var e=this.__data__=new Kw(t);this.size=e.size}bs.prototype.clear=qw;bs.prototype.delete=zw;bs.prototype.get=Yw;bs.prototype.has=Qw;bs.prototype.set=Jw;var rf=bs,Xw="__lodash_hash_undefined__";function Zw(t){return this.__data__.set(t,Xw),this}var eC=Zw;function tC(t){return this.__data__.has(t)}var nC=tC,sC=el,iC=eC,rC=nC;function cr(t){var e=-1,n=t==null?0:t.length;for(this.__data__=new sC;++e<n;)this.add(t[e])}cr.prototype.add=cr.prototype.push=iC;cr.prototype.has=rC;var oC=cr;function aC(t,e){for(var n=-1,s=t==null?0:t.length;++n<s;)if(e(t[n],n,t))return!0;return!1}var lC=aC;function cC(t,e){return t.has(e)}var uC=cC,hC=oC,dC=lC,fC=uC,pC=1,gC=2;function _C(t,e,n,s,i,r){var o=n&pC,a=t.length,l=e.length;if(a!=l&&!(o&&l>a))return!1;var c=r.get(t),u=r.get(e);if(c&&u)return c==e&&u==t;var h=-1,d=!0,g=n&gC?new hC:void 0;for(r.set(t,e),r.set(e,t);++h<a;){var m=t[h],b=e[h];if(s)var O=o?s(b,m,h,e,t,r):s(m,b,h,t,e,r);if(O!==void 0){if(O)continue;d=!1;break}if(g){if(!dC(e,function(k,P){if(!fC(g,P)&&(m===k||i(m,k,n,s,r)))return g.push(P)})){d=!1;break}}else if(!(m===b||i(m,b,n,s,r))){d=!1;break}}return r.delete(t),r.delete(e),d}var of=_C,mC=Ft,vC=mC.Uint8Array,yC=vC;function bC(t){var e=-1,n=Array(t.size);return t.forEach(function(s,i){n[++e]=[i,s]}),n}var EC=bC;function wC(t){var e=-1,n=Array(t.size);return t.forEach(function(s){n[++e]=s}),n}var CC=wC,Bc=Kr,Wc=yC,IC=nf,TC=of,SC=EC,RC=CC,AC=1,PC=2,OC="[object Boolean]",NC="[object Date]",kC="[object Error]",xC="[object Map]",DC="[object Number]",MC="[object RegExp]",LC="[object Set]",$C="[object String]",FC="[object Symbol]",UC="[object ArrayBuffer]",HC="[object DataView]",jc=Bc?Bc.prototype:void 0,Io=jc?jc.valueOf:void 0;function BC(t,e,n,s,i,r,o){switch(n){case HC:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case UC:return!(t.byteLength!=e.byteLength||!r(new Wc(t),new Wc(e)));case OC:case NC:case DC:return IC(+t,+e);case kC:return t.name==e.name&&t.message==e.message;case MC:case $C:return t==e+"";case xC:var a=SC;case LC:var l=s&AC;if(a||(a=RC),t.size!=e.size&&!l)return!1;var c=o.get(t);if(c)return c==e;s|=PC,o.set(t,e);var u=TC(a(t),a(e),s,i,r,o);return o.delete(t),u;case FC:if(Io)return Io.call(t)==Io.call(e)}return!1}var WC=BC;function jC(t,e){for(var n=-1,s=e.length,i=t.length;++n<s;)t[i+n]=e[n];return t}var VC=jC,GC=VC,KC=un;function qC(t,e,n){var s=e(t);return KC(t)?s:GC(s,n(t))}var zC=qC;function YC(t,e){for(var n=-1,s=t==null?0:t.length,i=0,r=[];++n<s;){var o=t[n];e(o,n,t)&&(r[i++]=o)}return r}var QC=YC;function JC(){return[]}var XC=JC,ZC=QC,eI=XC,tI=Object.prototype,nI=tI.propertyIsEnumerable,Vc=Object.getOwnPropertySymbols,sI=Vc?function(t){return t==null?[]:(t=Object(t),ZC(Vc(t),function(e){return nI.call(t,e)}))}:eI,iI=sI,rI=zC,oI=iI,aI=Xa;function lI(t){return rI(t,aI,oI)}var cI=lI,Gc=cI,uI=1,hI=Object.prototype,dI=hI.hasOwnProperty;function fI(t,e,n,s,i,r){var o=n&uI,a=Gc(t),l=a.length,c=Gc(e),u=c.length;if(l!=u&&!o)return!1;for(var h=l;h--;){var d=a[h];if(!(o?d in e:dI.call(e,d)))return!1}var g=r.get(t),m=r.get(e);if(g&&m)return g==e&&m==t;var b=!0;r.set(t,e),r.set(e,t);for(var O=o;++h<l;){d=a[h];var k=t[d],P=e[d];if(s)var M=o?s(P,k,d,e,t,r):s(k,P,d,t,e,r);if(!(M===void 0?k===P||i(k,P,n,s,r):M)){b=!1;break}O||(O=d=="constructor")}if(b&&!O){var x=t.constructor,z=e.constructor;x!=z&&"constructor"in t&&"constructor"in e&&!(typeof x=="function"&&x instanceof x&&typeof z=="function"&&z instanceof z)&&(b=!1)}return r.delete(t),r.delete(e),b}var pI=fI,gI=ms,_I=Ft,mI=gI(_I,"DataView"),vI=mI,yI=ms,bI=Ft,EI=yI(bI,"Promise"),wI=EI,CI=ms,II=Ft,TI=CI(II,"Set"),SI=TI,RI=ms,AI=Ft,PI=RI(AI,"WeakMap"),OI=PI,na=vI,sa=Za,ia=wI,ra=SI,oa=OI,af=Ei,Es=sf,Kc="[object Map]",NI="[object Object]",qc="[object Promise]",zc="[object Set]",Yc="[object WeakMap]",Qc="[object DataView]",kI=Es(na),xI=Es(sa),DI=Es(ia),MI=Es(ra),LI=Es(oa),vn=af;(na&&vn(new na(new ArrayBuffer(1)))!=Qc||sa&&vn(new sa)!=Kc||ia&&vn(ia.resolve())!=qc||ra&&vn(new ra)!=zc||oa&&vn(new oa)!=Yc)&&(vn=function(t){var e=af(t),n=e==NI?t.constructor:void 0,s=n?Es(n):"";if(s)switch(s){case kI:return Qc;case xI:return Kc;case DI:return qc;case MI:return zc;case LI:return Yc}return e});var $I=vn,To=rf,FI=of,UI=WC,HI=pI,Jc=$I,Xc=un,Zc=Xd,BI=ef,WI=1,eu="[object Arguments]",tu="[object Array]",Hi="[object Object]",jI=Object.prototype,nu=jI.hasOwnProperty;function VI(t,e,n,s,i,r){var o=Xc(t),a=Xc(e),l=o?tu:Jc(t),c=a?tu:Jc(e);l=l==eu?Hi:l,c=c==eu?Hi:c;var u=l==Hi,h=c==Hi,d=l==c;if(d&&Zc(t)){if(!Zc(e))return!1;o=!0,u=!1}if(d&&!u)return r||(r=new To),o||BI(t)?FI(t,e,n,s,i,r):UI(t,e,l,n,s,i,r);if(!(n&WI)){var g=u&&nu.call(t,"__wrapped__"),m=h&&nu.call(e,"__wrapped__");if(g||m){var b=g?t.value():t,O=m?e.value():e;return r||(r=new To),i(b,O,n,s,r)}}return d?(r||(r=new To),HI(t,e,n,s,i,r)):!1}var GI=VI,KI=GI,su=wi;function lf(t,e,n,s,i){return t===e?!0:t==null||e==null||!su(t)&&!su(e)?t!==t&&e!==e:KI(t,e,n,s,lf,i)}var cf=lf,qI=rf,zI=cf,YI=1,QI=2;function JI(t,e,n,s){var i=n.length,r=i,o=!s;if(t==null)return!r;for(t=Object(t);i--;){var a=n[i];if(o&&a[2]?a[1]!==t[a[0]]:!(a[0]in t))return!1}for(;++i<r;){a=n[i];var l=a[0],c=t[l],u=a[1];if(o&&a[2]){if(c===void 0&&!(l in t))return!1}else{var h=new qI;if(s)var d=s(c,u,l,t,e,h);if(!(d===void 0?zI(u,c,YI|QI,s,h):d))return!1}}return!0}var XI=JI,ZI=Ja;function eT(t){return t===t&&!ZI(t)}var uf=eT,tT=uf,nT=Xa;function sT(t){for(var e=nT(t),n=e.length;n--;){var s=e[n],i=t[s];e[n]=[s,i,tT(i)]}return e}var iT=sT;function rT(t,e){return function(n){return n==null?!1:n[t]===e&&(e!==void 0||t in Object(n))}}var hf=rT,oT=XI,aT=iT,lT=hf;function cT(t){var e=aT(t);return e.length==1&&e[0][2]?lT(e[0][0],e[0][1]):function(n){return n===t||oT(n,t,e)}}var uT=cT,hT=Ei,dT=wi,fT="[object Symbol]";function pT(t){return typeof t=="symbol"||dT(t)&&hT(t)==fT}var tl=pT,gT=un,_T=tl,mT=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,vT=/^\w*$/;function yT(t,e){if(gT(t))return!1;var n=typeof t;return n=="number"||n=="symbol"||n=="boolean"||t==null||_T(t)?!0:vT.test(t)||!mT.test(t)||e!=null&&t in Object(e)}var nl=yT,df=el,bT="Expected a function";function sl(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(bT);var n=function(){var s=arguments,i=e?e.apply(this,s):s[0],r=n.cache;if(r.has(i))return r.get(i);var o=t.apply(this,s);return n.cache=r.set(i,o)||r,o};return n.cache=new(sl.Cache||df),n}sl.Cache=df;var ET=sl,wT=ET,CT=500;function IT(t){var e=wT(t,function(s){return n.size===CT&&n.clear(),s}),n=e.cache;return e}var TT=IT,ST=TT,RT=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,AT=/\\(\\)?/g,PT=ST(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(RT,function(n,s,i,r){e.push(i?r.replace(AT,"$1"):s||n)}),e}),OT=PT;function NT(t,e){for(var n=-1,s=t==null?0:t.length,i=Array(s);++n<s;)i[n]=e(t[n],n,t);return i}var kT=NT,iu=Kr,xT=kT,DT=un,MT=tl,LT=1/0,ru=iu?iu.prototype:void 0,ou=ru?ru.toString:void 0;function ff(t){if(typeof t=="string")return t;if(DT(t))return xT(t,ff)+"";if(MT(t))return ou?ou.call(t):"";var e=t+"";return e=="0"&&1/t==-LT?"-0":e}var $T=ff,FT=$T;function UT(t){return t==null?"":FT(t)}var HT=UT,BT=un,WT=nl,jT=OT,VT=HT;function GT(t,e){return BT(t)?t:WT(t,e)?[t]:jT(VT(t))}var pf=GT,KT=tl,qT=1/0;function zT(t){if(typeof t=="string"||KT(t))return t;var e=t+"";return e=="0"&&1/t==-qT?"-0":e}var Jr=zT,YT=pf,QT=Jr;function JT(t,e){e=YT(e,t);for(var n=0,s=e.length;t!=null&&n<s;)t=t[QT(e[n++])];return n&&n==s?t:void 0}var gf=JT,XT=gf;function ZT(t,e,n){var s=t==null?void 0:XT(t,e);return s===void 0?n:s}var eS=ZT;function tS(t,e){return t!=null&&e in Object(t)}var nS=tS,sS=pf,iS=Jd,rS=un,oS=Zd,aS=Qa,lS=Jr;function cS(t,e,n){e=sS(e,t);for(var s=-1,i=e.length,r=!1;++s<i;){var o=lS(e[s]);if(!(r=t!=null&&n(t,o)))break;t=t[o]}return r||++s!=i?r:(i=t==null?0:t.length,!!i&&aS(i)&&oS(o,i)&&(rS(t)||iS(t)))}var uS=cS,hS=nS,dS=uS;function fS(t,e){return t!=null&&dS(t,e,hS)}var pS=fS,gS=cf,_S=eS,mS=pS,vS=nl,yS=uf,bS=hf,ES=Jr,wS=1,CS=2;function IS(t,e){return vS(t)&&yS(e)?bS(ES(t),e):function(n){var s=_S(n,t);return s===void 0&&s===e?mS(n,t):gS(e,s,wS|CS)}}var TS=IS;function SS(t){return t}var RS=SS;function AS(t){return function(e){return e==null?void 0:e[t]}}var PS=AS,OS=gf;function NS(t){return function(e){return OS(e,t)}}var kS=NS,xS=PS,DS=kS,MS=nl,LS=Jr;function $S(t){return MS(t)?xS(LS(t)):DS(t)}var FS=$S,US=uT,HS=TS,BS=RS,WS=un,jS=FS;function VS(t){return typeof t=="function"?t:t==null?BS:typeof t=="object"?WS(t)?HS(t[0],t[1]):US(t):jS(t)}var GS=VS,KS=vv,qS=xb,zS=GS;function YS(t,e){return KS(t,zS(e),qS)}var QS=YS,JS=function(){function t(e,n){for(var s=0;s<n.length;s++){var i=n[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,s){return n&&t(e.prototype,n),s&&t(e,s),e}}();function XS(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var ZS=QS,eR={messenger:/\bFB[\w_]+\/(Messenger|MESSENGER)/,facebook:/\bFB[\w_]+\//,twitter:/\bTwitter/i,line:/\bLine\//i,wechat:/\bMicroMessenger\//i,puffin:/\bPuffin/i,miui:/\bMiuiBrowser\//i,instagram:/\bInstagram/i,chrome:/\bCrMo\b|CriOS|Android.*Chrome\/[.0-9]* (Mobile)?/,safari:/Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari/,ie:/IEMobile|MSIEMobile/,firefox:/fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS/},tR=function(){function t(e){XS(this,t),this.ua="",this.ua=e}return JS(t,[{key:"browser",get:function(){var n=this;return ZS(eR,function(s){return s.test(n.ua)})||"other"}},{key:"isMobile",get:function(){return/(iPad|iPhone|Android|Mobile)/i.test(this.ua)||!1}},{key:"isDesktop",get:function(){return!this.isMobile}},{key:"isInApp",get:function(){var n=["WebView","(iPhone|iPod|iPad)(?!.*Safari/)","Android.*(wv|.0.0.0)"],s=new RegExp("("+n.join("|")+")","ig");return!!this.ua.match(s)}}]),t}(),nR=tR;const sR=_v(nR);var au={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const I=function(t,e){if(!t)throw ws(e)},ws=function(t){return new Error("Firebase Database ("+_f.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mf=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},iR=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},il={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(d=64)),s.push(n[u],n[h],n[d],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(mf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):iR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new rR;const d=r<<2|a>>4;if(s.push(d),c!==64){const g=a<<4&240|c>>2;if(s.push(g),h!==64){const m=c<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class rR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const vf=function(t){const e=mf(t);return il.encodeByteArray(e,!0)},ur=function(t){return vf(t).replace(/\./g,"")},hr=function(t){try{return il.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oR(t){return yf(void 0,t)}function yf(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!aR(n)||(t[n]=yf(t[n],e[n]));return t}function aR(t){return t!=="__proto__"}/**
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
 */function lR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const cR=()=>lR().__FIREBASE_DEFAULTS__,uR=()=>{if(typeof process>"u"||typeof au>"u")return;const t=au.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},hR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&hr(t[1]);return e&&JSON.parse(e)},rl=()=>{try{return cR()||uR()||hR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},bf=t=>{var e,n;return(n=(e=rl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},dR=t=>{const e=bf(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Ef=()=>{var t;return(t=rl())===null||t===void 0?void 0:t.config},wf=t=>{var e;return(e=rl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function fR(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ur(JSON.stringify(n)),ur(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function al(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(De())}function pR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function gR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Cf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _R(){const t=De();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function If(){return _f.NODE_ADMIN===!0}function mR(){try{return typeof indexedDB=="object"}catch{return!1}}function vR(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yR="FirebaseError";class hn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=yR,Object.setPrototypeOf(this,hn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ci.prototype.create)}}class Ci{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?bR(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new hn(i,a,s)}}function bR(t,e){return t.replace(ER,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const ER=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(t){return JSON.parse(t)}function Ce(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tf=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=oi(hr(r[0])||""),n=oi(hr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},wR=function(t){const e=Tf(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},CR=function(t){const e=Tf(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ls(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function aa(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function dr(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function fr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(lu(r)&&lu(o)){if(!fr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function lu(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cs(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function TR(t,e){const n=new SR(t,e);return n.subscribe.bind(n)}class SR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");RR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=So),i.error===void 0&&(i.error=So),i.complete===void 0&&(i.complete=So);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function RR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function So(){}function Sf(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AR=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,I(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Xr=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function bt(t){return t&&t._delegate?t._delegate:t}class An{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const yn="[DEFAULT]";/**
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
 */class PR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new ol;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(NR(e))try{this.getOrInitializeService({instanceIdentifier:yn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=yn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=yn){return this.instances.has(e)}getOptions(e=yn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:OR(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=yn){return this.component?this.component.multipleInstances?e:yn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function OR(t){return t===yn?void 0:t}function NR(t){return t.instantiationMode==="EAGER"}/**
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
 */class kR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new PR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const xR={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},DR=ie.INFO,MR={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},LR=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=MR[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ll{constructor(e){this.name=e,this._logLevel=DR,this._logHandler=LR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?xR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const $R=(t,e)=>e.some(n=>t instanceof n);let cu,uu;function FR(){return cu||(cu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function UR(){return uu||(uu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Rf=new WeakMap,la=new WeakMap,Af=new WeakMap,Ro=new WeakMap,cl=new WeakMap;function HR(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(tn(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Rf.set(n,t)}).catch(()=>{}),cl.set(e,t),e}function BR(t){if(la.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});la.set(t,e)}let ca={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return la.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Af.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return tn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function WR(t){ca=t(ca)}function jR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Ao(this),e,...n);return Af.set(s,e.sort?e.sort():[e]),tn(s)}:UR().includes(t)?function(...e){return t.apply(Ao(this),e),tn(Rf.get(this))}:function(...e){return tn(t.apply(Ao(this),e))}}function VR(t){return typeof t=="function"?jR(t):(t instanceof IDBTransaction&&BR(t),$R(t,FR())?new Proxy(t,ca):t)}function tn(t){if(t instanceof IDBRequest)return HR(t);if(Ro.has(t))return Ro.get(t);const e=VR(t);return e!==t&&(Ro.set(t,e),cl.set(e,t)),e}const Ao=t=>cl.get(t);function GR(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=tn(o);return s&&o.addEventListener("upgradeneeded",l=>{s(tn(o.result),l.oldVersion,l.newVersion,tn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const KR=["get","getKey","getAll","getAllKeys","count"],qR=["put","add","delete","clear"],Po=new Map;function hu(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Po.get(e))return Po.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=qR.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||KR.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Po.set(e,r),r}WR(t=>({...t,get:(e,n,s)=>hu(e,n)||t.get(e,n,s),has:(e,n)=>!!hu(e,n)||t.has(e,n)}));/**
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
 */class zR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(YR(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function YR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ua="@firebase/app",du="0.10.15";/**
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
 */const xt=new ll("@firebase/app"),QR="@firebase/app-compat",JR="@firebase/analytics-compat",XR="@firebase/analytics",ZR="@firebase/app-check-compat",e0="@firebase/app-check",t0="@firebase/auth",n0="@firebase/auth-compat",s0="@firebase/database",i0="@firebase/data-connect",r0="@firebase/database-compat",o0="@firebase/functions",a0="@firebase/functions-compat",l0="@firebase/installations",c0="@firebase/installations-compat",u0="@firebase/messaging",h0="@firebase/messaging-compat",d0="@firebase/performance",f0="@firebase/performance-compat",p0="@firebase/remote-config",g0="@firebase/remote-config-compat",_0="@firebase/storage",m0="@firebase/storage-compat",v0="@firebase/firestore",y0="@firebase/vertexai",b0="@firebase/firestore-compat",E0="firebase",w0="11.0.1";/**
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
 */const ha="[DEFAULT]",C0={[ua]:"fire-core",[QR]:"fire-core-compat",[XR]:"fire-analytics",[JR]:"fire-analytics-compat",[e0]:"fire-app-check",[ZR]:"fire-app-check-compat",[t0]:"fire-auth",[n0]:"fire-auth-compat",[s0]:"fire-rtdb",[i0]:"fire-data-connect",[r0]:"fire-rtdb-compat",[o0]:"fire-fn",[a0]:"fire-fn-compat",[l0]:"fire-iid",[c0]:"fire-iid-compat",[u0]:"fire-fcm",[h0]:"fire-fcm-compat",[d0]:"fire-perf",[f0]:"fire-perf-compat",[p0]:"fire-rc",[g0]:"fire-rc-compat",[_0]:"fire-gcs",[m0]:"fire-gcs-compat",[v0]:"fire-fst",[b0]:"fire-fst-compat",[y0]:"fire-vertex","fire-js":"fire-js",[E0]:"fire-js-all"};/**
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
 */const pr=new Map,I0=new Map,da=new Map;function fu(t,e){try{t.container.addComponent(e)}catch(n){xt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function cs(t){const e=t.name;if(da.has(e))return xt.debug(`There were multiple attempts to register component ${e}.`),!1;da.set(e,t);for(const n of pr.values())fu(n,t);for(const n of I0.values())fu(n,t);return!0}function ul(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Xt(t){return t.settings!==void 0}/**
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
 */const T0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},nn=new Ci("app","Firebase",T0);/**
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
 */class S0{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new An("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw nn.create("app-deleted",{appName:this._name})}}/**
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
 */const Is=w0;function Pf(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:ha,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw nn.create("bad-app-name",{appName:String(i)});if(n||(n=Ef()),!n)throw nn.create("no-options");const r=pr.get(i);if(r){if(fr(n,r.options)&&fr(s,r.config))return r;throw nn.create("duplicate-app",{appName:i})}const o=new kR(i);for(const l of da.values())o.addComponent(l);const a=new S0(n,s,o);return pr.set(i,a),a}function Of(t=ha){const e=pr.get(t);if(!e&&t===ha&&Ef())return Pf();if(!e)throw nn.create("no-app",{appName:t});return e}function sn(t,e,n){var s;let i=(s=C0[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xt.warn(a.join(" "));return}cs(new An(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const R0="firebase-heartbeat-database",A0=1,ai="firebase-heartbeat-store";let Oo=null;function Nf(){return Oo||(Oo=GR(R0,A0,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ai)}catch(n){console.warn(n)}}}}).catch(t=>{throw nn.create("idb-open",{originalErrorMessage:t.message})})),Oo}async function P0(t){try{const n=(await Nf()).transaction(ai),s=await n.objectStore(ai).get(kf(t));return await n.done,s}catch(e){if(e instanceof hn)xt.warn(e.message);else{const n=nn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});xt.warn(n.message)}}}async function pu(t,e){try{const s=(await Nf()).transaction(ai,"readwrite");await s.objectStore(ai).put(e,kf(t)),await s.done}catch(n){if(n instanceof hn)xt.warn(n.message);else{const s=nn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});xt.warn(s.message)}}}function kf(t){return`${t.name}!${t.options.appId}`}/**
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
 */const O0=1024,N0=30*24*60*60*1e3;class k0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new D0(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=gu();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=N0}),this._storage.overwrite(this._heartbeatsCache))}catch(s){xt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=gu(),{heartbeatsToSend:s,unsentEntries:i}=x0(this._heartbeatsCache.heartbeats),r=ur(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return xt.warn(n),""}}}function gu(){return new Date().toISOString().substring(0,10)}function x0(t,e=O0){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),_u(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),_u(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class D0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return mR()?vR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await P0(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return pu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return pu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function _u(t){return ur(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function M0(t){cs(new An("platform-logger",e=>new zR(e),"PRIVATE")),cs(new An("heartbeat",e=>new k0(e),"PRIVATE")),sn(ua,du,t),sn(ua,du,"esm2017"),sn("fire-js","")}M0("");function hl(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function xf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const L0=xf,Df=new Ci("auth","Firebase",xf());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr=new ll("@firebase/auth");function $0(t,...e){gr.logLevel<=ie.WARN&&gr.warn(`Auth (${Is}): ${t}`,...e)}function Yi(t,...e){gr.logLevel<=ie.ERROR&&gr.error(`Auth (${Is}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(t,...e){throw dl(t,...e)}function _t(t,...e){return dl(t,...e)}function Mf(t,e,n){const s=Object.assign(Object.assign({},L0()),{[e]:n});return new Ci("auth","Firebase",s).create(e,{appName:t.name})}function In(t){return Mf(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function dl(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Df.create(t,...e)}function W(t,e,...n){if(!t)throw dl(e,...n)}function Rt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Yi(e),new Error(e)}function Mt(t,e){t||Rt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fa(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function F0(){return mu()==="http:"||mu()==="https:"}function mu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(F0()||gR()||"connection"in navigator)?navigator.onLine:!0}function H0(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e,n){this.shortDelay=e,this.longDelay=n,Mt(n>e,"Short delay should be less than long delay!"),this.isMobile=al()||Cf()}get(){return U0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fl(t,e){Mt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Rt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Rt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Rt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W0=new Ii(3e4,6e4);function Ti(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function dn(t,e,n,s,i={}){return $f(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Cs(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},r);return pR()||(c.referrerPolicy="no-referrer"),Lf.fetch()(Ff(t,t.config.apiHost,n,a),c)})}async function $f(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},B0),e);try{const i=new G0(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Bi(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Bi(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Bi(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Bi(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Mf(t,u,c);Dt(t,u)}}catch(i){if(i instanceof hn)throw i;Dt(t,"network-request-failed",{message:String(i)})}}async function j0(t,e,n,s,i={}){const r=await dn(t,e,n,s,i);return"mfaPendingCredential"in r&&Dt(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Ff(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?fl(t.config,i):`${t.config.apiScheme}://${i}`}function V0(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class G0{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(_t(this.auth,"network-request-failed")),W0.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Bi(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=_t(t,e,s);return i.customData._tokenResponse=n,i}function vu(t){return t!==void 0&&t.enterprise!==void 0}class K0{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return V0(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function q0(t,e){return dn(t,"GET","/v2/recaptchaConfig",Ti(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z0(t,e){return dn(t,"POST","/v1/accounts:delete",e)}async function Uf(t,e){return dn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Y0(t,e=!1){const n=bt(t),s=await n.getIdToken(e),i=pl(s);W(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:qs(No(i.auth_time)),issuedAtTime:qs(No(i.iat)),expirationTime:qs(No(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function No(t){return Number(t)*1e3}function pl(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Yi("JWT malformed, contained fewer than 3 sections"),null;try{const i=hr(n);return i?JSON.parse(i):(Yi("Failed to decode base64 JWT payload"),null)}catch(i){return Yi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function yu(t){const e=pl(t);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function li(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof hn&&Q0(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Q0({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=qs(this.lastLoginAt),this.creationTime=qs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function _r(t){var e;const n=t.auth,s=await t.getIdToken(),i=await li(t,Uf(n,{idToken:s}));W(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Hf(r.providerUserInfo):[],a=Z0(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new pa(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function X0(t){const e=bt(t);await _r(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Z0(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Hf(t){return t.map(e=>{var{providerId:n}=e,s=hl(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eA(t,e){const n=await $f(t,{},async()=>{const s=Cs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=Ff(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Lf.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function tA(t,e){return dn(t,"POST","/v2/accounts:revokeToken",Ti(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):yu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){W(e.length!==0,"internal-error");const n=yu(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await eA(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new ts;return s&&(W(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(W(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(W(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ts,this.toJSON())}_performRefresh(){return Rt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(t,e){W(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class At{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=hl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new J0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new pa(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await li(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Y0(this,e)}reload(){return X0(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new At(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await _r(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Xt(this.auth.app))return Promise.reject(In(this.auth));const e=await this.getIdToken();return await li(this,z0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,g=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,b=(a=n.tenantId)!==null&&a!==void 0?a:void 0,O=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,k=(c=n.createdAt)!==null&&c!==void 0?c:void 0,P=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:M,emailVerified:x,isAnonymous:z,providerData:_e,stsTokenManager:ae}=n;W(M&&ae,e,"internal-error");const qe=ts.fromJSON(this.name,ae);W(typeof M=="string",e,"internal-error"),Wt(h,e.name),Wt(d,e.name),W(typeof x=="boolean",e,"internal-error"),W(typeof z=="boolean",e,"internal-error"),Wt(g,e.name),Wt(m,e.name),Wt(b,e.name),Wt(O,e.name),Wt(k,e.name),Wt(P,e.name);const ze=new At({uid:M,auth:e,email:d,emailVerified:x,displayName:h,isAnonymous:z,photoURL:m,phoneNumber:g,tenantId:b,stsTokenManager:qe,createdAt:k,lastLoginAt:P});return _e&&Array.isArray(_e)&&(ze.providerData=_e.map(Ye=>Object.assign({},Ye))),O&&(ze._redirectEventId=O),ze}static async _fromIdTokenResponse(e,n,s=!1){const i=new ts;i.updateFromServerResponse(n);const r=new At({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await _r(r),r}static async _fromGetAccountInfoResponse(e,n,s){const i=n.users[0];W(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?Hf(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),a=new ts;a.updateFromIdToken(s);const l=new At({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new pa(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bu=new Map;function Pt(t){Mt(t instanceof Function,"Expected a class definition");let e=bu.get(t);return e?(Mt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,bu.set(t,e),e)}/**
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
 */class Bf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Bf.type="NONE";const Eu=Bf;/**
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
 */function Qi(t,e,n){return`firebase:${t}:${e}:${n}`}class ns{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Qi(this.userKey,i.apiKey,r),this.fullPersistenceKey=Qi("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?At._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ns(Pt(Eu),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Pt(Eu);const o=Qi(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=At._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new ns(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new ns(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wu(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Gf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Wf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(qf(e))return"Blackberry";if(zf(e))return"Webos";if(jf(e))return"Safari";if((e.includes("chrome/")||Vf(e))&&!e.includes("edge/"))return"Chrome";if(Kf(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Wf(t=De()){return/firefox\//i.test(t)}function jf(t=De()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Vf(t=De()){return/crios\//i.test(t)}function Gf(t=De()){return/iemobile/i.test(t)}function Kf(t=De()){return/android/i.test(t)}function qf(t=De()){return/blackberry/i.test(t)}function zf(t=De()){return/webos/i.test(t)}function gl(t=De()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function nA(t=De()){var e;return gl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function sA(){return _R()&&document.documentMode===10}function Yf(t=De()){return gl(t)||Kf(t)||zf(t)||qf(t)||/windows phone/i.test(t)||Gf(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qf(t,e=[]){let n;switch(t){case"Browser":n=wu(De());break;case"Worker":n=`${wu(De())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Is}/${s}`}/**
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
 */class iA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function rA(t,e={}){return dn(t,"GET","/v2/passwordPolicy",Ti(t,e))}/**
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
 */const oA=6;class aA{constructor(e){var n,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:oA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,i,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lA{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Cu(this),this.idTokenSubscription=new Cu(this),this.beforeStateQueue=new iA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Df,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Pt(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await ns.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Uf(this,{idToken:e}),s=await At._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Xt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await _r(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=H0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Xt(this.app))return Promise.reject(In(this));const n=e?bt(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Xt(this.app)?Promise.reject(In(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Xt(this.app)?Promise.reject(In(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Pt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await rA(this),n=new aA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ci("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await tA(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Pt(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await ns.create(this,[Pt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Qf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&$0(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Si(t){return bt(t)}class Cu{constructor(e){this.auth=e,this.observer=null,this.addObserver=TR(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function cA(t){Zr=t}function Jf(t){return Zr.loadJS(t)}function uA(){return Zr.recaptchaEnterpriseScript}function hA(){return Zr.gapiScript}function dA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class fA{constructor(){this.enterprise=new pA}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class pA{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const gA="recaptcha-enterprise",Xf="NO_RECAPTCHA";class _A{constructor(e){this.type=gA,this.auth=Si(e)}async verify(e="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{q0(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new K0(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(r,o,a){const l=window.grecaptcha;vu(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(Xf)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new fA().execute("siteKey",{action:"verify"}):new Promise((r,o)=>{s(this.auth).then(a=>{if(!n&&vu(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=uA();l.length!==0&&(l+=a),Jf(l).then(()=>{i(a,r,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Iu(t,e,n,s=!1,i=!1){const r=new _A(t);let o;if(i)o=Xf;else try{o=await r.verify(n)}catch{o=await r.verify(n,!0)}const a=Object.assign({},e);return s?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function mA(t,e,n,s,i){var r;if(!((r=t._getRecaptchaConfig())===null||r===void 0)&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Iu(t,e,n,n==="getOobCode");return s(t,o)}else return s(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Iu(t,e,n,n==="getOobCode");return s(t,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vA(t,e){const n=ul(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(fr(r,e??{}))return i;Dt(i,"already-initialized")}return n.initialize({options:e})}function yA(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Pt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function bA(t,e,n){const s=Si(t);W(s._canInitEmulator,s,"emulator-config-failed"),W(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=Zf(e),{host:o,port:a}=EA(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),wA()}function Zf(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function EA(t){const e=Zf(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Tu(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Tu(o)}}}function Tu(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function wA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Rt("not implemented")}_getIdTokenResponse(e){return Rt("not implemented")}_linkToIdToken(e,n){return Rt("not implemented")}_getReauthenticationResolver(e){return Rt("not implemented")}}async function CA(t,e){return dn(t,"POST","/v1/accounts:sendOobCode",Ti(t,e))}async function IA(t,e){return CA(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ss(t,e){return j0(t,"POST","/v1/accounts:signInWithIdp",Ti(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TA="http://localhost";class Pn extends ep{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Pn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Dt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=hl(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Pn(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ss(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,ss(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ss(e,n)}buildRequest(){const e={requestUri:TA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Cs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ri extends tp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt extends Ri{constructor(){super("facebook.com")}static credential(e){return Pn._fromParams({providerId:zt.PROVIDER_ID,signInMethod:zt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zt.credentialFromTaggedObject(e)}static credentialFromError(e){return zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zt.credential(e.oauthAccessToken)}catch{return null}}}zt.FACEBOOK_SIGN_IN_METHOD="facebook.com";zt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt extends Ri{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Pn._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Yt.credential(n,s)}catch{return null}}}Yt.GOOGLE_SIGN_IN_METHOD="google.com";Yt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt extends Ri{constructor(){super("github.com")}static credential(e){return Pn._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qt.credential(e.oauthAccessToken)}catch{return null}}}Qt.GITHUB_SIGN_IN_METHOD="github.com";Qt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt extends Ri{constructor(){super("twitter.com")}static credential(e,n){return Pn._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Jt.credentialFromTaggedObject(e)}static credentialFromError(e){return Jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Jt.credential(n,s)}catch{return null}}}Jt.TWITTER_SIGN_IN_METHOD="twitter.com";Jt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await At._fromIdTokenResponse(e,s,i),o=Su(s);return new us({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=Su(s);return new us({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function Su(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr extends hn{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,mr.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new mr(e,n,s,i)}}function np(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?mr._fromErrorAndOperation(t,r,e,s):r})}async function SA(t,e,n=!1){const s=await li(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return us._forOperation(t,"link",s)}/**
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
 */async function RA(t,e,n=!1){const{auth:s}=t;if(Xt(s.app))return Promise.reject(In(s));const i="reauthenticate";try{const r=await li(t,np(s,i,e,t),n);W(r.idToken,s,"internal-error");const o=pl(r.idToken);W(o,s,"internal-error");const{sub:a}=o;return W(t.uid===a,s,"user-mismatch"),us._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Dt(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AA(t,e,n=!1){if(Xt(t.app))return Promise.reject(In(t));const s="signIn",i=await np(t,s,e),r=await us._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function PA(t,e,n){const s=Si(t);await mA(s,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",IA)}function OA(t,e,n,s){return bt(t).onIdTokenChanged(e,n,s)}function NA(t,e,n){return bt(t).beforeAuthStateChanged(e,n)}const vr="__sak";/**
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
 */class sp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(vr,"1"),this.storage.removeItem(vr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kA=1e3,xA=10;class ip extends sp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Yf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);sA()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,xA):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},kA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ip.type="LOCAL";const DA=ip;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp extends sp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}rp.type="SESSION";const op=rp;/**
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
 */function MA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class eo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new eo(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await MA(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}eo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _l(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class LA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=_l("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(){return window}function $A(t){mt().location.href=t}/**
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
 */function ap(){return typeof mt().WorkerGlobalScope<"u"&&typeof mt().importScripts=="function"}async function FA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function UA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function HA(){return ap()?self:null}/**
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
 */const lp="firebaseLocalStorageDb",BA=1,yr="firebaseLocalStorage",cp="fbase_key";class Ai{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function to(t,e){return t.transaction([yr],e?"readwrite":"readonly").objectStore(yr)}function WA(){const t=indexedDB.deleteDatabase(lp);return new Ai(t).toPromise()}function ga(){const t=indexedDB.open(lp,BA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(yr,{keyPath:cp})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(yr)?e(s):(s.close(),await WA(),e(await ga()))})})}async function Ru(t,e,n){const s=to(t,!0).put({[cp]:e,value:n});return new Ai(s).toPromise()}async function jA(t,e){const n=to(t,!1).get(e),s=await new Ai(n).toPromise();return s===void 0?null:s.value}function Au(t,e){const n=to(t,!0).delete(e);return new Ai(n).toPromise()}const VA=800,GA=3;class up{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ga(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>GA)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ap()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=eo._getInstance(HA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await FA(),!this.activeServiceWorker)return;this.sender=new LA(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||UA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ga();return await Ru(e,vr,"1"),await Au(e,vr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Ru(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>jA(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Au(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=to(i,!1).getAll();return new Ai(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),VA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}up.type="LOCAL";const KA=up;new Ii(3e4,6e4);/**
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
 */function qA(t,e){return e?Pt(e):(W(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ml extends ep{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ss(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ss(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ss(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function zA(t){return AA(t.auth,new ml(t),t.bypassAuthState)}function YA(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),RA(n,new ml(t),t.bypassAuthState)}async function QA(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),SA(n,new ml(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return zA;case"linkViaPopup":case"linkViaRedirect":return QA;case"reauthViaPopup":case"reauthViaRedirect":return YA;default:Dt(this.auth,"internal-error")}}resolve(e){Mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JA=new Ii(2e3,1e4);class Gn extends hp{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Gn.currentPopupAction&&Gn.currentPopupAction.cancel(),Gn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){Mt(this.filter.length===1,"Popup operations only handle one event");const e=_l();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(_t(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(_t(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Gn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_t(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,JA.get())};e()}}Gn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XA="pendingRedirect",Ji=new Map;class ZA extends hp{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Ji.get(this.auth._key());if(!e){try{const s=await eP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Ji.set(this.auth._key(),e)}return this.bypassAuthState||Ji.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function eP(t,e){const n=sP(e),s=nP(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function tP(t,e){Ji.set(t._key(),e)}function nP(t){return Pt(t._redirectPersistence)}function sP(t){return Qi(XA,t.config.apiKey,t.name)}async function iP(t,e,n=!1){if(Xt(t.app))return Promise.reject(In(t));const s=Si(t),i=qA(s,e),o=await new ZA(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rP=10*60*1e3;class oP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!aP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!dp(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(_t(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=rP&&this.cachedEventUids.clear(),this.cachedEventUids.has(Pu(e))}saveEventToCache(e){this.cachedEventUids.add(Pu(e)),this.lastProcessedEventTime=Date.now()}}function Pu(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function dp({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function aP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return dp(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lP(t,e={}){return dn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,uP=/^https?/;async function hP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await lP(t);for(const n of e)try{if(dP(n))return}catch{}Dt(t,"unauthorized-domain")}function dP(t){const e=fa(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!uP.test(n))return!1;if(cP.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const fP=new Ii(3e4,6e4);function Ou(){const t=mt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function pP(t){return new Promise((e,n)=>{var s,i,r;function o(){Ou(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ou(),n(_t(t,"network-request-failed"))},timeout:fP.get()})}if(!((i=(s=mt().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=mt().gapi)===null||r===void 0)&&r.load)o();else{const a=dA("iframefcb");return mt()[a]=()=>{gapi.load?o():n(_t(t,"network-request-failed"))},Jf(`${hA()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Xi=null,e})}let Xi=null;function gP(t){return Xi=Xi||pP(t),Xi}/**
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
 */const _P=new Ii(5e3,15e3),mP="__/auth/iframe",vP="emulator/auth/iframe",yP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},bP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function EP(t){const e=t.config;W(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?fl(e,vP):`https://${t.config.authDomain}/${mP}`,s={apiKey:e.apiKey,appName:t.name,v:Is},i=bP.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Cs(s).slice(1)}`}async function wP(t){const e=await gP(t),n=mt().gapi;return W(n,t,"internal-error"),e.open({where:document.body,url:EP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:yP,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=_t(t,"network-request-failed"),a=mt().setTimeout(()=>{r(o)},_P.get());function l(){mt().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const CP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},IP=500,TP=600,SP="_blank",RP="http://localhost";class Nu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function AP(t,e,n,s=IP,i=TP){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},CP),{width:s.toString(),height:i.toString(),top:r,left:o}),c=De().toLowerCase();n&&(a=Vf(c)?SP:n),Wf(c)&&(e=e||RP,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[g,m])=>`${d}${g}=${m},`,"");if(nA(c)&&a!=="_self")return PP(e||"",a),new Nu(null);const h=window.open(e||"",a,u);W(h,t,"popup-blocked");try{h.focus()}catch{}return new Nu(h)}function PP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const OP="__/auth/handler",NP="emulator/auth/handler",kP=encodeURIComponent("fac");async function ku(t,e,n,s,i,r){W(t.config.authDomain,t,"auth-domain-config-required"),W(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Is,eventId:i};if(e instanceof tp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",aa(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries({}))o[u]=h}if(e instanceof Ri){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${kP}=${encodeURIComponent(l)}`:"";return`${xP(t)}?${Cs(a).slice(1)}${c}`}function xP({config:t}){return t.emulator?fl(t,NP):`https://${t.authDomain}/${OP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ko="webStorageSupport";class DP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=op,this._completeRedirectFn=iP,this._overrideRedirectResult=tP}async _openPopup(e,n,s,i){var r;Mt((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await ku(e,n,s,fa(),i);return AP(e,o,_l())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await ku(e,n,s,fa(),i);return $A(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Mt(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await wP(e),s=new oP(e);return n.register("authEvent",i=>(W(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ko,{type:ko},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[ko];o!==void 0&&n(!!o),Dt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=hP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Yf()||jf()||gl()}}const MP=DP;var xu="@firebase/auth",Du="1.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $P(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function FP(t){cs(new An("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;W(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Qf(t)},c=new lA(s,i,r,l);return yA(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),cs(new An("auth-internal",e=>{const n=Si(e.getProvider("auth").getImmediate());return(s=>new LP(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),sn(xu,Du,$P(t)),sn(xu,Du,"esm2017")}/**
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
 */const UP=5*60,HP=wf("authIdTokenMaxAge")||UP;let Mu=null;const BP=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>HP)return;const i=n==null?void 0:n.token;Mu!==i&&(Mu=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function fp(t=Of()){const e=ul(t,"auth");if(e.isInitialized())return e.getImmediate();const n=vA(t,{popupRedirectResolver:MP,persistence:[KA,DA,op]}),s=wf("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=BP(r.toString());NA(n,o,()=>o(n.currentUser)),OA(n,a=>o(a))}}const i=bf("auth");return i&&bA(n,`http://${i}`),n}function WP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}cA({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=_t("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",WP().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});FP("Browser");const jP=yi({name:"LoginBox",props:{isInApp:{type:Boolean,required:!0},showLogin:{type:Boolean,required:!0}},setup(t,{emit:e}){const n=en(""),s=en(""),i=en(!1);Gs(i,u=>{localStorage.setItem("keeploggedin",JSON.stringify(u))}),Ka(()=>{const u=localStorage.getItem("keeploggedin");u!==null&&(i.value=JSON.parse(u))});const r=()=>{e("toggleLogin")},o=u=>{const h=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,d=/@alearn.org.tw$/;return h.test(String(u).toLowerCase())&&d.test(String(u).toLowerCase())};return{users_email:n,user_password:s,keeploggedin:i,toggleLogin:r,registerWithEmail:()=>{if(console.log("users_email:",n.value),console.log("user_password:",s.value),console.log("Register clicked"),!n.value||!s.value){window.alert("請先填寫email和密碼");return}if(!o(n.value)){alert("email格式錯誤，請重試");return}if(!s.value||typeof s.value!="string"){alert("密碼請至少包含一個英文字，請重新輸入");return}e("registerWithEmail",n.value,s.value,i.value)},loginWithEmail:()=>{let u=!0;console.log("Login clicked");const h=window.location.pathname;if(!o(n.value)){alert("請用@alearn.org.tw的Email登入");return}if((h==="/friends"||h==="/maps"||h==="/privacy-policy"||h.startsWith("/flag")||h.startsWith("/group"))&&(u=!1),!s.value||typeof s.value!="string"){alert("密碼無效，請重新輸入");return}e("loginWithEmail",u,n.value,s.value,i.value)},resetPassword:()=>{if(console.log("Reset password function triggered"),console.log("Email for reset:",n.value),!o(n.value)){alert("請先輸入有效的電子郵件地址");return}const u=fp();console.log("Firebase auth object:",u),PA(u,n.value).then(()=>{alert("密碼重置郵件已發送，請檢查您的郵箱"),console.log("Password reset email sent successfully")}).catch(h=>{switch(console.error("密碼重置郵件發送失敗：",h.code,h.message),h.code){case"auth/invalid-email":alert("無效的電子郵件地址");break;case"auth/user-not-found":alert("找不到該電子郵件對應的帳號");break;default:alert("密碼重置郵件發送失敗，請稍後再試")}})}}}}),VP={class:"ui middle aligned center aligned grid",id:"login-main",style:{height:"100vh"}},GP={class:"column",style:{"max-width":"420px"}},KP={class:"ui raised segment"},qP={key:0,class:"ui error message"},zP={class:"ui form segment",style:{"border-radius":"10px",padding:"15px","background-color":"#f0f0f0"}},YP={class:"field"},QP={class:"ui left icon input"},JP={class:"field"},XP={class:"ui left icon input"},ZP={class:"ui large form"},eO={class:"ui segment",style:{border:"none","padding-top":"10px"}},tO={class:"field"};function nO(t,e,n,s,i,r){return pt(),qt("div",{class:"ui dimmer modals visible active clickable",id:"login-bg",style:{background:"rgba(0, 0, 0, 0.6)"},onClick:e[9]||(e[9]=o=>t.toggleLogin())},[F("div",VP,[F("div",GP,[F("div",KP,[t.isInApp?(pt(),qt("div",qP,"本系統不支援facebook, line等app內部瀏覽，請用一般瀏覽器開啟，方可登入，謝謝")):Wd("",!0),e[14]||(e[14]=F("h2",{class:"ui black header",style:{"font-size":"1.5rem","font-weight":"600"}},"登入您的帳號",-1)),F("div",zP,[F("div",YP,[F("div",QP,[e[10]||(e[10]=F("i",{class:"envelope icon"},null,-1)),_o(F("input",{type:"text",name:"email",placeholder:"E-mail address",style:{"font-size":"14px"},"onUpdate:modelValue":e[0]||(e[0]=o=>t.users_email=o),onClick:e[1]||(e[1]=Ns(()=>{},["stop"]))},null,512),[[Ac,t.users_email]])])]),F("div",JP,[F("div",XP,[e[11]||(e[11]=F("i",{class:"lock icon"},null,-1)),_o(F("input",{type:"password",name:"user_password",placeholder:"Password",style:{"font-size":"14px"},"onUpdate:modelValue":e[2]||(e[2]=o=>t.user_password=o),onClick:e[3]||(e[3]=Ns(()=>{},["stop"]))},null,512),[[Ac,t.user_password]])])]),F("div",{class:Tn(["ui fluid large button",{disabled:t.isInApp}]),onClick:e[4]||(e[4]=Ns((...o)=>t.loginWithEmail&&t.loginWithEmail(...o),["prevent"])),style:{"background-color":"#e47e10",color:"white","font-weight":"bold"}},"登入",2),F("a",{class:"small forgot-password",onClick:e[5]||(e[5]=(...o)=>t.resetPassword&&t.resetPassword(...o))},"忘記密碼")]),F("form",ZP,[F("div",eO,[F("div",tO,[F("div",{class:"ui checkbox",onClick:e[7]||(e[7]=Ns(()=>{},["stop"]))},[_o(F("input",{type:"checkbox","onUpdate:modelValue":e[6]||(e[6]=o=>t.keeploggedin=o)},null,512),[[iv,t.keeploggedin]]),e[12]||(e[12]=F("label",null,"保持登入狀態",-1))])])]),F("p",null,[e[13]||(e[13]=Vn("新用戶？按此")),F("button",{class:Tn(["ui large basic button",{disabled:t.isInApp}]),id:"register-btn",onClick:e[8]||(e[8]=Ns((...o)=>t.registerWithEmail&&t.registerWithEmail(...o),["stop"]))},"註冊",2)])])])])])])}const vl=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},sO=vl(jP,[["render",nO],["__scopeId","data-v-44806ccd"]]),iO=new sR(window.navigator.userAgent),rO=iO.isInApp,oO=yi({name:"App",components:{Login:sO},data(){return{isInApp:rO,showLogin:!1,sidebarVisible:!1}},methods:{toggleLogin(){this.showLogin=!this.showLogin},toggleSidebar(){this.sidebarVisible=!this.sidebarVisible}}}),aO={class:"ui fixed top menu"},lO={class:"right menu"},cO={class:"ui container"};function uO(t,e,n,s,i,r){const o=mo("RouterLink"),a=mo("RouterView"),l=mo("Login");return pt(),qt(et,null,[F("header",null,[F("nav",aO,[F("button",{class:"no-border ui item",onClick:e[0]||(e[0]=(...c)=>t.toggleSidebar&&t.toggleSidebar(...c))},e[3]||(e[3]=[F("i",{class:"icon bars"},null,-1)])),ve(o,{class:"item",to:"/"},{default:Fs(()=>e[4]||(e[4]=[F("i",{class:"home icon"},null,-1)])),_:1}),ve(o,{class:"item",to:"/about"},{default:Fs(()=>e[5]||(e[5]=[F("i",{class:"info icon"},null,-1),Vn("關於我們")])),_:1}),F("div",lO,[F("button",{class:"no-border ui item",onClick:e[1]||(e[1]=(...c)=>t.toggleLogin&&t.toggleLogin(...c))},e[6]||(e[6]=[F("i",{class:"user icon"},null,-1),Vn("登入")]))])])]),e[9]||(e[9]=F("div",{class:"small-spacer"},null,-1)),F("div",{class:Tn(["ui sidebar vertical menu",{hidden:!t.sidebarVisible}]),id:"side-menu"},[ve(o,{class:"item",to:"/",exact:"",name:"home"},{default:Fs(()=>e[7]||(e[7]=[F("i",{class:"home icon"},null,-1),Vn("首頁")])),_:1}),ve(o,{class:"item",to:"/about",name:"about"},{default:Fs(()=>e[8]||(e[8]=[F("i",{class:"info icon"},null,-1),Vn("關於我們")])),_:1})],2),F("div",{class:Tn(["ui sidebar bg",{hidden:!t.sidebarVisible}]),onClick:e[2]||(e[2]=(...c)=>t.toggleSidebar&&t.toggleSidebar(...c))},null,2),F("div",cO,[ve(a,{onToggleLogin:t.toggleLogin},null,8,["onToggleLogin"])]),t.showLogin?(pt(),Hd(l,{key:0,showLogin:t.showLogin,isInApp:!1,onToggleLogin:t.toggleLogin},null,8,["showLogin","onToggleLogin"])):Wd("",!0)],64)}const hO=vl(oO,[["render",uO],["__scopeId","data-v-f4d8760a"]]),dO="modulepreload",fO=function(t){return"/"+t},Lu={},pO=function(e,n,s){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(n.map(l=>{if(l=fO(l),l in Lu)return;Lu[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const h=document.createElement("link");if(h.rel=c?"stylesheet":dO,c||(h.as="script"),h.crossOrigin="",h.href=l,a&&h.setAttribute("nonce",a),document.head.appendChild(h),c)return new Promise((d,g)=>{h.addEventListener("load",d),h.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})};/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const jn=typeof document<"u";function pp(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function gO(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&pp(t.default)}const ne=Object.assign;function xo(t,e){const n={};for(const s in e){const i=e[s];n[s]=at(i)?i.map(t):t(i)}return n}const zs=()=>{},at=Array.isArray,gp=/#/g,_O=/&/g,mO=/\//g,vO=/=/g,yO=/\?/g,_p=/\+/g,bO=/%5B/g,EO=/%5D/g,mp=/%5E/g,wO=/%60/g,vp=/%7B/g,CO=/%7C/g,yp=/%7D/g,IO=/%20/g;function yl(t){return encodeURI(""+t).replace(CO,"|").replace(bO,"[").replace(EO,"]")}function TO(t){return yl(t).replace(vp,"{").replace(yp,"}").replace(mp,"^")}function _a(t){return yl(t).replace(_p,"%2B").replace(IO,"+").replace(gp,"%23").replace(_O,"%26").replace(wO,"`").replace(vp,"{").replace(yp,"}").replace(mp,"^")}function SO(t){return _a(t).replace(vO,"%3D")}function RO(t){return yl(t).replace(gp,"%23").replace(yO,"%3F")}function AO(t){return t==null?"":RO(t).replace(mO,"%2F")}function ci(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const PO=/\/$/,OO=t=>t.replace(PO,"");function Do(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=DO(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:ci(o)}}function NO(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function $u(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function kO(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&hs(e.matched[s],n.matched[i])&&bp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function hs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function bp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!xO(t[n],e[n]))return!1;return!0}function xO(t,e){return at(t)?Fu(t,e):at(e)?Fu(e,t):t===e}function Fu(t,e){return at(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function DO(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o).join("/")}const jt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ui;(function(t){t.pop="pop",t.push="push"})(ui||(ui={}));var Ys;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ys||(Ys={}));function MO(t){if(!t)if(jn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),OO(t)}const LO=/^[^#]+#/;function $O(t,e){return t.replace(LO,"#")+e}function FO(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const no=()=>({left:window.scrollX,top:window.scrollY});function UO(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=FO(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Uu(t,e){return(history.state?history.state.position-e:-1)+t}const ma=new Map;function HO(t,e){ma.set(t,e)}function BO(t){const e=ma.get(t);return ma.delete(t),e}let WO=()=>location.protocol+"//"+location.host;function Ep(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),$u(l,"")}return $u(n,t)+s+i}function jO(t,e,n,s){let i=[],r=[],o=null;const a=({state:d})=>{const g=Ep(t,location),m=n.value,b=e.value;let O=0;if(d){if(n.value=g,e.value=d,o&&o===m){o=null;return}O=b?d.position-b.position:0}else s(g);i.forEach(k=>{k(n.value,m,{delta:O,type:ui.pop,direction:O?O>0?Ys.forward:Ys.back:Ys.unknown})})};function l(){o=n.value}function c(d){i.push(d);const g=()=>{const m=i.indexOf(d);m>-1&&i.splice(m,1)};return r.push(g),g}function u(){const{history:d}=window;d.state&&d.replaceState(ne({},d.state,{scroll:no()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function Hu(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?no():null}}function VO(t){const{history:e,location:n}=window,s={value:Ep(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:WO()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),i.value=c}catch(g){console.error(g),n[u?"replace":"assign"](d)}}function o(l,c){const u=ne({},e.state,Hu(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=ne({},i.value,e.state,{forward:l,scroll:no()});r(u.current,u,!0);const h=ne({},Hu(s.value,l,null),{position:u.position+1},c);r(l,h,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function GO(t){t=MO(t);const e=VO(t),n=jO(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=ne({location:"",base:t,go:s,createHref:$O.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function KO(t){return typeof t=="string"||t&&typeof t=="object"}function wp(t){return typeof t=="string"||typeof t=="symbol"}const Cp=Symbol("");var Bu;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Bu||(Bu={}));function ds(t,e){return ne(new Error,{type:t,[Cp]:!0},e)}function Ct(t,e){return t instanceof Error&&Cp in t&&(e==null||!!(t.type&e))}const Wu="[^/]+?",qO={sensitive:!1,strict:!1,start:!0,end:!0},zO=/[.+*?^${}()[\]/\\]/g;function YO(t,e){const n=ne({},qO,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const d=c[h];let g=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(zO,"\\$&"),g+=40;else if(d.type===1){const{value:m,repeatable:b,optional:O,regexp:k}=d;r.push({name:m,repeatable:b,optional:O});const P=k||Wu;if(P!==Wu){g+=10;try{new RegExp(`(${P})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${m}" (${P}): `+x.message)}}let M=b?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;h||(M=O&&c.length<2?`(?:/${M})`:"/"+M),O&&(M+="?"),i+=M,g+=20,O&&(g+=-8),b&&(g+=-20),P===".*"&&(g+=-50)}u.push(g)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const g=u[d]||"",m=r[d-1];h[m.name]=g&&m.repeatable?g.split("/"):g}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of d)if(g.type===0)u+=g.value;else if(g.type===1){const{value:m,repeatable:b,optional:O}=g,k=m in c?c[m]:"";if(at(k)&&!b)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const P=at(k)?k.join("/"):k;if(!P)if(O)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=P}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function QO(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Ip(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=QO(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(ju(s))return 1;if(ju(i))return-1}return i.length-s.length}function ju(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const JO={type:0,value:""},XO=/[a-zA-Z0-9_]/;function ZO(t){if(!t)return[[]];if(t==="/")return[[JO]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${c}": ${g}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:l==="("?n=2:XO.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function eN(t,e,n){const s=YO(ZO(t.path),n),i=ne(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function tN(t,e){const n=[],s=new Map;e=qu({strict:!1,end:!0,sensitive:!1},e);function i(h){return s.get(h)}function r(h,d,g){const m=!g,b=Gu(h);b.aliasOf=g&&g.record;const O=qu(e,h),k=[b];if("alias"in h){const x=typeof h.alias=="string"?[h.alias]:h.alias;for(const z of x)k.push(Gu(ne({},b,{components:g?g.record.components:b.components,path:z,aliasOf:g?g.record:b})))}let P,M;for(const x of k){const{path:z}=x;if(d&&z[0]!=="/"){const _e=d.record.path,ae=_e[_e.length-1]==="/"?"":"/";x.path=d.record.path+(z&&ae+z)}if(P=eN(x,d,O),g?g.alias.push(P):(M=M||P,M!==P&&M.alias.push(P),m&&h.name&&!Ku(P)&&o(h.name)),Tp(P)&&l(P),b.children){const _e=b.children;for(let ae=0;ae<_e.length;ae++)r(_e[ae],P,g&&g.children[ae])}g=g||P}return M?()=>{o(M)}:zs}function o(h){if(wp(h)){const d=s.get(h);d&&(s.delete(h),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(h);d>-1&&(n.splice(d,1),h.record.name&&s.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function a(){return n}function l(h){const d=iN(h,n);n.splice(d,0,h),h.record.name&&!Ku(h)&&s.set(h.record.name,h)}function c(h,d){let g,m={},b,O;if("name"in h&&h.name){if(g=s.get(h.name),!g)throw ds(1,{location:h});O=g.record.name,m=ne(Vu(d.params,g.keys.filter(M=>!M.optional).concat(g.parent?g.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),h.params&&Vu(h.params,g.keys.map(M=>M.name))),b=g.stringify(m)}else if(h.path!=null)b=h.path,g=n.find(M=>M.re.test(b)),g&&(m=g.parse(b),O=g.record.name);else{if(g=d.name?s.get(d.name):n.find(M=>M.re.test(d.path)),!g)throw ds(1,{location:h,currentLocation:d});O=g.record.name,m=ne({},d.params,h.params),b=g.stringify(m)}const k=[];let P=g;for(;P;)k.unshift(P.record),P=P.parent;return{name:O,path:b,params:m,matched:k,meta:sN(k)}}t.forEach(h=>r(h));function u(){n.length=0,s.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:i}}function Vu(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Gu(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:nN(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function nN(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function Ku(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function sN(t){return t.reduce((e,n)=>ne(e,n.meta),{})}function qu(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function iN(t,e){let n=0,s=e.length;for(;n!==s;){const r=n+s>>1;Ip(t,e[r])<0?s=r:n=r+1}const i=rN(t);return i&&(s=e.lastIndexOf(i,s-1)),s}function rN(t){let e=t;for(;e=e.parent;)if(Tp(e)&&Ip(t,e)===0)return e}function Tp({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function oN(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(_p," "),o=r.indexOf("="),a=ci(o<0?r:r.slice(0,o)),l=o<0?null:ci(r.slice(o+1));if(a in e){let c=e[a];at(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function zu(t){let e="";for(let n in t){const s=t[n];if(n=SO(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(at(s)?s.map(r=>r&&_a(r)):[s&&_a(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function aN(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=at(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const lN=Symbol(""),Yu=Symbol(""),bl=Symbol(""),Sp=Symbol(""),va=Symbol("");function xs(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Kt(t,e,n,s,i,r=o=>o()){const o=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(ds(4,{from:n,to:e})):d instanceof Error?l(d):KO(d)?l(ds(2,{from:e,to:d})):(o&&s.enterCallbacks[i]===o&&typeof d=="function"&&o.push(d),a())},u=r(()=>t.call(s&&s.instances[i],e,n,c));let h=Promise.resolve(u);t.length<3&&(h=h.then(c)),h.catch(d=>l(d))})}function Mo(t,e,n,s,i=r=>r()){const r=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(pp(l)){const u=(l.__vccOpts||l)[e];u&&r.push(Kt(u,n,s,o,a,i))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const h=gO(u)?u.default:u;o.mods[a]=u,o.components[a]=h;const g=(h.__vccOpts||h)[e];return g&&Kt(g,n,s,o,a,i)()}))}}return r}function Qu(t){const e=Nt(bl),n=Nt(Sp),s=tt(()=>{const l=Jn(t.to);return e.resolve(l)}),i=tt(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(hs.bind(null,u));if(d>-1)return d;const g=Ju(l[c-2]);return c>1&&Ju(u)===g&&h[h.length-1].path!==g?h.findIndex(hs.bind(null,l[c-2])):d}),r=tt(()=>i.value>-1&&dN(n.params,s.value.params)),o=tt(()=>i.value>-1&&i.value===n.matched.length-1&&bp(n.params,s.value.params));function a(l={}){return hN(l)?e[Jn(t.replace)?"replace":"push"](Jn(t.to)).catch(zs):Promise.resolve()}return{route:s,href:tt(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const cN=yi({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Qu,setup(t,{slots:e}){const n=Hr(Qu(t)),{options:s}=Nt(bl),i=tt(()=>({[Xu(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Xu(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Gd("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),uN=cN;function hN(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function dN(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!at(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Ju(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Xu=(t,e,n)=>t??e??n,fN=yi({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Nt(va),i=tt(()=>t.route||s.value),r=Nt(Yu,0),o=tt(()=>{let c=Jn(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=tt(()=>i.value.matched[o.value]);Gi(Yu,tt(()=>o.value+1)),Gi(lN,a),Gi(va,i);const l=en();return Gs(()=>[l.value,a.value,t.name],([c,u,h],[d,g,m])=>{u&&(u.instances[h]=c,g&&g!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),c&&u&&(!g||!hs(u,g)||!d)&&(u.enterCallbacks[h]||[]).forEach(b=>b(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Zu(n.default,{Component:d,route:c});const g=h.props[u],m=g?g===!0?c.params:typeof g=="function"?g(c):g:null,O=Gd(d,ne({},m,e,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Zu(n.default,{Component:O,route:c})||O}}});function Zu(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const pN=fN;function gN(t){const e=tN(t.routes,t),n=t.parseQuery||oN,s=t.stringifyQuery||zu,i=t.history,r=xs(),o=xs(),a=xs(),l=w_(jt);let c=jt;jn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=xo.bind(null,y=>""+y),h=xo.bind(null,AO),d=xo.bind(null,ci);function g(y,D){let A,L;return wp(y)?(A=e.getRecordMatcher(y),L=D):L=y,e.addRoute(L,A)}function m(y){const D=e.getRecordMatcher(y);D&&e.removeRoute(D)}function b(){return e.getRoutes().map(y=>y.record)}function O(y){return!!e.getRecordMatcher(y)}function k(y,D){if(D=ne({},D||l.value),typeof y=="string"){const p=Do(n,y,D.path),_=e.resolve({path:p.path},D),E=i.createHref(p.fullPath);return ne(p,_,{params:d(_.params),hash:ci(p.hash),redirectedFrom:void 0,href:E})}let A;if(y.path!=null)A=ne({},y,{path:Do(n,y.path,D.path).path});else{const p=ne({},y.params);for(const _ in p)p[_]==null&&delete p[_];A=ne({},y,{params:h(p)}),D.params=h(D.params)}const L=e.resolve(A,D),ee=y.hash||"";L.params=u(d(L.params));const pe=NO(s,ne({},y,{hash:TO(ee),path:L.path})),f=i.createHref(pe);return ne({fullPath:pe,hash:ee,query:s===zu?aN(y.query):y.query||{}},L,{redirectedFrom:void 0,href:f})}function P(y){return typeof y=="string"?Do(n,y,l.value.path):ne({},y)}function M(y,D){if(c!==y)return ds(8,{from:D,to:y})}function x(y){return ae(y)}function z(y){return x(ne(P(y),{replace:!0}))}function _e(y){const D=y.matched[y.matched.length-1];if(D&&D.redirect){const{redirect:A}=D;let L=typeof A=="function"?A(y):A;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=P(L):{path:L},L.params={}),ne({query:y.query,hash:y.hash,params:L.path!=null?{}:y.params},L)}}function ae(y,D){const A=c=k(y),L=l.value,ee=y.state,pe=y.force,f=y.replace===!0,p=_e(A);if(p)return ae(ne(P(p),{state:typeof p=="object"?ne({},ee,p.state):ee,force:pe,replace:f}),D||A);const _=A;_.redirectedFrom=D;let E;return!pe&&kO(s,L,A)&&(E=ds(16,{to:_,from:L}),ct(L,L,!0,!1)),(E?Promise.resolve(E):Ye(_,L)).catch(v=>Ct(v)?Ct(v,2)?v:Bt(v):J(v,_,L)).then(v=>{if(v){if(Ct(v,2))return ae(ne({replace:f},P(v.to),{state:typeof v.to=="object"?ne({},ee,v.to.state):ee,force:pe}),D||_)}else v=pn(_,L,!0,f,ee);return Ht(_,L,v),v})}function qe(y,D){const A=M(y,D);return A?Promise.reject(A):Promise.resolve()}function ze(y){const D=Un.values().next().value;return D&&typeof D.runWithContext=="function"?D.runWithContext(y):y()}function Ye(y,D){let A;const[L,ee,pe]=_N(y,D);A=Mo(L.reverse(),"beforeRouteLeave",y,D);for(const p of L)p.leaveGuards.forEach(_=>{A.push(Kt(_,y,D))});const f=qe.bind(null,y,D);return A.push(f),Qe(A).then(()=>{A=[];for(const p of r.list())A.push(Kt(p,y,D));return A.push(f),Qe(A)}).then(()=>{A=Mo(ee,"beforeRouteUpdate",y,D);for(const p of ee)p.updateGuards.forEach(_=>{A.push(Kt(_,y,D))});return A.push(f),Qe(A)}).then(()=>{A=[];for(const p of pe)if(p.beforeEnter)if(at(p.beforeEnter))for(const _ of p.beforeEnter)A.push(Kt(_,y,D));else A.push(Kt(p.beforeEnter,y,D));return A.push(f),Qe(A)}).then(()=>(y.matched.forEach(p=>p.enterCallbacks={}),A=Mo(pe,"beforeRouteEnter",y,D,ze),A.push(f),Qe(A))).then(()=>{A=[];for(const p of o.list())A.push(Kt(p,y,D));return A.push(f),Qe(A)}).catch(p=>Ct(p,8)?p:Promise.reject(p))}function Ht(y,D,A){a.list().forEach(L=>ze(()=>L(y,D,A)))}function pn(y,D,A,L,ee){const pe=M(y,D);if(pe)return pe;const f=D===jt,p=jn?history.state:{};A&&(L||f?i.replace(y.fullPath,ne({scroll:f&&p&&p.scroll},ee)):i.push(y.fullPath,ee)),l.value=y,ct(y,D,A,f),Bt()}let lt;function Rs(){lt||(lt=i.listen((y,D,A)=>{if(!Mi.listening)return;const L=k(y),ee=_e(L);if(ee){ae(ne(ee,{replace:!0}),L).catch(zs);return}c=L;const pe=l.value;jn&&HO(Uu(pe.fullPath,A.delta),no()),Ye(L,pe).catch(f=>Ct(f,12)?f:Ct(f,2)?(ae(f.to,L).then(p=>{Ct(p,20)&&!A.delta&&A.type===ui.pop&&i.go(-1,!1)}).catch(zs),Promise.reject()):(A.delta&&i.go(-A.delta,!1),J(f,L,pe))).then(f=>{f=f||pn(L,pe,!1),f&&(A.delta&&!Ct(f,8)?i.go(-A.delta,!1):A.type===ui.pop&&Ct(f,20)&&i.go(-1,!1)),Ht(L,pe,f)}).catch(zs)}))}let $n=xs(),be=xs(),se;function J(y,D,A){Bt(y);const L=be.list();return L.length?L.forEach(ee=>ee(y,D,A)):console.error(y),Promise.reject(y)}function Et(){return se&&l.value!==jt?Promise.resolve():new Promise((y,D)=>{$n.add([y,D])})}function Bt(y){return se||(se=!y,Rs(),$n.list().forEach(([D,A])=>y?A(y):D()),$n.reset()),y}function ct(y,D,A,L){const{scrollBehavior:ee}=t;if(!jn||!ee)return Promise.resolve();const pe=!A&&BO(Uu(y.fullPath,0))||(L||!A)&&history.state&&history.state.scroll||null;return fd().then(()=>ee(y,D,pe)).then(f=>f&&UO(f)).catch(f=>J(f,y,D))}const Me=y=>i.go(y);let Fn;const Un=new Set,Mi={currentRoute:l,listening:!0,addRoute:g,removeRoute:m,clearRoutes:e.clearRoutes,hasRoute:O,getRoutes:b,resolve:k,options:t,push:x,replace:z,go:Me,back:()=>Me(-1),forward:()=>Me(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:be.add,isReady:Et,install(y){const D=this;y.component("RouterLink",uN),y.component("RouterView",pN),y.config.globalProperties.$router=D,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>Jn(l)}),jn&&!Fn&&l.value===jt&&(Fn=!0,x(i.location).catch(ee=>{}));const A={};for(const ee in jt)Object.defineProperty(A,ee,{get:()=>l.value[ee],enumerable:!0});y.provide(bl,D),y.provide(Sp,ad(A)),y.provide(va,l);const L=y.unmount;Un.add(y),y.unmount=function(){Un.delete(y),Un.size<1&&(c=jt,lt&&lt(),lt=null,l.value=jt,Fn=!1,se=!1),L()}}};function Qe(y){return y.reduce((D,A)=>D.then(()=>ze(A)),Promise.resolve())}return Mi}function _N(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>hs(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>hs(c,l))||i.push(l))}return[n,s,i]}var mN="firebase",vN="11.0.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sn(mN,vN,"app");var eh={};const th="@firebase/database",nh="1.0.9";/**
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
 */let Rp="";function yN(t){Rp=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bN{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ce(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:oi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EN{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ut(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ap=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new bN(e)}}catch{}return new EN},wn=Ap("localStorage"),wN=Ap("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is=new ll("@firebase/database"),CN=function(){let t=1;return function(){return t++}}(),Pp=function(t){const e=AR(t),n=new IR;n.update(e);const s=n.digest();return il.encodeByteArray(s)},Pi=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Pi.apply(null,s):typeof s=="object"?e+=Ce(s):e+=s,e+=" "}return e};let Qs=null,sh=!0;const IN=function(t,e){I(!e,"Can't turn on custom loggers persistently."),is.logLevel=ie.VERBOSE,Qs=is.log.bind(is)},Ae=function(...t){if(sh===!0&&(sh=!1,Qs===null&&wN.get("logging_enabled")===!0&&IN()),Qs){const e=Pi.apply(null,t);Qs(e)}},Oi=function(t){return function(...e){Ae(t,...e)}},ya=function(...t){const e="FIREBASE INTERNAL ERROR: "+Pi(...t);is.error(e)},Lt=function(...t){const e=`FIREBASE FATAL ERROR: ${Pi(...t)}`;throw is.error(e),new Error(e)},Ke=function(...t){const e="FIREBASE WARNING: "+Pi(...t);is.warn(e)},TN=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ke("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Op=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},SN=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},fs="[MIN_NAME]",On="[MAX_NAME]",Ts=function(t,e){if(t===e)return 0;if(t===fs||e===On)return-1;if(e===fs||t===On)return 1;{const n=ih(t),s=ih(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},RN=function(t,e){return t===e?0:t<e?-1:1},Ds=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ce(e))},El=function(t){if(typeof t!="object"||t===null)return Ce(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Ce(e[s]),n+=":",n+=El(t[e[s]]);return n+="}",n},Np=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Fe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const kp=function(t){I(!Op(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},AN=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},PN=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function ON(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const NN=new RegExp("^-?(0*)\\d{1,10}$"),kN=-2147483648,xN=2147483647,ih=function(t){if(NN.test(t)){const e=Number(t);if(e>=kN&&e<=xN)return e}return null},Ni=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ke("Exception was thrown by user callback.",n),e},Math.floor(0))}},DN=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Js=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class MN{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Ke(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LN{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ae("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ke(e)}}class Zi{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Zi.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wl="5",xp="v",Dp="s",Mp="r",Lp="f",$p=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Fp="ls",Up="p",ba="ac",Hp="websocket",Bp="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=wn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&wn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function $N(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function jp(t,e,n){I(typeof e=="string","typeof type must == string"),I(typeof n=="object","typeof params must == object");let s;if(e===Hp)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Bp)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);$N(t)&&(n.ns=t.namespace);const i=[];return Fe(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FN{constructor(){this.counters_={}}incrementCounter(e,n=1){Ut(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return oR(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lo={},$o={};function Cl(t){const e=t.toString();return Lo[e]||(Lo[e]=new FN),Lo[e]}function UN(t,e){const n=t.toString();return $o[n]||($o[n]=e()),$o[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HN{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Ni(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rh="start",BN="close",WN="pLPCommand",jN="pRTLPCB",Vp="id",Gp="pw",Kp="ser",VN="cb",GN="seg",KN="ts",qN="d",zN="dframe",qp=1870,zp=30,YN=qp-zp,QN=25e3,JN=3e4;class Kn{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Oi(e),this.stats_=Cl(n),this.urlFn=l=>(this.appCheckToken&&(l[ba]=this.appCheckToken),jp(n,Bp,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new HN(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(JN)),SN(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Il((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===rh)this.id=a,this.password=l;else if(o===BN)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[rh]="t",s[Kp]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[VN]=this.scriptTagHolder.uniqueCallbackIdentifier),s[xp]=wl,this.transportSessionId&&(s[Dp]=this.transportSessionId),this.lastSessionId&&(s[Fp]=this.lastSessionId),this.applicationId&&(s[Up]=this.applicationId),this.appCheckToken&&(s[ba]=this.appCheckToken),typeof location<"u"&&location.hostname&&$p.test(location.hostname)&&(s[Mp]=Lp);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Kn.forceAllow_=!0}static forceDisallow(){Kn.forceDisallow_=!0}static isAvailable(){return Kn.forceAllow_?!0:!Kn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!AN()&&!PN()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ce(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=vf(n),i=Np(s,YN);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[zN]="t",s[Vp]=e,s[Gp]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ce(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Il{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=CN(),window[WN+this.uniqueCallbackIdentifier]=e,window[jN+this.uniqueCallbackIdentifier]=n,this.myIFrame=Il.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ae("frame writing exception"),a.stack&&Ae(a.stack),Ae(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ae("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Vp]=this.myID,e[Gp]=this.myPW,e[Kp]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+zp+s.length<=qp;){const o=this.pendingSegs.shift();s=s+"&"+GN+i+"="+o.seg+"&"+KN+i+"="+o.ts+"&"+qN+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(QN)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Ae("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XN=16384,ZN=45e3;let br=null;typeof MozWebSocket<"u"?br=MozWebSocket:typeof WebSocket<"u"&&(br=WebSocket);class nt{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Oi(this.connId),this.stats_=Cl(n),this.connURL=nt.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[xp]=wl,typeof location<"u"&&location.hostname&&$p.test(location.hostname)&&(o[Mp]=Lp),n&&(o[Dp]=n),s&&(o[Fp]=s),i&&(o[ba]=i),r&&(o[Up]=r),jp(e,Hp,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,wn.set("previous_websocket_failure",!0);try{let s;If(),this.mySock=new br(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){nt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&br!==null&&!nt.forceDisallow_}static previouslyFailed(){return wn.isInMemoryStorage||wn.get("previous_websocket_failure")===!0}markConnectionHealthy(){wn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=oi(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(I(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Ce(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Np(n,XN);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(ZN))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}nt.responsesRequiredToBeHealthy=2;nt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Kn,nt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=nt&&nt.isAvailable();let s=n&&!nt.previouslyFailed();if(e.webSocketOnly&&(n||Ke("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[nt];else{const i=this.transports_=[];for(const r of hi.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);hi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}hi.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ek=6e4,tk=5e3,nk=10*1024,sk=100*1024,Fo="t",oh="d",ik="s",ah="r",rk="e",lh="o",ch="a",uh="n",hh="p",ok="h";class ak{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Oi("c:"+this.id+":"),this.transportManager_=new hi(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Js(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>sk?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>nk?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Fo in e){const n=e[Fo];n===ch?this.upgradeIfSecondaryHealthy_():n===ah?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===lh&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ds("t",e),s=Ds("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:hh,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ch,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:uh,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ds("t",e),s=Ds("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ds(Fo,e);if(oh in e){const s=e[oh];if(n===ok){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===uh){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===ik?this.onConnectionShutdown_(s):n===ah?this.onReset_(s):n===rk?ya("Server Error: "+s):n===lh?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ya("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),wl!==s&&Ke("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Js(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(ek))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Js(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(tk))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:hh,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(wn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(e){this.allowedEvents_=e,this.listeners_={},I(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){I(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er extends Qp{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!al()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Er}getInitialEvent(e){return I(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dh=32,fh=768;class oe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Q(){return new oe("")}function K(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function on(t){return t.pieces_.length-t.pieceNum_}function ue(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new oe(t.pieces_,e)}function Jp(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function lk(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Xp(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Zp(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new oe(e,0)}function ye(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof oe)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new oe(n,0)}function q(t){return t.pieceNum_>=t.pieces_.length}function Le(t,e){const n=K(t),s=K(e);if(n===null)return e;if(n===s)return Le(ue(t),ue(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Tl(t,e){if(on(t)!==on(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function st(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(on(t)>on(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class ck{constructor(e,n){this.errorPrefix_=n,this.parts_=Xp(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Xr(this.parts_[s]);eg(this)}}function uk(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Xr(e),eg(t)}function hk(t){const e=t.parts_.pop();t.byteLength_-=Xr(e),t.parts_.length>0&&(t.byteLength_-=1)}function eg(t){if(t.byteLength_>fh)throw new Error(t.errorPrefix_+"has a key path longer than "+fh+" bytes ("+t.byteLength_+").");if(t.parts_.length>dh)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+dh+") or object contains a cycle "+bn(t))}function bn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl extends Qp{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Sl}getInitialEvent(e){return I(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ms=1e3,dk=60*5*1e3,ph=30*1e3,fk=1.3,pk=3e4,gk="server_kill",gh=3;class kt extends Yp{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=kt.nextPersistentConnectionId_++,this.log_=Oi("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ms,this.maxReconnectDelay_=dk,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!If())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Sl.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Er.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Ce(r)),I(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new ol,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),I(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;kt.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ut(e,"w")){const s=ls(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Ke(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||CR(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ph)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=wR(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ce(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ya("Unrecognized action received from server: "+Ce(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){I(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ms,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ms,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>pk&&(this.reconnectDelay_=Ms),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*fk)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+kt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){I(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ae("getToken() completed but was canceled"):(Ae("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new ak(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,g=>{Ke(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(gk)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Ke(h),l())}}}interrupt(e){Ae("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ae("Resuming connection for reason: "+e),delete this.interruptReasons_[e],aa(this.interruptReasons_)&&(this.reconnectDelay_=Ms,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>El(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new oe(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Ae("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=gh&&(this.reconnectDelay_=ph,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ae("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=gh&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Rp.replace(/\./g,"-")]=1,al()?e["framework.cordova"]=1:Cf()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Er.getInstance().currentlyOnline();return aa(this.interruptReasons_)&&e}}kt.nextPersistentConnectionId_=0;kt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new G(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new G(fs,e),i=new G(fs,n);return this.compare(s,i)!==0}minPost(){return G.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wi;class tg extends so{static get __EMPTY_NODE(){return Wi}static set __EMPTY_NODE(e){Wi=e}compare(e,n){return Ts(e.name,n.name)}isDefinedOn(e){throw ws("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return G.MIN}maxPost(){return new G(On,Wi)}makePost(e,n){return I(typeof e=="string","KeyIndex indexValue must always be a string."),new G(e,Wi)}toString(){return".key"}}const rs=new tg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class we{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??we.RED,this.left=i??$e.EMPTY_NODE,this.right=r??$e.EMPTY_NODE}copy(e,n,s,i,r){return new we(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return $e.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return $e.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,we.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,we.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}we.RED=!0;we.BLACK=!1;class _k{copy(e,n,s,i,r){return this}insert(e,n,s){return new we(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class $e{constructor(e,n=$e.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new $e(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,we.BLACK,null,null))}remove(e){return new $e(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,we.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ji(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ji(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ji(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ji(this.root_,null,this.comparator_,!0,e)}}$e.EMPTY_NODE=new _k;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mk(t,e){return Ts(t.name,e.name)}function Rl(t,e){return Ts(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ea;function vk(t){Ea=t}const ng=function(t){return typeof t=="number"?"number:"+kp(t):"string:"+t},sg=function(t){if(t.isLeafNode()){const e=t.val();I(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ut(e,".sv"),"Priority must be a string or number.")}else I(t===Ea||t.isEmpty(),"priority of unexpected type.");I(t===Ea||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _h;class Ee{constructor(e,n=Ee.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,I(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),sg(this.priorityNode_)}static set __childrenNodeConstructor(e){_h=e}static get __childrenNodeConstructor(){return _h}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ee(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ee.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return q(e)?this:K(e)===".priority"?this.priorityNode_:Ee.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ee.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=K(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(I(s!==".priority"||on(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ee.__childrenNodeConstructor.EMPTY_NODE.updateChild(ue(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ng(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=kp(this.value_):e+=this.value_,this.lazyHash_=Pp(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ee.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ee.__childrenNodeConstructor?-1:(I(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Ee.VALUE_TYPE_ORDER.indexOf(n),r=Ee.VALUE_TYPE_ORDER.indexOf(s);return I(i>=0,"Unknown leaf type: "+n),I(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ee.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ig,rg;function yk(t){ig=t}function bk(t){rg=t}class Ek extends so{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Ts(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return G.MIN}maxPost(){return new G(On,new Ee("[PRIORITY-POST]",rg))}makePost(e,n){const s=ig(e);return new G(n,new Ee("[PRIORITY-POST]",s))}toString(){return".priority"}}const ge=new Ek;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wk=Math.log(2);class Ck{constructor(e){const n=r=>parseInt(Math.log(r)/wk,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const wr=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new we(d,h.node,we.BLACK,null,null);{const g=parseInt(u/2,10)+l,m=i(l,g),b=i(g+1,c);return h=t[g],d=n?n(h):h,new we(d,h.node,we.BLACK,m,b)}},r=function(l){let c=null,u=null,h=t.length;const d=function(m,b){const O=h-m,k=h;h-=m;const P=i(O+1,k),M=t[O],x=n?n(M):M;g(new we(x,M.node,b,null,P))},g=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<l.count;++m){const b=l.nextBitIsOne(),O=Math.pow(2,l.count-(m+1));b?d(O,we.BLACK):(d(O,we.BLACK),d(O,we.RED))}return u},o=new Ck(t.length),a=r(o);return new $e(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uo;const Bn={};class Ot{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return I(Bn&&ge,"ChildrenNode.ts has not been loaded"),Uo=Uo||new Ot({".priority":Bn},{".priority":ge}),Uo}get(e){const n=ls(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof $e?n:null}hasIndex(e){return Ut(this.indexSet_,e.toString())}addIndex(e,n){I(e!==rs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(G.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=wr(s,e.getCompare()):a=Bn;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Ot(u,c)}addToIndexes(e,n){const s=dr(this.indexes_,(i,r)=>{const o=ls(this.indexSet_,r);if(I(o,"Missing index implementation for "+r),i===Bn)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(G.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),wr(a,o.getCompare())}else return Bn;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new G(e.name,a))),l.insert(e,e.node)}});return new Ot(s,this.indexSet_)}removeFromIndexes(e,n){const s=dr(this.indexes_,i=>{if(i===Bn)return i;{const r=n.get(e.name);return r?i.remove(new G(e.name,r)):i}});return new Ot(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ls;class B{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&sg(this.priorityNode_),this.children_.isEmpty()&&I(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ls||(Ls=new B(new $e(Rl),null,Ot.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ls}updatePriority(e){return this.children_.isEmpty()?this:new B(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ls:n}}getChild(e){const n=K(e);return n===null?this:this.getImmediateChild(n).getChild(ue(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(I(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new G(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Ls:this.priorityNode_;return new B(i,o,r)}}updateChild(e,n){const s=K(e);if(s===null)return n;{I(K(e)!==".priority"||on(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ue(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(ge,(o,a)=>{n[o]=a.val(e),s++,r&&B.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+ng(this.getPriority().val())+":"),this.forEachChild(ge,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Pp(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new G(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new G(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new G(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,G.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,G.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ki?-1:0}withIndex(e){if(e===rs||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new B(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===rs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(ge),i=n.getIterator(ge);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===rs?null:this.indexMap_.get(e.toString())}}B.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Ik extends B{constructor(){super(new $e(Rl),B.EMPTY_NODE,Ot.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return B.EMPTY_NODE}isEmpty(){return!1}}const ki=new Ik;Object.defineProperties(G,{MIN:{value:new G(fs,B.EMPTY_NODE)},MAX:{value:new G(On,ki)}});tg.__EMPTY_NODE=B.EMPTY_NODE;Ee.__childrenNodeConstructor=B;vk(ki);bk(ki);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tk=!0;function Pe(t,e=null){if(t===null)return B.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),I(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ee(n,Pe(e))}if(!(t instanceof Array)&&Tk){const n=[];let s=!1;if(Fe(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Pe(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new G(o,l)))}}),n.length===0)return B.EMPTY_NODE;const r=wr(n,mk,o=>o.name,Rl);if(s){const o=wr(n,ge.getCompare());return new B(r,Pe(e),new Ot({".priority":o},{".priority":ge}))}else return new B(r,Pe(e),Ot.Default)}else{let n=B.EMPTY_NODE;return Fe(t,(s,i)=>{if(Ut(t,s)&&s.substring(0,1)!=="."){const r=Pe(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Pe(e))}}yk(Pe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sk extends so{constructor(e){super(),this.indexPath_=e,I(!q(e)&&K(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Ts(e.name,n.name):r}makePost(e,n){const s=Pe(e),i=B.EMPTY_NODE.updateChild(this.indexPath_,s);return new G(n,i)}maxPost(){const e=B.EMPTY_NODE.updateChild(this.indexPath_,ki);return new G(On,e)}toString(){return Xp(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rk extends so{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Ts(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return G.MIN}maxPost(){return G.MAX}makePost(e,n){const s=Pe(e);return new G(n,s)}toString(){return".value"}}const Ak=new Rk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function og(t){return{type:"value",snapshotNode:t}}function ps(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function di(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function fi(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Pk(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){I(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(di(n,a)):I(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(ps(n,s)):o.trackChildChange(fi(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(ge,(i,r)=>{n.hasChild(i)||s.trackChildChange(di(i,r))}),n.isLeafNode()||n.forEachChild(ge,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(fi(i,r,o))}else s.trackChildChange(ps(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?B.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e){this.indexedFilter_=new Al(e.getIndex()),this.index_=e.getIndex(),this.startPost_=pi.getStartPost_(e),this.endPost_=pi.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new G(n,s))||(s=B.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=B.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(B.EMPTY_NODE);const r=this;return n.forEachChild(ge,(o,a)=>{r.matches(new G(o,a))||(i=i.updateImmediateChild(o,B.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ok{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new pi(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new G(n,s))||(s=B.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=B.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=B.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(B.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,B.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,g)=>h(g,d)}else o=this.index_.getCompare();const a=e;I(a.numChildren()===this.limit_,"");const l=new G(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const g=d==null?1:o(d,l);if(u&&!s.isEmpty()&&g>=0)return r!=null&&r.trackChildChange(fi(n,s,h)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(di(n,h));const b=a.updateImmediateChild(n,B.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(ps(d.name,d.node)),b.updateImmediateChild(d.name,d.node)):b}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(di(c.name,c.node)),r.trackChildChange(ps(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,B.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ge}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return I(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return I(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:fs}hasEnd(){return this.endSet_}getIndexEndValue(){return I(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return I(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:On}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return I(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ge}copy(){const e=new Pl;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Nk(t){return t.loadsAllData()?new Al(t.getIndex()):t.hasLimit()?new Ok(t):new pi(t)}function mh(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ge?n="$priority":t.index_===Ak?n="$value":t.index_===rs?n="$key":(I(t.index_ instanceof Sk,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ce(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Ce(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Ce(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Ce(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Ce(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function vh(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ge&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr extends Yp{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Oi("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(I(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Cr.getListenId_(e,s),a={};this.listens_[o]=a;const l=mh(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),ls(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=Cr.getListenId_(e,n);delete this.listens_[s]}get(e){const n=mh(e._queryParams),s=e._path.toString(),i=new ol;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Cs(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=oi(a.responseText)}catch{Ke("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&Ke("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kk{constructor(){this.rootNode_=B.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(){return{value:null,children:new Map}}function ag(t,e,n){if(q(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=K(e);t.children.has(s)||t.children.set(s,Ir());const i=t.children.get(s);e=ue(e),ag(i,e,n)}}function wa(t,e,n){t.value!==null?n(e,t.value):xk(t,(s,i)=>{const r=new oe(e.toString()+"/"+s);wa(i,r,n)})}function xk(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dk{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Fe(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yh=10*1e3,Mk=30*1e3,Lk=5*60*1e3;class $k{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Dk(e);const s=yh+(Mk-yh)*Math.random();Js(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Fe(e,(i,r)=>{r>0&&Ut(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Js(this.reportStats_.bind(this),Math.floor(Math.random()*2*Lk))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var it;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(it||(it={}));function lg(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ol(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Nl(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=it.ACK_USER_WRITE,this.source=lg()}operationForChild(e){if(q(this.path)){if(this.affectedTree.value!=null)return I(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new oe(e));return new Tr(Q(),n,this.revert)}}else return I(K(this.path)===e,"operationForChild called for unrelated child."),new Tr(ue(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e,n){this.source=e,this.path=n,this.type=it.LISTEN_COMPLETE}operationForChild(e){return q(this.path)?new gi(this.source,Q()):new gi(this.source,ue(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=it.OVERWRITE}operationForChild(e){return q(this.path)?new Nn(this.source,Q(),this.snap.getImmediateChild(e)):new Nn(this.source,ue(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=it.MERGE}operationForChild(e){if(q(this.path)){const n=this.children.subtree(new oe(e));return n.isEmpty()?null:n.value?new Nn(this.source,Q(),n.value):new _i(this.source,Q(),n)}else return I(K(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new _i(this.source,ue(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(q(e))return this.isFullyInitialized()&&!this.filtered_;const n=K(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fk{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Uk(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Pk(o.childName,o.snapshotNode))}),$s(t,i,"child_removed",e,s,n),$s(t,i,"child_added",e,s,n),$s(t,i,"child_moved",r,s,n),$s(t,i,"child_changed",e,s,n),$s(t,i,"value",e,s,n),i}function $s(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>Bk(t,a,l)),o.forEach(a=>{const l=Hk(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function Hk(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Bk(t,e,n){if(e.childName==null||n.childName==null)throw ws("Should only compare child_ events.");const s=new G(e.childName,e.snapshotNode),i=new G(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(t,e){return{eventCache:t,serverCache:e}}function Xs(t,e,n,s){return io(new kn(e,n,s),t.serverCache)}function cg(t,e,n,s){return io(t.eventCache,new kn(e,n,s))}function Ca(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function xn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ho;const Wk=()=>(Ho||(Ho=new $e(RN)),Ho);class fe{constructor(e,n=Wk()){this.value=e,this.children=n}static fromObject(e){let n=new fe(null);return Fe(e,(s,i)=>{n=n.set(new oe(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Q(),value:this.value};if(q(e))return null;{const s=K(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ue(e),n);return r!=null?{path:ye(new oe(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(q(e))return this;{const n=K(e),s=this.children.get(n);return s!==null?s.subtree(ue(e)):new fe(null)}}set(e,n){if(q(e))return new fe(n,this.children);{const s=K(e),r=(this.children.get(s)||new fe(null)).set(ue(e),n),o=this.children.insert(s,r);return new fe(this.value,o)}}remove(e){if(q(e))return this.children.isEmpty()?new fe(null):new fe(null,this.children);{const n=K(e),s=this.children.get(n);if(s){const i=s.remove(ue(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new fe(null):new fe(this.value,r)}else return this}}get(e){if(q(e))return this.value;{const n=K(e),s=this.children.get(n);return s?s.get(ue(e)):null}}setTree(e,n){if(q(e))return n;{const s=K(e),r=(this.children.get(s)||new fe(null)).setTree(ue(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new fe(this.value,o)}}fold(e){return this.fold_(Q(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(ye(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Q(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(q(e))return null;{const r=K(e),o=this.children.get(r);return o?o.findOnPath_(ue(e),ye(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Q(),n)}foreachOnPath_(e,n,s){if(q(e))return this;{this.value&&s(n,this.value);const i=K(e),r=this.children.get(i);return r?r.foreachOnPath_(ue(e),ye(n,i),s):new fe(null)}}foreach(e){this.foreach_(Q(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(ye(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.writeTree_=e}static empty(){return new ot(new fe(null))}}function Zs(t,e,n){if(q(e))return new ot(new fe(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Le(i,e);return r=r.updateChild(o,n),new ot(t.writeTree_.set(i,r))}else{const i=new fe(n),r=t.writeTree_.setTree(e,i);return new ot(r)}}}function bh(t,e,n){let s=t;return Fe(n,(i,r)=>{s=Zs(s,ye(e,i),r)}),s}function Eh(t,e){if(q(e))return ot.empty();{const n=t.writeTree_.setTree(e,new fe(null));return new ot(n)}}function Ia(t,e){return Mn(t,e)!=null}function Mn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Le(n.path,e)):null}function wh(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ge,(s,i)=>{e.push(new G(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new G(s,i.value))}),e}function rn(t,e){if(q(e))return t;{const n=Mn(t,e);return n!=null?new ot(new fe(n)):new ot(t.writeTree_.subtree(e))}}function Ta(t){return t.writeTree_.isEmpty()}function gs(t,e){return ug(Q(),t.writeTree_,e)}function ug(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(I(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=ug(ye(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(ye(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kl(t,e){return pg(e,t)}function jk(t,e,n,s,i){I(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Zs(t.visibleWrites,e,n)),t.lastWriteId=s}function Vk(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function Gk(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);I(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Kk(a,s.path)?i=!1:st(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return qk(t),!0;if(s.snap)t.visibleWrites=Eh(t.visibleWrites,s.path);else{const a=s.children;Fe(a,l=>{t.visibleWrites=Eh(t.visibleWrites,ye(s.path,l))})}return!0}else return!1}function Kk(t,e){if(t.snap)return st(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&st(ye(t.path,n),e))return!0;return!1}function qk(t){t.visibleWrites=hg(t.allWrites,zk,Q()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function zk(t){return t.visible}function hg(t,e,n){let s=ot.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)st(n,o)?(a=Le(n,o),s=Zs(s,a,r.snap)):st(o,n)&&(a=Le(o,n),s=Zs(s,Q(),r.snap.getChild(a)));else if(r.children){if(st(n,o))a=Le(n,o),s=bh(s,a,r.children);else if(st(o,n))if(a=Le(o,n),q(a))s=bh(s,Q(),r.children);else{const l=ls(r.children,K(a));if(l){const c=l.getChild(ue(a));s=Zs(s,Q(),c)}}}else throw ws("WriteRecord should have .snap or .children")}}return s}function dg(t,e,n,s,i){if(!s&&!i){const r=Mn(t.visibleWrites,e);if(r!=null)return r;{const o=rn(t.visibleWrites,e);if(Ta(o))return n;if(n==null&&!Ia(o,Q()))return null;{const a=n||B.EMPTY_NODE;return gs(o,a)}}}else{const r=rn(t.visibleWrites,e);if(!i&&Ta(r))return n;if(!i&&n==null&&!Ia(r,Q()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(st(c.path,e)||st(e,c.path))},a=hg(t.allWrites,o,e),l=n||B.EMPTY_NODE;return gs(a,l)}}}function Yk(t,e,n){let s=B.EMPTY_NODE;const i=Mn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ge,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=rn(t.visibleWrites,e);return n.forEachChild(ge,(o,a)=>{const l=gs(rn(r,new oe(o)),a);s=s.updateImmediateChild(o,l)}),wh(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=rn(t.visibleWrites,e);return wh(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Qk(t,e,n,s,i){I(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=ye(e,n);if(Ia(t.visibleWrites,r))return null;{const o=rn(t.visibleWrites,r);return Ta(o)?i.getChild(n):gs(o,i.getChild(n))}}function Jk(t,e,n,s){const i=ye(e,n),r=Mn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=rn(t.visibleWrites,i);return gs(o,s.getNode().getImmediateChild(n))}else return null}function Xk(t,e){return Mn(t.visibleWrites,e)}function Zk(t,e,n,s,i,r,o){let a;const l=rn(t.visibleWrites,e),c=Mn(l,Q());if(c!=null)a=c;else if(n!=null)a=gs(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let g=d.getNext();for(;g&&u.length<i;)h(g,s)!==0&&u.push(g),g=d.getNext();return u}else return[]}function ex(){return{visibleWrites:ot.empty(),allWrites:[],lastWriteId:-1}}function Sr(t,e,n,s){return dg(t.writeTree,t.treePath,e,n,s)}function xl(t,e){return Yk(t.writeTree,t.treePath,e)}function Ch(t,e,n,s){return Qk(t.writeTree,t.treePath,e,n,s)}function Rr(t,e){return Xk(t.writeTree,ye(t.treePath,e))}function tx(t,e,n,s,i,r){return Zk(t.writeTree,t.treePath,e,n,s,i,r)}function Dl(t,e,n){return Jk(t.writeTree,t.treePath,e,n)}function fg(t,e){return pg(ye(t.treePath,e),t.writeTree)}function pg(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nx{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;I(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),I(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,fi(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,di(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,ps(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,fi(s,e.snapshotNode,i.oldSnap));else throw ws("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sx{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const gg=new sx;class Ml{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new kn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Dl(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:xn(this.viewCache_),r=tx(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ix(t){return{filter:t}}function rx(t,e){I(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),I(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function ox(t,e,n,s,i){const r=new nx;let o,a;if(n.type===it.OVERWRITE){const c=n;c.source.fromUser?o=Sa(t,e,c.path,c.snap,s,i,r):(I(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!q(c.path),o=Ar(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===it.MERGE){const c=n;c.source.fromUser?o=lx(t,e,c.path,c.children,s,i,r):(I(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Ra(t,e,c.path,c.children,s,i,a,r))}else if(n.type===it.ACK_USER_WRITE){const c=n;c.revert?o=hx(t,e,c.path,s,i,r):o=cx(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===it.LISTEN_COMPLETE)o=ux(t,e,n.path,s,r);else throw ws("Unknown operation type: "+n.type);const l=r.getChanges();return ax(e,o,l),{viewCache:o,changes:l}}function ax(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Ca(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(og(Ca(e)))}}function _g(t,e,n,s,i,r){const o=e.eventCache;if(Rr(s,n)!=null)return e;{let a,l;if(q(n))if(I(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=xn(e),u=c instanceof B?c:B.EMPTY_NODE,h=xl(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Sr(s,xn(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=K(n);if(c===".priority"){I(on(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=Ch(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=ue(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=Ch(s,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=Dl(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return Xs(e,a,o.isFullyInitialized()||q(n),t.filter.filtersNodes())}}function Ar(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(q(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),g,null)}else{const g=K(n);if(!l.isCompleteForPath(n)&&on(n)>1)return e;const m=ue(n),O=l.getNode().getImmediateChild(g).updateChild(m,s);g===".priority"?c=u.updatePriority(l.getNode(),O):c=u.updateChild(l.getNode(),g,O,m,gg,null)}const h=cg(e,c,l.isFullyInitialized()||q(n),u.filtersNodes()),d=new Ml(i,h,r);return _g(t,h,n,i,d,a)}function Sa(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new Ml(i,e,r);if(q(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Xs(e,c,!0,t.filter.filtersNodes());else{const h=K(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=Xs(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=ue(n),g=a.getNode().getImmediateChild(h);let m;if(q(d))m=s;else{const b=u.getCompleteChild(h);b!=null?Jp(d)===".priority"&&b.getChild(Zp(d)).isEmpty()?m=b:m=b.updateChild(d,s):m=B.EMPTY_NODE}if(g.equals(m))l=e;else{const b=t.filter.updateChild(a.getNode(),h,m,d,u,o);l=Xs(e,b,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Ih(t,e){return t.eventCache.isCompleteForChild(e)}function lx(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=ye(n,l);Ih(e,K(u))&&(a=Sa(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=ye(n,l);Ih(e,K(u))||(a=Sa(t,a,u,c,i,r,o))}),a}function Th(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Ra(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;q(n)?c=s:c=new fe(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const g=e.serverCache.getNode().getImmediateChild(h),m=Th(t,g,d);l=Ar(t,l,new oe(h),m,i,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const g=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!g){const m=e.serverCache.getNode().getImmediateChild(h),b=Th(t,m,d);l=Ar(t,l,new oe(h),b,i,r,o,a)}}),l}function cx(t,e,n,s,i,r,o){if(Rr(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(q(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Ar(t,e,n,l.getNode().getChild(n),i,r,a,o);if(q(n)){let c=new fe(null);return l.getNode().forEachChild(rs,(u,h)=>{c=c.set(new oe(u),h)}),Ra(t,e,n,c,i,r,a,o)}else return e}else{let c=new fe(null);return s.foreach((u,h)=>{const d=ye(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),Ra(t,e,n,c,i,r,a,o)}}function ux(t,e,n,s,i){const r=e.serverCache,o=cg(e,r.getNode(),r.isFullyInitialized()||q(n),r.isFiltered());return _g(t,o,n,s,gg,i)}function hx(t,e,n,s,i,r){let o;if(Rr(s,n)!=null)return e;{const a=new Ml(s,e,i),l=e.eventCache.getNode();let c;if(q(n)||K(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Sr(s,xn(e));else{const h=e.serverCache.getNode();I(h instanceof B,"serverChildren would be complete if leaf node"),u=xl(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=K(n);let h=Dl(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,ue(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,B.EMPTY_NODE,ue(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Sr(s,xn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Rr(s,Q())!=null,Xs(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dx{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Al(s.getIndex()),r=Nk(s);this.processor_=ix(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(B.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(B.EMPTY_NODE,a.getNode(),null),u=new kn(l,o.isFullyInitialized(),i.filtersNodes()),h=new kn(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=io(h,u),this.eventGenerator_=new Fk(this.query_)}get query(){return this.query_}}function fx(t){return t.viewCache_.serverCache.getNode()}function px(t,e){const n=xn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!q(e)&&!n.getImmediateChild(K(e)).isEmpty())?n.getChild(e):null}function Sh(t){return t.eventRegistrations_.length===0}function gx(t,e){t.eventRegistrations_.push(e)}function Rh(t,e,n){const s=[];if(n){I(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Ah(t,e,n,s){e.type===it.MERGE&&e.source.queryId!==null&&(I(xn(t.viewCache_),"We should always have a full cache before handling merges"),I(Ca(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=ox(t.processor_,i,e,n,s);return rx(t.processor_,r.viewCache),I(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,mg(t,r.changes,r.viewCache.eventCache.getNode(),null)}function _x(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ge,(r,o)=>{s.push(ps(r,o))}),n.isFullyInitialized()&&s.push(og(n.getNode())),mg(t,s,n.getNode(),e)}function mg(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Uk(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pr;class mx{constructor(){this.views=new Map}}function vx(t){I(!Pr,"__referenceConstructor has already been defined"),Pr=t}function yx(){return I(Pr,"Reference.ts has not been loaded"),Pr}function bx(t){return t.views.size===0}function Ll(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return I(r!=null,"SyncTree gave us an op for an invalid query."),Ah(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Ah(o,e,n,s));return r}}function Ex(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=Sr(n,i?s:null),l=!1;a?l=!0:s instanceof B?(a=xl(n,s),l=!1):(a=B.EMPTY_NODE,l=!1);const c=io(new kn(a,l,!1),new kn(s,i,!1));return new dx(e,c)}return o}function wx(t,e,n,s,i,r){const o=Ex(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),gx(o,n),_x(o,n)}function Cx(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=an(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(Rh(c,n,s)),Sh(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(Rh(l,n,s)),Sh(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!an(t)&&r.push(new(yx())(e._repo,e._path)),{removed:r,events:o}}function vg(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function os(t,e){let n=null;for(const s of t.views.values())n=n||px(s,e);return n}function yg(t,e){if(e._queryParams.loadsAllData())return ro(t);{const s=e._queryIdentifier;return t.views.get(s)}}function bg(t,e){return yg(t,e)!=null}function an(t){return ro(t)!=null}function ro(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Or;function Ix(t){I(!Or,"__referenceConstructor has already been defined"),Or=t}function Tx(){return I(Or,"Reference.ts has not been loaded"),Or}let Sx=1;class Ph{constructor(e){this.listenProvider_=e,this.syncPointTree_=new fe(null),this.pendingWriteTree_=ex(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Rx(t,e,n,s,i){return jk(t.pendingWriteTree_,e,n,s,i),i?xi(t,new Nn(lg(),e,n)):[]}function qn(t,e,n=!1){const s=Vk(t.pendingWriteTree_,e);if(Gk(t.pendingWriteTree_,e)){let r=new fe(null);return s.snap!=null?r=r.set(Q(),!0):Fe(s.children,o=>{r=r.set(new oe(o),!0)}),xi(t,new Tr(s.path,r,n))}else return[]}function oo(t,e,n){return xi(t,new Nn(Ol(),e,n))}function Ax(t,e,n){const s=fe.fromObject(n);return xi(t,new _i(Ol(),e,s))}function Px(t,e){return xi(t,new gi(Ol(),e))}function Ox(t,e,n){const s=$l(t,n);if(s){const i=Fl(s),r=i.path,o=i.queryId,a=Le(r,e),l=new gi(Nl(o),a);return Ul(t,r,l)}else return[]}function Aa(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||bg(o,e))){const l=Cx(o,e,n,s);bx(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(d,g)=>an(g));if(u&&!h){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const g=xx(d);for(let m=0;m<g.length;++m){const b=g[m],O=b.query,k=Ig(t,b);t.listenProvider_.startListening(ei(O),Nr(t,O),k.hashFn,k.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(ei(e),null):c.forEach(d=>{const g=t.queryToTagMap.get(ao(d));t.listenProvider_.stopListening(ei(d),g)}))}Dx(t,c)}return a}function Nx(t,e,n,s){const i=$l(t,s);if(i!=null){const r=Fl(i),o=r.path,a=r.queryId,l=Le(o,e),c=new Nn(Nl(a),l,n);return Ul(t,o,c)}else return[]}function kx(t,e,n,s){const i=$l(t,s);if(i){const r=Fl(i),o=r.path,a=r.queryId,l=Le(o,e),c=fe.fromObject(n),u=new _i(Nl(a),l,c);return Ul(t,o,u)}else return[]}function Oh(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,g)=>{const m=Le(d,i);r=r||os(g,m),o=o||an(g)});let a=t.syncPointTree_.get(i);a?(o=o||an(a),r=r||os(a,Q())):(a=new mx,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=B.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,m)=>{const b=os(m,Q());b&&(r=r.updateImmediateChild(g,b))}));const c=bg(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=ao(e);I(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const g=Mx();t.queryToTagMap.set(d,g),t.tagToQueryMap.set(g,d)}const u=kl(t.pendingWriteTree_,i);let h=wx(a,e,n,u,r,l);if(!c&&!o&&!s){const d=yg(a,e);h=h.concat(Lx(t,e,d))}return h}function Eg(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Le(o,e),c=os(a,l);if(c)return c});return dg(i,e,r,n,!0)}function xi(t,e){return wg(e,t.syncPointTree_,null,kl(t.pendingWriteTree_,Q()))}function wg(t,e,n,s){if(q(t.path))return Cg(t,e,n,s);{const i=e.get(Q());n==null&&i!=null&&(n=os(i,Q()));let r=[];const o=K(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=fg(s,o);r=r.concat(wg(a,l,c,u))}return i&&(r=r.concat(Ll(i,t,s,n))),r}}function Cg(t,e,n,s){const i=e.get(Q());n==null&&i!=null&&(n=os(i,Q()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=fg(s,o),u=t.operationForChild(o);u&&(r=r.concat(Cg(u,a,l,c)))}),i&&(r=r.concat(Ll(i,t,s,n))),r}function Ig(t,e){const n=e.query,s=Nr(t,n);return{hashFn:()=>(fx(e)||B.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Ox(t,n._path,s):Px(t,n._path);{const r=ON(i,n);return Aa(t,n,null,r)}}}}function Nr(t,e){const n=ao(e);return t.queryToTagMap.get(n)}function ao(t){return t._path.toString()+"$"+t._queryIdentifier}function $l(t,e){return t.tagToQueryMap.get(e)}function Fl(t){const e=t.indexOf("$");return I(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new oe(t.substr(0,e))}}function Ul(t,e,n){const s=t.syncPointTree_.get(e);I(s,"Missing sync point for query tag that we're tracking");const i=kl(t.pendingWriteTree_,e);return Ll(s,n,i,null)}function xx(t){return t.fold((e,n,s)=>{if(n&&an(n))return[ro(n)];{let i=[];return n&&(i=vg(n)),Fe(s,(r,o)=>{i=i.concat(o)}),i}})}function ei(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Tx())(t._repo,t._path):t}function Dx(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=ao(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function Mx(){return Sx++}function Lx(t,e,n){const s=e._path,i=Nr(t,e),r=Ig(t,n),o=t.listenProvider_.startListening(ei(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)I(!an(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!q(c)&&u&&an(u))return[ro(u).query];{let d=[];return u&&(d=d.concat(vg(u).map(g=>g.query))),Fe(h,(g,m)=>{d=d.concat(m)}),d}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(ei(u),Nr(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Hl(n)}node(){return this.node_}}class Bl{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ye(this.path_,e);return new Bl(this.syncTree_,n)}node(){return Eg(this.syncTree_,this.path_)}}const $x=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Nh=function(t,e,n){if(!t||typeof t!="object")return t;if(I(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Fx(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Ux(t[".sv"],e);I(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Fx=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:I(!1,"Unexpected server value: "+t)}},Ux=function(t,e,n){t.hasOwnProperty("increment")||I(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&I(!1,"Unexpected increment value: "+s);const i=e.node();if(I(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Hx=function(t,e,n,s){return Wl(e,new Bl(n,t),s)},Bx=function(t,e,n){return Wl(t,new Hl(e),n)};function Wl(t,e,n){const s=t.getPriority().val(),i=Nh(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Nh(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ee(a,Pe(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Ee(i))),o.forEachChild(ge,(a,l)=>{const c=Wl(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Vl(t,e){let n=e instanceof oe?e:new oe(e),s=t,i=K(n);for(;i!==null;){const r=ls(s.node.children,i)||{children:{},childCount:0};s=new jl(i,s,r),n=ue(n),i=K(n)}return s}function Ss(t){return t.node.value}function Tg(t,e){t.node.value=e,Pa(t)}function Sg(t){return t.node.childCount>0}function Wx(t){return Ss(t)===void 0&&!Sg(t)}function lo(t,e){Fe(t.node.children,(n,s)=>{e(new jl(n,t,s))})}function Rg(t,e,n,s){n&&!s&&e(t),lo(t,i=>{Rg(i,e,!0,s)}),n&&s&&e(t)}function jx(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Di(t){return new oe(t.parent===null?t.name:Di(t.parent)+"/"+t.name)}function Pa(t){t.parent!==null&&Vx(t.parent,t.name,t)}function Vx(t,e,n){const s=Wx(n),i=Ut(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Pa(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Pa(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gx=/[\[\].#$\/\u0000-\u001F\u007F]/,Kx=/[\[\].#$\u0000-\u001F\u007F]/,Bo=10*1024*1024,Ag=function(t){return typeof t=="string"&&t.length!==0&&!Gx.test(t)},Pg=function(t){return typeof t=="string"&&t.length!==0&&!Kx.test(t)},qx=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Pg(t)},Og=function(t,e,n){const s=n instanceof oe?new ck(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+bn(s));if(typeof e=="function")throw new Error(t+"contains a function "+bn(s)+" with contents = "+e.toString());if(Op(e))throw new Error(t+"contains "+e.toString()+" "+bn(s));if(typeof e=="string"&&e.length>Bo/3&&Xr(e)>Bo)throw new Error(t+"contains a string greater than "+Bo+" utf8 bytes "+bn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Fe(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Ag(o)))throw new Error(t+" contains an invalid key ("+o+") "+bn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);uk(s,o),Og(t,a,s),hk(s)}),i&&r)throw new Error(t+' contains ".value" child '+bn(s)+" in addition to actual children.")}},Ng=function(t,e,n,s){if(!Pg(n))throw new Error(Sf(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},zx=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Ng(t,e,n)},Yx=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ag(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!qx(n))throw new Error(Sf(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qx{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function kg(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Tl(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function xg(t,e,n){kg(t,n),Dg(t,s=>Tl(s,e))}function Ln(t,e,n){kg(t,n),Dg(t,s=>st(s,e)||st(e,s))}function Dg(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(Jx(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Jx(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Qs&&Ae("event: "+n.toString()),Ni(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xx="repo_interrupt",Zx=25;class e1{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Qx,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ir(),this.transactionQueueTree_=new jl,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function t1(t,e,n){if(t.stats_=Cl(t.repoInfo_),t.forceRestClient_||DN())t.server_=new Cr(t.repoInfo_,(s,i,r,o)=>{kh(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>xh(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ce(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new kt(t.repoInfo_,e,(s,i,r,o)=>{kh(t,s,i,r,o)},s=>{xh(t,s)},s=>{s1(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=UN(t.repoInfo_,()=>new $k(t.stats_,t.server_)),t.infoData_=new kk,t.infoSyncTree_=new Ph({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=oo(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Gl(t,"connected",!1),t.serverSyncTree_=new Ph({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);Ln(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function n1(t){const n=t.infoData_.getNode(new oe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Mg(t){return $x({timestamp:n1(t)})}function kh(t,e,n,s,i){t.dataUpdateCount++;const r=new oe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=dr(n,c=>Pe(c));o=kx(t.serverSyncTree_,r,l,i)}else{const l=Pe(n);o=Nx(t.serverSyncTree_,r,l,i)}else if(s){const l=dr(n,c=>Pe(c));o=Ax(t.serverSyncTree_,r,l)}else{const l=Pe(n);o=oo(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=ql(t,r)),Ln(t.eventQueue_,a,o)}function xh(t,e){Gl(t,"connected",e),e===!1&&r1(t)}function s1(t,e){Fe(e,(n,s)=>{Gl(t,n,s)})}function Gl(t,e,n){const s=new oe("/.info/"+e),i=Pe(n);t.infoData_.updateSnapshot(s,i);const r=oo(t.infoSyncTree_,s,i);Ln(t.eventQueue_,s,r)}function i1(t){return t.nextWriteId_++}function r1(t){Lg(t,"onDisconnectEvents");const e=Mg(t),n=Ir();wa(t.onDisconnect_,Q(),(i,r)=>{const o=Hx(i,r,t.serverSyncTree_,e);ag(n,i,o)});let s=[];wa(n,Q(),(i,r)=>{s=s.concat(oo(t.serverSyncTree_,i,r));const o=u1(t,i);ql(t,o)}),t.onDisconnect_=Ir(),Ln(t.eventQueue_,Q(),s)}function o1(t,e,n){let s;K(e._path)===".info"?s=Oh(t.infoSyncTree_,e,n):s=Oh(t.serverSyncTree_,e,n),xg(t.eventQueue_,e._path,s)}function Dh(t,e,n){let s;K(e._path)===".info"?s=Aa(t.infoSyncTree_,e,n):s=Aa(t.serverSyncTree_,e,n),xg(t.eventQueue_,e._path,s)}function a1(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Xx)}function Lg(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ae(n,...e)}function $g(t,e,n){return Eg(t.serverSyncTree_,e,n)||B.EMPTY_NODE}function Kl(t,e=t.transactionQueueTree_){if(e||co(t,e),Ss(e)){const n=Ug(t,e);I(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&l1(t,Di(e),n)}else Sg(e)&&lo(e,n=>{Kl(t,n)})}function l1(t,e,n){const s=n.map(c=>c.currentWriteId),i=$g(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];I(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Le(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Lg(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(qn(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();co(t,Vl(t.transactionQueueTree_,e)),Kl(t,t.transactionQueueTree_),Ln(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)Ni(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Ke("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}ql(t,e)}},o)}function ql(t,e){const n=Fg(t,e),s=Di(n),i=Ug(t,n);return c1(t,i,s),s}function c1(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Le(n,l.path);let u=!1,h;if(I(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(qn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Zx)u=!0,h="maxretry",i=i.concat(qn(t.serverSyncTree_,l.currentWriteId,!0));else{const d=$g(t,l.path,o);l.currentInputSnapshot=d;const g=e[a].update(d.val());if(g!==void 0){Og("transaction failed: Data returned ",g,l.path);let m=Pe(g);typeof g=="object"&&g!=null&&Ut(g,".priority")||(m=m.updatePriority(d.getPriority()));const O=l.currentWriteId,k=Mg(t),P=Bx(m,d,k);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=P,l.currentWriteId=i1(t),o.splice(o.indexOf(O),1),i=i.concat(Rx(t.serverSyncTree_,l.path,P,l.currentWriteId,l.applyLocally)),i=i.concat(qn(t.serverSyncTree_,O,!0))}else u=!0,h="nodata",i=i.concat(qn(t.serverSyncTree_,l.currentWriteId,!0))}Ln(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}co(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Ni(s[a]);Kl(t,t.transactionQueueTree_)}function Fg(t,e){let n,s=t.transactionQueueTree_;for(n=K(e);n!==null&&Ss(s)===void 0;)s=Vl(s,n),e=ue(e),n=K(e);return s}function Ug(t,e){const n=[];return Hg(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Hg(t,e,n){const s=Ss(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);lo(e,i=>{Hg(t,i,n)})}function co(t,e){const n=Ss(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Tg(e,n.length>0?n:void 0)}lo(e,s=>{co(t,s)})}function u1(t,e){const n=Di(Fg(t,e)),s=Vl(t.transactionQueueTree_,e);return jx(s,i=>{Wo(t,i)}),Wo(t,s),Rg(s,i=>{Wo(t,i)}),n}function Wo(t,e){const n=Ss(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(I(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(I(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(qn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Tg(e,void 0):n.length=r+1,Ln(t.eventQueue_,Di(e),i);for(let o=0;o<s.length;o++)Ni(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h1(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function d1(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Ke(`Invalid query segment '${n}' in query '${t}'`)}return e}const Mh=function(t,e){const n=f1(t),s=n.namespace;n.domain==="firebase.com"&&Lt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Lt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||TN();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Wp(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new oe(n.pathString)}},f1=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=h1(t.substring(u,h)));const d=d1(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const g=e.slice(0,c);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ce(this.snapshot.exportVal())}}class g1{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _1{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return I(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return q(this._path)?null:Jp(this._path)}get ref(){return new fn(this._repo,this._path)}get _queryIdentifier(){const e=vh(this._queryParams),n=El(e);return n==="{}"?"default":n}get _queryObject(){return vh(this._queryParams)}isEqual(e){if(e=bt(e),!(e instanceof zl))return!1;const n=this._repo===e._repo,s=Tl(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+lk(this._path)}}class fn extends zl{constructor(e,n){super(e,n,new Pl,!1)}get parent(){const e=Zp(this._path);return e===null?null:new fn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class kr{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new oe(e),s=Oa(this.ref,e);return new kr(this._node.getChild(n),s,ge)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new kr(i,Oa(this.ref,s),ge)))}hasChild(e){const n=new oe(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Bg(t,e){return t=bt(t),t._checkNotDeleted("ref"),e!==void 0?Oa(t._root,e):t._root}function Oa(t,e){return t=bt(t),K(t._path)===null?zx("child","path",e):Ng("child","path",e),new fn(t._repo,ye(t._path,e))}class Yl{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new p1("value",this,new kr(e.snapshotNode,new fn(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new g1(this,e,n):null}matches(e){return e instanceof Yl?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function m1(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const l=n,c=(u,h)=>{Dh(t._repo,t,a),l(u,h)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new _1(n,r||void 0),a=new Yl(o);return o1(t._repo,t,a),()=>Dh(t._repo,t,a)}function Lh(t,e,n,s){return m1(t,"value",e,n,s)}vx(fn);Ix(fn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v1="FIREBASE_DATABASE_EMULATOR_HOST",Na={};let y1=!1;function b1(t,e,n,s){t.repoInfo_=new Wp(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function E1(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Lt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ae("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Mh(r,i),a=o.repoInfo,l;typeof process<"u"&&eh&&(l=eh[v1]),l?(r=`http://${l}?ns=${a.namespace}`,o=Mh(r,i),a=o.repoInfo):o.repoInfo.secure;const c=new LN(t.name,t.options,e);Yx("Invalid Firebase Database URL",o),q(o.path)||Lt("Database URL must point to the root of a Firebase Database (not including a child path).");const u=C1(a,t,c,new MN(t.name,n));return new I1(u,t)}function w1(t,e){const n=Na[e];(!n||n[t.key]!==t)&&Lt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),a1(t),delete n[t.key]}function C1(t,e,n,s){let i=Na[e.name];i||(i={},Na[e.name]=i);let r=i[t.toURLString()];return r&&Lt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new e1(t,y1,n,s),i[t.toURLString()]=r,r}class I1{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(t1(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new fn(this._repo,Q())),this._rootInternal}_delete(){return this._rootInternal!==null&&(w1(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Lt("Cannot call "+e+" on a deleted database.")}}function T1(t=Of(),e){const n=ul(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=dR("database");s&&S1(n,...s)}return n}function S1(t,e,n,s={}){t=bt(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Lt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Lt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Zi(Zi.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:fR(s.mockUserToken,t.app.options.projectId);r=new Zi(o)}b1(i,e,n,r)}/**
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
 */function R1(t){yN(Is),cs(new An("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return E1(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),sn(th,nh,t),sn(th,nh,"esm2017")}kt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};kt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};R1();const A1={apiKey:"AIzaSyDU95egjb7rapaUJuVJYu0ZeSbP0OLaeCE",authDomain:"autolearn-members.asia-southeast1.firebaseapp.com",projectId:"autolearn-members",storageBucket:"autolearn-members.appspot.com",messagingSenderId:"535565819374",appId:"1:535565819374:web:ccfe472f513439f3a002ff",measurementId:"G-NTHZSSX71G",databaseURL:"https://autolearn-members-default-rtdb.asia-southeast1.firebasedatabase.app/"},Wg=Pf(A1);fp(Wg);const jg=T1(Wg),P1=Bg(jg,"projects"),O1=Bg(jg,"supervisors"),N1=yi({name:"HomeView",props:{isLogin:{type:Boolean,default:!1}},setup(){const t=en([]),e=en([]),n=new Array,s=en(n);return Ka(()=>{Lh(P1,i=>{const r=i.val();t.value=Object.values(r)},i=>{console.error("讀取專案資料時出錯",i)}),Lh(O1,i=>{const r=i.val();e.value=Object.values(r)},i=>{console.error("讀取理監事資料時出錯",i)})}),{projects:t,supervisors:e,visibleEmails:s}},methods:{toggleLogin(){this.$emit("toggleLogin")},toggleEmail(t){this.visibleEmails.includes(t)?this.visibleEmails.splice(this.visibleEmails.indexOf(t),1):this.visibleEmails.push(t)}}}),k1={class:"ui container"},x1={class:"ui four doubling stackable cards"},D1={class:"card"},M1={class:"content"},L1={class:"description"},$1={key:0},F1=["href"],U1={key:1};function H1(t,e,n,s,i,r){return pt(),qt("main",k1,[e[3]||(e[3]=F("h1",{class:"ui header"},"自主學習促進會",-1)),F("div",x1,[e[2]||(e[2]=Sm('<div class="card" data-v-6205c94b><div class="content" data-v-6205c94b><div class="header" data-v-6205c94b>本會歷史</div><div class="description" style="max-height:300px;overflow-y:auto;" data-v-6205c94b><p data-v-6205c94b>自主學習促進會的歷史可追溯至1994年種籽親子實驗小學的創立，這是台灣民主學校的先驅。</p><p data-v-6205c94b>1998年，台北市自主學習實驗計畫開始，為期六年，證明了自主學習理念在中學階段的可行性。</p><p data-v-6205c94b>2000年，面臨停辦危機時，學生發起了台灣首次中學生自發的學運，成功爭取續辦至第三屆學生畢業。</p><p data-v-6205c94b>2001年3月，為延續自主學習的經驗與知識，本會正式成立。</p><p data-v-6205c94b>2006-2008年間，本會通過&quot;自學中心&quot;提供課程和營隊，幫助體制內學生體驗自主學習。</p><p data-v-6205c94b>2008-2010年，&quot;自主培力學園&quot;為拒學、懼學和想自學的青少年提供全日制團體學習。</p><p data-v-6205c94b>2009年起，獨立教育工作者社群成立，致力於開設學習團體、培訓教師、支持家長，並開發自學資源。</p><p data-v-6205c94b>本會持續致力於推動自主學習理念，為台灣教育改革提供新方向和活力。</p></div></div></div>',1)),F("div",D1,[F("div",M1,[e[1]||(e[1]=F("div",{class:"header"},"網址連結",-1)),F("div",L1,[e[0]||(e[0]=F("ul",null,[F("li",null,[F("a",{href:"https://www.alearn.org",target:"_blank",rel:"noopener noreferrer"},"官方網站")]),F("li",null,[F("a",{href:"https://www.facebook.com/alearnTW",target:"_blank",rel:"noopener noreferrer"},"臉書「自主學習促進會」專頁")]),F("li",null,[F("a",{href:"https://www.facebook.com/groups/homeschooltw",target:"_blank",rel:"noopener noreferrer"},"臉書「在家自學社群」社團")])],-1)),t.projects.length?(pt(),qt("ul",$1,[(pt(!0),qt(et,null,z_(t.projects,o=>(pt(),qt("li",{key:o.id},[F("a",{href:o.website,target:"_blank",rel:"noopener noreferrer"},Vh(o.full_name),9,F1)]))),128))])):(pt(),qt("p",U1,"載入中..."))])])])])])}const B1=vl(N1,[["render",H1],["__scopeId","data-v-6205c94b"]]),W1=gN({history:GO("/"),routes:[{path:"/",name:"home",component:B1},{path:"/about",name:"about",component:()=>pO(()=>import("./AboutView-KHGOYhWy.js"),__vite__mapDeps([0,1]))}]}),Ql=uv(hO);Ql.use(gv());Ql.use(W1);Ql.mount("#app");export{et as F,vl as _,Lh as a,F as b,qt as c,z_ as d,pt as e,Vn as f,Ka as o,P1 as p,en as r,O1 as s,Vh as t};
