import{T as W,az as E,r as c,aA as z,_ as j,$ as T,aB as F,a1 as A,V as q,au as G,a6 as L,a8 as Q,j as e,m as S,B as C,v as J,I as k,w as D,aC as f}from"./index-DoomM6i9.js";import{S as X,a as Y}from"./scroll-area-CjYpvGXw.js";import{A as Z,a as ee,b as ne,c as te,d as ae,e as re,f as se,g as ce,h as ie,m as t,T as oe,i as ue,j as P,k as a,l as le}from"./alert-dialog-Dqeh3-Tj.js";import{a as de,b as pe,c as me,d as he,e as xe,D as ge}from"./dialog-C90r3FFt.js";import{I as v}from"./item-field-key.component-j816BaJY.js";import{T as fe}from"./textarea-BYe_5CVe.js";import{C as O}from"./checkbox-DUWxFslJ.js";import"./index-iuyptMLq.js";import"./index-DnUZXa6I.js";const U="Tabs",[be,We]=W(U,[E]),H=E(),[Ne,I]=be(U),je=c.forwardRef((r,n)=>{const{__scopeTabs:o,value:u,onValueChange:i,defaultValue:d,orientation:s="horizontal",dir:p,activationMode:x="automatic",...b}=r,m=G(p),[h,N]=L({prop:u,onChange:i,defaultProp:d});return c.createElement(Ne,{scope:o,baseId:Q(),value:h,onValueChange:N,orientation:s,dir:m,activationMode:x},c.createElement(T.div,j({dir:m,"data-orientation":s},b,{ref:n})))}),De="TabsList",we=c.forwardRef((r,n)=>{const{__scopeTabs:o,loop:u=!0,...i}=r,d=I(De,o),s=H(o);return c.createElement(z,j({asChild:!0},s,{orientation:d.orientation,dir:d.dir,loop:u}),c.createElement(T.div,j({role:"tablist","aria-orientation":d.orientation},i,{ref:n})))}),ye="TabsTrigger",Te=c.forwardRef((r,n)=>{const{__scopeTabs:o,value:u,disabled:i=!1,...d}=r,s=I(ye,o),p=H(o),x=K(s.baseId,u),b=M(s.baseId,u),m=u===s.value;return c.createElement(F,j({asChild:!0},p,{focusable:!i,active:m}),c.createElement(T.button,j({type:"button",role:"tab","aria-selected":m,"aria-controls":b,"data-state":m?"active":"inactive","data-disabled":i?"":void 0,disabled:i,id:x},d,{ref:n,onMouseDown:A(r.onMouseDown,h=>{!i&&h.button===0&&h.ctrlKey===!1?s.onValueChange(u):h.preventDefault()}),onKeyDown:A(r.onKeyDown,h=>{[" ","Enter"].includes(h.key)&&s.onValueChange(u)}),onFocus:A(r.onFocus,()=>{const h=s.activationMode!=="manual";!m&&!i&&h&&s.onValueChange(u)})})))}),Ae="TabsContent",ke=c.forwardRef((r,n)=>{const{__scopeTabs:o,value:u,forceMount:i,children:d,...s}=r,p=I(Ae,o),x=K(p.baseId,u),b=M(p.baseId,u),m=u===p.value,h=c.useRef(m);return c.useEffect(()=>{const N=requestAnimationFrame(()=>h.current=!1);return()=>cancelAnimationFrame(N)},[]),c.createElement(q,{present:i||m},({present:N})=>c.createElement(T.div,j({"data-state":m?"active":"inactive","data-orientation":p.orientation,role:"tabpanel","aria-labelledby":x,hidden:!N,id:b,tabIndex:0},s,{ref:n,style:{...r.style,animationDuration:h.current?"0s":void 0}}),N&&d))});function K(r,n){return`${r}-trigger-${n}`}function M(r,n){return`${r}-content-${n}`}const Pe=je,V=we,_=Te,B=ke,ve=Pe,R=c.forwardRef(({className:r,...n},o)=>e.jsx(V,{ref:o,className:S("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",r),...n}));R.displayName=V.displayName;const w=c.forwardRef(({className:r,...n},o)=>e.jsx(_,{ref:o,className:S("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary/80 data-[state=active]:text-foreground data-[state=active]:shadow-sm",r),...n}));w.displayName=_.displayName;const y=c.forwardRef(({className:r,...n},o)=>e.jsx(B,{ref:o,className:S("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",r),...n}));y.displayName=B.displayName;const $e=({id:r})=>(console.log(r),e.jsxs(Z,{children:[e.jsx(ee,{asChild:!0,children:e.jsx(C,{variant:"destructive",children:"Delete"})}),e.jsxs(ne,{children:[e.jsxs(te,{children:[e.jsx(ae,{children:"Are you absolutely sure want to delete"}),e.jsx(re,{children:"This action cannot be undone. This will permanently your product"})]}),e.jsxs(se,{children:[e.jsx(ce,{children:"Cancel"}),e.jsx(ie,{className:J({variant:"destructive"}),children:"Continue"})]})]})]}));function Ce({isOpenDialog:r,children:n,item:o,onToggleDialog:u}){const[i,d]=c.useState(!1),s=()=>{d(l=>!l)},p=["created_at","updated_at"],x=Object.entries(o),b=["dd","DNNumber","whComment","iv","ivDate","totalAmount","paidAmount","pendingAmount"],m=["productId","status","rDate","customer","entity","sales","poDate","prNumber","name","purchaseItem","brand","quantity","unit","unitPrice","amount","refSupplier","refPrice","rtd","payment","remark","purchaser"],h=Object.keys(o).filter(l=>!m.includes(l)&&!b.includes(l)),N=["name","purchaseItem"];return e.jsxs(de,{onOpenChange:u,open:r,children:[e.jsx(pe,{asChild:!0,children:n}),e.jsxs(me,{className:"max-w-[40vw]",children:[e.jsx(he,{children:e.jsxs("div",{className:"flex flex-col gap-4 items-start",children:[e.jsx(xe,{className:"text-xl",children:o.productId}),e.jsxs(ve,{defaultValue:"GENERAL",className:"w-full",children:[e.jsxs(R,{className:"grid w-full grid-cols-3",children:[e.jsx(w,{value:"GENERAL",children:"GENERAL"}),e.jsx(w,{value:"Commission",children:"Commission"}),e.jsx(w,{value:"INVOICE",children:"INVOICE"})]}),e.jsx(y,{value:"GENERAL",children:e.jsx("div",{className:"h-[500px] overflow-y-auto border-input px-6 py-4 rounded-md space-y-4",children:x.map(([l,g])=>{if(m.includes(l))return e.jsxs($,{children:[e.jsx(v,{children:l}),i?p.includes(l)?e.jsx("p",{children:g}):N.includes(l)?e.jsx(fe,{value:g}):e.jsx(k,{value:g}):e.jsx("p",{children:g})]},l)})})}),e.jsx(y,{value:"Commission",children:e.jsx("div",{className:"h-[500px] overflow-y-auto border-input px-6 py-4 rounded-md space-y-4",children:x.map(([l,g])=>{if(h.includes(l))return e.jsxs($,{children:[e.jsx(v,{children:l}),i?p.includes(l)?e.jsx("p",{children:g}):e.jsx(k,{value:g}):e.jsx("p",{children:g})]},l)})})}),e.jsx(y,{value:"INVOICE",children:e.jsx("div",{className:"h-[500px] overflow-y-auto border-input px-6 py-4 rounded-md space-y-4",children:x.map(([l,g])=>{if(b.includes(l))return e.jsxs($,{children:[e.jsx(v,{children:l}),i?p.includes(l)?e.jsx("p",{children:g}):e.jsx(k,{value:g}):e.jsx("p",{children:g})]},l)})})})]})]})}),e.jsx(ge,{children:e.jsxs("div",{className:"flex gap-2 items-center",children:[i&&e.jsx(C,{variant:"outline",onClick:s,children:"Cancel"}),!i&&e.jsx($e,{id:"test"}),e.jsx(C,{onClick:s,children:i?"Save":"Edit"})]})})]})]})}function $({children:r}){return e.jsx("div",{className:"flex gap-4",children:r})}const Se=c.memo(({isSelectAll:r,item:n})=>{const[o,u]=c.useState(r);return c.useEffect(()=>{r||u(!1)},[r]),e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:i=>{i.stopPropagation()},className:"p-0 sticky left-0 text-xs bg-white z-30",children:e.jsxs("div",{className:"p-3 flex gap-2",onClick:i=>{u(d=>!d),i.stopPropagation()},children:[e.jsx(O,{checked:r||o}),e.jsxs("p",{children:[" ",n.productId," "]})]})}),e.jsx(t,{className:"font-bold",style:{color:"#037BE4"},children:n.status}),e.jsx(t,{children:n.rDate&&D(new Date(n.rDate))}),e.jsx(t,{className:"font-bold whitespace-nowrap",children:n.customer}),e.jsx(t,{className:"text-primary font-semibold",children:n.entity}),e.jsx(t,{children:n.sales}),e.jsx(t,{children:n.poDate&&D(new Date(n.poDate))}),e.jsx(t,{children:n.prNumber}),e.jsx(t,{className:"min-w-[125px] max-w-[180px] whitespace-nowrap overflow-hidden text-ellipsis",children:n.name}),e.jsx(t,{className:"min-w-[125px] max-w-[180px] whitespace-nowrap overflow-hidden text-ellipsis",children:n.purchaseItem}),e.jsx(t,{className:"min-w-[80px] max-w-[130px] text-ellipsis whitespace-nowrap",children:n.brand}),e.jsx(t,{className:"text-right",children:n.quantity}),e.jsx(t,{children:n.unit}),e.jsx(t,{className:"text-right",children:f(n.unitPrice)}),e.jsx(t,{className:"text-right",children:f(n.amount)}),e.jsx(t,{children:n.refSupplier}),e.jsx(t,{className:"text-right",children:f(n.refPrice)}),e.jsx(t,{children:n.rtd}),e.jsx(t,{className:"min-w-[125px] whitespace-nowrap",children:n.payment}),e.jsx(t,{children:n.remark}),e.jsx(t,{children:n.purchaser}),e.jsx(t,{className:"text-right",children:n.purchasePercentage?`${n.purchasePercentage}%`:null}),e.jsx(t,{className:"text-right",children:n.purchaseD?`${n.purchaseD}%`:null}),e.jsx(t,{className:"text-right",children:n.kentekPur?`${n.kentekPur}%`:null}),e.jsx(t,{className:"text-right",children:n.purAmount?n.purAmount:0}),e.jsx(t,{children:n.purDate}),e.jsx(t,{children:n.endUser}),e.jsx(t,{className:"text-right",children:n.euPercentage?`${n.euPercentage}%`:null}),e.jsx(t,{className:"text-right",children:n.userD?`${n.userD}%`:null}),e.jsx(t,{className:"text-right",children:n.kentekUser?`${n.kentekUser}%`:null}),e.jsx(t,{className:"text-right",children:n.purAmount?n.purAmount:0}),e.jsx(t,{children:D(new Date(n.euDate||new Date))}),e.jsx(t,{className:"whitespace-nowrap",children:n.opp}),e.jsx(t,{className:"text-right",children:n.opMoneyKe&&f(n.opMoneyKe)}),e.jsx(t,{className:"text-right",children:n.kentekOPP?`${n.kentekOPP}%`:null}),e.jsx(t,{className:"text-right",children:n.opAmount?f(n.opAmount):0}),e.jsx(t,{children:n.opDate}),e.jsx(t,{children:n.c4Name}),e.jsx(t,{className:"text-right",children:n.c4Percentage?`${n.c4Percentage}%`:null}),e.jsx(t,{className:"text-right",children:n.c4Amount?n.c4Amount:0}),e.jsx(t,{children:n.c4Date}),e.jsx(t,{children:n.c5Percentage}),e.jsx(t,{children:n.c5Name}),e.jsx(t,{children:n.c5Amount}),e.jsx(t,{children:n.c5Date}),e.jsx(t,{className:"text-right",children:n.DNNumber}),e.jsx(t,{className:"text-right",children:n.dd&&D(new Date(n.dd))}),e.jsx(t,{children:n.whComment}),e.jsx(t,{children:n.iv}),e.jsx(t,{children:n.ivDate&&D(new Date(n.ivDate))}),e.jsx(t,{className:"text-right",children:n.totalAmount&&f(n.totalAmount)}),e.jsx(t,{className:"text-right",children:n.paidAmount&&f(n.paidAmount)}),e.jsx(t,{className:"text-right",children:n.pendingAmount&&f(n.pendingAmount)})]})}),Ie=[{id:"NAT3E25BB42",price:5236685,items:[{productId:"NAT623055",status:"Order",rDate:new Date().toISOString(),customer:"Trung Nguyên ",entity:"Torasung",sales:"Thuận",poDate:new Date().toISOString(),prNumber:"Kho 3",name:"Đèn led cổ ngỗng chân kẹp 3W ánh sáng vàng ( bao gồm dock sạc ) tiêu chuẩn CE -UV lamp for testing European Conformity  10028184",purchaseItem:"Đèn led cổ ngỗng chân kẹp 3W ánh sáng vàng ( bao gồm dock sạc ) tiêu chuẩn CE -UV lamp for testing European Conformity  10028184",brand:"Hangzhou Mear",quantity:10,unit:"Bộ",unitPrice:35e4,amount:35e4,refSupplier:"Khải Đông",refPrice:125e3,rtd:"3/22/2024",payment:"TT within 10 days",remark:"Có sẵn",purchaser:"Thúy Huỳnh",purchasePercentage:5,purchaseD:"",kentekPur:"",purAmount:0,dd:"1/25/2024",DNNumber:"2402160215",purDate:"4/7/2024",endUser:"Hiếu TN",euPercentage:5,userD:0,kentekUser:"",iv:56,ivDate:"1/25/2024",euAmount:0,euDate:new Date().toISOString(),opp:"Nguyễn Thành Hiệp",opMoneyKe:55e4,kentekOPP:15,opAmount:935e3,totalAmount:35e5,paidAmount:35e5,pendingAmount:0},{productId:"NAT6232133055",status:"Order",rDate:new Date().toISOString(),customer:"Trung Nguyên ",entity:"Torasung",sales:"Thuận",poDate:new Date().toISOString(),prNumber:"Kho 3",name:"Đèn led cổ ngỗng chân kẹp 3W ánh sáng vàng ( bao gồm dock sạc ) tiêu chuẩn CE -UV lamp for testing European Conformity  10028184",purchaseItem:"Đèn led cổ ngỗng chân kẹp 3W ánh sáng vàng ( bao gồm dock sạc ) tiêu chuẩn CE -UV lamp for testing European Conformity  10028184",brand:"Hangzhou Mear",quantity:10,unit:"Bộ",unitPrice:35e4,amount:35e4,refSupplier:"Khải Đông",refPrice:125e3,rtd:"3/22/2024",payment:"TT within 10 days",remark:"",purchaser:"Thúy Huỳnh",purchasePercentage:5,purchaseD:"",kentekPur:"",purAmount:0,dd:"1/25/2024",DNNumber:"2402160215",purDate:"4/7/2024",endUser:"Hiếu TN",euPercentage:5,userD:0,kentekUser:"",iv:56,ivDate:"1/25/2024",euAmount:0,euDate:new Date().toISOString(),opp:"Nguyễn Thành Hiệp",opMoneyKe:55e4,kentekOPP:15,opAmount:935e3,totalAmount:35e5,paidAmount:35e5,pendingAmount:0},{productId:"NAT622305235",status:"Order",rDate:new Date().toISOString(),customer:"Trung Nguyên ",entity:"Torasung",sales:"Thuận",poDate:new Date().toISOString(),prNumber:"Kho 3",name:"Đèn led cổ ngỗng chân kẹp 3W ánh sáng vàng ( bao gồm dock sạc ) tiêu chuẩn CE -UV lamp for testing European Conformity  10028184",purchaseItem:"Đèn led cổ ngỗng chân kẹp 3W ánh sáng vàng ( bao gồm dock sạc ) tiêu chuẩn CE -UV lamp for testing European Conformity  10028184",brand:"Hangzhou Mear",quantity:10,unit:"Bộ",unitPrice:35e4,amount:35e4,refSupplier:"Khải Đông",refPrice:125e3,rtd:"3/22/2024",payment:"TT within 10 days",remark:"",purchaser:"Thúy Huỳnh",purchasePercentage:5,purchaseD:"",kentekPur:"",purAmount:0,dd:"1/25/2024",DNNumber:"2402160215",purDate:"4/7/2024",endUser:"Hiếu TN",euPercentage:5,userD:0,kentekUser:"",iv:56,ivDate:"1/25/2024",euAmount:0,euDate:new Date().toISOString(),opp:"Nguyễn Thành Hiệp",opMoneyKe:55e4,kentekOPP:15,opAmount:935e3,totalAmount:35e5,paidAmount:35e5,pendingAmount:0}]},{id:"NAT3E25BB42",price:1236685,items:[{productId:"NAT623055",status:"Order",rDate:new Date().toISOString(),customer:"Trung Nguyên ",entity:"Torasung",sales:"Thuận",poDate:new Date().toISOString(),prNumber:"Kho 3",name:"Đèn led cổ ngỗng chân kẹp 3W ánh sáng vàng ( bao gồm dock sạc ) tiêu chuẩn CE -UV lamp for testing European Conformity  10028184",purchaseItem:"Đèn led cổ ngỗng chân kẹp 3W ánh sáng vàng ( bao gồm dock sạc ) tiêu chuẩn CE -UV lamp for testing European Conformity  10028184",brand:"Hangzhou Mear",quantity:10,unit:"Bộ",unitPrice:35e4,amount:35e4,refSupplier:"Khải Đông",refPrice:125e3,rtd:"3/22/2024",payment:"TT within 10 days",remark:"",purchaser:"Thúy Huỳnh",purchasePercentage:5,purchaseD:"",kentekPur:"",purAmount:0,dd:"1/25/2024",DNNumber:"2402160215",purDate:"4/7/2024",endUser:"Hiếu TN",euPercentage:5,userD:0,kentekUser:"",iv:56,ivDate:"1/25/2024",euAmount:0,euDate:new Date().toISOString(),opp:"Nguyễn Thành Hiệp",opMoneyKe:55e4,kentekOPP:15,opAmount:935e3,totalAmount:35e5,paidAmount:35e5,pendingAmount:0},{productId:"NAT6232133055",status:"Order",rDate:new Date().toISOString(),customer:"Trung Nguyên ",entity:"Torasung",sales:"Thuận",poDate:new Date().toISOString(),prNumber:"Kho 3",name:"Đèn led cổ ngỗng chân kẹp 3W ánh sáng vàng ( bao gồm dock sạc ) tiêu chuẩn CE -UV lamp for testing European Conformity  10028184",purchaseItem:"Đèn led cổ ngỗng chân kẹp 3W ánh sáng vàng ( bao gồm dock sạc ) tiêu chuẩn CE -UV lamp for testing European Conformity  10028184",brand:"Hangzhou Mear",quantity:10,unit:"Bộ",unitPrice:35e4,amount:35e4,refSupplier:"Khải Đông",refPrice:125e3,rtd:"3/22/2024",payment:"TT within 10 days",remark:"",purchaser:"Thúy Huỳnh",purchasePercentage:5,purchaseD:"",kentekPur:"",purAmount:0,dd:"1/25/2024",DNNumber:"2402160215",purDate:"4/7/2024",endUser:"Hiếu TN",euPercentage:5,userD:0,kentekUser:"",iv:56,ivDate:"1/25/2024",euAmount:0,euDate:new Date().toISOString(),opp:"Nguyễn Thành Hiệp",opMoneyKe:55e4,kentekOPP:15,opAmount:935e3,totalAmount:35e5,paidAmount:35e5,pendingAmount:0},{productId:"NAT622305235",status:"Order",rDate:new Date().toISOString(),customer:"Trung Nguyên ",entity:"Torasung",sales:"Thuận",poDate:new Date().toISOString(),prNumber:"Kho 3",name:"Đèn led cổ ngỗng chân kẹp 3W ánh sáng vàng ( bao gồm dock sạc ) tiêu chuẩn CE -UV lamp for testing European Conformity  10028184",purchaseItem:"Đèn led cổ ngỗng chân kẹp 3W ánh sáng vàng ( bao gồm dock sạc ) tiêu chuẩn CE -UV lamp for testing European Conformity  10028184",brand:"Hangzhou Mear",quantity:10,unit:"Bộ",unitPrice:35e4,amount:35e4,refSupplier:"Khải Đông",refPrice:125e3,rtd:"3/22/2024",payment:"TT within 10 days",remark:"",purchaser:"Thúy Huỳnh",purchasePercentage:5,purchaseD:"",kentekPur:"",purAmount:0,dd:"1/25/2024",DNNumber:"2402160215",purDate:"4/7/2024",endUser:"Hiếu TN",euPercentage:5,userD:0,kentekUser:"",iv:56,ivDate:"1/25/2024",euAmount:0,euDate:new Date().toISOString(),opp:"Nguyễn Thành Hiệp",opMoneyKe:55e4,kentekOPP:15,opAmount:935e3,totalAmount:35e5,paidAmount:35e5,pendingAmount:0}]},{id:"NAT3E25BB47",price:31236685,items:[{productId:"NAT623055",status:"Order",rDate:new Date().toISOString(),customer:"Trung Nguyên ",entity:"Torasung",sales:"Thuận",poDate:new Date().toISOString(),prNumber:"Kho 3",name:"Đèn led cổ ngỗng chân kẹp 3W ánh sáng vàng ( bao gồm dock sạc ) tiêu chuẩn CE -UV lamp for testing European Conformity  10028184",purchaseItem:"Đèn led cổ ngỗng chân kẹp 3W ánh sáng vàng ( bao gồm dock sạc ) tiêu chuẩn CE -UV lamp for testing European Conformity  10028184",brand:"Hangzhou Mear",quantity:10,unit:"Bộ",unitPrice:35e4,amount:35e4,refSupplier:"Khải Đông",refPrice:125e3,rtd:"3/22/2024",payment:"TT within 10 days",remark:"",purchaser:"Thúy Huỳnh",purchasePercentage:5,purchaseD:"",kentekPur:"",purAmount:0,dd:"1/25/2024",DNNumber:"2402160215",purDate:"4/7/2024",endUser:"Hiếu TN",euPercentage:5,userD:0,kentekUser:"",iv:56,ivDate:"1/25/2024",euAmount:0,euDate:new Date().toISOString(),opp:"Nguyễn Thành Hiệp",opMoneyKe:55e4,kentekOPP:15,opAmount:935e3,totalAmount:35e5,paidAmount:35e5,pendingAmount:0},{productId:"NAT6232133055",status:"Order",rDate:new Date().toISOString(),customer:"Trung Nguyên ",entity:"Torasung",sales:"Thuận",poDate:new Date().toISOString(),prNumber:"Kho 3",name:"Đèn led cổ ngỗng chân kẹp 3W ánh sáng vàng ( bao gồm dock sạc ) tiêu chuẩn CE -UV lamp for testing European Conformity  10028184",purchaseItem:"Đèn led cổ ngỗng chân kẹp 3W ánh sáng vàng ( bao gồm dock sạc ) tiêu chuẩn CE -UV lamp for testing European Conformity  10028184",brand:"Hangzhou Mear",quantity:10,unit:"Bộ",unitPrice:35e4,amount:35e4,refSupplier:"Khải Đông",refPrice:125e3,rtd:"3/22/2024",payment:"TT within 10 days",remark:"",purchaser:"Thúy Huỳnh",purchasePercentage:5,purchaseD:"",kentekPur:"",purAmount:0,dd:"1/25/2024",DNNumber:"2402160215",purDate:"4/7/2024",endUser:"Hiếu TN",euPercentage:5,userD:0,kentekUser:"",iv:56,ivDate:"1/25/2024",euAmount:0,euDate:new Date().toISOString(),opp:"Nguyễn Thành Hiệp",opMoneyKe:55e4,kentekOPP:15,opAmount:935e3,totalAmount:35e5,paidAmount:35e5,pendingAmount:0},{productId:"NAT622305235",status:"Order",rDate:new Date().toISOString(),customer:"Trung Nguyên ",entity:"Torasung",sales:"Thuận",poDate:new Date().toISOString(),prNumber:"Kho 3",name:"Đèn led cổ ngỗng chân kẹp 3W ánh sáng vàng ( bao gồm dock sạc ) tiêu chuẩn CE -UV lamp for testing European Conformity  10028184",purchaseItem:"Đèn led cổ ngỗng chân kẹp 3W ánh sáng vàng ( bao gồm dock sạc ) tiêu chuẩn CE -UV lamp for testing European Conformity  10028184",brand:"Hangzhou Mear",quantity:10,unit:"Bộ",unitPrice:35e4,amount:35e4,refSupplier:"Khải Đông",refPrice:125e3,rtd:"3/22/2024",payment:"TT within 10 days",remark:"",purchaser:"Thúy Huỳnh",purchasePercentage:5,purchaseD:"",kentekPur:"",purAmount:0,dd:"1/25/2024",DNNumber:"2402160215",purDate:"4/7/2024",endUser:"Hiếu TN",euPercentage:5,userD:0,kentekUser:"",iv:56,ivDate:"1/25/2024",euAmount:0,euDate:new Date().toISOString(),opp:"Nguyễn Thành Hiệp",opMoneyKe:55e4,kentekOPP:15,opAmount:935e3,totalAmount:35e5,paidAmount:35e5,pendingAmount:0}]}],Ee=()=>{const[r,n]=c.useState(!1),[o,u]=c.useState(!1),i=s=>n(s),d=c.useCallback(()=>{n(!1)},[]);return e.jsx("div",{className:"h-[75vh]",children:e.jsxs(X,{className:"h-full w-full rounded-md border",children:[e.jsxs(oe,{className:"relative",children:[e.jsx(ue,{className:"sticky top-0 z-40",children:e.jsxs(P,{children:[e.jsx(a,{className:"w-[80px]",children:e.jsxs("div",{className:"flex gap-3 items-center",children:[e.jsx(O,{onClick:()=>u(s=>!s)}),"ID PO"]})}),e.jsx(a,{className:"min-w-[125px] text-start",children:"PO Status"}),e.jsx(a,{className:"min-w-[120px]",children:"R Date"}),e.jsx(a,{className:"min-w-[125px] max-w-[250px]",children:"Customer"}),e.jsx(a,{className:"min-w-[90px]",children:"Entity"}),e.jsx(a,{className:"min-w-[90px]",children:"Sales"}),e.jsx(a,{className:"min-w-[125px]",children:"PO Date"}),e.jsx(a,{className:"min-w-[125px]",children:"PR No."}),e.jsx(a,{className:"min-w-[125px] max-w-[180px]",children:"Name"}),e.jsx(a,{className:"min-w-[140px] text-start",children:"Purchase Item"}),e.jsx(a,{className:"min-w-[100px]",children:"Brand"}),e.jsx(a,{className:"min-w-[80px] max-w-[130px]",children:"Quantity"}),e.jsx(a,{className:"min-w-[80px]",children:"Unit"}),e.jsx(a,{className:"min-w-[110px] text-end",children:"Unit Price"}),e.jsx(a,{className:"min-w-[105px] text-end",children:"Amount"}),e.jsx(a,{className:"min-w-[125px]",children:"Ref Supplier"}),e.jsx(a,{className:"min-w-[110px] text-end",children:"Ref Price"}),e.jsx(a,{className:"min-w-[115px] text-start",children:"RTD"}),e.jsx(a,{className:"min-w-[125px] text-start",children:"Payment"}),e.jsx(a,{className:"min-w-[115px] text-start",children:"Remark"}),e.jsx(a,{className:"min-w-[115px] text-start",children:"Purchaser"}),e.jsx(a,{className:"min-w-[90px] text-end",children:"Pur %"}),e.jsx(a,{className:"min-w-[90px] text-end",children:"Pur (đ)"}),e.jsx(a,{className:"min-w-[140px] text-end",children:"% Kentek (Pur)"}),e.jsx(a,{className:"min-w-[125px] text-end",children:"% Pur Amount"}),e.jsx(a,{className:"min-w-[140px] text-start",children:"% Pur Date"}),e.jsx(a,{className:"min-w-[140px] text-start",children:"% End User"}),e.jsx(a,{className:"min-w-[90px] text-end",children:"EU %"}),e.jsx(a,{className:"min-w-[125px] text-end",children:"User (đ)"}),e.jsx(a,{className:"min-w-[140px] text-end",children:"% Kentek (User)"}),e.jsx(a,{className:"min-w-[110px] text-end",children:"EU Amount"}),e.jsx(a,{className:"min-w-[110px] text-start",children:"EU Date"}),e.jsx(a,{className:"min-w-[110px] text-end",children:"OPP"}),e.jsx(a,{className:"min-w-[110px] text-end",children:"OPP (Tiền Kê)"}),e.jsx(a,{className:"min-w-[140px] text-end",children:"% Kentek (OPP)"}),e.jsx(a,{className:"min-w-[110px] text-end",children:"OP Amount"}),e.jsx(a,{className:"min-w-[110px] text-end",children:" OP Date"}),e.jsx(a,{className:"min-w-[110px] text-start",children:"C4 Name"}),e.jsx(a,{className:"min-w-[80px] text-end",children:"C4 %"}),e.jsx(a,{className:"min-w-[110px] text-end",children:"C4 Amt"}),e.jsx(a,{className:"min-w-[110px] text-start",children:"C4 Date"}),e.jsx(a,{className:"min-w-[110px] text-start",children:"C5 Name"}),e.jsx(a,{className:"min-w-[80px] text-end",children:"C5 %"}),e.jsx(a,{className:"min-w-[80px] text-end",children:"C5 Amt"}),e.jsx(a,{className:"min-w-[110px] text-start",children:"C5 Date"}),e.jsx(a,{className:"min-w-[110px] text-start",children:"DD No"}),e.jsx(a,{className:"min-w-[110px] text-start",children:"DD"}),e.jsx(a,{className:"min-w-[80px] text-start",children:"WH Comment"}),e.jsx(a,{className:"min-w-[110px] text-start",children:"IV #"}),e.jsx(a,{className:"min-w-[110px] text-start",children:"IV Date"}),e.jsx(a,{className:"min-w-[110px] text-end",children:"Total Amount"}),e.jsx(a,{className:"min-w-[110px] text-end",children:"Paid Amount"}),e.jsx(a,{className:"min-w-[140px] text-end",children:"Pending Amount"})]})}),e.jsx(le,{children:Ie.map((s,p)=>e.jsxs(c.Fragment,{children:[e.jsx(P,{children:e.jsxs(t,{className:"flex gap-2 items-center sticky left-0 text-xs",children:[e.jsxs("div",{children:[s.id," "]}),e.jsx("p",{className:"absolute left-full bg-primary/40 px-2 py-0.5 rounded-sm",children:f(s.price)})]})}),s.items.map(x=>e.jsx(Ce,{onToggleDialog:i,isOpenDialog:r,item:x,children:e.jsx(P,{className:"cursor-pointer hover:bg-primary/10",children:e.jsx(Se,{isSelectAll:o,onCloseDialog:d,item:x})})},x.productId))]},p))})]}),e.jsx(Y,{orientation:"horizontal"})]})})},ze=()=>e.jsx("div",{children:e.jsx(Ee,{})});export{ze as default};