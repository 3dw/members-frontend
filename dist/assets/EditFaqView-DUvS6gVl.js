import{B as f,r as d,o as q,l as u,p as h,x as b,O as k,d as n,f as s,i as w,t as p,h as g,w as v,v as y,j as r,_ as I}from"./index-BycQk7ll.js";const F=f({name:"EditFaqView",props:{uid:{type:String,required:!0}},setup(){const t=k(),e=d({id:"",category:"",question:"",answer:""}),l=d(!1);return q(async()=>{try{const a=t.params.id,i=(await u.get("https://members-backend.alearn13994229.workers.dev/api/Faq")).data;console.log(a),console.log(i);const o=i.find(c=>c.id===parseInt(a));o&&(e.value=o)}catch(a){console.error("獲取FAQ資料失敗:",a)}}),{faqItem:e,updating:l}},methods:{toggleLogin(){this.$emit("toggleLogin")},parseAnswer(t){return console.log(t),t.replace(/\\n/g,`
`)},async updateFaq(){this.updating=!0;try{await u.post(`https://members-backend.alearn13994229.workers.dev/update/faq/${this.faqItem.id}`,{content:this.parseAnswer(this.faqItem.answer)}).then(()=>{alert("更新成功")}).catch(e=>{console.error("更新FAQ失敗:",e),alert("更新失敗")})}catch(e){console.error("更新FAQ失敗:",e),alert("更新失敗");return}const t={date:new Date().toISOString(),uid:this.uid,faqId:Number(this.faqItem.id),text:"問題："+this.faqItem.question+"己修改回答為："+this.faqItem.answer};h(b,t).then(()=>{console.log("更新成功"),this.goBack()})},goBack(){this.$router.push("/faq")}}}),B={class:"faq-container"},$={key:0,class:"ui dimmer"},V={class:"ui container"},A={key:0,class:"ui form"},C={class:"field"},L={class:"field"},N={class:"field"};function S(t,e,l,a,m,i){return r(),n("div",B,[t.updating?(r(),n("div",$,e[4]||(e[4]=[s("div",{class:"ui loader"},null,-1)]))):w("",!0),s("div",V,[t.uid?(r(),n("div",A,[s("div",C,[s("label",null,"類別："+p(t.faqItem.category),1)]),s("div",L,[e[5]||(e[5]=s("label",null,"問題：",-1)),g(p(t.faqItem.question),1)]),s("div",N,[e[6]||(e[6]=s("label",null,"回答",-1)),v(s("textarea",{"onUpdate:modelValue":e[0]||(e[0]=o=>t.faqItem.answer=o),rows:"20"},null,512),[[y,t.faqItem.answer]])]),s("button",{class:"ui button primary",type:"button",onClick:e[1]||(e[1]=(...o)=>t.updateFaq&&t.updateFaq(...o))},"儲存"),s("button",{class:"ui button",onClick:e[2]||(e[2]=(...o)=>t.goBack&&t.goBack(...o))},"返回")])):(r(),n("button",{key:1,class:"ui button orange",type:"button",onClick:e[3]||(e[3]=(...o)=>t.toggleLogin&&t.toggleLogin(...o))},e[7]||(e[7]=[s("i",{class:"user icon"},null,-1),g("請先登人以編輯問答")])))])])}const E=I(F,[["render",S],["__scopeId","data-v-7d617664"]]);export{E as default};