import{N as nt,j as c,B as H,k as at,D as ot,w as ct,x as lt,y as st,z as F,C as Ie,E as Oe,F as Me,G as Ae,d as r,$ as P,e as S,O as it,P as Le,Q as qe,T as dt,_ as M,U as Ge,V as ut,W as ft,X as pt,Y as X,Z as mt,a0 as vt,a1 as ht,a2 as bt,a3 as xt,a4 as gt,a5 as $t,a6 as wt,H as yt,a7 as jt}from"./index-CqeF8mEl.js";import{P as Ct,a as Et}from"./page-wrapper.component-BVSN06x_.js";import{C as St}from"./index-DE005LTR.js";import{C as ve,a as he}from"./react-icons.esm-BzZdZJIP.js";import{$ as Pt,f as Rt,g as Nt,h as kt}from"./dialog-0d3Gb4no.js";import"./card-CMvjPQwp.js";/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const It=nt("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]),Ot=()=>c.jsx("div",{className:"flex justify-end mb-2",children:c.jsxs(H,{variant:"rounded-action",className:"flex items-center gap-2",children:[c.jsx(at,{className:"text-white",size:25}),c.jsx("span",{children:"Add New PO"})]})}),Mt=()=>c.jsxs(ot,{children:[c.jsx(ct,{asChild:!0,children:c.jsxs(H,{variant:"outline",className:"flex items-center gap-2",children:[c.jsx("span",{children:"Filter"})," ",c.jsx(St,{})]})}),c.jsx(lt,{className:"w-56",children:c.jsxs(st,{children:[c.jsx(F,{children:"Product filter 1"}),c.jsx(F,{children:"Product filter 2"}),c.jsxs(Ie,{children:[c.jsx(Oe,{children:"Nested product filter"}),c.jsx(Me,{children:c.jsxs(Ae,{children:[c.jsx(F,{children:"product filter"}),c.jsxs(Ie,{children:[c.jsx(Oe,{children:"Dropdown menu sub"}),c.jsx(Me,{children:c.jsx(Ae,{children:c.jsx(F,{children:"product filter"})})})]}),c.jsx(F,{children:"Email"}),c.jsx(F,{children:"Message"})]})})]})]})})]});var De=1,At=.9,Dt=.8,Ft=.17,de=.1,ue=.999,_t=.9999,Tt=.99,zt=/[\\\/_+.#"@\[\(\{&]/,Kt=/[\\\/_+.#"@\[\(\{&]/g,Lt=/[\s-]/,He=/[\s-]/g;function pe(e,n,t,i,l,o,s){if(o===n.length)return l===e.length?De:Tt;var d=`${l},${o}`;if(s[d]!==void 0)return s[d];for(var h=i.charAt(o),m=t.indexOf(h,l),f=0,b,g,y,R;m>=0;)b=pe(e,n,t,i,m+1,o+1,s),b>f&&(m===l?b*=De:zt.test(e.charAt(m-1))?(b*=Dt,y=e.slice(l,m-1).match(Kt),y&&l>0&&(b*=Math.pow(ue,y.length))):Lt.test(e.charAt(m-1))?(b*=At,R=e.slice(l,m-1).match(He),R&&l>0&&(b*=Math.pow(ue,R.length))):(b*=Ft,l>0&&(b*=Math.pow(ue,m-l))),e.charAt(m)!==n.charAt(o)&&(b*=_t)),(b<de&&t.charAt(m-1)===i.charAt(o+1)||i.charAt(o+1)===i.charAt(o)&&t.charAt(m-1)!==i.charAt(o))&&(g=pe(e,n,t,i,m+1,o+2,s),g*de>b&&(b=g*de)),b>f&&(f=b),m=t.indexOf(h,m+1);return s[d]=f,f}function Fe(e){return e.toLowerCase().replace(He," ")}function qt(e,n,t){return e=t&&t.length>0?`${e+" "+t.join(" ")}`:e,pe(e,n,Fe(e),Fe(n),0,0,{})}var L='[cmdk-group=""]',fe='[cmdk-group-items=""]',Gt='[cmdk-group-heading=""]',be='[cmdk-item=""]',_e=`${be}:not([aria-disabled="true"])`,me="cmdk-item-select",O="data-value",Ht=(e,n,t)=>qt(e,n,t),Ve=r.createContext(void 0),V=()=>r.useContext(Ve),Be=r.createContext(void 0),xe=()=>r.useContext(Be),Ue=r.createContext(void 0),We=r.forwardRef((e,n)=>{let t=_(()=>{var a,p;return{search:"",value:(p=(a=e.value)!=null?a:e.defaultValue)!=null?p:"",filtered:{count:0,items:new Map,groups:new Set}}}),i=_(()=>new Set),l=_(()=>new Map),o=_(()=>new Map),s=_(()=>new Set),d=Xe(e),{label:h,children:m,value:f,onValueChange:b,filter:g,shouldFilter:y,loop:R,disablePointerSelection:B=!1,vimBindings:N=!0,...U}=e,ye=r.useId(),je=r.useId(),Ce=r.useId(),k=r.useRef(null),$=tr();A(()=>{if(f!==void 0){let a=f.trim();t.current.value=a,C.emit()}},[f]),A(()=>{$(6,Se)},[]);let C=r.useMemo(()=>({subscribe:a=>(s.current.add(a),()=>s.current.delete(a)),snapshot:()=>t.current,setState:(a,p,v)=>{var u,x,w;if(!Object.is(t.current[a],p)){if(t.current[a]=p,a==="search")le(),oe(),$(1,ce);else if(a==="value"&&(v||$(5,Se),((u=d.current)==null?void 0:u.value)!==void 0)){let E=p??"";(w=(x=d.current).onValueChange)==null||w.call(x,E);return}C.emit()}},emit:()=>{s.current.forEach(a=>a())}}),[]),ae=r.useMemo(()=>({value:(a,p,v)=>{var u;p!==((u=o.current.get(a))==null?void 0:u.value)&&(o.current.set(a,{value:p,keywords:v}),t.current.filtered.items.set(a,Ee(p,v)),$(2,()=>{oe(),C.emit()}))},item:(a,p)=>(i.current.add(a),p&&(l.current.has(p)?l.current.get(p).add(a):l.current.set(p,new Set([a]))),$(3,()=>{le(),oe(),t.current.value||ce(),C.emit()}),()=>{o.current.delete(a),i.current.delete(a),t.current.filtered.items.delete(a);let v=z();$(4,()=>{le(),(v==null?void 0:v.getAttribute("id"))===a&&ce(),C.emit()})}),group:a=>(l.current.has(a)||l.current.set(a,new Set),()=>{o.current.delete(a),l.current.delete(a)}),filter:()=>d.current.shouldFilter,label:h||e["aria-label"],disablePointerSelection:B,listId:ye,inputId:Ce,labelId:je,listInnerRef:k}),[]);function Ee(a,p){var v,u;let x=(u=(v=d.current)==null?void 0:v.filter)!=null?u:Ht;return a?x(a,t.current.search,p):0}function oe(){if(!t.current.search||d.current.shouldFilter===!1)return;let a=t.current.filtered.items,p=[];t.current.filtered.groups.forEach(u=>{let x=l.current.get(u),w=0;x.forEach(E=>{let I=a.get(E);w=Math.max(I,w)}),p.push([u,w])});let v=k.current;K().sort((u,x)=>{var w,E;let I=u.getAttribute("id"),W=x.getAttribute("id");return((w=a.get(W))!=null?w:0)-((E=a.get(I))!=null?E:0)}).forEach(u=>{let x=u.closest(fe);x?x.appendChild(u.parentElement===x?u:u.closest(`${fe} > *`)):v.appendChild(u.parentElement===v?u:u.closest(`${fe} > *`))}),p.sort((u,x)=>x[1]-u[1]).forEach(u=>{let x=k.current.querySelector(`${L}[${O}="${encodeURIComponent(u[0])}"]`);x==null||x.parentElement.appendChild(x)})}function ce(){let a=K().find(v=>v.getAttribute("aria-disabled")!=="true"),p=a==null?void 0:a.getAttribute(O);C.setState("value",p||void 0)}function le(){var a,p,v,u;if(!t.current.search||d.current.shouldFilter===!1){t.current.filtered.count=i.current.size;return}t.current.filtered.groups=new Set;let x=0;for(let w of i.current){let E=(p=(a=o.current.get(w))==null?void 0:a.value)!=null?p:"",I=(u=(v=o.current.get(w))==null?void 0:v.keywords)!=null?u:[],W=Ee(E,I);t.current.filtered.items.set(w,W),W>0&&x++}for(let[w,E]of l.current)for(let I of E)if(t.current.filtered.items.get(I)>0){t.current.filtered.groups.add(w);break}t.current.filtered.count=x}function Se(){var a,p,v;let u=z();u&&(((a=u.parentElement)==null?void 0:a.firstChild)===u&&((v=(p=u.closest(L))==null?void 0:p.querySelector(Gt))==null||v.scrollIntoView({block:"nearest"})),u.scrollIntoView({block:"nearest"}))}function z(){var a;return(a=k.current)==null?void 0:a.querySelector(`${be}[aria-selected="true"]`)}function K(){var a;return Array.from((a=k.current)==null?void 0:a.querySelectorAll(_e))}function se(a){let p=K()[a];p&&C.setState("value",p.getAttribute(O))}function ie(a){var p;let v=z(),u=K(),x=u.findIndex(E=>E===v),w=u[x+a];(p=d.current)!=null&&p.loop&&(w=x+a<0?u[u.length-1]:x+a===u.length?u[0]:u[x+a]),w&&C.setState("value",w.getAttribute(O))}function Pe(a){let p=z(),v=p==null?void 0:p.closest(L),u;for(;v&&!u;)v=a>0?Qt(v,L):er(v,L),u=v==null?void 0:v.querySelector(_e);u?C.setState("value",u.getAttribute(O)):ie(a)}let Re=()=>se(K().length-1),Ne=a=>{a.preventDefault(),a.metaKey?Re():a.altKey?Pe(1):ie(1)},ke=a=>{a.preventDefault(),a.metaKey?se(0):a.altKey?Pe(-1):ie(-1)};return r.createElement(P.div,{ref:n,tabIndex:-1,...U,"cmdk-root":"",onKeyDown:a=>{var p;if((p=U.onKeyDown)==null||p.call(U,a),!a.defaultPrevented)switch(a.key){case"n":case"j":{N&&a.ctrlKey&&Ne(a);break}case"ArrowDown":{Ne(a);break}case"p":case"k":{N&&a.ctrlKey&&ke(a);break}case"ArrowUp":{ke(a);break}case"Home":{a.preventDefault(),se(0);break}case"End":{a.preventDefault(),Re();break}case"Enter":if(!a.nativeEvent.isComposing&&a.keyCode!==229){a.preventDefault();let v=z();if(v){let u=new Event(me);v.dispatchEvent(u)}}}}},r.createElement("label",{"cmdk-label":"",htmlFor:ae.inputId,id:ae.labelId,style:nr},h),Y(e,a=>r.createElement(Be.Provider,{value:C},r.createElement(Ve.Provider,{value:ae},a))))}),Vt=r.forwardRef((e,n)=>{var t,i;let l=r.useId(),o=r.useRef(null),s=r.useContext(Ue),d=V(),h=Xe(e),m=(i=(t=h.current)==null?void 0:t.forceMount)!=null?i:s==null?void 0:s.forceMount;A(()=>{if(!m)return d.item(l,s==null?void 0:s.id)},[m]);let f=Ye(l,o,[e.value,e.children,o],e.keywords),b=xe(),g=D($=>$.value&&$.value===f.current),y=D($=>m||d.filter()===!1?!0:$.search?$.filtered.items.get(l)>0:!0);r.useEffect(()=>{let $=o.current;if(!(!$||e.disabled))return $.addEventListener(me,R),()=>$.removeEventListener(me,R)},[y,e.onSelect,e.disabled]);function R(){var $,C;B(),(C=($=h.current).onSelect)==null||C.call($,f.current)}function B(){b.setState("value",f.current,!0)}if(!y)return null;let{disabled:N,value:U,onSelect:ye,forceMount:je,keywords:Ce,...k}=e;return r.createElement(P.div,{ref:q([o,n]),...k,id:l,"cmdk-item":"",role:"option","aria-disabled":!!N,"aria-selected":!!g,"data-disabled":!!N,"data-selected":!!g,onPointerMove:N||d.disablePointerSelection?void 0:B,onClick:N?void 0:R},e.children)}),Bt=r.forwardRef((e,n)=>{let{heading:t,children:i,forceMount:l,...o}=e,s=r.useId(),d=r.useRef(null),h=r.useRef(null),m=r.useId(),f=V(),b=D(y=>l||f.filter()===!1?!0:y.search?y.filtered.groups.has(s):!0);A(()=>f.group(s),[]),Ye(s,d,[e.value,e.heading,h]);let g=r.useMemo(()=>({id:s,forceMount:l}),[l]);return r.createElement(P.div,{ref:q([d,n]),...o,"cmdk-group":"",role:"presentation",hidden:b?void 0:!0},t&&r.createElement("div",{ref:h,"cmdk-group-heading":"","aria-hidden":!0,id:m},t),Y(e,y=>r.createElement("div",{"cmdk-group-items":"",role:"group","aria-labelledby":t?m:void 0},r.createElement(Ue.Provider,{value:g},y))))}),Ut=r.forwardRef((e,n)=>{let{alwaysRender:t,...i}=e,l=r.useRef(null),o=D(s=>!s.search);return!t&&!o?null:r.createElement(P.div,{ref:q([l,n]),...i,"cmdk-separator":"",role:"separator"})}),Wt=r.forwardRef((e,n)=>{let{onValueChange:t,...i}=e,l=e.value!=null,o=xe(),s=D(f=>f.search),d=D(f=>f.value),h=V(),m=r.useMemo(()=>{var f;let b=(f=h.listInnerRef.current)==null?void 0:f.querySelector(`${be}[${O}="${encodeURIComponent(d)}"]`);return b==null?void 0:b.getAttribute("id")},[]);return r.useEffect(()=>{e.value!=null&&o.setState("search",e.value)},[e.value]),r.createElement(P.input,{ref:n,...i,"cmdk-input":"",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"aria-autocomplete":"list",role:"combobox","aria-expanded":!0,"aria-controls":h.listId,"aria-labelledby":h.labelId,"aria-activedescendant":m,id:h.inputId,type:"text",value:l?e.value:s,onChange:f=>{l||o.setState("search",f.target.value),t==null||t(f.target.value)}})}),Xt=r.forwardRef((e,n)=>{let{children:t,label:i="Suggestions",...l}=e,o=r.useRef(null),s=r.useRef(null),d=V();return r.useEffect(()=>{if(s.current&&o.current){let h=s.current,m=o.current,f,b=new ResizeObserver(()=>{f=requestAnimationFrame(()=>{let g=h.offsetHeight;m.style.setProperty("--cmdk-list-height",g.toFixed(1)+"px")})});return b.observe(h),()=>{cancelAnimationFrame(f),b.unobserve(h)}}},[]),r.createElement(P.div,{ref:q([o,n]),...l,"cmdk-list":"",role:"listbox","aria-label":i,id:d.listId},Y(e,h=>r.createElement("div",{ref:q([s,d.listInnerRef]),"cmdk-list-sizer":""},h)))}),Yt=r.forwardRef((e,n)=>{let{open:t,onOpenChange:i,overlayClassName:l,contentClassName:o,container:s,...d}=e;return r.createElement(Pt,{open:t,onOpenChange:i},r.createElement(Rt,{container:s},r.createElement(Nt,{"cmdk-overlay":"",className:l}),r.createElement(kt,{"aria-label":e.label,"cmdk-dialog":"",className:o},r.createElement(We,{ref:n,...d}))))}),Zt=r.forwardRef((e,n)=>D(t=>t.filtered.count===0)?r.createElement(P.div,{ref:n,...e,"cmdk-empty":"",role:"presentation"}):null),Jt=r.forwardRef((e,n)=>{let{progress:t,children:i,label:l="Loading...",...o}=e;return r.createElement(P.div,{ref:n,...o,"cmdk-loading":"",role:"progressbar","aria-valuenow":t,"aria-valuemin":0,"aria-valuemax":100,"aria-label":l},Y(e,s=>r.createElement("div",{"aria-hidden":!0},s)))}),j=Object.assign(We,{List:Xt,Item:Vt,Input:Wt,Group:Bt,Separator:Ut,Dialog:Yt,Empty:Zt,Loading:Jt});function Qt(e,n){let t=e.nextElementSibling;for(;t;){if(t.matches(n))return t;t=t.nextElementSibling}}function er(e,n){let t=e.previousElementSibling;for(;t;){if(t.matches(n))return t;t=t.previousElementSibling}}function Xe(e){let n=r.useRef(e);return A(()=>{n.current=e}),n}var A=typeof window>"u"?r.useEffect:r.useLayoutEffect;function _(e){let n=r.useRef();return n.current===void 0&&(n.current=e()),n}function q(e){return n=>{e.forEach(t=>{typeof t=="function"?t(n):t!=null&&(t.current=n)})}}function D(e){let n=xe(),t=()=>e(n.snapshot());return r.useSyncExternalStore(n.subscribe,t,t)}function Ye(e,n,t,i=[]){let l=r.useRef(),o=V();return A(()=>{var s;let d=(()=>{var m;for(let f of t){if(typeof f=="string")return f.trim();if(typeof f=="object"&&"current"in f)return f.current?(m=f.current.textContent)==null?void 0:m.trim():l.current}})(),h=i.map(m=>m.trim());o.value(e,d,h),(s=n.current)==null||s.setAttribute(O,d),l.current=d}),l}var tr=()=>{let[e,n]=r.useState(),t=_(()=>new Map);return A(()=>{t.current.forEach(i=>i()),t.current=new Map},[e]),(i,l)=>{t.current.set(i,l),n({})}};function rr(e){let n=e.type;return typeof n=="function"?n(e.props):"render"in n?n.render(e.props):e}function Y({asChild:e,children:n},t){return e&&r.isValidElement(n)?r.cloneElement(rr(n),{ref:n.ref},t(n.props.children)):t(n)}var nr={position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0"};const Z=r.forwardRef(({className:e,...n},t)=>c.jsx(j,{ref:t,className:S("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",e),...n}));Z.displayName=j.displayName;const J=r.forwardRef(({className:e,...n},t)=>c.jsxs("div",{className:"flex items-center border-b px-3","cmdk-input-wrapper":"",children:[c.jsx(It,{className:"mr-2 h-4 w-4 shrink-0 opacity-50"}),c.jsx(j.Input,{ref:t,className:S("flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",e),...n})]}));J.displayName=j.Input.displayName;const Q=r.forwardRef(({className:e,...n},t)=>c.jsx(j.List,{ref:t,className:S("max-h-[300px] overflow-y-auto overflow-x-hidden",e),...n}));Q.displayName=j.List.displayName;const ee=r.forwardRef((e,n)=>c.jsx(j.Empty,{ref:n,className:"py-6 text-center text-sm",...e}));ee.displayName=j.Empty.displayName;const te=r.forwardRef(({className:e,...n},t)=>c.jsx(j.Group,{ref:t,className:S("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",e),...n}));te.displayName=j.Group.displayName;const ar=r.forwardRef(({className:e,...n},t)=>c.jsx(j.Separator,{ref:t,className:S("-mx-1 h-px bg-border",e),...n}));ar.displayName=j.Separator.displayName;const re=r.forwardRef(({className:e,...n},t)=>c.jsx(j.Item,{ref:t,className:S("relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50",e),...n}));re.displayName=j.Item.displayName;const Ze="Popover",[Je,Rr]=it(Ze,[Le]),ge=Le(),[or,T]=Je(Ze),cr=e=>{const{__scopePopover:n,children:t,open:i,defaultOpen:l,onOpenChange:o,modal:s=!1}=e,d=ge(n),h=r.useRef(null),[m,f]=r.useState(!1),[b=!1,g]=xt({prop:i,defaultProp:l,onChange:o});return r.createElement(gt,d,r.createElement(or,{scope:n,contentId:$t(),triggerRef:h,open:b,onOpenChange:g,onOpenToggle:r.useCallback(()=>g(y=>!y),[g]),hasCustomAnchor:m,onCustomAnchorAdd:r.useCallback(()=>f(!0),[]),onCustomAnchorRemove:r.useCallback(()=>f(!1),[]),modal:s},t))},lr="PopoverTrigger",sr=r.forwardRef((e,n)=>{const{__scopePopover:t,...i}=e,l=T(lr,t),o=ge(t),s=Ge(n,l.triggerRef),d=r.createElement(P.button,M({type:"button","aria-haspopup":"dialog","aria-expanded":l.open,"aria-controls":l.contentId,"data-state":tt(l.open)},i,{ref:s,onClick:X(e.onClick,l.onOpenToggle)}));return l.hasCustomAnchor?d:r.createElement(wt,M({asChild:!0},o),d)}),Qe="PopoverPortal",[ir,dr]=Je(Qe,{forceMount:void 0}),ur=e=>{const{__scopePopover:n,forceMount:t,children:i,container:l}=e,o=T(Qe,n);return r.createElement(ir,{scope:n,forceMount:t},r.createElement(qe,{present:t||o.open},r.createElement(dt,{asChild:!0,container:l},i)))},G="PopoverContent",fr=r.forwardRef((e,n)=>{const t=dr(G,e.__scopePopover),{forceMount:i=t.forceMount,...l}=e,o=T(G,e.__scopePopover);return r.createElement(qe,{present:i||o.open},o.modal?r.createElement(pr,M({},l,{ref:n})):r.createElement(mr,M({},l,{ref:n})))}),pr=r.forwardRef((e,n)=>{const t=T(G,e.__scopePopover),i=r.useRef(null),l=Ge(n,i),o=r.useRef(!1);return r.useEffect(()=>{const s=i.current;if(s)return ut(s)},[]),r.createElement(ft,{as:pt,allowPinchZoom:!0},r.createElement(et,M({},e,{ref:l,trapFocus:t.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:X(e.onCloseAutoFocus,s=>{var d;s.preventDefault(),o.current||(d=t.triggerRef.current)===null||d===void 0||d.focus()}),onPointerDownOutside:X(e.onPointerDownOutside,s=>{const d=s.detail.originalEvent,h=d.button===0&&d.ctrlKey===!0,m=d.button===2||h;o.current=m},{checkForDefaultPrevented:!1}),onFocusOutside:X(e.onFocusOutside,s=>s.preventDefault(),{checkForDefaultPrevented:!1})})))}),mr=r.forwardRef((e,n)=>{const t=T(G,e.__scopePopover),i=r.useRef(!1),l=r.useRef(!1);return r.createElement(et,M({},e,{ref:n,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:o=>{var s;if((s=e.onCloseAutoFocus)===null||s===void 0||s.call(e,o),!o.defaultPrevented){var d;i.current||(d=t.triggerRef.current)===null||d===void 0||d.focus(),o.preventDefault()}i.current=!1,l.current=!1},onInteractOutside:o=>{var s,d;(s=e.onInteractOutside)===null||s===void 0||s.call(e,o),o.defaultPrevented||(i.current=!0,o.detail.originalEvent.type==="pointerdown"&&(l.current=!0));const h=o.target;((d=t.triggerRef.current)===null||d===void 0?void 0:d.contains(h))&&o.preventDefault(),o.detail.originalEvent.type==="focusin"&&l.current&&o.preventDefault()}}))}),et=r.forwardRef((e,n)=>{const{__scopePopover:t,trapFocus:i,onOpenAutoFocus:l,onCloseAutoFocus:o,disableOutsidePointerEvents:s,onEscapeKeyDown:d,onPointerDownOutside:h,onFocusOutside:m,onInteractOutside:f,...b}=e,g=T(G,t),y=ge(t);return mt(),r.createElement(vt,{asChild:!0,loop:!0,trapped:i,onMountAutoFocus:l,onUnmountAutoFocus:o},r.createElement(ht,{asChild:!0,disableOutsidePointerEvents:s,onInteractOutside:f,onEscapeKeyDown:d,onPointerDownOutside:h,onFocusOutside:m,onDismiss:()=>g.onOpenChange(!1)},r.createElement(bt,M({"data-state":tt(g.open),role:"dialog",id:g.contentId},y,b,{ref:n,style:{...b.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-popover-content-available-width":"var(--radix-popper-available-width)","--radix-popover-content-available-height":"var(--radix-popper-available-height)","--radix-popover-trigger-width":"var(--radix-popper-anchor-width)","--radix-popover-trigger-height":"var(--radix-popper-anchor-height)"}}))))});function tt(e){return e?"open":"closed"}const vr=cr,hr=sr,br=ur,rt=fr,$e=vr,we=hr,ne=r.forwardRef(({className:e,align:n="center",sideOffset:t=4,...i},l)=>c.jsx(br,{children:c.jsx(rt,{ref:l,align:n,sideOffset:t,className:S("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...i})}));ne.displayName=rt.displayName;const Te=[{value:"hangzhou Mear",label:"Hangzhou Mear"},{value:"hoa sen",label:"Hoa Sen"}],xr=()=>{var l;const[e,n]=r.useState(!1),[t,i]=r.useState("");return c.jsxs($e,{open:e,onOpenChange:n,children:[c.jsx(we,{asChild:!0,children:c.jsxs(H,{variant:"outline",role:"combobox","aria-expanded":e,className:"w-[200px] justify-between",children:[t?(l=Te.find(o=>o.value===t))==null?void 0:l.label:"Select brand...",c.jsx(ve,{className:"ml-2 h-4 w-4 shrink-0 opacity-50"})]})}),c.jsx(ne,{className:"w-[200px] p-0",children:c.jsxs(Z,{children:[c.jsx(J,{placeholder:"Search brand...",className:"h-9"}),c.jsxs(Q,{children:[c.jsx(ee,{children:"No brand found."}),c.jsx(te,{children:Te.map(o=>c.jsxs(re,{value:o.value,onSelect:s=>{i(s===t?"":s),n(!1)},children:[o.label,c.jsx(he,{className:S("ml-auto h-4 w-4",t===o.value?"opacity-100":"opacity-0")})]},o.value))})]})]})})]})},ze=[{value:"trung nguye",label:"Trung Nguyên"},{value:"nunez",label:"Nunez"},{value:"Salah",label:"Salah"}],gr=()=>{var l;const[e,n]=r.useState(!1),[t,i]=r.useState("");return c.jsxs($e,{open:e,onOpenChange:n,children:[c.jsx(we,{asChild:!0,children:c.jsxs(H,{variant:"outline",role:"combobox","aria-expanded":e,className:"w-[200px] justify-between",children:[t?(l=ze.find(o=>o.value===t))==null?void 0:l.label:"Select Customer...",c.jsx(ve,{className:"ml-2 h-4 w-4 shrink-0 opacity-50"})]})}),c.jsx(ne,{className:"w-[200px] p-0",children:c.jsxs(Z,{children:[c.jsx(J,{placeholder:"Search customer...",className:"h-9"}),c.jsxs(Q,{children:[c.jsx(ee,{children:"No Customer found."}),c.jsx(te,{children:ze.map(o=>c.jsxs(re,{value:o.value,onSelect:s=>{i(s===t?"":s),n(!1)},children:[o.label,c.jsx(he,{className:S("ml-auto h-4 w-4",t===o.value?"opacity-100":"opacity-0")})]},o.value))})]})]})})]})},Ke=[{value:"nunez",label:"Nunez"},{value:"messi",label:"Messi"},{value:"Salah",label:"Salah"}],$r=()=>{var l;const[e,n]=r.useState(!1),[t,i]=r.useState("");return c.jsxs($e,{open:e,onOpenChange:n,children:[c.jsx(we,{asChild:!0,children:c.jsxs(H,{variant:"outline",role:"combobox","aria-expanded":e,className:"w-[200px] justify-between",children:[t?(l=Ke.find(o=>o.value===t))==null?void 0:l.label:"Select sale...",c.jsx(ve,{className:"ml-2 h-4 w-4 shrink-0 opacity-50"})]})}),c.jsx(ne,{className:"w-[200px] p-0",children:c.jsxs(Z,{children:[c.jsx(J,{placeholder:"Search sale...",className:"h-9"}),c.jsxs(Q,{children:[c.jsx(ee,{children:"No sale found."}),c.jsx(te,{children:Ke.map(o=>c.jsxs(re,{value:o.value,onSelect:s=>{i(s===t?"":s),n(!1)},children:[o.label,c.jsx(he,{className:S("ml-auto h-4 w-4",t===o.value?"opacity-100":"opacity-0")})]},o.value))})]})]})})]})},wr=()=>c.jsxs("div",{className:"flex gap-3",children:[c.jsx(gr,{}),c.jsx($r,{}),c.jsx(xr,{})]}),Nr=()=>c.jsx(Ct,{className:"grid gap-6 grid-rows-[min-content_1fr]",children:c.jsxs(Et,{children:[c.jsxs("div",{className:"flex items-center justify-between mb-6",children:[c.jsxs("div",{className:"flex gap-4",children:[c.jsx(yt,{}),c.jsx(Mt,{}),c.jsx(wr,{})]}),c.jsx(Ot,{})]}),c.jsx(jt,{})]})});export{Nr as default};