import{L as ba,k as Ws,l as xa,m as La,p as Ma,q as Oa,C as Fa,s as ss,u as Ua,x as qa,y as Dt,S as Ba,z as ja,A as za}from"./index-CgA0aMMc.js";var os=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wt,Xs;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,m){function p(){}p.prototype=m.prototype,E.D=m.prototype,E.prototype=new p,E.prototype.constructor=E,E.C=function(y,T,I){for(var g=Array(arguments.length-2),Ct=2;Ct<arguments.length;Ct++)g[Ct-2]=arguments[Ct];return m.prototype[T].apply(y,g)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,m,p){p||(p=0);var y=Array(16);if(typeof m=="string")for(var T=0;16>T;++T)y[T]=m.charCodeAt(p++)|m.charCodeAt(p++)<<8|m.charCodeAt(p++)<<16|m.charCodeAt(p++)<<24;else for(T=0;16>T;++T)y[T]=m[p++]|m[p++]<<8|m[p++]<<16|m[p++]<<24;m=E.g[0],p=E.g[1],T=E.g[2];var I=E.g[3],g=m+(I^p&(T^I))+y[0]+3614090360&4294967295;m=p+(g<<7&4294967295|g>>>25),g=I+(T^m&(p^T))+y[1]+3905402710&4294967295,I=m+(g<<12&4294967295|g>>>20),g=T+(p^I&(m^p))+y[2]+606105819&4294967295,T=I+(g<<17&4294967295|g>>>15),g=p+(m^T&(I^m))+y[3]+3250441966&4294967295,p=T+(g<<22&4294967295|g>>>10),g=m+(I^p&(T^I))+y[4]+4118548399&4294967295,m=p+(g<<7&4294967295|g>>>25),g=I+(T^m&(p^T))+y[5]+1200080426&4294967295,I=m+(g<<12&4294967295|g>>>20),g=T+(p^I&(m^p))+y[6]+2821735955&4294967295,T=I+(g<<17&4294967295|g>>>15),g=p+(m^T&(I^m))+y[7]+4249261313&4294967295,p=T+(g<<22&4294967295|g>>>10),g=m+(I^p&(T^I))+y[8]+1770035416&4294967295,m=p+(g<<7&4294967295|g>>>25),g=I+(T^m&(p^T))+y[9]+2336552879&4294967295,I=m+(g<<12&4294967295|g>>>20),g=T+(p^I&(m^p))+y[10]+4294925233&4294967295,T=I+(g<<17&4294967295|g>>>15),g=p+(m^T&(I^m))+y[11]+2304563134&4294967295,p=T+(g<<22&4294967295|g>>>10),g=m+(I^p&(T^I))+y[12]+1804603682&4294967295,m=p+(g<<7&4294967295|g>>>25),g=I+(T^m&(p^T))+y[13]+4254626195&4294967295,I=m+(g<<12&4294967295|g>>>20),g=T+(p^I&(m^p))+y[14]+2792965006&4294967295,T=I+(g<<17&4294967295|g>>>15),g=p+(m^T&(I^m))+y[15]+1236535329&4294967295,p=T+(g<<22&4294967295|g>>>10),g=m+(T^I&(p^T))+y[1]+4129170786&4294967295,m=p+(g<<5&4294967295|g>>>27),g=I+(p^T&(m^p))+y[6]+3225465664&4294967295,I=m+(g<<9&4294967295|g>>>23),g=T+(m^p&(I^m))+y[11]+643717713&4294967295,T=I+(g<<14&4294967295|g>>>18),g=p+(I^m&(T^I))+y[0]+3921069994&4294967295,p=T+(g<<20&4294967295|g>>>12),g=m+(T^I&(p^T))+y[5]+3593408605&4294967295,m=p+(g<<5&4294967295|g>>>27),g=I+(p^T&(m^p))+y[10]+38016083&4294967295,I=m+(g<<9&4294967295|g>>>23),g=T+(m^p&(I^m))+y[15]+3634488961&4294967295,T=I+(g<<14&4294967295|g>>>18),g=p+(I^m&(T^I))+y[4]+3889429448&4294967295,p=T+(g<<20&4294967295|g>>>12),g=m+(T^I&(p^T))+y[9]+568446438&4294967295,m=p+(g<<5&4294967295|g>>>27),g=I+(p^T&(m^p))+y[14]+3275163606&4294967295,I=m+(g<<9&4294967295|g>>>23),g=T+(m^p&(I^m))+y[3]+4107603335&4294967295,T=I+(g<<14&4294967295|g>>>18),g=p+(I^m&(T^I))+y[8]+1163531501&4294967295,p=T+(g<<20&4294967295|g>>>12),g=m+(T^I&(p^T))+y[13]+2850285829&4294967295,m=p+(g<<5&4294967295|g>>>27),g=I+(p^T&(m^p))+y[2]+4243563512&4294967295,I=m+(g<<9&4294967295|g>>>23),g=T+(m^p&(I^m))+y[7]+1735328473&4294967295,T=I+(g<<14&4294967295|g>>>18),g=p+(I^m&(T^I))+y[12]+2368359562&4294967295,p=T+(g<<20&4294967295|g>>>12),g=m+(p^T^I)+y[5]+4294588738&4294967295,m=p+(g<<4&4294967295|g>>>28),g=I+(m^p^T)+y[8]+2272392833&4294967295,I=m+(g<<11&4294967295|g>>>21),g=T+(I^m^p)+y[11]+1839030562&4294967295,T=I+(g<<16&4294967295|g>>>16),g=p+(T^I^m)+y[14]+4259657740&4294967295,p=T+(g<<23&4294967295|g>>>9),g=m+(p^T^I)+y[1]+2763975236&4294967295,m=p+(g<<4&4294967295|g>>>28),g=I+(m^p^T)+y[4]+1272893353&4294967295,I=m+(g<<11&4294967295|g>>>21),g=T+(I^m^p)+y[7]+4139469664&4294967295,T=I+(g<<16&4294967295|g>>>16),g=p+(T^I^m)+y[10]+3200236656&4294967295,p=T+(g<<23&4294967295|g>>>9),g=m+(p^T^I)+y[13]+681279174&4294967295,m=p+(g<<4&4294967295|g>>>28),g=I+(m^p^T)+y[0]+3936430074&4294967295,I=m+(g<<11&4294967295|g>>>21),g=T+(I^m^p)+y[3]+3572445317&4294967295,T=I+(g<<16&4294967295|g>>>16),g=p+(T^I^m)+y[6]+76029189&4294967295,p=T+(g<<23&4294967295|g>>>9),g=m+(p^T^I)+y[9]+3654602809&4294967295,m=p+(g<<4&4294967295|g>>>28),g=I+(m^p^T)+y[12]+3873151461&4294967295,I=m+(g<<11&4294967295|g>>>21),g=T+(I^m^p)+y[15]+530742520&4294967295,T=I+(g<<16&4294967295|g>>>16),g=p+(T^I^m)+y[2]+3299628645&4294967295,p=T+(g<<23&4294967295|g>>>9),g=m+(T^(p|~I))+y[0]+4096336452&4294967295,m=p+(g<<6&4294967295|g>>>26),g=I+(p^(m|~T))+y[7]+1126891415&4294967295,I=m+(g<<10&4294967295|g>>>22),g=T+(m^(I|~p))+y[14]+2878612391&4294967295,T=I+(g<<15&4294967295|g>>>17),g=p+(I^(T|~m))+y[5]+4237533241&4294967295,p=T+(g<<21&4294967295|g>>>11),g=m+(T^(p|~I))+y[12]+1700485571&4294967295,m=p+(g<<6&4294967295|g>>>26),g=I+(p^(m|~T))+y[3]+2399980690&4294967295,I=m+(g<<10&4294967295|g>>>22),g=T+(m^(I|~p))+y[10]+4293915773&4294967295,T=I+(g<<15&4294967295|g>>>17),g=p+(I^(T|~m))+y[1]+2240044497&4294967295,p=T+(g<<21&4294967295|g>>>11),g=m+(T^(p|~I))+y[8]+1873313359&4294967295,m=p+(g<<6&4294967295|g>>>26),g=I+(p^(m|~T))+y[15]+4264355552&4294967295,I=m+(g<<10&4294967295|g>>>22),g=T+(m^(I|~p))+y[6]+2734768916&4294967295,T=I+(g<<15&4294967295|g>>>17),g=p+(I^(T|~m))+y[13]+1309151649&4294967295,p=T+(g<<21&4294967295|g>>>11),g=m+(T^(p|~I))+y[4]+4149444226&4294967295,m=p+(g<<6&4294967295|g>>>26),g=I+(p^(m|~T))+y[11]+3174756917&4294967295,I=m+(g<<10&4294967295|g>>>22),g=T+(m^(I|~p))+y[2]+718787259&4294967295,T=I+(g<<15&4294967295|g>>>17),g=p+(I^(T|~m))+y[9]+3951481745&4294967295,E.g[0]=E.g[0]+m&4294967295,E.g[1]=E.g[1]+(T+(g<<21&4294967295|g>>>11))&4294967295,E.g[2]=E.g[2]+T&4294967295,E.g[3]=E.g[3]+I&4294967295}n.prototype.u=function(E,m){m===void 0&&(m=E.length);for(var p=m-this.blockSize,y=this.B,T=this.h,I=0;I<m;){if(T==0)for(;I<=p;)s(this,E,I),I+=this.blockSize;if(typeof E=="string"){for(;I<m;)if(y[T++]=E.charCodeAt(I++),T==this.blockSize){s(this,y),T=0;break}}else for(;I<m;)if(y[T++]=E[I++],T==this.blockSize){s(this,y),T=0;break}}this.h=T,this.o+=m},n.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var m=1;m<E.length-8;++m)E[m]=0;var p=8*this.o;for(m=E.length-8;m<E.length;++m)E[m]=p&255,p/=256;for(this.u(E),E=Array(16),m=p=0;4>m;++m)for(var y=0;32>y;y+=8)E[p++]=this.g[m]>>>y&255;return E};function o(E,m){var p=l;return Object.prototype.hasOwnProperty.call(p,E)?p[E]:p[E]=m(E)}function u(E,m){this.h=m;for(var p=[],y=!0,T=E.length-1;0<=T;T--){var I=E[T]|0;y&&I==m||(p[T]=I,y=!1)}this.g=p}var l={};function d(E){return-128<=E&&128>E?o(E,function(m){return new u([m|0],0>m?-1:0)}):new u([E|0],0>E?-1:0)}function f(E){if(isNaN(E)||!isFinite(E))return w;if(0>E)return k(f(-E));for(var m=[],p=1,y=0;E>=p;y++)m[y]=E/p|0,p*=4294967296;return new u(m,0)}function _(E,m){if(E.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(E.charAt(0)=="-")return k(_(E.substring(1),m));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var p=f(Math.pow(m,8)),y=w,T=0;T<E.length;T+=8){var I=Math.min(8,E.length-T),g=parseInt(E.substring(T,T+I),m);8>I?(I=f(Math.pow(m,I)),y=y.j(I).add(f(g))):(y=y.j(p),y=y.add(f(g)))}return y}var w=d(0),P=d(1),V=d(16777216);i=u.prototype,i.m=function(){if(L(this))return-k(this).m();for(var E=0,m=1,p=0;p<this.g.length;p++){var y=this.i(p);E+=(0<=y?y:4294967296+y)*m,m*=4294967296}return E},i.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(N(this))return"0";if(L(this))return"-"+k(this).toString(E);for(var m=f(Math.pow(E,6)),p=this,y="";;){var T=et(p,m).g;p=G(p,T.j(m));var I=((0<p.g.length?p.g[0]:p.h)>>>0).toString(E);if(p=T,N(p))return I+y;for(;6>I.length;)I="0"+I;y=I+y}},i.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function N(E){if(E.h!=0)return!1;for(var m=0;m<E.g.length;m++)if(E.g[m]!=0)return!1;return!0}function L(E){return E.h==-1}i.l=function(E){return E=G(this,E),L(E)?-1:N(E)?0:1};function k(E){for(var m=E.g.length,p=[],y=0;y<m;y++)p[y]=~E.g[y];return new u(p,~E.h).add(P)}i.abs=function(){return L(this)?k(this):this},i.add=function(E){for(var m=Math.max(this.g.length,E.g.length),p=[],y=0,T=0;T<=m;T++){var I=y+(this.i(T)&65535)+(E.i(T)&65535),g=(I>>>16)+(this.i(T)>>>16)+(E.i(T)>>>16);y=g>>>16,I&=65535,g&=65535,p[T]=g<<16|I}return new u(p,p[p.length-1]&-2147483648?-1:0)};function G(E,m){return E.add(k(m))}i.j=function(E){if(N(this)||N(E))return w;if(L(this))return L(E)?k(this).j(k(E)):k(k(this).j(E));if(L(E))return k(this.j(k(E)));if(0>this.l(V)&&0>E.l(V))return f(this.m()*E.m());for(var m=this.g.length+E.g.length,p=[],y=0;y<2*m;y++)p[y]=0;for(y=0;y<this.g.length;y++)for(var T=0;T<E.g.length;T++){var I=this.i(y)>>>16,g=this.i(y)&65535,Ct=E.i(T)>>>16,Te=E.i(T)&65535;p[2*y+2*T]+=g*Te,Q(p,2*y+2*T),p[2*y+2*T+1]+=I*Te,Q(p,2*y+2*T+1),p[2*y+2*T+1]+=g*Ct,Q(p,2*y+2*T+1),p[2*y+2*T+2]+=I*Ct,Q(p,2*y+2*T+2)}for(y=0;y<m;y++)p[y]=p[2*y+1]<<16|p[2*y];for(y=m;y<2*m;y++)p[y]=0;return new u(p,0)};function Q(E,m){for(;(E[m]&65535)!=E[m];)E[m+1]+=E[m]>>>16,E[m]&=65535,m++}function H(E,m){this.g=E,this.h=m}function et(E,m){if(N(m))throw Error("division by zero");if(N(E))return new H(w,w);if(L(E))return m=et(k(E),m),new H(k(m.g),k(m.h));if(L(m))return m=et(E,k(m)),new H(k(m.g),m.h);if(30<E.g.length){if(L(E)||L(m))throw Error("slowDivide_ only works with positive integers.");for(var p=P,y=m;0>=y.l(E);)p=Pt(p),y=Pt(y);var T=it(p,1),I=it(y,1);for(y=it(y,2),p=it(p,2);!N(y);){var g=I.add(y);0>=g.l(E)&&(T=T.add(p),I=g),y=it(y,1),p=it(p,1)}return m=G(E,T.j(m)),new H(T,m)}for(T=w;0<=E.l(m);){for(p=Math.max(1,Math.floor(E.m()/m.m())),y=Math.ceil(Math.log(p)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),I=f(p),g=I.j(m);L(g)||0<g.l(E);)p-=y,I=f(p),g=I.j(m);N(I)&&(I=P),T=T.add(I),E=G(E,g)}return new H(T,E)}i.A=function(E){return et(this,E).h},i.and=function(E){for(var m=Math.max(this.g.length,E.g.length),p=[],y=0;y<m;y++)p[y]=this.i(y)&E.i(y);return new u(p,this.h&E.h)},i.or=function(E){for(var m=Math.max(this.g.length,E.g.length),p=[],y=0;y<m;y++)p[y]=this.i(y)|E.i(y);return new u(p,this.h|E.h)},i.xor=function(E){for(var m=Math.max(this.g.length,E.g.length),p=[],y=0;y<m;y++)p[y]=this.i(y)^E.i(y);return new u(p,this.h^E.h)};function Pt(E){for(var m=E.g.length+1,p=[],y=0;y<m;y++)p[y]=E.i(y)<<1|E.i(y-1)>>>31;return new u(p,E.h)}function it(E,m){var p=m>>5;m%=32;for(var y=E.g.length-p,T=[],I=0;I<y;I++)T[I]=0<m?E.i(I+p)>>>m|E.i(I+p+1)<<32-m:E.i(I+p);return new u(T,E.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,Xs=n,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=f,u.fromString=_,Wt=u}).apply(typeof os<"u"?os:typeof self<"u"?self:typeof window<"u"?window:{});var Tn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ys,Me,Js,An,Ar,Zs,to,eo;(function(){var i,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(r,a,h){return r==Array.prototype||r==Object.prototype||(r[a]=h.value),r};function e(r){r=[typeof globalThis=="object"&&globalThis,r,typeof window=="object"&&window,typeof self=="object"&&self,typeof Tn=="object"&&Tn];for(var a=0;a<r.length;++a){var h=r[a];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var n=e(this);function s(r,a){if(a)t:{var h=n;r=r.split(".");for(var c=0;c<r.length-1;c++){var v=r[c];if(!(v in h))break t;h=h[v]}r=r[r.length-1],c=h[r],a=a(c),a!=c&&a!=null&&t(h,r,{configurable:!0,writable:!0,value:a})}}function o(r,a){r instanceof String&&(r+="");var h=0,c=!1,v={next:function(){if(!c&&h<r.length){var A=h++;return{value:a(A,r[A]),done:!1}}return c=!0,{done:!0,value:void 0}}};return v[Symbol.iterator]=function(){return v},v}s("Array.prototype.values",function(r){return r||function(){return o(this,function(a,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},l=this||self;function d(r){var a=typeof r;return a=a!="object"?a:r?Array.isArray(r)?"array":a:"null",a=="array"||a=="object"&&typeof r.length=="number"}function f(r){var a=typeof r;return a=="object"&&r!=null||a=="function"}function _(r,a,h){return r.call.apply(r.bind,arguments)}function w(r,a,h){if(!r)throw Error();if(2<arguments.length){var c=Array.prototype.slice.call(arguments,2);return function(){var v=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(v,c),r.apply(a,v)}}return function(){return r.apply(a,arguments)}}function P(r,a,h){return P=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:w,P.apply(null,arguments)}function V(r,a){var h=Array.prototype.slice.call(arguments,1);return function(){var c=h.slice();return c.push.apply(c,arguments),r.apply(this,c)}}function N(r,a){function h(){}h.prototype=a.prototype,r.aa=a.prototype,r.prototype=new h,r.prototype.constructor=r,r.Qb=function(c,v,A){for(var C=Array(arguments.length-2),z=2;z<arguments.length;z++)C[z-2]=arguments[z];return a.prototype[v].apply(c,C)}}function L(r){const a=r.length;if(0<a){const h=Array(a);for(let c=0;c<a;c++)h[c]=r[c];return h}return[]}function k(r,a){for(let h=1;h<arguments.length;h++){const c=arguments[h];if(d(c)){const v=r.length||0,A=c.length||0;r.length=v+A;for(let C=0;C<A;C++)r[v+C]=c[C]}else r.push(c)}}class G{constructor(a,h){this.i=a,this.j=h,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function Q(r){return/^[\s\xa0]*$/.test(r)}function H(){var r=l.navigator;return r&&(r=r.userAgent)?r:""}function et(r){return et[" "](r),r}et[" "]=function(){};var Pt=H().indexOf("Gecko")!=-1&&!(H().toLowerCase().indexOf("webkit")!=-1&&H().indexOf("Edge")==-1)&&!(H().indexOf("Trident")!=-1||H().indexOf("MSIE")!=-1)&&H().indexOf("Edge")==-1;function it(r,a,h){for(const c in r)a.call(h,r[c],c,r)}function E(r,a){for(const h in r)a.call(void 0,r[h],h,r)}function m(r){const a={};for(const h in r)a[h]=r[h];return a}const p="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(r,a){let h,c;for(let v=1;v<arguments.length;v++){c=arguments[v];for(h in c)r[h]=c[h];for(let A=0;A<p.length;A++)h=p[A],Object.prototype.hasOwnProperty.call(c,h)&&(r[h]=c[h])}}function T(r){var a=1;r=r.split(":");const h=[];for(;0<a&&r.length;)h.push(r.shift()),a--;return r.length&&h.push(r.join(":")),h}function I(r){l.setTimeout(()=>{throw r},0)}function g(){var r=Hn;let a=null;return r.g&&(a=r.g,r.g=r.g.next,r.g||(r.h=null),a.next=null),a}class Ct{constructor(){this.h=this.g=null}add(a,h){const c=Te.get();c.set(a,h),this.h?this.h.next=c:this.g=c,this.h=c}}var Te=new G(()=>new Jo,r=>r.reset());class Jo{constructor(){this.next=this.g=this.h=null}set(a,h){this.h=a,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Ee,ve=!1,Hn=new Ct,si=()=>{const r=l.Promise.resolve(void 0);Ee=()=>{r.then(Zo)}};var Zo=()=>{for(var r;r=g();){try{r.h.call(r.g)}catch(h){I(h)}var a=Te;a.j(r),100>a.h&&(a.h++,r.next=a.g,a.g=r)}ve=!1};function bt(){this.s=this.s,this.C=this.C}bt.prototype.s=!1,bt.prototype.ma=function(){this.s||(this.s=!0,this.N())},bt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ut(r,a){this.type=r,this.g=this.target=a,this.defaultPrevented=!1}ut.prototype.h=function(){this.defaultPrevented=!0};var ta=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var r=!1,a=Object.defineProperty({},"passive",{get:function(){r=!0}});try{const h=()=>{};l.addEventListener("test",h,a),l.removeEventListener("test",h,a)}catch{}return r}();function Ie(r,a){if(ut.call(this,r?r.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,r){var h=this.type=r.type,c=r.changedTouches&&r.changedTouches.length?r.changedTouches[0]:null;if(this.target=r.target||r.srcElement,this.g=a,a=r.relatedTarget){if(Pt){t:{try{et(a.nodeName);var v=!0;break t}catch{}v=!1}v||(a=null)}}else h=="mouseover"?a=r.fromElement:h=="mouseout"&&(a=r.toElement);this.relatedTarget=a,c?(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0):(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0),this.button=r.button,this.key=r.key||"",this.ctrlKey=r.ctrlKey,this.altKey=r.altKey,this.shiftKey=r.shiftKey,this.metaKey=r.metaKey,this.pointerId=r.pointerId||0,this.pointerType=typeof r.pointerType=="string"?r.pointerType:ea[r.pointerType]||"",this.state=r.state,this.i=r,r.defaultPrevented&&Ie.aa.h.call(this)}}N(Ie,ut);var ea={2:"touch",3:"pen",4:"mouse"};Ie.prototype.h=function(){Ie.aa.h.call(this);var r=this.i;r.preventDefault?r.preventDefault():r.returnValue=!1};var Ze="closure_listenable_"+(1e6*Math.random()|0),na=0;function ra(r,a,h,c,v){this.listener=r,this.proxy=null,this.src=a,this.type=h,this.capture=!!c,this.ha=v,this.key=++na,this.da=this.fa=!1}function tn(r){r.da=!0,r.listener=null,r.proxy=null,r.src=null,r.ha=null}function en(r){this.src=r,this.g={},this.h=0}en.prototype.add=function(r,a,h,c,v){var A=r.toString();r=this.g[A],r||(r=this.g[A]=[],this.h++);var C=Xn(r,a,c,v);return-1<C?(a=r[C],h||(a.fa=!1)):(a=new ra(a,this.src,A,!!c,v),a.fa=h,r.push(a)),a};function Wn(r,a){var h=a.type;if(h in r.g){var c=r.g[h],v=Array.prototype.indexOf.call(c,a,void 0),A;(A=0<=v)&&Array.prototype.splice.call(c,v,1),A&&(tn(a),r.g[h].length==0&&(delete r.g[h],r.h--))}}function Xn(r,a,h,c){for(var v=0;v<r.length;++v){var A=r[v];if(!A.da&&A.listener==a&&A.capture==!!h&&A.ha==c)return v}return-1}var Yn="closure_lm_"+(1e6*Math.random()|0),Jn={};function oi(r,a,h,c,v){if(Array.isArray(a)){for(var A=0;A<a.length;A++)oi(r,a[A],h,c,v);return null}return h=hi(h),r&&r[Ze]?r.K(a,h,f(c)?!!c.capture:!!c,v):ia(r,a,h,!1,c,v)}function ia(r,a,h,c,v,A){if(!a)throw Error("Invalid event type");var C=f(v)?!!v.capture:!!v,z=tr(r);if(z||(r[Yn]=z=new en(r)),h=z.add(a,h,c,C,A),h.proxy)return h;if(c=sa(),h.proxy=c,c.src=r,c.listener=h,r.addEventListener)ta||(v=C),v===void 0&&(v=!1),r.addEventListener(a.toString(),c,v);else if(r.attachEvent)r.attachEvent(ui(a.toString()),c);else if(r.addListener&&r.removeListener)r.addListener(c);else throw Error("addEventListener and attachEvent are unavailable.");return h}function sa(){function r(h){return a.call(r.src,r.listener,h)}const a=oa;return r}function ai(r,a,h,c,v){if(Array.isArray(a))for(var A=0;A<a.length;A++)ai(r,a[A],h,c,v);else c=f(c)?!!c.capture:!!c,h=hi(h),r&&r[Ze]?(r=r.i,a=String(a).toString(),a in r.g&&(A=r.g[a],h=Xn(A,h,c,v),-1<h&&(tn(A[h]),Array.prototype.splice.call(A,h,1),A.length==0&&(delete r.g[a],r.h--)))):r&&(r=tr(r))&&(a=r.g[a.toString()],r=-1,a&&(r=Xn(a,h,c,v)),(h=-1<r?a[r]:null)&&Zn(h))}function Zn(r){if(typeof r!="number"&&r&&!r.da){var a=r.src;if(a&&a[Ze])Wn(a.i,r);else{var h=r.type,c=r.proxy;a.removeEventListener?a.removeEventListener(h,c,r.capture):a.detachEvent?a.detachEvent(ui(h),c):a.addListener&&a.removeListener&&a.removeListener(c),(h=tr(a))?(Wn(h,r),h.h==0&&(h.src=null,a[Yn]=null)):tn(r)}}}function ui(r){return r in Jn?Jn[r]:Jn[r]="on"+r}function oa(r,a){if(r.da)r=!0;else{a=new Ie(a,this);var h=r.listener,c=r.ha||r.src;r.fa&&Zn(r),r=h.call(c,a)}return r}function tr(r){return r=r[Yn],r instanceof en?r:null}var er="__closure_events_fn_"+(1e9*Math.random()>>>0);function hi(r){return typeof r=="function"?r:(r[er]||(r[er]=function(a){return r.handleEvent(a)}),r[er])}function ht(){bt.call(this),this.i=new en(this),this.M=this,this.F=null}N(ht,bt),ht.prototype[Ze]=!0,ht.prototype.removeEventListener=function(r,a,h,c){ai(this,r,a,h,c)};function gt(r,a){var h,c=r.F;if(c)for(h=[];c;c=c.F)h.push(c);if(r=r.M,c=a.type||a,typeof a=="string")a=new ut(a,r);else if(a instanceof ut)a.target=a.target||r;else{var v=a;a=new ut(c,r),y(a,v)}if(v=!0,h)for(var A=h.length-1;0<=A;A--){var C=a.g=h[A];v=nn(C,c,!0,a)&&v}if(C=a.g=r,v=nn(C,c,!0,a)&&v,v=nn(C,c,!1,a)&&v,h)for(A=0;A<h.length;A++)C=a.g=h[A],v=nn(C,c,!1,a)&&v}ht.prototype.N=function(){if(ht.aa.N.call(this),this.i){var r=this.i,a;for(a in r.g){for(var h=r.g[a],c=0;c<h.length;c++)tn(h[c]);delete r.g[a],r.h--}}this.F=null},ht.prototype.K=function(r,a,h,c){return this.i.add(String(r),a,!1,h,c)},ht.prototype.L=function(r,a,h,c){return this.i.add(String(r),a,!0,h,c)};function nn(r,a,h,c){if(a=r.i.g[String(a)],!a)return!0;a=a.concat();for(var v=!0,A=0;A<a.length;++A){var C=a[A];if(C&&!C.da&&C.capture==h){var z=C.listener,st=C.ha||C.src;C.fa&&Wn(r.i,C),v=z.call(st,c)!==!1&&v}}return v&&!c.defaultPrevented}function li(r,a,h){if(typeof r=="function")h&&(r=P(r,h));else if(r&&typeof r.handleEvent=="function")r=P(r.handleEvent,r);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:l.setTimeout(r,a||0)}function ci(r){r.g=li(()=>{r.g=null,r.i&&(r.i=!1,ci(r))},r.l);const a=r.h;r.h=null,r.m.apply(null,a)}class aa extends bt{constructor(a,h){super(),this.m=a,this.l=h,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:ci(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ae(r){bt.call(this),this.h=r,this.g={}}N(Ae,bt);var di=[];function fi(r){it(r.g,function(a,h){this.g.hasOwnProperty(h)&&Zn(a)},r),r.g={}}Ae.prototype.N=function(){Ae.aa.N.call(this),fi(this)},Ae.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var nr=l.JSON.stringify,ua=l.JSON.parse,ha=class{stringify(r){return l.JSON.stringify(r,void 0)}parse(r){return l.JSON.parse(r,void 0)}};function rr(){}rr.prototype.h=null;function mi(r){return r.h||(r.h=r.i())}function gi(){}var we={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ir(){ut.call(this,"d")}N(ir,ut);function sr(){ut.call(this,"c")}N(sr,ut);var Kt={},pi=null;function rn(){return pi=pi||new ht}Kt.La="serverreachability";function _i(r){ut.call(this,Kt.La,r)}N(_i,ut);function Re(r){const a=rn();gt(a,new _i(a))}Kt.STAT_EVENT="statevent";function yi(r,a){ut.call(this,Kt.STAT_EVENT,r),this.stat=a}N(yi,ut);function pt(r){const a=rn();gt(a,new yi(a,r))}Kt.Ma="timingevent";function Ti(r,a){ut.call(this,Kt.Ma,r),this.size=a}N(Ti,ut);function Pe(r,a){if(typeof r!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){r()},a)}function Ce(){this.g=!0}Ce.prototype.xa=function(){this.g=!1};function la(r,a,h,c,v,A){r.info(function(){if(r.g)if(A)for(var C="",z=A.split("&"),st=0;st<z.length;st++){var j=z[st].split("=");if(1<j.length){var lt=j[0];j=j[1];var ct=lt.split("_");C=2<=ct.length&&ct[1]=="type"?C+(lt+"="+j+"&"):C+(lt+"=redacted&")}}else C=null;else C=A;return"XMLHTTP REQ ("+c+") [attempt "+v+"]: "+a+`
`+h+`
`+C})}function ca(r,a,h,c,v,A,C){r.info(function(){return"XMLHTTP RESP ("+c+") [ attempt "+v+"]: "+a+`
`+h+`
`+A+" "+C})}function Zt(r,a,h,c){r.info(function(){return"XMLHTTP TEXT ("+a+"): "+fa(r,h)+(c?" "+c:"")})}function da(r,a){r.info(function(){return"TIMEOUT: "+a})}Ce.prototype.info=function(){};function fa(r,a){if(!r.g)return a;if(!a)return null;try{var h=JSON.parse(a);if(h){for(r=0;r<h.length;r++)if(Array.isArray(h[r])){var c=h[r];if(!(2>c.length)){var v=c[1];if(Array.isArray(v)&&!(1>v.length)){var A=v[0];if(A!="noop"&&A!="stop"&&A!="close")for(var C=1;C<v.length;C++)v[C]=""}}}}return nr(h)}catch{return a}}var sn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ei={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},or;function on(){}N(on,rr),on.prototype.g=function(){return new XMLHttpRequest},on.prototype.i=function(){return{}},or=new on;function xt(r,a,h,c){this.j=r,this.i=a,this.l=h,this.R=c||1,this.U=new Ae(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new vi}function vi(){this.i=null,this.g="",this.h=!1}var Ii={},ar={};function ur(r,a,h){r.L=1,r.v=ln(Vt(a)),r.m=h,r.P=!0,Ai(r,null)}function Ai(r,a){r.F=Date.now(),an(r),r.A=Vt(r.v);var h=r.A,c=r.R;Array.isArray(c)||(c=[String(c)]),Oi(h.i,"t",c),r.C=0,h=r.j.J,r.h=new vi,r.g=es(r.j,h?a:null,!r.m),0<r.O&&(r.M=new aa(P(r.Y,r,r.g),r.O)),a=r.U,h=r.g,c=r.ca;var v="readystatechange";Array.isArray(v)||(v&&(di[0]=v.toString()),v=di);for(var A=0;A<v.length;A++){var C=oi(h,v[A],c||a.handleEvent,!1,a.h||a);if(!C)break;a.g[C.key]=C}a=r.H?m(r.H):{},r.m?(r.u||(r.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",r.g.ea(r.A,r.u,r.m,a)):(r.u="GET",r.g.ea(r.A,r.u,null,a)),Re(),la(r.i,r.u,r.A,r.l,r.R,r.m)}xt.prototype.ca=function(r){r=r.target;const a=this.M;a&&St(r)==3?a.j():this.Y(r)},xt.prototype.Y=function(r){try{if(r==this.g)t:{const ct=St(this.g);var a=this.g.Ba();const ne=this.g.Z();if(!(3>ct)&&(ct!=3||this.g&&(this.h.h||this.g.oa()||Ki(this.g)))){this.J||ct!=4||a==7||(a==8||0>=ne?Re(3):Re(2)),hr(this);var h=this.g.Z();this.X=h;e:if(wi(this)){var c=Ki(this.g);r="";var v=c.length,A=St(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Gt(this),Ve(this);var C="";break e}this.h.i=new l.TextDecoder}for(a=0;a<v;a++)this.h.h=!0,r+=this.h.i.decode(c[a],{stream:!(A&&a==v-1)});c.length=0,this.h.g+=r,this.C=0,C=this.h.g}else C=this.g.oa();if(this.o=h==200,ca(this.i,this.u,this.A,this.l,this.R,ct,h),this.o){if(this.T&&!this.K){e:{if(this.g){var z,st=this.g;if((z=st.g?st.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Q(z)){var j=z;break e}}j=null}if(h=j)Zt(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,lr(this,h);else{this.o=!1,this.s=3,pt(12),Gt(this),Ve(this);break t}}if(this.P){h=!0;let vt;for(;!this.J&&this.C<C.length;)if(vt=ma(this,C),vt==ar){ct==4&&(this.s=4,pt(14),h=!1),Zt(this.i,this.l,null,"[Incomplete Response]");break}else if(vt==Ii){this.s=4,pt(15),Zt(this.i,this.l,C,"[Invalid Chunk]"),h=!1;break}else Zt(this.i,this.l,vt,null),lr(this,vt);if(wi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ct!=4||C.length!=0||this.h.h||(this.s=1,pt(16),h=!1),this.o=this.o&&h,!h)Zt(this.i,this.l,C,"[Invalid Chunked Response]"),Gt(this),Ve(this);else if(0<C.length&&!this.W){this.W=!0;var lt=this.j;lt.g==this&&lt.ba&&!lt.M&&(lt.j.info("Great, no buffering proxy detected. Bytes received: "+C.length),pr(lt),lt.M=!0,pt(11))}}else Zt(this.i,this.l,C,null),lr(this,C);ct==4&&Gt(this),this.o&&!this.J&&(ct==4?Yi(this.j,this):(this.o=!1,an(this)))}else ka(this.g),h==400&&0<C.indexOf("Unknown SID")?(this.s=3,pt(12)):(this.s=0,pt(13)),Gt(this),Ve(this)}}}catch{}finally{}};function wi(r){return r.g?r.u=="GET"&&r.L!=2&&r.j.Ca:!1}function ma(r,a){var h=r.C,c=a.indexOf(`
`,h);return c==-1?ar:(h=Number(a.substring(h,c)),isNaN(h)?Ii:(c+=1,c+h>a.length?ar:(a=a.slice(c,c+h),r.C=c+h,a)))}xt.prototype.cancel=function(){this.J=!0,Gt(this)};function an(r){r.S=Date.now()+r.I,Ri(r,r.I)}function Ri(r,a){if(r.B!=null)throw Error("WatchDog timer not null");r.B=Pe(P(r.ba,r),a)}function hr(r){r.B&&(l.clearTimeout(r.B),r.B=null)}xt.prototype.ba=function(){this.B=null;const r=Date.now();0<=r-this.S?(da(this.i,this.A),this.L!=2&&(Re(),pt(17)),Gt(this),this.s=2,Ve(this)):Ri(this,this.S-r)};function Ve(r){r.j.G==0||r.J||Yi(r.j,r)}function Gt(r){hr(r);var a=r.M;a&&typeof a.ma=="function"&&a.ma(),r.M=null,fi(r.U),r.g&&(a=r.g,r.g=null,a.abort(),a.ma())}function lr(r,a){try{var h=r.j;if(h.G!=0&&(h.g==r||cr(h.h,r))){if(!r.K&&cr(h.h,r)&&h.G==3){try{var c=h.Da.g.parse(a)}catch{c=null}if(Array.isArray(c)&&c.length==3){var v=c;if(v[0]==0){t:if(!h.u){if(h.g)if(h.g.F+3e3<r.F)pn(h),mn(h);else break t;gr(h),pt(18)}}else h.za=v[1],0<h.za-h.T&&37500>v[2]&&h.F&&h.v==0&&!h.C&&(h.C=Pe(P(h.Za,h),6e3));if(1>=Vi(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Qt(h,11)}else if((r.K||h.g==r)&&pn(h),!Q(a))for(v=h.Da.g.parse(a),a=0;a<v.length;a++){let j=v[a];if(h.T=j[0],j=j[1],h.G==2)if(j[0]=="c"){h.K=j[1],h.ia=j[2];const lt=j[3];lt!=null&&(h.la=lt,h.j.info("VER="+h.la));const ct=j[4];ct!=null&&(h.Aa=ct,h.j.info("SVER="+h.Aa));const ne=j[5];ne!=null&&typeof ne=="number"&&0<ne&&(c=1.5*ne,h.L=c,h.j.info("backChannelRequestTimeoutMs_="+c)),c=h;const vt=r.g;if(vt){const yn=vt.g?vt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(yn){var A=c.h;A.g||yn.indexOf("spdy")==-1&&yn.indexOf("quic")==-1&&yn.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(dr(A,A.h),A.h=null))}if(c.D){const _r=vt.g?vt.g.getResponseHeader("X-HTTP-Session-Id"):null;_r&&(c.ya=_r,K(c.I,c.D,_r))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-r.F,h.j.info("Handshake RTT: "+h.R+"ms")),c=h;var C=r;if(c.qa=ts(c,c.J?c.ia:null,c.W),C.K){Si(c.h,C);var z=C,st=c.L;st&&(z.I=st),z.B&&(hr(z),an(z)),c.g=C}else Wi(c);0<h.i.length&&gn(h)}else j[0]!="stop"&&j[0]!="close"||Qt(h,7);else h.G==3&&(j[0]=="stop"||j[0]=="close"?j[0]=="stop"?Qt(h,7):mr(h):j[0]!="noop"&&h.l&&h.l.ta(j),h.v=0)}}Re(4)}catch{}}var ga=class{constructor(r,a){this.g=r,this.map=a}};function Pi(r){this.l=r||10,l.PerformanceNavigationTiming?(r=l.performance.getEntriesByType("navigation"),r=0<r.length&&(r[0].nextHopProtocol=="hq"||r[0].nextHopProtocol=="h2")):r=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=r?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ci(r){return r.h?!0:r.g?r.g.size>=r.j:!1}function Vi(r){return r.h?1:r.g?r.g.size:0}function cr(r,a){return r.h?r.h==a:r.g?r.g.has(a):!1}function dr(r,a){r.g?r.g.add(a):r.h=a}function Si(r,a){r.h&&r.h==a?r.h=null:r.g&&r.g.has(a)&&r.g.delete(a)}Pi.prototype.cancel=function(){if(this.i=Di(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const r of this.g.values())r.cancel();this.g.clear()}};function Di(r){if(r.h!=null)return r.i.concat(r.h.D);if(r.g!=null&&r.g.size!==0){let a=r.i;for(const h of r.g.values())a=a.concat(h.D);return a}return L(r.i)}function pa(r){if(r.V&&typeof r.V=="function")return r.V();if(typeof Map<"u"&&r instanceof Map||typeof Set<"u"&&r instanceof Set)return Array.from(r.values());if(typeof r=="string")return r.split("");if(d(r)){for(var a=[],h=r.length,c=0;c<h;c++)a.push(r[c]);return a}a=[],h=0;for(c in r)a[h++]=r[c];return a}function _a(r){if(r.na&&typeof r.na=="function")return r.na();if(!r.V||typeof r.V!="function"){if(typeof Map<"u"&&r instanceof Map)return Array.from(r.keys());if(!(typeof Set<"u"&&r instanceof Set)){if(d(r)||typeof r=="string"){var a=[];r=r.length;for(var h=0;h<r;h++)a.push(h);return a}a=[],h=0;for(const c in r)a[h++]=c;return a}}}function ki(r,a){if(r.forEach&&typeof r.forEach=="function")r.forEach(a,void 0);else if(d(r)||typeof r=="string")Array.prototype.forEach.call(r,a,void 0);else for(var h=_a(r),c=pa(r),v=c.length,A=0;A<v;A++)a.call(void 0,c[A],h&&h[A],r)}var Ni=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ya(r,a){if(r){r=r.split("&");for(var h=0;h<r.length;h++){var c=r[h].indexOf("="),v=null;if(0<=c){var A=r[h].substring(0,c);v=r[h].substring(c+1)}else A=r[h];a(A,v?decodeURIComponent(v.replace(/\+/g," ")):"")}}}function $t(r){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,r instanceof $t){this.h=r.h,un(this,r.j),this.o=r.o,this.g=r.g,hn(this,r.s),this.l=r.l;var a=r.i,h=new ke;h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),bi(this,h),this.m=r.m}else r&&(a=String(r).match(Ni))?(this.h=!1,un(this,a[1]||"",!0),this.o=Se(a[2]||""),this.g=Se(a[3]||"",!0),hn(this,a[4]),this.l=Se(a[5]||"",!0),bi(this,a[6]||"",!0),this.m=Se(a[7]||"")):(this.h=!1,this.i=new ke(null,this.h))}$t.prototype.toString=function(){var r=[],a=this.j;a&&r.push(De(a,xi,!0),":");var h=this.g;return(h||a=="file")&&(r.push("//"),(a=this.o)&&r.push(De(a,xi,!0),"@"),r.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&r.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&r.push("/"),r.push(De(h,h.charAt(0)=="/"?va:Ea,!0))),(h=this.i.toString())&&r.push("?",h),(h=this.m)&&r.push("#",De(h,Aa)),r.join("")};function Vt(r){return new $t(r)}function un(r,a,h){r.j=h?Se(a,!0):a,r.j&&(r.j=r.j.replace(/:$/,""))}function hn(r,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);r.s=a}else r.s=null}function bi(r,a,h){a instanceof ke?(r.i=a,wa(r.i,r.h)):(h||(a=De(a,Ia)),r.i=new ke(a,r.h))}function K(r,a,h){r.i.set(a,h)}function ln(r){return K(r,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),r}function Se(r,a){return r?a?decodeURI(r.replace(/%25/g,"%2525")):decodeURIComponent(r):""}function De(r,a,h){return typeof r=="string"?(r=encodeURI(r).replace(a,Ta),h&&(r=r.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),r):null}function Ta(r){return r=r.charCodeAt(0),"%"+(r>>4&15).toString(16)+(r&15).toString(16)}var xi=/[#\/\?@]/g,Ea=/[#\?:]/g,va=/[#\?]/g,Ia=/[#\?@]/g,Aa=/#/g;function ke(r,a){this.h=this.g=null,this.i=r||null,this.j=!!a}function Lt(r){r.g||(r.g=new Map,r.h=0,r.i&&ya(r.i,function(a,h){r.add(decodeURIComponent(a.replace(/\+/g," ")),h)}))}i=ke.prototype,i.add=function(r,a){Lt(this),this.i=null,r=te(this,r);var h=this.g.get(r);return h||this.g.set(r,h=[]),h.push(a),this.h+=1,this};function Li(r,a){Lt(r),a=te(r,a),r.g.has(a)&&(r.i=null,r.h-=r.g.get(a).length,r.g.delete(a))}function Mi(r,a){return Lt(r),a=te(r,a),r.g.has(a)}i.forEach=function(r,a){Lt(this),this.g.forEach(function(h,c){h.forEach(function(v){r.call(a,v,c,this)},this)},this)},i.na=function(){Lt(this);const r=Array.from(this.g.values()),a=Array.from(this.g.keys()),h=[];for(let c=0;c<a.length;c++){const v=r[c];for(let A=0;A<v.length;A++)h.push(a[c])}return h},i.V=function(r){Lt(this);let a=[];if(typeof r=="string")Mi(this,r)&&(a=a.concat(this.g.get(te(this,r))));else{r=Array.from(this.g.values());for(let h=0;h<r.length;h++)a=a.concat(r[h])}return a},i.set=function(r,a){return Lt(this),this.i=null,r=te(this,r),Mi(this,r)&&(this.h-=this.g.get(r).length),this.g.set(r,[a]),this.h+=1,this},i.get=function(r,a){return r?(r=this.V(r),0<r.length?String(r[0]):a):a};function Oi(r,a,h){Li(r,a),0<h.length&&(r.i=null,r.g.set(te(r,a),L(h)),r.h+=h.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const r=[],a=Array.from(this.g.keys());for(var h=0;h<a.length;h++){var c=a[h];const A=encodeURIComponent(String(c)),C=this.V(c);for(c=0;c<C.length;c++){var v=A;C[c]!==""&&(v+="="+encodeURIComponent(String(C[c]))),r.push(v)}}return this.i=r.join("&")};function te(r,a){return a=String(a),r.j&&(a=a.toLowerCase()),a}function wa(r,a){a&&!r.j&&(Lt(r),r.i=null,r.g.forEach(function(h,c){var v=c.toLowerCase();c!=v&&(Li(this,c),Oi(this,v,h))},r)),r.j=a}function Ra(r,a){const h=new Ce;if(l.Image){const c=new Image;c.onload=V(Mt,h,"TestLoadImage: loaded",!0,a,c),c.onerror=V(Mt,h,"TestLoadImage: error",!1,a,c),c.onabort=V(Mt,h,"TestLoadImage: abort",!1,a,c),c.ontimeout=V(Mt,h,"TestLoadImage: timeout",!1,a,c),l.setTimeout(function(){c.ontimeout&&c.ontimeout()},1e4),c.src=r}else a(!1)}function Pa(r,a){const h=new Ce,c=new AbortController,v=setTimeout(()=>{c.abort(),Mt(h,"TestPingServer: timeout",!1,a)},1e4);fetch(r,{signal:c.signal}).then(A=>{clearTimeout(v),A.ok?Mt(h,"TestPingServer: ok",!0,a):Mt(h,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(v),Mt(h,"TestPingServer: error",!1,a)})}function Mt(r,a,h,c,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),c(h)}catch{}}function Ca(){this.g=new ha}function Va(r,a,h){const c=h||"";try{ki(r,function(v,A){let C=v;f(v)&&(C=nr(v)),a.push(c+A+"="+encodeURIComponent(C))})}catch(v){throw a.push(c+"type="+encodeURIComponent("_badmap")),v}}function cn(r){this.l=r.Ub||null,this.j=r.eb||!1}N(cn,rr),cn.prototype.g=function(){return new dn(this.l,this.j)},cn.prototype.i=function(r){return function(){return r}}({});function dn(r,a){ht.call(this),this.D=r,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(dn,ht),i=dn.prototype,i.open=function(r,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=r,this.A=a,this.readyState=1,be(this)},i.send=function(r){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};r&&(a.body=r),(this.D||l).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ne(this)),this.readyState=0},i.Sa=function(r){if(this.g&&(this.l=r,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=r.headers,this.readyState=2,be(this)),this.g&&(this.readyState=3,be(this),this.g)))if(this.responseType==="arraybuffer")r.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in r){if(this.j=r.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Fi(this)}else r.text().then(this.Ra.bind(this),this.ga.bind(this))};function Fi(r){r.j.read().then(r.Pa.bind(r)).catch(r.ga.bind(r))}i.Pa=function(r){if(this.g){if(this.o&&r.value)this.response.push(r.value);else if(!this.o){var a=r.value?r.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!r.done}))&&(this.response=this.responseText+=a)}r.done?Ne(this):be(this),this.readyState==3&&Fi(this)}},i.Ra=function(r){this.g&&(this.response=this.responseText=r,Ne(this))},i.Qa=function(r){this.g&&(this.response=r,Ne(this))},i.ga=function(){this.g&&Ne(this)};function Ne(r){r.readyState=4,r.l=null,r.j=null,r.v=null,be(r)}i.setRequestHeader=function(r,a){this.u.append(r,a)},i.getResponseHeader=function(r){return this.h&&this.h.get(r.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const r=[],a=this.h.entries();for(var h=a.next();!h.done;)h=h.value,r.push(h[0]+": "+h[1]),h=a.next();return r.join(`\r
`)};function be(r){r.onreadystatechange&&r.onreadystatechange.call(r)}Object.defineProperty(dn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(r){this.m=r?"include":"same-origin"}});function Ui(r){let a="";return it(r,function(h,c){a+=c,a+=":",a+=h,a+=`\r
`}),a}function fr(r,a,h){t:{for(c in h){var c=!1;break t}c=!0}c||(h=Ui(h),typeof r=="string"?h!=null&&encodeURIComponent(String(h)):K(r,a,h))}function W(r){ht.call(this),this.headers=new Map,this.o=r||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(W,ht);var Sa=/^https?$/i,Da=["POST","PUT"];i=W.prototype,i.Ha=function(r){this.J=r},i.ea=function(r,a,h,c){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+r);a=a?a.toUpperCase():"GET",this.D=r,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():or.g(),this.v=this.o?mi(this.o):mi(or),this.g.onreadystatechange=P(this.Ea,this);try{this.B=!0,this.g.open(a,String(r),!0),this.B=!1}catch(A){qi(this,A);return}if(r=h||"",h=new Map(this.headers),c)if(Object.getPrototypeOf(c)===Object.prototype)for(var v in c)h.set(v,c[v]);else if(typeof c.keys=="function"&&typeof c.get=="function")for(const A of c.keys())h.set(A,c.get(A));else throw Error("Unknown input type for opt_headers: "+String(c));c=Array.from(h.keys()).find(A=>A.toLowerCase()=="content-type"),v=l.FormData&&r instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Da,a,void 0))||c||v||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,C]of h)this.g.setRequestHeader(A,C);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{zi(this),this.u=!0,this.g.send(r),this.u=!1}catch(A){qi(this,A)}};function qi(r,a){r.h=!1,r.g&&(r.j=!0,r.g.abort(),r.j=!1),r.l=a,r.m=5,Bi(r),fn(r)}function Bi(r){r.A||(r.A=!0,gt(r,"complete"),gt(r,"error"))}i.abort=function(r){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=r||7,gt(this,"complete"),gt(this,"abort"),fn(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),fn(this,!0)),W.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?ji(this):this.bb())},i.bb=function(){ji(this)};function ji(r){if(r.h&&typeof u<"u"&&(!r.v[1]||St(r)!=4||r.Z()!=2)){if(r.u&&St(r)==4)li(r.Ea,0,r);else if(gt(r,"readystatechange"),St(r)==4){r.h=!1;try{const C=r.Z();t:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var h;if(!(h=a)){var c;if(c=C===0){var v=String(r.D).match(Ni)[1]||null;!v&&l.self&&l.self.location&&(v=l.self.location.protocol.slice(0,-1)),c=!Sa.test(v?v.toLowerCase():"")}h=c}if(h)gt(r,"complete"),gt(r,"success");else{r.m=6;try{var A=2<St(r)?r.g.statusText:""}catch{A=""}r.l=A+" ["+r.Z()+"]",Bi(r)}}finally{fn(r)}}}}function fn(r,a){if(r.g){zi(r);const h=r.g,c=r.v[0]?()=>{}:null;r.g=null,r.v=null,a||gt(r,"ready");try{h.onreadystatechange=c}catch{}}}function zi(r){r.I&&(l.clearTimeout(r.I),r.I=null)}i.isActive=function(){return!!this.g};function St(r){return r.g?r.g.readyState:0}i.Z=function(){try{return 2<St(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(r){if(this.g){var a=this.g.responseText;return r&&a.indexOf(r)==0&&(a=a.substring(r.length)),ua(a)}};function Ki(r){try{if(!r.g)return null;if("response"in r.g)return r.g.response;switch(r.H){case"":case"text":return r.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in r.g)return r.g.mozResponseArrayBuffer}return null}catch{return null}}function ka(r){const a={};r=(r.g&&2<=St(r)&&r.g.getAllResponseHeaders()||"").split(`\r
`);for(let c=0;c<r.length;c++){if(Q(r[c]))continue;var h=T(r[c]);const v=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const A=a[v]||[];a[v]=A,A.push(h)}E(a,function(c){return c.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function xe(r,a,h){return h&&h.internalChannelParams&&h.internalChannelParams[r]||a}function Gi(r){this.Aa=0,this.i=[],this.j=new Ce,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=xe("failFast",!1,r),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=xe("baseRetryDelayMs",5e3,r),this.cb=xe("retryDelaySeedMs",1e4,r),this.Wa=xe("forwardChannelMaxRetries",2,r),this.wa=xe("forwardChannelRequestTimeoutMs",2e4,r),this.pa=r&&r.xmlHttpFactory||void 0,this.Xa=r&&r.Tb||void 0,this.Ca=r&&r.useFetchStreams||!1,this.L=void 0,this.J=r&&r.supportsCrossDomainXhr||!1,this.K="",this.h=new Pi(r&&r.concurrentRequestLimit),this.Da=new Ca,this.P=r&&r.fastHandshake||!1,this.O=r&&r.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=r&&r.Rb||!1,r&&r.xa&&this.j.xa(),r&&r.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&r&&r.detectBufferingProxy||!1,this.ja=void 0,r&&r.longPollingTimeout&&0<r.longPollingTimeout&&(this.ja=r.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=Gi.prototype,i.la=8,i.G=1,i.connect=function(r,a,h,c){pt(0),this.W=r,this.H=a||{},h&&c!==void 0&&(this.H.OSID=h,this.H.OAID=c),this.F=this.X,this.I=ts(this,null,this.W),gn(this)};function mr(r){if($i(r),r.G==3){var a=r.U++,h=Vt(r.I);if(K(h,"SID",r.K),K(h,"RID",a),K(h,"TYPE","terminate"),Le(r,h),a=new xt(r,r.j,a),a.L=2,a.v=ln(Vt(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(a.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=a.v,h=!0),h||(a.g=es(a.j,null),a.g.ea(a.v)),a.F=Date.now(),an(a)}Zi(r)}function mn(r){r.g&&(pr(r),r.g.cancel(),r.g=null)}function $i(r){mn(r),r.u&&(l.clearTimeout(r.u),r.u=null),pn(r),r.h.cancel(),r.s&&(typeof r.s=="number"&&l.clearTimeout(r.s),r.s=null)}function gn(r){if(!Ci(r.h)&&!r.s){r.s=!0;var a=r.Ga;Ee||si(),ve||(Ee(),ve=!0),Hn.add(a,r),r.B=0}}function Na(r,a){return Vi(r.h)>=r.h.j-(r.s?1:0)?!1:r.s?(r.i=a.D.concat(r.i),!0):r.G==1||r.G==2||r.B>=(r.Va?0:r.Wa)?!1:(r.s=Pe(P(r.Ga,r,a),Ji(r,r.B)),r.B++,!0)}i.Ga=function(r){if(this.s)if(this.s=null,this.G==1){if(!r){this.U=Math.floor(1e5*Math.random()),r=this.U++;const v=new xt(this,this.j,r);let A=this.o;if(this.S&&(A?(A=m(A),y(A,this.S)):A=this.S),this.m!==null||this.O||(v.H=A,A=null),this.P)t:{for(var a=0,h=0;h<this.i.length;h++){e:{var c=this.i[h];if("__data__"in c.map&&(c=c.map.__data__,typeof c=="string")){c=c.length;break e}c=void 0}if(c===void 0)break;if(a+=c,4096<a){a=h;break t}if(a===4096||h===this.i.length-1){a=h+1;break t}}a=1e3}else a=1e3;a=Hi(this,v,a),h=Vt(this.I),K(h,"RID",r),K(h,"CVER",22),this.D&&K(h,"X-HTTP-Session-Id",this.D),Le(this,h),A&&(this.O?a="headers="+encodeURIComponent(String(Ui(A)))+"&"+a:this.m&&fr(h,this.m,A)),dr(this.h,v),this.Ua&&K(h,"TYPE","init"),this.P?(K(h,"$req",a),K(h,"SID","null"),v.T=!0,ur(v,h,null)):ur(v,h,a),this.G=2}}else this.G==3&&(r?Qi(this,r):this.i.length==0||Ci(this.h)||Qi(this))};function Qi(r,a){var h;a?h=a.l:h=r.U++;const c=Vt(r.I);K(c,"SID",r.K),K(c,"RID",h),K(c,"AID",r.T),Le(r,c),r.m&&r.o&&fr(c,r.m,r.o),h=new xt(r,r.j,h,r.B+1),r.m===null&&(h.H=r.o),a&&(r.i=a.D.concat(r.i)),a=Hi(r,h,1e3),h.I=Math.round(.5*r.wa)+Math.round(.5*r.wa*Math.random()),dr(r.h,h),ur(h,c,a)}function Le(r,a){r.H&&it(r.H,function(h,c){K(a,c,h)}),r.l&&ki({},function(h,c){K(a,c,h)})}function Hi(r,a,h){h=Math.min(r.i.length,h);var c=r.l?P(r.l.Na,r.l,r):null;t:{var v=r.i;let A=-1;for(;;){const C=["count="+h];A==-1?0<h?(A=v[0].g,C.push("ofs="+A)):A=0:C.push("ofs="+A);let z=!0;for(let st=0;st<h;st++){let j=v[st].g;const lt=v[st].map;if(j-=A,0>j)A=Math.max(0,v[st].g-100),z=!1;else try{Va(lt,C,"req"+j+"_")}catch{c&&c(lt)}}if(z){c=C.join("&");break t}}}return r=r.i.splice(0,h),a.D=r,c}function Wi(r){if(!r.g&&!r.u){r.Y=1;var a=r.Fa;Ee||si(),ve||(Ee(),ve=!0),Hn.add(a,r),r.v=0}}function gr(r){return r.g||r.u||3<=r.v?!1:(r.Y++,r.u=Pe(P(r.Fa,r),Ji(r,r.v)),r.v++,!0)}i.Fa=function(){if(this.u=null,Xi(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var r=2*this.R;this.j.info("BP detection timer enabled: "+r),this.A=Pe(P(this.ab,this),r)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,pt(10),mn(this),Xi(this))};function pr(r){r.A!=null&&(l.clearTimeout(r.A),r.A=null)}function Xi(r){r.g=new xt(r,r.j,"rpc",r.Y),r.m===null&&(r.g.H=r.o),r.g.O=0;var a=Vt(r.qa);K(a,"RID","rpc"),K(a,"SID",r.K),K(a,"AID",r.T),K(a,"CI",r.F?"0":"1"),!r.F&&r.ja&&K(a,"TO",r.ja),K(a,"TYPE","xmlhttp"),Le(r,a),r.m&&r.o&&fr(a,r.m,r.o),r.L&&(r.g.I=r.L);var h=r.g;r=r.ia,h.L=1,h.v=ln(Vt(a)),h.m=null,h.P=!0,Ai(h,r)}i.Za=function(){this.C!=null&&(this.C=null,mn(this),gr(this),pt(19))};function pn(r){r.C!=null&&(l.clearTimeout(r.C),r.C=null)}function Yi(r,a){var h=null;if(r.g==a){pn(r),pr(r),r.g=null;var c=2}else if(cr(r.h,a))h=a.D,Si(r.h,a),c=1;else return;if(r.G!=0){if(a.o)if(c==1){h=a.m?a.m.length:0,a=Date.now()-a.F;var v=r.B;c=rn(),gt(c,new Ti(c,h)),gn(r)}else Wi(r);else if(v=a.s,v==3||v==0&&0<a.X||!(c==1&&Na(r,a)||c==2&&gr(r)))switch(h&&0<h.length&&(a=r.h,a.i=a.i.concat(h)),v){case 1:Qt(r,5);break;case 4:Qt(r,10);break;case 3:Qt(r,6);break;default:Qt(r,2)}}}function Ji(r,a){let h=r.Ta+Math.floor(Math.random()*r.cb);return r.isActive()||(h*=2),h*a}function Qt(r,a){if(r.j.info("Error code "+a),a==2){var h=P(r.fb,r),c=r.Xa;const v=!c;c=new $t(c||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||un(c,"https"),ln(c),v?Ra(c.toString(),h):Pa(c.toString(),h)}else pt(2);r.G=0,r.l&&r.l.sa(a),Zi(r),$i(r)}i.fb=function(r){r?(this.j.info("Successfully pinged google.com"),pt(2)):(this.j.info("Failed to ping google.com"),pt(1))};function Zi(r){if(r.G=0,r.ka=[],r.l){const a=Di(r.h);(a.length!=0||r.i.length!=0)&&(k(r.ka,a),k(r.ka,r.i),r.h.i.length=0,L(r.i),r.i.length=0),r.l.ra()}}function ts(r,a,h){var c=h instanceof $t?Vt(h):new $t(h);if(c.g!="")a&&(c.g=a+"."+c.g),hn(c,c.s);else{var v=l.location;c=v.protocol,a=a?a+"."+v.hostname:v.hostname,v=+v.port;var A=new $t(null);c&&un(A,c),a&&(A.g=a),v&&hn(A,v),h&&(A.l=h),c=A}return h=r.D,a=r.ya,h&&a&&K(c,h,a),K(c,"VER",r.la),Le(r,c),c}function es(r,a,h){if(a&&!r.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=r.Ca&&!r.pa?new W(new cn({eb:h})):new W(r.pa),a.Ha(r.J),a}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function ns(){}i=ns.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function _n(){}_n.prototype.g=function(r,a){return new Et(r,a)};function Et(r,a){ht.call(this),this.g=new Gi(a),this.l=r,this.h=a&&a.messageUrlParams||null,r=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(r?r["X-Client-Protocol"]="webchannel":r={"X-Client-Protocol":"webchannel"}),this.g.o=r,r=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(r?r["X-WebChannel-Content-Type"]=a.messageContentType:r={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(r?r["X-WebChannel-Client-Profile"]=a.va:r={"X-WebChannel-Client-Profile":a.va}),this.g.S=r,(r=a&&a.Sb)&&!Q(r)&&(this.g.m=r),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!Q(a)&&(this.g.D=a,r=this.h,r!==null&&a in r&&(r=this.h,a in r&&delete r[a])),this.j=new ee(this)}N(Et,ht),Et.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Et.prototype.close=function(){mr(this.g)},Et.prototype.o=function(r){var a=this.g;if(typeof r=="string"){var h={};h.__data__=r,r=h}else this.u&&(h={},h.__data__=nr(r),r=h);a.i.push(new ga(a.Ya++,r)),a.G==3&&gn(a)},Et.prototype.N=function(){this.g.l=null,delete this.j,mr(this.g),delete this.g,Et.aa.N.call(this)};function rs(r){ir.call(this),r.__headers__&&(this.headers=r.__headers__,this.statusCode=r.__status__,delete r.__headers__,delete r.__status__);var a=r.__sm__;if(a){t:{for(const h in a){r=h;break t}r=void 0}(this.i=r)&&(r=this.i,a=a!==null&&r in a?a[r]:void 0),this.data=a}else this.data=r}N(rs,ir);function is(){sr.call(this),this.status=1}N(is,sr);function ee(r){this.g=r}N(ee,ns),ee.prototype.ua=function(){gt(this.g,"a")},ee.prototype.ta=function(r){gt(this.g,new rs(r))},ee.prototype.sa=function(r){gt(this.g,new is)},ee.prototype.ra=function(){gt(this.g,"b")},_n.prototype.createWebChannel=_n.prototype.g,Et.prototype.send=Et.prototype.o,Et.prototype.open=Et.prototype.m,Et.prototype.close=Et.prototype.close,eo=function(){return new _n},to=function(){return rn()},Zs=Kt,Ar={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},sn.NO_ERROR=0,sn.TIMEOUT=8,sn.HTTP_ERROR=6,An=sn,Ei.COMPLETE="complete",Js=Ei,gi.EventType=we,we.OPEN="a",we.CLOSE="b",we.ERROR="c",we.MESSAGE="d",ht.prototype.listen=ht.prototype.K,Me=gi,W.prototype.listenOnce=W.prototype.L,W.prototype.getLastError=W.prototype.Ka,W.prototype.getLastErrorCode=W.prototype.Ba,W.prototype.getStatus=W.prototype.Z,W.prototype.getResponseJson=W.prototype.Oa,W.prototype.getResponseText=W.prototype.oa,W.prototype.send=W.prototype.ea,W.prototype.setWithCredentials=W.prototype.Ha,Ys=W}).apply(typeof Tn<"u"?Tn:typeof self<"u"?self:typeof window<"u"?window:{});const as="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ft.UNAUTHENTICATED=new ft(null),ft.GOOGLE_CREDENTIALS=new ft("google-credentials-uid"),ft.FIRST_PARTY=new ft("first-party-uid"),ft.MOCK_USER=new ft("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pe="11.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt=new ba("@firebase/firestore");function re(){return Yt.logLevel}function D(i,...t){if(Yt.logLevel<=Dt.DEBUG){const e=t.map(Ur);Yt.debug(`Firestore (${pe}): ${i}`,...e)}}function Nt(i,...t){if(Yt.logLevel<=Dt.ERROR){const e=t.map(Ur);Yt.error(`Firestore (${pe}): ${i}`,...e)}}function le(i,...t){if(Yt.logLevel<=Dt.WARN){const e=t.map(Ur);Yt.warn(`Firestore (${pe}): ${i}`,...e)}}function Ur(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(i="Unexpected state"){const t=`FIRESTORE (${pe}) INTERNAL ASSERTION FAILED: `+i;throw Nt(t),new Error(t)}function $(i,t){i||O()}function U(i,t){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class b extends Ua{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Ka{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(ft.UNAUTHENTICATED))}shutdown(){}}class Ga{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class $a{constructor(t){this.t=t,this.currentUser=ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){$(this.o===void 0);let n=this.i;const s=d=>this.i!==n?(n=this.i,e(d)):Promise.resolve();let o=new ae;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new ae,t.enqueueRetryable(()=>s(this.currentUser))};const u=()=>{const d=o;t.enqueueRetryable(async()=>{await d.promise,await s(this.currentUser)})},l=d=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(d=>l(d)),setTimeout(()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?l(d):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new ae)}},0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?($(typeof n.accessToken=="string"),new no(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return $(t===null||typeof t=="string"),new ft(t)}}class Qa{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=ft.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Ha{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new Qa(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Wa{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Xa{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){$(this.o===void 0);const n=o=>{o.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.R;return this.R=o.token,D("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>n(o))};const s=o=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?($(typeof e.token=="string"),this.R=e.token,new Wa(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ya(i){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(i);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<i;n++)e[n]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const s=Ya(40);for(let o=0;o<s.length;++o)n.length<20&&s[o]<e&&(n+=t.charAt(s[o]%t.length))}return n}}function q(i,t){return i<t?-1:i>t?1:0}function ce(i,t,e){return i.length===t.length&&i.every((n,s)=>e(n,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new b(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new b(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new b(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new b(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Tt.fromMillis(Date.now())}static fromDate(t){return Tt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new Tt(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?q(this.nanoseconds,t.nanoseconds):q(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t){this.timestamp=t}static fromTimestamp(t){return new M(t)}static min(){return new M(new Tt(0,0))}static max(){return new M(new Tt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(t,e,n){e===void 0?e=0:e>t.length&&O(),n===void 0?n=t.length-e:n>t.length-e&&O(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return Ke.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ke?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const o=t.get(s),u=e.get(s);if(o<u)return-1;if(o>u)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class X extends Ke{construct(t,e,n){return new X(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new b(S.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(s=>s.length>0))}return new X(e)}static emptyPath(){return new X([])}}const Ja=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class _t extends Ke{construct(t,e,n){return new _t(t,e,n)}static isValidIdentifier(t){return Ja.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_t.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new _t(["__name__"])}static fromServerFormat(t){const e=[];let n="",s=0;const o=()=>{if(n.length===0)throw new b(S.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let u=!1;for(;s<t.length;){const l=t[s];if(l==="\\"){if(s+1===t.length)throw new b(S.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const d=t[s+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new b(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=d,s+=2}else l==="`"?(u=!u,s++):l!=="."||u?(n+=l,s++):(o(),s++)}if(o(),u)throw new b(S.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new _t(e)}static emptyPath(){return new _t([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(t){this.path=t}static fromPath(t){return new x(X.fromString(t))}static fromName(t){return new x(X.fromString(t).popFirst(5))}static empty(){return new x(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&X.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return X.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new x(new X(t.slice()))}}function Za(i,t){const e=i.toTimestamp().seconds,n=i.toTimestamp().nanoseconds+1,s=M.fromTimestamp(n===1e9?new Tt(e+1,0):new Tt(e,n));return new Ut(s,x.empty(),t)}function tu(i){return new Ut(i.readTime,i.key,-1)}class Ut{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Ut(M.min(),x.empty(),-1)}static max(){return new Ut(M.max(),x.empty(),-1)}}function eu(i,t){let e=i.readTime.compareTo(t.readTime);return e!==0?e:(e=x.comparator(i.documentKey,t.documentKey),e!==0?e:q(i.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nu="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ru{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mn(i){if(i.code!==S.FAILED_PRECONDITION||i.message!==nu)throw i;D("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&O(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new R((n,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(n,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(n,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof R?e:R.resolve(e)}catch(e){return R.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):R.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):R.reject(e)}static resolve(t){return new R((e,n)=>{e(t)})}static reject(t){return new R((e,n)=>{n(t)})}static waitFor(t){return new R((e,n)=>{let s=0,o=0,u=!1;t.forEach(l=>{++s,l.next(()=>{++o,u&&o===s&&e()},d=>n(d))}),u=!0,o===s&&e()})}static or(t){let e=R.resolve(!1);for(const n of t)e=e.next(s=>s?R.resolve(s):n());return e}static forEach(t,e){const n=[];return t.forEach((s,o)=>{n.push(e.call(this,s,o))}),this.waitFor(n)}static mapArray(t,e){return new R((n,s)=>{const o=t.length,u=new Array(o);let l=0;for(let d=0;d<o;d++){const f=d;e(t[f]).next(_=>{u[f]=_,++l,l===o&&n(u)},_=>s(_))}})}static doWhile(t,e){return new R((n,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):n()};o()})}}function iu(i){const t=i.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function _e(i){return i.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.ie(n),this.se=n=>e.writeSequenceNumber(n))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}On.oe=-1;function Fn(i){return i==null}function wr(i){return i===0&&1/i==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function su(i){let t="";for(let e=0;e<i.length;e++)t.length>0&&(t=us(t)),t=ou(i.get(e),t);return us(t)}function ou(i,t){let e=t;const n=i.length;for(let s=0;s<n;s++){const o=i.charAt(s);switch(o){case"\0":e+="";break;case"":e+="";break;default:e+=o}}return e}function us(i){return i+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(i){let t=0;for(const e in i)Object.prototype.hasOwnProperty.call(i,e)&&t++;return t}function We(i,t){for(const e in i)Object.prototype.hasOwnProperty.call(i,e)&&t(e,i[e])}function au(i){for(const t in i)if(Object.prototype.hasOwnProperty.call(i,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t,e){this.comparator=t,this.root=e||ot.EMPTY}insert(t,e){return new J(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ot.BLACK,null,null))}remove(t){return new J(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ot.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new En(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new En(this.root,t,this.comparator,!1)}getReverseIterator(){return new En(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new En(this.root,t,this.comparator,!0)}}class En{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?n(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ot{constructor(t,e,n,s,o){this.key=t,this.value=e,this.color=n??ot.RED,this.left=s??ot.EMPTY,this.right=o??ot.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,o){return new ot(t??this.key,e??this.value,n??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const o=n(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,n),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ot.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return ot.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw O();const t=this.left.check();if(t!==this.right.check())throw O();return t+(this.isRed()?0:1)}}ot.EMPTY=null,ot.RED=!0,ot.BLACK=!1;ot.EMPTY=new class{constructor(){this.size=0}get key(){throw O()}get value(){throw O()}get color(){throw O()}get left(){throw O()}get right(){throw O()}copy(t,e,n,s,o){return this}insert(t,e,n){return new ot(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(t){this.comparator=t,this.data=new J(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ls(this.data.getIterator())}getIteratorFrom(t){return new ls(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof rt)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=n.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new rt(this.comparator);return e.data=t,e}}class ls{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(t){this.fields=t,t.sort(_t.comparator)}static empty(){return new Ot([])}unionWith(t){let e=new rt(_t.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Ot(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return ce(this.fields,t.fields,(e,n)=>e.isEqual(n))}}/**
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
 */class io extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new io("Invalid base64 string: "+o):o}}(t);return new at(e)}static fromUint8Array(t){const e=function(s){let o="";for(let u=0;u<s.length;++u)o+=String.fromCharCode(s[u]);return o}(t);return new at(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return q(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}at.EMPTY_BYTE_STRING=new at("");const uu=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function qt(i){if($(!!i),typeof i=="string"){let t=0;const e=uu.exec(i);if($(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const n=new Date(i);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:Y(i.seconds),nanos:Y(i.nanos)}}function Y(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function Bt(i){return typeof i=="string"?at.fromBase64String(i):at.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qr(i){var t,e;return((e=(((t=i==null?void 0:i.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function Un(i){const t=i.mapValue.fields.__previous_value__;return qr(t)?Un(t):t}function Ge(i){const t=qt(i.mapValue.fields.__local_write_time__.timestampValue);return new Tt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(t,e,n,s,o,u,l,d,f){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=l,this.longPollingOptions=d,this.useFetchStreams=f}}class $e{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new $e("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof $e&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function jt(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?qr(i)?4:cu(i)?9007199254740991:lu(i)?10:11:O()}function wt(i,t){if(i===t)return!0;const e=jt(i);if(e!==jt(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===t.booleanValue;case 4:return Ge(i).isEqual(Ge(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const u=qt(s.timestampValue),l=qt(o.timestampValue);return u.seconds===l.seconds&&u.nanos===l.nanos}(i,t);case 5:return i.stringValue===t.stringValue;case 6:return function(s,o){return Bt(s.bytesValue).isEqual(Bt(o.bytesValue))}(i,t);case 7:return i.referenceValue===t.referenceValue;case 8:return function(s,o){return Y(s.geoPointValue.latitude)===Y(o.geoPointValue.latitude)&&Y(s.geoPointValue.longitude)===Y(o.geoPointValue.longitude)}(i,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return Y(s.integerValue)===Y(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const u=Y(s.doubleValue),l=Y(o.doubleValue);return u===l?wr(u)===wr(l):isNaN(u)&&isNaN(l)}return!1}(i,t);case 9:return ce(i.arrayValue.values||[],t.arrayValue.values||[],wt);case 10:case 11:return function(s,o){const u=s.mapValue.fields||{},l=o.mapValue.fields||{};if(hs(u)!==hs(l))return!1;for(const d in u)if(u.hasOwnProperty(d)&&(l[d]===void 0||!wt(u[d],l[d])))return!1;return!0}(i,t);default:return O()}}function Qe(i,t){return(i.values||[]).find(e=>wt(e,t))!==void 0}function de(i,t){if(i===t)return 0;const e=jt(i),n=jt(t);if(e!==n)return q(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return q(i.booleanValue,t.booleanValue);case 2:return function(o,u){const l=Y(o.integerValue||o.doubleValue),d=Y(u.integerValue||u.doubleValue);return l<d?-1:l>d?1:l===d?0:isNaN(l)?isNaN(d)?0:-1:1}(i,t);case 3:return cs(i.timestampValue,t.timestampValue);case 4:return cs(Ge(i),Ge(t));case 5:return q(i.stringValue,t.stringValue);case 6:return function(o,u){const l=Bt(o),d=Bt(u);return l.compareTo(d)}(i.bytesValue,t.bytesValue);case 7:return function(o,u){const l=o.split("/"),d=u.split("/");for(let f=0;f<l.length&&f<d.length;f++){const _=q(l[f],d[f]);if(_!==0)return _}return q(l.length,d.length)}(i.referenceValue,t.referenceValue);case 8:return function(o,u){const l=q(Y(o.latitude),Y(u.latitude));return l!==0?l:q(Y(o.longitude),Y(u.longitude))}(i.geoPointValue,t.geoPointValue);case 9:return ds(i.arrayValue,t.arrayValue);case 10:return function(o,u){var l,d,f,_;const w=o.fields||{},P=u.fields||{},V=(l=w.value)===null||l===void 0?void 0:l.arrayValue,N=(d=P.value)===null||d===void 0?void 0:d.arrayValue,L=q(((f=V==null?void 0:V.values)===null||f===void 0?void 0:f.length)||0,((_=N==null?void 0:N.values)===null||_===void 0?void 0:_.length)||0);return L!==0?L:ds(V,N)}(i.mapValue,t.mapValue);case 11:return function(o,u){if(o===vn.mapValue&&u===vn.mapValue)return 0;if(o===vn.mapValue)return 1;if(u===vn.mapValue)return-1;const l=o.fields||{},d=Object.keys(l),f=u.fields||{},_=Object.keys(f);d.sort(),_.sort();for(let w=0;w<d.length&&w<_.length;++w){const P=q(d[w],_[w]);if(P!==0)return P;const V=de(l[d[w]],f[_[w]]);if(V!==0)return V}return q(d.length,_.length)}(i.mapValue,t.mapValue);default:throw O()}}function cs(i,t){if(typeof i=="string"&&typeof t=="string"&&i.length===t.length)return q(i,t);const e=qt(i),n=qt(t),s=q(e.seconds,n.seconds);return s!==0?s:q(e.nanos,n.nanos)}function ds(i,t){const e=i.values||[],n=t.values||[];for(let s=0;s<e.length&&s<n.length;++s){const o=de(e[s],n[s]);if(o)return o}return q(e.length,n.length)}function fe(i){return Rr(i)}function Rr(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(e){const n=qt(e);return`time(${n.seconds},${n.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(e){return Bt(e).toBase64()}(i.bytesValue):"referenceValue"in i?function(e){return x.fromName(e).toString()}(i.referenceValue):"geoPointValue"in i?function(e){return`geo(${e.latitude},${e.longitude})`}(i.geoPointValue):"arrayValue"in i?function(e){let n="[",s=!0;for(const o of e.values||[])s?s=!1:n+=",",n+=Rr(o);return n+"]"}(i.arrayValue):"mapValue"in i?function(e){const n=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const u of n)o?o=!1:s+=",",s+=`${u}:${Rr(e.fields[u])}`;return s+"}"}(i.mapValue):O()}function wn(i){switch(jt(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Un(i);return t?16+wn(t):16;case 5:return 2*i.stringValue.length;case 6:return Bt(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((s,o)=>s+wn(o),0)}(i.arrayValue);case 10:case 11:return function(n){let s=0;return We(n.fields,(o,u)=>{s+=o.length+wn(u)}),s}(i.mapValue);default:throw O()}}function Pr(i){return!!i&&"integerValue"in i}function Br(i){return!!i&&"arrayValue"in i}function fs(i){return!!i&&"nullValue"in i}function ms(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function yr(i){return!!i&&"mapValue"in i}function lu(i){var t,e;return((e=(((t=i==null?void 0:i.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function qe(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const t={mapValue:{fields:{}}};return We(i.mapValue.fields,(e,n)=>t.mapValue.fields[e]=qe(n)),t}if(i.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(i.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=qe(i.arrayValue.values[e]);return t}return Object.assign({},i)}function cu(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t){this.value=t}static empty(){return new It({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!yr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=qe(e)}setAll(t){let e=_t.emptyPath(),n={},s=[];t.forEach((u,l)=>{if(!e.isImmediateParentOf(l)){const d=this.getFieldsMap(e);this.applyChanges(d,n,s),n={},s=[],e=l.popLast()}u?n[l.lastSegment()]=qe(u):s.push(l.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,n,s)}delete(t){const e=this.field(t.popLast());yr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return wt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];yr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){We(e,(s,o)=>t[s]=o);for(const s of n)delete t[s]}clone(){return new It(qe(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(t,e,n,s,o,u,l){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.createTime=o,this.data=u,this.documentState=l}static newInvalidDocument(t){return new mt(t,0,M.min(),M.min(),M.min(),It.empty(),0)}static newFoundDocument(t,e,n,s){return new mt(t,1,e,M.min(),n,s,0)}static newNoDocument(t,e){return new mt(t,2,e,M.min(),M.min(),It.empty(),0)}static newUnknownDocument(t,e){return new mt(t,3,e,M.min(),M.min(),It.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(M.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=M.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof mt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new mt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Sn{constructor(t,e){this.position=t,this.inclusive=e}}function gs(i,t,e){let n=0;for(let s=0;s<i.position.length;s++){const o=t[s],u=i.position[s];if(o.field.isKeyField()?n=x.comparator(x.fromName(u.referenceValue),e.key):n=de(u,e.data.field(o.field)),o.dir==="desc"&&(n*=-1),n!==0)break}return n}function ps(i,t){if(i===null)return t===null;if(t===null||i.inclusive!==t.inclusive||i.position.length!==t.position.length)return!1;for(let e=0;e<i.position.length;e++)if(!wt(i.position[e],t.position[e]))return!1;return!0}/**
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
 */class Dn{constructor(t,e="asc"){this.field=t,this.dir=e}}function du(i,t){return i.dir===t.dir&&i.field.isEqual(t.field)}/**
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
 */class so{}class tt extends so{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new mu(t,e,n):e==="array-contains"?new _u(t,n):e==="in"?new yu(t,n):e==="not-in"?new Tu(t,n):e==="array-contains-any"?new Eu(t,n):new tt(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new gu(t,n):new pu(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(de(e,this.value)):e!==null&&jt(this.value)===jt(e)&&this.matchesComparison(de(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return O()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Rt extends so{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Rt(t,e)}matches(t){return oo(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function oo(i){return i.op==="and"}function ao(i){return fu(i)&&oo(i)}function fu(i){for(const t of i.filters)if(t instanceof Rt)return!1;return!0}function Cr(i){if(i instanceof tt)return i.field.canonicalString()+i.op.toString()+fe(i.value);if(ao(i))return i.filters.map(t=>Cr(t)).join(",");{const t=i.filters.map(e=>Cr(e)).join(",");return`${i.op}(${t})`}}function uo(i,t){return i instanceof tt?function(n,s){return s instanceof tt&&n.op===s.op&&n.field.isEqual(s.field)&&wt(n.value,s.value)}(i,t):i instanceof Rt?function(n,s){return s instanceof Rt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((o,u,l)=>o&&uo(u,s.filters[l]),!0):!1}(i,t):void O()}function ho(i){return i instanceof tt?function(e){return`${e.field.canonicalString()} ${e.op} ${fe(e.value)}`}(i):i instanceof Rt?function(e){return e.op.toString()+" {"+e.getFilters().map(ho).join(" ,")+"}"}(i):"Filter"}class mu extends tt{constructor(t,e,n){super(t,e,n),this.key=x.fromName(n.referenceValue)}matches(t){const e=x.comparator(t.key,this.key);return this.matchesComparison(e)}}class gu extends tt{constructor(t,e){super(t,"in",e),this.keys=lo("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class pu extends tt{constructor(t,e){super(t,"not-in",e),this.keys=lo("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function lo(i,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(n=>x.fromName(n.referenceValue))}class _u extends tt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Br(e)&&Qe(e.arrayValue,this.value)}}class yu extends tt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Qe(this.value.arrayValue,e)}}class Tu extends tt{constructor(t,e){super(t,"not-in",e)}matches(t){if(Qe(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Qe(this.value.arrayValue,e)}}class Eu extends tt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Br(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>Qe(this.value.arrayValue,n))}}/**
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
 */class vu{constructor(t,e=null,n=[],s=[],o=null,u=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=o,this.startAt=u,this.endAt=l,this.ue=null}}function _s(i,t=null,e=[],n=[],s=null,o=null,u=null){return new vu(i,t,e,n,s,o,u)}function jr(i){const t=U(i);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>Cr(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(o){return o.field.canonicalString()+o.dir}(n)).join(","),Fn(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>fe(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>fe(n)).join(",")),t.ue=e}return t.ue}function zr(i,t){if(i.limit!==t.limit||i.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<i.orderBy.length;e++)if(!du(i.orderBy[e],t.orderBy[e]))return!1;if(i.filters.length!==t.filters.length)return!1;for(let e=0;e<i.filters.length;e++)if(!uo(i.filters[e],t.filters[e]))return!1;return i.collectionGroup===t.collectionGroup&&!!i.path.isEqual(t.path)&&!!ps(i.startAt,t.startAt)&&ps(i.endAt,t.endAt)}function Vr(i){return x.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(t,e=null,n=[],s=[],o=null,u="F",l=null,d=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=o,this.limitType=u,this.startAt=l,this.endAt=d,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Iu(i,t,e,n,s,o,u,l){return new qn(i,t,e,n,s,o,u,l)}function Kr(i){return new qn(i)}function ys(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function Au(i){return i.collectionGroup!==null}function Be(i){const t=U(i);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let l=new rt(_t.comparator);return u.filters.forEach(d=>{d.getFlattenedFilters().forEach(f=>{f.isInequality()&&(l=l.add(f.field))})}),l})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new Dn(o,n))}),e.has(_t.keyField().canonicalString())||t.ce.push(new Dn(_t.keyField(),n))}return t.ce}function At(i){const t=U(i);return t.le||(t.le=wu(t,Be(i))),t.le}function wu(i,t){if(i.limitType==="F")return _s(i.path,i.collectionGroup,t,i.filters,i.limit,i.startAt,i.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new Dn(s.field,o)});const e=i.endAt?new Sn(i.endAt.position,i.endAt.inclusive):null,n=i.startAt?new Sn(i.startAt.position,i.startAt.inclusive):null;return _s(i.path,i.collectionGroup,t,i.filters,i.limit,e,n)}}function Sr(i,t,e){return new qn(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),t,e,i.startAt,i.endAt)}function Bn(i,t){return zr(At(i),At(t))&&i.limitType===t.limitType}function co(i){return`${jr(At(i))}|lt:${i.limitType}`}function ie(i){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>ho(s)).join(", ")}]`),Fn(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>fe(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>fe(s)).join(",")),`Target(${n})`}(At(i))}; limitType=${i.limitType})`}function jn(i,t){return t.isFoundDocument()&&function(n,s){const o=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(o):x.isDocumentKey(n.path)?n.path.isEqual(o):n.path.isImmediateParentOf(o)}(i,t)&&function(n,s){for(const o of Be(n))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(i,t)&&function(n,s){for(const o of n.filters)if(!o.matches(s))return!1;return!0}(i,t)&&function(n,s){return!(n.startAt&&!function(u,l,d){const f=gs(u,l,d);return u.inclusive?f<=0:f<0}(n.startAt,Be(n),s)||n.endAt&&!function(u,l,d){const f=gs(u,l,d);return u.inclusive?f>=0:f>0}(n.endAt,Be(n),s))}(i,t)}function Ru(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function fo(i){return(t,e)=>{let n=!1;for(const s of Be(i)){const o=Pu(s,t,e);if(o!==0)return o;n=n||s.field.isKeyField()}return 0}}function Pu(i,t,e){const n=i.field.isKeyField()?x.comparator(t.key,e.key):function(o,u,l){const d=u.data.field(o),f=l.data.field(o);return d!==null&&f!==null?de(d,f):O()}(i.field,t,e);switch(i.dir){case"asc":return n;case"desc":return-1*n;default:return O()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[s,o]of n)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return n.length===1?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){We(this.inner,(e,n)=>{for(const[s,o]of n)t(s,o)})}isEmpty(){return au(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cu=new J(x.comparator);function zt(){return Cu}const mo=new J(x.comparator);function Oe(...i){let t=mo;for(const e of i)t=t.insert(e.key,e);return t}function Vu(i){let t=mo;return i.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function Ht(){return je()}function go(){return je()}function je(){return new Jt(i=>i.toString(),(i,t)=>i.isEqual(t))}const Su=new rt(x.comparator);function B(...i){let t=Su;for(const e of i)t=t.add(e);return t}const Du=new rt(q);function ku(){return Du}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(i,t){if(i.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:wr(t)?"-0":t}}function bu(i){return{integerValue:""+i}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(){this._=void 0}}function xu(i,t,e){return i instanceof Dr?function(s,o){const u={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&qr(o)&&(o=Un(o)),o&&(u.fields.__previous_value__=o),{mapValue:u}}(e,t):i instanceof kn?po(i,t):i instanceof Nn?_o(i,t):function(s,o){const u=Mu(s,o),l=Ts(u)+Ts(s.Pe);return Pr(u)&&Pr(s.Pe)?bu(l):Nu(s.serializer,l)}(i,t)}function Lu(i,t,e){return i instanceof kn?po(i,t):i instanceof Nn?_o(i,t):e}function Mu(i,t){return i instanceof kr?function(n){return Pr(n)||function(o){return!!o&&"doubleValue"in o}(n)}(t)?t:{integerValue:0}:null}class Dr extends zn{}class kn extends zn{constructor(t){super(),this.elements=t}}function po(i,t){const e=yo(t);for(const n of i.elements)e.some(s=>wt(s,n))||e.push(n);return{arrayValue:{values:e}}}class Nn extends zn{constructor(t){super(),this.elements=t}}function _o(i,t){let e=yo(t);for(const n of i.elements)e=e.filter(s=>!wt(s,n));return{arrayValue:{values:e}}}class kr extends zn{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Ts(i){return Y(i.integerValue||i.doubleValue)}function yo(i){return Br(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function Ou(i,t){return i.field.isEqual(t.field)&&function(n,s){return n instanceof kn&&s instanceof kn||n instanceof Nn&&s instanceof Nn?ce(n.elements,s.elements,wt):n instanceof kr&&s instanceof kr?wt(n.Pe,s.Pe):n instanceof Dr&&s instanceof Dr}(i.transform,t.transform)}class Xt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Xt}static exists(t){return new Xt(void 0,t)}static updateTime(t){return new Xt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Rn(i,t){return i.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(i.updateTime):i.exists===void 0||i.exists===t.isFoundDocument()}class Gr{}function To(i,t){if(!i.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return i.isNoDocument()?new Uu(i.key,Xt.none()):new $r(i.key,i.data,Xt.none());{const e=i.data,n=It.empty();let s=new rt(_t.comparator);for(let o of t.fields)if(!s.has(o)){let u=e.field(o);u===null&&o.length>1&&(o=o.popLast(),u=e.field(o)),u===null?n.delete(o):n.set(o,u),s=s.add(o)}return new Kn(i.key,n,new Ot(s.toArray()),Xt.none())}}function Fu(i,t,e){i instanceof $r?function(s,o,u){const l=s.value.clone(),d=vs(s.fieldTransforms,o,u.transformResults);l.setAll(d),o.convertToFoundDocument(u.version,l).setHasCommittedMutations()}(i,t,e):i instanceof Kn?function(s,o,u){if(!Rn(s.precondition,o))return void o.convertToUnknownDocument(u.version);const l=vs(s.fieldTransforms,o,u.transformResults),d=o.data;d.setAll(Eo(s)),d.setAll(l),o.convertToFoundDocument(u.version,d).setHasCommittedMutations()}(i,t,e):function(s,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()}(0,t,e)}function ze(i,t,e,n){return i instanceof $r?function(o,u,l,d){if(!Rn(o.precondition,u))return l;const f=o.value.clone(),_=Is(o.fieldTransforms,d,u);return f.setAll(_),u.convertToFoundDocument(u.version,f).setHasLocalMutations(),null}(i,t,e,n):i instanceof Kn?function(o,u,l,d){if(!Rn(o.precondition,u))return l;const f=Is(o.fieldTransforms,d,u),_=u.data;return _.setAll(Eo(o)),_.setAll(f),u.convertToFoundDocument(u.version,_).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(w=>w.field))}(i,t,e,n):function(o,u,l){return Rn(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):l}(i,t,e)}function Es(i,t){return i.type===t.type&&!!i.key.isEqual(t.key)&&!!i.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&ce(n,s,(o,u)=>Ou(o,u))}(i.fieldTransforms,t.fieldTransforms)&&(i.type===0?i.value.isEqual(t.value):i.type!==1||i.data.isEqual(t.data)&&i.fieldMask.isEqual(t.fieldMask))}class $r extends Gr{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Kn extends Gr{constructor(t,e,n,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Eo(i){const t=new Map;return i.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=i.data.field(e);t.set(e,n)}}),t}function vs(i,t,e){const n=new Map;$(i.length===e.length);for(let s=0;s<e.length;s++){const o=i[s],u=o.transform,l=t.data.field(o.field);n.set(o.field,Lu(u,l,e[s]))}return n}function Is(i,t,e){const n=new Map;for(const s of i){const o=s.transform,u=e.data.field(s.field);n.set(s.field,xu(o,u,t))}return n}class Uu extends Gr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&Fu(o,t,n[s])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=ze(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=ze(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=go();return this.mutations.forEach(s=>{const o=t.get(s.key),u=o.overlayedDocument;let l=this.applyToLocalView(u,o.mutatedFields);l=e.has(s.key)?null:l;const d=To(u,l);d!==null&&n.set(s.key,d),u.isValidDocument()||u.convertToNoDocument(M.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),B())}isEqual(t){return this.batchId===t.batchId&&ce(this.mutations,t.mutations,(e,n)=>Es(e,n))&&ce(this.baseMutations,t.baseMutations,(e,n)=>Es(e,n))}}/**
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
 */class Bu{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Z,F;function vo(i){if(i===void 0)return Nt("GRPC error has no .code"),S.UNKNOWN;switch(i){case Z.OK:return S.OK;case Z.CANCELLED:return S.CANCELLED;case Z.UNKNOWN:return S.UNKNOWN;case Z.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case Z.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case Z.INTERNAL:return S.INTERNAL;case Z.UNAVAILABLE:return S.UNAVAILABLE;case Z.UNAUTHENTICATED:return S.UNAUTHENTICATED;case Z.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case Z.NOT_FOUND:return S.NOT_FOUND;case Z.ALREADY_EXISTS:return S.ALREADY_EXISTS;case Z.PERMISSION_DENIED:return S.PERMISSION_DENIED;case Z.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case Z.ABORTED:return S.ABORTED;case Z.OUT_OF_RANGE:return S.OUT_OF_RANGE;case Z.UNIMPLEMENTED:return S.UNIMPLEMENTED;case Z.DATA_LOSS:return S.DATA_LOSS;default:return O()}}(F=Z||(Z={}))[F.OK=0]="OK",F[F.CANCELLED=1]="CANCELLED",F[F.UNKNOWN=2]="UNKNOWN",F[F.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",F[F.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",F[F.NOT_FOUND=5]="NOT_FOUND",F[F.ALREADY_EXISTS=6]="ALREADY_EXISTS",F[F.PERMISSION_DENIED=7]="PERMISSION_DENIED",F[F.UNAUTHENTICATED=16]="UNAUTHENTICATED",F[F.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",F[F.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",F[F.ABORTED=10]="ABORTED",F[F.OUT_OF_RANGE=11]="OUT_OF_RANGE",F[F.UNIMPLEMENTED=12]="UNIMPLEMENTED",F[F.INTERNAL=13]="INTERNAL",F[F.UNAVAILABLE=14]="UNAVAILABLE",F[F.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function zu(){return new TextEncoder}/**
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
 */const Ku=new Wt([4294967295,4294967295],0);function As(i){const t=zu().encode(i),e=new Xs;return e.update(t),new Uint8Array(e.digest())}function ws(i){const t=new DataView(i.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Wt([e,n],0),new Wt([s,o],0)]}class Qr{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new Fe(`Invalid padding: ${e}`);if(n<0)throw new Fe(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new Fe(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new Fe(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=Wt.fromNumber(this.Ie)}Ee(t,e,n){let s=t.add(e.multiply(Wt.fromNumber(n)));return s.compare(Ku)===1&&(s=new Wt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=As(t),[n,s]=ws(e);for(let o=0;o<this.hashCount;o++){const u=this.Ee(n,s,o);if(!this.de(u))return!1}return!0}static create(t,e,n){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),u=new Qr(o,s,e);return n.forEach(l=>u.insert(l)),u}insert(t){if(this.Ie===0)return;const e=As(t),[n,s]=ws(e);for(let o=0;o<this.hashCount;o++){const u=this.Ee(n,s,o);this.Ae(u)}}Ae(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class Fe extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(t,e,n,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const s=new Map;return s.set(t,Xe.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Gn(M.min(),s,new J(q),zt(),B())}}class Xe{constructor(t,e,n,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Xe(n,e,B(),B(),B())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(t,e,n,s){this.Re=t,this.removedTargetIds=e,this.key=n,this.Ve=s}}class Io{constructor(t,e){this.targetId=t,this.me=e}}class Ao{constructor(t,e,n=at.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class Rs{constructor(){this.fe=0,this.ge=Cs(),this.pe=at.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=B(),e=B(),n=B();return this.ge.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:O()}}),new Xe(this.pe,this.ye,t,e,n)}Ce(){this.we=!1,this.ge=Cs()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,$(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Gu{constructor(t){this.Le=t,this.Be=new Map,this.ke=zt(),this.qe=Ps(),this.Qe=new J(q)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const n=this.Ge(e);switch(t.state){case 0:this.ze(e)&&n.De(t.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(t.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(n.Ne(),n.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),n.De(t.resumeToken));break;default:O()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((n,s)=>{this.ze(s)&&e(s)})}He(t){const e=t.targetId,n=t.me.count,s=this.Je(e);if(s){const o=s.target;if(Vr(o))if(n===0){const u=new x(o.path);this.Ue(e,u,mt.newNoDocument(u,M.min()))}else $(n===1);else{const u=this.Ye(e);if(u!==n){const l=this.Ze(t),d=l?this.Xe(l,t,u):1;if(d!==0){this.je(e);const f=d===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,f)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:o=0}=e;let u,l;try{u=Bt(n).toUint8Array()}catch(d){if(d instanceof io)return le("Decoding the base64 bloom filter in existence filter failed ("+d.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw d}try{l=new Qr(u,s,o)}catch(d){return le(d instanceof Fe?"BloomFilter error: ":"Applying bloom filter failed: ",d),null}return l.Ie===0?null:l}Xe(t,e,n){return e.me.count===n-this.nt(t,e.targetId)?0:2}nt(t,e){const n=this.Le.getRemoteKeysForTarget(e);let s=0;return n.forEach(o=>{const u=this.Le.tt(),l=`projects/${u.projectId}/databases/${u.database}/documents/${o.path.canonicalString()}`;t.mightContain(l)||(this.Ue(e,o,null),s++)}),s}rt(t){const e=new Map;this.Be.forEach((o,u)=>{const l=this.Je(u);if(l){if(o.current&&Vr(l.target)){const d=new x(l.target.path);this.ke.get(d)!==null||this.it(u,d)||this.Ue(u,d,mt.newNoDocument(d,t))}o.be&&(e.set(u,o.ve()),o.Ce())}});let n=B();this.qe.forEach((o,u)=>{let l=!0;u.forEachWhile(d=>{const f=this.Je(d);return!f||f.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(n=n.add(o))}),this.ke.forEach((o,u)=>u.setReadTime(t));const s=new Gn(t,e,this.Qe,this.ke,n);return this.ke=zt(),this.qe=Ps(),this.Qe=new J(q),s}$e(t,e){if(!this.ze(t))return;const n=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,n),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,n){if(!this.ze(t))return;const s=this.Ge(t);this.it(t,e)?s.Fe(e,1):s.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),n&&(this.ke=this.ke.insert(e,n))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new Rs,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new rt(q),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||D("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new Rs),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Ps(){return new J(x.comparator)}function Cs(){return new J(x.comparator)}const $u={asc:"ASCENDING",desc:"DESCENDING"},Qu={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Hu={and:"AND",or:"OR"};class Wu{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Nr(i,t){return i.useProto3Json||Fn(t)?t:{value:t}}function Xu(i,t){return i.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Yu(i,t){return i.useProto3Json?t.toBase64():t.toUint8Array()}function ue(i){return $(!!i),M.fromTimestamp(function(e){const n=qt(e);return new Tt(n.seconds,n.nanos)}(i))}function Ju(i,t){return br(i,t).canonicalString()}function br(i,t){const e=function(s){return new X(["projects",s.projectId,"databases",s.database])}(i).child("documents");return t===void 0?e:e.child(t)}function wo(i){const t=X.fromString(i);return $(So(t)),t}function Tr(i,t){const e=wo(t);if(e.get(1)!==i.databaseId.projectId)throw new b(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+i.databaseId.projectId);if(e.get(3)!==i.databaseId.database)throw new b(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+i.databaseId.database);return new x(Po(e))}function Ro(i,t){return Ju(i.databaseId,t)}function Zu(i){const t=wo(i);return t.length===4?X.emptyPath():Po(t)}function Vs(i){return new X(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function Po(i){return $(i.length>4&&i.get(4)==="documents"),i.popFirst(5)}function th(i,t){let e;if("targetChange"in t){t.targetChange;const n=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:O()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(f,_){return f.useProto3Json?($(_===void 0||typeof _=="string"),at.fromBase64String(_||"")):($(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array),at.fromUint8Array(_||new Uint8Array))}(i,t.targetChange.resumeToken),u=t.targetChange.cause,l=u&&function(f){const _=f.code===void 0?S.UNKNOWN:vo(f.code);return new b(_,f.message||"")}(u);e=new Ao(n,s,o,l||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const s=Tr(i,n.document.name),o=ue(n.document.updateTime),u=n.document.createTime?ue(n.document.createTime):M.min(),l=new It({mapValue:{fields:n.document.fields}}),d=mt.newFoundDocument(s,o,u,l),f=n.targetIds||[],_=n.removedTargetIds||[];e=new Pn(f,_,d.key,d)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const s=Tr(i,n.document),o=n.readTime?ue(n.readTime):M.min(),u=mt.newNoDocument(s,o),l=n.removedTargetIds||[];e=new Pn([],l,u.key,u)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const s=Tr(i,n.document),o=n.removedTargetIds||[];e=new Pn([],o,s,null)}else{if(!("filter"in t))return O();{t.filter;const n=t.filter;n.targetId;const{count:s=0,unchangedNames:o}=n,u=new ju(s,o),l=n.targetId;e=new Io(l,u)}}return e}function eh(i,t){return{documents:[Ro(i,t.path)]}}function nh(i,t){const e={structuredQuery:{}},n=t.path;let s;t.collectionGroup!==null?(s=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=Ro(i,s);const o=function(f){if(f.length!==0)return Vo(Rt.create(f,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const u=function(f){if(f.length!==0)return f.map(_=>function(P){return{field:se(P.field),direction:sh(P.dir)}}(_))}(t.orderBy);u&&(e.structuredQuery.orderBy=u);const l=Nr(i,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{_t:e,parent:s}}function rh(i){let t=Zu(i.parent);const e=i.structuredQuery,n=e.from?e.from.length:0;let s=null;if(n>0){$(n===1);const _=e.from[0];_.allDescendants?s=_.collectionId:t=t.child(_.collectionId)}let o=[];e.where&&(o=function(w){const P=Co(w);return P instanceof Rt&&ao(P)?P.getFilters():[P]}(e.where));let u=[];e.orderBy&&(u=function(w){return w.map(P=>function(N){return new Dn(oe(N.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(P))}(e.orderBy));let l=null;e.limit&&(l=function(w){let P;return P=typeof w=="object"?w.value:w,Fn(P)?null:P}(e.limit));let d=null;e.startAt&&(d=function(w){const P=!!w.before,V=w.values||[];return new Sn(V,P)}(e.startAt));let f=null;return e.endAt&&(f=function(w){const P=!w.before,V=w.values||[];return new Sn(V,P)}(e.endAt)),Iu(t,s,u,o,l,"F",d,f)}function ih(i,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return O()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Co(i){return i.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=oe(e.unaryFilter.field);return tt.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=oe(e.unaryFilter.field);return tt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=oe(e.unaryFilter.field);return tt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=oe(e.unaryFilter.field);return tt.create(u,"!=",{nullValue:"NULL_VALUE"});default:return O()}}(i):i.fieldFilter!==void 0?function(e){return tt.create(oe(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return O()}}(e.fieldFilter.op),e.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(e){return Rt.create(e.compositeFilter.filters.map(n=>Co(n)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return O()}}(e.compositeFilter.op))}(i):O()}function sh(i){return $u[i]}function oh(i){return Qu[i]}function ah(i){return Hu[i]}function se(i){return{fieldPath:i.canonicalString()}}function oe(i){return _t.fromServerFormat(i.fieldPath)}function Vo(i){return i instanceof tt?function(e){if(e.op==="=="){if(ms(e.value))return{unaryFilter:{field:se(e.field),op:"IS_NAN"}};if(fs(e.value))return{unaryFilter:{field:se(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ms(e.value))return{unaryFilter:{field:se(e.field),op:"IS_NOT_NAN"}};if(fs(e.value))return{unaryFilter:{field:se(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:se(e.field),op:oh(e.op),value:e.value}}}(i):i instanceof Rt?function(e){const n=e.getFilters().map(s=>Vo(s));return n.length===1?n[0]:{compositeFilter:{op:ah(e.op),filters:n}}}(i):O()}function So(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(t,e,n,s,o=M.min(),u=M.min(),l=at.EMPTY_BYTE_STRING,d=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=l,this.expectedCount=d}withSequenceNumber(t){return new Ft(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Ft(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Ft(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Ft(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(t){this.ct=t}}function hh(i){const t=rh({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?Sr(t,t.limit,"L"):t}/**
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
 */class lh{constructor(){this.un=new ch}addToCollectionParentIndex(t,e){return this.un.add(e),R.resolve()}getCollectionParents(t,e){return R.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return R.resolve()}deleteFieldIndex(t,e){return R.resolve()}deleteAllFieldIndexes(t){return R.resolve()}createTargetIndexes(t,e){return R.resolve()}getDocumentsMatchingTarget(t,e){return R.resolve(null)}getIndexType(t,e){return R.resolve(0)}getFieldIndexes(t,e){return R.resolve([])}getNextCollectionGroupToUpdate(t){return R.resolve(null)}getMinOffset(t,e){return R.resolve(Ut.min())}getMinOffsetFromCollectionGroup(t,e){return R.resolve(Ut.min())}updateCollectionGroup(t,e,n){return R.resolve()}updateIndexEntries(t,e){return R.resolve()}}class ch{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new rt(X.comparator),o=!s.has(n);return this.index[e]=s.add(n),o}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new rt(X.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class yt{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new yt(t,yt.DEFAULT_COLLECTION_PERCENTILE,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yt.DEFAULT_COLLECTION_PERCENTILE=10,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,yt.DEFAULT=new yt(41943040,yt.DEFAULT_COLLECTION_PERCENTILE,yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),yt.DISABLED=new yt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new me(0)}static kn(){return new me(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ds([i,t],[e,n]){const s=q(i,e);return s===0?q(t,n):s}class dh{constructor(t){this.Un=t,this.buffer=new rt(Ds),this.Wn=0}Gn(){return++this.Wn}zn(t){const e=[t,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(e);else{const n=this.buffer.last();Ds(e,n)<0&&(this.buffer=this.buffer.delete(n).add(e))}}get maxValue(){return this.buffer.last()[0]}}class fh{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(t){D("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){_e(e)?D("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await Mn(e)}await this.Hn(3e5)})}}class mh{constructor(t,e){this.Jn=t,this.params=e}calculateTargetCount(t,e){return this.Jn.Yn(t).next(n=>Math.floor(e/100*n))}nthSequenceNumber(t,e){if(e===0)return R.resolve(On.oe);const n=new dh(e);return this.Jn.forEachTarget(t,s=>n.zn(s.sequenceNumber)).next(()=>this.Jn.Zn(t,s=>n.zn(s))).next(()=>n.maxValue)}removeTargets(t,e,n){return this.Jn.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.Jn.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(D("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(Ss)):this.getCacheSize(t).next(n=>n<this.params.cacheSizeCollectionThreshold?(D("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ss):this.Xn(t,e))}getCacheSize(t){return this.Jn.getCacheSize(t)}Xn(t,e){let n,s,o,u,l,d,f;const _=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(w=>(w>this.params.maximumSequenceNumbersToCollect?(D("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),s=this.params.maximumSequenceNumbersToCollect):s=w,u=Date.now(),this.nthSequenceNumber(t,s))).next(w=>(n=w,l=Date.now(),this.removeTargets(t,n,e))).next(w=>(o=w,d=Date.now(),this.removeOrphanedDocuments(t,n))).next(w=>(f=Date.now(),re()<=Dt.DEBUG&&D("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-_}ms
	Determined least recently used ${s} in `+(l-u)+`ms
	Removed ${o} targets in `+(d-l)+`ms
	Removed ${w} documents in `+(f-d)+`ms
Total Duration: ${f-_}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:w})))}}function gh(i,t){return new mh(i,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(){this.changes=new Jt(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,mt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?R.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
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
 */class _h{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(n=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(n!==null&&ze(n.mutation,s,Ot.empty(),Tt.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,B()).next(()=>n))}getLocalViewOfDocuments(t,e,n=B()){const s=Ht();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,n).next(o=>{let u=Oe();return o.forEach((l,d)=>{u=u.insert(l,d.overlayedDocument)}),u}))}getOverlayedDocuments(t,e){const n=Ht();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,B()))}populateOverlays(t,e,n){const s=[];return n.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((u,l)=>{e.set(u,l)})})}computeViews(t,e,n,s){let o=zt();const u=je(),l=function(){return je()}();return e.forEach((d,f)=>{const _=n.get(f.key);s.has(f.key)&&(_===void 0||_.mutation instanceof Kn)?o=o.insert(f.key,f):_!==void 0?(u.set(f.key,_.mutation.getFieldMask()),ze(_.mutation,f,_.mutation.getFieldMask(),Tt.now())):u.set(f.key,Ot.empty())}),this.recalculateAndSaveOverlays(t,o).next(d=>(d.forEach((f,_)=>u.set(f,_)),e.forEach((f,_)=>{var w;return l.set(f,new _h(_,(w=u.get(f))!==null&&w!==void 0?w:null))}),l))}recalculateAndSaveOverlays(t,e){const n=je();let s=new J((u,l)=>u-l),o=B();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(u=>{for(const l of u)l.keys().forEach(d=>{const f=e.get(d);if(f===null)return;let _=n.get(d)||Ot.empty();_=l.applyToLocalView(f,_),n.set(d,_);const w=(s.get(l.batchId)||B()).add(d);s=s.insert(l.batchId,w)})}).next(()=>{const u=[],l=s.getReverseIterator();for(;l.hasNext();){const d=l.getNext(),f=d.key,_=d.value,w=go();_.forEach(P=>{if(!o.has(P)){const V=To(e.get(P),n.get(P));V!==null&&w.set(P,V),o=o.add(P)}}),u.push(this.documentOverlayCache.saveOverlays(t,f,w))}return R.waitFor(u)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,s){return function(u){return x.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Au(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,s):this.getDocumentsMatchingCollectionQuery(t,e,n,s)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next(o=>{const u=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-o.size):R.resolve(Ht());let l=-1,d=o;return u.next(f=>R.forEach(f,(_,w)=>(l<w.largestBatchId&&(l=w.largestBatchId),o.get(_)?R.resolve():this.remoteDocumentCache.getEntry(t,_).next(P=>{d=d.insert(_,P)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,d,f,B())).next(_=>({batchId:l,changes:Vu(_)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new x(e)).next(n=>{let s=Oe();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,n,s){const o=e.collectionGroup;let u=Oe();return this.indexManager.getCollectionParents(t,o).next(l=>R.forEach(l,d=>{const f=function(w,P){return new qn(P,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(e,d.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,n,s).next(_=>{_.forEach((w,P)=>{u=u.insert(w,P)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(t,e,n,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,o,s))).next(u=>{o.forEach((d,f)=>{const _=f.getKey();u.get(_)===null&&(u=u.insert(_,mt.newInvalidDocument(_)))});let l=Oe();return u.forEach((d,f)=>{const _=o.get(d);_!==void 0&&ze(_.mutation,f,Ot.empty(),Tt.now()),jn(e,f)&&(l=l.insert(d,f))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return R.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:ue(s.createTime)}}(e)),R.resolve()}getNamedQuery(t,e){return R.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(s){return{name:s.name,query:hh(s.bundledQuery),readTime:ue(s.readTime)}}(e)),R.resolve()}}/**
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
 */class Eh{constructor(){this.overlays=new J(x.comparator),this.Ir=new Map}getOverlay(t,e){return R.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Ht();return R.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&n.set(s,o)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((s,o)=>{this.ht(t,e,o)}),R.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.Ir.get(n);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(n)),R.resolve()}getOverlaysForCollection(t,e,n){const s=Ht(),o=e.length+1,u=new x(e.child("")),l=this.overlays.getIteratorFrom(u);for(;l.hasNext();){const d=l.getNext().value,f=d.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&d.largestBatchId>n&&s.set(d.getKey(),d)}return R.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let o=new J((f,_)=>f-_);const u=this.overlays.getIterator();for(;u.hasNext();){const f=u.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>n){let _=o.get(f.largestBatchId);_===null&&(_=Ht(),o=o.insert(f.largestBatchId,_)),_.set(f.getKey(),f)}}const l=Ht(),d=o.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach((f,_)=>l.set(f,_)),!(l.size()>=s)););return R.resolve(l)}ht(t,e,n){const s=this.overlays.get(n.key);if(s!==null){const u=this.Ir.get(s.largestBatchId).delete(n.key);this.Ir.set(s.largestBatchId,u)}this.overlays=this.overlays.insert(n.key,new Bu(e,n));let o=this.Ir.get(e);o===void 0&&(o=B(),this.Ir.set(e,o)),this.Ir.set(e,o.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(){this.sessionToken=at.EMPTY_BYTE_STRING}getSessionToken(t){return R.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,R.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(){this.Tr=new rt(nt.Er),this.dr=new rt(nt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const n=new nt(t,e);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(t,e){t.forEach(n=>this.addReference(n,e))}removeReference(t,e){this.Vr(new nt(t,e))}mr(t,e){t.forEach(n=>this.removeReference(n,e))}gr(t){const e=new x(new X([])),n=new nt(e,t),s=new nt(e,t+1),o=[];return this.dr.forEachInRange([n,s],u=>{this.Vr(u),o.push(u.key)}),o}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new x(new X([])),n=new nt(e,t),s=new nt(e,t+1);let o=B();return this.dr.forEachInRange([n,s],u=>{o=o.add(u.key)}),o}containsKey(t){const e=new nt(t,0),n=this.Tr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class nt{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return x.comparator(t.key,e.key)||q(t.wr,e.wr)}static Ar(t,e){return q(t.wr,e.wr)||x.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new rt(nt.Er)}checkEmpty(t){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,s){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new qu(o,e,n,s);this.mutationQueue.push(u);for(const l of s)this.br=this.br.add(new nt(l.key,o)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return R.resolve(u)}lookupMutationBatch(t,e){return R.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.vr(n),o=s<0?0:s;return R.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new nt(e,0),s=new nt(e,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([n,s],u=>{const l=this.Dr(u.wr);o.push(l)}),R.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new rt(q);return e.forEach(s=>{const o=new nt(s,0),u=new nt(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,u],l=>{n=n.add(l.wr)})}),R.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let o=n;x.isDocumentKey(o)||(o=o.child(""));const u=new nt(new x(o),0);let l=new rt(q);return this.br.forEachWhile(d=>{const f=d.key.path;return!!n.isPrefixOf(f)&&(f.length===s&&(l=l.add(d.wr)),!0)},u),R.resolve(this.Cr(l))}Cr(t){const e=[];return t.forEach(n=>{const s=this.Dr(n);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){$(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let n=this.br;return R.forEach(e.mutations,s=>{const o=new nt(s.key,e.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.br=n})}On(t){}containsKey(t,e){const n=new nt(e,0),s=this.br.firstAfterOrEqual(n);return R.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,R.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(t){this.Mr=t,this.docs=function(){return new J(x.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),o=s?s.size:0,u=this.Mr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return R.resolve(n?n.document.mutableCopy():mt.newInvalidDocument(e))}getEntries(t,e){let n=zt();return e.forEach(s=>{const o=this.docs.get(s);n=n.insert(s,o?o.document.mutableCopy():mt.newInvalidDocument(s))}),R.resolve(n)}getDocumentsMatchingQuery(t,e,n,s){let o=zt();const u=e.path,l=new x(u.child("")),d=this.docs.getIteratorFrom(l);for(;d.hasNext();){const{key:f,value:{document:_}}=d.getNext();if(!u.isPrefixOf(f.path))break;f.path.length>u.length+1||eu(tu(_),n)<=0||(s.has(_.key)||jn(e,_))&&(o=o.insert(_.key,_.mutableCopy()))}return R.resolve(o)}getAllFromCollectionGroup(t,e,n,s){O()}Or(t,e){return R.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new wh(this)}getSize(t){return R.resolve(this.size)}}class wh extends ph{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?e.push(this.cr.addEntry(t,s)):this.cr.removeEntry(n)}),R.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(t){this.persistence=t,this.Nr=new Jt(e=>jr(e),zr),this.lastRemoteSnapshotVersion=M.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Hr,this.targetCount=0,this.kr=me.Bn()}forEachTarget(t,e){return this.Nr.forEach((n,s)=>e(s)),R.resolve()}getLastRemoteSnapshotVersion(t){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return R.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Lr&&(this.Lr=e),R.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new me(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,R.resolve()}updateTargetData(t,e){return this.Kn(e),R.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,R.resolve()}removeTargets(t,e,n){let s=0;const o=[];return this.Nr.forEach((u,l)=>{l.sequenceNumber<=e&&n.get(l.targetId)===null&&(this.Nr.delete(u),o.push(this.removeMatchingKeysForTargetId(t,l.targetId)),s++)}),R.waitFor(o).next(()=>s)}getTargetCount(t){return R.resolve(this.targetCount)}getTargetData(t,e){const n=this.Nr.get(e)||null;return R.resolve(n)}addMatchingKeys(t,e,n){return this.Br.Rr(e,n),R.resolve()}removeMatchingKeys(t,e,n){this.Br.mr(e,n);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(u=>{o.push(s.markPotentiallyOrphaned(t,u))}),R.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),R.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Br.yr(e);return R.resolve(n)}containsKey(t,e){return R.resolve(this.Br.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(t,e){this.qr={},this.overlays={},this.Qr=new On(0),this.Kr=!1,this.Kr=!0,this.$r=new vh,this.referenceDelegate=t(this),this.Ur=new Rh(this),this.indexManager=new lh,this.remoteDocumentCache=function(s){return new Ah(s)}(n=>this.referenceDelegate.Wr(n)),this.serializer=new uh(e),this.Gr=new Th(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Eh,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.qr[t.toKey()];return n||(n=new Ih(e,this.referenceDelegate),this.qr[t.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,n){D("MemoryPersistence","Starting transaction:",t);const s=new Ph(this.Qr.next());return this.referenceDelegate.zr(),n(s).next(o=>this.referenceDelegate.jr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Hr(t,e){return R.or(Object.values(this.qr).map(n=>()=>n.containsKey(t,e)))}}class Ph extends ru{constructor(t){super(),this.currentSequenceNumber=t}}class Wr{constructor(t){this.persistence=t,this.Jr=new Hr,this.Yr=null}static Zr(t){return new Wr(t)}get Xr(){if(this.Yr)return this.Yr;throw O()}addReference(t,e,n){return this.Jr.addReference(n,e),this.Xr.delete(n.toString()),R.resolve()}removeReference(t,e,n){return this.Jr.removeReference(n,e),this.Xr.add(n.toString()),R.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),R.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(s=>this.Xr.add(s.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.Xr.add(o.toString()))}).next(()=>n.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Xr,n=>{const s=x.fromPath(n);return this.ei(t,s).next(o=>{o||e.removeEntry(s,M.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(n=>{n?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return R.or([()=>R.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}class bn{constructor(t,e){this.persistence=t,this.ti=new Jt(n=>su(n.path),(n,s)=>n.isEqual(s)),this.garbageCollector=gh(this,e)}static Zr(t,e){return new bn(t,e)}zr(){}jr(t){return R.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}Yn(t){const e=this.er(t);return this.persistence.getTargetCache().getTargetCount(t).next(n=>e.next(s=>n+s))}er(t){let e=0;return this.Zn(t,n=>{e++}).next(()=>e)}Zn(t,e){return R.forEach(this.ti,(n,s)=>this.nr(t,n,s).next(o=>o?R.resolve():e(s)))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.Or(t,u=>this.nr(t,u,e).next(l=>{l||(n++,o.removeEntry(u,M.min()))})).next(()=>o.apply(t)).next(()=>n)}markPotentiallyOrphaned(t,e){return this.ti.set(e,t.currentSequenceNumber),R.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.ti.set(n,t.currentSequenceNumber),R.resolve()}removeReference(t,e,n){return this.ti.set(n,t.currentSequenceNumber),R.resolve()}updateLimboDocument(t,e){return this.ti.set(e,t.currentSequenceNumber),R.resolve()}Wr(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=wn(t.data.value)),e}nr(t,e,n){return R.or([()=>this.persistence.Hr(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.ti.get(e);return R.resolve(s!==void 0&&s>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.$i=n,this.Ui=s}static Wi(t,e){let n=B(),s=B();for(const o of e.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new Xr(t,e.fromCache,n,s)}}/**
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
 */class Ch{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class Vh{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return ja()?8:iu(za())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,n,s){const o={result:null};return this.Yi(t,e).next(u=>{o.result=u}).next(()=>{if(!o.result)return this.Zi(t,e,s,n).next(u=>{o.result=u})}).next(()=>{if(o.result)return;const u=new Ch;return this.Xi(t,e,u).next(l=>{if(o.result=l,this.zi)return this.es(t,e,u,l.size)})}).next(()=>o.result)}es(t,e,n,s){return n.documentReadCount<this.ji?(re()<=Dt.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",ie(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),R.resolve()):(re()<=Dt.DEBUG&&D("QueryEngine","Query:",ie(e),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.Hi*s?(re()<=Dt.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",ie(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,At(e))):R.resolve())}Yi(t,e){if(ys(e))return R.resolve(null);let n=At(e);return this.indexManager.getIndexType(t,n).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Sr(e,null,"F"),n=At(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(o=>{const u=B(...o);return this.Ji.getDocuments(t,u).next(l=>this.indexManager.getMinOffset(t,n).next(d=>{const f=this.ts(e,l);return this.ns(e,f,u,d.readTime)?this.Yi(t,Sr(e,null,"F")):this.rs(t,f,e,d)}))})))}Zi(t,e,n,s){return ys(e)||s.isEqual(M.min())?R.resolve(null):this.Ji.getDocuments(t,n).next(o=>{const u=this.ts(e,o);return this.ns(e,u,n,s)?R.resolve(null):(re()<=Dt.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ie(e)),this.rs(t,u,e,Za(s,-1)).next(l=>l))})}ts(t,e){let n=new rt(fo(t));return e.forEach((s,o)=>{jn(t,o)&&(n=n.add(o))}),n}ns(t,e,n,s){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Xi(t,e,n){return re()<=Dt.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",ie(e)),this.Ji.getDocumentsMatchingQuery(t,e,Ut.min(),n)}rs(t,e,n,s){return this.Ji.getDocumentsMatchingQuery(t,n,s).next(o=>(e.forEach(u=>{o=o.insert(u.key,u)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(t,e,n,s){this.persistence=t,this.ss=e,this.serializer=s,this.os=new J(q),this._s=new Jt(o=>jr(o),zr),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(n)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new yh(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function Dh(i,t,e,n){return new Sh(i,t,e,n)}async function ko(i,t){const e=U(i);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let s;return e.mutationQueue.getAllMutationBatches(n).next(o=>(s=o,e.ls(t),e.mutationQueue.getAllMutationBatches(n))).next(o=>{const u=[],l=[];let d=B();for(const f of s){u.push(f.batchId);for(const _ of f.mutations)d=d.add(_.key)}for(const f of o){l.push(f.batchId);for(const _ of f.mutations)d=d.add(_.key)}return e.localDocuments.getDocuments(n,d).next(f=>({hs:f,removedBatchIds:u,addedBatchIds:l}))})})}function No(i){const t=U(i);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function kh(i,t){const e=U(i),n=t.snapshotVersion;let s=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const u=e.cs.newChangeBuffer({trackRemovals:!0});s=e.os;const l=[];t.targetChanges.forEach((_,w)=>{const P=s.get(w);if(!P)return;l.push(e.Ur.removeMatchingKeys(o,_.removedDocuments,w).next(()=>e.Ur.addMatchingKeys(o,_.addedDocuments,w)));let V=P.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(w)!==null?V=V.withResumeToken(at.EMPTY_BYTE_STRING,M.min()).withLastLimboFreeSnapshotVersion(M.min()):_.resumeToken.approximateByteSize()>0&&(V=V.withResumeToken(_.resumeToken,n)),s=s.insert(w,V),function(L,k,G){return L.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=3e8?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0}(P,V,_)&&l.push(e.Ur.updateTargetData(o,V))});let d=zt(),f=B();if(t.documentUpdates.forEach(_=>{t.resolvedLimboDocuments.has(_)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(o,_))}),l.push(Nh(o,u,t.documentUpdates).next(_=>{d=_.Ps,f=_.Is})),!n.isEqual(M.min())){const _=e.Ur.getLastRemoteSnapshotVersion(o).next(w=>e.Ur.setTargetsMetadata(o,o.currentSequenceNumber,n));l.push(_)}return R.waitFor(l).next(()=>u.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,d,f)).next(()=>d)}).then(o=>(e.os=s,o))}function Nh(i,t,e){let n=B(),s=B();return e.forEach(o=>n=n.add(o)),t.getEntries(i,n).next(o=>{let u=zt();return e.forEach((l,d)=>{const f=o.get(l);d.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(l)),d.isNoDocument()&&d.version.isEqual(M.min())?(t.removeEntry(l,d.readTime),u=u.insert(l,d)):!f.isValidDocument()||d.version.compareTo(f.version)>0||d.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(d),u=u.insert(l,d)):D("LocalStore","Ignoring outdated watch update for ",l,". Current version:",f.version," Watch version:",d.version)}),{Ps:u,Is:s}})}function bh(i,t){const e=U(i);return e.persistence.runTransaction("Allocate target","readwrite",n=>{let s;return e.Ur.getTargetData(n,t).next(o=>o?(s=o,R.resolve(s)):e.Ur.allocateTargetId(n).next(u=>(s=new Ft(t,u,"TargetPurposeListen",n.currentSequenceNumber),e.Ur.addTargetData(n,s).next(()=>s))))}).then(n=>{const s=e.os.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.os=e.os.insert(n.targetId,n),e._s.set(t,n.targetId)),n})}async function xr(i,t,e){const n=U(i),s=n.os.get(t),o=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",o,u=>n.persistence.referenceDelegate.removeTarget(u,s))}catch(u){if(!_e(u))throw u;D("LocalStore",`Failed to update sequence numbers for target ${t}: ${u}`)}n.os=n.os.remove(t),n._s.delete(s.target)}function ks(i,t,e){const n=U(i);let s=M.min(),o=B();return n.persistence.runTransaction("Execute query","readwrite",u=>function(d,f,_){const w=U(d),P=w._s.get(_);return P!==void 0?R.resolve(w.os.get(P)):w.Ur.getTargetData(f,_)}(n,u,At(t)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,n.Ur.getMatchingKeysForTargetId(u,l.targetId).next(d=>{o=d})}).next(()=>n.ss.getDocumentsMatchingQuery(u,t,e?s:M.min(),e?o:B())).next(l=>(xh(n,Ru(t),l),{documents:l,Ts:o})))}function xh(i,t,e){let n=i.us.get(t)||M.min();e.forEach((s,o)=>{o.readTime.compareTo(n)>0&&(n=o.readTime)}),i.us.set(t,n)}class Ns{constructor(){this.activeTargetIds=ku()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Lh{constructor(){this.so=new Ns,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,n){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new Ns,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Mh{_o(t){}shutdown(){}}/**
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
 */class bs{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){D("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){D("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let In=null;function Er(){return In===null?In=function(){return 268435456+Math.round(2147483648*Math.random())}():In++,"0x"+In.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt="WebChannelConnection";class Uh extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=n+"://"+e.host,this.vo=`projects/${s}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}get Fo(){return!1}Mo(e,n,s,o,u){const l=Er(),d=this.xo(e,n.toUriEncodedString());D("RestConnection",`Sending RPC '${e}' ${l}:`,d,s);const f={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(f,o,u),this.No(e,d,f,s).then(_=>(D("RestConnection",`Received RPC '${e}' ${l}: `,_),_),_=>{throw le("RestConnection",`RPC '${e}' ${l} failed with error: `,_,"url: ",d,"request:",s),_})}Lo(e,n,s,o,u,l){return this.Mo(e,n,s,o,u)}Oo(e,n,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+pe}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((o,u)=>e[u]=o),s&&s.headers.forEach((o,u)=>e[u]=o)}xo(e,n){const s=Oh[e];return`${this.Do}/v1/${n}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,n,s){const o=Er();return new Promise((u,l)=>{const d=new Ys;d.setWithCredentials(!0),d.listenOnce(Js.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case An.NO_ERROR:const _=d.getResponseJson();D(dt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(_)),u(_);break;case An.TIMEOUT:D(dt,`RPC '${t}' ${o} timed out`),l(new b(S.DEADLINE_EXCEEDED,"Request time out"));break;case An.HTTP_ERROR:const w=d.getStatus();if(D(dt,`RPC '${t}' ${o} failed with status:`,w,"response text:",d.getResponseText()),w>0){let P=d.getResponseJson();Array.isArray(P)&&(P=P[0]);const V=P==null?void 0:P.error;if(V&&V.status&&V.message){const N=function(k){const G=k.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(G)>=0?G:S.UNKNOWN}(V.status);l(new b(N,V.message))}else l(new b(S.UNKNOWN,"Server responded with status "+d.getStatus()))}else l(new b(S.UNAVAILABLE,"Connection failed."));break;default:O()}}finally{D(dt,`RPC '${t}' ${o} completed.`)}});const f=JSON.stringify(s);D(dt,`RPC '${t}' ${o} sending request:`,s),d.send(e,"POST",f,n,15)})}Bo(t,e,n){const s=Er(),o=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=eo(),l=to(),d={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(d.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(d.useFetchStreams=!0),this.Oo(d.initMessageHeaders,e,n),d.encodeInitMessageHeaders=!0;const _=o.join("");D(dt,`Creating RPC '${t}' stream ${s}: ${_}`,d);const w=u.createWebChannel(_,d);let P=!1,V=!1;const N=new Fh({Io:k=>{V?D(dt,`Not sending because RPC '${t}' stream ${s} is closed:`,k):(P||(D(dt,`Opening RPC '${t}' stream ${s} transport.`),w.open(),P=!0),D(dt,`RPC '${t}' stream ${s} sending:`,k),w.send(k))},To:()=>w.close()}),L=(k,G,Q)=>{k.listen(G,H=>{try{Q(H)}catch(et){setTimeout(()=>{throw et},0)}})};return L(w,Me.EventType.OPEN,()=>{V||(D(dt,`RPC '${t}' stream ${s} transport opened.`),N.yo())}),L(w,Me.EventType.CLOSE,()=>{V||(V=!0,D(dt,`RPC '${t}' stream ${s} transport closed`),N.So())}),L(w,Me.EventType.ERROR,k=>{V||(V=!0,le(dt,`RPC '${t}' stream ${s} transport errored:`,k),N.So(new b(S.UNAVAILABLE,"The operation could not be completed")))}),L(w,Me.EventType.MESSAGE,k=>{var G;if(!V){const Q=k.data[0];$(!!Q);const H=Q,et=H.error||((G=H[0])===null||G===void 0?void 0:G.error);if(et){D(dt,`RPC '${t}' stream ${s} received error:`,et);const Pt=et.status;let it=function(p){const y=Z[p];if(y!==void 0)return vo(y)}(Pt),E=et.message;it===void 0&&(it=S.INTERNAL,E="Unknown error status: "+Pt+" with message "+et.message),V=!0,N.So(new b(it,E)),w.close()}else D(dt,`RPC '${t}' stream ${s} received:`,Q),N.bo(Q)}}),L(l,Zs.STAT_EVENT,k=>{k.stat===Ar.PROXY?D(dt,`RPC '${t}' stream ${s} detected buffering proxy`):k.stat===Ar.NOPROXY&&D(dt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{N.wo()},0),N}}function vr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bo(i){return new Wu(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(t,e,n=1e3,s=1.5,o=6e4){this.ui=t,this.timerId=e,this.ko=n,this.qo=s,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),s=Math.max(0,e-n);s>0&&D("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(t,e,n,s,o,u,l,d){this.ui=t,this.Ho=n,this.Jo=s,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=l,this.listener=d,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new xo(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===S.RESOURCE_EXHAUSTED?(Nt(e.toString()),Nt("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,s])=>{this.Yo===e&&this.P_(n,s)},n=>{t(()=>{const s=new b(S.UNKNOWN,"Fetching auth token failed: "+n.message);return this.I_(s)})})}P_(t,e){const n=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{n(()=>this.listener.Eo())}),this.stream.Ro(()=>{n(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{n(()=>this.I_(s))}),this.stream.onMessage(s=>{n(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return D("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(D("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Bh extends qh{constructor(t,e,n,s,o,u){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,u),this.serializer=o}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=th(this.serializer,t),n=function(o){if(!("targetChange"in o))return M.min();const u=o.targetChange;return u.targetIds&&u.targetIds.length?M.min():u.readTime?ue(u.readTime):M.min()}(t);return this.listener.d_(e,n)}A_(t){const e={};e.database=Vs(this.serializer),e.addTarget=function(o,u){let l;const d=u.target;if(l=Vr(d)?{documents:eh(o,d)}:{query:nh(o,d)._t},l.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){l.resumeToken=Yu(o,u.resumeToken);const f=Nr(o,u.expectedCount);f!==null&&(l.expectedCount=f)}else if(u.snapshotVersion.compareTo(M.min())>0){l.readTime=Xu(o,u.snapshotVersion.toTimestamp());const f=Nr(o,u.expectedCount);f!==null&&(l.expectedCount=f)}return l}(this.serializer,t);const n=ih(this.serializer,t);n&&(e.labels=n),this.a_(e)}R_(t){const e={};e.database=Vs(this.serializer),e.removeTarget=t,this.a_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh extends class{}{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new b(S.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,n,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.Mo(t,br(e,n),s,o,u)).catch(o=>{throw o.name==="FirebaseError"?(o.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new b(S.UNKNOWN,o.toString())})}Lo(t,e,n,s,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,l])=>this.connection.Lo(t,br(e,n),s,u,l,o)).catch(u=>{throw u.name==="FirebaseError"?(u.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new b(S.UNKNOWN,u.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class zh{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Nt(e),this.D_=!1):D("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(t,e,n,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(u=>{n.enqueueAndForget(async()=>{Je(this)&&(D("RemoteStore","Restarting streams for network reachability change."),await async function(d){const f=U(d);f.L_.add(4),await Ye(f),f.q_.set("Unknown"),f.L_.delete(4),await $n(f)}(this))})}),this.q_=new zh(n,s)}}async function $n(i){if(Je(i))for(const t of i.B_)await t(!0)}async function Ye(i){for(const t of i.B_)await t(!1)}function Lo(i,t){const e=U(i);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),ti(e)?Zr(e):ye(e).r_()&&Jr(e,t))}function Yr(i,t){const e=U(i),n=ye(e);e.N_.delete(t),n.r_()&&Mo(e,t),e.N_.size===0&&(n.r_()?n.o_():Je(e)&&e.q_.set("Unknown"))}function Jr(i,t){if(i.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(M.min())>0){const e=i.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}ye(i).A_(t)}function Mo(i,t){i.Q_.xe(t),ye(i).R_(t)}function Zr(i){i.Q_=new Gu({getRemoteKeysForTarget:t=>i.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>i.N_.get(t)||null,tt:()=>i.datastore.serializer.databaseId}),ye(i).start(),i.q_.v_()}function ti(i){return Je(i)&&!ye(i).n_()&&i.N_.size>0}function Je(i){return U(i).L_.size===0}function Oo(i){i.Q_=void 0}async function Gh(i){i.q_.set("Online")}async function $h(i){i.N_.forEach((t,e)=>{Jr(i,t)})}async function Qh(i,t){Oo(i),ti(i)?(i.q_.M_(t),Zr(i)):i.q_.set("Unknown")}async function Hh(i,t,e){if(i.q_.set("Online"),t instanceof Ao&&t.state===2&&t.cause)try{await async function(s,o){const u=o.cause;for(const l of o.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,u),s.N_.delete(l),s.Q_.removeTarget(l))}(i,t)}catch(n){D("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await xs(i,n)}else if(t instanceof Pn?i.Q_.Ke(t):t instanceof Io?i.Q_.He(t):i.Q_.We(t),!e.isEqual(M.min()))try{const n=await No(i.localStore);e.compareTo(n)>=0&&await function(o,u){const l=o.Q_.rt(u);return l.targetChanges.forEach((d,f)=>{if(d.resumeToken.approximateByteSize()>0){const _=o.N_.get(f);_&&o.N_.set(f,_.withResumeToken(d.resumeToken,u))}}),l.targetMismatches.forEach((d,f)=>{const _=o.N_.get(d);if(!_)return;o.N_.set(d,_.withResumeToken(at.EMPTY_BYTE_STRING,_.snapshotVersion)),Mo(o,d);const w=new Ft(_.target,d,f,_.sequenceNumber);Jr(o,w)}),o.remoteSyncer.applyRemoteEvent(l)}(i,e)}catch(n){D("RemoteStore","Failed to raise snapshot:",n),await xs(i,n)}}async function xs(i,t,e){if(!_e(t))throw t;i.L_.add(1),await Ye(i),i.q_.set("Offline"),e||(e=()=>No(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{D("RemoteStore","Retrying IndexedDB access"),await e(),i.L_.delete(1),await $n(i)})}async function Ls(i,t){const e=U(i);e.asyncQueue.verifyOperationInProgress(),D("RemoteStore","RemoteStore received new credentials");const n=Je(e);e.L_.add(3),await Ye(e),n&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await $n(e)}async function Wh(i,t){const e=U(i);t?(e.L_.delete(2),await $n(e)):t||(e.L_.add(2),await Ye(e),e.q_.set("Unknown"))}function ye(i){return i.K_||(i.K_=function(e,n,s){const o=U(e);return o.w_(),new Bh(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(i.datastore,i.asyncQueue,{Eo:Gh.bind(null,i),Ro:$h.bind(null,i),mo:Qh.bind(null,i),d_:Hh.bind(null,i)}),i.B_.push(async t=>{t?(i.K_.s_(),ti(i)?Zr(i):i.q_.set("Unknown")):(await i.K_.stop(),Oo(i))})),i.K_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(t,e,n,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=o,this.deferred=new ae,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,s,o){const u=Date.now()+n,l=new ei(t,e,u,s,o);return l.start(n),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new b(S.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fo(i,t){if(Nt("AsyncQueue",`${t}: ${i}`),_e(i))return new b(S.UNAVAILABLE,`${t}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(t){this.comparator=t?(e,n)=>t(e,n)||x.comparator(e.key,n.key):(e,n)=>x.comparator(e.key,n.key),this.keyedMap=Oe(),this.sortedSet=new J(this.comparator)}static emptySet(t){return new he(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof he)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=n.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new he;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(){this.W_=new J(x.comparator)}track(t){const e=t.doc.key,n=this.W_.get(e);n?t.type!==0&&n.type===3?this.W_=this.W_.insert(e,t):t.type===3&&n.type!==1?this.W_=this.W_.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.W_=this.W_.remove(e):t.type===1&&n.type===2?this.W_=this.W_.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):O():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,n)=>{t.push(n)}),t}}class ge{constructor(t,e,n,s,o,u,l,d,f){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=o,this.fromCache=u,this.syncStateChanged=l,this.excludesMetadataChanges=d,this.hasCachedResults=f}static fromInitialDocuments(t,e,n,s,o){const u=[];return e.forEach(l=>{u.push({type:0,doc:l})}),new ge(t,e,he.emptySet(e),u,n,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Bn(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==n[s].type||!e[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class Yh{constructor(){this.queries=Os(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,n){const s=U(e),o=s.queries;s.queries=Os(),o.forEach((u,l)=>{for(const d of l.j_)d.onError(n)})})(this,new b(S.ABORTED,"Firestore shutting down"))}}function Os(){return new Jt(i=>co(i),Bn)}async function Jh(i,t){const e=U(i);let n=3;const s=t.query;let o=e.queries.get(s);o?!o.H_()&&t.J_()&&(n=2):(o=new Xh,n=t.J_()?0:1);try{switch(n){case 0:o.z_=await e.onListen(s,!0);break;case 1:o.z_=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(u){const l=Fo(u,`Initialization of query '${ie(t.query)}' failed`);return void t.onError(l)}e.queries.set(s,o),o.j_.push(t),t.Z_(e.onlineState),o.z_&&t.X_(o.z_)&&ni(e)}async function Zh(i,t){const e=U(i),n=t.query;let s=3;const o=e.queries.get(n);if(o){const u=o.j_.indexOf(t);u>=0&&(o.j_.splice(u,1),o.j_.length===0?s=t.J_()?0:1:!o.H_()&&t.J_()&&(s=2))}switch(s){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function tl(i,t){const e=U(i);let n=!1;for(const s of t){const o=s.query,u=e.queries.get(o);if(u){for(const l of u.j_)l.X_(s)&&(n=!0);u.z_=s}}n&&ni(e)}function el(i,t,e){const n=U(i),s=n.queries.get(t);if(s)for(const o of s.j_)o.onError(e);n.queries.delete(t)}function ni(i){i.Y_.forEach(t=>{t.next()})}var Lr,Fs;(Fs=Lr||(Lr={})).ea="default",Fs.Cache="cache";class nl{constructor(t,e,n){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(t){if(!this.options.includeMetadataChanges){const n=[];for(const s of t.docChanges)s.type!==3&&n.push(s);t=new ge(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const n=e!=="Offline";return(!this.options._a||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=ge.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==Lr.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(t){this.key=t}}class qo{constructor(t){this.key=t}}class rl{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=B(),this.mutatedKeys=B(),this.Aa=fo(t),this.Ra=new he(this.Aa)}get Va(){return this.Ta}ma(t,e){const n=e?e.fa:new Ms,s=e?e.Ra:this.Ra;let o=e?e.mutatedKeys:this.mutatedKeys,u=s,l=!1;const d=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((_,w)=>{const P=s.get(_),V=jn(this.query,w)?w:null,N=!!P&&this.mutatedKeys.has(P.key),L=!!V&&(V.hasLocalMutations||this.mutatedKeys.has(V.key)&&V.hasCommittedMutations);let k=!1;P&&V?P.data.isEqual(V.data)?N!==L&&(n.track({type:3,doc:V}),k=!0):this.ga(P,V)||(n.track({type:2,doc:V}),k=!0,(d&&this.Aa(V,d)>0||f&&this.Aa(V,f)<0)&&(l=!0)):!P&&V?(n.track({type:0,doc:V}),k=!0):P&&!V&&(n.track({type:1,doc:P}),k=!0,(d||f)&&(l=!0)),k&&(V?(u=u.add(V),o=L?o.add(_):o.delete(_)):(u=u.delete(_),o=o.delete(_)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const _=this.query.limitType==="F"?u.last():u.first();u=u.delete(_.key),o=o.delete(_.key),n.track({type:1,doc:_})}return{Ra:u,fa:n,ns:l,mutatedKeys:o}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,s){const o=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const u=t.fa.G_();u.sort((_,w)=>function(V,N){const L=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return O()}};return L(V)-L(N)}(_.type,w.type)||this.Aa(_.doc,w.doc)),this.pa(n),s=s!=null&&s;const l=e&&!s?this.ya():[],d=this.da.size===0&&this.current&&!s?1:0,f=d!==this.Ea;return this.Ea=d,u.length!==0||f?{snapshot:new ge(this.query,t.Ra,o,u,t.mutatedKeys,d===0,f,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Ms,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=B(),this.Ra.forEach(n=>{this.Sa(n.key)&&(this.da=this.da.add(n.key))});const e=[];return t.forEach(n=>{this.da.has(n)||e.push(new qo(n))}),this.da.forEach(n=>{t.has(n)||e.push(new Uo(n))}),e}ba(t){this.Ta=t.Ts,this.da=B();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return ge.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class il{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class sl{constructor(t){this.key=t,this.va=!1}}class ol{constructor(t,e,n,s,o,u){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.Ca={},this.Fa=new Jt(l=>co(l),Bn),this.Ma=new Map,this.xa=new Set,this.Oa=new J(x.comparator),this.Na=new Map,this.La=new Hr,this.Ba={},this.ka=new Map,this.qa=me.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function al(i,t,e=!0){const n=Go(i);let s;const o=n.Fa.get(t);return o?(n.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.Da()):s=await Bo(n,t,e,!0),s}async function ul(i,t){const e=Go(i);await Bo(e,t,!0,!1)}async function Bo(i,t,e,n){const s=await bh(i.localStore,At(t)),o=s.targetId,u=i.sharedClientState.addLocalQueryTarget(o,e);let l;return n&&(l=await hl(i,t,o,u==="current",s.resumeToken)),i.isPrimaryClient&&e&&Lo(i.remoteStore,s),l}async function hl(i,t,e,n,s){i.Ka=(w,P,V)=>async function(L,k,G,Q){let H=k.view.ma(G);H.ns&&(H=await ks(L.localStore,k.query,!1).then(({documents:E})=>k.view.ma(E,H)));const et=Q&&Q.targetChanges.get(k.targetId),Pt=Q&&Q.targetMismatches.get(k.targetId)!=null,it=k.view.applyChanges(H,L.isPrimaryClient,et,Pt);return qs(L,k.targetId,it.wa),it.snapshot}(i,w,P,V);const o=await ks(i.localStore,t,!0),u=new rl(t,o.Ts),l=u.ma(o.documents),d=Xe.createSynthesizedTargetChangeForCurrentChange(e,n&&i.onlineState!=="Offline",s),f=u.applyChanges(l,i.isPrimaryClient,d);qs(i,e,f.wa);const _=new il(t,e,u);return i.Fa.set(t,_),i.Ma.has(e)?i.Ma.get(e).push(t):i.Ma.set(e,[t]),f.snapshot}async function ll(i,t,e){const n=U(i),s=n.Fa.get(t),o=n.Ma.get(s.targetId);if(o.length>1)return n.Ma.set(s.targetId,o.filter(u=>!Bn(u,t))),void n.Fa.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await xr(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),e&&Yr(n.remoteStore,s.targetId),Mr(n,s.targetId)}).catch(Mn)):(Mr(n,s.targetId),await xr(n.localStore,s.targetId,!0))}async function cl(i,t){const e=U(i),n=e.Fa.get(t),s=e.Ma.get(n.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),Yr(e.remoteStore,n.targetId))}async function jo(i,t){const e=U(i);try{const n=await kh(e.localStore,t);t.targetChanges.forEach((s,o)=>{const u=e.Na.get(o);u&&($(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?u.va=!0:s.modifiedDocuments.size>0?$(u.va):s.removedDocuments.size>0&&($(u.va),u.va=!1))}),await Ko(e,n,t)}catch(n){await Mn(n)}}function Us(i,t,e){const n=U(i);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const s=[];n.Fa.forEach((o,u)=>{const l=u.view.Z_(t);l.snapshot&&s.push(l.snapshot)}),function(u,l){const d=U(u);d.onlineState=l;let f=!1;d.queries.forEach((_,w)=>{for(const P of w.j_)P.Z_(l)&&(f=!0)}),f&&ni(d)}(n.eventManager,t),s.length&&n.Ca.d_(s),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function dl(i,t,e){const n=U(i);n.sharedClientState.updateQueryState(t,"rejected",e);const s=n.Na.get(t),o=s&&s.key;if(o){let u=new J(x.comparator);u=u.insert(o,mt.newNoDocument(o,M.min()));const l=B().add(o),d=new Gn(M.min(),new Map,new J(q),u,l);await jo(n,d),n.Oa=n.Oa.remove(o),n.Na.delete(t),ri(n)}else await xr(n.localStore,t,!1).then(()=>Mr(n,t,e)).catch(Mn)}function Mr(i,t,e=null){i.sharedClientState.removeLocalQueryTarget(t);for(const n of i.Ma.get(t))i.Fa.delete(n),e&&i.Ca.$a(n,e);i.Ma.delete(t),i.isPrimaryClient&&i.La.gr(t).forEach(n=>{i.La.containsKey(n)||zo(i,n)})}function zo(i,t){i.xa.delete(t.path.canonicalString());const e=i.Oa.get(t);e!==null&&(Yr(i.remoteStore,e),i.Oa=i.Oa.remove(t),i.Na.delete(e),ri(i))}function qs(i,t,e){for(const n of e)n instanceof Uo?(i.La.addReference(n.key,t),fl(i,n)):n instanceof qo?(D("SyncEngine","Document no longer in limbo: "+n.key),i.La.removeReference(n.key,t),i.La.containsKey(n.key)||zo(i,n.key)):O()}function fl(i,t){const e=t.key,n=e.path.canonicalString();i.Oa.get(e)||i.xa.has(n)||(D("SyncEngine","New document in limbo: "+e),i.xa.add(n),ri(i))}function ri(i){for(;i.xa.size>0&&i.Oa.size<i.maxConcurrentLimboResolutions;){const t=i.xa.values().next().value;i.xa.delete(t);const e=new x(X.fromString(t)),n=i.qa.next();i.Na.set(n,new sl(e)),i.Oa=i.Oa.insert(e,n),Lo(i.remoteStore,new Ft(At(Kr(e.path)),n,"TargetPurposeLimboResolution",On.oe))}}async function Ko(i,t,e){const n=U(i),s=[],o=[],u=[];n.Fa.isEmpty()||(n.Fa.forEach((l,d)=>{u.push(n.Ka(d,t,e).then(f=>{var _;if((f||e)&&n.isPrimaryClient){const w=f?!f.fromCache:(_=e==null?void 0:e.targetChanges.get(d.targetId))===null||_===void 0?void 0:_.current;n.sharedClientState.updateQueryState(d.targetId,w?"current":"not-current")}if(f){s.push(f);const w=Xr.Wi(d.targetId,f);o.push(w)}}))}),await Promise.all(u),n.Ca.d_(s),await async function(d,f){const _=U(d);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>R.forEach(f,P=>R.forEach(P.$i,V=>_.persistence.referenceDelegate.addReference(w,P.targetId,V)).next(()=>R.forEach(P.Ui,V=>_.persistence.referenceDelegate.removeReference(w,P.targetId,V)))))}catch(w){if(!_e(w))throw w;D("LocalStore","Failed to update sequence numbers: "+w)}for(const w of f){const P=w.targetId;if(!w.fromCache){const V=_.os.get(P),N=V.snapshotVersion,L=V.withLastLimboFreeSnapshotVersion(N);_.os=_.os.insert(P,L)}}}(n.localStore,o))}async function ml(i,t){const e=U(i);if(!e.currentUser.isEqual(t)){D("SyncEngine","User change. New user:",t.toKey());const n=await ko(e.localStore,t);e.currentUser=t,function(o,u){o.ka.forEach(l=>{l.forEach(d=>{d.reject(new b(S.CANCELLED,u))})}),o.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await Ko(e,n.hs)}}function gl(i,t){const e=U(i),n=e.Na.get(t);if(n&&n.va)return B().add(n.key);{let s=B();const o=e.Ma.get(t);if(!o)return s;for(const u of o){const l=e.Fa.get(u);s=s.unionWith(l.view.Va)}return s}}function Go(i){const t=U(i);return t.remoteStore.remoteSyncer.applyRemoteEvent=jo.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=gl.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=dl.bind(null,t),t.Ca.d_=tl.bind(null,t.eventManager),t.Ca.$a=el.bind(null,t.eventManager),t}class xn{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=bo(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return Dh(this.persistence,new Vh,t.initialUser,this.serializer)}Ga(t){return new Do(Wr.Zr,this.serializer)}Wa(t){return new Lh}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}xn.provider={build:()=>new xn};class pl extends xn{constructor(t){super(),this.cacheSizeBytes=t}ja(t,e){$(this.persistence.referenceDelegate instanceof bn);const n=this.persistence.referenceDelegate.garbageCollector;return new fh(n,t.asyncQueue,e)}Ga(t){const e=this.cacheSizeBytes!==void 0?yt.withCacheSize(this.cacheSizeBytes):yt.DEFAULT;return new Do(n=>bn.Zr(n,e),this.serializer)}}class Or{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Us(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=ml.bind(null,this.syncEngine),await Wh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Yh}()}createDatastore(t){const e=bo(t.databaseInfo.databaseId),n=function(o){return new Uh(o)}(t.databaseInfo);return function(o,u,l,d){return new jh(o,u,l,d)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,s,o,u,l){return new Kh(n,s,o,u,l)}(this.localStore,this.datastore,t.asyncQueue,e=>Us(this.syncEngine,e,0),function(){return bs.D()?new bs:new Mh}())}createSyncEngine(t,e){return function(s,o,u,l,d,f,_){const w=new ol(s,o,u,l,d,f);return _&&(w.Qa=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=U(s);D("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await Ye(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Or.provider={build:()=>new Or};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):Nt("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(t,e,n,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=ft.UNAUTHENTICATED,this.clientId=ro.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(n,async u=>{D("FirestoreClient","Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(n,u=>(D("FirestoreClient","Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ae;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Fo(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function Ir(i,t){i.asyncQueue.verifyOperationInProgress(),D("FirestoreClient","Initializing OfflineComponentProvider");const e=i.configuration;await t.initialize(e);let n=e.initialUser;i.setCredentialChangeListener(async s=>{n.isEqual(s)||(await ko(t.localStore,s),n=s)}),t.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=t}async function Bs(i,t){i.asyncQueue.verifyOperationInProgress();const e=await Tl(i);D("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,i.configuration),i.setCredentialChangeListener(n=>Ls(t.remoteStore,n)),i.setAppCheckTokenChangeListener((n,s)=>Ls(t.remoteStore,s)),i._onlineComponents=t}async function Tl(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){D("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ir(i,i._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===S.FAILED_PRECONDITION||s.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;le("Error using user provided cache. Falling back to memory cache: "+e),await Ir(i,new xn)}}else D("FirestoreClient","Using default OfflineComponentProvider"),await Ir(i,new pl(void 0));return i._offlineComponents}async function El(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(D("FirestoreClient","Using user provided OnlineComponentProvider"),await Bs(i,i._uninitializedComponentsProvider._online)):(D("FirestoreClient","Using default OnlineComponentProvider"),await Bs(i,new Or))),i._onlineComponents}async function js(i){const t=await El(i),e=t.eventManager;return e.onListen=al.bind(null,t.syncEngine),e.onUnlisten=ll.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=ul.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=cl.bind(null,t.syncEngine),e}/**
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
 */function $o(i){const t={};return i.timeoutSeconds!==void 0&&(t.timeoutSeconds=i.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vl(i,t,e){if(!e)throw new b(S.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${t}.`)}function Il(i,t,e,n){if(t===!0&&n===!0)throw new b(S.INVALID_ARGUMENT,`${i} and ${e} cannot be used together.`)}function Ks(i){if(!x.isDocumentKey(i))throw new b(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function Al(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(i);return t?`a custom ${t} object`:"an object"}}return typeof i=="function"?"a function":O()}function Cn(i,t){if("_delegate"in i&&(i=i._delegate),!(i instanceof t)){if(t.name===i.constructor.name)throw new b(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Al(i);throw new b(S.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(t){var e,n;if(t.host===void 0){if(t.ssl!==void 0)throw new b(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new b(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Il("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=$o((n=t.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new b(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new b(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new b(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,s){return n.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class ii{constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Gs({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new b(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new b(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Gs(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Ka;switch(n.type){case"firstParty":return new Ha(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new b(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=zs.get(e);n&&(D("ComponentProvider","Removing Datastore"),zs.delete(e),n.terminate())}(this),Promise.resolve()}}function wl(i,t,e,n={}){var s;const o=(i=Cn(i,ii))._getSettings(),u=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==u&&le("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),i._setSettings(Object.assign(Object.assign({},o),{host:u,ssl:!1})),n.mockUserToken){let l,d;if(typeof n.mockUserToken=="string")l=n.mockUserToken,d=ft.MOCK_USER;else{l=qa(n.mockUserToken,(s=i._app)===null||s===void 0?void 0:s.options.projectId);const f=n.mockUserToken.sub||n.mockUserToken.user_id;if(!f)throw new b(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new ft(f)}i._authCredentials=new Ga(new no(l,d))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Qn(this.firestore,t,this._query)}}class kt{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new He(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new kt(this.firestore,t,this._key)}}class He extends Qn{constructor(t,e,n){super(t,e,Kr(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new kt(this.firestore,null,new x(t))}withConverter(t){return new He(this.firestore,t,this._path)}}function Bl(i,t,...e){if(i=Ws(i),arguments.length===1&&(t=ro.newId()),vl("doc","path",t),i instanceof ii){const n=X.fromString(t,...e);return Ks(n),new kt(i,null,new x(n))}{if(!(i instanceof kt||i instanceof He))throw new b(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=i._path.child(X.fromString(t,...e));return Ks(n),new kt(i.firestore,i instanceof He?i.converter:null,new x(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new xo(this,"async_queue_retry"),this.Vu=()=>{const n=vr();n&&D("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()},this.mu=t;const e=vr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=vr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new ae;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!_e(t))throw t;D("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(n=>{this.Eu=n,this.du=!1;const s=function(u){let l=u.message||"";return u.stack&&(l=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),l}(n);throw Nt("INTERNAL UNHANDLED ERROR: ",s),n}).then(n=>(this.du=!1,n))));return this.mu=e,e}enqueueAfterDelay(t,e,n){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const s=ei.createAndSchedule(this,t,e,n,o=>this.yu(o));return this.Tu.push(s),s}fu(){this.Eu&&O()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}function Qs(i){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const o of n)if(o in s&&typeof s[o]=="function")return!0;return!1}(i,["next","error","complete"])}class Fr extends ii{constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=new $s,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new $s(t),this._firestoreClient=void 0,await t}}}function jl(i,t){const e=typeof i=="object"?i:xa(),n=typeof i=="string"?i:"(default)",s=La(e,"firestore").getImmediate({identifier:n});if(!s._initialized){const o=Ma("firestore");o&&wl(s,...o)}return s}function Rl(i){if(i._terminated)throw new b(S.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||Pl(i),i._firestoreClient}function Pl(i){var t,e,n;const s=i._freezeSettings(),o=function(l,d,f,_){return new hu(l,d,f,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,$o(_.experimentalLongPollingOptions),_.useFetchStreams)}(i._databaseId,((t=i._app)===null||t===void 0?void 0:t.options.appId)||"",i._persistenceKey,s);i._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((n=s.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(i._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),i._firestoreClient=new yl(i._authCredentials,i._appCheckCredentials,i._queue,o,i._componentsProvider&&function(l){const d=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(d),_online:d}}(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ln(at.fromBase64String(t))}catch(e){throw new b(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ln(at.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new b(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _t(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new b(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new b(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return q(this._lat,t._lat)||q(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(n,s){if(n.length!==s.length)return!1;for(let o=0;o<n.length;++o)if(n[o]!==s[o])return!1;return!0}(this._values,t._values)}}const Sl=new RegExp("[~\\*/\\[\\]]");function Dl(i,t,e){if(t.search(Sl)>=0)throw Hs(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,i);try{return new Qo(...t.split("."))._internalPath}catch{throw Hs(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i)}}function Hs(i,t,e,n,s){let o=`Function ${t}() called with invalid data`;o+=". ";let u="";return new b(S.INVALID_ARGUMENT,o+i+u)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(t,e,n,s,o){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new kt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new kl(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Wo("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class kl extends Ho{data(){return super.data()}}function Wo(i,t){return typeof t=="string"?Dl(i,t):t instanceof Qo?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new b(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class bl{convertValue(t,e="none"){switch(jt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Y(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Bt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw O()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return We(t,(s,o)=>{n[s]=this.convertValue(o,e)}),n}convertVectorValue(t){var e,n,s;const o=(s=(n=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.map(u=>Y(u.doubleValue));return new Vl(o)}convertGeoPoint(t){return new Cl(Y(t.latitude),Y(t.longitude))}convertArray(t,e){return(t.values||[]).map(n=>this.convertValue(n,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Un(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Ge(t));default:return null}}convertTimestamp(t){const e=qt(t);return new Tt(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=X.fromString(t);$(So(n));const s=new $e(n.get(1),n.get(3)),o=new x(n.popFirst(5));return s.isEqual(e)||Nt(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Xo extends Ho{constructor(t,e,n,s,o,u){super(t,e,n,s,u),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Vn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Wo("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Vn extends Xo{data(t={}){return super.data(t)}}class xl{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Ue(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new Vn(this._firestore,this._userDataWriter,n.key,n,new Ue(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new b(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let u=0;return s._snapshot.docChanges.map(l=>{const d=new Vn(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ue(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:d,oldIndex:-1,newIndex:u++}})}{let u=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>o||l.type!==3).map(l=>{const d=new Vn(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ue(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,_=-1;return l.type!==0&&(f=u.indexOf(l.doc.key),u=u.delete(l.doc.key)),l.type!==1&&(u=u.add(l.doc),_=u.indexOf(l.doc.key)),{type:Ll(l.type),doc:d,oldIndex:f,newIndex:_}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Ll(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return O()}}class Yo extends bl{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ln(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new kt(this.firestore,null,e)}}function zl(i,...t){var e,n,s;i=Ws(i);let o={includeMetadataChanges:!1,source:"default"},u=0;typeof t[u]!="object"||Qs(t[u])||(o=t[u],u++);const l={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(Qs(t[u])){const w=t[u];t[u]=(e=w.next)===null||e===void 0?void 0:e.bind(w),t[u+1]=(n=w.error)===null||n===void 0?void 0:n.bind(w),t[u+2]=(s=w.complete)===null||s===void 0?void 0:s.bind(w)}let d,f,_;if(i instanceof kt)f=Cn(i.firestore,Fr),_=Kr(i._key.path),d={next:w=>{t[u]&&t[u](Ml(f,i,w))},error:t[u+1],complete:t[u+2]};else{const w=Cn(i,Qn);f=Cn(w.firestore,Fr),_=w._query;const P=new Yo(f);d={next:V=>{t[u]&&t[u](new xl(f,P,w,V))},error:t[u+1],complete:t[u+2]},Nl(i._query)}return function(P,V,N,L){const k=new _l(L),G=new nl(V,k,N);return P.asyncQueue.enqueueAndForget(async()=>Jh(await js(P),G)),()=>{k.Za(),P.asyncQueue.enqueueAndForget(async()=>Zh(await js(P),G))}}(Rl(f),_,l,d)}function Ml(i,t,e){const n=e.docs.get(t._key),s=new Yo(i);return new Xo(i,s,t._key,n,new Ue(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(s){pe=s})(Ba),Oa(new Fa("firestore",(n,{instanceIdentifier:s,options:o})=>{const u=n.getProvider("app").getImmediate(),l=new Fr(new $a(n.getProvider("auth-internal")),new Xa(n.getProvider("app-check-internal")),function(f,_){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new b(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $e(f.options.projectId,_)}(u,s),u);return o=Object.assign({useFetchStreams:e},o),l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),ss(as,"4.7.4",t),ss(as,"4.7.4","esm2017")})();export{Bl as d,jl as g,zl as o};
