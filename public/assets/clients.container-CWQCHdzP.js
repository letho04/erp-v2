import{j as e,B as n,o as Y,d,p as z,q as I,I as m,K as ee,L as se,M as te,D as ae,w as re,x as le,y as ne,z as u,C as B,E as H,F as O,G as Z,k as ce,H as ie}from"./index-BBTa_ytM.js";import{P as me,a as de}from"./page-wrapper.component-CYpLtnUB.js";import{A as oe,a as xe,b as ue,c as he,d as pe,e as je,f as ge,g as Te,h as fe,m as t,T as ye,i as Ne,j as k,k as a,l as we}from"./alert-dialog-DkgWf_0H.js";import{a as F,b as V,c as E,d as $,e as G,D as Ce}from"./dialog-h1TkwyRF.js";import{S as R,a as be,b as Se,c as Ae,d as Me,e as ve,f}from"./select-ZM2jgcCQ.js";import{$ as De}from"./index-DhHhmoM7.js";import{C as Pe}from"./index-ClhBb4Ic.js";import"./card-DY1qjy-D.js";import"./index-CMzVulB3.js";const Be=()=>e.jsxs(oe,{children:[e.jsx(xe,{asChild:!0,children:e.jsx(n,{variant:"destructive",children:"Delete"})}),e.jsxs(ue,{children:[e.jsxs(he,{children:[e.jsx(pe,{children:"Are you absolutely sure want to delete this client?"}),e.jsx(je,{children:"This action cannot be undone. This will permanently your product"})]}),e.jsxs(ge,{children:[e.jsx(Te,{children:"Cancel"}),e.jsx(fe,{className:Y({variant:"destructive"}),children:"Continue"})]})]})]});function He({children:r,createdAt:c,creator:x,client:o,customer:y,gender:p,id:N,sales:j,source:w,status:g,type:h,cType:C,email:T,mobile:M}){const[v,D]=d.useState(h),[b,S]=d.useState(w),[l,L]=d.useState(!1),A=`${z(new Date(c||Date.now()))} ${I(new Date(c||Date.now()))}`,[W,q]=d.useState(0),[K,_]=d.useState(0),[J,Q]=d.useState(0),[U,X]=d.useState(0),P=()=>{L(i=>!i)};return e.jsxs(F,{children:[e.jsx(V,{asChild:!0,children:r}),e.jsxs(E,{className:"max-w-[40vw]",children:[e.jsx($,{children:e.jsx(G,{className:"text-xl",children:o})}),e.jsxs("div",{className:"h-[500px] overflow-y-auto border-input px-6 py-4 rounded-md space-y-4",children:[e.jsxs(s,{children:[e.jsx("p",{className:"text-muted-foreground min-w-[130px] max-w-[180px] flex items-center",children:"Client"}),e.jsx("p",{children:o})]}),e.jsxs(s,{children:[e.jsx("p",{className:"text-muted-foreground min-w-[130px] max-w-[180px] flex items-center",children:"Status"}),l?e.jsx(m,{defaultValue:g}):e.jsx("p",{children:g})]}),e.jsxs(s,{children:[e.jsx("p",{className:"text-muted-foreground min-w-[130px] max-w-[180px] flex items-center",children:"Full Name"}),e.jsxs("p",{className:"text-secondary font-bold",children:[p==="male"?"Mr":"Ms"," ",o]})]}),e.jsxs(s,{children:[e.jsx("p",{className:"text-muted-foreground min-w-[130px] max-w-[180px] flex items-center",children:"Customer"}),l?e.jsx(R,{}):e.jsx("p",{className:"font-bold",children:y})]}),e.jsxs(s,{children:[e.jsx("p",{className:"text-muted-foreground min-w-[130px] max-w-[180px] flex items-center",children:"Type"}),l?e.jsxs("div",{className:"flex gap-3 ",children:[e.jsxs(n,{onClick:()=>D("purchaser"),className:"capitalize",variant:v==="purchaser"?"default":"outline",size:"lg",children:[" ","purchaser"]}),e.jsx(n,{onClick:()=>D("user"),className:"capitalize",variant:v==="user"?"default":"outline",size:"lg",children:"user"})]}):e.jsx("p",{className:"capitalize",children:h})]}),e.jsxs(s,{children:[e.jsx("p",{className:"text-muted-foreground min-w-[130px] max-w-[180px] flex items-center",children:"Mobile"}),l?e.jsx(m,{defaultValue:M}):e.jsx("p",{children:M})]}),e.jsxs(s,{children:[e.jsx("p",{className:"text-muted-foreground min-w-[130px] max-w-[180px] flex items-center",children:"Email"}),l?e.jsx(m,{defaultValue:T,type:"email"}):e.jsx("p",{children:T})]}),e.jsxs(s,{children:[e.jsx("p",{className:"text-muted-foreground min-w-[130px] max-w-[180px] flex items-center",children:"Sources"}),l?e.jsxs("div",{className:"flex gap-3 ",children:[e.jsxs(n,{onClick:()=>S("sales"),className:"capitalize",variant:b==="sales"?"default":"outline",size:"lg",children:[" ","sales"]}),e.jsx(n,{onClick:()=>S("manager"),className:"capitalize",variant:b==="manager"?"default":"outline",size:"lg",children:"manager"}),e.jsx(n,{onClick:()=>S("marketing"),className:"capitalize",variant:b==="marketing"?"default":"outline",size:"lg",children:"marketing"})]}):e.jsx("p",{children:h})]}),e.jsxs(s,{children:[e.jsx("p",{className:"text-muted-foreground min-w-[130px] max-w-[180px] flex items-center",children:"Sales"}),e.jsx("p",{children:j})]}),e.jsxs(s,{children:[e.jsx("p",{className:"text-muted-foreground min-w-[130px] max-w-[180px] flex items-center",children:"Created Time"}),e.jsx("p",{children:A})]}),e.jsxs(s,{children:[e.jsx("p",{className:"text-muted-foreground min-w-[130px] max-w-[180px] flex items-center",children:"Creator"}),e.jsx("p",{children:x})]}),e.jsxs(s,{children:[e.jsx("p",{className:"text-muted-foreground min-w-[130px] max-w-[180px] flex items-center",children:"Gender"}),e.jsx("p",{className:"capitalize",children:p})]}),e.jsxs(s,{children:[e.jsx("p",{className:"text-muted-foreground min-w-[130px] max-w-[180px] flex items-center",children:"ID Client"}),e.jsx("p",{children:N})]}),l&&e.jsxs(e.Fragment,{children:[e.jsxs(s,{children:[e.jsx("p",{className:"text-muted-foreground min-w-[130px] max-w-[180px] flex items-center",children:"Editor"}),e.jsx("p",{children:x})]}),e.jsxs(s,{children:[e.jsx("p",{className:"text-muted-foreground min-w-[130px] max-w-[180px] flex items-center",children:"Edited Time"}),e.jsx("p",{children:A})]}),e.jsxs(s,{children:[e.jsx("p",{className:"text-muted-foreground min-w-[130px] max-w-[180px] flex items-center",children:"Remark"}),e.jsx("p",{children:A})]}),e.jsxs(s,{children:[e.jsx("p",{className:"text-muted-foreground min-w-[130px] max-w-[180px] flex items-center",children:"C Type"}),e.jsx(m,{defaultValue:C})]})," ",e.jsxs(s,{children:[e.jsx("p",{className:"text-muted-foreground min-w-[130px] max-w-[180px] flex items-center",children:"Total PO"}),e.jsx(m,{value:W,type:"number",onChange:i=>q(+i.target.value)})]})," ",e.jsxs(s,{children:[e.jsx("p",{className:"text-muted-foreground min-w-[130px] max-w-[180px] flex items-center",children:"Total Amt"}),e.jsx(m,{value:K,type:"number",onChange:i=>_(+i.target.value)})]})," ",e.jsxs(s,{children:[e.jsx("p",{className:"text-muted-foreground min-w-[130px] max-w-[180px] flex items-center",children:"Paid Amt"}),e.jsx(m,{value:J,type:"number",onChange:i=>Q(+i.target.value)})]})," ",e.jsxs(s,{children:[e.jsx("p",{className:"text-muted-foreground min-w-[130px] max-w-[180px] flex items-center",children:"Pending Amt"}),e.jsx(m,{value:U,type:"number",onChange:i=>X(+i.target.value)})]})]})]}),e.jsx(Ce,{children:e.jsxs("div",{className:"flex gap-2 items-center",children:[l&&e.jsx(n,{variant:"outline",onClick:P,children:"Cancel"}),!l&&e.jsx(Be,{}),e.jsx(n,{onClick:P,children:l?"Save":"Edit"})]})})]})]})}function s({children:r}){return e.jsx("div",{className:"flex",children:r})}function Oe(r){return ee({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9 9 0 0 0 8 15"},child:[]}]})(r)}const Ze=({id:r,status:c,customer:x,type:o,source:y,sales:p,cType:N,createdAt:j,client:w,remark:g,gender:h,creator:C})=>{const T=`${z(new Date(j||Date.now()))} ${I(new Date(j||Date.now()))}`;return e.jsxs(e.Fragment,{children:[e.jsx(t,{className:"text-sm",children:r}),e.jsx(t,{className:"text-sm",children:c}),e.jsx(t,{className:"text-sm font-bold",children:x}),e.jsxs(t,{className:"text-sm text-secondary",children:[h==="male"?"Mr":"Ms"," ",w]}),e.jsx(t,{children:e.jsx("p",{className:"capitalize overflow-hidden text-sm text-ellipsis whitespace-nowrap",children:o})}),e.jsx(t,{children:e.jsx(se,{className:"text-muted-foreground"})}),e.jsx(t,{children:e.jsx(Oe,{className:"text-muted-foreground"})}),e.jsx(t,{children:e.jsx(te,{className:"text-muted-foreground"})}),e.jsx(t,{className:"text-sm",children:e.jsx("p",{className:"overflow-hidden text-sm text-ellipsis whitespace-nowrap",children:y})}),e.jsx(t,{children:p}),e.jsx(t,{children:N}),e.jsx(t,{children:T}),e.jsx(t,{children:C}),e.jsx(t,{children:g})]})},ke=[{id:74,status:"6. PO",customer:"Betrimex - Mỏ cày",client:"Nguyễn Thị Hồng Thắm",gender:"female",type:"purchaser",mobile:"0931689447",email:"tham55182585@hyosung.com",source:"Sales",sales:"Thuận",creator:"Thuận",createdAt:"2024-06-06T07:39:28.406Z"},{id:74,status:"6. PO",customer:"Betrimex - Mỏ cày",client:"Nguyễn Thị Hồng Thắm",gender:"female",type:"purchaser",mobile:"0931689447",email:"tham55182585@hyosung.com",source:"Sales",sales:"Thuận",creator:"Thuận",createdAt:"2024-06-06T07:39:28.406Z"},{id:74,status:"6. PO",customer:"Betrimex - Mỏ cày",client:"Nguyễn Thị Hồng Thắm",gender:"female",type:"purchaser",mobile:"0931689447",email:"tham55182585@hyosung.com",source:"Sales",sales:"Thuận",creator:"Thuận",createdAt:"2024-06-06T07:39:28.406Z"},{id:74,status:"6. PO",customer:"Betrimex - Mỏ cày",client:"Nguyễn Thị Hồng Thắm",gender:"female",type:"purchaser",mobile:"0931689447",email:"tham55182585@hyosung.com",source:"Sales",sales:"Thuận",creator:"Thuận",createdAt:"2024-06-06T07:39:28.406Z"},{id:74,status:"6. PO",customer:"Betrimex - Mỏ cày",client:"Nguyễn Thị Hồng Thắm",gender:"female",type:"purchaser",mobile:"0931689447",email:"tham55182585@hyosung.com",source:"Sales",sales:"Thuận",creator:"Thuận",createdAt:"2024-06-06T07:39:28.406Z"},{id:74,status:"6. PO",customer:"Betrimex - Mỏ cày",client:"Nguyễn Thị Hồng Thắm",gender:"female",type:"purchaser",mobile:"0931689447",email:"tham55182585@hyosung.com",source:"Sales",sales:"Thuận",creator:"Thuận",createdAt:"2024-06-06T07:39:28.406Z"},{id:74,status:"6. PO",customer:"Betrimex - Mỏ cày",client:"Nguyễn Thị Hồng Thắm",gender:"female",type:"purchaser",mobile:"0931689447",email:"tham55182585@hyosung.com",source:"Sales",sales:"Thuận",creator:"Thuận",createdAt:"2024-06-06T07:39:28.406Z"},{id:74,status:"6. PO",customer:"Betrimex - Mỏ cày",client:"Nguyễn Thị Hồng Thắm",gender:"female",type:"purchaser",mobile:"0931689447",email:"tham55182585@hyosung.com",source:"Sales",sales:"Thuận",creator:"Thuận",createdAt:"2024-06-06T07:39:28.406Z"},{id:74,status:"6. PO",customer:"Betrimex - Mỏ cày",client:"Nguyễn Thị Hồng Thắm",gender:"female",type:"purchaser",mobile:"0931689447",email:"tham55182585@hyosung.com",source:"Sales",sales:"Thuận",creator:"Thuận",createdAt:"2024-06-06T07:39:28.406Z"},{id:74,status:"6. PO",customer:"Betrimex - Mỏ cày",client:"Nguyễn Thị Hồng Thắm",gender:"female",type:"purchaser",mobile:"0931689447",email:"tham55182585@hyosung.com",source:"Sales",sales:"Thuận",creator:"Thuận",createdAt:"2024-06-06T07:39:28.406Z"},{id:74,status:"6. PO",customer:"Betrimex - Mỏ cày",client:"Nguyễn Thị Hồng Thắm",gender:"female",type:"purchaser",mobile:"0931689447",email:"tham55182585@hyosung.com",source:"Sales",sales:"Thuận",creator:"Thuận",createdAt:"2024-06-06T07:39:28.406Z"},{id:74,status:"6. PO",customer:"Betrimex - Mỏ cày",client:"Nguyễn Thị Hồng Thắm",gender:"female",type:"purchaser",mobile:"0931689447",email:"tham55182585@hyosung.com",source:"Sales",sales:"Thuận",creator:"Thuận",createdAt:"2024-06-06T07:39:28.406Z"},{id:74,status:"6. PO",customer:"Betrimex - Mỏ cày",client:"Nguyễn Thị Hồng Thắm",gender:"female",type:"purchaser",mobile:"0931689447",email:"tham55182585@hyosung.com",source:"Sales",sales:"Thuận",creator:"Thuận",createdAt:"2024-06-06T07:39:28.406Z"},{id:74,status:"6. PO",customer:"Betrimex - Mỏ cày",client:"Nguyễn Thị Hồng Thắm",gender:"female",type:"purchaser",mobile:"0931689447",email:"tham55182585@hyosung.com",source:"Sales",sales:"Thuận",creator:"Thuận",createdAt:"2024-06-06T07:39:28.406Z"},{id:74,status:"6. PO",customer:"Betrimex - Mỏ cày",client:"Nguyễn Thị Hồng Thắm",gender:"female",type:"purchaser",mobile:"0931689447",email:"tham55182585@hyosung.com",source:"Sales",sales:"Thuận",creator:"Thuận",createdAt:"2024-06-06T07:39:28.406Z"},{id:74,status:"6. PO",customer:"Betrimex - Mỏ cày",client:"Nguyễn Thị Hồng Thắm",gender:"female",type:"purchaser",mobile:"0931689447",email:"tham55182585@hyosung.com",source:"Sales",sales:"Thuận",creator:"Thuận",createdAt:"2024-06-06T07:39:28.406Z"},{id:74,status:"6. PO",customer:"Betrimex - Mỏ cày",client:"Nguyễn Thị Hồng Thắm",gender:"female",type:"purchaser",mobile:"0931689447",email:"tham55182585@hyosung.com",source:"Sales",sales:"Thuận",creator:"Thuận",createdAt:"2024-06-06T07:39:28.406Z"},{id:74,status:"6. PO",customer:"Betrimex - Mỏ cày",client:"Nguyễn Thị Hồng Thắm",gender:"female",type:"purchaser",mobile:"0931689447",email:"tham55182585@hyosung.com",source:"Sales",sales:"Thuận",creator:"Thuận",createdAt:"2024-06-06T07:39:28.406Z"},{id:74,status:"6. PO",customer:"Betrimex - Mỏ cày",client:"Nguyễn Thị Hồng Thắm",gender:"female",type:"purchaser",mobile:"0931689447",email:"tham55182585@hyosung.com",source:"Sales",sales:"Thuận",creator:"Thuận",createdAt:"2024-06-06T07:39:28.406Z"},{id:74,status:"6. PO",customer:"Betrimex - Mỏ cày",client:"Nguyễn Thị Hồng Thắm",gender:"female",type:"purchaser",mobile:"0931689447",email:"tham55182585@hyosung.com",source:"Sales",sales:"Thuận",creator:"Thuận",createdAt:"2024-06-06T07:39:28.406Z"},{id:74,status:"6. PO",customer:"Betrimex - Mỏ cày",client:"Nguyễn Thị Hồng Thắm",gender:"female",type:"purchaser",mobile:"0931689447",email:"tham55182585@hyosung.com",source:"Sales",sales:"Thuận",creator:"Thuận",createdAt:"2024-06-06T07:39:28.406Z"},{id:74,status:"6. PO",customer:"Betrimex - Mỏ cày",client:"Nguyễn Thị Hồng Thắm",gender:"female",type:"purchaser",mobile:"0931689447",email:"tham55182585@hyosung.com",source:"Sales",sales:"Thuận",creator:"Thuận",createdAt:"2024-06-06T07:39:28.406Z"},{id:74,status:"6. PO",customer:"Betrimex - Mỏ cày",client:"Nguyễn Thị Hồng Thắm",gender:"female",type:"purchaser",mobile:"0931689447",email:"tham55182585@hyosung.com",source:"Sales",sales:"Thuận",creator:"Thuận",createdAt:"2024-06-06T07:39:28.406Z"}],ze=()=>e.jsx(De,{className:"h-full w-full rounded-md border",children:e.jsx("div",{className:"h-[75vh] overflow-auto",children:e.jsxs(ye,{className:"relative",children:[e.jsx(Ne,{className:"sticky top-0",children:e.jsxs(k,{children:[e.jsx(a,{className:"w-[100px]",children:"ID Client"}),e.jsx(a,{children:"Status"}),e.jsx(a,{className:"min-w-[150px]",children:"Customer"}),e.jsx(a,{className:"min-w-[150px]",children:"Full Name"}),e.jsx(a,{children:"Type"}),e.jsx(a,{className:"w-[42px]"}),e.jsx(a,{className:"w-[42px]"}),e.jsx(a,{className:"w-[42px]"}),e.jsx(a,{children:"Sources"}),e.jsx(a,{className:"text-start",children:"Sales"}),e.jsx(a,{children:"C Type"}),e.jsx(a,{children:"Created Time"}),e.jsx(a,{children:"Creator"}),e.jsx(a,{children:"Remark"})]})}),e.jsx(we,{children:ke.map((r,c)=>e.jsx(He,{...r,children:e.jsx(k,{className:"cursor-pointer hover:bg-primary/20",children:e.jsx(Ze,{...r})},c)},c))})]})})}),Ie=()=>e.jsxs(ae,{children:[e.jsx(re,{asChild:!0,children:e.jsxs(n,{variant:"outline",className:"flex items-center gap-2",children:[e.jsx("span",{children:"Filter"})," ",e.jsx(Pe,{})]})}),e.jsx(le,{className:"w-56",children:e.jsxs(ne,{children:[e.jsx(u,{children:"Clients filter 1"}),e.jsx(u,{children:"Clients filter 2"}),e.jsxs(B,{children:[e.jsx(H,{children:"Nested Clients filter"}),e.jsx(O,{children:e.jsxs(Z,{children:[e.jsx(u,{children:"Clients filter"}),e.jsxs(B,{children:[e.jsx(H,{children:"Dropdown menu sub"}),e.jsx(O,{children:e.jsx(Z,{children:e.jsx(u,{children:"Clients filter"})})})]}),e.jsx(u,{children:"Email"}),e.jsx(u,{children:"Message"})]})})]})]})})]}),Fe=()=>{const[r,c]=d.useState(!1),x=()=>c(o=>!o);return e.jsx("div",{className:"flex justify-end",children:e.jsxs(F,{open:r,children:[e.jsx(V,{asChild:!0,children:e.jsxs(n,{onClick:x,variant:"rounded-action",className:"flex items-center gap-2",children:[e.jsx(ce,{className:"text-white",size:25}),e.jsx("span",{children:"Add New Client"})]})}),e.jsx(E,{className:"sm:max-w-[425px]",children:e.jsx($,{children:e.jsx(G,{children:"Add New Client"})})})]})})},Ve=()=>e.jsx("div",{className:"flex items-center gap-3 justify-end",children:e.jsx(Fe,{})}),Ee=()=>e.jsxs(R,{children:[e.jsx(be,{className:"w-[180px]",children:e.jsx(Se,{placeholder:"Select"})}),e.jsx(Ae,{children:e.jsxs(Me,{defaultValue:"apple",children:[e.jsx(ve,{children:"Client"}),e.jsx(f,{value:"apple",children:"Name"}),e.jsx(f,{value:"banana",children:"Price"}),e.jsx(f,{value:"blueberry",children:"Location"}),e.jsx(f,{value:"grapes",children:"Total"})]})})]}),Qe=()=>e.jsx(me,{className:"grid gap-6 grid-rows-[min-content_1fr]",children:e.jsxs(de,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsxs("div",{className:"flex gap-4",children:[e.jsx(ie,{}),e.jsx(Ie,{}),e.jsx(Ee,{})]}),e.jsx(Ve,{})]}),e.jsx(ze,{})]})});export{Qe as default};
