"use strict";(self.webpackChunk_atoti_pokemon_extension=self.webpackChunk_atoti_pokemon_extension||[]).push([[302],{57096:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"}},20054:(e,t,n)=>{var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=(a=n(32615))&&a.__esModule?a:{default:a};t.default=r,e.exports=r},32615:(e,t,n)=>{var a=n(20862),r=n(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(81109)),c=a(n(24328)),l=r(n(57096)),i=r(n(92074)),u=function(e,t){return c.createElement(i.default,(0,o.default)((0,o.default)({},e),{},{ref:t,icon:l.default}))};u.displayName="PlusOutlined";var s=c.forwardRef(u);t.default=s},38882:(e,t,n)=>{var a=n(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.detectFlexGapSupported=t.isStyleSupport=t.canUseDocElement=void 0;var r=a(n(19158)),o=function(){return(0,r.default)()&&window.document.documentElement};t.canUseDocElement=o;var c;t.isStyleSupport=function(e){if(o()){var t=Array.isArray(e)?e:[e],n=window.document.documentElement;return t.some((function(e){return e in n.style}))}return!1};t.detectFlexGapSupported=function(){if(!o())return!1;if(void 0!==c)return c;var e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e),c=1===e.scrollHeight,document.body.removeChild(e),c}},54184:(e,t,n)=>{var a=n(20862),r=n(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(67154)),c=r(n(59713)),l=a(n(24328)),i=r(n(94184)),u=n(31929),s=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},d=function(e){var t=e.prefixCls,n=e.className,a=e.hoverable,r=void 0===a||a,d=s(e,["prefixCls","className","hoverable"]);return l.createElement(u.ConfigConsumer,null,(function(e){var a=(0,e.getPrefixCls)("card",t),u=(0,i.default)("".concat(a,"-grid"),n,(0,c.default)({},"".concat(a,"-grid-hoverable"),r));return l.createElement("div",(0,o.default)({},d,{className:u}))}))};t.default=d},89281:(e,t,n)=>{var a=n(20862),r=n(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(67154)),c=a(n(24328)),l=r(n(94184)),i=n(31929),u=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},s=function(e){return c.createElement(i.ConfigConsumer,null,(function(t){var n=t.getPrefixCls,a=e.prefixCls,r=e.className,i=e.avatar,s=e.title,d=e.description,f=u(e,["prefixCls","className","avatar","title","description"]),v=n("card",a),p=(0,l.default)("".concat(v,"-meta"),r),m=i?c.createElement("div",{className:"".concat(v,"-meta-avatar")},i):null,b=s?c.createElement("div",{className:"".concat(v,"-meta-title")},s):null,y=d?c.createElement("div",{className:"".concat(v,"-meta-description")},d):null,E=b||y?c.createElement("div",{className:"".concat(v,"-meta-detail")},b,y):null;return c.createElement("div",(0,o.default)({},f,{className:p}),m,E)}))};t.default=s},70302:(e,t,n)=>{var a=n(20862),r=n(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(59713)),c=r(n(67154)),l=a(n(24328)),i=r(n(94184)),u=r(n(18475)),s=r(n(54184)),d=r(n(89281)),f=r(n(1350)),v=r(n(55673)),p=r(n(5789)),m=n(31929),b=r(n(3236)),y=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};var E=function(e){var t,n,a,r=l.useContext(m.ConfigContext),d=r.getPrefixCls,E=r.direction,h=l.useContext(b.default),g=e.prefixCls,C=e.className,N=e.extra,x=e.headStyle,O=void 0===x?{}:x,w=e.bodyStyle,P=void 0===w?{}:w,S=e.title,T=e.loading,Z=e.bordered,_=void 0===Z||Z,M=e.size,R=e.type,A=e.cover,I=e.actions,k=e.tabList,L=e.children,U=e.activeTabKey,j=e.defaultActiveTabKey,K=e.tabBarExtraContent,B=e.hoverable,F=e.tabProps,D=void 0===F?{}:F,H=y(e,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),W=d("card",g),G=0===P.padding||"0px"===P.padding?{padding:24}:void 0,V=l.createElement("div",{className:"".concat(W,"-loading-block")}),Y=l.createElement("div",{className:"".concat(W,"-loading-content"),style:G},l.createElement(v.default,{gutter:8},l.createElement(p.default,{span:22},V)),l.createElement(v.default,{gutter:8},l.createElement(p.default,{span:8},V),l.createElement(p.default,{span:15},V)),l.createElement(v.default,{gutter:8},l.createElement(p.default,{span:6},V),l.createElement(p.default,{span:18},V)),l.createElement(v.default,{gutter:8},l.createElement(p.default,{span:13},V),l.createElement(p.default,{span:9},V)),l.createElement(v.default,{gutter:8},l.createElement(p.default,{span:4},V),l.createElement(p.default,{span:3},V),l.createElement(p.default,{span:16},V))),Q=void 0!==U,z=(0,c.default)((0,c.default)({},D),(t={},(0,o.default)(t,Q?"activeKey":"defaultActiveKey",Q?U:j),(0,o.default)(t,"tabBarExtraContent",K),t)),X=k&&k.length?l.createElement(f.default,(0,c.default)({size:"large"},z,{className:"".concat(W,"-head-tabs"),onChange:function(t){e.onTabChange&&e.onTabChange(t)}}),k.map((function(e){return l.createElement(f.default.TabPane,{tab:e.tab,disabled:e.disabled,key:e.key})}))):null;(S||N||X)&&(a=l.createElement("div",{className:"".concat(W,"-head"),style:O},l.createElement("div",{className:"".concat(W,"-head-wrapper")},S&&l.createElement("div",{className:"".concat(W,"-head-title")},S),N&&l.createElement("div",{className:"".concat(W,"-extra")},N)),X));var q,J=A?l.createElement("div",{className:"".concat(W,"-cover")},A):null,$=l.createElement("div",{className:"".concat(W,"-body"),style:P},T?Y:L),ee=I&&I.length?l.createElement("ul",{className:"".concat(W,"-actions")},function(e){return e.map((function(t,n){return l.createElement("li",{style:{width:"".concat(100/e.length,"%")},key:"action-".concat(n)},l.createElement("span",null,t))}))}(I)):null,te=(0,u.default)(H,["onTabChange"]),ne=M||h,ae=(0,i.default)(W,(n={},(0,o.default)(n,"".concat(W,"-loading"),T),(0,o.default)(n,"".concat(W,"-bordered"),_),(0,o.default)(n,"".concat(W,"-hoverable"),B),(0,o.default)(n,"".concat(W,"-contain-grid"),(l.Children.forEach(e.children,(function(e){e&&e.type&&e.type===s.default&&(q=!0)})),q)),(0,o.default)(n,"".concat(W,"-contain-tabs"),k&&k.length),(0,o.default)(n,"".concat(W,"-").concat(ne),ne),(0,o.default)(n,"".concat(W,"-type-").concat(R),!!R),(0,o.default)(n,"".concat(W,"-rtl"),"rtl"===E),n),C);return l.createElement("div",(0,c.default)({},te,{className:ae}),a,J,$,ee)};E.Grid=s.default,E.Meta=d.default;var h=E;t.default=h},5789:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(38614).Col;t.default=a},26968:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(0,n(24328).createContext)({});t.default=a},31977:(e,t,n)=>{var a=n(20862),r=n(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(59713)),c=r(n(67154)),l=r(n(50008)),i=a(n(24328)),u=r(n(94184)),s=r(n(26968)),d=n(31929),f=n(38882),v=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};var p=["xs","sm","md","lg","xl","xxl"],m=i.forwardRef((function(e,t){var n,a=i.useContext(d.ConfigContext),r=a.getPrefixCls,m=a.direction,b=i.useContext(s.default),y=b.gutter,E=b.wrap,h=e.prefixCls,g=e.span,C=e.order,N=e.offset,x=e.push,O=e.pull,w=e.className,P=e.children,S=e.flex,T=e.style,Z=v(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),_=r("col",h),M={};p.forEach((function(t){var n,a={},r=e[t];"number"==typeof r?a.span=r:"object"===(0,l.default)(r)&&(a=r||{}),delete Z[t],M=(0,c.default)((0,c.default)({},M),(n={},(0,o.default)(n,"".concat(_,"-").concat(t,"-").concat(a.span),void 0!==a.span),(0,o.default)(n,"".concat(_,"-").concat(t,"-order-").concat(a.order),a.order||0===a.order),(0,o.default)(n,"".concat(_,"-").concat(t,"-offset-").concat(a.offset),a.offset||0===a.offset),(0,o.default)(n,"".concat(_,"-").concat(t,"-push-").concat(a.push),a.push||0===a.push),(0,o.default)(n,"".concat(_,"-").concat(t,"-pull-").concat(a.pull),a.pull||0===a.pull),(0,o.default)(n,"".concat(_,"-rtl"),"rtl"===m),n))}));var R=(0,u.default)(_,(n={},(0,o.default)(n,"".concat(_,"-").concat(g),void 0!==g),(0,o.default)(n,"".concat(_,"-order-").concat(C),C),(0,o.default)(n,"".concat(_,"-offset-").concat(N),N),(0,o.default)(n,"".concat(_,"-push-").concat(x),x),(0,o.default)(n,"".concat(_,"-pull-").concat(O),O),n),w,M),A={};if(y&&y[0]>0){var I=y[0]/2;A.paddingLeft=I,A.paddingRight=I}if(y&&y[1]>0&&!(0,f.detectFlexGapSupported)()){var k=y[1]/2;A.paddingTop=k,A.paddingBottom=k}return S&&(A.flex=function(e){return"number"==typeof e?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}(S),"auto"!==S||!1!==E||A.minWidth||(A.minWidth=0)),i.createElement("div",(0,c.default)({},Z,{style:(0,c.default)((0,c.default)({},A),T),className:R,ref:t}),P)}));m.displayName="Col";var b=m;t.default=b},38614:(e,t,n)=>{var a=n(95318);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Row",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"Col",{enumerable:!0,get:function(){return o.default}}),t.default=void 0;var r=a(n(15855)),o=a(n(31977)),c={useBreakpoint:a(n(60872)).default};t.default=c},15855:(e,t,n)=>{var a=n(20862),r=n(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(67154)),c=r(n(59713)),l=r(n(50008)),i=r(n(63038)),u=a(n(24328)),s=r(n(94184)),d=n(31929),f=r(n(26968)),v=n(66764),p=a(n(67046)),m=n(38882),b=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},y=((0,v.tuple)("top","middle","bottom","stretch"),(0,v.tuple)("start","end","center","space-around","space-between"),u.forwardRef((function(e,t){var n,a=e.prefixCls,r=e.justify,v=e.align,y=e.className,E=e.style,h=e.children,g=e.gutter,C=void 0===g?0:g,N=e.wrap,x=b(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),O=u.useContext(d.ConfigContext),w=O.getPrefixCls,P=O.direction,S=u.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),T=(0,i.default)(S,2),Z=T[0],_=T[1],M=u.useRef(C);u.useEffect((function(){var e=p.default.subscribe((function(e){var t=M.current||0;(!Array.isArray(t)&&"object"===(0,l.default)(t)||Array.isArray(t)&&("object"===(0,l.default)(t[0])||"object"===(0,l.default)(t[1])))&&_(e)}));return function(){return p.default.unsubscribe(e)}}),[]);var R,A=w("row",a),I=(R=[0,0],(Array.isArray(C)?C:[C,0]).forEach((function(e,t){if("object"===(0,l.default)(e))for(var n=0;n<p.responsiveArray.length;n++){var a=p.responsiveArray[n];if(Z[a]&&void 0!==e[a]){R[t]=e[a];break}}else R[t]=e||0})),R),k=(0,s.default)(A,(n={},(0,c.default)(n,"".concat(A,"-no-wrap"),!1===N),(0,c.default)(n,"".concat(A,"-").concat(r),r),(0,c.default)(n,"".concat(A,"-").concat(v),v),(0,c.default)(n,"".concat(A,"-rtl"),"rtl"===P),n),y),L={},U=I[0]>0?I[0]/-2:void 0,j=I[1]>0?I[1]/-2:void 0;if(L.marginLeft=U,L.marginRight=U,(0,m.detectFlexGapSupported)()){var K=(0,i.default)(I,2);L.rowGap=K[1]}else L.marginTop=j,L.marginBottom=j;return u.createElement(f.default.Provider,{value:{gutter:I,wrap:N}},u.createElement("div",(0,o.default)({},x,{className:k,style:(0,o.default)((0,o.default)({},L),E),ref:t}),h))})));y.displayName="Row";var E=y;t.default=E},55673:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(38614).Row;t.default=a},1350:(e,t,n)=>{var a=n(20862),r=n(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(67154)),c=r(n(59713)),l=a(n(24328)),i=a(n(71388)),u=r(n(94184)),s=r(n(26937)),d=r(n(20054)),f=r(n(40753)),v=r(n(72454)),p=n(31929),m=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};function b(e){var t,n,a=e.type,r=e.className,b=e.size,y=e.onEdit,E=e.hideAdd,h=e.centered,g=e.addIcon,C=m(e,["type","className","size","onEdit","hideAdd","centered","addIcon"]),N=C.prefixCls,x=l.useContext(p.ConfigContext),O=x.getPrefixCls,w=x.direction,P=O("tabs",N);return"editable-card"===a&&(n={onEdit:function(e,t){var n=t.key,a=t.event;null==y||y("add"===e?a:n,e)},removeIcon:l.createElement(f.default,null),addIcon:g||l.createElement(d.default,null),showAdd:!0!==E}),(0,v.default)(!("onPrevClick"in C)&&!("onNextClick"in C),"Tabs","`onPrevClick` and `onNextClick` has been removed. Please use `onTabScroll` instead."),l.createElement(i.default,(0,o.default)({direction:w},C,{moreTransitionName:"slide-up",className:(0,u.default)((t={},(0,c.default)(t,"".concat(P,"-").concat(b),b),(0,c.default)(t,"".concat(P,"-card"),["card","editable-card"].includes(a)),(0,c.default)(t,"".concat(P,"-editable-card"),"editable-card"===a),(0,c.default)(t,"".concat(P,"-centered"),h),t),r),editable:n,moreIcon:l.createElement(s.default,null),prefixCls:P}))}b.TabPane=i.TabPane;var y=b;t.default=y},71388:(e,t,n)=>{n.r(t),n.d(t,{TabPane:()=>Y,default:()=>q});var a=n(87462),r=n(4942),o=n(29439),c=n(71002),l=n(44925),i=n(1413),u=n(24328),s=n(94184),d=n.n(s),f=n(50344),v=n(31131),p=n(21770),m=n(93433),b=n(75164),y=n(48717);function E(e){var t=(0,u.useRef)(),n=(0,u.useRef)(!1);return(0,u.useEffect)((function(){return function(){n.current=!0,b.Z.cancel(t.current)}}),[]),function(){for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];n.current||(b.Z.cancel(t.current),t.current=(0,b.Z)((function(){e.apply(void 0,r)})))}}var h=n(15105);function g(e,t){var n,a=e.prefixCls,o=e.id,c=e.active,l=e.rtl,i=e.tab,s=i.key,f=i.tab,v=i.disabled,p=i.closeIcon,m=e.tabBarGutter,b=e.tabPosition,y=e.closable,E=e.renderWrapper,g=e.removeAriaLabel,C=e.editable,N=e.onClick,x=e.onRemove,O=e.onFocus,w="".concat(a,"-tab");u.useEffect((function(){return x}),[]);var P={};"top"===b||"bottom"===b?P[l?"marginLeft":"marginRight"]=m:P.marginBottom=m;var S=C&&!1!==y&&!v;function T(e){v||N(e)}var Z=u.createElement("div",{key:s,ref:t,className:d()(w,(n={},(0,r.Z)(n,"".concat(w,"-with-remove"),S),(0,r.Z)(n,"".concat(w,"-active"),c),(0,r.Z)(n,"".concat(w,"-disabled"),v),n)),style:P,onClick:T},u.createElement("div",{role:"tab","aria-selected":c,id:o&&"".concat(o,"-tab-").concat(s),className:"".concat(w,"-btn"),"aria-controls":o&&"".concat(o,"-panel-").concat(s),"aria-disabled":v,tabIndex:v?null:0,onClick:function(e){e.stopPropagation(),T(e)},onKeyDown:function(e){[h.Z.SPACE,h.Z.ENTER].includes(e.which)&&(e.preventDefault(),T(e))},onFocus:O},f),S&&u.createElement("button",{type:"button","aria-label":g||"remove",tabIndex:0,className:"".concat(w,"-remove"),onClick:function(e){var t;e.stopPropagation(),(t=e).preventDefault(),t.stopPropagation(),C.onEdit("remove",{key:s,event:t})}},p||C.removeIcon||"×"));return E&&(Z=E(Z)),Z}const C=u.forwardRef(g);var N={width:0,height:0,left:0,top:0};var x={width:0,height:0,left:0,top:0,right:0};var O=n(7186),w=n(43084),P={adjustX:1,adjustY:1},S=[0,0];const T={topLeft:{points:["bl","tl"],overflow:P,offset:[0,-4],targetOffset:S},topCenter:{points:["bc","tc"],overflow:P,offset:[0,-4],targetOffset:S},topRight:{points:["br","tr"],overflow:P,offset:[0,-4],targetOffset:S},bottomLeft:{points:["tl","bl"],overflow:P,offset:[0,4],targetOffset:S},bottomCenter:{points:["tc","bc"],overflow:P,offset:[0,4],targetOffset:S},bottomRight:{points:["tr","br"],overflow:P,offset:[0,4],targetOffset:S}};var Z=h.Z.ESC,_=h.Z.TAB;function M(e){var t=e.visible,n=e.setTriggerVisible,a=e.triggerRef,r=e.menuRef,o=e.onVisibleChange,c=function(){var e,r,c;t&&a.current&&(null===(e=a.current)||void 0===e||null===(r=e.triggerRef)||void 0===r||null===(c=r.current)||void 0===c||c.focus(),n(!1),"function"==typeof o&&o(!1))},l=function(e){switch(e.keyCode){case Z:case _:c()}};u.useEffect((function(){return t?(setTimeout((function(){var e,t;null===(e=r.current)||void 0===e||null===(t=e.focus)||void 0===t||t.call(e),window.addEventListener("keydown",l)}),100),function(){window.removeEventListener("keydown",l)}):function(){return null}}),[t]);return{returnFocus:function(){t&&setTimeout((function(){var e,t,n,r;null===(e=a.current)||void 0===e||null===(t=e.triggerRef)||void 0===t||null===(n=t.current)||void 0===n||null===(r=n.focus)||void 0===r||r.call(n)}),100)}}}var R=n(42550),A=["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger"];function I(e,t){var n=e.arrow,a=void 0!==n&&n,c=e.prefixCls,s=void 0===c?"rc-dropdown":c,f=e.transitionName,v=e.animation,p=e.align,m=e.placement,b=void 0===m?"bottomLeft":m,y=e.placements,E=void 0===y?T:y,h=e.getPopupContainer,g=e.showAction,C=e.hideAction,N=e.overlayClassName,x=e.overlayStyle,O=e.visible,P=e.trigger,S=void 0===P?["hover"]:P,Z=(0,l.Z)(e,A),_=u.useState(),I=(0,o.Z)(_,2),k=I[0],L=I[1],U="visible"in e?O:k,j=u.useRef(null);u.useImperativeHandle(t,(function(){return j.current}));var K,B,F,D,H,W,G=u.useRef(null),V="".concat(s,"-menu"),Y=M({visible:U,setTriggerVisible:L,triggerRef:j,menuRef:G,onVisibleChange:e.onVisibleChange}).returnFocus,Q=function(){var t=e.overlay;return"function"==typeof t?t():t},z=function(t){var n=e.onOverlayClick,a=Q().props;L(!1),n&&n(t),a.onClick&&a.onClick(t),Y()},X=function(){var e=Q(),t=(0,R.sQ)(G,e.ref),n={prefixCls:V,onClick:z,ref:(0,R.Yr)(e)?t:void 0};return"string"==typeof e.type&&delete n.prefixCls,u.createElement(u.Fragment,null,a&&u.createElement("div",{className:"".concat(s,"-arrow")}),u.cloneElement(e,n))},q=C;return q||-1===S.indexOf("contextMenu")||(q=["click"]),u.createElement(w.Z,(0,i.Z)((0,i.Z)({builtinPlacements:E},Z),{},{prefixCls:s,ref:j,popupClassName:d()(N,(0,r.Z)({},"".concat(s,"-show-arrow"),a)),popupStyle:x,action:S,showAction:g,hideAction:q||[],popupPlacement:b,popupAlign:p,popupTransitionName:f,popupAnimation:v,popupVisible:U,stretch:(H=e.minOverlayWidthMatchTrigger,W=e.alignPoint,("minOverlayWidthMatchTrigger"in e?H:!W)?"minWidth":""),popup:"function"==typeof e.overlay?X:X(),onPopupVisibleChange:function(t){var n=e.onVisibleChange;L(t),"function"==typeof n&&n(t)},getPopupContainer:h}),(B=e.children,F=B.props?B.props:{},D=d()(F.className,void 0!==(K=e.openClassName)?K:"".concat(s,"-open")),U&&B?u.cloneElement(B,{className:D}):B))}const k=u.forwardRef(I);function L(e,t){var n=e.prefixCls,a=e.editable,r=e.locale,o=e.style;return a&&!1!==a.showAdd?u.createElement("button",{ref:t,type:"button",className:"".concat(n,"-nav-add"),style:o,"aria-label":(null==r?void 0:r.addAriaLabel)||"Add tab",onClick:function(e){a.onEdit("add",{event:e})}},a.addIcon||"+"):null}const U=u.forwardRef(L);function j(e,t){var n=e.prefixCls,a=e.id,c=e.tabs,l=e.locale,i=e.mobile,s=e.moreIcon,f=void 0===s?"More":s,v=e.moreTransitionName,p=e.style,m=e.className,b=e.editable,y=e.tabBarGutter,E=e.rtl,g=e.onTabClick,C=(0,u.useState)(!1),N=(0,o.Z)(C,2),x=N[0],w=N[1],P=(0,u.useState)(null),S=(0,o.Z)(P,2),T=S[0],Z=S[1],_="".concat(a,"-more-popup"),M="".concat(n,"-dropdown"),R=null!==T?"".concat(_,"-").concat(T):null,A=null==l?void 0:l.dropdownAriaLabel,I=u.createElement(O.default,{onClick:function(e){var t=e.key,n=e.domEvent;g(t,n),w(!1)},id:_,tabIndex:-1,role:"listbox","aria-activedescendant":R,selectedKeys:[T],"aria-label":void 0!==A?A:"expanded dropdown"},c.map((function(e){return u.createElement(O.MenuItem,{key:e.key,id:"".concat(_,"-").concat(e.key),role:"option","aria-controls":a&&"".concat(a,"-panel-").concat(e.key),disabled:e.disabled},e.tab)})));function L(e){for(var t=c.filter((function(e){return!e.disabled})),n=t.findIndex((function(e){return e.key===T}))||0,a=t.length,r=0;r<a;r+=1){var o=t[n=(n+e+a)%a];if(!o.disabled)return void Z(o.key)}}(0,u.useEffect)((function(){var e=document.getElementById(R);e&&e.scrollIntoView&&e.scrollIntoView(!1)}),[T]),(0,u.useEffect)((function(){x||Z(null)}),[x]);var j=(0,r.Z)({},E?"marginLeft":"marginRight",y);c.length||(j.visibility="hidden",j.order=1);var K=d()((0,r.Z)({},"".concat(M,"-rtl"),E)),B=i?null:u.createElement(k,{prefixCls:M,overlay:I,trigger:["hover"],visible:x,transitionName:v,onVisibleChange:w,overlayClassName:K,mouseEnterDelay:.1,mouseLeaveDelay:.1},u.createElement("button",{type:"button",className:"".concat(n,"-nav-more"),style:j,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":_,id:"".concat(a,"-more"),"aria-expanded":x,onKeyDown:function(e){var t=e.which;if(x)switch(t){case h.Z.UP:L(-1),e.preventDefault();break;case h.Z.DOWN:L(1),e.preventDefault();break;case h.Z.ESC:w(!1);break;case h.Z.SPACE:case h.Z.ENTER:null!==T&&g(T,e)}else[h.Z.DOWN,h.Z.SPACE,h.Z.ENTER].includes(t)&&(w(!0),e.preventDefault())}},f));return u.createElement("div",{className:d()("".concat(n,"-nav-operations"),m),style:p,ref:t},B,u.createElement(U,{prefixCls:n,locale:l,editable:b}))}const K=u.forwardRef(j),B=(0,u.createContext)(null);var F=Math.pow(.995,20);function D(e,t){var n=u.useRef(e),a=u.useState({}),r=(0,o.Z)(a,2)[1];return[n.current,function(e){var a="function"==typeof e?e(n.current):e;a!==n.current&&t(a,n.current),n.current=a,r({})}]}var H=function(e){var t,n=e.position,a=e.prefixCls,r=e.extra;if(!r)return null;var o=r;return"right"===n&&(t=o.right||!o.left&&o||null),"left"===n&&(t=o.left||null),t?u.createElement("div",{className:"".concat(a,"-extra-content")},t):null};function W(e,t){var n,c,l=u.useContext(B),s=l.prefixCls,f=l.tabs,v=e.className,p=e.style,h=e.id,g=e.animated,O=e.activeKey,w=e.rtl,P=e.extra,S=e.editable,T=e.locale,Z=e.tabPosition,_=e.tabBarGutter,M=e.children,R=e.onTabClick,A=e.onTabScroll,I=(0,u.useRef)(),k=(0,u.useRef)(),L=(0,u.useRef)(),j=(0,u.useRef)(),W=(c=(0,u.useRef)(new Map),[function(e){return c.current.has(e)||c.current.set(e,u.createRef()),c.current.get(e)},function(e){c.current.delete(e)}]),G=(0,o.Z)(W,2),V=G[0],Y=G[1],Q="top"===Z||"bottom"===Z,z=D(0,(function(e,t){Q&&A&&A({direction:e>t?"left":"right"})})),X=(0,o.Z)(z,2),q=X[0],J=X[1],$=D(0,(function(e,t){!Q&&A&&A({direction:e>t?"top":"bottom"})})),ee=(0,o.Z)($,2),te=ee[0],ne=ee[1],ae=(0,u.useState)(0),re=(0,o.Z)(ae,2),oe=re[0],ce=re[1],le=(0,u.useState)(0),ie=(0,o.Z)(le,2),ue=ie[0],se=ie[1],de=(0,u.useState)(0),fe=(0,o.Z)(de,2),ve=fe[0],pe=fe[1],me=(0,u.useState)(0),be=(0,o.Z)(me,2),ye=be[0],Ee=be[1],he=(0,u.useState)(null),ge=(0,o.Z)(he,2),Ce=ge[0],Ne=ge[1],xe=(0,u.useState)(null),Oe=(0,o.Z)(xe,2),we=Oe[0],Pe=Oe[1],Se=(0,u.useState)(0),Te=(0,o.Z)(Se,2),Ze=Te[0],_e=Te[1],Me=(0,u.useState)(0),Re=(0,o.Z)(Me,2),Ae=Re[0],Ie=Re[1],ke=function(e){var t=(0,u.useRef)([]),n=(0,u.useState)({}),a=(0,o.Z)(n,2)[1],r=(0,u.useRef)("function"==typeof e?e():e),c=E((function(){var e=r.current;t.current.forEach((function(t){e=t(e)})),t.current=[],r.current=e,a({})}));return[r.current,function(e){t.current.push(e),c()}]}(new Map),Le=(0,o.Z)(ke,2),Ue=Le[0],je=Le[1],Ke=function(e,t,n){return(0,u.useMemo)((function(){for(var n,a=new Map,r=t.get(null===(n=e[0])||void 0===n?void 0:n.key)||N,o=r.left+r.width,c=0;c<e.length;c+=1){var l,u=e[c].key,s=t.get(u);s||(s=t.get(null===(l=e[c-1])||void 0===l?void 0:l.key)||N);var d=a.get(u)||(0,i.Z)({},s);d.right=o-d.left-d.width,a.set(u,d)}return a}),[e.map((function(e){return e.key})).join("_"),t,n])}(f,Ue,oe),Be="".concat(s,"-nav-operations-hidden"),Fe=0,De=0;function He(e){return e<Fe?Fe:e>De?De:e}Q?w?(Fe=0,De=Math.max(0,oe-Ce)):(Fe=Math.min(0,Ce-oe),De=0):(Fe=Math.min(0,we-ue),De=0);var We=(0,u.useRef)(),Ge=(0,u.useState)(),Ve=(0,o.Z)(Ge,2),Ye=Ve[0],Qe=Ve[1];function ze(){Qe(Date.now())}function Xe(){window.clearTimeout(We.current)}function qe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=Ke.get(e)||{width:0,height:0,left:0,right:0,top:0};if(Q){var n=q;w?t.right<q?n=t.right:t.right+t.width>q+Ce&&(n=t.right+t.width-Ce):t.left<-q?n=-t.left:t.left+t.width>-q+Ce&&(n=-(t.left+t.width-Ce)),ne(0),J(He(n))}else{var a=te;t.top<-te?a=-t.top:t.top+t.height>-te+we&&(a=-(t.top+t.height-we)),J(0),ne(He(a))}}!function(e,t){var n=(0,u.useState)(),a=(0,o.Z)(n,2),r=a[0],c=a[1],l=(0,u.useState)(0),i=(0,o.Z)(l,2),s=i[0],d=i[1],f=(0,u.useState)(0),v=(0,o.Z)(f,2),p=v[0],m=v[1],b=(0,u.useState)(),y=(0,o.Z)(b,2),E=y[0],h=y[1],g=(0,u.useRef)(),C=(0,u.useRef)(),N=(0,u.useRef)(null);N.current={onTouchStart:function(e){var t=e.touches[0],n=t.screenX,a=t.screenY;c({x:n,y:a}),window.clearInterval(g.current)},onTouchMove:function(e){if(r){e.preventDefault();var n=e.touches[0],a=n.screenX,o=n.screenY;c({x:a,y:o});var l=a-r.x,i=o-r.y;t(l,i);var u=Date.now();d(u),m(u-s),h({x:l,y:i})}},onTouchEnd:function(){if(r&&(c(null),h(null),E)){var e=E.x/p,n=E.y/p,a=Math.abs(e),o=Math.abs(n);if(Math.max(a,o)<.1)return;var l=e,i=n;g.current=window.setInterval((function(){Math.abs(l)<.01&&Math.abs(i)<.01?window.clearInterval(g.current):t(20*(l*=F),20*(i*=F))}),20)}},onWheel:function(e){var n=e.deltaX,a=e.deltaY,r=0,o=Math.abs(n),c=Math.abs(a);o===c?r="x"===C.current?n:a:o>c?(r=n,C.current="x"):(r=a,C.current="y"),t(-r,-r)&&e.preventDefault()}},u.useEffect((function(){function t(e){N.current.onTouchMove(e)}function n(e){N.current.onTouchEnd(e)}return document.addEventListener("touchmove",t,{passive:!1}),document.addEventListener("touchend",n,{passive:!1}),e.current.addEventListener("touchstart",(function(e){N.current.onTouchStart(e)}),{passive:!1}),e.current.addEventListener("wheel",(function(e){N.current.onWheel(e)})),function(){document.removeEventListener("touchmove",t),document.removeEventListener("touchend",n)}}),[])}(I,(function(e,t){function n(e,t){e((function(e){return He(e+t)}))}if(Q){if(Ce>=oe)return!1;n(J,e)}else{if(we>=ue)return!1;n(ne,t)}return Xe(),ze(),!0})),(0,u.useEffect)((function(){return Xe(),Ye&&(We.current=window.setTimeout((function(){Qe(0)}),100)),Xe}),[Ye]);var Je=function(e,t,n,a,r){var o,c,l,i=r.tabs,s=r.tabPosition,d=r.rtl;["top","bottom"].includes(s)?(o="width",c=d?"right":"left",l=Math.abs(t.left)):(o="height",c="top",l=-t.top);var f=t[o],v=n[o],p=a[o],m=f;return v+p>f&&(m=f-p),(0,u.useMemo)((function(){if(!i.length)return[0,0];for(var t=i.length,n=t,a=0;a<t;a+=1){var r=e.get(i[a].key)||x;if(r[c]+r[o]>l+m){n=a-1;break}}for(var u=0,s=t-1;s>=0;s-=1)if((e.get(i[s].key)||x)[c]<l){u=s+1;break}return[u,n]}),[e,l,m,s,i.map((function(e){return e.key})).join("_"),d])}(Ke,{width:Ce,height:we,left:q,top:te},{width:ve,height:ye},{width:Ze,height:Ae},(0,i.Z)((0,i.Z)({},e),{},{tabs:f})),$e=(0,o.Z)(Je,2),et=$e[0],tt=$e[1],nt=f.map((function(e){var t=e.key;return u.createElement(C,{id:h,prefixCls:s,key:t,rtl:w,tab:e,closable:e.closable,editable:S,active:t===O,tabPosition:Z,tabBarGutter:_,renderWrapper:M,removeAriaLabel:null==T?void 0:T.removeAriaLabel,ref:V(t),onClick:function(e){R(t,e)},onRemove:function(){Y(t)},onFocus:function(){qe(t),ze(),w||(I.current.scrollLeft=0),I.current.scrollTop=0}})})),at=E((function(){var e,t,n,a,r,o,c,l,i,u=(null===(e=I.current)||void 0===e?void 0:e.offsetWidth)||0,s=(null===(t=I.current)||void 0===t?void 0:t.offsetHeight)||0,d=(null===(n=j.current)||void 0===n?void 0:n.offsetWidth)||0,v=(null===(a=j.current)||void 0===a?void 0:a.offsetHeight)||0,p=(null===(r=L.current)||void 0===r?void 0:r.offsetWidth)||0,m=(null===(o=L.current)||void 0===o?void 0:o.offsetHeight)||0;Ne(u),Pe(s),_e(d),Ie(v);var b=((null===(c=k.current)||void 0===c?void 0:c.offsetWidth)||0)-d,y=((null===(l=k.current)||void 0===l?void 0:l.offsetHeight)||0)-v;ce(b),se(y);var E=null===(i=L.current)||void 0===i?void 0:i.className.includes(Be);pe(b-(E?0:p)),Ee(y-(E?0:m)),je((function(){var e=new Map;return f.forEach((function(t){var n=t.key,a=V(n).current;a&&e.set(n,{width:a.offsetWidth,height:a.offsetHeight,left:a.offsetLeft,top:a.offsetTop})})),e}))})),rt=f.slice(0,et),ot=f.slice(tt+1),ct=[].concat((0,m.Z)(rt),(0,m.Z)(ot)),lt=(0,u.useState)(),it=(0,o.Z)(lt,2),ut=it[0],st=it[1],dt=Ke.get(O),ft=(0,u.useRef)();function vt(){b.Z.cancel(ft.current)}(0,u.useEffect)((function(){var e={};return dt&&(Q?(w?e.right=dt.right:e.left=dt.left,e.width=dt.width):(e.top=dt.top,e.height=dt.height)),vt(),ft.current=(0,b.Z)((function(){st(e)})),vt}),[dt,Q,w]),(0,u.useEffect)((function(){qe()}),[O,dt,Ke,Q]),(0,u.useEffect)((function(){at()}),[w,_,O,f.map((function(e){return e.key})).join("_")]);var pt,mt,bt,yt,Et=!!ct.length,ht="".concat(s,"-nav-wrap");return Q?w?(mt=q>0,pt=q+Ce<oe):(pt=q<0,mt=-q+Ce<oe):(bt=te<0,yt=-te+we<ue),u.createElement("div",{ref:t,role:"tablist",className:d()("".concat(s,"-nav"),v),style:p,onKeyDown:function(){ze()}},u.createElement(H,{position:"left",extra:P,prefixCls:s}),u.createElement(y.default,{onResize:at},u.createElement("div",{className:d()(ht,(n={},(0,r.Z)(n,"".concat(ht,"-ping-left"),pt),(0,r.Z)(n,"".concat(ht,"-ping-right"),mt),(0,r.Z)(n,"".concat(ht,"-ping-top"),bt),(0,r.Z)(n,"".concat(ht,"-ping-bottom"),yt),n)),ref:I},u.createElement(y.default,{onResize:at},u.createElement("div",{ref:k,className:"".concat(s,"-nav-list"),style:{transform:"translate(".concat(q,"px, ").concat(te,"px)"),transition:Ye?"none":void 0}},nt,u.createElement(U,{ref:j,prefixCls:s,locale:T,editable:S,style:{visibility:Et?"hidden":null}}),u.createElement("div",{className:d()("".concat(s,"-ink-bar"),(0,r.Z)({},"".concat(s,"-ink-bar-animated"),g.inkBar)),style:ut}))))),u.createElement(K,(0,a.Z)({},e,{ref:L,prefixCls:s,tabs:ct,className:!Et&&Be})),u.createElement(H,{position:"right",extra:P,prefixCls:s}))}const G=u.forwardRef(W);function V(e){var t=e.id,n=e.activeKey,a=e.animated,o=e.tabPosition,c=e.rtl,l=e.destroyInactiveTabPane,i=u.useContext(B),s=i.prefixCls,f=i.tabs,v=a.tabPane,p=f.findIndex((function(e){return e.key===n}));return u.createElement("div",{className:d()("".concat(s,"-content-holder"))},u.createElement("div",{className:d()("".concat(s,"-content"),"".concat(s,"-content-").concat(o),(0,r.Z)({},"".concat(s,"-content-animated"),v)),style:p&&v?(0,r.Z)({},c?"marginRight":"marginLeft","-".concat(p,"00%")):null},f.map((function(e){return u.cloneElement(e.node,{key:e.key,prefixCls:s,tabKey:e.key,id:t,animated:v,active:e.key===n,destroyInactiveTabPane:l})}))))}function Y(e){var t=e.prefixCls,n=e.forceRender,a=e.className,r=e.style,c=e.id,l=e.active,s=e.animated,f=e.destroyInactiveTabPane,v=e.tabKey,p=e.children,m=u.useState(n),b=(0,o.Z)(m,2),y=b[0],E=b[1];u.useEffect((function(){l?E(!0):f&&E(!1)}),[l,f]);var h={};return l||(s?(h.visibility="hidden",h.height=0,h.overflowY="hidden"):h.display="none"),u.createElement("div",{id:c&&"".concat(c,"-panel-").concat(v),role:"tabpanel",tabIndex:l?0:-1,"aria-labelledby":c&&"".concat(c,"-tab-").concat(v),"aria-hidden":!l,style:(0,i.Z)((0,i.Z)({},h),r),className:d()("".concat(t,"-tabpane"),l&&"".concat(t,"-tabpane-active"),a)},(l||y||n)&&p)}var Q=0;function z(e,t){var n,s,m=e.id,b=e.prefixCls,y=void 0===b?"rc-tabs":b,E=e.className,h=e.children,g=e.direction,C=e.activeKey,N=e.defaultActiveKey,x=e.editable,O=e.animated,w=void 0===O?{inkBar:!0,tabPane:!1}:O,P=e.tabPosition,S=void 0===P?"top":P,T=e.tabBarGutter,Z=e.tabBarStyle,_=e.tabBarExtraContent,M=e.locale,R=e.moreIcon,A=e.moreTransitionName,I=e.destroyInactiveTabPane,k=e.renderTabBar,L=e.onChange,U=e.onTabClick,j=e.onTabScroll,K=(0,l.Z)(e,["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"]),F=function(e){return(0,f.Z)(e).map((function(e){if(u.isValidElement(e)){var t=void 0!==e.key?String(e.key):void 0;return(0,i.Z)((0,i.Z)({key:t},e.props),{},{node:e})}return null})).filter((function(e){return e}))}(h),D="rtl"===g;s=!1===w?{inkBar:!1,tabPane:!1}:!0===w?{inkBar:!0,tabPane:!0}:(0,i.Z)({inkBar:!0,tabPane:!1},"object"===(0,c.Z)(w)?w:{});var H=(0,u.useState)(!1),W=(0,o.Z)(H,2),Y=W[0],z=W[1];(0,u.useEffect)((function(){z((0,v.Z)())}),[]);var X=(0,p.Z)((function(){var e;return null===(e=F[0])||void 0===e?void 0:e.key}),{value:C,defaultValue:N}),q=(0,o.Z)(X,2),J=q[0],$=q[1],ee=(0,u.useState)((function(){return F.findIndex((function(e){return e.key===J}))})),te=(0,o.Z)(ee,2),ne=te[0],ae=te[1];(0,u.useEffect)((function(){var e,t=F.findIndex((function(e){return e.key===J}));-1===t&&(t=Math.max(0,Math.min(ne,F.length-1)),$(null===(e=F[t])||void 0===e?void 0:e.key));ae(t)}),[F.map((function(e){return e.key})).join("_"),J,ne]);var re=(0,p.Z)(null,{value:m}),oe=(0,o.Z)(re,2),ce=oe[0],le=oe[1],ie=S;Y&&!["left","right"].includes(S)&&(ie="top"),(0,u.useEffect)((function(){m||(le("rc-tabs-".concat(Q)),Q+=1)}),[]);var ue,se={id:ce,activeKey:J,animated:s,tabPosition:ie,rtl:D,mobile:Y},de=(0,i.Z)((0,i.Z)({},se),{},{editable:x,locale:M,moreIcon:R,moreTransitionName:A,tabBarGutter:T,onTabClick:function(e,t){null==U||U(e,t),$(e),null==L||L(e)},onTabScroll:j,extra:_,style:Z,panes:h});return ue=k?k(de,G):u.createElement(G,de),u.createElement(B.Provider,{value:{tabs:F,prefixCls:y}},u.createElement("div",(0,a.Z)({ref:t,id:m,className:d()(y,"".concat(y,"-").concat(ie),(n={},(0,r.Z)(n,"".concat(y,"-mobile"),Y),(0,r.Z)(n,"".concat(y,"-editable"),x),(0,r.Z)(n,"".concat(y,"-rtl"),D),n),E)},K),ue,u.createElement(V,(0,a.Z)({destroyInactiveTabPane:I},se,{animated:s}))))}var X=u.forwardRef(z);X.TabPane=Y;const q=X},15105:(e,t,n)=>{n.d(t,{Z:()=>r});var a={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(e){var t=e.keyCode;if(e.altKey&&!e.ctrlKey||e.metaKey||t>=a.F1&&t<=a.F12)return!1;switch(t){case a.ALT:case a.CAPS_LOCK:case a.CONTEXT_MENU:case a.CTRL:case a.DOWN:case a.END:case a.ESC:case a.HOME:case a.INSERT:case a.LEFT:case a.MAC_FF_META:case a.META:case a.NUMLOCK:case a.NUM_CENTER:case a.PAGE_DOWN:case a.PAGE_UP:case a.PAUSE:case a.PRINT_SCREEN:case a.RIGHT:case a.SHIFT:case a.UP:case a.WIN_KEY:case a.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(e){if(e>=a.ZERO&&e<=a.NINE)return!0;if(e>=a.NUM_ZERO&&e<=a.NUM_MULTIPLY)return!0;if(e>=a.A&&e<=a.Z)return!0;if(-1!==window.navigator.userAgent.indexOf("WebKit")&&0===e)return!0;switch(e){case a.SPACE:case a.QUESTION_MARK:case a.NUM_PLUS:case a.NUM_MINUS:case a.NUM_PERIOD:case a.NUM_DIVISION:case a.SEMICOLON:case a.DASH:case a.EQUALS:case a.COMMA:case a.PERIOD:case a.SLASH:case a.APOSTROPHE:case a.SINGLE_QUOTE:case a.OPEN_SQUARE_BRACKET:case a.BACKSLASH:case a.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}};const r=a},21770:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(29439),r=n(24328),o=n(30470);function c(e,t){var n=t||{},c=n.defaultValue,l=n.value,i=n.onChange,u=n.postState,s=(0,o.Z)((function(){return void 0!==l?l:void 0!==c?"function"==typeof c?c():c:"function"==typeof e?e():e})),d=(0,a.Z)(s,2),f=d[0],v=d[1],p=void 0!==l?l:f;u&&(p=u(p));var m=r.useRef(i);m.current=i;var b=r.useCallback((function(e,t){v(e,t),p!==e&&m.current&&m.current(e,p)}),[p,m]),y=r.useRef(!0);return r.useEffect((function(){y.current?y.current=!1:void 0===l&&v(l)}),[l]),[p,b]}}}]);