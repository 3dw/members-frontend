import{d as c,r as m,b as f,e as d,u as q,c as i,a as s,t as u,h as p,w as b,g as k,o as l,_ as w}from"./index-DVgoqSBv.js";const y=c({name:"EditFaqView",props:{uid:{type:String,required:!0}},setup(){const e=q(),t=m({id:"",category:"",question:"",answer:""});return f(async()=>{try{const a=e.params.id,n=(await d.get("https://members-backend.alearn13994229.workers.dev/api/Faq")).data;console.log(a),console.log(n);const r=n.find(o=>o.id===parseInt(a));r&&(t.value=r)}catch(a){console.error("獲取FAQ資料失敗:",a)}}),{faqItem:t}},methods:{toggleLogin(){this.$emit("toggleLogin")},parseAnswer(e){return console.log(e),e.replace(/\\n/g,`
`)},async updateFaq(){try{await d.post(`https://members-backend.alearn13994229.workers.dev/update/faq/${this.faqItem.id}`,{content:this.parseAnswer(this.faqItem.answer)}),alert("更新成功"),this.goBack()}catch(e){console.error("更新FAQ失敗:",e),alert("更新失敗")}},goBack(){this.$router.push("/faq")}}}),v={class:"faq-container"},I={class:"ui container"},F={key:0,class:"ui form"},h={class:"field"},B={class:"field"},$={class:"field"};function V(e,t,a,g,n,r){return l(),i("div",v,[s("div",I,[e.uid?(l(),i("div",F,[s("div",h,[s("label",null,"類別："+u(e.faqItem.category),1)]),s("div",B,[t[4]||(t[4]=s("label",null,"問題：",-1)),p(u(e.faqItem.question),1)]),s("div",$,[t[5]||(t[5]=s("label",null,"回答",-1)),b(s("textarea",{"onUpdate:modelValue":t[0]||(t[0]=o=>e.faqItem.answer=o),rows:"20"},null,512),[[k,e.faqItem.answer]])]),s("button",{class:"ui button primary",type:"button",onClick:t[1]||(t[1]=(...o)=>e.updateFaq&&e.updateFaq(...o))},"儲存"),s("button",{class:"ui button",onClick:t[2]||(t[2]=(...o)=>e.goBack&&e.goBack(...o))},"返回")])):(l(),i("button",{key:1,class:"ui button orange",type:"button",onClick:t[3]||(t[3]=(...o)=>e.toggleLogin&&e.toggleLogin(...o))},t[6]||(t[6]=[s("i",{class:"user icon"},null,-1),p("請先登人以編輯問答")])))])])}const C=w(y,[["render",V],["__scopeId","data-v-8f46dad9"]]);export{C as default};