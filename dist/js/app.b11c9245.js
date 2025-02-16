(function(){"use strict";var e={4236:function(e,t,a){a.d(t,{db:function(){return Ke},I:function(){return Se}});var l=a(5130),i=a(657),r=a(6768);const n={id:"app"},o={class:"main-nav"},c={class:"nav-content"},s={class:"nav-brand"},u={class:"nav-links"};function d(e,t,a,l,i,d){const m=(0,r.g2)("router-link"),p=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)("div",n,[(0,r.Lk)("nav",o,[(0,r.Lk)("div",c,[(0,r.Lk)("div",s,[(0,r.bF)(m,{to:"/"},{default:(0,r.k6)((()=>t[0]||(t[0]=[(0,r.eW)("PeakMind")]))),_:1})]),(0,r.Lk)("div",u,[(0,r.bF)(m,{to:"/"},{default:(0,r.k6)((()=>t[1]||(t[1]=[(0,r.eW)("Home")]))),_:1}),(0,r.bF)(m,{to:"/about"},{default:(0,r.k6)((()=>t[2]||(t[2]=[(0,r.eW)("About")]))),_:1})])])]),(0,r.Lk)("main",null,[(0,r.bF)(p)])])}var m={name:"App"},p=a(1241);const v=(0,p.A)(m,[["render",d]]);var g=v,f=a(1387),k=a(4232);const h={class:"article-container"},b={class:"article-list"},L=["onClick"],y=["src","alt"],w={class:"article-info"},A={class:"article-title"},C={class:"article-preview"},I={class:"article-meta"},E={class:"author-name"},D={class:"article-date"};function _(e,t,a,l,i,n){return(0,r.uX)(),(0,r.CE)("div",h,[t[0]||(t[0]=(0,r.Lk)("h1",{class:"text-3xl font-bold mb-6"},"Blog Posts",-1)),(0,r.Lk)("div",b,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(l.articles,(e=>((0,r.uX)(),(0,r.CE)("div",{key:e.id,class:"article-row",onClick:t=>l.navigateToArticle(e.id)},[(0,r.Lk)("img",{src:e.imageUrl,alt:e.title,class:"article-image"},null,8,y),(0,r.Lk)("div",w,[(0,r.Lk)("h2",A,(0,k.v_)(e.title),1),(0,r.Lk)("p",C,(0,k.v_)(e.preview),1),(0,r.Lk)("div",I,[(0,r.Lk)("span",E,(0,k.v_)(e.author.name),1),(0,r.Lk)("span",D,(0,k.v_)(l.formatDate(e.publishedAt)),1)])])],8,L)))),128))])])}a(4114);var P=a(144),M=(a(8111),a(1701),a(7617)),U=a(7844);const x={async uploadImage(e){const t=(0,U.KR)(Se,`articles/${Date.now()}_${e.name}`);await(0,U.D)(t,e);const a=await(0,U.qk)(t);return a},async createArticle(e){const t=(0,M.rJ)(Ke,"articles"),a=await(0,M.gS)(t,{...e,createdAt:(new Date).toISOString()});return a.id},async getArticles(){const e=(0,M.rJ)(Ke,"articles"),t=(0,M.P)(e,(0,M.My)("createdAt","desc")),a=await(0,M.GG)(t);return a.docs.map((e=>({id:e.id,...e.data()})))},async getArticle(e){const t=(0,M.H9)(Ke,"articles",e),a=await(0,M.x7)(t);return a.exists()?{id:a.id,...a.data()}:null}};var B=a(8785);const F=e=>{if(!e)return"Date unavailable";try{return e&&e.toDate?(0,B.A)(e.toDate(),"MMM d, yyyy"):"string"===typeof e?(0,B.A)(new Date(e),"MMM d, yyyy"):e instanceof Date?(0,B.A)(e,"MMM d, yyyy"):"Date unavailable"}catch(t){return console.error("Error formatting date:",t),"Date unavailable"}};var H={name:"ArticleList",setup(){const e=(0,f.rd)(),t=(0,P.KR)([]),a=(0,P.KR)(!0),l=async()=>{try{a.value=!0,t.value=await x.getArticles()}catch(e){console.error("Error fetching articles:",e),alert("Failed to load articles. Please try again.")}finally{a.value=!1}},i=t=>{e.push(`/article/${t}`)};return(0,r.sV)((()=>{l()})),{articles:t,loading:a,navigateToArticle:i,formatDate:F}}};const K=(0,p.A)(H,[["render",_],["__scopeId","data-v-286f79e0"]]);var O=K;const S={key:0,class:"article-detail"},R={class:"article-header"},T=["src","alt"],X={class:"article-header-content"},j={class:"article-title"},J={class:"article-meta"},V={class:"author-info"},W={class:"author-details"},$={class:"author-name"},G={class:"article-date"},Q={class:"article-content"},q=["innerHTML"],z={class:"article-footer"};function N(e,t,a,l,i,n){return l.article?((0,r.uX)(),(0,r.CE)("div",S,[(0,r.Lk)("div",R,[(0,r.Lk)("img",{src:l.article.imageUrl,alt:l.article.title,class:"article-hero-image"},null,8,T),(0,r.Lk)("div",X,[(0,r.Lk)("h1",j,(0,k.v_)(l.article.title),1),(0,r.Lk)("div",J,[(0,r.Lk)("div",V,[(0,r.Lk)("div",W,[(0,r.Lk)("span",$,(0,k.v_)(l.article.author.name),1),(0,r.Lk)("span",G,(0,k.v_)(l.formatDate(l.article.publishedAt)),1)])])])])]),(0,r.Lk)("div",Q,[(0,r.Lk)("div",{innerHTML:l.article.content},null,8,q)]),(0,r.Lk)("div",z,[(0,r.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>l.goBack&&l.goBack(...e)),class:"back-button"}," ← Back to Articles ")])])):(0,r.Q3)("",!0)}var Y={name:"ArticleDetail",setup(){const e=(0,f.lq)(),t=(0,f.rd)(),a=(0,P.KR)(null),l=(0,P.KR)(!0),i=async e=>{try{l.value=!0,a.value=await x.getArticle(e),a.value||t.push("/articles")}catch(i){console.error("Error fetching article:",i),alert("Failed to load article. Please try again.")}finally{l.value=!1}},n=()=>{t.push("/")};return(0,r.sV)((async()=>{const t=e.params.id;await i(t)})),{article:a,loading:l,formatDate:F,goBack:n}}};const Z=(0,p.A)(Y,[["render",N],["__scopeId","data-v-0428c304"]]);var ee=Z;const te={class:"article-form-container"},ae={class:"form-group"},le={class:"form-group"},ie={class:"form-group"},re={class:"editor-toolbar"},ne=["onClick","title"],oe={class:"form-group"},ce={class:"image-upload"},se=["src"],ue={key:1,class:"upload-placeholder"},de={class:"form-group"},me={class:"author-info"},pe={class:"author-avatar"},ve=["src"],ge={class:"author-details"},fe={class:"form-actions"},ke=["disabled"],he={key:0,class:"preview-modal"},be={class:"preview-content"},Le=["src","alt"],ye=["innerHTML"];function we(e,t,a,i,n,o){return(0,r.uX)(),(0,r.CE)("div",te,[t[15]||(t[15]=(0,r.Lk)("h1",{class:"page-title"},"Create New Article",-1)),(0,r.Lk)("form",{onSubmit:t[7]||(t[7]=(0,l.D$)(((...e)=>i.handleSubmit&&i.handleSubmit(...e)),["prevent"])),class:"article-form"},[(0,r.Lk)("div",ae,[t[9]||(t[9]=(0,r.Lk)("label",{for:"title"},"Article Title",-1)),(0,r.bo)((0,r.Lk)("input",{id:"title","onUpdate:modelValue":t[0]||(t[0]=e=>i.article.title=e),type:"text",placeholder:"Enter article title",required:"",class:"form-input"},null,512),[[l.Jo,i.article.title]])]),(0,r.Lk)("div",le,[t[10]||(t[10]=(0,r.Lk)("label",{for:"preview"},"Preview Text",-1)),(0,r.bo)((0,r.Lk)("textarea",{id:"preview","onUpdate:modelValue":t[1]||(t[1]=e=>i.article.preview=e),placeholder:"Enter a short preview of your article",rows:"3",class:"form-input"},null,512),[[l.Jo,i.article.preview]])]),(0,r.Lk)("div",ie,[t[11]||(t[11]=(0,r.Lk)("label",{for:"content"},"Article Content",-1)),(0,r.Lk)("div",re,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(i.editorCommands,(e=>((0,r.uX)(),(0,r.CE)("button",{key:e.id,type:"button",onClick:t=>i.executeCommand(e.command,e.value),class:"toolbar-button",title:e.label},(0,k.v_)(e.icon),9,ne)))),128))]),(0,r.Lk)("div",{id:"content",contenteditable:!0,onInput:t[2]||(t[2]=(...e)=>i.handleContentInput&&i.handleContentInput(...e)),class:"content-editor",ref:"contentEditor"},null,544)]),(0,r.Lk)("div",oe,[t[13]||(t[13]=(0,r.Lk)("label",{for:"image"},"Featured Image",-1)),(0,r.Lk)("div",ce,[(0,r.Lk)("input",{id:"image",type:"file",onChange:t[3]||(t[3]=(...e)=>i.handleImageUpload&&i.handleImageUpload(...e)),accept:"image/*",class:"hidden",ref:"imageInput"},null,544),(0,r.Lk)("div",{class:(0,k.C4)(["upload-area",{"has-image":i.article.image}]),onClick:t[4]||(t[4]=(...e)=>i.triggerImageUpload&&i.triggerImageUpload(...e))},[i.article.image?((0,r.uX)(),(0,r.CE)("img",{key:0,src:i.article.image,alt:"Featured image preview",class:"image-preview"},null,8,se)):((0,r.uX)(),(0,r.CE)("div",ue,t[12]||(t[12]=[(0,r.Lk)("span",{class:"upload-icon"},"📷",-1),(0,r.Lk)("span",null,"Click to upload image",-1)])))],2)])]),(0,r.Lk)("div",de,[t[14]||(t[14]=(0,r.Lk)("label",{for:"author"},"Author Information",-1)),(0,r.Lk)("div",me,[(0,r.Lk)("div",pe,[(0,r.Lk)("img",{src:i.article.author.avatar||"/default-avatar.png",alt:"Author avatar"},null,8,ve)]),(0,r.Lk)("div",ge,[(0,r.bo)((0,r.Lk)("input",{type:"text","onUpdate:modelValue":t[5]||(t[5]=e=>i.article.author.name=e),placeholder:"Author name",class:"form-input"},null,512),[[l.Jo,i.article.author.name]])])])]),(0,r.Lk)("div",fe,[(0,r.Lk)("button",{type:"button",onClick:t[6]||(t[6]=(...e)=>i.previewArticle&&i.previewArticle(...e)),class:"preview-button"}," Preview "),(0,r.Lk)("button",{type:"submit",class:"submit-button",disabled:i.isSubmitting},(0,k.v_)(i.isSubmitting?"Publishing...":"Publish Article"),9,ke)])],32),i.showPreview?((0,r.uX)(),(0,r.CE)("div",he,[(0,r.Lk)("div",be,[(0,r.Lk)("button",{onClick:t[8]||(t[8]=e=>i.showPreview=!1),class:"close-preview"},"×"),(0,r.Lk)("h2",null,(0,k.v_)(i.article.title),1),i.article.image?((0,r.uX)(),(0,r.CE)("img",{key:0,src:i.article.image,alt:i.article.title,class:"preview-image"},null,8,Le)):(0,r.Q3)("",!0),(0,r.Lk)("div",{innerHTML:i.article.content,class:"preview-body"},null,8,ye)])])):(0,r.Q3)("",!0)])}var Ae={name:"ArticleForm",setup(){const e=(0,f.rd)(),t=(0,P.KR)(null),a=(0,P.KR)(null),l=(0,P.KR)(!1),i=(0,P.KR)(!1),n=(0,P.KR)(null),o=(0,P.Kh)({title:"",preview:"",content:"",image:null,imageUrl:null,author:{name:"",avatar:"/default-avatar.png"},publishedAt:new Date}),c=e=>{const t=e.target.files[0];if(t){n.value=t;const e=new FileReader;e.onload=e=>{o.image=e.target.result},e.readAsDataURL(t)}},s=async()=>{try{i.value=!0,n.value&&(o.imageUrl=await x.uploadImage(n.value));const t={title:o.title,preview:o.preview,content:o.content,imageUrl:o.imageUrl,author:o.author,publishedAt:o.publishedAt},a=await x.createArticle(t);e.push(`/article/${a}`)}catch(t){console.error("Error publishing article:",t),alert("Failed to publish article. Please try again.")}finally{i.value=!1}},u=[{id:1,label:"Bold",icon:"B",command:"bold"},{id:2,label:"Italic",icon:"I",command:"italic"},{id:3,label:"Heading 2",icon:"H2",command:"formatBlock",value:"h2"},{id:4,label:"Heading 3",icon:"H3",command:"formatBlock",value:"h3"},{id:5,label:"Quote",icon:'"',command:"formatBlock",value:"blockquote"},{id:6,label:"Code",icon:"<>",command:"formatBlock",value:"pre"},{id:7,label:"Link",icon:"🔗",command:"createLink"}],d=(e,a)=>{if("createLink"===e){const t=prompt("Enter URL:");t&&document.execCommand(e,!1,t)}else document.execCommand(e,!1,a);t.value.focus()},m=e=>{o.content=e.target.innerHTML},p=()=>{a.value.click()},v=()=>{l.value=!0};return(0,r.sV)((()=>{t.value&&(t.value.innerHTML=o.content)})),{article:o,contentEditor:t,imageInput:a,showPreview:l,isSubmitting:i,editorCommands:u,executeCommand:d,handleContentInput:m,handleImageUpload:c,triggerImageUpload:p,previewArticle:v,handleSubmit:s}}};const Ce=(0,p.A)(Ae,[["render",we],["__scopeId","data-v-7ca57d98"]]);var Ie=Ce;const Ee=[{path:"/",name:"Home",component:O},{path:"/article/:id",name:"ArticleDetail",component:ee,props:e=>({articleId:e.params.id})},{path:"/articles/new",component:Ie}],De=(0,f.aE)({history:(0,f.LA)(),routes:Ee});var _e=De,Pe=a(782),Me=(0,Pe.y$)({state:{},getters:{},mutations:{},actions:{},modules:{}}),Ue=a(6400),xe=a(4271);const Be=()=>{const e=document.createElement("link");e.rel="stylesheet",e.href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&family=Open+Sans:wght@400;500&family=Playfair+Display&display=swap",document.head.appendChild(e)},Fe={apiKey:"AIzaSyAJtaj_uLY0BBZO1mQGScgPH1PoffeWFBY",authDomain:"blog-peakmind.firebaseapp.com",projectId:"blog-peakmind",storageBucket:"blog-peakmind.firebasestorage.app",messagingSenderId:"324663637798",appId:"1:324663637798:web:9bf00dcf76187ef0f633e7",measurementId:"G-ED8PWGEP3D"},He=(0,Ue.Wp)(Fe),Ke=(0,M.aU)(He),Oe=(0,xe.xI)(He),Se=(0,U.c7)(He);let Re;const Te=async()=>{Be();const e=(0,i.Ey)();(0,xe.hg)(Oe,(async t=>{Re||(await Me.dispatch("initializeAuth"),t?console.log("User is logged in:",t.email):console.log("No user logged in"),Re=(0,l.Ef)(g).use(e).use(_e).use(Me).mount("#app"))}))};Te()}},t={};function a(l){var i=t[l];if(void 0!==i)return i.exports;var r=t[l]={exports:{}};return e[l].call(r.exports,r,r.exports,a),r.exports}a.m=e,function(){var e=[];a.O=function(t,l,i,r){if(!l){var n=1/0;for(u=0;u<e.length;u++){l=e[u][0],i=e[u][1],r=e[u][2];for(var o=!0,c=0;c<l.length;c++)(!1&r||n>=r)&&Object.keys(a.O).every((function(e){return a.O[e](l[c])}))?l.splice(c--,1):(o=!1,r<n&&(n=r));if(o){e.splice(u--,1);var s=i();void 0!==s&&(t=s)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[l,i,r]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var l in t)a.o(t,l)&&!a.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,l){var i,r,n=l[0],o=l[1],c=l[2],s=0;if(n.some((function(t){return 0!==e[t]}))){for(i in o)a.o(o,i)&&(a.m[i]=o[i]);if(c)var u=c(a)}for(t&&t(l);s<n.length;s++)r=n[s],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(u)},l=self["webpackChunkblogv2"]=self["webpackChunkblogv2"]||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var l=a.O(void 0,[504],(function(){return a(4236)}));l=a.O(l)})();
//# sourceMappingURL=app.b11c9245.js.map