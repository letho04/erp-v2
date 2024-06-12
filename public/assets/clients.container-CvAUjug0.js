import{d,E as z,F as I,j as e,I as m,B as i,V as Y,W as ee,X as se,H as te,J as ae,K as re,L as le,M as u,N as B,O,P as H,Q as Z,k as ne,T as ce}from"./index-BiIrBdU2.js";import{P as ie,a as me}from"./page-wrapper.component-D5UmrWII.js";import{a as V,b as F,c as E,d as $,e as R,D as de,k as t,T as oe,g as xe,h as k,i as a,j as ue}from"./table-B9UuWSi6.js";import{S as G,a as he,b as pe,c as je,d as ge,e as Te,f}from"./select-BdNAfD4P.js";import{$ as fe}from"./index-C-K1Icov.js";import{C as ye}from"./index-zljbPaXz.js";import"./card-DgqlkFYZ.js";import"./index-BEk9yI-S.js";function Ne({children:r,createdAt:l,creator:x,client:o,customer:y,gender:p,id:N,sales:j,source:w,status:g,type:h,cType:S,email:T,mobile:v}){const[A,P]=d.useState(h),[b,C]=d.useState(w),[n,L]=d.useState(!1),M=`${z(new Date(l||Date.now()))} ${I(new Date(l||Date.now()))}`,[W,J]=d.useState(0),[K,Q]=d.useState(0),[X,_]=d.useState(0),[q,U]=d.useState(0),D=()=>{L(c=>!c)};return e.jsxs(V,{children:[e.jsx(F,{asChild:!0,children:r}),e.jsxs(E,{className:"max-w-[40vw]",children:[e.jsx($,{children:e.jsx(R,{className:"text-xl",children:o})}),e.jsxs("div",{className:"h-[500px] overflow-y-auto border-input px-6 py-4 rounded-md space-y-4",children:[e.jsxs(s,{children:[e.jsx("p",{className:"text-muted-foreground min-w-[130px] max-w-[180px] flex items-center",children:"Client"}),e.jsx("p",{children:o})]}),e.jsxs(s,{children:[e.jsx("p",{className:"text-muted-foreground min-w-[130px] max-w-[180px] flex items-center",children:"Status"}),n?e.jsx(m,{defaultValue:g}):e.jsx("p",{children:g})]}),e.jsxs(s,{children:[e.jsx("p",{className:"text-muted-foreground min-w-[130px] max-w-[180px] flex items-center",children:"Full Name"}),e.jsxs("p",{className:"text-secondary font-bold",children:[p==="male"?"Mr":"Ms"," ",o]})]}),e.jsxs(s,{children:[e.jsx("p",{className:"text-muted-foreground min-w-[130px] max-w-[180px] flex items-center",children:"Customer"}),n?e.jsx(G,{}):e.jsx("p",{className:"font-bold",children:y})]}),e.jsxs(s,{children:[e.jsx("p",{className:"text-muted-foreground min-w-[130px] max-w-[180px] flex items-center",children:"Type"}),n?e.jsxs("div",{className:"flex gap-3 ",children:[e.jsxs(i,{onClick:()=>P("purchaser"),className:"capitalize",variant:A==="purchaser"?"default":"outline",size:"lg",children:[" ","purchaser"]}),e.jsx(i,{onClick:()=>P("user"),className:"capitalize",variant:A==="user"?"default":"outline",size:"lg",children:"user"})]}):e.jsx("p",{className:"capitalize",children:h})]}),e.jsxs(s,{children:[e.jsx("p",{className:"text-muted-foreground min-w-[130px] max-w-[180px] flex items-center",children:"Mobile"}),n?e.jsx(m,{defaultValue:v}):e.jsx("p",{children:v})]}),e.jsxs(s,{children:[e.jsx("p",{className:"text-muted-foreground min-w-[130px] max-w-[180px] flex items-center",children:"Email"}),n?e.jsx(m,{defaultValue:T,type:"email"}):e.jsx("p",{children:T})]}),e.jsxs(s,{children:[e.jsx("p",{className:"text-muted-foreground min-w-[130px] max-w-[180px] flex items-center",children:"Sources"}),n?e.jsxs("div",{className:"flex gap-3 ",children:[e.jsxs(i,{onClick:()=>C("sales"),className:"capitalize",variant:b==="sales"?"default":"outline",size:"lg",children:[" ","sales"]}),e.jsx(i,{onClick:()=>C("manager"),className:"capitalize",variant:b==="manager"?"default":"outline",size:"lg",children:"manager"}),e.jsx(i,{onClick:()=>C("marketing"),className:"capitalize",variant:b==="marketing"?"default":"outline",size:"lg",children:"marketing"})]}):e.jsx("p",{children:h})]}),e.jsxs(s,{children:[e.jsx("p",{className:"text-muted-foreground min-w-[130px] max-w-[180px] flex items-center",children:"Sales"}),e.jsx("p",{children:j})]}),e.jsxs(s,{children:[e.jsx("p",{className:"text-muted-foreground min-w-[130px] max-w-[180px] flex items-center",children:"Created Time"}),e.jsx("p",{children:M})]}),e.jsxs(s,{children:[e.jsx("p",{className:"text-muted-foreground min-w-[130px] max-w-[180px] flex items-center",children:"Creator"}),e.jsx("p",{children:x})]}),e.jsxs(s,{children:[e.jsx("p",{className:"text-muted-foreground min-w-[130px] max-w-[180px] flex items-center",children:"Gender"}),e.jsx("p",{className:"capitalize",children:p})]}),e.jsxs(s,{children:[e.jsx("p",{className:"text-muted-foreground min-w-[130px] max-w-[180px] flex items-center",children:"ID Client"}),e.jsx("p",{children:N})]}),n&&e.jsxs(e.Fragment,{children:[e.jsxs(s,{children:[e.jsx("p",{className:"text-muted-foreground min-w-[130px] max-w-[180px] flex items-center",children:"Editor"}),e.jsx("p",{children:x})]}),e.jsxs(s,{children:[e.jsx("p",{className:"text-muted-foreground min-w-[130px] max-w-[180px] flex items-center",children:"Edited Time"}),e.jsx("p",{children:M})]}),e.jsxs(s,{children:[e.jsx("p",{className:"text-muted-foreground min-w-[130px] max-w-[180px] flex items-center",children:"Remark"}),e.jsx("p",{children:M})]}),e.jsxs(s,{children:[e.jsx("p",{className:"text-muted-foreground min-w-[130px] max-w-[180px] flex items-center",children:"C Type"}),e.jsx(m,{defaultValue:S})]})," ",e.jsxs(s,{children:[e.jsx("p",{className:"text-muted-foreground min-w-[130px] max-w-[180px] flex items-center",children:"Total PO"}),e.jsx(m,{value:W,type:"number",onChange:c=>J(+c.target.value)})]})," ",e.jsxs(s,{children:[e.jsx("p",{className:"text-muted-foreground min-w-[130px] max-w-[180px] flex items-center",children:"Total Amt"}),e.jsx(m,{value:K,type:"number",onChange:c=>Q(+c.target.value)})]})," ",e.jsxs(s,{children:[e.jsx("p",{className:"text-muted-foreground min-w-[130px] max-w-[180px] flex items-center",children:"Paid Amt"}),e.jsx(m,{value:X,type:"number",onChange:c=>_(+c.target.value)})]})," ",e.jsxs(s,{children:[e.jsx("p",{className:"text-muted-foreground min-w-[130px] max-w-[180px] flex items-center",children:"Pending Amt"}),e.jsx(m,{value:q,type:"number",onChange:c=>U(+c.target.value)})]})]})]}),e.jsx(de,{children:e.jsxs("div",{className:"flex gap-2 items-center",children:[n&&e.jsx(i,{variant:"outline",onClick:D,children:"Cancel"}),e.jsx(i,{onClick:D,children:n?"Save":"Edit"})]})})]})]})}function s({children:r}){return e.jsx("div",{className:"flex",children:r})}function we(r){return Y({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9 9 0 0 0 8 15"},child:[]}]})(r)}const Se=({id:r,status:l,customer:x,type:o,source:y,sales:p,cType:N,createdAt:j,client:w,remark:g,gender:h,creator:S})=>{const T=`${z(new Date(j||Date.now()))} ${I(new Date(j||Date.now()))}`;return e.jsxs(e.Fragment,{children:[e.jsx(t,{className:"text-sm",children:r}),e.jsx(t,{className:"text-sm",children:l}),e.jsx(t,{className:"text-sm font-bold",children:x}),e.jsxs(t,{className:"text-sm text-secondary",children:[h==="male"?"Mr":"Ms"," ",w]}),e.jsx(t,{children:e.jsx("p",{className:"capitalize overflow-hidden text-sm text-ellipsis whitespace-nowrap",children:o})}),e.jsx(t,{children:e.jsx(ee,{className:"text-muted-foreground"})}),e.jsx(t,{children:e.jsx(we,{className:"text-muted-foreground"})}),e.jsx(t,{children:e.jsx(se,{className:"text-muted-foreground"})}),e.jsx(t,{className:"text-sm",children:e.jsx("p",{className:"overflow-hidden text-sm text-ellipsis whitespace-nowrap",children:y})}),e.jsx(t,{children:p}),e.jsx(t,{children:N}),e.jsx(t,{children:T}),e.jsx(t,{children:S}),e.jsx(t,{children:g})]})},be=[{id:74,status:"6. PO",customer:"Betrimex - Mỏ cày",client:"Nguyễn Thị Hồng Thắm",gender:"female",type:"purchaser",mobile:"0931689447",email:"tham55182585@hyosung.com",source:"Sales",sales:"Thuận",creator:"Thuận",createdAt:"2024-06-06T07:39:28.406Z"},{id:74,status:"6. PO",customer:"Betrimex - Mỏ cày",client:"Nguyễn Thị Hồng Thắm",gender:"female",type:"purchaser",mobile:"0931689447",email:"tham55182585@hyosung.com",source:"Sales",sales:"Thuận",creator:"Thuận",createdAt:"2024-06-06T07:39:28.406Z"},{id:74,status:"6. PO",customer:"Betrimex - Mỏ cày",client:"Nguyễn Thị Hồng Thắm",gender:"female",type:"purchaser",mobile:"0931689447",email:"tham55182585@hyosung.com",source:"Sales",sales:"Thuận",creator:"Thuận",createdAt:"2024-06-06T07:39:28.406Z"},{id:74,status:"6. PO",customer:"Betrimex - Mỏ cày",client:"Nguyễn Thị Hồng Thắm",gender:"female",type:"purchaser",mobile:"0931689447",email:"tham55182585@hyosung.com",source:"Sales",sales:"Thuận",creator:"Thuận",createdAt:"2024-06-06T07:39:28.406Z"},{id:74,status:"6. PO",customer:"Betrimex - Mỏ cày",client:"Nguyễn Thị Hồng Thắm",gender:"female",type:"purchaser",mobile:"0931689447",email:"tham55182585@hyosung.com",source:"Sales",sales:"Thuận",creator:"Thuận",createdAt:"2024-06-06T07:39:28.406Z"},{id:74,status:"6. PO",customer:"Betrimex - Mỏ cày",client:"Nguyễn Thị Hồng Thắm",gender:"female",type:"purchaser",mobile:"0931689447",email:"tham55182585@hyosung.com",source:"Sales",sales:"Thuận",creator:"Thuận",createdAt:"2024-06-06T07:39:28.406Z"},{id:74,status:"6. PO",customer:"Betrimex - Mỏ cày",client:"Nguyễn Thị Hồng Thắm",gender:"female",type:"purchaser",mobile:"0931689447",email:"tham55182585@hyosung.com",source:"Sales",sales:"Thuận",creator:"Thuận",createdAt:"2024-06-06T07:39:28.406Z"},{id:74,status:"6. PO",customer:"Betrimex - Mỏ cày",client:"Nguyễn Thị Hồng Thắm",gender:"female",type:"purchaser",mobile:"0931689447",email:"tham55182585@hyosung.com",source:"Sales",sales:"Thuận",creator:"Thuận",createdAt:"2024-06-06T07:39:28.406Z"},{id:74,status:"6. PO",customer:"Betrimex - Mỏ cày",client:"Nguyễn Thị Hồng Thắm",gender:"female",type:"purchaser",mobile:"0931689447",email:"tham55182585@hyosung.com",source:"Sales",sales:"Thuận",creator:"Thuận",createdAt:"2024-06-06T07:39:28.406Z"},{id:74,status:"6. PO",customer:"Betrimex - Mỏ cày",client:"Nguyễn Thị Hồng Thắm",gender:"female",type:"purchaser",mobile:"0931689447",email:"tham55182585@hyosung.com",source:"Sales",sales:"Thuận",creator:"Thuận",createdAt:"2024-06-06T07:39:28.406Z"},{id:74,status:"6. PO",customer:"Betrimex - Mỏ cày",client:"Nguyễn Thị Hồng Thắm",gender:"female",type:"purchaser",mobile:"0931689447",email:"tham55182585@hyosung.com",source:"Sales",sales:"Thuận",creator:"Thuận",createdAt:"2024-06-06T07:39:28.406Z"},{id:74,status:"6. PO",customer:"Betrimex - Mỏ cày",client:"Nguyễn Thị Hồng Thắm",gender:"female",type:"purchaser",mobile:"0931689447",email:"tham55182585@hyosung.com",source:"Sales",sales:"Thuận",creator:"Thuận",createdAt:"2024-06-06T07:39:28.406Z"},{id:74,status:"6. PO",customer:"Betrimex - Mỏ cày",client:"Nguyễn Thị Hồng Thắm",gender:"female",type:"purchaser",mobile:"0931689447",email:"tham55182585@hyosung.com",source:"Sales",sales:"Thuận",creator:"Thuận",createdAt:"2024-06-06T07:39:28.406Z"},{id:74,status:"6. PO",customer:"Betrimex - Mỏ cày",client:"Nguyễn Thị Hồng Thắm",gender:"female",type:"purchaser",mobile:"0931689447",email:"tham55182585@hyosung.com",source:"Sales",sales:"Thuận",creator:"Thuận",createdAt:"2024-06-06T07:39:28.406Z"},{id:74,status:"6. PO",customer:"Betrimex - Mỏ cày",client:"Nguyễn Thị Hồng Thắm",gender:"female",type:"purchaser",mobile:"0931689447",email:"tham55182585@hyosung.com",source:"Sales",sales:"Thuận",creator:"Thuận",createdAt:"2024-06-06T07:39:28.406Z"},{id:74,status:"6. PO",customer:"Betrimex - Mỏ cày",client:"Nguyễn Thị Hồng Thắm",gender:"female",type:"purchaser",mobile:"0931689447",email:"tham55182585@hyosung.com",source:"Sales",sales:"Thuận",creator:"Thuận",createdAt:"2024-06-06T07:39:28.406Z"},{id:74,status:"6. PO",customer:"Betrimex - Mỏ cày",client:"Nguyễn Thị Hồng Thắm",gender:"female",type:"purchaser",mobile:"0931689447",email:"tham55182585@hyosung.com",source:"Sales",sales:"Thuận",creator:"Thuận",createdAt:"2024-06-06T07:39:28.406Z"},{id:74,status:"6. PO",customer:"Betrimex - Mỏ cày",client:"Nguyễn Thị Hồng Thắm",gender:"female",type:"purchaser",mobile:"0931689447",email:"tham55182585@hyosung.com",source:"Sales",sales:"Thuận",creator:"Thuận",createdAt:"2024-06-06T07:39:28.406Z"},{id:74,status:"6. PO",customer:"Betrimex - Mỏ cày",client:"Nguyễn Thị Hồng Thắm",gender:"female",type:"purchaser",mobile:"0931689447",email:"tham55182585@hyosung.com",source:"Sales",sales:"Thuận",creator:"Thuận",createdAt:"2024-06-06T07:39:28.406Z"},{id:74,status:"6. PO",customer:"Betrimex - Mỏ cày",client:"Nguyễn Thị Hồng Thắm",gender:"female",type:"purchaser",mobile:"0931689447",email:"tham55182585@hyosung.com",source:"Sales",sales:"Thuận",creator:"Thuận",createdAt:"2024-06-06T07:39:28.406Z"},{id:74,status:"6. PO",customer:"Betrimex - Mỏ cày",client:"Nguyễn Thị Hồng Thắm",gender:"female",type:"purchaser",mobile:"0931689447",email:"tham55182585@hyosung.com",source:"Sales",sales:"Thuận",creator:"Thuận",createdAt:"2024-06-06T07:39:28.406Z"},{id:74,status:"6. PO",customer:"Betrimex - Mỏ cày",client:"Nguyễn Thị Hồng Thắm",gender:"female",type:"purchaser",mobile:"0931689447",email:"tham55182585@hyosung.com",source:"Sales",sales:"Thuận",creator:"Thuận",createdAt:"2024-06-06T07:39:28.406Z"},{id:74,status:"6. PO",customer:"Betrimex - Mỏ cày",client:"Nguyễn Thị Hồng Thắm",gender:"female",type:"purchaser",mobile:"0931689447",email:"tham55182585@hyosung.com",source:"Sales",sales:"Thuận",creator:"Thuận",createdAt:"2024-06-06T07:39:28.406Z"}],Ce=()=>e.jsx(fe,{className:"h-full w-full rounded-md border",children:e.jsx("div",{className:"h-[75vh] overflow-auto",children:e.jsxs(oe,{className:"relative",children:[e.jsx(xe,{className:"sticky top-0",children:e.jsxs(k,{children:[e.jsx(a,{className:"w-[100px]",children:"ID Client"}),e.jsx(a,{children:"Status"}),e.jsx(a,{className:"min-w-[150px]",children:"Customer"}),e.jsx(a,{className:"min-w-[150px]",children:"Full Name"}),e.jsx(a,{children:"Type"}),e.jsx(a,{className:"w-[42px]"}),e.jsx(a,{className:"w-[42px]"}),e.jsx(a,{className:"w-[42px]"}),e.jsx(a,{children:"Sources"}),e.jsx(a,{className:"text-start",children:"Sales"}),e.jsx(a,{children:"C Type"}),e.jsx(a,{children:"Created Time"}),e.jsx(a,{children:"Creator"}),e.jsx(a,{children:"Remark"})]})}),e.jsx(ue,{children:be.map((r,l)=>e.jsx(Ne,{...r,children:e.jsx(k,{className:"cursor-pointer hover:bg-primary/20",children:e.jsx(Se,{...r})},l)},l))})]})})}),Me=()=>e.jsxs(te,{children:[e.jsx(ae,{asChild:!0,children:e.jsxs(i,{variant:"outline",className:"flex items-center gap-2",children:[e.jsx("span",{children:"Filter"})," ",e.jsx(ye,{})]})}),e.jsx(re,{className:"w-56",children:e.jsxs(le,{children:[e.jsx(u,{children:"Clients filter 1"}),e.jsx(u,{children:"Clients filter 2"}),e.jsxs(B,{children:[e.jsx(O,{children:"Nested Clients filter"}),e.jsx(H,{children:e.jsxs(Z,{children:[e.jsx(u,{children:"Clients filter"}),e.jsxs(B,{children:[e.jsx(O,{children:"Dropdown menu sub"}),e.jsx(H,{children:e.jsx(Z,{children:e.jsx(u,{children:"Clients filter"})})})]}),e.jsx(u,{children:"Email"}),e.jsx(u,{children:"Message"})]})})]})]})})]}),ve=()=>{const[r,l]=d.useState(!1),x=()=>l(o=>!o);return e.jsx("div",{className:"flex justify-end",children:e.jsxs(V,{open:r,children:[e.jsx(F,{asChild:!0,children:e.jsxs(i,{onClick:x,variant:"rounded-action",className:"flex items-center gap-2",children:[e.jsx(ne,{className:"text-white",size:25}),e.jsx("span",{children:"Add New Client"})]})}),e.jsx(E,{className:"sm:max-w-[425px]",children:e.jsx($,{children:e.jsx(R,{children:"Add New Client"})})})]})})},Ae=()=>e.jsx("div",{className:"flex items-center gap-3 justify-end",children:e.jsx(ve,{})}),Pe=()=>e.jsxs(G,{children:[e.jsx(he,{className:"w-[180px]",children:e.jsx(pe,{placeholder:"Select"})}),e.jsx(je,{children:e.jsxs(ge,{defaultValue:"apple",children:[e.jsx(Te,{children:"Client"}),e.jsx(f,{value:"apple",children:"Name"}),e.jsx(f,{value:"banana",children:"Price"}),e.jsx(f,{value:"blueberry",children:"Location"}),e.jsx(f,{value:"grapes",children:"Total"})]})})]}),Ve=()=>e.jsx(ie,{className:"grid gap-6 grid-rows-[min-content_1fr]",children:e.jsxs(me,{children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsxs("div",{className:"flex gap-4",children:[e.jsx(ce,{}),e.jsx(Me,{}),e.jsx(Pe,{})]}),e.jsx(Ae,{})]}),e.jsx(Ce,{})]})});export{Ve as default};
