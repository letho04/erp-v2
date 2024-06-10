import{$ as j,d as t,w as v,_ as l,o as R,O as k,v as g,P as L,Q as S,T as z,q as b,U as G,V as W,W as H,X as U,p as V,Y as D,j as f,e as p}from"./index-DgFWu8Hn.js";const C="Dialog",[O,De]=j(C),[Y,i]=O(C),q=e=>{const{__scopeDialog:o,children:a,open:s,defaultOpen:n,onOpenChange:c,modal:r=!0}=e,d=t.useRef(null),$=t.useRef(null),[m=!1,x]=V({prop:s,defaultProp:n,onChange:c});return t.createElement(Y,{scope:o,triggerRef:d,contentRef:$,contentId:D(),titleId:D(),descriptionId:D(),open:m,onOpenChange:x,onOpenToggle:t.useCallback(()=>x(T=>!T),[x]),modal:r},a)},K="DialogTrigger",Q=t.forwardRef((e,o)=>{const{__scopeDialog:a,...s}=e,n=i(K,a),c=R(o,n.triggerRef);return t.createElement(b.button,l({type:"button","aria-haspopup":"dialog","aria-expanded":n.open,"aria-controls":n.contentId,"data-state":E(n.open)},s,{ref:c,onClick:g(e.onClick,n.onOpenToggle)}))}),N="DialogPortal",[X,y]=O(N,{forceMount:void 0}),Z=e=>{const{__scopeDialog:o,forceMount:a,children:s,container:n}=e,c=i(N,o);return t.createElement(X,{scope:o,forceMount:a},t.Children.map(s,r=>t.createElement(v,{present:a||c.open},t.createElement(H,{asChild:!0,container:n},r))))},_="DialogOverlay",B=t.forwardRef((e,o)=>{const a=y(_,e.__scopeDialog),{forceMount:s=a.forceMount,...n}=e,c=i(_,e.__scopeDialog);return c.modal?t.createElement(v,{present:s||c.open},t.createElement(J,l({},n,{ref:o}))):null}),J=t.forwardRef((e,o)=>{const{__scopeDialog:a,...s}=e,n=i(_,a);return t.createElement(G,{as:W,allowPinchZoom:!0,shards:[n.contentRef]},t.createElement(b.div,l({"data-state":E(n.open)},s,{ref:o,style:{pointerEvents:"auto",...s.style}})))}),u="DialogContent",ee=t.forwardRef((e,o)=>{const a=y(u,e.__scopeDialog),{forceMount:s=a.forceMount,...n}=e,c=i(u,e.__scopeDialog);return t.createElement(v,{present:s||c.open},c.modal?t.createElement(te,l({},n,{ref:o})):t.createElement(oe,l({},n,{ref:o})))}),te=t.forwardRef((e,o)=>{const a=i(u,e.__scopeDialog),s=t.useRef(null),n=R(o,a.contentRef,s);return t.useEffect(()=>{const c=s.current;if(c)return k(c)},[]),t.createElement(h,l({},e,{ref:n,trapFocus:a.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:g(e.onCloseAutoFocus,c=>{var r;c.preventDefault(),(r=a.triggerRef.current)===null||r===void 0||r.focus()}),onPointerDownOutside:g(e.onPointerDownOutside,c=>{const r=c.detail.originalEvent,d=r.button===0&&r.ctrlKey===!0;(r.button===2||d)&&c.preventDefault()}),onFocusOutside:g(e.onFocusOutside,c=>c.preventDefault())}))}),oe=t.forwardRef((e,o)=>{const a=i(u,e.__scopeDialog),s=t.useRef(!1),n=t.useRef(!1);return t.createElement(h,l({},e,{ref:o,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:c=>{var r;if((r=e.onCloseAutoFocus)===null||r===void 0||r.call(e,c),!c.defaultPrevented){var d;s.current||(d=a.triggerRef.current)===null||d===void 0||d.focus(),c.preventDefault()}s.current=!1,n.current=!1},onInteractOutside:c=>{var r,d;(r=e.onInteractOutside)===null||r===void 0||r.call(e,c),c.defaultPrevented||(s.current=!0,c.detail.originalEvent.type==="pointerdown"&&(n.current=!0));const $=c.target;((d=a.triggerRef.current)===null||d===void 0?void 0:d.contains($))&&c.preventDefault(),c.detail.originalEvent.type==="focusin"&&n.current&&c.preventDefault()}}))}),h=t.forwardRef((e,o)=>{const{__scopeDialog:a,trapFocus:s,onOpenAutoFocus:n,onCloseAutoFocus:c,...r}=e,d=i(u,a),$=t.useRef(null),m=R(o,$);return L(),t.createElement(t.Fragment,null,t.createElement(S,{asChild:!0,loop:!0,trapped:s,onMountAutoFocus:n,onUnmountAutoFocus:c},t.createElement(z,l({role:"dialog",id:d.contentId,"aria-describedby":d.descriptionId,"aria-labelledby":d.titleId,"data-state":E(d.open)},r,{ref:m,onDismiss:()=>d.onOpenChange(!1)}))),!1)}),P="DialogTitle",ae=t.forwardRef((e,o)=>{const{__scopeDialog:a,...s}=e,n=i(P,a);return t.createElement(b.h2,l({id:n.titleId},s,{ref:o}))}),ce="DialogDescription",ne=t.forwardRef((e,o)=>{const{__scopeDialog:a,...s}=e,n=i(ce,a);return t.createElement(b.p,l({id:n.descriptionId},s,{ref:o}))}),se="DialogClose",re=t.forwardRef((e,o)=>{const{__scopeDialog:a,...s}=e,n=i(se,a);return t.createElement(b.button,l({type:"button"},s,{ref:o,onClick:g(e.onClick,()=>n.onOpenChange(!1))}))});function E(e){return e?"open":"closed"}const de="DialogTitleWarning",[_e,ve]=U(de,{contentName:u,titleName:P,docsSlug:"dialog"}),le=q,ie=Q,fe=Z,A=B,I=ee,w=ae,M=ne,Re=re,Ee=le,Ce=ie,$e=fe,F=t.forwardRef(({className:e,...o},a)=>f.jsx(A,{ref:a,className:p("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...o}));F.displayName=A.displayName;const ue=t.forwardRef(({className:e,children:o,...a},s)=>f.jsxs($e,{children:[f.jsx(F,{}),f.jsx(I,{ref:s,className:p("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",e),...a,children:o})]}));ue.displayName=I.displayName;const pe=({className:e,...o})=>f.jsx("div",{className:p("flex flex-col space-y-1.5 text-center sm:text-left",e),...o});pe.displayName="DialogHeader";const ge=({className:e,...o})=>f.jsx("div",{className:p("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",e),...o});ge.displayName="DialogFooter";const be=t.forwardRef(({className:e,...o},a)=>f.jsx(w,{ref:a,className:p("text-lg font-semibold leading-none tracking-tight",e),...o}));be.displayName=w.displayName;const me=t.forwardRef(({className:e,...o},a)=>f.jsx(M,{ref:a,className:p("text-sm text-muted-foreground",e),...o}));me.displayName=M.displayName;export{De as $,ge as D,Ee as a,Ce as b,ue as c,pe as d,be as e,A as f,_e as g,I as h,w as i,M as j,Re as k,fe as l,le as m,ie as n,me as o};
