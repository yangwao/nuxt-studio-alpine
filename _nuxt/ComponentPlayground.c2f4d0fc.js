import{u as m}from"./asyncData.41158e4f.js";import{M as c,I as p,d as i,a9 as u,r as l,N as n,k as d}from"./entry.903903df.js";import f from"./Ellipsis.1dd9ee45.js";import _ from"./ComponentPlaygroundData.4ec34051.js";import"./TabsHeader.e34680c0.js";import"./ComponentPlaygroundProps.bf864d02.js";import"./ProseH4.cb6c5e76.js";import"./ProseCodeInline.0c1eaac7.js";import"./Badge.0807140e.js";import"./MDCSlot.948347c7.js";import"./slot.cf6200e5.js";import"./ProseP.694a74aa.js";import"./index.3942392f.js";import"./ComponentPlaygroundSlots.vue.b4a1b620.js";import"./ComponentPlaygroundTokens.vue.528c17ae.js";async function y(o){const t=c(o);{const{data:e}=await m(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>e.value)}}const g=i({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>u(o.component)),e=l({...o.props}),r=await y(o.component);return{as:t,formProps:e,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((e,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");e[s]=a}return e},{});return n("div",{class:"component-playground"},[n("div",{class:"component-playground-wrapper"},[n(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),n(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),n(_,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":e=>o.formProps=e})])}});const V=d(g,[["__scopeId","data-v-aee2774e"]]);export{V as default};
