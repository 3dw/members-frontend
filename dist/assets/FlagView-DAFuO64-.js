import{m as l}from"./mix-O88PJOmL.js";import{C as d}from"./Card-D0vUpie8.js";import{L as u}from"./Loader-CF1WPujM.js";import{c as r,a as i,t as g,e as n,F as m,r as c,o as s,w as p,J as h,z as k,C as f,_ as L,U as v}from"./index-DX0VgYeW.js";const y={class:"hello"},B={key:0,class:"ui row"},$={class:"sixteen wide column"},b={class:"ui huge buttons"},S={key:1,class:"ui segment container",id:"flag"},w={class:"ui fluid card"};function C(e,o,q,F,V,A){const a=f("card");return s(),r("div",y,[!e.users||e.toList(e.users).length==0?(s(),r("div",B,[i("div",$,[i("div",b,[i("button",{class:"ui orange button",onClick:o[0]||(o[0]=(...t)=>e.toggleLogin&&e.toggleLogin(...t))},g(e.$t("login.login_to_see_data")),1)])])])):n("",!0),e.users&&e.toList(e.users).length>0?(s(),r("div",S,[(s(!0),r(m,null,c(e.toList(e.users),(t,T)=>p((s(),r("div",w,[t.uid==e.$route.params.uid?(s(),k(a,{key:0,uid:e.uid,h:t,clickable:!1,full:!0,book:e.book,mySearch:e.mySearch,onLocate:e.locate,onAddBook:e.addBook,onRemoveBook:e.removeBook,onLoginGoogle:e.loginGoogle,onToggleLogin:e.toggleLogin},null,8,["uid","h","book","mySearch","onLocate","onAddBook","onRemoveBook","onLoginGoogle","onToggleLogin"])):n("",!0)],512)),[[h,t.uid==e.$route.params.uid]])),256))])):n("",!0)])}const G=v({name:"FlagView",components:{Card:d,Loader:u},mixins:[l],props:{uid:{type:String,required:!1,default:()=>""},users:{type:Object,required:!1,default:()=>({})},book:{type:Array,required:!1,default:()=>[]},mySearch:{type:String,required:!1,default:()=>""}},computed:{myT(){return Object.keys(this.users).length>0&&this.$route.params.uid?this.users[this.$route.params.uid].name:[{name:"旗幟"}][0].name}},methods:{locate(e,o){this.$emit("locate",e,o)},addBook(e){console.log(e),this.$emit("addBook",e)},removeBook(e){console.log(e),this.$emit("removeBook",e)},loginGoogle(e,o){this.$emit("loginGoogle",e,o)},toggleLogin(){this.$emit("toggleLogin")}}}),O=L(G,[["render",C],["__scopeId","data-v-8136467a"]]);export{O as default};