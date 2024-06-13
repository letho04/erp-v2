import{j as e,J as U,d as l,e as Y,B as i,o as _,p as ee,q as se,I as h,D as re,w as te,x as ae,y as ne,z as u,C as y,E as v,F as b,G as D,k as le,H as ie}from"./index-BOnhxolk.js";import{P as ce,a as de}from"./page-wrapper.component-CI7jEBI8.js";import{C as oe}from"./card-Cf8OcKDc.js";import{e as d,T as xe,a as me,b as A,c as o,d as he}from"./table-CAuPm6_8.js";import{a as P,b as B,c as S,d as M,e as V,D as ue}from"./dialog-CLAfxrJk.js";import{S as H,a as I,b as F,c as G,d as L,e as k,f as x}from"./select-BZBg-Gya.js";import{A as pe,a as je,b as ge,c as Te,d as fe,e as Ne,f as Ce,g as we,h as ye}from"./alert-dialog-Dxx0TBA9.js";import{C as ve}from"./index-BqMc7nRJ.js";import"./index-BEk9yI-S.js";import"./index-TMD9Aak2.js";const be=({address:r,customer:t,payment:c,province:m,sales:j,taxCode:p,type:g})=>e.jsxs(e.Fragment,{children:[e.jsx(d,{className:"font-bold text-sm",children:t}),e.jsx(d,{className:"text-sm",children:g}),e.jsx(d,{className:"text-sm",children:m}),e.jsx(d,{className:"text-sm",children:p}),e.jsx(d,{children:e.jsx("p",{className:"overflow-hidden text-sm text-ellipsis whitespace-nowrap",children:r})}),e.jsx(d,{className:"text-sm",children:e.jsx("p",{className:"overflow-hidden text-sm text-ellipsis whitespace-nowrap",children:c})}),e.jsxs(d,{className:"flex justify-between items-center text-sm",children:[e.jsx("span",{children:j}),e.jsx(U,{})]})]}),z=l.forwardRef(({className:r,...t},c)=>e.jsx("textarea",{className:Y("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),ref:c,...t}));z.displayName="Textarea";const De=()=>e.jsxs(pe,{children:[e.jsx(je,{asChild:!0,children:e.jsx(i,{variant:"destructive",children:"Delete"})}),e.jsxs(ge,{children:[e.jsxs(Te,{children:[e.jsx(fe,{children:"Are you absolutely sure want to delete this customer?"}),e.jsx(Ne,{children:"This action cannot be undone. This will permanently your product"})]}),e.jsxs(Ce,{children:[e.jsx(we,{children:"Cancel"}),e.jsx(ye,{className:_({variant:"destructive"}),children:"Continue"})]})]})]});function Ae({children:r,address:t,customer:c,type:m,payment:j,province:p,sales:g,taxCode:N,createdAt:C,creator:E}){const[T,f]=l.useState(m),[a,K]=l.useState(!1),X=`${ee(new Date(C||Date.now()))} ${se(new Date(C||Date.now()))}`,[Z,O]=l.useState(0),[R,W]=l.useState(0),[$,q]=l.useState(0),[J,Q]=l.useState(0),w=()=>{K(n=>!n)};return e.jsxs(P,{children:[e.jsx(B,{asChild:!0,children:r}),e.jsxs(S,{className:"max-w-[40vw]",children:[e.jsx(M,{children:e.jsxs(V,{children:["Customer ",a?"Form":"Details"]})}),e.jsxs("div",{className:"h-[500px] overflow-y-auto border-input px-6 py-4 rounded-md space-y-4",children:[e.jsxs(s,{children:[e.jsx("p",{className:"text-muted-foreground min-w-[130px] max-w-[180px] flex items-center",children:"Customer"}),e.jsx("p",{className:"font-bold",children:c})]}),e.jsxs(s,{children:[e.jsx("p",{className:"text-muted-foreground min-w-[130px] max-w-[180px] flex items-center",children:"ID"}),e.jsx("p",{children:"779"})]}),e.jsxs(s,{children:[e.jsx("p",{className:"text-muted-foreground min-w-[130px] max-w-[180px] flex items-center",children:"Type"}),a?e.jsxs("div",{className:"flex gap-3 ",children:[e.jsxs(i,{onClick:()=>f("trading"),className:"capitalize",variant:T==="trading"?"default":"outline",size:"lg",children:[" ","Trading"]}),e.jsx(i,{onClick:()=>f("factory"),className:"capitalize",variant:T==="factory"?"default":"outline",size:"lg",children:"Factory"}),e.jsx(i,{onClick:()=>f("global"),className:"capitalize",variant:T==="global"?"default":"outline",size:"lg",children:"Global"})]}):e.jsx("p",{children:m})]}),e.jsxs(s,{children:[e.jsx("p",{className:"text-muted-foreground min-w-[130px] max-w-[180px] flex items-center",children:"Address"}),a?e.jsx(z,{defaultValue:t.trim()}):e.jsx("p",{children:t})]}),e.jsxs(s,{children:[e.jsx("p",{className:"text-muted-foreground min-w-[130px] max-w-[180px] flex items-center",children:"Province"}),a?e.jsxs(H,{children:[e.jsx(I,{className:"w-full",children:e.jsx(F,{placeholder:p})}),e.jsx(G,{children:e.jsxs(L,{children:[e.jsx(k,{children:"Province"}),e.jsx(x,{value:"ben-tre",children:"Bến tre"}),e.jsx(x,{value:"hcm",children:"Hồ Chí Minh"}),e.jsx(x,{value:"dong-nai",children:"Đồng nai"})]})})]}):e.jsx("p",{children:p})]}),e.jsxs(s,{children:[e.jsx("p",{className:"text-muted-foreground min-w-[130px] max-w-[180px] flex items-center",children:"TaxCode"}),a?e.jsx(h,{defaultValue:N}):e.jsx("p",{children:N})]}),e.jsxs(s,{children:[e.jsx("p",{className:"text-muted-foreground min-w-[130px] max-w-[180px] flex items-center",children:"Payment"}),e.jsx("p",{children:j})]}),e.jsxs(s,{children:[e.jsx("p",{className:"text-muted-foreground min-w-[130px] max-w-[180px] flex items-center",children:"Sales"}),e.jsx("p",{children:g})]}),e.jsxs(s,{children:[e.jsx("p",{className:"text-muted-foreground min-w-[130px] max-w-[180px] flex items-center",children:"Created Time"}),e.jsx("p",{children:X})]}),e.jsxs(s,{children:[e.jsx("p",{className:"text-muted-foreground min-w-[130px] max-w-[180px] flex items-center",children:"Creator"}),e.jsx("p",{children:E})]}),a&&e.jsxs(e.Fragment,{children:[e.jsxs(s,{children:[e.jsx("p",{className:"text-muted-foreground min-w-[130px] max-w-[180px] flex items-center",children:"History"}),e.jsx(h,{})]})," ",e.jsxs(s,{children:[e.jsx("p",{className:"text-muted-foreground min-w-[130px] max-w-[180px] flex items-center",children:"Total PO"}),e.jsx(h,{value:Z,type:"number",onChange:n=>O(+n.target.value)})]})," ",e.jsxs(s,{children:[e.jsx("p",{className:"text-muted-foreground min-w-[130px] max-w-[180px] flex items-center",children:"Total Amt"}),e.jsx(h,{value:R,type:"number",onChange:n=>W(+n.target.value)})]})," ",e.jsxs(s,{children:[e.jsx("p",{className:"text-muted-foreground min-w-[130px] max-w-[180px] flex items-center",children:"Paid Amt"}),e.jsx(h,{value:$,type:"number",onChange:n=>q(+n.target.value)})]})," ",e.jsxs(s,{children:[e.jsx("p",{className:"text-muted-foreground min-w-[130px] max-w-[180px] flex items-center",children:"Pending Amt"}),e.jsx(h,{value:J,type:"number",onChange:n=>Q(+n.target.value)})]})]})]}),e.jsx(ue,{children:e.jsxs("div",{className:"flex gap-2 items-center",children:[a&&e.jsx(i,{variant:"outline",onClick:w,children:"Cancel"}),!a&&e.jsx(De,{}),e.jsx(i,{onClick:w,children:a?"Save":"Edit"})]})})]})]})}function s({children:r}){return e.jsx("div",{className:"flex",children:r})}const Pe=[{customer:"Betrimex - Mỏ cày",type:"factory",province:"Bến tre",taxCode:8787878545,address:`
        Lô K, CCN-TTCN Phong Nẫm, Xã Phong Nẫm, H Giồng Trôm, T Bến Tre, Việt Nam`,payment:"TT within 30 days",sales:"Thuận",creator:"Thuận",createdAt:"2024-06-06T07:39:28.406Z"},{customer:"Betrimex - Mỏ cày",type:"factory",province:"Bến tre",taxCode:8787878545,address:`
        Lô K, CCN-TTCN Phong Nẫm, Xã Phong Nẫm, H Giồng Trôm, T Bến Tre, Việt Nam`,payment:"TT within 30 days",sales:"Thuận",creator:"Thuận",createdAt:"2024-06-06T07:39:28.406Z"},{customer:"Betrimex - Mỏ cày",type:"factory",province:"Bến tre",taxCode:8787878545,address:`
        Lô K, CCN-TTCN Phong Nẫm, Xã Phong Nẫm, H Giồng Trôm, T Bến Tre, Việt Nam`,payment:"TT within 30 days",sales:"Thuận",creator:"Thuận",createdAt:"2024-06-06T07:39:28.406Z"},{customer:"Betrimex - Mỏ cày",type:"factory",province:"Bến tre",taxCode:8787878545,address:`
        Lô K, CCN-TTCN Phong Nẫm, Xã Phong Nẫm, H Giồng Trôm, T Bến Tre, Việt Nam`,payment:"TT within 30 days",sales:"Thuận",creator:"Thuận",createdAt:"2024-06-06T07:39:28.406Z"},{customer:"Betrimex - Mỏ cày",type:"factory",province:"Bến tre",taxCode:8787878545,address:`
        Lô K, CCN-TTCN Phong Nẫm, Xã Phong Nẫm, H Giồng Trôm, T Bến Tre, Việt Nam`,payment:"TT within 30 days",sales:"Thuận",creator:"Thuận",createdAt:"2024-06-06T07:39:28.406Z"},{customer:"Betrimex - Mỏ cày",type:"factory",province:"Bến tre",taxCode:8787878545,address:`
        Lô K, CCN-TTCN Phong Nẫm, Xã Phong Nẫm, H Giồng Trôm, T Bến Tre, Việt Nam`,payment:"TT within 30 days",sales:"Thuận",creator:"Thuận",createdAt:"2024-06-06T07:39:28.406Z"},{customer:"Betrimex - Mỏ cày",type:"factory",province:"Bến tre",taxCode:8787878545,address:`
        Lô K, CCN-TTCN Phong Nẫm, Xã Phong Nẫm, H Giồng Trôm, T Bến Tre, Việt Nam`,payment:"TT within 30 days",sales:"Thuận",creator:"Thuận",createdAt:"2024-06-06T07:39:28.406Z"},{customer:"Betrimex - Mỏ cày",type:"factory",province:"Bến tre",taxCode:8787878545,address:`
        Lô K, CCN-TTCN Phong Nẫm, Xã Phong Nẫm, H Giồng Trôm, T Bến Tre, Việt Nam`,payment:"TT within 30 days",sales:"Thuận",creator:"Thuận",createdAt:"2024-06-06T07:39:28.406Z"}],Be=()=>e.jsx(oe,{className:"p-5",children:e.jsxs(xe,{children:[e.jsx(me,{children:e.jsxs(A,{children:[e.jsx(o,{className:"w-[260px]",children:"Customer"}),e.jsx(o,{children:"Type"}),e.jsx(o,{className:"min-w-[150px]",children:"Province"}),e.jsx(o,{children:"TaxCode"}),e.jsx(o,{className:"max-w-[600px]",children:"Address"}),e.jsx(o,{className:"max-w-[290px]",children:"Payment"}),e.jsx(o,{className:"text-start min-w-[200px]",children:"Sales"})]})}),e.jsx(he,{children:Pe.map((r,t)=>e.jsx(Ae,{...r,children:e.jsx(A,{className:"cursor-pointer hover:bg-primary/10",children:e.jsx(be,{...r})},t)},t))})]})}),Se=()=>e.jsxs(re,{children:[e.jsx(te,{asChild:!0,children:e.jsxs(i,{variant:"outline",className:"flex items-center gap-2",children:[e.jsx("span",{children:"Filter"})," ",e.jsx(ve,{})]})}),e.jsx(ae,{className:"w-56",children:e.jsxs(ne,{children:[e.jsx(u,{children:"Customer filter 1"}),e.jsx(u,{children:"Customer filter 2"}),e.jsxs(y,{children:[e.jsx(v,{children:"Nested Customer filter"}),e.jsx(b,{children:e.jsxs(D,{children:[e.jsx(u,{children:"Customer filter"}),e.jsxs(y,{children:[e.jsx(v,{children:"Dropdown menu sub"}),e.jsx(b,{children:e.jsx(D,{children:e.jsx(u,{children:"Customer filter"})})})]}),e.jsx(u,{children:"Email"}),e.jsx(u,{children:"Message"})]})})]})]})})]}),Me=()=>{const[r,t]=l.useState(!1),c=()=>t(m=>!m);return e.jsx("div",{className:"flex justify-end",children:e.jsxs(P,{open:r,children:[e.jsx(B,{asChild:!0,children:e.jsxs(i,{onClick:c,variant:"rounded-action",className:"flex items-center gap-2",children:[e.jsx(le,{className:"text-white",size:25}),e.jsx("span",{children:"Add New Customer"})]})}),e.jsx(S,{className:"sm:max-w-[425px]",children:e.jsx(M,{children:e.jsx(V,{children:"Add New Customer"})})})]})})},Ve=()=>e.jsx("div",{className:"flex items-center gap-3 justify-end",children:e.jsx(Me,{})}),He=()=>e.jsxs(H,{children:[e.jsx(I,{className:"w-[180px]",children:e.jsx(F,{placeholder:"Select"})}),e.jsx(G,{children:e.jsxs(L,{defaultValue:"apple",children:[e.jsx(k,{children:"Customer"}),e.jsx(x,{value:"apple",children:"Name"}),e.jsx(x,{value:"banana",children:"Price"}),e.jsx(x,{value:"blueberry",children:"Location"}),e.jsx(x,{value:"grapes",children:"Total"})]})})]}),Oe=()=>e.jsx(ce,{children:e.jsxs(de,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsxs("div",{className:"flex gap-4",children:[e.jsx(ie,{}),e.jsx(Se,{}),e.jsx(He,{})]}),e.jsx(Ve,{})]}),e.jsx(Be,{})]})});export{Oe as default};
