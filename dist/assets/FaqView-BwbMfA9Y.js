import{B as L,r as a,o as b,l as h,d as i,f as s,w as p,J as v,F as g,g as w,v as f,j as l,t as y,h as u,i as c,N as q,_ as C}from"./index-BrugtcrC.js";const H=L({name:"FaqView",props:{uid:{type:String,required:!0}},setup(){const e=a([]),t=a(["全部","起步","計畫","支持","資源","其他"]),o=a(""),d=a("全部"),k=a(""),m=a(""),n=a("");return b(async()=>{try{const r=await h.get("https://members-backend.alearn13994229.workers.dev/api/Faq");e.value=r.data}catch(r){console.error("獲取FAQ資料失敗:",r)}}),{faqItems:e,categories:t,searchKeyword:o,selectedCategory:d,newLinkText:k,newLinkHref:m,showAddLinkId:n}},computed:{sortedFaqItems(){return this.faqItems.slice().sort((e,t)=>this.categories.indexOf(e.category)-this.categories.indexOf(t.category))},filteredAndSortedFaqItems(){const e=this.searchKeyword.toLowerCase().trim();let t=this.faqItems;return this.selectedCategory!=="全部"&&(t=t.filter(o=>o.category===this.selectedCategory)),e&&(t=t.filter(o=>o.category.toLowerCase().includes(e)||o.question.toLowerCase().includes(e)||o.answer.toLowerCase().includes(e))),t.sort((o,d)=>this.categories.indexOf(o.category)-this.categories.indexOf(d.category))}},methods:{toggleLogin(){this.$emit("toggleLogin")},fetchFaq(){this.faqItems=[],h.get("https://members-backend.alearn13994229.workers.dev/api/Faq").then(e=>{this.faqItems=e.data}).catch(e=>{console.error("獲取FAQ資料失敗:",e)})},parseLinks(e){return console.log(e),JSON.parse(e).filter(t=>t!=null&&t.t!=="")},parseAnswer(e){return console.log(e),e.replace(/\\n/g,`
`)},editFaq(e){console.log(e),this.$router.push(`/edit_faq/${e}`)},deleteFaq(e){console.log(e)},deleteLink(e,t){console.log(e,t),confirm("確定要刪除此連結嗎？")&&(console.log("刪除"),h.delete(`https://members-backend.alearn13994229.workers.dev/delete/faq/${e}/link/${t}`).then(()=>{window.alert("刪除成功"),console.log("刪除成功"),this.fetchFaq()}).catch(o=>{window.alert("刪除失敗"),console.error("刪除失敗:",o)}))},addLink(e){console.log(e);const t={t:this.newLinkText,h:this.newLinkHref};console.log(t),h.post(`https://members-backend.alearn13994229.workers.dev/insert/faq/${e}/link`,t).then(()=>{window.alert("新增成功"),this.newLinkText="",this.newLinkHref="",this.showAddLinkId="",console.log("新增成功"),this.fetchFaq()}).catch(o=>{window.alert("新增失敗"),console.error("新增失敗:",o)})},escapeHtml(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")},highlightText(e){if(!this.searchKeyword.trim())return this.escapeHtml(e);const t=this.escapeHtml(e),o=this.escapeHtml(this.searchKeyword.toLowerCase().trim()),d=new RegExp(`(${o})`,"gi");return t.replace(d,'<span class="highlight">$1</span>')}}}),T={class:"faq-container"},F={class:"ui container"},$={class:"ui form"},I={class:"two stackable fields"},A={class:"field",style:{"max-width":"150px"}},M=["value"],V={class:"field"},K={class:"ui icon input"},S={class:"ui celled table"},N=["innerHTML"],O=["innerHTML"],B=["innerHTML"],U={class:"answer-cell"},_={key:0,class:"ui bulleted list"},D=["href"],E=["onClick"],J={class:"item"},Q=["onClick"],j={key:1,class:"item"},R={class:"ui form"},z={class:"ui buttons"},G=["href"],P=["src"],W=["onClick"],X={class:"ui vertical buttons"},Y=["onClick"],Z=["href"];function x(e,t,o,d,k,m){return l(),i("div",T,[t[17]||(t[17]=s("h2",{class:"ui header"},"常見問題",-1)),s("div",F,[s("form",$,[s("div",I,[s("div",A,[t[4]||(t[4]=s("label",null,"類別篩選",-1)),p(s("select",{class:"ui dropdown","onUpdate:modelValue":t[0]||(t[0]=n=>e.selectedCategory=n)},[(l(!0),i(g,null,w(e.categories,n=>(l(),i("option",{value:n},y(n),9,M))),256))],512),[[v,e.selectedCategory]])]),s("div",V,[t[6]||(t[6]=s("label",null,"關鍵字篩選",-1)),s("div",K,[p(s("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=n=>e.searchKeyword=n),placeholder:"搜尋常見問題..."},null,512),[[f,e.searchKeyword]]),t[5]||(t[5]=s("i",{class:"search icon"},null,-1))])])])]),s("table",S,[t[16]||(t[16]=s("thead",null,[s("tr",null,[s("th",null,"類別"),s("th",null,"問題"),s("th",null,"回答"),s("th",null,"相關連結"),s("th",null,"操作")])],-1)),s("tbody",null,[(l(!0),i(g,null,w(e.filteredAndSortedFaqItems,n=>(l(),i("tr",{key:n.id},[s("td",{innerHTML:e.highlightText(n.category)},null,8,N),s("td",{innerHTML:e.highlightText(n.question)},null,8,O),s("td",{class:"answer-cell",innerHTML:e.highlightText(e.parseAnswer(n.answer))},null,8,B),s("td",U,[n.links&&e.parseLinks(n.links).length>0?(l(),i("div",_,[(l(!0),i(g,null,w(e.parseLinks(n.links),r=>(l(),i("div",{class:"item",key:r.h},[s("a",{href:r.h,target:"_blank",rel:"noopener noreferrer"},y(r.t),9,D),t[8]||(t[8]=s("br",null,null,-1)),e.uid?(l(),i("button",{key:0,class:"ui button mini circular red icon",type:"button",onClick:ee=>e.deleteLink(n.id,r.h)},t[7]||(t[7]=[s("i",{class:"trash icon"},null,-1),u("刪除")]),8,E)):c("",!0)]))),128))])):c("",!0),t[13]||(t[13]=s("div",{class:"item ui divider"},null,-1)),s("div",J,[e.uid?(l(),i("button",{key:0,class:"ui button mini circular orange icon",type:"button",onClick:r=>e.showAddLinkId=n.id},t[9]||(t[9]=[s("i",{class:"plus icon"},null,-1),u("新增")]),8,Q)):c("",!0)]),e.showAddLinkId===n.id?(l(),i("div",j,[s("div",R,[p(s("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=r=>e.newLinkText=r),placeholder:"連結名稱"},null,512),[[f,e.newLinkText]]),p(s("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=r=>e.newLinkHref=r),placeholder:"連結網址"},null,512),[[f,e.newLinkHref]]),t[12]||(t[12]=s("br",null,null,-1)),s("div",z,[e.newLinkHref?(l(),i("a",{key:0,class:"ui basic primary button",href:e.newLinkHref,target:"_blank",rel:"noopener noreferrer"},[s("img",{src:"https://www.google.com/s2/favicons?domain="+e.newLinkHref,alt:"測試連結"},null,8,P),t[10]||(t[10]=u("測試連結"))],8,G)):c("",!0),s("button",{class:"ui button primary",type:"button",onClick:q(r=>e.addLink(n.id),["prevent"])},t[11]||(t[11]=[s("i",{class:"plus icon"},null,-1),u("新增")]),8,W)])])])):c("",!0)]),s("td",null,[s("div",X,[e.uid?(l(),i("button",{key:0,class:"ui button primary",type:"button",onClick:r=>e.editFaq(n.id)},t[14]||(t[14]=[s("i",{class:"pencil icon"},null,-1),u("編輯")]),8,Y)):c("",!0),s("a",{class:"ui basic button secondary",href:`https://map.alearn.org.tw/ans/${n.id}`},t[15]||(t[15]=[u("前往"),s("i",{class:"chevron right icon"},null,-1)]),8,Z)])])]))),128))])])])])}const se=C(H,[["render",x],["__scopeId","data-v-4a5a9375"]]);export{se as default};