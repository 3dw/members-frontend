import{d as m,r as u,b as k,e as c,c as r,a as s,w as f,v as b,F as h,f as g,g as q,o as l,t as y,h as p,i as w,_ as v}from"./index-BlQaKn-8.js";const L=m({name:"FaqView",props:{uid:{type:String,required:!0}},setup(){const e=u([]),t=u(["全部","起步","計畫","支持","資源","其他"]),n=u(""),a=u("全部");return k(async()=>{try{const d=await c.get("https://members-backend.alearn13994229.workers.dev/api/Faq");e.value=d.data}catch(d){console.error("獲取FAQ資料失敗:",d)}}),{faqItems:e,categories:t,searchKeyword:n,selectedCategory:a}},computed:{sortedFaqItems(){return this.faqItems.slice().sort((e,t)=>this.categories.indexOf(e.category)-this.categories.indexOf(t.category))},filteredAndSortedFaqItems(){const e=this.searchKeyword.toLowerCase().trim();let t=this.faqItems;return this.selectedCategory!=="全部"&&(t=t.filter(n=>n.category===this.selectedCategory)),e&&(t=t.filter(n=>n.category.toLowerCase().includes(e)||n.question.toLowerCase().includes(e)||n.answer.toLowerCase().includes(e))),t.sort((n,a)=>this.categories.indexOf(n.category)-this.categories.indexOf(a.category))}},methods:{toggleLogin(){this.$emit("toggleLogin")},fetchFaq(){this.faqItems=[],c.get("https://members-backend.alearn13994229.workers.dev/api/Faq").then(e=>{this.faqItems=e.data}).catch(e=>{console.error("獲取FAQ資料失敗:",e)})},parseLinks(e){return console.log(e),JSON.parse(e)},parseAnswer(e){return console.log(e),e.replace(/\\n/g,`
`)},editFaq(e){console.log(e),this.$router.push(`/edit_faq/${e}`)},deleteFaq(e){console.log(e)},deleteLink(e,t){console.log(e,t),confirm("確定要刪除此連結嗎？")&&(console.log("刪除"),c.delete(`https://members-backend.alearn13994229.workers.dev/delete/faq/${e}/link/${t}`).then(()=>{window.alert("刪除成功"),console.log("刪除成功"),this.fetchFaq()}).catch(n=>{window.alert("刪除失敗"),console.error("刪除失敗:",n)}))},escapeHtml(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")},highlightText(e){if(!this.searchKeyword.trim())return this.escapeHtml(e);const t=this.escapeHtml(e),n=this.escapeHtml(this.searchKeyword.toLowerCase().trim()),a=new RegExp(`(${n})`,"gi");return t.replace(a,'<span class="highlight">$1</span>')}}}),C={class:"faq-container"},F={class:"ui container"},T={class:"ui form"},$={class:"two stackable fields"},H={class:"field",style:{"max-width":"150px"}},I=["value"],M={class:"field"},V={class:"ui icon input"},A={class:"ui celled table"},K=["innerHTML"],S=["innerHTML"],O=["innerHTML"],N={class:"answer-cell"},B={key:0,class:"ui bulleted list"},_=["href"],D=["onClick"],E=["onClick"];function Q(e,t,n,a,d,U){return l(),r("div",C,[t[11]||(t[11]=s("h2",{class:"ui header"},"常見問題",-1)),s("div",F,[s("form",T,[s("div",$,[s("div",H,[t[3]||(t[3]=s("label",null,"類別篩選",-1)),f(s("select",{class:"ui dropdown","onUpdate:modelValue":t[0]||(t[0]=o=>e.selectedCategory=o)},[(l(!0),r(h,null,g(e.categories,o=>(l(),r("option",{value:o},y(o),9,I))),256))],512),[[b,e.selectedCategory]])]),s("div",M,[t[5]||(t[5]=s("label",null,"關鍵字篩選",-1)),s("div",V,[f(s("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=o=>e.searchKeyword=o),placeholder:"搜尋常見問題..."},null,512),[[q,e.searchKeyword]]),t[4]||(t[4]=s("i",{class:"search icon"},null,-1))])])])]),s("table",A,[t[10]||(t[10]=s("thead",null,[s("tr",null,[s("th",null,"類別"),s("th",null,"問題"),s("th",null,"回答"),s("th",null,"相關連結"),s("th",null,"操作")])],-1)),s("tbody",null,[(l(!0),r(h,null,g(e.filteredAndSortedFaqItems,o=>(l(),r("tr",{key:o.id},[s("td",{innerHTML:e.highlightText(o.category)},null,8,K),s("td",{innerHTML:e.highlightText(o.question)},null,8,S),s("td",{class:"answer-cell",innerHTML:e.highlightText(e.parseAnswer(o.answer))},null,8,O),s("td",N,[o.links&&e.parseLinks(o.links).length>0?(l(),r("div",B,[(l(!0),r(h,null,g(e.parseLinks(o.links),i=>(l(),r("div",{class:"item",key:i.h},[s("a",{href:i.h,target:"_blank",rel:"noopener noreferrer"},y(i.t),9,_),t[7]||(t[7]=s("br",null,null,-1)),e.uid?(l(),r("button",{key:0,class:"ui button mini circular red icon",type:"button",onClick:x=>e.deleteLink(o.id,i.h)},t[6]||(t[6]=[s("i",{class:"trash icon"},null,-1),p("刪除")]),8,D)):w("",!0)]))),128))])):w("",!0)]),s("td",null,[e.uid?(l(),r("button",{key:1,class:"ui button primary",type:"button",onClick:i=>e.editFaq(o.id)},t[9]||(t[9]=[s("i",{class:"pencil icon"},null,-1),p("編輯")]),8,E)):(l(),r("button",{key:0,class:"ui button orange",type:"button",onClick:t[2]||(t[2]=(...i)=>e.toggleLogin&&e.toggleLogin(...i))},t[8]||(t[8]=[s("i",{class:"user icon"},null,-1),p("登人")])))])]))),128))])])])])}const R=v(L,[["render",Q],["__scopeId","data-v-1d846cd8"]]);export{R as default};