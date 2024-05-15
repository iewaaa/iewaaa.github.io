import{q as g,d as f,y as _,z as o,O as R,o as $,c as h,a as v,F as w,G as j,f as c,B as N,C as x,_ as C,J as E,x as u,ag as r,P as S,t as b,aj as K}from"./index-BnWkM9xn.js";const O=Symbol("rowContextKey"),P=["start","center","end","space-around","space-between","space-evenly"],B=["top","middle","bottom"],k=g({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:P,default:"start"},align:{type:String,values:B}}),J=f({name:"ElRow"}),L=f({...J,props:k,setup(p){const e=p,l=_("row"),a=o(()=>e.gutter);R(O,{gutter:a});const i=o(()=>{const t={};return e.gutter&&(t.marginRight=t.marginLeft=`-${e.gutter/2}px`),t}),d=o(()=>[l.b(),l.is(`justify-${e.justify}`,e.justify!=="start"),l.is(`align-${e.align}`,!!e.align)]);return(t,y)=>($(),h(x(t.tag),{class:j(c(d)),style:N(c(i))},{default:v(()=>[w(t.$slots,"default")]),_:3},8,["class","style"]))}});var q=C(L,[["__file","row.vue"]]);const H=E(q),A=g({tag:{type:String,default:"div"},span:{type:Number,default:24},offset:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},xs:{type:u([Number,Object]),default:()=>r({})},sm:{type:u([Number,Object]),default:()=>r({})},md:{type:u([Number,Object]),default:()=>r({})},lg:{type:u([Number,Object]),default:()=>r({})},xl:{type:u([Number,Object]),default:()=>r({})}}),D=f({name:"ElCol"}),F=f({...D,props:A,setup(p){const e=p,{gutter:l}=S(O,{gutter:o(()=>0)}),a=_("col"),i=o(()=>{const t={};return l.value&&(t.paddingLeft=t.paddingRight=`${l.value/2}px`),t}),d=o(()=>{const t=[];return["span","offset","pull","push"].forEach(s=>{const n=e[s];b(n)&&(s==="span"?t.push(a.b(`${e[s]}`)):n>0&&t.push(a.b(`${s}-${e[s]}`)))}),["xs","sm","md","lg","xl"].forEach(s=>{b(e[s])?t.push(a.b(`${s}-${e[s]}`)):K(e[s])&&Object.entries(e[s]).forEach(([n,m])=>{t.push(n!=="span"?a.b(`${s}-${n}-${m}`):a.b(`${s}-${m}`))})}),l.value&&t.push(a.is("guttered")),[a.b(),t]});return(t,y)=>($(),h(x(t.tag),{class:j(c(d)),style:N(c(i))},{default:v(()=>[w(t.$slots,"default")]),_:3},8,["class","style"]))}});var G=C(F,[["__file","col.vue"]]);const M=E(G);export{H as E,M as a};
