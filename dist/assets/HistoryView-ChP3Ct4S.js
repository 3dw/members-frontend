import{B as y,A as J,C as S,D as Q,E as f,G as L,H as b,I as R,J as q,K as X,L as j,M as Y,N as I,O as Z,i as T,e as k,F as ee,h as te,f as v,P as w,g as A,r as ne,Q as ie,y as B,z as re,t as D,k as oe,_ as ae}from"./index-DVrtAOyK.js";var N={};function le(n="pui_id_"){return N.hasOwnProperty(n)||(N[n]=0),N[n]++,`${n}${N[n]}`}var P={_loadedStyleNames:new Set,getLoadedStyleNames:function(){return this._loadedStyleNames},isStyleNameLoaded:function(e){return this._loadedStyleNames.has(e)},setLoadedStyleName:function(e){this._loadedStyleNames.add(e)},deleteLoadedStyleName:function(e){this._loadedStyleNames.delete(e)},clearLoadedStyleNames:function(){this._loadedStyleNames.clear()}},z=y.extend({name:"common"});function x(n){"@babel/helpers - typeof";return x=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(n)}function se(n){return F(n)||ue(n)||G(n)||M()}function ue(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function O(n,e){return F(n)||de(n,e)||G(n,e)||M()}function M(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function G(n,e){if(n){if(typeof n=="string")return U(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?U(n,e):void 0}}function U(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=Array(e);t<e;t++)i[t]=n[t];return i}function de(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var i,r,a,u,o=[],d=!0,m=!1;try{if(a=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;d=!1}else for(;!(d=(i=a.call(t)).done)&&(o.push(i.value),o.length!==e);d=!0);}catch(s){m=!0,r=s}finally{try{if(!d&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(m)throw r}}return o}}function F(n){if(Array.isArray(n))return n}function K(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?K(Object(t),!0).forEach(function(i){C(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):K(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function C(n,e,t){return(e=me(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function me(n){var e=ce(n,"string");return x(e)=="symbol"?e:e+""}function ce(n,e){if(x(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(x(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var pe={name:"BaseComponent",props:{pt:{type:Object,default:void 0},ptOptions:{type:Object,default:void 0},unstyled:{type:Boolean,default:void 0},dt:{type:Object,default:void 0}},inject:{$parentInstance:{default:void 0}},watch:{isUnstyled:{immediate:!0,handler:function(e){e||(this._loadCoreStyles(),this._themeChangeListener(this._loadCoreStyles))}},dt:{immediate:!0,handler:function(e){var t=this;e?(this._loadScopedThemeStyles(e),this._themeChangeListener(function(){return t._loadScopedThemeStyles(e)})):this._unloadScopedThemeStyles()}}},scopedStyleEl:void 0,rootEl:void 0,$attrSelector:void 0,beforeCreate:function(){var e,t,i,r,a,u,o,d,m,s,p,c=(e=this.pt)===null||e===void 0?void 0:e._usept,h=c?(t=this.pt)===null||t===void 0||(t=t.originalValue)===null||t===void 0?void 0:t[this.$.type.name]:void 0,g=c?(i=this.pt)===null||i===void 0||(i=i.value)===null||i===void 0?void 0:i[this.$.type.name]:this.pt;(r=g||h)===null||r===void 0||(r=r.hooks)===null||r===void 0||(a=r.onBeforeCreate)===null||a===void 0||a.call(r);var _=(u=this.$primevueConfig)===null||u===void 0||(u=u.pt)===null||u===void 0?void 0:u._usept,E=_?(o=this.$primevue)===null||o===void 0||(o=o.config)===null||o===void 0||(o=o.pt)===null||o===void 0?void 0:o.originalValue:void 0,$=_?(d=this.$primevue)===null||d===void 0||(d=d.config)===null||d===void 0||(d=d.pt)===null||d===void 0?void 0:d.value:(m=this.$primevue)===null||m===void 0||(m=m.config)===null||m===void 0?void 0:m.pt;(s=$||E)===null||s===void 0||(s=s[this.$.type.name])===null||s===void 0||(s=s.hooks)===null||s===void 0||(p=s.onBeforeCreate)===null||p===void 0||p.call(s),this.$attrSelector=le("pc")},created:function(){this._hook("onCreated")},beforeMount:function(){this.rootEl=J(this.$el,'[data-pc-name="'.concat(S(this.$.type.name),'"]')),this.rootEl&&(this.$attrSelector&&!this.rootEl.hasAttribute(this.$attrSelector)&&this.rootEl.setAttribute(this.$attrSelector,""),this.rootEl.$pc=l({name:this.$.type.name,attrSelector:this.$attrSelector},this.$params)),this._loadStyles(),this._hook("onBeforeMount")},mounted:function(){this._hook("onMounted")},beforeUpdate:function(){this._hook("onBeforeUpdate")},updated:function(){this._hook("onUpdated")},beforeUnmount:function(){this._hook("onBeforeUnmount")},unmounted:function(){this._unloadScopedThemeStyles(),this._hook("onUnmounted")},methods:{_hook:function(e){if(!this.$options.hostName){var t=this._usePT(this._getPT(this.pt,this.$.type.name),this._getOptionValue,"hooks.".concat(e)),i=this._useDefaultPT(this._getOptionValue,"hooks.".concat(e));t==null||t(),i==null||i()}},_mergeProps:function(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),r=1;r<t;r++)i[r-1]=arguments[r];return Q(e)?e.apply(void 0,i):f.apply(void 0,i)},_loadStyles:function(){var e=this,t=function(){P.isStyleNameLoaded("base")||(y.loadCSS(e.$styleOptions),e._loadGlobalStyles(),P.setLoadedStyleName("base")),e._loadThemeStyles()};t(),this._themeChangeListener(t)},_loadCoreStyles:function(){var e,t;!P.isStyleNameLoaded((e=this.$style)===null||e===void 0?void 0:e.name)&&(t=this.$style)!==null&&t!==void 0&&t.name&&(z.loadCSS(this.$styleOptions),this.$options.style&&this.$style.loadCSS(this.$styleOptions),P.setLoadedStyleName(this.$style.name))},_loadGlobalStyles:function(){var e=this._useGlobalPT(this._getOptionValue,"global.css",this.$params);L(e)&&y.load(e,l({name:"global"},this.$styleOptions))},_loadThemeStyles:function(){var e,t;if(!(this.isUnstyled||this.$theme==="none")){if(!b.isStyleNameLoaded("common")){var i,r,a=((i=this.$style)===null||i===void 0||(r=i.getCommonTheme)===null||r===void 0?void 0:r.call(i))||{},u=a.primitive,o=a.semantic,d=a.global,m=a.style;y.load(u==null?void 0:u.css,l({name:"primitive-variables"},this.$styleOptions)),y.load(o==null?void 0:o.css,l({name:"semantic-variables"},this.$styleOptions)),y.load(d==null?void 0:d.css,l({name:"global-variables"},this.$styleOptions)),y.loadTheme(l({name:"global-style"},this.$styleOptions),m),b.setLoadedStyleName("common")}if(!b.isStyleNameLoaded((e=this.$style)===null||e===void 0?void 0:e.name)&&(t=this.$style)!==null&&t!==void 0&&t.name){var s,p,c,h,g=((s=this.$style)===null||s===void 0||(p=s.getComponentTheme)===null||p===void 0?void 0:p.call(s))||{},_=g.css,E=g.style;(c=this.$style)===null||c===void 0||c.load(_,l({name:"".concat(this.$style.name,"-variables")},this.$styleOptions)),(h=this.$style)===null||h===void 0||h.loadTheme(l({name:"".concat(this.$style.name,"-style")},this.$styleOptions),E),b.setLoadedStyleName(this.$style.name)}if(!b.isStyleNameLoaded("layer-order")){var $,V,H=($=this.$style)===null||$===void 0||(V=$.getLayerOrderThemeCSS)===null||V===void 0?void 0:V.call($);y.load(H,l({name:"layer-order",first:!0},this.$styleOptions)),b.setLoadedStyleName("layer-order")}}},_loadScopedThemeStyles:function(e){var t,i,r,a=((t=this.$style)===null||t===void 0||(i=t.getPresetTheme)===null||i===void 0?void 0:i.call(t,e,"[".concat(this.$attrSelector,"]")))||{},u=a.css,o=(r=this.$style)===null||r===void 0?void 0:r.load(u,l({name:"".concat(this.$attrSelector,"-").concat(this.$style.name)},this.$styleOptions));this.scopedStyleEl=o.el},_unloadScopedThemeStyles:function(){var e;(e=this.scopedStyleEl)===null||e===void 0||(e=e.value)===null||e===void 0||e.remove()},_themeChangeListener:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(){};P.clearLoadedStyleNames(),R.on("theme:change",e)},_getHostInstance:function(e){return e?this.$options.hostName?e.$.type.name===this.$options.hostName?e:this._getHostInstance(e.$parentInstance):e.$parentInstance:void 0},_getPropValue:function(e){var t;return this[e]||((t=this._getHostInstance(this))===null||t===void 0?void 0:t[e])},_getOptionValue:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return q(e,t,i)},_getPTValue:function(){var e,t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0,u=/./g.test(i)&&!!r[i.split(".")[0]],o=this._getPropValue("ptOptions")||((e=this.$primevueConfig)===null||e===void 0?void 0:e.ptOptions)||{},d=o.mergeSections,m=d===void 0?!0:d,s=o.mergeProps,p=s===void 0?!1:s,c=a?u?this._useGlobalPT(this._getPTClassValue,i,r):this._useDefaultPT(this._getPTClassValue,i,r):void 0,h=u?void 0:this._getPTSelf(t,this._getPTClassValue,i,l(l({},r),{},{global:c||{}})),g=this._getPTDatasets(i);return m||!m&&h?p?this._mergeProps(p,c,h,g):l(l(l({},c),h),g):l(l({},h),g)},_getPTSelf:function(){for(var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length,i=new Array(t>1?t-1:0),r=1;r<t;r++)i[r-1]=arguments[r];return f(this._usePT.apply(this,[this._getPT(e,this.$name)].concat(i)),this._usePT.apply(this,[this.$_attrsPT].concat(i)))},_getPTDatasets:function(){var e,t,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",r="data-pc-",a=i==="root"&&L((e=this.pt)===null||e===void 0?void 0:e["data-pc-section"]);return i!=="transition"&&l(l({},i==="root"&&l(l(C({},"".concat(r,"name"),S(a?(t=this.pt)===null||t===void 0?void 0:t["data-pc-section"]:this.$.type.name)),a&&C({},"".concat(r,"extend"),S(this.$.type.name))),X()&&C({},"".concat(this.$attrSelector),""))),{},C({},"".concat(r,"section"),S(i)))},_getPTClassValue:function(){var e=this._getOptionValue.apply(this,arguments);return j(e)||Y(e)?{class:e}:e},_getPT:function(e){var t=this,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0,a=function(o){var d,m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=r?r(o):o,p=S(i),c=S(t.$name);return(d=m?p!==c?s==null?void 0:s[p]:void 0:s==null?void 0:s[p])!==null&&d!==void 0?d:s};return e!=null&&e.hasOwnProperty("_usept")?{_usept:e._usept,originalValue:a(e.originalValue),value:a(e.value)}:a(e,!0)},_usePT:function(e,t,i,r){var a=function(_){return t(_,i,r)};if(e!=null&&e.hasOwnProperty("_usept")){var u,o=e._usept||((u=this.$primevueConfig)===null||u===void 0?void 0:u.ptOptions)||{},d=o.mergeSections,m=d===void 0?!0:d,s=o.mergeProps,p=s===void 0?!1:s,c=a(e.originalValue),h=a(e.value);return c===void 0&&h===void 0?void 0:j(h)?h:j(c)?c:m||!m&&h?p?this._mergeProps(p,c,h):l(l({},c),h):h}return a(e)},_useGlobalPT:function(e,t,i){return this._usePT(this.globalPT,e,t,i)},_useDefaultPT:function(e,t,i){return this._usePT(this.defaultPT,e,t,i)},ptm:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this._getPTValue(this.pt,e,l(l({},this.$params),t))},ptmi:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return f(this.$_attrsWithoutPT,this.ptm(e,t))},ptmo:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this._getPTValue(e,t,l({instance:this},i),!1)},cx:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.isUnstyled?void 0:this._getOptionValue(this.$style.classes,e,l(l({},this.$params),t))},sx:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(t){var r=this._getOptionValue(this.$style.inlineStyles,e,l(l({},this.$params),i)),a=this._getOptionValue(z.inlineStyles,e,l(l({},this.$params),i));return[a,r]}}},computed:{globalPT:function(){var e,t=this;return this._getPT((e=this.$primevueConfig)===null||e===void 0?void 0:e.pt,void 0,function(i){return I(i,{instance:t})})},defaultPT:function(){var e,t=this;return this._getPT((e=this.$primevueConfig)===null||e===void 0?void 0:e.pt,void 0,function(i){return t._getOptionValue(i,t.$name,l({},t.$params))||I(i,l({},t.$params))})},isUnstyled:function(){var e;return this.unstyled!==void 0?this.unstyled:(e=this.$primevueConfig)===null||e===void 0?void 0:e.unstyled},$inProps:function(){var e,t=Object.keys(((e=this.$.vnode)===null||e===void 0?void 0:e.props)||{});return Object.fromEntries(Object.entries(this.$props).filter(function(i){var r=O(i,1),a=r[0];return t==null?void 0:t.includes(a)}))},$theme:function(){var e;return(e=this.$primevueConfig)===null||e===void 0?void 0:e.theme},$style:function(){return l(l({classes:void 0,inlineStyles:void 0,load:function(){},loadCSS:function(){},loadTheme:function(){}},(this._getHostInstance(this)||{}).$style),this.$options.style)},$styleOptions:function(){var e;return{nonce:(e=this.$primevueConfig)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce}},$primevueConfig:function(){var e;return(e=this.$primevue)===null||e===void 0?void 0:e.config},$name:function(){return this.$options.hostName||this.$.type.name},$params:function(){var e=this._getHostInstance(this)||this.$parent;return{instance:this,props:this.$props,state:this.$data,attrs:this.$attrs,parent:{instance:e,props:e==null?void 0:e.$props,state:e==null?void 0:e.$data,attrs:e==null?void 0:e.$attrs}}},$_attrsPT:function(){return Object.entries(this.$attrs||{}).filter(function(e){var t=O(e,1),i=t[0];return i==null?void 0:i.startsWith("pt:")}).reduce(function(e,t){var i=O(t,2),r=i[0],a=i[1],u=r.split(":"),o=se(u),d=o.slice(1);return d==null||d.reduce(function(m,s,p,c){return!m[s]&&(m[s]=p===c.length-1?a:{}),m[s]},e),e},{})},$_attrsWithoutPT:function(){return Object.entries(this.$attrs||{}).filter(function(e){var t=O(e,1),i=t[0];return!(i!=null&&i.startsWith("pt:"))}).reduce(function(e,t){var i=O(t,2),r=i[0],a=i[1];return e[r]=a,e},{})}}},he=function(e){var t=e.dt;return`
.p-timeline {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    direction: ltr;
}

.p-timeline-left .p-timeline-event-opposite {
    text-align: right;
}

.p-timeline-left .p-timeline-event-content {
    text-align: left;
}

.p-timeline-right .p-timeline-event {
    flex-direction: row-reverse;
}

.p-timeline-right .p-timeline-event-opposite {
    text-align: left;
}

.p-timeline-right .p-timeline-event-content {
    text-align: right;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) {
    flex-direction: row-reverse;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite {
    text-align: right;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content {
    text-align: left;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-opposite {
    text-align: left;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-content {
    text-align: right;
}

.p-timeline-vertical .p-timeline-event-opposite,
.p-timeline-vertical .p-timeline-event-content {
    padding: `.concat(t("timeline.vertical.event.content.padding"),`;
}

.p-timeline-vertical .p-timeline-event-connector {
    width: `).concat(t("timeline.event.connector.size"),`;
}

.p-timeline-event {
    display: flex;
    position: relative;
    min-height: `).concat(t("timeline.event.min.height"),`;
}

.p-timeline-event:last-child {
    min-height: 0;
}

.p-timeline-event-opposite {
    flex: 1;
}

.p-timeline-event-content {
    flex: 1;
}

.p-timeline-event-separator {
    flex: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.p-timeline-event-marker {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    align-self: baseline;
    border-width: `).concat(t("timeline.event.marker.border.width"),`;
    border-style: solid;
    border-color: `).concat(t("timeline.event.marker.border.color"),`;
    border-radius: `).concat(t("timeline.event.marker.border.radius"),`;
    width: `).concat(t("timeline.event.marker.size"),`;
    height: `).concat(t("timeline.event.marker.size"),`;
    background: `).concat(t("timeline.event.marker.background"),`;
}

.p-timeline-event-marker::before {
    content: " ";
    border-radius: `).concat(t("timeline.event.marker.content.border.radius"),`;
    width: `).concat(t("timeline.event.marker.content.size"),`;
    height:`).concat(t("timeline.event.marker.content.size"),`;
    background: `).concat(t("timeline.event.marker.content.background"),`;
}

.p-timeline-event-marker::after {
    content: " ";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: `).concat(t("timeline.event.marker.border.radius"),`;
    box-shadow: `).concat(t("timeline.event.marker.content.inset.shadow"),`;
}

.p-timeline-event-connector {
    flex-grow: 1;
    background: `).concat(t("timeline.event.connector.color"),`;
}

.p-timeline-horizontal {
    flex-direction: row;
}

.p-timeline-horizontal .p-timeline-event {
    flex-direction: column;
    flex: 1;
}

.p-timeline-horizontal .p-timeline-event:last-child {
    flex: 0;
}

.p-timeline-horizontal .p-timeline-event-separator {
    flex-direction: row;
}

.p-timeline-horizontal .p-timeline-event-connector {
    width: 100%;
    height: `).concat(t("timeline.event.connector.size"),`;
}

.p-timeline-horizontal .p-timeline-event-opposite,
.p-timeline-horizontal .p-timeline-event-content {
    padding: `).concat(t("timeline.horizontal.event.content.padding"),`;
}

.p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(even) {
    flex-direction: column-reverse;
}

.p-timeline-bottom .p-timeline-event {
    flex-direction: column-reverse;
}
`)},ve={root:function(e){var t=e.props;return["p-timeline p-component","p-timeline-"+t.align,"p-timeline-"+t.layout]},event:"p-timeline-event",eventOpposite:"p-timeline-event-opposite",eventSeparator:"p-timeline-event-separator",eventMarker:"p-timeline-event-marker",eventConnector:"p-timeline-event-connector",eventContent:"p-timeline-event-content"},fe=y.extend({name:"timeline",theme:he,classes:ve}),ge={name:"BaseTimeline",extends:pe,props:{value:null,align:{mode:String,default:"left"},layout:{mode:String,default:"vertical"},dataKey:null},style:fe,provide:function(){return{$pcTimeline:this,$parentInstance:this}}},W={name:"Timeline",extends:ge,inheritAttrs:!1,methods:{getKey:function(e,t){return this.dataKey?Z(e,this.dataKey):t},getPTOptions:function(e,t){return this.ptm(e,{context:{index:t,count:this.value.length}})}}};function ye(n,e,t,i,r,a){return T(),k("div",f({class:n.cx("root")},n.ptmi("root")),[(T(!0),k(ee,null,te(n.value,function(u,o){return T(),k("div",f({key:a.getKey(u,o),class:n.cx("event"),ref_for:!0},a.getPTOptions("event",o)),[v("div",f({class:n.cx("eventOpposite",{index:o}),ref_for:!0},a.getPTOptions("eventOpposite",o)),[w(n.$slots,"opposite",{item:u,index:o})],16),v("div",f({class:n.cx("eventSeparator"),ref_for:!0},a.getPTOptions("eventSeparator",o)),[w(n.$slots,"marker",{item:u,index:o},function(){return[v("div",f({class:n.cx("eventMarker"),ref_for:!0},a.getPTOptions("eventMarker",o)),null,16)]}),o!==n.value.length-1?w(n.$slots,"connector",{key:0,item:u,index:o},function(){return[v("div",f({class:n.cx("eventConnector"),ref_for:!0},a.getPTOptions("eventConnector",o)),null,16)]}):A("",!0)],16),v("div",f({class:n.cx("eventContent"),ref_for:!0},a.getPTOptions("eventContent",o)),[w(n.$slots,"content",{item:u,index:o})],16)],16)}),128))],16)}W.render=ye;const _e=[{date:"2023",text:"本會發起「向下延伸補助國中小自學生，落實不同社經背景家庭參與實驗教育之機會平等」線上連署並成功得到5354位網友具名連署",href:"https://join.gov.tw/idea/detail/cd1f42dd-f8ce-40f1-b63e-a4be079a0473"},{date:"2019",text:"108課綱後，加上COVID-19的影響，線上教育及跨社群連結蓬勃發展。本會持續與其他單位合作、培育新血師資、建立網路平台、推動修法爭取自學生的合理補助。"},{date:"2014",text:"在家自學學生人數達到2760人。"},{date:"2011",text:`教育部通過「高級中等教育階段辦理非學校型態實驗教育辦法」，但因配套不足，無學籍自學生需額外參加檢定考試才能報考大學，且考試時程比學測晚，影響升學權益。

同年本會採用網路協力、志工認領的方式持續運作，維持諮詢服務、教材流通、自學地圖網站以及對自學相關修法與政策的持續關注。`,href:"https://tw.news.yahoo.com/%E4%BF%AE%E6%B3%95%E7%BC%BA%E9%85%8D%E5%A5%97-%E8%87%AA%E5%AD%B8%E7%94%9F%E6%AC%8A%E7%9B%8A%E9%81%AD%E6%8E%92%E6%93%A0-160000075.html"},{date:"2009",text:"運用累積的經驗開設學習團體，陪伴自學家庭；傳承教育經驗給新夥伴，開發自學教材；與相關友會合作，開拓台灣自學資源。"},{date:"2008",text:"成立自主培力學園，針對體制內拒學、懼學和想自學的青少年，以一年的時間，透過全日制的團體學習，來瞭解自己，重建學習興趣和習慣。"},{date:"2007",text:"本會聯合各團體，爭取修改高中同等學力檢測辦法，使18歲的自學生得以參與檢測並據以報考大學。"},{date:"2003",text:"台北市自主學習實驗計畫結束。"},{date:"2001",text:"為延續自主學習的經驗與知識，當時的親、師、生結合學術界的專家學者，於3月30日召開會議籌設「中華民國自主學習促進會」，同年8月9日經內政部核准生效。"},{date:"2001",text:"自主學習實驗計畫面臨腰斬，親師生發起連署救校。",href:"https://www.youtube.com/watch?v=_W8gkOs_5fE"},{date:"1999",text:`修改國民教育法，授權各縣市自行訂定辦法。
自學開始有法律保障。`},{date:"1998",text:"台北市自主學習實驗計畫開始。"},{date:"1997",text:"台北市最早同意試辦自學。"},{date:"1994",text:"種籽親子實驗小學成立。台灣民主學校的先驅，由十個家庭共同創立。由社群教師李雅卿為創辦人及首任苑長。種籽的特色是討論文化、課程選修和師生平權的生活公約。",href:"https://seedling.tw/"}],$e={components:{Timeline:W},props:{},setup(){return{data:ne(_e)}},methods:{}},Se={class:"ui container"},be={class:"text-gray-500"},Te={class:"timeline-content"},Pe={class:"update-text"},Oe=["href"];function Ce(n,e,t,i,r,a){const u=re("Timeline");return T(),k("main",Se,[e[1]||(e[1]=v("h1",{class:"ui header"},"自學修法及本會歷史",-1)),e[2]||(e[2]=v("div",{class:"history-content"},[v("p",null,"自學法治化的歷史發展過程中，從最初各縣市自行訂定辦法，到現在成為具有完整法律保障的教育選擇，經歷了多次重要的修法歷程。本會與各個團體合作，透過不同的立法策略，包括「全面照顧」、「以小博大」、「南北合作」、「先嚴後鬆」、「先有後修」、「個案突顯」等方式，逐步爭取自學生的權益。")],-1)),i.data.length>0?(T(),ie(u,{key:0,value:i.data,align:"alternate"},{opposite:B(o=>[v("small",be,D(o.item.date),1)]),content:B(o=>[v("div",Te,[v("div",Pe,D(o.item.text),1),o.item.href?(T(),k("a",{key:0,class:"ui button",href:o.item.href,target:"_blank",rel:"noopener noreferrer"},e[0]||(e[0]=[oe("相關連結 "),v("i",{class:"external icon"},null,-1)]),8,Oe)):A("",!0)])]),_:1},8,["value"])):A("",!0)])}const xe=ae($e,[["render",Ce],["__scopeId","data-v-c996db77"]]);export{xe as default};
