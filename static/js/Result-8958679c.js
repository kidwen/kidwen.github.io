import{d as k,B as w,C as P,D as I,r as p,b as A,x as v,_ as $,e as a,o as l,c as u,f as o,g as t,F as x,m as B,t as C,y as E,S as R,R as q,E as D,P as F,G as M,s as H,u as L,H as N,i as j,I as z,J as K,K as O,j as V,k as G,w as T,L as J,M as U,N as W}from"./index_prod-41362c69.js";import{B as X}from"./Breadcrumbs-5fb26607.js";const Y=k({name:"ObArticleBox",components:{SubTitle:w},setup(){const e=P(),r=I(),d=p(!0);return A(async()=>{await r.fetchCategories(),d.value=!1}),{loading:d,categories:v(()=>r.categories),gradientBackground:v(()=>({background:e.themeConfig.theme.header_gradient_css}))}}}),Z={class:"sidebar-box"},Q={class:"flex justify-event flex-wrap gap-2 pt-2 cursor-pointer"},ee={class:"bg-ob-deep-900 text-center px-3 py-1 rounded-tl-md rounded-bl-md text-sm"},te={class:"bg-ob-deep-900 text-ob text-center px-2 py-1 rounded-tr-md rounded-br-md text-sm opacity-70"};function oe(e,r,d,f,g,m){const i=a("SubTitle"),_=a("ob-skeleton");return l(),u("div",Z,[o(i,{title:"titles.category_list",icon:"category"},null,8,["title"]),t("ul",Q,[e.categories.length>0?(l(!0),u(x,{key:0},B(e.categories,s=>(l(),u("li",{class:"flex flex-row items-center hover:opacity-50",key:s.slug},[t("span",ee,C(s.name),1),t("b",te,C(s.count),1)]))),128)):(l(),E(_,{key:1,tag:"li",count:10,height:"20px",width:"3rem"}))])])}const se=$(Y,[["render",oe]]),ae=k({name:"Result",components:{Breadcrumbs:X,Sidebar:R,RecentComment:q,TagBox:D,Paginator:F,Article:M,CategoryBox:se,SvgIcon:H},setup(){const{t:e}=L(),r=N(),d=j(),f=z(),g=p("search"),m=p(!1),i=p(new K),_=p({pageTotal:0,page:1}),s="ob-query-key";let c=p();const S=()=>{r.path.indexOf("tags")!==-1?(g.value="menu.tags",b()):g.value="menu.search",window.scrollTo({top:0}),f.setTitle("search")},b=()=>{m.value=!1,d.fetchPostsByTag(c.value).then(n=>{m.value=!0,i.value=n})},h=(n={})=>{c.value=n.slug?String(n.slug):localStorage.getItem(s),c.value&&c.value!==void 0&&(localStorage.setItem(s,c.value),S())};return O(()=>r.query,n=>{h(n)}),V(()=>{h(r.query)}),G(()=>{localStorage.removeItem(s)}),{isEmpty:v(()=>i.value.data.length===0&&m.value),title:v(()=>c.value),posts:i,pageType:g,pagination:_,pageChangeHanlder:h,t:e}}}),ne={class:"flex flex-col"},re={class:"post-header"},ce={class:"post-title text-white uppercase"},le={class:"main-grid"},ie={class:"relative"},ue={class:"post-html flex flex-col items-center"},de=t("h1",null,"没有找到任何文章",-1),pe={class:"flex flex-col relative"},ge={class:"grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-8"};function me(e,r,d,f,g,m){const i=a("Breadcrumbs"),_=a("SvgIcon"),s=a("Article"),c=a("Paginator"),S=a("CategoryBox"),b=a("TagBox"),h=a("RecentComment"),n=a("Sidebar");return l(),u("div",ne,[t("div",re,[o(i,{current:e.t(e.pageType)},null,8,["current"]),t("h1",ce,C(e.title),1)]),t("div",le,[t("div",ie,[o(J,{name:"fade-slide-y",mode:"out-in"},{default:T(()=>[U(t("div",ue,[de,o(_,{"icon-class":"empty-search",style:{"font-size":"35rem"}})],512),[[W,e.isEmpty]])]),_:1}),t("div",pe,[t("ul",ge,[e.posts.data.length===0?(l(),u(x,{key:0},B(12,y=>t("li",{key:y},[o(s,{data:{}})])),64)):(l(!0),u(x,{key:1},B(e.posts.data,y=>(l(),u("li",{key:y.slug},[o(s,{data:y},null,8,["data"])]))),128))]),o(c,{pageSize:12,pageTotal:e.pagination.pageTotal,page:e.pagination.page,onPageChange:e.pageChangeHanlder},null,8,["pageTotal","page","onPageChange"])])]),t("div",null,[o(n,null,{default:T(()=>[o(S),o(b),o(h)]),_:1})])])])}const fe=$(ae,[["render",me]]);export{fe as default};
