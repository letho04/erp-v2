import{d as c,j as e,e as w,O as q,ax as I,ay as F,_ as N,$ as k,az as G,Y as T,Q as L,at as Q,a3 as Y,a5 as J,I as P,B as C,p as j,aA as f}from"./index-Dc4BxnIy.js";import{a as E,b as X,c as Z,d as O,e as ee}from"./index-BB8Zq0sm.js";import{e as t,T as ne,a as te,b as v,c as a,d as ae}from"./table-B8J2FaDN.js";import"./card-Bb5wxJG7.js";import"./label-CXyDt0FI.js";import{a as re,b as se,c as ce,d as oe,e as ie,D as de}from"./dialog-DOMqxQSS.js";import{C as U}from"./checkbox-CLgSgKHa.js";import"./index-BEk9yI-S.js";import"./index-Cc8lrFQe.js";const H=c.forwardRef(({className:r,children:n,...s},o)=>e.jsxs(E,{ref:o,className:w("relative overflow-hidden",r),...s,children:[e.jsx(X,{className:"h-full w-full rounded-[inherit]",children:n}),e.jsx(A,{}),e.jsx(Z,{})]}));H.displayName=E.displayName;const A=c.forwardRef(({className:r,orientation:n="vertical",...s},o)=>e.jsx(O,{ref:o,orientation:n,className:w("flex touch-none select-none transition-colors",n==="vertical"&&"h-full w-2.5 border-l border-l-transparent p-[1px]",n==="horizontal"&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",r),...s,children:e.jsx(ee,{className:"relative flex-1 rounded-full bg-border"})}));A.displayName=O.displayName;const K="Tabs",[ue,Oe]=q(K,[I]),M=I(),[le,S]=ue(K),pe=c.forwardRef((r,n)=>{const{__scopeTabs:s,value:o,onValueChange:d,defaultValue:l,orientation:i="horizontal",dir:p,activationMode:x="automatic",...b}=r,m=Q(p),[h,u]=Y({prop:o,onChange:d,defaultProp:l});return c.createElement(le,{scope:s,baseId:J(),value:h,onValueChange:u,orientation:i,dir:m,activationMode:x},c.createElement(k.div,N({dir:m,"data-orientation":i},b,{ref:n})))}),me="TabsList",he=c.forwardRef((r,n)=>{const{__scopeTabs:s,loop:o=!0,...d}=r,l=S(me,s),i=M(s);return c.createElement(F,N({asChild:!0},i,{orientation:l.orientation,dir:l.dir,loop:o}),c.createElement(k.div,N({role:"tablist","aria-orientation":l.orientation},d,{ref:n})))}),xe="TabsTrigger",ge=c.forwardRef((r,n)=>{const{__scopeTabs:s,value:o,disabled:d=!1,...l}=r,i=S(xe,s),p=M(s),x=V(i.baseId,o),b=R(i.baseId,o),m=o===i.value;return c.createElement(G,N({asChild:!0},p,{focusable:!d,active:m}),c.createElement(k.button,N({type:"button",role:"tab","aria-selected":m,"aria-controls":b,"data-state":m?"active":"inactive","data-disabled":d?"":void 0,disabled:d,id:x},l,{ref:n,onMouseDown:T(r.onMouseDown,h=>{!d&&h.button===0&&h.ctrlKey===!1?i.onValueChange(o):h.preventDefault()}),onKeyDown:T(r.onKeyDown,h=>{[" ","Enter"].includes(h.key)&&i.onValueChange(o)}),onFocus:T(r.onFocus,()=>{const h=i.activationMode!=="manual";!m&&!d&&h&&i.onValueChange(o)})})))}),fe="TabsContent",be=c.forwardRef((r,n)=>{const{__scopeTabs:s,value:o,forceMount:d,children:l,...i}=r,p=S(fe,s),x=V(p.baseId,o),b=R(p.baseId,o),m=o===p.value,h=c.useRef(m);return c.useEffect(()=>{const u=requestAnimationFrame(()=>h.current=!1);return()=>cancelAnimationFrame(u)},[]),c.createElement(L,{present:d||m},({present:u})=>c.createElement(k.div,N({"data-state":m?"active":"inactive","data-orientation":p.orientation,role:"tabpanel","aria-labelledby":x,hidden:!u,id:b,tabIndex:0},i,{ref:n,style:{...r.style,animationDuration:h.current?"0s":void 0}}),u&&l))});function V(r,n){return`${r}-trigger-${n}`}function R(r,n){return`${r}-content-${n}`}const Ne=pe,_=he,B=ge,W=be,je=Ne,z=c.forwardRef(({className:r,...n},s)=>e.jsx(_,{ref:s,className:w("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",r),...n}));z.displayName=_.displayName;const D=c.forwardRef(({className:r,...n},s)=>e.jsx(B,{ref:s,className:w("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary/80 data-[state=active]:text-foreground data-[state=active]:shadow-sm",r),...n}));D.displayName=B.displayName;const y=c.forwardRef(({className:r,...n},s)=>e.jsx(W,{ref:s,className:w("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",r),...n}));y.displayName=W.displayName;function we({isOpenDialog:r,children:n,item:s,onToggleDialog:o}){const[d,l]=c.useState(!1),i=()=>{l(u=>!u)},p=["created_at","updated_at"],x=Object.entries(s),b=["dd","DNNumber","whComment","iv","ivDate","totalAmount","paidAmount","pendingAmount"],m=["productId","status","rDate","customer","entity","sales","poDate","prNumber","name","purchaseItem","brand","quantity","unit","unitPrice","amount","refSupplier","refPrice","rtd","payment","remark","purchaser"],h=Object.keys(s).filter(u=>!m.includes(u)&&!b.includes(u));return e.jsxs(re,{onOpenChange:o,open:r,children:[e.jsx(se,{asChild:!0,children:n}),e.jsxs(ce,{className:"max-w-[40vw]",children:[e.jsx(oe,{children:e.jsxs("div",{className:"flex flex-col gap-4 items-start",children:[e.jsx(ie,{className:"text-xl",children:s.productId}),e.jsxs(je,{defaultValue:"GENERAL",className:"w-full",children:[e.jsxs(z,{className:"grid w-full grid-cols-3",children:[e.jsx(D,{value:"GENERAL",children:"GENERAL"}),e.jsx(D,{value:"Commission",children:"Commission"}),e.jsx(D,{value:"INVOICE",children:"INVOICE"})]}),e.jsx(y,{value:"GENERAL",children:e.jsx("div",{className:"h-[500px] overflow-y-auto border-input px-6 py-4 rounded-md space-y-4",children:x.map(([u,g])=>{if(m.includes(u))return e.jsxs($,{children:[e.jsx("p",{className:"capitalize text-muted-foreground min-w-[130px] max-w-[180px] flex items-center",children:u}),d?p.includes(u)?e.jsx("p",{children:g}):e.jsx(P,{value:g}):e.jsx("p",{children:g})]})})})}),e.jsx(y,{value:"Commission",children:e.jsx("div",{className:"h-[500px] overflow-y-auto border-input px-6 py-4 rounded-md space-y-4",children:x.map(([u,g])=>{if(h.includes(u))return e.jsxs($,{children:[e.jsx("p",{className:"capitalize text-muted-foreground min-w-[130px] max-w-[180px] flex items-center",children:u}),d?p.includes(u)?e.jsx("p",{children:g}):e.jsx(P,{value:g}):e.jsx("p",{children:g})]})})})}),e.jsx(y,{value:"INVOICE",children:e.jsx("div",{className:"h-[500px] overflow-y-auto border-input px-6 py-4 rounded-md space-y-4",children:x.map(([u,g])=>{if(b.includes(u))return e.jsxs($,{children:[e.jsx("p",{className:"capitalize text-muted-foreground min-w-[130px] max-w-[180px] flex items-center",children:u}),d?p.includes(u)?e.jsx("p",{children:g}):e.jsx(P,{value:g}):e.jsx("p",{children:g})]})})})})]})]})}),e.jsx(de,{children:e.jsxs("div",{className:"flex gap-2 items-center",children:[d&&e.jsx(C,{variant:"outline",onClick:i,children:"Cancel"}),e.jsx(C,{onClick:i,children:d?"Save":"Edit"})]})})]})]})}function $({children:r}){return e.jsx("div",{className:"flex gap-4",children:r})}const De=c.memo(({isSelectAll:r,item:n})=>{const[s,o]=c.useState(r);return c.useEffect(()=>{r||o(!1)},[r]),e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:d=>{d.stopPropagation()},className:"p-0 sticky left-0 shadow-lg text-xs bg-white z-30",children:e.jsxs("div",{className:"p-3 flex gap-2",onClick:d=>{o(l=>!l),d.stopPropagation()},children:[e.jsx(U,{checked:r||s}),e.jsxs("p",{children:[" ",n.productId," "]})]})}),e.jsx(t,{className:"font-bold",style:{color:"#037BE4"},children:n.status}),e.jsx(t,{children:n.rDate&&j(new Date(n.rDate))}),e.jsx(t,{className:"font-bold whitespace-nowrap",children:n.customer}),e.jsx(t,{className:"text-primary font-semibold",children:n.entity}),e.jsx(t,{children:n.sales}),e.jsx(t,{children:n.poDate&&j(new Date(n.poDate))}),e.jsx(t,{children:n.prNumber}),e.jsx(t,{className:"min-w-[125px] max-w-[180px] whitespace-nowrap overflow-hidden text-ellipsis",children:n.name}),e.jsx(t,{className:"min-w-[125px] max-w-[180px] whitespace-nowrap overflow-hidden text-ellipsis",children:n.purchaseItem}),e.jsx(t,{className:"min-w-[80px] max-w-[130px] text-ellipsis whitespace-nowrap",children:n.brand}),e.jsx(t,{className:"text-right",children:n.quantity}),e.jsx(t,{children:n.unit}),e.jsx(t,{className:"text-right",children:f(n.unitPrice)}),e.jsx(t,{className:"text-right",children:f(n.amount)}),e.jsx(t,{children:n.refSupplier}),e.jsx(t,{className:"text-right",children:f(n.refPrice)}),e.jsx(t,{children:n.rtd}),e.jsx(t,{className:"min-w-[125px] whitespace-nowrap",children:n.payment}),e.jsx(t,{children:n.remark}),e.jsx(t,{children:n.purchaser}),e.jsx(t,{className:"text-right",children:n.purchasePercentage?`${n.purchasePercentage}%`:null}),e.jsx(t,{className:"text-right",children:n.purchaseD?`${n.purchaseD}%`:null}),e.jsx(t,{className:"text-right",children:n.kentekPur?`${n.kentekPur}%`:null}),e.jsx(t,{className:"text-right",children:n.purAmount?n.purAmount:0}),e.jsx(t,{children:n.purDate}),e.jsx(t,{children:n.endUser}),e.jsx(t,{className:"text-right",children:n.euPercentage?`${n.euPercentage}%`:null}),e.jsx(t,{className:"text-right",children:n.userD?`${n.userD}%`:null}),e.jsx(t,{className:"text-right",children:n.kentekUser?`${n.kentekUser}%`:null}),e.jsx(t,{className:"text-right",children:n.purAmount?n.purAmount:0}),e.jsx(t,{children:j(new Date(n.euDate||new Date))}),e.jsx(t,{className:"whitespace-nowrap",children:n.opp}),e.jsx(t,{className:"text-right",children:n.opMoneyKe&&f(n.opMoneyKe)}),e.jsx(t,{className:"text-right",children:n.kentekOPP?`${n.kentekOPP}%`:null}),e.jsx(t,{className:"text-right",children:n.opAmount?f(n.opAmount):0}),e.jsx(t,{children:n.opDate}),e.jsx(t,{children:n.c4Name}),e.jsx(t,{className:"text-right",children:n.c4Percentage?`${n.c4Percentage}%`:null}),e.jsx(t,{className:"text-right",children:n.c4Amount?n.c4Amount:0}),e.jsx(t,{children:n.c4Date}),e.jsx(t,{children:n.c5Percentage}),e.jsx(t,{children:n.c5Name}),e.jsx(t,{children:n.c5Amount}),e.jsx(t,{children:n.c5Date}),e.jsx(t,{className:"text-right",children:n.DNNumber}),e.jsx(t,{className:"text-right",children:n.dd&&j(new Date(n.dd))}),e.jsx(t,{children:n.whComment}),e.jsx(t,{children:n.iv}),e.jsx(t,{children:n.ivDate&&j(new Date(n.ivDate))}),e.jsx(t,{className:"text-right",children:n.totalAmount&&f(n.totalAmount)}),e.jsx(t,{className:"text-right",children:n.paidAmount&&f(n.paidAmount)}),e.jsx(t,{className:"text-right",children:n.pendingAmount&&f(n.pendingAmount)})]})}),ye=[{id:"NAT3E25BB42",price:5236685,items:[{productId:"NAT623055",status:"Order",rDate:new Date().toISOString(),customer:"Trung Nguyên ",entity:"Torasung",sales:"Thuận",poDate:new Date().toISOString(),prNumber:"Kho 3",name:"Đèn led cổ ngỗng chân kẹp 3W ánh sáng vàng ( bao gồm dock sạc ) tiêu chuẩn CE -UV lamp for testing European Conformity  10028184",purchaseItem:"Đèn led cổ ngỗng chân kẹp 3W ánh sáng vàng ( bao gồm dock sạc ) tiêu chuẩn CE -UV lamp for testing European Conformity  10028184",brand:"Hangzhou Mear",quantity:10,unit:"Bộ",unitPrice:35e4,amount:35e4,refSupplier:"Khải Đông",refPrice:125e3,rtd:"3/22/2024",payment:"TT within 10 days",remark:"Có sẵn",purchaser:"Thúy Huỳnh",purchasePercentage:5,purchaseD:"",kentekPur:"",purAmount:0,dd:"1/25/2024",DNNumber:"2402160215",purDate:"4/7/2024",endUser:"Hiếu TN",euPercentage:5,userD:0,kentekUser:"",iv:56,ivDate:"1/25/2024",euAmount:0,euDate:new Date().toISOString(),opp:"Nguyễn Thành Hiệp",opMoneyKe:55e4,kentekOPP:15,opAmount:935e3,totalAmount:35e5,paidAmount:35e5,pendingAmount:0},{productId:"NAT6232133055",status:"Order",rDate:new Date().toISOString(),customer:"Trung Nguyên ",entity:"Torasung",sales:"Thuận",poDate:new Date().toISOString(),prNumber:"Kho 3",name:"Đèn led cổ ngỗng chân kẹp 3W ánh sáng vàng ( bao gồm dock sạc ) tiêu chuẩn CE -UV lamp for testing European Conformity  10028184",purchaseItem:"Đèn led cổ ngỗng chân kẹp 3W ánh sáng vàng ( bao gồm dock sạc ) tiêu chuẩn CE -UV lamp for testing European Conformity  10028184",brand:"Hangzhou Mear",quantity:10,unit:"Bộ",unitPrice:35e4,amount:35e4,refSupplier:"Khải Đông",refPrice:125e3,rtd:"3/22/2024",payment:"TT within 10 days",remark:"",purchaser:"Thúy Huỳnh",purchasePercentage:5,purchaseD:"",kentekPur:"",purAmount:0,dd:"1/25/2024",DNNumber:"2402160215",purDate:"4/7/2024",endUser:"Hiếu TN",euPercentage:5,userD:0,kentekUser:"",iv:56,ivDate:"1/25/2024",euAmount:0,euDate:new Date().toISOString(),opp:"Nguyễn Thành Hiệp",opMoneyKe:55e4,kentekOPP:15,opAmount:935e3,totalAmount:35e5,paidAmount:35e5,pendingAmount:0},{productId:"NAT622305235",status:"Order",rDate:new Date().toISOString(),customer:"Trung Nguyên ",entity:"Torasung",sales:"Thuận",poDate:new Date().toISOString(),prNumber:"Kho 3",name:"Đèn led cổ ngỗng chân kẹp 3W ánh sáng vàng ( bao gồm dock sạc ) tiêu chuẩn CE -UV lamp for testing European Conformity  10028184",purchaseItem:"Đèn led cổ ngỗng chân kẹp 3W ánh sáng vàng ( bao gồm dock sạc ) tiêu chuẩn CE -UV lamp for testing European Conformity  10028184",brand:"Hangzhou Mear",quantity:10,unit:"Bộ",unitPrice:35e4,amount:35e4,refSupplier:"Khải Đông",refPrice:125e3,rtd:"3/22/2024",payment:"TT within 10 days",remark:"",purchaser:"Thúy Huỳnh",purchasePercentage:5,purchaseD:"",kentekPur:"",purAmount:0,dd:"1/25/2024",DNNumber:"2402160215",purDate:"4/7/2024",endUser:"Hiếu TN",euPercentage:5,userD:0,kentekUser:"",iv:56,ivDate:"1/25/2024",euAmount:0,euDate:new Date().toISOString(),opp:"Nguyễn Thành Hiệp",opMoneyKe:55e4,kentekOPP:15,opAmount:935e3,totalAmount:35e5,paidAmount:35e5,pendingAmount:0}]},{id:"NAT3E25BB42",price:1236685,items:[{productId:"NAT623055",status:"Order",rDate:new Date().toISOString(),customer:"Trung Nguyên ",entity:"Torasung",sales:"Thuận",poDate:new Date().toISOString(),prNumber:"Kho 3",name:"Đèn led cổ ngỗng chân kẹp 3W ánh sáng vàng ( bao gồm dock sạc ) tiêu chuẩn CE -UV lamp for testing European Conformity  10028184",purchaseItem:"Đèn led cổ ngỗng chân kẹp 3W ánh sáng vàng ( bao gồm dock sạc ) tiêu chuẩn CE -UV lamp for testing European Conformity  10028184",brand:"Hangzhou Mear",quantity:10,unit:"Bộ",unitPrice:35e4,amount:35e4,refSupplier:"Khải Đông",refPrice:125e3,rtd:"3/22/2024",payment:"TT within 10 days",remark:"",purchaser:"Thúy Huỳnh",purchasePercentage:5,purchaseD:"",kentekPur:"",purAmount:0,dd:"1/25/2024",DNNumber:"2402160215",purDate:"4/7/2024",endUser:"Hiếu TN",euPercentage:5,userD:0,kentekUser:"",iv:56,ivDate:"1/25/2024",euAmount:0,euDate:new Date().toISOString(),opp:"Nguyễn Thành Hiệp",opMoneyKe:55e4,kentekOPP:15,opAmount:935e3,totalAmount:35e5,paidAmount:35e5,pendingAmount:0},{productId:"NAT6232133055",status:"Order",rDate:new Date().toISOString(),customer:"Trung Nguyên ",entity:"Torasung",sales:"Thuận",poDate:new Date().toISOString(),prNumber:"Kho 3",name:"Đèn led cổ ngỗng chân kẹp 3W ánh sáng vàng ( bao gồm dock sạc ) tiêu chuẩn CE -UV lamp for testing European Conformity  10028184",purchaseItem:"Đèn led cổ ngỗng chân kẹp 3W ánh sáng vàng ( bao gồm dock sạc ) tiêu chuẩn CE -UV lamp for testing European Conformity  10028184",brand:"Hangzhou Mear",quantity:10,unit:"Bộ",unitPrice:35e4,amount:35e4,refSupplier:"Khải Đông",refPrice:125e3,rtd:"3/22/2024",payment:"TT within 10 days",remark:"",purchaser:"Thúy Huỳnh",purchasePercentage:5,purchaseD:"",kentekPur:"",purAmount:0,dd:"1/25/2024",DNNumber:"2402160215",purDate:"4/7/2024",endUser:"Hiếu TN",euPercentage:5,userD:0,kentekUser:"",iv:56,ivDate:"1/25/2024",euAmount:0,euDate:new Date().toISOString(),opp:"Nguyễn Thành Hiệp",opMoneyKe:55e4,kentekOPP:15,opAmount:935e3,totalAmount:35e5,paidAmount:35e5,pendingAmount:0},{productId:"NAT622305235",status:"Order",rDate:new Date().toISOString(),customer:"Trung Nguyên ",entity:"Torasung",sales:"Thuận",poDate:new Date().toISOString(),prNumber:"Kho 3",name:"Đèn led cổ ngỗng chân kẹp 3W ánh sáng vàng ( bao gồm dock sạc ) tiêu chuẩn CE -UV lamp for testing European Conformity  10028184",purchaseItem:"Đèn led cổ ngỗng chân kẹp 3W ánh sáng vàng ( bao gồm dock sạc ) tiêu chuẩn CE -UV lamp for testing European Conformity  10028184",brand:"Hangzhou Mear",quantity:10,unit:"Bộ",unitPrice:35e4,amount:35e4,refSupplier:"Khải Đông",refPrice:125e3,rtd:"3/22/2024",payment:"TT within 10 days",remark:"",purchaser:"Thúy Huỳnh",purchasePercentage:5,purchaseD:"",kentekPur:"",purAmount:0,dd:"1/25/2024",DNNumber:"2402160215",purDate:"4/7/2024",endUser:"Hiếu TN",euPercentage:5,userD:0,kentekUser:"",iv:56,ivDate:"1/25/2024",euAmount:0,euDate:new Date().toISOString(),opp:"Nguyễn Thành Hiệp",opMoneyKe:55e4,kentekOPP:15,opAmount:935e3,totalAmount:35e5,paidAmount:35e5,pendingAmount:0}]},{id:"NAT3E25BB47",price:31236685,items:[{productId:"NAT623055",status:"Order",rDate:new Date().toISOString(),customer:"Trung Nguyên ",entity:"Torasung",sales:"Thuận",poDate:new Date().toISOString(),prNumber:"Kho 3",name:"Đèn led cổ ngỗng chân kẹp 3W ánh sáng vàng ( bao gồm dock sạc ) tiêu chuẩn CE -UV lamp for testing European Conformity  10028184",purchaseItem:"Đèn led cổ ngỗng chân kẹp 3W ánh sáng vàng ( bao gồm dock sạc ) tiêu chuẩn CE -UV lamp for testing European Conformity  10028184",brand:"Hangzhou Mear",quantity:10,unit:"Bộ",unitPrice:35e4,amount:35e4,refSupplier:"Khải Đông",refPrice:125e3,rtd:"3/22/2024",payment:"TT within 10 days",remark:"",purchaser:"Thúy Huỳnh",purchasePercentage:5,purchaseD:"",kentekPur:"",purAmount:0,dd:"1/25/2024",DNNumber:"2402160215",purDate:"4/7/2024",endUser:"Hiếu TN",euPercentage:5,userD:0,kentekUser:"",iv:56,ivDate:"1/25/2024",euAmount:0,euDate:new Date().toISOString(),opp:"Nguyễn Thành Hiệp",opMoneyKe:55e4,kentekOPP:15,opAmount:935e3,totalAmount:35e5,paidAmount:35e5,pendingAmount:0},{productId:"NAT6232133055",status:"Order",rDate:new Date().toISOString(),customer:"Trung Nguyên ",entity:"Torasung",sales:"Thuận",poDate:new Date().toISOString(),prNumber:"Kho 3",name:"Đèn led cổ ngỗng chân kẹp 3W ánh sáng vàng ( bao gồm dock sạc ) tiêu chuẩn CE -UV lamp for testing European Conformity  10028184",purchaseItem:"Đèn led cổ ngỗng chân kẹp 3W ánh sáng vàng ( bao gồm dock sạc ) tiêu chuẩn CE -UV lamp for testing European Conformity  10028184",brand:"Hangzhou Mear",quantity:10,unit:"Bộ",unitPrice:35e4,amount:35e4,refSupplier:"Khải Đông",refPrice:125e3,rtd:"3/22/2024",payment:"TT within 10 days",remark:"",purchaser:"Thúy Huỳnh",purchasePercentage:5,purchaseD:"",kentekPur:"",purAmount:0,dd:"1/25/2024",DNNumber:"2402160215",purDate:"4/7/2024",endUser:"Hiếu TN",euPercentage:5,userD:0,kentekUser:"",iv:56,ivDate:"1/25/2024",euAmount:0,euDate:new Date().toISOString(),opp:"Nguyễn Thành Hiệp",opMoneyKe:55e4,kentekOPP:15,opAmount:935e3,totalAmount:35e5,paidAmount:35e5,pendingAmount:0},{productId:"NAT622305235",status:"Order",rDate:new Date().toISOString(),customer:"Trung Nguyên ",entity:"Torasung",sales:"Thuận",poDate:new Date().toISOString(),prNumber:"Kho 3",name:"Đèn led cổ ngỗng chân kẹp 3W ánh sáng vàng ( bao gồm dock sạc ) tiêu chuẩn CE -UV lamp for testing European Conformity  10028184",purchaseItem:"Đèn led cổ ngỗng chân kẹp 3W ánh sáng vàng ( bao gồm dock sạc ) tiêu chuẩn CE -UV lamp for testing European Conformity  10028184",brand:"Hangzhou Mear",quantity:10,unit:"Bộ",unitPrice:35e4,amount:35e4,refSupplier:"Khải Đông",refPrice:125e3,rtd:"3/22/2024",payment:"TT within 10 days",remark:"",purchaser:"Thúy Huỳnh",purchasePercentage:5,purchaseD:"",kentekPur:"",purAmount:0,dd:"1/25/2024",DNNumber:"2402160215",purDate:"4/7/2024",endUser:"Hiếu TN",euPercentage:5,userD:0,kentekUser:"",iv:56,ivDate:"1/25/2024",euAmount:0,euDate:new Date().toISOString(),opp:"Nguyễn Thành Hiệp",opMoneyKe:55e4,kentekOPP:15,opAmount:935e3,totalAmount:35e5,paidAmount:35e5,pendingAmount:0}]}],ke=()=>{const[r,n]=c.useState(!1),[s,o]=c.useState(!1),d=i=>n(i);console.log("----"),console.log(r);const l=c.useCallback(()=>{n(!1)},[]);return e.jsx("div",{className:"h-[75vh]",children:e.jsxs(H,{className:"h-full w-full rounded-md border",children:[e.jsxs(ne,{className:"relative",children:[e.jsx(te,{className:"sticky top-0 z-40",children:e.jsxs(v,{children:[e.jsx(a,{className:"w-[80px]",children:e.jsxs("div",{className:"flex gap-3 items-center",children:[e.jsx(U,{onClick:()=>o(i=>!i)}),"ID PO"]})}),e.jsx(a,{className:"min-w-[125px] text-start",children:"PO Status"}),e.jsx(a,{className:"min-w-[120px]",children:"R Date"}),e.jsx(a,{className:"min-w-[125px] max-w-[250px]",children:"Customer"}),e.jsx(a,{className:"min-w-[90px]",children:"Entity"}),e.jsx(a,{className:"min-w-[90px]",children:"Sales"}),e.jsx(a,{className:"min-w-[125px]",children:"PO Date"}),e.jsx(a,{className:"min-w-[125px]",children:"PR No."}),e.jsx(a,{className:"min-w-[125px] max-w-[180px]",children:"Name"}),e.jsx(a,{className:"min-w-[140px] text-start",children:"Purchase Item"}),e.jsx(a,{className:"min-w-[100px]",children:"Brand"}),e.jsx(a,{className:"min-w-[80px] max-w-[130px]",children:"Quantity"}),e.jsx(a,{className:"min-w-[80px]",children:"Unit"}),e.jsx(a,{className:"min-w-[110px] text-end",children:"Unit Price"}),e.jsx(a,{className:"min-w-[105px] text-end",children:"Amount"}),e.jsx(a,{className:"min-w-[125px]",children:"Ref Supplier"}),e.jsx(a,{className:"min-w-[110px] text-end",children:"Ref Price"}),e.jsx(a,{className:"min-w-[115px] text-start",children:"RTD"}),e.jsx(a,{className:"min-w-[125px] text-start",children:"Payment"}),e.jsx(a,{className:"min-w-[115px] text-start",children:"Remark"}),e.jsx(a,{className:"min-w-[115px] text-start",children:"Purchaser"}),e.jsx(a,{className:"min-w-[90px] text-end",children:"Pur %"}),e.jsx(a,{className:"min-w-[90px] text-end",children:"Pur (đ)"}),e.jsx(a,{className:"min-w-[140px] text-end",children:"% Kentek (Pur)"}),e.jsx(a,{className:"min-w-[125px] text-end",children:"% Pur Amount"}),e.jsx(a,{className:"min-w-[140px] text-start",children:"% Pur Date"}),e.jsx(a,{className:"min-w-[140px] text-start",children:"% End User"}),e.jsx(a,{className:"min-w-[90px] text-end",children:"EU %"}),e.jsx(a,{className:"min-w-[125px] text-end",children:"User (đ)"}),e.jsx(a,{className:"min-w-[140px] text-end",children:"% Kentek (User)"}),e.jsx(a,{className:"min-w-[110px] text-end",children:"EU Amount"}),e.jsx(a,{className:"min-w-[110px] text-start",children:"EU Date"}),e.jsx(a,{className:"min-w-[110px] text-end",children:"OPP"}),e.jsx(a,{className:"min-w-[110px] text-end",children:"OPP (Tiền Kê)"}),e.jsx(a,{className:"min-w-[140px] text-end",children:"% Kentek (OPP)"}),e.jsx(a,{className:"min-w-[110px] text-end",children:"OP Amount"}),e.jsx(a,{className:"min-w-[110px] text-end",children:" OP Date"}),e.jsx(a,{className:"min-w-[110px] text-start",children:"C4 Name"}),e.jsx(a,{className:"min-w-[80px] text-end",children:"C4 %"}),e.jsx(a,{className:"min-w-[110px] text-end",children:"C4 Amt"}),e.jsx(a,{className:"min-w-[110px] text-start",children:"C4 Date"}),e.jsx(a,{className:"min-w-[110px] text-start",children:"C5 Name"}),e.jsx(a,{className:"min-w-[80px] text-end",children:"C5 %"}),e.jsx(a,{className:"min-w-[80px] text-end",children:"C5 Amt"}),e.jsx(a,{className:"min-w-[110px] text-start",children:"C5 Date"}),e.jsx(a,{className:"min-w-[110px] text-start",children:"DD No"}),e.jsx(a,{className:"min-w-[110px] text-start",children:"DD"}),e.jsx(a,{className:"min-w-[80px] text-start",children:"WH Comment"}),e.jsx(a,{className:"min-w-[110px] text-start",children:"IV #"}),e.jsx(a,{className:"min-w-[110px] text-start",children:"IV Date"}),e.jsx(a,{className:"min-w-[110px] text-end",children:"Total Amount"}),e.jsx(a,{className:"min-w-[110px] text-end",children:"Paid Amount"}),e.jsx(a,{className:"min-w-[140px] text-end",children:"Pending Amount"})]})}),e.jsx(ae,{children:ye.map((i,p)=>e.jsxs(c.Fragment,{children:[e.jsx(v,{children:e.jsxs(t,{className:"flex gap-2 items-center shadow sticky left-0 text-xs",children:[e.jsxs("div",{children:[i.id," "]}),e.jsx("p",{className:"absolute left-full bg-primary/40 px-2 py-0.5 rounded-sm",children:f(i.price)})]})}),i.items.map(x=>e.jsx(we,{onToggleDialog:d,isOpenDialog:r,item:x,children:e.jsx(v,{className:"cursor-pointer hover:bg-primary/10",children:e.jsx(De,{isSelectAll:s,onCloseDialog:l,item:x})})},x.productId))]},p))})]}),e.jsx(A,{orientation:"horizontal"})]})})},Ue=()=>e.jsx("div",{children:e.jsx(ke,{})});export{Ue as default};
