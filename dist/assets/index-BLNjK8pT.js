const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AboutView-Dk96xt7j.js","assets/AboutView-DTuEFET2.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function xa(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const re={},Gn=[],_t=()=>{},W_=()=>!1,kr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Da=t=>t.startsWith("onUpdate:"),Ce=Object.assign,Ma=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},j_=Object.prototype.hasOwnProperty,Z=(t,e)=>j_.call(t,e),U=Array.isArray,Kn=t=>gi(t)==="[object Map]",xr=t=>gi(t)==="[object Set]",ec=t=>gi(t)==="[object Date]",j=t=>typeof t=="function",me=t=>typeof t=="string",vt=t=>typeof t=="symbol",he=t=>t!==null&&typeof t=="object",Fh=t=>(he(t)||j(t))&&j(t.then)&&j(t.catch),Uh=Object.prototype.toString,gi=t=>Uh.call(t),V_=t=>gi(t).slice(8,-1),Hh=t=>gi(t)==="[object Object]",La=t=>me(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,$s=xa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Dr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},G_=/-(\w)/g,Xe=Dr(t=>t.replace(G_,(e,n)=>n?n.toUpperCase():"")),K_=/\B([A-Z])/g,kn=Dr(t=>t.replace(K_,"-$1").toLowerCase()),Mr=Dr(t=>t.charAt(0).toUpperCase()+t.slice(1)),co=Dr(t=>t?`on${Mr(t)}`:""),Zt=(t,e)=>!Object.is(t,e),ji=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Bh=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Wo=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let tc;const Lr=()=>tc||(tc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function $a(t){if(U(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=me(s)?Q_(s):$a(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(me(t)||he(t))return t}const q_=/;(?![^(]*\))/g,z_=/:([^]+)/,Y_=/\/\*[^]*?\*\//g;function Q_(t){const e={};return t.replace(Y_,"").split(q_).forEach(n=>{if(n){const s=n.split(z_);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Xs(t){let e="";if(me(t))e=t;else if(U(t))for(let n=0;n<t.length;n++){const s=Xs(t[n]);s&&(e+=s+" ")}else if(he(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const J_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",X_=xa(J_);function Wh(t){return!!t||t===""}function Z_(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=$r(t[s],e[s]);return n}function $r(t,e){if(t===e)return!0;let n=ec(t),s=ec(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=vt(t),s=vt(e),n||s)return t===e;if(n=U(t),s=U(e),n||s)return n&&s?Z_(t,e):!1;if(n=he(t),s=he(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!$r(t[o],e[o]))return!1}}return String(t)===String(e)}function jh(t,e){return t.findIndex(n=>$r(n,e))}const Vh=t=>!!(t&&t.__v_isRef===!0),jo=t=>me(t)?t:t==null?"":U(t)||he(t)&&(t.toString===Uh||!j(t.toString))?Vh(t)?jo(t.value):JSON.stringify(t,Gh,2):String(t),Gh=(t,e)=>Vh(e)?Gh(t,e.value):Kn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[uo(s,r)+" =>"]=i,n),{})}:xr(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>uo(n))}:vt(e)?uo(e):he(e)&&!U(e)&&!Hh(e)?String(e):e,uo=(t,e="")=>{var n;return vt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let je;class Kh{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=je,!e&&je&&(this.index=(je.scopes||(je.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=je;try{return je=this,e()}finally{je=n}}}on(){je=this}off(){je=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function eg(t){return new Kh(t)}function tg(){return je}let ce;const ho=new WeakSet;class qh{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,je&&je.active&&je.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ho.has(this)&&(ho.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Yh(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,nc(this),Qh(this);const e=ce,n=rt;ce=this,rt=!0;try{return this.fn()}finally{Jh(this),ce=e,rt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ha(e);this.deps=this.depsTail=void 0,nc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ho.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Vo(this)&&this.run()}get dirty(){return Vo(this)}}let zh=0,Fs,Us;function Yh(t,e=!1){if(t.flags|=8,e){t.next=Us,Us=t;return}t.next=Fs,Fs=t}function Fa(){zh++}function Ua(){if(--zh>0)return;if(Us){let e=Us;for(Us=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Fs;){let e=Fs;for(Fs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Qh(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Jh(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),Ha(s),ng(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function Vo(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Xh(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Xh(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Zs))return;t.globalVersion=Zs;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Vo(t)){t.flags&=-3;return}const n=ce,s=rt;ce=t,rt=!0;try{Qh(t);const i=t.fn(t._value);(e.version===0||Zt(i,t._value))&&(t._value=i,e.version++)}catch(i){throw e.version++,i}finally{ce=n,rt=s,Jh(t),t.flags&=-3}}function Ha(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)Ha(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function ng(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let rt=!0;const Zh=[];function an(){Zh.push(rt),rt=!1}function ln(){const t=Zh.pop();rt=t===void 0?!0:t}function nc(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ce;ce=void 0;try{e()}finally{ce=n}}}let Zs=0;class sg{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ba{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ce||!rt||ce===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ce)n=this.activeLink=new sg(ce,this),ce.deps?(n.prevDep=ce.depsTail,ce.depsTail.nextDep=n,ce.depsTail=n):ce.deps=ce.depsTail=n,ed(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=ce.depsTail,n.nextDep=void 0,ce.depsTail.nextDep=n,ce.depsTail=n,ce.deps===n&&(ce.deps=s)}return n}trigger(e){this.version++,Zs++,this.notify(e)}notify(e){Fa();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ua()}}}function ed(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)ed(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Go=new WeakMap,wn=Symbol(""),Ko=Symbol(""),ei=Symbol("");function Se(t,e,n){if(rt&&ce){let s=Go.get(t);s||Go.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new Ba),i.map=s,i.key=n),i.track()}}function Tt(t,e,n,s,i,r){const o=Go.get(t);if(!o){Zs++;return}const a=l=>{l&&l.trigger()};if(Fa(),e==="clear")o.forEach(a);else{const l=U(t),c=l&&La(n);if(l&&n==="length"){const u=Number(s);o.forEach((h,d)=>{(d==="length"||d===ei||!vt(d)&&d>=u)&&a(h)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(ei)),e){case"add":l?c&&a(o.get("length")):(a(o.get(wn)),Kn(t)&&a(o.get(Ko)));break;case"delete":l||(a(o.get(wn)),Kn(t)&&a(o.get(Ko)));break;case"set":Kn(t)&&a(o.get(wn));break}}Ua()}function Fn(t){const e=X(t);return e===t?e:(Se(e,"iterate",ei),Je(t)?e:e.map(Re))}function Fr(t){return Se(t=X(t),"iterate",ei),t}const ig={__proto__:null,[Symbol.iterator](){return fo(this,Symbol.iterator,Re)},concat(...t){return Fn(this).concat(...t.map(e=>U(e)?Fn(e):e))},entries(){return fo(this,"entries",t=>(t[1]=Re(t[1]),t))},every(t,e){return wt(this,"every",t,e,void 0,arguments)},filter(t,e){return wt(this,"filter",t,e,n=>n.map(Re),arguments)},find(t,e){return wt(this,"find",t,e,Re,arguments)},findIndex(t,e){return wt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return wt(this,"findLast",t,e,Re,arguments)},findLastIndex(t,e){return wt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return wt(this,"forEach",t,e,void 0,arguments)},includes(...t){return po(this,"includes",t)},indexOf(...t){return po(this,"indexOf",t)},join(t){return Fn(this).join(t)},lastIndexOf(...t){return po(this,"lastIndexOf",t)},map(t,e){return wt(this,"map",t,e,void 0,arguments)},pop(){return Rs(this,"pop")},push(...t){return Rs(this,"push",t)},reduce(t,...e){return sc(this,"reduce",t,e)},reduceRight(t,...e){return sc(this,"reduceRight",t,e)},shift(){return Rs(this,"shift")},some(t,e){return wt(this,"some",t,e,void 0,arguments)},splice(...t){return Rs(this,"splice",t)},toReversed(){return Fn(this).toReversed()},toSorted(t){return Fn(this).toSorted(t)},toSpliced(...t){return Fn(this).toSpliced(...t)},unshift(...t){return Rs(this,"unshift",t)},values(){return fo(this,"values",Re)}};function fo(t,e,n){const s=Fr(t),i=s[e]();return s!==t&&!Je(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=n(r.value)),r}),i}const rg=Array.prototype;function wt(t,e,n,s,i,r){const o=Fr(t),a=o!==t&&!Je(t),l=o[e];if(l!==rg[e]){const h=l.apply(t,r);return a?Re(h):h}let c=n;o!==t&&(a?c=function(h,d){return n.call(this,Re(h),d,t)}:n.length>2&&(c=function(h,d){return n.call(this,h,d,t)}));const u=l.call(o,c,s);return a&&i?i(u):u}function sc(t,e,n,s){const i=Fr(t);let r=n;return i!==t&&(Je(t)?n.length>3&&(r=function(o,a,l){return n.call(this,o,a,l,t)}):r=function(o,a,l){return n.call(this,o,Re(a),l,t)}),i[e](r,...s)}function po(t,e,n){const s=X(t);Se(s,"iterate",ei);const i=s[e](...n);return(i===-1||i===!1)&&Va(n[0])?(n[0]=X(n[0]),s[e](...n)):i}function Rs(t,e,n=[]){an(),Fa();const s=X(t)[e].apply(t,n);return Ua(),ln(),s}const og=xa("__proto__,__v_isRef,__isVue"),td=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(vt));function ag(t){vt(t)||(t=String(t));const e=X(this);return Se(e,"has",t),e.hasOwnProperty(t)}class nd{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?mg:od:r?rd:id).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=U(e);if(!i){let l;if(o&&(l=ig[n]))return l;if(n==="hasOwnProperty")return ag}const a=Reflect.get(e,n,Ne(e)?e:s);return(vt(n)?td.has(n):og(n))||(i||Se(e,"get",n),r)?a:Ne(a)?o&&La(n)?a:a.value:he(a)?i?ld(a):Ur(a):a}}class sd extends nd{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const l=In(r);if(!Je(s)&&!In(s)&&(r=X(r),s=X(s)),!U(e)&&Ne(r)&&!Ne(s))return l?!1:(r.value=s,!0)}const o=U(e)&&La(n)?Number(n)<e.length:Z(e,n),a=Reflect.set(e,n,s,Ne(e)?e:i);return e===X(i)&&(o?Zt(s,r)&&Tt(e,"set",n,s):Tt(e,"add",n,s)),a}deleteProperty(e,n){const s=Z(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&Tt(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!vt(n)||!td.has(n))&&Se(e,"has",n),s}ownKeys(e){return Se(e,"iterate",U(e)?"length":wn),Reflect.ownKeys(e)}}class lg extends nd{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const cg=new sd,ug=new lg,hg=new sd(!0);const qo=t=>t,Mi=t=>Reflect.getPrototypeOf(t);function dg(t,e,n){return function(...s){const i=this.__v_raw,r=X(i),o=Kn(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?qo:e?zo:Re;return!e&&Se(r,"iterate",l?Ko:wn),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Li(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function fg(t,e){const n={get(i){const r=this.__v_raw,o=X(r),a=X(i);t||(Zt(i,a)&&Se(o,"get",i),Se(o,"get",a));const{has:l}=Mi(o),c=e?qo:t?zo:Re;if(l.call(o,i))return c(r.get(i));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&Se(X(i),"iterate",wn),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,o=X(r),a=X(i);return t||(Zt(i,a)&&Se(o,"has",i),Se(o,"has",a)),i===a?r.has(i):r.has(i)||r.has(a)},forEach(i,r){const o=this,a=o.__v_raw,l=X(a),c=e?qo:t?zo:Re;return!t&&Se(l,"iterate",wn),a.forEach((u,h)=>i.call(r,c(u),c(h),o))}};return Ce(n,t?{add:Li("add"),set:Li("set"),delete:Li("delete"),clear:Li("clear")}:{add(i){!e&&!Je(i)&&!In(i)&&(i=X(i));const r=X(this);return Mi(r).has.call(r,i)||(r.add(i),Tt(r,"add",i,i)),this},set(i,r){!e&&!Je(r)&&!In(r)&&(r=X(r));const o=X(this),{has:a,get:l}=Mi(o);let c=a.call(o,i);c||(i=X(i),c=a.call(o,i));const u=l.call(o,i);return o.set(i,r),c?Zt(r,u)&&Tt(o,"set",i,r):Tt(o,"add",i,r),this},delete(i){const r=X(this),{has:o,get:a}=Mi(r);let l=o.call(r,i);l||(i=X(i),l=o.call(r,i)),a&&a.call(r,i);const c=r.delete(i);return l&&Tt(r,"delete",i,void 0),c},clear(){const i=X(this),r=i.size!==0,o=i.clear();return r&&Tt(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=dg(i,t,e)}),n}function Wa(t,e){const n=fg(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(Z(n,i)&&i in s?n:s,i,r)}const pg={get:Wa(!1,!1)},_g={get:Wa(!1,!0)},gg={get:Wa(!0,!1)};const id=new WeakMap,rd=new WeakMap,od=new WeakMap,mg=new WeakMap;function vg(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function yg(t){return t.__v_skip||!Object.isExtensible(t)?0:vg(V_(t))}function Ur(t){return In(t)?t:ja(t,!1,cg,pg,id)}function ad(t){return ja(t,!1,hg,_g,rd)}function ld(t){return ja(t,!0,ug,gg,od)}function ja(t,e,n,s,i){if(!he(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=yg(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function qn(t){return In(t)?qn(t.__v_raw):!!(t&&t.__v_isReactive)}function In(t){return!!(t&&t.__v_isReadonly)}function Je(t){return!!(t&&t.__v_isShallow)}function Va(t){return t?!!t.__v_raw:!1}function X(t){const e=t&&t.__v_raw;return e?X(e):t}function cd(t){return!Z(t,"__v_skip")&&Object.isExtensible(t)&&Bh(t,"__v_skip",!0),t}const Re=t=>he(t)?Ur(t):t,zo=t=>he(t)?ld(t):t;function Ne(t){return t?t.__v_isRef===!0:!1}function zn(t){return ud(t,!1)}function bg(t){return ud(t,!0)}function ud(t,e){return Ne(t)?t:new Eg(t,e)}class Eg{constructor(e,n){this.dep=new Ba,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:X(e),this._value=n?e:Re(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||Je(e)||In(e);e=s?e:X(e),Zt(e,n)&&(this._rawValue=e,this._value=s?e:Re(e),this.dep.trigger())}}function Yn(t){return Ne(t)?t.value:t}const wg={get:(t,e,n)=>e==="__v_raw"?t:Yn(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Ne(i)&&!Ne(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function hd(t){return qn(t)?t:new Proxy(t,wg)}class Cg{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Ba(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Zs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&ce!==this)return Yh(this,!0),!0}get value(){const e=this.dep.track();return Xh(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Ig(t,e,n=!1){let s,i;return j(t)?s=t:(s=t.get,i=t.set),new Cg(s,i,n)}const $i={},Zi=new WeakMap;let gn;function Tg(t,e=!1,n=gn){if(n){let s=Zi.get(n);s||Zi.set(n,s=[]),s.push(t)}}function Sg(t,e,n=re){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:a,call:l}=n,c=x=>i?x:Je(x)||i===!1||i===0?St(x,1):St(x);let u,h,d,_,m=!1,b=!1;if(Ne(t)?(h=()=>t.value,m=Je(t)):qn(t)?(h=()=>c(t),m=!0):U(t)?(b=!0,m=t.some(x=>qn(x)||Je(x)),h=()=>t.map(x=>{if(Ne(x))return x.value;if(qn(x))return c(x);if(j(x))return l?l(x,2):x()})):j(t)?e?h=l?()=>l(t,2):t:h=()=>{if(d){an();try{d()}finally{ln()}}const x=gn;gn=u;try{return l?l(t,3,[_]):t(_)}finally{gn=x}}:h=_t,e&&i){const x=h,z=i===!0?1/0:i;h=()=>St(x(),z)}const O=tg(),k=()=>{u.stop(),O&&Ma(O.effects,u)};if(r&&e){const x=e;e=(...z)=>{x(...z),k()}}let P=b?new Array(t.length).fill($i):$i;const M=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(e){const z=u.run();if(i||m||(b?z.some((ge,ae)=>Zt(ge,P[ae])):Zt(z,P))){d&&d();const ge=gn;gn=u;try{const ae=[z,P===$i?void 0:b&&P[0]===$i?[]:P,_];l?l(e,3,ae):e(...ae),P=z}finally{gn=ge}}}else u.run()};return a&&a(M),u=new qh(h),u.scheduler=o?()=>o(M,!1):M,_=x=>Tg(x,!1,u),d=u.onStop=()=>{const x=Zi.get(u);if(x){if(l)l(x,4);else for(const z of x)z();Zi.delete(u)}},e?s?M(!0):P=u.run():o?o(M.bind(null,!0),!0):u.run(),k.pause=u.pause.bind(u),k.resume=u.resume.bind(u),k.stop=k,k}function St(t,e=1/0,n){if(e<=0||!he(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Ne(t))St(t.value,e,n);else if(U(t))for(let s=0;s<t.length;s++)St(t[s],e,n);else if(xr(t)||Kn(t))t.forEach(s=>{St(s,e,n)});else if(Hh(t)){for(const s in t)St(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&St(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function mi(t,e,n,s){try{return s?t(...s):t()}catch(i){Hr(i,e,n)}}function yt(t,e,n,s){if(j(t)){const i=mi(t,e,n,s);return i&&Fh(i)&&i.catch(r=>{Hr(r,e,n)}),i}if(U(t)){const i=[];for(let r=0;r<t.length;r++)i.push(yt(t[r],e,n,s));return i}}function Hr(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||re;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](t,l,c)===!1)return}a=a.parent}if(r){an(),mi(r,null,10,[t,l,c]),ln();return}}Rg(t,n,i,s,o)}function Rg(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const xe=[];let dt=-1;const Qn=[];let Vt=null,Hn=0;const dd=Promise.resolve();let er=null;function fd(t){const e=er||dd;return t?e.then(this?t.bind(this):t):e}function Ag(t){let e=dt+1,n=xe.length;for(;e<n;){const s=e+n>>>1,i=xe[s],r=ti(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function Ga(t){if(!(t.flags&1)){const e=ti(t),n=xe[xe.length-1];!n||!(t.flags&2)&&e>=ti(n)?xe.push(t):xe.splice(Ag(e),0,t),t.flags|=1,pd()}}function pd(){er||(er=dd.then(gd))}function Pg(t){U(t)?Qn.push(...t):Vt&&t.id===-1?Vt.splice(Hn+1,0,t):t.flags&1||(Qn.push(t),t.flags|=1),pd()}function ic(t,e,n=dt+1){for(;n<xe.length;n++){const s=xe[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;xe.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function _d(t){if(Qn.length){const e=[...new Set(Qn)].sort((n,s)=>ti(n)-ti(s));if(Qn.length=0,Vt){Vt.push(...e);return}for(Vt=e,Hn=0;Hn<Vt.length;Hn++){const n=Vt[Hn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Vt=null,Hn=0}}const ti=t=>t.id==null?t.flags&2?-1:1/0:t.id;function gd(t){try{for(dt=0;dt<xe.length;dt++){const e=xe[dt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),mi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;dt<xe.length;dt++){const e=xe[dt];e&&(e.flags&=-2)}dt=-1,xe.length=0,_d(),er=null,(xe.length||Qn.length)&&gd()}}let Ve=null,md=null;function tr(t){const e=Ve;return Ve=t,md=t&&t.type.__scopeId||null,e}function Yo(t,e=Ve,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&fc(-1);const r=tr(e);let o;try{o=t(...i)}finally{tr(r),s._d&&fc(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function _o(t,e){if(Ve===null)return t;const n=Vr(Ve),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,a,l=re]=e[i];r&&(j(r)&&(r={mounted:r,updated:r}),r.deep&&St(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function pn(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(an(),yt(l,n,8,[t.el,a,t,e]),ln())}}const Og=Symbol("_vte"),Ng=t=>t.__isTeleport;function Ka(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ka(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function vi(t,e){return j(t)?Ce({name:t.name},e,{setup:t}):t}function vd(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Qo(t,e,n,s,i=!1){if(U(t)){t.forEach((m,b)=>Qo(m,e&&(U(e)?e[b]:e),n,s,i));return}if(Hs(s)&&!i)return;const r=s.shapeFlag&4?Vr(s.component):s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===re?a.refs={}:a.refs,h=a.setupState,d=X(h),_=h===re?()=>!1:m=>Z(d,m);if(c!=null&&c!==l&&(me(c)?(u[c]=null,_(c)&&(h[c]=null)):Ne(c)&&(c.value=null)),j(l))mi(l,a,12,[o,u]);else{const m=me(l),b=Ne(l);if(m||b){const O=()=>{if(t.f){const k=m?_(l)?h[l]:u[l]:l.value;i?U(k)&&Ma(k,r):U(k)?k.includes(r)||k.push(r):m?(u[l]=[r],_(l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else m?(u[l]=o,_(l)&&(h[l]=o)):b&&(l.value=o,t.k&&(u[t.k]=o))};o?(O.id=-1,We(O,n)):O()}}}Lr().requestIdleCallback;Lr().cancelIdleCallback;const Hs=t=>!!t.type.__asyncLoader,yd=t=>t.type.__isKeepAlive;function kg(t,e){bd(t,"a",e)}function xg(t,e){bd(t,"da",e)}function bd(t,e,n=Oe){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Br(e,s,n),n){let i=n.parent;for(;i&&i.parent;)yd(i.parent.vnode)&&Dg(s,e,n,i),i=i.parent}}function Dg(t,e,n,s){const i=Br(e,t,s,!0);Ed(()=>{Ma(s[e],i)},n)}function Br(t,e,n=Oe,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{an();const a=yi(n),l=yt(e,n,t,o);return a(),ln(),l});return s?i.unshift(r):i.push(r),r}}const $t=t=>(e,n=Oe)=>{(!ii||t==="sp")&&Br(t,(...s)=>e(...s),n)},Mg=$t("bm"),qa=$t("m"),Lg=$t("bu"),$g=$t("u"),Fg=$t("bum"),Ed=$t("um"),Ug=$t("sp"),Hg=$t("rtg"),Bg=$t("rtc");function Wg(t,e=Oe){Br("ec",t,e)}const jg="components";function go(t,e){return Gg(jg,t,!0,e)||t}const Vg=Symbol.for("v-ndc");function Gg(t,e,n=!0,s=!1){const i=Ve||Oe;if(i){const r=i.type;{const a=km(r,!1);if(a&&(a===e||a===Xe(e)||a===Mr(Xe(e))))return r}const o=rc(i[t]||r[t],e)||rc(i.appContext[t],e);return!o&&s?r:o}}function rc(t,e){return t&&(t[e]||t[Xe(e)]||t[Mr(Xe(e))])}function Kg(t,e,n,s){let i;const r=n,o=U(t);if(o||me(t)){const a=o&&qn(t);let l=!1;a&&(l=!Je(t),t=Fr(t)),i=new Array(t.length);for(let c=0,u=t.length;c<u;c++)i[c]=e(l?Re(t[c]):t[c],c,void 0,r)}else if(typeof t=="number"){i=new Array(t);for(let a=0;a<t;a++)i[a]=e(a+1,a,void 0,r)}else if(he(t))if(t[Symbol.iterator])i=Array.from(t,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(t);i=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];i[l]=e(t[u],u,l,r)}}else i=[];return i}const Jo=t=>t?jd(t)?Vr(t):Jo(t.parent):null,Bs=Ce(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Jo(t.parent),$root:t=>Jo(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>za(t),$forceUpdate:t=>t.f||(t.f=()=>{Ga(t.update)}),$nextTick:t=>t.n||(t.n=fd.bind(t.proxy)),$watch:t=>fm.bind(t)}),mo=(t,e)=>t!==re&&!t.__isScriptSetup&&Z(t,e),qg={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(mo(s,e))return o[e]=1,s[e];if(i!==re&&Z(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&Z(c,e))return o[e]=3,r[e];if(n!==re&&Z(n,e))return o[e]=4,n[e];Xo&&(o[e]=0)}}const u=Bs[e];let h,d;if(u)return e==="$attrs"&&Se(t.attrs,"get",""),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==re&&Z(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,Z(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return mo(i,e)?(i[e]=n,!0):s!==re&&Z(s,e)?(s[e]=n,!0):Z(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==re&&Z(t,o)||mo(e,o)||(a=r[0])&&Z(a,o)||Z(s,o)||Z(Bs,o)||Z(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Z(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function oc(t){return U(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Xo=!0;function zg(t){const e=za(t),n=t.proxy,s=t.ctx;Xo=!1,e.beforeCreate&&ac(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:_,updated:m,activated:b,deactivated:O,beforeDestroy:k,beforeUnmount:P,destroyed:M,unmounted:x,render:z,renderTracked:ge,renderTriggered:ae,errorCaptured:qe,serverPrefetch:ze,expose:Ye,inheritAttrs:Ht,components:fn,directives:lt,filters:Ts}=e;if(c&&Yg(c,s,null),o)for(const se in o){const J=o[se];j(J)&&(s[se]=J.bind(n))}if(i){const se=i.call(n,n);he(se)&&(t.data=Ur(se))}if(Xo=!0,r)for(const se in r){const J=r[se],Et=j(J)?J.bind(n,n):j(J.get)?J.get.bind(n,n):_t,Bt=!j(J)&&j(J.set)?J.set.bind(n):_t,ct=tt({get:Et,set:Bt});Object.defineProperty(s,se,{enumerable:!0,configurable:!0,get:()=>ct.value,set:Me=>ct.value=Me})}if(a)for(const se in a)wd(a[se],s,n,se);if(l){const se=j(l)?l.call(n):l;Reflect.ownKeys(se).forEach(J=>{Vi(J,se[J])})}u&&ac(u,t,"c");function ye(se,J){U(J)?J.forEach(Et=>se(Et.bind(n))):J&&se(J.bind(n))}if(ye(Mg,h),ye(qa,d),ye(Lg,_),ye($g,m),ye(kg,b),ye(xg,O),ye(Wg,qe),ye(Bg,ge),ye(Hg,ae),ye(Fg,P),ye(Ed,x),ye(Ug,ze),U(Ye))if(Ye.length){const se=t.exposed||(t.exposed={});Ye.forEach(J=>{Object.defineProperty(se,J,{get:()=>n[J],set:Et=>n[J]=Et})})}else t.exposed||(t.exposed={});z&&t.render===_t&&(t.render=z),Ht!=null&&(t.inheritAttrs=Ht),fn&&(t.components=fn),lt&&(t.directives=lt),ze&&vd(t)}function Yg(t,e,n=_t){U(t)&&(t=Zo(t));for(const s in t){const i=t[s];let r;he(i)?"default"in i?r=Nt(i.from||s,i.default,!0):r=Nt(i.from||s):r=Nt(i),Ne(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function ac(t,e,n){yt(U(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function wd(t,e,n,s){let i=s.includes(".")?Ld(n,s):()=>n[s];if(me(t)){const r=e[t];j(r)&&Ws(i,r)}else if(j(t))Ws(i,t.bind(n));else if(he(t))if(U(t))t.forEach(r=>wd(r,e,n,s));else{const r=j(t.handler)?t.handler.bind(n):e[t.handler];j(r)&&Ws(i,r,t)}}function za(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>nr(l,c,o,!0)),nr(l,e,o)),he(e)&&r.set(e,l),l}function nr(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&nr(t,r,n,!0),i&&i.forEach(o=>nr(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Qg[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Qg={data:lc,props:cc,emits:cc,methods:Ls,computed:Ls,beforeCreate:ke,created:ke,beforeMount:ke,mounted:ke,beforeUpdate:ke,updated:ke,beforeDestroy:ke,beforeUnmount:ke,destroyed:ke,unmounted:ke,activated:ke,deactivated:ke,errorCaptured:ke,serverPrefetch:ke,components:Ls,directives:Ls,watch:Xg,provide:lc,inject:Jg};function lc(t,e){return e?t?function(){return Ce(j(t)?t.call(this,this):t,j(e)?e.call(this,this):e)}:e:t}function Jg(t,e){return Ls(Zo(t),Zo(e))}function Zo(t){if(U(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ke(t,e){return t?[...new Set([].concat(t,e))]:e}function Ls(t,e){return t?Ce(Object.create(null),t,e):e}function cc(t,e){return t?U(t)&&U(e)?[...new Set([...t,...e])]:Ce(Object.create(null),oc(t),oc(e??{})):e}function Xg(t,e){if(!t)return e;if(!e)return t;const n=Ce(Object.create(null),t);for(const s in e)n[s]=ke(t[s],e[s]);return n}function Cd(){return{app:null,config:{isNativeTag:W_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Zg=0;function em(t,e){return function(s,i=null){j(s)||(s=Ce({},s)),i!=null&&!he(i)&&(i=null);const r=Cd(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Zg++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Dm,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&j(u.install)?(o.add(u),u.install(c,...h)):j(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,d){if(!l){const _=c._ceVNode||Ie(s,i);return _.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),h&&e?e(_,u):t(_,u,d),l=!0,c._container=u,u.__vue_app__=c,Vr(_.component)}},onUnmount(u){a.push(u)},unmount(){l&&(yt(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=Jn;Jn=c;try{return u()}finally{Jn=h}}};return c}}let Jn=null;function Vi(t,e){if(Oe){let n=Oe.provides;const s=Oe.parent&&Oe.parent.provides;s===n&&(n=Oe.provides=Object.create(s)),n[t]=e}}function Nt(t,e,n=!1){const s=Oe||Ve;if(s||Jn){const i=Jn?Jn._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&j(e)?e.call(s&&s.proxy):e}}const Id={},Td=()=>Object.create(Id),Sd=t=>Object.getPrototypeOf(t)===Id;function tm(t,e,n,s=!1){const i={},r=Td();t.propsDefaults=Object.create(null),Rd(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:ad(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function nm(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=X(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Wr(t.emitsOptions,d))continue;const _=e[d];if(l)if(Z(r,d))_!==r[d]&&(r[d]=_,c=!0);else{const m=Xe(d);i[m]=ea(l,a,m,_,t,!1)}else _!==r[d]&&(r[d]=_,c=!0)}}}else{Rd(t,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!Z(e,h)&&((u=kn(h))===h||!Z(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=ea(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!Z(e,h))&&(delete r[h],c=!0)}c&&Tt(t.attrs,"set","")}function Rd(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if($s(l))continue;const c=e[l];let u;i&&Z(i,u=Xe(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Wr(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=X(n),c=a||re;for(let u=0;u<r.length;u++){const h=r[u];n[h]=ea(i,l,h,c[h],t,!Z(c,h))}}return o}function ea(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=Z(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&j(l)){const{propsDefaults:c}=i;if(n in c)s=c[n];else{const u=yi(i);s=c[n]=l.call(null,e),u()}}else s=l;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===kn(n))&&(s=!0))}return s}const sm=new WeakMap;function Ad(t,e,n=!1){const s=n?sm:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!j(t)){const u=h=>{l=!0;const[d,_]=Ad(h,e,!0);Ce(o,d),_&&a.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return he(t)&&s.set(t,Gn),Gn;if(U(r))for(let u=0;u<r.length;u++){const h=Xe(r[u]);uc(h)&&(o[h]=re)}else if(r)for(const u in r){const h=Xe(u);if(uc(h)){const d=r[u],_=o[h]=U(d)||j(d)?{type:d}:Ce({},d),m=_.type;let b=!1,O=!0;if(U(m))for(let k=0;k<m.length;++k){const P=m[k],M=j(P)&&P.name;if(M==="Boolean"){b=!0;break}else M==="String"&&(O=!1)}else b=j(m)&&m.name==="Boolean";_[0]=b,_[1]=O,(b||Z(_,"default"))&&a.push(h)}}const c=[o,a];return he(t)&&s.set(t,c),c}function uc(t){return t[0]!=="$"&&!$s(t)}const Pd=t=>t[0]==="_"||t==="$stable",Ya=t=>U(t)?t.map(ft):[ft(t)],im=(t,e,n)=>{if(e._n)return e;const s=Yo((...i)=>Ya(e(...i)),n);return s._c=!1,s},Od=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Pd(i))continue;const r=t[i];if(j(r))e[i]=im(i,r,s);else if(r!=null){const o=Ya(r);e[i]=()=>o}}},Nd=(t,e)=>{const n=Ya(e);t.slots.default=()=>n},kd=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},rm=(t,e,n)=>{const s=t.slots=Td();if(t.vnode.shapeFlag&32){const i=e._;i?(kd(s,e,n),n&&Bh(s,"_",i,!0)):Od(e,s)}else e&&Nd(t,e)},om=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=re;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:kd(i,e,n):(r=!e.$stable,Od(e,i)),o=e}else e&&(Nd(t,e),o={default:1});if(r)for(const a in i)!Pd(a)&&o[a]==null&&delete i[a]},We=bm;function am(t){return lm(t)}function lm(t,e){const n=Lr();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:_=_t,insertStaticContent:m}=t,b=(f,p,g,E=null,v=null,w=null,R=void 0,S=null,T=!!p.dynamicChildren)=>{if(f===p)return;f&&!As(f,p)&&(E=y(f),Me(f,v,w,!0),f=null),p.patchFlag===-2&&(T=!1,p.dynamicChildren=null);const{type:C,ref:F,shapeFlag:N}=p;switch(C){case jr:O(f,p,g,E);break;case Tn:k(f,p,g,E);break;case Gi:f==null&&P(p,g,E,R);break;case et:fn(f,p,g,E,v,w,R,S,T);break;default:N&1?z(f,p,g,E,v,w,R,S,T):N&6?lt(f,p,g,E,v,w,R,S,T):(N&64||N&128)&&C.process(f,p,g,E,v,w,R,S,T,L)}F!=null&&v&&Qo(F,f&&f.ref,w,p||f,!p)},O=(f,p,g,E)=>{if(f==null)s(p.el=a(p.children),g,E);else{const v=p.el=f.el;p.children!==f.children&&c(v,p.children)}},k=(f,p,g,E)=>{f==null?s(p.el=l(p.children||""),g,E):p.el=f.el},P=(f,p,g,E)=>{[f.el,f.anchor]=m(f.children,p,g,E,f.el,f.anchor)},M=({el:f,anchor:p},g,E)=>{let v;for(;f&&f!==p;)v=d(f),s(f,g,E),f=v;s(p,g,E)},x=({el:f,anchor:p})=>{let g;for(;f&&f!==p;)g=d(f),i(f),f=g;i(p)},z=(f,p,g,E,v,w,R,S,T)=>{p.type==="svg"?R="svg":p.type==="math"&&(R="mathml"),f==null?ge(p,g,E,v,w,R,S,T):ze(f,p,v,w,R,S,T)},ge=(f,p,g,E,v,w,R,S)=>{let T,C;const{props:F,shapeFlag:N,transition:$,dirs:W}=f;if(T=f.el=o(f.type,w,F&&F.is,F),N&8?u(T,f.children):N&16&&qe(f.children,T,null,E,v,vo(f,w),R,S),W&&pn(f,null,E,"created"),ae(T,f,f.scopeId,R,E),F){for(const le in F)le!=="value"&&!$s(le)&&r(T,le,null,F[le],w,E);"value"in F&&r(T,"value",null,F.value,w),(C=F.onVnodeBeforeMount)&&ht(C,E,f)}W&&pn(f,null,E,"beforeMount");const Y=cm(v,$);Y&&$.beforeEnter(T),s(T,p,g),((C=F&&F.onVnodeMounted)||Y||W)&&We(()=>{C&&ht(C,E,f),Y&&$.enter(T),W&&pn(f,null,E,"mounted")},v)},ae=(f,p,g,E,v)=>{if(g&&_(f,g),E)for(let w=0;w<E.length;w++)_(f,E[w]);if(v){let w=v.subTree;if(p===w||Fd(w.type)&&(w.ssContent===p||w.ssFallback===p)){const R=v.vnode;ae(f,R,R.scopeId,R.slotScopeIds,v.parent)}}},qe=(f,p,g,E,v,w,R,S,T=0)=>{for(let C=T;C<f.length;C++){const F=f[C]=S?Gt(f[C]):ft(f[C]);b(null,F,p,g,E,v,w,R,S)}},ze=(f,p,g,E,v,w,R)=>{const S=p.el=f.el;let{patchFlag:T,dynamicChildren:C,dirs:F}=p;T|=f.patchFlag&16;const N=f.props||re,$=p.props||re;let W;if(g&&_n(g,!1),(W=$.onVnodeBeforeUpdate)&&ht(W,g,p,f),F&&pn(p,f,g,"beforeUpdate"),g&&_n(g,!0),(N.innerHTML&&$.innerHTML==null||N.textContent&&$.textContent==null)&&u(S,""),C?Ye(f.dynamicChildren,C,S,g,E,vo(p,v),w):R||J(f,p,S,null,g,E,vo(p,v),w,!1),T>0){if(T&16)Ht(S,N,$,g,v);else if(T&2&&N.class!==$.class&&r(S,"class",null,$.class,v),T&4&&r(S,"style",N.style,$.style,v),T&8){const Y=p.dynamicProps;for(let le=0;le<Y.length;le++){const te=Y[le],Ue=N[te],Te=$[te];(Te!==Ue||te==="value")&&r(S,te,Ue,Te,v,g)}}T&1&&f.children!==p.children&&u(S,p.children)}else!R&&C==null&&Ht(S,N,$,g,v);((W=$.onVnodeUpdated)||F)&&We(()=>{W&&ht(W,g,p,f),F&&pn(p,f,g,"updated")},E)},Ye=(f,p,g,E,v,w,R)=>{for(let S=0;S<p.length;S++){const T=f[S],C=p[S],F=T.el&&(T.type===et||!As(T,C)||T.shapeFlag&70)?h(T.el):g;b(T,C,F,null,E,v,w,R,!0)}},Ht=(f,p,g,E,v)=>{if(p!==g){if(p!==re)for(const w in p)!$s(w)&&!(w in g)&&r(f,w,p[w],null,v,E);for(const w in g){if($s(w))continue;const R=g[w],S=p[w];R!==S&&w!=="value"&&r(f,w,S,R,v,E)}"value"in g&&r(f,"value",p.value,g.value,v)}},fn=(f,p,g,E,v,w,R,S,T)=>{const C=p.el=f?f.el:a(""),F=p.anchor=f?f.anchor:a("");let{patchFlag:N,dynamicChildren:$,slotScopeIds:W}=p;W&&(S=S?S.concat(W):W),f==null?(s(C,g,E),s(F,g,E),qe(p.children||[],g,F,v,w,R,S,T)):N>0&&N&64&&$&&f.dynamicChildren?(Ye(f.dynamicChildren,$,g,v,w,R,S),(p.key!=null||v&&p===v.subTree)&&xd(f,p,!0)):J(f,p,g,F,v,w,R,S,T)},lt=(f,p,g,E,v,w,R,S,T)=>{p.slotScopeIds=S,f==null?p.shapeFlag&512?v.ctx.activate(p,g,E,R,T):Ts(p,g,E,v,w,R,T):Mn(f,p,T)},Ts=(f,p,g,E,v,w,R)=>{const S=f.component=Rm(f,E,v);if(yd(f)&&(S.ctx.renderer=L),Am(S,!1,R),S.asyncDep){if(v&&v.registerDep(S,ye,R),!f.el){const T=S.subTree=Ie(Tn);k(null,T,p,g)}}else ye(S,f,p,g,v,w,R)},Mn=(f,p,g)=>{const E=p.component=f.component;if(vm(f,p,g))if(E.asyncDep&&!E.asyncResolved){se(E,p,g);return}else E.next=p,E.update();else p.el=f.el,E.vnode=p},ye=(f,p,g,E,v,w,R)=>{const S=()=>{if(f.isMounted){let{next:N,bu:$,u:W,parent:Y,vnode:le}=f;{const He=Dd(f);if(He){N&&(N.el=le.el,se(f,N,R)),He.asyncDep.then(()=>{f.isUnmounted||S()});return}}let te=N,Ue;_n(f,!1),N?(N.el=le.el,se(f,N,R)):N=le,$&&ji($),(Ue=N.props&&N.props.onVnodeBeforeUpdate)&&ht(Ue,Y,N,le),_n(f,!0);const Te=yo(f),Ze=f.subTree;f.subTree=Te,b(Ze,Te,h(Ze.el),y(Ze),f,v,w),N.el=Te.el,te===null&&ym(f,Te.el),W&&We(W,v),(Ue=N.props&&N.props.onVnodeUpdated)&&We(()=>ht(Ue,Y,N,le),v)}else{let N;const{el:$,props:W}=p,{bm:Y,m:le,parent:te,root:Ue,type:Te}=f,Ze=Hs(p);if(_n(f,!1),Y&&ji(Y),!Ze&&(N=W&&W.onVnodeBeforeMount)&&ht(N,te,p),_n(f,!0),$&&pe){const He=()=>{f.subTree=yo(f),pe($,f.subTree,f,v,null)};Ze&&Te.__asyncHydrate?Te.__asyncHydrate($,f,He):He()}else{Ue.ce&&Ue.ce._injectChildStyle(Te);const He=f.subTree=yo(f);b(null,He,g,E,f,v,w),p.el=He.el}if(le&&We(le,v),!Ze&&(N=W&&W.onVnodeMounted)){const He=p;We(()=>ht(N,te,He),v)}(p.shapeFlag&256||te&&Hs(te.vnode)&&te.vnode.shapeFlag&256)&&f.a&&We(f.a,v),f.isMounted=!0,p=g=E=null}};f.scope.on();const T=f.effect=new qh(S);f.scope.off();const C=f.update=T.run.bind(T),F=f.job=T.runIfDirty.bind(T);F.i=f,F.id=f.uid,T.scheduler=()=>Ga(F),_n(f,!0),C()},se=(f,p,g)=>{p.component=f;const E=f.vnode.props;f.vnode=p,f.next=null,nm(f,p.props,E,g),om(f,p.children,g),an(),ic(f),ln()},J=(f,p,g,E,v,w,R,S,T=!1)=>{const C=f&&f.children,F=f?f.shapeFlag:0,N=p.children,{patchFlag:$,shapeFlag:W}=p;if($>0){if($&128){Bt(C,N,g,E,v,w,R,S,T);return}else if($&256){Et(C,N,g,E,v,w,R,S,T);return}}W&8?(F&16&&Qe(C,v,w),N!==C&&u(g,N)):F&16?W&16?Bt(C,N,g,E,v,w,R,S,T):Qe(C,v,w,!0):(F&8&&u(g,""),W&16&&qe(N,g,E,v,w,R,S,T))},Et=(f,p,g,E,v,w,R,S,T)=>{f=f||Gn,p=p||Gn;const C=f.length,F=p.length,N=Math.min(C,F);let $;for($=0;$<N;$++){const W=p[$]=T?Gt(p[$]):ft(p[$]);b(f[$],W,g,null,v,w,R,S,T)}C>F?Qe(f,v,w,!0,!1,N):qe(p,g,E,v,w,R,S,T,N)},Bt=(f,p,g,E,v,w,R,S,T)=>{let C=0;const F=p.length;let N=f.length-1,$=F-1;for(;C<=N&&C<=$;){const W=f[C],Y=p[C]=T?Gt(p[C]):ft(p[C]);if(As(W,Y))b(W,Y,g,null,v,w,R,S,T);else break;C++}for(;C<=N&&C<=$;){const W=f[N],Y=p[$]=T?Gt(p[$]):ft(p[$]);if(As(W,Y))b(W,Y,g,null,v,w,R,S,T);else break;N--,$--}if(C>N){if(C<=$){const W=$+1,Y=W<F?p[W].el:E;for(;C<=$;)b(null,p[C]=T?Gt(p[C]):ft(p[C]),g,Y,v,w,R,S,T),C++}}else if(C>$)for(;C<=N;)Me(f[C],v,w,!0),C++;else{const W=C,Y=C,le=new Map;for(C=Y;C<=$;C++){const Be=p[C]=T?Gt(p[C]):ft(p[C]);Be.key!=null&&le.set(Be.key,C)}let te,Ue=0;const Te=$-Y+1;let Ze=!1,He=0;const Ss=new Array(Te);for(C=0;C<Te;C++)Ss[C]=0;for(C=W;C<=N;C++){const Be=f[C];if(Ue>=Te){Me(Be,v,w,!0);continue}let ut;if(Be.key!=null)ut=le.get(Be.key);else for(te=Y;te<=$;te++)if(Ss[te-Y]===0&&As(Be,p[te])){ut=te;break}ut===void 0?Me(Be,v,w,!0):(Ss[ut-Y]=C+1,ut>=He?He=ut:Ze=!0,b(Be,p[ut],g,null,v,w,R,S,T),Ue++)}const Xl=Ze?um(Ss):Gn;for(te=Xl.length-1,C=Te-1;C>=0;C--){const Be=Y+C,ut=p[Be],Zl=Be+1<F?p[Be+1].el:E;Ss[C]===0?b(null,ut,g,Zl,v,w,R,S,T):Ze&&(te<0||C!==Xl[te]?ct(ut,g,Zl,2):te--)}}},ct=(f,p,g,E,v=null)=>{const{el:w,type:R,transition:S,children:T,shapeFlag:C}=f;if(C&6){ct(f.component.subTree,p,g,E);return}if(C&128){f.suspense.move(p,g,E);return}if(C&64){R.move(f,p,g,L);return}if(R===et){s(w,p,g);for(let N=0;N<T.length;N++)ct(T[N],p,g,E);s(f.anchor,p,g);return}if(R===Gi){M(f,p,g);return}if(E!==2&&C&1&&S)if(E===0)S.beforeEnter(w),s(w,p,g),We(()=>S.enter(w),v);else{const{leave:N,delayLeave:$,afterLeave:W}=S,Y=()=>s(w,p,g),le=()=>{N(w,()=>{Y(),W&&W()})};$?$(w,Y,le):le()}else s(w,p,g)},Me=(f,p,g,E=!1,v=!1)=>{const{type:w,props:R,ref:S,children:T,dynamicChildren:C,shapeFlag:F,patchFlag:N,dirs:$,cacheIndex:W}=f;if(N===-2&&(v=!1),S!=null&&Qo(S,null,g,f,!0),W!=null&&(p.renderCache[W]=void 0),F&256){p.ctx.deactivate(f);return}const Y=F&1&&$,le=!Hs(f);let te;if(le&&(te=R&&R.onVnodeBeforeUnmount)&&ht(te,p,f),F&6)Di(f.component,g,E);else{if(F&128){f.suspense.unmount(g,E);return}Y&&pn(f,null,p,"beforeUnmount"),F&64?f.type.remove(f,p,g,L,E):C&&!C.hasOnce&&(w!==et||N>0&&N&64)?Qe(C,p,g,!1,!0):(w===et&&N&384||!v&&F&16)&&Qe(T,p,g),E&&Ln(f)}(le&&(te=R&&R.onVnodeUnmounted)||Y)&&We(()=>{te&&ht(te,p,f),Y&&pn(f,null,p,"unmounted")},g)},Ln=f=>{const{type:p,el:g,anchor:E,transition:v}=f;if(p===et){$n(g,E);return}if(p===Gi){x(f);return}const w=()=>{i(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:R,delayLeave:S}=v,T=()=>R(g,w);S?S(f.el,w,T):T()}else w()},$n=(f,p)=>{let g;for(;f!==p;)g=d(f),i(f),f=g;i(p)},Di=(f,p,g)=>{const{bum:E,scope:v,job:w,subTree:R,um:S,m:T,a:C}=f;hc(T),hc(C),E&&ji(E),v.stop(),w&&(w.flags|=8,Me(R,f,p,g)),S&&We(S,p),We(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Qe=(f,p,g,E=!1,v=!1,w=0)=>{for(let R=w;R<f.length;R++)Me(f[R],p,g,E,v)},y=f=>{if(f.shapeFlag&6)return y(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const p=d(f.anchor||f.el),g=p&&p[Og];return g?d(g):p};let D=!1;const A=(f,p,g)=>{f==null?p._vnode&&Me(p._vnode,null,null,!0):b(p._vnode||null,f,p,null,null,null,g),p._vnode=f,D||(D=!0,ic(),_d(),D=!1)},L={p:b,um:Me,m:ct,r:Ln,mt:Ts,mc:qe,pc:J,pbc:Ye,n:y,o:t};let ee,pe;return{render:A,hydrate:ee,createApp:em(A,ee)}}function vo({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function _n({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function cm(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function xd(t,e,n=!1){const s=t.children,i=e.children;if(U(s)&&U(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Gt(i[r]),a.el=o.el),!n&&a.patchFlag!==-2&&xd(o,a)),a.type===jr&&(a.el=o.el)}}function um(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Dd(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Dd(e)}function hc(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const hm=Symbol.for("v-scx"),dm=()=>Nt(hm);function Ws(t,e,n){return Md(t,e,n)}function Md(t,e,n=re){const{immediate:s,deep:i,flush:r,once:o}=n,a=Ce({},n),l=e&&s||!e&&r!=="post";let c;if(ii){if(r==="sync"){const _=dm();c=_.__watcherHandles||(_.__watcherHandles=[])}else if(!l){const _=()=>{};return _.stop=_t,_.resume=_t,_.pause=_t,_}}const u=Oe;a.call=(_,m,b)=>yt(_,u,m,b);let h=!1;r==="post"?a.scheduler=_=>{We(_,u&&u.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(_,m)=>{m?_():Ga(_)}),a.augmentJob=_=>{e&&(_.flags|=4),h&&(_.flags|=2,u&&(_.id=u.uid,_.i=u))};const d=Sg(t,e,a);return ii&&(c?c.push(d):l&&d()),d}function fm(t,e,n){const s=this.proxy,i=me(t)?t.includes(".")?Ld(s,t):()=>s[t]:t.bind(s,s);let r;j(e)?r=e:(r=e.handler,n=e);const o=yi(this),a=Md(i,r.bind(s),n);return o(),a}function Ld(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const pm=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Xe(e)}Modifiers`]||t[`${kn(e)}Modifiers`];function _m(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||re;let i=n;const r=e.startsWith("update:"),o=r&&pm(s,e.slice(7));o&&(o.trim&&(i=n.map(u=>me(u)?u.trim():u)),o.number&&(i=n.map(Wo)));let a,l=s[a=co(e)]||s[a=co(Xe(e))];!l&&r&&(l=s[a=co(kn(e))]),l&&yt(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,yt(c,t,6,i)}}function $d(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!j(t)){const l=c=>{const u=$d(c,e,!0);u&&(a=!0,Ce(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(he(t)&&s.set(t,null),null):(U(r)?r.forEach(l=>o[l]=null):Ce(o,r),he(t)&&s.set(t,o),o)}function Wr(t,e){return!t||!kr(e)?!1:(e=e.slice(2).replace(/Once$/,""),Z(t,e[0].toLowerCase()+e.slice(1))||Z(t,kn(e))||Z(t,e))}function yo(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:d,setupState:_,ctx:m,inheritAttrs:b}=t,O=tr(t);let k,P;try{if(n.shapeFlag&4){const x=i||s,z=x;k=ft(c.call(z,x,u,h,_,d,m)),P=a}else{const x=e;k=ft(x.length>1?x(h,{attrs:a,slots:o,emit:l}):x(h,null)),P=e.props?a:gm(a)}}catch(x){js.length=0,Hr(x,t,1),k=Ie(Tn)}let M=k;if(P&&b!==!1){const x=Object.keys(P),{shapeFlag:z}=M;x.length&&z&7&&(r&&x.some(Da)&&(P=mm(P,r)),M=rs(M,P,!1,!0))}return n.dirs&&(M=rs(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&Ka(M,n.transition),k=M,tr(O),k}const gm=t=>{let e;for(const n in t)(n==="class"||n==="style"||kr(n))&&((e||(e={}))[n]=t[n]);return e},mm=(t,e)=>{const n={};for(const s in t)(!Da(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function vm(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?dc(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!Wr(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?dc(s,o,c):!0:!!o;return!1}function dc(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Wr(n,r))return!0}return!1}function ym({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const Fd=t=>t.__isSuspense;function bm(t,e){e&&e.pendingBranch?U(t)?e.effects.push(...t):e.effects.push(t):Pg(t)}const et=Symbol.for("v-fgt"),jr=Symbol.for("v-txt"),Tn=Symbol.for("v-cmt"),Gi=Symbol.for("v-stc"),js=[];let Ge=null;function pt(t=!1){js.push(Ge=t?null:[])}function Em(){js.pop(),Ge=js[js.length-1]||null}let ni=1;function fc(t){ni+=t,t<0&&Ge&&(Ge.hasOnce=!0)}function Ud(t){return t.dynamicChildren=ni>0?Ge||Gn:null,Em(),ni>0&&Ge&&Ge.push(t),t}function qt(t,e,n,s,i,r){return Ud(V(t,e,n,s,i,r,!0))}function Hd(t,e,n,s,i){return Ud(Ie(t,e,n,s,i,!0))}function sr(t){return t?t.__v_isVNode===!0:!1}function As(t,e){return t.type===e.type&&t.key===e.key}const Bd=({key:t})=>t??null,Ki=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?me(t)||Ne(t)||j(t)?{i:Ve,r:t,k:e,f:!!n}:t:null);function V(t,e=null,n=null,s=0,i=null,r=t===et?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Bd(e),ref:e&&Ki(e),scopeId:md,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Ve};return a?(Qa(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=me(n)?8:16),ni>0&&!o&&Ge&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Ge.push(l),l}const Ie=wm;function wm(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Vg)&&(t=Tn),sr(t)){const a=rs(t,e,!0);return n&&Qa(a,n),ni>0&&!r&&Ge&&(a.shapeFlag&6?Ge[Ge.indexOf(t)]=a:Ge.push(a)),a.patchFlag=-2,a}if(xm(t)&&(t=t.__vccOpts),e){e=Cm(e);let{class:a,style:l}=e;a&&!me(a)&&(e.class=Xs(a)),he(l)&&(Va(l)&&!U(l)&&(l=Ce({},l)),e.style=$a(l))}const o=me(t)?1:Fd(t)?128:Ng(t)?64:he(t)?4:j(t)?2:0;return V(t,e,n,s,i,o,r,!0)}function Cm(t){return t?Va(t)||Sd(t)?Ce({},t):t:null}function rs(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:a,transition:l}=t,c=e?Im(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Bd(c),ref:e&&e.ref?n&&r?U(r)?r.concat(Ki(e)):[r,Ki(e)]:Ki(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==et?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&rs(t.ssContent),ssFallback:t.ssFallback&&rs(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&s&&Ka(u,l.clone(u)),u}function si(t=" ",e=0){return Ie(jr,null,t,e)}function pc(t,e){const n=Ie(Gi,null,t);return n.staticCount=e,n}function Wd(t="",e=!1){return e?(pt(),Hd(Tn,null,t)):Ie(Tn,null,t)}function ft(t){return t==null||typeof t=="boolean"?Ie(Tn):U(t)?Ie(et,null,t.slice()):sr(t)?Gt(t):Ie(jr,null,String(t))}function Gt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:rs(t)}function Qa(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(U(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Qa(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!Sd(e)?e._ctx=Ve:i===3&&Ve&&(Ve.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else j(e)?(e={default:e,_ctx:Ve},n=32):(e=String(e),s&64?(n=16,e=[si(e)]):n=8);t.children=e,t.shapeFlag|=n}function Im(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Xs([e.class,s.class]));else if(i==="style")e.style=$a([e.style,s.style]);else if(kr(i)){const r=e[i],o=s[i];o&&r!==o&&!(U(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function ht(t,e,n,s=null){yt(t,e,7,[n,s])}const Tm=Cd();let Sm=0;function Rm(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Tm,r={uid:Sm++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Kh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ad(s,i),emitsOptions:$d(s,i),emit:null,emitted:null,propsDefaults:re,inheritAttrs:s.inheritAttrs,ctx:re,data:re,props:re,attrs:re,slots:re,refs:re,setupState:re,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=_m.bind(null,r),t.ce&&t.ce(r),r}let Oe=null,ir,ta;{const t=Lr(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};ir=e("__VUE_INSTANCE_SETTERS__",n=>Oe=n),ta=e("__VUE_SSR_SETTERS__",n=>ii=n)}const yi=t=>{const e=Oe;return ir(t),t.scope.on(),()=>{t.scope.off(),ir(e)}},_c=()=>{Oe&&Oe.scope.off(),ir(null)};function jd(t){return t.vnode.shapeFlag&4}let ii=!1;function Am(t,e=!1,n=!1){e&&ta(e);const{props:s,children:i}=t.vnode,r=jd(t);tm(t,s,r,e),rm(t,i,n);const o=r?Pm(t,e):void 0;return e&&ta(!1),o}function Pm(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,qg);const{setup:s}=n;if(s){an();const i=t.setupContext=s.length>1?Nm(t):null,r=yi(t),o=mi(s,t,0,[t.props,i]),a=Fh(o);if(ln(),r(),(a||t.sp)&&!Hs(t)&&vd(t),a){if(o.then(_c,_c),e)return o.then(l=>{gc(t,l,e)}).catch(l=>{Hr(l,t,0)});t.asyncDep=o}else gc(t,o,e)}else Vd(t,e)}function gc(t,e,n){j(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:he(e)&&(t.setupState=hd(e)),Vd(t,n)}let mc;function Vd(t,e,n){const s=t.type;if(!t.render){if(!e&&mc&&!s.render){const i=s.template||za(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Ce(Ce({isCustomElement:r,delimiters:a},o),l);s.render=mc(i,c)}}t.render=s.render||_t}{const i=yi(t);an();try{zg(t)}finally{ln(),i()}}}const Om={get(t,e){return Se(t,"get",""),t[e]}};function Nm(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Om),slots:t.slots,emit:t.emit,expose:e}}function Vr(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(hd(cd(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Bs)return Bs[n](t)},has(e,n){return n in e||n in Bs}})):t.proxy}function km(t,e=!0){return j(t)?t.displayName||t.name:t.name||e&&t.__name}function xm(t){return j(t)&&"__vccOpts"in t}const tt=(t,e)=>Ig(t,e,ii);function Gd(t,e,n){const s=arguments.length;return s===2?he(e)&&!U(e)?sr(e)?Ie(t,null,[e]):Ie(t,e):Ie(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&sr(n)&&(n=[n]),Ie(t,e,n))}const Dm="3.5.12";/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let na;const vc=typeof window<"u"&&window.trustedTypes;if(vc)try{na=vc.createPolicy("vue",{createHTML:t=>t})}catch{}const Kd=na?t=>na.createHTML(t):t=>t,Mm="http://www.w3.org/2000/svg",Lm="http://www.w3.org/1998/Math/MathML",It=typeof document<"u"?document:null,yc=It&&It.createElement("template"),$m={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?It.createElementNS(Mm,t):e==="mathml"?It.createElementNS(Lm,t):n?It.createElement(t,{is:n}):It.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>It.createTextNode(t),createComment:t=>It.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>It.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{yc.innerHTML=Kd(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const a=yc.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Fm=Symbol("_vtc");function Um(t,e,n){const s=t[Fm];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const bc=Symbol("_vod"),Hm=Symbol("_vsh"),Bm=Symbol(""),Wm=/(^|;)\s*display\s*:/;function jm(t,e,n){const s=t.style,i=me(n);let r=!1;if(n&&!i){if(e)if(me(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&qi(s,a,"")}else for(const o in e)n[o]==null&&qi(s,o,"");for(const o in n)o==="display"&&(r=!0),qi(s,o,n[o])}else if(i){if(e!==n){const o=s[Bm];o&&(n+=";"+o),s.cssText=n,r=Wm.test(n)}}else e&&t.removeAttribute("style");bc in t&&(t[bc]=r?s.display:"",t[Hm]&&(s.display="none"))}const Ec=/\s*!important$/;function qi(t,e,n){if(U(n))n.forEach(s=>qi(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Vm(t,e);Ec.test(n)?t.setProperty(kn(s),n.replace(Ec,""),"important"):t[s]=n}}const wc=["Webkit","Moz","ms"],bo={};function Vm(t,e){const n=bo[e];if(n)return n;let s=Xe(e);if(s!=="filter"&&s in t)return bo[e]=s;s=Mr(s);for(let i=0;i<wc.length;i++){const r=wc[i]+s;if(r in t)return bo[e]=r}return e}const Cc="http://www.w3.org/1999/xlink";function Ic(t,e,n,s,i,r=X_(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Cc,e.slice(6,e.length)):t.setAttributeNS(Cc,e,n):n==null||r&&!Wh(n)?t.removeAttribute(e):t.setAttribute(e,r?"":vt(n)?String(n):n)}function Tc(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Kd(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Wh(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function bn(t,e,n,s){t.addEventListener(e,n,s)}function Gm(t,e,n,s){t.removeEventListener(e,n,s)}const Sc=Symbol("_vei");function Km(t,e,n,s,i=null){const r=t[Sc]||(t[Sc]={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=qm(e);if(s){const c=r[e]=Qm(s,i);bn(t,a,c,l)}else o&&(Gm(t,a,o,l),r[e]=void 0)}}const Rc=/(?:Once|Passive|Capture)$/;function qm(t){let e;if(Rc.test(t)){e={};let s;for(;s=t.match(Rc);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):kn(t.slice(2)),e]}let Eo=0;const zm=Promise.resolve(),Ym=()=>Eo||(zm.then(()=>Eo=0),Eo=Date.now());function Qm(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;yt(Jm(s,n.value),e,5,[s])};return n.value=t,n.attached=Ym(),n}function Jm(t,e){if(U(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Ac=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Xm=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?Um(t,s,o):e==="style"?jm(t,n,s):kr(e)?Da(e)||Km(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Zm(t,e,s,o))?(Tc(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ic(t,e,s,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!me(s))?Tc(t,Xe(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Ic(t,e,s,o))};function Zm(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Ac(e)&&j(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Ac(e)&&me(n)?!1:e in t}const rr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return U(e)?n=>ji(e,n):e};function ev(t){t.target.composing=!0}function Pc(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Xn=Symbol("_assign"),Oc={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[Xn]=rr(i);const r=s||i.props&&i.props.type==="number";bn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=Wo(a)),t[Xn](a)}),n&&bn(t,"change",()=>{t.value=t.value.trim()}),e||(bn(t,"compositionstart",ev),bn(t,"compositionend",Pc),bn(t,"change",Pc))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[Xn]=rr(o),t.composing)return;const a=(r||t.type==="number")&&!/^0\d/.test(t.value)?Wo(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===l)||(t.value=l))}},tv={deep:!0,created(t,e,n){t[Xn]=rr(n),bn(t,"change",()=>{const s=t._modelValue,i=nv(t),r=t.checked,o=t[Xn];if(U(s)){const a=jh(s,i),l=a!==-1;if(r&&!l)o(s.concat(i));else if(!r&&l){const c=[...s];c.splice(a,1),o(c)}}else if(xr(s)){const a=new Set(s);r?a.add(i):a.delete(i),o(a)}else o(qd(t,r))})},mounted:Nc,beforeUpdate(t,e,n){t[Xn]=rr(n),Nc(t,e,n)}};function Nc(t,{value:e,oldValue:n},s){t._modelValue=e;let i;if(U(e))i=jh(e,s.props.value)>-1;else if(xr(e))i=e.has(s.props.value);else{if(e===n)return;i=$r(e,qd(t,!0))}t.checked!==i&&(t.checked=i)}function nv(t){return"_value"in t?t._value:t.value}function qd(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const sv=["ctrl","shift","alt","meta"],iv={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>sv.some(n=>t[`${n}Key`]&&!e.includes(n))},Ps=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(i,...r)=>{for(let o=0;o<e.length;o++){const a=iv[e[o]];if(a&&a(i,e))return}return t(i,...r)})},rv=Ce({patchProp:Xm},$m);let kc;function ov(){return kc||(kc=am(rv))}const av=(...t)=>{const e=ov().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=cv(s);if(!i)return;const r=e._component;!j(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,lv(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function lv(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function cv(t){return me(t)?document.querySelector(t):t}var uv=!1;/*!
 * pinia v2.2.4
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */const hv=Symbol();var xc;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(xc||(xc={}));function dv(){const t=eg(!0),e=t.run(()=>zn({}));let n=[],s=[];const i=cd({install(r){i._a=r,r.provide(hv,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!uv?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}var Fi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function fv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function pv(t,e,n){var s;return n(t,function(i,r,o){if(e(i,r,o))return s=r,!1}),s}var _v=pv;function gv(t){return function(e,n,s){for(var i=-1,r=Object(e),o=s(e),a=o.length;a--;){var l=o[t?a:++i];if(n(r[l],l,r)===!1)break}return e}}var mv=gv,vv=mv,yv=vv(),bv=yv;function Ev(t,e){for(var n=-1,s=Array(t);++n<t;)s[n]=e(n);return s}var wv=Ev,Cv=typeof Fi=="object"&&Fi&&Fi.Object===Object&&Fi,zd=Cv,Iv=zd,Tv=typeof self=="object"&&self&&self.Object===Object&&self,Sv=Iv||Tv||Function("return this")(),Ft=Sv,Rv=Ft,Av=Rv.Symbol,Gr=Av,Dc=Gr,Yd=Object.prototype,Pv=Yd.hasOwnProperty,Ov=Yd.toString,Os=Dc?Dc.toStringTag:void 0;function Nv(t){var e=Pv.call(t,Os),n=t[Os];try{t[Os]=void 0;var s=!0}catch{}var i=Ov.call(t);return s&&(e?t[Os]=n:delete t[Os]),i}var kv=Nv,xv=Object.prototype,Dv=xv.toString;function Mv(t){return Dv.call(t)}var Lv=Mv,Mc=Gr,$v=kv,Fv=Lv,Uv="[object Null]",Hv="[object Undefined]",Lc=Mc?Mc.toStringTag:void 0;function Bv(t){return t==null?t===void 0?Hv:Uv:Lc&&Lc in Object(t)?$v(t):Fv(t)}var bi=Bv;function Wv(t){return t!=null&&typeof t=="object"}var Ei=Wv,jv=bi,Vv=Ei,Gv="[object Arguments]";function Kv(t){return Vv(t)&&jv(t)==Gv}var qv=Kv,$c=qv,zv=Ei,Qd=Object.prototype,Yv=Qd.hasOwnProperty,Qv=Qd.propertyIsEnumerable,Jv=$c(function(){return arguments}())?$c:function(t){return zv(t)&&Yv.call(t,"callee")&&!Qv.call(t,"callee")},Jd=Jv,Xv=Array.isArray,cn=Xv,or={exports:{}};function Zv(){return!1}var ey=Zv;or.exports;(function(t,e){var n=Ft,s=ey,i=e&&!e.nodeType&&e,r=i&&!0&&t&&!t.nodeType&&t,o=r&&r.exports===i,a=o?n.Buffer:void 0,l=a?a.isBuffer:void 0,c=l||s;t.exports=c})(or,or.exports);var Xd=or.exports,ty=9007199254740991,ny=/^(?:0|[1-9]\d*)$/;function sy(t,e){var n=typeof t;return e=e??ty,!!e&&(n=="number"||n!="symbol"&&ny.test(t))&&t>-1&&t%1==0&&t<e}var Zd=sy,iy=9007199254740991;function ry(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=iy}var Ja=ry,oy=bi,ay=Ja,ly=Ei,cy="[object Arguments]",uy="[object Array]",hy="[object Boolean]",dy="[object Date]",fy="[object Error]",py="[object Function]",_y="[object Map]",gy="[object Number]",my="[object Object]",vy="[object RegExp]",yy="[object Set]",by="[object String]",Ey="[object WeakMap]",wy="[object ArrayBuffer]",Cy="[object DataView]",Iy="[object Float32Array]",Ty="[object Float64Array]",Sy="[object Int8Array]",Ry="[object Int16Array]",Ay="[object Int32Array]",Py="[object Uint8Array]",Oy="[object Uint8ClampedArray]",Ny="[object Uint16Array]",ky="[object Uint32Array]",de={};de[Iy]=de[Ty]=de[Sy]=de[Ry]=de[Ay]=de[Py]=de[Oy]=de[Ny]=de[ky]=!0;de[cy]=de[uy]=de[wy]=de[hy]=de[Cy]=de[dy]=de[fy]=de[py]=de[_y]=de[gy]=de[my]=de[vy]=de[yy]=de[by]=de[Ey]=!1;function xy(t){return ly(t)&&ay(t.length)&&!!de[oy(t)]}var Dy=xy;function My(t){return function(e){return t(e)}}var Ly=My,ar={exports:{}};ar.exports;(function(t,e){var n=zd,s=e&&!e.nodeType&&e,i=s&&!0&&t&&!t.nodeType&&t,r=i&&i.exports===s,o=r&&n.process,a=function(){try{var l=i&&i.require&&i.require("util").types;return l||o&&o.binding&&o.binding("util")}catch{}}();t.exports=a})(ar,ar.exports);var $y=ar.exports,Fy=Dy,Uy=Ly,Fc=$y,Uc=Fc&&Fc.isTypedArray,Hy=Uc?Uy(Uc):Fy,ef=Hy,By=wv,Wy=Jd,jy=cn,Vy=Xd,Gy=Zd,Ky=ef,qy=Object.prototype,zy=qy.hasOwnProperty;function Yy(t,e){var n=jy(t),s=!n&&Wy(t),i=!n&&!s&&Vy(t),r=!n&&!s&&!i&&Ky(t),o=n||s||i||r,a=o?By(t.length,String):[],l=a.length;for(var c in t)(e||zy.call(t,c))&&!(o&&(c=="length"||i&&(c=="offset"||c=="parent")||r&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||Gy(c,l)))&&a.push(c);return a}var Qy=Yy,Jy=Object.prototype;function Xy(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||Jy;return t===n}var Zy=Xy;function eb(t,e){return function(n){return t(e(n))}}var tb=eb,nb=tb,sb=nb(Object.keys,Object),ib=sb,rb=Zy,ob=ib,ab=Object.prototype,lb=ab.hasOwnProperty;function cb(t){if(!rb(t))return ob(t);var e=[];for(var n in Object(t))lb.call(t,n)&&n!="constructor"&&e.push(n);return e}var ub=cb;function hb(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var Xa=hb,db=bi,fb=Xa,pb="[object AsyncFunction]",_b="[object Function]",gb="[object GeneratorFunction]",mb="[object Proxy]";function vb(t){if(!fb(t))return!1;var e=db(t);return e==_b||e==gb||e==pb||e==mb}var tf=vb,yb=tf,bb=Ja;function Eb(t){return t!=null&&bb(t.length)&&!yb(t)}var wb=Eb,Cb=Qy,Ib=ub,Tb=wb;function Sb(t){return Tb(t)?Cb(t):Ib(t)}var Za=Sb,Rb=bv,Ab=Za;function Pb(t,e){return t&&Rb(t,e,Ab)}var Ob=Pb;function Nb(){this.__data__=[],this.size=0}var kb=Nb;function xb(t,e){return t===e||t!==t&&e!==e}var nf=xb,Db=nf;function Mb(t,e){for(var n=t.length;n--;)if(Db(t[n][0],e))return n;return-1}var Kr=Mb,Lb=Kr,$b=Array.prototype,Fb=$b.splice;function Ub(t){var e=this.__data__,n=Lb(e,t);if(n<0)return!1;var s=e.length-1;return n==s?e.pop():Fb.call(e,n,1),--this.size,!0}var Hb=Ub,Bb=Kr;function Wb(t){var e=this.__data__,n=Bb(e,t);return n<0?void 0:e[n][1]}var jb=Wb,Vb=Kr;function Gb(t){return Vb(this.__data__,t)>-1}var Kb=Gb,qb=Kr;function zb(t,e){var n=this.__data__,s=qb(n,t);return s<0?(++this.size,n.push([t,e])):n[s][1]=e,this}var Yb=zb,Qb=kb,Jb=Hb,Xb=jb,Zb=Kb,eE=Yb;function ps(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var s=t[e];this.set(s[0],s[1])}}ps.prototype.clear=Qb;ps.prototype.delete=Jb;ps.prototype.get=Xb;ps.prototype.has=Zb;ps.prototype.set=eE;var qr=ps,tE=qr;function nE(){this.__data__=new tE,this.size=0}var sE=nE;function iE(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}var rE=iE;function oE(t){return this.__data__.get(t)}var aE=oE;function lE(t){return this.__data__.has(t)}var cE=lE,uE=Ft,hE=uE["__core-js_shared__"],dE=hE,wo=dE,Hc=function(){var t=/[^.]+$/.exec(wo&&wo.keys&&wo.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function fE(t){return!!Hc&&Hc in t}var pE=fE,_E=Function.prototype,gE=_E.toString;function mE(t){if(t!=null){try{return gE.call(t)}catch{}try{return t+""}catch{}}return""}var sf=mE,vE=tf,yE=pE,bE=Xa,EE=sf,wE=/[\\^$.*+?()[\]{}|]/g,CE=/^\[object .+?Constructor\]$/,IE=Function.prototype,TE=Object.prototype,SE=IE.toString,RE=TE.hasOwnProperty,AE=RegExp("^"+SE.call(RE).replace(wE,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function PE(t){if(!bE(t)||yE(t))return!1;var e=vE(t)?AE:CE;return e.test(EE(t))}var OE=PE;function NE(t,e){return t==null?void 0:t[e]}var kE=NE,xE=OE,DE=kE;function ME(t,e){var n=DE(t,e);return xE(n)?n:void 0}var _s=ME,LE=_s,$E=Ft,FE=LE($E,"Map"),el=FE,UE=_s,HE=UE(Object,"create"),zr=HE,Bc=zr;function BE(){this.__data__=Bc?Bc(null):{},this.size=0}var WE=BE;function jE(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var VE=jE,GE=zr,KE="__lodash_hash_undefined__",qE=Object.prototype,zE=qE.hasOwnProperty;function YE(t){var e=this.__data__;if(GE){var n=e[t];return n===KE?void 0:n}return zE.call(e,t)?e[t]:void 0}var QE=YE,JE=zr,XE=Object.prototype,ZE=XE.hasOwnProperty;function ew(t){var e=this.__data__;return JE?e[t]!==void 0:ZE.call(e,t)}var tw=ew,nw=zr,sw="__lodash_hash_undefined__";function iw(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=nw&&e===void 0?sw:e,this}var rw=iw,ow=WE,aw=VE,lw=QE,cw=tw,uw=rw;function gs(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var s=t[e];this.set(s[0],s[1])}}gs.prototype.clear=ow;gs.prototype.delete=aw;gs.prototype.get=lw;gs.prototype.has=cw;gs.prototype.set=uw;var hw=gs,Wc=hw,dw=qr,fw=el;function pw(){this.size=0,this.__data__={hash:new Wc,map:new(fw||dw),string:new Wc}}var _w=pw;function gw(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}var mw=gw,vw=mw;function yw(t,e){var n=t.__data__;return vw(e)?n[typeof e=="string"?"string":"hash"]:n.map}var Yr=yw,bw=Yr;function Ew(t){var e=bw(this,t).delete(t);return this.size-=e?1:0,e}var ww=Ew,Cw=Yr;function Iw(t){return Cw(this,t).get(t)}var Tw=Iw,Sw=Yr;function Rw(t){return Sw(this,t).has(t)}var Aw=Rw,Pw=Yr;function Ow(t,e){var n=Pw(this,t),s=n.size;return n.set(t,e),this.size+=n.size==s?0:1,this}var Nw=Ow,kw=_w,xw=ww,Dw=Tw,Mw=Aw,Lw=Nw;function ms(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var s=t[e];this.set(s[0],s[1])}}ms.prototype.clear=kw;ms.prototype.delete=xw;ms.prototype.get=Dw;ms.prototype.has=Mw;ms.prototype.set=Lw;var tl=ms,$w=qr,Fw=el,Uw=tl,Hw=200;function Bw(t,e){var n=this.__data__;if(n instanceof $w){var s=n.__data__;if(!Fw||s.length<Hw-1)return s.push([t,e]),this.size=++n.size,this;n=this.__data__=new Uw(s)}return n.set(t,e),this.size=n.size,this}var Ww=Bw,jw=qr,Vw=sE,Gw=rE,Kw=aE,qw=cE,zw=Ww;function vs(t){var e=this.__data__=new jw(t);this.size=e.size}vs.prototype.clear=Vw;vs.prototype.delete=Gw;vs.prototype.get=Kw;vs.prototype.has=qw;vs.prototype.set=zw;var rf=vs,Yw="__lodash_hash_undefined__";function Qw(t){return this.__data__.set(t,Yw),this}var Jw=Qw;function Xw(t){return this.__data__.has(t)}var Zw=Xw,eC=tl,tC=Jw,nC=Zw;function lr(t){var e=-1,n=t==null?0:t.length;for(this.__data__=new eC;++e<n;)this.add(t[e])}lr.prototype.add=lr.prototype.push=tC;lr.prototype.has=nC;var sC=lr;function iC(t,e){for(var n=-1,s=t==null?0:t.length;++n<s;)if(e(t[n],n,t))return!0;return!1}var rC=iC;function oC(t,e){return t.has(e)}var aC=oC,lC=sC,cC=rC,uC=aC,hC=1,dC=2;function fC(t,e,n,s,i,r){var o=n&hC,a=t.length,l=e.length;if(a!=l&&!(o&&l>a))return!1;var c=r.get(t),u=r.get(e);if(c&&u)return c==e&&u==t;var h=-1,d=!0,_=n&dC?new lC:void 0;for(r.set(t,e),r.set(e,t);++h<a;){var m=t[h],b=e[h];if(s)var O=o?s(b,m,h,e,t,r):s(m,b,h,t,e,r);if(O!==void 0){if(O)continue;d=!1;break}if(_){if(!cC(e,function(k,P){if(!uC(_,P)&&(m===k||i(m,k,n,s,r)))return _.push(P)})){d=!1;break}}else if(!(m===b||i(m,b,n,s,r))){d=!1;break}}return r.delete(t),r.delete(e),d}var of=fC,pC=Ft,_C=pC.Uint8Array,gC=_C;function mC(t){var e=-1,n=Array(t.size);return t.forEach(function(s,i){n[++e]=[i,s]}),n}var vC=mC;function yC(t){var e=-1,n=Array(t.size);return t.forEach(function(s){n[++e]=s}),n}var bC=yC,jc=Gr,Vc=gC,EC=nf,wC=of,CC=vC,IC=bC,TC=1,SC=2,RC="[object Boolean]",AC="[object Date]",PC="[object Error]",OC="[object Map]",NC="[object Number]",kC="[object RegExp]",xC="[object Set]",DC="[object String]",MC="[object Symbol]",LC="[object ArrayBuffer]",$C="[object DataView]",Gc=jc?jc.prototype:void 0,Co=Gc?Gc.valueOf:void 0;function FC(t,e,n,s,i,r,o){switch(n){case $C:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case LC:return!(t.byteLength!=e.byteLength||!r(new Vc(t),new Vc(e)));case RC:case AC:case NC:return EC(+t,+e);case PC:return t.name==e.name&&t.message==e.message;case kC:case DC:return t==e+"";case OC:var a=CC;case xC:var l=s&TC;if(a||(a=IC),t.size!=e.size&&!l)return!1;var c=o.get(t);if(c)return c==e;s|=SC,o.set(t,e);var u=wC(a(t),a(e),s,i,r,o);return o.delete(t),u;case MC:if(Co)return Co.call(t)==Co.call(e)}return!1}var UC=FC;function HC(t,e){for(var n=-1,s=e.length,i=t.length;++n<s;)t[i+n]=e[n];return t}var BC=HC,WC=BC,jC=cn;function VC(t,e,n){var s=e(t);return jC(t)?s:WC(s,n(t))}var GC=VC;function KC(t,e){for(var n=-1,s=t==null?0:t.length,i=0,r=[];++n<s;){var o=t[n];e(o,n,t)&&(r[i++]=o)}return r}var qC=KC;function zC(){return[]}var YC=zC,QC=qC,JC=YC,XC=Object.prototype,ZC=XC.propertyIsEnumerable,Kc=Object.getOwnPropertySymbols,eI=Kc?function(t){return t==null?[]:(t=Object(t),QC(Kc(t),function(e){return ZC.call(t,e)}))}:JC,tI=eI,nI=GC,sI=tI,iI=Za;function rI(t){return nI(t,iI,sI)}var oI=rI,qc=oI,aI=1,lI=Object.prototype,cI=lI.hasOwnProperty;function uI(t,e,n,s,i,r){var o=n&aI,a=qc(t),l=a.length,c=qc(e),u=c.length;if(l!=u&&!o)return!1;for(var h=l;h--;){var d=a[h];if(!(o?d in e:cI.call(e,d)))return!1}var _=r.get(t),m=r.get(e);if(_&&m)return _==e&&m==t;var b=!0;r.set(t,e),r.set(e,t);for(var O=o;++h<l;){d=a[h];var k=t[d],P=e[d];if(s)var M=o?s(P,k,d,e,t,r):s(k,P,d,t,e,r);if(!(M===void 0?k===P||i(k,P,n,s,r):M)){b=!1;break}O||(O=d=="constructor")}if(b&&!O){var x=t.constructor,z=e.constructor;x!=z&&"constructor"in t&&"constructor"in e&&!(typeof x=="function"&&x instanceof x&&typeof z=="function"&&z instanceof z)&&(b=!1)}return r.delete(t),r.delete(e),b}var hI=uI,dI=_s,fI=Ft,pI=dI(fI,"DataView"),_I=pI,gI=_s,mI=Ft,vI=gI(mI,"Promise"),yI=vI,bI=_s,EI=Ft,wI=bI(EI,"Set"),CI=wI,II=_s,TI=Ft,SI=II(TI,"WeakMap"),RI=SI,sa=_I,ia=el,ra=yI,oa=CI,aa=RI,af=bi,ys=sf,zc="[object Map]",AI="[object Object]",Yc="[object Promise]",Qc="[object Set]",Jc="[object WeakMap]",Xc="[object DataView]",PI=ys(sa),OI=ys(ia),NI=ys(ra),kI=ys(oa),xI=ys(aa),mn=af;(sa&&mn(new sa(new ArrayBuffer(1)))!=Xc||ia&&mn(new ia)!=zc||ra&&mn(ra.resolve())!=Yc||oa&&mn(new oa)!=Qc||aa&&mn(new aa)!=Jc)&&(mn=function(t){var e=af(t),n=e==AI?t.constructor:void 0,s=n?ys(n):"";if(s)switch(s){case PI:return Xc;case OI:return zc;case NI:return Yc;case kI:return Qc;case xI:return Jc}return e});var DI=mn,Io=rf,MI=of,LI=UC,$I=hI,Zc=DI,eu=cn,tu=Xd,FI=ef,UI=1,nu="[object Arguments]",su="[object Array]",Ui="[object Object]",HI=Object.prototype,iu=HI.hasOwnProperty;function BI(t,e,n,s,i,r){var o=eu(t),a=eu(e),l=o?su:Zc(t),c=a?su:Zc(e);l=l==nu?Ui:l,c=c==nu?Ui:c;var u=l==Ui,h=c==Ui,d=l==c;if(d&&tu(t)){if(!tu(e))return!1;o=!0,u=!1}if(d&&!u)return r||(r=new Io),o||FI(t)?MI(t,e,n,s,i,r):LI(t,e,l,n,s,i,r);if(!(n&UI)){var _=u&&iu.call(t,"__wrapped__"),m=h&&iu.call(e,"__wrapped__");if(_||m){var b=_?t.value():t,O=m?e.value():e;return r||(r=new Io),i(b,O,n,s,r)}}return d?(r||(r=new Io),$I(t,e,n,s,i,r)):!1}var WI=BI,jI=WI,ru=Ei;function lf(t,e,n,s,i){return t===e?!0:t==null||e==null||!ru(t)&&!ru(e)?t!==t&&e!==e:jI(t,e,n,s,lf,i)}var cf=lf,VI=rf,GI=cf,KI=1,qI=2;function zI(t,e,n,s){var i=n.length,r=i,o=!s;if(t==null)return!r;for(t=Object(t);i--;){var a=n[i];if(o&&a[2]?a[1]!==t[a[0]]:!(a[0]in t))return!1}for(;++i<r;){a=n[i];var l=a[0],c=t[l],u=a[1];if(o&&a[2]){if(c===void 0&&!(l in t))return!1}else{var h=new VI;if(s)var d=s(c,u,l,t,e,h);if(!(d===void 0?GI(u,c,KI|qI,s,h):d))return!1}}return!0}var YI=zI,QI=Xa;function JI(t){return t===t&&!QI(t)}var uf=JI,XI=uf,ZI=Za;function eT(t){for(var e=ZI(t),n=e.length;n--;){var s=e[n],i=t[s];e[n]=[s,i,XI(i)]}return e}var tT=eT;function nT(t,e){return function(n){return n==null?!1:n[t]===e&&(e!==void 0||t in Object(n))}}var hf=nT,sT=YI,iT=tT,rT=hf;function oT(t){var e=iT(t);return e.length==1&&e[0][2]?rT(e[0][0],e[0][1]):function(n){return n===t||sT(n,t,e)}}var aT=oT,lT=bi,cT=Ei,uT="[object Symbol]";function hT(t){return typeof t=="symbol"||cT(t)&&lT(t)==uT}var nl=hT,dT=cn,fT=nl,pT=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,_T=/^\w*$/;function gT(t,e){if(dT(t))return!1;var n=typeof t;return n=="number"||n=="symbol"||n=="boolean"||t==null||fT(t)?!0:_T.test(t)||!pT.test(t)||e!=null&&t in Object(e)}var sl=gT,df=tl,mT="Expected a function";function il(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(mT);var n=function(){var s=arguments,i=e?e.apply(this,s):s[0],r=n.cache;if(r.has(i))return r.get(i);var o=t.apply(this,s);return n.cache=r.set(i,o)||r,o};return n.cache=new(il.Cache||df),n}il.Cache=df;var vT=il,yT=vT,bT=500;function ET(t){var e=yT(t,function(s){return n.size===bT&&n.clear(),s}),n=e.cache;return e}var wT=ET,CT=wT,IT=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,TT=/\\(\\)?/g,ST=CT(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(IT,function(n,s,i,r){e.push(i?r.replace(TT,"$1"):s||n)}),e}),RT=ST;function AT(t,e){for(var n=-1,s=t==null?0:t.length,i=Array(s);++n<s;)i[n]=e(t[n],n,t);return i}var PT=AT,ou=Gr,OT=PT,NT=cn,kT=nl,xT=1/0,au=ou?ou.prototype:void 0,lu=au?au.toString:void 0;function ff(t){if(typeof t=="string")return t;if(NT(t))return OT(t,ff)+"";if(kT(t))return lu?lu.call(t):"";var e=t+"";return e=="0"&&1/t==-xT?"-0":e}var DT=ff,MT=DT;function LT(t){return t==null?"":MT(t)}var $T=LT,FT=cn,UT=sl,HT=RT,BT=$T;function WT(t,e){return FT(t)?t:UT(t,e)?[t]:HT(BT(t))}var pf=WT,jT=nl,VT=1/0;function GT(t){if(typeof t=="string"||jT(t))return t;var e=t+"";return e=="0"&&1/t==-VT?"-0":e}var Qr=GT,KT=pf,qT=Qr;function zT(t,e){e=KT(e,t);for(var n=0,s=e.length;t!=null&&n<s;)t=t[qT(e[n++])];return n&&n==s?t:void 0}var _f=zT,YT=_f;function QT(t,e,n){var s=t==null?void 0:YT(t,e);return s===void 0?n:s}var JT=QT;function XT(t,e){return t!=null&&e in Object(t)}var ZT=XT,eS=pf,tS=Jd,nS=cn,sS=Zd,iS=Ja,rS=Qr;function oS(t,e,n){e=eS(e,t);for(var s=-1,i=e.length,r=!1;++s<i;){var o=rS(e[s]);if(!(r=t!=null&&n(t,o)))break;t=t[o]}return r||++s!=i?r:(i=t==null?0:t.length,!!i&&iS(i)&&sS(o,i)&&(nS(t)||tS(t)))}var aS=oS,lS=ZT,cS=aS;function uS(t,e){return t!=null&&cS(t,e,lS)}var hS=uS,dS=cf,fS=JT,pS=hS,_S=sl,gS=uf,mS=hf,vS=Qr,yS=1,bS=2;function ES(t,e){return _S(t)&&gS(e)?mS(vS(t),e):function(n){var s=fS(n,t);return s===void 0&&s===e?pS(n,t):dS(e,s,yS|bS)}}var wS=ES;function CS(t){return t}var IS=CS;function TS(t){return function(e){return e==null?void 0:e[t]}}var SS=TS,RS=_f;function AS(t){return function(e){return RS(e,t)}}var PS=AS,OS=SS,NS=PS,kS=sl,xS=Qr;function DS(t){return kS(t)?OS(xS(t)):NS(t)}var MS=DS,LS=aT,$S=wS,FS=IS,US=cn,HS=MS;function BS(t){return typeof t=="function"?t:t==null?FS:typeof t=="object"?US(t)?$S(t[0],t[1]):LS(t):HS(t)}var WS=BS,jS=_v,VS=Ob,GS=WS;function KS(t,e){return jS(t,GS(e),VS)}var qS=KS,zS=function(){function t(e,n){for(var s=0;s<n.length;s++){var i=n[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,s){return n&&t(e.prototype,n),s&&t(e,s),e}}();function YS(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var QS=qS,JS={messenger:/\bFB[\w_]+\/(Messenger|MESSENGER)/,facebook:/\bFB[\w_]+\//,twitter:/\bTwitter/i,line:/\bLine\//i,wechat:/\bMicroMessenger\//i,puffin:/\bPuffin/i,miui:/\bMiuiBrowser\//i,instagram:/\bInstagram/i,chrome:/\bCrMo\b|CriOS|Android.*Chrome\/[.0-9]* (Mobile)?/,safari:/Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari/,ie:/IEMobile|MSIEMobile/,firefox:/fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS/},XS=function(){function t(e){YS(this,t),this.ua="",this.ua=e}return zS(t,[{key:"browser",get:function(){var n=this;return QS(JS,function(s){return s.test(n.ua)})||"other"}},{key:"isMobile",get:function(){return/(iPad|iPhone|Android|Mobile)/i.test(this.ua)||!1}},{key:"isDesktop",get:function(){return!this.isMobile}},{key:"isInApp",get:function(){var n=["WebView","(iPhone|iPod|iPad)(?!.*Safari/)","Android.*(wv|.0.0.0)"],s=new RegExp("("+n.join("|")+")","ig");return!!this.ua.match(s)}}]),t}(),ZS=XS;const eR=fv(ZS);var cu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gf={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I=function(t,e){if(!t)throw bs(e)},bs=function(t){return new Error("Firebase Database ("+gf.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mf=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},tR=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},rl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,_=c&63;l||(_=64,o||(d=64)),s.push(n[u],n[h],n[d],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(mf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):tR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new nR;const d=r<<2|a>>4;if(s.push(d),c!==64){const _=a<<4&240|c>>2;if(s.push(_),h!==64){const m=c<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class nR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const vf=function(t){const e=mf(t);return rl.encodeByteArray(e,!0)},cr=function(t){return vf(t).replace(/\./g,"")},ur=function(t){try{return rl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sR(t){return yf(void 0,t)}function yf(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!iR(n)||(t[n]=yf(t[n],e[n]));return t}function iR(t){return t!=="__proto__"}/**
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
 */function rR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const oR=()=>rR().__FIREBASE_DEFAULTS__,aR=()=>{if(typeof process>"u"||typeof cu>"u")return;const t=cu.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},lR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ur(t[1]);return e&&JSON.parse(e)},ol=()=>{try{return oR()||aR()||lR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},bf=t=>{var e,n;return(n=(e=ol())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},cR=t=>{const e=bf(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Ef=()=>{var t;return(t=ol())===null||t===void 0?void 0:t.config},wf=t=>{var e;return(e=ol())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function uR(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[cr(JSON.stringify(n)),cr(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ll(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(De())}function hR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function dR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Cf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fR(){const t=De();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function If(){return gf.NODE_ADMIN===!0}function pR(){try{return typeof indexedDB=="object"}catch{return!1}}function _R(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gR="FirebaseError";class un extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=gR,Object.setPrototypeOf(this,un.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,wi.prototype.create)}}class wi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?mR(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new un(i,a,s)}}function mR(t,e){return t.replace(vR,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const vR=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(t){return JSON.parse(t)}function we(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tf=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=ri(ur(r[0])||""),n=ri(ur(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},yR=function(t){const e=Tf(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},bR=function(t){const e=Tf(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function os(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function la(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function hr(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function dr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(uu(r)&&uu(o)){if(!dr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function uu(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Es(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function wR(t,e){const n=new CR(t,e);return n.subscribe.bind(n)}class CR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");IR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=To),i.error===void 0&&(i.error=To),i.complete===void 0&&(i.complete=To);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function IR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function To(){}function Sf(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TR=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,I(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Jr=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function bt(t){return t&&t._delegate?t._delegate:t}class Sn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const vn="[DEFAULT]";/**
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
 */class SR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new al;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(AR(e))try{this.getOrInitializeService({instanceIdentifier:vn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=vn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=vn){return this.instances.has(e)}getOptions(e=vn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:RR(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=vn){return this.component?this.component.multipleInstances?e:vn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function RR(t){return t===vn?void 0:t}function AR(t){return t.instantiationMode==="EAGER"}/**
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
 */class PR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new SR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const OR={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},NR=ie.INFO,kR={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},xR=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=kR[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class cl{constructor(e){this.name=e,this._logLevel=NR,this._logHandler=xR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?OR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const DR=(t,e)=>e.some(n=>t instanceof n);let hu,du;function MR(){return hu||(hu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function LR(){return du||(du=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Rf=new WeakMap,ca=new WeakMap,Af=new WeakMap,So=new WeakMap,ul=new WeakMap;function $R(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(en(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Rf.set(n,t)}).catch(()=>{}),ul.set(e,t),e}function FR(t){if(ca.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});ca.set(t,e)}let ua={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ca.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Af.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return en(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function UR(t){ua=t(ua)}function HR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Ro(this),e,...n);return Af.set(s,e.sort?e.sort():[e]),en(s)}:LR().includes(t)?function(...e){return t.apply(Ro(this),e),en(Rf.get(this))}:function(...e){return en(t.apply(Ro(this),e))}}function BR(t){return typeof t=="function"?HR(t):(t instanceof IDBTransaction&&FR(t),DR(t,MR())?new Proxy(t,ua):t)}function en(t){if(t instanceof IDBRequest)return $R(t);if(So.has(t))return So.get(t);const e=BR(t);return e!==t&&(So.set(t,e),ul.set(e,t)),e}const Ro=t=>ul.get(t);function WR(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=en(o);return s&&o.addEventListener("upgradeneeded",l=>{s(en(o.result),l.oldVersion,l.newVersion,en(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const jR=["get","getKey","getAll","getAllKeys","count"],VR=["put","add","delete","clear"],Ao=new Map;function fu(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ao.get(e))return Ao.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=VR.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||jR.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Ao.set(e,r),r}UR(t=>({...t,get:(e,n,s)=>fu(e,n)||t.get(e,n,s),has:(e,n)=>!!fu(e,n)||t.has(e,n)}));/**
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
 */class GR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(KR(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function KR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ha="@firebase/app",pu="0.10.15";/**
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
 */const xt=new cl("@firebase/app"),qR="@firebase/app-compat",zR="@firebase/analytics-compat",YR="@firebase/analytics",QR="@firebase/app-check-compat",JR="@firebase/app-check",XR="@firebase/auth",ZR="@firebase/auth-compat",e0="@firebase/database",t0="@firebase/data-connect",n0="@firebase/database-compat",s0="@firebase/functions",i0="@firebase/functions-compat",r0="@firebase/installations",o0="@firebase/installations-compat",a0="@firebase/messaging",l0="@firebase/messaging-compat",c0="@firebase/performance",u0="@firebase/performance-compat",h0="@firebase/remote-config",d0="@firebase/remote-config-compat",f0="@firebase/storage",p0="@firebase/storage-compat",_0="@firebase/firestore",g0="@firebase/vertexai",m0="@firebase/firestore-compat",v0="firebase",y0="11.0.1";/**
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
 */const da="[DEFAULT]",b0={[ha]:"fire-core",[qR]:"fire-core-compat",[YR]:"fire-analytics",[zR]:"fire-analytics-compat",[JR]:"fire-app-check",[QR]:"fire-app-check-compat",[XR]:"fire-auth",[ZR]:"fire-auth-compat",[e0]:"fire-rtdb",[t0]:"fire-data-connect",[n0]:"fire-rtdb-compat",[s0]:"fire-fn",[i0]:"fire-fn-compat",[r0]:"fire-iid",[o0]:"fire-iid-compat",[a0]:"fire-fcm",[l0]:"fire-fcm-compat",[c0]:"fire-perf",[u0]:"fire-perf-compat",[h0]:"fire-rc",[d0]:"fire-rc-compat",[f0]:"fire-gcs",[p0]:"fire-gcs-compat",[_0]:"fire-fst",[m0]:"fire-fst-compat",[g0]:"fire-vertex","fire-js":"fire-js",[v0]:"fire-js-all"};/**
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
 */const fr=new Map,E0=new Map,fa=new Map;function _u(t,e){try{t.container.addComponent(e)}catch(n){xt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function as(t){const e=t.name;if(fa.has(e))return xt.debug(`There were multiple attempts to register component ${e}.`),!1;fa.set(e,t);for(const n of fr.values())_u(n,t);for(const n of E0.values())_u(n,t);return!0}function hl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Xt(t){return t.settings!==void 0}/**
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
 */const w0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},tn=new wi("app","Firebase",w0);/**
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
 */class C0{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Sn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw tn.create("app-deleted",{appName:this._name})}}/**
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
 */const ws=y0;function Pf(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:da,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw tn.create("bad-app-name",{appName:String(i)});if(n||(n=Ef()),!n)throw tn.create("no-options");const r=fr.get(i);if(r){if(dr(n,r.options)&&dr(s,r.config))return r;throw tn.create("duplicate-app",{appName:i})}const o=new PR(i);for(const l of fa.values())o.addComponent(l);const a=new C0(n,s,o);return fr.set(i,a),a}function Of(t=da){const e=fr.get(t);if(!e&&t===da&&Ef())return Pf();if(!e)throw tn.create("no-app",{appName:t});return e}function nn(t,e,n){var s;let i=(s=b0[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xt.warn(a.join(" "));return}as(new Sn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const I0="firebase-heartbeat-database",T0=1,oi="firebase-heartbeat-store";let Po=null;function Nf(){return Po||(Po=WR(I0,T0,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(oi)}catch(n){console.warn(n)}}}}).catch(t=>{throw tn.create("idb-open",{originalErrorMessage:t.message})})),Po}async function S0(t){try{const n=(await Nf()).transaction(oi),s=await n.objectStore(oi).get(kf(t));return await n.done,s}catch(e){if(e instanceof un)xt.warn(e.message);else{const n=tn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});xt.warn(n.message)}}}async function gu(t,e){try{const s=(await Nf()).transaction(oi,"readwrite");await s.objectStore(oi).put(e,kf(t)),await s.done}catch(n){if(n instanceof un)xt.warn(n.message);else{const s=tn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});xt.warn(s.message)}}}function kf(t){return`${t.name}!${t.options.appId}`}/**
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
 */const R0=1024,A0=30*24*60*60*1e3;class P0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new N0(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=mu();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=A0}),this._storage.overwrite(this._heartbeatsCache))}catch(s){xt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=mu(),{heartbeatsToSend:s,unsentEntries:i}=O0(this._heartbeatsCache.heartbeats),r=cr(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return xt.warn(n),""}}}function mu(){return new Date().toISOString().substring(0,10)}function O0(t,e=R0){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),vu(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),vu(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class N0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return pR()?_R().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await S0(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return gu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return gu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function vu(t){return cr(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function k0(t){as(new Sn("platform-logger",e=>new GR(e),"PRIVATE")),as(new Sn("heartbeat",e=>new P0(e),"PRIVATE")),nn(ha,pu,t),nn(ha,pu,"esm2017"),nn("fire-js","")}k0("");function dl(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function xf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const x0=xf,Df=new wi("auth","Firebase",xf());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr=new cl("@firebase/auth");function D0(t,...e){pr.logLevel<=ie.WARN&&pr.warn(`Auth (${ws}): ${t}`,...e)}function zi(t,...e){pr.logLevel<=ie.ERROR&&pr.error(`Auth (${ws}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(t,...e){throw fl(t,...e)}function gt(t,...e){return fl(t,...e)}function Mf(t,e,n){const s=Object.assign(Object.assign({},x0()),{[e]:n});return new wi("auth","Firebase",s).create(e,{appName:t.name})}function Cn(t){return Mf(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function fl(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Df.create(t,...e)}function B(t,e,...n){if(!t)throw fl(e,...n)}function Rt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw zi(e),new Error(e)}function Mt(t,e){t||Rt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pa(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function M0(){return yu()==="http:"||yu()==="https:"}function yu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(M0()||dR()||"connection"in navigator)?navigator.onLine:!0}function $0(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,n){this.shortDelay=e,this.longDelay=n,Mt(n>e,"Short delay should be less than long delay!"),this.isMobile=ll()||Cf()}get(){return L0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pl(t,e){Mt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const F0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U0=new Ci(3e4,6e4);function Ii(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function hn(t,e,n,s,i={}){return $f(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Es(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},r);return hR()||(c.referrerPolicy="no-referrer"),Lf.fetch()(Ff(t,t.config.apiHost,n,a),c)})}async function $f(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},F0),e);try{const i=new W0(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Hi(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Hi(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Hi(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Hi(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Mf(t,u,c);Dt(t,u)}}catch(i){if(i instanceof un)throw i;Dt(t,"network-request-failed",{message:String(i)})}}async function H0(t,e,n,s,i={}){const r=await hn(t,e,n,s,i);return"mfaPendingCredential"in r&&Dt(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Ff(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?pl(t.config,i):`${t.config.apiScheme}://${i}`}function B0(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class W0{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(gt(this.auth,"network-request-failed")),U0.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Hi(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=gt(t,e,s);return i.customData._tokenResponse=n,i}function bu(t){return t!==void 0&&t.enterprise!==void 0}class j0{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return B0(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function V0(t,e){return hn(t,"GET","/v2/recaptchaConfig",Ii(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G0(t,e){return hn(t,"POST","/v1/accounts:delete",e)}async function Uf(t,e){return hn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function K0(t,e=!1){const n=bt(t),s=await n.getIdToken(e),i=_l(s);B(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Vs(Oo(i.auth_time)),issuedAtTime:Vs(Oo(i.iat)),expirationTime:Vs(Oo(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Oo(t){return Number(t)*1e3}function _l(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return zi("JWT malformed, contained fewer than 3 sections"),null;try{const i=ur(n);return i?JSON.parse(i):(zi("Failed to decode base64 JWT payload"),null)}catch(i){return zi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Eu(t){const e=_l(t);return B(e,"internal-error"),B(typeof e.exp<"u","internal-error"),B(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ai(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof un&&q0(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function q0({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Vs(this.lastLoginAt),this.creationTime=Vs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function _r(t){var e;const n=t.auth,s=await t.getIdToken(),i=await ai(t,Uf(n,{idToken:s}));B(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Hf(r.providerUserInfo):[],a=Q0(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new _a(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Y0(t){const e=bt(t);await _r(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Q0(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Hf(t){return t.map(e=>{var{providerId:n}=e,s=dl(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J0(t,e){const n=await $f(t,{},async()=>{const s=Es({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=Ff(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Lf.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function X0(t,e){return hn(t,"POST","/v2/accounts:revokeToken",Ii(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken<"u","internal-error"),B(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Eu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){B(e.length!==0,"internal-error");const n=Eu(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(B(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await J0(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Zn;return s&&(B(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(B(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(B(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Zn,this.toJSON())}_performRefresh(){return Rt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(t,e){B(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class At{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=dl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new z0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new _a(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await ai(this,this.stsTokenManager.getToken(this.auth,e));return B(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return K0(this,e)}reload(){return Y0(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new At(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await _r(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Xt(this.auth.app))return Promise.reject(Cn(this.auth));const e=await this.getIdToken();return await ai(this,G0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,_=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,b=(a=n.tenantId)!==null&&a!==void 0?a:void 0,O=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,k=(c=n.createdAt)!==null&&c!==void 0?c:void 0,P=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:M,emailVerified:x,isAnonymous:z,providerData:ge,stsTokenManager:ae}=n;B(M&&ae,e,"internal-error");const qe=Zn.fromJSON(this.name,ae);B(typeof M=="string",e,"internal-error"),Wt(h,e.name),Wt(d,e.name),B(typeof x=="boolean",e,"internal-error"),B(typeof z=="boolean",e,"internal-error"),Wt(_,e.name),Wt(m,e.name),Wt(b,e.name),Wt(O,e.name),Wt(k,e.name),Wt(P,e.name);const ze=new At({uid:M,auth:e,email:d,emailVerified:x,displayName:h,isAnonymous:z,photoURL:m,phoneNumber:_,tenantId:b,stsTokenManager:qe,createdAt:k,lastLoginAt:P});return ge&&Array.isArray(ge)&&(ze.providerData=ge.map(Ye=>Object.assign({},Ye))),O&&(ze._redirectEventId=O),ze}static async _fromIdTokenResponse(e,n,s=!1){const i=new Zn;i.updateFromServerResponse(n);const r=new At({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await _r(r),r}static async _fromGetAccountInfoResponse(e,n,s){const i=n.users[0];B(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?Hf(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),a=new Zn;a.updateFromIdToken(s);const l=new At({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new _a(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wu=new Map;function Pt(t){Mt(t instanceof Function,"Expected a class definition");let e=wu.get(t);return e?(Mt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,wu.set(t,e),e)}/**
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
 */class Bf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Bf.type="NONE";const Cu=Bf;/**
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
 */function Yi(t,e,n){return`firebase:${t}:${e}:${n}`}class es{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Yi(this.userKey,i.apiKey,r),this.fullPersistenceKey=Yi("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?At._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new es(Pt(Cu),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Pt(Cu);const o=Yi(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=At._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new es(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new es(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iu(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Gf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Wf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(qf(e))return"Blackberry";if(zf(e))return"Webos";if(jf(e))return"Safari";if((e.includes("chrome/")||Vf(e))&&!e.includes("edge/"))return"Chrome";if(Kf(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Wf(t=De()){return/firefox\//i.test(t)}function jf(t=De()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Vf(t=De()){return/crios\//i.test(t)}function Gf(t=De()){return/iemobile/i.test(t)}function Kf(t=De()){return/android/i.test(t)}function qf(t=De()){return/blackberry/i.test(t)}function zf(t=De()){return/webos/i.test(t)}function gl(t=De()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Z0(t=De()){var e;return gl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function eA(){return fR()&&document.documentMode===10}function Yf(t=De()){return gl(t)||Kf(t)||zf(t)||qf(t)||/windows phone/i.test(t)||Gf(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qf(t,e=[]){let n;switch(t){case"Browser":n=Iu(De());break;case"Worker":n=`${Iu(De())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ws}/${s}`}/**
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
 */class tA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function nA(t,e={}){return hn(t,"GET","/v2/passwordPolicy",Ii(t,e))}/**
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
 */const sA=6;class iA{constructor(e){var n,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:sA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,i,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Tu(this),this.idTokenSubscription=new Tu(this),this.beforeStateQueue=new tA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Df,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Pt(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await es.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Uf(this,{idToken:e}),s=await At._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Xt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await _r(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Xt(this.app))return Promise.reject(Cn(this));const n=e?bt(e):null;return n&&B(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Xt(this.app)?Promise.reject(Cn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Xt(this.app)?Promise.reject(Cn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Pt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await nA(this),n=new iA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new wi("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await X0(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Pt(e)||this._popupRedirectResolver;B(n,this,"argument-error"),this.redirectPersistenceManager=await es.create(this,[Pt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(B(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Qf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&D0(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ti(t){return bt(t)}class Tu{constructor(e){this.auth=e,this.observer=null,this.addObserver=wR(n=>this.observer=n)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function oA(t){Xr=t}function Jf(t){return Xr.loadJS(t)}function aA(){return Xr.recaptchaEnterpriseScript}function lA(){return Xr.gapiScript}function cA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class uA{constructor(){this.enterprise=new hA}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class hA{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const dA="recaptcha-enterprise",Xf="NO_RECAPTCHA";class fA{constructor(e){this.type=dA,this.auth=Ti(e)}async verify(e="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{V0(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new j0(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(r,o,a){const l=window.grecaptcha;bu(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(Xf)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new uA().execute("siteKey",{action:"verify"}):new Promise((r,o)=>{s(this.auth).then(a=>{if(!n&&bu(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=aA();l.length!==0&&(l+=a),Jf(l).then(()=>{i(a,r,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Su(t,e,n,s=!1,i=!1){const r=new fA(t);let o;if(i)o=Xf;else try{o=await r.verify(n)}catch{o=await r.verify(n,!0)}const a=Object.assign({},e);return s?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function pA(t,e,n,s,i){var r;if(!((r=t._getRecaptchaConfig())===null||r===void 0)&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Su(t,e,n,n==="getOobCode");return s(t,o)}else return s(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Su(t,e,n,n==="getOobCode");return s(t,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _A(t,e){const n=hl(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(dr(r,e??{}))return i;Dt(i,"already-initialized")}return n.initialize({options:e})}function gA(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Pt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function mA(t,e,n){const s=Ti(t);B(s._canInitEmulator,s,"emulator-config-failed"),B(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=Zf(e),{host:o,port:a}=vA(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),yA()}function Zf(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function vA(t){const e=Zf(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Ru(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Ru(o)}}}function Ru(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function yA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Rt("not implemented")}_getIdTokenResponse(e){return Rt("not implemented")}_linkToIdToken(e,n){return Rt("not implemented")}_getReauthenticationResolver(e){return Rt("not implemented")}}async function bA(t,e){return hn(t,"POST","/v1/accounts:sendOobCode",Ii(t,e))}async function EA(t,e){return bA(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ts(t,e){return H0(t,"POST","/v1/accounts:signInWithIdp",Ii(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wA="http://localhost";class Rn extends ep{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Rn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Dt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=dl(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Rn(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ts(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,ts(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ts(e,n)}buildRequest(){const e={requestUri:wA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Es(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Si extends tp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt extends Si{constructor(){super("facebook.com")}static credential(e){return Rn._fromParams({providerId:zt.PROVIDER_ID,signInMethod:zt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zt.credentialFromTaggedObject(e)}static credentialFromError(e){return zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zt.credential(e.oauthAccessToken)}catch{return null}}}zt.FACEBOOK_SIGN_IN_METHOD="facebook.com";zt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt extends Si{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Rn._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Yt.credential(n,s)}catch{return null}}}Yt.GOOGLE_SIGN_IN_METHOD="google.com";Yt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt extends Si{constructor(){super("github.com")}static credential(e){return Rn._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qt.credential(e.oauthAccessToken)}catch{return null}}}Qt.GITHUB_SIGN_IN_METHOD="github.com";Qt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt extends Si{constructor(){super("twitter.com")}static credential(e,n){return Rn._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Jt.credentialFromTaggedObject(e)}static credentialFromError(e){return Jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Jt.credential(n,s)}catch{return null}}}Jt.TWITTER_SIGN_IN_METHOD="twitter.com";Jt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await At._fromIdTokenResponse(e,s,i),o=Au(s);return new ls({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=Au(s);return new ls({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function Au(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr extends un{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,gr.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new gr(e,n,s,i)}}function np(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?gr._fromErrorAndOperation(t,r,e,s):r})}async function CA(t,e,n=!1){const s=await ai(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ls._forOperation(t,"link",s)}/**
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
 */async function IA(t,e,n=!1){const{auth:s}=t;if(Xt(s.app))return Promise.reject(Cn(s));const i="reauthenticate";try{const r=await ai(t,np(s,i,e,t),n);B(r.idToken,s,"internal-error");const o=_l(r.idToken);B(o,s,"internal-error");const{sub:a}=o;return B(t.uid===a,s,"user-mismatch"),ls._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Dt(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TA(t,e,n=!1){if(Xt(t.app))return Promise.reject(Cn(t));const s="signIn",i=await np(t,s,e),r=await ls._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function SA(t,e,n){const s=Ti(t);await pA(s,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",EA)}function RA(t,e,n,s){return bt(t).onIdTokenChanged(e,n,s)}function AA(t,e,n){return bt(t).beforeAuthStateChanged(e,n)}const mr="__sak";/**
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
 */class sp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(mr,"1"),this.storage.removeItem(mr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PA=1e3,OA=10;class ip extends sp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Yf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);eA()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,OA):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},PA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ip.type="LOCAL";const NA=ip;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function kA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Zr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Zr(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await kA(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Zr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ml(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class xA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=ml("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(){return window}function DA(t){mt().location.href=t}/**
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
 */function ap(){return typeof mt().WorkerGlobalScope<"u"&&typeof mt().importScripts=="function"}async function MA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function LA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function $A(){return ap()?self:null}/**
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
 */const lp="firebaseLocalStorageDb",FA=1,vr="firebaseLocalStorage",cp="fbase_key";class Ri{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function eo(t,e){return t.transaction([vr],e?"readwrite":"readonly").objectStore(vr)}function UA(){const t=indexedDB.deleteDatabase(lp);return new Ri(t).toPromise()}function ga(){const t=indexedDB.open(lp,FA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(vr,{keyPath:cp})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(vr)?e(s):(s.close(),await UA(),e(await ga()))})})}async function Pu(t,e,n){const s=eo(t,!0).put({[cp]:e,value:n});return new Ri(s).toPromise()}async function HA(t,e){const n=eo(t,!1).get(e),s=await new Ri(n).toPromise();return s===void 0?null:s.value}function Ou(t,e){const n=eo(t,!0).delete(e);return new Ri(n).toPromise()}const BA=800,WA=3;class up{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ga(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>WA)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ap()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zr._getInstance($A()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await MA(),!this.activeServiceWorker)return;this.sender=new xA(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||LA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ga();return await Pu(e,mr,"1"),await Ou(e,mr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Pu(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>HA(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ou(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=eo(i,!1).getAll();return new Ri(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),BA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}up.type="LOCAL";const jA=up;new Ci(3e4,6e4);/**
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
 */function VA(t,e){return e?Pt(e):(B(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class vl extends ep{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ts(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ts(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ts(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function GA(t){return TA(t.auth,new vl(t),t.bypassAuthState)}function KA(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),IA(n,new vl(t),t.bypassAuthState)}async function qA(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),CA(n,new vl(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return GA;case"linkViaPopup":case"linkViaRedirect":return qA;case"reauthViaPopup":case"reauthViaRedirect":return KA;default:Dt(this.auth,"internal-error")}}resolve(e){Mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zA=new Ci(2e3,1e4);class Wn extends hp{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Wn.currentPopupAction&&Wn.currentPopupAction.cancel(),Wn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){Mt(this.filter.length===1,"Popup operations only handle one event");const e=ml();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(gt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(gt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Wn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(gt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,zA.get())};e()}}Wn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YA="pendingRedirect",Qi=new Map;class QA extends hp{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Qi.get(this.auth._key());if(!e){try{const s=await JA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Qi.set(this.auth._key(),e)}return this.bypassAuthState||Qi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function JA(t,e){const n=eP(e),s=ZA(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function XA(t,e){Qi.set(t._key(),e)}function ZA(t){return Pt(t._redirectPersistence)}function eP(t){return Yi(YA,t.config.apiKey,t.name)}async function tP(t,e,n=!1){if(Xt(t.app))return Promise.reject(Cn(t));const s=Ti(t),i=VA(s,e),o=await new QA(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nP=10*60*1e3;class sP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!iP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!dp(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(gt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=nP&&this.cachedEventUids.clear(),this.cachedEventUids.has(Nu(e))}saveEventToCache(e){this.cachedEventUids.add(Nu(e)),this.lastProcessedEventTime=Date.now()}}function Nu(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function dp({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function iP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return dp(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rP(t,e={}){return hn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,aP=/^https?/;async function lP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await rP(t);for(const n of e)try{if(cP(n))return}catch{}Dt(t,"unauthorized-domain")}function cP(t){const e=pa(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!aP.test(n))return!1;if(oP.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const uP=new Ci(3e4,6e4);function ku(){const t=mt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function hP(t){return new Promise((e,n)=>{var s,i,r;function o(){ku(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ku(),n(gt(t,"network-request-failed"))},timeout:uP.get()})}if(!((i=(s=mt().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=mt().gapi)===null||r===void 0)&&r.load)o();else{const a=cA("iframefcb");return mt()[a]=()=>{gapi.load?o():n(gt(t,"network-request-failed"))},Jf(`${lA()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ji=null,e})}let Ji=null;function dP(t){return Ji=Ji||hP(t),Ji}/**
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
 */const fP=new Ci(5e3,15e3),pP="__/auth/iframe",_P="emulator/auth/iframe",gP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function vP(t){const e=t.config;B(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?pl(e,_P):`https://${t.config.authDomain}/${pP}`,s={apiKey:e.apiKey,appName:t.name,v:ws},i=mP.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Es(s).slice(1)}`}async function yP(t){const e=await dP(t),n=mt().gapi;return B(n,t,"internal-error"),e.open({where:document.body,url:vP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gP,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=gt(t,"network-request-failed"),a=mt().setTimeout(()=>{r(o)},fP.get());function l(){mt().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const bP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},EP=500,wP=600,CP="_blank",IP="http://localhost";class xu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function TP(t,e,n,s=EP,i=wP){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},bP),{width:s.toString(),height:i.toString(),top:r,left:o}),c=De().toLowerCase();n&&(a=Vf(c)?CP:n),Wf(c)&&(e=e||IP,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[_,m])=>`${d}${_}=${m},`,"");if(Z0(c)&&a!=="_self")return SP(e||"",a),new xu(null);const h=window.open(e||"",a,u);B(h,t,"popup-blocked");try{h.focus()}catch{}return new xu(h)}function SP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const RP="__/auth/handler",AP="emulator/auth/handler",PP=encodeURIComponent("fac");async function Du(t,e,n,s,i,r){B(t.config.authDomain,t,"auth-domain-config-required"),B(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:ws,eventId:i};if(e instanceof tp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",la(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries({}))o[u]=h}if(e instanceof Si){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${PP}=${encodeURIComponent(l)}`:"";return`${OP(t)}?${Es(a).slice(1)}${c}`}function OP({config:t}){return t.emulator?pl(t,AP):`https://${t.authDomain}/${RP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No="webStorageSupport";class NP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=op,this._completeRedirectFn=tP,this._overrideRedirectResult=XA}async _openPopup(e,n,s,i){var r;Mt((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Du(e,n,s,pa(),i);return TP(e,o,ml())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await Du(e,n,s,pa(),i);return DA(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Mt(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await yP(e),s=new sP(e);return n.register("authEvent",i=>(B(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(No,{type:No},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[No];o!==void 0&&n(!!o),Dt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=lP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Yf()||jf()||gl()}}const kP=NP;var Mu="@firebase/auth",Lu="1.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function MP(t){as(new Sn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;B(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Qf(t)},c=new rA(s,i,r,l);return gA(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),as(new Sn("auth-internal",e=>{const n=Ti(e.getProvider("auth").getImmediate());return(s=>new xP(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),nn(Mu,Lu,DP(t)),nn(Mu,Lu,"esm2017")}/**
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
 */const LP=5*60,$P=wf("authIdTokenMaxAge")||LP;let $u=null;const FP=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>$P)return;const i=n==null?void 0:n.token;$u!==i&&($u=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function fp(t=Of()){const e=hl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=_A(t,{popupRedirectResolver:kP,persistence:[jA,NA,op]}),s=wf("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=FP(r.toString());AA(n,o,()=>o(n.currentUser)),RA(n,a=>o(a))}}const i=bf("auth");return i&&mA(n,`http://${i}`),n}function UP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}oA({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=gt("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",UP().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});MP("Browser");const HP=vi({name:"LoginBox",props:{isInApp:{type:Boolean,required:!0},showLogin:{type:Boolean,required:!0}},setup(t,{emit:e}){const n=zn(""),s=zn(""),i=zn(!1);Ws(i,u=>{localStorage.setItem("keeploggedin",JSON.stringify(u))}),qa(()=>{const u=localStorage.getItem("keeploggedin");u!==null&&(i.value=JSON.parse(u))});const r=()=>{e("toggleLogin")},o=u=>{const h=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,d=/@alearn.org.tw$/;return h.test(String(u).toLowerCase())&&d.test(String(u).toLowerCase())};return{users_email:n,user_password:s,keeploggedin:i,toggleLogin:r,registerWithEmail:()=>{if(console.log("users_email:",n.value),console.log("user_password:",s.value),console.log("Register clicked"),!n.value||!s.value){window.alert("請先填寫email和密碼");return}if(!o(n.value)){alert("email格式錯誤，請重試");return}if(!s.value||typeof s.value!="string"){alert("密碼請至少包含一個英文字，請重新輸入");return}e("registerWithEmail",n.value,s.value,i.value)},loginWithEmail:()=>{let u=!0;console.log("Login clicked");const h=window.location.pathname;if(!o(n.value)){alert("請用@alearn.org.tw的Email登入");return}if((h==="/friends"||h==="/maps"||h==="/privacy-policy"||h.startsWith("/flag")||h.startsWith("/group"))&&(u=!1),!s.value||typeof s.value!="string"){alert("密碼無效，請重新輸入");return}e("loginWithEmail",u,n.value,s.value,i.value)},resetPassword:()=>{if(console.log("Reset password function triggered"),console.log("Email for reset:",n.value),!o(n.value)){alert("請先輸入有效的電子郵件地址");return}const u=fp();console.log("Firebase auth object:",u),SA(u,n.value).then(()=>{alert("密碼重置郵件已發送，請檢查您的郵箱"),console.log("Password reset email sent successfully")}).catch(h=>{switch(console.error("密碼重置郵件發送失敗：",h.code,h.message),h.code){case"auth/invalid-email":alert("無效的電子郵件地址");break;case"auth/user-not-found":alert("找不到該電子郵件對應的帳號");break;default:alert("密碼重置郵件發送失敗，請稍後再試")}})}}}}),BP={class:"ui middle aligned center aligned grid",id:"login-main",style:{height:"100vh"}},WP={class:"column",style:{"max-width":"420px"}},jP={class:"ui raised segment"},VP={key:0,class:"ui error message"},GP={class:"ui form segment",style:{"border-radius":"10px",padding:"15px","background-color":"#f0f0f0"}},KP={class:"field"},qP={class:"ui left icon input"},zP={class:"field"},YP={class:"ui left icon input"},QP={class:"ui large form"},JP={class:"ui segment",style:{border:"none","padding-top":"10px"}},XP={class:"field"};function ZP(t,e,n,s,i,r){return pt(),qt("div",{class:"ui dimmer modals visible active clickable",id:"login-bg",style:{background:"rgba(0, 0, 0, 0.6)"},onClick:e[9]||(e[9]=o=>t.toggleLogin())},[V("div",BP,[V("div",WP,[V("div",jP,[t.isInApp?(pt(),qt("div",VP,"本系統不支援facebook, line等app內部瀏覽，請用一般瀏覽器開啟，方可登入，謝謝")):Wd("",!0),e[14]||(e[14]=V("h2",{class:"ui black header",style:{"font-size":"1.5rem","font-weight":"600"}},"登入您的帳號",-1)),V("div",GP,[V("div",KP,[V("div",qP,[e[10]||(e[10]=V("i",{class:"envelope icon"},null,-1)),_o(V("input",{type:"text",name:"email",placeholder:"E-mail address",style:{"font-size":"14px"},"onUpdate:modelValue":e[0]||(e[0]=o=>t.users_email=o),onClick:e[1]||(e[1]=Ps(()=>{},["stop"]))},null,512),[[Oc,t.users_email]])])]),V("div",zP,[V("div",YP,[e[11]||(e[11]=V("i",{class:"lock icon"},null,-1)),_o(V("input",{type:"password",name:"user_password",placeholder:"Password",style:{"font-size":"14px"},"onUpdate:modelValue":e[2]||(e[2]=o=>t.user_password=o),onClick:e[3]||(e[3]=Ps(()=>{},["stop"]))},null,512),[[Oc,t.user_password]])])]),V("div",{class:Xs(["ui fluid large button",{disabled:t.isInApp}]),onClick:e[4]||(e[4]=Ps((...o)=>t.loginWithEmail&&t.loginWithEmail(...o),["prevent"])),style:{"background-color":"#e47e10",color:"white","font-weight":"bold"}},"登入",2),V("a",{class:"small forgot-password",onClick:e[5]||(e[5]=(...o)=>t.resetPassword&&t.resetPassword(...o))},"忘記密碼")]),V("form",QP,[V("div",JP,[V("div",XP,[V("div",{class:"ui checkbox",onClick:e[7]||(e[7]=Ps(()=>{},["stop"]))},[_o(V("input",{type:"checkbox","onUpdate:modelValue":e[6]||(e[6]=o=>t.keeploggedin=o)},null,512),[[tv,t.keeploggedin]]),e[12]||(e[12]=V("label",null,"保持登入狀態",-1))])])]),V("p",null,[e[13]||(e[13]=si("新用戶？按此")),V("button",{class:Xs(["ui large basic button",{disabled:t.isInApp}]),id:"register-btn",onClick:e[8]||(e[8]=Ps((...o)=>t.registerWithEmail&&t.registerWithEmail(...o),["stop"]))},"註冊",2)])])])])])])}const yl=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},eO=yl(HP,[["render",ZP],["__scopeId","data-v-44806ccd"]]),tO=new eR(window.navigator.userAgent),nO=tO.isInApp,sO=vi({name:"App",components:{Login:eO},data(){return{isInApp:nO,showLogin:!1}},methods:{toggleLogin(){this.showLogin=!this.showLogin}}}),iO={class:"ui fixed top menu"},rO={class:"ui container"};function oO(t,e,n,s,i,r){const o=go("RouterLink"),a=go("RouterView"),l=go("Login");return pt(),qt(et,null,[V("header",null,[V("nav",iO,[Ie(o,{to:"/",class:"item"},{default:Yo(()=>e[0]||(e[0]=[si("Home")])),_:1}),Ie(o,{to:"/about",class:"item"},{default:Yo(()=>e[1]||(e[1]=[si("About")])),_:1})])]),e[2]||(e[2]=V("div",{class:"small-spacer"},null,-1)),V("div",rO,[Ie(a,{onToggleLogin:t.toggleLogin},null,8,["onToggleLogin"])]),t.showLogin?(pt(),Hd(l,{key:0,showLogin:t.showLogin,isInApp:!1,onToggleLogin:t.toggleLogin},null,8,["showLogin","onToggleLogin"])):Wd("",!0)],64)}const aO=yl(sO,[["render",oO],["__scopeId","data-v-a6465022"]]),lO="modulepreload",cO=function(t){return"/"+t},Fu={},uO=function(e,n,s){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(n.map(l=>{if(l=cO(l),l in Fu)return;Fu[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const h=document.createElement("link");if(h.rel=c?"stylesheet":lO,c||(h.as="script"),h.crossOrigin="",h.href=l,a&&h.setAttribute("nonce",a),document.head.appendChild(h),c)return new Promise((d,_)=>{h.addEventListener("load",d),h.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})};/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Bn=typeof document<"u";function pp(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function hO(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&pp(t.default)}const ne=Object.assign;function ko(t,e){const n={};for(const s in e){const i=e[s];n[s]=at(i)?i.map(t):t(i)}return n}const Gs=()=>{},at=Array.isArray,_p=/#/g,dO=/&/g,fO=/\//g,pO=/=/g,_O=/\?/g,gp=/\+/g,gO=/%5B/g,mO=/%5D/g,mp=/%5E/g,vO=/%60/g,vp=/%7B/g,yO=/%7C/g,yp=/%7D/g,bO=/%20/g;function bl(t){return encodeURI(""+t).replace(yO,"|").replace(gO,"[").replace(mO,"]")}function EO(t){return bl(t).replace(vp,"{").replace(yp,"}").replace(mp,"^")}function ma(t){return bl(t).replace(gp,"%2B").replace(bO,"+").replace(_p,"%23").replace(dO,"%26").replace(vO,"`").replace(vp,"{").replace(yp,"}").replace(mp,"^")}function wO(t){return ma(t).replace(pO,"%3D")}function CO(t){return bl(t).replace(_p,"%23").replace(_O,"%3F")}function IO(t){return t==null?"":CO(t).replace(fO,"%2F")}function li(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const TO=/\/$/,SO=t=>t.replace(TO,"");function xo(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=OO(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:li(o)}}function RO(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Uu(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function AO(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&cs(e.matched[s],n.matched[i])&&bp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function cs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function bp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!PO(t[n],e[n]))return!1;return!0}function PO(t,e){return at(t)?Hu(t,e):at(e)?Hu(e,t):t===e}function Hu(t,e){return at(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function OO(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o).join("/")}const jt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ci;(function(t){t.pop="pop",t.push="push"})(ci||(ci={}));var Ks;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ks||(Ks={}));function NO(t){if(!t)if(Bn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),SO(t)}const kO=/^[^#]+#/;function xO(t,e){return t.replace(kO,"#")+e}function DO(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const to=()=>({left:window.scrollX,top:window.scrollY});function MO(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=DO(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Bu(t,e){return(history.state?history.state.position-e:-1)+t}const va=new Map;function LO(t,e){va.set(t,e)}function $O(t){const e=va.get(t);return va.delete(t),e}let FO=()=>location.protocol+"//"+location.host;function Ep(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),Uu(l,"")}return Uu(n,t)+s+i}function UO(t,e,n,s){let i=[],r=[],o=null;const a=({state:d})=>{const _=Ep(t,location),m=n.value,b=e.value;let O=0;if(d){if(n.value=_,e.value=d,o&&o===m){o=null;return}O=b?d.position-b.position:0}else s(_);i.forEach(k=>{k(n.value,m,{delta:O,type:ci.pop,direction:O?O>0?Ks.forward:Ks.back:Ks.unknown})})};function l(){o=n.value}function c(d){i.push(d);const _=()=>{const m=i.indexOf(d);m>-1&&i.splice(m,1)};return r.push(_),_}function u(){const{history:d}=window;d.state&&d.replaceState(ne({},d.state,{scroll:to()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function Wu(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?to():null}}function HO(t){const{history:e,location:n}=window,s={value:Ep(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:FO()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),i.value=c}catch(_){console.error(_),n[u?"replace":"assign"](d)}}function o(l,c){const u=ne({},e.state,Wu(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=ne({},i.value,e.state,{forward:l,scroll:to()});r(u.current,u,!0);const h=ne({},Wu(s.value,l,null),{position:u.position+1},c);r(l,h,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function BO(t){t=NO(t);const e=HO(t),n=UO(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=ne({location:"",base:t,go:s,createHref:xO.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function WO(t){return typeof t=="string"||t&&typeof t=="object"}function wp(t){return typeof t=="string"||typeof t=="symbol"}const Cp=Symbol("");var ju;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ju||(ju={}));function us(t,e){return ne(new Error,{type:t,[Cp]:!0},e)}function Ct(t,e){return t instanceof Error&&Cp in t&&(e==null||!!(t.type&e))}const Vu="[^/]+?",jO={sensitive:!1,strict:!1,start:!0,end:!0},VO=/[.+*?^${}()[\]/\\]/g;function GO(t,e){const n=ne({},jO,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const d=c[h];let _=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(VO,"\\$&"),_+=40;else if(d.type===1){const{value:m,repeatable:b,optional:O,regexp:k}=d;r.push({name:m,repeatable:b,optional:O});const P=k||Vu;if(P!==Vu){_+=10;try{new RegExp(`(${P})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${m}" (${P}): `+x.message)}}let M=b?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;h||(M=O&&c.length<2?`(?:/${M})`:"/"+M),O&&(M+="?"),i+=M,_+=20,O&&(_+=-8),b&&(_+=-20),P===".*"&&(_+=-50)}u.push(_)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const _=u[d]||"",m=r[d-1];h[m.name]=_&&m.repeatable?_.split("/"):_}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const _ of d)if(_.type===0)u+=_.value;else if(_.type===1){const{value:m,repeatable:b,optional:O}=_,k=m in c?c[m]:"";if(at(k)&&!b)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const P=at(k)?k.join("/"):k;if(!P)if(O)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=P}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function KO(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Ip(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=KO(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Gu(s))return 1;if(Gu(i))return-1}return i.length-s.length}function Gu(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const qO={type:0,value:""},zO=/[a-zA-Z0-9_]/;function YO(t){if(!t)return[[]];if(t==="/")return[[qO]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${c}": ${_}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:l==="("?n=2:zO.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function QO(t,e,n){const s=GO(YO(t.path),n),i=ne(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function JO(t,e){const n=[],s=new Map;e=Yu({strict:!1,end:!0,sensitive:!1},e);function i(h){return s.get(h)}function r(h,d,_){const m=!_,b=qu(h);b.aliasOf=_&&_.record;const O=Yu(e,h),k=[b];if("alias"in h){const x=typeof h.alias=="string"?[h.alias]:h.alias;for(const z of x)k.push(qu(ne({},b,{components:_?_.record.components:b.components,path:z,aliasOf:_?_.record:b})))}let P,M;for(const x of k){const{path:z}=x;if(d&&z[0]!=="/"){const ge=d.record.path,ae=ge[ge.length-1]==="/"?"":"/";x.path=d.record.path+(z&&ae+z)}if(P=QO(x,d,O),_?_.alias.push(P):(M=M||P,M!==P&&M.alias.push(P),m&&h.name&&!zu(P)&&o(h.name)),Tp(P)&&l(P),b.children){const ge=b.children;for(let ae=0;ae<ge.length;ae++)r(ge[ae],P,_&&_.children[ae])}_=_||P}return M?()=>{o(M)}:Gs}function o(h){if(wp(h)){const d=s.get(h);d&&(s.delete(h),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(h);d>-1&&(n.splice(d,1),h.record.name&&s.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function a(){return n}function l(h){const d=eN(h,n);n.splice(d,0,h),h.record.name&&!zu(h)&&s.set(h.record.name,h)}function c(h,d){let _,m={},b,O;if("name"in h&&h.name){if(_=s.get(h.name),!_)throw us(1,{location:h});O=_.record.name,m=ne(Ku(d.params,_.keys.filter(M=>!M.optional).concat(_.parent?_.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),h.params&&Ku(h.params,_.keys.map(M=>M.name))),b=_.stringify(m)}else if(h.path!=null)b=h.path,_=n.find(M=>M.re.test(b)),_&&(m=_.parse(b),O=_.record.name);else{if(_=d.name?s.get(d.name):n.find(M=>M.re.test(d.path)),!_)throw us(1,{location:h,currentLocation:d});O=_.record.name,m=ne({},d.params,h.params),b=_.stringify(m)}const k=[];let P=_;for(;P;)k.unshift(P.record),P=P.parent;return{name:O,path:b,params:m,matched:k,meta:ZO(k)}}t.forEach(h=>r(h));function u(){n.length=0,s.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:i}}function Ku(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function qu(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:XO(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function XO(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function zu(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function ZO(t){return t.reduce((e,n)=>ne(e,n.meta),{})}function Yu(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function eN(t,e){let n=0,s=e.length;for(;n!==s;){const r=n+s>>1;Ip(t,e[r])<0?s=r:n=r+1}const i=tN(t);return i&&(s=e.lastIndexOf(i,s-1)),s}function tN(t){let e=t;for(;e=e.parent;)if(Tp(e)&&Ip(t,e)===0)return e}function Tp({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function nN(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(gp," "),o=r.indexOf("="),a=li(o<0?r:r.slice(0,o)),l=o<0?null:li(r.slice(o+1));if(a in e){let c=e[a];at(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Qu(t){let e="";for(let n in t){const s=t[n];if(n=wO(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(at(s)?s.map(r=>r&&ma(r)):[s&&ma(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function sN(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=at(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const iN=Symbol(""),Ju=Symbol(""),El=Symbol(""),Sp=Symbol(""),ya=Symbol("");function Ns(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Kt(t,e,n,s,i,r=o=>o()){const o=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(us(4,{from:n,to:e})):d instanceof Error?l(d):WO(d)?l(us(2,{from:e,to:d})):(o&&s.enterCallbacks[i]===o&&typeof d=="function"&&o.push(d),a())},u=r(()=>t.call(s&&s.instances[i],e,n,c));let h=Promise.resolve(u);t.length<3&&(h=h.then(c)),h.catch(d=>l(d))})}function Do(t,e,n,s,i=r=>r()){const r=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(pp(l)){const u=(l.__vccOpts||l)[e];u&&r.push(Kt(u,n,s,o,a,i))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const h=hO(u)?u.default:u;o.mods[a]=u,o.components[a]=h;const _=(h.__vccOpts||h)[e];return _&&Kt(_,n,s,o,a,i)()}))}}return r}function Xu(t){const e=Nt(El),n=Nt(Sp),s=tt(()=>{const l=Yn(t.to);return e.resolve(l)}),i=tt(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(cs.bind(null,u));if(d>-1)return d;const _=Zu(l[c-2]);return c>1&&Zu(u)===_&&h[h.length-1].path!==_?h.findIndex(cs.bind(null,l[c-2])):d}),r=tt(()=>i.value>-1&&lN(n.params,s.value.params)),o=tt(()=>i.value>-1&&i.value===n.matched.length-1&&bp(n.params,s.value.params));function a(l={}){return aN(l)?e[Yn(t.replace)?"replace":"push"](Yn(t.to)).catch(Gs):Promise.resolve()}return{route:s,href:tt(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const rN=vi({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Xu,setup(t,{slots:e}){const n=Ur(Xu(t)),{options:s}=Nt(El),i=tt(()=>({[eh(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[eh(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Gd("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),oN=rN;function aN(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function lN(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!at(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Zu(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const eh=(t,e,n)=>t??e??n,cN=vi({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Nt(ya),i=tt(()=>t.route||s.value),r=Nt(Ju,0),o=tt(()=>{let c=Yn(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=tt(()=>i.value.matched[o.value]);Vi(Ju,tt(()=>o.value+1)),Vi(iN,a),Vi(ya,i);const l=zn();return Ws(()=>[l.value,a.value,t.name],([c,u,h],[d,_,m])=>{u&&(u.instances[h]=c,_&&_!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=_.leaveGuards),u.updateGuards.size||(u.updateGuards=_.updateGuards))),c&&u&&(!_||!cs(u,_)||!d)&&(u.enterCallbacks[h]||[]).forEach(b=>b(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return th(n.default,{Component:d,route:c});const _=h.props[u],m=_?_===!0?c.params:typeof _=="function"?_(c):_:null,O=Gd(d,ne({},m,e,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return th(n.default,{Component:O,route:c})||O}}});function th(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const uN=cN;function hN(t){const e=JO(t.routes,t),n=t.parseQuery||nN,s=t.stringifyQuery||Qu,i=t.history,r=Ns(),o=Ns(),a=Ns(),l=bg(jt);let c=jt;Bn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ko.bind(null,y=>""+y),h=ko.bind(null,IO),d=ko.bind(null,li);function _(y,D){let A,L;return wp(y)?(A=e.getRecordMatcher(y),L=D):L=y,e.addRoute(L,A)}function m(y){const D=e.getRecordMatcher(y);D&&e.removeRoute(D)}function b(){return e.getRoutes().map(y=>y.record)}function O(y){return!!e.getRecordMatcher(y)}function k(y,D){if(D=ne({},D||l.value),typeof y=="string"){const p=xo(n,y,D.path),g=e.resolve({path:p.path},D),E=i.createHref(p.fullPath);return ne(p,g,{params:d(g.params),hash:li(p.hash),redirectedFrom:void 0,href:E})}let A;if(y.path!=null)A=ne({},y,{path:xo(n,y.path,D.path).path});else{const p=ne({},y.params);for(const g in p)p[g]==null&&delete p[g];A=ne({},y,{params:h(p)}),D.params=h(D.params)}const L=e.resolve(A,D),ee=y.hash||"";L.params=u(d(L.params));const pe=RO(s,ne({},y,{hash:EO(ee),path:L.path})),f=i.createHref(pe);return ne({fullPath:pe,hash:ee,query:s===Qu?sN(y.query):y.query||{}},L,{redirectedFrom:void 0,href:f})}function P(y){return typeof y=="string"?xo(n,y,l.value.path):ne({},y)}function M(y,D){if(c!==y)return us(8,{from:D,to:y})}function x(y){return ae(y)}function z(y){return x(ne(P(y),{replace:!0}))}function ge(y){const D=y.matched[y.matched.length-1];if(D&&D.redirect){const{redirect:A}=D;let L=typeof A=="function"?A(y):A;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=P(L):{path:L},L.params={}),ne({query:y.query,hash:y.hash,params:L.path!=null?{}:y.params},L)}}function ae(y,D){const A=c=k(y),L=l.value,ee=y.state,pe=y.force,f=y.replace===!0,p=ge(A);if(p)return ae(ne(P(p),{state:typeof p=="object"?ne({},ee,p.state):ee,force:pe,replace:f}),D||A);const g=A;g.redirectedFrom=D;let E;return!pe&&AO(s,L,A)&&(E=us(16,{to:g,from:L}),ct(L,L,!0,!1)),(E?Promise.resolve(E):Ye(g,L)).catch(v=>Ct(v)?Ct(v,2)?v:Bt(v):J(v,g,L)).then(v=>{if(v){if(Ct(v,2))return ae(ne({replace:f},P(v.to),{state:typeof v.to=="object"?ne({},ee,v.to.state):ee,force:pe}),D||g)}else v=fn(g,L,!0,f,ee);return Ht(g,L,v),v})}function qe(y,D){const A=M(y,D);return A?Promise.reject(A):Promise.resolve()}function ze(y){const D=$n.values().next().value;return D&&typeof D.runWithContext=="function"?D.runWithContext(y):y()}function Ye(y,D){let A;const[L,ee,pe]=dN(y,D);A=Do(L.reverse(),"beforeRouteLeave",y,D);for(const p of L)p.leaveGuards.forEach(g=>{A.push(Kt(g,y,D))});const f=qe.bind(null,y,D);return A.push(f),Qe(A).then(()=>{A=[];for(const p of r.list())A.push(Kt(p,y,D));return A.push(f),Qe(A)}).then(()=>{A=Do(ee,"beforeRouteUpdate",y,D);for(const p of ee)p.updateGuards.forEach(g=>{A.push(Kt(g,y,D))});return A.push(f),Qe(A)}).then(()=>{A=[];for(const p of pe)if(p.beforeEnter)if(at(p.beforeEnter))for(const g of p.beforeEnter)A.push(Kt(g,y,D));else A.push(Kt(p.beforeEnter,y,D));return A.push(f),Qe(A)}).then(()=>(y.matched.forEach(p=>p.enterCallbacks={}),A=Do(pe,"beforeRouteEnter",y,D,ze),A.push(f),Qe(A))).then(()=>{A=[];for(const p of o.list())A.push(Kt(p,y,D));return A.push(f),Qe(A)}).catch(p=>Ct(p,8)?p:Promise.reject(p))}function Ht(y,D,A){a.list().forEach(L=>ze(()=>L(y,D,A)))}function fn(y,D,A,L,ee){const pe=M(y,D);if(pe)return pe;const f=D===jt,p=Bn?history.state:{};A&&(L||f?i.replace(y.fullPath,ne({scroll:f&&p&&p.scroll},ee)):i.push(y.fullPath,ee)),l.value=y,ct(y,D,A,f),Bt()}let lt;function Ts(){lt||(lt=i.listen((y,D,A)=>{if(!Di.listening)return;const L=k(y),ee=ge(L);if(ee){ae(ne(ee,{replace:!0}),L).catch(Gs);return}c=L;const pe=l.value;Bn&&LO(Bu(pe.fullPath,A.delta),to()),Ye(L,pe).catch(f=>Ct(f,12)?f:Ct(f,2)?(ae(f.to,L).then(p=>{Ct(p,20)&&!A.delta&&A.type===ci.pop&&i.go(-1,!1)}).catch(Gs),Promise.reject()):(A.delta&&i.go(-A.delta,!1),J(f,L,pe))).then(f=>{f=f||fn(L,pe,!1),f&&(A.delta&&!Ct(f,8)?i.go(-A.delta,!1):A.type===ci.pop&&Ct(f,20)&&i.go(-1,!1)),Ht(L,pe,f)}).catch(Gs)}))}let Mn=Ns(),ye=Ns(),se;function J(y,D,A){Bt(y);const L=ye.list();return L.length?L.forEach(ee=>ee(y,D,A)):console.error(y),Promise.reject(y)}function Et(){return se&&l.value!==jt?Promise.resolve():new Promise((y,D)=>{Mn.add([y,D])})}function Bt(y){return se||(se=!y,Ts(),Mn.list().forEach(([D,A])=>y?A(y):D()),Mn.reset()),y}function ct(y,D,A,L){const{scrollBehavior:ee}=t;if(!Bn||!ee)return Promise.resolve();const pe=!A&&$O(Bu(y.fullPath,0))||(L||!A)&&history.state&&history.state.scroll||null;return fd().then(()=>ee(y,D,pe)).then(f=>f&&MO(f)).catch(f=>J(f,y,D))}const Me=y=>i.go(y);let Ln;const $n=new Set,Di={currentRoute:l,listening:!0,addRoute:_,removeRoute:m,clearRoutes:e.clearRoutes,hasRoute:O,getRoutes:b,resolve:k,options:t,push:x,replace:z,go:Me,back:()=>Me(-1),forward:()=>Me(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:ye.add,isReady:Et,install(y){const D=this;y.component("RouterLink",oN),y.component("RouterView",uN),y.config.globalProperties.$router=D,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>Yn(l)}),Bn&&!Ln&&l.value===jt&&(Ln=!0,x(i.location).catch(ee=>{}));const A={};for(const ee in jt)Object.defineProperty(A,ee,{get:()=>l.value[ee],enumerable:!0});y.provide(El,D),y.provide(Sp,ad(A)),y.provide(ya,l);const L=y.unmount;$n.add(y),y.unmount=function(){$n.delete(y),$n.size<1&&(c=jt,lt&&lt(),lt=null,l.value=jt,Ln=!1,se=!1),L()}}};function Qe(y){return y.reduce((D,A)=>D.then(()=>ze(A)),Promise.resolve())}return Di}function dN(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>cs(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>cs(c,l))||i.push(l))}return[n,s,i]}var fN="firebase",pN="11.0.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nn(fN,pN,"app");var nh={};const sh="@firebase/database",ih="1.0.9";/**
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
 */let Rp="";function _N(t){Rp=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gN{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),we(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ri(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mN{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ut(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ap=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new gN(e)}}catch{}return new mN},En=Ap("localStorage"),vN=Ap("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns=new cl("@firebase/database"),yN=function(){let t=1;return function(){return t++}}(),Pp=function(t){const e=TR(t),n=new ER;n.update(e);const s=n.digest();return rl.encodeByteArray(s)},Ai=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Ai.apply(null,s):typeof s=="object"?e+=we(s):e+=s,e+=" "}return e};let qs=null,rh=!0;const bN=function(t,e){I(!e,"Can't turn on custom loggers persistently."),ns.logLevel=ie.VERBOSE,qs=ns.log.bind(ns)},Ae=function(...t){if(rh===!0&&(rh=!1,qs===null&&vN.get("logging_enabled")===!0&&bN()),qs){const e=Ai.apply(null,t);qs(e)}},Pi=function(t){return function(...e){Ae(t,...e)}},ba=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ai(...t);ns.error(e)},Lt=function(...t){const e=`FIREBASE FATAL ERROR: ${Ai(...t)}`;throw ns.error(e),new Error(e)},Ke=function(...t){const e="FIREBASE WARNING: "+Ai(...t);ns.warn(e)},EN=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ke("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Op=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},wN=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},hs="[MIN_NAME]",An="[MAX_NAME]",Cs=function(t,e){if(t===e)return 0;if(t===hs||e===An)return-1;if(e===hs||t===An)return 1;{const n=oh(t),s=oh(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},CN=function(t,e){return t===e?0:t<e?-1:1},ks=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+we(e))},wl=function(t){if(typeof t!="object"||t===null)return we(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=we(e[s]),n+=":",n+=wl(t[e[s]]);return n+="}",n},Np=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Fe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const kp=function(t){I(!Op(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},IN=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},TN=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function SN(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const RN=new RegExp("^-?(0*)\\d{1,10}$"),AN=-2147483648,PN=2147483647,oh=function(t){if(RN.test(t)){const e=Number(t);if(e>=AN&&e<=PN)return e}return null},Oi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ke("Exception was thrown by user callback.",n),e},Math.floor(0))}},ON=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},zs=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class NN{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Ke(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kN{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ae("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ke(e)}}class Xi{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Xi.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cl="5",xp="v",Dp="s",Mp="r",Lp="f",$p=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Fp="ls",Up="p",Ea="ac",Hp="websocket",Bp="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=En.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&En.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function xN(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function jp(t,e,n){I(typeof e=="string","typeof type must == string"),I(typeof n=="object","typeof params must == object");let s;if(e===Hp)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Bp)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);xN(t)&&(n.ns=t.namespace);const i=[];return Fe(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DN{constructor(){this.counters_={}}incrementCounter(e,n=1){Ut(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return sR(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mo={},Lo={};function Il(t){const e=t.toString();return Mo[e]||(Mo[e]=new DN),Mo[e]}function MN(t,e){const n=t.toString();return Lo[n]||(Lo[n]=e()),Lo[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LN{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Oi(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ah="start",$N="close",FN="pLPCommand",UN="pRTLPCB",Vp="id",Gp="pw",Kp="ser",HN="cb",BN="seg",WN="ts",jN="d",VN="dframe",qp=1870,zp=30,GN=qp-zp,KN=25e3,qN=3e4;class jn{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Pi(e),this.stats_=Il(n),this.urlFn=l=>(this.appCheckToken&&(l[Ea]=this.appCheckToken),jp(n,Bp,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new LN(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(qN)),wN(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Tl((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===ah)this.id=a,this.password=l;else if(o===$N)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[ah]="t",s[Kp]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[HN]=this.scriptTagHolder.uniqueCallbackIdentifier),s[xp]=Cl,this.transportSessionId&&(s[Dp]=this.transportSessionId),this.lastSessionId&&(s[Fp]=this.lastSessionId),this.applicationId&&(s[Up]=this.applicationId),this.appCheckToken&&(s[Ea]=this.appCheckToken),typeof location<"u"&&location.hostname&&$p.test(location.hostname)&&(s[Mp]=Lp);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){jn.forceAllow_=!0}static forceDisallow(){jn.forceDisallow_=!0}static isAvailable(){return jn.forceAllow_?!0:!jn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!IN()&&!TN()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=we(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=vf(n),i=Np(s,GN);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[VN]="t",s[Vp]=e,s[Gp]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=we(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Tl{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=yN(),window[FN+this.uniqueCallbackIdentifier]=e,window[UN+this.uniqueCallbackIdentifier]=n,this.myIFrame=Tl.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ae("frame writing exception"),a.stack&&Ae(a.stack),Ae(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ae("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Vp]=this.myID,e[Gp]=this.myPW,e[Kp]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+zp+s.length<=qp;){const o=this.pendingSegs.shift();s=s+"&"+BN+i+"="+o.seg+"&"+WN+i+"="+o.ts+"&"+jN+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(KN)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Ae("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zN=16384,YN=45e3;let yr=null;typeof MozWebSocket<"u"?yr=MozWebSocket:typeof WebSocket<"u"&&(yr=WebSocket);class nt{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Pi(this.connId),this.stats_=Il(n),this.connURL=nt.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[xp]=Cl,typeof location<"u"&&location.hostname&&$p.test(location.hostname)&&(o[Mp]=Lp),n&&(o[Dp]=n),s&&(o[Fp]=s),i&&(o[Ea]=i),r&&(o[Up]=r),jp(e,Hp,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,En.set("previous_websocket_failure",!0);try{let s;If(),this.mySock=new yr(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){nt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&yr!==null&&!nt.forceDisallow_}static previouslyFailed(){return En.isInMemoryStorage||En.get("previous_websocket_failure")===!0}markConnectionHealthy(){En.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=ri(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(I(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=we(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Np(n,zN);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(YN))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}nt.responsesRequiredToBeHealthy=2;nt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[jn,nt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=nt&&nt.isAvailable();let s=n&&!nt.previouslyFailed();if(e.webSocketOnly&&(n||Ke("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[nt];else{const i=this.transports_=[];for(const r of ui.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);ui.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ui.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QN=6e4,JN=5e3,XN=10*1024,ZN=100*1024,$o="t",lh="d",ek="s",ch="r",tk="e",uh="o",hh="a",dh="n",fh="p",nk="h";class sk{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Pi("c:"+this.id+":"),this.transportManager_=new ui(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=zs(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ZN?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>XN?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if($o in e){const n=e[$o];n===hh?this.upgradeIfSecondaryHealthy_():n===ch?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===uh&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ks("t",e),s=ks("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:fh,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:hh,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:dh,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ks("t",e),s=ks("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ks($o,e);if(lh in e){const s=e[lh];if(n===nk){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===dh){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===ek?this.onConnectionShutdown_(s):n===ch?this.onReset_(s):n===tk?ba("Server Error: "+s):n===uh?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ba("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Cl!==s&&Ke("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),zs(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(QN))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):zs(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(JN))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:fh,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(En.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class br extends Qp{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ll()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new br}getInitialEvent(e){return I(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph=32,_h=768;class oe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Q(){return new oe("")}function K(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function rn(t){return t.pieces_.length-t.pieceNum_}function ue(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new oe(t.pieces_,e)}function Jp(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function ik(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Xp(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Zp(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new oe(e,0)}function ve(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof oe)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new oe(n,0)}function q(t){return t.pieceNum_>=t.pieces_.length}function Le(t,e){const n=K(t),s=K(e);if(n===null)return e;if(n===s)return Le(ue(t),ue(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Sl(t,e){if(rn(t)!==rn(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function st(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(rn(t)>rn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class rk{constructor(e,n){this.errorPrefix_=n,this.parts_=Xp(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Jr(this.parts_[s]);e_(this)}}function ok(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Jr(e),e_(t)}function ak(t){const e=t.parts_.pop();t.byteLength_-=Jr(e),t.parts_.length>0&&(t.byteLength_-=1)}function e_(t){if(t.byteLength_>_h)throw new Error(t.errorPrefix_+"has a key path longer than "+_h+" bytes ("+t.byteLength_+").");if(t.parts_.length>ph)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ph+") or object contains a cycle "+yn(t))}function yn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl extends Qp{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Rl}getInitialEvent(e){return I(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs=1e3,lk=60*5*1e3,gh=30*1e3,ck=1.3,uk=3e4,hk="server_kill",mh=3;class kt extends Yp{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=kt.nextPersistentConnectionId_++,this.log_=Pi("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=xs,this.maxReconnectDelay_=lk,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!If())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Rl.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&br.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(we(r)),I(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new al,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),I(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;kt.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ut(e,"w")){const s=os(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Ke(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||bR(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=gh)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=yR(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+we(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ba("Unrecognized action received from server: "+we(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){I(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=xs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=xs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>uk&&(this.reconnectDelay_=xs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*ck)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+kt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){I(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ae("getToken() completed but was canceled"):(Ae("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new sk(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{Ke(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(hk)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Ke(h),l())}}}interrupt(e){Ae("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ae("Resuming connection for reason: "+e),delete this.interruptReasons_[e],la(this.interruptReasons_)&&(this.reconnectDelay_=xs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>wl(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new oe(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Ae("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=mh&&(this.reconnectDelay_=gh,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ae("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=mh&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Rp.replace(/\./g,"-")]=1,ll()?e["framework.cordova"]=1:Cf()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=br.getInstance().currentlyOnline();return la(this.interruptReasons_)&&e}}kt.nextPersistentConnectionId_=0;kt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class no{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new G(hs,e),i=new G(hs,n);return this.compare(s,i)!==0}minPost(){return G.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bi;class t_ extends no{static get __EMPTY_NODE(){return Bi}static set __EMPTY_NODE(e){Bi=e}compare(e,n){return Cs(e.name,n.name)}isDefinedOn(e){throw bs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return G.MIN}maxPost(){return new G(An,Bi)}makePost(e,n){return I(typeof e=="string","KeyIndex indexValue must always be a string."),new G(e,Bi)}toString(){return".key"}}const ss=new t_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ee{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Ee.RED,this.left=i??$e.EMPTY_NODE,this.right=r??$e.EMPTY_NODE}copy(e,n,s,i,r){return new Ee(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return $e.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return $e.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ee.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ee.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ee.RED=!0;Ee.BLACK=!1;class dk{copy(e,n,s,i,r){return this}insert(e,n,s){return new Ee(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class $e{constructor(e,n=$e.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new $e(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ee.BLACK,null,null))}remove(e){return new $e(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ee.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Wi(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Wi(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Wi(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Wi(this.root_,null,this.comparator_,!0,e)}}$e.EMPTY_NODE=new dk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fk(t,e){return Cs(t.name,e.name)}function Al(t,e){return Cs(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wa;function pk(t){wa=t}const n_=function(t){return typeof t=="number"?"number:"+kp(t):"string:"+t},s_=function(t){if(t.isLeafNode()){const e=t.val();I(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ut(e,".sv"),"Priority must be a string or number.")}else I(t===wa||t.isEmpty(),"priority of unexpected type.");I(t===wa||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vh;class be{constructor(e,n=be.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,I(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),s_(this.priorityNode_)}static set __childrenNodeConstructor(e){vh=e}static get __childrenNodeConstructor(){return vh}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new be(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:be.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return q(e)?this:K(e)===".priority"?this.priorityNode_:be.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:be.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=K(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(I(s!==".priority"||rn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,be.__childrenNodeConstructor.EMPTY_NODE.updateChild(ue(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+n_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=kp(this.value_):e+=this.value_,this.lazyHash_=Pp(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===be.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof be.__childrenNodeConstructor?-1:(I(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=be.VALUE_TYPE_ORDER.indexOf(n),r=be.VALUE_TYPE_ORDER.indexOf(s);return I(i>=0,"Unknown leaf type: "+n),I(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}be.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let i_,r_;function _k(t){i_=t}function gk(t){r_=t}class mk extends no{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Cs(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return G.MIN}maxPost(){return new G(An,new be("[PRIORITY-POST]",r_))}makePost(e,n){const s=i_(e);return new G(n,new be("[PRIORITY-POST]",s))}toString(){return".priority"}}const _e=new mk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vk=Math.log(2);class yk{constructor(e){const n=r=>parseInt(Math.log(r)/vk,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Er=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new Ee(d,h.node,Ee.BLACK,null,null);{const _=parseInt(u/2,10)+l,m=i(l,_),b=i(_+1,c);return h=t[_],d=n?n(h):h,new Ee(d,h.node,Ee.BLACK,m,b)}},r=function(l){let c=null,u=null,h=t.length;const d=function(m,b){const O=h-m,k=h;h-=m;const P=i(O+1,k),M=t[O],x=n?n(M):M;_(new Ee(x,M.node,b,null,P))},_=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<l.count;++m){const b=l.nextBitIsOne(),O=Math.pow(2,l.count-(m+1));b?d(O,Ee.BLACK):(d(O,Ee.BLACK),d(O,Ee.RED))}return u},o=new yk(t.length),a=r(o);return new $e(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fo;const Un={};class Ot{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return I(Un&&_e,"ChildrenNode.ts has not been loaded"),Fo=Fo||new Ot({".priority":Un},{".priority":_e}),Fo}get(e){const n=os(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof $e?n:null}hasIndex(e){return Ut(this.indexSet_,e.toString())}addIndex(e,n){I(e!==ss,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(G.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Er(s,e.getCompare()):a=Un;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Ot(u,c)}addToIndexes(e,n){const s=hr(this.indexes_,(i,r)=>{const o=os(this.indexSet_,r);if(I(o,"Missing index implementation for "+r),i===Un)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(G.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Er(a,o.getCompare())}else return Un;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new G(e.name,a))),l.insert(e,e.node)}});return new Ot(s,this.indexSet_)}removeFromIndexes(e,n){const s=hr(this.indexes_,i=>{if(i===Un)return i;{const r=n.get(e.name);return r?i.remove(new G(e.name,r)):i}});return new Ot(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ds;class H{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&s_(this.priorityNode_),this.children_.isEmpty()&&I(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ds||(Ds=new H(new $e(Al),null,Ot.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ds}updatePriority(e){return this.children_.isEmpty()?this:new H(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ds:n}}getChild(e){const n=K(e);return n===null?this:this.getImmediateChild(n).getChild(ue(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(I(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new G(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Ds:this.priorityNode_;return new H(i,o,r)}}updateChild(e,n){const s=K(e);if(s===null)return n;{I(K(e)!==".priority"||rn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ue(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(_e,(o,a)=>{n[o]=a.val(e),s++,r&&H.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+n_(this.getPriority().val())+":"),this.forEachChild(_e,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Pp(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new G(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new G(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new G(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,G.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,G.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ni?-1:0}withIndex(e){if(e===ss||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new H(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ss||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(_e),i=n.getIterator(_e);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ss?null:this.indexMap_.get(e.toString())}}H.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class bk extends H{constructor(){super(new $e(Al),H.EMPTY_NODE,Ot.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return H.EMPTY_NODE}isEmpty(){return!1}}const Ni=new bk;Object.defineProperties(G,{MIN:{value:new G(hs,H.EMPTY_NODE)},MAX:{value:new G(An,Ni)}});t_.__EMPTY_NODE=H.EMPTY_NODE;be.__childrenNodeConstructor=H;pk(Ni);gk(Ni);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ek=!0;function Pe(t,e=null){if(t===null)return H.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),I(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new be(n,Pe(e))}if(!(t instanceof Array)&&Ek){const n=[];let s=!1;if(Fe(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Pe(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new G(o,l)))}}),n.length===0)return H.EMPTY_NODE;const r=Er(n,fk,o=>o.name,Al);if(s){const o=Er(n,_e.getCompare());return new H(r,Pe(e),new Ot({".priority":o},{".priority":_e}))}else return new H(r,Pe(e),Ot.Default)}else{let n=H.EMPTY_NODE;return Fe(t,(s,i)=>{if(Ut(t,s)&&s.substring(0,1)!=="."){const r=Pe(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Pe(e))}}_k(Pe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk extends no{constructor(e){super(),this.indexPath_=e,I(!q(e)&&K(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Cs(e.name,n.name):r}makePost(e,n){const s=Pe(e),i=H.EMPTY_NODE.updateChild(this.indexPath_,s);return new G(n,i)}maxPost(){const e=H.EMPTY_NODE.updateChild(this.indexPath_,Ni);return new G(An,e)}toString(){return Xp(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ck extends no{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Cs(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return G.MIN}maxPost(){return G.MAX}makePost(e,n){const s=Pe(e);return new G(n,s)}toString(){return".value"}}const Ik=new Ck;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o_(t){return{type:"value",snapshotNode:t}}function ds(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function hi(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function di(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Tk(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){I(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(hi(n,a)):I(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(ds(n,s)):o.trackChildChange(di(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(_e,(i,r)=>{n.hasChild(i)||s.trackChildChange(hi(i,r))}),n.isLeafNode()||n.forEachChild(_e,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(di(i,r,o))}else s.trackChildChange(ds(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?H.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e){this.indexedFilter_=new Pl(e.getIndex()),this.index_=e.getIndex(),this.startPost_=fi.getStartPost_(e),this.endPost_=fi.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new G(n,s))||(s=H.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=H.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(H.EMPTY_NODE);const r=this;return n.forEachChild(_e,(o,a)=>{r.matches(new G(o,a))||(i=i.updateImmediateChild(o,H.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sk{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new fi(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new G(n,s))||(s=H.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=H.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=H.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(H.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,H.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,_)=>h(_,d)}else o=this.index_.getCompare();const a=e;I(a.numChildren()===this.limit_,"");const l=new G(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const _=d==null?1:o(d,l);if(u&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(di(n,s,h)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(hi(n,h));const b=a.updateImmediateChild(n,H.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(ds(d.name,d.node)),b.updateImmediateChild(d.name,d.node)):b}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(hi(c.name,c.node)),r.trackChildChange(ds(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,H.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=_e}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return I(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return I(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:hs}hasEnd(){return this.endSet_}getIndexEndValue(){return I(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return I(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:An}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return I(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===_e}copy(){const e=new Ol;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Rk(t){return t.loadsAllData()?new Pl(t.getIndex()):t.hasLimit()?new Sk(t):new fi(t)}function yh(t){const e={};if(t.isDefault())return e;let n;if(t.index_===_e?n="$priority":t.index_===Ik?n="$value":t.index_===ss?n="$key":(I(t.index_ instanceof wk,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=we(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=we(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+we(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=we(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+we(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function bh(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==_e&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr extends Yp{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Pi("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(I(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=wr.getListenId_(e,s),a={};this.listens_[o]=a;const l=yh(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),os(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=wr.getListenId_(e,n);delete this.listens_[s]}get(e){const n=yh(e._queryParams),s=e._path.toString(),i=new al;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Es(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ri(a.responseText)}catch{Ke("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&Ke("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ak{constructor(){this.rootNode_=H.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cr(){return{value:null,children:new Map}}function a_(t,e,n){if(q(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=K(e);t.children.has(s)||t.children.set(s,Cr());const i=t.children.get(s);e=ue(e),a_(i,e,n)}}function Ca(t,e,n){t.value!==null?n(e,t.value):Pk(t,(s,i)=>{const r=new oe(e.toString()+"/"+s);Ca(i,r,n)})}function Pk(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ok{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Fe(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eh=10*1e3,Nk=30*1e3,kk=5*60*1e3;class xk{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Ok(e);const s=Eh+(Nk-Eh)*Math.random();zs(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Fe(e,(i,r)=>{r>0&&Ut(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),zs(this.reportStats_.bind(this),Math.floor(Math.random()*2*kk))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var it;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(it||(it={}));function l_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Nl(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function kl(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=it.ACK_USER_WRITE,this.source=l_()}operationForChild(e){if(q(this.path)){if(this.affectedTree.value!=null)return I(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new oe(e));return new Ir(Q(),n,this.revert)}}else return I(K(this.path)===e,"operationForChild called for unrelated child."),new Ir(ue(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,n){this.source=e,this.path=n,this.type=it.LISTEN_COMPLETE}operationForChild(e){return q(this.path)?new pi(this.source,Q()):new pi(this.source,ue(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=it.OVERWRITE}operationForChild(e){return q(this.path)?new Pn(this.source,Q(),this.snap.getImmediateChild(e)):new Pn(this.source,ue(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=it.MERGE}operationForChild(e){if(q(this.path)){const n=this.children.subtree(new oe(e));return n.isEmpty()?null:n.value?new Pn(this.source,Q(),n.value):new _i(this.source,Q(),n)}else return I(K(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new _i(this.source,ue(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(q(e))return this.isFullyInitialized()&&!this.filtered_;const n=K(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dk{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Mk(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Tk(o.childName,o.snapshotNode))}),Ms(t,i,"child_removed",e,s,n),Ms(t,i,"child_added",e,s,n),Ms(t,i,"child_moved",r,s,n),Ms(t,i,"child_changed",e,s,n),Ms(t,i,"value",e,s,n),i}function Ms(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>$k(t,a,l)),o.forEach(a=>{const l=Lk(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function Lk(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function $k(t,e,n){if(e.childName==null||n.childName==null)throw bs("Should only compare child_ events.");const s=new G(e.childName,e.snapshotNode),i=new G(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(t,e){return{eventCache:t,serverCache:e}}function Ys(t,e,n,s){return so(new On(e,n,s),t.serverCache)}function c_(t,e,n,s){return so(t.eventCache,new On(e,n,s))}function Ia(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Nn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uo;const Fk=()=>(Uo||(Uo=new $e(CN)),Uo);class fe{constructor(e,n=Fk()){this.value=e,this.children=n}static fromObject(e){let n=new fe(null);return Fe(e,(s,i)=>{n=n.set(new oe(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Q(),value:this.value};if(q(e))return null;{const s=K(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ue(e),n);return r!=null?{path:ve(new oe(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(q(e))return this;{const n=K(e),s=this.children.get(n);return s!==null?s.subtree(ue(e)):new fe(null)}}set(e,n){if(q(e))return new fe(n,this.children);{const s=K(e),r=(this.children.get(s)||new fe(null)).set(ue(e),n),o=this.children.insert(s,r);return new fe(this.value,o)}}remove(e){if(q(e))return this.children.isEmpty()?new fe(null):new fe(null,this.children);{const n=K(e),s=this.children.get(n);if(s){const i=s.remove(ue(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new fe(null):new fe(this.value,r)}else return this}}get(e){if(q(e))return this.value;{const n=K(e),s=this.children.get(n);return s?s.get(ue(e)):null}}setTree(e,n){if(q(e))return n;{const s=K(e),r=(this.children.get(s)||new fe(null)).setTree(ue(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new fe(this.value,o)}}fold(e){return this.fold_(Q(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(ve(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Q(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(q(e))return null;{const r=K(e),o=this.children.get(r);return o?o.findOnPath_(ue(e),ve(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Q(),n)}foreachOnPath_(e,n,s){if(q(e))return this;{this.value&&s(n,this.value);const i=K(e),r=this.children.get(i);return r?r.foreachOnPath_(ue(e),ve(n,i),s):new fe(null)}}foreach(e){this.foreach_(Q(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(ve(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.writeTree_=e}static empty(){return new ot(new fe(null))}}function Qs(t,e,n){if(q(e))return new ot(new fe(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Le(i,e);return r=r.updateChild(o,n),new ot(t.writeTree_.set(i,r))}else{const i=new fe(n),r=t.writeTree_.setTree(e,i);return new ot(r)}}}function wh(t,e,n){let s=t;return Fe(n,(i,r)=>{s=Qs(s,ve(e,i),r)}),s}function Ch(t,e){if(q(e))return ot.empty();{const n=t.writeTree_.setTree(e,new fe(null));return new ot(n)}}function Ta(t,e){return xn(t,e)!=null}function xn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Le(n.path,e)):null}function Ih(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(_e,(s,i)=>{e.push(new G(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new G(s,i.value))}),e}function sn(t,e){if(q(e))return t;{const n=xn(t,e);return n!=null?new ot(new fe(n)):new ot(t.writeTree_.subtree(e))}}function Sa(t){return t.writeTree_.isEmpty()}function fs(t,e){return u_(Q(),t.writeTree_,e)}function u_(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(I(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=u_(ve(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(ve(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xl(t,e){return p_(e,t)}function Uk(t,e,n,s,i){I(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Qs(t.visibleWrites,e,n)),t.lastWriteId=s}function Hk(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function Bk(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);I(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Wk(a,s.path)?i=!1:st(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return jk(t),!0;if(s.snap)t.visibleWrites=Ch(t.visibleWrites,s.path);else{const a=s.children;Fe(a,l=>{t.visibleWrites=Ch(t.visibleWrites,ve(s.path,l))})}return!0}else return!1}function Wk(t,e){if(t.snap)return st(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&st(ve(t.path,n),e))return!0;return!1}function jk(t){t.visibleWrites=h_(t.allWrites,Vk,Q()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Vk(t){return t.visible}function h_(t,e,n){let s=ot.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)st(n,o)?(a=Le(n,o),s=Qs(s,a,r.snap)):st(o,n)&&(a=Le(o,n),s=Qs(s,Q(),r.snap.getChild(a)));else if(r.children){if(st(n,o))a=Le(n,o),s=wh(s,a,r.children);else if(st(o,n))if(a=Le(o,n),q(a))s=wh(s,Q(),r.children);else{const l=os(r.children,K(a));if(l){const c=l.getChild(ue(a));s=Qs(s,Q(),c)}}}else throw bs("WriteRecord should have .snap or .children")}}return s}function d_(t,e,n,s,i){if(!s&&!i){const r=xn(t.visibleWrites,e);if(r!=null)return r;{const o=sn(t.visibleWrites,e);if(Sa(o))return n;if(n==null&&!Ta(o,Q()))return null;{const a=n||H.EMPTY_NODE;return fs(o,a)}}}else{const r=sn(t.visibleWrites,e);if(!i&&Sa(r))return n;if(!i&&n==null&&!Ta(r,Q()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(st(c.path,e)||st(e,c.path))},a=h_(t.allWrites,o,e),l=n||H.EMPTY_NODE;return fs(a,l)}}}function Gk(t,e,n){let s=H.EMPTY_NODE;const i=xn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(_e,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=sn(t.visibleWrites,e);return n.forEachChild(_e,(o,a)=>{const l=fs(sn(r,new oe(o)),a);s=s.updateImmediateChild(o,l)}),Ih(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=sn(t.visibleWrites,e);return Ih(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Kk(t,e,n,s,i){I(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=ve(e,n);if(Ta(t.visibleWrites,r))return null;{const o=sn(t.visibleWrites,r);return Sa(o)?i.getChild(n):fs(o,i.getChild(n))}}function qk(t,e,n,s){const i=ve(e,n),r=xn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=sn(t.visibleWrites,i);return fs(o,s.getNode().getImmediateChild(n))}else return null}function zk(t,e){return xn(t.visibleWrites,e)}function Yk(t,e,n,s,i,r,o){let a;const l=sn(t.visibleWrites,e),c=xn(l,Q());if(c!=null)a=c;else if(n!=null)a=fs(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let _=d.getNext();for(;_&&u.length<i;)h(_,s)!==0&&u.push(_),_=d.getNext();return u}else return[]}function Qk(){return{visibleWrites:ot.empty(),allWrites:[],lastWriteId:-1}}function Tr(t,e,n,s){return d_(t.writeTree,t.treePath,e,n,s)}function Dl(t,e){return Gk(t.writeTree,t.treePath,e)}function Th(t,e,n,s){return Kk(t.writeTree,t.treePath,e,n,s)}function Sr(t,e){return zk(t.writeTree,ve(t.treePath,e))}function Jk(t,e,n,s,i,r){return Yk(t.writeTree,t.treePath,e,n,s,i,r)}function Ml(t,e,n){return qk(t.writeTree,t.treePath,e,n)}function f_(t,e){return p_(ve(t.treePath,e),t.writeTree)}function p_(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xk{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;I(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),I(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,di(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,hi(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,ds(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,di(s,e.snapshotNode,i.oldSnap));else throw bs("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zk{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const __=new Zk;class Ll{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new On(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ml(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Nn(this.viewCache_),r=Jk(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ex(t){return{filter:t}}function tx(t,e){I(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),I(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function nx(t,e,n,s,i){const r=new Xk;let o,a;if(n.type===it.OVERWRITE){const c=n;c.source.fromUser?o=Ra(t,e,c.path,c.snap,s,i,r):(I(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!q(c.path),o=Rr(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===it.MERGE){const c=n;c.source.fromUser?o=ix(t,e,c.path,c.children,s,i,r):(I(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Aa(t,e,c.path,c.children,s,i,a,r))}else if(n.type===it.ACK_USER_WRITE){const c=n;c.revert?o=ax(t,e,c.path,s,i,r):o=rx(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===it.LISTEN_COMPLETE)o=ox(t,e,n.path,s,r);else throw bs("Unknown operation type: "+n.type);const l=r.getChanges();return sx(e,o,l),{viewCache:o,changes:l}}function sx(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Ia(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(o_(Ia(e)))}}function g_(t,e,n,s,i,r){const o=e.eventCache;if(Sr(s,n)!=null)return e;{let a,l;if(q(n))if(I(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Nn(e),u=c instanceof H?c:H.EMPTY_NODE,h=Dl(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Tr(s,Nn(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=K(n);if(c===".priority"){I(rn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=Th(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=ue(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=Th(s,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=Ml(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return Ys(e,a,o.isFullyInitialized()||q(n),t.filter.filtersNodes())}}function Rr(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(q(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),_,null)}else{const _=K(n);if(!l.isCompleteForPath(n)&&rn(n)>1)return e;const m=ue(n),O=l.getNode().getImmediateChild(_).updateChild(m,s);_===".priority"?c=u.updatePriority(l.getNode(),O):c=u.updateChild(l.getNode(),_,O,m,__,null)}const h=c_(e,c,l.isFullyInitialized()||q(n),u.filtersNodes()),d=new Ll(i,h,r);return g_(t,h,n,i,d,a)}function Ra(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new Ll(i,e,r);if(q(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Ys(e,c,!0,t.filter.filtersNodes());else{const h=K(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=Ys(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=ue(n),_=a.getNode().getImmediateChild(h);let m;if(q(d))m=s;else{const b=u.getCompleteChild(h);b!=null?Jp(d)===".priority"&&b.getChild(Zp(d)).isEmpty()?m=b:m=b.updateChild(d,s):m=H.EMPTY_NODE}if(_.equals(m))l=e;else{const b=t.filter.updateChild(a.getNode(),h,m,d,u,o);l=Ys(e,b,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Sh(t,e){return t.eventCache.isCompleteForChild(e)}function ix(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=ve(n,l);Sh(e,K(u))&&(a=Ra(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=ve(n,l);Sh(e,K(u))||(a=Ra(t,a,u,c,i,r,o))}),a}function Rh(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Aa(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;q(n)?c=s:c=new fe(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),m=Rh(t,_,d);l=Rr(t,l,new oe(h),m,i,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const _=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!_){const m=e.serverCache.getNode().getImmediateChild(h),b=Rh(t,m,d);l=Rr(t,l,new oe(h),b,i,r,o,a)}}),l}function rx(t,e,n,s,i,r,o){if(Sr(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(q(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Rr(t,e,n,l.getNode().getChild(n),i,r,a,o);if(q(n)){let c=new fe(null);return l.getNode().forEachChild(ss,(u,h)=>{c=c.set(new oe(u),h)}),Aa(t,e,n,c,i,r,a,o)}else return e}else{let c=new fe(null);return s.foreach((u,h)=>{const d=ve(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),Aa(t,e,n,c,i,r,a,o)}}function ox(t,e,n,s,i){const r=e.serverCache,o=c_(e,r.getNode(),r.isFullyInitialized()||q(n),r.isFiltered());return g_(t,o,n,s,__,i)}function ax(t,e,n,s,i,r){let o;if(Sr(s,n)!=null)return e;{const a=new Ll(s,e,i),l=e.eventCache.getNode();let c;if(q(n)||K(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Tr(s,Nn(e));else{const h=e.serverCache.getNode();I(h instanceof H,"serverChildren would be complete if leaf node"),u=Dl(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=K(n);let h=Ml(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,ue(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,H.EMPTY_NODE,ue(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Tr(s,Nn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Sr(s,Q())!=null,Ys(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lx{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Pl(s.getIndex()),r=Rk(s);this.processor_=ex(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(H.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(H.EMPTY_NODE,a.getNode(),null),u=new On(l,o.isFullyInitialized(),i.filtersNodes()),h=new On(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=so(h,u),this.eventGenerator_=new Dk(this.query_)}get query(){return this.query_}}function cx(t){return t.viewCache_.serverCache.getNode()}function ux(t,e){const n=Nn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!q(e)&&!n.getImmediateChild(K(e)).isEmpty())?n.getChild(e):null}function Ah(t){return t.eventRegistrations_.length===0}function hx(t,e){t.eventRegistrations_.push(e)}function Ph(t,e,n){const s=[];if(n){I(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Oh(t,e,n,s){e.type===it.MERGE&&e.source.queryId!==null&&(I(Nn(t.viewCache_),"We should always have a full cache before handling merges"),I(Ia(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=nx(t.processor_,i,e,n,s);return tx(t.processor_,r.viewCache),I(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,m_(t,r.changes,r.viewCache.eventCache.getNode(),null)}function dx(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(_e,(r,o)=>{s.push(ds(r,o))}),n.isFullyInitialized()&&s.push(o_(n.getNode())),m_(t,s,n.getNode(),e)}function m_(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Mk(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ar;class fx{constructor(){this.views=new Map}}function px(t){I(!Ar,"__referenceConstructor has already been defined"),Ar=t}function _x(){return I(Ar,"Reference.ts has not been loaded"),Ar}function gx(t){return t.views.size===0}function $l(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return I(r!=null,"SyncTree gave us an op for an invalid query."),Oh(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Oh(o,e,n,s));return r}}function mx(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=Tr(n,i?s:null),l=!1;a?l=!0:s instanceof H?(a=Dl(n,s),l=!1):(a=H.EMPTY_NODE,l=!1);const c=so(new On(a,l,!1),new On(s,i,!1));return new lx(e,c)}return o}function vx(t,e,n,s,i,r){const o=mx(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),hx(o,n),dx(o,n)}function yx(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=on(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(Ph(c,n,s)),Ah(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(Ph(l,n,s)),Ah(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!on(t)&&r.push(new(_x())(e._repo,e._path)),{removed:r,events:o}}function v_(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function is(t,e){let n=null;for(const s of t.views.values())n=n||ux(s,e);return n}function y_(t,e){if(e._queryParams.loadsAllData())return io(t);{const s=e._queryIdentifier;return t.views.get(s)}}function b_(t,e){return y_(t,e)!=null}function on(t){return io(t)!=null}function io(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pr;function bx(t){I(!Pr,"__referenceConstructor has already been defined"),Pr=t}function Ex(){return I(Pr,"Reference.ts has not been loaded"),Pr}let wx=1;class Nh{constructor(e){this.listenProvider_=e,this.syncPointTree_=new fe(null),this.pendingWriteTree_=Qk(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Cx(t,e,n,s,i){return Uk(t.pendingWriteTree_,e,n,s,i),i?ki(t,new Pn(l_(),e,n)):[]}function Vn(t,e,n=!1){const s=Hk(t.pendingWriteTree_,e);if(Bk(t.pendingWriteTree_,e)){let r=new fe(null);return s.snap!=null?r=r.set(Q(),!0):Fe(s.children,o=>{r=r.set(new oe(o),!0)}),ki(t,new Ir(s.path,r,n))}else return[]}function ro(t,e,n){return ki(t,new Pn(Nl(),e,n))}function Ix(t,e,n){const s=fe.fromObject(n);return ki(t,new _i(Nl(),e,s))}function Tx(t,e){return ki(t,new pi(Nl(),e))}function Sx(t,e,n){const s=Fl(t,n);if(s){const i=Ul(s),r=i.path,o=i.queryId,a=Le(r,e),l=new pi(kl(o),a);return Hl(t,r,l)}else return[]}function Pa(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||b_(o,e))){const l=yx(o,e,n,s);gx(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(d,_)=>on(_));if(u&&!h){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const _=Px(d);for(let m=0;m<_.length;++m){const b=_[m],O=b.query,k=I_(t,b);t.listenProvider_.startListening(Js(O),Or(t,O),k.hashFn,k.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(Js(e),null):c.forEach(d=>{const _=t.queryToTagMap.get(oo(d));t.listenProvider_.stopListening(Js(d),_)}))}Ox(t,c)}return a}function Rx(t,e,n,s){const i=Fl(t,s);if(i!=null){const r=Ul(i),o=r.path,a=r.queryId,l=Le(o,e),c=new Pn(kl(a),l,n);return Hl(t,o,c)}else return[]}function Ax(t,e,n,s){const i=Fl(t,s);if(i){const r=Ul(i),o=r.path,a=r.queryId,l=Le(o,e),c=fe.fromObject(n),u=new _i(kl(a),l,c);return Hl(t,o,u)}else return[]}function kh(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,_)=>{const m=Le(d,i);r=r||is(_,m),o=o||on(_)});let a=t.syncPointTree_.get(i);a?(o=o||on(a),r=r||is(a,Q())):(a=new fx,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=H.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,m)=>{const b=is(m,Q());b&&(r=r.updateImmediateChild(_,b))}));const c=b_(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=oo(e);I(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const _=Nx();t.queryToTagMap.set(d,_),t.tagToQueryMap.set(_,d)}const u=xl(t.pendingWriteTree_,i);let h=vx(a,e,n,u,r,l);if(!c&&!o&&!s){const d=y_(a,e);h=h.concat(kx(t,e,d))}return h}function E_(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Le(o,e),c=is(a,l);if(c)return c});return d_(i,e,r,n,!0)}function ki(t,e){return w_(e,t.syncPointTree_,null,xl(t.pendingWriteTree_,Q()))}function w_(t,e,n,s){if(q(t.path))return C_(t,e,n,s);{const i=e.get(Q());n==null&&i!=null&&(n=is(i,Q()));let r=[];const o=K(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=f_(s,o);r=r.concat(w_(a,l,c,u))}return i&&(r=r.concat($l(i,t,s,n))),r}}function C_(t,e,n,s){const i=e.get(Q());n==null&&i!=null&&(n=is(i,Q()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=f_(s,o),u=t.operationForChild(o);u&&(r=r.concat(C_(u,a,l,c)))}),i&&(r=r.concat($l(i,t,s,n))),r}function I_(t,e){const n=e.query,s=Or(t,n);return{hashFn:()=>(cx(e)||H.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Sx(t,n._path,s):Tx(t,n._path);{const r=SN(i,n);return Pa(t,n,null,r)}}}}function Or(t,e){const n=oo(e);return t.queryToTagMap.get(n)}function oo(t){return t._path.toString()+"$"+t._queryIdentifier}function Fl(t,e){return t.tagToQueryMap.get(e)}function Ul(t){const e=t.indexOf("$");return I(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new oe(t.substr(0,e))}}function Hl(t,e,n){const s=t.syncPointTree_.get(e);I(s,"Missing sync point for query tag that we're tracking");const i=xl(t.pendingWriteTree_,e);return $l(s,n,i,null)}function Px(t){return t.fold((e,n,s)=>{if(n&&on(n))return[io(n)];{let i=[];return n&&(i=v_(n)),Fe(s,(r,o)=>{i=i.concat(o)}),i}})}function Js(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Ex())(t._repo,t._path):t}function Ox(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=oo(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function Nx(){return wx++}function kx(t,e,n){const s=e._path,i=Or(t,e),r=I_(t,n),o=t.listenProvider_.startListening(Js(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)I(!on(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!q(c)&&u&&on(u))return[io(u).query];{let d=[];return u&&(d=d.concat(v_(u).map(_=>_.query))),Fe(h,(_,m)=>{d=d.concat(m)}),d}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(Js(u),Or(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Bl(n)}node(){return this.node_}}class Wl{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ve(this.path_,e);return new Wl(this.syncTree_,n)}node(){return E_(this.syncTree_,this.path_)}}const xx=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},xh=function(t,e,n){if(!t||typeof t!="object")return t;if(I(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Dx(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Mx(t[".sv"],e);I(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Dx=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:I(!1,"Unexpected server value: "+t)}},Mx=function(t,e,n){t.hasOwnProperty("increment")||I(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&I(!1,"Unexpected increment value: "+s);const i=e.node();if(I(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Lx=function(t,e,n,s){return jl(e,new Wl(n,t),s)},$x=function(t,e,n){return jl(t,new Bl(e),n)};function jl(t,e,n){const s=t.getPriority().val(),i=xh(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=xh(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new be(a,Pe(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new be(i))),o.forEachChild(_e,(a,l)=>{const c=jl(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Gl(t,e){let n=e instanceof oe?e:new oe(e),s=t,i=K(n);for(;i!==null;){const r=os(s.node.children,i)||{children:{},childCount:0};s=new Vl(i,s,r),n=ue(n),i=K(n)}return s}function Is(t){return t.node.value}function T_(t,e){t.node.value=e,Oa(t)}function S_(t){return t.node.childCount>0}function Fx(t){return Is(t)===void 0&&!S_(t)}function ao(t,e){Fe(t.node.children,(n,s)=>{e(new Vl(n,t,s))})}function R_(t,e,n,s){n&&!s&&e(t),ao(t,i=>{R_(i,e,!0,s)}),n&&s&&e(t)}function Ux(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function xi(t){return new oe(t.parent===null?t.name:xi(t.parent)+"/"+t.name)}function Oa(t){t.parent!==null&&Hx(t.parent,t.name,t)}function Hx(t,e,n){const s=Fx(n),i=Ut(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Oa(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Oa(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bx=/[\[\].#$\/\u0000-\u001F\u007F]/,Wx=/[\[\].#$\u0000-\u001F\u007F]/,Ho=10*1024*1024,A_=function(t){return typeof t=="string"&&t.length!==0&&!Bx.test(t)},P_=function(t){return typeof t=="string"&&t.length!==0&&!Wx.test(t)},jx=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),P_(t)},O_=function(t,e,n){const s=n instanceof oe?new rk(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+yn(s));if(typeof e=="function")throw new Error(t+"contains a function "+yn(s)+" with contents = "+e.toString());if(Op(e))throw new Error(t+"contains "+e.toString()+" "+yn(s));if(typeof e=="string"&&e.length>Ho/3&&Jr(e)>Ho)throw new Error(t+"contains a string greater than "+Ho+" utf8 bytes "+yn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Fe(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!A_(o)))throw new Error(t+" contains an invalid key ("+o+") "+yn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);ok(s,o),O_(t,a,s),ak(s)}),i&&r)throw new Error(t+' contains ".value" child '+yn(s)+" in addition to actual children.")}},N_=function(t,e,n,s){if(!P_(n))throw new Error(Sf(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Vx=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),N_(t,e,n)},Gx=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!A_(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!jx(n))throw new Error(Sf(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kx{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function k_(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Sl(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function x_(t,e,n){k_(t,n),D_(t,s=>Sl(s,e))}function Dn(t,e,n){k_(t,n),D_(t,s=>st(s,e)||st(e,s))}function D_(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(qx(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function qx(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();qs&&Ae("event: "+n.toString()),Oi(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zx="repo_interrupt",Yx=25;class Qx{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Kx,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Cr(),this.transactionQueueTree_=new Vl,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Jx(t,e,n){if(t.stats_=Il(t.repoInfo_),t.forceRestClient_||ON())t.server_=new wr(t.repoInfo_,(s,i,r,o)=>{Dh(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Mh(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{we(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new kt(t.repoInfo_,e,(s,i,r,o)=>{Dh(t,s,i,r,o)},s=>{Mh(t,s)},s=>{Zx(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=MN(t.repoInfo_,()=>new xk(t.stats_,t.server_)),t.infoData_=new Ak,t.infoSyncTree_=new Nh({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=ro(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Kl(t,"connected",!1),t.serverSyncTree_=new Nh({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);Dn(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function Xx(t){const n=t.infoData_.getNode(new oe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function M_(t){return xx({timestamp:Xx(t)})}function Dh(t,e,n,s,i){t.dataUpdateCount++;const r=new oe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=hr(n,c=>Pe(c));o=Ax(t.serverSyncTree_,r,l,i)}else{const l=Pe(n);o=Rx(t.serverSyncTree_,r,l,i)}else if(s){const l=hr(n,c=>Pe(c));o=Ix(t.serverSyncTree_,r,l)}else{const l=Pe(n);o=ro(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=zl(t,r)),Dn(t.eventQueue_,a,o)}function Mh(t,e){Kl(t,"connected",e),e===!1&&t1(t)}function Zx(t,e){Fe(e,(n,s)=>{Kl(t,n,s)})}function Kl(t,e,n){const s=new oe("/.info/"+e),i=Pe(n);t.infoData_.updateSnapshot(s,i);const r=ro(t.infoSyncTree_,s,i);Dn(t.eventQueue_,s,r)}function e1(t){return t.nextWriteId_++}function t1(t){L_(t,"onDisconnectEvents");const e=M_(t),n=Cr();Ca(t.onDisconnect_,Q(),(i,r)=>{const o=Lx(i,r,t.serverSyncTree_,e);a_(n,i,o)});let s=[];Ca(n,Q(),(i,r)=>{s=s.concat(ro(t.serverSyncTree_,i,r));const o=o1(t,i);zl(t,o)}),t.onDisconnect_=Cr(),Dn(t.eventQueue_,Q(),s)}function n1(t,e,n){let s;K(e._path)===".info"?s=kh(t.infoSyncTree_,e,n):s=kh(t.serverSyncTree_,e,n),x_(t.eventQueue_,e._path,s)}function Lh(t,e,n){let s;K(e._path)===".info"?s=Pa(t.infoSyncTree_,e,n):s=Pa(t.serverSyncTree_,e,n),x_(t.eventQueue_,e._path,s)}function s1(t){t.persistentConnection_&&t.persistentConnection_.interrupt(zx)}function L_(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ae(n,...e)}function $_(t,e,n){return E_(t.serverSyncTree_,e,n)||H.EMPTY_NODE}function ql(t,e=t.transactionQueueTree_){if(e||lo(t,e),Is(e)){const n=U_(t,e);I(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&i1(t,xi(e),n)}else S_(e)&&ao(e,n=>{ql(t,n)})}function i1(t,e,n){const s=n.map(c=>c.currentWriteId),i=$_(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];I(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Le(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{L_(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(Vn(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();lo(t,Gl(t.transactionQueueTree_,e)),ql(t,t.transactionQueueTree_),Dn(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)Oi(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Ke("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}zl(t,e)}},o)}function zl(t,e){const n=F_(t,e),s=xi(n),i=U_(t,n);return r1(t,i,s),s}function r1(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Le(n,l.path);let u=!1,h;if(I(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(Vn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Yx)u=!0,h="maxretry",i=i.concat(Vn(t.serverSyncTree_,l.currentWriteId,!0));else{const d=$_(t,l.path,o);l.currentInputSnapshot=d;const _=e[a].update(d.val());if(_!==void 0){O_("transaction failed: Data returned ",_,l.path);let m=Pe(_);typeof _=="object"&&_!=null&&Ut(_,".priority")||(m=m.updatePriority(d.getPriority()));const O=l.currentWriteId,k=M_(t),P=$x(m,d,k);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=P,l.currentWriteId=e1(t),o.splice(o.indexOf(O),1),i=i.concat(Cx(t.serverSyncTree_,l.path,P,l.currentWriteId,l.applyLocally)),i=i.concat(Vn(t.serverSyncTree_,O,!0))}else u=!0,h="nodata",i=i.concat(Vn(t.serverSyncTree_,l.currentWriteId,!0))}Dn(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}lo(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Oi(s[a]);ql(t,t.transactionQueueTree_)}function F_(t,e){let n,s=t.transactionQueueTree_;for(n=K(e);n!==null&&Is(s)===void 0;)s=Gl(s,n),e=ue(e),n=K(e);return s}function U_(t,e){const n=[];return H_(t,e,n),n.sort((s,i)=>s.order-i.order),n}function H_(t,e,n){const s=Is(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);ao(e,i=>{H_(t,i,n)})}function lo(t,e){const n=Is(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,T_(e,n.length>0?n:void 0)}ao(e,s=>{lo(t,s)})}function o1(t,e){const n=xi(F_(t,e)),s=Gl(t.transactionQueueTree_,e);return Ux(s,i=>{Bo(t,i)}),Bo(t,s),R_(s,i=>{Bo(t,i)}),n}function Bo(t,e){const n=Is(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(I(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(I(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Vn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?T_(e,void 0):n.length=r+1,Dn(t.eventQueue_,xi(e),i);for(let o=0;o<s.length;o++)Oi(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a1(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function l1(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Ke(`Invalid query segment '${n}' in query '${t}'`)}return e}const $h=function(t,e){const n=c1(t),s=n.namespace;n.domain==="firebase.com"&&Lt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Lt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||EN();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Wp(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new oe(n.pathString)}},c1=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=a1(t.substring(u,h)));const d=l1(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u1{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+we(this.snapshot.exportVal())}}class h1{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d1{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return I(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return q(this._path)?null:Jp(this._path)}get ref(){return new dn(this._repo,this._path)}get _queryIdentifier(){const e=bh(this._queryParams),n=wl(e);return n==="{}"?"default":n}get _queryObject(){return bh(this._queryParams)}isEqual(e){if(e=bt(e),!(e instanceof Yl))return!1;const n=this._repo===e._repo,s=Sl(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+ik(this._path)}}class dn extends Yl{constructor(e,n){super(e,n,new Ol,!1)}get parent(){const e=Zp(this._path);return e===null?null:new dn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Nr{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new oe(e),s=Na(this.ref,e);return new Nr(this._node.getChild(n),s,_e)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Nr(i,Na(this.ref,s),_e)))}hasChild(e){const n=new oe(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function f1(t,e){return t=bt(t),t._checkNotDeleted("ref"),Na(t._root,e)}function Na(t,e){return t=bt(t),K(t._path)===null?Vx("child","path",e):N_("child","path",e),new dn(t._repo,ve(t._path,e))}class Ql{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new u1("value",this,new Nr(e.snapshotNode,new dn(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new h1(this,e,n):null}matches(e){return e instanceof Ql?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function p1(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const l=n,c=(u,h)=>{Lh(t._repo,t,a),l(u,h)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new d1(n,r||void 0),a=new Ql(o);return n1(t._repo,t,a),()=>Lh(t._repo,t,a)}function _1(t,e,n,s){return p1(t,"value",e,n,s)}px(dn);bx(dn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g1="FIREBASE_DATABASE_EMULATOR_HOST",ka={};let m1=!1;function v1(t,e,n,s){t.repoInfo_=new Wp(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function y1(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Lt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ae("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=$h(r,i),a=o.repoInfo,l;typeof process<"u"&&nh&&(l=nh[g1]),l?(r=`http://${l}?ns=${a.namespace}`,o=$h(r,i),a=o.repoInfo):o.repoInfo.secure;const c=new kN(t.name,t.options,e);Gx("Invalid Firebase Database URL",o),q(o.path)||Lt("Database URL must point to the root of a Firebase Database (not including a child path).");const u=E1(a,t,c,new NN(t.name,n));return new w1(u,t)}function b1(t,e){const n=ka[e];(!n||n[t.key]!==t)&&Lt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),s1(t),delete n[t.key]}function E1(t,e,n,s){let i=ka[e.name];i||(i={},ka[e.name]=i);let r=i[t.toURLString()];return r&&Lt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Qx(t,m1,n,s),i[t.toURLString()]=r,r}class w1{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Jx(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new dn(this._repo,Q())),this._rootInternal}_delete(){return this._rootInternal!==null&&(b1(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Lt("Cannot call "+e+" on a deleted database.")}}function C1(t=Of(),e){const n=hl(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=cR("database");s&&I1(n,...s)}return n}function I1(t,e,n,s={}){t=bt(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Lt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Lt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Xi(Xi.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:uR(s.mockUserToken,t.app.options.projectId);r=new Xi(o)}v1(i,e,n,r)}/**
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
 */function T1(t){_N(ws),as(new Sn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return y1(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),nn(sh,ih,t),nn(sh,ih,"esm2017")}kt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};kt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};T1();const S1={apiKey:"AIzaSyDU95egjb7rapaUJuVJYu0ZeSbP0OLaeCE",authDomain:"autolearn-members.asia-southeast1.firebaseapp.com",projectId:"autolearn-members",storageBucket:"autolearn-members.appspot.com",messagingSenderId:"535565819374",appId:"1:535565819374:web:ccfe472f513439f3a002ff",measurementId:"G-NTHZSSX71G",databaseURL:"https://autolearn-members-default-rtdb.asia-southeast1.firebasedatabase.app/"},B_=Pf(S1);fp(B_);const R1=C1(B_),A1=f1(R1,"projects"),P1=vi({name:"HomeView",props:{isLogin:{type:Boolean,default:!1}},setup(){const t=zn([]);return qa(()=>{_1(A1,e=>{const n=e.val();t.value=Object.values(n)},e=>{console.error("讀取專案資料時出錯",e)})}),{projects:t}},methods:{toggleLogin(){this.$emit("toggleLogin")}}}),O1={class:"ui container"},N1={class:"ui four doubling stackable cards"},k1={class:"card"},x1={class:"content"},D1={class:"description",style:{"max-height":"300px","overflow-y":"auto"}},M1={key:0},L1=["href"],$1={key:1},F1={class:"card"},U1={class:"content"},H1={class:"description"};function B1(t,e,n,s,i,r){return pt(),qt("main",O1,[e[6]||(e[6]=V("h1",{class:"ui header"},"自主學習促進會",-1)),V("div",N1,[e[4]||(e[4]=pc('<div class="card"><div class="content"><div class="header">理監事名單</div><div class="description"><ul><li>理事長：朱佳仁</li><li>常務理事：戎培芬</li><li>常務理事：陳怡光</li><li>理事：吳啟新</li><li>理事：蔡伊婷</li><li>理事：李文郁</li><li>理事：林睿育</li><li>理事：曾維瑩</li><li>理事：陳音秀</li><li>候補理事：林津羽</li><li>常務監事：楊鴻祥</li><li>監事：陳郁玲</li><li>監事：謝易霖</li></ul></div></div></div>',1)),V("div",k1,[V("div",x1,[e[2]||(e[2]=V("div",{class:"header"},"本會專案一覽",-1)),V("div",D1,[t.projects.length?(pt(),qt("ul",M1,[(pt(!0),qt(et,null,Kg(t.projects,o=>(pt(),qt("li",{key:o.id},[V("a",{href:o.website,target:"_blank",rel:"noopener noreferrer"},jo(o.full_name)+":",9,L1),e[1]||(e[1]=V("br",null,null,-1)),si(jo(o.description),1)]))),128))])):(pt(),qt("p",$1,"載入中..."))])])]),e[5]||(e[5]=pc('<div class="card"><div class="content"><div class="header">本會歷史</div><div class="description" style="max-height:300px;overflow-y:auto;"><p>自主學習促進會的歷史可追溯至1994年種籽親子實驗小學的創立，這是台灣民主學校的先驅。</p><p>1998年，台北市自主學習實驗計畫開始，為期六年，證明了自主學習理念在中學階段的可行性。</p><p>2000年，面臨停辦危機時，學生發起了台灣首次中學生自發的學運，成功爭取續辦至第三屆學生畢業。</p><p>2001年3月，為延續自主學習的經驗與知識，本會正式成立。</p><p>2006-2008年間，本會通過&quot;自學中心&quot;提供課程和營隊，幫助體制內學生體驗自主學習。</p><p>2008-2010年，&quot;自主培力學園&quot;為拒學、懼學和想自學的青少年提供全日制團體學習。</p><p>2009年起，獨立教育工作者社群成立，致力於開設學習團體、培訓教師、支持家長，並開發自學資源。</p><p>本會持續致力於推動自主學習理念，為台灣教育改革提供新方向和活力。</p></div></div></div><div class="card"><div class="content"><div class="header">網址連結</div><div class="description"><ul><li><a href="https://www.alearn.org" target="_blank" rel="noopener noreferrer">官方網站</a></li><li><a href="https://www.facebook.com/alearnTW" target="_blank" rel="noopener noreferrer">臉書「自主學習促進會」專頁</a></li><li><a href="https://www.facebook.com/groups/homeschooltw" target="_blank" rel="noopener noreferrer">臉書「在家自學社群」社團</a></li></ul></div></div></div><div class="card"><div class="content"><div class="header">友站連結</div><div class="description"><ul><li><a href="https://partner-website.com">合作網站1</a></li><li><a href="https://partner-website.com">合作網站2</a></li></ul></div></div></div>',3)),V("div",F1,[V("div",U1,[e[3]||(e[3]=V("div",{class:"header"},"會員專區",-1)),V("div",H1,[V("button",{class:"ui button",onClick:e[0]||(e[0]=(...o)=>t.toggleLogin&&t.toggleLogin(...o))},"會員登入")])])])])])}const W1=yl(P1,[["render",B1]]),j1=hN({history:BO("/"),routes:[{path:"/",name:"home",component:W1},{path:"/about",name:"about",component:()=>uO(()=>import("./AboutView-Dk96xt7j.js"),__vite__mapDeps([0,1]))}]}),Jl=av(aO);Jl.use(dv());Jl.use(j1);Jl.mount("#app");export{et as F,yl as _,_1 as a,V as b,qt as c,Kg as d,pt as e,qa as o,A1 as p,zn as r,jo as t};
