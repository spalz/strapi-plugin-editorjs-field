"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const k=require("./index-3b3913b7.js"),B=require("@strapi/design-system"),De=require("react-intl"),O=require("react"),D=require("@strapi/helper-plugin");require("react-dom");const Fe=require("react-editor-js"),Ne=require("@editorjs/checklist"),qe=require("@editorjs/code"),je=require("@editorjs/delimiter"),Ve=require("@editorjs/embed"),ze=require("@editorjs/header"),Ye=require("@editorjs/inline-code"),Be=require("@editorjs/link"),He=require("@editorjs/list"),Ue=require("@editorjs/marker"),We=require("@editorjs/quote"),Ge=require("@editorjs/raw"),Ke=require("@editorjs/table"),Je=require("@editorjs/warning"),Xe=require("editorjs-component-selector"),Qe=require("@editorjs/attaches"),Ze=require("@editorjs/image"),_e=require("axios"),et=require("styled-components");function tt(e){const t=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const n in e)if(n!=="default"){const a=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,a.get?a:{enumerable:!0,get:()=>e[n]})}}return t.default=e,Object.freeze(t)}const rt=tt(O);var fe={exports:{}},ce={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ve;function ot(){if(ve)return ce;ve=1;var e=O;function t(i,m){return i===m&&(i!==0||1/i===1/m)||i!==i&&m!==m}var n=typeof Object.is=="function"?Object.is:t,a=e.useState,s=e.useEffect,f=e.useLayoutEffect,p=e.useDebugValue;function E(i,m){var _=m(),y=a({inst:{value:_,getSnapshot:m}}),h=y[0].inst,o=y[1];return f(function(){h.value=_,h.getSnapshot=m,x(h)&&o({inst:h})},[i,_,m]),s(function(){return x(h)&&o({inst:h}),i(function(){x(h)&&o({inst:h})})},[i]),p(_),_}function x(i){var m=i.getSnapshot;i=i.value;try{var _=m();return!n(i,_)}catch{return!0}}function v(i,m){return m()}var d=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?v:E;return ce.useSyncExternalStore=e.useSyncExternalStore!==void 0?e.useSyncExternalStore:d,ce}var ue={};/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ee;function nt(){return Ee||(Ee=1,process.env.NODE_ENV!=="production"&&function(){typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error);var e=O,t=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function n(S){{for(var c=arguments.length,r=new Array(c>1?c-1:0),b=1;b<c;b++)r[b-1]=arguments[b];a("error",S,r)}}function a(S,c,r){{var b=t.ReactDebugCurrentFrame,$=b.getStackAddendum();$!==""&&(c+="%s",r=r.concat([$]));var A=r.map(function(L){return String(L)});A.unshift("Warning: "+c),Function.prototype.apply.call(console[S],console,A)}}function s(S,c){return S===c&&(S!==0||1/S===1/c)||S!==S&&c!==c}var f=typeof Object.is=="function"?Object.is:s,p=e.useState,E=e.useEffect,x=e.useLayoutEffect,v=e.useDebugValue,d=!1,i=!1;function m(S,c,r){d||e.startTransition!==void 0&&(d=!0,n("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));var b=c();if(!i){var $=c();f(b,$)||(n("The result of getSnapshot should be cached to avoid an infinite loop"),i=!0)}var A=p({inst:{value:b,getSnapshot:c}}),L=A[0].inst,P=A[1];return x(function(){L.value=b,L.getSnapshot=c,_(L)&&P({inst:L})},[S,b,c]),E(function(){_(L)&&P({inst:L});var F=function(){_(L)&&P({inst:L})};return S(F)},[S]),v(b),b}function _(S){var c=S.getSnapshot,r=S.value;try{var b=c();return!f(r,b)}catch{return!0}}function y(S,c,r){return c()}var h=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",o=!h,w=o?y:m,M=e.useSyncExternalStore!==void 0?e.useSyncExternalStore:w;ue.useSyncExternalStore=M,typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error)}()),ue}process.env.NODE_ENV==="production"?fe.exports=ot():fe.exports=nt();var Ae=fe.exports,me={exports:{}},le={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ye;function at(){if(ye)return le;ye=1;var e=O,t=Ae;function n(v,d){return v===d&&(v!==0||1/v===1/d)||v!==v&&d!==d}var a=typeof Object.is=="function"?Object.is:n,s=t.useSyncExternalStore,f=e.useRef,p=e.useEffect,E=e.useMemo,x=e.useDebugValue;return le.useSyncExternalStoreWithSelector=function(v,d,i,m,_){var y=f(null);if(y.current===null){var h={hasValue:!1,value:null};y.current=h}else h=y.current;y=E(function(){function w(b){if(!M){if(M=!0,S=b,b=m(b),_!==void 0&&h.hasValue){var $=h.value;if(_($,b))return c=$}return c=b}if($=c,a(S,b))return $;var A=m(b);return _!==void 0&&_($,A)?$:(S=b,c=A)}var M=!1,S,c,r=i===void 0?null:i;return[function(){return w(d())},r===null?void 0:function(){return w(r())}]},[d,i,m,_]);var o=s(v,y[0],y[1]);return p(function(){h.hasValue=!0,h.value=o},[o]),x(o),o},le}var de={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var be;function it(){return be||(be=1,process.env.NODE_ENV!=="production"&&function(){typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error);var e=O,t=Ae;function n(d,i){return d===i&&(d!==0||1/d===1/i)||d!==d&&i!==i}var a=typeof Object.is=="function"?Object.is:n,s=t.useSyncExternalStore,f=e.useRef,p=e.useEffect,E=e.useMemo,x=e.useDebugValue;function v(d,i,m,_,y){var h=f(null),o;h.current===null?(o={hasValue:!1,value:null},h.current=o):o=h.current;var w=E(function(){var r=!1,b,$,A=function(I){if(!r){r=!0,b=I;var N=_(I);if(y!==void 0&&o.hasValue){var q=o.value;if(y(q,N))return $=q,q}return $=N,N}var H=b,j=$;if(a(H,I))return j;var V=_(I);return y!==void 0&&y(j,V)?j:(b=I,$=V,V)},L=m===void 0?null:m,P=function(){return A(i())},F=L===null?void 0:function(){return A(L())};return[P,F]},[i,m,_,y]),M=w[0],S=w[1],c=s(d,M,S);return p(function(){o.hasValue=!0,o.value=c},[c]),x(c),c}de.useSyncExternalStoreWithSelector=v,typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error)}()),de}process.env.NODE_ENV==="production"?me.exports=at():me.exports=it();var st=me.exports;const xe=Symbol.for(`react-redux-context-${O.version}`),ge=globalThis;function ct(){let e=ge[xe];return e||(e=O.createContext(null),process.env.NODE_ENV!=="production"&&(e.displayName="ReactRedux"),ge[xe]=e),e}const z=new Proxy({},new Proxy({},{get(e,t){const n=ct();return(a,...s)=>Reflect[t](n,...s)}}));function Se(e=z){return function(){const n=O.useContext(e);if(process.env.NODE_ENV!=="production"&&!n)throw new Error("could not find react-redux context value; please ensure the component is wrapped in a <Provider>");return n}}const ke=Se(),ut=()=>{throw new Error("uSES not initialized!")};let Le=ut;const lt=e=>{Le=e},dt=(e,t)=>e===t;function ft(e=z){const t=e===z?ke:Se(e);return function(a,s={}){const{equalityFn:f=dt,stabilityCheck:p=void 0,noopCheck:E=void 0}=typeof s=="function"?{equalityFn:s}:s;if(process.env.NODE_ENV!=="production"){if(!a)throw new Error("You must pass a selector to useSelector");if(typeof a!="function")throw new Error("You must pass a function as a selector to useSelector");if(typeof f!="function")throw new Error("You must pass a function as an equality function to useSelector")}const{store:x,subscription:v,getServerState:d,stabilityCheck:i,noopCheck:m}=t(),_=O.useRef(!0),y=O.useCallback({[a.name](o){const w=a(o);if(process.env.NODE_ENV!=="production"){const M=typeof p>"u"?i:p;if(M==="always"||M==="once"&&_.current){const c=a(o);f(w,c)||console.warn("Selector "+(a.name||"unknown")+` returned a different result when called with the same parameters. This can lead to unnecessary rerenders.
Selectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization`,{state:o,selected:w,selected2:c})}const S=typeof E>"u"?m:E;(S==="always"||S==="once"&&_.current)&&w===o&&console.warn("Selector "+(a.name||"unknown")+` returned the root state when called. This can lead to unnecessary rerenders.
Selectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.`),_.current&&(_.current=!1)}return w}}[a.name],[a,i,p]),h=Le(v.addNestedSub,x.getState,d||x.getState,y,f);return O.useDebugValue(h),h}}const mt=ft();var pe={exports:{}},g={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ce;function pt(){if(Ce)return g;Ce=1;var e=typeof Symbol=="function"&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,a=e?Symbol.for("react.fragment"):60107,s=e?Symbol.for("react.strict_mode"):60108,f=e?Symbol.for("react.profiler"):60114,p=e?Symbol.for("react.provider"):60109,E=e?Symbol.for("react.context"):60110,x=e?Symbol.for("react.async_mode"):60111,v=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,i=e?Symbol.for("react.suspense"):60113,m=e?Symbol.for("react.suspense_list"):60120,_=e?Symbol.for("react.memo"):60115,y=e?Symbol.for("react.lazy"):60116,h=e?Symbol.for("react.block"):60121,o=e?Symbol.for("react.fundamental"):60117,w=e?Symbol.for("react.responder"):60118,M=e?Symbol.for("react.scope"):60119;function S(r){if(typeof r=="object"&&r!==null){var b=r.$$typeof;switch(b){case t:switch(r=r.type,r){case x:case v:case a:case f:case s:case i:return r;default:switch(r=r&&r.$$typeof,r){case E:case d:case y:case _:case p:return r;default:return b}}case n:return b}}}function c(r){return S(r)===v}return g.AsyncMode=x,g.ConcurrentMode=v,g.ContextConsumer=E,g.ContextProvider=p,g.Element=t,g.ForwardRef=d,g.Fragment=a,g.Lazy=y,g.Memo=_,g.Portal=n,g.Profiler=f,g.StrictMode=s,g.Suspense=i,g.isAsyncMode=function(r){return c(r)||S(r)===x},g.isConcurrentMode=c,g.isContextConsumer=function(r){return S(r)===E},g.isContextProvider=function(r){return S(r)===p},g.isElement=function(r){return typeof r=="object"&&r!==null&&r.$$typeof===t},g.isForwardRef=function(r){return S(r)===d},g.isFragment=function(r){return S(r)===a},g.isLazy=function(r){return S(r)===y},g.isMemo=function(r){return S(r)===_},g.isPortal=function(r){return S(r)===n},g.isProfiler=function(r){return S(r)===f},g.isStrictMode=function(r){return S(r)===s},g.isSuspense=function(r){return S(r)===i},g.isValidElementType=function(r){return typeof r=="string"||typeof r=="function"||r===a||r===v||r===f||r===s||r===i||r===m||typeof r=="object"&&r!==null&&(r.$$typeof===y||r.$$typeof===_||r.$$typeof===p||r.$$typeof===E||r.$$typeof===d||r.$$typeof===o||r.$$typeof===w||r.$$typeof===M||r.$$typeof===h)},g.typeOf=S,g}var C={};/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Re;function St(){return Re||(Re=1,process.env.NODE_ENV!=="production"&&function(){var e=typeof Symbol=="function"&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,a=e?Symbol.for("react.fragment"):60107,s=e?Symbol.for("react.strict_mode"):60108,f=e?Symbol.for("react.profiler"):60114,p=e?Symbol.for("react.provider"):60109,E=e?Symbol.for("react.context"):60110,x=e?Symbol.for("react.async_mode"):60111,v=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,i=e?Symbol.for("react.suspense"):60113,m=e?Symbol.for("react.suspense_list"):60120,_=e?Symbol.for("react.memo"):60115,y=e?Symbol.for("react.lazy"):60116,h=e?Symbol.for("react.block"):60121,o=e?Symbol.for("react.fundamental"):60117,w=e?Symbol.for("react.responder"):60118,M=e?Symbol.for("react.scope"):60119;function S(u){return typeof u=="string"||typeof u=="function"||u===a||u===v||u===f||u===s||u===i||u===m||typeof u=="object"&&u!==null&&(u.$$typeof===y||u.$$typeof===_||u.$$typeof===p||u.$$typeof===E||u.$$typeof===d||u.$$typeof===o||u.$$typeof===w||u.$$typeof===M||u.$$typeof===h)}function c(u){if(typeof u=="object"&&u!==null){var W=u.$$typeof;switch(W){case t:var l=u.type;switch(l){case x:case v:case a:case f:case s:case i:return l;default:var Y=l&&l.$$typeof;switch(Y){case E:case d:case y:case _:case p:return Y;default:return W}}case n:return W}}}var r=x,b=v,$=E,A=p,L=t,P=d,F=a,I=y,N=_,q=n,H=f,j=s,V=i,U=!1;function G(u){return U||(U=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),K(u)||c(u)===x}function K(u){return c(u)===v}function X(u){return c(u)===E}function Q(u){return c(u)===p}function Z(u){return typeof u=="object"&&u!==null&&u.$$typeof===t}function ee(u){return c(u)===d}function te(u){return c(u)===a}function re(u){return c(u)===y}function oe(u){return c(u)===_}function ne(u){return c(u)===n}function ae(u){return c(u)===f}function ie(u){return c(u)===s}function se(u){return c(u)===i}C.AsyncMode=r,C.ConcurrentMode=b,C.ContextConsumer=$,C.ContextProvider=A,C.Element=L,C.ForwardRef=P,C.Fragment=F,C.Lazy=I,C.Memo=N,C.Portal=q,C.Profiler=H,C.StrictMode=j,C.Suspense=V,C.isAsyncMode=G,C.isConcurrentMode=K,C.isContextConsumer=X,C.isContextProvider=Q,C.isElement=Z,C.isForwardRef=ee,C.isFragment=te,C.isLazy=re,C.isMemo=oe,C.isPortal=ne,C.isProfiler=ae,C.isStrictMode=ie,C.isSuspense=se,C.isValidElementType=S,C.typeOf=c}()),C}process.env.NODE_ENV==="production"?pe.exports=pt():pe.exports=St();var ht=pe.exports,Me=ht,_t={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},vt={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Pe={};Pe[Me.ForwardRef]=_t;Pe[Me.Memo]=vt;var R={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Te;function Et(){if(Te)return R;Te=1;var e=Symbol.for("react.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),f=Symbol.for("react.provider"),p=Symbol.for("react.context"),E=Symbol.for("react.server_context"),x=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),i=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),_=Symbol.for("react.offscreen"),y;y=Symbol.for("react.module.reference");function h(o){if(typeof o=="object"&&o!==null){var w=o.$$typeof;switch(w){case e:switch(o=o.type,o){case n:case s:case a:case v:case d:return o;default:switch(o=o&&o.$$typeof,o){case E:case p:case x:case m:case i:case f:return o;default:return w}}case t:return w}}}return R.ContextConsumer=p,R.ContextProvider=f,R.Element=e,R.ForwardRef=x,R.Fragment=n,R.Lazy=m,R.Memo=i,R.Portal=t,R.Profiler=s,R.StrictMode=a,R.Suspense=v,R.SuspenseList=d,R.isAsyncMode=function(){return!1},R.isConcurrentMode=function(){return!1},R.isContextConsumer=function(o){return h(o)===p},R.isContextProvider=function(o){return h(o)===f},R.isElement=function(o){return typeof o=="object"&&o!==null&&o.$$typeof===e},R.isForwardRef=function(o){return h(o)===x},R.isFragment=function(o){return h(o)===n},R.isLazy=function(o){return h(o)===m},R.isMemo=function(o){return h(o)===i},R.isPortal=function(o){return h(o)===t},R.isProfiler=function(o){return h(o)===s},R.isStrictMode=function(o){return h(o)===a},R.isSuspense=function(o){return h(o)===v},R.isSuspenseList=function(o){return h(o)===d},R.isValidElementType=function(o){return typeof o=="string"||typeof o=="function"||o===n||o===s||o===a||o===v||o===d||o===_||typeof o=="object"&&o!==null&&(o.$$typeof===m||o.$$typeof===i||o.$$typeof===f||o.$$typeof===p||o.$$typeof===x||o.$$typeof===y||o.getModuleId!==void 0)},R.typeOf=h,R}var T={};/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var we;function yt(){return we||(we=1,process.env.NODE_ENV!=="production"&&function(){var e=Symbol.for("react.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),f=Symbol.for("react.provider"),p=Symbol.for("react.context"),E=Symbol.for("react.server_context"),x=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),i=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),_=Symbol.for("react.offscreen"),y=!1,h=!1,o=!1,w=!1,M=!1,S;S=Symbol.for("react.module.reference");function c(l){return!!(typeof l=="string"||typeof l=="function"||l===n||l===s||M||l===a||l===v||l===d||w||l===_||y||h||o||typeof l=="object"&&l!==null&&(l.$$typeof===m||l.$$typeof===i||l.$$typeof===f||l.$$typeof===p||l.$$typeof===x||l.$$typeof===S||l.getModuleId!==void 0))}function r(l){if(typeof l=="object"&&l!==null){var Y=l.$$typeof;switch(Y){case e:var J=l.type;switch(J){case n:case s:case a:case v:case d:return J;default:var he=J&&J.$$typeof;switch(he){case E:case p:case x:case m:case i:case f:return he;default:return Y}}case t:return Y}}}var b=p,$=f,A=e,L=x,P=n,F=m,I=i,N=t,q=s,H=a,j=v,V=d,U=!1,G=!1;function K(l){return U||(U=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")),!1}function X(l){return G||(G=!0,console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")),!1}function Q(l){return r(l)===p}function Z(l){return r(l)===f}function ee(l){return typeof l=="object"&&l!==null&&l.$$typeof===e}function te(l){return r(l)===x}function re(l){return r(l)===n}function oe(l){return r(l)===m}function ne(l){return r(l)===i}function ae(l){return r(l)===t}function ie(l){return r(l)===s}function se(l){return r(l)===a}function u(l){return r(l)===v}function W(l){return r(l)===d}T.ContextConsumer=b,T.ContextProvider=$,T.Element=A,T.ForwardRef=L,T.Fragment=P,T.Lazy=F,T.Memo=I,T.Portal=N,T.Profiler=q,T.StrictMode=H,T.Suspense=j,T.SuspenseList=V,T.isAsyncMode=K,T.isConcurrentMode=X,T.isContextConsumer=Q,T.isContextProvider=Z,T.isElement=ee,T.isForwardRef=te,T.isFragment=re,T.isLazy=oe,T.isMemo=ne,T.isPortal=ae,T.isProfiler=ie,T.isStrictMode=se,T.isSuspense=u,T.isSuspenseList=W,T.isValidElementType=c,T.typeOf=r}()),T}process.env.NODE_ENV==="production"?Et():yt();function Ie(e=z){const t=e===z?ke:Se(e);return function(){const{store:a}=t();return a}}const bt=Ie();function xt(e=z){const t=e===z?bt:Ie(e);return function(){return t().dispatch}}const gt=xt();lt(st.useSyncExternalStoreWithSelector);const Ct=()=>{const e=gt(),t=D.useNotification(),{config:n,isLoading:a}=mt(s=>s[`${k.pluginId}_config`]);return O.useEffect(()=>{if(!a&&n)return;const s=new AbortController;return(async()=>{try{const p=`/${k.pluginId}/config`;return await D.request(p,{method:"GET",signal:s.signal})??{}}catch(p){if(!s.signal.aborted)return t({type:"warning",message:{id:"notification.error"}}),p}})().then(p=>e({type:k.RESOLVE_CONFIG,data:p})),()=>s.abort()},[e,t]),{config:n,isLoading:a}},Rt=(e,t)=>({...e.header?{header:{class:ze,...t.header?t.header:{}}}:{},...e.list?{list:{class:He,...t.list?t.list:{}}}:{},...e.checklist?{checklist:{class:Ne,...t.checklist?t.checklist:{}}}:{},...e.embed?{embed:{class:Ve,...t.embed?t.embed:{}}}:{},...e.table?{table:{class:Ke,...t.table?t.table:{}}}:{},...e.warning?{warning:{class:Je,...t.warning?t.warning:{}}}:{},...e.code?{code:{class:qe,...t.code?t.code:{}}}:{},...e.link_tool?{link_tool:{class:Be,...t.link_tool?t.link_tool:{}}}:{},...e.raw?{raw:{class:Ge,...t.raw?t.raw:{}}}:{},...e.quote?{quote:{class:We,...t.quote?t.quote:{}}}:{},...e.marker?{marker:{class:Ue,...t.marker?t.marker:{}}}:{},...e.delimiter?{delimiter:{class:je,...t.delimiter?t.delimiter:{}}}:{},...e.inlineCode?{inlineCode:{class:Ye,...t.inlineCode?t.inlineCode:{}}}:{},...e.component?{component:{class:Xe,...t.component?t.component:{}}}:{}}),Tt={image:{class:Ze,config:{field:"files.image",additionalRequestData:{data:JSON.stringify({})},additionalRequestHeaders:{Authorization:`Bearer ${D.auth.getToken()}`},endpoints:{byUrl:`/api/${k.pluginId}/image/byUrl`},uploader:{async uploadByFile(e){const t=new FormData;t.append("data",JSON.stringify({})),t.append("files.image",e);const{data:n}=await _e.post(`/api/${k.pluginId}/image/byFile`,t,{headers:{Authorization:`Bearer ${D.auth.getToken()}`}});return n}}}},attaches:{class:Qe,config:{field:"files.image",additionalRequestData:{data:JSON.stringify({})},additionalRequestHeaders:{Authorization:`Bearer ${D.auth.getToken()}`},endpoints:{byUrl:`/api/${k.pluginId}/image/byUrl`},uploader:{async uploadByFile(e){const t=new FormData;t.append("data",JSON.stringify({})),t.append("files.image",e);const{data:n}=await _e.post(`/api/${k.pluginId}/image/byFile`,t,{headers:{Authorization:`Bearer ${D.auth.getToken()}`}});return n}}}}};class wt{api;config;static get toolbox(){return{title:"Image",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"></rect><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.13968 15.32L8.69058 11.5661C9.02934 11.2036 9.48873 11 9.96774 11C10.4467 11 10.9061 11.2036 11.2449 11.5661L15.3871 16M13.5806 14.0664L15.0132 12.533C15.3519 12.1705 15.8113 11.9668 16.2903 11.9668C16.7693 11.9668 17.2287 12.1705 17.5675 12.533L18.841 13.9634"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.7778 9.33331H13.7867"></path></svg>'}}constructor({api:t,config:n}){this.api=t,this.config=n||{}}render(){const t=this.api.blocks.getCurrentBlockIndex();return this.config.mediaLibToggleFunc&&this.config.mediaLibToggleFunc(t),document.createElement("p")}save(){return{name:"mediaLibraryStrapi"}}}class $t{api;config;static get toolbox(){return{title:"Attachment",icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.3236 8.43554L9.49533 12.1908C9.13119 12.5505 8.93118 13.043 8.9393 13.5598C8.94741 14.0767 9.163 14.5757 9.53862 14.947C9.91424 15.3182 10.4191 15.5314 10.9422 15.5397C11.4653 15.5479 11.9637 15.3504 12.3279 14.9908L16.1562 11.2355C16.8845 10.5161 17.2845 9.53123 17.2682 8.4975C17.252 7.46376 16.8208 6.46583 16.0696 5.72324C15.3184 4.98066 14.3086 4.55425 13.2624 4.53782C12.2162 4.52138 11.2193 4.91627 10.4911 5.63562L6.66277 9.39093C5.57035 10.4699 4.97032 11.9473 4.99467 13.4979C5.01903 15.0485 5.66578 16.5454 6.79264 17.6592C7.9195 18.7731 9.43417 19.4127 11.0034 19.4374C12.5727 19.462 14.068 18.8697 15.1604 17.7907L18.9887 14.0354"></path></svg>'}}constructor({api:t,config:n}){this.api=t,this.config=n||{}}render(){const t=this.api.blocks.getCurrentBlockIndex();return this.config.mediaLibAttachesToggleFunc&&this.config.mediaLibAttachesToggleFunc(t),document.createElement("p")}save(){return{name:"mediaLibraryAttachesStrapi"}}}const $e=({isOpen:e,onChange:t,onToggle:n,allowedTypes:a})=>{const{components:s}=D.useLibrary(),[f,p]=rt.useState(null),E=s["media-library"],x=d=>{d&&p(d)},v=d=>{const i=d.map(m=>({alt:m.alternativeText||m.name,url:D.prefixFileUrlWithBackendUrl(m.url),width:m.width,height:m.height,size:m.size,mime:m.mime,formats:m.formats}));t(i)};return e?k.jsxRuntimeExports.jsx(E,{allowedTypes:a,onClose:n,onInputMediaChange:x,onSelectAssets:v}):null},Oe=({openStateSetter:e,indexStateSetter:t})=>n=>{(n||n===0)&&t(n),e(a=>!a)},Ot=({indexStateSetter:e,editor:t,data:n,index:a})=>{let s=0;n.forEach(f=>{if(!f.mime.includes("image"))return;const p="image",E={file:{url:f.url.replace(window.location.origin,""),mime:f.mime,height:f.height,width:f.width,size:f.size,alt:f.alt,formats:f.formats},caption:"",withBorder:!1,withBackground:!1,stretched:!1};t.blocks.insert(p,E,{},a+s,!0),s++}),t.blocks.delete(a+s),e(-1)},At=({indexStateSetter:e,editor:t,data:n,index:a})=>{let s=0;n.forEach(f=>{const p="attaches",E={file:{url:f.url.replace(window.location.origin,""),size:f.size*1024,name:f.name,extension:f.ext},title:f.alt};t.blocks.insert(p,E,{},a+s,!0),s++}),t.blocks.delete(a+s),e(-1)},kt=({onChange:e,name:t,value:n,attribute:a,config:s,placeholder:f})=>{const p=Fe.createReactEditorJS(),[E,x]=O.useState(),[v,d]=O.useState(-1),[i,m]=O.useState(!1),[_,y]=O.useState(-1),[h,o]=O.useState(!1),w=O.useCallback(Oe({openStateSetter:m,indexStateSetter:d}),[]),M=O.useCallback(Oe({openStateSetter:o,indexStateSetter:y}),[]),S=O.useCallback(A=>{Ot({indexStateSetter:d,data:A,index:v,editor:E}),w(v)},[v,E]),c=O.useCallback(A=>{At({indexStateSetter:y,data:A,index:_,editor:E}),M(_)},[_,E]),r={...a?.options?.image?{mediaLib:{class:wt,config:{mediaLibToggleFunc:w}}}:{},...a?.options?.attaches?{mediaLibAttaches:{class:$t,config:{mediaLibAttachesToggleFunc:M}}}:{}},b=D.useQueryParams(),$=O.useRef(0);return O.useEffect(()=>{$.current=$?.current+1},[b]),k.jsxRuntimeExports.jsxs(k.jsxRuntimeExports.Fragment,{children:[k.jsxRuntimeExports.jsx(p,{holder:`editorjs${t}`,defaultValue:n?JSON.parse(n):void 0,onReady:()=>{document?.querySelector('[data-item-name="image"]')?.remove(),document?.querySelector('[data-item-name="attaches"]')?.remove()},tools:{...Tt,...Rt(a.options,s),...r},placeholder:f?.defaultMessage,onChange:A=>{x(A),A.saver.save().then(L=>{L?.blocks?.length>0?e({target:{name:t,value:JSON.stringify(L),type:"string"}}):e({target:{name:t,value:null,type:"string"}})})},minHeight:s.minHeight?s.minHeight:80},`editorjs${$.current}`),k.jsxRuntimeExports.jsx($e,{isOpen:i,onChange:S,onToggle:w,allowedTypes:["images"]}),k.jsxRuntimeExports.jsx($e,{isOpen:h,onChange:c,onToggle:M,allowedTypes:["files"]})]})},Lt=et(B.Box)`
  .codex-editor__redactor {
    color: ${({theme:e})=>e.colors.neutral800};
  }
  .ce-toolbox__button {
    color: ${({theme:e})=>e.colors.neutral800};
    &:hover {
      color: ${({theme:e})=>e.colors.neutral150};
      background-color: ${({theme:e})=>e.colors.neutral900};
    }
  }
  .ce-toolbar__plus,
  .ce-toolbar__settings-btn {
    color: ${({theme:e})=>e.colors.neutral800};
    background-color: ${({theme:e})=>e.colors.neutral100};
    &:hover {
      color: ${({theme:e})=>e.colors.neutral150};
      background-color: ${({theme:e})=>e.colors.neutral900};
    }
  }
  .codex-editor {
    border: 1px solid ${({theme:e})=>e.colors.neutral200};
    border-radius: ${({theme:e})=>e.borderRadius};
    background: ${({theme:e})=>e.colors.neutral0};
  }
  &.error .codex-editor {
    border-color: ${({theme:e})=>e.colors.danger700};
  }
  .ce-block--selected {
    .ce-block__content {
      background: ${({theme:e})=>e.colors.neutral100};
    }
  }

  .cdx-input {
    border: 1px solid ${({theme:e})=>e.colors.neutral200};
    border-radius: ${({theme:e})=>e.borderRadius};
    color: ${({theme:e})=>e.colors.neutral800};
    line-height: 1.6;
    ::placeholder {
      color: ${({theme:e})=>e.colors.neutral500};
      opacity: 1;
    }
    &:focus-within,
    &:focus {
      border: 1px solid ${({theme:e})=>e.colors.primary600};
      box-shadow: ${({theme:e})=>e.colors.primary600} 0px 0px 0px 2px;
    }
  }

  .codex-editor {
    padding: 16px;
    font-size: 1rem;
    a {
      color: ${({theme:e})=>e.colors.secondary500};
      &:hover {
        color: ${({theme:e})=>e.colors.secondary700};
      }
    }
  }
  *:focus-visible {
    outline: none;
  }
  mark {
    background-color: #e9ddf6;
    padding: 0 0.2em;
    border-radius: 2px;
    font-weight: 600;
  }
  code {
    background-color: #d9f6f0;
    padding: 0 0.2em;
    border-radius: 2px;
    font-weight: 600;
  }
  .ce-header {
    color: ${({theme:e})=>e.colors.neutral800};
  }
  h1 {
    font-size: 2.5rem;
    font-weight: bold;
  }
  h2 {
    font-size: 1.5em;
    font-weight: bold;
  }
  h3 {
    font-size: 1.17em;
    font-weight: bold;
  }
  h4 {
    font-size: 1em;
    font-weight: bold;
  }
  h5 {
    font-size: 0.83em;
    font-weight: bold;
  }
  h6 {
    font-size: 0.67em;
    font-weight: bold;
  }
  label {
    display: block;
  }
  &.bordered {
    .editorWrapper {
      border-color: red;
    }
  }
  > div + p {
    width: 100%;
    padding-top: 12px;
    font-size: 1.2rem;
    line-height: normal;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: -9px;
  }
  div,
  pre,
  code {
    ::-webkit-scrollbar {
      height: 5px;
      width: 5px;
      cursor: default;
    }
  }
  .cdx-input.image-tool__caption {
    font-size: 0.9rem;
    line-height: 1.5;
  }
  .Box {
    display: flex;
  }
  .ToggleShow {
    margin-left: auto;
    font-size: 14px;
  }

  // * attachement styles
  .cdx-attaches {
    &.cdx-attaches--with-file {
      background: ${({theme:e})=>e.colors.neutral0};
      border: 1px solid ${({theme:e})=>e.colors.neutral200};
      .cdx-attaches__title {
        color: ${({theme:e})=>e.colors.neutral800};
      }
      .cdx-attaches__size {
        color: ${({theme:e})=>e.colors.neutral500};
      }
      .cdx-attaches__download-button {
        background: ${({theme:e})=>e.colors.neutral100};
        color: ${({theme:e})=>e.colors.neutral800};
      }
    }
  }

  // * link-tool styles
  .link-tool {
    .link-tool__content {
      border: 1px solid ${({theme:e})=>e.colors.neutral200};
      border-radius: ${({theme:e})=>e.borderRadius};
      box-shadow: none;
      background: transparent;
      color: ${({theme:e})=>e.colors.neutral800}!important;
      transition: none;
      transition: all 0.05s ease-in-out;
      .link-tool__title {
        transition: all 0.05s ease-in-out;
      }
      &:hover {
        outline: ${({theme:e})=>e.colors.primary500} solid 2px;
        border-color: ${({theme:e})=>e.colors.primary500};
        .link-tool__title {
          color: ${({theme:e})=>e.colors.primary500}!important;
        }
      }
      .link-tool__anchor {
        color: ${({theme:e})=>e.colors.neutral700};
      }
    }
    .link-tool__progress {
      border: 1px solid ${({theme:e})=>e.colors.neutral200};
      border-radius: ${({theme:e})=>e.borderRadius};
      box-shadow: none;
      background: transparent;
    }
  }

  .cdx-quote {
    .cdx-quote__text {
      line-height: 1.6;
    }
    .cdx-quote__caption {
    }
  }

  .cdx-checklist {
    .cdx-checklist__item {
      .cdx-checklist__item-text {
        line-height: 1.5;
      }
    }
    .cdx-checklist__item--checked {
      .cdx-checklist__item-checkbox-check {
        background: ${({theme:e})=>e.colors.primary500};
        border-color: ${({theme:e})=>e.colors.primary500};
      }
    }
  }

  .cdx-warning {
    &:before {
      filter: invert(1);
      background-color: rgb(24, 24, 38);
      border-radius: ${({theme:e})=>e.borderRadius};
    }
  }
`,Mt=({name:e,description:t,intlLabel:n,required:a,onChange:s,value:f,disabled:p,attribute:E,labelAction:x,placeholder:v,error:d})=>{const{formatMessage:i}=De.useIntl(),{config:m}=Ct();return k.jsxRuntimeExports.jsx(k.jsxRuntimeExports.Fragment,{children:k.jsxRuntimeExports.jsx(Lt,{className:d!==null?"error":null,children:m?k.jsxRuntimeExports.jsx(B.Field,{id:e,name:e,hint:t&&i(t),required:a,error:d,children:k.jsxRuntimeExports.jsxs(B.Stack,{spacing:1,children:[k.jsxRuntimeExports.jsx(B.FieldLabel,{action:x,required:a,style:{display:"inline-flex"},children:i(n)}),k.jsxRuntimeExports.jsx(kt,{intlLabel:n,onChange:s,attribute:E,name:e,description:t,disabled:p,error:d,labelAction:x,required:a,value:f,placeholder:v,config:m}),k.jsxRuntimeExports.jsx(B.FieldHint,{}),k.jsxRuntimeExports.jsx(B.FieldError,{})]})}):null})})};exports.Editorjs=Mt;
//# sourceMappingURL=Editorjs-3d97b186.js.map
