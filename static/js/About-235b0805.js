import{P as p,u as m,a as i}from"./PageContainer-a054393f.js";import{B as l}from"./Breadcrumbs-c6de0f1e.js";import{d as f,r as d,u as _,b,_ as g,e as r,o as A,c as B,f as a}from"./index_prod-296a9076.js";import"./Toc-78ef44d6.js";import"https://unpkg.com/@waline/client@v2/dist/waline.mjs";const h=f({name:"About",components:{PageContainer:p,Breadcrumbs:l},setup(){const e=m(),t=d(new i),{t:o}=_();return b(()=>{e.fetchArticle("about").then(n=>{t.value=n})}),{pageData:t,t:o}}});function C(e,t,o,s,n,P){const c=r("Breadcrumbs"),u=r("PageContainer");return A(),B("div",null,[a(c,{current:e.t("menu.about")},null,8,["current"]),a(u,{post:e.pageData},null,8,["post"])])}const w=g(h,[["render",C]]);export{w as default};
