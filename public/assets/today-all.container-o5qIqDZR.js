import{j as a,B as c,o as C,d as m,p as f,q as K,I as V,D as S,w as T,x as M,aC as P,v as s}from"./index-d4I24Wdq.js";import{b as z,C as u}from"./react-icons.esm-Bd6cTe6O.js";import{u as I,f as y,g as R,a as k,b as B,c as H}from"./index-DALMm1FB.js";import{C as N}from"./checkbox-OkVmCrCw.js";import{A as Y,a as F,b as E,c as O,d as U,e as q,f as J,g as W,h as $,T as G,i as L,j as p,k as _,l as Q,m as w}from"./alert-dialog-BBpFyU-A.js";import{$ as X}from"./index-Bm9C1xV3.js";import{a as Z}from"./scroll-area-D3EONRMo.js";import{a as ee,b as ae,c as te,d as se,e as le,D as re}from"./dialog-Dn6dUN5W.js";import"./index-BMGJW41-.js";import"./index-BEk9yI-S.js";const ie=({id:e})=>(console.log(e),a.jsxs(Y,{children:[a.jsx(F,{asChild:!0,children:a.jsx(c,{variant:"destructive",children:"Delete"})}),a.jsxs(E,{children:[a.jsxs(O,{children:[a.jsx(U,{children:"Are you absolutely sure want to delete"}),a.jsx(q,{children:"This action cannot be undone. This will permanently your product"})]}),a.jsxs(J,{children:[a.jsx(W,{children:"Cancel"}),a.jsx($,{className:C({variant:"destructive"}),children:"Continue"})]})]})]}));function ce({children:e,today:r}){const[o,x]=m.useState(!1),h=()=>{x(i=>!i)},g=Object.entries(r);return a.jsxs(ee,{children:[a.jsx(ae,{asChild:!0,children:e}),a.jsxs(te,{className:"max-w-[40vw]",children:[a.jsx(se,{children:a.jsx(le,{className:"text-xl",children:r.name})}),a.jsx("div",{className:"h-[500px] overflow-y-auto border-input px-6 py-4 rounded-md space-y-4",children:g.map(([i,n])=>{if(i!=="id")return i==="created_at"||i==="updated_at"?a.jsxs(A,{children:[a.jsx("p",{className:"text-muted-foreground min-w-[130px] max-w-[180px] flex items-center capitalize",children:i}),a.jsxs("p",{children:[f(new Date(n))," ",K(new Date(n))]})]}):a.jsxs(A,{children:[a.jsx("p",{className:"text-muted-foreground min-w-[130px] max-w-[180px] flex items-center capitalize",children:i}),o?i!=="total"?a.jsx(V,{defaultValue:n}):a.jsx("p",{children:n}):a.jsx("p",{children:n})]})})}),a.jsx(re,{children:a.jsxs("div",{className:"flex gap-2 items-center",children:[o&&a.jsx(c,{variant:"outline",onClick:h,children:"Cancel"}),!o&&a.jsx(ie,{id:r.id}),a.jsx(c,{onClick:h,children:o?"Save":"Edit"})]})})]})]})}function A({children:e}){return a.jsx("div",{className:"flex",children:e})}const ne=[{id:"TTPC7983834",status:"order",rDate:"2/21/2024",customer:"ANES",entity:"Torasung",sales:"Nunez",poDate:"2/20/2024",poNumber:"P11435",prNumber:"Kho 3",name:"Battery mass switch, JK861, CHINA",purchaseItem:"JK861",brand:"China",quantity:15,unit:"Cái",unitPrice:3105e3,amount:3105e3,refSupplier:"import",refPrice:238e3,rtd:"5/12/2024",payment:"TT within 30 days",remark:"6-8 Weeks",purchaser:"Trần Minh Tuấn",endUser:"Darwin Nunez",dd:"",ddNumber:"24040122210",whComment:"",iv:"56",ivDate:"",vat:10,totalAmount:341500,paidAmount:3415e3,paidDate:"",pendingAmount:0,note:"Liverpool will be the champion next year",createdTime:"2/20/2024",history:"TTP-ORder",buyDetails:"Buy Detail (1)",product:"",count:"",bmAdmin:"",bmAcc:"",bmSales:"",approve:"",grossAmountMonth:27945e3,grossAmountYear:27945e3,opAmount:0,salesAmountMonth:27945e3,salesAmountYear:27945e3,profit:147e3,markup:414.3,salesMonth:0,saleSituation:0,ivMonth:0,ivYear:0,wareHouseDetail:"Darwin Nunez",buyAmount:0,cogsAmount:0},{id:"TTPC7983834",status:"order",rDate:"2/21/2024",customer:"CMIT",entity:"Torasung",sales:"Phương",poDate:"2/20/2024",poNumber:"P11435",prNumber:"Kho 3",name:"Battery mass switch, JK861, CHINA",purchaseItem:"JK861",brand:"China",quantity:1,unit:"Cái",unitPrice:3105e3,amount:3105e3,refSupplier:"import",refPrice:238e3,rtd:"5/12/2024",payment:"TT within 30 days",remark:"6-8 Weeks",purchaser:"Trần Minh Tuấn",endUser:"Darwin Nunez",dd:"",ddNumber:"24040122210",whComment:"",iv:"56",ivDate:"",vat:10,totalAmount:341500,paidAmount:3415e3,paidDate:"",pendingAmount:0,note:"Liverpool will be the champion next year",createdTime:"2/20/2024",history:"TTP-ORder",buyDetails:"Buy Detail (1)",product:"",count:"",bmAdmin:"",bmAcc:"",bmSales:"",approve:"",grossAmountMonth:27945e3,grossAmountYear:27945e3,opAmount:0,salesAmountMonth:27945e3,salesAmountYear:27945e3,profit:147e3,markup:414.3,salesMonth:0,saleSituation:0,ivMonth:0,ivYear:0,wareHouseDetail:"Darwin Nunez",buyAmount:0,cogsAmount:0}],D=[{id:"select",header:({table:e})=>a.jsx(N,{checked:e.getIsAllPageRowsSelected()||e.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:r=>e.toggleAllPageRowsSelected(!!r),"aria-label":"Select all"}),cell:({row:e})=>a.jsx(N,{checked:e.getIsSelected(),onCheckedChange:r=>e.toggleSelected(!!r),"aria-label":"Select row"}),enableSorting:!1,enableHiding:!1},{accessorKey:"id",header:"ID PO",cell:({row:e})=>a.jsx("div",{className:"uppercase",children:e.getValue("id")})},{accessorKey:"status",header:"PO Status",cell:({row:e})=>a.jsx("div",{className:"capitalize",children:e.getValue("status")})},{accessorKey:"rDate",header:"R Date",cell:({row:e})=>a.jsx("div",{className:"capitalize",children:e.getValue("rDate")})},{accessorKey:"customer",header:({column:e})=>a.jsxs(c,{variant:"ghost",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc"),children:["Customer",a.jsx(u,{className:"ml-2 h-4 w-4"})]}),cell:({row:e})=>a.jsx("div",{className:"font-bold text-center",children:e.getValue("customer")})},{accessorKey:"entity",header:"Entity",cell:({row:e})=>a.jsx("div",{className:"capitalize text-primary",children:e.getValue("entity")})},{accessorKey:"sales",header:({column:e})=>a.jsxs(c,{variant:"ghost",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc"),children:["Sales",a.jsx(u,{className:"ml-2 h-4 w-4"})]}),cell:({row:e})=>a.jsx("div",{className:"capitalize text-center",children:e.getValue("sales")})},{accessorKey:"poDate",header:"PO Date",cell:({row:e})=>a.jsx("div",{className:"capitalize",children:e.getValue("poDate")})},{accessorKey:"poNumber",header:"PO No.",cell:({row:e})=>a.jsx("div",{className:"capitalize text-right",children:e.getValue("poNumber")})},{accessorKey:"prNumber",header:()=>"PR No.",cell:({row:e})=>a.jsx("div",{className:"text-right",children:e.getValue("prNumber")})},{accessorKey:"name",header:()=>a.jsx("p",{className:"min-w-[200px] max-w-[250px]",children:"Name"}),cell:({row:e})=>a.jsx("div",{className:"capitalize whitespace-nowrap w-full max-w-[250px] overflow-hidden text-ellipsis",children:e.getValue("name")})},{accessorKey:"purchaseItem",header:()=>a.jsx("p",{className:"min-w-[200px] max-w-[250px]",children:"Purchase Item"}),cell:({row:e})=>a.jsx("div",{className:"capitalize whitespace-nowrap w-full max-w-[250px] overflow-hidden text-ellipsis",children:e.getValue("purchaseItem")})},{accessorKey:"brand",header:({column:e})=>a.jsxs(c,{variant:"ghost",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc"),children:["Brand",a.jsx(u,{className:"ml-2 h-4 w-4"})]}),cell:({row:e})=>a.jsx("div",{className:"capitalize text-center",children:e.getValue("brand")})},{accessorKey:"quantity",header:({column:e})=>a.jsxs(c,{variant:"ghost",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc"),children:["Quantity",a.jsx(u,{className:"ml-2 h-4 w-4"})]}),cell:({row:e})=>a.jsx("div",{className:"text-right",children:e.getValue("quantity")})},{accessorKey:"unit",header:"Unit",cell:({row:e})=>a.jsx("div",{className:"capitalize",children:e.getValue("unit")})},{accessorKey:"unitPrice",header:"Unit Price",cell:({row:e})=>a.jsx("div",{className:"text-right",children:s(+e.getValue("unitPrice"))})},{accessorKey:"amount",header:"Amount",cell:({row:e})=>a.jsx("div",{className:"text-right",children:s(+e.getValue("amount"))})},{accessorKey:"refSupplier",header:"Ref Supplier",cell:({row:e})=>a.jsx("div",{className:"capitalize",children:e.getValue("refSupplier")})},{accessorKey:"rtd",header:"RTD",cell:({row:e})=>a.jsx("div",{className:"capitalize",children:e.getValue("rtd")})},{accessorKey:"payment",header:"Payment",cell:({row:e})=>a.jsx("div",{className:"capitalize whitespace-nowrap",children:e.getValue("payment")})},{accessorKey:"remark",header:"Remark",cell:({row:e})=>a.jsx("div",{className:"capitalize whitespace-nowrap",children:e.getValue("remark")})},{accessorKey:"purchaser",header:"Purchaser",cell:({row:e})=>a.jsx("div",{className:"capitalize whitespace-nowrap",children:e.getValue("purchaser")})},{accessorKey:"endUser",header:"End User",cell:({row:e})=>a.jsx("div",{className:"capitalize whitespace-nowrap",children:e.getValue("endUser")})},{accessorKey:"dd",header:"DD",cell:({row:e})=>a.jsx("div",{className:"capitalize",children:e.getValue("dd")})},{accessorKey:"whComment",header:"WH Comment",cell:({row:e})=>a.jsx("div",{className:"capitalize",children:e.getValue("whComment")})},{accessorKey:"ddNumber",header:"DD No",cell:({row:e})=>a.jsx("div",{className:"capitalize",children:e.getValue("ddNumber")})},{accessorKey:"iv",header:"IV #",cell:({row:e})=>a.jsx("div",{className:"capitalize",children:e.getValue("iv")})},{accessorKey:"ivDate",header:"IV Date",cell:({row:e})=>a.jsx("div",{className:"capitalize",children:e.getValue("ivDate")})},{accessorKey:"vat",header:"VAT",cell:({row:e})=>{const r=e.getValue("vat");return a.jsxs("div",{className:"text-right",children:[r.toFixed(2),"%"]})}},{accessorKey:"totalAmount",header:"Total Amount",cell:({row:e})=>a.jsx("div",{className:"text-right",children:s(+e.getValue("totalAmount"))})},{accessorKey:"paidAmount",header:"Paid Amount",cell:({row:e})=>a.jsx("div",{className:"text-right",children:s(+e.getValue("paidAmount"))})},{accessorKey:"paidDate",header:"Paid Date",cell:({row:e})=>a.jsx("div",{className:"text-center",children:e.getValue("paidDate")})},{accessorKey:"pendingAmount",header:"Pending Amount",cell:({row:e})=>a.jsx("div",{className:"text-right",children:s(+e.getValue("pendingAmount"))})},{accessorKey:"note",header:"Note",cell:({row:e})=>a.jsx("div",{className:"text-right max-w-[300px] text-ellipsis overflow-hidden whitespace-nowrap",children:e.getValue("note")})},{accessorKey:"createdTime",header:"Created Time",cell:({row:e})=>a.jsx("div",{className:"text-center",children:e.getValue("createdTime")})},{accessorKey:"history",header:"History",cell:({row:e})=>a.jsx("div",{className:"text-start max-w-[250px] overflow-hidden text-ellipsis whitespace-nowrap",children:e.getValue("history")})},{accessorKey:"buyDetails",header:"Buy Detail",cell:({row:e})=>a.jsx("div",{className:"text-start whitespace-nowrap",children:e.getValue("buyDetails")})},{accessorKey:"product",header:"Product",cell:({row:e})=>a.jsx("div",{className:"text-start",children:e.getValue("product")})},{accessorKey:"count",header:"Count",cell:({row:e})=>a.jsx("div",{className:"text-right",children:e.getValue("count")})},{accessorKey:"bmSales",header:"BM Sales",cell:({row:e})=>a.jsx("div",{className:"text-start",children:e.getValue("bmSales")})},{accessorKey:"bmAdmin",header:"BM Admins",cell:({row:e})=>a.jsx("div",{className:"text-start",children:e.getValue("bmAdmin")})},{accessorKey:"bmAcc",header:"BM Acc",cell:({row:e})=>a.jsx("div",{className:"text-start",children:e.getValue("bmAcc")})},{accessorKey:"approve",header:"Approve",cell:({row:e})=>a.jsx("div",{className:"text-start",children:e.getValue("approve")})},{accessorKey:"grossAmountMonth",header:"Gross Amt M",cell:({row:e})=>a.jsx("div",{className:"text-right",children:s(+e.getValue("grossAmountMonth"))})},{accessorKey:"grossAmountYear",header:"Gross Amt Y",cell:({row:e})=>a.jsx("div",{className:"text-right",children:s(+e.getValue("grossAmountYear"))})},{accessorKey:"opAmount",header:"OP Amt",cell:({row:e})=>a.jsx("div",{className:"text-right",children:s(+e.getValue("opAmount"))})},{accessorKey:"salesAmountMonth",header:"Sales Amt M",cell:({row:e})=>a.jsx("div",{className:"text-right",children:s(+e.getValue("salesAmountMonth"))})},{accessorKey:"salesAmountYear",header:"Sales Amt Y",cell:({row:e})=>a.jsx("div",{className:"text-right",children:s(+e.getValue("salesAmountYear"))})},{accessorKey:"profit",header:"Profit",cell:({row:e})=>a.jsx("div",{className:"text-right",children:s(+e.getValue("profit"))})},{accessorKey:"markup",header:"Markup",cell:({row:e})=>a.jsxs("div",{className:"text-right text-purple-500",children:[e.getValue("markup"),"%"]})},{accessorKey:"salesMonth",header:"Sales Month",cell:({row:e})=>a.jsx("div",{className:"text-right",children:s(+e.getValue("salesMonth"))})},{accessorKey:"saleSituation",header:"Sales Situation",cell:({row:e})=>a.jsx("div",{className:"text-right",children:s(+e.getValue("saleSituation"))})},{accessorKey:"ivMonth",header:"IV Month",cell:({row:e})=>a.jsx("div",{className:"text-right",children:e.getValue("ivMonth")})},{accessorKey:"ivYear",header:"IV Year",cell:({row:e})=>a.jsx("div",{className:"text-right",children:e.getValue("ivYear")})},{accessorKey:"wareHouseDetail",header:"Warehouse Detail",cell:({row:e})=>a.jsx("div",{children:e.getValue("wareHouseDetail")})},{accessorKey:"buyAmount",header:"Buy Amount",cell:({row:e})=>a.jsx("div",{className:"text-right",children:s(+e.getValue("buyAmount"))})},{accessorKey:"cogsAmount",header:"COGS Amount",cell:({row:e})=>a.jsx("div",{className:"text-right",children:s(+e.getValue("cogsAmount"))})}];function oe(){var j,v;const[e,r]=m.useState([]),[o,x]=m.useState([]),[h,g]=m.useState({}),[i,n]=m.useState({}),d=I({data:ne,columns:D,onSortingChange:r,onColumnFiltersChange:x,getCoreRowModel:R(),getPaginationRowModel:k(),getSortedRowModel:B(),getFilteredRowModel:H(),onColumnVisibilityChange:g,onRowSelectionChange:n,state:{sorting:e,columnFilters:o,columnVisibility:h,rowSelection:i}});return a.jsxs("div",{className:"w-full",children:[a.jsxs("div",{className:"flex items-center py-4",children:[a.jsx(V,{placeholder:"Filter Customer...",value:((j=d.getColumn("customer"))==null?void 0:j.getFilterValue())??"",onChange:t=>{var l;return(l=d.getColumn("customer"))==null?void 0:l.setFilterValue(t.target.value)},className:"max-w-sm"}),a.jsxs(S,{children:[a.jsx(T,{asChild:!0,children:a.jsxs(c,{variant:"outline",className:"ml-auto",children:["Columns ",a.jsx(z,{className:"ml-2 h-4 w-4"})]})}),a.jsx(M,{align:"end",children:d.getAllColumns().filter(t=>t.getCanHide()).map(t=>a.jsx(P,{className:"capitalize",checked:t.getIsVisible(),onCheckedChange:l=>t.toggleVisibility(!!l),children:t.id},t.id))})]})]}),a.jsx("div",{className:"rounded-md",children:a.jsxs(X,{className:"h-full w-full overflow-x-auto rounded-md border",children:[a.jsxs(G,{children:[a.jsx(L,{children:d.getHeaderGroups().map(t=>a.jsx(p,{children:t.headers.map(l=>a.jsx(_,{children:l.isPlaceholder?null:y(l.column.columnDef.header,l.getContext())},l.id))},t.id))}),a.jsx(Q,{children:(v=d.getRowModel().rows)!=null&&v.length?d.getRowModel().rows.map(t=>a.jsx(ce,{today:t.original,children:a.jsx(p,{"data-state":t.getIsSelected()&&"selected",children:t.getVisibleCells().map(l=>a.jsx(w,{onClick:b=>{l.column.id==="select"&&b.stopPropagation()},children:y(l.column.columnDef.cell,l.getContext())},l.id))},t.id)})):a.jsx(p,{children:a.jsx(w,{colSpan:D.length,className:"h-24 text-center",children:"No results."})})})]}),a.jsx(Z,{orientation:"horizontal"})]})}),a.jsx("div",{className:"flex items-center justify-end space-x-2 py-4"})]})}const Ne=()=>a.jsx(oe,{});export{Ne as default};
