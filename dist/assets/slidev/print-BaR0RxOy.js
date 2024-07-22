import{d as p,ai as u,y as h,o as s,b as n,e as t,x as a,H as r,F as f,af as g,a9 as v,l as x,g as b}from"../modules/vue-CChrUJ0-.js";import{a as y,u as N}from"../index-CqSttlXK.js";import{c as m}from"../monaco/bundled-types-DeZGiAAJ.js";import{_ as k}from"./NoteDisplay.vue_vue_type_style_index_0_lang-DKgMrN0J.js";import"../modules/shiki-C9ym2mGl.js";import"../modules/file-saver-igGfcqei.js";const w={id:"page-root"},H={class:"m-4"},L={class:"mb-10"},T={class:"text-4xl font-bold mt-2"},V={class:"opacity-50"},B={class:"text-lg"},S={class:"font-bold flex gap-2"},C={class:"opacity-50"},D=t("div",{class:"flex-auto"},null,-1),F={key:0,class:"border-main mb-8"},q=p({__name:"print",setup(M){const{slides:_,total:d}=y();u(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),N({title:`Notes - ${m.title}`});const l=h(()=>_.value.map(e=>{var i;return(i=e.meta)==null?void 0:i.slide}).filter(e=>e!==void 0&&e.noteHTML!==""));return(e,i)=>(s(),n("div",w,[t("div",H,[t("div",L,[t("h1",T,a(r(m).title),1),t("div",V,a(new Date().toLocaleString()),1)]),(s(!0),n(f,null,g(l.value,(o,c)=>(s(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",B,[t("div",S,[t("div",C,a(o==null?void 0:o.no)+"/"+a(r(d)),1),v(" "+a(o==null?void 0:o.title)+" ",1),D])]),x(k,{"note-html":o.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<l.value.length-1?(s(),n("hr",F)):b("v-if",!0)]))),128))])]))}});export{q as default};
